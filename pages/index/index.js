//index.js
//获取应用实例
var app = getApp();
var util = require('../../utils/util.js');
Page({
  data: {
    city: '珠海',
    forecastWeather: '',
    todayWeather: '',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });

    that.searchForecastWeather(that.data.city);
    that.searchTodayWeather(that.data.city);
  },
  searchForecastWeather(city){
    var that = this;
    wx.request({
      url: 'https://free-api.heweather.com/v5/forecast?city=' + city + '&key=87b3d4c87d6c42c4b72197c0c9237ab6',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        let daily_forecast = res.data.HeWeather5[0].daily_forecast;
        for (let i in daily_forecast) {
          res.data.HeWeather5[0].daily_forecast[i].date = util.formatDay(daily_forecast[i].date);
        }
        that.setData({
          forecastWeather: res.data.HeWeather5[0].daily_forecast
        })
      },
      error: function () {
        console.log("weather api fail");
      }
    })
  },
  searchTodayWeather(city){
    var that = this;
    wx.request({
      url: 'https://free-api.heweather.com/v5/now?city=' + city + '&key=87b3d4c87d6c42c4b72197c0c9237ab6',
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        
        that.setData({
          todayWeather: res.data.HeWeather5[0].now
        })
      },
      error: function () {
        console.log("weather api fail");
      }
    })
  }
})
