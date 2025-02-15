// pages/tools/zy/zy.js
Page({
    data: {
        high: null,
        month: null,
        gy: "",
        empty: false,
        citys: [
            { label: '北京市', value: '北京市' },
            { label: '上海市', value: '上海市' },
            { label: '广州市', value: '广州市' },
            { label: '深圳市', value: '深圳市' },
            { label: '成都市', value: '成都市' },
          ],
    },
    a: function () {
      let a1 = 0.0075
      let a2 = 10
      let a3 = -4
      let b3 = 0.0002
      var high = this.data.high
      var month = this.data.month
      let d1 = 1725
      let d2 = 675
      let d3 = 400
      var gy = this.data.gy
      if (high !== null) {
        if (month !== null) {
          let h = parseFloat(high)
          let m = parseFloat(month)
          let T1 = a1 * h
          let T2 = a2 * Math.sin((Math.PI / 6) * m - Math.PI / 6)
          let T3 = null
          if (gy == "青藏高原") {
            let T3 = a3 * Math.E ** (b3 * d1)
          } else if (gy == "黄土高原") {
            let T3 = a3 * Math.E ** (b3 * d2)
          } else if (gy == "云贵高原") {
            let T3 = a3 * Math.E ** (b3 * d3)
          } else {
            return
          }
          let Tx = T1 + T2 + T3 + 13
          Tx = Tx.toFixed(2);
          console.log(Tx + "℃")
          this.setData({
            res: Tx + "℃",
          });
        } else {
          return
        }
      } else {
        return
      }
    },
    onGyInput(e) {
        this.setData({
          gy: e.detail.value,
          empty: false
        });
        console.log("high changed", this.data.high);
      },
      onMonthInput(e) {
        this.setData({
          month: e.detail.value,
          empty: false
        });
        console.log("high changed", this.data.high);
      },
      onHighInput(e) {
        this.setData({
          high: e.detail.value,
          empty: false
        });
        console.log("high changed", this.data.high);
      },

  });