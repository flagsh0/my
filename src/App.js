// import logo from './asset/logo.svg';
import './App.css';
import React from 'react';
// import {HashRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom'
import { Route,NavLink } from 'react-router-dom'
import Layout from './views/layout/index.tsx';

function App() {
  return (
    <div className="App">
      {/* <Routes></Routes> */}
      <NavLink to="./layout">发现</NavLink>
      
      <Route path="/layout" component={Layout}></Route>
    </div>
  );
}

// class App extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {date: new Date()}
//   }

//   componentDidMount(){ //生命周期方法--组件已经被渲染到 DOM 中后运行
//     this.timrId = setInterval(() => { //每过1秒就调用一次该函数更新时间
//       this.tick()
//     },1000)
//   }
//   componentWillUnmount(){//生命周期方法--清除定时器时调用
//     clearInterval(this.timrId)
//   }

//   tick(){
//     this.setState({ //更改state的数据，才会重新渲染组件，不能再render中使用
//       date: new Date()
//     })
//   }

//   render(h) {  //数据更改就会调用，因此不能在此使用setState修改数据
//     return (
//       <div className="app">
//         <h1>我是标题</h1>
//         <div>现在时间是： {this.state.date.toLocaleTimeString()}  </div>
//       </div>
//     )
//   }
// }

export default App;
