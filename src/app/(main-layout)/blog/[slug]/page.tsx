import LayoutContainer from '@/components/sharing/layout-container';
import { ArticleContent } from './components/article-content';

import { getArticleByIdAPI, getArticleListAPI } from '@/services/article';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const response = await getArticleListAPI();
  return response.recent_articles.map(({ _id }) => _id);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const response = await getArticleByIdAPI(params?.slug);
  return {
    title: response.data.title,
    description: response.data.summary,
    openGraph: {
      images: [
        {
          url: response.data.thumbnail_image,
        },
      ],
    },
  };
}

const ArticleDetail = async ({ params }: { params: { slug: string } }) => {
  const { data, relatedData } = await getArticleByIdAPI(params?.slug);
  if (!data._id) {
    notFound();
  }
  return (
    <LayoutContainer>
      <ArticleContent data={data} relatedData={relatedData} />
    </LayoutContainer>
  );
};

export default ArticleDetail;
