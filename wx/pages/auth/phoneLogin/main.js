require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([17],{

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(258);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_42a906c3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(266);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(259)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-42a906c3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_42a906c3_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\auth\\phoneLogin\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42a906c3", Component.options)
  } else {
    hotAPI.reload("data-v-42a906c3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 259:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils___ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_mcaptcha__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mixins_finalLoginMixin__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_customModal_vue__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_js_md5__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_js_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_js_md5__);






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__WEBPACK_IMPORTED_MODULE_8__mixins_finalLoginMixin__["a" /* default */]],
  components: { CustomModal: __WEBPACK_IMPORTED_MODULE_9__components_customModal_vue__["a" /* default */] },
  data: function data() {
    return {
      phone: '',
      encryptCode: '',
      width: 0,
      codeText: '获取验证码',
      disabled: false,
      currentTime: 60,
      x: 0,
      y: 0,
      interval: null,
      loginText: '微信登录',
      isDisabled: false,

      imgCode: '',
      mcaptcha: {},
      prexUrl: ''
    };
  },
  onReady: function onReady() {
    this.mcaptcha = new __WEBPACK_IMPORTED_MODULE_7__utils_mcaptcha__["a" /* Mcaptcha */]({
      el: 'canvas',
      width: 80,
      height: 35,
      createCodeImg: ''
    });
  },
  onLoad: function onLoad(options) {
    // referralId 推荐人的memberId
    // communityId 推荐的社区id
    if (__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_json_stringify___default()(options) !== '{}') {
      Object(__WEBPACK_IMPORTED_MODULE_6__utils___["p" /* mpvueSetStorageSync */])('registerReferrerInfo', options);
    }
    if (global.mpvuePlatform === 'my') {
      this.loginText = '支付宝登录';
    } else {
      this.loginText = '微信登录';
    }
  },
  onShow: function onShow() {
    this.encryptCode = '';
    this.getCustomQrcodeDetailVoById();
  },
  onUnload: function onUnload() {
    if (this.interval != null) {
      clearInterval(this.interval);
      this.codeText = '获取验证码';
      this.interval = null;
      this.disabled = false;
    }
  },

  methods: {
    /**
     * 检测字符串是否为空
     * @method getCustomQrcodeDetailVoById
     * @param { scene } string 二维码携带的标识id
     * @param { qrcodeId } string 二维码id
     * @returns { Boolean } 信息对象
     */
    getCustomQrcodeDetailVoById: function getCustomQrcodeDetailVoById() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var scene, qrcodeId, result, params, referralId, communityId, channelId;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                scene = _this.$root.$mp.query.scene;
                qrcodeId = scene && decodeURIComponent(scene);

                if (!scene) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return _this.$API.getCustomQrcodeDetailVoById({ qrcodeId: qrcodeId }).then(function (_ref) {
                  var _ref2 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
                      res = _ref2[0],
                      msg = _ref2[1];

                  return res;
                });

              case 5:
                result = _context.sent;
                params = Object(__WEBPACK_IMPORTED_MODULE_6__utils___["l" /* mpvueGetStorageSync */])('registerReferrerInfo') || {};

                if ((typeof result === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_typeof___default()(result)) === 'object') {
                  referralId = result.memberId, communityId = result.communityId, channelId = result.channelId;

                  console.log(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, params, { referralId: referralId, communityId: communityId, channelId: channelId, scene: scene }));
                  Object(__WEBPACK_IMPORTED_MODULE_6__utils___["p" /* mpvueSetStorageSync */])('registerReferrerInfo', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, params, { referralId: referralId, communityId: communityId, channelId: channelId, scene: scene }));
                } else {
                  Object(__WEBPACK_IMPORTED_MODULE_6__utils___["p" /* mpvueSetStorageSync */])('registerReferrerInfo', __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({}, params, { scene: scene }));
                }

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    bindUsernameInput: function bindUsernameInput(e) {
      var value = e.mp.detail.value;
      this.phone = value.replace(/[^\d]/g, '');
    },

    codeChange: function codeChange(e) {
      var value = e.mp.detail.value;
      this.encryptCode = value.replace(/[^\d]/g, '');
    },
    clearInput: function clearInput() {
      this.phone = '';
    },
    sendSms: function sendSms() {
      var _this2 = this;

      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$source = _ref3.source,
          source = _ref3$source === undefined ? 'maMall' : _ref3$source;

      this.disabled = true;
      var phone = this.phone;
      if (Object(__WEBPACK_IMPORTED_MODULE_6__utils___["b" /* checkPhone */])(phone)) {
        var header = { 'Content-Type': 'application/x-www-form-urlencoded' };
        this.$API.SendSms({ source: source, phone: phone }, header).then(function (_ref4) {
          var _ref5 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_slicedToArray___default()(_ref4, 2),
              res = _ref5[0],
              msg = _ref5[1];

          Object(__WEBPACK_IMPORTED_MODULE_6__utils___["p" /* mpvueSetStorageSync */])('phone', phone);
          _this2.getCode();
        }).catch(function () {
          _this2.disabled = false;
        });
      } else {
        this.disabled = false;
        Object(__WEBPACK_IMPORTED_MODULE_6__utils___["s" /* showModal */])({
          content: '您输入的手机号码格式有误'
        });
      }
    },

    // 验证码倒计时函数
    getCode: function getCode() {
      var _this3 = this;

      var currentTime = this.currentTime;
      this.codeText = currentTime + '秒';
      this.interval = setInterval(function () {
        _this3.codeText = currentTime - 1 + '秒';
        currentTime--;
        if (currentTime <= 0) {
          clearInterval(_this3.interval);
          _this3.codeText = '重新获取';
          _this3.currentTime = 60;
          _this3.disabled = false;
        }
      }, 1000);
    },

    // 验证码倒计时结束
    startLogin: function startLogin() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var phone, encryptCode, exception, refferrerInfo, params, portUrl;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                phone = _this4.phone, encryptCode = _this4.encryptCode;
                _context2.next = 3;
                return _this4.loginExceptionHandler();

              case 3:
                exception = _context2.sent;

                if (exception) {
                  refferrerInfo = Object(__WEBPACK_IMPORTED_MODULE_6__utils___["l" /* mpvueGetStorageSync */])('registerReferrerInfo') || {};
                  params = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_extends___default()({
                    phone: phone,
                    encryptCode: __WEBPACK_IMPORTED_MODULE_10_js_md5___default()(encryptCode),
                    auth_type: 'maCommunitySms'
                  }, refferrerInfo);

                  _this4.isDisabled = true;
                  portUrl = global.mpvuePlatform === 'my' ? 'memauth/verify/loginByAliPayMiniAppSms' : 'memauth/verify/loginByMiniAppCommunitySms';

                  Object(__WEBPACK_IMPORTED_MODULE_6__utils___["m" /* mpvueLogin */])({
                    portUrl: portUrl,
                    params: params,
                    callback: _this4.callbackForLogined,
                    errCallBack: function errCallBack() {
                      _this4.isDisabled = false;
                    }
                  });
                }

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this4);
      }))();
    },
    loginExceptionHandler: function loginExceptionHandler() {
      var phone = this.phone,
          encryptCode = this.encryptCode,
          imgCode = this.imgCode;

      var prePhone = Object(__WEBPACK_IMPORTED_MODULE_6__utils___["l" /* mpvueGetStorageSync */])('phone');
      try {
        if (Object(__WEBPACK_IMPORTED_MODULE_6__utils___["j" /* isNull */])(phone)) {
          throw new Error('手机号码不能为空');
        }
        if (phone.length !== 11) {
          throw new Error('你输入的号码长度有误');
        }
        if (!Object(__WEBPACK_IMPORTED_MODULE_6__utils___["b" /* checkPhone */])(phone)) {
          throw new Error('您输入的手机号码格式有误');
        }
        if (prePhone && phone !== prePhone) {
          throw new Error('号码不一致');
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_6__utils___["j" /* isNull */])(encryptCode)) {
          throw new Error('请输入短信验证码');
        }
        if (Object(__WEBPACK_IMPORTED_MODULE_6__utils___["j" /* isNull */])(imgCode)) {
          throw new Error('请输入图形验证码');
        }
        if (!this.mcaptcha.validate(imgCode)) {
          this.mcaptcha.refresh();
          throw new Error('图形验证码错误');
        }
        return true;
      } catch (e) {
        Object(__WEBPACK_IMPORTED_MODULE_6__utils___["s" /* showModal */])({
          content: e.message
        });
        return false;
      }
    },
    wxLogin: function wxLogin() {
      global.mpvue.redirectTo({
        url: '/pages/auth/wxLogin/main'
      });
    },
    returnBack: function returnBack() {
      global.mpvue.switchTab({
        url: '/pages/home/index/main'
      });
    },
    getVisible: function getVisible(visible) {
      console.log(visible);
      this.visible = visible;
    },

    // 刷新验证码
    onTap: function onTap() {
      this.mcaptcha.refresh();
    }
  }
});

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Mcaptcha; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass__);


