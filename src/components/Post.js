import { Avatar } from '@mui/material'
import React, { useState,forwardRef } from 'react'
import ".././Style/Post.css"
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


const Post =forwardRef(({ name, description, message, photoUrl },ref) => {
  
    return (
        <div ref={ref} className='post'>
            <div className="post__header">
                 <Avatar src={photoUrl}>{name[0] }</Avatar>
                <div className="post__info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post__body">
                <p>{message}</p>
            </div>
            <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} color="gray" title="Like"/>
            <InputOption Icon={ChatBubbleOutlineIcon} color="gray" title="Comment"/>
            <InputOption Icon={ShareOutlinedIcon} color="gray" title="Share"/>
            <InputOption Icon={SendOutlinedIcon} color="gray" title="Send"/>
            </div>
        </div>
    )
})

export default Post