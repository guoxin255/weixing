//index.js
//获取应用实例
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navs: [],
    swiper_list:[],
    tabs:"搜索",
    floors:[],
    onMyTab(e){
      console.log(e.detail)
    },


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
      success: (res => {
        this.setData({
          swiper_list: res.data.message
        })
        console.log(res);

      })
    }),
      wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/catitems',
        success: (res => {
          this.setData({
            navs: res.data.message
          })
          console.log(res);
        })
      }),
      wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
        success: (res => {
          this.setData({
            floors: res.data.message
          })
          console.log(res);
        })
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})