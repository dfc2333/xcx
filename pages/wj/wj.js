// pages/wj/wj.js
const imageUrl = "https://www.helloimg.com/i";
const swiperList = [
  {
    value: `${imageUrl}/2025/02/16/67b14714a436c.png`,
    ariaLabel: "High.jpg",
  },
];
Page({
  data: {
    style:
      "border: 2rpx solid var(--td-input-border-color-example);border-radius: 12rpx;",
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
  },
});
