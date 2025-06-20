"use client";
import { useState } from "react";
import db  from '../firebase';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";

const useCases = [
  {
    title: "Lead Generation and Prospecting",
    text: "Harness the power of AI to intelligently score and prioritize leads, ensuring your sales team focuses on the most promising prospects. Automate the search for new customers by scouring online sources to find those who perfectly fit your ideal profile. Leverage predictive analytics to identify companies likely to be in the market for your solution before they even begin their search.",
    img: "/images/carousel1.jpg",
  },
  {
    title: "Customer Engagement and Personalization",
    text: "Engage website visitors 24/7 with intelligent AI-powered chatbots that answer questions and qualify leads in real-time. Deliver highly personalized email campaigns and content recommendations that resonate with each individual prospect's needs and interests. Utilize sentiment analysis to understand customer emotions, allowing you to tailor your approach and proactively address concerns.",
    img: "/images/carousel2.jpeg",
  },
  {
    title: "Sales Operations and Enablement",
    text: "Eliminate manual data entry by automatically capturing and logging call notes, emails, and meeting details directly into your CRM. Leverage AI to generate highly accurate sales forecasts, enabling data-driven decisions on strategy and resource allocation. Empower your team with AI-driven coaching that analyzes sales calls and provides real-time feedback to enhance performance.",
    img: "/images/carousel3.jpg",
  },
  {
    title: "Deal Closure and Post-Sale Activities",
    text: "Utilize predictive deal scoring to assess the health of an opportunity and forecast its likelihood of closing, focusing efforts where they matter most. Automate personalized follow-up emails to ensure consistent communication and prevent opportunities from slipping through the cracks. Maximize customer lifetime value with AI-driven recommendations for relevant upselling and cross-selling opportunities.",
    img: "/images/carousel4.jpg",
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % useCases.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + useCases.length) % useCases.length);
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


  return (
    <div className="min-h-screen flex flex-col bg-black text-white font-sans">
      <nav className="fixed top-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 text-white z-20 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo – replace /public/images/logo.svg with your asset */}
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="hidden sm:inline font-semibold text-emerald-400">Automation Labs</span>
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
        className="relative flex items-center justify-center h-screen pt-16 custom-hero-section"
      >
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
              <div className="relative h-[350px] md:h-[250px] overflow-hidden">
                <img
                  src={useCases[current].img}
                  alt={useCases[current].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content Overlay */}
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-4 text-center leading-tight">
                  {useCases[current].title}
                </h3>
                <p className="text-gray-200 text-lg leading-relaxed text-center">
                  {useCases[current].text}
                </p>
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
            <form onSubmit={handleSubmit} className="lg:w-[500px] w-full bg-[var(--color-graphite)] p-8 rounded-2xl border border-emerald-500 shadow-lg space-y-6">
              {isSubmitted && <div className="text-emerald-500 mb-4 text-center">Thank you! Your message has been sent.</div>}
              <div className="flex flex-col text-left">
                <label htmlFor="name" className="text-sm font-semibold text-white-400 mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                                    value={formData.name}
                  onChange={handleChange}

                  className="bg-gray-700 text-white border border-emerald-500/20 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>
              <div className="flex flex-col text-left">
                <label htmlFor="phone" className="text-sm font-semibold text-white-400 mb-2">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                                    value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-700 text-white border border-emerald-500/20 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div className="flex flex-col text-left">
                <label htmlFor="email" className="text-sm font-semibold text-white-400 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                                    value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-700 text-white border border-emerald-500/20 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
                />
              </div>

              <div className="flex flex-col text-left">
                <label htmlFor="message" className="text-sm font-semibold text-white-400 mb-2">Message</label>
                <textarea
                  id="message"
                                    value={formData.message}
                  onChange={handleChange}

                  rows={4}
                  className="bg-gray-700 text-white border border-emerald-500/20 rounded-md px-4 py-2 focus:ring-2 focus:ring-emerald-500 outline-none"
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

      <footer className="bg-black py-6 text-center text-gray-400 text-sm border-t border-emerald-500/20">
        © {new Date().getFullYear()} AI Automation. All rights reserved.
      </footer>

    </div>
  );
}
