import { getRequest } from "@/utils/fetch-client";

export async function GET() {
    // const data = await getRequest(
    //   `http://localhost:8080/admin/api/article`
    // );
    const [articles, feArticles,beArticles] = await Promise.all([
      getRequest(
        `http://localhost:8080/admin/api/article`
      ),
      getRequest(
        `http://localhost:8080/admin/api/article?tag=front-end`
      ),
      getRequest(
        `http://localhost:8080/admin/api/article?tag=back-end`
      )
    ])
    return Response.json({articles, feArticles,beArticles}) 
  }