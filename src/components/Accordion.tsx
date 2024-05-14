import React from 'react';

export type AccordionProps<T extends React.ReactNode> = {
  data: { title: string; content: T }[];
  varients?: 'default' | 'divider' | 'color';
};

export function Accordion<T extends React.ReactNode>({
  data,
  varients = 'default',
}: AccordionProps<T>) {
  return (
    <ul className={`connect__accordion connect__accordion--${varients}`}>
      <ListItem data={data} />
    </ul>
  );
}

function ListItem<T extends React.ReactNode>({ data }: { data: { title: string; content: T }[] }) {
  return (
    <>
      {data.map((item, index) => (
        <li key={index}>
          <details>
            <summary>
              <h5>{item.title}</h5>
            </summary>
            <p>{item.content}</p>
          </details>
        </li>
      ))}
    </>
  );
}
