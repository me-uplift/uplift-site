export interface HeroProps {
  /** Navigate handler, called with a page key (e.g. 'pricing', 'work'). */
  onNavigate?: (page: string) => void;
}

/** Hero — full-viewport landing headline with gradient accent, CTAs, and stat row. */
export function Hero(props: HeroProps): JSX.Element;
