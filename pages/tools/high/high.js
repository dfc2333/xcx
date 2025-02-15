// index.js
Page({
  data: {
    high: null,
    empty: true
  },
  a: function () {
    if (this.data.high !== null) {
      var h = parseFloat(this.data.high);
      let C = (21 / 100) * Math.E ** (-0.00014 * h);
      let CFixed = C.toFixed(2);
      console.log(CFixed * 100 + "%");
      this.setData({
        res: CFixed * 100 + "%",
      });
    }
  },
  onHighInput(e) {
    this.setData({
      high: e.detail.value,
      empty: false
    });
    console.log("high changed", this.data.high);
  },
});
