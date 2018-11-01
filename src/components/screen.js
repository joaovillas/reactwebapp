import React, { Component } from 'react';
import FirstScreen from "./firstscreen.js";
import SecondScreen from "./secondscreen.js";
import ThirdScreen from "./thirdscreen.js";
const screen = {
    height:"74vh",
    marginTop:"-2vh",
    marginLeft:"3vh",
    // backgroundColor:"yellow"
}



class Screen extends Component{

constructor(){
    super();

    this.screens = [
        <FirstScreen/>,
        <SecondScreen/>,
        <ThirdScreen/>
    ]
}

    render(){
        return (
            <div style={screen}>
                {this.screens[this.props.screen]}
            </div>
        );
    }

}

export default Screen