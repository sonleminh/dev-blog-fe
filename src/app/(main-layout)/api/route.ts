import { BASE_API_URL } from "@/constants/env";
import { getRequest } from "@/utils/fetch-client";

export async function GET() {
  if (!BASE_API_URL) {
    return;
  }
    const data = await 
      getRequest(
        `${BASE_API_URL}/article?find_option=HOME`
      )
    return Response.json({ data }) 
  }