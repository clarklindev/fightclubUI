import * as B from "react";
import Ve, { useContext as cr, useRef as xr, useDebugValue as gt, createElement as Dn, useState as Be, useEffect as ur, forwardRef as zn, createContext as Fn } from "react";
var f = {}, Vn = {
  get exports() {
    return f;
  },
  set exports(e) {
    f = e;
  }
}, tr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Bn() {
  if (vt)
    return tr;
  vt = 1;
  var e = Ve, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(l, c, u) {
    var d, m = {}, y = null, k = null;
    u !== void 0 && (y = "" + u), c.key !== void 0 && (y = "" + c.key), c.ref !== void 0 && (k = c.ref);
    for (d in c)
      n.call(c, d) && !a.hasOwnProperty(d) && (m[d] = c[d]);
    if (l && l.defaultProps)
      for (d in c = l.defaultProps, c)
        m[d] === void 0 && (m[d] = c[d]);
    return { $$typeof: r, type: l, key: y, ref: k, props: m, _owner: o.current };
  }
  return tr.Fragment = t, tr.jsx = i, tr.jsxs = i, tr;
}
var nr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function Wn() {
  return bt || (bt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ve, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), E = Symbol.iterator, C = "@@iterator";
    function h(s) {
      if (s === null || typeof s != "object")
        return null;
      var b = E && s[E] || s[C];
      return typeof b == "function" ? b : null;
    }
    var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(s) {
      {
        for (var b = arguments.length, R = new Array(b > 1 ? b - 1 : 0), M = 1; M < b; M++)
          R[M - 1] = arguments[M];
        N("error", s, R);
      }
    }
    function N(s, b, R) {
      {
        var M = j.ReactDebugCurrentFrame, X = M.getStackAddendum();
        X !== "" && (b += "%s", R = R.concat([X]));
        var oe = R.map(function(q) {
          return String(q);
        });
        oe.unshift("Warning: " + b), Function.prototype.apply.call(console[s], console, oe);
      }
    }
    var T = !1, g = !1, ie = !1, we = !1, de = !1, fe;
    fe = Symbol.for("react.module.reference");
    function ye(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === n || s === a || de || s === o || s === u || s === d || we || s === k || T || g || ie || typeof s == "object" && s !== null && (s.$$typeof === y || s.$$typeof === m || s.$$typeof === i || s.$$typeof === l || s.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === fe || s.getModuleId !== void 0));
    }
    function ke(s, b, R) {
      var M = s.displayName;
      if (M)
        return M;
      var X = b.displayName || b.name || "";
      return X !== "" ? R + "(" + X + ")" : R;
    }
    function L(s) {
      return s.displayName || "Context";
    }
    function re(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case u:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case l:
            var b = s;
            return L(b) + ".Consumer";
          case i:
            var R = s;
            return L(R._context) + ".Provider";
          case c:
            return ke(s, s.render, "ForwardRef");
          case m:
            var M = s.displayName || null;
            return M !== null ? M : re(s.type) || "Memo";
          case y: {
            var X = s, oe = X._payload, q = X._init;
            try {
              return re(q(oe));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var te = Object.assign, ne = 0, Ce, pe, se, ve, Se, xe, _;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function P() {
      {
        if (ne === 0) {
          Ce = console.log, pe = console.info, se = console.warn, ve = console.error, Se = console.group, xe = console.groupCollapsed, _ = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: w,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        ne++;
      }
    }
    function $() {
      {
        if (ne--, ne === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: te({}, s, {
              value: Ce
            }),
            info: te({}, s, {
              value: pe
            }),
            warn: te({}, s, {
              value: se
            }),
            error: te({}, s, {
              value: ve
            }),
            group: te({}, s, {
              value: Se
            }),
            groupCollapsed: te({}, s, {
              value: xe
            }),
            groupEnd: te({}, s, {
              value: _
            })
          });
        }
        ne < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var p = j.ReactCurrentDispatcher, F;
    function x(s, b, R) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (X) {
            var M = X.stack.trim().match(/\n( *(at )?)/);
            F = M && M[1] || "";
          }
        return `
` + F + s;
      }
    }
    var K = !1, z;
    {
      var V = typeof WeakMap == "function" ? WeakMap : Map;
      z = new V();
    }
    function v(s, b) {
      if (!s || K)
        return "";
      {
        var R = z.get(s);
        if (R !== void 0)
          return R;
      }
      var M;
      K = !0;
      var X = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var oe;
      oe = p.current, p.current = null, P();
      try {
        if (b) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (Me) {
              M = Me;
            }
            Reflect.construct(s, [], q);
          } else {
            try {
              q.call();
            } catch (Me) {
              M = Me;
            }
            s.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Me) {
            M = Me;
          }
          s();
        }
      } catch (Me) {
        if (Me && M && typeof Me.stack == "string") {
          for (var H = Me.stack.split(`
`), Ee = M.stack.split(`
`), he = H.length - 1, ge = Ee.length - 1; he >= 1 && ge >= 0 && H[he] !== Ee[ge]; )
            ge--;
          for (; he >= 1 && ge >= 0; he--, ge--)
            if (H[he] !== Ee[ge]) {
              if (he !== 1 || ge !== 1)
                do
                  if (he--, ge--, ge < 0 || H[he] !== Ee[ge]) {
                    var _e = `
` + H[he].replace(" at new ", " at ");
                    return s.displayName && _e.includes("<anonymous>") && (_e = _e.replace("<anonymous>", s.displayName)), typeof s == "function" && z.set(s, _e), _e;
                  }
                while (he >= 1 && ge >= 0);
              break;
            }
        }
      } finally {
        K = !1, p.current = oe, $(), Error.prepareStackTrace = X;
      }
      var Ke = s ? s.displayName || s.name : "", mt = Ke ? x(Ke) : "";
      return typeof s == "function" && z.set(s, mt), mt;
    }
    function le(s, b, R) {
      return v(s, !1);
    }
    function A(s) {
      var b = s.prototype;
      return !!(b && b.isReactComponent);
    }
    function D(s, b, R) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return v(s, A(s));
      if (typeof s == "string")
        return x(s);
      switch (s) {
        case u:
          return x("Suspense");
        case d:
          return x("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case c:
            return le(s.render);
          case m:
            return D(s.type, b, R);
          case y: {
            var M = s, X = M._payload, oe = M._init;
            try {
              return D(oe(X), b, R);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, W = {}, me = j.ReactDebugCurrentFrame;
    function Ne(s) {
      if (s) {
        var b = s._owner, R = D(s.type, s._source, b ? b.type : null);
        me.setExtraStackFrame(R);
      } else
        me.setExtraStackFrame(null);
    }
    function be(s, b, R, M, X) {
      {
        var oe = Function.call.bind(ae);
        for (var q in s)
          if (oe(s, q)) {
            var H = void 0;
            try {
              if (typeof s[q] != "function") {
                var Ee = Error((M || "React class") + ": " + R + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ee.name = "Invariant Violation", Ee;
              }
              H = s[q](b, q, M, R, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (he) {
              H = he;
            }
            H && !(H instanceof Error) && (Ne(X), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", R, q, typeof H), Ne(null)), H instanceof Error && !(H.message in W) && (W[H.message] = !0, Ne(X), S("Failed %s type: %s", R, H.message), Ne(null));
          }
      }
    }
    var Ge = Array.isArray;
    function $e(s) {
      return Ge(s);
    }
    function Ae(s) {
      {
        var b = typeof Symbol == "function" && Symbol.toStringTag, R = b && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return R;
      }
    }
    function I(s) {
      try {
        return ue(s), !1;
      } catch {
        return !0;
      }
    }
    function ue(s) {
      return "" + s;
    }
    function qe(s) {
      if (I(s))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ae(s)), ue(s);
    }
    var Ie = j.ReactCurrentOwner, Oe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, st, lt, kr;
    kr = {};
    function Sn(s) {
      if (ae.call(s, "ref")) {
        var b = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function kn(s) {
      if (ae.call(s, "key")) {
        var b = Object.getOwnPropertyDescriptor(s, "key").get;
        if (b && b.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function En(s, b) {
      if (typeof s.ref == "string" && Ie.current && b && Ie.current.stateNode !== b) {
        var R = re(Ie.current.type);
        kr[R] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', re(Ie.current.type), s.ref), kr[R] = !0);
      }
    }
    function Rn(s, b) {
      {
        var R = function() {
          st || (st = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        R.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: R,
          configurable: !0
        });
      }
    }
    function An(s, b) {
      {
        var R = function() {
          lt || (lt = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", b));
        };
        R.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: R,
          configurable: !0
        });
      }
    }
    var _n = function(s, b, R, M, X, oe, q) {
      var H = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: s,
        key: b,
        ref: R,
        props: q,
        // Record the component responsible for creating this element.
        _owner: oe
      };
      return H._store = {}, Object.defineProperty(H._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(H, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.defineProperty(H, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.freeze && (Object.freeze(H.props), Object.freeze(H)), H;
    };
    function jn(s, b, R, M, X) {
      {
        var oe, q = {}, H = null, Ee = null;
        R !== void 0 && (qe(R), H = "" + R), kn(b) && (qe(b.key), H = "" + b.key), Sn(b) && (Ee = b.ref, En(b, X));
        for (oe in b)
          ae.call(b, oe) && !Oe.hasOwnProperty(oe) && (q[oe] = b[oe]);
        if (s && s.defaultProps) {
          var he = s.defaultProps;
          for (oe in he)
            q[oe] === void 0 && (q[oe] = he[oe]);
        }
        if (H || Ee) {
          var ge = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          H && Rn(q, ge), Ee && An(q, ge);
        }
        return _n(s, H, Ee, X, M, Ie.current, q);
      }
    }
    var Er = j.ReactCurrentOwner, ct = j.ReactDebugCurrentFrame;
    function Xe(s) {
      if (s) {
        var b = s._owner, R = D(s.type, s._source, b ? b.type : null);
        ct.setExtraStackFrame(R);
      } else
        ct.setExtraStackFrame(null);
    }
    var Rr;
    Rr = !1;
    function Ar(s) {
      return typeof s == "object" && s !== null && s.$$typeof === r;
    }
    function ut() {
      {
        if (Er.current) {
          var s = re(Er.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Pn(s) {
      {
        if (s !== void 0) {
          var b = s.fileName.replace(/^.*[\\\/]/, ""), R = s.lineNumber;
          return `

Check your code at ` + b + ":" + R + ".";
        }
        return "";
      }
    }
    var dt = {};
    function Tn(s) {
      {
        var b = ut();
        if (!b) {
          var R = typeof s == "string" ? s : s.displayName || s.name;
          R && (b = `

Check the top-level render call using <` + R + ">.");
        }
        return b;
      }
    }
    function ft(s, b) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var R = Tn(b);
        if (dt[R])
          return;
        dt[R] = !0;
        var M = "";
        s && s._owner && s._owner !== Er.current && (M = " It was passed a child from " + re(s._owner.type) + "."), Xe(s), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', R, M), Xe(null);
      }
    }
    function pt(s, b) {
      {
        if (typeof s != "object")
          return;
        if ($e(s))
          for (var R = 0; R < s.length; R++) {
            var M = s[R];
            Ar(M) && ft(M, b);
          }
        else if (Ar(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var X = h(s);
          if (typeof X == "function" && X !== s.entries)
            for (var oe = X.call(s), q; !(q = oe.next()).done; )
              Ar(q.value) && ft(q.value, b);
        }
      }
    }
    function Nn(s) {
      {
        var b = s.type;
        if (b == null || typeof b == "string")
          return;
        var R;
        if (typeof b == "function")
          R = b.propTypes;
        else if (typeof b == "object" && (b.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        b.$$typeof === m))
          R = b.propTypes;
        else
          return;
        if (R) {
          var M = re(b);
          be(R, s.props, "prop", M, s);
        } else if (b.PropTypes !== void 0 && !Rr) {
          Rr = !0;
          var X = re(b);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", X || "Unknown");
        }
        typeof b.getDefaultProps == "function" && !b.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function On(s) {
      {
        for (var b = Object.keys(s.props), R = 0; R < b.length; R++) {
          var M = b[R];
          if (M !== "children" && M !== "key") {
            Xe(s), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), Xe(null);
            break;
          }
        }
        s.ref !== null && (Xe(s), S("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    function ht(s, b, R, M, X, oe) {
      {
        var q = ye(s);
        if (!q) {
          var H = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (H += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ee = Pn(X);
          Ee ? H += Ee : H += ut();
          var he;
          s === null ? he = "null" : $e(s) ? he = "array" : s !== void 0 && s.$$typeof === r ? (he = "<" + (re(s.type) || "Unknown") + " />", H = " Did you accidentally export a JSX literal instead of a component?") : he = typeof s, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", he, H);
        }
        var ge = jn(s, b, R, X, oe);
        if (ge == null)
          return ge;
        if (q) {
          var _e = b.children;
          if (_e !== void 0)
            if (M)
              if ($e(_e)) {
                for (var Ke = 0; Ke < _e.length; Ke++)
                  pt(_e[Ke], s);
                Object.freeze && Object.freeze(_e);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pt(_e, s);
        }
        return s === n ? On(ge) : Nn(ge), ge;
      }
    }
    function $n(s, b, R) {
      return ht(s, b, R, !0);
    }
    function In(s, b, R) {
      return ht(s, b, R, !1);
    }
    var Mn = In, Ln = $n;
    nr.Fragment = n, nr.jsx = Mn, nr.jsxs = Ln;
  }()), nr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Bn() : e.exports = Wn();
})(Vn);
var sr = {}, Hn = {
  get exports() {
    return sr;
  },
  set exports(e) {
    sr = e;
  }
}, Z = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function Un() {
  if (yt)
    return Z;
  yt = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), E;
  E = Symbol.for("react.module.reference");
  function C(h) {
    if (typeof h == "object" && h !== null) {
      var j = h.$$typeof;
      switch (j) {
        case e:
          switch (h = h.type, h) {
            case t:
            case o:
            case n:
            case u:
            case d:
              return h;
            default:
              switch (h = h && h.$$typeof, h) {
                case l:
                case i:
                case c:
                case y:
                case m:
                case a:
                  return h;
                default:
                  return j;
              }
          }
        case r:
          return j;
      }
    }
  }
  return Z.ContextConsumer = i, Z.ContextProvider = a, Z.Element = e, Z.ForwardRef = c, Z.Fragment = t, Z.Lazy = y, Z.Memo = m, Z.Portal = r, Z.Profiler = o, Z.StrictMode = n, Z.Suspense = u, Z.SuspenseList = d, Z.isAsyncMode = function() {
    return !1;
  }, Z.isConcurrentMode = function() {
    return !1;
  }, Z.isContextConsumer = function(h) {
    return C(h) === i;
  }, Z.isContextProvider = function(h) {
    return C(h) === a;
  }, Z.isElement = function(h) {
    return typeof h == "object" && h !== null && h.$$typeof === e;
  }, Z.isForwardRef = function(h) {
    return C(h) === c;
  }, Z.isFragment = function(h) {
    return C(h) === t;
  }, Z.isLazy = function(h) {
    return C(h) === y;
  }, Z.isMemo = function(h) {
    return C(h) === m;
  }, Z.isPortal = function(h) {
    return C(h) === r;
  }, Z.isProfiler = function(h) {
    return C(h) === o;
  }, Z.isStrictMode = function(h) {
    return C(h) === n;
  }, Z.isSuspense = function(h) {
    return C(h) === u;
  }, Z.isSuspenseList = function(h) {
    return C(h) === d;
  }, Z.isValidElementType = function(h) {
    return typeof h == "string" || typeof h == "function" || h === t || h === o || h === n || h === u || h === d || h === k || typeof h == "object" && h !== null && (h.$$typeof === y || h.$$typeof === m || h.$$typeof === a || h.$$typeof === i || h.$$typeof === c || h.$$typeof === E || h.getModuleId !== void 0);
  }, Z.typeOf = C, Z;
}
var J = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function Yn() {
  return xt || (xt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), E = !1, C = !1, h = !1, j = !1, S = !1, N;
    N = Symbol.for("react.module.reference");
    function T(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === t || A === o || S || A === n || A === u || A === d || j || A === k || E || C || h || typeof A == "object" && A !== null && (A.$$typeof === y || A.$$typeof === m || A.$$typeof === a || A.$$typeof === i || A.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === N || A.getModuleId !== void 0));
    }
    function g(A) {
      if (typeof A == "object" && A !== null) {
        var D = A.$$typeof;
        switch (D) {
          case e:
            var ae = A.type;
            switch (ae) {
              case t:
              case o:
              case n:
              case u:
              case d:
                return ae;
              default:
                var W = ae && ae.$$typeof;
                switch (W) {
                  case l:
                  case i:
                  case c:
                  case y:
                  case m:
                  case a:
                    return W;
                  default:
                    return D;
                }
            }
          case r:
            return D;
        }
      }
    }
    var ie = i, we = a, de = e, fe = c, ye = t, ke = y, L = m, re = r, te = o, ne = n, Ce = u, pe = d, se = !1, ve = !1;
    function Se(A) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function xe(A) {
      return ve || (ve = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function _(A) {
      return g(A) === i;
    }
    function w(A) {
      return g(A) === a;
    }
    function P(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function $(A) {
      return g(A) === c;
    }
    function p(A) {
      return g(A) === t;
    }
    function F(A) {
      return g(A) === y;
    }
    function x(A) {
      return g(A) === m;
    }
    function K(A) {
      return g(A) === r;
    }
    function z(A) {
      return g(A) === o;
    }
    function V(A) {
      return g(A) === n;
    }
    function v(A) {
      return g(A) === u;
    }
    function le(A) {
      return g(A) === d;
    }
    J.ContextConsumer = ie, J.ContextProvider = we, J.Element = de, J.ForwardRef = fe, J.Fragment = ye, J.Lazy = ke, J.Memo = L, J.Portal = re, J.Profiler = te, J.StrictMode = ne, J.Suspense = Ce, J.SuspenseList = pe, J.isAsyncMode = Se, J.isConcurrentMode = xe, J.isContextConsumer = _, J.isContextProvider = w, J.isElement = P, J.isForwardRef = $, J.isFragment = p, J.isLazy = F, J.isMemo = x, J.isPortal = K, J.isProfiler = z, J.isStrictMode = V, J.isSuspense = v, J.isSuspenseList = le, J.isValidElementType = T, J.typeOf = g;
  }()), J;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Un() : e.exports = Yn();
})(Hn);
function Gn(e) {
  function r(_, w, P, $, p) {
    for (var F = 0, x = 0, K = 0, z = 0, V, v, le = 0, A = 0, D, ae = D = V = 0, W = 0, me = 0, Ne = 0, be = 0, Ge = P.length, $e = Ge - 1, Ae, I = "", ue = "", qe = "", Ie = "", Oe; W < Ge; ) {
      if (v = P.charCodeAt(W), W === $e && x + z + K + F !== 0 && (x !== 0 && (v = x === 47 ? 10 : 47), z = K = F = 0, Ge++, $e++), x + z + K + F === 0) {
        if (W === $e && (0 < me && (I = I.replace(y, "")), 0 < I.trim().length)) {
          switch (v) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              I += P.charAt(W);
          }
          v = 59;
        }
        switch (v) {
          case 123:
            for (I = I.trim(), V = I.charCodeAt(0), D = 1, be = ++W; W < Ge; ) {
              switch (v = P.charCodeAt(W)) {
                case 123:
                  D++;
                  break;
                case 125:
                  D--;
                  break;
                case 47:
                  switch (v = P.charCodeAt(W + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (ae = W + 1; ae < $e; ++ae)
                          switch (P.charCodeAt(ae)) {
                            case 47:
                              if (v === 42 && P.charCodeAt(ae - 1) === 42 && W + 2 !== ae) {
                                W = ae + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (v === 47) {
                                W = ae + 1;
                                break e;
                              }
                          }
                        W = ae;
                      }
                  }
                  break;
                case 91:
                  v++;
                case 40:
                  v++;
                case 34:
                case 39:
                  for (; W++ < $e && P.charCodeAt(W) !== v; )
                    ;
              }
              if (D === 0)
                break;
              W++;
            }
            switch (D = P.substring(be, W), V === 0 && (V = (I = I.replace(m, "").trim()).charCodeAt(0)), V) {
              case 64:
                switch (0 < me && (I = I.replace(y, "")), v = I.charCodeAt(1), v) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    me = w;
                    break;
                  default:
                    me = Ce;
                }
                if (D = r(w, me, D, v, p + 1), be = D.length, 0 < se && (me = t(Ce, I, Ne), Oe = l(3, D, me, w, re, L, be, v, p, $), I = me.join(""), Oe !== void 0 && (be = (D = Oe.trim()).length) === 0 && (v = 0, D = "")), 0 < be)
                  switch (v) {
                    case 115:
                      I = I.replace(ie, i);
                    case 100:
                    case 109:
                    case 45:
                      D = I + "{" + D + "}";
                      break;
                    case 107:
                      I = I.replace(S, "$1 $2"), D = I + "{" + D + "}", D = ne === 1 || ne === 2 && a("@" + D, 3) ? "@-webkit-" + D + "@" + D : "@" + D;
                      break;
                    default:
                      D = I + D, $ === 112 && (D = (ue += D, ""));
                  }
                else
                  D = "";
                break;
              default:
                D = r(w, t(w, I, Ne), D, $, p + 1);
            }
            qe += D, D = Ne = me = ae = V = 0, I = "", v = P.charCodeAt(++W);
            break;
          case 125:
          case 59:
            if (I = (0 < me ? I.replace(y, "") : I).trim(), 1 < (be = I.length))
              switch (ae === 0 && (V = I.charCodeAt(0), V === 45 || 96 < V && 123 > V) && (be = (I = I.replace(" ", ":")).length), 0 < se && (Oe = l(1, I, w, _, re, L, ue.length, $, p, $)) !== void 0 && (be = (I = Oe.trim()).length) === 0 && (I = "\0\0"), V = I.charCodeAt(0), v = I.charCodeAt(1), V) {
                case 0:
                  break;
                case 64:
                  if (v === 105 || v === 99) {
                    Ie += I + P.charAt(W);
                    break;
                  }
                default:
                  I.charCodeAt(be - 1) !== 58 && (ue += o(I, V, v, I.charCodeAt(2)));
              }
            Ne = me = ae = V = 0, I = "", v = P.charCodeAt(++W);
        }
      }
      switch (v) {
        case 13:
        case 10:
          x === 47 ? x = 0 : 1 + V === 0 && $ !== 107 && 0 < I.length && (me = 1, I += "\0"), 0 < se * Se && l(0, I, w, _, re, L, ue.length, $, p, $), L = 1, re++;
          break;
        case 59:
        case 125:
          if (x + z + K + F === 0) {
            L++;
            break;
          }
        default:
          switch (L++, Ae = P.charAt(W), v) {
            case 9:
            case 32:
              if (z + F + x === 0)
                switch (le) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ae = "";
                    break;
                  default:
                    v !== 32 && (Ae = " ");
                }
              break;
            case 0:
              Ae = "\\0";
              break;
            case 12:
              Ae = "\\f";
              break;
            case 11:
              Ae = "\\v";
              break;
            case 38:
              z + x + F === 0 && (me = Ne = 1, Ae = "\f" + Ae);
              break;
            case 108:
              if (z + x + F + te === 0 && 0 < ae)
                switch (W - ae) {
                  case 2:
                    le === 112 && P.charCodeAt(W - 3) === 58 && (te = le);
                  case 8:
                    A === 111 && (te = A);
                }
              break;
            case 58:
              z + x + F === 0 && (ae = W);
              break;
            case 44:
              x + K + z + F === 0 && (me = 1, Ae += "\r");
              break;
            case 34:
            case 39:
              x === 0 && (z = z === v ? 0 : z === 0 ? v : z);
              break;
            case 91:
              z + x + K === 0 && F++;
              break;
            case 93:
              z + x + K === 0 && F--;
              break;
            case 41:
              z + x + F === 0 && K--;
              break;
            case 40:
              if (z + x + F === 0) {
                if (V === 0)
                  switch (2 * le + 3 * A) {
                    case 533:
                      break;
                    default:
                      V = 1;
                  }
                K++;
              }
              break;
            case 64:
              x + K + z + F + ae + D === 0 && (D = 1);
              break;
            case 42:
            case 47:
              if (!(0 < z + F + K))
                switch (x) {
                  case 0:
                    switch (2 * v + 3 * P.charCodeAt(W + 1)) {
                      case 235:
                        x = 47;
                        break;
                      case 220:
                        be = W, x = 42;
                    }
                    break;
                  case 42:
                    v === 47 && le === 42 && be + 2 !== W && (P.charCodeAt(be + 2) === 33 && (ue += P.substring(be, W + 1)), Ae = "", x = 0);
                }
          }
          x === 0 && (I += Ae);
      }
      A = le, le = v, W++;
    }
    if (be = ue.length, 0 < be) {
      if (me = w, 0 < se && (Oe = l(2, ue, me, _, re, L, be, $, p, $), Oe !== void 0 && (ue = Oe).length === 0))
        return Ie + ue + qe;
      if (ue = me.join(",") + "{" + ue + "}", ne * te !== 0) {
        switch (ne !== 2 || a(ue, 2) || (te = 0), te) {
          case 111:
            ue = ue.replace(T, ":-moz-$1") + ue;
            break;
          case 112:
            ue = ue.replace(N, "::-webkit-input-$1") + ue.replace(N, "::-moz-$1") + ue.replace(N, ":-ms-input-$1") + ue;
        }
        te = 0;
      }
    }
    return Ie + ue + qe;
  }
  function t(_, w, P) {
    var $ = w.trim().split(h);
    w = $;
    var p = $.length, F = _.length;
    switch (F) {
      case 0:
      case 1:
        var x = 0;
        for (_ = F === 0 ? "" : _[0] + " "; x < p; ++x)
          w[x] = n(_, w[x], P).trim();
        break;
      default:
        var K = x = 0;
        for (w = []; x < p; ++x)
          for (var z = 0; z < F; ++z)
            w[K++] = n(_[z] + " ", $[x], P).trim();
    }
    return w;
  }
  function n(_, w, P) {
    var $ = w.charCodeAt(0);
    switch (33 > $ && ($ = (w = w.trim()).charCodeAt(0)), $) {
      case 38:
        return w.replace(j, "$1" + _.trim());
      case 58:
        return _.trim() + w.replace(j, "$1" + _.trim());
      default:
        if (0 < 1 * P && 0 < w.indexOf("\f"))
          return w.replace(j, (_.charCodeAt(0) === 58 ? "" : "$1") + _.trim());
    }
    return _ + w;
  }
  function o(_, w, P, $) {
    var p = _ + ";", F = 2 * w + 3 * P + 4 * $;
    if (F === 944) {
      _ = p.indexOf(":", 9) + 1;
      var x = p.substring(_, p.length - 1).trim();
      return x = p.substring(0, _).trim() + x + ";", ne === 1 || ne === 2 && a(x, 1) ? "-webkit-" + x + x : x;
    }
    if (ne === 0 || ne === 2 && !a(p, 1))
      return p;
    switch (F) {
      case 1015:
        return p.charCodeAt(10) === 97 ? "-webkit-" + p + p : p;
      case 951:
        return p.charCodeAt(3) === 116 ? "-webkit-" + p + p : p;
      case 963:
        return p.charCodeAt(5) === 110 ? "-webkit-" + p + p : p;
      case 1009:
        if (p.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + p + p;
      case 978:
        return "-webkit-" + p + "-moz-" + p + p;
      case 1019:
      case 983:
        return "-webkit-" + p + "-moz-" + p + "-ms-" + p + p;
      case 883:
        if (p.charCodeAt(8) === 45)
          return "-webkit-" + p + p;
        if (0 < p.indexOf("image-set(", 11))
          return p.replace(ke, "$1-webkit-$2") + p;
        break;
      case 932:
        if (p.charCodeAt(4) === 45)
          switch (p.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + p.replace("-grow", "") + "-webkit-" + p + "-ms-" + p.replace("grow", "positive") + p;
            case 115:
              return "-webkit-" + p + "-ms-" + p.replace("shrink", "negative") + p;
            case 98:
              return "-webkit-" + p + "-ms-" + p.replace("basis", "preferred-size") + p;
          }
        return "-webkit-" + p + "-ms-" + p + p;
      case 964:
        return "-webkit-" + p + "-ms-flex-" + p + p;
      case 1023:
        if (p.charCodeAt(8) !== 99)
          break;
        return x = p.substring(p.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + x + "-webkit-" + p + "-ms-flex-pack" + x + p;
      case 1005:
        return E.test(p) ? p.replace(k, ":-webkit-") + p.replace(k, ":-moz-") + p : p;
      case 1e3:
        switch (x = p.substring(13).trim(), w = x.indexOf("-") + 1, x.charCodeAt(0) + x.charCodeAt(w)) {
          case 226:
            x = p.replace(g, "tb");
            break;
          case 232:
            x = p.replace(g, "tb-rl");
            break;
          case 220:
            x = p.replace(g, "lr");
            break;
          default:
            return p;
        }
        return "-webkit-" + p + "-ms-" + x + p;
      case 1017:
        if (p.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (w = (p = _).length - 10, x = (p.charCodeAt(w) === 33 ? p.substring(0, w) : p).substring(_.indexOf(":", 7) + 1).trim(), F = x.charCodeAt(0) + (x.charCodeAt(7) | 0)) {
          case 203:
            if (111 > x.charCodeAt(8))
              break;
          case 115:
            p = p.replace(x, "-webkit-" + x) + ";" + p;
            break;
          case 207:
          case 102:
            p = p.replace(x, "-webkit-" + (102 < F ? "inline-" : "") + "box") + ";" + p.replace(x, "-webkit-" + x) + ";" + p.replace(x, "-ms-" + x + "box") + ";" + p;
        }
        return p + ";";
      case 938:
        if (p.charCodeAt(5) === 45)
          switch (p.charCodeAt(6)) {
            case 105:
              return x = p.replace("-items", ""), "-webkit-" + p + "-webkit-box-" + x + "-ms-flex-" + x + p;
            case 115:
              return "-webkit-" + p + "-ms-flex-item-" + p.replace(de, "") + p;
            default:
              return "-webkit-" + p + "-ms-flex-line-pack" + p.replace("align-content", "").replace(de, "") + p;
          }
        break;
      case 973:
      case 989:
        if (p.charCodeAt(3) !== 45 || p.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (ye.test(_) === !0)
          return (x = _.substring(_.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(_.replace("stretch", "fill-available"), w, P, $).replace(":fill-available", ":stretch") : p.replace(x, "-webkit-" + x) + p.replace(x, "-moz-" + x.replace("fill-", "")) + p;
        break;
      case 962:
        if (p = "-webkit-" + p + (p.charCodeAt(5) === 102 ? "-ms-" + p : "") + p, P + $ === 211 && p.charCodeAt(13) === 105 && 0 < p.indexOf("transform", 10))
          return p.substring(0, p.indexOf(";", 27) + 1).replace(C, "$1-webkit-$2") + p;
    }
    return p;
  }
  function a(_, w) {
    var P = _.indexOf(w === 1 ? ":" : "{"), $ = _.substring(0, w !== 3 ? P : 10);
    return P = _.substring(P + 1, _.length - 1), ve(w !== 2 ? $ : $.replace(fe, "$1"), P, w);
  }
  function i(_, w) {
    var P = o(w, w.charCodeAt(0), w.charCodeAt(1), w.charCodeAt(2));
    return P !== w + ";" ? P.replace(we, " or ($1)").substring(4) : "(" + w + ")";
  }
  function l(_, w, P, $, p, F, x, K, z, V) {
    for (var v = 0, le = w, A; v < se; ++v)
      switch (A = pe[v].call(d, _, le, P, $, p, F, x, K, z, V)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          le = A;
      }
    if (le !== w)
      return le;
  }
  function c(_) {
    switch (_) {
      case void 0:
      case null:
        se = pe.length = 0;
        break;
      default:
        if (typeof _ == "function")
          pe[se++] = _;
        else if (typeof _ == "object")
          for (var w = 0, P = _.length; w < P; ++w)
            c(_[w]);
        else
          Se = !!_ | 0;
    }
    return c;
  }
  function u(_) {
    return _ = _.prefix, _ !== void 0 && (ve = null, _ ? typeof _ != "function" ? ne = 1 : (ne = 2, ve = _) : ne = 0), u;
  }
  function d(_, w) {
    var P = _;
    if (33 > P.charCodeAt(0) && (P = P.trim()), xe = P, P = [xe], 0 < se) {
      var $ = l(-1, w, P, P, re, L, 0, 0, 0, 0);
      $ !== void 0 && typeof $ == "string" && (w = $);
    }
    var p = r(Ce, P, w, 0, 0);
    return 0 < se && ($ = l(-2, p, P, P, re, L, p.length, 0, 0, 0), $ !== void 0 && (p = $)), xe = "", te = 0, L = re = 1, p;
  }
  var m = /^\0+/g, y = /[\0\r\f]/g, k = /: */g, E = /zoo|gra/, C = /([,: ])(transform)/g, h = /,\r+?/g, j = /([\t\r\n ])*\f?&/g, S = /@(k\w+)\s*(\S*)\s*/, N = /::(place)/g, T = /:(read-only)/g, g = /[svh]\w+-[tblr]{2}/, ie = /\(\s*(.*)\s*\)/g, we = /([\s\S]*?);/g, de = /-self|flex-/g, fe = /[^]*?(:[rp][el]a[\w-]+)[^]*/, ye = /stretch|:\s*\w+\-(?:conte|avail)/, ke = /([^-])(image-set\()/, L = 1, re = 1, te = 0, ne = 1, Ce = [], pe = [], se = 0, ve = null, Se = 0, xe = "";
  return d.use = c, d.set = u, e !== void 0 && u(e), d;
}
var qn = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Xn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Kn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, wt = /* @__PURE__ */ Xn(
  function(e) {
    return Kn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Or = {}, Zn = {
  get exports() {
    return Or;
  },
  set exports(e) {
    Or = e;
  }
}, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ct;
function Jn() {
  if (Ct)
    return Q;
  Ct = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
  function N(g) {
    if (typeof g == "object" && g !== null) {
      var ie = g.$$typeof;
      switch (ie) {
        case r:
          switch (g = g.type, g) {
            case c:
            case u:
            case n:
            case a:
            case o:
            case m:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case l:
                case d:
                case E:
                case k:
                case i:
                  return g;
                default:
                  return ie;
              }
          }
        case t:
          return ie;
      }
    }
  }
  function T(g) {
    return N(g) === u;
  }
  return Q.AsyncMode = c, Q.ConcurrentMode = u, Q.ContextConsumer = l, Q.ContextProvider = i, Q.Element = r, Q.ForwardRef = d, Q.Fragment = n, Q.Lazy = E, Q.Memo = k, Q.Portal = t, Q.Profiler = a, Q.StrictMode = o, Q.Suspense = m, Q.isAsyncMode = function(g) {
    return T(g) || N(g) === c;
  }, Q.isConcurrentMode = T, Q.isContextConsumer = function(g) {
    return N(g) === l;
  }, Q.isContextProvider = function(g) {
    return N(g) === i;
  }, Q.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === r;
  }, Q.isForwardRef = function(g) {
    return N(g) === d;
  }, Q.isFragment = function(g) {
    return N(g) === n;
  }, Q.isLazy = function(g) {
    return N(g) === E;
  }, Q.isMemo = function(g) {
    return N(g) === k;
  }, Q.isPortal = function(g) {
    return N(g) === t;
  }, Q.isProfiler = function(g) {
    return N(g) === a;
  }, Q.isStrictMode = function(g) {
    return N(g) === o;
  }, Q.isSuspense = function(g) {
    return N(g) === m;
  }, Q.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === n || g === u || g === a || g === o || g === m || g === y || typeof g == "object" && g !== null && (g.$$typeof === E || g.$$typeof === k || g.$$typeof === i || g.$$typeof === l || g.$$typeof === d || g.$$typeof === h || g.$$typeof === j || g.$$typeof === S || g.$$typeof === C);
  }, Q.typeOf = N, Q;
}
var ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function Qn() {
  return St || (St = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, m = e ? Symbol.for("react.suspense") : 60113, y = e ? Symbol.for("react.suspense_list") : 60120, k = e ? Symbol.for("react.memo") : 60115, E = e ? Symbol.for("react.lazy") : 60116, C = e ? Symbol.for("react.block") : 60121, h = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, S = e ? Symbol.for("react.scope") : 60119;
    function N(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === u || v === a || v === o || v === m || v === y || typeof v == "object" && v !== null && (v.$$typeof === E || v.$$typeof === k || v.$$typeof === i || v.$$typeof === l || v.$$typeof === d || v.$$typeof === h || v.$$typeof === j || v.$$typeof === S || v.$$typeof === C);
    }
    function T(v) {
      if (typeof v == "object" && v !== null) {
        var le = v.$$typeof;
        switch (le) {
          case r:
            var A = v.type;
            switch (A) {
              case c:
              case u:
              case n:
              case a:
              case o:
              case m:
                return A;
              default:
                var D = A && A.$$typeof;
                switch (D) {
                  case l:
                  case d:
                  case E:
                  case k:
                  case i:
                    return D;
                  default:
                    return le;
                }
            }
          case t:
            return le;
        }
      }
    }
    var g = c, ie = u, we = l, de = i, fe = r, ye = d, ke = n, L = E, re = k, te = t, ne = a, Ce = o, pe = m, se = !1;
    function ve(v) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Se(v) || T(v) === c;
    }
    function Se(v) {
      return T(v) === u;
    }
    function xe(v) {
      return T(v) === l;
    }
    function _(v) {
      return T(v) === i;
    }
    function w(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }
    function P(v) {
      return T(v) === d;
    }
    function $(v) {
      return T(v) === n;
    }
    function p(v) {
      return T(v) === E;
    }
    function F(v) {
      return T(v) === k;
    }
    function x(v) {
      return T(v) === t;
    }
    function K(v) {
      return T(v) === a;
    }
    function z(v) {
      return T(v) === o;
    }
    function V(v) {
      return T(v) === m;
    }
    ee.AsyncMode = g, ee.ConcurrentMode = ie, ee.ContextConsumer = we, ee.ContextProvider = de, ee.Element = fe, ee.ForwardRef = ye, ee.Fragment = ke, ee.Lazy = L, ee.Memo = re, ee.Portal = te, ee.Profiler = ne, ee.StrictMode = Ce, ee.Suspense = pe, ee.isAsyncMode = ve, ee.isConcurrentMode = Se, ee.isContextConsumer = xe, ee.isContextProvider = _, ee.isElement = w, ee.isForwardRef = P, ee.isFragment = $, ee.isLazy = p, ee.isMemo = F, ee.isPortal = x, ee.isProfiler = K, ee.isStrictMode = z, ee.isSuspense = V, ee.isValidElementType = N, ee.typeOf = T;
  }()), ee;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Jn() : e.exports = Qn();
})(Zn);
var Yr = Or, eo = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, ro = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, to = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Gt = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Gr = {};
Gr[Yr.ForwardRef] = to;
Gr[Yr.Memo] = Gt;
function kt(e) {
  return Yr.isMemo(e) ? Gt : Gr[e.$$typeof] || eo;
}
var no = Object.defineProperty, oo = Object.getOwnPropertyNames, Et = Object.getOwnPropertySymbols, ao = Object.getOwnPropertyDescriptor, io = Object.getPrototypeOf, Rt = Object.prototype;
function qt(e, r, t) {
  if (typeof r != "string") {
    if (Rt) {
      var n = io(r);
      n && n !== Rt && qt(e, n, t);
    }
    var o = oo(r);
    Et && (o = o.concat(Et(r)));
    for (var a = kt(e), i = kt(r), l = 0; l < o.length; ++l) {
      var c = o[l];
      if (!ro[c] && !(t && t[c]) && !(i && i[c]) && !(a && a[c])) {
        var u = ao(r, c);
        try {
          no(e, c, u);
        } catch {
        }
      }
    }
  }
  return e;
}
var so = qt;
function Le() {
  return (Le = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }).apply(this, arguments);
}
var At = function(e, r) {
  for (var t = [e[0]], n = 0, o = r.length; n < o; n += 1)
    t.push(r[n], e[n + 1]);
  return t;
}, $r = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !sr.typeOf(e);
}, br = Object.freeze([]), ze = Object.freeze({});
function lr(e) {
  return typeof e == "function";
}
function Ir(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function qr(e) {
  return e && typeof e.styledComponentId == "string";
}
var Ze = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Xr = typeof window < "u" && "HTMLElement" in window, lo = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), co = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function uo() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], r = [], t = 1, n = arguments.length; t < n; t += 1)
    r.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return r.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Qe(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(uo.apply(void 0, [co[e]].concat(t)).trim());
}
var fo = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var r = e.prototype;
  return r.indexOfGroup = function(t) {
    for (var n = 0, o = 0; o < t; o++)
      n += this.groupSizes[o];
    return n;
  }, r.insertRules = function(t, n) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, i = a; t >= i; )
        (i <<= 1) < 0 && Qe(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var l = a; l < i; l++)
        this.groupSizes[l] = 0;
    }
    for (var c = this.indexOfGroup(t + 1), u = 0, d = n.length; u < d; u++)
      this.tag.insertRule(c, n[u]) && (this.groupSizes[t]++, c++);
  }, r.clearGroup = function(t) {
    if (t < this.length) {
      var n = this.groupSizes[t], o = this.indexOfGroup(t), a = o + n;
      this.groupSizes[t] = 0;
      for (var i = o; i < a; i++)
        this.tag.deleteRule(o);
    }
  }, r.getGroup = function(t) {
    var n = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return n;
    for (var o = this.groupSizes[t], a = this.indexOfGroup(t), i = a + o, l = a; l < i; l++)
      n += this.tag.getRule(l) + `/*!sc*/
`;
    return n;
  }, e;
}(), gr = /* @__PURE__ */ new Map(), yr = /* @__PURE__ */ new Map(), ir = 1, fr = function(e) {
  if (gr.has(e))
    return gr.get(e);
  for (; yr.has(ir); )
    ir++;
  var r = ir++;
  return process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > 1 << 30) && Qe(16, "" + r), gr.set(e, r), yr.set(r, e), r;
}, po = function(e) {
  return yr.get(e);
}, ho = function(e, r) {
  r >= ir && (ir = r + 1), gr.set(e, r), yr.set(r, e);
}, mo = "style[" + Ze + '][data-styled-version="5.3.10"]', go = new RegExp("^" + Ze + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), vo = function(e, r, t) {
  for (var n, o = t.split(","), a = 0, i = o.length; a < i; a++)
    (n = o[a]) && e.registerName(r, n);
}, bo = function(e, r) {
  for (var t = (r.textContent || "").split(`/*!sc*/
`), n = [], o = 0, a = t.length; o < a; o++) {
    var i = t[o].trim();
    if (i) {
      var l = i.match(go);
      if (l) {
        var c = 0 | parseInt(l[1], 10), u = l[2];
        c !== 0 && (ho(u, c), vo(e, u, l[3]), e.getTag().insertRules(c, n)), n.length = 0;
      } else
        n.push(i);
    }
  }
}, yo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Xt = function(e) {
  var r = document.head, t = e || r, n = document.createElement("style"), o = function(l) {
    for (var c = l.childNodes, u = c.length; u >= 0; u--) {
      var d = c[u];
      if (d && d.nodeType === 1 && d.hasAttribute(Ze))
        return d;
    }
  }(t), a = o !== void 0 ? o.nextSibling : null;
  n.setAttribute(Ze, "active"), n.setAttribute("data-styled-version", "5.3.10");
  var i = yo();
  return i && n.setAttribute("nonce", i), t.insertBefore(n, a), n;
}, xo = function() {
  function e(t) {
    var n = this.element = Xt(t);
    n.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var a = document.styleSheets, i = 0, l = a.length; i < l; i++) {
        var c = a[i];
        if (c.ownerNode === o)
          return c;
      }
      Qe(17);
    }(n), this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    try {
      return this.sheet.insertRule(n, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, r.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, r.getRule = function(t) {
    var n = this.sheet.cssRules[t];
    return n !== void 0 && typeof n.cssText == "string" ? n.cssText : "";
  }, e;
}(), wo = function() {
  function e(t) {
    var n = this.element = Xt(t);
    this.nodes = n.childNodes, this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(n), a = this.nodes[t];
      return this.element.insertBefore(o, a || null), this.length++, !0;
    }
    return !1;
  }, r.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), Co = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var r = e.prototype;
  return r.insertRule = function(t, n) {
    return t <= this.length && (this.rules.splice(t, 0, n), this.length++, !0);
  }, r.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, r.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), _t = Xr, So = { isServer: !Xr, useCSSOMInjection: !lo }, Kt = function() {
  function e(t, n, o) {
    t === void 0 && (t = ze), n === void 0 && (n = {}), this.options = Le({}, So, {}, t), this.gs = n, this.names = new Map(o), this.server = !!t.isServer, !this.server && Xr && _t && (_t = !1, function(a) {
      for (var i = document.querySelectorAll(mo), l = 0, c = i.length; l < c; l++) {
        var u = i[l];
        u && u.getAttribute(Ze) !== "active" && (bo(a, u), u.parentNode && u.parentNode.removeChild(u));
      }
    }(this));
  }
  e.registerId = function(t) {
    return fr(t);
  };
  var r = e.prototype;
  return r.reconstructWithOptions = function(t, n) {
    return n === void 0 && (n = !0), new e(Le({}, this.options, {}, t), this.gs, n && this.names || void 0);
  }, r.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, r.getTag = function() {
    return this.tag || (this.tag = (o = (n = this.options).isServer, a = n.useCSSOMInjection, i = n.target, t = o ? new Co(i) : a ? new xo(i) : new wo(i), new fo(t)));
    var t, n, o, a, i;
  }, r.hasNameForId = function(t, n) {
    return this.names.has(t) && this.names.get(t).has(n);
  }, r.registerName = function(t, n) {
    if (fr(t), this.names.has(t))
      this.names.get(t).add(n);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(n), this.names.set(t, o);
    }
  }, r.insertRules = function(t, n, o) {
    this.registerName(t, n), this.getTag().insertRules(fr(t), o);
  }, r.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, r.clearRules = function(t) {
    this.getTag().clearGroup(fr(t)), this.clearNames(t);
  }, r.clearTag = function() {
    this.tag = void 0;
  }, r.toString = function() {
    return function(t) {
      for (var n = t.getTag(), o = n.length, a = "", i = 0; i < o; i++) {
        var l = po(i);
        if (l !== void 0) {
          var c = t.names.get(l), u = n.getGroup(i);
          if (c && u && c.size) {
            var d = Ze + ".g" + i + '[id="' + l + '"]', m = "";
            c !== void 0 && c.forEach(function(y) {
              y.length > 0 && (m += y + ",");
            }), a += "" + u + d + '{content:"' + m + `"}/*!sc*/
`;
          }
        }
      }
      return a;
    }(this);
  }, e;
}(), ko = /(a)(d)/gi, jt = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Mr(e) {
  var r, t = "";
  for (r = Math.abs(e); r > 52; r = r / 52 | 0)
    t = jt(r % 52) + t;
  return (jt(r % 52) + t).replace(ko, "$1-$2");
}
var We = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Zt = function(e) {
  return We(5381, e);
};
function Eo(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (lr(t) && !qr(t))
      return !1;
  }
  return !0;
}
var Ro = Zt("5.3.10"), Ao = function() {
  function e(r, t, n) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (n === void 0 || n.isStatic) && Eo(r), this.componentId = t, this.baseHash = We(Ro, t), this.baseStyle = n, Kt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, n) {
    var o = this.componentId, a = [];
    if (this.baseStyle && a.push(this.baseStyle.generateAndInjectStyles(r, t, n)), this.isStatic && !n.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        a.push(this.staticRulesId);
      else {
        var i = Je(this.rules, r, t, n).join(""), l = Mr(We(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, l)) {
          var c = n(i, "." + l, void 0, o);
          t.insertRules(o, l, c);
        }
        a.push(l), this.staticRulesId = l;
      }
    else {
      for (var u = this.rules.length, d = We(this.baseHash, n.hash), m = "", y = 0; y < u; y++) {
        var k = this.rules[y];
        if (typeof k == "string")
          m += k, process.env.NODE_ENV !== "production" && (d = We(d, k + y));
        else if (k) {
          var E = Je(k, r, t, n), C = Array.isArray(E) ? E.join("") : E;
          d = We(d, C + y), m += C;
        }
      }
      if (m) {
        var h = Mr(d >>> 0);
        if (!t.hasNameForId(o, h)) {
          var j = n(m, "." + h, void 0, o);
          t.insertRules(o, h, j);
        }
        a.push(h);
      }
    }
    return a.join(" ");
  }, e;
}(), _o = /^\s*\/\/.*$/gm, jo = [":", "[", ".", "#"];
function Po(e) {
  var r, t, n, o, a = e === void 0 ? ze : e, i = a.options, l = i === void 0 ? ze : i, c = a.plugins, u = c === void 0 ? br : c, d = new Gn(l), m = [], y = function(C) {
    function h(j) {
      if (j)
        try {
          C(j + "}");
        } catch {
        }
    }
    return function(j, S, N, T, g, ie, we, de, fe, ye) {
      switch (j) {
        case 1:
          if (fe === 0 && S.charCodeAt(0) === 64)
            return C(S + ";"), "";
          break;
        case 2:
          if (de === 0)
            return S + "/*|*/";
          break;
        case 3:
          switch (de) {
            case 102:
            case 112:
              return C(N[0] + S), "";
            default:
              return S + (ye === 0 ? "/*|*/" : "");
          }
        case -2:
          S.split("/*|*/}").forEach(h);
      }
    };
  }(function(C) {
    m.push(C);
  }), k = function(C, h, j) {
    return h === 0 && jo.indexOf(j[t.length]) !== -1 || j.match(o) ? C : "." + r;
  };
  function E(C, h, j, S) {
    S === void 0 && (S = "&");
    var N = C.replace(_o, ""), T = h && j ? j + " " + h + " { " + N + " }" : N;
    return r = S, t = h, n = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(j || !h ? "" : h, T);
  }
  return d.use([].concat(u, [function(C, h, j) {
    C === 2 && j.length && j[0].lastIndexOf(t) > 0 && (j[0] = j[0].replace(n, k));
  }, y, function(C) {
    if (C === -2) {
      var h = m;
      return m = [], h;
    }
  }])), E.hash = u.length ? u.reduce(function(C, h) {
    return h.name || Qe(15), We(C, h.name);
  }, 5381).toString() : "", E;
}
var Jt = Ve.createContext();
Jt.Consumer;
var Qt = Ve.createContext(), To = (Qt.Consumer, new Kt()), Lr = Po();
function No() {
  return cr(Jt) || To;
}
function Oo() {
  return cr(Qt) || Lr;
}
var en = function() {
  function e(r, t) {
    var n = this;
    this.inject = function(o, a) {
      a === void 0 && (a = Lr);
      var i = n.name + a.hash;
      o.hasNameForId(n.id, i) || o.insertRules(n.id, i, a(n.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Qe(12, String(n.name));
    }, this.name = r, this.id = "sc-keyframes-" + r, this.rules = t;
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Lr), this.name + r.hash;
  }, e;
}(), $o = /([A-Z])/, Io = /([A-Z])/g, Mo = /^ms-/, Lo = function(e) {
  return "-" + e.toLowerCase();
};
function Pt(e) {
  return $o.test(e) ? e.replace(Io, Lo).replace(Mo, "-ms-") : e;
}
var Tt = function(e) {
  return e == null || e === !1 || e === "";
};
function Je(e, r, t, n) {
  if (Array.isArray(e)) {
    for (var o, a = [], i = 0, l = e.length; i < l; i += 1)
      (o = Je(e[i], r, t, n)) !== "" && (Array.isArray(o) ? a.push.apply(a, o) : a.push(o));
    return a;
  }
  if (Tt(e))
    return "";
  if (qr(e))
    return "." + e.styledComponentId;
  if (lr(e)) {
    if (typeof (u = e) != "function" || u.prototype && u.prototype.isReactComponent || !r)
      return e;
    var c = e(r);
    return process.env.NODE_ENV !== "production" && sr.isElement(c) && console.warn(Ir(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Je(c, r, t, n);
  }
  var u;
  return e instanceof en ? t ? (e.inject(t, n), e.getName(n)) : e : $r(e) ? function d(m, y) {
    var k, E, C = [];
    for (var h in m)
      m.hasOwnProperty(h) && !Tt(m[h]) && (Array.isArray(m[h]) && m[h].isCss || lr(m[h]) ? C.push(Pt(h) + ":", m[h], ";") : $r(m[h]) ? C.push.apply(C, d(m[h], h)) : C.push(Pt(h) + ": " + (k = h, (E = m[h]) == null || typeof E == "boolean" || E === "" ? "" : typeof E != "number" || E === 0 || k in qn || k.startsWith("--") ? String(E).trim() : E + "px") + ";"));
    return y ? [y + " {"].concat(C, ["}"]) : C;
  }(e) : e.toString();
}
var Nt = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function rn(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  return lr(e) || $r(e) ? Nt(Je(At(br, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : Nt(Je(At(e, t)));
}
var Ot = /invalid hook call/i, pr = /* @__PURE__ */ new Set(), Do = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, n = console.error;
    try {
      var o = !0;
      console.error = function(a) {
        if (Ot.test(a))
          o = !1, pr.delete(t);
        else {
          for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
            l[c - 1] = arguments[c];
          n.apply(void 0, [a].concat(l));
        }
      }, xr(), o && !pr.has(t) && (console.warn(t), pr.add(t));
    } catch (a) {
      Ot.test(a.message) && pr.delete(t);
    } finally {
      console.error = n;
    }
  }
}, zo = function(e, r, t) {
  return t === void 0 && (t = ze), e.theme !== t.theme && e.theme || r || t.theme;
}, Fo = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Vo = /(^-|-$)/g;
function _r(e) {
  return e.replace(Fo, "-").replace(Vo, "");
}
var tn = function(e) {
  return Mr(Zt(e) >>> 0);
};
function hr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Dr = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Bo = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Wo(e, r, t) {
  var n = e[t];
  Dr(r) && Dr(n) ? nn(n, r) : e[t] = r;
}
function nn(e) {
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  for (var o = 0, a = t; o < a.length; o++) {
    var i = a[o];
    if (Dr(i))
      for (var l in i)
        Bo(l) && Wo(e, i[l], l);
  }
  return e;
}
var Kr = Ve.createContext();
Kr.Consumer;
var jr = {};
function on(e, r, t) {
  var n = qr(e), o = !hr(e), a = r.attrs, i = a === void 0 ? br : a, l = r.componentId, c = l === void 0 ? function(S, N) {
    var T = typeof S != "string" ? "sc" : _r(S);
    jr[T] = (jr[T] || 0) + 1;
    var g = T + "-" + tn("5.3.10" + T + jr[T]);
    return N ? N + "-" + g : g;
  }(r.displayName, r.parentComponentId) : l, u = r.displayName, d = u === void 0 ? function(S) {
    return hr(S) ? "styled." + S : "Styled(" + Ir(S) + ")";
  }(e) : u, m = r.displayName && r.componentId ? _r(r.displayName) + "-" + r.componentId : r.componentId || c, y = n && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, k = r.shouldForwardProp;
  n && e.shouldForwardProp && (k = r.shouldForwardProp ? function(S, N, T) {
    return e.shouldForwardProp(S, N, T) && r.shouldForwardProp(S, N, T);
  } : e.shouldForwardProp);
  var E, C = new Ao(t, m, n ? e.componentStyle : void 0), h = C.isStatic && i.length === 0, j = function(S, N) {
    return function(T, g, ie, we) {
      var de = T.attrs, fe = T.componentStyle, ye = T.defaultProps, ke = T.foldedComponentIds, L = T.shouldForwardProp, re = T.styledComponentId, te = T.target;
      process.env.NODE_ENV !== "production" && gt(re);
      var ne = function($, p, F) {
        $ === void 0 && ($ = ze);
        var x = Le({}, p, { theme: $ }), K = {};
        return F.forEach(function(z) {
          var V, v, le, A = z;
          for (V in lr(A) && (A = A(x)), A)
            x[V] = K[V] = V === "className" ? (v = K[V], le = A[V], v && le ? v + " " + le : v || le) : A[V];
        }), [x, K];
      }(zo(g, cr(Kr), ye) || ze, g, de), Ce = ne[0], pe = ne[1], se = function($, p, F, x) {
        var K = No(), z = Oo(), V = p ? $.generateAndInjectStyles(ze, K, z) : $.generateAndInjectStyles(F, K, z);
        return process.env.NODE_ENV !== "production" && gt(V), process.env.NODE_ENV !== "production" && !p && x && x(V), V;
      }(fe, we, Ce, process.env.NODE_ENV !== "production" ? T.warnTooManyClasses : void 0), ve = ie, Se = pe.$as || g.$as || pe.as || g.as || te, xe = hr(Se), _ = pe !== g ? Le({}, g, {}, pe) : g, w = {};
      for (var P in _)
        P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? w.as = _[P] : (L ? L(P, wt, Se) : !xe || wt(P)) && (w[P] = _[P]));
      return g.style && pe.style !== g.style && (w.style = Le({}, g.style, {}, pe.style)), w.className = Array.prototype.concat(ke, re, se !== re ? se : null, g.className, pe.className).filter(Boolean).join(" "), w.ref = ve, Dn(Se, w);
    }(E, S, N, h);
  };
  return j.displayName = d, (E = Ve.forwardRef(j)).attrs = y, E.componentStyle = C, E.displayName = d, E.shouldForwardProp = k, E.foldedComponentIds = n ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : br, E.styledComponentId = m, E.target = n ? e.target : e, E.withComponent = function(S) {
    var N = r.componentId, T = function(ie, we) {
      if (ie == null)
        return {};
      var de, fe, ye = {}, ke = Object.keys(ie);
      for (fe = 0; fe < ke.length; fe++)
        de = ke[fe], we.indexOf(de) >= 0 || (ye[de] = ie[de]);
      return ye;
    }(r, ["componentId"]), g = N && N + "-" + (hr(S) ? S : _r(Ir(S)));
    return on(S, Le({}, T, { attrs: y, componentId: g }), t);
  }, Object.defineProperty(E, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(S) {
    this._foldedDefaultProps = n ? nn({}, e.defaultProps, S) : S;
  } }), process.env.NODE_ENV !== "production" && (Do(d, m), E.warnTooManyClasses = function(S, N) {
    var T = {}, g = !1;
    return function(ie) {
      if (!g && (T[ie] = !0, Object.keys(T).length >= 200)) {
        var we = N ? ' with the id of "' + N + '"' : "";
        console.warn("Over 200 classes were generated for component " + S + we + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, T = {};
      }
    };
  }(d, m)), Object.defineProperty(E, "toString", { value: function() {
    return "." + E.styledComponentId;
  } }), o && so(E, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), E;
}
var zr = function(e) {
  return function r(t, n, o) {
    if (o === void 0 && (o = ze), !sr.isValidElementType(n))
      return Qe(1, String(n));
    var a = function() {
      return t(n, o, rn.apply(void 0, arguments));
    };
    return a.withConfig = function(i) {
      return r(t, n, Le({}, o, {}, i));
    }, a.attrs = function(i) {
      return r(t, n, Le({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, a;
  }(on, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  zr[e] = zr(e);
});
function Ho(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
    t[n - 1] = arguments[n];
  var o = rn.apply(void 0, [e].concat(t)).join(""), a = tn(o);
  return new en(a, o);
}
var Uo = function() {
  return cr(Kr);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const O = zr, hs = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    strokeWidth: "1",
    fillOpacity: "0",
    stroke: "currentColor",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
      }
    )
  }
), Yo = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        d: "m15 6-1.41-1.41L7 11.17 4.41 8.59 3 10l4 4Z",
        fill: "currentColor",
        strokeWidth: 0,
        transform: "translate(3 4)"
      }
    )
  }
), Zr = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
      }
    )
  }
), Go = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
      }
    )
  }
), qo = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.5 15.75l7.5-7.5 7.5 7.5"
      }
    )
  }
), ms = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
      }
    )
  }
), gs = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
      }
    )
  }
), vs = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
      }
    )
  }
), bs = () => /* @__PURE__ */ f.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", children: /* @__PURE__ */ f.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",
    fill: "currentColor"
  }
) }), ys = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    strokeWidth: "1",
    fillOpacity: "0",
    stroke: "currentColor",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      }
    )
  }
), xs = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      }
    )
  }
), ws = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M19.5 12h-15" })
  }
), Jr = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M18 12H6" })
  }
), Cs = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 4.5v15m7.5-7.5h-15"
      }
    )
  }
), an = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v12m6-6H6" })
  }
), Xo = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ f.jsx("circle", { cx: "12", cy: "12", r: "12", fill: "currentColor" })
  }
), Ss = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      }
    )
  }
), ks = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      }
    )
  }
), Es = () => /* @__PURE__ */ f.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: [
      /* @__PURE__ */ f.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        }
      ),
      /* @__PURE__ */ f.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        }
      )
    ]
  }
), Rs = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
      }
    )
  }
), As = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      }
    )
  }
), _s = () => /* @__PURE__ */ f.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ f.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
      }
    )
  }
), js = ({
  data: e,
  multiOpen: r = !0,
  iconType: t = "plusminus",
  showSeparator: n = !0
}) => {
  const [o, a] = Be([]), i = (u) => {
    const d = o.includes(u);
    a(r ? d ? o.filter((m) => m !== u) : [.../* @__PURE__ */ new Set([...o, u])] : d ? [] : [u]);
  }, l = (u) => {
    i(u);
  }, c = {
    chevron: { open: /* @__PURE__ */ f.jsx(qo, {}), closed: /* @__PURE__ */ f.jsx(Zr, {}) },
    plusminus: { open: /* @__PURE__ */ f.jsx(Jr, {}), closed: /* @__PURE__ */ f.jsx(an, {}) },
    hidden: {}
  };
  return /* @__PURE__ */ f.jsx("div", { className: "Accordion", role: "tablist", children: e.map((u, d) => {
    var y;
    const m = xr(null);
    return /* @__PURE__ */ f.jsxs(Ve.Fragment, { children: [
      /* @__PURE__ */ f.jsxs("div", { className: "AccordionSection", children: [
        /* @__PURE__ */ f.jsx(
          Ko,
          {
            className: "AccordionSectionHeader",
            role: "heading",
            "aria-level": 3,
            "data-separator": n ? "true" : "false",
            children: /* @__PURE__ */ f.jsxs(
              Zo,
              {
                role: "button",
                "aria-expanded": !!o.includes(d),
                "aria-controls": `AccordionSectionPanel_${d}`,
                "aria-disabled": !1,
                id: `AccordionSectionTitle_${d}`,
                tabIndex: 0,
                onClick: () => l(d),
                onKeyDown: (k) => {
                  switch (console.log(k.key), k.key) {
                    case "Enter":
                    case " ":
                      l(d);
                      break;
                  }
                },
                children: [
                  u.title,
                  t !== "hidden" && /* @__PURE__ */ f.jsx(Fe, { size: "30px", children: o.includes(d) ? c[t].open : c[t].closed })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ f.jsx(
          Jo,
          {
            className: "AccordionSectionPanel",
            role: "region",
            "aria-labelledby": `AccordionSectionTitle_${d}`,
            id: `AccordionSectionPanel_${d}`,
            ref: m,
            "data-expanded": o.includes(d) ? "true" : "false",
            scrollHeight: String((y = m == null ? void 0 : m.current) == null ? void 0 : y.scrollHeight),
            children: /* @__PURE__ */ f.jsx(
              Qo,
              {
                "data-separator": n ? "true" : "false",
                children: u.body
              }
            )
          }
        )
      ] }),
      n && /* @__PURE__ */ f.jsx(oi, {})
    ] }, d);
  }) });
}, Ko = O.div`
  box-sizing: border-box;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--clr-foreground);

  margin-bottom: 0px;
  margin-top: 0px;

  &[data-separator='true'] {
    margin-bottom: 15px;
    margin-top: 15px;
  }
`, Zo = O.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`, Jo = O.div`
  overflow: hidden;
  color: ${({ theme: e }) => {
  var r, t;
  return e && ((t = (r = e == null ? void 0 : e.Accordion) == null ? void 0 : r.content) == null ? void 0 : t.color) || "var()";
}};

  &[data-expanded='false'] {
    visibility: hidden;
    opacity: 0;
    transition: all 0.1s ease-in-out;
    max-height: 0px;
  }

  &[data-expanded='true'] {
    visibility: visible;
    opacity: 1;
    transition: all 0.1s ease-in-out;
    max-height: ${({ scrollHeight: e }) => e + "px"};
  }
`, Qo = O.div`
  padding: 20px 0;

  &[data-separator='true'] {
    padding: 0 0 20px 0;
  }
`, $t = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, It = function() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return r.flat(1 / 0).filter(Boolean).join(" ");
}, Qr = (e, r) => (t) => {
  var n;
  if ((r == null ? void 0 : r.variants) == null)
    return It(e, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
  const { variants: o, defaultVariants: a } = r, i = Object.keys(o).map((u) => {
    const d = t == null ? void 0 : t[u], m = a == null ? void 0 : a[u];
    if (d === null)
      return null;
    const y = $t(d) || $t(m);
    return o[u][y];
  }), l = t && Object.entries(t).reduce((u, d) => {
    let [m, y] = d;
    return y === void 0 || (u[m] = y), u;
  }, {}), c = r == null || (n = r.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((u, d) => {
    let { class: m, className: y, ...k } = d;
    return Object.entries(k).every((E) => {
      let [C, h] = E;
      return Array.isArray(h) ? h.includes({
        ...a,
        ...l
      }[C]) : {
        ...a,
        ...l
      }[C] === h;
    }) ? [
      ...u,
      m,
      y
    ] : u;
  }, []);
  return It(e, i, c, t == null ? void 0 : t.class, t == null ? void 0 : t.className);
};
function ea() {
  for (var e = 0, r, t, n = ""; e < arguments.length; )
    (r = arguments[e++]) && (t = sn(r)) && (n && (n += " "), n += t);
  return n;
}
function sn(e) {
  if (typeof e == "string")
    return e;
  for (var r, t = "", n = 0; n < e.length; n++)
    e[n] && (r = sn(e[n])) && (t && (t += " "), t += r);
  return t;
}
var et = "-";
function ra(e) {
  var r = na(e), t = e.conflictingClassGroups, n = e.conflictingClassGroupModifiers, o = n === void 0 ? {} : n;
  function a(l) {
    var c = l.split(et);
    return c[0] === "" && c.length !== 1 && c.shift(), ln(c, r) || ta(l);
  }
  function i(l, c) {
    var u = t[l] || [];
    return c && o[l] ? [].concat(u, o[l]) : u;
  }
  return {
    getClassGroupId: a,
    getConflictingClassGroupIds: i
  };
}
function ln(e, r) {
  var i;
  if (e.length === 0)
    return r.classGroupId;
  var t = e[0], n = r.nextPart.get(t), o = n ? ln(e.slice(1), n) : void 0;
  if (o)
    return o;
  if (r.validators.length !== 0) {
    var a = e.join(et);
    return (i = r.validators.find(function(l) {
      var c = l.validator;
      return c(a);
    })) == null ? void 0 : i.classGroupId;
  }
}
var Mt = /^\[(.+)\]$/;
function ta(e) {
  if (Mt.test(e)) {
    var r = Mt.exec(e)[1], t = r == null ? void 0 : r.substring(0, r.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}
function na(e) {
  var r = e.theme, t = e.prefix, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, o = aa(Object.entries(e.classGroups), t);
  return o.forEach(function(a) {
    var i = a[0], l = a[1];
    Fr(l, n, i, r);
  }), n;
}
function Fr(e, r, t, n) {
  e.forEach(function(o) {
    if (typeof o == "string") {
      var a = o === "" ? r : Lt(r, o);
      a.classGroupId = t;
      return;
    }
    if (typeof o == "function") {
      if (oa(o)) {
        Fr(o(n), r, t, n);
        return;
      }
      r.validators.push({
        validator: o,
        classGroupId: t
      });
      return;
    }
    Object.entries(o).forEach(function(i) {
      var l = i[0], c = i[1];
      Fr(c, Lt(r, l), t, n);
    });
  });
}
function Lt(e, r) {
  var t = e;
  return r.split(et).forEach(function(n) {
    t.nextPart.has(n) || t.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(n);
  }), t;
}
function oa(e) {
  return e.isThemeGetter;
}
function aa(e, r) {
  return r ? e.map(function(t) {
    var n = t[0], o = t[1], a = o.map(function(i) {
      return typeof i == "string" ? r + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(function(l) {
        var c = l[0], u = l[1];
        return [r + c, u];
      })) : i;
    });
    return [n, a];
  }) : e;
}
function ia(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var r = 0, t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function o(a, i) {
    t.set(a, i), r++, r > e && (r = 0, n = t, t = /* @__PURE__ */ new Map());
  }
  return {
    get: function(i) {
      var l = t.get(i);
      if (l !== void 0)
        return l;
      if ((l = n.get(i)) !== void 0)
        return o(i, l), l;
    },
    set: function(i, l) {
      t.has(i) ? t.set(i, l) : o(i, l);
    }
  };
}
var cn = "!";
function sa(e) {
  var r = e.separator || ":", t = r.length === 1, n = r[0], o = r.length;
  return function(i) {
    for (var l = [], c = 0, u = 0, d, m = 0; m < i.length; m++) {
      var y = i[m];
      if (c === 0) {
        if (y === n && (t || i.slice(m, m + o) === r)) {
          l.push(i.slice(u, m)), u = m + o;
          continue;
        }
        if (y === "/") {
          d = m;
          continue;
        }
      }
      y === "[" ? c++ : y === "]" && c--;
    }
    var k = l.length === 0 ? i : i.substring(u), E = k.startsWith(cn), C = E ? k.substring(1) : k, h = d && d > u ? d - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: E,
      baseClassName: C,
      maybePostfixModifierPosition: h
    };
  };
}
function la(e) {
  if (e.length <= 1)
    return e;
  var r = [], t = [];
  return e.forEach(function(n) {
    var o = n[0] === "[";
    o ? (r.push.apply(r, t.sort().concat([n])), t = []) : t.push(n);
  }), r.push.apply(r, t.sort()), r;
}
function ca(e) {
  return {
    cache: ia(e.cacheSize),
    splitModifiers: sa(e),
    ...ra(e)
  };
}
var ua = /\s+/;
function da(e, r) {
  var t = r.splitModifiers, n = r.getClassGroupId, o = r.getConflictingClassGroupIds, a = /* @__PURE__ */ new Set();
  return e.trim().split(ua).map(function(i) {
    var l = t(i), c = l.modifiers, u = l.hasImportantModifier, d = l.baseClassName, m = l.maybePostfixModifierPosition, y = n(m ? d.substring(0, m) : d), k = !!m;
    if (!y) {
      if (!m)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      if (y = n(d), !y)
        return {
          isTailwindClass: !1,
          originalClassName: i
        };
      k = !1;
    }
    var E = la(c).join(":"), C = u ? E + cn : E;
    return {
      isTailwindClass: !0,
      modifierId: C,
      classGroupId: y,
      originalClassName: i,
      hasPostfixModifier: k
    };
  }).reverse().filter(function(i) {
    if (!i.isTailwindClass)
      return !0;
    var l = i.modifierId, c = i.classGroupId, u = i.hasPostfixModifier, d = l + c;
    return a.has(d) ? !1 : (a.add(d), o(c, u).forEach(function(m) {
      return a.add(l + m);
    }), !0);
  }).reverse().map(function(i) {
    return i.originalClassName;
  }).join(" ");
}
function fa() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  var n, o, a, i = l;
  function l(u) {
    var d = r[0], m = r.slice(1), y = m.reduce(function(k, E) {
      return E(k);
    }, d());
    return n = ca(y), o = n.cache.get, a = n.cache.set, i = c, c(u);
  }
  function c(u) {
    var d = o(u);
    if (d)
      return d;
    var m = da(u, n);
    return a(u, m), m;
  }
  return function() {
    return i(ea.apply(null, arguments));
  };
}
function ce(e) {
  var r = function(n) {
    return n[e] || [];
  };
  return r.isThemeGetter = !0, r;
}
var un = /^\[(?:([a-z-]+):)?(.+)\]$/i, pa = /^\d+\/\d+$/, ha = /* @__PURE__ */ new Set(["px", "full", "screen"]), ma = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ga = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, va = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function je(e) {
  return He(e) || ha.has(e) || pa.test(e) || Vr(e);
}
function Vr(e) {
  return Ye(e, "length", Sa);
}
function ba(e) {
  return Ye(e, "size", dn);
}
function ya(e) {
  return Ye(e, "position", dn);
}
function xa(e) {
  return Ye(e, "url", ka);
}
function mr(e) {
  return Ye(e, "number", He);
}
function He(e) {
  return !Number.isNaN(Number(e));
}
function wa(e) {
  return e.endsWith("%") && He(e.slice(0, -1));
}
function or(e) {
  return Dt(e) || Ye(e, "number", Dt);
}
function U(e) {
  return un.test(e);
}
function ar() {
  return !0;
}
function De(e) {
  return ma.test(e);
}
function Ca(e) {
  return Ye(e, "", Ea);
}
function Ye(e, r, t) {
  var n = un.exec(e);
  return n ? n[1] ? n[1] === r : t(n[2]) : !1;
}
function Sa(e) {
  return ga.test(e);
}
function dn() {
  return !1;
}
function ka(e) {
  return e.startsWith("url(");
}
function Dt(e) {
  return Number.isInteger(Number(e));
}
function Ea(e) {
  return va.test(e);
}
function Ra() {
  var e = ce("colors"), r = ce("spacing"), t = ce("blur"), n = ce("brightness"), o = ce("borderColor"), a = ce("borderRadius"), i = ce("borderSpacing"), l = ce("borderWidth"), c = ce("contrast"), u = ce("grayscale"), d = ce("hueRotate"), m = ce("invert"), y = ce("gap"), k = ce("gradientColorStops"), E = ce("gradientColorStopPositions"), C = ce("inset"), h = ce("margin"), j = ce("opacity"), S = ce("padding"), N = ce("saturate"), T = ce("scale"), g = ce("sepia"), ie = ce("skew"), we = ce("space"), de = ce("translate"), fe = function() {
    return ["auto", "contain", "none"];
  }, ye = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, ke = function() {
    return ["auto", U, r];
  }, L = function() {
    return [U, r];
  }, re = function() {
    return ["", je];
  }, te = function() {
    return ["auto", He, U];
  }, ne = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, Ce = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, pe = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, se = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, ve = function() {
    return ["", "0", U];
  }, Se = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, xe = function() {
    return [He, mr];
  }, _ = function() {
    return [He, U];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ar],
      spacing: [je],
      blur: ["none", "", De, U],
      brightness: xe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", De, U],
      borderSpacing: L(),
      borderWidth: re(),
      contrast: xe(),
      grayscale: ve(),
      hueRotate: _(),
      invert: ve(),
      gap: L(),
      gradientColorStops: [e],
      gradientColorStopPositions: [wa, Vr],
      inset: ke(),
      margin: ke(),
      opacity: xe(),
      padding: L(),
      saturate: xe(),
      scale: xe(),
      sepia: ve(),
      skew: _(),
      space: L(),
      translate: L()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", U]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [De]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": Se()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": Se()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(ne(), [U])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ye()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ye()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ye()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: fe()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": fe()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": fe()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [C]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [C]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [C]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [C]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [C]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [C]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [C]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [C]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [C]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", or]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ke()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", U]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ve()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ve()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", or]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ar]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", or]
        }, U]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": te()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": te()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ar]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [or]
        }, U]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": te()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": te()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", U]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [y]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [y]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [y]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(se())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(se(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(se(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [S]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [S]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [S]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [S]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [S]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [S]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [S]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [S]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [S]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [h]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [h]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [h]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [h]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [h]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [h]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [h]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [h]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [h]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [we]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [we]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", U, r]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", U, je]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [De]
        }, De, U]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [U, r, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", U, je]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [U, r, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", De, Vr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", mr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ar]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", He, mr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", U, je]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", U]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", U]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [j]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [j]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(Ce(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", je]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", U, je]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: L()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", U]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [j]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(ne(), [ya])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ba]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xa]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [E]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [E]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [E]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [k]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [k]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [a]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [a]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [a]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [a]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [a]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [a]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [a]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [a]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [a]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [a]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [a]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [a]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [a]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [a]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [a]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [j]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(Ce(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [j]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Ce()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(Ce())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [U, je]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [je]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: re()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [j]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [je]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", De, Ca]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ar]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [j]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": pe()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": pe()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [t]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", De, U]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [u]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [d]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [m]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [N]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [g]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [t]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [u]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [d]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [m]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [N]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [g]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [i]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [i]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [i]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: _()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", U]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: _()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", U]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [T]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [T]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [T]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [or, U]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [de]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [de]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ie]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ie]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": L()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": L()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": L()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": L()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": L()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": L()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": L()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": L()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": L()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": L()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": L()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": L()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": L()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": L()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": L()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": L()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": L()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": L()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", U]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [je, mr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var rt = /* @__PURE__ */ fa(Ra);
const Aa = Qr(
  [
    "font-semibold",
    "border",
    "rounded",
    "focus:outline-none",
    "focus:ring",
    "box-border",
    "inline-flex",
    "items-center",
    "justify-center",
    "h-auto",
    "cursor-pointer"
  ],
  {
    variants: {
      intent: {
        primary: [
          "bg-blue-500",
          "text-white",
          "border-transparent",
          "hover:bg-blue-600"
        ],
        secondary: [
          "bg-white",
          "text-gray-800",
          "border-gray-400",
          "hover:bg-gray-100"
        ],
        contained: [
          "bg-gray-300",
          "text-gray-700",
          "border-gray-300",
          "hover:bg-gray-400"
        ],
        outlined: [
          "text-black",
          "border-black",
          "bg-transparent",
          "hover:bg-gray-700",
          "hover:text-white"
        ],
        text: ["border-transparent", "underline"],
        icon: ["border-transparent"]
      },
      size: {
        small: ["text-sm", "py-1", "px-2"],
        medium: ["text-base", "py-2", "px-4"]
      }
    },
    compoundVariants: [
      {
        intent: "primary",
        size: "medium",
        className: "uppercase"
      },
      {
        intent: "text",
        size: ["medium", "small"],
        className: ["px-1", "py-1"]
      },
      {
        intent: "icon",
        size: ["medium", "small"],
        className: "px-0 py-0"
      }
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium"
    }
  }
), Br = ({
  intent: e,
  size: r,
  className: t,
  onClick: n,
  ariaLabel: o,
  children: a,
  ...i
}) => {
  var u, d;
  const l = Uo(), c = rt(
    Aa({ intent: e, size: r }),
    t,
    e === "primary" && ((u = l.Button) == null ? void 0 : u.primary),
    e === "outlined" && ((d = l.Button) == null ? void 0 : d.outlined)
  );
  return /* @__PURE__ */ f.jsx(
    "button",
    {
      className: c,
      "aria-label": o || "Button",
      role: "button",
      tabIndex: 0,
      onClick: n,
      ...i,
      children: a
    }
  );
}, Ps = ({
  color: e = "white",
  borderColor: r = "black",
  borderRadius: t = "10px",
  width: n = "250px",
  height: o = "300px",
  children: a
}) => /* @__PURE__ */ f.jsx(
  _a,
  {
    color: e,
    borderColor: r,
    borderRadius: t,
    width: n,
    height: o,
    children: a
  }
), _a = O.div`
  border: ${({ borderColor: e, theme: r }) => e ? `1px solid ${e}` : `1px solid ${r.borderColor}`};
  border-radius: ${({ borderRadius: e }) => e};
  width: ${({ width: e }) => e};
  height: ${({ height: e }) => e};
  padding: 15px;
`, ja = O.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: auto;
  gap: 1rem;
`, Pa = O.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`, Ta = O.div`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.Checkbox) == null ? void 0 : r.borderRadius;
}};
  border: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.Checkbox) == null ? void 0 : r.border;
}};
  background-color: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.Checkbox) == null ? void 0 : r.backgroundColor;
}};
`, Ts = ({
  checked: e,
  name: r,
  label: t,
  onChange: n,
  iconSize: o = "20px",
  indeterminate: a = !1
}) => {
  const i = xr(null);
  return ur(() => {
    i.current.indeterminate = a;
  }, [a]), /* @__PURE__ */ f.jsxs(ja, { className: "Checkbox", children: [
    /* @__PURE__ */ f.jsx(
      Pa,
      {
        checked: e,
        ref: i,
        onChange: n,
        name: r
      }
    ),
    /* @__PURE__ */ f.jsx(Ta, { checked: e, children: /* @__PURE__ */ f.jsx(Fe, { size: o, children: a ? /* @__PURE__ */ f.jsx(Jr, {}) : e ? /* @__PURE__ */ f.jsx(Yo, {}) : null }) }),
    t
  ] });
}, Na = O.div`
  display: inline-flex;
  flex-direction: ${({ direction: e }) => e};

  > *:not(:last-child) {
    margin-bottom: ${({ direction: e, spacing: r }) => (e === "column" || e === "column-reverse") && r};
    margin-right: ${({ direction: e, spacing: r }) => (e === "row" || e === "row-reverse") && r};
  }
