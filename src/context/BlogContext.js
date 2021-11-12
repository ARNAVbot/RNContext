import React,{ useState, useReducer } from "react";

const BlogContext = React.createContext({});

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'add_blog_post':
            return [...state, {title: `Blog Post #${state.length + 1}`}];
        default:
            return state;
    }
};

// the children prop below is same as we use render prop in our orion
// we define a new component as a prop called render and then call {render}
// whenever we want to render that nested component

// the below export is a named export and not the default export
export const BlogProvider = ({children}) => {
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    const addBlogPost = () => {
        dispatch({type: 'add_blog_post'});
    }

    return (
        <BlogContext.Provider
            value={{data: blogPosts, addBlogPost}}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;