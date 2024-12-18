import { Lightbulb, Handshake, Shuffle, Heart, Infinity } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Lightbulb,
    title: "Innovative Technology",
    description: "Our team of experts continuously explore and harness innovative technologies to deliver state-of-the-art solutions."
  },
  {
    icon: Handshake,
    title: "Strategic Partnership",
    description: "By forging strategic partnerships, we work closely with our clients to ensure that our solutions and services are customized to drive their success."
  },
  {
    icon: Shuffle,
    title: "Agility and Flexibility",
    description: "We offer flexible solutions that can scale alongside your business whether you're expanding, diversifying, or entering new markets."
  },
  {
    icon: Heart,
    title: "Customer-Centric Approach",
    description: "At Lexington Technologies, your satisfaction is our top priority as we take a customer-centric approach, putting your needs and goals at the forefront of everything we do."
  },
  {
    icon: Infinity,
    title: "End-to-End Services",
    description: "We provide end-to-end solutions to meet your diverse IT needs, streamlining your operations and ensuring seamless integration across your organization."
  }
];
