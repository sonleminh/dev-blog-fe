'use client';

import React from 'react';
import Cookies from 'js-cookie';
import { useQuery } from '@tanstack/react-query';
import { whoIAmAPI } from '@/services/auth';

const Profile = () => {
  const ck = Cookies.get('sessionToken');
  // console.log('ck:', ck);
  // Cookies.set('name', 'John');
  // console.log('ck2:', Cookies.get('name'));
  // const result = useQuery({ queryKey: ['whoIAm'], queryFn: whoIAmAPI });
  // console.log(result.data?.name);
  // return <div>{result?.data?.name}</div>;
  return <div>ccc</div>;
};

export default Profile;
