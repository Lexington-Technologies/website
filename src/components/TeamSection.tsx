import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
      linkedin: "#",
      email: "sarah@example.com"
    },
    {
      name: "Michael Chen",
      role: "Director of Care Services",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      linkedin: "#",
      email: "michael@example.com"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
      linkedin: "#",
      email: "emily@example.com"
    }
  ];
  

  return (
    <div className="mb-20 py-20 w-full ">
          <h2 className=" font-serif text-center text-5xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 mb-6">
          Our Leadership Team
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, linkedin, email }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
    <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-6">
      <h4 className="text-xl font-medium text-gray-900 mb-1">{name}</h4>
      <p className="text-gray-600 mb-4">{role}</p>
      <div className="flex gap-4">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-sky-500 transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={`mailto:${email}`}
          className="text-gray-600 hover:text-sky-500 transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
);

export default TeamSection;