require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([110],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(263);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_02bfc314_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(266);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(264)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-02bfc314"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_02bfc314_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\auth\\wxLogin\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02bfc314", Component.options)
  } else {
    hotAPI.reload("data-v-02bfc314", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 264:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_finalLoginMixin__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_customModal_vue__ = __webpack_require__(94);
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
  mixins: [__WEBPACK_IMPORTED_MODULE_1__mixins_finalLoginMixin__["a" /* default */]],
  components: { CustomModal: __WEBPACK_IMPORTED_MODULE_2__components_customModal_vue__["a" /* default */] },
  data: function data() {
    return {
      loginText: '微信登录',
      prexUrl: ''
    };
  },
  onLoad: function onLoad(options) {
    if (global.mpvuePlatform === 'my') {
      this.loginText = '支付宝登录';
    } else {
      this.loginText = '微信登录';
    }
  },

  methods: {
    wcLogin: function wcLogin() {
      Object(__WEBPACK_IMPORTED_MODULE_0__utils___["m" /* mpvueLogin */])({
        portUrl: 'memauth/verify/loginByMiniAppCommunity',
        params: { auth_type: 'maCommunity' },
        callback: this.callbackForLogined
      });
    },
    noteLogin: function noteLogin() {
      global.mpvue.redirectTo({
        url: '/pages/auth/phoneLogin/main'
      });
    },
    returnBack: function returnBack() {
      global.mpvue.switchTab({
        url: '/pages/home/index/main'
      });
    },
    getVisible: function getVisible(visible) {
      this.visible = visible;
    }
  }
});

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "form-box"
  }, [_c('image', {
    staticClass: "logo",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/auth/logo.png"
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "login-btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.wcLogin
    }
  }, [_vm._v(_vm._s(_vm.loginText))]), _vm._v(" "), _c('div', {
    staticClass: "login",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.noteLogin
    }
  }, [_vm._v("短信登录")])], 1), _vm._v(" "), _c('CustomModal', {
    attrs: {
      "visible": _vm.visible,
      "wxGetUserInfo": _vm.wxGetUserInfo,
      "rediToCenterPage": _vm.rediToCenterPage,
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "getVisible": _vm.getVisible
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "officalLogo"
  }, [_c('image', {
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/auth/wq_logo.png",
      "mode": "widthFix"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-02bfc314", esExports)
  }
}

/***/ })

},[262]);