"use client";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-4 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91-6367614340" // Apna number yahan dalein
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 flex items-center justify-center"
      >
        <span className="text-xl">💬</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+91-6367614340" // Apna number yahan dalein
        className="bg-black hover:bg-gray-800 text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 flex items-center justify-center"
      >
        <span className="text-xl">📞</span>
      </a>
    </div>
  );
}