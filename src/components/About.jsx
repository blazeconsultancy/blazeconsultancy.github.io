import { motion, useReducedMotion } from 'motion/react';
import { asset } from '../lib/asset';
import { easeOut, fadeUp } from '../lib/motion';

const stats = [
  { title: 'End-to-end', detail: 'Design → deploy → operate' },
  { title: 'Embedded', detail: 'Your team, our craft' },
  { title: 'Pragmatic', detail: 'Right stack, real trade-offs' },
];

export function Reveal({ children, className, delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      transition={{ duration: 0.45, ease: easeOut, delay }}
    >
      {children}
    </motion.div>
  );
}

export function About() {
  return (
    <section id="about" className="border-t border-[var(--color-border)] py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="flex justify-center lg:justify-start">
          <img
            src={asset('assets/logo.jpg')}
            alt="Blaze Consultancy emblem"
            width={280}
            height={280}
            className="size-48 rounded-full object-cover sm:size-56"
          />
        </Reveal>
        <div>
          <Reveal>
            <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">
              Built to ship, not to slide decks
            </h2>
          </Reveal>
          <Reveal delay={0.05} className="mt-6 space-y-4 border-l-2 border-blaze pl-5 text-pretty text-zinc-300">
            <p>
              We take products from idea to production. We design it, build it, deploy it, and keep it running — so you
              do not have to stitch together three different vendors.
            </p>
            <p>
              We work as an embedded extension of your team, stay close to the problem, and ship. We are tech agnostic
              and pick the right tools for each project.
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map((item, i) => (
              <Reveal key={item.title} delay={0.08 + i * 0.04}>
                <li className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4">
                  <p className="font-[family-name:var(--font-display)] text-lg font-semibold">{item.title}</p>
                  <p className="mt-1 text-sm text-zinc-400">{item.detail}</p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
