import React from 'react';
import { GradeBand } from '../../enum/gradeband';

export type ListProps = {
  data: { content: React.ReactNode }[];
  listType?: 'ordered' | 'unordered';
  variants?: 'none' | 'decimal' | 'circle' | 'disc' | 'roman' | 'square' | 'alpha';
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export const List: React.FC<ListProps> = ({
  data,
  listType = 'unordered',
  variants = 'none',
  dataTestId,
}) => {
  data = data || [];

  return listType === 'ordered' ? (
    <ol className={`connect__list connect__list-${variants}`} data-testid={dataTestId}>
      {data.map((item, index) => (
        <li key={index} className="connect__list-item">
          <div className="connect__list-content">{item.content}</div>
        </li>
      ))}
    </ol>
  ) : (
    <ul className={`connect__list connect__list-${variants}`} data-testid={dataTestId}>
      {data.map((item, index) => (
        <li key={index} className="connect__list-item">
          <div className="connect__list-content">{item.content}</div>
        </li>
      ))}
    </ul>
  );
};
