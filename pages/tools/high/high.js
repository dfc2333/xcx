// index.js
Page({
    data: {
        high: null,
        empty: true
    },
    a: function () {
        if (this.data.high !== null) {
            var h = parseFloat(this.data.high);
            let C = (21 / 100) * Math.E ** (-0.00014 * h);
            let CFixed = C.toFixed(2);
            console.log(CFixed * 100 + "%");
            if (CFixed >= 0.21) {
                var a = "高反情况：正常生理状态，人体无高原反应症状，呼吸、循环等系统功能正常.应对措施：无需特殊应对，保持正常生活和活动习惯。"
            } else if (CFixed >= 0.18 && CFixed <= 0.20) {
                var a = "高反情况：多数人无明显不适，部分人可能有轻微头痛、呼吸加快、心跳加速等。应对措施：注意休息，避免剧烈运动，可适当补充水分和维生素。"
            } else if (CFixed >= 0.16 && CFixed < 0.18) {
                var a = "高反情况：头痛、头晕加重，呼吸急促，心跳明显加快，可能伴有恶心、失眠等症状。\n应对措施：减少活动量，保证充足睡眠，可服用抗高原反应药物，如红景天等，若症状严重，及时就医。"
            } else if (CFixed >= 0.14 && CFixed < 0.16) {
                var a = "高反情况：头痛剧烈，呼吸困难，嘴唇发紫，食欲减退，全身乏力，可能出现意识模糊。\n应对措施：立即停止活动，原地休息并吸氧，尽快前往低海拔地区或就医治疗。"
            } else if (CFixed >= 0.12 && CFixed < 0.14) {
                var a = "高反情况：呼吸极度困难，心跳过速，严重头痛、呕吐，意识障碍加重，可能出现幻觉、昏迷。\n应对措施：必须立即吸氧，采取半卧位休息，迅速转移到低海拔地区或有医疗条件的地方抢救。"
            } else if (CFixed < 0.12) {
                var a = "高反情况：呼吸极度困难，心跳过速，严重头痛、呕吐，意识障碍加重，可能出现幻觉、昏迷。\n应对措施：必须立即吸氧，采取半卧位休息，迅速转移到低海拔地区或有医疗条件的地方抢救。"
            }
            this.setData({
                res: "含氧量：" + CFixed * 100 + "%" + "\n" + a,
            });
        }
    },
    onHighInput(e) {
        this.setData({
            high: e.detail.value,
            empty: false
        });
        console.log("high changed", this.data.high);
    },
});