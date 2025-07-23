import React, { useState } from 'react';
import { FileText, Search } from 'lucide-react';

const CertificatePortal = () => {
  const [selectedEvent, setSelectedEvent] = useState('Control Theory Bootcamp');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [rollNo, setRollNo] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setNotFound(false);
    setPdfUrl('');

    const baseUrl = `/certificates/${selectedEvent.replaceAll(' ', '_')}/${selectedYear}/`;
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
    <section className="min-h-screen bg-gray-900 text-white px-4 py-20">
      {/* Header and Navigation */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-orange-400 mb-2">ERC Certificate Portal</h1>
        <p className="text-gray-400 text-lg">Find and download your certificates for ERC events</p>
      </header>

      {/* Certificate Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card for Control Theory Bootcamp */}
        <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="text-blue-400" size={20} />
            <h2 className="text-xl font-semibold">Control Theory Bootcamp</h2>
          </div>

          {/* Year Dropdown */}
          <label className="block text-sm mb-1 text-gray-400">Select Year</label>
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full mb-4 px-4 py-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
          </select>

          {/* Roll Number Input */}
          <input
            type="text"
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            placeholder="Enter your Roll Number"
            className="w-full mb-4 px-4 py-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* View Certificate Button */}
          <button
            onClick={handleSearch}
            disabled={!rollNo || loading}
            className="w-full px-6 py-3 bg-blue-600 hover:bg-orange-600 text-white rounded-md inline-flex items-center justify-center gap-2 transition-all"
          >
            <Search size={16} />
            {loading ? 'Checking...' : 'View Certificate'}
          </button>

          {/* Not Found Message */}
          {notFound && (
            <p className="text-blue-400 font-medium mt-4">
              You haven't satisfied the criteria to pass the course. Better luck next time.
            </p>
          )}

          {/* Open in New Tab Button */}
          {pdfUrl && (
            <div className="mt-6">
              <button
                onClick={() => window.open(pdfUrl, '_blank')}
                className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md transition-all"
              >
                Open Certificate in New Tab
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificatePortal;
