'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

const missionCards = [
  {
    title: "Burden of Bravado",
    body: (
      <>
        When your swagger requires wide-load permits, you need a comms team who understands brand lift. We chronicle the daily
        logistics of living loud without knocking over the conference room fern.
      </>
    ),
  },
  {
    title: "Chauffeur Confessions",
    body:
      "Our investigative unit rides shotgun with elite black-car drivers who multitask between defensive driving and declining unsolicited cloud-syncs of braggadocious photo dumps.",
  },
  {
    title: "Safety, but Make It Saucy",
    body:
      "We deliver tongue-in-cheek tips on weight distribution, supportive undergarments, and why scrolling through big-deal photo albums should never happen while chauffeuring anyone anywhere.",
  },
];

const tallTales = [
  {
    label: "BREAKING",
    headline: 'Luxury Limo Lists to the Left After Client Requests "Extra Room"',
    body:
      "Witnesses say the chauffeur kept cool, counterbalancing with complimentary seltzer and a playlist titled \"Supportive Straps.\" No one was injured, though several egos required recalibration.",
  },
  {
    label: "EXCLUSIVE",
    headline: 'Ride-Share App Adds "Hold My Bag" Feature for Heavy Hangers',
    body:
      "Beta testers rave about the velvet harnesses and ergonomic cradles, though drivers complain the in-app gallery of brag shots keeps dinging during rush hour.",
  },
  {
    label: "SCIENCE",
    headline: "Study Confirms Flexing Burns More Calories Than Cardio",
    body:
      "Researchers strapped pedometers to boastful commuters and discovered that hauling around exaggerated endowments qualifies as resistance training. Fitness influencers are conflicted.",
  },
];

const tickerItems = [
  "#rd.com Trend Watch: Rhinodicks becomes the IT Channel’s hottest inside joke",
  "CloudOps declares \"rhinodicks\" an enterprise-grade status symbol",
  "Limo unions demand ergonomic hazard pay for legendary loads",
  "Analysts predict horn-shaped merch to outpace standard swag by Q4",
];

const cloudPerks = [
  {
    title: "Rhinodicks Cloud (Beta)",
    copy:
      "Spin up elastic bravado in seconds. Auto-scales with your ego and ships dashboards packed with tasteful innuendo instead of HR violations.",
  },
  {
    title: "Load Balancer for Legends",
    copy:
      "Distribute that magnificent metaphorical traffic across supportive seating zones, chauffeur schedules, and ego-inflation stations.",
  },
  {
    title: "Observability, but Thirsty",
    copy:
      "Telemetry traces boast levels, driver eye-rolls, and social sentiment for the #rd.com crowd. Alert fatigue cured with memes and ergonomic stretches.",
  },
];

const columns = [
  {
    title: "The Etiquette of Excess",
    body:
      'Columnist Auntie Horn (yes, she kept the pen name) explains how to acknowledge your admirable proportions without turning every doorway into slapstick. Hint: apologize to coffee tables before the collision.',
  },
  {
    title: "Chauffeur Safety Briefings",
    body:
      'Professional drivers share scripts for politely redirecting passengers who insist on swiping through heroic full-body photo shoots mid-traffic. Step one: eyes on the road, not the roll-out.',
  },
  {
    title: "Merch Table (Coming Soon)",
    body:
      'Expect ergonomic slings, souvenir foam supports, and novelty sunshades emblazoned with "Wide Load, Wider Smile." All humor, zero explicit content.',
  },
];

const testimonials = [
  {
    name: "Gertie the Chauffeur",
    quote:
      "Since subscribing to Rhinodicks Cloud, I get predictive pings before a brag reel even hits AirDrop. My suspension thanks you.",
  },
  {
    name: "Blaze, Sr. Swagger Engineer",
    quote:
      "Our IT channel finally has a satire site that speaks fluent innuendo without triggering Compliance. Rhinodicks is the release note I didn’t know I needed.",
  },
  {
    name: "Rhonda the Rhino Influencer",
    quote:
      "Booked solid for keynotes about weight distribution and workplace consent. The brand glow-up is immaculate.",
  },
];

