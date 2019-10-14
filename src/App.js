import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Header from "./components/Header";
import Splash from './components/Splash';
import Card from "./components/Card";


class App extends Component {
  constructor(props) {
    super(props) ;
      this.state = {
        allCoffees: []
      }
      this.setStateAllCoffees = this.setStateAllCoffees.bind(this)
    }

  componentDidMount() {
    this.getAllCoffees();
  }
  getAllCoffees(){
    axios
    .get("/api/all_coffees")
    .then(response => {
      this.setState({
        allCoffees: response.data
      });
    })
    .catch(err => console.log(err));
  }

  updateCoffees = (results) => {
    this.setState({
      allCoffees: results
    })
  }

  setStateAllCoffees(updatedCoffees) {
    this.setState({
      allCoffees: updatedCoffees
    })
  }

  render(){
    const { allCoffees } = this.state;
    const mappedCoffees = allCoffees.map(coffee => {
      return(
        <div className="card-set">
        <Card
        key={coffee.id}
        picture={coffee.picture}
        roaster={coffee.roaster}
        displayName={coffee.displayName}
        region={coffee.region}
        roasterTastingNotes={coffee.roasterTastingNotes}
        comments={coffee.comments}
        id={coffee.id}
        updateCoffees={this.updateCoffees}
        upvote= {coffee.upvote}
        setStateAllCoffees={this.setStateAllCoffees}
        />
        </div>

        )
      })
    return (
      <div className="App">
        <Header />
        <div>
          <Splash/>
        </div>
        <div className='center-grid'>
       <div className='grid'>{mappedCoffees}</div>
       </div>
       
      </div>
    );
  }};
  
  export default App;
 

        


