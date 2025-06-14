'use client';

import Image from 'next/image';
import aboutusImage from '/public/aboutus.webp'; // Place your image in the public folder

export default function AboutUs() {
  return (
    <section className="relative px-6 py-24 bg-[#f9fefe]" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-14 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500">
            About Us
          </h2>
          <p className="text-gray-600 mt-2 text-lg">Our mission and vision</p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* 🟢 Image with Glowing Aura */}
          <div
            className="relative w-full rounded-2xl overflow-hidden shadow-lg group transition-transform hover:scale-[1.02]"
            data-aos="zoom-in-right"
          >
            {/* Glow behind the image */}
            <div className="absolute -inset-6 bg-cyan-200 opacity-20 blur-3xl rounded-3xl z-0" />

            {/* Actual Image */}
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <Image
                src={aboutusImage}
                alt="About Cmplai"
                className="object-cover w-full h-full"
                width={600}
                height={400}
                priority
              />
            </div>
          </div>

          {/* 📄 Text Content */}
          <div
            className="text-gray-700 text-base leading-relaxed space-y-5 text-justify"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              Transforming Compliance Through Innovation
            </h3>
            <p>
              At <strong className="text-[#00b4bc]">Cmplai</strong>, we're on a mission to revolutionize how pharmaceutical and manufacturing companies handle compliance documentation.
              Founded by industry experts with decades of experience, we understand the challenges organizations face with regulatory compliance.
            </p>
            <p>
              Our team combines deep domain expertise in pharmaceutical compliance with cutting-edge AI technology to create solutions
              that dramatically reduce the time, cost, and risk associated with compliance documentation.
            </p>
            <p>
              We believe that by automating the most tedious aspects of compliance, we can free up human talent to focus on innovation
              and quality improvement — ultimately leading to better products and services for consumers worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
