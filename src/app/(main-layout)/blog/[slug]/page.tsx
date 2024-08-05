import LayoutContainer from '@/components/sharing/layout-container';
import { ArticleContent } from './components/article-content';

import { getArticleByIdAPI } from '@/services/article';

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
  return (
    <LayoutContainer>
      <ArticleContent data={data} relatedData={relatedData} />
    </LayoutContainer>
  );
};

export default ArticleDetail;
