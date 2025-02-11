// index.js
Page({
  data: {
    res: '这里将显示你的海拔高度近似值'
  },
  calc: function(e){
    var bt = e.detail.value
    if (parseFloat(bt)>0 & parseFloat(bt)<200){
    var h = (100-bt)/0.003
    this.setData({
      res:Math.round(h)
    })}else if(bt===''){
      this.setData({
        res:"这里将显示你的海拔高度近似值"
      })
    }else{
      this.setData({
        res:'神金'
      })
    }
  }
})
