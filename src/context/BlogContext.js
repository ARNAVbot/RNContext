import React, {useState, useReducer} from "react";
import createDataContext from "./createDataContext";


const blogReducer = (state, action) => {
    switch (action.type) {
        case 'edit_blog_post':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ?
                    action.payload : blogPost;
            });
        case 'delete_blog_post':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'add_blog_post':
            return [...state,
                {
                    id: Math.floor(Math.random() * 99999),
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch({type: 'add_blog_post', payload: {title: title, content: content}});
        if(callback) {
            callback();
        }
    };
};

const editBlogPost = dispatch => {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_blog_post', payload: {id: id, title: title, content: content}})
        if(callback) {
            callback();
        }
    };
};

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blog_post', payload: id});
    }
}

export const {Context, Provider} = createDataContext
(
    blogReducer,
    {addBlogPost, deleteBlogPost, editBlogPost},
    []
);