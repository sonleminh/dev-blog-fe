'use client';
import { publicAPI } from '@/services/auth';
import { getRequest } from '@/utils/fetch-client';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const Profile = () => {
  const info = useQuery({ queryKey: ['public'], queryFn: publicAPI });

  return <div>public</div>;
};

export default Profile;
