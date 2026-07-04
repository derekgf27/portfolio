import type { ProjectScreenshot } from "@/lib/projects";
import { cn } from "@/lib/utils";

type ScreenshotMockupProps = {
  label: string;
  variant: ProjectScreenshot["variant"];
  accent?: string;
  className?: string;
};

const variantStyles: Record<ProjectScreenshot["variant"], string> = {
  dashboard: "from-zinc-800/80 to-zinc-900",
  analytics: "from-blue-950/60 to-zinc-900",
  mobile: "from-zinc-800/60 to-zinc-950",
  admin: "from-violet-950/50 to-zinc-900",
  scheduling: "from-emerald-950/50 to-zinc-900",
};

export function ScreenshotMockup({
  label,
  variant,
  accent = "#22c55e",
  className,
}: ScreenshotMockupProps) {
  const isMobile = variant === "mobile";

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-border bg-surface-elevated",
        isMobile ? "mx-auto max-w-[220px]" : "w-full",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-zinc-600" />
        </div>
        <span className="ml-2 truncate text-xs text-muted">{label}</span>
      </div>

      <div
        className={cn(
          "relative bg-gradient-to-br p-4",
          variantStyles[variant],
          isMobile ? "aspect-[9/16]" : "aspect-[16/10]"
        )}
      >
        <div className="absolute inset-0 grid-bg opacity-40" />

        {variant === "analytics" && (
          <div className="relative grid h-full grid-cols-3 gap-2">
            <div className="col-span-2 space-y-2">
              <div className="h-8 rounded-lg bg-white/5" />
              <div className="flex h-24 items-end gap-1 rounded-lg bg-white/5 p-2">
                {[40, 65, 45, 80, 55, 70, 90].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{ height: `${h}%`, backgroundColor: `${accent}66` }}
                  />
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-16 rounded-lg bg-white/5" />
              <div className="h-16 rounded-lg bg-white/5" />
            </div>
          </div>
        )}

        {variant === "dashboard" && (
          <div className="relative grid h-full grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-lg bg-white/5 p-2">
                <div className="mb-2 h-2 w-8 rounded bg-white/10" />
                <div className="h-4 w-12 rounded bg-white/10" />
              </div>
            ))}
            <div className="col-span-3 rounded-lg bg-white/5" />
            <div className="rounded-lg bg-white/5" />
          </div>
        )}

        {variant === "scheduling" && (
          <div className="relative h-full space-y-2">
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="h-4 rounded bg-white/5 text-center text-[8px] text-white/30" />
              ))}
            </div>
            <div className="grid flex-1 grid-cols-7 gap-1">
              {Array.from({ length: 28 }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "aspect-square rounded bg-white/5",
                    [5, 12, 19].includes(i) && "ring-1"
                  )}
                  style={
                    [5, 12, 19].includes(i)
                      ? { boxShadow: `inset 0 0 0 1px ${accent}88` }
                      : undefined
                  }
                />
              ))}
            </div>
          </div>
        )}

        {variant === "admin" && (
          <div className="relative flex h-full gap-2">
            <div className="w-1/4 space-y-2 rounded-lg bg-white/5 p-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-3 rounded bg-white/10" />
              ))}
            </div>
            <div className="flex-1 space-y-2">
              <div className="h-8 rounded-lg bg-white/5" />
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="h-6 rounded bg-white/5" />
              ))}
            </div>
          </div>
        )}

        {variant === "mobile" && (
          <div className="relative mx-auto mt-4 w-[85%] space-y-3">
            <div className="h-6 rounded-lg bg-white/5" />
            <div className="h-20 rounded-xl bg-white/5" />
            <div className="h-20 rounded-xl bg-white/5" />
            <div
              className="h-10 rounded-xl"
              style={{ backgroundColor: `${accent}44` }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
