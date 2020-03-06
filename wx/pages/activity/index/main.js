require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([118],{

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(220);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_30b190e7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(226);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(221)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-30b190e7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_30b190e7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\activity\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30b190e7", Component.options)
  } else {
    hotAPI.reload("data-v-30b190e7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 221:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_search_searchInput__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_blankPage__ = __webpack_require__(94);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      swiperList: [],
      videoList: [],
      iconList: [{ id: 1, title: '聚会', imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/meeting.png' }, { id: 2, title: '电影', imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/movie.png' }, { id: 3, title: '游戏', imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/game.png' }, { id: 4, title: '更多', imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/more.png' }],
      locationObj: {
        cityName: '广州'
      }
    };
  },

  components: {
    searchInput: __WEBPACK_IMPORTED_MODULE_1__components_home_search_searchInput__["a" /* default */], BlankPage: __WEBPACK_IMPORTED_MODULE_3__components_blankPage__["a" /* default */]
  },
  onShow: function onShow() {
    this.locationObj.cityName = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('cityName') || '广州';
    this.getMiniAppActivityInfoPage();
    this.selectFunVedioMiniAppInfo();
    this.getAllActivityType();
  },

  methods: {
    // 查询轮播图片
    getMiniAppActivityInfoPage: function getMiniAppActivityInfoPage() {
      var _this = this;

      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$activityShowStat = _ref.activityShowStatus,
          activityShowStatus = _ref$activityShowStat === undefined ? 2 : _ref$activityShowStat,
          _ref$activityType = _ref.activityType,
          activityType = _ref$activityType === undefined ? 0 : _ref$activityType;

      var activityCommunityCity = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('cityId');
      this.$API.getMiniAppActivityInfoPage({ activityCommunityCity: activityCommunityCity, activityShowStatus: activityShowStatus, activityType: activityType }).then(function (_ref2) {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
            res = _ref3[0],
            msg = _ref3[1];

        _this.swiperList = res.records;
      });
    },
    addActivityApplyInfoVo: function addActivityApplyInfoVo() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          activityDetailInfoId = _ref4.activityDetailInfoId;

      var _ref5 = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('memberObj') || {},
          memberId = _ref5.memberId;

      if (!memberId) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["s" /* showModal */])({
          content: '你还不是会员,请注册登录',
          showCancel: true,
          fn: function fn() {
            global.mpvue.navigateTo({
              url: '/pages/auth/phoneLogin/main'
            });
          }
        });
      } else {
        global.mpvue.navigateTo({
          url: '/pages/activity/activityDetail/main?activityDetailInfoId=' + activityDetailInfoId
        });
      }
    },

    // 小程序查询趣视频信息
    selectFunVedioMiniAppInfo: function selectFunVedioMiniAppInfo() {
      var _this2 = this;

      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$showStatus = _ref6.showStatus,
          showStatus = _ref6$showStatus === undefined ? 2 : _ref6$showStatus,
          _ref6$vedioType = _ref6.vedioType,
          vedioType = _ref6$vedioType === undefined ? 0 : _ref6$vedioType;

      var cityId = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('cityId');
      this.$API.selectFunVedioMiniAppInfo({ cityId: cityId, showStatus: showStatus, vedioType: vedioType }).then(function (_ref7) {
        var _ref8 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref7, 2),
            res = _ref8[0],
            msg = _ref8[1];

        _this2.videoList = res.records;
      });
    },
    getAllActivityType: function getAllActivityType() {
      var _this3 = this;

      this.$API.getAllActivityType({}).then(function (_ref9) {
        var _ref10 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref9, 2),
            res = _ref10[0],
            msg = _ref10[1];

        _this3.iconList = res;
      });
    },
    bannerNav: function bannerNav() {
      var _ref11 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          activityDetailInfoId = _ref11.activityDetailInfoId;

      global.mpvue.navigateTo({
        url: '/pages/activity/activityDetail/main?activityDetailInfoId=' + activityDetailInfoId
      });
    },
    naviSkip: function naviSkip(_ref12) {
      var url = _ref12.url,
          activityType = _ref12.activityType;

      console.log(url);
      global.mpvue.navigateTo({
        url: url + ('?activityStartType=' + activityType)
      });
    }
  }
});

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "activity-content"
  }, [_c('header', [_c('searchInput', {
    attrs: {
      "cityName": _vm.locationObj.cityName,
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "swiper-container"
  }, [(_vm.swiperList.length) ? _c('swiper', {
    staticClass: "swiper-box",
    attrs: {
      "indicator-dots": "true",
      "indicator-color": "#e0e0e0",
      "indicator-active-color": "#ff3300",
      "autoplay": "true",
      "interval": "3000",
      "duration": "1000"
    }
  }, _vm._l((_vm.swiperList), function(item, index) {
    return _c('swiper-item', {
      key: index,
      attrs: {
        "mpcomid": '1_' + index
      }
    }, [_c('div', {
      staticClass: "swiper-body"
    }, [_c('image', {
      staticClass: "swiper_image",
      attrs: {
        "src": item.activityPicUrl,
        "background-size": "cover",
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.bannerNav(item)
        }
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "activity-detail"
    }, [_c('div', [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.activityInfoTitle))]), _vm._v(" "), _c('div', {
      staticClass: "label_box"
    }, [_c('p', [_vm._v(_vm._s(item.activityPayType === 0 ? '免费' : '付费'))])], 1)], 1), _vm._v(" "), _c('div', {
      staticClass: "signUp",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.addActivityApplyInfoVo(item)
        }
      }
    }, [_vm._v("立即报名")])])])])
  })) : _c('div', {
    staticClass: "default_content"
  }, [_c('blank-page', {
    attrs: {
      "mpcomid": '2'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "activity-body"
  }, [_c('div', {
    staticClass: "iconList-content"
  }, _vm._l((_vm.iconList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "icon-item",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.naviSkip({
            url: "/pages/activity/activityList/main",
            activityType: item.activityType
          })
        }
      }
    }, [_c('image', {
      staticClass: "iconImg",
      attrs: {
        "mode": "widthFix",
        "src": item.activityTypeImageUrl
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "iconTitle"
    }, [_vm._v(_vm._s(item.activityTypeName))])], 1)
  }))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-30b190e7", esExports)
  }
}

/***/ })

},[219]);