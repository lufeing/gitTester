require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_mtj_wx_sdk__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_updateManager_js__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_updateManager_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__utils_updateManager_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__api_api_js__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_css_style_css__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__static_css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__static_css_style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_css_wheel_scss__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__static_css_wheel_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__static_css_wheel_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_track__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_null_vue__ = __webpack_require__(90);

// 百度移动统计










__WEBPACK_IMPORTED_MODULE_1_vue___default.a.component('NullComponent', __WEBPACK_IMPORTED_MODULE_9__components_null_vue__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.$API = __WEBPACK_IMPORTED_MODULE_5__api_api_js__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_1_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */].mpType = 'app';
__WEBPACK_IMPORTED_MODULE_1_vue___default.a.prototype.Tracks = new __WEBPACK_IMPORTED_MODULE_8__utils_track__["a" /* Track */]();
var app = new __WEBPACK_IMPORTED_MODULE_1_vue___default.a(__WEBPACK_IMPORTED_MODULE_2__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_finite__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_finite___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_finite__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_integer__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_integer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_integer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys__);






var mtjwxsdk = function (e) {
  "use strict";
  var o,
      t,
      n,
      g = { logServerUrl: "https://hmma.baidu.com/mini.gif", circleServerUrl: "https://hmma.baidu.com/mini.gif?circle=1", maxRequestRetryCount: 5, requestRetryFirstDelay: 1e3, requestRetryMultiple: 4, maxRequestDataLength: 204800, maxUserPropertyCount: 100, maxUserPropertyKeyValueLength: 256, maxUint8: 255, maxUint32: 4294967295, enabledEvents: { app: ["onShow", "onHide", "onError"], page: ["onShow", "onHide"], share: ["onShareAppMessage"], behavior: ["tap"] }, storageKeys: { uuid: "mtj_uuid", userInfo: "mtj_user", userProperty: "mtj_user_property", shareCount: "mtj_scnt" } },
      p = { type: 1 },
      h = { aso: {} },
      r = {},
      a = function a() {
    return "undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint32Array(1))[0] : Math.floor(Math.random() * g.maxUint32);
  },
      i = function i(e, t) {
    return "[object " + t + "]" === {}.toString.call(e);
  },
      c = function n(r) {
    return (i(r, "Object") || i(r, "Array")) && __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(r).forEach(function (e) {
      var t = r[e];i(t, "Object") || i(t, "Array") ? r[e] = n(t) : r[e] = "" + t;
    }), r;
  },
      s = function s(e) {
    return i(e, "String") && /^\d{11}$/.test(e);
  },
      u = function u(e) {
    return i(e, "String") && 28 === e.length;
  },
      f = 0,
      l = function l(r) {
    return new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a(function (t, n) {
      if (r.data = r.data || {}, r.data.v = "1.9.1", r.data.rqc = ++f, e = r.data, !(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(e).length <= g.maxRequestDataLength)) return f--, n(new Error("invalid data"));var e;r.success = function (e) {
        return t(e);
      }, r.fail = function (e) {
        return n(e);
      }, function t(n) {
        var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : g.requestRetryFirstDelay;return o.request({ url: n.url, data: n.data, header: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ "content-type": "application/json" }, n.header), method: n.method || "POST", dataType: n.dataType || "json", success: function success(e) {
            delete n.data.rtc, n.success && n.success(e);
          }, fail: function fail(e) {
            n.data.rtc = (n.data.rtc || 0) + 1, n.data.rtc <= g.maxRequestRetryCount ? setTimeout(function () {
              return t(n, r * g.requestRetryMultiple);
            }, r) : (delete n.data.rtc, n.fail && n.fail(e));
          } });
      }(r);
    });
  },
      d = function d(e, t) {
    var n = i(t, "Object") ? __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(t) : "" + t;l({ url: g.logServerUrl, dataType: "string", data: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, p, { et: "error", en: e, ep: { ex: n }, rid: a() }) });
  },
      y = function y(e) {
    e.rid = a(), e.aso = e.aso || {};var t = { url: g.logServerUrl, dataType: "string", data: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, p, e) };l(t), (r.circleToken || r.circleByThreeFingers) && ("page" === e.et && "show" === e.en || "behavior" === e.et && "tap" === e.en) && (t.url = g.circleServerUrl, t.data.token = r.circleToken, l(t).catch(function (e) {
      return console.error(e);
    }));
  },
      m = function m(e) {
    try {
      return o.getStorageSync(e);
    } catch (e) {
      d("getStorageSync", e);
    }
  },
      v = function v(e, t) {
    try {
      o.setStorageSync(e, t);
    } catch (e) {
      d("setStorageSync", e);
    }
  },
      b = function b() {
    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a.resolve().then(function () {
      var e = m(g.storageKeys.uuid);return i(e, "String") && 32 === e.length || (e = ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function (e) {
        return (e ^ ("undefined" != typeof crypto && crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] : Math.floor(Math.random() * g.maxUint8)) & 15 >> e / 4).toString(16);
      }), v(g.storageKeys.uuid, e)), e;
    });
  },
      j = function j() {
    return t || (p.sid = a(), p.rqc = 0, t = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a.all([b(), new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a(function (t) {
      o.getSystemInfo({ success: function success(e) {
          delete e.errMsg, t(e);
        }, fail: function fail() {
          t({});
        } });
    }), new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a(function (t) {
      o.getNetworkType({ success: function success(e) {
          delete e.errMsg, t(e);
        }, fail: function fail() {
          t({});
        } });
    }), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a.resolve().then(function () {
      var e = m(g.storageKeys.userInfo),
          n = i(e, "Object") ? e : {};return new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a(function (t) {
        o.getSetting({ success: function success(e) {
            e.authSetting && e.authSetting["scope.userInfo"] ? o.getUserInfo({ success: function success(e) {
                delete e.userInfo.errMsg, t(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(n, e.userInfo));
              }, fail: function fail() {
                t(n);
              } }) : t(n);
          }, fail: function fail() {
            t(n);
          } });
      });
    }), new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a(function (t) {
      if (!g.getLocation) return t({});o.getLocation({ type: "wgs84", success: function success(e) {
          delete e.errMsg, t(e);
        }, fail: function fail() {
          t({});
        } });
    }), __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a.resolve().then(function () {
      var e = m(g.storageKeys.userProperty);return i(e, "Object") ? e : {};
    })]).then(function (e) {
      p.uuid = e[0], h.system = c(e[1]), h.network = c(e[2]), 0 < __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(e[3]).length && (h.user = c(e[3])), 0 < __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(e[4]).length && (h.location = c(e[4])), 0 < __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(e[5]).length && (h.userProperty = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(e[5])), h.system.platform;
    }));
  },
      S = function S() {
    return n || (n = new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a(function (t) {
      o.getClipboardData({ success: function success(e) {
          t(e.data);
        }, fail: function fail() {
          t();
        } });
    }).then(function (e) {
      if (!g.disableCircling && 36 === e.length) {
        var t,
            n = e.match(/^mtj_(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})$/);return n ? (r.circleToken = "".concat(n[1], "-").concat(n[2], "-").concat(n[3], "-").concat(n[4], "-").concat(n[5]), t = "", new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a(function (e) {
          o.setClipboardData({ data: t, complete: function complete() {
              e();
            } });
        })) : void 0;
      }
    }));
  },
      O = { onLaunch: function onLaunch() {
      y({ et: "app", en: "launch" });
    }, onShow: function onShow() {
      var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};return h.aso.scene = "" + (t.scene || ""), t.referrerInfo && t.referrerInfo.appId ? h.aso.referrerInfo = t.referrerInfo : delete h.aso.referrerInfo, h.aso.path = t.path || "", h.aso.query = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(t.query || {}).map(function (e) {
        return { key: e, value: t.query[e] };
      }), j().then(function () {
        return e = t.shareTicket, new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a(function (t) {
          if (!e) return t();o.getShareInfo({ shareTicket: e, success: function success(e) {
              delete e.errMsg, t(e);
            }, fail: function fail() {
              t({});
            } });
        });var e;
      }).then(function (e) {
        e ? h.aso.shareInfo = e : delete h.aso.shareInfo, y(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ et: "app", en: "show" }, h));
      }).catch(function (e) {
        d("app.onShow", e);
      });
    }, onHide: function onHide() {
      n = null, y({ et: "app", en: "hide" });
    }, onError: function onError(e) {
      var t = i(e, "Object") ? __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(c(e)) : "" + e;y({ et: "app", en: "error", ep: { ex: t } });
    } },
      P = -1,
      k = -1,
      w = 0,
      I = { onShow: function onShow() {
      var e = getCurrentPages(),
          t = e[e.length - 1];return p.path = t.route, p.query = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(t.options).map(function (e) {
        return { key: e, value: t.options[e] };
      }).filter(function (e) {
        return "mtj_qrid" !== e.key && "mtj_lkid" !== e.key && "mtj_shuuid" !== e.key;
      }), S().then(j).then(function () {
        y(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ et: "page", en: "show" }, h));
      }).catch(function (e) {
        d("page.onShow", e);
      });
    }, onHide: function onHide() {
      var e;y({ et: "page", en: "hide", ep: e });
    }, onShareAppMessage: function onShareAppMessage(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
          n = m(g.storageKeys.shareCount);n = (__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_integer___default()(n) ? n : 0) + 1, v(g.storageKeys.shareCount, n);var r = { cnt: n, from: e.from, path: t.path };if (!r.path) {
        var o = p.query.map(function (e) {
          return e.key + "=" + e.value;
        }).join("&");r.path = p.path + (o ? "?" + o : "");
      }t.title && (r.title = "" + t.title), e.target && (r.target = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(e.target)), y(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ et: "share", en: "action", ep: r }, h));var a = h.aso.query.filter(function (e) {
        return "mtj_shuuid" === e.key;
      }),
          i = a[0] ? a[0].value.split("_") : [];p.uuid !== i[i.length - 1] && i.push(p.uuid);var c,
          s,
          u,
          f,
          l = i.slice(Math.max(0, i.length - 3)).join("_");return t.path = (c = r.path, s = "mtj_shuuid", u = l, f = 0 < (c = c.replace(new RegExp(s + "=[^&]*", "g"), "").replace(/(\?|&)&/g, "$1").replace(/(\?|&)$/g, "")).indexOf("?") ? "&" : "?", c + f + s + "=" + encodeURIComponent(u)), t;
    }, onAction: function onAction(e, t) {
      if (e && e.type && e.currentTarget) if ("tap" !== e.type) {
        if ("touchmove" === e.type && e.touches instanceof Array) {
          if (-1 !== P) return;if (3 === e.touches.length) {
            if (w += 1, clearTimeout(k), 3 === w) return r.circleByThreeFingers = !0, r.circleToken = void 0, void y(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ et: "page", en: "show" }, h));P = setTimeout(function () {
              P = -1, k = setTimeout(function () {
                w = 0;
              }, 500);
            }, 1e3);
          }
        }
      } else {
        var n = [{ key: "xpath", value: "#" + (e.currentTarget.id || t) }];y(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ et: "behavior", en: "tap", ep: { data: n } }, h));
      }
    } },
      x = { trackEvent: function trackEvent(e) {
      var t,
          r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};if (!i(t = e, "String") || !/^[a-z][a-z0-9_]{0,31}$/.test(t)) return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a.reject(new Error("事件名称不合法"));var n = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(r).filter(function (e) {
        return i(n = e, "String") && /^[a-z0-9_]{1,32}$/.test(n) && (t = r[e], i(t, "String") || i(t, "Number"));var t, n;
      }).map(function (e) {
        return { key: "" + e, value: "" + r[e], type: i(r[e], "String") ? "string" : "number" };
      });return j().then(function () {
        y(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ et: "event", en: "" + e, ep: { data: n } }, h));
      }).catch(function (e) {
        d("trackEvent", e);
      });
    }, setUserInfo: function setUserInfo() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
          n = e.tel,
          r = e.openId;return j().then(function () {
        var e = m(g.storageKeys.userInfo),
            t = i(e, "Object") ? e : {};s(n) && (t.tel = h.user.tel = n.substr(n.length - 11)), u(r) && (t.openId = h.user.openId = r), (t.tel || t.openId) && v(g.storageKeys.userInfo, t), i(n, "Undefined") || s(n) || console.error("手机号 ".concat(n, " 不合法")), i(r, "Undefined") || u(r) || console.error("openid ".concat(r, " 不合法"));
      }).catch(function (e) {
        d("setUserInfo", e);
      });
    }, setUserId: function setUserId(o) {
      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a.resolve().then(function () {
        if (!(i(o, "String") || i(o, "Number") && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_finite___default()(o))) return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a.reject(new Error("userId只能是字符串或数字"));var e = "" + o,
            t = m(g.storageKeys.userProperty),
            n = i(t, "Object") ? t : {};if (!n.uid_ || n.uid_[0] !== e) {
          n.uid_ = [e, "1"], v(g.storageKeys.userProperty, n), h.userProperty = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(n);var r = [{ key: "uid", value: e }];return j().then(function () {
            y(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({ et: "api", en: "setUserId", ep: { data: r } }, h));
          }).catch(function (e) {
            d("setUserId", e);
          });
        }
      });
    }, setUserProperty: function setUserProperty(o) {
      return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a.resolve().then(function () {
        var e = m(g.storageKeys.userProperty),
            n = i(e, "Object") ? e : {};if (i(o, "Null")) __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(n).forEach(function (e) {
          "_" !== e.charAt(0) && "_" !== e.charAt(e.length - 1) && delete n[e];
        });else if (!i(o, "Object")) return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_promise___default.a.reject(new Error("userProperty必须是对象"));var r = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(n).filter(function (e) {
          return "_" !== e.charAt(0) && "_" !== e.charAt(e.length - 1);
        }).length;__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(o || {}).forEach(function (e) {
          var t = o[e];"" !== e && "_" !== e.charAt(0) && "_" !== e.charAt(e.length - 1) && (i(t, "Null") ? n[e] && (delete n[e], r--) : !(i(t, "String") || i(t, "Number") && __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_number_is_finite___default()(t)) || e.length > g.maxUserPropertyKeyValueLength || ("" + t).length > g.maxUserPropertyKeyValueLength || !n[e] && r >= g.maxUserPropertyCount || (n[e] || r++, n[e] = [t, "1"]));
        }), v(g.storageKeys.userProperty, n), h.userProperty = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_json_stringify___default()(n);
      });
    } },
      U = App,
      _ = Page,
      E = function E(t, e, n) {
    var r = e[t];e[t] = function (e) {
      if (n.call(this, e, t), r) return r.apply(this, arguments);
    };
  },
      T = function T(t) {
    g.enabledEvents.app.forEach(function (e) {
      E(e, t, O[e]);
    }), t.mtj = x, U(t);
  },
      q = function q(a) {
    g.enabledEvents.page.forEach(function (e) {
      E(e, a, I[e]);
    }), g.enabledEvents.share.forEach(function (e) {
      var t, n, r, o;r = I[t = e], o = (n = a)[t], n[t] = function (e) {
        var t = o && o.apply(this, arguments);return r.call(this, e, t);
      };
    }), __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_keys___default()(a).forEach(function (e) {
      "function" == typeof a[e] && -1 === g.enabledEvents.page.indexOf(e) && -1 === g.enabledEvents.share.indexOf(e) && E(e, a, I.onAction);
    }), _(a);
  },
      K = function K() {
    var e, t;e = wx, o = e;try {
      t = __webpack_require__(138);
    } catch (e) {
      return void console.error("请把mtj-wx-sdk.config.js文件拷贝到utils目录中");
    }t && t.appKey ? (p.key = t.appKey, g.getLocation = t.getLocation || !1, g.disableCircling = t.disableCircling || !1, t.hasPlugin ? module.exports = { App: T, Page: q } : (App = T, Page = q)) : console.error("请设置mtj-wx-sdk.config.js文件中的appKey字段");
  };return K(), e.init = K, e;
}({});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(108)(module)))

