import React, {useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "../Login/Login";
import Header from "../Header/Header";
import TodoFilter from "../TodoFilter/TodoFilter";
import axios from "axios";
import ReviewTodo from "../ReviewTodo/ReviewTodo";
import UserList from "../UserList/UserList";
import Profile from "../Profile/Profile";
import {useDispatch} from "react-redux";
import ErrorPage from "../Error Page/ErrorPage";
import {updateGetMeAction} from "../index";



axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:3000/api/v1';

const App = () => {

    useEffect(() => {
        axios.get('/me')
            .then((response)=>{
                updateGetMe(response.data);
            })
            .catch((error)=>{
            })
    }, [])

    const dispatch = useDispatch();
    const updateGetMe = (response) =>{
        dispatch(updateGetMeAction(response))
    }


    return (
        <Router>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/ki' element={<ErrorPage />} />
            </Routes>

            <Routes>
                <Route path='/' element={<Header />}>
                    <Route index element={<TodoFilter />} />
                    <Route path="/review/:id" element={<ReviewTodo />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/profile" element={<Profile />} />
                </Route>
            </Routes>

        </Router>
    );
};

export default App;