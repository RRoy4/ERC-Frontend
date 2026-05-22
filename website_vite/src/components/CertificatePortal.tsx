import React, { useState } from 'react';
import { FileText, Search } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'

// 🔸 Reusable Card Component
const CertificateCard = ({ eventName, theme = "blue" }) => {
  const [selectedYear, setSelectedYear] = useState('2025');
  const [rollNo, setRollNo] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setNotFound(false);
    setPdfUrl('');

    const baseUrl = `/certificates/${eventName.replaceAll(' ', '_')}/${selectedYear}/`;
    const url = `${baseUrl}${rollNo}.pdf`;

    try {
      const response = await fetch(url, { method: 'HEAD' });
      if (response.ok && response.headers.get('Content-Type') === 'application/pdf') {
        setPdfUrl(url);
      } else {
        setNotFound(true);
      }
    } catch (err) {
      console.error('Error checking certificate:', err);
      setNotFound(true);
    }

    setLoading(false);
  };

  // 🎨 Dynamic theme colors
  const themeColors = {
    blue: {
      accent: 'text-blue-400',
      button: 'bg-blue-600 hover:bg-orange-600',
      success: 'bg-green-600 hover:bg-green-700',
    },
    orange: {
      accent: 'text-orange-400',
      button: 'bg-orange-600 hover:bg-orange-500',
      success: 'bg-yellow-500 hover:bg-yellow-600',
    },
  };

  const colors = themeColors[theme];

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-200">
      <div className="flex items-center gap-2 mb-4">
        <FileText className={colors.accent} size={20} />
        <h2 className="text-xl font-semibold">{eventName}</h2>
      </div>

      {/* Year Dropdown */}
      <label className="block text-sm mb-1 text-gray-400">Select Year</label>
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="w-full mb-4 px-4 py-2 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        <option value="2025">2025</option>
        {/* <option value="2024">2024</option>
        <option value="2023">2023</option> */}
      </select>

      {/* Roll Number Input */}
      <input
        type="text"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        placeholder="Enter your Roll Number"
        className="w-full mb-4 px-4 py-3 rounded-md bg-gray-900 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      {/* View Certificate Button */}
      <button
        onClick={handleSearch}
        disabled={!rollNo || loading}
        className={`w-full px-6 py-3 ${colors.button} text-white rounded-md inline-flex items-center justify-center gap-2 transition-all`}
      >
        <Search size={16} />
        {loading ? 'Checking...' : 'View Certificate'}
      </button>

      {/* Not Found Message */}
      {notFound && (
        <p className={`${colors.accent} font-medium mt-4`}>
          You haven't satisfied the criteria to pass the course. Better luck next time.
        </p>
      )}

      {/* Open in New Tab Button */}
      {pdfUrl && (
        <div className="mt-6">
          <button
            onClick={() => window.open(pdfUrl, '_blank')}
            className={`w-full px-6 py-3 ${colors.success} text-white rounded-md transition-all`}
          >
            Open Certificate in New Tab
          </button>
        </div>
      )}
    </div>
  );
};

// 🔹 Main Portal
const CertificatePortal = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-4 py-20">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-heading text-orange-400 mb-2">ERC Certificate Portal</h1>
        <p className="text-gray-400 text-lg">Find and download your certificates for ERC events</p>
      </header>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        <CertificateCard eventName="Control Theory Bootcamp" theme="blue" />
        <CertificateCard eventName="XLR8" theme="orange" />
      </div>
    </section>
  );
};

export default CertificatePortal;
