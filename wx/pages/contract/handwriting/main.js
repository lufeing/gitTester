require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([15],{

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(474);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_661e0e25_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(478);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(475)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-661e0e25"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_661e0e25_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\contract\\handwriting\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-661e0e25", Component.options)
  } else {
    hotAPI.reload("data-v-661e0e25", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 475:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_handwriting_js__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils___ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_wxApi__ = __webpack_require__(19);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      selectColor: 'black',
      slideValue: 50,
      imgUrl: ''
    };
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function onLoad(options) {
    this.handwriting = new __WEBPACK_IMPORTED_MODULE_3__utils_handwriting_js__["a" /* default */](this, {
      lineColor: this.lineColor,
      slideValue: this.slideValue // 0, 25, 50, 75, 100
    });
  },
  methods: {
    confirmContractById: function confirmContractById(params) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var rentalContractId;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                rentalContractId = _this.$root.$mp.query.rentalContractId;

                _this.$API.confirmContractById({ rentalContractId: rentalContractId }).then(function (_ref) {
                  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
                      res = _ref2[0],
                      msg = _ref2[1];

                  _this.insuranceApplySave();
                  _this.Tracks.pageSaveParams({ serial: 11 });
                  global.mpvue.redirectTo({
                    url: '/pages/contract/plan/main?rentalContractId=' + rentalContractId
                  });
                }).catch(function (err) {
                  Object(__WEBPACK_IMPORTED_MODULE_4__utils___["s" /* showModal */])({
                    content: err
                  });
                });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    // 将签名存为图片传给后台
    subCanvas: function subCanvas() {
      var callBackFn = global.mpvuePlatform === 'my' ? this.toTempFilePath : this.canvasToTempFilePath;
      Object(__WEBPACK_IMPORTED_MODULE_4__utils___["s" /* showModal */])({
        content: '你确定开始上传签名？',
        fn: callBackFn
      });
    },
    canvasToTempFilePath: function canvasToTempFilePath() {
      var _this2 = this;

      global.mpvue.canvasToTempFilePath({
        canvasId: 'handWriting',
        success: function success(res) {
          _this2.mpvueUpload({
            tempFilePath: res.tempFilePath
          });
        }
      });
    },
    mpvueUpload: function mpvueUpload(_ref3) {
      var tempFilePath = _ref3.tempFilePath;
      var rentalContractId = this.$root.$mp.query.rentalContractId;

      Object(__WEBPACK_IMPORTED_MODULE_5__utils_wxApi__["d" /* wxUploadFile */])({
        portUrl: 'electronic_contract/electronicSignature/signature/upload',
        formData: { contractId: rentalContractId },
        fn: this.confirmContractById,
        tempFilePath: tempFilePath
      });
    },

    // 选择画笔颜色
    selectColorEvent: function selectColorEvent(event) {
      var color = event.currentTarget.dataset.colorValue;
      var colorSelected = event.currentTarget.dataset.color;
      this.setData({
        selectColor: colorSelected
      });
      this.handwriting.selectColorEvent(color);
    },
    retDraw: function retDraw() {
      this.handwriting.retDraw();
    },
    toTempFilePath: function toTempFilePath() {
      var ap = this.handwriting.toTempFilePath();
      console.log(ap);
    },

    // 笔迹粗细滑块
    onTouchStart: function onTouchStart(event) {
      console.log(this.handwriting);
      console.log(event);
      this.startY = event.mp.touches[0].clientY;
      this.startValue = this.format(this.slideValue);
    },
    onTouchMove: function onTouchMove(event) {
      var touch = event.mp.touches[0];
      this.deltaY = touch.clientY - this.startY;
      this.updateValue(this.startValue + this.deltaY);
    },
    onTouchEnd: function onTouchEnd() {
      this.updateValue(this.slideValue, true);
    },
    updateValue: function updateValue(slideValue, end) {
      slideValue = this.format(slideValue);
      this.slideValue = slideValue;
      this.handwriting.selectSlideValue(this.slideValue);
    },
    format: function format(value) {
      return Math.round(Math.max(0, Math.min(value, 100)) / 25) * 25;
    },
    insuranceApplySave: function insuranceApplySave() {
      var _this3 = this;

      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$autoInsurance = _ref4.autoInsurance,
          autoInsurance = _ref4$autoInsurance === undefined ? true : _ref4$autoInsurance;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var insuranceId, contractId;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                insuranceId = Object(__WEBPACK_IMPORTED_MODULE_4__utils___["l" /* mpvueGetStorageSync */])('insuranceId') || '';

                if (insuranceId) {
                  contractId = _this3.$root.$mp.query.rentalContractId;

                  _this3.$API.insuranceApplySave({ autoInsurance: autoInsurance, contractId: contractId, insuranceId: insuranceId }).then(function (_ref5) {
                    var _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
                        res = _ref6[0],
                        msg = _ref6[1];
                  });
                }

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    }
  }
});

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);



