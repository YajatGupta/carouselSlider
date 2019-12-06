import React from 'react';

const Prev = (props) => {
    return (
        <button onClick={props.onclick} style={{fontSize:'1.5rem',zIndex:"100",position:"fixed", top:"50%" ,left:"0"}}><i className="fas fa-angle-left"></i></button>
    )
}

export default Prev;