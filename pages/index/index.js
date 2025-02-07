// index.js
Page({
  data: {
    pst: '0',
    text: 'nth',
    rst: undefined
  },
  scanQR: function(){
    wx.scanCode({
      success: (res) => {
          console.log(res.result);
          this.setData({
            pst:'100',
            rst:res.result,
          });
        },
    })
  },
  p1: function(){
    wx.navigateTo({
      url: '/pages/p1/p1',
    })
  },
  showansw: function(){
    this.setData({
      text:this.data.rst
    })
  }
})
