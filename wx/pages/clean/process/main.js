require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([86],{

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(433);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4fd68a6c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(436);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(434)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4fd68a6c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4fd68a6c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\clean\\process\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4fd68a6c", Component.options)
  } else {
    hotAPI.reload("data-v-4fd68a6c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 434:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 435:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "clean-content"
  }, [_c('div', {}, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "process-body"
  }, [_c('image', {
    staticClass: "backgroud_middle",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/clean/process-state.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "process-state"
  }, [_c('div', {
    staticClass: "title-content"
  }, [_c('image', {
    staticClass: "defaultImg",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/clean/default.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("服务说明")]), _vm._v(" "), _c('image', {
    staticClass: "defaultImg",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/clean/default.png"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "artcile-body"
  }, [_c('p', {
    staticClass: "caps"
  }, [_vm._v("1、取消预约：在管家接单之前，您可在微信小程序上操作，在管家接单之后，则需要另外通知管家，进行关闭。")]), _vm._v(" "), _c('p', {
    staticClass: "caps"
  }, [_vm._v("2、费用：在完成清洁后，由于涉及到各个门店情况，您所住的房间大小，清洁程度，可能会导致实际清洁费用高于预约费用，详细情况建议询问所在的社区门店人员。")]), _vm._v(" "), _c('p', {
    staticClass: "caps"
  }, [_vm._v("3、支付：有两种方式供您选择：")]), _vm._v(" "), _c('p', [_vm._v("第一种，您可以选择单次支付服务产生的费用。")]), _vm._v(" "), _c('p', [_vm._v("第二种，可以跟月账单日时再统一支付。")]), _vm._v(" "), _c('p', [_vm._v("Tips,如若没有做选择或是及时支付，系统会自动录入账单日进行支付。")])], 1)])])])])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {}, [_c('image', {
    staticClass: "backgroud_top",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/clean/Backgroud_top.jpg"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4fd68a6c", esExports)
  }
}

/***/ })

},[432]);