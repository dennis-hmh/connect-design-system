import React from 'react';
import { GradeBand } from '../../enum/gradeband';

export type ListProps = {
  data: { content: React.ReactNode }[];
  listType?: 'ordered' | 'unordered';
  variants?: 'none' | 'circle' | 'disc' | 'square' | 'alpha' | 'decimal' | 'roman';
  className?: string;
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const List: React.FC<ListProps> = ({
  data,
  listType = 'unordered',
  variants = '',
  className = '',
  dataTestId,
}) => {
  const variantClass = variants !== 'none' ? `connect__list-${variants}` : '';
  data = data || [];

  console.log('variants', variants);

  return listType === 'ordered' ? (
    <ol className={`connect__list ${variantClass} ${className}`} data-testid={dataTestId}>
      {data.map((item, index) => (
        <li key={index} className="connect__list-item">
          {item.content}
        </li>
      ))}
    </ol>
  ) : (
    <ul className={`connect__list  ${variantClass} ${className}`} data-testid={dataTestId}>
      {data.map((item, index) => (
        <li key={index} className="connect__list-item">
          {item.content}
        </li>
      ))}
    </ul>
  );
};
