import React, {useEffect, useState} from 'react';
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import './todoEdit.css';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {updateIsAddAction} from "../index";

const TodoEdit = () => {
    const state = useSelector(state => state);
    const [title, setTitle] = useState(state.currentEditingItem.title);
    const [description, setDescription] = useState(state.currentEditingItem.description);

    useEffect(()=>{
        setTitle(state.currentEditingItem.title);
        setDescription(state.currentEditingItem.description);
    }, [state.currentEditingItem.id])


    const dispatch = useDispatch();
    const updateIsAdd = () =>{
        dispatch(updateIsAddAction(true))
    }

    function putTodos (id){
        axios.put(`/todos/${id}`, {
            title: title,
            description: description,
        })
            .then(function (response) {
                updateIsAdd();
            })
            .catch(function (error) {
                alert('Please try again');
            });
    }


    return (
        <div>
            <Container>
                <InputGroup className="lg-3">

                    <Form>
                        <Form.Control
                            placeholder="Edit Title"
                            value={title} onChange={(e) => {
                                setTitle(e.target.value);
                            }
                        } />

                        <textarea className='form-control'
                                  placeholder="Edit description"
                                  value={description}
                                  onChange={(e) => {
                                      setDescription(e.target.value);
                                  }
                        } />

                        <Button className='btn-dark mx-.5'
                                onClick={(e) => {
                                    e.preventDefault();
                                    putTodos(state.currentEditingItem.id);
                                }
                        }>Edit</Button>

                    </Form>
                </InputGroup>
            </Container>
        </div>
    );
};

export default TodoEdit;