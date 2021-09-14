import React from "react";

// an object that will contain a component
const AuthContext = React.createContext({
  isLoggedIn: false
});

export default AuthContext;