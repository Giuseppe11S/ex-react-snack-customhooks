import { useEffect, useState } from "react";

export default function useCustomPointer(content) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        fontSize: "24px",
      }}
    >
      {content}
    </div>
  );
}
