"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Page({
  data: {
    NAV_HEIGHT: wx.STATUS_BAR_HEIGHT + wx.DEFAULT_HEADER_HEIGHT + "px",
    itemStyle: {
      "border-color": "#0dc1ae",
      color: "#0dc1ae",
      "font-size": "14px"
    },
    activeItemStyle: {
      color: "#fff",
      "background-color": "#0dc1ae"
    },
    swiperCurrent: 0,
    items: [{
      src: "http://images.uileader.com/20171110/e5b64484-b5e0-472a-bf52-ac95fb5685d3.jpg",
      title: "放肆玩乐，轻巧办公"
    }, {
      src: "http://images.uileader.com/20171110/e33376a8-c599-42e5-87ed-84aec360a61d.jpg",
      title: "高温保护，一路驰骋"
    }, {
      src: "http://images.uileader.com/20171110/37cc4a4e-a253-4fcd-a4f6-d9710e8f63e8.jpg",
      title: "七夕好货，独家礼赠"
    }],
    imgSrc: "http://images.uileader.com/20180413/724c6ad5-b6e0-4971-adeb-f4f502c7243e.png"
  },
  swiperChange: function swiperChange(e) {
    console.log(e);
    this.setData({
      swiperCurrent: e.detail.current
    });
  }
});