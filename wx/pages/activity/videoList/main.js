require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([112],{

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(242);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_54eb2be4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(245);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(243)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54eb2be4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_54eb2be4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\activity\\videoList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54eb2be4", Component.options)
  } else {
    hotAPI.reload("data-v-54eb2be4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 243:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_reachBottomMixin_js__ = __webpack_require__(91);


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
  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_reachBottomMixin_js__["a" /* default */]],
  data: function data() {
    return {
      videoList: []
    };
  },
  onShow: function onShow() {
    this.videoList = [];
    this.getDataList();
  },

  methods: {
    getDataList: function getDataList() {
      var _this = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$showStatus = _ref.showStatus,
          showStatus = _ref$showStatus === undefined ? 1 : _ref$showStatus,
          _ref$vedioType = _ref.vedioType,
          vedioType = _ref$vedioType === undefined ? 0 : _ref$vedioType;

      var cityId = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('cityId');
      var size = this.size,
          current = this.current;

      this.$API.selectFunVedioMiniAppInfo({ cityId: cityId, showStatus: showStatus, vedioType: vedioType, size: size, current: current }).then(function (_ref2) {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
            res = _ref3[0],
            msg = _ref3[1];

        var pages = res.pages,
            records = res.records,
            total = res.total;

        _this.videoList = _this.videoList.concat(records);
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(_this, {
          pages: pages, total: total
        });
      });
    },
    naviToDetail: function naviToDetail(funVedioInfoId) {
      global.mpvue.navigateTo({
        url: '/pages/activity/videoDetail/main?funVedioInfoId=' + funVedioInfoId
      });
    }
  }
});

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "video-content"
  }, _vm._l((_vm.videoList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "video-box",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.naviToDetail(item.funVedioInfoId)
        }
      }
    }, [_c('header', {
      staticClass: "video_header"
    }, [_c('image', {
      staticClass: "coverImage",
      attrs: {
        "src": item.vedioPicUrl
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "videoTitle"
    }, [_vm._v(_vm._s(item.vedioTitle))])], 1), _vm._v(" "), _c('div', {
      staticClass: "target_details"
    }, [_c('div', {
      staticClass: "target_author"
    }, [_c('image', {
      staticClass: "headImage",
      attrs: {
        "src": item.communityHeadImageUrl
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "author"
    }, [_vm._v(_vm._s(item.communityName))])], 1), _vm._v(" "), _c('div', {
      staticClass: "target_operation"
    }, [_c('image', {
      staticClass: "operationImg",
      attrs: {
        "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/like.png",
        "mode": "widthFix"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "like_number mr15"
    }, [_vm._v(_vm._s(item.likeNum))])], 1)])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-54eb2be4", esExports)
  }
}

/***/ })

},[241]);