import React from 'react';
import { GradeBand } from '../../enum/gradeband';

export type TableProps = {
  headers?: string[];
  cells: string[][];
  caption?: string;
  scrolling?: boolean;
  stickyHeader?: boolean;
  scopeCol?: boolean;
  scopeRow?: boolean;
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const Table: React.FC<TableProps> = ({
  headers = [],
  cells = [],
  caption,
  scrolling,
  stickyHeader,
  scopeCol,
  scopeRow,
  className,
  dataTestId,
}) => {
  const classNames = [
    'connect__table',
    scrolling && 'connect__table-scrolling',
    stickyHeader && 'connect__table-sticky-header',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className="connect__table-wrapper"
      role="region"
      aria-labelledby={caption ? 'caption' : undefined}
    >
      <table className={classNames} data-testid={dataTestId}>
        {caption && (
          <caption id="caption" className="connect__table-caption">
            {caption}
          </caption>
        )}
        <thead>
          <tr>
            {headers.map((header, headerIndex) => (
              <th scope={scopeCol ? 'scope=col' : undefined} key={headerIndex}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cells.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 && scopeRow ? (
                  <th scope="row" data-heading={headers[cellIndex]} key={cellIndex}>
                    {cell}
                  </th>
                ) : (
                  <td data-heading={headers[cellIndex]} key={cellIndex}>
                    {cell}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
