Component({

  relations: {
    '../z-move-menu/ZMoveMenu': {
      type: 'descendant',   // 关联的目标节点应为子节点
      linked: function (target) { },
      linkChanged: function (target) { },
      unlinked: function (target) { }
    },

    '../z-move-delete/ZMoveDelete': {
      type: 'descendant',   // 关联的目标节点应为子节点
      linked: function (target) { },
      linkChanged: function (target) { },
      unlinked: function (target) { }
    },
  },

  properties: {

  },

  data: {

  },

  methods: {
    /* ------------- close ------------- */
    closeOther(node) {
      let nodes = this.getRelationNodes('../z-move-menu/ZMoveMenu');
      nodes.forEach(item => {
        if (item != node) item.close && item.close();
      })
    },

    /* ------------ 事件冲突处理 -------- */
    scrolling(e) {
      if (this.$setAllow) return;
      this.$setAllow = true;

      let nodes = this.getRelationNodes('../z-move-menu/ZMoveMenu') || [];
      nodes.forEach(item => { item.setData({ "parentAllow": false }) })

      nodes = this.getRelationNodes('../z-move-delete/ZMoveDelete') || [];
      nodes.forEach(item => { item.setData({ "parentAllow": false }) })
    },

    scrollend() {
      this.$setAllow = false;
      let nodes = this.getRelationNodes('../z-move-menu/ZMoveMenu') || [];
      nodes.forEach(item => item.setData({ "parentAllow": true }))

      nodes = this.getRelationNodes('../z-move-delete/ZMoveDelete') || [];
      nodes.forEach(item => { item.setData({ "parentAllow": true }) })
    },


  },

  ready() {
  }
})
