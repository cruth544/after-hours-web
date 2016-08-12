import React from 'react'
import RestaurantCell from '../RestaurantCell/RestaurantCell.js' 

class RestaurantList extends React.Component {
  
  render() {
    var list = []
    for(var i = 0; i < 3; i++) {
      list.push(
        <RestaurantCell key={i} restaurantImage="./assets/restaurant_image_placeholder.jpg"/>
      )
    }
    return (
      <div class="restaurant-list-wrapper">
        {list}
      </div>
    )
  }

}

export default RestaurantList
