import React from 'react'
import '.././Style/Header.css'
import logo from '../assets/loginLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import {auth} from ".././firebase"
import { getAuth, signOut } from "firebase/auth";
import {logout, selectUser } from ".././features/userSlice"

function Header() {

  const dispatch = useDispatch();
  const logoutOfApp =async () => {
    dispatch(logout());
    const auth =await getAuth();
     await signOut(auth)
  }

  return (
    <div className='header'>
       <div className="header__left">
          <img src={logo} alt="logo" />
          <div className="header__search">
            {/* icon */}
            <SearchIcon></SearchIcon>         
            {/* Textbox */}
            <input placeholder='Search'  type="text" />
          </div>
       </div>
      <div className="header__right">
        <HeaderOption title="Home" Icon={HomeIcon}/>
        <HeaderOption title="My Network" Icon={SupervisorAccountIcon}/>
        <HeaderOption title="Jobs" Icon={BusinessCenterIcon}/>
        <HeaderOption title="Messaging" Icon={ChatIcon}/>
        <HeaderOption title="Notifications" Icon={NotificationsIcon}/>
        <HeaderOption 
         avatar={true}
        title="me" onCLick={logoutOfApp}/>
      </div>
    </div>
  )
}

export default Header