import React, { useState } from 'react';
import { FileText, Search } from 'lucide-react';

const CertificatePortal = () => {
  const [rollNo, setRollNo] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setNotFound(false);
    setPdfUrl('');

    const baseUrl = '/certificates/';
    const url = `${baseUrl}${rollNo}.pdf`;

    try {
      const response = await fetch(url, { method: 'HEAD' });

      if (response.ok && response.headers.get("Content-Type") === "application/pdf") {
        setPdfUrl(url);
        setNotFound(false);
      } else {
        setNotFound(true);
        setPdfUrl('');
      }
    } catch (err) {
      console.error('Error checking certificate:', err);
      setNotFound(true);
      setPdfUrl('');
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-800 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Control Theory Bootcamp Certificates</h1>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Enter your Roll Number"
            className="px-4 py-3 w-full sm:w-auto rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSearch}
            disabled={!rollNo || loading}
            className="px-6 py-3 bg-blue-600 hover:bg-orange-600 text-white rounded-md inline-flex items-center gap-2 transition-all"
          >
            <Search size={16} />
            {loading ? 'Checking...' : 'View Certificate'}
          </button>
        </div>

        {notFound && (
          <p className="text-blue-400 font-medium mt-4">You haven't satisfied the criteria to pass the course. Better luck next time.</p>
        )}

        {pdfUrl && (
          <div className="mt-8 border border-gray-700 rounded-md overflow-hidden shadow-lg">
            <iframe
              src={pdfUrl}
              title="Certificate PDF"
              className="w-full h-[600px]"
            ></iframe>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatePortal;
