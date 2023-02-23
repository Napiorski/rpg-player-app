import * as React from "react";
import NextLink from "next/link";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  props?: any;
};

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <NextLink href={href}>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