`, Ns = ({
  direction: e = "column",
  spacing: r = "0px",
  children: t
}) => /* @__PURE__ */ f.jsx(
  Na,
  {
    className: "CheckboxGroup",
    direction: e,
    spacing: r,
    children: t
  }
), Oa = O.div`
  display: flex;
  width: 120px;

  height: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.Counter) == null ? void 0 : r.height;
}};
  gap: 10px;

  Button {
    display: flex;
    align-items: center;
  }
  Input {
    height: auto;
  }
`, Os = ({ savedData: e, onChange: r }) => {
  const t = (o) => {
    o.preventDefault(), o.stopPropagation(), console.log("decrement"), r(parseInt(e || 0) - 1);
  }, n = (o) => {
    o.preventDefault(), o.stopPropagation(), console.log("increment"), r(parseInt(e || 0) + 1);
  };
  return /* @__PURE__ */ f.jsxs(Oa, { children: [
    /* @__PURE__ */ f.jsx(
      Br,
      {
        className: ["Button", "left"].join(" "),
        onClick: t,
        intent: "icon",
        children: /* @__PURE__ */ f.jsx(Fe, { size: "25px", children: /* @__PURE__ */ f.jsx(Jr, {}) })
      }
    ),
    /* @__PURE__ */ f.jsx(
      Ba,
      {
        placeholder: "",
        className: "pointer-events-none text-center p-0",
        onChange: (o) => !isNaN(o.target.value),
        savedData: e
      }
    ),
    /* @__PURE__ */ f.jsx(
      Br,
      {
        className: ["Button", "right"].join(" "),
        onClick: n,
        intent: "icon",
        children: /* @__PURE__ */ f.jsx(Fe, { size: "25px", children: /* @__PURE__ */ f.jsx(an, {}) })
      }
    )
  ] });
}, er = O.div`
  color: var(--clr-foreground);
  margin: ${({ theme: e }) => {
  var r;
  return (r = e.Heading) == null ? void 0 : r.margin;
}};
  line-height: ${({ theme: e }) => {
  var r;
  return (r = e.Heading) == null ? void 0 : r.lineHeight;
}};
  font-weight: ${({ theme: e }) => {
  var r;
  return (r = e.Heading) == null ? void 0 : r.fontWeight;
}};
  font-family: ${({ theme: e }) => {
  var r;
  return (r = e.Heading) == null ? void 0 : r.fontFamily;
}};
`, $a = O(er)`
  font-size: ${({ theme: e }) => {
  var r, t;
  return (t = (r = e.Heading) == null ? void 0 : r.fontSize) == null ? void 0 : t.h1;
}};
`, Ia = O(er)`
  font-size: ${({ theme: e }) => {
  var r, t;
  return (t = (r = e.Heading) == null ? void 0 : r.fontSize) == null ? void 0 : t.h2;
}};
`, Ma = O(er)`
  font-size: ${({ theme: e }) => {
  var r, t;
  return (t = (r = e.Heading) == null ? void 0 : r.fontSize) == null ? void 0 : t.h3;
}};
`, La = O(er)`
  font-size: ${({ theme: e }) => {
  var r, t;
  return (t = (r = e.Heading) == null ? void 0 : r.fontSize) == null ? void 0 : t.h4;
}};
`, Da = O(er)`
  font-size: ${({ theme: e }) => {
  var r, t;
  return (t = (r = e.Heading) == null ? void 0 : r.fontSize) == null ? void 0 : t.h5;
}};
`, za = O(er)`
  font-size: ${({ theme: e }) => {
  var r, t;
  return (t = (r = e.Heading) == null ? void 0 : r.fontSize) == null ? void 0 : t.h6;
}};
`, $s = ({
  variation: e,
  children: r
}) => {
  const n = {
    h1: $a,
    h2: Ia,
    h3: Ma,
    h4: La,
    h5: Da,
    h6: za
  }[e];
  return /* @__PURE__ */ f.jsx(n, { as: e, children: r });
}, Fa = O.div`
  width: ${({ size: e }) => e};
  height: ${({ size: e }) => e};
  display: flex;
  > * {
    width: 100%;
    height: 100%;
  }

  > svg {
    stroke: ${({ stroke: e }) => e};
    fill: ${({ fill: e }) => e};
    fill-opacity: ${({ fillOpacity: e }) => e};
  }
