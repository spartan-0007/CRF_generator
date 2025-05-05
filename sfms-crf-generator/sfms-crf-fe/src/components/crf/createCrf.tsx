"use client";

import React, { useState } from 'react';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';

const CreateCrf = () => {
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    company: '',
    location: '',
    contactNumber: '',
    email: '',
    priority: '',
    crf_dept: '',
    protocol: '',
    source_ips: '',
    source_server_details: '',
    destination_ips: '',
    destination_server_details: '',
    port: '',
    port_description: '',
    open_date: '',
    close_date: '',
    reason_for_change: ''
  });
  
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleViewCRF = () => {
    if (window.location.hash) {
      window.location.hash = '#/getcrf';
    } else {
      window.location.href = '/getcrf';
    }
  };
  
  const handleOpenPopup = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };
  
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const inputClass = "w-full p-2 border border-gray-300 rounded";

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-white px-6 py-4">
        <div className="  min-w-full bg-white border border-gray-200 p-0.5 rounded shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-blue-900 text-xl font-bold border-b-4 border-yellow-400 pb-1">
              Change Request Form
            </h2>
            <button 
              onClick={handleViewCRF}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded"
            >
              VIEW CRF
            </button>
          </div>

          <div className="mb-6">
            <span className="text-gray-700">Before filling in the CRF form details, please </span>
            <a href="#" className="text-blue-500 font-medium" onClick={handleOpenPopup}>CLICK HERE</a>
            <span className="text-gray-700"> to go through the points.</span>
          </div>

          {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                <div className="flex justify-end p-2">
                  <button 
                    onClick={handleClosePopup}
                    className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="text-center text-xl font-bold text-blue-900 border-b pb-2 mx-6">
                  CRF Rules
                </div>
                <div className="p-6">
                  <div className="space-y-3 text-gray-700">
                    <p className="font-bold text-red-600">All are Mandatory Fields</p>
                    <p>If you want to provide multiple ports, you can separate by comma ( , ).</p>
                    <p className="font-medium">If you want to give more than one IP address, you can separate by comma ( , ).</p>
                    <p>For Other Queries, Kindly contact SFMS-Development Team.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white border border-gray-200 p-6 rounded">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className={inputClass}
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                name="designation"
                placeholder="Designation"
                className={inputClass}
                value={formData.designation}
                onChange={handleChange}
              />
              <input
                type="text"
                name="company"
                placeholder="Company"
                className={inputClass}
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <input
                type="text"
                name="location"
                placeholder="Location"
                className={inputClass}
                value={formData.location}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="contactNumber"
                placeholder="Contact Number"
                className={inputClass}
                value={formData.contactNumber}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={inputClass}
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <input
                type="text"
                name="priority"
                placeholder="Priority"
                className={inputClass}
                value={formData.priority}
                onChange={handleChange}
              />
              <input
                type="text"
                name="crf_dept"
                placeholder="CRF Department"
                className={inputClass}
                value={formData.crf_dept}
                onChange={handleChange}
              />
              <input
                type="text"
                name="protocol"
                placeholder="Protocol" 
                className={inputClass}
                value={formData.protocol}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <input
                type="text"
                name="source_ips"
                placeholder="Source IPs"
                className={inputClass}
                value={formData.source_ips}
                onChange={handleChange}
              />
              <input
                type="text"
                name="source_server_details"
                placeholder="Source Server Details"
                className={inputClass}
                value={formData.source_server_details}
                onChange={handleChange}
              />
              <input
                type="text"
                name="port"
                placeholder="Port"
                className={inputClass}
                value={formData.port}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <input
                type="text"
                name="destination_ips"
                placeholder="Destination IPs"
                className={inputClass}
                value={formData.destination_ips}
                onChange={handleChange}
              />
              <input
                type="text"
                name="destination_server_details"
                placeholder="Destination Server Details"
                className={inputClass}
                value={formData.destination_server_details}
                onChange={handleChange}
              />
              <input
                type="text"
                name="port_description"
                placeholder="Port Description"
                className={inputClass}
                value={formData.port_description}
                onChange={handleChange}
              />
            </div>

            <div className="mb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-1">Open Date</label>
                  <input
                    type="date"
                    name="open_date"
                    className={inputClass}
                    value={formData.open_date}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Close Date</label>
                  <input
                    type="date"
                    name="close_date"
                    className={inputClass}
                    value={formData.close_date}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="mb-8">
              <textarea
                name="reason_for_change"
                placeholder="Reason for Change"
                className={`${inputClass} h-32`}
                value={formData.reason_for_change}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="flex justify-end gap-4">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-8 rounded"
              >
                GENERATE CRF
              </button>
              <button
                type="reset"
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-8 rounded"
              >
                RESET
              </button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CreateCrf;