// index.js
Page({
  data: {
    pst: "0",
    text: "这是一个介绍高原的小程序",
  },
  scanQR: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res.result);
        this.setData({
          pst: "100",
          text: res.result,
        });
      },
    });
  },
  p1: function () {
    wx.navigateTo({
      url: "/pages/p1/p1",
    });
  },
  switch_to_intro: function () {
    wx.navigateTo({
      url: "/pages/intro/intro",
    });
  },
  switch_to_bp: function () {
    wx.navigateTo({
      url: "/pages/bp/bp",
    });
  },
  switch_to_sos: function () {
    wx.navigateTo({
      url: "/pages/sos/sos",
    });
  },
  switch_to_tools: function () {
    wx.navigateTo({
      url: "/pages/tools/tools",
    });
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
  switch_to_culture: function () {
    wx.navigateTo({ url: "/pages/hz/intro" });
  },
  switch_to_wj: function () {
    wx.navigateTo({ url: "/pages/wj/wj" });
  },
});
