require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([101],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(346);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_03ccb06e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(349);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(347)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-03ccb06e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_03ccb06e_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\center\\contacts\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03ccb06e", Component.options)
  } else {
    hotAPI.reload("data-v-03ccb06e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 347:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mixins_wxValidateMixin_js__ = __webpack_require__(29);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      contactObj: {}
    };
  },

  mixins: [__WEBPACK_IMPORTED_MODULE_4__mixins_wxValidateMixin_js__["a" /* default */]],
  onShow: function onShow() {
    var ruleList = [{ key: 'contactsName', description: '请输入紧急联系人姓名' }, { key: 'contactsPhone', description: '请输入紧急联系人联系电话' }, { key: 'contactsRelation', description: '请输入彼此关系' }];
    this.initValidate(ruleList);
  },
  mounted: function mounted() {
    this.getMemberInfo();
  },

  methods: {
    submitFunction: function submitFunction() {
      var _contactObj = this.contactObj,
          contactsName = _contactObj.contactsName,
          contactsPhone = _contactObj.contactsPhone,
          contactsRelation = _contactObj.contactsRelation;

      var _ref = Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["l" /* mpvueGetStorageSync */])('memberObj') || {},
          memberId = _ref.memberId;

      this.$API.updateMemberInfo({ memberId: memberId, contactsName: contactsName, contactsPhone: contactsPhone, contactsRelation: contactsRelation }).then(function (_ref2) {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
            res = _ref3[0],
            msg = _ref3[1];

        Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["t" /* showSuccessToast */])({ msg: msg });
      });
    },
    getMemberInfo: function getMemberInfo() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref4, memberId;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref4 = Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["l" /* mpvueGetStorageSync */])('memberObj') || {}, memberId = _ref4.memberId;
                _context.next = 3;
                return _this.$API.checkMemberInfoById({ memberId: memberId }).then(function (_ref5) {
                  var _ref6 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
                      res = _ref6[0],
                      msg = _ref6[1];

                  return res;
                });

              case 3:
                _this.contactObj = _context.sent;

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "transactioin-detail-content flex-box-content",
    attrs: {
      "eventid": '3'
    },
    on: {
      "submit": _vm.checkForm
    }
  }, [_c('div', {
    staticClass: "wallet-body-cell"
  }, [_c('div', {
    staticClass: "box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.contactObj.contactsName),
      expression: "contactObj.contactsName"
    }],
    staticClass: "inputClass",
    attrs: {
      "type": "text",
      "name": "contactsName",
      "placeholder": "紧急联系人姓名",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.contactObj.contactsName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.contactObj.contactsName = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.contactObj.contactsPhone),
      expression: "contactObj.contactsPhone"
    }],
    staticClass: "inputClass",
    attrs: {
      "type": "text",
      "name": "contactsPhone",
      "placeholder": "紧急联系人联系电话",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.contactObj.contactsPhone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.contactObj.contactsPhone = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "box"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.contactObj.contactsRelation),
      expression: "contactObj.contactsRelation"
    }],
    staticClass: "inputClass",
    attrs: {
      "type": "text",
      "name": "contactsRelation",
      "placeholder": "彼此关系",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.contactObj.contactsRelation)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.contactObj.contactsRelation = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "flex-box-footer mt_20"
  }, [_c('button', {
    staticClass: "allow-button",
    attrs: {
      "formType": "submit"
    }
  }, [_vm._v("确定")])], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-03ccb06e", esExports)
  }
}

/***/ })

},[345]);