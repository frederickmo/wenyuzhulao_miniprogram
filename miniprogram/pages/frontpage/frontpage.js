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
    user: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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

    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
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
  },

  onGetUserInfo : function (e) {
    if (!getApp().globalData.loggedIn && e.detail.userInfo) {
      this.setData({
        userInfo: e.detail.userInfo,
        nickName: e.detail.userInfo.nickName,
        avatarUrl: e.detail.userInfo.avatarUrl
      })
      console.log('获取用户信息如下：')
      console.log(e.detail.userInfo)
      getApp().globalData.userInfo = e.detail.userInfo
      this.onGetOpenid()
    }
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
          getApp().globalData.user = res.result.data.user
          getApp().globalData.loggedIn = true
          wx.redirectTo({
            url: '../index/index'
          })
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

})