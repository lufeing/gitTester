require("../../../../common/manifest.js")
require("../../../../common/vendor.js")
global.webpackJsonpMpvue([105],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(308);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_20438e3d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(313);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(309)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-20438e3d"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_20438e3d_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\center\\appointment\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20438e3d", Component.options)
  } else {
    hotAPI.reload("data-v-20438e3d", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 309:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_timers__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_timers___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_timers__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      communityIds: [],
      pageObj: {
        current: 1,
        size: 50
      },
      statusObj: {},
      showNormalPage: false
    };
  },
  onUnload: function onUnload() {
    global.mpvue.switchTab({
      url: '/pages/center/my/main'
    });
  },
  onShow: function onShow() {
    this.selectOrderPageByMemberId();
  },

  methods: {
    selectStatusList: function selectStatusList() {
      var _this = this;

      this.$API.selectStatusList().then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        res.map(function (item, index) {
          _this.statusObj[item.code] = item.name;
        });
      });
    },
    selectOrderPageByMemberId: function selectOrderPageByMemberId() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _mpvueGetStorageSync, memberId, _pageObj, current, size;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.selectStatusList();

              case 2:
                _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_4__utils_index_js__["l" /* mpvueGetStorageSync */])('memberObj'), memberId = _mpvueGetStorageSync.memberId;
                _pageObj = _this2.pageObj, current = _pageObj.current, size = _pageObj.size;

                _this2.$API.selectOrderPageByMemberId({ memberId: memberId, current: current, size: size }).then(function (_ref3) {
                  var _ref4 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref3, 3),
                      res = _ref4[0],
                      msg = _ref4[1],
                      showNormalPage = _ref4[2];

                  _this2.showNormalPage = showNormalPage;
                  _this2.dataList = res.records;
                  Object(__WEBPACK_IMPORTED_MODULE_5_timers__["setTimeout"])(function () {
                    _this2.statusObj = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, _this2.statusObj);
                  }, 0);
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    makePhoneCall: function makePhoneCall(communityPhone) {
      Object(__WEBPACK_IMPORTED_MODULE_4__utils_index_js__["n" /* mpvueMakePhoneCall */])(communityPhone);
    },
    naviToUrl: function naviToUrl(_ref5) {
      var communityId = _ref5.communityId,
          bookSeeRoomId = _ref5.bookSeeRoomId,
          isReview = _ref5.isReview;

      if (isReview) return false;
      var url = '/pages/center/comment/main' + ('?communityId=' + communityId + '&operationId=' + bookSeeRoomId + '&operationType=1');
      global.mpvue.navigateTo({
        url: url
      });
    }
  }
});

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "appointment-content"
  }, [(_vm.dataList.length) ? _c('div', {
    staticClass: "appointment-list"
  }, _vm._l((_vm.dataList), function(item, index) {
    return _c('navigator', {
      key: index,
      staticClass: "appointment-item",
      attrs: {
        "url": '/pages/center/appointment/appointmentDetail/main?bookSeeRoomId=' + item.bookSeeRoomId + '&communityId=' + item.communityId + '&status=' + item.status
      }
    }, [_c('div', {
      staticClass: "appointment-space-box"
    }, [_c('p', [_vm._v("约看人：" + _vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "handle-status"
    }, [(item.status == 50 || item.status == 60 || item.status == 70) ? _c('p', {
      staticClass: "orangeBg",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.naviToUrl(item)
        }
      }
    }, [_vm._v(_vm._s(item.isReview ? '已点评' : '点评'))]) : _vm._e(), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.statusObj[item.status]))])], 1)], 1), _vm._v(" "), _c('p', {
      staticClass: "times"
    }, [_vm._v("看房时间：" + _vm._s(item.meetTime))]), _vm._v(" "), _c('div', {
      staticClass: "appointment-space-box"
    }, [_c('image', {
      staticClass: "communityImg",
      attrs: {
        "lazy-load": "",
        "mode": "widthFix",
        "src": item.communityPicture
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "state-main"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.communityName))]), _vm._v(" "), (item.houseStyleName) ? _c('p', [_vm._v(_vm._s(item.houseStyleName))]) : _vm._e(), _vm._v(" "), _c('div', {
      staticClass: "location-content"
    }, [_c('image', {
      staticClass: "locationImg",
      attrs: {
        "mode": "widthFix",
        "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/appointment/icon_location2x.png"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "address"
    }, [_vm._v(_vm._s(item.communityAddress))])], 1)], 1), _vm._v(" "), _c('div', {
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.makePhoneCall(item.communityPhone)
        }
      }
    }, [_c('image', {
      staticClass: "phoneImg",
      attrs: {
        "lazy-load": "",
        "mode": "widthFix",
        "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/appointment/dianhua2x.png"
      }
    })])])], 1)
  })) : _c('NullComponent', {
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-20438e3d", esExports)
  }
}

/***/ })

},[307]);