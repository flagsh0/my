import './index.css'
import React, { Component } from 'react'
// import { mock } from 'mockjs';
import Mock from 'mockjs';

const data = Mock.mock('../../../mock/tree.json')

class About extends React.Component{
    render(){
        return (
            <div>你好,{data}</div>
        )
    }
}

export default About;