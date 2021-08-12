Page({

  /**
   * 页面的初始数据
   */
  data: {
    showUploadTip: false,
    haveGetOpenId: false,
    envId: '',
    openId: ''
  },

  onLoad(options) {
    this.setData({
      envId: options.envId
    })
  },

  getOpenId() {
    wx.showLoading({
      title: '',
    })
   wx.cloud.callFunction({
      name: 'quickstartFunctions',
      config: {
        env: this.data.envId
      },
      data: {
        type: 'getOpenId'
      }
    }).then((resp) => {
      this.setData({
        haveGetOpenId: true,
        openId: resp.result.openid
      });
      console.log("调用getOpenId云函数的返回resp：", resp);
      console.log("resp中的result格式：", resp.result);
     wx.hideLoading()
   }).catch((e) => {
      this.setData({
        showUploadTip: true
      })
     wx.hideLoading()
    })
  },

  clearOpenId() {
    this.setData({
      haveGetOpenId: false,
      openId: ''
    })
  }

})
