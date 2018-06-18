//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types'
//Headers
import Header from './global/Header'
import Content from './global/Content'
import Footer from './global/Footer'

//Data
import items from '../data/menu'

class App extends Component {

  static propTypes =  {
    children : PropTypes.object.isRequired
  }
  render() {
    const {children} = this.props;
    return (
      <div className="App">
        <Header title="TNS Vuelos" items={items}/>
        <Content body = {children}/>
        <Footer copyright='&copy;TNS 2017' />
      </div>
    );
  }
}

export default App;
