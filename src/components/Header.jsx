import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/cn';
import { asset } from '../lib/asset';

import { easeOut } from '../lib/motion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#work', label: 'Work' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-[max(1rem,env(safe-area-inset-top))] sm:px-6">
        <div
          className={cn(
            'mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border px-4 py-3 transition-[background-color,border-color,box-shadow] duration-200 ease-out sm:px-5',
            scrolled
              ? 'border-[var(--color-border-strong)] bg-[var(--color-surface)]/85 shadow-[0_8px_40px_rgb(0_0_0/0.35)]'
              : 'border-[var(--color-border)] bg-[var(--color-surface)]/40'
          )}
        >
          <a href="#top" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <img
              src={asset('assets/logo.jpg')}
              alt=""
              width={36}
              height={36}
              className="size-9 shrink-0 rounded-full object-cover ring-1 ring-white/10"
            />
            <span className="min-w-0">
              <span className="block font-[family-name:var(--font-display)] text-sm font-semibold leading-none sm:text-base">
                Blaze
              </span>
              <span className="mt-0.5 block text-[0.65rem] text-zinc-500 sm:text-xs">Consultancy</span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-zinc-400 transition-colors duration-150 ease-out hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex min-h-10 items-center rounded-full bg-blaze px-5 text-sm font-semibold text-zinc-950 transition-transform duration-150 ease-out active:scale-[0.98]"
            >
              Let&apos;s talk
            </a>
          </nav>

          <button
            type="button"
            className="relative inline-flex size-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-[var(--color-border)] md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={cn('block h-0.5 w-5 bg-zinc-100 transition-transform duration-200', open && 'translate-y-2 rotate-45')} />
            <span className={cn('block h-0.5 w-5 bg-zinc-100 transition-opacity duration-200', open && 'opacity-0')} />
            <span className={cn('block h-0.5 w-5 bg-zinc-100 transition-transform duration-200', open && '-translate-y-2 -rotate-45')} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-zinc-950/90 pt-28 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: easeOut }}
          >
            <nav className="mx-auto flex max-w-lg flex-col gap-2 px-6" aria-label="Mobile">
              {[...links, { href: '#contact', label: "Let's talk" }].map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-card)] px-5 py-4 text-lg font-medium"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25, ease: easeOut }}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
