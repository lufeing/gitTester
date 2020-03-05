require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([73],{

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(511);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_71792210_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(514);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(512)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-71792210"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_71792210_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\contract\\test\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-71792210", Component.options)
  } else {
    hotAPI.reload("data-v-71792210", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 512:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      point: {},
      ctx: {},
      interval: ''
    };
  },
  onShow: function onShow() {
    this.point = {
      x: Math.random() * 590,
      y: Math.random() * 590,
      dx: Math.random() * 10,
      dy: Math.random() * 10,
      r: Math.round(Math.random() * 255 | 0),
      g: Math.round(Math.random() * 255 | 0),
      b: Math.round(Math.random() * 255 | 0)
      // this.interval = setInterval(this.draw.bind(this), 17)
    };this.ctx = my.createCanvasContext('canvas');
  },

  methods: {
    draw: function draw() {
      var ctx = this.ctx;

      ctx.setFillStyle('#FFF');
      ctx.fillRect(0, 0, 610, 610);

      ctx.beginPath();
      ctx.arc(this.point.x, this.point.y, 20, 0, 2 * Math.PI);
      ctx.setFillStyle('rgb(' + this.point.r + ', ' + this.point.g + ', ' + this.point.b + ')');
      ctx.fill();
      ctx.draw();

      this.point.x += this.point.dx;
      this.point.y += this.point.dy;
      if (this.point.x <= 10 || this.point.x >= 590) {
        this.point.dx = -this.point.dx;
        this.point.r = Math.round(Math.random() * 255 | 0);
        this.point.g = Math.round(Math.random() * 255 | 0);
        this.point.b = Math.round(Math.random() * 255 | 0);
      }

      if (this.point.y <= 10 || this.point.y >= 590) {
        this.point.dy = -this.point.dy;
        this.point.r = Math.round(Math.random() * 255 | 0);
        this.point.g = Math.round(Math.random() * 255 | 0);
        this.point.b = Math.round(Math.random() * 255 | 0);
      }
    },
    drawBall: function drawBall() {},
    log: function log(e) {
      if (e.touches && e.touches[0]) {
        console.log(e.type, e.touches[0].x, e.touches[0].y);
      } else {
        console.log(e.type);
      }
      this.test();
    },
    onUnload: function onUnload() {
      clearInterval(this.interval);
    },
    test: function test() {
      var ctx = my.createCanvasContext('canvas');
      // 画点
      // ctx.beginPath()
      // ctx.arc(20, 20, 2, 0, 2 * Math.PI)
      // ctx.setFillStyle('red')
      // ctx.fill()

      // ctx.beginPath()
      // ctx.arc(200, 20, 2, 0, 2 * Math.PI)
      // ctx.setFillStyle('lightgreen')
      // ctx.fill()

      // ctx.beginPath()
      // ctx.arc(20, 100, 2, 0, 2 * Math.PI)
      // ctx.arc(200, 100, 2, 0, 2 * Math.PI)
      // ctx.setFillStyle('blue')
      // ctx.fill()

      // ctx.setFillStyle('black')
      // ctx.setFontSize(12)

      // 画参考线
      // ctx.beginPath()
      // ctx.moveTo(20, 20)
      // ctx.lineTo(20, 100)
      // ctx.lineTo(150, 75)

      // ctx.moveTo(200, 20)
      // ctx.lineTo(200, 100)
      // ctx.lineTo(70, 75)
      // ctx.setStrokeStyle('#AAAAAA')
      // ctx.stroke()

      // 画二次曲线
      ctx.beginPath();
      ctx.setStrokeStyle('black');
      ctx.moveTo(20, 20);
      ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
      ctx.stroke();

      ctx.draw();
    }
  }
});

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('view', {
    staticClass: "page"
  }, [_c('view', {
    staticClass: "canvas-view"
  }, [_c('canvas', {
    staticClass: "canvas",
    attrs: {
      "id": "canvas",
      "width": "610",
      "height": "610",
      "eventid": '0'
    },
    on: {
      "touchStart": _vm.log,
      "touchMove": _vm.log,
      "touchEnd": _vm.log
    }
  })])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-71792210", esExports)
  }
}

/***/ })

},[510]);