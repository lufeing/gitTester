require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([97],{

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(375);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_8e355e4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(378);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(376)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8e355e4c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_8e355e4c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\center\\orderDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8e355e4c", Component.options)
  } else {
    hotAPI.reload("data-v-8e355e4c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 376:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_wxApi__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_alipay__ = __webpack_require__(99);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      orderId: 0, // 订单的id
      tabsIndex: 0,
      tabsArr: ['未付账单', '已付账单'],
      billList: [], // 全部子帐单id的集合
      dataList: [], // 存放订单的数据
      allCheck: true,
      hasChecked: false,
      couponList: [],
      valueState: '无可用',
      resultPrice: 0,
      originalPrice: 0
    };
  },
  onShow: function onShow() {
    // 数据初始化
    this.originalPrice = 0;
    this.resultPrice = 0;
    if (this.$root.$mp.query.couponList) {
      this.couponList = JSON.parse(this.$root.$mp.query.couponList);
      if (this.couponList.length) {
        this.valueState = this.couponList[0].valueRequire;
        this.calcAccountBillAbatement();
      }
    }
  },
  onLoad: function onLoad(options) {
    console.log(options);

    var _ref = options || {},
        orderId = _ref.orderId,
        billIdList = _ref.billIdList;

    this.orderId = orderId;
    this.billList = billIdList ? billIdList.split(',') : [];
    this.dataList = [];
    this.getOrderByOrderId();
  },

  methods: {
    getOrderByOrderId: function getOrderByOrderId() {
      var _this = this;

      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_4__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync.memberId;

      var orderId = this.orderId;
      var price = 0;
      this.$API.getOrderByOrderId({ orderId: orderId, memberId: memberId }).then(function (_ref2) {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
            res = _ref3[0],
            msg = _ref3[1];

        // 如果是多条的话
        if (Array.isArray(res)) {
          res.map(function (item, index) {
            price += Number(item.realAmount);
            _this.originalPrice = parseInt(item.realAmount).toFixed(2);
          });
          _this.dataList = res;

          // 单条的情况下
        } else {
          price = Number(res.realAmount);
          _this.originalPrice = parseInt(res.realAmount).toFixed(2);
          _this.dataList.push(res);
        }
        _this.resultPrice = price.toFixed(2);
      });
    },
    calcAccountBillAbatement: function calcAccountBillAbatement() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var dataObj;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dataObj = {
                  accountBillDtoList: _this2.chooseList,
                  memberCouponVoList: _this2.couponList
                };
                _context.next = 3;
                return _this2.$API.calcAccountBillAbatement(dataObj).then(function (_ref4) {
                  var _ref5 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref4, 2),
                      res = _ref5[0],
                      msg = _ref5[1];

                  return res.realTotalAmount;
                });

              case 3:
                _this2.resultPrice = _context.sent;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    surePay: function surePay() {
      var _this3 = this;

      var param = {
        paymentMethod: global.mpvuePlatform === 'wx' ? 1 : 2,
        paymentSource: global.mpvuePlatform === 'wx' ? 2 : 3
      };
      var dataObj = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        billList: this.billList
      }, param);
      this.$API.prePaymentForOrder(dataObj).then(function (_ref6) {
        var _ref7 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref6, 2),
            res = _ref7[0],
            msg = _ref7[1];

        if (global.mpvuePlatform === 'wx') {
          Object(__WEBPACK_IMPORTED_MODULE_5__utils_wxApi__["c" /* wxRequestPayment */])({
            payParams: res,
            cancelPaymentForAccountBill: _this3.$API.cancelPaymentForAccountBill,
            naviToUrl: function naviToUrl() {
              global.mpvue.switchTab({
                url: '/pages/center/my/main'
              });
            }
          });
        } else {
          Object(__WEBPACK_IMPORTED_MODULE_6__utils_alipay__["a" /* alipayTradePay */])({
            payParams: res,
            cancelPaymentForAccountBill: _this3.$API.cancelPaymentForAccountBill,
            naviToUrl: function naviToUrl() {
              global.mpvue.switchTab({
                url: '/pages/center/my/main'
              });
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex-box-content"
  }, [_c('div', {
    staticClass: "flex-box-body lock-list-content"
  }, [_c('div', {
    staticClass: "bill-content"
  }, [_c('div', {
    staticClass: "bill-box"
  }, [_c('div', {
    staticClass: "top"
  }), _vm._v(" "), _c('div', {
    staticClass: "bill-detail"
  }, [_c('div', {
    staticClass: "detail thead"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("账单名称")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("金额(元)")])], 1), _vm._v(" "), _c('checkbox-group', {
    attrs: {
      "mpcomid": '0'
    }
  }, _vm._l((_vm.dataList), function(item, idx) {
    return _c('div', {
      key: idx,
      staticClass: "detail"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.orderName))]), _vm._v(" "), _c('p', {
      staticClass: "price"
    }, [_vm._v(_vm._s(item.realAmount))])], 1)
  }))], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "flex-box-footer"
  }, [_c('div', {
    staticClass: "total-box"
  }, [_c('p', {
    staticClass: "total"
  }, [_vm._v("\n        合计：\n        "), _c('span', {
    staticClass: "red"
  }, [_vm._v(_vm._s(_vm.resultPrice))])]), _vm._v(" "), _c('button', {
    staticClass: "sure-pay",
    attrs: {
      "plain": "",
      "eventid": '0'
    },
    on: {
      "click": _vm.surePay
    }
  }, [_vm._v("确认支付")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-8e355e4c", esExports)
  }
}

/***/ })

},[374]);