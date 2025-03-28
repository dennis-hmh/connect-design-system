import { type PropsWithChildren } from 'react';

export type TableRowProps = PropsWithChildren;

export function TableRow({ children }: TableRowProps) {
  return <tr>{children}</tr>;
}
