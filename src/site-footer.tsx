export default function SiteFooter() {
  return (
    <footer className="maker-footer" id="footer">
      <div className="maker-footer-shell">
        <div className="maker-footer-topline" data-scroll-reveal="up">
          <span><i /> END NOTES / VIVAN AGARWAL</span>
          <span>GRAPHIC DESIGNER <b>✳</b> VIBE CODER</span>
        </div>

        <div className="maker-footer-main">
          <div className="maker-footer-copy" data-scroll-reveal="left">
            <p className="maker-footer-kicker">ONE LAST THING BEFORE YOU GO</p>
            <h2>I draw the feeling.<br /><em>I build the thing.</em></h2>
            <p className="maker-footer-description">Graphic design, interactive websites, AI systems, and automation — all made to turn a good idea into something you can use.</p>
            <div className="maker-footer-ritual" aria-label="Draw, build, refine, repeat">
              <span>DRAW</span><i>↗</i><span>BUILD</span><i>↗</i><span>REFINE</span><i>↗</i><span>REPEAT</span><b>✳</b>
            </div>
          </div>

          <figure className="maker-footer-figure" data-scroll-reveal="scale">
            <span className="maker-footer-figure-label">DESK STUDY / 001</span>
            <img src="/creative-workbench.svg" alt="A retro illustrated workbench with a creative computer, pencil, and sketchbook" />
            <figcaption><span>IDEAS IN / REAL THINGS OUT</span><i>✳</i></figcaption>
          </figure>
        </div>

        <div className="maker-footer-bottom" data-scroll-reveal="up">
          <a className="maker-footer-signoff" href="#top" aria-label="Back to the top of the page">
            <span>VA</span><b>BACK TO THE TOP</b><i>↑</i>
          </a>
          <nav className="maker-footer-nav" aria-label="Footer navigation">
            <a href="#services"><i>01</i> WHAT I MAKE</a>
            <a href="#jarvis"><i>02</i> JARVIS</a>
            <a href="#stack"><i>03</i> THE STACK</a>
            <a href="#contact"><i>04</i> CONTACT</a>
          </nav>
          <span className="maker-footer-copyright">© 2026 <b>BUILT WITH CURIOSITY</b></span>
        </div>
      </div>
    </footer>
  )
}
