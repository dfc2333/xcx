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
  }
})
