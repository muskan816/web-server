const HowItWork = () => {
  const steps = [
    {
      no: "01",
      title: "Create Your Account",
      desc: "Register, login and set your monthly financial target to begin structured money tracking.",
    },
    {
      no: "02",
      title: "Add Income 7 Daily Expenses",
      desc: "Record all transactions in categories like food, shopping, transport, housing, salary and bills.",
    },
    {
      no: "03",
      title: "Monitor Dashboard & Reports",
      desc: "Use charts, monthly reports, budget planners and category analysis to understand your habits.",
    },
    {
      no: "04",
      title: "Use Ai To Improve Savings",
      desc: "Get AI based waste detection, smart recommendations and ask personalized financial questions anytime.",
    },
  ];
  return (
    <>
      <section id="howitworks" className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            How IntelliSense Works
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto leading-8">
            A simple but powerful workflow that transforms random monthly
            spending into organized financial discipline.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((data, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 p-7 hover:shadow-md hover:-translate-y-1 transition">
              <span className="text-3xl font-bold text-sky-800">{data.no}</span>
              <h3 className="font-semibold text-lg mb-3 mt-4">{data.title}</h3>
              <p className="text-gray-500 text-sm leading-7">{data.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HowItWork;
