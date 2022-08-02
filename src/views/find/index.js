import React, { Component } from 'react'
import './index.css'
import { Button, List, Image, Ellipsis, Tabs, Avatar, Swiper, Input } from 'antd-mobile'
import { RedoOutline } from 'antd-mobile-icons'
import { homeFind, song, ball } from '../../api/api'

class Find extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            data: {},
            flag: false,
            value: ""
        }
    }
    
    homeList = () => {
        homeFind().then((res) => {
            if(res.code == 200){
                console.log(res.data.blocks[1])
               this.setState({
                    data: res.data,
                    flag: true
               })
            }
        })
    }
    songUrl = (id) => {
        song({id: id}).then((res) => {
            if(res.code == 200){
                console.log("播放的mp3=",res.data)
            }
            
        })
    }

    homeBall = () => {
        ball().then((res) => {
            if(res.code == 200){
                console.log("ball=",res.data)
            }
        })
    }

    gotoMore = (path) => {
        // this.prosp.history.push(path)
        console.log("跑我啦",path)
    }

    setValue = () => {
        setTimeout(() => {
            console.log("Hhh ")
        }, 3000);
    }

    componentDidMount(){
        this.homeList()
    }
    
    render(){
        const data = this.state.data
        
        return(
            <div className='find-wrap'>
                <header>
                    <Input
                        placeholder='请输入内容'
                        value={this.state.value}
                        onChange={val => {this.setValue(val)}}
                        className="search"
                    />
                </header>
                {
                    this.state.flag ? (<div>
                    {
                        <div>
                            {/* 推荐歌单 */}
                            <div className='find-wrap-list'>
                                <div className='find-wrap-title'>
                                    <span className='find-wrap-list-title'>
                                        {data.blocks[0].uiElement?.subTitle?.title}
                                    </span>
                                     <button className='find-wrap-list-more' onClick={this.gotoMore}>
                                         {data.blocks[0].uiElement?.button?.text}
                                     </button>
                                </div>
                                <List>
                                        <div className='find-wrap-list-box'>
                                            {
                                            data.blocks[0].creatives.map((n,index) => {
                                                return (
                                                    <List.Item className='find-wrap-item' key={index}>
                                                        <div className='mb-03'>
                                                            <Image className='find-wrap-item-img' src={n.uiElement?.image?.imageUrl} />
                                                        </div>
                                                        <Ellipsis direction='end' rows={2} content={n.uiElement?.mainTitle?.title} />
                                                    </List.Item>
                                                )
                                            })
                                            }
                                        </div>
                                </List>
                            </div>
                                
                            {/* 随机 */}
                            <div className='find-wrap-list'>
                                <div className='find-wrap-title'>
                                    <span className='find-wrap-list-title'>
                                        <RedoOutline onClick={this.homeList} />
                                        {data.blocks[1].uiElement?.subTitle?.title}
                                    </span>
                                     <button className='find-wrap-list-more' onClick={this.gotoMore}>
                                         {data.blocks[1].uiElement?.button?.text}
                                     </button>
                                </div>
                                <Swiper indicator={() => null} loop>
                                    {
                                        data.blocks[1].creatives.map((n,index) => (
                                            <Swiper.Item key={index}>
                                                <List>
                                                    {
                                                        n.resources.map((item,index) => (
                                                            <List.Item
                                                                prefix={<Avatar src={item.uiElement?.image.imageUrl} />}
                                                                description={item.uiElement?.subTitle?.title}
                                                                key={index}
                                                                className='border-b-eee'
                                                                onClick={() => this.songUrl(item.resourceId)}
                                                            >
                                                                {item.uiElement?.mainTitle.title}--{item.resourceExtInfo?.artists[0]?.name}
                                                            </List.Item>
                                                        ))
                                                    }  
                                                </List>
                                            </Swiper.Item>
                                        ))
                                    }
                                </Swiper>
                            </div>

                            {/* 排行榜 */}
                            <div className='find-wrap-list'>
                                <div className='find-wrap-title'>
                                    <span className='find-wrap-list-title'>
                                        {data.blocks[2].uiElement?.subTitle?.title}
                                    </span>
                                     <button className='find-wrap-list-more' onClick={this.gotoMore}>
                                         {data.blocks[2].uiElement?.button?.text}
                                     </button>
                                </div>
                                <Swiper className='ranking-box' indicator={() => null} loop>
                                    {
                                        data.blocks[2].creatives.map((n,index) => (
                                            <Swiper.Item key={index}>
                                                <List>
                                                    <div className='m-1'>
                                                        <span className='find-wrap-list-title'>{n.uiElement?.mainTitle.title} &gt; </span>
                                                        <span className='color-767676 f-right f-1'>{n.uiElement?.mainTitle.titleDesc}</span>
                                                    </div>
                                                    {
                                                        n.resources.map((item,index) => (
                                                            <List.Item
                                                                prefix={<Avatar src={item.uiElement?.image.imageUrl} />}
                                                                key={index}
                                                                className='border-b-eee'
                                                            >
                                                                <div className='ranking-list-item-info f-left'>
                                                                    <div className='ellipsis'>
                                                                        {index}、{item.uiElement?.mainTitle.title}
                                                                        <span className='f-08 color-767676'>--{item.resourceExtInfo?.artists[0]?.name}</span>
                                                                    </div>
                                                                    <div className='color-767676 f-1'>{item.uiElement?.description}</div>
                                                                </div>
                                                                <div className='color-C20C0C f-right'>{item.uiElement?.labelText.text}</div>
                                                                
                                                            </List.Item>
                                                        ))
                                                    }  
                                                </List>
                                            </Swiper.Item>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </div>
                    }
                    </div>):(<div>暂无数据</div>)
                }
            </div>
        )
    }
}

export default Find;