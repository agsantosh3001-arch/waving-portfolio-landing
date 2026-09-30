import { useState } from "react"

type StackGroup = {
  name: string
  short: string
  note: string
  flow: string[]
  items: string[]
}

const groups: StackGroup[] = [
  {
    name: "AI, models & agents",
    short: "AI / AGENTS",
    note: "The reasoning layer: models, retrieval, prompts, and agents that can use tools to move work forward.",
    flow: ["PROMPT", "CONTEXT", "AGENT", "TOOLS"],
    items: ["Antigravity · primary AI development environment", "Hermes Agent · Jarvis core brain", "OpenRouter", "NVIDIA Build / NIM", "Kimi K2 / Kimi models", "Qwen", "GLM", "Claude", "Gemini", "RAG", "AI agents", "Multi-agent workflows", "Prompt engineering", "Context & tool calling", "AI automation"],
  },
  {
    name: "Voice AI",
    short: "VOICE",
    note: "The conversational layer explored for Jarvis: listen, understand, and respond with a natural voice.",
    flow: ["VOICE IN", "SPEECH → TEXT", "AI BRAIN", "TEXT → VOICE", "VOICE OUT"],
    items: ["ElevenLabs · voice generation & agents", "Omni Voice · speech interface experiments", "Speech-to-Text", "Text-to-Speech", "Voice agents", "WebSocket / local API communication", "Voice Adapter architecture"],
  },
  {
    name: "Frontend",
    short: "FRONTEND",
    note: "The part people see and touch: responsive interfaces shaped from a visual idea into a working experience.",
    flow: ["DESIGN", "PROTOTYPE", "INTERACTIVE UI", "PRODUCTION"],
    items: ["HTML5", "CSS3", "JavaScript", "React", "Responsive web design", "Modern UI/UX", "3D web experiences", "Animation systems", "Interactive interfaces", "Spline 3D", "Google Stitch"],
  },
  {
    name: "Backend & APIs",
    short: "BACKEND",
    note: "The systems behind the screen: connect the interface to services, data, and tasks that need to run.",
    flow: ["FRONTEND", "API", "BACKEND", "DATA / SERVICES"],
    items: ["Node.js", "Python", "Flask", "REST APIs", "WebSockets", "Authentication systems", "API integrations", "Background processes", "Task execution systems", "Backend automation"],
  },
  {
    name: "Python ecosystem",
    short: "PYTHON",
    note: "A practical toolkit for AI connections, data processing, automation scripts, and backend services.",
    flow: ["SCRIPT", "INTEGRATE", "PROCESS", "SERVICE"],
    items: ["Python", "Flask", "API development", "Automation scripts", "AI integrations", "Data processing", "Agent tooling", "Backend services"],
  },
  {
    name: "Databases & data",
    short: "DATA",
    note: "Structured, document, and retrieval-oriented data systems that let an application remember and find things.",
    flow: ["COLLECT", "STORE", "RETRIEVE", "RESPOND"],
    items: ["MongoDB", "Firebase", "Firebase Authentication", "Firestore", "Firebase Hosting", "Firebase Studio", "Firebase MCP", "Sanity CMS", "Vector / RAG data architecture"],
  },
  {
    name: "Authentication & security",
    short: "SECURITY",
    note: "Access and identity ideas explored for applications such as the attendance SaaS.",
    flow: ["USER", "AUTH", "DEVICE / GPS", "ACCESS"],
    items: ["Email / password authentication", "Firebase Authentication", "Role-based access", "Admin authorization", "Device-aware authentication concepts", "API security", "Encryption concepts", "Secure WebSocket communication", "Access control", "GPS-based authorization"],
  },
  {
    name: "Automation",
    short: "AUTOMATION",
    note: "Connect APIs, agents, and scheduled work into useful flows—the research pipeline is one example.",
    flow: ["NEWS", "AI RESEARCH", "TOP SOURCES", "PDF", "LOCAL / SCHEDULED"],
    items: ["n8n", "AI workflows", "API orchestration", "Webhooks", "Scheduled workflows", "Automated research", "Agent workflows", "Data pipelines", "OpenRouter integrations", "NVIDIA model integrations"],
  },
  {
    name: "Deployment & hosting",
    short: "DEPLOYMENT",
    note: "From a working build to a live domain: hosting, DNS, and the practical pieces around publishing.",
    flow: ["BUILD", "DOMAIN / DNS", "DEPLOY", "DISCOVER"],
    items: ["Vercel", "Firebase Hosting", "Hostinger", "Domain & DNS configuration", "Production web deployment", "Google Search Console", "API deployment concepts"],
  },
  {
    name: "Design & creative development",
    short: "DESIGN",
    note: "Visual thinking and interaction design in the same process as the code—not a finishing layer.",
    flow: ["SKETCH", "PROTOTYPE", "MOTION", "POLISH"],
    items: ["Google Stitch", "Spline", "UI/UX design", "3D web design", "Motion & animation", "Responsive design", "Visual prototyping", "Graphic design", "Video editing", "AI-assisted design"],
  },
]

const glyphs = ["✳", "〰", "⌘", "{ }", "Py", "◉", "⌑", "⟳", "↗", "✳"]

