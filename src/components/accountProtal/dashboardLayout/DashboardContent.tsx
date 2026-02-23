import React from "react";

type StatCardProps = {
  title: string;
  value: number;
  subtitle: string;
  change: string;
  bg: string;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  subtitle,
  change,
  bg,
}) => (
  <div className={`rounded-2xl p-6 shadow-sm ${bg}`}>
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <h2 className="text-3xl font-semibold mt-2">{value}</h2>
        <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
        <p className="text-xs text-gray-400">{change}</p>
      </div>
    </div>
  </div>
);

const Badge = ({ label, color }: { label: string; color: string }) => (
  <span
    className={`text-xs px-2 py-1 rounded-full font-medium ${color}`}
  >
    {label}
  </span>
);

const DashboardContent: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-xl font-semibold mb-6">Dashboard</h1>
      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Salaries Pending Approval"
          value={12}
          subtitle="3 overdue"
          change="+18.5% from last month"
          bg="bg-yellow-100"
        />
        <StatCard
          title="Taxes Pending Approval"
          value={5}
          subtitle="1 overdue"
          change="-10% from last month"
          bg="bg-teal-100"
        />
        <StatCard
          title="Upcoming Deadlines"
          value={8}
          subtitle="Next 14 days"
          change=""
          bg="bg-indigo-100"
        />
        <StatCard
          title="Budget Warnings"
          value={3}
          subtitle="Salons over budget"
          change="+50% from last month"
          bg="bg-pink-100"
        />
      </div>
      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Recent Activity</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 text-xs bg-indigo-100 rounded-lg">
                All
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 rounded-lg">
                High
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 rounded-lg">
                Medium
              </button>
              <button className="px-3 py-1 text-xs bg-gray-100 rounded-lg">
                Low
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 border rounded-xl flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">
                  Salary declined for Jane Doe
                </p>
                <p className="text-xs text-gray-500">
                  Reason: Incorrect gross amount calculation
                </p>
              </div>
              <Badge label="High" color="bg-red-100 text-red-600" />
            </div>

            <div className="p-4 border rounded-xl flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">
                  Tax document approved
                </p>
                <p className="text-xs text-gray-500">
                  VAT Q3 2025 approved
                </p>
              </div>
              <Badge label="Low" color="bg-green-100 text-green-600" />
            </div>

            <div className="p-4 border rounded-xl flex justify-between items-center">
              <div>
                <p className="font-medium text-sm">
                  Budget exceeded
                </p>
                <p className="text-xs text-gray-500">
                  Monthly budget exceeded by 15%
                </p>
              </div>
              <Badge label="Medium" color="bg-yellow-100 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Salon Overview */}
        <div className="bg-white rounded-2xl shadow-sm p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Salon Overview</h2>
            <button className="text-indigo-600 text-sm font-medium">
              View All
            </button>
          </div>

          <div className="space-y-4">
            {[
              { name: "Glamour Beauty", status: "Over Budget" },
              { name: "Style Studio", status: "On Track" },
              { name: "Chic Hair & Beauty", status: "On Track" },
              { name: "Glamour Beauty", status: "Over Budget" },
            ].map((salon, i) => (
              <div
                key={i}
                className="flex justify-between items-center border p-4 rounded-xl"
              >
                <div>
                  <p className="font-medium text-sm">{salon.name}</p>
                  <p className="text-xs text-gray-500">
                    5 Pending Salaries · 2 Pending Taxes
                  </p>
                </div>
                <Badge
                  label={salon.status}
                  color={
                    salon.status === "Over Budget"
                      ? "bg-red-100 text-red-600"
                      : "bg-green-100 text-green-600"
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Charts Placeholder Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-sm p-6 h-80 flex items-center justify-center text-gray-400">
          Payroll Over Time (Chart Placeholder)
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 h-80 flex items-center justify-center text-gray-400">
          Expense vs Budget (Chart Placeholder)
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;