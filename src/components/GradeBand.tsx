import React, { useRef } from 'react';
import { ConnectTheme } from './ConnectTheme';
import { GradeBand } from 'src/enum/gradeband';

export function AppOrWidget() {
  const themeWrapperRef = useRef(null);

  return (
    <ConnectTheme gradeBand={GradeBand.G4_5} themeWrapperRef={themeWrapperRef}>
      <div ref={themeWrapperRef}>Content with connect components to be grade-banded</div>
    </ConnectTheme>
  );
}
