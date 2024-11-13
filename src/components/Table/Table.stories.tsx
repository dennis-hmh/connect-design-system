import React, { useRef } from 'react';
import { Table, TableProps } from './Table';
import { Story, Meta } from '@storybook/react';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

export default {
  title: 'Layout/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} as Meta;

const Template = (args: TableProps) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Table {...args} />
      </div>
    </ConnectTheme>
  );
};

const headers = ['Header 1', 'Header 2', 'Header 3', 'Header 4'];
const rows = ['Row 1', 'Row 2', 'Row 3', 'Row 4'];
const columns = ['Column 1', 'Column 2', 'Column 3', 'Column 4'];

export const Default = Template.bind({});
Default.args = {
  headers: headers,
  rows: rows,
  columns: columns,
};
