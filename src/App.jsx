import React, { Component } from "react";
import {Cards, Chart, CountryPicker} from  './components';
import  './App.css';
import image from './images/image.png';
import {fetchData, fetchCountries} from './api';


class App extends Component {

  constructor (props){
    super(props);
    this.state = {data:{}, country:""}
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    //console.log("fetched",fetchedData); // it is an object
    this.setState({data:{fetchedData}});
  }

  handleCountryChange = async(country)=> {
    const fetchedData = await fetchData(country);
    this.setState({data:{fetchedData}, country: country});
  }

  render (){
    return (
      <div className="container">
        <img className="image" src={image} alt="COVID-19" />
        <Cards data= {this.state.data}/>
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={this.state.data} country={this.state.country}/>
      </div>
  );
 }
}

export default App;
