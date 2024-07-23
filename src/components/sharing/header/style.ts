import { SxProps, Theme } from "@mui/material";

export const HeaderStyle: SxProps<Theme> = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: {xs:60, lg:80},
    px: {xs: 1, sm: 0},
    '.header-logo': {
        'svg': {
            width: {xs: 100, lg: 130}
        }
    },
    '.header-search': {
        position: 'relative',
        display: {xs: 'none', lg:'flex'},
        alignItems: 'center',
        '> div': {
            width: {xs:100,lg:120},
            borderRadius: 4,
            transition: 'width 0.3s ease',
            '& .MuiInputBase-root': {
              width: '100%',
            },
            '&:focus-within': {
              width: 300,
            },
        }
    },
    '.mobile-btn': {
        display: {xs: 'block', lg: 'none'},
    },
    '.search-mobile': {
        display: {xs: 'block', lg:'none'}
    }
}

export const MenuListStyle: SxProps<Theme> = {
    display: {xs: 'none', lg:'flex'},
    alignItems: 'center',
    ml: { sm: 1,md:2},
    pb: 0,
    whiteSpace: 'nowrap',
    '& >li': {
      p: 0,
      mx: {lg:2},
      position: 'relative',
      '& >a': {
        pb: 1,
        fontSize: {lg: 16}
      },
      ':before': {
        position: 'absolute',
        content: '""',
        height: '3px',
        right: '0',
        bottom: '0',
        width: '100%',
        bgcolor: (theme) => (theme.palette.mode === 'light' ? '#000' : '#fff'),
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