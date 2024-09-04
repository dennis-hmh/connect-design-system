declare namespace JSX {
  interface IntrinsicElements {
    'hmh-rive': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      desc?: string;
      hidePlayPause?: boolean;
      autoplay?: boolean;
      stateMachine?: string;
      'play-state'?: boolean;
    };
  }
}
