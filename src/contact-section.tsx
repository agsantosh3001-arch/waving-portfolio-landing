type ContactSectionProps = { email: string; github: string }

export default function ContactSection({ email, github }: ContactSectionProps) {
  return (
    <section className="contact-transmission" id="contact" aria-labelledby="contact-title">
      <div className="contact-transmission-shell">
        <div className="contact-transmission-topline" data-scroll-reveal="up">
          <span><i /> LAST PAGE / FIRST HELLO</span>
          <span>OPEN FREQUENCY <b>✳</b> ALWAYS ROOM FOR A GOOD IDEA</span>
        </div>

        <div className="contact-transmission-hero">
          <div className="contact-transmission-copy" data-scroll-reveal="left">
            <p className="contact-transmission-kicker">FOR THE IDEA THAT WON'T LEAVE YOU ALONE</p>
            <h2 id="contact-title">Got a spark?<br /><em>Send it</em><br />my way<span>.</span></h2>
            <p className="contact-transmission-quote">Have an idea? <strong>Let’s turn it into something real.</strong></p>
            <div className="contact-transmission-note"><span>✳</span><p>Big plans, tiny sketches, strange what-ifs — I’m all ears.</p></div>
          </div>

          <div className="contact-transmission-art" data-scroll-reveal="scale">
            <div className="contact-transmission-art-label">MESSAGE / OUTGOING</div>
            <span className="contact-transmission-art-orbit contact-transmission-art-orbit--one" />
            <span className="contact-transmission-art-orbit contact-transmission-art-orbit--two" />
            <img src="/contact-transmission.svg" alt="A hand-printed retro letter and paper plane tracing a red signal path" />
            <span className="contact-transmission-art-index">✳ <b>V / CONNECT</b></span>
          </div>
        </div>

        <div className="contact-runway" data-scroll-reveal="up">
          <div className="contact-runway-heading">
            <div className="contact-runway-intro">
              <span>CHOOSE YOUR TRANSMISSION <i>/</i> NO. 17</span>
              <p>No perfect pitch needed.<br /><strong>Just tell me what you’re imagining.</strong></p>
            </div>
            <div className="contact-runway-end"><span>THREE WAYS IN<br />ONE GOOD CONVERSATION</span><i>〰</i></div>
          </div>
          <div className="contact-actions">
            <a className="contact-action contact-action--primary" data-scroll-reveal="up" href={`mailto:${email}?subject=${encodeURIComponent("Let's build something real")}`} aria-label="Contact Vivan about building something together">
              <span className="contact-action-meta">01 <i>/</i> START A PROJECT</span>
              <strong>CONTACT<br />ME</strong>
              <b>↗</b>
              <i className="contact-action-caption">OPEN A CONVERSATION</i>
              <span className="contact-action-underline"><i /></span>
            </a>
            <a className="contact-action contact-action--email" data-scroll-reveal="up" href={`mailto:${email}`} aria-label={`Email Vivan at ${email}`}>
              <span className="contact-action-meta">02 <i>/</i> WRITE A NOTE</span>
              <strong>EMAIL<br />VIVAN</strong>
              <b>✉</b>
              <i className="contact-action-caption">{email}</i>
              <span className="contact-action-underline"><i /></span>
            </a>
            <a className="contact-action contact-action--github" data-scroll-reveal="up" href={github} target="_blank" rel="noreferrer" aria-label="Visit Vivan's GitHub account">
              <span className="contact-action-meta">03 <i>/</i> SEE THE WORK</span>
              <strong>GITHUB<br />FIELDNOTES</strong>
              <b>↗</b>
              <i className="contact-action-caption">PROJECTS, EXPERIMENTS &amp; CODE</i>
              <span className="contact-action-underline"><i /></span>
            </a>
          </div>
        </div>

        <footer className="contact-transmission-footer">
          <span>VIVAN AGARWAL <i>·</i> GRAPHIC DESIGNER &amp; VIBE CODER</span>
          <span>MADE OF IDEAS &amp; A BIT OF CODE <b>✳</b></span>
        </footer>
      </div>
    </section>
  )
}
