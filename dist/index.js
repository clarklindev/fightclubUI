import * as T from "react";
import xt, { useContext as Xt, useMemo as ra, useRef as $t, useDebugValue as En, createElement as na, createContext as oa, useState as ye, useEffect as Ft, forwardRef as aa } from "react";
import ia from "react-dom";
var n = {}, sa = {
  get exports() {
    return n;
  },
  set exports(e) {
    n = e;
  }
}, rr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sn;
function la() {
  if (Sn)
    return rr;
  Sn = 1;
  var e = xt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(c, d, h) {
    var u, p = {}, v = null, E = null;
    h !== void 0 && (v = "" + h), d.key !== void 0 && (v = "" + d.key), d.ref !== void 0 && (E = d.ref);
    for (u in d)
      o.call(d, u) && !i.hasOwnProperty(u) && (p[u] = d[u]);
    if (c && c.defaultProps)
      for (u in d = c.defaultProps, d)
        p[u] === void 0 && (p[u] = d[u]);
    return { $$typeof: t, type: c, key: v, ref: E, props: p, _owner: a.current };
  }
  return rr.Fragment = r, rr.jsx = s, rr.jsxs = s, rr;
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
var kn;
function ca() {
  return kn || (kn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = xt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), S = Symbol.iterator, x = "@@iterator";
    function l(f) {
      if (f === null || typeof f != "object")
        return null;
      var R = S && f[S] || f[x];
      return typeof R == "function" ? R : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(f) {
      {
        for (var R = arguments.length, M = new Array(R > 1 ? R - 1 : 0), X = 1; X < R; X++)
          M[X - 1] = arguments[X];
        _("error", f, M);
      }
    }
    function _(f, R, M) {
      {
        var X = w.ReactDebugCurrentFrame, xe = X.getStackAddendum();
        xe !== "" && (R += "%s", M = M.concat([xe]));
        var _e = M.map(function(pe) {
          return String(pe);
        });
        _e.unshift("Warning: " + R), Function.prototype.apply.call(console[f], console, _e);
      }
    }
    var N = !1, g = !1, J = !1, de = !1, K = !1, Re;
    Re = Symbol.for("react.module.reference");
    function Me(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === o || f === i || K || f === a || f === h || f === u || de || f === E || N || g || J || typeof f == "object" && f !== null && (f.$$typeof === v || f.$$typeof === p || f.$$typeof === s || f.$$typeof === c || f.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === Re || f.getModuleId !== void 0));
    }
    function $e(f, R, M) {
      var X = f.displayName;
      if (X)
        return X;
      var xe = R.displayName || R.name || "";
      return xe !== "" ? M + "(" + xe + ")" : M;
    }
    function H(f) {
      return f.displayName || "Context";
    }
    function oe(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            var R = f;
            return H(R) + ".Consumer";
          case s:
            var M = f;
            return H(M._context) + ".Provider";
          case d:
            return $e(f, f.render, "ForwardRef");
          case p:
            var X = f.displayName || null;
            return X !== null ? X : oe(f.type) || "Memo";
          case v: {
            var xe = f, _e = xe._payload, pe = xe._init;
            try {
              return oe(pe(_e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ue = Object.assign, ae = 0, ze, Le, Ae, Be, he, Oe, I;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function O() {
      {
        if (ae === 0) {
          ze = console.log, Le = console.info, Ae = console.warn, Be = console.error, he = console.group, Oe = console.groupCollapsed, I = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: P,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        ae++;
      }
    }
    function W() {
      {
        if (ae--, ae === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ue({}, f, {
              value: ze
            }),
            info: ue({}, f, {
              value: Le
            }),
            warn: ue({}, f, {
              value: Ae
            }),
            error: ue({}, f, {
              value: Be
            }),
            group: ue({}, f, {
              value: he
            }),
            groupCollapsed: ue({}, f, {
              value: Oe
            }),
            groupEnd: ue({}, f, {
              value: I
            })
          });
        }
        ae < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var m = w.ReactCurrentDispatcher, ee;
    function A(f, R, M) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (xe) {
            var X = xe.stack.trim().match(/\n( *(at )?)/);
            ee = X && X[1] || "";
          }
        return `
` + ee + f;
      }
    }
    var ve = !1, te;
    {
      var Q = typeof WeakMap == "function" ? WeakMap : Map;
      te = new Q();
    }
    function j(f, R) {
      if (!f || ve)
        return "";
      {
        var M = te.get(f);
        if (M !== void 0)
          return M;
      }
      var X;
      ve = !0;
      var xe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _e;
      _e = m.current, m.current = null, O();
      try {
        if (R) {
          var pe = function() {
            throw Error();
          };
          if (Object.defineProperty(pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(pe, []);
            } catch (yt) {
              X = yt;
            }
            Reflect.construct(f, [], pe);
          } else {
            try {
              pe.call();
            } catch (yt) {
              X = yt;
            }
            f.call(pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (yt) {
            X = yt;
          }
          f();
        }
      } catch (yt) {
        if (yt && X && typeof yt.stack == "string") {
          for (var ie = yt.stack.split(`
`), Je = X.stack.split(`
`), Ue = ie.length - 1, We = Je.length - 1; Ue >= 1 && We >= 0 && ie[Ue] !== Je[We]; )
            We--;
          for (; Ue >= 1 && We >= 0; Ue--, We--)
            if (ie[Ue] !== Je[We]) {
              if (Ue !== 1 || We !== 1)
                do
                  if (Ue--, We--, We < 0 || ie[Ue] !== Je[We]) {
                    var st = `
` + ie[Ue].replace(" at new ", " at ");
                    return f.displayName && st.includes("<anonymous>") && (st = st.replace("<anonymous>", f.displayName)), typeof f == "function" && te.set(f, st), st;
                  }
                while (Ue >= 1 && We >= 0);
              break;
            }
        }
      } finally {
        ve = !1, m.current = _e, W(), Error.prepareStackTrace = xe;
      }
      var Ht = f ? f.displayName || f.name : "", jn = Ht ? A(Ht) : "";
      return typeof f == "function" && te.set(f, jn), jn;
    }
    function Se(f, R, M) {
      return j(f, !1);
    }
    function D(f) {
      var R = f.prototype;
      return !!(R && R.isReactComponent);
    }
    function G(f, R, M) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return j(f, D(f));
      if (typeof f == "string")
        return A(f);
      switch (f) {
        case h:
          return A("Suspense");
        case u:
          return A("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case d:
            return Se(f.render);
          case p:
            return G(f.type, R, M);
          case v: {
            var X = f, xe = X._payload, _e = X._init;
            try {
              return G(_e(xe), R, M);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, re = {}, Fe = w.ReactDebugCurrentFrame;
    function rt(f) {
      if (f) {
        var R = f._owner, M = G(f.type, f._source, R ? R.type : null);
        Fe.setExtraStackFrame(M);
      } else
        Fe.setExtraStackFrame(null);
    }
    function Ve(f, R, M, X, xe) {
      {
        var _e = Function.call.bind(be);
        for (var pe in f)
          if (_e(f, pe)) {
            var ie = void 0;
            try {
              if (typeof f[pe] != "function") {
                var Je = Error((X || "React class") + ": " + M + " type `" + pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Je.name = "Invariant Violation", Je;
              }
              ie = f[pe](R, pe, X, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ue) {
              ie = Ue;
            }
            ie && !(ie instanceof Error) && (rt(xe), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", M, pe, typeof ie), rt(null)), ie instanceof Error && !(ie.message in re) && (re[ie.message] = !0, rt(xe), C("Failed %s type: %s", M, ie.message), rt(null));
          }
      }
    }
    var ot = Array.isArray;
    function Qe(f) {
      return ot(f);
    }
    function Ke(f) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, M = R && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return M;
      }
    }
    function U(f) {
      try {
        return Te(f), !1;
      } catch {
        return !0;
      }
    }
    function Te(f) {
      return "" + f;
    }
    function kt(f) {
      if (U(f))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(f)), Te(f);
    }
    var at = w.ReactCurrentOwner, it = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, b, y, k;
    k = {};
    function $(f) {
      if (be.call(f, "ref")) {
        var R = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function z(f) {
      if (be.call(f, "key")) {
        var R = Object.getOwnPropertyDescriptor(f, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Y(f, R) {
      if (typeof f.ref == "string" && at.current && R && at.current.stateNode !== R) {
        var M = oe(at.current.type);
        k[M] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', oe(at.current.type), f.ref), k[M] = !0);
      }
    }
    function q(f, R) {
      {
        var M = function() {
          b || (b = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        M.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function Z(f, R) {
      {
        var M = function() {
          y || (y = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        M.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var V = function(f, R, M, X, xe, _e, pe) {
      var ie = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: R,
        ref: M,
        props: pe,
        // Record the component responsible for creating this element.
        _owner: _e
      };
      return ie._store = {}, Object.defineProperty(ie._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ie, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: X
      }), Object.defineProperty(ie, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: xe
      }), Object.freeze && (Object.freeze(ie.props), Object.freeze(ie)), ie;
    };
    function ke(f, R, M, X, xe) {
      {
        var _e, pe = {}, ie = null, Je = null;
        M !== void 0 && (kt(M), ie = "" + M), z(R) && (kt(R.key), ie = "" + R.key), $(R) && (Je = R.ref, Y(R, xe));
        for (_e in R)
          be.call(R, _e) && !it.hasOwnProperty(_e) && (pe[_e] = R[_e]);
        if (f && f.defaultProps) {
          var Ue = f.defaultProps;
          for (_e in Ue)
            pe[_e] === void 0 && (pe[_e] = Ue[_e]);
        }
        if (ie || Je) {
          var We = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          ie && q(pe, We), Je && Z(pe, We);
        }
        return V(f, ie, Je, xe, X, at.current, pe);
      }
    }
    var fe = w.ReactCurrentOwner, et = w.ReactDebugCurrentFrame;
    function Ne(f) {
      if (f) {
        var R = f._owner, M = G(f.type, f._source, R ? R.type : null);
        et.setExtraStackFrame(M);
      } else
        et.setExtraStackFrame(null);
    }
    var He;
    He = !1;
    function Xe(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function Rt() {
      {
        if (fe.current) {
          var f = oe(fe.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function tr(f) {
      {
        if (f !== void 0) {
          var R = f.fileName.replace(/^.*[\\\/]/, ""), M = f.lineNumber;
          return `

Check your code at ` + R + ":" + M + ".";
        }
        return "";
      }
    }
    var At = {};
    function _t(f) {
      {
        var R = Rt();
        if (!R) {
          var M = typeof f == "string" ? f : f.displayName || f.name;
          M && (R = `

Check the top-level render call using <` + M + ">.");
        }
        return R;
      }
    }
    function Bt(f, R) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var M = _t(R);
        if (At[M])
          return;
        At[M] = !0;
        var X = "";
        f && f._owner && f._owner !== fe.current && (X = " It was passed a child from " + oe(f._owner.type) + "."), Ne(f), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, X), Ne(null);
      }
    }
    function Vt(f, R) {
      {
        if (typeof f != "object")
          return;
        if (Qe(f))
          for (var M = 0; M < f.length; M++) {
            var X = f[M];
            Xe(X) && Bt(X, R);
          }
        else if (Xe(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var xe = l(f);
          if (typeof xe == "function" && xe !== f.entries)
            for (var _e = xe.call(f), pe; !(pe = _e.next()).done; )
              Xe(pe.value) && Bt(pe.value, R);
        }
      }
    }
    function qe(f) {
      {
        var R = f.type;
        if (R == null || typeof R == "string")
          return;
        var M;
        if (typeof R == "function")
          M = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === p))
          M = R.propTypes;
        else
          return;
        if (M) {
          var X = oe(R);
          Ve(M, f.props, "prop", X, f);
        } else if (R.PropTypes !== void 0 && !He) {
          He = !0;
          var xe = oe(R);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", xe || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nt(f) {
      {
        for (var R = Object.keys(f.props), M = 0; M < R.length; M++) {
          var X = R[M];
          if (X !== "children" && X !== "key") {
            Ne(f), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), Ne(null);
            break;
          }
        }
        f.ref !== null && (Ne(f), C("Invalid attribute `ref` supplied to `React.Fragment`."), Ne(null));
      }
    }
    function pt(f, R, M, X, xe, _e) {
      {
        var pe = Me(f);
        if (!pe) {
          var ie = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (ie += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Je = tr(xe);
          Je ? ie += Je : ie += Rt();
          var Ue;
          f === null ? Ue = "null" : Qe(f) ? Ue = "array" : f !== void 0 && f.$$typeof === t ? (Ue = "<" + (oe(f.type) || "Unknown") + " />", ie = " Did you accidentally export a JSX literal instead of a component?") : Ue = typeof f, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ue, ie);
        }
        var We = ke(f, R, M, xe, _e);
        if (We == null)
          return We;
        if (pe) {
          var st = R.children;
          if (st !== void 0)
            if (X)
              if (Qe(st)) {
                for (var Ht = 0; Ht < st.length; Ht++)
                  Vt(st[Ht], f);
                Object.freeze && Object.freeze(st);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Vt(st, f);
        }
        return f === o ? nt(We) : qe(We), We;
      }
    }
    function Mt(f, R, M) {
      return pt(f, R, M, !0);
    }
    function Ir(f, R, M) {
      return pt(f, R, M, !1);
    }
    var Lr = Ir, lt = Mt;
    nr.Fragment = o, nr.jsx = Lr, nr.jsxs = lt;
  }()), nr;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = la() : e.exports = ca();
})(sa);
var cr = {}, or = ia;
if (process.env.NODE_ENV === "production")
  cr.createRoot = or.createRoot, cr.hydrateRoot = or.hydrateRoot;
else {
  var xr = or.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  cr.createRoot = function(e, t) {
    xr.usingClientEntryPoint = !0;
    try {
      return or.createRoot(e, t);
    } finally {
      xr.usingClientEntryPoint = !1;
    }
  }, cr.hydrateRoot = function(e, t, r) {
    xr.usingClientEntryPoint = !0;
    try {
      return or.hydrateRoot(e, t, r);
    } finally {
      xr.usingClientEntryPoint = !1;
    }
  };
}
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
function ge() {
  return ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, ge.apply(this, arguments);
}
var Ge;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Ge || (Ge = {}));
const Rn = "popstate";
function da(e) {
  e === void 0 && (e = {});
  function t(o, a) {
    let {
      pathname: i,
      search: s,
      hash: c
    } = o.location;
    return fr(
      "",
      {
        pathname: i,
        search: s,
        hash: c
      },
      // state defaults to `null` because `window.history.state` does
      a.state && a.state.usr || null,
      a.state && a.state.key || "default"
    );
  }
  function r(o, a) {
    return typeof a == "string" ? a : bt(a);
  }
  return fa(t, r, null, e);
}
function F(e, t) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(t);
}
function tt(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {
    }
  }
}
function ua() {
  return Math.random().toString(36).substr(2, 8);
}
function An(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t
  };
}
function fr(e, t, r, o) {
  return r === void 0 && (r = null), ge({
    pathname: typeof e == "string" ? e : e.pathname,
    search: "",
    hash: ""
  }, typeof t == "string" ? jt(t) : t, {
    state: r,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: t && t.key || o || ua()
  });
}
function bt(e) {
  let {
    pathname: t = "/",
    search: r = "",
    hash: o = ""
  } = e;
  return r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r), o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o), t;
}
function jt(e) {
  let t = {};
  if (e) {
    let r = e.indexOf("#");
    r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
    let o = e.indexOf("?");
    o >= 0 && (t.search = e.substr(o), e = e.substr(0, o)), e && (t.pathname = e);
  }
  return t;
}
function fa(e, t, r, o) {
  o === void 0 && (o = {});
  let {
    window: a = document.defaultView,
    v5Compat: i = !1
  } = o, s = a.history, c = Ge.Pop, d = null, h = u();
  h == null && (h = 0, s.replaceState(ge({}, s.state, {
    idx: h
  }), ""));
  function u() {
    return (s.state || {
      idx: null
    }).idx;
  }
  function p() {
    c = Ge.Pop;
    let l = u(), w = l == null ? null : l - h;
    h = l, d && d({
      action: c,
      location: x.location,
      delta: w
    });
  }
  function v(l, w) {
    c = Ge.Push;
    let C = fr(x.location, l, w);
    r && r(C, l), h = u() + 1;
    let _ = An(C, h), N = x.createHref(C);
    try {
      s.pushState(_, "", N);
    } catch {
      a.location.assign(N);
    }
    i && d && d({
      action: c,
      location: x.location,
      delta: 1
    });
  }
  function E(l, w) {
    c = Ge.Replace;
    let C = fr(x.location, l, w);
    r && r(C, l), h = u();
    let _ = An(C, h), N = x.createHref(C);
    s.replaceState(_, "", N), i && d && d({
      action: c,
      location: x.location,
      delta: 0
    });
  }
  function S(l) {
    let w = a.location.origin !== "null" ? a.location.origin : a.location.href, C = typeof l == "string" ? l : bt(l);
    return F(w, "No window.location.(origin|href) available to create URL for href: " + C), new URL(C, w);
  }
  let x = {
    get action() {
      return c;
    },
    get location() {
      return e(a, s);
    },
    listen(l) {
      if (d)
        throw new Error("A history only accepts one active listener");
      return a.addEventListener(Rn, p), d = l, () => {
        a.removeEventListener(Rn, p), d = null;
      };
    },
    createHref(l) {
      return t(a, l);
    },
    createURL: S,
    encodeLocation(l) {
      let w = S(l);
      return {
        pathname: w.pathname,
        search: w.search,
        hash: w.hash
      };
    },
    push: v,
    replace: E,
    go(l) {
      return s.go(l);
    }
  };
  return x;
}
var Ye;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Ye || (Ye = {}));
const ha = /* @__PURE__ */ new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);
function pa(e) {
  return e.index === !0;
}
function mo(e, t, r, o) {
  return r === void 0 && (r = []), o === void 0 && (o = {}), e.map((a, i) => {
    let s = [...r, i], c = typeof a.id == "string" ? a.id : s.join("-");
    if (F(a.index !== !0 || !a.children, "Cannot specify children on an index route"), F(!o[c], 'Found a route id collision on id "' + c + `".  Route id's must be globally unique within Data Router usages`), pa(a)) {
      let d = ge({}, a, {
        hasErrorBoundary: t(a),
        id: c
      });
      return o[c] = d, d;
    } else {
      let d = ge({}, a, {
        id: c,
        hasErrorBoundary: t(a),
        children: void 0
      });
      return o[c] = d, a.children && (d.children = mo(a.children, t, s, o)), d;
    }
  });
}
function Ut(e, t, r) {
  r === void 0 && (r = "/");
  let o = typeof t == "string" ? jt(t) : t, a = gr(o.pathname || "/", r);
  if (a == null)
    return null;
  let i = go(e);
  ma(i);
  let s = null;
  for (let c = 0; s == null && c < i.length; ++c)
    s = Ea(
      i[c],
      // Incoming pathnames are generally encoded from either window.location
      // or from router.navigate, but we want to match against the unencoded
      // paths in the route definitions.  Memory router locations won't be
      // encoded here but there also shouldn't be anything to decode so this
      // should be a safe operation.  This avoids needing matchRoutes to be
      // history-aware.
      Ra(a)
    );
  return s;
}
function go(e, t, r, o) {
  t === void 0 && (t = []), r === void 0 && (r = []), o === void 0 && (o = "");
  let a = (i, s, c) => {
    let d = {
      relativePath: c === void 0 ? i.path || "" : c,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i
    };
    d.relativePath.startsWith("/") && (F(d.relativePath.startsWith(o), 'Absolute route path "' + d.relativePath + '" nested under path ' + ('"' + o + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), d.relativePath = d.relativePath.slice(o.length));
    let h = vt([o, d.relativePath]), u = r.concat(d);
    i.children && i.children.length > 0 && (F(
      // Our types know better, but runtime JS may not!
      // @ts-expect-error
      i.index !== !0,
      "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + h + '".')
    ), go(i.children, t, u, h)), !(i.path == null && !i.index) && t.push({
      path: h,
      score: Ca(h, i.index),
      routesMeta: u
    });
  };
  return e.forEach((i, s) => {
    var c;
    if (i.path === "" || !((c = i.path) != null && c.includes("?")))
      a(i, s);
    else
      for (let d of vo(i.path))
        a(i, s, d);
  }), t;
}
function vo(e) {
  let t = e.split("/");
  if (t.length === 0)
    return [];
  let [r, ...o] = t, a = r.endsWith("?"), i = r.replace(/\?$/, "");
  if (o.length === 0)
    return a ? [i, ""] : [i];
  let s = vo(o.join("/")), c = [];
  return c.push(...s.map((d) => d === "" ? i : [i, d].join("/"))), a && c.push(...s), c.map((d) => e.startsWith("/") && d === "" ? "/" : d);
}
function ma(e) {
  e.sort((t, r) => t.score !== r.score ? r.score - t.score : ja(t.routesMeta.map((o) => o.childrenIndex), r.routesMeta.map((o) => o.childrenIndex)));
}
const ga = /^:\w+$/, va = 3, ba = 2, xa = 1, ya = 10, wa = -2, _n = (e) => e === "*";
function Ca(e, t) {
  let r = e.split("/"), o = r.length;
  return r.some(_n) && (o += wa), t && (o += ba), r.filter((a) => !_n(a)).reduce((a, i) => a + (ga.test(i) ? va : i === "" ? xa : ya), o);
}
function ja(e, t) {
  return e.length === t.length && e.slice(0, -1).every((o, a) => o === t[a]) ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    e[e.length - 1] - t[t.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function Ea(e, t) {
  let {
    routesMeta: r
  } = e, o = {}, a = "/", i = [];
  for (let s = 0; s < r.length; ++s) {
    let c = r[s], d = s === r.length - 1, h = a === "/" ? t : t.slice(a.length) || "/", u = Sa({
      path: c.relativePath,
      caseSensitive: c.caseSensitive,
      end: d
    }, h);
    if (!u)
      return null;
    Object.assign(o, u.params);
    let p = c.route;
    i.push({
      // TODO: Can this as be avoided?
      params: o,
      pathname: vt([a, u.pathname]),
      pathnameBase: Pa(vt([a, u.pathnameBase])),
      route: p
    }), u.pathnameBase !== "/" && (a = vt([a, u.pathnameBase]));
  }
  return i;
}
function Sa(e, t) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [r, o] = ka(e.path, e.caseSensitive, e.end), a = t.match(r);
  if (!a)
    return null;
  let i = a[0], s = i.replace(/(.)\/+$/, "$1"), c = a.slice(1);
  return {
    params: o.reduce((h, u, p) => {
      if (u === "*") {
        let v = c[p] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      return h[u] = Aa(c[p] || "", u), h;
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e
  };
}
function ka(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !0), tt(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let o = [], a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (s, c) => (o.push(c), "/([^\\/]+)"));
  return e.endsWith("*") ? (o.push("*"), a += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : r ? a += "\\/*$" : e !== "" && e !== "/" && (a += "(?:(?=\\/|$))"), [new RegExp(a, t ? void 0 : "i"), o];
}
function Ra(e) {
  try {
    return decodeURI(e);
  } catch (t) {
    return tt(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + t + ").")), e;
  }
}
function Aa(e, t) {
  try {
    return decodeURIComponent(e);
  } catch (r) {
    return tt(!1, 'The value for the URL param "' + t + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + r + ").")), e;
  }
}
function gr(e, t) {
  if (t === "/")
    return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase()))
    return null;
  let r = t.endsWith("/") ? t.length - 1 : t.length, o = e.charAt(r);
  return o && o !== "/" ? null : e.slice(r) || "/";
}
function _a(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: r,
    search: o = "",
    hash: a = ""
  } = typeof e == "string" ? jt(e) : e;
  return {
    pathname: r ? r.startsWith("/") ? r : Ta(r, t) : t,
    search: Na(o),
    hash: Da(a)
  };
}
function Ta(e, t) {
  let r = t.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((a) => {
    a === ".." ? r.length > 1 && r.pop() : a !== "." && r.push(a);
  }), r.length > 1 ? r.join("/") : "/";
}
function $r(e, t, r, o) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + t + "` field [" + JSON.stringify(o) + "].  Please separate it out to the ") + ("`to." + r + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function Pr(e) {
  return e.filter((t, r) => r === 0 || t.route.path && t.route.path.length > 0);
}
function rn(e, t, r, o) {
  o === void 0 && (o = !1);
  let a;
  typeof e == "string" ? a = jt(e) : (a = ge({}, e), F(!a.pathname || !a.pathname.includes("?"), $r("?", "pathname", "search", a)), F(!a.pathname || !a.pathname.includes("#"), $r("#", "pathname", "hash", a)), F(!a.search || !a.search.includes("#"), $r("#", "search", "hash", a)));
  let i = e === "" || a.pathname === "", s = i ? "/" : a.pathname, c;
  if (o || s == null)
    c = r;
  else {
    let p = t.length - 1;
    if (s.startsWith("..")) {
      let v = s.split("/");
      for (; v[0] === ".."; )
        v.shift(), p -= 1;
      a.pathname = v.join("/");
    }
    c = p >= 0 ? t[p] : "/";
  }
  let d = _a(a, c), h = s && s !== "/" && s.endsWith("/"), u = (i || s === ".") && r.endsWith("/");
  return !d.pathname.endsWith("/") && (h || u) && (d.pathname += "/"), d;
}
const vt = (e) => e.join("/").replace(/\/\/+/g, "/"), Pa = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Na = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, Da = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
class nn {
  constructor(t, r, o, a) {
    a === void 0 && (a = !1), this.status = t, this.statusText = r || "", this.internal = a, o instanceof Error ? (this.data = o.toString(), this.error = o) : this.data = o;
  }
}
function bo(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e;
}
const xo = ["post", "put", "patch", "delete"], Ma = new Set(xo), Oa = ["get", ...xo], Ia = new Set(Oa), La = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]), $a = /* @__PURE__ */ new Set([307, 308]), Fr = {
  state: "idle",
  location: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0
}, Fa = {
  state: "idle",
  data: void 0,
  formMethod: void 0,
  formAction: void 0,
  formEncType: void 0,
  formData: void 0
}, Tn = {
  state: "unblocked",
  proceed: void 0,
  reset: void 0,
  location: void 0
}, yo = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, wo = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", za = !wo, Ba = (e) => !!e.hasErrorBoundary;
function Va(e) {
  F(e.routes.length > 0, "You must provide a non-empty routes array to createRouter");
  let t = e.detectErrorBoundary || Ba, r = {}, o = mo(e.routes, t, void 0, r), a, i = ge({
    v7_normalizeFormMethod: !1
  }, e.future), s = null, c = /* @__PURE__ */ new Set(), d = null, h = null, u = null, p = e.hydrationData != null, v = Ut(o, e.history.location, e.basename), E = null;
  if (v == null) {
    let b = mt(404, {
      pathname: e.history.location.pathname
    }), {
      matches: y,
      route: k
    } = Ln(o);
    v = y, E = {
      [k.id]: b
    };
  }
  let S = (
    // All initialMatches need to be loaded before we're ready.  If we have lazy
    // functions around still then we'll need to run them in initialize()
    !v.some((b) => b.route.lazy) && // And we have to either have no loaders or have been provided hydrationData
    (!v.some((b) => b.route.loader) || e.hydrationData != null)
  ), x, l = {
    historyAction: e.history.action,
    location: e.history.location,
    matches: v,
    initialized: S,
    navigation: Fr,
    // Don't restore on initial updateState() if we were SSR'd
    restoreScrollPosition: e.hydrationData != null ? !1 : null,
    preventScrollReset: !1,
    revalidation: "idle",
    loaderData: e.hydrationData && e.hydrationData.loaderData || {},
    actionData: e.hydrationData && e.hydrationData.actionData || null,
    errors: e.hydrationData && e.hydrationData.errors || E,
    fetchers: /* @__PURE__ */ new Map(),
    blockers: /* @__PURE__ */ new Map()
  }, w = Ge.Pop, C = !1, _, N = !1, g = !1, J = [], de = [], K = /* @__PURE__ */ new Map(), Re = 0, Me = -1, $e = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Map(), ue = /* @__PURE__ */ new Map(), ae = /* @__PURE__ */ new Map(), ze = !1;
  function Le() {
    return s = e.history.listen((b) => {
      let {
        action: y,
        location: k,
        delta: $
      } = b;
      if (ze) {
        ze = !1;
        return;
      }
      tt(ae.size === 0 || $ != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
      let z = Ke({
        currentLocation: l.location,
        nextLocation: k,
        historyAction: y
      });
      if (z && $ != null) {
        ze = !0, e.history.go($ * -1), Qe(z, {
          state: "blocked",
          location: k,
          proceed() {
            Qe(z, {
              state: "proceeding",
              proceed: void 0,
              reset: void 0,
              location: k
            }), e.history.go($);
          },
          reset() {
            ot(z), he({
              blockers: new Map(x.state.blockers)
            });
          }
        });
        return;
      }
      return O(y, k);
    }), l.initialized || O(Ge.Pop, l.location), x;
  }
  function Ae() {
    s && s(), c.clear(), _ && _.abort(), l.fetchers.forEach((b, y) => G(y)), l.blockers.forEach((b, y) => ot(y));
  }
  function Be(b) {
    return c.add(b), () => c.delete(b);
  }
  function he(b) {
    l = ge({}, l, b), c.forEach((y) => y(l));
  }
  function Oe(b, y) {
    var k, $;
    let z = l.actionData != null && l.navigation.formMethod != null && wt(l.navigation.formMethod) && l.navigation.state === "loading" && ((k = b.state) == null ? void 0 : k._isRedirect) !== !0, Y;
    y.actionData ? Object.keys(y.actionData).length > 0 ? Y = y.actionData : Y = null : z ? Y = l.actionData : Y = null;
    let q = y.loaderData ? In(l.loaderData, y.loaderData, y.matches || [], y.errors) : l.loaderData;
    for (let [V] of ae)
      ot(V);
    let Z = C === !0 || l.navigation.formMethod != null && wt(l.navigation.formMethod) && (($ = b.state) == null ? void 0 : $._isRedirect) !== !0;
    a && (o = a, a = void 0), he(ge({}, y, {
      actionData: Y,
      loaderData: q,
      historyAction: w,
      location: b,
      initialized: !0,
      navigation: Fr,
      revalidation: "idle",
      restoreScrollPosition: at(b, y.matches || l.matches),
      preventScrollReset: Z,
      blockers: new Map(l.blockers)
    })), N || w === Ge.Pop || (w === Ge.Push ? e.history.push(b, b.state) : w === Ge.Replace && e.history.replace(b, b.state)), w = Ge.Pop, C = !1, N = !1, g = !1, J = [], de = [];
  }
  async function I(b, y) {
    if (typeof b == "number") {
      e.history.go(b);
      return;
    }
    let {
      path: k,
      submission: $,
      error: z
    } = Pn(b, i, y), Y = l.location, q = fr(l.location, k, y && y.state);
    q = ge({}, q, e.history.encodeLocation(q));
    let Z = y && y.replace != null ? y.replace : void 0, V = Ge.Push;
    Z === !0 ? V = Ge.Replace : Z === !1 || $ != null && wt($.formMethod) && $.formAction === l.location.pathname + l.location.search && (V = Ge.Replace);
    let ke = y && "preventScrollReset" in y ? y.preventScrollReset === !0 : void 0, fe = Ke({
      currentLocation: Y,
      nextLocation: q,
      historyAction: V
    });
    if (fe) {
      Qe(fe, {
        state: "blocked",
        location: q,
        proceed() {
          Qe(fe, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: q
          }), I(b, y);
        },
        reset() {
          ot(fe), he({
            blockers: new Map(l.blockers)
          });
        }
      });
      return;
    }
    return await O(V, q, {
      submission: $,
      // Send through the formData serialization error if we have one so we can
      // render at the right error boundary after we match routes
      pendingError: z,
      preventScrollReset: ke,
      replace: y && y.replace
    });
  }
  function P() {
    if (Se(), he({
      revalidation: "loading"
    }), l.navigation.state !== "submitting") {
      if (l.navigation.state === "idle") {
        O(l.historyAction, l.location, {
          startUninterruptedRevalidation: !0
        });
        return;
      }
      O(w || l.historyAction, l.navigation.location, {
        overrideNavigation: l.navigation
      });
    }
  }
  async function O(b, y, k) {
    _ && _.abort(), _ = null, w = b, N = (k && k.startUninterruptedRevalidation) === !0, kt(l.location, l.matches), C = (k && k.preventScrollReset) === !0;
    let $ = a || o, z = k && k.overrideNavigation, Y = Ut($, y, e.basename);
    if (!Y) {
      let Ne = mt(404, {
        pathname: y.pathname
      }), {
        matches: He,
        route: Xe
      } = Ln($);
      U(), Oe(y, {
        matches: He,
        loaderData: {},
        errors: {
          [Xe.id]: Ne
        }
      });
      return;
    }
    if (Ya(l.location, y) && !(k && k.submission && wt(k.submission.formMethod))) {
      Oe(y, {
        matches: Y
      });
      return;
    }
    _ = new AbortController();
    let q = ir(e.history, y, _.signal, k && k.submission), Z, V;
    if (k && k.pendingError)
      V = {
        [Wt(Y).route.id]: k.pendingError
      };
    else if (k && k.submission && wt(k.submission.formMethod)) {
      let Ne = await W(q, y, k.submission, Y, {
        replace: k.replace
      });
      if (Ne.shortCircuited)
        return;
      Z = Ne.pendingActionData, V = Ne.pendingActionError, z = ge({
        state: "loading",
        location: y
      }, k.submission), q = new Request(q.url, {
        signal: q.signal
      });
    }
    let {
      shortCircuited: ke,
      loaderData: fe,
      errors: et
    } = await m(q, y, Y, z, k && k.submission, k && k.fetcherSubmission, k && k.replace, Z, V);
    ke || (_ = null, Oe(y, ge({
      matches: Y
    }, Z ? {
      actionData: Z
    } : {}, {
      loaderData: fe,
      errors: et
    })));
  }
  async function W(b, y, k, $, z) {
    Se();
    let Y = ge({
      state: "submitting",
      location: y
    }, k);
    he({
      navigation: Y
    });
    let q, Z = Ur($, y);
    if (!Z.route.action && !Z.route.lazy)
      q = {
        type: Ye.error,
        error: mt(405, {
          method: b.method,
          pathname: y.pathname,
          routeId: Z.route.id
        })
      };
    else if (q = await ar("action", b, Z, $, r, t, x.basename), b.signal.aborted)
      return {
        shortCircuited: !0
      };
    if (Gt(q)) {
      let V;
      return z && z.replace != null ? V = z.replace : V = q.location === l.location.pathname + l.location.search, await Q(l, q, {
        submission: k,
        replace: V
      }), {
        shortCircuited: !0
      };
    }
    if (dr(q)) {
      let V = Wt($, Z.route.id);
      return (z && z.replace) !== !0 && (w = Ge.Push), {
        // Send back an empty object we can use to clear out any prior actionData
        pendingActionData: {},
        pendingActionError: {
          [V.route.id]: q.error
        }
      };
    }
    if (It(q))
      throw mt(400, {
        type: "defer-action"
      });
    return {
      pendingActionData: {
        [Z.route.id]: q.data
      }
    };
  }
  async function m(b, y, k, $, z, Y, q, Z, V) {
    let ke = $;
    ke || (ke = ge({
      state: "loading",
      location: y,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0
    }, z));
    let fe = z || Y ? z || Y : ke.formMethod && ke.formAction && ke.formData && ke.formEncType ? {
      formMethod: ke.formMethod,
      formAction: ke.formAction,
      formData: ke.formData,
      formEncType: ke.formEncType
    } : void 0, et = a || o, [Ne, He] = Nn(e.history, l, k, fe, y, g, J, de, oe, et, e.basename, Z, V);
    if (U((qe) => !(k && k.some((nt) => nt.route.id === qe)) || Ne && Ne.some((nt) => nt.route.id === qe)), Ne.length === 0 && He.length === 0)
      return Oe(y, ge({
        matches: k,
        loaderData: {},
        // Commit pending error if we're short circuiting
        errors: V || null
      }, Z ? {
        actionData: Z
      } : {})), {
        shortCircuited: !0
      };
    if (!N) {
      He.forEach((nt) => {
        let pt = l.fetchers.get(nt.key), Mt = {
          state: "loading",
          data: pt && pt.data,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          " _hasFetcherDoneAnything ": !0
        };
        l.fetchers.set(nt.key, Mt);
      });
      let qe = Z || l.actionData;
      he(ge({
        navigation: ke
      }, qe ? Object.keys(qe).length === 0 ? {
        actionData: null
      } : {
        actionData: qe
      } : {}, He.length > 0 ? {
        fetchers: new Map(l.fetchers)
      } : {}));
    }
    Me = ++Re, He.forEach((qe) => K.set(qe.key, _));
    let {
      results: Xe,
      loaderResults: Rt,
      fetcherResults: tr
    } = await j(l.matches, k, Ne, He, b);
    if (b.signal.aborted)
      return {
        shortCircuited: !0
      };
    He.forEach((qe) => K.delete(qe.key));
    let At = $n(Xe);
    if (At)
      return await Q(l, At, {
        replace: q
      }), {
        shortCircuited: !0
      };
    let {
      loaderData: _t,
      errors: Bt
    } = On(l, k, Ne, Rt, V, He, tr, ue);
    ue.forEach((qe, nt) => {
      qe.subscribe((pt) => {
        (pt || qe.done) && ue.delete(nt);
      });
    }), Fe();
    let Vt = rt(Me);
    return ge({
      loaderData: _t,
      errors: Bt
    }, Vt || He.length > 0 ? {
      fetchers: new Map(l.fetchers)
    } : {});
  }
  function ee(b) {
    return l.fetchers.get(b) || Fa;
  }
  function A(b, y, k, $) {
    if (za)
      throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
    K.has(b) && be(b);
    let Y = Ut(a || o, k, e.basename);
    if (!Y) {
      D(b, y, mt(404, {
        pathname: k
      }));
      return;
    }
    let {
      path: q,
      submission: Z
    } = Pn(k, i, $, !0), V = Ur(Y, q);
    if (C = ($ && $.preventScrollReset) === !0, Z && wt(Z.formMethod)) {
      ve(b, y, q, V, Y, Z);
      return;
    }
    oe.set(b, {
      routeId: y,
      path: q
    }), te(b, y, q, V, Y, Z);
  }
  async function ve(b, y, k, $, z, Y) {
    if (Se(), oe.delete(b), !$.route.action && !$.route.lazy) {
      let lt = mt(405, {
        method: Y.formMethod,
        pathname: k,
        routeId: y
      });
      D(b, y, lt);
      return;
    }
    let q = l.fetchers.get(b), Z = ge({
      state: "submitting"
    }, Y, {
      data: q && q.data,
      " _hasFetcherDoneAnything ": !0
    });
    l.fetchers.set(b, Z), he({
      fetchers: new Map(l.fetchers)
    });
    let V = new AbortController(), ke = ir(e.history, k, V.signal, Y);
    K.set(b, V);
    let fe = await ar("action", ke, $, z, r, t, x.basename);
    if (ke.signal.aborted) {
      K.get(b) === V && K.delete(b);
      return;
    }
    if (Gt(fe)) {
      K.delete(b), H.add(b);
      let lt = ge({
        state: "loading"
      }, Y, {
        data: void 0,
        " _hasFetcherDoneAnything ": !0
      });
      return l.fetchers.set(b, lt), he({
        fetchers: new Map(l.fetchers)
      }), Q(l, fe, {
        submission: Y,
        isFetchActionRedirect: !0
      });
    }
    if (dr(fe)) {
      D(b, y, fe.error);
      return;
    }
    if (It(fe))
      throw mt(400, {
        type: "defer-action"
      });
    let et = l.navigation.location || l.location, Ne = ir(e.history, et, V.signal), He = a || o, Xe = l.navigation.state !== "idle" ? Ut(He, l.navigation.location, e.basename) : l.matches;
    F(Xe, "Didn't find any matches after fetcher action");
    let Rt = ++Re;
    $e.set(b, Rt);
    let tr = ge({
      state: "loading",
      data: fe.data
    }, Y, {
      " _hasFetcherDoneAnything ": !0
    });
    l.fetchers.set(b, tr);
    let [At, _t] = Nn(
      e.history,
      l,
      Xe,
      Y,
      et,
      g,
      J,
      de,
      oe,
      He,
      e.basename,
      {
        [$.route.id]: fe.data
      },
      void 0
      // No need to send through errors since we short circuit above
    );
    _t.filter((lt) => lt.key !== b).forEach((lt) => {
      let f = lt.key, R = l.fetchers.get(f), M = {
        state: "loading",
        data: R && R.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0
      };
      l.fetchers.set(f, M), K.set(f, V);
    }), he({
      fetchers: new Map(l.fetchers)
    });
    let {
      results: Bt,
      loaderResults: Vt,
      fetcherResults: qe
    } = await j(l.matches, Xe, At, _t, Ne);
    if (V.signal.aborted)
      return;
    $e.delete(b), K.delete(b), _t.forEach((lt) => K.delete(lt.key));
    let nt = $n(Bt);
    if (nt)
      return Q(l, nt);
    let {
      loaderData: pt,
      errors: Mt
    } = On(l, l.matches, At, Vt, void 0, _t, qe, ue), Ir = {
      state: "idle",
      data: fe.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0
    };
    l.fetchers.set(b, Ir);
    let Lr = rt(Rt);
    l.navigation.state === "loading" && Rt > Me ? (F(w, "Expected pending action"), _ && _.abort(), Oe(l.navigation.location, {
      matches: Xe,
      loaderData: pt,
      errors: Mt,
      fetchers: new Map(l.fetchers)
    })) : (he(ge({
      errors: Mt,
      loaderData: In(l.loaderData, pt, Xe, Mt)
    }, Lr ? {
      fetchers: new Map(l.fetchers)
    } : {})), g = !1);
  }
  async function te(b, y, k, $, z, Y) {
    let q = l.fetchers.get(b), Z = ge({
      state: "loading",
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0
    }, Y, {
      data: q && q.data,
      " _hasFetcherDoneAnything ": !0
    });
    l.fetchers.set(b, Z), he({
      fetchers: new Map(l.fetchers)
    });
    let V = new AbortController(), ke = ir(e.history, k, V.signal);
    K.set(b, V);
    let fe = await ar("loader", ke, $, z, r, t, x.basename);
    if (It(fe) && (fe = await So(fe, ke.signal, !0) || fe), K.get(b) === V && K.delete(b), ke.signal.aborted)
      return;
    if (Gt(fe)) {
      await Q(l, fe);
      return;
    }
    if (dr(fe)) {
      let Ne = Wt(l.matches, y);
      l.fetchers.delete(b), he({
        fetchers: new Map(l.fetchers),
        errors: {
          [Ne.route.id]: fe.error
        }
      });
      return;
    }
    F(!It(fe), "Unhandled fetcher deferred data");
    let et = {
      state: "idle",
      data: fe.data,
      formMethod: void 0,
      formAction: void 0,
      formEncType: void 0,
      formData: void 0,
      " _hasFetcherDoneAnything ": !0
    };
    l.fetchers.set(b, et), he({
      fetchers: new Map(l.fetchers)
    });
  }
  async function Q(b, y, k) {
    var $;
    let {
      submission: z,
      replace: Y,
      isFetchActionRedirect: q
    } = k === void 0 ? {} : k;
    y.revalidate && (g = !0);
    let Z = fr(
      b.location,
      y.location,
      // TODO: This can be removed once we get rid of useTransition in Remix v2
      ge({
        _isRedirect: !0
      }, q ? {
        _isFetchActionRedirect: !0
      } : {})
    );
    if (F(Z, "Expected a location on the redirect navigation"), yo.test(y.location) && wo && typeof (($ = window) == null ? void 0 : $.location) < "u") {
      let He = e.history.createURL(y.location), Xe = gr(He.pathname, e.basename || "/") == null;
      if (window.location.origin !== He.origin || Xe) {
        Y ? window.location.replace(y.location) : window.location.assign(y.location);
        return;
      }
    }
    _ = null;
    let V = Y === !0 ? Ge.Replace : Ge.Push, {
      formMethod: ke,
      formAction: fe,
      formEncType: et,
      formData: Ne
    } = b.navigation;
    !z && ke && fe && Ne && et && (z = {
      formMethod: ke,
      formAction: fe,
      formEncType: et,
      formData: Ne
    }), $a.has(y.status) && z && wt(z.formMethod) ? await O(V, Z, {
      submission: ge({}, z, {
        formAction: y.location
      }),
      // Preserve this flag across redirects
      preventScrollReset: C
    }) : q ? await O(V, Z, {
      overrideNavigation: {
        state: "loading",
        location: Z,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0
      },
      fetcherSubmission: z,
      // Preserve this flag across redirects
      preventScrollReset: C
    }) : await O(V, Z, {
      overrideNavigation: {
        state: "loading",
        location: Z,
        formMethod: z ? z.formMethod : void 0,
        formAction: z ? z.formAction : void 0,
        formEncType: z ? z.formEncType : void 0,
        formData: z ? z.formData : void 0
      },
      // Preserve this flag across redirects
      preventScrollReset: C
    });
  }
  async function j(b, y, k, $, z) {
    let Y = await Promise.all([...k.map((V) => ar("loader", z, V, y, r, t, x.basename)), ...$.map((V) => V.matches && V.match ? ar("loader", ir(e.history, V.path, z.signal), V.match, V.matches, r, t, x.basename) : {
      type: Ye.error,
      error: mt(404, {
        pathname: V.path
      })
    })]), q = Y.slice(0, k.length), Z = Y.slice(k.length);
    return await Promise.all([Fn(b, k, q, z.signal, !1, l.loaderData), Fn(b, $.map((V) => V.match), Z, z.signal, !0)]), {
      results: Y,
      loaderResults: q,
      fetcherResults: Z
    };
  }
  function Se() {
    g = !0, J.push(...U()), oe.forEach((b, y) => {
      K.has(y) && (de.push(y), be(y));
    });
  }
  function D(b, y, k) {
    let $ = Wt(l.matches, y);
    G(b), he({
      errors: {
        [$.route.id]: k
      },
      fetchers: new Map(l.fetchers)
    });
  }
  function G(b) {
    K.has(b) && be(b), oe.delete(b), $e.delete(b), H.delete(b), l.fetchers.delete(b);
  }
  function be(b) {
    let y = K.get(b);
    F(y, "Expected fetch controller: " + b), y.abort(), K.delete(b);
  }
  function re(b) {
    for (let y of b) {
      let $ = {
        state: "idle",
        data: ee(y).data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0
      };
      l.fetchers.set(y, $);
    }
  }
  function Fe() {
    let b = [];
    for (let y of H) {
      let k = l.fetchers.get(y);
      F(k, "Expected fetcher: " + y), k.state === "loading" && (H.delete(y), b.push(y));
    }
    re(b);
  }
  function rt(b) {
    let y = [];
    for (let [k, $] of $e)
      if ($ < b) {
        let z = l.fetchers.get(k);
        F(z, "Expected fetcher: " + k), z.state === "loading" && (be(k), $e.delete(k), y.push(k));
      }
    return re(y), y.length > 0;
  }
  function Ve(b, y) {
    let k = l.blockers.get(b) || Tn;
    return ae.get(b) !== y && ae.set(b, y), k;
  }
  function ot(b) {
    l.blockers.delete(b), ae.delete(b);
  }
  function Qe(b, y) {
    let k = l.blockers.get(b) || Tn;
    F(k.state === "unblocked" && y.state === "blocked" || k.state === "blocked" && y.state === "blocked" || k.state === "blocked" && y.state === "proceeding" || k.state === "blocked" && y.state === "unblocked" || k.state === "proceeding" && y.state === "unblocked", "Invalid blocker state transition: " + k.state + " -> " + y.state), l.blockers.set(b, y), he({
      blockers: new Map(l.blockers)
    });
  }
  function Ke(b) {
    let {
      currentLocation: y,
      nextLocation: k,
      historyAction: $
    } = b;
    if (ae.size === 0)
      return;
    ae.size > 1 && tt(!1, "A router only supports one blocker at a time");
    let z = Array.from(ae.entries()), [Y, q] = z[z.length - 1], Z = l.blockers.get(Y);
    if (!(Z && Z.state === "proceeding") && q({
      currentLocation: y,
      nextLocation: k,
      historyAction: $
    }))
      return Y;
  }
  function U(b) {
    let y = [];
    return ue.forEach((k, $) => {
      (!b || b($)) && (k.cancel(), y.push($), ue.delete($));
    }), y;
  }
  function Te(b, y, k) {
    if (d = b, u = y, h = k || (($) => $.key), !p && l.navigation === Fr) {
      p = !0;
      let $ = at(l.location, l.matches);
      $ != null && he({
        restoreScrollPosition: $
      });
    }
    return () => {
      d = null, u = null, h = null;
    };
  }
  function kt(b, y) {
    if (d && h && u) {
      let k = y.map((z) => zn(z, l.loaderData)), $ = h(b, k) || b.key;
      d[$] = u();
    }
  }
  function at(b, y) {
    if (d && h && u) {
      let k = y.map((Y) => zn(Y, l.loaderData)), $ = h(b, k) || b.key, z = d[$];
      if (typeof z == "number")
        return z;
    }
    return null;
  }
  function it(b) {
    a = b;
  }
  return x = {
    get basename() {
      return e.basename;
    },
    get state() {
      return l;
    },
    get routes() {
      return o;
    },
    initialize: Le,
    subscribe: Be,
    enableScrollRestoration: Te,
    navigate: I,
    fetch: A,
    revalidate: P,
    // Passthrough to history-aware createHref used by useHref so we get proper
    // hash-aware URLs in DOM paths
    createHref: (b) => e.history.createHref(b),
    encodeLocation: (b) => e.history.encodeLocation(b),
    getFetcher: ee,
    deleteFetcher: G,
    dispose: Ae,
    getBlocker: Ve,
    deleteBlocker: ot,
    _internalFetchControllers: K,
    _internalActiveDeferreds: ue,
    // TODO: Remove setRoutes, it's temporary to avoid dealing with
    // updating the tree while validating the update algorithm.
    _internalSetRoutes: it
  }, x;
}
function Ha(e) {
  return e != null && "formData" in e;
}
function Pn(e, t, r, o) {
  o === void 0 && (o = !1);
  let a = typeof e == "string" ? e : bt(e);
  if (!r || !Ha(r))
    return {
      path: a
    };
  if (r.formMethod && !Xa(r.formMethod))
    return {
      path: a,
      error: mt(405, {
        method: r.formMethod
      })
    };
  let i;
  if (r.formData) {
    let d = r.formMethod || "get";
    if (i = {
      formMethod: t.v7_normalizeFormMethod ? d.toUpperCase() : d.toLowerCase(),
      formAction: Eo(a),
      formEncType: r && r.formEncType || "application/x-www-form-urlencoded",
      formData: r.formData
    }, wt(i.formMethod))
      return {
        path: a,
        submission: i
      };
  }
  let s = jt(a), c = jo(r.formData);
  return o && s.search && ko(s.search) && c.append("index", ""), s.search = "?" + c, {
    path: bt(s),
    submission: i
  };
}
function Ua(e, t) {
  let r = e;
  if (t) {
    let o = e.findIndex((a) => a.route.id === t);
    o >= 0 && (r = e.slice(0, o));
  }
  return r;
}
function Nn(e, t, r, o, a, i, s, c, d, h, u, p, v) {
  let E = v ? Object.values(v)[0] : p ? Object.values(p)[0] : void 0, S = e.createURL(t.location), x = e.createURL(a), l = (
    // Forced revalidation due to submission, useRevalidate, or X-Remix-Revalidate
    i || // Clicked the same link, resubmitted a GET form
    S.toString() === x.toString() || // Search params affect all loaders
    S.search !== x.search
  ), w = v ? Object.keys(v)[0] : void 0, _ = Ua(r, w).filter((g, J) => {
    if (g.route.lazy)
      return !0;
    if (g.route.loader == null)
      return !1;
    if (Wa(t.loaderData, t.matches[J], g) || s.some((Re) => Re === g.route.id))
      return !0;
    let de = t.matches[J], K = g;
    return Dn(g, ge({
      currentUrl: S,
      currentParams: de.params,
      nextUrl: x,
      nextParams: K.params
    }, o, {
      actionResult: E,
      defaultShouldRevalidate: l || Co(de, K)
    }));
  }), N = [];
  return d.forEach((g, J) => {
    if (!r.some((Me) => Me.route.id === g.routeId))
      return;
    let de = Ut(h, g.path, u);
    if (!de) {
      N.push(ge({
        key: J
      }, g, {
        matches: null,
        match: null
      }));
      return;
    }
    let K = Ur(de, g.path);
    if (c.includes(J)) {
      N.push(ge({
        key: J,
        matches: de,
        match: K
      }, g));
      return;
    }
    Dn(K, ge({
      currentUrl: S,
      currentParams: t.matches[t.matches.length - 1].params,
      nextUrl: x,
      nextParams: r[r.length - 1].params
    }, o, {
      actionResult: E,
      defaultShouldRevalidate: l
    })) && N.push(ge({
      key: J,
      matches: de,
      match: K
    }, g));
  }), [_, N];
}
function Wa(e, t, r) {
  let o = (
    // [a] -> [a, b]
    !t || // [a, b] -> [a, c]
    r.route.id !== t.route.id
  ), a = e[r.route.id] === void 0;
  return o || a;
}
function Co(e, t) {
  let r = e.route.path;
  return (
    // param change for this match, /users/123 -> /users/456
    e.pathname !== t.pathname || // splat param changed, which is not present in match.path
    // e.g. /files/images/avatar.jpg -> files/finances.xls
    r != null && r.endsWith("*") && e.params["*"] !== t.params["*"]
  );
}
function Dn(e, t) {
  if (e.route.shouldRevalidate) {
    let r = e.route.shouldRevalidate(t);
    if (typeof r == "boolean")
      return r;
  }
  return t.defaultShouldRevalidate;
}
async function Mn(e, t, r) {
  if (!e.lazy)
    return;
  let o = await e.lazy();
  if (!e.lazy)
    return;
  let a = r[e.id];
  F(a, "No route found in manifest");
  let i = {};
  for (let s in o) {
    let d = a[s] !== void 0 && // This property isn't static since it should always be updated based
    // on the route updates
    s !== "hasErrorBoundary";
    tt(!d, 'Route "' + a.id + '" has a static property "' + s + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + s + '" will be ignored.')), !d && !ha.has(s) && (i[s] = o[s]);
  }
  Object.assign(a, i), Object.assign(a, {
    // To keep things framework agnostic, we use the provided
    // `detectErrorBoundary` function to set the `hasErrorBoundary` route
    // property since the logic will differ between frameworks.
    hasErrorBoundary: t(ge({}, a)),
    lazy: void 0
  });
}
async function ar(e, t, r, o, a, i, s, c, d, h) {
  s === void 0 && (s = "/"), c === void 0 && (c = !1), d === void 0 && (d = !1);
  let u, p, v, E = (l) => {
    let w, C = new Promise((_, N) => w = N);
    return v = () => w(), t.signal.addEventListener("abort", v), Promise.race([l({
      request: t,
      params: r.params,
      context: h
    }), C]);
  };
  try {
    let l = r.route[e];
    if (r.route.lazy)
      if (l)
        p = (await Promise.all([E(l), Mn(r.route, i, a)]))[0];
      else if (await Mn(r.route, i, a), l = r.route[e], l)
        p = await E(l);
      else {
        if (e === "action")
          throw mt(405, {
            method: t.method,
            pathname: new URL(t.url).pathname,
            routeId: r.route.id
          });
        return {
          type: Ye.data,
          data: void 0
        };
      }
    else
      F(l, "Could not find the " + e + ' to run on the "' + r.route.id + '" route'), p = await E(l);
    F(p !== void 0, "You defined " + (e === "action" ? "an action" : "a loader") + " for route " + ('"' + r.route.id + "\" but didn't return anything from your `" + e + "` ") + "function. Please return a value or `null`.");
  } catch (l) {
    u = Ye.error, p = l;
  } finally {
    v && t.signal.removeEventListener("abort", v);
  }
  if (Ka(p)) {
    let l = p.status;
    if (La.has(l)) {
      let _ = p.headers.get("Location");
      if (F(_, "Redirects returned/thrown from loaders/actions must have a Location header"), yo.test(_)) {
        if (!c) {
          let N = new URL(t.url), g = _.startsWith("//") ? new URL(N.protocol + _) : new URL(_), J = gr(g.pathname, s) != null;
          g.origin === N.origin && J && (_ = g.pathname + g.search + g.hash);
        }
      } else {
        let N = o.slice(0, o.indexOf(r) + 1), g = Pr(N).map((de) => de.pathnameBase), J = rn(_, g, new URL(t.url).pathname);
        if (F(bt(J), "Unable to resolve redirect location: " + _), s) {
          let de = J.pathname;
          J.pathname = de === "/" ? s : vt([s, de]);
        }
        _ = bt(J);
      }
      if (c)
        throw p.headers.set("Location", _), p;
      return {
        type: Ye.redirect,
        status: l,
        location: _,
        revalidate: p.headers.get("X-Remix-Revalidate") !== null
      };
    }
    if (d)
      throw {
        type: u || Ye.data,
        response: p
      };
    let w, C = p.headers.get("Content-Type");
    return C && /\bapplication\/json\b/.test(C) ? w = await p.json() : w = await p.text(), u === Ye.error ? {
      type: u,
      error: new nn(l, p.statusText, w),
      headers: p.headers
    } : {
      type: Ye.data,
      data: w,
      statusCode: p.status,
      headers: p.headers
    };
  }
  if (u === Ye.error)
    return {
      type: u,
      error: p
    };
  if (qa(p)) {
    var S, x;
    return {
      type: Ye.deferred,
      deferredData: p,
      statusCode: (S = p.init) == null ? void 0 : S.status,
      headers: ((x = p.init) == null ? void 0 : x.headers) && new Headers(p.init.headers)
    };
  }
  return {
    type: Ye.data,
    data: p
  };
}
function ir(e, t, r, o) {
  let a = e.createURL(Eo(t)).toString(), i = {
    signal: r
  };
  if (o && wt(o.formMethod)) {
    let {
      formMethod: s,
      formEncType: c,
      formData: d
    } = o;
    i.method = s.toUpperCase(), i.body = c === "application/x-www-form-urlencoded" ? jo(d) : d;
  }
  return new Request(a, i);
}
function jo(e) {
  let t = new URLSearchParams();
  for (let [r, o] of e.entries())
    t.append(r, o instanceof File ? o.name : o);
  return t;
}
function Ga(e, t, r, o, a) {
  let i = {}, s = null, c, d = !1, h = {};
  return r.forEach((u, p) => {
    let v = t[p].route.id;
    if (F(!Gt(u), "Cannot handle redirect results in processLoaderData"), dr(u)) {
      let E = Wt(e, v), S = u.error;
      o && (S = Object.values(o)[0], o = void 0), s = s || {}, s[E.route.id] == null && (s[E.route.id] = S), i[v] = void 0, d || (d = !0, c = bo(u.error) ? u.error.status : 500), u.headers && (h[v] = u.headers);
    } else
      It(u) ? (a.set(v, u.deferredData), i[v] = u.deferredData.data) : i[v] = u.data, u.statusCode != null && u.statusCode !== 200 && !d && (c = u.statusCode), u.headers && (h[v] = u.headers);
  }), o && (s = o, i[Object.keys(o)[0]] = void 0), {
    loaderData: i,
    errors: s,
    statusCode: c || 200,
    loaderHeaders: h
  };
}
function On(e, t, r, o, a, i, s, c) {
  let {
    loaderData: d,
    errors: h
  } = Ga(t, r, o, a, c);
  for (let u = 0; u < i.length; u++) {
    let {
      key: p,
      match: v
    } = i[u];
    F(s !== void 0 && s[u] !== void 0, "Did not find corresponding fetcher result");
    let E = s[u];
    if (dr(E)) {
      let S = Wt(e.matches, v == null ? void 0 : v.route.id);
      h && h[S.route.id] || (h = ge({}, h, {
        [S.route.id]: E.error
      })), e.fetchers.delete(p);
    } else if (Gt(E))
      F(!1, "Unhandled fetcher revalidation redirect");
    else if (It(E))
      F(!1, "Unhandled fetcher deferred data");
    else {
      let S = {
        state: "idle",
        data: E.data,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        " _hasFetcherDoneAnything ": !0
      };
      e.fetchers.set(p, S);
    }
  }
  return {
    loaderData: d,
    errors: h
  };
}
function In(e, t, r, o) {
  let a = ge({}, t);
  for (let i of r) {
    let s = i.route.id;
    if (t.hasOwnProperty(s) ? t[s] !== void 0 && (a[s] = t[s]) : e[s] !== void 0 && i.route.loader && (a[s] = e[s]), o && o.hasOwnProperty(s))
      break;
  }
  return a;
}
function Wt(e, t) {
  return (t ? e.slice(0, e.findIndex((o) => o.route.id === t) + 1) : [...e]).reverse().find((o) => o.route.hasErrorBoundary === !0) || e[0];
}
function Ln(e) {
  let t = e.find((r) => r.index || !r.path || r.path === "/") || {
    id: "__shim-error-route__"
  };
  return {
    matches: [{
      params: {},
      pathname: "",
      pathnameBase: "",
      route: t
    }],
    route: t
  };
}
function mt(e, t) {
  let {
    pathname: r,
    routeId: o,
    method: a,
    type: i
  } = t === void 0 ? {} : t, s = "Unknown Server Error", c = "Unknown @remix-run/router error";
  return e === 400 ? (s = "Bad Request", a && r && o ? c = "You made a " + a + ' request to "' + r + '" but ' + ('did not provide a `loader` for route "' + o + '", ') + "so there is no way to handle the request." : i === "defer-action" && (c = "defer() is not supported in actions")) : e === 403 ? (s = "Forbidden", c = 'Route "' + o + '" does not match URL "' + r + '"') : e === 404 ? (s = "Not Found", c = 'No route matches URL "' + r + '"') : e === 405 && (s = "Method Not Allowed", a && r && o ? c = "You made a " + a.toUpperCase() + ' request to "' + r + '" but ' + ('did not provide an `action` for route "' + o + '", ') + "so there is no way to handle the request." : a && (c = 'Invalid request method "' + a.toUpperCase() + '"')), new nn(e || 500, s, new Error(c), !0);
}
function $n(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let r = e[t];
    if (Gt(r))
      return r;
  }
}
function Eo(e) {
  let t = typeof e == "string" ? jt(e) : e;
  return bt(ge({}, t, {
    hash: ""
  }));
}
function Ya(e, t) {
  return e.pathname === t.pathname && e.search === t.search && e.hash !== t.hash;
}
function It(e) {
  return e.type === Ye.deferred;
}
function dr(e) {
  return e.type === Ye.error;
}
function Gt(e) {
  return (e && e.type) === Ye.redirect;
}
function qa(e) {
  let t = e;
  return t && typeof t == "object" && typeof t.data == "object" && typeof t.subscribe == "function" && typeof t.cancel == "function" && typeof t.resolveData == "function";
}
function Ka(e) {
  return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.headers == "object" && typeof e.body < "u";
}
function Xa(e) {
  return Ia.has(e.toLowerCase());
}
function wt(e) {
  return Ma.has(e.toLowerCase());
}
async function Fn(e, t, r, o, a, i) {
  for (let s = 0; s < r.length; s++) {
    let c = r[s], d = t[s];
    if (!d)
      continue;
    let h = e.find((p) => p.route.id === d.route.id), u = h != null && !Co(h, d) && (i && i[d.route.id]) !== void 0;
    It(c) && (a || u) && await So(c, o, a).then((p) => {
      p && (r[s] = p || r[s]);
    });
  }
}
async function So(e, t, r) {
  if (r === void 0 && (r = !1), !await e.deferredData.resolveData(t)) {
    if (r)
      try {
        return {
          type: Ye.data,
          data: e.deferredData.unwrappedData
        };
      } catch (a) {
        return {
          type: Ye.error,
          error: a
        };
      }
    return {
      type: Ye.data,
      data: e.deferredData.data
    };
  }
}
function ko(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function zn(e, t) {
  let {
    route: r,
    pathname: o,
    params: a
  } = e;
  return {
    id: r.id,
    pathname: o,
    params: a,
    data: t[r.id],
    handle: r.handle
  };
}
function Ur(e, t) {
  let r = typeof t == "string" ? jt(t).search : t.search;
  if (e[e.length - 1].route.index && ko(r || ""))
    return e[e.length - 1];
  let o = Pr(e);
  return o[o.length - 1];
}
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
function Ja(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
const Ro = typeof Object.is == "function" ? Object.is : Ja, {
  useState: Za,
  useEffect: Qa,
  useLayoutEffect: ei,
  useDebugValue: ti
} = T;
let Bn = !1, Vn = !1;
function ri(e, t, r) {
  process.env.NODE_ENV !== "production" && (Bn || "startTransition" in T && (Bn = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.")));
  const o = t();
  if (process.env.NODE_ENV !== "production" && !Vn) {
    const s = t();
    Ro(o, s) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), Vn = !0);
  }
  const [{
    inst: a
  }, i] = Za({
    inst: {
      value: o,
      getSnapshot: t
    }
  });
  return ei(() => {
    a.value = o, a.getSnapshot = t, zr(a) && i({
      inst: a
    });
  }, [e, o, t]), Qa(() => (zr(a) && i({
    inst: a
  }), e(() => {
    zr(a) && i({
      inst: a
    });
  })), [e]), ti(o), o;
}
function zr(e) {
  const t = e.getSnapshot, r = e.value;
  try {
    const o = t();
    return !Ro(r, o);
  } catch {
    return !0;
  }
}
function ni(e, t, r) {
  return t();
}
const oi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", ai = !oi, ii = ai ? ni : ri, si = "useSyncExternalStore" in T ? ((e) => e.useSyncExternalStore)(T) : ii, vr = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (vr.displayName = "DataRouter");
const Jt = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (Jt.displayName = "DataRouterState");
const li = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (li.displayName = "Await");
const Et = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (Et.displayName = "Navigation");
const br = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (br.displayName = "Location");
const St = /* @__PURE__ */ T.createContext({
  outlet: null,
  matches: []
});
process.env.NODE_ENV !== "production" && (St.displayName = "Route");
const on = /* @__PURE__ */ T.createContext(null);
process.env.NODE_ENV !== "production" && (on.displayName = "RouteError");
function Wr() {
  return Wr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Wr.apply(this, arguments);
}
function ci(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t;
  Zt() || (process.env.NODE_ENV !== "production" ? F(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useHref() may be used only in the context of a <Router> component."
  ) : F(!1));
  let {
    basename: o,
    navigator: a
  } = T.useContext(Et), {
    hash: i,
    pathname: s,
    search: c
  } = Nr(e, {
    relative: r
  }), d = s;
  return o !== "/" && (d = s === "/" ? o : vt([o, s])), a.createHref({
    pathname: d,
    search: c,
    hash: i
  });
}
function Zt() {
  return T.useContext(br) != null;
}
function Qt() {
  return Zt() || (process.env.NODE_ENV !== "production" ? F(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : F(!1)), T.useContext(br).location;
}
function an() {
  Zt() || (process.env.NODE_ENV !== "production" ? F(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : F(!1));
  let {
    basename: e,
    navigator: t
  } = T.useContext(Et), {
    matches: r
  } = T.useContext(St), {
    pathname: o
  } = Qt(), a = JSON.stringify(Pr(r).map((c) => c.pathnameBase)), i = T.useRef(!1);
  return T.useEffect(() => {
    i.current = !0;
  }), T.useCallback(function(c, d) {
    if (d === void 0 && (d = {}), process.env.NODE_ENV !== "production" && tt(i.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered."), !i.current)
      return;
    if (typeof c == "number") {
      t.go(c);
      return;
    }
    let h = rn(c, JSON.parse(a), o, d.relative === "path");
    e !== "/" && (h.pathname = h.pathname === "/" ? e : vt([e, h.pathname])), (d.replace ? t.replace : t.push)(h, d.state, d);
  }, [e, t, a, o]);
}
const di = /* @__PURE__ */ T.createContext(null);
function ui(e) {
  let t = T.useContext(St).outlet;
  return t && /* @__PURE__ */ T.createElement(di.Provider, {
    value: e
  }, t);
}
function Nr(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    matches: o
  } = T.useContext(St), {
    pathname: a
  } = Qt(), i = JSON.stringify(Pr(o).map((s) => s.pathnameBase));
  return T.useMemo(() => rn(e, JSON.parse(i), a, r === "path"), [e, i, a, r]);
}
function fi(e, t) {
  Zt() || (process.env.NODE_ENV !== "production" ? F(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useRoutes() may be used only in the context of a <Router> component."
  ) : F(!1));
  let {
    navigator: r
  } = T.useContext(Et), o = T.useContext(Jt), {
    matches: a
  } = T.useContext(St), i = a[a.length - 1], s = i ? i.params : {}, c = i ? i.pathname : "/", d = i ? i.pathnameBase : "/", h = i && i.route;
  if (process.env.NODE_ENV !== "production") {
    let w = h && h.path || "";
    wi(c, !h || w.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + c + '" (under <Route path="' + w + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + w + '"> to <Route ') + ('path="' + (w === "/" ? "*" : w + "/*") + '">.'));
  }
  let u = Qt(), p;
  if (t) {
    var v;
    let w = typeof t == "string" ? jt(t) : t;
    d === "/" || (v = w.pathname) != null && v.startsWith(d) || (process.env.NODE_ENV !== "production" ? F(!1, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + d + '" ') + ('but pathname "' + w.pathname + '" was given in the `location` prop.')) : F(!1)), p = w;
  } else
    p = u;
  let E = p.pathname || "/", S = d === "/" ? E : E.slice(d.length) || "/", x = Ut(e, {
    pathname: S
  });
  process.env.NODE_ENV !== "production" && (process.env.NODE_ENV !== "production" && tt(h || x != null, 'No routes matched location "' + p.pathname + p.search + p.hash + '" '), process.env.NODE_ENV !== "production" && tt(x == null || x[x.length - 1].route.element !== void 0 || x[x.length - 1].route.Component !== void 0, 'Matched leaf route at location "' + p.pathname + p.search + p.hash + '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.'));
  let l = gi(x && x.map((w) => Object.assign({}, w, {
    params: Object.assign({}, s, w.params),
    pathname: vt([
      d,
      // Re-encode pathnames that were decoded inside matchRoutes
      r.encodeLocation ? r.encodeLocation(w.pathname).pathname : w.pathname
    ]),
    pathnameBase: w.pathnameBase === "/" ? d : vt([
      d,
      // Re-encode pathnames that were decoded inside matchRoutes
      r.encodeLocation ? r.encodeLocation(w.pathnameBase).pathname : w.pathnameBase
    ])
  })), a, o || void 0);
  return t && l ? /* @__PURE__ */ T.createElement(br.Provider, {
    value: {
      location: Wr({
        pathname: "/",
        search: "",
        hash: "",
        state: null,
        key: "default"
      }, p),
      navigationType: Ge.Pop
    }
  }, l) : l;
}
function hi() {
  let e = yi(), t = bo(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), r = e instanceof Error ? e.stack : null, o = "rgba(200,200,200, 0.5)", a = {
    padding: "0.5rem",
    backgroundColor: o
  }, i = {
    padding: "2px 4px",
    backgroundColor: o
  }, s = null;
  return process.env.NODE_ENV !== "production" && (s = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("p", null, "💿 Hey developer 👋"), /* @__PURE__ */ T.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", /* @__PURE__ */ T.createElement("code", {
    style: i
  }, "ErrorBoundary"), " prop on ", /* @__PURE__ */ T.createElement("code", {
    style: i
  }, "<Route>")))), /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ T.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, t), r ? /* @__PURE__ */ T.createElement("pre", {
    style: a
  }, r) : null, s);
}
class pi extends T.Component {
  constructor(t) {
    super(t), this.state = {
      location: t.location,
      error: t.error
    };
  }
  static getDerivedStateFromError(t) {
    return {
      error: t
    };
  }
  static getDerivedStateFromProps(t, r) {
    return r.location !== t.location ? {
      error: t.error,
      location: t.location
    } : {
      error: t.error || r.error,
      location: r.location
    };
  }
  componentDidCatch(t, r) {
    console.error("React Router caught the following error during render", t, r);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ T.createElement(St.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ T.createElement(on.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function mi(e) {
  let {
    routeContext: t,
    match: r,
    children: o
  } = e, a = T.useContext(vr);
  return a && a.static && a.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (a.staticContext._deepestRenderedBoundaryId = r.route.id), /* @__PURE__ */ T.createElement(St.Provider, {
    value: t
  }, o);
}
function gi(e, t, r) {
  if (t === void 0 && (t = []), e == null)
    if (r != null && r.errors)
      e = r.matches;
    else
      return null;
  let o = e, a = r == null ? void 0 : r.errors;
  if (a != null) {
    let i = o.findIndex((s) => s.route.id && (a == null ? void 0 : a[s.route.id]));
    i >= 0 || (process.env.NODE_ENV !== "production" ? F(!1, "Could not find a matching route for the current errors: " + a) : F(!1)), o = o.slice(0, Math.min(o.length, i + 1));
  }
  return o.reduceRight((i, s, c) => {
    let d = s.route.id ? a == null ? void 0 : a[s.route.id] : null, h = null;
    r && (s.route.ErrorBoundary ? h = /* @__PURE__ */ T.createElement(s.route.ErrorBoundary, null) : s.route.errorElement ? h = s.route.errorElement : h = /* @__PURE__ */ T.createElement(hi, null));
    let u = t.concat(o.slice(0, c + 1)), p = () => {
      let v = i;
      return d ? v = h : s.route.Component ? v = /* @__PURE__ */ T.createElement(s.route.Component, null) : s.route.element && (v = s.route.element), /* @__PURE__ */ T.createElement(mi, {
        match: s,
        routeContext: {
          outlet: i,
          matches: u
        },
        children: v
      });
    };
    return r && (s.route.ErrorBoundary || s.route.errorElement || c === 0) ? /* @__PURE__ */ T.createElement(pi, {
      location: r.location,
      component: h,
      error: d,
      children: p(),
      routeContext: {
        outlet: null,
        matches: u
      }
    }) : p();
  }, null);
}
var Hn;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator";
})(Hn || (Hn = {}));
var Rr;
(function(e) {
  e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator";
})(Rr || (Rr = {}));
function Ao(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function vi(e) {
  let t = T.useContext(Jt);
  return t || (process.env.NODE_ENV !== "production" ? F(!1, Ao(e)) : F(!1)), t;
}
function bi(e) {
  let t = T.useContext(St);
  return t || (process.env.NODE_ENV !== "production" ? F(!1, Ao(e)) : F(!1)), t;
}
function xi(e) {
  let t = bi(e), r = t.matches[t.matches.length - 1];
  return r.route.id || (process.env.NODE_ENV !== "production" ? F(!1, e + ' can only be used on routes that contain a unique "id"') : F(!1)), r.route.id;
}
function yi() {
  var e;
  let t = T.useContext(on), r = vi(Rr.UseRouteError), o = xi(Rr.UseRouteError);
  return t || ((e = r.errors) == null ? void 0 : e[o]);
}
const Un = {};
function wi(e, t, r) {
  !t && !Un[e] && (Un[e] = !0, process.env.NODE_ENV !== "production" && tt(!1, r));
}
function Ci(e) {
  let {
    fallbackElement: t,
    router: r
  } = e, o = T.useCallback(() => r.state, [r]), a = si(
    r.subscribe,
    o,
    // We have to provide this so React@18 doesn't complain during hydration,
    // but we pass our serialized hydration data into the router so state here
    // is already synced with what the server saw
    o
  ), i = T.useMemo(() => ({
    createHref: r.createHref,
    encodeLocation: r.encodeLocation,
    go: (d) => r.navigate(d),
    push: (d, h, u) => r.navigate(d, {
      state: h,
      preventScrollReset: u == null ? void 0 : u.preventScrollReset
    }),
    replace: (d, h, u) => r.navigate(d, {
      replace: !0,
      state: h,
      preventScrollReset: u == null ? void 0 : u.preventScrollReset
    })
  }), [r]), s = r.basename || "/", c = T.useMemo(() => ({
    router: r,
    navigator: i,
    static: !1,
    basename: s
  }), [r, i, s]);
  return /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(vr.Provider, {
    value: c
  }, /* @__PURE__ */ T.createElement(Jt.Provider, {
    value: a
  }, /* @__PURE__ */ T.createElement(Si, {
    basename: r.basename,
    location: r.state.location,
    navigationType: r.state.historyAction,
    navigator: i
  }, r.state.initialized ? /* @__PURE__ */ T.createElement(ki, null) : t))), null);
}
function ji(e) {
  let {
    to: t,
    replace: r,
    state: o,
    relative: a
  } = e;
  Zt() || (process.env.NODE_ENV !== "production" ? F(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of
    // the router loaded. We can help them understand how to avoid that.
    "<Navigate> may be used only in the context of a <Router> component."
  ) : F(!1)), process.env.NODE_ENV !== "production" && tt(!T.useContext(Et).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
  let i = T.useContext(Jt), s = an();
  return T.useEffect(() => {
    i && i.navigation.state !== "idle" || s(t, {
      replace: r,
      state: o,
      relative: a
    });
  }), null;
}
function Ei(e) {
  return ui(e.context);
}
function ne(e) {
  process.env.NODE_ENV !== "production" ? F(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.") : F(!1);
}
function Si(e) {
  let {
    basename: t = "/",
    children: r = null,
    location: o,
    navigationType: a = Ge.Pop,
    navigator: i,
    static: s = !1
  } = e;
  Zt() && (process.env.NODE_ENV !== "production" ? F(!1, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : F(!1));
  let c = t.replace(/^\/*/, "/"), d = T.useMemo(() => ({
    basename: c,
    navigator: i,
    static: s
  }), [c, i, s]);
  typeof o == "string" && (o = jt(o));
  let {
    pathname: h = "/",
    search: u = "",
    hash: p = "",
    state: v = null,
    key: E = "default"
  } = o, S = T.useMemo(() => {
    let x = gr(h, c);
    return x == null ? null : {
      location: {
        pathname: x,
        search: u,
        hash: p,
        state: v,
        key: E
      },
      navigationType: a
    };
  }, [c, h, u, p, v, E, a]);
  return process.env.NODE_ENV !== "production" && tt(S != null, '<Router basename="' + c + '"> is not able to match the URL ' + ('"' + h + u + p + '" because it does not start with the ') + "basename, so the <Router> won't render anything."), S == null ? null : /* @__PURE__ */ T.createElement(Et.Provider, {
    value: d
  }, /* @__PURE__ */ T.createElement(br.Provider, {
    children: r,
    value: S
  }));
}
function ki(e) {
  let {
    children: t,
    location: r
  } = e, o = T.useContext(vr), a = o && !t ? o.router.routes : Ar(t);
  return fi(a, r);
}
var Wn;
(function(e) {
  e[e.pending = 0] = "pending", e[e.success = 1] = "success", e[e.error = 2] = "error";
})(Wn || (Wn = {}));
new Promise(() => {
});
function Ar(e, t) {
  t === void 0 && (t = []);
  let r = [];
  return T.Children.forEach(e, (o, a) => {
    if (!/* @__PURE__ */ T.isValidElement(o))
      return;
    let i = [...t, a];
    if (o.type === T.Fragment) {
      r.push.apply(r, Ar(o.props.children, i));
      return;
    }
    o.type !== ne && (process.env.NODE_ENV !== "production" ? F(!1, "[" + (typeof o.type == "string" ? o.type : o.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : F(!1)), !o.props.index || !o.props.children || (process.env.NODE_ENV !== "production" ? F(!1, "An index route cannot have child routes.") : F(!1));
    let s = {
      id: o.props.id || i.join("-"),
      caseSensitive: o.props.caseSensitive,
      element: o.props.element,
      Component: o.props.Component,
      index: o.props.index,
      path: o.props.path,
      loader: o.props.loader,
      action: o.props.action,
      errorElement: o.props.errorElement,
      ErrorBoundary: o.props.ErrorBoundary,
      hasErrorBoundary: o.props.ErrorBoundary != null || o.props.errorElement != null,
      shouldRevalidate: o.props.shouldRevalidate,
      handle: o.props.handle,
      lazy: o.props.lazy
    };
    o.props.children && (s.children = Ar(o.props.children, i)), r.push(s);
  }), r;
}
function Ri(e) {
  return process.env.NODE_ENV !== "production" && (e.Component && e.element && process.env.NODE_ENV !== "production" && tt(!1, "You should not include both `Component` and `element` on your route - `element` will be ignored."), e.ErrorBoundary && e.errorElement && process.env.NODE_ENV !== "production" && tt(!1, "You should not include both `ErrorBoundary` and `errorElement` on your route - `errorElement` will be ignored.")), !!e.ErrorBoundary || !!e.errorElement;
}
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
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Nt.apply(this, arguments);
}
function sn(e, t) {
  if (e == null)
    return {};
  var r = {}, o = Object.keys(e), a, i;
  for (i = 0; i < o.length; i++)
    a = o[i], !(t.indexOf(a) >= 0) && (r[a] = e[a]);
  return r;
}
const Sr = "get", Br = "application/x-www-form-urlencoded";
function Dr(e) {
  return e != null && typeof e.tagName == "string";
}
function Ai(e) {
  return Dr(e) && e.tagName.toLowerCase() === "button";
}
function _i(e) {
  return Dr(e) && e.tagName.toLowerCase() === "form";
}
function Ti(e) {
  return Dr(e) && e.tagName.toLowerCase() === "input";
}
function Pi(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Ni(e, t) {
  return e.button === 0 && // Ignore everything but left clicks
  (!t || t === "_self") && // Let browser handle "target=_blank" etc.
  !Pi(e);
}
function Di(e, t, r) {
  let o, a, i, s;
  if (_i(e)) {
    let u = r.submissionTrigger;
    o = r.method || e.getAttribute("method") || Sr, a = r.action || e.getAttribute("action") || t, i = r.encType || e.getAttribute("enctype") || Br, s = new FormData(e), u && u.name && s.append(u.name, u.value);
  } else if (Ai(e) || Ti(e) && (e.type === "submit" || e.type === "image")) {
    let u = e.form;
    if (u == null)
      throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    o = r.method || e.getAttribute("formmethod") || u.getAttribute("method") || Sr, a = r.action || e.getAttribute("formaction") || u.getAttribute("action") || t, i = r.encType || e.getAttribute("formenctype") || u.getAttribute("enctype") || Br, s = new FormData(u), e.name && s.append(e.name, e.value);
  } else {
    if (Dr(e))
      throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    if (o = r.method || Sr, a = r.action || t, i = r.encType || Br, e instanceof FormData)
      s = e;
    else if (s = new FormData(), e instanceof URLSearchParams)
      for (let [u, p] of e)
        s.append(u, p);
    else if (e != null)
      for (let u of Object.keys(e))
        s.append(u, e[u]);
  }
  let {
    protocol: c,
    host: d
  } = window.location;
  return {
    url: new URL(a, c + "//" + d),
    method: o.toLowerCase(),
    encType: i,
    formData: s
  };
}
const Mi = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], Oi = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"], Ii = ["reloadDocument", "replace", "method", "action", "onSubmit", "fetcherKey", "routeId", "relative", "preventScrollReset"];
function Li(e, t) {
  return Va({
    basename: t == null ? void 0 : t.basename,
    future: t == null ? void 0 : t.future,
    history: da({
      window: t == null ? void 0 : t.window
    }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || $i(),
    routes: e,
    detectErrorBoundary: Ri
  }).initialize();
}
function $i() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Nt({}, t, {
    errors: Fi(t.errors)
  })), t;
}
function Fi(e) {
  if (!e)
    return null;
  let t = Object.entries(e), r = {};
  for (let [o, a] of t)
    if (a && a.__type === "RouteErrorResponse")
      r[o] = new nn(a.status, a.statusText, a.data, a.internal === !0);
    else if (a && a.__type === "Error") {
      let i = new Error(a.message);
      i.stack = "", r[o] = i;
    } else
      r[o] = a;
  return r;
}
process.env.NODE_ENV;
const zi = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Bi = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, ln = /* @__PURE__ */ T.forwardRef(function(t, r) {
  let {
    onClick: o,
    relative: a,
    reloadDocument: i,
    replace: s,
    state: c,
    target: d,
    to: h,
    preventScrollReset: u
  } = t, p = sn(t, Mi), {
    basename: v
  } = T.useContext(Et), E, S = !1;
  if (typeof h == "string" && Bi.test(h) && (E = h, zi)) {
    let C = new URL(window.location.href), _ = h.startsWith("//") ? new URL(C.protocol + h) : new URL(h), N = gr(_.pathname, v);
    _.origin === C.origin && N != null ? h = N + _.search + _.hash : S = !0;
  }
  let x = ci(h, {
    relative: a
  }), l = Wi(h, {
    replace: s,
    state: c,
    target: d,
    preventScrollReset: u,
    relative: a
  });
  function w(C) {
    o && o(C), C.defaultPrevented || l(C);
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ T.createElement("a", Nt({}, p, {
      href: E || x,
      onClick: S || i ? o : w,
      ref: r,
      target: d
    }))
  );
});
process.env.NODE_ENV !== "production" && (ln.displayName = "Link");
const me = /* @__PURE__ */ T.forwardRef(function(t, r) {
  let {
    "aria-current": o = "page",
    caseSensitive: a = !1,
    className: i = "",
    end: s = !1,
    style: c,
    to: d,
    children: h
  } = t, u = sn(t, Oi), p = Nr(d, {
    relative: u.relative
  }), v = Qt(), E = T.useContext(Jt), {
    navigator: S
  } = T.useContext(Et), x = S.encodeLocation ? S.encodeLocation(p).pathname : p.pathname, l = v.pathname, w = E && E.navigation && E.navigation.location ? E.navigation.location.pathname : null;
  a || (l = l.toLowerCase(), w = w ? w.toLowerCase() : null, x = x.toLowerCase());
  let C = l === x || !s && l.startsWith(x) && l.charAt(x.length) === "/", _ = w != null && (w === x || !s && w.startsWith(x) && w.charAt(x.length) === "/"), N = C ? o : void 0, g;
  typeof i == "function" ? g = i({
    isActive: C,
    isPending: _
  }) : g = [i, C ? "active" : null, _ ? "pending" : null].filter(Boolean).join(" ");
  let J = typeof c == "function" ? c({
    isActive: C,
    isPending: _
  }) : c;
  return /* @__PURE__ */ T.createElement(ln, Nt({}, u, {
    "aria-current": N,
    className: g,
    ref: r,
    style: J,
    to: d
  }), typeof h == "function" ? h({
    isActive: C,
    isPending: _
  }) : h);
});
process.env.NODE_ENV !== "production" && (me.displayName = "NavLink");
const Vi = /* @__PURE__ */ T.forwardRef((e, t) => /* @__PURE__ */ T.createElement(_o, Nt({}, e, {
  ref: t
})));
process.env.NODE_ENV !== "production" && (Vi.displayName = "Form");
const _o = /* @__PURE__ */ T.forwardRef((e, t) => {
  let {
    reloadDocument: r,
    replace: o,
    method: a = Sr,
    action: i,
    onSubmit: s,
    fetcherKey: c,
    routeId: d,
    relative: h,
    preventScrollReset: u
  } = e, p = sn(e, Ii), v = Gi(c, d), E = a.toLowerCase() === "get" ? "get" : "post", S = To(i, {
    relative: h
  }), x = (l) => {
    if (s && s(l), l.defaultPrevented)
      return;
    l.preventDefault();
    let w = l.nativeEvent.submitter, C = (w == null ? void 0 : w.getAttribute("formmethod")) || a;
    v(w || l.currentTarget, {
      method: C,
      replace: o,
      relative: h,
      preventScrollReset: u
    });
  };
  return /* @__PURE__ */ T.createElement("form", Nt({
    ref: t,
    method: E,
    action: S,
    onSubmit: r ? s : x
  }, p));
});
process.env.NODE_ENV !== "production" && (_o.displayName = "FormImpl");
process.env.NODE_ENV;
var Gr;
(function(e) {
  e.UseScrollRestoration = "useScrollRestoration", e.UseSubmitImpl = "useSubmitImpl", e.UseFetcher = "useFetcher";
})(Gr || (Gr = {}));
var Gn;
(function(e) {
  e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration";
})(Gn || (Gn = {}));
function Hi(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function Ui(e) {
  let t = T.useContext(vr);
  return t || (process.env.NODE_ENV !== "production" ? F(!1, Hi(e)) : F(!1)), t;
}
function Wi(e, t) {
  let {
    target: r,
    replace: o,
    state: a,
    preventScrollReset: i,
    relative: s
  } = t === void 0 ? {} : t, c = an(), d = Qt(), h = Nr(e, {
    relative: s
  });
  return T.useCallback((u) => {
    if (Ni(u, r)) {
      u.preventDefault();
      let p = o !== void 0 ? o : bt(d) === bt(h);
      c(e, {
        replace: p,
        state: a,
        preventScrollReset: i,
        relative: s
      });
    }
  }, [d, c, h, o, a, r, e, i, s]);
}
function Gi(e, t) {
  let {
    router: r
  } = Ui(Gr.UseSubmitImpl), o = To();
  return T.useCallback(function(a, i) {
    if (i === void 0 && (i = {}), typeof document > "u")
      throw new Error("You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.");
    let {
      method: s,
      encType: c,
      formData: d,
      url: h
    } = Di(a, o, i), u = h.pathname + h.search, p = {
      replace: i.replace,
      preventScrollReset: i.preventScrollReset,
      formData: d,
      formMethod: s,
      formEncType: c
    };
    e ? (t == null && (process.env.NODE_ENV !== "production" ? F(!1, "No routeId available for useFetcher()") : F(!1)), r.fetch(e, t, u, p)) : r.navigate(u, p);
  }, [o, r, e, t]);
}
function To(e, t) {
  let {
    relative: r
  } = t === void 0 ? {} : t, {
    basename: o
  } = T.useContext(Et), a = T.useContext(St);
  a || (process.env.NODE_ENV !== "production" ? F(!1, "useFormAction must be used inside a RouteContext") : F(!1));
  let [i] = a.matches.slice(-1), s = Nt({}, Nr(e || ".", {
    relative: r
  })), c = Qt();
  if (e == null && (s.search = c.search, s.hash = c.hash, i.route.index)) {
    let d = new URLSearchParams(s.search);
    d.delete("index"), s.search = d.toString() ? "?" + d.toString() : "";
  }
  return (!e || e === ".") && i.route.index && (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index"), o !== "/" && (s.pathname = s.pathname === "/" ? o : vt([o, s.pathname])), bt(s);
}
var hr = {}, Yi = {
  get exports() {
    return hr;
  },
  set exports(e) {
    hr = e;
  }
}, we = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yn;
function qi() {
  if (Yn)
    return we;
  Yn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), S;
  S = Symbol.for("react.module.reference");
  function x(l) {
    if (typeof l == "object" && l !== null) {
      var w = l.$$typeof;
      switch (w) {
        case e:
          switch (l = l.type, l) {
            case r:
            case a:
            case o:
            case h:
            case u:
              return l;
            default:
              switch (l = l && l.$$typeof, l) {
                case c:
                case s:
                case d:
                case v:
                case p:
                case i:
                  return l;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return we.ContextConsumer = s, we.ContextProvider = i, we.Element = e, we.ForwardRef = d, we.Fragment = r, we.Lazy = v, we.Memo = p, we.Portal = t, we.Profiler = a, we.StrictMode = o, we.Suspense = h, we.SuspenseList = u, we.isAsyncMode = function() {
    return !1;
  }, we.isConcurrentMode = function() {
    return !1;
  }, we.isContextConsumer = function(l) {
    return x(l) === s;
  }, we.isContextProvider = function(l) {
    return x(l) === i;
  }, we.isElement = function(l) {
    return typeof l == "object" && l !== null && l.$$typeof === e;
  }, we.isForwardRef = function(l) {
    return x(l) === d;
  }, we.isFragment = function(l) {
    return x(l) === r;
  }, we.isLazy = function(l) {
    return x(l) === v;
  }, we.isMemo = function(l) {
    return x(l) === p;
  }, we.isPortal = function(l) {
    return x(l) === t;
  }, we.isProfiler = function(l) {
    return x(l) === a;
  }, we.isStrictMode = function(l) {
    return x(l) === o;
  }, we.isSuspense = function(l) {
    return x(l) === h;
  }, we.isSuspenseList = function(l) {
    return x(l) === u;
  }, we.isValidElementType = function(l) {
    return typeof l == "string" || typeof l == "function" || l === r || l === a || l === o || l === h || l === u || l === E || typeof l == "object" && l !== null && (l.$$typeof === v || l.$$typeof === p || l.$$typeof === i || l.$$typeof === s || l.$$typeof === d || l.$$typeof === S || l.getModuleId !== void 0);
  }, we.typeOf = x, we;
}
var Ce = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qn;
function Ki() {
  return qn || (qn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.server_context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), S = !1, x = !1, l = !1, w = !1, C = !1, _;
    _ = Symbol.for("react.module.reference");
    function N(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === r || D === a || C || D === o || D === h || D === u || w || D === E || S || x || l || typeof D == "object" && D !== null && (D.$$typeof === v || D.$$typeof === p || D.$$typeof === i || D.$$typeof === s || D.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === _ || D.getModuleId !== void 0));
    }
    function g(D) {
      if (typeof D == "object" && D !== null) {
        var G = D.$$typeof;
        switch (G) {
          case e:
            var be = D.type;
            switch (be) {
              case r:
              case a:
              case o:
              case h:
              case u:
                return be;
              default:
                var re = be && be.$$typeof;
                switch (re) {
                  case c:
                  case s:
                  case d:
                  case v:
                  case p:
                  case i:
                    return re;
                  default:
                    return G;
                }
            }
          case t:
            return G;
        }
      }
    }
    var J = s, de = i, K = e, Re = d, Me = r, $e = v, H = p, oe = t, ue = a, ae = o, ze = h, Le = u, Ae = !1, Be = !1;
    function he(D) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Oe(D) {
      return Be || (Be = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function I(D) {
      return g(D) === s;
    }
    function P(D) {
      return g(D) === i;
    }
    function O(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function W(D) {
      return g(D) === d;
    }
    function m(D) {
      return g(D) === r;
    }
    function ee(D) {
      return g(D) === v;
    }
    function A(D) {
      return g(D) === p;
    }
    function ve(D) {
      return g(D) === t;
    }
    function te(D) {
      return g(D) === a;
    }
    function Q(D) {
      return g(D) === o;
    }
    function j(D) {
      return g(D) === h;
    }
    function Se(D) {
      return g(D) === u;
    }
    Ce.ContextConsumer = J, Ce.ContextProvider = de, Ce.Element = K, Ce.ForwardRef = Re, Ce.Fragment = Me, Ce.Lazy = $e, Ce.Memo = H, Ce.Portal = oe, Ce.Profiler = ue, Ce.StrictMode = ae, Ce.Suspense = ze, Ce.SuspenseList = Le, Ce.isAsyncMode = he, Ce.isConcurrentMode = Oe, Ce.isContextConsumer = I, Ce.isContextProvider = P, Ce.isElement = O, Ce.isForwardRef = W, Ce.isFragment = m, Ce.isLazy = ee, Ce.isMemo = A, Ce.isPortal = ve, Ce.isProfiler = te, Ce.isStrictMode = Q, Ce.isSuspense = j, Ce.isSuspenseList = Se, Ce.isValidElementType = N, Ce.typeOf = g;
  }()), Ce;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = qi() : e.exports = Ki();
})(Yi);
function Xi(e) {
  function t(I, P, O, W, m) {
    for (var ee = 0, A = 0, ve = 0, te = 0, Q, j, Se = 0, D = 0, G, be = G = Q = 0, re = 0, Fe = 0, rt = 0, Ve = 0, ot = O.length, Qe = ot - 1, Ke, U = "", Te = "", kt = "", at = "", it; re < ot; ) {
      if (j = O.charCodeAt(re), re === Qe && A + te + ve + ee !== 0 && (A !== 0 && (j = A === 47 ? 10 : 47), te = ve = ee = 0, ot++, Qe++), A + te + ve + ee === 0) {
        if (re === Qe && (0 < Fe && (U = U.replace(v, "")), 0 < U.trim().length)) {
          switch (j) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              U += O.charAt(re);
          }
          j = 59;
        }
        switch (j) {
          case 123:
            for (U = U.trim(), Q = U.charCodeAt(0), G = 1, Ve = ++re; re < ot; ) {
              switch (j = O.charCodeAt(re)) {
                case 123:
                  G++;
                  break;
                case 125:
                  G--;
                  break;
                case 47:
                  switch (j = O.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (be = re + 1; be < Qe; ++be)
                          switch (O.charCodeAt(be)) {
                            case 47:
                              if (j === 42 && O.charCodeAt(be - 1) === 42 && re + 2 !== be) {
                                re = be + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (j === 47) {
                                re = be + 1;
                                break e;
                              }
                          }
                        re = be;
                      }
                  }
                  break;
                case 91:
                  j++;
                case 40:
                  j++;
                case 34:
                case 39:
                  for (; re++ < Qe && O.charCodeAt(re) !== j; )
                    ;
              }
              if (G === 0)
                break;
              re++;
            }
            switch (G = O.substring(Ve, re), Q === 0 && (Q = (U = U.replace(p, "").trim()).charCodeAt(0)), Q) {
              case 64:
                switch (0 < Fe && (U = U.replace(v, "")), j = U.charCodeAt(1), j) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    Fe = P;
                    break;
                  default:
                    Fe = ze;
                }
                if (G = t(P, Fe, G, j, m + 1), Ve = G.length, 0 < Ae && (Fe = r(ze, U, rt), it = c(3, G, Fe, P, oe, H, Ve, j, m, W), U = Fe.join(""), it !== void 0 && (Ve = (G = it.trim()).length) === 0 && (j = 0, G = "")), 0 < Ve)
                  switch (j) {
                    case 115:
                      U = U.replace(J, s);
                    case 100:
                    case 109:
                    case 45:
                      G = U + "{" + G + "}";
                      break;
                    case 107:
                      U = U.replace(C, "$1 $2"), G = U + "{" + G + "}", G = ae === 1 || ae === 2 && i("@" + G, 3) ? "@-webkit-" + G + "@" + G : "@" + G;
                      break;
                    default:
                      G = U + G, W === 112 && (G = (Te += G, ""));
                  }
                else
                  G = "";
                break;
              default:
                G = t(P, r(P, U, rt), G, W, m + 1);
            }
            kt += G, G = rt = Fe = be = Q = 0, U = "", j = O.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (U = (0 < Fe ? U.replace(v, "") : U).trim(), 1 < (Ve = U.length))
              switch (be === 0 && (Q = U.charCodeAt(0), Q === 45 || 96 < Q && 123 > Q) && (Ve = (U = U.replace(" ", ":")).length), 0 < Ae && (it = c(1, U, P, I, oe, H, Te.length, W, m, W)) !== void 0 && (Ve = (U = it.trim()).length) === 0 && (U = "\0\0"), Q = U.charCodeAt(0), j = U.charCodeAt(1), Q) {
                case 0:
                  break;
                case 64:
                  if (j === 105 || j === 99) {
                    at += U + O.charAt(re);
                    break;
                  }
                default:
                  U.charCodeAt(Ve - 1) !== 58 && (Te += a(U, Q, j, U.charCodeAt(2)));
              }
            rt = Fe = be = Q = 0, U = "", j = O.charCodeAt(++re);
        }
      }
      switch (j) {
        case 13:
        case 10:
          A === 47 ? A = 0 : 1 + Q === 0 && W !== 107 && 0 < U.length && (Fe = 1, U += "\0"), 0 < Ae * he && c(0, U, P, I, oe, H, Te.length, W, m, W), H = 1, oe++;
          break;
        case 59:
        case 125:
          if (A + te + ve + ee === 0) {
            H++;
            break;
          }
        default:
          switch (H++, Ke = O.charAt(re), j) {
            case 9:
            case 32:
              if (te + ee + A === 0)
                switch (Se) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    Ke = "";
                    break;
                  default:
                    j !== 32 && (Ke = " ");
                }
              break;
            case 0:
              Ke = "\\0";
              break;
            case 12:
              Ke = "\\f";
              break;
            case 11:
              Ke = "\\v";
              break;
            case 38:
              te + A + ee === 0 && (Fe = rt = 1, Ke = "\f" + Ke);
              break;
            case 108:
              if (te + A + ee + ue === 0 && 0 < be)
                switch (re - be) {
                  case 2:
                    Se === 112 && O.charCodeAt(re - 3) === 58 && (ue = Se);
                  case 8:
                    D === 111 && (ue = D);
                }
              break;
            case 58:
              te + A + ee === 0 && (be = re);
              break;
            case 44:
              A + ve + te + ee === 0 && (Fe = 1, Ke += "\r");
              break;
            case 34:
            case 39:
              A === 0 && (te = te === j ? 0 : te === 0 ? j : te);
              break;
            case 91:
              te + A + ve === 0 && ee++;
              break;
            case 93:
              te + A + ve === 0 && ee--;
              break;
            case 41:
              te + A + ee === 0 && ve--;
              break;
            case 40:
              if (te + A + ee === 0) {
                if (Q === 0)
                  switch (2 * Se + 3 * D) {
                    case 533:
                      break;
                    default:
                      Q = 1;
                  }
                ve++;
              }
              break;
            case 64:
              A + ve + te + ee + be + G === 0 && (G = 1);
              break;
            case 42:
            case 47:
              if (!(0 < te + ee + ve))
                switch (A) {
                  case 0:
                    switch (2 * j + 3 * O.charCodeAt(re + 1)) {
                      case 235:
                        A = 47;
                        break;
                      case 220:
                        Ve = re, A = 42;
                    }
                    break;
                  case 42:
                    j === 47 && Se === 42 && Ve + 2 !== re && (O.charCodeAt(Ve + 2) === 33 && (Te += O.substring(Ve, re + 1)), Ke = "", A = 0);
                }
          }
          A === 0 && (U += Ke);
      }
      D = Se, Se = j, re++;
    }
    if (Ve = Te.length, 0 < Ve) {
      if (Fe = P, 0 < Ae && (it = c(2, Te, Fe, I, oe, H, Ve, W, m, W), it !== void 0 && (Te = it).length === 0))
        return at + Te + kt;
      if (Te = Fe.join(",") + "{" + Te + "}", ae * ue !== 0) {
        switch (ae !== 2 || i(Te, 2) || (ue = 0), ue) {
          case 111:
            Te = Te.replace(N, ":-moz-$1") + Te;
            break;
          case 112:
            Te = Te.replace(_, "::-webkit-input-$1") + Te.replace(_, "::-moz-$1") + Te.replace(_, ":-ms-input-$1") + Te;
        }
        ue = 0;
      }
    }
    return at + Te + kt;
  }
  function r(I, P, O) {
    var W = P.trim().split(l);
    P = W;
    var m = W.length, ee = I.length;
    switch (ee) {
      case 0:
      case 1:
        var A = 0;
        for (I = ee === 0 ? "" : I[0] + " "; A < m; ++A)
          P[A] = o(I, P[A], O).trim();
        break;
      default:
        var ve = A = 0;
        for (P = []; A < m; ++A)
          for (var te = 0; te < ee; ++te)
            P[ve++] = o(I[te] + " ", W[A], O).trim();
    }
    return P;
  }
  function o(I, P, O) {
    var W = P.charCodeAt(0);
    switch (33 > W && (W = (P = P.trim()).charCodeAt(0)), W) {
      case 38:
        return P.replace(w, "$1" + I.trim());
      case 58:
        return I.trim() + P.replace(w, "$1" + I.trim());
      default:
        if (0 < 1 * O && 0 < P.indexOf("\f"))
          return P.replace(w, (I.charCodeAt(0) === 58 ? "" : "$1") + I.trim());
    }
    return I + P;
  }
  function a(I, P, O, W) {
    var m = I + ";", ee = 2 * P + 3 * O + 4 * W;
    if (ee === 944) {
      I = m.indexOf(":", 9) + 1;
      var A = m.substring(I, m.length - 1).trim();
      return A = m.substring(0, I).trim() + A + ";", ae === 1 || ae === 2 && i(A, 1) ? "-webkit-" + A + A : A;
    }
    if (ae === 0 || ae === 2 && !i(m, 1))
      return m;
    switch (ee) {
      case 1015:
        return m.charCodeAt(10) === 97 ? "-webkit-" + m + m : m;
      case 951:
        return m.charCodeAt(3) === 116 ? "-webkit-" + m + m : m;
      case 963:
        return m.charCodeAt(5) === 110 ? "-webkit-" + m + m : m;
      case 1009:
        if (m.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + m + m;
      case 978:
        return "-webkit-" + m + "-moz-" + m + m;
      case 1019:
      case 983:
        return "-webkit-" + m + "-moz-" + m + "-ms-" + m + m;
      case 883:
        if (m.charCodeAt(8) === 45)
          return "-webkit-" + m + m;
        if (0 < m.indexOf("image-set(", 11))
          return m.replace($e, "$1-webkit-$2") + m;
        break;
      case 932:
        if (m.charCodeAt(4) === 45)
          switch (m.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + m.replace("-grow", "") + "-webkit-" + m + "-ms-" + m.replace("grow", "positive") + m;
            case 115:
              return "-webkit-" + m + "-ms-" + m.replace("shrink", "negative") + m;
            case 98:
              return "-webkit-" + m + "-ms-" + m.replace("basis", "preferred-size") + m;
          }
        return "-webkit-" + m + "-ms-" + m + m;
      case 964:
        return "-webkit-" + m + "-ms-flex-" + m + m;
      case 1023:
        if (m.charCodeAt(8) !== 99)
          break;
        return A = m.substring(m.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + A + "-webkit-" + m + "-ms-flex-pack" + A + m;
      case 1005:
        return S.test(m) ? m.replace(E, ":-webkit-") + m.replace(E, ":-moz-") + m : m;
      case 1e3:
        switch (A = m.substring(13).trim(), P = A.indexOf("-") + 1, A.charCodeAt(0) + A.charCodeAt(P)) {
          case 226:
            A = m.replace(g, "tb");
            break;
          case 232:
            A = m.replace(g, "tb-rl");
            break;
          case 220:
            A = m.replace(g, "lr");
            break;
          default:
            return m;
        }
        return "-webkit-" + m + "-ms-" + A + m;
      case 1017:
        if (m.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (P = (m = I).length - 10, A = (m.charCodeAt(P) === 33 ? m.substring(0, P) : m).substring(I.indexOf(":", 7) + 1).trim(), ee = A.charCodeAt(0) + (A.charCodeAt(7) | 0)) {
          case 203:
            if (111 > A.charCodeAt(8))
              break;
          case 115:
            m = m.replace(A, "-webkit-" + A) + ";" + m;
            break;
          case 207:
          case 102:
            m = m.replace(A, "-webkit-" + (102 < ee ? "inline-" : "") + "box") + ";" + m.replace(A, "-webkit-" + A) + ";" + m.replace(A, "-ms-" + A + "box") + ";" + m;
        }
        return m + ";";
      case 938:
        if (m.charCodeAt(5) === 45)
          switch (m.charCodeAt(6)) {
            case 105:
              return A = m.replace("-items", ""), "-webkit-" + m + "-webkit-box-" + A + "-ms-flex-" + A + m;
            case 115:
              return "-webkit-" + m + "-ms-flex-item-" + m.replace(K, "") + m;
            default:
              return "-webkit-" + m + "-ms-flex-line-pack" + m.replace("align-content", "").replace(K, "") + m;
          }
        break;
      case 973:
      case 989:
        if (m.charCodeAt(3) !== 45 || m.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (Me.test(I) === !0)
          return (A = I.substring(I.indexOf(":") + 1)).charCodeAt(0) === 115 ? a(I.replace("stretch", "fill-available"), P, O, W).replace(":fill-available", ":stretch") : m.replace(A, "-webkit-" + A) + m.replace(A, "-moz-" + A.replace("fill-", "")) + m;
        break;
      case 962:
        if (m = "-webkit-" + m + (m.charCodeAt(5) === 102 ? "-ms-" + m : "") + m, O + W === 211 && m.charCodeAt(13) === 105 && 0 < m.indexOf("transform", 10))
          return m.substring(0, m.indexOf(";", 27) + 1).replace(x, "$1-webkit-$2") + m;
    }
    return m;
  }
  function i(I, P) {
    var O = I.indexOf(P === 1 ? ":" : "{"), W = I.substring(0, P !== 3 ? O : 10);
    return O = I.substring(O + 1, I.length - 1), Be(P !== 2 ? W : W.replace(Re, "$1"), O, P);
  }
  function s(I, P) {
    var O = a(P, P.charCodeAt(0), P.charCodeAt(1), P.charCodeAt(2));
    return O !== P + ";" ? O.replace(de, " or ($1)").substring(4) : "(" + P + ")";
  }
  function c(I, P, O, W, m, ee, A, ve, te, Q) {
    for (var j = 0, Se = P, D; j < Ae; ++j)
      switch (D = Le[j].call(u, I, Se, O, W, m, ee, A, ve, te, Q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          Se = D;
      }
    if (Se !== P)
      return Se;
  }
  function d(I) {
    switch (I) {
      case void 0:
      case null:
        Ae = Le.length = 0;
        break;
      default:
        if (typeof I == "function")
          Le[Ae++] = I;
        else if (typeof I == "object")
          for (var P = 0, O = I.length; P < O; ++P)
            d(I[P]);
        else
          he = !!I | 0;
    }
    return d;
  }
  function h(I) {
    return I = I.prefix, I !== void 0 && (Be = null, I ? typeof I != "function" ? ae = 1 : (ae = 2, Be = I) : ae = 0), h;
  }
  function u(I, P) {
    var O = I;
    if (33 > O.charCodeAt(0) && (O = O.trim()), Oe = O, O = [Oe], 0 < Ae) {
      var W = c(-1, P, O, O, oe, H, 0, 0, 0, 0);
      W !== void 0 && typeof W == "string" && (P = W);
    }
    var m = t(ze, O, P, 0, 0);
    return 0 < Ae && (W = c(-2, m, O, O, oe, H, m.length, 0, 0, 0), W !== void 0 && (m = W)), Oe = "", ue = 0, H = oe = 1, m;
  }
  var p = /^\0+/g, v = /[\0\r\f]/g, E = /: */g, S = /zoo|gra/, x = /([,: ])(transform)/g, l = /,\r+?/g, w = /([\t\r\n ])*\f?&/g, C = /@(k\w+)\s*(\S*)\s*/, _ = /::(place)/g, N = /:(read-only)/g, g = /[svh]\w+-[tblr]{2}/, J = /\(\s*(.*)\s*\)/g, de = /([\s\S]*?);/g, K = /-self|flex-/g, Re = /[^]*?(:[rp][el]a[\w-]+)[^]*/, Me = /stretch|:\s*\w+\-(?:conte|avail)/, $e = /([^-])(image-set\()/, H = 1, oe = 1, ue = 0, ae = 1, ze = [], Le = [], Ae = 0, Be = null, he = 0, Oe = "";
  return u.use = d, u.set = h, e !== void 0 && h(e), u;
}
var Ji = {
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
function Zi(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var Qi = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Kn = /* @__PURE__ */ Zi(
  function(e) {
    return Qi.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Yr = {}, es = {
  get exports() {
    return Yr;
  },
  set exports(e) {
    Yr = e;
  }
}, je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function ts() {
  if (Xn)
    return je;
  Xn = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, l = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function _(g) {
    if (typeof g == "object" && g !== null) {
      var J = g.$$typeof;
      switch (J) {
        case t:
          switch (g = g.type, g) {
            case d:
            case h:
            case o:
            case i:
            case a:
            case p:
              return g;
            default:
              switch (g = g && g.$$typeof, g) {
                case c:
                case u:
                case S:
                case E:
                case s:
                  return g;
                default:
                  return J;
              }
          }
        case r:
          return J;
      }
    }
  }
  function N(g) {
    return _(g) === h;
  }
  return je.AsyncMode = d, je.ConcurrentMode = h, je.ContextConsumer = c, je.ContextProvider = s, je.Element = t, je.ForwardRef = u, je.Fragment = o, je.Lazy = S, je.Memo = E, je.Portal = r, je.Profiler = i, je.StrictMode = a, je.Suspense = p, je.isAsyncMode = function(g) {
    return N(g) || _(g) === d;
  }, je.isConcurrentMode = N, je.isContextConsumer = function(g) {
    return _(g) === c;
  }, je.isContextProvider = function(g) {
    return _(g) === s;
  }, je.isElement = function(g) {
    return typeof g == "object" && g !== null && g.$$typeof === t;
  }, je.isForwardRef = function(g) {
    return _(g) === u;
  }, je.isFragment = function(g) {
    return _(g) === o;
  }, je.isLazy = function(g) {
    return _(g) === S;
  }, je.isMemo = function(g) {
    return _(g) === E;
  }, je.isPortal = function(g) {
    return _(g) === r;
  }, je.isProfiler = function(g) {
    return _(g) === i;
  }, je.isStrictMode = function(g) {
    return _(g) === a;
  }, je.isSuspense = function(g) {
    return _(g) === p;
  }, je.isValidElementType = function(g) {
    return typeof g == "string" || typeof g == "function" || g === o || g === h || g === i || g === a || g === p || g === v || typeof g == "object" && g !== null && (g.$$typeof === S || g.$$typeof === E || g.$$typeof === s || g.$$typeof === c || g.$$typeof === u || g.$$typeof === l || g.$$typeof === w || g.$$typeof === C || g.$$typeof === x);
  }, je.typeOf = _, je;
}
var Ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function rs() {
  return Jn || (Jn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, s = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, d = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, p = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, S = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, l = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function _(j) {
      return typeof j == "string" || typeof j == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      j === o || j === h || j === i || j === a || j === p || j === v || typeof j == "object" && j !== null && (j.$$typeof === S || j.$$typeof === E || j.$$typeof === s || j.$$typeof === c || j.$$typeof === u || j.$$typeof === l || j.$$typeof === w || j.$$typeof === C || j.$$typeof === x);
    }
    function N(j) {
      if (typeof j == "object" && j !== null) {
        var Se = j.$$typeof;
        switch (Se) {
          case t:
            var D = j.type;
            switch (D) {
              case d:
              case h:
              case o:
              case i:
              case a:
              case p:
                return D;
              default:
                var G = D && D.$$typeof;
                switch (G) {
                  case c:
                  case u:
                  case S:
                  case E:
                  case s:
                    return G;
                  default:
                    return Se;
                }
            }
          case r:
            return Se;
        }
      }
    }
    var g = d, J = h, de = c, K = s, Re = t, Me = u, $e = o, H = S, oe = E, ue = r, ae = i, ze = a, Le = p, Ae = !1;
    function Be(j) {
      return Ae || (Ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), he(j) || N(j) === d;
    }
    function he(j) {
      return N(j) === h;
    }
    function Oe(j) {
      return N(j) === c;
    }
    function I(j) {
      return N(j) === s;
    }
    function P(j) {
      return typeof j == "object" && j !== null && j.$$typeof === t;
    }
    function O(j) {
      return N(j) === u;
    }
    function W(j) {
      return N(j) === o;
    }
    function m(j) {
      return N(j) === S;
    }
    function ee(j) {
      return N(j) === E;
    }
    function A(j) {
      return N(j) === r;
    }
    function ve(j) {
      return N(j) === i;
    }
    function te(j) {
      return N(j) === a;
    }
    function Q(j) {
      return N(j) === p;
    }
    Ee.AsyncMode = g, Ee.ConcurrentMode = J, Ee.ContextConsumer = de, Ee.ContextProvider = K, Ee.Element = Re, Ee.ForwardRef = Me, Ee.Fragment = $e, Ee.Lazy = H, Ee.Memo = oe, Ee.Portal = ue, Ee.Profiler = ae, Ee.StrictMode = ze, Ee.Suspense = Le, Ee.isAsyncMode = Be, Ee.isConcurrentMode = he, Ee.isContextConsumer = Oe, Ee.isContextProvider = I, Ee.isElement = P, Ee.isForwardRef = O, Ee.isFragment = W, Ee.isLazy = m, Ee.isMemo = ee, Ee.isPortal = A, Ee.isProfiler = ve, Ee.isStrictMode = te, Ee.isSuspense = Q, Ee.isValidElementType = _, Ee.typeOf = N;
  }()), Ee;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = ts() : e.exports = rs();
})(es);
var cn = Yr, ns = {
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
}, os = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, as = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Po = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, dn = {};
dn[cn.ForwardRef] = as;
dn[cn.Memo] = Po;
function Zn(e) {
  return cn.isMemo(e) ? Po : dn[e.$$typeof] || ns;
}
var is = Object.defineProperty, ss = Object.getOwnPropertyNames, Qn = Object.getOwnPropertySymbols, ls = Object.getOwnPropertyDescriptor, cs = Object.getPrototypeOf, eo = Object.prototype;
function No(e, t, r) {
  if (typeof t != "string") {
    if (eo) {
      var o = cs(t);
      o && o !== eo && No(e, o, r);
    }
    var a = ss(t);
    Qn && (a = a.concat(Qn(t)));
    for (var i = Zn(e), s = Zn(t), c = 0; c < a.length; ++c) {
      var d = a[c];
      if (!os[d] && !(r && r[d]) && !(s && s[d]) && !(i && i[d])) {
        var h = ls(t, d);
        try {
          is(e, d, h);
        } catch {
        }
      }
    }
  }
  return e;
}
var ds = No;
function gt() {
  return (gt = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }).apply(this, arguments);
}
var to = function(e, t) {
  for (var r = [e[0]], o = 0, a = t.length; o < a; o += 1)
    r.push(t[o], e[o + 1]);
  return r;
}, qr = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !hr.typeOf(e);
}, _r = Object.freeze([]), Pt = Object.freeze({});
function Yt(e) {
  return typeof e == "function";
}
function Kr(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function un(e) {
  return e && typeof e.styledComponentId == "string";
}
var qt = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", fn = typeof window < "u" && "HTMLElement" in window, us = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), fs = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function hs() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, o = arguments.length; r < o; r += 1)
    t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
  return t.forEach(function(a) {
    e = e.replace(/%[a-z]/, a);
  }), e;
}
function Ct(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (r.length > 0 ? " Args: " + r.join(", ") : "")) : new Error(hs.apply(void 0, [fs[e]].concat(r)).trim());
}
var ps = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  var t = e.prototype;
  return t.indexOfGroup = function(r) {
    for (var o = 0, a = 0; a < r; a++)
      o += this.groupSizes[a];
    return o;
  }, t.insertRules = function(r, o) {
    if (r >= this.groupSizes.length) {
      for (var a = this.groupSizes, i = a.length, s = i; r >= s; )
        (s <<= 1) < 0 && Ct(16, "" + r);
      this.groupSizes = new Uint32Array(s), this.groupSizes.set(a), this.length = s;
      for (var c = i; c < s; c++)
        this.groupSizes[c] = 0;
    }
    for (var d = this.indexOfGroup(r + 1), h = 0, u = o.length; h < u; h++)
      this.tag.insertRule(d, o[h]) && (this.groupSizes[r]++, d++);
  }, t.clearGroup = function(r) {
    if (r < this.length) {
      var o = this.groupSizes[r], a = this.indexOfGroup(r), i = a + o;
      this.groupSizes[r] = 0;
      for (var s = a; s < i; s++)
        this.tag.deleteRule(a);
    }
  }, t.getGroup = function(r) {
    var o = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return o;
    for (var a = this.groupSizes[r], i = this.indexOfGroup(r), s = i + a, c = i; c < s; c++)
      o += this.tag.getRule(c) + `/*!sc*/
`;
    return o;
  }, e;
}(), kr = /* @__PURE__ */ new Map(), Tr = /* @__PURE__ */ new Map(), ur = 1, yr = function(e) {
  if (kr.has(e))
    return kr.get(e);
  for (; Tr.has(ur); )
    ur++;
  var t = ur++;
  return process.env.NODE_ENV !== "production" && ((0 | t) < 0 || t > 1 << 30) && Ct(16, "" + t), kr.set(e, t), Tr.set(t, e), t;
}, ms = function(e) {
  return Tr.get(e);
}, gs = function(e, t) {
  t >= ur && (ur = t + 1), kr.set(e, t), Tr.set(t, e);
}, vs = "style[" + qt + '][data-styled-version="5.3.10"]', bs = new RegExp("^" + qt + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), xs = function(e, t, r) {
  for (var o, a = r.split(","), i = 0, s = a.length; i < s; i++)
    (o = a[i]) && e.registerName(t, o);
}, ys = function(e, t) {
  for (var r = (t.textContent || "").split(`/*!sc*/
`), o = [], a = 0, i = r.length; a < i; a++) {
    var s = r[a].trim();
    if (s) {
      var c = s.match(bs);
      if (c) {
        var d = 0 | parseInt(c[1], 10), h = c[2];
        d !== 0 && (gs(h, d), xs(e, h, c[3]), e.getTag().insertRules(d, o)), o.length = 0;
      } else
        o.push(s);
    }
  }
}, ws = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Do = function(e) {
  var t = document.head, r = e || t, o = document.createElement("style"), a = function(c) {
    for (var d = c.childNodes, h = d.length; h >= 0; h--) {
      var u = d[h];
      if (u && u.nodeType === 1 && u.hasAttribute(qt))
        return u;
    }
  }(r), i = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(qt, "active"), o.setAttribute("data-styled-version", "5.3.10");
  var s = ws();
  return s && o.setAttribute("nonce", s), r.insertBefore(o, i), o;
}, Cs = function() {
  function e(r) {
    var o = this.element = Do(r);
    o.appendChild(document.createTextNode("")), this.sheet = function(a) {
      if (a.sheet)
        return a.sheet;
      for (var i = document.styleSheets, s = 0, c = i.length; s < c; s++) {
        var d = i[s];
        if (d.ownerNode === a)
          return d;
      }
      Ct(17);
    }(o), this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    try {
      return this.sheet.insertRule(o, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, t.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, t.getRule = function(r) {
    var o = this.sheet.cssRules[r];
    return o !== void 0 && typeof o.cssText == "string" ? o.cssText : "";
  }, e;
}(), js = function() {
  function e(r) {
    var o = this.element = Do(r);
    this.nodes = o.childNodes, this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    if (r <= this.length && r >= 0) {
      var a = document.createTextNode(o), i = this.nodes[r];
      return this.element.insertBefore(a, i || null), this.length++, !0;
    }
    return !1;
  }, t.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), Es = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  var t = e.prototype;
  return t.insertRule = function(r, o) {
    return r <= this.length && (this.rules.splice(r, 0, o), this.length++, !0);
  }, t.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, t.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), ro = fn, Ss = { isServer: !fn, useCSSOMInjection: !us }, Mo = function() {
  function e(r, o, a) {
    r === void 0 && (r = Pt), o === void 0 && (o = {}), this.options = gt({}, Ss, {}, r), this.gs = o, this.names = new Map(a), this.server = !!r.isServer, !this.server && fn && ro && (ro = !1, function(i) {
      for (var s = document.querySelectorAll(vs), c = 0, d = s.length; c < d; c++) {
        var h = s[c];
        h && h.getAttribute(qt) !== "active" && (ys(i, h), h.parentNode && h.parentNode.removeChild(h));
      }
    }(this));
  }
  e.registerId = function(r) {
    return yr(r);
  };
  var t = e.prototype;
  return t.reconstructWithOptions = function(r, o) {
    return o === void 0 && (o = !0), new e(gt({}, this.options, {}, r), this.gs, o && this.names || void 0);
  }, t.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, t.getTag = function() {
    return this.tag || (this.tag = (a = (o = this.options).isServer, i = o.useCSSOMInjection, s = o.target, r = a ? new Es(s) : i ? new Cs(s) : new js(s), new ps(r)));
    var r, o, a, i, s;
  }, t.hasNameForId = function(r, o) {
    return this.names.has(r) && this.names.get(r).has(o);
  }, t.registerName = function(r, o) {
    if (yr(r), this.names.has(r))
      this.names.get(r).add(o);
    else {
      var a = /* @__PURE__ */ new Set();
      a.add(o), this.names.set(r, a);
    }
  }, t.insertRules = function(r, o, a) {
    this.registerName(r, o), this.getTag().insertRules(yr(r), a);
  }, t.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, t.clearRules = function(r) {
    this.getTag().clearGroup(yr(r)), this.clearNames(r);
  }, t.clearTag = function() {
    this.tag = void 0;
  }, t.toString = function() {
    return function(r) {
      for (var o = r.getTag(), a = o.length, i = "", s = 0; s < a; s++) {
        var c = ms(s);
        if (c !== void 0) {
          var d = r.names.get(c), h = o.getGroup(s);
          if (d && h && d.size) {
            var u = qt + ".g" + s + '[id="' + c + '"]', p = "";
            d !== void 0 && d.forEach(function(v) {
              v.length > 0 && (p += v + ",");
            }), i += "" + h + u + '{content:"' + p + `"}/*!sc*/
`;
          }
        }
      }
      return i;
    }(this);
  }, e;
}(), ks = /(a)(d)/gi, no = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Xr(e) {
  var t, r = "";
  for (t = Math.abs(e); t > 52; t = t / 52 | 0)
    r = no(t % 52) + r;
  return (no(t % 52) + r).replace(ks, "$1-$2");
}
var Ot = function(e, t) {
  for (var r = t.length; r; )
    e = 33 * e ^ t.charCodeAt(--r);
  return e;
}, Oo = function(e) {
  return Ot(5381, e);
};
function Rs(e) {
  for (var t = 0; t < e.length; t += 1) {
    var r = e[t];
    if (Yt(r) && !un(r))
      return !1;
  }
  return !0;
}
var As = Oo("5.3.10"), _s = function() {
  function e(t, r, o) {
    this.rules = t, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && Rs(t), this.componentId = r, this.baseHash = Ot(As, r), this.baseStyle = o, Mo.registerId(r);
  }
  return e.prototype.generateAndInjectStyles = function(t, r, o) {
    var a = this.componentId, i = [];
    if (this.baseStyle && i.push(this.baseStyle.generateAndInjectStyles(t, r, o)), this.isStatic && !o.hash)
      if (this.staticRulesId && r.hasNameForId(a, this.staticRulesId))
        i.push(this.staticRulesId);
      else {
        var s = Kt(this.rules, t, r, o).join(""), c = Xr(Ot(this.baseHash, s) >>> 0);
        if (!r.hasNameForId(a, c)) {
          var d = o(s, "." + c, void 0, a);
          r.insertRules(a, c, d);
        }
        i.push(c), this.staticRulesId = c;
      }
    else {
      for (var h = this.rules.length, u = Ot(this.baseHash, o.hash), p = "", v = 0; v < h; v++) {
        var E = this.rules[v];
        if (typeof E == "string")
          p += E, process.env.NODE_ENV !== "production" && (u = Ot(u, E + v));
        else if (E) {
          var S = Kt(E, t, r, o), x = Array.isArray(S) ? S.join("") : S;
          u = Ot(u, x + v), p += x;
        }
      }
      if (p) {
        var l = Xr(u >>> 0);
        if (!r.hasNameForId(a, l)) {
          var w = o(p, "." + l, void 0, a);
          r.insertRules(a, l, w);
        }
        i.push(l);
      }
    }
    return i.join(" ");
  }, e;
}(), Ts = /^\s*\/\/.*$/gm, Ps = [":", "[", ".", "#"];
function Ns(e) {
  var t, r, o, a, i = e === void 0 ? Pt : e, s = i.options, c = s === void 0 ? Pt : s, d = i.plugins, h = d === void 0 ? _r : d, u = new Xi(c), p = [], v = function(x) {
    function l(w) {
      if (w)
        try {
          x(w + "}");
        } catch {
        }
    }
    return function(w, C, _, N, g, J, de, K, Re, Me) {
      switch (w) {
        case 1:
          if (Re === 0 && C.charCodeAt(0) === 64)
            return x(C + ";"), "";
          break;
        case 2:
          if (K === 0)
            return C + "/*|*/";
          break;
        case 3:
          switch (K) {
            case 102:
            case 112:
              return x(_[0] + C), "";
            default:
              return C + (Me === 0 ? "/*|*/" : "");
          }
        case -2:
          C.split("/*|*/}").forEach(l);
      }
    };
  }(function(x) {
    p.push(x);
  }), E = function(x, l, w) {
    return l === 0 && Ps.indexOf(w[r.length]) !== -1 || w.match(a) ? x : "." + t;
  };
  function S(x, l, w, C) {
    C === void 0 && (C = "&");
    var _ = x.replace(Ts, ""), N = l && w ? w + " " + l + " { " + _ + " }" : _;
    return t = C, r = l, o = new RegExp("\\" + r + "\\b", "g"), a = new RegExp("(\\" + r + "\\b){2,}"), u(w || !l ? "" : l, N);
  }
  return u.use([].concat(h, [function(x, l, w) {
    x === 2 && w.length && w[0].lastIndexOf(r) > 0 && (w[0] = w[0].replace(o, E));
  }, v, function(x) {
    if (x === -2) {
      var l = p;
      return p = [], l;
    }
  }])), S.hash = h.length ? h.reduce(function(x, l) {
    return l.name || Ct(15), Ot(x, l.name);
  }, 5381).toString() : "", S;
}
var Io = xt.createContext();
Io.Consumer;
var Lo = xt.createContext(), Ds = (Lo.Consumer, new Mo()), Jr = Ns();
function Ms() {
  return Xt(Io) || Ds;
}
function Os() {
  return Xt(Lo) || Jr;
}
var $o = function() {
  function e(t, r) {
    var o = this;
    this.inject = function(a, i) {
      i === void 0 && (i = Jr);
      var s = o.name + i.hash;
      a.hasNameForId(o.id, s) || a.insertRules(o.id, s, i(o.rules, s, "@keyframes"));
    }, this.toString = function() {
      return Ct(12, String(o.name));
    }, this.name = t, this.id = "sc-keyframes-" + t, this.rules = r;
  }
  return e.prototype.getName = function(t) {
    return t === void 0 && (t = Jr), this.name + t.hash;
  }, e;
}(), Is = /([A-Z])/, Ls = /([A-Z])/g, $s = /^ms-/, Fs = function(e) {
  return "-" + e.toLowerCase();
};
function oo(e) {
  return Is.test(e) ? e.replace(Ls, Fs).replace($s, "-ms-") : e;
}
var ao = function(e) {
  return e == null || e === !1 || e === "";
};
function Kt(e, t, r, o) {
  if (Array.isArray(e)) {
    for (var a, i = [], s = 0, c = e.length; s < c; s += 1)
      (a = Kt(e[s], t, r, o)) !== "" && (Array.isArray(a) ? i.push.apply(i, a) : i.push(a));
    return i;
  }
  if (ao(e))
    return "";
  if (un(e))
    return "." + e.styledComponentId;
  if (Yt(e)) {
    if (typeof (h = e) != "function" || h.prototype && h.prototype.isReactComponent || !t)
      return e;
    var d = e(t);
    return process.env.NODE_ENV !== "production" && hr.isElement(d) && console.warn(Kr(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), Kt(d, t, r, o);
  }
  var h;
  return e instanceof $o ? r ? (e.inject(r, o), e.getName(o)) : e : qr(e) ? function u(p, v) {
    var E, S, x = [];
    for (var l in p)
      p.hasOwnProperty(l) && !ao(p[l]) && (Array.isArray(p[l]) && p[l].isCss || Yt(p[l]) ? x.push(oo(l) + ":", p[l], ";") : qr(p[l]) ? x.push.apply(x, u(p[l], l)) : x.push(oo(l) + ": " + (E = l, (S = p[l]) == null || typeof S == "boolean" || S === "" ? "" : typeof S != "number" || S === 0 || E in Ji || E.startsWith("--") ? String(S).trim() : S + "px") + ";"));
    return v ? [v + " {"].concat(x, ["}"]) : x;
  }(e) : e.toString();
}
var io = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Fo(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  return Yt(e) || qr(e) ? io(Kt(to(_r, [e].concat(r)))) : r.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : io(Kt(to(e, r)));
}
var so = /invalid hook call/i, wr = /* @__PURE__ */ new Set(), zs = function(e, t) {
  if (process.env.NODE_ENV !== "production") {
    var r = "The component " + e + (t ? ' with the id of "' + t + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, o = console.error;
    try {
      var a = !0;
      console.error = function(i) {
        if (so.test(i))
          a = !1, wr.delete(r);
        else {
          for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++)
            c[d - 1] = arguments[d];
          o.apply(void 0, [i].concat(c));
        }
      }, $t(), a && !wr.has(r) && (console.warn(r), wr.add(r));
    } catch (i) {
      so.test(i.message) && wr.delete(r);
    } finally {
      console.error = o;
    }
  }
}, Bs = function(e, t, r) {
  return r === void 0 && (r = Pt), e.theme !== r.theme && e.theme || t || r.theme;
}, Vs = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Hs = /(^-|-$)/g;
function Vr(e) {
  return e.replace(Vs, "-").replace(Hs, "");
}
var zo = function(e) {
  return Xr(Oo(e) >>> 0);
};
function Cr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Zr = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, Us = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function Ws(e, t, r) {
  var o = e[r];
  Zr(t) && Zr(o) ? Bo(o, t) : e[r] = t;
}
function Bo(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  for (var a = 0, i = r; a < i.length; a++) {
    var s = i[a];
    if (Zr(s))
      for (var c in s)
        Us(c) && Ws(e, s[c], c);
  }
  return e;
}
var pr = xt.createContext();
pr.Consumer;
function Gs(e) {
  var t = Xt(pr), r = ra(function() {
    return function(o, a) {
      if (!o)
        return Ct(14);
      if (Yt(o)) {
        var i = o(a);
        return process.env.NODE_ENV === "production" || i !== null && !Array.isArray(i) && typeof i == "object" ? i : Ct(7);
      }
      return Array.isArray(o) || typeof o != "object" ? Ct(8) : a ? gt({}, a, {}, o) : o;
    }(e.theme, t);
  }, [e.theme, t]);
  return e.children ? xt.createElement(pr.Provider, { value: r }, e.children) : null;
}
var Hr = {};
function Vo(e, t, r) {
  var o = un(e), a = !Cr(e), i = t.attrs, s = i === void 0 ? _r : i, c = t.componentId, d = c === void 0 ? function(C, _) {
    var N = typeof C != "string" ? "sc" : Vr(C);
    Hr[N] = (Hr[N] || 0) + 1;
    var g = N + "-" + zo("5.3.10" + N + Hr[N]);
    return _ ? _ + "-" + g : g;
  }(t.displayName, t.parentComponentId) : c, h = t.displayName, u = h === void 0 ? function(C) {
    return Cr(C) ? "styled." + C : "Styled(" + Kr(C) + ")";
  }(e) : h, p = t.displayName && t.componentId ? Vr(t.displayName) + "-" + t.componentId : t.componentId || d, v = o && e.attrs ? Array.prototype.concat(e.attrs, s).filter(Boolean) : s, E = t.shouldForwardProp;
  o && e.shouldForwardProp && (E = t.shouldForwardProp ? function(C, _, N) {
    return e.shouldForwardProp(C, _, N) && t.shouldForwardProp(C, _, N);
  } : e.shouldForwardProp);
  var S, x = new _s(r, p, o ? e.componentStyle : void 0), l = x.isStatic && s.length === 0, w = function(C, _) {
    return function(N, g, J, de) {
      var K = N.attrs, Re = N.componentStyle, Me = N.defaultProps, $e = N.foldedComponentIds, H = N.shouldForwardProp, oe = N.styledComponentId, ue = N.target;
      process.env.NODE_ENV !== "production" && En(oe);
      var ae = function(W, m, ee) {
        W === void 0 && (W = Pt);
        var A = gt({}, m, { theme: W }), ve = {};
        return ee.forEach(function(te) {
          var Q, j, Se, D = te;
          for (Q in Yt(D) && (D = D(A)), D)
            A[Q] = ve[Q] = Q === "className" ? (j = ve[Q], Se = D[Q], j && Se ? j + " " + Se : j || Se) : D[Q];
        }), [A, ve];
      }(Bs(g, Xt(pr), Me) || Pt, g, K), ze = ae[0], Le = ae[1], Ae = function(W, m, ee, A) {
        var ve = Ms(), te = Os(), Q = m ? W.generateAndInjectStyles(Pt, ve, te) : W.generateAndInjectStyles(ee, ve, te);
        return process.env.NODE_ENV !== "production" && En(Q), process.env.NODE_ENV !== "production" && !m && A && A(Q), Q;
      }(Re, de, ze, process.env.NODE_ENV !== "production" ? N.warnTooManyClasses : void 0), Be = J, he = Le.$as || g.$as || Le.as || g.as || ue, Oe = Cr(he), I = Le !== g ? gt({}, g, {}, Le) : g, P = {};
      for (var O in I)
        O[0] !== "$" && O !== "as" && (O === "forwardedAs" ? P.as = I[O] : (H ? H(O, Kn, he) : !Oe || Kn(O)) && (P[O] = I[O]));
      return g.style && Le.style !== g.style && (P.style = gt({}, g.style, {}, Le.style)), P.className = Array.prototype.concat($e, oe, Ae !== oe ? Ae : null, g.className, Le.className).filter(Boolean).join(" "), P.ref = Be, na(he, P);
    }(S, C, _, l);
  };
  return w.displayName = u, (S = xt.forwardRef(w)).attrs = v, S.componentStyle = x, S.displayName = u, S.shouldForwardProp = E, S.foldedComponentIds = o ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : _r, S.styledComponentId = p, S.target = o ? e.target : e, S.withComponent = function(C) {
    var _ = t.componentId, N = function(J, de) {
      if (J == null)
        return {};
      var K, Re, Me = {}, $e = Object.keys(J);
      for (Re = 0; Re < $e.length; Re++)
        K = $e[Re], de.indexOf(K) >= 0 || (Me[K] = J[K]);
      return Me;
    }(t, ["componentId"]), g = _ && _ + "-" + (Cr(C) ? C : Vr(Kr(C)));
    return Vo(C, gt({}, N, { attrs: v, componentId: g }), r);
  }, Object.defineProperty(S, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(C) {
    this._foldedDefaultProps = o ? Bo({}, e.defaultProps, C) : C;
  } }), process.env.NODE_ENV !== "production" && (zs(u, p), S.warnTooManyClasses = function(C, _) {
    var N = {}, g = !1;
    return function(J) {
      if (!g && (N[J] = !0, Object.keys(N).length >= 200)) {
        var de = _ ? ' with the id of "' + _ + '"' : "";
        console.warn("Over 200 classes were generated for component " + C + de + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, N = {};
      }
    };
  }(u, p)), Object.defineProperty(S, "toString", { value: function() {
    return "." + S.styledComponentId;
  } }), a && ds(S, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), S;
}
var Qr = function(e) {
  return function t(r, o, a) {
    if (a === void 0 && (a = Pt), !hr.isValidElementType(o))
      return Ct(1, String(o));
    var i = function() {
      return r(o, a, Fo.apply(void 0, arguments));
    };
    return i.withConfig = function(s) {
      return t(r, o, gt({}, a, {}, s));
    }, i.attrs = function(s) {
      return t(r, o, gt({}, a, { attrs: Array.prototype.concat(a.attrs, s).filter(Boolean) }));
    }, i;
  }(Vo, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  Qr[e] = Qr(e);
});
function Ys(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  var a = Fo.apply(void 0, [e].concat(r)).join(""), i = zo(a);
  return new $o(i, a);
}
var qs = function() {
  return Xt(pr);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const B = Qr, Ho = oa({
  isDarkMode: !1,
  // eslint-disable-next-line
  setIsDarkMode: (e) => {
  }
}), Uo = () => Xt(Ho), Ks = ({
  children: e
}) => {
  const t = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches, [r, o] = ye(t);
  return /* @__PURE__ */ n.jsx(Ho.Provider, { value: { isDarkMode: r, setIsDarkMode: o }, children: e });
}, dt = {
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
}, se = {
  fontFamily: "'Roboto', 'sans-serif'",
  color: dt.neutral[400],
  backgroundColor: "transparent",
  padding: "10px",
  margin: "1rem",
  gap: "5px",
  headingColor: dt.neutral[500],
  headingFontFamily: "Arial, Helvetica, sans-serif",
  borderWidth: "1px",
  border: `1px solid ${dt.neutral[500]}`,
  borderRadius: "5px",
  inputHeight: "40px",
  inputPadding: "0 10px",
  dividerColor: dt.neutral[200],
  componentIcons: dt.neutral[400]
}, Xs = {
  name: "lightTheme",
  Layout: {
    section: {
      padding: "50px",
      borderBottom: `1px solid ${se.dividerColor}`
    },
    block: {
      padding: "0 0 50px"
    }
  },
  Heading: {
    color: se.headingColor,
    margin: "0 0 1rem",
    lineHeight: "1.3",
    fontWeight: "400",
    fontFamily: se.headingFontFamily,
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
      color: dt.neutral[100],
      background: dt.neutral[400],
      hover: dt.neutral[500],
      border: `1px solid ${dt.neutral[100]}`
    },
    outlined: "bg-transparent text-black border-black",
    text: {
      color: dt.neutral[500]
    }
  },
  Icon: {
    stroke: "black",
    fill: "",
    fillOpacity: 0
  },
  Input: {
    color: se.color,
    inputHeight: se.inputHeight,
    backgroundColor: dt.neutral[100],
    border: se.border,
    borderRadius: se.borderRadius
  },
  Text: {
    color: se.color,
    marginBottom: se.padding
  },
  Accordion: {
    title: {
      color: se.headingColor
    },
    content: {
      color: se.color
    },
    componentIcons: {
      stroke: se.componentIcons,
      fill: "none"
    }
  },
  LabelSomething: {
    gap: se.gap
  },
  Separator: {
    color: se.dividerColor,
    borderColor: se.dividerColor,
    backgroundColor: se.dividerColor,
    margin: se.margin,
    border: `${se.borderWidth} solid ${se.dividerColor}`
  },
  Select: {
    padding: se.padding,
    inputHeight: se.inputHeight,
    inputPadding: se.inputPadding,
    color: se.color,
    backgroundColor: se.backgroundColor,
    border: se.border,
    borderRadius: se.borderRadius
  },
  Slider: {
    formElementBackground: "#000000"
  },
  Checkbox: {
    borderRadius: se.borderRadius,
    border: se.border,
    backgroundColor: se.backgroundColor
  },
  RadioButton: {
    borderRadius: se.borderRadius,
    border: se.border,
    backgroundColor: se.backgroundColor
  },
  Counter: {
    height: se.inputHeight,
    border: se.border,
    borderRadius: se.borderRadius,
    backgroundColor: se.backgroundColor
  }
}, ut = {
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
}, le = {
  fontFamily: "'Roboto', 'sans-serif'",
  color: ut.neutral[400],
  backgroundColor: "transparent",
  padding: "10px",
  margin: "1rem",
  gap: "5px",
  headingColor: ut.neutral[500],
  headingFontFamily: "Arial, Helvetica, sans-serif",
  borderWidth: "1px",
  border: `1px solid ${ut.neutral[500]}`,
  borderRadius: "5px",
  inputHeight: "40px",
  inputPadding: "0 10px",
  dividerColor: ut.neutral[200],
  componentIcons: ut.neutral[400]
}, Js = {
  name: "darkTheme",
  Layout: {
    section: {
      padding: "50px",
      borderBottom: `1px solid ${le.dividerColor}`
    },
    block: {
      padding: "0 0 50px"
    }
  },
  Heading: {
    color: le.headingColor,
    margin: "0 0 1rem",
    lineHeight: "1.3",
    fontWeight: "400",
    fontFamily: le.headingFontFamily,
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
      color: ut.neutral[100],
      background: ut.neutral[400],
      hover: ut.neutral[500],
      border: `1px solid ${ut.neutral[100]}`
    },
    outlined: "bg-transparent text-white border-white",
    text: {
      color: ut.neutral[500]
    }
  },
  Icon: {
    stroke: "black",
    fill: "",
    fillOpacity: 0
  },
  Input: {
    color: le.color,
    inputHeight: le.inputHeight,
    backgroundColor: ut.neutral[100],
    border: le.border,
    borderRadius: le.borderRadius
  },
  Text: {
    color: le.color,
    marginBottom: le.padding
  },
  Accordion: {
    title: {
      color: le.headingColor
    },
    content: {
      color: le.color
    },
    componentIcons: {
      stroke: le.componentIcons,
      fill: "none"
    }
  },
  LabelSomething: {
    gap: le.gap
  },
  Separator: {
    color: le.dividerColor,
    borderColor: le.dividerColor,
    backgroundColor: le.dividerColor,
    margin: le.margin,
    border: `${le.borderWidth} solid ${le.dividerColor}`
  },
  Select: {
    padding: le.padding,
    inputHeight: le.inputHeight,
    inputPadding: le.inputPadding,
    color: le.color,
    backgroundColor: le.backgroundColor,
    border: le.border,
    borderRadius: le.borderRadius
  },
  Slider: {
    formElementBackground: "#000000"
  },
  Checkbox: {
    borderRadius: le.borderRadius,
    border: le.border,
    backgroundColor: le.backgroundColor
  },
  RadioButton: {
    borderRadius: le.borderRadius,
    border: le.border,
    backgroundColor: le.backgroundColor
  },
  Counter: {
    height: le.inputHeight,
    border: le.border,
    borderRadius: le.borderRadius,
    backgroundColor: le.backgroundColor
  }
}, Zs = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        d: "m15 6-1.41-1.41L7 11.17 4.41 8.59 3 10l4 4Z",
        fill: "currentColor",
        strokeWidth: 0,
        transform: "translate(3 4)"
      }
    )
  }
), hn = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
      }
    )
  }
), Qs = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
      }
    )
  }
), el = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.5 15.75l7.5-7.5 7.5 7.5"
      }
    )
  }
), tl = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6 18L18 6M6 6l12 12"
      }
    )
  }
), rl = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
      }
    )
  }
), nl = () => /* @__PURE__ */ n.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 100 100", children: /* @__PURE__ */ n.jsx(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z",
    fill: "currentColor"
  }
) }), ol = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    strokeWidth: "1",
    fillOpacity: "0",
    stroke: "currentColor",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      }
    )
  }
), al = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
      }
    )
  }
), pn = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M18 12H6" })
  }
), Wo = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v12m6-6H6" })
  }
), il = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ n.jsx("circle", { cx: "12", cy: "12", r: "12", fill: "currentColor" })
  }
), Go = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      }
    )
  }
), Yo = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
      }
    )
  }
), sl = () => /* @__PURE__ */ n.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: [
      /* @__PURE__ */ n.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "path",
        {
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        }
      )
    ]
  }
), ll = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
      }
    )
  }
), cl = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      }
    )
  }
), dl = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "1.5",
    stroke: "currentColor",
    className: "w-6 h-6",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
      }
    )
  }
), ul = B.div`
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
`, fl = B.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
`, hl = B.div`
  overflow: hidden;
  color: ${({ theme: e }) => {
  var t, r;
  return e && ((r = (t = e == null ? void 0 : e.Accordion) == null ? void 0 : t.content) == null ? void 0 : r.color) || "var()";
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
`, pl = B.div`
  padding: 20px 0;

  &[data-separator='true'] {
    padding: 0 0 20px 0;
  }
`, mn = ({
  data: e,
  multiOpen: t = !0,
  iconType: r = "plusminus",
  showSeparator: o = !0
}) => {
  const [a, i] = ye([]), s = (h) => {
    const u = a.includes(h);
    i(t ? u ? a.filter((p) => p !== h) : [.../* @__PURE__ */ new Set([...a, h])] : u ? [] : [h]);
  }, c = (h) => {
    s(h);
  }, d = {
    chevron: { open: /* @__PURE__ */ n.jsx(el, {}), closed: /* @__PURE__ */ n.jsx(hn, {}) },
    plusminus: { open: /* @__PURE__ */ n.jsx(pn, {}), closed: /* @__PURE__ */ n.jsx(Wo, {}) },
    hidden: {}
  };
  return /* @__PURE__ */ n.jsx("div", { className: "Accordion", role: "tablist", children: e.map((h, u) => {
    var v;
    const p = $t(null);
    return /* @__PURE__ */ n.jsxs(xt.Fragment, { children: [
      /* @__PURE__ */ n.jsxs("div", { className: "AccordionSection", children: [
        /* @__PURE__ */ n.jsx(
          ul,
          {
            className: "AccordionSectionHeader",
            role: "heading",
            "aria-level": 3,
            "data-separator": o ? "true" : "false",
            children: /* @__PURE__ */ n.jsxs(
              fl,
              {
                role: "button",
                "aria-expanded": !!a.includes(u),
                "aria-controls": `AccordionSectionPanel_${u}`,
                "aria-disabled": !1,
                id: `AccordionSectionTitle_${u}`,
                tabIndex: 0,
                onClick: () => c(u),
                onKeyDown: (E) => {
                  switch (console.log(E.key), E.key) {
                    case "Enter":
                    case " ":
                      c(u);
                      break;
                  }
                },
                children: [
                  h.title,
                  r !== "hidden" && /* @__PURE__ */ n.jsx(Ie, { size: "30px", children: a.includes(u) ? d[r].open : d[r].closed })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ n.jsx(
          hl,
          {
            className: "AccordionSectionPanel",
            role: "region",
            "aria-labelledby": `AccordionSectionTitle_${u}`,
            id: `AccordionSectionPanel_${u}`,
            ref: p,
            "data-expanded": a.includes(u) ? "true" : "false",
            scrollHeight: String((v = p == null ? void 0 : p.current) == null ? void 0 : v.scrollHeight),
            children: /* @__PURE__ */ n.jsx(
              pl,
              {
                "data-separator": o ? "true" : "false",
                children: h.body
              }
            )
          }
        )
      ] }),
      o && /* @__PURE__ */ n.jsx(Or, {})
    ] }, u);
  }) });
}, lo = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, co = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return t.flat(1 / 0).filter(Boolean).join(" ");
}, gn = (e, t) => (r) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return co(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: a, defaultVariants: i } = t, s = Object.keys(a).map((h) => {
    const u = r == null ? void 0 : r[h], p = i == null ? void 0 : i[h];
    if (u === null)
      return null;
    const v = lo(u) || lo(p);
    return a[h][v];
  }), c = r && Object.entries(r).reduce((h, u) => {
    let [p, v] = u;
    return v === void 0 || (h[p] = v), h;
  }, {}), d = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((h, u) => {
    let { class: p, className: v, ...E } = u;
    return Object.entries(E).every((S) => {
      let [x, l] = S;
      return Array.isArray(l) ? l.includes({
        ...i,
        ...c
      }[x]) : {
        ...i,
        ...c
      }[x] === l;
    }) ? [
      ...h,
      p,
      v
    ] : h;
  }, []);
  return co(e, s, d, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
};
function ml() {
  for (var e = 0, t, r, o = ""; e < arguments.length; )
    (t = arguments[e++]) && (r = qo(t)) && (o && (o += " "), o += r);
  return o;
}
function qo(e) {
  if (typeof e == "string")
    return e;
  for (var t, r = "", o = 0; o < e.length; o++)
    e[o] && (t = qo(e[o])) && (r && (r += " "), r += t);
  return r;
}
var vn = "-";
function gl(e) {
  var t = bl(e), r = e.conflictingClassGroups, o = e.conflictingClassGroupModifiers, a = o === void 0 ? {} : o;
  function i(c) {
    var d = c.split(vn);
    return d[0] === "" && d.length !== 1 && d.shift(), Ko(d, t) || vl(c);
  }
  function s(c, d) {
    var h = r[c] || [];
    return d && a[c] ? [].concat(h, a[c]) : h;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: s
  };
}
function Ko(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var r = e[0], o = t.nextPart.get(r), a = o ? Ko(e.slice(1), o) : void 0;
  if (a)
    return a;
  if (t.validators.length !== 0) {
    var i = e.join(vn);
    return (s = t.validators.find(function(c) {
      var d = c.validator;
      return d(i);
    })) == null ? void 0 : s.classGroupId;
  }
}
var uo = /^\[(.+)\]$/;
function vl(e) {
  if (uo.test(e)) {
    var t = uo.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function bl(e) {
  var t = e.theme, r = e.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, a = yl(Object.entries(e.classGroups), r);
  return a.forEach(function(i) {
    var s = i[0], c = i[1];
    en(c, o, s, t);
  }), o;
}
function en(e, t, r, o) {
  e.forEach(function(a) {
    if (typeof a == "string") {
      var i = a === "" ? t : fo(t, a);
      i.classGroupId = r;
      return;
    }
    if (typeof a == "function") {
      if (xl(a)) {
        en(a(o), t, r, o);
        return;
      }
      t.validators.push({
        validator: a,
        classGroupId: r
      });
      return;
    }
    Object.entries(a).forEach(function(s) {
      var c = s[0], d = s[1];
      en(d, fo(t, c), r, o);
    });
  });
}
function fo(e, t) {
  var r = e;
  return t.split(vn).forEach(function(o) {
    r.nextPart.has(o) || r.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(o);
  }), r;
}
function xl(e) {
  return e.isThemeGetter;
}
function yl(e, t) {
  return t ? e.map(function(r) {
    var o = r[0], a = r[1], i = a.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(c) {
        var d = c[0], h = c[1];
        return [t + d, h];
      })) : s;
    });
    return [o, i];
  }) : e;
}
function wl(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, r = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function a(i, s) {
    r.set(i, s), t++, t > e && (t = 0, o = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get: function(s) {
      var c = r.get(s);
      if (c !== void 0)
        return c;
      if ((c = o.get(s)) !== void 0)
        return a(s, c), c;
    },
    set: function(s, c) {
      r.has(s) ? r.set(s, c) : a(s, c);
    }
  };
}
var Xo = "!";
function Cl(e) {
  var t = e.separator || ":", r = t.length === 1, o = t[0], a = t.length;
  return function(s) {
    for (var c = [], d = 0, h = 0, u, p = 0; p < s.length; p++) {
      var v = s[p];
      if (d === 0) {
        if (v === o && (r || s.slice(p, p + a) === t)) {
          c.push(s.slice(h, p)), h = p + a;
          continue;
        }
        if (v === "/") {
          u = p;
          continue;
        }
      }
      v === "[" ? d++ : v === "]" && d--;
    }
    var E = c.length === 0 ? s : s.substring(h), S = E.startsWith(Xo), x = S ? E.substring(1) : E, l = u && u > h ? u - h : void 0;
    return {
      modifiers: c,
      hasImportantModifier: S,
      baseClassName: x,
      maybePostfixModifierPosition: l
    };
  };
}
function jl(e) {
  if (e.length <= 1)
    return e;
  var t = [], r = [];
  return e.forEach(function(o) {
    var a = o[0] === "[";
    a ? (t.push.apply(t, r.sort().concat([o])), r = []) : r.push(o);
  }), t.push.apply(t, r.sort()), t;
}
function El(e) {
  return {
    cache: wl(e.cacheSize),
    splitModifiers: Cl(e),
    ...gl(e)
  };
}
var Sl = /\s+/;
function kl(e, t) {
  var r = t.splitModifiers, o = t.getClassGroupId, a = t.getConflictingClassGroupIds, i = /* @__PURE__ */ new Set();
  return e.trim().split(Sl).map(function(s) {
    var c = r(s), d = c.modifiers, h = c.hasImportantModifier, u = c.baseClassName, p = c.maybePostfixModifierPosition, v = o(p ? u.substring(0, p) : u), E = !!p;
    if (!v) {
      if (!p)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (v = o(u), !v)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      E = !1;
    }
    var S = jl(d).join(":"), x = h ? S + Xo : S;
    return {
      isTailwindClass: !0,
      modifierId: x,
      classGroupId: v,
      originalClassName: s,
      hasPostfixModifier: E
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var c = s.modifierId, d = s.classGroupId, h = s.hasPostfixModifier, u = c + d;
    return i.has(u) ? !1 : (i.add(u), a(d, h).forEach(function(p) {
      return i.add(c + p);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function Rl() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var o, a, i, s = c;
  function c(h) {
    var u = t[0], p = t.slice(1), v = p.reduce(function(E, S) {
      return S(E);
    }, u());
    return o = El(v), a = o.cache.get, i = o.cache.set, s = d, d(h);
  }
  function d(h) {
    var u = a(h);
    if (u)
      return u;
    var p = kl(h, o);
    return i(h, p), p;
  }
  return function() {
    return s(ml.apply(null, arguments));
  };
}
function De(e) {
  var t = function(o) {
    return o[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var Jo = /^\[(?:([a-z-]+):)?(.+)\]$/i, Al = /^\d+\/\d+$/, _l = /* @__PURE__ */ new Set(["px", "full", "screen"]), Tl = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Pl = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Nl = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function ct(e) {
  return Lt(e) || _l.has(e) || Al.test(e) || tn(e);
}
function tn(e) {
  return zt(e, "length", $l);
}
function Dl(e) {
  return zt(e, "size", Zo);
}
function Ml(e) {
  return zt(e, "position", Zo);
}
function Ol(e) {
  return zt(e, "url", Fl);
}
function jr(e) {
  return zt(e, "number", Lt);
}
function Lt(e) {
  return !Number.isNaN(Number(e));
}
function Il(e) {
  return e.endsWith("%") && Lt(e.slice(0, -1));
}
function sr(e) {
  return ho(e) || zt(e, "number", ho);
}
function ce(e) {
  return Jo.test(e);
}
function lr() {
  return !0;
}
function Tt(e) {
  return Tl.test(e);
}
function Ll(e) {
  return zt(e, "", zl);
}
function zt(e, t, r) {
  var o = Jo.exec(e);
  return o ? o[1] ? o[1] === t : r(o[2]) : !1;
}
function $l(e) {
  return Pl.test(e);
}
function Zo() {
  return !1;
}
function Fl(e) {
  return e.startsWith("url(");
}
function ho(e) {
  return Number.isInteger(Number(e));
}
function zl(e) {
  return Nl.test(e);
}
function Bl() {
  var e = De("colors"), t = De("spacing"), r = De("blur"), o = De("brightness"), a = De("borderColor"), i = De("borderRadius"), s = De("borderSpacing"), c = De("borderWidth"), d = De("contrast"), h = De("grayscale"), u = De("hueRotate"), p = De("invert"), v = De("gap"), E = De("gradientColorStops"), S = De("gradientColorStopPositions"), x = De("inset"), l = De("margin"), w = De("opacity"), C = De("padding"), _ = De("saturate"), N = De("scale"), g = De("sepia"), J = De("skew"), de = De("space"), K = De("translate"), Re = function() {
    return ["auto", "contain", "none"];
  }, Me = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, $e = function() {
    return ["auto", ce, t];
  }, H = function() {
    return [ce, t];
  }, oe = function() {
    return ["", ct];
  }, ue = function() {
    return ["auto", Lt, ce];
  }, ae = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, ze = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, Le = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, Ae = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, Be = function() {
    return ["", "0", ce];
  }, he = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, Oe = function() {
    return [Lt, jr];
  }, I = function() {
    return [Lt, ce];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [lr],
      spacing: [ct],
      blur: ["none", "", Tt, ce],
      brightness: Oe(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Tt, ce],
      borderSpacing: H(),
      borderWidth: oe(),
      contrast: Oe(),
      grayscale: Be(),
      hueRotate: I(),
      invert: Be(),
      gap: H(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Il, tn],
      inset: $e(),
      margin: $e(),
      opacity: Oe(),
      padding: H(),
      saturate: Oe(),
      scale: Oe(),
      sepia: Be(),
      skew: I(),
      space: H(),
      translate: H()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ce]
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
        columns: [Tt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": he()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": he()
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
        object: [].concat(ae(), [ce])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Me()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Me()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Me()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: Re()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": Re()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": Re()
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
        inset: [x]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [x]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [x]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [x]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [x]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [x]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [x]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [x]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [x]
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
        z: ["auto", sr]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: $e()
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
        flex: ["1", "auto", "initial", "none", ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Be()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Be()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", sr]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [lr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", sr]
        }, ce]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": ue()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": ue()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [lr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [sr]
        }, ce]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": ue()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": ue()
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
        "auto-cols": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [v]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [v]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [v]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(Ae())
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
        content: ["normal"].concat(Ae(), ["baseline"])
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
        "place-content": [].concat(Ae(), ["baseline"])
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
        p: [C]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [C]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [C]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [C]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [C]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [C]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [C]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [C]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [C]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [l]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [l]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [l]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [l]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [l]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [l]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [l]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [l]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [l]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [de]
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
        "space-y": [de]
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
        w: ["auto", "min", "max", "fit", ce, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", ce, ct]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [Tt]
        }, Tt, ce]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ce, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", ce, ct]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ce, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Tt, tn]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", jr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [lr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Lt, jr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", ce, ct]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ce]
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
        "placeholder-opacity": [w]
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
        "text-opacity": [w]
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
        decoration: [].concat(ze(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", ct]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", ce, ct]
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
        indent: H()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce]
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
        content: ["none", ce]
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
        "bg-opacity": [w]
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
        bg: [].concat(ae(), [Ml])
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
        bg: ["auto", "cover", "contain", Dl]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ol]
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
        from: [S]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [S]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [S]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [E]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [E]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [E]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [c]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [c]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [c]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [c]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [c]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [c]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [c]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [c]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [c]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [w]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(ze(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [c]
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
        "divide-y": [c]
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
        "divide-opacity": [w]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ze()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [a]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [a]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [a]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [a]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [a]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [a]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [a]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [a]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(ze())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [ce, ct]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [ct]
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
        ring: oe()
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
        "ring-opacity": [w]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [ct]
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
        shadow: ["", "inner", "none", Tt, Ll]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [lr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": Le()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Le()
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
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Tt, ce]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [h]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [p]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [_]
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
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [h]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [p]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [w]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [_]
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
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: I()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ce]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: I()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ce]
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
        scale: [N]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [N]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [N]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [sr, ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [K]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [K]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [J]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [J]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ce]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce]
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
        "scroll-m": H()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": H()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": H()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": H()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": H()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": H()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": H()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": H()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": H()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": H()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": H()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": H()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": H()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": H()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": H()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": H()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": H()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": H()
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
        "will-change": ["auto", "scroll", "contents", "transform", ce]
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
        stroke: [ct, jr]
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
var bn = /* @__PURE__ */ Rl(Bl);
const Vl = gn(
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
), Ze = ({
  intent: e,
  size: t,
  className: r,
  onClick: o,
  ariaLabel: a,
  children: i,
  ...s
}) => {
  var h, u;
  const c = qs(), d = bn(
    Vl({ intent: e, size: t }),
    r,
    e === "primary" && ((h = c.Button) == null ? void 0 : h.primary),
    e === "outlined" && ((u = c.Button) == null ? void 0 : u.outlined)
  );
  return /* @__PURE__ */ n.jsx(
    "button",
    {
      className: d,
      "aria-label": a || "Button",
      role: "button",
      tabIndex: 0,
      onClick: o,
      ...s,
      children: i
    }
  );
}, Hl = B.div`
  border: ${({ borderColor: e, theme: t }) => e ? `1px solid ${e}` : `1px solid ${t.borderColor}`};
  border-radius: ${({ borderRadius: e }) => e};
  width: ${({ width: e }) => e};
  height: ${({ height: e }) => e};
  padding: 15px;
`, Ul = ({
  color: e = "white",
  borderColor: t = "black",
  borderRadius: r = "10px",
  width: o = "250px",
  height: a = "300px",
  children: i
}) => /* @__PURE__ */ n.jsx(
  Hl,
  {
    color: e,
    borderColor: t,
    borderRadius: r,
    width: o,
    height: a,
    children: i
  }
), Wl = B.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: auto;
  gap: 1rem;
`, Gl = B.input.attrs({ type: "checkbox" })`
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
`, Yl = B.div`
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.Checkbox) == null ? void 0 : t.borderRadius;
}};
  border: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.Checkbox) == null ? void 0 : t.border;
}};
  background-color: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.Checkbox) == null ? void 0 : t.backgroundColor;
}};
`, mr = ({
  checked: e,
  name: t,
  label: r,
  onChange: o,
  iconSize: a = "20px",
  indeterminate: i = !1
}) => {
  const s = $t(null);
  return Ft(() => {
    s.current.indeterminate = i;
  }, [i]), /* @__PURE__ */ n.jsxs(Wl, { className: "Checkbox", children: [
    /* @__PURE__ */ n.jsx(
      Gl,
      {
        checked: e,
        ref: s,
        onChange: o,
        name: t
      }
    ),
    /* @__PURE__ */ n.jsx(Yl, { checked: e, children: /* @__PURE__ */ n.jsx(Ie, { size: a, children: i ? /* @__PURE__ */ n.jsx(pn, {}) : e ? /* @__PURE__ */ n.jsx(Zs, {}) : null }) }),
    r
  ] });
}, ql = B.div`
  display: inline-flex;
  flex-direction: ${({ direction: e }) => e};

  > *:not(:last-child) {
    margin-bottom: ${({ direction: e, spacing: t }) => (e === "column" || e === "column-reverse") && t};
    margin-right: ${({ direction: e, spacing: t }) => (e === "row" || e === "row-reverse") && t};
  }
`, xn = ({
  direction: e = "column",
  spacing: t = "0px",
  children: r
}) => /* @__PURE__ */ n.jsx(
  ql,
  {
    className: "CheckboxGroup",
    direction: e,
    spacing: t,
    children: r
  }
), Kl = B.div`
  display: flex;
  width: 120px;

  height: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.Counter) == null ? void 0 : t.height;
}};
  gap: 10px;

  Button {
    display: flex;
    align-items: center;
  }
  Input {
    height: auto;
  }
`, Xl = ({ savedData: e, onChange: t }) => {
  const r = (a) => {
    a.preventDefault(), a.stopPropagation(), console.log("decrement"), t(parseInt(e || 0) - 1);
  }, o = (a) => {
    a.preventDefault(), a.stopPropagation(), console.log("increment"), t(parseInt(e || 0) + 1);
  };
  return /* @__PURE__ */ n.jsxs(Kl, { children: [
    /* @__PURE__ */ n.jsx(
      Ze,
      {
        className: ["Button", "left"].join(" "),
        onClick: r,
        intent: "icon",
        children: /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: /* @__PURE__ */ n.jsx(pn, {}) })
      }
    ),
    /* @__PURE__ */ n.jsx(
      Dt,
      {
        placeholder: "",
        className: "pointer-events-none text-center p-0",
        onChange: (a) => !isNaN(a.target.value),
        savedData: e
      }
    ),
    /* @__PURE__ */ n.jsx(
      Ze,
      {
        className: ["Button", "right"].join(" "),
        onClick: o,
        intent: "icon",
        children: /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: /* @__PURE__ */ n.jsx(Wo, {}) })
      }
    )
  ] });
}, er = B.div`
  color: var(--clr-foreground);
  margin: ${({ theme: e }) => {
  var t;
  return (t = e.Heading) == null ? void 0 : t.margin;
}};
  line-height: ${({ theme: e }) => {
  var t;
  return (t = e.Heading) == null ? void 0 : t.lineHeight;
}};
  font-weight: ${({ theme: e }) => {
  var t;
  return (t = e.Heading) == null ? void 0 : t.fontWeight;
}};
  font-family: ${({ theme: e }) => {
  var t;
  return (t = e.Heading) == null ? void 0 : t.fontFamily;
}};
`, Jl = B(er)`
  font-size: ${({ theme: e }) => {
  var t, r;
  return (r = (t = e.Heading) == null ? void 0 : t.fontSize) == null ? void 0 : r.h1;
}};
`, Zl = B(er)`
  font-size: ${({ theme: e }) => {
  var t, r;
  return (r = (t = e.Heading) == null ? void 0 : t.fontSize) == null ? void 0 : r.h2;
}};
`, Ql = B(er)`
  font-size: ${({ theme: e }) => {
  var t, r;
  return (r = (t = e.Heading) == null ? void 0 : t.fontSize) == null ? void 0 : r.h3;
}};
`, ec = B(er)`
  font-size: ${({ theme: e }) => {
  var t, r;
  return (r = (t = e.Heading) == null ? void 0 : t.fontSize) == null ? void 0 : r.h4;
}};
`, tc = B(er)`
  font-size: ${({ theme: e }) => {
  var t, r;
  return (r = (t = e.Heading) == null ? void 0 : t.fontSize) == null ? void 0 : r.h5;
}};
`, rc = B(er)`
  font-size: ${({ theme: e }) => {
  var t, r;
  return (r = (t = e.Heading) == null ? void 0 : t.fontSize) == null ? void 0 : r.h6;
}};
`, L = ({
  variation: e,
  children: t
}) => {
  const o = {
    h1: Jl,
    h2: Zl,
    h3: Ql,
    h4: ec,
    h5: tc,
    h6: rc
  }[e];
  return /* @__PURE__ */ n.jsx(o, { as: e, children: t });
}, nc = B.div`
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
`, Ie = ({
  stroke: e = "currentColor",
  children: t,
  size: r = "25px",
  fill: o = void 0,
  fillOpacity: a,
  ...i
}) => /* @__PURE__ */ n.jsx(
  nc,
  {
    className: "Icon",
    size: r,
    stroke: e,
    fill: o,
    fillOpacity: a,
    ...i,
    children: t
  }
), oc = gn(
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
), Dt = aa(function({
  onChange: t,
  border: r,
  savedData: o,
  placeholder: a,
  className: i,
  readonly: s,
  children: c,
  type: d,
  tw: h,
  ...u
}, p) {
  const v = bn(oc({ border: r, readonly: s }), i, h);
  return /* @__PURE__ */ n.jsx(
    "input",
    {
      type: d,
      onChange: t,
      value: o,
      placeholder: a,
      className: v,
      readOnly: s,
      ref: p,
      ...u,
      children: c
    }
  );
}), ac = gn([
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
]), Mr = ({ children: e }) => {
  const t = bn(ac());
  return /* @__PURE__ */ n.jsx("div", { className: t, children: e });
}, ic = B.div`
  display: inline-flex;
  align-items: center;
  justify-items: center;
  flex-direction: ${({ labelDirection: e }) => e};
  gap: ${({ gap: e }) => e};
`, ft = ({
  label: e,
  something: t,
  gap: r = "2px",
  labelDirection: o = "right",
  labelClickable: a = !1
}) => {
  const i = {
    left: "row-reverse",
    right: "row",
    top: "column-reverse",
    bottom: "column"
  };
  return /* @__PURE__ */ n.jsxs(
    ic,
    {
      as: a ? "label" : "div",
      labelDirection: i[o],
      gap: r,
      children: [
        t,
        /* @__PURE__ */ n.jsx("div", { children: e })
      ]
    }
  );
}, sc = B.section`
  box-sizing: border-box;
  padding: ${({ theme: e }) => {
  var t, r;
  return (r = (t = e.Layout) == null ? void 0 : t.section) == null ? void 0 : r.padding;
}};
  border-bottom: ${({ theme: e }) => {
  var t, r;
  return (r = (t = e.Layout) == null ? void 0 : t.section) == null ? void 0 : r.borderBottom;
}};
`, lc = B.div`
  position: relative;
  padding: ${({ theme: e }) => {
  var t, r;
  return (r = (t = e.Layout) == null ? void 0 : t.block) == null ? void 0 : r.padding;
}};
`, Pe = ({
  label: e,
  children: t,
  variation: r
}) => {
  const a = {
    section: sc,
    block: lc
  }[r];
  return /* @__PURE__ */ n.jsx(a, { children: e || t });
}, cc = ({ children: e }) => /* @__PURE__ */ n.jsx("ul", { children: e }), dc = ({ firstname: e, lastname: t, email: r }) => /* @__PURE__ */ n.jsxs("li", { className: "flex flex-col mb-5 last:mb-0", children: [
  /* @__PURE__ */ n.jsxs("div", { className: "flex justify-between", children: [
    e,
    " ",
    t
  ] }),
  /* @__PURE__ */ n.jsx("div", { children: r })
] }), uc = B.circle`
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
`, Er = ({
  progress: e,
  size: t
}) => {
  const r = t / 2 - t / 10, o = 2 * Math.PI * r, a = o - e / 100 * o, i = `rotate(-90 ${t / 2} ${t / 2})`;
  return /* @__PURE__ */ n.jsx("svg", { width: t, height: t, children: /* @__PURE__ */ n.jsx(
    uc,
    {
      className: "circle",
      strokeWidth: t / 10,
      strokeDasharray: `${o} ${o}`,
      strokeDashoffset: a,
      r,
      cx: t / 2,
      cy: t / 2,
      transform: i
    }
  ) });
}, fc = B.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: auto;
  gap: 1rem;
