import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/cn';
import { asset } from '../lib/asset';
import { tapScale } from '../lib/motion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
  { href: '#contact', label: "Let's talk", cta: true },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ease-out',
        scrolled ? 'border-[var(--color-border)] bg-[var(--color-surface)]/90' : 'border-transparent bg-transparent'
      )}
    >
      <nav
        className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] sm:px-6"
        aria-label="Primary"
      >
        <a href="#top" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={asset('assets/logo.jpg')} alt="" width={40} height={40} className="size-10 shrink-0 rounded-full object-cover" />
          <span className="min-w-0 leading-tight">
            <span className="block font-[family-name:var(--font-display)] text-sm font-semibold uppercase sm:text-base">Blaze</span>
            <span className="block text-[0.65rem] text-zinc-400 sm:text-xs">Consultancy</span>
          </span>
        </a>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg border border-[var(--color-border)] sm:hidden"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Close' : 'Menu'}</span>
          <span className="flex flex-col gap-1.5">
            <span className={cn('block h-0.5 w-5 bg-zinc-100 transition-transform duration-200', open && 'translate-y-2 rotate-45')} />
            <span className={cn('block h-0.5 w-5 bg-zinc-100 transition-opacity duration-200', open && 'opacity-0')} />
            <span className={cn('block h-0.5 w-5 bg-zinc-100 transition-transform duration-200', open && '-translate-y-2 -rotate-45')} />
          </span>
        </button>

        <ul
          id="nav-menu"
          className={cn(
            'fixed inset-x-0 top-[4.25rem] flex flex-col gap-1 border-b border-[var(--color-border)] bg-[var(--color-surface)] p-4 sm:static sm:flex sm:flex-row sm:items-center sm:gap-6 sm:border-0 sm:bg-transparent sm:p-0',
            open ? 'visible opacity-100' : 'invisible opacity-0 sm:visible sm:opacity-100'
          )}
        >
          {links.map((link) => (
            <li key={link.href}>
              <motion.a
                href={link.href}
                className={cn(
                  'block rounded-lg px-3 py-3 text-sm font-medium transition-colors duration-150 ease-out sm:py-2',
                  link.cta
                    ? 'bg-blaze text-zinc-950 sm:px-4'
                    : 'text-zinc-300 hover:text-white active:text-white'
                )}
                onClick={() => setOpen(false)}
                {...tapScale}
              >
                {link.label}
              </motion.a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
