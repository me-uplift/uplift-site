export interface NavProps {
  /** Currently active page key, used to highlight the matching link. */
  activePage?: string;
  /** Navigate handler, called with a page key. */
  onNavigate?: (page: string) => void;
}

/** Nav — fixed top navigation bar that gains a blurred background on scroll. */
export function Nav(props: NavProps): JSX.Element;
