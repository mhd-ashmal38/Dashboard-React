import React from 'react'
import '../App.css'
import { BsChevronRight } from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { PiPottedPlantDuotone } from "react-icons/pi";
import { FaPuzzlePiece } from "react-icons/fa6";
import { RiQuestionnaireFill } from "react-icons/ri";
import { MdContactSupport } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Sidebar() {
    return (
        <div className=''>

            <aside id="sidebar" className='shadow'>

                {/* user profile */}
                <div className='sidebar-user'>
                    <div className='sidebar-brand text-center mb-3'>
                        <img className='mt-4 w-75 ' src="https://imgs.search.brave.com/HTUyKk8Vb_9hSWmylY1BXPS4eO5MdJpnjz-4Mx69OFY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMzEzNS8zMTM1/NzE1LnBuZw" alt="" />
                        <div className='mt-3 sidebar-user-text'>
                            <h5>
                                <a href=''>Ram Mohan <BsChevronRight size={18} color='#6195FF' /></a>
                            </h5>
                            <p>rammohan2@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* sidebar items */}
                <ul className='sidebar-list '>

                    <li className="sidebar-list-item nav-item my-1 border rounded mb-4">
                        <a href="" className="nav-link text-dark" aria-current="page">
                            <MdDashboard size={35} color='#4169E1' className='icon' />
                            <span className="ps-2 d-none d-lg-inline">Dashboard</span>
                        </a>
                    </li>

                    <li className="sidebar-list-item nav-item my-1 border rounded  mb-4">
                        <a href="" className="nav-link text-dark" aria-current="page">
                            <PiPottedPlantDuotone size={35} color='#4169E1' className='icon' />
                            <span className="ps-2 d-none d-lg-inline ">Perks</span>
                        </a>
                    </li>

                    <li className="sidebar-list-item nav-item my-1 border rounded mb-4 ">
                        <a href="" className="nav-link text-dark" aria-current="page">
                            <FaPuzzlePiece className='icon' size={35} color='#4169E1' />
                            <span className="ps-2 d-none d-lg-inline ">Addons</span>
                        </a>
                    </li>

                    <li className="sidebar-list-item nav-item my-1 border rounded  mb-4">
                        <a href="" className="nav-link text-dark" aria-current="page">
                            <RiQuestionnaireFill className='icon' size={35} color='#4169E1' />
                            <span className="ps-2 d-none d-lg-inline ">FAQ</span>
                        </a>
                    </li>

                    <li className="sidebar-list-item nav-item my-1 border rounded mb-4">
                        <a href="" className="nav-link text-dark" aria-current="page">
                            <MdContactSupport className='icon' size={35} color='#4169E1' />
                            <span className="ps-2 d-none d-lg-inline ">Support</span>
                        </a>
                    </li>

                </ul>

                {/* logout button */}
                <div className='logout p-2'>
                    <a href="">
                        <span className='d-none d-lg-inline me-2'>Logout</span><RiLogoutCircleRLine size={25} />
                    </a>
                </div>

            </aside>

        </div>
    )
}

export default Sidebar