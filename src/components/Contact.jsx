import { motion } from 'motion/react';
import { asset } from '../lib/asset';
import { tapScale } from '../lib/motion';
import { Reveal } from './About';
import { PrimaryButton, SectionShell } from './ui/primitives';

export function Contact() {
  return (
    <SectionShell id="contact" className="border-t border-[var(--color-border)] pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border-strong)] bg-[var(--color-surface-card)] px-6 py-14 sm:px-12 sm:py-16">
          <div className="page-grid pointer-events-none absolute inset-0 opacity-20" aria-hidden />
          <div className="relative mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs text-blaze">04 · Contact</p>
            <h2 className="mt-4 text-balance font-[family-name:var(--font-display)] text-3xl font-semibold sm:text-4xl md:text-5xl">
              Ready to move?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-zinc-400">
              Tell us what you are building. We will respond with a clear next step — no generic pitch deck.
            </p>
            <motion.a
              href="mailto:support@blazeconsultancy.in?subject=Project%20inquiry"
              className="mx-auto mt-8 inline-flex min-h-12 max-w-full items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] px-6 py-3 font-mono text-sm text-zinc-200 touch-manipulation sm:text-base"
              {...tapScale}
            >
              support@blazeconsultancy.in
            </motion.a>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <PrimaryButton href="mailto:support@blazeconsultancy.in?subject=Project%20inquiry">Email us</PrimaryButton>
              <a
                href="https://www.linkedin.com/in/blaze-consultancy/"
                rel="noopener noreferrer"
                target="_blank"
                className="text-sm font-medium text-zinc-400 underline decoration-zinc-700 underline-offset-4 transition-colors hover:text-white hover:decoration-blaze"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </SectionShell>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-3">
          <img src={asset('assets/logo.jpg')} alt="" width={40} height={40} className="size-10 rounded-full object-cover ring-1 ring-white/10" />
          <div>
            <p className="font-[family-name:var(--font-display)] font-semibold">Blaze Consultancy</p>
            <p className="text-sm text-zinc-500">Ideas · Technology · Real impact</p>
          </div>
        </div>
        <p className="text-sm text-zinc-600">&copy; {new Date().getFullYear()} Blaze Consultancy</p>
      </div>
    </footer>
  );
}
