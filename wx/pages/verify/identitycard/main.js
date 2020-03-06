require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([19],{

/***/ 887:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(888);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 888:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(890);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_17cdeaf6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(891);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(889)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-17cdeaf6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_17cdeaf6_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\verify\\identitycard\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-17cdeaf6", Component.options)
  } else {
    hotAPI.reload("data-v-17cdeaf6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 889:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 890:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_wxApi__ = __webpack_require__(20);



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
      isDisabeld: true,
      BizToken: '',
      ocrIdentityCardId: '',
      paramsObj: {
        name: '',
        cardNo: ''
      },
      isFaceIdentify: false
    };
  },
  onUnload: function onUnload() {
    if (this.ocrIdentityCardId !== '' && this.isFaceIdentify === true) {
      this.livenessCompare();
      this.ocrIdentityCardId = '';
      this.isFaceIdentify = false;
    }
    this.paramsObj = {};
    this.isDisabeld = true;
  },

  methods: {
    showActionSheet: function showActionSheet() {
      var _this = this;

      var itemsParam = global.mpvuePlatform === 'wx' ? { itemList: ['拍照', '从手机相册选择'] } : { items: ['拍照', '从手机相册选择'] };
      global.mpvue.showActionSheet(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, itemsParam, {
        success: function success(res) {
          var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
              memberId = _mpvueGetStorageSync.memberId;

          Object(__WEBPACK_IMPORTED_MODULE_4__utils_wxApi__["a" /* uploadImage */])({
            source: res.tapIndex,
            portUrl: 'intelligent_image/ocrIdentityCard/recognitionFront',
            formData: { memberId: memberId },
            fn: _this.saveParams
          });
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      }));
    },
    saveParams: function saveParams(_ref) {
      var param = _ref.param;

      console.log(param);
      this.isDisabeld = false;
      this.ocrIdentityCardId = param.ocrIdentityCardId;
      var name = param.name,
          cardNo = param.cardNo;

      this.paramsObj = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(this.paramsObj, {
        name: name, cardNo: cardNo
      });
    },

    // 通知后台用户已经人脸识别认证
    livenessCompare: function livenessCompare() {
      var _mpvueGetStorageSync2 = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync2.memberId,
          memberName = _mpvueGetStorageSync2.memberName;

      var params = {
        ocrIdentityCardId: this.ocrIdentityCardId,
        memberId: memberId,
        name: memberName
      };
      this.$API.liveness(params).then(function (res) {
        global.mpvue.redirectTo({
          url: '/pages/verify/success/main'
        });
      });
    },
    getMemberById: function getMemberById() {
      var _mpvueGetStorageSync3 = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync3.memberId;

      this.$API.getMemberById({ memberId: memberId }).then(function (_ref2) {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
            res = _ref3[0],
            msg = _ref3[1];

        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["p" /* mpvueSetStorageSync */])('memberObj', res);
      });
    },
    gotoVerify: function gotoVerify() {
      var _this2 = this;

      /**
       * 调用实名核身功能
       */
      var t = this;

      var _mpvueGetStorageSync4 = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync4.memberId,
          memberName = _mpvueGetStorageSync4.memberName;

      var params = {
        ocrIdentityCardId: this.ocrIdentityCardId,
        memberId: memberId,
        name: memberName
      };
      this.$API.detectAuthForMemberId(params).then(function (_ref4) {
        var _ref5 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref4, 2),
            res = _ref5[0],
            msg = _ref5[1];

        _this2.isFaceIdentify = true;
        _this2.getMemberById();
        if (global.mpvuePlatform === 'wx') {
          global.mpvue.startVerify({
            // 传入的数据
            data: {
              token: res.bizToken // BizToken，每次验证都需要调用DetectAuth接口获取
              // endPath: "/pages/verify/verify" // 可选，如果传入该参数，验证成功或验证失败会跳转到该页面
            },
            // 验证成功后触发
            success: function success(data) {
              console.log('收到验证成功的回调');
              if (data.ErrorCode === 0) {
                t.livenessCompare();
              }
            },
            // 验证失败时触发
            fail: function fail(err) {
              setTimeout(function () {
                Object(__WEBPACK_IMPORTED_MODULE_3__utils__["s" /* showModal */])({
                  title: '收到验证失败的回调',
                  content: '' + err.ErrorMsg
                });
              }, 500);
            },
            complete: function complete(error) {
              console.log(error);
            }
          });
        } else {
          _this2.isFaceIdentify = false;
          _this2.livenessCompare();
        }
      });
    }
  }
});

/***/ }),

/***/ 891:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex-box-content"
  }, [_c('div', {
    staticClass: "flex-box-body"
  }, [_c('div', {
    staticClass: "space-box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.paramsObj.name),
      expression: "paramsObj.name"
    }],
    staticClass: "inputClass",
    attrs: {
      "type": "text",
      "disabled": _vm.isDisabeld,
      "placeholder": "点击右边按钮上传身份证",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.paramsObj.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.paramsObj.name = $event.target.value
      }
    }
  }), _vm._v(" "), _c('p', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.showActionSheet
    }
  }, [_vm._v("拍摄身份证")])], 1), _vm._v(" "), _c('div', {
    staticClass: "space-box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.paramsObj.cardNo),
      expression: "paramsObj.cardNo"
    }],
    staticClass: "inputClass",
    attrs: {
      "type": "idcard",
      "disabled": _vm.isDisabeld,
      "placeholder": "点击右边按钮上传身份证",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.paramsObj.cardNo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.paramsObj.cardNo = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "flex-box-footer"
  }, [_c('button', {
    staticClass: "allow-button",
    class: _vm.isDisabeld ? 'disabeld' : '',
    attrs: {
      "disabled": _vm.isDisabeld,
      "eventid": '3'
    },
    on: {
      "click": _vm.gotoVerify
    }
  }, [_vm._v(_vm._s(_vm.mpvuePlatform === 'wx' ? '开始实名' : '下一步'))])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-17cdeaf6", esExports)
  }
}

/***/ })

},[887]);