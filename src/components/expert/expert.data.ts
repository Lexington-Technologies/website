import { Lightbulb, Cpu, Cloud, Database, Link, Binary } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Expert {
  id: number;
  title: string;
  icon: LucideIcon;
  description: string;
}

export const experts: Expert[] = [
  {
    id: 1,
    title: "Artificial Intelligence",
    icon: Lightbulb,
    description: "Advanced computational systems that simulate human intelligence, enabling machines to learn, reason, and make decisions.",
  },
  {
    id: 2,
    title: "Robotic Process Automation",
    icon: Binary,
    description: "Software technology that uses artificial intelligence and machine learning to automate repetitive business processes."
  },
  {
    id: 3,
    title: "Cloud Computing",
    icon: Cloud,
    description: "Delivery of computing services over the internet, including servers, storage, databases, networking, software, and analytics."
  },
  {
    id: 4,
    title: "Data Mining and Machine Learning",
    icon: Database,
    description: "Techniques for exploring and analyzing large datasets to discover patterns, extract insights, and make predictive models."
  },
  {
    id: 5,
    title: "Blockchain",
    icon: Link,
    description: "Decentralized, distributed ledger technology that records transactions across multiple computers securely and transparently."
  },
  {
    id: 6,
    title: "IoT",
    icon: Cpu,
    description: "Network of interconnected physical devices that collect and share data, enabling smart communication between everyday objects."
  }
];