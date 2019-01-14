import React, { Component } from 'react';
import logo from './logo.svg';
import Weather from './Weather';
import Details from './Details';
import './App.css';

class App extends Component {
  state = {

  }
  
  componentDidMount() {
    this._getWeathers();
  }

  _renderWeather = () => {
    return <Weather 
      temperature={this.state.weathers.temperature}
      summary={this.state.weathers.summary}
    />
  }

  _renderDetail = () => {
    return <Details 
      apparentTemperature={this.state.weathers.apparentTemperature}
      humidity={this.state.weathers.humidity}
      windSpeed={this.state.weathers.windSpeed}
      uvindex={this.state.weathers.uvIndex}
    />
  }

  _getWeathers = async () => {
    const weathers = await this._callApi();
    this.setState({
      weathers
    });
  }

  _callApi = () => {
    return fetch('https://api.darksky.net/forecast/66db38eb80fe74ffea21c00c467999ac/33.4881579,126.4947632')
    .then(response => response.json())
    .then(json => json.currently)
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className={this.state.weathers ? "App" : "App__loading"}>
          {this.state.weathers ? this._renderWeather() : 'Loading'}<br />
          {this.state.weathers ? this._renderDetail() : 'Loading'}
      </div>
    );
  }
}

export default App;
