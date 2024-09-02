import React, { useState, useRef, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Typography } from '../Typography/Typography';
import { GradeBand } from 'src/enum/gradeband';
import '@connect/hmh-rive';

export type ButtonRiveProps = {
    children?: React.ReactNode;
    primary?: boolean;
    clickHandler?: any;
    ariaLabel?: string;
    gradeBand?: GradeBand;
    animSrc: string;
    animDesc: string;
    stateMachine?: string;
    buttonText: string;
    loadingText?: string;
}

export const ButtonRive: React.FC<ButtonRiveProps> = ({
    primary = true,
    animSrc,
    animDesc,
    stateMachine = 'State Machine 1',
    buttonText,
    loadingText = 'Loading'
}) => {
    const riveRef = useRef<HTMLElement | null>(null); // Properly type the ref to HTMLElement
    const [isTypographyHidden, setTypographyHidden] = useState(false); // State to control Typography opacity
    const [playState, setPlayState] = useState<string | null>(null); // State to control playState
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false); // State to track reduced motion preference
    const [isLoading, setIsLoading] = useState(false); // State to track loading status

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

        // Update the state based on the media query result
        setPrefersReducedMotion(mediaQuery.matches);

        // Listen for changes in the reduced motion setting
        const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const handleClick = () => {
        // Change button text to "Loading"
        setIsLoading(true);

        // If reduced motion is enabled, do not play the animation or hide the Typography
        if (prefersReducedMotion) {
            setTypographyHidden(false);
            setPlayState(null);
        } else {
            setTypographyHidden(true); // Set opacity of Typography to 0
            setPlayState('playing'); // Set playState to 'playing'
        }
    };

    useEffect(() => {
        if (riveRef.current && playState === 'playing') {
            // Dynamically set the playState prop on hmh-rive element
            riveRef.current.setAttribute('play-state', 'playing');
        }
    }, [playState]);

    return (
        <Button primary={primary} additionalClass='connect__button--rive' clickHandler={handleClick}>
            <div style={{ opacity: isTypographyHidden ? 0 : 1 }}>
                <Typography element="p">{isLoading ? loadingText : buttonText}</Typography> {/* Change button text to 'Loading' */}
            </div>
            <div style={{ opacity: isTypographyHidden ? 1 : 0 }}>
                <hmh-rive
                    ref={riveRef}
                    src={animSrc}
                    desc={animDesc}
                    autoplay={false}
                    hidePlayPause
                    stateMachine={stateMachine}
                    play-state={playState} // Set playState based on state
                ></hmh-rive>
            </div>
        </Button>
    );
};
