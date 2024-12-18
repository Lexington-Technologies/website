import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';
import { Loader } from '../loader/Loader';
import { useEffect, useState } from 'react';

const services = [
  {
    title: 'Automation of Processes',
    description: 'At Lexington Technologies, we specialize in automating routine and manual tasks to optimize your work processes. Our team of experienced professionals analyze your existing workflows, identify areas for automation, and develop customized solutions tailored to suit your specific needs.',
    image: '/public/serv/Automation of Processes.png',
    color: 'bg-sky-100',
  },
  {
    title: 'Capacity Building Training',
    description: 'We provide comprehensive training programs designed to enhance your team\'s skills and capabilities. Our expert-led sessions focus on developing technical and strategic competencies to drive organizational growth and innovation.',
    image: '/public/serv/Capital Building Training.png',
    color: 'bg-sky-200',
  },
  {
    title: 'Software Development',
    description: 'With a customer-centric approach, our experienced team ensures that our software development services are fully tailored to address the unique needs and requirements of each client from initial concept to final implementation.',
    image: '/public/serv/Software Development.png',
    color: 'bg-sky-300',
  },
];

const Services = () => {
      const [isLoading, setIsLoading] = useState(true);
    
      useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 2000);
    
        // Cleanup timeout
        return () => clearTimeout(timer);
      }, []);
    
      // If loading, return the Loader
      if (isLoading) {
        return (
          <div className="flex justify-center items-center min-h-screen">
            <Loader />
          </div>
        );
      }
  
  return (
    <div id="services">
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600 mb-6">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          We offer a comprehensive range of services including Automation of Processes, Software Development, IT Consultancy, Capacity Building Trainings, Hardware Procurement and Installation, and much more.
          </p>

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="flex items-center justify-center py-10 hover:opacity-100 transition-opacity">
          <Link to={'/services'} className="px-6 py-3 bg-sky-500 text-white rounded-full hover:bg-sky-400 transition-colors">
            View all
          </Link>
        </div>
        </div>
      </div>
  );
};

export default Services;