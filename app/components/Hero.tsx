"use client";
import { useEffect, useState } from "react";

const images = [
  "/img1.jpeg",
  "/img2.jpeg",
  "/img3.jpeg",
  "/img4.jpeg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex items-center">

      {/* Background Images */}
      {images.map((img, i) => (
        <div
          key={i}
          className={`absolute w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 py-20 md:py-28 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Left Content */}
        <div className="text-white max-w-xl text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Best IT Training Institute & Company in Jaipur | Tech Tonic Inovation
          </h1>

          <p className="mt-4 text-base md:text-lg">
            Learn modern technologies and get real project experience with our
            IT Company & Training Institute.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded">
            Get Started
          </button>
        </div>

        {/* Right Form */}
        <div className="backdrop-blur-lg bg-white/20 border border-white/30 p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md">

          <h2 className="text-xl font-bold mb-4 text-center text-white">
            Enquiry Form
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const name = (e.target as any).name.value;
              const phone = (e.target as any).phone.value;

              const message = `Name: ${name}, Phone: ${phone}`;

              window.open(
                `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`
              );

              window.location.href = `mailto:youremail@gmail.com?subject=Enquiry&body=${message}`;
            }}
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="bg-white/30 backdrop-blur-md border border-white/40 text-white placeholder-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-white"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="bg-white/30 backdrop-blur-md border border-white/40 text-white placeholder-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button className="bg-white text-black py-3 rounded hover:bg-gray-200 transition">
              Submit
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}