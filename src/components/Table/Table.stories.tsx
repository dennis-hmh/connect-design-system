import React, { useRef, useState } from 'react';
import { Meta, StoryObj, StoryFn } from '@storybook/react';
import { Table, TableProps } from './Table';
import { InputText } from '../InputText/InputText';
import { Image } from '../Image/Image';
import { ConnectTheme } from '../ConnectTheme';
import { GradeBand } from '../../enum/gradeband';
import { Avatar } from '../Avatar/Avatar';
import presidentsRows from './presidents.json';
import { Typography } from '../Typography/Typography';

type TestRow = { id: string; c1: string; c2: string; c3: string; c4: string };

const meta: Meta<typeof Table> = {
  title: 'Content/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    gradeBand: { control: 'select', options: Object.values(GradeBand) },
  },
} as Meta;

export default meta;
type TableStory = TableProps<TestRow> & { gradeBand: GradeBand };
type Story = StoryObj<TableStory>;

const Template: StoryFn<TableStory> = ({ gradeBand, ...args }) => {
  const themeWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <ConnectTheme gradeBand={gradeBand} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>
        <Table {...args} />
      </div>
    </ConnectTheme>
  );
};

const createRowData = (row: string) => ({
  id: row,
  c1: `Row ${row} - Col 1`,
  c2: `Row ${row} - Col 2`,
  c3: `Row ${row} - Col 3`,
  c4: `Row ${row} - Col 4`,
});

function CustomCellRender({ value }) {
  const [checked, setChecked] = useState(false);

  return <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />;
}

const column1 = { field: 'c1', headerName: 'Header 1' };
const column2 = { field: 'c2', headerName: 'Header 2' };
const column3 = { field: 'c3', headerName: 'Header 3' };
const column4 = { field: 'c4', headerName: 'Header 4' };

const columns = [column1, column2, column3, column4];
const rows = [createRowData('1'), createRowData('2'), createRowData('3'), createRowData('4')];

export const Default: Story = Template.bind({});
Default.args = {
  gradeBand: GradeBand.G4_5,
  scrolling: true,
  stickyHeader: false,
  columns,
  rows,
  caption: '',
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
  columns: [{ rowScope: 'row', renderCell: CustomCellRender }, column2, column3, column4],
};

export const TableTheme = Template.bind({});
TableTheme.args = {
  ...Default.args,
  caption: 'Table Theme',
  theme: 'primary',
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  ...Default.args,
  caption: 'No Header',
  className: 'connect__table-no-thead',
};

export const MobileListView = Template.bind({});
MobileListView.args = {
  ...Default.args,
  caption: 'Mobile List View',
  scrolling: false,
};

MobileListView.parameters = {
  layout: 'fullscreen',
};

const fillInTheBlankColumns = [
  { field: 'question', headerName: 'Question' },
  { field: 'answer', headerName: 'Answer' },
];
const fillInTheBlackRows = [
  { id: 1, question: 'The capital of France is', answer: <InputText value="" /> },
  { id: 2, question: 'The capital of Germany is', answer: <InputText value="" /> },
  { id: 3, question: 'The capital of Italy is', answer: <InputText value="" /> },
  { id: 4, question: 'The capital of Japan is', answer: <InputText value="" /> },
];
export const FillInTheBlank = Template.bind({});

FillInTheBlank.args = {
  ...Default.args,
  columns: fillInTheBlankColumns,
  rows: fillInTheBlackRows,
  caption: 'Fill in the Blank',
};

const imageGalleryColumns = [
  { field: 'image', headerName: 'Image' },
  { field: 'description', headerName: 'Description' },
];
const imageGalleryRows = [
  { id: 1, image: <Image imageSrc="" altText="Placeholder Image" />, description: 'Image 1' },
  { id: 2, image: <Image imageSrc="" altText="Placeholder Image" />, description: 'Image 2' },
  { id: 3, image: <Image imageSrc="" altText="Placeholder Image" />, description: 'Image 3' },
  { id: 4, image: <Image imageSrc="" altText="Placeholder Image" />, description: 'Image 4' },
];

export const ImageGallery = Template.bind({});
ImageGallery.args = {
  ...Default.args,
  caption: 'Image Gallery',
  columns: imageGalleryColumns,
  rows: imageGalleryRows,
};

const getCombinedValue = (_, row) => {
  if (row.age <= 10) return '🧒';
  if (row.age <= 65) return '🧑';
  return '🧓';
};

function RenderAvatarValueCell({ value }) {
  return (
    <Avatar alt="avatar" backgroundColor="primary-light" size="xl">
      <Typography size="heading-md">{value}</Typography>
    </Avatar>
  );
}

function RenderAvatarValueHeader({ column }) {
  return <Typography>{column.headerName}</Typography>;
}

