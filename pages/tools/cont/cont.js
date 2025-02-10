// index.js
Page({
  data: {
    pst: '0',
    text: '敬请期待'
  },
  back: function(){
    wx.navigateBack({
      delta:1,
    })
  }

})
