import React from "react";

const StatCard = ({
    title,
    value,
    subtitle,
}: {
    title: string;
    value: string;
    subtitle: string;
}) => (
    <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-semibold mt-2">{value}</p>
        <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
    </div>
);

const DashboardContent: React.FC = () => {
    return (
        <div className="space-y-6">
            {/* Stats */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Salaries Pending Approval"
                    value="12"
                    subtitle="3 overdue"
                />
                <StatCard
                    title="Taxes Pending Approval"
                    value="5"
                    subtitle="1 overdue"
                />
                <StatCard
                    title="Upcoming Deadlines"
                    value="8"
                    subtitle="Next 14 days"
                />
                <StatCard
                    title="Budget Warnings"
                    value="3"
                    subtitle="Salons over budget"
                />
            </div>

            {/* Example Placeholder */}
            <div className="grid gap-6 lg:grid-cols-2">
                <div className="bg-white p-6 rounded-xl shadow-sm h-80">
                    Payroll Chart Placeholder
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm h-80">
                    Expense vs Budget Chart Placeholder
                </div>
            </div>
        </div>
    );
};

export default DashboardContent;