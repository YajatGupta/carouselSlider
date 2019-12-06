import React from 'react';
import Carousel from 'react-carousel-slider';
import Slidewindow from '../slidewindow/slidewindow';

const slideshow = (props) => {
    let items = [
        {
            "num":"1",
            "color":"blue",
        },
        {
            "num":"2",
            "color":"brown",
        },
        {
            "num":"3",
            "color":"black",
        }
    ];

    items = items.map((item,index)=>{
        return (
            <Slidewindow key={index} number={item.num} color={item.color}/>
        );
    })
    return (<Carousel slideCpnts={items}/>);
}

export default slideshow;

