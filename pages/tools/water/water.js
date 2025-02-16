// index.js
Page({
  data: {
    res: '...'
  },
  calc: function(e){
    var bt = e.detail.value;
    if (parseFloat(bt)>0 & parseFloat(bt)<200){
    var h = (100-bt)/0.003;
    this.setData({
      res:Math.round(h)
    })}else if(bt===''){
      this.setData({
        res:"..."
      })
    }else{
      this.setData({
        res:'神金'
      })
    }
  }
})
