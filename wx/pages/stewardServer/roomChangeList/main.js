require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([23],{

/***/ 857:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(858);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 858:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(860);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_77f4bb0a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(861);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(859)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-77f4bb0a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_77f4bb0a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\stewardServer\\roomChangeList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-77f4bb0a", Component.options)
  } else {
    hotAPI.reload("data-v-77f4bb0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 859:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 860:
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
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      dataList: [],
      contractStatusObj: {
        10: '草稿', 11: '用户创建草稿', 12: '等待确认', 20: '确认', 30: '生效', 40: '终止', 50: '取消'
      },
      contractStatusList: [],
      showNormalPage: false
    };
  },
  onShow: function onShow() {
    this.selectChangeRoomStatusList();
    this.changeRoomSelectListByMemberId();
  },

  methods: {
    // 获取合同状态lsit
    selectChangeRoomStatusList: function selectChangeRoomStatusList() {
      var _this = this;

      this.$API.selectChangeRoomStatusList().then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        console.log(res);
        res.map(function (item, index) {
          _this.contractStatusObj[item.code] = item.name;
        });
      });
    },
    changeRoomSelectListByMemberId: function changeRoomSelectListByMemberId() {
      var _this2 = this;

      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync.memberId;

      this.$API.changeRoomSelectListByMemberId({ memberId: memberId }).then(function (_ref3) {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref3, 3),
            res = _ref4[0],
            msg = _ref4[1],
            showNormalPage = _ref4[2];

        _this2.dataList = res;
        _this2.showNormalPage = showNormalPage;
      });
    },
    naviToUrl: function naviToUrl(applyChangeRoomId, status) {
      var param = { applyChangeRoomId: applyChangeRoomId, status: status };
      global.mpvue.navigateTo({
        url: '/pages/stewardServer/roomChangeDetail/main' + Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* getParamString */])(param)
      });
    },
    naviToComment: function naviToComment(_ref5) {
      var communityId = _ref5.communityId,
          rentalContractId = _ref5.rentalContractId,
          applyChangeRoomId = _ref5.applyChangeRoomId;

      var param = { communityId: communityId, rentalContractId: rentalContractId, operationId: applyChangeRoomId, operationType: 3 };
      var url = '/pages/center/comment/main' + Object(__WEBPACK_IMPORTED_MODULE_1__utils__["g" /* getParamString */])(param);
      global.mpvue.navigateTo({
        url: url
      });
    }
  }
});

/***/ }),

/***/ 861:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.showNormalPage) ? _c('div', {
    staticClass: "contract-list-content"
  }, _vm._l((_vm.dataList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "contract-list-area",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.naviToUrl(item.applyChangeRoomId, item.status)
        }
      }
    }, [_c('div', [_c('div', {
      staticClass: "header"
    }, [_c('p', {
      staticClass: "label-title"
    }, [_vm._v("申请状态")]), _vm._v(" "), _c('p', {
      staticClass: "contract-status"
    }, [_vm._v(_vm._s(_vm.contractStatusObj[item.status]))])], 1), _vm._v(" "), _c('div', {
      staticClass: "body"
    }, [_c('p', [_c('image', {
      staticClass: "imgClass",
      attrs: {
        "src": item.communityImage
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "contract-column"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.communityName))]), _vm._v(" "), _c('p', {
      staticClass: "rentRelateName"
    }, [_vm._v("房间号：" + _vm._s(item.rentRelateName))]), _vm._v(" "), _c('div', {
      staticClass: "detail-message"
    }, [_c('p', [_vm._v("申请日期：" + _vm._s(item.applyDate))]), _vm._v(" "), (item.status == 70 || item.status == 80 && item.isReview == false) ? _c('p', [_c('button', {
      staticClass: "button-warn",
      attrs: {
        "plain": "",
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.naviToComment(item)
        }
      }
    }, [_vm._v("点评")])], 1) : _vm._e()], 1)], 1)], 1)])])
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-77f4bb0a", esExports)
  }
}

/***/ })

},[857]);