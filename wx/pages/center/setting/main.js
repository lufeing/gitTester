require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([93],{

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(396);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3d0776aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(399);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(397)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3d0776aa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3d0776aa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\center\\setting\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d0776aa", Component.options)
  } else {
    hotAPI.reload("data-v-3d0776aa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 397:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index_js__ = __webpack_require__(3);

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
      tabsIndex: 0,
      tabsArr: ['全部', '收入', '支出'],
      dataList: [
      // {
      //   title:'修改密码',
      //   imgUrl:'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/user.png',
      //   naviUrl:'/pages/center/changePass/main'
      // },
      {
        title: '更换手机号码',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/user.png',
        naviUrl: '/pages/center/changePhone/main'
      }, {
        title: '关于我们',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/user.png',
        naviUrl: '/pages/center/aboutAs/main'
      }]
    };
  },

  methods: {
    logOut: function logOut() {
      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index_js__["l" /* mpvueGetStorageSync */])('memberObj'),
          phone = _mpvueGetStorageSync.phone;

      var accessToken = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index_js__["l" /* mpvueGetStorageSync */])('accessToken');
      this.$API.logOut({ phone: phone, accessToken: accessToken }).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        Object(__WEBPACK_IMPORTED_MODULE_1__utils_index_js__["o" /* mpvueRemoveStorageSync */])('memberObj');
        // let url = '/pages/auth/wxLogin/main'
        var url = '/pages/auth/phoneLogin/main';
        var skipType = 3;
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_index_js__["t" /* showSuccessToast */])({ msg: msg, url: url, skipType: skipType });
      });
    }
  }
});

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "transactioin-detail-content"
  }, [_c('div', {
    staticClass: "transactioin-detail-main"
  }, [_c('div', {
    staticClass: "wallet-body-cell"
  }, _vm._l((_vm.dataList), function(item, index) {
    return _c('navigator', {
      key: index,
      staticClass: "box",
      attrs: {
        "hover-class": "none",
        "url": item.naviUrl
      }
    }, [_c('div', {
      staticClass: "box-left"
    }, [_c('div', [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.title))])], 1)]), _vm._v(" "), _c('div', {
      staticClass: "box-right"
    }, [_c('b', {
      staticClass: "arrow-right"
    })], 1)])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "log-out-content"
  }, [_c('button', {
    staticClass: "logOut",
    attrs: {
      "plain": "true",
      "eventid": '0'
    },
    on: {
      "click": _vm.logOut
    }
  }, [_vm._v("退出登录")])], 1), _vm._v(" "), _c('div', {
    staticClass: "page-footer"
  }, [_c('p', [_vm._v("©2018 广州窝趣公寓管理有限公司版权所有")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3d0776aa", esExports)
  }
}

/***/ })

},[395]);