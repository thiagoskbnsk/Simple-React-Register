import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { observer } from 'mobx-react'

import App from './screens/app';

const AppRouter = observer(() => (
  <Router>
    <App path="/" />
  </Router>
))

export default AppRouter
