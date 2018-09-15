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
    }
  }
});