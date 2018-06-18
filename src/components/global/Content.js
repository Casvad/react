import React, { Component } from 'react';
import './css/Content.css';

class Content extends Component {

  constructor(props){
    super(props);
    console.log(this.props);

    this.state = {
      count : 0,
      number1 : 0,
      number2 : 0,
      result : 0
      
    };

    this.handleAddCount = this.handleAddCount.bind(this);
    this.handleResultClick = this.handleResultClick.bind(this);
    this.handleValueChange = this.handleValueChange.bind(this);

  }

  componentDidMount(){
    this.setState({
      count:1
    })
  }

  handleResultClick(e){
    this.setState({result : Number(this.state.number1) + Number(this.state.number2)})
  }

  handleValueChange(e){
    if (e.target.id === 'number1') this.setState({number1 : e.target.value});
    else this.setState({number2 : e.target.value});
  }

  handleAddCount(e){
    if(e.target.id === 'addCount') this.setState({count:this.state.count+1})
    else if(e.target.id === 'substractCount') this.setState({count:this.state.count-1})
    else  this.setState({count: 0})

  }

  render() {
    const {body} = this.props;
    return (
      <div className="Content">
        {body}
        <p/>
        <h1>Soy contenido</h1>
        <h2>Counter: {this.state.count}</h2>
        <p/>
        <button id = "addCount" onClick={this.handleAddCount}>sumar</button>
        <button id = "substractCount" onClick={this.handleAddCount}>restar</button>
        <button id = "restartCount" onClick={this.handleAddCount}>reiniciar</button>

        <p>
          <input id='number1' type = 'number' value={this.state.number1} onChange={this.handleValueChange}/>
          <input id='number2' type = 'number' value={this.state.number2} onChange={this.handleValueChange}/>
          <button id = "resultButton" onClick={this.handleResultClick}>sumar</button>
          {this.state.result}
        </p>
      </div>
    );
  }
}

export default Content;