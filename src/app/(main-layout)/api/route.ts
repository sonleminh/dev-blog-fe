import { getRequest } from "@/utils/fetch-client";
import { BASE_API_URL } from "@/constants/env";

export async function GET() {
    const data = await 
      getRequest(
        `${BASE_API_URL}/article?find_option=HOME`
      )
    return Response.json({ data }) 
  }