require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([18],{

/***/ 892:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(893);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 893:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(895);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0dc12e5e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(899);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(894)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0dc12e5e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_0dc12e5e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\verify\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0dc12e5e", Component.options)
  } else {
    hotAPI.reload("data-v-0dc12e5e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 894:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 895:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__success_index__ = __webpack_require__(105);

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
      protectioninfo: [], // 护照的认证详情
      isDisabeld: true,
      BizToken: '',
      ocrIdentityCardId: '',
      paramsObj: {
        name: '',
        cardNo: ''
      }
    };
  },

  components: { Success: __WEBPACK_IMPORTED_MODULE_2__success_index__["a" /* default */] },
  methods: {
    // 跳转到页面
    naviToUrl: function naviToUrl() {
      global.mpvue.navigateTo({
        url: '/pages/verify/protection/main'
      });
    },
    statetopage: function statetopage() {
      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync.memberId;

      this.$API.selectByMemberId({ memberId: memberId }).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        console.log(res);
        // 没查到数据，说明之前没有上传过//总体的判断逻辑有问题，这里先不改动
        if (res == null) {
          global.mpvue.navigateTo({
            url: '/pages/verify/protection/main'
          });
        } else {
          // isupload:false：不允许上传，可能情况：上传过，成功了；上传了，正在审核
          // true:允许上传
          // 允许的时候：失败
          if (res.isUpload === true) {
            global.mpvue.navigateTo({
              url: '/pages/verify/fail/main'
            });
          } else if (res.isUpload === false) {
            // 不允许的时候，可能成功了，也可能是在审核中，暂时归档在成功中
            global.mpvue.navigateTo({
              url: '/pages/verify/success/main'
            });
          }
        }
      });
    },
    selectCheckStatusList: function selectCheckStatusList() {
      this.$API.selectCheckStatusList({}).then(function (_ref3) {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
            res = _ref4[0],
            msg = _ref4[1];
      });
    }
  }
});

/***/ }),

/***/ 899:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex-box-content"
  }, [_c('img', {
    staticClass: "header-logo",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/verify/sfrz.png"
    }
  }), _vm._v(" "), _c('navigator', {
    staticClass: "identitycard",
    attrs: {
      "url": "/pages/verify/identitycard/main"
    }
  }, [_vm._v("身份证认证")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "protection-container",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.naviToUrl
    }
  }, [_vm._v("其他证件认证")])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "note-area"
  }, [_c('span', {
    staticClass: "left-border"
  }), _vm._v(" "), _c('span', {
    staticClass: "center-description"
  }, [_vm._v("非身份证和异常认证")]), _vm._v(" "), _c('span', {
    staticClass: "right-border"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-0dc12e5e", esExports)
  }
}

/***/ })

},[892]);