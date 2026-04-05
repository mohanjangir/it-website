export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold">TECH TONIC INOVATION</h2>
          <p className="mt-4 text-gray-400 text-sm">
            We provide professional IT services and training to help you grow your career in the tech industry.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">Courses</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="font-semibold mb-4">Courses</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Graphic Design</li>
            <li>Digital Marketing</li>
            <li>C/C++</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <p className="text-gray-400 text-sm">
            📧 techtonicinovation@gmail.com
          </p>
          <p className="text-gray-400 text-sm mt-2">
            📞 +91-6367614340
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <span className="cursor-pointer hover:text-gray-300">🌐</span>
            <span className="cursor-pointer hover:text-gray-300">📘</span>
            <span className="cursor-pointer hover:text-gray-300">📸</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} IT Company. All rights reserved.
      </div>
    </footer>
  );
}