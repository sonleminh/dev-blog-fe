'use client';

import { AccountCircle } from '@mui/icons-material';
import {
  Alert,
  Box,
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import HttpsIcon from '@mui/icons-material/Https';
import GoogleIcon from '@/assets/icon/google-icon.png';
import SkeletonImage from '@/components/common/SkeletonImage';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import AppLink from '@/components/common/AppLink';
// import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useFormik } from 'formik';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useSignInMutate } from '@/services/auth';
import { useSessionContext } from '@/contexts/SessionContext';
import { useAuthContext } from '@/contexts/AuthContext';

const Login = () => {
  const router = useRouter();
  // const { data, status } = useSession();
  const auth = useAuthContext();
  console.log('auth:', auth?.user);
  const { setSessionToken } = useSessionContext();
  const signinMutation = useSignInMutate();

  const [isVisible, setIsVisible] = useState(false);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      signinMutation.mutate(values);
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <Box sx={{ width: 420, p: '50px', boxShadow: 2, borderRadius: '10px' }}>
        <AppLink href={'/'} sx={{ mb: 1 }}>
          <KeyboardBackspaceIcon />
        </AppLink>
        <Typography
          sx={{
            width: 150,
            m: '0 auto 5px',
            fontSize: 24,
            fontWeight: 600,
            textAlign: 'center',
          }}>
          ĐĂNG NHẬP
        </Typography>
        <Box
          sx={{
            width: 120,
            height: 3,
            m: '0 auto 40px',
            bgcolor: '#000',
            borderRadius: 5,
          }}
        />
        <FormControl
          variant='standard'
          sx={{ position: 'relative', width: '100%' }}>
          <Input
            id='input-with-icon-adornment'
            startAdornment={
              <InputAdornment position='start'>
                <PersonOutlineIcon />
              </InputAdornment>
            }
            placeholder='Enter username'
            sx={{
              width: '100%',
              pb: 0.5,
              mb: 2,
            }}
            name='username'
            onChange={formik.handleChange}
            value={formik.values.username}
          />
        </FormControl>
        <FormControl variant='standard' sx={{ width: '100%', mb: 3 }}>
          <Input
            id='input-with-icon-adornment'
            startAdornment={
              <InputAdornment position='start'>
                <HttpsIcon />
              </InputAdornment>
            }
            placeholder='Enter password'
            sx={{
              width: '100%',
              pb: 0.5,
            }}
            type={isVisible ? '' : 'password'}
            name='password'
            onChange={formik.handleChange}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                formik.handleSubmit();
              }
            }}
            value={formik.values.password}
          />
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              right: 0,
              transform: 'translateY(-50%)',
              cursor: 'pointer',
            }}>
            {isVisible ? (
              <VisibilityIcon
                sx={{ fontSize: 18 }}
                onClick={() => setIsVisible(!isVisible)}
              />
            ) : (
              <VisibilityOffIcon
                sx={{ fontSize: 18 }}
                onClick={() => setIsVisible(!isVisible)}
              />
            )}
          </Box>
        </FormControl>
        <Button
          variant='contained'
          size='large'
          fullWidth
          sx={{ mb: 2 }}
          onClick={() => formik.handleSubmit()}>
          ĐĂNG NHẬP
        </Button>
        <Typography
          sx={{
            mb: 1,
            color: '#999',
            fontSize: 13,
            fontWeight: 600,
            textAlign: 'center',
          }}>
          HOẶC
        </Typography>
        {/* <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: '5px 0',
            border: '2px solid #cccccc',
            borderRadius: '4px',
            cursor: 'pointer',
            ':hover': {
              bgcolor: '#f4f4f4',
            },
          }}
          onClick={() => signIn('google', { callbackUrl: '/' })}>
          <Box
            sx={{
              position: 'relative',
              width: '30px',
              mr: 1,
              height: { xs: '30px', sm: '30px', md: '30px' },
              borderRadius: '8px',
              overflow: 'hidden',
              '& img': {
                objectFit: 'cover',
              },
            }}>
            <SkeletonImage src={GoogleIcon} alt='cc' fill />
          </Box>
          <Typography
            sx={{
              color: '#333',
              fontSize: 14,
              fontWeight: 500,
            }}>
            Continue with Google
          </Typography>
        </Box> */}
      </Box>
    </Box>
  );
};

export default Login;
