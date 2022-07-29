import React, { FC } from 'react'
import { NavBar, TabBar } from 'antd-mobile'
import {
  Route,
  Switch,
  useHistory,
  useLocation,
  MemoryRouter as Router,
} from 'react-router-dom'
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons'

import Home from './views/home'
import Find from './views/find'
import Detail from './views/detail'
import My from './views/my'
import './App.css';

const Bottom: FC = () => {
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location

  const setRouteActive = (value: string) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/home',
      title: '首页',
      icon: <AppOutline />,
    },
    {
      key: '/find',
      title: '我的发现',
      icon: <UnorderedListOutline />,
    },
    {
      key: '/detail/111',
      title: '我的消息',
      icon: <MessageOutline />,
    },
    {
      key: '/my',
      title: '个人中心',
      icon: <UserOutline />,
    },
  ]

  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

class Layout extends React.Component{
    render(){
        return (
            <Router initialEntries={['/home']}>
                <div className='app'>
                <div className='top'>
                    <NavBar>我是标题</NavBar>
                </div>
                <div className='body'>
                    <Switch>
                    <Route exact path='/home'>
                        <Home />
                    </Route>
                    <Route exact path='/find'>
                        <Find />
                    </Route>
                    <Route exact path='/detail/111'>
                        <Detail />
                    </Route>
                    <Route exact path='/my'>
                        <My />
                    </Route>
                    </Switch>
                </div>
                <div className='bottom'>
                    <Bottom />
                </div>
                </div>
            </Router>
        )
    }  
}

export default Layout;
