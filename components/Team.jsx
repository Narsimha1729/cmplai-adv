'use client';

import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const team = [
  {
    order: 1,
    name: 'T Narsimha Murthy',
    role: 'Founder & CEO',
    experience: '5+ years of experience in pharma industry',
    image: '/tn murthy.jpg',
    linkedin: '#',
    twitter: '#',
    email: 'mailto:narsimha@example.com',
  },
  {
    order: 2,
    name: 'Chetan P',
    role: 'Founder & CTO',
    experience: 'M.Tech in Entrepreneurship and Management from IIT Hyderabad',
    image: '',
    linkedin: '#',
    twitter: '#',
    email: 'mailto:chetan@example.com',
  },
  {
    order: 3,
    name: 'Rohit Thakur',
    role: 'Founder & COO',
    experience:
      '',
    image: '',
    linkedin: '#',
    twitter: '#',
    email: 'mailto:divya@example.com',
  },
  {
    order: 4,
    name: 'Divya Taluri',
    role: 'Chief Regulatory Officer',
    experience:
      '3+ years of experience in pharmaceutical compliance and quality management',
    image: '/divya taluri.jpg',
    linkedin: '#',
    twitter: '#',
    email: 'mailto:divya@example.com',
  },
].sort((a, b) => a.order - b.order);

function MemberAvatar({ name, image }) {
  const initials = name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
      />
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-600 text-white text-xl font-bold">
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <section className="bg-[#f9fefe] py-24 px-6" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-500">
            Our Team
          </h2>
          <p className="text-gray-600 mt-2 text-lg">Meet the experts behind Cmplai</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 justify-items-center">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="relative group bg-white rounded-2xl shadow-md p-8 w-full max-w-sm text-center transition-all hover:shadow-xl hover:scale-[1.02] border border-transparent hover:border-teal-300"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <div className="absolute -top-8 -left-8 w-36 h-36 bg-cyan-200 opacity-20 blur-3xl rounded-full z-0" />

              <div className="relative z-10">
                <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-white shadow-md bg-gray-200">
                  <MemberAvatar name={member.name} image={member.image} />
                </div>
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                <p className="text-[#00b4bc] font-medium">{member.role}</p>
                <p className="text-gray-600 text-sm mt-2">{member.experience}</p>

                <div className="flex justify-center gap-4 mt-4 text-[#00b4bc]">
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-lg hover:text-cyan-600 transition" />
                  </a>
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="text-lg hover:text-cyan-600 transition" />
                  </a>
                  <a href={member.email}>
                    <FaEnvelope className="text-lg hover:text-cyan-600 transition" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


