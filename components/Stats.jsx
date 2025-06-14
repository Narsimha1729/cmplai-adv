"use client";

import { Clock, FileText, Users, TrendingUp } from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
  {
    icon: <Clock className="w-6 h-6 text-teal-600" />,
    value: 70,
    suffix: "%",
    label: "Time Reduction",
  },
  {
    icon: <FileText className="w-6 h-6 text-teal-600" />,
    value: 1000,
    suffix: "+",
    label: "Documents Automated",
  },
  {
    icon: <Users className="w-6 h-6 text-teal-600" />,
    value: 50,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-teal-600" />,
    value: 90,
    suffix: "%",
    label: "Efficiency Increase",
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-20 bg-white" id="stats" ref={ref}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white shadow-xl rounded-2xl p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-teal-100 rounded-full p-3">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-3xl font-bold text-teal-600">
                {inView ? (
                  <CountUp end={stat.value} duration={3} />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </h3>
              <p className="text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
