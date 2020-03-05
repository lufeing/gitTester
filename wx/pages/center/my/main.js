require("../../../common/manifest.js")
require("../../../common/vendor.js")
global.webpackJsonpMpvue([10],{

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(366);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4dd85af2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(373);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(367)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-4dd85af2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_4dd85af2_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\center\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4dd85af2", Component.options)
  } else {
    hotAPI.reload("data-v-4dd85af2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 367:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_popup_receiveCoupon__ = __webpack_require__(369);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
        memberId = _mpvueGetStorageSync.memberId;

    return {
      title: '转发邀请更多好友',
      path: '/pages/home/index/main?referralId=' + memberId
    };
  },

  components: {
    ReceiveCoupon: __WEBPACK_IMPORTED_MODULE_4__components_popup_receiveCoupon__["a" /* default */]
  },
  data: function data() {
    return {
      memberObj: {}, // 用户的信息
      numParams: {
        balance: '-',
        couponNum: '-',
        integral: '-'
      },
      mpvuePlatform: '',
      loginStatusObject: {},
      receiveCouponModal: false,
      receiveMsg: '',
      receiveCode: 0,
      tabList: [{
        title: '我的账单',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/zhangdan2x.png',
        naviUrl: '/pages/bills/billList/main'
      }, {
        title: '我的合同',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/hetong2x.png',
        naviUrl: '/pages/contract/index/main'
      },
      // {
      //   title: "智能门锁",
      //   imgUrl: "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/zhinengmenshuo2x.png",
      //   naviUrl: "/pages/intelligentLock/lockList/main"
      // },
      // {
      //   title: "能耗读数",
      //   imgUrl: "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/neihaodushu2x.png",
      //   naviUrl: "/pages/center/energy/main"
      // },
      // {
      //   title: "租赁设备",
      //   imgUrl: "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/shebeizulin2x.png",
      //   naviUrl: "/pages/center/expensesDetail/main"
      // },
      {
        title: '清洁',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/qingjie2x.png',
        naviUrl: '/pages/clean/index/main'
      }, {
        title: '维修',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/weixiu2x.png',
        naviUrl: '/pages/maintain/index/main'
      }, {
        title: '管家服务',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/guangjiafuwu2x.png',
        naviUrl: '/pages/stewardServer/index/main'
      }, {
        title: '看房预约',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/myorder2x.png',
        naviUrl: '/pages/center/appointment/index/main'
      }, {
        signId: 'VERIFY',
        title: '身份认证',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/identity2x.png',
        naviUrl: '/pages/verify/index/main',
        needIdentity: true,
        redirectUrl: '/pages/verify/success/main',
        isHide: global.mpvuePlatform === 'my'
      },
      // {
      //   title: "我的服务",
      //   imgUrl: "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/server2x.png",
      //   naviUrl: "/pages/center/expensesDetail/main"
      // },
      {
        title: '我的保险',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/insurance.png',
        naviUrl: '/pages/insurance/insuranceList/main',
        isHide: global.mpvuePlatform === 'my'
      }, {
        title: '设置',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/shezhi2x.png',
        naviUrl: '/pages/center/setting/main'
      }, {
        title: '会员邀请',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/huiyuanyaoqing2x.png',
        naviUrl: '/pages/invite/inviteList/main',
        isHide: global.mpvuePlatform === 'my'
      }, {
        title: '防疫问卷',
        imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/wodehuodong2x.png',
        naviUrl: '/pages/survey/health/main'
        // {
        //   title: '会员邀请',
        //   imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/huiyuanyaoqing2x.png',
        //   naviUrl: '/pages/invite/inviteList/main'
        // }
      }]
      // signObj: {
      //   title: '会员邀请',
      //   imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/huiyuanyaoqing2x.png',
      //   naviUrl: '/pages/feedback/index/main'
      // }
    };
  },
  onShow: function onShow() {
    this.mpvuePlatform = global.mpvuePlatform;
    this.getMiniMemberUnusedCouponCount();
    setTimeout(function () {
      Object(__WEBPACK_IMPORTED_MODULE_3__utils__["p" /* mpvueSetStorageSync */])('afreshRequest', true);
    }, 2000);
  },

  methods: {
    // 获取用户的信息
    getMemberById: function getMemberById() {
      var _this = this;

      var _ref = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('memberObj') || {},
          memberId = _ref.memberId;

      this.$API.getMemberById({ memberId: memberId }).then(function (_ref2) {
        var _ref3 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref2, 2),
            res = _ref3[0],
            msg = _ref3[1];

        var memberName = res.memberName,
            nickName = res.nickName,
            tel = res.phone,
            openId = res.wxMiniAppCommunityOpenId;

        res['phoneshow'] = tel.substr(0, 4) + '****' + tel.substr(7);
        res['memberNameshow'] = nickName == null ? memberName : nickName;
        _this.memberObj = res;

        getApp().mtj.setUserInfo({ tel: tel, openId: openId }); // 用户画像
        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["p" /* mpvueSetStorageSync */])('memberObj', res);
        _this.selectEfficientContractListByMemberId(memberId);
        _this.checkMemberRedPacket();
      });
    },
    getMiniMemberUnusedCouponCount: function getMiniMemberUnusedCouponCount() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _loginStatusObject, loginStatus;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["i" /* isLogin */])();

              case 2:
                _context.t0 = _context.sent;

                if (_context.t0) {
                  _context.next = 5;
                  break;
                }

                _context.t0 = {};

              case 5:
                _loginStatusObject = _this2.loginStatusObject = _context.t0;
                loginStatus = _loginStatusObject.loginStatus;

                if (!loginStatus) {
                  _context.next = 10;
                  break;
                }

                _context.next = 10;
                return _this2.$API.getMiniMemberUnusedCouponCount().then(function (_ref4) {
                  var _ref5 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref4, 2),
                      res = _ref5[0],
                      msg = _ref5[1];

                  _this2.numParams.couponNum = res;
                  _this2.numParams.balance = 0;
                  _this2.numParams.integral = 0;
                  _this2.getMemberById();
                  _this2.saveMemberLocationFinalLogin();
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    selectEfficientContractListByMemberId: function selectEfficientContractListByMemberId(memberId) {
      var _this3 = this;

      this.$API.selectEfficientContractListByMemberId({ memberId: memberId }).then(function (_ref6) {
        var _ref7 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref6, 2),
            res = _ref7[0],
            msg = _ref7[1];

        if (res.length) {
          var feedbackObj = {
            title: '投诉建议',
            imgUrl: 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/my/center/tousujianyi2x.png',
            naviUrl: '/pages/feedback/index/main'
          };
          var boolean = _this3.tabList.some(function (item) {
            return item.title === '投诉建议';
          });
          if (!boolean) {
            _this3.tabList.push(feedbackObj);
          }
        }
      });
    },
    checkMemberRedPacket: function checkMemberRedPacket() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _ref8, memberId, _ref9, _ref9$channelId, channelId;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _ref8 = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('memberObj') || {}, memberId = _ref8.memberId;

                if (!memberId) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 4;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('registerReferrerInfo');

              case 4:
                _ref9 = _context2.sent;
                _ref9$channelId = _ref9.channelId;
                channelId = _ref9$channelId === undefined ? 31 : _ref9$channelId;

                _this4.$API.checkMemberRedPacket({ memberId: memberId, channelId: channelId }).then(function (_ref10) {
                  var _ref11 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref10, 2),
                      res = _ref11[0],
                      msg = _ref11[1];

                  // res.success
                  _this4.receiveCouponModal = res.success;
                  _this4.receiveMsg = res.message;
                  _this4.receiveCode = res.code;
                });

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this4);
      }))();
    },
    cancelMask: function cancelMask(param) {
      this.receiveCouponModal = param.maskModal;
    },

    // 跳转到会员信息页面
    navigatorMember: function navigatorMember(memberLevel) {
      global.mpvue.navigateTo({
        url: '/pages/center/member/main?memberLevel=' + memberLevel
      });
    },
    naviEditPersonalData: function naviEditPersonalData() {
      var _ref12 = this.loginStatusObject || {},
          loginStatus = _ref12.loginStatus;

      if (loginStatus) {
        global.mpvue.navigateTo({
          url: '/pages/center/personalData/index/main'
        });
      }
    },
    naTiurl: function naTiurl(_ref13) {
      var naviUrl = _ref13.naviUrl,
          needIdentity = _ref13.needIdentity,
          redirectUrl = _ref13.redirectUrl;

      var _ref14 = this.loginStatusObject || {},
          loginStatus = _ref14.loginStatus,
          naviToUrl = _ref14.naviToUrl;

      if (loginStatus) {
        var _ref15 = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('memberObj') || {},
            isReal = _ref15.isReal;

        var url = isReal && needIdentity ? redirectUrl : naviUrl;
        global.mpvue.navigateTo({
          url: url
        });
      } else {
        global.mpvue.navigateTo({
          url: naviToUrl
        });
      }
    },
    saveMemberLocationFinalLogin: function saveMemberLocationFinalLogin() {
      var _this5 = this;

      // 获取地理位置
      global.mpvue.getLocation({
        success: function success(res) {
          console.log(res);

          var _ref16 = res || {},
              lat = _ref16.latitude,
              lon = _ref16.longitude;

          _this5.$API.getByLocation({ lat: lat, lon: lon }).then(function (_ref17) {
            var _ref18 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref17, 2),
                res = _ref18[0],
                msg = _ref18[1];

            if (global.mpvuePlatform !== 'my') {
              _this5.updateMemberCityInfo(res);
            }
          });
        },
        fail: function fail(err) {
          console.log(err);
        }
      });
    },

    // 保存用户最后一次登录的城市
    updateMemberCityInfo: function updateMemberCityInfo(params) {
      var cityId = params.cityId,
          cityName = params.cityName,
          provinceId = params.provinceId,
          provinceName = params.provinceName;

      if (!Object(__WEBPACK_IMPORTED_MODULE_3__utils__["j" /* isNull */])(cityId)) {
        var _ref19 = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('memberObj') || {},
            memberId = _ref19.memberId;

        var data = {
          memberId: memberId,
          lastLoginCityId: cityId,
          lastLoginCityName: cityName,
          lastLoginProvinceId: provinceId,
          lastLoginProvinceName: provinceName
        };
        this.$API.updateMemberCityInfo(data).then(function (_ref20) {
          var _ref21 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref20, 2),
              res = _ref21[0],
              msg = _ref21[1];
        });
      }
    }
  }
});

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_receiveCoupon_vue__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_46802918_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_receiveCoupon_vue__ = __webpack_require__(372);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(370)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-46802918"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_receiveCoupon_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_46802918_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_receiveCoupon_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\popup\\receiveCoupon.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] receiveCoupon.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-46802918", Component.options)
  } else {
    hotAPI.reload("data-v-46802918", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 370:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(3);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      maskModal: true,
      isWithDrawBoolean: false
    };
  },

  props: {
    receiveMsg: {
      type: String,
      default: ''
    },
    receiveCode: {
      type: Number,
      default: 0
    }
  },
  methods: {
    batchReceiveCoupon: function batchReceiveCoupon() {
      var _this = this;

      var couponTemplateIdList = this.receiveCouponList.map(function (item) {
        return item.couponTemplateId;
      });

      var _mpvueGetStorageSync = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('memberObj'),
          memberId = _mpvueGetStorageSync.memberId;

      this.$API.batchReceiveCoupon({ couponTemplateIdList: couponTemplateIdList, memberId: memberId }).then(function (_ref) {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref, 2),
            res = _ref2[0],
            msg = _ref2[1];

        _this.maskModal = false;
        _this.$emit('cancelMask', { maskModal: false });
        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["t" /* showSuccessToast */])({ msg: msg });
      });
    },
    withdrawDeposit: function withdrawDeposit() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref3, memberId, _ref4, _ref4$channelId, channelId;

        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref3 = Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('memberObj') || {}, memberId = _ref3.memberId;
                _context.next = 3;
                return Object(__WEBPACK_IMPORTED_MODULE_3__utils__["l" /* mpvueGetStorageSync */])('registerReferrerInfo');

              case 3:
                _ref4 = _context.sent;
                _ref4$channelId = _ref4.channelId;
                channelId = _ref4$channelId === undefined ? 31 : _ref4$channelId;

                _this2.$API.sendRedPacket({ memberId: memberId, channelId: channelId }).then(function (_ref5) {
                  var _ref6 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref5, 2),
                      res = _ref6[0],
                      msg = _ref6[1];

                  _this2.isWithDrawBoolean = true;
                  Object(__WEBPACK_IMPORTED_MODULE_3__utils__["s" /* showModal */])({
                    title: '提现成功',
                    content: '请关注窝趣公众号领取'
                  });
                }).catch(function (_ref7) {
                  var _ref8 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_slicedToArray___default()(_ref7, 2),
                      msg = _ref8[0],
                      code = _ref8[1];

                  console.log(code);
                  // 公众号未授权,跳转至公众号授权
                  if (code === 4000) {
                    Object(__WEBPACK_IMPORTED_MODULE_3__utils__["t" /* showSuccessToast */])({ msg: msg, url: '/pages/auth/solicitude/main', skipType: 1 });
                  } else {
                    Object(__WEBPACK_IMPORTED_MODULE_3__utils__["s" /* showModal */])({
                      title: '温馨提示',
                      content: msg
                    });
                  }
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }))();
    },
    cancelMask: function cancelMask() {
      this.maskModal = false;
      this.$emit('cancelMask', { maskModal: false });
    }
  }
});

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.maskModal) ? _c('view', {
    staticClass: "mask",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.cancelMask
    }
  }, [_c('view', {
    staticClass: "modal-content",
    staticStyle: {
      "height": "450px"
    },
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
      }
    }
  }, [_c('div', {
    staticClass: "coupon-content"
  }, [_c('div', {
    staticClass: "main-body"
  }, [_c('div', {
    staticClass: "package_box"
  }, [_c('div', {
    staticClass: "msg_content"
  }, [(_vm.receiveCode === 1000) ? _c('div', [_c('p', {
    staticClass: "receiveMsg"
  }, [_vm._v("注册成功!")]), _vm._v(" "), _c('p', {
    staticClass: "receiveMsg"
  }, [_vm._v("关注公众号【窝趣WOWQU】提现红包")])], 1) : _c('div', [_c('p', {
    staticClass: "receiveMsg"
  }, [_vm._v(_vm._s(_vm.receiveMsg))])], 1), _vm._v(" "), (_vm.receiveCode === 1000 || _vm.receiveCode === 4000) ? _c('div', {
    staticClass: "withdraw_content"
  }, [_c('button', {
    staticClass: "normal withdraw_deposit",
    class: _vm.isWithDrawBoolean ? 'gray_deposit' : '',
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.withdrawDeposit
    }
  }, [_vm._v(_vm._s(_vm.isWithDrawBoolean ? '已提现' : '提现'))])], 1) : _vm._e()])])])]), _vm._v(" "), _c('view', {
    staticClass: "modal-btn-wrapper",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.cancelMask($event)
      }
    }
  }, [_c('image', {
    staticClass: "close",
    attrs: {
      "mode": "widthFix",
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/activity/close.png"
    }
  })])])]) : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-46802918", esExports)
  }
}

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    staticClass: "myselef-detail-content",
    style: (_vm.receiveCouponModal ? 'height:100%' : ''),
    attrs: {
      "scroll-view": "",
      "scroll-y": !_vm.receiveCouponModal
    }
  }, [_c('div', {
    staticClass: "myselef-detail-header",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.naTiurl($event)
      }
    }
  }, [_c('div', {
    staticClass: "left-box",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.naviEditPersonalData
    }
  }, [_c('image', {
    staticClass: "user",
    attrs: {
      "src": _vm.memberObj.headImg || 'https://wowquwxmgmqcloudcos.plateno.cc/miniapp/images/user.png'
    }
  }), _vm._v(" "), (_vm.loginStatusObject.loginStatus) ? _c('div', {
    staticClass: "userInfo"
  }, [_c('p', {
    staticClass: "name"
  }, [_vm._v(_vm._s(_vm.memberObj.memberNameshow))]), _vm._v(" "), _c('span', {
    staticClass: "state"
  }, [_vm._v(_vm._s(_vm.memberObj.phoneshow))])], 1) : _c('div', {
    staticClass: "userInfo"
  }, [_vm._v("请登录")])]), _vm._v(" "), (_vm.memberObj.memberLevel == 1) ? _c('div', {
    staticClass: "right-box right-v1",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.navigatorMember(1)
      }
    }
  }, [_c('image', {
    staticClass: "V1TAB",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/V1TAB.png"
    }
  })]) : _c('div', {
    staticClass: "right-box right-v2",
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.navigatorMember(2)
      }
    }
  }, [_c('image', {
    staticClass: "V1TAB",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/V2TAB.png"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "myselef-detail-tab"
  }, [_c('div', [_c('div', [_vm._v(_vm._s(_vm.numParams.balance))]), _vm._v(" "), _c('div', [_vm._v("钱包")])]), _vm._v(" "), _c('span', {
    staticClass: "border_span",
    staticStyle: {
      "left": "calc(100% / 3)"
    }
  }), _vm._v(" "), _c('div', {
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.naTiurl({
          naviUrl: '/pages/center/coupons/main'
        })
      }
    }
  }, [_c('div', [_vm._v(_vm._s(_vm.numParams.couponNum))]), _vm._v(" "), _c('div', [_vm._v("优惠券")])]), _vm._v(" "), _c('span', {
    staticClass: "border_span"
  }), _vm._v(" "), _c('div', [_c('div', [_vm._v(_vm._s(_vm.numParams.integral))]), _vm._v(" "), _c('div', [_vm._v("积分")])])]), _vm._v(" "), (_vm.memberObj.memberLevel === 1) ? _c('navigator', {
    staticClass: "myselef-dredge",
    attrs: {
      "url": "/pages/center/member/main?memberLevel=1"
    }
  }, [_c('span', {
    staticClass: "myself-dredge-container"
  }, [_c('image', {
    staticClass: "myself-dredge-bg",
    attrs: {
      "src": "https://wowquwxmgmqcloudcos.plateno.cc/quweichangzaojia.png"
    }
  })])]) : _c('div', {
    staticClass: "bg-border"
  }), _vm._v(" "), _c('div', {
    staticClass: "myselef-detail-body"
  }, [_c('div', {
    staticClass: "myselef-detail-tabbar"
  }, _vm._l((_vm.tabList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "tabber-box",
      attrs: {
        "url": item.naviUrl,
        "eventid": '5_' + index
      },
      on: {
        "click": function($event) {
          _vm.naTiurl(item)
        }
      }
    }, [(!item.isHide) ? _c('div', {
      staticClass: "cells"
    }, [_c('p', {
      staticClass: "img-content"
    }, [_c('image', {
      staticClass: "imgUrl",
      attrs: {
        "src": item.imgUrl
      }
    })]), _vm._v(" "), _c('p', {
      staticClass: "title"
    }, [_vm._v(_vm._s(item.title))])], 1) : _vm._e()])
  }))]), _vm._v(" "), (_vm.mpvuePlatform === 'wx') ? _c('div', {
    staticClass: "official-component"
  }, [_c('official-account', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.receiveCouponModal) ? _c('div', [_c('receive-coupon', {
    attrs: {
      "receiveMsg": _vm.receiveMsg,
      "receiveCode": _vm.receiveCode,
      "eventid": '6',
      "mpcomid": '1'
    },
    on: {
      "cancelMask": _vm.cancelMask
    }
  })], 1) : _vm._e()], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-4dd85af2", esExports)
  }
}

/***/ })

},[365]);