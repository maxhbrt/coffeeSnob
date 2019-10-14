import React, { Component } from 'react';
import Post from "./Post";
import axios from "axios";




class Card extends Component{
  constructor(props) {
    super(props);

    this.state ={
      comments: '',
      upvote: 0
    };




  // this.updateComment = this.updateComment.bind(this);
  this.deleteComment = this.deleteComment.bind(this);
  }
  deleteComment(id, commentIndex){
    console.log("DELETE COMMENT START")
    console.log("ID =", id)
    

  axios.delete(`/api/delete_comment/${id}` , {commentIndex}).then(response => {

      
      this.props.updateCoffees(response.data)
      console.log(this.props.updateCoffees)
  }).catch(err => console.log(err))
  
  
  }

  updateUpvote(id){
    axios.put(`/api/update_upvote/${id}`).then(response => {
      this.props.setStateAllCoffees(response.data)
    })
  }

   
       
    render(){
      
      const { roaster, displayName, region, roasterTastingNotes, comments, picture, id, upvote} = this.props;
      
      const commentArray = comments.map(comment => {
        return <h1 className='user-comment'>{comment.comments} <button className='x-button'
        onClick={() => 
            this.deleteComment(this.props.id, this.state[this.props.id])} 
        >X</button> </h1>
    
        
        
        
      })

          return(
            <div className="card-container">
              <div className='card-box'>
              <div className='card'>
                <img className="image-container" src={picture} alt="coffee"/>
                <h1 className="card-header">ROASTER:</h1>
                <h1 className='roaster-title'>{roaster}</h1>
                <h1 className="card-header">BATCH:</h1>
                <h2 className='card-details'>{displayName}</h2>
                
                <div className='card-details'>{region}</div>
                <h1 className="card-header">TASTING NOTES:</h1>
                <div className='card-details'>{roasterTastingNotes}</div>
                <button className="fire-button" onClick={() => this.updateUpvote(this.props.id)}>FIRE!</button>
                <div className="card-header">{upvote}</div>
                <h1 className="card-header">Leave a review:</h1>
                <div>{commentArray} 
                
                </div>
                
               <div>
                 <Post id={id} updateCoffees={this.props.updateCoffees}/>
               </div>
                </div>
              </div>
              
            </div>
          )
          
  
    }

    
}


export default Card;