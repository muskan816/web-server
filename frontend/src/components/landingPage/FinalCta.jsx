import { FaArrowRight } from "react-icons/fa";

const FinalCta = () => {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 lg:px-10 pb-20">
        <div className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Start Managing Money With More Clarity{" "}
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-8">
              Create your account, track daily finances, use AI to reduce
              unnecessary spending and build stronger monthly savings habits.
            </p>
          </div>
          <button className="px-7 py-4 bg-sky-700 text-white rounded-lg text-sm font-medium hover:bg-sky-800 transition cursor-pointer flex items-center gap-4 mx-auto">
            Create Your Free Account <FaArrowRight />
          </button>
        </div>
      </section>
    </>
  );
};

export default FinalCta;
