require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([41],{

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(750);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_564872dd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(753);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(751)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-564872dd"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_564872dd_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\maintain\\addMaintain\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-564872dd", Component.options)
  } else {
    hotAPI.reload("data-v-564872dd", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 751:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_center_communityPickerByContract__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_center_chooseDate__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils__ = __webpack_require__(2);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      contractObj: {
        communityId: '',
        repairItemId: '',
        repairItemPrice: 0,
        checkedValue: '',
        otherRemark: '',
        remark: '',
        date: '',
        time: '',
        rentalContractId: ''
      },
      cleanItemList: [],
      remarkList: [{ title: '小主不在家，可由管家带进房间（请带鞋套）', id: 10, checked: false }, { title: '跟小主另外约时间维修', id: 20, checked: false }, { title: '其他', id: 30, checked: false }],
      remarkInputModal: false
    };
  },

  components: { communityPickerByContract: __WEBPACK_IMPORTED_MODULE_2__components_center_communityPickerByContract__["a" /* default */], ChooseDate: __WEBPACK_IMPORTED_MODULE_3__components_center_chooseDate__["a" /* default */] },
  onShow: function onShow() {
    this.contractObj.checkedValue = '';
    this.contractObj.repairItemId = '';
  },

  methods: {
    // 根据社区id和是否有效状态查找该社区所拥有的维修服务项
    getRepairRoomItem: function getRepairRoomItem(communityId) {
      var _this = this;

      this.contractObj.checkedValue = '';
      this.contractObj.repairItemId = '';
      var param = {
        communityId: communityId,
        isValid: true
      };
      this.$API.getRepairRoomItem(param).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        _this.cleanItemList = res;
      });
    },

    // 单选，切换选择服务内容
    getCleanItem: function getCleanItem(e) {
      var _this2 = this;

      this.contractObj.checkedValue = e.mp.detail.value;
      this.cleanItemList.filter(function (item, index) {
        if (item.repairItemId === e.mp.detail.value) {
          item.checked = true;
          _this2.contractObj.repairItemId = item.repairItemId;
          _this2.contractObj.repairItemPrice = item.repairItemPrice;
        } else {
          item.checked = false;
        }
      });
    },
    getRemark: function getRemark(e) {
      var value = Number(e.mp.detail.value);
      this.remarkInputModal = value === 30;
      var remarkMap = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map___default.a([[10, '小主不在家，可由管家带进房间（请带鞋套）'], [20, '跟小主另外约时间打扫'], [30, this.contractObj.otherRemark]]);
      this.contractObj.remark = remarkMap.get(value);
      console.log(this.contractObj.remark);
      this.remarkList.filter(function (item, index) {
        if (item.id === value) {
          item.checked = true;
        } else {
          item.checked = false;
        }
      });
    },
    applyRepairRoom: function applyRepairRoom() {
      var _this3 = this;

      var _contractObj = this.contractObj,
          communityId = _contractObj.communityId,
          repairItemId = _contractObj.repairItemId,
          remark = _contractObj.remark,
          otherRemark = _contractObj.otherRemark,
          rentalContractId = _contractObj.rentalContractId,
          date = _contractObj.date,
          time = _contractObj.time;

      var startTime = (date + ' ' + time + ':00').split('/').join('-');
      var param = { communityId: communityId, repairItemId: repairItemId, rentalContractId: rentalContractId, startTime: startTime, remark: remark || otherRemark };
      this.$API.applyRepairRoom(param).then(function (_ref3) {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
            res = _ref4[0],
            msg = _ref4[1];

        _this3.Tracks.pageSaveParams({ serial: 17 });
        Object(__WEBPACK_IMPORTED_MODULE_4__utils__["t" /* showSuccessToast */])({});
      });
    },
    getContractChecked: function getContractChecked(param) {
      console.log(param);
      this.contractObj.rentalContractId = param.contractChecked;
      this.contractObj.communityId = param.communityId;
      this.getRepairRoomItem(param.communityId);
    },
    getDate: function getDate(param) {
      console.log(param);
      this.contractObj.date = param.date;
      this.contractObj.time = param.time;
    }
  }
});

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex-box-content clean-content"
  }, [_c('div', {
    staticClass: "flex-box-body normalBg"
  }, [_c('div', {
    staticClass: "project-title"
  }, [_vm._v("基本信息")]), _vm._v(" "), _c('div', {
    staticClass: "base-message"
  }, [_c('communityPickerByContract', {
    attrs: {
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "getContractChecked": _vm.getContractChecked
    }
  }), _vm._v(" "), _c('ChooseDate', {
    attrs: {
      "eventid": '1',
      "mpcomid": '1'
    },
    on: {
      "getDateChange": _vm.getDate
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "project-title"
  }, [_vm._v("维修类型")]), _vm._v(" "), _c('div', {
    staticClass: "problem-main"
  }, [_c('div', {
    staticClass: "problem-content"
  }, [_c('radio-group', {
    staticClass: "radio-group",
    attrs: {
      "eventid": '2',
      "mpcomid": '2'
    },
    on: {
      "change": _vm.getCleanItem
    }
  }, _vm._l((_vm.cleanItemList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "complaint-box"
    }, [_c('label', {
      staticClass: "radio-box"
    }, [_c('div', {
      staticClass: "question-cells"
    }, [_c('div', [_c('radio', {
      staticClass: "radio",
      attrs: {
        "color": "#BC171C",
        "value": item.repairItemId,
        "checked": item.checked
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.repairItemName))])], 1), _vm._v(" "), _c('b', {
      staticClass: "standard",
      class: _vm.contractObj.checkedValue == item.repairItemId ? 'arrow-top' : 'arrow-bottom'
    })], 1), _vm._v(" "), (_vm.contractObj.checkedValue == item.repairItemId) ? _c('div', {
      staticClass: "answer-cells"
    }, [_vm._v("\n                " + _vm._s(item.repairItemDescribe) + "\n              ")]) : _vm._e()])], 1)
  }))], 1)]), _vm._v(" "), _c('div', {
    staticClass: "project-title"
  }, [_vm._v("备注")]), _vm._v(" "), _c('div', {
    staticClass: "problem-main"
  }, [_c('div', {
    staticClass: "problem-content"
  }, [_c('radio-group', {
    staticClass: "radio-group",
    attrs: {
      "eventid": '3',
      "mpcomid": '3'
    },
    on: {
      "change": _vm.getRemark
    }
  }, _vm._l((_vm.remarkList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "complaint-box"
    }, [_c('label', {
      staticClass: "radio-box"
    }, [_c('div', {
      staticClass: "question-cells"
    }, [_c('div', [_c('radio', {
      staticClass: "radio",
      attrs: {
        "color": "#BC171C",
        "value": item.id,
        "checked": item.checked
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.title))])], 1)])])], 1)
  })), _vm._v(" "), (_vm.remarkInputModal) ? _c('p', [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.contractObj.otherRemark),
      expression: "contractObj.otherRemark"
    }],
    staticClass: "textareaInput",
    attrs: {
      "placeholder": "请输入你的备注信息~",
      "placeholder-class": "plClass",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.contractObj.otherRemark)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.contractObj.otherRemark = $event.target.value
      }
    }
  })]) : _vm._e()], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "flex-box-footer whiteBg"
  }, [_c('div', {
    staticClass: "spaceBetween"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('p', {
    staticClass: "price"
  }, [_vm._v("¥" + _vm._s(_vm.contractObj.repairItemPrice))]), _vm._v(" "), _c('p', {
    staticClass: "state"
  }, [_vm._v("维修服务完成后支付")]), _c('p')], 1), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('button', {
    staticClass: "apply-button",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.applyRepairRoom
    }
  }, [_vm._v("提交预约")])], 1)])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-564872dd", esExports)
  }
}

/***/ })

},[749]);