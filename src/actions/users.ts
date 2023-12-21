"use server";

import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { fetchAuthUser, fetchUserById } from "@/src/libs/externals/supabase/queries/users";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

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
            data: { username },
            emailRedirectTo: `${origin}/auth/callback`,
        },
    })

    if (error) {
        console.log(error)
        return redirect('/register?error_status=9')
    }

    return redirect('/dashboard')
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

export const actionGetMySelf = async () => {
    const supabase = getServerClient();
    const authUser = await fetchAuthUser(supabase);

    if (!authUser) throw new Error("ログインしてください。");

    const user = await fetchUserById(authUser.id, supabase);

    return user;
}