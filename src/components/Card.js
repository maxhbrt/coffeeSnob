import React, { Component } from 'react';
import Post from "./Post";




class Card extends Component{
   
       
    render(){
      console.log("THIS.PROPS =", this.props)
      const { roaster, displayName, region, roasterTastingNotes ,comments, picture, id} = this.props;
      const commentArray = comments.map(comment => {
        return <h1>{comment.comments}</h1>
      })

          return(
            <div className="card-container">
              <div className='card-box'>
              <div className='card'>
                <img className="image-container" src={picture} alt="coffee"/>
                <h1>{roaster}</h1>
                <h2>{displayName}</h2>
                <div>{region}</div>
                <div>{roasterTastingNotes}</div>
                {/* <div>{comments}</div> */}
                <div>{commentArray}</div>
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