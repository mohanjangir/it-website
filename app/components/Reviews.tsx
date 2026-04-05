"use client";
import { useEffect, useState } from "react";

const reviews = [
  { name: "Rahul Sharma", text: "Best institute! Real projects and job support." },
  { name: "Priya Verma", text: "Amazing trainers and very supportive environment." },
  { name: "Amit Kumar", text: "Got placed after completing full stack course." },
  { name: "Sneha Singh", text: "Practical learning and great mentorship." },
  { name: "Rohit Meena", text: "Best IT training institute in my experience." },
  { name: "Pooja Gupta", text: "Learned React and now working professionally." },
  { name: "Vikas Yadav", text: "Very helpful teachers and real projects." },
  { name: "Neha Sharma", text: "Highly recommend for beginners and professionals." },
  { name: "Deepak Verma", text: "Career guidance was very helpful." },
  { name: "Anjali Singh", text: "Great environment and practical exposure." },
  { name: "Karan Patel", text: "Best decision to join this institute." },
  { name: "Simran Kaur", text: "Loved the teaching style and support." },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);

  // Slow auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-black">
          Student Reviews
        </h2>
        <p className="mt-3 text-gray-600">
          Trusted by our students ⭐
        </p>

        {/* Review Card */}
        <div className="mt-10 relative h-[200px] flex items-center justify-center">

          {reviews.map((review, i) => (
            <div
              key={i}
              className={`absolute w-full transition-all duration-1000 ${
                i === index
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="bg-gray-100 p-8 rounded-xl shadow text-center">

                {/* Stars */}
                <div className="flex justify-center mb-3 text-yellow-500 text-xl">
                  ⭐⭐⭐⭐⭐
                </div>

                {/* Text */}
                <p className="text-gray-700 italic text-lg">
                  "{review.text}"
                </p>

                {/* Name */}
                <h3 className="mt-5 font-semibold text-black">
                  — {review.name}
                </h3>
              </div>
            </div>
          ))}

        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6 flex-wrap">
          {reviews.map((_, i) => (
            <span
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                i === index ? "bg-black scale-110" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>

      </div>
    </section>
  );
}