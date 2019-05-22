import React from 'react';
import {Selector} from './Selector';

export class Results extends React.Component{

  constructor(props){
    super(props)
    this.playSelection = this.playSelection.bind(this) // Set bind on function to be able to show my function

    this.state = {
      userChoice: false,
      computerChoice: false,
      resultBattle: null,
      cssState: 'hidden'
    }
  }
  
  playSelection(selection){
    // Set choices
    
    let choices = ['Stone', 'Cisors', 'Paper'];
    let rand = Math.floor(Math.random() * 3) + 0; // Generate a random int value betwenn 0 and 2
    let computerChoice = choices[rand];

    // Set rules win/loose
    let wins = {
                'StoneCisors' : 'win',
                'StonePaper'  : 'loose',
                'CisorsPaper' : 'win',
                'CisorsStone' : 'loose',
                'PaperCisors' : 'loose',
                'PaperStone'  : 'win',
                'StoneStone'  : 'null',
                'PaperPaper'  : 'null',                
                'CisorsCisors': 'null'               
               }
    
    // Get result battle
    let result = wins[ selection+computerChoice ];

    // Set results vars to show up
    this.setState( {
      userChoice    : selection,
      computerChoice: computerChoice,
      resultBattle  : result,
      cssState: 'visible'
    } );
    
  }

  render(){

    let resultComputer = ( this.state.computerChoice !== false ) ? <img src={require('../assets/img/'+this.state.computerChoice+'.svg')} /> : 'Null';

    return(
      <div>
        <h1>Results</h1>
        <p>I play {this.state.userChoice}</p>
        <p>The bad guy played {this.state.computerChoice}</p>
        <div className={this.state.cssState+' computer-choice'} >          
          {resultComputer}
        </div>
        <p><strong>Result : {this.state.resultBattle}</strong></p>
        <Selector onClicker={this.playSelection}/>
      </div>    
    )
  }
}