import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div>
        <img class="logo-partner" src="" alt="" />
          <a href="#buy">Buy</a>
          <a href="#sell">Sell</a>
        </div>
      </div>
    );
  }
}

export default Header;
