'use client'

import React from "react"

import Link from "next/link"

import { FaUserCircle } from "react-icons/fa"

type NavbarProps = {
    title?:string
}

const Navbar:React.FC<NavbarProps> = ({title='My dAPP'})=>{
    return(
        <nav className="bg-blue-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
            <Link href="/" className="text-x1 font-bold">{title}</Link>
            <div>
                <Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link>
                <Link href="/upload" className="hover:text-blue-400">Upload</Link>
                <FaUserCircle size={24} className="text-white cursor-pointer"/>
            </div>
        </nav>
    

    )
}

export default Navbar;