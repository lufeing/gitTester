require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([61],{

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(614);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7d6734ee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(617);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(615)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7d6734ee"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7d6734ee_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\mapSearch\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7d6734ee", Component.options)
  } else {
    hotAPI.reload("data-v-7d6734ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 615:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 616:
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

var amapFile = __webpack_require__(68);
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      mylocationclass: 'top-mylocation', // 我的定位的图标
      location: {}, // 当前用户地理位置的集合

      markers: []

    };
  },


  // 获取到选择的国家
  onShow: function onShow() {
    this.navigatorMy();
  },

  methods: {
    // 跳转到搜索的页面
    navigatorStore: function navigatorStore() {
      global.mpvue.navigateTo({
        url: '/pages/home/storeList/main'
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

/***/ 617:
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
      "markers": _vm.markers,
      "show-location": "true"
    }
  }, [_c('cover-image', {
    staticClass: "my-location",
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
    staticClass: "search-view",
    attrs: {
      "eventid": '1',
      "mpcomid": '4'
    },
    on: {
      "click": _vm.navigatorStore
    }
  }, [_c('cover-image', {
    staticClass: "search-image",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/map/search.png",
      "mpcomid": '1'
    }
  }), _vm._v(" "), _c('cover-view', {
    staticClass: "search-input",
    attrs: {
      "mpcomid": '2'
    }
  }, [_vm._v("请输入地铁站、写字楼或地址")]), _vm._v(" "), _c('cover-view', {
    staticClass: "search-span",
    attrs: {
      "mpcomid": '3'
    }
  }, [_vm._v("搜索")])], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7d6734ee", esExports)
  }
}

/***/ })

},[613]);