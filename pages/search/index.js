// pages/search/index.js
import { request } from "../../request/request.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputval: "",
    good_List:[],
    goodsearch:'搜索商品'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 监听输入事件
  handleInputchange: function (e) {
    console.log(e.detail.value)
    this.setData({
      inputval: e.detail.value
    })
  },
  // 处理点击事件
  hangdleClick: async function (e) {
    const { inputval } = this.data;
    console.log(inputval)
    // 判断是否为空
    if (!inputval) {
      wx.showToast({
        title: '请输入商品名称',
        icon: 'none'
      })
      return false
    }
    // 在点击事件里请求后台数据
    const good_List = await request({
      url: 'goods/qsearch',
      data: {
        query: inputval
      }
    })
    if(good_List.length===0){
      wx.showToast({
        title:'查无数据',
        icon:'none'
      })
      return false
    }
    this.setData({
      good_List
    })
    console.log(good_List)
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