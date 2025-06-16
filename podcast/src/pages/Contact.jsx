import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_k82ivjn', 
      'template_k0yo6uc', 
      form.current, 
      'zSMQbdDSAnIxY3lWn'
    )
    .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        form.current.reset();
    }, (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
    });
  };

  return (
    <div className="min-h-screen bg-black text-white py-16 px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-red-500 mb-10 text-center">Contact Us</h1>

        {isSubmitted ? (
          <div className="text-center text-xl text-green-400">
            🎉 Thank you for reaching out! <br /> We will get back to you soon.
          </div>
        ) : (
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <div>
              <label className="block mb-2 text-sm text-gray-400">Your Name</label>
              <input type="text" name="user_name" className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500" placeholder="John Doe" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">Email Address</label>
              <input type="email" name="user_email" className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-400">Your Message</label>
              <textarea name="message" rows="6" className="w-full px-4 py-3 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500" placeholder="Write your message..."></textarea>
            </div>

            <button type="submit" className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full font-semibold text-white">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
