import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Stethoscope, Share2, Download, Clock, Shield, Mail, Phone, MapPin } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
              AI-Powered Medical Analysis
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-blue-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Advanced skin disease detection and MRI scan analysis powered by artificial intelligence.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link
                to="/skin-analysis"
                className="rounded-md shadow px-8 py-3 bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-200 inline-flex items-center"
              >
                <Stethoscope className="h-5 w-5 mr-2" />
                Try Skin Analysis
              </Link>
              <Link
                to="/mri-analysis"
                className="mt-3 sm:mt-0 sm:ml-3 rounded-md shadow px-8 py-3 bg-blue-900 text-white font-medium hover:bg-blue-800 transition-colors duration-200 inline-flex items-center"
              >
                <Brain className="h-5 w-5 mr-2" />
                Try MRI Analysis
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Advanced Features
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Our AI-powered platform provides comprehensive medical image analysis with industry-leading accuracy.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Real-time Analysis',
                  description: 'Get instant results from our advanced AI algorithms',
                  icon: Clock,
                },
                {
                  title: 'Secure Processing',
                  description: 'Your medical data is protected with enterprise-grade security',
                  icon: Shield,
                },
                {
                  title: 'Easy Sharing',
                  description: 'Share results securely with healthcare providers',
                  icon: Share2,
                },
                {
                  title: 'Download Reports',
                  description: 'Export detailed analysis reports in multiple formats',
                  icon: Download,
                },
                {
                  title: 'Skin Analysis',
                  description: 'Detect potential skin conditions with high accuracy',
                  icon: Stethoscope,
                },
                {
                  title: 'MRI Interpretation',
                  description: 'Get detailed insights from your MRI scans',
                  icon: Brain,
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div>
                    <feature.icon className="h-8 w-8 text-blue-600" />
                    <h3 className="mt-4 text-lg font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
              <p className="mt-2 text-gray-600">
                Get in touch with our team for any inquiries
              </p>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
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

            <div className="mt-8 text-center text-sm text-gray-500">
              <p>© 2025 MedAI. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;