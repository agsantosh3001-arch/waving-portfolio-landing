import { useState } from "react"

const steps = [
  {
    number: "01",
    title: "Say what you need",
    tag: "VOICE · ELEVENLABS",
    mode: "VOICE INPUT",
    readout: "Turn conversation into a clear request.",
    detail: "I’m integrating ElevenLabs to give Jarvis a natural voice-agent layer, so a request can begin as a conversation.",
    glyph: "〰",
  },
  {
    number: "02",
    title: "Make sense of it",
    tag: "REASONING · HERMES AGENT",
    mode: "THE CORE BRAIN",
    readout: "Understand the ask. Work out the steps.",
    detail: "Hermes Agent is the core brain: it will interpret the request, reason about the steps, and decide what needs to happen.",
    glyph: "◎",
  },
  {
    number: "03",
    title: "Carry it through",
    tag: "EXECUTION · MY BACKEND",
    mode: "TASK EXECUTION",
    readout: "Pass the plan into real workflows.",
    detail: "Jarvis is designed to run workflows through my backend systems, turning an understood request into real task execution.",
    glyph: "↗",
  },
]

export default function JarvisSection() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="jarvis" id="jarvis" aria-labelledby="jarvis-title">
      <div className="jarvis-shell">
        <div className="jarvis-topline" data-scroll-reveal="up">
          <span><i /> A PERSONAL AI, IN THE MAKING</span>
          <span>INDEPENDENT LIFE PROJECT <b>№ 01</b></span>
        </div>

        <div className="jarvis-hero">
          <div className="jarvis-copy" data-scroll-reveal="left">
            <p className="jarvis-kicker">THE ASSISTANT THAT DOES THE NEXT THING</p>
            <h2 id="jarvis-title">Meet<br /><em>Jarvis</em><span className="jarvis-period">.</span></h2>
            <div className="jarvis-deck">
              <span className="jarvis-deck-mark">✳</span>
              <p>A voice in.<br /><strong>Real work out.</strong></p>
            </div>
            <p className="jarvis-description">
              I’m building a free, autonomous AI system that can understand what I need and help get it done. Jarvis brings AI reasoning, automation, voice interaction, and task execution into one personal digital assistant.
            </p>
            <div className="jarvis-status"><span className="jarvis-status-dot" /> CURRENTLY BUILDING <span>·</span> THE SYSTEM IS EVOLVING</div>
          </div>

          <div className="jarvis-art" data-scroll-reveal="scale" aria-label="Retro cartoon illustration of Jarvis as an orbiting assistant terminal">
            <div className="jarvis-art-note jarvis-art-note--top">VOICE<br />IN PROGRESS*</div>
            <div className="jarvis-orbit jarvis-orbit--outer" />
            <div className="jarvis-orbit jarvis-orbit--inner" />
            <img src="/jarvis-orbit.svg" alt="A retro cartoon assistant terminal surrounded by orbiting signals and workflow nodes" />
            <span className="jarvis-art-star">✳</span>
            <div className="jarvis-art-note jarvis-art-note--bottom">*VOICE LAYER<br />INTEGRATION IN PROGRESS</div>
            <div className="jarvis-art-index">J / 01 — AUTONOMY STUDY</div>
          </div>
        </div>

        <div className="jarvis-system">
          <div className="jarvis-system-heading" data-scroll-reveal="up">
            <p>FROM SIGNAL TO FOLLOW-THROUGH <span>↘</span></p>
            <small>THE JARVIS ROUTING BOARD <i>·</i> AN INTENDED WORKFLOW</small>
          </div>
          <div className="jarvis-console" data-scroll-reveal="up">
            <div className="jarvis-route" role="tablist" aria-label="Jarvis intended workflow">
              <div className="jarvis-route-caption"><span>INCOMING SIGNAL</span><b>REQUEST → RESULT</b></div>
              <span className="jarvis-route-wire" aria-hidden="true"><i /></span>
              {steps.map((step, index) => (
                <button
                  className={`jarvis-step${activeStep === index ? " is-active" : ""}`}
                  key={step.number}
                  id={`jarvis-tab-${index}`}
                  role="tab"
                  aria-selected={activeStep === index}
                  aria-controls="jarvis-step-detail"
                  onClick={() => setActiveStep(index)}
                >
                  <span className="jarvis-step-node"><i>{step.number}</i><b>{step.glyph}</b></span>
                  <span className="jarvis-step-words"><strong>{step.title}</strong><small>{step.tag}</small></span>
                  <span className="jarvis-step-arrow">↗</span>
                </button>
              ))}
              <div className="jarvis-finish"><span>✳</span><b>FOLLOW-THROUGH</b><small>THE GOAL</small></div>
            </div>
            <div className="jarvis-detail" id="jarvis-step-detail" role="tabpanel" aria-labelledby={`jarvis-tab-${activeStep}`}>
              <div className="jarvis-detail-head"><span>LIVE ROUTE / {steps[activeStep].number}</span><b><i /> CONCEPT IN DEVELOPMENT</b></div>
              <div className="jarvis-detail-body">
                <div className={`jarvis-signal jarvis-signal--${activeStep}`} aria-hidden="true">
                  <span className="jarvis-signal-ring jarvis-signal-ring--one" />
                  <span className="jarvis-signal-ring jarvis-signal-ring--two" />
                  <span className="jarvis-signal-ring jarvis-signal-ring--three" />
                  <b>{steps[activeStep].glyph}</b>
                  <i className="jarvis-signal-dot jarvis-signal-dot--one" />
                  <i className="jarvis-signal-dot jarvis-signal-dot--two" />
                </div>
                <div className="jarvis-detail-copy">
                  <span className="jarvis-detail-label">{steps[activeStep].mode}</span>
                  <h3>{steps[activeStep].readout}</h3>
                  <p>{steps[activeStep].detail}</p>
                </div>
              </div>
              <div className="jarvis-detail-foot"><span>PERSONAL ASSISTANT / JARVIS</span><span>STAGE {steps[activeStep].number} <i>OF 03</i></span></div>
            </div>
          </div>
        </div>

        <footer className="jarvis-footer" data-scroll-reveal="up">
          <span>BUILT WITH <b>ANTIGRAVITY</b></span>
          <span>THE CORE <b>HERMES AGENT</b></span>
          <span>VOICE LAYER <b>ELEVENLABS · INTEGRATING</b></span>
          <span className="jarvis-free">MADE TO BE FREE <i>✳</i></span>
        </footer>
      </div>
    </section>
  )
}