`, Fe = ({
  stroke: e = "currentColor",
  children: r,
  size: t = "25px",
  fill: n = void 0,
  fillOpacity: o,
  ...a
}) => /* @__PURE__ */ f.jsx(
  Fa,
  {
    className: "Icon",
    size: t,
    stroke: e,
    fill: n,
    fillOpacity: o,
    ...a,
    children: r
  }
), Va = Qr(
  [
    "box-border",
    "cursor-text",
    "outline-none",
    "w-full",
    "p-2",
    "rounded-md",
    "h-10",
    "bg-inputBackground"
  ],
  {
    variants: {
      border: {
        false: ["border-transparent", "px-0", "rounded-none"],
        true: ["border", "border-solid", "border-borderColor"]
      },
      readonly: {
        true: ["text-neutral-300"]
      }
    },
    defaultVariants: {
      border: !0
    }
  }
), Ba = zn(function({
  onChange: r,
  border: t,
  savedData: n,
  placeholder: o,
  className: a,
  readonly: i,
  children: l,
  type: c,
  tw: u,
  ...d
}, m) {
  const y = rt(Va({ border: t, readonly: i }), a, u);
  return /* @__PURE__ */ f.jsx(
    "input",
    {
      type: c,
      onChange: r,
      value: n,
      placeholder: o,
      className: y,
      readOnly: i,
      ref: m,
      ...d,
      children: l
    }
  );
}), Wa = Qr([
  "overflow-hidden",
  "box-border",
  "h-auto",
  "w-full",
  "flex",
  "items-center",
  "flex-grow-1",
  "outline-none",
  "border",
  "border-solid",
  "rounded-md",
  "max-h-10",
  "px-2",
  "gap-2",
  "bg-inputBackground",
  "border-borderColor"
]), Is = ({ children: e }) => {
  const r = rt(Wa());
  return /* @__PURE__ */ f.jsx("div", { className: r, children: e });
}, Ha = O.div`
  display: inline-flex;
  align-items: center;
  justify-items: center;
  flex-direction: ${({ labelDirection: e }) => e};
  gap: ${({ gap: e }) => e};
