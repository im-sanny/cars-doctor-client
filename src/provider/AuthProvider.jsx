import { Children, createContext, useState } from "react";
import {getAuth} from "firebase/auth"
import app from "../firebase/firebase.config";

const AuthContext = createContext();
const auth = getAuth(app)


const AuthProvider = ({Children}) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState
    const authInfo ={
        user, 
        loading
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {Children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;