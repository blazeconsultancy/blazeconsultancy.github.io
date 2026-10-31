import { motion, useReducedMotion } from 'motion/react';
import { easeOut, fadeUp, stagger } from '../lib/motion';
import { Reveal } from './About';
import { SectionLabel, SectionShell } from './ui/primitives';

const services = [
  { title: 'Web Development', desc: 'Product-grade interfaces and design systems.' },
  { title: 'Backend & APIs', desc: 'Services built for reliability and change.' },
  { title: 'Cloud Architecture', desc: 'Scale, cost, and resilience by design.' },
  { title: 'DevOps & Deployment', desc: 'Pipelines that teams trust in production.' },
  { title: 'Custom Software', desc: 'Bespoke systems aligned to your workflow.' },
  { title: 'Technical PM', desc: 'Delivery leadership without the theatre.' },
  { title: 'IT Consulting', desc: 'Clear options when the path is unclear.' },
];

export function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="services" className="border-t border-[var(--color-border)] bg-[var(--color-surface-raised)]">
      <Reveal>
        <SectionLabel
          index="02"
          title="What we do"
          description="Full stack development, cloud architecture, DevOps, and technical project management."
        />
      </Reveal>

      <motion.ul
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
      >
        {services.map((item, i) => (
          <motion.li
            key={item.title}
            variants={fadeUp}
            transition={{ duration: 0.4, ease: easeOut }}
            className="group"
          >
            <div className="flex h-full flex-col rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-card)] p-6 transition-[transform,border-color] duration-200 ease-out group-hover:-translate-y-1 group-hover:border-[var(--color-border-strong)]">
              <span className="font-mono text-xs text-zinc-600">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-4 font-[family-name:var(--font-display)] text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500">{item.desc}</p>
              <span className="mt-6 text-sm font-medium text-blaze opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Core capability
              </span>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </SectionShell>
  );
}

const work = [
  {
    meta: 'AGRICULTURE, PAYMENTS',
    title: 'Agri tech payments platform on Hyperswitch',
    body: 'Built payment flows on top of Hyperswitch; integrated multiple payment methods, checkout, and settlement flows.',
  },
  {
    meta: 'PAYMENTS, RELIABILITY',
    title: 'Payment gateway integration and support',
    body: 'Hands-on support for gateway connectors, transaction debugging, and maintainable integration structures.',
  },
  {
    meta: 'ARCHITECTURE, CLOUD',
    title: 'Cloud and system architecture for Osila Solutions',
    body: 'Shaped system and cloud design for scale and budget; guided the team on technical trade-offs.',
  },
  {
    meta: 'ECOMMERCE, RETAIL',
    title: 'Ecommerce and retail application',
    body: 'Storefront, catalog, cart, checkout, and backend, with safe deployment pipelines.',
  },
];

export function Work() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionShell id="work" grid className="border-t border-[var(--color-border)]">
      <Reveal>
        <SectionLabel
          index="03"
          title="Selected work"
          description="Representative engagements. More detail is available under NDA."
        />
      </Reveal>

      <motion.div
        className="grid gap-4 lg:grid-cols-2"
        initial={reduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={stagger}
      >
        {work.map((item) => (
          <motion.article
            key={item.title}
            variants={fadeUp}
            transition={{ duration: 0.45, ease: easeOut }}
            className="group relative overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-card)] p-7 transition-[border-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-blaze/40"
          >
            <div className="absolute inset-y-0 left-0 w-1 origin-bottom scale-y-0 bg-blaze transition-transform duration-200 ease-out group-hover:scale-y-100" />
            <p className="font-mono text-[0.65rem] font-medium text-blaze">{item.meta}</p>
            <h3 className="mt-4 max-w-md font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug">{item.title}</h3>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-zinc-500">{item.body}</p>
          </motion.article>
        ))}
      </motion.div>

      <Reveal className="mt-10 max-w-3xl text-sm leading-relaxed text-zinc-500" delay={0.05}>
        Note: we are showing a limited selection here. Several engagements and further detail are covered by
        confidentiality agreements. We are happy to walk through more on a call under NDA.
      </Reveal>
    </SectionShell>
  );
}
