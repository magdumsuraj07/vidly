import React, { Component } from "react";

class Likes extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
        onClick={this.props.onLikeToggle}
      ></i>
    );
  }
}

export default Likes;
