import { motion, useReducedMotion } from 'motion/react';
import { asset } from '../lib/asset';
import { easeOut, fadeUp, tapScale } from '../lib/motion';
import { cn } from '../lib/cn';

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-dvh flex-col justify-end overflow-hidden" aria-label="Introduction">
      <div className="absolute inset-0 -z-10 bg-zinc-950">
        <picture className="block size-full">
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
            className="size-full object-cover object-[72%_45%] md:object-[72%_45%]"
          />
        </picture>
        <div className="absolute inset-0 bg-zinc-950/60 md:bg-zinc-950/50" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[var(--color-surface)]/90" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20">
        <motion.p
          className="mb-4 text-xs font-medium uppercase text-zinc-400 sm:text-sm"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.45, ease: easeOut }}
        >
          Ideas · Technology · Real impact
        </motion.p>
        <motion.h1
          className="max-w-[16ch] text-balance font-[family-name:var(--font-display)] text-4xl font-bold leading-[1.05] sm:text-5xl md:text-6xl"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.45, ease: easeOut, delay: 0.05 }}
        >
          Your technology partner for what&apos;s next.
        </motion.h1>
        <motion.p
          className="mt-5 max-w-xl text-pretty text-base text-zinc-300 sm:text-lg"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.45, ease: easeOut, delay: 0.1 }}
        >
          From idea to production — we design, build, deploy, and keep systems running as an embedded extension of
          your team.
        </motion.p>
        <motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          initial={reduceMotion ? false : 'hidden'}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.45, ease: easeOut, delay: 0.15 }}
        >
          <motion.a
            href="#contact"
            className={cn(
              'inline-flex min-h-11 items-center justify-center rounded-full bg-blaze px-6 py-3 text-sm font-semibold text-zinc-950',
              'touch-manipulation select-none'
            )}
            {...tapScale}
          >
            Start a conversation
          </motion.a>
          <motion.a
            href="#work"
            className={cn(
              'inline-flex min-h-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/5 px-6 py-3 text-sm font-semibold text-zinc-100',
              'touch-manipulation select-none hover:bg-white/10 active:bg-white/10'
            )}
            {...tapScale}
          >
            See selected work
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
