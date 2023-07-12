function L(s) {
  return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, L(s);
}
function W(s, i) {
  if (!(s instanceof i))
    throw new TypeError("Cannot call a class as a function");
}
function V(s) {
  var i = function(a, r) {
    if (L(a) !== "object" || a === null)
      return a;
    var c = a[Symbol.toPrimitive];
    if (c !== void 0) {
      var f = c.call(a, r || "default");
      if (L(f) !== "object")
        return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (r === "string" ? String : Number)(a);
  }(s, "string");
  return L(i) === "symbol" ? i : String(i);
}
function $(s, i) {
  for (var a = 0; a < i.length; a++) {
    var r = i[a];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(s, V(r.key), r);
  }
}
function q(s, i, a) {
  return i && $(s.prototype, i), a && $(s, a), Object.defineProperty(s, "prototype", { writable: !1 }), s;
}
var X = function() {
  function s() {
    W(this, s), this._listeners = {};
  }
  return q(s, [{ key: "on", value: function(i, a) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    this._listeners[i] || (this._listeners[i] = []), a._priority = parseInt(r) || 0, this._listeners[i].indexOf(a) === -1 && (this._listeners[i].push(a), this._listeners[i].length > 1 && this._listeners[i].sort(this.listenerSorter));
  } }, { key: "listenerSorter", value: function(i, a) {
    return i._priority - a._priority;
  } }, { key: "off", value: function(i, a) {
    if (this._listeners[i] !== void 0)
      if (a !== void 0) {
        var r = this._listeners[i].indexOf(a);
        -1 < r && this._listeners[i].splice(r, 1);
      } else
        delete this._listeners[i];
  } }, { key: "trigger", value: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (typeof i == "string" && (i = { type: i, data: L(a) === "object" && a !== null ? a : {} }), this._listeners[i.type] !== void 0)
      for (var r = this._listeners[i.type].length - 1; r >= 0; r--)
        this._listeners[i.type][r](i);
  } }, { key: "destroy", value: function() {
    this._listeners = {};
  } }]), s;
}();
function F() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  F = function() {
    return s;
  };
  var s = {}, i = Object.prototype, a = i.hasOwnProperty, r = Object.defineProperty || function(e, t, n) {
    e[t] = n.value;
  }, c = typeof Symbol == "function" ? Symbol : {}, f = c.iterator || "@@iterator", g = c.asyncIterator || "@@asyncIterator", y = c.toStringTag || "@@toStringTag";
  function p(e, t, n) {
    return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
  }
  try {
    p({}, "");
  } catch {
    p = function(t, n, u) {
      return t[n] = u;
    };
  }
  function _(e, t, n, u) {
    var o = t && t.prototype instanceof h ? t : h, l = Object.create(o.prototype), d = new M(u || []);
    return r(l, "_invoke", { value: K(e, n, d) }), l;
  }
  function O(e, t, n) {
    try {
      return { type: "normal", arg: e.call(t, n) };
    } catch (u) {
      return { type: "throw", arg: u };
    }
  }
  s.wrap = _;
  var v = {};
  function h() {
  }
  function E() {
  }
  function b() {
  }
  var j = {};
  p(j, f, function() {
    return this;
  });
  var P = Object.getPrototypeOf, x = P && P(P(D([])));
  x && x !== i && a.call(x, f) && (j = x);
  var S = b.prototype = h.prototype = Object.create(j);
  function H(e) {
    ["next", "throw", "return"].forEach(function(t) {
      p(e, t, function(n) {
        return this._invoke(t, n);
      });
    });
  }
  function G(e, t) {
    function n(o, l, d, m) {
      var w = O(e[o], e, l);
      if (w.type !== "throw") {
        var C = w.arg, R = C.value;
        return R && L(R) == "object" && a.call(R, "__await") ? t.resolve(R.__await).then(function(k) {
          n("next", k, d, m);
        }, function(k) {
          n("throw", k, d, m);
        }) : t.resolve(R).then(function(k) {
          C.value = k, d(C);
        }, function(k) {
          return n("throw", k, d, m);
        });
      }
      m(w.arg);
    }
    var u;
    r(this, "_invoke", { value: function(o, l) {
      function d() {
        return new t(function(m, w) {
          n(o, l, m, w);
        });
      }
      return u = u ? u.then(d, d) : d();
    } });
  }
  function K(e, t, n) {
    var u = "suspendedStart";
    return function(o, l) {
      if (u === "executing")
        throw new Error("Generator is already running");
      if (u === "completed") {
        if (o === "throw")
          throw l;
        return Y();
      }
      for (n.method = o, n.arg = l; ; ) {
        var d = n.delegate;
        if (d) {
          var m = J(d, n);
          if (m) {
            if (m === v)
              continue;
            return m;
          }
        }
        if (n.method === "next")
          n.sent = n._sent = n.arg;
        else if (n.method === "throw") {
          if (u === "suspendedStart")
            throw u = "completed", n.arg;
          n.dispatchException(n.arg);
        } else
          n.method === "return" && n.abrupt("return", n.arg);
        u = "executing";
        var w = O(e, t, n);
        if (w.type === "normal") {
          if (u = n.done ? "completed" : "suspendedYield", w.arg === v)
            continue;
          return { value: w.arg, done: n.done };
        }
        w.type === "throw" && (u = "completed", n.method = "throw", n.arg = w.arg);
      }
    };
  }
  function J(e, t) {
    var n = t.method, u = e.iterator[n];
    if (u === void 0)
      return t.delegate = null, n === "throw" && e.iterator.return && (t.method = "return", t.arg = void 0, J(e, t), t.method === "throw") || n !== "return" && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + n + "' method")), v;
    var o = O(u, e.iterator, t.arg);
    if (o.type === "throw")
      return t.method = "throw", t.arg = o.arg, t.delegate = null, v;
    var l = o.arg;
    return l ? l.done ? (t[e.resultName] = l.value, t.next = e.nextLoc, t.method !== "return" && (t.method = "next", t.arg = void 0), t.delegate = null, v) : l : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, v);
  }
  function Q(e) {
    var t = { tryLoc: e[0] };
    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
  }
  function I(e) {
    var t = e.completion || {};
    t.type = "normal", delete t.arg, e.completion = t;
  }
  function M(e) {
    this.tryEntries = [{ tryLoc: "root" }], e.forEach(Q, this), this.reset(!0);
  }
  function D(e) {
    if (e) {
      var t = e[f];
      if (t)
        return t.call(e);
      if (typeof e.next == "function")
        return e;
      if (!isNaN(e.length)) {
        var n = -1, u = function o() {
          for (; ++n < e.length; )
            if (a.call(e, n))
              return o.value = e[n], o.done = !1, o;
          return o.value = void 0, o.done = !0, o;
        };
        return u.next = u;
      }
    }
    return { next: Y };
  }
  function Y() {
    return { value: void 0, done: !0 };
  }
  return E.prototype = b, r(S, "constructor", { value: b, configurable: !0 }), r(b, "constructor", { value: E, configurable: !0 }), E.displayName = p(b, y, "GeneratorFunction"), s.isGeneratorFunction = function(e) {
    var t = typeof e == "function" && e.constructor;
    return !!t && (t === E || (t.displayName || t.name) === "GeneratorFunction");
  }, s.mark = function(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, p(e, y, "GeneratorFunction")), e.prototype = Object.create(S), e;
  }, s.awrap = function(e) {
    return { __await: e };
  }, H(G.prototype), p(G.prototype, g, function() {
    return this;
  }), s.AsyncIterator = G, s.async = function(e, t, n, u, o) {
    o === void 0 && (o = Promise);
    var l = new G(_(e, t, n, u), o);
    return s.isGeneratorFunction(t) ? l : l.next().then(function(d) {
      return d.done ? d.value : l.next();
    });
  }, H(S), p(S, y, "Generator"), p(S, f, function() {
    return this;
  }), p(S, "toString", function() {
    return "[object Generator]";
  }), s.keys = function(e) {
    var t = Object(e), n = [];
    for (var u in t)
      n.push(u);
    return n.reverse(), function o() {
      for (; n.length; ) {
        var l = n.pop();
        if (l in t)
          return o.value = l, o.done = !1, o;
      }
      return o.done = !0, o;
    };
  }, s.values = D, M.prototype = { constructor: M, reset: function(e) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !e)
      for (var t in this)
        t.charAt(0) === "t" && a.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
  }, stop: function() {
    this.done = !0;
    var e = this.tryEntries[0].completion;
    if (e.type === "throw")
      throw e.arg;
    return this.rval;
  }, dispatchException: function(e) {
    if (this.done)
      throw e;
    var t = this;
    function n(w, C) {
      return l.type = "throw", l.arg = e, t.next = w, C && (t.method = "next", t.arg = void 0), !!C;
    }
    for (var u = this.tryEntries.length - 1; u >= 0; --u) {
      var o = this.tryEntries[u], l = o.completion;
      if (o.tryLoc === "root")
        return n("end");
      if (o.tryLoc <= this.prev) {
        var d = a.call(o, "catchLoc"), m = a.call(o, "finallyLoc");
        if (d && m) {
          if (this.prev < o.catchLoc)
            return n(o.catchLoc, !0);
          if (this.prev < o.finallyLoc)
            return n(o.finallyLoc);
        } else if (d) {
          if (this.prev < o.catchLoc)
            return n(o.catchLoc, !0);
        } else {
          if (!m)
            throw new Error("try statement without catch or finally");
          if (this.prev < o.finallyLoc)
            return n(o.finallyLoc);
        }
      }
    }
  }, abrupt: function(e, t) {
    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
      var u = this.tryEntries[n];
      if (u.tryLoc <= this.prev && a.call(u, "finallyLoc") && this.prev < u.finallyLoc) {
        var o = u;
        break;
      }
    }
    o && (e === "break" || e === "continue") && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
    var l = o ? o.completion : {};
    return l.type = e, l.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, v) : this.complete(l);
  }, complete: function(e, t) {
    if (e.type === "throw")
      throw e.arg;
    return e.type === "break" || e.type === "continue" ? this.next = e.arg : e.type === "return" ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : e.type === "normal" && t && (this.next = t), v;
  }, finish: function(e) {
    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
      var n = this.tryEntries[t];
      if (n.finallyLoc === e)
        return this.complete(n.completion, n.afterLoc), I(n), v;
    }
  }, catch: function(e) {
    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
      var n = this.tryEntries[t];
      if (n.tryLoc === e) {
        var u = n.completion;
        if (u.type === "throw") {
          var o = u.arg;
          I(n);
        }
        return o;
      }
    }
    throw new Error("illegal catch attempt");
  }, delegateYield: function(e, t, n) {
    return this.delegate = { iterator: D(e), resultName: t, nextLoc: n }, this.method === "next" && (this.arg = void 0), v;
  } }, s;
}
function U(s, i, a, r, c, f, g) {
  try {
    var y = s[f](g), p = y.value;
  } catch (_) {
    return void a(_);
  }
  y.done ? i(p) : Promise.resolve(p).then(r, c);
}
function z(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function N(s) {
  return N = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, N(s);
}
function B() {
  return B = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(s, i, a) {
    var r = function(f, g) {
      for (; !Object.prototype.hasOwnProperty.call(f, g) && (f = N(f)) !== null; )
        ;
      return f;
    }(s, i);
    if (r) {
      var c = Object.getOwnPropertyDescriptor(r, i);
      return c.get ? c.get.call(arguments.length < 3 ? s : a) : c.value;
    }
  }, B.apply(this, arguments);
}
function A(s, i) {
  return A = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
    return a.__proto__ = r, a;
  }, A(s, i);
}
function Z(s) {
  var i = function() {
    if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
      return !1;
    if (typeof Proxy == "function")
      return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), !0;
    } catch {
      return !1;
    }
  }();
  return function() {
    var a, r = N(s);
    if (i) {
      var c = N(this).constructor;
      a = Reflect.construct(r, arguments, c);
    } else
      a = r.apply(this, arguments);
    return function(f, g) {
      if (g && (L(g) === "object" || typeof g == "function"))
        return g;
      if (g !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return z(f);
    }(this, a);
  };
}
var tt = function(s) {
  (function(r, c) {
    if (typeof c != "function" && c !== null)
      throw new TypeError("Super expression must either be null or a function");
    r.prototype = Object.create(c && c.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), Object.defineProperty(r, "prototype", { writable: !1 }), c && A(r, c);
  })(a, X);
  var i = Z(a);
  function a() {
    var r, c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100 * Math.random() | 0;
    return W(this, a), (r = i.call(this)).id = "BELLHOP:".concat(c), r.connected = !1, r.isChild = !0, r.connecting = !1, r.debug = !1, r.origin = "*", r._sendLater = [], r.iframe = null, r.receive = r.receive.bind(z(r)), r;
  }
  return q(a, [{ key: "receive", value: function(r) {
    if (this.target === r.source)
      if (this.logDebugMessage(!0, r), r.data === "connected")
        this.onConnectionReceived(r.data);
      else {
        var c = r.data;
        if (typeof c == "string")
          try {
            c = JSON.parse(c);
          } catch (f) {
            console.warn("Bellhop error: ", f);
          }
        this.connected && L(c) === "object" && c.type && this.trigger(c);
      }
  } }, { key: "onConnectionReceived", value: function(r) {
    if (this.connecting = !1, this.connected = !0, !this.isChild) {
      if (!this.target)
        return;
      this.target.postMessage(r, this.origin);
    }
    for (var c = 0; c < this._sendLater.length; c++) {
      var f = this._sendLater[c], g = f.type, y = f.data;
      this.send(g, y);
    }
    this._sendLater.length = 0, this.trigger("connected");
  } }, { key: "connect", value: function(r) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*";
    this.connecting || (this.disconnect(), this.connecting = !0, r instanceof HTMLIFrameElement && (this.iframe = r), this.isChild = r === void 0, this.supported = !0, this.isChild && (this.supported = window != r), this.origin = c, window.addEventListener("message", this.receive), this.isChild && (window === this.target ? this.trigger("failed") : this.target.postMessage("connected", this.origin)));
  } }, { key: "disconnect", value: function() {
    this.connected = !1, this.connecting = !1, this.origin = null, this.iframe = null, this.isChild = !0, this._sendLater.length = 0, window.removeEventListener("message", this.receive);
  } }, { key: "send", value: function(r) {
    if (typeof r != "string")
      throw "The event type must be a string";
    var c = { type: r, data: arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {} };
    this.logDebugMessage(!1, c), this.connecting ? this._sendLater.push(c) : this.target.postMessage(JSON.stringify(c), this.origin);
  } }, { key: "fetch", value: function(r, c) {
    var f = this, g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!this.connecting && !this.connected)
      throw "No connection, please call connect() first";
    this.on(r, function p(_) {
      y && f.off(_.type, p), c(_);
    }), this.send(r, g);
  } }, { key: "respond", value: function(r) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], g = this, y = function() {
      var p, _ = (p = F().mark(function O(v) {
        return F().wrap(function(h) {
          for (; ; )
            switch (h.prev = h.next) {
              case 0:
                if (f && g.off(v, y), typeof c != "function") {
                  h.next = 10;
                  break;
                }
                return h.t0 = g, h.t1 = v.type, h.next = 6, c();
              case 6:
                h.t2 = h.sent, h.t0.send.call(h.t0, h.t1, h.t2), h.next = 11;
                break;
              case 10:
                g.send(v.type, c);
              case 11:
              case "end":
                return h.stop();
            }
        }, O);
      }), function() {
        var O = this, v = arguments;
        return new Promise(function(h, E) {
          var b = p.apply(O, v);
          function j(x) {
            U(b, h, E, j, P, "next", x);
          }
          function P(x) {
            U(b, h, E, j, P, "throw", x);
          }
          j(void 0);
        });
      });
      return function(O) {
        return _.apply(this, arguments);
      };
    }();
    this.on(r, y);
  } }, { key: "logDebugMessage", value: function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], c = arguments.length > 1 ? arguments[1] : void 0;
    this.debug && typeof this.debug == "function" ? this.debug({ isChild: this.isChild, received: r, message: c }) : this.debug && console.log("Bellhop Instance (".concat(this.isChild ? "Child" : "Parent", ") ").concat(r ? "Receieved" : "Sent"), c);
  } }, { key: "destroy", value: function() {
    B(N(a.prototype), "destroy", this).call(this), this.disconnect(), this._sendLater.length = 0;
  } }, { key: "target", get: function() {
    return this.isChild ? window.parent : this.iframe.contentWindow;
  } }]), a;
}();
const T = new tt(), et = () => {
  T.connect(), T.send("init");
}, rt = () => {
  const s = `${+/* @__PURE__ */ new Date()}`;
  T.send("login", {
    tag_id: s
  });
}, nt = () => {
  const s = `${+/* @__PURE__ */ new Date()}`;
  T.send("logout", {
    tag_id: s
  });
}, it = (s) => {
  T.on("user_info", ({ data: i }) => {
    s && s(i.user_info);
  });
};
export {
  et as init,
  it as listenUser,
  rt as login,
  nt as logout
};
