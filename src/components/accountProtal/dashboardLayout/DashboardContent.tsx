import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { AlertCircle, CheckCircle, Clock, TrendingDown } from "lucide-react";
import ISales from "@/app/account-protal/svg/ISales";
import ITex from "@/app/account-protal/svg/ITex";
import IBudget from "@/app/account-protal/svg/IBudget";
import IDeadline from "@/app/account-protal/svg/IDeadline";

const pagelineData = [
  { name: "Jan", value: 15000 },
  { name: "Feb", value: 18000 },
  { name: "Feb", value: 16000 },
  { name: "Feb", value: 17000 },
  { name: "Mar", value: 18000 },
  { name: "Apr", value: 16000 },
  { name: "Jun", value: 17000 },
  { name: "Jul", value: 16000 },
  { name: "Sep", value: 15000 },
];

const barData = [
  { name: "Salaries", Budget: 35000, Expense: 28000 },
  { name: "Taxes", Budget: 20000, Expense: 12000 },
  { name: "Supplies", Budget: 40000, Expense: 35000 },
  { name: "Marketing", Budget: 25000, Expense: 8000 },
  { name: "Utilities", Budget: 15000, Expense: 12000 },
];

const salonData = [
  {
    id: 1,
    name: "Glamour Beauty",
    icon: "💄",
    pendingSalaries: 5,
    pendingTaxes: 2,
    status: "Over Budget",
    statusColor: "bg-pink-100 text-pink-700",
  },
  {
    id: 2,
    name: "Style Studio",
    icon: "✂️",
    pendingSalaries: 5,
    pendingTaxes: 2,
    status: "On Track",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    name: "Chic Hair & Beauty",
    icon: "💇",
    pendingSalaries: 5,
    pendingTaxes: 2,
    status: "On Track",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    name: "Glamour Beauty",
    icon: "💄",
    pendingSalaries: 5,
    pendingTaxes: 2,
    status: "Over Budget",
    statusColor: "bg-pink-100 text-pink-700",
  },
];

