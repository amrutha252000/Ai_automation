// 1. Add 'use client' at the top because we are using hooks like useState
'use client';

import Image from "next/image";
// 2. Import everything needed for this component
import { useState } from 'react';
import db  from '../firebase'; // Make sure this path to your firebase.js is correct
import { collection, addDoc } from "firebase/firestore";

// 3. This is your main page component, which is the default export
export default function Home() {
  // 4. All the logic and state for the form now lives inside the Home component
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsSubmitted(false);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: new Date()
      });
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', email: '', message: '' }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 5. The return statement renders your entire page, including the form
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white z-10">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#hero" className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
            {/* Logo */}
          </a>
          <div className="space-x-4">
            <a href="#power" className="hover:underline">Power</a>
            <a href="#uses" className="hover:underline">Use Cases</a>
            <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow container mx-auto p-4 mt-16">
        {/* Hero Section */}
        <section id="hero" className="flex flex-col md:flex-row items-center py-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
              Placeholder Image
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold mb-4">AI Automation</h1>
            <p className="text-lg">Discover the power of AI automation to streamline your workflows, increase efficiency, and unlock new possibilities for your business.</p>
          </div>
        </section>

        {/* Other sections like Power and Uses can go here... */}

      </main>

      {/* Contact Us Section */}
      <section id="contact" className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 md:mb-8 text-emerald-500">Contact Us</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Text Block */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg">Fill out the form to connect with our experts and discover how AI automation can benefit your specific needs.</p>
            </div>

            {/* Form - The logic is now directly available to it */}
            <form onSubmit={handleSubmit} className="md:w-1/2 max-w-lg mx-auto md:mx-0 bg-black p-8 rounded-lg shadow-md text-graphite border border-emerald-500">
              
              {isSubmitted && <div className="text-emerald-500 mb-4 text-center">Thank you! Your message has been sent.</div>}

              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-bold mb-2"><span className="text-white">Name</span></label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-700"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="phone" className="block text-sm font-bold mb-2"><span className="text-white">Phone Number</span></label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-700"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2"><span className="text-white">Email</span></label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-700"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold mb-2"><span className="text-white">Message</span></label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-700"
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 AI Automation. All rights reserved.</p>
      </footer>
    </div>
  );
}