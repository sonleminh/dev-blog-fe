'use client';

import React, { useEffect } from 'react';
import {
  IArticle,
  IArticleByIdResponse,
  IArticlesResponse,
} from '@/interfaces/IArticle';
import { Box, Grid, Typography } from '@mui/material';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { TagItem } from '../tag-item';
import moment from 'moment';
import HtmlRenderBox from '@/components/common/HtmlRenderBox';
import Sidebar from '@/components/_pages/trang-chu/sidebar';
import { RelatedArticle } from '../related-article';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import * as gtag from '@/utils/gtag';

export const ArticleContent = ({
  data,
  relatedData,
}: {
  data: IArticle;
  relatedData: IArticlesResponse;
}) => {
  const breadcrumbsOptions = [
    { link: '/', label: 'HOME' },
    { link: `/blog/${data._id}`, label: data.title },
  ];

  useEffect(() => {
    gtag?.event('view_item', {
      content_type: 'BLOG',
      content_id: data._id,
      value: data.title,
    });
    console.log(data._id);
  }, [data._id, data.title]);

  return (
    <Box sx={{ p: '16px 0 28px' }}>
      <Grid container spacing={4}>
        <Grid
          item
          xs={12}
          sm={8}
          sx={{
            pre: {
              p: 2,
              bgcolor: '#000000',
              color: '#d0d5df',
              borderRadius: '4px',
              overflow: 'auto',
            },
          }}>
          <Box sx={{ mb: 3 }}>
            <Breadcrumbs options={breadcrumbsOptions} />
          </Box>
          <Typography
            variant='h3'
            sx={{ mb: 2, fontSize: 28, fontWeight: 700 }}>
            {data?.title}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              mb: 2,
            }}>
            {data?.tags?.map((item) => (
              <TagItem key={item.value} data={item} />
            ))}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mb: 3,
              color: '#696969',
            }}>
            <Typography sx={{ fontSize: 13 }}>
              {moment(data?.createdAt).format('MMMM D, YYYY')}
            </Typography>{' '}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <VisibilityOutlinedIcon sx={{ mr: 0.5, fontSize: 16 }} />{' '}
              <Typography sx={{ fontSize: 14 }}>{data?.views}</Typography>
            </Box>
          </Box>
          <HtmlRenderBox html={data?.content} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ position: 'sticky', top: '0', height: '100%' }}>
          <Sidebar />
        </Grid>
      </Grid>
      <Box sx={{ mt: 2 }}>
        <RelatedArticle data={relatedData?.articleList} />
      </Box>
    </Box>
  );
};
