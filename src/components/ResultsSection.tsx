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

  const podium = results.slice(0, 4);
  const honorableMentions = results.slice(4, 6);

  return (
    <section id="results" className="py-20 relative text-white bg-[#0e1628]">
      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-4xl font-heading mb-28 border-b-4 border-blue-500 inline-block pb-2">Results</h2>

          {/* Mobile Podium Section */}
          <div className="block sm:hidden mb-16 relative flex justify-center items-end">
            {/* Podium Image */}
            <img
              src="/podium.png"
              alt="Podium"
              className="w-[90%] h-auto mx-auto"
            />

            {/* 1st Place */}
            {podium[0] && (
              <div
                className="absolute flex flex-col items-center text-center"
                style={{ top: '-27%', left: '51%', transform: 'translate(-50%, -50%)' }}
              >
                <span role="img" aria-label="crown" className="text-4xl animate-bounce">
                  👑
                </span>
                <p className="text-2xl font-extrabold text-yellow-300 drop-shadow-[0_0_8px_rgba(255,215,0,0.7)] max-w-[120px] break-words">
                  {podium[0]['Team Name']}
                </p>
                <p className="text-sm text-gray-300 font-medium mt-1">
                  #{podium[0]['Team Number']}
                </p>
              </div>
            )}

            {/* 2nd Place */}
            {podium[2] && (
              <div
                className="absolute flex flex-col items-center text-center"
                style={{ top: '0%', left: '25%', transform: 'translate(-50%, -50%)' }}
              >
                <p className="text-xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.6)] max-w-[100px] break-words">
                  {podium[2]['Team Name']}
                </p>
                <p className="text-sm text-gray-300 font-medium">
                  #{podium[2]['Team Number']}
                </p>
              </div>
            )}

            {/* 3rd Place */}
            {podium[3] && (
              <div
                className="absolute flex flex-col items-center text-center"
                style={{ top: '17%', left: '78%', transform: 'translate(-50%, -50%)' }}
              >
                <p
                  className="text-xl font-extrabold drop-shadow-[0_0_8px_rgba(205,127,50,0.8)] max-w-[100px] break-words"
                  style={{ color: '#cd7f32' }}
                >
                  {podium[3]['Team Name']}
                </p>
                <p className="text-sm text-gray-300 font-medium">
                  #{podium[3]['Team Number']}
                </p>
              </div>
            )}
          </div>


        {/* Desktop Podium Section */}
        <div className="hidden sm:flex relative justify-center items-end mb-16">

          {/* Podium Background Image */}
          <img
            src="/podium.png"
            alt="Podium"
            className="w-[700px] h-auto relative top-[100px] left-[-18px]"
          />

          {/* 1st Place Name */}
          {podium[0] && (
            <div
              className="absolute flex flex-col items-center text-center"
              style={{ top: '25%', left: '49.5%', transform: 'translate(-50%, -50%)' }}
            >
              <div className="relative">
                <span
                  role="img"
                  aria-label="crown"
                  className="text-5xl absolute -top-12 left-1/2 -translate-x-1/2 animate-bounce"
                >
                  👑
                </span>
                <p className="text-4xl font-extrabold text-yellow-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.7)]">
                  {podium[0]['Team Name']}
                </p>
              </div>
              <p className="text-lg text-gray-300 font-medium mt-1">
                #{podium[0]['Team Number']}
              </p>
            </div>
          )}

          {/* 2nd Place Name */}
          {podium[2] && (
            <div
              className="absolute flex flex-col items-center text-center"
              style={{ top: '50%', left: '31%', transform: 'translate(-50%, -50%)' }}
            >
              <p className="text-3xl font-bold text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.6)]">
                {podium[2]['Team Name']}
              </p>
              <p className="text-sm text-gray-300 font-medium">
                #{podium[2]['Team Number']}
              </p>
            </div>
          )}

          {/* 3rd Place Name */}
          {podium[3] && (
            <div
              className="absolute flex flex-col items-center text-center"
              style={{ top: '67%', left: '68%', transform: 'translate(-50%, -50%)' }}
            >
              <p
                className="text-2xl font-extrabold drop-shadow-[0_0_8px_rgba(205,127,50,0.8)]"
                style={{ color: '#cd7f32' }}
              >
                {podium[3]['Team Name']}
              </p>
              <p className="text-sm text-gray-300 font-medium">
                #{podium[3]['Team Number']}
              </p>
            </div>
          )}
        </div>

        {/* Honourable Mentions */}
        {honorableMentions.length > 0 && (
          <div className="mb-12 mt-24 relative z-10">
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
                {(() => {
                  const filtered = results.filter(team => {
                    const rankNum = Number(String(team.Rank ?? '').trim());
                    if (Number.isNaN(rankNum)) return true;
                    return rankNum !== 2;
                  });

                  return filtered.slice(0, 20).map((team, idx) => (
                    <tr key={idx} className="hover:bg-gray-800 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-center font-medium">{team.Rank}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{team['Team Name']}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">{team['Team Number']}</td>
                    </tr>
                  ));
                })()}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;
