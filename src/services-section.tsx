import { useEffect, useRef, type CSSProperties } from "react"

const services = [
  {
    number: "01",
    title: "Full-stack web development",
    note: "Front to back, designed to feel like one thought.",
    symbol: "{ }",
    tone: "signal",
    size: "feature",
  },
  {
    number: "02",
    title: "AI applications & agents",
    note: "Useful intelligence, given a clear job to do.",
    symbol: "✳",
    tone: "orbit",
  },
  {
    number: "03",
    title: "SaaS products",
    note: "Promising sparks shaped into useful products.",
    symbol: "↗",
    tone: "paper",
  },
  {
    number: "04",
    title: "UI/UX & web design",
    note: "Interfaces with a point of view and a clear path.",
    symbol: "◉",
    tone: "paper",
  },
  {
    number: "05",
    title: "Automation",
    note: "Let the repeat work run itself.",
    symbol: "⟳",
    tone: "ink",
  },
  {
    number: "06",
    title: "Graphic & video work",
    note: "Identity, image and motion with a little voltage.",
    symbol: "▧",
    tone: "orbit",
  },
]

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const elements = section.querySelectorAll<HTMLElement>("[data-service-reveal]")
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add("is-visible")
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: "0px 0px -4% 0px" })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="services" id="what-i-do" aria-labelledby="services-title" ref={sectionRef}>
      <div className="services-grid-paper" aria-hidden="true" />
      <div className="services-inner">
        <div className="services-topline" data-service-reveal>
          <span><i /> WHAT I DO</span>
          <span>INDEPENDENT BY DESIGN&nbsp; / &nbsp;CURIOUS BY DEFAULT</span>
        </div>

        <header className="services-intro" data-service-reveal>
          <p className="services-kicker">A SMALL STUDIO FOR BIG WHAT-IFS</p>
          <h2 id="services-title">The Make-It-Real<br /><em>Department.</em><span className="services-period">✳</span></h2>
          <div className="services-intro-note">
            <span className="services-scribble" aria-hidden="true">↘</span>
            <p>One idea can become a whole lot of things.<br /><strong>Here are a few ways I bring it to life.</strong></p>
          </div>
        </header>

        <div className="services-board-label" data-service-reveal>
          <span>THE CURRENT TOOLKIT</span>
          <span className="services-board-line" />
          <span>06 WAYS TO MAKE A MARK</span>
        </div>

        <div className="services-board">
          {services.map((service, index) => (
            <article
              className={`service-card service-card--${service.tone} ${service.size ? `service-card--${service.size}` : ""}`}
              data-service-reveal
              style={{ "--service-delay": `${index * 90}ms` } as CSSProperties}
              key={service.number}
            >
              <span className="service-number">{service.number}<i> / 06</i></span>
              <span className="service-symbol" aria-hidden="true">{service.symbol}</span>
              <div className="service-copy">
                <h3>{service.title}</h3>
                <p>{service.note}</p>
              </div>
              <span className="service-arrow" aria-hidden="true">↗</span>
              <span className="service-thread" aria-hidden="true" />
            </article>
          ))}
        </div>

        <footer className="services-footer" data-service-reveal>
          <span>START WITH A GOOD QUESTION.</span>
          <span className="services-footer-mark" aria-hidden="true">V / 01</span>
          <span>END WITH SOMETHING REAL.</span>
        </footer>
      </div>
    </section>
  )
}
