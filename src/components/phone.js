import React, { Component } from 'react';
import cssphone from "../css/phone.css";
import TwoButtons from "./twobuttons.js";


const phone = {
    body:{

        backgroundColor :" #c0c0c0",
        height:"50vh",
        width:"50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin:"auto",
        marginTop:"3%",
        paddingTop:"350px",
        border:"rounded",
        borderRadius:"30px"
        
    },
    screen:{
        width:"48vh",
        height:"44vh",
        backgroundColor:" #f5ffff",
        borderRadius:"20px",
        marginTop:"-75%",
        paddingBottom:"380px"
    }
}



class Phone extends Component {
    
    constructor(){
        super();
         this.state = {
             screen:0
         };
         console.log(this.state.screen);
     }
    
    render(){
        return(
            <div>
                <div style={phone.body}>
                    <div style={phone.screen}>
                        <TwoButtons/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Phone;
