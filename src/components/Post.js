import React, {Component} from 'react';
import axios from 'axios';
class Post extends Component {
constructor(props) {
    super(props)

    this.state = {
         comments:""
    }

    this.addComment = this.addComment.bind(this);
}

addComment(){
    
    
    const {newComment} = this.state.comments
    axios.post(`/api/add_comment/${this.props.id}`,
    newComment).then(response =>{
        
        this.setState({
        })
    })
}







render(){
    
    return(
        
        <div>
        <input type="text" value={this.state.comments}
        onChange={(e) => {this.setState({comments:e.target.value})}}/>
        <button onClick={this.addComment} className="myButton" >POST</button>
        </div>
        
    )
}




}
export default Post