`, hc = B.input.attrs({ type: "radio" })`
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
`, pc = B.div`
  display: flex;
  align-items: center;
  justify-items: center;
  position: relative;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 50%;
  border: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.RadioButton) == null ? void 0 : t.border;
}};
  background-color: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.RadioButton) == null ? void 0 : t.backgroundColor;
}};
`, yn = ({ checked: e, name: t, label: r, onChange: o, iconSize: a }) => /* @__PURE__ */ n.jsxs(fc, { className: "RadioButton", children: [
  /* @__PURE__ */ n.jsx(hc, { checked: e, onChange: o, name: t }),
  /* @__PURE__ */ n.jsx(pc, { checked: e, children: /* @__PURE__ */ n.jsx(Ie, { size: a, children: e && /* @__PURE__ */ n.jsx(il, {}) }) }),
  r
] }), mc = B.div`
  display: inline-flex;
  flex-direction: ${({ direction: e }) => e};

  > *:not(:last-child) {
    margin-bottom: ${({ direction: e, spacing: t }) => (e === "column" || e === "column-reverse") && t};
    margin-right: ${({ direction: e, spacing: t }) => (e === "row" || e === "row-reverse") && t};
  }
`, Qo = ({
  direction: e = "column",
  spacing: t = "0px",
  children: r
}) => /* @__PURE__ */ n.jsx(
  mc,
  {
    className: "RadioButtonGroup",
    direction: e,
    spacing: t,
    children: r
  }
), gc = B.div`
  position: relative;
  display: flex;
  align-items: center;
  .Icon {
    right: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.Select) == null ? void 0 : t.padding;
}};
    position: absolute;
    pointer-events: none;
  }
