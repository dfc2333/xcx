// index.js
Page({
  data: {
    res: "...",
    hand: "",
    dis: "",
    rul: "",
  },
  onHandInput(e) {
    this.setData({
      hand: e.detail.value,
      empty: false,
    });
    console.log("high changed", this.data.high);
  },
  onDisInput(e) {
    this.setData({
      dis: e.detail.value,
      empty: false,
    });
    console.log("high changed", this.data.high);
  },
  onRulInput(e) {
    this.setData({
      rul: e.detail.value,
      empty: false,
    });
    console.log("high changed", this.data.high);
  },
/*
  hnd: function (e) {
    this.setData({
      hand: e.detail.value,
    });
    console.log("hndchanged", this.data.hand);
  },
  ds: function (e) {
    this.setData({
      dis: e.detail.value,
    });
    console.log("dschanged", this.data.dis);
  },
  rl: function (e) {
    this.setData({
      rul: e.detail.value,
    });
    console.log("rlchanged", this.data.rul);
  },
  */
  calc: function () {
    var hand = this.data.hand;
    var dis = this.data.dis;
    var rul = this.data.rul;
    if (parseFloat(hand) && parseFloat(dis) && parseFloat(rul)) {
      var h = ((rul / 100) * dis) / hand;
      console.log("[Debug] h ="+h)
      this.setData({
        res: Math.round(h),
      });
    } else if (hand === "" || dis === "" || rul === "") {
      this.setData({
        res: "没填完呢",
      });
    } else {
      this.setData({
        res: "神金",
      });
    }
  },
  del: function () {
    this.setData({
      hand: "",
      dis: "",
      rul: "",
      res: "..."
    });
  },
});
