import React from 'react'
import {auth} from '../Firebase/fb'
import { createContext, useContext } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

export const authContext = createContext()

export const useAuth = () => {
  const context = useContext(authContext)
  if(!context) {
    console.log("error creating auth context")
  }
  return context
}

export function AuthProvider ({children}) {
  const register = async (email, password) =>{
    const response = await createUserWithEmailAndPassword(auth, email, password)
    console.log(response)
  }
  const logIn = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password)
    console.log(response)
  }
  const logInWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider()
    return signInWithPopup(auth, responseGoogle)
  }
  const logOut = async () => {
    const response = await signOut(auth)
    console.log(response)
  }
  return <authContext.Provider value={{
    register,
    logIn,
    logInWithGoogle,
    logOut
  }}>{children}</authContext.Provider>
}