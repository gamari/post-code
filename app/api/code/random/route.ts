import { NextRequest, NextResponse } from 'next/server'
import { getServerClient } from '@/src/libs/externals/supabase/server-client'
import { fetchRandomCodeList } from '@/src/libs/externals/supabase/queries/codes'
import { createEqCondition } from '@/src/libs/externals/supabase/options'

export async function GET(request: NextRequest, response: NextResponse) {
    const client = getServerClient();
    const code = await fetchRandomCodeList(client, {
        limit: 1,
        eq: [
            createEqCondition("is_public", true)
        ],
    });
    console.log(code)

    return NextResponse.json(code)
}
