export interface IArticleListResponse {
    recent_articles:  IArticle[],
    FE_articles:  IArticle[],
    BE_articles:  IArticle[],
    trending_articles:  IArticle[],
    tags:  {
        value: string;
        label: string;
    }[],
    total: number
}

export interface IArticle {
    _id: string;
    title: string;
    summary: string;
    content: string;
    tags:string[];
    thumbnail_image: string
    createdAt: string
}