import { ChevronDown } from 'lucide-react'
import React from 'react'

export default function SalonSelect() {
    return (
        <>
            <div className='flex items-center px-4 py-3.5 gap-2.5 border border-[#EFF4FA] rounded-lg cursor-pointer'>
                <span className="text-sm text-[#0A2540] font-medium font-manrope">Select Salon</span>
                <ChevronDown width={16} height={16} color='#0A2540' />
            </div>
        </>
    )
}