/***/ }),

/***/ 138:
/***/ (function(module, exports) {

/**
 * @file 百度移动统计配置文件
 */

module.exports = {
  /**
   * 从百度移动统计获取的AppKey
   * @type {string}
   */
  appKey: '105f27d0fe',

  /**
   * 是否使用了插件
   * @type {boolean}
   */
  hasPlugin: false,

  /**
   * 是否获取当前的地理位置和速度信息
   * @type {boolean}
   */
  getLocation: false
};

/***/ }),

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(141);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(140)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2d76ca6a", Component.options)
  } else {
    hotAPI.reload("data-v-2d76ca6a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 140:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils___ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
  },
  onLaunch: function onLaunch(options) {
    console.log(options);
    Object(__WEBPACK_IMPORTED_MODULE_0__utils___["p" /* mpvueSetStorageSync */])('firstOpen', true);
    var Verify = __webpack_require__(142);
    Verify.init({
      'env': 'release' // 接口环境，正式  环境接口值为 release
    });
  }
  // 微信小程序中添加慧眼人脸识别: "static/verify_mpsdk/index/index"

});

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

const regeneratorRuntime=__webpack_require__(84),util=__webpack_require__(143),defaultConfig=__webpack_require__(144).defaultConfig,extend=__webpack_require__(145).extend;var init=function(e){wx.onNetworkStatusChange(function(e){"none"!==e.networkType&&"2g"!==e.networkType||wx.showToast({title:"网络异常",icon:"none"})}),wx.onMemoryWarning(function(){wx.showToast({title:"内存告警，有闪退风险",icon:"none"})}),wx.verifyBaseUrl="https://faceid.qq.com",wx.startVerify=function(e){if(console.log("startVerify start, send data",e.data),e.data&&e.fail&&e.success){if(e.data.endPath){if(!util.validate(e.data.endPath,"end_path")){o={ErrorCode:-100,ErrorMsg:"调用SDK失败，endPath格式错误！"};return void wx.showModal({title:"提示",content:o.ErrorMsg,showCancel:!1})}e.fail=function(o){if(-999!==o.error_code){var i="";i=e.data.endPath.indexOf("?")>=0?e.data.endPath+"&data="+encodeURIComponent(JSON.stringify(o)):e.data.endPath+"?data="+encodeURIComponent(JSON.stringify(o)),console.log(i),wx.navigateTo({url:i,fail:e=>{console.log(e),wx.showModal({title:"提示",content:e.errMsg,showCancel:!1})}})}else wx.navigateBack()},e.success=function(o){var i="";i=e.data.endPath.indexOf("?")>=0?e.data.endPath+"&data="+JSON.stringify(o):e.data.endPath+"?data="+JSON.stringify(o),console.log(i),wx.redirectTo({url:i,fail:e=>{console.log(e),wx.showModal({title:"提示",content:e.errMsg,showCancel:!1})}})}}wx.verifySuccessFunc=e.success,wx.verifyFailureFunc=e.fail,util.validate(e.data.token,"token")?(console.log("data is ok",e.data),wx.showLoading({title:"加载中...",mask:!0}),getCmsConfig(e.data.token,function(o){if(console.log(o),wx.hideLoading(),0===o.ErrorCode){extend(!0,defaultConfig,o.Data.config);var i=defaultConfig;console.log("final cmsConfig"),console.log(i),wx.verifySysInfo=wx.getSystemInfoSync(),console.log(wx.verifySysInfo);var t="ios"===wx.verifySysInfo.platform?i.JustForMp.iOSVerLimit:i.JustForMp.androidVerLimit;if("devtools"!==wx.verifySysInfo.platform&&t&&util.compareVersion(t,wx.verifySysInfo.version)>0)return wx.hideLoading(),void wx.showModal({title:"提示",content:`当前微信版本低于${t}，无法使用该功能，请升级到最新微信版本后重试。`,showCancel:!1});i=reviseCmsConfig("",i),wx.verify_CMSConfig=i,wx.verify_TOKEN=e.data.token,wx.verify_BizData=e.data;if(i.Common.IsWxNative&&!i.Common.Flow.includes("Ocr")&&i.Common.IsHideIndexWhenNative){console.log("直接调用微信原生接口");let o=i.Common.IsWxNativeMod,t=i.Common.WxCheckAliveType;util.startNativeVerify(o,t,wx.verifyBaseUrl,e.data.token,wx.verifyFailureFunc,o=>{let i={BizToken:e.data.token,ErrorCode:o.ErrorCode,ErrorMsg:o.ErrorMsg};0===o.ErrorCode?wx.verifySuccessFunc(i):wx.verifyFailureFunc(i)})}else console.log("进入验证页面"),wx.navigateTo({url:"/static/verify_mpsdk/index/index?isNotice="+!1})}else wx.showModal({title:"提示",content:o.ErrorMsg,showCancel:!1})})):wx.showModal({title:"提示",content:"调用SDK失败,token格式错误！",showCancel:!1})}else{var o={ErrorCode:-100,ErrorMsg:"调用SDK失败，wx.startVerify传入参数缺少！"};wx.showModal({title:"提示",content:o.ErrorMsg,showCancel:!1})}}},getCmsConfig=async function(e,o){try{var i={method:"POST",url:`${wx.verifyBaseUrl}/api/auth/getConfig?BizToken=${e}`},t=await util.requestPromise(i);200===t.statusCode&&t.data.Data&&0===t.data.ErrorCode?o({ErrorCode:0,Data:t.data.Data}):t.data.ErrorCode?o({ErrorCode:t.data.ErrorCode,ErrorMsg:`获取配置失败,${t.data.ErrorMsg}`}):o({ErrorCode:-104,ErrorMsg:"调用失败，获取配置异常！"})}catch(e){console.log("genConfig catch error",e),e.errMsg.indexOf("request:fail Unable to resolve host")>=0||e.errMsg.indexOf("request:fail 似乎已断开与互联网的连接")>=0?o({ErrorCode:101,ErrorMsg:"网络异常，请稍后重试"}):"request:fail url not in domain list"===e.errMsg?o({ErrorCode:-104,ErrorMsg:"接口还未添加到服务器域名，请点击右上角三个点，打开调试模式再试"}):o({ErrorCode:-104,ErrorMsg:"调用失败，获取配置接口异常！"})}},reviseCmsConfig=function(e,o){let i=o.Common.Flow,t=!1,n=!1,r=!1,a=!1,s=0,l=i.indexOf("LiveFour1V1")>=0||i.indexOf("LiveAction1V1")>=0||i.indexOf("LiveSilence1V1")>=0;-1===i.indexOf("Sms")&&(t=!0),-1===i.indexOf("Ocr")&&(n=!0),l&&(s=i.indexOf("LiveFour1V1")>=0?0:i.indexOf("LiveAction1V1")>=0?1:2),l||-1!==i.indexOf("Sms")||(r=!0),l||-1!==i.indexOf("Ocr")||(a=!0);let d={Common:o.Common,protocol:{title:o.Index.ProtocolTitle,content:o.Index.TencentProtocol,clientContent:o.Index.ClientProtocol},page:{index:{clientName:o.Index.ProjectName,businessName:o.Index.BusinessName,certificationCenter:o.Index.CooperationName,nextBtnName:o.Index.NextBtn,isHideTipsLogo:!o.Common.IsShowLogo,isHideTipsAbout:o.Common.IsHideAbout,protocolTitle:o.Index.ProtocolEntrance},ocr:{backend:o.Ocr.Backend,isAddress:o.Ocr.IsAddress,isManualInput:o.Ocr.IsManualInput,isHideTakePhoto:o.Ocr.IsHideManualInputTakePhotoBtn,isCheckIDInfo:o.Ocr.IsCheckIdInfo,allowModifyType:o.Ocr.AllowModifyType},livingbody:{silentRecordTime:o.LiveFour1V1.MaxDuration},success:{successTitle:o.Success.SubTipsName,successTips:o.Success.SuccessTips,isAutoSkip:o.Success.AutoSkip},sms:{},failpage:{isShowExitBtn:o.Fail.IsShowQuitBtn,exitBtnTtile:o.Fail.ExitBtnText}},runEnv:"release",navTitle:{smsTitle:o.Common.NavTitle.SmsTitle,ocrTitle:o.Common.NavTitle.OcrTitle,livingbodyTitle:o.Common.NavTitle.LivingbodyTitle,resultTitle:o.Common.NavTitle.ResultTitle},justForJumpVer:{title:o.Common.Title},about:{title:"关于云智慧眼",content:"云智慧眼由腾讯AI Lab、腾讯优图、腾讯数据平台部提供技术支持"},isGetUserLocation:o.Index.IsGetLocation,isHideSmsPage:t,isHideOcrPage:n,livingbodyType:s,isJustOcr:r,isJustSms:a,failInfo:o.Fail.CustomFailInfo};var c={isHideSmsPage:d.isHideSmsPage,isHideOcrPage:d.isHideOcrPage,isJustSms:d.isJustSms,isJustOcr:d.isJustOcr,navTitle:d.navTitle};if(d.skipConfig=c,0!==d.livingbodyType&&1!==d.livingbodyType){var u=4,f=d.page.livingbody.silentRecordTime;f&&"number"==typeof f&&f>4&&(u=f),d.page.livingbody.silentRecordTime=u}let g=d.page.ocr.allowModifyType.split("");return d.page.ocr.isIdnameAllowEdit="0"===g[0],d.page.ocr.isIdnumberAllowEdit="0"===g[1],d.page.ocr.isIdaddressAllowEdit="0"===g[2],console.log(d.page.ocr),d};module.exports={init:init};

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

