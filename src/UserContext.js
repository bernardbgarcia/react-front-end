import React from 'react';

// Create a Context Object
//A context object as the name states is a data type of an object that can used to store information that can be shared to other components within the app.
//Context object is a different approach to passing information between components and allows easier access by avoiding the use of prop-drilling
const UserContext = React.createContext()

//The "Provider" component allows other components to consume/use the context object and supply the necessary information needed to the context object
//User state wrapper
export const UserProvider = UserContext.Provider;

export default UserContext;
