// pages/sos/map/map.js
Page({
  data: {
    latitude: 23.10287,
    longitude: 113.26795,
    markers: [{
      id: 1,
      latitude: 23.10287,
      longitude: 113.26795,
      name: 'gzwz'
    }],
    covers: [{
      latitude: 23.10287,
      longitude: 113.26795,
      iconPath: '/image/location.png'
    }],
    lg:'',
    la:''
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude:23.09401,
        longitude:113.29119,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
})
