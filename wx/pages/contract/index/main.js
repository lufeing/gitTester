require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([79],{

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(481);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_599c48ea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(484);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(482)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-599c48ea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_599c48ea_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\contract\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-599c48ea", Component.options)
  } else {
    hotAPI.reload("data-v-599c48ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 482:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(3);





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
      dataList: [],
      contractStatusObj: {
        10: '草稿', 11: '用户创建草稿', 12: '等待确认', 20: '确认', 30: '生效', 31: '已付定金', 40: '终止', 50: '取消'
      },
      contractStatusList: [],
      checkMemberObj: {
        'isReal': true,
        'isContact': true
      },
      showNormalPage: false
    };
  },
  onShow: function onShow() {
    this.checkMemberInfoById();
    this.selectContractStatusList();
    this.selectContractListByMemberId();
  },

  methods: {
    // 获取合同状态lsit
    selectContractStatusList: function selectContractStatusList() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$API.selectContractStatusList().then(function (_ref) {
                  var _ref2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
                      res = _ref2[0],
                      msg = _ref2[1];

                  return res;
                });

              case 2:
                _this.contractStatusList = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    selectContractListByMemberId: function selectContractListByMemberId() {
      var _this2 = this;

      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync.memberId;

      var date = new Date().valueOf();
      this.$API.selectContractListByMemberId({ memberId: memberId, date: date }).then(function (_ref3) {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref3, 3),
            res = _ref4[0],
            msg = _ref4[1],
            showNormalPage = _ref4[2];

        _this2.dataList = res;
        _this2.showNormalPage = showNormalPage;
      });
    },
    contractHandle: function contractHandle(obj) {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var result;
        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.checkMemberInfoIsFulled();

              case 2:
                result = _context2.sent;

                console.log(result);

                if (!result) {
                  _context2.next = 14;
                  break;
                }

                _context2.t0 = obj.contractStatus;
                _context2.next = _context2.t0 === 12 ? 8 : _context2.t0 === 20 ? 10 : 12;
                break;

              case 8:
                global.mpvue.navigateTo({
                  url: '/pages/contract/contractDetail/main?rentalContractId=' + obj.rentalContractId
                });
                return _context2.abrupt('break', 14);

              case 10:
                global.mpvue.navigateTo({
                  url: '/pages/contract/plan/main?rentalContractId=' + obj.rentalContractId + '&communityId=' + obj.communityId
                });

                return _context2.abrupt('break', 14);

              case 12:
                global.mpvue.navigateTo({
                  url: '/pages/contract/efficientContract/main?rentalContractId=' + obj.rentalContractId
                });
                return _context2.abrupt('break', 14);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    checkMemberInfoIsFulled: function checkMemberInfoIsFulled() {
      var _this4 = this;

      var _checkMemberObj = this.checkMemberObj,
          isReal = _checkMemberObj.isReal,
          isContact = _checkMemberObj.isContact;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_keys___default()({ isReal: isReal, isContact: isContact }).every(function (item, index) {
        var obj = _this4.checkMap.get(item);
        console.log(obj);
        if (obj && !obj.isComplete) {
          global.mpvue.navigateTo({
            url: obj.url
          });
          return false;
        } else {
          return true;
        }
      });
    },
    checkMemberInfoById: function checkMemberInfoById() {
      var _this5 = this;

      var _mpvueGetStorageSync2 = Object(__WEBPACK_IMPORTED_MODULE_5__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync2.memberId;

      this.$API.checkMemberInfoById({ memberId: memberId }).then(function (_ref5) {
        var _ref6 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
            res = _ref6[0],
            msg = _ref6[1];

        console.log(res);
        var checkMap = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map___default.a([['isReal', { isComplete: res.isReal, url: '/pages/verify/index/main' }], ['isContact', { isComplete: res.isFull, url: '/pages/center/contacts/main' }]]);
        _this5.checkMap = checkMap;
      });
    },
    naviToUrl: function naviToUrl(rentalContractId, url) {
      global.mpvue.navigateTo({
        url: url + '?rentalContractId=' + rentalContractId
      });
    }
  }
});

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showNormalPage) ? _c('div', {
    staticClass: "contract-list-content"
  }, _vm._l((_vm.dataList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "contract-list-area",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.contractHandle(item)
        }
      }
    }, [(item.contractStatus != 10 && item.contractStatus != 11) ? _c('div', [_c('div', {
      staticClass: "header"
    }, [_c('p', {
      staticClass: "label-title"
    }, [_vm._v(_vm._s(item.contractStatus < 30 ? '合同未生效' : '合同状态'))]), _vm._v(" "), _c('p', {
      staticClass: "contract-status"
    }, [_vm._v(_vm._s(_vm.contractStatusObj[item.contractStatus]))])], 1), _vm._v(" "), _c('div', {
      staticClass: "body"
    }, [_c('p', [_c('image', {
      staticClass: "imgClass",
      attrs: {
        "src": item.communityImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contract-column"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.communityName))]), _vm._v(" "), _c('div', {
      staticClass: "detail-message"
    }, [_c('p', [_vm._v("房间号：" + _vm._s(item.rentRelateName))]), _vm._v(" "), _c('p', [_vm._v("租金：" + _vm._s(item.rental) + "元/月")])], 1), _vm._v(" "), _c('div', {
      staticClass: "detail-message"
    }, [_c('p', [_vm._v("入住日期：" + _vm._s(item.startDate))]), _vm._v(" "), _c('p', [_vm._v("到期日期：" + _vm._s(item.endDate))])], 1)], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "footer"
    }, [(item.contractSource == 0 && item.contractStatus == 20) ? _c('p', [_vm._v("\n            *请于" + _vm._s(item.autoCancelTime) + "之前确认支付，否则系统将视为自动放弃\n          ")]) : _vm._e()], 1)]) : _vm._e()])
  })) : _c('NullComponent', {
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-599c48ea", esExports)
  }
}

/***/ })

},[480]);