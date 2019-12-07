import React from 'react'
import { Provider } from 'react-redux'

import Router from './components/Router'
import store from './store/index'

import '../node_modules/@fortawesome/fontawesome-free/js/all'
import './stylesheets/main.scss'

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
export default App