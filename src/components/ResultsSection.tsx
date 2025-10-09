import React, { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

interface TeamResult {
  Rank: string | number;
  'Team Name': string;
  'Team Number': string;
}

const ResultsSection = () => {
  const [results, setResults] = useState<TeamResult[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/results_with_names.xlsx')
      .then(res => res.arrayBuffer())
      .then(data => {
        const workbook = XLSX.read(data);
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData: TeamResult[] = XLSX.utils.sheet_to_json(sheet, { raw: false });
        setResults(jsonData);
      })
      .catch(err => console.error('Error loading Excel file:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-white text-center py-8">Loading results...</p>;
  if (results.length === 0) return <p className="text-white text-center py-8">No results available yet.</p>;

  const podium = results.slice(0, 3);
  const honorableMentions = results.slice(3, 5);

  return (
    <section id="results" className="py-20 relative text-white bg-[#0e1628]">
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-4xl font-heading mb-12 border-b-4 border-blue-500 inline-block pb-2">Results</h2>

        <div className="relative p-6 rounded-3xl bg-[#0e1628]">
            {/* Aura */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[50%] h-[88%] rounded-3xl blur-2xl opacity-30 z-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>


          {/* Podium */}
          <div className="flex justify-center items-end gap-10 mb-12 relative z-10">
            {/* 2nd Place */}
            {podium[1] && (
              <div className="flex flex-col items-center">
                <div className="w-40 h-36 bg-[#C0C0C0] rounded-t-2xl flex items-end justify-center p-3 shadow-lg">
                  <span className="text-white font-semibold text-base">{podium[1]['Team Name']}<br />#{podium[1]['Team Number']}</span>
                </div>
                <span className="text-gray-300 mt-2 text-lg font-medium">2</span>
              </div>
            )}

            {/* 1st Place */}
            {podium[0] && (
              <div className="flex flex-col items-center relative">
                <div className="w-48 h-60 bg-yellow-400 rounded-t-3xl flex items-end justify-center p-4 shadow-2xl">
                  <span className="text-black font-bold text-lg">{podium[0]['Team Name']}<br />#{podium[0]['Team Number']}</span>
                </div>
                <span className="text-gray-200 mt-2 text-xl font-bold">1</span>
                <div className="absolute -top-8">
                  <span role="img" aria-label="crown" className="text-3xl animate-bounce">👑</span>
                </div>
              </div>
            )}

            {/* 3rd Place */}
            {podium[2] && (
              <div className="flex flex-col items-center">
                <div className="w-36 h-20 bg-orange-500 rounded-t-2xl flex items-end justify-center p-3 shadow-lg">
                  <span className="text-white font-semibold text-base">{podium[2]['Team Name']}<br />#{podium[2]['Team Number']}</span>
                </div>
                <span className="text-gray-300 mt-2 text-lg font-medium">3</span>
              </div>
            )}
          </div>

          {/* Honourable Mentions */}
          {honorableMentions.length > 0 && (
            <div className="mb-12 relative z-10">
              <h3 className="text-2xl font-heading mb-6 border-b-2 border-blue-500 inline-block pb-1">Honourable Mentions</h3>
              <div className="flex justify-center gap-6 flex-wrap">
                {honorableMentions.map((team, idx) => (
                  <div key={idx} className="bg-gray-700 rounded-2xl px-6 py-4 shadow-lg">
                    <p className="font-semibold text-lg">{team['Team Name']}</p>
                    <p className="text-sm text-gray-300">#{team['Team Number']}</p>
                    <p className="text-gray-400 mt-1">Rank {team.Rank}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        
          {/* Podium + Honourable + Table wrapped in aura */}
        <div className="relative p-6 rounded-3xl bg-[#0e1628]">
          {/* Aura */}
          <div className="absolute inset-0 rounded-3xl blur-2xl opacity-30 z-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>

          {/* Full Table */}
          <div className="overflow-x-auto rounded-2xl shadow-lg border border-gray-700 p-2 bg-[#0A101F] relative z-10">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600">
                <tr>
                  <th className="px-6 py-3 text-center text-sm font-bold text-white uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-3 text-center text-sm font-bold text-white uppercase tracking-wider">Team Name</th>
                  <th className="px-6 py-3 text-center text-sm font-bold text-white uppercase tracking-wider">Team Number</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {results.slice(0, 20).map((team, idx) => (
                  <tr key={idx} className="hover:bg-gray-800 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-center font-medium">{team.Rank}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">{team['Team Name']}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center">{team['Team Number']}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
