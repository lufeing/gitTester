require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([108],{

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(293);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7b7ee595_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(296);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(294)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7b7ee595"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7b7ee595_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\bills\\chooseCoupon\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7b7ee595", Component.options)
  } else {
    hotAPI.reload("data-v-7b7ee595", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 294:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils___ = __webpack_require__(3);





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tabsArr: ['可用优惠券', '不可用优惠券'],
      dataList: [],
      expandObject: {},
      subjectObj: {},
      noUseCoupon: false,
      couponList: []
    };
  },
  onLoad: function onLoad() {
    this.couponMap = new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_map___default.a();
  },
  onShow: function onShow() {
    var _this = this;

    this.subjectObj = {};
    this.couponList = Object(__WEBPACK_IMPORTED_MODULE_5__utils___["l" /* mpvueGetStorageSync */])('couponList') || [];
    if (this.couponList.length) {
      this.couponList.map(function (item) {
        _this.couponMap.set(item.memberCouponId, item);
      });
    }
    // console.log(this.couponList)
    this.tabsIndex === 0 ? this.getMemberValidCouponListForAccount() : this.getMemberInvalidCouponList();
  },

  methods: {
    changeTab: function changeTab(tabsIndex) {
      this.expandObject = {};
      this.tabsIndex = tabsIndex;
      tabsIndex === 0 ? this.getMemberValidCouponListForAccount() : this.getMemberInvalidCouponList();
    },

    // 查询不可用优惠券
    getMemberInvalidCouponList: function getMemberInvalidCouponList() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$API.getMemberInvalidCouponList().then(function (_ref) {
                  var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
                      res = _ref2[0],
                      msg = _ref2[1];

                  return res;
                });

              case 2:
                _this2.dataList = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },

    // 查询可用优惠券
    getMemberValidCouponListForAccount: function getMemberValidCouponListForAccount() {
      var _this3 = this;

      var chooseList = this.$root.$mp.query.chooseList;

      var accountBillDtoList = chooseList && JSON.parse(chooseList);
      this.$API.getMemberValidCouponListForAccount({ accountBillDtoList: accountBillDtoList }).then(function (_ref3) {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
            res = _ref4[0],
            msg = _ref4[1];

        // 如果之前勾选中优惠券，则回选
        if (_this3.couponMap.size) {
          _this3.dataList = res.reduce(function (total, next) {
            next && next.memberCouponVoList.map(function (item) {
              if (_this3.couponMap.get(item.memberCouponId)) {
                item.checked = true;
              }
            });
            return total.concat(next);
          }, []);
        } else {
          _this3.dataList = res;
        }
      });
    },
    getChoosedObj: function getChoosedObj(memberCouponId, objIdx, subjectId) {
      var _this4 = this;

      // 单选,
      console.log(memberCouponId);
      this.noUseCoupon = false;
      var list = this.dataList[objIdx];
      list.memberCouponVoList.some(function (item) {
        if (item.matchAccount && item.memberCouponId === memberCouponId) {
          item.checked = true;
          _this4.subjectObj['id_' + subjectId] = item;
          _this4.checkCouponListHasSameSubject(item.subjectId);
          return true;
        }
      });
    },

    // 检查已选择的list,是否已有同种类型优惠券
    checkCouponListHasSameSubject: function checkCouponListHasSameSubject(subjectId) {
      var _this5 = this;

      this.couponList.map(function (item, index) {
        if (item.subjectId === subjectId) {
          _this5.couponList.splice(index, 1);
        }
      });
    },
    noUseCouponHandle: function noUseCouponHandle() {
      this.noUseCoupon = true;
      this.couponList = [];
      this.subjectObj = {};
      this.dataList.forEach(function (item) {
        item.memberCouponVoList.map(function (o, i) {
          o.checked = false;
        });
      });
      this.dataList = [].concat(this.dataList);
      Object(__WEBPACK_IMPORTED_MODULE_5__utils___["p" /* mpvueSetStorageSync */])('couponList', []);
    },
    retBuy: function retBuy() {
      var couponList = this.couponList;
      var subjectObj = this.subjectObj;
      for (var index in subjectObj) {
        if (!this.couponMap.get(subjectObj[index]['memberCouponId'])) {
          couponList.push(subjectObj[index]);
        }
      }
      Object(__WEBPACK_IMPORTED_MODULE_5__utils___["p" /* mpvueSetStorageSync */])('couponList', couponList);
      global.mpvue.navigateBack({
        delta: 1
      });
    },
    expand: function expand(memberCouponId, objIdx, subjectId) {
      var _this6 = this;

      var list = this.dataList[objIdx];
      list.memberCouponVoList.map(function (item) {
        if (item.memberCouponId === memberCouponId) {
          _this6.expandObject[memberCouponId] = !_this6.expandObject[memberCouponId];
          item.checked = item.checked === true ? true : '';
          _this6.getChoosedObj(memberCouponId, objIdx, subjectId);
        } else {
          _this6.expandObject[item.memberCouponId] = false;
          item.checked = false;
        }
      });
      this.expandObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.expandObject);
    }
  }
});

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex-box-content choose-coupon-content"
  }, [_c('div', {
    staticClass: "mp-tabs mg_0 white_bg"
  }, _vm._l((_vm.tabsArr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "tabs-item",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeTab(index)
        }
      }
    }, [_c('span', {
      staticClass: "title",
      class: _vm.tabsIndex == index ? 'active' : ''
    }, [_vm._v(_vm._s(item))])])
  })), _vm._v(" "), _c('div', {
    staticClass: "flex-box-body gray_bg"
  }, [_c('div', {
    staticClass: "no-use-coupon"
  }, [_c('p', [_vm._v("不使用优惠券")]), _vm._v(" "), _c('radio-group', {
    attrs: {
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "change": _vm.noUseCouponHandle
    }
  }, [_c('label', {
    staticClass: "label"
  }, [_c('radio', {
    staticClass: "no-use-radio",
    attrs: {
      "color": "#BC171C",
      "value": _vm.noUseCoupon,
      "checked": _vm.noUseCoupon
    }
  })], 1)], 1)], 1), _vm._v(" "), (_vm.dataList.length) ? _c('div', {
    staticClass: "coupons-body"
  }, _vm._l((_vm.dataList), function(object, objIdx) {
    return _c('div', {
      key: objIdx,
      staticClass: "coupons-box"
    }, [_c('div', {
      staticClass: "coupons-label-title"
    }, [_c('p', [_vm._v(_vm._s(object.subjectName))])], 1), _vm._v(" "), _c('radio-group', {
      attrs: {
        "mpcomid": '1_' + objIdx
      }
    }, _vm._l((object.memberCouponVoList), function(item, index) {
      return _c('div', {
        key: index,
        staticClass: "coupons-box-body",
        attrs: {
          "eventid": '3_' + objIdx + '-' + index
        },
        on: {
          "click": function($event) {
            _vm.getChoosedObj(item.memberCouponId, objIdx, object.subjectId)
          }
        }
      }, [_c('div', {
        staticClass: "coupons-box-detail"
      }, [_c('div', {
        staticClass: "denomination",
        class: _vm.tabsIndex == 0 && item.matchAccount == true ? '' : 'denomination-disabeled'
      }, [_vm._v("\n                " + _vm._s(item.couponType == 2 ? item.valueDescription + '折' : '¥' + item.valueDescription) + "\n              ")]), _vm._v(" "), _c('div', {
        staticClass: "state-box"
      }, [_c('div', {
        staticClass: "cells"
      }, [_c('div', {
        staticClass: "left-status",
        attrs: {
          "eventid": '2_' + objIdx + '-' + index
        },
        on: {
          "click": function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            _vm.expand(item.memberCouponId, objIdx, object.subjectId)
          }
        }
      }, [_c('p', {
        staticClass: "title",
        class: _vm.tabsIndex == 0 ? '' : 'title-disabeled'
      }, [_vm._v(_vm._s(item.couponTemplateName))]), _vm._v(" "), _c('p', {
        staticClass: "state"
      }, [_vm._v(_vm._s(item.valueRequire ? item.valueRequire : '--'))]), _vm._v(" "), _c('p', {
        staticClass: "state"
      }, [_vm._v(_vm._s(item.startDate) + "-" + _vm._s(item.endDate ? item.endDate : '长期'))]), _vm._v(" "), _c('p', {
        staticClass: "state"
      }, [_vm._v("门店限制：" + _vm._s(item.storeRequire ? item.storeRequire : '--'))]), _vm._v(" "), _c('p', {
        staticClass: "state"
      }, [_vm._v("租期限制：" + _vm._s(item.tenancyTermRequire ? item.tenancyTermRequire : '无限制'))])], 1), _vm._v(" "), (_vm.tabsIndex == 0 && item.matchAccount == true) ? _c('label', {
        staticClass: "right-choose"
      }, [_c('radio', {
        staticClass: "subjectRadio",
        attrs: {
          "color": "#BC171C",
          "value": index,
          "checked": item.checked
        }
      })], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
        staticClass: "limit"
      }, [_c('p', {
        staticClass: "state"
      }, [_vm._v("抵扣费项：" + _vm._s(item.subjectRequire))]), _vm._v(" "), _c('p', {
        staticClass: "state inline"
      }, [_vm._v("使用说明"), _c('b', {
        class: _vm.expandObject[index] ? 'arrow-top' : 'arrow-bottom'
      })], 1)], 1)])]), _vm._v(" "), (_vm.expandObject[item.memberCouponId]) ? _c('div', {
        staticClass: "coupons-hidden-state"
      }, [_vm._v("\n              " + _vm._s(item.remark) + "\n            ")]) : _vm._e()])
    }))], 1)
  })) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "flex-footer"
  }, [_c('button', {
    staticClass: "sure-submit-button w_690",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.retBuy
    }
  }, [_vm._v("确定")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7b7ee595", esExports)
  }
}

/***/ })

},[292]);