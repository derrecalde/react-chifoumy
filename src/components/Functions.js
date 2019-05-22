import React from 'react';
import {Selector} from './Selector';

export class Results extends React.Component{
  
  playSelection(selection){
    console.log(selection)
    // Set choices
    let choices = ['Stone', 'Cisors', 'Paper'];

    let computerChoice = getRandomInt(3);
    console.log(computerChoice)

  }

  render(){
    return(
      <div>
        <h1>Results</h1>
        <Selector onClicker={this.playSelection}/>
      </div>    
    )
  }
}