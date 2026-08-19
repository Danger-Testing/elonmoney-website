import Link from "next/link";
import type { ReactNode } from "react";

type ActionButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  size?: "compact" | "hero";
};

export default function ActionButton({
  children,
  className = "",
  href,
  size = "hero",
}: ActionButtonProps) {
  const classes = ["action-button", `action-button--${size}`, className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link className={classes} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}
