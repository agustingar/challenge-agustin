import './App.css'
import Home from './components/Home/home';
import { Route, Routes, } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import {AuthProvider} from './context/authContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {


  return (

    <AuthProvider>
     
        <Routes>
          <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path='/login' element={<ProtectedRoute><Login /></ProtectedRoute>} />
          <Route path='register' element={<ProtectedRoute><Register /></ProtectedRoute>} />
        </Routes>
    
    </AuthProvider>

  )
}

export default App