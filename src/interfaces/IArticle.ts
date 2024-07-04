export interface IArticleListResponse {
    articles: {
        articleList: IArticle[],
        total: number
    },
    feArticles: {
        articleList: IArticle[],
        total: number
    },
    beArticles: {
        articleList: IArticle[],
        total: number
    }
}

export interface IArticle {
    _id: string;
    title: string;
    summary: string;
    content: string;
    tags:string[];
    thumbnail_image: string
}