`, Ua = ({
  label: e,
  something: r,
  gap: t = "2px",
  labelDirection: n = "right",
  labelClickable: o = !1
}) => {
  const a = {
    left: "row-reverse",
    right: "row",
    top: "column-reverse",
    bottom: "column"
  };
  return /* @__PURE__ */ f.jsxs(
    Ha,
    {
      as: o ? "label" : "div",
      labelDirection: a[n],
      gap: t,
      children: [
        r,
        /* @__PURE__ */ f.jsx("div", { children: e })
      ]
    }
  );
}, Ya = O.section`
  box-sizing: border-box;
  padding: ${({ theme: e }) => {
  var r, t;
  return (t = (r = e.Layout) == null ? void 0 : r.section) == null ? void 0 : t.padding;
}};
  border-bottom: ${({ theme: e }) => {
  var r, t;
  return (t = (r = e.Layout) == null ? void 0 : r.section) == null ? void 0 : t.borderBottom;
}};
`, Ga = O.div`
  position: relative;
  padding: ${({ theme: e }) => {
  var r, t;
  return (t = (r = e.Layout) == null ? void 0 : r.block) == null ? void 0 : t.padding;
}};
`, Ms = ({
  label: e,
  children: r,
  variation: t
}) => {
  const o = {
    section: Ya,
    block: Ga
  }[t];
  return /* @__PURE__ */ f.jsx(o, { children: e || r });
}, Ls = ({ children: e }) => /* @__PURE__ */ f.jsx("ul", { children: e }), Ds = ({ firstname: e, lastname: r, email: t }) => /* @__PURE__ */ f.jsxs("li", { className: "flex flex-col mb-5 last:mb-0", children: [
  /* @__PURE__ */ f.jsxs("div", { className: "flex justify-between", children: [
    e,
    " ",
    r
  ] }),
  /* @__PURE__ */ f.jsx("div", { children: t })
] }), qa = O.circle`
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
`, zs = ({
  progress: e,
  size: r
}) => {
  const t = r / 2 - r / 10, n = 2 * Math.PI * t, o = n - e / 100 * n, a = `rotate(-90 ${r / 2} ${r / 2})`;
  return /* @__PURE__ */ f.jsx("svg", { width: r, height: r, children: /* @__PURE__ */ f.jsx(
    qa,
    {
      className: "circle",
      strokeWidth: r / 10,
      strokeDasharray: `${n} ${n}`,
      strokeDashoffset: o,
      r: t,
      cx: r / 2,
      cy: r / 2,
      transform: a
    }
  ) });
}, Xa = O.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: auto;
  gap: 1rem;
`, Ka = O.input.attrs({ type: "radio" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`, Za = O.div`
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50%;
  border: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.RadioButton) == null ? void 0 : r.border;
}};
  background-color: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.RadioButton) == null ? void 0 : r.backgroundColor;
}};
`, Fs = ({ checked: e, name: r, label: t, onChange: n, iconSize: o }) => /* @__PURE__ */ f.jsxs(Xa, { className: "RadioButton", children: [
  /* @__PURE__ */ f.jsx(Ka, { checked: e, onChange: n, name: r }),
  /* @__PURE__ */ f.jsx(Za, { checked: e, children: /* @__PURE__ */ f.jsx(Fe, { size: o, children: e && /* @__PURE__ */ f.jsx(Xo, {}) }) }),
  t
] }), Ja = O.div`
  display: inline-flex;
  flex-direction: ${({ direction: e }) => e};

  > *:not(:last-child) {
    margin-bottom: ${({ direction: e, spacing: r }) => (e === "column" || e === "column-reverse") && r};
    margin-right: ${({ direction: e, spacing: r }) => (e === "row" || e === "row-reverse") && r};
  }
