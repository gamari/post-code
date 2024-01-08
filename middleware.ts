import { NextResponse, type NextRequest } from 'next/server'
import { getMiddleClient } from './src/libs/externals/supabase/admin-client'

export async function middleware(request: NextRequest) {
  try {
    const { supabase, response } = getMiddleClient(request)

    // await supabase.auth.getSession()

    return response
  } catch (e) {
    console.error(e)
    return NextResponse.next({
      request: {
        headers: request.headers,
      },
    })
  }
}
