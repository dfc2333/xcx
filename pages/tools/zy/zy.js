// pages/tools/zy/zy.js
Page({
  data: {
    cityText: "",
    cityValue: [],
    high: null,
    month: null,
    gy: "",
    empty: false,
    citys: [
      { label: "青藏高原", value: "青藏高原" },
      { label: "云贵高原", value: "云贵高原" },
      { label: "黄土高原", value: "黄土高原" },
    ],
  },
  a: function () {
    let a1 = 0.0075;
    let a2 = 10;
    let a3 = -4;
    let b3 = 0.0002;
    var high = this.data.high;
    var month = this.data.month;
    let d1 = 1725;
    let d2 = 675;
    let d3 = 400;
    var gy = this.data.cityText;
    console.log("[Debug] gy name =",gy)
    if (high !== null) {
      if (month !== null) {
        let h = parseFloat(high);
        let m = parseFloat(month);
        let T1 = a1 * h;
        let T2 = a2 * Math.sin((Math.PI / 6) * m - Math.PI / 6);
        var T3 = null
        if (gy == "青藏高原") {
          T3 = a3 * Math.E ** (b3 * d1);
          console.log("[Debug] 青藏高原")
        } else if (gy == "黄土高原") {
          T3 = a3 * Math.E ** (b3 * d2);
          console.log("[Debug] 黄土高原")
        } else if (gy == "云贵高原") {
          T3 = a3 * Math.E ** (b3 * d3);
          console.log("[Debug] 云贵高原")
        } else {
          console.log("[Debug] else")
          return;
        }
        let Tx = T1 + T2 + T3 + 13;
        Tx = Tx.toFixed(2);
        console.log(Tx + "℃");
        this.setData({
          res: Tx + "℃",
        });
      } else {
        return;
      }
    } else {
      return;
    }
  },
  onMonthInput(e) {
    this.setData({
      month: e.detail.value,
      empty: false,
    });
    console.log("high changed", this.data.high);
  },
  onHighInput(e) {
    this.setData({
      high: e.detail.value,
      empty: false,
    });
    console.log("high changed", this.data.high);
  },

  onColumnChange(e) {
    console.log("picker pick:", e);
  },
  onPickerChange(e) {
    const { key } = e.currentTarget.dataset;
    const { value } = e.detail;
    console.log("picker change:", e.detail);
    this.setData({
      [`${key}Visible`]: false,
      [`${key}Value`]: value,
      [`${key}Text`]: value.join(" "),
    });
    console.log(this.data.cityText);
    this.setData({
      gy: this.data.cityText,
      empty: false,
    });
  },
  onPickerCancel(e) {
    const { key } = e.currentTarget.dataset;
    console.log(e, "取消");
    console.log("picker1 cancel:");
    this.setData({
      [`${key}Visible`]: false,
    });
    console.log("onPickerCancel");
  },
  onCityPicker() {
    this.setData({ cityVisible: true });
    console.log("onCityPicker");
  },
});
