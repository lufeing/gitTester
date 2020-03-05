require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([63],{

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(583);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_15adab42_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(586);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(584)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15adab42"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_15adab42_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\home\\houseType\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15adab42", Component.options)
  } else {
    hotAPI.reload("data-v-15adab42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 584:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_swiper_activeImage__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_room_type_list__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_trafficmap_map__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils___ = __webpack_require__(3);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isExpand: false,
      tabsArr: ['房型描述', '社区描述'],
      labelList: ['交通便利', '独立卫生间'],
      tabsIndex: 0,
      serverList: [{
        id: 1,
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/houseType/chuang2x.png',
        title: '床'
      }, {
        id: 2,
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/houseType/yigui2x.png',
        title: '衣柜'
      }, {
        id: 3,
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/houseType/shuzhuo2x.png',
        title: '书桌'
      }, {
        id: 4,
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/houseType/kongtiao2x.png',
        title: '空调'
      }, {
        id: 5,
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/houseType/dianshiji2x.png',
        title: '电视机'
      }],
      feeList: [{ id: 1, project: '管理费', price: '190元' }, { id: 1, project: '公摊电费', price: '30元' }, { id: 1, project: '水', price: '3元/吨' }, { id: 1, project: '电', price: '1元/度' }, { id: 1, project: '燃气', price: '4.36元/m²' }],
      houseStyleParam: {},
      queryData: {}
    };
  },

  components: {
    swiperSelf: __WEBPACK_IMPORTED_MODULE_3__components_home_swiper_activeImage__["a" /* default */],
    roomTypeList: __WEBPACK_IMPORTED_MODULE_4__components_home_room_type_list__["a" /* default */],
    trafficMap: __WEBPACK_IMPORTED_MODULE_5__components_home_trafficmap_map__["a" /* default */]
  },
  onLoad: function onLoad() {
    this.queryHouseStyle();
  },

  methods: {
    queryHouseStyle: function queryHouseStyle() {
      var _this = this;

      var communityHouseStyleId = this.$root.$mp.query.communityHouseStyleId;

      this.$API.queryHouseStyle({ communityHouseStyleId: communityHouseStyleId }).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        res.latitude = res.lat;
        res.longitude = res.lon;
        res.locationname = res.houseStyleName;
        _this.houseStyleParam = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()({}, _this.houseStyleParam, res);
        _this.queryData = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(res);
        Object(__WEBPACK_IMPORTED_MODULE_6__utils___["q" /* setNavigationBarTitle */])({ title: res.houseStyleName });
      });
    },
    expand: function expand() {
      this.isExpand = !this.isExpand;
    },

    // 跳转到导航页面
    mapNavigion: function mapNavigion() {
      var mapinfo = JSON.parse(this.queryData);
      this.$store.dispatch('setCacheObject', mapinfo);
      global.mpvue.navigateTo({
        url: '/pages/home/mapNavigtion/main'
      });
    },
    makePhoneCall: function makePhoneCall() {
      var communityPhone = this.houseStyleParam.communityPhone;

      Object(__WEBPACK_IMPORTED_MODULE_6__utils___["n" /* mpvueMakePhoneCall */])(communityPhone);
    },
    naviOrderHouse: function naviOrderHouse() {
      console.log(this.queryData);
      global.mpvue.navigateTo({
        url: '/pages/center/appointment/orderHouse/main?queryData=' + this.queryData
      });
    }
  }
});

