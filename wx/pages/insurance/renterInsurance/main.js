require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(667);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(669);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b195ff80_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(678);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(668)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b195ff80"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b195ff80_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\insurance\\renterInsurance\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b195ff80", Component.options)
  } else {
    hotAPI.reload("data-v-b195ff80", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 668:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_center_communityPickerByContract__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_detail__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_note__ = __webpack_require__(674);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      autoInsurance: true,
      contractObj: {},
      insuranceList: [{
        name: '9.9',
        insuranceId: '1117688053487325186',
        orderName: '租客无忧保险'
      }, {
        name: '29.9',
        insuranceId: '1117688053487325187',
        orderName: '王者计划'
      }],
      tabsIndex: 0,
      price: '9.9',
      disabled: false,
      agreementList: []
    };
  },

  components: { communityPickerByContract: __WEBPACK_IMPORTED_MODULE_4__components_center_communityPickerByContract__["a" /* default */], InsuranceDetail: __WEBPACK_IMPORTED_MODULE_5__components_detail__["a" /* default */], InsuranceNote: __WEBPACK_IMPORTED_MODULE_6__components_note__["a" /* default */] },
  onLoad: function onLoad(options) {
    this.tabsIndex = options && Number(options.tabsIndex) || 0;
    this.price = this.tabsIndex === 0 ? '9.9' : '29.9';
    this.disabled = options && options.rentalContractId != null;
    this.Tracks.pageSaveParams({ serial: 12 });
    this.getInsuranceAgreementList();
  },

  methods: {
    changeTabs: function changeTabs(tabsIndex) {
      this.tabsIndex = tabsIndex;
      this.price = tabsIndex === 0 ? '9.9' : '29.9';
      this.getInsuranceAgreementList();
    },
    checkIsReal: function checkIsReal() {
      if (this.disabled) return false;

      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["l" /* mpvueGetStorageSync */])('memberObj'),
          isReal = _mpvueGetStorageSync.isReal;

      if (!isReal) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["s" /* showModal */])({
          content: '你还未实名认证，请前往实名认证',
          fn: function fn() {
            global.mpvue.navigateTo({
              url: '/pages/verify/identitycard/main'
            });
          }
        });
        return false;
      }
      this.insuranceApplySave();
    },
    insuranceApplySave: function insuranceApplySave() {
      var _this = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$orderSource = _ref.orderSource,
          orderSource = _ref$orderSource === undefined ? 0 : _ref$orderSource,
          _ref$orderType = _ref.orderType,
          orderType = _ref$orderType === undefined ? 2 : _ref$orderType;

      var insuranceId = this.insuranceList[this.tabsIndex].insuranceId;

      var obj = {
        autoInsurance: this.autoInsurance,
        contractId: this.contractObj.rentalContractId,
        insuranceId: insuranceId
      };
      this.$API.insuranceApplySave(obj).then(function (_ref2) {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
            res = _ref3[0],
            msg = _ref3[1];

        // insuranceApplyCommit
        _this.Tracks.pageSaveParams({ serial: 13 });
        global.mpvue.redirectTo({
          url: '/pages/center/orderDetail/main?orderId=' + res.orderId + '&billIdList=' + [res.billId]
        });
      });
    },
    switch1Change: function switch1Change(e) {
      this.autoInsurance = e.mp.detail.value;
    },
    getContractChecked: function getContractChecked(param) {
      console.log(param.hasOwnProperty('contractChecked'));
      if (!param.hasOwnProperty('contractChecked')) this.disabled = true;
      this.contractObj.rentalContractId = param.contractChecked;
      this.contractObj.communityId = param.communityId;
    },
    natoUrl: function natoUrl() {
      global.mpvue.navigateTo({
        url: '/pages/insurance/agreement/main'
      });
    },
    getInsuranceAgreementList: function getInsuranceAgreementList() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var insuranceId;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                insuranceId = _this2.insuranceList[_this2.tabsIndex].insuranceId;
                _context.next = 3;
                return _this2.$API.getInsuranceAgreementList({ insuranceId: insuranceId }).then(function (_ref4) {
                  var _ref5 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref4, 2),
                      res = _ref5[0],
                      msg = _ref5[1];

                  return res;
                });

              case 3:
                _this2.agreementList = _context.sent;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    }
  }
});

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_detail_vue__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5a42abd8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_detail_vue__ = __webpack_require__(673);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(671)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5a42abd8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_detail_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5a42abd8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_detail_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\insurance\\renterInsurance\\components\\detail.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] detail.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a42abd8", Component.options)
  } else {
    hotAPI.reload("data-v-5a42abd8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 671:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      nineList: [{
        name: '租客意外伤害',
        price: '5万'
      }, {
        name: '房屋建筑物主体',
        price: '10万'
      }, {
        name: '室内装潢',
        price: '1万'
      }, {
        name: '室内财产',
        price: '6000元'
      }],
      tNineList: [{
        name: '财产保障',
        children: [{
          name: '房屋主体',
          price: '20万'
        }, {
          name: '室内装潢',
          price: '2万'
        }, {
          name: '室内财产',
          price: '2万'
        }, {
          name: '便携式家用电器',
          price: '4000元'
        }]
      }, {
        name: '盗窃抢劫',
        children: [{
          name: '室内财产',
          price: '2万'
        }, {
          name: '便携式家用电器',
          price: '4000元'
        }]
      }, {
        name: '第三者责任',
        price: '4万'
      }, {
        name: '承租人责任',
        price: '4万'
      }, {
        name: '家庭人身意外',
        price: '30万'
      }, {
        name: '提前退租损失',
        price: '7000元'
      }]
    };
  },

  props: {
    tabsIndex: {
      type: Number,
      default: 0
    }
  }
});

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "insurance_nine"
  }, [_c('div', {
    staticClass: "insurance-card"
  }, [_c('div', {
    staticClass: "space-btw insurance-title"
  }, [_c('p', [_vm._v("保障详情")])], 1), _vm._v(" "), (_vm.tabsIndex == 0) ? _c('div', {
    staticClass: "insurance_detail"
  }, _vm._l((_vm.nineList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "space-btw"
    }, [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(item.price))])], 1)
  })) : _vm._e(), _vm._v(" "), (_vm.tabsIndex == 1) ? _c('div', {
    staticClass: "insurance_detail"
  }, _vm._l((_vm.tNineList), function(item, index) {
    return _c('div', {
      key: index
    }, [(!item.children) ? _c('div', {
      staticClass: "space-btw"
    }, [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', [_vm._v(_vm._s(item.price))])], 1) : _c('div', [_c('p', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _vm._l((item.children), function(child, idx) {
      return _c('div', {
        key: idx,
        staticClass: "space-btw"
      }, [_c('p', {
        staticClass: "indentation"
      }, [_vm._v(_vm._s(child.name))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(child.price))])], 1)
    })], 2)])
  })) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "insurance-type"
  }, [_c('p', [_vm._v("意外保障")]), _vm._v(" "), _c('p', [_vm._v("责任保障")]), _vm._v(" "), _c('p', [_vm._v("财产保障")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5a42abd8", esExports)
  }
}

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_note_vue__ = __webpack_require__(676);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_297dca8e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_note_vue__ = __webpack_require__(677);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(675)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-297dca8e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_note_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_297dca8e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_note_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\insurance\\renterInsurance\\components\\note.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] note.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-297dca8e", Component.options)
  } else {
    hotAPI.reload("data-v-297dca8e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 675:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
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
    return {};
  },

  props: {
    agreementList: {
      type: Array,
      default: []
    }
  },
  methods: {
    openFiles: function openFiles(filePath) {
      wx.downloadFile({
        url: filePath,
        success: function success(res) {
          var filePath = res.tempFilePath;
          wx.openDocument({
            filePath: filePath,
            success: function success(res) {
              console.log('打开文档成功');
            },
            fail: function fail(err) {
              console.log(err);
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "note_content"
  }, [_c('div', [_c('p', {
    staticClass: "state"
  }, [_vm._v("自动续保,不用担心续保不及时造成保障中断,省心！")]), _vm._v(" "), _c('p', {
    staticClass: "state"
  }, [_vm._v("开通自动续保后，可以随时取消，放心！")]), _vm._v(" "), _c('p', {
    staticClass: "state"
  }, [_vm._v("自动续保自动扣款,安心！")]), _vm._v(" "), _c('div', {
    staticClass: "state"
  }, [_c('p', [_vm._v("阅读并同意以下条款")]), _vm._v(" "), _vm._l((_vm.agreementList), function(item, index) {
    return _c('p', {
      key: index,
      staticClass: "xieyi",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.openFiles(item.filePath)
        }
      }
    }, [_vm._v("《" + _vm._s(item.agreementName) + "》")])
  })], 2)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-297dca8e", esExports)
  }
}

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex-box-content insurance-content"
  }, [_c('div', {
    staticClass: "flex-body-noScroll bgf2"
  }, [_c('div', {
    staticClass: "mt_10"
  }, [_c('communityPickerByContract', {
    attrs: {
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "getContractChecked": _vm.getContractChecked
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "insurance_tabs"
  }, _vm._l((_vm.insuranceList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "tabs_item",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeTabs(index)
        }
      }
    }, [_c('button', {
      staticClass: "btn",
      class: index == _vm.tabsIndex ? 'active' : ''
    }, [_vm._v(_vm._s(item.name))])], 1)
  })), _vm._v(" "), _c('insurance-detail', {
    attrs: {
      "tabsIndex": _vm.tabsIndex,
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "insurance-card"
  }, [_c('div', {
    staticClass: "space-btw insurance-title"
  }, [_c('p', [_vm._v("次月自动续保")]), _vm._v(" "), _c('p', [_c('switch', {
    staticStyle: {
      "zoom": "0.8"
    },
    attrs: {
      "checked": _vm.autoInsurance,
      "eventid": '2'
    },
    on: {
      "change": _vm.switch1Change
    }
  })])], 1)]), _vm._v(" "), _c('insurance-note', {
    attrs: {
      "agreementList": _vm.agreementList,
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "flex-box-footer pd0"
  }, [_c('div', {
    staticClass: "btn-content"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('span', {
    staticClass: "price"
  }, [_vm._v(_vm._s(_vm.price))]), _vm._v("元/月")]), _vm._v(" "), _c('div', {
    class: _vm.disabled ? 'fail' : 'active',
    attrs: {
      "disabled": _vm.disabled,
      "type": "default",
      "eventid": '3'
    },
    on: {
      "click": _vm.checkIsReal
    }
  }, [_vm._v("我要投保")])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b195ff80", esExports)
  }
}

/***/ })

},[666]);