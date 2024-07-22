import { NextRequest } from "next/server";
import { getRequest } from "@/utils/fetch-client";
import { BASE_API_URL } from "@/constants/env";

export async function GET(request: NextRequest, {params}: {
    params: { tag: string}
}) {
    try {
        const searchParams = request.nextUrl.searchParams
        const page = searchParams.get('page')
        const data = await getRequest(`${BASE_API_URL}/article/tag/${params.tag}?page=${page}&limit=10`)
        return Response.json({data})
    } catch (error) {
        console.error('Error in GET route handler:', error);
        return Response.json({ error: 'Failed to fetch articles by tag' }, { status: 500 });
    }
}