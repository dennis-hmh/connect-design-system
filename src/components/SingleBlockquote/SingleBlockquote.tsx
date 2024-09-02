import React from 'react';
import { Figure, FigureProps } from '../Figure/Figure';
import { Blockquote, BlockquoteProps } from '../Blockquote/Blockquote';

export type SingleBlockquoteProps = BlockquoteProps & FigureProps;

export const SingleBlockquote: React.FC<SingleBlockquoteProps> = ({
    children,
    caption,
    cite
}) => {
    return (
        <Figure caption={caption} cite={cite}>
            <Blockquote>{children}</Blockquote>
        </Figure>
    )
}