import React, { Component } from 'react';
import logo from '../logo.svg';
const style = {
    textAlign:"center",
    marginTop:"3vh",
    position:"relative",
    

    title:{
        fontSize:"30px"
    },
    

}


class SecondScreen extends Component {
    render(){
        return(
            <div style={style}>
                <div> <img src={logo} /></div>
                <h4 style={style.title}>Some of My Social Media</h4>
                <div></div>
            </div>
        );
    }
}

export default SecondScreen;
