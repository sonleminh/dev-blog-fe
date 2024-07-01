export interface IArticleListResponse {
    data: {
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