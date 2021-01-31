import React, { useState,Component } from "react";
import { cloneDeep, filter } from "lodash";
import LandingPage from '../Components/UI/LandingPage'


import one from "../../asset/images/pic_one.jpg";
import two from "../../asset/images/pic_two.jpg";
import three from "../../asset/images/pic_three.jpg";

class Header_Data extends Component {
    constructor(props){
        super(props)
        this.state = {
            index: 0,
            imgList: [one, two, three]
        }

        this.onClickForward = this.onClickForward.bind(this)
        this.onClickBack = this.onClickBack.bind(this)
    }

    onClickForward()  {
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

    onClickForward()  {
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
        return(
            <div>
                <LandingPage next={this.onClickForward()} back={this.onClickBack} index={this.state.index} img={this.state.imgList} />
            </div>
        )
    }
}

export default Header_Data
