import React,{useEffect} from 'react'
import { Menu, Dropdown, Button, Space, Row, Col } from 'antd';
import {useSelector,useDispatch} from 'react-redux'
import {checkUser} from '../Redux/actions/userAction'

import {Link} from 'react-router-dom'
function DefaultLayout(props) {
  const dispatch = useDispatch()
 const {user} = useSelector(state => state.usersReducer)
useEffect(() => {
 dispatch(checkUser())
}, [])
    const menu = (
        <Menu>
           <Menu.Item>
           
            <Link to='/'>Home</Link>
          
          </Menu.Item>
          <Menu.Item>
           
            <Link to='/bookingcar'>Booking</Link>
            
          </Menu.Item>
          <Menu.Item>
          
              Profile
          
          </Menu.Item>
          <Menu.Item>
          {user.username ? (<li onClick={()=>{
            dispatch({type:"RESET_USER"})
             localStorage.removeItem('user')
             
           }}>Logout</li>) : (<Link to='/login'>Login</Link>)}
           
          </Menu.Item>
        </Menu>
      );
    return (
        <div>
            <div className="header bs1">
              <Row justify='center'>
                <Col lg={20} sm={24} xm={24} className=''>
                <div className="d-flex justify-content-between">
                    <h1>ShaCars</h1>
                    <Dropdown overlay={menu} placement="bottomCenter">
        <Button className='btn-nav'>{user.username ? user.username : "details"}</Button>
      </Dropdown>
                </div>

                </Col>
              </Row>
              

            </div>
            <div className="content">
                {props.children}

            </div>
        </div>
    )
}

export default DefaultLayout
