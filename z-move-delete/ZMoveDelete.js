Component({

  relations: {
    '../z-group/ZGroup': {
      type: 'ancestor', // 关联的目标节点应为父节点
      linked: function (target) { },
      linkChanged: function (target) { },
      unlinked: function (target) { }
    }
  },

  properties: {
    enable: { type: Boolean, value: true },
    confirm: { type: Boolean, value: true },
  },

  data: {
    init: false,
    animation: "",    // 动画

    WINDOW_WIDTH: 0, // 总宽度
    DELETE_SPEED: 100, // 5px / s
    DELETE_DISTANCE: 187.5, // 超过多少删除路程

    parentAllow: true,
  },

  methods: {
    /* ---------------------------- 与 wxs 交互 ---------------------------- */
    deleteAction() {
      if (this.data.confirm) {
        // 弹窗
        wx.showModal({
          content: '确定要删除吗',
          showCancel: true,
          success: (result) => {
            if (result.confirm) {
              this.triggerEvent("delete");            // 传递删除
              this.setData({ init: !this.data.init }) // 重置状态
            } else {
              this.setData({ init: !this.data.init }) // 重置状态
            }
          }
        });

        return
      }
      this.triggerEvent("delete");
      this.setData({ init: !this.data.init }) // 重置状态
    },

  },

  ready() {
    // this.WINDOW_WIDTH = wx.getSystemInfoSync().windowWidth;
    // this.DELETE_DISTANCE = this.WINDOW_WIDTH * 0.5;

    let WINDOW_WIDTH = wx.getSystemInfoSync().windowWidth;
    this.setData({ WINDOW_WIDTH, DELETE_DISTANCE: WINDOW_WIDTH * 0.5 })

    this.$animation = wx.createAnimation({ duration: 200 });
    this.$clearAnimation = wx.createAnimation({ duration: 0 });
  },
})
