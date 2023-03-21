import { Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ".././Style/Sidebar.css"
import { selectUser } from '../features/userSlice'
function Sidebar() {
     const user  = useSelector(selectUser)

     
    //  const [userData,setUserData] = useState({});
 
    //  useEffect(()=>{
    //     ()=>{userData = setUserData(user)}
    //  },[user])
     

     const recentItem = (topic) => {
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }

    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3gOPGsHaE8NwYmcYFPr31RPdwA0_IXxiSdQ&usqp=CAU" alt="background profile" />
                {/* src={user.photoUrl} */}
                <Avatar   src={user.photoUrl}  className='sidebar__avatar' >
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4 >{user.email}</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed you</p>
                    <p className="sidebar__statNumber">2,432</p>
                </div>
                <div className="sidebar__stat">
                    <p>View on post</p>
                    <p className="sidebar__statNumber">3,454</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>reactjs</p>
                </div>
                <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>programming</p>
                </div>
                <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>softwareengineering</p>
                </div>
                <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>design</p>
                </div>
                <div className="sidebar__recentItem">
                    <span className="sidebar__hash">#</span>
                    <p>developer</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar