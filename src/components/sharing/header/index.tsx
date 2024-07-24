'use client';

import { ChangeEvent, useEffect, useRef, useState } from 'react';

import SkeletonImage from '@/components/common/SkeletonImage';
import { MenuDropDown } from './components/menu-dropdown';
import AppLink from '@/components/common/AppLink';
import LayoutContainer from '../layout-container';

import { useGetArticleInitial, useSearchArticle } from '@/services/article';
import { truncateTextByLine } from '@/utils/css-helper.util';

import {
  Box,
  Button,
  Collapse,
  Drawer,
  Grid,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Modal,
  TextField,
  Typography,
  useTheme,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import { HeaderStyle, MenuListStyle, SearchModalStyle } from './style';
import HeaderLogo from './components/HeaderLogo';
import moment from 'moment';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Header = () => {
  const theme = useTheme();
  const [searchValue, setSearchValue] = useState<string | null>();
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { data: tagData } = useGetArticleInitial();
  const { data: searchResult } = useSearchArticle(searchValue as string);
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
        <Box sx={HeaderStyle}>
          <Box className='mobile-btn'>
            <MenuIcon onClick={() => setOpenMobileMenu(!openMobileMenu)} />
            <Drawer
              open={openMobileMenu}
              onClose={() => setOpenMobileMenu(!openMobileMenu)}>
              <Box sx={{ width: 200 }}>
                <Box
                  sx={{
                    mt: 2,
                    textAlign: 'center',
                    svg: {
                      width: 100,
                    },
                  }}>
                  <HeaderLogo />
                </Box>
                <List
                  sx={{
                    '> li': {
                      a: {
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: 15,
                        '>svg': {
                          mr: 1,
                        },
                      },
                      ':hover': {
                        bgcolor: '#dadada',
                      },
                    },
                  }}>
                  <ListItem>
                    <AppLink
                      href={'/blog'}
                      onClick={() => setOpenMobileMenu(!openMobileMenu)}>
                      <ArticleOutlinedIcon />
                      Blog
                    </AppLink>
                  </ListItem>
                  <ListItem onClick={() => setIsActive(!isActive)}>
                    <CodeOutlinedIcon sx={{ mr: 1 }} />
                    <ListItemText
                      primary={<>Lập trình</>}
                      sx={{ span: { fontSize: 15 } }}
                    />
                    {isActive ? (
                      <ExpandLess sx={{ mr: '0!important' }} />
                    ) : (
                      <ExpandMore sx={{ mr: '0!important' }} />
                    )}
                  </ListItem>
                  <Collapse in={isActive} timeout='auto' unmountOnExit>
                    <List sx={{ pt: 0, pl: 4 }}>
                      {tagData?.tags?.map((item) => (
                        <AppLink key={item.value} href={`/tag/${item?.value}`}>
                          <ListItem
                            onClick={() => {
                              setOpenMobileMenu(false);
                            }}>
                            <ListItemText
                              primary={item?.label}
                              sx={{
                                m: 0,
                                ['span']: {
                                  fontSize: 14,
                                  fontWeight: 500,
                                  textTransform: 'capitalize',
                                },
                              }}
                            />
                          </ListItem>
                        </AppLink>
                      ))}
                    </List>
                  </Collapse>
                  <ListItem>
                    <AppLink href={'/'}>
                      <EmailOutlinedIcon />
                      Liên hệ
                    </AppLink>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <Button
              component={AppLink}
              href='/'
              className='header-logo'
              sx={{
                p: 0,
                border:
                  theme.palette.mode === 'light' ? '' : '1px solid #696969',
              }}>
              <HeaderLogo />
            </Button>
            <List sx={MenuListStyle}>
              <ListItem>
                <AppLink href={'/blog'}>Blog</AppLink>
              </ListItem>
              <ListItem>
                <MenuDropDown data={tagData} />
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
            className='header-search'>
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
            />
            {searchResult && isOpen && (
              <Box
                sx={{
                  position: 'absolute',
                  top: '110%',
                  left: 0,
                  zIndex: 69,
                  width: '100%',
                  bgcolor: theme.palette.mode === 'light' ? '#fff' : '#000',
                  border: '1px solid #696969',
                  boxShadow: 5,
                }}>
                {searchResult?.articleList?.length > 0 ? (
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
                                  border: '1px solid #3d3d3d',
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
          <SearchIcon
            onClick={() => setOpenSearch(true)}
            className='search-mobile'
          />
          <Modal
            open={openSearch}
            onClose={() => setOpenSearch(false)}
            aria-labelledby='parent-modal-title'
            aria-describedby='parent-modal-description'
            closeAfterTransition>
            <Box sx={SearchModalStyle}>
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
              />
              {searchResult ? (
                <List sx={{ maxHeight: 300, overflow: 'auto' }}>
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
                                border: '1px solid #3d3d3d',
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
          </Modal>
        </Box>
      </LayoutContainer>
    </>
  );
};

export default Header;
