import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import ".././Style/HeaderOption.css"
import { selectUser } from '../features/userSlice'
function HeaderOption({Icon,title,avatar,onCLick}) {
 // const user = useSelector(() => {selectUser()})
  const user = useSelector(selectUser)
  return (
    <div onClick={onCLick} className='headerOption'>
        {Icon && <Icon className="headerOption__icon"/>}
        { avatar && <Avatar className="headerOption__icon" src={user?.photoUrl}>
           { user?.email[0]} </Avatar> }
        <h3 className="headerOption_title">{title}</h3>
        </div>
  )
}

export default HeaderOption