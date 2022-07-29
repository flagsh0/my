import React, { Component } from 'react'
import './index.css'
// import { Button } from 'antd-mobile'

const name = "我是个人中心"

class My extends React.Component{
    
    render(){
        return(
            <div>
                <div>
                    你好,{name}
                </div>
            </div>

        )
    }
}

export default My;