`, Vs = ({
  direction: e = "column",
  spacing: r = "0px",
  children: t
}) => /* @__PURE__ */ f.jsx(
  Ja,
  {
    className: "RadioButtonGroup",
    direction: e,
    spacing: r,
    children: t
  }
), Qa = O.div`
  position: relative;
  display: flex;
  align-items: center;
  .Icon {
    right: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.Select) == null ? void 0 : r.padding;
}};
    position: absolute;
    pointer-events: none;
  }
`, ei = O.select`
  -webkit-appearance: none;

  box-sizing: border-box;
  appearance: none;
  margin: 0;
  width: 100%;
  outline: none;
  cursor: pointer;  
  max-height: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.Select) == null ? void 0 : r.inputHeight;
}};
  height: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.Select) == null ? void 0 : r.inputHeight;
}};
  color: var(--input-text-color);
  background: var(--input-background-color);
  border: 1px solid var(--border-color);
  border-radius: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.Select) == null ? void 0 : r.borderRadius;
}};
  padding: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.Select) == null ? void 0 : r.inputPadding;
}};
  
}`, Bs = ({ savedData: e, onChange: r, children: t }) => {
  const n = (o) => {
    r(o);
  };
  return /* @__PURE__ */ f.jsxs(Qa, { children: [
    /* @__PURE__ */ f.jsx(ei, { value: e, onChange: n, children: t ? t.map((o) => o) : null }),
    /* @__PURE__ */ f.jsx(Fe, { className: "Icon", iconSize: "30px", children: /* @__PURE__ */ f.jsx(Zr, {}) })
  ] });
}, tt = O.div`
  box-sizing: border-box;
  display: flex;