const regeneratorRuntime=__webpack_require__(84);function compareVersion(e,r){e=e.split("."),r=r.split(".");for(var o=Math.max(e.length,r.length);e.length<o;)e.push("0");for(;r.length<o;)r.push("0");for(var s=0;s<o;s++){var t=parseInt(e[s]),a=parseInt(r[s]);if(t>a)return 1;if(t<a)return-1}return 0}let requestPromise=function(e){let{url:r,method:o="POST",data:s,header:t={"Content-Type":"application/json"}}=e;return console.log("requestPromise start:",r,s),new Promise((e,a)=>{wx.request({url:r,method:o,data:s,header:t,success(r){console.log("requestPromise success:",r),e(r)},fail(e){console.log("requestPromise error:",e),a(e)}})})},request=function(e,r){let{url:o,method:s="POST",data:t,header:a={"Content-Type":"application/json"}}=e;console.log("requestPromise start:",o,t);try{wx.request({url:o,method:s,data:t,header:a,success(e){console.log("request success:",e),200===e.statusCode&&e.data?0===e.data.ErrorCode?r({ErrorCode:0,Data:e.data.Data}):r({ErrorCode:e.data.ErrorCode,ErrorMsg:e.data.ErrorMsg,Data:e.data}):r({ErrorCode:-107,ErrorMsg:"request请求异常，请稍后重试"})},fail(e){console.log("request error:",e),e.errMsg.indexOf("request:fail Unable to resolve host")>=0||e.errMsg.indexOf("request:fail 似乎已断开与互联网的连接")>=0?r({ErrorCode:101,ErrorMsg:"网络异常，请稍后重试"}):r({ErrorCode:-107,ErrorMsg:"request请求异常，请稍后重试"})}})}catch(e){console.log("request error:",e),r({ErrorCode:-107,ErrorMsg:"request请求异常"})}},uploadFile=function(e,r){console.log(e),wx.uploadFile({url:e.url,filePath:e.filePath,name:"file",formData:e.data,success:e=>{if(console.log("uploadFile| ",e),200===e.statusCode){console.log(e);let o=JSON.parse(e.data);console.log("resTemp"),console.log(o),0===o.ErrorCode?(console.log(this.data),r({ErrorCode:0,Data:o})):r({ErrorCode:o.ErrorCode,ErrorMsg:"上传视频失败，"+o.ErrorMsg})}else r({ErrorCode:101,ErrorMsg:"上传视频失败 "+e.statusCode})},fail:e=>{console.log("upload img fail",e),r({ErrorCode:101,ErrorMsg:"上传视频失败, "+e.errMsg})}}).onProgressUpdate(e=>{this.setData({"livingbody.uploadProcess":e.progress-10<0?0:e.progress-10}),console.log("progress",e.progress),console.log("already upload data",e.totalBytesSent),console.log("all upload data",e.totalBytesExpectedToSend)})},validate=function(e,r){switch(r){case"signature":return/^\S{74}={2}$/.test(e);case"appid":return"string"==typeof e&&/^\d{4}$/.test(e);case"uid":return e;case"sms_phone":return/^(13[0-9]|14[5-9]|15[012356789]|16[6]|17[0135678]|18[0-9]|19[8-9])\d{8}$/.test(e);case"sms_verifyCode":return/^\d{4}$/.test(e);case"idcard":return IDNumberValid(e);case"idname":return/^[\u4e00-\u9fa5]{1,15}[·•]?[\u4e00-\u9fa5]{1,15}$/.test(e);case"idaddress":return!!e;case"end_path":return/^\//.test(e);case"token":return/^[a-zA-Z0-9-]{36}$/.test(e)}},showModal=function(e,r){wx.showModal({title:e,content:r.replace(/(^\s*)|(\s*$)/g,""),showCancel:!1,confirmText:"我知道了",confirmColor:"#2d72f1",success:function(e){e.confirm||e.cancel}})},IDNumberValid=function(e){if(!e||!/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(e))return!1;if(!{11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"}[e.substr(0,2)])return!1;if(18===e.length){e=e.split("");const r=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],o=[1,0,"X",9,8,7,6,5,4,3,2];let s=0,t=0,a=0;for(let o=0;o<17;o++)s+=(t=e[o])*(a=r[o]);let l=o[s%11];if("x"===e[17]||"X"===e[17])return l===e[17].toUpperCase();if(l!==parseInt(e[17]))return!1}return!0},startNativeVerify=(e,r,o,s,t,a)=>{getUserIdKey(o,s,t,t=>{console.log("获取userIdKey成功:",t);let l=wx.startFacialRecognitionVerify;1===e&&(l=wx.startFacialRecognitionVerifyAndUploadVideo),l({userIdKey:t,checkAliveType:r,success(e){console.log(e);let r=e.verifyResult;getWxResult(o,s,r,e=>{console.log("拿到结果了，准备传给前端"),console.log(e),a(e)})},fail(e){if(console.log(e),90100===e.errCode);else if(e.verifyResult){let r=e.verifyResult;getWxResult(o,s,r,e=>{console.log("拿到结果了，准备传给前端"),console.log(e),a(e)})}else console.log("验证失败",e.errMsg),wx.showModal({title:"提示",content:`验证失败, ${e.errMsg}`,showCancel:!1})}})})},getUserIdKey=async(e,r,o,s)=>{try{let t={url:`${e}/api/liveness/getWxUserIdKey?BizToken=${r}`};wx.showLoading({title:"加载中...",mask:!0});let a=await getUserIdKeyRequest(t);wx.hideLoading(),s(a)}catch(t){console.log(t),wx.hideLoading(),15===t.ErrorCode||14===t.ErrorCode?(15===t.ErrorCode?t.ErrorMsg="当前BizToken已过期，请重试":14===t.ErrorCode&&(t.ErrorMsg="当前BizToken已验证完成"),o({BizToken:r,ErrorCode:t.ErrorCode,ErrorMsg:t.ErrorMsg})):-1===t.ErrorCode?wx.showModal({title:"提示",content:t.ErrorMsg,showCancel:!1}):wx.showModal({title:"提示",content:t.ErrorMsg,confirmText:"重试",confirmColor:"#2d72f1",success:t=>{t.confirm&&getUserIdKey(e,r,o,s)}})}},getUserIdKeyRequest=e=>(console.log(`请求 ${e.url}`),new Promise((r,o)=>{wx.request({url:e.url,method:"POST",data:{},success(e){console.log("request success:",e.data),0===e.data.ErrorCode?r(e.data.Data.UserIdKey):o(e.data)},fail(e){console.log("requestPromise error:",e),e.errMsg.indexOf("request:fail Unable to resolve host")>=0||e.errMsg.indexOf("request:fail 似乎已断开与互联网的连接")>=0?o({ErrorCode:101,ErrorMsg:"网络异常，请稍后重试"}):"request:fail url not in domain list"===e.errMsg?o({ErrorCode:-1,ErrorMsg:"接口还未添加到服务器域名，请点击右上角三个点，打开调试模式再试"}):o({ErrorCode:101,ErrorMsg:e.errMsg})}})})),getWxResult=async(e,r,o,s)=>{try{wx.showLoading({title:"加载中...",mask:!0});let t=await getWxResultRequest(e,r,o);wx.hideLoading(),s(t)}catch(t){console.log(t),wx.hideLoading(),-1===t.ErrorCode?wx.showModal({title:"提示",content:t.ErrorMsg,showCancel:!1}):wx.showModal({title:"提示",content:t,confirmText:"重试",confirmColor:"#2d72f1",showCancel:!1,success:t=>{t.confirm&&getWxResult(e,r,o,s)}})}},getWxResultRequest=(e,r,o)=>(console.log(`请求 ${e}/api/liveness/getWxResult?BizToken=${r}`),new Promise((s,t)=>{wx.request({url:`${e}/api/liveness/getWxResult?BizToken=${r}`,method:"POST",data:{VerifyResult:o},success(e){console.log("request success:",e.data),e.data.ErrorCode,s(e.data)},fail(e){console.log("requestPromise error:",e),e.errMsg.indexOf("request:fail Unable to resolve host")>=0||e.errMsg.indexOf("request:fail 似乎已断开与互联网的连接")>=0?t({ErrorCode:101,ErrorMsg:"网络异常，请稍后重试"}):"request:fail url not in domain list"===e.errMsg?t({ErrorCode:-1,ErrorMsg:"接口还未添加到服务器域名，请点击右上角三个点，打开调试模式再试"}):t({ErrorCode:101,ErrorMsg:e.errMsg})}})}));module.exports={requestPromise:requestPromise,validate:validate,compareVersion:compareVersion,showModal:showModal,request:request,uploadFile:uploadFile,startNativeVerify:startNativeVerify};

/***/ }),

