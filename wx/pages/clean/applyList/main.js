require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([89],{

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(419);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 419:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_34c45547_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(422);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(420)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-34c45547"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_34c45547_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\clean\\applyList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-34c45547", Component.options)
  } else {
    hotAPI.reload("data-v-34c45547", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 420:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(2);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      dataList: [],
      cleanStatusObj: {
        10: '用户申请', 15: '用户取消', 20: '管家接单', 25: '管家拒单', 50: '已完成'
      },
      showNormalPage: false
    };
  },
  onShow: function onShow() {
    this.getMyCleanRoomApply();
  },

  methods: {
    getMyCleanRoomApply: function getMyCleanRoomApply() {
      var _this = this;

      this.$API.getMyCleanRoomApply().then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 3),
            res = _ref2[0],
            msg = _ref2[1],
            showNormalPage = _ref2[2];

        _this.dataList = res;
        _this.showNormalPage = showNormalPage;
      });
    },
    naviToUrl: function naviToUrl(_ref3) {
      var cleanStatus = _ref3.cleanStatus,
          isPaid = _ref3.isPaid,
          isReview = _ref3.isReview,
          reply = _ref3.reply,
          realAmount = _ref3.realAmount,
          communityId = _ref3.communityId,
          rentalContractId = _ref3.rentalContractId,
          cleanRoomId = _ref3.cleanRoomId;

      var url;
      if (cleanStatus === 25) {
        url = '/pages/clean/refuseOrder/main' + Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* getParamString */])({ reply: reply });
        global.mpvue.navigateTo({
          url: url
        });
      } else if (cleanStatus === 50) {
        if (isPaid === false) {
          url = '/pages/clean/completeOrder/main' + Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* getParamString */])({ reply: reply, realAmount: realAmount, communityId: communityId });
        } else {
          if (!isReview) {
            url = '/pages/center/comment/main' + Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* getParamString */])({ communityId: communityId, rentalContractId: rentalContractId, operationId: cleanRoomId, operationType: 7 });
          }
        }
        if (url) {
          global.mpvue.navigateTo({
            url: url
          });
        }
      }
    },
    cancelCleanRoomApply: function cancelCleanRoomApply(cleanRoomId) {
      var _this2 = this;

      Object(__WEBPACK_IMPORTED_MODULE_1__utils__["s" /* showModal */])({
        content: '你确定取消该预约?',
        fn: function fn() {
          _this2.$API.cancelCleanRoomApply({ cleanRoomId: cleanRoomId }).then(function (_ref4) {
            var _ref5 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref4, 2),
                res = _ref5[0],
                msg = _ref5[1];

            _this2.getMyCleanRoomApply();
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 422:
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
      staticClass: "cleanItemName"
    }, [_vm._v(_vm._s(item.cleanItemName))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(!item.isReview ? _vm.cleanStatusObj[item.cleanStatus] : '已点评'))])], 1), _vm._v(" "), _c('div', {
      staticClass: "body"
    }, [_c('div', {
      staticClass: "flex-space"
    }, [_c('p', [_vm._v(_vm._s(item.communityName))]), _vm._v(" "), _c('p', [_vm._v("¥" + _vm._s(item.realAmount) + "元")])], 1), _vm._v(" "), _c('div', {
      staticClass: "flex-start"
    }, [_c('p', [_vm._v("预约时间:" + _vm._s(item.startTime))])], 1), _vm._v(" "), (item.cleanStatus == 10) ? _c('div', {
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
          _vm.cancelCleanRoomApply(item.cleanRoomId)
        }
      }
    }, [_vm._v("取消")])], 1)], 1) : (item.cleanStatus == 50 && item.isPaid == 1 && item.isReview == false) ? _c('div', {
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-34c45547", esExports)
  }
}

/***/ })

},[418]);