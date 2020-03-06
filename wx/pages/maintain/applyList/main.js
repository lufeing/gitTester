require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([40],{

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(755);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(757);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_f0123f86_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(758);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(756)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f0123f86"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_f0123f86_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\maintain\\applyList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f0123f86", Component.options)
  } else {
    hotAPI.reload("data-v-f0123f86", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 756:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_null__ = __webpack_require__(92);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dataList: [{ repairItemName: '全项清洁', communityName: '广州天平架社区', appiontTime: '2019年06月19日', realAmount: 88, repairStatus: 10, isPaid: 0 }, { repairItemName: '全项清洁', communityName: '广州天平架社区', appiontTime: '2019年06月19日', realAmount: 88, repairStatus: 20, isPaid: 0 }, { repairItemName: '全项清洁', communityName: '广州天平架社区', appiontTime: '2019年06月19日', realAmount: 88, repairStatus: 25, isPaid: 0 }, { repairItemName: '全项清洁', communityName: '广州天平架社区', appiontTime: '2019年06月19日', realAmount: 88, repairStatus: 50, isPaid: 0 }, { repairItemName: '全项清洁', communityName: '广州天平架社区', appiontTime: '2019年06月19日', realAmount: 88, repairStatus: 50, isPaid: 1 }],
      repairStatusObj: {
        10: '用户申请', 15: '用户取消', 20: '管家接单', 25: '管家拒单', 50: '已完成'
      },
      showNormalPage: false
    };
  },
  onShow: function onShow() {
    this.getMyRepairRoomApply();
  },

  components: { Null: __WEBPACK_IMPORTED_MODULE_4__components_null__["a" /* default */] },
  methods: {
    getMyRepairRoomApply: function getMyRepairRoomApply() {
      var _this = this;

      this.$API.getMyRepairRoomApply().then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref, 3),
            res = _ref2[0],
            msg = _ref2[1],
            showNormalPage = _ref2[2];

        _this.dataList = res;
        _this.showNormalPage = showNormalPage;
      });
    },
    naviToUrl: function naviToUrl(_ref3) {
      var _this2 = this;

      var repairStatus = _ref3.repairStatus,
          isPaid = _ref3.isPaid,
          isReview = _ref3.isReview,
          reply = _ref3.reply,
          realAmount = _ref3.realAmount,
          communityId = _ref3.communityId,
          rentalContractId = _ref3.rentalContractId,
          repairRoomId = _ref3.repairRoomId;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var url;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (repairStatus === 25) {
                  url = '/pages/clean/refuseOrder/main' + Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* getParamString */])({ reply: reply });
                  global.mpvue.navigateTo({
                    url: url
                  });
                } else if (repairStatus === 50) {
                  if (isPaid === false) {
                    url = '/pages/clean/completeOrder/main' + Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* getParamString */])({ reply: reply, realAmount: realAmount, communityId: communityId });
                  } else {
                    if (!isReview) {
                      url = '/pages/center/comment/main' + Object(__WEBPACK_IMPORTED_MODULE_3__utils__["g" /* getParamString */])({ communityId: communityId, rentalContractId: rentalContractId, operationId: repairRoomId, operationType: 8 });
                    }
                  }
                  if (url) {
                    global.mpvue.navigateTo({
                      url: url
                    });
                  }
                }

              case 1:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    cancelRepairRoomApply: function cancelRepairRoomApply(repairRoomId) {
      var _this3 = this;

      Object(__WEBPACK_IMPORTED_MODULE_3__utils__["s" /* showModal */])({
        content: '你确定取消该预约?',
        fn: function fn() {
          _this3.$API.cancelRepairRoomApply({ repairRoomId: repairRoomId }).then(function (_ref4) {
            var _ref5 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref4, 2),
                res = _ref5[0],
                msg = _ref5[1];

            _this3.getMyRepairRoomApply();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showNormalPage) ? _c('div', {
    staticClass: "clean-content"
  }, [_c('div', {
    staticClass: "clean-body"
  }, _vm._l((_vm.dataList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "clean-cell",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.naviToUrl(item)
        }
      }
    }, [_c('div', {
      staticClass: "header"
    }, [_c('p', {
      staticClass: "repairItemName"
    }, [_vm._v(_vm._s(item.repairItemName))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(!item.isReview ? _vm.repairStatusObj[item.repairStatus] : '已点评'))])], 1), _vm._v(" "), _c('div', {
      staticClass: "body"
    }, [_c('div', {
      staticClass: "flex-space"
    }, [_c('p', [_vm._v(_vm._s(item.communityName))]), _vm._v(" "), _c('p', [_vm._v("¥" + _vm._s(item.realAmount) + "元")])], 1), _vm._v(" "), _c('div', {
      staticClass: "flex-start"
    }, [_c('p', [_vm._v("预约时间:" + _vm._s(item.startTime))])], 1), _vm._v(" "), (item.repairStatus == 10) ? _c('div', {
      staticClass: "flex-end"
    }, [_c('p', [_c('button', {
      staticClass: "button-default",
      attrs: {
        "plain": "",
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.cancelRepairRoomApply(item.repairRoomId)
        }
      }
    }, [_vm._v("取消")])], 1)], 1) : _vm._e(), _vm._v(" "), (item.repairStatus == 50 && item.isPaid == 1 && item.isReview == false) ? _c('div', {
      staticClass: "flex-end"
    }, [_c('p', [_c('button', {
      staticClass: "button-warn",
      attrs: {
        "plain": ""
      }
    }, [_vm._v("点评")])], 1)], 1) : _vm._e()])])
  }))]) : _c('NullComponent', {
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f0123f86", esExports)
  }
}

/***/ })

},[754]);