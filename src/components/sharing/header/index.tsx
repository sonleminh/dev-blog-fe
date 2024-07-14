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
import SkeletonImage from '@/components/common/SkeletonImage';
import { useSearchArticle } from '@/services/article';
import { truncateTextByLine } from '@/utils/css-helper.util';
import moment from 'moment';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

const Header = () => {
  const [searchValue, setSearchValue] = useState<string | null>();
  const { data: searchResult, refetch } = useSearchArticle(
    searchValue as string
  );
  const [isOpen, setIsOpen] = useState(false);
  const searchResultBoxRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultBoxRef.current &&
        !searchResultBoxRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    search(e.target.value);
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
    setIsOpen(true);
  });

  const handleBoxClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
      setIsOpen(true);
    }
  };

  return (
    <>
      <LayoutContainer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 80,
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
            onClick={() => {
              handleBoxClick;
            }}
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
                  <InputAdornment position='start' onClick={handleBoxClick}>
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
              onClick={() => setIsOpen(true)}
              sx={{
                width: 120,
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
            {searchResult && isOpen && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '110%',
                  left: 0,
                  zIndex: 69,
                  width: '100%',
                  bgcolor: '#fff',
                  boxShadow: 5,
                }}>
                {searchResult?.articleList.length > 0 ? (
                  <List>
                    {searchResult?.articleList.map((item) => (
                      <ListItem
                        key={item._id}
                        onClick={() => {
                          setIsOpen(false);
                          setSearchValue('');
                          if (searchInputRef.current) {
                            searchInputRef.current.value = '';
                          }
                        }}>
                        <AppLink href={`/blog/${item._id}`}>
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
                              <Typography
                                sx={{ fontSize: 11, color: '#767676' }}>
                                {moment(item?.createdAt).format('MMMM D, YYYY')}
                              </Typography>
                            </Grid>
                          </Grid>
                        </AppLink>
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <Box
                    sx={{
                      p: '8px 0',
                      fontSize: 14,
                      fontStyle: 'italic',
                      textAlign: 'center',
                    }}>
                    No result
                  </Box>
                )}
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
