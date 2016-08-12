import React from 'react'
import RestaurantList from '../../restaurant/RestaurantList/RestaurantList.js'
import $ from 'jquery'

class HomeController extends React.Component {
  constructor(props) {
    super(props)
  }

  getRestaurantList() {
    $.get('http://localhost:3000/restaurants/getAll').then(function (data) {
      console.log(data)
    })
  }
  

  render () {
    console.log("Rendered HomeController")
    this.getRestaurantList()
    return (
      <h1>HELLLOOOOOOOOOOO</h1>
    )
  }
}

export default HomeController
