const programCoordinator = {
  name: "Sudip Madhu",
  role: "Advisor",
  initials: "PC",
};

const campusMantris = [
  {
    name: "Abhijit Ghosh",
    role: "Campus Mantri",
    initials: "AG",
  },
  {
    name: "Adreeja Ghatak",
    role: "Campus Mantri",
    initials: "AG",
  },
  
];

const coreTeam = [
  {
    name: "Deepak Sharma",
    role: "Events Lead",
    initials: "DS",
  },
  {
    name: "Vivek Khamaru",
    role: "Creative Head",
    initials: "VK",
  },
  {
    name: "Arunima Sen",
    role: "PR Lead",
    initials: "AS",
  },
  {
    name: "Tannu Kumari",
    role: "Logistics Lead",
    initials: "TK",
  },
  {
    name: "Nidhi Pasi",
    role: "Tech Head",
    initials: "NP",
  },
];

function MemberCard({ member, featured = false }) {
  return (
    <article className={featured ? "team-card featured-member" : "team-card"}>
      <div className="member-photo">
        <span>{member.initials}</span>
      </div>
      <div className="member-info">
        <h3>{member.name}</h3>
        <p>{member.role}</p>
      </div>
    </article>
  );
}

export default function Team() {
  return (
    <main className="team-page">
      <section className="team-hero">
        <p className="team-kicker">GFG Campus Body GCECT</p>
        <h1>Our Team</h1>
        <p>
          Meet the people building a stronger coding, development, and
          innovation culture at GCECT.
        </p>
      </section>

      <section className="team-section faculty-section">
        <h2>Program Coordinator</h2>
        <MemberCard member={programCoordinator} featured />
      </section>

      <section className="team-section">
        <h2>Campus Mantris</h2>
        <div className="team-grid directors-grid">
          {campusMantris.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <section className="team-section">
        <h2>Core Team</h2>
        <div className="team-grid">
          {coreTeam.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </section>
    </main>
  );
}
