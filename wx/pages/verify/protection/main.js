require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([5],{

/***/ 900:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(901);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 901:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(903);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5dcb4dd0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(908);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(902)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5dcb4dd0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_5dcb4dd0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\verify\\protection\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dcb4dd0", Component.options)
  } else {
    hotAPI.reload("data-v-5dcb4dd0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 902:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 903:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__upload__ = __webpack_require__(904);
//
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
      tabsIndex: 0,
      tabsArr: ['提交认证', '认证结果']
    };
  },

  components: { Upload: __WEBPACK_IMPORTED_MODULE_0__upload__["a" /* default */] },
  methods: {
    changeTab: function changeTab(tabsIndex) {
      this.tabsIndex = tabsIndex;
    }
  }
});

/***/ }),

/***/ 904:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_upload_vue__ = __webpack_require__(906);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_23391973_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_upload_vue__ = __webpack_require__(907);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(905)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-23391973"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_upload_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_23391973_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_upload_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\verify\\protection\\upload.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] upload.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-23391973", Component.options)
  } else {
    hotAPI.reload("data-v-23391973", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 905:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 906:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixins_wxValidateMixin_js__ = __webpack_require__(29);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_3__mixins_wxValidateMixin_js__["a" /* default */]],
  data: function data() {
    return {
      certificateTypeId: 0, // 证件照类型
      // 展示的照片
      picList: [{
        state: 0, // 0为默认，1为修改过了
        name: 'cardFront',
        src: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/verify/protectLeft.png'
      }, {
        state: 0, // 0为默认，1为修改过了
        name: 'cardReverse',
        src: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/verify/protectRight.png'
      }],
      protectionParam: {
        cardExpiryDate: '2021-01-01', // 有效期
        countryNameZh: '请选择国家或地区', // 国家的名字
        countryId: 0, // 国家的id
        memberFamilyName: '',
        memberLastName: '',
        memberAddress: '',
        cardNo: ''
      },
      currentIndex: 0,
      certificateTypeNameList: [],
      certificateTypeList: []
    };
  },
  onLoad: function onLoad() {
    this.getCertificateType();
  },
  onShow: function onShow() {
    // 获取到选择的国家
    var _object = this.$store.state.globel.cacheObject;
    if (_object.countryNameZh === undefined) {} else {
      this.protectionParam.countryNameZh = _object.countryNameZh;
      this.protectionParam.countryId = _object.countryId;
    }

    var ruleList = [{ key: 'memberFamilyName', description: '请输入你的姓氏' }, { key: 'memberLastName', description: '请输入你的名字' }, { key: 'memberAddress', description: '请输入你的联系地址' }, { key: 'cardNo', description: '请输入证件号' }];
    this.initValidate(ruleList);
  },

  methods: {
    // 查询所有的证件照
    getCertificateType: function getCertificateType() {
      var _this = this;

      this.$API.getCertificateType({}).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        // 1083571954331422721护照的id
        _this.certificateTypeList = res;
        _this.certificateTypeNameList = res.map(function (item) {
          return item.certificateTypeName;
        });
      });
    },

    // 提交事件
    submitFunction: function submitFunction() {
      var noNone = false; // 是否有没有上传图片的
      this.picList.forEach(function (item, index) {
        if (item['state'] === 0) {
          noNone = true;
        }
      });
      var test = this.picList.find(function (item) {
        return item['state'] === 0;
      });
      console.log(test);
      // 没有上传完整两张照片
      if (noNone === true) {
        global.mpvue.showToast({
          title: '上传图片不足',
          icon: 'none'
        });
        return false;
      }
      this.uploadMessage();
    },

    // 日期选择器的监听事件
    getDateChange: function getDateChange(e) {
      this.protectionParam.cardExpiryDate = e.mp.detail.value;
    },
    getCertificateTypeId: function getCertificateTypeId(e) {
      this.currentIndex = e.mp.detail.value;
      var imageObj = {
        'protection': ['https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/verify/protectLeft.png', 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/verify/protectRight.png'],
        'ohter': ['https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/verify/IDcardFront.png', 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/verify/IDcardReverse.png']
      };
      var ImageList = this.currentIndex === 0 ? imageObj['protection'] : imageObj['ohter'];
      this.picList.forEach(function (item, index) {
        item.src = ImageList[index];
      });
    },

    // 获取图片路径并存放在pic中
    getimage: function getimage(Index) {
      var _this2 = this;

      global.mpvue.chooseImage({
        count: 1,
        sourceType: ['album', 'camera'],
        success: function success(res) {
          _this2.picList[Index].src = res.tempFilePaths[0];
          _this2.picList[Index].state = 1;
          _this2.uploadimage(Index);
        }
      });
    },

    // 上传两张图片
    uploadimage: function uploadimage(Index) {
      var tfile = this.picList[Index];
      global.mpvue.uploadFile({
        url: "https://tapi.wowqu.cn/" + 'storage/image/upload',
        filePath: tfile['src'],
        name: 'file',
        header: {
          'Content-Type': 'multipart/form-data'
        },
        formData: {
          imageType: 'certificate' // 证书
        },
        success: function success(sres) {
          tfile.src = JSON.parse(sres.data).data;
        },
        fail: function fail(fres) {
          global.mpvue.hideLoading();
          console.log('上传失败');
        }
      });
    },

    // 上传护照等信息
    uploadMessage: function uploadMessage() {
      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync.memberId;

      var certificateTypeId = this.certificateTypeList[this.currentIndex].certificateTypeId;

      var reverseParam = this.currentIndex === 0 ? { cardInHand: this.picList[1].src } : { cardReverse: this.picList[1].src };
      console.log(certificateTypeId);
      var dataObj = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
        cardFront: this.picList[0].src,
        memberId: memberId,
        certificateTypeId: certificateTypeId
      }, reverseParam, this.protectionParam);
      this.$API.addMemberCertificate(dataObj).then(function (_ref3) {
        var _ref4 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_slicedToArray___default()(_ref3, 2),
            res = _ref4[0],
            msg = _ref4[1];

        var url = '/pages/verify/commit/main';
        var skipType = 1;
        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["t" /* showSuccessToast */])({ msg: msg, url: url, skipType: skipType });
      });
    }
  }
});

