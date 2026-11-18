import { useState, useEffect } from "react";

type BreakpointKey = 'xxl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';
type Breakpoints = Record<BreakpointKey, number>;
type ResponsiveValues<T> = Partial<Record<BreakpointKey, T>>;

const defaultBreakpoints: Breakpoints = {
  xxl: 1400,
  xl: 1200,
  lg: 992,
  md: 768,
  sm: 576,
  xs: 425,
  xxs: 375
};


const useWindowSize = (customBreakpoints: Partial<Breakpoints> = {}) => {

  const [screenWidth, setScreenWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const breakpoints: Breakpoints = { ...defaultBreakpoints, ...customBreakpoints };


  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const responsive = <T,>(generalValue: T, responsiveValues: ResponsiveValues<T> = {}): T => {

    let appliedValue = generalValue;
    
    for (const [breakpoint, value] of Object.entries(responsiveValues) as [BreakpointKey, T][]) {
      if (screenWidth >= breakpoints[breakpoint]) {
        appliedValue = value;
      }
    }

    return appliedValue;
  };

  return { screenWidth, breakpoints, responsive };
}


export default useWindowSize;