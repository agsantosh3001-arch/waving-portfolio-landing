import { useEffect } from "react";
import { BestsellersBookShowcase } from "@designcodeio/threeui";

const paletteStyle = `
  :root {
    --ink: #f6f4f0 !important;
    --ink-deep: #f6f4f0 !important;
    --ink-soft: #e9e2d9 !important;
    --pink: #e5262c !important;
    --pink-bright: #f15c61 !important;
    --text: #141414 !important;
    --muted: #5f5854 !important;
    --periwinkle: #b3242b !important;
    --sage: #deded2 !important;
    --clay: #c0322c !important;
    --moss: #9b302b !important;
    --paper: #f6f4f0 !important;
  }
  html, body { background: #f6f4f0 !important; color: #141414 !important; }
  .stage {
    color: #141414 !important;
    background:
      radial-gradient(circle at 49% 84%, rgb(229 38 44 / 7%), transparent 34%),
      radial-gradient(circle at 14% 4%, rgb(20 20 20 / 4%), transparent 28%),
      linear-gradient(180deg, #fffdfa 0%, #f6f4f0 48%, #eeeae4 100%) !important;
  }
  .stage :is(h1, h2, h3, p, span, strong, small, a, button, label) { color: #141414; }
  .stage :is(.brand, .detail-title, .doc-label, .stars, .star, .menu-link:hover, .nav-link[aria-current="page"]) { color: #e5262c !important; }
  .stage :is(.icon-button, .ticket-button, .close-button, .pill, .menu-panel) {
    color: #141414 !important;
    border-color: rgb(20 20 20 / 18%) !important;
    background-color: rgb(246 244 240 / 94%) !important;
  }
  @media (max-width: 900px) {
    .book-card[data-book="codex"] { --x: 26%; --w: 40vw; }
    .book-card[data-book="claude"] { --x: 50%; --w: 42vw; }
    .book-card[data-book="cursor"] { --x: 74%; --w: 40vw; }
  }
  @media (max-width: 560px) {
    .book-card[data-book="codex"] { --x: 26%; --w: 40vw; }
    .book-card[data-book="claude"] { --x: 50%; --w: 42vw; }
    .book-card[data-book="cursor"] { --x: 74%; --w: 40vw; }
  }
`;

function applyPortfolioPalette(frame: HTMLIFrameElement) {
  const document = frame.contentDocument;
  if (!document?.head) return false;
  let style = document.getElementById("vivan-portfolio-palette") as HTMLStyleElement | null;
  if (!style) {
    style = document.createElement("style");
    style.id = "vivan-portfolio-palette";
    document.head.appendChild(style);
  }
  style.textContent = paletteStyle;
  return true;
}

export default function BookShowcase() {
  useEffect(() => {
    const timer = window.setInterval(() => {
      const frame = document.querySelector<HTMLIFrameElement>(".vivan-book-showcase-frame iframe");
      if (frame && applyPortfolioPalette(frame)) window.clearInterval(timer);
    }, 100);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <BestsellersBookShowcase
      className="vivan-book-showcase-frame"
      style={{ height: "min(1100px, max(920px, 150svh))", minHeight: "680px", width: "100%" }}
      headingFont="iowan-old-style"
      bodyFont="iowan-old-style"
      headingWeight="500"
      bodyWeight="400"
      primaryColor="#e5262c"
      headingSize={325}
      bodySize={17}
      headingLetterSpacing={-0.085}
    />
  );
}