export default function TechStackSection() {
  const [active, setActive] = useState(0)
  const group = groups[active]
  const specimens = group.items.slice(0, 4)

  return (
    <section className="stack-atlas" id="stack" aria-labelledby="stack-title">
      <div className="stack-atlas-shell">
        <div className="stack-atlas-topline" data-scroll-reveal="up">
          <span><i /> FIELD NOTES / THE MAKING OF THINGS</span>
          <span>TOOLS · SYSTEMS · EXPERIMENTS <b>10 FIELDS</b></span>
        </div>

        <header className="stack-atlas-heading" data-scroll-reveal="up">
          <div>
            <p className="stack-atlas-kicker">A LIVING MAP OF MY TOOLKIT</p>
            <h2 id="stack-title">The stack beneath<br /><em>the spark.</em></h2>
          </div>
          <div className="stack-atlas-intro">
            <span className="stack-atlas-asterisk">✳</span>
            <p>Different projects call for different tools. <strong>Here’s what I use, build with, and explore</strong> across AI, product, and creative work.</p>
            <small>TOOLS, FRAMEWORKS & CONCEPTS · SCOPE VARIES BY PROJECT</small>
          </div>
        </header>

        <div className="stack-atlas-layout" data-scroll-reveal="up">
          <nav className="stack-atlas-index" data-scroll-reveal="left" role="tablist" aria-label="Technology areas" aria-orientation="vertical">
            <div className="stack-atlas-index-label"><span>INDEX / 00—09</span><b>SELECT A FIELD</b></div>
            {groups.map((item, index) => (
              <button
                className={`stack-atlas-choice${active === index ? " is-active" : ""}`}
                id={`stack-tab-${index}`}
                key={item.short}
                role="tab"
                aria-selected={active === index}
                aria-controls="stack-field-panel"
                onClick={() => setActive(index)}
              >
                <span className="stack-atlas-choice-num">{String(index + 1).padStart(2, "0")}</span>
                <span className="stack-atlas-choice-name">{item.name}</span>
                <span className="stack-atlas-choice-arrow">↗</span>
              </button>
            ))}
            <div className="stack-atlas-index-foot"><i>↑</i> A TOOL IS ONLY AS GOOD AS THE IDEA IT SERVES.</div>
          </nav>

          <article className="stack-atlas-panel" id="stack-field-panel" role="tabpanel" aria-labelledby={`stack-tab-${active}`}>
            <div className="stack-atlas-panel-top">
              <span>FIELD {String(active + 1).padStart(2, "0")} <i>/</i> {group.short}</span>
              <span><i className="stack-atlas-live" /> CURRENTLY IN THE MIX</span>
            </div>

            <div className="stack-atlas-feature">
              <div className="stack-atlas-map" role="img" aria-label={`${group.items.length} entries in ${group.name}; four representative tools fanned into a stack`}>
                <div className="stack-atlas-map-head"><span>TOOLS, AS MATERIAL</span><span>FIELD {String(active + 1).padStart(2, "0")}</span></div>
                <div className="stack-specimen-stage" aria-hidden="true">
                  <div className="stack-specimen-shadow" />
                  {specimens.map((item, index) => (
                    <div className={`stack-specimen stack-specimen--${index}`} key={`${active}-${item}`}>
                      <span className="stack-specimen-overline">{String(index + 1).padStart(2, "0")} <i>/</i> PART OF THE PROCESS</span>
                      <strong>{item.split(" · ")[0]}</strong>
                      <span className="stack-specimen-foot"><i>{index === 0 ? glyphs[active] : "✳"}</i><b>{group.short}</b><small>V / {String(active + 1).padStart(2, "0")}</small></span>
                    </div>
                  ))}
                  <div className="stack-specimen-count"><strong>{String(group.items.length).padStart(2, "0")}</strong><span>TOOLS<br />& IDEAS</span><i>IN THIS FIELD</i></div>
                  <span className="stack-specimen-stamp">SELECTED<br />MATERIALS <b>✳</b></span>
                </div>
                <div className="stack-atlas-map-bottom"><span>A FEW PIECES IN THE MIX</span><span>✳</span><span>FULL INVENTORY BELOW</span></div>
              </div>

              <div className="stack-atlas-summary">
                <p className="stack-atlas-summary-kicker">THE FIELD GUIDE <span>↘</span></p>
                <h3>{group.name}</h3>
                <p className="stack-atlas-summary-note">{group.note}</p>
                <div className="stack-atlas-flow-label"><span>ONE WAY IT CONNECTS</span><i>ILLUSTRATIVE FLOW</i></div>
                <div className="stack-atlas-flow" aria-label={group.flow.join(" to ")}>
                  {group.flow.map((stage, index) => (
                    <span className="stack-flow-stage" key={stage}>
                      <b>{stage}</b>{index < group.flow.length - 1 && <i aria-hidden="true">→</i>}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="stack-atlas-inventory">
              <div className="stack-atlas-inventory-head"><span>IN THE TOOLBOX</span><b>{String(group.items.length).padStart(2, "0")} ENTRIES</b></div>
              <div className="stack-atlas-items">
                {group.items.map((item, index) => (
                  <span className={`stack-atlas-item${index === 0 ? " is-featured" : ""}`} key={item}>
                    {index === 0 && <i>✳</i>}{item}
                  </span>
                ))}
              </div>
            </div>
            <div className="stack-atlas-panel-foot"><span>ONE MAKER / MANY SYSTEMS</span><span>FIELD {String(active + 1).padStart(2, "0")} <i>OF 10</i></span></div>
          </article>
        </div>

        <footer className="stack-atlas-footer">
          <span><b>NOT A BADGE WALL.</b> A map of the materials behind the work.</span>
          <span>V / TOOL INDEX <i>✳</i></span>
        </footer>
      </div>
    </section>
  )
}
