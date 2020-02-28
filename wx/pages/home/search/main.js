require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([59],{

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(628);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(630);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_37c595b9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(631);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(629)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-37c595b9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_37c595b9_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\search\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-37c595b9", Component.options)
  } else {
    hotAPI.reload("data-v-37c595b9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 629:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_wxValidateMixin_js__ = __webpack_require__(29);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_2__mixins_wxValidateMixin_js__["a" /* default */]],
  data: function data() {
    return {
      paramsObj: {
        searchValue: '',
        searchModal: false
      },
      searchList: [],
      vicinageList: [],
      historyList: [],
      letterCityMap: [],
      handlerList: []
    };
  },
  onShow: function onShow() {
    this.historyList = this.handlerList = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* mpvueGetStorageSync */])('historyList') || [];
    var ruleList = [{ key: 'searchVaule', description: '请输入搜索内容' }];
    this.initValidate(ruleList);
  },
  mounted: function mounted() {
    this.getNearCommunities();
  },

  methods: {
    submitFunction: function submitFunction() {
      var _this = this;

      this.searchList = [];
      var search = this.paramsObj.searchValue;
      this.$API.searchCommunity({ search: search }).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        _this.Tracks.pageSaveParams({ serial: 3 });
        if (res.length) {
          _this.paramsObj.searchModal = true;
          _this.searchList = res;
        } else {
          _this.paramsObj.searchModal = true;
          Object(__WEBPACK_IMPORTED_MODULE_1__utils__["s" /* showModal */])({
            content: '未检索到对应内容,请重新搜索'
          });
        }
      });
    },
    getNearCommunities: function getNearCommunities() {
      var _this2 = this;

      var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

      global.mpvue.getLocation({
        success: function success(res) {
          var keyword = _this2.paramsObj.searchValue;
          var lon = res.longitude,
              lat = res.latitude;

          _this2.$API.getNearCommunities({ lon: lon, lat: lat, keyword: keyword, distance: distance }).then(function (_ref3) {
            var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
                res = _ref4[0],
                msg = _ref4[1];

            res.map(function (item, index) {
              item.distance = item.distance.toFixed(1);
              return item;
            });
            _this2.vicinageList = res;
          });
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    },
    clear: function clear() {
      var _this3 = this;

      global.mpvue.removeStorage({
        key: 'historyList',
        success: function success(res) {
          _this3.historyList = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["l" /* mpvueGetStorageSync */])('historyList') || [];
        }
      });
    },
    naToUrl: function naToUrl(obj) {
      var arr = this.handlerList.filter(function (item, index) {
        return item.communityId === obj.communityId;
      });
      // console.log(arr)
      if (arr.length === 0) {
        this.handlerList.push(obj);
        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["p" /* mpvueSetStorageSync */])('historyList', this.handlerList);
      }
      global.mpvue.navigateTo({
        url: '/pages/home/apartmentDetail/main?communityId=' + obj.communityId
      });
    }
  }
});

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "choose-city-content"
  }, [_c('form', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "submit": _vm.checkForm
    }
  }, [_c('div', {
    staticClass: "current-location"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.paramsObj.searchValue),
      expression: "paramsObj.searchValue"
    }],
    staticClass: "searchInput",
    attrs: {
      "type": "text",
      "name": "searchVaule",
      "confirm-type": "search",
      "placeholder": "搜索社区名称",
      "focus": "",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.paramsObj.searchValue)
    },
    on: {
      "confirm": _vm.searchCommunity,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.paramsObj.searchValue = $event.target.value
      }
    }
  }), _vm._v(" "), (!_vm.paramsObj.searchModal) ? _c('button', {
    staticClass: "form-button-style",
    attrs: {
      "plain": "",
      "formType": "submit"
    }
  }, [_vm._v("搜索")]) : _c('div', {
    staticClass: "city-cell",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.paramsObj.searchModal = false
      }
    }
  }, [_vm._v("取消")])], 1)]), _vm._v(" "), (_vm.paramsObj.searchModal) ? _c('div', {
    staticClass: "search-list-content"
  }, [(_vm.searchList.length) ? _c('div', _vm._l((_vm.searchList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "search-list-cells",
      attrs: {
        "eventid": '3_' + index
      },
      on: {
        "click": function($event) {
          _vm.naToUrl(item)
        }
      }
    }, [_c('p', [_vm._v(_vm._s(item.communityName))])], 1)
  })) : _c('div', [_c('p', {
    staticClass: "emptyNotice"
  }, [_vm._v("对不起，暂无资源")])], 1)]) : _c('div', [_c('div', {
    staticClass: "hot-location"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("附近推荐")]), _vm._v(" "), _c('div', {
    staticClass: "city-item"
  }, _vm._l((_vm.vicinageList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "city-cell",
      attrs: {
        "eventid": '4_' + index
      },
      on: {
        "click": function($event) {
          _vm.naToUrl(item)
        }
      }
    }, [_vm._v("\n          " + _vm._s(item.communityName + '(' + item.distance + '公里)') + "\n        ")])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "search-history"
  }, [_c('div', {
    staticClass: "history-content"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("搜索历史")]), _vm._v(" "), _c('p', {
    staticClass: "clear",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.clear
    }
  }, [_vm._v("清空")])], 1), _vm._v(" "), _vm._l((_vm.historyList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "history-cells",
      attrs: {
        "eventid": '6_' + index
      },
      on: {
        "click": function($event) {
          _vm.naToUrl(item)
        }
      }
    }, [_vm._v(_vm._s(item.communityName))])
  })], 2)])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-37c595b9", esExports)
  }
}

/***/ })

},[627]);