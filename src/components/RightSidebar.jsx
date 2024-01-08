import React from 'react'
import { FaBell } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

function RightSidebar() {
  return (
    <div className='parent'>

      <div className='top border rounded '>
        <a href=''><FaBell size={20} /></a>
      </div>

      <div className='bottom fs-5 shadow p-1'>
        <a href=''><IoMdAdd size={30} color='indigo' /></a>
      </div>

    </div>
  )
}

export default RightSidebar