require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([65],{

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(573);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6787d69a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(576);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(574)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6787d69a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_6787d69a_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\chooseCity\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6787d69a", Component.options)
  } else {
    hotAPI.reload("data-v-6787d69a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 574:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 575:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      currentCity: '',
      hotList: ['广州', '深圳', '北京', '上海', '杭州', '武汉'],
      hotCityList: [],
      letterCityRespList: []
    };
  },
  onShow: function onShow() {
    this.currentCity = this.$root.$mp.query.currentCity;
    this.getByLetter();
  },

  methods: {
    // 查找所有城市begin
    getByLetter: function getByLetter() {
      var _this = this;

      this.$API.getByLetter().then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        console.log(res);
        _this.hotCityList = res.hotCityList;
        _this.letterCityRespList = res.letterCityRespList;
      });
    },
    switchCity: function switchCity(obj) {
      Object(__WEBPACK_IMPORTED_MODULE_1__utils__["s" /* showModal */])({
        content: '\u4F60\u786E\u5B9A\u8981\u5C06\u57CE\u5E02\u5207\u6362\u5230' + obj.cityName + '?',
        showCancel: true,
        fn: function fn() {
          Object(__WEBPACK_IMPORTED_MODULE_1__utils__["p" /* mpvueSetStorageSync */])('cityId', obj.cityId);
          Object(__WEBPACK_IMPORTED_MODULE_1__utils__["p" /* mpvueSetStorageSync */])('cityName', obj.cityName);
          Object(__WEBPACK_IMPORTED_MODULE_1__utils__["p" /* mpvueSetStorageSync */])('afreshRequest', true);
          global.mpvue.navigateBack({
            delta: 1
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "choose-city-content"
  }, [_c('div', {
    staticClass: "current-location"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("当前定位城市")]), _vm._v(" "), _c('div', {
    staticClass: "city-cell"
  }, [_vm._v(_vm._s(_vm.currentCity))])], 1), _vm._v(" "), _c('div', {
    staticClass: "hot-location"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("热门城市")]), _vm._v(" "), _c('div', {
    staticClass: "city-item"
  }, _vm._l((_vm.hotCityList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "city-cell",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.switchCity(item)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item.cityName) + "\n      ")])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "label-city-area"
  }, _vm._l((_vm.letterCityRespList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "list-item"
    }, [_c('p', {
      staticClass: "list-label"
    }, [_vm._v(_vm._s(item.letter))]), _vm._v(" "), _vm._l((item.cityList), function(city, idx) {
      return _c('div', {
        key: idx,
        staticClass: "list-cell",
        attrs: {
          "eventid": '1_' + index + '-' + idx
        },
        on: {
          "click": function($event) {
            _vm.switchCity(city)
          }
        }
      }, [_vm._v("\n        " + _vm._s(city.cityName) + "\n      ")])
    })], 2)
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6787d69a", esExports)
  }
}

/***/ })

},[572]);