`, vc = B.select`
  -webkit-appearance: none;

  box-sizing: border-box;
  appearance: none;
  margin: 0;
  width: 100%;
  outline: none;
  cursor: pointer;  
  max-height: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.Select) == null ? void 0 : t.inputHeight;
}};
  height: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.Select) == null ? void 0 : t.inputHeight;
}};
  color: var(--input-text-color);
  background: var(--input-background-color);
  border: 1px solid var(--border-color);
  border-radius: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.Select) == null ? void 0 : t.borderRadius;
}};
  padding: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.Select) == null ? void 0 : t.inputPadding;
}};
  
}`, bc = ({ savedData: e, onChange: t, children: r }) => {
  const o = (a) => {
    t(a);
  };
  return /* @__PURE__ */ n.jsxs(gc, { children: [
    /* @__PURE__ */ n.jsx(vc, { value: e, onChange: o, children: r ? r.map((a) => a) : null }),
    /* @__PURE__ */ n.jsx(Ie, { className: "Icon", iconSize: "30px", children: /* @__PURE__ */ n.jsx(hn, {}) })
  ] });
}, wn = B.div`
  box-sizing: border-box;
  display: flex;
`, xc = B(wn)`
  display: flex;
  width: 100%;
  height: 1px;
  margin: ${({ margin: e }) => e};
  background: var(--border-color);
