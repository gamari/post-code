import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { JSDOM } from 'jsdom'
import { NextRequest, NextResponse } from 'next/server'
import { getServerClient } from '@/src/libs/externals/supabase/server-client'
import { fetchRandomCodeList } from '@/src/libs/externals/supabase/queries/codes'

export async function GET(request: NextRequest, response: NextResponse) {
    const client = getServerClient();
    const code = await fetchRandomCodeList(client, {
        limit: 1
    });
    console.log(code)

    return NextResponse.json(code)
}
