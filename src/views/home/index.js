import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

const name = "我是首页"

class Home extends React.Component{
    getList = () => {
        axios.get("/api/homepage/block/page").then((res) => {
            console.log(res)
        })
    }
    getDate = () => {
        axios.get("http://localhost:3001/mock/usermsg").then((res) => {
            console.log(res)
        })
    }
        

    render(){
        return(
            <div>
                <div>
                    你好,{name}
                </div>
                <button onClick={this.getList}>
                    点我获取list | 
                </button>
                <button onClick={this.getDate}>
                    点我获取list2
                </button>
                
            </div>

        )
    }
}

export default Home;