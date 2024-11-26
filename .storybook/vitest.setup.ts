import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/react';
import * as previewAnnotations from './preview';
import React from 'react';

globalThis.React = React;

const annotations = setProjectAnnotations([previewAnnotations]);

beforeAll(annotations.beforeAll);
