// index.js
const imageUrl = "https://www.helloimg.com/i";
const swiperList = [
  {
    value: `${imageUrl}/2025/02/16/67b14d02efdc9.png`,
    ariaLabel: "High.jpg",
  },
];
Page({
  data: {
    res: "这里将显示坡度的近似值",
    long: "",
    short: "",
    d: "",
    empty: false,
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
  },
  long: function (e) {
    this.setData({
      long: e.detail.value,
    });
    console.log("hndchanged", this.data.long);
  },
  short: function (e) {
    this.setData({
      short: e.detail.value,
    });
    console.log("dschanged", this.data.short);
  },
  d: function (e) {
    this.setData({
      d: e.detail.value,
    });
    console.log("rlchanged", this.data.d);
  },
  calc: function () {
    var long = this.data.long;
    var short = this.data.short;
    var d = this.data.d;
    if (parseFloat(long) && parseFloat(short) && parseFloat(d)) {
      var tan = (long - short) / d;
      var rad = Math.atan(tan);
      var degree = rad * (180 / Math.PI);
      this.setData({
        res: degree,
      });
    } else if (long === "" || short === "" || d === "") {
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
      long: "",
      short: "",
      d: "",
    });
  },
  onShortInput(e) {
    this.setData({
      short: e.detail.value,
      empty: false,
    });
    console.log("high changed", this.data.high);
  },
  onLongInput(e) {
    this.setData({
      long: e.detail.value,
      empty: false,
    });
    console.log("high changed", this.data.high);
  },
  onDInput(e) {
    this.setData({
      d: e.detail.value,
      empty: false,
    });
    console.log("high changed", this.data.high);
  },
});
