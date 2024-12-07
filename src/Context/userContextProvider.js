import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState({
        email: "abhishek.shah5486@gmail.com",
    });

    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;