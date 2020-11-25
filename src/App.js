import React, {Component} from 'react'
import './App.css';
import { withStyles, Button} from '@material-ui/core'
import Navbar from './Components/Navbar'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import pic_one from './images/pic_one.jpg'
import pic_two from './images/pic_two.jpg'
import pic_three from './images/pic_three.jpg'

import bottom_pic_L from './images/bottom_pic_L.jpg'
import bottom_pic_R from './images/bottom_pic_R.jpg'






const styles = theme => ({
  rootBox:{
   [theme.breakpoints.down('xs')]:{
     overFlowX:'hidden'
   }
   
  },
  containerOne: {
  
    width:'100%',
    display:'flex',
    [theme.breakpoints.down('xs')]:{
     
      flexDirection: 'column'
    }
    

  },
  cOne_box_1:{
    
    width:'83%',
    height:'70vh',
    backgroundRepeat:'no-repeat',
    backgroundSize:'100%',
    backgroundPositionX:'50%',
    backgroundPositionY:'60%',
    boxSizing:'border-box',
    [theme.breakpoints.down('xs')]:{
     
      width:'100%',
      backgroundSize:'100%',
      backgroundPositionY:'0%',
      height:'40vh',
      boxSizing:'border-box'

    }
  },
  cOne_box_2:{
    width:'40%',
    padding:'3%',
    boxSizing:'border-box',
    [theme.breakpoints.down('xs')]:{
     
      width:'100%',
      boxSizing:'border-box'

    }

  },
  box_one:{
   
    width:'77.8%',
    margin:'0 auto',
    boxSizing:'border-box',
    [theme.breakpoints.down('xs')]:{
      
      width:'100%',
      textAlign:'center',
      boxSizing:'border-box'

    }
  },
  box_two:{
  
    boxSizing:'border-box',
    width:'77.8%',
    margin:'0 auto',
    [theme.breakpoints.down('xs')]:{
      
      width:'100%',
      textAlign:'center',
      padding:'1%',
      boxSizing:'border-box'

    }

  },
  box_two_btn_box:{
  
    boxSizing:'border-box',
    width:'77.8%',
    margin:'2% auto',
    [theme.breakpoints.down('xs')]:{
      
      width:'100%',
      textAlign:'center',
      padding:'1%',
      boxSizing:'border-box'

    }
    

  },
  pictureBtn:{
   
    boxSizing:'border-box',
    position:'absolute',
    top:'62%',
    left:'65.8%',
    padding:'1%',
    [theme.breakpoints.down('xs')]:{
      
      top:'23%',
      display:'flex',
      width:'40%',
      left:'60%'
    }
  },
  container_two:{
   
    display:'flex',
    [theme.breakpoints.down('xs')]:{
      
      flexDirection:'column',
      boxSizing:'border-box'

    }
  },
  cTwo_box_1:{
   
    width:'40%',
    height:'40vh',
    backgroundImage:'url('+ bottom_pic_L +')',
    backgroundRepeat:'no-repeat',
    backgroundSize:'100%',
    backgroundPositionX:'50%',
    backgroundPositionY:'60%',
    boxSizing:'border-box',
    [theme.breakpoints.down('xs')]:{
      
      flexDirection:'column',
      width:'100%',
      backgroundPositionY:'0%',
      height:'28vh',
      boxSizing:'border-box'

    }
  },

  cTwo_box_2:{
   
    width:'40%',
    [theme.breakpoints.down('xs')]:{
     
      width:'100%',
      boxSizing:'border-box'
    }
  },
  cTwo_box_2_Title: {
   
    textAlign:'center',
    boxSizing:'border-box',
    padding:'2%',
    margin:'0 auto',
    width:'93%',
    marginTop:'6%',
    [theme.breakpoints.down('xs')]:{
     
      width:'100%',
      boxSizing:'border-box'
    }


  },
  cTwo_box_2_Content:{
   
    textAlign:'center',
    boxSizing:'border-box',
    padding:'2%',
    margin:'0 auto',
    width:'93%',
    [theme.breakpoints.down('xs')]:{
     
      width:'100%',
      boxSizing:'border-box'
    }


  },

  cTwo_box_3:{
   
    width:'40%',
    backgroundImage:'url('+ bottom_pic_R +')',
    backgroundRepeat:'no-repeat',
    backgroundSize:'100%',
    backgroundPositionX:'50%',
    backgroundPositionY:'60%',
    boxSizing:'border-box',
    [theme.breakpoints.down('xs')]:{
      
      flexDirection:'column',
      width:'100%',
      backgroundPositionY:'0%',
      height:'28vh',
      boxSizing:'border-box'
    }

  },
  button:{
    background:'rgba(27, 20, 17, 0.8)',
    

  },
  icon:{
    color:'white',
    '&:hover':{
      color:'black'
    }
  },
  bottomNavContainer:{
    
    display:'flex',
    background:'black',
    boxSizing:'border-box',
    justifyContent:'space-between',
    [theme.breakpoints.down('xs')]:{
      
      boxSizing:'border-box',
      
    }
  },
  bcBox_one:{
    
    width:'10%',
    color:'white',
    textAlign:'center',
    boxSizing:'border-box',
    [theme.breakpoints.down('xs')]:{
      
      width:'30%',
      boxSizing:'border-box'
    }
  },
  bcBox_two:{
    
    width:'40%',
    color:'white',
    textAlign:'center',
    boxSizing:'border-box',
    [theme.breakpoints.down('xs')]:{
      
      textAlign:'center',
      boxSizing:'border-box'
    }
   
    
  },
  bcBox_three:{
    
    width:'20%',
    color:'white',
    textAlign:'center',
    boxSizing:'border-box',
    [theme.breakpoints.down('xs')]:{
      
      width:'30%',
      boxSizing:'border-box'
    }
  },  
  linkContainer:{
    width:'100%',
    display:'flex',
    justifyContent: 'space-between',
    marginTop:'2%',
    boxSizing:'border-box',
    [theme.breakpoints.down('xs')]:{
      borderLeft:'solid 1px white',
      borderRight:'solid 1px white',
      flexDirection:'column',
      textAlign:'center',
      margin:'0 auto',
      boxSizing:'border-box'
    }
  },
  links:{
    
    width:'50%',
    boxSizing:'border-box',
    [theme.breakpoints.down('xs')]:{
      flexDirection:'column',
      textAlign:'center',
      margin:'0 auto',
      boxSizing:'border-box'
    }


  },

  
});


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        index:0,
        imgList:[pic_one, pic_two, pic_three]

        
    }

    this.onClickForward = this.onClickForward.bind(this)
    this.onClickBack = this.onClickBack.bind(this)
}

