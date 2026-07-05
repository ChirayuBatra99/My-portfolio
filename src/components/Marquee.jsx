const WORDS = [
  "GenAI",
  "Agentic AI",
  "LangGraph",
  "RAG",
  "Full-Stack",
  "React Native",
  "FastAPI",
  "MCP Servers",
  "Product Owner",
  "Ship it 🤘",
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
