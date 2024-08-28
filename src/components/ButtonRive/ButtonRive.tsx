import React from 'react';
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
}

export const ButtonRive: React.FC<ButtonRiveProps> = ({
    primary = true,
    animSrc,
    animDesc,
    stateMachine = 'State Machine 1',
    buttonText,
}) => {
    return (
        <Button primary={primary} additionalClass='connect__button--rive'>
            <Typography element="p">{buttonText}</Typography>
            <hmh-rive src={animSrc} desc={animDesc} hidePlayPause stateMachine={stateMachine}></hmh-rive>
        </Button>
    )
}