var Mcaptcha = function () {
  function Mcaptcha(options) {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Mcaptcha);

    this.options = options;
    this.fontSize = options.height * 3 / 6;
    this.init();
    this.refresh();
  }

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_createClass___default()(Mcaptcha, [{
    key: 'init',
    value: function init() {
      this.ctx = global.mpvue.createCanvasContext(this.options.el);
      this.ctx.setTextBaseline('middle');
      this.ctx.setFillStyle(this.randomColor(180, 240));
    }
  }, {
    key: 'refresh',
    value: function refresh() {
      var _this = this;

      var code = '';
      var txtArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (var i = 0; i < 4; i++) {
        code += txtArr[this.randomNum(0, txtArr.length)];
      }
      this.options.createCodeImg = code;
      var arr = (code + '').split('');
      if (arr.length === 0) {
        arr = ['e', 'r', 'r', 'o', 'r'];
      };
      var offsetLeft = this.options.width * 0.6 / (arr.length - 1);
      var marginLeft = this.options.width * 0.2;
      arr.forEach(function (item, index) {
        _this.ctx.setFillStyle(_this.randomColor(0, 180));
        var size = _this.randomNum(24, _this.fontSize);
        _this.ctx.setFontSize(size);
        var dis = offsetLeft * index + marginLeft - size * 0.3;
        var deg = _this.randomNum(-30, 30);
        _this.ctx.translate(dis, _this.options.height * 0.5);
        _this.ctx.rotate(deg * Math.PI / 180);
        _this.ctx.fillText(item, 0, 0);
        _this.ctx.rotate(-deg * Math.PI / 180);
        _this.ctx.translate(-dis, -_this.options.height * 0.5);
      });
      for (var i = 0; i < 4; i++) {
        this.ctx.strokeStyle = this.randomColor(40, 180);
        this.ctx.beginPath();
        this.ctx.moveTo(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height));
        this.ctx.lineTo(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height));
        this.ctx.stroke();
      }
      for (var i = 0; i < this.options.width / 4; i++) {
        this.ctx.fillStyle = this.randomColor(0, 255);
        this.ctx.beginPath();
        this.ctx.arc(this.randomNum(0, this.options.width), this.randomNum(0, this.options.height), 1, 0, 2 * Math.PI);
        this.ctx.fill();
      }
      this.ctx.draw();
    }
  }, {
    key: 'validate',
    value: function validate(code) {
      var code = code.toLowerCase();
      var v_code = this.options.createCodeImg.toLowerCase();
      console.log(code);
      console.log(v_code.substring(v_code.length - 4));
      if (code == v_code.substring(v_code.length - 4)) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'randomNum',
    value: function randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }, {
    key: 'randomColor',
    value: function randomColor(min, max) {
      var r = this.randomNum(min, max);
      var g = this.randomNum(min, max);
      var b = this.randomNum(min, max);
      return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
  }]);

  return Mcaptcha;
}();

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "form-box"
  }, [_c('image', {
    staticClass: "logo",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/auth/logo.png"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "form-item"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.phone),
      expression: "phone"
    }],
    staticClass: "username",
    attrs: {
      "type": "number",
      "maxlength": "11",
      "placeholder": "请输入手机号码",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.phone)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.phone = $event.target.value
      }, _vm.bindUsernameInput]
    }
  }), _vm._v(" "), (_vm.phone.length > 0) ? _c('image', {
    staticClass: "clear",
    attrs: {
      "id": "clear-username",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/auth/clear.png",
      "eventid": '1'
    },
    on: {
      "click": _vm.clearInput
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "form-item disFlex"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.encryptCode),
      expression: "encryptCode"
    }],
    staticClass: "password",
    attrs: {
      "type": "number",
      "maxlength": "6",
      "placeholder": "验证码",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.encryptCode)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.encryptCode = $event.target.value
      }, _vm.codeChange]
    }
  }), _vm._v(" "), _c('button', {
    staticClass: "send-code",
    attrs: {
      "disabled": _vm.disabled,
      "eventid": '3'
    },
    on: {
      "click": _vm.sendSms
    }
  }, [_vm._v(_vm._s(_vm.codeText))])], 1), _vm._v(" "), _c('div', {
    staticClass: "form-item disFlex"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.imgCode),
      expression: "imgCode"
    }],
    attrs: {
      "type": "text",
      "id": "code",
      "name": "codeImg",
      "placeholder-class": "C3",
      "placeholder": "请输入图形验证码",
      "maxlength": "4",
      "eventid": '4'
    },
    domProps: {
      "value": (_vm.imgCode)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.imgCode = $event.target.value
      }
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "validate-box",
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.onTap
    }
  }, [_c('canvas', {
    staticClass: "canvasClass",
    attrs: {
      "canvas-id": "canvas",
      "id": "canvas"
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "login-btn",
    class: _vm.isDisabled ? 'garyBack' : '',
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.startLogin
    }
  }, [_vm._v("登录")]), _vm._v(" "), (_vm.loginText === '微信登录') ? _c('div', {
    staticClass: "wxlogin",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": _vm.wxLogin
    }
  }, [_vm._v(_vm._s(_vm.loginText))]) : _vm._e()], 1), _vm._v(" "), _c('CustomModal', {
    attrs: {
      "visible": _vm.visible,
      "wxGetUserInfo": _vm.wxGetUserInfo,
      "rediToCenterPage": _vm.rediToCenterPage,
      "eventid": '8',
      "mpcomid": '0'
    },
    on: {
      "getVisible": _vm.getVisible
    }
  })], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "officalLogo"
  }, [_c('image', {
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/auth/wq_logo.png",
      "mode": "widthFix"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-42a906c3", esExports)
  }
}

/***/ })

},[257]);