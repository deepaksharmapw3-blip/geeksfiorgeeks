export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="hero-left">
          <p className="hero-badge">GeeksforGeeks Student Chapter</p>

          <h1>
            The Official Website Of GFG Campus Body 
            <span> GCECT.</span>
          </h1>

          <p className="hero-description">
            GFG Campus Body GCECT is a student-led community for coding,
            development, placement preparation, hackathons, and project-based
            learning.
          </p>

          <div className="hero-buttons">
            <a href="/events" className="btn btn-primary">
              View Events
            </a>
            <a href="/resources" className="btn btn-outline">
              Learning Hub
            </a>
          </div>

          <div className="hero-highlights">
            <span>DSA</span>
            <span>Web Dev</span>
            <span>Hackathons</span>
            <span>Placements</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Community dashboard preview">
          <div className="visual-header">
            <span className="status-dot"></span>
            <span>Live Campus Sprint</span>
          </div>

          <div className="visual-score">
            <p>This Week</p>
            <strong>128</strong>
            <span>problems solved by members</span>
          </div>

          <div className="visual-grid">
            <div>
              <span className="mini-label">Next</span>
              <strong>React Workshop</strong>
            </div>
            <div>
              <span className="mini-label">Focus</span>
              <strong>Arrays & DP</strong>
            </div>
          </div>

          <div className="code-window">
            <pre>{`function growTogether() {
  learn();
  build();
  share();
}`}</pre>
          </div>
        </div>
      </section>

      <section className="home-stats">
        <div>
          <h2>150+</h2>
          <p>Active Members</p>
        </div>
        <div>
          <h2>30+</h2>
          <p>Sessions Hosted</p>
        </div>
        <div>
          <h2>5</h2>
          <p>Core Domains</p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p>Our Programs</p>
          <h2>Everything a student needs to grow in tech</h2>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <span>01</span>
            <h3>DSA Circles</h3>
            <p>
              Regular problem-solving sessions focused on DSA, logic building,
              and competitive programming.
            </p>
          </div>

          <div className="feature-card">
            <span>02</span>
            <h3>Dev Labs</h3>
            <p>
              Hands-on learning with HTML, CSS, JavaScript, React, backend
              development, and real projects.
            </p>
          </div>

          <div className="feature-card">
            <span>03</span>
            <h3>Placement Prep</h3>
            <p>
              Aptitude, technical interviews, resume building, mock interviews,
              and company-focused preparation.
            </p>
          </div>

          <div className="feature-card">
            <span>04</span>
            <h3>Build Sprints</h3>
            <p>
              Team-based building, ideation, rapid prototyping, and participation
              in college and external hackathons.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div>
          <p>Ready to join?</p>
          <h2>Turn your campus years into a strong developer journey.</h2>
        </div>
        <a href="/contact" className="btn btn-light">
          Contact Team
        </a>
      </section>
    </main>
  );
}
