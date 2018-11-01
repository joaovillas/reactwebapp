import React, { Component } from 'react';
import Screen from "./screen.js";

const style = {
    

    display:"inline-block",
    textAlign:"center",
    position:"sticky",
    marginTop:"1vh",


    leftButton:{
        marginLeft:"3vh",
        width:"10vh",
        padding:"3vh",
        border:"none",
        backgroundColor:"#f5ffff",
        border:"1px solid black",
        borderRadius:"360px",
        
    },
    rightButton:{
        marginLeft:"22vh",
        width:"10vh",
        padding:"3vh",
        border:"none",
        backgroundColor:"#f5ffff",
        border:"1px solid black",
        borderRadius:"360px",
    },
    
    

}





class TwoButtons extends Component {
    
    constructor(){
        super();
        
        this.state={
            screen:0
        };
    }

    onClickEsquerda(){
        if(this.state.screen >0){
            this.setState({screen:this.state.screen -1});
            console.log(this.state.screen);
        }
        
        
    }
    
    onClickDireita(){
        if(this.state.screen<2){
            this.setState({screen:this.state.screen +1});
            console.log(this.state.screen);
        }
       
        
    }

    render(){
        
        return(
            
            <div style={style}>
                <Screen screen={this.state.screen}/>
                <button style={style.leftButton} onClick = {this.onClickEsquerda.bind(this)}>Left</button>
                {/* {this.props} */}
                <button style={style.rightButton} onClick ={this.onClickDireita.bind(this)}>Right</button>
            </div>
        );
    }
}

export default TwoButtons;
