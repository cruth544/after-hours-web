import React from 'react'
import ReactDOM from 'react-dom'
import RestaurantList from './components/restaurant/RestaurantList/RestaurantList.js'
import HomeController from './components/home/HomeController/HomeController.js'

class App extends React.Component {
  constructor() {
    super()
    this.property = 'there'
  }

  render() {
    return (
        <div className="app-wrapper">
          <HomeController/>
        </div>
      )

  }
}

const app = document.getElementById('app')
ReactDOM.render(<App/>, app)
