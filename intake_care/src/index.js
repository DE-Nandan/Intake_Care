import ReactDOM from 'react-dom'
import App from './App'
import Homepage from './components/homepage/Homepage'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { AuthContextProvider } from './context/AuthContext'

ReactDOM.render(

    <AuthContextProvider><App /></AuthContextProvider>
    ,

    document.querySelector("#root"))