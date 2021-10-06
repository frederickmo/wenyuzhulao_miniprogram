// index.js
// 获取应用实例
Page({
  data: {
    userInfo: {}
  },

  onLoad: function () {
    this.setData({
      userInfo: getApp().globalData.userInfo
    })
    console.log('Index页面获取的userInfo：',this.data.userInfo)
  }
})
