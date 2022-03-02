// components/tabbar/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    active: 0,
    list: [
      {
        icon: 'home-o',
        text: '主页',
        url: 'pages/index/index'
      },
      {
        icon: 'search',
        text: '分类',
        url: 'pages/choose_place/choose_place'
      },
      {
        icon: 'friends-o',
        text: '地图',
        url: 'pages/index/index'
      },
      {
        icon: 'setting-o',
        text: '个人中心',
        url: 'pages/index/index'
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
			this.setData({ active: event.detail });
			wx.switchTab({
				url: this.data.list[event.detail].url
			});
		},

		// init() {
		// 	const page = getCurrentPages().pop();
		// 	this.setData({
		// 		active: this.data.list.findIndex(item => item.url === `/${page.route}`)
		// 	});
		// }
  }
})
