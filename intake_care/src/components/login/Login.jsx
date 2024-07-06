import React , {useState} from 'react'
import { Link } from 'react-router-dom'; 
import './login.css'
import axios from 'axios'
import { useLogin } from '../../hooks/useLogin'
import { useNavigate } from 'react-router-dom';
const Login = ({setLoginUser}) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()
  
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      await login(email, password)
      navigate('/');

    }

  return (
    <div className="container2">
   
   <div className="login bg-slate-800 text-white py-8 px-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
  <h2 className="text-center text-2xl mb-4">&copy; Intake Care</h2>
  <h1 className="text-center text-3xl mb-4">Login</h1>
  <input 
    type="email" 
    placeholder="Type your email"
    className="input-field"
    onChange={(e) => setEmail(e.target.value)} 
    value={email} 
  />
  <input 
    type="password" 
    placeholder="Type your Password"
    className="input-field"
    onChange={(e) => setPassword(e.target.value)} 
    value={password} 
  />
  <button 
    className="button bg-blue-600 text-white py-2 px-4 mt-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    disabled={isLoading} 
    onClick={handleSubmit}
  >
    {isLoading ? 'Logging in...' : 'Login'}
  </button>
  {error && <div className="text-red-500">{error}</div>}
  <div className="text-center mt-4">
        <p className="text-gray-300">Don't have an account?</p>
        <Link to="/register" className="text-blue-400 hover:text-blue-300">
          Register here
        </Link>
      </div>
  
  <h3 className="text-center mt-4">
    <a 
      href="https://de-nandan.github.io/port_react/" 
      target="_blank" 
      className="text-gray-300 hover:text-gray-400"
    >
      &copy; de_nandan_
    </a>
  </h3>
</div>
     </div>
  )
}

export default Login