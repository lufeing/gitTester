require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([87],{

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(428);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_38e73526_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(431);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(429)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-38e73526"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_38e73526_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\clean\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-38e73526", Component.options)
  } else {
    hotAPI.reload("data-v-38e73526", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 429:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(3);

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

  methods: {
    navitoUrl: function navitoUrl(url) {
      global.mpvue.navigateTo({
        url: url
      });
    },
    selectEfficientContractListByMemberId: function selectEfficientContractListByMemberId(url) {
      var _this = this;

      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync.memberId;

      this.$API.selectEfficientContractListByMemberId({ memberId: memberId }).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        if (res.length) {
          _this.navitoUrl(url);
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils_index__["s" /* showModal */])({
            content: '你目前无生效合同,无法发起清洁服务'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "clean-content"
  }, [_c('div', {
    staticClass: "clean-body"
  }, [_c('p', [_c('button', {
    staticClass: "handle-button apply",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.selectEfficientContractListByMemberId('/pages/clean/addCleanApply/main')
      }
    }
  }, [_vm._v("发起新预约")])], 1), _vm._v(" "), _c('p', [_c('button', {
    staticClass: "handle-button list",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.navitoUrl('/pages/clean/applyList/main')
      }
    }
  }, [_vm._v("查看已有预约")])], 1), _vm._v(" "), _c('div', {
    staticClass: "clean-tips"
  }, [_c('p', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.navitoUrl('/pages/clean/process/main')
      }
    }
  }, [_vm._v("清洁服务流程")])], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-38e73526", esExports)
  }
}

/***/ })

},[427]);