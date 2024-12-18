import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../loader/Loader";
import { partners } from "./partners.data";

export function PartAcc() {
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
        <div className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
            Partnerships & Accreditations
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            {partners.map((partner) => (
              <img
                key={partner.name}
                src={partner.image}
                alt={partner.name}
                className="w-20"
              />
            ))}
          </div>
          <div className="flex items-center justify-center py-10 hover:opacity-100 transition-opacity">  
              <Link to={'/'} className="px-6 py-3 flex items-center gap-2 bg-sky-500 text-white rounded-full hover:bg-sky-300 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back Home
            </Link>
            </div>  
        </div>
      </div>
      );
}
export default PartAcc;