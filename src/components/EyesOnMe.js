import React, { Component } from 'react';

export default class EyesOnMe extends Component {

  
    focus = () => {
        console.log('Good!')
    }
    blur = () => {
        console.log('Hey! Eyes on me!')
    }


    render(){

        return (
             <button onFocus={this.focus} onBlur={this.blur}></button>
           // <button {onFocus ? console.log('Good!') : onBlur= console.log('Hey! Eyes on me!')></button>


        )

    }


}

