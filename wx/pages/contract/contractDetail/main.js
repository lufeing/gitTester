require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([16],{

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(464);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_fc3df6fe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(468);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(465)
  __webpack_require__(466)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-fc3df6fe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_fc3df6fe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\contract\\contractDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fc3df6fe", Component.options)
  } else {
    hotAPI.reload("data-v-fc3df6fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 465:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);



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
      detailObj: {},
      certificate: {},
      isSure: true,
      insuranceId: '',
      sexObject: {
        0: '未知',
        1: '男',
        2: '女'
      },
      insuranceGoodsList: []
    };
  },
  mounted: function mounted() {
    this.selectWholeContract();
  },

  computed: {
    getCertificateTypeName: function getCertificateTypeName() {
      var _this = this;

      var certificateTypeId = this.detailObj.certificateTypeId;

      if (this.detailObj && certificateTypeId) {
        this.$API.getCertificateType().then(function (_ref) {
          var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
              res = _ref2[0],
              msg = _ref2[1];

          _this.certificate = res.find(function (item, index) {
            return item.certificateTypeId === certificateTypeId;
          });
        });
      }
      return '';
    }
  },
  methods: {
    selectWholeContract: function selectWholeContract() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var rentalContractId, params;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                rentalContractId = _this2.$root.$mp.query.rentalContractId;
                _context.next = 3;
                return _this2.$API.selectWholeContract({ rentalContractId: rentalContractId }).then(function (_ref3) {
                  var _ref4 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
                      res = _ref4[0],
                      msg = _ref4[1];

                  return res;
                });

              case 3:
                _this2.detailObj = _context.sent;
                _context.next = 6;
                return _this2.$API.getInsuranceGoodsList({ status: true }).then(function (_ref5) {
                  var _ref6 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
                      res = _ref6[0],
                      msg = _ref6[1];

                  return res;
                });

              case 6:
                _this2.insuranceGoodsList = _context.sent;
                params = _this2.insuranceGoodsList.find(function (item) {
                  return item.isDefault;
                });

                _this2.insuranceId = params.insuranceId;

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    cancelContractById: function cancelContractById() {
      var rentalContractId = this.$root.$mp.query.rentalContractId;

      this.$API.cancelContractById({ rentalContractId: rentalContractId }).then(function (_ref7) {
        var _ref8 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref7, 2),
            res = _ref8[0],
            msg = _ref8[1];

        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["t" /* showSuccessToast */])({ msg: msg });
      });
    },
    getBuyInfo: function getBuyInfo(e) {
      this.insuranceId = e.mp.detail.value;
      this.insuranceGoodsList.map(function (item) {
        if (item.insuranceId === e.mp.detail.value) {
          item.isDefault = true;
        } else {
          item.isDefault = false;
        }
      });
    },
    naviToUrl: function naviToUrl() {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils__["p" /* mpvueSetStorageSync */])('insuranceId', this.insuranceId);
      if (this.isSure) {
        global.mpvue.navigateTo({
          url: '/pages/contract/handwriting/main?rentalContractId=' + this.detailObj.rentalContractId
        });
      } else {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["s" /* showModal */])({
          content: '请阅读并勾选须知及规定按钮'
        });
      }
    },
    navitoInsurance: function navitoInsurance(_ref9) {
      var isDefault = _ref9.isDefault,
          rentalContractId = _ref9.rentalContractId;

      var tabsIndex = isDefault ? 1 : 0;
      wx.navigateTo({
        url: '/pages/insurance/renterInsurance/main?tabsIndex=' + tabsIndex + '&rentalContractId=' + rentalContractId
      });
    }
  }
});

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex-box-content"
  }, [_c('div', {
    staticClass: "flex-box-body bg_c5"
  }, [_c('div', {
    staticClass: "payment-plan-content"
  }, [_c('div', {
    staticClass: "payment-plan-main"
  }, [_c('p', {
    staticClass: "leftB-title"
  }, [_vm._v("付款计划")]), _vm._v(" "), _c('div', {
    staticClass: "detail-message"
  }, [_c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v("合同编号")]), _vm._v(" "), _c('p', {}, [_vm._v(_vm._s(_vm.detailObj.contractCode))])], 1), _vm._v(" "), _c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v("社区名称")]), _vm._v(" "), _c('p', {}, [_vm._v(_vm._s(_vm.detailObj.communityName))])], 1), _vm._v(" "), _c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "thin"
  }, [_vm._v("房间号")]), _vm._v(" "), _c('p', {}, [_vm._v(_vm._s(_vm.detailObj.rentRelateName))])], 1), _vm._v(" "), _c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "thin"
  }, [_vm._v("押金")]), _vm._v(" "), _c('p', {
    staticClass: "importance"
  }, [_vm._v(_vm._s(_vm.detailObj.deposit) + "元")])], 1), _vm._v(" "), (_vm.detailObj.margin) ? _c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "thin"
  }, [_vm._v("定金")]), _vm._v(" "), _c('p', {
    staticClass: "importance"
  }, [_vm._v(_vm._s(_vm.detailObj.margin) + "元")])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "thin"
  }, [_vm._v("租金")]), _vm._v(" "), _c('p', {
    staticClass: "importance"
  }, [_vm._v(_vm._s(_vm.detailObj.rental) + "元")])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "payment-plan-main"
  }, [_c('p', {
    staticClass: "leftB-title"
  }, [_vm._v("签约人信息")]), _vm._v(" "), _c('div', {
    staticClass: "detail-message"
  }, [_c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v("租用人")]), _vm._v(" "), _c('p', {}, [_vm._v(_vm._s(_vm.detailObj.renterName))])], 1), _vm._v(" "), _c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v("证件类型")]), _vm._v(" "), (_vm.certificate) ? _c('p', {}, [_vm._v(_vm._s(_vm.certificate.certificateTypeName))]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v("证件号码")]), _vm._v(" "), _c('p', {}, [_vm._v(_vm._s(_vm.detailObj.certificateNo))])], 1), _vm._v(" "), _c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v("性别")]), _vm._v(" "), _c('p', {}, [_vm._v(_vm._s(_vm.sexObject[_vm.detailObj.renterSex]))])], 1), _vm._v(" "), _c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v("电话号码")]), _vm._v(" "), _c('p', {}, [_vm._v(_vm._s(_vm.detailObj.renterPhone))])], 1), _vm._v(" "), _c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v("会员等级")]), _vm._v(" "), _c('p', {}, [_vm._v("\n              V" + _vm._s(_vm.detailObj.renterLevel) + " / " + _vm._s(_vm.detailObj.renterLevelName) + "\n            ")])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "payment-plan-main"
  }, [_c('p', {
    staticClass: "leftB-title"
  }, [_vm._v("紧急联系人信息")]), _vm._v(" "), _c('div', {
    staticClass: "detail-message"
  }, [_c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "thin"
  }, [_vm._v("紧急联系人")]), _vm._v(" "), _c('p', {}, [_vm._v(_vm._s(_vm.detailObj.contactsName))])], 1), _vm._v(" "), _c('div', {
    staticClass: "message-box"
  }, [_c('p', {
    staticClass: "thin"
  }, [_vm._v("紧急联系人电话")]), _vm._v(" "), _c('p', {}, [_vm._v(_vm._s(_vm.detailObj.contactsPhone))])], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "payment-plan-main"
  }, [_c('p', {
    staticClass: "leftB-title"
  }, [_vm._v("水电/物业费信息")]), _vm._v(" "), _c('div', {
    staticClass: "detail-message"
  }, _vm._l((_vm.detailObj.feeRespList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "message-box"
    }, [_c('p', {
      staticClass: "thin"
    }, [_vm._v(_vm._s(item.feeTypeName))]), _vm._v(" "), _c('p', {
      staticClass: "importance"
    }, [_vm._v(_vm._s(item.price) + _vm._s(item.unit))])], 1)
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "payment-plan-main"
  }, [_c('p', {
    staticClass: "leftB-title"
  }, [_vm._v("须知及规定")]), _vm._v(" "), _c('div', {
    staticClass: "detail-message"
  }, [_c('navigator', {
    staticClass: "message-box",
    attrs: {
      "url": "/pages/contract/rentAgreement/main?rentAddress="
    }
  }, [_c('p', {
    staticClass: "thin"
  }, [_vm._v("房屋租赁合同")]), _vm._v(" "), _c('p', {
    staticClass: "importance"
  }, [_vm._v("阅读>")])], 1), _vm._v(" "), _c('navigator', {
    staticClass: "message-box",
    attrs: {
      "url": "/pages/contract/agreement/main"
    }
  }, [_c('p', {
    staticClass: "thin"
  }, [_vm._v("合同协议须知")]), _vm._v(" "), _c('p', {
    staticClass: "importance"
  }, [_vm._v("阅读>")])], 1), _vm._v(" "), _c('navigator', {
    staticClass: "message-box",
    attrs: {
      "url": "/pages/contract/checkInNotice/main"
    }
  }, [_c('p', {
    staticClass: "thin"
  }, [_vm._v("入住须知")]), _vm._v(" "), _c('p', {
    staticClass: "importance"
  }, [_vm._v("阅读>")])], 1)], 1)], 1), _vm._v(" "), _c('label', {
    staticClass: "sure-message"
  }, [_c('radio', {
    staticClass: "radio",
    attrs: {
      "value": "",
      "color": "#BC171C",
      "checked": _vm.isSure,
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.isSure = !_vm.isSure
      }
    }
  }), _vm._v("\n        本人已阅读并知晓以上信息\n      ")], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "flex-box-footer pd810"
  }, [_c('radio-group', {
    staticClass: "insurance_group",
    attrs: {
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.getBuyInfo
    }
  }, _vm._l((_vm.insuranceGoodsList), function(item, index) {
    return _c('label', {
      key: index,
      staticClass: "insurance_radio"
    }, [_c('checkbox', {
      staticClass: "radio",
      attrs: {
        "value": item.insuranceId,
        "checked": item.isDefault
      }
    }), _vm._v("\n        是否购买"), _c('text', {
      staticClass: "state",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.navitoInsurance({
            isDefault: item.isDefault,
            rentalContractId: _vm.detailObj.rentalContractId
          })
        }
      }
    }, [_vm._v(_vm._s(item.price) + "保险")])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "footer"
  }, [_c('button', {
    staticClass: "retHome",
    attrs: {
      "plain": "",
      "eventid": '3'
    },
    on: {
      "click": _vm.cancelContractById
    }
  }, [_vm._v("取消合同")]), _vm._v(" "), _c('button', {
    staticClass: "payCash",
    attrs: {
      "plain": "",
      "eventid": '4'
    },
    on: {
      "click": _vm.naviToUrl
    }
  }, [_vm._v("确认签约")])], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fc3df6fe", esExports)
  }
}

/***/ })

},[463]);