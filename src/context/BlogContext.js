import React,{ useState } from "react";

const BlogContext = React.createContext({});

// the children prop below is same as we use render prop in our orion
// we define a new component as a prop called render and then call {render}
// whenever we want to render that nested component

// the below export is a named export and not the default export
export const BlogProvider = ({children}) => {
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
    }

    return (
        <BlogContext.Provider
            value={{data: blogPosts, addBlogPost}}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;