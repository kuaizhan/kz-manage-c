import React, { Component } from 'react'
import Taro from '@tarojs/taro';
import { View, WebView } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { 
    if (process.env.TARO_ENV === "swan") {
      Taro.setPageInfo({
        title: '快站-专业移动建站平台',
        description: '搜狐快站是一款可视化建站工具，包括拖拽生成页面，强大的内容管理，丰富美观的模板，适配所有移动设备，一键生成App等功能。我们还提供公众号管理、小程序制作等功能，满足电商、餐饮、娱乐、旅游、教育等多个行业的应用场景，是企业营销必备的强大工具类产品。',
        keywords: '搜狐快站,建站,移动建站,可视化建站,公众号助手,群发助手,粉丝裂变,小程序,电商小程序,微信营销,h5,投票,畅言,评论',
        success: () => {console.log('setPageInfo success')},
      })
    }
  }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <WebView src='https://www.kuaizhan.com' />
      </View>
    )
  }
}
