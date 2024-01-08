import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { TiCloudStorageOutline } from "react-icons/ti";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";

function CardsFirst() {
    return (
        <div className='card-main'>

            {/* card-1 */}
            <div className='card shadow p-4 m-3 border rounded'>
                <h3>Basic</h3>
                <h5>$ 89.99/mo</h5>
                <h4>$ 9.99/mo</h4>
                <div className='button btn-1 border rounded text-center' style={{ backgroundColor: '#FCF55F' }}>
                    <a href=""><span>Get Started </span><MdArrowRightAlt size={23} /></a>
                </div>
                <hr />
                <p>What you'll get :</p>

                <ul className='nav nav-pills d-flex flex-column mb-2'>
                    <li>
                        <div className='last-text'>
                            <div><AiOutlineUser /></div>
                            <div className='ms-2'>Upto 25 Users</div>
                        </div>
                    </li>

                    <li>
                        <div className='last-text'>
                            <div><TiCloudStorageOutline /></div>
                            <div className='ms-2'>Upto 25gb Storage</div>
                        </div>
                    </li>

                    <li>
                        <div className='last-text'>
                            <div><MdOutlineMailOutline /></div>
                            <div className='ms-2'>Email Support</div>
                        </div>
                    </li>
                </ul>

                <a className='feature ms-4' href="">EXPLORE FEATURES<MdPlayArrow color='#FCF55F' /></a>
            </div>

            {/* card-2 */}
            <div className='card shadow p-4 m-3 border rounded'>
                <h3>Standard</h3>
                <h5>$ 189.99/mo</h5>
                <h4>$ 99.99/mo</h4>
                <div className='button btn-2 border rounded text-center' style={{ backgroundColor: '#FB9984' }}>
                    <a href=""><span>Get Started </span><MdArrowRightAlt className='arrow' size={23} /></a>
                </div>
                <hr />
                <p>What you'll get :</p>

                <ul className='nav nav-pills d-flex flex-column mb-2'>
                    <li>
                        <div className='last-text'>
                            <div><AiOutlineUser /></div>
                            <div className='ms-2'>Upto 50 Users</div>
                        </div>
                    </li>

                    <li>
                        <div className='last-text'>
                            <div><TiCloudStorageOutline /></div>
                            <div className='ms-2'>Upto 60gb Storage</div>
                        </div>
                    </li>

                    <li>
                        <div className='last-text'>
                            <div><MdOutlineMailOutline /></div>
                            <div className='ms-2'>Email+Chat Support</div>
                        </div>
                    </li>
                </ul>

                <a className='feature ms-4' href="">EXPLORE FEATURES<MdPlayArrow color='#FB9984 ' /></a>
            </div>

            {/* card-3 */}
            <div className='card shadow p-4 m-3 border rounded'>
                <h3>Premium</h3>
                <h5>$ 389.99/mo</h5>
                <h4>$ 199.99/mo</h4>
                <div className='button btn-3 border rounded text-center' style={{ backgroundColor: '#F794FA' }}>
                    <a href=""><span>Get Started</span> <MdArrowRightAlt size={23} /></a>
                </div>
                <hr />
                <p>What you'll get :</p>

                <ul className='nav nav-pills d-flex flex-column mb-2'>
                    <li>
                        <div className='last-text'>
                            <div><AiOutlineUser /></div>
                            <div className='ms-2'>Upto 75 Users</div>
                        </div>
                    </li>

                    <li>
                        <div className='last-text'>
                            <div><TiCloudStorageOutline /></div>
                            <div className='ms-2'>Upto 100gb Storage</div>
                        </div>
                    </li>

                    <li>
                        <div className='last-text'>
                            <div><MdOutlineMailOutline /></div>
                            <div className='ms-2'>Email+Chat+Whatsapp Support</div>
                        </div>
                    </li>
                </ul>

                <a className='feature ms-4' href="">EXPLORE FEATURES<MdPlayArrow color='#F794FA ' /></a>
            </div>

        </div>
    )
}

export default CardsFirst