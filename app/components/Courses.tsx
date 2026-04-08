"use client";
import { useState } from "react";

const courses = [
  {
    title: "Full Stack Development",
    img: "/fullstack.jpeg",
  },
  {
    title: "Web Development",
    img: "/webdevelopment.jpeg",
  },
  {
    title: "Digital Marketing",
    img: "/digital.jpeg",
  },
  {
    title: "UI/UX Design",
    img: "/ui.jpeg",
  },
  {
    title: "Graphic Design",
    img: "/graphic.jpeg",
  },
  {
    title: "C/C++",
    img: "/c.jpeg",
  },
];

export default function Courses() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold text-black">
          Our Courses
        </h2>
        <p className="mt-3 text-gray-600">
          Choose your course and start your IT career 🚀
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 group"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-black">
                  {course.title}
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  Learn {course.title} with real-world projects.
                </p>

                <button
                  onClick={() => setOpen(true)}
                  className="mt-4 px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Popup Form */}
        {open && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

            <div className="bg-white p-8 rounded-2xl w-full max-w-md relative shadow-2xl animate-fadeIn">
              
              {/* Close */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-4 text-gray-500 hover:text-black"
              >
                ✕
              </button>

              <h2 className="text-2xl font-bold text-center mb-2">
                Course Enquiry
              </h2>
              <p className="text-center text-gray-500 mb-6 text-sm">
                Fill details, we will contact you soon
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const name = (e.target as any).name.value;
                  const phone = (e.target as any).phone.value;

                  const message = `Course Enquiry\nName: ${name}\nPhone: ${phone}`;

                  window.open(
                    `https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(message)}`
                  );

                  window.location.href = `mailto:youremail@gmail.com?subject=Course Enquiry&body=${message}`;

                  setOpen(false);
                }}
                className="flex flex-col gap-4"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  required
                  className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black "
                />

                <button className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium">
                  Submit Enquiry
                </button>
              </form>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}