import React from "react";
import { Row, Col, Form, Input } from "antd";
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Spinner from '../Components/Spinner';
import { userLogin } from "../Redux/actions/userAction";
AOS.init();
function Login() {
 
  const dispatch = useDispatch()
  const {loading} = useSelector(state => state.AlertReducer)
  function onFinish(values){
   dispatch(userLogin(values))


 }
  return (
    <div className="login">
 {loading == true && (<Spinner/>)}
      <Row  className="d-flex align-items-center">
        <Col lg={16} style={{position:'relative'}}>
            <img
            data-aos-duration="1500"
             data-aos='slide-right'
             width='100%'src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" alt="image"/>
        <h1 className="login-logo">SHACARS</h1>
        </Col>
        <Col lg={8} className="text-left p-5">
          <Form layout="vertical" className="login-form p-5" onFinish={onFinish}>
            <h1>Login</h1>
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input></Input>
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input></Input>
            </Form.Item>
            <button className="btn1 mt-2 mb-3">Login</button>
            <br/>
            <Link to='/register'>Click here to register</Link>
          </Form>
        </Col>
      </Row>
      <Row></Row>
    </div>
  );
}

export default Login;
