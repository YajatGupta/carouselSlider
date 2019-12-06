import React, {Component} from 'react';
import Slider from '../slider/slider';
import Prev from '../Buttons/Prev/Prev';
import Next from '../Buttons/Next/Next';
import Customslider from '../customslider/customslider';

class Main extends Component{
    state = {
        windownum : 0,
        windowcount : 5,
        width:0,
    }

    componentWillMount = () =>{
        this.setState({width:window.innerWidth});
    }

    next = () => {
        console.log(this.state.windownum);
        
        this.setState({windownum:((this.state.windownum+1)%this.state.windowcount)});
    }

    changeslide = (slide) =>{
        this.setState({windownum:slide});
    }

    prev = () => {
        console.log(this.state.windownum);
        if(this.state.windownum==0){
            this.setState({windownum:this.state.windowcount-1});
        }
        else{
        this.setState({windownum:this.state.windownum-1});
        }
    }
    render() {
        console.log(this.state);
        console.log(window.innerWidth);
        return (
            <div style={{position:"fixed",width:"100%",height:"100%",overflow:"hidden",whiteSpace:"nowrap"}}>
                {/* <Prev  onclick={this.prev}/> */}
                <Slider num={this.state.windownum} width={this.state.width}/>
                {/* <Next position="fixed" top="50%" right="0" onclick={this.next}/> */}
                <Customslider changeslide={this.changeslide}/>
            </div>
        )
    }
}

export default Main;