const activityData = [
  {
    id: 1,
    title: "Salary declined for Jane Doe",
    company: "Glamour Beauty",
    reason: "Reason: Incorrect gross amount calculation",
    time: "Oct 28, 10:01 AM",
    icon: "💄",
    status: "High",
    statusColor: "bg-red-100 text-red-700",
  },
  {
    id: 2,
    title: "Tax document approved",
    company: "Style Studio",
    reason: "VAT Q3 2025 has been approved by owner",
    time: "Oct 28, 10:01 AM",
    icon: "✂️",
    status: "Low",
    statusColor: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    title: "Budget exceeded",
    company: "Glamour Beauty",
    reason: "Monthly budget exceeded by 15%",
    time: "Oct 28, 10:01 AM",
    icon: "💄",
    status: "Medium",
    statusColor: "bg-yellow-100 text-yellow-700",
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen p-1 ">
      {/* Header */}
      <div className="mb-8">
        <h1 className="h-[54px] px-4 flex items-center text-left text-sm md:text-[16px] font-bold text-gray-900 rounded-xl bg-[#FFFFFF]">
          Dashboard
        </h1>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Salaries Pending Approval */}
        <div className="w-full max-w-sm p-6 rounded-lg bg-gradient-to-t from-[#FEFDF7] to-[#FEF7DF] font-manrope">
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <div className="w-[40px] h-[40px] bg-yellow-400 rounded-xl flex items-center justify-center text-white text-xl">
              <ISales />
            </div>
            {/* Title */}
            <h3 className="text-lg font-medium text-gray-800">
              Salaries Pending Approval
            </h3>
          </div>
          {/* Main Number */}
          <div className="mt-4 text-[28px] font-semibold text-gray-800">12</div>
          {/* Additional Text */}
          <div className="mt-2 text-[13px] text-[#29343D] font-semibold">
            <p>3 overdue</p>
            <p>+18.5% from last month</p>
          </div>
        </div>

        {/* Taxes Pending Approval */}
        <div className="w-full max-w-sm p-6 rounded-lg bg-gradient-to-t from-[#F8FDFD] to-[#E1F9F8] font-manrope">
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <div className="w-[40px] h-[40px] bg-cyan-400 rounded-xl flex items-center justify-center text-white text-xl">
              <ITex />
            </div>
            {/* Title */}
            <h3 className="text-lg font-medium text-gray-800">
              Taxes Pending Approval
            </h3>
          </div>
          {/* Main Number */}
          <div className="mt-4 text-[28px] font-semibold text-gray-800">5</div>
          {/* Additional Text */}
          <div className="mt-2 text-[13px] text-[#29343D] font-semibold">
            <p>1 overdue</p>
            <p>-10% from last month</p>
          </div>
        </div>

        {/* Upcoming Deadlines */}
        <div className="w-full max-w-sm p-6 rounded-lg bg-gradient-to-t from-[#FAFAFF] to-[#EBEAFF] font-manrope">
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <div className="w-[40px] h-[40px] bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
              <IDeadline />
            </div>
            {/* Title */}
            <h3 className="text-lg font-medium text-gray-800">
              Upcoming Deadlines
            </h3>
          </div>
          {/* Main Number */}
          <div className="mt-4 text-[28px] font-semibold text-gray-800">8</div>
          {/* Additional Text */}
          <div className="mt-2 text-[13px] text-[#29343D] font-semibold">
            <p>Next 14 days</p>
          </div>
        </div>

        {/* Budget Warnings */}
        <div className="w-full max-w-sm p-6 rounded-lg bg-gradient-to-t from-[#FFFAFB] to-[#FFEBF1] font-manrope">
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <div className="w-[40px] h-[40px] bg-pink-500 rounded-xl flex items-center justify-center text-white text-xl">
              <IBudget />
            </div>
            {/* Title */}
            <h3 className="text-lg font-medium text-gray-800">
              Budget Warnings
            </h3>
          </div>
          {/* Main Number */}
          <div className="mt-4 text-[28px] font-semibold text-gray-800">3</div>
          {/* Additional Text */}
          <div className="mt-2 text-[13px] text-[#29343D] font-semibold">
            <p>Salons over budget</p>
            <p>+50% from last month</p>
          </div>
        </div>
      </div>

      {/* Middle Section - Activity and Salon Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Recent Activity */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-2 mb-6 flex-wrap">
            <button className="px-3 py-1 rounded-full text-sm border-2 border-purple-200 text-purple-600 font-medium">
              All
            </button>
            <button className="px-3 py-1 rounded-full text-sm text-gray-600 font-medium hover:bg-gray-100">
              High
            </button>
            <button className="px-3 py-1 rounded-full text-sm text-gray-600 font-medium hover:bg-gray-100">
              Medium
            </button>
            <button className="px-3 py-1 rounded-full text-sm text-gray-600 font-medium hover:bg-gray-100">
              Low
            </button>
          </div>

          {/* Activity Items */}
          <div className="space-y-4">
            {activityData.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 rounded-lg hover:bg-gray-50"
              >
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.company}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {item.reason}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ${item.statusColor}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Salon Overview */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Salon Overview</h2>
            <button className="px-4 py-2 rounded-lg border border-purple-200 text-purple-600 text-sm font-medium hover:bg-purple-50">
              View All
            </button>
          </div>

          {/* Salon Items */}
          <div className="space-y-4">
            {salonData.map((salon) => (
              <div
                key={salon.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{salon.icon}</div>
                  <div>
                    <p className="font-medium text-gray-900">{salon.name}</p>
                    <div className="flex gap-6 text-xs text-gray-600 mt-1">
                      <span>{salon.pendingSalaries} Pending Salaries</span>
                      <span>{salon.pendingTaxes} Pending Taxes</span>
                    </div>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${salon.statusColor}`}
                >
                  {salon.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Payroll Over Time */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Payroll Over Time
              </h2>
              <p className="text-sm text-gray-500">Last 12 Months</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50">
                Monthly
              </button>
              <button className="px-4 py-2 rounded-lg border border-purple-200 text-purple-600 text-sm font-medium hover:bg-purple-50">
                Export Data
              </button>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={pagelineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#06b6d4"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense vs Budget */}
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-bold text-gray-900">
                Expense vs Budget
              </h2>
              <p className="text-sm text-gray-500">Last 12 Months</p>
            </div>
            <button className="px-4 py-2 rounded-lg border border-purple-200 text-purple-600 text-sm font-medium hover:bg-purple-50">
              Export Data
            </button>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "0.5rem",
                  }}
                />
                <Legend />
                <Bar dataKey="Budget" fill="#6366f1" radius={[8, 8, 0, 0]} />
                <Bar dataKey="Expense" fill="#ec4899" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
