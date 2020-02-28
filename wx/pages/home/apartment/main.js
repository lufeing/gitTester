require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([14],{

/***/ 547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(548);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 548:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(551);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4585c117_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(552);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(549)
  __webpack_require__(550)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4585c117"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4585c117_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\apartment\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4585c117", Component.options)
  } else {
    hotAPI.reload("data-v-4585c117", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 549:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 550:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 551:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_search_searchInput__ = __webpack_require__(64);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      screenModal: {
        index: 0,
        show: false
      },
      bannerList: [{
        title: '市区',
        signId: 'AREA',
        key: [{
          label: 'regionId',
          value: 'listId'
        }],
        data: [{ listTitle: '全部', listId: '' }],
        choose: ''
      }, {
        title: '租金',
        signId: 'PRICE',
        key: [{
          label: 'minRentPrice',
          value: 'minRentPrice'
        }, {
          label: 'maxRentPrice',
          value: 'maxRentPrice'
        }],
        data: [{ listTitle: '全部', listId: '', minRentPrice: '', maxRentPrice: '' }, { listTitle: '1500元以下', listId: '0,1500', minRentPrice: 0, maxRentPrice: 1500 }, { listTitle: '1500-2000元', listId: '1500,2000', minRentPrice: 1500, maxRentPrice: 2000 }, { listTitle: '2000-2500元', listId: '2000,2500', minRentPrice: 2000, maxRentPrice: 2500 }, { listTitle: '2500-3000元', listId: '2500,3000', minRentPrice: 2500, maxRentPrice: 3000 }, { listTitle: '3000-3500元', listId: '3000,3500', minRentPrice: 3000, maxRentPrice: 3500 }, { listTitle: '3500-4000元', listId: '3500,4000', minRentPrice: 3500, maxRentPrice: 4000 }, { listTitle: '4000元以上', listId: '4000,20000', minRentPrice: 4000, maxRentPrice: 10000 }],
        choose: ''
      }, {
        title: '品牌',
        signId: 'BRAND',
        key: [{
          label: 'brandId',
          value: 'listId'
        }],
        data: [{ listTitle: '全部', listId: '' }],
        choose: ''
      }],
      labelObj: {
        1: '窝趣轻社区',
        2: '窝趣服务式公寓',
        3: '窝趣托管 | 星寓'
      },
      colorObj: {
        '轻社区': '#E60113',
        '服务式公寓': '#F57037',
        '托管': '#DFBD74'
      },
      testList: [],
      isGet: false,
      cityName: '',
      paramsObj: {
        querySql: '',
        brandId: '',
        minRentPrice: '',
        maxRentPrice: '',
        signId: ''
      }
    };
  },

  components: {
    searchInput: __WEBPACK_IMPORTED_MODULE_3__components_home_search_searchInput__["a" /* default */]
  },
  onLaunch: function onLaunch(extraData) {
    if (extraData && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(extraData) !== '{}') {
      var cityId = extraData.cityId,
          cityName = extraData.cityName;

      Object(__WEBPACK_IMPORTED_MODULE_2__utils__["p" /* mpvueSetStorageSync */])('cityId', cityId);
      Object(__WEBPACK_IMPORTED_MODULE_2__utils__["p" /* mpvueSetStorageSync */])('cityName', cityName);
    }
  },
  onShow: function onShow() {
    this.updataBannerList();
  },

  methods: {
    queryCommunities: function queryCommunities(item, index, index2) {
      var _this = this;

      this.cityName = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('cityName');
      if (item) {
        // 把选中的属性添加到请求对象
        var keyList = this.bannerList[index].key;
        this.bannerList[index].choose = index2;
        for (var i = 0; i < keyList.length; i++) {
          this.paramsObj[keyList[i].label] = item[keyList[i].value];
        }
      }

      var _paramsObj = this.paramsObj,
          querySql = _paramsObj.querySql,
          regionId = _paramsObj.regionId,
          brandId = _paramsObj.brandId,
          minRentPrice = _paramsObj.minRentPrice,
          maxRentPrice = _paramsObj.maxRentPrice;

      var dataObj = {
        cityId: Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('cityId'),
        brandId: brandId || Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('brandId'),
        querySql: querySql,
        regionId: regionId,
        minRentPrice: minRentPrice,
        maxRentPrice: maxRentPrice
      };
      this.$API.queryCommunities(dataObj).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        _this.screenModalToggle();
        _this.testList = res;
        if (!_this.isGet) _this.isGet = true;
        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["p" /* mpvueSetStorageSync */])('afreshRequest', true);
      });
    },
    showModalArea: function showModalArea(index) {
      if (index === this.screenModal.index && this.screenModal.show) {
        this.screenModalToggle();
      } else {
        this.screenModalToggle(index);
      }
    },
    updataBannerList: function updataBannerList() {
      // 重置请求数据
      var brandId = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('brandId');
      this.paramsObj = {
        querySql: '',
        brandId: brandId || '',
        minRentPrice: '',
        maxRentPrice: '',
        signId: ''
        // 重置选择数据
      };this.bannerList = this.bannerList.map(function (item) {
        item.choose = '';
        return item;
      });
      this.getValidByCityId();
      this.brandQueryList();
      this.queryCommunities();
    },
    getValidByCityId: function getValidByCityId() {
      var _this2 = this;

      var cityId = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('cityId');
      this.$API.getValidByCityId({ cityId: cityId }).then(function (_ref3) {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
            res = _ref4[0],
            msg = _ref4[1];

        var list = [{ listTitle: '全部', listId: '' }];
        res.map(function (item, index) {
          var obj = {};
          obj.listId = item.regionId;
          obj.listTitle = item.regionName;
          list.push(obj);
        });
        _this2.bannerList[0].data = list;
      });
    },
    brandQueryList: function brandQueryList() {
      var _this3 = this;

      this.$API.brandQueryList().then(function (_ref5) {
        var _ref6 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
            res = _ref6[0],
            msg = _ref6[1];

        var list = [{ listTitle: '全部', listId: '' }];
        res.map(function (item, index) {
          if (_this3.paramsObj.brandId && _this3.paramsObj.brandId === item.brandId) {
            _this3.bannerList[2].choose = index + 1;
          }
          var obj = {};
          obj.listId = item.brandId;
          obj.listTitle = item.brandName;
          list.push(obj);
        });
        _this3.bannerList[2].data = list;
      });
    },
    screenModalToggle: function screenModalToggle(flag) {
      if (flag || flag === 0) {
        this.screenModal.index = flag;
        this.screenModal.show = true;
      } else {
        this.screenModal.show = false;
      }
    }
  }
});