const releaseNotes = [
  {
    version: "v2.6.9",
    summary: "Introduced auto-redaction so brag photos render as tasteful silhouettes. Added chauffeur stretch break reminders.",
  },
  {
    version: "v2.5.0",
    summary: "Deployed spicy satire dark mode with cloud fluff gradients. Patched bug where horn emojis kept animating suggestively.",
  },
  {
    version: "v2.4.2",
    summary: "Rolled out IT Channel glossary for newcomers who think Rhinodicks is a wildlife nonprofit. It is not.",
  },
];

const faqs = [
  {
    question: "Is Rhinodicks.com safe for work?",
    answer:
      "Still mostly. We revel in comedic hyperbole about massive endowments and overworked chauffeurs, but we keep descriptions winking rather than explicit.",
    defaultOpen: true,
  },
  {
    question: "Do you endorse distracted driving?",
    answer:
      "Absolutely not. Every article reminds readers that scrolling through glamour shots while ferrying clients is a no-go. Fantasy big energy, real-world safety.",
  },
  {
    question: "Can I pitch a story?",
    answer:
      "Yes! Send us your funniest accounts of burdensome bravado, chauffeur chronicles, or tips on carrying the load with pride. Keep it playful and consensual.",
  },
  {
    question: "Why rhinos and limos?",
    answer:
      "Because few creatures embody chaotic confidence like a rhinoceros, and no vehicle knows discretion like a tinted town car. It’s a match made in oversized heaven.",
  },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const navRef = useRef(null);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleChange = (event) => {
      setPrefersReducedMotion(event.matches);
    };

    setPrefersReducedMotion(mediaQuery.matches);
    const supportsEventListener = typeof mediaQuery.addEventListener === 'function';

    if (supportsEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (supportsEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 360);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    const handleClick = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const tickerContent = useMemo(() => {
    return prefersReducedMotion ? tickerItems : [...tickerItems, ...tickerItems];
  }, [prefersReducedMotion]);

  const tickerInnerClassName = useMemo(() => {
    return `ticker__inner${prefersReducedMotion ? ' ticker__inner--still' : ''}`;
  }, [prefersReducedMotion]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="hero">
        <nav ref={navRef} className={`nav${menuOpen ? ' nav--open' : ''}`} aria-label="Primary navigation">
          <div className="nav__brand">
            <span className="nav__logo" aria-hidden>
              🦏
            </span>
            <div className="nav__brand-copy">
              <strong>Rhinodicks.com</strong>
              <p>Premium parody for over-provisioned egos.</p>
            </div>
          </div>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span className="nav__toggle-line" aria-hidden />
            <span className="nav__toggle-line" aria-hidden />
            <span className="nav__toggle-line" aria-hidden />
            <span className="sr-only">Toggle navigation</span>
          </button>
          <div className="nav__menu">
            <ul id="primary-navigation" className="nav__links" role="list">
              <li>
                <a href="#mission" onClick={handleNavLinkClick}>
                  Mission
                </a>
              </li>
              <li>
                <a href="#latest" onClick={handleNavLinkClick}>
                  Tall Tales
                </a>
              </li>
              <li>
                <a href="#cloud" onClick={handleNavLinkClick}>
                  Cloud Suite
                </a>
              </li>
              <li>
                <a href="#faq" onClick={handleNavLinkClick}>
                  FAQ
                </a>
              </li>
            </ul>
            <div className="nav__actions">
              <a className="nav__cta" href="mailto:concierge@rhinodicks.com">
                Book the Concierge
              </a>
              <p className="nav__promise">Nightly dispatches for legendary loads.</p>
            </div>
          </div>
        </nav>

        <div className="hero__content">
          <p className="hero__tagline">THE SATIRE SUITE FOR THE PERPETUALLY OVERPACKED</p>
          <h1 className="hero__title">Rhinodicks.com</h1>
          <p className="hero__subtitle">
            Where rhinoceros-level swagger meets enterprise-grade storytelling. We chronicle the mythic heft, the dutiful drivers, and the IT channels that trade swagger metrics like stock tickers.
          </p>
          <div className="hero__highlights" role="presentation" aria-hidden>
            <span>Luxury limo lore</span>
            <span>Observability for egos</span>
            <span>Consent-forward comedy</span>
          </div>
          <div className="hero__actions">
            <a className="hero__cta" href="#latest">
              Read Today’s Exaggerations
            </a>
            <a className="hero__secondary" href="mailto:press@rhinodicks.com">
              Pitch Your Satire
            </a>
          </div>
        </div>
        <div className="hero__clouds" aria-hidden>
          <span className="hero__cloud hero__cloud--one" />
          <span className="hero__cloud hero__cloud--two" />
          <span className="hero__cloud hero__cloud--three" />
        </div>
        <div className="hero__badge">100% Horn-Free Content*</div>
        <p className="hero__disclaimer">*All innuendo, zero explicit anatomy—just ergonomics and egos.</p>
        {menuOpen && (
          <button
            type="button"
            className="nav__overlay"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          />
        )}
      </header>

      <aside className="ticker" aria-label="Industry banter" aria-live="polite">
        <div className={tickerInnerClassName}>
          {tickerContent.map((item, index) => (
            <span key={`${item}-${index}`} className="ticker__item">
              <span className="sr-only">{index === 0 ? 'Latest headline: ' : ''}</span>
              {item}
            </span>
          ))}
        </div>
      </aside>

      <main id="main-content">
        <section id="mission" className="section">
          <div className="section__inner">
            <h2 className="section__title">The Mission</h2>
            <p>
              Rhinodicks.com is the IT channel’s velvet-rope satire lounge—curated for leaders whose swagger needs structural engineering. We celebrate the spectacle, toast the teams who keep the convoy balanced, and report on chauffeur heroics with the reverence normally reserved for product launches.
            </p>
            <div className="mission__grid">
              {missionCards.map((card) => (
                <article key={card.title} className="card">
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="latest" className="section section--alt">
          <div className="section__inner">
            <h2 className="section__title">Today’s Top Tall Tales</h2>
            <div className="articles">
              {tallTales.map((story) => (
                <article key={story.headline} className="feature">
                  <span className="feature__label">{story.label}</span>
                  <h3>{story.headline}</h3>
                  <p>{story.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cloud" className="section">
          <div className="section__inner section__inner--split">
            <div>
              <h2 className="section__title">Rhinodicks Cloud Command Center</h2>
              <p>
                Where satire meets SaaS. We’ve architected a fictional platform that speaks fluent bravado dashboards, complete with chauffeur wellness KPIs and ego load balancers. Deploy rhino-level resilience, track flex-induced downtime, and synchronize every stakeholder on consent-forward comedy.
              </p>
              <ul className="cloud__list">
                {cloudPerks.map((perk) => (
                  <li key={perk.title}>
                    <h3>{perk.title}</h3>
                    <p>{perk.copy}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="release-notes">
              <h3>Release Notes</h3>
              <ul>
                {releaseNotes.map((note) => (
                  <li key={note.version}>
                    <strong>{note.version}</strong>
                    <p>{note.summary}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section section--alt">
          <div className="section__inner columns__grid">
            {columns.map((column) => (
              <article key={column.title} className="column">
                <h3>{column.title}</h3>
                <p>{column.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section__inner testimonials">
            <h2 className="section__title">Field Notes from the Herd</h2>
            <div className="testimonials__grid">
              {testimonials.map((testimonial) => (
                <figure key={testimonial.name} className="testimonial">
                  <blockquote>
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <figcaption>
                    <span aria-hidden>—</span> {testimonial.name}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="section section--alt">
          <div className="section__inner">
            <h2 className="section__title">Frequently Asked Fibs</h2>
            <div className="faq">
              {faqs.map((faq) => (
                <details key={faq.question} className="faq__item" open={faq.defaultOpen}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__inner">
          <p>
            Rhinodicks.com is a satirical publication. No rhinos were embarrassed in the making of this website—though several negotiated ergonomic seating, aromatherapy, and a dedicated hype squad before interviews.
          </p>
          <p className="footer__links">
            <a href="mailto:tips@rhinodicks.com">Send a Tip</a>
            <span aria-hidden="true">&bull;</span>
            <a href="#mission">Our Mission</a>
            <span aria-hidden="true">&bull;</span>
            <a href="#faq">FAQ</a>
          </p>
          <p className="footer__copyright">
            &copy; {currentYear} Rhinodicks.com &ndash; Horns high, humor higher, hips stretched.
          </p>
        </div>
      </footer>
      <button
        type="button"
        className={`scroll-top${showScrollTop ? ' scroll-top--visible' : ''}`}
        onClick={handleScrollTop}
        aria-label="Scroll back to top"
      >
        <span aria-hidden>↑</span>
      </button>
    </>
  );
}
