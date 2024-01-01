"use server";

import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { fetchAuthUser, fetchUserById } from "@/src/libs/externals/supabase/queries/users";
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
        console.log("actionGetAuthUser error");
        return null;
    }
}

export const actionGetMySelf = async () => {
    const supabase = getServerClient();
    const authUser = await fetchAuthUser(supabase);

    if (!authUser) throw new Error("ログインしてください。");

    const user = await fetchUserById(authUser.id, supabase);

    return user;
}

// Login関係
export async function actionLoginWithGoogle() {
    console.log("actionLoginWithGoogle");
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

    console.log("actionLoginWithGoogle error", error);

    if (error) {
        return redirect('/login?error_status=9')
    }

    return redirect('/dashboard')

}

export async function actionLogin(formData: FormData) {
    const supabase = getServerClient()

    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return redirect('/login?error_status=9')
    }

    return redirect('/dashboard')
}

export async function actionSignUp(formData: FormData) {
    const supabase = getServerClient()

    const origin = headers().get('origin')
    const username = formData.get('username') as string
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    const { error } = await supabase.auth.signUp({
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
        return redirect('/register?error_status=9')
    }

    return redirect('/dashboard')
}
