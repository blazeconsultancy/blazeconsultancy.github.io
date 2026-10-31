import { motion, useReducedMotion } from 'motion/react';
import { cn } from '../lib/cn';
import { easeOut, fadeUp, stagger, tapScale } from '../lib/motion';
import { Reveal } from './About';

const services = [
  'Web Development',
  'Backend & APIs',
  'Cloud Architecture',
  'DevOps & Deployment',
  'Custom Software',
  'Technical Project Management',
  'IT Consulting',
];

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="border-t border-[var(--color-border)] bg-[var(--color-surface-raised)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">What we do</h2>
          <p className="mt-3 max-w-2xl text-pretty text-zinc-400">
            Full stack development, cloud architecture, DevOps, and technical project management.
          </p>
        </Reveal>
        <motion.ul
          className="mt-10 flex flex-wrap gap-2"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {services.map((label) => (
            <motion.li key={label} variants={fadeUp} transition={{ duration: 0.35, ease: easeOut }}>
              <motion.span
                className={cn(
                  'inline-flex min-h-10 items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm text-zinc-200',
                  'touch-manipulation select-none'
                )}
                whileHover={{ y: -2 }}
                {...tapScale}
              >
                {label}
              </motion.span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

const work = [
  {
    meta: 'AGRICULTURE · PAYMENTS',
    title: 'Agri tech payments platform on Hyperswitch',
    body: 'Built payment flows on top of Hyperswitch; integrated multiple payment methods, checkout, and settlement flows.',
  },
  {
    meta: 'PAYMENTS · RELIABILITY',
    title: 'Payment gateway integration and support',
    body: 'Hands-on support for gateway connectors, transaction debugging, and maintainable integration structures.',
  },
  {
    meta: 'ARCHITECTURE · CLOUD',
    title: 'Cloud and system architecture — Osila Solutions',
    body: 'Shaped system and cloud design for scale and budget; guided the team on technical trade-offs.',
  },
  {
    meta: 'ECOMMERCE · RETAIL',
    title: 'Ecommerce and retail application',
    body: 'Storefront, catalog, cart, checkout, and backend — with safe deployment pipelines.',
  },
];

export function Work() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="work" className="border-t border-[var(--color-border)] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">Selected work</h2>
          <p className="mt-3 max-w-2xl text-pretty text-zinc-400">Representative engagements — more detail available under NDA.</p>
        </Reveal>
        <motion.div
          className="mt-10 grid gap-4 md:grid-cols-2"
          initial={reduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          {work.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              transition={{ duration: 0.4, ease: easeOut }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-6 transition-transform duration-200 ease-out"
            >
              <p className="text-xs font-semibold text-blaze">{item.meta}</p>
              <h3 className="mt-3 font-[family-name:var(--font-display)] text-xl font-semibold leading-snug">{item.title}</h3>
              <p className="mt-3 text-pretty text-sm text-zinc-400">{item.body}</p>
            </motion.article>
          ))}
        </motion.div>
        <Reveal className="mt-8 max-w-3xl text-sm italic text-zinc-500" delay={0.05}>
          Note: we are showing a limited selection here. Several engagements and further detail are covered by
          confidentiality agreements. We are happy to walk through more on a call under NDA.
        </Reveal>
      </div>
    </section>
  );
}
