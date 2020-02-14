import React from 'react'

import routes from './routes'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <div id="App">
      <Header />

      {routes}

      <Footer />
    </div>
  )
}

export default App
