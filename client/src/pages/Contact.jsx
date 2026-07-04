const contactCards = [
  {
    label: "Email",
    value: "gfgcampusbody@gcect.ac.in",
    note: "For collaborations, events, and membership queries",
  },
  {
    label: "Campus",
    value: "GCECT, Kolkata",
    note: "Connect with us during club sessions and workshops",
  },
  {
    label: "Social",
    value: "@gfgcampusbodygcect",
    note: "Follow updates, events, and coding announcements",
  },
];

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="contact-kicker">Get in touch</p>
        <h1>Contact Us</h1>
        <p>
          Have a question, event idea, collaboration proposal, or want to join
          GFG Campus Body GCECT? Send us a message.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <h2>Let us build something together</h2>
          <p>
            Reach out to the team for workshops, coding sessions, hackathon
            plans, sponsorships, and student community initiatives.
          </p>

          <div className="contact-cards">
            {contactCards.map((card) => (
              <article className="contact-card" key={card.label}>
                <span>{card.label}</span>
                <h3>{card.value}</h3>
                <p>{card.note}</p>
              </article>
            ))}
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <label>
              Name
              <input type="text" placeholder="Your full name" />
            </label>

            <label>
              Email
              <input type="email" placeholder="you@example.com" />
            </label>
          </div>

          <label>
            Subject
            <input type="text" placeholder="What is this about?" />
          </label>

          <label>
            Message
            <textarea rows="6" placeholder="Write your message here"></textarea>
          </label>

          <button type="button" className="contact-submit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
