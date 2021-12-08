import React, { Component } from "react";
import "../styles/commentForm.css";

export default class CommentForm extends Component {

  state = {
    username : "",
    comment : ""
  };

  onChangeText = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    });

    //console.log(this.state);
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.add(this.state);
    //console.log(this.state);
  };

  render() {
    return (
      <div className="form-column">
        <form className="box box-height" onSubmit={this.onSubmitForm}>
          <p>Say something about React!</p>
          <div className="field mt-2">
            <div className="control">
              <input
                name="username"
                id="username"
                className="input"
                type="text"
                placeholder="Username"
                onChange={this.onChangeText}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <textarea
                name="comment"
                id="comment"
                className="textarea has-fixed-size"
                placeholder="Comment..."
                onChange={this.onChangeText}
              ></textarea>
            </div>
          </div>
          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