var Handwriting = function () {
  // 画圆的半径
  // 最小笔画半径
  // 顺滑度，用60的距离来计算速度
  // 透明度
  // 划线轨迹 ; 生成线条的实际点
  function Handwriting(pageContext, opts) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Handwriting);

    this.canvasName = 'handWriting';
    this.ctx = '';
    this.canvasWidth = 300;
    this.canvasHeight = 900;
    this.linePrack = [];
    this.currentLine = [];
    this.transparent = 1;
    this.pressure = 0.5;
    this.smoothness = 100;
    this.lineSize = 1.5;
    this.lineMin = 0.5;
    this.lineMax = 2;
    this.currentPoint = {};
    this.firstTouch = true;
    this.radius = 1;
    this.cutArea = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0 // 裁剪区域
    };
    this.lastPoint = 0;
    this.chirography = [];
    this.startY = 0;
    this.deltaY = 0;
    this.startValue = 0;

    this.page = pageContext;
    this.lineColor = opts.lineColor || '#1A1A1A'; // 颜色
    this.slideValue = opts.slideValue || 50;

    this.init();
    console.log(pageContext);
    this.page.uploadScaleStart = this.uploadScaleStart.bind(this); // 笔迹开始
    this.page.uploadScaleMove = this.uploadScaleMove.bind(this); // 笔迹移动
    this.page.uploadScaleEnd = this.uploadScaleEnd.bind(this); // 笔迹结束
    this.page.toTempFilePath = this.toTempFilePath.bind(this); // 笔迹结束
  } // 笔迹
  // 第一次触发
  // 最大笔画半径
  // 笔记倍数
  // 默认压力

  // 内置数据


  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Handwriting, [{
    key: 'init',
    value: function init() {
      var _this = this;

      this.ctx = global.mpvue.createCanvasContext(this.canvasName);
      var query = global.mpvue.createSelectorQuery();
      query.select('.handCenter').boundingClientRect(function (rect) {
        console.log(rect);
        _this.canvasWidth = rect.width;
        _this.canvasHeight = rect.height;
      }).exec();
      this.selectSlideValue(this.slideValue);
    }

    // 笔迹开始

  }, {
    key: 'uploadScaleStart',
    value: function uploadScaleStart(e) {
      // console.log(e.touches[0])
      if (!['touchstart', 'touchStart'].includes(e.type)) return false;
      this.ctx.setFillStyle(this.lineColor); // 初始线条设置颜色
      this.ctx.setGlobalAlpha(this.transparent); // 设置半透明
      this.currentPoint = {
        x: e.mp.touches[0].x,
        y: e.mp.touches[0].y
      };
      this.currentLine.unshift({
        time: new Date().getTime(),
        dis: 0,
        x: this.currentPoint.x,
        y: this.currentPoint.y
      });
      if (this.firstTouch) {
        this.cutArea = {
          top: this.currentPoint.y,
          right: this.currentPoint.x,
          bottom: this.currentPoint.y,
          left: this.currentPoint.x
        };
        this.firstTouch = false;
      }
      this.pointToLine(this.currentLine);
    }
    // 笔迹移动

  }, {
    key: 'uploadScaleMove',
    value: function uploadScaleMove(e) {
      if (!['touchmove', 'touchMove'].includes(e.type)) return false;
      if (e.cancelable) {
        // 判断默认行为是否已经被禁用
        if (!e.defaultPrevented) {
          e.preventDefault();
        }
      }
      var point = {
        x: e.touches[0].x,
        y: e.touches[0].y
        // 测试裁剪
      };if (point.y < this.cutArea.top) {
        this.cutArea.top = point.y;
      }
      if (point.y < 0) this.cutArea.top = 0;

      if (point.x > this.cutArea.right) {
        this.cutArea.right = point.x;
      }
      if (this.canvasWidth - point.x <= 0) {
        this.cutArea.right = this.canvasWidth;
      }
      if (point.y > this.cutArea.bottom) {
        this.cutArea.bottom = point.y;
      }
      if (this.canvasHeight - point.y <= 0) {
        this.cutArea.bottom = this.canvasHeight;
      }
      if (point.x < this.cutArea.left) {
        this.cutArea.left = point.x;
      }
      if (point.x < 0) this.cutArea.left = 0;

      this.lastPoint = this.currentPoint;
      this.currentPoint = point;
      this.currentLine.unshift({
        time: new Date().getTime(),
        dis: this.distance(this.currentPoint, this.lastPoint, 'move'),
        x: point.x,
        y: point.y
      });
      this.pointToLine(this.currentLine);
    }
    // 笔迹结束

  }, {
    key: 'uploadScaleEnd',
    value: function uploadScaleEnd(e) {
      if (!['touchend', 'touchEnd'].includes(e.type)) return 0;
      var point = {
        x: e.mp.changedTouches[0].x,
        y: e.mp.changedTouches[0].y
      };
      this.lastPoint = this.currentPoint;
      this.currentPoint = point;
      this.currentLine.unshift({
        time: new Date().getTime(),
        dis: this.distance(this.currentPoint, this.lastPoint, 'end'),
        x: point.x,
        y: point.y
      });
      if (this.currentLine.length > 2) {
        var info = (this.currentLine[0].time - this.currentLine[this.currentLine.length - 1].time) / this.currentLine.length;
        // $("#info").text(info.toFixed(2));
      }
      // 一笔结束，保存笔迹的坐标点，清空，当前笔迹
      // 增加判断是否在手写区域；
      this.pointToLine(this.currentLine);
      var currentChirography = {
        lineSize: this.lineSize,
        lineColor: this.lineColor
      };
      this.chirography.unshift(currentChirography);
      this.linePrack.unshift(this.currentLine);
      this.currentLine = [];
    }
  }, {
    key: 'retDraw',
    value: function retDraw() {
      this.ctx.clearRect(0, 0, 700, 730);
      this.ctx.draw();
    }
  }, {
    key: 'toTempFilePath',
    value: function toTempFilePath() {
      var _this2 = this;

      this.ctx.toTempFilePath({
        success: function success(res) {
          console.log(res.apFilePath);
          _this2.page.mpvueUpload({
            tempFilePath: res.apFilePath
          });
        }
      });
    }

    // 画两点之间的线条；参数为:line，会绘制最近的开始的两个点；

  }, {
    key: 'pointToLine',
    value: function pointToLine(line) {
      this.calcBethelLine(line);
      // this.calcBethelLine1(line);
    }
    // 计算插值的方式；

  }, {
    key: 'calcBethelLine',
    value: function calcBethelLine(line) {
      if (line.length <= 1) {
        line[0].r = this.radius;
        return;
      }
      var x0 = void 0,
          x1 = void 0,
          x2 = void 0,
          y0 = void 0,
          y1 = void 0,
          y2 = void 0,
          r0 = void 0,
          r1 = void 0,
          r2 = void 0,
          len = void 0,
          lastRadius = void 0,
          dis = 0,
          time = 0,
          curveValue = 0.5;
      if (line.length <= 2) {
        x0 = line[1].x;
        y0 = line[1].y;
        x2 = line[1].x + (line[0].x - line[1].x) * curveValue;
        y2 = line[1].y + (line[0].y - line[1].y) * curveValue;
        // x2 = line[1].x;
        // y2 = line[1].y;
        x1 = x0 + (x2 - x0) * curveValue;
        y1 = y0 + (y2 - y0) * curveValue;
      } else {
        x0 = line[2].x + (line[1].x - line[2].x) * curveValue;
        y0 = line[2].y + (line[1].y - line[2].y) * curveValue;
        x1 = line[1].x;
        y1 = line[1].y;
        x2 = x1 + (line[0].x - x1) * curveValue;
        y2 = y1 + (line[0].y - y1) * curveValue;
      }
      // 从计算公式看，三个点分别是(x0,y0),(x1,y1),(x2,y2) ；(x1,y1)这个是控制点，控制点不会落在曲线上；实际上，这个点还会手写获取的实际点，却落在曲线上
      len = this.distance({
        x: x2,
        y: y2
      }, {
        x: x0,
        y: y0
      }, 'calc');
      lastRadius = this.radius;
      for (var _n = 0; _n < line.length - 1; _n++) {
        dis += line[_n].dis;
        time += line[_n].time - line[_n + 1].time;
        if (dis > this.smoothness) break;
      }
      this.radius = Math.min(time / len * this.pressure + this.lineMin, this.lineMax) * this.lineSize;
      line[0].r = this.radius;
      // 计算笔迹半径；
      if (line.length <= 2) {
        r0 = (lastRadius + this.radius) / 2;
        r1 = r0;
        r2 = r1;
        // return;
      } else {
        r0 = (line[2].r + line[1].r) / 2;
        r1 = line[1].r;
        r2 = (line[1].r + line[0].r) / 2;
      }
      var n = 5;
      var point = [];
      for (var i = 0; i < n; i++) {
        var t = i / (n - 1);
        var x = (1 - t) * (1 - t) * x0 + 2 * t * (1 - t) * x1 + t * t * x2;
        var y = (1 - t) * (1 - t) * y0 + 2 * t * (1 - t) * y1 + t * t * y2;
        var r = lastRadius + (this.radius - lastRadius) / n * i;
        point.push({
          x: x,
          y: y,
          r: r
        });
        if (point.length == 3) {
          var a = this.ctaCalc(point[0].x, point[0].y, point[0].r, point[1].x, point[1].y, point[1].r, point[2].x, point[2].y, point[2].r);
          a[0].color = this.lineColor;
          this.bethelDraw(a, 1);
          point = [{
            x: x,
            y: y,
            r: r
          }];
        }
      }
    }
    // 求两点之间距离

  }, {
    key: 'distance',
    value: function distance(a, b, type) {
      var x = b.x - a.x;
      var y = b.y - a.y;
      return Math.sqrt(x * x + y * y) * 5;
    }
  }, {
    key: 'ctaCalc',
    value: function ctaCalc(x0, y0, r0, x1, y1, r1, x2, y2, r2) {
      var a = [],
          vx01 = void 0,
          vy01 = void 0,
          norm = void 0,
          n_x0 = void 0,
          n_y0 = void 0,
          vx21 = void 0,
          vy21 = void 0,
          n_x2 = void 0,
          n_y2 = void 0;
      vx01 = x1 - x0;
      vy01 = y1 - y0;
      norm = Math.sqrt(vx01 * vx01 + vy01 * vy01 + 0.0001) * 2;
      vx01 = vx01 / norm * r0;
      vy01 = vy01 / norm * r0;
      n_x0 = vy01;
      n_y0 = -vx01;
      vx21 = x1 - x2;
      vy21 = y1 - y2;
      norm = Math.sqrt(vx21 * vx21 + vy21 * vy21 + 0.0001) * 2;
      vx21 = vx21 / norm * r2;
      vy21 = vy21 / norm * r2;
      n_x2 = -vy21;
      n_y2 = vx21;
      a.push({
        mx: x0 + n_x0,
        my: y0 + n_y0,
        color: '#1A1A1A'
      });
      a.push({
        c1x: x1 + n_x0,
        c1y: y1 + n_y0,
        c2x: x1 + n_x2,
        c2y: y1 + n_y2,
        ex: x2 + n_x2,
        ey: y2 + n_y2
      });
      a.push({
        c1x: x2 + n_x2 - vx21,
        c1y: y2 + n_y2 - vy21,
        c2x: x2 - n_x2 - vx21,
        c2y: y2 - n_y2 - vy21,
        ex: x2 - n_x2,
        ey: y2 - n_y2
      });
      a.push({
        c1x: x1 - n_x2,
        c1y: y1 - n_y2,
        c2x: x1 - n_x0,
        c2y: y1 - n_y0,
        ex: x0 - n_x0,
        ey: y0 - n_y0
      });
      a.push({
        c1x: x0 - n_x0 - vx01,
        c1y: y0 - n_y0 - vy01,
        c2x: x0 + n_x0 - vx01,
        c2y: y0 + n_y0 - vy01,
        ex: x0 + n_x0,
        ey: y0 + n_y0
      });
      a[0].mx = a[0].mx.toFixed(1);
      a[0].mx = parseFloat(a[0].mx);
      a[0].my = a[0].my.toFixed(1);
      a[0].my = parseFloat(a[0].my);
      for (var i = 1; i < a.length; i++) {
        a[i].c1x = a[i].c1x.toFixed(1);
        a[i].c1x = parseFloat(a[i].c1x);
        a[i].c1y = a[i].c1y.toFixed(1);
        a[i].c1y = parseFloat(a[i].c1y);
        a[i].c2x = a[i].c2x.toFixed(1);
        a[i].c2x = parseFloat(a[i].c2x);
        a[i].c2y = a[i].c2y.toFixed(1);
        a[i].c2y = parseFloat(a[i].c2y);
        a[i].ex = a[i].ex.toFixed(1);
        a[i].ex = parseFloat(a[i].ex);
        a[i].ey = a[i].ey.toFixed(1);
        a[i].ey = parseFloat(a[i].ey);
      }
      return a;
    }
  }, {
    key: 'bethelDraw',
    value: function bethelDraw(point, is_fill, color) {
      this.ctx.beginPath();
      this.ctx.moveTo(point[0].mx, point[0].my);
      if (undefined !== color) {
        this.ctx.setFillStyle(color);
        this.ctx.setStrokeStyle(color);
      } else {
        this.ctx.setFillStyle(point[0].color);
        this.ctx.setStrokeStyle(point[0].color);
      }
      for (var i = 1; i < point.length; i++) {
        this.ctx.bezierCurveTo(point[i].c1x, point[i].c1y, point[i].c2x, point[i].c2y, point[i].ex, point[i].ey);
      }
      this.ctx.stroke();
      if (undefined !== is_fill) {
        this.ctx.fill(); // 填充图形 ( 后绘制的图形会覆盖前面的图形, 绘制时注意先后顺序 )
      }
      this.ctx.draw(true);
    }
  }, {
    key: 'selectColorEvent',
    value: function selectColorEvent(lineColor) {
      this.lineColor = lineColor;
    }
  }, {
    key: 'selectSlideValue',
    value: function selectSlideValue(slideValue) {
      switch (slideValue) {
        case 0:
          this.lineSize = 0.1;
          this.lineMin = 0.1;
          this.lineMax = 0.1;
          break;
        case 25:
          this.lineSize = 1;
          this.lineMin = 0.5;
          this.lineMax = 2;
          break;
        case 50:
          this.lineSize = 1.5;
          this.lineMin = 1;
          this.lineMax = 3;
          break;
        case 75:
          this.lineSize = 1.5;
          this.lineMin = 2;
          this.lineMax = 3.5;
          break;
        case 100:
          this.lineSize = 3;
          this.lineMin = 2;
          this.lineMax = 3.5;
          break;
      }
    }
  }]);

  return Handwriting;
}();

