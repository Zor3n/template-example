import React, { Component } from 'react';
import Header from './Header';
import '../styles/layout.css';
import Comments from './Comments';

export default class Layout extends Component {
    render() {
        return (
            <div className="layout-size">
                <div className="layout-child">
                    <Header/>
                    <Comments/>
                </div>
            </div>
        );
    }
}
