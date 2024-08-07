import { MetadataRoute } from "next";
import { IArticlesResponse } from "@/interfaces/IArticle";
import { BASE_API_URL } from "@/constants/env";
import { getRequest } from "@/utils/fetch-client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const response: IArticlesResponse = await getRequest(`${BASE_API_URL}/article/?page=1&limit=20`) 
    const blogs = response.articleList.map(({_id}) => ({
        url: `${BASE_API_URL}/blog/${_id}`
    }))
    return [
        ...blogs
    ]
}