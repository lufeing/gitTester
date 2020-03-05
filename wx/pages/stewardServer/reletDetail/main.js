require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([30],{

/***/ 823:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(824);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(826);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4ab9778e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(827);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(825)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4ab9778e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4ab9778e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\stewardServer\\reletDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4ab9778e", Component.options)
  } else {
    hotAPI.reload("data-v-4ab9778e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 825:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 826:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_index_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_stewardServer_chooseReason__ = __webpack_require__(69);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dataObj: {},
      statusList: [],
      roomType: 0,
      dateValue: '2019-02-15',
      serverModal: false,
      chooiseList: [],
      chooiseIndex: '',
      reletObj: {
        beginDate: '',
        endDate: ''
      },
      monthChoose: '',
      monthRange: ['1个月', '2个月', '3个月', '4个月', '5个月', '6个月', '7个月', '8个月', '9个月', '10个月', '11个月', '12个月'],
      monthValue: ''
    };
  },

  components: { chooseReason: __WEBPACK_IMPORTED_MODULE_3__components_stewardServer_chooseReason__["a" /* default */] },
  mounted: function mounted() {
    this.selectRenewalOrderById();
  },

  methods: {
    selectRenewalOrderById: function selectRenewalOrderById() {
      var _this = this;

      var applyRenewalId = this.$root.$mp.query.applyRenewalId;

      this.$API.selectRenewalOrderById({ applyRenewalId: applyRenewalId }).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        _this.dataObj = res;
        _this.monthValue = Number(res.tenancyTerm) - 1;
        _this.getSomeDate(res.applyDate);
        _this.selectRenewalLogPage();
      });
    },
    selectRenewalLogPage: function selectRenewalLogPage() {
      var _this2 = this;

      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      var applyRenewalId = this.$root.$mp.query.applyRenewalId;

      var current = 1;
      this.$API.selectRenewalLogPage({ applyRenewalId: applyRenewalId, current: current, size: size }).then(function (_ref3) {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
            res = _ref4[0],
            msg = _ref4[1];

        _this2.statusList = res.records;
      });
    },
    getMonthChange: function getMonthChange(event) {
      this.monthValue = event.mp.detail.value;
      this.monthChoose = Number(event.mp.detail.value) + 1;
      this.getEndDate(this.reletObj.beginDate);
    },
    getEndDate: function getEndDate(startDate) {
      var _this3 = this;

      var tenancyTerm = Number(this.monthValue) + 1;
      this.$API.getEndDate({ tenancyTerm: tenancyTerm, startDate: startDate }).then(function (_ref5) {
        var _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
            res = _ref6[0],
            msg = _ref6[1];

        _this3.reletObj.endDate = res;
      });
    },
    getSomeDate: function getSomeDate() {
      var _this4 = this;

      var number = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

      var date = this.dataObj.endDate;
      this.$API.getSomeDate({ date: date, number: 1 }).then(function (_ref7) {
        var _ref8 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref7, 2),
            res = _ref8[0],
            msg = _ref8[1];

        _this4.reletObj.beginDate = res;
        _this4.getEndDate(res);
      });
    },
    updateRenewalOrder: function updateRenewalOrder() {
      var applyRenewalId = this.$root.$mp.query.applyRenewalId;
      var tenancyTerm = Number(this.monthValue) + 1;
      var _dataObj = this.dataObj,
          rentalContractId = _dataObj.rentalContractId,
          memberId = _dataObj.memberId,
          communityId = _dataObj.communityId,
          status = _dataObj.status;

      this.$API.updateRenewalOrder({ applyRenewalId: applyRenewalId, tenancyTerm: tenancyTerm, rentalContractId: rentalContractId, memberId: memberId, communityId: communityId, status: status }).then(function (_ref9) {
        var _ref10 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref9, 2),
            res = _ref10[0],
            msg = _ref10[1];

        Object(__WEBPACK_IMPORTED_MODULE_2__utils_index_js__["t" /* showSuccessToast */])({ msg: msg });
      });
    },
    cancelRelet: function cancelRelet() {
      var _this5 = this;

      this.$API.selectRenewalChoiceList().then(function (_ref11) {
        var _ref12 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref11, 2),
            res = _ref12[0],
            msg = _ref12[1];

        _this5.chooiseList = res;
        _this5.serverModal = true;
      });
    },
    confirm: function confirm(chooiseParam) {
      var _this6 = this;

      var applyRenewalId = this.$root.$mp.query.applyRenewalId;
      var choiceReasonItemId = chooiseParam.choiceReasonItemId,
          cancelReason = chooiseParam.reason;

      this.$API.cancelRenewalOrder({ applyRenewalId: applyRenewalId, choiceReasonItemId: choiceReasonItemId, cancelReason: cancelReason }).then(function (_ref13) {
        var _ref14 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref13, 2),
            res = _ref14[0],
            msg = _ref14[1];

        _this6.serverModal = false;
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_index_js__["t" /* showSuccessToast */])({ msg: msg });
      });
    },
    chooseResultParam: function chooseResultParam(param) {
      console.log(param);
      this.serverModal = param.serverModal;
      this.paramObj = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this.paramObj, param);
      this.confirm(param);
    }
  }
});

/***/ }),

/***/ 827:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "content flex-box-content"
  }, [_c('div', {
    staticClass: "flex-box-body"
  }, [_c('div', {
    staticClass: "transactioin-detail-main"
  }, [_c('div', {
    staticClass: "wallet-body-cell"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("在住合同到期日")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.dataObj.endDate))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("续租社区")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.dataObj.communityName))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("续租房间")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.dataObj.rentRelateName))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("续租人")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.dataObj.renterName))])], 1)]), _vm._v(" "), _c('picker', {
    attrs: {
      "value": _vm.monthValue,
      "range": _vm.monthRange,
      "eventid": '0'
    },
    on: {
      "change": _vm.getMonthChange
    }
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("续租租期")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state mr_10"
  }, [_vm._v(_vm._s(_vm.monthRange[_vm.monthValue]))]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("续住时期")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.reletObj.beginDate) + "--" + _vm._s(_vm.reletObj.endDate))])], 1)])], 1)]), _vm._v(" "), _vm._l((_vm.statusList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "status-cells"
    }, [_c('p', {
      staticClass: "times"
    }, [_vm._v(_vm._s(item.createTime))]), _vm._v(" "), _c('p', {
      staticClass: "state"
    }, [_vm._v(_vm._s(item.operation))])], 1)
  })], 2), _vm._v(" "), (_vm.dataObj.status == 10) ? _c('div', {
    staticClass: "flex-box-footer"
  }, [_c('div', {
    staticClass: "btn-content"
  }, [_c('button', {
    staticClass: "edit-btn",
    attrs: {
      "plain": "",
      "eventid": '1'
    },
    on: {
      "click": _vm.updateRenewalOrder
    }
  }, [_vm._v("修改&提交")]), _vm._v(" "), _c('button', {
    staticClass: "cancal-btn",
    attrs: {
      "plain": "",
      "eventid": '2'
    },
    on: {
      "click": _vm.cancelRelet
    }
  }, [_vm._v("取消续租")])], 1)]) : _vm._e(), _vm._v(" "), _c('chooseReason', {
    attrs: {
      "serverModal": _vm.serverModal,
      "chooiseList": _vm.chooiseList,
      "eventid": '3',
      "mpcomid": '0'
    },
    on: {
      "chooseResultParam": _vm.chooseResultParam
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4ab9778e", esExports)
  }
}

/***/ })

},[823]);