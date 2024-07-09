import { getRequest } from "@/utils/fetch-client";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest, {params}: {
    params: { tag: string}
}) {
    const data = await getRequest(`http://localhost:8080/admin/api/article/tag/${params.tag}`)
    return Response.json({data})
}