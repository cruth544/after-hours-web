import React from 'react'

class RestaurantCell extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div class="restaurant-cell-wrapper">
        <img class="restaurant-cell-image" style={{width: 100 + 'px', height: 100 + 'px'}} src={this.props.restaurantImage}/>
        <span class="restaurant-cell-name">Test Test Test</span>
      </div>
    )
  }
}

export default RestaurantCell
