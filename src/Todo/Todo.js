import React from 'react';
import './todo.css';
import {Button, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate} from "react-router-dom";
import {
    updateIsAddAction,
    updateCurrenElementAction,
    updateCurrentEditingItemAction,
    updateTodoDeleteAction
} from "../index";

const Todo = ({data}) => {

    const role = useSelector(state => state.getMe.role);

    function deleteToDo(id){
        axios.delete(`/todos/${id}`)
            .then(res => {
                updateTodo();
            })
            .catch((error) => {
                alert('Please try again');
            })
    }

    const navigate = useNavigate();
    function goToReview(id) {
        navigate(`/review/${id}`);
    }

    const dispatch = useDispatch();
    const updateTodo = () =>{
        dispatch(updateTodoDeleteAction(data.id))
    }
    const updateAddOrEdit = () =>{
        dispatch(updateIsAddAction(false))
        dispatch(updateCurrentEditingItemAction(data))
    }
    const saveDataOfElement = () =>{
        dispatch(updateCurrenElementAction(data))
    }

    return (
        <Container className='center-todo mt-1'>

            <div className='own_container'>
                <div className='todo-wrap'>
                    <h6> <span className='todo-wrap_text'>Title: </span>{data.title}</h6>
                    <p> <span className='todo-wrap_text'>Description: </span>{data.description}</p>
                    <h6 className='todo-wrap_review'
                        onClick={() => {
                            goToReview(data.id)
                            saveDataOfElement();
                        }
                    }>Review</h6>
                </div>
                <div>
                    <Button variant='outline-light'
                            className='own-btn'
                            onClick={() => {
                                if (role === 'user'){
                                    if (data.createdBy !== 'user'){
                                        alert('You can only edit your todos')
                                        return
                                    }
                                }
                                updateAddOrEdit();
                            }
                    }>
                        <FontAwesomeIcon color="#111" fontSize="1.5em" icon={faEdit} />
                    </Button>
                    <Button variant='outline-light'
                            className='own-btn'
                            onClick={ () => {
                                if (role === 'user'){
                                    if (data.createdBy !== 'user'){
                                        alert('You can only delete your todos')
                                        return
                                    }
                                }
                                deleteToDo(data.id);
                            }
                    }>
                        <FontAwesomeIcon  color="#111" fontSize="1.5em" icon={faTrash} />
                    </Button>
                </div>
            </div>
        </Container>
    );
};

export default Todo;