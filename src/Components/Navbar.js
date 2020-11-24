import React from 'react'


import { makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  rootBox:{
    display:'flex',
    width:'100%'
  },
  logo: {
    
    width:'15%',
    textAlign:'center',
    color:'white'
    
  },
  navBar:{
 
    width:'55%',
    display:'flex'
  },
  links:{
    width:'30%',
    textAlign:'center',
    padding:'3%',
    color:'white',
    '&:hover':{
      textDecoration:'underline',
      textDecorationColor:'white'
    }
  }
}))
const Navbar = () => {
const style = useStyles()
    return(
        <div>
        <div className={style.rootBox}>
            <h3 className={style.logo}>JSFurniture</h3>
            <nav className={style.navBar}>
                <div className={style.links}>Home</div>
                <div className={style.links}>Shop</div>
                <div className={style.links}>About</div>
                <div className={style.links}>Contact</div>
            </nav>
        </div>
        </div>
    )
}

export default Navbar