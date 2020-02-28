require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([2],{

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(587);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(589);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_29f73fb7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(606);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(588)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-29f73fb7"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_29f73fb7_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29f73fb7", Component.options)
  } else {
    hotAPI.reload("data-v-29f73fb7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 588:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_search_searchInput__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_swiper__ = __webpack_require__(590);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_icon__ = __webpack_require__(594);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_brand__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_apartment__ = __webpack_require__(602);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_wxApi__ = __webpack_require__(19);






//
//
//
//
//
//
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
      houseList: [],
      locationObj: {
        lon: '', // 经度
        lat: '', // 纬度
        cityName: ''
      }
    };
  },

  components: {
    SearchInput: __WEBPACK_IMPORTED_MODULE_6__components_home_search_searchInput__["a" /* default */], HomeSwiper: __WEBPACK_IMPORTED_MODULE_7__components_swiper__["a" /* default */], BrandList: __WEBPACK_IMPORTED_MODULE_9__components_brand__["a" /* default */], IconList: __WEBPACK_IMPORTED_MODULE_8__components_icon__["a" /* default */], ApartmentList: __WEBPACK_IMPORTED_MODULE_10__components_apartment__["a" /* default */]
  },
  onLoad: function onLoad(options) {
    // referralId 推荐人的memberId
    // communityId 推荐的社区id
    console.log(options);
    if (__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify___default()(options) !== '{}') {
      Object(__WEBPACK_IMPORTED_MODULE_11__utils__["p" /* mpvueSetStorageSync */])('registerReferrerInfo', options);
    }
    Object(__WEBPACK_IMPORTED_MODULE_11__utils__["p" /* mpvueSetStorageSync */])('afreshRequest', true);
    Object(__WEBPACK_IMPORTED_MODULE_11__utils__["p" /* mpvueSetStorageSync */])('isGetUserLocation', true);
  },
  onShow: function onShow() {
    Object(__WEBPACK_IMPORTED_MODULE_11__utils__["o" /* mpvueRemoveStorageSync */])('brandId');
    var afreshRequest = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["l" /* mpvueGetStorageSync */])('afreshRequest');
    if (afreshRequest) {
      this.checkUserStatus();
    }
    setTimeout(function () {
      Object(__WEBPACK_IMPORTED_MODULE_11__utils__["p" /* mpvueSetStorageSync */])('afreshRequest', true);
    }, 2000);
  },

  methods: {
    // 获取用户的登录状态
    checkUserStatus: function checkUserStatus() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.mpvueGetSetting();

              case 2:
                _this.getUserLocation();
                _this.showHealthModal();

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    mpvueGetSetting: function mpvueGetSetting() {
      var isLogin = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["l" /* mpvueGetStorageSync */])('isLogin');
      if (isLogin) {
        var isGetUserLocation = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["l" /* mpvueGetStorageSync */])('isGetUserLocation');
        Object(__WEBPACK_IMPORTED_MODULE_12__utils_wxApi__["b" /* wxGetSetting */])(this.getUserLocation, isGetUserLocation);
      }
    },
    getUserLocation: function getUserLocation() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var cityName, systemObj;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cityName = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["l" /* mpvueGetStorageSync */])('cityName') || '';

                if (!(cityName === '')) {
                  _context2.next = 10;
                  break;
                }

                _context2.next = 4;
                return _this2.getSystemLocation().then(function (locationParam) {
                  return locationParam;
                });

              case 4:
                systemObj = _context2.sent;

                _this2.locationObj = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(_this2.locationObj, systemObj);
                _context2.next = 8;
                return _this2.getCityForLocation();

              case 8:
                _context2.next = 11;
                break;

              case 10:
                _this2.locationObj.cityName = cityName;

              case 11:
                _this2.getCommunities();

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },

    // 获取用户系统坐标(经纬度)
    getSystemLocation: function getSystemLocation() {
      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        global.mpvue.getLocation({
          success: function success(res) {
            console.log(res);

            var _ref = res || {},
                lon = _ref.longitude,
                lat = _ref.latitude;

            Object(__WEBPACK_IMPORTED_MODULE_11__utils__["p" /* mpvueSetStorageSync */])('userLocation', { lon: lon, lat: lat });
            resolve({ lon: lon, lat: lat });
          },
          fail: function fail(err) {
            console.log(err);
            resolve({});
          }
        });
      });
    },

    // 根据拿到的经纬度获取城市 begin
    getCityForLocation: function getCityForLocation() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var param;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(_this3.locationObj.lat !== '')) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 3;
                return _this3.$API.getByLocation(_this3.locationObj).then(function (_ref2) {
                  var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
                      res = _ref3[0],
                      msg = _ref3[1];

                  _this3.locationObj.cityName = res.cityName;
                  Object(__WEBPACK_IMPORTED_MODULE_11__utils__["p" /* mpvueSetStorageSync */])('cityName', res.cityName);
                  Object(__WEBPACK_IMPORTED_MODULE_11__utils__["p" /* mpvueSetStorageSync */])('cityId', res.cityId);
                });

              case 3:
                _context3.next = 9;
                break;

              case 5:
                // 如果用户不给予授权位置信息，则以‘广州’为默认城市.
                param = {
                  cityName: '广州',
                  cityId: 440100
                };

                _this3.locationObj.cityName = param.cityName;
                Object(__WEBPACK_IMPORTED_MODULE_11__utils__["p" /* mpvueSetStorageSync */])('cityName', param.cityName);
                Object(__WEBPACK_IMPORTED_MODULE_11__utils__["p" /* mpvueSetStorageSync */])('cityId', param.cityId);

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },

    // 查询房源推荐
    getCommunities: function getCommunities() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var cityId;
        return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                cityId = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["l" /* mpvueGetStorageSync */])('cityId');
                _context4.next = 3;
                return _this4.$API.getCommunities({ cityId: cityId }).then(function (_ref4) {
                  var _ref5 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref4, 2),
                      res = _ref5[0],
                      msg = _ref5[1];

                  return res;
                });

              case 3:
                _this4.houseList = _context4.sent;

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    showHealthModal: function showHealthModal() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$questionnaireId = _ref6.questionnaireId,
          questionnaireId = _ref6$questionnaireId === undefined ? 1 : _ref6$questionnaireId;

      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_11__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync.memberId;

      if (memberId) {
        this.$API.selectLastFinishQuestionnaire({ questionnaireId: questionnaireId, memberId: memberId }).then(function (_ref7) {
          var _ref8 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref7, 2),
              res = _ref8[0],
              msg = _ref8[1];

          var result = res && Object(__WEBPACK_IMPORTED_MODULE_11__utils__["k" /* isToday */])(res.createTime);
          if (!res || !result) {
            wx.showModal({
              title: '亲爱的窝友',
              content: '为加强疫情防控,保障社区安全,请各位窝友及时填写问卷。',
              cancelText: '关闭',
              confirmText: '点击查看',
              success: function success(res) {
                if (res.confirm) {
                  global.mpvue.navigateTo({
                    url: '/pages/survey/health/main'
                  });
                }
              }
            });
          }
        });
      }
    }
  }
});

