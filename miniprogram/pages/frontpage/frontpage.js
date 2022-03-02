//const { userInfo } = require("os")

// pages/frontpage/frontpage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    nickName: '',
    avatarUrl: '',
    loggedIn: false,
    canIGetUserProfile: false,
    hasUserInfo: false,
    user: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("现在有用户信息吗", this.data.hasUserInfo)
    if (!wx.cloud) {
      wx.showModal({
        title: '初始化失败',
        content: '请使用 2.2.3 以上的基础库以使用云能力！',
        showCancel: false,
        success(res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
          else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return
    }

    if (wx.getUserProfile) {
      this.setData({
        canIGetUserProfile: true
      })
    }

    wx.getSetting({
      success: res => {
        if (this.data.hasUserInfo) {
          console.log("已经授权")
          //已经授权，可以调用getUserProfile获取用户信息，不会弹窗
          wx.getUserProfile({
            success: res => {
              this.setData({
                avatarUrl: res.userInfo.avatarUrl,
                nickName: res.userInfo.nickName,
                userInfo: res.userInfo
              })
              getApp().globalData.userInfo = res.userInfo
              this.onGetOpenid()
            }
          })
        }
      }
    })
    console.log("onLaunch时候的userInfo:")
    console.log(this.data.userInfo)
  },

  onGetUserInfo : function (e) {
    var that = this
    console.log("hasUserInfo:"+this.data.hasUserInfo)
    //如果用户未登录
    if (!getApp().globalData.loggedIn) {
      wx.getUserProfile({
        desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
        success: (res) => {
          this.setData({
            userInfo: res.userInfo,
            nickName: res.userInfo.nickName,
            avatarUrl: res.userInfo.avatarUrl,
            hasUserInfo: true
          })
          getApp().globalData.userInfo = this.data.userInfo
          this.onGetOpenid()
        },
        fail: (err) => {
          wx.showModal({
            title: "登录失败",
            content: err.errMsg,
            showCancel: false
          })
        }
      })
    }
    // 取消跳转
    // else {
    //   wx.redirectTo({
    //     url: '../index/index',
    //   })
    // }
  },

  onGetOpenid: function () {
    var that = this;
    wx.cloud.callFunction({
      name: 'signIn',
      data: {
        avatarUrl: that.data.avatarUrl,
        gender: that.data.userInfo.gender,
        nickName: that.data.nickName
      },
      success: (res) => {
        console.log(res)
        if (res.result.errCode == 0) {
          console.log('服务器返回请求成功！')
          that.data.user = res.result.data.user
          that.data.hasUserInfo = true
          getApp().globalData.user = res.result.data.user
          getApp().globalData.loggedIn = true
          console.log("onGetOpenid中给全局变量赋值后：")
          console.log(getApp().globalData.user)
          // 取消跳转
          // wx.redirectTo({
          //   url: '../index/index'
          // })
        } else {
          console.log('服务器返回请求失败，出现某种问题！')
          wx.showModal({
            title: '登录失败',
            content: res.result.errMsg,
            confirmText: '我知道了',
            showCancel: false,
            success(res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
              else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
            }
      },
      fail: (err) => {
        console.error('[云函数][signIn]调用失败', err)
        wx.showModal({
          title: '连接服务器出错',
          content: '请检查云函数是否正确部署',
          showCancel: false,
          success(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
            else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
        },
    })
  },

  onRedirectToIndex: function () {
    if (getApp().globalData.loggedIn) {
      wx.redirectTo({
        url: '../index/index',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
    console.log("用户敲击了" + this.data.active)
  },

})