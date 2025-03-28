import React, { memo, ReactNode } from 'react';
import cn from 'classnames';

import { SemanticColorToken } from '../../utils/new-colors';
import { TableRow as BaseTableRow } from './TableRow';
import { TableCell as BaseTableCell } from './TableCell';

type DataSourceItem = { id: string } & Record<string, any>;

type ColumnValueGetter<R extends DataSourceItem = DataSourceItem, V = any, TValue = any> = (
  value: TValue,
  row: R,
  column: ColumnType<R, V>,
) => V;

type RenderCell<R extends DataSourceItem = DataSourceItem, V = any> = (props: {
  column: ColumnType<R, V>;
  value: V | undefined;
}) => ReactNode;

type RenderHeader<R extends DataSourceItem = DataSourceItem, V = any> = (props: {
  column: ColumnType<R, V>;
}) => ReactNode;

export type ColumnType<R extends DataSourceItem = DataSourceItem, V = any> = {
  field: string;
  headerName?: string;
  hidden?: boolean;
  renderCell?: RenderCell<R, V>;
  renderHeader?: RenderHeader<R, V>;
  rowScope?: 'row' | 'rowgroup';
  valueGetter?: ColumnValueGetter<R, V>;
};

export type TableProps<T extends DataSourceItem = DataSourceItem> = {
  subheaders?: string[];
  columns?: ColumnType<T>[];
  rows?: T[];
  caption?: string;
  colgroup?: boolean;
  scrolling?: boolean;
  stickyHeader?: boolean;
  className?: string;
  dataTestId?: string;
  theme?: SemanticColorToken;
};

function byShownColumn<T extends DataSourceItem>({ hidden = false }: ColumnType<T>) {
  return !hidden;
}

function TableCell<T extends DataSourceItem, V = any>(props: {
  column: ColumnType<T, V>;
  value: V;
}) {
  const CustomRenderCell = props.column.renderCell;
  const cellContent = CustomRenderCell ? <CustomRenderCell {...props} /> : <>{props.value}</>;

  return (
    <BaseTableCell data-heading={props.column.headerName} scope={props.column.rowScope}>
      {cellContent}
    </BaseTableCell>
  );
}
const MemoTableCell = memo(TableCell) as typeof TableCell;

type TableRowProps<T extends DataSourceItem> = { columns: ColumnType<T>[]; row: T };
function TableRow<T extends DataSourceItem>({ columns, row }: TableRowProps<T>) {
  const toTableCell = (column: ColumnType<T>) => {
    const currentValue = row[column.field];
    const value = column.valueGetter?.(currentValue, row, column) ?? currentValue;
    return <MemoTableCell key={`${row.id}-${column.field}`} column={column} value={value} />;
  };

  const cells = columns.filter(byShownColumn).map(toTableCell);
  return <BaseTableRow key={row.id}>{cells}</BaseTableRow>;
}
const MemoTableRow = memo(TableRow) as typeof TableRow;

function TableHeadCell<R extends DataSourceItem = DataSourceItem, V = any>(props: {
  column: ColumnType<R, V>;
}) {
  const CustomRenderHeader = props.column.renderHeader;
  const headerContent = CustomRenderHeader ? (
    <CustomRenderHeader column={props.column} />
  ) : (
    <>{props.column.headerName}</>
  );

  return <BaseTableCell scope="col">{headerContent}</BaseTableCell>;
}

function TableHead<T extends DataSourceItem>({
  columns = [],
  subheaders = [],
}: Pick<TableProps<T>, 'columns' | 'subheaders'>) {
  const toHeaderColumn = (column: ColumnType<T>) => (
    <TableHeadCell key={`header-${column.field}`} column={column} />
  );
  const headerColumns = columns.filter(byShownColumn).map(toHeaderColumn);

  return (
    <thead>
      <BaseTableRow>
        {headerColumns}
        {subheaders.map((subheader, subheaderIndex) => (
          <td className="subheader" key={subheaderIndex[subheaderIndex]}>
            {subheader}
          </td>
        ))}
      </BaseTableRow>
    </thead>
  );
}

function TableBody<T extends DataSourceItem>({
  columns = [],
  rows = [],
}: Pick<TableProps<T>, 'columns' | 'rows'>) {
  const toTableRow = (row: T) => <MemoTableRow key={row.id} columns={columns} row={row} />;
  const tableRows = rows.map(toTableRow);

  return <tbody>{tableRows}</tbody>;
}

export function Table<T extends DataSourceItem = DataSourceItem>({
  subheaders,
  columns,
  rows = [],
  caption,
  theme,
  colgroup = true,
  scrolling = true,
  stickyHeader,
  className,
  dataTestId,
}: TableProps<T>) {
  const classNames = cn(
    'connect__table',
    { 'connect__table-scrolling': scrolling, 'connect__table-sticky-header': stickyHeader },
    className,
  );

  const themeColor = theme ? `var(--connect__${theme}-400)` : '';
  const themeColorSticky = stickyHeader && theme ? `var(--connect__${theme}-100)` : '';
  const tableStyle = {
    '--connect__table-theme-base': themeColor,
    '--connect__table-theme-base-sticky': themeColorSticky,
  } as React.CSSProperties;

  return (
    <div
      className="connect__table-wrapper"
      role="region"
      aria-labelledby={caption ? 'caption' : undefined}
      style={tableStyle}
    >
      <table className={classNames} data-testid={dataTestId}>
        {caption && (
          <caption id="caption" className="connect__table-caption">
            {caption}
          </caption>
        )}
        {colgroup && <colgroup>{columns?.map((column) => <col key={column.field} />)}</colgroup>}
        <TableHead columns={columns} subheaders={subheaders} />
        <TableBody columns={columns} rows={rows} />
      </table>
    </div>
  );
}
