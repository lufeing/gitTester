require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([43],{

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(740);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(742);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_c81cc93c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(743);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(741)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-c81cc93c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_c81cc93c_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\invite\\shareToFriends\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c81cc93c", Component.options)
  } else {
    hotAPI.reload("data-v-c81cc93c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 741:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      ctxObj: {},
      isAuthorization: true,
      shareThumb: ''
    };
  },
  onShow: function onShow() {
    this.jointDraw();
  },

  methods: {
    jointDraw: function jointDraw() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var ctx, logoImg, bannerImg, MaQrcodeUr, miniAppImg, _mpvueGetStorageSync, avatarUrl, nickName, userImage;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ctx = global.mpvue.createCanvasContext('shareCanvas');

                ctx.setFillStyle('#FFFFFF');
                ctx.fillRect(0, 0, 345, 460);
                _context.next = 5;
                return _this.getDownLoadFile('https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/invite/logo.png');

              case 5:
                logoImg = _context.sent;
                _context.next = 8;
                return _this.getDownLoadFile('https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/invite/banner.png');

              case 8:
                bannerImg = _context.sent;
                _context.next = 11;
                return _this.getMaQrcodeUriUnlimited();

              case 11:
                MaQrcodeUr = _context.sent;

                console.log(MaQrcodeUr);
                _context.next = 15;
                return _this.getDownLoadFile(MaQrcodeUr);

              case 15:
                miniAppImg = _context.sent;
                _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('wxUserInfo'), avatarUrl = _mpvueGetStorageSync.avatarUrl, nickName = _mpvueGetStorageSync.nickName;
                // console.log(avatarUrl)

                _context.next = 19;
                return _this.getDownLoadFile(avatarUrl);

              case 19:
                userImage = _context.sent;

                // console.log(userImage)
                ctx.drawImage(logoImg, 8, 25, 51, 51); // 绘制图像到画布
                ctx.drawImage(bannerImg, 8, 90, 320, 220); // 绘制图像到画布
                ctx.drawImage(miniAppImg, 8, 330, 80, 80); // 绘制图像到画布

                ctx.setFontSize(12);
                ctx.setFillStyle('#666666');
                ctx.fillText('长按识别二维码', 100, 370);
                ctx.fillText('注册窝趣领福利', 100, 385);

                ctx.save();
                ctx.beginPath();
                ctx.arc(280, 370, 40, 0, 2 * Math.PI, true);
                ctx.clip();
                ctx.drawImage(userImage, 240, 330, 80, 80); // 绘制图像到画布
                ctx.restore();

                ctx.save();
                ctx.setFontSize(15);
                ctx.setFillStyle('#666666');
                ctx.fillText(nickName, 270, 430);

                ctx.draw();

              case 38:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    getDownLoadFile: function getDownLoadFile(url) {
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        global.mpvue.downloadFile({
          url: url,
          success: function success(res) {
            resolve(res.tempFilePath);
          }
        });
      });
    },
    canvasToImage: function canvasToImage() {
      var _this2 = this;

      global.mpvue.canvasToTempFilePath({
        x: 0,
        y: 0,
        canvasId: 'shareCanvas',
        fileType: 'jpg',
        quality: 1,
        success: function success(res) {
          console.log(res);
          _this2.shareThumb = res.tempFilePath;
          _this2.saveImageToPhotosAlbum();
        }
      });
    },
    saveImageToPhotosAlbum: function saveImageToPhotosAlbum() {
      var _this3 = this;

      global.mpvue.saveImageToPhotosAlbum({
        filePath: this.shareThumb,
        success: function success(res) {
          Object(__WEBPACK_IMPORTED_MODULE_3__utils__["s" /* showModal */])({
            content: '图片已保存到相册，赶紧去朋友圈分享吧~'
          });
        },

        fail: function fail(err) {
          console.log(err);
          Object(__WEBPACK_IMPORTED_MODULE_3__utils__["s" /* showModal */])({
            content: '你关闭了访问相册的权限，请点击下方按钮重新授权'
          });
          _this3.isAuthorization = false;
        }
      });
    },
    getMaQrcodeUriUnlimited: function getMaQrcodeUriUnlimited() {
      // let { memberId } = mpvueGetStorageSync('memberObj') || {}
      // return this.$API.getMaQrcodeUriUnlimited({ memberId }).then(([res, msg]) => res)
    },
    getSetting: function getSetting(event) {
      var _this4 = this;

      console.log(event);
      if (!event.mp.detail.authSetting['scope.writePhotosAlbum']) {
        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["s" /* showModal */])({
          content: '你关闭了访问相册的权限，无法保存，请允许访问相册'
        });
      } else {
        global.mpvue.showToast({
          icon: 'success',
          title: '\u6388\u6743\u6210\u529F',
          success: function success(res) {
            _this4.saveImageToPhotosAlbum();
          }
        });
      }
    }
  }
});

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "shareImage-content"
  }, [_c('canvas', {
    staticClass: "canvasBox",
    attrs: {
      "canvas-id": "shareCanvas"
    }
  }), _vm._v(" "), _c('div', {}, [(_vm.isAuthorization) ? _c('button', {
    staticClass: "shareToButton",
    attrs: {
      "type": "primary",
      "eventid": '1'
    },
    on: {
      "click": _vm.canvasToImage
    }
  }, [_vm._v("立即分享朋友圈")]) : _c('button', {
    staticClass: "shareToButton",
    attrs: {
      "type": "primary",
      "open-type": "openSetting",
      "eventid": '0'
    },
    on: {
      "opensetting": _vm.getSetting
    }
  }, [_vm._v("去授权")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-c81cc93c", esExports)
  }
}

/***/ })

},[739]);