import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
import { Button } from 'antd-mobile'
import { homeFind } from '../../api/api'

const name = "我是发现页面"

class Find extends React.Component{
    getList = () => {
        axios.get("/api/homepage/block/page").then((res) => {
            console.log(res)
        })
    }
    homeFind = () => {
        homeFind().then((res) => {
            console.log("hhhh,,",res)
        })
    }
        

    render(){
        return(
            <div>
                <div>
                    你好,{name}
                </div>
                <Button onClick={this.homeFind} color='primary' fill='solid'>
                    点我获取list  
                </Button>
                
            </div>

        )
    }
}

export default Find;