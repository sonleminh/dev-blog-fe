'use client';

import { getRequest } from '@/utils/fetch-client';
import { useState, useEffect } from 'react';

async function fetchArticles() {
  const result: { data: any } = await getRequest(
    `http://localhost:3000/tag/backend/api`,
    { cache: 'no-store', next: { revalidate: 0 } }
  );
  return result;
}

export default function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    async function getData() {
      const result = await fetchArticles();
    }
    getData();
  }, []);

  return <div>cc</div>;
}
