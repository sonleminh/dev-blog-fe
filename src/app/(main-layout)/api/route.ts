import { getRequest } from "@/utils/fetch-client";
import { BASE_API_URL } from "@/constants/env";

export async function GET() {
    try {
      const data = await 
      getRequest(
        `${BASE_API_URL}/article?find_option=HOME`
      )
    return Response.json({ data }) 
    } catch (error) {
      console.error('Error in GET route handler:', error);
      return Response.json({ error: 'Failed to fetch data' }, { status: 500 });
    }
  }