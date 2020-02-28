require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([66],{

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(623);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(625);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_dd277e80_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(626);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(624)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dd277e80"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_dd277e80_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\QandA\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd277e80", Component.options)
  } else {
    hotAPI.reload("data-v-dd277e80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 624:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 625:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      qaList: [{
        answerList: [{}, {}]
      }, {
        answerList: [{}, {}]
      }]
    };
  },

  methods: {}
});

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "QA-content"
  }, [_c('div', {
    staticClass: "QA-body"
  }, _vm._l((_vm.qaList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "QA-box"
    }, [_c('div', {
      staticClass: "title-content"
    }, [_c('div', {
      staticClass: "question"
    }, [_c('p', {
      staticClass: "icon"
    }, [_vm._v("问")]), _vm._v(" "), _c('p', {
      staticClass: "title"
    }, [_vm._v("社区离地铁有多远")])], 1), _vm._v(" "), _c('p', {
      staticClass: "createTime"
    }, [_vm._v("2019-10-10")])], 1), _vm._v(" "), _vm._l((item.answerList), function(itm, idx) {
      return _c('div', {
        key: idx,
        staticClass: "answer-cells"
      }, [_c('p', [_c('image', {
        staticClass: "headImg",
        attrs: {
          "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/user.png"
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "answer-body"
      }, [_c('p', {
        staticClass: "phone"
      }, [_vm._v("133***4514")]), _vm._v(" "), _c('p', {
        staticClass: "answer"
      }, [_vm._v("就在地铁A出口50米的样子")])], 1), _vm._v(" "), _c('p', {
        staticClass: "createTime"
      }, [_vm._v("2019-10-10")])], 1)
    })], 2)
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-dd277e80", esExports)
  }
}

/***/ })

},[622]);