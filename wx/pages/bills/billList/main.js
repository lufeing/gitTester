require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([109],{

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(287);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3dad0a3d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(290);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(288)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3dad0a3d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3dad0a3d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\bills\\billList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3dad0a3d", Component.options)
  } else {
    hotAPI.reload("data-v-3dad0a3d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 288:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___ = __webpack_require__(3);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      buttonIndex: 0,
      buttonTabsArr: ['签约账单', '入住账单'],
      dataList: []
    };
  },
  onLoad: function onLoad() {
    this.buttonIndex = 0;
    this.getMiniCommunityAccountBill();
  },
  onShow: function onShow() {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils___["o" /* mpvueRemoveStorageSync */])('couponList');
  },

  methods: {
    changeTab: function changeTab(tabsIndex) {
      this.tabsIndex = tabsIndex;
      if (this.tabsIndex === 0) {
        if (this.buttonIndex === 0) {
          this.getMiniCommunityAccountBill();
        } else {
          this.selectCheckInContractByMemberId();
        }
      } else {
        this.getMiniCommunityAccountBill();
      }
    },
    changeButtonTab: function changeButtonTab(buttonIndex) {
      this.buttonIndex = buttonIndex;
      if (this.buttonIndex === 0) {
        this.getMiniCommunityAccountBill();
      } else {
        this.selectCheckInContractByMemberId();
      }
    },
    getMiniCommunityAccountBill: function getMiniCommunityAccountBill() {
      var _this = this;

      var state = this.tabsIndex === 0 ? 0 : 3;

      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_1__utils___["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync.memberId;

      this.$API.getMiniCommunityAccountBill({ state: state, memberId: memberId }).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        console.log(res);
        _this.dataList = res.miniCommunityAccountBillList;
      });
    },
    selectCheckInContractByMemberId: function selectCheckInContractByMemberId() {
      var _this2 = this;

      var _mpvueGetStorageSync2 = Object(__WEBPACK_IMPORTED_MODULE_1__utils___["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync2.memberId;

      this.$API.selectCheckInContractByMemberId({ memberId: memberId }).then(function (_ref3) {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
            res = _ref4[0],
            msg = _ref4[1];

        console.log(res);
        _this2.dataList = res;
      });
    },
    naviToBillDetail: function naviToBillDetail(item) {
      var communityId = item.communityId,
          orderId = item.orderId;

      var param = { communityId: communityId, orderId: orderId, checkInType: this.buttonIndex
        // let parameter = '?checkInType=' + this.buttonIndex + '&communityId=' + item.communityId + '&orderId=' + item.orderId
      };global.mpvue.navigateTo({
        url: '/pages/bills/billDetail/main' + Object(__WEBPACK_IMPORTED_MODULE_1__utils___["g" /* getParamString */])(param)
      });
    }
  }
});

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lock-list-content"
  }, [_c('div', {
    staticClass: "mp-tabs mtb_0"
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
  })), _vm._v(" "), (_vm.tabsIndex == 0) ? _c('div', {
    staticClass: "bill-content"
  }, [_c('div', {
    staticClass: "mp-button-tabs"
  }, [_c('div', {
    staticClass: "button-tabs-item"
  }, _vm._l((_vm.buttonTabsArr), function(item, index) {
    return _c('button', {
      key: index,
      staticClass: "account-button",
      class: _vm.buttonIndex == index ? 'active' : '',
      attrs: {
        "plain": "",
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeButtonTab(index)
        }
      }
    }, [_vm._v(_vm._s(item))])
  }))]), _vm._v(" "), _vm._l((_vm.dataList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "bill-box"
    }, [_c('div', {
      staticClass: "top"
    }, [_c('p', {
      staticClass: "name"
    }, [_vm._v("\n          " + _vm._s(item.communityName) + "\n          "), (_vm.buttonIndex === 1) ? _c('span', {
      staticClass: "rentRelateName"
    }, [_vm._v("| " + _vm._s(item.rentRelateName))]) : _vm._e()]), _vm._v(" "), _c('p', {
      staticClass: "status"
    }, [_vm._v("未付")])], 1), _vm._v(" "), _c('div', {
      staticClass: "bottom",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.naviToBillDetail(item)
        }
      }
    }, [_c('p', [_vm._v("去支付")])], 1)])
  })], 2) : _c('div', {
    staticClass: "bill-content"
  }, _vm._l((_vm.dataList), function(object, index) {
    return _c('div', {
      key: index,
      staticClass: "bill-box"
    }, [_c('div', {
      staticClass: "top"
    }, [_c('p', {
      staticClass: "name"
    }, [_vm._v(_vm._s(object.communityName))])], 1), _vm._v(" "), _c('div', {
      staticClass: "bill-detail"
    }, [_c('div', {
      staticClass: "detail thead"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v("账单名称")]), _vm._v(" "), _c('p', {
      staticClass: "price"
    }, [_vm._v("金额(元)")]), _vm._v(" "), _c('p', {
      staticClass: "billDate"
    }, [_vm._v("账单日")])], 1), _vm._v(" "), _vm._l((object.miniOrderAccountBillList), function(test, idx) {
      return _c('div', {
        key: idx
      }, _vm._l((test.miniAccountBillInfoRespList), function(list, listIndex) {
        return _c('div', {
          key: listIndex,
          staticClass: "detail"
        }, [_c('p', {
          staticClass: "title"
        }, [_vm._v(_vm._s(list.accountBillName))]), _vm._v(" "), _c('p', {
          staticClass: "price"
        }, [_vm._v(_vm._s(list.receivableAmount))]), _vm._v(" "), _c('p', {
          staticClass: "billDate"
        }, [_vm._v(_vm._s(list.accountBillDate))])], 1)
      }))
    })], 2)])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3dad0a3d", esExports)
  }
}

/***/ })

},[286]);