/***/ 144:
/***/ (function(module, exports) {

let defaultConfig={Common:{Title:"云智慧眼",IsShowLogo:!0,Flow:["Index","LiveAction1V1"],RedirectUrl:"/clearCookie",NavTitle:{SmsTitle:"短信验证",OcrTitle:"上传身份证",LivingbodyTitle:"录制视频",ResultTitle:"验证结果"},IsWxNative:!1,IsHideIndexWhenNative:!1,WxCheckAliveType:2,IsWxNativeMod:0},JustForMp:{iOSVerLimit:"6.6.7",androidVerLimit:"6.7.2"},Index:{ProtocolTitle:"实名核身用户须知",TencentProtocol:'<p>本服务由腾讯实名核身技术方案"腾讯慧眼"提供技术支持。您在接受服务过程中，需要调用您的手机摄像头，并且根据业务场景的不同，需要读取您的身份证个人信息，包括姓名、性别、民族、出生日期、常住户口所在地住址、公民身份号码、本人相片、证件的有效期和签发机关等信息，或者截取您的脸部图像和认证视频，从而实现身份比对。</p><p>如您使用不成功，请确保您已经按照要求正确使用本服务，或者向为您办理业务的机构咨询其他办理渠道。</p>',ClientProtocol:"客户侧协议内容",ProjectName:"云智慧眼",BusinessName:"实名实人认证",CooperationName:"合作方文案",IsHideAbout:!1,NextBtn:"快速验证",ProtocolEntrance:"全部协议",IsGetLocation:!0},Sms:{},Ocr:{IsManualInput:!0,Backend:!1,AllowModifyType:"100",IsAddress:!1,IsCheckIdInfo:!1,SourceType:2,IsHideManualInputTakePhotoBtn:!1},LiveFour1V1:{MaxDuration:4,DetailType:!1,ForceWatchVideoTime:5,ImportantTips:""},LiveAction1V1:{},LiveSilence1V1:{},Fail:{IsShowQuitBtn:!1,ExitBtnText:"退出实名认证",CustomFailInfo:{}},Success:{SubTipsName:"验证成功",SuccessTips:"请点击下一步继续您的操作",AutoSkip:!1}},sysFailInfo={610:{msg:"脸部未完整露出",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-noface.png",tips1:"建议您调整脸部位置，或录制角度",tips2:""},657:{msg:"脸离屏幕太左",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-tooleft.png",tips1:"建议您调整脸部位置，或录制角度",tips2:""},658:{msg:"脸离屏幕太右",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-tooright.png",tips1:"建议您调整脸部位置，或录制角度",tips2:""},663:{msg:"未能检测到完整人脸",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-tooright.png",tips1:"建议您调整脸部位置，或录制角度",tips2:""},659:{msg:"光线太暗",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-toodark.png",tips1:"建议您调整录制环境，保证光线适中",tips2:""},660:{msg:"光线太强",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-toobright.png",tips1:"建议您调整录制环境，保证光线适中",tips2:""},608:{msg:"视频声音太小",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-nosound.png",tips1:"请用清晰洪亮的普通话，匀速缓慢朗读四个数字",tips2:""},611:{msg:"声音识别失败",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-nosound.png",tips1:"请用清晰洪亮的普通话，匀速缓慢朗读四个数字",tips2:""},612:{msg:"未检测到声音",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-nosound.png",tips1:"请用清晰洪亮的普通话，匀速缓慢朗读四个数字",tips2:""},609:{msg:"嘴唇动作幅度过小",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-openmouse.png",tips1:"朗读时尽量使嘴唇动作明显变化，",tips2:"动作放慢并确保画面清晰"},652:{msg:"未检测到第一个动作",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-lowpixel.png",tips1:"建议您动作频率放慢一些",tips2:""},653:{msg:"未检测到闭眼动作",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-openeye.png",tips1:"建议您闭眼频率放慢一些",tips2:""},654:{msg:"未检测到张嘴动作",img:"http://beta.gtimg.com/GodIdent/huiyan/img/ico-fail-openmouse.png",tips1:"建议您张大嘴，动作放慢一些",tips2:""},1600:{msg:"视频录制时间过短",img:"",tips1:"请更换背景环境录制",tips2:"避免背景中有反光、边框",isTips1Color:!0},1601:{msg:"实人检测失败",img:"",tips1:"请更换背景环境录制",tips2:"避免背景中有反光、边框",isTips1Color:!0},1602:{msg:"实人检测未达到通过标准",img:"",tips1:"请更换背景环境录制",tips2:"避免背景中有反光、边框",isTips1Color:!0},651:{msg:"疑似非真人录制",img:"",tips1:"请更换背景环境录制",tips2:"避免背景中有反光、边框",isTips1Color:!0},603:{msg:"视频实人比对没通过",img:"",tips1:"请更换背景环境录制",tips2:"避免背景中有反光、边框",isTips1Color:!0},604:{msg:"比对相似度未达到通过标准",img:"",tips1:"请更换背景环境录制",tips2:"避免背景中有反光、边框",isTips1Color:!0},602:{msg:"视频实人检测没通过",img:"",tips1:"请更换背景环境录制",tips2:"避免背景中有反光、边框",isTips1Color:!0},823:{msg:"图像比对没通过",img:"",tips1:"请更换背景环境录制",tips2:"避免背景中有反光、边框",isTips1Color:!0},824:{msg:"比对相似度未达到通过标准",img:"",tips1:"请更换背景环境录制",tips2:"避免背景中有反光、边框",isTips1Color:!0},655:{msg:"脸离屏幕太近",img:"",tips1:"建议您调整脸部位置，或录制角度",tips2:""},656:{msg:"脸离屏幕太远",img:"",tips1:"建议您调整脸部位置，或录制角度",tips2:""},650:{msg:"活体检测调用失败",img:"",tips1:"给您造成不便深表抱歉，建议您稍后重试",tips2:""},606:{msg:"身份证照片信息拉取失败",img:"",tips1:"如多次出现该错误，请联系相关工作人员，提供身份证号，看证件库是否有您照片",tips2:""},9999:{msg:"服务器返回异常501/504",img:"",tips1:"",tips2:""}};module.exports={sysFailInfo:sysFailInfo,defaultConfig:defaultConfig};

/***/ }),

/***/ 145:
/***/ (function(module, exports) {


var getProto = Object.getPrototypeOf || function (obj) {
  /*jshint proto: true */
  return obj.__proto__;
};
var hasOwn = Object.prototype.hasOwnProperty;
var fnToString = hasOwn.toString;
var ObjectFunctionString = fnToString.call(Object);

/**
 * 测试对象是否是纯粹的对象（通过 "{}" 或者 "new Object" 创建的）。
 */
var isPlainObject = function(obj) {
  var proto, Ctor;

  // Detect obvious negatives
  // Use toString instead of jQuery.type to catch host objects
  if (!obj || toString.call(obj) !== "[object Object]") {
    return false;
  }

  proto = getProto(obj);

  // Objects with no prototype (e.g., `Object.create( null )`) are plain
  if (!proto) {
    return true;
  }

  // Objects with prototype are plain iff they were constructed by a global Object function
  Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
  return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
};


var isFunction = function (val) {
  return (typeof val === 'function');
}


var extend = function () {
  var options, name, src, copy, copyIsArray, clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if (typeof target === "boolean") {
    deep = target;

    // Skip the boolean and the target
    target = arguments[i] || {};
    i++;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if (typeof target !== "object" && !isFunction(target)) {
    target = {};
  }

  // Extend jQuery itself if only one argument is passed
  if (i === length) {
    target = this;
    i--;
  }

  for (; i < length; i++) {

    // Only deal with non-null/undefined values
    if ((options = arguments[i]) != null) {

      // Extend the base object
      for (name in options) {
        src = target[name];
        copy = options[name];

        // Prevent never-ending loop
        if (target === copy) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if (deep && copy && (isPlainObject(copy) ||
          (copyIsArray = Array.isArray(copy)))) {

          if (copyIsArray) {
            copyIsArray = false;
            clone = src && Array.isArray(src) ? src : [];

          } else {
            clone = src && isPlainObject(src) ? src : {};
          }

          // Never move original objects, clone them
          target[name] = extend(deep, clone, copy);

          // Don't bring in undefined values
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};

module.exports = {
  extend: extend
}

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_globel_js__ = __webpack_require__(148);




__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
	modules: {
		globel: __WEBPACK_IMPORTED_MODULE_2__modules_globel_js__["a" /* default */]
	}
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__action_globel__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mutation_globel__ = __webpack_require__(150);



var globel = {
	state: {
		project: 'manage',
		userInfo: {
			communityId: '',
			memberId: '',
			userName: '',
			phone: ''
		},
		accessToken: '',
		communityId: 271,
		memberId: '',
		tabIndex: 0,
		token: '',
		loginCode: 0,
		systemList: [],
		cacheObject: {}, //一些页面跳转时候需要用到的数据存储
		cacheId: 0, //一些页面跳转所需要的id
		aMapWeb: '710eeb4c4a065cdf0eb3d08e76a506c0',
		aMapApi: '0bf260575d305ef2bbc1d708f54aada5',
		gdMapKey: '22ef823a6ba97b6235c8f379ef538d4c' //高德地图测试key

	},
	actions: __WEBPACK_IMPORTED_MODULE_0__action_globel__["a" /* globelAction */],
	mutations: __WEBPACK_IMPORTED_MODULE_1__mutation_globel__["a" /* globelMutation */]
};

/* harmony default export */ __webpack_exports__["a"] = (globel);

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globelAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants_type__ = __webpack_require__(85);


var globelAction = {
	changetab: function changetab(_ref, params) {
		var state = _ref.state,
		    commit = _ref.commit,
		    dispatch = _ref.dispatch;

		commit(__WEBPACK_IMPORTED_MODULE_0__constants_type__["a" /* CHANGETAB */], params);
	},
	setUserInfo: function setUserInfo(_ref2, params) {
		var state = _ref2.state,
		    commit = _ref2.commit;

		commit(__WEBPACK_IMPORTED_MODULE_0__constants_type__["f" /* SETUSERINFO */], params);
	},
	setAccessToken: function setAccessToken(_ref3, params) {
		var state = _ref3.state,
		    commit = _ref3.commit,
		    dispatch = _ref3.dispatch;

		commit(__WEBPACK_IMPORTED_MODULE_0__constants_type__["b" /* SETACCESSTOKEN */], params);
	},
	setMemberId: function setMemberId(_ref4, params) {
		var state = _ref4.state,
		    commit = _ref4.commit;

		commit(__WEBPACK_IMPORTED_MODULE_0__constants_type__["e" /* SETMEMBERID */], params);
	},
	setCacheId: function setCacheId(_ref5, params) {
		var state = _ref5.state,
		    commit = _ref5.commit;

		commit(__WEBPACK_IMPORTED_MODULE_0__constants_type__["c" /* SETCACHEID */], params);
	},
	setCacheObject: function setCacheObject(_ref6, params) {
		var state = _ref6.state,
		    commit = _ref6.commit;

		commit(__WEBPACK_IMPORTED_MODULE_0__constants_type__["d" /* SETCACHEOBJECT */], params);
	}
};

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globelMutation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constants_type_js__ = __webpack_require__(85);


var _globelMutation;



var globelMutation = (_globelMutation = {}, __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_globelMutation, __WEBPACK_IMPORTED_MODULE_1__constants_type_js__["a" /* CHANGETAB */], function (state, action) {
	console.log(state);
	state.tabIndex = action;
	console.log(state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_globelMutation, __WEBPACK_IMPORTED_MODULE_1__constants_type_js__["f" /* SETUSERINFO */], function (state, action) {
	state.userInfo = action;
	console.log(state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_globelMutation, __WEBPACK_IMPORTED_MODULE_1__constants_type_js__["b" /* SETACCESSTOKEN */], function (state, action) {
	state.accessToken = action;
	console.log(state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_globelMutation, __WEBPACK_IMPORTED_MODULE_1__constants_type_js__["e" /* SETMEMBERID */], function (state, action) {
	state.memberId = action;
	console.log(state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_globelMutation, __WEBPACK_IMPORTED_MODULE_1__constants_type_js__["c" /* SETCACHEID */], function (state, action) {
	state.cacheId = action;
	console.log(state);
}), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()(_globelMutation, __WEBPACK_IMPORTED_MODULE_1__constants_type_js__["d" /* SETCACHEOBJECT */], function (state, action) {
	state.cacheObject = action;
	console.log(state);
}), _globelMutation);

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var updateManager = global.mpvue.getUpdateManager();

updateManager.onCheckForUpdate(function (res) {
  // 请求完新版本信息的回调
  // console.log(res.hasUpdate)
});

updateManager.onUpdateReady(function () {
  global.mpvue.showModal({
    title: '更新提示',
    content: '新版本已经准备好，是否重启应用？',
    success: function success(res) {
      if (res.confirm) {
        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
        updateManager.applyUpdate();
      }
    }
  });
});

updateManager.onUpdateFailed(function () {
  // 新版本下载失败
});

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serve_house__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serve_intelligent__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serve_infrastructure__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__serve_operation__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__serve_account__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__serve_member__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__serve_survey__ = __webpack_require__(161);

 // 房型api
 // 智能设施api
 // 基础服务api
 // 基础服务api
 // 账单api
 // 账单api

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, __WEBPACK_IMPORTED_MODULE_1__serve_house__["a" /* default */], __WEBPACK_IMPORTED_MODULE_4__serve_operation__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__serve_intelligent__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__serve_infrastructure__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__serve_account__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__serve_member__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__serve_survey__["a" /* default */]));

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(23);

var rootUrl = "https://tapi.wowqu.cn/";
var house = 'house/'; // 房型服务
var jumpTokenHader = {
  'Content-Type': 'application/json'
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getPictures: function getPictures(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'mini/get/pictures', data, jumpTokenHader);
  }, // 首页，查询轮播图片
  getBrandImages: function getBrandImages(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'mini/get/brandImages', data, jumpTokenHader);
  }, // 首页，获取品牌推荐
  getCommunities: function getCommunities(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'mini/get/communities', data, jumpTokenHader);
  }, // 首页，查询房源推荐
  queryCommunities: function queryCommunities(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + house + 'mini/query/communities', data, jumpTokenHader);
  }, // 查询房源
  queryList: function queryList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'communityHouseStyle/query/list', data, jumpTokenHader);
  }, // 查询社区房屋类型
  brandQueryList: function brandQueryList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'brandConfig/query/list', data, jumpTokenHader);
  }, // 获取所有的品牌类型
  detailCommunity: function detailCommunity(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'mini/detail/community', data, jumpTokenHader);
  }, // 查询社区详情
  queryHouseStyle: function queryHouseStyle(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'mini/detail/houseStyle', data, jumpTokenHader);
  }, // 查询房型详情
  queryCommunitiesDetail: function queryCommunitiesDetail(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + house + 'mini/list/communities', data, jumpTokenHader);
  }, // 查询房型详情
  getCoverImage: function getCoverImage(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'communityImage/query/list', data, jumpTokenHader);
  }, // 查询社区图片
  communities: function communities(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'mini/detail/communities', data, jumpTokenHader);
  }, // 搜索社区详情
  getVicinage: function getVicinage(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'mini/detail/communities', data, jumpTokenHader);
  }, // 搜索社区附近區域

  searchCommunity: function searchCommunity(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'mini/search', data, jumpTokenHader);
  }, // 搜索社区
  getNearCommunities: function getNearCommunities(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'mini/nearby/communities', data, jumpTokenHader);
  }, // 附件推荐，按距离排序
  getCommunityDetail: function getCommunityDetail(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'mini/detail/community', data, jumpTokenHader);
  }, // 查询社区详情

  getAllCommunity: function getAllCommunity(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + house + 'community/get/all', data, jumpTokenHader);
  }, // 查询所有可售的社区

  getStempMap: function getStempMap(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get('https://restapi.amap.com/v3/staticmap', data, jumpTokenHader);
  } // 支付宝获取高德静态地图
});

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(23);

