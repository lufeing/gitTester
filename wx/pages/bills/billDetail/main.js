require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([12],{

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(267);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_67b0bd30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(285);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(268)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-67b0bd30"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_67b0bd30_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\bills\\billDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-67b0bd30", Component.options)
  } else {
    hotAPI.reload("data-v-67b0bd30", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 268:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_typeof__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_popup_bindPhone__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_wxApi__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_alipay__ = __webpack_require__(99);






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tabsArr: ['未付账单', '已付账单'],
      dataList: [],
      bxList: [],
      allCheck: true,
      chooseList: [],
      couponList: [],
      valueState: '暂未选择优惠券',
      resultPrice: 0,
      isDisabled: false,
      calcAccountBillDtoList: [],
      isBind: false,
      maskModal: true
    };
  },

  components: { BindPhone: __WEBPACK_IMPORTED_MODULE_7__components_popup_bindPhone__["a" /* default */] },
  onLoad: function onLoad() {
    var checkInType = this.$root.$mp.query.checkInType;

    console.log(typeof checkInType === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_typeof___default()(checkInType));
    if (Number(checkInType) === 1) {
      this.getMiniCommunityAccountBillByOrderId();
    } else {
      this.getCommunityUnpaidAccountBill();
    }
  },
  onShow: function onShow() {
    // 数据初始化
    this.initData();
    this.Tracks.pageSaveParams({ serial: 14 });
  },

  methods: {
    initData: function initData() {
      var _this = this;

      // this.resultPrice = 0;
      this.isDisabled = false;
      this.valueState = '暂未选择优惠券';
      this.couponList = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["l" /* mpvueGetStorageSync */])('couponList') || [];
      console.log('this.calcAccountBillDtoList.length:' + this.calcAccountBillDtoList.length);
      this.valueState = this.couponList.length !== 0 ? '\u5DF2\u9009\u62E9' + this.couponList.length + '\u4F18\u60E0\u5238' : '暂未选择优惠券';
      setTimeout(function () {
        _this.calcAccountBillAbatement();
      }, 500);
    },

    // 根据社区id获取账单list
    getCommunityUnpaidAccountBill: function getCommunityUnpaidAccountBill() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee() {
        var communityId, _mpvueGetStorageSync, memberId, date, list;

        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                communityId = _this2.$root.$mp.query.communityId;
                _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["l" /* mpvueGetStorageSync */])('memberObj'), memberId = _mpvueGetStorageSync.memberId;
                date = new Date().valueOf();

                _this2.allCheck = true;
                _context.next = 6;
                return _this2.$API.getCommunityUnpaidAccountBill({ communityId: communityId, memberId: memberId, date: date }).then(function (_ref) {
                  var _ref2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
                      res = _ref2[0],
                      msg = _ref2[1];

                  return res;
                });

              case 6:
                list = _context.sent;

                _this2.handleList(list);

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },

    // 根据合同id查询未付/已付账单
    getMiniCommunityAccountBillByOrderId: function getMiniCommunityAccountBillByOrderId() {
      var _this3 = this;

      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$state = _ref3.state,
          state = _ref3$state === undefined ? 0 : _ref3$state;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var orderId, date, list;
        return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                orderId = _this3.$root.$mp.query.orderId;
                date = new Date().valueOf();

                _this3.allCheck = true;
                _context2.next = 5;
                return _this3.$API.getMiniCommunityAccountBillByOrderId({ orderId: orderId, state: state, date: date }).then(function (_ref4) {
                  var _ref5 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref4, 2),
                      res = _ref5[0],
                      msg = _ref5[1];

                  return res;
                });

              case 5:
                list = _context2.sent;

                _this3.handleList(list);

              case 7:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },
    handleList: function handleList(list) {
      var _this4 = this;

      var price = 0;
      var contractList = [];
      this.bxList = [];
      list.map(function (item) {
        if (item.billSubjectId !== '4020') {
          price += item.realAmount;
          contractList.push(item);
        } else {
          _this4.bxList.push(item);
        }
      });
      this.dataList = this.chooseList = contractList;
      this.resultPrice = price.toFixed(2);
    },

    // 判断是否选择优惠券，如果选中优惠券计算使用优惠券之后的账单价格，如果没有则直接拿全部账单的价格
    calcAccountBillAbatement: function calcAccountBillAbatement() {
      var _this5 = this;

      var accountBillDtoList = this.chooseList,
          memberCouponVoList = this.couponList;

      this.$API.calcAccountBillAbatement({ accountBillDtoList: accountBillDtoList, memberCouponVoList: memberCouponVoList }).then(function (_ref6) {
        var _ref7 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref6, 2),
            res = _ref7[0],
            msg = _ref7[1];

        _this5.resultPrice = res.realTotalAmount;
        _this5.calcAccountBillDtoList = res.calcAccountBillDtoList;
      });
    },
    getMemberValidCouponListForAccount: function getMemberValidCouponListForAccount() {
      var _this6 = this;

      var array = [];
      var accountBillDtoList = this.chooseList;

      this.$API.getMemberValidCouponListForAccount({ accountBillDtoList: accountBillDtoList }).then(function (_ref8) {
        var _ref9 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref8, 2),
            res = _ref9[0],
            msg = _ref9[1];

        var couponIdList = _this6.couponList.map(function (item) {
          return item.memberCouponId;
        });
        res.map(function (item, index) {
          item.memberCouponVoList.map(function (obj) {
            if (obj.matchAccount && couponIdList.includes(obj.memberCouponId)) {
              array.push(obj);
            }
          });
        });
        if (!array.length) {
          _this6.valueState = '暂未选择优惠券';
          Object(__WEBPACK_IMPORTED_MODULE_6__utils__["p" /* mpvueSetStorageSync */])('couponList', []);
        }
        _this6.couponList = array;
        _this6.calcAccountBillAbatement();
      });
    },
    bxListChange: function bxListChange(e) {
      this.allCheck = true;
      this.checkAll(false);
      var billIdList = e.mp.detail.value;
      this.chooseList = [];

      var price = this.appearList({ billIdList: billIdList, sourceList: this.bxList });
      this.resultPrice = price.toFixed(2);
      this.getMemberValidCouponListForAccount();
    },

    // 点击单选按钮
    checkboxChange: function checkboxChange(e) {
      var billIdList = e.mp.detail.value;
      this.chooseList = [];
      // 改变全选按钮状态
      this.allCheck = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["a" /* changecheckAllState */])({
        list: this.dataList,
        currentLength: billIdList.length
      });
      // 取消保险账单的选中状态
      this.bxList.map(function (item) {
        item.checked = false;
      });

      var price = this.appearList({ billIdList: billIdList, sourceList: this.dataList });
      this.resultPrice = price.toFixed(2);
      this.getMemberValidCouponListForAccount();
    },
    appearList: function appearList() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref10$billIdList = _ref10.billIdList,
          billIdList = _ref10$billIdList === undefined ? [] : _ref10$billIdList,
          _ref10$sourceList = _ref10.sourceList,
          sourceList = _ref10$sourceList === undefined ? [] : _ref10$sourceList;

      // 1、billIdList 选择的数组对象
      // 2、sourceList 需要处理的源对象
      var price = 0;
      this.chooseList = sourceList.filter(function (item) {
        if (billIdList.includes(item.accountBillId)) {
          item.checked = true;
          price += Number(item.realAmount);
          return price;
        } else {
          item.checked = false;
        }
      });
      return price;
    },
    checkAll: function checkAll() {
      var _this7 = this;

      // 取消保险账单的选中状态
      this.bxList.map(function (item) {
        item.checked = false;
      });
      this.allCheck = !this.allCheck;
      var price = 0;
      if (this.allCheck) {
        this.chooseList = this.dataList;
        this.resultPrice = this.dataList.map(function (item) {
          item.checked = _this7.allCheck;
          price += Number(item.realAmount);
        });
        this.resultPrice = price.toFixed(2);
      } else {
        this.chooseList = [];
        this.dataList.map(function (item) {
          item.checked = false;
        });
        this.resultPrice = 0;
      }
    },
    naviToUrl: function naviToUrl() {
      global.mpvue.navigateTo({
        url: '/pages/bills/chooseCoupon/main?chooseList=' + __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(this.chooseList)
      });
    },
    surePay: function surePay() {
      var _this8 = this;

      // 1、如果选择优惠券之后能核销的账单list不为空
      // 2、如果所选支付账单核销之后价格为0
      // 3、以上两个都满足则走假支付通道
      if (!this.isDisabled) {
        global.mpvue.showLoading();
        this.isDisabled = true;
        if (this.resultPrice === '0.00' && this.calcAccountBillDtoList.length) {
          this.payForAccountListHasCoupon();
          this.isDisabled = false;
        } else {
          // 获取id数组
          var accountBillIdList = this.chooseList.map(function (item) {
            return item.accountBillId;
          });
          var couponIdList = this.couponList.map(function (item) {
            return item.memberCouponId;
          });
          var param = {
            paymentMethod: global.mpvuePlatform === 'wx' ? 1 : 2,
            paymentSource: global.mpvuePlatform === 'wx' ? 2 : 3
          };
          var dataObj = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
            accountBillList: accountBillIdList,
            couponList: couponIdList,
            paymentTarget: 0
          }, param);
          this.$API.prePaymentForAccountBill(dataObj).then(function (_ref11) {
            var _ref12 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref11, 2),
                res = _ref12[0],
                msg = _ref12[1];

            console.log(res);
            global.mpvue.hideLoading();
            if (global.mpvuePlatform === 'wx') {
              Object(__WEBPACK_IMPORTED_MODULE_8__utils_wxApi__["c" /* wxRequestPayment */])({
                payParams: res,
                accountBillList: accountBillIdList,
                cancelPaymentForAccountBill: _this8.$API.cancelPaymentForAccountBill,
                callback: function callback() {
                  _this8.isDisabled = false;
                  _this8.Tracks.pageSaveParams({ serial: 15 });
                }
              });
            } else {
              Object(__WEBPACK_IMPORTED_MODULE_9__utils_alipay__["a" /* alipayTradePay */])({
                payParams: res,
                accountBillList: accountBillIdList,
                cancelPaymentForAccountBill: _this8.$API.cancelPaymentForAccountBill,
                callback: function callback() {
                  _this8.isDisabled = false;
                  _this8.Tracks.pageSaveParams({ serial: 15 });
                }
              });
            }
          });
        }
      }
    },

    // 如果账单免费，则核销优惠券
    payForAccountListHasCoupon: function payForAccountListHasCoupon(param) {
      if (this.calcAccountBillDtoList.length) {
        var dataObj = {
          payForAccountHasCouponList: this.calcAccountBillDtoList,
          paymentMethod: 1,
          paymentTarget: 0,
          realTotalAmount: this.resultPrice
        };
        this.$API.payForAccountListHasCoupon(dataObj).then(function (_ref13) {
          var _ref14 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref13, 2),
              res = _ref14[0],
              msg = _ref14[1];

          Object(__WEBPACK_IMPORTED_MODULE_6__utils__["t" /* showSuccessToast */])({});
        }).catch(function (err) {
          console.log(err);
        });
      }
    },

    /*
     * 用户绑定通联为通联用户
     * 根据memberId获取绑定的手机号
     */
    getMemberBingPhone: function getMemberBingPhone() {
      var _this9 = this;

      var _ref15 = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["l" /* mpvueGetStorageSync */])('memberObj') || {},
          memberId = _ref15.memberId;

      var header = { 'Content-Type': 'application/json' };
      this.$API.getMemberBingPhone({ memberId: memberId }, header).then(function (_ref16) {
        var _ref17 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref16, 2),
            res = _ref17[0],
            msg = _ref17[1];

        _this9.surePay();
      }).catch(function (_ref18) {
        var _ref19 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref18, 3),
            data = _ref19[0],
            msg = _ref19[1],
            code = _ref19[2];

        if (code !== 0) {
          _this9.createMemberAndSendVerificationCode();
        }
      });
    },
    createMemberAndSendVerificationCode: function createMemberAndSendVerificationCode() {
      var _this10 = this;

      var _ref20 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref20$source = _ref20.source,
          source = _ref20$source === undefined ? 1 : _ref20$source;

      var _ref21 = Object(__WEBPACK_IMPORTED_MODULE_6__utils__["l" /* mpvueGetStorageSync */])('memberObj') || {},
          memberId = _ref21.memberId,
          phone = _ref21.phone,
          phoneshow = _ref21.phoneshow;

      Object(__WEBPACK_IMPORTED_MODULE_6__utils__["s" /* showModal */])({
        content: '\u4E3A\u4E86\u8D26\u53F7\u5B89\u5168,\u9700\u8981\u5BF9\u4F60\u7684\u8EAB\u4EFD\u8FDB\u884C\u786E\u8BA4,\u73B0\u5728\u5411\u4F60\u7ED1\u5B9A\u7684\u624B\u673A\u53F7' + phoneshow + '\u53D1\u9001\u9A8C\u8BC1\u7801',
        showCancel: true,
        fn: function fn() {
          _this10.$API.createMemberAndSendVerificationCode({ memberId: memberId, phone: phone, source: source }).then(function (_ref22) {
            var _ref23 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref22, 2),
                res = _ref23[0],
                msg = _ref23[1];

            _this10.isBind = true;
            _this10.maskModal = true;
          });
        }
      });
    },
    cancelMask: function cancelMask(modal) {
      this.maskModal = false;
    }
  }
});

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_bindPhone_vue__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_54d2bf3c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_bindPhone_vue__ = __webpack_require__(283);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(281)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-54d2bf3c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_bindPhone_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_54d2bf3c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_bindPhone_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\popup\\bindPhone.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] bindPhone.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-54d2bf3c", Component.options)
  } else {
    hotAPI.reload("data-v-54d2bf3c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 281:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(3);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      verificationCode: ''
    };
  },

  props: {
    isBind: {
      type: Boolean,
      default: false
    },
    maskModal: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    bindPhoneFun: function bindPhoneFun() {
      var _this = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$memberType = _ref.memberType,
          memberType = _ref$memberType === undefined ? 3 : _ref$memberType;

      var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* mpvueGetStorageSync */])('memberObj') || {},
          bizUserId = _ref2.memberId,
          phone = _ref2.phone;

      var verificationCode = this.verificationCode;
      this.$API.bindPhone({ bizUserId: bizUserId, phone: phone, memberType: memberType, verificationCode: verificationCode }).then(function (_ref3) {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
            res = _ref4[0],
            msg = _ref4[1];

        _this.maskModal = false;
      });
    },
    cancelMask: function cancelMask() {
      this.maskModal = false;
      this.$emit('cancelMask', { maskModal: false });
    }
  }
});

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.maskModal) ? _c('view', {
    staticClass: "mask",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.cancelMask
    }
  }, [_c('view', {
    staticClass: "modal-content",
    staticStyle: {
      "height": "250px"
    },
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "coupon-content"
  }, [_c('div', {
    staticClass: "main-body"
  }, [_c('div', {
    staticClass: "code_content"
  }, [_c('text', {
    staticClass: "title"
  }, [_vm._v("请输入验证码")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.verificationCode),
      expression: "verificationCode"
    }],
    staticClass: "code_input",
    attrs: {
      "type": "number",
      "focus": "",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.verificationCode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.verificationCode = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('view', {
    staticClass: "modal-btn-wrapper"
  }, [_c('button', {
    staticClass: "modal_btn",
    attrs: {
      "type": "defalut",
      "size": "default",
      "eventid": '1'
    },
    on: {
      "click": _vm.cancelMask
    }
  }, [_vm._v("取消")]), _vm._v(" "), _c('button', {
    staticClass: "modal_btn",
    attrs: {
      "type": "primary",
      "size": "default",
      "eventid": '2'
    },
    on: {
      "click": _vm.bindPhoneFun
    }
  }, [_vm._v("提交")])], 1)])]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-54d2bf3c", esExports)
  }
}

/***/ }),

