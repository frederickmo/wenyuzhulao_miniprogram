//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'env1-6g7sav9181c12f16',
        traceUser: true
      })
    }

    this.globalData = {
      loggedIn: false,
      userInfo: {}, //通过用户登录得到的user信息
      user: {} //服务器返回的（已经注册过的）user信息
    }
  }
})