var rootUrl = "https://tapi.wowqu.cn/";
var intelligent = 'intelligent_image/';
var intelligentDevice = 'intelligent_device/'; // 智能设备服务
var insurance = 'insurance/'; // 保险服务
var electronicContract = 'electronic_contract/'; // 电子合同

/* harmony default export */ __webpack_exports__["a"] = ({
  getHouseEnergyCurrent: function getHouseEnergyCurrent(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + intelligentDevice + 'houseEnergyCurrent/query/getHouseEnergyCurrent', data);
  }, // 查看水电表读数
  detectAuth: function detectAuth(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + intelligent + 'tencentRequest/detectAuth', data);
  }, // 实名核身鉴权
  detectAuthForMemberId: function detectAuthForMemberId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + intelligent + 'tencentRequest/auth', data);
  }, // 实名核身鉴权,需要传入会员id
  getDetectInfo: function getDetectInfo(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + intelligent + 'tencentRequest/get/detectInfo', data);
  }, // 获取实名核身结果信息
  livenessCompare: function livenessCompare(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + intelligent + 'tencentRequest/livenessCompare', data);
  }, // 活体人脸比对
  liveness: function liveness(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + intelligent + 'tencentRequest/liveness', data);
  }, // 活体人脸比对,需要传入会员id
  recognitionFront: function recognitionFront(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + intelligent + 'ocrIdentityCard/recognitionFront', data);
  }, // 识别身份证正面信息
  recognitionReverse: function recognitionReverse(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + intelligent + 'ocrIdentityCard/recognitionReverse', data);
  }, // 识别身份证反面信息
  recognition: function recognition(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + intelligent + 'ocrBankCard/recognition', data);
  }, // 识别银行卡信息
  getInsuranceGoodsList: function getInsuranceGoodsList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + insurance + 'insuranceGoods/list', data);
  }, // 查询保险列表old
  insuranceApplyCommit: function insuranceApplyCommit(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + insurance + 'insuranceApply/commit', data);
  }, // 提交保险订单申请数据
  insuranceApplySave: function insuranceApplySave(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + insurance + 'insuranceApply/save', data);
  }, // 提交保险订单申请数据(新)
  getInsurances: function getInsurances(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + insurance + 'insuranceInfo/getInsurances', data);
  }, // 查询当前登录会员保险详情
  insuranceApplyCancel: function insuranceApplyCancel(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + insurance + 'insuranceApply/cancel', data);
  }, // 查询当前登录会员保险详情
  getWeChatElectronicContractTerms: function getWeChatElectronicContractTerms(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + electronicContract + 'electronicContract/get/weChatElectronicContractTerms', data);
  }, // 查询当前登录会员保险详情
  getInsuranceList: function getInsuranceList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + insurance + 'insuranceInfo/list', data);
  }, // 查询保险列表new
  getInsuranceAgreementList: function getInsuranceAgreementList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + insurance + 'insuranceAgreement/list', data);
  } // 查询保险协议文件
});

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(23);

var rootUrl = "https://tapi.wowqu.cn/";
var infrastructure = 'infrastructure/'; // 基础服务
var coupon = 'coupon/'; // 优惠券服务
var memauth = 'memauth/'; // 登录服务
var jumpTokenHader = {
  'Content-Type': 'application/json'
};

/* harmony default export */ __webpack_exports__["a"] = ({
  getByLocation: function getByLocation(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + infrastructure + 'city/getByLocation', data, jumpTokenHader);
  }, // 根据城市的经纬度查找地理信息
  getByLetter: function getByLetter(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + infrastructure + 'city/getByLetter', data, jumpTokenHader);
  }, // 查找所有城市--根据字母顺序排序
  getValidByCityId: function getValidByCityId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + infrastructure + 'region/getValidByCityId', data, jumpTokenHader);
  }, // 根据城市Id查找当前有营业门店的地区
  certificateTypeGetAll: function certificateTypeGetAll(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + infrastructure + 'certificateType/getAll', data);
  }, // 判断登录是否过期
  getCertificateType: function getCertificateType(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + infrastructure + 'certificateType/getAll', data, jumpTokenHader);
  }, // 查询所有证件类型
  getAllCountry: function getAllCountry(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + infrastructure + 'country/getAllCountry', data, jumpTokenHader);
  }, // 查找所有国家
  getAllProvince: function getAllProvince(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + infrastructure + 'province/getAllProvince', data, jumpTokenHader);
  }, // 得到所有省份
  getByProvinceId: function getByProvinceId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + infrastructure + 'city/getByProvinceId', data, jumpTokenHader);
  }, // 根据省份id查找城市
  getByOwnerCountyFuzzy: function getByOwnerCountyFuzzy(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + infrastructure + 'bank/getByOwnerCountyFuzzy', data, jumpTokenHader);
  }, // 通过归属县模糊查询银行信息
  getMiniMemberCouponList: function getMiniMemberCouponList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + coupon + 'memberCoupon/getMiniMemberCouponList', data);
  }, // 小程序端查询会员优惠券列表
  getMemberValidCouponListForAccount: function getMemberValidCouponListForAccount(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + coupon + 'memberCoupon/getMemberValidCouponListForAccount', data);
  }, // 小程序端获取会员的该笔账单可用优惠券列表
  getMemberInvalidCouponList: function getMemberInvalidCouponList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + coupon + 'memberCoupon/getMemberInvalidCouponList', data);
  }, // 小程序端查询会员不可用优惠券列表
  calcAccountBillAbatement: function calcAccountBillAbatement(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + coupon + 'memberCoupon/calcAccountBillAbatement', data);
  }, // 小程序端会员选择优惠券后计算应付总价格
  getMiniMemberUnusedCouponCount: function getMiniMemberUnusedCouponCount(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + coupon + 'memberCoupon/getMiniMemberUnusedCouponCount', data);
  }, // 查询会员(未使用的)优惠券数量
  // 小程序端登录后查询该会员可领取的优惠券
  getMemberAvailableCoupons: function getMemberAvailableCoupons(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + coupon + 'memberCoupon/getMemberAvailableCoupons', data, jumpTokenHader);
  },
  // 小程序端批量领取优惠券
  batchReceiveCoupon: function batchReceiveCoupon(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + coupon + 'memberCoupon/batchReceiveCoupon', data);
  },
  getListByCouponConsumeType: function getListByCouponConsumeType(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + coupon + 'couponTemplate/getListByCouponConsumeType', data);
  }, // 根据优惠券消费类型查询优惠券模板列表
  logOut: function logOut(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + memauth + 'verify/logout', data);
  }, // 退出登录
  isLogin: function isLogin(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + memauth + 'token/accessTokenValid', data);
  }, // 判断登录是否过期
  SendSms: function SendSms(data, header) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + memauth + 'verify/sendSmsNew', data, header);
  },
  loginByMiniAppCommunitySms: function loginByMiniAppCommunitySms(data, header) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + memauth + 'verify/loginByMiniAppCommunitySms' + ('?auth_type=' + data.auth_type + '&phone=' + data.phone + '&encryptCode=' + data.encryptCode + '&code=' + data.code), {}, header);
  },
  loginByMiniAppCommunity: function loginByMiniAppCommunity(data, header) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + memauth + 'verify/loginByMiniAppCommunity' + ('?auth_type=' + data.auth_type + '&code=' + data.code), {}, header);
  },
  loginByAliPayMiniAppSms: function loginByAliPayMiniAppSms(data, header) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + memauth + 'verify/loginByAliPayMiniAppSms' + ('?auth_type=' + data.auth_type + '&code=' + data.code), {}, header);
  },
  // 根据rule_store_relate_id(门店限制规则关联id)查询门店限制规则列表
  getByRuleStoreRelateId: function getByRuleStoreRelateId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + coupon + 'ruleStore/getByRuleStoreRelateId', data);
  }
});

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(23);

