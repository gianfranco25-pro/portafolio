"use client";
import React, { useEffect } from "react";
import styles from "./AnimatedCursor.module.css";

const AnimatedCursor: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rings = document.querySelectorAll(`.${styles.ring}`);
      rings.forEach((ring) => {
        (ring as HTMLElement).style.transform =
          `translateX(calc(${e.clientX}px - 1.25rem)) translateY(calc(${e.clientY}px - 1.25rem))`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.cursor}>
      <div className={styles.ring}>
        <div className={styles.ringBorder}></div>
      </div>
      <div className={styles.ring}>
        <div className={styles.ringPointer}></div>
      </div>
    </div>
  );
};

export default AnimatedCursor;
