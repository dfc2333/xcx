// index.js
Page({
  data: {
    res:'这里将显示悬崖高度近似值',
    hand:'',
    dis:'',
    rul:''
  },
  hnd: function(e){
    this.setData({
      hand:e.detail.value
    })
    console.log('hndchanged',this.data.hand)
  },
  ds: function(e){
    this.setData({
      dis:e.detail.value
    })
    console.log('dschanged',this.data.dis)
  },
  rl: function(e){
    this.setData({
      rul:e.detail.value
    })
    console.log('rlchanged',this.data.rul)
  },
  calc: function(){
    var hand = this.data.hand
    var dis = this.data.dis
    var rul = this.data.rul
    if (parseFloat(hand) && parseFloat(dis) && parseFloat(rul)){
    var h = rul/100*dis/hand
    this.setData({
      res:Math.round(h)
    })}else if(hand===''||dis===''||rul===''){
      this.setData({
        res:"没填完呢"
      })
    }else{
      this.setData({
        res:'神金'
      })
    }
  },
  del: function(){
    this.setData({
      hand: '',
      dis:'',
      rul:''
    })
  }
})
