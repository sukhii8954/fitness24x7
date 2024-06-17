import React  from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import FetchData from './FetchData.jsx'
import {BrowserRouter, Routes ,Route ,useParams ,NavLink} from 'react-router-dom'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   <App/>
   </BrowserRouter>
   
  </React.StrictMode>
);
