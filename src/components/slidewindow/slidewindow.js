import React from 'react';

const slidewindow = (props) => {
    return (
        <div style={{backgroundColor:props.color, width:"100%",height:"100%",display:"inline-block", backgroundSize:"cover"}}> 
            <h1 className="text-light display-1 text-center">This is window number {props.number}</h1>
        </div>
//         <div style={{backgroundColor:props.color, width:"100%",height:"100%"}}> 
//         <h1 className="text-light display-1">This is window number 2</h1>
//     </div>
//     <div style={{backgroundColor:props.color, width:"100%",height:"100%"}}> 
//     <h1 className="text-light display-1">This is window number 3</h1>
// </div>
// <div style={{backgroundColor:props.color, width:"100%",height:"100%"}}> 
//             <h1 className="text-light display-1">This is window number 4</h1>
//         </div>
//         <div style={{backgroundColor:props.color, width:"100%",height:"100%"}}> 
//         <h1 className="text-light display-1">This is window number 5</h1>
//     </div>
    )
}

export default slidewindow;