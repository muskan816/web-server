import { FaArrowDown, FaArrowUp, FaPiggyBank, FaWallet } from "react-icons/fa";

const SummaryCard = () => {
  const cards = [
    {
      title: "Total Balance",
      amount: "42,350",
      change: "+8.2% this month",
      icon: <FaWallet />,
      bg: "bg-[#f4f1ff]",
      text: "text-[#5b3df5]",
    },
    {
      title: "Total Income",
      amount: "85,000",
      change: "+12.4% this month",
      icon: <FaArrowUp />,
      bg: "bg-[#00a63e]",
      text: "text-[#00a63d]",
    },
    {
      title: "Total Expense",
      amount: "42,650",
      change: "+5.1% this month",
      icon: <FaArrowDown />,
      bg: "bg-red-50",
      text: "text-red-500",
    },
    {
      title: "Net Savings",
      amount: "42,350",
      change: "49.8% saved",
      icon: <FaPiggyBank />,
      bg: "bg-blue-50",
      text: "text-blue-500",
    },
  ];
  return (
    <>
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-6 ">
        {cards.map((data, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition"
          >
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-sm text-gray-500">{data.title}</p>
                <h3 className="text-2xl font-bold">₹{data.amount}</h3>
              </div>
              <div
                className={` ${data.bg} ${data.text} w-11 h-11 rounded-xl flex items-center justify-center`}
              >
                {data.icon}
              </div>
              <p className={` ${data.text} text-sm font-medium`}>
                {data.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SummaryCard;
