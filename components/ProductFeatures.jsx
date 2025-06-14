"use client";

import {
  Zap,
  ShieldCheck,
  FileText,
  Clock,
  CheckCircle,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <Zap className="w-5 h-5 text-teal-600" />,
    text: "AI-powered document automation reducing compliance workload by 70%",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-teal-600" />,
    text: "Regulatory-ready templates ensuring 100% compliance with global standards",
  },
  {
    icon: <FileText className="w-5 h-5 text-teal-600" />,
    text: "End-to-end document lifecycle management with full audit trails",
  },
  {
    icon: <Clock className="w-5 h-5 text-teal-600" />,
    text: "Reduced turnaround time from months to days",
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-teal-600" />,
    text: "Minimized manual errors and enhanced data integrity",
  },
  {
    icon: <Users className="w-5 h-5 text-teal-600" />,
    text: "Improved resource allocation and team productivity",
  },
];

export default function ProductFeatures() {
  return (
    <section
      id="product"
      className="relative py-24 px-4 bg-gradient-to-br from-white to-teal-50 overflow-hidden"
    >
      {/* Subtle radial glow effect behind image */}
      <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-teal-200 opacity-30 blur-3xl rounded-full z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-cyan-300 opacity-20 blur-2xl rounded-full z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-extrabold text-teal-600 mb-2">
            Product Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions to transform your compliance processes
          </p>
        </div>

        {/* Image + Features Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image Box with Glow */}
          <div data-aos="fade-right" className="relative">
<div
  className="w-full max-h-[500px] overflow-hidden rounded-2xl border bg-white shadow-xl 
             transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl"
>
  <img
    src="/productfeatures.webp"
    alt="Product Features"
    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
  />
</div>
          </div>

          {/* Right: Features List */}
          <div>
            <div className="space-y-4" data-aos="fade-left" data-aos-delay="200">
              {features.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg border border-teal-100 bg-white 
                             hover:border-teal-400 hover:bg-teal-50 hover:scale-[1.02] 
                             transition-all duration-300 ease-in-out group"
                >
                  <div className="bg-teal-50 p-2 rounded-full">{item.icon}</div>
                  <p className="text-gray-700 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-10" data-aos="fade-up" data-aos-delay="400">
            <button
                className="px-6 py-3 bg-teal-500 hover:bg-cyan-600 text-white font-semibold 
                        rounded-md shadow-md transition-all duration-300"
            >
                Request a Demo
            </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
