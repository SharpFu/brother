var util = require('../../utils/util.js')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    news:[],
    images:[],
    news_length:0,
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    loadingHidden: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSwiperImages();
    this.getAllData();
  },
  //事件处理函数
  swiperchange: function (e) {
    //console.log(e.detail.current)
  },
  getSwiperImages(){
    //sliderList
    var _images = util.getImages();
    this.setData({images:_images});
    // wx.request({
    //   url: 'http://huanqiuxiaozhen.com/wemall/slider/list',
    //   method: 'GET',
    //   data: {},
    //   header: {
    //     'Accept': 'application/json'
    //   },
    //   success: function (res) {
    //     that.setData({
    //       images: res.data
    //     })
    //   }
    // })
  },
  getAllData(){
    var _newsData = util.getIndexData();
    var _news = _newsData.data;
    this.setData({
      news: _news,
      news_length:_news.length
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