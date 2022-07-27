import './index.css'
import React, { Component } from 'react'

const name = "我是详情页"

class Detail extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sum : 0,
            flag: true,
            // match: this.props
        }
    }

    addSum = () =>{
        this.setState({
            sum: this.state.sum+1
        })
        // console.log("点我=",this.state.match.match.params.id)
    }
    reduceSum = () =>{
        console.log("点我===",this.props)
        if(this.props.match.params.id == "11"){
            this.setState({
                sum: this.state.sum-1
            })
        }
    }
    show = () => {
        this.setState({
            flag: !this.state.flag
        })
        console.log("点我111=",this.state.flag)
    }

    render(h){
        return (
            <div>
                你好,{name}
                <div>{this.state.sum}</div>

                {
                    this.state.flag ? (<div>我是TRUE</div>):(<div>我是false</div>)
                }
                
                <div>
                    <button className='btn' onClick={this.addSum}> +1 </button>
                    <button className='btn' onClick={this.reduceSum}> -1 </button>
                    <button className='btn' onClick={this.show}>显示</button>
                </div>
                <div>
                    {/* {this.props} */}
                    {
                        this.state.flag && <div>当我是TRUE的时候，就显示我，否则隐藏</div>
                    }
                </div>
            </div>
        )
    }
}

export default Detail;