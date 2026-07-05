import { useEffect, useRef } from "react";

/**
 * A 🤘 emoji cursor.
 * Grows over interactive elements ([data-hot], a, button).
 */
export default function CustomCursor() {
  const dotRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!fine.matches) return;

    const dot = dotRef.current;

    const move = (e) => {
      dot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    const onEnter = () => document.body.classList.add("cursor-hot");
    const onLeave = () => document.body.classList.remove("cursor-hot");
    const hide = () => {
      dot.style.opacity = "0";
    };
    const show = () => {
      dot.style.opacity = "1";
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", (e) => {
      if (!e.relatedTarget) hide();
    });
    window.addEventListener("mouseover", show);

    const hotEls = document.querySelectorAll(
      'a, button, [data-hot], input, textarea'
    );
    hotEls.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", show);
      hotEls.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div className="cursor" ref={dotRef} aria-hidden="true">
      <span className="cursor__emoji">🤘</span>
    </div>
  );
}
