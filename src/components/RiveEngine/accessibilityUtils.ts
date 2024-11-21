import { useEffect, useState } from 'react';
  
/** From http://www.joshwcomeau.com/react/prefers-reduced-motion/ */
export function usePrefersReducedMotion(){
    const QUERY = '(prefers-reduced-motion: no-preference)';

    const [prefersReducedMotion, setPrefersReducedMotion] = useState(true);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(QUERY);

        setPrefersReducedMotion(!window.matchMedia(QUERY).matches);

        const listener = (event) => {
            setPrefersReducedMotion(!event.matches);
        }

        mediaQueryList.addEventListener('change', listener);

        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };
    }, []);

    return prefersReducedMotion;
}

export function usePrefersDarkMode(){
    const QUERY = '(prefers-color-scheme: dark)';

    const [prefersDarkMode, setPrefersDarkMode] = useState(true);

    useEffect(() => {
        const mediaQueryList = window.matchMedia(QUERY);

        setPrefersDarkMode(window.matchMedia(QUERY).matches);

        const listener = (event) => {
            setPrefersDarkMode(event.matches);
        }

        mediaQueryList.addEventListener('change', listener);

        return () => {
            mediaQueryList.removeEventListener('change', listener);
        };
    }, []);

    return prefersDarkMode;
}