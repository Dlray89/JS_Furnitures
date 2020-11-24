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

import { pictures } from './Containers/pictures'





const styles = theme => ({
  rootBox:{
   
   
  },
  containerOne: {
  
    width:'100%',
    display:'flex'
    

  },
  cOne_box_1:{
    border: 'solid 2px green',
    width:'83%',
    height:'70vh',
    backgroundRepeat:'no-repeat',
    backgroundSize:'100%',
    backgroundPositionX:'50%',
    backgroundPositionY:'60%',
    boxSizing:'border-box'
  },
  cOne_box_2:{
    width:'40%',
    padding:'3%',
    boxSizing:'border-box'

  },
  box_one:{
   
    width:'77.8%',
    margin:'0 auto',
    boxSizing:'border-box'
  },
  box_two:{
  
    boxSizing:'border-box',
    width:'77.8%',
    margin:'0 auto'

  },
  box_two_btn_box:{
  
    boxSizing:'border-box',
    width:'77.8%',
    margin:'2% auto'

  },
  pictureBtn:{
   
    boxSizing:'border-box',
    position:'absolute',
    top:'62%',
    left:'65.8%',
    padding:'1%'
  },
  container_two:{
   
    display:'flex'
  },
  cTwo_box_1:{
   
    width:'40%',
    height:'40vh',
    backgroundImage:'url('+ bottom_pic_L +')',
    backgroundRepeat:'no-repeat',
    backgroundSize:'100%',
    backgroundPositionX:'50%',
    backgroundPositionY:'60%',
    boxSizing:'border-box'
  },

  cTwo_box_2:{
   
    width:'40%'
  },
  cTwo_box_2_Title: {
   
    textAlign:'center',
    boxSizing:'border-box',
    padding:'2%',
    margin:'0 auto',
    width:'93%',
    marginTop:'6%'


  },
  cTwo_box_2_Content:{
   
    textAlign:'center',
    boxSizing:'border-box',
    padding:'2%',
    margin:'0 auto',
    width:'93%'


  },

  cTwo_box_3:{
   
    width:'40%',
    backgroundImage:'url('+ bottom_pic_R +')',
    backgroundRepeat:'no-repeat',
    backgroundSize:'100%',
    backgroundPositionX:'50%',
    backgroundPositionY:'60%',
    boxSizing:'border-box'
  }
  
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
            <Button variant='outlined' onClick={this.onClickBack}> <ChevronLeftIcon /> </Button>
            <Button variant='outlined' onClick={this.onClickForward}>  <ChevronRightIcon /> </Button>
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


    </div>
  )

};
}


export default withStyles(styles, {withTheme: true})(App);
