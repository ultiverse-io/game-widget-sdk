function L(o) {
  return L = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, L(o);
}
function U(o, i) {
  if (!(o instanceof i))
    throw new TypeError("Cannot call a class as a function");
}
function V(o) {
  var i = function(a, n) {
    if (L(a) !== "object" || a === null)
      return a;
    var c = a[Symbol.toPrimitive];
    if (c !== void 0) {
      var f = c.call(a, n || "default");
      if (L(f) !== "object")
        return f;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (n === "string" ? String : Number)(a);
  }(o, "string");
  return L(i) === "symbol" ? i : String(i);
}
function W(o, i) {
  for (var a = 0; a < i.length; a++) {
    var n = i[a];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(o, V(n.key), n);
  }
}
function q(o, i, a) {
  return i && W(o.prototype, i), a && W(o, a), Object.defineProperty(o, "prototype", { writable: !1 }), o;
}
var X = function() {
  function o() {
    U(this, o), this._listeners = {};
  }
  return q(o, [{ key: "on", value: function(i, a) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    this._listeners[i] || (this._listeners[i] = []), a._priority = parseInt(n) || 0, this._listeners[i].indexOf(a) === -1 && (this._listeners[i].push(a), this._listeners[i].length > 1 && this._listeners[i].sort(this.listenerSorter));
  } }, { key: "listenerSorter", value: function(i, a) {
    return i._priority - a._priority;
  } }, { key: "off", value: function(i, a) {
    if (this._listeners[i] !== void 0)
      if (a !== void 0) {
        var n = this._listeners[i].indexOf(a);
        -1 < n && this._listeners[i].splice(n, 1);
      } else
        delete this._listeners[i];
  } }, { key: "trigger", value: function(i) {
    var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (typeof i == "string" && (i = { type: i, data: L(a) === "object" && a !== null ? a : {} }), this._listeners[i.type] !== void 0)
      for (var n = this._listeners[i.type].length - 1; n >= 0; n--)
        this._listeners[i.type][n](i);
  } }, { key: "destroy", value: function() {
    this._listeners = {};
  } }]), o;
}();
function F() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  F = function() {
    return o;
  };
  var o = {}, i = Object.prototype, a = i.hasOwnProperty, n = Object.defineProperty || function(e, t, r) {
    e[t] = r.value;
  }, c = typeof Symbol == "function" ? Symbol : {}, f = c.iterator || "@@iterator", d = c.asyncIterator || "@@asyncIterator", y = c.toStringTag || "@@toStringTag";
  function p(e, t, r) {
    return Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }), e[t];
  }
  try {
    p({}, "");
  } catch {
    p = function(t, r, u) {
      return t[r] = u;
    };
  }
  function _(e, t, r, u) {
    var s = t && t.prototype instanceof h ? t : h, l = Object.create(s.prototype), g = new G(u || []);
    return n(l, "_invoke", { value: K(e, r, g) }), l;
  }
  function x(e, t, r) {
    try {
      return { type: "normal", arg: e.call(t, r) };
    } catch (u) {
      return { type: "throw", arg: u };
    }
  }
  o.wrap = _;
  var v = {};
  function h() {
  }
  function j() {
  }
  function b() {
  }
  var k = {};
  p(k, f, function() {
    return this;
  });
  var S = Object.getPrototypeOf, E = S && S(S(M([])));
  E && E !== i && a.call(E, f) && (k = E);
  var C = b.prototype = h.prototype = Object.create(k);
  function A(e) {
    ["next", "throw", "return"].forEach(function(t) {
      p(e, t, function(r) {
        return this._invoke(t, r);
      });
    });
  }
  function T(e, t) {
    function r(s, l, g, m) {
      var w = x(e[s], e, l);
      if (w.type !== "throw") {
        var I = w.arg, N = I.value;
        return N && L(N) == "object" && a.call(N, "__await") ? t.resolve(N.__await).then(function(P) {
          r("next", P, g, m);
        }, function(P) {
          r("throw", P, g, m);
        }) : t.resolve(N).then(function(P) {
          I.value = P, g(I);
        }, function(P) {
          return r("throw", P, g, m);
        });
      }
      m(w.arg);
    }
    var u;
    n(this, "_invoke", { value: function(s, l) {
      function g() {
        return new t(function(m, w) {
          r(s, l, m, w);
        });
      }
      return u = u ? u.then(g, g) : g();
    } });
  }
  function K(e, t, r) {
    var u = "suspendedStart";
    return function(s, l) {
      if (u === "executing")
        throw new Error("Generator is already running");
      if (u === "completed") {
        if (s === "throw")
          throw l;
        return J();
      }
      for (r.method = s, r.arg = l; ; ) {
        var g = r.delegate;
        if (g) {
          var m = H(g, r);
          if (m) {
            if (m === v)
              continue;
            return m;
          }
        }
        if (r.method === "next")
          r.sent = r._sent = r.arg;
        else if (r.method === "throw") {
          if (u === "suspendedStart")
            throw u = "completed", r.arg;
          r.dispatchException(r.arg);
        } else
          r.method === "return" && r.abrupt("return", r.arg);
        u = "executing";
        var w = x(e, t, r);
        if (w.type === "normal") {
          if (u = r.done ? "completed" : "suspendedYield", w.arg === v)
            continue;
          return { value: w.arg, done: r.done };
        }
        w.type === "throw" && (u = "completed", r.method = "throw", r.arg = w.arg);
      }
    };
  }
  function H(e, t) {
    var r = t.method, u = e.iterator[r];
    if (u === void 0)
      return t.delegate = null, r === "throw" && e.iterator.return && (t.method = "return", t.arg = void 0, H(e, t), t.method === "throw") || r !== "return" && (t.method = "throw", t.arg = new TypeError("The iterator does not provide a '" + r + "' method")), v;
    var s = x(u, e.iterator, t.arg);
    if (s.type === "throw")
      return t.method = "throw", t.arg = s.arg, t.delegate = null, v;
    var l = s.arg;
    return l ? l.done ? (t[e.resultName] = l.value, t.next = e.nextLoc, t.method !== "return" && (t.method = "next", t.arg = void 0), t.delegate = null, v) : l : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, v);
  }
  function Q(e) {
    var t = { tryLoc: e[0] };
    1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t);
  }
  function D(e) {
    var t = e.completion || {};
    t.type = "normal", delete t.arg, e.completion = t;
  }
  function G(e) {
    this.tryEntries = [{ tryLoc: "root" }], e.forEach(Q, this), this.reset(!0);
  }
  function M(e) {
    if (e) {
      var t = e[f];
      if (t)
        return t.call(e);
      if (typeof e.next == "function")
        return e;
      if (!isNaN(e.length)) {
        var r = -1, u = function s() {
          for (; ++r < e.length; )
            if (a.call(e, r))
              return s.value = e[r], s.done = !1, s;
          return s.value = void 0, s.done = !0, s;
        };
        return u.next = u;
      }
    }
    return { next: J };
  }
  function J() {
    return { value: void 0, done: !0 };
  }
  return j.prototype = b, n(C, "constructor", { value: b, configurable: !0 }), n(b, "constructor", { value: j, configurable: !0 }), j.displayName = p(b, y, "GeneratorFunction"), o.isGeneratorFunction = function(e) {
    var t = typeof e == "function" && e.constructor;
    return !!t && (t === j || (t.displayName || t.name) === "GeneratorFunction");
  }, o.mark = function(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, b) : (e.__proto__ = b, p(e, y, "GeneratorFunction")), e.prototype = Object.create(C), e;
  }, o.awrap = function(e) {
    return { __await: e };
  }, A(T.prototype), p(T.prototype, d, function() {
    return this;
  }), o.AsyncIterator = T, o.async = function(e, t, r, u, s) {
    s === void 0 && (s = Promise);
    var l = new T(_(e, t, r, u), s);
    return o.isGeneratorFunction(t) ? l : l.next().then(function(g) {
      return g.done ? g.value : l.next();
    });
  }, A(C), p(C, y, "Generator"), p(C, f, function() {
    return this;
  }), p(C, "toString", function() {
    return "[object Generator]";
  }), o.keys = function(e) {
    var t = Object(e), r = [];
    for (var u in t)
      r.push(u);
    return r.reverse(), function s() {
      for (; r.length; ) {
        var l = r.pop();
        if (l in t)
          return s.value = l, s.done = !1, s;
      }
      return s.done = !0, s;
    };
  }, o.values = M, G.prototype = { constructor: G, reset: function(e) {
    if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(D), !e)
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
    function r(w, I) {
      return l.type = "throw", l.arg = e, t.next = w, I && (t.method = "next", t.arg = void 0), !!I;
    }
    for (var u = this.tryEntries.length - 1; u >= 0; --u) {
      var s = this.tryEntries[u], l = s.completion;
      if (s.tryLoc === "root")
        return r("end");
      if (s.tryLoc <= this.prev) {
        var g = a.call(s, "catchLoc"), m = a.call(s, "finallyLoc");
        if (g && m) {
          if (this.prev < s.catchLoc)
            return r(s.catchLoc, !0);
          if (this.prev < s.finallyLoc)
            return r(s.finallyLoc);
        } else if (g) {
          if (this.prev < s.catchLoc)
            return r(s.catchLoc, !0);
        } else {
          if (!m)
            throw new Error("try statement without catch or finally");
          if (this.prev < s.finallyLoc)
            return r(s.finallyLoc);
        }
      }
    }
  }, abrupt: function(e, t) {
    for (var r = this.tryEntries.length - 1; r >= 0; --r) {
      var u = this.tryEntries[r];
      if (u.tryLoc <= this.prev && a.call(u, "finallyLoc") && this.prev < u.finallyLoc) {
        var s = u;
        break;
      }
    }
    s && (e === "break" || e === "continue") && s.tryLoc <= t && t <= s.finallyLoc && (s = null);
    var l = s ? s.completion : {};
    return l.type = e, l.arg = t, s ? (this.method = "next", this.next = s.finallyLoc, v) : this.complete(l);
  }, complete: function(e, t) {
    if (e.type === "throw")
      throw e.arg;
    return e.type === "break" || e.type === "continue" ? this.next = e.arg : e.type === "return" ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : e.type === "normal" && t && (this.next = t), v;
  }, finish: function(e) {
    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
      var r = this.tryEntries[t];
      if (r.finallyLoc === e)
        return this.complete(r.completion, r.afterLoc), D(r), v;
    }
  }, catch: function(e) {
    for (var t = this.tryEntries.length - 1; t >= 0; --t) {
      var r = this.tryEntries[t];
      if (r.tryLoc === e) {
        var u = r.completion;
        if (u.type === "throw") {
          var s = u.arg;
          D(r);
        }
        return s;
      }
    }
    throw new Error("illegal catch attempt");
  }, delegateYield: function(e, t, r) {
    return this.delegate = { iterator: M(e), resultName: t, nextLoc: r }, this.method === "next" && (this.arg = void 0), v;
  } }, o;
}
function Y(o, i, a, n, c, f, d) {
  try {
    var y = o[f](d), p = y.value;
  } catch (_) {
    return void a(_);
  }
  y.done ? i(p) : Promise.resolve(p).then(n, c);
}
function z(o) {
  if (o === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return o;
}
function R(o) {
  return R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, R(o);
}
function B() {
  return B = typeof Reflect < "u" && Reflect.get ? Reflect.get.bind() : function(o, i, a) {
    var n = function(f, d) {
      for (; !Object.prototype.hasOwnProperty.call(f, d) && (f = R(f)) !== null; )
        ;
      return f;
    }(o, i);
    if (n) {
      var c = Object.getOwnPropertyDescriptor(n, i);
      return c.get ? c.get.call(arguments.length < 3 ? o : a) : c.value;
    }
  }, B.apply(this, arguments);
}
function $(o, i) {
  return $ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, n) {
    return a.__proto__ = n, a;
  }, $(o, i);
}
function Z(o) {
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
    var a, n = R(o);
    if (i) {
      var c = R(this).constructor;
      a = Reflect.construct(n, arguments, c);
    } else
      a = n.apply(this, arguments);
    return function(f, d) {
      if (d && (L(d) === "object" || typeof d == "function"))
        return d;
      if (d !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
      return z(f);
    }(this, a);
  };
}
var tt = function(o) {
  (function(n, c) {
    if (typeof c != "function" && c !== null)
      throw new TypeError("Super expression must either be null or a function");
    n.prototype = Object.create(c && c.prototype, { constructor: { value: n, writable: !0, configurable: !0 } }), Object.defineProperty(n, "prototype", { writable: !1 }), c && $(n, c);
  })(a, X);
  var i = Z(a);
  function a() {
    var n, c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100 * Math.random() | 0;
    return U(this, a), (n = i.call(this)).id = "BELLHOP:".concat(c), n.connected = !1, n.isChild = !0, n.connecting = !1, n.debug = !1, n.origin = "*", n._sendLater = [], n.iframe = null, n.receive = n.receive.bind(z(n)), n;
  }
  return q(a, [{ key: "receive", value: function(n) {
    if (this.target === n.source)
      if (this.logDebugMessage(!0, n), n.data === "connected")
        this.onConnectionReceived(n.data);
      else {
        var c = n.data;
        if (typeof c == "string")
          try {
            c = JSON.parse(c);
          } catch (f) {
            console.warn("Bellhop error: ", f);
          }
        this.connected && L(c) === "object" && c.type && this.trigger(c);
      }
  } }, { key: "onConnectionReceived", value: function(n) {
    if (this.connecting = !1, this.connected = !0, !this.isChild) {
      if (!this.target)
        return;
      this.target.postMessage(n, this.origin);
    }
    for (var c = 0; c < this._sendLater.length; c++) {
      var f = this._sendLater[c], d = f.type, y = f.data;
      this.send(d, y);
    }
    this._sendLater.length = 0, this.trigger("connected");
  } }, { key: "connect", value: function(n) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "*";
    this.connecting || (this.disconnect(), this.connecting = !0, n instanceof HTMLIFrameElement && (this.iframe = n), this.isChild = n === void 0, this.supported = !0, this.isChild && (this.supported = window != n), this.origin = c, window.addEventListener("message", this.receive), this.isChild && (window === this.target ? this.trigger("failed") : this.target.postMessage("connected", this.origin)));
  } }, { key: "disconnect", value: function() {
    this.connected = !1, this.connecting = !1, this.origin = null, this.iframe = null, this.isChild = !0, this._sendLater.length = 0, window.removeEventListener("message", this.receive);
  } }, { key: "send", value: function(n) {
    if (typeof n != "string")
      throw "The event type must be a string";
    var c = { type: n, data: arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {} };
    this.logDebugMessage(!1, c), this.connecting ? this._sendLater.push(c) : this.target.postMessage(JSON.stringify(c), this.origin);
  } }, { key: "fetch", value: function(n, c) {
    var f = this, d = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, y = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
    if (!this.connecting && !this.connected)
      throw "No connection, please call connect() first";
    this.on(n, function p(_) {
      y && f.off(_.type, p), c(_);
    }), this.send(n, d);
  } }, { key: "respond", value: function(n) {
    var c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, f = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], d = this, y = function() {
      var p, _ = (p = F().mark(function x(v) {
        return F().wrap(function(h) {
          for (; ; )
            switch (h.prev = h.next) {
              case 0:
                if (f && d.off(v, y), typeof c != "function") {
                  h.next = 10;
                  break;
                }
                return h.t0 = d, h.t1 = v.type, h.next = 6, c();
              case 6:
                h.t2 = h.sent, h.t0.send.call(h.t0, h.t1, h.t2), h.next = 11;
                break;
              case 10:
                d.send(v.type, c);
              case 11:
              case "end":
                return h.stop();
            }
        }, x);
      }), function() {
        var x = this, v = arguments;
        return new Promise(function(h, j) {
          var b = p.apply(x, v);
          function k(E) {
            Y(b, h, j, k, S, "next", E);
          }
          function S(E) {
            Y(b, h, j, k, S, "throw", E);
          }
          k(void 0);
        });
      });
      return function(x) {
        return _.apply(this, arguments);
      };
    }();
    this.on(n, y);
  } }, { key: "logDebugMessage", value: function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], c = arguments.length > 1 ? arguments[1] : void 0;
    this.debug && typeof this.debug == "function" ? this.debug({ isChild: this.isChild, received: n, message: c }) : this.debug && console.log("Bellhop Instance (".concat(this.isChild ? "Child" : "Parent", ") ").concat(n ? "Receieved" : "Sent"), c);
  } }, { key: "destroy", value: function() {
    B(R(a.prototype), "destroy", this).call(this), this.disconnect(), this._sendLater.length = 0;
  } }, { key: "target", get: function() {
    return this.isChild ? window.parent : this.iframe.contentWindow;
  } }]), a;
}();
const O = new tt(), et = () => {
  O.connect(), O.send("init");
}, nt = () => {
  const o = `${+/* @__PURE__ */ new Date()}`;
  O.send("login", {
    tag_id: o
  });
}, rt = () => {
  const o = `${+/* @__PURE__ */ new Date()}`;
  O.send("logout", {
    tag_id: o
  });
}, it = (o) => {
  const a = {
    tagId: `${+/* @__PURE__ */ new Date()}`,
    ...o
  };
  return O.send("read_contract", a), a.tagId;
}, ot = (o) => {
  const a = {
    tagId: `${+/* @__PURE__ */ new Date()}`,
    ...o
  };
  return O.send("write_contract", a), a.tagId;
}, at = (o) => {
  O.on("read_contract_callback", ({ data: i }) => {
    o && o(i);
  });
}, st = (o) => {
  O.on("write_contract_callback", ({ data: i }) => {
    o && o(i);
  });
}, ct = (o) => {
  O.on("user_info", ({ data: i }) => {
    o && o(i.user_info);
  });
};
export {
  et as init,
  at as listenReadContractCallback,
  ct as listenUser,
  st as listenWriteContractCallback,
  nt as login,
  rt as logout,
  it as readContract,
  ot as writeContract
};
