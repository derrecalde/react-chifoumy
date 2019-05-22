import React from 'react';

export class Selector extends React.Component{
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){

    let selected = e.target.parentElement.getAttribute('selection')
    this.props.onClicker(selected);
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