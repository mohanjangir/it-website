export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="relative group">
          <img
            src="/about.png"
            alt="About"
            className="rounded-xl shadow-lg transform group-hover:scale-105 transition duration-500"
          />

          {/* Overlay animation */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl"></div>
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-3xl font-bold text-black">
            About Our IT Company & Institute
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We are a leading IT company and training institute focused on
            delivering real-world skills and industry-level projects. Our goal
            is to help students and professionals grow in the tech field.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            With expert mentors, live projects, and career guidance, we ensure
            that you are job-ready and confident to work in real IT environments.
          </p>

          {/* Features */}
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <p className="text-gray-700">Real Projects Training</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <p className="text-gray-700">Experienced Mentors</p>
            </div>

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-black rounded-full"></span>
              <p className="text-gray-700">100% Career Support</p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-6 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}