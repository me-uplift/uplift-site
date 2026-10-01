export interface FooterProps {
  /** Navigate handler, called with a page key. */
  onNavigate?: (page: string) => void;
}

/** Footer — brand column, link columns, social icons, and bottom legal bar. */
export function Footer(props: FooterProps): JSX.Element;
