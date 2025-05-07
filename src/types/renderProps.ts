import { ReactNode } from 'react';

export type RenderProp<P> = (props: P) => ReactNode;
export type OptionalRenderProp<P> = RenderProp<P> | ReactNode;
export type PropsWithOptionalRenderProp<Base, P> = Base & { children: OptionalRenderProp<P> };

export function isRenderProp<P>(children: OptionalRenderProp<P>): children is RenderProp<P> {
  return typeof children === 'function';
}
