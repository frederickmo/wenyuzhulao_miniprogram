// pages/entertainment_map/entertainment_map.js
Page({
  data: {
    cateItems: [
      {
        cate_id: 1,
        cate_name: "戏剧观影",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: 'miyun',
              image: "https://636c-cloud1-6gti323d7294495c-1306017304.tcb.qcloud.la/map/entertainment_map/miyun_map.png?sign=0dbed448dd69220540981ce6237a3831&t=1624036250"
            },
            {
              child_id: 2,
              name: 'quyang',
              image: "https://636c-cloud1-6gti323d7294495c-1306017304.tcb.qcloud.la/map/entertainment_map/quyang_map.png?sign=2a6aceff01b9990fe09e7c6e248a4765&t=1624036334"
            }
          ]
      },
      {
        cate_id: 2,
        cate_name: "学习展览",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: 'miyun',
              image: "https://636c-cloud1-6gti323d7294495c-1306017304.tcb.qcloud.la/map/entertainment_map/miyun_map.png?sign=0dbed448dd69220540981ce6237a3831&t=1624036250"
            },
            {
              child_id: 2,
              name: 'quyang',
              image: "https://636c-cloud1-6gti323d7294495c-1306017304.tcb.qcloud.la/map/entertainment_map/quyang_map.png?sign=2a6aceff01b9990fe09e7c6e248a4765&t=1624036334"
            }
          ]
      },
      {
        cate_id: 3,
        cate_name: "休闲互动",
        ishaveChild: true,
        children:
          [
            {
              child_id: 1,
              name: 'miyun',
              image: "https://636c-cloud1-6gti323d7294495c-1306017304.tcb.qcloud.la/map/entertainment_map/miyun_map.png?sign=0dbed448dd69220540981ce6237a3831&t=1624036250"
            },
            {
              child_id: 2,
              name: 'quyang',
              image: "https://636c-cloud1-6gti323d7294495c-1306017304.tcb.qcloud.la/map/entertainment_map/quyang_map.png?sign=2a6aceff01b9990fe09e7c6e248a4765&t=1624036334"
            }
          ]
      },
      {
        cate_id: 4,
        cate_name: "宗教场所",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: 'miyun',
            image: "https://636c-cloud1-6gti323d7294495c-1306017304.tcb.qcloud.la/map/entertainment_map/miyun_map.png?sign=0dbed448dd69220540981ce6237a3831&t=1624036250"
          },
          {
            child_id: 2,
            name: 'quyang',
            image: "https://636c-cloud1-6gti323d7294495c-1306017304.tcb.qcloud.la/map/entertainment_map/quyang_map.png?sign=2a6aceff01b9990fe09e7c6e248a4765&t=1624036334"
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: "其他",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            name: 'miyun',
            image: "https://636c-cloud1-6gti323d7294495c-1306017304.tcb.qcloud.la/map/entertainment_map/miyun_map.png?sign=0dbed448dd69220540981ce6237a3831&t=1624036250"
          },
          {
            child_id: 2,
            name: 'quyang',
            image: "https://636c-cloud1-6gti323d7294495c-1306017304.tcb.qcloud.la/map/entertainment_map/quyang_map.png?sign=2a6aceff01b9990fe09e7c6e248a4765&t=1624036334"
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
  showIconDetail: function (e) {
    console.log(e);
    var icon_index = parseInt(e.currentTarget.id);
    if (icon_index==0){
      wx.showModal({
        title: '提示',
        content: '阅览区',
        showCancel: false,
        confirmText: '确定',
        success: function(res) {
          if (res.confirm) {
            console.log('确定')
          }
        }
      });
    } else if (icon_index==1){
      wx.showModal({
        title: '提示',
        content: '健身区',
        showCancel: false,
        confirmText: '确定',
        success: function(res) {
          if (res.confirm) {
            console.log('确定')
          }
        }
      });
    } else if(icon_index==2){
      wx.showModal({
        title: '提示',
        content: '餐饮区',
        showCancel: false,
        confirmText: '确定',
        success: function(res) {
          if (res.confirm) {
            console.log('确定')
          }
        }
      });
    }
    
  }
})