onClickForward() {
  if (this.state.index + 1 === this.state.imgList.length){
      this.setState({
          index: 0
      })
  } else {
      this.setState({
          index: this.state.index + 1
      })
  }
}

onClickBack(){

  if (this.state.index - 1 === this.state.imgList.length){
      this.setState({
          index: this.state.imgList.length - 1
      })
  } else {
      this.setState({
          index: this.state.index - 1
      })
  }

}

render(){

  const {classes} = this.props
  return (
    <div className={classes.rootBox}>

      <div className={classes.containerOne}>

        <div className={classes.cOne_box_1} style={{backgroundImage:('url(' + this.state.imgList[this.state.index]  +')')}} >
        <Navbar />
         
        </div>

        <div className={classes.cOne_box_2}>

          <div className={classes.box_one}>
          <h1>Discover innovative ways to decorate</h1>
          </div>

          <div>
            <p className={classes.box_two}>
              We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make you property a reflection of you and what you love.

            </p>

            <div className={classes.box_two_btn_box}>
              <Button classes={{ width:'100%'}}>
                
               Shop Now

              </Button>
            </div>
          </div>

          <div className={classes.pictureBtn}>
            <Button className={classes.button} variant='outlined' onClick={this.onClickBack}> <ChevronLeftIcon className={classes.icon} /> </Button>
            <Button  className={classes.button} variant='outlined' onClick={this.onClickForward}>  <ChevronRightIcon className={classes.icon} /> </Button>
          </div>
          
        </div>

      </div>

      <div className={classes.container_two}>

        <div className={classes.cTwo_box_1}>

        </div>

        <div className={classes.cTwo_box_2}>
            <h3 className={classes.cTwo_box_2_Title}>About Our Furniture</h3>

            <p className={classes.cTwo_box_2_Content}>
              Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need from traditional to comtemporary styles or anything in between. Product specialists are available to help you create your dream space.
            </p>
        </div>

        <div className={classes.cTwo_box_3}>

        </div>
      </div>


      <div className={classes.bottomNavContainer}>

        <div className={classes.bcBox_one}>
          <p className={classes.bcBox_one_text}>
            JSFurnitures
          </p>

        </div>

        <div className={classes.bcBox_two}>
            <div className={classes.linkContainer}>
              <a className={classes.links}>Home</a>
              <a className={classes.links}>Shop</a>
              <a className={classes.links}>About</a>
              <a className={classes.links}>Contact</a>
            </div>
        </div>

        <div className={classes.bcBox_three}>
            <p className={classes.bcBox_three_text}>
              &copy; Designed by Dapthedev
            </p>
        </div>

      </div>


    </div>
  )

};
}


export default withStyles(styles, {withTheme: true})(App);
