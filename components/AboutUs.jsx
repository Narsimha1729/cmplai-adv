'use client';

import Image from 'next/image';
import aboutusImage from '/public/aboutus.webp';

export default function AboutUs() {
  return (
    <section className="relative px-6 py-28 section-dark border-t border-white/5" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 text-center" data-aos="fade-up">
          <p className="label-caps mb-4">Company</p>
          <h2 className="heading-lg">About Us</h2>
          <p className="text-body mt-2">Our mission and vision</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-white/10 group"
            data-aos="fade-up"
          >
            <div className="absolute -inset-4 bg-cyan-500/10 blur-3xl rounded-3xl z-0" />
            <div className="relative z-10 rounded-2xl overflow-hidden">
              <Image
                src={aboutusImage}
                alt="About Cmplai"
                className="object-cover w-full h-full opacity-90"
                width={600}
                height={400}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          <div className="text-body text-base space-y-5" data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-2xl font-semibold text-white">
              Transforming Compliance Through Innovation
            </h3>
            <p>
              At <strong className="text-cyan-400">Cmplai</strong>, we&apos;re on a mission to revolutionize how pharmaceutical and manufacturing companies handle compliance documentation.
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
