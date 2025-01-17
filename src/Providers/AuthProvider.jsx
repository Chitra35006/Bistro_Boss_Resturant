import { createContext, useEffect, useState } from "react";

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../components/Firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";



export const AuthContext = createContext(null);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const axiosPublic = useAxiosPublic();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

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

    //googleSignIn
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
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
            // console.log('current user', currentUser);
            if(currentUser){
                //get token and store client
                const userInfo = { email: currentUser.email };
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else{
               //TODO: remove token (if token stored in the client side--->>> Local storage, caching, in memory)
               localStorage.removeItem('access-token');
               setLoading(false);

            }
            
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])


    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}            
        </AuthContext.Provider>
    );
};

export default AuthProvider;