import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscCheckAll } from "react-icons/vsc";

function CardsSecond() {
  return (
    <div className='card-main-2'>

      {/* card-1 */}
      <div className='card-2 shadow p-4 m-3 border rounded'>
        <div>
          <p className='top-btn'>Free Forever</p>
          <h2>Free Starter</h2>
          <p>The quickest and easiest way to try Protocols with basic functionalities.</p>
          <a style={{ backgroundColor: '#AEFF61' }} className='last-btn-1 p-2 border rounded' href="">Get Started <MdArrowRightAlt size={30} /></a>
        </div>
        <div>
          <p>What you'll get :</p>

          <ul className='nav nav-pills d-flex flex-column mb-2'>
            <li>
              <AiOutlineUser />
              <span className='ms-2'>Upto 25 Users</span>
            </li>

            <li>
              <TiCloudStorageOutline />
              <span className='ms-2'>Upto 25gb Storage</span>
            </li>

            <li>
              <MdOutlineMailOutline />
              <span className='ms-2'>Email Support</span>
            </li>

            <li>
              <div className='last-text'>
                <div><VscCheckAll /></div>
                <div className='ms-2'>Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director and Team Management included.</div>
              </div>
            </li>
          </ul>

        </div>

      </div>

      {/* card-2 */}
      <div className='card-2 shadow p-4 m-3 border rounded'>

        <div>
          <p className='top-btn2'>Let's Connect</p>
          <h2>Enterprise Plan</h2>
          <p>Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success.</p>
          <a style={{ backgroundColor: '#6195FF' }} className='last-btn-2 p-2 border rounded' href="">Contact Us <MdArrowRightAlt size={30} /></a>
        </div>

        <div className='enterprise-text'>
          <p>What you'll get :</p>

          <ul className='nav nav-pills d-flex flex-column mb-2'>
            <li><AiOutlineUser /><span className='ms-2'>Upto 25 Users</span></li>

            <li>
              <div className='last-text2'>
                <div><VscCheckAll /></div>
                <div className='ms-2'>Customization of all other features.</div>
              </div>
            </li>
          </ul>
        </div>

      </div>

    </div>
  )
}

export default CardsSecond