import { BASE_API_URL } from "@/constants/env";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: "/",
            disallow: []
        },
        sitemap: `${BASE_API_URL}/sitemap.xml`,
      }
}