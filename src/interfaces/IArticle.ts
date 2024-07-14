export interface IArticlesResponse {
    articleList: IArticle[]
    tags:  {
        value: string;
        label: string;
    }[] 
    total: number
}

export interface IHomeArticlesResponse {
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

export interface IArticlesByTagResponse {
    articleList: IArticle[]
    tag:  {
        value: string;
        label: string;
    }
    total: number
}

export interface IArticle {
    _id: string;
    title: string;
    summary: string;
    content: string;
    tags: {value:string,label: string}[];
    thumbnail_image: string
    createdAt: string
}