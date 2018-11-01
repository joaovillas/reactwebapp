import React, { Component } from 'react';
import img from "../imgs/githubicon.png";
const style = {
    textAlign:"center",
    marginTop:"0vh",
    position:"relative",

    title:{
        fontSize:"40px"
    },
    

}


class FirstScreen extends Component {
    render(){
        return(
            <div style={style}>
                <h1 style={style.title}>Hello World</h1>
                <p>I'm John 20 and this is my first app with React</p>
                <p>My GitHub Page is </p>
                <a href="http://github.com/joaovillas">
                    <img src ={img} style={{marginTop:"1vh"}} title="João Pedro Villas-Bôas"/>
                </a> 
            </div>
        );
    }
}

export default FirstScreen;
