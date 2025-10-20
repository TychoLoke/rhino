const missionCards = [
  {
    title: "Burden of Bravado",
    body: (
      <>
        When you are gifted with comically oversized confidence, you need friends who understand that swagger can feel like a gym workout. We chronicle the daily lift, tug, and tote of living large.
      </>
    ),
  },
  {
    title: "Chauffeur Confessions",
    body:
      "Our investigative team rides shotgun with elite black-car drivers who multitask between navigating traffic and swiping through unsolicited glamour shots from their clientele.",
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

const faqs = [
  {
    question: "Is RhinoDicks.com safe for work?",
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
        <div className="hero__content">
          <p className="hero__tagline">A SATIRICAL NEWSROOM FOR THE PERPETUALLY OVERPACKED</p>
          <h1 className="hero__title">RhinoDicks.com</h1>
          <p className="hero__subtitle">
            We chronicle the comedic struggles of beings whose endowments are too legendary for standard seating. Think weight-lifting self-care tips, driver diaries, and ego-friendly ergonomics.
          </p>
          <a className="hero__cta" href="#latest">
            Read Today’s Exaggerations
          </a>
        </div>
        <div className="hero__badge">100% Horn-Free Content*</div>
        <p className="hero__disclaimer">*No explicit anatomy, just big personalities carrying big loads.</p>
      </header>

      <main>
        <section id="mission" className="section">
          <div className="section__inner">
            <h2 className="section__title">The Mission</h2>
            <p>
              RhinoDicks.com is the planet’s premier satire outlet dedicated to the colossal confidence of rhinoceroses and humans alike who find their gifts both glorious and gravity-heavy. We poke fun at swagger, the logistics of carrying it, and the chauffeurs tasked with keeping eyes on the road while fans keep sending proof.
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

        <section id="columns" className="section">
          <div className="section__inner columns__grid">
            {columns.map((column) => (
              <article key={column.title} className="column">
                <h3>{column.title}</h3>
                <p>{column.body}</p>
              </article>
            ))}
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
            RhinoDicks.com is a satirical publication. No rhinos were embarrassed in the making of this website, though several demanded lumbar support before interviews.
          </p>
          <p className="footer__links">
            <a href="mailto:tips@rhinodicks.com">Send a Tip</a>
            <span aria-hidden="true">&bull;</span>
            <a href="#mission">Our Mission</a>
            <span aria-hidden="true">&bull;</span>
            <a href="#faq">FAQ</a>
          </p>
          <p className="footer__copyright">
            &copy; {currentYear} RhinoDicks.com &ndash; Horns high, humor higher, hips stretched.
          </p>
        </div>
      </footer>
    </>
  );
}
