import React, { useRef } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Table, TableProps } from './Table';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';

const meta: Meta<typeof Table> = {
  title: 'Layout/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
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

export const WithCaption = Template.bind({});
WithCaption.args = {
  ...Default.args,
  caption: 'Table Caption',
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
  caption: 'PErsonal Information',
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
  headers: ['Name', 'Party', 'Years in Office', 'State', 'Vice President'],
  cells: [
    ['George Washington', 'None', '1789-1797', 'Virginia', 'John Adams'],
    ['John Adams', 'Federalist', '1797-1801', 'Massachusetts', 'Thomas Jefferson'],
    [
      'Thomas Jefferson',
      'Democratic-Republican',
      '1801-1809',
      'Virginia',
      'Aaron Burr, George Clinton',
    ],
    [
      'James Madison',
      'Democratic-Republican',
      '1809-1817',
      'Virginia',
      'George Clinton, Elbridge Gerry',
    ],
    ['James Monroe', 'Democratic-Republican', '1817-1825', 'Virginia', 'Daniel D. Tompkins'],
    ['John Quincy Adams', 'Democratic-Republican', '1825-1829', 'Massachusetts', 'John C. Calhoun'],
    ['Andrew Jackson', 'Democratic', '1829-1837', 'Tennessee', 'John C. Calhoun, Martin Van Buren'],
    ['Martin Van Buren', 'Democratic', '1837-1841', 'New York', 'Richard Mentor Johnson'],
    ['William Henry Harrison', 'Whig', '1841', 'Ohio', 'John Tyler'],
    ['John Tyler', 'Whig', '1841-1845', 'Virginia', 'None'],
    ['James K. Polk', 'Democratic', '1845-1849', 'Tennessee', 'George M. Dallas'],
    ['Zachary Taylor', 'Whig', '1849-1850', 'Louisiana', 'Millard Fillmore'],
    ['Millard Fillmore', 'Whig', '1850-1853', 'New York', 'None'],
    ['Franklin Pierce', 'Democratic', '1853-1857', 'New Hampshire', 'William R. King'],
    ['James Buchanan', 'Democratic', '1857-1861', 'Pennsylvania', 'John C. Breckinridge'],
    ['Abraham Lincoln', 'Republican', '1861-1865', 'Illinois', 'Hannibal Hamlin, Andrew Johnson'],
    ['Andrew Johnson', 'National Union', '1865-1869', 'Tennessee', 'None'],
    ['Ulysses S. Grant', 'Republican', '1869-1877', 'Illinois', 'Schuyler Colfax, Henry Wilson'],
    ['Rutherford B. Hayes', 'Republican', '1877-1881', 'Ohio', 'William A. Wheeler'],
    ['James A. Garfield', 'Republican', '1881', 'Ohio', 'Chester A. Arthur'],
    ['Chester A. Arthur', 'Republican', '1881-1885', 'New York', 'None'],
    ['Grover Cleveland', 'Democratic', '1885-1889', 'New York', 'Thomas A. Hendricks'],
    ['Benjamin Harrison', 'Republican', '1889-1893', 'Indiana', 'Levi P. Morton'],
    ['Grover Cleveland', 'Democratic', '1893-1897', 'New York', 'Adlai E. Stevenson'],
    ['William McKinley', 'Republican', '1897-1901', 'Ohio', 'Garret A. Hobart, Theodore Roosevelt'],
    ['Theodore Roosevelt', 'Republican', '1901-1909', 'New York', 'Charles W. Fairbanks'],
    ['William Howard Taft', 'Republican', '1909-1913', 'Ohio', 'James S. Sherman'],
    ['Woodrow Wilson', 'Democratic', '1913-1921', 'New Jersey', 'Thomas R. Marshall'],
    ['Warren G. Harding', 'Republican', '1921-1923', 'Ohio', 'Calvin Coolidge'],
    ['Calvin Coolidge', 'Republican', '1923-1929', 'Massachusetts', 'Charles G. Dawes'],
    ['Herbert Hoover', 'Republican', '1929-1933', 'California', 'Charles Curtis'],
    [
      'Franklin D. Roosevelt',
      'Democratic',
      '1933-1945',
      'New York',
      'John Nance Garner, Henry A. Wallace, Harry S. Truman',
    ],
    ['Harry S. Truman', 'Democratic', '1945-1953', 'Missouri', 'Alben W. Barkley'],
    ['Dwight D. Eisenhower', 'Republican', '1953-1961', 'Kansas', 'Richard Nixon'],
    ['John F. Kennedy', 'Democratic', '1961-1963', 'Massachusetts', 'Lyndon B. Johnson'],
    ['Lyndon B. Johnson', 'Democratic', '1963-1969', 'Texas', 'Hubert Humphrey'],
    ['Richard Nixon', 'Republican', '1969-1974', 'California', 'Spiro Agnew, Gerald Ford'],
    ['Gerald Ford', 'Republican', '1974-1977', 'Michigan', 'Nelson Rockefeller'],
    ['Jimmy Carter', 'Democratic', '1977-1981', 'Georgia', 'Walter Mondale'],
    ['Ronald Reagan', 'Republican', '1981-1989', 'California', 'George H. W. Bush'],
    ['George H. W. Bush', 'Republican', '1989-1993', 'Texas', 'Dan Quayle'],
    ['Bill Clinton', 'Democratic', '1993-2001', 'Arkansas', 'Al Gore'],
    ['George W. Bush', 'Republican', '2001-2009', 'Texas', 'Dick Cheney'],
    ['Barack Obama', 'Democratic', '2009-2017', 'Illinois', 'Joe Biden'],
    ['Donald Trump', 'Republican', '2017-2021', 'New York', 'Mike Pence'],
    ['Joe Biden', 'Democratic', '2021-present', 'Delaware', 'Kamala Harris'],
  ],
  caption: 'Presidents of the United States',
  gradeBand: GradeBand.G4_5,
};
