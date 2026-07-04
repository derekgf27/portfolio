import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  external,
  className,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200",
    variant === "primary" &&
      "bg-foreground text-background hover:bg-foreground/90 hover:shadow-lg hover:shadow-white/5",
    variant === "secondary" &&
      "border border-border bg-surface-elevated text-foreground hover:border-foreground/20 hover:bg-surface",
    variant === "ghost" && "text-muted hover:text-foreground",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={styles}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={styles}>
      {children}
    </Link>
  );
}
