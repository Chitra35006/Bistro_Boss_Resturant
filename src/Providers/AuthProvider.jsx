import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../components/Firebase/firebase.config";


export const AuthContext = createContext(null);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    //email/Password signin
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signIn with email
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    //logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    //updateUserProfile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
    


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, [])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;