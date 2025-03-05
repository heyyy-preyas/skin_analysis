import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">About MedAI</h1>
          <p className="mt-4 text-lg text-gray-600">
            Advancing healthcare through artificial intelligence
          </p>
        </div>

        <div className="prose prose-blue mx-auto">
          <p>
            MedAI is at the forefront of medical image analysis, leveraging advanced artificial intelligence to assist healthcare professionals and patients. Our platform provides cutting-edge tools for analyzing skin conditions and interpreting MRI scans, making healthcare more accessible and efficient.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p>
            We strive to make advanced medical diagnostics more accessible and accurate through the power of artificial intelligence. By combining cutting-edge technology with medical expertise, we aim to improve healthcare outcomes for patients worldwide.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
          <div className="bg-white shadow rounded-lg p-6 mt-4">
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-600 mr-3" />
                <span>preyaspandya8818@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-600 mr-3" />
                <span>+91 9427514601</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                <span>Samta, Vadodara, Gujrat-390023</span>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gray-50 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p className="text-gray-600">
              This platform is intended to assist healthcare professionals and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;