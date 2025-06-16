import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      'service_k82ivjn', 
      'template_k0yo6uc', 
      form.current, 
      'zSMQbdDSAnIxY3lWn'
    )
    .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setLoading(false);
        form.current.reset();
    }, (error) => {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Please try again.");
        setLoading(false);
    });
  };

  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 px-5 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-gray-900 rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl font-extrabold text-red-500 mb-10 text-center">📩 Contact Us</h1>

        {isSubmitted ? (
          <div className="text-center text-2xl text-green-400 font-semibold animate-bounce">
            🎉 Thank you for reaching out! <br /> We'll get back to you very soon.
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label className="block mb-2 text-sm text-gray-300">Your Name</label>
              <input type="text" name="user_name" required className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:outline-none" placeholder="John Doe" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">Email Address</label>
              <input type="email" name="user_email" required className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:outline-none" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-300">Your Message</label>
              <textarea name="message" rows="6" required className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white focus:ring-2 focus:ring-red-500 focus:outline-none" placeholder="Write your message..."></textarea>
            </div>

            <button type="submit" className={`w-full py-3 rounded-full font-bold text-lg transition 
              ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'} 
              text-white`}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;

