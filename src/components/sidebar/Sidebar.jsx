import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import './sidebar.scss'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/" style={{textDecoration: "none"}}>
        <span className="logo">Admin React</span>
        </Link>
        </div>
      <hr />
      <div className="center">
        <ul>
            <p className="title">MAIN</p>
            <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
            <p className="title">LISTS</p>
            <Link to="/users" style={{textDecoration: "none"}}>
            <li><GroupIcon className='icon'/><span>Users</span></li>
            </Link>
            <Link to="/products" style={{textDecoration: "none"}}>
            <li><StoreMallDirectoryIcon className='icon'/><span>Products</span></li>
            </Link>
            <li><CreditCardIcon className='icon'/><span>Orders</span></li>
            <li><LocalShippingIcon className='icon'/><span>Delivery</span></li>
            <p className="title">USEFUL LINK</p>
            <li><AssessmentIcon className='icon'/><span>Stats</span></li>
            <li><NotificationsActiveIcon className='icon'/><span>Notification</span></li>
            <p className="title">SERVICE</p>
            <li><SettingsSystemDaydreamIcon className='icon'/><span>System Healths</span></li>
            <li><PsychologyIcon className='icon'/><span>Logs</span></li>
            <li><SettingsApplicationsIcon className='icon'/><span>Settings</span></li>
            <p className="title">USER</p>
            <li><AccountBoxIcon className='icon'/><span>Profile</span></li>
            <li><LogoutIcon className='icon'/><span>Logout</span></li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  )
}

export default Sidebar
