'use client';
import Image from 'next/image';

export default function BlogCard({ title, image, date, summary, link }) {
  return (
    <div className="bg-white border rounded-xl shadow hover:shadow-lg transition-all overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <p className="text-xs text-gray-400 mb-1">{date}</p>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{summary}</p>
        <a
          href={link}
          className="text-teal-600 font-medium hover:underline text-sm"
        >
          Read more →
        </a>
      </div>
    </div>
  );
}