/***/ }),

/***/ 552:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: _vm.screenModal.show ? 'body-lock' : ''
  }, [_c('header', [_c('searchInput', {
    attrs: {
      "cityName": _vm.cityName,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "select-condition-content"
  }, _vm._l((_vm.bannerList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "select-cell",
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.showModalArea(index)
        }
      }
    }, [_vm._v("\n        " + _vm._s(item.choose ? item.data[item.choose].listTitle : item.title)), _c('b', {
      class: _vm.screenModal.show && _vm.screenModal.index == index ? 'arrow-top' : 'arrow-bottom'
    })], 1)
  })), _vm._v(" "), _vm._l((_vm.bannerList), function(item, index) {
    return (_vm.screenModal.show && _vm.screenModal.index == index) ? _c('scroll-view', {
      key: index,
      staticClass: "screen-content",
      attrs: {
        "scroll-y": "true"
      }
    }, _vm._l((item.data), function(item2, index2) {
      return _c('div', {
        key: index2,
        staticClass: "screen-item",
        class: item.choose == index2 ? 'selected' : '',
        attrs: {
          "eventid": '1_' + index + '-' + index2
        },
        on: {
          "click": function($event) {
            _vm.queryCommunities(item2, index, index2)
          }
        }
      }, [_vm._v("\n        " + _vm._s(item2.listTitle) + "\n      ")])
    })) : _vm._e()
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "apartment-body",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.screenModal.show = false
      }
    }
  }, [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.screenModal.show),
      expression: "screenModal.show"
    }],
    staticClass: "mask"
  }), _vm._v(" "), (_vm.testList.length == 0 && _vm.isGet) ? _c('block', [_c('div', {
    staticClass: "nodata"
  }, [_vm._v("已经没有更多了")])]) : _c('block', _vm._l((_vm.testList), function(object, index) {
    return _c('navigator', {
      key: index,
      staticClass: "apartment-cell",
      attrs: {
        "url": '/pages/home/apartmentDetail/main?communityId=' + object.communityId
      }
    }, [_c('div', {
      staticClass: "apartment-list"
    }, [_c('div', {
      staticClass: "apartment-label",
      style: ({
        'background': _vm.colorObj[object.brandName]
      })
    }, [_vm._v(_vm._s(object.brandName))]), _vm._v(" "), _c('image', {
      staticClass: "community-image",
      attrs: {
        "src": object.imageUrl
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "community-detail"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(object.communityName))]), _vm._v(" "), _c('p', {
      staticClass: "old-price"
    }, [_vm._v("挂牌价:￥" + _vm._s(object.minRentPrice) + "/月起")])], 1), _vm._v(" "), _c('div', {
      staticClass: "community-detail"
    }, [_c('p', {
      staticClass: "address"
    }, [_c('image', {
      staticClass: "address-img",
      attrs: {
        "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/icon_location.png"
      }
    }), _vm._v(_vm._s(object.detailAddress) + "\n            ")]), _vm._v(" "), _c('p', {
      staticClass: "price"
    }, [_vm._v("会员价:"), _c('span', {
      staticClass: "red"
    }, [_vm._v("￥" + _vm._s(object.minMemberPrice) + "-" + _vm._s(object.maxMemberPrice))]), _vm._v("/月")])], 1)])])
  }))], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4585c117", esExports)
  }
}

/***/ })

},[547]);