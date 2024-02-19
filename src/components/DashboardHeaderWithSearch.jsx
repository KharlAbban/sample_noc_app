import React from 'react'
import { Form } from 'react-router-dom';
import { IoMdNotifications } from "react-icons/io";
import HeaderProfileDropdown from './HeaderProfileDropdown';


const DashboardHeaderWithSearch = ({searchTerm, setSearchTerm}) => {
  return (
    <header className="w-100 py-1 header" style={{height: "47px"}}>
        <div className="container-fluid d-flex justify-content-between">
            <Form className='mx-auto w-50 search-form' role='search'>
                <div className="d-flex">
                    <input onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} type="search" name='search' className="w-100 py-1 ps-4" placeholder="Type to search..." aria-label="Search box" />
                </div>
            </Form>

            <div className='d-flex gap-2 h-100'>
                <div className='shadow-lg rounded-5'>
                    <IoMdNotifications className='headerIcon p-1' fontSize={30} />
                </div>
                <HeaderProfileDropdown />
            </div>
        </div>
    </header>
  )
}

export default DashboardHeaderWithSearch;