// index.js
Page({
  data: {
    pst: '0',
    text: '这是一个介绍高原的小程序',
  },
  scanQR: function(){
    wx.scanCode({
      success: (res) => {
          console.log(res.result);
          this.setData({
            pst:'100',
            text:res.result,
          });
        },
    })
  },
  p1: function(){
    wx.navigateTo({
      url: '/pages/p1/p1',
    })
  },
  switch_to_intro: function(){
    wx.navigateTo({
      url: '/pages/intro/intro',
    })
  },
  switch_to_bp: function(){
    wx.navigateTo({
      url: '/pages/bp/bp',
    })
  },
  switch_to_sos: function(){
    wx.navigateTo({
      url: '/pages/sos/sos',
    })
  },
  switch_to_tools: function(){
    wx.navigateTo({
      url: '/pages/tools/tools',
    })
  },
  switch_to_share: function(){
    wx.navigateToMiniProgram({appId:'wx286efc12868f2559'})//华住会
  },
  switch_to_blog: function(){
    wx.navigateToMiniProgram({appId:'wx0e6ed4f51db9d078'})//携程
  },
  
})
