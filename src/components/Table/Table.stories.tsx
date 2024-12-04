import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Table, TableProps } from './Table';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Table> = {
  title: 'PoC/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          '🚧 **This componenent is currently a Work In Progress (WIP) and part of a Proof of Concept (PoC). It is not ready for production use.** 🚧',
      },
    },
  },
} as Meta;

export default meta;
type Story = StoryObj<typeof Table>;

const Template: StoryFn<TableProps> = (args) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Table {...args} />
      </div>
    </ConnectTheme>
  );
};

export const Default = Template.bind({});
Default.args = {
  scrolling: false,
  stickyHeader: false,
  headers: ['Header 1', 'Header 2', 'Header 3', 'Header 4'],
  cells: [
    ['Row 1 - Col 1', 'Row 1 - Col 2', 'Row 1 - Col 3', 'Row 1 - Col 4'],
    ['Row 2 - Col 1', 'Row 2 - Col 2', 'Row 2 - Col 3', 'Row 2 - Col 4'],
    ['Row 3 - Col 1', 'Row 3 - Col 2', 'Row 3 - Col 3', 'Row 3 - Col 4'],
    ['Row 4 - Col 1', 'Row 4 - Col 2', 'Row 4 - Col 3', 'Row 4 - Col 4'],
    ['Row 5 - Col 1', 'Row 5 - Col 2', 'Row 5 - Col 3', 'Row 5 - Col 4'],
  ],
  caption: '',
  gradeBand: GradeBand.G4_5,
};

export const Caption = Template.bind({});
Caption.args = {
  ...Default.args,
  caption: 'Table Caption',
};

export const ScopeRow = Template.bind({});
ScopeRow.args = {
  ...Default.args,
  caption: 'Scope Row',
  scopeRow: true,
  scopeCol: false,
  headers: ['', 'Header 2', 'Header 3', 'Header 4'],
  cells: [
    ['Header 1 - Col 1', 'Row 1 - Col 2', 'Row 1 - Col 3', 'Row 1 - Col 4'],
    ['Header 2 - Col 1', 'Row 2 - Col 2', 'Row 2 - Col 3', 'Row 2 - Col 4'],
    ['Header 3 - Col 1', 'Row 3 - Col 2', 'Row 3 - Col 3', 'Row 3 - Col 4'],
    ['Header 4 - Col 1', 'Row 4 - Col 2', 'Row 4 - Col 3', 'Row 4 - Col 4'],
    ['Header 5 - Col 1', 'Row 5 - Col 2', 'Row 5 - Col 3', 'Row 5 - Col 4'],
  ],
};

export const personalInfo = Template.bind({});
personalInfo.args = {
  scrolling: false,
  stickyHeader: false,
  headers: ['Name', 'Age', 'Email', 'Address', 'Phone Number'],
  cells: [
    ['John Doe', '30', 'john.doe@example.com', '123 Main St', '555-1234'],
    ['Jane Smith', '25', 'jane.smith@example.com', '456 Elm St', '555-5678'],
    ['Alice Johnson', '35', 'alice.johnson@example.com', '789 Oak St', '555-8765'],
    ['Bob Brown', '40', 'bob.bcoln@example.com', '101 Pine St', '555-4321'],
    ['Charlie Davis', '28', 'charlie.davis@example.com', '202 Maple St', '555-6789'],
  ],
  caption: 'Personal Information',
  gradeBand: GradeBand.G4_5,
};

export const productData = Template.bind({});
productData.args = {
  scrolling: false,
  stickyHeader: false,
  headers: [
    'Product ID',
    'Product Name',
    'Category',
    'Price',
    'Stock Quantity',
    'Supplier',
    'Rating',
  ],
  cells: [
    ['P001', 'Laptop', 'Electronics', '$999.99', '50', 'Tech Supplier Inc.', '4.5'],
    ['P002', 'Smartphone', 'Electronics', '$699.99', '150', 'Mobile Supplier Ltd.', '4.7'],
    ['P003', 'Desk Chair', 'Furniture', '$89.99', '200', 'Office Supplies Co.', '4.2'],
    ['P004', 'Coffee Maker', 'Appliances', '$49.99', '75', 'Home Goods LLC', '4.3'],
    ['P005', 'Headphones', 'Electronics', '$199.99', '120', 'Audio Supplier Inc.', '4.6'],
    ['P006', 'Backpack', 'Accessories', '$39.99', '300', 'Travel Gear Ltd.', '4.4'],
    ['P007', 'Water Bottle', 'Accessories', '$19.99', '500', 'Outdoor Supplies Co.', '4.8'],
  ],
  caption: 'Product Data',
  gradeBand: GradeBand.G4_5,
};