const personalInfoColumns = [
  { field: 'name', headerName: 'Name' },
  { field: 'age', headerName: 'Age' },
  {
    field: 'avatar',
    headerName: 'Avatar',
    valueGetter: getCombinedValue,
    renderCell: RenderAvatarValueCell,
    renderHeader: RenderAvatarValueHeader,
  },
  { field: 'email', headerName: 'Email' },
  { field: 'address', headerName: 'Address' },
  { field: 'phone', headerName: 'Phone Number' },
];

const personalInfoRows = [
  {
    id: 1,
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com',
    address: '123 Main St',
    phone: '555-1234',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 8,
    email: 'jane.smith@example.com',
    address: '456 Elm St',
    phone: '555-5678',
  },
  {
    id: 3,
    name: 'Alice Johnson',
    age: 35,
    email: 'alice.johnson@example.com',
    address: '789 Oak St',
    phone: '555-8765',
  },
  {
    id: 4,
    name: 'Bob Brown',
    age: 70,
    email: 'bob.bcoln@example.com',
    address: '101 Pine St',
    phone: '555-4321',
  },
  {
    id: 5,
    name: 'Charlie Davis',
    age: 10,
    email: 'charlie.davis@example.com',
    address: '202 Maple St',
    phone: '555-6789',
  },
];

export const personalInfo = Template.bind({});
personalInfo.args = {
  stickyHeader: false,
  columns: personalInfoColumns,
  rows: personalInfoRows,
  caption: 'Personal Information',
};

const productDataColumns = [
  { field: 'productId', headerName: 'Product ID' },
  { field: 'productName', headerName: 'Product Name' },
  { field: 'category', headerName: 'Category' },
  { field: 'price', headerName: 'Price' },
  { field: 'stockQuantity', headerName: 'Stock Quantity' },
  { field: 'supplier', headerName: 'Supplier' },
  { field: 'rating', headerName: 'Rating' },
];
const productDataRows = [
  {
    id: 1,
    productId: 'P001',
    productName: 'Laptop',
    category: 'Electronics',
    price: '$999.99',
    stockQuantity: '50',
    supplier: 'Tech Supplier Inc.',
    rating: '4.5',
  },
  {
    id: 2,
    productId: 'P002',
    productName: 'Smartphone',
    category: 'Electronics',
    price: '$699.99',
    stockQuantity: '150',
    supplier: 'Mobile Supplier Ltd.',
    rating: '4.7',
  },
  {
    id: 3,
    productId: 'P003',
    productName: 'Desk Chair',
    category: 'Furniture',
    price: '$89.99',
    stockQuantity: '200',
    supplier: 'Office Supplies Co.',
    rating: '4.2',
  },
  {
    id: 4,
    productId: 'P004',
    productName: 'Coffee Maker',
    category: 'Appliances',
    price: '$49.99',
    stockQuantity: '75',
    supplier: 'Home Goods LLC',
    rating: '4.3',
  },
  {
    id: 5,
    productId: 'P005',
    productName: 'Headphones',
    category: 'Electronics',
    price: '$199.99',
    stockQuantity: '120',
    supplier: 'Audio Supplier Inc.',
    rating: '4.6',
  },
  {
    id: 6,
    productId: 'P006',
    productName: 'Backpack',
    category: 'Accessories',
    price: '$39.99',
    stockQuantity: '300',
    supplier: 'Travel Gear Ltd.',
    rating: '4.4',
  },
  {
    id: 7,
    productId: 'P007',
    productName: 'Water Bottle',
    category: 'Accessories',
    price: '$19.99',
    stockQuantity: '500',
    supplier: 'Outdoor Supplies Co.',
    rating: '4.8',
  },
];
export const productData = Template.bind({});
productData.args = {
  stickyHeader: false,
  columns: productDataColumns,
  rows: productDataRows,
  caption: 'Product Data',
};

function VicePresidentCell({ cell }) {
  if (cell.length <= 1) return cell;

  const toListItem = (child: string) => <li key={child}>{child}</li>;
  const childrenList = cell.map(toListItem);

  return <ul>{childrenList}</ul>;
}

const presidentsColumns = [
  { field: 'name', headerName: 'Name' },
  { field: 'age', headerName: 'Age' },
  { field: 'party', headerName: 'Party' },
  { field: 'yearsInOffice', headerName: 'Years in Office' },
  { field: 'state', headerName: 'State' },
  { field: 'vicePresident', headerName: 'Vice President', render: VicePresidentCell },
];

export const Presidents = Template.bind({});
Presidents.args = {
  stickyHeader: true,
  columns: presidentsColumns,
  rows: presidentsRows,
  caption: 'Presidents of the United States',
};
