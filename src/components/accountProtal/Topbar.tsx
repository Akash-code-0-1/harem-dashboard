import React from "react";
import { Menu, Bell } from "lucide-react";

interface TopbarProps {
    onMenuClick: () => void;
}

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
    return (
        <header className="flex items-center justify-between bg-white shadow-sm px-6 py-4">
            <div className="flex items-center gap-4">
                <button className="lg:hidden" onClick={onMenuClick}>
                    <Menu size={22} />
                </button>

                <input
                    type="text"
                    placeholder="Search..."
                    className="hidden md:block w-72 px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
            </div>

            <div className="flex items-center gap-4">
                <Bell size={20} className="text-gray-600 cursor-pointer" />
                <div className="w-9 h-9 bg-gray-300 rounded-full" />
            </div>
        </header>
    );
};

export default Topbar;