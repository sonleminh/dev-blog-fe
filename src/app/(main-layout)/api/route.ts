import { getRequest } from "@/utils/fetch-client";

export const fetchCache = 'auto'

export async function GET() {
    const data = await getRequest(
      `http://localhost:8080/admin/api/article`
    
    );
    return Response.json({data}) 
  }