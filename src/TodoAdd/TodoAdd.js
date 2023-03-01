import React, {useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import axios from "axios";
import {useDispatch} from "react-redux";
import {updateTitleAction} from "../index";


const TodoAdd = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const dispatch = useDispatch();
    const updateTitle = () =>{
        dispatch(updateTitleAction(title))
    }


    function postTodo(){
        axios.post('/todos', {
            id: Math.ceil(Math.random() * 100000),
            title: title,
            description: description,
        })
            .then(function (response) {
                updateTitle();
                setTitle('');
                setDescription('');
            })
            .catch(function (error) {
                if (error.response.status === 400){
                    alert(error.response.data.message);
                }
                else{
                    alert('Please try again');
                }
            });
    }

    return (
            <div>
                <Container>
                    <InputGroup className="lg-3">

                        <Form>
                            <Form.Control className='mt-2'
                                          placeholder="Add Title"
                                          value={title}
                                          onChange={(e) => {
                                              setTitle(e.target.value);
                                          }
                            } />

                            <textarea className='form-control'
                                      placeholder="Add description"
                                      value={description}
                                      onChange={(e) => {
                                          setDescription(e.target.value);
                                      }
                            } />

                            <Button className='btn-dark mx-.5 mt-1 my-2'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        postTodo();
                                    }
                            }>Add</Button>

                        </Form>
                    </InputGroup>
                </Container>
            </div>
    );
};

export default TodoAdd;