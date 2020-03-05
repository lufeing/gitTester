require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([70],{

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(516);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_46580414_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(522);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(517)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-46580414"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_46580414_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\feedback\\complaint\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46580414", Component.options)
  } else {
    hotAPI.reload("data-v-46580414", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 517:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index_js__ = __webpack_require__(3);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      tabIndex: 0,
      isDisabled: false,
      complaintList: [],
      radioList: [],
      radioChecked: 1,
      checkedValue: '',
      paramsObj: {
        complaintDetails: '',
        communityId: '',
        complaintParentTitleId: '',
        complaintParentTitleName: '',
        memberPhone: ''
      }
    };
  },

  components: { communityPicker: __WEBPACK_IMPORTED_MODULE_2__components_center_communityPicker__["a" /* default */] },
  mounted: function mounted() {
    var memberObj = Object(__WEBPACK_IMPORTED_MODULE_1__utils_index_js__["l" /* mpvueGetStorageSync */])('memberObj');
    this.paramsObj.memberPhone = memberObj.phone;
    this.getAllComplaintParentTitle();
  },

  methods: {
    changeIndex: function changeIndex(tabIndex, complaintParentTitleId, complaintParentTitleName) {
      this.tabIndex = tabIndex;
      this.paramsObj.complaintParentTitleId = complaintParentTitleId;
      this.paramsObj.complaintParentTitleName = complaintParentTitleName;
    },
    getAllComplaintParentTitle: function getAllComplaintParentTitle() {
      var _this = this;

      this.$API.getAllComplaintParentTitle().then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        _this.complaintList = res;
        _this.paramsObj.complaintParentTitleId = res[0].complaintParentTitleId;
        _this.paramsObj.complaintParentTitleName = res[0].complaintParentTitleName;
      });
    },
    addMemberComplaint: function addMemberComplaint() {
      console.log(this.paramsObj);
      var complaintDetails = this.paramsObj.complaintDetails;

      console.log(complaintDetails);
      if (complaintDetails === '') {
        Object(__WEBPACK_IMPORTED_MODULE_1__utils_index_js__["s" /* showModal */])({
          content: '请输入您的反馈问题，我们将不断为你改进'
        });
        return false;
      }
      this.$API.addMemberComplaint(this.paramsObj).then(function (_ref3) {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
            res = _ref4[0],
            msg = _ref4[1];

        global.mpvue.redirectTo({
          url: '/pages/feedback/uploadSuccess/main'
        });
      });
    },
    getCommunityChecked: function getCommunityChecked(param) {
      this.paramsObj.communityId = param.communityId;
    }
    // radioChange(e){
    //   this.checkedValue = e.mp.detail.value
    //   var retObj = this.radioList.filter((item,index)=>{
    //     if(item.complaintTitleId == e.mp.detail.value){
    //       item.checked = true
    //       this.paramsObj.complaintTitleId = item.complaintTitleId;
    //     }else{
    //       item.checked = false
    //     }
    //   })
    // },
    // getComplaintTitleItemListByParentId(complaintParentTitleId){
    //   this.$API.getComplaintTitleItemListByParentId({complaintParentTitleId}).then(([res,msg])=>{
    //     console.log(res)
    //     this.radioList = res;
    //   })
    // },

  }
});

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "complaint-content"
  }, [_c('div', {
    staticClass: "complaint-header"
  }, [_c('p', {
    staticClass: "label-title"
  }, [_vm._v("投诉问题")]), _vm._v(" "), _c('div', {
    staticClass: "scroll_box pd0 white_bg"
  }, [_c('scroll-view', {
    staticClass: "scroll-view_x",
    staticStyle: {
      "width": "100%"
    },
    attrs: {
      "scroll-x": ""
    }
  }, _vm._l((_vm.complaintList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "complaint_list",
      class: _vm.tabIndex == index ? 'active' : '',
      attrs: {
        "eventid": '0_' + index
      },
      on: {
        "click": function($event) {
          _vm.changeIndex(index, item.complaintParentTitleId, item.complaintParentTitleName)
        }
      }
    }, [_c('span', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.complaintParentTitleName))])])
  }))], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "suggest-body"
  }, [_c('p', {
    staticClass: "label-title"
  }, [_vm._v("内容描述")]), _vm._v(" "), _c('div', {
    staticClass: "suggest-textarea"
  }, [_c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.paramsObj.complaintDetails),
      expression: "paramsObj.complaintDetails"
    }],
    staticClass: "textareaClass",
    attrs: {
      "placeholder": "请输入您的反馈问题，我们将不断为你改进",
      "placeholder-class": "textAreaPlClass",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.paramsObj.complaintDetails)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.paramsObj.complaintDetails = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "contact-content"
  }, [_c('communityPicker', {
    attrs: {
      "eventid": '2',
      "mpcomid": '0'
    },
    on: {
      "getCommunityChecked": _vm.getCommunityChecked
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "memberPhone-content"
  }, [_c('p', [_c('image', {
    staticClass: "memberPhoneImg",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/feedback/phone2x.png"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "memberPhone-box"
  }, [_c('p', {
    staticClass: "state"
  }, [_vm._v("联系电话")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.paramsObj.memberPhone),
      expression: "paramsObj.memberPhone"
    }],
    staticClass: "memberPhoneInput",
    attrs: {
      "type": "number",
      "placeholder": "请输入电话号码",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.paramsObj.memberPhone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.paramsObj.memberPhone = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('p', [_c('image', {
    staticClass: "closeImg",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/feedback/close2x.png"
    }
  })])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "footer-content"
  }, [_c('button', {
    staticClass: "sure-submit-button w_690",
    class: _vm.isDisabled ? 'garyBack' : '',
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": _vm.addMemberComplaint
    }
  }, [_vm._v("提交")])], 1)], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-46580414", esExports)
  }
}

/***/ })

},[515]);