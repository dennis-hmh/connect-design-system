import React from 'react';
import Markdown from 'markdown-to-jsx';
import ChangelogContent from './ChangeLog.md';

export default {
  title: 'Changelog',
  component: ChangelogContent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const ChangeLog: React.FC = () => {
  return <Markdown>{ChangelogContent}</Markdown>;
};
