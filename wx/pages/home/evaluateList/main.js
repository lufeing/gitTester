require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([64],{

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(577);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4b478da8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(580);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(578)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4b478da8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4b478da8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\evaluateList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b478da8", Component.options)
  } else {
    hotAPI.reload("data-v-4b478da8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 578:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      param: {
        current: 1,
        size: 10,
        pages: 0
      },
      qaList: []
    };
  },
  onShow: function onShow() {
    this.qaList = [];
    this.getMiniMemberCommentPage();
  },
  onReachBottom: function onReachBottom() {
    this.param.current = Number(this.param.current) + 1;
    this.getMiniMemberCommentPage();
  },

  methods: {
    getMiniMemberCommentPage: function getMiniMemberCommentPage() {
      var _this = this;

      var _param = this.param,
          current = _param.current,
          size = _param.size;
      var communityId = this.$root.$mp.query.communityId;

      var data = {
        communityId: communityId,
        current: current,
        size: size,
        operationType: 1
      };
      this.$API.getMiniMemberCommentPage(data).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        var pages = res.pages,
            current = res.current;

        _this.param = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(_this.param, {
          pages: pages, current: current
        });
        if (res.records.length !== 0) {
          _this.qaList = [].concat(_this.qaList, res.records);
        }
      });
    }
  }
});

/***/ }),

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "evaluate-content"
  }, [_c('div', {
    staticClass: "evaluate-body"
  }, _vm._l((_vm.qaList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "evaluate-box"
    }, [_c('div', {
      staticClass: "evaluate-title"
    }, [_c('p', {
      staticClass: "evaluate-name"
    }, [_vm._v(_vm._s(item.memberName))]), _vm._v(" "), _c('p', _vm._l((5), function(itm, idx) {
      return _c('span', {
        key: idx,
        staticClass: "evaluate-light",
        class: {
          evaluateGray: (idx + 1) > item.commentStar
        }
      })
    })), _vm._v(" "), _c('p', {
      staticClass: "createTime"
    }, [_vm._v(_vm._s(item.createTime))])], 1), _vm._v(" "), _c('div', {
      staticClass: "evaluate-details"
    }, [_vm._v("\n        " + _vm._s(item.commentDetails || '这个家伙很懒，什么都没有留下...') + "\n      ")])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4b478da8", esExports)
  }
}

/***/ })

},[576]);