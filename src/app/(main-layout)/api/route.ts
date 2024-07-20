import { getRequest } from "@/utils/fetch-client";

export async function GET() {
const PUBLIC_URL = process.env.NEXT_PUBLIC_HOST;
    
    const data = await 
      getRequest(
        `${PUBLIC_URL}article?find_option=HOME`
      )
    return Response.json({ data }) 
  }