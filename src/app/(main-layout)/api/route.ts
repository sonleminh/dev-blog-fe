import { getRequest } from "@/utils/fetch-client";

export async function GET() {
    const data = await getRequest(
      `http://localhost:8080/admin/api/article`
    );

    return Response.json({data}) 
  }