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
    role: 'Co-Founder & CTO',
    experience: 'M.Tech in Entrepreneurship and Management from IIT Hyderabad',
    image: '/Chetan_LN Infosphere.png',
    linkedin: '#',
    twitter: '#',
    email: 'mailto:chetan@example.com',
  },
  {
    order: 3,
    name: 'Rohit Thakur',
    role: 'Founder & COO',
    experience:
      'Ex-iTIC IITH, Second-time founder',
    image: '/rohit thakur.jpg',
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
      <img src={image} alt={name} className="w-full h-full object-cover" />
    );
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-cyan-600/40 to-teal-600/30 text-cyan-200 text-xl font-semibold">
      {initials}
    </div>
  );
}

export default function Team() {
  return (
    <section className="section-elevated py-28 px-6 border-t border-white/5" id="team">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14" data-aos="fade-up">
          <p className="label-caps mb-4">People</p>
          <h2 className="heading-lg">Our Team</h2>
          <p className="text-body mt-2">Meet the experts behind Cmplai</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={member.name}
              className="card-dark p-8 w-full text-center"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-2 border-white/10 bg-zinc-900">
                <MemberAvatar name={member.name} image={member.image} />
              </div>
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-cyan-400/90 text-sm font-medium mt-1">{member.role}</p>
              <p className="text-body text-xs mt-2">{member.experience}</p>

              <div className="flex justify-center gap-4 mt-5 text-zinc-500">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <FaLinkedin className="text-base" />
                </a>
                <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  <FaTwitter className="text-base" />
                </a>
                <a href={member.email} className="hover:text-white transition">
                  <FaEnvelope className="text-base" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
