import 'whatwg-fetch'
import './assets/css/style.css'

import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './AppRouter'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<AppRouter  />, document.getElementById('app'))
registerServiceWorker()
