! function(e) {
 var t = {};

 function n(r) {
  if (t[r]) return t[r].exports;
  var o = t[r] = {
   i: r,
   l: !1,
   exports: {}
  };
  return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
 }
 n.m = e, n.c = t, n.d = function(e, t, r) {
  n.o(e, t) || Object.defineProperty(e, t, {
   enumerable: !0,
   get: r
  })
 }, n.r = function(e) {
  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
   value: "Module"
  }), Object.defineProperty(e, "__esModule", {
   value: !0
  })
 }, n.t = function(e, t) {
  if (1 & t && (e = n(e)), 8 & t) return e;
  if (4 & t && "object" == typeof e && e && e.__esModule) return e;
  var r = Object.create(null);
  if (n.r(r), Object.defineProperty(r, "default", {
    enumerable: !0,
    value: e
   }), 2 & t && "string" != typeof e)
   for (var o in e) n.d(r, o, function(t) {
    return e[t]
   }.bind(null, o));
  return r
 }, n.n = function(e) {
  var t = e && e.__esModule ? function() {
   return e.default
  } : function() {
   return e
  };
  return n.d(t, "a", t), t
 }, n.o = function(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t)
 }, n.p = "/", n(n.s = 8)
}([function(e, t, n) {
 "use strict";
 var r = n(3),
  o = n(10),
  i = Object.prototype.toString;

 function a(e) {
  return "[object Array]" === i.call(e)
 }

 function s(e) {
  return null !== e && "object" == typeof e
 }

 function c(e) {
  return "[object Function]" === i.call(e)
 }

 function u(e, t) {
  if (null != e)
   if ("object" != typeof e && (e = [e]), a(e))
    for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
   else
    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
 }
 e.exports = {
  isArray: a,
  isArrayBuffer: function(e) {
   return "[object ArrayBuffer]" === i.call(e)
  },
  isBuffer: o,
  isFormData: function(e) {
   return "undefined" != typeof FormData && e instanceof FormData
  },
  isArrayBufferView: function(e) {
   return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
  },
  isString: function(e) {
   return "string" == typeof e
  },
  isNumber: function(e) {
   return "number" == typeof e
  },
  isObject: s,
  isUndefined: function(e) {
   return void 0 === e
  },
  isDate: function(e) {
   return "[object Date]" === i.call(e)
  },
  isFile: function(e) {
   return "[object File]" === i.call(e)
  },
  isBlob: function(e) {
   return "[object Blob]" === i.call(e)
  },
  isFunction: c,
  isStream: function(e) {
   return s(e) && c(e.pipe)
  },
  isURLSearchParams: function(e) {
   return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
  },
  isStandardBrowserEnv: function() {
   return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
  },
  forEach: u,
  merge: function e() {
   var t = {};

   function n(n, r) {
    "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
   }
   for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
   return t
  },
  extend: function(e, t, n) {
   return u(t, function(t, o) {
    e[o] = n && "function" == typeof t ? r(t, n) : t
   }), e
  },
  trim: function(e) {
   return e.replace(/^\s*/, "").replace(/\s*$/, "")
  }
 }
}, function(e, t, n) {
 e.exports = n(9)
}, function(e, t, n) {
 "use strict";
 (function(t) {
  var r = n(0),
   o = n(13),
   i = {
    "Content-Type": "application/x-www-form-urlencoded"
   };

  function a(e, t) {
   !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
  }
  var s, c = {
   adapter: ("undefined" != typeof XMLHttpRequest ? s = n(4) : void 0 !== t && (s = n(4)), s),
   transformRequest: [function(e, t) {
    return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (a(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (a(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
   }],
   transformResponse: [function(e) {
    if ("string" == typeof e) try {
     e = JSON.parse(e)
    } catch (e) {}
    return e
   }],
   timeout: 0,
   xsrfCookieName: "XSRF-TOKEN",
   xsrfHeaderName: "X-XSRF-TOKEN",
   maxContentLength: -1,
   validateStatus: function(e) {
    return e >= 200 && e < 300
   }
  };
  c.headers = {
   common: {
    Accept: "application/json, text/plain, */*"
   }
  }, r.forEach(["delete", "get", "head"], function(e) {
   c.headers[e] = {}
  }), r.forEach(["post", "put", "patch"], function(e) {
   c.headers[e] = r.merge(i)
  }), e.exports = c
 }).call(this, n(12))
}, function(e, t, n) {
 "use strict";
 e.exports = function(e, t) {
  return function() {
   for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
   return e.apply(t, n)
  }
 }
}, function(e, t, n) {
 "use strict";
 var r = n(0),
  o = n(14),
  i = n(16),
  a = n(17),
  s = n(18),
  c = n(5),
  u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(19);
 e.exports = function(e) {
  return new Promise(function(t, l) {
   var f = e.data,
    d = e.headers;
   r.isFormData(f) && delete d["Content-Type"];
   var p = new XMLHttpRequest,
    h = "onreadystatechange",
    m = !1;
   if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in p || s(e.url) || (p = new window.XDomainRequest, h = "onload", m = !0, p.onprogress = function() {}, p.ontimeout = function() {}), e.auth) {
    var y = e.auth.username || "",
     v = e.auth.password || "";
    d.Authorization = "Basic " + u(y + ":" + v)
   }
   if (p.open(e.method.toUpperCase(), i(e.url, e.params, e.paramsSerializer), !0), p.timeout = e.timeout, p[h] = function() {
     if (p && (4 === p.readyState || m) && (0 !== p.status || p.responseURL && 0 === p.responseURL.indexOf("file:"))) {
      var n = "getAllResponseHeaders" in p ? a(p.getAllResponseHeaders()) : null,
       r = {
        data: e.responseType && "text" !== e.responseType ? p.response : p.responseText,
        status: 1223 === p.status ? 204 : p.status,
        statusText: 1223 === p.status ? "No Content" : p.statusText,
        headers: n,
        config: e,
        request: p
       };
      o(t, l, r), p = null
     }
    }, p.onerror = function() {
     l(c("Network Error", e, null, p)), p = null
    }, p.ontimeout = function() {
     l(c("timeout of " + e.timeout + "ms exceeded", e, "ECONNABORTED", p)), p = null
    }, r.isStandardBrowserEnv()) {
    var g = n(20),
     w = (e.withCredentials || s(e.url)) && e.xsrfCookieName ? g.read(e.xsrfCookieName) : void 0;
    w && (d[e.xsrfHeaderName] = w)
   }
   if ("setRequestHeader" in p && r.forEach(d, function(e, t) {
     void 0 === f && "content-type" === t.toLowerCase() ? delete d[t] : p.setRequestHeader(t, e)
    }), e.withCredentials && (p.withCredentials = !0), e.responseType) try {
    p.responseType = e.responseType
   } catch (t) {
    if ("json" !== e.responseType) throw t
   }
   "function" == typeof e.onDownloadProgress && p.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && p.upload && p.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then(function(e) {
    p && (p.abort(), l(e), p = null)
   }), void 0 === f && (f = null), p.send(f)
  })
 }
}, function(e, t, n) {
 "use strict";
 var r = n(15);
 e.exports = function(e, t, n, o, i) {
  var a = new Error(e);
  return r(a, t, n, o, i)
 }
}, function(e, t, n) {
 "use strict";
 e.exports = function(e) {
  return !(!e || !e.__CANCEL__)
 }
}, function(e, t, n) {
 "use strict";

 function r(e) {
  this.message = e
 }
 r.prototype.toString = function() {
  return "Cancel" + (this.message ? ": " + this.message : "")
 }, r.prototype.__CANCEL__ = !0, e.exports = r
}, function(e, t, n) {
 n(28), e.exports = n(29)
}, function(e, t, n) {
 "use strict";
 var r = n(0),
  o = n(3),
  i = n(11),
  a = n(2);

 function s(e) {
  var t = new i(e),
   n = o(i.prototype.request, t);
  return r.extend(n, i.prototype, t), r.extend(n, t), n
 }
 var c = s(a);
 c.Axios = i, c.create = function(e) {
  return s(r.merge(a, e))
 }, c.Cancel = n(7), c.CancelToken = n(26), c.isCancel = n(6), c.all = function(e) {
  return Promise.all(e)
 }, c.spread = n(27), e.exports = c, e.exports.default = c
}, function(e, t) {
 function n(e) {
  return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
 }
 e.exports = function(e) {
  return null != e && (n(e) || function(e) {
   return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0))
  }(e) || !!e._isBuffer)
 }
}, function(e, t, n) {
 "use strict";
 var r = n(2),
  o = n(0),
  i = n(21),
  a = n(22);

 function s(e) {
  this.defaults = e, this.interceptors = {
   request: new i,
   response: new i
  }
 }
 s.prototype.request = function(e) {
  "string" == typeof e && (e = o.merge({
   url: arguments[0]
  }, arguments[1])), (e = o.merge(r, {
   method: "get"
  }, this.defaults, e)).method = e.method.toLowerCase();
  var t = [a, void 0],
   n = Promise.resolve(e);
  for (this.interceptors.request.forEach(function(e) {
    t.unshift(e.fulfilled, e.rejected)
   }), this.interceptors.response.forEach(function(e) {
    t.push(e.fulfilled, e.rejected)
   }); t.length;) n = n.then(t.shift(), t.shift());
  return n
 }, o.forEach(["delete", "get", "head", "options"], function(e) {
  s.prototype[e] = function(t, n) {
   return this.request(o.merge(n || {}, {
    method: e,
    url: t
   }))
  }
 }), o.forEach(["post", "put", "patch"], function(e) {
  s.prototype[e] = function(t, n, r) {
   return this.request(o.merge(r || {}, {
    method: e,
    url: t,
    data: n
   }))
  }
 }), e.exports = s
}, function(e, t) {
 var n, r, o = e.exports = {};

 function i() {
  throw new Error("setTimeout has not been defined")
 }

 function a() {
  throw new Error("clearTimeout has not been defined")
 }

 function s(e) {
  if (n === setTimeout) return setTimeout(e, 0);
  if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
  try {
   return n(e, 0)
  } catch (t) {
   try {
    return n.call(null, e, 0)
   } catch (t) {
    return n.call(this, e, 0)
   }
  }
 }! function() {
  try {
   n = "function" == typeof setTimeout ? setTimeout : i
  } catch (e) {
   n = i
  }
  try {
   r = "function" == typeof clearTimeout ? clearTimeout : a
  } catch (e) {
   r = a
  }
 }();
 var c, u = [],
  l = !1,
  f = -1;

 function d() {
  l && c && (l = !1, c.length ? u = c.concat(u) : f = -1, u.length && p())
 }



 function h(e, t) {
  this.fun = e, this.array = t
 }

 function m() {}
 o.nextTick = function(e) {
  var t = new Array(arguments.length - 1);
  if (arguments.length > 1)
   for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  u.push(new h(e, t)), 1 !== u.length || l || s(p)
 }, h.prototype.run = function() {
  this.fun.apply(null, this.array)
 }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = m, o.addListener = m, o.once = m, o.off = m, o.removeListener = m, o.removeAllListeners = m, o.emit = m, o.prependListener = m, o.prependOnceListener = m, o.listeners = function(e) {
  return []
 }, o.binding = function(e) {
  throw new Error("process.binding is not supported")
 }, o.cwd = function() {
  return "/"
 }, o.chdir = function(e) {
  throw new Error("process.chdir is not supported")
 }, o.umask = function() {
  return 0
 }
}, function(e, t, n) {
 "use strict";
 var r = n(0);
 e.exports = function(e, t) {
  r.forEach(e, function(n, r) {
   r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
  })
 }
}, function(e, t, n) {
 "use strict";
 var r = n(5);
 e.exports = function(e, t, n) {
  var o = n.config.validateStatus;
  n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
 }
}, function(e, t, n) {
 "use strict";
 e.exports = function(e, t, n, r, o) {
  return e.config = t, n && (e.code = n), e.request = r, e.response = o, e
 }
}, function(e, t, n) {
 "use strict";
 var r = n(0);

 function o(e) {
  return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
 }
 e.exports = function(e, t, n) {
  if (!t) return e;
  var i;
  if (n) i = n(t);
  else if (r.isURLSearchParams(t)) i = t.toString();
  else {
   var a = [];
   r.forEach(t, function(e, t) {
    null != e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function(e) {
     r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), a.push(o(t) + "=" + o(e))
    }))
   }), i = a.join("&")
  }
  return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e
 }
}, function(e, t, n) {
 "use strict";
 var r = n(0),
  o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
 e.exports = function(e) {
  var t, n, i, a = {};
  return e ? (r.forEach(e.split("\n"), function(e) {
   if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
    if (a[t] && o.indexOf(t) >= 0) return;
    a[t] = "set-cookie" === t ? (a[t] ? a[t] : []).concat([n]) : a[t] ? a[t] + ", " + n : n
   }
  }), a) : a
 }
}, function(e, t, n) {
 "use strict";
 var r = n(0);
 e.exports = r.isStandardBrowserEnv() ? function() {
  var e, t = /(msie|trident)/i.test(navigator.userAgent),
   n = document.createElement("a");

  function o(e) {
   var r = e;
   return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
    href: n.href,
    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
    host: n.host,
    search: n.search ? n.search.replace(/^\?/, "") : "",
    hash: n.hash ? n.hash.replace(/^#/, "") : "",
    hostname: n.hostname,
    port: n.port,
    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
   }
  }
  return e = o(window.location.href),
   function(t) {
    var n = r.isString(t) ? o(t) : t;
    return n.protocol === e.protocol && n.host === e.host
   }
 }() : function() {
  return !0
 }
}, function(e, t, n) {
 "use strict";
 var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

 function o() {
  this.message = "String contains an invalid character"
 }
 o.prototype = new Error, o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", e.exports = function(e) {
  for (var t, n, i = String(e), a = "", s = 0, c = r; i.charAt(0 | s) || (c = "=", s % 1); a += c.charAt(63 & t >> 8 - s % 1 * 8)) {
   if ((n = i.charCodeAt(s += .75)) > 255) throw new o;
   t = t << 8 | n
  }
  return a
 }
}, function(e, t, n) {
 "use strict";
 var r = n(0);
 e.exports = r.isStandardBrowserEnv() ? {
  write: function(e, t, n, o, i, a) {
   var s = [];
   s.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(o) && s.push("path=" + o), r.isString(i) && s.push("domain=" + i), !0 === a && s.push("secure"), document.cookie = s.join("; ")
  },
  read: function(e) {
   var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
   return t ? decodeURIComponent(t[3]) : null
  },
  remove: function(e) {
   this.write(e, "", Date.now() - 864e5)
  }
 } : {
  write: function() {},
  read: function() {
   return null
  },
  remove: function() {}
 }
}, function(e, t, n) {
 "use strict";
 var r = n(0);

 function o() {
  this.handlers = []
 }
 o.prototype.use = function(e, t) {
  return this.handlers.push({
   fulfilled: e,
   rejected: t
  }), this.handlers.length - 1
 }, o.prototype.eject = function(e) {
  this.handlers[e] && (this.handlers[e] = null)
 }, o.prototype.forEach = function(e) {
  r.forEach(this.handlers, function(t) {
   null !== t && e(t)
  })
 }, e.exports = o
}, function(e, t, n) {
 "use strict";
 var r = n(0),
  o = n(23),
  i = n(6),
  a = n(2),
  s = n(24),
  c = n(25);

 function u(e) {
  e.cancelToken && e.cancelToken.throwIfRequested()
 }
 e.exports = function(e) {
  return u(e), e.baseURL && !s(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
   delete e.headers[t]
  }), (e.adapter || a.adapter)(e).then(function(t) {
   return u(e), t.data = o(t.data, t.headers, e.transformResponse), t
  }, function(t) {
   return i(t) || (u(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
  })
 }
}, function(e, t, n) {
 "use strict";
 var r = n(0);
 e.exports = function(e, t, n) {
  return r.forEach(n, function(n) {
   e = n(e, t)
  }), e
 }
}, function(e, t, n) {
 "use strict";
 e.exports = function(e) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
 }
}, function(e, t, n) {
 "use strict";
 e.exports = function(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
 }
}, function(e, t, n) {
 "use strict";
 var r = n(7);

 function o(e) {
  if ("function" != typeof e) throw new TypeError("executor must be a function.");
  var t;
  this.promise = new Promise(function(e) {
   t = e
  });
  var n = this;
  e(function(e) {
   n.reason || (n.reason = new r(e), t(n.reason))
  })
 }
 o.prototype.throwIfRequested = function() {
  if (this.reason) throw this.reason
 }, o.source = function() {
  var e;
  return {
   token: new o(function(t) {
    e = t
   }),
   cancel: e
  }
 }, e.exports = o
}, function(e, t, n) {
 "use strict";
 e.exports = function(e) {
  return function(t) {
   return e.apply(null, t)
  }
 }
}, function(e, t, n) {
 "use strict";

 function r(e) {
  return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
   return typeof e
  } : function(e) {
   return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
 }

 function o(e, t) {
  for (var n = 0; n < t.length; n++) {
   var r = t[n];
   r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
  }
 }
 n.r(t);
 var i = function() {
  function e() {
   ! function(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
   }(this, e), this.version = 1, this.name = "Enjin Frontend Services"
  }
  var t, n, i;
  return t = e, (n = [{
   key: "polyfill",
   value: function() {
    Array.prototype.forEach || (Array.prototype.forEach = function(e) {
     var t, n;
     if (null == this) throw new TypeError("this is null or not defined");
     var r = Object(this),
      o = r.length >>> 0;
     if ("function" != typeof e) throw new TypeError(e + " is not a function");
     for (arguments.length > 1 && (t = arguments[1]), n = 0; n < o;) {
      var i;
      n in r && (i = r[n], e.call(t, i, n, r)), n++
     }
    }), NodeList.prototype.forEach || (NodeList.prototype.forEach = function(e) {
     var t, n;
     if (null == this) throw new TypeError("this is null or not defined");
     var r = Object(this),
      o = r.length >>> 0;
     if ("function" != typeof e) throw new TypeError(e + " is not a function");
     for (arguments.length > 1 && (t = arguments[1]), n = 0; n < o;) {
      var i;
      n in r && (i = r[n], e.call(t, i, n, r)), n++
     }
    })
   }
  }, {
   key: "downloadFile",
   value: function(e) {
    var t = document.createElement("A");
    t.href = e, t.download = e.substr(e.lastIndexOf("/") + 1), document.body.appendChild(t), t.click(), document.body.removeChild(t)
   }
  }, {
   key: "toggleCase",
   value: function(e) {
    var t = document.querySelector(".case-study-modal.modal-" + e);
    t.classList.toggle("show");
    t.querySelector("#form-input-pardotDownload");
    t.setAttribute("data-download")
   }
  }, {
   key: "serialize",
   value: function(e, t) {
    var n, o = [];
    for (n in e)
     if (e.hasOwnProperty(n)) {
      var i = t ? t + "[" + n + "]" : n,
       a = e[n];
      o.push(null !== a && "object" === r(a) ? this.serialize(a, i) : encodeURIComponent(i) + "=" + encodeURIComponent(a))
     } return o.join("&")
   }
  }, {
   key: "throttle",
   value: function(e, t) {
    var n;
    return function() {
     var r = arguments;
     n || (e.apply(this, r), n = !0, setTimeout(function() {
      return n = !1
     }, t))
    }
   }
  }, {
   key: "widowless",
   value: function() {
    var e = document.querySelectorAll(".widowless"),
     t = this;
    e.forEach(function(e) {
     var n = e.getAttribute("data-widowless");
     if (e.innerHTML.split(" ").length > 1)
      if (n)
       for (var r = 0; r < n; r++) t.attachment(e);
      else t.attachment(e)
    })
   }
  }, {
   key: "attachment",
   value: function(e) {
    var t = e.innerHTML.split(" ");
    t[t.length - 1], t[t.length - 2];
    t[t.length - 2] += "&nbsp;" + t[t.length - 1], t.pop(), e.innerHTML = t.join(" ")
   }
  }, {
   key: "scrollListeners",
   value: function() {
    var e = document.querySelector(".primary.nav"),
     t = document.querySelector(".primary.logo"),
     n = document.querySelector(".sticky.logo"),
     r = 50;
    var o = document.querySelectorAll(".inview");

    function i() {
     o.forEach(function(e) {
      var t, n;
      t = e.getBoundingClientRect(), n = t.top, t.bottom >= 0 && n <= window.innerHeight ? e.classList.add("yes") : e.classList.remove("yes")
     })
    }
    var a = document.querySelectorAll(".parallaxBackground");
    window.addEventListener("scroll", function() {
     window.pageYOffset > r ? (e.classList.add("fixed"), t.classList.add("hidden"), n.classList.remove("hidden")) : (e.classList.remove("fixed"), e.classList.contains("dark") || (t.classList.remove("hidden"), n.classList.add("hidden"))), i(), a.forEach(function(e) {
      e.style.backgroundPositionY = .07 * window.pageYOffset + "px"
     })
    }), i()
   }
  }, {
   key: "supplementFormAjax",
   value: function() {
    document.querySelectorAll(".follow-form").forEach(function(e) {})
   }
  }, {
   key: "enjinite",
   value: function() {
    enjin.polyfill(), enjin.scrollListeners(), enjin.widowless(), enjin.nav.determineLogoColor()
   }
  }]) && o(t.prototype, n), i && o(t, i), e
 }();

 



 
 
 
 

 function h(e, t) {
  for (var n = 0; n < t.length; n++) {
   var r = t[n];
   r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
  }
 }
 var m = function() {
  function e() {
   ! function(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
   }(this, e), this.verison = "1.0", this.name = "Leadership Unit"
  }
  var t, n, r;
  return t = e, (n = [
  /*{
   key: "videoHover",
   value: function(e) {
    e.querySelector("video").play()
   }
  }, 
  {
   key: "videoLeave",
   value: function(e) {
    var t = e.querySelector("video");
    t.pause(), t.currentTime = 0
   }
  }, */
  {
   key: "clicking",
   value: function(e) {
    e.parentNode.classList.toggle("open")
   }
  }
  ]) && h(t.prototype, n), r && h(t, r), e
 }();





 

 
 window.enjin = new i, enjin.leader = new m
}, function(e, t) {}]);