import { useEffect, useMemo, useRef, useState } from 'react';
import { Breakpoint, media, type MediaQuery } from '../constants/media';

const isBreakpoint = (value: unknown): value is Breakpoint =>
  typeof value === 'string' && value in Breakpoint;

function useMediaQueryEventListener<K extends keyof MediaQueryListEventMap>(
  eventName: K,
  handler: (e: MediaQueryListEventMap[K]) => void,
  element: MediaQueryList,
) {
  const savedHandler = useRef(handler);
  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const listener: typeof handler = (event) => savedHandler.current(event);

    element.addEventListener(eventName, listener);
    return () => element.removeEventListener(eventName, listener);
  }, [savedHandler]);
}

export function useMediaQuery(queryOrBreakpoint: MediaQuery | Breakpoint): boolean {
  const mediaQueryList = useMemo(() => {
    const query = isBreakpoint(queryOrBreakpoint) ? media.up(queryOrBreakpoint) : queryOrBreakpoint;
    return window?.matchMedia(query as unknown as string);
  }, [queryOrBreakpoint]);
  const [matches, setMatches] = useState(mediaQueryList.matches);

  const updateMatches = (event: MediaQueryListEvent) => setMatches(event.matches);
  useMediaQueryEventListener('change', updateMatches, mediaQueryList);

  return matches;
}
