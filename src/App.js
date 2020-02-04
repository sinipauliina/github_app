import React, {Component} from 'react'

import routes from './routes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

class App extends Component {
  render() {
    return (
      <div id="App">
        <Header />

        {routes}

        <Footer />
      </div>
    )
  }
}

export default App
