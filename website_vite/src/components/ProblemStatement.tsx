const ProblemStatement = () => {
  return (
    <section className="py-16 bg-[#0B1120] text-white">
      <div className="flex flex-col items-center justify-center w-full">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-white mb-2">Problem Statement</h2>
        <div className="w-32 h-1 bg-blue-500 rounded mb-6"></div>

        {/* Gradient Glow Wrapper */}
        <div className="relative w-11/12 max-w-4xl">
          {/* Glow background */}
          <div className="absolute inset-0 rounded-3xl blur-2xl opacity-70 z-0 bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500"></div>

          {/* PDF card with gradient border */}
          <div className="relative z-10 p-1 rounded-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 shadow-lg">
            <div className="rounded-2xl bg-[#0B1120] p-4">
              <embed
                src="/ProblemStatement.pdf"
                type="application/pdf"
                className="w-full rounded-lg"
                style={{ height: "65vh" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
