import { getRequest } from "@/utils/fetch-client";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, {params}: {
    params: { tag: string}
}) {
    const searchParams = request.nextUrl.searchParams
    const page = searchParams.get('page')
    const data = await getRequest(`http://localhost:8080/admin/api/article/?page=${page}&limit=10`)
    return Response.json({data})
}