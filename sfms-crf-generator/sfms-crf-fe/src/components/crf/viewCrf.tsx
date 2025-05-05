"use client";

import Footer from '@/components/footer/footer';
import Header from '@/components/header/header';
import React, { useState, useEffect } from 'react';
import crfData from '@/mocks/data/getCRF.json';

const ViewCrf = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [crfRecords, setCrfRecords] = useState([]);

  useEffect(() => {
    const formattedData = crfData.map(record => ({
      closeDate: record.closeDate || '',
      destinationIps: record.destinationIps || '',
      port: record.port || '',
      name: record.name || '',
      email: record.email || ''
    }));
    
    setCrfRecords(formattedData);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecords = crfRecords.filter(record =>
    record.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddCRF = () => {
    if (window.location.hash) {
      window.location.hash = '#/crf';
    } else {
      window.location.href = '/crf';
    }
  };

  const viewCRFDetails = (name) => {
    console.log(`View CRF details for name: ${name}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-gray-50 px-8 py-6">
        <div className="min-w-full max-w-7xl mx-auto bg-white p-6 rounded shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-blue-900 text-xl font-bold border-b-4 border-yellow-400 pb-1">
              View Change Request Forms
            </h2>
            <button 
              onClick={handleAddCRF}
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded"
            >
              Add CRF
            </button>
          </div>

          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name..."
                className="w-full p-2 pl-10 border border-gray-300 rounded"
                value={searchTerm}
                onChange={handleSearch}
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-700 uppercase text-xs leading-normal">
                  <th className="py-2 px-4 text-left border-b">Name</th>
                  <th className="py-2 px-4 text-left border-b">Email</th>
                  <th className="py-2 px-4 text-left border-b">Destination IPs</th>
                  <th className="py-2 px-4 text-left border-b">Close Date</th>
                  <th className="py-2 px-4 text-left border-b">Port</th>
                  <th className="py-2 px-4 text-center border-b">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {filteredRecords.length > 0 ? (
                  filteredRecords.map((record, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-2 px-4">{record.name}</td>
                      <td className="py-2 px-4">{record.email}</td>
                      <td className="py-2 px-4">{record.destinationIps}</td>
                      <td className="py-2 px-4">{record.closeDate}</td>
                      <td className="py-2 px-4">{record.port}</td>
                      <td className="py-2 px-4 text-center">
                        <button 
                          onClick={() => viewCRFDetails(record.name)}
                          className="bg-yellow-100 text-yellow-600 hover:bg-yellow-200 px-3 py-1 rounded"
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-6 text-center text-gray-500">
                      No records found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ViewCrf;