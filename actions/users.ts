"use server";

import { createServerClient } from "@/libs/supabase/server";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export async function actionLogin(formData: FormData) {
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const cookieStore = cookies()
    const supabase = createServerClient(cookieStore)

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
    const supabase = createServerClient(cookieStore)

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