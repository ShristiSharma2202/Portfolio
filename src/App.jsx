
import React, { useEffect, useState } from 'react';

import {
  ArrowDown,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  Server,
  Database,
  Bug,
  GitBranch,
  GraduationCap,
  ExternalLink,
  Download,
  MapPin,
  Phone,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const navItems = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Education', 'education'],
  ['Certifications', 'certifications'],
  ['Contact', 'contact'],
];

const skills = [
  { title: 'Programming Language', items: ['Python'], icon: Code2 },
  {
    title: 'Backend',
    items: ['Django', 'Django REST Framework (DRF)', 'REST APIs'],
    icon: Server,
  },
  {
    title: 'API & Testing',
    items: [
      'Swagger / OpenAPI',
      'Postman',
      'Logging',
      'QA Testing',
      'API Testing',
      'Basic Debugging',
    ],
    icon: Bug,
  },
  { title: 'Database', items: ['MySQL'], icon: Database },
  { title: 'Web', items: ['HTML', 'CSS'], icon: Code2 },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code'], icon: GitBranch },
];


const certificates = [
  {
    number: '01',
    title: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    category: 'NETWORKING',
    file: '/certificates/CCNA%20Introduction%20to%20Networks.pdf',
    color: 'lavender',
  },
  {
    number: '02',
    title: 'Web Development Internship',
    issuer: 'CodSoft',
    category: 'INTERNSHIP',
    file: '/certificates/Web%20Development%20Internship.pdf',
    color: 'peach',
  },
  {
    number: '03',
    title: 'Web Development',
    issuer: 'EduSkills Academy',
    category: 'WEB DEVELOPMENT',
    file: '/certificates/Web%20Development.pdf',
    color: 'mint',
  },
  {
    number: '04',
    title: 'Prompt Engineering for Everyone',
    issuer: 'IBM SkillsNetwork / Cognitive Class',
    category: 'GENERATIVE AI',
    file: '/certificates/Prompt%20Engineering%20for%20Everyone.pdf',
    color: 'blue',
  },
  {
    number: '05',
    title: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'Tata / Forage',
    category: 'DATA ANALYTICS',
    file: '/certificates/GenAI%20Powered%20Data%20Analytics%20Job%20Simulation.pdf',
    color: 'pink',
  },
  {
    number: '06',
    title: 'Build REST APIs with Django REST Framework and Python',
    issuer: 'Udemy',
    category: 'BACKEND DEVELOPMENT',
    file: '/certificates/Build%20REST%20APIs%20with%20Django%20REST%20Framework%20and%20Python.pdf',
    color: 'yellow',
  },
  {
    number: '07',
    title: 'Machine Learning with Python',
    issuer: 'IBM SkillsBuild',
    category: 'MACHINE LEARNING',
    file: '/certificates/Machine%20Learning%20with%20Python.pdf',
    color: 'mint',
  },
  {
    number: '08',
    title: 'Getting Started with Tableau',
    issuer: 'Analytics Vidhya',
    category: 'DATA VISUALIZATION',
    file: '/certificates/Getting%20Started%20with%20Tableau.pdf',
    color: 'lavender',
  },
];


