import React from 'react';
import './reviewTodo.css';
import {useSelector} from "react-redux";
import {Button, Card, Container} from "react-bootstrap";
import {Link} from "react-router-dom";


const ReviewTodo = () => {

    const state = useSelector(state => state);
    return (
        <Container sm className='center-todo mt-5'>
            <Card>
                <Card.Header>Created by: {state.currentElement.createdBy}</Card.Header>
                <Card.Body>
                    <Card.Title>{state.currentElement.title}</Card.Title>
                    <Card.Text>
                        {state.currentElement.description}
                    </Card.Text>
                    <Link to='/'><Button variant="outline-dark">Go back</Button></Link>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ReviewTodo;

