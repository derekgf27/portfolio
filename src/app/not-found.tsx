import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <p className="text-sm text-muted">404</p>
      <h1 className="mt-2 text-3xl font-semibold">Page not found</h1>
      <Link
        href="/"
        className="mt-6 text-sm text-accent transition-colors hover:text-accent-dim"
      >
        Return home
      </Link>
    </div>
  );
}
