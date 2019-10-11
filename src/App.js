import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import Header from "./components/Header";
import Splash from './components/Splash';
// import Card from "./components/Card";

class App extends Component {
  constructor(props) {
    super(props) ;
      this.state = {
        allCoffees: []
      }
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
  render(){
    const { allCoffees } = this.state;
    const mappedCoffees = allCoffees.map(coffee => {
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
    })
  return (
    <div className="App">
      <Header />
      <div>
        <Splash/>
      </div>
     <div>{mappedCoffees}</div>
     {/* <Card />  */}
    </div>
  );
}};

export default App;


