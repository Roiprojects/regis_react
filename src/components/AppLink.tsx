import { Link as RouterLink } from "react-router-dom";
import type { AnchorHTMLAttributes, ReactNode } from "react";

// SPA link: client-side navigation for internal routes (React Router),
// plain <a> for external / mailto / tel links. Visual output is identical
// to the Next.js version.
export default function Link({
  href,
  children,
  ...rest
}: { href: string; children?: ReactNode } & Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href"
>) {
  const isExternal =
    /^(https?:)?\/\//.test(href) ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href === "#";

  if (isExternal) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} {...rest}>
      {children}
    </RouterLink>
  );
}
