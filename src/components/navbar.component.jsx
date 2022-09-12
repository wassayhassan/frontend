import React from "react";
import { Dropdown, Navbar, Avatar } from "flowbite-react";
import { useLocation } from "react-router-dom";
import logo from '../logo.png'

function NavBar(){
    const { pathname } = useLocation();
    return(
        <Navbar
            fluid={true}
            rounded={true}
            >
            <Navbar.Brand href="/">

                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                TNEA
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                arrowIcon={false}
                inline={true}
                label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}/>}
                >
                <Dropdown.Header>
                    <span className="block text-sm">
                    John Green
                    </span>
                    <span className="block truncate text-sm font-medium">
                    john@gmail.com
                    </span>
                </Dropdown.Header>
                <Dropdown.Item>
                    Dashboard
                </Dropdown.Item>
                <Dropdown.Item>
                    Settings
                </Dropdown.Item>
                <Dropdown.Item>
                    Earnings
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>
                    Sign out
                </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                href="/"
                active={pathname === '/'? true: false}
                >
                Home
                </Navbar.Link>
                <Navbar.Link
                 href="/about"
                 active={pathname === '/about'? true: false}
                
                >
                About
                </Navbar.Link>
                <Navbar.Link 
                href="/services"
                active={pathname === '/services'? true: false}
                >
                Services
                </Navbar.Link>
                <Navbar.Link 
                href="/contact"
                active={pathname === '/contact'? true: false}
                >
                Contact
                </Navbar.Link>
            </Navbar.Collapse>
            </Navbar>
    )
}
export default NavBar