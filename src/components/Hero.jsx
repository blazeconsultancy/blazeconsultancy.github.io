import { motion, useReducedMotion } from 'motion/react';
import { asset } from '../lib/asset';
import { easeOut, fadeUp } from '../lib/motion';
import { GhostButton, PrimaryButton } from './ui/primitives';

const metrics = [
  { value: 'Full lifecycle', label: 'Design through operations' },
  { value: 'Embedded', label: 'Works inside your team' },
  { value: 'Built to ship', label: 'Outcomes over decks' },
];

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-dvh overflow-hidden pt-24 sm:pt-28" aria-label="Introduction">
      <div className="noise pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="page-grid pointer-events-none absolute inset-0 opacity-30" aria-hidden />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-12 lg:pb-20">
        <div className="relative z-10 lg:pb-8">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: easeOut }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-zinc-300"
          >
            <span className="size-1.5 rounded-full bg-blaze" />
            Ideas, technology, real impact
          </motion.div>

          <motion.h1
            className="max-w-[14ch] text-balance font-[family-name:var(--font-display)] text-[2.5rem] font-semibold leading-[1.02] sm:text-5xl lg:text-6xl xl:text-7xl"
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.05 }}
          >
            Your technology partner for{' '}
            <span className="text-blaze">what&apos;s next.</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg"
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.12 }}
          >
            From idea to production, we design, build, deploy, and keep systems running as an embedded extension of
            your team.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.18 }}
          >
            <PrimaryButton href="#contact">Start a conversation</PrimaryButton>
            <GhostButton href="#work">View selected work</GhostButton>
          </motion.div>

          <motion.ul
            className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-3"
            initial={reduceMotion ? false : 'hidden'}
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.55, ease: easeOut, delay: 0.24 }}
          >
            {metrics.map((item) => (
              <li key={item.value} className="bg-[var(--color-surface-card)] px-5 py-4">
                <p className="font-[family-name:var(--font-display)] text-lg font-semibold">{item.value}</p>
                <p className="mt-1 text-sm text-zinc-500">{item.label}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          className="relative"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: easeOut, delay: 0.1 }}
        >
          <div className="relative overflow-hidden rounded-[1.75rem] border border-[var(--color-border-strong)] shadow-[var(--shadow-soft)]">
            <picture className="block aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5]">
              <source media="(max-width: 768px)" srcSet={asset('assets/hero-mobile.webp')} type="image/webp" />
              <source media="(max-width: 768px)" srcSet={asset('assets/hero-mobile.jpg')} />
              <source media="(min-width: 769px)" srcSet={asset('assets/hero-desktop.webp')} type="image/webp" />
              <source media="(min-width: 769px)" srcSet={asset('assets/hero-desktop.jpg')} />
              <img
                src={asset('assets/hero.jpg')}
                alt=""
                width={1920}
                height={1080}
                fetchPriority="high"
                decoding="async"
                className="size-full object-cover object-[70%_40%]"
              />
            </picture>
            <div className="pointer-events-none absolute inset-0 bg-zinc-950/25" />
          </div>
          <p className="mt-4 hidden text-right text-xs text-zinc-500 lg:block">Beyond the summit, Blaze Consultancy</p>
        </motion.div>
      </div>
    </section>
  );
}
