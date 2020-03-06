require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([102],{

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(333);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5c06d479_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(336);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(334)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5c06d479"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5c06d479_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\center\\changePhone\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c06d479", Component.options)
  } else {
    hotAPI.reload("data-v-5c06d479", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 334:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_md5__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_js_md5__);



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
    return {
      tabsIndex: 0,
      isDisabled: true,
      paramsobj: {
        oldPhone: '',
        newPhone: '',
        verification: ''
      },
      codeText: '获取验证码',
      codeDisabled: false,
      interval: ''
    };
  },
  onShow: function onShow() {
    var _this = this;

    this.codeText = '获取验证码';
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_keys___default()(this.paramsobj).forEach(function (key) {
      _this.paramsobj[key] = '';
    });
  },
  onUnload: function onUnload() {
    this.codeText = '获取验证码';
    clearInterval(this.interval);
  },

  methods: {
    sendSms: function sendSms() {
      var _this2 = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$source = _ref.source,
          source = _ref$source === undefined ? 'maMall' : _ref$source;

      var _paramsobj = this.paramsobj,
          oldPhone = _paramsobj.oldPhone,
          newPhone = _paramsobj.newPhone;

      if (!this.checkOldPhone(oldPhone)) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["s" /* showModal */])({
          content: '你输入的旧手机号码有误,请重新输入'
        });
        return false;
      }
      if (Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["b" /* checkPhone */])(newPhone)) {
        var header = { 'Content-Type': 'application/x-www-form-urlencoded' };
        this.$API.SendSms({ source: source, phone: newPhone }, header).then(function (_ref2) {
          var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
              res = _ref3[0],
              msg = _ref3[1];

          _this2.getCode();
          _this2.isDisabled = false;
        });
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["s" /* showModal */])({
          content: '您输入的手机号码格式有误'
        });
      }
    },

    // 验证码倒计时函数
    getCode: function getCode() {
      var _this3 = this;

      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$currentTime = _ref4.currentTime,
          currentTime = _ref4$currentTime === undefined ? 60 : _ref4$currentTime;

      this.codeDisabled = true;
      this.interval = setInterval(function () {
        _this3.codeText = currentTime - 1 + '秒';
        currentTime -= 1;
        if (currentTime <= 0) {
          clearInterval(_this3.interval);
          _this3.codeText = '重新获取';
          _this3.codeDisabled = false;
          currentTime = 60;
        }
      }, 1000);
    },
    changeMemberPhone: function changeMemberPhone() {
      var verification = this.paramsobj.verification;

      if (verification.length === 6) {
        verification = __WEBPACK_IMPORTED_MODULE_4_js_md5___default()(verification);
        this.$API.changeMemberPhone(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, this.paramsobj, { verification: verification })).then(function (_ref5) {
          var _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
              res = _ref6[0],
              msg = _ref6[1];

          Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["t" /* showSuccessToast */])({ msg: msg });
        });
      }
    },
    checkOldPhone: function checkOldPhone(oldPhone) {
      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["l" /* mpvueGetStorageSync */])('memberObj'),
          phone = _mpvueGetStorageSync.phone;

      return phone === oldPhone;
    },
    clearInput: function clearInput(position) {
      this.paramsobj[position] = '';
    },
    bindUsernameInput: function bindUsernameInput(e, positoin) {
      var value = e.mp.detail.value;
      this.paramsobj[positoin] = value.replace(/[^\d]/g, '');
    },

    codeChange: function codeChange(e) {
      var value = e.mp.detail.value;
      this.paramsobj.verification = value.replace(/[^\d]/g, '');
      if (this.paramsobj.verification.length === 6) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    }
  }
});

/***/ }),

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "change-pass-content"
  }, [_c('div', {
    staticClass: "change-main"
  }, [_c('p', {
    staticClass: "label-title"
  }, [_vm._v("更换手机号码后，下次登录可使用新手机号码登录")]), _vm._v(" "), _c('div', {
    staticClass: "change-cell"
  }, [_c('image', {
    staticClass: "clear",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/clear.png",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.clearInput('oldPhone')
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.paramsobj.oldPhone),
      expression: "paramsobj.oldPhone"
    }],
    staticClass: "changeInput",
    attrs: {
      "type": "number",
      "placeholder": "旧手机号码",
      "placeholder-class": "plClass",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.paramsobj.oldPhone)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.paramsobj.oldPhone = $event.target.value
      }, function($event) {
        _vm.bindUsernameInput($event, 'oldPhone')
      }]
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "change-cell"
  }, [_c('image', {
    staticClass: "clear",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/clear.png",
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.clearInput('newPhone')
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.paramsobj.newPhone),
      expression: "paramsobj.newPhone"
    }],
    staticClass: "changeInput",
    attrs: {
      "type": "number",
      "placeholder": "新手机号码",
      "placeholder-class": "plClass",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.paramsobj.newPhone)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.paramsobj.newPhone = $event.target.value
      }, function($event) {
        _vm.bindUsernameInput($event, 'newPhone')
      }]
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "change-cell"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.paramsobj.verification),
      expression: "paramsobj.verification"
    }],
    staticClass: "changeInput",
    attrs: {
      "type": "number",
      "maxlength": "6",
      "placeholder": "验证码",
      "placeholder-class": "plClass",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.paramsobj.verification)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.paramsobj.verification = $event.target.value
      }, _vm.codeChange]
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "getverification",
    attrs: {
      "disabled": _vm.codeDisabled,
      "eventid": '5'
    },
    on: {
      "click": _vm.sendSms
    }
  }, [_vm._v(_vm._s(_vm.codeText))])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "footer-content"
  }, [_c('button', {
    staticClass: "sure-submit-button",
    class: _vm.isDisabled ? 'garyBack' : '',
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.changeMemberPhone
    }
  }, [_vm._v("确认更换")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5c06d479", esExports)
  }
}

/***/ })

},[332]);