var rootUrl = "https://tapi.wowqu.cn/";
var operation = 'operation/'; // 运营服务
var wechat = 'wechat/'; // 微信服务接口
var appid =  true ? 'wxfe3d314d80723f7b' : 'wxf32120c146d8c2c8';
var jumpTokenHader = { 'Content-Type': 'application/json' };
/* harmony default export */ __webpack_exports__["a"] = ({
  selectStatusList: function selectStatusList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'bookSeeRoom/selectStatusList', data);
  }, // 社区获取预约订单状态列表
  addSeeRoomOrder: function addSeeRoomOrder(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'bookSeeRoom/addSeeRoomOrder', data);
  }, // 会员申请预约看房
  cancelSeeRoomOrder: function cancelSeeRoomOrder(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + operation + 'bookSeeRoom/cancelSeeRoomOrder?bookSeeRoomId=' + data.bookSeeRoomId);
  }, // 会员取消预约看房
  deleteSeeRoomOrderByMember: function deleteSeeRoomOrderByMember(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].delete(rootUrl + operation + 'bookSeeRoom/deleteSeeRoomOrderByMember', data);
  }, // 会员删除预约看房订单
  selectOrderPageByMemberId: function selectOrderPageByMemberId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'bookSeeRoom/selectOrderPageByMemberId', data);
  }, // 会员查询预约订单列表
  selectSeeRoomOrderById: function selectSeeRoomOrderById(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'bookSeeRoom/selectSeeRoomOrderById', data);
  }, // 会员查询预约订单详情
  selectContractListByMemberId: function selectContractListByMemberId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalContract/selectContractListByMemberId', data);
  }, // 根据会员id查询对应合同列表
  selectPaymentScheduleList: function selectPaymentScheduleList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalContractPaymentSchedule/selectPaymentScheduleList', data);
  }, // 查询合同的付款计划列表
  selectWholeContract: function selectWholeContract(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalContract/selectWholeContract', data);
  }, // 查询完整合同信息
  confirmContractById: function confirmContractById(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + operation + 'longRentalContract/confirmContractById', data);
  }, // 根据合同id确认合同
  selectContractStatusList: function selectContractStatusList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalContract/selectContractStatusList', data);
  }, // 社区获取全部合同状态的列表
  selectContractTypeList: function selectContractTypeList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalContract/selectContractTypeList', data);
  }, // 社区获取全部合同类型的列表
  selectContractById: function selectContractById(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalContract/selectContractById', data);
  }, // 查询合同基本信息
  cancelContractById: function cancelContractById(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + operation + 'longRentalContract/cancelContractById', data);
  }, // 根据合同id取消合同

  applyRenwalSelectListByMemberId: function applyRenwalSelectListByMemberId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalApplyRenewal/selectListByMemberId', data);
  }, // 续租申请列表
  selectRenewalOrderById: function selectRenewalOrderById(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalApplyRenewal/selectRenewalOrderById', data);
  }, // 续租申请列表
  applyRenewal: function applyRenewal(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'longRentalApplyRenewal/applyRenewal', data);
  }, // 会员发起续租申请
  updateRenewalOrder: function updateRenewalOrder(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + operation + 'longRentalApplyRenewal/updateRenewalOrder', data);
  }, // 修改续租申请内容
  cancelRenewalOrder: function cancelRenewalOrder(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + operation + 'longRentalApplyRenewal/cancelRenewalOrder', data);
  }, // 取消续租申请
  selectRenewalStatusList: function selectRenewalStatusList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalApplyRenewal/selectRenewalStatusList', data);
  }, // 查询所有续租状态列表
  selectRenewalChoiceList: function selectRenewalChoiceList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'choiceReasonItem/selectRenewalChoiceList', data);
  }, // 查询续租业务的可选原因列表
  selectRenewalLogPage: function selectRenewalLogPage(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'longRentalApplyRenewalLog/selectRenewalLogPage', data);
  },

  changeRoomSelectListByMemberId: function changeRoomSelectListByMemberId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalApplyChangeRoom/selectListByMemberId', data);
  }, // 根据会员id查询换房申请列表
  selectChangeRoomById: function selectChangeRoomById(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalApplyChangeRoom/selectChangeRoomById', data);
  }, // 根据换房id查询换房申请
  applyChangeRoom: function applyChangeRoom(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'longRentalApplyChangeRoom/applyChangeRoom', data);
  }, // 会员申请换房
  updateChangeRoom: function updateChangeRoom(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + operation + 'longRentalApplyChangeRoom/updateChangeRoom', data);
  }, // 修改换房申请
  cancelChangeRoomById: function cancelChangeRoomById(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + operation + 'longRentalApplyChangeRoom/cancelChangeRoomById?applyChangeRoomId=' + data.applyChangeRoomId);
  }, // 取消换房申请
  selectChangeRoomStatusList: function selectChangeRoomStatusList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalApplyChangeRoom/selectChangeRoomStatusList', data);
  },
  selectChangeRoomLogPage: function selectChangeRoomLogPage(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'longRentalApplyChangeRoomLog/selectChangeRoomLogPage', data);
  },

  returnRoomSelectListByMemberId: function returnRoomSelectListByMemberId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalApplyReturnRoom/selectListByMemberId', data);
  }, // 根据会员id查询退房申请列表
  selectReturnRoomOrderById: function selectReturnRoomOrderById(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalApplyReturnRoom/selectReturnRoomOrderById', data);
  }, // 根据换房id查询退房申请
  addReturnRoomOrder: function addReturnRoomOrder(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'longRentalApplyReturnRoom/addReturnRoomOrder', data);
  }, // 会员申请退房
  updateReturnRoomOrder: function updateReturnRoomOrder(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + operation + 'longRentalApplyReturnRoom/updateReturnRoomOrder', data);
  }, // 会员申请退房
  cancelReturnRoomOrder: function cancelReturnRoomOrder(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + operation + 'longRentalApplyReturnRoom/memberCancelReturnRoom', data);
  }, // 会员取消退房
  selectReturnRoomLogPage: function selectReturnRoomLogPage(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'longRentalApplyReturnRoomLog/selectReturnRoomLogPage', data);
  }, // 根据退房申请id查询操作日志
  selectReturnRoomStatusList: function selectReturnRoomStatusList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalApplyReturnRoom/selectReturnRoomStatusList', data);
  },
  selectByReturnRoomId: function selectByReturnRoomId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalReturnRoomApplicationForm/selectByReturnRoomId', data);
  }, // 根据退房申请id查询退房申请书详情
  memberConfirmReturnRoom: function memberConfirmReturnRoom(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + operation + 'longRentalApplyReturnRoom/memberConfirmReturnRoom', data);
  }, // 用户确认退房申请
  memberRefuseReturnRoom: function memberRefuseReturnRoom(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + operation + 'longRentalApplyReturnRoom/memberRefuseReturnRoom', data);
  }, // 用户拒绝退房申请

  selectComplaintParentTitleItem: function selectComplaintParentTitleItem(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'complaintParentTitleItem/selectComplaintParentTitleItem', data);
  }, // 投诉内容父标查询加接口
  selectChangeRoomChoiceList: function selectChangeRoomChoiceList() {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'choiceReasonItem/selectChangeRoomChoiceList');
  }, // 查询换房业务的可选原因列表
  selectReturnRoomChoiceList: function selectReturnRoomChoiceList() {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'choiceReasonItem/selectReturnRoomChoiceList');
  }, // 查询退租业务的可选原因列表
  getEndDate: function getEndDate(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalContract/getEndDate', data);
  }, // 根据合同开始日期和租期计算合同结束日期
  getSomeDate: function getSomeDate(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalContract/getSomeDate', data);
  }, // 根据输入日期和天数计算指定天数后的日期

  // 投诉建议
  addMemberSuggest: function addMemberSuggest(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'memberSuggest/addMemberSuggest', data);
  }, // 添加用户建议
  selectComplaintParentTitleItemList: function selectComplaintParentTitleItemList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'complaintParentTitleItem/selectComplaintParentTitleItemList', data);
  }, // 投诉内容父标分页查询接口
  selectComplaintTitleItemList: function selectComplaintTitleItemList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'complaintTitleItem/selectComplaintTitleItemList', data);
  }, // 投诉内容子标题分页查询
  addMemberComplaint: function addMemberComplaint(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'memberComplaint/addMemberComplaint', data);
  }, // 添加投诉

  getAllComplaintParentTitle: function getAllComplaintParentTitle(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'complaintParentTitleItem/getAllComplaintParentTitle', data);
  }, // 查询所有投诉内容父标题
  getComplaintTitleItemListByParentId: function getComplaintTitleItemListByParentId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'complaintTitleItem/getComplaintTitleItemListByParentId', data);
  }, // 根据投诉内容父标题查询投诉内容标题
  getMyComplaint: function getMyComplaint(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'memberComplaint/getMyComplaint', data);
  }, // 小程序端会员查看我的投诉

  // 清洁维修模块 2019.06.28 begin
  // 根据社区id和是否有效状态查找该社区所拥有的清洁服务项
  getCleanRoomItem: function getCleanRoomItem(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'cleanRoomItem/getCleanRoomItemByCommunityIdAndIsValid', data);
  },
  // 小程序端--用户申请清洁服务
  applyCleanRoom: function applyCleanRoom(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'cleanRoom/applyCleanRoom', data);
  },
  // 小程序端--用户取消清洁服务订单
  cancelCleanRoomApply: function cancelCleanRoomApply(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'cleanRoom/cancelCleanRoomApply', data);
  },
  // 小程序端--查看已有清洁预约
  getMyCleanRoomApply: function getMyCleanRoomApply(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'cleanRoom/getMyCleanRoomApply', data);
  },

  // 根据社区id和是否有效状态查找该社区所拥有的维修服务项
  getRepairRoomItem: function getRepairRoomItem(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'repairRoomItem/getRepairRoomItemByCommunityIdAndIsValid', data);
  },
  // 小程序端--用户申请维修服务
  applyRepairRoom: function applyRepairRoom(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'repairRoom/applyRepairRoom', data);
  },
  // 小程序端--用户取消维修服务订单
  cancelRepairRoomApply: function cancelRepairRoomApply(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'repairRoom/cancelRepairRoomApply', data);
  },
  // 小程序端--查看已有维修预约
  getMyRepairRoomApply: function getMyRepairRoomApply(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'repairRoom/getMyRepairRoomApply', data);
  },
  // 评价添加接口
  addMemberComment: function addMemberComment(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'memberComment/addMemberComment', data);
  },
  // 根据业务类型查看对应需点评项
  getCommentItemListByOperationType: function getCommentItemListByOperationType(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'memberCommentStar/getCommentItemListByOperationType', data);
  },
  // 根据业务id查询评论信息
  getByOperationId: function getByOperationId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'memberComment/getByOperationId', data);
  },
  // 清洁维修模块 2019.06.28 end

  // 根据会员id查询该会员正在生效的合同
  selectEfficientContractListByMemberId: function selectEfficientContractListByMemberId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'longRentalContract/selectEfficientContractListByMemberId', data);
  },

  getMiniMemberCommentPage: function getMiniMemberCommentPage(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'memberComment/getMiniMemberCommentPage', data, jumpTokenHader);
  },
  selectCheckInContractByMemberId: function selectCheckInContractByMemberId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'memberCheckIn/selectCheckInContractByMemberId', data);
  },
  getWxInfoforLogin: function getWxInfoforLogin(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + wechat + ('wx/user/' + appid + '/login'), data);
  },
  getWxUserInfo: function getWxUserInfo(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + wechat + ('wx/user/' + appid + '/info'), data);
  },
  getMaQrcodeUriUnlimited: function getMaQrcodeUriUnlimited(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + wechat + 'qrcode/getMaQrcodeUriUnlimited', data);
  },
  createJsapiSignature: function createJsapiSignature(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + wechat + 'mp/h5web/createJsapiSignature', data);
  },
  getUserInfo: function getUserInfo(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + wechat + 'mp/h5web/getUserInfo', data);
  },

  getMiniAppActivityInfoPage: function getMiniAppActivityInfoPage(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'activityInfo/get/getMiniAppActivityInfoPage', data, jumpTokenHader);
  },
  // 小程序活动分页查询
  getAllActivityType: function getAllActivityType(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'activityInfo/get/getAllActivityType', data, jumpTokenHader);
  },
  // 小程序查询活动所有类型
  getMiniAppActivityDetailInfo: function getMiniAppActivityDetailInfo(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'activityInfo/get/getMiniAppActivityDetailInfo', data, jumpTokenHader);
  },
  // 小程序查询活动详情信息
  userApplyActivity: function userApplyActivity(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + operation + 'activityApply/create/userApplyActivity', data, jumpTokenHader);
  },
  // 用户申请参加活动
  selectFunVedioMiniAppInfo: function selectFunVedioMiniAppInfo(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'funVedioInfo/select/selectFunVedioMiniAppInfo', data, jumpTokenHader);
  },
  // 小程序查询趣视频信息
  selectFunVedioMiniAppDetailInfo: function selectFunVedioMiniAppDetailInfo(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'funVedioInfo/select/selectFunVedioMiniAppDetailInfo', data, jumpTokenHader);
  },
  // 小程序查询趣视频详细信息
  selectFunVedioMiniAppRelatedVedio: function selectFunVedioMiniAppRelatedVedio(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'funVedioInfo/select/selectFunVedioMiniAppRelatedVedio', data, jumpTokenHader);
  },
  // 小程序查询相关视频信息
  updateFunVedioLikeNum: function updateFunVedioLikeNum(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'funVedioInfo/update/updateFunVedioLikeNum', data, jumpTokenHader);
  }
  // 小程序更新点赞数
});

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(23);

