import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Loader } from '../loader/Loader';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { SocialLinks } from './SocialLink';

export function Contact() {
    const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        const visibilityTimer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => {
            clearTimeout(loadingTimer);
            clearTimeout(visibilityTimer);
        };
    }, []);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-28 px-6 sm:px-10 lg:px-20"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.header 
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-6 animate-pulse-slow">
                        Contact Us
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Have questions or want to learn more about our services? We'd love to hear from you.
                        Reach out using any of the options below.
                    </p>
                </motion.header>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Contact Form */}
                    <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-2 bg-white shadow-2xl rounded-2xl p-10 border border-blue-100 hover:shadow-xl transition-shadow duration-300"
                    >
                        <h2 className="text-3xl font-semibold text-blue-500 mb-8 border-b-2 border-blue-200 pb-4">
                            Get in Touch
                        </h2>
                        <ContactForm />
                    </motion.div>

                    {/* Sidebar */}
                    <motion.aside 
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="bg-gradient-to-tr from-gray-500 to-sky-400 shadow-2xl rounded-2xl p-10 text-white"
                    >
                        <h2 className="text-3xl font-semibold mb-8 border-b-2 border-white/30 pb-4">
                            Contact Information
                        </h2>
                        <ContactInfo />
                        <hr className="my-8 border-white/30" />
                        <h3 className="text-2xl font-medium mb-6">Follow Us</h3>
                        <SocialLinks />
                    </motion.aside>
                </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-10">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-teal-200 rounded-full blur-3xl"></div>
            </div>
        </motion.section>
    );
}

export default Contact;