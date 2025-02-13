// cont.js
const app = getApp();
Page({
  data: {
    article: {},
  },
  onLoad: function () {
    const _ts = this;
    const data =`
  
`
        let obj = app.towxml(data, "markdown", {
          events: {
            tap: (e) => {
              console.log("tap", e);
            },
            change: (e) => {
              console.log("todo", e);
            },
          },
        });
        _ts.setData({
          article: obj,
        });
  },
});
