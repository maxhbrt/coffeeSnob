import React, { Component } from 'react';
import Post from "./Post";



class Card extends Component{
    constructor(props){
        super(props);


      }
       
    









    render(){
      const { roaster, displayName, region, roasterTastingNotes ,comments, picture, id} = this.props;
        console.log(this.props)
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
               <div>
                 <Post id={id}/>
               </div>
                </div>
              </div>
              
            </div>
          )
          
  
    }

    
}


export default Card;