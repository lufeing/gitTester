require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([60],{

/***/ 618:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(619);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 619:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(621);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_21627154_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(622);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(620)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21627154"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_21627154_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\mapstore\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21627154", Component.options)
  } else {
    hotAPI.reload("data-v-21627154", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 620:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 621:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils___ = __webpack_require__(3);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      mapClass: 'map-low-class', // 地图的样式
      nearClass: 'near-height-class', // 附近的样式
      x_anchor: -6, // 在x轴上的偏差
      y_anchor: -46, // 在y轴上的padding偏移+图标的偏移
      y_anchor_each: -18, // y轴上每层添加的偏移量
      location: {}, // 原点的位置
      markers: [],
      communityObject: {}, // 社区的信息
      nearList: []
    };
  },
  onShow: function onShow() {
    // _this.navigatorMy();
    // this.getCommunities();
    this.setMarkers();
    // this.getnearlist();
  },

  methods: {
    // 控制下面布局的高度
    controlHeight: function controlHeight() {
      if (this.mapClass == 'map-height-class') {
        this.mapClass = 'map-low-class';
        this.nearClass = 'near-height-class';
      } else {
        this.mapClass = 'map-height-class';
        this.nearClass = 'near-low-class';
      }
    },
    getCommunities: function getCommunities() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var communityId;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                communityId = _this2.$store.state.globel.cacheObject.communityId;
                _context.next = 3;
                return _this2.$API.detailCommunity({ communityId: communityId }).then(function (_ref) {
                  var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
                      res = _ref2[0],
                      msg = _ref2[1];

                  console.log(res);
                  _this2.communityObject = res;
                });

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    setMarkers: function setMarkers() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this, communityObject, storename, storelatitude, storelongitude, storeanchorX, storenamestr, storeanchorY, searchmarker;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _this3.getCommunities();

              case 2:
                _this = _this3;
                communityObject = _this3.communityObject;
                storename = communityObject.communityName, storelatitude = communityObject.lat, storelongitude = communityObject.lon, storeanchorX = 0, storenamestr = '', storeanchorY = 0;

                if (storename.length > 12) {
                  storeanchorY = Math.ceil(storename.length / 12) * _this.y_anchor_each + _this.y_anchor; // 向上求整
                  storeanchorX = 10 * _this.x_anchor;
                } else {
                  storeanchorY = _this.y_anchor + _this.y_anchor_each;
                  storeanchorX = storename.length * _this3.x_anchor;
                }
                // 根据字节的数量来调节大小
                try {
                  storenamestr = storename.replace(/(.{10})/g, '$1\n');
                  if (storename.length % 10 == 0) {
                    storenamestr = storenamestr.substr(0, storenamestr.length - 2);
                  }
                } catch (e) {
                  storenamestr = storename;
                }
                searchmarker = {
                  latitude: storelatitude,
                  longitude: storelongitude,
                  label: {
                    content: storenamestr,
                    color: '#FFFFFF',
                    fontSize: 12,
                    anchorX: storeanchorX,
                    anchorY: storeanchorY,
                    borderRadius: 5,
                    bgColor: '#B60005',
                    textAlign: 'center',
                    padding: 5
                  }
                };

                _this.markers.length = 0;
                _this.markers.push(searchmarker);
                _this.location = searchmarker;
                console.log(_this.location);
                Object(__WEBPACK_IMPORTED_MODULE_4__utils___["p" /* mpvueSetStorageSync */])('storename', '');

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3);
      }))();
    },

    // 点击附近跳转到详情页面
    communitydetail: function communitydetail(index) {
      var _communityObject = this.communityObject,
          communityId = _communityObject.communityId,
          communityName = _communityObject.communityName,
          detailAddress = _communityObject.detailAddress,
          maxMemberPrice = _communityObject.maxMemberPrice,
          maxRentPrice = _communityObject.maxRentPrice,
          minMemberPrice = _communityObject.minMemberPrice,
          minRentPrice = _communityObject.minRentPrice;

      var param = {
        communityId: communityId, communityName: communityName, detailAddress: detailAddress, maxMemberPrice: maxMemberPrice, maxRentPrice: maxRentPrice, minMemberPrice: minMemberPrice, minRentPrice: minRentPrice
      };
      global.mpvue.navigateTo({
        url: '/pages/center/appointment/orderHouse/main?source=mapStore&queryData=' + __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(param)
      });
    },

    // 获取用户当前位置并重新定位地图
    navigatorMy: function navigatorMy() {
      var _this = this;
      global.mpvue.getLocation({
        type: 'wgs84',
        success: function success(res) {
          _this.location = res;
        },
        fail: function fail() {
          global.mpvue.showToast({
            icon: 'none',
            title: '当前未开启地理位置授权'
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex-box-content"
  }, [_c('map', {
    staticClass: "map-container",
    attrs: {
      "longitude": _vm.location.longitude,
      "latitude": _vm.location.latitude,
      "markers": _vm.markers
    }
  }, [_c('cover-image', {
    staticClass: "my-location",
    class: _vm.mylocationclass,
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/map/my_location2x.png",
      "eventid": '0',
      "mpcomid": '0'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.navigatorMy()
      }
    }
  }), _vm._v(" "), _c('cover-view', {
    staticClass: "detail-view",
    attrs: {
      "mpcomid": '17'
    }
  }, [_c('cover-view', {
    staticClass: "detail-scale",
    attrs: {
      "eventid": '1',
      "mpcomid": '3'
    },
    on: {
      "click": function($event) {
        _vm.controlHeight()
      }
    }
  }, [_c('cover-view', {
    staticClass: "scale-long-line",
    attrs: {
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('cover-view', {
    staticClass: "scale-short-line",
    attrs: {
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('cover-view', {
    staticClass: "detail-store",
    attrs: {
      "mpcomid": '16'
    }
  }, [_c('cover-view', {
    staticClass: "name-money",
    attrs: {
      "mpcomid": '6'
    }
  }, [_c('cover-view', {
    staticClass: "name",
    attrs: {
      "mpcomid": '4'
    }
  }, [_vm._v(_vm._s(_vm.communityObject.communityName))]), _vm._v(" "), _c('cover-view', {
    staticClass: "money",
    attrs: {
      "mpcomid": '5'
    }
  }, [_vm._v("挂牌价：￥" + _vm._s(_vm.communityObject.minRentPrice) + "/月起")])], 1), _vm._v(" "), _c('cover-view', {
    staticClass: "location-member",
    attrs: {
      "mpcomid": '14'
    }
  }, [_c('cover-view', {
    attrs: {
      "mpcomid": '9'
    }
  }, [_c('cover-image', {
    staticClass: "location-image",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/icon_location.png",
      "mpcomid": '7'
    }
  }), _vm._v(" "), _c('cover-view', {
    staticClass: "location-address",
    attrs: {
      "mpcomid": '8'
    }
  }, [_vm._v(_vm._s(_vm.communityObject.detailAddress))])], 1), _vm._v(" "), _c('cover-view', {
    attrs: {
      "mpcomid": '13'
    }
  }, [_c('cover-view', {
    staticClass: "member-date",
    attrs: {
      "mpcomid": '10'
    }
  }, [_vm._v("/月")]), _vm._v(" "), _c('cover-view', {
    staticClass: "member-money",
    attrs: {
      "mpcomid": '11'
    }
  }, [_vm._v("￥" + _vm._s(_vm.communityObject.minMemberPrice) + "-" + _vm._s(_vm.communityObject.maxMemberPrice))]), _vm._v(" "), _c('cover-view', {
    staticClass: "member-price",
    attrs: {
      "mpcomid": '12'
    }
  }, [_vm._v("会员价:")])], 1)], 1), _vm._v(" "), _c('cover-view', {
    staticClass: "detail-border",
    attrs: {
      "mpcomid": '15'
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "store-near-container",
    class: _vm.nearClass
  }, _vm._l((_vm.communityObject.houseStyles), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "store-near",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.communitydetail(index)
        }
      }
    }, [_c('image', {
      staticClass: "image-store",
      attrs: {
        "src": item.imageMini.thumbnailUrl
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "name-store"
    }, [_vm._v(_vm._s(item.houseStyleName))]), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_c('div', {
      staticClass: "normal-price"
    }, [_vm._v("挂牌价：￥" + _vm._s(item.minRentPrice) + "/月起")]), _vm._v(" "), _c('div', {
      staticClass: "member-price"
    }, [_c('div', {
      staticClass: "member-date"
    }, [_vm._v("/月")]), _vm._v(" "), _c('div', {
      staticClass: "member-price1"
    }, [_vm._v("￥" + _vm._s(item.minMemberPrice) + "-" + _vm._s(item.maxMemberPrice))]), _vm._v(" "), _c('div', {
      staticClass: "member-name"
    }, [_vm._v("会员价:")])])])])
  }))], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-21627154", esExports)
  }
}

/***/ })

},[618]);