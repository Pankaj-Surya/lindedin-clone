import React from 'react'
import ".././Style/Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    
    const newsArticle = (heading,subtitle) =>{
       <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets__articleRightt">
            <h4>{heading}</h4>
             <p>{subtitle}</p>
        </div>
       </div>
    }
  
    return (
    <div className='widgets'>
       <div className="widgets__header">
        <h2>LinkeddIn News</h2>
        <InfoIcon/>
       </div>
      {/* {newsArticle("Argentina, Messi win the World Cup","Top news • 6,928 readers")} */}
      <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets__articleRightt">
            <h4>Argentina, Messi win the World Cup</h4>
             <p>Top news • 6,928 readers</p>
        </div>
       </div>
    
       <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets__articleRightt">
            <h4>Argentina, Messi win the World Cup</h4>
             <p>Top news • 6,928 readers</p>
        </div>
       </div>

       <div className="widgets__article">
        <div className="widgets__articleLeft">
            <FiberManualRecordIcon/>
        </div>
        <div className="widgets__articleRightt">
            <h4>Argentina, Messi win the World Cup</h4>
             <p>Top news • 6,928 readers</p>
        </div>
       </div>
   
    </div>
  )
}

export default Widgets