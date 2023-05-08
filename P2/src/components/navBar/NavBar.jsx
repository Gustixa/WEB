import {AppBar, Toolbar, Button} from '@mui/material'
import {useAuth} from '@authentication/AuthContext'
import styles from './NavBar.module.css'

const buttonStyle = {
  marginRight: '20px',
  background: ' linear-gradient(180deg, #fbde74 0%, #ff9900 100%)',
  border: ' 1px solid rgb(252, 194, 70)',
  color: 'black',
  borderRadius: '10px',
  position: 'absolute',
  right:'0',
  '&:hover': {
    background: '#f0cb7a',
    border: '1px solid linear-gradient(180deg, #fbde74 0%, #ff9900 100%)',
    transition: '0s',
  },
}

export default function NavBar () {
  const { user, logOut } = useAuth() 

  const handleLogOut = async () => {
    await logOut()    
  }
  return (
    <AppBar style={{background:'black'}}>
      <Toolbar>
        <h1 className={styles.User}>Bienvenido {user.email}</h1>
        <Button
          sx={buttonStyle}
          onClick={handleLogOut}>
          LogOut
        </Button>
      </Toolbar>
    </AppBar>
  )
}