/***/ }),

/***/ 907:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('form', {
    staticClass: "protection-body",
    attrs: {
      "eventid": '7'
    },
    on: {
      "submit": _vm.checkForm
    }
  }, [_c('div', {
    staticClass: "protection-box"
  }, [_c('div', {
    staticClass: "input-container"
  }, [_c('div', {
    staticClass: "input-place"
  }, [_vm._v("认证类型")]), _vm._v(" "), _c('picker', {
    staticClass: "input-input",
    attrs: {
      "mode": "selector",
      "range": _vm.certificateTypeNameList,
      "value": _vm.currentIndex,
      "eventid": '0'
    },
    on: {
      "change": _vm.getCertificateTypeId
    }
  }, [_c('div', {
    staticClass: "box"
  }, [_vm._v(_vm._s(_vm.certificateTypeNameList[_vm.currentIndex]))])])], 1), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "protection-box"
  }, [_c('div', {
    staticClass: "input-container"
  }, [_c('div', {
    staticClass: "input-place"
  }, [_vm._v("姓(英文)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.protectionParam.memberFamilyName),
      expression: "protectionParam.memberFamilyName"
    }],
    staticClass: "input-input",
    attrs: {
      "type": "text",
      "name": "memberFamilyName",
      "placeholder": "如张小宝，填写ZHANG",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.protectionParam.memberFamilyName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.protectionParam.memberFamilyName = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "protection-box"
  }, [_c('div', {
    staticClass: "input-container"
  }, [_c('div', {
    staticClass: "input-place"
  }, [_vm._v("名(英文)")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.protectionParam.memberLastName),
      expression: "protectionParam.memberLastName"
    }],
    staticClass: "input-input",
    attrs: {
      "type": "text",
      "name": "memberLastName",
      "placeholder": "如张小宝，填写XIAOBAO",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.protectionParam.memberLastName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.protectionParam.memberLastName = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "protection-box"
  }, [_c('div', {
    staticClass: "input-container"
  }, [_c('div', {
    staticClass: "input-place"
  }, [_vm._v("联系地址")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.protectionParam.memberAddress),
      expression: "protectionParam.memberAddress"
    }],
    staticClass: "input-input",
    attrs: {
      "type": "text",
      "name": "memberAddress",
      "placeholder": "请输入你的联系地址",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.protectionParam.memberAddress)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.protectionParam.memberAddress = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "protection-box"
  }, [_c('div', {
    staticClass: "input-container"
  }, [_c('div', {
    staticClass: "input-place"
  }, [_vm._v("护照号")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.protectionParam.cardNo),
      expression: "protectionParam.cardNo"
    }],
    staticClass: "input-input",
    attrs: {
      "type": "text",
      "name": "cardNo",
      "placeholder": "如E1234567",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.protectionParam.cardNo)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.protectionParam.cardNo = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "protection-box"
  }, [_c('div', {
    staticClass: "input-container"
  }, [_c('div', {
    staticClass: "input-place"
  }, [_vm._v("有效期")]), _vm._v(" "), _c('picker', {
    staticClass: "input-input",
    attrs: {
      "mode": "date",
      "value": _vm.protectionParam.cardExpiryDate,
      "start": "1999-01-01",
      "end": "2199-01-01",
      "eventid": '5'
    },
    on: {
      "change": _vm.getDateChange
    }
  }, [_c('div', {
    staticClass: "box"
  }, [_vm._v(_vm._s(_vm.protectionParam.cardExpiryDate))])])], 1)]), _vm._v(" "), (_vm.currentIndex === 0) ? _c('div', {
    staticClass: "protection-box"
  }, [_c('navigator', {
    staticClass: "input-container",
    staticStyle: {
      "border-bottom": "none"
    },
    attrs: {
      "url": "/pages/verify/chooseCountry/main"
    }
  }, [_c('div', {
    staticClass: "input-place"
  }, [_vm._v("国籍或区域")]), _vm._v(" "), _c('span', {
    staticClass: "input-input",
    attrs: {
      "type": "text"
    }
  }, [_vm._v(_vm._s(_vm.protectionParam.countryNameZh))])]), _vm._v(" "), _c('b', {
    staticClass: "arrow-right"
  })], 1) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "empty-color"
  }), _vm._v(" "), _c('div', {
    staticClass: "pic-container"
  }, _vm._l((_vm.picList), function(item, index) {
    return _c('div', {
      key: index,
      attrs: {
        "name": item.name,
        "eventid": '6_' + index
      },
      on: {
        "click": function($event) {
          _vm.getimage(index)
        }
      }
    }, [_c('image', {
      attrs: {
        "mode": "aspectFit",
        "src": item.src
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "flex-box-footer"
  }, [_c('button', {
    staticClass: "commit",
    attrs: {
      "formType": "submit"
    }
  }, [_vm._v("提交信息")])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-23391973", esExports)
  }
}

/***/ }),

/***/ 908:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "flex-box-content"
  }, [_c('div', {
    staticClass: "flex-box-body"
  }, [(_vm.tabsIndex === 0) ? _c('Upload', {
    attrs: {
      "mpcomid": '0'
    }
  }) : _vm._e()], 1)])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-5dcb4dd0", esExports)
  }
}

/***/ })

},[900]);