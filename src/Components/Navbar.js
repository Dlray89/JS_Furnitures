import React from 'react'


import { makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  rootBox:{
    border:'solid 2px blue',
    display:'flex',
    width:'100%'
  },
  logo: {
    border:'solid 2px red',
    width:'10%',
    textAlign:'center',
    color:'white'
    
  },
  navBar:{
    border:'solid 2px green',
    width:'55%',
    display:'flex'
  },
  links:{
    border:'solid 2px yellow',
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
            <h3 className={style.logo}>Room</h3>
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