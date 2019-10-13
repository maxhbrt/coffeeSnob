import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: ""
    };

    this.addComment = this.addComment.bind(this);
  }

  addComment(id, comments) {
      console.log("ADD COMMENT START")
      console.log("ID =", id)
    let newComment = {
      comments: comments
    };

    axios.post(`/api/add_comment/${id}`, newComment).then(response => {
        console.log("AND THEN", response.data)
        this.props.updateCoffees(response.data)
    });
  }


  


  render() {
      console.log("THIS.PROPS", this.props)
    return (
      <div>
        <input
          type="text"
          onChange={e => {
            this.setState({ [this.props.id]: e.target.value });
          }}
        />
        
        
        <button
          onClick={() =>
            this.addComment(this.props.id, this.state[this.props.id])
          }
          className="myButton"
        >
          POST
        </button>
      </div>
    );
  }
}
export default Post;