/***/ }),

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "apartment-header"
  }, [(_vm.houseStyleParam.images) ? _c('swiperSelf', {
    attrs: {
      "imagesList": _vm.houseStyleParam.images,
      "mpcomid": '0'
    }
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "detail-content"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.houseStyleParam.houseStyleName))]), _vm._v(" "), _c('div', {
    staticClass: "type-detail"
  }, [_c('div', {
    staticClass: "type-detail-left"
  }, [_c('div', _vm._l((_vm.houseStyleParam.features), function(item, index) {
    return _c('p', {
      key: index
    }, [_vm._v(_vm._s(item))])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "type-detail-right"
  }, [_c('p', {
    staticClass: "normal-price"
  }, [_vm._v("挂牌价：￥" + _vm._s(_vm.houseStyleParam.minRentPrice) + "/月起")]), _vm._v(" "), _c('p', {
    staticClass: "member-price"
  }, [_vm._v("\n            会员价：\n            "), _c('span', {
    staticClass: "red"
  }, [_vm._v("￥" + _vm._s(_vm.houseStyleParam.minMemberPrice) + "-" + _vm._s(_vm.houseStyleParam.maxMemberPrice))])])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "type-item"
  }, [_c('p', {
    staticClass: "title mb_10"
  }, [_vm._v("房型详情")]), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.expand
    }
  }, [_c('p', {
    staticClass: "introduce",
    class: _vm.isExpand ? 'spread' : 'packUp'
  }, [_vm._v(_vm._s(_vm.houseStyleParam.communityHouseStyleDescription))]), _vm._v(" "), _c('p', {
    staticClass: "downUp"
  }, [_vm._v(_vm._s(_vm.isExpand ? '收起' : '展开'))])], 1)], 1), _vm._v(" "), (_vm.mpvuePlatform === 'wx') ? _c('div', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.mapNavigion
    }
  }, [_c('div', {
    staticClass: "city-traffic-content"
  }, [_c('p', {
    staticClass: "title mb_10"
  }, [_vm._v("周边配套和交通")]), _vm._v(" "), _c('p', {
    staticClass: "more"
  }, [_vm._v("\n            查看介绍\n            "), _c('img', {
    staticClass: "more-img",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/common/more.png"
    }
  })])], 1), _vm._v(" "), _c('trafficMap', {
    attrs: {
      "queryData": _vm.queryData,
      "mpcomid": '1'
    }
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "commmuncity-server-content"
  }, [_c('p', {
    staticClass: "title mb_10"
  }, [_vm._v("房型配置")]), _vm._v(" "), _c('div', {
    staticClass: "communcity-server"
  }, _vm._l((_vm.serverList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "server-item"
    }, [_c('img', {
      staticClass: "server-img",
      attrs: {
        "src": item.imgUrl
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "server-state"
    }, [_vm._v(_vm._s(item.title))])], 1)
  }))], 1), _vm._v(" "), _c('div', {}, _vm._l((_vm.houseStyleParam.feeTypes), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "space-box mg_0"
    }, [_c('p', [_vm._v(_vm._s(item.feeTypeName))]), _vm._v(" "), _c('p', {
      staticClass: "right-box"
    }, [_vm._v(_vm._s(item.price) + _vm._s(item.unit))])], 1)
  })), _vm._v(" "), _c('div', {
    staticClass: "rent-message-content"
  }, [_c('p', {
    staticClass: "title mb_10"
  }, [_vm._v("租房信息")]), _vm._v(" "), _c('p', _vm._l((_vm.houseStyleParam.limits), function(item, index) {
    return _c('label', {
      key: index
    }, [_vm._v(_vm._s(item))])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "community-roomType"
  }, [_c('p', {
    staticClass: "title mb_10"
  }, [_vm._v("社区房型")]), _vm._v(" "), _c('roomTypeList', {
    attrs: {
      "roomTypeList": _vm.houseStyleParam.houseStyles,
      "mpcomid": '2'
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "padding60"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "apartment-footer"
  }, [_c('div', {
    staticClass: "refer"
  }, [_c('div', {
    staticClass: "phone-area",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.makePhoneCall
    }
  }, [_c('p', [_c('img', {
    staticClass: "phone-img",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/home/apartment/phone2x.png"
    }
  })]), _vm._v(" "), _c('p', [_vm._v("电话咨询")])], 1), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.naviOrderHouse
    }
  }, [_c('button', {
    staticClass: "order-watch"
  }, [_vm._v("预约看房")])], 1)])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-15adab42", esExports)
  }
}

/***/ })

},[582]);