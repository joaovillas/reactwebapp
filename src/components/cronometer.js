import React, {Component} from 'react';
// import moment from "moment";

const style = {
    paddingTop:"14vh",
    color:"white",
    fontSize:"5vh",
    textShadow:"0px 0px 3px black"

}


class Cronometer extends Component{
    constructor(){
        super();
        this.state = {
            second:0,
            minute:0,
            hour:0,
            day:0,

        }
    }

    incrementer = setInterval ( ()=>{
        
        if(this.state.second <60){

            this.setState({
                second:this.state.second +1
            });
        }else{
            this.setState({
                second:0,
                minute:this.state.minute +1
            });
        }

        if(this.state.minute == 60){
            this.setState({
                second:0,
                minute:0,
                hour:this.state.hour +1
            });
        }

        if(this.state.hour == 24){
            this.setState({
                second:0,
                minute:0,
                hour:0,
                day:this.state.day +1,
            });
        }

        console.log(this.incrementer);
    },1000);

    render(){
        return (
            <div>
                <h1 style={style}> {this.state.minute}:{this.state.second}</h1> 
            </div>
        );
    }
}

export default Cronometer;