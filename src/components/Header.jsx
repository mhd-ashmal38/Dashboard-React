import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosArrowDown } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
        <div>

            <Navbar id='navbar'>
                <Navbar.Brand href="#home" className='nav-img'>
                    <img
                        src="https://png.pngtree.com/png-clipart/20211116/original/pngtree-letter-p-logo-design-vector-png-png-image_6943111.png"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-div ms-auto me-3 gap-2">
                        <Nav.Link className='nav-item shadow mt-2 p-1 border rounded' href="#home">
                            <img style={{ borderRadius: '50%' }}
                                src="https://imgs.search.brave.com/G02GgC9nmmKLy5o7b-IKZ0HpqHyn5TGXrW_C18QvnfU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/Mzg3NjE2ODEwMzMt/NjQ2MWZmYWQ4ZDgw/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TW54OGNH/VnljMjl1ZkdWdWZE/QjhmREI4Zkh3dw"
                                width="25"
                                height="25"
                                className="pt-1 nav-pic"
                                alt="React Bootstrap logo"
                            />
                            <span className='ms-2 d-none d-md-inline'>XYZ Enterprises Pvt.Ltd</span>
                        </Nav.Link>
                        <Nav.Link className='d-none d-md-inline nav-item shadow mt-2 p-2 border rounded' href="#link">
                            <IoIosArrowDown size={15} />
                        </Nav.Link>
                        <Nav.Link className='nav-item nav-item-bell shadow mt-2 p-2 border rounded' href="#link">
                            <FaBell style={{ color: '#4b87fd' }} size={20} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default Header