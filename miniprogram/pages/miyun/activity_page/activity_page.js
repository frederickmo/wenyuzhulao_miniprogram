// pages/activity_page/activity_page.js
Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "演出",
        ishaveChild: false,
        children:
          []
      },
      {
        cate_id: 2,
        cate_name: "健身",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: 'ping_pong_class',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/ping_pong_class.png?sign=1edd83c71f624ceef04f9587dd473016&t=1633357381",
              url: "/pages/activities/ping_pong_class/ping_pong_class"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "烹饪",
        ishaveChild: false,
        children:
          []
      },
      {
        cate_id: 4,
        cate_name: "讲座",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 5,
        cate_name: "棋牌",
        ishaveChild: false,
        children: []
      },
      {
        cate_id: 6,
        cate_name: "艺术",
        ishaveChild: true,
        children: 
          [
            {
              child_id: 1,
              name: 'harmonica_class',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/harmonica_class.png?sign=1480a2e26d1d853cba4b16d16ef7bde8&t=1633357403",
              url: "/pages/activities/harmonica_class/harmonica_class"
            },
            {
              child_id: 2,
              name: 'zheng_class',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/zheng_class.png?sign=75db72ff6ca760013b74af1250571a94&t=1633357414",
              url: "/pages/activities/zheng_class/zheng_class"
            }
          ]
      }
    ],
    curNav: 1,
    curIndex: 0,
    curItemStyle: ['','','','','','']
  },

  //事件处理函数  
  switchRightTab: function (e) {
    console.log(e.target.dataset)
    // 获取item项的id，和数组的下标值  
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    // 把点击到的某一项，设为当前index  
    this.setData({
      curNav: id,
      curIndex: index
    })
  },

  onLoad: function(e) {
    console.log(e.curIndex)
    this.setData({
      curNav: parseInt(e.curIndex) + 1,
      curIndex: e.curIndex
    })
    // console.log("curNav = "+this.data.curNav)
    // console.log("curIndex = "+this.data.curIndex)
  }
})
