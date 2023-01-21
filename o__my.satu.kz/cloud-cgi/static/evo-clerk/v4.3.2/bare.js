!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){"use strict";r.d(e,"b",(function(){return h})),r.d(e,"d",(function(){return f})),r.d(e,"c",(function(){return l})),r.d(e,"e",(function(){return p})),r.d(e,"f",(function(){return d})),r.d(e,"a",(function(){return v}));var n=function(){},i=window,s={error:n,debug:n},o="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",a=o.length,u=i.crypto||i.msCrypto,c=function(){try{return window.localStorage.setItem("___some_test___",42),window.localStorage.removeItem("___some_test___"),window.localStorage}catch(t){return null}}(),h=i.console||s,f=function(){return i.location.href.split("#")[0]};function l(t){for(var e,r=+new Date,n=0;n<7;++n)t+=o.charAt(r%a),r=r/a|0;if(u)t+="C",e=new Uint32Array(6),u.getRandomValues(e);else{t+="R";var i=Math.pow(a,4);e=[];for(var s=0;s<6;++s)e.push(Math.random()*i|0)}for(var c,h=0;h<22;++h)0==(3&h)&&(c=e[h>>2]),t+=o.charAt(c%a),c=c/a|0;return t}function p(){if(c){var t=c.getItem("clerk.client_id");if(null===t){t=l("c-");try{c.setItem("clerk.client_id",t)}catch(t){h.error("E006",t)}var e=c.getItem("clerk.client_id");return e!==t?(h.error("E007"),e?[e,!1]:[t,!0]):[t,!0]}return[t,!1]}return h.error("E005"),[l("t-"),!0]}function d(t){return null!=t}function v(t){return Object.keys(t).reduce((function(e,r){var n=t[r];return d(n)&&(e[r]="object"==typeof n?JSON.stringify(n):n.toString()),e}),{})}},function(t,e,r){var n,i=window;n=r(3).ClerkStats,i.clerkStats=new n(i.CLERK_CONFIG,i.clerkStats)},,function(t,e,r){"use strict";r.r(e),r.d(e,"ClerkStats",(function(){return w}));var n=r(0),i=function(){function t(t,e){this.callback=t,this.events=[],this.timer=null,this.isStarted=!1,this.timeout=e}var e=t.prototype;return e.push=function(t){this.events.push(t)},e.pushWithFlush=function(t){this.push(t),this.isStarted&&!this.timer&&(this.timer=setTimeout(this.flush.bind(this),this.timeout))},e.start=function(){this.isStarted=!0,this.flush()},e.stop=function(){this.isStarted=!1,this.flush()},e.flush=function(){if(this.events.length){var t=this.events.splice(0,this.events.length);this.timer&&(clearTimeout(this.timer),this.timer=null),t.length&&this.callback(t)}},t}();function s(){return(s=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var a=window.parent,u=a.performance,c={category:"clerk",action:"activity",focus_time:0,idle_time:0},h=function(){function t(){a.performance&&(this.reset(),this.attachListeners())}var e,r,n,i=t.prototype;return i.reset=function(t){var e;void 0===t&&(t=!1),this.metrics=s({},c),e=t?+new Date:u.timing.fetchStart,this.lastFocus=e,this.lastBlur=e,this.fetchStart=e,this.metrics.load_start=e},i.attachListeners=function(){var t=this;a.addEventListener("load",(function(){var e=u.timing,r=e.domContentLoadedEventStart,n=e.loadEventStart;t.metrics.dom_loaded=r-t.fetchStart,t.metrics.page_loaded=n-t.fetchStart})),a.addEventListener("beforeunload",(function(){t.metrics.page_unload=+new Date-t.fetchStart})),a.addEventListener("focus",(function(){if(t.lastBlur){t.lastFocus=+new Date;var e=t.lastFocus-t.lastBlur;t.lastBlur=null,t.metrics.idle_time+=e}})),a.addEventListener("blur",(function(){if(t.lastFocus){t.lastBlur=+new Date;var e=t.lastBlur-t.lastFocus;t.lastFocus=null,t.metrics.focus_time+=e}}))},e=t,(r=[{key:"activity",get:function(){return this.metrics}}])&&o(e.prototype,r),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return t<26?t+65:t<52?t+71:t<62?t-4:62===t?43:63===t?47:65}var l=function(t){return function(t){for(var e,r=(3-t.length%3)%3,n="",i=t.length,s=0,o=0;o<i;o++)e=o%3,s|=t[o]<<(16>>>e&24),2!==e&&t.length-o!=1||(n+=String.fromCharCode(f(s>>>18&63),f(s>>>12&63),f(s>>>6&63),f(63&s)),s=0);return 0===r?n:n.substring(0,n.length-r)+(1===r?"=":"==")}(function(t){for(var e,r=t.length,n=null,i=[],s=0;s<r;s++){if((e=t.charCodeAt(s))>55295&&e<57344){if(!n){if(e>56319){i.push(239,191,189);continue}if(s+1===r){i.push(239,191,189);continue}n=e;continue}if(e<56320){i.push(239,191,189),n=e;continue}e=n-55296<<10|e-56320|65536,n=null}else n&&(i.push(239,191,189),n=null);if(e<128)i.push(e);else if(e<2048)i.push(e>>6|192,63&e|128);else if(e<65536)i.push(e>>12|224,e>>6&63|128,63&e|128);else{if(!(e<2097152))throw new Error("Invalid code point");i.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return i}(t))};function p(t,e,r){try{var n=new XMLHttpRequest;return n.onerror=function(t){var e=t.type+":"+t.name+":"+t.target.status+":"+t.target.statusText;return r("E012",e)},n.open("POST",t,!0),n.send(e),!0}catch(t){return r&&r("E013",t),!1}}function d(t){return function(e,r){var n=l(JSON.stringify(e)),i=!0;return i&&!!(i=function(t,e,r){try{if("function"==typeof navigator.sendBeacon)return navigator.sendBeacon(t,e)}catch(t){return r&&r("E018",t),!1}}(t,n,r))||p(t,n,r)}}function v(){return(v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var g=window,m=g.document;function y(t){g.postMessage({clerk:{response:t}},"*")}function b(){m.getElementById("clerk_iframe").contentWindow.postMessage({clerk:{request:"getPageInfo"}},"*")}var w=function(){function t(t,e){var r=this;if(void 0!==t)if(Array.isArray(e)){0,this.push=this.push.bind(this),this.pageInfo=null,this.cachedDimensions=null;var s=t.endpointUrl,o=t.mirrorDimensions,a=void 0===o?[]:o,u=t.eventMethod,c=void 0===u?null:u,f=t.activityMethod,p=void 0===f?null:f,v=t.pageviewMethod,m=void 0===v?null:v,y=t.fingerprintMethod,b=void 0===y?null:y;t.apeironSchema;this.mirrorDimensions=a;var w=function(){return r.pageInfo};this.error=function(t,e){return function(r,i){var s=e(),o=t+"/err.gif";try{var a,u=r.split(":")[0],c=s&&s.page_id;a=i instanceof Error?i.stack||i.toString():""+i,(new Image).src=o+"?w="+u+(c?"&p="+c:"")+(a?"&e="+l(a):""),n.b.error(r,i)}catch(t){}}}(s,w),this.activityTransport=this.senderFactory.call(this,d(s+"/"+(p||"activity")),this.error,w,!1),this.eventTransport=this.senderFactory.call(this,d(s+"/"+(c||"events")),this.error,w,!0),this.fingerprintTransport=this.senderFactory.call(this,d(s+"/"+(b||"fingerprints")),this.error,w,!0),this.pageviewTransport=d(s+"/"+(m||"pageviews")),this.queue=new i(this.eventTransport.bind(this),150),this.metrics=new h,this.initialize(),g.addEventListener("beforeunload",(function(){r.queue.flush(),r.activityTransport([r.metrics.activity])})),e.forEach((function(t){return r.push(t)}))}else n.b.error("E002");else n.b.error("E001")}var e=t.prototype;return e.push=function(t,e){void 0===e&&(e=!1);var r="E003";try{var n=t._;switch(delete t._,n){case"pageview":r="E031",this.processPageview(t);break;case"event":r="E032",this.pushEvent(t,e);break;case"notify":r="E033",t.non_interaction="1",this.pushEvent(t,e);break;case"fingerprint":r="E034 Error sending fingerprint",this.pushFingerprint(t);break;default:return r="E030",void this.error(r,JSON.stringify(t))}}catch(t){this.error(r,t)}},e.extendPageInfo=function(t){this.pageInfo.project=t.project,this.pageInfo.commonDimensions=this.mirrorDimensions.reduce((function(e,r){var i=t[r];return Object(n.f)(i)&&(e[r]="object"==typeof i?JSON.stringify(i):i.toString()),e}),{})},e.processPageview=function(t){if(this.pageInfo)if(this.cachedDimensions){if(t)return void this.error("E050");0,this.pushPageview(this.cachedDimensions),this.extendPageInfo(this.cachedDimensions),this.cachedDimensions=null,this.queue.start()}else t&&(this.queue.isStarted?(this.activityTransport([this.metrics.activity]),this.metrics.reset(!0),this.queue.stop(),this.pageInfo=null,this.cachedDimensions=t,b()):(this.pushPageview(t),this.extendPageInfo(t),this.queue.start()));else{if(this.cachedDimensions)return void this.error("E051");if(!t)return void this.error("E052");0,this.cachedDimensions=t}},e.pushEvent=function(t,e){var r=Object(n.a)(t),i=r.category,s=r.action;i&&s?this.pageInfo&&e?this.eventTransport([r]):this.pageInfo&&!e?this.queue.pushWithFlush(r):this.queue.push(r):this.error("E041")},e.pushFingerprint=function(t){if(0!==Object.keys(t.fingerprint).length)if(t.category)if(t.action){var e=Object(n.a)(t,["fingerprint"]);0,this.pageInfo&&this.fingerprintTransport([e])}else this.error("E063");else this.error("E062");else this.error("E061",t.fingerprint)},e.pushPageview=function(t){var e={};try{v(e,function(){var t={},e=screen;t.screen_vp=e.availWidth+"x"+e.availHeight,t.screen_res=e.width+"x"+e.height;var r=document.body;t.window_size=r.clientWidth+"x"+r.clientHeight;var n=navigator,i=n.mimeTypes&&n.mimeTypes["application/x-java-applet"];i&&(t.java=i.enabledPlugin.name);var s=n.plugins&&n.plugins["Shockwave Flash"];return s&&(t.flash=s.description),t.has_beacon="function"==typeof n.sendBeacon,t.has_cors="withCredentials"in new XMLHttpRequest,t}())}catch(t){this.error("E010",t)}var r=t.$||{},i=r.url,s=void 0===i?null:i,o=r.referrer,a=void 0===o?null:o;delete t.$;var u={url:s||Object(n.d)(),referrer:a||m.referrer,page_info:this.pageInfo,features:e,dimensions:v({clerk_version:"v4.3.3"},Object(n.a)(t))};this.pageviewTransport(u,this.error)},e.senderFactory=function(t,e,r,n){return function(i){var s=r(),o={project:s.project,client_id:s.client_id,page_id:s.page_id,events:i},a=n?{common_dimensions:v({},s.commonDimensions)}:{},u=v({},o,a);return t(u,e)}},e.initialize=function(){var t=this;g.addEventListener("message",(function(e){var r=e.data.clerk;r&&r.pageInfo&&(null===t.pageInfo&&(t.pageInfo=r.pageInfo,y(t.pageInfo)),t.processPageview())})),g.addEventListener("message",(function(e){var r=e.data.clerk;r&&r.request&&"getInfo"===r.request&&null!==t.pageInfo&&y(t.pageInfo)})),b()},t}()}]);
//# sourceMappingURL=bare.js.map