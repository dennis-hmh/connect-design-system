import React from 'react';
import { Figure } from '../Figure/Figure';
import { Image } from '../Image/Image';
import { FigCaption } from '../FigCaption/FigCaption';
import { GradeBand } from 'src/enum/gradeband';

export type SingleImageProps = {
    children?: React.ReactNode;
    imageSrc: string;
    altText: string;
    caption?: string;
    cite?: string;
    gradeBand?: GradeBand;
}

export const SingleImage: React.FC<SingleImageProps> = ({
    imageSrc,
    altText,
    caption,
    cite
}) => {
    return (
        <Figure>
            <Image imageSrc={imageSrc} altText={altText} />
            <FigCaption caption={caption} cite={cite} />
        </Figure>
    )
}