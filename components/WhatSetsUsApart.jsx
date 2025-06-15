"use client";

import Image from "next/image";

const WhatSetsUsApart = () => {
  const cards = [
    "Our solution is purpose-built with pre-configured templates and compliance logic tailored to global standards like <strong>GMP</strong>, <strong>ISO</strong>, and <strong>US-FDA</strong>, ensuring organizations are always audit-ready and aligned with evolving regulations. The architecture is highly scalable, supporting multi-industry applications and seamless expansion across plants and teams.",
    "Cmplai's unique focus is on automated document creation — delivering <strong>70%</strong> of its value through advanced templating and content automation, while also providing robust document management capabilities. This enables us to address the core pain points of compliance: high manual effort, risk of errors, and slow workflows.",
    "Our platform not only delivers substantial cost savings — equivalent to a full-time <strong>QMS</strong> employee per plant — but also empowers organizations to repurpose their workforce for higher-value tasks, fostering <strong>innovation</strong> and <strong>job satisfaction</strong>.",
  ];

  return (
    <section className="relative bg-[#e6f7f9] py-24 px-6 overflow-hidden" id="apart">
      {/* Decorative Dotted Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,0,0,0.03)_1px,_transparent_1px)] [background-size:20px_20px] z-0" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500 animate-fade-in">
            What Sets Us Apart
          </h2>
          <div className="mt-2 text-lg text-gray-600 font-medium relative inline-block">
            Our unique approach to compliance automation
            <div className="h-1 w-16 bg-teal-400 mx-auto mt-2 rounded hover:w-24 transition-all duration-300"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Highlights */}
          <div className="space-y-8">
            {cards.map((text, i) => (
              <div
                key={i}
                className="bg-white text-gray-700 shadow-md hover:shadow-xl border-l-4 border-teal-500 
                           p-6 rounded-xl text-base leading-relaxed transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={i * 100}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>

          {/* Right: Image */}
          <div className="flex items-center justify-center relative" data-aos="zoom-in-left">
            {/* Optional background glow */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-teal-200 blur-3xl rounded-full opacity-30 z-0" />

            <div
                className="w-full h-full overflow-hidden rounded-2xl shadow-xl border bg-white relative z-10"
            >
                <img
                src="/setsapart.webp"
                alt="What Sets Us Apart"
                className="w-full h-full object-cover object-center transform transition-transform duration-500 hover:scale-105"
                />
            </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
