import { getRequest } from "@/utils/fetch-client";

export async function GET() {
// const PUBLIC_URL = process.env.NEXT_PUBLIC_HOST;
    
    const data = await 
      getRequest(
        `https://jsonplaceholder.typicode.com/users`
      )
    return Response.json({ data }) 
  }