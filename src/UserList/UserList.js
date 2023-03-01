import React, {useEffect, useState} from 'react';
import './userList.css';
import axios from "axios";
import {Container, Form} from "react-bootstrap";

const UserList = () => {
    let inc = 0;
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        axios.get('/users')
            .then((response)=>{
                setUsers(response.data)
            })
            .catch((error)=>{
                alert('Please try again');
            })
    }, [])

    return (
    <Container sm className='center-todo mt-5'>
        <Form>
            <h2>Users List</h2>
            <div className='review'>{users.map((i)=>{
                return <div>{`${++inc}) `} <br/>  Name: {i.name} <br /> Role: {i.role}</div>
            })}</div>
        </Form>
    </Container>
    );
};

export default UserList;