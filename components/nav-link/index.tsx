import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { Link } from "../link";

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  exact: PropTypes.bool,
};

NavLink.defaultProps = {
  exact: false,
};

type NavLinkProps = {
  exact: boolean;
  className: string;
  href: string;
  children: React.ReactNode;
};

export function NavLink({
  children,
  href,
  exact,
  className,
  ...props
}: NavLinkProps) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    className += " active";
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
