import React, { Component } from "react";
import "../styles/comments.css";
import CommentForm from "./CommentForm";
import "../styles/commentList.css";
import CommentsData from "../data/comments.json";
import Comment from "./Comment";

export default class Comments extends Component {
  state = {
    comments: CommentsData,
  };

  addNewComment = (comment) =>{
      const newComment = {
          id : this.state.comments.length,
          username : comment.username,
          comment : comment.comment
      }

      this.setState({comments : [...this.state.comments, newComment]});
  }

  render() {
    return (
      <div className="body-section">
        <CommentForm add={this.addNewComment}/>

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
      </div>
    );
  }
}
