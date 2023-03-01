import React from 'react';
import './header.css';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {Link, Outlet, useNavigate} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {updateGetMeAction} from "../index";

const Header = () => {

    const role = useSelector(state => state.getMe.role)
    const navigate = useNavigate();
    function goToLogin() {
        navigate("/login");
    }

    function logOut(){
        axios.post('/logout')
            .then(function (response) {
                goToLogin();
            })
            .catch(function (error) {
                alert('Please try again');
            });
    }

    const dispatch = useDispatch();
    const updateGetMe = () =>{
        dispatch(updateGetMeAction({}))
    }


    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand><Link className='header-logo' to='/'>easyTodo</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll>
                            {role === 'admin' ? <Nav.Link><Link className='header-link' to="/users">Users list</Link></Nav.Link> : null
                            }

                            <Nav.Link><Link className='header-link' to="/profile">Profile</Link></Nav.Link>

                        </Nav>
                        <Button onClick={() => {
                            logOut();
                            updateGetMe();
                        }
                        } className='btn-dark mx-2'>
                            Log out
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
};

export default Header;