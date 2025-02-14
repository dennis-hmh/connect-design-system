import React, { ReactElement, useEffect } from 'react';
import { GradeBand } from '../enum/gradeband';

const themeClassName = {
  [GradeBand.K_2]: 'connect__k2',
  [GradeBand.G2_3]: 'connect__g23',
  [GradeBand.G3_5]: 'connect__g35',
  [GradeBand.G4_5]: 'connect__g45',
  [GradeBand.G6_8]: 'connect__g68',
  [GradeBand.G9_12]: 'connect__g912',
  [GradeBand.Teach]: 'connect__teach',
};
const allClassNames = Object.values(themeClassName);

export function ConnectTheme({
  children,
  gradeBand,
  themeWrapperRef,
}: {
  children: ReactElement;
  gradeBand: GradeBand;
  themeWrapperRef: React.RefObject<HTMLElement>;
}) {
  useEffect(() => {
    themeWrapperRef?.current?.classList.remove(...allClassNames);
    themeWrapperRef?.current?.classList.add(themeClassName[gradeBand]);
  }, [gradeBand, themeWrapperRef]);

  return <>{children}</>;
}
