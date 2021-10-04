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
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/symphony_performance.png?sign=758ec9dbbcb445751bc3ac0c9e100282&t=1633357435",
              url: "/pages/activities/symphony_performance/symphony_performance"
            },
            {
              child_id: 2,
              name: 'shanghai_opera',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/shanghai_opera.png?sign=a8e0cec9b5f4cdbaa1819398e1ec7901&t=1633357447",
              url: "/pages/activities/shanghai_opera/shanghai_opera"
            },
            {
              child_id: 3,
              name: 'red_song',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/red_song.png?sign=c81d731ba016822ecafc2d9262bff46f&t=1633357457",
              url: "/pages/activities/red_song/red_song"
            },
            {
              child_id: 4,
              name: 'art_festival',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/art_festival.png?sign=a408f63472c07631249583b518f6ad29&t=1633357467",
              url: "/pages/activities/art_festival/art_festival"
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
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/taichi.png?sign=11876e290453cbb8e1fc04d6732046de&t=1633357480",
              url: "/pages/activities/taichi/taichi"
            },
            {
              child_id: 2,
              name: 'mulanquan',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/mulanquan.png?sign=9c63bf9fb89d30d16d137d681b6d776b&t=1633357495",
              url: "/pages/activities/mulanquan/mulanquan"
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
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/zongzi.png?sign=b71eb6d8b7ee6bed37165b591da9f0d8&t=1633357507",
              url: "/pages/activities/zongzi/zongzi"
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
            image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/smart_phone_guide.png?sign=9d4ca926ee3c80cfec9c4968ac5ce46d&t=1633357517",
            url: "/pages/activities/smart_phone_guide/smart_phone_guide"
          },
          {
            child_id: 2,
            name: 'reading',
            image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/reading.png?sign=6940799cb5bce08dbe7e6182007ea2e0&t=1633357526",
            url: "/pages/activities/reading/reading"
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
            image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/chess.png?sign=05142e363786876fcf181b2db204d6bf&t=1633357537",
            url: "/pages/activities/chess/chess"
          },
          {
            child_id: 2,
            name: 'chess_competition',
            image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/chess_competition.png?sign=5b545c447c8acffbc969f676edfb0f43&t=1633357548",
            url: "/pages/activities/chess_competition/chess_competition"
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
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/social_dance.png?sign=889a126b1bf62f2b0da49ab35e3f5627&t=1633357560",
              url: "/pages/activities/social_dance/social_dance"
            },
            {
              child_id: 2,
              name: 'folk_dance',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/folk_dance.png?sign=6e7ebcfe6582229e028fa45c6a9493f3&t=1633357571",
              url: "/pages/activities/folk_dance/folk_dance"
            },
            {
              child_id: 3,
              name: 'dancing_class',
              image: "https://656e-env1-6g7sav9181c12f16-1306850152.tcb.qcloud.la/applet_resources/%E6%B4%BB%E5%8A%A8%E7%AE%80%E4%BB%8B%E5%9B%BE/dancing_class.png?sign=f3bcca81b1b3cf326b3ee18e329ffd39&t=1633357582",
              url: "/pages/activities/dancing_class/dancing_class"
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
  }
})
