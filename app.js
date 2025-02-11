App({
  onLaunch: function () {},
  towxml: require("/towxml/index"),
  getText: (url, callback) => {
    wx.request({
      url: url,
      header: {
        "content-type": "application/x-www-form-urlencoded",
      },
      success: (res) => {
        if (typeof callback === "function") {
          callback(res);
        }
      },
    });
  },
});
