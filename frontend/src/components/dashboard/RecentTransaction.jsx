const RecentTransaction = () => {
  const transactions = [
    {
      title: "Salary credited",
      category: "Income",
      amount: "50,000",
      type: "credit",
      date: "03 may",
    },
    {
      title: "Shopping ",
      category: "Food",
      amount: "10,000",
      type: "expense",
      date: "05 may",
    },
    {
      title: "Petrol",
      category: "Transport",
      amount: "5,000",
      type: "expense",
      date: "08 may",
    },
    {
      title: "K-drama",
      category: "Entertainment",
      amount: "2,000",
      type: "expense",
      date: "15 may",
    },
    {
      title: "Freelance",
      category: "Extra income",
      amount: "15,000",
      type: "credit",
      date: "20 may",
    },
  ];
  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 p-5 h-full">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold">Transactions</h3>
          <p className="text-sm text-sky-800">view all</p>
        </div>
        <div className="space-y-4">
          {transactions.map((data, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-100 pb-4 last:border-0"
            >
              <div>
                <h4 className="font-medium text-sm">{data.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{data.category}</p>
              </div>
              <div className="text-right">
                <p
                  className={`font-semibold text-sm ${data.type === "credit" ? "text-green-600" : "text-red-500"}`}
                >
                  {" "}
                  {data.type === "credit" ? "+" : "-"}₹ {data.amount}
                </p>
                <p className="text-xs text-gray-500 mt-1">{data.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentTransaction;
