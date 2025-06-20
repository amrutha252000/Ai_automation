import Image from "next/image";
export default function Home() {
 return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar - Fixed and Translucent */}
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white z-10">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Placeholder */}
          <a href="#hero" className="w-10 h-10 bg-blue-500 rounded flex items-center justify-center">
            {/* Replace with your logo image */}
          </a>
 
          {/* Navigation Links */}
          <div className="space-x-4">
            <a href="#power" className="hover:underline">Power</a>
            <a href="#uses" className="hover:underline">Use Cases</a>
            <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow container mx-auto p-4 mt-16"> {/* Add margin-top to prevent content from being hidden */}
        {/* Hero Section */}
        <section id="hero" className="flex flex-col md:flex-row items-center py-12">
          {/* Image Column */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="bg-gray-300 w-full h-64 flex items-center justify-center">
              Placeholder Image
            </div>
          </div>
          {/* Text Column */}
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-4xl font-bold mb-4">AI Automation</h1>
            <p className="text-lg">Discover the power of AI automation to streamline your workflows, increase efficiency, and unlock new possibilities for your business.</p>
          </div>
        </section>

        {/* Power Section */}
        <section id="power" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-500">Unlock the Power of AI Automation</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 w-80">
              <div className="text-center mb-4 text-graphite">
                {/* Icon Placeholder */}
                <div className="w-12 h-12 bg-blue-500 mx-auto rounded-full flex items-center justify-center text-white text-2xl">💡</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Increased Efficiency</h3>
              <p className="text-gray-600 text-center">Automate repetitive tasks and free up your team to focus on strategic initiatives.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 w-80">
              <div className="text-center mb-4 text-graphite">
                {/* Icon Placeholder */}
                <div className="w-12 h-12 bg-green-500 mx-auto rounded-full flex items-center justify-center text-white text-2xl">🚀</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Enhanced Accuracy</h3>
              <p className="text-gray-600 text-center">Minimize human error and ensure consistent, reliable results with AI-powered automation.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 w-80">
              <div className="text-center mb-4 text-graphite">
                {/* Icon Placeholder */}
                <div className="w-12 h-12 bg-red-500 mx-auto rounded-full flex items-center justify-center text-white text-2xl">💰</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Cost Savings</h3>
              <p className="text-gray-600 text-center">Reduce operational costs by automating tasks that were previously performed manually.</p>
            </div>
          </div>
        </section>

        {/* Uses Section - Carousel */}
        <section id="uses" className="py-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-emerald-500">AI Automation Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder for Use Cases content */}
          </div>
        </section>
      </main>

      {/* Contact Us Section */}
      <section id="contact" className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 md:mb-8 text-emerald-500">Contact Us</h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* Text Block */}
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Business with AI Automation?</h3>
              <p className="text-lg mb-4">
                Our AI automation solutions are designed to streamline your operations, boost efficiency, and unlock new levels of productivity.
                Whether you're looking to automate repetitive tasks, improve decision-making with data-driven insights, or gain a competitive edge,
                we can help you harness the power of AI.
              </p>
              <p className="text-lg">
                Fill out the form below to connect with our experts and discover how AI automation can benefit your specific needs. Let's discuss your challenges and how we can build a tailored solution for you.
              </p>
            </div>
            {/* Contact Form */}
            <form className="md:w-1/2 max-w-lg mx-auto md:mx-0 bg-black p-8 rounded-lg shadow-md text-graphite border border-emerald-500">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  <span className="text-white">Name</span>
                </label>
                <input 
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-700"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                  <span className="text-white">Phone Number</span>
                </label>
                <input 
                  type="tel"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-gray-700"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  <span className="text-white">Email</span>
                </label>
                <input 
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-bold mb-2">
                  <span className="text-white">Message</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </div>
            </form>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2023 AI Automation. All rights reserved.</p>
      </footer>
    </div>
  );
}
