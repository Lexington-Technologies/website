import { Mail, MapPin } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-lg font-medium text-gray-900 mb-6">Contact Information</h3>
      <div className="space-y-6">
        <div className="flex items-start">
          <MapPin className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">Our Office</p>
            <p className="mt-1 text-sm text-gray-600">
              No.3 Doctor Yahya Hamza St, <br />
              Off Tafawa Balewa Way, <br />
              Kaduna Nigeria, <br />

            </p>
          </div>
        </div>
        <div className="flex items-start">
          <Mail className="h-6 w-6 text-blue-600 mt-1" />
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-900">Email</p>
            <a 
              href="mailto:lexingtontechnologies@gmail.com" 
              className="mt-1 text-sm text-gray-600 hover:text-blue-600"
            >
              lexingtontechnologies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}