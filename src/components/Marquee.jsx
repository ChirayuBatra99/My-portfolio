const WORDS = [
  "GenAI",
  "LangGraph",
  "RAG",
  "Full-Stack",
  "Mobile Apps",
  "Backend",
  "MCP Servers",
  "Product Owner",
  "DB architecture",
];

export default function Marquee() {
  const row = [...WORDS, ...WORDS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((w, i) => (
          <span key={i} className="marquee__item">
            {w}
            <i className="marquee__dot">✦</i>
          </span>
        ))}
      </div>
    </div>
  );
}