/***/ }),

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_swiper_vue__ = __webpack_require__(592);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_40f59576_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_swiper_vue__ = __webpack_require__(593);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(591)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-40f59576"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_swiper_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_40f59576_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_swiper_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index\\components\\swiper.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] swiper.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-40f59576", Component.options)
  } else {
    hotAPI.reload("data-v-40f59576", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 591:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);



//
//
//
//
//
//
//
//
//
//
//
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
  name: 'homeSwiper',
  data: function data() {
    return {
      swiperList: []
    };
  },
  onLoad: function onLoad() {
    this.getPictures();
  },

  methods: {
    // 查询轮播图片
    getPictures: function getPictures() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var cityId;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cityId = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('cityId');
                _context.next = 3;
                return _this.$API.getPictures({ cityId: cityId }).then(function (_ref) {
                  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
                      res = _ref2[0],
                      msg = _ref2[1];

                  return res;
                });

              case 3:
                _this.swiperList = _context.sent;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    bannerNav: function bannerNav(_ref3) {
      var bannerType = _ref3.bannerType,
          relatePath = _ref3.relatePath;

      if (bannerType === 1 || bannerType === 4) {
        // 轮播图类型1、外链url  2、小程序内部页面（/pages/home/index/main） 3、跳转到其他小程序', 4、 图文url
        global.mpvue.navigateTo({
          url: '/pages/activity/swiperPage/main?relatePath=' + relatePath + '&bannerType=' + bannerType
        });
      } else if (bannerType === 2) {
        global.mpvue.navigateTo({
          url: relatePath
        });
      } else {
        global.mpvue.navigateToMiniProgram({
          appId: 'wx6cdb72dcc13e636e',
          path: relatePath,
          extraData: {},
          success: function success(res) {}
        });
      }
    }
  }
});

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-container"
  }, [_c('swiper', {
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
        "mpcomid": '0_' + index
      }
    }, [_c('image', {
      staticClass: "image",
      attrs: {
        "src": item.thumbnailUrl,
        "background-size": "cover",
        "mode": "widthFix",
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.bannerNav(item)
        }
      }
    })])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-40f59576", esExports)
  }
}

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_icon_vue__ = __webpack_require__(596);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5795a277_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_icon_vue__ = __webpack_require__(597);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(595)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5795a277"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_icon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5795a277_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_icon_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index\\components\\icon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] icon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5795a277", Component.options)
  } else {
    hotAPI.reload("data-v-5795a277", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 595:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
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
      iconList: [{ id: 1, title: '找房', imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/icon/lookHouse.png', appId: '', navaUrl: '/pages/home/apartment/main' }, { id: 2, title: '地图找房', imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/icon/mapForLookHouse.png', appId: '', navaUrl: '/pages/home/mapSearch/main' }, { id: 4, title: '窝趣商城', imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/icon/market.png', appId: 'wx6cdb72dcc13e636e', navaUrl: '' }],
      mpvuePlatform: ''
    };
  },
  onLoad: function onLoad() {
    this.mpvuePlatform = global.mpvuePlatform;
  },

  methods: {
    naviSkip: function naviSkip(obj) {
      if (obj.appId !== '') {
        global.mpvue.navigateToMiniProgram({
          appId: obj.appId,
          path: '',
          extraData: {},
          success: function success(res) {}
        });
      } else {
        global.mpvue.switchTab({
          url: obj.navaUrl
        });
        global.mpvue.navigateTo({
          url: obj.navaUrl
        });
      }
    }
  }
});

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.mpvuePlatform == 'wx') ? _c('div', {
    staticClass: "banner-area"
  }, _vm._l((_vm.iconList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "banner-item",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.naviSkip(item)
        }
      }
    }, [_c('image', {
      staticClass: "banner-img",
      attrs: {
        "mode": "widthFix",
        "src": item.imgUrl
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "banner-title"
    }, [_vm._v(_vm._s(item.title))])], 1)
  })) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5795a277", esExports)
  }
}

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_brand_vue__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7c9b710e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_brand_vue__ = __webpack_require__(601);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(599)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c9b710e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_brand_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7c9b710e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_brand_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index\\components\\brand.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] brand.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c9b710e", Component.options)
  } else {
    hotAPI.reload("data-v-7c9b710e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 599:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      brandList: []
    };
  },
  onLoad: function onLoad() {
    this.getBrandImages();
  },

  methods: {
    // 获取品牌推荐
    getBrandImages: function getBrandImages() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$API.getBrandImages().then(function (_ref) {
                  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
                      res = _ref2[0],
                      msg = _ref2[1];

                  return res;
                });

              case 2:
                _this.brandList = _context.sent;

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    naviToApartment: function naviToApartment(brandId) {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils__["p" /* mpvueSetStorageSync */])('brandId', brandId);
      global.mpvue.switchTab({
        url: '/pages/home/apartment/main'
      });
    }
  }
});

