import React, { Component } from "react";
import "../styles/commentList.css";
import Comments from "../data/comments.json";
import Comment from "./Comment";

export default class CommentList extends Component {
  state = {
    comments: Comments,
  };

  render() {
    return (
      <div className="list-column box ml-2">
        <div>
          <p className="subtitle is-4 mb-3">
            <span className="tag is-primary is-medium mr-2">
              {this.state.comments.length}
            </span>
            Comments!
          </p>
        </div>

        {this.state.comments.map((comment) => (
          <Comment comment={comment} key={comment.id} />
        ))}
      </div>
    );
  }
}
