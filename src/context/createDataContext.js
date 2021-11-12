import React , {useReducer} from "react";

export default (reducer, actions, initialState ) => {
    const Context = React.createContext({});

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, initialState);

        // actions === {addBlogPost: (dispatch) => { return () => {}} }
        const boundActions = {};
        for (let key in actions) {
            console.log(`key = ${key}`)
            boundActions[key] = actions[key](dispatch)
            console.log(`boundAction = ${boundActions[key]}`)
        }

        return <Context.Provider value={{state: state , ...boundActions }}>
            {children}
        </Context.Provider>
    }

    return {Context, Provider};
};