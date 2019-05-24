import React from 'react';
import {Selector} from './Selector';



export class Results extends React.Component{

  // ===================================
  // CONSTRUCTOR
  constructor(props){
    super(props)
    this.playSelection = this.playSelection.bind(this) // Set bind on function to be able to show my function
    this.countScores = this.countScores.bind(this) 

    this.state = {
      userChoice: false,
      computerChoice: false,
      resultBattle: null,
      userScore: 0,
      computerScore: 0
    }
  }
  // ===================================



  // ===================================
  // COUNT SCORES
  countScores(result){
    // -----------------------------------
    // Init scores
    let userScore     = ( result === 'win' ) ? this.state.userScore + 1       : this.state.userScore;
    let computerScore = ( result === 'loose' ) ? this.state.computerScore + 1 : this.state.computerScore;
    // -----------------------------------


    // -----------------------------------
    // Update results
    this.setState( {
      userScore    : userScore,
      computerScore: computerScore
    } );
    // -----------------------------------

  }
  // ===================================

  

  // ===================================
  // UPDATE SELECTION
  playSelection(selection){
    
    // -----------------------------------
    // Set choices    
    let choices        = ['Stone', 'Cisors', 'Paper'];
    let rand           = Math.floor(Math.random() * 3) + 0; // Generate a random int value betwenn 0 and 2
    let computerChoice = choices[rand];
    // -----------------------------------


    // -----------------------------------
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
    // -----------------------------------               
        
    // Get result battle
    let result = wins[ selection+computerChoice ];

    // -----------------------------------
    // Set results vars to show up
    this.setState( {
      userChoice    : selection,
      computerChoice: computerChoice,
      resultBattle  : result
    } );
    // -----------------------------------

    // Count Score function
    this.countScores(result)
    
  }
  // ===================================



  // ===================================
  // RENDER
  render(){

    // Init html to show
    let resultComputer = ( this.state.computerChoice !== false ) ? <img src={require('../assets/img/'+this.state.computerChoice+'.svg')} /> : '';
    let resultTxt      = ( this.state.resultBattle === 'null' ) ? 'Try again!' : 'You '+this.state.resultBattle+'!';

    return(
      <div>

        <div className="head" >
          <div className="head__user-score" >
            <p>You : {this.state.userScore}</p>
          </div>

          <div className="head__title" >
            <h1>ChiFouMy</h1>
          </div>

          <div className="head__computer-score" >
            <p>Computer : {this.state.computerScore}</p>
          </div>
        </div>        

        
        <div className="computer-choice hidden" >  
          {resultComputer} 
        </div>

        <div className="computer-choice__text hidden" >
          <h2>{resultTxt}</h2>
        </div>
        

        <Selector onClicker={this.playSelection} />
        
      </div>    
    )
  }
  // ===================================

} // END CLASS