import { FaArrowRight, FaRobot } from "react-icons/fa";

const AiHighlights = () => {
  const points = [
    "AI scans monthly expenses and finds unusual spending patterns.",
    "Detects subscriptions, impluse shopping and recurring money leaks.",
    "Builds a practical category wise budget recommendation.",
    "Lets user directly chat and ask personalized financial questions.",
  ];
  return (
    <>
      <section id="aiadvisor" className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-12 h-12 rounded-xl bg-[#f4f1ff] text-sky-800 flex items-center justify-center text-xl mb-5 ">
              <FaRobot />
            </div>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Not Just An Expense Tracker - A real AI financial Assistant
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto leading-8">
                IntelliSpend AI continously alalyzes your financial behaviour
                and gives practical money management suggestions instead of
                generic charts alone.
              </p>
            </div>
            <div className="space-y-2 mb-8">
              {points.map((data, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-100 rounded-xl p-4 text-sm text-gray-700 "
                >
                  {data}
                </div>
              ))}
            </div>
            <button className="px-7 py-4 bg-sky-700 text-white rounded-lg text-sm font-medium hover:bg-sky-800 transition cursor-pointer flex items-center gap-4">
              Experience AI Finance Planning <FaArrowRight />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2">
                AI Spending Analytics
              </h3>
              <p className="text-gray-500 text-sm">
                AI identifies top categories, rising expenses and unstable
                spending patterns.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2">
                Money Waste Detection
              </h3>
              <p className="text-gray-500 text-sm">
                Recurring subscriptions and hidden leakages are automatically
                highlighted.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2">
                Budget Recommendation
              </h3>
              <p className="text-gray-500 text-sm">
                AI creates a safer monthly alocation model based on real usage
                behaviour.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2">AI Chat Advisor</h3>
              <p className="text-gray-500 text-sm">
                Users can assk direct questions related to debt, saving,
                spending and discipline.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AiHighlights;
