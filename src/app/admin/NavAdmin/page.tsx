// components/NavBar.tsx
'use client'

import React from 'react'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className="w-full bg-white h-16 px-[352px] flex items-center justify-between">
      {/* Left - Logo */}
      <div className="h-full flex items-center">
        <Image src="/A2SV_Logo.svg" alt="A2SV Logo" width={128} height={32} />
      </div>

      {/* Center - Navigation */}
      <div className="flex gap-8 items-center h-full">
        <span className="text-[#6B7280] font-medium text-sm leading-5  pb-0.5 cursor-pointer">
          Dashboard
        </span>
        <span className="text-[#6B7280] font-medium text-sm leading-5 cursor-pointer">Users</span>
        <span className="text-[#6B7280] font-medium text-sm leading-5 cursor-pointer">Cycles</span>
        <span className="text-[#6B7280] font-medium text-sm leading-5 cursor-pointer">Analytics</span>
      </div>

      {/* Right - Profile section */}
      <div className="flex items-center gap-6">
        <span className="text-[#4F46E5] font-medium text-sm leading-5 cursor-pointer">
          Your Profile
        </span>
        <span className="text-[#6B7280] font-medium text-sm leading-5">Admin User</span>
        <span className="text-[#6B7280] font-medium text-sm leading-5 cursor-pointer">Logout</span>
      </div>
    </div>
  )
}

export default NavBar
