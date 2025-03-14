import React from 'react';
import { SemanticColorToken } from '../../utils/new-colors';
import { GradeBand } from '../../enum/gradeband';

export type TableProps = {
  headers?: string[];
  subheaders?: string[];
  cells: string[][];
  theme?: SemanticColorToken;
  caption?: string;
  colgroup?: boolean;
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
  subheaders = [],
  cells = [],
  caption,
  theme,
  colgroup = true,
  scrolling = true,
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

  const themeColor = theme ? `var(--connect__color-${theme}-400)` : '';

  const themeColorSticky = stickyHeader && theme ? `var(--connect__color-${theme}-100)` : '';

  // eslint-disable-next-line no-console
  console.log(`themeColor: ${themeColor}`);

  return (
    <div
      className="connect__table-wrapper"
      role="region"
      aria-labelledby={caption ? 'caption' : undefined}
      style={
        {
          '--connect__table-theme-base': themeColor,
          '--connect__table-theme-base-sticky': themeColorSticky,
        } as React.CSSProperties
      }
    >
      <table className={classNames} data-testid={dataTestId}>
        {caption && (
          <caption id="caption" className="connect__table-caption">
            {caption}
          </caption>
        )}
        {colgroup && (
          <colgroup>
            {headers.map((_, index) => (
              <col key={index} />
            ))}
          </colgroup>
        )}
        <thead>
          <tr>
            {headers.map((header, headerIndex) => (
              <th scope={scopeCol ? 'scope=col' : undefined} key={headerIndex[headerIndex]}>
                {header}
              </th>
            ))}
            {subheaders.map((subheader, subheaderIndex) => (
              <td className="subheader" key={subheaderIndex[subheaderIndex]}>
                {subheader}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {cells.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 && scopeRow ? (
                  <th scope="row" data-heading={headers[cellIndex]} key={headers[cellIndex]}>
                    {cell}
                  </th>
                ) : (
                  <td data-heading={headers[cellIndex]} key={headers[cellIndex]}>
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
