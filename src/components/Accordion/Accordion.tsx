import React from 'react';
import { GradeBand } from 'src/enum/gradeband';

export type AccordionProps = {
  data: { title: string; content: React.ReactNode }[];
  variants?: 'default' | 'divider' | 'color';
  dataTestId?: string;
  gradeBand?: GradeBand;
};

export function Accordion({ data, variants = 'default', dataTestId }: AccordionProps) {
  return (
    <ul
      className={`connect__accordion connect__accordion--${variants} connect__list`}
      data-testid={dataTestId}
    >
      <ListItem data={data} />
    </ul>
  );
}

// can we add Typography rather than h5?
function ListItem<T extends React.ReactNode>({ data }: { data: { title: string; content: T }[] }) {
  return (
    <>
      {data.map((item, index) => (
        <li className="connect__list-item" key={index}>
          <details className="connect__details">
            <summary className="connect__summary">
              <h5>{item.title}</h5>
            </summary>
            <p>{item.content}</p>
          </details>
        </li>
      ))}
    </>
  );
}
