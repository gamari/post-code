"use server";

import { getServerClient } from "@/src/libs/externals/supabase/admin-client";
import { fetchAuthUser, fetchUserById } from "@/src/libs/externals/supabase/queries/users";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export async function actionLogin(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = getServerClient(cookieStore)

    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        return redirect('/login?message=Could not authenticate user')
    }

    return redirect('/dashboard')
}

export async function actionSignUp(formData: FormData) {
    const origin = headers().get('origin')
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = getServerClient(cookieStore)

    const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${origin}/auth/callback`,
        },
    })

    if (error) {
        return redirect('/login?message=Could not authenticate user')
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

    if (!authUser) throw new Error("User not found");

    const user = await fetchUserById(authUser.id, supabase);

    return user;
}