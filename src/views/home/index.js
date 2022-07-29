import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
// import '../../mock/api'
import { Button } from 'antd-mobile'
import { homeFind } from '../../api/api'

const name = "我是首页"

class Home extends React.Component{
    getList = () => {
        axios.get("/api/homepage/block/page").then((res) => {
            console.log(res)
        })
    }
    // getDate = () => {
    //     axios.get("http://localhost:3001/mock/usermsg").then((res) => {
    //         console.log(res)
    //     })
    // }

    componentDidMount(){
        homeFind().then((res) => {
            console.log("hhhh,,",res)
        })
    }
        

    render(){
        return(
            <div>
                <div>
                    你好,{name},该页面还在建设中。。。
                </div>
                
            </div>

        )
    }
}

export default Home;