
import './App.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {BrowserRouter as Router,Routes,Route, Navigate} from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import BookingCar from './Pages/BookingCar';


import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { checkUser } from './Redux/actions/userAction';
function App() {

  const dispatch = useDispatch()

  
  
  const {user} = useSelector(state => state.usersReducer)
  useEffect(() => {
    dispatch(checkUser())
   }, [])
  return (
    
    <div className="App">
      <Router>
        <Routes>
          <Route  path='/' exact element={<Home/>}>
          </Route>
          
          <Route  path='/login'  element={user.username? <Navigate to='/'/>:<Login/>
          }/>
          <Route  path='/register' exact element={<Register/>}></Route>
          <Route path='/bookingcar'  element={ !user.username? <Navigate to='/kokkadchi' />:<BookingCar/>
          }></Route>
        
          <Route  path='/book/:id'  element={user.username? <BookingCar/>:<Navigate to='/login'/>
          
          
        }/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
 
