require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([113],{

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(248);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7db56cc1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(251);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(249)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7db56cc1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7db56cc1_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\activity\\videoDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7db56cc1", Component.options)
  } else {
    hotAPI.reload("data-v-7db56cc1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 249:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  // 小程序的分享事件
  onShareAppMessage: function onShareAppMessage() {
    this.Tracks.pageSaveParams({ serial: 5 });

    var _ref = this.$root.$mp.query || {},
        funVedioInfoId = _ref.funVedioInfoId;

    return {
      title: '窝趣趣活动,快来参加吧',
      path: '/pages/activity/videoDetail/main?funVedioInfoId=' + funVedioInfoId
    };
  },
  data: function data() {
    return {
      commentValue: '',
      relatedList: [{}, {}, {}, {}, {}, {}],
      params: {},
      checkLike: false
    };
  },
  onShow: function onShow() {
    this.checkLike = false;
    this.getVideoData();
    this.Tracks.pageSaveParams({ serial: 6 });
  },
  onUnload: function onUnload() {
    this.updateFunVedioLikeNum();
  },

  methods: {
    getVideoData: function getVideoData() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var funVedioInfoId;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                funVedioInfoId = _this.$root.$mp.query.funVedioInfoId;
                _context.next = 3;
                return _this.$API.selectFunVedioMiniAppDetailInfo({ funVedioInfoId: funVedioInfoId }).then(function (_ref2) {
                  var _ref3 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
                      res = _ref3[0],
                      msg = _ref3[1];

                  return res;
                });

              case 3:
                _this.params = _context.sent;
                _context.next = 6;
                return _this.$API.selectFunVedioMiniAppRelatedVedio({ funVedioInfoId: funVedioInfoId }).then(function (_ref4) {
                  var _ref5 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref4, 2),
                      res = _ref5[0],
                      msg = _ref5[1];

                  return res.records;
                });

              case 6:
                _this.relatedList = _context.sent;

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },

    // 改变点赞状态
    changeLikeStatus: function changeLikeStatus() {
      this.checkLike = !this.checkLike;
      var likeNum = this.params.likeNum;

      this.params.likeNum = this.checkLike ? Number(likeNum) + 1 : Number(likeNum) - 1;
    },
    updateFunVedioLikeNum: function updateFunVedioLikeNum() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var funVedioInfoId, checkLike;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                funVedioInfoId = _this2.$root.$mp.query.funVedioInfoId;
                checkLike = _this2.checkLike;
                _context2.next = 4;
                return _this2.$API.updateFunVedioLikeNum({ funVedioInfoId: funVedioInfoId, checkLike: checkLike });

              case 4:
                _this2.Tracks.pageSaveParams({ serial: 9 });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    redictToVideoDetail: function redictToVideoDetail(funVedioInfoId) {
      global.mpvue.redirectTo({
        url: '/pages/activity/videoDetail/main?funVedioInfoId=' + funVedioInfoId
      });
    }
  }
});

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "video-box"
  }, [_c('header', {
    staticClass: "video_header"
  }, [_c('txv-video', {
    staticClass: "myVideo",
    attrs: {
      "id": "myVideo",
      "src": _vm.params.vedioUrl,
      "controls": "",
      "object-fit": "cover",
      "vid": _vm.params.mediaId,
      "playerid": "txv1",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "target_details"
  }, [_c('div', {
    staticClass: "target_author"
  }, [_c('p', {
    staticClass: "author"
  }, [_vm._v(_vm._s(_vm.params.vedioTitle))])], 1), _vm._v(" "), _c('div', {
    staticClass: "target_operation"
  }, [_c('image', {
    staticClass: "operationImg",
    attrs: {
      "src": _vm.checkLike ? 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/liked.png' : 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/like.png',
      "mode": "widthFix",
      "eventid": '0'
    },
    on: {
      "click": _vm.changeLikeStatus
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "like_number",
    class: _vm.checkLike ? 'avtive' : ''
  }, [_vm._v(_vm._s(_vm.params.likeNum))]), _vm._v(" "), _c('button', {
    staticClass: "share_button",
    attrs: {
      "open-type": "share",
      "plain": ""
    }
  }, [_c('image', {
    staticClass: "operationImg",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/share.png",
      "mode": "widthFix",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  })])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "video_comment"
  }, _vm._l((_vm.relatedList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "comment_box"
    }, [_c('div', {
      staticClass: "related_body",
      attrs: {
        "eventid": '2_' + index
      },
      on: {
        "click": function($event) {
          _vm.redictToVideoDetail(item.funVedioInfoId)
        }
      }
    }, [_c('image', {
      staticClass: "headerImg",
      attrs: {
        "src": item.vedioPicUrl
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "vedio_cell"
    }, [_c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.vedioTitle))]), _vm._v(" "), _c('p', {
      staticClass: "communityName"
    }, [_c('text', [_vm._v(_vm._s(item.communityName))]), _vm._v(" "), (item.playNum !== 0) ? _c('text', {
      staticClass: "ml15"
    }, [_vm._v(_vm._s(item.playNum) + "次播放")]) : _vm._e()])], 1)])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7db56cc1", esExports)
  }
}

/***/ })

},[247]);