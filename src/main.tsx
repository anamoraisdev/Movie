import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import Router from './app/router.tsx'
import Navbar from './components/navbar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar/>
    <Provider store={store}>
      <Router/>
    </Provider>
 </React.StrictMode>,
)
