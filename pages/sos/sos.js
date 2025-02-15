// pages/sos/sos.js
Page({
  data: {
    currentTips: "",
    tipsList: [
      "逐步适应：如果你从低海拔地区前往高海拔地区，建议在中等海拔（如2000-3000米）停留1-2天，让身体逐渐适应低氧环境。",
      "避免剧烈运动：到达高原后的前24-48小时，尽量避免剧烈运动，减少身体负担。",
      "多休息：保证充足的睡眠，帮助身体适应高原环境。",
      "注意症状：高原反应（AMS）的常见症状包括头痛、恶心、呕吐、疲劳、失眠等。如果症状严重，应立即下撤到低海拔地区。",
      "药物辅助：可以考虑携带高原反应药物，如红景天（Rhodiola rosea）或乙酰唑胺（Acetazolamide），但请在医生指导下使用。",
      "保持水分：高原地区干燥，容易脱水。多喝水，避免饮酒和含咖啡因的饮料。",
      "高热量食物：高原环境下身体消耗能量较快，建议多吃高热量食物，如坚果、巧克力、肉类等。",
      "避免油腻：尽量避免油腻和难以消化的食物，以免加重肠胃负担。",
      "维生素补充：携带维生素C和维生素B族补充剂，增强免疫力。",
      "保暖：高原地区昼夜温差大，注意保暖，携带足够的御寒衣物（如羽绒服、保暖内衣）。",
      "防晒：高原地区紫外线较强，建议使用高倍数防晒霜（SPF 50+），佩戴墨镜和遮阳帽。",
      "透气性：选择透气性好的衣物，避免出汗过多导致感冒。",
      "选择合适的交通工具：如果可能，尽量选择缓慢上升的交通方式（如火车或汽车），而不是直接飞到高海拔地区。",
      "注意路况：高原地区路况复杂，驾驶时要注意安全，避免疲劳驾驶。",
      "携带氧气瓶：如果前往极高海拔地区（如5000米以上），建议携带便携式氧气瓶以备不时之需。",
      "尊重当地习俗：高原地区多为少数民族聚居地，尊重当地文化和宗教习俗，避免冒犯。",
      "学习简单语言：学习一些当地语言的基本用语（如“你好”“谢谢”），有助于与当地人交流。",
      "不乱丢垃圾：高原地区生态环境脆弱，务必携带垃圾袋，将垃圾带回低海拔地区处理。",
      "节约资源：高原地区资源有限，节约用水、用电。",
      "携带急救包：包括常用药品（如感冒药、止痛药、止泻药）、创可贴、消毒液等。",
      "通讯设备：携带充电宝和卫星电话（如前往信号不好的地区）。",
      "告知行程：提前告知家人或朋友你的行程安排，保持联系。",
      "保持乐观：高原环境可能较为艰苦，保持积极心态，适应环境变化。",
      "避免独自行动：尽量与他人结伴而行，互相照应。",
    ],
  },

  onLoad: function () {
    this.setData({
      currentTips: this.data.tipsList[Math.floor(Math.random()*24)],
    });
    setInterval(() => {
        this.setData({
          currentTips: this.data.tipsList[Math.floor(Math.random()*24)],
        });
      }, 10000);
  },
  direct: function(){
    wx.navigateTo({
      url: "/pages/sos/map/map",
    })
  },
  police: function(){
    wx.makePhoneCall({ 
      phoneNumber: "110", 
    }); 
    wx.navigateTo({
      url: "/pages/sos/guide_play/guide_play"
    })
  },
  help: function(){
    wx.makePhoneCall({
      phoneNumber: '120',
    })
    wx.navigateTo({
      url: "/pages/sos/guide_play/guide_play"
    })
  },
  guide: function(){
    wx.navigateTo({
      url: "/pages/sos/guide/guide",
    })
  },
});
