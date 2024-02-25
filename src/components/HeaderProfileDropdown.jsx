import React from 'react';
import { FolderFilled, UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import { Form, Link, redirect } from 'react-router-dom';
import ProfileImg from "../assets/media/fgblogo_icon-removebg-preview.png";

const logoutUser = () => {
  localStorage.removeItem('token');
  redirect('/login');
}

const items = [
  {
    key: '1',
    label: (
      <Link className='text-decoration-none' to={`/home/tickets`}>My Tickets</Link>
    ),
    icon: <FolderFilled />
  },
  {
    key: '2',
    label: (
      <Link className='text-decoration-none' to={`/settings`}>My Profile</Link>
    ),
    icon: <UserOutlined />
  },
  {
    key: '3',
    label: (
      <Link className='text-decoration-none' to={`/home/logout`}>Logout</Link>
    ),
    icon: <LogoutOutlined />,
    danger: true
  }
];

const App = () => (
  <Dropdown menu={{items}}>
    <img src={ProfileImg} alt="" className='headerIcon shadow-lg' />
  </Dropdown>
);
export default App;