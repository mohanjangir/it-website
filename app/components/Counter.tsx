"use client";
import { useEffect, useState, useRef } from "react";

function CounterItem({ target, label }: any) {
  const [count, setCount] = useState(0);
  const ref = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  // Detect when visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  // Counting animation
  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 50);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [visible, target]);

  return (
    <div ref={ref} className="text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white">
        {count}+
      </h2>
      <p className="text-gray-300 mt-2 text-sm md:text-base">
        {label}
      </p>
    </div>
  );
}

export default function Counter() {
  return (
    <section
      className="relative py-20 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/counter-bg.jpeg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">

        <CounterItem target={1000} label="Students Trained" />
        <CounterItem target={50} label="Live Projects" />
        <CounterItem target={600} label="Placements" />
        <CounterItem target={10} label="Expert Trainers" />

      </div>
    </section>
  );
}