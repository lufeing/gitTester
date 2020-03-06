require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([68],{

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(539);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b1d49ce2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(542);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(540)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b1d49ce2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_b1d49ce2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\feedback\\suggest\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b1d49ce2", Component.options)
  } else {
    hotAPI.reload("data-v-b1d49ce2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 540:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_center_communityPicker__ = __webpack_require__(100);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      params: {
        communityId: '',
        suggestDetails: '',
        phone: ''
      },
      isDisabled: true
    };
  },

  components: { communityPicker: __WEBPACK_IMPORTED_MODULE_2__components_center_communityPicker__["a" /* default */] },
  onLoad: function onLoad() {
    var _ref = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index_js__["l" /* mpvueGetStorageSync */])('memberObj') || {},
        phone = _ref.phone;

    this.params.phone = phone;
  },

  methods: {
    addMemberSuggest: function addMemberSuggest() {
      var _params = this.params,
          suggestDetails = _params.suggestDetails,
          memberPhone = _params.phone,
          communityId = _params.communityId;

      this.$API.addMemberSuggest({ suggestDetails: suggestDetails, communityId: communityId, memberPhone: memberPhone }).then(function (_ref2) {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
            res = _ref3[0],
            msg = _ref3[1];

        Object(__WEBPACK_IMPORTED_MODULE_1__utils_index_js__["t" /* showSuccessToast */])({ msg: msg });
      });
    },
    isEmpty: function isEmpty() {
      var suggestDetails = this.params.suggestDetails;

      this.isDisabled = suggestDetails === '';
    },
    getCommunityChecked: function getCommunityChecked(param) {
      this.params.communityId = param.communityId;
    }
  }
});

/***/ }),

/***/ 542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "suggest-content"
  }, [_c('div', {
    staticClass: "suggest-body"
  }, [_c('div', {
    staticClass: "suggest-textarea"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.params.suggestDetails),
      expression: "params.suggestDetails"
    }],
    staticClass: "textareaClass",
    attrs: {
      "type": "textarea",
      "placeholder": "请输入您的建议，我们将不断为你改进",
      "placeholder-class": "textAreaPlClass",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.params.suggestDetails)
    },
    on: {
      "blur": _vm.isEmpty,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.params.suggestDetails = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "mt_20"
  }, [_c('communityPicker', {
    attrs: {
      "eventid": '1',
      "mpcomid": '0'
    },
    on: {
      "getCommunityChecked": _vm.getCommunityChecked
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "contact-content"
  }, [_c('p', [_c('image', {
    staticClass: "phoneImg",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/feedback/phone2x.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "phone-box"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v("联系电话")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.params.phone),
      expression: "params.phone"
    }],
    staticClass: "phoneInput",
    attrs: {
      "type": "number",
      "placeholder": "请输入电话号码",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.params.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.params.phone = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('p', [_c('image', {
    staticClass: "closeImg",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/feedback/close2x.png"
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticClass: "footer-content"
  }, [_c('button', {
    staticClass: "sure-submit-button w_690",
    class: _vm.isDisabled ? 'garyBack' : '',
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.addMemberSuggest
    }
  }, [_vm._v("提交")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-b1d49ce2", esExports)
  }
}

/***/ })

},[538]);