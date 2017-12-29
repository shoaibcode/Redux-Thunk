import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import reduxlogo from "../redux.svg";
import "../App.css";

import * as actions from "../action-creators"

class App extends Component {
  componentDidMount(){
    this.props.getPost()
  }
  render() {
    return (
      <div className="App">
        <ul>
          {this.props.posts.map((post, index) => {
            return <li key={index}>{post.title}</li>
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps, actions)(App);
