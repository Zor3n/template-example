import React, { Component } from 'react'

export default class Comment extends Component {

    render() {
        const {comment} = this.props;

        return (
            <div className="card mb-2">
            <div className="card-content">
              <p className="title is-6">{comment.username}</p>
              <div className="content">{comment.comment}</div>
            </div>
          </div>
        );
    }
}
