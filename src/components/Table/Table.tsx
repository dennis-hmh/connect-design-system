import React from 'react';

export type TableProps = {
  headers?: string[];
  columns?: string[];
  rows?: string[];
  cells?: string[];
  className?: string;
  dataTestId?: string;
};

export const Table: React.FC<TableProps> = ({
  headers,
  columns,
  rows,
  cells,
  className,
  dataTestId,
}) => {
  return (
    <table className={`connect__table ${className}`} data-testid={dataTestId}>
      {headers && (
        <thead>
          <tr>
            {headers.map((header, headerIndex) => (
              <th key={headerIndex}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{[`Col ${columnIndex} - ` + `Row ${rowIndex}`]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
