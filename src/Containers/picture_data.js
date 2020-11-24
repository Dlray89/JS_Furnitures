import React, {Component} from 'react'
import pic_one from '../images/pic_one.jpg'
import pic_two from '../images/desktop-image-hero-2.jpg'
import pic_three from '../images/desktop-image-hero-3.jpg'
class Picture_Logic extends Component {
    constructor(){
        super()
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
        return(
            <div>
                <img width={100} src={this.state.imgList[this.state.index]}  /> <br />
                <button onClick={this.onClickForward}>forward</button>
                <button onClick={this.onClickBack}>back</button>
            </div>
        )
    }
}

export default Picture_Logic
