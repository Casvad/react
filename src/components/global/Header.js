import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './images/logo.svg';
import './css/Header.css';

class Header extends Component {
  
  static propTypes={
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };
  render() {
    console.log(this.props);
    const {title,items} = this.props;
    return (
      <div className="Header">
        <header className="Logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 >{title}</h1>
          <ul className="Menu">
            {items && items.map( (item,key) => {
              return <li key={key}><Link to={item.url}> {item.title} </Link></li>;
            })}
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;