`, yc = B(wn)`
  height: ${({ height: e }) => e};
  width: 1px;
  margin: ${({ margin: e }) => e};
  background: var(--border-color);
`, wc = B(wn)`
  span {
    color: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.Separator) == null ? void 0 : t.color;
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
`, Or = ({
  variation: e = "horizontal",
  margin: t = "0px",
  height: r = "inherit",
  width: o = "inherit",
  label: a = void 0
}) => {
  switch (e) {
    case "horizontal":
      return /* @__PURE__ */ n.jsx(
        xc,
        {
          className: "Separator",
          height: r,
          width: o,
          margin: t
        }
      );
    case "vertical":
      return /* @__PURE__ */ n.jsx(
        yc,
        {
          className: "Separator",
          height: r,
          width: o,
          margin: t
        }
      );
    case "horizontal-labelled":
      return /* @__PURE__ */ n.jsx(
        wc,
        {
          className: "Separator",
          height: r,
          width: o,
          margin: t,
          children: /* @__PURE__ */ n.jsx("span", { children: a })
        }
      );
    default:
      return null;
  }
}, Cc = B.div`
  box-sizing: border-box;
  width: ${({ width: e }) => e};
  margin-left: ${({ offset: e }) => e};
`, jc = B.div`
  width: 100%;
  background: red;
  position: relative;
