// pages/sos/guide/guide.js
const app = getApp();
Page({
	data: {
		article: {}
	},
	onLoad: function () {
		const _ts = this;

		app.getText('/pages/sos/guide/guide.txt',res => {
			let obj = app.towxml(res.data,'markdown',{
				// theme:'dark',
				events:{
					tap:e => {
						console.log('tap',e);
					},
					change:e => {
						console.log('todo',e);
					}
				}
			});

			_ts.setData({
				article:obj,
				isLoading: false
			});
		});
		
	}
})