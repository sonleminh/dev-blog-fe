import Sidebar from '@/components/_pages/trang-chu/sidebar';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HtmlRenderBox from '@/components/common/HtmlRenderBox';
import LayoutContainer from '@/components/sharing/layout-container';
import { RelatedArticle } from './components/related-article';

import { getArticleByIdAPI } from '@/services/article';

import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { Box, Grid, Typography } from '@mui/material';
import moment from 'moment';
import { TagItem } from './components/tag-item';
import { ArticleContent } from './components/article-content';

const ArticleDetail = async ({ params }: { params: { slug: string } }) => {
  const { data, relatedData } = await getArticleByIdAPI(params?.slug);
  // const breadcrumbsOptions = [
  //   { link: '/', label: 'HOME' },
  //   { link: `/blog/${data._id}`, label: data.title },
  // ];
  return (
    <LayoutContainer>
      <ArticleContent data={data} relatedData={relatedData} />
    </LayoutContainer>
  );
};

export default ArticleDetail;
