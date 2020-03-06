require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([71],{

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(529);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_2f6ae7b4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(532);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(530)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2f6ae7b4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_2f6ae7b4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\feedback\\complaintList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f6ae7b4", Component.options)
  } else {
    hotAPI.reload("data-v-2f6ae7b4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 530:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 531:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);


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
      complainList: [],
      isExpand: [],
      showNormalPage: true
    };
  },
  onShow: function onShow() {
    this.getMyComplaint();
  },

  methods: {
    getMyComplaint: function getMyComplaint() {
      var _this = this;

      this.$API.getMyComplaint().then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 3),
            res = _ref2[0],
            msg = _ref2[1],
            showNormalPage = _ref2[2];

        _this.showNormalPage = showNormalPage;
        _this.complainList = res;
        _this.isExpand(res.length).fill(false);
      });
    },
    naviToUrl: function naviToUrl(object) {
      var param = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(object);
      global.mpvue.navigateTo({
        url: '/pages/feedback/complaintDetail/main?param=' + param
      });
    },
    expand: function expand(listIndex) {
      this.isExpand[listIndex] = !this.isExpand[listIndex];
      this.isExpand = [].concat(this.isExpand);
    }
  }
});

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showNormalPage) ? _c('div', {
    staticClass: "my-complaint-content"
  }, [_c('div', {
    staticClass: "my-complaint-body"
  }, _vm._l((_vm.complainList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "my-complaint-cells"
    }, [_c('div', {
      staticClass: "complaint-box"
    }, [_c('p', [_vm._v("提交时间：")]), _vm._v(" "), _c('p', {
      staticClass: "center"
    }, [_vm._v(_vm._s(item.createTime))]), _vm._v(" "), _c('p', {
      staticClass: "state"
    }, [_vm._v(_vm._s(item.dealResultType == 10 ? '受理中' : '完成') + " ")])], 1), _vm._v(" "), _c('div', {
      staticClass: "complaint-box"
    }, [_c('p', [_vm._v("投诉问题：")]), _vm._v(" "), _c('p', {
      staticClass: "center"
    }, [_vm._v(_vm._s(item.complaintTitleName))])], 1), _vm._v(" "), _c('div', {
      staticClass: "complaint-box",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.expand(index)
        }
      }
    }, [_c('p', {
      staticClass: "minWid"
    }, [_vm._v("投诉内容：")]), _vm._v(" "), _c('div', {
      staticClass: "complaint-details"
    }, [_c('p', {
      staticClass: "introduce",
      class: _vm.isExpand[index] ? 'spread' : 'packUp'
    }, [_vm._v(_vm._s(item.complaintDetails))]), _vm._v(" "), _c('p', {
      staticClass: "downUp"
    }, [_vm._v(_vm._s(_vm.isExpand[index] ? '收起' : '查看更多'))])], 1)], 1)])
  }))]) : _c('NullComponent', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2f6ae7b4", esExports)
  }
}

/***/ })

},[528]);