import { cn } from '../../lib/cn';

export function SectionShell({ id, children, className, grid = false }) {
  return (
    <section id={id} className={cn('relative py-24 sm:py-32', className)}>
      {grid ? <div className="page-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden /> : null}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionLabel({ index, title, description }) {
  return (
    <div className="mb-12 max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-xs text-blaze">{index}</span>
        <span className="h-px flex-1 max-w-16 bg-[var(--color-border-strong)]" />
      </div>
      <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description ? <p className="mt-4 text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">{description}</p> : null}
    </div>
  );
}

export function PrimaryButton({ href, children, className }) {
  return (
    <a
      href={href}
      className={cn(
        'group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-blaze px-7 text-sm font-semibold text-zinc-950',
        'touch-manipulation transition-transform duration-150 ease-out active:scale-[0.98]',
        className
      )}
    >
      {children}
      <span aria-hidden className="transition-transform duration-150 ease-out group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}

export function GhostButton({ href, children, className }) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white/[0.03] px-7 text-sm font-semibold text-zinc-100',
        'touch-manipulation transition-[transform,background-color] duration-150 ease-out hover:bg-white/[0.06] active:scale-[0.98]',
        className
      )}
    >
      {children}
    </a>
  );
}
