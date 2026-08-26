import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Code2, Server, Database, Workflow } from 'lucide-react'

const skills = [
  'React.js', 'JavaScript', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS',
  'HTML5', 'CSS3', 'REST APIs', 'FastAPI', 'Python', 'PostgreSQL',
  'SQLAlchemy', 'Git & GitHub', 'Cloudflare', 'Render'
]

const projects = [
  {
    title: 'DigitalPH Business Platform',
    type: 'React / Business Website',
    description: 'A production business website and project platform built around modern React workflows, responsive UI, project management features, and cloud deployment.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Cloudflare'],
    live: 'https://thedigitalph.com',
  },
  {
    title: 'Meat Shop POS & Inventory',
    type: 'Full-Stack Business Application',
    description: 'End-to-end POS and inventory platform covering products, purchasing, stock movements, customers, delivery, reporting, search, pricing, and operational workflows.',
    stack: ['React', 'FastAPI', 'Python', 'REST API'],
    live: 'https://meat.thedigitalph.com',
  },
  {
    title: 'DGHub Revenue OS',
    type: 'Enterprise Workflow Automation',
    description: 'A modular revenue operations platform designed to centralize leads, opportunities, proposals, outreach, contracts, invoicing, onboarding, and workflow automation.',
    stack: ['Next.js', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'],
  },
  {
    title: 'Clinic CRM & Appointment System',
    type: 'Healthcare Business Application',
    description: 'A CRM and operations platform for inquiries, lead pipelines, appointments, calendar management, patient profiles, and medical-record workflows.',
    stack: ['React', 'REST API', 'Database', 'Responsive UI'],
  },
]

const experience = [
  ['Systems Analyst', 'UHG - Optum', 'Enterprise systems analysis, requirements, process improvement, and cross-functional collaboration.'],
  ['Product Analyst', 'Info Alchemy Corp.', 'Product analysis, requirements definition, stakeholder coordination, and technology-driven business solutions.'],
  ['COO', 'Espasio Construction', 'Operations leadership, process management, business strategy, and practical problem solving.'],
  ['Software Developer', 'Independent Projects', 'Designing and delivering web applications, business systems, APIs, automation, and production deployments.'],
]

function App() {
  return <div className="app">
    <header className="nav shell">
      <a className="brand" href="#top"><span>JD</span> Jun Daig</a>
      <nav>
        <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#experience">Experience</a>
      </nav>
      <a className="navCta" href="mailto:daigjun444@gmail.com">Let's talk</a>
    </header>

    <main id="top">
      <section className="hero shell">
        <div className="availability"><i /> Available for Front-End & Full-Stack opportunities</div>
        <p className="eyebrow">FRONT-END / FULL-STACK DEVELOPER</p>
        <h1>I build digital products that turn <em>complex workflows</em> into simple experiences.</h1>
        <p className="lead">React-focused developer with experience building responsive business applications, APIs, dashboards, operational systems, and automation from requirements through production deployment.</p>
        <div className="actions">
          <a className="primary" href="#projects">View my work <ArrowUpRight size={18}/></a>
          <a className="secondary" href="https://github.com/jundaig007" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
        </div>
        <div className="quickFacts">
          <span><MapPin size={16}/> Philippines · Remote-ready</span>
          <span><Code2 size={16}/> React & modern JavaScript</span>
          <span><Server size={16}/> Full-stack capable</span>
        </div>
      </section>

      <section id="about" className="section shell twoCol">
        <div><p className="eyebrow">ABOUT ME</p><h2>Engineering with a business mindset.</h2></div>
        <div className="aboutCopy">
          <p>I combine hands-on software development with experience in systems analysis, product analysis, and business operations. That background helps me understand not only how to build a feature, but why it matters to the people and organization using it.</p>
          <p>I enjoy translating requirements into clean, responsive interfaces and reliable systems. I work comfortably across frontend development, API integration, data-driven applications, testing, Git workflows, and deployment.</p>
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="shell">
          <p className="eyebrow">TECHNICAL TOOLKIT</p><h2>Technologies I work with.</h2>
          <div className="skillGrid">
            <div className="capability"><Code2/><h3>Frontend</h3><p>Responsive, accessible interfaces and reusable component-driven applications.</p></div>
            <div className="capability"><Server/><h3>Backend & APIs</h3><p>REST API integration and Python/FastAPI services for business applications.</p></div>
            <div className="capability"><Database/><h3>Data</h3><p>Relational data modeling, SQLAlchemy, PostgreSQL, and application data flows.</p></div>
            <div className="capability"><Workflow/><h3>Automation</h3><p>Turning repetitive business processes into structured digital workflows.</p></div>
          </div>
          <div className="chips">{skills.map(s => <span key={s}>{s}</span>)}</div>
        </div>
      </section>

      <section id="projects" className="section shell">
        <p className="eyebrow">SELECTED WORK</p><div className="sectionHead"><h2>Projects built around real business needs.</h2><p>From customer-facing websites to operational platforms.</p></div>
        <div className="projectGrid">{projects.map((p,i) => <article className="project" key={p.title}>
          <div className="projectNo">0{i+1}</div><p className="projectType">{p.type}</p><h3>{p.title}</h3><p>{p.description}</p>
          <div className="projectStack">{p.stack.map(x => <span key={x}>{x}</span>)}</div>
          {p.live && <a href={p.live} target="_blank" rel="noreferrer">View live project <ArrowUpRight size={16}/></a>}
        </article>)}</div>
      </section>

      <section id="experience" className="section alt"><div className="shell">
        <p className="eyebrow">EXPERIENCE</p><h2>A multidisciplinary perspective.</h2>
        <div className="timeline">{experience.map(([role,company,text]) => <div className="experience" key={role+company}><div><h3>{role}</h3><strong>{company}</strong></div><p>{text}</p></div>)}</div>
      </div></section>

      <section className="contact shell">
        <p className="eyebrow">LET'S BUILD SOMETHING USEFUL</p><h2>Looking for a developer who understands both code and business?</h2>
        <p>I’m open to frontend, React, full-stack, and product-focused development opportunities.</p>
        <div className="actions center"><a className="primary" href="mailto:daigjun444@gmail.com"><Mail size={18}/> Contact me</a><a className="secondary" href="https://github.com/jundaig007" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a><a className="secondary" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a></div>
      </section>
    </main>
    <footer className="shell"><span>© 2026 Jun Daig</span><span>Built with React & Vite</span></footer>
  </div>
}

export default App
