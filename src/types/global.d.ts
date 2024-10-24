declare namespace JSX {
  interface IntrinsicElements {
    'hmh-rive': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      desc?: string;
      hidePlayPause?: boolean;
      autoplay?: boolean;
      stateMachine?: string;
      artboard?: string;
      'play-state'?: string;
      height?: boolean;
      contain?: boolean;
    };
  }
}
