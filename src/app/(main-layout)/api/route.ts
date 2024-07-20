import { getRequest } from "@/utils/fetch-client";

export async function GET() {
const PUBLIC_URL = process.env.NEXT_PUBLIC_HOST;
    
    const data = await 
      getRequest(
        `https://dev-blog-be-production.up.railway.app/admin/api/article?find_option=HOME`
      )
    return Response.json({ data }) 
  }