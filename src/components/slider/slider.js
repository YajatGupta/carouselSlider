import React from 'react';
import Slidewindow from '../slidewindow/slidewindow';

const slider = (props) => {
    let slidelength = props.num*props.width;
    return (
        <div style={{width:"100%",height:"100%",zIndex:"50",
        transform:`translateX(-${slidelength}px)`,
        transition:'all 0.8s ease-in-out'}}>
            <Slidewindow color="blue" number="1"/>
            <Slidewindow color="red" number="2"/>
            <Slidewindow color="brown" number="3"/>
            <Slidewindow color="green" number="4"/>
            <Slidewindow color="black" number="5"/>
            {/* <Slidewindow number="2" color="blue"/>
            <Slidewindow number="3" color="blue"/>
            <Slidewindow number="4" color="blue"/>
            <Slidewindow number="5" color="blue"/> */}
        </div>
    )
}

export default slider;