var rootUrl = "https://tapi.wowqu.cn/";
var account = 'account/'; // 优惠券服务
var payment = 'payment/'; // 支付服务

/* harmony default export */ __webpack_exports__["a"] = ({
  getMiniCommunityAccountBill: function getMiniCommunityAccountBill(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + account + 'accountBill/getMiniCommunityAccountBill', data);
  }, // 查询未付/已付账单
  getCommunityUnpaidAccountBill: function getCommunityUnpaidAccountBill(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + account + 'accountBill/getCommunityUnpaidAccountBill', data);
  }, // 点击“去支付”查询社区未付账单明细

  prePaymentForAccountBill: function prePaymentForAccountBill(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + account + 'pay/prePaymentForAccountBill', data);
  }, // 账单流程预支付
  cancelPaymentForAccountBill: function cancelPaymentForAccountBill(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + account + 'pay/cancelPaymentForAccountBill', data);
  }, // 账单流程取消支付
  commitMemberCardOrder: function commitMemberCardOrder(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + account + 'order/commitMemberCardOrder', data);
  }, // 提交会员卡订单
  getOrderByOrderId: function getOrderByOrderId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + account + 'order/getOrderByOrderId', data);
  }, // 根据订单id获取订单详情
  prePaymentForOrder: function prePaymentForOrder(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + account + 'pay/prePaymentForOrder', data);
  }, // 订单流程预支付

  // 支付账单--可核销优惠券
  payForAccountListHasCoupon: function payForAccountListHasCoupon(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + account + 'accountBill/payForAccountListHasCoupon', data);
  },
  // 根据会员id、合同id查询该会员的可退总金额
  getCanBackTotalAmount: function getCanBackTotalAmount(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + account + 'accountBill/getCanBackTotalAmount', data);
  },
  linkApayServer: function linkApayServer(data, header) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + account + 'accountBill/linkApayServer', data);
  },
  getMiniCommunityAccountBillByOrderId: function getMiniCommunityAccountBillByOrderId(data, header) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + account + 'accountBill/getMiniCommunityAccountBillByOrderId', data);
  },
  // 根据memberId获取绑定的手机号
  getMemberBingPhone: function getMemberBingPhone(data, header) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + payment + 'allinpayUnify/getMemberBingPhone', data, header, 'GET', false);
  },
  // 创建个人会员并发送绑定手机的验证码
  createMemberAndSendVerificationCode: function createMemberAndSendVerificationCode(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + payment + 'allinpayUnify/createMemberAndSendVerificationCode', data);
  },
  // 绑定手机
  bindPhone: function bindPhone(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + payment + 'allinpayUnify/bindPhone', data);
  }
});

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(23);

var rootUrl = "https://tapi.wowqu.cn/";
var member = 'member/'; // 会员服务
var jumpTokenHader = { 'Content-Type': 'application/json' };

/* harmony default export */ __webpack_exports__["a"] = ({
  selectLevelList: function selectLevelList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + member + 'memberLevel/selectLevelList', data);
  }, // 查询会员等级信息列表
  getMemberById: function getMemberById(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + member + 'member/getMemberById', data);
  }, // 查询会员基本情况
  addMemberCertificate: function addMemberCertificate(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + member + 'memberCertificateCheck/addMemberCertificate', data);
  }, // 会员上传证件信息
  selectByMemberId: function selectByMemberId(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + member + 'memberCertificateCheck/selectByMemberId', data);
  }, // 根据会员id查询是否可以再次上传证件信息
  selectCheckStatusList: function selectCheckStatusList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + member + 'memberCertificateCheck/selectCheckStatusList', data);
  }, // 根据会员id查询是否可以再次上传证件信息
  updateMember: function updateMember(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + member + 'member/updateMember', data);
  }, // 更新会员基本信息
  checkMemberInfoById: function checkMemberInfoById(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + member + 'member/checkMemberInfoById', data);
  }, // 根据会员id确认会员必要信息是否完整
  updateMemberInfo: function updateMemberInfo(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + member + 'memberInfo/updateMemberInfo', data);
  }, // 会员编辑个人详细信息
  changeMemberPhone: function changeMemberPhone(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + member + 'member/changeMemberPhone', data);
  }, // 会员变更手机号
  // 会员更新证件照信息
  updateCardImage: function updateCardImage(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + member + 'memberInfo/updateCardImage', data);
  },
  updateMemberCityInfo: function updateMemberCityInfo(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].put(rootUrl + member + 'memberInfo/updateMemberCityInfo', data, jumpTokenHader);
  },
  redPacketActivityDetailList: function redPacketActivityDetailList(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + member + 'redPacketActivityDetail/list', data);
  },
  sendRedPacket: function sendRedPacket(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + member + 'redPacketActivityMember/sendRedPacket', data);
  },
  checkMemberRedPacket: function checkMemberRedPacket(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + member + 'redPacketActivityMember/checkMemberRedPacket', data, jumpTokenHader);
  }
  // 【判断】注册会员提示语句
});

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__(23);

var rootUrl = "https://tapi.wowqu.cn/";
var operation = 'operation/'; // 运营服务
var jumpTokenHader = {
  'Content-Type': 'application/json'
};
/* harmony default export */ __webpack_exports__["a"] = ({
  // 根据问卷id查询完整的未填写问卷
  selectWholeQuestionnaireById: function selectWholeQuestionnaireById(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'questionnaire/selectWholeQuestionnaireById', data, jumpTokenHader);
  },
  // 保存已完成填写的问卷内容
  saveFinishedQuestionnaire: function saveFinishedQuestionnaire(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].post(rootUrl + operation + 'questionnaireMember/saveFinishedQuestionnaire', data);
  },
  // 根据问卷id查询完整的填写问卷
  selectLastFinishQuestionnaire: function selectLastFinishQuestionnaire(data) {
    return __WEBPACK_IMPORTED_MODULE_0__http__["a" /* http */].get(rootUrl + operation + 'questionnaireMember/selectLastFinishQuestionnaire', data, jumpTokenHader);
  }
});

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Track; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_map__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__behavior_js__ = __webpack_require__(181);









var Track = function () {
  // eslint-disable-next-line space-before-function-paren
  function Track() {
    var _this = this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$businessType = _ref.businessType,
        businessType = _ref$businessType === undefined ? 1 : _ref$businessType;

    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_classCallCheck___default()(this, Track);

    this.logstore = 'web-tracking-1';
    this.host = 'cn-shenzhen.log.aliyuncs.com';
    this.testProject = 'wowqu-test-log-1';
    this.prodProject = 'prod-log-1';
    this.userInfo = {};
    this.tempList = [];
    this.behaviorMap = {};

    this.tempList = [];
    this.businessType = businessType;

    var _ref2 = Object(__WEBPACK_IMPORTED_MODULE_7__index__["l" /* mpvueGetStorageSync */])('memberObj') || {},
        memberId = _ref2.memberId,
        openId = _ref2.wxMiniAppCommunityOpenId,
        unionId = _ref2.wxUnionId,
        telephone = _ref2.phone;

    this.userInfo = {
      memberId: memberId, openId: openId, unionId: unionId, telephone: telephone
    };
    this.behaviorMap = new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_map___default.a();
    __WEBPACK_IMPORTED_MODULE_8__behavior_js__["a" /* eventList */].map(function (item) {
      _this.behaviorMap.set(item.serial, item);
    });
    this.beginAppBehaviorListen();
  }

  __WEBPACK_IMPORTED_MODULE_6_babel_runtime_helpers_createClass___default()(Track, [{
    key: 'beginAppBehaviorListen',
    value: function beginAppBehaviorListen() {
      var _this2 = this;

      setInterval(function () {
        console.log('用户行为监听已启动');

        var _ref3 = Object(__WEBPACK_IMPORTED_MODULE_7__index__["l" /* mpvueGetStorageSync */])('memberObj') || {},
            memberId = _ref3.memberId,
            openId = _ref3.wxMiniAppCommunityOpenId,
            unionId = _ref3.wxUnionId,
            telephone = _ref3.phone;

        _this2.userInfo = {
          memberId: memberId, openId: openId, unionId: unionId, telephone: telephone
        };
        _this2.sendTrack();
      }, 10000);
    }
  }, {
    key: 'pageSaveParams',
    value: function () {
      var _ref4 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref5$serial = _ref5.serial,
            serial = _ref5$serial === undefined ? 1 : _ref5$serial;

        var urlParams, extend;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getPageParams();

              case 2:
                urlParams = _context.sent;
                extend = this.behaviorMap.get(serial);

                this.tempList.push(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, urlParams, extend));

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function pageSaveParams() {
        return _ref4.apply(this, arguments);
      }

      return pageSaveParams;
    }()
  }, {
    key: 'getPageParams',
    value: function getPageParams() {
      var e = getCurrentPages();
      var currentParams = e[e.length - 1];
      var fromParams = e[e.length - 2];
      var url = currentParams.route;

      var _ref6 = fromParams || {},
          fromUrl = _ref6.route;

      return {
        url: url,
        fromUrl: fromUrl
      };
    }
  }, {
    key: 'sendTrack',
    value: function () {
      var _ref7 = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var _this3 = this;

        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return this.tempList.map(function (item) {
                  var data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({
                    APIVersion: '0.6.0'
                  }, item, _this3.userInfo);
                  _this3.trackRequest({ data: data });
                });

              case 3:
                _context2.next = 8;
                break;

              case 5:
                _context2.prev = 5;
                _context2.t0 = _context2['catch'](0);

                console.log(_context2.t0);

              case 8:
                _context2.prev = 8;

                this.tempList = [];
                return _context2.finish(8);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 5, 8, 11]]);
      }));

      function sendTrack() {
        return _ref7.apply(this, arguments);
      }

      return sendTrack;
    }()
  }, {
    key: 'trackRequest',
    value: function trackRequest() {
      var _ref8 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref8$methods = _ref8.methods,
          methods = _ref8$methods === undefined ? 'GET' : _ref8$methods,
          _ref8$data = _ref8.data,
          data = _ref8$data === undefined ? {} : _ref8$data;

      var logstore = this.logstore,
          host = this.host,
          testProject = this.testProject,
          prodProject = this.prodProject;

      var project =  false ? prodProject : testProject;
      data = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(data)); // 过滤undefined
      global.mpvue.request({
        url: 'https://' + project + '.' + host + '/logstores/' + logstore + '/track',
        data: data,
        methods: methods,
        success: function success(res) {},
        fail: function fail(err) {
          console.log(err);
        }
      });
    }
  }]);

  return Track;
}();

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return eventList; });
var eventList = [{
  'pageName': '登录页',
  'pageId': '1',
  'eventId': '1',
  'eventName': '点击登录',
  'businessTypeName': '登录行为',
  'businessType': 1,
  'serial': 1
}, {
  'pageName': '注册页',
  'pageId': '2',
  'eventId': '2',
  'eventName': '用户注册行为',
  'businessTypeName': '注册类型',
  'businessType': 2,
  'serial': 2
}, {
  'pageName': '搜索页',
  'pageId': '3',
  'eventId': '3',
  'eventName': '搜索行为',
  'businessTypeName': '搜索类型',
  'businessType': 3,
  'serial': 3
}, {
  'pageName': '社区详情页',
  'pageId': '4',
  'eventId': '4',
  'eventName': '浏览社区行为',
  'businessTypeName': '社区类型',
  'businessType': 4,
  'serial': 4
}, {
  'pageName': '分享页',
  'pageId': '5',
  'eventId': '5',
  'eventName': '分享小程序行为',
  'businessTypeName': '分享类型',
  'businessType': 6,
  'serial': 5
}, {
  'pageName': '视频详情页',
  'pageId': '6',
  'eventId': '6',
  'eventName': '点击视频行为',
  'businessTypeName': '视频类型',
  'businessType': 6,
  'serial': 6
}, {
  'pageName': '活动详情页',
  'pageId': '7',
  'eventId': '7',
  'eventName': '浏览活动行为',
  'businessTypeName': '活动类型',
  'businessType': 7,
  'serial': 7
}, {
  'pageName': '活动详情页',
  'pageId': '7',
  'eventId': '8',
  'eventName': '参与活动行为',
  'businessTypeName': '活动类型',
  'businessType': 7,
  'serial': 8
}, {
  'pageName': '视频详情页',
  'pageId': '6',
  'eventId': '9',
  'eventName': '点赞行为',
  'businessTypeName': '视频类型',
  'businessType': 6,
  'serial': 9
}, {
  'pageName': '预约看房页',
  'pageId': '9',
  'eventId': '10',
  'eventName': '预约看房行为',
  'businessTypeName': '看房类型',
  'businessType': 8,
  'serial': 10
}, {
  'pageName': '合同详情页',
  'pageId': '6',
  'eventId': '11',
  'eventName': '签约行为',
  'businessTypeName': ':签约类型',
  'businessType': 9,
  'serial': 11
}, {
  'pageName': '保险购买页',
  'pageId': '11',
  'eventId': '12',
  'eventName': '浏览保险行为',
  'businessTypeName': '保险类型',
  'businessType': 10,
  'serial': 12
}, {
  'pageName': '保险购买页',
  'pageId': '11',
  'eventId': '13',
  'eventName': '购买保险行为',
  'businessTypeName': '保险类型',
  'businessType': 10,
  'serial': 13
}, {
  'pageName': '账单详情页',
  'pageId': '12',
  'eventId': '14',
  'eventName': '浏览账单行为',
  'businessTypeName': '账单类型',
  'businessType': 11,
  'serial': 14
}, {
  'pageName': '账单详情页',
  'pageId': '12',
  'eventId': '15',
  'eventName': '账单付款行为',
  'businessTypeName': ':账单类型',
  'businessType': 11,
  'serial': 15
}, {
  'pageName': '预约清洁页',
  'pageId': '13',
  'eventId': '16',
  'eventName': '预约清洁行为',
  'businessTypeName': '预约行为',
  'businessType': 12,
  'serial': 16
}, {
  'pageName': '预约维修页',
  'pageId': '14',
  'eventId': '17',
  'eventName': '预约维修行为',
  'businessTypeName': '预约行为',
  'businessType': 12,
  'serial': 17
}, {
  'pageName': '无忧看房',
  'pageId': '15',
  'eventId': '7',
  'eventName': '浏览活动行为',
  'businessTypeName': '活动类型',
  'businessType': 7,
  'serial': 18
}, {
  'pageName': '无忧看房',
  'pageId': '15',
  'eventId': '8',
  'eventName': '参与活动行为',
  'businessTypeName': '活动类型',
  'businessType': 7,
  'serial': 19
}];

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return http; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_transition__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils___ = __webpack_require__(3);





