// index.js
// 获取应用实例
Page({
  data: {
    userInfo: {},
  },

  onLoad: function () {
    this.setData({
      userInfo: getApp().globalData.user
    })
    console.log('Index页面获取的userInfo：',this.data.userInfo)
  },

  onChange: function (event) {
    console.log(event)
    this.setData({ active: event.detail });
    console.log("current active: " + this.data.active)
    // wx.switchTab({
    //   url: this.data.list[event.detail].url
    // });
  },

  onShow: function () {
    this.setData({
      userInfo: getApp().globalData.userInfo
    })
  }
})
