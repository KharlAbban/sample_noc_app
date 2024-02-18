import React from 'react'
import { Form } from 'react-router-dom';
import { IoMdNotifications } from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import ProfileImg from "../assets/media/fgblogo_icon-removebg-preview.png";

const DashboardHeaderWithSearch = ({searchTerm, setSearchTerm}) => {
  return (
    <header className="w-100 py-1 header" style={{height: "47px"}}>
        <div className="container-fluid d-flex justify-content-between">
            <Form className='mx-auto w-50 search-form' role='search'>
                <div className="d-flex">
                    <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type="search" name='search' className="w-100 py-1 ps-4" placeholder="Type to search..." aria-label="Search box" />
                </div>
            </Form>

            <div className='d-flex gap-2'>
                <Dropdown>
                    <Dropdown.Toggle className='notifToggle'>
                        <IoMdNotifications role='button' fontSize={30} className='dropdown-toggle' data-bs-toggle="dropdown" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item>Item 1</Dropdown.Item>
                        <Dropdown.Item>Item 2</Dropdown.Item>
                        <Dropdown.Item>Item 3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div className='p-1 border border-black rounded-5 d-flex align-items-center justify-content-center'>
                    <img src={ProfileImg} height={30} className='' alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default DashboardHeaderWithSearch