var http = {
  defualt_header: function defualt_header() {
    return {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + Object(__WEBPACK_IMPORTED_MODULE_4__utils___["l" /* mpvueGetStorageSync */])('accessToken')
    };
  },

  get: function get(path, data, header) {
    var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'GET';
    var isShow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    var headerParam = global.mpvuePlatform === 'my' ? { headers: header || http.defualt_header() } : { header: header || http.defualt_header() };
    return httpRequest(path, data, headerParam, method, isShow);
  },
  post: function post(path, data, header) {
    var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'POST';
    var isShow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    var headerParam = global.mpvuePlatform === 'my' ? { headers: header || http.defualt_header() } : { header: header || http.defualt_header() };
    return httpRequest(path, data, headerParam, method, isShow);
  },
  put: function put(path, data, header) {
    var method = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'PUT';
    var isShow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

    var headerParam = global.mpvuePlatform === 'my' ? {
      headers: header || __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(http.defualt_header(), {
        'X-HTTP-Method-Override': 'PUT'
      })
    } : {
      header: header || http.defualt_header()
    };
    var METHOD = global.mpvuePlatform === 'my' ? 'POST' : method;
    return httpRequest(path, data, headerParam, METHOD, isShow);
  }
};

var httpRequest = function httpRequest(path, data, headerParam, method, isShow) {
  return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
    // mpvue.showLoading()
    global.mpvue.request(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
      url: path,
      data: data,
      method: method
    }, headerParam, {
      success: function success(res) {
        // mpvue.hideLoading()
        if (res.statusCode === 200 || res.status === 200) {
          var list = res.data.data;
          if (Object.prototype.toString.call(list) === '[object Array]' && list.length !== 0) {
            res.data.showNormalPage = true;
          } else {
            res.data.showNormalPage = false;
          }
          return handleSuccess(resolve, res.data, reject, isShow);
        } else if (res.statusCode === 401 || res.status === 401) {
          return tokenFailureFun(reject, res);
        }
      },
      fail: function fail(err) {
        // mpvue.hideLoading()
        if (err.status === 401) {
          return tokenFailureFun(reject, err);
        } else {
          return reject(reject, err);
        }
      }
    }));
  });
};

var handleSuccess = function handleSuccess(resolve, res, reject, isShow) {
  var afreshRequest = Object(__WEBPACK_IMPORTED_MODULE_4__utils___["l" /* mpvueGetStorageSync */])('afreshRequest');
  if (afreshRequest) {
    Object(__WEBPACK_IMPORTED_MODULE_4__utils___["l" /* mpvueGetStorageSync */])('afreshRequest', false);
  }
  if (res.code === 0 || res.success === true) {
    return res.data || res.data === 0 ? resolve([res.data, res.msg, res.showNormalPage]) : res.data != null ? resolve([res, res.msg, res.showNormalPage]) : resolve([res.data, res.msg, res.showNormalPage]);
  } else {
    if (isShow) {
      global.mpvue[__WEBPACK_IMPORTED_MODULE_3__utils_transition__["a" /* mpShowModal */]]({
        content: res.msg,
        showCancel: false,
        success: function success() {
          reject([res.data, res.msg, res.code]);
        }
      });
    } else {
      reject([res.data, res.msg, res.code]);
    }
  }
};
var tokenFailureFun = function tokenFailureFun(reject) {
  var firstOpen = Object(__WEBPACK_IMPORTED_MODULE_4__utils___["l" /* mpvueGetStorageSync */])('firstOpen');
  if (firstOpen) {
    var isLogin = Object(__WEBPACK_IMPORTED_MODULE_4__utils___["l" /* mpvueGetStorageSync */])('isLogin');
    var content = isLogin ? '登录已失效,前往登录?' : '你暂未注册，是否前往注册?';
    Object(__WEBPACK_IMPORTED_MODULE_4__utils___["s" /* showModal */])({
      content: content,
      showCancel: true,
      fn: tipsHnadler
    });
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_4__utils___["s" /* showModal */])({
      content: '你已拒绝登录，请先进行登录',
      showCancel: true,
      fn: tipsHnadler
    });
  }
  reject(401);
};

var tipsHnadler = function tipsHnadler() {
  Object(__WEBPACK_IMPORTED_MODULE_4__utils___["p" /* mpvueSetStorageSync */])('firstOpen', false);
  var isLogin = Object(__WEBPACK_IMPORTED_MODULE_4__utils___["l" /* mpvueGetStorageSync */])('isLogin');
  if (isLogin) {
    var url = global.mpvuePlatform === 'my' ? '/pages/auth/phoneLogin/main' : '/pages/auth/wxLogin/main';
    global.mpvue.navigateTo({ url: url });
  } else {
    global.mpvue.navigateTo({ url: '/pages/auth/phoneLogin/main' });
  }
};

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

!function(global){"use strict";var undefined,Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag",inModule="object"==typeof module,runtime=global.regeneratorRuntime;if(runtime)inModule&&(module.exports=runtime);else{(runtime=global.regeneratorRuntime=inModule?module.exports:{}).wrap=wrap;var GenStateSuspendedStart="suspendedStart",GenStateSuspendedYield="suspendedYield",GenStateExecuting="executing",GenStateCompleted="completed",ContinueSentinel={},IteratorPrototype={};IteratorPrototype[iteratorSymbol]=function(){return this};var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype,GeneratorFunctionPrototype.constructor=GeneratorFunction,GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction",runtime.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},runtime.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,toStringTagSymbol in genFun||(genFun[toStringTagSymbol]="GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},runtime.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),AsyncIterator.prototype[asyncIteratorSymbol]=function(){return this},runtime.AsyncIterator=AsyncIterator,runtime.async=function(innerFn,outerFn,self,tryLocsList){var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList));return runtime.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){return result.done?result.value:iter.next()})},defineIteratorMethods(Gp),Gp[toStringTagSymbol]="Generator",Gp[iteratorSymbol]=function(){return this},Gp.toString=function(){return"[object Generator]"},runtime.keys=function(object){var keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},runtime.values=values,Context.prototype={constructor:Context,reset:function(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=undefined,this.done=!1,this.delegate=null,this.method="next",this.arg=undefined,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined)},stop:function(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=undefined),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=undefined),ContinueSentinel}}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return generator._invoke=function(innerFn,self,context){var state=GenStateSuspendedStart;return function(method,arg){if(state===GenStateExecuting)throw new Error("Generator is already running");if(state===GenStateCompleted){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if(state===GenStateSuspendedStart)throw state=GenStateCompleted,context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state=GenStateExecuting;var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?GenStateCompleted:GenStateSuspendedYield,record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state=GenStateCompleted,context.method="throw",context.arg=record.arg)}}}(innerFn,self,context),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}function defineIteratorMethods(prototype){["next","throw","return"].forEach(function(method){prototype[method]=function(arg){return this._invoke(method,arg)}})}function AsyncIterator(generator){var previousPromise;this._invoke=function(method,arg){function callInvokeWithMethodAndArg(){return new Promise(function(resolve,reject){!function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==typeof value&&hasOwn.call(value,"__await")?Promise.resolve(value.__await).then(function(value){invoke("next",value,resolve,reject)},function(err){invoke("throw",err,resolve,reject)}):Promise.resolve(value).then(function(unwrapped){result.value=unwrapped,resolve(result)},function(error){return invoke("throw",error,resolve,reject)})}reject(record.arg)}(method,arg,resolve,reject)})}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}}function maybeInvokeDelegate(delegate,context){var method=delegate.iterator[context.method];if(method===undefined){if(context.delegate=null,"throw"===context.method){if(delegate.iterator.return&&(context.method="return",context.arg=undefined,maybeInvokeDelegate(delegate,context),"throw"===context.method))return ContinueSentinel;context.method="throw",context.arg=new TypeError("The iterator does not provide a 'throw' method")}return ContinueSentinel}var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=undefined),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=undefined,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:undefined,done:!0}}}(function(){return this}()||Function("return this")());

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHANGETAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SETACCESSTOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SETMEMBERID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SETUSERINFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SETCACHEID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SETCACHEOBJECT; });

var CHANGETAB = 'CHANGETAB'; //更改tabs

var SETACCESSTOKEN = 'SETACCESSTOKEN'; //存储accessToken

var SETMEMBERID = 'SETMEMBERID'; //存储会员id,退租处理用

var SETUSERINFO = 'SETUSERINFO'; //存储用户信息

var SETCACHEID = 'SETCACHEID'; //临时使用的id，如页面跳转需要的id等

var SETCACHEOBJECT = 'SETCACHEOBJECT'; //临时使用的对象，如页面跳转需要传递的对象等

/***/ })

},[106]);