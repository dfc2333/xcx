// index.js
Page({
  data: {
    pst: '0',
    text: 'nth'
  },
  back: function(){
    wx.navigateBack({
      delta:2,
    })
  }

})
