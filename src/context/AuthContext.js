import { createContext } from "react";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = createContext();
export const AuthContexProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            console.log(user);
        });
        return () => {
            unsub();
        }
    }, []);
    return (
        <div>
            < AuthContext.Provider value={{ currentUser }
            }>
                {children}
            </ AuthContext.Provider >
        </div>
    )

};