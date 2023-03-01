import React from 'react';
import App from './App/App';
import {Provider} from "react-redux";
import {createRoot} from "react-dom";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";


export const defaultState = {
    title: '',
    description: '',
    todoID: '',
    isAdd: true,
    currentEditingItem: {},
    currentElement: {},
    getMe: {},
}

const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_DESCRIPTION = 'UPDATE_DESCRIPTION';
const UPDATE_TODO_DELETE = 'UPDATE_TODO_DELETE';
const UPDATE_ADD_OR_EDIT = 'UPDATE_ADD_OR_EDIT';
const CURRENT_EDITING_ITEM = 'CURRENT_EDITING_ITEM';
const CURRENT_ELEMENT = 'CURRENT_ELEMENT';
const UPDATE_GET_ME = 'UPDATE_GET_ME';


const reducer = (state = defaultState, action) =>{

    switch (action.type){
        case UPDATE_TITLE:
            return {...state, title: action.payload}

        case UPDATE_DESCRIPTION:
            return {...state, description: action.payload}

        case UPDATE_TODO_DELETE:
            return {...state, todoID: action.payload}

        case UPDATE_ADD_OR_EDIT:
            return {...state, isAdd: action.payload}

        case CURRENT_EDITING_ITEM:
            return {...state, currentEditingItem: action.payload}

        case CURRENT_ELEMENT:
            return {...state, currentElement: action.payload}

        case UPDATE_GET_ME:
            return {...state, getMe: action.payload}

        default:
            return state
    }
}

const store = createStore(reducer, composeWithDevTools());

export const updateTitleAction = (payload) => ({type : UPDATE_TITLE, payload});
export const updateTodoDeleteAction = (payload) => ({type: UPDATE_TODO_DELETE, payload});
export const updateIsAddAction = (payload) => ({type: UPDATE_ADD_OR_EDIT, payload});
export const updateCurrentEditingItemAction = (payload) => ({type: CURRENT_EDITING_ITEM, payload});
export const updateCurrenElementAction = (payload) => ({type: CURRENT_ELEMENT, payload});
export const updateGetMeAction= (payload) => ({type: UPDATE_GET_ME, payload});


const domNode = document.getElementById('root');
const navRoot = createRoot(domNode);
navRoot.render(
    <Provider store={store}>
        <App />
    </Provider>
);

