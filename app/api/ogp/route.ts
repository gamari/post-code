import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { JSDOM } from 'jsdom'

export type OgData = {
    url: string
    siteName?: string
    title?: string
    description?: string
    image?: string
    type?: string
}

export async function GET(request: Request, response: Response) {
    const { searchParams } = new URL(request.url)
    const url = searchParams.get('url')

    if (!url) {
        return Response.json({}, { status: 400 })
    }

    const httpRes = await fetch(url)
    if (!httpRes.ok) {
        return Response.json({}, { status: 404 })
    }

    const resHtml = await httpRes.text()
    const jsdom = new JSDOM(resHtml)

    const og: OgData = { url }
    const metaTags = jsdom.window.document.getElementsByTagName('meta') as any;

    for (const metaTag of metaTags) {
        const property = metaTag.getAttribute('property')
        const content = metaTag.getAttribute('content')
        switch (property) {
            case 'og:site_name':
                og.siteName = content || undefined
                break
            case 'og:title':
                og.title = content || undefined
                break
            case 'og:description':
                og.description = content || undefined
                break
            case 'og:image':
                og.image = content || undefined
                break
            case 'og:type':
                og.type = content || undefined
                break
            default:
            // nop
        }
    }

    return Response.json(og)
}
