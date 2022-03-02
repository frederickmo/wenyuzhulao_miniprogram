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
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/ping_pong_class.jpeg?sign=cc5986e0972dfd07013785eb16bbf2d0&t=1646034360",
              url: "/pages/activities/ping_pong_class/ping_pong_class",
              title: "乒乓世界",
              date: "2021.6.12（周六）",
              time: "9:30-11:00",
              totalVolume: 18,
              occupied: 16
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
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/harmonica_class.jpeg?sign=ea2360e683e405da55f4baa9e9d40ffc&t=1646034374",
              url: "/pages/activities/harmonica_class/harmonica_class",
              title: "口琴课堂",
              date: "2021.6.6（周日）",
              time: "13:30-15:00",
              totalVolume: 15,
              occupied: 12
            },
            {
              child_id: 2,
              name: 'zheng_class',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/zheng_class.jpeg?sign=4c3f3927be1b85bd694dcb2e81d63505&t=1646034388",
              url: "/pages/activities/zheng_class/zheng_class",
              title: "筝韵睦邻",
              date: "2021.6.19（周六）",
              time: "13:30-15:00",
              totalVolume: 16,
              occupied: 9
            }
          ]
      }
    ],
    curNav: 1,
    curIndex: 0,
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
