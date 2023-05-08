import {useAuth} from '@authentication/AuthContext'
import {Navigate, useLocation} from 'react-router-dom'

export default function ProtectedRoute ({children}) {
  const {user} = useAuth()
  const location = useLocation()
  if(!user){
    if(location.pathname === "/signIn"){
      return <>{children}</>
    }else{
      return <Navigate to={"/logIn"}></Navigate>
    }
  }
  return <>{children}</>

}