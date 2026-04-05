"use client";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT - FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">

          <h2 className="text-2xl font-bold mb-6 text-black text-center">
            Get In Touch
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();

              const name = (e.target as any).name.value;
              const phone = (e.target as any).phone.value;
              const email = (e.target as any).email.value;
              const messageText = (e.target as any).message.value;

              const message = `New Enquiry:
Name: ${name}
Phone: ${phone}
Email: ${email}
Message: ${messageText}`;

              // WhatsApp
              window.open(
                `https://wa.me/91-6367614340?text=${encodeURIComponent(message)}`
              );

              // Email
              window.location.href = `techtonicinovation@gmail.com?subject=Enquiry&body=${encodeURIComponent(message)}`;
            }}
            className="flex flex-col gap-6"
          >

            {/* Name */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2 text-black bg-transparent peer"
              />
              <label className="absolute left-0 top-2 text-gray-500 text-sm transition-all 
              peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black 
              peer-valid:-top-3 peer-valid:text-xs">
                Your Name
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="tel"
                name="phone"
                required
                className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2 text-black bg-transparent peer"
              />
              <label className="absolute left-0 top-2 text-gray-500 text-sm transition-all 
              peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black 
              peer-valid:-top-3 peer-valid:text-xs">
                Phone Number
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2 text-black bg-transparent peer"
              />
              <label className="absolute left-0 top-2 text-gray-500 text-sm transition-all 
              peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black 
              peer-valid:-top-3 peer-valid:text-xs">
                Email Address
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                rows={3}
                required
                className="w-full border-b-2 border-gray-300 focus:border-black outline-none py-2 text-black bg-transparent peer"
              ></textarea>
              <label className="absolute left-0 top-2 text-gray-500 text-sm transition-all 
              peer-focus:-top-3 peer-focus:text-xs peer-focus:text-black 
              peer-valid:-top-3 peer-valid:text-xs">
                Your Message
              </label>
            </div>

            {/* Button */}
            <button className="mt-4 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-medium">
              Send Message
            </button>

          </form>
        </div>

        {/* RIGHT - GOOGLE MAP */}
        <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
          <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d14235.635123826882!2d75.70225625!3d26.8746391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x396db51c9a583129%3A0x20dd7e74b5274344!2sTECH%20TONIC%20INOVATION%20IT%20INSTITUTE%20%26%20IT%20COMPANY%2C%20Office%20no.87%203rd%20floor%2C%20Ajmer%20Rd%2C%20near%20podar%20world%20school%2C%20behind%20Heera%20Pura%2C%20Chordiya%20City%2C%20Keshupura%2C%20Kamla%20Nehru%20Nagar%2C%20Jaipur%2C%20Rajasthan%20302021!3m2!1d26.886097799999998!2d75.7105285!5e0!3m2!1sen!2sin!4v1775336242309!5m2!1sen!2sin" 
            // src="https://www.google.com/maps?q=jaipur&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}