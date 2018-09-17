'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WxHelper = require('../../libs/WxHelper.js');

var _WxHelper2 = _interopRequireDefault(_WxHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChildPath = '../../ui-roller-item/dist/index';

exports.default = Component({
  relations: _WxHelper2.default.getChildRelation(ChildPath),
  behaviors: [],
  properties: {
    height: {
      type: [String, Number],
      value: 30
    },
    speed: {
      type: [String, Number],
      value: 300
    },
    autoplay: {
      type: [String, Number],
      value: 2000
    },
    direction: {
      type: [String],
      value: 'up'
    }
  },
  data: {
    controlArray: []
  },
  attached: function attached() {
    this.data.selfAutoplay = Number(this.data.autoplay);
    this.data.selfSpeed = Number(this.data.speed);
  },

  methods: {
    _getAllLi: function _getAllLi() {
      return this.getRelationNodes('../../ui-roller-item/dist/index');
    },
    _updateView: function _updateView() {
      var _this = this;

      // 開始更新视图
      setInterval(function () {
        _this.data.controlArray = _this.data.controlArray.map(function (x) {
          return x - 1;
        }); // 每一个坐标都减一
        // console.log('减一设置开始')

        for (var i = 0; i < _this.data.childNodes.length; i++) {
          _this.data.childNodes[i].setData({ // 赋值给子元素,让子元素进行有动画的
            animate: true,
            position: _this.data.controlArray[i]
          });
        }
        // console.log('减一设置结束')
        setTimeout(function () {
          // 滚动动画完成后的回调函数,把位列-1的变成最后一个
          _this.data.controlArray = _this.data.controlArray.map(function (x) {
            return x === -1 ? _this.data.childLength - 1 : x;
          }); // 
          // console.log('变二设置开始')

          for (var _i = 0; _i < _this.data.childNodes.length; _i++) {
            if (_this.data.controlArray[_i] === _this.data.childLength - 1) {
              _this.data.childNodes[_i].setData({
                animate: false,
                position: _this.data.controlArray[_i]
              });
            }
          }
          // console.log('变二设置结束')
        }, _this.data.selfSpeed); // 滚动动画速度
      }, this.data.selfAutoplay); // 间隔
    }
  },
  ready: function ready() {
    this.data.childNodes = this._getAllLi();
    this.data.childLength = this.data.childNodes.length;
    for (var i = 0; i < this.data.childNodes.length; i++) {
      this.data.controlArray[i] = i;
      var node = this.data.childNodes[i];
      node.setData({
        position: i,
        height: this.data.height,
        direction: this.data.direction,
        speed: this.data.selfSpeed
      });
    }
    this._updateView();
  }
});