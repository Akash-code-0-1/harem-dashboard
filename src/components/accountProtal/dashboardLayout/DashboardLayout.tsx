'use client';
import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import DashboardContent from "./DashboardContent";

interface Props {
    children: React.ReactNode;
}

const DashboardLayout: React.FC<Props> = ({ children }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen rounded-3xl">
            <Sidebar
                isOpen={isSidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="flex flex-col flex-1 overflow-hidden">
                <Topbar onMenuClick={() => setSidebarOpen(true)} />

                <main className="flex-1 overflow-y-auto p-6 bg-[#F4F7FB] mr-4 rounded-[20px]">
                    <DashboardContent/>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;