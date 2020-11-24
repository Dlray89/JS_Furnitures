import React, {useState} from 'react'
import './App.css';
import { makeStyles, Button} from '@material-ui/core'
import Navbar from './Components/Navbar'
import Pic_one from './images/pic_one.jpg'

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

import Pic from './Containers/picture_data'





const useStyles = makeStyles((theme) => ({
  rootBox:{
    border:'solid 2px red',
   
  },
  containerOne: {
    border:'solid 2px blue',
    width:'100%',
    display:'flex'
    

  },
  cOne_box_1:{
    border: 'solid 2px green',
   
    width:'70%',
    height:'70vh',
    backgroundRepeat:'no-repeat',
    backgroundSize:'100%',
    backgroundPositionX:'50%',
    backgroundPositionY:'60%',
    boxSizing:'border-box'
  },
  cOne_box_2:{
    border: 'solid 2px red',
    width:'40%',
    padding:'3%',
    boxSizing:'border-box'

  },
  box_one:{
    border:'solid 2px red',
    width:'77.8%',
    margin:'0 auto',
    boxSizing:'border-box'
  },
  box_two:{
    border:'solid 2px blue',
    boxSizing:'border-box',
    width:'77.8%',
    margin:'0 auto'

  },
  box_two_btn_box:{
    border:'solid 2px blue',
    boxSizing:'border-box',
    width:'77.8%',
    margin:'2% auto'

  },
  pictureBtn:{
    border:'solid 2px yellow',
    boxSizing:'border-box',
    position:'absolute',
    top:'62%',
    left:'63.2%',
    padding:'1%'
  }
  
}))


function App(props) {


  const style1 = useStyles()
  return (
    <div className={style1.rootBox}>

      <div className={style1.containerOne}>

        <div className={style1.cOne_box_1} style={{ backgroundImage:'url('+ props.pics +')',}}  >
        <Navbar />
        </div>

        <div className={style1.cOne_box_2}>

          <div className={style1.box_one}>
          <h1>Discover innovative ways to decorate</h1>
          </div>

          <div>
            <p className={style1.box_two}>
              We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make you property a reflection of you and what you love.

            </p>

            <div className={style1.box_two_btn_box}>
              <Button style1={{border:'solid 2px red', width:'100%'}}>
                
               Shop Now

              </Button>
            </div>
          </div>

          <div className={style1.pictureBtn}>
            <Button variant='outlined' onClick={props.back}> <ChevronLeftIcon /> </Button>
            <Button variant='outlined' onClick={props.forward}>  <ChevronRightIcon /> </Button>
          </div>
          
        </div>

      </div>
      <Pic />
    </div>
  );
}

export default App;
