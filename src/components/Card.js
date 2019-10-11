import React, { Component } from 'react';


class Card extends Component{
    constructor(props){
        super(props);
       
    }


    render(){
        
          return(
            <div key={allCoffees.id}>
              <div >
                <img className="image-container" src={coffee.picture} alt="coffee"/>
              </div>
              <div>
                <div>{coffee.roaster}</div>
                <div>{coffee.displayName}</div>
                <div>{coffee.region}</div>
                <div>{coffee.roasterTastingNotes}</div>
                <div>{coffee.comments}</div>
              </div>
    
            </div>
          )
          
  
    }

    
}


export default Card;