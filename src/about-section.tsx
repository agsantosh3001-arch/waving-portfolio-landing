import { useEffect, useRef, type CSSProperties } from "react"

const skills = ["Visual identity", "Poster design", "Creative coding", "Web experiments"]

const hobbies = [
  { number: "01", emoji: "🎮", title: "Gaming", text: "Strategy, competitive & story-driven games", signal: "RESPAWN / REFRAME" },
  { number: "02", emoji: "📸", title: "Photography", text: "Capturing places, architecture and interesting moments", signal: "NOTICE THE DETAILS" },
  { number: "03", emoji: "🎵", title: "Music", text: "Discovering music and exploring different genres", signal: "FIND A NEW FREQUENCY" },
]

const snapshots = [
  { number: "01", title: "Make it mean something", text: "Start with a clear idea, then give it a visual voice." },
  { number: "02", title: "Make it move", text: "Bring design and code together for experiences with a little energy." },
  { number: "03", title: "Keep exploring", text: "Try unexpected type, color and motion until the details click." },
]

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const elements = section.querySelectorAll<HTMLElement>("[data-reveal]")
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }

    let observer: IntersectionObserver
    try {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-visible")
          entry.target.closest(".about-timeline")?.classList.add("is-visible")
          observer.unobserve(entry.target)
        })
      }, { threshold: 0, rootMargin: "0px" })

      elements.forEach((element) => observer.observe(element))
    } catch {
      elements.forEach((element) => element.classList.add("is-visible"))
      return
    }
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="about" aria-labelledby="about-title" ref={sectionRef}>
      <div className="about-grain" aria-hidden="true" />
      <div className="about-inner">
        <header className="about-topline" data-reveal="from-top">
          <span className="about-index"><i /> A LITTLE ABOUT ME</span>
          <nav className="about-jumps" aria-label="About section shortcuts">
            <a href="#hobbies">HOBBIES <span aria-hidden="true">↘</span></a>
            <a href="#timeline">TIMELINE <span aria-hidden="true">↘</span></a>
          </nav>
          <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }) }}>
            BACK TO THE POSTER <span aria-hidden="true">↗</span>
          </a>
        </header>

        <div className="about-intro">
          <div className="about-heading-wrap" data-reveal="from-left">
            <p className="about-kicker">DESIGN × CODE × CURIOSITY</p>
            <h2 id="about-title">Ideas with<br /><em>a little</em> <span>extra</span><br />character.</h2>
            <div className="about-rule"><span /><b>✳</b><span /></div>
          </div>

          <div className="about-copy" data-reveal="from-right">
            <div className="about-sticker" aria-hidden="true" data-reveal="pop"><span>ALWAYS</span><strong>IN<br />PROGRESS</strong><span>✳ &nbsp; SINCE 2011 &nbsp; ✳</span></div>
            <p className="about-lead">Hey, I’m <strong>Vivan Agarwal</strong> — a graphic designer and vibe coder who likes making ideas feel alive.</p>
            <p className="about-body">I’m interested in the space where bold visuals meet playful technology: expressive typography, memorable identities and little web moments that make people stop and look. This is a starter bio for now; the best projects and personal details are still to come.</p>
            <div className="about-tags" aria-label="Creative interests" data-reveal="from-bottom">
              {skills.map((skill, index) => <span key={skill} style={{ "--tag-delay": `${index * 90}ms` } as CSSProperties}><small>0{index + 1}</small>{skill}</span>)}
            </div>
          </div>
        </div>

        <div className="about-hobbies" id="hobbies" data-reveal="from-bottom">
          <header className="hobbies-heading" data-reveal="from-left">
            <div>
              <p className="about-bottom-label">SIDE QUESTS / SOURCE MATERIAL</p>
              <h3 className="hobbies-title">The side quests that <em>feed the work.</em></h3>
            </div>
            <p className="hobbies-aside">A little competition.<br />A new perspective. A good soundtrack.</p>
          </header>
          <div className="hobbies-track" aria-hidden="true"><span /><span /><span /></div>
          <div className="hobbies-grid" aria-label="Hobbies and creative inspiration">
            {hobbies.map((hobby, index) => (
              <article className={`hobby-card hobby-card--${index + 1}`} data-reveal={index % 2 ? "from-bottom" : "from-top"} key={hobby.number}>
                <div className="hobby-card-top"><span>{hobby.number} / SIDE QUEST</span><span className="hobby-pulse" aria-hidden="true">✳</span></div>
                <div className="hobby-visual" aria-hidden="true">
                  <span className="hobby-orbit hobby-orbit--one" />
                  <span className="hobby-orbit hobby-orbit--two" />
                  <span className="hobby-emoji">{hobby.emoji}</span>
                  <span className="hobby-signal">{hobby.signal}</span>
                  {index === 0 && <span className="hobby-game-dots"><i /><i /><i /><i /></span>}
                  {index === 1 && <span className="hobby-viewfinder"><i /><i /><i /><i /></span>}
                  {index === 2 && <span className="hobby-equalizer"><i /><i /><i /><i /><i /><i /><i /></span>}
                </div>
                <div className="hobby-card-copy"><h4>{hobby.title}</h4><p>{hobby.text}</p></div>
                <span className="hobby-card-index" aria-hidden="true">{hobby.number}</span>
              </article>
            ))}
          </div>
          <p className="hobbies-footnote" data-reveal="from-bottom"><span>COLLECT EXPERIENCES</span><b>→</b><span>TURN THEM INTO IDEAS</span></p>
        </div>

        <div className="about-bottom" id="timeline">
          <div className="about-bottom-heading" data-reveal="from-bottom">
            <div>
              <p className="about-bottom-label">THE WAY I LIKE TO MAKE THINGS</p>
              <h3 className="timeline-heading">A small idea takes <em>a journey.</em></h3>
            </div>
            <span className="timeline-aside">THREE STEPS<br />ONE HAPPY ACCIDENT</span>
          </div>
          <div className="about-timeline">
            <div className="timeline-track" aria-hidden="true" />
            {snapshots.map((item, index) => (
              <article className={`about-timeline-item ${index % 2 === 0 ? "timeline-left" : "timeline-right"}`} data-reveal={index % 2 === 0 ? "from-left" : "from-right"} key={item.number}>
                <span className="timeline-node" aria-hidden="true"><i /></span>
                <div className="timeline-card">
                  <span className="timeline-card-top"><b>{item.number} / 03</b><i>{["THINK", "MAKE", "PLAY"][index]}</i></span>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                  <span className="timeline-doodle" aria-hidden="true">{["✳", "↗", "∞"][index]}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
        <footer className="about-footer" data-reveal="from-bottom"><span>VIVAN AGARWAL</span><span>MADE OF IDEAS &amp; A BIT OF CODE</span><span>© 2011—2026</span></footer>
      </div>
    </section>
  )
}
