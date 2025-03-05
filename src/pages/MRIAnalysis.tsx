import React, { useState } from 'react';
import { Upload, AlertCircle } from 'lucide-react';

const MRIAnalysis = () => {
  const [dragActive, setDragActive] = useState(false);
  const [image, setImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    handleFile(file);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files && e.target.files[0];
    handleFile(file);
  };

  const handleFile = (file: File | null) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        simulateAnalysis();
      };
      reader.readAsDataURL(file);
    }
  };

  const simulateAnalysis = () => {
    setAnalyzing(true);
    // Simulate API call - would be replaced with actual AI service integration
    setTimeout(() => {
      setAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">MRI Scan Analysis</h1>
        <p className="mt-2 text-gray-600">
          Upload your MRI scan for AI-powered interpretation
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center ${
            dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {!image ? (
            <>
              <Upload className="mx-auto h-12 w-12 text-gray-400" />
              <div className="mt-4">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <span className="mt-2 block text-sm font-medium text-gray-900">
                    Drag and drop an MRI scan, or click to upload
                  </span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleChange}
                  />
                </label>
                <p className="mt-1 text-xs text-gray-500">
                  DICOM, PNG, JPG formats supported
                </p>
              </div>
            </>
          ) : (
            <div className="relative">
              <img
                src={image}
                alt="Uploaded MRI scan"
                className="max-h-96 mx-auto rounded-lg"
              />
              {analyzing && (
                <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-2 text-blue-600 font-medium">Analyzing scan...</p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {image && !analyzing && (
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex">
              <AlertCircle className="h-5 w-5 text-yellow-600 mr-2" />
              <p className="text-yellow-700">
                Note: This is a demo interface. In a production environment, this would be connected to an AI service for real-time MRI analysis.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MRIAnalysis;