"use client";
import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const useCases = [
  {
    title: "Invoice to Cash, On Autopilot",
    text: "Extract, validate, and reconcile invoices in seconds—turn AP into a strategic asset.",
    img: "/images/invoice.png",
  },
  {
    title: "Hyper‑Personalised Email Drip",
    text: "LLM‑powered copy that writes itself, A/B‑tests itself, then learns from every reply.",
    img: "/images/email.png",
  },
  {
    title: "Predictive Maintenance for IoT Fleets",
    text: "Edge‑deployed ML models flag faults 72 hours before downtime hits the balance sheet.",
    img: "/images/predictive.png",
  },
  {
    title: "Smart Lead Scoring",
    text: "Fuse CRM, web‑tracking, and intent signals to surface deals your sales team will actually close.",
    img: "/images/lead.png",
  },
  {
    title: "Reg‑Tech Compliance Guard",
    text: "Real‑time document checks keep you audit‑ready and fine‑proof—even as rules evolve overnight.",
    img: "/images/compliance.png",
  },
  {
    title: "Voice‑to‑Action Contact Centres",
    text: "Live sentiment analysis drafts next‑best actions while agents are still on the call.",
    img: "/images/voice.png",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % useCases.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + useCases.length) % useCases.length);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <nav className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 text-white z-20 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo – replace /public/images/logo.svg with your asset */}
          <a href="#hero" className="flex items-center gap-2">
            <Image src="/images/logo.svg" alt="Logo" width={32} height={32} />
            <span className="hidden sm:inline font-semibold text-emerald-400">AI Automation</span>
          </a>

          {/* Nav Links */}
          <div className="space-x-4 font-medium">
            <a href="#power" className="hover:text-emerald-400">Power</a>
            <a href="#uses" className="hover:text-emerald-400">Use Cases</a>
            <a
              href="#contact"
              className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded shadow transition"
            >
              Contact Us
            </a>
=======
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

      {/* Hero  */}
      <header
        id="hero"
        className="relative flex items-center justify-center h-[90vh] pt-16"
      >
        <Image
          src="/images/hero.png"
          alt="AI Cube Hero"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        <div className="relative z-10 max-w-3xl text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-emerald-400 drop-shadow">
            Automate the Impossible.<br className="hidden md:inline" /> Deliver the Incredible.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-10">
            From back‑office headaches to revenue‑driving breakthroughs, our platform turns yesterday’s bottlenecks into tomorrow’s unfair advantage.
          </p>
          {/* <a
            href="#contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 py-3 px-8 rounded-lg font-semibold shadow-lg transition"
          >
            Book a Live Demo
          </a> */}
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-10 space-y-24">
        {/* Power Section */}
        <section id="power" className="space-y-12">
          <h2 className="text-3xl font-bold text-center mb-12 md:mb-16 text-emerald-500">
            Unlock the Power of AI Automation
          </h2>

          <div className="flex flex-wrap justify-center gap-x-15 gap-y-8 m-10">
            {[
              {
                icon: "💡",
                title: "Increased Efficiency",
                text: "Automate repetitive tasks and free up your team to focus on strategic initiatives.",
                color: "bg-blue-500",
              },
              {
                icon: "🚀",
                title: "Enhanced Accuracy",
                text: "Minimise human error and ensure consistent, reliable results with AI-powered automation.",
                color: "bg-emerald-500"
              },
              {
                icon: "💰",
                title: "Cost Savings",
                text: "Reduce operational costs by automating tasks that were previously performed manually.",
                color: "bg-amber-500"
              },
            ].map((card) => (
              <article
                key={card.title}
                className="bg-[var(--color-graphite)] border border-emerald-500/20 rounded-xl p-8 shadow-md w-full sm:w-72 md:w-80 text-center"
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-full ${card.color} flex items-center justify-center text-2xl`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-emerald-400">{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Use‑Case Carousel */}
        <section id="uses" className="space-y-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-500">
            AI Automation Use Cases
          </h2>

          <div className="relative max-w-4xl mx-auto">
            {/* Main Carousel Container */}
            <div className="relative bg-zinc-900/50 backdrop-blur-sm border border-emerald-500/20 rounded-2xl shadow-2xl overflow-hidden">
              
              {/* Image Section */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent z-10" />
                <img
                  src={useCases[current].img}
                  alt={useCases[current].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-4 leading-tight">
                      {useCases[current].title}
                    </h3>
                    <p className="text-gray-200 text-lg leading-relaxed">
                      {useCases[current].text}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 -translate-y-1/2 left-4 z-30 w-12 h-12 bg-emerald-500/20 hover:bg-emerald-500/40 backdrop-blur-sm border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 hover:text-white transition-all duration-300 group"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute top-1/2 -translate-y-1/2 right-4 z-30 w-12 h-12 bg-emerald-500/20 hover:bg-emerald-500/40 backdrop-blur-sm border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 hover:text-white transition-all duration-300 group"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {useCases.map((_, index) => (
                <span
                  key={index}
                  className={`w-3 h-3 rounded-full transition duration-300 ${index === current ? "bg-emerald-500" : "bg-gray-600"
                    }`}
                ></span>
              ))}
            </div>
          </div>
        </section>

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

      <section id="contact" className="bg-black py-24 border-t border-emerald-500/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 md:mb-16 text-emerald-500">Contact Us</h2>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 ml-25 mr-30">

            {/* Text Block (Left) */}
            <div className="lg:w-1/2 flex flex-col justify-center space-y-6 text-left">
              <h3 className="text-2xl text-center font-semibold text-white">Ready to Transform Your Business?</h3>
              <p className="text-gray-300 text-lg text-center">
                Our AI automation solutions are designed to streamline your operations, boost efficiency, and unlock new levels of productivity.
                Whether you're looking to automate repetitive tasks, improve decision-making with data-driven insights, or gain a competitive edge,
                we can help you harness the power of AI.
              </p>
              <p className="text-gray-300 text-lg text-center">
                Fill out the form below to connect with our experts and discover how AI automation can benefit your specific needs.
                Let's discuss your challenges and how we can build a tailored solution for you.
              </p>
            </div>

            {/* Contact Form (Right) */}
            <form className="lg:w-[500px] w-full bg-[var(--color-graphite)] p-8 rounded-2xl border border-emerald-500/30 shadow-lg space-y-6">

              <div className="flex flex-col text-left">
                <label htmlFor="name" className="text-sm font-semibold text-white-400 mb-1">Name</label>
                <input
                  id="name"
                  type="text"
                  className="bg-zinc-900 text-white border border-emerald-500/20 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <div className="flex flex-col text-left">
                <label htmlFor="phone" className="text-sm font-semibold text-white-400 mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  className="bg-zinc-900 text-white border border-emerald-500/20 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div className="flex flex-col text-left">
                <label htmlFor="email" className="text-sm font-semibold text-white-400 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  className="bg-zinc-900 text-white border border-emerald-500/20 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div className="flex flex-col text-left">
                <label htmlFor="message" className="text-sm font-semibold text-white-400 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="bg-zinc-900 text-white border border-emerald-500/20 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"

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

                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition"

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


      <footer className="bg-black py-6 text-center text-gray-400 text-sm border-t border-emerald-500/20">
        © {new Date().getFullYear()} AI Automation. All rights reserved.

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 AI Automation. All rights reserved.</p>

      </footer>

    </div>
  );
}