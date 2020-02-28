require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([8],{

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(658);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_152d7378_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(665);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(659)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-152d7378"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_152d7378_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\insurance\\insuranceList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-152d7378", Component.options)
  } else {
    hotAPI.reload("data-v-152d7378", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 659:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__warnConponent__ = __webpack_require__(661);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: { WarnConponent: __WEBPACK_IMPORTED_MODULE_3__warnConponent__["a" /* default */] },
  data: function data() {
    return {
      tabsIndex: 0,
      tabsArr: [{ title: '保障中', status: 30 }, { title: '历史保险', status: 40 }],
      insuranceList: [],
      stateObj: {
        10: '无效',
        20: '申请中',
        30: '保障中',
        40: '已失效'
      },
      showNormalPage: false,
      zkwyObject: {}
    };
  },
  onLoad: function onLoad() {
    this.tabsIndex = 0;
    this.insuranceList = [];
    this.getInsuranceList(50);
    this.getInsuranceList(30);
  },

  methods: {
    natoUrl: function natoUrl() {
      global.mpvue.navigateTo({
        url: '/pages/insurance/renterInsurance/main'
      });
    },
    getInsuranceList: function getInsuranceList() {
      var _this = this;

      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;

      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync.memberId;

      this.$API.getInsuranceList({ memberId: memberId, status: status }).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 3),
            res = _ref2[0],
            msg = _ref2[1],
            showNormalPage = _ref2[2];

        _this.insuranceList = _this.insuranceList.concat(res);
        _this.zkwyObject = _this.insuranceList[0];
        _this.showNormalPage = showNormalPage;
      });
    },
    rediToUrl: function rediToUrl(url, item) {
      var params = Object.prototype.toString.call(item) === '[object Object]' ? __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(item) : item;
      console.log(params);
      global.mpvue.navigateTo({
        url: url + ('?params=' + encodeURIComponent(params))
      });
    },
    getMiniMemberCouponList: function getMiniMemberCouponList(tabsIndex, status) {
      this.insuranceList = [];
      this.tabsIndex = tabsIndex;
      if (tabsIndex === 0) {
        this.getInsuranceList(50);
        this.getInsuranceList(status);
      } else {
        this.getInsuranceList(status);
      }
    },
    getZkwyObject: function getZkwyObject(object) {
      this.getZkwyObject = object;
    }
  }
});

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_warnConponent_vue__ = __webpack_require__(663);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_cd14666c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_warnConponent_vue__ = __webpack_require__(664);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(662)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cd14666c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_warnConponent_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_cd14666c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_warnConponent_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\insurance\\insuranceList\\warnConponent.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] warnConponent.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cd14666c", Component.options)
  } else {
    hotAPI.reload("data-v-cd14666c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 662:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      animationData: false,
      iconList: [{ title: '微信好友', fbt: '', openType: 'share', iconSrc: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/invite/wx_icon.png' }, { title: '生成海报', fbt: '分享到朋友圈', openType: 'getUserInfo', iconSrc: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/invite/friend_icon.png' }]
    };
  },

  props: {
    shareModal: {
      type: Boolean,
      default: false
    },
    zkwyObject: {
      type: Object,
      default: {}
    },
    tabsIndex: {
      type: Number,
      default: 0
    }
  },
  onUnLoad: function onUnLoad() {
    console.log(333);
    this.zkwyObject = {};
  },

  methods: {
    hideModal: function hideModal() {
      this.shareModal = false;
      this.$emit('changeShareModal', false);
    },
    insuranceApplySwitch: function insuranceApplySwitch(event) {
      var _this = this;

      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync.memberId;

      var _zkwyObject = this.zkwyObject,
          contractId = _zkwyObject.contractId,
          insuranceId = _zkwyObject.insuranceId,
          autoInsurance = _zkwyObject.autoInsurance;

      var alert = autoInsurance ? '关闭' : '开启';
      Object(__WEBPACK_IMPORTED_MODULE_2__utils__["s" /* showModal */])({
        content: '\u4F60\u786E\u5B9A' + alert + '\u6B21\u6708\u81EA\u52A8\u7EED\u4FDD?',
        showCancel: true,
        fn: function fn() {
          _this.$API.insuranceApplyCancel({ memberId: memberId, contractId: contractId, insuranceId: insuranceId, autoInsurance: !autoInsurance }).then(function (_ref) {
            var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
                res = _ref2[0],
                msg = _ref2[1];

            Object(__WEBPACK_IMPORTED_MODULE_2__utils__["t" /* showSuccessToast */])({ msg: '操作成功' });
            _this.zkwyObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, _this.zkwyObject, {
              autoInsurance: !autoInsurance
            });
            _this.$emit('getZkwyObject', _this.zkwyObject);
          });
        },
        cancelFn: function cancelFn() {
          var autoInsurance = _this.zkwyObject.autoInsurance;

          _this.zkwyObject = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, _this.zkwyObject, {
            autoInsurance: autoInsurance
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.tabsIndex === 0) ? _c('div', {
    staticClass: "warn-body"
  }, [_c('div', {
    staticClass: "space-box"
  }, [_c('p', [_vm._v("次月自动续保")]), _vm._v(" "), _c('div', [_c('switch', {
    staticStyle: {
      "zoom": "0.8"
    },
    attrs: {
      "checked": _vm.zkwyObject.autoInsurance,
      "eventid": '0'
    },
    on: {
      "change": _vm.insuranceApplySwitch
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "space-box",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.shareModal = true
      }
    }
  }, [_c('p', [_vm._v("出险理赔")]), _vm._v(" "), _c('div', [_c('b', {
    staticClass: "arrow-right"
  })], 1)], 1)]) : _vm._e(), _vm._v(" "), (_vm.shareModal) ? _c('div', {
    staticClass: "shadow_content",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.hideModal
    }
  }) : _vm._e(), _vm._v(" "), (_vm.shareModal) ? _c('div', {
    staticClass: "choosen",
    attrs: {
      "animation": _vm.animationData
    }
  }, [_c('div', {
    staticClass: "container-box"
  }, [_c('div', {
    staticClass: "close-modal",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.hideModal
    }
  }, [_vm._v("\n        x\n      ")]), _vm._v(" "), _c('div', {
    staticClass: "status-body"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("出险理赔")]), _vm._v(" "), _c('h3', {
    staticClass: "call"
  }, [_vm._v("出险请拨打：95500")]), _vm._v(" "), _c('p', {
    staticClass: "status"
  }, [_vm._v("1、人工反馈时，需要提供保险订单号。")]), _vm._v(" "), _c('p', {
    staticClass: "status"
  }, [_vm._v("2、同时保护现场环境，等待保险理赔人员上门核实")])], 1)])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cd14666c", esExports)
  }
}

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "insurance-content"
  }, [_c('div', {
    staticClass: "insurance-detail-main"
  }, [_c('div', {
    staticClass: "mp-tabs tab-content"
  }, _vm._l((_vm.tabsArr), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "tabs-item bold",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.getMiniMemberCouponList(index, item.status)
        }
      }
    }, [_c('span', {
      staticClass: "title",
      class: _vm.tabsIndex == index ? 'active' : ''
    }, [_vm._v(_vm._s(item.title))])])
  })), _vm._v(" "), (_vm.insuranceList.length) ? _c('div', {
    staticClass: "insurance-list-content"
  }, [_c('div', {
    staticClass: "detail-body"
  }, _vm._l((_vm.insuranceList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "wallet-body-cell",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.rediToUrl('/pages/insurance/insuranceDetail/main', item)
        }
      }
    }, [_c('div', {
      staticClass: "box"
    }, [_c('div', {
      staticClass: "box-left flex-direction"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.insuranceName))]), _vm._v(" "), _c('p', {
      staticClass: "state"
    }, [_vm._v("保障日期：" + _vm._s(item.efficientDate) + "至" + _vm._s(item.terminationDate))])], 1), _vm._v(" "), _c('div', {
      staticClass: "seal"
    }, [(item.status == 50) ? _c('p', {
      staticClass: "status"
    }, [_vm._v("\n                  待生效\n                ")]) : _c('image', {
      staticClass: "imgClass",
      attrs: {
        "mode": "widthFix",
        "src": item.status == 30 ? 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/insurance/insing.png' : 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/insurance/insed.png'
      }
    })], 1)])])
  })), _vm._v(" "), _c('WarnConponent', {
    attrs: {
      "zkwyObject": _vm.zkwyObject,
      "tabsIndex": _vm.tabsIndex,
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "getZkwyObject": _vm.getZkwyObject
    }
  })], 1) : _c('div', [(_vm.tabsIndex == 0) ? _c('div', {
    staticClass: "detail-body"
  }, [_c('div', {
    staticClass: "insuranceList-header"
  }, [_c('image', {
    staticClass: "null",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/null.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("暂无生效保险")]), _vm._v(" "), _c('button', {
    staticClass: "allow-button",
    attrs: {
      "type": "warn",
      "eventid": '3'
    },
    on: {
      "click": _vm.natoUrl
    }
  }, [_vm._v("立即购买")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.tabsIndex == 1) ? _c('div', {
    staticClass: "detail-body"
  }, [_c('NullComponent', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1) : _vm._e()])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-152d7378", esExports)
  }
}

/***/ })

},[657]);