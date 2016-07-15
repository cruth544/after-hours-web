require('./module2.js')
require('./module1.js')

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.property = 'there'
  }

  render() {
    return (
        <h1>Hello {this.property}</h1>
      )

  }
}

const app = document.getElementById('app')
ReactDOM.render(<App/>, app)
