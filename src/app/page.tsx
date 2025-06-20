import Image from "next/image";
export default function Home() {
 return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo Placeholder */}
          <div className="w-10 h-10 bg-blue-500 rounded"></div>

          {/* Navigation Links */}
          <div className="space-x-4">
            <a href="#hero" className="hover:underline">Hero</a>
            <a href="#power" className="hover:underline">Power</a>
            <a href="#uses" className="hover:underline">Uses</a>
            <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">contact</a>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow container mx-auto p-4">
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
          <h2 className="text-3xl font-bold text-center mb-8">Unlock the Power of AI Automation</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 w-80">
              <div className="text-center mb-4">
                {/* Icon Placeholder */}
                <div className="w-12 h-12 bg-blue-500 mx-auto rounded-full flex items-center justify-center text-white text-2xl">💡</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Increased Efficiency</h3>
              <p className="text-gray-600 text-center">Automate repetitive tasks and free up your team to focus on strategic initiatives.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 w-80">
              <div className="text-center mb-4">
                {/* Icon Placeholder */}
                <div className="w-12 h-12 bg-green-500 mx-auto rounded-full flex items-center justify-center text-white text-2xl">🚀</div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Enhanced Accuracy</h3>
              <p className="text-gray-600 text-center">Minimize human error and ensure consistent, reliable results with AI-powered automation.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 w-80">
              <div className="text-center mb-4">
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
          <h2 className="text-3xl font-bold text-center mb-8">AI Automation Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder for Use Cases content */}
          </div>
        </section>
      </main>

      {/* Contact Us Section */}
      <section id="contact" className="py-12 bg-graphite text-white">
        <div className="container mx-auto px-4 ">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit" // Use the emerald color as background
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" // Apply Tailwind CSS classes for styling
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2023 AI Automation. All rights reserved.</p>
      </footer>
    </div>
  );
}
