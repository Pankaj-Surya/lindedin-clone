import React from 'react'
import ".././Style/InputOption.css"
function InputOption({Icon,title,color}) {
     return (
      <div className='inputOption'>
          <Icon style={{color:color}} />
          <h4>{title}</h4>
      </div>
     )
}

export default InputOption

// function inputOption({Icon,title,color}) {
//     return (
//       <div className='inputOption'>
//           <Icon style={{color:color}} />
//           <h4>{title}</h4>
//       </div>
//     )
//   }