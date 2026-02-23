import React from "react";
import {
    FileText,
    Wallet,
    Store,
    X,
    Menu,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import IDashboard from "@/app/account-protal/svg/IDashboard";
import ISales from "@/app/account-protal/svg/ISales";
import ITex from "@/app/account-protal/svg/ITex";
interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
    return (
        <>
            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside
                className={`fixed z-50 lg:static top-0 left-0 h-full w-64 bg-white shadow-md transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
            >
                <div className="flex items-center gap-4 px-4 headerLogo">
                    <button className="mt-1">
                        <Menu width={24} height={24} color="#29343D" />
                    </button>
                    <Link href="/account-protal/dashboard">
                        <Image src={'/images/logo.svg'} width={135} height={40} alt="logo" />
                    </Link>
                    <button className="lg:hidden" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="p-4 mt-3 space-y-3">
                    <NavItem icon={<IDashboard width={20} height={20} fill="white" />} label="Dashboard" active />
                    <NavItem icon={<ISales width={20} height={20} fill="#98A4AE" />} label="Salaries" />
                    <NavItem icon={<ITex width={20} height={20} fill="#98A4AE" />} label="Taxes & Compliance" />
                    <NavItem icon={<Wallet size={18} />} label="Budgeting & Finances" />
                    <NavItem icon={<Store size={18} />} label="Salons & Invitations" />
                </nav>
            </aside>
        </>
    );
};

const NavItem = ({
    icon,
    label,
    active,
}: {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}) => (
    <div
        className={`flex items-center gap-2.5 px-4 py-[10px] rounded-lg cursor-pointer transition
    ${active ? "bg-[#635BFF] text-white" : "text-[#29343D] hover:bg-[#635BFF] hover:text-white"}`}
    >
        {icon}
        <span className="font-manrope text-[15px] font-semibold">{label}</span>
    </div>
);

export default Sidebar;