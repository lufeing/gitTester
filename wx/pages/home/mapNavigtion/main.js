require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([62],{

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(609);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3a24272c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(612);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(610)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3a24272c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_3a24272c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\mapNavigtion\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3a24272c", Component.options)
  } else {
    hotAPI.reload("data-v-3a24272c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 610:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_amap_wx_js__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_amap_wx_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__utils_amap_wx_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      polyline: [{
        points: [],
        color: '#ff6600',
        width: 10,
        dottedLine: false,
        arrowLine: true,
        borderColor: '#000',
        borderWidth: 20
      }],

      // 路线规划
      myAmapFun: {}, // 高的地图的对象
      x_anchor: -6, // 在x轴上的偏差
      y_anchor: -46, // 在y轴上的padding偏移+图标的偏移
      y_anchor_each: -18, // y轴上每层添加的偏移量
      location: {}, // 社区的位置
      userLocation: {}, // 用户的位置
      markers: [],
      toollist: [{
        img: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/map/icon_ditie2x.png',
        title: '地铁',
        keyword: '地铁'
      }, {
        img: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/map/icon_gongjiao2x.png',
        title: '公交',
        keyword: '公交'
      }, {
        img: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/map/icon_chanying2x.png',
        title: '餐饮',
        keyword: '餐饮'
      }, {
        img: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/map/icon_gouwu2x.png',
        title: '购物',
        keyword: '购物'
      }, {
        img: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/map/icon_yiyuan2x.png',
        title: '医院',
        keyword: '医院'
      }, {
        img: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/map/icon_yinghang2x.png',
        title: '银行',
        keyword: '银行'
      }] // 功能tab
    };
  },
  onLoad: function onLoad() {
    this.locationByinfo();
    this.myAmapFun = new __WEBPACK_IMPORTED_MODULE_0__utils_amap_wx_js___default.a.AMapWX({
      key: this.$store.state.globel.gdMapKey
    });
  },

  methods: {
    // 根据传送过来的经纬度定位
    locationByinfo: function locationByinfo() {
      console.log('获取到传送过来的数据');
      var _$store$state$globel$ = this.$store.state.globel.cacheObject,
          lat = _$store$state$globel$.lat,
          lon = _$store$state$globel$.lon,
          communityName = _$store$state$globel$.communityName;

      var storeanchorX = 0;
      var communityNamestr = communityName;
      var storeanchorY = 0;

      if (communityName.length > 12) {
        storeanchorY = Math.ceil(communityName.length / 12) * this.y_anchor_each + this.y_anchor; // 向上求整
        storeanchorX = 10 * this.x_anchor;
      } else {
        storeanchorY = this.y_anchor + this.y_anchor_each;
        storeanchorX = communityName.length * this.x_anchor;
      }

      // 根据字节的数量来调节大小，添加换行
      // try {
      //   communityNamestr = communityName.replace(/(.{10})/g, '$1\n')
      //   if (communityName.length % 10 === 0) {
      //     communityNamestr = communityNamestr.substr(0, communityNamestr.length - 2)
      //   }
      // } catch (e) {
      //   communityNamestr = communityName
      // }
      // console.log(communityNamestr)

      var searchmarker = {
        latitude: lat,
        longitude: lon,

        label: {
          content: communityNamestr,
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
      this.markers.length = 0;
      this.markers.push(searchmarker);
      this.location = searchmarker;

      this.navigatorMy();
      console.log(this.location);
    },

    // 搜索附近
    gdsearch: function gdsearch(_item) {
      var _this = this;
      this.Tracks.pageSaveParams({ serial: 3 });
      this.myAmapFun.getPoiAround({
        querykeywords: _item.keyword,
        location: _this.location.longitude + ',' + _this.location.latitude,
        success: function success(sres) {
          console.log(sres);
          // 清空所有的点并把新的点加进去
          _this.markers.length = 0;
          _this.markers.push(_this.location);
          sres.markers.forEach(function (item, index) {
            item.iconPath = 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/map/near_location.png';
            item.width = 32;
            item.height = 32;
            _this.markers.push(item);
          });
        },
        fail: function fail(fres) {}
      });
    },

    // 点击导航按钮，更新用户当前位置
    navigator: function navigator() {
      var _this2 = this;

      global.mpvue.getLocation({
        success: function success(res) {
          _this2.userLocation = res || {};
          _this2.getDrivingRoute();
        },
        fail: function fail() {
          global.mpvue.showToast({
            icon: 'none',
            title: '当前未开启地理位置授权'
          });
        }
      });
    },

    // 驾驶的路线
    getDrivingRoute: function getDrivingRoute() {
      var _this = this;
      console.log('当前位置');
      console.log(this.userLocation);
      console.log(this.location);
      this.myAmapFun.getDrivingRoute({
        origin: _this.userLocation.longitude + ',' + _this.userLocation.latitude, // 起点
        destination: _this.location.longitude + ',' + _this.location.latitude, // 终点
        success: function success(data) {
          console.log(data);
          _this.polyline[0].points.length = 0;
          if (data.paths && data.paths[0] && data.paths[0].steps) {
            var steps = data.paths[0].steps;
            for (var i = 0; i < steps.length; i++) {
              var poLen = steps[i].polyline.split(';');
              for (var j = 0; j < poLen.length; j++) {
                _this.polyline[0].points.push({
                  longitude: parseFloat(poLen[j].split(',')[0]),
                  latitude: parseFloat(poLen[j].split(',')[1])
                });
              }
            }
            console.log(_this.polyline);
          } else {
            global.mpvue.showToast({
              title: '暂无路线规划',
              icon: 'none'
            });
          }
        },
        fail: function fail(info) {}
      });
    },


    // 获取用户当前位置并重新定位地图
    navigatorMy: function navigatorMy() {
      var _this3 = this;

      global.mpvue.getLocation({
        success: function success(res) {
          console.log(res);
          _this3.userLocation = res || {};
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

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex-box-content"
  }, [_c('map', {
    staticClass: "map-container",
    attrs: {
      "markers": _vm.markers,
      "scale": 14,
      "polyline": _vm.polyline,
      "latitude": _vm.location.latitude,
      "longitude": _vm.location.longitude,
      "show-location": "true"
    }
  }, [_c('cover-view', {
    staticClass: "toolbar-container",
    attrs: {
      "mpcomid": '4'
    }
  }, _vm._l((_vm.toollist), function(item, index) {
    return _c('cover-view', {
      key: index,
      staticClass: "tool-container",
      attrs: {
        "eventid": '1_' + index,
        "mpcomid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.gdsearch(item)
        }
      }
    }, [_c('covcer-view', {
      staticClass: "image-container",
      attrs: {
        "mpcomid": '1_' + index
      }
    }, [_c('cover-image', {
      staticClass: "img",
      attrs: {
        "src": item.img,
        "eventid": '0_' + index,
        "mpcomid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.gdsearch(item)
        }
      }
    })], 1), _vm._v(" "), _c('cover-view', {
      staticClass: "title",
      attrs: {
        "mpcomid": '2_' + index
      }
    }, [_vm._v(_vm._s(item.title))])], 1)
  })), _vm._v(" "), _c('cover-view', {
    staticClass: "navigator",
    attrs: {
      "eventid": '2',
      "mpcomid": '5'
    },
    on: {
      "click": function($event) {
        _vm.navigator()
      }
    }
  }, [_vm._v("导航")])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-3a24272c", esExports)
  }
}

/***/ })

},[608]);