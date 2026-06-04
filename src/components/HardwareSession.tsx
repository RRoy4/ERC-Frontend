import React from "react";

const HardwareSession: React.FC = () => {
  return (
    <section className="w-full flex justify-center py-12">
      <div className="max-w-4xl w-full rounded-2xl bg-gradient-to-r from-indigo-900 via-purple-900 to-indigo-900 p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">Hardware Session</h2>
        <p className="text-gray-200 text-lg">
          The slides from our latest Hardware Session can be found on our{" "}
          <a
            href="https://erc-xlr8.notion.site/xlr8-home-25"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Notion page
          </a>
          ! Dive in to explore the concepts we shared and relive the energy of
          the session.
        </p>
      </div>
    </section>
  );
};

export default HardwareSession;
