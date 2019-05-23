import React from 'react';

export class Selector extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){

    // Get a valid clicked element
    let selected = ( e.target.getAttribute('selection') ) ? e.target : e.target.parentElement;
    
    // Get value from props name <Selector />
    this.props.onClicker( selected.getAttribute('selection') );


    // Style animations
    let selectors = selected.parentElement.parentElement.children 
    let computerChoice = document.querySelector('.computer-choice')

    // Stop rotation selectors
    for (var i = 0; i < selectors.length; i++) {
      selectors[i].style.animationPlayState = 'paused'
    }    

    // Show selected element
    selected.parentElement.style.animationPlayState = 'inherit'
    selected.parentElement.classList.add('selected')

    // Show computer choice
    computerChoice.classList.remove('hidden')
    computerChoice.classList.add('visible')



    // Reset after X sec
    setTimeout(() => { 

      // Reset selected elements
      selected.parentElement.classList.remove('selected')
      computerChoice.classList.remove('visible')
      computerChoice.classList.add('hidden')
      
      // Reset rotation selectors
      for (var i = 0; i < selectors.length; i++) {
        selectors[i].style.animation = 'none'           
        selectors[i].style.opacity = '1'           
      }     

     }, 2000);


    // Re-start rotation
    setTimeout(() => { 
      
      // Re-start rotation selectors
      for (var i = 0; i < selectors.length; i++) {           
        selectors[i].style.animation = 'rotateSelectors 4s ease-in-out infinite'
        selectors[i].style.animationDelay = i+(i*0.3)+'s'                
      } 

    }, 3000);

  }

  render(){
    return(
      <div>
        <ul className="selectors" >
          <li><button onClick={this.handleClick} selection="Stone" ><img src={require('../assets/img/Stone.svg')} /></button></li>
          <li><button onClick={this.handleClick} selection="Paper" ><img src={require('../assets/img/Paper.svg')} /></button></li>
          <li><button onClick={this.handleClick} selection="Cisors" ><img src={require('../assets/img/Cisors.svg')} /></button></li>
        </ul>
      </div>
    )
  }
}