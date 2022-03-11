import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokedex from './containers/Pokedex'

export default function App() {
  return (
    <Router>
      <Route path="/" component={Pokedex} />
    </Router>
  )
}