/***/ }),

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "module-cell"
  }, [_c('div', {
    staticClass: "title-area"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("品牌公寓")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scroll_box"
  }, [_c('scroll-view', {
    staticClass: "scroll-view_x",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "scroll-x": ""
    }
  }, _vm._l((_vm.brandList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "item_list w_165",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.naviToApartment(item.brandId)
        }
      }
    }, [_c('image', {
      staticClass: "shopping-image",
      attrs: {
        "src": item.thumbnailUrl
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "brand-content"
    }, [_c('image', {
      staticClass: "icon-img",
      attrs: {
        "src": item.brandImage
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.brandName))])], 1)])
  }))], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7c9b710e", esExports)
  }
}

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_apartment_vue__ = __webpack_require__(604);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_bd02eeb8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_apartment_vue__ = __webpack_require__(605);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(603)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bd02eeb8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_apartment_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_bd02eeb8_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_apartment_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\index\\components\\apartment.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] apartment.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bd02eeb8", Component.options)
  } else {
    hotAPI.reload("data-v-bd02eeb8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 603:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    houseList: Array,
    default: []
  }
});

/***/ }),

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "module-cell"
  }, [_c('div', {
    staticClass: "title-area"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("房源推荐")])], 1), _vm._v(" "), _c('div', {
    staticClass: "scroll_box"
  }, [_c('scroll-view', {
    staticClass: "scroll-view_x",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "scroll-x": ""
    }
  }, _vm._l((_vm.houseList), function(item, index) {
    return _c('navigator', {
      key: index,
      staticClass: "item_list",
      attrs: {
        "url": '/pages/home/apartmentDetail/main?communityId=' + item.communityId
      }
    }, [_c('image', {
      staticClass: "community-image",
      attrs: {
        "src": item.thumbnailUrl
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "community-detail"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.communityName))]), _vm._v(" "), _c('p', {
      staticClass: "address"
    }, [_vm._v("挂牌价:￥" + _vm._s(item.minRentPrice) + "/月")])], 1), _vm._v(" "), _c('div', {
      staticClass: "community-detail"
    }, [_c('p', {
      staticClass: "address"
    }, [_c('image', {
      staticClass: "address-img",
      attrs: {
        "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/icon_location.png"
      }
    }), _vm._v(_vm._s(item.detailAddress) + "\n          ")]), _vm._v(" "), _c('p', {
      staticClass: "price"
    }, [_vm._v("会员价:"), _c('span', {
      staticClass: "red"
    }, [_vm._v("￥" + _vm._s(item.minMemberPrice) + "-" + _vm._s(item.maxMemberPrice))]), _vm._v("/月")])], 1)])
  }))], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-bd02eeb8", esExports)
  }
}

/***/ }),

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('header', [_c('search-input', {
    attrs: {
      "cityName": _vm.locationObj.cityName,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('home-swiper', {
    attrs: {
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "content-area"
  }, [_c('icon-list', {
    attrs: {
      "mpcomid": '2'
    }
  }), _vm._v(" "), _c('brand-list', {
    attrs: {
      "mpcomid": '3'
    }
  }), _vm._v(" "), _c('apartment-list', {
    attrs: {
      "houseList": _vm.houseList,
      "mpcomid": '4'
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
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-29f73fb7", esExports)
  }
}

/***/ })

},[586]);