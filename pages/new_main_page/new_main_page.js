// pages/new_main_page/new_main_page.js
const imageUrl = 'https://www.helloimg.com/i';
const swiperList = [
  {
    value: `${imageUrl}//2025/02/09/67a884f1c8ae4.jpg`,
    ariaLabel: 'High.jpg',
  },
];
Page({
  data: {
    current: 1,
    autoplay: true,
    duration: 500,
    interval: 5000,
    swiperList,
  },
});

