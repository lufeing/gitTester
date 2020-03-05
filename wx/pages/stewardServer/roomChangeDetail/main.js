require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([25],{

/***/ 848:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(849);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_2ecf6ebd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(852);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(850)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2ecf6ebd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_2ecf6ebd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\stewardServer\\roomChangeDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ecf6ebd", Component.options)
  } else {
    hotAPI.reload("data-v-2ecf6ebd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 850:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index_js__ = __webpack_require__(3);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      monthChoose: '',
      roomType: '',
      roomTypeRange: [],
      houseTypeList: [],
      dateValue: '2019-02-15',
      serverModal: true,
      chooiseList: [],
      chooiseIndex: '',
      paramObj: {
        planChangeDate: ''
      },
      dataObj: {},
      statusList: [],
      detailStatus: '',
      pickerStartTime: ''
    };
  },
  onShow: function onShow() {
    this.roomType = '';
    this.roomTypeRange = [];
  },
  mounted: function mounted() {
    this.pickerStartTime = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index_js__["f" /* getNowFormatDate */])();
    this.detailStatus = this.$root.$mp.query.status;
    this.selectChangeRoomById();
  },

  methods: {
    selectChangeRoomById: function selectChangeRoomById() {
      var _this = this;

      var applyChangeRoomId = this.$root.$mp.query.applyChangeRoomId;

      this.$API.selectChangeRoomById({ applyChangeRoomId: applyChangeRoomId }).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        _this.paramObj = res;
        _this.getHouseType(res.communityId);
        _this.selectChangeRoomLogPage();
      });
    },
    selectChangeRoomLogPage: function selectChangeRoomLogPage() {
      var _this2 = this;

      var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;
      var applyChangeRoomId = this.$root.$mp.query.applyChangeRoomId;

      var current = 1;
      this.$API.selectChangeRoomLogPage({ applyChangeRoomId: applyChangeRoomId, current: current, size: size }).then(function (_ref3) {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
            res = _ref4[0],
            msg = _ref4[1];

        _this2.statusList = res.records;
      });
    },

    // 会员取消换房申请
    cancelChangeRoomById: function cancelChangeRoomById() {
      var applyChangeRoomId = this.$root.$mp.query.applyChangeRoomId;

      this.$API.cancelChangeRoomById({ applyChangeRoomId: applyChangeRoomId }).then(function (_ref5) {
        var _ref6 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
            res = _ref6[0],
            msg = _ref6[1];

        Object(__WEBPACK_IMPORTED_MODULE_1__utils_index_js__["t" /* showSuccessToast */])({ msg: msg });
      });
    },

    // 会员修改换房申请
    updateChangeRoom: function updateChangeRoom() {
      this.$API.updateChangeRoom(this.paramObj).then(function (_ref7) {
        var _ref8 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref7, 2),
            res = _ref8[0],
            msg = _ref8[1];

        Object(__WEBPACK_IMPORTED_MODULE_1__utils_index_js__["t" /* showSuccessToast */])({ msg: msg });
      });
    },
    getHouseType: function getHouseType(communityId) {
      var _this3 = this;

      this.roomTypeRange = [];
      var obj = {
        communityId: this.paramObj.communityId || communityId
      };
      this.$API.queryList(obj).then(function (_ref9) {
        var _ref10 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref9, 2),
            res = _ref10[0],
            msg = _ref10[1];

        _this3.houseTypeList = res;
        res.map(function (item, index) {
          if (item.houseStyleName === _this3.paramObj.houseStyleName) {
            _this3.roomType = index;
          }
          _this3.roomTypeRange.push(item.houseStyleName);
        });
      });
    },
    getHouseTypeChange: function getHouseTypeChange(e) {
      var _this4 = this;

      this.paramObj.houseStyleId = '';
      this.roomType = e.mp.detail.value;
      this.houseTypeList.filter(function (item, index) {
        if (_this4.roomTypeRange[_this4.roomType] === item.houseStyleName) {
          console.log(item.houseStyleId);
          _this4.paramObj.houseStyleId = item.houseStyleId;
          _this4.paramObj.houseStyleName = item.houseStyleName;
        }
      });
    },
    changeApplyReason: function changeApplyReason() {
      var _this5 = this;

      this.$API.selectChangeRoomChoiceList().then(function (_ref11) {
        var _ref12 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref11, 2),
            res = _ref12[0],
            msg = _ref12[1];

        _this5.chooiseList = res;
        res.map(function (item, index) {
          if (item.choiceReason === _this5.paramObj.reason) {
            _this5.chooiseIndex = index;
          }
        });
        _this5.serverModal = false;
      });
    },
    reasonChooised: function reasonChooised(index, choiceReason, choiceReasonItemId) {
      console.log(choiceReasonItemId);
      this.chooiseIndex = index;
      this.paramObj.reason = choiceReason;
      this.paramObj.choiceReasonItemId = choiceReasonItemId;
    },
    confirm: function confirm() {
      this.serverModal = true;
    },
    cancel: function cancel() {
      this.serverModal = true;
    },
    getDateChange: function getDateChange(e) {
      this.paramObj.planChangeDate = e.mp.detail.value;
    }
  }
});

