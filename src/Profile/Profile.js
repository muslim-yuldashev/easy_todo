import React from 'react';
import './profile.css';
import {Container, Form} from "react-bootstrap";
import {useSelector} from "react-redux";

const Profile = () => {

    const account = useSelector(state => state.getMe)

    return (
        <div>
            <Container sm className='center-todo mt-5'>
                <Form className='review'>

                    <h2>Personal Data</h2>
                    <div>Name: {account.name}</div>
                    <div>Role: {account.role}</div>
                </Form>

            </Container>
        </div>
    );
};

export default Profile;
