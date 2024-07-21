import { getRequest } from "@/utils/fetch-client";
import { NextRequest } from "next/server";
import { BASE_API_URL } from "@/constants/env";

export async function GET(request: NextRequest, {params}: {
    params: { tag: string}
}) {
    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get('page')
    const data = await getRequest(`${BASE_API_URL}/article/?page=${page}&limit=10`)
    return Response.json({data})
}