/***/ 285:
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
  }, [_c('p', {
    staticClass: "name"
  }, [_vm._v("未付账单")])], 1), _vm._v(" "), _c('div', {
    staticClass: "bill-detail"
  }, [_c('div', {
    staticClass: "detail thead"
  }, [_c('p', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.checkAll
    }
  }, [_c('checkbox', {
    staticClass: "checkbox",
    attrs: {
      "color": "#BC171C",
      "checked": _vm.allCheck
    }
  })], 1), _vm._v(" "), _c('p', {
    staticClass: "title"
  }, [_vm._v("账单名称")]), _vm._v(" "), _c('p', {
    staticClass: "price"
  }, [_vm._v("金额(元)")]), _vm._v(" "), _c('p', {
    staticClass: "billDate"
  }, [_vm._v("账单日")])], 1), _vm._v(" "), _c('checkbox-group', {
    attrs: {
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.checkboxChange
    }
  }, _vm._l((_vm.dataList), function(item, idx) {
    return _c('div', {
      key: idx,
      staticClass: "detail"
    }, [_c('p', [_c('checkbox', {
      staticClass: "checkbox",
      attrs: {
        "color": "#BC171C",
        "value": item.accountBillId,
        "checked": item.checked
      }
    })], 1), _vm._v(" "), _c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.accountBillName))]), _vm._v(" "), _c('p', {
      staticClass: "price"
    }, [_c('span', {
      staticClass: "realAmount_class"
    }, [_vm._v(_vm._s(item.realAmount))]), _vm._v(" "), (item.realAmount != item.totalAmount) ? _c('span', {
      staticClass: "totalAmount_class"
    }, [_vm._v(_vm._s(item.totalAmount))]) : _vm._e()]), _vm._v(" "), _c('p', {
      staticClass: "billDate"
    }, [_vm._v(_vm._s(item.accountBillDate))])], 1)
  })), _vm._v(" "), _c('checkbox-group', {
    staticClass: "bx_group",
    attrs: {
      "eventid": '2',
      "mpcomid": '1'
    },
    on: {
      "change": _vm.bxListChange
    }
  }, _vm._l((_vm.bxList), function(item, idx) {
    return _c('div', {
      key: idx,
      staticClass: "detail"
    }, [_c('p', [_c('checkbox', {
      staticClass: "checkbox",
      attrs: {
        "color": "#BC171C",
        "value": item.accountBillId,
        "checked": item.checked
      }
    })], 1), _vm._v(" "), _c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.accountBillName))]), _vm._v(" "), _c('p', {
      staticClass: "price"
    }, [_c('span', {
      staticClass: "realAmount_class"
    }, [_vm._v(_vm._s(item.realAmount))]), _vm._v(" "), (item.realAmount != item.totalAmount) ? _c('span', {
      staticClass: "totalAmount_class"
    }, [_vm._v(_vm._s(item.totalAmount))]) : _vm._e()]), _vm._v(" "), _c('p', {
      staticClass: "billDate"
    }, [_vm._v(_vm._s(item.accountBillDate))])], 1)
  }))], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "naviTo-content",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.naviToUrl
    }
  }, [_c('p', [_vm._v("优惠券")]), _vm._v(" "), _c('div', {
    staticClass: "space-box mg0"
  }, [_c('p', [_vm._v(_vm._s(_vm.valueState))]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "flex-box-footer"
  }, [_c('div', {
    staticClass: "total-box"
  }, [_c('p', {
    staticClass: "total"
  }, [_vm._v("合计："), _c('span', {
    staticClass: "red"
  }, [_vm._v(_vm._s(_vm.resultPrice))])]), _vm._v(" "), _c('button', {
    staticClass: "sure-pay",
    class: _vm.isDisabled ? 'grayBack' : '',
    attrs: {
      "plain": "",
      "eventid": '4'
    },
    on: {
      "click": _vm.surePay
    }
  }, [_vm._v("确认支付")])], 1)]), _vm._v(" "), (_vm.isBind) ? _c('bind-phone', {
    attrs: {
      "maskModal": _vm.maskModal,
      "eventid": '5',
      "mpcomid": '2'
    },
    on: {
      "cancelMask": _vm.cancelMask
    }
  }) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-67b0bd30", esExports)
  }
}

/***/ })

},[266]);