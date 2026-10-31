import { motion } from 'motion/react';
import { asset } from '../lib/asset';
import { tapScale } from '../lib/motion';
import { Reveal } from './About';

export function Contact() {
  return (
    <section id="contact" className="border-t border-[var(--color-border)] py-20 sm:py-28">
      <Reveal className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] px-6 py-12 text-center sm:px-10 sm:py-14">
          <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl font-bold sm:text-4xl">Ready to move?</h2>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-zinc-400">
            Tell us what you are building. We will respond with a clear next step — no generic pitch deck.
          </p>
          <motion.a
            href="mailto:support@blazeconsultancy.in?subject=Project%20inquiry"
            className="mx-auto mt-8 inline-flex min-h-11 max-w-full items-center justify-center rounded-full bg-blaze px-6 py-3 text-sm font-semibold text-zinc-950 touch-manipulation"
            {...tapScale}
          >
            support@blazeconsultancy.in
          </motion.a>
          <p className="mt-5 text-sm text-zinc-400">
            Connect on{' '}
            <a
              href="https://www.linkedin.com/in/blaze-consultancy/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-zinc-100 underline decoration-zinc-600 underline-offset-4 hover:decoration-blaze"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-center sm:px-6">
        <div className="flex items-center gap-2 font-medium">
          <img src={asset('assets/logo.jpg')} alt="" width={32} height={32} className="size-8 rounded-full object-cover" />
          Blaze Consultancy
        </div>
        <p className="text-xs uppercase text-zinc-500">Ideas · Technology · Real impact</p>
        <p className="text-xs text-zinc-600">&copy; {new Date().getFullYear()} Blaze Consultancy. All rights reserved.</p>
      </div>
    </footer>
  );
}
