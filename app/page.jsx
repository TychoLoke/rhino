const missionCards = [
  {
    title: "Horn-Inflated Headlines",
    body: (
      <>
        Our newsroom covers stories like “Local Rhino Buys Sports Car, Realizes He <em>Is</em> the Sports Car.” Pulitzer
        material? Probably.
      </>
    ),
  },
  {
    title: "Satirical Science",
    body:
      'We fact-check dubious research such as "Do Horn Sizes Correlate With Wi-Fi Signal?" Spoiler: the only bar we raise is for comedy.',
  },
  {
    title: "Big Energy Advice",
    body:
      "Self-help columns teach rhinos how to channel their inner swagger into eco-friendly horn buffing and responsible mud-wallering.",
  },
];

const tallTales = [
  {
    label: "BREAKING",
    headline:
      '"Big Horn Energy" Festival Bans Tape Measures After Last Year\'s Ego Quake',
    body:
      "Organizers insist the festival is about empowerment, not horn envy. Attendees report suspiciously large velvet ropes and mandatory affirmations before entering the mirror tent.",
  },
  {
    label: "EXCLUSIVE",
    headline: 'Rhino CEO Announces "Size Matters" Sustainability Plan',
    body:
      "The plan includes replacing corporate ladders with rampaging charges and a new recycling program for broken pedestals. Shareholders are horned for the future.",
  },
  {
    label: "SCIENCE",
    headline: "Study Finds 8 Out of 10 Rhinos Prefer Compliments Over Car Wax",
    body:
      "Researchers confirm that heartfelt praise outperforms shiny bumpers, though car wax still outranks podcasts about humility.",
  },
];

const columns = [
  {
    title: "The Etiquette of Enormity",
    body:
      'Our advice columnist, Auntie Horn, addresses delicate dilemmas such as: "Is it rude to enter a room horn-first?" and "Should I RSVP \'yes\' to every arena opening?" Spoiler: confidence pairs well with good manners.',
  },
  {
    title: "Historical Hornography",
    body:
      'We revisit the greatest myths of rhinoceros grandeur, from medieval bards who exaggerated their silhouettes to modern memes that claim rhinos invented the concept of "go big or go home." History is tall; our stories are taller.',
  },
  {
    title: "Merch Table (Coming Soon)",
    body:
      'Expect tasteful tees, commemorative coffee mugs, and novelty tape measures that max out at "Too Much." No actual anatomy, just bold design and bolder punchlines.',
  },
];

const faqs = [
  {
    question: "Is RhinoDicks.com safe for work?",
    answer:
      "Absolutely. We trade in innuendo and oversized egos, not explicit visuals. It's satire, not safari smut.",
    defaultOpen: true,
  },
  {
    question: "Do you sell actual rhinoceros memorabilia?",
    answer:
      "Nope. We champion conservation and leave the real horns to real rhinos. Our merch is proudly fictional (for now).",
  },
  {
    question: "Can I pitch a story?",
    answer:
      "Yes! Send us your wildest tall tales, so long as they keep things playful and PG-13. If it involves puns, even better.",
  },
  {
    question: "Why rhinos?",
    answer:
      "Because few creatures embody chaotic confidence like a rhinoceros. Also, the domain name was available and we couldn't resist.",
  },
];

export default function HomePage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <div className="hero__content">
          <p className="hero__tagline">
            A SATIRICAL NEWSROOM FOR THE MOST OVERCOMPENSATING ANIMAL ON EARTH
          </p>
          <h1 className="hero__title">RhinoDicks.com</h1>
          <p className="hero__subtitle">
            We celebrate the majestic, massive, metaphorical might of the rhino horn. It's not what you think, but it's exactly
            what you need.
          </p>
          <a className="hero__cta" href="#latest">
            Read Today’s Exaggerations
          </a>
        </div>
        <div className="hero__badge">100% Horn-Free Content*</div>
        <p className="hero__disclaimer">*No explicit anatomy, just big personalities.</p>
      </header>

      <main>
        <section id="mission" className="section">
          <div className="section__inner">
            <h2 className="section__title">The Mission</h2>
            <p>
              RhinoDicks.com is the planet’s premier satire outlet dedicated to the colossal confidence of rhinoceroses
              everywhere. We poke fun at bravado, overcompensation, and the myths of macho culture without ever getting graphic.
              Think of us as the late-night monologue for creatures who believe their horn can solve anything.
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
            RhinoDicks.com is a satirical publication. No rhinos were embarrassed in the making of this website, though several
            insisted we note their horns are "even bigger in person."
          </p>
          <p className="footer__links">
            <a href="mailto:tips@rhinodicks.com">Send a Tip</a>
            <span aria-hidden="true">&bull;</span>
            <a href="#mission">Our Mission</a>
            <span aria-hidden="true">&bull;</span>
            <a href="#faq">FAQ</a>
          </p>
          <p className="footer__copyright">
            &copy; {currentYear} RhinoDicks.com &ndash; Horns high, humor higher.
          </p>
        </div>
      </footer>
    </>
  );
}
