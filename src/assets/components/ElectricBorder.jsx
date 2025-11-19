import React, { useEffect, useRef, useState } from "react";

export default function ElectricBorder({
  children,
  color = "#8B5CF6", // main neon color
  glowColor = "#ffffff", // inner glow
  speed = 2, // animation speed
  thickness = 3,
  className = "",
}) {
  const borderRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    let frame;
    let offset = 0;

    const animate = () => {
      offset += speed * (hovered ? 2 : 1); // speed up on hover
      if (borderRef.current) {
        borderRef.current.style.background = `
          repeating-linear-gradient(
            45deg,
            ${color},
            ${color} 5px,
            transparent 5px,
            transparent 10px
          )
        `;
        borderRef.current.style.boxShadow = `
          0 0 ${hovered ? 12 : 8}px ${color},
          0 0 ${5 + Math.sin(offset) * (hovered ? 8 : 5)}px ${glowColor},
          0 0 ${10 + Math.cos(offset) * (hovered ? 10 : 5)}px ${color}
        `;
        borderRef.current.style.backgroundPosition = `${offset}px ${offset}px`;
        borderRef.current.style.transform = `scale(${hovered ? 1.03 : 1})`; // slight pop on hover
      }
      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, [color, glowColor, speed, hovered]);

  return (
    <div
      ref={borderRef}
      className={`relative cursor-pointer ${className} transition-transform duration-300`}
      style={{
        borderRadius: "16px",
        padding: `${thickness}px`,
        backgroundOrigin: "border-box",
        transition: "box-shadow 0.2s ease-in-out, transform 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative bg-black/40 dark:bg-gray-900 rounded-[12px] p-6 backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}
