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
  water: function(){
    wx.navigateTo({
      url: "/pages/tools/water/water",
    })
  },
  cliff: function(){
    wx.navigateTo({
      url: "/pages/tools/cliff/cliff",
    })
  },
  switch_to_share: function () {
    wx.navigateTo({ url: "/pages/tools/lalodis/lalo" });
  },
  switch_to_blog: function () {
    wx.navigateTo({ url: "/pages/tools/laloleast/lalo" });
  },
  switch_to_health: function () {
    wx.navigateTo({ url: "/pages/tools/health/health" });
  },
  switch_to_high: function () {
    wx.navigateTo({ url: "/pages/tools/high/high" });
  },
  switch_to_tan: function () {
    wx.navigateTo({ url: "/pages/tools/tan/tan" });
  },
  switch_to_zy: function () {
    wx.navigateTo({ url: "/pages/tools/zy/zy" });
  },
})