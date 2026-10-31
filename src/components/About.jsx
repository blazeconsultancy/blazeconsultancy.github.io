import { motion, useReducedMotion } from 'motion/react';
import { asset } from '../lib/asset';
import { easeOut, fadeUp } from '../lib/motion';
import { SectionLabel, SectionShell } from './ui/primitives';

export function Reveal({ children, className, delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      transition={{ duration: 0.45, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <SectionShell id="about" grid className="border-t border-[var(--color-border)]">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <Reveal>
          <SectionLabel
            index="01"
            title="Built to ship, not to slide decks"
            description="We take products from idea to production — design, build, deploy, and operate — without stitching together three vendors."
          />
          <div className="relative mx-auto max-w-xs lg:mx-0">
            <img
              src={asset('assets/logo.jpg')}
              alt="Blaze Consultancy emblem"
              width={320}
              height={320}
              className="relative size-56 rounded-full object-cover ring-1 ring-white/10 sm:size-64"
            />
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.05}>
            <blockquote className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-card)] p-6 sm:p-8">
              <p className="text-pretty text-lg leading-relaxed text-zinc-300 sm:text-xl">
                We work as an embedded extension of your team, stay close to the problem, and ship. We are tech
                agnostic and pick the right tools for each project.
              </p>
            </blockquote>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { t: 'End-to-end', d: 'One partner across the lifecycle' },
              { t: 'Embedded', d: 'Inside your rituals and roadmap' },
              { t: 'Pragmatic', d: 'Trade-offs you can defend' },
            ].map((item, i) => (
              <Reveal key={item.t} delay={0.08 + i * 0.05}>
                <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-5">
                  <p className="font-[family-name:var(--font-display)] text-lg font-semibold">{item.t}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{item.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
