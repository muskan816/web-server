import AiPreview from "../components/dashboard/AiPreview";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import RecentTransaction from "../components/dashboard/RecentTransaction";
import SummaryCard from "../components/dashboard/SummaryCard";
import DashboardLayout from "../components/layout/DashboardLayout";

const Dashboard = () => {
  return (
    <>
      <DashboardLayout title={"Dashboard"}>
        <SummaryCard />
        <div className="grid lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-4">
            <ExpenseChart />
          </div>
          <div className="lg:col-span-4">
            <RecentTransaction />
          </div>
          <div className="lg:col-span-4">
            <AiPreview />
          </div>
        </div>
      </DashboardLayout>
    </>
  );
};

export default Dashboard;
