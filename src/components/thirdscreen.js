import React, {Component} from 'react';
import Cronometer from './cronometer.js';

const style = {
    height:"70vh",
    marginTop:"3vh",
    cronometer:{
        border:"1px solid black",
        backgroundColor:"#c0c0c0",
        height:"40vh",
        position:"relative",
        borderRadius:"360px"
    }
}


class ThirdScreen extends Component{
    render(){
        return (
            <div style={style}>
                <div style={style.cronometer}>
                    <Cronometer/>
                </div>
            </div>
        );
    }
}

export default ThirdScreen;