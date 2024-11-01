import { createContext } from 'react';
import { GradeBand } from '../enum/gradeband';

export const GradeBandContext = createContext<GradeBand | undefined>(undefined);
