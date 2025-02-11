const app = getApp();
Page({
  data: {
    article: {},
    loading:true
  },
  onLoad: function () {
    const _ts = this;
    app.getText(
      "https://raw.githubusercontent.com/sti-233/xcx/refs/heads/dfc/pages/intro/Ht/Ht.md",
      (res) => {
        let obj = app.towxml(res.data, "markdown", {
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
          loading:false
        });
      }
    );
  },
});
