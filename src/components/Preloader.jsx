import { useEffect, useState } from "react";

export default function Preloader({ onDone }) {
  const [count, setCount] = useState(0);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    let n = 0;
    const tick = () => {
      n += Math.floor(Math.random() * 8) + 2;
      if (n >= 100) {
        n = 100;
        setCount(100);
        setTimeout(() => {
          setGone(true);
          onDone?.();
        }, 500);
        return;
      }
      setCount(n);
      setTimeout(tick, 90 + Math.random() * 120);
    };
    const start = setTimeout(tick, 250);
    return () => clearTimeout(start);
  }, [onDone]);

  return (
    <div className={`preloader ${gone ? "preloader--gone" : ""}`}>
      <div className="preloader__inner">
        <span className="preloader__mark">🤘</span>
        <span className="preloader__name">CHIRAYU BATRA</span>
      </div>
      <div className="preloader__count">{count.toString().padStart(3, "0")}</div>
      <div className="preloader__bar">
        <span style={{ transform: `scaleX(${count / 100})` }} />
      </div>
    </div>
  );
}
