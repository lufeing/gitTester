require("../../../../common/manifest.js")
require("../../../../common/vendor.js")
global.webpackJsonpMpvue([96],{

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(381);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5fde0828_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(384);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(382)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5fde0828"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5fde0828_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\center\\personalData\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5fde0828", Component.options)
  } else {
    hotAPI.reload("data-v-5fde0828", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 382:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_wxApi__ = __webpack_require__(20);




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
      paramObj: {
        headImg: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/user.png'
      },
      dateObj: {
        beginDate: '',
        endDate: ''
      }
    };
  },
  onShow: function onShow() {
    this.getMemberById();
  },

  methods: {
    getMemberById: function getMemberById() {
      var _this = this;

      var _ref = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* mpvueGetStorageSync */])('memberObj') || {},
          memberId = _ref.memberId;

      this.$API.getMemberById({ memberId: memberId }).then(function (_ref2) {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
            res = _ref3[0],
            msg = _ref3[1];

        _this.paramObj = res;
        _this.paramObj.nickName = _this.paramObj.nickName ? _this.paramObj.nickName : '';
        _this.paramObj.email = _this.paramObj.email ? _this.paramObj.email : '';
      });
    },

    // 将签名存为图片传给后台
    editHeadImage: function editHeadImage() {
      var _this2 = this;

      var itemsParam = global.mpvuePlatform === 'wx' ? { itemList: ['拍照', '从手机相册选择'] } : { items: ['拍照', '从手机相册选择'] };
      global.mpvue.showActionSheet(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, itemsParam, {
        success: function success(res) {
          Object(__WEBPACK_IMPORTED_MODULE_5__utils_wxApi__["a" /* uploadImage */])({
            source: res.tapIndex,
            portUrl: 'storage/image/upload',
            formData: { imageType: 'avatar' },
            fn: _this2.updateMember
          });
        },
        fail: function fail(res) {
          console.log(res.errMsg);
        }
      }));
    },
    updateMember: function updateMember(params) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _mpvueGetStorageSync, memberId;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* mpvueGetStorageSync */])('memberObj'), memberId = _mpvueGetStorageSync.memberId;
                _context.next = 3;
                return _this3.$API.updateMember({ memberId: memberId, headImg: params }).then(function (_ref4) {
                  var _ref5 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref4, 2),
                      res = _ref5[0],
                      msg = _ref5[1];

                  return res.headImg;
                });

              case 3:
                _this3.paramObj.headImg = _context.sent;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this3);
      }))();
    }
  }
});

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "transactioin-detail-content"
  }, [_c('div', {
    staticClass: "wallet-body-cell"
  }, [_c('div', {
    staticClass: "box",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.editHeadImage
    }
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("头像")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('image', {
    staticClass: "headImg",
    attrs: {
      "src": _vm.paramObj.headImg
    }
  }), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)]), _vm._v(" "), _c('navigator', {
    staticClass: "box",
    attrs: {
      "url": '/pages/center/personalData/nickName/main?nickName=' + _vm.paramObj.nickName
    }
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("昵称")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.paramObj.nickName))]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)]), _vm._v(" "), _c('navigator', {
    staticClass: "box",
    attrs: {
      "url": '/pages/center/personalData/mailBox/main?email=' + _vm.paramObj.email
    }
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("邮箱")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.paramObj.email))]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)]), _vm._v(" "), _c('navigator', {
    staticClass: "box",
    attrs: {
      "url": _vm.paramObj.isReal ? '/pages/verify/success/main' : '/pages/verify/index/main'
    }
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("实名认证")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.paramObj.isReal ? '已认证' : '未认证'))]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)]), _vm._v(" "), _c('navigator', {
    staticClass: "box",
    attrs: {
      "url": "/pages/center/contacts/main"
    }
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("紧急联系人")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.paramObj.contactsName ? '已填写' : '未填写'))]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5fde0828", esExports)
  }
}

/***/ })

},[380]);