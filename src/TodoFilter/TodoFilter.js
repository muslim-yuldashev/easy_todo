import React, {useEffect, useState} from 'react';
import axios from "axios";
import Todo from "../Todo/Todo";
import TodoAdd from "../TodoAdd/TodoAdd";
import {useSelector} from "react-redux";
import TodoEdit from "../TodoEdit/TodoEdit";
import {useNavigate} from "react-router-dom";

const TodoFilter = () => {
    const navigate = useNavigate();
    function goToLogin() {
        navigate(`/login`);
    }
    const state = useSelector(state => state);

    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        axios.get('/todos')
            .then((response)=>{
                setTodos(response.data)
            })
            .catch((error)=>{
                if (error.response.status === 401){
                    goToLogin();
                }
                else
                    alert('Please try again');
            })
    }, [state.title, state.todoID, state.isAdd])

    return (
        <div className='center-items'>
            <h1 className='m-3'>Welcome to Easy Todo</h1>
            {state.isAdd ? <TodoAdd /> : <TodoEdit />}

            {
                todos.map(i => {
                    return <Todo data={i}/>
                })
            }
        </div>
    );
};

export default TodoFilter;