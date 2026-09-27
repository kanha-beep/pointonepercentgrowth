"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "up" | "down" | "left" | "right" | "zoom" | "fade";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up"
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const getInitialClass = () => {
    switch (variant) {
      case "down":
        return "-translate-y-8 opacity-0";
      case "left":
        return "-translate-x-10 opacity-0";
      case "right":
        return "translate-x-10 opacity-0";
      case "zoom":
        return "scale-95 opacity-0";
      case "fade":
        return "opacity-0";
      case "up":
      default:
        return "translate-y-8 opacity-0";
    }
  };

  const getActiveState = () => {
    switch (variant) {
      case "zoom":
        return "scale-100 opacity-100";
      case "left":
      case "right":
        return "translate-x-0 opacity-100";
      case "up":
      case "down":
        return "translate-y-0 opacity-100";
      case "fade":
      default:
        return "opacity-100";
    }
  };

  return (
    <div
      ref={ref}
      className={[
        "transition-all duration-700 ease-out",
        visible ? getActiveState() : getInitialClass(),
        className
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
