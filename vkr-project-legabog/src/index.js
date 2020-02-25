import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import {BrowserRouter} from 'react-router-dom'
import './index.css'


const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)



ReactDom.render(app, document.getElementById('root'));

serviceWorker.register();