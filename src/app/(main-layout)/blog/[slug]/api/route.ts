import { NextRequest } from "next/server";
import { getRequest, putRequest } from "@/utils/fetch-client";
import { BASE_API_URL } from "@/constants/env";

export async function GET(request: NextRequest,{ params }: { params: { slug: string } }) {
        const [data,relatedData, _] = await Promise.all([
             getRequest(`${BASE_API_URL}/article/${params?.slug}`),
             getRequest(`${BASE_API_URL}/article?page=1&limit=5`),
             putRequest(`${BASE_API_URL}/article/${params?.slug}/view`)
        ])
    return Response.json({data, relatedData}) 
}