`, Ec = B.div`
  border-radius: 0px;
  height: 1px;
  width: 100%;
  top: 7px;
  position: absolute;
  display: ${({ hideTrack: e }) => e ? "none" : "block"};
  background-color: currentColor;
`, Sc = B.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  > div {
    background-color: pink;
  }
`, kc = B.input.attrs(({ index: e }) => ({
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
`, ea = ({
  width: e = "100%",
  hideTrack: t = !1,
  trackClickable: r = !0,
  min: o = 0,
  max: a = 100,
  step: i = 1,
  index: s = 0,
  thumbSize: c = "16px",
  backgroundColor: d,
  savedData: h = 0,
  offset: u = 0,
  onChange: p,
  className: v
}) => {
  const [E, S] = ye();
  Ft(() => {
    S(h);
  }, []);
  const x = (l, w) => {
    p(l, w), S(l);
  };
  return /* @__PURE__ */ n.jsx(
    Cc,
    {
      width: e,
      offset: u,
      className: ["Slider", v].join(" "),
      children: /* @__PURE__ */ n.jsxs(jc, { children: [
        /* @__PURE__ */ n.jsx(Ec, { hideTrack: t, backgroundColor: d }),
        /* @__PURE__ */ n.jsxs(Sc, { color: "red", splitPosition: E, children: [
          /* @__PURE__ */ n.jsx("div", {}),
          /* @__PURE__ */ n.jsx("div", {})
        ] }),
        /* @__PURE__ */ n.jsx(
          kc,
          {
            type: "range",
            trackClickable: r,
            min: o,
            max: a,
            step: i,
            thumbSize: c,
            value: h,
            onChange: (l) => x(l.target.value, s)
          }
        )
      ] })
    }
  );
}, Rc = B.div`
  height: 30px;
  width: ${({ width: e }) => e};
`, Ac = B.div`
  height: 15px;
  position: relative;
`, _c = B.div`
  width: ${({ offset: e }) => `calc(100% - ${e})`};
  position: absolute;
`, Tc = B.div`
  height: 1px;
  border: 0px;
  border-radius: 0px;
  width: 100%;
  position: absolute;
  top: 7px;
  background-color: currentColor;
`, Pc = ({
  sliderValues: e,
  onChange: t,
  step: r = 1,
  min: o = 0,
  max: a = 0,
  thumbSize: i = "16px",
  backgroundColor: s = "red",
  width: c = "100%"
}) => {
  const d = (u, p) => {
    let v;
    e.length === 1 || u === 0 ? v = v : v = e[u - 1];
    let E;
    return e.length === 1 || u === e.length - 1 ? E = E : E = e[u + 1], p <= v && (p = v), p >= E && (p = E), console.log("value: ", p), p;
  }, h = (u, p = 0) => {
    const v = d(p, parseInt(u));
    let E = e.slice();
    E[p] = v, t(E);
  };
  return /* @__PURE__ */ n.jsx(Rc, { className: "SliderMultiRange", width: c, children: /* @__PURE__ */ n.jsxs(Ac, { className: "SliderWrapper", children: [
    /* @__PURE__ */ n.jsx(Tc, { className: "SliderTrack", thumbSize: i }),
    /* @__PURE__ */ n.jsx(
      _c,
      {
        className: "Sliders",
        offset: parseInt(i) * (e.length - 1) + "px",
        children: (e || []).map((u, p) => /* @__PURE__ */ n.jsx(
          ea,
          {
            className: "",
            savedData: u,
            step: r,
            index: p,
            onChange: h,
            min: o,
            max: a,
            offset: parseInt(i) * p + "px",
            trackClickable: !1,
            hideTrack: !0,
            thumbSize: i
          },
          p
        ))
      }
    )
  ] }) });
}, Nc = B.div`
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
`, Dc = ({ setShowSnackbar: e, children: t }) => {
  const [r, o] = ye(!1);
  return Ft(() => {
    o(!0);
    const a = setTimeout(() => {
      o(!1), e(!1);
    }, 2e3);
    return () => {
      clearTimeout(a);
    };
  }, [e]), /* @__PURE__ */ n.jsx(Nc, { className: r ? "show" : "", children: t });
}, Mc = Ys`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`, Oc = B.div`
  width: ${(e) => e.size};
  height: ${(e) => e.size};
  border-radius: 50%;
  border: 3px solid #ccc;
  border-top-color: #333;
  animation: ${Mc} 1s linear infinite;
  will-change: border-top-color;
`, Ic = ({ size: e = "30px" }) => /* @__PURE__ */ n.jsx(Oc, { size: e }), Lc = ({ headers: e, data: t, configure: r }) => /* @__PURE__ */ n.jsxs("table", { className: "border", children: [
  /* @__PURE__ */ n.jsx("thead", { children: /* @__PURE__ */ n.jsx("tr", { children: e.map((o, a) => /* @__PURE__ */ n.jsx(
    "th",
    {
      className: r.padding,
      style: { width: o.width },
      align: o.alignHeader,
      children: o.title
    },
    a
  )) }) }),
  /* @__PURE__ */ n.jsx("tbody", { children: t.map((o, a) => /* @__PURE__ */ n.jsx("tr", { children: e.map((i, s) => /* @__PURE__ */ n.jsx(
    "td",
    {
      className: r.padding,
      align: i.alignContent,
      children: o[i.mapToDataAttribute]
    },
    s
  )) }, a)) })
] }), $c = B.p`
  color: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.Text) == null ? void 0 : t.marginBottom;
}};
  margin-bottom: ${({ theme: e }) => {
  var t;
  return (t = e == null ? void 0 : e.Text) == null ? void 0 : t.marginBottom;
}};
`, ht = ({ children: e, ...t }) => /* @__PURE__ */ n.jsx($c, { ...t, children: e }), Fc = B.div`
  label {
    display: inline-flex;
    cursor: pointer;
  }
