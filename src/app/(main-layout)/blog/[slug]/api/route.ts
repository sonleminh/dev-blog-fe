import { NextRequest } from "next/server";
import { getRequest, putRequest } from "@/utils/fetch-client";

export async function GET(request: NextRequest,{ params }: { params: { slug: string } }) {
        const [data,relatedData, _] = await Promise.all([
             getRequest(`http://localhost:8080/admin/api/article/${params.slug}`),
             getRequest(`http://localhost:8080/admin/api/article?page=1&limit=5`),
             putRequest(`http://localhost:8080/admin/api/article/${params.slug}/view`)
        ])
    return Response.json({data, relatedData}) 
}