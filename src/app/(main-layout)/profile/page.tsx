'use client';

import React from 'react';
import Cookies from 'js-cookie';
import { useQuery } from '@tanstack/react-query';
import { whoIAmAPI } from '@/services/auth';

const Profile = () => {
  // console.log('ck:', ck);
  // Cookies.set('name', 'John');
  // console.log('ck2:', Cookies.get('name'));
  // const result = await wjoAmIcc;
  const result = useQuery({ queryKey: ['whoIAm'], queryFn: whoIAmAPI });
  return <div>{result?.data?.name}</div>;
};

export default Profile;
