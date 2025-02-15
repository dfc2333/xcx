// index.js
Page({
  data: {
    res: "这里将显示球面距离近似值",
    lat2: null,
    lat1: null,
    lon2: null,
    lon1: null,
    empty: false
  },
  la1: function (e) {
    this.setData({
      lat1: e.detail.value,
    });
    console.log("la1changed", this.data.lat1);
  },
  la2: function (e) {
    this.setData({
      lat2: e.detail.value,
    });
    console.log("la2changed", this.data.lat2);
  },
  lo1: function (e) {
    this.setData({
      lon1: e.detail.value,
    });
    console.log("lo1changed", this.data.lon1);
  },
  lo2: function (e) {
    this.setData({
      lon2: e.detail.value,
    });
    console.log("lo2changed", this.data.lon2);
  },
  calculateDistance: function () {
    const R = 6371; // 地球半径，单位公里

    // 将角度转换为弧度
    const toRad = (degree) => degree * (Math.PI / 180);

    const dLat = toRad(this.data.lat2 - this.data.lat1);
    const dLon = toRad(this.data.lon2 - this.data.lon1);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(this.data.lat1)) *
        Math.cos(toRad(this.data.lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c; // 距离（公里）
    this.setData({
      res: Math.round(distance),
    });
  },
  del: function () {
    this.setData({
      empty: true
    });
  },
  onJing1Input(e) {
    this.setData({
      lon1: e.detail.value,
      empty: false
    });
    console.log("lo1changed", this.data.lon1);
  },
  onWei1Input(e) {
    this.setData({
      lat1: e.detail.value,
      empty: false
    });
    console.log("la1changed", this.data.lat1);
  },
  onJing2Input(e) {
    this.setData({
      lon2: e.detail.value,
      empty: false
    });
    console.log("lo1changed", this.data.lon1);
  },
  onWei2Input(e) {
    this.setData({
      lat2: e.detail.value,
      empty: false
    });
    console.log("la1changed", this.data.lat1);
  },
});