/* harmony default export */ __webpack_exports__["a"] = (Handwriting);

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "handBtn"
  }, [_vm._m(0), _vm._v(" "), _c('button', {
    staticClass: "delBtn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.retDraw
    }
  }, [_vm._v("重写")]), _vm._v(" "), _c('button', {
    staticClass: "subBtn",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.subCanvas
    }
  }, [_vm._v("完成")])], 1), _vm._v(" "), _c('div', {
    staticClass: "handCenter"
  }, [_c('canvas', {
    staticClass: "handWriting",
    attrs: {
      "disable-scroll": "true",
      "canvas-id": "handWriting",
      "id": "handWriting",
      "eventid": '2'
    },
    on: {
      "touchstart": _vm.uploadScaleStart,
      "touchmove": _vm.uploadScaleMove,
      "touchend": _vm.uploadScaleEnd,
      "touchStart": _vm.uploadScaleStart,
      "touchMove": _vm.uploadScaleMove,
      "touchEnd": _vm.uploadScaleEnd
    }
  })]), _vm._v(" "), _vm._m(1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "slide-wrapper"
  }, [_c('image', {
    staticClass: "slide",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/handwriting/slide.png"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "handRight"
  }, [_c('div', {
    staticClass: "handTitle"
  }, [_vm._v("手写板")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-661e0e25", esExports)
  }
}

/***/ })

},[473]);