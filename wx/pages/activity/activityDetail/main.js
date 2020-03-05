require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([13],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(193);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7475b121_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(200);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(194)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7475b121"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_7475b121_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\activity\\activityDetail\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7475b121", Component.options)
  } else {
    hotAPI.reload("data-v-7475b121", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 194:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_activity_applyActivity__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils___ = __webpack_require__(3);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        activityDetailInfoId = _ref.activityDetailInfoId;

    return {
      title: '窝趣趣活动,快来参加吧',
      path: '/pages/activity/activityDetail/main?activityDetailInfoId=' + activityDetailInfoId
    };
  },
  data: function data() {
    return {
      detailParam: {
        beginTime: '2019-09-09',
        endTime: '2019-10-09',
        isFree: true,
        address: '海珠区新滘西路300号 三楼趣堂',
        phone: '15914599999',
        content: '都市白领社群，是一个由广州CBD各大核心写字楼及周边写字楼工作的优质年轻白领聚集而成的一个社群，包括天河、越秀、海珠等市中心的写字楼，里面都是每个行业领域的优质年轻人，行业包括不限于金融、互联网、律师、医生、建筑、老师等等，学历本科或者以上，很多来自中大、华工、暨大、华师等学校，或者留学海外，而且不少高颜值哦，他们热爱生活，喜欢交朋友，追求有品质、有趣的生活。'
      },
      iconList: [{}, {}, {}, {}, {}]
    };
  },

  components: { ApplyActivity: __WEBPACK_IMPORTED_MODULE_1__components_activity_applyActivity__["a" /* default */] },
  onShow: function onShow() {
    this.getMiniAppActivityDetailInfo();
    this.Tracks.pageSaveParams({ serial: 7 });
  },

  methods: {
    getMiniAppActivityDetailInfo: function getMiniAppActivityDetailInfo() {
      var _this = this;

      var activityDetailInfoId = this.$root.$mp.query.activityDetailInfoId;

      this.$API.getMiniAppActivityDetailInfo({ activityDetailInfoId: activityDetailInfoId }).then(function (_ref2) {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
            res = _ref3[0],
            msg = _ref3[1];

        res.activityDetailInfo = Object(__WEBPACK_IMPORTED_MODULE_2__utils___["e" /* formatRichText */])(res.activityDetailInfo);
        _this.detailParam = res;
        _this.detailParam.activityApplyStartDateTime = res.activityApplyStartDateTime.substring(0, res.activityApplyStartDateTime.length - 3);
        _this.detailParam.activityApplyEndDateTime = res.activityApplyEndDateTime.substring(0, res.activityApplyEndDateTime.length - 3);
        _this.detailParam.activityStartDateTime = res.activityStartDateTime.substring(0, res.activityStartDateTime.length - 3);
        _this.detailParam.activityEndDateTime = res.activityEndDateTime.substring(0, res.activityEndDateTime.length - 3);
      });
    }
  }
});

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_applyActivity_vue__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_329846df_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_applyActivity_vue__ = __webpack_require__(199);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(197)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-329846df"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_applyActivity_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_329846df_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_applyActivity_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\activity\\applyActivity.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] applyActivity.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-329846df", Component.options)
  } else {
    hotAPI.reload("data-v-329846df", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 197:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils___ = __webpack_require__(3);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      applyObj: {
        applyPeopleName: '',
        applyPeoplePhone: ''
      },
      disabled: false
    };
  },

  props: {
    activityInfoId: {
      type: String,
      defualt: ''
    },
    applyCommunityId: {
      type: String,
      defualt: ''
    },
    applyCommunityName: {
      type: String,
      defualt: ''
    }
  },
  onShow: function onShow() {
    this.disabled = false;
  },

  methods: {
    userApplyActivity: function userApplyActivity() {
      var _this = this;

      this.disabled = true;
      var _applyObj = this.applyObj,
          applyPeopleName = _applyObj.applyPeopleName,
          applyPeoplePhone = _applyObj.applyPeoplePhone;
      var applyCommunityName = this.applyCommunityName;

      console.log(applyPeoplePhone);
      if (Object(__WEBPACK_IMPORTED_MODULE_1__utils___["b" /* checkPhone */])(applyPeoplePhone)) {
        var _ref = Object(__WEBPACK_IMPORTED_MODULE_1__utils___["l" /* mpvueGetStorageSync */])('memberObj') || {},
            applyPeopleId = _ref.memberId;

        var activityInfoId = this.activityInfoId,
            applyCommunityId = this.applyCommunityId;

        this.$API.userApplyActivity({ activityInfoId: activityInfoId, applyCommunityId: applyCommunityId, applyPeopleName: applyPeopleName, applyPeoplePhone: applyPeoplePhone, applyCommunityName: applyCommunityName, applyPeopleId: applyPeopleId, applyWay: 0 }).then(function (_ref2) {
          var _ref3 = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
              res = _ref3[0],
              msg = _ref3[1];

          console.log(res);
          _this.Tracks.pageSaveParams({ serial: 8 });
          Object(__WEBPACK_IMPORTED_MODULE_1__utils___["t" /* showSuccessToast */])({});
          _this.disabled = false;
          _this.applyObj.applyPeopleName = '';
          _this.applyObj.applyPeoplePhone = '';
          global.mpvue.navigateBack({
            delta: 1
          });
        });
      } else {
        this.disabled = false;
        Object(__WEBPACK_IMPORTED_MODULE_1__utils___["s" /* showModal */])({
          content: '您输入的手机号码格式有误'
        });
      }
    }
  }
});

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "apply_content"
  }, [_c('div', {
    staticClass: "flex_box"
  }, [_c('p', {
    staticClass: "label"
  }, [_vm._v("姓名:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.applyObj.applyPeopleName),
      expression: "applyObj.applyPeopleName"
    }],
    staticClass: "inputClass",
    attrs: {
      "type": "text",
      "placeholder": "请填写姓名",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.applyObj.applyPeopleName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.applyObj.applyPeopleName = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "flex_box"
  }, [_c('p', {
    staticClass: "label"
  }, [_vm._v("电话:")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.applyObj.applyPeoplePhone),
      expression: "applyObj.applyPeoplePhone"
    }],
    staticClass: "inputClass",
    attrs: {
      "type": "text",
      "placeholder": "请填写电话号码",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.applyObj.applyPeoplePhone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.applyObj.applyPeoplePhone = $event.target.value
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "footer_body"
  }, [_c('button', {
    staticClass: "share_firends",
    attrs: {
      "open-type": "share",
      "plain": ""
    }
  }, [_vm._v("分享给好友")]), _vm._v(" "), _c('button', {
    staticClass: "submitApply",
    attrs: {
      "disabled": _vm.disabled,
      "eventid": '2'
    },
    on: {
      "click": _vm.userApplyActivity
    }
  }, [_vm._v("提交报名")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-329846df", esExports)
  }
}

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "activity_detail"
  }, [_c('header', {
    staticClass: "activity_content"
  }, [_c('image', {
    staticClass: "bannerImg",
    attrs: {
      "src": _vm.detailParam.activityPicUrl
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "pd15"
  }, [_c('div', {
    staticClass: "messageInfo"
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v(_vm._s(_vm.detailParam.activityInfoTitle))]), _vm._v(" "), _c('p', {
    staticClass: "free"
  }, [_vm._v("免费")])], 1), _vm._v(" "), _c('p', {
    staticClass: "subhead"
  }, [_vm._v(_vm._s(_vm.detailParam.activityInfoDescription))]), _vm._v(" "), _c('rich-text', {
    staticClass: "details",
    attrs: {
      "nodes": _vm.detailParam.activityDetailInfo,
      "mpcomid": '0'
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "activity_body"
  }, [_c('view', [_c('div', {
    staticClass: "title_bar"
  }, [_c('image', {
    staticClass: "barImg",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/notice_of_activity.png"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("活动须知")]), _vm._v(" "), _c('image', {
    staticClass: "lineImg",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/wavyLine.png"
    }
  })], 1)]), _vm._v(" "), _c('div', {
    staticClass: "target_body"
  }, [_c('div', {
    staticClass: "mb10"
  }, [_c('div', {
    staticClass: "flex_item"
  }, [_c('image', {
    staticClass: "icon",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/registration_time.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("报名时间:")])], 1), _vm._v(" "), _c('div', {
    staticClass: "ml25"
  }, [_vm._v(_vm._s(_vm.detailParam.activityApplyStartDateTime) + "至" + _vm._s(_vm.detailParam.activityApplyEndDateTime))])]), _vm._v(" "), _c('div', {
    staticClass: "mb10"
  }, [_c('div', {
    staticClass: "flex_item"
  }, [_c('image', {
    staticClass: "icon",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/activitytime.png"
    }
  }), _vm._v(" "), _c('p', [_vm._v("活动时间:")])], 1), _vm._v(" "), _c('div', {
    staticClass: "ml25"
  }, [_vm._v(_vm._s(_vm.detailParam.activityStartDateTime) + "至" + _vm._s(_vm.detailParam.activityEndDateTime))])]), _vm._v(" "), _c('div', {
    staticClass: "flex_box mb10"
  }, [_c('image', {
    staticClass: "icon",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/participants.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex_item"
  }, [_c('p', [_vm._v("参与对象:")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.detailParam.activityFaceType === 0 ? '不限' : _vm.detailParam.activityFaceType === 1 ? '注册会员' : '入住会员'))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "flex_box mb10"
  }, [_c('image', {
    staticClass: "icon",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/money.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex_item"
  }, [_c('p', [_vm._v("费用:")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.detailParam.activityPayType === 0 ? '免费' : '付费'))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "flex_box mb10"
  }, [_c('image', {
    staticClass: "icon",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/active_address.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex_item"
  }, [_c('p', [_vm._v("活动地址:")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.detailParam.activityCommunityAddress))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "flex_box mb10"
  }, [_c('image', {
    staticClass: "icon",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/contacts.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex_item"
  }, [_c('p', [_vm._v("联系人:")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.detailParam.activityCommunityContractName))])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "flex_box mb10"
  }, [_c('image', {
    staticClass: "icon",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/contact_information.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "flex_item"
  }, [_c('p', [_vm._v("联系方式:")]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.detailParam.activityCommunityContractPhone))])], 1)])])]), _vm._v(" "), _c('view', [_c('div', {
    staticClass: "title_bar"
  }, [_c('image', {
    staticClass: "barImg",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/reminder.png"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("温馨提示")]), _vm._v(" "), _c('image', {
    staticClass: "lineImg",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/wavyLine.png"
    }
  })], 1)]), _vm._v(" "), _c('p', {
    staticClass: "warnText"
  }, [_vm._v(_vm._s(_vm.detailParam.activityTips))])], 1), _vm._v(" "), _c('view', [_c('div', {
    staticClass: "title_bar"
  }, [_c('image', {
    staticClass: "barImg",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/activity_review.png"
    }
  }), _vm._v(" "), _c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('p', {
    staticClass: "title"
  }, [_vm._v("立即报名")]), _vm._v(" "), _c('image', {
    staticClass: "lineImg",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/wavyLine.png"
    }
  })], 1)]), _vm._v(" "), _c('div', [_c('ApplyActivity', {
    attrs: {
      "activityInfoId": _vm.detailParam.activityInfoId,
      "applyCommunityName": _vm.detailParam.activityCommunityName,
      "applyCommunityId": _vm.detailParam.activityCommunityId,
      "mpcomid": '1'
    }
  })], 1)])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7475b121", esExports)
  }
}

/***/ })

},[192]);