import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import {useState, useEffect} from 'react'
import {AuthProvider} from './hooks/authContext'
import {auth} from './firebaseConfig'
import {onAuthStateChanged} from 'firebase/auth'
import {Navigate} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/home'
function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    <Router>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Routes>
          <Route exact path='/' element={
       <><NavBar />   <Home/></>
          }/>
          <Route path="/login" element={
            !currentUser? 
             <Login/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/register" element={
            !currentUser? 
            <Register/>
            : <Navigate to='/' replace/>
          } />
    
        </Routes> 
      </AuthProvider>
  </Router>
  );
}

export default App;