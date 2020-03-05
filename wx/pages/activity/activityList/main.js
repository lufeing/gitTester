require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([119],{

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(202);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_335f7324_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(208);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(203)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-335f7324"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_335f7324_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\activity\\activityList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-335f7324", Component.options)
  } else {
    hotAPI.reload("data-v-335f7324", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 203:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_reachBottomMixin_js__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_blankPage__ = __webpack_require__(92);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_reachBottomMixin_js__["a" /* default */]],
  data: function data() {
    return {
      tabsArr: ['正在进行', '历史活动'],
      tabsIndex: 0,
      activityList: [],
      count: 0
    };
  },

  components: { BlankPage: __WEBPACK_IMPORTED_MODULE_4__components_blankPage__["a" /* default */] },
  onShow: function onShow() {
    this.activityList = [];
    this.tabsIndex = 0;
    this.count = 0;
    this.getDataList();
  },

  methods: {
    getDataList: function getDataList() {
      var _this = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$activityShowStat = _ref.activityShowStatus,
          activityShowStatus = _ref$activityShowStat === undefined ? 1 : _ref$activityShowStat,
          _ref$activityType = _ref.activityType,
          activityType = _ref$activityType === undefined ? 0 : _ref$activityType;

      var activityCommunityCity = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('cityId');
      var activityStartType = this.$root.$mp.query.activityStartType;
      var size = this.size,
          current = this.current;

      this.$API.getMiniAppActivityInfoPage({ activityCommunityCity: activityCommunityCity, activityShowStatus: activityShowStatus, activityStartType: activityStartType, activityType: activityType, size: size, current: current }).then(function (_ref2) {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
            res = _ref3[0],
            msg = _ref3[1];

        var pages = res.pages,
            records = res.records,
            total = res.total;

        if (res.records.length === 0 && _this.count === 0) {
          if (activityType === 1) return false;
          _this.tabsIndex = 1;
          _this.count++;
          _this.getDataList({ activityType: 1 });
        } else {
          records.map(function (item) {
            item.activityApplyEndDateTime = item.activityApplyEndDateTime.substring(0, 10);
          });
          _this.activityList = _this.activityList.concat(records);
          __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(_this, {
            pages: pages, total: total
          });
        }
      });
    },
    changeTab: function changeTab(tabsIndex) {
      this.tabsIndex = tabsIndex;
      this.activityList = [];
      this.getDataList({ activityType: tabsIndex });
    },
    navigaTo: function navigaTo(_ref4) {
      var activityDetailInfoId = _ref4.activityDetailInfoId;

      global.mpvue.navigateTo({
        url: '/pages/activity/activityDetail/main' + ('?activityDetailInfoId=' + activityDetailInfoId)
      });
    }
  }
});

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "activity_content"
  }, [_c('header', {
    staticClass: "tabs_body"
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
  }))]), _vm._v(" "), (_vm.activityList.length) ? _c('div', {
    staticClass: "activity_body"
  }, _vm._l((_vm.activityList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "activity_box",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          _vm.navigaTo(item)
        }
      }
    }, [_c('header', {
      staticClass: "activity_header"
    }, [_c('div', {
      staticClass: "left"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.activityInfoTitle))]), _vm._v(" "), _c('p', {
      staticClass: "free"
    }, [_vm._v(_vm._s(item.activityPayType === 0 ? '免费' : '付费'))])], 1), _vm._v(" "), _c('div', [_c('p', {
      staticClass: "endTime"
    }, [_vm._v("报名截止：" + _vm._s(item.activityApplyEndDateTime))])], 1)]), _vm._v(" "), _c('image', {
      staticClass: "bannerImg",
      attrs: {
        "src": item.activityPicUrl
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "address"
    }, [_c('image', {
      staticClass: "imageClass",
      attrs: {
        "mode": "widthFix",
        "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/address.png"
      }
    }), _vm._v(" "), _c('p', {}, [_vm._v(_vm._s(item.activityCommunityAddress))])], 1), _vm._v(" "), _c('p', {
      staticClass: "activity_intro"
    }, [_vm._v(_vm._s(item.activityInfoDescription))])], 1)
  })) : _c('div', {
    staticClass: "activity_body"
  }, [_c('blank-page', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-335f7324", esExports)
  }
}

/***/ })

},[201]);