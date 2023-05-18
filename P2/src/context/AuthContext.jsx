import React, { useEffect } from 'react'
import { auth } from '../Firebase/fb'
import { createContext, useContext } from 'react'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup, 
  signOut,
  onAuthStateChanged,
  signInWithRedirect
 } from 'firebase/auth'
import { useState } from 'react'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if(!context) {
    console.log("error creating auth context")
  }
  return context
}

export function AuthProvider ({children}) {
  const [user, setUser] = useState(null)

  const signUp = (email, password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
  }
  const logIn = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
  }
  const logInWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider()
    //return signInWithRedirect(auth, responseGoogle)
    return signInWithPopup(auth, responseGoogle)
  }
  const logOut =  () => {
    signOut(auth)
  }
  
  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
    })
  }, [])

  
  return <authContext.Provider value={{
    signUp,
    logIn,
    logInWithGoogle,
    logOut,
    user
  }}>{children}</authContext.Provider>
}