function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      const sections = navItems
        .map(([, id]) => document.getElementById(id))
        .filter(Boolean);

      const current = sections
        .filter((element) => element.getBoundingClientRect().top <= 150)
        .pop();

      if (current) setActive(current.id);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Shristi Sharma home"
        >
          <span className="brand-mark">
            S<span>.</span>
          </span>
          <span>SHRISTI SHARMA</span>
        </a>

        <button
          className="mobile-menu-button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav
          className={menuOpen ? 'nav-links nav-open' : 'nav-links'}
          aria-label="Main navigation"
        >
          {navItems.map(([label, id]) => (
            <a
              key={id}
              className={active === id ? 'nav-link active' : 'nav-link'}
              href={`#${id}`}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Let's talk <ArrowUpRight size={15} />
        </a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy reveal">
            <div className="availability">
              <span className="status-dot" />
              ASPIRING ASPIRING BACKEND DEVELOPER · MCA STUDENT
            </div>

            <p className="hero-intro">Hello, I'm Shristi Sharma</p>

            <h1>
              Building reliable
              <br />
              backend <span>experiences.</span>
            </h1>

            <p className="hero-description">
              I work with Python, Django REST Framework, and API testing
              to help build and maintain dependable web applications.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <ArrowUpRight size={17} />
              </a>

              <a
                href="/Shristi_Resume_.pdf"
                download="Shristi_Resume_.pdf"
                className="button button-secondary"
              >
                <Download size={16} /> Download resume
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <MapPin size={15} /> Jehanabad, Bihar
              </span>
              <span className="meta-separator" />
              <span>
                <GraduationCap size={16} /> MCA · 2026–Present
              </span>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />

            <div className="portrait-frame">
              <div className="portrait-photo-wrap">
                <img
                  src="/Shristi%20formal%20Photograph.jpeg"
                  alt="Shristi Sharma — Aspiring Backend Developer"
                  className="profile-photo"
                />
                <div className="portrait-photo-shade" />
                <div className="portrait-top">
                  <span>PROFILE / 01</span>
                  <Sparkles size={17} />
                </div>
                <div className="portrait-bottom">
                  <span>SHRISTI SHARMA</span>
                  <span>ASPIRING BACKEND DEVELOPER</span>
                </div>
              </div>
            </div>

            <div className="floating-card float-top">
              <span className="float-icon">
                <Code2 size={17} />
              </span>
              <span>
                <b>Python</b>
                <small>Programming</small>
              </span>
            </div>

            <div className="floating-card float-bottom">
              <span className="float-icon">
                <Server size={17} />
              </span>
              <span>
                <b>Django REST</b>
                <small>Backend development</small>
              </span>
            </div>

            <div className="visual-caption">
              Curiosity. Consistency. Clean code.
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span className="scroll-line" />
            Scroll to explore <ArrowDown size={14} />
          </a>
        </section>

        <section className="section-wrap about-section" id="about">
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title={
              <>
                Learning by building.
                <br />
                <span>Growing with every project.</span>
              </>
            }
          />

          <div className="about-grid">
            <div className="about-lead">
              <p>
                I'm an aspiring backend developer with hands-on experience
                in API documentation, API testing, QA workflows, backend
                logging, and team collaboration.
              </p>
              <p>
                Through my internship at Sailax Global Technologies on
                Alerteefy, I've gained practical exposure to backend
                development workflows and maintaining application reliability.
              </p>
            </div>

            <div className="about-details">
              <div className="detail-row">
                <span className="detail-number">01</span>
                <div>
                  <h3>Backend-focused</h3>
                  <p>Python, Django, Django REST Framework, and REST APIs.</p>
                </div>
              </div>

              <div className="detail-row">
                <span className="detail-number">02</span>
                <div>
                  <h3>Quality-minded</h3>
                  <p>
                    Testing requests and responses, checking workflows,
                    and verifying fixes.
                  </p>
                </div>
              </div>

              <div className="detail-row">
                <span className="detail-number">03</span>
                <div>
                  <h3>Always learning</h3>
                  <p>
                    Currently pursuing my MCA while building on my BCA
                    foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title={
              <>
                Technical <span>skills.</span>
              </>
            }
            description="Technologies and tools listed in my resume."
          />

          <div className="skills-grid">
            {skills.map(({ title, items, icon: Icon }, index) => (
              <article
                className="skill-card reveal"
                key={title}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="skill-card-top">
                  <span className="skill-icon">
                    <Icon size={20} />
                  </span>
                  <span className="skill-index">0{index + 1}</span>
                </div>

                <h3>{title}</h3>

                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <SectionHeading
            eyebrow="WHERE I'VE CONTRIBUTED"
            title={
              <>
                Experience that <span>matters.</span>
              </>
            }
            description="My professional experience so far."
          />

          <article className="experience-card">
            <div className="experience-side">
              <div className="company-symbol">A</div>
              <p>EXPERIENCE / 01</p>
              <span>APR 2026 — PRESENT</span>
            </div>

            <div className="experience-main">
              <div className="experience-title-row">
                <div>
                  <h3>Backend Development Intern</h3>
                  <p className="company-name">
                    Sailax Global Technologies <span>·</span> Alerteefy
                  </p>
                </div>
                <span className="current-pill">
                  <i /> Internship
                </span>
              </div>

              <p className="experience-summary">
                Contributing to backend workflows, API quality, documentation,
                and application monitoring as part of a development team.
              </p>

              <ul className="contribution-list">
                <li>
                  <CheckCircle2 size={17} />
                  Created and maintained API documentation using Swagger/OpenAPI.
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  Tested API workflows, authentication, requests, and responses
                  using Postman and Swagger.
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  Performed QA testing, identified issues, verified fixes,
                  and carried out basic debugging.
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  Implemented backend logging to support application monitoring
                  and issue tracking.
                </li>
                <li>
                  <CheckCircle2 size={17} />
                  Used Git and GitHub for branch-based development, code updates,
                  pull requests, and collaboration.
                </li>
              </ul>

              <div className="experience-tags">
                <span>Python</span>
                <span>Django / DRF</span>
                <span>Swagger</span>
                <span>Postman</span>
                <span>Git & GitHub</span>
              </div>
            </div>
          </article>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title={
              <>
                Projects I've <span>worked on.</span>
              </>
            }
            description="A look at the projects included in my resume."
          />

          <div className="projects-grid">
            <article className="project-card project-chatbot reveal">
              <div className="project-art chatbot-art">
                <div className="mock-window">
                  <div className="mock-window-bar">
                    <i />
                    <i />
                    <i />
                    <span>FAQ assistant</span>
                  </div>

                  <div className="chat-content">
                    <div className="chat-avatar">AI</div>
                    <div className="chat-bubble">
                      Hi! How can I help you today?
                    </div>
                    <div className="chat-user">How do I get started?</div>
                    <div className="chat-bubble bubble-small">
                      Here are some helpful answers…
                    </div>
                    <div className="chat-input">
                      Type your question <ArrowUpRight size={13} />
                    </div>
                  </div>
                </div>
                <span className="art-label">PROJECT / 01</span>
              </div>

              <div className="project-content">
                <div className="project-heading">
                  <span className="project-count">01</span>
                  <span className="project-type">TEAM PROJECT</span>
                </div>
                <h3>FAQ Chatbot with Dashboard</h3>
                <p>
                  Developed an FAQ chatbot with a dashboard for user interaction
                  and dynamic responses, including basic backend functionality
                  for handling responses.
                </p>
                <div className="project-tags">
                  <span>Chatbot</span>
                  <span>Dashboard</span>
                  <span>Backend functionality</span>
                </div>
                <div className="project-links">
                  <span className="placeholder-link">
                    GitHub link to be added <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </article>

            <article className="project-card project-smartdiet reveal reveal-delay">
              <div className="project-art diet-art">
                <div className="diet-panel">
                  <div className="diet-panel-heading">
                    <span>YOUR MEAL PLAN</span>
                    <Sparkles size={15} />
                  </div>
                  <div className="diet-greeting">A plan made for you.</div>

                  <div className="diet-stats">
                    <div>
                      <small>Daily goal</small>
                      <b>Personalized</b>
                    </div>
                    <div>
                      <small>Plan type</small>
                      <b>AI-generated</b>
                    </div>
                  </div>

                  <div className="meal-row">
                    <span className="meal-dot meal-one" />
                    <div>
                      <b>Breakfast</b>
                      <small>Personalized meal</small>
                    </div>
                    <span>↗</span>
                  </div>

                  <div className="meal-row">
                    <span className="meal-dot meal-two" />
                    <div>
                      <b>Lunch</b>
                      <small>Personalized meal</small>
                    </div>
                    <span>↗</span>
                  </div>

                  <div className="meal-row">
                    <span className="meal-dot meal-three" />
                    <div>
                      <b>Dinner</b>
                      <small>Personalized meal</small>
                    </div>
                    <span>↗</span>
                  </div>
                </div>
                <span className="art-label">PROJECT / 02</span>
              </div>

              <div className="project-content">
                <div className="project-heading">
                  <span className="project-count">02</span>
                  <span className="project-type">TEAM PROJECT</span>
                </div>
                <h3>SmartDiet — AI Diet Planner</h3>
                <p>
                  Developed a web-based AI diet planning application with
                  multi-step forms and ChatGPT API integration to generate
                  meal plans based on users' goals, lifestyle, and preferences.
                </p>
                <div className="project-tags">
                  <span>Web application</span>
                  <span>ChatGPT API</span>
                  <span>Multi-step forms</span>
                </div>
                <div className="project-links">
                  <span className="placeholder-link">
                    GitHub link to be added <ExternalLink size={14} />
                  </span>
                </div>
              </div>
            </article>
          </div>

          <p className="project-note">
            <Sparkles size={15} /> Project visuals above are illustrative UI
            concepts, not actual screenshots.
          </p>
        </section>

        <section className="section-wrap education-section" id="education">
          <SectionHeading
            eyebrow="MY EDUCATION"
            title={
              <>
                The foundation <span>so far.</span>
              </>
            }
          />

          <div className="education-list">
            <article className="education-item">
              <div className="education-icon">
                <GraduationCap size={21} />
              </div>
              <div className="education-copy">
                <span className="education-year">2026 — PRESENT</span>
                <h3>Master of Computer Applications (MCA)</h3>
                <p>Manipal University Jaipur · Online</p>
              </div>
              <span className="education-status">Currently pursuing</span>
            </article>

            <article className="education-item">
              <div className="education-icon">
                <GraduationCap size={21} />
              </div>
              <div className="education-copy">
                <span className="education-year">2023 — 2026</span>
                <h3>Bachelor of Computer Applications (BCA)</h3>
                <p>Galgotias University</p>
              </div>
              <span className="education-score">
                8.35 <small>CGPA</small>
              </span>
            </article>
          </div>
        </section>

        {/* Pastel certificate gallery */}
        <section
          className="section-wrap certifications-section"
          id="certifications"
        >
          <SectionHeading
            eyebrow="CONTINUOUS LEARNING"
            title={
              <>
                Certifications & <span>achievements.</span>
              </>
            }
            description="Courses and credentials I've earned along my learning journey."
          />

          <div className="cert-grid">
            {certificates.map((cert) => (
              <article
                className={`cert-card cert-${cert.color}`}
                key={cert.number}
              >
                <div className="cert-card-top">
                  <span className="cert-category">{cert.category}</span>
                  <span className="cert-number">{cert.number}</span>
                </div>

                <div className="cert-card-content">
                  <span className="cert-decoration" aria-hidden="true">
                    ✳
                  </span>
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer}</p>
                </div>

                <a
                  className="cert-view-link"
                  href={cert.file}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Certificate <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-glow" />

          <div className="contact-main">
            <p className="eyebrow">HAVE AN OPPORTUNITY?</p>
            <h2>
              Let's build something
              <br />
              <span>meaningful together.</span>
            </h2>
            <p className="contact-description">
              As an aspiring backend developer, I'm eager to keep learning and contributing
              to thoughtful software projects.
            </p>
            <a
              className="button button-primary"
              href="mailto:shristisharma2106@gmail.com"
            >
              Get in touch <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="contact-details">
            <a
              href="mailto:shristisharma2106@gmail.com"
              className="contact-row"
            >
              <span className="contact-icon">
                <Mail size={18} />
              </span>
              <span>
                <small>EMAIL ME</small>
                <b>shristisharma2106@gmail.com</b>
              </span>
              <ArrowUpRight size={17} />
            </a>

            <div className="contact-row">
              <span className="contact-icon">
                <Phone size={18} />
              </span>
              <span>
                <small>PHONE</small>
                <b>9508980429</b>
              </span>
            </div>

            <div className="contact-row">
              <span className="contact-icon">
                <MapPin size={18} />
              </span>
              <span>
                <small>LOCATION</small>
                <b>Jehanabad, Bihar, India</b>
              </span>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/ShristiSharma2202"
                target="_blank"
                rel="noopener noreferrer"
              >
               <Code2 size={20} />
               <span>GitHub</span>
               <small>View profile ↗</small>
              </a>

              <a
                href="https://www.linkedin.com/in/shristisharma0421/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
                <span>LinkedIn</span>
                <small>View profile ↗</small>
              </a>
            </div>

          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">
            S<span>.</span>
          </span>
          <span>SHRISTI SHARMA</span>
        </a>
        <p>Designed with care · Built to keep learning.</p>
        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </div>
  );
}

export default App;