/***/ }),

/***/ 852:
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
  }, [_vm._v("换房社区")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.paramObj.communityName))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("换房房间")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.paramObj.rentRelateName))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("入住人")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.paramObj.renterName))])], 1)]), _vm._v(" "), _c('picker', {
    attrs: {
      "value": _vm.roomType,
      "range": _vm.roomTypeRange,
      "eventid": '0'
    },
    on: {
      "change": _vm.getHouseTypeChange
    }
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("意向房型")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [(!_vm.roomType) ? _c('p', {
    staticClass: "plState"
  }, [_vm._v("请选择意向房型")]) : _vm._e(), _vm._v(" "), _c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.roomTypeRange[_vm.roomType]))]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)])]), _vm._v(" "), _c('picker', {
    attrs: {
      "mode": "date",
      "value": _vm.paramObj.planChangeDate,
      "start": _vm.pickerStartTime,
      "end": "2019-06-01",
      "eventid": '1'
    },
    on: {
      "change": _vm.getDateChange
    }
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("换房日期")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state mr_10"
  }, [_vm._v(_vm._s(_vm.paramObj.planChangeDate))]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "box",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.changeApplyReason
    }
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("换房原因")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.paramObj.reason))]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("换房要求")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "right-box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.paramObj.changeRequire),
      expression: "paramObj.changeRequire"
    }],
    staticClass: "inputClass",
    attrs: {
      "type": "text",
      "placeholder": "请输入你的换房要求",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.paramObj.changeRequire)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.paramObj.changeRequire = $event.target.value
      }
    }
  })])], 1)])], 1)]), _vm._v(" "), _vm._l((_vm.statusList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "status-cells"
    }, [_c('p', {
      staticClass: "times"
    }, [_vm._v(_vm._s(item.createTime))]), _vm._v(" "), _c('p', {
      staticClass: "state"
    }, [_vm._v(_vm._s(item.operation))])], 1)
  })], 2), _vm._v(" "), (_vm.detailStatus == 10) ? _c('div', {
    staticClass: "flex-box-footer"
  }, [_c('div', {
    staticClass: "btn-content"
  }, [_c('button', {
    staticClass: "edit-btn",
    attrs: {
      "plain": "",
      "eventid": '4'
    },
    on: {
      "click": _vm.updateChangeRoom
    }
  }, [_vm._v("修改&提交")]), _vm._v(" "), _c('button', {
    staticClass: "cancal-btn",
    attrs: {
      "plain": "",
      "eventid": '5'
    },
    on: {
      "click": _vm.cancelChangeRoomById
    }
  }, [_vm._v("取消换房")])], 1)]) : _vm._e(), _vm._v(" "), _c('modal', {
    attrs: {
      "title": "反馈您取消续租的原因：",
      "hidden": _vm.serverModal,
      "eventid": '7',
      "mpcomid": '0'
    },
    on: {
      "confirm": _vm.confirm,
      "cancel": _vm.cancel
    }
  }, [_c('div', {
    staticClass: "modal-body"
  }, _vm._l((_vm.chooiseList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "reason"
    }, [_c('span', {
      staticClass: "label",
      class: _vm.chooiseIndex === index ? 'active' : '',
      attrs: {
        "eventid": '6_' + index
      },
      on: {
        "click": function($event) {
          _vm.reasonChooised(index)
        }
      }
    }, [_vm._v(_vm._s(item.choiceReason))])])
  }))])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-2ecf6ebd", esExports)
  }
}

/***/ })

},[848]);