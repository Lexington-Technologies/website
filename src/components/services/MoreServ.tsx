import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { ArrowLeft } from "lucide-react";
import { Loader } from "../loader/Loader";
import { useEffect, useState } from "react";

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
    {
      title: 'Hardware Procurement and Installation',
      description: 'We streamline your technology infrastructure by providing end-to-end hardware procurement and installation services. From selecting the right equipment to seamless implementation, we ensure your IT systems are robust and efficient.',
      image: '/public/serv/Hardware Procurement and Installation.png',
      color: 'bg-sky-300',
    },
    {
      title: 'Internet Service Provider',
      description: 'Reliable and high-speed internet connectivity is crucial for modern businesses. Our ISP services provide stable, secure, and fast internet solutions tailored to meet the demanding requirements of your organization.',
      image: '/public/serv/Internet Service Provider.png',
      color: 'bg-sky-200',
    },
    {
      title: 'IT Consulting',
      description: 'Our seasoned IT consultants offer strategic guidance to help you navigate complex technology landscapes. We provide expert advice on digital transformation, technology strategy, and IT infrastructure optimization.',
      image: '/public/serv/IT Consut.png',
      color: 'bg-sky-100',
    },
    {
      title: 'Network Infrastructure',
      description: 'We specialize in designing, implementing, and maintaining robust network infrastructures that provide seamless connectivity and secure communication channels.',
      image: '/public/serv/Network Infrastructure.png',
      color: 'bg-sky-100',
    },
    {
      title: 'Data Analytics',
      description: 'Our seasoned IT consultants offer strategic guidance to help you navigate complex technology landscapes. We provide expert advice on digital transformation, technology strategy, and IT infrastructure optimization.',
      image: '/public/serv/Data Analyt.png',
      color: 'bg-sky-200',
    },
    {
      title: 'Lexington Security Solutions',
      description: 'We offer a wide range of security services in our subsidiary firm, Lexington Security Solutions (LexSecure), where we provide reliable and effective digital and electronic security solutions to both military and paramilitary organizations, as well as businesses and individuals.  Some of our services include:',
      image: '/public/serv/Security Service.png',
      color: 'bg-sky-300',
    },
  ];
  
  export function MoreServ() {
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
              <Link to={'/'} className="px-6 py-3 flex items-center gap-2 bg-sky-500 text-white rounded-full hover:bg-sky-300 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back Home
            </Link>
        </div>
  
        </div>
    );
    };
  
    export default MoreServ;