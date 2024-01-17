"use server";

import { getServerClient } from "@/src/libs/externals/supabase/server-client";
import { fetchAuthUser, fetchUserByEmail, fetchUserById, fetchUserByUsername } from "@/src/libs/externals/supabase/queries/users";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

// Get
export const actionGetUserById = async (id: string) => {
    try {
        const supabase = getServerClient();
        const user = await fetchUserById(id, supabase);

        return user;
    } catch (error) {
        return null;
    }
}

export const actionGetAuthUser = async () => {
    try {
        const supabase = getServerClient();
        const authUser = await fetchAuthUser(supabase);

        return authUser;
    } catch (error) {
        return null;
    }
}

export const actionGetUserByUsername = async (username: string) => {
    const supabase = getServerClient();
    const user = await fetchUserByUsername(username, supabase);
    return user;
}

export const actionGetUserByEmail = async (email: string) => {
    const supabase = getServerClient();
    const user = await fetchUserByEmail(email, supabase);
    return user;
}

export const actionGetMySelf = async () => {
    const supabase = getServerClient();
    const authUser = await fetchAuthUser(supabase);

    if (!authUser) throw new Error("ログインしてください。");

    const user = await fetchUserById(authUser.id, supabase);

    return user;
}

// Login関係
export async function actionLogin(formData: FormData) {
    const supabase = getServerClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string
    console.log({ email, password })

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        console.log(error)
        return redirect('/login?error_status=9')
    }

    return redirect('/dashboard')
}

export async function actionLoginWithGoogle() {
    const supabase = getServerClient()

    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
                access_type: 'offline',
                prompt: 'consent',
            },
        },
    })

    if (error) return redirect('/login?error_status=9')

    return redirect('/dashboard')
}


// Reigster
export async function actionSignUp(formData: FormData) {
    const client = getServerClient()

    const origin = headers().get('origin')
    const username = formData.get('username') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const password2 = formData.get('password2') as string
    console.log({ username, email, password, password2 })

    if (password !== password2) {
        return redirect('/register?error_status=2')
    }

    if (password.length < 6) {
        return redirect('/register?error_status=3')
    }

    if (!username || !email || !password) {
        return redirect('/register?error_status=4')
    }

    const existsUsername = await actionGetUserByUsername(username);
    if (existsUsername) {
        return redirect('/register?error_status=1')
    }

    const { error } = await client.auth.signUp({
        email,
        password,
        options: {
            data: {
                name: username
            },
            emailRedirectTo: `${origin}/auth/callback`,
        },
    })

    if (error) {
        const { status, message } = error;
        console.log({ status, message })
        if (status == 422) {
            return redirect('/register?error_status=9')
        }
        if (message?.includes("already registered")) {
            return redirect('/register?error_status=1')
        }
        return redirect('/register?error_status=9')
    }

    return redirect('/dashboard')
}
