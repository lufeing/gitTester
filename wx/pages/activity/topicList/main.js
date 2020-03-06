require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([114],{

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(243);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_24d4507c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(246);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(244)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-24d4507c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_24d4507c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\activity\\topicList\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-24d4507c", Component.options)
  } else {
    hotAPI.reload("data-v-24d4507c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 244:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(2);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      videoList: [{
        title: '视频标题',
        author: '窝趣官方',
        likeNumber: 2510,
        commentNumber: 124
      }, {
        title: '视频标题',
        author: '窝趣官方',
        likeNumber: 2510,
        commentNumber: 124
      }],
      commentList: [{}, {}, {}],
      swiperList: []
    };
  },
  onShow: function onShow() {
    this.getPictures();
  },
  onReachBottom: function onReachBottom(e) {
    console.log(e);
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
    naviToDetail: function naviToDetail() {
      global.mpvue.navigateTo({
        url: '/pages/activity/topicDetail/main'
      });
    }
  }
});

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "video-content"
  }, [_c('header', [_c('swiper', {
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
          _vm.bannerNav(item.relatePath)
        }
      }
    })])
  }))], 1), _vm._v(" "), _vm._l((_vm.videoList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "topic_box",
      attrs: {
        "eventid": '1_' + index
      },
      on: {
        "click": _vm.naviToDetail
      }
    }, [_c('div', [_c('div', {
      staticClass: "userInfo pd15"
    }, [_c('image', {
      staticClass: "headerImg",
      attrs: {
        "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/game.png"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "name"
    }, [_vm._v("窝趣官方")]), _vm._v(" "), _c('p', {
      staticClass: "time"
    }, [_vm._v("2019-08-20")])], 1)]), _vm._v(" "), _vm._m(0, true), _vm._v(" "), _c('div', {
      staticClass: "target_details"
    }, [_c('div', {
      staticClass: "target_operation"
    }, [_c('image', {
      staticClass: "operationImg",
      attrs: {
        "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/like.png",
        "mode": "widthFix"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "like_number"
    }, [_vm._v(_vm._s(item.likeNumber))]), _vm._v(" "), _c('image', {
      staticClass: "operationImg",
      attrs: {
        "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/comment.png",
        "mode": "widthFix"
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "commentNumber"
    }, [_vm._v(_vm._s(item.commentNumber))])], 1), _vm._v(" "), _c('p', {
      staticClass: "browse_number"
    }, [_vm._v("3215次浏览")])], 1), _vm._v(" "), _vm._m(1, true), _vm._v(" "), _c('div', {
      staticClass: "comment_body"
    }, [_vm._l((_vm.commentList), function(param, commentIndex) {
      return _c('div', {
        key: commentIndex
      }, [_c('label', {
        staticClass: "name"
      }, [_vm._v("炽热欢愉：")]), _vm._v(" "), _c('span', {
        staticClass: "comment_value"
      }, [_vm._v("楼上说得对")])], 1)
    }), _vm._v(" "), _c('p', {
      staticClass: "lookMore"
    }, [_vm._v("查看全部")])], 2)])
  })], 2)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "video_header"
  }, [_c('image', {
    staticClass: "coverImage",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/zhongshan.jpg"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "topic_content"
  }, [_c('span', {
    staticClass: "title"
  }, [_vm._v("#盛夏光年#")]), _vm._v(" "), _c('span', {
    staticClass: "topic_cont"
  }, [_vm._v("生活不止眼前的苟且，还有远方的诗和田野，活不止眼前的苟且，还有远方的诗和田野。")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-24d4507c", esExports)
  }
}

/***/ })

},[242]);