export const Presidents = Template.bind({});
Presidents.args = {
  scrolling: false,
  stickyHeader: true,
  headers: ['Name', 'Age', 'Party', 'Years in Office', 'State', 'Vice President'],
  cells: [
    ['George Washington', '57', 'None', '1789-1797', 'Virginia', 'John Adams'],
    ['John Adams', '61', 'Federalist', '1797-1801', 'Massachusetts', 'Thomas Jefferson'],
    [
      'Thomas Jefferson',
      '57',
      'Democratic-Republican',
      '1801-1809',
      'Virginia',
      'Aaron Burr, George Clinton',
    ],
    [
      'James Madison',
      '57',
      'Democratic-Republican',
      '1809-1817',
      'Virginia',
      'George Clinton, Elbridge Gerry',
    ],
    ['James Monroe', '58', 'Democratic-Republican', '1817-1825', 'Virginia', 'Daniel D. Tompkins'],
    [
      'John Quincy Adams',
      '57',
      'Democratic-Republican',
      '1825-1829',
      'Massachusetts',
      'John C. Calhoun',
    ],
    [
      'Andrew Jackson',
      '61',
      'Democratic',
      '1829-1837',
      'Tennessee',
      'John C. Calhoun, Martin Van Buren',
    ],
    ['Martin Van Buren', '54', 'Democratic', '1837-1841', 'New York', 'Richard Mentor Johnson'],
    ['William Henry Harrison', '68', 'Whig', '1841', 'Ohio', 'John Tyler'],
    ['John Tyler', '51', 'Whig', '1841-1845', 'Virginia', 'None'],
    ['James K. Polk', '49', 'Democratic', '1845-1849', 'Tennessee', 'George M. Dallas'],
    ['Zachary Taylor', '64', 'Whig', '1849-1850', 'Louisiana', 'Millard Fillmore'],
    ['Millard Fillmore', '50', 'Whig', '1850-1853', 'New York', 'None'],
    ['Franklin Pierce', '48', 'Democratic', '1853-1857', 'New Hampshire', 'William R. King'],
    ['James Buchanan', '65', 'Democratic', '1857-1861', 'Pennsylvania', 'John C. Breckinridge'],
    [
      'Abraham Lincoln',
      '52',
      'Republican',
      '1861-1865',
      'Illinois',
      'Hannibal Hamlin, Andrew Johnson',
    ],
    ['Andrew Johnson', '56', 'National Union', '1865-1869', 'Tennessee', 'None'],
    [
      'Ulysses S. Grant',
      '46',
      'Republican',
      '1869-1877',
      'Illinois',
      'Schuyler Colfax, Henry Wilson',
    ],
    ['Rutherford B. Hayes', '54', 'Republican', '1877-1881', 'Ohio', 'William A. Wheeler'],
    ['James A. Garfield', '49', 'Republican', '1881', 'Ohio', 'Chester A. Arthur'],
    ['Chester A. Arthur', '51', 'Republican', '1881-1885', 'New York', 'None'],
    ['Grover Cleveland', '47', 'Democratic', '1885-1889', 'New York', 'Thomas A. Hendricks'],
    ['Benjamin Harrison', '55', 'Republican', '1889-1893', 'Indiana', 'Levi P. Morton'],
    ['Grover Cleveland', '55', 'Democratic', '1893-1897', 'New York', 'Adlai E. Stevenson'],
    [
      'William McKinley',
      '54',
      'Republican',
      '1897-1901',
      'Ohio',
      'Garret A. Hobart, Theodore Roosevelt',
    ],
    ['Theodore Roosevelt', '42', 'Republican', '1901-1909', 'New York', 'Charles W. Fairbanks'],
    ['William Howard Taft', '51', 'Republican', '1909-1913', 'Ohio', 'James S. Sherman'],
    ['Woodrow Wilson', '56', 'Democratic', '1913-1921', 'New Jersey', 'Thomas R. Marshall'],
    ['Warren G. Harding', '55', 'Republican', '1921-1923', 'Ohio', 'Calvin Coolidge'],
    ['Calvin Coolidge', '51', 'Republican', '1923-1929', 'Massachusetts', 'Charles G. Dawes'],
    ['Herbert Hoover', '54', 'Republican', '1929-1933', 'California', 'Charles Curtis'],
    [
      'Franklin D. Roosevelt',
      '51',
      'Democratic',
      '1933-1945',
      'New York',
      'John Nance Garner, Henry A. Wallace, Harry S. Truman',
    ],
    ['Harry S. Truman', '60', 'Democratic', '1945-1953', 'Missouri', 'Alben W. Barkley'],
    ['Dwight D. Eisenhower', '62', 'Republican', '1953-1961', 'Kansas', 'Richard Nixon'],
    ['John F. Kennedy', '43', 'Democratic', '1961-1963', 'Massachusetts', 'Lyndon B. Johnson'],
    ['Lyndon B. Johnson', '55', 'Democratic', '1963-1969', 'Texas', 'Hubert Humphrey'],
    ['Richard Nixon', '56', 'Republican', '1969-1974', 'California', 'Spiro Agnew, Gerald Ford'],
    ['Gerald Ford', '61', 'Republican', '1974-1977', 'Michigan', 'Nelson Rockefeller'],
    ['Jimmy Carter', '52', 'Democratic', '1977-1981', 'Georgia', 'Walter Mondale'],
    ['Ronald Reagan', '69', 'Republican', '1981-1989', 'California', 'George H. W. Bush'],
    ['George H. W. Bush', '64', 'Republican', '1989-1993', 'Texas', 'Dan Quayle'],
    ['Bill Clinton', '46', 'Democratic', '1993-2001', 'Arkansas', 'Al Gore'],
    ['George W. Bush', '54', 'Republican', '2001-2009', 'Texas', 'Dick Cheney'],
    ['Barack Obama', '47', 'Democratic', '2009-2017', 'Illinois', 'Joe Biden'],
    ['Donald Trump', '70', 'Republican', '2017-2021', 'New York', 'Mike Pence'],
    ['Joe Biden', '78', 'Democratic', '2021-present', 'Delaware', 'Kamala Harris'],
  ],
  caption: 'Presidents of the United States',
  gradeBand: GradeBand.G4_5,
};
