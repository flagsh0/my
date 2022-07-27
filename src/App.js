// import logo from './asset/logo.svg';
import './App.css';
import React from 'react';
// import {HashRouter as Router,Route,NavLink,Redirect,Switch} from 'react-router-dom'
import { NavLink,Route } from 'react-router-dom'
import Home from './views/home'
import About from './views/about'
import Detail from './views/detail'
// const home = React.lazy(() => import(/* webpackPrefetch: true */ './views/home'));
// const about = React.lazy(() => import(/* webpackPrefetch: true */ './views/about'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="nav">
          <NavLink className="nav-itam" to="/home">Home</NavLink> |
          <NavLink className="nav-itam" to="/about"> About</NavLink> |
          <NavLink className="nav-itam" to="/detail/11"> detail1</NavLink> |
          <NavLink className="nav-itam" to="/detail/22"> detail2</NavLink>
        </div>
        <div>
          <h1>显示路由</h1>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/detail/:id" component={Detail}/>
        </div>
      </header>
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
