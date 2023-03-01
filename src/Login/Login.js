import React, {useState} from 'react';
import './login.css';
import {Button, Card, Col, Container, Form, Row} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateGetMeAction} from "../index";

const Login = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const updateGetMe = (response) =>{
        dispatch(updateGetMeAction(response))
    }

    const navigate = useNavigate();
    function goToMainPage() {
        navigate("/");
    }

    function postLogin(){
        axios.post('/login', {
            login: login,
            password: password,
        },)
            .then(function (response) {
                goToMainPage();
                updateGetMe(response.data);
            })
            .catch(function (error) {
                alert('Please try again');
            });
    }


    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">Easy ToDo</h2>
                                    <p className=" mb-5">Please enter your login and password!</p>
                                    <div className="mb-3">
                                        <Form>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label className="text-center">
                                                    Login
                                                </Form.Label>
                                                <Form.Control type="email"
                                                              placeholder="Enter login"
                                                              onChange={(e) => {
                                                                  setLogin(e.target.value)
                                                              }
                                                } />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control type="password"
                                                              placeholder="Password"
                                                              onChange={(e) => {
                                                                  setPassword(e.target.value);
                                                              }
                                                } />
                                            </Form.Group>

                                            <div className="d-grid">
                                                    <Button variant="dark"
                                                            type="submit"
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                postLogin();
                                                            }
                                                    }>Login
                                                    </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;