`, zc = B.input.attrs({ type: "checkbox" })`
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
`, Bc = ({ checked: e, onChange: t, icon: r, children: o }) => /* @__PURE__ */ n.jsx(Fc, { className: "ToggleButton", children: /* @__PURE__ */ n.jsxs("label", { children: [
  /* @__PURE__ */ n.jsx(zc, { checked: e, onChange: t }),
  r || o
] }) }), Vc = B(Ze)`
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
`, Hc = () => {
  const { isDarkMode: e, setIsDarkMode: t } = Uo();
  Ft(() => {
    r(e ? "dark" : "light");
  }, []);
  const r = (a) => {
    const i = document.querySelector("html");
    i && (i.setAttribute("color-scheme", a), document.documentElement.style.setProperty("color-scheme", a));
  }, o = () => {
    console.log("toggle state"), t(!e), r(e ? "light" : "dark");
  };
  return /* @__PURE__ */ n.jsx(
    Vc,
    {
      onClick: o,
      className: e ? "darkMode" : "lightMode",
      intent: "icon",
      children: /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: /* @__PURE__ */ n.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "472.39",
          height: "472.39",
          viewBox: "0 0 472.39 472.39",
          fill: "currentColor",
          children: [
            /* @__PURE__ */ n.jsx("g", { className: "toggle-sun", children: /* @__PURE__ */ n.jsx("path", { d: "M403.21,167V69.18H305.38L236.2,0,167,69.18H69.18V167L0,236.2l69.18,69.18v97.83H167l69.18,69.18,69.18-69.18h97.83V305.38l69.18-69.18Zm-167,198.17a129,129,0,1,1,129-129A129,129,0,0,1,236.2,365.19Z" }) }),
            /* @__PURE__ */ n.jsx("g", { className: "toggle-circle", children: /* @__PURE__ */ n.jsx("circle", { className: "cls-1", cx: "236.2", cy: "236.2", r: "103.78" }) })
          ]
        }
      ) })
    }
  );
};
let Uc = 0;
function Wc(e = "uid") {
  const [t, r] = ye(null);
  return Ft(() => {
    r(`${e}-${Uc++}`);
  }, [e]), t;
}
const Gc = B.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
`, Yc = B.input`
  opacity: 0;
  width: 0;
  height: 0;
`, qc = B.span`
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
`, Kc = xt.memo(
  ({ color: e, onChange: t, savedData: r }) => {
    const o = Wc("ToggleSwitch");
    return /* @__PURE__ */ n.jsxs(Gc, { children: [
      /* @__PURE__ */ n.jsx(
        Yc,
        {
          type: "checkbox",
          defaultChecked: r,
          onChange: t
        }
      ),
      /* @__PURE__ */ n.jsx(qc, { className: o, color: e })
    ] });
  },
  // what will cause this component to re-render - excludes onChange function
  (e, t) => e.savedData === t.savedData && e.color === t.color
), Xc = B.div`
  display: flex;
  justify-items: flex-start;
  align-items: flex-start;
`, Jc = B.div`
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
`, ta = ({ data: e, depth: t = 0 }) => {
  const [r, o] = ye([]), a = (i, s) => {
    console.log(`depth: ${i}, index:${s}`);
    const c = r.includes(`${i}-${s}`);
    o(
      c ? r.filter((d) => d !== `${i}-${s}`) : [
        .../* @__PURE__ */ new Set([...r, `${i}-${s}`])
      ]
    );
  };
  return /* @__PURE__ */ n.jsx("div", { style: { display: "flex", flexDirection: "column" }, children: e.map(({ label: i = void 0, path: s, children: c = void 0 }, d) => {
    var u;
    const h = $t();
    return /* @__PURE__ */ n.jsx(
      Xc,
      {
        style: { display: "inline-flex", flexDirection: "column" },
        "data-depth": [`${t}`],
        "data-node": [`${s}`],
        children: /* @__PURE__ */ n.jsxs(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start"
            },
            children: [
              c ? /* @__PURE__ */ n.jsx("button", { onClick: () => a(t, d), children: /* @__PURE__ */ n.jsx(
                ft,
                {
                  label: i,
                  something: /* @__PURE__ */ n.jsx(Ie, { size: "15px", children: r.includes(`${t}-${d}`) ? /* @__PURE__ */ n.jsx(hn, {}) : /* @__PURE__ */ n.jsx(Qs, {}) })
                }
              ) }) : /* @__PURE__ */ n.jsx(me, { to: s, children: i }),
              c && /* @__PURE__ */ n.jsx(
                Jc,
                {
                  ref: h,
                  scrollHeight: String((u = h == null ? void 0 : h.current) == null ? void 0 : u.scrollHeight),
                  style: { display: "flex", flexDirection: "column" },
                  "data-parent": [`${s}`],
                  "data-expanded": r.includes(`${t}-${d}`) ? "true" : "false",
                  children: /* @__PURE__ */ n.jsx(
                    ta,
                    {
                      data: c,
                      depth: parseInt(t) + 1,
                      parent: s
                    }
                  )
                }
              )
            ]
          }
        )
      },
      `depth_${t}_index_${d}`
    );
  }) });
}, Zc = () => /* @__PURE__ */ n.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "156 246 331.3 297.3",
    fill: "currentColor",
    children: /* @__PURE__ */ n.jsxs("g", { id: "Layer_1", children: [
      /* @__PURE__ */ n.jsx(
        "path",
        {
          stroke: "none",
          fill: "currentColor",
          d: "M410.6 383c.2 1.1.2.8-.4-4.1-1-4.6-1.9-10.1-4-14.4-3.2-5.5-6.7-10.8-10.5-15.7-1-1-2-2.2-2.8-3.4-3.7-4.3-7.6-8.4-11.9-12.1-12-10.6-26.1-17.2-42.3-21.1-.2.2-9.6-3.3-18.5-4.4-7-2-17-.3-19.2-.9-8.8.9-17.3 2.8-25.7 5.8-.2.1-20.3 11.5-20.5 11.6-6.2 4-11.9 9.7-14.8 13-1 1.5-2 3.1-2.9 4.6-1.6 4-3.2 10.3-4.7 13.1l16.5-15.3c6.3-5.3 18.6-6 18.6-6s-11.9 9.8-17.8 19.2l-5.2 10.3s-1.3 2-3.3 7.4c-2 5.3-3.7 7.9-7.6 19.2-.1.3-.2.7-.2 1-.7 6.8-.4 13.5.3 20.2.6 7.3 1.9 13 4.8 19.9v.1c1 2.3 1.9 4.7 2.7 7.1l5.7 9c.1.1.2.3.3.4.8 1.1 1.7 2.2 2.5 3.3l.3.3c3 3.3 5.5 7 8.5 10.3l8.2 6.3c1.7.9 3.3 1.9 5 2.7 2.7 1.3 5.4 2.7 8.2 4 2.1.7 4.3 1.4 6.5 2.2l3 1.2c3.2.4 9.2 2 9.9 2.2.2 0 2 .2 13.6 1.8.4.1 1 .1 1 .1l5.5.4s5.6.5 13.3-.1l6.7-1.4c8.6-1.3 28.5-11.6 41.4-20.3 2.8-1.9 5.4-4.5 7.1-7.4 4.6-7.9 8.8-16 13.1-24.2v9.1l.4.1c.7-2.7 1.5-5.3 2.3-7.9l4.7-14.4c1.7-10.9 3-21.8 2.2-32.8zm-83.1-36.6c.2.4.4.9.6 1.4-11.7 5.3-23.4 10.6-35.7 16.1 13.2 3.5 25.8 2.3 37.9-1.3 8.9-2.6 17.2-6.8 25.9-10.1 1.3-.5 3.7-.5 4.5.4 3.8 3.9 7.1 8.2 10.8 12.6-6.8.7-13 .8-19.1 2-9.6 1.8-18.9 5-25 13.3-9.6 13-9.3 27.2-3.3 41.6.5 1.2 1.2 2.4 1.8 3.6.1.3 0 .6 0 1.4-6.6-.3-13.2-.6-20.3-1 7.6-13.3 11.8-26.7 4.7-41-7-14.2-19.7-19.3-34.9-21 12-8.4 40.3-20.3 52.1-18zm10.8 108.9c-3-7.9-5.8-15.1-8.6-22.3.4-.1.9-.2 1.3-.4 4.9 2.8 9.7 5.5 15.3 8.7-2.5 4.3-5.1 8.8-8 14zm11.7-12.5 6.1 1c1.4 3.7 2.5 8.2 4.1 12.9-5.8.6-11.3 1.1-18.2 1.8 3.2-5.8 5.2-11.1 8-15.7zm-15.6 15.5c-6.3.7-13.1.8-20.9 0 4-7.5 7.8-14.7 12.1-22.8 3 8 5.8 15.1 8.8 22.8zm-35-23.4c2.4 8.6 4.4 16.1 6.6 24h-21c4.9-8.2 9.4-15.7 14.4-24zm-17.2 19.5c-1-5.5-1.7-10-2.5-14.8 4.6-1.2 8.5-2.2 13.4-3.4-2 3.4-3.7 6.2-5.4 9-1.7 2.8-3.4 5.6-5.5 9.2zm21.1-23.4c6.6.3 12.4.6 19.2.8-4.3 7.8-8.1 14.8-12.6 23-2.5-8.7-4.4-15.8-6.6-23.8zm-63.1-32.1c-.5-10.1 5.7-16.8 13.6-22.4 13-9.2 42-8.4 51.4 12.1 7.4 16.4-2.1 44.4-28.1 44.5-19.2.1-36-15.1-36.9-34.2zm37.6 58.9c-7.7-1.5-11.2-2.9-17.2-5.2 3.4-4.5 7.2-9.5 10.2-13.1l4.4.1.6 2.9c.8 5 1.2 8.7 2 15.3zm-30.7-23c-1.9-4.5-3.6-8.4-5.7-13.3l8.6 8.6c-.8 1.3-1.7 2.6-2.9 4.7zm9.8 14.8c-3.3-2.2-5.3-4.3-5.9-6.7 0 0-.8-2.4-.7-3.4.2-2.7 1.8-3.6 3.9-6.2 3.6 1.5 7.2 3 11.3 4.8-2.8 3.7-5.6 7.5-8.6 11.5zm130.9-3.9c-1 1.6-2.1 3.2-3.3 4.6-4 4.9-9 8.9-15 12.2-16.6 9.2-33.5 15.9-53 14.6-16.7-1.1-32.3-5.8-46.9-13.8-1.1-.6-9.9-6.5-10.8-7.1 22.2 9.8 65.9 7.3 94.9 5.8 6.6-.3 12.5-2.1 17.3-5.4 4.4-3 7.8-7.4 10.2-13.4.4-.9 1.3-1.7 2.2-2.3 1.3-.8 2.6-1.6 4-2.5 1.8-1.1 3.6-2.2 5.5-3.3-1.4 3.9-3.1 7.4-5.1 10.6zm-27.1-2.1c5.2-.3 9.9-.5 15.3-.8-1.7 5.7-6.2 8.5-11.3 11.8-1.4-3.8-2.6-7.2-4-11zm34.9-30.2c-.9 3.7-2.3 7.3-3.7 10.8-2.8 6.8-6.2 9.1-15.2 12.2l-11.6 1.9c-8.2 0-12.9-2-18.8-4.3-14.8-5.9-21.8-18.3-20.2-34 1.4-13.7 11.2-24 27-26.5 7.4-1.1 15.5-1.5 22.7.4 15.3 4 24.8 19.7 19.8 39.5z"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: "361",
          cy: "407.7",
          r: "22.7",
          fill: "currentColor",
          stroke: "none"
        }
      ),
      /* @__PURE__ */ n.jsx(
        "circle",
        {
          cx: "273",
          cy: "403.2",
          r: "22.7",
          fill: "currentColor",
          stroke: "none"
        }
      )
    ] })
  }
), Qc = B.div`
  display: grid;
  grid-template-areas:
    'head head head'
    'nav main main'
    'nav main main';
  grid-template-columns: 250px auto auto;
  height: 100vh;

  header {
    grid-area: head;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 70px;

    position: sticky;
    top: 0;

    border-bottom: 1px solid lightgray;
    z-index: 1;
    background: var(--clr-background);
    color: var(--clr-foreground);
  }

  .headerLeft {
    display: flex;
    align-items: center;
  }

  .headerRight {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 20px;
  }

  .logo {
    position: fixed;
    margin-left: 5px;
    z-index: 2;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .logo span {
    font-weight: 600;
  }
  .logo .icon {
    fill: var(--clr-foreground);
  }

  aside {
    grid-area: nav;
    border-right: 1px solid lightgray;
    overflow-x: hidden;
    overflow-y: auto;
    position: sticky;
    top: 0;
  }

  nav {
    padding: 25px 25px 120px 25px;
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  nav a {
    padding: 3px 10xpx;
    border-radius: 5px;
    color: #7d7d7d;
    font-size: 0.9rem;
  }

  nav a:hover {
    color: var(--clr-foreground);
  }

  nav a.active {
    color: var(--clr-foreground);
  }

  main {
    grid-area: main;
    overflow-y: auto;
    padding: 40px;
  }
`, ed = () => {
  const e = an();
  return /* @__PURE__ */ n.jsxs(Qc, { children: [
    /* @__PURE__ */ n.jsxs("header", { children: [
      /* @__PURE__ */ n.jsx("div", { className: "headerLeft", children: /* @__PURE__ */ n.jsx("div", { className: "logo", children: /* @__PURE__ */ n.jsxs(Ze, { intent: "icon", onClick: () => e("/"), children: [
        /* @__PURE__ */ n.jsx(Ie, { className: "icon", size: "50px", children: /* @__PURE__ */ n.jsx(Zc, {}) }),
        /* @__PURE__ */ n.jsx("span", { children: "SWAGFINGER-UI" })
      ] }) }) }),
      /* @__PURE__ */ n.jsxs("div", { className: "headerRight", children: [
        /* @__PURE__ */ n.jsx(Hc, {}),
        /* @__PURE__ */ n.jsx(
          ln,
          {
            to: "https://github.com/swagfinger/swagfinger-ui",
            target: "_blank",
            "aria-label": "github repo",
            children: /* @__PURE__ */ n.jsx(Ie, { size: "25px", fillOpacity: "1", children: /* @__PURE__ */ n.jsx(nl, {}) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ n.jsx("aside", { children: /* @__PURE__ */ n.jsxs("nav", { children: [
      /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Guide" }),
      /* @__PURE__ */ n.jsx(me, { to: "introduction", children: "Introduction" }),
      /* @__PURE__ */ n.jsx(me, { to: "gettingstarted", children: "Getting started" }),
      /* @__PURE__ */ n.jsx(me, { to: "routing", children: "Routing" }),
      /* @__PURE__ */ n.jsx(me, { to: "layout", children: "Layout" }),
      /* @__PURE__ */ n.jsx(me, { to: "themes", children: "Themes" }),
      /* @__PURE__ */ n.jsx(me, { to: "styling", children: "Styling" }),
      /* @__PURE__ */ n.jsx(me, { to: "hooks", children: "Hooks" }),
      /* @__PURE__ */ n.jsx("br", {}),
      /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Components" }),
      /* @__PURE__ */ n.jsx(me, { to: "heading", children: "Heading" }),
      /* @__PURE__ */ n.jsx(me, { to: "text", children: "Text" }),
      /* @__PURE__ */ n.jsx(me, { to: "icon", children: "Icon" }),
      /* @__PURE__ */ n.jsx(me, { to: "labelsomething", children: "LabelSomething" }),
      /* @__PURE__ */ n.jsx(me, { to: "button", children: "Button" }),
      /* @__PURE__ */ n.jsx(me, { to: "input", children: "Input" }),
      /* @__PURE__ */ n.jsx(me, { to: "select", children: "Select" }),
      /* @__PURE__ */ n.jsx(me, { to: "accordion", children: "Accordion" }),
      /* @__PURE__ */ n.jsx(me, { to: "radiobutton", children: "RadioButton" }),
      /* @__PURE__ */ n.jsx(me, { to: "radiobuttongroup", children: "RadioButton Group" }),
      /* @__PURE__ */ n.jsx(me, { to: "checkbox", children: "Checkbox" }),
      /* @__PURE__ */ n.jsx(me, { to: "checkboxgroup", children: "Checkbox Group" }),
      /* @__PURE__ */ n.jsx(me, { to: "counter", children: "Counter" }),
      /* @__PURE__ */ n.jsx(me, { to: "togglebutton", children: "Toggle Button" }),
      /* @__PURE__ */ n.jsx(me, { to: "toggleswitch", children: "Toggle Switch" }),
      /* @__PURE__ */ n.jsx(me, { to: "snackbar", children: "Snackbar" }),
      /* @__PURE__ */ n.jsx(me, { to: "slider", children: "Slider" }),
      /* @__PURE__ */ n.jsx(me, { to: "slidermultirange", children: "Slider (Multirange)" }),
      /* @__PURE__ */ n.jsx(me, { to: "separator", children: "Separator" }),
      /* @__PURE__ */ n.jsx(me, { to: "list", children: "List" }),
      /* @__PURE__ */ n.jsx(me, { to: "table", children: "Table" }),
      /* @__PURE__ */ n.jsx(me, { to: "card", children: "Card" }),
      /* @__PURE__ */ n.jsx(me, { to: "tree", children: "Tree" }),
      /* @__PURE__ */ n.jsx(me, { to: "progressloader", children: "Progress Loader" }),
      /* @__PURE__ */ n.jsx(me, { to: "Spinner", children: "Spinner" })
    ] }) }),
    /* @__PURE__ */ n.jsx("main", { children: /* @__PURE__ */ n.jsx(Ei, {}) })
  ] });
}, po = () => /* @__PURE__ */ n.jsxs("div", { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Introduction" }),
  /* @__PURE__ */ n.jsxs(ht, { children: [
    "Swagfinger-UI is a design system meant for an easier developer experience. ",
    /* @__PURE__ */ n.jsx("br", {}),
    "It uses Styled-Components / Class Variance Authority (CVA) and TailwindCSS under the hood."
  ] }),
  /* @__PURE__ */ n.jsx("br", {}),
  /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Another Component library?" }),
  /* @__PURE__ */ n.jsx(ht, { children: "The goal of this library is to combine the user-friendly approach of TailwindCSS, which is known for its comprehensive documentation, with the structure of Styled Components / CVA (Class Variance Authority). The aim is to create a solution that strikes a balance between being opinionated and providing the flexibility to meet different needs. By incorporating the best of both worlds, this library makes it easy for developers to quickly create a visually appealing interface without sacrificing design control. Whether you're working on a small project or a large one, this library can help you achieve your goals in a streamlined manner. Overall, the library is designed to offer the right amount of opinionatedness, ensuring that users have access to a range of pre-defined styles and components, while also providing the ability to customize and tailor the output to meet their specific requirements." }),
  /* @__PURE__ */ n.jsxs(ht, { children: [
    "Pre-defined modular components - with default styling, support of theming and darkmode. ",
    /* @__PURE__ */ n.jsx("br", {}),
    "Built with accessibility in mind.",
    /* @__PURE__ */ n.jsx("br", {}),
    "Leverage already well-built battle-tested libraries. We dont re-invent the wheel.",
    /* @__PURE__ */ n.jsx("br", {})
  ] }),
  /* @__PURE__ */ n.jsx("br", {}),
  /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Ideal Release Features" }),
  /* @__PURE__ */ n.jsxs(ht, { children: [
    "Written in Typescript",
    /* @__PURE__ */ n.jsx("br", {}),
    "Styled Components",
    /* @__PURE__ */ n.jsx("br", {}),
    "Dark-mode compatible",
    /* @__PURE__ */ n.jsx("br", {}),
    "Accessibility",
    /* @__PURE__ */ n.jsx("br", {}),
    "Tested",
    /* @__PURE__ */ n.jsx("br", {})
  ] })
] }), td = () => /* @__PURE__ */ n.jsxs("div", { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Getting Started" }),
  /* @__PURE__ */ n.jsx(ht, { children: "Getting started" })
] }), rd = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Routing" }),
  /* @__PURE__ */ n.jsx(ht, { children: "React Router 6 - https://github.com/swagfinger/template-react-router-6" }),
  /* @__PURE__ */ n.jsx(ht, { children: "NextJS Routing - https://nextjs.org/docs/routing/introduction" })
] }), nd = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Styling" }),
  /* @__PURE__ */ n.jsxs(ht, { children: [
    "The main reason this component library was created, was to address the support for variants and props AND the ability to use Tailwindcss to style components.",
    /* @__PURE__ */ n.jsx("br", {}),
    "It removes the need to pass props into styled components before being able to set the style by allowing you to set tailwind classes directly from the html.",
    /* @__PURE__ */ n.jsx("br", {}),
    "The dark-mode toggle adjusts the CSS 'color-scheme' property, and components and svg icons adapt based on 'currentColor'",
    /* @__PURE__ */ n.jsx("br", {}),
    "Theming takes precedence over default styling; however, tailwind classes applied to component override theming and variant props.",
    /* @__PURE__ */ n.jsx("br", {})
  ] })
] }), od = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Themes" }),
  /* @__PURE__ */ n.jsx("div", { children: "Supports theming" })
] }), ad = () => /* @__PURE__ */ n.jsx("div", { children: "404 Error - Page not found" }), id = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Layout" }),
  /* @__PURE__ */ n.jsx(ht, { children: "TailwindCSS and CSS Grid or CSS Flexbox" })
] }), sd = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Headings" }),
  /* @__PURE__ */ n.jsx(L, { variation: "h1", children: "H1 heading" }),
  /* @__PURE__ */ n.jsx(L, { variation: "h2", children: "H2 heading" }),
  /* @__PURE__ */ n.jsx(L, { variation: "h3", children: "H3 heading" }),
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "H4 heading" }),
  /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "H5 heading" }),
  /* @__PURE__ */ n.jsx(L, { variation: "h6", children: "H6 heading" })
] }), ld = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Text" }),
  /* @__PURE__ */ n.jsx(ht, { children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut urna justo, suscipit nec sem vitae, ultricies convallis diam. Fusce porttitor libero quis purus dictum molestie. Donec sagittis est eget leo dignissim, euismod convallis justo tincidunt. Pellentesque feugiat a lectus in maximus. Nulla facilisi. Nam blandit elit vitae dui sollicitudin molestie. Duis ac tellus sit amet nibh viverra pretium ac sed sem. Morbi fringilla, arcu eget fringilla placerat, dolor ligula euismod leo, vitae porttitor ligula diam ut mauris. Nam ut tempor nisi." }),
  /* @__PURE__ */ n.jsx(ht, { children: "Aliquam sodales lorem non dapibus mattis. Sed vel vulputate eros. Curabitur non blandit ex. Vestibulum maximus, velit id sollicitudin tempor, dolor erat imperdiet mi, eu gravida erat enim vel ex. Pellentesque sapien ligula, laoreet ut dictum sit amet, suscipit a nunc. Proin pellentesque, ex eget cursus pharetra, neque est bibendum mi, et feugiat est quam et magna. Vestibulum porta, augue vel feugiat ultrices, massa neque blandit ligula, et pretium massa odio sed quam. Maecenas vel sapien ac urna ultricies luctus. Nam bibendum ante sit amet purus congue, id scelerisque nisl gravida. Maecenas at nibh nisi. In pellentesque dignissim ex non fermentum." })
] }), cd = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Icon" }),
  /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: /* @__PURE__ */ n.jsx(Yo, {}) })
] }), dd = () => {
  const e = /* @__PURE__ */ n.jsx(ll, {});
  return /* @__PURE__ */ n.jsxs("div", { className: "flex justify-items-start items-start flex-col", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "LabelSomething" }),
    /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col gap-10 justify-items-starts", children: [
      /* @__PURE__ */ n.jsx(
        ft,
        {
          gap: "5px",
          label: "left",
          labelDirection: "left",
          something: /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: e })
        }
      ),
      /* @__PURE__ */ n.jsx(
        ft,
        {
          gap: "5px",
          label: "right",
          labelDirection: "right",
          something: /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: e })
        }
      ),
      /* @__PURE__ */ n.jsx(
        ft,
        {
          gap: "5px",
          label: "top",
          labelDirection: "top",
          something: /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: e })
        }
      ),
      /* @__PURE__ */ n.jsx(
        ft,
        {
          gap: "5px",
          label: "bottom",
          labelDirection: "bottom",
          something: /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: e })
        }
      )
    ] })
  ] });
}, ud = () => /* @__PURE__ */ n.jsx(
  Ze,
  {
    intent: "contained",
    onClick: () => {
      console.log("hello world");
    },
    children: "Contained"
  }
), fd = () => /* @__PURE__ */ n.jsx(
  Ze,
  {
    intent: "outlined",
    onClick: () => {
      console.log("hello world");
    },
    children: "Outlined"
  }
), hd = () => /* @__PURE__ */ n.jsx(
  Ze,
  {
    intent: "text",
    onClick: () => {
      console.log("hello world");
    },
    children: "Text"
  }
), pd = () => /* @__PURE__ */ n.jsx(
  Ze,
  {
    intent: "icon",
    onClick: () => {
      console.log("hello world");
    },
    children: /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: /* @__PURE__ */ n.jsx(Yo, {}) })
  }
), md = () => /* @__PURE__ */ n.jsx(
  Ze,
  {
    intent: "contained",
    className: "bg-red-500 hover:bg-red-600 text-white",
    onClick: () => {
      console.log("hello world");
    },
    children: /* @__PURE__ */ n.jsx(
      ft,
      {
        gap: "10px",
        label: "right",
        labelDirection: "right",
        something: /* @__PURE__ */ n.jsx(Ie, { size: "25px", stroke: "white", children: /* @__PURE__ */ n.jsx(dl, {}) })
      }
    )
  }
), gd = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Contained button" }),
    /* @__PURE__ */ n.jsx(ud, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Outlined button" }),
    /* @__PURE__ */ n.jsx(fd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Text button" }),
    /* @__PURE__ */ n.jsx(hd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Icon button" }),
    /* @__PURE__ */ n.jsx(pd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Button+LabelSomething button" }),
    /* @__PURE__ */ n.jsx(md, {})
  ] })
] }), vd = () => {
  const [e, t] = ye("");
  return /* @__PURE__ */ n.jsx(
    Dt,
    {
      savedData: e,
      onChange: (r) => {
        t(r.target.value);
      }
    }
  );
}, bd = () => {
  const [e, t] = ye("this is readonly");
  return /* @__PURE__ */ n.jsx(
    Dt,
    {
      savedData: e,
      readonly: !0,
      onChange: (r) => {
        t(r.target.value);
      }
    }
  );
}, xd = () => {
  const [e, t] = ye("");
  return /* @__PURE__ */ n.jsxs(Mr, { children: [
    /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: /* @__PURE__ */ n.jsx(cl, {}) }),
    /* @__PURE__ */ n.jsx(
      Dt,
      {
        savedData: e,
        border: !1,
        placeholder: "placeholder",
        onChange: (r) => {
          t(r.target.value);
        }
      }
    )
  ] });
}, yd = () => {
  const [e, t] = ye("");
  return /* @__PURE__ */ n.jsx(
    Dt,
    {
      savedData: e,
      placeholder: "placeholder",
      className: "bg-transparent",
      border: !1,
      onChange: (r) => {
        t(r.target.value);
      }
    }
  );
}, wd = () => {
  const [e, t] = ye(""), [r, o] = ye(!1);
  return /* @__PURE__ */ n.jsxs(Mr, { children: [
    /* @__PURE__ */ n.jsx(
      Dt,
      {
        savedData: e,
        placeholder: "placeholder",
        border: !1,
        type: r ? "text" : "password",
        onChange: (a) => {
          t(a.target.value);
        }
      }
    ),
    /* @__PURE__ */ n.jsx(
      Ze,
      {
        intent: "icon",
        onClick: () => o(!r),
        children: /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: r ? /* @__PURE__ */ n.jsx(al, {}) : /* @__PURE__ */ n.jsx(sl, {}) })
      }
    )
  ] });
}, Cd = () => {
  const [e, t] = ye(""), r = () => {
    t("");
  };
  return /* @__PURE__ */ n.jsxs(Mr, { children: [
    /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: /* @__PURE__ */ n.jsx(Go, {}) }),
    /* @__PURE__ */ n.jsx(
      Dt,
      {
        savedData: e,
        border: !1,
        placeholder: "placeholder",
        onChange: (o) => {
          t(o.target.value);
        }
      }
    ),
    e.length > 0 && /* @__PURE__ */ n.jsx(Ze, { intent: "icon", onClick: r, children: /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: /* @__PURE__ */ n.jsx(tl, {}) }) })
  ] });
}, jd = () => {
  const e = $t(null), t = () => {
    console.log("value: ", e.current.value);
  };
  return /* @__PURE__ */ n.jsxs(Mr, { children: [
    /* @__PURE__ */ n.jsx(Dt, { ref: e, border: !1, placeholder: "placeholder" }),
    /* @__PURE__ */ n.jsx(Ze, { intent: "icon", onClick: t, children: /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: /* @__PURE__ */ n.jsx(Go, {}) }) })
  ] });
}, Ed = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Input" }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Input (no-border)" }),
    /* @__PURE__ */ n.jsx(yd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Basic input" }),
    /* @__PURE__ */ n.jsx(vd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Input (readonly)" }),
    /* @__PURE__ */ n.jsx(bd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Input + Icon" }),
    /* @__PURE__ */ n.jsx(xd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Input Password" }),
    /* @__PURE__ */ n.jsx(wd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Input Filter" }),
    /* @__PURE__ */ n.jsx(Cd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Input Search" }),
    /* @__PURE__ */ n.jsx(jd, {})
  ] })
] }), Cn = [
  {
    title: "helloworld",
    body: " this is my first answer"
  },
  {
    title: "rainbow",
    body: "rainbows are amazing"
  },
  {
    title: "sun",
    body: "the sun is amazing"
  }
], Sd = () => /* @__PURE__ */ n.jsx(mn, { data: Cn, multiOpen: !0, iconType: "chevron" }), kd = () => /* @__PURE__ */ n.jsx(
  mn,
  {
    data: Cn,
    multiOpen: !0,
    iconType: "plusminus",
    showSeparator: !0
  }
), Rd = () => /* @__PURE__ */ n.jsx(
  mn,
  {
    data: Cn,
    multiOpen: !0,
    iconType: "hidden",
    showSeparator: !1
  }
), Ad = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Accordion" }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Accordion (chevron)" }),
    /* @__PURE__ */ n.jsx(Sd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Accordion (plus/minus)" }),
    /* @__PURE__ */ n.jsx(kd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Accordion (minimal)" }),
    /* @__PURE__ */ n.jsx(Rd, {})
  ] })
] }), _d = () => {
  const [e, t] = ye(!1);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "RadioButton" }),
    /* @__PURE__ */ n.jsx(
      yn,
      {
        checked: e,
        name: "radio",
        label: "label",
        iconSize: "20px",
        onChange: (r) => {
          t(r.target.checked);
        }
      }
    )
  ] });
}, Td = () => {
  const e = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
    { label: "D", value: "d" }
  ], [t, r] = ye(
    Array(e.length).fill(!1)
  ), o = (a, i) => {
    let s = [...t].fill(!1);
    s[a] = i, r(s);
  };
  return /* @__PURE__ */ n.jsx(Qo, { direction: "column", spacing: "20px", children: e.map((a, i) => /* @__PURE__ */ n.jsx(
    ft,
    {
      label: a.label,
      labelPosition: "right",
      gap: "10px",
      something: /* @__PURE__ */ n.jsx(
        yn,
        {
          checked: t[i],
          name: "Radio",
          iconSize: "20px",
          onChange: () => o(i, !t[i])
        }
      )
    },
    "RadioButtonGroup" + i
  )) });
}, Pd = () => {
  const e = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" },
    { label: "D", value: "d" }
  ], [t, r] = ye(
    Array(e.length).fill(!1)
  ), o = (a, i) => {
    let s = [...t].fill(!1);
    s[a] = i, r(s);
  };
  return /* @__PURE__ */ n.jsx(Qo, { direction: "row", spacing: "20px", children: e.map((a, i) => /* @__PURE__ */ n.jsx(
    ft,
    {
      label: a.label,
      labelPosition: "bottom",
      gap: "10px",
      something: /* @__PURE__ */ n.jsx(
        yn,
        {
          checked: t[i],
          name: "Radio",
          iconSize: "20px",
          onChange: () => o(i, !t[i])
        }
      )
    },
    "RadioButtonGroup" + i
  )) });
}, Nd = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "RadioButton Group" }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "RadioButton Group (horizontal)" }),
    /* @__PURE__ */ n.jsx(Pd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "RadioButton Group (vertical)" }),
    /* @__PURE__ */ n.jsx(Td, {})
  ] })
] }), Dd = () => {
  const [e, t] = ye(!1);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Checkbox" }),
    /* @__PURE__ */ n.jsx(
      mr,
      {
        checked: e,
        name: "checkbox",
        label: "label",
        onChange: (r) => {
          t(r.target.checked);
        }
      }
    )
  ] });
}, Md = () => {
  const e = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" }
  ], [t, r] = ye(
    Array(e.length).fill(!1)
  ), o = (a, i) => {
    const s = [...t];
    s[a] = i, r(s);
  };
  return /* @__PURE__ */ n.jsx(xn, { direction: "row", spacing: "20px", children: e.map((a, i) => /* @__PURE__ */ n.jsx(
    ft,
    {
      label: a.label,
      labelPosition: "bottom",
      gap: "10px",
      something: /* @__PURE__ */ n.jsx(
        mr,
        {
          checked: t[i],
          name: "Checkbox_ABC",
          iconSize: "20px",
          onChange: () => o(i, !t[i])
        }
      )
    },
    "CheckboxGroup_Checkbox" + i
  )) });
}, Od = () => {
  const e = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" }
  ], [t, r] = ye(
    Array(e.length).fill(!1)
  ), o = (a, i) => {
    const s = [...t];
    s[a] = i, r(s);
  };
  return /* @__PURE__ */ n.jsx(xn, { direction: "column", spacing: "20px", children: e.map((a, i) => /* @__PURE__ */ n.jsx(
    ft,
    {
      label: a.label,
      labelPosition: "right",
      gap: "10px",
      something: /* @__PURE__ */ n.jsx(
        mr,
        {
          checked: t[i],
          name: "Checkbox_ABC",
          iconSize: "20px",
          onChange: () => o(i, !t[i])
        }
      )
    },
    "CheckboxGroup_Checkbox" + i
  )) });
}, Id = () => {
  const e = [
    { label: "A", value: "a" },
    { label: "B", value: "b" },
    { label: "C", value: "c" }
  ], [t, r] = ye(
    Array(e.length).fill(!1)
  ), o = (a, i) => {
    const s = [...t];
    s[a] = i, r(s);
  };
  return /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col justify-items-start items-start space-y-10", children: [
    /* @__PURE__ */ n.jsx(
      mr,
      {
        checked: t.every((a) => a === !0),
        indeterminate: !t.every((a) => a === !0) && t.some((a) => a === !0),
        name: "checkbox",
        label: "label",
        iconSize: "20px",
        onChange: (a) => {
          r(t.slice().fill(a.target.checked));
        }
      }
    ),
    /* @__PURE__ */ n.jsx(xn, { direction: "column", spacing: "20px", children: e.map((a, i) => /* @__PURE__ */ n.jsx(
      ft,
      {
        label: a.label,
        labelPosition: "right",
        gap: "10px",
        something: /* @__PURE__ */ n.jsx(
          mr,
          {
            checked: t[i],
            name: "Checkbox_ABC",
            iconSize: "20px",
            onChange: () => o(i, !t[i])
          }
        )
      },
      "CheckboxGroup_Checkbox" + i
    )) })
  ] });
}, Ld = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Checkbox Group" }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Checkbox Group (horizontal)" }),
    /* @__PURE__ */ n.jsx(Md, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Checkbox Group (vertical)" }),
    /* @__PURE__ */ n.jsx(Od, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Checkbox Group (indeterminate)" }),
    /* @__PURE__ */ n.jsx(Id, {})
  ] })
] }), $d = () => {
  const [e, t] = ye(), r = [
    { value: "option0", text: "Select an option" },
    { value: "option1", text: "Option 1" },
    { value: "option2", text: "Option 2" },
    { value: "option3", text: "Option 3" }
  ];
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Select" }),
    /* @__PURE__ */ n.jsx(
      bc,
      {
        savedData: e,
        onChange: (o) => t(o.target.value),
        children: r.map((o, a) => /* @__PURE__ */ n.jsx("option", { value: o.value, children: o.text }, a))
      }
    )
  ] });
}, Fd = () => {
  const [e, t] = ye("0");
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Counter" }),
    /* @__PURE__ */ n.jsx(
      Xl,
      {
        savedData: e,
        onChange: (r) => t(r)
      }
    )
  ] });
}, zd = () => {
  const [e, t] = ye(!1);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Toggle Button" }),
    /* @__PURE__ */ n.jsx(
      Bc,
      {
        checked: e,
        onChange: (r) => {
          t(r.target.checked);
        },
        children: /* @__PURE__ */ n.jsx(
          Ie,
          {
            size: "25px",
            fill: e ? "red" : "black",
            fillOpacity: e ? "1" : "0",
            stroke: e ? "transparent" : "currentColor",
            children: /* @__PURE__ */ n.jsx(ol, {})
          }
        )
      }
    )
  ] });
}, Bd = () => {
  const [e, t] = ye(!1);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Toggle Switch" }),
    /* @__PURE__ */ n.jsx(
      Kc,
      {
        savedData: e,
        color: "grey",
        onChange: (r) => {
          t(r.target.checked);
        }
      }
    )
  ] });
}, Vd = () => {
  const [e, t] = ye(!1), r = () => {
    console.log("onClickHandler"), t(!0);
  };
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Snackbar" }),
    e && /* @__PURE__ */ n.jsx(Dc, { setShowSnackbar: t, children: "copied to clipboard" }),
    /* @__PURE__ */ n.jsx(Ze, { onClick: r, intent: "icon", children: /* @__PURE__ */ n.jsx(Ie, { size: "25px", children: /* @__PURE__ */ n.jsx(rl, {}) }) })
  ] });
}, Hd = () => {
  const [e, t] = ye(0);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Slider" }),
    /* @__PURE__ */ n.jsx(
      ea,
      {
        savedData: e,
        min: 0,
        max: 100,
        onChange: t,
        width: "300px"
      }
    )
  ] });
}, Ud = () => {
  const [e, t] = ye([20, 50]);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Slider (Multirange)" }),
    /* @__PURE__ */ n.jsx(
      Pc,
      {
        sliderValues: e,
        min: 0,
        max: 100,
        width: "300px",
        onChange: t
      }
    )
  ] });
}, Wd = () => /* @__PURE__ */ n.jsx(Or, { variation: "horizontal" }), Gd = () => /* @__PURE__ */ n.jsx(Or, { variation: "horizontal-labelled", label: "OR", margin: "0px 20px" }), Yd = () => /* @__PURE__ */ n.jsx("div", { className: "flex flex-row items-center h-50", children: /* @__PURE__ */ n.jsx(Or, { variation: "vertical", height: "30px", margin: "0px" }) }), qd = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Separator" }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Separator (horizontal)" }),
    /* @__PURE__ */ n.jsx(Wd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Separator labelled (horizontal)" }),
    /* @__PURE__ */ n.jsx(Gd, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "Separator (vertical)" }),
    /* @__PURE__ */ n.jsx(Yd, {})
  ] })
] }), Kd = () => {
  const [e, t] = ye();
  return Ft(() => {
    t([
      {
        id: 1,
        first_name: "Tansy",
        last_name: "Trynor",
        email: "ttrynor0@cpanel.net"
      },
      {
        id: 2,
        first_name: "Natasha",
        last_name: "Charer",
        email: "ncharer1@theatlantic.com"
      },
      {
        id: 3,
        first_name: "Dareen",
        last_name: "Martinson",
        email: "dmartinson2@creativecommons.org"
      }
    ]);
  }, []), /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "List" }),
    e && /* @__PURE__ */ n.jsx(cc, { children: e.map(({ id: r, first_name: o, last_name: a, email: i }, s) => /* @__PURE__ */ n.jsx(
      dc,
      {
        data: {
          index: s,
          firstname: o,
          lastname: a,
          email: i
        }
      },
      r
    )) })
  ] });
}, Xd = () => {
  const e = {
    padding: "p-5"
  }, t = [
    {
      title: "year",
      mapToDataAttribute: "year",
      width: 150,
      alignHeader: "left",
      alignContent: "left"
    },
    {
      title: "artist",
      mapToDataAttribute: "artist",
      width: 150,
      alignHeader: "left",
      alignContent: "left"
    },
    {
      title: "song",
      mapToDataAttribute: "song",
      width: 300,
      alignHeader: "left",
      alignContent: "left"
    },
    {
      title: "amount ($)",
      mapToDataAttribute: "amount",
      width: 120,
      alignHeader: "right",
      alignContent: "right"
    }
  ], r = [
    {
      year: 2003,
      artist: "Kanlam",
      song: "Extended dynamic paradigm",
      amount: "4"
    },
    {
      year: 2003,
      artist: "Subin",
      song: "Focused even-keeled ability",
      amount: "14"
    },
    {
      year: 1999,
      artist: "Alpha",
      song: "Organic directional projection",
      amount: "30"
    }
  ];
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Table" }),
    /* @__PURE__ */ n.jsx(Lc, { headers: t, data: r, configure: e })
  ] });
}, Jd = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Card" }),
  /* @__PURE__ */ n.jsx(
    Ul,
    {
      color: "white",
      borderColor: "#DDD",
      borderRadius: "10px",
      width: "550px",
      height: "300px",
      children: "this is dummy text"
    }
  )
] }), Zd = () => {
  const e = [
    {
      label: "Design System",
      children: [
        { label: "Routing", path: "/routing" },
        { label: "Themes", path: "/themes" },
        { label: "Styling", path: "/styling" },
        { label: "Layout", path: "/layout" },
        { label: "Hooks", path: "/hooks" },
        {
          label: "Components",
          children: [
            {
              label: "Form Inputs",
              children: [
                { label: "RadioButton", path: "/radiobutton" },
                { label: "RadioButton Group", path: "/radiobuttongroup" },
                { label: "Checkbox", path: "/checkbox" },
                { label: "Checkbox Group", path: "/checkboxgroup" },
                { label: "Toggle Button", path: "/togglebutton" },
                { label: "Toggle Switch", path: "/toggleswitch" },
                { label: "Input", path: "/input" },
                { label: "Counter", path: "/counter" },
                { label: "Select", path: "/select" },
                { label: "Slider", path: "/slider" },
                { label: "Slider (Multirange)", path: "/slidermultirange" },
                { label: "Text", path: "/text" }
              ]
            },
            {
              label: "Elements",
              children: [
                { label: "Button", path: "/button" },
                { label: "Icon", path: "/icon" },
                { label: "Heading", path: "/heading" },
                { label: "LabelSomething", path: "/labelsomething" },
                { label: "Accordion", path: "/accordion" },
                { label: "Snackbar", path: "/snackbar" },
                { label: "List", path: "/list" },
                { label: "Table", path: "/table" },
                { label: "Separator", path: "/separator" },
                { label: "Card", path: "/card" },
                { label: "Tree", path: "/tree" }
              ]
            }
          ]
        }
      ]
    }
  ];
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Tree" }),
    /* @__PURE__ */ n.jsx(ta, { data: e })
  ] });
}, Qd = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Progress Loader" }),
  /* @__PURE__ */ n.jsxs("div", { className: "flex flex-col gap-10", children: [
    /* @__PURE__ */ n.jsx(Er, { progress: 25, size: 30 }),
    /* @__PURE__ */ n.jsx(Er, { progress: 50, size: 30 }),
    /* @__PURE__ */ n.jsx(Er, { progress: 75, size: 30 }),
    /* @__PURE__ */ n.jsx(Er, { progress: 100, size: 30 })
  ] })
] }), eu = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Spinner" }),
  /* @__PURE__ */ n.jsx(Ic, { size: "30px" })
] }), tu = () => {
  const [e, t] = ye(!1);
  return [e, {
    onFocus: () => {
      t(!0), console.log("focused");
    },
    onBlur: () => {
      console.log("blurred"), t(!1);
    }
  }];
}, ru = () => {
  const [e, t] = tu();
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsx(Ze, { ...t, children: "Button" }),
    e && /* @__PURE__ */ n.jsx("div", { className: "absolute", children: "hello world" })
  ] });
}, nu = () => {
  const [e, t] = ye(!1);
  return [e, {
    onMouseOver: () => t(!0),
    onMouseOut: () => t(!1)
  }];
}, ou = () => {
  const [e, t] = nu();
  return /* @__PURE__ */ n.jsxs("div", { style: { position: "relative" }, children: [
    /* @__PURE__ */ n.jsx(Ze, { ...t, children: "Button" }),
    e && /* @__PURE__ */ n.jsx("div", { className: "absolute", children: "hello world" })
  ] });
}, au = () => {
  const [e, t] = ye(!1), r = $t(null), o = $t(null);
  return Ft(() => {
    const a = (i) => {
      r.current && !r.current.contains(i.target) && o.current && !o.current.contains(i.target) && t(!1);
    };
    return document.addEventListener("mousedown", a), () => document.removeEventListener("mousedown", a);
  }, []), /* @__PURE__ */ n.jsxs("div", { children: [
    /* @__PURE__ */ n.jsx(
      "button",
      {
        ref: r,
        onMouseEnter: () => t(!0),
        onClick: () => t(!e),
        children: "Open Menu"
      }
    ),
    e && /* @__PURE__ */ n.jsx(
      "div",
      {
        ref: o,
        style: { background: "red", display: "inline-flex" },
        children: /* @__PURE__ */ n.jsxs("ul", { children: [
          /* @__PURE__ */ n.jsx("li", { onClick: () => t(!1), children: "Menu Item 1" }),
          /* @__PURE__ */ n.jsx("li", { children: "Menu Item 2" }),
          /* @__PURE__ */ n.jsx("li", { children: "Menu Item 3" })
        ] })
      }
    )
  ] });
}, iu = () => /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
  /* @__PURE__ */ n.jsx(L, { variation: "h4", children: "Hooks" }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "useHover" }),
    /* @__PURE__ */ n.jsx(ou, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "useFocus" }),
    /* @__PURE__ */ n.jsx(ru, {})
  ] }),
  /* @__PURE__ */ n.jsxs(Pe, { variation: "block", children: [
    /* @__PURE__ */ n.jsx(L, { variation: "h5", children: "useHoverFocus" }),
    /* @__PURE__ */ n.jsx(au, {})
  ] })
] }), su = Li(
  Ar(
    /* @__PURE__ */ n.jsxs(ne, { path: "/", element: /* @__PURE__ */ n.jsx(ed, {}), children: [
      /* @__PURE__ */ n.jsx(ne, { index: !0, element: /* @__PURE__ */ n.jsx(po, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/introduction", element: /* @__PURE__ */ n.jsx(po, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/gettingstarted", element: /* @__PURE__ */ n.jsx(td, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/routing", element: /* @__PURE__ */ n.jsx(rd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/themes", element: /* @__PURE__ */ n.jsx(od, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/styling", element: /* @__PURE__ */ n.jsx(nd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/hooks", element: /* @__PURE__ */ n.jsx(iu, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/layout", element: /* @__PURE__ */ n.jsx(id, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/heading", element: /* @__PURE__ */ n.jsx(sd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/text", element: /* @__PURE__ */ n.jsx(ld, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/icon", element: /* @__PURE__ */ n.jsx(cd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/labelsomething", element: /* @__PURE__ */ n.jsx(dd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/button", element: /* @__PURE__ */ n.jsx(gd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/input", element: /* @__PURE__ */ n.jsx(Ed, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/select", element: /* @__PURE__ */ n.jsx($d, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/accordion", element: /* @__PURE__ */ n.jsx(Ad, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/radiobutton", element: /* @__PURE__ */ n.jsx(_d, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/radiobuttongroup", element: /* @__PURE__ */ n.jsx(Nd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/checkbox", element: /* @__PURE__ */ n.jsx(Dd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/checkboxgroup", element: /* @__PURE__ */ n.jsx(Ld, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/counter", element: /* @__PURE__ */ n.jsx(Fd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/togglebutton", element: /* @__PURE__ */ n.jsx(zd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/toggleswitch", element: /* @__PURE__ */ n.jsx(Bd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/snackbar", element: /* @__PURE__ */ n.jsx(Vd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/slider", element: /* @__PURE__ */ n.jsx(Hd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/slidermultirange", element: /* @__PURE__ */ n.jsx(Ud, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/separator", element: /* @__PURE__ */ n.jsx(qd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/list", element: /* @__PURE__ */ n.jsx(Kd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/table", element: /* @__PURE__ */ n.jsx(Xd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/card", element: /* @__PURE__ */ n.jsx(Jd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/tree", element: /* @__PURE__ */ n.jsx(Zd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/progressloader", element: /* @__PURE__ */ n.jsx(Qd, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/spinner", element: /* @__PURE__ */ n.jsx(eu, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "/404", element: /* @__PURE__ */ n.jsx(ad, {}) }),
      /* @__PURE__ */ n.jsx(ne, { path: "*", element: /* @__PURE__ */ n.jsx(ji, { to: "/404", replace: !0 }) })
    ] })
  )
);
const lu = () => {
  const { isDarkMode: e } = Uo();
  return /* @__PURE__ */ n.jsx(Gs, { theme: e ? Js : Xs, children: /* @__PURE__ */ n.jsx(Ci, { router: su }) });
};
cr.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ n.jsx(xt.StrictMode, { children: /* @__PURE__ */ n.jsx(Ks, { children: /* @__PURE__ */ n.jsx(lu, {}) }) })
);
//# sourceMappingURL=index.js.map
