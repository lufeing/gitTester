!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r(e.emonitor={})}(this,function(e){"use strict";function r(){for(var e=[],r=0;r<36;r++)e[r]="0123456789abcdef".substr(Math.floor(16*Math.random()),1);return e[14]="4",e[19]="0123456789abcdef".substr(3&e[19]|8,1),e[8]=e[13]=e[18]=e[23]="-",e.join("")}const t=Object.prototype.toString,o=Object.prototype.hasOwnProperty,n=e=>"[object Object]"===t.call(e),s=e=>"function"==typeof e,i=(e,r)=>o.call(e,r),a=["s_path","s_uuid","s_traceid","s_guid","s_appid","s_vuserid","hc_pgv_pvid","s_omgid","err_desc"],c=()=>{},l=(e=1)=>Math.random()<=e,p=(e,r,t)=>{let o=null;return function(...n){const s=this;clearTimeout(o),o=setTimeout(function(){e.apply(s,n),!t||t()},r)}},u=(e,r={})=>{const t={},o=[];if(n(r))for(const e in r)-1!==a.indexOf(String(e))?(t[e]=r[e],o.push(e)):console.warn(e,"could not be modify.");return Object.assign({},e,t)},_={SCRIPT:"script",LINK:"link",IMG:"img",AUDIO:"audio",VIDEO:"video",FETCH:"fetch",AJAX:"ajax",PROMISE:"promise"},d=({baseUrl:e,data:r,method:t="GET"})=>{wx.request({url:e,method:t,data:Object.assign({},r),header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){console.log("emonitor数据上报成功",r)},fail:function(){console.log("emonitor数据上报失败")}})},h=()=>{let e=wx.getStorageSync("openid");if(e)return e;let t=wx.getStorageSync("pecker_uuid");return t||(t=r(),wx.setStorageSync("pecker_uuid",t),t)},m=({name:e,url:r})=>{const t=getCurrentPages(),o=t[t.length-1];return e=e.replace(/[\[\]]/g,"\\$&"),o?decodeURIComponent(o.options[e]):""},f=e=>{let r=[];return e.map(e=>{"object"==typeof e?r.push(JSON.stringify(e)):r.push(e)}),r},g=e=>{var r=e.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/),t={};return r&&(t={href:e,protocol:r[1]?r[1].slice(0,-1):r[1],host:r[2],hostname:r[3],port:r[4],path:r[5],search:r[6],hash:r[7]}),t},y=e=>{let r={type:"",url:"",code:"",isErr:!1,source:e};if(!n(e))return r;if(i(e,"err_type")){r.type=e.err_type;try{if(e.err_desc){const t=JSON.parse(e.err_desc);r.url=t.url||t.fileName||e.s_url}else r.url=e.s_url}catch(t){r.url=e.s_url,console.warn(t)}r.isErr=!0}else i(e,"cgiurl")?(r.type="cgi",r.url=e.cgiurl,r.code=e.httpcode):i(e,"resurl")?(r.type="cdn",r.url=e.resurl,r.code=e.httpcode):i(e,"time_domready")?(r.type="pagepf",r.url=e.s_url,r.code=200):i(e,"json_entries")&&(r.type="slowlog",r.url=e.s_url,r.code=200);return r},w=wx.getLogManager();let b=0;class x{constructor({options:e={},baseUrl:r={},openid:t,codekey:o,sampling:n=1,delay:s=2e3,name:i,cgi:a,explicit:c,params:l=[],onBeforeSend:p,maxConsoleNum:u},_){this.options=e,this.errorList=[],this.baseUrl=r,this.sampling=n,this.params=l,this.dealy=s,this.name=i,this.openid=t,this.codekey=o,this.uuid=h(),this.ctx=_,this.explicit=c,this.sysInfo=wx.getSystemInfoSync(),this.onBeforeSend=p,this.cgi=a,this.maxConsoleNum=u}init(){try{this.proxyRequest(),this.proxyLifeCycle(),this.proxyConsole(),this.injectOptions()}catch(e){this.send({err_msg:"mina emonitor init happen error",err_stack:`${e}`,err_function:"mina emonitor init func",err_desc:`${e}`,err_type:"jserror",err_code:``},this.baseUrl.error)}}config(e={}){for(const r in e)this[r]=e[r];return this}getPureOption(e){let r={};for(let t in e)"function"!=typeof e[t]&&(r[t]=e[t]);return r}_reportCgi(e={}){const r=this;if(!r.baseUrl.cgi)return;const{cgiurl:t}=e,{host:o,path:n}=g(t);Math.random()<=r.sampling&&r.send(Object.assign({cgipath:n,cgihost:o,bizcode_server:""},e),r.baseUrl.cgi,!0)}_proxyRequest(e,r){const t=this,o=wx[r],s=n(t.cgi)?t.cgi:{},{okBizmsg:i=!0}=s;return Object.defineProperty(e,r,{writeable:!0,configurable:!0,enumerable:!0,value:function(...e){const n=e[0],s=n.fail,a=+new Date,{host:c}=g(n.url),l="btrace.qq.com"==c;e[0].fail=((...e)=>(l||(t.send({err_msg:`wx.${r} error`,err_stack:`${JSON.stringify(t.getPureOption(n))}`,err_function:`wx.${r} fail callback`,err_desc:`${e[0].errMsg}`,err_type:`${_.AJAX}`,err_code:`[wx.${r}]fail`},t.baseUrl.error,!0),t._reportCgi({cgiurl:n.url,delay:Math.round(+new Date-a),httpcode:"(failed)",bizcode:"",bizmsg:e[0].errMsg,starttime:a})),s?s.apply(this,e):null));const p=n.success;return e[0].success=((...e)=>{var o="";if(!l){if(200!=e[0].statusCode)t.send({err_msg:`wx.${r} error`,err_stack:`${JSON.stringify(t.getPureOption(n))}`,err_function:`wx.${r} success callback`,err_desc:`${e[0].data}`,err_type:`${_.AJAX}`,err_code:`[wx.${r}][statusCode]${e[0].statusCode}`},t.baseUrl.error,!0);else{let s=e[0].data;s&&(void 0!==s.ret?o=s.ret:void 0!==s.code?o=s.code:void 0!==s[t.codekey]&&(o=s[t.codekey]),void 0!==o&&o&&t.send({err_msg:`wx.${r} error`,err_stack:`${JSON.stringify(t.getPureOption(n))}`,err_function:`wx.${r} success callback`,err_desc:`${JSON.stringify(s)}`,err_type:`${_.AJAX}`,err_code:`[wx.${r}][httpsCode]${o}`},t.baseUrl.error,!0))}t._reportCgi({cgiurl:n.url,delay:Math.round(+new Date-a),httpcode:e[0].statusCode,bizcode:o,bizmsg:i?JSON.stringify(e[0].data):"",starttime:a})}return p?p.apply(this,e):null}),o.apply(this,e)}}),e[r]}proxyRequest(){["request","downloadFile"].map(e=>{this._proxyRequest(this.explicit?this:wx,e)})}proxyLifeCycle(){const e=this,r=App,t=function(t){t.__emonitor__=t.__emonitor__||{};const o=t.onError;t.onError=function(...r){return e.send({err_msg:`mina script error or api execute error`,err_stack:`${r[0]}`,err_function:`App onError`,err_desc:``,err_type:`jserror`,err_code:``},e.baseUrl.error,!0),o?o.apply(this,r):null};const n=t.onLaunch;t.onLaunch=function(...e){return t.__emonitor__.launch=+new Date,n?n.apply(this,e):null};const s=t.onShow;t.onShow=function(...e){return t.__emonitor__.launch&&(t.__emonitor__.show=+new Date,t.__emonitor__.launch&&(t.__emonitor__.launchTime=t.__emonitor__.show-t.__emonitor__.launch),t.__emonitor__.launch=0),s?s.apply(this,e):null},r(t)};this.explicit?this.App=t:App=t;const o=Page,n=function(r){var t=new getApp;r.__emonitor__=r.__emonitor__||{};const n=r.onLoad;r.onLoad=function(...e){return r.__emonitor__.load=+new Date,n?n.apply(this,e):null};const s=r.onShow;r.onShow=function(...e){return r.__emonitor__.load&&(r.__emonitor__.show=+new Date),s?s.apply(this,e):null};const i=r.onReady;r.onReady=function(...o){return r.__emonitor__.load&&(r.__emonitor__.ready=+new Date,e.send({time_domready:r.__emonitor__.ready-r.__emonitor__.load,time7:r.__emonitor__.show-r.__emonitor__.load,time8:t.__emonitor__.launchTime},e.baseUrl.page),r.__emonitor__.load=0),i?i.apply(this,o):null},o(r)};this.explicit?this.Page=n:Page=n}proxyConsole(){const e=this,r=e.maxConsoleNum;if("undefined"!=typeof console&&"function"==typeof console.error&&"devtools"!=this.sysInfo.platform){const t=console.error,o=console.log;console.error=((...o)=>{t.apply(this,o),"number"==typeof r&&b++>=r?console.warn("Console log report reaches the maximum limit"):e.send({err_msg:f(o).join(","),err_stack:``,err_function:`console.error`,err_desc:``,err_type:"console",err_code:``},e.baseUrl.error),w.warn(`[${e.openid?e.openid:e.uuid}]`,f(o).join(" "))}),console.log=((...r)=>{o.apply(this,r),w.debug(`[${e.openid?e.openid:e.uuid}]`,f(r).join(" "))})}}injectOptions(){const e=this;e.params.forEach(r=>{e.options[r]=m({name:r})}),"string"==typeof e.options.qq&&e.options.qq.length>0&&(e.options.openid="")}send(e={},r,t=!1){const o=this,{err_type:i="console"}=e;if(l(o.sampling)){const o=this,a="jserror"===i?300:o.delay,c=p(d,a,()=>{o.errorList=[]}),l=getCurrentPages(),_=l[l.length-1]||{},h=this.sysInfo,m=wx.getAccountInfoSync(),f=`${h.model};${h.system};${h.brand};${h.platform};BatteryLevel:${h.batteryLevel};MicroMessenger/${h.version};SDK/${h.SDKVersion};Language/${h.language}`;let g=Object.assign({},this.options,e,{timestamps:(new Date).getTime(),url:`/${_.route}`,ua:f,_dc:Math.random(),dtime:(new Date).getTime(),hh_ua:f,hh_uav:h.version,hh_ref:`https://servicewechat.com/${m.miniProgram.appId}/${h.SDKVersion}/page-frame.html`,s_url:`/${_.route}`,s_host:`wxapp.${o.name}`,s_path:`/${_.route}`,s_protocol:"https",s_browser:"MicroMessenger MiniProgram",s_os:h.system,s_qq:"",s_uuid:this.uuid,s_openid:this.openid||this.uuid,s_app:o.name});const w=o.onBeforeSend;if(s(w))try{const e=w(y(g));if("boolean"==typeof e&&!e)return;n(e)&&(g=u(g,e))}catch(e){console.warn(e)}c({baseUrl:r,data:g,method:t?"POST":"GET"})}}report(...e){this.send({err_msg:f(e).join(","),err_stack:``,err_function:``,err_desc:``,err_type:"custom",err_code:``},this.baseUrl.error)}}e.create=(({options:e={},baseUrl:r,delay:t=2e3,openid:o,codekey:n,cgi:s={},sampling:i=1,name:a="news_miniapp",explicit:l=!1,params:p=["qq","openid","tbkt","ft","pushid"],onBeforeSend:u=c,maxConsoleNum:_}={},d)=>{const h=new x({options:e,baseUrl:r,params:p,delay:t,openid:o,codekey:n,name:a,explicit:l,sampling:i,onBeforeSend:u,cgi:s,maxConsoleNum:_},d);return h.init(),h}),Object.defineProperty(e,"__esModule",{value:!0})});
