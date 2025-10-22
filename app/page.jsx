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
  "#rd.com Trend Watch: Rhinodicks becomes the IT Channel's hottest inside joke",
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
      "Our IT channel finally has a satire site that speaks fluent innuendo without triggering Compliance. Rhinodicks is the release note I didn't know I needed.",
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
      "Because few creatures embody chaotic confidence like a rhinoceros, and no vehicle knows discretion like a tinted town car. It's a match made in oversized heaven.",
  },
];

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <nav className="nav">
          <div className="nav__brand">
            <span aria-hidden>🦏</span>
            <div>
              <strong>Rhinodicks.com</strong>
              <span>The IT Channel's favorite satire sandbox</span>
            </div>
          </div>
          <ul className="nav__links">
            <li>
              <a href="#mission">Mission</a>
            </li>
            <li>
              <a href="#latest">Tall Tales</a>
            </li>
            <li>
              <a href="#cloud">Cloud Suite</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>

        <div className="hero__content">
          <p className="hero__tagline">A SATIRICAL NEWSROOM FOR THE PERPETUALLY OVERPACKED</p>
          <h1 className="hero__title">Rhinodicks.com</h1>
          <p className="hero__subtitle">
            A lovingly ludicrous media brand chronicling the mythical heft of rhinodicks &mdash; the industry term every IT reseller is suddenly using to describe outsized bravado and bandwidth.
          </p>
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
        <p className="hero__disclaimer">*No explicit anatomy, just big personalities carrying big loads.</p>
      </header>

      <aside className="ticker" aria-label="Industry banter">
        <div className="ticker__inner">
          {tickerItems.map((item) => (
            <span key={item} className="ticker__item">
              {item}
            </span>
          ))}
        </div>
      </aside>

      <main>
        <section id="mission" className="section">
          <div className="section__inner">
            <h2 className="section__title">The Mission</h2>
            <p>
              Rhinodicks.com is the planet’s premier satire outlet dedicated to the colossal confidence of rhinoceroses and humans alike who find their gifts both glorious and gravity-heavy. We poke fun at swagger, the logistics of carrying it, and the chauffeurs tasked with keeping eyes on the road while fans keep sending proof.
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
                Where satire meets SaaS. We built a joke tech stack with just enough product marketing jargon to confuse your vendor reps. Deploy rhino-level resilience, track flex-induced downtime, and align the whole squad around consensual comedy.
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
            Rhinodicks.com is a satirical publication. No rhinos were embarrassed in the making of this website, though several demanded lumbar support before interviews.
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
    </>
  );
}
