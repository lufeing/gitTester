require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([98],{

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(362);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b60dc416_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(365);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(363)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b60dc416"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b60dc416_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\center\\member\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b60dc416", Component.options)
  } else {
    hotAPI.reload("data-v-b60dc416", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 363:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      memberLevel: 1, // 当前用户的等级
      initScroll: 0, // 初始化滚动的位置
      readClick: false, // 是否点击了阅读了
      maskModal: false,
      level: {
        name: '萌新趣味家',
        description: '特权4项',
        respectName: ''
      },
      levellist: [],
      tabList: [], // 显示在页面上的tab列
      tabList_v1: [{
        title: '房租95折',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/member/v1fangzu.png'
      }, {
        title: '百元代金券',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/member/v1fangzu.png'
      }, {
        title: '社区活动',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/member/v1shequ.png'
      }, {
        title: '7天无忧试住',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/member/v1seven.png'
      }],
      tabList_v2: [{
        title: '房租9折',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/member/v2fangzu.png'
      }, {
        title: '百元代金券',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/member/v2fangzu.png'
      }, {
        title: '社区活动',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/member/v2shequ.png'
      }, {
        title: '7天无忧试住',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/member/v2seven.png'
      }, {
        title: '免费清洁',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/member/v2mianfei.png'
      }, {
        title: '任性换房',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/member/v2renxing.png'
      }, {
        title: '积分换礼品',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/member/v2jifen.png'
      }]
    };
  },
  onLoad: function onLoad(options) {
    this.memberLevel = Number(options.memberLevel) || 1;
    if (options && !Object(__WEBPACK_IMPORTED_MODULE_2__utils__["j" /* isNull */])(options.referralId)) {
      Object(__WEBPACK_IMPORTED_MODULE_2__utils__["p" /* mpvueSetStorageSync */])('registerReferrerInfo', options);
      Object(__WEBPACK_IMPORTED_MODULE_2__utils__["p" /* mpvueSetStorageSync */])('purchaseReferrerInfo', options);
    }
  },
  onShow: function onShow() {
    this.selectLevelList();
    this.tabList = this.tabList_v1;
    this.initScroll = 600;
  },

  // 小程序的分享事件
  onShareAppMessage: function onShareAppMessage() {
    this.Tracks.pageSaveParams({ serial: 5 });

    var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
        memberId = _mpvueGetStorageSync.memberId;

    return {
      title: '转发邀请更多好友',
      path: '/pages/center/member/main?level=0&referralId=' + memberId
    };
  },

  methods: {
    // scroll-view滚动到左侧显示v1萌新趣味家
    scrollleft: function scrollleft() {
      this.tabList = this.tabList_v1;
      this.level = this.levellist[0];
    },

    // scroll-view滚动到右侧显示v2趣味家
    scrollright: function scrollright() {
      this.tabList = this.tabList_v2;
      this.level = this.levellist[1];
    },

    // 查询会员等级信息
    selectLevelList: function selectLevelList() {
      var _this = this;

      this.$API.selectLevelList({}).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        res[0] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(res[0], {
          description1: '特权3项',
          description2: '可享受特权3/7项'
        });
        res[1] = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(res[1], {
          description1: '特权7项',
          description2: '可享受特权7/7项'
        });

        _this.levellist = res;
        _this.level = _this.levellist[1];
      });
    },

    // 立即开通
    openNow: function openNow() {
      var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('memberObj') || {},
          memberId = _ref3.memberId;

      var _levellist = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(this.levellist, 2),
          _levellist$ = _levellist[1],
          receivableAmount = _levellist$.price,
          memberLevelId = _levellist$.memberLevelId;

      var _ref4 = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('purchaseReferrerInfo') || {},
          referralId = _ref4.referralId,
          communityId = _ref4.communityId;

      this.$API.commitMemberCardOrder({ memberId: memberId, receivableAmount: receivableAmount, memberLevelId: memberLevelId, referralId: referralId, communityId: communityId }).then(function (_ref5) {
        var _ref6 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
            res = _ref6[0],
            msg = _ref6[1];

        global.mpvue.navigateTo({
          url: '/pages/center/orderDetail/main?orderId=' + res.orderId + '&billIdList=' + res.billIdList.join(',')
        });
      });
    },
    naviToUrl: function naviToUrl(url) {
      global.mpvue.switchTab({
        url: url
      });
    },
    needKonw: function needKonw() {
      this.maskModal = true;
    }
  }
});

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "myselef-detail-content"
  }, [(_vm.levellist.length) ? _c('div', {
    staticClass: "scroll_box"
  }, [_c('scroll-view', {
    staticClass: "scroll-view_x",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "upper-threshold": "100",
      "scroll-left": _vm.initScroll,
      "lower-threshold": "100",
      "scroll-x": "",
      "eventid": '0'
    },
    on: {
      "scrollToUpper": _vm.scrollleft,
      "scrollToLower": _vm.scrollright,
      "scrolltoupper": _vm.scrollleft,
      "scrolltolower": _vm.scrollright
    }
  }, [_c('div', {
    staticClass: "v1-container"
  }, [_c('image', {
    staticClass: "v1-bannerImage",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/V1Image.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "v2-container"
  }, [_c('image', {
    staticClass: "v2-bannerImage",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/hy690260.png"
    }
  })])])], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "power-title"
  }, [_c('span', {
    staticClass: "power-name"
  }, [_vm._v(_vm._s(_vm.level.respectName))]), _vm._v(" "), _c('span', {
    staticClass: "power-num"
  }, [_vm._v(_vm._s(_vm.level.description1))])]), _vm._v(" "), _c('div', {
    staticClass: "myselef-detail-body"
  }, [_c('div', {
    staticClass: "myselef-detail-tabbar"
  }, _vm._l((_vm.tabList), function(item, index) {
    return _c('navigator', {
      key: index,
      staticClass: "tabber-box",
      attrs: {
        "url": item.naviUrl
      }
    }, [_c('div', {
      staticClass: "tabber-border"
    }, [_c('image', {
      staticClass: "imgUrl",
      attrs: {
        "src": item.imgUrl
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.title))])], 1)
  }))]), _vm._v(" "), _c('div', {
    staticClass: "buy-container"
  }, [(_vm.memberLevel != 2) ? _c('div', {
    staticClass: "reading-content"
  }, [_c('image', {
    staticClass: "checked",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/member/check.png"
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "state"
  }, [_vm._v("我已阅读"), _c('text', {
    staticClass: "needKonw",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.needKonw
    }
  }, [_vm._v("购买须知")])])], 1) : _vm._e(), _vm._v(" "), (_vm.memberLevel != 2) ? _c('div', {
    staticClass: "buy-button",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.openNow
    }
  }, [_c('image', {
    staticClass: "buyImage",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/hy690130.png"
    }
  })]) : _vm._e()]), _vm._v(" "), (_vm.maskModal) ? _c('view', {
    staticClass: "mask",
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.clickMask
    }
  }, [_c('view', {
    staticClass: "modal-content",
    staticStyle: {
      "height": "55%"
    }
  }, [_c('div', {
    staticClass: "main-content"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("购买须知")]), _vm._v(" "), _c('div', {
    staticClass: "main-body"
  }, [_c('p', [_vm._v("1、会员卡的办理：会员卡凭身份证或其他有效证件办理，会员资料填写必须真实有效，一张身份证只能办理一张会员卡。")]), _vm._v(" "), _c('p', [_vm._v("2、会员卡的使用：会员卡只限本人使用，不得出租、转借他人。")]), _vm._v(" "), _c('p', [_vm._v("3、会员卡的优惠：租价享会员价格商品、不定期举办会员活动等。具体活动规则详情请咨询具体门店。")]), _vm._v(" "), _c('p', [_vm._v("4、会员卡办理时所留存的联系电话、地址，如有变更须第一时间至门店进行更正，如因个人原因未及时更正，导致无法享有会员优惠，\n            本公司概不负责。窝趣会员卡为虚拟产品，为赋予会员享受相关会员权利的资格证明，一旦购买开通，将无法取消退款。")])], 1)], 1), _vm._v(" "), _c('view', {
    staticClass: "modal-btn-wrapper"
  }, [_c('view', {
    staticClass: "cancel-btn",
    staticStyle: {
      "color": "(51,51,51,1)"
    },
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        _vm.maskModal = false
      }
    }
  }, [_vm._v("关闭")])])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "navigate-content"
  }, [_c('div', {
    staticClass: "align-center",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.naviToUrl('/pages/home/index/main')
      }
    }
  }, [_c('image', {
    staticClass: "returnImg",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/member/home.png"
    }
  }), _vm._v(" "), _c('text', [_vm._v("返回首页")])]), _vm._v(" "), _c('div', {
    staticClass: "align-center"
  }, [_c('image', {
    staticClass: "shareImg",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/member/share.png"
    }
  }), _vm._v(" "), _c('Button', {
    staticClass: "share-button",
    attrs: {
      "plain": "",
      "size": "mini",
      "open-type": "share",
      "mpcomid": '0'
    }
  }, [_vm._v("分享给好友")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b60dc416", esExports)
  }
}

/***/ })

},[361]);