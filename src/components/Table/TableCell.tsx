import { type PropsWithChildren } from 'react';
// import {GridColDef} from '@mui/x-data-grid';

export type TableCellProps = PropsWithChildren<{
  scope?: 'row' | 'rowgroup' | 'col' | 'colgroup';
}>;

export function TableCell({ children, scope, ...rest }: TableCellProps) {
  const CellWrapper = scope ? 'th' : 'td';

  return (
    <CellWrapper scope={scope} {...rest}>
      {children}
    </CellWrapper>
  );
}