`, ri = O(tt)`
  display: flex;
  width: 100%;
  height: 1px;
  margin: ${({ margin: e }) => e};
  background: var(--border-color);
`, ti = O(tt)`
  height: ${({ height: e }) => e};
  width: 1px;
  margin: ${({ margin: e }) => e};
  background: var(--border-color);
`, ni = O(tt)`
  span {
    color: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.Separator) == null ? void 0 : r.color;
}};
    margin: ${({ margin: e }) => e};
  }

  &::before {
    display: flex;
    align-self: center;
    content: '';
    background: var(--border-color);
    width: 100%;
    height: 1px;
  }
  &::after {
    display: flex;
    align-self: center;
    content: '';
    background: var(--border-color);
    width: 100%;
    height: 1px;
  }
`, oi = ({
  variation: e = "horizontal",
  margin: r = "0px",
  height: t = "inherit",
  width: n = "inherit",
  label: o = void 0
}) => {
  switch (e) {
    case "horizontal":
      return /* @__PURE__ */ f.jsx(
        ri,
        {
          className: "Separator",
          height: t,
          width: n,
          margin: r
        }
      );
    case "vertical":
      return /* @__PURE__ */ f.jsx(
        ti,
        {
          className: "Separator",
          height: t,
          width: n,
          margin: r
        }
      );
    case "horizontal-labelled":
      return /* @__PURE__ */ f.jsx(
        ni,
        {
          className: "Separator",
          height: t,
          width: n,
          margin: r,
          children: /* @__PURE__ */ f.jsx("span", { children: o })
        }
      );
    default:
      return null;
  }
}, ai = O.div`
  box-sizing: border-box;
  width: ${({ width: e }) => e};
  margin-left: ${({ offset: e }) => e};
`, ii = O.div`
  width: 100%;
  background: red;
  position: relative;
`, si = O.div`
  border-radius: 0px;
  height: 1px;
  width: 100%;
  top: 7px;
  position: absolute;
  display: ${({ hideTrack: e }) => e ? "none" : "block"};
  background-color: currentColor;
`, li = O.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  > div {
    background-color: pink;
  }
`, ci = O.input.attrs(({ index: e }) => ({
  index: e,
  type: "range"
}))`
  /* Add styles for the input element */
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  pointer-events: ${({ trackClickable: e }) => e ? "auto" : "none"};
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 2px;
  outline: none;
  background: transparent; //the actual clickable part of scrolltrack
  display: flex;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: ${({ thumbSize: e }) => e};
    height: ${({ thumbSize: e }) => e};
    background: #666;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
  }
`, ui = ({
  width: e = "100%",
  hideTrack: r = !1,
  trackClickable: t = !0,
  min: n = 0,
  max: o = 100,
  step: a = 1,
  index: i = 0,
  thumbSize: l = "16px",
  backgroundColor: c,
  savedData: u = 0,
  offset: d = 0,
  onChange: m,
  className: y
}) => {
  const [k, E] = Be();
  ur(() => {
    E(u);
  }, []);
  const C = (h, j) => {
    m(h, j), E(h);
  };
  return /* @__PURE__ */ f.jsx(
    ai,
    {
      width: e,
      offset: d,
      className: ["Slider", y].join(" "),
      children: /* @__PURE__ */ f.jsxs(ii, { children: [
        /* @__PURE__ */ f.jsx(si, { hideTrack: r, backgroundColor: c }),
        /* @__PURE__ */ f.jsxs(li, { color: "red", splitPosition: k, children: [
          /* @__PURE__ */ f.jsx("div", {}),
          /* @__PURE__ */ f.jsx("div", {})
        ] }),
        /* @__PURE__ */ f.jsx(
          ci,
          {
            type: "range",
            trackClickable: t,
            min: n,
            max: o,
            step: a,
            thumbSize: l,
            value: u,
            onChange: (h) => C(h.target.value, i)
          }
        )
      ] })
    }
  );
}, di = O.div`
  height: 30px;
  width: ${({ width: e }) => e};
`, fi = O.div`
  height: 15px;
  position: relative;
`, pi = O.div`
  width: ${({ offset: e }) => `calc(100% - ${e})`};
  position: absolute;
`, hi = O.div`
  height: 1px;
  border: 0px;
  border-radius: 0px;
  width: 100%;
  position: absolute;
  top: 7px;
  background-color: currentColor;
`, Ws = ({
  sliderValues: e,
  onChange: r,
  step: t = 1,
  min: n = 0,
  max: o = 0,
  thumbSize: a = "16px",
  backgroundColor: i = "red",
  width: l = "100%"
}) => {
  const c = (d, m) => {
    let y;
    e.length === 1 || d === 0 ? y = y : y = e[d - 1];
    let k;
    return e.length === 1 || d === e.length - 1 ? k = k : k = e[d + 1], m <= y && (m = y), m >= k && (m = k), console.log("value: ", m), m;
  }, u = (d, m = 0) => {
    const y = c(m, parseInt(d));
    let k = e.slice();
    k[m] = y, r(k);
  };
  return /* @__PURE__ */ f.jsx(di, { className: "SliderMultiRange", width: l, children: /* @__PURE__ */ f.jsxs(fi, { className: "SliderWrapper", children: [
    /* @__PURE__ */ f.jsx(hi, { className: "SliderTrack", thumbSize: a }),
    /* @__PURE__ */ f.jsx(
      pi,
      {
        className: "Sliders",
        offset: parseInt(a) * (e.length - 1) + "px",
        children: (e || []).map((d, m) => /* @__PURE__ */ f.jsx(
          ui,
          {
            className: "",
            savedData: d,
            step: t,
            index: m,
            onChange: u,
            min: n,
            max: o,
            offset: parseInt(a) * m + "px",
            trackClickable: !1,
            hideTrack: !0,
            thumbSize: a
          },
          m
        ))
      }
    )
  ] }) });
}, mi = O.div`
  visibility: hidden;
  min-width: 250px;
  margin-left: -125px;
  background-color: #333;
  color: #fff;
  text-align: center;
  border-radius: 2px;
  padding: 16px;
  position: fixed;
  z-index: 1;
  left: 50%;
  bottom: 30px;

  &.show {
    visibility: visible;
    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
    animation: fadein 0.5s, fadeout 0.5s 2.5s;
  }

  /* Animations to fade the snackbar in and out */
  @-webkit-keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @keyframes fadein {
    from {
      bottom: 0;
      opacity: 0;
    }
    to {
      bottom: 30px;
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }

  @keyframes fadeout {
    from {
      bottom: 30px;
      opacity: 1;
    }
    to {
      bottom: 0;
      opacity: 0;
    }
  }
`, Hs = ({ setShowSnackbar: e, children: r }) => {
  const [t, n] = Be(!1);
  return ur(() => {
    n(!0);
    const o = setTimeout(() => {
      n(!1), e(!1);
    }, 2e3);
    return () => {
      clearTimeout(o);
    };
  }, [e]), /* @__PURE__ */ f.jsx(mi, { className: t ? "show" : "", children: r });
}, gi = Ho`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`, vi = O.div`
  width: ${(e) => e.size};
  height: ${(e) => e.size};
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: #333;
  animation: ${gi} 1s linear infinite;
  will-change: border-top-color;
`, Us = ({ size: e = "30px" }) => /* @__PURE__ */ f.jsx(vi, { size: e }), Ys = ({ headers: e, data: r, configure: t }) => /* @__PURE__ */ f.jsxs("table", { className: "border", children: [
  /* @__PURE__ */ f.jsx("thead", { children: /* @__PURE__ */ f.jsx("tr", { children: e.map((n, o) => /* @__PURE__ */ f.jsx(
    "th",
    {
      className: t.padding,
      style: { width: n.width },
      align: n.alignHeader,
      children: n.title
    },
    o
  )) }) }),
  /* @__PURE__ */ f.jsx("tbody", { children: r.map((n, o) => /* @__PURE__ */ f.jsx("tr", { children: e.map((a, i) => /* @__PURE__ */ f.jsx(
    "td",
    {
      className: t.padding,
      align: a.alignContent,
      children: n[a.mapToDataAttribute]
    },
    i
  )) }, o)) })
] }), bi = O.p`
  color: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.Text) == null ? void 0 : r.marginBottom;
}};
  margin-bottom: ${({ theme: e }) => {
  var r;
  return (r = e == null ? void 0 : e.Text) == null ? void 0 : r.marginBottom;
}};
`, Gs = ({ children: e, ...r }) => /* @__PURE__ */ f.jsx(bi, { ...r, children: e }), yi = O.div`
  label {
    display: inline-flex;
    cursor: pointer;
  }
`, xi = O.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`, qs = ({ checked: e, onChange: r, icon: t, children: n }) => /* @__PURE__ */ f.jsx(yi, { className: "ToggleButton", children: /* @__PURE__ */ f.jsxs("label", { children: [
  /* @__PURE__ */ f.jsx(xi, { checked: e, onChange: r }),
  t || n
] }) }), fn = Fn({
  isDarkMode: !1,
  // eslint-disable-next-line
  setIsDarkMode: (e) => {
  }
}), wi = () => cr(fn), Xs = ({
  children: e
}) => {
  const r = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches, [t, n] = Be(r);
  return /* @__PURE__ */ f.jsx(fn.Provider, { value: { isDarkMode: t, setIsDarkMode: n }, children: e });
}, Ci = O(Br)`
  cursor: pointer;
  opacity: 0.8;
  border-radius: 50%;
  padding: 5px;

  .toggle-circle {
    stroke: none;
    transition: transform 500ms ease-out;
  }
  .toggle-sun {
    transform-origin: center center;
    transition: transform 750ms cubic-bezier(0.11, 0.14, 0.29, 1.32);
  }

  &.lightMode {
    .toggle-circle {
      transform: translateX(-15%);
    }
    .toggle-sun {
      transform: rotate(0.5turn);
    }
  }

  &:hover,
  &:focus {
    outline: 0;
    opacity: 1;
    background: hsl(0 0% 50% / 0.15);
  }
