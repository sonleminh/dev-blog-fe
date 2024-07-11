'use client';
import AppLink from '@/components/common/AppLink';
import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  Grid,
  InputAdornment,
  List,
  ListItem,
  SxProps,
  TextField,
  Theme,
  Typography,
} from '@mui/material';
import LayoutContainer from '../layout-container';
import HeaderLogo from './HeaderLogo';
// import { signOut, useSession } from 'next-auth/react';
import SkeletonImage from '@/components/common/SkeletonImage';
import { useSearchArticle } from '@/services/article';
import { truncateTextByLine } from '@/utils/css-helper.util';
import moment from 'moment';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { QueryKeys } from '@/components/constants/query-key';

const Header = () => {
  const queryClient = useQueryClient();

  const [searchValue, setSearchValue] = useState<string | null>();
  const [result, setResult] = useState<any>();
  const { data: searchResult, refetch } = useSearchArticle(
    searchValue as string
  );
  const [isOpen, setIsOpen] = useState(false);
  const searchResultBoxRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultBoxRef.current &&
        !searchResultBoxRef.current.contains(event.target as Node)
      ) {
        // setResult(null);
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  console.log('rs:', result);
  console.log('data:', searchResult);
  console.log('searchValue:', searchValue);

  const handleSearchChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // console.log('handleChange');
    console.log('searchValue?.length:', searchValue?.length);
    // if (searchValue?.length === 0) {
    //   console.log('clear');
    //   queryClient.removeQueries({ queryKey: [QueryKeys.ARTICLE] });
    //   setSearchValue(null);
    // } else {
    //   console.log('search');
    //   search(e.target.value);
    // }
    if (e.target.value) {
      console.log('search');
      search(e.target.value);
    } else {
      console.log('clear');
      queryClient.removeQueries({ queryKey: [QueryKeys.ARTICLE] });
      setSearchValue(null);
    }
  };

  function debounce<T extends (...args: any[]) => any>(cb: T, delay = 1000) {
    let timeout: ReturnType<typeof setTimeout>;
    return (...args: Parameters<T>): void => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  }

  const search = debounce((text: string) => {
    setSearchValue(text);
    // if (text.length === 0) {
    //   setResult(null);
    //   setIsOpen(false);
    // }
  });

  const handleBoxClick = () => {
    // setIsOpen(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  // console.log('isO:', isOpen);

  // useEffect(() => {
  //   if (searchResult && isOpen) {
  //     setIsOpen(true);
  //     setResult(searchResult);
  //   }
  // }, [searchResult, isOpen]);

  return (
    <>
      <LayoutContainer>
        <Box
          onClick={handleBoxClick}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
            // fontWeight: 600,
          }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <HeaderLogo />
            <List sx={MenuListStyle}>
              <ListItem>
                <AppLink href={'/'}>Blog</AppLink>
              </ListItem>
              <ListItem>
                <AppLink href={'/'}>Liên hệ</AppLink>
              </ListItem>
            </List>
          </Box>
          <Box
            ref={searchResultBoxRef}
            onClick={() => setIsOpen(true)}
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
            }}>
            <TextField
              variant='outlined'
              size='small'
              fullWidth
              name='username'
              placeholder='Search..'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              helperText={
                <Typography
                  component={'span'}
                  sx={{ fontSize: 13, color: 'red' }}></Typography>
              }
              inputRef={searchInputRef}
              onChange={(e) => handleSearchChange(e)}
              sx={{
                width: 120,
                mt: 6,
                borderRadius: 4,
                transition: 'width 0.3s ease',
                '& .MuiInputBase-root': {
                  width: '100%',
                },
                '&:focus-within': {
                  width: 300,
                },
              }}
            />
            {/* {isOpen && ( */}
            {searchResult && isOpen && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  zIndex: 69,
                  width: '100%',
                  bgcolor: '#fff',
                  boxShadow: 5,
                }}>
                <List>
                  {searchResult?.articleList.map((item: any) => (
                    <ListItem key={item._id}>
                      <Grid container spacing={1.5}>
                        <Grid item xs={3}>
                          <Box
                            sx={{
                              position: 'relative',
                              width: '100%',
                              height: 50,
                              borderRadius: '4px',
                              overflow: 'hidden',
                              '& img': {
                                objectFit: 'cover',
                              },
                            }}>
                            <SkeletonImage
                              src={item?.thumbnail_image}
                              alt={item?.title}
                              fill
                            />
                          </Box>
                        </Grid>
                        <Grid item xs={9}>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontWeight: 500,
                              lineHeight: '18px',
                              ...truncateTextByLine(2),
                            }}>
                            {item.title}
                          </Typography>
                          <Typography sx={{ fontSize: 11, color: '#767676' }}>
                            {moment(item?.createdAt).format('MMMM D, YYYY')}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </Box>
        </Box>
      </LayoutContainer>
    </>
  );
};

export default Header;

const MenuListStyle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  ml: 2,
  whiteSpace: 'nowrap',
  '& li': {
    position: 'relative',
    ':before': {
      position: 'absolute',
      content: '""',
      height: '3px',
      right: '0',
      bottom: '0',
      width: '100%',
      bgcolor: '#000',
      transition: 'transform .2s',
      transform: 'scaleX(0)',
      transformOrigin: 'top right',
    },
    ':hover': {
      ':before': {
        transform: 'scaleX(1)',
      },
    },
  },
};
