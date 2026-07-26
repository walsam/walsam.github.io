import { useEffect, useState } from 'react'
import { type Language, profile, translations } from './content'

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M11 5l5 5-5 5" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 8.2V18M6.5 5.5v.1M10.5 18v-5.5c0-2.8 4-3.1 4 0V18M10.5 9v9M3.5 3.5h17v17h-17z" />
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem('wm-theme')
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('wm-language')
    return saved === 'fr' ? 'fr' : 'en'
  })
  const t = translations[language]

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
    localStorage.setItem('wm-theme', dark ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = t.documentTitle
    document.querySelector('meta[name="description"]')?.setAttribute('content', t.documentDescription)
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', t.documentTitle)
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', t.documentDescription)
    localStorage.setItem('wm-language', language)
  }, [language, t.documentDescription, t.documentTitle])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">{t.skip}</a>

      <header className="topbar">
        <a className="brand" href="#top" onClick={closeMenu} aria-label={t.homeLabel}>
          <span className="brand-mark">{profile.initials}</span>
          <span>{profile.name}</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? t.close : t.menu}</span>
          <span className="menu-glyph" aria-hidden="true">{menuOpen ? '×' : '↗'}</span>
        </button>

        <nav id="primary-nav" className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>{t.nav.about}</a>
          <a href="#work" onClick={closeMenu}>{t.nav.journey}</a>
          <a href="#projects" onClick={closeMenu}>{t.nav.projects}</a>
          <a href="#approach" onClick={closeMenu}>{t.nav.toolkit}</a>
          <a href="#contact" onClick={closeMenu}>{t.nav.contact}</a>
        </nav>

        <div className="header-actions">
          <button className="language-toggle" type="button" onClick={() => setLanguage((value) => value === 'en' ? 'fr' : 'en')} aria-label={`${t.languageLabel}: ${language.toUpperCase()}`}>
            <span className={language === 'en' ? 'active' : ''}>EN</span>
            <span aria-hidden="true">/</span>
            <span className={language === 'fr' ? 'active' : ''}>FR</span>
          </button>
          <button className="theme-toggle" type="button" onClick={() => setDark((value) => !value)} aria-label={dark ? t.themeToLight : t.themeToDark}>
            <span aria-hidden="true">{dark ? '☼' : '◐'}</span>
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-kicker">
            <span className="pulse" aria-hidden="true" />
            {t.availability}
          </div>

          <h1>
            <span>Walid</span>
            <span className="outline-word">Maarad</span>
          </h1>

          <div className="hero-bottom">
            <p className="hero-statement">
              {t.hero.before} <em>{t.hero.emphasis}</em> {t.hero.after}
            </p>
            <a className="round-link" href="#work" aria-label={t.hero.exploreLabel}>
              <span>{t.hero.explore}</span>
              <ArrowIcon />
            </a>
          </div>

          <div className="hero-meta" aria-label="Profile details">
            <span>{t.role}</span>
            <span>{t.location}</span>
            <span>{t.hero.meta}</span>
          </div>
        </section>

        <section className="intro section" id="about">
          <div className="section-label"><span>01</span> {t.about.label}</div>
          <div className="intro-copy">
            <p className="eyebrow">{t.about.eyebrow}</p>
            <h2>{t.about.titleBefore} <span>{t.about.titleAccent}</span>{t.about.titleAfter}</h2>
            <div className="two-col-copy">
              {t.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <div className="section-label light"><span>02</span> {t.work.label}</div>
          <div className="work-heading">
            <p className="eyebrow">{t.work.eyebrow}</p>
            <h2>{t.work.title}</h2>
          </div>

          <div className="career-timeline">
            {t.careerStages.map((stage, index) => (
              <article className="career-stage" key={stage.client}>
                <div className="career-number">0{index + 1}</div>
                <div className="career-identity">
                  <p>{stage.period}</p>
                  <h3>{stage.client}</h3>
                  <span>{stage.title}</span>
                </div>
                <div className="career-body">
                  <p className="career-summary">{stage.summary}</p>
                  <ul>{stage.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                  <div className="tag-list">{stage.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="section-label"><span>03</span> {t.projectsSection.label}</div>
          <div className="projects-heading">
            <p className="eyebrow">{t.projectsSection.eyebrow}</p>
            <h2>{t.projectsSection.title}</h2>
          </div>
          <div className="project-grid">
            {t.projects.map((project) => (
              <article className="project-card" key={project.index}>
                <div className="project-topline"><span>{project.index}</span><span>{project.category}</span></div>
                <p className="project-client">{project.client}</p>
                <h3>{project.title}</h3>
                <p className="project-copy">{project.copy}</p>
                <div className="tag-list dark-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="confidential-note">{t.projectsSection.note}</p>
        </section>

        <section className="approach section" id="approach">
          <div className="section-label"><span>04</span> {t.toolkit.label}</div>
          <div className="approach-heading">
            <p className="eyebrow">{t.toolkit.eyebrow}</p>
            <h2>{t.toolkit.title}</h2>
          </div>

          <div className="principles-grid">
            {t.principles.map((principle) => (
              <article className="principle-card" key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </article>
            ))}
          </div>

          <div className="capabilities">
            <p>{t.toolkit.leadershipLabel}</p>
            <ul>
              {t.capabilities.map((capability) => <li key={capability}>{capability}</li>)}
            </ul>
          </div>

          <div className="skill-groups">
            {t.skillGroups.map((group) => (
              <article key={group.label}>
                <p>{group.label}</p>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>

          <div className="education-block">
            <div>
              <p className="eyebrow">{t.toolkit.educationLabel}</p>
              <h3>{t.toolkit.educationTitle}</h3>
            </div>
            <div className="education-list">
              {t.education.map((item) => (
                <article key={item.degree}>
                  <span>{item.year}</span>
                  <h4>{item.degree}</h4>
                  <p>{item.school}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="community-block">
            <p className="eyebrow">{t.toolkit.communityLabel}</p>
            {t.community.map((item) => (
              <p key={item.name}><strong>{item.name}</strong> · {item.role} <span>{item.period}</span></p>
            ))}
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="contact-orbit" aria-hidden="true">
            <span>{t.contact.orbit}</span>
          </div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2>{t.contact.titleBefore} <em>{t.contact.titleAccent}</em> {t.contact.titleAfter}</h2>
          <p>{t.contact.copy}</p>
          <div className="contact-actions">
            <a className="contact-button" href={profile.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon /> {t.contact.linkedin} <ArrowIcon />
            </a>
            <a className="contact-button secondary" href={profile.email}>{t.contact.email} <ArrowIcon /></a>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <span className="brand-mark">{profile.initials}</span>
          <p>{t.footer.statementOne}<br />{t.footer.statementTwo}</p>
        </div>
        <div className="footer-meta">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <a href="#top">{t.footer.backToTop}</a>
        </div>
      </footer>
    </div>
  )
}
