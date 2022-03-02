// pages/activity_page/activity_page.js
Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "演出",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: 'symphony_performance',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/symphony_performance.png?sign=0930b0ade0842213c20096ca13bb7832&t=1646033273",
              url: "/pages/activities/symphony_performance/symphony_performance",
              title: "交响乐队演出",
              date: "2022.3.20（周日）",
              time: "13:30-15:00",
              totalVolume: 44,
              occupied: 32
            },
            {
              child_id: 2,
              name: 'shanghai_opera',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/shanghai_opera.png?sign=06623fae3c654eb09d12e36eb0d92de6&t=1646033294",
              title: "老年沪剧班",
              date: "2021.6.23（周三）",
              time: "13:30-15:00",
              totalVolume: 40,
              occupied: 24
            },
            {
              child_id: 3,
              name: 'red_song',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/red_song.png?sign=542e49ff8ff9cb0253213f20eb33c2c9&t=1646033318",
              url: "/pages/activities/red_song/red_song",
              title: "唱红歌，颂党恩",
              date: "2021.6.25（周五）",
              time: "9:30-11:00",
              totalVolume: 50,
              occupied: 36
            },
            {
              child_id: 4,
              name: 'art_festival',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/art_festival.png?sign=b7663cda4d7ea0cebbe0e82611f4b30b&t=1646034164",
              url: "/pages/activities/art_festival/art_festival",
              title: "文艺汇演",
              date: "2021.6.26（周六）",
              time: "13:30-15:00",
              totalVolume: 42,
              occupied: 31
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "健身",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: 'taichi',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/taichi.png?sign=11100749356f207f224354add8823b41&t=1646034190",
              url: "/pages/activities/taichi/taichi",
              title: "太极拳教学",
              date: "2021.6.20（周日）",
              time: "9:30-11:00",
              totalVolume: 48,
              occupied: 41
            },
            {
              child_id: 2,
              name: 'mulanquan',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/mulanquan.png?sign=28176174f020fe2ba7a15cd26a7c5b8b&t=1646034205",
              url: "/pages/activities/mulanquan/mulanquan",
              title: "木兰拳兴趣班",
              date: "2021.6.27（周日)",
              time: "9:30-11:00",
              totalVolume: 36,
              occupied: 22
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "烹饪",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: 'zongzi',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/zongzi.jpeg?sign=27e5fec323ed554256fe2af4d5a07228&t=1646034228",
              url: "/pages/activities/zongzi/zongzi",
              title: "端午活动——包粽子",
              date: "2021.6.12（周六）",
              time: "13:30-15:00",
              totalVolume: 50,
              occupied: 43
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "讲座",
        ishaveChild: true,
        children: 
        [
          {
            child_id: 1,
            name: 'smart_phone_guide',
            image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/smart_phone_guide.png?sign=50ab2c6d2f72e12a210e2916b7bab492&t=1646034241",
            url: "/pages/activities/smart_phone_guide/smart_phone_guide",
            title: "手机乾坤——智能手机教学课堂",
            newline: true,
            date: "2021.6.22（周二）",
            time: "9:30-11:00",
            totalVolume: 50,
            occupied: 41
          },
          {
            child_id: 2,
            name: 'reading',
            image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/reading.png?sign=08870472ba5ff16537271f126213cfba&t=1646034257",
            url: "/pages/activities/reading/reading",
            title: "品味书香",
            date: "2021.6.26（周六）",
            time: "9:30-11:00",
            totalVolume: 50,
            occupied: 29
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: "棋牌",
        ishaveChild: true,
        children: 
        [
          {
            child_id: 1,
            name: 'chess',
            image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/chess.png?sign=7c1e9ad78ee9a6482e954d59ec9d88bd&t=1646034272",
            url: "/pages/activities/chess/chess",
            title: "社区象棋班",
            date: "2021.6.27（周日）",
            time: "13:30-15:00",
            totalVolume: 48,
            occupied: 37
          },
          {
            child_id: 2,
            name: 'chess_competition',
            image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/chess_competition.png?sign=ba0e48b9afa4ab88bce392dc5a309958&t=1646034282",
            url: "/pages/activities/chess_competition/chess_competition",
            title: "象棋对弈",
            date: "2021.6.28（周一）",
            time: "13:30-15:00",
            totalVolume: 40,
            occupied: 26
          }
        ]
      },
      {
        cate_id: 6,
        cate_name: "艺术",
        ishaveChild: true,
        children: 
          [
            {
              child_id: 1,
              name: 'social_dance',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/social_dance.png?sign=59a99281cc57724aa59dc46307a6c849&t=1646034297",
              url: "/pages/activities/social_dance/social_dance",
              title: "社区交谊舞班",
              date: "2021.6.21（周一）",
              time: "13:30-15:00",
              totalVolume: 48,
              occupied: 27
            },
            {
              child_id: 2,
              name: 'folk_dance',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E5%86%85%E5%AE%B9/folk_dance.png?sign=8b806045cc0a6c17594a6beefab130b7&t=1646034308",
              url: "/pages/activities/folk_dance/folk_dance",
              title: "民族舞课堂",
              date: "2021.6.30（周三）",
              time: "9:30-11:00",
              totalVolume: 48,
              occupied: 27
            },
            {
              child_id: 3,
              name: 'dancing_class',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/dancing_class.jpeg?sign=975cb009f45abef77cff2ddff8a455b1&t=1646034324",
              url: "/pages/activities/dancing_class/dancing_class",
              title: "浅浅爱舞蹈班",
              date: "2021.6.19（周六）",
              time: "9:30-11:00",
              totalVolume: 44,
              occupied: 32
            }
          ]
      }
    ],
    curNav: 1,
    curIndex: 0
  },

  //事件处理函数  
  switchRightTab: function (e) {
    console.log(e)
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
