import './styles.css';

const base = import.meta.env.BASE_URL;
const asset = (path) => `${base}${path}`;

const app = document.querySelector('#app');

app.innerHTML = `
  <a class="skip-link" href="#main">Skip to content</a>

  <header class="site-header" id="top">
    <nav class="nav container" aria-label="Primary">
      <a class="nav-brand" href="#top">
        <img src="${asset('assets/logo.jpg')}" alt="" width="44" height="44" class="nav-logo" />
        <span class="nav-wordmark">
          <span class="nav-blaze">BLAZE</span>
          <span class="nav-consultancy">CONSULTANCY</span>
        </span>
      </a>
      <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav-menu">
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
        <span class="nav-toggle-bar"></span>
      </button>
      <ul class="nav-links" id="nav-menu">
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#work">Work</a></li>
        <li><a class="nav-cta" href="#contact">Let's talk</a></li>
      </ul>
    </nav>
  </header>

  <main id="main">
    <section class="hero" aria-label="Introduction">
      <div class="hero-media">
        <img src="${asset('assets/hero.jpg')}" alt="" class="hero-img" fetchpriority="high" />
        <div class="hero-overlay"></div>
        <div class="hero-glow-path" aria-hidden="true"></div>
      </div>
      <div class="hero-content container">
        <p class="hero-eyebrow reveal">IDEAS <span>|</span> TECHNOLOGY <span>|</span> REAL IMPACT</p>
        <h1 class="hero-title reveal">
          Your technology partner<br />
          <span class="text-gradient">for what's next.</span>
        </h1>
        <p class="hero-lead reveal">
          From idea to production — we design, build, deploy, and keep systems running as an embedded extension of your team.
        </p>
        <div class="hero-actions reveal">
          <a class="btn btn-primary" href="#contact">Start a conversation</a>
          <a class="btn btn-ghost" href="#work">See selected work</a>
        </div>
      </div>
      <div class="hero-scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>

    <section class="section about" id="about">
      <div class="container">
        <div class="about-grid">
          <div class="about-visual reveal">
            <img src="${asset('assets/logo.jpg')}" alt="Blaze Consultancy emblem" class="about-emblem" />
            <div class="emblem-ring"></div>
          </div>
          <div class="about-copy reveal">
            <h2>Built to ship, not to slide decks</h2>
            <div class="callout">
              <p>
                We take products from idea to production. We design it, build it, deploy it, and keep it running —
                so you do not have to stitch together three different vendors.
              </p>
              <p>
                We work as an embedded extension of your team, stay close to the problem, and ship. We are tech
                agnostic and pick the right tools for each project.
              </p>
            </div>
            <ul class="stats">
              <li><strong>End-to-end</strong><span>Design → deploy → operate</span></li>
              <li><strong>Embedded</strong><span>Your team, our craft</span></li>
              <li><strong>Pragmatic</strong><span>Right stack, real trade-offs</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section services" id="services">
      <div class="container">
        <header class="section-head reveal">
          <h2>What we do</h2>
          <p>Full stack development, cloud architecture, DevOps, and technical project management.</p>
        </header>
        <ul class="tag-cloud reveal-stagger">
          <li class="tag">Web Development</li>
          <li class="tag">Backend &amp; APIs</li>
          <li class="tag">Cloud Architecture</li>
          <li class="tag">DevOps &amp; Deployment</li>
          <li class="tag">Custom Software</li>
          <li class="tag">Technical Project Management</li>
          <li class="tag">IT Consulting</li>
        </ul>
      </div>
    </section>

    <section class="section work" id="work">
      <div class="container">
        <header class="section-head reveal">
          <h2>Selected work</h2>
          <p>Representative engagements — more detail available under NDA.</p>
        </header>
        <div class="work-grid reveal-stagger">
          <article class="card">
            <p class="card-meta">AGRICULTURE · PAYMENTS</p>
            <h3>Agri tech payments platform on Hyperswitch</h3>
            <p>Built payment flows on top of Hyperswitch; integrated multiple payment methods, checkout, and settlement flows.</p>
          </article>
          <article class="card">
            <p class="card-meta">PAYMENTS · RELIABILITY</p>
            <h3>Payment gateway integration and support</h3>
            <p>Hands-on support for gateway connectors, transaction debugging, and maintainable integration structures.</p>
          </article>
          <article class="card">
            <p class="card-meta">ARCHITECTURE · CLOUD</p>
            <h3>Cloud and system architecture — Osila Solutions</h3>
            <p>Shaped system and cloud design for scale and budget; guided the team on technical trade-offs.</p>
          </article>
          <article class="card">
            <p class="card-meta">ECOMMERCE · RETAIL</p>
            <h3>Ecommerce and retail application</h3>
            <p>Storefront, catalog, cart, checkout, and backend — with safe deployment pipelines.</p>
          </article>
        </div>
        <p class="work-note reveal">
          Note: we are showing a limited selection here. Several engagements and further detail are covered by
          confidentiality agreements. We are happy to walk through more on a call under NDA.
        </p>
      </div>
    </section>

    <section class="section contact" id="contact">
      <div class="container contact-inner reveal">
        <h2>Ready to move?</h2>
        <p>Tell us what you are building. We will respond with a clear next step — no generic pitch deck.</p>
        <a class="btn btn-primary btn-lg" href="mailto:blazeconsultancy309@gmail.com?subject=Project%20inquiry">blazeconsultancy309@gmail.com</a>
        <p class="contact-alt">Or find us on <a href="https://github.com/blazeconsultancy">GitHub</a>.</p>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-brand">
        <img src="${asset('assets/logo.jpg')}" alt="" width="36" height="36" />
        <span>Blaze Consultancy</span>
      </div>
      <p class="footer-tag">IDEAS · TECHNOLOGY · REAL IMPACT</p>
      <p class="footer-copy">&copy; ${new Date().getFullYear()} Blaze Consultancy. All rights reserved.</p>
    </div>
  </footer>
`;

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');
const header = document.querySelector('.site-header');

toggle?.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  menu?.classList.toggle('is-open', !open);
});

// Header on scroll
const onScroll = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 40);
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
);
revealEls.forEach((el) => io.observe(el));

// Parallax hero
const heroImg = document.querySelector('.hero-img');
if (heroImg) {
  window.addEventListener(
    'scroll',
    () => {
      const y = window.scrollY;
      if (y < window.innerHeight) {
        heroImg.style.transform = `translate3d(0, ${y * 0.35}px, 0) scale(1.05)`;
      }
    },
    { passive: true }
  );
}

// Fix querySelectorAll typo - I used queryAll by mistake
menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    menu?.classList.remove('is-open');
  });
});