`, Ks = () => {
  const { isDarkMode: e, setIsDarkMode: r } = wi();
  ur(() => {
    t(e ? "dark" : "light");
  }, []);
  const t = (o) => {
    const a = document.querySelector("html");
    a && (a.setAttribute("color-scheme", o), document.documentElement.style.setProperty("color-scheme", o));
  }, n = () => {
    console.log("toggle state"), r(!e), t(e ? "light" : "dark");
  };
  return /* @__PURE__ */ f.jsx(
    Ci,
    {
      onClick: n,
      className: e ? "darkMode" : "lightMode",
      intent: "icon",
      children: /* @__PURE__ */ f.jsx(Fe, { size: "25px", children: /* @__PURE__ */ f.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "472.39",
          height: "472.39",
          viewBox: "0 0 472.39 472.39",
          fill: "currentColor",
          children: [
            /* @__PURE__ */ f.jsx("g", { className: "toggle-sun", children: /* @__PURE__ */ f.jsx("path", { d: "M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" }) }),
            /* @__PURE__ */ f.jsx("g", { className: "toggle-circle", children: /* @__PURE__ */ f.jsx("circle", { className: "cls-1", cx: "236.2", cy: "236.2", r: "103.78" }) })
          ]
        }
      ) })
    }
  );
};
let Si = 0;
function ki(e = "uid") {
  const [r, t] = Be(null);
  return ur(() => {
    t(`${e}-${Si++}`);
  }, [e]), r;
}
const Ei = O.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`, Ri = O.input`
  opacity: 0;
  width: 0;
  height: 0;
`, Ai = O.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  border-radius: 30px;

  &:before {
    border-radius: 50%;
    position: absolute;
    content: '';
    height: 20px;
    width: 20px;
    left: 5px;
    bottom: 5px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
  }
  &.${({ className: e }) => e} {
    input[type='checkbox']:checked + & {
    background-color: ${({ color: e }) => e};
  }

  &.${({ className: e }) => e} {
    input[type='checkbox']:checked + &:before {
    -webkit-transform: translateX(30px);
    -ms-transform: translateX(30px);
    transform: translateX(30px);
  }
`, Zs = Ve.memo(
  ({ color: e, onChange: r, savedData: t }) => {
    const n = ki("ToggleSwitch");
    return /* @__PURE__ */ f.jsxs(Ei, { children: [
      /* @__PURE__ */ f.jsx(
        Ri,
        {
          type: "checkbox",
          defaultChecked: t,
          onChange: r
        }
      ),
      /* @__PURE__ */ f.jsx(Ai, { className: n, color: e })
    ] });
  },
  // what will cause this component to re-render - excludes onChange function
  (e, r) => e.savedData === r.savedData && e.color === r.color
);
/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Wr() {
  return Wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Wr.apply(this, arguments);
}
var zt;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(zt || (zt = {}));
function Re(e, r) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(r);
}
function _i(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function Hr(e) {
  let {
    pathname: r = "/",
    search: t = "",
    hash: n = ""
  } = e;
  return t && t !== "?" && (r += t.charAt(0) === "?" ? t : "?" + t), n && n !== "#" && (r += n.charAt(0) === "#" ? n : "#" + n), r;
}
function pn(e) {
  let r = {};
  if (e) {
    let t = e.indexOf("#");
    t >= 0 && (r.hash = e.substr(t), e = e.substr(0, t));
    let n = e.indexOf("?");
    n >= 0 && (r.search = e.substr(n), e = e.substr(0, n)), e && (r.pathname = e);
  }
  return r;
}
var Ft;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Ft || (Ft = {}));
function ji(e, r) {
  if (r === "/")
    return e;
  if (!e.toLowerCase().startsWith(r.toLowerCase()))
    return null;
  let t = r.endsWith("/") ? r.length - 1 : r.length, n = e.charAt(t);
  return n && n !== "/" ? null : e.slice(t) || "/";
}
function Pi(e, r) {
  r === void 0 && (r = "/");
  let {
    pathname: t,
    search: n = "",
    hash: o = ""
  } = typeof e == "string" ? pn(e) : e;
  return {
    pathname: t ? t.startsWith("/") ? t : Ti(t, r) : r,
    search: Ni(n),
    hash: Oi(o)
  };
}
function Ti(e, r) {
  let t = r.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? t.length > 1 && t.pop() : o !== "." && t.push(o);
  }), t.length > 1 ? t.join("/") : "/";
}
function Pr(e, r, t, n) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(n) + "].  Please separate it out to the ") + ("`to." + t + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function hn(e) {
  return e.filter((r, t) => t === 0 || r.route.path && r.route.path.length > 0);
}
function mn(e, r, t, n) {
  n === void 0 && (n = !1);
  let o;
  typeof e == "string" ? o = pn(e) : (o = Wr({}, e), Re(!o.pathname || !o.pathname.includes("?"), Pr("?", "pathname", "search", o)), Re(!o.pathname || !o.pathname.includes("#"), Pr("#", "pathname", "hash", o)), Re(!o.search || !o.search.includes("#"), Pr("#", "search", "hash", o)));
  let a = e === "" || o.pathname === "", i = a ? "/" : o.pathname, l;
  if (n || i == null)
    l = t;
  else {
    let m = r.length - 1;
    if (i.startsWith("..")) {
      let y = i.split("/");
      for (; y[0] === ".."; )
        y.shift(), m -= 1;
      o.pathname = y.join("/");
    }
    l = m >= 0 ? r[m] : "/";
  }
  let c = Pi(o, l), u = i && i !== "/" && i.endsWith("/"), d = (a || i === ".") && t.endsWith("/");
  return !c.pathname.endsWith("/") && (u || d) && (c.pathname += "/"), c;
}
const nt = (e) => e.join("/").replace(/\/\/+/g, "/"), Ni = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Oi = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function $i(e, r) {
  return e === r && (e !== 0 || 1 / e === 1 / r) || e !== e && r !== r;
}
const gn = typeof Object.is == "function" ? Object.is : $i, {
  useState: Ii,
  useEffect: Mi,
  useLayoutEffect: Li,
  useDebugValue: Di
} = B;
let Vt = !1, Bt = !1;
function zi(e, r, t) {
  process.env.NODE_ENV !== "production" && (Vt || "startTransition" in B && (Vt = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.")));
  const n = r();
  if (process.env.NODE_ENV !== "production" && !Bt) {
    const i = r();
    gn(n, i) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), Bt = !0);
  }
  const [{
    inst: o
  }, a] = Ii({
    inst: {
      value: n,
      getSnapshot: r
    }
  });
  return Li(() => {
    o.value = n, o.getSnapshot = r, Tr(o) && a({
      inst: o
    });
  }, [e, n, r]), Mi(() => (Tr(o) && a({
    inst: o
  }), e(() => {
    Tr(o) && a({
      inst: o
    });
  })), [e]), Di(n), n;
}
function Tr(e) {
  const r = e.getSnapshot, t = e.value;
  try {
    const n = r();
    return !gn(t, n);
  } catch {
    return !0;
  }
}
function Fi(e, r, t) {
  return r();
}
const Vi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Bi = !Vi, Wi = Bi ? Fi : zi;
"useSyncExternalStore" in B && ((e) => e.useSyncExternalStore)(B);
const vn = /* @__PURE__ */ B.createContext(null);
process.env.NODE_ENV !== "production" && (vn.displayName = "DataRouter");
const bn = /* @__PURE__ */ B.createContext(null);
process.env.NODE_ENV !== "production" && (bn.displayName = "DataRouterState");
const Hi = /* @__PURE__ */ B.createContext(null);
process.env.NODE_ENV !== "production" && (Hi.displayName = "Await");
const rr = /* @__PURE__ */ B.createContext(null);
process.env.NODE_ENV !== "production" && (rr.displayName = "Navigation");
const ot = /* @__PURE__ */ B.createContext(null);
process.env.NODE_ENV !== "production" && (ot.displayName = "Location");
const wr = /* @__PURE__ */ B.createContext({
  outlet: null,
  matches: []
});
process.env.NODE_ENV !== "production" && (wr.displayName = "Route");
const Ui = /* @__PURE__ */ B.createContext(null);
process.env.NODE_ENV !== "production" && (Ui.displayName = "RouteError");
function Yi(e, r) {
  let {
    relative: t
  } = r === void 0 ? {} : r;
  at() || (process.env.NODE_ENV !== "production" ? Re(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : Re(!1));
  let {
    basename: n,
    navigator: o
  } = B.useContext(rr), {
    hash: a,
    pathname: i,
    search: l
  } = Cr(e, {
    relative: t
  }), c = i;
  return n !== "/" && (c = i === "/" ? n : nt([n, i])), o.createHref({
    pathname: c,
    search: l,
    hash: a
  });
}
function at() {
  return B.useContext(ot) != null;
}
function dr() {
  return at() || (process.env.NODE_ENV !== "production" ? Re(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : Re(!1)), B.useContext(ot).location;
}
function Gi() {
  at() || (process.env.NODE_ENV !== "production" ? Re(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : Re(!1));
  let {
    basename: e,
    navigator: r
  } = B.useContext(rr), {
    matches: t
  } = B.useContext(wr), {
    pathname: n
  } = dr(), o = JSON.stringify(hn(t).map((l) => l.pathnameBase)), a = B.useRef(!1);
  return B.useEffect(() => {
    a.current = !0;
  }), B.useCallback(function(l, c) {
    if (c === void 0 && (c = {}), process.env.NODE_ENV !== "production" && _i(a.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered."), !a.current)
      return;
    if (typeof l == "number") {
      r.go(l);
      return;
    }
    let u = mn(l, JSON.parse(o), n, c.relative === "path");
    e !== "/" && (u.pathname = u.pathname === "/" ? e : nt([e, u.pathname])), (c.replace ? r.replace : r.push)(u, c.state, c);
  }, [e, r, o, n]);
}
function Cr(e, r) {
  let {
    relative: t
  } = r === void 0 ? {} : r, {
    matches: n
  } = B.useContext(wr), {
    pathname: o
  } = dr(), a = JSON.stringify(hn(n).map((i) => i.pathnameBase));
  return B.useMemo(() => mn(e, JSON.parse(a), o, t === "path"), [e, a, o, t]);
}
var Wt;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator";
})(Wt || (Wt = {}));
var Ht;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator";
})(Ht || (Ht = {}));
var Ut;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(Ut || (Ut = {}));
new Promise(() => {
});
/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Ue() {
  return Ue = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Ue.apply(this, arguments);
}
function it(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
const vr = "get", Nr = "application/x-www-form-urlencoded";
function Sr(e) {
  return e != null && typeof e.tagName == "string";
}
function qi(e) {
  return Sr(e) && e.tagName.toLowerCase() === "button";
}
function Xi(e) {
  return Sr(e) && e.tagName.toLowerCase() === "form";
}
function Ki(e) {
  return Sr(e) && e.tagName.toLowerCase() === "input";
}
function Zi(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ji(e, r) {
  return e.button === 0 && // Ignore everything but left clicks
  (!r || r === "_self") && // Let browser handle "target=_blank" etc.
  !Zi(e);
}
function Qi(e, r, t) {
  let n, o, a, i;
  if (Xi(e)) {
    let d = t.submissionTrigger;
    n = t.method || e.getAttribute("method") || vr, o = t.action || e.getAttribute("action") || r, a = t.encType || e.getAttribute("enctype") || Nr, i = new FormData(e), d && d.name && i.append(d.name, d.value);
  } else if (qi(e) || Ki(e) && (e.type === "submit" || e.type === "image")) {
    let d = e.form;
    if (d == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    n = t.method || e.getAttribute("formmethod") || d.getAttribute("method") || vr, o = t.action || e.getAttribute("formaction") || d.getAttribute("action") || r, a = t.encType || e.getAttribute("formenctype") || d.getAttribute("enctype") || Nr, i = new FormData(d), e.name && i.append(e.name, e.value);
  } else {
    if (Sr(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    if (n = t.method || vr, o = t.action || r, a = t.encType || Nr, e instanceof FormData)
      i = e;
    else if (i = new FormData(), e instanceof URLSearchParams)
      for (let [d, m] of e)
        i.append(d, m);
    else if (e != null)
      for (let d of Object.keys(e))
        i.append(d, e[d]);
  }
  let {
    protocol: l,
    host: c
  } = window.location;
  return {
    url: new URL(o, l + "//" + c),
    method: n.toLowerCase(),
    encType: a,
    formData: i
  };
}
const es = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], rs = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], ts = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
process.env.NODE_ENV;
const ns = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", os = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, yn = /* @__PURE__ */ B.forwardRef(function(r, t) {
  let {
    onClick: n,
    relative: o,
    reloadDocument: a,
    replace: i,
    state: l,
    target: c,
    to: u,
    preventScrollReset: d
  } = r, m = it(r, es), {
    basename: y
  } = B.useContext(rr), k, E = !1;
  if (typeof u == "string" && os.test(u) && (k = u, ns)) {
    let S = new URL(window.location.href), N = u.startsWith("//") ? new URL(S.protocol + u) : new URL(u), T = ji(N.pathname, y);
    N.origin === S.origin && T != null ? u = T + N.search + N.hash : E = !0;
  }
  let C = Yi(u, {
    relative: o
  }), h = ls(u, {
    replace: i,
    state: l,
    target: c,
    preventScrollReset: d,
    relative: o
  });
  function j(S) {
    n && n(S), S.defaultPrevented || h(S);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ B.createElement("a", Ue({}, m, {
      href: k || C,
      onClick: E || a ? n : j,
      ref: t,
      target: c
    }))
  );
});
process.env.NODE_ENV !== "production" && (yn.displayName = "Link");
const xn = /* @__PURE__ */ B.forwardRef(function(r, t) {
  let {
    "aria-current": n = "page",
    caseSensitive: o = !1,
    className: a = "",
    end: i = !1,
    style: l,
    to: c,
    children: u
  } = r, d = it(r, rs), m = Cr(c, {
    relative: d.relative
  }), y = dr(), k = B.useContext(bn), {
    navigator: E
  } = B.useContext(rr), C = E.encodeLocation ? E.encodeLocation(m).pathname : m.pathname, h = y.pathname, j = k && k.navigation && k.navigation.location ? k.navigation.location.pathname : null;
  o || (h = h.toLowerCase(), j = j ? j.toLowerCase() : null, C = C.toLowerCase());
  let S = h === C || !i && h.startsWith(C) && h.charAt(C.length) === "/", N = j != null && (j === C || !i && j.startsWith(C) && j.charAt(C.length) === "/"), T = S ? n : void 0, g;
  typeof a == "function" ? g = a({
    isActive: S,
    isPending: N
  }) : g = [a, S ? "active" : null, N ? "pending" : null].filter(Boolean).join(" ");
  let ie = typeof l == "function" ? l({
    isActive: S,
    isPending: N
  }) : l;
  return /* @__PURE__ */ B.createElement(yn, Ue({}, d, {
    "aria-current": T,
    className: g,
    ref: t,
    style: ie,
    to: c
  }), typeof u == "function" ? u({
    isActive: S,
    isPending: N
  }) : u);
});
process.env.NODE_ENV !== "production" && (xn.displayName = "NavLink");
const as = /* @__PURE__ */ B.forwardRef((e, r) => /* @__PURE__ */ B.createElement(wn, Ue({}, e, {
  ref: r
})));
process.env.NODE_ENV !== "production" && (as.displayName = "Form");
const wn = /* @__PURE__ */ B.forwardRef((e, r) => {
  let {
    reloadDocument: t,
    replace: n,
    method: o = vr,
    action: a,
    onSubmit: i,
    fetcherKey: l,
    routeId: c,
    relative: u,
    preventScrollReset: d
  } = e, m = it(e, ts), y = cs(l, c), k = o.toLowerCase() === "get" ? "get" : "post", E = Cn(a, {
    relative: u
  }), C = (h) => {
    if (i && i(h), h.defaultPrevented)
      return;
    h.preventDefault();
    let j = h.nativeEvent.submitter, S = (j == null ? void 0 : j.getAttribute("formmethod")) || o;
    y(j || h.currentTarget, {
      method: S,
      replace: n,
      relative: u,
      preventScrollReset: d
    });
  };
  return /* @__PURE__ */ B.createElement("form", Ue({
    ref: r,
    method: k,
    action: E,
    onSubmit: t ? i : C
  }, m));
});
process.env.NODE_ENV !== "production" && (wn.displayName = "FormImpl");
process.env.NODE_ENV;
var Ur;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher";
})(Ur || (Ur = {}));
var Yt;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Yt || (Yt = {}));
function is(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function ss(e) {
  let r = B.useContext(vn);
  return r || (process.env.NODE_ENV !== "production" ? Re(!1, is(e)) : Re(!1)), r;
}
function ls(e, r) {
  let {
    target: t,
    replace: n,
    state: o,
    preventScrollReset: a,
    relative: i
  } = r === void 0 ? {} : r, l = Gi(), c = dr(), u = Cr(e, {
    relative: i
  });
  return B.useCallback((d) => {
    if (Ji(d, t)) {
      d.preventDefault();
      let m = n !== void 0 ? n : Hr(c) === Hr(u);
      l(e, {
        replace: m,
        state: o,
        preventScrollReset: a,
        relative: i
      });
    }
  }, [c, l, u, n, o, t, e, a, i]);
}
function cs(e, r) {
  let {
    router: t
  } = ss(Ur.UseSubmitImpl), n = Cn();
  return B.useCallback(function(o, a) {
    if (a === void 0 && (a = {}), typeof document > "u")
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    let {
      method: i,
      encType: l,
      formData: c,
      url: u
    } = Qi(o, n, a), d = u.pathname + u.search, m = {
      replace: a.replace,
      preventScrollReset: a.preventScrollReset,
      formData: c,
      formMethod: i,
      formEncType: l
    };
    e ? (r == null && (process.env.NODE_ENV !== "production" ? Re(!1, "No routeId available for useFetcher()") : Re(!1)), t.fetch(e, r, d, m)) : t.navigate(d, m);
  }, [n, t, e, r]);
}
function Cn(e, r) {
  let {
    relative: t
  } = r === void 0 ? {} : r, {
    basename: n
  } = B.useContext(rr), o = B.useContext(wr);
  o || (process.env.NODE_ENV !== "production" ? Re(!1, "useFormAction must be used inside a RouteContext") : Re(!1));
  let [a] = o.matches.slice(-1), i = Ue({}, Cr(e || ".", {
    relative: t
  })), l = dr();
  if (e == null && (i.search = l.search, i.hash = l.hash, a.route.index)) {
    let c = new URLSearchParams(i.search);
    c.delete("index"), i.search = c.toString() ? "?" + c.toString() : "";
  }
  return (!e || e === ".") && a.route.index && (i.search = i.search ? i.search.replace(/^\?/, "?index&") : "?index"), n !== "/" && (i.pathname = i.pathname === "/" ? n : nt([n, i.pathname])), Hr(i);
}
const us = O.div`
  display: flex;
  justify-items: flex-start;
  align-items: flex-start;
`, ds = O.div`
  box-sizing: border-box;
  margin-left: 6px;
  padding-left: 15px;
  border-left: 1px solid currentColor;
  display: block;

  &[data-expanded='false'] {
    visibility: hidden;
    opacity: 0;
    transition: all 0.1s ease-out;
    max-height: 0px;
  }

  &[data-expanded='true'] {
    visibility: visible;
    opacity: 1;
    transition: all 0.1s ease-out;
    max-height: auto;
  }
`, fs = ({ data: e, depth: r = 0 }) => {
  const [t, n] = Be([]), o = (a, i) => {
    console.log(`depth: ${a}, index:${i}`);
    const l = t.includes(`${a}-${i}`);
    n(
      l ? t.filter((c) => c !== `${a}-${i}`) : [
        .../* @__PURE__ */ new Set([...t, `${a}-${i}`])
      ]
    );
  };
  return /* @__PURE__ */ f.jsx("div", { style: { display: "flex", flexDirection: "column" }, children: e.map(({ label: a = void 0, path: i, children: l = void 0 }, c) => {
    var d;
    const u = xr();
    return /* @__PURE__ */ f.jsx(
      us,
      {
        style: { display: "inline-flex", flexDirection: "column" },
        "data-depth": [`${r}`],
        "data-node": [`${i}`],
        children: /* @__PURE__ */ f.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            },
            children: [
              l ? /* @__PURE__ */ f.jsx("button", { onClick: () => o(r, c), children: /* @__PURE__ */ f.jsx(
                Ua,
                {
                  label: a,
                  something: /* @__PURE__ */ f.jsx(Fe, { size: "15px", children: t.includes(`${r}-${c}`) ? /* @__PURE__ */ f.jsx(Zr, {}) : /* @__PURE__ */ f.jsx(Go, {}) })
                }
              ) }) : /* @__PURE__ */ f.jsx(xn, { to: i, children: a }),
              l && /* @__PURE__ */ f.jsx(
                ds,
                {
                  ref: u,
                  scrollHeight: String((d = u == null ? void 0 : u.current) == null ? void 0 : d.scrollHeight),
                  style: { display: "flex", flexDirection: "column" },
                  "data-parent": [`${i}`],
                  "data-expanded": t.includes(`${r}-${c}`) ? "true" : "false",
                  children: /* @__PURE__ */ f.jsx(
                    fs,
                    {
                      data: l,
                      depth: parseInt(r) + 1,
                      parent: i
                    }
                  )
                }
              )
            ]
          }
        )
      },
      `depth_${r}_index_${c}`
    );
  }) });
}, Pe = {
  blue: {
    100: "#99d6ff",
    200: "#5cbeff",
    300: "#0A9DFF",
    400: "#007ACC",
    500: "#00568F",
    600: "#000645"
  },
  green: {
    100: "#72afb0",
    200: "#00A949",
    300: "#008439",
    400: "#005424"
  },
  yellow: {
    100: "#E98A15",
    200: "#EA8F1F",
    300: "#CD7A13"
  },
  red: {
    100: "#D00000",
    200: "#A40000",
    300: "#5A0000"
  },
  neutral: {
    100: "#FFFFFF",
    200: "#e4e4e4",
    300: "#d0d0d0",
    400: "#939393",
    500: "#4a4b53",
    600: "#3d3d3d",
    700: "#2d2d2d",
    800: "#212121",
    900: "#1d1d1d",
    1e3: "#000000"
  },
  dev: {
    debug: "pink",
    error: "red"
  },
  status: {
    warning: "#ed6c02",
    error: "#d32f2f",
    success: "#2e7d32",
    info: "#0288d1"
  }
}, Y = {
  fontFamily: "'Roboto', 'sans-serif'",
  color: Pe.neutral[400],
  backgroundColor: "transparent",
  padding: "10px",
  margin: "1rem",
  gap: "5px",
  headingColor: Pe.neutral[500],
  headingFontFamily: "Arial, Helvetica, sans-serif",
  borderWidth: "1px",
  border: `1px solid ${Pe.neutral[500]}`,
  borderRadius: "5px",
  inputHeight: "40px",
  inputPadding: "0 10px",
  dividerColor: Pe.neutral[200],
  componentIcons: Pe.neutral[400]
}, Js = {
  name: "darkTheme",
  Layout: {
    section: {
      padding: "50px",
      borderBottom: `1px solid ${Y.dividerColor}`
    },
    block: {
      padding: "0 0 50px"
    }
  },
  Heading: {
    color: Y.headingColor,
    margin: "0 0 1rem",
    lineHeight: "1.3",
    fontWeight: "400",
    fontFamily: Y.headingFontFamily,
    fontSize: {
      h1: "3.209rem",
      h2: "2.757rem",
      h3: "2.069rem",
      h4: "1.677rem",
      h5: "1.333rem",
      h6: "1.1rem"
    }
  },
  Button: {
    primary: "bg-green-500 hover:bg-green-600",
    contained: {
      color: Pe.neutral[100],
      background: Pe.neutral[400],
      hover: Pe.neutral[500],
      border: `1px solid ${Pe.neutral[100]}`
    },
    outlined: "bg-transparent text-white border-white",
    text: {
      color: Pe.neutral[500]
    }
  },
  Icon: {
    stroke: "black",
    fill: "",
    fillOpacity: 0
  },
  Input: {
    color: Y.color,
    inputHeight: Y.inputHeight,
    backgroundColor: Pe.neutral[100],
    border: Y.border,
    borderRadius: Y.borderRadius
  },
  Text: {
    color: Y.color,
    marginBottom: Y.padding
  },
  Accordion: {
    title: {
      color: Y.headingColor
    },
    content: {
      color: Y.color
    },
    componentIcons: {
      stroke: Y.componentIcons,
      fill: "none"
    }
  },
  LabelSomething: {
    gap: Y.gap
  },
  Separator: {
    color: Y.dividerColor,
    borderColor: Y.dividerColor,
    backgroundColor: Y.dividerColor,
    margin: Y.margin,
    border: `${Y.borderWidth} solid ${Y.dividerColor}`
  },
  Select: {
    padding: Y.padding,
    inputHeight: Y.inputHeight,
    inputPadding: Y.inputPadding,
    color: Y.color,
    backgroundColor: Y.backgroundColor,
    border: Y.border,
    borderRadius: Y.borderRadius
  },
  Slider: {
    formElementBackground: "#000000"
  },
  Checkbox: {
    borderRadius: Y.borderRadius,
    border: Y.border,
    backgroundColor: Y.backgroundColor
  },
  RadioButton: {
    borderRadius: Y.borderRadius,
    border: Y.border,
    backgroundColor: Y.backgroundColor
  },
  Counter: {
    height: Y.inputHeight,
    border: Y.border,
    borderRadius: Y.borderRadius,
    backgroundColor: Y.backgroundColor
  }
}, Te = {
  blue: {
    100: "#99d6ff",
    200: "#5cbeff",
    300: "#0A9DFF",
    400: "#007ACC",
    500: "#00568F",
    600: "#000645"
  },
  green: {
    100: "#72afb0",
    200: "#00A949",
    300: "#008439",
    400: "#005424"
  },
  yellow: {
    100: "#E98A15",
    200: "#EA8F1F",
    300: "#CD7A13"
  },
  red: {
    100: "#D00000",
    200: "#A40000",
    300: "#5A0000"
  },
  neutral: {
    100: "#FFFFFF",
    200: "#e4e4e4",
    300: "#d0d0d0",
    400: "#939393",
    500: "#4a4b53",
    600: "#3d3d3d",
    700: "#2d2d2d",
    800: "#212121",
    900: "#1d1d1d",
    1e3: "#000000"
  },
  dev: {
    debug: "pink",
    error: "red"
  },
  status: {
    warning: "#ed6c02",
    error: "#d32f2f",
    success: "#2e7d32",
    info: "#0288d1"
  }
}, G = {
  fontFamily: "'Roboto', 'sans-serif'",
  color: Te.neutral[400],
  backgroundColor: "transparent",
  padding: "10px",
  margin: "1rem",
  gap: "5px",
  headingColor: Te.neutral[500],
  headingFontFamily: "Arial, Helvetica, sans-serif",
  borderWidth: "1px",
  border: `1px solid ${Te.neutral[500]}`,
  borderRadius: "5px",
  inputHeight: "40px",
  inputPadding: "0 10px",
  dividerColor: Te.neutral[200],
  componentIcons: Te.neutral[400]
}, Qs = {
  name: "lightTheme",
  Layout: {
    section: {
      padding: "50px",
      borderBottom: `1px solid ${G.dividerColor}`
    },
    block: {
      padding: "0 0 50px"
    }
  },
  Heading: {
    color: G.headingColor,
    margin: "0 0 1rem",
    lineHeight: "1.3",
    fontWeight: "400",
    fontFamily: G.headingFontFamily,
    fontSize: {
      h1: "3.209rem",
      h2: "2.757rem",
      h3: "2.069rem",
      h4: "1.677rem",
      h5: "1.333rem",
      h6: "1.1rem"
    }
  },
  Button: {
    primary: "bg-green-500 hover:bg-green-600",
    contained: {
      color: Te.neutral[100],
      background: Te.neutral[400],
      hover: Te.neutral[500],
      border: `1px solid ${Te.neutral[100]}`
    },
    outlined: "bg-transparent text-black border-black",
    text: {
      color: Te.neutral[500]
    }
  },
  Icon: {
    stroke: "black",
    fill: "",
    fillOpacity: 0
  },
  Input: {
    color: G.color,
    inputHeight: G.inputHeight,
    backgroundColor: Te.neutral[100],
    border: G.border,
    borderRadius: G.borderRadius
  },
  Text: {
    color: G.color,
    marginBottom: G.padding
  },
  Accordion: {
    title: {
      color: G.headingColor
    },
    content: {
      color: G.color
    },
    componentIcons: {
      stroke: G.componentIcons,
      fill: "none"
    }
  },
  LabelSomething: {
    gap: G.gap
  },
  Separator: {
    color: G.dividerColor,
    borderColor: G.dividerColor,
    backgroundColor: G.dividerColor,
    margin: G.margin,
    border: `${G.borderWidth} solid ${G.dividerColor}`
  },
  Select: {
    padding: G.padding,
    inputHeight: G.inputHeight,
    inputPadding: G.inputPadding,
    color: G.color,
    backgroundColor: G.backgroundColor,
    border: G.border,
    borderRadius: G.borderRadius
  },
  Slider: {
    formElementBackground: "#000000"
  },
  Checkbox: {
    borderRadius: G.borderRadius,
    border: G.border,
    backgroundColor: G.backgroundColor
  },
  RadioButton: {
    borderRadius: G.borderRadius,
    border: G.border,
    backgroundColor: G.backgroundColor
  },
  Counter: {
    height: G.inputHeight,
    border: G.border,
    borderRadius: G.borderRadius,
    backgroundColor: G.backgroundColor
  }
}, el = () => {
  const [e, r] = Be(!1);
  return [e, {
    onFocus: () => {
      r(!0), console.log("focused");
    },
    onBlur: () => {
      console.log("blurred"), r(!1);
    }
  }];
}, rl = () => {
  const [e, r] = Be(!1);
  return [e, {
    onMouseOver: () => r(!0),
    onMouseOut: () => r(!1)
  }];
}, tl = (e, r) => {
  let t = !0, n = [];
  if (!r)
    return console.log("NO RULES???"), !0;
  if (r.isRequired && (t = e !== "", typeof e == "object" && Object.keys(e).some((a) => e[a] === null || e[a] === void 0 || e[a] === "" || e[a] !== null && e[a].trim() === "") === !0 && (console.log("Object has empty values!!!"), t = !1), t === !1 && n.push("Input is required")), r.isDate) {
    let o = new Date(e);
    t = o !== "Invalid Date" && !isNaN(o) && e !== null, console.log("Date is valid: ", t), t === !1 && n.push("Date is not valid");
  }
  return r.minLength && (t = e.length >= r.minLength && t, t === !1 && n.push(`Input requires a minimum length of ${r.minLength}`)), r.maxLength && (t = e.length <= r.maxLength && t, t === !1 && n.push(`Input should have a maximum length of ${r.maxLength}`)), r.isEmail && (t = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e) && t, t === !1 && n.push("Invalid email")), r.isNumber && (t = /^\d+$/.test(e) && t, t === !1 && n.push("Value must be a numeric value")), r.isPhoneNumber && (t = /(^\d{3}?[ |-|.]*?[0-9]{3}[ |-|.]*?[0-9]{4}$)|^\(\d{3}\)[ |-|.]*?(\d{3})[ |-|.]*?\d{4}|(^\(?\+?\d{2}\)?)[ |.|-]*?(\d{2})[ |.|-]*?(\d{3})[ |.|-]*?(\d{4})$/.test(e) && t, t === !1 && n.push("Value must be a valid contact number")), { isValid: t, errors: n };
};
export {
  js as Accordion,
  hs as BookmarkIcon,
  Br as Button,
  Ps as Card,
  Yo as CheckIcon,
  Ts as Checkbox,
  Ns as CheckboxGroup,
  Zr as ChevronDownIcon,
  Go as ChevronRightIcon,
  qo as ChevronUpIcon,
  ms as ClearIcon,
  gs as CloseIcon,
  vs as CopyIcon,
  Os as Counter,
  bs as GithubIcon,
  $s as Heading,
  ys as HeartIcon,
  xs as HideIcon,
  Fe as Icon,
  Ba as Input,
  Is as InputWrapper,
  Ua as LabelSomething,
  Ms as Layout,
  Ls as List,
  Ds as ListItem,
  ws as MinusIcon,
  Jr as MinusSmallIcon,
  Cs as PlusIcon,
  an as PlusSmallIcon,
  zs as ProgressLoader,
  Fs as RadioButton,
  Vs as RadioButtonGroup,
  Xo as RadioButtonIcon,
  Ss as SearchIcon,
  Bs as Select,
  oi as Separator,
  ks as ShoppingCartIcon,
  Es as ShowIcon,
  ui as Slider,
  Ws as SliderMultiRange,
  Rs as SmileyIcon,
  Hs as Snackbar,
  As as SpeechIcon,
  Us as Spinner,
  Ys as Table,
  Gs as Text,
  Xs as ThemeContextProvider,
  _s as ThumbsUpIcon,
  qs as ToggleButton,
  Ks as ToggleDarkMode,
  Zs as ToggleSwitch,
  fs as Tree,
  tl as checkValidity,
  Js as darkTheme,
  Qs as lightTheme,
  el as useFocus,
  rl as useHover,
  wi as useTheme,
  ki as useUID
};
//# sourceMappingURL=index.js.map
