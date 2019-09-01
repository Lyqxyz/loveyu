// components/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      a:{
        type:Number
      }
  },

  lifetimes: {
    attached: function () {

      console.log('attached')
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行

      console.log('detached')
    },
  },

  pageLifetimes: {
    show: function () {

      console.log('show')
      // 页面被展示
    },
    hide: function () {

      console.log('hide')
      // 页面被隐藏
    },
    resize: function (size) {

      console.log('resize')
      // 页面尺寸变化
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTap(){
      var myEventDetail = {a:4} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('MyEvent', myEventDetail, myEventOption)
    }
  }
})
