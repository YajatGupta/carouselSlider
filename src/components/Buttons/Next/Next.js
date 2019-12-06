import React from 'react';

const Next = (props) => {
    return (
        <button onClick={props.onclick} style={{fontSize:'1.5rem',zIndex:"100",position:"fixed", top:"50%", right:"0"}}><i className="fas fa-angle-right"></i></button>
    )
}

export default Next;