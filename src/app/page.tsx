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
                ></textarea>
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-8 rounded-lg transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-black py-6 text-center text-gray-400 text-sm border-t border-emerald-500/20">
        © {new Date().getFullYear()} AI Automation. All rights reserved.
      </footer>

    </div>
  );
}
