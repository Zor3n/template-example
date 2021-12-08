import React, { Component } from "react";
import "../styles/header.css";
import Logo from '../logo.svg';

export default class Header extends Component {
  render() {
    return (
      <div className="box content header-layout ">
        <figure className="image is-128x128 mb-0">
          <img src={Logo} alt="react-logo"/>
        </figure>
        <p className="title is-4 has-text-grey-lighter">React Comments!</p>
        <p className="subtitle is-5 has-text-grey-light">Greedings from my home!</p>
      </div>
    );
  }
}
