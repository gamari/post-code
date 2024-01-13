"use server";

import { CookieOptions, createServerClient } from '@supabase/ssr'
import { createClient } from '@supabase/supabase-js';
import { ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export const getAdminClient = (cookie?: ReturnType<typeof cookies>) => {
    let cookieStore: ReadonlyRequestCookies;
    if (cookie) {
        cookieStore = cookie
    } else {
        cookieStore = cookies()
    }

    return createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_KEY!,
        {
            auth: {
                autoRefreshToken: false,
                persistSession: false
            }
        }
    )
}