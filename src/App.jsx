import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services, Work } from './components/Services';
import { Contact, Footer } from './components/Contact';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blaze focus:px-4 focus:py-2 focus:text-zinc-950"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <div id="top" className="scroll-mt-0" />
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
