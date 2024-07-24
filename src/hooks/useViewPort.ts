import { Breakpoint } from '@/constants/break-point';
import { useMediaQuery } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
// import { LayoutContext } from '@pages/_app';

export const useViewport = () => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<Breakpoint>(
      );
//   const { isMobile: isMobileUA } = useContext(LayoutContext);

  const isMobile = useMediaQuery( `(max-width: ${Breakpoint.Tablet - 1}px)` ); // !!!!!!!!!!!!!!!!!!
  const isDesktop = useMediaQuery(
  `(min-width: ${Breakpoint.Desktop}px) and
  (max-width: ${Breakpoint.LargeDesktop - 1}px)`);
  const isLargeDesktop = useMediaQuery(`(min-width: ${Breakpoint.LargeDesktop}px)`);

  useEffect(() => {
    if (isMobile) setCurrentBreakpoint(Breakpoint.Mobile);
    else if (isDesktop) setCurrentBreakpoint(Breakpoint.Desktop);
    else if (isLargeDesktop) setCurrentBreakpoint(Breakpoint.LargeDesktop);
  }, [isMobile, isDesktop, isLargeDesktop]);

  return { width: currentBreakpoint };
};