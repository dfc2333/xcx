// guide_play.js
Page({
  data: {
    currentTips: "",
    tipsList: ["success", "nihao"],
  },
  onLoad: function () {
    wx.makePhoneCall({
      phoneNumber: "110",
    });
    this.setData({
      currentTips: this.data.tipsList[Math.floor(Math.random() * 2)],
    });
    setInterval(() => {
      this.setData({
        currentTips: this.data.tipsList[Math.floor(Math.random() * 2)],
      });
    }, 10000);
  },
});
