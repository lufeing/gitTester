require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([54],{

/***/ 652:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(653);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_214e1377_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(656);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(654)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-214e1377"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_214e1377_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\insurance\\insuranceDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-214e1377", Component.options)
  } else {
    hotAPI.reload("data-v-214e1377", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 654:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 655:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      params: {}
    };
  },
  onShow: function onShow() {
    var params = this.$root.$mp.query.params;

    this.params = params ? JSON.parse(decodeURIComponent(params)) : '';
  },

  methods: {
    rediToUrl: function rediToUrl(url) {
      global.mpvue.navigateTo({
        url: url
      });
    },
    openFiles: function openFiles() {
      wx.downloadFile({
        url: this.params.epolicyInfo,
        success: function success(res) {
          var filePath = res.tempFilePath;
          wx.openDocument({
            filePath: filePath,
            success: function success(res) {
              console.log('打开文档成功');
            },
            fail: function fail(err) {
              console.log(err);
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "transactioin-detail-content"
  }, [_c('div', {
    staticClass: "transactioin-detail-main"
  }, [_c('div', {
    staticClass: "wallet-body-cell"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("保险单号:")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.params.plcNo))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("承保公司:")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.params.companyName))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("被保险人:")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.params.isrdName))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("被保险房间:")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.params.communityName) + " | " + _vm._s(_vm.params.houseName))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("保障额度:")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.params.plcSumInsured) + "元")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("保障期限:")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.params.efficientDate) + "至" + _vm._s(_vm.params.terminationDate))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("支付状态:")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v("已支付")])], 1)])]), _vm._v(" "), _c('div', {
    staticClass: "wallet-body-cell mt_10",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.openFiles($event)
      }
    }
  }, [_c('div', {
    staticClass: "box"
  }, [_c('div', {
    staticClass: "box-left"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("保单协议")])], 1), _vm._v(" "), _c('div', {
    staticClass: "box-right"
  }, [_c('p', {
    staticClass: "state blue"
  }, [_vm._v("查看详情")]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1)])])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-214e1377", esExports)
  }
}

/***/ })

},[652]);