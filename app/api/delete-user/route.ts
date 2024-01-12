import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { getServerClient } from '@/src/libs/externals/supabase/admin-client'
import { actionGetAuthUser } from '@/src/actions/users'


export async function POST(request: Request) {
    const serverClient = getServerClient();
    const authUser = await actionGetAuthUser();

    if (!authUser) {
        return NextResponse.json({ message: "error" }, { status: 500 })
    }

    const { error: dbError } = await serverClient.from("users").delete().match({ id: authUser?.id });

    if (dbError) {
        return NextResponse.json({ message: "error" }, { status: 500 })
    }

    const adminClient = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_KEY!,
    )
    const { error } = await adminClient.auth.admin.deleteUser(authUser?.id);

    if (error) {
        return NextResponse.json({ message: "error" }, { status: 500 })
    }

    return NextResponse.json({ message: "success" })
}