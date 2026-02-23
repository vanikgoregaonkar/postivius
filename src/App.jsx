import React from "react";
import Card from "./Card";
import Ac from "./Ac";
import TC from "./Ts";

const App = () => {
  return (
    <div className="w-full bg-white overflow-x-hidden">

      {/* NAVBAR */}
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 py-6 gap-6">
        <h1 className="text-3xl md:text-4xl font-[Zen_dots]">Positivus</h1>

        <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base font-[Zen_dots]">
          <h1>About us</h1>
          <h1>Services</h1>
          <h1>Use Cases</h1>
          <h1>Pricing</h1>
          <h1>Blog</h1>
        </div>

        <button className="border border-black rounded-2xl px-6 py-3 font-[Zen_dots] hover:scale-105 transition">
          Request a Quote
        </button>
      </div>

      {/* HERO */}
      <div className="w-full flex flex-col-reverse lg:flex-row items-center gap-10 px-6 md:px-16 py-16">
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-[Zen_dots] mb-6">
            Navigating the digital landscape for success
          </h1>

          <p className="text-base md:text-lg mb-8 max-w-xl">
            Our digital marketing agency helps businesses grow and succeed
            online through SEO, PPC, social media marketing, and content creation.
          </p>

          <button className="bg-black text-white px-8 py-4 rounded-3xl font-[Zen_dots] hover:scale-105 transition">
            Click here to build yours →
          </button>
        </div>

        <div className="flex-1">
          <img src="./im.png" alt="hero" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* LOGO STRIP */}
      <div className="w-full px-6 md:px-16 py-10">
        <img src="./logo.png" alt="logos" className="w-full h-auto object-contain" />
      </div>

      {/* SERVICES */}
      <div className="w-full bg-black text-white px-6 md:px-16 py-20">
        <h1 className="text-3xl md:text-4xl font-[Zen_dots] text-center mb-6 bg-gradient-to-r from-[rgb(170,240,90)] to-[rgb(120,220,70)] bg-clip-text text-transparent">
          OUR SERVICE
        </h1>

        <p className="text-center max-w-3xl mx-auto text-lg md:text-xl mb-16">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <Card icon="./a.png" title="Search engine optimization" desc="Improve your website ranking on search engines." />
          <Card icon="./a.png" title="Pay-per-click advertising" desc="Improve your website ranking on search engines." />
          <Card icon="./a.png" title="Social Media Marketing" desc="Improve your website ranking on search engines." />
          <Card icon="./a.png" title="Email Marketing" desc="Improve your website ranking on search engines." />
          <Card icon="./a.png" title="Content Creation" desc="Improve your website ranking on search engines." />
          <Card icon="./a.png" title="Analytics and Tracking" desc="Improve your website ranking on search engines." />
        </div>
      </div>

      {/* PROCESS */}
      <div className="w-full bg-white px-6 md:px-16 py-20 shadow-[0_0_30px_rgb(170,240,90)]">
        <h1 className="text-3xl md:text-5xl font-[Zen_dots] text-center mb-16">
          OUR WORKING PROCESS
        </h1>

        <div className="space-y-6 max-w-4xl mx-auto">
          <Ac number="01" title="Consultation" content="Discuss goals, audience, and current marketing efforts." />
          <Ac number="02" title="Research and Strategy Development" content="Data-driven strategy tailored to your business." />
          <Ac number="03" title="Implementation" content="Execute with continuous optimization and tracking." />
          <Ac number="04" title="Monitoring and Optimization" content="Analyze and improve campaign performance." />
          <Ac number="05" title="Reporting and Communication" content="Regular reports and clear communication." />
          <Ac number="06" title="Continual Improvement" content="Refine strategies for long-term growth." />
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div className="w-full bg-black text-white px-6 md:px-16 py-20">
        <h1 className="text-3xl md:text-4xl font-[Zen_dots] text-center mb-16">
          TESTIMONIALS
        </h1>

        <div className="flex flex-wrap justify-center gap-10 max-w-6xl mx-auto">
          <TC name="Aarav Mehta" role="Startup Founder" review="Traffic grew 300% in 3 months." />
          <TC name="Riya Sharma" role="E-commerce Owner" review="Outstanding SEO results and sales boost." />
          <TC name="Kabir Patel" role="SaaS Entrepreneur" review="Professional and data-driven team." />
        </div>
      </div>

      {/* CTA + FOOTER */}
      <div className="w-full bg-[rgb(170,240,90)] px-6 md:px-16 py-20">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-[Zen_dots] mb-6">
            Let’s Build Something Amazing Together
          </h1>
          <p className="text-lg md:text-xl mb-10">
            Ready to grow your business online? Partner with us to create
            powerful digital experiences that drive real results.
          </p>
          <button className="bg-black text-white px-10 py-4 rounded-2xl hover:scale-105 transition">
            Get in Touch
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-black/20 pt-10">
          <div>
            <h2 className="font-[Zen_dots] text-xl mb-4">Positivus</h2>
            <p className="text-sm">
              We help businesses grow with digital marketing and development.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>About</li>
              <li>Services</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>SEO</li>
              <li>PPC</li>
              <li>Social Media</li>
              <li>Web Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>Dribbble</li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm mt-12">
          © 2026 Positivus. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default App;