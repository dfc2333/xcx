// pages/tools/tools.js
Page({
  switch_to_map: function(){
    wx.navigateTo({
      url: "/pages/sos/map/map",
    })
  },
  switch_to_tut: function(){
    wx.navigateTo({
      url: "/pages/tools/tut/tut",
    })
  },
  switch_to_com: function(){
    wx.navigateTo({
      url: "/pages/tools/com/com",
    })
  },
  switch_to_cont: function(){
    wx.navigateTo({
      url: "/pages/tools/cont/cont",
    })
  },
})