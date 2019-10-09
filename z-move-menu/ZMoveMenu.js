const util = require('../../utils/util')

Component({

  relations: {
    '../z-group/ZGroup': {
      type: 'ancestor', // 关联的目标节点应为父节点
      linked: function (target) { },
      linkChanged: function (target) { },
      unlinked: function (target) { }
    }
  },

  /* 在组件定义时的选项中启用多slot支持 */
  options: { multipleSlots: true },

  properties: {

    /* -------------- item高度 ------------------ */
    height: { value: 0, type: Number },

    /* -------------- 菜单宽度 ------------------ */
    menuWidth: {
      value: 0,
      type: Number,
      observer: function (newValue) {
        this.setData({ realWidth: util.rpxToPx(newValue) })
      }
    },

    leftScrollEnable: { value: true, type: Boolean }
  },

  data: {
    /* --------------- 当前滑动距离 -------------- */
    scrollX: 0,
    realWidth: "",
    parentAllow: true,
  },

  methods: {
    open() { this.scrollTo(menuWidth) },

    close() { this.scrollTo(0) },

    scrollTo(scroll) { this.setData({ scrollX: scroll }); },

    setLeftEnable(enable) { this.setData({ leftScrollEnable: enable }) },

    /* ---------------------- 本地点击交互 ---------------------- */
    itemTap(e) { this.close(); },

    /* ---------------------- 调用parent ---------------------- */
    itemTouchStart(e) {
      let parent = this.getRelationNodes("../z-group/ZGroup")[0];
      parent && parent.closeOther();
    }
  }
})
