require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([91],{

/***/ 405:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(406);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(408);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b37006d8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(409);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(407)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b37006d8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b37006d8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\center\\wallet\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b37006d8", Component.options)
  } else {
    hotAPI.reload("data-v-b37006d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 407:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 408:
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
    return {};
  },
  created: function created() {}
});

/***/ }),

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wallet-content"
  }, [_c('div', {
    staticClass: "wallet-header"
  }, [_c('div', {
    staticClass: "wallet-header-item"
  }, [_c('div', {
    staticClass: "price-box"
  }, [_c('p', {
    staticClass: "price"
  }, [_vm._v("¥1000.00")]), _vm._v(" "), _c('p', {
    staticClass: "state"
  }, [_vm._v("可用余额(元)")])], 1), _vm._v(" "), _c('button', {
    staticClass: "wallet-recharge"
  }, [_vm._v("充值")])], 1), _vm._v(" "), _c('div', {
    staticClass: "wallet-header-item"
  }, [_c('div', {
    staticClass: "price-box"
  }, [_c('p', {
    staticClass: "price"
  }, [_vm._v("¥3000.00")]), _vm._v(" "), _c('p', {
    staticClass: "state"
  }, [_vm._v("冻结余额(元)")])], 1), _vm._v(" "), _c('button', {
    staticClass: "wallet-deposit"
  }, [_vm._v("提现")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "wallet-body"
  }, [_c('div', {
    staticClass: "wallet-body-cell"
  }, [_c('navigator', {
    staticClass: "box",
    attrs: {
      "url": "/pages/center/transactionDetail/main"
    }
  }, [_c('p', [_vm._v("交易明细")]), _vm._v(" "), _c('p', [_c('b', {
    staticClass: "arrow-right"
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "wallet-body-cell"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('p', [_vm._v("身份认证")]), _vm._v(" "), _c('div', {
    staticClass: "in-block"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v("已实名(张三)")]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('p', [_vm._v("我的银行卡")]), _vm._v(" "), _c('div', {
    staticClass: "in-block"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v("1张")]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "wallet-body-cell"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('p', [_vm._v("支付密码管理")]), _vm._v(" "), _c('p', [_c('b', {
    staticClass: "arrow-right"
  })], 1)], 1)])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b37006d8", esExports)
  }
}

/***/ })

},[405]);