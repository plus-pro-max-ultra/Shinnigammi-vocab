(() => {
  var hg = Object.create;
  var cd = Object.defineProperty;
  var ug = Object.getOwnPropertyDescriptor;
  var mg = Object.getOwnPropertyNames;
  var gg = Object.getPrototypeOf,
    xg = Object.prototype.hasOwnProperty;
  var Cr = (e, t) => () => {
    try {
      return (t || e((t = { exports: {} }).exports, t), t.exports);
    } catch (r) {
      throw ((t = 0), r);
    }
  };
  var zg = (e, t, r, o) => {
    if ((t && typeof t == "object") || typeof t == "function")
      for (let n of mg(t))
        !xg.call(e, n) &&
          n !== r &&
          cd(e, n, {
            get: () => t[n],
            enumerable: !(o = ug(t, n)) || o.enumerable,
          });
    return e;
  };
  var Sr = (e, t, r) => (
    (r = e != null ? hg(gg(e)) : {}),
    zg(
      t || !e || !e.__esModule
        ? cd(r, "default", { value: e, enumerable: !0 })
        : r,
      e,
    )
  );
  var wd = Cr((H) => {
    "use strict";
    var Go = Symbol.for("react.element"),
      fg = Symbol.for("react.portal"),
      jg = Symbol.for("react.fragment"),
      wg = Symbol.for("react.strict_mode"),
      bg = Symbol.for("react.profiler"),
      yg = Symbol.for("react.provider"),
      Eg = Symbol.for("react.context"),
      kg = Symbol.for("react.forward_ref"),
      vg = Symbol.for("react.suspense"),
      Tg = Symbol.for("react.memo"),
      Bg = Symbol.for("react.lazy"),
      ld = Symbol.iterator;
    function Ug(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (ld && e[ld]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var hd = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      ud = Object.assign,
      md = {};
    function ro(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = md),
        (this.updater = r || hd));
    }
    ro.prototype.isReactComponent = {};
    ro.prototype.setState = function (e, t) {
      if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, e, t, "setState");
    };
    ro.prototype.forceUpdate = function (e) {
      this.updater.enqueueForceUpdate(this, e, "forceUpdate");
    };
    function gd() {}
    gd.prototype = ro.prototype;
    function ri(e, t, r) {
      ((this.props = e),
        (this.context = t),
        (this.refs = md),
        (this.updater = r || hd));
    }
    var oi = (ri.prototype = new gd());
    oi.constructor = ri;
    ud(oi, ro.prototype);
    oi.isPureReactComponent = !0;
    var dd = Array.isArray,
      xd = Object.prototype.hasOwnProperty,
      ni = { current: null },
      zd = { key: !0, ref: !0, __self: !0, __source: !0 };
    function fd(e, t, r) {
      var o,
        n = {},
        a = null,
        i = null;
      if (t != null)
        for (o in (t.ref !== void 0 && (i = t.ref),
        t.key !== void 0 && (a = "" + t.key),
        t))
          xd.call(t, o) && !zd.hasOwnProperty(o) && (n[o] = t[o]);
      var c = arguments.length - 2;
      if (c === 1) n.children = r;
      else if (1 < c) {
        for (var d = Array(c), p = 0; p < c; p++) d[p] = arguments[p + 2];
        n.children = d;
      }
      if (e && e.defaultProps)
        for (o in ((c = e.defaultProps), c)) n[o] === void 0 && (n[o] = c[o]);
      return {
        $$typeof: Go,
        type: e,
        key: a,
        ref: i,
        props: n,
        _owner: ni.current,
      };
    }
    function Ag(e, t) {
      return {
        $$typeof: Go,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
      };
    }
    function ai(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Go;
    }
    function Cg(e) {
      var t = { "=": "=0", ":": "=2" };
      return (
        "$" +
        e.replace(/[=:]/g, function (r) {
          return t[r];
        })
      );
    }
    var pd = /\/+/g;
    function ti(e, t) {
      return typeof e == "object" && e !== null && e.key != null
        ? Cg("" + e.key)
        : t.toString(36);
    }
    function la(e, t, r, o, n) {
      var a = typeof e;
      (a === "undefined" || a === "boolean") && (e = null);
      var i = !1;
      if (e === null) i = !0;
      else
        switch (a) {
          case "string":
          case "number":
            i = !0;
            break;
          case "object":
            switch (e.$$typeof) {
              case Go:
              case fg:
                i = !0;
            }
        }
      if (i)
        return (
          (i = e),
          (n = n(i)),
          (e = o === "" ? "." + ti(i, 0) : o),
          dd(n)
            ? ((r = ""),
              e != null && (r = e.replace(pd, "$&/") + "/"),
              la(n, t, r, "", function (p) {
                return p;
              }))
            : n != null &&
              (ai(n) &&
                (n = Ag(
                  n,
                  r +
                    (!n.key || (i && i.key === n.key)
                      ? ""
                      : ("" + n.key).replace(pd, "$&/") + "/") +
                    e,
                )),
              t.push(n)),
          1
        );
      if (((i = 0), (o = o === "" ? "." : o + ":"), dd(e)))
        for (var c = 0; c < e.length; c++) {
          a = e[c];
          var d = o + ti(a, c);
          i += la(a, t, r, d, n);
        }
      else if (((d = Ug(e)), typeof d == "function"))
        for (e = d.call(e), c = 0; !(a = e.next()).done;)
          ((a = a.value), (d = o + ti(a, c++)), (i += la(a, t, r, d, n)));
      else if (a === "object")
        throw (
          (t = String(e)),
          Error(
            "Objects are not valid as a React child (found: " +
              (t === "[object Object]"
                ? "object with keys {" + Object.keys(e).join(", ") + "}"
                : t) +
              "). If you meant to render a collection of children, use an array instead.",
          )
        );
      return i;
    }
    function ca(e, t, r) {
      if (e == null) return e;
      var o = [],
        n = 0;
      return (
        la(e, o, "", "", function (a) {
          return t.call(r, a, n++);
        }),
        o
      );
    }
    function Sg(e) {
      if (e._status === -1) {
        var t = e._result;
        ((t = t()),
          t.then(
            function (r) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1), (e._result = r));
            },
            function (r) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2), (e._result = r));
            },
          ),
          e._status === -1 && ((e._status = 0), (e._result = t)));
      }
      if (e._status === 1) return e._result.default;
      throw e._result;
    }
    var _e = { current: null },
      da = { transition: null },
      Ng = {
        ReactCurrentDispatcher: _e,
        ReactCurrentBatchConfig: da,
        ReactCurrentOwner: ni,
      };
    function jd() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    H.Children = {
      map: ca,
      forEach: function (e, t, r) {
        ca(
          e,
          function () {
            t.apply(this, arguments);
          },
          r,
        );
      },
      count: function (e) {
        var t = 0;
        return (
          ca(e, function () {
            t++;
          }),
          t
        );
      },
      toArray: function (e) {
        return (
          ca(e, function (t) {
            return t;
          }) || []
        );
      },
      only: function (e) {
        if (!ai(e))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return e;
      },
    };
    H.Component = ro;
    H.Fragment = jg;
    H.Profiler = bg;
    H.PureComponent = ri;
    H.StrictMode = wg;
    H.Suspense = vg;
    H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ng;
    H.act = jd;
    H.cloneElement = function (e, t, r) {
      if (e == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            ".",
        );
      var o = ud({}, e.props),
        n = e.key,
        a = e.ref,
        i = e._owner;
      if (t != null) {
        if (
          (t.ref !== void 0 && ((a = t.ref), (i = ni.current)),
          t.key !== void 0 && (n = "" + t.key),
          e.type && e.type.defaultProps)
        )
          var c = e.type.defaultProps;
        for (d in t)
          xd.call(t, d) &&
            !zd.hasOwnProperty(d) &&
            (o[d] = t[d] === void 0 && c !== void 0 ? c[d] : t[d]);
      }
      var d = arguments.length - 2;
      if (d === 1) o.children = r;
      else if (1 < d) {
        c = Array(d);
        for (var p = 0; p < d; p++) c[p] = arguments[p + 2];
        o.children = c;
      }
      return {
        $$typeof: Go,
        type: e.type,
        key: n,
        ref: a,
        props: o,
        _owner: i,
      };
    };
    H.createContext = function (e) {
      return (
        (e = {
          $$typeof: Eg,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (e.Provider = { $$typeof: yg, _context: e }),
        (e.Consumer = e)
      );
    };
    H.createElement = fd;
    H.createFactory = function (e) {
      var t = fd.bind(null, e);
      return ((t.type = e), t);
    };
    H.createRef = function () {
      return { current: null };
    };
    H.forwardRef = function (e) {
      return { $$typeof: kg, render: e };
    };
    H.isValidElement = ai;
    H.lazy = function (e) {
      return { $$typeof: Bg, _payload: { _status: -1, _result: e }, _init: Sg };
    };
    H.memo = function (e, t) {
      return { $$typeof: Tg, type: e, compare: t === void 0 ? null : t };
    };
    H.startTransition = function (e) {
      var t = da.transition;
      da.transition = {};
      try {
        e();
      } finally {
        da.transition = t;
      }
    };
    H.unstable_act = jd;
    H.useCallback = function (e, t) {
      return _e.current.useCallback(e, t);
    };
    H.useContext = function (e) {
      return _e.current.useContext(e);
    };
    H.useDebugValue = function () {};
    H.useDeferredValue = function (e) {
      return _e.current.useDeferredValue(e);
    };
    H.useEffect = function (e, t) {
      return _e.current.useEffect(e, t);
    };
    H.useId = function () {
      return _e.current.useId();
    };
    H.useImperativeHandle = function (e, t, r) {
      return _e.current.useImperativeHandle(e, t, r);
    };
    H.useInsertionEffect = function (e, t) {
      return _e.current.useInsertionEffect(e, t);
    };
    H.useLayoutEffect = function (e, t) {
      return _e.current.useLayoutEffect(e, t);
    };
    H.useMemo = function (e, t) {
      return _e.current.useMemo(e, t);
    };
    H.useReducer = function (e, t, r) {
      return _e.current.useReducer(e, t, r);
    };
    H.useRef = function (e) {
      return _e.current.useRef(e);
    };
    H.useState = function (e) {
      return _e.current.useState(e);
    };
    H.useSyncExternalStore = function (e, t, r) {
      return _e.current.useSyncExternalStore(e, t, r);
    };
    H.useTransition = function () {
      return _e.current.useTransition();
    };
    H.version = "18.3.1";
  });
  var Nr = Cr((ff, bd) => {
    "use strict";
    bd.exports = wd();
  });
  var Sd = Cr((Y) => {
    "use strict";
    function li(e, t) {
      var r = e.length;
      e.push(t);
      e: for (; 0 < r;) {
        var o = (r - 1) >>> 1,
          n = e[o];
        if (0 < pa(n, t)) ((e[o] = t), (e[r] = n), (r = o));
        else break e;
      }
    }
    function mt(e) {
      return e.length === 0 ? null : e[0];
    }
    function ua(e) {
      if (e.length === 0) return null;
      var t = e[0],
        r = e.pop();
      if (r !== t) {
        e[0] = r;
        e: for (var o = 0, n = e.length, a = n >>> 1; o < a;) {
          var i = 2 * (o + 1) - 1,
            c = e[i],
            d = i + 1,
            p = e[d];
          if (0 > pa(c, r))
            d < n && 0 > pa(p, c)
              ? ((e[o] = p), (e[d] = r), (o = d))
              : ((e[o] = c), (e[i] = r), (o = i));
          else if (d < n && 0 > pa(p, r)) ((e[o] = p), (e[d] = r), (o = d));
          else break e;
        }
      }
      return t;
    }
    function pa(e, t) {
      var r = e.sortIndex - t.sortIndex;
      return r !== 0 ? r : e.id - t.id;
    }
    typeof performance == "object" && typeof performance.now == "function"
      ? ((yd = performance),
        (Y.unstable_now = function () {
          return yd.now();
        }))
      : ((si = Date),
        (Ed = si.now()),
        (Y.unstable_now = function () {
          return si.now() - Ed;
        }));
    var yd,
      si,
      Ed,
      vt = [],
      ir = [],
      Dg = 1,
      at = null,
      De = 3,
      ma = !1,
      Dr = !1,
      Zo = !1,
      Td = typeof setTimeout == "function" ? setTimeout : null,
      Bd = typeof clearTimeout == "function" ? clearTimeout : null,
      kd = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function di(e) {
      for (var t = mt(ir); t !== null;) {
        if (t.callback === null) ua(ir);
        else if (t.startTime <= e)
          (ua(ir), (t.sortIndex = t.expirationTime), li(vt, t));
        else break;
        t = mt(ir);
      }
    }
    function pi(e) {
      if (((Zo = !1), di(e), !Dr))
        if (mt(vt) !== null) ((Dr = !0), ui(hi));
        else {
          var t = mt(ir);
          t !== null && mi(pi, t.startTime - e);
        }
    }
    function hi(e, t) {
      ((Dr = !1), Zo && ((Zo = !1), Bd(Yo), (Yo = -1)), (ma = !0));
      var r = De;
      try {
        for (
          di(t), at = mt(vt);
          at !== null && (!(at.expirationTime > t) || (e && !Cd()));
        ) {
          var o = at.callback;
          if (typeof o == "function") {
            ((at.callback = null), (De = at.priorityLevel));
            var n = o(at.expirationTime <= t);
            ((t = Y.unstable_now()),
              typeof n == "function"
                ? (at.callback = n)
                : at === mt(vt) && ua(vt),
              di(t));
          } else ua(vt);
          at = mt(vt);
        }
        if (at !== null) var a = !0;
        else {
          var i = mt(ir);
          (i !== null && mi(pi, i.startTime - t), (a = !1));
        }
        return a;
      } finally {
        ((at = null), (De = r), (ma = !1));
      }
    }
    var ga = !1,
      ha = null,
      Yo = -1,
      Ud = 5,
      Ad = -1;
    function Cd() {
      return !(Y.unstable_now() - Ad < Ud);
    }
    function ii() {
      if (ha !== null) {
        var e = Y.unstable_now();
        Ad = e;
        var t = !0;
        try {
          t = ha(!0, e);
        } finally {
          t ? Qo() : ((ga = !1), (ha = null));
        }
      } else ga = !1;
    }
    var Qo;
    typeof kd == "function"
      ? (Qo = function () {
          kd(ii);
        })
      : typeof MessageChannel < "u"
        ? ((ci = new MessageChannel()),
          (vd = ci.port2),
          (ci.port1.onmessage = ii),
          (Qo = function () {
            vd.postMessage(null);
          }))
        : (Qo = function () {
            Td(ii, 0);
          });
    var ci, vd;
    function ui(e) {
      ((ha = e), ga || ((ga = !0), Qo()));
    }
    function mi(e, t) {
      Yo = Td(function () {
        e(Y.unstable_now());
      }, t);
    }
    Y.unstable_IdlePriority = 5;
    Y.unstable_ImmediatePriority = 1;
    Y.unstable_LowPriority = 4;
    Y.unstable_NormalPriority = 3;
    Y.unstable_Profiling = null;
    Y.unstable_UserBlockingPriority = 2;
    Y.unstable_cancelCallback = function (e) {
      e.callback = null;
    };
    Y.unstable_continueExecution = function () {
      Dr || ma || ((Dr = !0), ui(hi));
    };
    Y.unstable_forceFrameRate = function (e) {
      0 > e || 125 < e
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
          )
        : (Ud = 0 < e ? Math.floor(1e3 / e) : 5);
    };
    Y.unstable_getCurrentPriorityLevel = function () {
      return De;
    };
    Y.unstable_getFirstCallbackNode = function () {
      return mt(vt);
    };
    Y.unstable_next = function (e) {
      switch (De) {
        case 1:
        case 2:
        case 3:
          var t = 3;
          break;
        default:
          t = De;
      }
      var r = De;
      De = t;
      try {
        return e();
      } finally {
        De = r;
      }
    };
    Y.unstable_pauseExecution = function () {};
    Y.unstable_requestPaint = function () {};
    Y.unstable_runWithPriority = function (e, t) {
      switch (e) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          e = 3;
      }
      var r = De;
      De = e;
      try {
        return t();
      } finally {
        De = r;
      }
    };
    Y.unstable_scheduleCallback = function (e, t, r) {
      var o = Y.unstable_now();
      switch (
        (typeof r == "object" && r !== null
          ? ((r = r.delay), (r = typeof r == "number" && 0 < r ? o + r : o))
          : (r = o),
        e)
      ) {
        case 1:
          var n = -1;
          break;
        case 2:
          n = 250;
          break;
        case 5:
          n = 1073741823;
          break;
        case 4:
          n = 1e4;
          break;
        default:
          n = 5e3;
      }
      return (
        (n = r + n),
        (e = {
          id: Dg++,
          callback: t,
          priorityLevel: e,
          startTime: r,
          expirationTime: n,
          sortIndex: -1,
        }),
        r > o
          ? ((e.sortIndex = r),
            li(ir, e),
            mt(vt) === null &&
              e === mt(ir) &&
              (Zo ? (Bd(Yo), (Yo = -1)) : (Zo = !0), mi(pi, r - o)))
          : ((e.sortIndex = n), li(vt, e), Dr || ma || ((Dr = !0), ui(hi))),
        e
      );
    };
    Y.unstable_shouldYield = Cd;
    Y.unstable_wrapCallback = function (e) {
      var t = De;
      return function () {
        var r = De;
        De = t;
        try {
          return e.apply(this, arguments);
        } finally {
          De = r;
        }
      };
    };
  });
  var Dd = Cr((wf, Nd) => {
    "use strict";
    Nd.exports = Sd();
  });
  var Pu = Cr((ot) => {
    "use strict";
    var Ig = Nr(),
      tt = Dd();
    function B(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          r = 1;
        r < arguments.length;
        r++
      )
        t += "&args[]=" + encodeURIComponent(arguments[r]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var Op = new Set(),
      wn = {};
    function Kr(e, t) {
      (ko(e, t), ko(e + "Capture", t));
    }
    function ko(e, t) {
      for (wn[e] = t, e = 0; e < t.length; e++) Op.add(t[e]);
    }
    var $t = !(
        typeof window > "u" ||
        typeof window.document > "u" ||
        typeof window.document.createElement > "u"
      ),
      Pi = Object.prototype.hasOwnProperty,
      Mg =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      Id = {},
      Md = {};
    function Fg(e) {
      return Pi.call(Md, e)
        ? !0
        : Pi.call(Id, e)
          ? !1
          : Mg.test(e)
            ? (Md[e] = !0)
            : ((Id[e] = !0), !1);
    }
    function Pg(e, t, r, o) {
      if (r !== null && r.type === 0) return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean":
          return o
            ? !1
            : r !== null
              ? !r.acceptsBooleans
              : ((e = e.toLowerCase().slice(0, 5)),
                e !== "data-" && e !== "aria-");
        default:
          return !1;
      }
    }
    function _g(e, t, r, o) {
      if (t === null || typeof t > "u" || Pg(e, t, r, o)) return !0;
      if (o) return !1;
      if (r !== null)
        switch (r.type) {
          case 3:
            return !t;
          case 4:
            return t === !1;
          case 5:
            return isNaN(t);
          case 6:
            return isNaN(t) || 1 > t;
        }
      return !1;
    }
    function Re(e, t, r, o, n, a, i) {
      ((this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = o),
        (this.attributeNamespace = n),
        (this.mustUseProperty = r),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = i));
    }
    var Ae = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
      .split(" ")
      .forEach(function (e) {
        Ae[e] = new Re(e, 0, !1, e, null, !1, !1);
      });
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      Ae[t] = new Re(t, 1, !1, e[1], null, !1, !1);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(
      function (e) {
        Ae[e] = new Re(e, 2, !1, e.toLowerCase(), null, !1, !1);
      },
    );
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      Ae[e] = new Re(e, 2, !1, e, null, !1, !1);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        Ae[e] = new Re(e, 3, !1, e.toLowerCase(), null, !1, !1);
      });
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      Ae[e] = new Re(e, 3, !0, e, null, !1, !1);
    });
    ["capture", "download"].forEach(function (e) {
      Ae[e] = new Re(e, 4, !1, e, null, !1, !1);
    });
    ["cols", "rows", "size", "span"].forEach(function (e) {
      Ae[e] = new Re(e, 6, !1, e, null, !1, !1);
    });
    ["rowSpan", "start"].forEach(function (e) {
      Ae[e] = new Re(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
    var Ac = /[\-:]([a-z])/g;
    function Cc(e) {
      return e[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Ac, Cc);
        Ae[t] = new Re(t, 1, !1, e, null, !1, !1);
      });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(Ac, Cc);
        Ae[t] = new Re(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      });
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(Ac, Cc);
      Ae[t] = new Re(
        t,
        1,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1,
      );
    });
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      Ae[e] = new Re(e, 1, !1, e.toLowerCase(), null, !1, !1);
    });
    Ae.xlinkHref = new Re(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1,
    );
    ["src", "href", "action", "formAction"].forEach(function (e) {
      Ae[e] = new Re(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
    function Sc(e, t, r, o) {
      var n = Ae.hasOwnProperty(t) ? Ae[t] : null;
      (n !== null
        ? n.type !== 0
        : o ||
          !(2 < t.length) ||
          (t[0] !== "o" && t[0] !== "O") ||
          (t[1] !== "n" && t[1] !== "N")) &&
        (_g(t, r, n, o) && (r = null),
        o || n === null
          ? Fg(t) &&
            (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
          : n.mustUseProperty
            ? (e[n.propertyName] = r === null ? (n.type === 3 ? !1 : "") : r)
            : ((t = n.attributeName),
              (o = n.attributeNamespace),
              r === null
                ? e.removeAttribute(t)
                : ((n = n.type),
                  (r = n === 3 || (n === 4 && r === !0) ? "" : "" + r),
                  o ? e.setAttributeNS(o, t, r) : e.setAttribute(t, r))));
    }
    var Yt = Ig.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      xa = Symbol.for("react.element"),
      ao = Symbol.for("react.portal"),
      so = Symbol.for("react.fragment"),
      Nc = Symbol.for("react.strict_mode"),
      _i = Symbol.for("react.profiler"),
      Rp = Symbol.for("react.provider"),
      Wp = Symbol.for("react.context"),
      Dc = Symbol.for("react.forward_ref"),
      Li = Symbol.for("react.suspense"),
      Oi = Symbol.for("react.suspense_list"),
      Ic = Symbol.for("react.memo"),
      lr = Symbol.for("react.lazy"),
      Jp = Symbol.for("react.offscreen"),
      Fd = Symbol.iterator;
    function qo(e) {
      return e === null || typeof e != "object"
        ? null
        : ((e = (Fd && e[Fd]) || e["@@iterator"]),
          typeof e == "function" ? e : null);
    }
    var pe = Object.assign,
      gi;
    function sn(e) {
      if (gi === void 0)
        try {
          throw Error();
        } catch (r) {
          var t = r.stack.trim().match(/\n( *(at )?)/);
          gi = (t && t[1]) || "";
        }
      return (
        `
` +
        gi +
        e
      );
    }
    var xi = !1;
    function zi(e, t) {
      if (!e || xi) return "";
      xi = !0;
      var r = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        if (t)
          if (
            ((t = function () {
              throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
              set: function () {
                throw Error();
              },
            }),
            typeof Reflect == "object" && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, []);
            } catch (p) {
              var o = p;
            }
            Reflect.construct(e, [], t);
          } else {
            try {
              t.call();
            } catch (p) {
              o = p;
            }
            e.call(t.prototype);
          }
        else {
          try {
            throw Error();
          } catch (p) {
            o = p;
          }
          e();
        }
      } catch (p) {
        if (p && o && typeof p.stack == "string") {
          for (
            var n = p.stack.split(`
`),
              a = o.stack.split(`
`),
              i = n.length - 1,
              c = a.length - 1;
            1 <= i && 0 <= c && n[i] !== a[c];
          )
            c--;
          for (; 1 <= i && 0 <= c; i--, c--)
            if (n[i] !== a[c]) {
              if (i !== 1 || c !== 1)
                do
                  if ((i--, c--, 0 > c || n[i] !== a[c])) {
                    var d =
                      `
` + n[i].replace(" at new ", " at ");
                    return (
                      e.displayName &&
                        d.includes("<anonymous>") &&
                        (d = d.replace("<anonymous>", e.displayName)),
                      d
                    );
                  }
                while (1 <= i && 0 <= c);
              break;
            }
        }
      } finally {
        ((xi = !1), (Error.prepareStackTrace = r));
      }
      return (e = e ? e.displayName || e.name : "") ? sn(e) : "";
    }
    function Lg(e) {
      switch (e.tag) {
        case 5:
          return sn(e.type);
        case 16:
          return sn("Lazy");
        case 13:
          return sn("Suspense");
        case 19:
          return sn("SuspenseList");
        case 0:
        case 2:
        case 15:
          return ((e = zi(e.type, !1)), e);
        case 11:
          return ((e = zi(e.type.render, !1)), e);
        case 1:
          return ((e = zi(e.type, !0)), e);
        default:
          return "";
      }
    }
    function Ri(e) {
      if (e == null) return null;
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case so:
          return "Fragment";
        case ao:
          return "Portal";
        case _i:
          return "Profiler";
        case Nc:
          return "StrictMode";
        case Li:
          return "Suspense";
        case Oi:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Wp:
            return (e.displayName || "Context") + ".Consumer";
          case Rp:
            return (e._context.displayName || "Context") + ".Provider";
          case Dc:
            var t = e.render;
            return (
              (e = e.displayName),
              e ||
                ((e = t.displayName || t.name || ""),
                (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
              e
            );
          case Ic:
            return (
              (t = e.displayName || null),
              t !== null ? t : Ri(e.type) || "Memo"
            );
          case lr:
            ((t = e._payload), (e = e._init));
            try {
              return Ri(e(t));
            } catch {}
        }
      return null;
    }
    function Og(e) {
      var t = e.type;
      switch (e.tag) {
        case 24:
          return "Cache";
        case 9:
          return (t.displayName || "Context") + ".Consumer";
        case 10:
          return (t._context.displayName || "Context") + ".Provider";
        case 18:
          return "DehydratedFragment";
        case 11:
          return (
            (e = t.render),
            (e = e.displayName || e.name || ""),
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
          );
        case 7:
          return "Fragment";
        case 5:
          return t;
        case 4:
          return "Portal";
        case 3:
          return "Root";
        case 6:
          return "Text";
        case 16:
          return Ri(t);
        case 8:
          return t === Nc ? "StrictMode" : "Mode";
        case 22:
          return "Offscreen";
        case 12:
          return "Profiler";
        case 21:
          return "Scope";
        case 13:
          return "Suspense";
        case 19:
          return "SuspenseList";
        case 25:
          return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if (typeof t == "function") return t.displayName || t.name || null;
          if (typeof t == "string") return t;
      }
      return null;
    }
    function Er(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return e;
        default:
          return "";
      }
    }
    function Hp(e) {
      var t = e.type;
      return (
        (e = e.nodeName) &&
        e.toLowerCase() === "input" &&
        (t === "checkbox" || t === "radio")
      );
    }
    function Rg(e) {
      var t = Hp(e) ? "checked" : "value",
        r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        o = "" + e[t];
      if (
        !e.hasOwnProperty(t) &&
        typeof r < "u" &&
        typeof r.get == "function" &&
        typeof r.set == "function"
      ) {
        var n = r.get,
          a = r.set;
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
              return n.call(this);
            },
            set: function (i) {
              ((o = "" + i), a.call(this, i));
            },
          }),
          Object.defineProperty(e, t, { enumerable: r.enumerable }),
          {
            getValue: function () {
              return o;
            },
            setValue: function (i) {
              o = "" + i;
            },
            stopTracking: function () {
              ((e._valueTracker = null), delete e[t]);
            },
          }
        );
      }
    }
    function za(e) {
      e._valueTracker || (e._valueTracker = Rg(e));
    }
    function Vp(e) {
      if (!e) return !1;
      var t = e._valueTracker;
      if (!t) return !0;
      var r = t.getValue(),
        o = "";
      return (
        e && (o = Hp(e) ? (e.checked ? "true" : "false") : e.value),
        (e = o),
        e !== r ? (t.setValue(e), !0) : !1
      );
    }
    function Va(e) {
      if (
        ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
      )
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    function Wi(e, t) {
      var r = t.checked;
      return pe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: r ?? e._wrapperState.initialChecked,
      });
    }
    function Pd(e, t) {
      var r = t.defaultValue == null ? "" : t.defaultValue,
        o = t.checked != null ? t.checked : t.defaultChecked;
      ((r = Er(t.value != null ? t.value : r)),
        (e._wrapperState = {
          initialChecked: o,
          initialValue: r,
          controlled:
            t.type === "checkbox" || t.type === "radio"
              ? t.checked != null
              : t.value != null,
        }));
    }
    function Kp(e, t) {
      ((t = t.checked), t != null && Sc(e, "checked", t, !1));
    }
    function Ji(e, t) {
      Kp(e, t);
      var r = Er(t.value),
        o = t.type;
      if (r != null)
        o === "number"
          ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
          : e.value !== "" + r && (e.value = "" + r);
      else if (o === "submit" || o === "reset") {
        e.removeAttribute("value");
        return;
      }
      (t.hasOwnProperty("value")
        ? Hi(e, t.type, r)
        : t.hasOwnProperty("defaultValue") && Hi(e, t.type, Er(t.defaultValue)),
        t.checked == null &&
          t.defaultChecked != null &&
          (e.defaultChecked = !!t.defaultChecked));
    }
    function _d(e, t, r) {
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var o = t.type;
        if (!(
          (o !== "submit" && o !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        ))
          return;
        ((t = "" + e._wrapperState.initialValue),
          r || t === e.value || (e.value = t),
          (e.defaultValue = t));
      }
      ((r = e.name),
        r !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        r !== "" && (e.name = r));
    }
    function Hi(e, t, r) {
      (t !== "number" || Va(e.ownerDocument) !== e) &&
        (r == null
          ? (e.defaultValue = "" + e._wrapperState.initialValue)
          : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
    }
    var cn = Array.isArray;
    function fo(e, t, r, o) {
      if (((e = e.options), t)) {
        t = {};
        for (var n = 0; n < r.length; n++) t["$" + r[n]] = !0;
        for (r = 0; r < e.length; r++)
          ((n = t.hasOwnProperty("$" + e[r].value)),
            e[r].selected !== n && (e[r].selected = n),
            n && o && (e[r].defaultSelected = !0));
      } else {
        for (r = "" + Er(r), t = null, n = 0; n < e.length; n++) {
          if (e[n].value === r) {
            ((e[n].selected = !0), o && (e[n].defaultSelected = !0));
            return;
          }
          t !== null || e[n].disabled || (t = e[n]);
        }
        t !== null && (t.selected = !0);
      }
    }
    function Vi(e, t) {
      if (t.dangerouslySetInnerHTML != null) throw Error(B(91));
      return pe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue,
      });
    }
    function Ld(e, t) {
      var r = t.value;
      if (r == null) {
        if (((r = t.children), (t = t.defaultValue), r != null)) {
          if (t != null) throw Error(B(92));
          if (cn(r)) {
            if (1 < r.length) throw Error(B(93));
            r = r[0];
          }
          t = r;
        }
        (t == null && (t = ""), (r = t));
      }
      e._wrapperState = { initialValue: Er(r) };
    }
    function $p(e, t) {
      var r = Er(t.value),
        o = Er(t.defaultValue);
      (r != null &&
        ((r = "" + r),
        r !== e.value && (e.value = r),
        t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
        o != null && (e.defaultValue = "" + o));
    }
    function Od(e) {
      var t = e.textContent;
      t === e._wrapperState.initialValue &&
        t !== "" &&
        t !== null &&
        (e.value = t);
    }
    function Gp(e) {
      switch (e) {
        case "svg":
          return "http://www.w3.org/2000/svg";
        case "math":
          return "http://www.w3.org/1998/Math/MathML";
        default:
          return "http://www.w3.org/1999/xhtml";
      }
    }
    function Ki(e, t) {
      return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Gp(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
    }
    var fa,
      Qp = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
          ? function (t, r, o, n) {
              MSApp.execUnsafeLocalFunction(function () {
                return e(t, r, o, n);
              });
            }
          : e;
      })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
          e.innerHTML = t;
        else {
          for (
            fa = fa || document.createElement("div"),
              fa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
              t = fa.firstChild;
            e.firstChild;
          )
            e.removeChild(e.firstChild);
          for (; t.firstChild;) e.appendChild(t.firstChild);
        }
      });
    function bn(e, t) {
      if (t) {
        var r = e.firstChild;
        if (r && r === e.lastChild && r.nodeType === 3) {
          r.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }
    var pn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Wg = ["Webkit", "ms", "Moz", "O"];
    Object.keys(pn).forEach(function (e) {
      Wg.forEach(function (t) {
        ((t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pn[t] = pn[e]));
      });
    });
    function Zp(e, t, r) {
      return t == null || typeof t == "boolean" || t === ""
        ? ""
        : r ||
            typeof t != "number" ||
            t === 0 ||
            (pn.hasOwnProperty(e) && pn[e])
          ? ("" + t).trim()
          : t + "px";
    }
    function Yp(e, t) {
      e = e.style;
      for (var r in t)
        if (t.hasOwnProperty(r)) {
          var o = r.indexOf("--") === 0,
            n = Zp(r, t[r], o);
          (r === "float" && (r = "cssFloat"),
            o ? e.setProperty(r, n) : (e[r] = n));
        }
    }
    var Jg = pe(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      },
    );
    function $i(e, t) {
      if (t) {
        if (Jg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw Error(B(137, e));
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null) throw Error(B(60));
          if (
            typeof t.dangerouslySetInnerHTML != "object" ||
            !("__html" in t.dangerouslySetInnerHTML)
          )
            throw Error(B(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(B(62));
      }
    }
    function Gi(e, t) {
      if (e.indexOf("-") === -1) return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Qi = null;
    function Mc(e) {
      return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
      );
    }
    var Zi = null,
      jo = null,
      wo = null;
    function Rd(e) {
      if ((e = Ln(e))) {
        if (typeof Zi != "function") throw Error(B(280));
        var t = e.stateNode;
        t && ((t = js(t)), Zi(e.stateNode, e.type, t));
      }
    }
    function qp(e) {
      jo ? (wo ? wo.push(e) : (wo = [e])) : (jo = e);
    }
    function Xp() {
      if (jo) {
        var e = jo,
          t = wo;
        if (((wo = jo = null), Rd(e), t))
          for (e = 0; e < t.length; e++) Rd(t[e]);
      }
    }
    function eh(e, t) {
      return e(t);
    }
    function th() {}
    var fi = !1;
    function rh(e, t, r) {
      if (fi) return e(t, r);
      fi = !0;
      try {
        return eh(e, t, r);
      } finally {
        ((fi = !1), (jo !== null || wo !== null) && (th(), Xp()));
      }
    }
    function yn(e, t) {
      var r = e.stateNode;
      if (r === null) return null;
      var o = js(r);
      if (o === null) return null;
      r = o[t];
      e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          ((o = !o.disabled) ||
            ((e = e.type),
            (o = !(
              e === "button" ||
              e === "input" ||
              e === "select" ||
              e === "textarea"
            ))),
            (e = !o));
          break e;
        default:
          e = !1;
      }
      if (e) return null;
      if (r && typeof r != "function") throw Error(B(231, t, typeof r));
      return r;
    }
    var Yi = !1;
    if ($t)
      try {
        ((oo = {}),
          Object.defineProperty(oo, "passive", {
            get: function () {
              Yi = !0;
            },
          }),
          window.addEventListener("test", oo, oo),
          window.removeEventListener("test", oo, oo));
      } catch {
        Yi = !1;
      }
    var oo;
    function Hg(e, t, r, o, n, a, i, c, d) {
      var p = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(r, p);
      } catch (x) {
        this.onError(x);
      }
    }
    var hn = !1,
      Ka = null,
      $a = !1,
      qi = null,
      Vg = {
        onError: function (e) {
          ((hn = !0), (Ka = e));
        },
      };
    function Kg(e, t, r, o, n, a, i, c, d) {
      ((hn = !1), (Ka = null), Hg.apply(Vg, arguments));
    }
    function $g(e, t, r, o, n, a, i, c, d) {
      if ((Kg.apply(this, arguments), hn)) {
        if (hn) {
          var p = Ka;
          ((hn = !1), (Ka = null));
        } else throw Error(B(198));
        $a || (($a = !0), (qi = p));
      }
    }
    function $r(e) {
      var t = e,
        r = e;
      if (e.alternate) for (; t.return;) t = t.return;
      else {
        e = t;
        do ((t = e), (t.flags & 4098) !== 0 && (r = t.return), (e = t.return));
        while (e);
      }
      return t.tag === 3 ? r : null;
    }
    function oh(e) {
      if (e.tag === 13) {
        var t = e.memoizedState;
        if (
          (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
          t !== null)
        )
          return t.dehydrated;
      }
      return null;
    }
    function Wd(e) {
      if ($r(e) !== e) throw Error(B(188));
    }
    function Gg(e) {
      var t = e.alternate;
      if (!t) {
        if (((t = $r(e)), t === null)) throw Error(B(188));
        return t !== e ? null : e;
      }
      for (var r = e, o = t; ;) {
        var n = r.return;
        if (n === null) break;
        var a = n.alternate;
        if (a === null) {
          if (((o = n.return), o !== null)) {
            r = o;
            continue;
          }
          break;
        }
        if (n.child === a.child) {
          for (a = n.child; a;) {
            if (a === r) return (Wd(n), e);
            if (a === o) return (Wd(n), t);
            a = a.sibling;
          }
          throw Error(B(188));
        }
        if (r.return !== o.return) ((r = n), (o = a));
        else {
          for (var i = !1, c = n.child; c;) {
            if (c === r) {
              ((i = !0), (r = n), (o = a));
              break;
            }
            if (c === o) {
              ((i = !0), (o = n), (r = a));
              break;
            }
            c = c.sibling;
          }
          if (!i) {
            for (c = a.child; c;) {
              if (c === r) {
                ((i = !0), (r = a), (o = n));
                break;
              }
              if (c === o) {
                ((i = !0), (o = a), (r = n));
                break;
              }
              c = c.sibling;
            }
            if (!i) throw Error(B(189));
          }
        }
        if (r.alternate !== o) throw Error(B(190));
      }
      if (r.tag !== 3) throw Error(B(188));
      return r.stateNode.current === r ? e : t;
    }
    function nh(e) {
      return ((e = Gg(e)), e !== null ? ah(e) : null);
    }
    function ah(e) {
      if (e.tag === 5 || e.tag === 6) return e;
      for (e = e.child; e !== null;) {
        var t = ah(e);
        if (t !== null) return t;
        e = e.sibling;
      }
      return null;
    }
    var sh = tt.unstable_scheduleCallback,
      Jd = tt.unstable_cancelCallback,
      Qg = tt.unstable_shouldYield,
      Zg = tt.unstable_requestPaint,
      ge = tt.unstable_now,
      Yg = tt.unstable_getCurrentPriorityLevel,
      Fc = tt.unstable_ImmediatePriority,
      ih = tt.unstable_UserBlockingPriority,
      Ga = tt.unstable_NormalPriority,
      qg = tt.unstable_LowPriority,
      ch = tt.unstable_IdlePriority,
      gs = null,
      At = null;
    function Xg(e) {
      if (At && typeof At.onCommitFiberRoot == "function")
        try {
          At.onCommitFiberRoot(gs, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
    }
    var jt = Math.clz32 ? Math.clz32 : rx,
      ex = Math.log,
      tx = Math.LN2;
    function rx(e) {
      return ((e >>>= 0), e === 0 ? 32 : (31 - ((ex(e) / tx) | 0)) | 0);
    }
    var ja = 64,
      wa = 4194304;
    function ln(e) {
      switch (e & -e) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return e & 130023424;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 1073741824;
        default:
          return e;
      }
    }
    function Qa(e, t) {
      var r = e.pendingLanes;
      if (r === 0) return 0;
      var o = 0,
        n = e.suspendedLanes,
        a = e.pingedLanes,
        i = r & 268435455;
      if (i !== 0) {
        var c = i & ~n;
        c !== 0 ? (o = ln(c)) : ((a &= i), a !== 0 && (o = ln(a)));
      } else ((i = r & ~n), i !== 0 ? (o = ln(i)) : a !== 0 && (o = ln(a)));
      if (o === 0) return 0;
      if (
        t !== 0 &&
        t !== o &&
        (t & n) === 0 &&
        ((n = o & -o),
        (a = t & -t),
        n >= a || (n === 16 && (a & 4194240) !== 0))
      )
        return t;
      if (((o & 4) !== 0 && (o |= r & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= o; 0 < t;)
          ((r = 31 - jt(t)), (n = 1 << r), (o |= e[r]), (t &= ~n));
      return o;
    }
    function ox(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function nx(e, t) {
      for (
        var r = e.suspendedLanes,
          o = e.pingedLanes,
          n = e.expirationTimes,
          a = e.pendingLanes;
        0 < a;
      ) {
        var i = 31 - jt(a),
          c = 1 << i,
          d = n[i];
        (d === -1
          ? ((c & r) === 0 || (c & o) !== 0) && (n[i] = ox(c, t))
          : d <= t && (e.expiredLanes |= c),
          (a &= ~c));
      }
    }
    function Xi(e) {
      return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
      );
    }
    function lh() {
      var e = ja;
      return ((ja <<= 1), (ja & 4194240) === 0 && (ja = 64), e);
    }
    function ji(e) {
      for (var t = [], r = 0; 31 > r; r++) t.push(e);
      return t;
    }
    function Pn(e, t, r) {
      ((e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - jt(t)),
        (e[t] = r));
    }
    function ax(e, t) {
      var r = e.pendingLanes & ~t;
      ((e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements));
      var o = e.eventTimes;
      for (e = e.expirationTimes; 0 < r;) {
        var n = 31 - jt(r),
          a = 1 << n;
        ((t[n] = 0), (o[n] = -1), (e[n] = -1), (r &= ~a));
      }
    }
    function Pc(e, t) {
      var r = (e.entangledLanes |= t);
      for (e = e.entanglements; r;) {
        var o = 31 - jt(r),
          n = 1 << o;
        ((n & t) | (e[o] & t) && (e[o] |= t), (r &= ~n));
      }
    }
    var Z = 0;
    function dh(e) {
      return (
        (e &= -e),
        1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
      );
    }
    var ph,
      _c,
      hh,
      uh,
      mh,
      ec = !1,
      ba = [],
      gr = null,
      xr = null,
      zr = null,
      En = new Map(),
      kn = new Map(),
      pr = [],
      sx =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
          " ",
        );
    function Hd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          gr = null;
          break;
        case "dragenter":
        case "dragleave":
          xr = null;
          break;
        case "mouseover":
        case "mouseout":
          zr = null;
          break;
        case "pointerover":
        case "pointerout":
          En.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          kn.delete(t.pointerId);
      }
    }
    function Xo(e, t, r, o, n, a) {
      return e === null || e.nativeEvent !== a
        ? ((e = {
            blockedOn: t,
            domEventName: r,
            eventSystemFlags: o,
            nativeEvent: a,
            targetContainers: [n],
          }),
          t !== null && ((t = Ln(t)), t !== null && _c(t)),
          e)
        : ((e.eventSystemFlags |= o),
          (t = e.targetContainers),
          n !== null && t.indexOf(n) === -1 && t.push(n),
          e);
    }
    function ix(e, t, r, o, n) {
      switch (t) {
        case "focusin":
          return ((gr = Xo(gr, e, t, r, o, n)), !0);
        case "dragenter":
          return ((xr = Xo(xr, e, t, r, o, n)), !0);
        case "mouseover":
          return ((zr = Xo(zr, e, t, r, o, n)), !0);
        case "pointerover":
          var a = n.pointerId;
          return (En.set(a, Xo(En.get(a) || null, e, t, r, o, n)), !0);
        case "gotpointercapture":
          return (
            (a = n.pointerId),
            kn.set(a, Xo(kn.get(a) || null, e, t, r, o, n)),
            !0
          );
      }
      return !1;
    }
    function gh(e) {
      var t = Fr(e.target);
      if (t !== null) {
        var r = $r(t);
        if (r !== null) {
          if (((t = r.tag), t === 13)) {
            if (((t = oh(r)), t !== null)) {
              ((e.blockedOn = t),
                mh(e.priority, function () {
                  hh(r);
                }));
              return;
            }
          } else if (
            t === 3 &&
            r.stateNode.current.memoizedState.isDehydrated
          ) {
            e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
            return;
          }
        }
      }
      e.blockedOn = null;
    }
    function Ma(e) {
      if (e.blockedOn !== null) return !1;
      for (var t = e.targetContainers; 0 < t.length;) {
        var r = tc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (r === null) {
          r = e.nativeEvent;
          var o = new r.constructor(r.type, r);
          ((Qi = o), r.target.dispatchEvent(o), (Qi = null));
        } else return ((t = Ln(r)), t !== null && _c(t), (e.blockedOn = r), !1);
        t.shift();
      }
      return !0;
    }
    function Vd(e, t, r) {
      Ma(e) && r.delete(t);
    }
    function cx() {
      ((ec = !1),
        gr !== null && Ma(gr) && (gr = null),
        xr !== null && Ma(xr) && (xr = null),
        zr !== null && Ma(zr) && (zr = null),
        En.forEach(Vd),
        kn.forEach(Vd));
    }
    function en(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        ec ||
          ((ec = !0),
          tt.unstable_scheduleCallback(tt.unstable_NormalPriority, cx)));
    }
    function vn(e) {
      function t(n) {
        return en(n, e);
      }
      if (0 < ba.length) {
        en(ba[0], e);
        for (var r = 1; r < ba.length; r++) {
          var o = ba[r];
          o.blockedOn === e && (o.blockedOn = null);
        }
      }
      for (
        gr !== null && en(gr, e),
          xr !== null && en(xr, e),
          zr !== null && en(zr, e),
          En.forEach(t),
          kn.forEach(t),
          r = 0;
        r < pr.length;
        r++
      )
        ((o = pr[r]), o.blockedOn === e && (o.blockedOn = null));
      for (; 0 < pr.length && ((r = pr[0]), r.blockedOn === null);)
        (gh(r), r.blockedOn === null && pr.shift());
    }
    var bo = Yt.ReactCurrentBatchConfig,
      Za = !0;
    function lx(e, t, r, o) {
      var n = Z,
        a = bo.transition;
      bo.transition = null;
      try {
        ((Z = 1), Lc(e, t, r, o));
      } finally {
        ((Z = n), (bo.transition = a));
      }
    }
    function dx(e, t, r, o) {
      var n = Z,
        a = bo.transition;
      bo.transition = null;
      try {
        ((Z = 4), Lc(e, t, r, o));
      } finally {
        ((Z = n), (bo.transition = a));
      }
    }
    function Lc(e, t, r, o) {
      if (Za) {
        var n = tc(e, t, r, o);
        if (n === null) (Ti(e, t, o, Ya, r), Hd(e, o));
        else if (ix(n, e, t, r, o)) o.stopPropagation();
        else if ((Hd(e, o), t & 4 && -1 < sx.indexOf(e))) {
          for (; n !== null;) {
            var a = Ln(n);
            if (
              (a !== null && ph(a),
              (a = tc(e, t, r, o)),
              a === null && Ti(e, t, o, Ya, r),
              a === n)
            )
              break;
            n = a;
          }
          n !== null && o.stopPropagation();
        } else Ti(e, t, o, null, r);
      }
    }
    var Ya = null;
    function tc(e, t, r, o) {
      if (((Ya = null), (e = Mc(o)), (e = Fr(e)), e !== null))
        if (((t = $r(e)), t === null)) e = null;
        else if (((r = t.tag), r === 13)) {
          if (((e = oh(t)), e !== null)) return e;
          e = null;
        } else if (r === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      return ((Ya = e), null);
    }
    function xh(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 4;
        case "message":
          switch (Yg()) {
            case Fc:
              return 1;
            case ih:
              return 4;
            case Ga:
            case qg:
              return 16;
            case ch:
              return 536870912;
            default:
              return 16;
          }
        default:
          return 16;
      }
    }
    var ur = null,
      Oc = null,
      Fa = null;
    function zh() {
      if (Fa) return Fa;
      var e,
        t = Oc,
        r = t.length,
        o,
        n = "value" in ur ? ur.value : ur.textContent,
        a = n.length;
      for (e = 0; e < r && t[e] === n[e]; e++);
      var i = r - e;
      for (o = 1; o <= i && t[r - o] === n[a - o]; o++);
      return (Fa = n.slice(e, 1 < o ? 1 - o : void 0));
    }
    function Pa(e) {
      var t = e.keyCode;
      return (
        "charCode" in e
          ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
          : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
      );
    }
    function ya() {
      return !0;
    }
    function Kd() {
      return !1;
    }
    function rt(e) {
      function t(r, o, n, a, i) {
        ((this._reactName = r),
          (this._targetInst = n),
          (this.type = o),
          (this.nativeEvent = a),
          (this.target = i),
          (this.currentTarget = null));
        for (var c in e)
          e.hasOwnProperty(c) && ((r = e[c]), (this[c] = r ? r(a) : a[c]));
        return (
          (this.isDefaultPrevented = (
            a.defaultPrevented != null
              ? a.defaultPrevented
              : a.returnValue === !1
          )
            ? ya
            : Kd),
          (this.isPropagationStopped = Kd),
          this
        );
      }
      return (
        pe(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r &&
              (r.preventDefault
                ? r.preventDefault()
                : typeof r.returnValue != "unknown" && (r.returnValue = !1),
              (this.isDefaultPrevented = ya));
          },
          stopPropagation: function () {
            var r = this.nativeEvent;
            r &&
              (r.stopPropagation
                ? r.stopPropagation()
                : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
              (this.isPropagationStopped = ya));
          },
          persist: function () {},
          isPersistent: ya,
        }),
        t
      );
    }
    var So = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Rc = rt(So),
      _n = pe({}, So, { view: 0, detail: 0 }),
      px = rt(_n),
      wi,
      bi,
      tn,
      xs = pe({}, _n, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Wc,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget;
        },
        movementX: function (e) {
          return "movementX" in e
            ? e.movementX
            : (e !== tn &&
                (tn && e.type === "mousemove"
                  ? ((wi = e.screenX - tn.screenX),
                    (bi = e.screenY - tn.screenY))
                  : (bi = wi = 0),
                (tn = e)),
              wi);
        },
        movementY: function (e) {
          return "movementY" in e ? e.movementY : bi;
        },
      }),
      $d = rt(xs),
      hx = pe({}, xs, { dataTransfer: 0 }),
      ux = rt(hx),
      mx = pe({}, _n, { relatedTarget: 0 }),
      yi = rt(mx),
      gx = pe({}, So, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
      xx = rt(gx),
      zx = pe({}, So, {
        clipboardData: function (e) {
          return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
      }),
      fx = rt(zx),
      jx = pe({}, So, { data: 0 }),
      Gd = rt(jx),
      wx = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
      },
      bx = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
      },
      yx = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey",
      };
    function Ex(e) {
      var t = this.nativeEvent;
      return t.getModifierState
        ? t.getModifierState(e)
        : (e = yx[e])
          ? !!t[e]
          : !1;
    }
    function Wc() {
      return Ex;
    }
    var kx = pe({}, _n, {
        key: function (e) {
          if (e.key) {
            var t = wx[e.key] || e.key;
            if (t !== "Unidentified") return t;
          }
          return e.type === "keypress"
            ? ((e = Pa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
              ? bx[e.keyCode] || "Unidentified"
              : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Wc,
        charCode: function (e) {
          return e.type === "keypress" ? Pa(e) : 0;
        },
        keyCode: function (e) {
          return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
          return e.type === "keypress"
            ? Pa(e)
            : e.type === "keydown" || e.type === "keyup"
              ? e.keyCode
              : 0;
        },
      }),
      vx = rt(kx),
      Tx = pe({}, xs, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
      }),
      Qd = rt(Tx),
      Bx = pe({}, _n, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Wc,
      }),
      Ux = rt(Bx),
      Ax = pe({}, So, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
      Cx = rt(Ax),
      Sx = pe({}, xs, {
        deltaX: function (e) {
          return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
        },
        deltaY: function (e) {
          return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      Nx = rt(Sx),
      Dx = [9, 13, 27, 32],
      Jc = $t && "CompositionEvent" in window,
      un = null;
    $t && "documentMode" in document && (un = document.documentMode);
    var Ix = $t && "TextEvent" in window && !un,
      fh = $t && (!Jc || (un && 8 < un && 11 >= un)),
      Zd = " ",
      Yd = !1;
    function jh(e, t) {
      switch (e) {
        case "keyup":
          return Dx.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function wh(e) {
      return (
        (e = e.detail),
        typeof e == "object" && "data" in e ? e.data : null
      );
    }
    var io = !1;
    function Mx(e, t) {
      switch (e) {
        case "compositionend":
          return wh(t);
        case "keypress":
          return t.which !== 32 ? null : ((Yd = !0), Zd);
        case "textInput":
          return ((e = t.data), e === Zd && Yd ? null : e);
        default:
          return null;
      }
    }
    function Fx(e, t) {
      if (io)
        return e === "compositionend" || (!Jc && jh(e, t))
          ? ((e = zh()), (Fa = Oc = ur = null), (io = !1), e)
          : null;
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (
            !(t.ctrlKey || t.altKey || t.metaKey) ||
            (t.ctrlKey && t.altKey)
          ) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return fh && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var Px = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    };
    function qd(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Px[e.type] : t === "textarea";
    }
    function bh(e, t, r, o) {
      (qp(o),
        (t = qa(t, "onChange")),
        0 < t.length &&
          ((r = new Rc("onChange", "change", null, r, o)),
          e.push({ event: r, listeners: t })));
    }
    var mn = null,
      Tn = null;
    function _x(e) {
      Nh(e, 0);
    }
    function zs(e) {
      var t = po(e);
      if (Vp(t)) return e;
    }
    function Lx(e, t) {
      if (e === "change") return t;
    }
    var yh = !1;
    $t &&
      ($t
        ? ((ka = "oninput" in document),
          ka ||
            ((Ei = document.createElement("div")),
            Ei.setAttribute("oninput", "return;"),
            (ka = typeof Ei.oninput == "function")),
          (Ea = ka))
        : (Ea = !1),
      (yh = Ea && (!document.documentMode || 9 < document.documentMode)));
    var Ea, ka, Ei;
    function Xd() {
      mn && (mn.detachEvent("onpropertychange", Eh), (Tn = mn = null));
    }
    function Eh(e) {
      if (e.propertyName === "value" && zs(Tn)) {
        var t = [];
        (bh(t, Tn, e, Mc(e)), rh(_x, t));
      }
    }
    function Ox(e, t, r) {
      e === "focusin"
        ? (Xd(), (mn = t), (Tn = r), mn.attachEvent("onpropertychange", Eh))
        : e === "focusout" && Xd();
    }
    function Rx(e) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return zs(Tn);
    }
    function Wx(e, t) {
      if (e === "click") return zs(t);
    }
    function Jx(e, t) {
      if (e === "input" || e === "change") return zs(t);
    }
    function Hx(e, t) {
      return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
    }
    var bt = typeof Object.is == "function" ? Object.is : Hx;
    function Bn(e, t) {
      if (bt(e, t)) return !0;
      if (
        typeof e != "object" ||
        e === null ||
        typeof t != "object" ||
        t === null
      )
        return !1;
      var r = Object.keys(e),
        o = Object.keys(t);
      if (r.length !== o.length) return !1;
      for (o = 0; o < r.length; o++) {
        var n = r[o];
        if (!Pi.call(t, n) || !bt(e[n], t[n])) return !1;
      }
      return !0;
    }
    function ep(e) {
      for (; e && e.firstChild;) e = e.firstChild;
      return e;
    }
    function tp(e, t) {
      var r = ep(e);
      e = 0;
      for (var o; r;) {
        if (r.nodeType === 3) {
          if (((o = e + r.textContent.length), e <= t && o >= t))
            return { node: r, offset: t - e };
          e = o;
        }
        e: {
          for (; r;) {
            if (r.nextSibling) {
              r = r.nextSibling;
              break e;
            }
            r = r.parentNode;
          }
          r = void 0;
        }
        r = ep(r);
      }
    }
    function kh(e, t) {
      return e && t
        ? e === t
          ? !0
          : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
              ? kh(e, t.parentNode)
              : "contains" in e
                ? e.contains(t)
                : e.compareDocumentPosition
                  ? !!(e.compareDocumentPosition(t) & 16)
                  : !1
        : !1;
    }
    function vh() {
      for (var e = window, t = Va(); t instanceof e.HTMLIFrameElement;) {
        try {
          var r = typeof t.contentWindow.location.href == "string";
        } catch {
          r = !1;
        }
        if (r) e = t.contentWindow;
        else break;
        t = Va(e.document);
      }
      return t;
    }
    function Hc(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return (
        t &&
        ((t === "input" &&
          (e.type === "text" ||
            e.type === "search" ||
            e.type === "tel" ||
            e.type === "url" ||
            e.type === "password")) ||
          t === "textarea" ||
          e.contentEditable === "true")
      );
    }
    function Vx(e) {
      var t = vh(),
        r = e.focusedElem,
        o = e.selectionRange;
      if (
        t !== r &&
        r &&
        r.ownerDocument &&
        kh(r.ownerDocument.documentElement, r)
      ) {
        if (o !== null && Hc(r)) {
          if (
            ((t = o.start),
            (e = o.end),
            e === void 0 && (e = t),
            "selectionStart" in r)
          )
            ((r.selectionStart = t),
              (r.selectionEnd = Math.min(e, r.value.length)));
          else if (
            ((e =
              ((t = r.ownerDocument || document) && t.defaultView) || window),
            e.getSelection)
          ) {
            e = e.getSelection();
            var n = r.textContent.length,
              a = Math.min(o.start, n);
            ((o = o.end === void 0 ? a : Math.min(o.end, n)),
              !e.extend && a > o && ((n = o), (o = a), (a = n)),
              (n = tp(r, a)));
            var i = tp(r, o);
            n &&
              i &&
              (e.rangeCount !== 1 ||
                e.anchorNode !== n.node ||
                e.anchorOffset !== n.offset ||
                e.focusNode !== i.node ||
                e.focusOffset !== i.offset) &&
              ((t = t.createRange()),
              t.setStart(n.node, n.offset),
              e.removeAllRanges(),
              a > o
                ? (e.addRange(t), e.extend(i.node, i.offset))
                : (t.setEnd(i.node, i.offset), e.addRange(t)));
          }
        }
        for (t = [], e = r; (e = e.parentNode);)
          e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (
          typeof r.focus == "function" && r.focus(), r = 0;
          r < t.length;
          r++
        )
          ((e = t[r]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top));
      }
    }
    var Kx = $t && "documentMode" in document && 11 >= document.documentMode,
      co = null,
      rc = null,
      gn = null,
      oc = !1;
    function rp(e, t, r) {
      var o =
        r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
      oc ||
        co == null ||
        co !== Va(o) ||
        ((o = co),
        "selectionStart" in o && Hc(o)
          ? (o = { start: o.selectionStart, end: o.selectionEnd })
          : ((o = (
              (o.ownerDocument && o.ownerDocument.defaultView) ||
              window
            ).getSelection()),
            (o = {
              anchorNode: o.anchorNode,
              anchorOffset: o.anchorOffset,
              focusNode: o.focusNode,
              focusOffset: o.focusOffset,
            })),
        (gn && Bn(gn, o)) ||
          ((gn = o),
          (o = qa(rc, "onSelect")),
          0 < o.length &&
            ((t = new Rc("onSelect", "select", null, t, r)),
            e.push({ event: t, listeners: o }),
            (t.target = co))));
    }
    function va(e, t) {
      var r = {};
      return (
        (r[e.toLowerCase()] = t.toLowerCase()),
        (r["Webkit" + e] = "webkit" + t),
        (r["Moz" + e] = "moz" + t),
        r
      );
    }
    var lo = {
        animationend: va("Animation", "AnimationEnd"),
        animationiteration: va("Animation", "AnimationIteration"),
        animationstart: va("Animation", "AnimationStart"),
        transitionend: va("Transition", "TransitionEnd"),
      },
      ki = {},
      Th = {};
    $t &&
      ((Th = document.createElement("div").style),
      "AnimationEvent" in window ||
        (delete lo.animationend.animation,
        delete lo.animationiteration.animation,
        delete lo.animationstart.animation),
      "TransitionEvent" in window || delete lo.transitionend.transition);
    function fs(e) {
      if (ki[e]) return ki[e];
      if (!lo[e]) return e;
      var t = lo[e],
        r;
      for (r in t) if (t.hasOwnProperty(r) && r in Th) return (ki[e] = t[r]);
      return e;
    }
    var Bh = fs("animationend"),
      Uh = fs("animationiteration"),
      Ah = fs("animationstart"),
      Ch = fs("transitionend"),
      Sh = new Map(),
      op =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
          " ",
        );
    function vr(e, t) {
      (Sh.set(e, t), Kr(t, [e]));
    }
    for (Ta = 0; Ta < op.length; Ta++)
      ((Ba = op[Ta]),
        (np = Ba.toLowerCase()),
        (ap = Ba[0].toUpperCase() + Ba.slice(1)),
        vr(np, "on" + ap));
    var Ba, np, ap, Ta;
    vr(Bh, "onAnimationEnd");
    vr(Uh, "onAnimationIteration");
    vr(Ah, "onAnimationStart");
    vr("dblclick", "onDoubleClick");
    vr("focusin", "onFocus");
    vr("focusout", "onBlur");
    vr(Ch, "onTransitionEnd");
    ko("onMouseEnter", ["mouseout", "mouseover"]);
    ko("onMouseLeave", ["mouseout", "mouseover"]);
    ko("onPointerEnter", ["pointerout", "pointerover"]);
    ko("onPointerLeave", ["pointerout", "pointerover"]);
    Kr(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    );
    Kr(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    );
    Kr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
    Kr(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    );
    Kr(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    );
    Kr(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    );
    var dn =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
          " ",
        ),
      $x = new Set(
        "cancel close invalid load scroll toggle".split(" ").concat(dn),
      );
    function sp(e, t, r) {
      var o = e.type || "unknown-event";
      ((e.currentTarget = r), $g(o, t, void 0, e), (e.currentTarget = null));
    }
    function Nh(e, t) {
      t = (t & 4) !== 0;
      for (var r = 0; r < e.length; r++) {
        var o = e[r],
          n = o.event;
        o = o.listeners;
        e: {
          var a = void 0;
          if (t)
            for (var i = o.length - 1; 0 <= i; i--) {
              var c = o[i],
                d = c.instance,
                p = c.currentTarget;
              if (((c = c.listener), d !== a && n.isPropagationStopped()))
                break e;
              (sp(n, c, p), (a = d));
            }
          else
            for (i = 0; i < o.length; i++) {
              if (
                ((c = o[i]),
                (d = c.instance),
                (p = c.currentTarget),
                (c = c.listener),
                d !== a && n.isPropagationStopped())
              )
                break e;
              (sp(n, c, p), (a = d));
            }
        }
      }
      if ($a) throw ((e = qi), ($a = !1), (qi = null), e);
    }
    function te(e, t) {
      var r = t[cc];
      r === void 0 && (r = t[cc] = new Set());
      var o = e + "__bubble";
      r.has(o) || (Dh(t, e, 2, !1), r.add(o));
    }
    function vi(e, t, r) {
      var o = 0;
      (t && (o |= 4), Dh(r, e, o, t));
    }
    var Ua = "_reactListening" + Math.random().toString(36).slice(2);
    function Un(e) {
      if (!e[Ua]) {
        ((e[Ua] = !0),
          Op.forEach(function (r) {
            r !== "selectionchange" &&
              ($x.has(r) || vi(r, !1, e), vi(r, !0, e));
          }));
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ua] || ((t[Ua] = !0), vi("selectionchange", !1, t));
      }
    }
    function Dh(e, t, r, o) {
      switch (xh(t)) {
        case 1:
          var n = lx;
          break;
        case 4:
          n = dx;
          break;
        default:
          n = Lc;
      }
      ((r = n.bind(null, t, r, e)),
        (n = void 0),
        !Yi ||
          (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
          (n = !0),
        o
          ? n !== void 0
            ? e.addEventListener(t, r, { capture: !0, passive: n })
            : e.addEventListener(t, r, !0)
          : n !== void 0
            ? e.addEventListener(t, r, { passive: n })
            : e.addEventListener(t, r, !1));
    }
    function Ti(e, t, r, o, n) {
      var a = o;
      if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
        e: for (;;) {
          if (o === null) return;
          var i = o.tag;
          if (i === 3 || i === 4) {
            var c = o.stateNode.containerInfo;
            if (c === n || (c.nodeType === 8 && c.parentNode === n)) break;
            if (i === 4)
              for (i = o.return; i !== null;) {
                var d = i.tag;
                if (
                  (d === 3 || d === 4) &&
                  ((d = i.stateNode.containerInfo),
                  d === n || (d.nodeType === 8 && d.parentNode === n))
                )
                  return;
                i = i.return;
              }
            for (; c !== null;) {
              if (((i = Fr(c)), i === null)) return;
              if (((d = i.tag), d === 5 || d === 6)) {
                o = a = i;
                continue e;
              }
              c = c.parentNode;
            }
          }
          o = o.return;
        }
      rh(function () {
        var p = a,
          x = Mc(r),
          m = [];
        e: {
          var f = Sh.get(e);
          if (f !== void 0) {
            var j = Rc,
              y = e;
            switch (e) {
              case "keypress":
                if (Pa(r) === 0) break e;
              case "keydown":
              case "keyup":
                j = vx;
                break;
              case "focusin":
                ((y = "focus"), (j = yi));
                break;
              case "focusout":
                ((y = "blur"), (j = yi));
                break;
              case "beforeblur":
              case "afterblur":
                j = yi;
                break;
              case "click":
                if (r.button === 2) break e;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                j = $d;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                j = ux;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                j = Ux;
                break;
              case Bh:
              case Uh:
              case Ah:
                j = xx;
                break;
              case Ch:
                j = Cx;
                break;
              case "scroll":
                j = px;
                break;
              case "wheel":
                j = Nx;
                break;
              case "copy":
              case "cut":
              case "paste":
                j = fx;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                j = Qd;
            }
            var k = (t & 4) !== 0,
              T = !k && e === "scroll",
              u = k ? (f !== null ? f + "Capture" : null) : f;
            k = [];
            for (var h = p, g; h !== null;) {
              g = h;
              var b = g.stateNode;
              if (
                (g.tag === 5 &&
                  b !== null &&
                  ((g = b),
                  u !== null &&
                    ((b = yn(h, u)), b != null && k.push(An(h, b, g)))),
                T)
              )
                break;
              h = h.return;
            }
            0 < k.length &&
              ((f = new j(f, y, null, r, x)),
              m.push({ event: f, listeners: k }));
          }
        }
        if ((t & 7) === 0) {
          e: {
            if (
              ((f = e === "mouseover" || e === "pointerover"),
              (j = e === "mouseout" || e === "pointerout"),
              f &&
                r !== Qi &&
                (y = r.relatedTarget || r.fromElement) &&
                (Fr(y) || y[Gt]))
            )
              break e;
            if (
              (j || f) &&
              ((f =
                x.window === x
                  ? x
                  : (f = x.ownerDocument)
                    ? f.defaultView || f.parentWindow
                    : window),
              j
                ? ((y = r.relatedTarget || r.toElement),
                  (j = p),
                  (y = y ? Fr(y) : null),
                  y !== null &&
                    ((T = $r(y)), y !== T || (y.tag !== 5 && y.tag !== 6)) &&
                    (y = null))
                : ((j = null), (y = p)),
              j !== y)
            ) {
              if (
                ((k = $d),
                (b = "onMouseLeave"),
                (u = "onMouseEnter"),
                (h = "mouse"),
                (e === "pointerout" || e === "pointerover") &&
                  ((k = Qd),
                  (b = "onPointerLeave"),
                  (u = "onPointerEnter"),
                  (h = "pointer")),
                (T = j == null ? f : po(j)),
                (g = y == null ? f : po(y)),
                (f = new k(b, h + "leave", j, r, x)),
                (f.target = T),
                (f.relatedTarget = g),
                (b = null),
                Fr(x) === p &&
                  ((k = new k(u, h + "enter", y, r, x)),
                  (k.target = g),
                  (k.relatedTarget = T),
                  (b = k)),
                (T = b),
                j && y)
              )
                t: {
                  for (k = j, u = y, h = 0, g = k; g; g = no(g)) h++;
                  for (g = 0, b = u; b; b = no(b)) g++;
                  for (; 0 < h - g;) ((k = no(k)), h--);
                  for (; 0 < g - h;) ((u = no(u)), g--);
                  for (; h--;) {
                    if (k === u || (u !== null && k === u.alternate)) break t;
                    ((k = no(k)), (u = no(u)));
                  }
                  k = null;
                }
              else k = null;
              (j !== null && ip(m, f, j, k, !1),
                y !== null && T !== null && ip(m, T, y, k, !0));
            }
          }
          e: {
            if (
              ((f = p ? po(p) : window),
              (j = f.nodeName && f.nodeName.toLowerCase()),
              j === "select" || (j === "input" && f.type === "file"))
            )
              var E = Lx;
            else if (qd(f))
              if (yh) E = Jx;
              else {
                E = Rx;
                var N = Ox;
              }
            else
              (j = f.nodeName) &&
                j.toLowerCase() === "input" &&
                (f.type === "checkbox" || f.type === "radio") &&
                (E = Wx);
            if (E && (E = E(e, p))) {
              bh(m, E, r, x);
              break e;
            }
            (N && N(e, f, p),
              e === "focusout" &&
                (N = f._wrapperState) &&
                N.controlled &&
                f.type === "number" &&
                Hi(f, "number", f.value));
          }
          switch (((N = p ? po(p) : window), e)) {
            case "focusin":
              (qd(N) || N.contentEditable === "true") &&
                ((co = N), (rc = p), (gn = null));
              break;
            case "focusout":
              gn = rc = co = null;
              break;
            case "mousedown":
              oc = !0;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              ((oc = !1), rp(m, r, x));
              break;
            case "selectionchange":
              if (Kx) break;
            case "keydown":
            case "keyup":
              rp(m, r, x);
          }
          var D;
          if (Jc)
            e: {
              switch (e) {
                case "compositionstart":
                  var F = "onCompositionStart";
                  break e;
                case "compositionend":
                  F = "onCompositionEnd";
                  break e;
                case "compositionupdate":
                  F = "onCompositionUpdate";
                  break e;
              }
              F = void 0;
            }
          else
            io
              ? jh(e, r) && (F = "onCompositionEnd")
              : e === "keydown" &&
                r.keyCode === 229 &&
                (F = "onCompositionStart");
          (F &&
            (fh &&
              r.locale !== "ko" &&
              (io || F !== "onCompositionStart"
                ? F === "onCompositionEnd" && io && (D = zh())
                : ((ur = x),
                  (Oc = "value" in ur ? ur.value : ur.textContent),
                  (io = !0))),
            (N = qa(p, F)),
            0 < N.length &&
              ((F = new Gd(F, e, null, r, x)),
              m.push({ event: F, listeners: N }),
              D ? (F.data = D) : ((D = wh(r)), D !== null && (F.data = D)))),
            (D = Ix ? Mx(e, r) : Fx(e, r)) &&
              ((p = qa(p, "onBeforeInput")),
              0 < p.length &&
                ((x = new Gd("onBeforeInput", "beforeinput", null, r, x)),
                m.push({ event: x, listeners: p }),
                (x.data = D))));
        }
        Nh(m, t);
      });
    }
    function An(e, t, r) {
      return { instance: e, listener: t, currentTarget: r };
    }
    function qa(e, t) {
      for (var r = t + "Capture", o = []; e !== null;) {
        var n = e,
          a = n.stateNode;
        (n.tag === 5 &&
          a !== null &&
          ((n = a),
          (a = yn(e, r)),
          a != null && o.unshift(An(e, a, n)),
          (a = yn(e, t)),
          a != null && o.push(An(e, a, n))),
          (e = e.return));
      }
      return o;
    }
    function no(e) {
      if (e === null) return null;
      do e = e.return;
      while (e && e.tag !== 5);
      return e || null;
    }
    function ip(e, t, r, o, n) {
      for (var a = t._reactName, i = []; r !== null && r !== o;) {
        var c = r,
          d = c.alternate,
          p = c.stateNode;
        if (d !== null && d === o) break;
        (c.tag === 5 &&
          p !== null &&
          ((c = p),
          n
            ? ((d = yn(r, a)), d != null && i.unshift(An(r, d, c)))
            : n || ((d = yn(r, a)), d != null && i.push(An(r, d, c)))),
          (r = r.return));
      }
      i.length !== 0 && e.push({ event: t, listeners: i });
    }
    var Gx = /\r\n?/g,
      Qx = / |\uFFFD/g;
    function cp(e) {
      return (typeof e == "string" ? e : "" + e)
        .replace(
          Gx,
          `
`,
        )
        .replace(Qx, "");
    }
    function Aa(e, t, r) {
      if (((t = cp(t)), cp(e) !== t && r)) throw Error(B(425));
    }
    function Xa() {}
    var nc = null,
      ac = null;
    function sc(e, t) {
      return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
          t.dangerouslySetInnerHTML !== null &&
          t.dangerouslySetInnerHTML.__html != null)
      );
    }
    var ic = typeof setTimeout == "function" ? setTimeout : void 0,
      Zx = typeof clearTimeout == "function" ? clearTimeout : void 0,
      lp = typeof Promise == "function" ? Promise : void 0,
      Yx =
        typeof queueMicrotask == "function"
          ? queueMicrotask
          : typeof lp < "u"
            ? function (e) {
                return lp.resolve(null).then(e).catch(qx);
              }
            : ic;
    function qx(e) {
      setTimeout(function () {
        throw e;
      });
    }
    function Bi(e, t) {
      var r = t,
        o = 0;
      do {
        var n = r.nextSibling;
        if ((e.removeChild(r), n && n.nodeType === 8))
          if (((r = n.data), r === "/$")) {
            if (o === 0) {
              (e.removeChild(n), vn(t));
              return;
            }
            o--;
          } else (r !== "$" && r !== "$?" && r !== "$!") || o++;
        r = n;
      } while (r);
      vn(t);
    }
    function fr(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
          if (t === "/$") return null;
        }
      }
      return e;
    }
    function dp(e) {
      e = e.previousSibling;
      for (var t = 0; e;) {
        if (e.nodeType === 8) {
          var r = e.data;
          if (r === "$" || r === "$!" || r === "$?") {
            if (t === 0) return e;
            t--;
          } else r === "/$" && t++;
        }
        e = e.previousSibling;
      }
      return null;
    }
    var No = Math.random().toString(36).slice(2),
      Ut = "__reactFiber$" + No,
      Cn = "__reactProps$" + No,
      Gt = "__reactContainer$" + No,
      cc = "__reactEvents$" + No,
      Xx = "__reactListeners$" + No,
      ez = "__reactHandles$" + No;
    function Fr(e) {
      var t = e[Ut];
      if (t) return t;
      for (var r = e.parentNode; r;) {
        if ((t = r[Gt] || r[Ut])) {
          if (
            ((r = t.alternate),
            t.child !== null || (r !== null && r.child !== null))
          )
            for (e = dp(e); e !== null;) {
              if ((r = e[Ut])) return r;
              e = dp(e);
            }
          return t;
        }
        ((e = r), (r = e.parentNode));
      }
      return null;
    }
    function Ln(e) {
      return (
        (e = e[Ut] || e[Gt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e
      );
    }
    function po(e) {
      if (e.tag === 5 || e.tag === 6) return e.stateNode;
      throw Error(B(33));
    }
    function js(e) {
      return e[Cn] || null;
    }
    var lc = [],
      ho = -1;
    function Tr(e) {
      return { current: e };
    }
    function re(e) {
      0 > ho || ((e.current = lc[ho]), (lc[ho] = null), ho--);
    }
    function q(e, t) {
      (ho++, (lc[ho] = e.current), (e.current = t));
    }
    var kr = {},
      Pe = Tr(kr),
      $e = Tr(!1),
      Rr = kr;
    function vo(e, t) {
      var r = e.type.contextTypes;
      if (!r) return kr;
      var o = e.stateNode;
      if (o && o.__reactInternalMemoizedUnmaskedChildContext === t)
        return o.__reactInternalMemoizedMaskedChildContext;
      var n = {},
        a;
      for (a in r) n[a] = t[a];
      return (
        o &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = n)),
        n
      );
    }
    function Ge(e) {
      return ((e = e.childContextTypes), e != null);
    }
    function es() {
      (re($e), re(Pe));
    }
    function pp(e, t, r) {
      if (Pe.current !== kr) throw Error(B(168));
      (q(Pe, t), q($e, r));
    }
    function Ih(e, t, r) {
      var o = e.stateNode;
      if (((t = t.childContextTypes), typeof o.getChildContext != "function"))
        return r;
      o = o.getChildContext();
      for (var n in o)
        if (!(n in t)) throw Error(B(108, Og(e) || "Unknown", n));
      return pe({}, r, o);
    }
    function ts(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          kr),
        (Rr = Pe.current),
        q(Pe, e),
        q($e, $e.current),
        !0
      );
    }
    function hp(e, t, r) {
      var o = e.stateNode;
      if (!o) throw Error(B(169));
      (r
        ? ((e = Ih(e, t, Rr)),
          (o.__reactInternalMemoizedMergedChildContext = e),
          re($e),
          re(Pe),
          q(Pe, e))
        : re($e),
        q($e, r));
    }
    var Jt = null,
      ws = !1,
      Ui = !1;
    function Mh(e) {
      Jt === null ? (Jt = [e]) : Jt.push(e);
    }
    function tz(e) {
      ((ws = !0), Mh(e));
    }
    function Br() {
      if (!Ui && Jt !== null) {
        Ui = !0;
        var e = 0,
          t = Z;
        try {
          var r = Jt;
          for (Z = 1; e < r.length; e++) {
            var o = r[e];
            do o = o(!0);
            while (o !== null);
          }
          ((Jt = null), (ws = !1));
        } catch (n) {
          throw (Jt !== null && (Jt = Jt.slice(e + 1)), sh(Fc, Br), n);
        } finally {
          ((Z = t), (Ui = !1));
        }
      }
      return null;
    }
    var uo = [],
      mo = 0,
      rs = null,
      os = 0,
      st = [],
      it = 0,
      Wr = null,
      Ht = 1,
      Vt = "";
    function Ir(e, t) {
      ((uo[mo++] = os), (uo[mo++] = rs), (rs = e), (os = t));
    }
    function Fh(e, t, r) {
      ((st[it++] = Ht), (st[it++] = Vt), (st[it++] = Wr), (Wr = e));
      var o = Ht;
      e = Vt;
      var n = 32 - jt(o) - 1;
      ((o &= ~(1 << n)), (r += 1));
      var a = 32 - jt(t) + n;
      if (30 < a) {
        var i = n - (n % 5);
        ((a = (o & ((1 << i) - 1)).toString(32)),
          (o >>= i),
          (n -= i),
          (Ht = (1 << (32 - jt(t) + n)) | (r << n) | o),
          (Vt = a + e));
      } else ((Ht = (1 << a) | (r << n) | o), (Vt = e));
    }
    function Vc(e) {
      e.return !== null && (Ir(e, 1), Fh(e, 1, 0));
    }
    function Kc(e) {
      for (; e === rs;)
        ((rs = uo[--mo]), (uo[mo] = null), (os = uo[--mo]), (uo[mo] = null));
      for (; e === Wr;)
        ((Wr = st[--it]),
          (st[it] = null),
          (Vt = st[--it]),
          (st[it] = null),
          (Ht = st[--it]),
          (st[it] = null));
    }
    var et = null,
      Xe = null,
      se = !1,
      ft = null;
    function Ph(e, t) {
      var r = ct(5, null, null, 0);
      ((r.elementType = "DELETED"),
        (r.stateNode = t),
        (r.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r));
    }
    function up(e, t) {
      switch (e.tag) {
        case 5:
          var r = e.type;
          return (
            (t =
              t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
                ? null
                : t),
            t !== null
              ? ((e.stateNode = t), (et = e), (Xe = fr(t.firstChild)), !0)
              : !1
          );
        case 6:
          return (
            (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
            t !== null ? ((e.stateNode = t), (et = e), (Xe = null), !0) : !1
          );
        case 13:
          return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
              ? ((r = Wr !== null ? { id: Ht, overflow: Vt } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: r,
                  retryLane: 1073741824,
                }),
                (r = ct(18, null, null, 0)),
                (r.stateNode = t),
                (r.return = e),
                (e.child = r),
                (et = e),
                (Xe = null),
                !0)
              : !1
          );
        default:
          return !1;
      }
    }
    function dc(e) {
      return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
    }
    function pc(e) {
      if (se) {
        var t = Xe;
        if (t) {
          var r = t;
          if (!up(e, t)) {
            if (dc(e)) throw Error(B(418));
            t = fr(r.nextSibling);
            var o = et;
            t && up(e, t)
              ? Ph(o, r)
              : ((e.flags = (e.flags & -4097) | 2), (se = !1), (et = e));
          }
        } else {
          if (dc(e)) throw Error(B(418));
          ((e.flags = (e.flags & -4097) | 2), (se = !1), (et = e));
        }
      }
    }
    function mp(e) {
      for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;
      )
        e = e.return;
      et = e;
    }
    function Ca(e) {
      if (e !== et) return !1;
      if (!se) return (mp(e), (se = !0), !1);
      var t;
      if (
        ((t = e.tag !== 3) &&
          !(t = e.tag !== 5) &&
          ((t = e.type),
          (t = t !== "head" && t !== "body" && !sc(e.type, e.memoizedProps))),
        t && (t = Xe))
      ) {
        if (dc(e)) throw (_h(), Error(B(418)));
        for (; t;) (Ph(e, t), (t = fr(t.nextSibling)));
      }
      if ((mp(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
          throw Error(B(317));
        e: {
          for (e = e.nextSibling, t = 0; e;) {
            if (e.nodeType === 8) {
              var r = e.data;
              if (r === "/$") {
                if (t === 0) {
                  Xe = fr(e.nextSibling);
                  break e;
                }
                t--;
              } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
            }
            e = e.nextSibling;
          }
          Xe = null;
        }
      } else Xe = et ? fr(e.stateNode.nextSibling) : null;
      return !0;
    }
    function _h() {
      for (var e = Xe; e;) e = fr(e.nextSibling);
    }
    function To() {
      ((Xe = et = null), (se = !1));
    }
    function $c(e) {
      ft === null ? (ft = [e]) : ft.push(e);
    }
    var rz = Yt.ReactCurrentBatchConfig;
    function rn(e, t, r) {
      if (
        ((e = r.ref),
        e !== null && typeof e != "function" && typeof e != "object")
      ) {
        if (r._owner) {
          if (((r = r._owner), r)) {
            if (r.tag !== 1) throw Error(B(309));
            var o = r.stateNode;
          }
          if (!o) throw Error(B(147, e));
          var n = o,
            a = "" + e;
          return t !== null &&
            t.ref !== null &&
            typeof t.ref == "function" &&
            t.ref._stringRef === a
            ? t.ref
            : ((t = function (i) {
                var c = n.refs;
                i === null ? delete c[a] : (c[a] = i);
              }),
              (t._stringRef = a),
              t);
        }
        if (typeof e != "string") throw Error(B(284));
        if (!r._owner) throw Error(B(290, e));
      }
      return e;
    }
    function Sa(e, t) {
      throw (
        (e = Object.prototype.toString.call(t)),
        Error(
          B(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e,
          ),
        )
      );
    }
    function gp(e) {
      var t = e._init;
      return t(e._payload);
    }
    function Lh(e) {
      function t(u, h) {
        if (e) {
          var g = u.deletions;
          g === null ? ((u.deletions = [h]), (u.flags |= 16)) : g.push(h);
        }
      }
      function r(u, h) {
        if (!e) return null;
        for (; h !== null;) (t(u, h), (h = h.sibling));
        return null;
      }
      function o(u, h) {
        for (u = new Map(); h !== null;)
          (h.key !== null ? u.set(h.key, h) : u.set(h.index, h),
            (h = h.sibling));
        return u;
      }
      function n(u, h) {
        return ((u = yr(u, h)), (u.index = 0), (u.sibling = null), u);
      }
      function a(u, h, g) {
        return (
          (u.index = g),
          e
            ? ((g = u.alternate),
              g !== null
                ? ((g = g.index), g < h ? ((u.flags |= 2), h) : g)
                : ((u.flags |= 2), h))
            : ((u.flags |= 1048576), h)
        );
      }
      function i(u) {
        return (e && u.alternate === null && (u.flags |= 2), u);
      }
      function c(u, h, g, b) {
        return h === null || h.tag !== 6
          ? ((h = Mi(g, u.mode, b)), (h.return = u), h)
          : ((h = n(h, g)), (h.return = u), h);
      }
      function d(u, h, g, b) {
        var E = g.type;
        return E === so
          ? x(u, h, g.props.children, b, g.key)
          : h !== null &&
              (h.elementType === E ||
                (typeof E == "object" &&
                  E !== null &&
                  E.$$typeof === lr &&
                  gp(E) === h.type))
            ? ((b = n(h, g.props)), (b.ref = rn(u, h, g)), (b.return = u), b)
            : ((b = Ha(g.type, g.key, g.props, null, u.mode, b)),
              (b.ref = rn(u, h, g)),
              (b.return = u),
              b);
      }
      function p(u, h, g, b) {
        return h === null ||
          h.tag !== 4 ||
          h.stateNode.containerInfo !== g.containerInfo ||
          h.stateNode.implementation !== g.implementation
          ? ((h = Fi(g, u.mode, b)), (h.return = u), h)
          : ((h = n(h, g.children || [])), (h.return = u), h);
      }
      function x(u, h, g, b, E) {
        return h === null || h.tag !== 7
          ? ((h = Or(g, u.mode, b, E)), (h.return = u), h)
          : ((h = n(h, g)), (h.return = u), h);
      }
      function m(u, h, g) {
        if ((typeof h == "string" && h !== "") || typeof h == "number")
          return ((h = Mi("" + h, u.mode, g)), (h.return = u), h);
        if (typeof h == "object" && h !== null) {
          switch (h.$$typeof) {
            case xa:
              return (
                (g = Ha(h.type, h.key, h.props, null, u.mode, g)),
                (g.ref = rn(u, null, h)),
                (g.return = u),
                g
              );
            case ao:
              return ((h = Fi(h, u.mode, g)), (h.return = u), h);
            case lr:
              var b = h._init;
              return m(u, b(h._payload), g);
          }
          if (cn(h) || qo(h))
            return ((h = Or(h, u.mode, g, null)), (h.return = u), h);
          Sa(u, h);
        }
        return null;
      }
      function f(u, h, g, b) {
        var E = h !== null ? h.key : null;
        if ((typeof g == "string" && g !== "") || typeof g == "number")
          return E !== null ? null : c(u, h, "" + g, b);
        if (typeof g == "object" && g !== null) {
          switch (g.$$typeof) {
            case xa:
              return g.key === E ? d(u, h, g, b) : null;
            case ao:
              return g.key === E ? p(u, h, g, b) : null;
            case lr:
              return ((E = g._init), f(u, h, E(g._payload), b));
          }
          if (cn(g) || qo(g)) return E !== null ? null : x(u, h, g, b, null);
          Sa(u, g);
        }
        return null;
      }
      function j(u, h, g, b, E) {
        if ((typeof b == "string" && b !== "") || typeof b == "number")
          return ((u = u.get(g) || null), c(h, u, "" + b, E));
        if (typeof b == "object" && b !== null) {
          switch (b.$$typeof) {
            case xa:
              return (
                (u = u.get(b.key === null ? g : b.key) || null),
                d(h, u, b, E)
              );
            case ao:
              return (
                (u = u.get(b.key === null ? g : b.key) || null),
                p(h, u, b, E)
              );
            case lr:
              var N = b._init;
              return j(u, h, g, N(b._payload), E);
          }
          if (cn(b) || qo(b))
            return ((u = u.get(g) || null), x(h, u, b, E, null));
          Sa(h, b);
        }
        return null;
      }
      function y(u, h, g, b) {
        for (
          var E = null, N = null, D = h, F = (h = 0), K = null;
          D !== null && F < g.length;
          F++
        ) {
          D.index > F ? ((K = D), (D = null)) : (K = D.sibling);
          var w = f(u, D, g[F], b);
          if (w === null) {
            D === null && (D = K);
            break;
          }
          (e && D && w.alternate === null && t(u, D),
            (h = a(w, h, F)),
            N === null ? (E = w) : (N.sibling = w),
            (N = w),
            (D = K));
        }
        if (F === g.length) return (r(u, D), se && Ir(u, F), E);
        if (D === null) {
          for (; F < g.length; F++)
            ((D = m(u, g[F], b)),
              D !== null &&
                ((h = a(D, h, F)),
                N === null ? (E = D) : (N.sibling = D),
                (N = D)));
          return (se && Ir(u, F), E);
        }
        for (D = o(u, D); F < g.length; F++)
          ((K = j(D, u, F, g[F], b)),
            K !== null &&
              (e &&
                K.alternate !== null &&
                D.delete(K.key === null ? F : K.key),
              (h = a(K, h, F)),
              N === null ? (E = K) : (N.sibling = K),
              (N = K)));
        return (
          e &&
            D.forEach(function (X) {
              return t(u, X);
            }),
          se && Ir(u, F),
          E
        );
      }
      function k(u, h, g, b) {
        var E = qo(g);
        if (typeof E != "function") throw Error(B(150));
        if (((g = E.call(g)), g == null)) throw Error(B(151));
        for (
          var N = (E = null), D = h, F = (h = 0), K = null, w = g.next();
          D !== null && !w.done;
          F++, w = g.next()
        ) {
          D.index > F ? ((K = D), (D = null)) : (K = D.sibling);
          var X = f(u, D, w.value, b);
          if (X === null) {
            D === null && (D = K);
            break;
          }
          (e && D && X.alternate === null && t(u, D),
            (h = a(X, h, F)),
            N === null ? (E = X) : (N.sibling = X),
            (N = X),
            (D = K));
        }
        if (w.done) return (r(u, D), se && Ir(u, F), E);
        if (D === null) {
          for (; !w.done; F++, w = g.next())
            ((w = m(u, w.value, b)),
              w !== null &&
                ((h = a(w, h, F)),
                N === null ? (E = w) : (N.sibling = w),
                (N = w)));
          return (se && Ir(u, F), E);
        }
        for (D = o(u, D); !w.done; F++, w = g.next())
          ((w = j(D, u, F, w.value, b)),
            w !== null &&
              (e &&
                w.alternate !== null &&
                D.delete(w.key === null ? F : w.key),
              (h = a(w, h, F)),
              N === null ? (E = w) : (N.sibling = w),
              (N = w)));
        return (
          e &&
            D.forEach(function (ve) {
              return t(u, ve);
            }),
          se && Ir(u, F),
          E
        );
      }
      function T(u, h, g, b) {
        if (
          (typeof g == "object" &&
            g !== null &&
            g.type === so &&
            g.key === null &&
            (g = g.props.children),
          typeof g == "object" && g !== null)
        ) {
          switch (g.$$typeof) {
            case xa:
              e: {
                for (var E = g.key, N = h; N !== null;) {
                  if (N.key === E) {
                    if (((E = g.type), E === so)) {
                      if (N.tag === 7) {
                        (r(u, N.sibling),
                          (h = n(N, g.props.children)),
                          (h.return = u),
                          (u = h));
                        break e;
                      }
                    } else if (
                      N.elementType === E ||
                      (typeof E == "object" &&
                        E !== null &&
                        E.$$typeof === lr &&
                        gp(E) === N.type)
                    ) {
                      (r(u, N.sibling),
                        (h = n(N, g.props)),
                        (h.ref = rn(u, N, g)),
                        (h.return = u),
                        (u = h));
                      break e;
                    }
                    r(u, N);
                    break;
                  } else t(u, N);
                  N = N.sibling;
                }
                g.type === so
                  ? ((h = Or(g.props.children, u.mode, b, g.key)),
                    (h.return = u),
                    (u = h))
                  : ((b = Ha(g.type, g.key, g.props, null, u.mode, b)),
                    (b.ref = rn(u, h, g)),
                    (b.return = u),
                    (u = b));
              }
              return i(u);
            case ao:
              e: {
                for (N = g.key; h !== null;) {
                  if (h.key === N)
                    if (
                      h.tag === 4 &&
                      h.stateNode.containerInfo === g.containerInfo &&
                      h.stateNode.implementation === g.implementation
                    ) {
                      (r(u, h.sibling),
                        (h = n(h, g.children || [])),
                        (h.return = u),
                        (u = h));
                      break e;
                    } else {
                      r(u, h);
                      break;
                    }
                  else t(u, h);
                  h = h.sibling;
                }
                ((h = Fi(g, u.mode, b)), (h.return = u), (u = h));
              }
              return i(u);
            case lr:
              return ((N = g._init), T(u, h, N(g._payload), b));
          }
          if (cn(g)) return y(u, h, g, b);
          if (qo(g)) return k(u, h, g, b);
          Sa(u, g);
        }
        return (typeof g == "string" && g !== "") || typeof g == "number"
          ? ((g = "" + g),
            h !== null && h.tag === 6
              ? (r(u, h.sibling), (h = n(h, g)), (h.return = u), (u = h))
              : (r(u, h), (h = Mi(g, u.mode, b)), (h.return = u), (u = h)),
            i(u))
          : r(u, h);
      }
      return T;
    }
    var Bo = Lh(!0),
      Oh = Lh(!1),
      ns = Tr(null),
      as = null,
      go = null,
      Gc = null;
    function Qc() {
      Gc = go = as = null;
    }
    function Zc(e) {
      var t = ns.current;
      (re(ns), (e._currentValue = t));
    }
    function hc(e, t, r) {
      for (; e !== null;) {
        var o = e.alternate;
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
            : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
          e === r)
        )
          break;
        e = e.return;
      }
    }
    function yo(e, t) {
      ((as = e),
        (Gc = go = null),
        (e = e.dependencies),
        e !== null &&
          e.firstContext !== null &&
          ((e.lanes & t) !== 0 && (Ke = !0), (e.firstContext = null)));
    }
    function dt(e) {
      var t = e._currentValue;
      if (Gc !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), go === null)) {
          if (as === null) throw Error(B(308));
          ((go = e), (as.dependencies = { lanes: 0, firstContext: e }));
        } else go = go.next = e;
      return t;
    }
    var Pr = null;
    function Yc(e) {
      Pr === null ? (Pr = [e]) : Pr.push(e);
    }
    function Rh(e, t, r, o) {
      var n = t.interleaved;
      return (
        n === null ? ((r.next = r), Yc(t)) : ((r.next = n.next), (n.next = r)),
        (t.interleaved = r),
        Qt(e, o)
      );
    }
    function Qt(e, t) {
      e.lanes |= t;
      var r = e.alternate;
      for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null;)
        ((e.childLanes |= t),
          (r = e.alternate),
          r !== null && (r.childLanes |= t),
          (r = e),
          (e = e.return));
      return r.tag === 3 ? r.stateNode : null;
    }
    var dr = !1;
    function qc(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      };
    }
    function Wh(e, t) {
      ((e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          }));
    }
    function Kt(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      };
    }
    function jr(e, t, r) {
      var o = e.updateQueue;
      if (o === null) return null;
      if (((o = o.shared), ($ & 2) !== 0)) {
        var n = o.pending;
        return (
          n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
          (o.pending = t),
          Qt(e, r)
        );
      }
      return (
        (n = o.interleaved),
        n === null ? ((t.next = t), Yc(o)) : ((t.next = n.next), (n.next = t)),
        (o.interleaved = t),
        Qt(e, r)
      );
    }
    function _a(e, t, r) {
      if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (r & 4194240) !== 0))
      ) {
        var o = t.lanes;
        ((o &= e.pendingLanes), (r |= o), (t.lanes = r), Pc(e, r));
      }
    }
    function xp(e, t) {
      var r = e.updateQueue,
        o = e.alternate;
      if (o !== null && ((o = o.updateQueue), r === o)) {
        var n = null,
          a = null;
        if (((r = r.firstBaseUpdate), r !== null)) {
          do {
            var i = {
              eventTime: r.eventTime,
              lane: r.lane,
              tag: r.tag,
              payload: r.payload,
              callback: r.callback,
              next: null,
            };
            (a === null ? (n = a = i) : (a = a.next = i), (r = r.next));
          } while (r !== null);
          a === null ? (n = a = t) : (a = a.next = t);
        } else n = a = t;
        ((r = {
          baseState: o.baseState,
          firstBaseUpdate: n,
          lastBaseUpdate: a,
          shared: o.shared,
          effects: o.effects,
        }),
          (e.updateQueue = r));
        return;
      }
      ((e = r.lastBaseUpdate),
        e === null ? (r.firstBaseUpdate = t) : (e.next = t),
        (r.lastBaseUpdate = t));
    }
    function ss(e, t, r, o) {
      var n = e.updateQueue;
      dr = !1;
      var a = n.firstBaseUpdate,
        i = n.lastBaseUpdate,
        c = n.shared.pending;
      if (c !== null) {
        n.shared.pending = null;
        var d = c,
          p = d.next;
        ((d.next = null), i === null ? (a = p) : (i.next = p), (i = d));
        var x = e.alternate;
        x !== null &&
          ((x = x.updateQueue),
          (c = x.lastBaseUpdate),
          c !== i &&
            (c === null ? (x.firstBaseUpdate = p) : (c.next = p),
            (x.lastBaseUpdate = d)));
      }
      if (a !== null) {
        var m = n.baseState;
        ((i = 0), (x = p = d = null), (c = a));
        do {
          var f = c.lane,
            j = c.eventTime;
          if ((o & f) === f) {
            x !== null &&
              (x = x.next =
                {
                  eventTime: j,
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: c.callback,
                  next: null,
                });
            e: {
              var y = e,
                k = c;
              switch (((f = t), (j = r), k.tag)) {
                case 1:
                  if (((y = k.payload), typeof y == "function")) {
                    m = y.call(j, m, f);
                    break e;
                  }
                  m = y;
                  break e;
                case 3:
                  y.flags = (y.flags & -65537) | 128;
                case 0:
                  if (
                    ((y = k.payload),
                    (f = typeof y == "function" ? y.call(j, m, f) : y),
                    f == null)
                  )
                    break e;
                  m = pe({}, m, f);
                  break e;
                case 2:
                  dr = !0;
              }
            }
            c.callback !== null &&
              c.lane !== 0 &&
              ((e.flags |= 64),
              (f = n.effects),
              f === null ? (n.effects = [c]) : f.push(c));
          } else
            ((j = {
              eventTime: j,
              lane: f,
              tag: c.tag,
              payload: c.payload,
              callback: c.callback,
              next: null,
            }),
              x === null ? ((p = x = j), (d = m)) : (x = x.next = j),
              (i |= f));
          if (((c = c.next), c === null)) {
            if (((c = n.shared.pending), c === null)) break;
            ((f = c),
              (c = f.next),
              (f.next = null),
              (n.lastBaseUpdate = f),
              (n.shared.pending = null));
          }
        } while (!0);
        if (
          (x === null && (d = m),
          (n.baseState = d),
          (n.firstBaseUpdate = p),
          (n.lastBaseUpdate = x),
          (t = n.shared.interleaved),
          t !== null)
        ) {
          n = t;
          do ((i |= n.lane), (n = n.next));
          while (n !== t);
        } else a === null && (n.shared.lanes = 0);
        ((Hr |= i), (e.lanes = i), (e.memoizedState = m));
      }
    }
    function zp(e, t, r) {
      if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
          var o = e[t],
            n = o.callback;
          if (n !== null) {
            if (((o.callback = null), (o = r), typeof n != "function"))
              throw Error(B(191, n));
            n.call(o);
          }
        }
    }
    var On = {},
      Ct = Tr(On),
      Sn = Tr(On),
      Nn = Tr(On);
    function _r(e) {
      if (e === On) throw Error(B(174));
      return e;
    }
    function Xc(e, t) {
      switch ((q(Nn, t), q(Sn, e), q(Ct, On), (e = t.nodeType), e)) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : Ki(null, "");
          break;
        default:
          ((e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = Ki(t, e)));
      }
      (re(Ct), q(Ct, t));
    }
    function Uo() {
      (re(Ct), re(Sn), re(Nn));
    }
    function Jh(e) {
      _r(Nn.current);
      var t = _r(Ct.current),
        r = Ki(t, e.type);
      t !== r && (q(Sn, e), q(Ct, r));
    }
    function el(e) {
      Sn.current === e && (re(Ct), re(Sn));
    }
    var le = Tr(0);
    function is(e) {
      for (var t = e; t !== null;) {
        if (t.tag === 13) {
          var r = t.memoizedState;
          if (
            r !== null &&
            ((r = r.dehydrated),
            r === null || r.data === "$?" || r.data === "$!")
          )
            return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) return null;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
      return null;
    }
    var Ai = [];
    function tl() {
      for (var e = 0; e < Ai.length; e++)
        Ai[e]._workInProgressVersionPrimary = null;
      Ai.length = 0;
    }
    var La = Yt.ReactCurrentDispatcher,
      Ci = Yt.ReactCurrentBatchConfig,
      Jr = 0,
      de = null,
      je = null,
      ye = null,
      cs = !1,
      xn = !1,
      Dn = 0,
      oz = 0;
    function Ie() {
      throw Error(B(321));
    }
    function rl(e, t) {
      if (t === null) return !1;
      for (var r = 0; r < t.length && r < e.length; r++)
        if (!bt(e[r], t[r])) return !1;
      return !0;
    }
    function ol(e, t, r, o, n, a) {
      if (
        ((Jr = a),
        (de = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (La.current = e === null || e.memoizedState === null ? iz : cz),
        (e = r(o, n)),
        xn)
      ) {
        a = 0;
        do {
          if (((xn = !1), (Dn = 0), 25 <= a)) throw Error(B(301));
          ((a += 1),
            (ye = je = null),
            (t.updateQueue = null),
            (La.current = lz),
            (e = r(o, n)));
        } while (xn);
      }
      if (
        ((La.current = ls),
        (t = je !== null && je.next !== null),
        (Jr = 0),
        (ye = je = de = null),
        (cs = !1),
        t)
      )
        throw Error(B(300));
      return e;
    }
    function nl() {
      var e = Dn !== 0;
      return ((Dn = 0), e);
    }
    function Bt() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      };
      return (
        ye === null ? (de.memoizedState = ye = e) : (ye = ye.next = e),
        ye
      );
    }
    function pt() {
      if (je === null) {
        var e = de.alternate;
        e = e !== null ? e.memoizedState : null;
      } else e = je.next;
      var t = ye === null ? de.memoizedState : ye.next;
      if (t !== null) ((ye = t), (je = e));
      else {
        if (e === null) throw Error(B(310));
        ((je = e),
          (e = {
            memoizedState: je.memoizedState,
            baseState: je.baseState,
            baseQueue: je.baseQueue,
            queue: je.queue,
            next: null,
          }),
          ye === null ? (de.memoizedState = ye = e) : (ye = ye.next = e));
      }
      return ye;
    }
    function In(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Si(e) {
      var t = pt(),
        r = t.queue;
      if (r === null) throw Error(B(311));
      r.lastRenderedReducer = e;
      var o = je,
        n = o.baseQueue,
        a = r.pending;
      if (a !== null) {
        if (n !== null) {
          var i = n.next;
          ((n.next = a.next), (a.next = i));
        }
        ((o.baseQueue = n = a), (r.pending = null));
      }
      if (n !== null) {
        ((a = n.next), (o = o.baseState));
        var c = (i = null),
          d = null,
          p = a;
        do {
          var x = p.lane;
          if ((Jr & x) === x)
            (d !== null &&
              (d = d.next =
                {
                  lane: 0,
                  action: p.action,
                  hasEagerState: p.hasEagerState,
                  eagerState: p.eagerState,
                  next: null,
                }),
              (o = p.hasEagerState ? p.eagerState : e(o, p.action)));
          else {
            var m = {
              lane: x,
              action: p.action,
              hasEagerState: p.hasEagerState,
              eagerState: p.eagerState,
              next: null,
            };
            (d === null ? ((c = d = m), (i = o)) : (d = d.next = m),
              (de.lanes |= x),
              (Hr |= x));
          }
          p = p.next;
        } while (p !== null && p !== a);
        (d === null ? (i = o) : (d.next = c),
          bt(o, t.memoizedState) || (Ke = !0),
          (t.memoizedState = o),
          (t.baseState = i),
          (t.baseQueue = d),
          (r.lastRenderedState = o));
      }
      if (((e = r.interleaved), e !== null)) {
        n = e;
        do ((a = n.lane), (de.lanes |= a), (Hr |= a), (n = n.next));
        while (n !== e);
      } else n === null && (r.lanes = 0);
      return [t.memoizedState, r.dispatch];
    }
    function Ni(e) {
      var t = pt(),
        r = t.queue;
      if (r === null) throw Error(B(311));
      r.lastRenderedReducer = e;
      var o = r.dispatch,
        n = r.pending,
        a = t.memoizedState;
      if (n !== null) {
        r.pending = null;
        var i = (n = n.next);
        do ((a = e(a, i.action)), (i = i.next));
        while (i !== n);
        (bt(a, t.memoizedState) || (Ke = !0),
          (t.memoizedState = a),
          t.baseQueue === null && (t.baseState = a),
          (r.lastRenderedState = a));
      }
      return [a, o];
    }
    function Hh() {}
    function Vh(e, t) {
      var r = de,
        o = pt(),
        n = t(),
        a = !bt(o.memoizedState, n);
      if (
        (a && ((o.memoizedState = n), (Ke = !0)),
        (o = o.queue),
        al(Gh.bind(null, r, o, e), [e]),
        o.getSnapshot !== t || a || (ye !== null && ye.memoizedState.tag & 1))
      ) {
        if (
          ((r.flags |= 2048),
          Mn(9, $h.bind(null, r, o, n, t), void 0, null),
          Ee === null)
        )
          throw Error(B(349));
        (Jr & 30) !== 0 || Kh(r, t, n);
      }
      return n;
    }
    function Kh(e, t, r) {
      ((e.flags |= 16384),
        (e = { getSnapshot: t, value: r }),
        (t = de.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (de.updateQueue = t),
            (t.stores = [e]))
          : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e)));
    }
    function $h(e, t, r, o) {
      ((t.value = r), (t.getSnapshot = o), Qh(t) && Zh(e));
    }
    function Gh(e, t, r) {
      return r(function () {
        Qh(t) && Zh(e);
      });
    }
    function Qh(e) {
      var t = e.getSnapshot;
      e = e.value;
      try {
        var r = t();
        return !bt(e, r);
      } catch {
        return !0;
      }
    }
    function Zh(e) {
      var t = Qt(e, 1);
      t !== null && wt(t, e, 1, -1);
    }
    function fp(e) {
      var t = Bt();
      return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: In,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = sz.bind(null, de, e)),
        [t.memoizedState, e]
      );
    }
    function Mn(e, t, r, o) {
      return (
        (e = { tag: e, create: t, destroy: r, deps: o, next: null }),
        (t = de.updateQueue),
        t === null
          ? ((t = { lastEffect: null, stores: null }),
            (de.updateQueue = t),
            (t.lastEffect = e.next = e))
          : ((r = t.lastEffect),
            r === null
              ? (t.lastEffect = e.next = e)
              : ((o = r.next), (r.next = e), (e.next = o), (t.lastEffect = e))),
        e
      );
    }
    function Yh() {
      return pt().memoizedState;
    }
    function Oa(e, t, r, o) {
      var n = Bt();
      ((de.flags |= e),
        (n.memoizedState = Mn(1 | t, r, void 0, o === void 0 ? null : o)));
    }
    function bs(e, t, r, o) {
      var n = pt();
      o = o === void 0 ? null : o;
      var a = void 0;
      if (je !== null) {
        var i = je.memoizedState;
        if (((a = i.destroy), o !== null && rl(o, i.deps))) {
          n.memoizedState = Mn(t, r, a, o);
          return;
        }
      }
      ((de.flags |= e), (n.memoizedState = Mn(1 | t, r, a, o)));
    }
    function jp(e, t) {
      return Oa(8390656, 8, e, t);
    }
    function al(e, t) {
      return bs(2048, 8, e, t);
    }
    function qh(e, t) {
      return bs(4, 2, e, t);
    }
    function Xh(e, t) {
      return bs(4, 4, e, t);
    }
    function eu(e, t) {
      if (typeof t == "function")
        return (
          (e = e()),
          t(e),
          function () {
            t(null);
          }
        );
      if (t != null)
        return (
          (e = e()),
          (t.current = e),
          function () {
            t.current = null;
          }
        );
    }
    function tu(e, t, r) {
      return (
        (r = r != null ? r.concat([e]) : null),
        bs(4, 4, eu.bind(null, t, e), r)
      );
    }
    function sl() {}
    function ru(e, t) {
      var r = pt();
      t = t === void 0 ? null : t;
      var o = r.memoizedState;
      return o !== null && t !== null && rl(t, o[1])
        ? o[0]
        : ((r.memoizedState = [e, t]), e);
    }
    function ou(e, t) {
      var r = pt();
      t = t === void 0 ? null : t;
      var o = r.memoizedState;
      return o !== null && t !== null && rl(t, o[1])
        ? o[0]
        : ((e = e()), (r.memoizedState = [e, t]), e);
    }
    function nu(e, t, r) {
      return (Jr & 21) === 0
        ? (e.baseState && ((e.baseState = !1), (Ke = !0)),
          (e.memoizedState = r))
        : (bt(r, t) ||
            ((r = lh()), (de.lanes |= r), (Hr |= r), (e.baseState = !0)),
          t);
    }
    function nz(e, t) {
      var r = Z;
      ((Z = r !== 0 && 4 > r ? r : 4), e(!0));
      var o = Ci.transition;
      Ci.transition = {};
      try {
        (e(!1), t());
      } finally {
        ((Z = r), (Ci.transition = o));
      }
    }
    function au() {
      return pt().memoizedState;
    }
    function az(e, t, r) {
      var o = br(e);
      if (
        ((r = {
          lane: o,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        su(e))
      )
        iu(t, r);
      else if (((r = Rh(e, t, r, o)), r !== null)) {
        var n = Oe();
        (wt(r, e, o, n), cu(r, t, o));
      }
    }
    function sz(e, t, r) {
      var o = br(e),
        n = {
          lane: o,
          action: r,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
      if (su(e)) iu(t, n);
      else {
        var a = e.alternate;
        if (
          e.lanes === 0 &&
          (a === null || a.lanes === 0) &&
          ((a = t.lastRenderedReducer), a !== null)
        )
          try {
            var i = t.lastRenderedState,
              c = a(i, r);
            if (((n.hasEagerState = !0), (n.eagerState = c), bt(c, i))) {
              var d = t.interleaved;
              (d === null
                ? ((n.next = n), Yc(t))
                : ((n.next = d.next), (d.next = n)),
                (t.interleaved = n));
              return;
            }
          } catch {}
        ((r = Rh(e, t, n, o)),
          r !== null && ((n = Oe()), wt(r, e, o, n), cu(r, t, o)));
      }
    }
    function su(e) {
      var t = e.alternate;
      return e === de || (t !== null && t === de);
    }
    function iu(e, t) {
      xn = cs = !0;
      var r = e.pending;
      (r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
        (e.pending = t));
    }
    function cu(e, t, r) {
      if ((r & 4194240) !== 0) {
        var o = t.lanes;
        ((o &= e.pendingLanes), (r |= o), (t.lanes = r), Pc(e, r));
      }
    }
    var ls = {
        readContext: dt,
        useCallback: Ie,
        useContext: Ie,
        useEffect: Ie,
        useImperativeHandle: Ie,
        useInsertionEffect: Ie,
        useLayoutEffect: Ie,
        useMemo: Ie,
        useReducer: Ie,
        useRef: Ie,
        useState: Ie,
        useDebugValue: Ie,
        useDeferredValue: Ie,
        useTransition: Ie,
        useMutableSource: Ie,
        useSyncExternalStore: Ie,
        useId: Ie,
        unstable_isNewReconciler: !1,
      },
      iz = {
        readContext: dt,
        useCallback: function (e, t) {
          return ((Bt().memoizedState = [e, t === void 0 ? null : t]), e);
        },
        useContext: dt,
        useEffect: jp,
        useImperativeHandle: function (e, t, r) {
          return (
            (r = r != null ? r.concat([e]) : null),
            Oa(4194308, 4, eu.bind(null, t, e), r)
          );
        },
        useLayoutEffect: function (e, t) {
          return Oa(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
          return Oa(4, 2, e, t);
        },
        useMemo: function (e, t) {
          var r = Bt();
          return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (r.memoizedState = [e, t]),
            e
          );
        },
        useReducer: function (e, t, r) {
          var o = Bt();
          return (
            (t = r !== void 0 ? r(t) : t),
            (o.memoizedState = o.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (o.queue = e),
            (e = e.dispatch = az.bind(null, de, e)),
            [o.memoizedState, e]
          );
        },
        useRef: function (e) {
          var t = Bt();
          return ((e = { current: e }), (t.memoizedState = e));
        },
        useState: fp,
        useDebugValue: sl,
        useDeferredValue: function (e) {
          return (Bt().memoizedState = e);
        },
        useTransition: function () {
          var e = fp(!1),
            t = e[0];
          return ((e = nz.bind(null, e[1])), (Bt().memoizedState = e), [t, e]);
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, r) {
          var o = de,
            n = Bt();
          if (se) {
            if (r === void 0) throw Error(B(407));
            r = r();
          } else {
            if (((r = t()), Ee === null)) throw Error(B(349));
            (Jr & 30) !== 0 || Kh(o, t, r);
          }
          n.memoizedState = r;
          var a = { value: r, getSnapshot: t };
          return (
            (n.queue = a),
            jp(Gh.bind(null, o, a, e), [e]),
            (o.flags |= 2048),
            Mn(9, $h.bind(null, o, a, r, t), void 0, null),
            r
          );
        },
        useId: function () {
          var e = Bt(),
            t = Ee.identifierPrefix;
          if (se) {
            var r = Vt,
              o = Ht;
            ((r = (o & ~(1 << (32 - jt(o) - 1))).toString(32) + r),
              (t = ":" + t + "R" + r),
              (r = Dn++),
              0 < r && (t += "H" + r.toString(32)),
              (t += ":"));
          } else ((r = oz++), (t = ":" + t + "r" + r.toString(32) + ":"));
          return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
      },
      cz = {
        readContext: dt,
        useCallback: ru,
        useContext: dt,
        useEffect: al,
        useImperativeHandle: tu,
        useInsertionEffect: qh,
        useLayoutEffect: Xh,
        useMemo: ou,
        useReducer: Si,
        useRef: Yh,
        useState: function () {
          return Si(In);
        },
        useDebugValue: sl,
        useDeferredValue: function (e) {
          var t = pt();
          return nu(t, je.memoizedState, e);
        },
        useTransition: function () {
          var e = Si(In)[0],
            t = pt().memoizedState;
          return [e, t];
        },
        useMutableSource: Hh,
        useSyncExternalStore: Vh,
        useId: au,
        unstable_isNewReconciler: !1,
      },
      lz = {
        readContext: dt,
        useCallback: ru,
        useContext: dt,
        useEffect: al,
        useImperativeHandle: tu,
        useInsertionEffect: qh,
        useLayoutEffect: Xh,
        useMemo: ou,
        useReducer: Ni,
        useRef: Yh,
        useState: function () {
          return Ni(In);
        },
        useDebugValue: sl,
        useDeferredValue: function (e) {
          var t = pt();
          return je === null
            ? (t.memoizedState = e)
            : nu(t, je.memoizedState, e);
        },
        useTransition: function () {
          var e = Ni(In)[0],
            t = pt().memoizedState;
          return [e, t];
        },
        useMutableSource: Hh,
        useSyncExternalStore: Vh,
        useId: au,
        unstable_isNewReconciler: !1,
      };
    function xt(e, t) {
      if (e && e.defaultProps) {
        ((t = pe({}, t)), (e = e.defaultProps));
        for (var r in e) t[r] === void 0 && (t[r] = e[r]);
        return t;
      }
      return t;
    }
    function uc(e, t, r, o) {
      ((t = e.memoizedState),
        (r = r(o, t)),
        (r = r == null ? t : pe({}, t, r)),
        (e.memoizedState = r),
        e.lanes === 0 && (e.updateQueue.baseState = r));
    }
    var ys = {
      isMounted: function (e) {
        return (e = e._reactInternals) ? $r(e) === e : !1;
      },
      enqueueSetState: function (e, t, r) {
        e = e._reactInternals;
        var o = Oe(),
          n = br(e),
          a = Kt(o, n);
        ((a.payload = t),
          r != null && (a.callback = r),
          (t = jr(e, a, n)),
          t !== null && (wt(t, e, n, o), _a(t, e, n)));
      },
      enqueueReplaceState: function (e, t, r) {
        e = e._reactInternals;
        var o = Oe(),
          n = br(e),
          a = Kt(o, n);
        ((a.tag = 1),
          (a.payload = t),
          r != null && (a.callback = r),
          (t = jr(e, a, n)),
          t !== null && (wt(t, e, n, o), _a(t, e, n)));
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var r = Oe(),
          o = br(e),
          n = Kt(r, o);
        ((n.tag = 2),
          t != null && (n.callback = t),
          (t = jr(e, n, o)),
          t !== null && (wt(t, e, o, r), _a(t, e, o)));
      },
    };
    function wp(e, t, r, o, n, a, i) {
      return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
          ? e.shouldComponentUpdate(o, a, i)
          : t.prototype && t.prototype.isPureReactComponent
            ? !Bn(r, o) || !Bn(n, a)
            : !0
      );
    }
    function lu(e, t, r) {
      var o = !1,
        n = kr,
        a = t.contextType;
      return (
        typeof a == "object" && a !== null
          ? (a = dt(a))
          : ((n = Ge(t) ? Rr : Pe.current),
            (o = t.contextTypes),
            (a = (o = o != null) ? vo(e, n) : kr)),
        (t = new t(r, a)),
        (e.memoizedState =
          t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = ys),
        (e.stateNode = t),
        (t._reactInternals = e),
        o &&
          ((e = e.stateNode),
          (e.__reactInternalMemoizedUnmaskedChildContext = n),
          (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
      );
    }
    function bp(e, t, r, o) {
      ((e = t.state),
        typeof t.componentWillReceiveProps == "function" &&
          t.componentWillReceiveProps(r, o),
        typeof t.UNSAFE_componentWillReceiveProps == "function" &&
          t.UNSAFE_componentWillReceiveProps(r, o),
        t.state !== e && ys.enqueueReplaceState(t, t.state, null));
    }
    function mc(e, t, r, o) {
      var n = e.stateNode;
      ((n.props = r), (n.state = e.memoizedState), (n.refs = {}), qc(e));
      var a = t.contextType;
      (typeof a == "object" && a !== null
        ? (n.context = dt(a))
        : ((a = Ge(t) ? Rr : Pe.current), (n.context = vo(e, a))),
        (n.state = e.memoizedState),
        (a = t.getDerivedStateFromProps),
        typeof a == "function" && (uc(e, t, a, r), (n.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((t = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          t !== n.state && ys.enqueueReplaceState(n, n.state, null),
          ss(e, r, n, o),
          (n.state = e.memoizedState)),
        typeof n.componentDidMount == "function" && (e.flags |= 4194308));
    }
    function Ao(e, t) {
      try {
        var r = "",
          o = t;
        do ((r += Lg(o)), (o = o.return));
        while (o);
        var n = r;
      } catch (a) {
        n =
          `
Error generating stack: ` +
          a.message +
          `
` +
          a.stack;
      }
      return { value: e, source: t, stack: n, digest: null };
    }
    function Di(e, t, r) {
      return { value: e, source: null, stack: r ?? null, digest: t ?? null };
    }
    function gc(e, t) {
      try {
        console.error(t.value);
      } catch (r) {
        setTimeout(function () {
          throw r;
        });
      }
    }
    var dz = typeof WeakMap == "function" ? WeakMap : Map;
    function du(e, t, r) {
      ((r = Kt(-1, r)), (r.tag = 3), (r.payload = { element: null }));
      var o = t.value;
      return (
        (r.callback = function () {
          (ps || ((ps = !0), (vc = o)), gc(e, t));
        }),
        r
      );
    }
    function pu(e, t, r) {
      ((r = Kt(-1, r)), (r.tag = 3));
      var o = e.type.getDerivedStateFromError;
      if (typeof o == "function") {
        var n = t.value;
        ((r.payload = function () {
          return o(n);
        }),
          (r.callback = function () {
            gc(e, t);
          }));
      }
      var a = e.stateNode;
      return (
        a !== null &&
          typeof a.componentDidCatch == "function" &&
          (r.callback = function () {
            (gc(e, t),
              typeof o != "function" &&
                (wr === null ? (wr = new Set([this])) : wr.add(this)));
            var i = t.stack;
            this.componentDidCatch(t.value, {
              componentStack: i !== null ? i : "",
            });
          }),
        r
      );
    }
    function yp(e, t, r) {
      var o = e.pingCache;
      if (o === null) {
        o = e.pingCache = new dz();
        var n = new Set();
        o.set(t, n);
      } else ((n = o.get(t)), n === void 0 && ((n = new Set()), o.set(t, n)));
      n.has(r) || (n.add(r), (e = kz.bind(null, e, t, r)), t.then(e, e));
    }
    function Ep(e) {
      do {
        var t;
        if (
          ((t = e.tag === 13) &&
            ((t = e.memoizedState),
            (t = t !== null ? t.dehydrated !== null : !0)),
          t)
        )
          return e;
        e = e.return;
      } while (e !== null);
      return null;
    }
    function kp(e, t, r, o, n) {
      return (e.mode & 1) === 0
        ? (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (r.flags |= 131072),
              (r.flags &= -52805),
              r.tag === 1 &&
                (r.alternate === null
                  ? (r.tag = 17)
                  : ((t = Kt(-1, 1)), (t.tag = 2), jr(r, t, 1))),
              (r.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = n), e);
    }
    var pz = Yt.ReactCurrentOwner,
      Ke = !1;
    function Le(e, t, r, o) {
      t.child = e === null ? Oh(t, null, r, o) : Bo(t, e.child, r, o);
    }
    function vp(e, t, r, o, n) {
      r = r.render;
      var a = t.ref;
      return (
        yo(t, n),
        (o = ol(e, t, r, o, a, n)),
        (r = nl()),
        e !== null && !Ke
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~n),
            Zt(e, t, n))
          : (se && r && Vc(t), (t.flags |= 1), Le(e, t, o, n), t.child)
      );
    }
    function Tp(e, t, r, o, n) {
      if (e === null) {
        var a = r.type;
        return typeof a == "function" &&
          !ml(a) &&
          a.defaultProps === void 0 &&
          r.compare === null &&
          r.defaultProps === void 0
          ? ((t.tag = 15), (t.type = a), hu(e, t, a, o, n))
          : ((e = Ha(r.type, null, o, t, t.mode, n)),
            (e.ref = t.ref),
            (e.return = t),
            (t.child = e));
      }
      if (((a = e.child), (e.lanes & n) === 0)) {
        var i = a.memoizedProps;
        if (
          ((r = r.compare),
          (r = r !== null ? r : Bn),
          r(i, o) && e.ref === t.ref)
        )
          return Zt(e, t, n);
      }
      return (
        (t.flags |= 1),
        (e = yr(a, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
      );
    }
    function hu(e, t, r, o, n) {
      if (e !== null) {
        var a = e.memoizedProps;
        if (Bn(a, o) && e.ref === t.ref)
          if (((Ke = !1), (t.pendingProps = o = a), (e.lanes & n) !== 0))
            (e.flags & 131072) !== 0 && (Ke = !0);
          else return ((t.lanes = e.lanes), Zt(e, t, n));
      }
      return xc(e, t, r, o, n);
    }
    function uu(e, t, r) {
      var o = t.pendingProps,
        n = o.children,
        a = e !== null ? e.memoizedState : null;
      if (o.mode === "hidden")
        if ((t.mode & 1) === 0)
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            q(zo, qe),
            (qe |= r));
        else {
          if ((r & 1073741824) === 0)
            return (
              (e = a !== null ? a.baseLanes | r : r),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              q(zo, qe),
              (qe |= e),
              null
            );
          ((t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (o = a !== null ? a.baseLanes : r),
            q(zo, qe),
            (qe |= o));
        }
      else
        (a !== null
          ? ((o = a.baseLanes | r), (t.memoizedState = null))
          : (o = r),
          q(zo, qe),
          (qe |= o));
      return (Le(e, t, n, r), t.child);
    }
    function mu(e, t) {
      var r = t.ref;
      ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
        ((t.flags |= 512), (t.flags |= 2097152));
    }
    function xc(e, t, r, o, n) {
      var a = Ge(r) ? Rr : Pe.current;
      return (
        (a = vo(t, a)),
        yo(t, n),
        (r = ol(e, t, r, o, a, n)),
        (o = nl()),
        e !== null && !Ke
          ? ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~n),
            Zt(e, t, n))
          : (se && o && Vc(t), (t.flags |= 1), Le(e, t, r, n), t.child)
      );
    }
    function Bp(e, t, r, o, n) {
      if (Ge(r)) {
        var a = !0;
        ts(t);
      } else a = !1;
      if ((yo(t, n), t.stateNode === null))
        (Ra(e, t), lu(t, r, o), mc(t, r, o, n), (o = !0));
      else if (e === null) {
        var i = t.stateNode,
          c = t.memoizedProps;
        i.props = c;
        var d = i.context,
          p = r.contextType;
        typeof p == "object" && p !== null
          ? (p = dt(p))
          : ((p = Ge(r) ? Rr : Pe.current), (p = vo(t, p)));
        var x = r.getDerivedStateFromProps,
          m =
            typeof x == "function" ||
            typeof i.getSnapshotBeforeUpdate == "function";
        (m ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((c !== o || d !== p) && bp(t, i, o, p)),
          (dr = !1));
        var f = t.memoizedState;
        ((i.state = f),
          ss(t, o, i, n),
          (d = t.memoizedState),
          c !== o || f !== d || $e.current || dr
            ? (typeof x == "function" &&
                (uc(t, r, x, o), (d = t.memoizedState)),
              (c = dr || wp(t, r, c, o, f, d, p))
                ? (m ||
                    (typeof i.UNSAFE_componentWillMount != "function" &&
                      typeof i.componentWillMount != "function") ||
                    (typeof i.componentWillMount == "function" &&
                      i.componentWillMount(),
                    typeof i.UNSAFE_componentWillMount == "function" &&
                      i.UNSAFE_componentWillMount()),
                  typeof i.componentDidMount == "function" &&
                    (t.flags |= 4194308))
                : (typeof i.componentDidMount == "function" &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = o),
                  (t.memoizedState = d)),
              (i.props = o),
              (i.state = d),
              (i.context = p),
              (o = c))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (o = !1)));
      } else {
        ((i = t.stateNode),
          Wh(e, t),
          (c = t.memoizedProps),
          (p = t.type === t.elementType ? c : xt(t.type, c)),
          (i.props = p),
          (m = t.pendingProps),
          (f = i.context),
          (d = r.contextType),
          typeof d == "object" && d !== null
            ? (d = dt(d))
            : ((d = Ge(r) ? Rr : Pe.current), (d = vo(t, d))));
        var j = r.getDerivedStateFromProps;
        ((x =
          typeof j == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((c !== m || f !== d) && bp(t, i, o, d)),
          (dr = !1),
          (f = t.memoizedState),
          (i.state = f),
          ss(t, o, i, n));
        var y = t.memoizedState;
        c !== m || f !== y || $e.current || dr
          ? (typeof j == "function" && (uc(t, r, j, o), (y = t.memoizedState)),
            (p = dr || wp(t, r, p, o, f, y, d) || !1)
              ? (x ||
                  (typeof i.UNSAFE_componentWillUpdate != "function" &&
                    typeof i.componentWillUpdate != "function") ||
                  (typeof i.componentWillUpdate == "function" &&
                    i.componentWillUpdate(o, y, d),
                  typeof i.UNSAFE_componentWillUpdate == "function" &&
                    i.UNSAFE_componentWillUpdate(o, y, d)),
                typeof i.componentDidUpdate == "function" && (t.flags |= 4),
                typeof i.getSnapshotBeforeUpdate == "function" &&
                  (t.flags |= 1024))
              : (typeof i.componentDidUpdate != "function" ||
                  (c === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                typeof i.getSnapshotBeforeUpdate != "function" ||
                  (c === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = o),
                (t.memoizedState = y)),
            (i.props = o),
            (i.state = y),
            (i.context = d),
            (o = p))
          : (typeof i.componentDidUpdate != "function" ||
              (c === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (c === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (o = !1));
      }
      return zc(e, t, r, o, a, n);
    }
    function zc(e, t, r, o, n, a) {
      mu(e, t);
      var i = (t.flags & 128) !== 0;
      if (!o && !i) return (n && hp(t, r, !1), Zt(e, t, a));
      ((o = t.stateNode), (pz.current = t));
      var c =
        i && typeof r.getDerivedStateFromError != "function"
          ? null
          : o.render();
      return (
        (t.flags |= 1),
        e !== null && i
          ? ((t.child = Bo(t, e.child, null, a)), (t.child = Bo(t, null, c, a)))
          : Le(e, t, c, a),
        (t.memoizedState = o.state),
        n && hp(t, r, !0),
        t.child
      );
    }
    function gu(e) {
      var t = e.stateNode;
      (t.pendingContext
        ? pp(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && pp(e, t.context, !1),
        Xc(e, t.containerInfo));
    }
    function Up(e, t, r, o, n) {
      return (To(), $c(n), (t.flags |= 256), Le(e, t, r, o), t.child);
    }
    var fc = { dehydrated: null, treeContext: null, retryLane: 0 };
    function jc(e) {
      return { baseLanes: e, cachePool: null, transitions: null };
    }
    function xu(e, t, r) {
      var o = t.pendingProps,
        n = le.current,
        a = !1,
        i = (t.flags & 128) !== 0,
        c;
      if (
        ((c = i) ||
          (c = e !== null && e.memoizedState === null ? !1 : (n & 2) !== 0),
        c
          ? ((a = !0), (t.flags &= -129))
          : (e === null || e.memoizedState !== null) && (n |= 1),
        q(le, n & 1),
        e === null)
      )
        return (
          pc(t),
          (e = t.memoizedState),
          e !== null && ((e = e.dehydrated), e !== null)
            ? ((t.mode & 1) === 0
                ? (t.lanes = 1)
                : e.data === "$!"
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824),
              null)
            : ((i = o.children),
              (e = o.fallback),
              a
                ? ((o = t.mode),
                  (a = t.child),
                  (i = { mode: "hidden", children: i }),
                  (o & 1) === 0 && a !== null
                    ? ((a.childLanes = 0), (a.pendingProps = i))
                    : (a = vs(i, o, 0, null)),
                  (e = Or(e, o, r, null)),
                  (a.return = t),
                  (e.return = t),
                  (a.sibling = e),
                  (t.child = a),
                  (t.child.memoizedState = jc(r)),
                  (t.memoizedState = fc),
                  e)
                : il(t, i))
        );
      if (
        ((n = e.memoizedState), n !== null && ((c = n.dehydrated), c !== null))
      )
        return hz(e, t, i, o, c, n, r);
      if (a) {
        ((a = o.fallback), (i = t.mode), (n = e.child), (c = n.sibling));
        var d = { mode: "hidden", children: o.children };
        return (
          (i & 1) === 0 && t.child !== n
            ? ((o = t.child),
              (o.childLanes = 0),
              (o.pendingProps = d),
              (t.deletions = null))
            : ((o = yr(n, d)), (o.subtreeFlags = n.subtreeFlags & 14680064)),
          c !== null
            ? (a = yr(c, a))
            : ((a = Or(a, i, r, null)), (a.flags |= 2)),
          (a.return = t),
          (o.return = t),
          (o.sibling = a),
          (t.child = o),
          (o = a),
          (a = t.child),
          (i = e.child.memoizedState),
          (i =
            i === null
              ? jc(r)
              : {
                  baseLanes: i.baseLanes | r,
                  cachePool: null,
                  transitions: i.transitions,
                }),
          (a.memoizedState = i),
          (a.childLanes = e.childLanes & ~r),
          (t.memoizedState = fc),
          o
        );
      }
      return (
        (a = e.child),
        (e = a.sibling),
        (o = yr(a, { mode: "visible", children: o.children })),
        (t.mode & 1) === 0 && (o.lanes = r),
        (o.return = t),
        (o.sibling = null),
        e !== null &&
          ((r = t.deletions),
          r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
        (t.child = o),
        (t.memoizedState = null),
        o
      );
    }
    function il(e, t) {
      return (
        (t = vs({ mode: "visible", children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
      );
    }
    function Na(e, t, r, o) {
      return (
        o !== null && $c(o),
        Bo(t, e.child, null, r),
        (e = il(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
      );
    }
    function hz(e, t, r, o, n, a, i) {
      if (r)
        return t.flags & 256
          ? ((t.flags &= -257), (o = Di(Error(B(422)))), Na(e, t, i, o))
          : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((a = o.fallback),
              (n = t.mode),
              (o = vs({ mode: "visible", children: o.children }, n, 0, null)),
              (a = Or(a, n, i, null)),
              (a.flags |= 2),
              (o.return = t),
              (a.return = t),
              (o.sibling = a),
              (t.child = o),
              (t.mode & 1) !== 0 && Bo(t, e.child, null, i),
              (t.child.memoizedState = jc(i)),
              (t.memoizedState = fc),
              a);
      if ((t.mode & 1) === 0) return Na(e, t, i, null);
      if (n.data === "$!") {
        if (((o = n.nextSibling && n.nextSibling.dataset), o)) var c = o.dgst;
        return (
          (o = c),
          (a = Error(B(419))),
          (o = Di(a, o, void 0)),
          Na(e, t, i, o)
        );
      }
      if (((c = (i & e.childLanes) !== 0), Ke || c)) {
        if (((o = Ee), o !== null)) {
          switch (i & -i) {
            case 4:
              n = 2;
              break;
            case 16:
              n = 8;
              break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              n = 32;
              break;
            case 536870912:
              n = 268435456;
              break;
            default:
              n = 0;
          }
          ((n = (n & (o.suspendedLanes | i)) !== 0 ? 0 : n),
            n !== 0 &&
              n !== a.retryLane &&
              ((a.retryLane = n), Qt(e, n), wt(o, e, n, -1)));
        }
        return (ul(), (o = Di(Error(B(421)))), Na(e, t, i, o));
      }
      return n.data === "$?"
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = vz.bind(null, e)),
          (n._reactRetry = t),
          null)
        : ((e = a.treeContext),
          (Xe = fr(n.nextSibling)),
          (et = t),
          (se = !0),
          (ft = null),
          e !== null &&
            ((st[it++] = Ht),
            (st[it++] = Vt),
            (st[it++] = Wr),
            (Ht = e.id),
            (Vt = e.overflow),
            (Wr = t)),
          (t = il(t, o.children)),
          (t.flags |= 4096),
          t);
    }
    function Ap(e, t, r) {
      e.lanes |= t;
      var o = e.alternate;
      (o !== null && (o.lanes |= t), hc(e.return, t, r));
    }
    function Ii(e, t, r, o, n) {
      var a = e.memoizedState;
      a === null
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: o,
            tail: r,
            tailMode: n,
          })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = o),
          (a.tail = r),
          (a.tailMode = n));
    }
    function zu(e, t, r) {
      var o = t.pendingProps,
        n = o.revealOrder,
        a = o.tail;
      if ((Le(e, t, o.children, r), (o = le.current), (o & 2) !== 0))
        ((o = (o & 1) | 2), (t.flags |= 128));
      else {
        if (e !== null && (e.flags & 128) !== 0)
          e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Ap(e, r, t);
            else if (e.tag === 19) Ap(e, r, t);
            else if (e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
              if (e.return === null || e.return === t) break e;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        o &= 1;
      }
      if ((q(le, o), (t.mode & 1) === 0)) t.memoizedState = null;
      else
        switch (n) {
          case "forwards":
            for (r = t.child, n = null; r !== null;)
              ((e = r.alternate),
                e !== null && is(e) === null && (n = r),
                (r = r.sibling));
            ((r = n),
              r === null
                ? ((n = t.child), (t.child = null))
                : ((n = r.sibling), (r.sibling = null)),
              Ii(t, !1, n, r, a));
            break;
          case "backwards":
            for (r = null, n = t.child, t.child = null; n !== null;) {
              if (((e = n.alternate), e !== null && is(e) === null)) {
                t.child = n;
                break;
              }
              ((e = n.sibling), (n.sibling = r), (r = n), (n = e));
            }
            Ii(t, !0, r, null, a);
            break;
          case "together":
            Ii(t, !1, null, null, void 0);
            break;
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ra(e, t) {
      (t.mode & 1) === 0 &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
    }
    function Zt(e, t, r) {
      if (
        (e !== null && (t.dependencies = e.dependencies),
        (Hr |= t.lanes),
        (r & t.childLanes) === 0)
      )
        return null;
      if (e !== null && t.child !== e.child) throw Error(B(153));
      if (t.child !== null) {
        for (
          e = t.child, r = yr(e, e.pendingProps), t.child = r, r.return = t;
          e.sibling !== null;
        )
          ((e = e.sibling),
            (r = r.sibling = yr(e, e.pendingProps)),
            (r.return = t));
        r.sibling = null;
      }
      return t.child;
    }
    function uz(e, t, r) {
      switch (t.tag) {
        case 3:
          (gu(t), To());
          break;
        case 5:
          Jh(t);
          break;
        case 1:
          Ge(t.type) && ts(t);
          break;
        case 4:
          Xc(t, t.stateNode.containerInfo);
          break;
        case 10:
          var o = t.type._context,
            n = t.memoizedProps.value;
          (q(ns, o._currentValue), (o._currentValue = n));
          break;
        case 13:
          if (((o = t.memoizedState), o !== null))
            return o.dehydrated !== null
              ? (q(le, le.current & 1), (t.flags |= 128), null)
              : (r & t.child.childLanes) !== 0
                ? xu(e, t, r)
                : (q(le, le.current & 1),
                  (e = Zt(e, t, r)),
                  e !== null ? e.sibling : null);
          q(le, le.current & 1);
          break;
        case 19:
          if (((o = (r & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
            if (o) return zu(e, t, r);
            t.flags |= 128;
          }
          if (
            ((n = t.memoizedState),
            n !== null &&
              ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
            q(le, le.current),
            o)
          )
            break;
          return null;
        case 22:
        case 23:
          return ((t.lanes = 0), uu(e, t, r));
      }
      return Zt(e, t, r);
    }
    var fu, wc, ju, wu;
    fu = function (e, t) {
      for (var r = t.child; r !== null;) {
        if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
        else if (r.tag !== 4 && r.child !== null) {
          ((r.child.return = r), (r = r.child));
          continue;
        }
        if (r === t) break;
        for (; r.sibling === null;) {
          if (r.return === null || r.return === t) return;
          r = r.return;
        }
        ((r.sibling.return = r.return), (r = r.sibling));
      }
    };
    wc = function () {};
    ju = function (e, t, r, o) {
      var n = e.memoizedProps;
      if (n !== o) {
        ((e = t.stateNode), _r(Ct.current));
        var a = null;
        switch (r) {
          case "input":
            ((n = Wi(e, n)), (o = Wi(e, o)), (a = []));
            break;
          case "select":
            ((n = pe({}, n, { value: void 0 })),
              (o = pe({}, o, { value: void 0 })),
              (a = []));
            break;
          case "textarea":
            ((n = Vi(e, n)), (o = Vi(e, o)), (a = []));
            break;
          default:
            typeof n.onClick != "function" &&
              typeof o.onClick == "function" &&
              (e.onclick = Xa);
        }
        $i(r, o);
        var i;
        r = null;
        for (p in n)
          if (!o.hasOwnProperty(p) && n.hasOwnProperty(p) && n[p] != null)
            if (p === "style") {
              var c = n[p];
              for (i in c) c.hasOwnProperty(i) && (r || (r = {}), (r[i] = ""));
            } else
              p !== "dangerouslySetInnerHTML" &&
                p !== "children" &&
                p !== "suppressContentEditableWarning" &&
                p !== "suppressHydrationWarning" &&
                p !== "autoFocus" &&
                (wn.hasOwnProperty(p)
                  ? a || (a = [])
                  : (a = a || []).push(p, null));
        for (p in o) {
          var d = o[p];
          if (
            ((c = n?.[p]),
            o.hasOwnProperty(p) && d !== c && (d != null || c != null))
          )
            if (p === "style")
              if (c) {
                for (i in c)
                  !c.hasOwnProperty(i) ||
                    (d && d.hasOwnProperty(i)) ||
                    (r || (r = {}), (r[i] = ""));
                for (i in d)
                  d.hasOwnProperty(i) &&
                    c[i] !== d[i] &&
                    (r || (r = {}), (r[i] = d[i]));
              } else (r || (a || (a = []), a.push(p, r)), (r = d));
            else
              p === "dangerouslySetInnerHTML"
                ? ((d = d ? d.__html : void 0),
                  (c = c ? c.__html : void 0),
                  d != null && c !== d && (a = a || []).push(p, d))
                : p === "children"
                  ? (typeof d != "string" && typeof d != "number") ||
                    (a = a || []).push(p, "" + d)
                  : p !== "suppressContentEditableWarning" &&
                    p !== "suppressHydrationWarning" &&
                    (wn.hasOwnProperty(p)
                      ? (d != null && p === "onScroll" && te("scroll", e),
                        a || c === d || (a = []))
                      : (a = a || []).push(p, d));
        }
        r && (a = a || []).push("style", r);
        var p = a;
        (t.updateQueue = p) && (t.flags |= 4);
      }
    };
    wu = function (e, t, r, o) {
      r !== o && (t.flags |= 4);
    };
    function on(e, t) {
      if (!se)
        switch (e.tailMode) {
          case "hidden":
            t = e.tail;
            for (var r = null; t !== null;)
              (t.alternate !== null && (r = t), (t = t.sibling));
            r === null ? (e.tail = null) : (r.sibling = null);
            break;
          case "collapsed":
            r = e.tail;
            for (var o = null; r !== null;)
              (r.alternate !== null && (o = r), (r = r.sibling));
            o === null
              ? t || e.tail === null
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (o.sibling = null);
        }
    }
    function Me(e) {
      var t = e.alternate !== null && e.alternate.child === e.child,
        r = 0,
        o = 0;
      if (t)
        for (var n = e.child; n !== null;)
          ((r |= n.lanes | n.childLanes),
            (o |= n.subtreeFlags & 14680064),
            (o |= n.flags & 14680064),
            (n.return = e),
            (n = n.sibling));
      else
        for (n = e.child; n !== null;)
          ((r |= n.lanes | n.childLanes),
            (o |= n.subtreeFlags),
            (o |= n.flags),
            (n.return = e),
            (n = n.sibling));
      return ((e.subtreeFlags |= o), (e.childLanes = r), t);
    }
    function mz(e, t, r) {
      var o = t.pendingProps;
      switch ((Kc(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return (Me(t), null);
        case 1:
          return (Ge(t.type) && es(), Me(t), null);
        case 3:
          return (
            (o = t.stateNode),
            Uo(),
            re($e),
            re(Pe),
            tl(),
            o.pendingContext &&
              ((o.context = o.pendingContext), (o.pendingContext = null)),
            (e === null || e.child === null) &&
              (Ca(t)
                ? (t.flags |= 4)
                : e === null ||
                  (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                  ((t.flags |= 1024), ft !== null && (Uc(ft), (ft = null)))),
            wc(e, t),
            Me(t),
            null
          );
        case 5:
          el(t);
          var n = _r(Nn.current);
          if (((r = t.type), e !== null && t.stateNode != null))
            (ju(e, t, r, o, n),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152)));
          else {
            if (!o) {
              if (t.stateNode === null) throw Error(B(166));
              return (Me(t), null);
            }
            if (((e = _r(Ct.current)), Ca(t))) {
              ((o = t.stateNode), (r = t.type));
              var a = t.memoizedProps;
              switch (((o[Ut] = t), (o[Cn] = a), (e = (t.mode & 1) !== 0), r)) {
                case "dialog":
                  (te("cancel", o), te("close", o));
                  break;
                case "iframe":
                case "object":
                case "embed":
                  te("load", o);
                  break;
                case "video":
                case "audio":
                  for (n = 0; n < dn.length; n++) te(dn[n], o);
                  break;
                case "source":
                  te("error", o);
                  break;
                case "img":
                case "image":
                case "link":
                  (te("error", o), te("load", o));
                  break;
                case "details":
                  te("toggle", o);
                  break;
                case "input":
                  (Pd(o, a), te("invalid", o));
                  break;
                case "select":
                  ((o._wrapperState = { wasMultiple: !!a.multiple }),
                    te("invalid", o));
                  break;
                case "textarea":
                  (Ld(o, a), te("invalid", o));
              }
              ($i(r, a), (n = null));
              for (var i in a)
                if (a.hasOwnProperty(i)) {
                  var c = a[i];
                  i === "children"
                    ? typeof c == "string"
                      ? o.textContent !== c &&
                        (a.suppressHydrationWarning !== !0 &&
                          Aa(o.textContent, c, e),
                        (n = ["children", c]))
                      : typeof c == "number" &&
                        o.textContent !== "" + c &&
                        (a.suppressHydrationWarning !== !0 &&
                          Aa(o.textContent, c, e),
                        (n = ["children", "" + c]))
                    : wn.hasOwnProperty(i) &&
                      c != null &&
                      i === "onScroll" &&
                      te("scroll", o);
                }
              switch (r) {
                case "input":
                  (za(o), _d(o, a, !0));
                  break;
                case "textarea":
                  (za(o), Od(o));
                  break;
                case "select":
                case "option":
                  break;
                default:
                  typeof a.onClick == "function" && (o.onclick = Xa);
              }
              ((o = n), (t.updateQueue = o), o !== null && (t.flags |= 4));
            } else {
              ((i = n.nodeType === 9 ? n : n.ownerDocument),
                e === "http://www.w3.org/1999/xhtml" && (e = Gp(r)),
                e === "http://www.w3.org/1999/xhtml"
                  ? r === "script"
                    ? ((e = i.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild)))
                    : typeof o.is == "string"
                      ? (e = i.createElement(r, { is: o.is }))
                      : ((e = i.createElement(r)),
                        r === "select" &&
                          ((i = e),
                          o.multiple
                            ? (i.multiple = !0)
                            : o.size && (i.size = o.size)))
                  : (e = i.createElementNS(e, r)),
                (e[Ut] = t),
                (e[Cn] = o),
                fu(e, t, !1, !1),
                (t.stateNode = e));
              e: {
                switch (((i = Gi(r, o)), r)) {
                  case "dialog":
                    (te("cancel", e), te("close", e), (n = o));
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    (te("load", e), (n = o));
                    break;
                  case "video":
                  case "audio":
                    for (n = 0; n < dn.length; n++) te(dn[n], e);
                    n = o;
                    break;
                  case "source":
                    (te("error", e), (n = o));
                    break;
                  case "img":
                  case "image":
                  case "link":
                    (te("error", e), te("load", e), (n = o));
                    break;
                  case "details":
                    (te("toggle", e), (n = o));
                    break;
                  case "input":
                    (Pd(e, o), (n = Wi(e, o)), te("invalid", e));
                    break;
                  case "option":
                    n = o;
                    break;
                  case "select":
                    ((e._wrapperState = { wasMultiple: !!o.multiple }),
                      (n = pe({}, o, { value: void 0 })),
                      te("invalid", e));
                    break;
                  case "textarea":
                    (Ld(e, o), (n = Vi(e, o)), te("invalid", e));
                    break;
                  default:
                    n = o;
                }
                ($i(r, n), (c = n));
                for (a in c)
                  if (c.hasOwnProperty(a)) {
                    var d = c[a];
                    a === "style"
                      ? Yp(e, d)
                      : a === "dangerouslySetInnerHTML"
                        ? ((d = d ? d.__html : void 0), d != null && Qp(e, d))
                        : a === "children"
                          ? typeof d == "string"
                            ? (r !== "textarea" || d !== "") && bn(e, d)
                            : typeof d == "number" && bn(e, "" + d)
                          : a !== "suppressContentEditableWarning" &&
                            a !== "suppressHydrationWarning" &&
                            a !== "autoFocus" &&
                            (wn.hasOwnProperty(a)
                              ? d != null && a === "onScroll" && te("scroll", e)
                              : d != null && Sc(e, a, d, i));
                  }
                switch (r) {
                  case "input":
                    (za(e), _d(e, o, !1));
                    break;
                  case "textarea":
                    (za(e), Od(e));
                    break;
                  case "option":
                    o.value != null &&
                      e.setAttribute("value", "" + Er(o.value));
                    break;
                  case "select":
                    ((e.multiple = !!o.multiple),
                      (a = o.value),
                      a != null
                        ? fo(e, !!o.multiple, a, !1)
                        : o.defaultValue != null &&
                          fo(e, !!o.multiple, o.defaultValue, !0));
                    break;
                  default:
                    typeof n.onClick == "function" && (e.onclick = Xa);
                }
                switch (r) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    o = !!o.autoFocus;
                    break e;
                  case "img":
                    o = !0;
                    break e;
                  default:
                    o = !1;
                }
              }
              o && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
          }
          return (Me(t), null);
        case 6:
          if (e && t.stateNode != null) wu(e, t, e.memoizedProps, o);
          else {
            if (typeof o != "string" && t.stateNode === null)
              throw Error(B(166));
            if (((r = _r(Nn.current)), _r(Ct.current), Ca(t))) {
              if (
                ((o = t.stateNode),
                (r = t.memoizedProps),
                (o[Ut] = t),
                (a = o.nodeValue !== r) && ((e = et), e !== null))
              )
                switch (e.tag) {
                  case 3:
                    Aa(o.nodeValue, r, (e.mode & 1) !== 0);
                    break;
                  case 5:
                    e.memoizedProps.suppressHydrationWarning !== !0 &&
                      Aa(o.nodeValue, r, (e.mode & 1) !== 0);
                }
              a && (t.flags |= 4);
            } else
              ((o = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(o)),
                (o[Ut] = t),
                (t.stateNode = o));
          }
          return (Me(t), null);
        case 13:
          if (
            (re(le),
            (o = t.memoizedState),
            e === null ||
              (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
          ) {
            if (
              se &&
              Xe !== null &&
              (t.mode & 1) !== 0 &&
              (t.flags & 128) === 0
            )
              (_h(), To(), (t.flags |= 98560), (a = !1));
            else if (((a = Ca(t)), o !== null && o.dehydrated !== null)) {
              if (e === null) {
                if (!a) throw Error(B(318));
                if (
                  ((a = t.memoizedState),
                  (a = a !== null ? a.dehydrated : null),
                  !a)
                )
                  throw Error(B(317));
                a[Ut] = t;
              } else
                (To(),
                  (t.flags & 128) === 0 && (t.memoizedState = null),
                  (t.flags |= 4));
              (Me(t), (a = !1));
            } else (ft !== null && (Uc(ft), (ft = null)), (a = !0));
            if (!a) return t.flags & 65536 ? t : null;
          }
          return (t.flags & 128) !== 0
            ? ((t.lanes = r), t)
            : ((o = o !== null),
              o !== (e !== null && e.memoizedState !== null) &&
                o &&
                ((t.child.flags |= 8192),
                (t.mode & 1) !== 0 &&
                  (e === null || (le.current & 1) !== 0
                    ? we === 0 && (we = 3)
                    : ul())),
              t.updateQueue !== null && (t.flags |= 4),
              Me(t),
              null);
        case 4:
          return (
            Uo(),
            wc(e, t),
            e === null && Un(t.stateNode.containerInfo),
            Me(t),
            null
          );
        case 10:
          return (Zc(t.type._context), Me(t), null);
        case 17:
          return (Ge(t.type) && es(), Me(t), null);
        case 19:
          if ((re(le), (a = t.memoizedState), a === null)) return (Me(t), null);
          if (((o = (t.flags & 128) !== 0), (i = a.rendering), i === null))
            if (o) on(a, !1);
            else {
              if (we !== 0 || (e !== null && (e.flags & 128) !== 0))
                for (e = t.child; e !== null;) {
                  if (((i = is(e)), i !== null)) {
                    for (
                      t.flags |= 128,
                        on(a, !1),
                        o = i.updateQueue,
                        o !== null && ((t.updateQueue = o), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        o = r,
                        r = t.child;
                      r !== null;
                    )
                      ((a = r),
                        (e = o),
                        (a.flags &= 14680066),
                        (i = a.alternate),
                        i === null
                          ? ((a.childLanes = 0),
                            (a.lanes = e),
                            (a.child = null),
                            (a.subtreeFlags = 0),
                            (a.memoizedProps = null),
                            (a.memoizedState = null),
                            (a.updateQueue = null),
                            (a.dependencies = null),
                            (a.stateNode = null))
                          : ((a.childLanes = i.childLanes),
                            (a.lanes = i.lanes),
                            (a.child = i.child),
                            (a.subtreeFlags = 0),
                            (a.deletions = null),
                            (a.memoizedProps = i.memoizedProps),
                            (a.memoizedState = i.memoizedState),
                            (a.updateQueue = i.updateQueue),
                            (a.type = i.type),
                            (e = i.dependencies),
                            (a.dependencies =
                              e === null
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (r = r.sibling));
                    return (q(le, (le.current & 1) | 2), t.child);
                  }
                  e = e.sibling;
                }
              a.tail !== null &&
                ge() > Co &&
                ((t.flags |= 128), (o = !0), on(a, !1), (t.lanes = 4194304));
            }
          else {
            if (!o)
              if (((e = is(i)), e !== null)) {
                if (
                  ((t.flags |= 128),
                  (o = !0),
                  (r = e.updateQueue),
                  r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                  on(a, !0),
                  a.tail === null &&
                    a.tailMode === "hidden" &&
                    !i.alternate &&
                    !se)
                )
                  return (Me(t), null);
              } else
                2 * ge() - a.renderingStartTime > Co &&
                  r !== 1073741824 &&
                  ((t.flags |= 128), (o = !0), on(a, !1), (t.lanes = 4194304));
            a.isBackwards
              ? ((i.sibling = t.child), (t.child = i))
              : ((r = a.last),
                r !== null ? (r.sibling = i) : (t.child = i),
                (a.last = i));
          }
          return a.tail !== null
            ? ((t = a.tail),
              (a.rendering = t),
              (a.tail = t.sibling),
              (a.renderingStartTime = ge()),
              (t.sibling = null),
              (r = le.current),
              q(le, o ? (r & 1) | 2 : r & 1),
              t)
            : (Me(t), null);
        case 22:
        case 23:
          return (
            hl(),
            (o = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== o && (t.flags |= 8192),
            o && (t.mode & 1) !== 0
              ? (qe & 1073741824) !== 0 &&
                (Me(t), t.subtreeFlags & 6 && (t.flags |= 8192))
              : Me(t),
            null
          );
        case 24:
          return null;
        case 25:
          return null;
      }
      throw Error(B(156, t.tag));
    }
    function gz(e, t) {
      switch ((Kc(t), t.tag)) {
        case 1:
          return (
            Ge(t.type) && es(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 3:
          return (
            Uo(),
            re($e),
            re(Pe),
            tl(),
            (e = t.flags),
            (e & 65536) !== 0 && (e & 128) === 0
              ? ((t.flags = (e & -65537) | 128), t)
              : null
          );
        case 5:
          return (el(t), null);
        case 13:
          if (
            (re(le), (e = t.memoizedState), e !== null && e.dehydrated !== null)
          ) {
            if (t.alternate === null) throw Error(B(340));
            To();
          }
          return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
          );
        case 19:
          return (re(le), null);
        case 4:
          return (Uo(), null);
        case 10:
          return (Zc(t.type._context), null);
        case 22:
        case 23:
          return (hl(), null);
        case 24:
          return null;
        default:
          return null;
      }
    }
    var Da = !1,
      Fe = !1,
      xz = typeof WeakSet == "function" ? WeakSet : Set,
      I = null;
    function xo(e, t) {
      var r = e.ref;
      if (r !== null)
        if (typeof r == "function")
          try {
            r(null);
          } catch (o) {
            ue(e, t, o);
          }
        else r.current = null;
    }
    function bc(e, t, r) {
      try {
        r();
      } catch (o) {
        ue(e, t, o);
      }
    }
    var Cp = !1;
    function zz(e, t) {
      if (((nc = Za), (e = vh()), Hc(e))) {
        if ("selectionStart" in e)
          var r = { start: e.selectionStart, end: e.selectionEnd };
        else
          e: {
            r = ((r = e.ownerDocument) && r.defaultView) || window;
            var o = r.getSelection && r.getSelection();
            if (o && o.rangeCount !== 0) {
              r = o.anchorNode;
              var n = o.anchorOffset,
                a = o.focusNode;
              o = o.focusOffset;
              try {
                (r.nodeType, a.nodeType);
              } catch {
                r = null;
                break e;
              }
              var i = 0,
                c = -1,
                d = -1,
                p = 0,
                x = 0,
                m = e,
                f = null;
              t: for (;;) {
                for (
                  var j;
                  m !== r || (n !== 0 && m.nodeType !== 3) || (c = i + n),
                    m !== a || (o !== 0 && m.nodeType !== 3) || (d = i + o),
                    m.nodeType === 3 && (i += m.nodeValue.length),
                    (j = m.firstChild) !== null;
                )
                  ((f = m), (m = j));
                for (;;) {
                  if (m === e) break t;
                  if (
                    (f === r && ++p === n && (c = i),
                    f === a && ++x === o && (d = i),
                    (j = m.nextSibling) !== null)
                  )
                    break;
                  ((m = f), (f = m.parentNode));
                }
                m = j;
              }
              r = c === -1 || d === -1 ? null : { start: c, end: d };
            } else r = null;
          }
        r = r || { start: 0, end: 0 };
      } else r = null;
      for (
        ac = { focusedElem: e, selectionRange: r }, Za = !1, I = t;
        I !== null;
      )
        if (
          ((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
          ((e.return = t), (I = e));
        else
          for (; I !== null;) {
            t = I;
            try {
              var y = t.alternate;
              if ((t.flags & 1024) !== 0)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    break;
                  case 1:
                    if (y !== null) {
                      var k = y.memoizedProps,
                        T = y.memoizedState,
                        u = t.stateNode,
                        h = u.getSnapshotBeforeUpdate(
                          t.elementType === t.type ? k : xt(t.type, k),
                          T,
                        );
                      u.__reactInternalSnapshotBeforeUpdate = h;
                    }
                    break;
                  case 3:
                    var g = t.stateNode.containerInfo;
                    g.nodeType === 1
                      ? (g.textContent = "")
                      : g.nodeType === 9 &&
                        g.documentElement &&
                        g.removeChild(g.documentElement);
                    break;
                  case 5:
                  case 6:
                  case 4:
                  case 17:
                    break;
                  default:
                    throw Error(B(163));
                }
            } catch (b) {
              ue(t, t.return, b);
            }
            if (((e = t.sibling), e !== null)) {
              ((e.return = t.return), (I = e));
              break;
            }
            I = t.return;
          }
      return ((y = Cp), (Cp = !1), y);
    }
    function zn(e, t, r) {
      var o = t.updateQueue;
      if (((o = o !== null ? o.lastEffect : null), o !== null)) {
        var n = (o = o.next);
        do {
          if ((n.tag & e) === e) {
            var a = n.destroy;
            ((n.destroy = void 0), a !== void 0 && bc(t, r, a));
          }
          n = n.next;
        } while (n !== o);
      }
    }
    function Es(e, t) {
      if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
      ) {
        var r = (t = t.next);
        do {
          if ((r.tag & e) === e) {
            var o = r.create;
            r.destroy = o();
          }
          r = r.next;
        } while (r !== t);
      }
    }
    function yc(e) {
      var t = e.ref;
      if (t !== null) {
        var r = e.stateNode;
        (e.tag, (e = r), typeof t == "function" ? t(e) : (t.current = e));
      }
    }
    function bu(e) {
      var t = e.alternate;
      (t !== null && ((e.alternate = null), bu(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
          ((t = e.stateNode),
          t !== null &&
            (delete t[Ut],
            delete t[Cn],
            delete t[cc],
            delete t[Xx],
            delete t[ez])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null));
    }
    function yu(e) {
      return e.tag === 5 || e.tag === 3 || e.tag === 4;
    }
    function Sp(e) {
      e: for (;;) {
        for (; e.sibling === null;) {
          if (e.return === null || yu(e.return)) return null;
          e = e.return;
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
        ) {
          if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
          ((e.child.return = e), (e = e.child));
        }
        if (!(e.flags & 2)) return e.stateNode;
      }
    }
    function Ec(e, t, r) {
      var o = e.tag;
      if (o === 5 || o === 6)
        ((e = e.stateNode),
          t
            ? r.nodeType === 8
              ? r.parentNode.insertBefore(e, t)
              : r.insertBefore(e, t)
            : (r.nodeType === 8
                ? ((t = r.parentNode), t.insertBefore(e, r))
                : ((t = r), t.appendChild(e)),
              (r = r._reactRootContainer),
              r != null || t.onclick !== null || (t.onclick = Xa)));
      else if (o !== 4 && ((e = e.child), e !== null))
        for (Ec(e, t, r), e = e.sibling; e !== null;)
          (Ec(e, t, r), (e = e.sibling));
    }
    function kc(e, t, r) {
      var o = e.tag;
      if (o === 5 || o === 6)
        ((e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e));
      else if (o !== 4 && ((e = e.child), e !== null))
        for (kc(e, t, r), e = e.sibling; e !== null;)
          (kc(e, t, r), (e = e.sibling));
    }
    var Be = null,
      zt = !1;
    function cr(e, t, r) {
      for (r = r.child; r !== null;) (Eu(e, t, r), (r = r.sibling));
    }
    function Eu(e, t, r) {
      if (At && typeof At.onCommitFiberUnmount == "function")
        try {
          At.onCommitFiberUnmount(gs, r);
        } catch {}
      switch (r.tag) {
        case 5:
          Fe || xo(r, t);
        case 6:
          var o = Be,
            n = zt;
          ((Be = null),
            cr(e, t, r),
            (Be = o),
            (zt = n),
            Be !== null &&
              (zt
                ? ((e = Be),
                  (r = r.stateNode),
                  e.nodeType === 8
                    ? e.parentNode.removeChild(r)
                    : e.removeChild(r))
                : Be.removeChild(r.stateNode)));
          break;
        case 18:
          Be !== null &&
            (zt
              ? ((e = Be),
                (r = r.stateNode),
                e.nodeType === 8
                  ? Bi(e.parentNode, r)
                  : e.nodeType === 1 && Bi(e, r),
                vn(e))
              : Bi(Be, r.stateNode));
          break;
        case 4:
          ((o = Be),
            (n = zt),
            (Be = r.stateNode.containerInfo),
            (zt = !0),
            cr(e, t, r),
            (Be = o),
            (zt = n));
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !Fe &&
            ((o = r.updateQueue),
            o !== null && ((o = o.lastEffect), o !== null))
          ) {
            n = o = o.next;
            do {
              var a = n,
                i = a.destroy;
              ((a = a.tag),
                i !== void 0 && ((a & 2) !== 0 || (a & 4) !== 0) && bc(r, t, i),
                (n = n.next));
            } while (n !== o);
          }
          cr(e, t, r);
          break;
        case 1:
          if (
            !Fe &&
            (xo(r, t),
            (o = r.stateNode),
            typeof o.componentWillUnmount == "function")
          )
            try {
              ((o.props = r.memoizedProps),
                (o.state = r.memoizedState),
                o.componentWillUnmount());
            } catch (c) {
              ue(r, t, c);
            }
          cr(e, t, r);
          break;
        case 21:
          cr(e, t, r);
          break;
        case 22:
          r.mode & 1
            ? ((Fe = (o = Fe) || r.memoizedState !== null),
              cr(e, t, r),
              (Fe = o))
            : cr(e, t, r);
          break;
        default:
          cr(e, t, r);
      }
    }
    function Np(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var r = e.stateNode;
        (r === null && (r = e.stateNode = new xz()),
          t.forEach(function (o) {
            var n = Tz.bind(null, e, o);
            r.has(o) || (r.add(o), o.then(n, n));
          }));
      }
    }
    function gt(e, t) {
      var r = t.deletions;
      if (r !== null)
        for (var o = 0; o < r.length; o++) {
          var n = r[o];
          try {
            var a = e,
              i = t,
              c = i;
            e: for (; c !== null;) {
              switch (c.tag) {
                case 5:
                  ((Be = c.stateNode), (zt = !1));
                  break e;
                case 3:
                  ((Be = c.stateNode.containerInfo), (zt = !0));
                  break e;
                case 4:
                  ((Be = c.stateNode.containerInfo), (zt = !0));
                  break e;
              }
              c = c.return;
            }
            if (Be === null) throw Error(B(160));
            (Eu(a, i, n), (Be = null), (zt = !1));
            var d = n.alternate;
            (d !== null && (d.return = null), (n.return = null));
          } catch (p) {
            ue(n, t, p);
          }
        }
      if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) (ku(t, e), (t = t.sibling));
    }
    function ku(e, t) {
      var r = e.alternate,
        o = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((gt(t, e), Tt(e), o & 4)) {
            try {
              (zn(3, e, e.return), Es(3, e));
            } catch (k) {
              ue(e, e.return, k);
            }
            try {
              zn(5, e, e.return);
            } catch (k) {
              ue(e, e.return, k);
            }
          }
          break;
        case 1:
          (gt(t, e), Tt(e), o & 512 && r !== null && xo(r, r.return));
          break;
        case 5:
          if (
            (gt(t, e),
            Tt(e),
            o & 512 && r !== null && xo(r, r.return),
            e.flags & 32)
          ) {
            var n = e.stateNode;
            try {
              bn(n, "");
            } catch (k) {
              ue(e, e.return, k);
            }
          }
          if (o & 4 && ((n = e.stateNode), n != null)) {
            var a = e.memoizedProps,
              i = r !== null ? r.memoizedProps : a,
              c = e.type,
              d = e.updateQueue;
            if (((e.updateQueue = null), d !== null))
              try {
                (c === "input" &&
                  a.type === "radio" &&
                  a.name != null &&
                  Kp(n, a),
                  Gi(c, i));
                var p = Gi(c, a);
                for (i = 0; i < d.length; i += 2) {
                  var x = d[i],
                    m = d[i + 1];
                  x === "style"
                    ? Yp(n, m)
                    : x === "dangerouslySetInnerHTML"
                      ? Qp(n, m)
                      : x === "children"
                        ? bn(n, m)
                        : Sc(n, x, m, p);
                }
                switch (c) {
                  case "input":
                    Ji(n, a);
                    break;
                  case "textarea":
                    $p(n, a);
                    break;
                  case "select":
                    var f = n._wrapperState.wasMultiple;
                    n._wrapperState.wasMultiple = !!a.multiple;
                    var j = a.value;
                    j != null
                      ? fo(n, !!a.multiple, j, !1)
                      : f !== !!a.multiple &&
                        (a.defaultValue != null
                          ? fo(n, !!a.multiple, a.defaultValue, !0)
                          : fo(n, !!a.multiple, a.multiple ? [] : "", !1));
                }
                n[Cn] = a;
              } catch (k) {
                ue(e, e.return, k);
              }
          }
          break;
        case 6:
          if ((gt(t, e), Tt(e), o & 4)) {
            if (e.stateNode === null) throw Error(B(162));
            ((n = e.stateNode), (a = e.memoizedProps));
            try {
              n.nodeValue = a;
            } catch (k) {
              ue(e, e.return, k);
            }
          }
          break;
        case 3:
          if (
            (gt(t, e),
            Tt(e),
            o & 4 && r !== null && r.memoizedState.isDehydrated)
          )
            try {
              vn(t.containerInfo);
            } catch (k) {
              ue(e, e.return, k);
            }
          break;
        case 4:
          (gt(t, e), Tt(e));
          break;
        case 13:
          (gt(t, e),
            Tt(e),
            (n = e.child),
            n.flags & 8192 &&
              ((a = n.memoizedState !== null),
              (n.stateNode.isHidden = a),
              !a ||
                (n.alternate !== null && n.alternate.memoizedState !== null) ||
                (dl = ge())),
            o & 4 && Np(e));
          break;
        case 22:
          if (
            ((x = r !== null && r.memoizedState !== null),
            e.mode & 1 ? ((Fe = (p = Fe) || x), gt(t, e), (Fe = p)) : gt(t, e),
            Tt(e),
            o & 8192)
          ) {
            if (
              ((p = e.memoizedState !== null),
              (e.stateNode.isHidden = p) && !x && (e.mode & 1) !== 0)
            )
              for (I = e, x = e.child; x !== null;) {
                for (m = I = x; I !== null;) {
                  switch (((f = I), (j = f.child), f.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      zn(4, f, f.return);
                      break;
                    case 1:
                      xo(f, f.return);
                      var y = f.stateNode;
                      if (typeof y.componentWillUnmount == "function") {
                        ((o = f), (r = f.return));
                        try {
                          ((t = o),
                            (y.props = t.memoizedProps),
                            (y.state = t.memoizedState),
                            y.componentWillUnmount());
                        } catch (k) {
                          ue(o, r, k);
                        }
                      }
                      break;
                    case 5:
                      xo(f, f.return);
                      break;
                    case 22:
                      if (f.memoizedState !== null) {
                        Ip(m);
                        continue;
                      }
                  }
                  j !== null ? ((j.return = f), (I = j)) : Ip(m);
                }
                x = x.sibling;
              }
            e: for (x = null, m = e; ;) {
              if (m.tag === 5) {
                if (x === null) {
                  x = m;
                  try {
                    ((n = m.stateNode),
                      p
                        ? ((a = n.style),
                          typeof a.setProperty == "function"
                            ? a.setProperty("display", "none", "important")
                            : (a.display = "none"))
                        : ((c = m.stateNode),
                          (d = m.memoizedProps.style),
                          (i =
                            d != null && d.hasOwnProperty("display")
                              ? d.display
                              : null),
                          (c.style.display = Zp("display", i))));
                  } catch (k) {
                    ue(e, e.return, k);
                  }
                }
              } else if (m.tag === 6) {
                if (x === null)
                  try {
                    m.stateNode.nodeValue = p ? "" : m.memoizedProps;
                  } catch (k) {
                    ue(e, e.return, k);
                  }
              } else if (
                ((m.tag !== 22 && m.tag !== 23) ||
                  m.memoizedState === null ||
                  m === e) &&
                m.child !== null
              ) {
                ((m.child.return = m), (m = m.child));
                continue;
              }
              if (m === e) break e;
              for (; m.sibling === null;) {
                if (m.return === null || m.return === e) break e;
                (x === m && (x = null), (m = m.return));
              }
              (x === m && (x = null),
                (m.sibling.return = m.return),
                (m = m.sibling));
            }
          }
          break;
        case 19:
          (gt(t, e), Tt(e), o & 4 && Np(e));
          break;
        case 21:
          break;
        default:
          (gt(t, e), Tt(e));
      }
    }
    function Tt(e) {
      var t = e.flags;
      if (t & 2) {
        try {
          e: {
            for (var r = e.return; r !== null;) {
              if (yu(r)) {
                var o = r;
                break e;
              }
              r = r.return;
            }
            throw Error(B(160));
          }
          switch (o.tag) {
            case 5:
              var n = o.stateNode;
              o.flags & 32 && (bn(n, ""), (o.flags &= -33));
              var a = Sp(e);
              kc(e, a, n);
              break;
            case 3:
            case 4:
              var i = o.stateNode.containerInfo,
                c = Sp(e);
              Ec(e, c, i);
              break;
            default:
              throw Error(B(161));
          }
        } catch (d) {
          ue(e, e.return, d);
        }
        e.flags &= -3;
      }
      t & 4096 && (e.flags &= -4097);
    }
    function fz(e, t, r) {
      ((I = e), vu(e, t, r));
    }
    function vu(e, t, r) {
      for (var o = (e.mode & 1) !== 0; I !== null;) {
        var n = I,
          a = n.child;
        if (n.tag === 22 && o) {
          var i = n.memoizedState !== null || Da;
          if (!i) {
            var c = n.alternate,
              d = (c !== null && c.memoizedState !== null) || Fe;
            c = Da;
            var p = Fe;
            if (((Da = i), (Fe = d) && !p))
              for (I = n; I !== null;)
                ((i = I),
                  (d = i.child),
                  i.tag === 22 && i.memoizedState !== null
                    ? Mp(n)
                    : d !== null
                      ? ((d.return = i), (I = d))
                      : Mp(n));
            for (; a !== null;) ((I = a), vu(a, t, r), (a = a.sibling));
            ((I = n), (Da = c), (Fe = p));
          }
          Dp(e, t, r);
        } else
          (n.subtreeFlags & 8772) !== 0 && a !== null
            ? ((a.return = n), (I = a))
            : Dp(e, t, r);
      }
    }
    function Dp(e) {
      for (; I !== null;) {
        var t = I;
        if ((t.flags & 8772) !== 0) {
          var r = t.alternate;
          try {
            if ((t.flags & 8772) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  Fe || Es(5, t);
                  break;
                case 1:
                  var o = t.stateNode;
                  if (t.flags & 4 && !Fe)
                    if (r === null) o.componentDidMount();
                    else {
                      var n =
                        t.elementType === t.type
                          ? r.memoizedProps
                          : xt(t.type, r.memoizedProps);
                      o.componentDidUpdate(
                        n,
                        r.memoizedState,
                        o.__reactInternalSnapshotBeforeUpdate,
                      );
                    }
                  var a = t.updateQueue;
                  a !== null && zp(t, a, o);
                  break;
                case 3:
                  var i = t.updateQueue;
                  if (i !== null) {
                    if (((r = null), t.child !== null))
                      switch (t.child.tag) {
                        case 5:
                          r = t.child.stateNode;
                          break;
                        case 1:
                          r = t.child.stateNode;
                      }
                    zp(t, i, r);
                  }
                  break;
                case 5:
                  var c = t.stateNode;
                  if (r === null && t.flags & 4) {
                    r = c;
                    var d = t.memoizedProps;
                    switch (t.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        d.autoFocus && r.focus();
                        break;
                      case "img":
                        d.src && (r.src = d.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (t.memoizedState === null) {
                    var p = t.alternate;
                    if (p !== null) {
                      var x = p.memoizedState;
                      if (x !== null) {
                        var m = x.dehydrated;
                        m !== null && vn(m);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(B(163));
              }
            Fe || (t.flags & 512 && yc(t));
          } catch (f) {
            ue(t, t.return, f);
          }
        }
        if (t === e) {
          I = null;
          break;
        }
        if (((r = t.sibling), r !== null)) {
          ((r.return = t.return), (I = r));
          break;
        }
        I = t.return;
      }
    }
    function Ip(e) {
      for (; I !== null;) {
        var t = I;
        if (t === e) {
          I = null;
          break;
        }
        var r = t.sibling;
        if (r !== null) {
          ((r.return = t.return), (I = r));
          break;
        }
        I = t.return;
      }
    }
    function Mp(e) {
      for (; I !== null;) {
        var t = I;
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var r = t.return;
              try {
                Es(4, t);
              } catch (d) {
                ue(t, r, d);
              }
              break;
            case 1:
              var o = t.stateNode;
              if (typeof o.componentDidMount == "function") {
                var n = t.return;
                try {
                  o.componentDidMount();
                } catch (d) {
                  ue(t, n, d);
                }
              }
              var a = t.return;
              try {
                yc(t);
              } catch (d) {
                ue(t, a, d);
              }
              break;
            case 5:
              var i = t.return;
              try {
                yc(t);
              } catch (d) {
                ue(t, i, d);
              }
          }
        } catch (d) {
          ue(t, t.return, d);
        }
        if (t === e) {
          I = null;
          break;
        }
        var c = t.sibling;
        if (c !== null) {
          ((c.return = t.return), (I = c));
          break;
        }
        I = t.return;
      }
    }
    var jz = Math.ceil,
      ds = Yt.ReactCurrentDispatcher,
      cl = Yt.ReactCurrentOwner,
      lt = Yt.ReactCurrentBatchConfig,
      $ = 0,
      Ee = null,
      fe = null,
      Ue = 0,
      qe = 0,
      zo = Tr(0),
      we = 0,
      Fn = null,
      Hr = 0,
      ks = 0,
      ll = 0,
      fn = null,
      Ve = null,
      dl = 0,
      Co = 1 / 0,
      Wt = null,
      ps = !1,
      vc = null,
      wr = null,
      Ia = !1,
      mr = null,
      hs = 0,
      jn = 0,
      Tc = null,
      Wa = -1,
      Ja = 0;
    function Oe() {
      return ($ & 6) !== 0 ? ge() : Wa !== -1 ? Wa : (Wa = ge());
    }
    function br(e) {
      return (e.mode & 1) === 0
        ? 1
        : ($ & 2) !== 0 && Ue !== 0
          ? Ue & -Ue
          : rz.transition !== null
            ? (Ja === 0 && (Ja = lh()), Ja)
            : ((e = Z),
              e !== 0 ||
                ((e = window.event), (e = e === void 0 ? 16 : xh(e.type))),
              e);
    }
    function wt(e, t, r, o) {
      if (50 < jn) throw ((jn = 0), (Tc = null), Error(B(185)));
      (Pn(e, r, o),
        (($ & 2) === 0 || e !== Ee) &&
          (e === Ee && (($ & 2) === 0 && (ks |= r), we === 4 && hr(e, Ue)),
          Qe(e, o),
          r === 1 &&
            $ === 0 &&
            (t.mode & 1) === 0 &&
            ((Co = ge() + 500), ws && Br())));
    }
    function Qe(e, t) {
      var r = e.callbackNode;
      nx(e, t);
      var o = Qa(e, e === Ee ? Ue : 0);
      if (o === 0)
        (r !== null && Jd(r),
          (e.callbackNode = null),
          (e.callbackPriority = 0));
      else if (((t = o & -o), e.callbackPriority !== t)) {
        if ((r != null && Jd(r), t === 1))
          (e.tag === 0 ? tz(Fp.bind(null, e)) : Mh(Fp.bind(null, e)),
            Yx(function () {
              ($ & 6) === 0 && Br();
            }),
            (r = null));
        else {
          switch (dh(o)) {
            case 1:
              r = Fc;
              break;
            case 4:
              r = ih;
              break;
            case 16:
              r = Ga;
              break;
            case 536870912:
              r = ch;
              break;
            default:
              r = Ga;
          }
          r = Du(r, Tu.bind(null, e));
        }
        ((e.callbackPriority = t), (e.callbackNode = r));
      }
    }
    function Tu(e, t) {
      if (((Wa = -1), (Ja = 0), ($ & 6) !== 0)) throw Error(B(327));
      var r = e.callbackNode;
      if (Eo() && e.callbackNode !== r) return null;
      var o = Qa(e, e === Ee ? Ue : 0);
      if (o === 0) return null;
      if ((o & 30) !== 0 || (o & e.expiredLanes) !== 0 || t) t = us(e, o);
      else {
        t = o;
        var n = $;
        $ |= 2;
        var a = Uu();
        (Ee !== e || Ue !== t) && ((Wt = null), (Co = ge() + 500), Lr(e, t));
        do
          try {
            yz();
            break;
          } catch (c) {
            Bu(e, c);
          }
        while (!0);
        (Qc(),
          (ds.current = a),
          ($ = n),
          fe !== null ? (t = 0) : ((Ee = null), (Ue = 0), (t = we)));
      }
      if (t !== 0) {
        if (
          (t === 2 && ((n = Xi(e)), n !== 0 && ((o = n), (t = Bc(e, n)))),
          t === 1)
        )
          throw ((r = Fn), Lr(e, 0), hr(e, o), Qe(e, ge()), r);
        if (t === 6) hr(e, o);
        else {
          if (
            ((n = e.current.alternate),
            (o & 30) === 0 &&
              !wz(n) &&
              ((t = us(e, o)),
              t === 2 && ((a = Xi(e)), a !== 0 && ((o = a), (t = Bc(e, a)))),
              t === 1))
          )
            throw ((r = Fn), Lr(e, 0), hr(e, o), Qe(e, ge()), r);
          switch (((e.finishedWork = n), (e.finishedLanes = o), t)) {
            case 0:
            case 1:
              throw Error(B(345));
            case 2:
              Mr(e, Ve, Wt);
              break;
            case 3:
              if (
                (hr(e, o),
                (o & 130023424) === o && ((t = dl + 500 - ge()), 10 < t))
              ) {
                if (Qa(e, 0) !== 0) break;
                if (((n = e.suspendedLanes), (n & o) !== o)) {
                  (Oe(), (e.pingedLanes |= e.suspendedLanes & n));
                  break;
                }
                e.timeoutHandle = ic(Mr.bind(null, e, Ve, Wt), t);
                break;
              }
              Mr(e, Ve, Wt);
              break;
            case 4:
              if ((hr(e, o), (o & 4194240) === o)) break;
              for (t = e.eventTimes, n = -1; 0 < o;) {
                var i = 31 - jt(o);
                ((a = 1 << i), (i = t[i]), i > n && (n = i), (o &= ~a));
              }
              if (
                ((o = n),
                (o = ge() - o),
                (o =
                  (120 > o
                    ? 120
                    : 480 > o
                      ? 480
                      : 1080 > o
                        ? 1080
                        : 1920 > o
                          ? 1920
                          : 3e3 > o
                            ? 3e3
                            : 4320 > o
                              ? 4320
                              : 1960 * jz(o / 1960)) - o),
                10 < o)
              ) {
                e.timeoutHandle = ic(Mr.bind(null, e, Ve, Wt), o);
                break;
              }
              Mr(e, Ve, Wt);
              break;
            case 5:
              Mr(e, Ve, Wt);
              break;
            default:
              throw Error(B(329));
          }
        }
      }
      return (Qe(e, ge()), e.callbackNode === r ? Tu.bind(null, e) : null);
    }
    function Bc(e, t) {
      var r = fn;
      return (
        e.current.memoizedState.isDehydrated && (Lr(e, t).flags |= 256),
        (e = us(e, t)),
        e !== 2 && ((t = Ve), (Ve = r), t !== null && Uc(t)),
        e
      );
    }
    function Uc(e) {
      Ve === null ? (Ve = e) : Ve.push.apply(Ve, e);
    }
    function wz(e) {
      for (var t = e; ;) {
        if (t.flags & 16384) {
          var r = t.updateQueue;
          if (r !== null && ((r = r.stores), r !== null))
            for (var o = 0; o < r.length; o++) {
              var n = r[o],
                a = n.getSnapshot;
              n = n.value;
              try {
                if (!bt(a(), n)) return !1;
              } catch {
                return !1;
              }
            }
        }
        if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
          ((r.return = t), (t = r));
        else {
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
      }
      return !0;
    }
    function hr(e, t) {
      for (
        t &= ~ll,
          t &= ~ks,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;
      ) {
        var r = 31 - jt(t),
          o = 1 << r;
        ((e[r] = -1), (t &= ~o));
      }
    }
    function Fp(e) {
      if (($ & 6) !== 0) throw Error(B(327));
      Eo();
      var t = Qa(e, 0);
      if ((t & 1) === 0) return (Qe(e, ge()), null);
      var r = us(e, t);
      if (e.tag !== 0 && r === 2) {
        var o = Xi(e);
        o !== 0 && ((t = o), (r = Bc(e, o)));
      }
      if (r === 1) throw ((r = Fn), Lr(e, 0), hr(e, t), Qe(e, ge()), r);
      if (r === 6) throw Error(B(345));
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Mr(e, Ve, Wt),
        Qe(e, ge()),
        null
      );
    }
    function pl(e, t) {
      var r = $;
      $ |= 1;
      try {
        return e(t);
      } finally {
        (($ = r), $ === 0 && ((Co = ge() + 500), ws && Br()));
      }
    }
    function Vr(e) {
      mr !== null && mr.tag === 0 && ($ & 6) === 0 && Eo();
      var t = $;
      $ |= 1;
      var r = lt.transition,
        o = Z;
      try {
        if (((lt.transition = null), (Z = 1), e)) return e();
      } finally {
        ((Z = o), (lt.transition = r), ($ = t), ($ & 6) === 0 && Br());
      }
    }
    function hl() {
      ((qe = zo.current), re(zo));
    }
    function Lr(e, t) {
      ((e.finishedWork = null), (e.finishedLanes = 0));
      var r = e.timeoutHandle;
      if ((r !== -1 && ((e.timeoutHandle = -1), Zx(r)), fe !== null))
        for (r = fe.return; r !== null;) {
          var o = r;
          switch ((Kc(o), o.tag)) {
            case 1:
              ((o = o.type.childContextTypes), o != null && es());
              break;
            case 3:
              (Uo(), re($e), re(Pe), tl());
              break;
            case 5:
              el(o);
              break;
            case 4:
              Uo();
              break;
            case 13:
              re(le);
              break;
            case 19:
              re(le);
              break;
            case 10:
              Zc(o.type._context);
              break;
            case 22:
            case 23:
              hl();
          }
          r = r.return;
        }
      if (
        ((Ee = e),
        (fe = e = yr(e.current, null)),
        (Ue = qe = t),
        (we = 0),
        (Fn = null),
        (ll = ks = Hr = 0),
        (Ve = fn = null),
        Pr !== null)
      ) {
        for (t = 0; t < Pr.length; t++)
          if (((r = Pr[t]), (o = r.interleaved), o !== null)) {
            r.interleaved = null;
            var n = o.next,
              a = r.pending;
            if (a !== null) {
              var i = a.next;
              ((a.next = n), (o.next = i));
            }
            r.pending = o;
          }
        Pr = null;
      }
      return e;
    }
    function Bu(e, t) {
      do {
        var r = fe;
        try {
          if ((Qc(), (La.current = ls), cs)) {
            for (var o = de.memoizedState; o !== null;) {
              var n = o.queue;
              (n !== null && (n.pending = null), (o = o.next));
            }
            cs = !1;
          }
          if (
            ((Jr = 0),
            (ye = je = de = null),
            (xn = !1),
            (Dn = 0),
            (cl.current = null),
            r === null || r.return === null)
          ) {
            ((we = 1), (Fn = t), (fe = null));
            break;
          }
          e: {
            var a = e,
              i = r.return,
              c = r,
              d = t;
            if (
              ((t = Ue),
              (c.flags |= 32768),
              d !== null && typeof d == "object" && typeof d.then == "function")
            ) {
              var p = d,
                x = c,
                m = x.tag;
              if ((x.mode & 1) === 0 && (m === 0 || m === 11 || m === 15)) {
                var f = x.alternate;
                f
                  ? ((x.updateQueue = f.updateQueue),
                    (x.memoizedState = f.memoizedState),
                    (x.lanes = f.lanes))
                  : ((x.updateQueue = null), (x.memoizedState = null));
              }
              var j = Ep(i);
              if (j !== null) {
                ((j.flags &= -257),
                  kp(j, i, c, a, t),
                  j.mode & 1 && yp(a, p, t),
                  (t = j),
                  (d = p));
                var y = t.updateQueue;
                if (y === null) {
                  var k = new Set();
                  (k.add(d), (t.updateQueue = k));
                } else y.add(d);
                break e;
              } else {
                if ((t & 1) === 0) {
                  (yp(a, p, t), ul());
                  break e;
                }
                d = Error(B(426));
              }
            } else if (se && c.mode & 1) {
              var T = Ep(i);
              if (T !== null) {
                ((T.flags & 65536) === 0 && (T.flags |= 256),
                  kp(T, i, c, a, t),
                  $c(Ao(d, c)));
                break e;
              }
            }
            ((a = d = Ao(d, c)),
              we !== 4 && (we = 2),
              fn === null ? (fn = [a]) : fn.push(a),
              (a = i));
            do {
              switch (a.tag) {
                case 3:
                  ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                  var u = du(a, d, t);
                  xp(a, u);
                  break e;
                case 1:
                  c = d;
                  var h = a.type,
                    g = a.stateNode;
                  if (
                    (a.flags & 128) === 0 &&
                    (typeof h.getDerivedStateFromError == "function" ||
                      (g !== null &&
                        typeof g.componentDidCatch == "function" &&
                        (wr === null || !wr.has(g))))
                  ) {
                    ((a.flags |= 65536), (t &= -t), (a.lanes |= t));
                    var b = pu(a, c, t);
                    xp(a, b);
                    break e;
                  }
              }
              a = a.return;
            } while (a !== null);
          }
          Cu(r);
        } catch (E) {
          ((t = E), fe === r && r !== null && (fe = r = r.return));
          continue;
        }
        break;
      } while (!0);
    }
    function Uu() {
      var e = ds.current;
      return ((ds.current = ls), e === null ? ls : e);
    }
    function ul() {
      ((we === 0 || we === 3 || we === 2) && (we = 4),
        Ee === null ||
          ((Hr & 268435455) === 0 && (ks & 268435455) === 0) ||
          hr(Ee, Ue));
    }
    function us(e, t) {
      var r = $;
      $ |= 2;
      var o = Uu();
      (Ee !== e || Ue !== t) && ((Wt = null), Lr(e, t));
      do
        try {
          bz();
          break;
        } catch (n) {
          Bu(e, n);
        }
      while (!0);
      if ((Qc(), ($ = r), (ds.current = o), fe !== null)) throw Error(B(261));
      return ((Ee = null), (Ue = 0), we);
    }
    function bz() {
      for (; fe !== null;) Au(fe);
    }
    function yz() {
      for (; fe !== null && !Qg();) Au(fe);
    }
    function Au(e) {
      var t = Nu(e.alternate, e, qe);
      ((e.memoizedProps = e.pendingProps),
        t === null ? Cu(e) : (fe = t),
        (cl.current = null));
    }
    function Cu(e) {
      var t = e;
      do {
        var r = t.alternate;
        if (((e = t.return), (t.flags & 32768) === 0)) {
          if (((r = mz(r, t, qe)), r !== null)) {
            fe = r;
            return;
          }
        } else {
          if (((r = gz(r, t)), r !== null)) {
            ((r.flags &= 32767), (fe = r));
            return;
          }
          if (e !== null)
            ((e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null));
          else {
            ((we = 6), (fe = null));
            return;
          }
        }
        if (((t = t.sibling), t !== null)) {
          fe = t;
          return;
        }
        fe = t = e;
      } while (t !== null);
      we === 0 && (we = 5);
    }
    function Mr(e, t, r) {
      var o = Z,
        n = lt.transition;
      try {
        ((lt.transition = null), (Z = 1), Ez(e, t, r, o));
      } finally {
        ((lt.transition = n), (Z = o));
      }
      return null;
    }
    function Ez(e, t, r, o) {
      do Eo();
      while (mr !== null);
      if (($ & 6) !== 0) throw Error(B(327));
      r = e.finishedWork;
      var n = e.finishedLanes;
      if (r === null) return null;
      if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
        throw Error(B(177));
      ((e.callbackNode = null), (e.callbackPriority = 0));
      var a = r.lanes | r.childLanes;
      if (
        (ax(e, a),
        e === Ee && ((fe = Ee = null), (Ue = 0)),
        ((r.subtreeFlags & 2064) === 0 && (r.flags & 2064) === 0) ||
          Ia ||
          ((Ia = !0),
          Du(Ga, function () {
            return (Eo(), null);
          })),
        (a = (r.flags & 15990) !== 0),
        (r.subtreeFlags & 15990) !== 0 || a)
      ) {
        ((a = lt.transition), (lt.transition = null));
        var i = Z;
        Z = 1;
        var c = $;
        (($ |= 4),
          (cl.current = null),
          zz(e, r),
          ku(r, e),
          Vx(ac),
          (Za = !!nc),
          (ac = nc = null),
          (e.current = r),
          fz(r, e, n),
          Zg(),
          ($ = c),
          (Z = i),
          (lt.transition = a));
      } else e.current = r;
      if (
        (Ia && ((Ia = !1), (mr = e), (hs = n)),
        (a = e.pendingLanes),
        a === 0 && (wr = null),
        Xg(r.stateNode, o),
        Qe(e, ge()),
        t !== null)
      )
        for (o = e.onRecoverableError, r = 0; r < t.length; r++)
          ((n = t[r]),
            o(n.value, { componentStack: n.stack, digest: n.digest }));
      if (ps) throw ((ps = !1), (e = vc), (vc = null), e);
      return (
        (hs & 1) !== 0 && e.tag !== 0 && Eo(),
        (a = e.pendingLanes),
        (a & 1) !== 0 ? (e === Tc ? jn++ : ((jn = 0), (Tc = e))) : (jn = 0),
        Br(),
        null
      );
    }
    function Eo() {
      if (mr !== null) {
        var e = dh(hs),
          t = lt.transition,
          r = Z;
        try {
          if (((lt.transition = null), (Z = 16 > e ? 16 : e), mr === null))
            var o = !1;
          else {
            if (((e = mr), (mr = null), (hs = 0), ($ & 6) !== 0))
              throw Error(B(331));
            var n = $;
            for ($ |= 4, I = e.current; I !== null;) {
              var a = I,
                i = a.child;
              if ((I.flags & 16) !== 0) {
                var c = a.deletions;
                if (c !== null) {
                  for (var d = 0; d < c.length; d++) {
                    var p = c[d];
                    for (I = p; I !== null;) {
                      var x = I;
                      switch (x.tag) {
                        case 0:
                        case 11:
                        case 15:
                          zn(8, x, a);
                      }
                      var m = x.child;
                      if (m !== null) ((m.return = x), (I = m));
                      else
                        for (; I !== null;) {
                          x = I;
                          var f = x.sibling,
                            j = x.return;
                          if ((bu(x), x === p)) {
                            I = null;
                            break;
                          }
                          if (f !== null) {
                            ((f.return = j), (I = f));
                            break;
                          }
                          I = j;
                        }
                    }
                  }
                  var y = a.alternate;
                  if (y !== null) {
                    var k = y.child;
                    if (k !== null) {
                      y.child = null;
                      do {
                        var T = k.sibling;
                        ((k.sibling = null), (k = T));
                      } while (k !== null);
                    }
                  }
                  I = a;
                }
              }
              if ((a.subtreeFlags & 2064) !== 0 && i !== null)
                ((i.return = a), (I = i));
              else
                e: for (; I !== null;) {
                  if (((a = I), (a.flags & 2048) !== 0))
                    switch (a.tag) {
                      case 0:
                      case 11:
                      case 15:
                        zn(9, a, a.return);
                    }
                  var u = a.sibling;
                  if (u !== null) {
                    ((u.return = a.return), (I = u));
                    break e;
                  }
                  I = a.return;
                }
            }
            var h = e.current;
            for (I = h; I !== null;) {
              i = I;
              var g = i.child;
              if ((i.subtreeFlags & 2064) !== 0 && g !== null)
                ((g.return = i), (I = g));
              else
                e: for (i = h; I !== null;) {
                  if (((c = I), (c.flags & 2048) !== 0))
                    try {
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Es(9, c);
                      }
                    } catch (E) {
                      ue(c, c.return, E);
                    }
                  if (c === i) {
                    I = null;
                    break e;
                  }
                  var b = c.sibling;
                  if (b !== null) {
                    ((b.return = c.return), (I = b));
                    break e;
                  }
                  I = c.return;
                }
            }
            if (
              (($ = n),
              Br(),
              At && typeof At.onPostCommitFiberRoot == "function")
            )
              try {
                At.onPostCommitFiberRoot(gs, e);
              } catch {}
            o = !0;
          }
          return o;
        } finally {
          ((Z = r), (lt.transition = t));
        }
      }
      return !1;
    }
    function Pp(e, t, r) {
      ((t = Ao(r, t)),
        (t = du(e, t, 1)),
        (e = jr(e, t, 1)),
        (t = Oe()),
        e !== null && (Pn(e, 1, t), Qe(e, t)));
    }
    function ue(e, t, r) {
      if (e.tag === 3) Pp(e, e, r);
      else
        for (; t !== null;) {
          if (t.tag === 3) {
            Pp(t, e, r);
            break;
          } else if (t.tag === 1) {
            var o = t.stateNode;
            if (
              typeof t.type.getDerivedStateFromError == "function" ||
              (typeof o.componentDidCatch == "function" &&
                (wr === null || !wr.has(o)))
            ) {
              ((e = Ao(r, e)),
                (e = pu(t, e, 1)),
                (t = jr(t, e, 1)),
                (e = Oe()),
                t !== null && (Pn(t, 1, e), Qe(t, e)));
              break;
            }
          }
          t = t.return;
        }
    }
    function kz(e, t, r) {
      var o = e.pingCache;
      (o !== null && o.delete(t),
        (t = Oe()),
        (e.pingedLanes |= e.suspendedLanes & r),
        Ee === e &&
          (Ue & r) === r &&
          (we === 4 || (we === 3 && (Ue & 130023424) === Ue && 500 > ge() - dl)
            ? Lr(e, 0)
            : (ll |= r)),
        Qe(e, t));
    }
    function Su(e, t) {
      t === 0 &&
        ((e.mode & 1) === 0
          ? (t = 1)
          : ((t = wa), (wa <<= 1), (wa & 130023424) === 0 && (wa = 4194304)));
      var r = Oe();
      ((e = Qt(e, t)), e !== null && (Pn(e, t, r), Qe(e, r)));
    }
    function vz(e) {
      var t = e.memoizedState,
        r = 0;
      (t !== null && (r = t.retryLane), Su(e, r));
    }
    function Tz(e, t) {
      var r = 0;
      switch (e.tag) {
        case 13:
          var o = e.stateNode,
            n = e.memoizedState;
          n !== null && (r = n.retryLane);
          break;
        case 19:
          o = e.stateNode;
          break;
        default:
          throw Error(B(314));
      }
      (o !== null && o.delete(t), Su(e, r));
    }
    var Nu;
    Nu = function (e, t, r) {
      if (e !== null)
        if (e.memoizedProps !== t.pendingProps || $e.current) Ke = !0;
        else {
          if ((e.lanes & r) === 0 && (t.flags & 128) === 0)
            return ((Ke = !1), uz(e, t, r));
          Ke = (e.flags & 131072) !== 0;
        }
      else ((Ke = !1), se && (t.flags & 1048576) !== 0 && Fh(t, os, t.index));
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var o = t.type;
          (Ra(e, t), (e = t.pendingProps));
          var n = vo(t, Pe.current);
          (yo(t, r), (n = ol(null, t, o, e, n, r)));
          var a = nl();
          return (
            (t.flags |= 1),
            typeof n == "object" &&
            n !== null &&
            typeof n.render == "function" &&
            n.$$typeof === void 0
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                Ge(o) ? ((a = !0), ts(t)) : (a = !1),
                (t.memoizedState =
                  n.state !== null && n.state !== void 0 ? n.state : null),
                qc(t),
                (n.updater = ys),
                (t.stateNode = n),
                (n._reactInternals = t),
                mc(t, o, e, r),
                (t = zc(null, t, o, !0, a, r)))
              : ((t.tag = 0),
                se && a && Vc(t),
                Le(null, t, n, r),
                (t = t.child)),
            t
          );
        case 16:
          o = t.elementType;
          e: {
            switch (
              (Ra(e, t),
              (e = t.pendingProps),
              (n = o._init),
              (o = n(o._payload)),
              (t.type = o),
              (n = t.tag = Uz(o)),
              (e = xt(o, e)),
              n)
            ) {
              case 0:
                t = xc(null, t, o, e, r);
                break e;
              case 1:
                t = Bp(null, t, o, e, r);
                break e;
              case 11:
                t = vp(null, t, o, e, r);
                break e;
              case 14:
                t = Tp(null, t, o, xt(o.type, e), r);
                break e;
            }
            throw Error(B(306, o, ""));
          }
          return t;
        case 0:
          return (
            (o = t.type),
            (n = t.pendingProps),
            (n = t.elementType === o ? n : xt(o, n)),
            xc(e, t, o, n, r)
          );
        case 1:
          return (
            (o = t.type),
            (n = t.pendingProps),
            (n = t.elementType === o ? n : xt(o, n)),
            Bp(e, t, o, n, r)
          );
        case 3:
          e: {
            if ((gu(t), e === null)) throw Error(B(387));
            ((o = t.pendingProps),
              (a = t.memoizedState),
              (n = a.element),
              Wh(e, t),
              ss(t, o, null, r));
            var i = t.memoizedState;
            if (((o = i.element), a.isDehydrated))
              if (
                ((a = {
                  element: o,
                  isDehydrated: !1,
                  cache: i.cache,
                  pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
                  transitions: i.transitions,
                }),
                (t.updateQueue.baseState = a),
                (t.memoizedState = a),
                t.flags & 256)
              ) {
                ((n = Ao(Error(B(423)), t)), (t = Up(e, t, o, r, n)));
                break e;
              } else if (o !== n) {
                ((n = Ao(Error(B(424)), t)), (t = Up(e, t, o, r, n)));
                break e;
              } else
                for (
                  Xe = fr(t.stateNode.containerInfo.firstChild),
                    et = t,
                    se = !0,
                    ft = null,
                    r = Oh(t, null, o, r),
                    t.child = r;
                  r;
                )
                  ((r.flags = (r.flags & -3) | 4096), (r = r.sibling));
            else {
              if ((To(), o === n)) {
                t = Zt(e, t, r);
                break e;
              }
              Le(e, t, o, r);
            }
            t = t.child;
          }
          return t;
        case 5:
          return (
            Jh(t),
            e === null && pc(t),
            (o = t.type),
            (n = t.pendingProps),
            (a = e !== null ? e.memoizedProps : null),
            (i = n.children),
            sc(o, n) ? (i = null) : a !== null && sc(o, a) && (t.flags |= 32),
            mu(e, t),
            Le(e, t, i, r),
            t.child
          );
        case 6:
          return (e === null && pc(t), null);
        case 13:
          return xu(e, t, r);
        case 4:
          return (
            Xc(t, t.stateNode.containerInfo),
            (o = t.pendingProps),
            e === null ? (t.child = Bo(t, null, o, r)) : Le(e, t, o, r),
            t.child
          );
        case 11:
          return (
            (o = t.type),
            (n = t.pendingProps),
            (n = t.elementType === o ? n : xt(o, n)),
            vp(e, t, o, n, r)
          );
        case 7:
          return (Le(e, t, t.pendingProps, r), t.child);
        case 8:
          return (Le(e, t, t.pendingProps.children, r), t.child);
        case 12:
          return (Le(e, t, t.pendingProps.children, r), t.child);
        case 10:
          e: {
            if (
              ((o = t.type._context),
              (n = t.pendingProps),
              (a = t.memoizedProps),
              (i = n.value),
              q(ns, o._currentValue),
              (o._currentValue = i),
              a !== null)
            )
              if (bt(a.value, i)) {
                if (a.children === n.children && !$e.current) {
                  t = Zt(e, t, r);
                  break e;
                }
              } else
                for (a = t.child, a !== null && (a.return = t); a !== null;) {
                  var c = a.dependencies;
                  if (c !== null) {
                    i = a.child;
                    for (var d = c.firstContext; d !== null;) {
                      if (d.context === o) {
                        if (a.tag === 1) {
                          ((d = Kt(-1, r & -r)), (d.tag = 2));
                          var p = a.updateQueue;
                          if (p !== null) {
                            p = p.shared;
                            var x = p.pending;
                            (x === null
                              ? (d.next = d)
                              : ((d.next = x.next), (x.next = d)),
                              (p.pending = d));
                          }
                        }
                        ((a.lanes |= r),
                          (d = a.alternate),
                          d !== null && (d.lanes |= r),
                          hc(a.return, r, t),
                          (c.lanes |= r));
                        break;
                      }
                      d = d.next;
                    }
                  } else if (a.tag === 10)
                    i = a.type === t.type ? null : a.child;
                  else if (a.tag === 18) {
                    if (((i = a.return), i === null)) throw Error(B(341));
                    ((i.lanes |= r),
                      (c = i.alternate),
                      c !== null && (c.lanes |= r),
                      hc(i, r, t),
                      (i = a.sibling));
                  } else i = a.child;
                  if (i !== null) i.return = a;
                  else
                    for (i = a; i !== null;) {
                      if (i === t) {
                        i = null;
                        break;
                      }
                      if (((a = i.sibling), a !== null)) {
                        ((a.return = i.return), (i = a));
                        break;
                      }
                      i = i.return;
                    }
                  a = i;
                }
            (Le(e, t, n.children, r), (t = t.child));
          }
          return t;
        case 9:
          return (
            (n = t.type),
            (o = t.pendingProps.children),
            yo(t, r),
            (n = dt(n)),
            (o = o(n)),
            (t.flags |= 1),
            Le(e, t, o, r),
            t.child
          );
        case 14:
          return (
            (o = t.type),
            (n = xt(o, t.pendingProps)),
            (n = xt(o.type, n)),
            Tp(e, t, o, n, r)
          );
        case 15:
          return hu(e, t, t.type, t.pendingProps, r);
        case 17:
          return (
            (o = t.type),
            (n = t.pendingProps),
            (n = t.elementType === o ? n : xt(o, n)),
            Ra(e, t),
            (t.tag = 1),
            Ge(o) ? ((e = !0), ts(t)) : (e = !1),
            yo(t, r),
            lu(t, o, n),
            mc(t, o, n, r),
            zc(null, t, o, !0, e, r)
          );
        case 19:
          return zu(e, t, r);
        case 22:
          return uu(e, t, r);
      }
      throw Error(B(156, t.tag));
    };
    function Du(e, t) {
      return sh(e, t);
    }
    function Bz(e, t, r, o) {
      ((this.tag = e),
        (this.key = r),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = o),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null));
    }
    function ct(e, t, r, o) {
      return new Bz(e, t, r, o);
    }
    function ml(e) {
      return ((e = e.prototype), !(!e || !e.isReactComponent));
    }
    function Uz(e) {
      if (typeof e == "function") return ml(e) ? 1 : 0;
      if (e != null) {
        if (((e = e.$$typeof), e === Dc)) return 11;
        if (e === Ic) return 14;
      }
      return 2;
    }
    function yr(e, t) {
      var r = e.alternate;
      return (
        r === null
          ? ((r = ct(e.tag, t, e.key, e.mode)),
            (r.elementType = e.elementType),
            (r.type = e.type),
            (r.stateNode = e.stateNode),
            (r.alternate = e),
            (e.alternate = r))
          : ((r.pendingProps = t),
            (r.type = e.type),
            (r.flags = 0),
            (r.subtreeFlags = 0),
            (r.deletions = null)),
        (r.flags = e.flags & 14680064),
        (r.childLanes = e.childLanes),
        (r.lanes = e.lanes),
        (r.child = e.child),
        (r.memoizedProps = e.memoizedProps),
        (r.memoizedState = e.memoizedState),
        (r.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (r.dependencies =
          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (r.sibling = e.sibling),
        (r.index = e.index),
        (r.ref = e.ref),
        r
      );
    }
    function Ha(e, t, r, o, n, a) {
      var i = 2;
      if (((o = e), typeof e == "function")) ml(e) && (i = 1);
      else if (typeof e == "string") i = 5;
      else
        e: switch (e) {
          case so:
            return Or(r.children, n, a, t);
          case Nc:
            ((i = 8), (n |= 8));
            break;
          case _i:
            return (
              (e = ct(12, r, t, n | 2)),
              (e.elementType = _i),
              (e.lanes = a),
              e
            );
          case Li:
            return (
              (e = ct(13, r, t, n)),
              (e.elementType = Li),
              (e.lanes = a),
              e
            );
          case Oi:
            return (
              (e = ct(19, r, t, n)),
              (e.elementType = Oi),
              (e.lanes = a),
              e
            );
          case Jp:
            return vs(r, n, a, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Rp:
                  i = 10;
                  break e;
                case Wp:
                  i = 9;
                  break e;
                case Dc:
                  i = 11;
                  break e;
                case Ic:
                  i = 14;
                  break e;
                case lr:
                  ((i = 16), (o = null));
                  break e;
              }
            throw Error(B(130, e == null ? e : typeof e, ""));
        }
      return (
        (t = ct(i, r, t, n)),
        (t.elementType = e),
        (t.type = o),
        (t.lanes = a),
        t
      );
    }
    function Or(e, t, r, o) {
      return ((e = ct(7, e, o, t)), (e.lanes = r), e);
    }
    function vs(e, t, r, o) {
      return (
        (e = ct(22, e, o, t)),
        (e.elementType = Jp),
        (e.lanes = r),
        (e.stateNode = { isHidden: !1 }),
        e
      );
    }
    function Mi(e, t, r) {
      return ((e = ct(6, e, null, t)), (e.lanes = r), e);
    }
    function Fi(e, t, r) {
      return (
        (t = ct(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = r),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      );
    }
    function Az(e, t, r, o, n) {
      ((this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = ji(0)),
        (this.expirationTimes = ji(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = ji(0)),
        (this.identifierPrefix = o),
        (this.onRecoverableError = n),
        (this.mutableSourceEagerHydrationData = null));
    }
    function gl(e, t, r, o, n, a, i, c, d) {
      return (
        (e = new Az(e, t, r, c, d)),
        t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
        (a = ct(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
          element: o,
          isDehydrated: r,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        qc(a),
        e
      );
    }
    function Cz(e, t, r) {
      var o =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: ao,
        key: o == null ? null : "" + o,
        children: e,
        containerInfo: t,
        implementation: r,
      };
    }
    function Iu(e) {
      if (!e) return kr;
      e = e._reactInternals;
      e: {
        if ($r(e) !== e || e.tag !== 1) throw Error(B(170));
        var t = e;
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context;
              break e;
            case 1:
              if (Ge(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
              }
          }
          t = t.return;
        } while (t !== null);
        throw Error(B(171));
      }
      if (e.tag === 1) {
        var r = e.type;
        if (Ge(r)) return Ih(e, r, t);
      }
      return t;
    }
    function Mu(e, t, r, o, n, a, i, c, d) {
      return (
        (e = gl(r, o, !0, e, n, a, i, c, d)),
        (e.context = Iu(null)),
        (r = e.current),
        (o = Oe()),
        (n = br(r)),
        (a = Kt(o, n)),
        (a.callback = t ?? null),
        jr(r, a, n),
        (e.current.lanes = n),
        Pn(e, n, o),
        Qe(e, o),
        e
      );
    }
    function Ts(e, t, r, o) {
      var n = t.current,
        a = Oe(),
        i = br(n);
      return (
        (r = Iu(r)),
        t.context === null ? (t.context = r) : (t.pendingContext = r),
        (t = Kt(a, i)),
        (t.payload = { element: e }),
        (o = o === void 0 ? null : o),
        o !== null && (t.callback = o),
        (e = jr(n, t, i)),
        e !== null && (wt(e, n, i, a), _a(e, n, i)),
        i
      );
    }
    function ms(e) {
      return (
        (e = e.current),
        e.child ? (e.child.tag === 5, e.child.stateNode) : null
      );
    }
    function _p(e, t) {
      if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var r = e.retryLane;
        e.retryLane = r !== 0 && r < t ? r : t;
      }
    }
    function xl(e, t) {
      (_p(e, t), (e = e.alternate) && _p(e, t));
    }
    function Sz() {
      return null;
    }
    var Fu =
      typeof reportError == "function"
        ? reportError
        : function (e) {
            console.error(e);
          };
    function zl(e) {
      this._internalRoot = e;
    }
    Bs.prototype.render = zl.prototype.render = function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(B(409));
      Ts(e, t, null, null);
    };
    Bs.prototype.unmount = zl.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        (Vr(function () {
          Ts(null, e, null, null);
        }),
          (t[Gt] = null));
      }
    };
    function Bs(e) {
      this._internalRoot = e;
    }
    Bs.prototype.unstable_scheduleHydration = function (e) {
      if (e) {
        var t = uh();
        e = { blockedOn: null, target: e, priority: t };
        for (var r = 0; r < pr.length && t !== 0 && t < pr[r].priority; r++);
        (pr.splice(r, 0, e), r === 0 && gh(e));
      }
    };
    function fl(e) {
      return !(
        !e ||
        (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
      );
    }
    function Us(e) {
      return !(
        !e ||
        (e.nodeType !== 1 &&
          e.nodeType !== 9 &&
          e.nodeType !== 11 &&
          (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
      );
    }
    function Lp() {}
    function Nz(e, t, r, o, n) {
      if (n) {
        if (typeof o == "function") {
          var a = o;
          o = function () {
            var p = ms(i);
            a.call(p);
          };
        }
        var i = Mu(t, o, e, 0, null, !1, !1, "", Lp);
        return (
          (e._reactRootContainer = i),
          (e[Gt] = i.current),
          Un(e.nodeType === 8 ? e.parentNode : e),
          Vr(),
          i
        );
      }
      for (; (n = e.lastChild);) e.removeChild(n);
      if (typeof o == "function") {
        var c = o;
        o = function () {
          var p = ms(d);
          c.call(p);
        };
      }
      var d = gl(e, 0, !1, null, null, !1, !1, "", Lp);
      return (
        (e._reactRootContainer = d),
        (e[Gt] = d.current),
        Un(e.nodeType === 8 ? e.parentNode : e),
        Vr(function () {
          Ts(t, d, r, o);
        }),
        d
      );
    }
    function As(e, t, r, o, n) {
      var a = r._reactRootContainer;
      if (a) {
        var i = a;
        if (typeof n == "function") {
          var c = n;
          n = function () {
            var d = ms(i);
            c.call(d);
          };
        }
        Ts(t, i, e, n);
      } else i = Nz(r, t, e, n, o);
      return ms(i);
    }
    ph = function (e) {
      switch (e.tag) {
        case 3:
          var t = e.stateNode;
          if (t.current.memoizedState.isDehydrated) {
            var r = ln(t.pendingLanes);
            r !== 0 &&
              (Pc(t, r | 1),
              Qe(t, ge()),
              ($ & 6) === 0 && ((Co = ge() + 500), Br()));
          }
          break;
        case 13:
          (Vr(function () {
            var o = Qt(e, 1);
            if (o !== null) {
              var n = Oe();
              wt(o, e, 1, n);
            }
          }),
            xl(e, 1));
      }
    };
    _c = function (e) {
      if (e.tag === 13) {
        var t = Qt(e, 134217728);
        if (t !== null) {
          var r = Oe();
          wt(t, e, 134217728, r);
        }
        xl(e, 134217728);
      }
    };
    hh = function (e) {
      if (e.tag === 13) {
        var t = br(e),
          r = Qt(e, t);
        if (r !== null) {
          var o = Oe();
          wt(r, e, t, o);
        }
        xl(e, t);
      }
    };
    uh = function () {
      return Z;
    };
    mh = function (e, t) {
      var r = Z;
      try {
        return ((Z = e), t());
      } finally {
        Z = r;
      }
    };
    Zi = function (e, t, r) {
      switch (t) {
        case "input":
          if ((Ji(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode;) r = r.parentNode;
            for (
              r = r.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]',
              ),
                t = 0;
              t < r.length;
              t++
            ) {
              var o = r[t];
              if (o !== e && o.form === e.form) {
                var n = js(o);
                if (!n) throw Error(B(90));
                (Vp(o), Ji(o, n));
              }
            }
          }
          break;
        case "textarea":
          $p(e, r);
          break;
        case "select":
          ((t = r.value), t != null && fo(e, !!r.multiple, t, !1));
      }
    };
    eh = pl;
    th = Vr;
    var Dz = { usingClientEntryPoint: !1, Events: [Ln, po, js, qp, Xp, pl] },
      nn = {
        findFiberByHostInstance: Fr,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom",
      },
      Iz = {
        bundleType: nn.bundleType,
        version: nn.version,
        rendererPackageName: nn.rendererPackageName,
        rendererConfig: nn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Yt.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return ((e = nh(e)), e === null ? null : e.stateNode);
        },
        findFiberByHostInstance: nn.findFiberByHostInstance || Sz,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
      };
    if (
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" &&
      ((an = __REACT_DEVTOOLS_GLOBAL_HOOK__),
      !an.isDisabled && an.supportsFiber)
    )
      try {
        ((gs = an.inject(Iz)), (At = an));
      } catch {}
    var an;
    ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dz;
    ot.createPortal = function (e, t) {
      var r =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!fl(t)) throw Error(B(200));
      return Cz(e, t, null, r);
    };
    ot.createRoot = function (e, t) {
      if (!fl(e)) throw Error(B(299));
      var r = !1,
        o = "",
        n = Fu;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (r = !0),
          t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (n = t.onRecoverableError)),
        (t = gl(e, 1, !1, null, null, r, !1, o, n)),
        (e[Gt] = t.current),
        Un(e.nodeType === 8 ? e.parentNode : e),
        new zl(t)
      );
    };
    ot.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(B(188))
          : ((e = Object.keys(e).join(",")), Error(B(268, e)));
      return ((e = nh(t)), (e = e === null ? null : e.stateNode), e);
    };
    ot.flushSync = function (e) {
      return Vr(e);
    };
    ot.hydrate = function (e, t, r) {
      if (!Us(t)) throw Error(B(200));
      return As(null, e, t, !0, r);
    };
    ot.hydrateRoot = function (e, t, r) {
      if (!fl(e)) throw Error(B(405));
      var o = (r != null && r.hydratedSources) || null,
        n = !1,
        a = "",
        i = Fu;
      if (
        (r != null &&
          (r.unstable_strictMode === !0 && (n = !0),
          r.identifierPrefix !== void 0 && (a = r.identifierPrefix),
          r.onRecoverableError !== void 0 && (i = r.onRecoverableError)),
        (t = Mu(t, null, e, 1, r ?? null, n, !1, a, i)),
        (e[Gt] = t.current),
        Un(e),
        o)
      )
        for (e = 0; e < o.length; e++)
          ((r = o[e]),
            (n = r._getVersion),
            (n = n(r._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [r, n])
              : t.mutableSourceEagerHydrationData.push(r, n));
      return new Bs(t);
    };
    ot.render = function (e, t, r) {
      if (!Us(t)) throw Error(B(200));
      return As(null, e, t, !1, r);
    };
    ot.unmountComponentAtNode = function (e) {
      if (!Us(e)) throw Error(B(40));
      return e._reactRootContainer
        ? (Vr(function () {
            As(null, null, e, !1, function () {
              ((e._reactRootContainer = null), (e[Gt] = null));
            });
          }),
          !0)
        : !1;
    };
    ot.unstable_batchedUpdates = pl;
    ot.unstable_renderSubtreeIntoContainer = function (e, t, r, o) {
      if (!Us(r)) throw Error(B(200));
      if (e == null || e._reactInternals === void 0) throw Error(B(38));
      return As(e, t, r, !1, o);
    };
    ot.version = "18.3.1-next-f1338f8080-20240426";
  });
  var jl = Cr((yf, Lu) => {
    "use strict";
    function _u() {
      if (!(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      ))
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_u);
        } catch (e) {
          console.error(e);
        }
    }
    (_u(), (Lu.exports = Pu()));
  });
  var Ru = Cr((wl) => {
    "use strict";
    var Ou = jl();
    ((wl.createRoot = Ou.createRoot), (wl.hydrateRoot = Ou.hydrateRoot));
    var Ef;
  });
  var Ol = Sr(Nr()),
    Mm = Sr(Ru());
  var ie = Sr(Nr()),
    y1 = Sr(jl());
  var M = Sr(Nr());
  function Rn() {
    return (
      (Rn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          }),
      Rn.apply(null, arguments)
    );
  }
  var yt;
  (function (e) {
    ((e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE"));
  })(yt || (yt = {}));
  var Wu = "popstate";
  function $u(e) {
    e === void 0 && (e = {});
    function t(n, a) {
      let {
        pathname: i = "/",
        search: c = "",
        hash: d = "",
      } = Nt(n.location.hash.substr(1));
      return (
        !i.startsWith("/") && !i.startsWith(".") && (i = "/" + i),
        yl(
          "",
          { pathname: i, search: c, hash: d },
          (a.state && a.state.usr) || null,
          (a.state && a.state.key) || "default",
        )
      );
    }
    function r(n, a) {
      let i = n.document.querySelector("base"),
        c = "";
      if (i && i.getAttribute("href")) {
        let d = n.location.href,
          p = d.indexOf("#");
        c = p === -1 ? d : d.slice(0, p);
      }
      return c + "#" + (typeof a == "string" ? a : Gr(a));
    }
    function o(n, a) {
      El(
        n.pathname.charAt(0) === "/",
        "relative pathnames are not supported in hash history.push(" +
          JSON.stringify(a) +
          ")",
      );
    }
    return Fz(t, r, o, e);
  }
  function me(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
  }
  function El(e, t) {
    if (!e) {
      typeof console < "u" && console.warn(t);
      try {
        throw new Error(t);
      } catch {}
    }
  }
  function Mz() {
    return Math.random().toString(36).substr(2, 8);
  }
  function Ju(e, t) {
    return { usr: e.state, key: e.key, idx: t };
  }
  function yl(e, t, r, o) {
    return (
      r === void 0 && (r = null),
      Rn(
        {
          pathname: typeof e == "string" ? e : e.pathname,
          search: "",
          hash: "",
        },
        typeof t == "string" ? Nt(t) : t,
        { state: r, key: (t && t.key) || o || Mz() },
      )
    );
  }
  function Gr(e) {
    let { pathname: t = "/", search: r = "", hash: o = "" } = e;
    return (
      r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
      o && o !== "#" && (t += o.charAt(0) === "#" ? o : "#" + o),
      t
    );
  }
  function Nt(e) {
    let t = {};
    if (e) {
      let r = e.indexOf("#");
      r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
      let o = e.indexOf("?");
      (o >= 0 && ((t.search = e.substr(o)), (e = e.substr(0, o))),
        e && (t.pathname = e));
    }
    return t;
  }
  function Fz(e, t, r, o) {
    o === void 0 && (o = {});
    let { window: n = document.defaultView, v5Compat: a = !1 } = o,
      i = n.history,
      c = yt.Pop,
      d = null,
      p = x();
    p == null && ((p = 0), i.replaceState(Rn({}, i.state, { idx: p }), ""));
    function x() {
      return (i.state || { idx: null }).idx;
    }
    function m() {
      c = yt.Pop;
      let T = x(),
        u = T == null ? null : T - p;
      ((p = T), d && d({ action: c, location: k.location, delta: u }));
    }
    function f(T, u) {
      c = yt.Push;
      let h = yl(k.location, T, u);
      (r && r(h, T), (p = x() + 1));
      let g = Ju(h, p),
        b = k.createHref(h);
      try {
        i.pushState(g, "", b);
      } catch (E) {
        if (E instanceof DOMException && E.name === "DataCloneError") throw E;
        n.location.assign(b);
      }
      a && d && d({ action: c, location: k.location, delta: 1 });
    }
    function j(T, u) {
      c = yt.Replace;
      let h = yl(k.location, T, u);
      (r && r(h, T), (p = x()));
      let g = Ju(h, p),
        b = k.createHref(h);
      (i.replaceState(g, "", b),
        a && d && d({ action: c, location: k.location, delta: 0 }));
    }
    function y(T) {
      let u =
          n.location.origin !== "null" ? n.location.origin : n.location.href,
        h = typeof T == "string" ? T : Gr(T);
      return (
        (h = h.replace(/ $/, "%20")),
        me(
          u,
          "No window.location.(origin|href) available to create URL for href: " +
            h,
        ),
        new URL(h, u)
      );
    }
    let k = {
      get action() {
        return c;
      },
      get location() {
        return e(n, i);
      },
      listen(T) {
        if (d) throw new Error("A history only accepts one active listener");
        return (
          n.addEventListener(Wu, m),
          (d = T),
          () => {
            (n.removeEventListener(Wu, m), (d = null));
          }
        );
      },
      createHref(T) {
        return t(n, T);
      },
      createURL: y,
      encodeLocation(T) {
        let u = y(T);
        return { pathname: u.pathname, search: u.search, hash: u.hash };
      },
      push: f,
      replace: j,
      go(T) {
        return i.go(T);
      },
    };
    return k;
  }
  var Hu;
  (function (e) {
    ((e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error"));
  })(Hu || (Hu = {}));
  function Cs(e, t, r) {
    return (r === void 0 && (r = "/"), Pz(e, t, r, !1));
  }
  function Pz(e, t, r, o) {
    let n = typeof t == "string" ? Nt(t) : t,
      a = Wn(n.pathname || "/", r);
    if (a == null) return null;
    let i = Gu(e);
    _z(i);
    let c = null,
      d = Zu(a);
    for (let p = 0; c == null && p < i.length; ++p) c = $z(i[p], d, o);
    return c;
  }
  function Gu(e, t, r, o) {
    (t === void 0 && (t = []),
      r === void 0 && (r = []),
      o === void 0 && (o = ""));
    let n = (a, i, c) => {
      let d = {
        relativePath: c === void 0 ? a.path || "" : c,
        caseSensitive: a.caseSensitive === !0,
        childrenIndex: i,
        route: a,
      };
      d.relativePath.startsWith("/") &&
        (me(
          d.relativePath.startsWith(o),
          'Absolute route path "' +
            d.relativePath +
            '" nested under path ' +
            ('"' + o + '" is not valid. An absolute child route path ') +
            "must start with the combined path of all its parent routes.",
        ),
        (d.relativePath = d.relativePath.slice(o.length)));
      let p = St([o, d.relativePath]),
        x = r.concat(d);
      (a.children &&
        a.children.length > 0 &&
        (me(
          a.index !== !0,
          "Index routes must not have child routes. Please remove " +
            ('all child routes from route path "' + p + '".'),
        ),
        Gu(a.children, t, x, p)),
        !(a.path == null && !a.index) &&
          t.push({ path: p, score: Vz(p, a.index), routesMeta: x }));
    };
    return (
      e.forEach((a, i) => {
        var c;
        if (a.path === "" || !((c = a.path) != null && c.includes("?")))
          n(a, i);
        else for (let d of Qu(a.path)) n(a, i, d);
      }),
      t
    );
  }
  function Qu(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [r, ...o] = t,
      n = r.endsWith("?"),
      a = r.replace(/\?$/, "");
    if (o.length === 0) return n ? [a, ""] : [a];
    let i = Qu(o.join("/")),
      c = [];
    return (
      c.push(...i.map((d) => (d === "" ? a : [a, d].join("/")))),
      n && c.push(...i),
      c.map((d) => (e.startsWith("/") && d === "" ? "/" : d))
    );
  }
  function _z(e) {
    e.sort((t, r) =>
      t.score !== r.score
        ? r.score - t.score
        : Kz(
            t.routesMeta.map((o) => o.childrenIndex),
            r.routesMeta.map((o) => o.childrenIndex),
          ),
    );
  }
  var Lz = /^:[\w-]+$/,
    Oz = 3,
    Rz = 2,
    Wz = 1,
    Jz = 10,
    Hz = -2,
    Vu = (e) => e === "*";
  function Vz(e, t) {
    let r = e.split("/"),
      o = r.length;
    return (
      r.some(Vu) && (o += Hz),
      t && (o += Rz),
      r
        .filter((n) => !Vu(n))
        .reduce((n, a) => n + (Lz.test(a) ? Oz : a === "" ? Wz : Jz), o)
    );
  }
  function Kz(e, t) {
    return e.length === t.length && e.slice(0, -1).every((o, n) => o === t[n])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function $z(e, t, r) {
    r === void 0 && (r = !1);
    let { routesMeta: o } = e,
      n = {},
      a = "/",
      i = [];
    for (let c = 0; c < o.length; ++c) {
      let d = o[c],
        p = c === o.length - 1,
        x = a === "/" ? t : t.slice(a.length) || "/",
        m = Do(
          { path: d.relativePath, caseSensitive: d.caseSensitive, end: p },
          x,
        ),
        f = d.route;
      if (
        (!m &&
          p &&
          r &&
          !o[o.length - 1].route.index &&
          (m = Do(
            { path: d.relativePath, caseSensitive: d.caseSensitive, end: !1 },
            x,
          )),
        !m)
      )
        return null;
      (Object.assign(n, m.params),
        i.push({
          params: n,
          pathname: St([a, m.pathname]),
          pathnameBase: Zz(St([a, m.pathnameBase])),
          route: f,
        }),
        m.pathnameBase !== "/" && (a = St([a, m.pathnameBase])));
    }
    return i;
  }
  function Do(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [r, o] = Gz(e.path, e.caseSensitive, e.end),
      n = t.match(r);
    if (!n) return null;
    let a = n[0],
      i = a.replace(/(.)\/+$/, "$1"),
      c = n.slice(1);
    return {
      params: o.reduce((p, x, m) => {
        let { paramName: f, isOptional: j } = x;
        if (f === "*") {
          let k = c[m] || "";
          i = a.slice(0, a.length - k.length).replace(/(.)\/+$/, "$1");
        }
        let y = c[m];
        return (
          j && !y ? (p[f] = void 0) : (p[f] = (y || "").replace(/%2F/g, "/")),
          p
        );
      }, {}),
      pathname: a,
      pathnameBase: i,
      pattern: e,
    };
  }
  function Gz(e, t, r) {
    (t === void 0 && (t = !1),
      r === void 0 && (r = !0),
      El(
        e === "*" || !e.endsWith("*") || e.endsWith("/*"),
        'Route path "' +
          e +
          '" will be treated as if it were ' +
          ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
          "always follow a `/` in the pattern. To get rid of this warning, " +
          ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'),
      ));
    let o = [],
      n =
        "^" +
        e
          .replace(/\/*\*?$/, "")
          .replace(/^\/*/, "/")
          .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
          .replace(
            /\/:([\w-]+)(\?)?/g,
            (i, c, d) => (
              o.push({ paramName: c, isOptional: d != null }),
              d ? "/?([^\\/]+)?" : "/([^\\/]+)"
            ),
          );
    return (
      e.endsWith("*")
        ? (o.push({ paramName: "*" }),
          (n += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
        : r
          ? (n += "\\/*$")
          : e !== "" && e !== "/" && (n += "(?:(?=\\/|$))"),
      [new RegExp(n, t ? void 0 : "i"), o]
    );
  }
  function Zu(e) {
    try {
      return e
        .split("/")
        .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
        .join("/");
    } catch (t) {
      return (
        El(
          !1,
          'The URL path "' +
            e +
            '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
            ("encoding (" + t + ")."),
        ),
        e
      );
    }
  }
  function Wn(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let r = t.endsWith("/") ? t.length - 1 : t.length,
      o = e.charAt(r);
    return o && o !== "/" ? null : e.slice(r) || "/";
  }
  function kl(e, t) {
    t === void 0 && (t = "/");
    let {
        pathname: r,
        search: o = "",
        hash: n = "",
      } = typeof e == "string" ? Nt(e) : e,
      a;
    return (
      r
        ? ((r = Yu(r)),
          r.startsWith("/") ? (a = Ku(r.substring(1), "/")) : (a = Ku(r, t)))
        : (a = t),
      { pathname: a, search: Yz(o), hash: qz(n) }
    );
  }
  function Ku(e, t) {
    let r = t.replace(/\/+$/, "").split("/");
    return (
      e.split("/").forEach((n) => {
        n === ".." ? r.length > 1 && r.pop() : n !== "." && r.push(n);
      }),
      r.length > 1 ? r.join("/") : "/"
    );
  }
  function bl(e, t, r, o) {
    return (
      "Cannot include a '" +
      e +
      "' character in a manually specified " +
      ("`to." +
        t +
        "` field [" +
        JSON.stringify(o) +
        "].  Please separate it out to the ") +
      ("`to." +
        r +
        "` field. Alternatively you may provide the full path as ") +
      'a string in <Link to="..."> and the router will parse it for you.'
    );
  }
  function Qz(e) {
    return e.filter(
      (t, r) => r === 0 || (t.route.path && t.route.path.length > 0),
    );
  }
  function vl(e, t) {
    let r = Qz(e);
    return t
      ? r.map((o, n) => (n === r.length - 1 ? o.pathname : o.pathnameBase))
      : r.map((o) => o.pathnameBase);
  }
  function Tl(e, t, r, o) {
    o === void 0 && (o = !1);
    let n;
    typeof e == "string"
      ? (n = Nt(e))
      : ((n = Rn({}, e)),
        me(
          !n.pathname || !n.pathname.includes("?"),
          bl("?", "pathname", "search", n),
        ),
        me(
          !n.pathname || !n.pathname.includes("#"),
          bl("#", "pathname", "hash", n),
        ),
        me(!n.search || !n.search.includes("#"), bl("#", "search", "hash", n)));
    let a = e === "" || n.pathname === "",
      i = a ? "/" : n.pathname,
      c;
    if (i == null) c = r;
    else {
      let m = t.length - 1;
      if (!o && i.startsWith("..")) {
        let f = i.split("/");
        for (; f[0] === "..";) (f.shift(), (m -= 1));
        n.pathname = f.join("/");
      }
      c = m >= 0 ? t[m] : "/";
    }
    let d = kl(n, c),
      p = i && i !== "/" && i.endsWith("/"),
      x = (a || i === ".") && r.endsWith("/");
    return (!d.pathname.endsWith("/") && (p || x) && (d.pathname += "/"), d);
  }
  var Yu = (e) => e.replace(/\/\/+/g, "/"),
    St = (e) => Yu(e.join("/")),
    Zz = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    Yz = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    qz = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
  function Ss(e) {
    return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
    );
  }
  var qu = ["post", "put", "patch", "delete"],
    vf = new Set(qu),
    Xz = ["get", ...qu],
    Tf = new Set(Xz);
  function Jn() {
    return (
      (Jn = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          }),
      Jn.apply(null, arguments)
    );
  }
  var Vn = M.createContext(null),
    Ul = M.createContext(null);
  var qt = M.createContext(null),
    Kn = M.createContext(null),
    Xt = M.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    tm = M.createContext(null);
  function Al(e, t) {
    let { relative: r } = t === void 0 ? {} : t;
    Mo() || me(!1);
    let { basename: o, navigator: n } = M.useContext(qt),
      { hash: a, pathname: i, search: c } = Ds(e, { relative: r }),
      d = i;
    return (
      o !== "/" && (d = i === "/" ? o : St([o, i])),
      n.createHref({ pathname: d, search: c, hash: a })
    );
  }
  function Mo() {
    return M.useContext(Kn) != null;
  }
  function Fo() {
    return (Mo() || me(!1), M.useContext(Kn).location);
  }
  function rm(e) {
    M.useContext(qt).static || M.useLayoutEffect(e);
  }
  function Cl() {
    let { isDataRoute: e } = M.useContext(Xt);
    return e ? g1() : i1();
  }
  function i1() {
    Mo() || me(!1);
    let e = M.useContext(Vn),
      { basename: t, future: r, navigator: o } = M.useContext(qt),
      { matches: n } = M.useContext(Xt),
      { pathname: a } = Fo(),
      i = JSON.stringify(vl(n, r.v7_relativeSplatPath)),
      c = M.useRef(!1);
    return (
      rm(() => {
        c.current = !0;
      }),
      M.useCallback(
        function (p, x) {
          if ((x === void 0 && (x = {}), !c.current)) return;
          if (typeof p == "number") {
            o.go(p);
            return;
          }
          let m = Tl(p, JSON.parse(i), a, x.relative === "path");
          (e == null &&
            t !== "/" &&
            (m.pathname = m.pathname === "/" ? t : St([t, m.pathname])),
            (x.replace ? o.replace : o.push)(m, x.state, x));
        },
        [t, o, i, a, e],
      )
    );
  }
  function Ds(e, t) {
    let { relative: r } = t === void 0 ? {} : t,
      { future: o } = M.useContext(qt),
      { matches: n } = M.useContext(Xt),
      { pathname: a } = Fo(),
      i = JSON.stringify(vl(n, o.v7_relativeSplatPath));
    return M.useMemo(() => Tl(e, JSON.parse(i), a, r === "path"), [e, i, a, r]);
  }
  function om(e, t) {
    return nm(e, t);
  }
  function nm(e, t, r, o) {
    Mo() || me(!1);
    let { navigator: n } = M.useContext(qt),
      { matches: a } = M.useContext(Xt),
      i = a[a.length - 1],
      c = i ? i.params : {},
      d = i ? i.pathname : "/",
      p = i ? i.pathnameBase : "/",
      x = i && i.route,
      m = Fo(),
      f;
    if (t) {
      var j;
      let h = typeof t == "string" ? Nt(t) : t;
      (p === "/" || ((j = h.pathname) != null && j.startsWith(p)) || me(!1),
        (f = h));
    } else f = m;
    let y = f.pathname || "/",
      k = y;
    if (p !== "/") {
      let h = p.replace(/^\//, "").split("/");
      k = "/" + y.replace(/^\//, "").split("/").slice(h.length).join("/");
    }
    let T = Cs(e, { pathname: k }),
      u = p1(
        T &&
          T.map((h) =>
            Object.assign({}, h, {
              params: Object.assign({}, c, h.params),
              pathname: St([
                p,
                n.encodeLocation
                  ? n.encodeLocation(h.pathname).pathname
                  : h.pathname,
              ]),
              pathnameBase:
                h.pathnameBase === "/"
                  ? p
                  : St([
                      p,
                      n.encodeLocation
                        ? n.encodeLocation(h.pathnameBase).pathname
                        : h.pathnameBase,
                    ]),
            }),
          ),
        a,
        r,
        o,
      );
    return t && u
      ? M.createElement(
          Kn.Provider,
          {
            value: {
              location: Jn(
                {
                  pathname: "/",
                  search: "",
                  hash: "",
                  state: null,
                  key: "default",
                },
                f,
              ),
              navigationType: yt.Pop,
            },
          },
          u,
        )
      : u;
  }
  function c1() {
    let e = im(),
      t = Ss(e)
        ? e.status + " " + e.statusText
        : e instanceof Error
          ? e.message
          : JSON.stringify(e),
      r = e instanceof Error ? e.stack : null,
      o = "rgba(200,200,200, 0.5)",
      n = { padding: "0.5rem", backgroundColor: o },
      a = { padding: "2px 4px", backgroundColor: o };
    return M.createElement(
      M.Fragment,
      null,
      M.createElement("h2", null, "Unexpected Application Error!"),
      M.createElement("h3", { style: { fontStyle: "italic" } }, t),
      r ? M.createElement("pre", { style: n }, r) : null,
      null,
    );
  }
  var l1 = M.createElement(c1, null),
    Bl = class extends M.Component {
      constructor(t) {
        (super(t),
          (this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error,
          }));
      }
      static getDerivedStateFromError(t) {
        return { error: t };
      }
      static getDerivedStateFromProps(t, r) {
        return r.location !== t.location ||
          (r.revalidation !== "idle" && t.revalidation === "idle")
          ? {
              error: t.error,
              location: t.location,
              revalidation: t.revalidation,
            }
          : {
              error: t.error !== void 0 ? t.error : r.error,
              location: r.location,
              revalidation: t.revalidation || r.revalidation,
            };
      }
      componentDidCatch(t, r) {
        console.error(
          "React Router caught the following error during render",
          t,
          r,
        );
      }
      render() {
        return this.state.error !== void 0
          ? M.createElement(
              Xt.Provider,
              { value: this.props.routeContext },
              M.createElement(tm.Provider, {
                value: this.state.error,
                children: this.props.component,
              }),
            )
          : this.props.children;
      }
    };
  function d1(e) {
    let { routeContext: t, match: r, children: o } = e,
      n = M.useContext(Vn);
    return (
      n &&
        n.static &&
        n.staticContext &&
        (r.route.errorElement || r.route.ErrorBoundary) &&
        (n.staticContext._deepestRenderedBoundaryId = r.route.id),
      M.createElement(Xt.Provider, { value: t }, o)
    );
  }
  function p1(e, t, r, o) {
    var n;
    if (
      (t === void 0 && (t = []),
      r === void 0 && (r = null),
      o === void 0 && (o = null),
      e == null)
    ) {
      var a;
      if (!r) return null;
      if (r.errors) e = r.matches;
      else if (
        (a = o) != null &&
        a.v7_partialHydration &&
        t.length === 0 &&
        !r.initialized &&
        r.matches.length > 0
      )
        e = r.matches;
      else return null;
    }
    let i = e,
      c = (n = r) == null ? void 0 : n.errors;
    if (c != null) {
      let x = i.findIndex((m) => m.route.id && c?.[m.route.id] !== void 0);
      (x >= 0 || me(!1), (i = i.slice(0, Math.min(i.length, x + 1))));
    }
    let d = !1,
      p = -1;
    if (r && o && o.v7_partialHydration)
      for (let x = 0; x < i.length; x++) {
        let m = i[x];
        if (
          ((m.route.HydrateFallback || m.route.hydrateFallbackElement) &&
            (p = x),
          m.route.id)
        ) {
          let { loaderData: f, errors: j } = r,
            y =
              m.route.loader &&
              f[m.route.id] === void 0 &&
              (!j || j[m.route.id] === void 0);
          if (m.route.lazy || y) {
            ((d = !0), p >= 0 ? (i = i.slice(0, p + 1)) : (i = [i[0]]));
            break;
          }
        }
      }
    return i.reduceRight((x, m, f) => {
      let j,
        y = !1,
        k = null,
        T = null;
      r &&
        ((j = c && m.route.id ? c[m.route.id] : void 0),
        (k = m.route.errorElement || l1),
        d &&
          (p < 0 && f === 0
            ? (x1(
                "route-fallback",
                !1,
                "No `HydrateFallback` element provided to render during initial hydration",
              ),
              (y = !0),
              (T = null))
            : p === f &&
              ((y = !0), (T = m.route.hydrateFallbackElement || null))));
      let u = t.concat(i.slice(0, f + 1)),
        h = () => {
          let g;
          return (
            j
              ? (g = k)
              : y
                ? (g = T)
                : m.route.Component
                  ? (g = M.createElement(m.route.Component, null))
                  : m.route.element
                    ? (g = m.route.element)
                    : (g = x),
            M.createElement(d1, {
              match: m,
              routeContext: { outlet: x, matches: u, isDataRoute: r != null },
              children: g,
            })
          );
        };
      return r && (m.route.ErrorBoundary || m.route.errorElement || f === 0)
        ? M.createElement(Bl, {
            location: r.location,
            revalidation: r.revalidation,
            component: k,
            error: j,
            children: h(),
            routeContext: { outlet: null, matches: u, isDataRoute: !0 },
          })
        : h();
    }, null);
  }
  var am = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        e
      );
    })(am || {}),
    Ns = (function (e) {
      return (
        (e.UseBlocker = "useBlocker"),
        (e.UseLoaderData = "useLoaderData"),
        (e.UseActionData = "useActionData"),
        (e.UseRouteError = "useRouteError"),
        (e.UseNavigation = "useNavigation"),
        (e.UseRouteLoaderData = "useRouteLoaderData"),
        (e.UseMatches = "useMatches"),
        (e.UseRevalidator = "useRevalidator"),
        (e.UseNavigateStable = "useNavigate"),
        (e.UseRouteId = "useRouteId"),
        e
      );
    })(Ns || {});
  function h1(e) {
    let t = M.useContext(Vn);
    return (t || me(!1), t);
  }
  function u1(e) {
    let t = M.useContext(Ul);
    return (t || me(!1), t);
  }
  function m1(e) {
    let t = M.useContext(Xt);
    return (t || me(!1), t);
  }
  function sm(e) {
    let t = m1(e),
      r = t.matches[t.matches.length - 1];
    return (r.route.id || me(!1), r.route.id);
  }
  function im() {
    var e;
    let t = M.useContext(tm),
      r = u1(Ns.UseRouteError),
      o = sm(Ns.UseRouteError);
    return t !== void 0 ? t : (e = r.errors) == null ? void 0 : e[o];
  }
  function g1() {
    let { router: e } = h1(am.UseNavigateStable),
      t = sm(Ns.UseNavigateStable),
      r = M.useRef(!1);
    return (
      rm(() => {
        r.current = !0;
      }),
      M.useCallback(
        function (n, a) {
          (a === void 0 && (a = {}),
            r.current &&
              (typeof n == "number"
                ? e.navigate(n)
                : e.navigate(n, Jn({ fromRouteId: t }, a))));
        },
        [e, t],
      )
    );
  }
  var Xu = {};
  function x1(e, t, r) {
    !t && !Xu[e] && (Xu[e] = !0);
  }
  var Io = (e, t, r) => (
    "" +
      t +
      ("You can use the `" + e + "` future flag to opt-in early. ") +
      ("For more information, see " + r + "."),
    void 0
  );
  function cm(e, t) {
    (e?.v7_startTransition === void 0 &&
      Io(
        "v7_startTransition",
        "React Router will begin wrapping state updates in `React.startTransition` in v7",
        "https://reactrouter.com/v6/upgrading/future#v7_starttransition",
      ),
      e?.v7_relativeSplatPath === void 0 &&
        (!t || t.v7_relativeSplatPath === void 0) &&
        Io(
          "v7_relativeSplatPath",
          "Relative route resolution within Splat routes is changing in v7",
          "https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath",
        ),
      t &&
        (t.v7_fetcherPersist === void 0 &&
          Io(
            "v7_fetcherPersist",
            "The persistence behavior of fetchers is changing in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist",
          ),
        t.v7_normalizeFormMethod === void 0 &&
          Io(
            "v7_normalizeFormMethod",
            "Casing of `formMethod` fields is being normalized to uppercase in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod",
          ),
        t.v7_partialHydration === void 0 &&
          Io(
            "v7_partialHydration",
            "`RouterProvider` hydration behavior is changing in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_partialhydration",
          ),
        t.v7_skipActionErrorRevalidation === void 0 &&
          Io(
            "v7_skipActionErrorRevalidation",
            "The revalidation behavior after 4xx/5xx `action` responses is changing in v7",
            "https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation",
          )));
  }
  var z1 = "startTransition",
    Df = M[z1];
  function Po(e) {
    me(!1);
  }
  function Sl(e) {
    let {
      basename: t = "/",
      children: r = null,
      location: o,
      navigationType: n = yt.Pop,
      navigator: a,
      static: i = !1,
      future: c,
    } = e;
    Mo() && me(!1);
    let d = t.replace(/^\/*/, "/"),
      p = M.useMemo(
        () => ({
          basename: d,
          navigator: a,
          static: i,
          future: Jn({ v7_relativeSplatPath: !1 }, c),
        }),
        [d, c, a, i],
      );
    typeof o == "string" && (o = Nt(o));
    let {
        pathname: x = "/",
        search: m = "",
        hash: f = "",
        state: j = null,
        key: y = "default",
      } = o,
      k = M.useMemo(() => {
        let T = Wn(x, d);
        return T == null
          ? null
          : {
              location: { pathname: T, search: m, hash: f, state: j, key: y },
              navigationType: n,
            };
      }, [d, x, m, f, j, y, n]);
    return k == null
      ? null
      : M.createElement(
          qt.Provider,
          { value: p },
          M.createElement(Kn.Provider, { children: r, value: k }),
        );
  }
  function Is(e) {
    let { children: t, location: r } = e;
    return om(Hn(t), r);
  }
  var If = new Promise(() => {});
  function Hn(e, t) {
    t === void 0 && (t = []);
    let r = [];
    return (
      M.Children.forEach(e, (o, n) => {
        if (!M.isValidElement(o)) return;
        let a = [...t, n];
        if (o.type === M.Fragment) {
          r.push.apply(r, Hn(o.props.children, a));
          return;
        }
        (o.type !== Po && me(!1),
          !o.props.index || !o.props.children || me(!1));
        let i = {
          id: o.props.id || a.join("-"),
          caseSensitive: o.props.caseSensitive,
          element: o.props.element,
          Component: o.props.Component,
          index: o.props.index,
          path: o.props.path,
          loader: o.props.loader,
          action: o.props.action,
          errorElement: o.props.errorElement,
          ErrorBoundary: o.props.ErrorBoundary,
          hasErrorBoundary:
            o.props.ErrorBoundary != null || o.props.errorElement != null,
          shouldRevalidate: o.props.shouldRevalidate,
          handle: o.props.handle,
          lazy: o.props.lazy,
        };
        (o.props.children && (i.children = Hn(o.props.children, a)), r.push(i));
      }),
      r
    );
  }
  function Nl() {
    return (
      (Nl = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var o in r) ({}).hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          }),
      Nl.apply(null, arguments)
    );
  }
  function E1(e, t) {
    if (e == null) return {};
    var r = {};
    for (var o in e)
      if ({}.hasOwnProperty.call(e, o)) {
        if (t.indexOf(o) !== -1) continue;
        r[o] = e[o];
      }
    return r;
  }
  function k1(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function v1(e, t) {
    return e.button === 0 && (!t || t === "_self") && !k1(e);
  }
  var T1 = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "viewTransition",
  ];
  var B1 = "6";
  try {
    window.__reactRouterVersion = B1;
  } catch {}
  var U1 = "startTransition",
    lm = ie[U1],
    A1 = "flushSync",
    ij = y1[A1],
    C1 = "useId",
    cj = ie[C1];
  function hm(e) {
    let { basename: t, children: r, future: o, window: n } = e,
      a = ie.useRef();
    a.current == null && (a.current = $u({ window: n, v5Compat: !0 }));
    let i = a.current,
      [c, d] = ie.useState({ action: i.action, location: i.location }),
      { v7_startTransition: p } = o || {},
      x = ie.useCallback(
        (m) => {
          p && lm ? lm(() => d(m)) : d(m);
        },
        [d, p],
      );
    return (
      ie.useLayoutEffect(() => i.listen(x), [i, x]),
      ie.useEffect(() => cm(o), [o]),
      ie.createElement(Sl, {
        basename: t,
        children: r,
        location: c.location,
        navigationType: c.action,
        navigator: i,
        future: o,
      })
    );
  }
  var S1 =
      typeof window < "u" &&
      typeof window.document < "u" &&
      typeof window.document.createElement < "u",
    N1 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    er = ie.forwardRef(function (t, r) {
      let {
          onClick: o,
          relative: n,
          reloadDocument: a,
          replace: i,
          state: c,
          target: d,
          to: p,
          preventScrollReset: x,
          viewTransition: m,
        } = t,
        f = E1(t, T1),
        { basename: j } = ie.useContext(qt),
        y,
        k = !1;
      if (typeof p == "string" && N1.test(p) && ((y = p), S1))
        try {
          let g = new URL(window.location.href),
            b = p.startsWith("//") ? new URL(g.protocol + p) : new URL(p),
            E = Wn(b.pathname, j);
          b.origin === g.origin && E != null
            ? (p = E + b.search + b.hash)
            : (k = !0);
        } catch {}
      let T = Al(p, { relative: n }),
        u = D1(p, {
          replace: i,
          state: c,
          target: d,
          preventScrollReset: x,
          relative: n,
          viewTransition: m,
        });
      function h(g) {
        (o && o(g), g.defaultPrevented || u(g));
      }
      return ie.createElement(
        "a",
        Nl({}, f, { href: y || T, onClick: k || a ? o : h, ref: r, target: d }),
      );
    });
  var dm;
  (function (e) {
    ((e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher"),
      (e.useViewTransitionState = "useViewTransitionState"));
  })(dm || (dm = {}));
  var pm;
  (function (e) {
    ((e.UseFetcher = "useFetcher"),
      (e.UseFetchers = "useFetchers"),
      (e.UseScrollRestoration = "useScrollRestoration"));
  })(pm || (pm = {}));
  function D1(e, t) {
    let {
        target: r,
        replace: o,
        state: n,
        preventScrollReset: a,
        relative: i,
        viewTransition: c,
      } = t === void 0 ? {} : t,
      d = Cl(),
      p = Fo(),
      x = Ds(e, { relative: i });
    return ie.useCallback(
      (m) => {
        if (v1(m, r)) {
          m.preventDefault();
          let f = o !== void 0 ? o : Gr(p) === Gr(x);
          d(e, {
            replace: f,
            state: n,
            preventScrollReset: a,
            relative: i,
            viewTransition: c,
          });
        }
      },
      [p, d, x, o, n, r, e, a, i, c],
    );
  }
  var s = Sr(Nr());
  var ke = Sr(Nr()),
    um = ({ children: e }) =>
      ke.default.createElement("div", { className: "file-card" }, e),
    mm = ({ children: e }) =>
      ke.default.createElement("p", { className: "closing" }, e),
    Ms = ({ href: e, children: t }) =>
      ke.default.createElement(
        "a",
        { href: e, target: "_blank", rel: "noopener noreferrer" },
        t,
      );
  function gm(e, t) {
    let r = "mmv:" + e,
      [o, n] = (0, ke.useState)(() => {
        try {
          let i = localStorage.getItem(r);
          return i ? JSON.parse(i) : t;
        } catch {
          return t;
        }
      }),
      a = (0, ke.useCallback)(
        (i) => {
          n(i);
          try {
            localStorage.setItem(r, JSON.stringify(i));
          } catch {}
        },
        [r],
      );
    return [o, a, { ready: !0, message: "" }];
  }
  var Dl = ({ label: e, value: t, onChange: r, options: o }) =>
      ke.default.createElement(
        "div",
        { className: "choice-row" },
        ke.default.createElement("div", { className: "choice-label" }, e),
        ke.default.createElement(
          "div",
          { className: "chip-row" },
          o.map((n) =>
            ke.default.createElement(
              "button",
              {
                key: n.value,
                className: "chip" + (n.value === t ? " on" : ""),
                "aria-pressed": n.value === t,
                onClick: () => r(n.value),
              },
              n.label,
            ),
          ),
        ),
      ),
    xm = ({ title: e, intro: t }) =>
      ke.default.createElement(
        "header",
        { className: "page-head" },
        ke.default.createElement("h2", null, e),
        t && ke.default.createElement("p", { className: "muted" }, t),
      ),
    zm = ({ label: e, heading: t, children: r }) =>
      ke.default.createElement(
        "section",
        { className: "group" },
        t
          ? ke.default.createElement("h2", { className: "group-h" }, e)
          : ke.default.createElement("div", { className: "choice-label" }, e),
        r,
      );
  var fm = __WORDS__;
  var jm = [
    { id: "debook-L1", name: "Lektion 1" },
    { id: "debook-L2", name: "Lektion 2" },
    { id: "debook-L3", name: "Lektion 3" },
  ];
  var FD = [
    { id: "numerals", jp: "\u6578\u8A5E\u8207\u5E8F\u6578", de: "Zahlen \u00B7 \u6578\u8A5E\u8207\u5E8F\u6578" },
    { id: "determiners", jp: "", de: "Artikel \u00B7 \u51A0\u8A5E\u8207\u9650\u5B9A\u8A5E" },
    { id: "particles", jp: "\u52A9\u8A5E", de: "" },
    { id: "prepositions", jp: "", de: "Pr\u00E4positionen \u00B7 \u4ECB\u4FC2\u8A5E" },
    { id: "pronouns", jp: "\u4EE3\u540D\u8A5E", de: "Pronomen \u00B7 \u4EE3\u540D\u8A5E" },
    { id: "demonstratives", jp: "\u6307\u793A\u8A5E", de: "" },
    { id: "questions", jp: "\u7591\u554F\u8A5E", de: "W-Fragen \u00B7 \u7591\u554F\u8A5E" },
    { id: "conjunctions", jp: "\u63A5\u7E8C\u8A5E", de: "" },
  ];
  var Il = [
    {
      id: "jp-grammar-001",
      contentType: "grammar",
      lang: "jp",
      title:
        "\u5834\u6240\u3078\u884C\u304D\u307E\u3059\uFF0F\u6765\u307E\u3059\uFF0F\u5E30\u308A\u307E\u3059",
      rule: "\u300C\u3078\u300D\u8868\u793A\u79FB\u52D5\u65B9\u5411\uFF0C\u4F5C\u52A9\u8A5E\u6642\u8B80\u4F5C\u300C\u3048\u300D\u3002\u5834\u6240\u5F8C\u52A0\u300C\u3078\u300D\uFF0C\u518D\u63A5\u300C\u884C\u304D\u307E\u3059\u300D\u300C\u6765\u307E\u3059\u300D\u6216\u300C\u5E30\u308A\u307E\u3059\u300D\u3002",
      examples: [
        {
          text: "\u660E\u65E5\u3001\u5B66\u6821\u3078\u884C\u304D\u307E\u3059\u3002",
          zh: "\u660E\u5929\u6211\u8981\u53BB\u5B78\u6821\u3002",
        },
        {
          text: "\u53CB\u9054\u304C\u5BB6\u3078\u6765\u307E\u3059\u3002",
          zh: "\u670B\u53CB\u6703\u4F86\u6211\u5BB6\u3002",
        },
        {
          text: "\u4E03\u6642\u306B\u5BB6\u3078\u5E30\u308A\u307E\u3059\u3002",
          zh: "\u6211\u4E03\u9EDE\u56DE\u5BB6\u3002",
        },
      ],
      sourceUrl:
        "https://www.kit.ac.jp/01/WA-japanese-for-beginners/html/lesson05.html",
    },
    {
      id: "jp-grammar-002",
      contentType: "grammar",
      lang: "jp",
      title: "\u5834\u6240\u3067\u52D5\u8A5E\u307E\u3059",
      rule: "\u300C\u3067\u300D\u8868\u793A\u52D5\u4F5C\u767C\u751F\u7684\u5730\u9EDE\u3002\u5834\u6240\u5F8C\u52A0\u300C\u3067\u300D\uFF0C\u518D\u63A5\u52D5\u4F5C\u3002\u4F8B\u5982\u5728\u5716\u66F8\u9928\u8B80\u66F8\u3001\u5728\u516C\u53F8\u5DE5\u4F5C\u3002\u9019\u88E1\u7684\u300C\u3067\u300D\u4E0D\u662F\u79FB\u52D5\u65B9\u5411\u7684\u300C\u3078\u300D\u3002",
      examples: [
        {
          text: "\u56F3\u66F8\u9928\u3067\u52C9\u5F37\u3057\u307E\u3059\u3002",
          zh: "\u6211\u5728\u5716\u66F8\u9928\u8B80\u66F8\u3002",
        },
        {
          text: "\u4F1A\u793E\u3067\u50CD\u304D\u307E\u3059\u3002",
          zh: "\u6211\u5728\u516C\u53F8\u5DE5\u4F5C\u3002",
        },
        {
          text: "\u5E97\u3067\u30D1\u30F3\u3092\u8CB7\u3044\u307E\u3059\u3002",
          zh: "\u6211\u5728\u5546\u5E97\u8CB7\u9EB5\u5305\u3002",
        },
      ],
      sourceUrl: "https://nihongocircle.com/lessons/n5-04-places",
    },
    {
      id: "de-grammar-001",
      contentType: "grammar",
      lang: "de",
      title:
        "\u898F\u5247\u52D5\u8A5E\u73FE\u5728\u5F0F (Regular present tense)",
      rule: "For these -en verbs, remove -en to find the stem, then add the subject ending: wohnen \u2192 wohn- + ending.",
      ruleZh:
        "\u9019\u4E9B\u4EE5 -en \u7D50\u5C3E\u7684\u52D5\u8A5E\uFF0C\u5148\u53BB\u6389 -en \u5F97\u5230\u8A5E\u5E79\uFF0C\u518D\u4F9D\u4E3B\u8A5E\u52A0\u4E0A\u8A5E\u5C3E\uFF1Awohnen \u2192 wohn- \uFF0B\u8A5E\u5C3E\u3002",
      conjugation: [
        ["ich", "-e", "wohne"],
        ["du", "-st", "wohnst"],
        ["er / sie / es", "-t", "wohnt"],
        ["wir", "-en", "wohnen"],
        ["ihr", "-t", "wohnt"],
        ["sie / Sie", "-en", "wohnen"],
      ],
      related: ["de-110", "de-125", "de-128", "de-171", "de-177"],
      notes: [
        {
          en: "sein is irregular: ich bin, du bist, er/sie/es ist. Learn these forms separately.",
          zh: "sein \u662F\u4E0D\u898F\u5247\u52D5\u8A5E\uFF1Aich bin\u3001du bist\u3001er/sie/es ist\uFF0C\u9700\u53E6\u5916\u8A18\u61B6\u3002",
        },
        {
          en: "hei\xDFen: du hei\xDFt, not du hei\xDFst. After a stem ending in \xDF, the du ending is -t, with no extra s.",
          zh: "hei\xDFen \u7684 du \u5F62\u5F0F\u662F du hei\xDFt\uFF0C\u4E0D\u662F du hei\xDFst\u3002\u8A5E\u5E79\u4EE5 \xDF \u7D50\u5C3E\u6642\uFF0Cdu \u52A0 -t\uFF0C\u4E0D\u518D\u591A\u52A0 s\u3002",
        },
        {
          en: "In a statement, the conjugated verb is in position 2. A position is a sentence part, not always one word: In Berlin is one part. In a direct W-question, put the question word first and the verb next.",
          zh: "\u76F4\u8FF0\u53E5\u4E2D\uFF0C\u8B8A\u5316\u5F8C\u7684\u52D5\u8A5E\u653E\u5728\u7B2C\u4E8C\u500B\u53E5\u5B50\u6210\u5206\u7684\u4F4D\u7F6E\uFF0C\u4E0D\u4E00\u5B9A\u662F\u7B2C\u4E8C\u500B\u55AE\u5B57\uFF1AIn Berlin \u7B97\u4E00\u500B\u6210\u5206\u3002\u76F4\u63A5 W \u7591\u554F\u53E5\u5148\u653E\u7591\u554F\u8A5E\uFF0C\u518D\u63A5\u52D5\u8A5E\u3002",
        },
      ],
      examples: [
        {
          text: "Ich wohne in Berlin.",
          en: "I live in Berlin.",
          zh: "\u6211\u4F4F\u5728\u67CF\u6797\u3002",
        },
        {
          text: "In Berlin wohne ich.",
          en: "I live in Berlin. (Berlin comes first for emphasis.)",
          zh: "\u6211\u4F4F\u5728\u67CF\u6797\u3002\uFF08\u5C07\u300C\u5728\u67CF\u6797\u300D\u653E\u53E5\u9996\u4F5C\u5F37\u8ABF\u3002\uFF09",
        },
        {
          text: "Wo wohnst du?",
          en: "Where do you live?",
          zh: "\u4F60\u4F4F\u5728\u54EA\u88E1\uFF1F",
        },
      ],
      sourceUrl:
        "https://kahibaro.com/course/52-german/4115-present-tense-of-regular-verbs",
      sources: [
        {
          label: "Present tense & endings",
          url: "https://kahibaro.com/course/52-german/4115-present-tense-of-regular-verbs",
        },
        {
          label: "Goethe A1 grammar",
          url: "https://lernen.goethe.de/deutschonline/A1/PDF/DE/deutschonline_Redemittel_und_Grammatik_1-18.pdf",
        },
      ],
    },
    {
      id: "jp-grammar-003",
      contentType: "grammar",
      lang: "jp",
      title:
        "\u3053\u308C\uFF0F\u305D\u308C\uFF0F\u3042\u308C\u306F\u301C\u3067\u3059\u304B",
      rule: "\u300C\u3053\u308C\u300D\u6307\u9760\u8FD1\u8AAA\u8A71\u8005\u7684\u6771\u897F\uFF1B\u300C\u305D\u308C\u300D\u6307\u9760\u8FD1\u807D\u8A71\u8005\u7684\u6771\u897F\uFF1B\u300C\u3042\u308C\u300D\u6307\u96E2\u96D9\u65B9\u90FD\u9060\u7684\u6771\u897F\u3002\u300C\u301C\u306F\u301C\u3067\u3059\u300D\u7528\u4F86\u8AAA\u660E\uFF1B\u53E5\u5C3E\u52A0\u300C\u304B\u300D\u8B8A\u6210\u79AE\u8C8C\u554F\u53E5\u3002\u300C\u306F\u300D\u4F5C\u52A9\u8A5E\u6642\u8B80\u4F5C\u300C\u308F\u300D\u3002\u300C\u4F55\u3067\u3059\u304B\u300D\u7684\u300C\u4F55\u300D\u8B80\u4F5C\u300C\u306A\u3093\u300D\u3002",
      examples: [
        {
          text: "\u3053\u308C\u306F\u308A\u3093\u3054\u3067\u3059\u3002",
          zh: "\u9019\u662F\u860B\u679C\u3002",
        },
        {
          text: "\u305D\u308C\u306F\u304A\u8336\u3067\u3059\u304B\u3002",
          zh: "\u90A3\u662F\u8336\u55CE\uFF1F",
        },
        {
          text: "\u3042\u308C\u306F\u4F55\u3067\u3059\u304B\u3002",
          zh: "\u90A3\u908A\u90A3\u500B\u662F\u4EC0\u9EBC\uFF1F",
        },
      ],
      sourceUrl: "https://www.tofugu.com/japanese-grammar/kore-sore-are-dore/",
    },
    {
      id: "jp-grammar-004",
      contentType: "grammar",
      lang: "jp",
      title: "\u301C\u304C\u597D\u304D\u3067\u3059",
      rule: "\u300C\uFF08\u79C1\u306F\uFF09\uFF0B\u540D\u8A5E\uFF0B\u304C\u597D\u304D\u3067\u3059\u300D\u8868\u793A\u559C\u6B61\u67D0\u7269\u3002\u559C\u6B61\u7684\u5C0D\u8C61\u5F8C\u7528\u300C\u304C\u300D\u3002\u300C\u597D\u304D\u300D\u662F\u306A\u5F62\u5BB9\u8A5E\uFF0C\u4E0D\u662F\u52D5\u8A5E\uFF1B\u653E\u5728\u540D\u8A5E\u524D\u6642\u7528\u300C\u597D\u304D\u306A\uFF0B\u540D\u8A5E\u300D\u3002",
      examples: [
        {
          text: "\u79C1\u306F\u9B5A\u304C\u597D\u304D\u3067\u3059\u3002",
          zh: "\u6211\u559C\u6B61\u9B5A\u3002",
        },
        {
          text: "\u30B3\u30FC\u30D2\u30FC\u304C\u597D\u304D\u3067\u3059\u304B\u3002",
          zh: "\u4F60\u559C\u6B61\u5496\u5561\u55CE\uFF1F",
        },
        {
          text: "\u597D\u304D\u306A\u98DF\u3079\u7269\u306F\u4F55\u3067\u3059\u304B\u3002",
          zh: "\u4F60\u559C\u6B61\u7684\u98DF\u7269\u662F\u4EC0\u9EBC\uFF1F",
        },
      ],
      sourceUrl: "https://www.irodori.jpf.go.jp/starter/pdf.html",
    },
    {
      id: "jp-grammar-005",
      contentType: "grammar",
      lang: "jp",
      title: "\u3044\u5F62\u5BB9\u8A5E\uFF1A\u304A\u3044\u3057\u3044",
      rule: "\u300C\u304A\u3044\u3057\u3044\u300D\u662F\u3044\u5F62\u5BB9\u8A5E\u3002\u79AE\u8C8C\u5730\u63CF\u8FF0\u5473\u9053\u6642\u7528\u300C\u540D\u8A5E\uFF0B\u306F\uFF0B\u304A\u3044\u3057\u3044\u3067\u3059\u300D\uFF1B\u653E\u5728\u540D\u8A5E\u524D\u76F4\u63A5\u63A5\u300C\u304A\u3044\u3057\u3044\uFF0B\u540D\u8A5E\u300D\uFF0C\u4E0D\u52A0\u300C\u306A\u300D\u3002",
      examples: [
        {
          text: "\u3053\u306E\u30D1\u30F3\u306F\u304A\u3044\u3057\u3044\u3067\u3059\u3002",
          zh: "\u9019\u500B\u9EB5\u5305\u5F88\u597D\u5403\u3002",
        },
        {
          text: "\u304A\u3044\u3057\u3044\u3054\u98EF\u3092\u98DF\u3079\u307E\u3059\u3002",
          zh: "\u6211\u5403\u597D\u5403\u7684\u98EF\u3002",
        },
      ],
      sourceUrl: "https://www.irodori.jpf.go.jp/starter/pdf.html",
    },
    {
      id: "de-grammar-002",
      contentType: "grammar",
      lang: "de",
      title:
        "\u554F\u53E5\uFF1AW \u554F\u53E5\u8207\u662F\u975E\u554F\u53E5 (Questions: W-questions and yes/no questions)",
      rule: "W-questions start with a question word, followed by the conjugated verb: question word + verb + subject. For a yes/no question, put the conjugated verb first: verb + subject. Answer a yes/no question with Ja or Nein.",
      ruleZh:
        "W \u554F\u53E5\u5148\u653E\u7591\u554F\u8A5E\uFF0C\u518D\u63A5\u8B8A\u5316\u5F8C\u7684\u52D5\u8A5E\uFF1A\u7591\u554F\u8A5E\uFF0B\u52D5\u8A5E\uFF0B\u4E3B\u8A5E\u3002\u662F\u975E\u554F\u53E5\u628A\u8B8A\u5316\u5F8C\u7684\u52D5\u8A5E\u653E\u53E5\u9996\uFF1A\u52D5\u8A5E\uFF0B\u4E3B\u8A5E\u3002\u662F\u975E\u554F\u53E5\u53EF\u4EE5\u7528 Ja\uFF08\u662F\uFF09\u6216 Nein\uFF08\u4E0D\u662F\uFF09\u56DE\u7B54\u3002",
      notes: [
        {
          en: "Wie asks about a name in Wie hei\xDFt du?; wo asks about a place; woher asks about origin; wer asks about a person. In these examples, du is informal and Sie is formal.",
          zh: "Wie hei\xDFt du? \u7528 wie \u554F\u59D3\u540D\uFF1Bwo \u554F\u5730\u9EDE\uFF1Bwoher \u554F\u4F86\u81EA\u54EA\u88E1\uFF1Bwer \u554F\u4EBA\u3002\u9019\u4E9B\u4F8B\u53E5\u4E2D\uFF0Cdu \u662F\u975E\u6B63\u5F0F\u7684\u300C\u4F60\u300D\uFF0CSie \u662F\u79AE\u8C8C\u7684\u300C\u60A8\u300D\u3002",
        },
        {
          en: "Capitalize German nouns, including Deutsch (the language), Taiwan and Name. The formal pronoun Sie is also capitalized.",
          zh: "\u5FB7\u6587\u540D\u8A5E\u958B\u982D\u8981\u5927\u5BEB\uFF0C\u4F8B\u5982 Deutsch\uFF08\u5FB7\u8A9E\uFF09\u3001Taiwan\uFF08\u53F0\u7063\uFF09\u3001Name\uFF08\u540D\u5B57\uFF09\u3002\u79AE\u8C8C\u4EE3\u540D\u8A5E Sie \u4E5F\u8981\u5927\u5BEB\u3002",
        },
      ],
      examples: [
        {
          text: "Wie hei\xDFt du?",
          en: "What is your name?",
          zh: "\u4F60\u53EB\u4EC0\u9EBC\u540D\u5B57\uFF1F",
        },
        {
          text: "Wo wohnst du?",
          en: "Where do you live?",
          zh: "\u4F60\u4F4F\u5728\u54EA\u88E1\uFF1F",
        },
        {
          text: "Woher kommst du?",
          en: "Where are you from?",
          zh: "\u4F60\u4F86\u81EA\u54EA\u88E1\uFF1F",
        },
        {
          text: "Wer bist du?",
          en: "Who are you?",
          zh: "\u4F60\u662F\u8AB0\uFF1F",
        },
        {
          text: "Wohnst du in Taipei?",
          en: "Do you live in Taipei?",
          zh: "\u4F60\u4F4F\u5728\u53F0\u5317\u55CE\uFF1F",
        },
        {
          text: "Sprechen Sie Deutsch?",
          en: "Do you speak German? (formal)",
          zh: "\u60A8\u6703\u8AAA\u5FB7\u8A9E\u55CE\uFF1F",
        },
      ],
      sourceUrl:
        "https://deutsch.lingolia.com/en/grammar/sentence-structure/questions",
      sources: [
        {
          label: "Questions / \u554F\u53E5\u8A9E\u5E8F",
          url: "https://deutsch.lingolia.com/en/grammar/sentence-structure/questions",
        },
        {
          label: "Capital letters / \u5927\u5BEB\u898F\u5247",
          url: "https://deutsch.lingolia.com/en/writing/capital-letters",
        },
      ],
    },
    {
      id: "jp-grammar-006",
      contentType: "grammar",
      lang: "jp",
      title:
        "\u3044\u5F62\u5BB9\u8A5E\u30FB\u306A\u5F62\u5BB9\u8A5E\uFF08\u4FEE\u98FE\u540D\u8A5E\u8207\u8FF0\u8A9E\u7528\u6CD5\uFF09",
      rule: "\u3044\u5F62\u5BB9\u8A5E\u76F4\u63A5\u63A5\u540D\u8A5E\uFF0C\u4E2D\u9593\u4E0D\u52A0\u300C\u306A\u300D\uFF1A\u5927\u304D\u3044\u5BB6\u3002\u306A\u5F62\u5BB9\u8A5E\u63A5\u540D\u8A5E\u6642\u8981\u52A0\u300C\u306A\u300D\uFF1A\u9759\u304B\u306A\u90E8\u5C4B\u3002\u5169\u7A2E\u5F62\u5BB9\u8A5E\u90FD\u53EF\u4EE5\u76F4\u63A5\u653E\u5728\u53E5\u5C3E\u52A0\u300C\u3067\u3059\u300D\u4F5C\u8FF0\u8A9E\uFF1A\u3053\u306E\u5E97\u306F\u5B89\u3044\u3067\u3059\uFF0F\u3053\u306E\u90E8\u5C4B\u306F\u9759\u304B\u3067\u3059\u3002\u6CE8\u610F\u300C\u304D\u308C\u3044\u300D\u96D6\u7136\u4EE5\u300C\u3044\u300D\u7D50\u5C3E\uFF0C\u4F46\u5C6C\u65BC\u306A\u5F62\u5BB9\u8A5E\uFF0C\u63A5\u540D\u8A5E\u8981\u8AAA\u300C\u304D\u308C\u3044\u306A\u82B1\u300D\u3002",
      examples: [
        {
          text: "\u5927\u304D\u3044\u5BB6\u306B\u4F4F\u3093\u3067\u3044\u307E\u3059\u3002",
          zh: "\u6211\u4F4F\u5728\u5927\u623F\u5B50\u88E1\u3002",
        },
        {
          text: "\u9759\u304B\u306A\u90E8\u5C4B\u3067\u52C9\u5F37\u3057\u307E\u3059\u3002",
          zh: "\u6211\u5728\u5B89\u975C\u7684\u623F\u9593\u8B80\u66F8\u3002",
        },
        {
          text: "\u3053\u306E\u5E97\u306F\u5B89\u3044\u3067\u3059\u3002",
          zh: "\u9019\u5BB6\u5E97\u5F88\u4FBF\u5B9C\u3002",
        },
        {
          text: "\u3053\u306E\u30DB\u30C6\u30EB\u306F\u6709\u540D\u3067\u3059\u3002",
          zh: "\u9019\u5BB6\u98EF\u5E97\u5F88\u6709\u540D\u3002",
        },
        {
          text: "\u304D\u308C\u3044\u306A\u82B1\u304C\u597D\u304D\u3067\u3059\u3002",
          zh: "\u6211\u559C\u6B61\u6F02\u4EAE\u7684\u82B1\u3002",
        },
        {
          text: "\u65B0\u3057\u3044\u304B\u3070\u3093\u3092\u8CB7\u3044\u307E\u3057\u305F\u3002",
          zh: "\u6211\u8CB7\u4E86\u65B0\u7684\u5305\u5305\u3002",
        },
      ],
      related: [
        "jp-052",
        "jp-053",
        "jp-054",
        "jp-055",
        "jp-056",
        "jp-057",
        "jp-058",
        "jp-059",
        "jp-060",
        "jp-061",
        "jp-062",
        "jp-063",
        "jp-064",
        "jp-065",
        "jp-066",
      ],
      sourceUrl: "https://guidetojapanese.org/learn/grammar/adjectives",
    },
    {
      id: "de-grammar-003",
      contentType: "grammar",
      lang: "de",
      title: "haben (\u6709 / to have)",
      rule: "haben means \u201Cto have\u201D. Most forms follow the regular -en pattern, but du and er/sie/es drop the -b from the stem: du hast, er/sie/es hat. As a main verb, haben stays in second position: Ich habe eine Frage. In a yes/no question, it comes first: Hast du eine Frage?",
      ruleZh:
        "haben \u662F\u300C\u6709\u300D\u3002\u5927\u90E8\u5206\u8B8A\u5316\u4F9D -en \u898F\u5247\u52D5\u8A5E\uFF0C\u4F46 du \u548C er/sie/es \u8981\u53BB\u6389\u8A5E\u5E79\u7684 -b\uFF1Adu hast\u3001er/sie/es hat\u3002\u4F5C\u70BA\u4E3B\u52D5\u8A5E\u6642\u4E00\u6A23\u653E\u5728\u53E5\u5B50\u7B2C\u4E8C\u4F4D\uFF1AIch habe eine Frage. \u662F\u975E\u554F\u53E5\u628A\u52D5\u8A5E\u653E\u53E5\u9996\uFF1AHast du eine Frage?",
      conjTitle: "haben \xB7 to have / \u6709",
      conjugation: [
        ["ich", "-e", "habe"],
        ["du", "-st", "hast"],
        ["er / sie / es", "-t", "hat"],
        ["wir", "-en", "haben"],
        ["ihr", "-t", "habt"],
        ["sie / Sie", "-en", "haben"],
      ],
      related: ["de-294"],
      notes: [
        {
          en: "Irregular: du hast and er/sie/es hat drop the -b from the stem hab-. The other persons keep it: ich habe, wir haben, ihr habt.",
          zh: "\u4E0D\u898F\u5247\uFF1Adu hast \u548C er/sie/es hat \u53BB\u6389\u8A5E\u5E79 hab- \u7684 -b\u3002\u5176\u4ED6\u4EBA\u7A31\u4FDD\u7559\uFF1Aich habe\u3001wir haben\u3001ihr habt\u3002",
        },
        {
          en: "Use sein (to be), not haben, for states like tired: Ich bin m\xFCde. (I am tired.) But for hungry, German uses haben: Ich habe Hunger. (literally \u201CI have hunger\u201D).",
          zh: "\u300C\u7D2F\u300D\u9019\u985E\u72C0\u614B\u7528 sein\uFF08\u662F\uFF09\uFF0C\u4E0D\u7528 haben\uFF1AIch bin m\xFCde.\uFF08\u6211\u7D2F\u4E86\u3002\uFF09\u4F46\u300C\u9913\u300D\u5FB7\u6587\u7528 haben\uFF1AIch habe Hunger.\uFF08\u5B57\u9762\uFF1A\u6211\u6709\u98E2\u9913\u3002\uFF09",
        },
      ],
      examples: [
        {
          text: "Ich habe eine Frage.",
          en: "I have a question.",
          zh: "\u6211\u6709\u4E00\u500B\u554F\u984C\u3002",
        },
        {
          text: "Anna hat ein Foto.",
          en: "Anna has a photo.",
          zh: "\u5B89\u5A1C\u6709\u4E00\u5F35\u7167\u7247\u3002",
        },
        {
          text: "Hast du eine Frage?",
          en: "Do you have a question?",
          zh: "\u4F60\u6709\u554F\u984C\u55CE\uFF1F",
        },
        {
          text: "Haben Sie eine E-Mail-Adresse?",
          en: "Do you have an email address? (formal)",
          zh: "\u60A8\u6709\u96FB\u5B50\u90F5\u4EF6\u5730\u5740\u55CE\uFF1F",
        },
        {
          text: "Ich bin m\xFCde.",
          en: "I am tired. (uses sein)",
          zh: "\u6211\u7D2F\u4E86\u3002\uFF08\u7528 sein\uFF09",
        },
        {
          text: "Ich habe Hunger.",
          en: "I am hungry. (literally: I have hunger)",
          zh: "\u6211\u9913\u4E86\u3002\uFF08\u5B57\u9762\uFF1A\u6211\u6709\u98E2\u9913\uFF09",
        },
      ],
      sourceUrl: "https://www.verbix.com/webverbix/german/haben",
      sources: [
        {
          label: "haben conjugation / haben \u8B8A\u5316\u8868",
          url: "https://www.verbix.com/webverbix/german/haben",
        },
        {
          label: "haben - Wiktionary",
          url: "https://en.wiktionary.org/wiki/haben",
        },
      ],
    },
    {
      id: "de-grammar-004",
      contentType: "grammar",
      lang: "de",
      title:
        "\u96D9\u5411\u4ECB\u8A5E\uFF1A\u4F4D\u7F6E vs \u76EE\u7684\u5730 (Two-way prepositions: Wechselpr\u00E4positionen)",
      rule: "Nine prepositions - an, auf, hinter, in, neben, \u00FCber, unter, vor, zwischen - take the dative or the accusative depending on their meaning. Use the accusative for a destination or change of location (Wohin? - where to?): someone or something moves to a new place. Use the dative for the location where something is or happens (Wo? - where?): the action takes place within one place, even when it involves movement.",
      ruleZh:
        "\u4E5D\u500B\u96D9\u5411\u4ECB\u8A5E\uFF1Aan\u3001auf\u3001hinter\u3001in\u3001neben\u3001\u00FCber\u3001unter\u3001vor\u3001zwischen\uFF0C\u5F8C\u9762\u63A5\u7B2C\u4E09\u683C\u6216\u7B2C\u56DB\u683C\u53D6\u6C7A\u65BC\u610F\u601D\u3002\u76EE\u7684\u5730\u6216\u4F4D\u7F6E\u6539\u8B8A\uFF08Wohin? \u53BB\u54EA\u88E1\uFF09\u7528\u7B2C\u56DB\u683C\uFF08Akkusativ\uFF09\uFF1A\u4EBA\u6216\u6771\u897F\u79FB\u52D5\u5230\u65B0\u7684\u5730\u9EDE\u3002\u6D3B\u52D5\u6216\u72C0\u614B\u767C\u751F\u7684\u4F4D\u7F6E\uFF08Wo? \u5728\u54EA\u88E1\uFF09\u7528\u7B2C\u4E09\u683C\uFF08Dativ\uFF09\uFF1A\u52D5\u4F5C\u5728\u540C\u4E00\u500B\u5730\u9EDE\u7BC4\u570D\u5167\u9032\u884C\uFF0C\u5373\u4F7F\u6709\u79FB\u52D5\u4E5F\u7528\u7B2C\u4E09\u683C\u3002",
      related: ["de-111", "de-340"],
      notes: [
        {
          en: "Movement alone does not decide the case. Die Kinder laufen im Garten has plenty of movement, but the running stays within the garden - it is the location of the activity, so it takes the dative.",
          zh: "\u6709\u79FB\u52D5\u4E0D\u4EE3\u8868\u7528\u7B2C\u56DB\u683C\u3002Die Kinder laufen im Garten \u96D6\u7136\u4E00\u76F4\u5728\u52D5\uFF0C\u4F46\u8DD1\u6B65\u7684\u7BC4\u570D\u4E0D\u51FA\u82B1\u5712\uFF0C\u82B1\u5712\u662F\u6D3B\u52D5\u767C\u751F\u7684\u4F4D\u7F6E\uFF0C\u6240\u4EE5\u7528\u7B2C\u4E09\u683C\u3002",
        },
        {
          en: "Ask Wo? (where?) for the dative and Wohin? (where to?) for the accusative. Common contractions: in + dem = im, in + das = ins, an + dem = am, an + das = ans.",
          zh: "\u5224\u65B7\u65B9\u6CD5\uFF1A\u554F Wo?\uFF08\u5728\u54EA\u88E1\uFF09\u7528\u7B2C\u4E09\u683C\uFF0C\u554F Wohin?\uFF08\u53BB\u54EA\u88E1\uFF09\u7528\u7B2C\u56DB\u683C\u3002\u5E38\u898B\u7E2E\u5BEB\uFF1Ain + dem = im\u3001in + das = ins\u3001an + dem = am\u3001an + das = ans\u3002",
        },
      ],
      examples: [
        {
          text: "Die Kinder laufen im Garten.",
          en: "The children are running around in the garden. (location of the activity, dative)",
          zh: "\u5B69\u5B50\u5011\u5728\u82B1\u5712\u88E1\u8DD1\u3002\uFF08\u6D3B\u52D5\u767C\u751F\u7684\u4F4D\u7F6E\uFF0C\u7B2C\u4E09\u683C\uFF09",
        },
        {
          text: "Die Kinder laufen in den Garten.",
          en: "The children run into the garden. (destination, accusative)",
          zh: "\u5B69\u5B50\u5011\u8DD1\u9032\u82B1\u5712\u3002\uFF08\u76EE\u7684\u5730\uFF0C\u7B2C\u56DB\u683C\uFF09",
        },
        {
          text: "Das Bild h\u00E4ngt an der Wand.",
          en: "The picture is hanging on the wall. (location, dative)",
          zh: "\u756B\u639B\u5728\u7246\u4E0A\u3002\uFF08\u4F4D\u7F6E\uFF0C\u7B2C\u4E09\u683C\uFF09",
        },
        {
          text: "Ich h\u00E4nge das Bild an die Wand.",
          en: "I hang the picture onto the wall. (destination, accusative)",
          zh: "\u6211\u628A\u756B\u639B\u5230\u7246\u4E0A\u3002\uFF08\u76EE\u7684\u5730\uFF0C\u7B2C\u56DB\u683C\uFF09",
        },
      ],
      sourceUrl:
        "https://resources.german.lsa.umich.edu/grammatik/prepositions/",
      sources: [
        {
          label: "Two-way prepositions / \u96D9\u5411\u4ECB\u8A5E",
          url: "https://resources.german.lsa.umich.edu/grammatik/prepositions/",
        },
        {
          label: "Goethe Spickzettel Wechselpr\u00E4positionen",
          url: "https://www.goethe.de/resources/files/pdf134/pdf-spickzettel-wechselprpositionen.pdf",
        },
      ],
    },
    {
      id: "jp-grammar-007",
      contentType: "grammar",
      lang: "jp",
      title:
        "\u540D\u8A5EA \u306E \u540D\u8A5EB\uFF08\u6240\u5C6C\u30FB\u300C\u7684\u300D\uFF09",
      rule: "\u300C\u306E\u300D\u63A5\u5728\u540D\u8A5E\u5F8C\u9762\u4FEE\u98FE\u53E6\u4E00\u500B\u540D\u8A5E\uFF0C\u8868\u793A\u6240\u5C6C\u3001\u4F86\u6E90\u3001\u5167\u5BB9\u7B49\u95DC\u4FC2\uFF0C\u76F8\u7576\u65BC\u4E2D\u6587\u7684\u300C\u7684\u300D\u3002\u4F8B\u5982\uFF1A\u79C1\u306E\u672C\uFF08\u6211\u7684\u66F8\uFF09\u3001\u65E5\u672C\u306E\u6599\u7406\uFF08\u65E5\u672C\u6599\u7406\uFF09\u3002\u7591\u554F\u6642\u53EF\u8AAA\u300C\u8AB0\u306E\u301C\u3067\u3059\u304B\u300D\uFF08\u662F\u8AB0\u7684\u301C\uFF09\u3002",
      examples: [
        {
          text: "\u3053\u308C\u306F\u79C1\u306E\u672C\u3067\u3059\u3002",
          zh: "\u9019\u662F\u6211\u7684\u66F8\u3002",
        },
        {
          text: "\u6BCD\u306E\u540D\u524D\u306F\u82B1\u5B50\u3067\u3059\u3002",
          zh: "\u5ABD\u5ABD\u7684\u540D\u5B57\u53EB\u82B1\u5B50\u3002",
        },
        {
          text: "\u3053\u308C\u306F\u8AB0\u306E\u304B\u3070\u3093\u3067\u3059\u304B\u3002",
          zh: "\u9019\u662F\u8AB0\u7684\u5305\u5305\uFF1F",
        },
      ],
      sourceUrl:
        "https://www.tofugu.com/japanese-grammar/particle-no-noun-modifier/",
    },
    {
      id: "jp-grammar-008",
      contentType: "grammar",
      lang: "jp",
      title: "\u52A9\u8A5E \u3082\uFF08\u4E5F\uFF09",
      rule: "\u300C\u3082\u300D\u8868\u793A\u300C\u4E5F\u300D\uFF0C\u7528\u4F86\u66FF\u63DB\u306F\u3001\u304C\u3001\u3092\uFF0C\u52A0\u5728\u540D\u8A5E\u5F8C\u9762\u3002\u4F8B\u5982\uFF1A\u79C1\u306F\u5B66\u751F\u3067\u3059\u3002\u5F7C\u3082\u5B66\u751F\u3067\u3059\u3002\uFF08\u6211\u662F\u5B78\u751F\uFF0C\u4ED6\u4E5F\u662F\u5B78\u751F\u3002\uFF09",
      examples: [
        {
          text: "\u79C1\u3082\u5B66\u751F\u3067\u3059\u3002",
          zh: "\u6211\u4E5F\u662F\u5B78\u751F\u3002",
        },
        {
          text: "\u5144\u3082\u4F1A\u793E\u54E1\u3067\u3059\u3002",
          zh: "\u54E5\u54E5\u4E5F\u662F\u4E0A\u73ED\u65CF\u3002",
        },
        {
          text: "\u3053\u308C\u3082\u79C1\u306E\u3067\u3059\u3002",
          zh: "\u9019\u500B\u4E5F\u662F\u6211\u7684\u3002",
        },
      ],
      sourceUrl: "https://www.tofugu.com/japanese-grammar/particle-mo/",
    },
    {
      id: "jp-grammar-009",
      contentType: "grammar",
      lang: "jp",
      title:
        "\u301C\u3067\u3059\u304B\uFF0B\u8AB0\uFF08\u3060\u308C\uFF09\u554F\u4EBA",
      rule: "\u53E5\u5C3E\u52A0\u300C\u304B\u300D\u5C31\u6210\u70BA\u7591\u554F\u53E5\uFF1A\u5B66\u751F\u3067\u3059\u2192\u5B66\u751F\u3067\u3059\u304B\uFF08\u662F\u5B78\u751F\u55CE\uFF1F\uFF09\u3002\u554F\u300C\u4EBA\u662F\u8AB0\u300D\u7528\u300C\u8AB0\uFF08\u3060\u308C\uFF09\u300D\uFF1A\u3042\u306E\u4EBA\u306F\u8AB0\u3067\u3059\u304B\u3002\uFF08\u90A3\u500B\u4EBA\u662F\u8AB0\uFF1F\uFF09\u56DE\u7B54\u7528\u300C\u301C\u306F\u25CB\u25CB\u3067\u3059\u300D\u3002",
      examples: [
        {
          text: "\u3042\u306E\u4EBA\u306F\u8AB0\u3067\u3059\u304B\u3002\u2500\u2500 \u79C1\u306E\u53CB\u9054\u3067\u3059\u3002",
          zh: "\u90A3\u500B\u4EBA\u662F\u8AB0\uFF1F\u2500\u2500 \u662F\u6211\u7684\u670B\u53CB\u3002",
        },
        {
          text: "\u3042\u306A\u305F\u306F\u5B66\u751F\u3067\u3059\u304B\u3002\u2500\u2500 \u306F\u3044\u3001\u5B66\u751F\u3067\u3059\u3002",
          zh: "\u4F60\u662F\u5B78\u751F\u55CE\uFF1F\u2500\u2500 \u662F\uFF0C\u6211\u662F\u5B78\u751F\u3002",
        },
        {
          text: "\u8AB0\u304C\u6765\u307E\u3059\u304B\u3002\u2500\u2500 \u7530\u4E2D\u3055\u3093\u304C\u6765\u307E\u3059\u3002",
          zh: "\u8AB0\u6703\u4F86\uFF1F\u2500\u2500 \u7530\u4E2D\u6703\u4F86\u3002",
        },
      ],
      sourceUrl: "https://www.irodori.jpf.go.jp/starter/pdf.html",
    },
    {
      id: "jp-grammar-010",
      contentType: "grammar",
      lang: "jp",
      title: "\u301C\u3092\uFF0B\u6578\u91CF\uFF0B\u304F\u3060\u3055\u3044",
      rule: "\u8981\u5E7E\u500B\u6771\u897F\u6642\u8AAA\u300C\uFF08\u6771\u897F\uFF09\u3092\uFF08\u6578\u91CF\uFF09\u304F\u3060\u3055\u3044\u300D\u3002\u6578\u91CF\u7528\u4E00\u822C\u8A08\u6578 \u4E00\u3064\u30FB\u4E8C\u3064\u30FB\u4E09\u3064\u2026\uFF0C\u5341\u500B\u8B80 \u3068\u304A\uFF08\u4E0D\u52A0 \u3064\uFF09\u3002\u672C\u8AB2\u6559\u5B78\u53E5\uFF1A\u308A\u3093\u3054\u3092\u4E8C\u3064\u304F\u3060\u3055\u3044\uFF08\u8ACB\u7D66\u6211\u5169\u9846\u860B\u679C\uFF09\u3002",
      examples: [
        {
          text: "\u5C01\u7B52\u3092\u304F\u3060\u3055\u3044\u3002",
          zh: "\u8ACB\u7D66\u6211\u4E00\u500B\u4FE1\u5C01\u3002",
          src: "tatoeba",
          tid: "84069",
        },
        {
          text: "\u6BDB\u5E03\u3092\u304F\u3060\u3055\u3044\u3002",
          zh: "\u8ACB\u7D66\u6211\u4E00\u584A\u6BDB\u6BEF\u3002",
          src: "tatoeba",
          tid: "80172",
        },
      ],
      sourceUrl: "https://tatoeba.org/en/sentences/show/84069",
    },
    {
      id: "jp-grammar-011",
      contentType: "grammar",
      lang: "jp",
      title: "\u4EBA\u6578\uFF1A\u4E00\u4EBA\u30FB\u4E8C\u4EBA\u30FB\u301C\u306B\u3093",
      rule: "\u4E00\u500B\u4EBA\u3001\u5169\u500B\u4EBA\u662F\u7279\u6B8A\u8B80\u6CD5\uFF1A\u4E00\u4EBA \u3072\u3068\u308A\u3001\u4E8C\u4EBA \u3075\u305F\u308A\u3002\u4E09\u4EBA\u4EE5\u4E0A\u7528\u300C\u6578\u5B57\uFF0B\u306B\u3093\u300D\uFF0C\u5176\u4E2D\u56DB\u4EBA\u8B80 \u3088\u306B\u3093\u3002\u554F\u4EBA\u6578\u7528 \u4F55\u4EBA\uFF08\u306A\u3093\u306B\u3093\uFF09\u3002",
      examples: [
        {
          text: "\u5BB6\u65CF\u306F\uFF14\u4EBA\u3067\u3059\u3002",
          zh: "\u6211\u5BB6\u6709\u56DB\u500B\u4EBA\u3002",
          src: "tatoeba",
          tid: "186941",
        },
        {
          text: "\u79C1\u9054\u306B\u306F\u5A18\u304C\u4E8C\u4EBA\u3044\u307E\u3059\u3002",
          zh: "\u6211\u5011\u6709\u5169\u500B\u5973\u5152\u3002",
          src: "tatoeba",
          tid: "152010",
        },
        {
          text: "\u4F55\u4EBA\u3067\u3059\u304B\u3002",
          zh: "\u591A\u5C11\u4EBA\uFF1F",
          src: "tatoeba",
          tid: "187378",
        },
      ],
      sourceUrl: "https://tatoeba.org/en/sentences/show/186941",
    },
    {
      id: "jp-grammar-012",
      contentType: "grammar",
      lang: "jp",
      title:
        "\u50F9\u683C\u300C\u301C\u5186\u300D\u30FB\u5E74\u9F61\u300C\u301C\u6B73\u300D",
      rule: "\u50F9\u683C\u7528\u300C\u6578\u5B57\uFF0B\u5186\u300D\uFF0C\u554F\u50F9\u9322\u7528 \u3044\u304F\u3089\u3067\u3059\u304B\uFF1B\u5E74\u9F61\u7528\u300C\u6578\u5B57\uFF0B\u6B73\u300D\uFF0C\u554F\u5E74\u9F61\u7528 \u4F55\u6B73\uFF08\u306A\u3093\u3055\u3044\uFF09\u3067\u3059\u304B\u3002\u4E8C\u5341\u6B72\u662F\u7279\u6B8A\u8B80\u6CD5 \u306F\u305F\u3061\u3002",
      examples: [
        {
          text: "\u5168\u90E8\u3067\u4E09\u5343\u5186\u3067\u3059\u3002",
          zh: "\u7E3D\u5171\u662F3000\u65E5\u5143\u3002",
          src: "tatoeba",
          tid: "205018",
        },
        {
          text: "\uFF11\uFF19\u6B73\u3067\u3059\u3002",
          zh: "\u6211 19 \u6B72\u3002",
          src: "tatoeba",
          tid: "235870",
        },
        {
          text: "\u304A\u6BCD\u3055\u3093\u306F\u4F55\u6B73\uFF1F",
          zh: "\u5ABD\u5ABD\u591A\u5927\u5E74\u7D00\uFF1F",
          src: "tatoeba",
          tid: "13226023",
        },
      ],
      sourceUrl: "https://tatoeba.org/en/sentences/show/235870",
    },
  ];
  var V = fm,
    P1 = "mmv:vocabulary.userwords.v1",
    $n = (e) =>
      Array.isArray(e) &&
      e.length <= 1e3 &&
      e.every(
        (t) =>
          t &&
          /^u(jp|de)-\d+$/.test(t.id) &&
          (t.lang === "jp" || t.lang === "de") &&
          t.id.slice(1, 3) === t.lang &&
          typeof t.word == "string" &&
          t.word.length > 0 &&
          t.word.length <= 80 &&
          typeof t.zh == "string" &&
          typeof t.en == "string" &&
          typeof t.reading == "string" &&
          Array.isArray(t.examples) &&
          t.examples.length <= 10,
      ) &&
      new Set(e.map((t) => t.id)).size === e.length;
  function _o(e) {
    for (let t = V.length - 1; t >= 0; t--)
      V[t].id.startsWith("u") && V.splice(t, 1);
    V.push(...e);
  }
  try {
    let e = JSON.parse(localStorage.getItem(P1) || "[]");
    $n(e) && _o(e);
  } catch {}
  var _1 = (e) => e.contentType,
    L1 = (e) => (_1(e) === "phrase" ? "\u7247\u8A9E" : "\u55AE\u5B57"),
    O1 = "__BUILD__",
    R1 = [
      {
        v: "v14.30",
        d: "10/27",
        items: [
          "\u7B2C 8 \u8AB2\u300C\u8CFC\u7269\u8207\u8863\u8457\u300D\u55AE\u5143\uFF1A\u65B0\u589E 7 \u500B\u55AE\u5B57\uFF08T\u30B7\u30E3\u30C4\u30FB\u30BA\u30DC\u30F3\u30FB\u304B\u3070\u3093\u30FB\u773C\u93E1\u30FB\u30B9\u30FC\u30D1\u30FC\u30FB\u30B3\u30F3\u30D3\u30CB\u30FB\u30B5\u30A4\u30BA\uFF09\uFF0C\u53E6\u5C07 22 \u500B\u5DF2\u6559\u5B57\u5F9E\u53C3\u8003\u5B57\u5EAB\u6B78\u5165\u672C\u55AE\u5143\uFF08ID \u4E0D\u8B8A\u3001\u9032\u5EA6\u4FDD\u7559\uFF09\uFF1B\u4F8B\u53E5\u5747\u9644 Tatoeba \u4F86\u6E90\u7DE8\u865F\u3002\u30BB\u30FC\u30EB \u56E0\u7F3A\u4E4F\u7B2C\u4E8C\u500B\u4F86\u6E90\u4F8B\u53E5\u66AB\u7DE9\u52A0\u5165\u3002",
        ],
      },
      {
        v: "v14.29",
        d: "10/25",
        items: [
          "\u65B0\u589E\u300C\u8A9E\u8A00\u57FA\u790E\u300D\u7368\u7ACB\u8AB2\u7A0B\uFF08\u65E5\u6587\u30FB\u5FB7\u6587\uFF09\uFF1A\u6578\u8A5E\u8207\u5E8F\u6578\u3001\u51A0\u8A5E\u8207\u9650\u5B9A\u8A5E\u3001\u52A9\u8A5E\uFF08\u65E5\uFF09\uFF0F\u4ECB\u4FC2\u8A5E\uFF08\u5FB7\uFF09\u3001\u4EE3\u540D\u8A5E\u3001\u6307\u793A\u8A5E\u3001\u7591\u554F\u8A5E\u3001\u63A5\u7E8C\u8A5E\u81EA\u6210\u8AB2\u7A0B\uFF0C\u6709\u5C08\u5C6C\u6E2C\u9A57\u7BC4\u570D\uFF0C\u4E0D\u518D\u6DF7\u5165\u4E00\u822C\u55AE\u5143\u8207\u6E2C\u9A57\uFF1B\u5168\u7AD9\u641C\u5C0B\u4ECD\u627E\u5F97\u5230\u3002\u689D\u76EE ID \u4E0D\u8B8A\uFF0C\u65E2\u6709\u719F\u6089\u5EA6\u3001\u8907\u7FD2\u9032\u5EA6\u8207\u5099\u4EFD\u4E0D\u53D7\u5F71\u97FF\uFF0C\u539F\u8AB2\u672C\u55AE\u5143\u6B78\u5C6C\u4FDD\u7559\u70BA\u53C3\u7167",
          "\u4E00\u822C\u8AB2\u7A0B\u7684\u6DF7\u5408\u8907\u7FD2\u30FB\u5F31\u9805\u7DF4\u7FD2\u30FB\u4ECA\u65E5\u65B0\u5B57\u4E0D\u518D\u6DF7\u5165\u8A9E\u8A00\u57FA\u790E\u689D\u76EE\uFF08\u5132\u5B58\u7684\u9032\u5EA6\u8207\u6392\u7A0B\u5B8C\u5168\u4E0D\u52D5\uFF09\uFF1B\u8A9E\u8A00\u57FA\u790E\u8AB2\u7A0B\u5167\u6709\u81EA\u5DF1\u7684\u6DF7\u5408\u8907\u7FD2\u30FB\u5F31\u9805\u7DF4\u7FD2\u30FB\u672A\u5B78\u689D\u76EE\u5165\u53E3",
          "\u6E2C\u9A57\u7BC4\u570D\u300C\u5168\u90E8\u689D\u76EE\u300D\u6A19\u660E\u300C\u4E0D\u542B\u8A9E\u8A00\u57FA\u790E\u300D\uFF1BJLPT \u5B57\u5EAB N5/N4 \u7DAD\u6301\u5B8C\u6574\u53C3\u8003\u8A5E\u5EAB\uFF0C\u5176\u7BC4\u570D\u52FE\u9078\u672C\u4F86\u5C31\u660E\u78BA\u6A19\u793A\u70BA\u5B57\u5EAB",
        ],
      },
      {
        v: "v14.28",
        d: "10/25",
        items: [
          "\u719F\u6089\u5EA6\u6E2C\u9A57\u79FB\u9664\u300C\u986F\u793A\u91CB\u7FA9\u300D\u6309\u9215\uFF1A\u529F\u80FD\u8207\u5DE6\u4E0B\u89D2\u300C\u8AAA\u660E\u300Di \u5713\u9215\u91CD\u8907\uFF0C\u91CB\u7FA9\u8207\u4F8B\u53E5\u8AAA\u660E\u7D71\u4E00\u7531\u300C\u8AAA\u660E\u300D\u958B\u555F\uFF08\u540C\u529F\u80FD\u4E00\u81F4\u6027\u898F\u5247\uFF09",
        ],
      },
      {
        v: "v14.27",
        d: "10/24",
        items: [
          "\u65E5\u6587\u7B2C\u4E03\u8AB2\u300C\u6578\u5B57\u8207\u8A08\u6578\u300D\uFF1A30 \u500B\u6559\u5B78\u9805\u76EE\uFF0823 \u500B\u6CBF\u7528 N5 \u5B57\u5EAB\u65E2\u6709\u689D\u76EE\u8207\u9032\u5EA6\uFF0C\u53E6\u589E 6 \u500B\u65B0\u689D\u76EE\uFF1A\u4E5D\u30FB\u5186\u30FB\u6B73\u30FB\u3044\u304F\u3089\u30FB\u4F55\u6B73\u30FB\u96FB\u8A71\u756A\u53F7\uFF09\uFF1B\u65B0\u53E5\u578B 3 \u500B\uFF08\u301C\u3092\uFF0B\u6578\u91CF\uFF0B\u304F\u3060\u3055\u3044\u3001\u4EBA\u6578 \u3072\u3068\u308A\uFF0F\u3075\u305F\u308A \u8207\u301C\u306B\u3093\u3001\u301C\u5186\u30FB\u301C\u6B73\uFF09\uFF1B\u6578\u8A5E\u7B46\u8A18\u88DC\u4E0A \u56DB\u6642 \u3088\u3058\u30FB\u4E03\u6642 \u3057\u3061\u3058\u30FB\u4E00\u5343 \u3044\u3063\u305B\u3093\u30FB\u5341\u7684\u4E00\u822C\u8A08\u6578 \u3068\u304A\u30FB\u4E00\u4EBA\uFF0F\u4E8C\u4EBA \u7279\u6B8A\u8B80\u6CD5",
        ],
      },
      {
        v: "v14.26",
        d: "10/23",
        items: [
          "\u4E00\u81F4\u6027\uFF1A\u8A2D\u5B9A\u9801\u8207\u55AE\u5B57\u8A73\u60C5\u7684\u300C\u6717\u8B80\u901F\u5EA6\u300D\u6539\u70BA 0.5x\u20131.5x \u6ED1\u687F\u3001\u300C\u6717\u8B80\u91CD\u8907\u6B21\u6578\u300D\u6539\u70BA +\uFF0F\u2212 \u6B65\u9032\u6309\u9215\uFF0C\u8207\u807D\u529B\u5340\u63A7\u5236\u4E00\u81F4\uFF08\u540C\u4E00\u8A2D\u5B9A\u503C\u5168\u7AD9\u5171\u7528\uFF09",
        ],
      },
      {
        v: "v14.25",
        d: "10/23",
        items: [
          "\u4FEE\u6B63\uFF1A\u91CD\u65B0\u6574\u7406\u5F8C\u6703\u505C\u7559\u5728\u539F\u672C\u756B\u9762\uFF08\u4E0D\u518D\u8DF3\u5230\u5176\u4ED6\u5206\u9801\uFF09\uFF1B\u958B\u555F\u65B0\u5206\u9801\u6642\u300C\u8A18\u4F4F\u5206\u9801\u300D\u529F\u80FD\u4E0D\u8B8A",
        ],
      },
      {
        v: "v14.24",
        d: "10/23",
        items: [
          "\u807D\u529B\u5340\u6539\u70BA\u64AD\u653E\u5668\u5F0F\u63A7\u5236\uFF1A\u4E0A\u4E00\u500B\uFF0F\u64AD\u653E\u66AB\u505C\uFF0F\u4E0B\u4E00\u500B\u5713\u5F62\u6309\u9215\uFF1B\u91CD\u8907\u6B21\u6578\u6539\u70BA +\uFF0F\u2212 \u6B65\u9032\u6309\u9215\uFF1B\u64AD\u653E\u901F\u5EA6\u6539\u70BA 0.5x\u20131.5x \u6ED1\u687F\uFF1B\u5168\u7AD9\u300C\u8AAA\u660E\u300D\u6309\u9215\u7D71\u4E00\u70BA\u5340\u584A\u5DE6\u4E0B\u89D2\u767D\u5E95 i \u5713\u9215",
        ],
      },
      {
        v: "v14.23",
        d: "10/23",
        items: [
          "\u5FB7\u6587\u6587\u6CD5\u65B0\u8AB2\uFF1A\u96D9\u5411\u4ECB\u8A5E\uFF08Wechselpr\u00E4positionen\uFF09\u2014 \u76EE\u7684\u5730\uFF0F\u4F4D\u7F6E\u6539\u8B8A\u7528\u7B2C\u56DB\u683C\uFF0C\u6D3B\u52D5\u767C\u751F\u7684\u4F4D\u7F6E\u7528\u7B2C\u4E09\u683C\uFF0C\u9644 Die Kinder laufen im Garten\uFF0Fin den Garten \u5C0D\u6BD4\u4F8B\u53E5",
        ],
      },
      {
        v: "v14.22",
        d: "10/22 20:00",
        items: [
          "\u5FB7\u6587\u7B2C\u4E8C\u4F8B\u53E5\u88DC\u9F4A\uFF1A\u6539\u7528 Tatoeba \u96E2\u7DDA\u8CC7\u6599\u5305\u6BD4\u5C0D\uFF08API \u6301\u7E8C\u9650\u901F\uFF09\uFF0C\u4E00\u8F2A\u88DC 70 \u500B\uFF0C\u7D2F\u8A08 306/325\uFF1B19 \u500B\u78BA\u5B9A\u7121\u9644\u4E2D\u6587\u4F86\u6E90\u53E5\u7684\u689D\u76EE\u5DF2\u6A19\u51FA\u56DE\u5831\uFF0C\u672A\u7DE8\u9020",
        ],
      },
      {
        v: "v14.21",
        d: "10/22 16:22",
        items: [
          "\u5FB7\u6587\u7B2C\u4E8C\u4F8B\u53E5\uFF1A\u518D\u88DC 2 \u500B\uFF08raten\u3001schreiben\uFF09\uFF0C\u7D2F\u8A08 236/325\uFF1BTatoeba \u6301\u7E8C\u9650\u901F\uFF0C\u5176\u9918 89 \u500B\u6392\u5165\u4E0B\u4E00\u8F2A\u91CD\u8A66",
        ],
      },
      {
        v: "v14.20",
        d: "10/22 15:20",
        items: [
          "\u300C\u6307\u4EE4\u5340\u300D\u6539\u70BA\u9023\u7D50\u5230\u7368\u7ACB\u7684\u63A7\u5236\u4E2D\u5FC3\u7DB2\u7AD9\uFF08CONTROL.md \u5DF2\u9077\u51FA\u672C repo\uFF09\uFF1B\u63A7\u5236\u4E2D\u5FC3\u7DAD\u6301\u6700\u9AD8\u898F\u5247\u4F86\u6E90",
        ],
      },
      {
        v: "v14.19",
        d: "10/22 14:35",
        items: [
          "\u65B0\u589E\u300C\u6307\u4EE4\u5340\u300D\uFF1A\u66F4\u591A > \u6307\u4EE4\u5340 \u986F\u793A\u7CFB\u7D71\u884C\u70BA\u6E96\u5247\u8207\u76EE\u524D\u72C0\u614B\uFF08\u5167\u5BB9\u4F86\u81EA CONTROL.md\uFF0C\u53EF\u5728 GitHub \u7DE8\u8F2F\u6216\u5728\u5C0D\u8A71\u4E2D\u8981\u6C42\u4FEE\u6539\uFF09",
        ],
      },
      {
        v: "v14.18",
        d: "10/22 12:55",
        items: [
          "\u5FB7\u6587\u7B2C\u4E8C\u4F8B\u53E5\uFF1A\u518D\u88DC 14 \u500B\uFF08\u8A5E\u5E79\u6BD4\u5C0D\u4FEE\u6B63\u5F8C\uFF0C\u7D2F\u8A08 234/325\uFF09\uFF1B\u5176\u9918 91 \u500B\u56E0 Tatoeba \u9650\u901F\u6392\u5165\u4E0B\u4E00\u8F2A",
        ],
      },
      {
        v: "v14.17",
        d: "10/22 08:52",
        items: [
          "\u5FB7\u6587\u7B2C\u4E8C\u4F8B\u53E5\u88DC\u9F4A\u9032\u5EA6\uFF1A220/325 \u5B8C\u6210\uFF08\u672C\u8F2A +74\uFF0C\u4F86\u6E90 Tatoeba \u5FB7\u82F1\u4E2D\u5C0D\u7167\u53E5\uFF09\uFF1B\u5176\u9918 105 \u500B\u56E0\u5C0D\u7167\u53E5\u5EAB\u6BD4\u5C0D\u4E0D\u5230\u5408\u9069\u53E5\u5B50\u66AB\u7F3A\uFF0C\u4E0B\u4E00\u8F2A\u63DB\u5206\u9801\u67E5\u8A62\u7E7C\u7E8C",
          "\u522A\u9664\u91CD\u8907\u689D\u76EE\uFF1A\u4E09\uFF08\u30B5\u30F3\uFF09\u4F75\u5165 \u4E09\uFF08\u3055\u3093\uFF09\uFF1B\u7DBA\u9E97 \u4F75\u5165 \u304D\u308C\u3044\uFF08\u5E38\u7528\u5BEB\u6CD5\uFF09\uFF0C\u7DBA\u9E97 \u6539\u5217\u70BA\u300C\u76F8\u4F3C\u300D\u9805\u4E0B\u7684\u6F22\u5B57\u5BEB\u6CD5\u5225\u540D\uFF1B\u9032\u5EA6\u8207\u719F\u6089\u5EA6\u4EE5\u4FDD\u7559\u7684\u689D\u76EE\u70BA\u6E96",
        ],
      },
      {
        v: "v14.16",
        d: "10/22 08:42",
        items: [
          "\u7528\u6CD5\u63D0\u793A\u7B2C\u4E8C\u8F2A\uFF1A23 \u500B\u6578\u8A5E\u5168\u90E8\u52A0\u4E0A\u8B80\u97F3\u8207\u97F3\u4FBF\u7B46\u8A18\uFF08\u4E00\u3064\uFF5E\u4E5D\u3064\u3001\u56DB/\u4E03/\u4E5D \u7684\u5169\u8B80\u3001\u767E/\u5343 \u7684\u97F3\u4FBF\u7B49\uFF09\u30016 \u500B\u656C\u8A9E\u52D5\u8A5E\u52A0\u4E0A\u8B19\u8B93\uFF0F\u5C0A\u656C\u65B9\u5411\u7B46\u8A18\uFF08\u81F4\u3059\u3001\u7533\u3059\u3001\u53C2\u308B\u3001\u53EC\u3057\u4E0A\u304C\u308B\u3001\u5DEE\u3057\u4E0A\u3052\u308B\u3001\u3044\u3089\u3063\u3057\u3083\u308B\uFF09\u30018 \u500B\u5F62\u5BB9\u8A5E\u9677\u9631\u7B46\u8A18\uFF08\u304D\u308C\u3044\u30FB\u5ACC\u3044 \u662F \u306A\u5F62\u5BB9\u8A5E\u3001\u5927\u304D\u3044\u30FB\u5C0F\u3055\u3044 \u7684 \u306A \u5F62\u3001\u7D50\u69CB\u30FB\u8272\u3005 \u7684\u7528\u6CD5\uFF09",
        ],
      },
      {
        v: "v14.15",
        d: "10/22 08:37",
        items: [
          "\u4FEE\u6B63 v14.11 \u7A3D\u6838\u88DC\u8A5E\u6027\u7684\u932F\u8AA4\uFF1A41 \u500B\u65E5\u6587\u55AE\u5B57\u8AA4\u6A19\u70BA\u300C\u8868\u73FE\u300D\uFF08\u79C1\u3001\u98DF\u3079\u308B\u3001\u6C34\u3001\u5B66\u6821 \u7B49\uFF09\uFF0C\u5DF2\u4F9D Jisho \u56B4\u683C\u6BD4\u5C0D\u6539\u56DE\u6B63\u78BA\u8A5E\u6027\uFF08\u540D\u8A5E\uFF0F\u52D5\u8A5E\uFF0F\u4EE3\u540D\u8A5E\uFF0F\u526F\u8A5E\uFF09",
          "\u7247\u8A9E\u9010\u5B57\u62C6\u89E3\uFF1A50 \u500B\u7247\u8A9E\u4E2D 45 \u500B\u52A0\u4E0A parts \u9010\u5B57\u5C0D\u61C9\uFF08\u65E5\u6587\u4E2D\u6587\u5C0D\u61C9\u3001\u5FB7\u6587\u82F1\u6587\u5C0D\u61C9\uFF09\uFF0C\u8A73\u7D30\u9801\u300C\u610F\u601D\u300D\u5206\u9801\u986F\u793A\uFF1B\u304A\u306F\u3088\u3046\u3054\u3056\u3044\u307E\u3059 \u7B49 5 \u500B\u56FA\u5B9A\u554F\u5019\u8A9E\u4F9D\u898F\u5247\u4E0D\u62C6\u89E3\uFF0C\u6539\u52A0\u6574\u9AD4\u7528\u6CD5\u63D0\u793A",
        ],
      },
      {
        v: "v14.14",
        d: "10/22 08:33",
        items: [
          "\u5FB7\u6587\u55AE\u5B57\u5EAB\u65B0\u589E\u300C\u4E3B\u984C\u5206\u985E\u300D\u7BE9\u9078\uFF08sich vorstellen\u3001L\u00E4nder und Sprachen \u7B49\uFF09\uFF0C\u8DE8\u8AB2\u6B21\u4F9D\u4E3B\u984C\u700F\u89BD\uFF1B\u300C\u6E05\u9664\u7BE9\u9078\u300D\u8207\u5207\u63DB\u5206\u9801\u6703\u4E00\u4F75\u91CD\u8A2D",
        ],
      },
      {
        v: "v14.13",
        d: "10/22 08:30",
        items: [
          "\u6E2C\u9A57\u984C\u578B\u65B0\u9806\u5E8F\uFF1A\u65E5\u2192\u4E2D\u3001\u4E2D\u2192\u65E5\u3001\u6F22\u5B57\u21C4\u5047\u540D\uFF08\u65B0\uFF09\u3001\u5B57\u584A\u62FC\u5B57\u3001\u6253\u5B57\u62FC\u5B57\u3001\u5B57\u5361\u3001\u719F\u6089\u5EA6",
          "\u65B0\u984C\u578B\u300C\u6F22\u5B57 \u21C4 \u5047\u540D\u300D\uFF08\u50C5\u65E5\u6587\uFF09\uFF1A\u770B\u6F22\u5B57\u9078\u8B80\u97F3\u3001\u770B\u8B80\u97F3\u9078\u6F22\u5B57\u4EA4\u66FF\u51FA\u984C\uFF0C\u53EA\u51FA\u6709\u6F22\u5B57\u7684\u55AE\u5B57",
          "\u65E5\u6587\u6E2C\u9A57\u5047\u540D\u8207\u6F22\u5B57\u7D81\u5B9A\uFF1A\u65E5\u2192\u4E2D\u984C\u76EE\u7684\u6F22\u5B57\u4E0B\u65B9\u986F\u793A\u5047\u540D\uFF1B\u4E2D\u2192\u65E5\u7684\u9078\u9805\u6F22\u5B57\u8207\u5047\u540D\u4E26\u5217",
          "\u6587\u6CD5\u9801\uFF1A\u76EE\u524D\u5B78\u7FD2\u8A9E\u8A00\u7684\u5340\u584A\u6392\u5728\u524D\u9762",
        ],
      },
      {
        v: "v14.12",
        d: "10/22 07:10",
        items: [
          "\u65B0\u589E\u65E5\u6587\u7B2C\u516D\u8AB2\u300C\u6642\u9593\u30FB\u661F\u671F\u300D30 \u500B\u55AE\u5B57\uFF08jpl6-01\uFF5E30\uFF09\uFF1A\u66DC\u65E5\u3001\u671D\u5915\u591C\u3001\u5348\u524D\u5348\u5F8C\u3001\u4ECA\u9031\u4F86\u9031\u5148\u9031\u3001\u4ECA\u6708\u4F86\u6708\u5148\u6708\u3001\u4ECA\u5E74\u53BB\u5E74\u3001\u9031\u672B\u3001\u6642\u9593\u3001\u4F55\u6642\u7B49\uFF0C\u6BCF\u5B57\u542B\u8B80\u97F3\u3001\u7F85\u99AC\u62FC\u97F3\u3001\u8A5E\u6027\u3001\u4E2D\u6587\u3001\u82F1\u6587\u30012 \u53E5\u4F8B\u53E5\uFF08\u9EDE\u4F8B\u53E5\u4E0B\u65B9\u7A7A\u767D\u770B\u7FFB\u8B6F\uFF09\u8207\u8B80\u6CD5\u7B46\u8A18\uFF1B\u65E5\u6587\u5DF2\u6559\u55AE\u5B57\u7D2F\u8A08 126",
          "\u4FEE\u6B63\u6628\u65E5\u7A3D\u6838\u88DC\u7684 201 \u53E5\u65E5\u6587\u4F8B\u53E5\u6B04\u4F4D\u540D\u7A31\uFF08jp\u2192text\uFF09\uFF0C\u4F8B\u53E5\u73FE\u5728\u6703\u6B63\u5E38\u986F\u793A",
        ],
      },
      {
        v: "v14.11",
        d: "10/21 18:25",
        items: [
          "\u5168\u5EAB\u8CC7\u6599\u7A3D\u6838\u88DC\u9F4A\uFF1A\u65E5\u6587 51 \u500B\u689D\u76EE\u88DC\u4E0A\u7F85\u99AC\u62FC\u97F3\u300149 \u500B\u88DC\u4E0A\u8A5E\u6027\uFF08Jisho \u8CC7\u6599\uFF09",
          "\u65E5\u6587\u4F8B\u53E5\u88DC\u9F4A\uFF1A204 \u500B\u4E0D\u8DB3\u5169\u53E5\u7684\u689D\u76EE\u5F9E Tatoeba \u88DC\u4E0A\u65E5\u6587\u4F8B\u53E5\u8207\u4E2D\u6587\u7FFB\u8B6F\uFF08\u7C21\u9AD4\u4F86\u6E90\u5DF2\u8F49\u7E41\u9AD4\uFF09\uFF0C\u5176\u4E2D 136 \u500B\u5DF2\u88DC\u6EFF\u5169\u53E5",
          "\u5FB7\u6587\u4F8B\u53E5\u958B\u59CB\u88DC\u7B2C\u4E8C\u53E5\uFF1A\u5DF2\u5B8C\u6210 21 \u500B\uFF08Tatoeba \u82F1\uFF0B\u4E2D\u5C0D\u7167\u53E5\uFF09\uFF0C\u5176\u9918\u6392\u5165\u660E\u65E5\u6279\u6B21",
        ],
      },
      {
        v: "v14.10",
        d: "10/21 17:55",
        items: [
          "\u6E2C\u9A57\u540D\u7A31\u7D71\u4E00\uFF1A\u300C\u62FC\u5B57\uFF08\u9078\u5B57\u584A\uFF09\u300D\u6539\u300C\u5B57\u584A\u62FC\u5B57\u300D\u3001\u300C\u62FC\u5B57\uFF08\u9375\u76E4\u8F38\u5165\uFF09\u300D\u6539\u300C\u6253\u5B57\u62FC\u5B57\u300D\u3001\u300C\u5B57\u5361\uFF08\u7FFB\u5361\uFF09\u300D\u6539\u300C\u5B57\u5361\u300D",
          "\u5B57\u5361\u756B\u9762\u79FB\u9664\u9F52\u8F2A\u8207\u5FA9\u539F\u7BAD\u982D\u5716\u793A\uFF1A\u8A2D\u5B9A\u6539\u70BA\u6A19\u984C\u5217\u7684\u300C\u8A2D\u5B9A\u300D\u6587\u5B57\u6309\u9215\uFF0C\u5FA9\u539F\u6539\u70BA\u5DE6\u4E0B\u89D2\u300C\u5FA9\u539F\u300D\u6587\u5B57\u6309\u9215",
        ],
      },
      {
        v: "v14.9",
        d: "10/21 15:55",
        items: [
          "\u4FEE\u6B63\u5B57\u5361\u5728 iPhone \u7684\u7248\u9762\uFF1A\u8A2D\u5B9A\u6539\u70BA\u5E95\u90E8\u5F48\u51FA\u8996\u7A97\uFF08\u4E0D\u518D\u88AB Safari \u5DE5\u5177\u5217\u906E\u4F4F\uFF09\u3001\u756B\u9762\u9AD8\u5EA6\u6539\u7528\u52D5\u614B\u8996\u7A97\u9AD8\u5EA6\u3001\u5FA9\u539F\u8207\u81EA\u52D5\u64AD\u653E\u6539\u70BA\u7121\u5E95\u8272\u5716\u793A\u3001\u5361\u7247\u9AD8\u5EA6\u96A8\u8996\u7A97\u8ABF\u6574\u907F\u514D\u5167\u5BB9\u88AB\u6A19\u984C\u5217\u906E\u4F4F",
        ],
      },
      {
        v: "v14.8",
        d: "10/21 11:45",
        items: [
          "\u5B57\u5361\u6539\u7248\uFF1A\u6ED1\u52D5\u5361\u7247\u5F0F\u64CD\u4F5C\uFF08\u53F3\u6ED1\u8A8D\u8B58\u3001\u5DE6\u6ED1\u4E0D\u719F\u6089\u3001\u9EDE\u4E00\u4E0B\u7FFB\u9762\uFF09\uFF0C\u9032\u5EA6\u689D\u8207\u5DE6\u53F3\u8A08\u6578\u3001\u5FA9\u539F\u8207\u81EA\u52D5\u64AD\u653E\u6309\u9215\u3001\u6B63\u9762\u8A9E\u8A00\u8A2D\u5B9A\uFF1B\u300C\u8A8D\u8B58\u300D\u719F\u6089\u5EA6\u6700\u9AD8\u53EA\u5347\u5230\u300C\u719F\u6089\u300D\uFF0C\u8A73\u7D30\u8AAA\u660E\u53EF\u9EDE\u5361\u7247\u4E0A\u7684 i \u6309\u9215",
        ],
      },
      {
        v: "v14.7",
        d: "10/21 11:20",
        items: [
          "\u5FB7\u6587\u55AE\u4F4D\u6539\u4F9D\u8AB2\u6B21\u5206\u7D44\uFF1ALektion 1\uFF0891 \u5B57\uFF09\u3001Lektion 2\uFF08122 \u5B57\uFF09\u3001Lektion 3\uFF08112 \u5B57\uFF09\uFF1B\u539F\u4E3B\u984C\u4FDD\u7559\u5728\u5404\u55AE\u5B57\u7684\u8A73\u7D30\u9801\u6A19\u984C\u4E2D\uFF0C\u6E2C\u9A57\u8207\u5B57\u5361\u7BC4\u570D\u540C\u6B65\u66F4\u65B0\uFF0C\u9032\u5EA6\u8207\u719F\u6089\u5EA6\u4E0D\u53D7\u5F71\u97FF",
        ],
      },
      {
        v: "v14.6",
        d: "10/21 10:55",
        items: [
          "\u300Candere wichtige W\u00F6rter und Wendungen\u300D\u7B2C\u4E09\u8AB2\u55AE\u5143\u4E00\u4F75\u4F75\u5165\uFF0C\u5408\u8A08 48 \u5B57\uFF08L1-L3\uFF09\uFF0C\u9032\u5EA6\u8207\u719F\u6089\u5EA6\u4E0D\u53D7\u5F71\u97FF",
          "\u4FEE\u6B63\uFF1A\u6E2C\u9A57\u7BC4\u570D\u9078\u300C\u5168\u90E8\u689D\u76EE\u300D\u73FE\u5728\u5305\u542B JLPT \u5B57\u5EAB\uFF08\u65E5\u6587 1281 \u689D\uFF09\uFF0C\u4E4B\u524D\u53EA\u542B\u8AB2\u7A0B\u55AE\u5B57",
          "\u55AE\u5B57\u9801\u5206\u9801\u540D\u7A31\u7D71\u4E00\u70BA\u300C\u610F\u601D\u300D\uFF08\u5FB7\u6587\u539F\u672C\u986F\u793A\u300C\u91CB\u7FA9\u300D\uFF09",
        ],
      },
      {
        v: "v14.5",
        d: "10/21 10:50",
        items: [
          "\u5408\u4F75\u91CD\u8907\u55AE\u5143\u300Candere wichtige W\u00F6rter und Wendungen\u300D\uFF1A\u7B2C\u4E00\u8AB2\u8207\u7B2C\u4E8C\u8AB2\u7684\u540C\u540D\u55AE\u5143\u4F75\u70BA\u4E00\u500B\uFF0834 \u5B57\uFF09\uFF0C\u9032\u5EA6\u8207\u719F\u6089\u5EA6\u4E0D\u53D7\u5F71\u97FF",
        ],
      },
      {
        v: "v14.4",
        d: "10/21 10:50",
        items: [
          "\u7B2C\u4E94\u8AB2 22 \u500B\u55AE\u5B57\u88DC\u4E0A\u7528\u6CD5\u63D0\u793A\uFF08\u7A31\u547C\u3001\u8B80\u97F3\u3001\u79AE\u8C8C\u7B49\uFF09\uFF0C\u986F\u793A\u65BC\u55AE\u5B57\u9801\u8207\u6E2C\u9A57\u8AAA\u660E",
          "\u7528\u6CD5\u63D0\u793A\u7A3D\u6838\uFF1A\u65E5\u6587\u65B0\u589E\u52A9\u8A5E\u642D\u914D\u3001\u81EA\u4ED6\u52D5\u8A5E\u5C0D\u3001\u8B80\u97F3\u9677\u9631\u7B49 21 \u5247\uFF1B\u5FB7\u6587\u88DC 1 \u5247\u4ECB\u4FC2\u8A5E\u683C\u4F4D\u63D0\u793A\uFF0C\u5168\u7AD9\u5171 89 \u5247",
        ],
      },
      {
        v: "v14.3",
        d: "10/21 10:45",
        items: [
          "\u65B0\u589E\u5B57\u5361\u6A21\u5F0F\uFF1A\u9EDE\u5361\u7247\u7FFB\u9762\u770B\u91CB\u7FA9\u8207\u4F8B\u53E5\uFF0C\u6A19\u8A18\u300C\u8A8D\u8B58\uFF0F\u9084\u4E0D\u719F\u300D\u6703\u66F4\u65B0\u719F\u6089\u5EA6\uFF0C\u53EF\u91CD\u65B0\u6D17\u724C\u3001\u52A0\u66F8\u7C64\uFF0C\u6709\u9032\u5EA6\u8207\u7D50\u7B97\u756B\u9762",
        ],
      },
      {
        v: "v14.2",
        d: "10/21 11:00",
        items: [
          "\u6E2C\u9A57\u7BC4\u570D\u6539\u70BA\u53EF\u8907\u9078\uFF1A\u53EF\u540C\u6642\u52FE\u9078\u591A\u500B\u55AE\u5143\u6216\u5B57\u5EAB",
        ],
      },
      {
        v: "v14.1",
        d: "10/21 10:50",
        items: [
          "\u9078\u64C7\u984C\u8207\u719F\u6089\u5EA6\u984C\u7684\u300C\u8AAA\u660E\u300D\u6309\u9215\u6539\u70BA\u56FA\u5B9A\u986F\u793A\uFF08\u4F5C\u7B54\u524D\u4E5F\u53EF\u958B\u555F\uFF09",
          "\u719F\u6089\u5EA6\u984C\u4F5C\u7B54\u5F8C\u4E0D\u518D\u986F\u793A\u91CB\u7FA9\u8207\u4F8B\u53E5\u8CC7\u8A0A\u5361\uFF1B\u9078\u300C\u964C\u751F\u300D\u6216\u300C\u6709\u5370\u8C61\u300D\u6703\u81EA\u52D5\u958B\u555F\u8AAA\u660E",
        ],
      },
      {
        v: "v14",
        d: "10/21 10:40",
        items: [
          "\u5FB7\u6587\u65B0\u589E\u7B2C 3 \u8AB2\u55AE\u5B57\uFF088 \u500B\u55AE\u5143\uFF0C\u5171 112 \u7B46\uFF09\uFF0C\u7B2C 2 \u8AB2\u88DC\u4E0A die Friseurin",
          "\u55AE\u5B57\u8CC7\u6599\u65B0\u589E\u9078\u586B\u6B04\u4F4D note\uFF08\u7528\u6CD5\u5C0F\u63D0\u9192\uFF09\uFF0C\u4E4B\u5F8C\u7684\u55AE\u5B57\u5BE9\u6838\u6703\u986F\u793A",
        ],
      },
      {
        v: "v13.4",
        d: "10/21 10:20",
        items: [
          "\u4FEE\u6B63\uFF1A\u6E2C\u9A57\u6A19\u984C\u6539\u70BA\u8207\u6E2C\u9A57\u9078\u55AE\u540D\u7A31\u4E00\u81F4\uFF08\u65E5 \u2192 \u4E2D\u3001\u4E2D \u2192 \u65E5\u3001DE \u2192 EN\u3001EN \u2192 DE\u3001\u62FC\u5B57\uFF08\u9078\u5B57\u584A\uFF09\u3001\u62FC\u5B57\uFF08\u9375\u76E4\u8F38\u5165\uFF09\u3001\u719F\u6089\u5EA6\uFF09\uFF0C\u5FB7\u6587\u53CD\u5411\u6E2C\u9A57\u4E0D\u518D\u986F\u793A\u300C\u4E2D\u7FFB\u65E5\u300D",
        ],
      },
      {
        v: "v13.3",
        d: "10/21 10:05",
        items: [
          "\u4FEE\u6B63\uFF1A\u55AE\u5143\uFF0F\u7B46\u8A18\u672C\uFF0F\u66F8\u7C64\u5167\u7684\u5C0F\u6E2C\u9A57\u6062\u5FA9\u300C\u9078\u64C7\u6E2C\u9A57\u985E\u578B\u300D\uFF08\u65E5\u2192\u4E2D\u3001\u4E2D\u2192\u65E5\u3001\u62FC\u5B57\u584A\u3001\u9375\u76E4\u62FC\u5B57\u3001\u719F\u6089\u5EA6\uFF09",
        ],
      },
      {
        v: "v13.2",
        d: "10/21 08:35",
        items: [
          "\u79FB\u9664\u6240\u6709\u6210\u529F\u63D0\u793A\u6587\u5B57\uFF08\u53EA\u4FDD\u7559\u932F\u8AA4\u8A0A\u606F\uFF09",
          "\u958B\u555F\u6642\u81EA\u52D5\u6AA2\u67E5\u662F\u5426\u70BA\u6700\u65B0\u7248\uFF0C\u82E5\u662F\u820A\u7248\u5FEB\u53D6\u6703\u81EA\u52D5\u91CD\u65B0\u8F09\u5165",
        ],
      },
      {
        v: "v13.1",
        d: "10/21 08:25",
        items: [
          "\u4FEE\u6B63\uFF1A\u6E2C\u9A57\u4E2D\u4F5C\u7B54\u5F8C\u9801\u9762\u4E0B\u65B9\u591A\u51FA\u300C\u5206\u985E\u5DF2\u66F4\u65B0\u3002\u300D\u6587\u5B57",
        ],
      },
      {
        v: "v13",
        d: "10/21 08:50",
        items: [
          "\u9078\u64C7\u984C\u8207\u62FC\u5B57\u584A\u984C\u65B0\u589E\u300C\u4E0D\u6703\u300D\u9078\u9805\uFF08\u8996\u70BA\u7B54\u932F\u3001\u986F\u793A\u6B63\u78BA\u7B54\u6848\u3001\u719F\u6089\u5EA6 -1\uFF09",
          "\u9375\u76E4\u62FC\u5B57\u984C\u6539\u7248\uFF1A\u8F38\u5165\u6846\u79FB\u5165\u984C\u76EE\u5361\u7247\uFF0C\u7B54\u932F\u986F\u793A\u7D05 \u2717 \u8207\u6B63\u78BA\u62FC\u6CD5\uFF0C\u4E0D\u9700\u6372\u52D5",
          "\u9375\u76E4\u62FC\u5B57\u984C\u7B54\u5C0D\u986F\u793A \u2713 \u4E26\u81EA\u52D5\u9032\u5165\u4E0B\u4E00\u984C",
          "\u8A2D\u5B9A\u65B0\u589E\u300C\u9375\u76E4\u62FC\u5B57\u984C\u7B54\u932F\u5F8C\u986F\u793A\u8A73\u7D30\u8AAA\u660E\u300D\uFF08\u9810\u8A2D\u95DC\u9589\uFF09",
          "\u7B54\u932F\u6642\u81EA\u52D5\u6536\u8D77\u9375\u76E4\uFF0C\u4E0B\u4E00\u984C\u81EA\u52D5\u91CD\u65B0\u958B\u555F",
        ],
      },
      {
        v: "v12.1",
        d: "10/21 08:30",
        items: [
          "\u4FEE\u6B63\uFF1A\u91CD\u65B0\u6574\u7406\u9801\u9762\u5F8C\u4E0D\u518D\u8DF3\u56DE\u4E0A\u6B21\u958B\u555F\u7684\u55AE\u5B57\uFF0C\u6539\u56DE\u9996\u9801",
          "\u62FC\u5B57\u984C\u8F38\u5165\u6846\u4F9D\u984C\u76EE\u8A9E\u8A00\u8A2D\u5B9A\u8A9E\u8A00\u63D0\u793A\u8207\u95DC\u9589\u81EA\u52D5\u4FEE\u6B63\uFF1BiOS \u662F\u5426\u81EA\u52D5\u5207\u63DB\u9375\u76E4\u53D6\u6C7A\u65BC\u7CFB\u7D71\uFF0C\u8ACB\u5728 iOS \u8A2D\u5B9A\u52A0\u5165\u82F1\u6587\uFF0F\u5FB7\u6587\u9375\u76E4",
        ],
      },
      {
        v: "v12",
        d: "10/21",
        items: [
          "\u9078\u64C7\u3001\u719F\u6089\u5EA6\u6E2C\u9A57\uFF1A\u4F5C\u7B54\u5F8C\u4E0D\u518D\u81EA\u52D5\u5C55\u958B\u8AAA\u660E\uFF1B\u984C\u76EE\u5361\u7247\u5DE6\u4E0B\u89D2\u65B0\u589E\u300C\u8AAA\u660E\u300D\u6309\u9215\uFF0C\u9EDE\u7A7A\u767D\u8655\u6216\u8FD4\u56DE\u5373\u53EF\u7E7C\u7E8C",
          "\u7B54\u5C0D\u5F8C\u518D\u9EDE\u4E00\u6B21\u6B63\u78BA\u7B54\u6848\u9032\u5165\u4E0B\u4E00\u984C\uFF1B\u7B54\u932F\u986F\u793A \u2717\uFF08\u53F3\u5074\uFF09\u8207 \u2713\uFF0C\u518D\u9EDE\u932F\u8AA4\u7B54\u6848\u958B\u555F\u8AAA\u660E",
          "\u719F\u6089\u5EA6\u6E2C\u9A57\u7684\u9078\u9805\u6539\u70BA\u9577\u689D\u6309\u9215\uFF0C\u8207\u9078\u64C7\u984C\u4E00\u81F4\uFF1B\u9078\u5B8C\u5F8C\u518D\u9EDE\u4E00\u6B21\u540C\u4E00\u500B\u7B49\u7D1A\u9032\u5165\u4E0B\u4E00\u984C",
          "\u5FB7\u6587\uFF0F\u82F1\u6587\u984C\u7684\u97F3\u6A19\u79FB\u5230\u984C\u76EE\u5361\u7247\u4E0B\u65B9\u7F6E\u4E2D",
          "\u300C\u7D50\u675F\u300D\u56FA\u5B9A\u5728\u756B\u9762\u5E95\u90E8\uFF0C\u4E0D\u518D\u96A8\u5167\u5BB9\u4F4D\u79FB",
          "\u5728\u300C\u65B0\u589E\u55AE\u5B57\u300D\u5132\u5B58\u7684\u55AE\u5B57\u6703\u540C\u6642\u52A0\u5165\u66AB\u5B58\u5340\uFF0C\u7531\u52A9\u7406\u6BCF\u65E5\u88DC\u5168\u8CC7\u8A0A\u4E26\u539F\u5730\u5347\u7D1A\uFF0C\u4E0D\u7522\u751F\u91CD\u8907",
        ],
      },
      {
        v: "v11.1",
        d: "10/20 15:40",
        items: [
          "\u4FEE\u6B63\uFF1A\u62FC\u5BEB\u984C\u6309\u300C\u4E0B\u4E00\u984C\u300D\u5F8C\u8F38\u5165\u6846\u4FDD\u6301\u7126\u9EDE\uFF08\u5728\u9EDE\u64CA\u7576\u4E0B\u76F4\u63A5\u5C0D\u7126\uFF0C\u4F5C\u7B54\u5F8C\u8F38\u5165\u6846\u4E0D\u518D\u505C\u7528\uFF09\uFF0C\u9375\u76E4\u61C9\u4E0D\u6703\u6536\u8D77",
        ],
      },
      {
        v: "v11",
        d: "10/20 \u4E0B\u5348",
        items: [
          "\u65B0\u589E\u300C\u66AB\u5B58\u5340\u300D\uFF1A\u5148\u8A18\u4E0B\u55AE\u5B57\u8207\u5099\u8A3B\uFF0C\u7A0D\u5F8C\u7531\u52A9\u7406\u5206\u985E\u4E26\u88DC\u4E0A\u8CC7\u8A0A\uFF1B\u53EF\u4E00\u9375\u50B3\u7D66\u52A9\u7406\uFF08\u5206\u4EAB\u3001\u7C21\u8A0A\u9023\u7D50\u6216\u8907\u88FD\uFF09",
          "\u9810\u5099\u52A9\u7406\u88DC\u5168\u8CC7\u6599\u7684\u8F09\u5165\u6A5F\u5236\uFF08words-inbox.json\uFF0C\u88DC\u5168\u5F8C\u4F9D\u539F\u672C\u66AB\u5B58\u9805\u76EE\u5347\u7D1A\uFF0C\u9032\u5EA6\u8207\u55AE\u5B57\u672C\u4E0D\u8B8A\uFF09\uFF1B\u76EE\u524D\u6C92\u6709\u8CC7\u6599\u6A94\u6642\u4E0D\u505A\u4EFB\u4F55\u4E8B",
          "\u5099\u4EFD\u8CC7\u6599\u5305\u542B\u66AB\u5B58\u5340",
          "\u4FEE\u6B63\uFF1A\u65E5\u6587\u52D5\u8A5E\u6C92\u586B\u8B80\u97F3\u6642\u4E5F\u80FD\u63A8\u6E2C\u52D5\u8A5E\u985E\u5225",
          "\u88DC\u5168\u5F8C\u4E0D\u7559\u6B98\u9918\uFF1A\u66AB\u5B58\u9805\u76EE\u4F9D\u7DE8\u865F\u539F\u5730\u5347\u7D1A\uFF08\u9032\u5EA6\u8207\u55AE\u5B57\u672C\u4E0D\u8B8A\uFF09\u3001\u91CD\u8907\u55AE\u5B57\u5408\u4F75\u3001\u8655\u7406\u5B8C\u7684\u66AB\u5B58\u9805\u76EE\u81EA\u52D5\u5F9E\u66AB\u5B58\u5340\u8207\u540C\u6B65\u6A94\u79FB\u9664",
          "\u66AB\u5B58\u5340\u53EF\u540C\u6B65\u5230\u52A9\u7406\uFF1A\u8CBC\u4E00\u6B21\u9650\u5B9A\u672C\u5132\u5B58\u5EAB\u7684 GitHub \u91D1\u9470\u5F8C\uFF0C\u52A0\u5165\u6216\u79FB\u9664\u55AE\u5B57\u6703\u81EA\u52D5\u5BEB\u5165 inbox/staging.json\uFF1B\u91D1\u9470\u53EA\u5B58\u5728\u9019\u652F\u624B\u6A5F",
        ],
      },
      {
        v: "v10",
        d: "10/20 \u4E0B\u5348",
        items: [
          "\u65B0\u589E\u55AE\u5B57\uFF1A\u672A\u6307\u5B9A\u8A5E\u6027\u6216\u5B58\u653E\u4F4D\u7F6E\u6642\u81EA\u52D5\u5224\u65B7\uFF08\u65E5\u6587\u52D5\u8A5E\u985E\u5225\u8207\u307E\u3059\u5F62\u3001\u3044\u5F62\u5BB9\u8A5E\uFF1B\u5FB7\u6587\u540D\u8A5E\u3001\u52D5\u8A5E\u3001\u6027\u5225\u5B57\u5C3E\uFF09\uFF0C\u4E26\u4F9D\u8A5E\u6027\u6B78\u5165\u300C\u6211\u7684\u540D\u8A5E\uFF0F\u52D5\u8A5E\uFF0F\u5F62\u5BB9\u8A5E\uFF0F\u526F\u8A5E\u8207\u5176\u4ED6\u300D",
          "\u81EA\u52D5\u5224\u65B7\u7684\u6B04\u4F4D\u6703\u5728\u8A73\u7D30\u9801\u6A19\u793A\u70BA\u63A8\u6E2C\uFF1B\u8F38\u5165\u7684\u6587\u5B57\u6703\u81EA\u52D5\u5207\u63DB\u65E5\u6587\u6216\u5FB7\u6587",
        ],
      },
      {
        v: "v9",
        d: "10/20 \u4E0B\u5348",
        items: [
          "\u66F4\u591A > \u65B0\u589E\u55AE\u5B57\uFF1A\u81EA\u5DF1\u8F38\u5165\u65E5\u6587\u6216\u5FB7\u6587\u55AE\u5B57\uFF0C\u53EF\u9078\u64C7\u5B58\u5165\u54EA\u4E9B\u55AE\u5B57\u672C\u6216\u65B0\u589E\u55AE\u5B57\u672C\uFF0C\u672A\u9078\u64C7\u5247\u653E\u5165\u300C\u6211\u7684\u55AE\u5B57\uFF08\u672A\u5206\u985E\uFF09\u300D",
          "\u81EA\u5DF1\u65B0\u589E\u7684\u55AE\u5B57\u6703\u51FA\u73FE\u5728\u5B78\u7FD2\u3001\u55AE\u5B57\u5EAB\u8207\u6E2C\u9A57\u4E2D\uFF0C\u8A73\u7D30\u9801\u53EF\u522A\u9664\uFF0C\u4E26\u5305\u542B\u5728\u5099\u4EFD\u8CC7\u6599\u4E2D\uFF08\u820A\u5099\u4EFD\u4ECD\u53EF\u9084\u539F\uFF09",
        ],
      },
      {
        v: "v8",
        d: "10/20 \u4E0B\u5348",
        items: [
          "\u6E2C\u9A57\u4F5C\u7B54\u5F8C\u7684\u8AAA\u660E\u5340\u52A0\u5165\u5B8C\u6574\u8CC7\u8A0A\uFF08\u8A5E\u6027\u3001\u8B8A\u5316\u3001\u5168\u90E8\u4F8B\u53E5\u3001\u642D\u914D\u3001\u8FD1\u7FA9\u5B57\uFF09\uFF0C\u79FB\u9664\u300C\u5DF2\u8A18\u9304\u300D\u5217",
          "\u300C\u4E0B\u4E00\u984C\u300D\u6539\u70BA\u5BE6\u5FC3\u6309\u9215\uFF0C\u300C\u7D50\u675F\u300D\u79FB\u5230\u5176\u4E0B\u65B9\u4E26\u7E2E\u5C0F",
          "\u65B0\u589E\u7248\u672C\u65E5\u8A8C",
        ],
      },
      {
        v: "v7",
        d: "10/20 12:37",
        items: [
          "\u9078\u64C7\u3001\u62FC\u5BEB\u3001\u62FC\u5B57\u584A\u6E2C\u9A57\uFF1A\u7B54\u5C0D\u719F\u6089\u5EA6 +1\u3001\u7B54\u932F -1\uFF08\u6700\u4F4E\u300C\u964C\u751F\u300D\u3001\u6700\u9AD8\u300C\u5DF2\u638C\u63E1\u300D\uFF09",
          "\u8A2D\u5B9A\u9801\u986F\u793A\u7248\u672C\u5B57\u4E32",
          "\u78BA\u8A8D\u5FB7\u6587\u719F\u6089\u5EA6\u6E2C\u9A57\u56DE\u994B\u4E0D\u518D\u51FA\u73FE\u7D05\u8272 X",
        ],
      },
      {
        v: "v6",
        d: "10/20 12:29",
        items: [
          "\u65E5\u6587\u52D5\u8A5E\u4EE5\u8FAD\u66F8\u5F62\u986F\u793A\u4E26\u6A19\u793A\u985E\u5225\uFF08\u4E94\u6BB5\u3001\u4E00\u6BB5\u3001\u4E0D\u898F\u5247\uFF09\uFF0C\u5171 266 \u500B\u52D5\u8A5E",
          "\u62FC\u5BEB\u984C\u63A5\u53D7\u52D5\u8A5E\u300C\u307E\u3059\u5F62\u300D",
          "\u8A2D\u5B9A\u65B0\u589E\u300C\u6E2C\u9A57\u7D50\u679C\u8A08\u5165\u719F\u6089\u5EA6\u300D\uFF08\u9810\u8A2D\u958B\u555F\uFF09",
        ],
      },
      {
        v: "v5",
        d: "10/20 10:27",
        items: [
          "\u65E5\u6587\u4F8B\u53E5\u6539\u7528 Tatoeba \u771F\u5BE6\u8A9E\u6599",
          "\u65B0\u589E\u8A9E\u6599\u642D\u914D\u8207 App \u5167\u8FD1\u7FA9\u5B57",
        ],
      },
      {
        v: "v4",
        d: "10/20 10:22",
        items: [
          "\u5FB7\u6587\u540D\u8A5E\u986F\u793A\u8907\u6578\u3001\u4E0D\u898F\u5247\u52D5\u8A5E\u986F\u793A\u8B8A\u5316",
        ],
      },
      {
        v: "v3",
        d: "10/20 10:20",
        items: [
          "\u62FC\u5B57\u584A\u9806\u5E8F\u56FA\u5B9A\uFF08\u4E94\u5341\u97F3\uFF0F\u5B57\u6BCD\u5E8F\uFF09",
          "\u719F\u6089\u5EA6\u6E2C\u9A57\u56DE\u994B\u6539\u70BA\u300C\u5DF2\u8A18\u9304\u300D\uFF0C\u4E0D\u518D\u986F\u793A X",
          "\u62FC\u5BEB\u984C\u81EA\u52D5\u5C0D\u7126\u3001\u5B57\u9AD4 16px \u9632\u6B62\u7E2E\u653E\uFF1B\u63A5\u53D7\u5047\u540D\u8207\u7247\u5047\u540D\u7B54\u6848",
        ],
      },
      {
        v: "v2",
        d: "10/20 08:56",
        items: ["\u4FEE\u6B63\u5E95\u90E8\u5C0E\u89BD\u5217\u9593\u8DDD"],
      },
      {
        v: "v1",
        d: "10/20 08:28",
        items: [
          "\u9996\u6B21\u767C\u4F48\u70BA\u7368\u7ACB\u7DB2\u9801\uFF08GitHub Pages\uFF09\uFF0C\u542B\u55AE\u5B57\u3001\u7247\u8A9E\u3001\u6587\u6CD5\u3001\u6E2C\u9A57\u8207\u672C\u6A5F\u9032\u5EA6\u5099\u4EFD",
        ],
      },
    ],
    Mt = [
      "\u672A\u6A19\u8A18",
      "\u964C\u751F",
      "\u6709\u5370\u8C61",
      "\u719F\u6089",
      "\u5DF2\u638C\u63E1",
    ],
    Nm = {
      "jp-511": 1,
      "jp-324": 1,
      "jp-361": 1,
      "jp-622": 1,
      "jp-358": 1,
      "jp-398": 1,
      "jp-620": 1,
      "jp-395": 1,
      "jp-350": 1,
      "jp-216": 1,
      "jp-383": 1,
      "jp-503": 1,
      "jp-266": 1,
      "jp-296": 1,
      "jp-368": 1,
      "jp-397": 1,
      "jp-402": 1,
      "jp-532": 1,
      "jp-410": 1,
      "jp-539": 1,
      "jp-409": 1,
      "jp-613": 1,
      "jp-614": 1,
      "jp-292": "shopping",
      "jp-573": "shopping",
      "jp-582": "shopping",
      "jp-117": "shopping",
      "jp-176": "shopping",
      "jp-120": "shopping",
      "jp-141": "shopping",
      "jp-096": "shopping",
      "jp-126": "shopping",
      "jp-081": "shopping",
      "jp-974": "shopping",
      "jp-654": "shopping",
      "jp-133": "shopping",
      "jp-072": "shopping",
      "jp-175": "shopping",
      "jp-166": "shopping",
      "jp-174": "shopping",
      "jp-179": "shopping",
      "jp-163": "shopping",
      "jp-130": "shopping",
      "jp-240": "shopping",
      "jp-1138": "shopping",
    },
    Od = (e) =>
      e.themeId ??
      (Nm[e.id] === "shopping"
        ? "shopping"
        : Nm[e.id]
          ? "numbers"
          : Number(e.id.slice(3)) <= 6
            ? "greetings"
            : Number(e.id.slice(3)) <= 16
              ? "daily"
              : Number(e.id.slice(3)) <= 18 || Number(e.id.slice(3)) === 21
                ? "time"
                : "food"),
    Fs = {
      books: [
        { id: "greetings", name: "\u554F\u5019\u8207\u4ECB\u7D39" },
        { id: "daily", name: "\u65E5\u5E38\u52D5\u4F5C" },
        { id: "time", name: "\u6642\u9593" },
        { id: "food", name: "\u98F2\u98DF" },
        { id: "adjectives", name: "\u5F62\u5BB9\u8A5E" },
        { id: "family", name: "\u5BB6\u4EBA\u8207\u4EBA\u7269" },
        { id: "numbers", name: "\u6578\u5B57\u8207\u8A08\u6578" },
        { id: "shopping", name: "\u8CFC\u7269\u8207\u8863\u8457" },
        ...jm,
      ],
      entries: Object.fromEntries(
        V.filter((e) => !e.bank || Nm[e.id]).map((e) => [
          e.id,
          {
            books: [
              e.themeId == null && !Nm[e.id] && e.foundations ? null : Od(e),
            ].filter(Boolean),
          },
        ]),
      ),
    },
    xe = (e) => new TextEncoder().encode(JSON.stringify(e)).length,
    wm = {
      "jp-005": "n5",
      "jp-017": "n5",
      "jp-018": "n5",
      "jp-019": "n5",
      "jp-020": "n5",
      "jp-022": "n5",
      "jp-023": "n5",
      "jp-024": "n5",
      "jp-025": "n5",
      "jp-026": "n5",
      "jp-027": "n5",
      "jp-028": "n5",
      "jp-029": "n5",
      "jp-030": "n5",
      "jp-031": "n5",
      "jp-036": "n5",
      "jp-038": "n5",
      "jp-039": "n5",
      "jp-040": "n5",
      "jp-041": "n5",
      "jp-042": "n5",
      "jp-044": "n5",
      "jp-045": "n5",
      "jp-049": "n5",
      "jp-050": "n5",
      "jp-052": "n5",
      "jp-053": "n5",
      "jp-054": "n5",
      "jp-055": "n5",
      "jp-056": "n5",
      "jp-057": "n5",
      "jp-058": "n5",
      "jp-059": "n5",
      "jp-060": "n5",
      "jp-061": "n5",
      "jp-062": "n5",
      "jp-063": "n5",
      "jp-064": "n5",
      "jp-065": "n5",
    };
  function _s(e) {
    return (
      !!e &&
      Array.isArray(e.books) &&
      e.books.length <= 200 &&
      new Set(e.books.map((t) => t.id)).size === e.books.length &&
      e.books.every(
        (t) =>
          t &&
          typeof t.id == "string" &&
          /^[a-zA-Z0-9-]{1,80}$/.test(t.id) &&
          typeof t.name == "string" &&
          t.name.trim().length > 0 &&
          t.name.length <= 80,
      ) &&
      e.entries &&
      typeof e.entries == "object" &&
      !Array.isArray(e.entries) &&
      Object.entries(e.entries).every(
        ([t, r]) =>
          /^(jp|jpl\d+|de|ujp|ude)-\d+$/.test(t) &&
          r &&
          Number.isInteger(r.familiarity ?? 0) &&
          (r.familiarity ?? 0) >= 0 &&
          (r.familiarity ?? 0) < Mt.length &&
          Array.isArray(r.books) &&
          new Set(r.books).size === r.books.length &&
          r.books.every((o) => e.books.some((n) => n.id === o)),
      ) &&
      xe(e) <= 1e5
    );
  }
  var Cm = () =>
      new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Taipei",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      }).format(new Date()),
    W1 = (e) => {
      let t = new Date(Cm() + "T12:00:00+08:00");
      return (
        t.setUTCDate(t.getUTCDate() + e),
        new Intl.DateTimeFormat("en-CA", {
          timeZone: "Asia/Taipei",
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(t)
      );
    },
    Dt = (e) => {
      let t = [...e];
      for (let r = t.length - 1; r > 0; r--) {
        let o = Math.floor(Math.random() * (r + 1));
        [t[r], t[o]] = [t[o], t[r]];
      }
      return t;
    };
  function ht(e, t) {
    let [r, o, n] = gm(e, t),
      [a, i] = (0, s.useState)(t),
      c = (0, s.useRef)(!1),
      [d, p] = (0, s.useState)(!1);
    return (
      (0, s.useEffect)(() => {
        n.ready && !c.current && ((c.current = !0), i(r), p(!0));
      }, [n.ready, r]),
      [
        a,
        (x) => {
          c.current && (i(x), o(x));
        },
        { ready: d, message: n.message },
      ]
    );
  }
  var Ll = (e) =>
      e.vclass
        ? e.vclass === "1"
          ? "\u4E00\u985E\u52D5\u8A5E\uFF08\u4E94\u6BB5\uFF09"
          : e.vclass === "2"
            ? "\u4E8C\u985E\u52D5\u8A5E\uFF08\u4E00\u6BB5\uFF09"
            : e.vkind === "\u4F86\u308B"
              ? "\u4E09\u985E\u52D5\u8A5E\uFF08\u6765\u308B\u30FB\u4E0D\u898F\u5247\uFF09"
              : "\u4E09\u985E\u52D5\u8A5E\uFF08\u3059\u308B\u30FB\u4E0D\u898F\u5247\uFF09"
        : "",
    bm = {
      masculine: "\u967D\u6027 der",
      feminine: "\u9670\u6027 die",
      neuter: "\u4E2D\u6027 das",
    };
  function J1(e, t) {
    let r = e.replace(/^(der|die|das) /, "");
    if (t === r) return "-";
    if (t.startsWith(r)) return "-" + t.slice(r.length);
    let o = { \u00E4: "a", \u00F6: "o", \u00FC: "u" };
    for (let n = r.length - 1; n >= 0; n--) {
      let a = r[n].toLowerCase();
      if ("aou".includes(a)) {
        let i =
          r.slice(0, n) +
          (a === "a"
            ? r[n] === "A"
              ? "\xC4"
              : "\xE4"
            : a === "o"
              ? r[n] === "O"
                ? "\xD6"
                : "\xF6"
              : r[n] === "U"
                ? "\xDC"
                : "\xFC") +
          r.slice(n + 1);
        if (t.startsWith(i)) return "\xA8-" + t.slice(i.length);
        if (t === i) return "\xA8";
      }
    }
    return "";
  }
  function It(e) {
    if (e.lang !== "de" || !e.grammar) return null;
    let t = e.grammar;
    if (t.startsWith("noun") || t.startsWith("proper noun")) {
      let r = Object.keys(bm).find((i) => t.includes(i)),
        o = t.match(/plural ([^;]+)/),
        n = [
          t.startsWith("proper") ? "\u5C08\u6709\u540D\u8A5E" : "\u540D\u8A5E",
        ];
      r && n.push(bm[r]);
      let a = "";
      if (o) {
        let i = o[1].trim(),
          c = J1(e.word, i);
        (n.push("\u8907\u6578 " + i + (c ? "\uFF08" + c + "\uFF09" : "")),
          (a = "\u8907\u6578 " + i));
      } else
        /singular only/.test(t)
          ? n.push(
              "\u50C5\u7528\u55AE\u6578\uFF08\u6B64\u7FA9\u7121\u8907\u6578\uFF09",
            )
          : /normally singular/.test(t)
            ? n.push("\u901A\u5E38\u53EA\u7528\u55AE\u6578")
            : /article required/.test(t) &&
              n.push("\u4F7F\u7528\u6642\u9700\u52A0\u51A0\u8A5E");
      return { label: n.join(" \xB7 "), detail: "", short: a };
    }
    if (t.startsWith("verb")) {
      let r = t.includes("irregular"),
        o = t.includes(":") ? t.split(":").slice(1).join(":").trim() : "";
      return {
        label: r
          ? "\u4E0D\u898F\u5247\u52D5\u8A5E"
          : t.includes("regular")
            ? "\u898F\u5247\u52D5\u8A5E"
            : "\u52D5\u8A5E",
        detail: o ? "\u8B8A\u5316\uFF1A" + o.replace(/;/g, "\uFF1B") : "",
        short: r ? "\u4E0D\u898F\u5247" : "",
      };
    }
    return null;
  }
  function Ps({ label: e, value: t }) {
    return s.default.createElement(
      "div",
      { className: "metric" },
      s.default.createElement("strong", null, t),
      s.default.createElement("span", null, e),
    );
  }
  var ym = (e) =>
      !!e &&
      typeof e == "object" &&
      !Array.isArray(e) &&
      xe(e) <= 8e3 &&
      Object.entries(e).every(
        ([t, r]) =>
          /^(jp|jpl\d+|de|ujp|ude)-\d+$/.test(t) &&
          r &&
          typeof r == "object" &&
          Object.keys(r).every((o) =>
            ["star", "note", "collocation", "similar"].includes(o),
          ) &&
          (r.star === void 0 || typeof r.star == "boolean") &&
          ["note", "collocation", "similar"].every(
            (o) =>
              r[o] === void 0 ||
              (typeof r[o] == "string" && r[o].length <= 800),
          ),
      ),
    H1 = (e) =>
      !!e &&
      typeof e == "object" &&
      !Array.isArray(e) &&
      xe(e) <= 4e3 &&
      Object.entries(e).every(
        ([t, r]) =>
          /^\d{4}-\d{2}-\d{2}$/.test(t) &&
          r &&
          Number.isInteger(r.r) &&
          r.r >= 0 &&
          Number.isInteger(r.c) &&
          r.c >= 0 &&
          r.c <= r.r &&
          (r.sr === void 0 ||
            (Number.isInteger(r.sr) && r.sr >= 0 && r.sr <= r.r)) &&
          (r.sc === void 0 ||
            (Number.isInteger(r.sc) && r.sc >= 0 && r.sc <= (r.sr ?? 0))),
      ),
    Em = (e) =>
      e === "study" || e === "mine" || e === "progress" || e === "settings"
        ? e === "study"
          ? "courses"
          : "more"
        : e;
  function V1({ tab: e, go: t }) {
    return s.default.createElement(
      "nav",
      { className: "bottom-nav", "aria-label": "\u4E3B\u8981\u529F\u80FD" },
      [
        ["courses", "\u8AB2\u7A0B", "\u25A6"],
        ["quiz", "\u6E2C\u9A57", "\u270E"],
        ["search", "\u67E5\u8A62", "\u2315"],
        ["library", "\u55AE\u5B57\u5EAB", "\u2630"],
        ["more", "\u66F4\u591A", "\u22EF"],
      ].map(([o, n, a]) =>
        s.default.createElement(
          "button",
          {
            key: o,
            className: e === o ? "selected" : "",
            "aria-current": e === o ? "page" : void 0,
            onClick: () => t(o),
          },
          s.default.createElement("i", { "aria-hidden": "true" }, a),
          s.default.createElement("span", null, n),
        ),
      ),
    );
  }
  function We({ title: e, sub: t, onBack: r, children: o }) {
    return s.default.createElement(
      "div",
      { className: "screen-header" },
      r
        ? s.default.createElement(
            "button",
            { className: "hdr-back", "aria-label": "\u8FD4\u56DE", onClick: r },
            "\u2039",
          )
        : s.default.createElement("span", { className: "hdr-spacer" }),
      s.default.createElement(
        "div",
        { className: "hdr-title" },
        s.default.createElement("strong", null, e),
        t ? s.default.createElement("small", null, t) : null,
      ),
      s.default.createElement("div", { className: "hdr-actions" }, o),
    );
  }
  var km = (e, t) => {
    let r = [0, 0, 0, 0, 0];
    return (e.forEach((o) => r[t.entries[o.id]?.familiarity ?? 0]++), r);
  };
  function vm({ counts: e, total: t }) {
    let r = (o) => (t ? (o / t) * 100 : 0);
    return s.default.createElement(
      "div",
      { className: "fam-bar", "aria-hidden": "true" },
      s.default.createElement("i", {
        className: "seg-low",
        style: { width: r(e[1]) + "%" },
      }),
      s.default.createElement("i", {
        className: "seg-mid",
        style: { width: r(e[2]) + "%" },
      }),
      s.default.createElement("i", {
        className: "seg-high",
        style: { width: r(e[3] + e[4]) + "%" },
      }),
    );
  }
  function Sm({ title: e, onClose: t, children: r }) {
    return s.default.createElement(
      "div",
      { className: "sheet-backdrop", onClick: t },
      s.default.createElement(
        "div",
        {
          className: "sheet",
          role: "dialog",
          "aria-label": e,
          onClick: (o) => o.stopPropagation(),
        },
        s.default.createElement("h3", null, e),
        r,
      ),
    );
  }
  function K1({ sortBy: e, onChange: t, onClose: r, lang: o }) {
    return s.default.createElement(
      Sm,
      { title: "\u6392\u5E8F\u65B9\u5F0F", onClose: r },
      s.default.createElement(
        "div",
        { className: "tile-grid-2" },
        [
          ["default", "\u9810\u8A2D"],
          ["alpha", o === "jp" ? "\u8B80\u97F3\u6392\u5E8F" : "A\u2013Z"],
          ["random", "\u96A8\u6A5F"],
          ["stars", "\u66F8\u7C64\u512A\u5148"],
          ["familiarity", "\u719F\u6089\u5EA6"],
        ].map(([a, i]) =>
          s.default.createElement(
            "button",
            {
              key: a,
              className: e === a ? "tile-on" : "",
              onClick: () => {
                (t(a), r());
              },
            },
            i,
          ),
        ),
      ),
    );
  }
  function Nm({ level: e, onPick: t, onClose: r }) {
    return s.default.createElement(
      Sm,
      { title: "\u719F\u6089\u5EA6", onClose: r },
      s.default.createElement(
        "div",
        { className: "fam-pick" },
        Mt.map((o, n) =>
          s.default.createElement(
            "button",
            {
              key: o,
              className: "fam-btn lv-" + n + (n === e ? " on" : ""),
              onClick: () => {
                (t(n), r());
              },
            },
            o,
          ),
        ),
      ),
    );
  }
  function _l({
    ws: e,
    meaning: t,
    extras: r,
    catalog: o,
    onOpen: n,
    listMeaning: a,
  }) {
    return s.default.createElement(
      "div",
      { className: "word-list" },
      e.map((i) =>
        s.default.createElement(
          "button",
          { className: "word-row", key: i.id, onClick: () => n(i) },
          s.default.createElement(
            "span",
            { className: "word-row-main" },
            s.default.createElement(
              "strong",
              { lang: i.lang === "jp" ? "ja" : "de" },
              a ? t(i) : i.word,
            ),
            s.default.createElement(
              "small",
              null,
              (a
                ? [
                    i.word,
                    i.reading && i.reading !== i.word ? i.reading : "",
                    i.pos ?? "",
                  ]
                : [
                    i.reading && i.reading !== i.word ? i.reading : "",
                    i.pos ?? "",
                    It(i)?.short ?? "",
                    i.vclass ? Ll(i).slice(0, 2) : "",
                    t(i),
                  ]
              )
                .filter(Boolean)
                .join(" \xB7 "),
            ),
          ),
          s.default.createElement(
            "span",
            { className: "row-right" },
            r[i.id]?.star
              ? s.default.createElement(
                  "b",
                  { className: "row-star" },
                  "\u2605",
                )
              : null,
            s.default.createElement("i", {
              className: "dot level-" + (o.entries[i.id]?.familiarity ?? 0),
            }),
          ),
        ),
      ),
    );
  }
  function Ml({
    title: e,
    sub: t,
    ws: r,
    words: o,
    meaning: n,
    extras: a,
    catalog: i,
    onBack: c,
    onOpen: d,
    onListen: p,
    onQuiz: x,
    sortBy: m,
    setSortBy: f,
    applySort: j,
    listMeaning: y,
    setListMeaning: k,
    lang: T,
  }) {
    let [u, h] = (0, s.useState)(!1),
      [qp, setQp] = (0, s.useState)(null),
      g = j(r);
    return s.default.createElement(
      s.default.Fragment,
      null,
      s.default.createElement(
        We,
        { title: e, sub: t, onBack: c },
        s.default.createElement(
          "button",
          { "aria-label": "\u6392\u5E8F\u65B9\u5F0F", onClick: () => h(!0) },
          "\u21C5",
        ),
        s.default.createElement(
          "button",
          {
            "aria-label": y
              ? "\u986F\u793A\u55AE\u5B57"
              : "\u986F\u793A\u91CB\u7FA9",
            className: y ? "hdr-on" : "",
            onClick: () => k(!y),
          },
          "\u91CB",
        ),
        s.default.createElement(
          "button",
          {
            "aria-label": "\u807D\u529B\u64AD\u653E",
            disabled: !r.length,
            onClick: () => p(g.map((b) => b.id)),
          },
          "\u266A",
        ),
        s.default.createElement(
          "button",
          {
            "aria-label": "\u6E2C\u9A57\u9019\u4E9B\u55AE\u5B57",
            disabled: !r.length,
            onClick: () => setQp(g.map((b) => b.id)),
          },
          "\u270E",
        ),
      ),
      s.default.createElement(
        "p",
        { className: "list-count" },
        r.length,
        " \u500B\u689D\u76EE",
      ),
      s.default.createElement(_l, {
        ws: g,
        meaning: n,
        extras: a,
        catalog: i,
        listMeaning: y,
        onOpen: (b) => d(b, g),
      }),
      !r.length &&
        s.default.createElement(
          "p",
          { className: "empty" },
          "\u9019\u500B\u7BC4\u570D\u76EE\u524D\u6C92\u6709\u689D\u76EE\u3002",
        ),
      qp &&
        s.default.createElement(
          "div",
          { className: "sheet-backdrop", onClick: () => setQp(null) },
          s.default.createElement(
            "div",
            { className: "sheet", onClick: (b) => b.stopPropagation() },
            s.default.createElement("h3", null, "\u9078\u64C7\u6E2C\u9A57\u985E\u578B"),
            s.default.createElement(
              "div",
              { className: "type-pick" },
              [
                ["forward", T === "jp" ? "\u65E5 \u2192 \u4E2D" : "DE \u2192 EN"],
                ["reverse", T === "jp" ? "\u4E2D \u2192 \u65E5" : "EN \u2192 DE"],
                ["tiles", "\u5B57\u584A\u62FC\u5B57"],
                ["spell", "\u6253\u5B57\u62FC\u5B57"],
                ["familiar", "\u719F\u6089\u5EA6"],
                ["cards", "\u5B57\u5361"],
              ].map(([b, N]) =>
                s.default.createElement(
                  "button",
                  { key: b, onClick: () => (x(qp, b), setQp(null)) },
                  N,
                ),
              ),
            ),
          ),
        ),
      u &&
        s.default.createElement(K1, {
          sortBy: m,
          onChange: f,
          onClose: () => h(!1),
          lang: T,
        }),
    );
  }
  var $1 = (e) =>
    Array.isArray(e) &&
    e.length <= 12 &&
    e.every((t) => typeof t == "string" && t.length > 0 && t.length <= 40) &&
    xe(e) <= 2e3;
  function Tm({ initialTab: e, initialWord: t }) {
    let [r, o, n] = ht("vocabulary.catalog.v1", Fs),
      [a, i, c] = ht("vocabulary.userwords.v1", []);
    (0, s.useEffect)(() => {
      c.ready && $n(a) && _o(a);
    }, [c.ready]);
    let [d, p, x] = ht("vocabulary.staging.v1", []),
      [m, f, j] = ht("vocabulary.dailystats.v1", {});
    (0, s.useEffect)(() => {
      if (!n.ready) return;
      let l = Fs.books.filter((C) => !r.books.some((ae) => ae.id === C.id)),
        z = V.filter(
          (C) => (!C.bank || Nm[C.id]) && !r.entries[C.id],
        );
      let v = [...r.books, ...l],
        S = { ...r.entries },
        Gf = 0;
      V.filter(
        (C) => C.foundations && C.themeId == null && !Nm[C.id] && r.entries[C.id],
      ).forEach((C) => {
        let ae = r.entries[C.id].books ?? [];
        ae.length === 1 &&
          ae[0] === Od(C) &&
          ((S[C.id] = { ...r.entries[C.id], books: [] }), Gf++);
      });
      if (!z.length && !l.length && !Gf) return;
      z.forEach((C) => {
        let ae =
          Fs.entries[C.id]?.books.filter((ee) =>
            v.some((Ar) => Ar.id === ee),
          ) ?? [];
        S[C.id] = { books: ae };
      });
      let L = { ...r, books: v, entries: S };
      _s(L) && o(L);
    }, [n.ready, r]);
    let [y, k, T] = ht("vocabulary.progress.0.v1", {}),
      [u, h, g] = ht("vocabulary.progress.1.v1", {}),
      [b, E, N] = ht("vocabulary.progress.2.v1", {}),
      [D, F, K] = ht("vocabulary.progress.3.v1", {}),
      w = Object.fromEntries(
        Object.entries({ ...y, ...u, ...b, ...D }).filter(([l]) =>
          V.some((z) => z.id === l),
        ),
      ),
      X = { ...y, ...u, ...b, ...D },
      ve = {
        ready: T.ready && g.ready && N.ready && K.ready && j.ready,
        message:
          [T, g, N, K, n].find((l) => l.message.includes("Not saved"))
            ?.message ??
          [T, g, N, K, n].find((l) => l.message.includes("Saving"))?.message ??
          T.message,
      },
      Je = (l) => (l.startsWith("de") ? 2 : 0) + (Number(l.split("-")[1]) % 2),
      [G, ze, oe] = ht("vocabulary.extras.v1", {}),
      [R, U, P] = ht("vocabulary.ui.v1", {
        detailTab: "examples",
        size: 20,
        rate: 0.9,
        hideMeaning: !1,
        repeat: 1,
        autoPlay: !1,
        unitSize: 50,
        rememberTab: !1,
        quizFamiliar: !0,
        spellExplain: !1,
        lastTab: "",
      }),
      [tr, Ce] = (0, s.useState)(""),
      Lo = (l) => {
        let z = [{}, {}, {}, {}];
        if (
          (Object.entries(l).forEach(([v, S]) => (z[Je(v)][v] = S)),
          xe(l) + xe(r) + xe(G) + xe(m) > 5e5)
        ) {
          Ce("Storage limit reached");
          return;
        }
        if (
          z.some(
            (v) => new TextEncoder().encode(JSON.stringify(v)).length > 1e5,
          )
        ) {
          Ce(
            "Storage limit reached. Keep a backup and ask in chat. / \u5DF2\u9054\u5132\u5B58\u4E0A\u9650\uFF0C\u8ACB\u5099\u4EFD\u4E26\u5728\u804A\u5929\u4E2D\u8A62\u554F\u3002",
          );
          return;
        }
        [k, h, E, F].forEach((v, S) => v(z[S]));
      },
      [J, _, W] = ht(
        "vocabulary.language.v1",
        t?.startsWith("de") ? "de" : "jp",
      );
    (0, s.useEffect)(() => {
      if (t && W.ready) {
        let l = t.startsWith("de") ? "de" : "jp";
        J !== l && _(l);
      }
    }, [t, W.ready]);
    let [Ft, Pt, _t] = ht("vocabulary.searchhistory.v1", []),
      Ze = (l) => {
        let z = l.trim();
        if (!z || !_t.ready) return;
        let v = [z, ...Ft.filter((S) => S !== z)].slice(0, 12);
        $1(v) && Pt(v);
      },
      Vg = (0, s.useRef)(!1),
      [Q, Se] = (0, s.useState)(() => {
        if (e === "detail") return "library";
        let l = null;
        try {
          l = sessionStorage.getItem("mmv:tab");
        } catch (z) {}
        return l ? ((Vg.current = !0), Em(l)) : Em(e);
      });
    ((0, s.useEffect)(() => {
      if (e === "detail") return;
      let l = null;
      try {
        l = sessionStorage.getItem("mmv:tab");
      } catch (z) {}
      if (l) {
        Vg.current = !0;
        return;
      }
      if (P.ready) {
        Vg.current = !0;
        if (R.rememberTab && R.lastTab) {
          let z = Em(R.lastTab);
          z !== Q && Se(z);
        }
      }
    }, [P.ready]),
      (0, s.useEffect)(() => {
        if (e !== "detail" && Vg.current)
          try {
            sessionStorage.setItem("mmv:tab", Q);
          } catch (l) {}
        P.ready && R.rememberTab && R.lastTab !== Q && U({ ...R, lastTab: Q });
      }, [Q]));
    let [ut, rr] = (0, s.useState)("main"),
      [Et, be] = (0, s.useState)("courses"),
      [he, A] = (0, s.useState)(null),
      [O, ne] = (0, s.useState)("grid"),
      [He, Oo] = (0, s.useState)("all"),
      [Qr, Ye] = (0, s.useState)("all"),
      [kt, Ro] = (0, s.useState)("all"),
      [tp, Rp] = (0, s.useState)("all"),
      [Fm, Pm] = (0, s.useState)(""),
      [Rl, Qn] = (0, s.useState)(""),
      [_m, Wl] = (0, s.useState)(null),
      [Lt, or] = (0, s.useState)(""),
      [Js, Jl] = (0, s.useState)(""),
      [Wo, HlSet] = (0, s.useState)(["all"]),
      Hl = (l) => {
        l === "all"
          ? HlSet(["all"])
          : HlSet((z) => {
              let S = z.filter((L) => L !== "all");
              S = S.includes(l) ? S.filter((L) => L !== l) : [...S, l];
              return S.length ? S : ["all"];
            });
      },
      [Vl, Lm] = (0, s.useState)(10),
      [Kl, Om] = (0, s.useState)(!1),
      [$l, Rm] = (0, s.useState)(!1),
      [Hs, Wm] = (0, s.useState)(""),
      [Ot, Zn] = (0, s.useState)("default"),
      [Jm] = (0, s.useState)(() => Math.floor(Math.random() * 1e9)),
      [Vs, Jo] = (0, s.useState)([]),
      [Hm, Ks] = (0, s.useState)(!1),
      [Gl, Ho] = (0, s.useState)(!1),
      [Yn, $s] = (0, s.useState)(!1),
      [Zr, Vm] = (0, s.useState)([]),
      [Ql, qn] = (0, s.useState)(""),
      [Km, $m] = (0, s.useState)("default"),
      [Xn, Zl] = (0, s.useState)(""),
      [Gm, Qm] = (0, s.useState)([]),
      [Vo, nr] = (0, s.useState)(
        e === "detail"
          ? V.filter((l) => l.lang === (t?.startsWith("de") ? "de" : "jp")).map(
              (l) => l.id,
            )
          : [],
      ),
      [Yl, ea] = (0, s.useState)(
        t
          ? V.filter(
              (l) => l.lang === (t?.startsWith("de") ? "de" : "jp"),
            ).findIndex((l) => l.id === t)
          : 0,
      ),
      Ne = V.filter((l) => l.lang === J && !l.bank),
      Nl = Ne.concat(V.filter((l) => l.lang === J && Nm[l.id])).filter(
        (l) => !l.foundations,
      ),
      FDl = V.filter((l) => l.lang === J && l.foundations),
      mf = J === "jp" ? 30 : 10,
      Ur = Cm(),
      NeG = Ne.filter((l) => !l.foundations),
      Gs = NeG.filter((l) => w[l.id] && w[l.id].d <= Ur),
      ar = Ne.filter((l) => w[l.id]),
      arG = NeG.filter((l) => w[l.id]),
      Qs = NeG.filter((l) => !w[l.id]),
      ta = NeG.filter((l) => w[l.id]?.n === Ur).length,
      FGs = FDl.filter((l) => w[l.id] && w[l.id].d <= Ur),
      Far = FDl.filter((l) => w[l.id]),
      FZs = Far.filter((l) => (r.entries[l.id]?.familiarity ?? 0) < 3),
      FQs = FDl.filter((l) => !w[l.id]),
      Yr = ar.reduce((l, z) => l + w[z.id].ok, 0),
      ra = ar.reduce((l, z) => l + w[z.id].bad, 0),
      Te = (() => {
        let l = 0,
          z = 0,
          v = 0,
          S = 0;
        for (let L = 0; L < 7; L++) {
          let C = new Date(Date.now() - L * 864e5),
            ae = new Intl.DateTimeFormat("en-CA", {
              timeZone: "Asia/Taipei",
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            }).format(C),
            ee = m[ae];
          ee &&
            ((l += ee.r), (z += ee.c), (v += ee.sr ?? 0), (S += ee.sc ?? 0));
        }
        return { r: l, c: z, sr: v, sc: S };
      })(),
      Zs = arG.filter((l) => (r.entries[l.id]?.familiarity ?? 0) < 3),
      Ys = ar
        .filter((l) => w[l.id].bad > 0)
        .sort((l, z) => w[z.id].bad - w[l.id].bad || w[z.id].ok - w[l.id].ok)
        .slice(0, 5),
      ql = J === "jp" || Km === "zh" ? "zh" : "en",
      sr = (l) =>
        (l.lang === "jp" || ql === "zh" ? l.zh : l.en) || l.zh || l.en,
      qr = r.books.filter((l) =>
        J === "jp" ? !l.id.startsWith("debook-") : l.id.startsWith("debook-"),
      ),
      Ko = V.filter(
        (l) => l.lang === "jp" && (l.bank === "n5" || wm[l.id] === "n5"),
      ),
      $o = V.filter(
        (l) => l.lang === "jp" && (l.bank === "n4" || wm[l.id] === "n4"),
      ),
      Xl = ut === "n4" ? $o : Ko,
      Zm = (() => {
        let l = R.unitSize ?? 50,
          z = [];
        for (let v = 0; v < Xl.length; v += l) z.push(Xl.slice(v, v + l));
        return z;
      })(),
      Ym = V.filter(
        (l) =>
          l.lang === J &&
          !l.bank &&
          (He === "all" || l.contentType === He) &&
          (Qr === "all" || String(r.entries[l.id]?.familiarity ?? 0) === Qr) &&
          (kt === "all" || r.entries[l.id]?.books.includes(kt)) &&
          (tp === "all" || l.topic === tp) &&
          (!Gl || G[l.id]?.star) &&
          [
            l.word,
            l.reading,
            l.en,
            l.zh,
            ...(l.collocations ?? []).map((z) => z.text + " " + z.zh),
            ...(l.similar ?? []).map((z) => z.word + " " + z.note),
          ].some((z) => z.toLowerCase().includes(Lt.toLowerCase())),
      ),
      oa = (l) => {
        if (Ot === "default") return l;
        let z = [...l],
          v = (S) => {
            let L = Jm;
            for (let C of S) L = (L * 31 + C.charCodeAt(0)) | 0;
            return L;
          };
        return (
          Ot === "alpha"
            ? z.sort((S, L) =>
                (S.reading || S.word).localeCompare(L.reading || L.word, "ja"),
              )
            : Ot === "stars"
              ? z.sort((S, L) => +!!G[L.id]?.star - +!!G[S.id]?.star)
              : Ot === "familiarity"
                ? z.sort(
                    (S, L) =>
                      (r.entries[S.id]?.familiarity ?? 0) -
                      (r.entries[L.id]?.familiarity ?? 0),
                  )
                : Ot === "random" && z.sort((S, L) => v(S.id) - v(L.id)),
          z
        );
      },
      Xr = oa(Ym),
      qs = (() => {
        let l = Wo.includes("all")
          ? V.filter((z) => z.lang === J && !z.foundations)
          : [
              ...new Map(
                [
                  ...(Wo.includes("n5") ? Ko : []),
                  ...(Wo.includes("n4") ? $o : []),
                  ...(Wo.includes("foundations") ? FDl : []),
                  ...Ne.filter((z) =>
                    (r.entries[z.id]?.books ?? []).some(
                      (L) =>
                        Wo.includes(L) &&
                        (!z.foundations || !Fs.books.some((S) => S.id === L)),
                    ),
                  ),
                ].map((z) => [z.id, z]),
              ).values(),
            ];
        return (
          Kl && (l = l.filter((z) => G[z.id]?.star)),
          $l && (l = l.filter((z) => (r.entries[z.id]?.familiarity ?? 0) < 3)),
          l
        );
      })(),
      na = Lt.trim()
        ? V.filter(
            (l) =>
              l.lang === J &&
              [l.word, l.reading, l.romaji ?? "", l.en, l.zh].some((z) =>
                z.toLowerCase().includes(Lt.trim().toLowerCase()),
              ),
          ).slice(0, 30)
        : [],
      nt = V.find((l) => l.id === Vo[Yl]),
      ed = Vo.length > 0 && !!nt,
      td = (l, z = l.word) => {
        if (!("speechSynthesis" in window)) {
          qn("\u6B64\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u6717\u8B80\u3002");
          return;
        }
        let v = l.lang === "jp" ? "ja" : "de",
          L = window.speechSynthesis
            .getVoices()
            .find((ae) => ae.lang.toLowerCase().startsWith(v));
        if (!L) {
          qn(
            "\u627E\u4E0D\u5230" +
              (v === "ja" ? "\u65E5\u6587" : "\u5FB7\u6587") +
              "\u8A9E\u97F3\u3002\u8ACB\u5728\u88DD\u7F6E\u4E0A\u5B89\u88DD\u5C0D\u61C9\u8A9E\u97F3\u5F8C\u518D\u8A66\u3002",
          );
          return;
        }
        window.speechSynthesis.cancel();
        let C = new SpeechSynthesisUtterance(z);
        ((C.lang = v === "ja" ? "ja-JP" : "de-DE"),
          (C.voice = L),
          (C.rate = R.rate),
          (C.onerror = () =>
            qn(
              "\u6717\u8B80\u672A\u80FD\u5B8C\u6210\uFF0C\u8ACB\u518D\u8A66\u4E00\u6B21\u3002",
            )),
          window.speechSynthesis.speak(C),
          qn(
            "\u88DD\u7F6E\u5408\u6210\u8A9E\u97F3\uFF0C\u975E\u771F\u4EBA\u9304\u97F3\u3002",
          ));
      },
      eo = (l, z = Xr) => {
        (nr(z.map((v) => v.id)), ea(z.findIndex((v) => v.id === l.id)));
      },
      Xs = (l, z, v, S) => {
        (A({ title: l, sub: z, ids: v, from: S }),
          S === "courses" && be("words"));
      },
      qm = () => {
        let l = Math.min(20, arG.length),
          z = Dt(Gs).slice(0, Math.ceil(l * 0.7));
        return Dt([
          ...z,
          ...Dt(arG.filter((v) => !z.some((S) => S.id === v.id))).slice(
            0,
            l - z.length,
          ),
        ]).map((v) => v.id);
      },
      qmF = () => {
        let l = Math.min(20, Far.length),
          z = Dt(FGs).slice(0, Math.ceil(l * 0.7));
        return Dt([
          ...z,
          ...Dt(Far.filter((v) => !z.some((S) => S.id === v.id))).slice(
            0,
            l - z.length,
          ),
        ]).map((v) => v.id);
      },
      Rt = (l, z) => {
        (Qm(Dt(z)), Zl(l), nr([]));
      },
      Xm = (l, z, v) => {
        if (!ve.ready) return;
        let S = w[l.id],
          L = !!S && S.d > Ur,
          C = z ? (L ? S.s : Math.min(2, (S?.s ?? -1) + 1)) : -1;
        Lo({
          ...X,
          [l.id]: {
            s: C,
            d: z && L ? S.d : W1(z ? [3, 7, 14][C] : 1),
            n: S?.n ?? Ur,
            last: Ur,
            ok: (S?.ok ?? 0) + (z ? 1 : 0),
            bad: (S?.bad ?? 0) + (z ? 0 : 1),
          },
        });
        let ae = { ...m },
          ee = ae[Ur] ?? { r: 0, c: 0 };
        ((ae[Ur] = {
          r: ee.r + 1,
          c: ee.c + (z ? 1 : 0),
          sr: (ee.sr ?? 0) + (v === "spell" || v === "tiles" ? 1 : 0),
          sc: (ee.sc ?? 0) + ((v === "spell" || v === "tiles") && z ? 1 : 0),
        }),
          f(
            Object.fromEntries(
              Object.keys(ae)
                .sort()
                .slice(-31)
                .map((Ar) => [Ar, ae[Ar]]),
            ),
          ));
      },
      eg = () => {
        try {
          let l = JSON.parse(Js);
          if (
            l.format !== "mm-vocabulary-v1" ||
            !l.progress ||
            Array.isArray(l.progress) ||
            (l.userWords !== void 0 && !$n(l.userWords)) ||
            (l.staging !== void 0 && !tf(l.staging))
          )
            throw Error();
          let z = l.progress;
          for (let [L, C] of Object.entries(z)) {
            let ae = C;
            if (
              !/^(jp|jpl\d+|de|ujp|ude)-\d+$/.test(L) ||
              !Number.isInteger(ae.s) ||
              ae.s < -1 ||
              ae.s > 2 ||
              ![ae.d, ae.n, ae.last].every(
                (ee) => typeof ee == "string" && /^\d{4}-\d{2}-\d{2}$/.test(ee),
              ) ||
              ![ae.ok, ae.bad].every((ee) => Number.isInteger(ee) && ee >= 0)
            )
              throw Error();
          }
          if (l.catalog !== void 0 && !_s(l.catalog)) throw Error();
          let v = l.catalog ?? r;
          if (
            (l.extras !== void 0 && !ym(l.extras)) ||
            (l.daily !== void 0 && !H1(l.daily)) ||
            xe(z) + xe(v) + xe(l.extras ?? G) + xe(l.daily ?? m) > 5e5 ||
            [0, 1, 2, 3].some(
              (L) =>
                xe(
                  Object.fromEntries(
                    Object.entries(z).filter(([C]) => Je(C) === L),
                  ),
                ) > 1e5,
            )
          )
            throw Error();
          (l.staging !== void 0 && p(l.staging),
            l.userWords !== void 0 && (_o(l.userWords), i(l.userWords)));
          let S = [{}, {}, {}, {}];
          (Object.entries(z)
            .filter(([L]) => V.some((C) => C.id === L))
            .forEach(([L, C]) => (S[Je(L)][L] = C)),
            [k, h, E, F].forEach((L, C) => L(S[C])),
            l.catalog !== void 0 && o(l.catalog),
            l.extras !== void 0 && ze(l.extras),
            l.daily !== void 0 && f(l.daily),
            Ce(
              "Restored. This replaces progress on this device. / \u5DF2\u9084\u539F\uFF0C\u5DF2\u53D6\u4EE3\u6B64\u88DD\u7F6E\u7684\u9032\u5EA6\u3002",
            ),
            nr([]));
        } catch {
          Ce(
            "Invalid or oversized backup. Nothing changed. / \u5099\u4EFD\u7121\u6548\u6216\u904E\u5927\uFF0C\u9032\u5EA6\u672A\u8B8A\u66F4\u3002",
          );
        }
      },
      tg = (l, z, v) => {
        if (!c.ready || !n.ready) return "\u8CC7\u6599\u5C1A\u672A\u8F09\u5165";
        let sid = "s-" + Date.now();
        l = { ...l, user: { ...l.user, ref: sid } };
        let S = Am(r, a, l, z, v);
        return S
          ? (_o(S.userWords),
            i(S.userWords),
            o(S.catalog),
            x.ready &&
              !d.some((q) => q.lang === l.lang && q.word === l.word) &&
              ei([
                ...d,
                {
                  id: sid,
                  lang: l.lang,
                  word: l.word,
                  note: "\u5DF2\u65B0\u589E\uFF0C\u5F85\u88DC\u5168\u8CC7\u8A0A\uFF08" + S.id + "\uFF09",
                  added: new Date().toISOString().slice(0, 10),
                  uid: S.id,
                },
              ]),
            S.id)
          : "\u8CC7\u6599\u683C\u5F0F\u4E0D\u6B63\u78BA\uFF0C\u672A\u5132\u5B58";
      },
      [rg, aa] = (0, s.useState)(""),
      rd = (l) => {
        let z = "";
        try {
          z = localStorage.getItem(Rs) ?? "";
        } catch {}
        if (!z) {
          aa(
            "\u5C1A\u672A\u8A2D\u5B9A\u540C\u6B65\u91D1\u9470\uFF0C\u53EA\u5B58\u5728\u9019\u652F\u624B\u6A5F",
          );
          return;
        }
        (aa("\u540C\u6B65\u4E2D\u2026"),
          nf(l, z)
            .then((v) =>
              aa(
                v === "ok"
                  ? "\u5DF2\u540C\u6B65\u5230\u52A9\u7406\uFF08" +
                      new Date().toLocaleTimeString("zh-TW", {
                        hour: "2-digit",
                        minute: "2-digit",
                      }) +
                      "\uFF09"
                  : "\u540C\u6B65\u5931\u6557\uFF1A" + v,
              ),
            )
            .catch(() =>
              aa(
                "\u540C\u6B65\u5931\u6557\uFF1A\u7DB2\u8DEF\u7121\u6CD5\u9023\u7DDA\uFF0C\u7A0D\u5F8C\u518D\u8A66",
              ),
            ));
      },
      ei = (l) => {
        (p(l), rd(l));
      },
      og = (l) => {
        x.ready && ei([...d, l]);
      },
      ng = (l) => {
        let z = r,
          v = a,
          S = d,
          L = !1;
        for (let C of l) {
          if (
            !C ||
            typeof C.ref != "string" ||
            !C.word ||
            !(C.lang === "jp" || C.lang === "de")
          )
            continue;
          if (C.skip) {
            S.some((ce) => ce.id === C.ref) &&
              ((S = S.filter((ce) => ce.id !== C.ref)), (L = !0));
            continue;
          }
          if (!String(C.zh ?? "").trim() && !String(C.en ?? "").trim())
            continue;
          let ae = (ce) => ce.replace(/^(der|die|das) /, ""),
            ee =
              v.find((ce) => ce.user?.ref === C.ref) ??
              v.find(
                (ce) =>
                  ce.lang === C.lang && ae(ce.word) === ae(String(C.word)),
              );
          if (ee && ee.user.filledAt === C.filledAt) {
            S.some((ce) => ce.id === C.ref) &&
              ((S = S.filter((ce) => ce.id !== C.ref)), (L = !0));
            continue;
          }
          let Ar = {
            id: ee?.id ?? "",
            lang: C.lang,
            word: String(C.word),
            reading: String(C.reading ?? ""),
            en: String(C.en ?? ""),
            zh: String(C.zh ?? C.en ?? ""),
            pos: C.pos,
            grammar: C.grammar,
            contentType: C.contentType ?? "word",
            examples: Array.isArray(C.examples) ? C.examples.slice(0, 4) : [],
            collocations: Array.isArray(C.collocations)
              ? C.collocations.slice(0, 8)
              : void 0,
            similar: Array.isArray(C.similar) ? C.similar.slice(0, 6) : void 0,
            masu: C.masu,
            masuReading: C.masuReading,
            vclass: C.vclass,
            vkind: C.vkind,
            vsrc: C.vsrc,
            sourceUrl:
              typeof C.sourceUrl == "string" && /^https:\/\//.test(C.sourceUrl)
                ? C.sourceUrl
                : void 0,
            user: {
              added: ee?.user?.added || String(C.added ?? ""),
              src: "assistant",
              auto: !0,
              notes: Array.isArray(C.notes)
                ? C.notes.map(String).slice(0, 8)
                : [],
              ref: C.ref,
              filledAt: String(C.filledAt ?? ""),
            },
          };
          if (ee) ((v = v.map((ce) => (ce.id === ee.id ? Ar : ce))), (L = !0));
          else {
            let ce = Am(z, v, Ar, [], String(C.book ?? ""));
            if (!ce) continue;
            ((z = ce.catalog), (v = ce.userWords), (L = !0));
          }
          S = S.filter((ce) => ce.id !== C.ref);
        }
        L && $n(v) && (_o(v), i(v), o(z), S !== d && ei(S));
      },
      od = (0, s.useRef)(!1);
    (0, s.useEffect)(() => {
      od.current ||
        !c.ready ||
        !n.ready ||
        !x.ready ||
        ((od.current = !0),
        fetch("words-inbox.json?t=" + Date.now(), { cache: "no-store" })
          .then((l) => (l.ok ? l.json() : null))
          .then((l) => {
            l && Array.isArray(l.entries) && ng(l.entries);
          })
          .catch(() => {}));
    }, [c.ready, n.ready, x.ready]);
    let ag = (l) => {
        let z = a.filter((L) => L.id !== l),
          { [l]: v, ...S } = r.entries;
        (_o(z),
          i(z),
          o({ ...r, entries: S }),
          nr([]),
          Ce(""));
      },
      sa = (l) => {
        if (n.ready) {
          if (!_s(l) || xe(l) + xe(X) + xe(G) + xe(m) > 5e5) {
            Qn(
              "\u5206\u985E\u8CC7\u6599\u592A\u591A\uFF0C\u8ACB\u5148\u5099\u4EFD\u4E26\u6E1B\u5C11\u55AE\u5B57\u7C3F\u3002",
            );
            return;
          }
          (o(l), Qn(""));
        }
      },
      nd = (l, z) =>
        sa({
          ...r,
          entries: {
            ...r.entries,
            [l]: { books: r.entries[l]?.books ?? [], familiarity: z },
          },
        }),
      sg = (l, z) => {
        let v = r.entries[l] ?? { books: [] };
        sa({
          ...r,
          entries: {
            ...r.entries,
            [l]: {
              ...v,
              books: v.books.includes(z)
                ? v.books.filter((S) => S !== z)
                : [...v.books, z],
            },
          },
        });
      },
      ad = (l, z) => {
        if (!oe.ready) return;
        let v = { ...G, [l]: { ...G[l], ...z } };
        if (!ym(v) || xe(v) + xe(r) + xe(X) + xe(m) > 5e5) {
          Ce(
            "\u7B46\u8A18\u7A7A\u9593\u4E0D\u8DB3\uFF0C\u8ACB\u5148\u5099\u4EFD\u6216\u7E2E\u77ED\u7B46\u8A18\u3002",
          );
          return;
        }
        ze(v);
      },
      ig = (l) => {
        (ea((z) => Math.min(Vo.length - 1, Math.max(0, z + l))), Qn(""));
      },
      cg = () => {
        (nr([]), Qn(""));
      },
      lg = (l) => {
        (W.ready && _(l),
          Se("courses"),
          rr("main"),
          be("courses"),
          A(null),
          ne("grid"),
          Ro("all"),
          Rp("all"),
          Ho(!1),
          or(""),
          nr([]));
      },
      dg = (l) => {
        (Se(l),
          or(""),
          Ce(""),
          A(null),
          l === "courses" && be("courses"),
          l === "library" && (Ro("all"), Rp("all"), Ho(!1)),
          l === "more" && ne("grid"));
      },
      ia = [T, g, N, K, n, oe, P, W],
      pg =
        ia.find(
          (l) =>
            !["Saved", "Not saved", "Loading", "Saving"].some((z) =>
              l.message.startsWith(z),
            ),
        )?.message ??
        (ia.some((l) => l.message.includes("Not saved"))
          ? "\u9810\u89BD\u6A21\u5F0F\uFF1A\u8B8A\u66F4\u4E0D\u6703\u6C38\u4E45\u5132\u5B58\u3002"
          : ia.some((l) => l.message.includes("Loading"))
            ? "\u6B63\u5728\u8B80\u53D6\u88DD\u7F6E\u8CC7\u6599\u2026"
            : ia.some((l) => l.message.includes("Saving"))
              ? "\u6B63\u5728\u5132\u5B58\u2026"
              : "\u5DF2\u5132\u5B58\u5728\u6B64\u88DD\u7F6E\u3002"),
      sd = V.filter((l) => l.lang === J && G[l.id]?.star),
      id = (l) =>
        (l.id === "numbers" || l.id === "shopping" ? Ne.concat(V.filter((z) => Nm[z.id])) : Ne).filter(
          (z) =>
            r.entries[z.id]?.books.includes(l.id) &&
            (!z.foundations || !Fs.books.some((S) => S.id === l.id)),
        ),
      to = (l) =>
        l.length
          ? Math.round(
              (l.filter((z) => (r.entries[z.id]?.familiarity ?? 0) >= 3)
                .length /
                l.length) *
                100,
            )
          : 0;
    return s.default.createElement(
      um,
      null,
      s.default.createElement(
        "div",
        {
          className: "reaper-app" + (window.parent !== window ? " framed" : ""),
        },
        e === "grammar"
          ? s.default.createElement(Q1, null)
          : Vs.length > 0
            ? s.default.createElement(uf, {
                ids: Vs,
                words: V,
                meaning: sr,
                prefs: R,
                setPrefs: (l) => {
                  P.ready && U(l);
                },
                onExit: () => Jo([]),
              })
            : Xn
              ? s.default.createElement(hf, {
                  mode: Xn,
                  ids: Gm,
                  words: V,
                  meaning: sr,
                  ready: ve.ready && n.ready,
                  onGrade: Xm,
                  onFamiliar: nd,
                  extras: G,
                  catalog: r,
                  onStar: (l, z) => ad(l, { star: z }),
                  onRetryWrong: (l) => Rt(Xn, l),
                  onExit: () => Zl(""),
                  speak: td,
                  quizFam: R.quizFamiliar !== !1,
                  spellExp: R.spellExplain === !0,
                })
              : ed && nt
                ? s.default.createElement(pf, {
                    word: nt,
                    index: Yl,
                    count: Vo.length,
                    bookName: (() => {
                      let l = (r.entries[nt.id]?.books ?? [])
                        .map((z) => r.books.find((v) => v.id === z)?.name)
                        .filter(Boolean)
                        .join(" · ");
                      if (!l && nt.foundations) {
                        let z = FD.find((v) => v.id === nt.foundations);
                        l = (J === "jp" ? z?.jp : z?.de) || "";
                      }
                      return l + (nt.topic ? " · " + nt.topic : "");
                    })(),
                    meaning: sr(nt),
                    extra: G[nt.id] ?? {},
                    saveExtra: (l) => ad(nt.id, l),
                    level: r.entries[nt.id]?.familiarity ?? 0,
                    setLevel: (l) => nd(nt.id, l),
                    move: ig,
                    close: cg,
                    tab: R.detailTab,
                    setTab: (l) => {
                      P.ready && U({ ...R, detailTab: l });
                    },
                    prefs: R,
                    setPrefs: (l) => {
                      P.ready && U(l);
                    },
                    ready: n.ready && oe.ready && P.ready,
                    deleteUser: ag,
                    speak: td,
                    books: qr,
                    checked: r.entries[nt.id]?.books ?? [],
                    toggleBook: (l) => sg(nt.id, l),
                    shuffle: () => {
                      let l = nt.id,
                        z = Dt(Vo);
                      (nr(z), ea(z.indexOf(l)));
                    },
                  })
                : s.default.createElement(
                    s.default.Fragment,
                    null,
                    Q === "courses" &&
                      Et === "courses" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(
                          We,
                          {
                            title:
                              J === "jp"
                                ? "\u8AB2\u7A0B\u9078\u64C7"
                                : "Kurse \xB7 \u8AB2\u7A0B\u9078\u64C7",
                          },
                          s.default.createElement(
                            "button",
                            {
                              className: "lang-switch",
                              disabled: !W.ready,
                              onClick: () => lg(J === "jp" ? "de" : "jp"),
                            },
                            J === "jp"
                              ? "\u65E5\u6587 \u21C4 \u5FB7\u6587"
                              : "\u5FB7\u6587 \u21C4 \u65E5\u6587",
                          ),
                        ),
                        s.default.createElement(
                          "div",
                          { className: "course-grid" },
                          s.default.createElement(
                            "button",
                            {
                              className: "course-card",
                              onClick: () => {
                                (rr("main"), be("units"));
                              },
                            },
                            s.default.createElement(
                              "strong",
                              null,
                              J === "jp"
                                ? "\u521D\u7D1A\u65E5\u6587"
                                : "German A1",
                            ),
                            s.default.createElement(
                              "span",
                              { className: "course-sub" },
                              J === "jp"
                                ? "\u4E3B\u984C\u55AE\u5B57\u8207\u7247\u8A9E"
                                : "Textbook \xB7 \u4E3B\u984C\u6559\u6750",
                            ),
                            s.default.createElement(
                              "small",
                              null,
                              Nl.filter((l) => l.contentType === "word").length,
                              " \u55AE\u5B57 \xB7 ",
                              Nl.filter((l) => l.contentType === "phrase")
                                .length,
                              " ",
                              "\u7247\u8A9E",
                            ),
                            s.default.createElement(
                              "span",
                              { className: "course-fam" },
                              "\u719F\u6089\u5EA6 ",
                              to(Nl),
                              "%",
                            ),
                            s.default.createElement(
                              "div",
                              { className: "thin-bar" },
                              s.default.createElement("i", {
                                style: { width: to(Nl) + "%" },
                              }),
                            ),
                          ),
                          s.default.createElement(
                            "button",
                            {
                              className: "course-card",
                              onClick: () => {
                                (rr("foundations"), be("units"));
                              },
                            },
                            s.default.createElement(
                              "strong",
                              null,
                              J === "jp"
                                ? "\u8A9E\u8A00\u57FA\u790E"
                                : "Grundlagen \u00B7 \u8A9E\u8A00\u57FA\u790E",
                            ),
                            s.default.createElement(
                              "span",
                              { className: "course-sub" },
                              J === "jp"
                                ? "\u6578\u8A5E\u30FB\u6307\u793A\u8A5E\u30FB\u7591\u554F\u8A5E\u30FB\u4EE3\u540D\u8A5E\u7B49"
                                : "Zahlen, Artikel, Pr\u00E4positionen usw.",
                            ),
                            s.default.createElement(
                              "small",
                              null,
                              FDl.length,
                              " \u689D\u76EE",
                            ),
                            s.default.createElement(
                              "span",
                              { className: "course-fam" },
                              "\u719F\u6089\u5EA6 ",
                              to(FDl),
                              "%",
                            ),
                            s.default.createElement(
                              "div",
                              { className: "thin-bar" },
                              s.default.createElement("i", {
                                style: { width: to(FDl) + "%" },
                              }),
                            ),
                          ),
                          J === "jp" &&
                            s.default.createElement(
                              s.default.Fragment,
                              null,
                              s.default.createElement(
                                "button",
                                {
                                  className: "course-card",
                                  onClick: () => {
                                    (rr("n5"), be("units"));
                                  },
                                },
                                s.default.createElement(
                                  "strong",
                                  null,
                                  "JLPT \u5B57\u5EAB N5",
                                ),
                                s.default.createElement(
                                  "span",
                                  { className: "course-sub" },
                                  "\u53C3\u8003\u8A5E\u5EAB",
                                ),
                                s.default.createElement(
                                  "small",
                                  null,
                                  Ko.length,
                                  " \u689D\u76EE",
                                ),
                                s.default.createElement(
                                  "span",
                                  { className: "course-fam" },
                                  "\u719F\u6089\u5EA6 ",
                                  to(Ko),
                                  "%",
                                ),
                                s.default.createElement(
                                  "div",
                                  { className: "thin-bar" },
                                  s.default.createElement("i", {
                                    style: { width: to(Ko) + "%" },
                                  }),
                                ),
                              ),
                              s.default.createElement(
                                "button",
                                {
                                  className: "course-card",
                                  onClick: () => {
                                    (rr("n4"), be("units"));
                                  },
                                },
                                s.default.createElement(
                                  "strong",
                                  null,
                                  "JLPT \u5B57\u5EAB N4",
                                ),
                                s.default.createElement(
                                  "span",
                                  { className: "course-sub" },
                                  "\u53C3\u8003\u8A5E\u5EAB",
                                ),
                                s.default.createElement(
                                  "small",
                                  null,
                                  $o.length,
                                  " \u689D\u76EE",
                                ),
                                s.default.createElement(
                                  "span",
                                  { className: "course-fam" },
                                  "\u719F\u6089\u5EA6 ",
                                  to($o),
                                  "%",
                                ),
                                s.default.createElement(
                                  "div",
                                  { className: "thin-bar" },
                                  s.default.createElement("i", {
                                    style: { width: to($o) + "%" },
                                  }),
                                ),
                              ),
                            ),
                          s.default.createElement(
                            er,
                            { className: "course-card", to: "/grammar" },
                            s.default.createElement(
                              "strong",
                              null,
                              "\u6587\u6CD5\u8AB2\u7A0B",
                            ),
                            s.default.createElement(
                              "span",
                              { className: "course-sub" },
                              "\u7368\u7ACB\u65BC\u55AE\u5B57\u8207\u7247\u8A9E",
                            ),
                            s.default.createElement(
                              "small",
                              null,
                              Il.filter((l) => l.lang === J).length,
                              " ",
                              "\u8AB2",
                            ),
                          ),
                        ),
                        J === "jp" &&
                          s.default.createElement(
                            "p",
                            { className: "muted" },
                            "\u5B57\u5EAB\u7DF4\u7FD2\u4E0D\u5360\u6BCF\u65E5\u65B0\u5B57\u984D\u5EA6\uFF1B\u5B57\u5EAB\u4F86\u6E90 Jisho / JMdict\uFF08CC BY-SA\uFF09\uFF0C\u4E2D\u6587\u91CB\u7FA9\u70BA AI \u7FFB\u8B6F\u3002",
                          ),
                        J === "de" &&
                          s.default.createElement(
                            "p",
                            { className: "muted" },
                            "\u5FB7\u6587\u6BCF\u65E5\u65B0\u5B57\u65B0\u589E\u7DAD\u6301\u66AB\u505C\uFF1B\u65E2\u6709\u6559\u6750\u53EF\u81EA\u7531\u7DF4\u7FD2\u3002",
                          ),
                      ),
                    Q === "courses" &&
                      Et === "units" &&
                      ut === "main" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(
                          We,
                          {
                            title:
                              J === "jp"
                                ? "\u521D\u7D1A\u65E5\u6587"
                                : "German A1",
                            sub: "\u9078\u64C7\u55AE\u5143",
                            onBack: () => be("courses"),
                          },
                          s.default.createElement(
                            "button",
                            {
                              className: "hdr-text",
                              onClick: () => {
                                (Se("more"), ne("custom"));
                              },
                            },
                            "\u81EA\u8A02\u55AE\u5143",
                          ),
                        ),
                        s.default.createElement(
                          "div",
                          { className: "unit-list" },
                          qr
                            .filter(
                              (l) =>
                                id(l).length > 0 ||
                                !Fs.books.some((z) => z.id === l.id),
                            )
                            .map((l, z) => {
                            let v = id(l),
                              S = v.filter((L) => G[L.id]?.star).length;
                            return s.default.createElement(
                              "button",
                              {
                                className: "unit-row",
                                key: l.id,
                                onClick: () =>
                                  Xs(
                                    l.name,
                                    `${v.length} \u500B\u689D\u76EE`,
                                    v.map((L) => L.id),
                                    "courses",
                                  ),
                              },
                              s.default.createElement(
                                "span",
                                { className: "unit-top" },
                                s.default.createElement(
                                  "strong",
                                  null,
                                  "Unit ",
                                  z + 1,
                                ),
                                s.default.createElement(
                                  "span",
                                  { className: "unit-name" },
                                  l.name,
                                ),
                                S > 0 &&
                                  s.default.createElement(
                                    "b",
                                    { className: "row-star" },
                                    "\u2605",
                                    S,
                                  ),
                                s.default.createElement(
                                  "span",
                                  { className: "range-badge" },
                                  v.length,
                                  " \u5B57",
                                ),
                              ),
                              s.default.createElement(vm, {
                                counts: km(v, r),
                                total: v.length,
                              }),
                            );
                          }),
                        ),
                      ),
                    Q === "courses" &&
                      Et === "units" &&
                      ut === "foundations" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(We, {
                          title:
                            J === "jp" ? "\u8A9E\u8A00\u57FA\u790E" : "Grundlagen \u00B7 \u8A9E\u8A00\u57FA\u790E",
                          sub: "\u9078\u64C7\u5206\u985E",
                          onBack: () => be("courses"),
                        }),
                        s.default.createElement(
                          "div",
                          { className: "unit-list" },
                          FD.map((l) => {
                            let v = FDl.filter((z) => z.foundations === l.id),
                              S = v.filter((L) => G[L.id]?.star).length;
                            if (!v.length || !l[J]) return null;
                            return s.default.createElement(
                              "button",
                              {
                                className: "unit-row",
                                key: l.id,
                                onClick: () =>
                                  Xs(
                                    l[J],
                                    `${v.length} \u500B\u689D\u76EE`,
                                    v.map((L) => L.id),
                                    "courses",
                                  ),
                              },
                              s.default.createElement(
                                "span",
                                { className: "unit-top" },
                                s.default.createElement(
                                  "span",
                                  { className: "unit-name" },
                                  l[J],
                                ),
                                S > 0 &&
                                  s.default.createElement(
                                    "b",
                                    { className: "row-star" },
                                    "\u2605",
                                    S,
                                  ),
                                s.default.createElement(
                                  "span",
                                  { className: "range-badge" },
                                  v.length,
                                  " \u5B57",
                                ),
                              ),
                              s.default.createElement(vm, {
                                counts: km(v, r),
                                total: v.length,
                              }),
                            );
                          }),
                        ),
                        s.default.createElement(
                          "h3",
                          { className: "section-head" },
                          "\u5FEB\u901F\u8907\u7FD2",
                        ),
                        s.default.createElement(
                          "div",
                          { className: "menu-list" },
                          s.default.createElement(
                            "button",
                            {
                              disabled: !Far.length,
                              onClick: () => Rt("familiar", qmF()),
                            },
                            "\u6DF7\u5408\u8907\u7FD2 \u00B7 \u5230\u671F\u512A\u5148 ",
                            s.default.createElement(
                              "span",
                              null,
                              FGs.length,
                              " \u203A",
                            ),
                          ),
                          s.default.createElement(
                            "button",
                            {
                              disabled: !FZs.length,
                              onClick: () =>
                                Rt(
                                  "forward",
                                  Dt(FZs)
                                    .slice(0, 20)
                                    .map((l) => l.id),
                                ),
                            },
                            "\u5F31\u9805\u7DF4\u7FD2 \u00B7 \u4F4E\u65BC\u719F\u6089 ",
                            s.default.createElement(
                              "span",
                              null,
                              FZs.length,
                              " \u203A",
                            ),
                          ),
                          s.default.createElement(
                            "button",
                            {
                              disabled: !FQs.length,
                              onClick: () =>
                                Rt(
                                  "familiar",
                                  FQs.slice(0, 20).map((l) => l.id),
                                ),
                            },
                            "\u672A\u5B78\u689D\u76EE ",
                            s.default.createElement(
                              "span",
                              null,
                              FQs.length,
                              " \u203A",
                            ),
                          ),
                        ),
                      ),
                    Q === "courses" &&
                      Et === "units" &&
                      ut !== "main" &&
                      ut !== "foundations" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(We, {
                          title: "JLPT \u5B57\u5EAB " + ut.toUpperCase(),
                          sub: "\u9078\u64C7\u55AE\u5143",
                          onBack: () => be("courses"),
                        }),
                        s.default.createElement(
                          "div",
                          { className: "unit-list" },
                          Zm.map((l, z) => {
                            let v = l.filter((S) => G[S.id]?.star).length;
                            return s.default.createElement(
                              "button",
                              {
                                className: "unit-row",
                                key: z,
                                onClick: () =>
                                  Xs(
                                    "\u55AE\u5143 " + (z + 1),
                                    "JLPT " + ut.toUpperCase(),
                                    l.map((S) => S.id),
                                    "courses",
                                  ),
                              },
                              s.default.createElement(
                                "span",
                                { className: "unit-top" },
                                s.default.createElement(
                                  "strong",
                                  null,
                                  "\u55AE\u5143 ",
                                  z + 1,
                                ),
                                v > 0 &&
                                  s.default.createElement(
                                    "b",
                                    { className: "row-star" },
                                    "\u2605",
                                    v,
                                  ),
                                s.default.createElement(
                                  "span",
                                  { className: "range-badge" },
                                  l[0].word,
                                  " \u2013 ",
                                  l[l.length - 1].word,
                                ),
                              ),
                              s.default.createElement(vm, {
                                counts: km(l, r),
                                total: l.length,
                              }),
                            );
                          }),
                        ),
                        s.default.createElement(
                          "p",
                          { className: "muted" },
                          "\u5B57\u5EAB\u4F86\u6E90\uFF1AJisho / JMdict\uFF08CC BY-SA\uFF09\uFF1B\u4E2D\u6587\u91CB\u7FA9\u70BA AI \u7FFB\u8B6F\uFF0C\u5C1A\u672A\u9644\u4F8B\u53E5\u3002",
                        ),
                      ),
                    Q === "courses" &&
                      Et === "words" &&
                      he &&
                      s.default.createElement(Ml, {
                        title: he.title,
                        sub: he.sub,
                        ws: he.ids
                          .map((l) => V.find((z) => z.id === l))
                          .filter(Boolean),
                        words: V,
                        meaning: sr,
                        extras: G,
                        catalog: r,
                        lang: J,
                        sortBy: Ot,
                        setSortBy: Zn,
                        applySort: oa,
                        listMeaning: Yn,
                        setListMeaning: $s,
                        onBack: () => {
                          (be("units"), A(null));
                        },
                        onOpen: (l, z) => eo(l, z),
                        onListen: (l) => Jo(l),
                        onQuiz: (l, z) => {
                          (Hl("all"), Rt(z || "forward", l.slice(0, 30)));
                        },
                      }),
                    Q === "quiz" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(We, {
                          title: "\u6E2C\u9A57",
                          sub: "\u9078\u64C7\u7BC4\u570D\u8207\u984C\u578B",
                        }),
                        s.default.createElement(
                          "div",
                          { className: "card" },
                          s.default.createElement(
                            "label",
                            { className: "check-row" },
                            s.default.createElement("input", {
                              type: "checkbox",
                              checked: Kl,
                              onChange: (l) => Om(l.target.checked),
                            }),
                            "\u53EA\u9078\u52A0\u5165\u66F8\u7C64\u7684\u55AE\u5B57",
                          ),
                          s.default.createElement(
                            "label",
                            { className: "check-row" },
                            s.default.createElement("input", {
                              type: "checkbox",
                              checked: $l,
                              onChange: (l) => Rm(l.target.checked),
                            }),
                            "\u53EA\u9078\u5F31\u9805\uFF08\u4F4E\u65BC\u719F\u6089\uFF09",
                          ),
                          s.default.createElement(
                            "label",
                            { className: "field" },
                            "\u7BC4\u570D",
                            s.default.createElement(
                              "div",
                              { className: "scope-list" },
                              s.default.createElement(
                                "label",
                                { className: "check-row" },
                                s.default.createElement("input", {
                                  type: "checkbox",
                                  checked: Wo.includes("all"),
                                  onChange: () => Hl("all"),
                                }),
                                "\u5168\u90E8\u689D\u76EE\uFF08\u4E0D\u542B\u8A9E\u8A00\u57FA\u790E\uFF09",
                              ),
                              s.default.createElement(
                                "label",
                                { className: "check-row" },
                                s.default.createElement("input", {
                                  type: "checkbox",
                                  checked: Wo.includes("foundations"),
                                  onChange: () => Hl("foundations"),
                                }),
                                J === "jp"
                                  ? "\u8A9E\u8A00\u57FA\u790E"
                                  : "Grundlagen \u00B7 \u8A9E\u8A00\u57FA\u790E",
                              ),
                              J === "jp" &&
                                s.default.createElement(
                                  s.default.Fragment,
                                  null,
                                  s.default.createElement(
                                    "label",
                                    { className: "check-row" },
                                    s.default.createElement("input", {
                                      type: "checkbox",
                                      checked: Wo.includes("n5"),
                                      onChange: () => Hl("n5"),
                                    }),
                                    "JLPT \u5B57\u5EAB N5",
                                  ),
                                  s.default.createElement(
                                    "label",
                                    { className: "check-row" },
                                    s.default.createElement("input", {
                                      type: "checkbox",
                                      checked: Wo.includes("n4"),
                                      onChange: () => Hl("n4"),
                                    }),
                                    "JLPT \u5B57\u5EAB N4",
                                  ),
                                ),
                              qr
                                .filter((l) =>
                                  Ne.some((z) =>
                                    (r.entries[z.id]?.books ?? []).includes(
                                      l.id,
                                    ),
                                  ),
                                )
                                .map((l) =>
                                  s.default.createElement(
                                    "label",
                                    { className: "check-row", key: l.id },
                                    s.default.createElement("input", {
                                      type: "checkbox",
                                      checked: Wo.includes(l.id),
                                      onChange: () => Hl(l.id),
                                    }),
                                    l.name,
                                  ),
                                ),
                            ),
                          ),
                          s.default.createElement(
                            "label",
                            { className: "field" },
                            "\u984C\u6578",
                            s.default.createElement(
                              "select",
                              {
                                value: Vl,
                                onChange: (l) => Lm(Number(l.target.value)),
                              },
                              [10, 20, 30].map((l) =>
                                s.default.createElement(
                                  "option",
                                  { key: l, value: l },
                                  l,
                                ),
                              ),
                            ),
                          ),
                          s.default.createElement(
                            "p",
                            { className: "muted" },
                            "\u7BC4\u570D\u5167\u7684\u55AE\u5B57\uFF1A",
                            qs.length,
                          ),
                          s.default.createElement(
                            "div",
                            { className: "mode-tiles" },
                            [
                              [
                                "forward",
                                J === "jp"
                                  ? "\u65E5 \u2192 \u4E2D"
                                  : "DE \u2192 EN",
                              ],
                              [
                                "reverse",
                                J === "jp"
                                  ? "\u4E2D \u2192 \u65E5"
                                  : "EN \u2192 DE",
                              ],
                              ...(J === "jp"
                                ? [["kana", "\u6F22\u5B57 \u21C4 \u5047\u540D"]]
                                : []),
                              [
                                "tiles",
                                "\u5B57\u584A\u62FC\u5B57",
                              ],
                              [
                                "spell",
                                "\u6253\u5B57\u62FC\u5B57",
                              ],
                              ["cards", "\u5B57\u5361"],
                              ["familiar", "\u719F\u6089\u5EA6"],
                            ].map(([l, z]) =>
                              s.default.createElement(
                                "button",
                                {
                                  key: l,
                                  className: Hs === l ? "tile-on" : "",
                                  onClick: () => Wm(l),
                                },
                                z,
                              ),
                            ),
                          ),
                          s.default.createElement(
                            "button",
                            {
                              className: "primary-action",
                              disabled: !qs.length || !Hs,
                              onClick: () =>
                                Rt(
                                  Hs,
                                  Dt(qs)
                                    .slice(0, Vl)
                                    .map((l) => l.id),
                                ),
                            },
                            "\u958B\u59CB",
                          ),
                        ),
                        s.default.createElement(
                          "h3",
                          { className: "section-head" },
                          "\u5FEB\u901F\u8907\u7FD2",
                        ),
                        s.default.createElement(
                          "div",
                          { className: "menu-list" },
                          s.default.createElement(
                            "button",
                            {
                              disabled: !arG.length,
                              onClick: () => Rt("familiar", qm()),
                            },
                            "\u6DF7\u5408\u8907\u7FD2 \xB7 \u5230\u671F\u512A\u5148 ",
                            s.default.createElement(
                              "span",
                              null,
                              Gs.length,
                              " \u203A",
                            ),
                          ),
                          s.default.createElement(
                            "button",
                            {
                              disabled: !Zs.length,
                              onClick: () =>
                                Rt(
                                  "forward",
                                  Dt(Zs)
                                    .slice(0, 20)
                                    .map((l) => l.id),
                                ),
                            },
                            "\u5F31\u9805\u7DF4\u7FD2 \xB7 \u4F4E\u65BC\u719F\u6089 ",
                            s.default.createElement(
                              "span",
                              null,
                              Zs.length,
                              " \u203A",
                            ),
                          ),
                          s.default.createElement(
                            "button",
                            {
                              disabled: !Qs.length || (J === "jp" && ta >= 30),
                              onClick: () =>
                                Rt(
                                  "familiar",
                                  Qs.slice(
                                    0,
                                    J === "jp" ? Math.max(0, 30 - ta) : 20,
                                  ).map((l) => l.id),
                                ),
                            },
                            J === "jp"
                              ? "\u4ECA\u65E5\u65B0\u5B57"
                              : "\u672A\u5B78\u6559\u6750\u7DF4\u7FD2",
                            " ",
                            s.default.createElement(
                              "span",
                              null,
                              J === "jp" ? ta + "/30" : Qs.length,
                              " \u203A",
                            ),
                          ),
                        ),
                      ),
                    Q === "search" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(We, {
                          title: "\u55AE\u5B57\u67E5\u8A62",
                        }),
                        s.default.createElement(
                          "div",
                          { className: "search-bar" },
                          s.default.createElement("input", {
                            placeholder:
                              "\u641C\u5C0B\u55AE\u5B57\u3001\u8B80\u97F3\u6216\u610F\u601D",
                            value: Lt,
                            onChange: (l) => or(l.target.value),
                            "aria-label": "\u641C\u5C0B\u55AE\u5B57",
                          }),
                          Lt &&
                            s.default.createElement(
                              "button",
                              {
                                "aria-label": "\u6E05\u9664\u641C\u5C0B",
                                onClick: () => or(""),
                              },
                              "\u2715",
                            ),
                        ),
                        Lt.trim()
                          ? s.default.createElement(
                              s.default.Fragment,
                              null,
                              s.default.createElement(
                                "p",
                                { className: "list-count" },
                                na.length,
                                " \u500B\u7D50\u679C",
                              ),
                              s.default.createElement(_l, {
                                ws: na,
                                meaning: sr,
                                extras: G,
                                catalog: r,
                                listMeaning: !1,
                                onOpen: (l) => {
                                  (Ze(Lt), eo(l, na));
                                },
                              }),
                              !na.length &&
                                s.default.createElement(
                                  "p",
                                  { className: "empty" },
                                  "\u627E\u4E0D\u5230\u7B26\u5408\u7684\u689D\u76EE\u3002",
                                ),
                            )
                          : s.default.createElement(
                              s.default.Fragment,
                              null,
                              Ft.length > 0 &&
                                s.default.createElement(
                                  s.default.Fragment,
                                  null,
                                  s.default.createElement(
                                    "div",
                                    { className: "row-between" },
                                    s.default.createElement(
                                      "h3",
                                      { className: "section-head" },
                                      "\u641C\u5C0B\u7D00\u9304",
                                    ),
                                    s.default.createElement(
                                      "button",
                                      {
                                        className: "text-control",
                                        onClick: () => Pt([]),
                                      },
                                      "\u6E05\u9664",
                                    ),
                                  ),
                                  s.default.createElement(
                                    "div",
                                    { className: "chip-row" },
                                    Ft.map((l) =>
                                      s.default.createElement(
                                        "button",
                                        {
                                          className: "chip",
                                          key: l,
                                          onClick: () => or(l),
                                        },
                                        l,
                                      ),
                                    ),
                                  ),
                                ),
                              s.default.createElement(
                                "p",
                                { className: "muted" },
                                "\u8F38\u5165\u55AE\u5B57\u3001\u8B80\u97F3\u6216\u610F\u601D\uFF0C\u9EDE\u7D50\u679C\u6253\u958B\u55AE\u5B57\u9801\u3002",
                              ),
                            ),
                      ),
                    Q === "library" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(
                          We,
                          {
                            title:
                              kt === "all"
                                ? "\u55AE\u5B57\u5EAB"
                                : (r.books.find((l) => l.id === kt)?.name ??
                                  "\u55AE\u5B57\u5EAB"),
                            sub: Xr.length + " \u500B\u689D\u76EE",
                          },
                          s.default.createElement(
                            "button",
                            {
                              "aria-label": "\u807D\u529B\u64AD\u653E",
                              disabled: !Xr.length,
                              onClick: () => Jo(Xr.map((l) => l.id)),
                            },
                            "\u266A",
                          ),
                        ),
                        s.default.createElement(
                          "div",
                          { className: "search-bar" },
                          s.default.createElement("input", {
                            placeholder: "\u641C\u5C0B",
                            value: Lt,
                            onChange: (l) => or(l.target.value),
                            "aria-label": "\u641C\u5C0B\u55AE\u5B57\u5EAB",
                          }),
                          Lt &&
                            s.default.createElement(
                              "button",
                              {
                                "aria-label": "\u6E05\u9664\u641C\u5C0B",
                                onClick: () => or(""),
                              },
                              "\u2715",
                            ),
                        ),
                        s.default.createElement(
                          "details",
                          { className: "filters" },
                          s.default.createElement(
                            "summary",
                            null,
                            "\u7BE9\u9078\u8207\u6392\u5E8F",
                          ),
                          s.default.createElement(Dl, {
                            label: "\u5167\u5BB9\u985E\u578B",
                            value: He,
                            onChange: Oo,
                            options: [
                              { value: "all", label: "\u5168\u90E8" },
                              { value: "word", label: "\u55AE\u5B57" },
                              { value: "phrase", label: "\u7247\u8A9E" },
                            ],
                          }),
                          s.default.createElement(Dl, {
                            label: "\u719F\u6089\u5EA6",
                            value: Qr,
                            onChange: Ye,
                            options: [
                              { value: "all", label: "\u5168\u90E8" },
                              ...Mt.map((l, z) => ({
                                value: String(z),
                                label: l,
                              })),
                            ],
                          }),
                          s.default.createElement(
                            "label",
                            { className: "field" },
                            "\u6392\u5E8F",
                            s.default.createElement(
                              "select",
                              {
                                value: Ot,
                                onChange: (l) => Zn(l.target.value),
                              },
                              s.default.createElement(
                                "option",
                                { value: "default" },
                                "\u9810\u8A2D",
                              ),
                              s.default.createElement(
                                "option",
                                { value: "alpha" },
                                J === "jp"
                                  ? "\u8B80\u97F3\u6392\u5E8F"
                                  : "A\u2013Z",
                              ),
                              s.default.createElement(
                                "option",
                                { value: "random" },
                                "\u96A8\u6A5F",
                              ),
                              s.default.createElement(
                                "option",
                                { value: "stars" },
                                "\u66F8\u7C64\u512A\u5148",
                              ),
                              s.default.createElement(
                                "option",
                                { value: "familiarity" },
                                "\u719F\u6089\u5EA6\uFF08\u4F4E\u2192\u9AD8\uFF09",
                              ),
                            ),
                          ),
                          s.default.createElement(
                            "label",
                            { className: "field" },
                            "\u4E3B\u984C",
                            s.default.createElement(
                              "select",
                              {
                                value: kt,
                                onChange: (l) => Ro(l.target.value),
                              },
                              s.default.createElement(
                                "option",
                                { value: "all" },
                                "\u5168\u90E8\u55AE\u5143",
                              ),
                              qr.map((l) =>
                                s.default.createElement(
                                  "option",
                                  { key: l.id, value: l.id },
                                  l.name,
                                ),
                              ),
                            ),
                          ),
                          J === "de" &&
                            s.default.createElement(
                              "label",
                              { className: "field" },
                              "\u4E3B\u984C\u5206\u985E",
                              s.default.createElement(
                                "select",
                                {
                                  value: tp,
                                  onChange: (l) => Rp(l.target.value),
                                },
                                s.default.createElement(
                                  "option",
                                  { value: "all" },
                                  "\u5168\u90E8\u4E3B\u984C",
                                ),
                                [
                                  ...new Set(
                                    V.filter((l) => l.lang === "de" && l.topic).map(
                                      (l) => l.topic,
                                    ),
                                  ),
                                ].map((l) =>
                                  s.default.createElement(
                                    "option",
                                    { key: l, value: l },
                                    l,
                                  ),
                                ),
                              ),
                            ),
                          s.default.createElement(
                            "label",
                            { className: "check-row" },
                            s.default.createElement("input", {
                              type: "checkbox",
                              checked: Gl,
                              onChange: (l) => Ho(l.target.checked),
                            }),
                            "\u53EA\u986F\u793A\u66F8\u7C64",
                          ),
                          s.default.createElement(
                            "button",
                            {
                              className: "text-control",
                              onClick: () => {
                                (Oo("all"),
                                  Ye("all"),
                                  Ro("all"),
                                  Rp("all"),
                                  or(""),
                                  Ho(!1));
                              },
                            },
                            "\u6E05\u9664\u7BE9\u9078",
                          ),
                        ),
                        s.default.createElement(_l, {
                          ws: Xr,
                          meaning: sr,
                          extras: G,
                          catalog: r,
                          listMeaning: Yn,
                          onOpen: (l) => eo(l),
                        }),
                        !Xr.length &&
                          s.default.createElement(
                            "p",
                            { className: "empty" },
                            "\u6C92\u6709\u7B26\u5408\u689D\u4EF6\u7684\u689D\u76EE\u3002\u53EF\u6E05\u9664\u7BE9\u9078\u6216\u5148\u52A0\u5165\u66F8\u7C64\u3002",
                          ),
                      ),
                    Q === "more" &&
                      O === "grid" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(We, {
                          title: "\u66F4\u591A\u529F\u80FD",
                        }),
                        s.default.createElement(
                          "div",
                          { className: "more-grid" },
                          [
                            ["add", "\u65B0\u589E\u55AE\u5B57", "\uFF0B"],
                            ["staging", "\u66AB\u5B58\u5340", "\u66AB"],
                            [
                              "notebooks",
                              "\u6211\u7684\u55AE\u5B57\u672C",
                              "\u229E",
                            ],
                            ["bookmarks", "\u66F8\u7C64\u8907\u7FD2", "\u2605"],
                            ["custom", "\u81EA\u8A02\u55AE\u5143", "\u270E"],
                            ["stats", "\u5B78\u7FD2\u7D71\u8A08", "\u8A08"],
                            ["backup", "\u5099\u4EFD\u8CC7\u6599", "\u5B58"],
                            ["settings", "\u8A2D\u5B9A", "\u8A2D"],
                          ].map(([l, z, v]) =>
                            s.default.createElement(
                              "button",
                              { key: l, onClick: () => ne(l) },
                              s.default.createElement(
                                "i",
                                { "aria-hidden": "true" },
                                v,
                              ),
                              s.default.createElement("span", null, z),
                            ),
                          ),
                          s.default.createElement(
                            "a",
                            {
                              href: "https://plus-pro-max-ultra.github.io/control-center/",
                              target: "_blank",
                              rel: "noreferrer",
                            },
                            s.default.createElement(
                              "i",
                              { "aria-hidden": "true" },
                              "\u4EE4",
                            ),
                            s.default.createElement(
                              "span",
                              null,
                              "\u6307\u4EE4\u5340",
                            ),
                          ),
                          s.default.createElement(
                            er,
                            { to: "/grammar" },
                            s.default.createElement(
                              "i",
                              { "aria-hidden": "true" },
                              "\u6587",
                            ),
                            s.default.createElement(
                              "span",
                              null,
                              "\u6587\u6CD5\u8AB2\u7A0B",
                            ),
                          ),
                        ),
                      ),
                    Q === "more" &&
                      O === "add" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(We, {
                          title: "\u65B0\u589E\u55AE\u5B57",
                          sub: "\u81EA\u5DF1\u8F38\u5165\u55AE\u5B57\uFF0C\u4E26\u9078\u64C7\u5B58\u653E\u4F4D\u7F6E",
                          onBack: () => ne("grid"),
                        }),
                        s.default.createElement(df, {
                          lang: J,
                          books: r.books,
                          ready: c.ready && n.ready,
                          count: V.filter((l) => l.user).length,
                          find: (l, z) =>
                            V.find((v) => v.lang === l && v.word === z),
                          onSave: tg,
                          onOpen: (l) => {
                            let z = V.find((v) => v.id === l);
                            z &&
                              (_(z.lang),
                              eo(
                                z,
                                V.filter((v) => v.lang === z.lang && !v.bank),
                              ));
                          },
                        }),
                      ),
                    Q === "more" &&
                      O === "staging" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(We, {
                          title: "\u66AB\u5B58\u5340",
                          sub: "\u5148\u5B58\u4E0B\u55AE\u5B57\uFF0C\u4E4B\u5F8C\u518D\u5206\u985E\u88DC\u8CC7\u8A0A",
                          onBack: () => ne("grid"),
                        }),
                        s.default.createElement(sf, {
                          items: d,
                          ready: x.ready,
                          onAdd: og,
                          onRemove: (l) => ei(d.filter((z) => z.id !== l)),
                          syncMsg: rg,
                          find: (l, z) =>
                            V.find(
                              (v) =>
                                v.lang === l &&
                                (v.word === z ||
                                  v.word.replace(/^(der|die|das) /, "") === z),
                            ),
                          onSync: () => rd(d),
                          onEdit: (l, z) =>
                            p(d.map((v) => (v.id === l ? { ...v, ...z } : v))),
                        }),
                      ),
                    Q === "more" &&
                      O === "notebooks" &&
                      s.default.createElement(G1, {
                        catalog: r,
                        list: Ne.concat(V.filter((l) => Nm[l.id])),
                        visibleBooks: qr,
                        save: sa,
                        ready: n.ready,
                        newBook: Fm,
                        setNewBook: Pm,
                        confirmDelete: _m,
                        setConfirmDelete: Wl,
                        onBack: () => ne("grid"),
                        onOpenBook: (l) => {
                          let z = id(l);
                          (Xs(
                            l.name,
                            `${z.length} \u500B\u55AE\u5B57`,
                            z.map((v) => v.id),
                            "more",
                          ),
                            ne("words"));
                        },
                        onDelete: (l) => {
                          (sa({
                            ...r,
                            books: r.books.filter((z) => z.id !== l),
                            entries: Object.fromEntries(
                              Object.entries(r.entries).map(([z, v]) => [
                                z,
                                { ...v, books: v.books.filter((S) => S !== l) },
                              ]),
                            ),
                          }),
                            Wl(null));
                        },
                      }),
                    Q === "more" &&
                      O === "words" &&
                      he &&
                      s.default.createElement(Ml, {
                        title: he.title,
                        sub: he.sub,
                        ws: he.ids
                          .map((l) => V.find((z) => z.id === l))
                          .filter(Boolean),
                        words: V,
                        meaning: sr,
                        extras: G,
                        catalog: r,
                        lang: J,
                        sortBy: Ot,
                        setSortBy: Zn,
                        applySort: oa,
                        listMeaning: Yn,
                        setListMeaning: $s,
                        onBack: () => {
                          (ne(he.from === "more" ? "notebooks" : "grid"),
                            A(null));
                        },
                        onOpen: (l, z) => eo(l, z),
                        onListen: (l) => Jo(l),
                        onQuiz: (l, z) => Rt(z || "forward", l.slice(0, 30)),
                      }),
                    Q === "more" &&
                      O === "bookmarks" &&
                      s.default.createElement(Ml, {
                        title: "\u66F8\u7C64\u8907\u7FD2",
                        sub: "\u66F8\u7C64\u6578\u91CF\uFF1A" + sd.length,
                        ws: sd,
                        words: V,
                        meaning: sr,
                        extras: G,
                        catalog: r,
                        lang: J,
                        sortBy: Ot,
                        setSortBy: Zn,
                        applySort: oa,
                        listMeaning: Yn,
                        setListMeaning: $s,
                        onBack: () => ne("grid"),
                        onOpen: (l, z) => eo(l, z),
                        onListen: (l) => Jo(l),
                        onQuiz: (l, z) => Rt(z || "forward", l.slice(0, 30)),
                      }),
                    Q === "more" &&
                      O === "custom" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(We, {
                          title: "\u81EA\u8A02\u55AE\u5143",
                          sub: "\u9078\u64C7\u7BC4\u570D\u5F8C\u96A8\u6A5F\u62BD\u53D6\u6700\u591A 50 \u500B\u689D\u76EE",
                          onBack: () => ne("grid"),
                        }),
                        qr.map((l) =>
                          s.default.createElement(
                            "label",
                            { className: "check-row", key: l.id },
                            s.default.createElement("input", {
                              type: "checkbox",
                              checked: Zr.includes(l.id),
                              onChange: () =>
                                Vm(
                                  Zr.includes(l.id)
                                    ? Zr.filter((z) => z !== l.id)
                                    : [...Zr, l.id],
                                ),
                            }),
                            l.name,
                          ),
                        ),
                        s.default.createElement(
                          "button",
                          {
                            className: "primary-action",
                            disabled: !Zr.length,
                            onClick: () => {
                              let l = Dt(
                                Ne.filter((z) =>
                                  Zr.some((v) =>
                                    r.entries[z.id]?.books.includes(v),
                                  ),
                                ),
                              ).slice(0, 50);
                              l.length
                                ? (nr(l.map((z) => z.id)), ea(0))
                                : Ce(
                                    "\u7BC4\u570D\u5167\u6C92\u6709\u689D\u76EE\u3002",
                                  );
                            },
                          },
                          "\u96A8\u6A5F\u958B\u59CB",
                        ),
                      ),
                    Q === "more" &&
                      O === "stats" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(We, {
                          title: "\u5B78\u7FD2\u7D71\u8A08",
                          onBack: () => ne("grid"),
                        }),
                        s.default.createElement(
                          "div",
                          { className: "stats-grid" },
                          s.default.createElement(Ps, {
                            label: "\u5DF2\u7DF4\u7FD2",
                            value: ar.length,
                          }),
                          s.default.createElement(Ps, {
                            label: "\u5F85\u8907\u7FD2",
                            value: Gs.length,
                          }),
                          s.default.createElement(Ps, {
                            label: "\u4ECA\u65E5\u65B0\u5B57",
                            value: ta,
                          }),
                          s.default.createElement(Ps, {
                            label: "\u66F8\u7C64",
                            value: Ne.filter((l) => G[l.id]?.star).length,
                          }),
                        ),
                        s.default.createElement(
                          "h3",
                          { className: "section-head" },
                          "\u719F\u6089\u5EA6\u5206\u5E03",
                        ),
                        Mt.map((l, z) => {
                          let v = Ne.filter(
                            (S) => (r.entries[S.id]?.familiarity ?? 0) === z,
                          ).length;
                          return s.default.createElement(
                            "button",
                            {
                              className: "stat-row",
                              key: z,
                              onClick: () => {
                                (Ye(String(z)),
                                  Se("library"),
                                  Ro("all"),
                                  Ho(!1));
                              },
                            },
                            s.default.createElement("i", {
                              className: "dot level-" + z,
                            }),
                            s.default.createElement("span", null, l),
                            s.default.createElement("strong", null, v),
                          );
                        }),
                        s.default.createElement(
                          "h3",
                          { className: "section-head" },
                          "\u7DF4\u7FD2\u7D00\u9304",
                        ),
                        s.default.createElement(
                          "p",
                          null,
                          "\u7B54\u5C0D ",
                          Yr,
                          " \u6B21 \xB7 \u5F85\u52A0\u5F37 ",
                          ra,
                          " \u6B21",
                        ),
                        s.default.createElement(
                          "h3",
                          { className: "section-head" },
                          "\u8FD1 7 \u5929",
                        ),
                        s.default.createElement(
                          "p",
                          null,
                          "\u7DF4\u7FD2 ",
                          Te.r,
                          " \u984C \xB7 \u7B54\u5C0D ",
                          Te.c,
                          " \u984C",
                          Te.r > 0
                            ? " \xB7 \u6B63\u78BA\u7387 " +
                                Math.round((Te.c / Te.r) * 100) +
                                "%"
                            : "",
                        ),
                        s.default.createElement(
                          "p",
                          { className: "muted" },
                          "\u9078\u64C7 ",
                          Te.r - Te.sr,
                          " \u984C",
                          Te.r - Te.sr > 0
                            ? " \xB7 \u6B63\u78BA\u7387 " +
                                Math.round(
                                  ((Te.c - Te.sc) / (Te.r - Te.sr)) * 100,
                                ) +
                                "%"
                            : "",
                          "\xB7\u3000\u62FC\u5B57 ",
                          Te.sr,
                          " \u984C",
                          Te.sr > 0
                            ? " \xB7 \u6B63\u78BA\u7387 " +
                                Math.round((Te.sc / Te.sr) * 100) +
                                "%"
                            : "",
                        ),
                        s.default.createElement(
                          "h3",
                          { className: "section-head" },
                          "\u5168\u90E8\u6E2C\u9A57\u6B63\u78BA\u7387",
                        ),
                        s.default.createElement(
                          "p",
                          null,
                          Yr + ra > 0
                            ? Math.round((Yr / (Yr + ra)) * 100) +
                                "%\uFF08\u7B54\u5C0D " +
                                Yr +
                                " \u6B21\uFF0C\u5171 " +
                                (Yr + ra) +
                                " \u6B21\uFF09"
                            : "\u5C1A\u7121\u4F5C\u7B54\u7D00\u9304",
                        ),
                        s.default.createElement(
                          "h3",
                          { className: "section-head" },
                          "\u6700\u5E38\u7B54\u932F",
                        ),
                        Ys.length
                          ? s.default.createElement(
                              s.default.Fragment,
                              null,
                              Ys.map((l) =>
                                s.default.createElement(
                                  er,
                                  {
                                    className: "stat-row",
                                    key: l.id,
                                    to: "/word/" + l.id,
                                  },
                                  s.default.createElement("span", null, l.word),
                                  s.default.createElement(
                                    "strong",
                                    null,
                                    "\u932F ",
                                    w[l.id].bad,
                                    " \u6B21 \u203A",
                                  ),
                                ),
                              ),
                              s.default.createElement(
                                "button",
                                {
                                  className: "end-test",
                                  onClick: () =>
                                    Rt(
                                      "forward",
                                      Ys.map((l) => l.id),
                                    ),
                                },
                                "\u7DF4\u7FD2\u9019\u4E9B\u5B57",
                              ),
                            )
                          : s.default.createElement(
                              "p",
                              { className: "muted" },
                              "\u5C1A\u7121\u7B54\u932F\u7D00\u9304\uFF1B\u7B54\u932F\u6700\u591A\u7684\u5B57\u6703\u5217\u5728\u9019\u88E1\uFF0C\u53EF\u76F4\u63A5\u518D\u7DF4\u3002",
                            ),
                        s.default.createElement(
                          "p",
                          { className: "muted" },
                          "\u719F\u6089\u5EA6\u7531\u4F60\u6A19\u8A18\uFF1B\u4E0D\u6703\u6539\u52D5\u8907\u7FD2\u6392\u7A0B\u3002\u6587\u6CD5\u4E0D\u8A08\u5165\u55AE\u5B57\u7D71\u8A08\u3002",
                        ),
                      ),
                    Q === "more" &&
                      O === "backup" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(We, {
                          title: "\u5099\u4EFD\u8CC7\u6599",
                          onBack: () => ne("grid"),
                        }),
                        s.default.createElement(
                          "p",
                          null,
                          "\u542B\u5169\u7A2E\u8A9E\u8A00\u7684\u9032\u5EA6\u3001\u4E3B\u984C\u5206\u985E\u3001\u66F8\u7C64\u3001\u500B\u4EBA\u7B46\u8A18\u3001\u81EA\u5DF1\u65B0\u589E\u7684\u55AE\u5B57\u8207\u6BCF\u65E5\u7DF4\u7FD2\u7D71\u8A08\u3002\u820A\u7248\u5099\u4EFD\u4ECD\u53EF\u9084\u539F\uFF1B\u6C92\u6709\u65B0\u6B04\u4F4D\u6642\u4FDD\u7559\u73FE\u6709\u66F8\u7C64\u8207\u7B46\u8A18\u3002\u9084\u539F\u6703\u53D6\u4EE3\u5C0D\u61C9\u8CC7\u6599\u3002",
                        ),
                        s.default.createElement(
                          "button",
                          {
                            className: "primary-action",
                            disabled: !ve.ready || !n.ready || !oe.ready,
                            onClick: () => {
                              (Jl(
                                JSON.stringify(
                                  {
                                    format: "mm-vocabulary-v1",
                                    progress: X,
                                    catalog: r,
                                    extras: G,
                                    daily: m,
                                    userWords: a,
                                    staging: d,
                                  },
                                  null,
                                  2,
                                ),
                              ),
                                Ce(
                                  "\u5099\u4EFD\u5DF2\u7522\u751F\uFF0C\u8ACB\u8907\u88FD\u4FDD\u5B58\u3002",
                                ));
                            },
                          },
                          "\u7522\u751F\u5099\u4EFD",
                        ),
                        s.default.createElement(
                          "label",
                          { className: "field" },
                          "\u5099\u4EFD\u8CC7\u6599",
                          s.default.createElement("textarea", {
                            rows: 7,
                            value: Js,
                            onChange: (l) => Jl(l.target.value),
                          }),
                        ),
                        s.default.createElement(
                          "button",
                          {
                            className: "primary-action",
                            disabled: !ve.ready || !n.ready || !oe.ready || !Js,
                            onClick: eg,
                          },
                          "\u9084\u539F\u8CC7\u6599",
                        ),
                        s.default.createElement(
                          "p",
                          { className: "muted" },
                          "\u8CC7\u6599\u53EA\u5132\u5B58\u5728\u6B64\u700F\u89BD\u5668\u8207\u5E33\u865F\uFF0C\u4E0D\u8DE8\u88DD\u7F6E\u540C\u6B65\u3002\u6E05\u9664\u8CC7\u6599\u53EF\u80FD\u79FB\u9664\u9032\u5EA6\u3002\u9810\u89BD\u53EA\u80FD\u66AB\u5B58\u3002",
                        ),
                      ),
                    Q === "more" &&
                      O === "settings" &&
                      s.default.createElement(
                        s.default.Fragment,
                        null,
                        s.default.createElement(We, {
                          title: "\u8A2D\u5B9A",
                          onBack: () => ne("grid"),
                        }),
                        s.default.createElement(
                          "div",
                          { className: "card" },
                          J === "de" &&
                            s.default.createElement(
                              "label",
                              { className: "field" },
                              "\u5FB7\u6587\u91CB\u7FA9",
                              s.default.createElement(
                                "select",
                                {
                                  value: ql,
                                  onChange: (l) => $m(l.target.value),
                                },
                                s.default.createElement(
                                  "option",
                                  { value: "en" },
                                  "English",
                                ),
                                s.default.createElement(
                                  "option",
                                  { value: "zh" },
                                  "\u4E2D\u6587",
                                ),
                              ),
                            ),
                          s.default.createElement(
                            "div",
                            { className: "stepper-row" },
                            s.default.createElement(
                              "span",
                              null,
                              "\u5B57\u9AD4\u5927\u5C0F",
                            ),
                            s.default.createElement(
                              "button",
                              {
                                "aria-label": "\u7E2E\u5C0F\u5B57\u9AD4",
                                disabled: !P.ready,
                                onClick: () => {
                                  let l = [18, 20, 24, 28],
                                    z = l.indexOf(R.size);
                                  U({ ...R, size: l[Math.max(0, z - 1)] });
                                },
                              },
                              "\u2039",
                            ),
                            s.default.createElement("strong", null, R.size),
                            s.default.createElement(
                              "button",
                              {
                                "aria-label": "\u653E\u5927\u5B57\u9AD4",
                                disabled: !P.ready,
                                onClick: () => {
                                  let l = [18, 20, 24, 28],
                                    z = l.indexOf(R.size);
                                  U({
                                    ...R,
                                    size: l[Math.min(l.length - 1, z + 1)],
                                  });
                                },
                              },
                              "\u203A",
                            ),
                          ),
                                                    s.default.createElement(
                            "label",
                            { className: "field" },
                            "\u6717\u8B80\u901F\u5EA6\uFF1A" +
                              Math.round((R.rate ?? 0.9) * 100) / 100 +
                              "x",
                            s.default.createElement("input", {
                              type: "range",
                              min: 0.5,
                              max: 1.5,
                              step: 0.05,
                              value: R.rate ?? 0.9,
                              disabled: !P.ready,
                              onChange: (l) =>
                                U({ ...R, rate: Number(l.target.value) }),
                            }),
                            s.default.createElement(
                              "span",
                              { className: "range-ends" },
                              "0.5x \u2013 1.5x",
                            ),
                          ),
                                                    s.default.createElement(
                            "div",
                            { className: "field" },
                            s.default.createElement(
                              "span",
                              null,
                              "\u6717\u8B80\u91CD\u8907\u6B21\u6578",
                            ),
                            s.default.createElement(
                              "div",
                              { className: "stepper-row" },
                              s.default.createElement(
                                "button",
                                {
                                  onClick: () =>
                                    U({
                                      ...R,
                                      repeat: Math.max(1, (R.repeat ?? 1) - 1),
                                    }),
                                  disabled: !P.ready || (R.repeat ?? 1) <= 1,
                                },
                                "\u2212",
                              ),
                              s.default.createElement(
                                "strong",
                                null,
                                (R.repeat ?? 1) + " \u6B21",
                              ),
                              s.default.createElement(
                                "button",
                                {
                                  onClick: () =>
                                    U({
                                      ...R,
                                      repeat: Math.min(3, (R.repeat ?? 1) + 1),
                                    }),
                                  disabled: !P.ready || (R.repeat ?? 1) >= 3,
                                },
                                "+",
                              ),
                            ),
                          ),
                          J === "jp" &&
                            s.default.createElement(
                              "div",
                              { className: "stepper-row" },
                              s.default.createElement(
                                "span",
                                null,
                                "\u5B57\u5EAB\u6BCF\u55AE\u5143\u5B57\u6578",
                              ),
                              s.default.createElement(
                                "button",
                                {
                                  "aria-label":
                                    "\u6E1B\u5C11\u6BCF\u55AE\u5143\u5B57\u6578",
                                  disabled: !P.ready,
                                  onClick: () => {
                                    let l = [25, 50, 60],
                                      z = l.indexOf(R.unitSize ?? 50);
                                    U({
                                      ...R,
                                      unitSize: l[Math.max(0, z - 1)],
                                    });
                                  },
                                },
                                "\u2039",
                              ),
                              s.default.createElement(
                                "strong",
                                null,
                                R.unitSize ?? 50,
                              ),
                              s.default.createElement(
                                "button",
                                {
                                  "aria-label":
                                    "\u589E\u52A0\u6BCF\u55AE\u5143\u5B57\u6578",
                                  disabled: !P.ready,
                                  onClick: () => {
                                    let l = [25, 50, 60],
                                      z = l.indexOf(R.unitSize ?? 50);
                                    U({
                                      ...R,
                                      unitSize:
                                        l[Math.min(l.length - 1, z + 1)],
                                    });
                                  },
                                },
                                "\u203A",
                              ),
                            ),
                          s.default.createElement(
                            "label",
                            { className: "check-row" },
                            s.default.createElement("input", {
                              type: "checkbox",
                              checked: !!R.hideMeaning,
                              disabled: !P.ready,
                              onChange: (l) =>
                                U({ ...R, hideMeaning: l.target.checked }),
                            }),
                            "\u55AE\u5B57\u9801\u5148\u85CF\u8D77\u91CB\u7FA9\uFF0C\u9EDE\u4E00\u4E0B\u624D\u986F\u793A\uFF08\u81EA\u6211\u6E2C\u9A57\u7528\uFF09",
                          ),
                          s.default.createElement(
                            "label",
                            { className: "check-row" },
                            s.default.createElement("input", {
                              type: "checkbox",
                              checked: !!R.autoPlay,
                              disabled: !P.ready,
                              onChange: (l) =>
                                U({ ...R, autoPlay: l.target.checked }),
                            }),
                            "\u6253\u958B\u55AE\u5B57\u6642\u81EA\u52D5\u6717\u8B80",
                          ),
                          s.default.createElement(
                            "label",
                            { className: "check-row" },
                            s.default.createElement("input", {
                              type: "checkbox",
                              checked: !!R.rememberTab,
                              disabled: !P.ready,
                              onChange: (l) =>
                                U({ ...R, rememberTab: l.target.checked }),
                            }),
                            "\u8A18\u4F4F\u4E0A\u6B21\u4F7F\u7528\u7684\u5206\u9801",
                          ),
                          s.default.createElement(
                            "label",
                            { className: "check-row" },
                            s.default.createElement("input", {
                              type: "checkbox",
                              checked: R.quizFamiliar !== !1,
                              disabled: !P.ready,
                              onChange: (l) =>
                                U({ ...R, quizFamiliar: l.target.checked }),
                            }),
                            "\u6E2C\u9A57\u7D50\u679C\u8A08\u5165\u719F\u6089\u5EA6\uFF08\u95DC\u9589\u5F8C\u6E2C\u9A57\u4E0D\u6703\u66F4\u6539\u719F\u6089\u5EA6\uFF09",
                          ),
                        s.default.createElement(
                          "label",
                          { className: "check-row" },
                          s.default.createElement("input", {
                            type: "checkbox",
                            checked: R.spellExplain === !0,
                            onChange: (l) =>
                              U({ ...R, spellExplain: l.target.checked }),
                          }),
                          "\u9375\u76E4\u62FC\u5B57\u984C\u7B54\u932F\u5F8C\u986F\u793A\u8A73\u7D30\u8AAA\u660E\uFF08\u9810\u8A2D\u95DC\u9589\uFF09",
                        ),
                        ),
                        s.default.createElement(
                          "p",
                          { className: "muted build-ver" },
                          "\u7248\u672C\uFF1A",
                          O1,
                        ),
                        s.default.createElement(
                          "details",
                          { className: "changelog" },
                          s.default.createElement(
                            "summary",
                            null,
                            "\u7248\u672C\u65E5\u8A8C",
                          ),
                          R1.map((l) =>
                            s.default.createElement(
                              "div",
                              { className: "cl-item", key: l.v },
                              s.default.createElement("b", null, l.v),
                              s.default.createElement(
                                "span",
                                { className: "muted" },
                                " \xB7 ",
                                l.d,
                              ),
                              s.default.createElement(
                                "ul",
                                null,
                                l.items.map((z, v) =>
                                  s.default.createElement("li", { key: v }, z),
                                ),
                              ),
                            ),
                          ),
                        ),
                        s.default.createElement(
                          "details",
                          { className: "danger-zone" },
                          s.default.createElement(
                            "summary",
                            { className: "danger-text" },
                            "\u6E05\u9664\u5B78\u7FD2\u7D00\u9304",
                          ),
                          Hm
                            ? s.default.createElement(
                                s.default.Fragment,
                                null,
                                s.default.createElement(
                                  "p",
                                  null,
                                  "\u78BA\u5B9A\u6E05\u9664\u6B64\u88DD\u7F6E\u4E0A\u7684\u9032\u5EA6\u3001\u66F8\u7C64\u3001\u7B46\u8A18\u8207\u7D71\u8A08\uFF1F\u5EFA\u8B70\u5148\u7522\u751F\u5099\u4EFD\u3002",
                                ),
                                s.default.createElement(
                                  "button",
                                  {
                                    className: "primary-action",
                                    onClick: () => {
                                      (k({}),
                                        h({}),
                                        E({}),
                                        F({}),
                                        ze({}),
                                        f({}),
                                        o(Fs),
                                        Ks(!1),
                                        Ce(
                                          "\u5DF2\u6E05\u9664\u672C\u6A5F\u5B78\u7FD2\u7D00\u9304\u3002",
                                        ));
                                    },
                                  },
                                  "\u78BA\u5B9A\u6E05\u9664",
                                ),
                                s.default.createElement(
                                  "button",
                                  {
                                    className: "end-test",
                                    onClick: () => Ks(!1),
                                  },
                                  "\u53D6\u6D88",
                                ),
                              )
                            : s.default.createElement(
                                "button",
                                {
                                  className: "end-test",
                                  disabled: !ve.ready,
                                  onClick: () => Ks(!0),
                                },
                                "\u6E05\u9664\u672C\u6A5F\u5B78\u7FD2\u7D00\u9304\u2026",
                              ),
                        ),
                        s.default.createElement(
                          "details",
                          null,
                          s.default.createElement(
                            "summary",
                            null,
                            "\u8907\u7FD2\u8207\u5132\u5B58\u898F\u5247",
                          ),
                          s.default.createElement(
                            "p",
                            null,
                            "\u4E0D\u719F\uFF1A1 \u5929\u5F8C\uFF1B\u7B54\u5C0D\u4F9D\u6B21\u9694 3\u30017\u300114 \u5929\u3002\u6BCF\u6B21\u6DF7\u5408\u8907\u7FD2\u6700\u591A 20 \u500B\uFF0C\u7D04 70% \u512A\u5148\u9078\u5230\u671F\u689D\u76EE\uFF0C\u5176\u9918\u5F9E\u5DF2\u5B78\u689D\u76EE\u62BD\u9078\uFF1B\u4E0D\u8DB3\u6642\u4EE5\u53EF\u7528\u689D\u76EE\u88DC\u9F4A\u3002\u63D0\u524D\u7B54\u5C0D\u4FDD\u7559\u539F\u5B9A\u8907\u7FD2\u65E5\u671F\u3002\u9019\u662F\u672C\u9801\u4FDD\u7559\u7684\u6392\u7A0B\uFF0C\u4E0D\u5BA3\u7A31\u662F\u53C3\u8003 App \u7684\u5167\u90E8\u6F14\u7B97\u6CD5\u3002\u719F\u6089\u5EA6\u6A19\u8A18\u8207\u6392\u7A0B\u5206\u958B\u3002",
                          ),
                          s.default.createElement(
                            "p",
                            null,
                            "\u65E5\u6587\u6BCF\u65E5\u65B0\u5B57\u76EE\u6A19 30\u3002\u5FB7\u6587\u6BCF\u65E5\u65B0\u5B57\u65B0\u589E\u66AB\u505C\u3002\u73FE\u6709\u65E5\u6587",
                            " ",
                            V.filter((l) => l.lang === "jp").length,
                            " \u689D\u3001\u5FB7\u6587",
                            " ",
                            V.filter((l) => l.lang === "de").length,
                            " \u689D\u3002",
                          ),
                        ),
                        s.default.createElement(
                          "p",
                          { className: "muted" },
                          "\u4F7F\u7528\u88DD\u7F6E\u7684\u65E5\u6587\uFF0F\u5FB7\u6587\u5408\u6210\u8A9E\u97F3\uFF1B\u9700\u8981\u88DD\u7F6E\u6709\u5C0D\u61C9\u8A9E\u97F3\uFF0C\u4E26\u975E\u771F\u4EBA\u9304\u97F3\u3002\u5167\u5BB9\u900F\u904E\u804A\u5929\u66F4\u65B0\uFF0C\u91CD\u65B0\u6574\u7406\u540C\u4E00\u9023\u7D50\u5373\u53EF\u3002",
                        ),
                      ),
                  ),

        tr &&
          s.default.createElement(
            "p",
            { role: "status", className: "notice" },
            tr,
          ),
        Rl && s.default.createElement("p", { role: "status" }, Rl),
        Ql &&
          s.default.createElement(
            "p",
            { role: "status", className: "muted" },
            Ql,
          ),
        e !== "grammar" &&
          !Vs.length &&
          !Xn &&
          !ed &&
          s.default.createElement(V1, { tab: Q, go: dg }),
        s.default.createElement(
          "footer",
          { className: "storage-note", role: "status" },
          pg,
        ),
      ),
    );
  }
  function G1({
    catalog: e,
    list: t,
    visibleBooks: r,
    save: o,
    ready: n,
    newBook: a,
    setNewBook: i,
    confirmDelete: c,
    setConfirmDelete: d,
    onBack: p,
    onOpenBook: x,
    onDelete: m,
  }) {
    let [f, j] = (0, s.useState)(null),
      [y, k] = (0, s.useState)(""),
      [T, u] = (0, s.useState)(!1);
    return s.default.createElement(
      s.default.Fragment,
      null,
      s.default.createElement(
        We,
        {
          title: "\u6211\u7684\u55AE\u5B57\u672C",
          sub: r.length + " \u500B\u55AE\u5B57\u672C",
          onBack: p,
        },
        s.default.createElement(
          "button",
          {
            "aria-label": "\u65B0\u589E\u55AE\u5B57\u672C",
            onClick: () => u(!T),
          },
          "\uFF0B",
        ),
      ),
      s.default.createElement(
        "p",
        { className: "muted" },
        "\u65B0\u589E\u3001\u6539\u540D\u6216\u522A\u9664\u55AE\u5B57\u7C3F\uFF1B\u4E0D\u6703\u522A\u9664\u55AE\u5B57\u6216\u8907\u7FD2\u9032\u5EA6\u3002\u5206\u985E\u50C5\u5132\u5B58\u5728\u6B64\u88DD\u7F6E\uFF0C\u6700\u591A 40 \u500B\u3002",
      ),
      T &&
        s.default.createElement(
          "div",
          { className: "card" },
          s.default.createElement(
            "label",
            { className: "field" },
            "\u55AE\u5B57\u672C\u540D\u7A31",
            s.default.createElement("input", {
              maxLength: 80,
              value: a,
              onChange: (h) => i(h.target.value),
              placeholder: "\u4F8B\u5982\uFF1A\u65C5\u884C\u3001\u5DE5\u4F5C",
            }),
          ),
          s.default.createElement(
            "button",
            {
              className: "primary-action",
              disabled:
                !n ||
                !a.trim() ||
                e.books.length >= 40 ||
                e.books.some((h) => h.name === a.trim()),
              onClick: () => {
                (o({
                  ...e,
                  books: [
                    ...e.books,
                    { id: "book-" + Date.now().toString(36), name: a.trim() },
                  ],
                }),
                  i(""),
                  u(!1));
              },
            },
            "\u65B0\u589E\u55AE\u5B57\u672C",
          ),
        ),
      s.default.createElement(
        "div",
        { className: "notebook-list" },
        r.map((h, g) => {
          let b = t.filter((E) => e.entries[E.id]?.books.includes(h.id)).length;
          return s.default.createElement(
            "div",
            { className: "notebook-row", key: h.id },
            f === h.id
              ? s.default.createElement(
                  "div",
                  { className: "notebook-edit" },
                  s.default.createElement(
                    "label",
                    { className: "field" },
                    "\u55AE\u5B57\u672C\u540D\u7A31",
                    s.default.createElement("input", {
                      maxLength: 80,
                      value: y,
                      onChange: (E) => k(E.target.value),
                    }),
                  ),
                  s.default.createElement(
                    "button",
                    {
                      className: "primary-action",
                      disabled:
                        !n ||
                        !y.trim() ||
                        e.books.some(
                          (E) => E.id !== h.id && E.name === y.trim(),
                        ),
                      onClick: () => {
                        (o({
                          ...e,
                          books: e.books.map((E) =>
                            E.id === h.id ? { ...E, name: y.trim() } : E,
                          ),
                        }),
                          j(null));
                      },
                    },
                    "\u5132\u5B58",
                  ),
                  s.default.createElement(
                    "button",
                    { className: "text-control", onClick: () => j(null) },
                    "\u53D6\u6D88",
                  ),
                )
              : s.default.createElement(
                  s.default.Fragment,
                  null,
                  s.default.createElement(
                    "button",
                    { className: "notebook-open", onClick: () => x(h) },
                    s.default.createElement(
                      "span",
                      { className: "notebook-name" },
                      g === 0 &&
                        s.default.createElement(
                          "em",
                          { className: "default-badge" },
                          "\u9810\u8A2D",
                        ),
                      h.name,
                    ),
                    s.default.createElement(
                      "small",
                      null,
                      b,
                      " \u500B\u55AE\u5B57",
                    ),
                  ),
                  s.default.createElement(
                    "button",
                    {
                      className: "text-control",
                      "aria-label": "\u6539\u540D " + h.name,
                      onClick: () => {
                        (j(h.id), k(h.name), d(null));
                      },
                    },
                    "\u270E",
                  ),
                  s.default.createElement(
                    "button",
                    {
                      className: "text-control",
                      "aria-label": "\u522A\u9664 " + h.name,
                      onClick: () => d(h.id),
                    },
                    "\u2715",
                  ),
                ),
            c === h.id &&
              s.default.createElement(
                "div",
                { className: "delete-confirm" },
                s.default.createElement(
                  "p",
                  null,
                  "\u522A\u9664\u300C",
                  h.name,
                  "\u300D\uFF1F\u55AE\u5B57\u6703\u4FDD\u7559\uFF0C\u53EA\u79FB\u9664\u6B64\u5206\u985E\u3002",
                ),
                s.default.createElement(
                  "button",
                  {
                    className: "primary-action",
                    disabled: !n,
                    onClick: () => m(h.id),
                  },
                  "\u78BA\u8A8D\u522A\u9664",
                ),
                s.default.createElement(
                  "button",
                  { className: "text-control", onClick: () => d(null) },
                  "\u53D6\u6D88",
                ),
              ),
          );
        }),
      ),
    );
  }
  function Q1() {
    let e = Il,
      [gLang] = ht("vocabulary.language.v1", "jp"),
      gOrder = gLang === "de" ? ["de", "jp"] : ["jp", "de"];
    return s.default.createElement(
      s.default.Fragment,
      null,
      s.default.createElement(xm, {
        title: "\u6587\u6CD5 / Grammar",
        intro:
          "\u7368\u7ACB\u6574\u7406\u53E5\u578B\u8207\u898F\u5247\uFF0C\u4E0D\u8207\u55AE\u5B57\u3001\u7247\u8A9E\u6DF7\u5408\u8A08\u6578\u3002",
      }),
      s.default.createElement(
        er,
        { to: "/library", className: "file-button is-compact" },
        "\u2039 \u8FD4\u56DE\u55AE\u5B57\u8207\u7247\u8A9E",
      ),
      gOrder.map((t) =>
        s.default.createElement(
          zm,
          {
            key: t,
            label:
              t === "jp"
                ? "\u65E5\u6587 \xB7 \u53E5\u578B\u8207\u5F62\u5BB9\u8A5E"
                : "German \xB7 Grammar / \u5FB7\u6587\u6587\u6CD5",
            heading: !0,
          },
          e
            .filter((r) => r.lang === t)
            .map((r) =>
              s.default.createElement(
                "section",
                {
                  className: "grammar-lesson",
                  key: r.id,
                  "data-content-type": "grammar",
                },
                s.default.createElement("h3", null, r.title),
                s.default.createElement("p", null, r.rule),
                r.ruleZh &&
                  s.default.createElement(
                    "p",
                    { className: "grammar-zh", lang: "zh-Hant" },
                    r.ruleZh,
                  ),
                r.conjugation &&
                  s.default.createElement(
                    s.default.Fragment,
                    null,
                    s.default.createElement(
                      "h4",
                      null,
                      r.conjTitle ?? "wohnen \xB7 to live / \u5C45\u4F4F",
                    ),
                    s.default.createElement(
                      "div",
                      { className: "conjugation-grid" },
                      r.conjugation.map(([o, n, a]) =>
                        s.default.createElement(
                          "div",
                          { className: "conjugation-row", key: o },
                          s.default.createElement("span", null, o),
                          s.default.createElement("span", null, n),
                          s.default.createElement("strong", null, a),
                        ),
                      ),
                    ),
                  ),
                r.related &&
                  s.default.createElement(
                    s.default.Fragment,
                    null,
                    s.default.createElement(
                      "h4",
                      null,
                      t === "jp"
                        ? "\u672C\u8AB2\u55AE\u5B57"
                        : "Same pattern / \u76F8\u540C\u8B8A\u5316",
                    ),
                    s.default.createElement(
                      "div",
                      { className: "grammar-related" },
                      r.related.map((o) =>
                        s.default.createElement(
                          er,
                          {
                            key: o,
                            to: "/word/" + o,
                            className: "file-button is-compact",
                          },
                          V.find((n) => n.id === o)?.word,
                        ),
                      ),
                    ),
                  ),
                r.notes?.map((o, n) =>
                  s.default.createElement(
                    "div",
                    { className: "grammar-note", key: n },
                    s.default.createElement("p", null, o.en),
                    s.default.createElement(
                      "p",
                      { className: "grammar-zh", lang: "zh-Hant" },
                      o.zh,
                    ),
                  ),
                ),
                s.default.createElement(Ws, {
                  word: {
                    id: r.id,
                    lang: r.lang,
                    word: r.title,
                    reading: "",
                    en: "",
                    zh: "",
                    contentType: "grammar",
                    examples: r.examples,
                  },
                  target: t === "jp" ? "zh" : "both",
                }),
                r.sources
                  ? s.default.createElement(
                      "div",
                      { className: "grammar-sources" },
                      r.sources.map((o) =>
                        s.default.createElement(
                          Ms,
                          { key: o.url, href: o.url },
                          o.label,
                        ),
                      ),
                    )
                  : s.default.createElement(
                      Ms,
                      { href: r.sourceUrl },
                      "\u53E5\u578B\u4F86\u6E90",
                    ),
              ),
            ),
        ),
      ),
      s.default.createElement(
        mm,
        null,
        "\u6587\u6CD5 ",
        e.length,
        " \u8AB2\uFF08\u65E5\u6587",
        " ",
        e.filter((t) => t.lang === "jp").length,
        "\u3001\u5FB7\u6587",
        " ",
        e.filter((t) => t.lang === "de").length,
        "\uFF09\uFF0C\u8207\u55AE\u5B57\u3001\u7247\u8A9E\u5206\u958B\u8A08\u6578\u3002",
      ),
    );
  }
  function Z1({ text: e, word: t, verb: r }) {
    let o = t.replace(/^(der|die|das) /, "");
    if (r && !e.includes(o)) {
      let a = o.endsWith("\u3059\u308B") ? o.slice(0, -2) : o.slice(0, -1);
      a.length >= 1 && /[\u4E00-\u9FFF]/.test(a) && e.includes(a) && (o = a);
    }
    let n = e.toLocaleLowerCase().indexOf(o.toLocaleLowerCase());
    return n < 0
      ? s.default.createElement(s.default.Fragment, null, e)
      : s.default.createElement(
          s.default.Fragment,
          null,
          e.slice(0, n),
          s.default.createElement("mark", null, e.slice(n, n + o.length)),
          e.slice(n + o.length),
        );
  }
  function Ws({ word: e, target: t, heading: r = !0, speak: o }) {
    let [n, a] = (0, s.useState)([]);
    return (
      (0, s.useEffect)(() => a([]), [e.id]),
      s.default.createElement(
        "section",
        { className: "examples", "aria-label": "\u4F8B\u53E5" },
        r && s.default.createElement("h3", null, "\u4F8B\u53E5"),
        s.default.createElement(
          "p",
          { className: "muted" },
          "\u9EDE\u4F8B\u53E5\u4E0B\u65B9\u7A7A\u767D\u8655\u770B\u7FFB\u8B6F",
        ),
        e.examples.map((i, c) =>
          s.default.createElement(
            "div",
            { className: "example", key: c },
            s.default.createElement(
              "p",
              { lang: e.lang === "jp" ? "ja" : "de" },
              s.default.createElement(Z1, {
                text: i.text,
                word: e.word,
                verb: !!e.vclass,
              }),
              o &&
                s.default.createElement(
                  "button",
                  {
                    className: "inline-audio",
                    "aria-label": `\u6717\u8B80\u7B2C ${c + 1} \u53E5`,
                    onClick: () => o(e, i.text),
                  },
                  "\u25D6))",
                ),
            ),
            s.default.createElement(
              "button",
              {
                className: "translation-slot",
                "aria-label": `${n.includes(c) ? "\u96B1\u85CF" : "\u986F\u793A"}\u7B2C ${c + 1} \u53E5\u7FFB\u8B6F`,
                "aria-expanded": n.includes(c),
                onClick: () =>
                  a((d) =>
                    d.includes(c) ? d.filter((p) => p !== c) : [...d, c],
                  ),
              },
              n.includes(c)
                ? t === "both"
                  ? s.default.createElement(
                      s.default.Fragment,
                      null,
                      s.default.createElement("span", null, i.en),
                      s.default.createElement("br", null),
                      i.zh,
                    )
                  : e.lang === "jp" || t === "zh"
                    ? i.zh
                    : i.en
                : s.default.createElement(
                    "span",
                    { "aria-hidden": "true" },
                    "\u3000",
                  ),
            ),
          ),
        ),
        e.examples.some((i) => i.src === "tatoeba") &&
          s.default.createElement(
            "p",
            { className: "muted src-note" },
            "\u4F8B\u53E5\u4F86\u81EA Tatoeba\uFF08CC BY 2.0 FR\uFF09\uFF0C\u4E2D\u6587\u70BA\u793E\u7FA4\u7FFB\u8B6F\u4E26\u81EA\u52D5\u8F49\u70BA\u7E41\u9AD4\uFF0C\u672A\u9010\u53E5\u4EBA\u5DE5\u6821\u5C0D\u3002",
          ),
      )
    );
  }
  var Dm = {
      noun: "\u540D\u8A5E",
      verb: "\u52D5\u8A5E",
      "i-adj": "\u3044\u5F62\u5BB9\u8A5E",
      "na-adj": "\u306A\u5F62\u5BB9\u8A5E",
      adj: "\u5F62\u5BB9\u8A5E",
      adv: "\u526F\u8A5E",
      other: "\u5176\u4ED6",
    },
    Y1 =
      "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u304C\u304E\u3050\u3052\u3054\u3055\u3057\u3059\u305B\u305D\u3056\u3058\u305A\u305C\u305E\u305F\u3061\u3064\u3066\u3068\u3060\u3062\u3065\u3067\u3069\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u3070\u3073\u3076\u3079\u307C\u3071\u3074\u3077\u307A\u307D\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3092\u3093\u3083\u3085\u3087\u3063\u3041\u3043\u3045\u3047\u3049\u3090\u3091\u30FC",
    Ls = (e) =>
      e.replace(/[\u30A1-\u30F6]/g, (t) =>
        String.fromCharCode(t.charCodeAt(0) - 96),
      ),
    Gn = (e) => e.length > 0 && [...Ls(e)].every((t) => Y1.includes(t)),
    Os = (e) => /[\u4E00-\u9FFF\u3005]/.test(e),
    Fl = {
      \u3046: "\u3044",
      \u304F: "\u304D",
      \u3050: "\u304E",
      \u3059: "\u3057",
      \u3064: "\u3061",
      \u306C: "\u306B",
      \u3076: "\u3073",
      \u3080: "\u307F",
      \u308B: "\u308A",
    },
    Pl = new Set([
      "\u5E30\u308B",
      "\u5165\u308B",
      "\u8D70\u308B",
      "\u5207\u308B",
      "\u77E5\u308B",
      "\u8981\u308B",
      "\u6E1B\u308B",
      "\u9650\u308B",
      "\u53C2\u308B",
      "\u558B\u308B",
      "\u63E1\u308B",
      "\u6563\u308B",
      "\u8E74\u308B",
      "\u6ED1\u308B",
      "\u7126\u308B",
      "\u6E7F\u308B",
      "\u7167\u308B",
      "\u7DF4\u308B",
      "\u306A\u308B",
      "\u304B\u3048\u308B",
      "\u306F\u3044\u308B",
      "\u306F\u3057\u308B",
      "\u304D\u308B",
      "\u3057\u308B",
      "\u3044\u308B",
      "\u3078\u308B",
      "\u3042\u308B",
      "\u3068\u308B",
      "\u306E\u308B",
      "\u308F\u304B\u308B",
      "\u304B\u304B\u308B",
      "\u3064\u304F\u308B",
      "\u304A\u304F\u308B",
      "\u3084\u308B",
      "\u3082\u3069\u308B",
      "\u3042\u3064\u307E\u308B",
      "\u3068\u307E\u308B",
      "\u306F\u3058\u307E\u308B",
      "\u307E\u304C\u308B",
      "\u306E\u307C\u308B",
      "\u3059\u308F\u308B",
      "\u308F\u305F\u308B",
      "\u304A\u308F\u308B",
      "\u3042\u304C\u308B",
      "\u3055\u304C\u308B",
      "\u304B\u3076\u308B",
      "\u3046\u308B",
      "\u58F2\u308B",
      "\u53D6\u308B",
      "\u4E57\u308B",
      "\u4F5C\u308B",
      "\u9001\u308B",
      "\u623B\u308B",
      "\u96C6\u307E\u308B",
      "\u6B62\u307E\u308B",
      "\u59CB\u307E\u308B",
      "\u66F2\u304C\u308B",
      "\u767B\u308B",
      "\u5EA7\u308B",
      "\u6E21\u308B",
      "\u7D42\u308F\u308B",
      "\u4E0A\u304C\u308B",
      "\u4E0B\u304C\u308B",
      "\u88AB\u308B",
      "\u5206\u304B\u308B",
      "\u639B\u304B\u308B",
      "\u5206\u308B",
      "\u56F0\u308B",
      "\u6012\u308B",
      "\u7948\u308B",
      "\u79FB\u308B",
      "\u5199\u308B",
      "\u5149\u308B",
      "\u592A\u308B",
      "\u7A4D\u3082\u308B",
      "\u76DB\u308B",
      "\u56DE\u308B",
      "\u5B88\u308B",
      "\u53F1\u308B",
      "\u65AD\u308B",
      "\u796D\u308B",
      "\u8B1D\u308B",
      "\u9811\u5F35\u308B",
      "\u72C2\u3046",
    ]);
  function Bm(e, t) {
    let r = e.trim(),
      o = V.find((m) => m.lang === "jp" && !m.user && m.word === r && m.vclass);
    if (o)
      return {
        vclass: o.vclass,
        vkind: o.vkind,
        masu: o.masu,
        masuReading: o.masuReading,
        vsrc: "\u5167\u5EFA\u8CC7\u6599\uFF08JMdict\uFF09",
        sure: !0,
      };
    let n = t && Gn(t) ? Ls(t) : Gn(r) ? Ls(r) : "";
    if (/(\u3059\u308B|\u70BA\u308B)$/.test(r) && r.length >= 2)
      return {
        vclass: "3",
        vkind: "\u3059\u308B",
        masu: r.replace(/(\u3059\u308B|\u70BA\u308B)$/, "") + "\u3057\u307E\u3059",
        masuReading: n ? n.replace(/\u3059\u308B$/, "") + "\u3057\u307E\u3059" : "",
        vsrc: "\u898F\u5247\u63A8\u6E2C",
        sure: !1,
      };
    if (/(\u6765\u308B|\u4F86\u308B|\u304F\u308B)$/.test(r))
      return {
        vclass: "3",
        vkind: "\u4F86\u308B",
        masu: r.replace(/(\u6765\u308B|\u4F86\u308B|\u304F\u308B)$/, (m) =>
          m === "\u304F\u308B" ? "\u304D\u307E\u3059" : m[0] + "\u307E\u3059",
        ),
        masuReading: n ? n.replace(/\u304F\u308B$/, "\u304D\u307E\u3059") : "",
        vsrc: "\u898F\u5247\u63A8\u6E2C",
        sure: !1,
      };
    let a = r[r.length - 1];
    if (!Fl[a]) return null;
    let i = "1";
    if (a === "\u308B") {
      let m = n || "",
        f = !m && Gn(r[r.length - 2] ?? "") ? Ls(r[r.length - 2]) : "",
        j = m.length >= 2 ? m[m.length - 2] : f;
      !Pl.has(r) &&
      !Pl.has(m) &&
      j &&
      "\u3044\u304D\u304E\u3057\u3058\u3061\u3062\u306B\u3072\u3073\u3074\u307F\u308A\u3048\u3051\u3052\u305B\u305C\u3066\u3067\u306D\u3078\u3079\u307A\u3081\u308C".includes(
        j,
      )
        ? (i = "2")
        : !m && !f && !Pl.has(r) && !Os(r) && (i = "");
    }
    if (!i) return null;
    let c = r.slice(0, -1),
      d = n ? n.slice(0, -1) : "",
      p = i === "2" ? c + "\u307E\u3059" : c + Fl[a] + "\u307E\u3059",
      x = n
        ? i === "2"
          ? d + "\u307E\u3059"
          : d + Fl[n[n.length - 1]] + "\u307E\u3059"
        : "";
    return {
      vclass: i,
      vkind: i === "2" ? "\u4E00\u6BB5" : "\u4E94\u6BB5",
      masu: p,
      masuReading: x,
      vsrc: "\u898F\u5247\u63A8\u6E2C",
      sure: !1,
    };
  }
  function q1(e, t, r) {
    let o = e.trim(),
      n = [],
      a = V.find((d) => d.lang === "jp" && !d.user && d.word === o && d.pos),
      i = r;
    if (
      (!i &&
        a &&
        ((i =
          {
            \u540D\u8A5E: "noun",
            \u52D5\u8A5E: "verb",
            \u3044\u5F62\u5BB9\u8A5E: "i-adj",
            \u306A\u5F62\u5BB9\u8A5E: "na-adj",
            \u526F\u8A5E: "adv",
          }[a.pos] ?? ""),
        i &&
          n.push(
            "\u8A5E\u6027\uFF1A\u8207\u5167\u5EFA\u55AE\u5B57\u76F8\u540C",
          )),
      !i)
    ) {
      let d = Bm(o, t);
      d && (d.sure || (Gn(o) ? o.length >= 2 : Os(o)))
        ? ((i = "verb"),
          n.push(
            "\u8A5E\u6027\uFF1A\u4F9D\u5B57\u5C3E\u63A8\u6E2C\u70BA\u52D5\u8A5E",
          ))
        : /[\u3044\u3057]$/.test(o) &&
            o.length >= 3 &&
            (!Os(o) || /[\u4E00-\u9FFF][\u3041-\u3093]*\u3044$/.test(o)) &&
            !/(\u304D\u308C\u3044|\u304A\u3057\u3083\u308C)$/.test(o)
          ? ((i = "i-adj"),
            n.push(
              "\u8A5E\u6027\uFF1A\u4F9D\u5B57\u5C3E\u63A8\u6E2C\u70BA\u3044\u5F62\u5BB9\u8A5E",
            ))
          : /^[\u30A0-\u30FF]+$/.test(o)
            ? ((i = "noun"),
              n.push(
                "\u8A5E\u6027\uFF1A\u7247\u5047\u540D\u8A5E\uFF0C\u63A8\u6E2C\u70BA\u540D\u8A5E",
              ))
            : (Os(o) || Gn(o)) &&
              ((i = "noun"),
              n.push(
                "\u8A5E\u6027\uFF1A\u7121\u6CD5\u5224\u65B7\uFF0C\u66AB\u5B9A\u540D\u8A5E",
              ));
    }
    let c = { pos: i, notes: n };
    if (i === "verb") {
      let d = Bm(o, t);
      d && ((c.verb = d), n.push(`\u52D5\u8A5E\u985E\u5225\uFF1A${d.vsrc}`));
    }
    return c;
  }
  var X1 = [
    [/(ung|heit|keit|schaft|tion|it\u00E4t|ie)$/i, "feminine"],
    [/(chen|lein)$/i, "neuter"],
    [/(ismus)$/i, "masculine"],
  ];
  function ef(e, t, r) {
    let o = e.trim().replace(/\s+/g, " "),
      n = [],
      a = r,
      i = o.match(/^(der|die|das)\s+(.+)$/i);
    if (i) {
      o = i[2];
      let p = { der: "masculine", die: "feminine", das: "neuter" }[
        i[1].toLowerCase()
      ];
      (a ||
        ((a = p),
        n.push("\u6027\u5225\uFF1A\u4F9D\u4F60\u8F38\u5165\u7684\u51A0\u8A5E")),
        t || (t = "noun"));
    }
    let c = V.find(
        (p) =>
          p.lang === "de" &&
          !p.user &&
          p.word.replace(/^(der|die|das) /, "") === o,
      ),
      d = t;
    if (!d && c) {
      let p = c.grammar ?? "";
      ((d = p.startsWith("noun")
        ? "noun"
        : p.startsWith("verb")
          ? "verb"
          : p.startsWith("adj")
            ? "adj"
            : p.startsWith("adv")
              ? "adv"
              : ""),
        d &&
          n.push(
            "\u8A5E\u6027\uFF1A\u8207\u5167\u5EFA\u55AE\u5B57\u76F8\u540C",
          ));
    }
    if (
      (d ||
        (/^[A-Z\u00C4\u00D6\u00DC]/.test(o) && !/\s/.test(o)
          ? ((d = "noun"),
            n.push(
              "\u8A5E\u6027\uFF1A\u9996\u5B57\u6BCD\u5927\u5BEB\uFF0C\u63A8\u6E2C\u70BA\u540D\u8A5E",
            ))
          : /^[a-z\u00E4\u00F6\u00FC\u00DF]+(en|ern|eln)$/.test(o) && o.length >= 4
            ? ((d = "verb"),
              n.push(
                "\u8A5E\u6027\uFF1A\u5B57\u5C3E -en\uFF0C\u63A8\u6E2C\u70BA\u52D5\u8A5E",
              ))
            : /\s/.test(o)
              ? ((d = "other"),
                n.push(
                  "\u8A5E\u6027\uFF1A\u591A\u500B\u5B57\uFF0C\u8996\u70BA\u7247\u8A9E",
                ))
              : ((d = "other"),
                n.push(
                  "\u8A5E\u6027\uFF1A\u7121\u6CD5\u5224\u65B7\uFF0C\u6B78\u70BA\u5176\u4ED6",
                ))),
      d === "noun" && !a)
    ) {
      let p = X1.find(([x]) => x.test(o));
      p &&
        ((a = p[1]),
        n.push(
          "\u6027\u5225\uFF1A\u4F9D\u5B57\u5C3E -" +
            o.match(p[0])[0] +
            " \u63A8\u6E2C\uFF0C\u8ACB\u81EA\u884C\u78BA\u8A8D",
        ));
    }
    return { text: o, pos: d, gender: a, notes: n };
  }
  var Um = {
      noun: "\u6211\u7684\u540D\u8A5E",
      verb: "\u6211\u7684\u52D5\u8A5E",
      "i-adj": "\u6211\u7684\u5F62\u5BB9\u8A5E",
      "na-adj": "\u6211\u7684\u5F62\u5BB9\u8A5E",
      adj: "\u6211\u7684\u5F62\u5BB9\u8A5E",
      adv: "\u6211\u7684\u526F\u8A5E\u8207\u5176\u4ED6",
      other: "\u6211\u7684\u526F\u8A5E\u8207\u5176\u4ED6",
    },
    tf = (e) =>
      Array.isArray(e) &&
      e.length <= 500 &&
      e.every(
        (t) =>
          t &&
          typeof t.id == "string" &&
          /^s-\d+$/.test(t.id) &&
          (t.lang === "jp" || t.lang === "de") &&
          typeof t.word == "string" &&
          t.word.length > 0 &&
          t.word.length <= 80 &&
          typeof t.note == "string" &&
          t.note.length <= 200 &&
          typeof t.added == "string",
      );
  function Am(e, t, r, o, n) {
    let a = r.lang === "de" ? "ude-" : "ujp-",
      i = r.id
        ? 0
        : Math.max(
            0,
            ...t
              .filter((y) => y.id.startsWith(a))
              .map((y) => Number(y.id.split("-")[1])),
          ) + 1,
      c = { ...r, id: r.id || a + i },
      d = [...e.books],
      p = [...o],
      x = r.lang === "de" ? "debook-" : "ubook-",
      m = n.trim();
    if (m) {
      let y = d.find(
        (k) => k.name === m && (r.lang === "de") === k.id.startsWith("debook-"),
      );
      if (y) p.push(y.id);
      else {
        let k = x + "u" + Date.now().toString(36);
        (d.push({ id: k, name: m }), p.push(k));
      }
    }
    if (!p.length) {
      let y = Object.entries(Dm).find(([, u]) => u === r.pos)?.[0] ?? "",
        k = Um[y] ?? "\u6211\u7684\u55AE\u5B57\uFF08\u672A\u5206\u985E\uFF09",
        T =
          x +
          "auto-" +
          (Um[y]
            ? k === "\u6211\u7684\u540D\u8A5E"
              ? "noun"
              : k === "\u6211\u7684\u52D5\u8A5E"
                ? "verb"
                : k === "\u6211\u7684\u5F62\u5BB9\u8A5E"
                  ? "adj"
                  : "other"
            : "misc");
      (d.some((u) => u.id === T) || d.push({ id: T, name: k }), p.push(T));
    }
    let f = {
        books: d,
        entries: { ...e.entries, [c.id]: { books: [...new Set(p)] } },
      },
      j = [...t, c];
    return !_s(f) || !$n(j) ? null : { catalog: f, userWords: j, id: c.id };
  }
  var rf = "plus-pro-max-ultra/Shinnigammi-vocab",
    of = "inbox/staging.json",
    Rs = "mmv:ghtoken";
  async function nf(e, t) {
    let r = "https://api.github.com/repos/" + rf + "/contents/" + of,
      o = {
        Authorization: "Bearer " + t,
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      n = JSON.stringify(
        { updated: new Date().toISOString(), items: e },
        null,
        1,
      ),
      a = btoa(unescape(encodeURIComponent(n)));
    for (let i = 0; i < 3; i++) {
      let c = await fetch(r + "?ref=main&t=" + Date.now(), { headers: o }),
        d;
      if (c.ok) d = (await c.json()).sha;
      else {
        if (c.status === 401 || c.status === 403)
          return (
            "\u91D1\u9470\u7121\u6548\u6216\u6B0A\u9650\u4E0D\u8DB3\uFF08HTTP " +
            c.status +
            "\uFF09"
          );
        if (c.status !== 404)
          return "\u8B80\u53D6\u5931\u6557\uFF08HTTP " + c.status + "\uFF09";
      }
      let p = await fetch(r, {
        method: "PUT",
        headers: { ...o, "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "inbox: staging update",
          content: a,
          sha: d,
          branch: "main",
        }),
      });
      if (p.ok) return "ok";
      if (!(p.status === 409 || p.status === 422))
        return p.status === 401 || p.status === 403 || p.status === 404
          ? "\u5BEB\u5165\u88AB\u62D2\uFF08HTTP " +
              p.status +
              "\uFF09\uFF0C\u8ACB\u78BA\u8A8D\u91D1\u9470\u6B0A\u9650\u70BA\u9019\u500B\u5132\u5B58\u5EAB\u7684 Contents \u8B80\u5BEB"
          : "\u5BEB\u5165\u5931\u6557\uFF08HTTP " + p.status + "\uFF09";
    }
    return "\u591A\u6B21\u885D\u7A81\uFF0C\u8ACB\u7A0D\u5F8C\u518D\u8A66";
  }
  var af = "+16504709738";
  function sf({
    items: e,
    ready: t,
    onAdd: r,
    onRemove: o,
    syncMsg: n,
    onSync: a,
    find: i,
  }) {
    let [c, d] = (0, s.useState)(() => {
        try {
          return localStorage.getItem(Rs) ? "saved" : "";
        } catch {
          return "";
        }
      }),
      [p, x] = (0, s.useState)(""),
      [m, f] = (0, s.useState)(""),
      [j, y] = (0, s.useState)(""),
      [k, T] = (0, s.useState)(""),
      u = (E) => (/[\u3040-\u30FF\u4E00-\u9FFF]/.test(E) ? "jp" : "de"),
      h = () =>
        `\u3010\u55AE\u5B57\u66AB\u5B58\u3011
` +
        e.map(
          (E) =>
            (E.lang === "jp" ? "\u65E5" : "\u5FB7") +
            "\uFF5C" +
            E.word +
            (E.note ? "\uFF5C" + E.note : ""),
        ).join(`
`),
      g = () => {
        let E = m.trim();
        if (!E) return;
        if (e.some((D) => D.word === E))
          return T("\u66AB\u5B58\u5340\u5DF2\u6709\u9019\u500B\u55AE\u5B57");
        if (i(u(E), E))
          return T(
            "\u55AE\u5B57\u5EAB\u5DF2\u6709\u9019\u500B\u55AE\u5B57\uFF0C\u4E0D\u9700\u8981\u66AB\u5B58",
          );
        let N = Date.now();
        (r({
          id: "s-" + N,
          lang: u(E),
          word: E,
          note: j.trim(),
          added: new Date().toISOString().slice(0, 10),
        }),
          f(""),
          y(""),
          T("\u5DF2\u52A0\u5165\u66AB\u5B58\u5340"));
      },
      b = async () => {
        let E = h(),
          N = navigator;
        try {
          if (N.share) {
            (await N.share({ text: E }),
              T(
                "\u5DF2\u958B\u555F\u5206\u4EAB\uFF0C\u8ACB\u9078\u64C7\u8A0A\u606F\u4E26\u50B3\u7D66\u52A9\u7406",
              ));
            return;
          }
        } catch (D) {
          if (D?.name === "AbortError") return;
        }
        try {
          (await navigator.clipboard.writeText(E),
            T(
              "\u5DF2\u8907\u88FD\uFF0C\u8ACB\u8CBC\u5230\u8A0A\u606F\u50B3\u7D66\u52A9\u7406",
            ));
        } catch {
          T(
            "\u7121\u6CD5\u81EA\u52D5\u5206\u4EAB\uFF0C\u8ACB\u9577\u6309\u4E0B\u65B9\u6587\u5B57\u8907\u88FD",
          );
        }
      };
    return s.default.createElement(
      "div",
      { className: "add-form" },
      s.default.createElement(
        "label",
        { className: "field" },
        "\u55AE\u5B57",
        s.default.createElement("input", {
          value: m,
          maxLength: 80,
          onChange: (E) => f(E.target.value),
        }),
      ),
      s.default.createElement(
        "label",
        { className: "field" },
        "\u5099\u8A3B\uFF08\u53EF\u7559\u7A7A\uFF0C\u4F8B\u5982\u610F\u601D\u6216\u51FA\u8655\uFF09",
        s.default.createElement("input", {
          value: j,
          maxLength: 200,
          onChange: (E) => y(E.target.value),
        }),
      ),
      s.default.createElement(
        "button",
        { className: "primary-action", disabled: !t, onClick: g },
        "\u52A0\u5165\u66AB\u5B58\u5340",
      ),
      k && s.default.createElement("p", { role: "status" }, k),
      n &&
        s.default.createElement("p", { className: "muted", role: "status" }, n),
      s.default.createElement(
        "details",
        { className: "sync-setup" },
        s.default.createElement(
          "summary",
          null,
          "\u52A9\u7406\u540C\u6B65\u91D1\u9470",
          c
            ? "\uFF08\u5DF2\u8A2D\u5B9A\uFF09"
            : "\uFF08\u5C1A\u672A\u8A2D\u5B9A\uFF09",
        ),
        s.default.createElement(
          "p",
          { className: "muted" },
          "\u8CBC\u4E0A\u53EA\u9650\u9019\u500B\u5132\u5B58\u5EAB\u3001\u50C5 Contents \u8B80\u5BEB\u7684 GitHub \u91D1\u9470\u3002\u91D1\u9470\u53EA\u5B58\u5728\u9019\u652F\u624B\u6A5F\u7684\u700F\u89BD\u5668\uFF0C\u4E0D\u6703\u9032\u5099\u4EFD\uFF0C\u4E5F\u4E0D\u6703\u5BEB\u9032\u7DB2\u9801\u7A0B\u5F0F\u3002",
        ),
        s.default.createElement(
          "label",
          { className: "field" },
          "\u91D1\u9470",
          s.default.createElement("input", {
            type: "password",
            autoComplete: "off",
            value: p,
            onChange: (E) => x(E.target.value),
          }),
        ),
        s.default.createElement(
          "button",
          {
            className: "end-test",
            onClick: () => {
              let E = p.trim();
              if (E)
                try {
                  (localStorage.setItem(Rs, E), d("saved"), x(""), a());
                } catch {}
            },
          },
          "\u5132\u5B58\u91D1\u9470\u4E26\u540C\u6B65",
        ),
        c &&
          s.default.createElement(
            "button",
            {
              className: "end-test",
              onClick: () => {
                try {
                  localStorage.removeItem(Rs);
                } catch {}
                d("");
              },
            },
            "\u6E05\u9664\u91D1\u9470",
          ),
        c &&
          s.default.createElement(
            "button",
            { className: "end-test", onClick: a },
            "\u7ACB\u5373\u540C\u6B65",
          ),
      ),
      s.default.createElement(
        "h3",
        null,
        "\u5F85\u8655\u7406\uFF08",
        e.length,
        "\uFF09",
      ),
      !e.length &&
        s.default.createElement(
          "p",
          { className: "muted" },
          "\u76EE\u524D\u6C92\u6709\u66AB\u5B58\u7684\u55AE\u5B57\u3002",
        ),
      e.map((E) =>
        s.default.createElement(
          "div",
          { className: "phrase-row", key: E.id },
          s.default.createElement(
            "strong",
            null,
            E.word,
            "\u3000",
            s.default.createElement(
              "span",
              { className: "muted" },
              E.lang === "jp" ? "\u65E5\u6587" : "\u5FB7\u6587",
            ),
          ),
          E.note && s.default.createElement("span", null, E.note),
          s.default.createElement(
            "button",
            { className: "end-test", onClick: () => o(E.id) },
            "\u79FB\u9664",
          ),
        ),
      ),
      !!e.length &&
        s.default.createElement(
          s.default.Fragment,
          null,
          s.default.createElement(
            "button",
            { className: "primary-action", onClick: b },
            c
              ? "\u5099\u7528\uFF1A\u7528\u8A0A\u606F\u50B3\u7D66\u52A9\u7406"
              : "\u50B3\u7D66\u52A9\u7406",
          ),
          s.default.createElement(
            "a",
            {
              className: "end-test",
              href: "sms:" + af + "&body=" + encodeURIComponent(h()),
            },
            "\u6539\u7528\u7C21\u8A0A\u9023\u7D50\u958B\u555F",
          ),
          s.default.createElement("textarea", {
            readOnly: !0,
            rows: Math.min(8, e.length + 2),
            value: h(),
            onFocus: (E) => E.currentTarget.select(),
          }),
        ),
      s.default.createElement(
        "p",
        { className: "muted" },
        "\u52A9\u7406\u6BCF\u5929\u8655\u7406\u4E00\u6B21\uFF1A\u5206\u985E\u4E26\u88DC\u4E0A\u8B80\u97F3\u3001\u610F\u601D\u3001\u4F8B\u53E5\u7B49\uFF0C\u5B8C\u6210\u5F8C\u6703\u81EA\u52D5\u51FA\u73FE\u5728\u300C\u6211\u7684\u55AE\u5B57\u672C\u300D\u3002\u8A2D\u5B9A\u91D1\u9470\u5F8C\uFF0C\u66AB\u5B58\u5340\u6703\u81EA\u52D5\u540C\u6B65\u5230\u52A9\u7406\uFF1B\u6C92\u6709\u91D1\u9470\u6642\u8ACB\u6309\u300C\u50B3\u7D66\u52A9\u7406\u300D\u6216\u76F4\u63A5\u50B3\u8A0A\u606F\u3002",
      ),
    );
  }
  var cf = [
      ["", "\u4E0D\u6307\u5B9A"],
      ["noun", "\u540D\u8A5E"],
      ["verb", "\u52D5\u8A5E"],
      ["i-adj", "\u3044\u5F62\u5BB9\u8A5E"],
      ["na-adj", "\u306A\u5F62\u5BB9\u8A5E"],
      ["adv", "\u526F\u8A5E"],
      ["other", "\u5176\u4ED6"],
    ],
    lf = [
      ["", "\u4E0D\u6307\u5B9A"],
      ["noun", "\u540D\u8A5E"],
      ["verb", "\u52D5\u8A5E"],
      ["adj", "\u5F62\u5BB9\u8A5E"],
      ["adv", "\u526F\u8A5E"],
      ["other", "\u5176\u4ED6"],
    ];
  function df({
    lang: e,
    books: t,
    ready: r,
    count: o,
    find: n,
    onSave: a,
    onOpen: i,
  }) {
    let [c, d] = (0, s.useState)(e),
      [p, x] = (0, s.useState)(""),
      [m, f] = (0, s.useState)(""),
      [j, y] = (0, s.useState)(""),
      [k, T] = (0, s.useState)(""),
      [u, h] = (0, s.useState)(""),
      [g, b] = (0, s.useState)(""),
      [E, N] = (0, s.useState)(""),
      [D, F] = (0, s.useState)(""),
      [K, w] = (0, s.useState)(""),
      [X, ve] = (0, s.useState)([]),
      [Je, G] = (0, s.useState)(""),
      [ze, oe] = (0, s.useState)(""),
      [R, U] = (0, s.useState)(""),
      [P, tr] = (0, s.useState)(""),
      Ce = t.filter((_) =>
        c === "jp" ? !_.id.startsWith("debook-") : _.id.startsWith("debook-"),
      ),
      Lo = () => {
        (x(""),
          f(""),
          y(""),
          T(""),
          h(""),
          b(""),
          N(""),
          F(""),
          w(""),
          U(""),
          G(""),
          ve([]));
      },
      J = (_) => {
        let W = p.trim();
        if (!W) return oe("\u8ACB\u8F38\u5165\u55AE\u5B57");
        if (c === "jp" && !j.trim())
          return oe("\u8ACB\u8F38\u5165\u4E2D\u6587\u610F\u601D");
        if (c === "de" && !k.trim() && !j.trim())
          return oe("\u8ACB\u8F38\u5165\u610F\u601D");
        let Ft =
          n(c, W) ||
          (c === "de"
            ? n(c, "der " + W) || n(c, "die " + W) || n(c, "das " + W)
            : void 0);
        if (Ft && !_) return (U(Ft.id), oe(""));
        let Pt = [],
          _t = W,
          Ze = u,
          Q = g,
          Se = null;
        if (c === "de") {
          let he = ef(W, u, g);
          ((_t = he.text),
            (Ze = he.pos),
            (Q = he.gender),
            Pt.push(...he.notes));
        } else {
          let he = q1(W, m, u);
          ((Ze = he.pos), (Se = he.verb), Pt.push(...he.notes));
        }
        let ut = { masculine: "der", feminine: "die", neuter: "das" }[Q],
          rr =
            c === "de"
              ? Ze === "noun"
                ? "noun" +
                  (Q ? " \xB7 " + Q : "") +
                  (E.trim() ? "; plural " + E.trim() : "")
                : Ze === "verb"
                  ? "verb"
                  : Ze === "adj"
                    ? "adjective"
                    : Ze === "adv"
                      ? "adverb"
                      : void 0
              : void 0,
          Et = {
            id: "",
            lang: c,
            word: c === "de" && Ze === "noun" && ut ? ut + " " + _t : _t,
            reading: c === "jp" ? m.trim() || W : "",
            en: c === "de" ? k.trim() || j.trim() : k.trim(),
            zh: j.trim() || k.trim(),
            pos: Dm[Ze] || void 0,
            grammar: rr,
            contentType: /\s/.test(W) ? "phrase" : "word",
            examples: D.trim()
              ? [
                  {
                    text: D.trim(),
                    zh: c === "jp" ? K.trim() : "",
                    en: c === "de" ? K.trim() : void 0,
                    src: "user",
                  },
                ]
              : [],
            ...(Se
              ? {
                  vclass: Se.vclass,
                  vkind: Se.vkind,
                  masu: Se.masu,
                  masuReading: Se.masuReading,
                  vsrc: Se.vsrc,
                }
              : {}),
            user: {
              added: new Date().toISOString().slice(0, 10),
              src: "manual",
              auto: Pt.length > 0,
              notes: Pt,
            },
          },
          be = a(Et, X, Je);
        if (!/^u(jp|de)-\d+$/.test(be ?? ""))
          return oe(be ?? "\u5132\u5B58\u5931\u6557");
        (tr(be), oe("\u5DF2\u5132\u5B58\u3002"), Lo());
      };
    return s.default.createElement(
      "div",
      { className: "add-form" },
      s.default.createElement(
        "div",
        { className: "chip-row" },
        [
          ["jp", "\u65E5\u6587"],
          ["de", "\u5FB7\u6587"],
        ].map(([_, W]) =>
          s.default.createElement(
            "button",
            {
              key: _,
              className: "chip" + (c === _ ? " on" : ""),
              onClick: () => {
                (d(_),
                  ve([]),
                  h(""),
                  U(""),
                  y(""),
                  T(""),
                  f(""),
                  b(""),
                  N(""),
                  G(""));
              },
            },
            W,
          ),
        ),
      ),
      s.default.createElement(
        "label",
        { className: "field" },
        "\u55AE\u5B57",
        s.default.createElement("input", {
          value: p,
          maxLength: 80,
          lang: c === "jp" ? "ja" : "de",
          onChange: (_) => {
            let W = _.target.value;
            (x(W),
              U(""),
              /[\u3040-\u30FF\u4E00-\u9FFF]/.test(W) && c !== "jp"
                ? (d("jp"), ve([]), h(""))
                : /^[A-Za-z\u00C4\u00D6\u00DC\u00E4\u00F6\u00FC\u00DF\s.\x27-]+$/.test(W) &&
                  W.trim() &&
                  c !== "de" &&
                  (d("de"), ve([]), h("")));
          },
        }),
      ),
      c === "jp" &&
        s.default.createElement(
          "label",
          { className: "field" },
          "\u8B80\u97F3\uFF08\u5047\u540D\uFF0C\u53EF\u7559\u7A7A\uFF09",
          s.default.createElement("input", {
            value: m,
            maxLength: 80,
            lang: "ja",
            onChange: (_) => f(_.target.value),
          }),
        ),
      c === "jp"
        ? s.default.createElement(
            "label",
            { className: "field" },
            "\u4E2D\u6587\u610F\u601D",
            s.default.createElement("input", {
              value: j,
              maxLength: 100,
              onChange: (_) => y(_.target.value),
            }),
          )
        : s.default.createElement(
            "label",
            { className: "field" },
            "\u82F1\u6587\u610F\u601D",
            s.default.createElement("input", {
              value: k,
              maxLength: 100,
              onChange: (_) => T(_.target.value),
            }),
          ),
      s.default.createElement(
        "label",
        { className: "field" },
        "\u8A5E\u6027",
        s.default.createElement(
          "select",
          { value: u, onChange: (_) => h(_.target.value) },
          (c === "jp" ? cf : lf).map(([_, W]) =>
            s.default.createElement("option", { key: _, value: _ }, W),
          ),
        ),
      ),
      c === "de" &&
        u === "noun" &&
        s.default.createElement(
          s.default.Fragment,
          null,
          s.default.createElement(
            "label",
            { className: "field" },
            "\u6027\u5225",
            s.default.createElement(
              "select",
              { value: g, onChange: (_) => b(_.target.value) },
              s.default.createElement("option", { value: "" }, "\u672A\u586B"),
              s.default.createElement(
                "option",
                { value: "masculine" },
                "\u967D\u6027 der",
              ),
              s.default.createElement(
                "option",
                { value: "feminine" },
                "\u9670\u6027 die",
              ),
              s.default.createElement(
                "option",
                { value: "neuter" },
                "\u4E2D\u6027 das",
              ),
            ),
          ),
          s.default.createElement(
            "label",
            { className: "field" },
            "\u8907\u6578\uFF08\u53EF\u7559\u7A7A\uFF09",
            s.default.createElement("input", {
              value: E,
              maxLength: 60,
              lang: "de",
              onChange: (_) => N(_.target.value),
            }),
          ),
        ),
      s.default.createElement(
        "label",
        { className: "field" },
        "\u4F8B\u53E5\uFF08\u53EF\u7559\u7A7A\uFF09",
        s.default.createElement("input", {
          value: D,
          maxLength: 200,
          lang: c === "jp" ? "ja" : "de",
          onChange: (_) => F(_.target.value),
        }),
      ),
      D.trim() &&
        s.default.createElement(
          "label",
          { className: "field" },
          "\u4F8B\u53E5\u7FFB\u8B6F\uFF08\u53EF\u7559\u7A7A\uFF09",
          s.default.createElement("input", {
            value: K,
            maxLength: 200,
            onChange: (_) => w(_.target.value),
          }),
        ),
      s.default.createElement("h3", null, "\u5B58\u5230\u54EA\u88E1"),
      s.default.createElement(
        "p",
        { className: "muted" },
        "\u90FD\u4E0D\u9078\u5C31\u4F9D\u8A5E\u6027\u81EA\u52D5\u6B78\u985E\uFF08\u6211\u7684\u540D\u8A5E\u3001\u6211\u7684\u52D5\u8A5E\u3001\u6211\u7684\u5F62\u5BB9\u8A5E\u3001\u6211\u7684\u526F\u8A5E\u8207\u5176\u4ED6\uFF09\u3002\u53EF\u591A\u9078\u3002",
      ),
      Ce.map((_) =>
        s.default.createElement(
          "label",
          { className: "check-row", key: _.id },
          s.default.createElement("input", {
            type: "checkbox",
            checked: X.includes(_.id),
            onChange: () =>
              ve(X.includes(_.id) ? X.filter((W) => W !== _.id) : [...X, _.id]),
          }),
          _.name,
        ),
      ),
      s.default.createElement(
        "label",
        { className: "field" },
        "\u65B0\u589E\u55AE\u5B57\u672C\uFF08\u53EF\u7559\u7A7A\uFF09",
        s.default.createElement("input", {
          value: Je,
          maxLength: 40,
          onChange: (_) => G(_.target.value),
        }),
      ),
      R &&
        s.default.createElement(
          "div",
          { className: "card" },
          s.default.createElement(
            "p",
            null,
            "\u5DF2\u6709\u76F8\u540C\u7684\u55AE\u5B57\uFF08\u5167\u5EFA\u6216\u81EA\u5DF1\u65B0\u589E\uFF09\u3002",
          ),
          s.default.createElement(
            "button",
            { className: "end-test", onClick: () => i(R) },
            "\u67E5\u770B\u73FE\u6709\u689D\u76EE",
          ),
          s.default.createElement(
            "button",
            { className: "primary-action", onClick: () => J(!0) },
            "\u4ECD\u8981\u65B0\u589E",
          ),
        ),
      s.default.createElement(
        "button",
        { className: "primary-action", disabled: !r, onClick: () => J(!1) },
        "\u5132\u5B58\u55AE\u5B57",
      ),
      s.default.createElement(
        "p",
        { className: "muted" },
        "\u53EA\u60F3\u5148\u8A18\u4E0B\u4F86\uFF1F\u5230\u300C\u66F4\u591A > \u66AB\u5B58\u5340\u300D\uFF0C\u4E4B\u5F8C\u7531\u52A9\u7406\u5206\u985E\u88DC\u8CC7\u8A0A\u3002",
      ),
      ze && s.default.createElement("p", { role: "status" }, ze),
      P &&
        ze === "\u5DF2\u5132\u5B58\u3002" &&
        s.default.createElement(
          "button",
          { className: "end-test", onClick: () => i(P) },
          "\u67E5\u770B\u525B\u65B0\u589E\u7684\u55AE\u5B57",
        ),
      s.default.createElement(
        "p",
        { className: "muted" },
        "\u5DF2\u65B0\u589E ",
        o,
        " \u500B\u81EA\u8A02\u55AE\u5B57\u3002\u8CC7\u6599\u5B58\u5728\u9019\u500B\u700F\u89BD\u5668\uFF0C\u4E26\u5305\u542B\u5728\u5099\u4EFD\u8CC7\u6599\u4E2D\u3002",
      ),
    );
  }
  function pf({
    word: e,
    index: t,
    count: r,
    bookName: o,
    meaning: n,
    extra: a,
    saveExtra: i,
    level: c,
    setLevel: d,
    move: p,
    close: x,
    tab: m,
    setTab: f,
    prefs: j,
    setPrefs: y,
    ready: k,
    speak: T,
    books: u,
    checked: h,
    toggleBook: g,
    shuffle: b,
    deleteUser: E,
  }) {
    let [N, D] = (0, s.useState)(!1),
      [F, K] = (0, s.useState)(!1),
      [w, X] = (0, s.useState)(!1),
      [ve, Je] = (0, s.useState)(!1),
      [G, ze] = (0, s.useState)(!1),
      oe = (0, s.useRef)(null);
    ((0, s.useEffect)(() => {
      let U = (P) => {
        P.target?.closest("input,textarea,select,button") ||
          (P.key === "ArrowLeft" && p(-1),
          P.key === "ArrowRight" && p(1),
          P.key === "Escape" && x());
      };
      return (
        window.addEventListener("keydown", U),
        () => window.removeEventListener("keydown", U)
      );
    }, [t]),
      (0, s.useEffect)(() => {
        (D(!1), K(!1), X(!1), Je(!1), ze(!1), (oe.current = null));
      }, [e.id]),
      (0, s.useEffect)(() => {
        j.autoPlay && k && T(e);
      }, [e.id]));
    let R = [
      ["examples", "\u4F8B\u53E5"],
      ["meaning", "\u610F\u601D"],
      ["collocation", "\u642D\u914D"],
      ["similar", "\u76F8\u4F3C"],
    ];
    return s.default.createElement(
      "section",
      {
        className: "detail-screen",
        style: { "--word-size": j.size + "px" },
        onTouchStart: (U) => {
          U.target.closest("button,a,input,textarea,select,label,summary") ||
            (oe.current = { x: U.touches[0].clientX, y: U.touches[0].clientY });
        },
        onTouchEnd: (U) => {
          if (!oe.current) return;
          let P = U.changedTouches[0].clientX - oe.current.x,
            tr = U.changedTouches[0].clientY - oe.current.y;
          ((oe.current = null),
            Math.abs(P) > 60 &&
              Math.abs(P) > Math.abs(tr) * 1.5 &&
              p(P < 0 ? 1 : -1));
        },
      },
      s.default.createElement(
        "div",
        { className: "screen-header" },
        s.default.createElement(
          "button",
          {
            className: "hdr-back",
            "aria-label": "\u8FD4\u56DE\u55AE\u5B57\u5217\u8868",
            onClick: x,
          },
          "\u2039",
        ),
        s.default.createElement(
          "div",
          { className: "hdr-title" },
          s.default.createElement("strong", null, t + 1, "/", r),
          s.default.createElement(
            "small",
            null,
            o || "\u5168\u90E8\u689D\u76EE",
          ),
        ),
        s.default.createElement(
          "div",
          { className: "hdr-actions" },
          s.default.createElement(
            "button",
            { "aria-label": "\u96A8\u6A5F\u6392\u5E8F", onClick: b },
            "\u21C4",
          ),
          s.default.createElement(
            "button",
            { "aria-label": "\u6717\u8B80\u55AE\u5B57", onClick: () => T(e) },
            "\u25B6",
          ),
          s.default.createElement(
            "button",
            { "aria-label": "\u55AE\u5B57\u9078\u9805", onClick: () => D(!N) },
            "\u22EF",
          ),
        ),
      ),
      N &&
        s.default.createElement(
          "div",
          { className: "option-panel" },
          s.default.createElement(
            "div",
            { className: "stepper-row" },
            s.default.createElement("span", null, "\u5B57\u9AD4\u5927\u5C0F"),
            s.default.createElement(
              "button",
              {
                "aria-label": "\u7E2E\u5C0F\u5B57\u9AD4",
                onClick: () => {
                  let U = [18, 20, 24, 28],
                    P = U.indexOf(j.size);
                  y({ ...j, size: U[Math.max(0, P - 1)] });
                },
              },
              "\u2039",
            ),
            s.default.createElement("strong", null, j.size),
            s.default.createElement(
              "button",
              {
                "aria-label": "\u653E\u5927\u5B57\u9AD4",
                onClick: () => {
                  let U = [18, 20, 24, 28],
                    P = U.indexOf(j.size);
                  y({ ...j, size: U[Math.min(U.length - 1, P + 1)] });
                },
              },
              "\u203A",
            ),
          ),
                    s.default.createElement(
            "label",
            { className: "field" },
            "\u6717\u8B80\u901F\u5EA6\uFF1A" + Math.round((j.rate ?? 0.9) * 100) / 100 + "x",
            s.default.createElement("input", {
              type: "range",
              min: 0.5,
              max: 1.5,
              step: 0.05,
              value: j.rate ?? 0.9,
              onChange: (U) => y({ ...j, rate: Number(U.target.value) }),
            }),
            s.default.createElement(
              "span",
              { className: "range-ends" },
              "0.5x \u2013 1.5x",
            ),
          ),
          s.default.createElement(
            "label",
            { className: "check-row" },
            s.default.createElement("input", {
              type: "checkbox",
              checked: !!j.autoPlay,
              onChange: (U) => y({ ...j, autoPlay: U.target.checked }),
            }),
            "\u6253\u958B\u55AE\u5B57\u6642\u81EA\u52D5\u6717\u8B80",
          ),
          s.default.createElement(
            "label",
            { className: "check-row" },
            s.default.createElement("input", {
              type: "checkbox",
              checked: !!j.hideMeaning,
              onChange: (U) => y({ ...j, hideMeaning: U.target.checked }),
            }),
            "\u5148\u85CF\u8D77\u91CB\u7FA9\uFF0C\u9EDE\u4E00\u4E0B\u624D\u986F\u793A",
          ),
          s.default.createElement(
            "p",
            { className: "muted" },
            "\u5DE6\u53F3\u6ED1\u52D5\u6216\u6309\u65B9\u5411\u9375\u5207\u63DB\u3002\u5206\u9801\u9078\u64C7\u6703\u8A18\u5728\u6B64\u88DD\u7F6E\u3002",
          ),
        ),
      s.default.createElement(
        "div",
        { className: "word-hero" },
        s.default.createElement(
          "h1",
          { lang: e.lang === "jp" ? "ja" : "de" },
          e.word,
        ),
        s.default.createElement(
          "div",
          { className: "word-actions" },
          s.default.createElement(
            "button",
            {
              "aria-label": "\u52A0\u5165\u55AE\u5B57\u7C3F",
              disabled: !k,
              className: F ? "chosen" : "",
              onClick: () => K(!F),
            },
            "\u2295",
          ),
          s.default.createElement(
            "button",
            {
              "aria-label": a.star
                ? "\u79FB\u9664\u66F8\u7C64"
                : "\u52A0\u5165\u66F8\u7C64",
              disabled: !k,
              className: a.star ? "chosen" : "",
              onClick: () => i({ star: !a.star }),
            },
            a.star ? "\u2605" : "\u2606",
          ),
          s.default.createElement(
            "button",
            {
              "aria-label":
                "\u719F\u6089\u5EA6\uFF1A" +
                Mt[c] +
                "\uFF0C\u9EDE\u4E00\u4E0B\u66F4\u6539",
              disabled: !k,
              onClick: () => Je(!0),
            },
            s.default.createElement("i", { className: "dot level-" + c }),
          ),
        ),
        s.default.createElement(
          "p",
          { className: "phonetic" },
          e.ipa ?? e.reading,
          e.romaji ? " \xB7 " + e.romaji : "",
          " ",
          s.default.createElement(
            "button",
            { "aria-label": "\u6717\u8B80\u767C\u97F3", onClick: () => T(e) },
            "\u25D6))",
          ),
        ),
        j.hideMeaning && !G
          ? s.default.createElement(
              "button",
              {
                className: "word-meaning meaning-hidden",
                onClick: () => ze(!0),
              },
              "\u9EDE\u4E00\u4E0B\u986F\u793A\u91CB\u7FA9",
            )
          : s.default.createElement("p", { className: "word-meaning" }, n),
        It(e) &&
          s.default.createElement(
            "p",
            { className: "de-gram" },
            s.default.createElement("b", null, It(e).label),
            It(e).detail && s.default.createElement("span", null, It(e).detail),
          ),
        e.vclass &&
          s.default.createElement(
            "p",
            { className: "de-gram" },
            s.default.createElement("b", null, Ll(e)),
            s.default.createElement(
              "span",
              null,
              "\u8FAD\u66F8\u5F62\uFF1A",
              e.word,
              "\uFF08",
              e.reading,
              "\uFF09\u3000\u307E\u3059\u5F62\uFF1A",
              e.masu,
              "\uFF08",
              e.masuReading,
              "\uFF09",
            ),
            s.default.createElement(
              "span",
              { className: "muted" },
              "\u5206\u985E\u4F9D\u64DA\uFF1A",
              e.vsrc,
            ),
          ),
        s.default.createElement(
          "small",
          null,
          L1(e),
          e.pos ? " \xB7 " + e.pos : "",
          e.loan ? " \xB7 " + e.loan : "",
          " \xB7 ",
          Mt[c],
        ),
      ),
      ve &&
        s.default.createElement(Nm, {
          level: c,
          onPick: (U) => d(U),
          onClose: () => Je(!1),
        }),
      F &&
        s.default.createElement(
          "div",
          { className: "option-panel" },
          s.default.createElement("h3", null, "\u52A0\u5165\u55AE\u5B57\u7C3F"),
          u.map((U) =>
            s.default.createElement(
              "label",
              { className: "check-row", key: U.id },
              s.default.createElement("input", {
                type: "checkbox",
                checked: h.includes(U.id),
                onChange: () => g(U.id),
              }),
              U.name,
            ),
          ),
        ),
      s.default.createElement(
        "div",
        { className: "detail-tabs", role: "tablist" },
        R.map(([U, P]) =>
          s.default.createElement(
            "button",
            {
              role: "tab",
              "aria-selected": m === U,
              className: m === U ? "selected" : "",
              key: U,
              onClick: () => f(U),
            },
            P,
          ),
        ),
        s.default.createElement(
          "button",
          {
            "aria-label": "\u7DE8\u8F2F\u500B\u4EBA\u7B46\u8A18",
            onClick: () => X(!w),
          },
          "\u270E",
        ),
      ),
      s.default.createElement(
        "div",
        { className: "detail-body", role: "tabpanel" },
        m === "examples" &&
          s.default.createElement(Ws, {
            word: e,
            target: e.lang === "jp" ? "zh" : "en",
            heading: !1,
            speak: T,
          }),
        " ",
        m === "meaning" &&
          s.default.createElement(
            s.default.Fragment,
            null,
            s.default.createElement(
              "div",
              { className: "definition-box" },
              s.default.createElement(
                "small",
                null,
                e.lang === "jp"
                  ? "\u7E41\u9AD4\u4E2D\u6587\u91CB\u7FA9"
                  : "English meaning",
              ),
              e.senses
                ? s.default.createElement(
                    "ol",
                    { className: "sense-list" },
                    e.senses.map((U, P) =>
                      s.default.createElement(
                        "li",
                        { key: P },
                        e.lang === "jp" ? U.zh : U.en,
                        U.note
                          ? s.default.createElement(
                              "span",
                              { className: "muted" },
                              "\uFF08",
                              U.note,
                              "\uFF09",
                            )
                          : "",
                      ),
                    ),
                  )
                : s.default.createElement(
                    "p",
                    null,
                    e.lang === "jp" ? e.zh : e.en,
                  ),
              e.lang === "de" &&
                s.default.createElement(
                  "details",
                  null,
                  s.default.createElement(
                    "summary",
                    null,
                    "\u986F\u793A\u4E2D\u6587",
                  ),
                  e.senses
                    ? s.default.createElement(
                        "ol",
                        { className: "sense-list" },
                        e.senses.map((U, P) =>
                          s.default.createElement("li", { key: P }, U.zh),
                        ),
                      )
                    : s.default.createElement("p", null, e.zh),
                ),
            ),
            e.parts?.length &&
              s.default.createElement(
                "div",
                { className: "parts-list" },
                s.default.createElement("h3", null, "\u9010\u5B57\u62C6\u89E3"),
                e.parts.map((pt, i) =>
                  s.default.createElement(
                    "p",
                    { key: i, className: "part-row" },
                    s.default.createElement(
                      "span",
                      { className: "part-w", lang: e.lang === "jp" ? "ja" : "de" },
                      pt.w,
                    ),
                    s.default.createElement("span", { className: "part-m" }, pt.m),
                  ),
                ),
              ),
            e.note &&
              s.default.createElement(
                "p",
                { className: "usage-note" },
                "\u63D0\u793A\uFF1A",
                e.note,
              ),
            s.default.createElement(Ws, {
              word: e,
              target: e.lang === "jp" ? "zh" : "en",
              speak: T,
            }),
          ),
        m === "collocation" &&
          s.default.createElement(
            s.default.Fragment,
            null,
            s.default.createElement("h3", null, "\u642D\u914D"),
            e.collocations?.length
              ? s.default.createElement(
                  "div",
                  { className: "phrase-list" },
                  e.collocations.map((U, P) =>
                    s.default.createElement(
                      "div",
                      { className: "phrase-row", key: P },
                      s.default.createElement("strong", null, U.text),
                      s.default.createElement(
                        "span",
                        null,
                        e.lang === "de" && U.en ? U.en + " \xB7 " : "",
                        U.src === "corpus"
                          ? "\u8A9E\u6599\u51FA\u73FE " + U.n + " \u6B21"
                          : U.zh,
                      ),
                    ),
                  ),
                  e.collocations.some((U) => U.src === "corpus") &&
                    s.default.createElement(
                      "p",
                      { className: "muted" },
                      "\u642D\u914D\u7531 Tatoeba \u65E5\u6587\u4F8B\u53E5\u8A9E\u6599\u7D71\u8A08\u800C\u5F97\uFF08\u81EA\u52D5\u6574\u7406\uFF0C\u975E\u4EBA\u5DE5\u5BE9\u5B9A\uFF0C\u7121\u4E2D\u6587\u91CB\u7FA9\uFF09\u3002",
                    ),
                )
              : s.default.createElement(
                  "p",
                  { className: "muted" },
                  "\u5C1A\u672A\u52A0\u5165\u7D93\u6838\u5C0D\u7684\u642D\u914D\u8CC7\u6599\u3002\u53EF\u5728\u4E0B\u65B9\u8A18\u9304\u81EA\u5DF1\u7684\u7B46\u8A18\u3002",
                ),
            s.default.createElement(
              "label",
              { className: "field" },
              "\u6211\u7684\u642D\u914D\u7B46\u8A18",
              s.default.createElement("textarea", {
                maxLength: 800,
                disabled: !k,
                value: a.collocation ?? "",
                onChange: (U) => i({ collocation: U.target.value }),
              }),
            ),
          ),
        m === "similar" &&
          s.default.createElement(
            s.default.Fragment,
            null,
            s.default.createElement(
              "h3",
              null,
              "\u6613\u6DF7\u6DC6\uFF0F\u8FD1\u7FA9\u5B57",
            ),
            e.similar?.length
              ? s.default.createElement(
                  "div",
                  { className: "phrase-list" },
                  e.similar.map((U, P) =>
                    s.default.createElement(
                      "div",
                      { className: "phrase-row", key: P },
                      s.default.createElement(
                        "strong",
                        null,
                        U.refId
                          ? s.default.createElement(
                              er,
                              { to: "/word/" + U.refId },
                              U.word,
                            )
                          : U.word,
                        U.reading ? "\u3000" + U.reading : "",
                      ),
                      s.default.createElement("span", null, U.note),
                    ),
                  ),
                )
              : s.default.createElement(
                  "p",
                  { className: "muted" },
                  "\u5C1A\u672A\u52A0\u5165\u7D93\u6838\u5C0D\u7684\u76F8\u4F3C\u5B57\u8CC7\u6599\uFF0C\u4E0D\u81EA\u52D5\u63A8\u6E2C\u8FD1\u7FA9\u95DC\u4FC2\u3002",
                ),
            s.default.createElement(
              "label",
              { className: "field" },
              "\u6211\u7684\u76F8\u4F3C\u5B57\u7B46\u8A18",
              s.default.createElement("textarea", {
                maxLength: 800,
                disabled: !k,
                value: a.similar ?? "",
                onChange: (U) => i({ similar: U.target.value }),
              }),
            ),
          ),
        e.grammar &&
          !It(e) &&
          s.default.createElement(
            "section",
            { className: "supplement" },
            s.default.createElement("h3", null, "\u88DC\u5145"),
            s.default.createElement("p", null, e.grammar),
          ),
        (w || a.note) &&
          s.default.createElement(
            "label",
            { className: "field personal-note" },
            "\u500B\u4EBA\u7B46\u8A18",
            s.default.createElement("textarea", {
              disabled: !k,
              maxLength: 800,
              placeholder:
                "\u8A18\u4E0B\u5BB9\u6613\u5FD8\u8A18\u7684\u5730\u65B9",
              value: a.note ?? "",
              onChange: (U) => i({ note: U.target.value }),
            }),
          ),
        e.user &&
          s.default.createElement(
            "section",
            { className: "supplement" },
            s.default.createElement(
              "p",
              { className: "muted" },
              "\u81EA\u5DF1\u65B0\u589E\u7684\u55AE\u5B57\uFF08",
              e.user.added,
              "\uFF09",
            ),
            !!e.user.notes?.length &&
              s.default.createElement(
                "ul",
                { className: "muted" },
                e.user.notes.map((U, P) =>
                  s.default.createElement(
                    "li",
                    { key: P },
                    "\u81EA\u52D5\u5224\u65B7\uFF1A",
                    U,
                  ),
                ),
              ),
            s.default.createElement(
              "button",
              {
                className: "end-test",
                onClick: () => {
                  window.confirm(
                    "\u522A\u9664\u9019\u500B\u81EA\u8A02\u55AE\u5B57\uFF1F",
                  ) && E(e.id);
                },
              },
              "\u522A\u9664\u9019\u500B\u81EA\u8A02\u55AE\u5B57",
            ),
          ),
        e.sourceUrl &&
          s.default.createElement(
            Ms,
            { href: e.sourceUrl },
            "\u8B80\u97F3\u8207\u8A5E\u5F62\u4F86\u6E90",
          ),
        s.default.createElement(
          "div",
          { className: "detail-arrows" },
          s.default.createElement(
            "button",
            { disabled: !t, onClick: () => p(-1) },
            "\u2039 \u4E0A\u4E00\u500B",
          ),
          s.default.createElement(
            "button",
            { disabled: t >= r - 1, onClick: () => p(1) },
            "\u4E0B\u4E00\u500B \u203A",
          ),
        ),
        s.default.createElement(
          er,
          { to: "/grammar" },
          "\u524D\u5F80\u6587\u6CD5\u5340 \u203A",
        ),
      ),
    );
  }
  function hf({
    mode: e,
    ids: t,
    words: r,
    meaning: o,
    ready: n,
    onGrade: a,
    onFamiliar: i,
    extras: c,
    catalog: d,
    onStar: p,
    onRetryWrong: x,
    onExit: m,
    speak: f,
    quizFam: j,
    spellExp: spExp,
  }) {
    let [y, k] = (0, s.useState)(0),
      [T, u] = (0, s.useState)(!1),
      [h, g] = (0, s.useState)([]),
      [b, E] = (0, s.useState)(""),
      [N, D] = (0, s.useState)(!1),
      [F, K] = (0, s.useState)(null),
      [ord, setOrd] = (0, s.useState)(null),
      [cardFront, setCardFront] = (0, s.useState)(() => {
        try {
          return localStorage.getItem("mmv:card-front.v1") || "word";
        } catch {
          return "word";
        }
      }),
      [fcPanel, setFcPanel] = (0, s.useState)(!1),
      [autoPlay, setAutoPlay] = (0, s.useState)(!1),
      [dragX, setDragX] = (0, s.useState)(0),
      order =
        e === "cards" && ord
          ? ord
          : e === "kana"
            ? t.filter((A) => {
                let O = r.find((ne) => ne.id === A);
                return (
                  O &&
                  O.lang === "jp" &&
                  /[\u4E00-\u9FFF\u3005]/.test(O.word) &&
                  O.reading &&
                  O.reading !== O.word
                );
              })
            : t,
      kd = y % 2 === 0,
      w = r.find((A) => A.id === order[y]),
      [X, ve] = (0, s.useState)(0),
      [Je, G] = (0, s.useState)([]),
      [ze, oe] = (0, s.useState)([]),
      R = w ? (w.lang === "jp" ? w.reading : w.word) : "",
      [U, P] = (0, s.useState)(!1),
      [tr, Ce] = (0, s.useState)(!1),
      [Lo, J] = (0, s.useState)([]),
      [expOpen, setExpOpen] = (0, s.useState)(!1);
    (0, s.useEffect)(() => {
      if (
        (ve(w ? Math.floor(Math.random() * w.examples.length) : 0),
        w &&
          J(
            Dt([
              w,
              ...Dt(
                r.filter(
                  e === "kana"
                    ? (A) =>
                        A.lang === "jp" &&
                        A.id !== w.id &&
                        /[\u4E00-\u9FFF\u3005]/.test(A.word) &&
                        A.reading &&
                        A.reading !== A.word &&
                        A.reading !== w.reading
                    : (A) => A.lang === w.lang && A.id !== w.id && o(A) !== o(w),
                ),
              ).slice(0, 3),
            ]),
          ),
        e === "tiles" && w)
      ) {
        let A = w.lang === "jp" ? w.reading : w.word,
          O =
            w.lang === "jp"
              ? "\u3042\u3044\u3046\u3048\u304A\u304B\u304D\u304F\u3051\u3053\u3055\u3057\u3059\u305B\u305D\u305F\u3061\u3064\u3066\u3068\u306A\u306B\u306C\u306D\u306E\u306F\u3072\u3075\u3078\u307B\u307E\u307F\u3080\u3081\u3082\u3084\u3086\u3088\u3089\u308A\u308B\u308C\u308D\u308F\u3092\u3093\u304C\u304E\u3050\u3052\u3054\u3056\u3058\u305A\u305C\u305E\u3060\u3062\u3065\u3067\u3069\u3070\u3073\u3076\u3079\u307C\u3071\u3074\u3077\u307A\u307D\u30FC\u3063\u3083\u3085\u3087"
              : "abcdefghijklmnopqrstuvwxyz",
          ne = Math.min(4, Math.max(2, Math.ceil([...A].length / 3))),
          He = 0;
        for (let Ye of w.id + A) He = (He * 31 + Ye.charCodeAt(0)) >>> 0;
        let Oo = [];
        for (let Ye = 0; Ye < ne; Ye++)
          ((He = (He * 1103515245 + 12345) >>> 0), Oo.push(O[He % O.length]));
        let Qr = (Ye) => {
          let kt = O.indexOf(Ye);
          return kt >= 0 ? kt : 1e3 + Ye.charCodeAt(0);
        };
        (G([...A, ...Oo].sort((Ye, kt) => Qr(Ye) - Qr(kt))), oe([]));
      }
      (u(!1), D(!1), E(""), K(null), P(!1), Ce(!1), setExpOpen(!1));
    }, [y]);
    let openExp = () => {
        (setExpOpen(!0),
          history.pushState({ ...(history.state || {}), exp: 1 }, ""));
      },
      closeExp = () => {
        history.state && history.state.exp
          ? history.back()
          : setExpOpen(!1);
      };
    (0, s.useEffect)(() => {
      if (!expOpen) return;
      let A = () => setExpOpen(!1);
      return (
        window.addEventListener("popstate", A),
        () => window.removeEventListener("popstate", A)
      );
    }, [expOpen]);
    let _ = (A, O) => {
        if (!(!w || T || !n)) {
          if (O === void 0 && (a(w, A, e), j)) {
            let ne = d.entries[w.id]?.familiarity ?? 0,
              He = A
                ? Math.max(
                    ne,
                    Math.min(
                      e === "cards" ? Mt.length - 2 : Mt.length - 1,
                      ne + 1,
                    ),
                  )
                : Math.max(1, ne - 1);
            He !== ne && i(w.id, He);
          }
          (O !== void 0 && j && i(w.id, O),
            e === "spell" && !A && _t.current?.blur(),
            g([
              ...h,
              {
                id: w.id,
                correct: A,
                level: O,
                prevFam: d.entries[w.id]?.familiarity ?? 0,
              },
            ]),
            u(!0),
            D(!0));
        }
      },
      W = (A) =>
        A.normalize("NFKC")
          .trim()
          .toLocaleLowerCase()
          .replace(/[\u3002.!?\s]/g, "")
          .replace(/[\u30A1-\u30F6]/g, (O) =>
            String.fromCharCode(O.charCodeAt(0) - 96),
          ),
      Ft = (A) => /[\u4E00-\u9FFF\u3005]/.test(A),
      Pt =
        e === "spell" &&
        !!w &&
        w.lang === "jp" &&
        Ft(w.word) &&
        W(b) === W(w.reading),
      _t = (0, s.useRef)(null),
      dragRef = (0, s.useRef)(null);
    (0, s.useEffect)(() => {
      if (e !== "spell") return;
      let A = setTimeout(() => _t.current?.focus(), 60);
      return () => clearTimeout(A);
    }, [y, e]);
    (0, s.useEffect)(() => {
      if (!T || !h.length) return;
      if (e === "spell" && !h[h.length - 1].correct) return;
      if (e !== "spell" && e !== "cards") return;
      let A = setTimeout(() => k((O) => O + 1), e === "cards" ? 450 : 750);
      return () => clearTimeout(A);
    }, [T, h.length, e]);
    (0, s.useEffect)(() => {
      if (!autoPlay || e !== "cards" || !w) return;
      let A = setTimeout(() => D(!0), 1200),
        O = setTimeout(() => k((ne) => ne + 1), 2600);
      return () => {
        (clearTimeout(A), clearTimeout(O));
      };
    }, [autoPlay, y, e, w && w.id]);
    let Ze =
        e === "spell" && w
          ? W(b) === W(w.word) ||
            (w.lang === "jp" &&
              (W(b) === W(w.reading) ||
                (!!w.masu && W(b) === W(w.masu)) ||
                (!!w.masuReading && W(b) === W(w.masuReading))))
          : !1,
      Q = (A) => {
        if (T || ze.includes(A)) return;
        let O = [...ze, A];
        (oe(O),
          O.length === [...R].length &&
            _(W(O.map((ne) => Je[ne]).join("")) === W(R)));
      },
      Se =
        e === "kana"
          ? "\u6F22\u5B57 \u21C4 \u5047\u540D"
          : e === "cards"
          ? "\u5B57\u5361"
          : e === "spell"
          ? "\u6253\u5B57\u62FC\u5B57"
          : e === "tiles"
            ? "\u5B57\u584A\u62FC\u5B57"
            : e === "familiar"
              ? "\u719F\u6089\u5EA6"
              : (r.find((A) => A.id === t[0])?.lang ?? "jp") === "jp"
                ? e === "reverse"
                  ? "\u4E2D \u2192 \u65E5"
                  : "\u65E5 \u2192 \u4E2D"
                : e === "reverse"
                  ? "EN \u2192 DE"
                  : "DE \u2192 EN",
      ut = h.filter((A) => A.correct).length,
      rr = h.filter((A) => !A.correct).length,
      Et = h.filter((A) => !A.correct).map((A) => A.id),
      be = h.length ? Math.round((ut / h.length) * 100) : 0,
      he = w ? (d.entries[w.id]?.familiarity ?? 0) : 0;
    return s.default.createElement(
      "section",
      { className: "quiz-screen" },
      s.default.createElement(
        "div",
        { className: "screen-header" },
        s.default.createElement(
          "button",
          {
            className: "hdr-back",
            "aria-label": "\u96E2\u958B\u6E2C\u9A57",
            onClick: m,
          },
          e === "cards" ? "\u2715" : "\u2039",
        ),
        s.default.createElement(
          "div",
          { className: "hdr-title" },
          s.default.createElement(
            "strong",
            null,
            w ? y + 1 : h.length,
            "/",
            order.length,
          ),
          s.default.createElement("small", null, Se),
        ),
        s.default.createElement(
          "div",
          { className: "hdr-actions" },
          w &&
            s.default.createElement(
              s.default.Fragment,
              null,
              e === "cards"
                ? s.default.createElement(
                    "button",
                    {
                      className: "fc-hdr-text",
                      "aria-label": "\u5B57\u5361\u8A2D\u5B9A",
                      onClick: () => setFcPanel(!fcPanel),
                    },
                    "\u8A2D\u5B9A",
                  )
                : s.default.createElement(
                    s.default.Fragment,
                    null,
                    s.default.createElement(
                      "button",
                      {
                        "aria-label": c[w.id]?.star
                          ? "\u79FB\u9664\u66F8\u7C64"
                          : "\u52A0\u5165\u66F8\u7C64",
                        className: c[w.id]?.star ? "chosen" : "",
                        onClick: () => p(w.id, !c[w.id]?.star),
                      },
                      c[w.id]?.star ? "\u2605" : "\u2606",
                    ),
                    s.default.createElement(
                      "button",
                      {
                        "aria-label": "\u719F\u6089\u5EA6\uFF1A" + Mt[he],
                        onClick: () => Ce(!0),
                      },
                      s.default.createElement("i", {
                        className: "dot level-" + he,
                      }),
                    ),
                  ),
            ),
        ),
      ),
      tr &&
        w &&
        s.default.createElement(Nm, {
          level: he,
          onPick: (A) => i(w.id, A),
          onClose: () => Ce(!1),
        }),
      w
        ? s.default.createElement(
            s.default.Fragment,
            null,
            e !== "cards" &&
            s.default.createElement(
              "div",
              { className: "quiz-prompt" },
              s.default.createElement(
                "small",
                null,
                e === "kana"
                  ? kd
                    ? "\u770B\u6F22\u5B57\uFF0C\u9078\u8B80\u97F3"
                    : "\u770B\u8B80\u97F3\uFF0C\u9078\u6F22\u5B57"
                  : e === "reverse" || e === "spell" || e === "tiles"
                  ? "\u770B\u610F\u601D\uFF0C\u60F3\u55AE\u5B57"
                  : "\u770B\u55AE\u5B57\uFF0C\u60F3\u610F\u601D",
              ),
              s.default.createElement(
                "h1",
                { lang: w.lang === "jp" ? "ja" : "de" },
                e === "kana"
                  ? kd
                    ? w.word
                    : w.reading
                  : e === "reverse" || e === "spell" || e === "tiles"
                  ? o(w)
                  : w.word,
              ),
              e === "spell" &&
                s.default.createElement(
                  "span",
                  { className: "letter-hint" },
                  w.lang === "jp"
                    ? Ft(w.word)
                      ? "\uFF08\u6F22\u5B57\u5BEB\u6CD5 " +
                        [...w.word].length +
                        " \u5B57\uFF1B\u4E5F\u53EF\u76F4\u63A5\u8F38\u5165\u5047\u540D\uFF09"
                      : "\uFF08" + [...w.word].length + " \u5B57\uFF09"
                    : "\uFF08" +
                        ([...w.word].length - [...b].length) +
                        "\uFF09",
                ),
              e === "spell" &&
                s.default.createElement(
                  "div",
                  { className: "spell-row" },
                  T &&
                    s.default.createElement(
                      "b",
                      { className: h[h.length - 1]?.correct ? "mark-ok" : "mark-bad" },
                      h[h.length - 1]?.correct ? "\u2713" : "\u2717",
                    ),
                s.default.createElement("input", {
                  className: "spell-input" + (T ? (h[h.length - 1]?.correct ? " sp-ok" : " sp-bad") : ""),
                  ref: _t,
                  lang: w.lang === "jp" ? "ja" : "de",
                  inputMode: "text",
                  enterKeyHint: "done",
                  autoFocus: !0,
                  autoComplete: "off",
                  autoCapitalize: "none",
                  autoCorrect: "off",
                  spellCheck: !1,
                  name: w.lang === "jp" ? "answer-ja" : "answer-de",
                  "data-lang": w.lang === "jp" ? "ja" : "de",
                  "aria-disabled": T,
                  value: b,
                  "aria-label": "\u8F38\u5165\u55AE\u5B57",
                  onChange: (A) => {
                    T || E(A.target.value);
                  },
                  onKeyDown: (A) => {
                    A.key === "Enter" && _(Ze);
                  },
                }),
                ),
              e === "spell" &&
                T &&
                !h[h.length - 1]?.correct &&
                s.default.createElement(
                  "div",
                  { className: "spell-answer" },
                  w.word,
                  w.lang === "jp" && w.reading !== w.word ? "\u3000" + w.reading : "",
                ),
              s.default.createElement(
                "button",
                {
                  "aria-label": "\u6717\u8B80\u984C\u76EE",
                  onClick: () => f(w),
                },
                "\u25D6))",
              ),
              (e === "familiar" ||
                (e === "forward" &&
                  (w.lang === "de" || w.reading !== w.word))) &&
                s.default.createElement(
                  "div",
                  { className: "card-phon" },
                  w.lang === "jp" ? w.reading : (w.ipa ?? w.reading),
                ),
              (e === "forward" || e === "reverse" || e === "familiar" || e === "cards" || e === "kana") &&
                s.default.createElement(
                  "button",
                  {
                    className: "exp-open",
                    "aria-label": "\u67E5\u770B\u8A73\u7D30\u8AAA\u660E",
                    onClick: openExp,
                  },
                  "i",
                ),
            ),
            (e === "forward" || e === "reverse" || e === "kana") &&
              s.default.createElement(
                "div",
                { className: "quiz-options" },
                Lo.map((A) =>
                  s.default.createElement(
                    "button",
                    {
                      disabled: !n,
                      className: T
                        ? A.id === w.id
                          ? "correct-option"
                          : F === A.id
                            ? "wrong-option"
                            : ""
                        : "",
                      key: A.id,
                      onClick: () => {
                        T
                          ? A.id === w.id
                            ? k(y + 1)
                            : A.id === F && openExp()
                          : (K(A.id), _(A.id === w.id));
                      },
                    },
                    T &&
                      A.id === w.id &&
                      s.default.createElement(
                        "b",
                        { className: "mark-ok" },
                        "\u2713",
                      ),
                    T &&
                      F === A.id &&
                      A.id !== w.id &&
                      s.default.createElement(
                        "b",
                        { className: "mark-bad" },
                        "\u2717",
                      ),
                    e === "kana"
                      ? kd
                        ? A.reading
                        : A.word
                      : e === "reverse"
                        ? A.lang === "jp" && A.reading && A.reading !== A.word
                          ? A.word + "\u3000" + A.reading
                          : A.word
                        : o(A),
                  ),
                ),
                s.default.createElement(
                  "button",
                  {
                    disabled: !n,
                    className: "idk-btn" + (T && F === "idk" ? " wrong-option" : ""),
                    onClick: () => {
                      T ? F === "idk" && openExp() : (K("idk"), _(!1));
                    },
                  },
                  T &&
                    F === "idk" &&
                    s.default.createElement("b", { className: "mark-bad" }, "\u2717"),
                  "\u4E0D\u6703",
                ),
              ),
            e === "tiles" &&
              w &&
              s.default.createElement(
                s.default.Fragment,
                null,
                s.default.createElement(
                  "div",
                  { className: "tile-answer" },
                  ze.length === 0 &&
                    s.default.createElement(
                      "span",
                      { className: "muted" },
                      "\u9EDE\u4E0B\u65B9\u5B57\u584A\uFF0C\u62FC\u51FA",
                      w.lang === "jp"
                        ? "\u8B80\u97F3\uFF08\u5047\u540D\uFF09"
                        : "\u55AE\u5B57",
                    ),
                  ze.map((A, O) =>
                    s.default.createElement(
                      "button",
                      {
                        key: O,
                        disabled: T,
                        onClick: () => oe(ze.filter((ne, He) => He !== O)),
                      },
                      Je[A],
                    ),
                  ),
                ),
                s.default.createElement(
                  "div",
                  { className: "tile-grid" },
                  Je.map((A, O) =>
                    s.default.createElement(
                      "button",
                      {
                        key: O,
                        disabled: T || ze.includes(O),
                        className: ze.includes(O) ? "tile-used" : "",
                        onClick: () => Q(O),
                      },
                      A,
                    ),
                  ),
                  s.default.createElement(
                    "button",
                    {
                      className: "tile-idk",
                      disabled: T,
                      onClick: () => _(!1),
                    },
                    "\u4E0D\u6703",
                  ),
                  s.default.createElement(
                    "button",
                    {
                      className: "tile-back",
                      "aria-label": "\u522A\u9664\u4E00\u500B\u5B57",
                      disabled: T || !ze.length,
                      onClick: () => oe(ze.slice(0, -1)),
                    },
                    "\u232B",
                  ),
                ),
              ),
            e === "cards" &&
              s.default.createElement(
                s.default.Fragment,
                null,
                s.default.createElement(
                  "div",
                  { className: "fc-progress" },
                  s.default.createElement("i", {
                    style: {
                      width:
                        Math.round(((y + (T ? 1 : 0)) / order.length) * 100) +
                        "%",
                    },
                  }),
                ),
                s.default.createElement(
                  "div",
                  { className: "fc-meta" },
                  s.default.createElement(
                    "span",
                    { className: "fc-cnt-no" },
                    rr,
                  ),
                  s.default.createElement(
                    "span",
                    { className: "fc-cnt-ok" },
                    ut,
                  ),
                ),
                s.default.createElement(
                  "div",
                  {
                    className:
                      "flashcard fc-swipe" +
                      (dragX !== 0 ? " fc-dragging" : "") +
                      (dragX > 30 ? " fc-right" : dragX < -30 ? " fc-left" : "") +
                      (T
                        ? h[h.length - 1]?.correct
                          ? " fc-out-r"
                          : " fc-out-l"
                        : ""),
                    style: T
                      ? void 0
                      : {
                          transform:
                            "translateX(" +
                            dragX +
                            "px) rotate(" +
                            dragX / 18 +
                            "deg)",
                        },
                    onPointerDown: (A) => {
                      if (T) return;
                      ((dragRef.current = { x: A.clientX, moved: !1 }),
                        A.currentTarget.setPointerCapture?.(A.pointerId));
                    },
                    onPointerMove: (A) => {
                      let O = dragRef.current;
                      if (!O) return;
                      let ne = A.clientX - O.x;
                      (Math.abs(ne) > 8 && (O.moved = !0), setDragX(ne));
                    },
                    onPointerUp: () => {
                      let O = dragRef.current;
                      if (!O) return;
                      dragRef.current = null;
                      let ne = dragX;
                      (setDragX(0),
                        Math.abs(ne) > 90 ? _(ne > 0) : O.moved || D(!N));
                    },
                  },
                  s.default.createElement(
                    "button",
                    {
                      className: "fc-speaker",
                      "aria-label": "\u6717\u8B80",
                      onPointerDown: (A) => A.stopPropagation(),
                      onClick: (A) => {
                        (A.stopPropagation(), f(w));
                      },
                    },
                    "\u25D6))",
                  ),
                  s.default.createElement(
                    "button",
                    {
                      className: "fc-star" + (c[w.id]?.star ? " chosen" : ""),
                      "aria-label": c[w.id]?.star
                        ? "\u79FB\u9664\u66F8\u7C64"
                        : "\u52A0\u5165\u66F8\u7C64",
                      onPointerDown: (A) => A.stopPropagation(),
                      onClick: (A) => {
                        (A.stopPropagation(), p(w.id, !c[w.id]?.star));
                      },
                    },
                    c[w.id]?.star ? "\u2605" : "\u2606",
                  ),
                  s.default.createElement(
                    "button",
                    {
                      className: "fc-info",
                      "aria-label": "\u8AAA\u660E",
                      onPointerDown: (A) => A.stopPropagation(),
                      onClick: (A) => {
                        (A.stopPropagation(), openExp());
                      },
                    },
                    "i",
                  ),
                  (N ? cardFront === "meaning" : cardFront === "word")
                    ? s.default.createElement(
                        "h1",
                        { lang: w.lang === "jp" ? "ja" : "de" },
                        w.word,
                      )
                    : s.default.createElement(
                        "p",
                        { className: "word-meaning fc-back-text" },
                        o(w),
                      ),
                  dragX > 30 &&
                    s.default.createElement(
                      "b",
                      { className: "fc-label-ok" },
                      "\u8A8D\u8B58",
                    ),
                  dragX < -30 &&
                    s.default.createElement(
                      "b",
                      { className: "fc-label-no" },
                      "\u4E0D\u719F\u6089",
                    ),
                ),
                s.default.createElement(
                  "div",
                  { className: "fc-bottom" },
                  s.default.createElement(
                    "button",
                    {
                      className: "fc-text-btn",
                      "aria-label": "\u5FA9\u539F\u4E0A\u4E00\u5F35",
                      disabled: !h.length,
                      onClick: () => {
                        if (!h.length) return;
                        let A = h[h.length - 1];
                        (j && i(A.id, A.prevFam),
                          g(h.slice(0, -1)),
                          u(!1),
                          k((O) => Math.max(0, O - 1)));
                      },
                    },
                    "\u5FA9\u539F",
                  ),
                  s.default.createElement(
                    "button",
                    {
                      "aria-label": "\u81EA\u52D5\u64AD\u653E",
                      className: autoPlay ? "chosen" : "",
                      onClick: () => setAutoPlay(!autoPlay),
                    },
                    "\u25B6",
                  ),
                ),
                fcPanel &&
                  s.default.createElement(
                    s.default.Fragment,
                    null,
                    s.default.createElement("div", {
                      className: "fc-sheet-backdrop",
                      onClick: () => setFcPanel(!1),
                    }),
                    s.default.createElement(
                      "div",
                      {
                        className: "fc-sheet",
                        role: "dialog",
                        "aria-label": "\u5B57\u5361\u8A2D\u5B9A",
                      },
                      s.default.createElement(
                        "button",
                        {
                          className: "fc-close",
                          "aria-label": "\u95DC\u9589",
                          onClick: () => setFcPanel(!1),
                        },
                        "\u2715",
                      ),
                      s.default.createElement("h3", null, "\u5B57\u5361\u8A2D\u5B9A"),
                    s.default.createElement(
                      "div",
                      { className: "mode-tiles" },
                      [
                        ["word", "\u55AE\u5B57"],
                        ["meaning", "\u610F\u601D"],
                      ].map(([A, O]) =>
                        s.default.createElement(
                          "button",
                          {
                            key: A,
                            className: cardFront === A ? "tile-on" : "",
                            onClick: () => {
                              setCardFront(A);
                              try {
                                localStorage.setItem("mmv:card-front.v1", A);
                              } catch {}
                            },
                          },
                          "\u6B63\u9762\uFF1A" + O,
                        ),
                      ),
                    ),
                    s.default.createElement(
                      "button",
                      {
                        onClick: () =>
                          setOrd([...order.slice(0, y), ...Dt(order.slice(y))]),
                      },
                      "\u21C4 " + "\u91CD\u65B0\u6D17\u724C",
                    ),
                    s.default.createElement(
                      "button",
                      {
                        onClick: () => {
                          (setFcPanel(!1), Ce(!0));
                        },
                      },
                      "\u719F\u6089\u5EA6\uFF1A" + Mt[he],
                    ),
                    ),
                  ),
              ),
            e === "familiar" &&
              s.default.createElement(
                s.default.Fragment,
                null,
                s.default.createElement(
                  "div",
                  { className: "fam-pick" },
                  Mt.slice(1).map((A, O) =>
                    s.default.createElement(
                      "button",
                      {
                        disabled: !n,
                        key: A,
                        className:
                          "fam-btn lv-" +
                          (O + 1) +
                          (T && h[h.length - 1]?.level === O + 1 ? " on" : ""),
                        onClick: () =>
                          T
                            ? h[h.length - 1]?.level === O + 1 && k(y + 1)
                            : (_(O >= 2, O + 1), O + 1 <= 2 && openExp()),
                      },
                      A,
                    ),
                  ),
                ),
              ),
            (e === "forward" || e === "reverse" || e === "familiar" || e === "cards") &&
              expOpen &&
              s.default.createElement("div", {
                className: "exp-backdrop",
                onClick: closeExp,
              }),
            (e === "forward" || e === "reverse" || e === "familiar" || e === "cards"
              ? expOpen
              : T && (e !== "spell" || (spExp && !h[h.length - 1]?.correct))) &&
              s.default.createElement(
                "div",
                {
                  className:
                    "quiz-feedback" + ((e === "forward" || e === "reverse" || e === "familiar" || e === "cards") ? " exp-sheet" : ""),
                  role: "status",
                },
                (e === "forward" || e === "reverse" || e === "familiar" || e === "cards") &&
                  s.default.createElement(
                    "button",
                    { className: "exp-close", onClick: closeExp },
                    "\u2715 \u8FD4\u56DE",
                  ),
                T &&
                  e !== "familiar" &&
                  (h[h.length - 1]?.correct
                    ? s.default.createElement(
                        "b",
                        { className: "mark-ok" },
                        "\u2713",
                      )
                    : s.default.createElement(
                        "b",
                        { className: "mark-bad" },
                        "\u2717",
                      )),
                s.default.createElement(
                  "p",
                  { className: "fb-word" },
                  w.word,
                  " \xB7 ",
                  o(w),
                ),
                s.default.createElement(
                  "p",
                  { className: "phonetic" },
                  w.ipa ?? w.reading,
                  w.romaji ? " \xB7 " + w.romaji : "",
                ),
                w.note &&
                  s.default.createElement(
                    "p",
                    { className: "usage-note" },
                    "\u63D0\u793A\uFF1A",
                    w.note,
                  ),
                It(w) &&
                  s.default.createElement(
                    "p",
                    { className: "de-gram" },
                    s.default.createElement("b", null, It(w).label),
                    It(w).detail &&
                      s.default.createElement("span", null, It(w).detail),
                  ),
                w.vclass &&
                  s.default.createElement(
                    "p",
                    { className: "de-gram" },
                    s.default.createElement("b", null, Ll(w)),
                    s.default.createElement(
                      "span",
                      null,
                      "\u307E\u3059\u5F62\uFF1A",
                      w.masu,
                      "\uFF08",
                      w.masuReading,
                      "\uFF09",
                    ),
                  ),
                e === "spell" &&
                  Pt &&
                  s.default.createElement(
                    "p",
                    { className: "muted" },
                    "\u5047\u540D\u4E5F\u7B97\u6B63\u78BA\u3002\u6F22\u5B57\u5BEB\u6CD5\uFF1A",
                    w.word,
                  ),
                s.default.createElement(Ws, {
                  word: w,
                  target: w.lang === "jp" ? "zh" : "en",
                }),
                !!w.collocations?.length &&
                  s.default.createElement(
                    s.default.Fragment,
                    null,
                    s.default.createElement("h3", null, "\u642D\u914D"),
                    s.default.createElement(
                      "div",
                      { className: "phrase-list" },
                      w.collocations
                        .slice(0, 5)
                        .map((A, O) =>
                          s.default.createElement(
                            "div",
                            { className: "phrase-row", key: O },
                            s.default.createElement("strong", null, A.text),
                            s.default.createElement(
                              "span",
                              null,
                              w.lang === "de" && A.en ? A.en + " \xB7 " : "",
                              A.src === "corpus"
                                ? "\u8A9E\u6599\u51FA\u73FE " + A.n + " \u6B21"
                                : A.zh,
                            ),
                          ),
                        ),
                    ),
                  ),
                !!w.similar?.length &&
                  s.default.createElement(
                    s.default.Fragment,
                    null,
                    s.default.createElement(
                      "h3",
                      null,
                      "\u6613\u6DF7\u6DC6\uFF0F\u8FD1\u7FA9\u5B57",
                    ),
                    s.default.createElement(
                      "div",
                      { className: "phrase-list" },
                      w.similar.map((A, O) =>
                        s.default.createElement(
                          "div",
                          { className: "phrase-row", key: O },
                          s.default.createElement(
                            "strong",
                            null,
                            A.word,
                            A.reading ? "\u3000" + A.reading : "",
                          ),
                          s.default.createElement("span", null, A.note),
                        ),
                      ),
                    ),
                  ),
              ),
            s.default.createElement(
              "div",
              { className: "quiz-footer" },
              U
                ? s.default.createElement(
                    "div",
                    { className: "card" },
                    s.default.createElement(
                      "p",
                      null,
                      "\u9084\u6709 ",
                      t.length - h.length,
                      " \u984C\u672A\u4F5C\u7B54\uFF0C\u78BA\u5B9A\u7D50\u675F\uFF1F",
                    ),
                    s.default.createElement(
                      "button",
                      {
                        className: "primary-action",
                        onClick: () => k(t.length),
                      },
                      "\u78BA\u5B9A\u7D50\u675F",
                    ),
                    s.default.createElement(
                      "button",
                      { className: "end-test", onClick: () => P(!1) },
                      "\u7E7C\u7E8C\u4F5C\u7B54",
                    ),
                  )
                : s.default.createElement(
                    s.default.Fragment,
                    null,
                    e === "spell" &&
                      !T &&
                s.default.createElement(
                  "button",
                  {
                    className: "primary-action",
                    disabled: T || !n || !b,
                    onPointerDown: (A) => A.preventDefault(),
                    onMouseDown: (A) => A.preventDefault(),
                    onClick: () => _(Ze),
                  },
                  "\u9001\u51FA",
                ),
                    T &&
                      !(e === "forward" || e === "reverse" || e === "familiar" || e === "cards") &&
                      !(e === "spell" && h[h.length - 1]?.correct) &&
                      s.default.createElement(
                        "button",
                        {
                          className: "primary-action next-btn",
                          onPointerDown: (A) => {
                            e === "spell" && A.preventDefault();
                          },
                          onMouseDown: (A) => {
                            e === "spell" && A.preventDefault();
                          },
                          onClick: () => {
                            (e === "spell" && _t.current?.focus(), k(y + 1));
                          },
                        },
                        "\u4E0B\u4E00\u984C \u203A",
                      ),
                    s.default.createElement(
                      "button",
                      {
                        className: "end-test end-small",
                        onClick: () => {
                          h.length < t.length ? P(!0) : k(t.length);
                        },
                      },
                      "\u7D50\u675F",
                    ),
                  ),
            ),
          )
        : s.default.createElement(
            "div",
            { className: "result-wrap" },
            s.default.createElement(
              "div",
              { className: "result-card" },
              s.default.createElement("h2", null, Se),
              e === "familiar"
                ? s.default.createElement(
                    "div",
                    { className: "fam-result" },
                    Mt.map((A, O) =>
                      s.default.createElement(
                        "div",
                        { key: A, className: "fam-count lv-" + O },
                        s.default.createElement(
                          "strong",
                          null,
                          h.filter((ne) => ne.level === O).length,
                        ),
                        s.default.createElement("span", null, A),
                      ),
                    ),
                  )
                : s.default.createElement(
                    s.default.Fragment,
                    null,
                    s.default.createElement(
                      "p",
                      { className: "result-ox" },
                      s.default.createElement(
                        "b",
                        { className: "mark-ok" },
                        "O ",
                        ut,
                      ),
                      " ",
                      s.default.createElement(
                        "b",
                        { className: "mark-bad" },
                        "X ",
                        rr,
                      ),
                    ),
                    s.default.createElement(
                      "div",
                      {
                        className: "rate-ring",
                        style: { "--pct": be * 3.6 + "deg" },
                      },
                      s.default.createElement("strong", null, be, "%"),
                      s.default.createElement(
                        "span",
                        null,
                        "\u6B63\u78BA\u7387",
                      ),
                    ),
                    s.default.createElement(
                      "p",
                      { className: "muted" },
                      be >= 80
                        ? "\u8A18\u5F97\u5F88\u7A69\uFF0C\u7E7C\u7E8C\u4FDD\u6301"
                        : be >= 50
                          ? "\u4E00\u534A\u4EE5\u4E0A\u8A18\u4F4F\u4E86\uFF0C\u518D\u8907\u7FD2\u932F\u984C"
                          : "\u9019\u6279\u9084\u4E0D\u719F\uFF0C\u5EFA\u8B70\u932F\u8AA4\u8907\u7FD2",
                    ),
                  ),
              s.default.createElement(
                "p",
                null,
                "\u5DF2\u5B8C\u6210 ",
                h.length,
                " / ",
                t.length,
              ),
              Et.length > 0 &&
                e !== "familiar" &&
                s.default.createElement(
                  "button",
                  { className: "primary-action", onClick: () => x(Et) },
                  "\u932F\u8AA4\u8907\u7FD2\uFF08",
                  Et.length,
                  "\uFF09",
                ),
              s.default.createElement(
                "button",
                { className: "end-test", onClick: m },
                "\u78BA\u8A8D",
              ),
            ),
          ),
    );
  }
  function uf({
    ids: e,
    words: t,
    meaning: r,
    prefs: o,
    setPrefs: n,
    onExit: a,
  }) {
    let i = e.map((j) => t.find((y) => y.id === j)).filter(Boolean),
      [c, d] = (0, s.useState)(0),
      [p, x] = (0, s.useState)(!0),
      m = c >= i.length,
      f = m ? void 0 : i[c];
    return (
      (0, s.useEffect)(() => {
        if (!p || m || !f) return;
        let j = !1,
          y = f.lang === "jp" ? "ja" : "de",
          T = window.speechSynthesis
            .getVoices()
            .find((b) => b.lang.toLowerCase().startsWith(y)),
          u = o.repeat ?? 1,
          h = 0,
          g = () => {
            if (j) return;
            let b = new SpeechSynthesisUtterance(f.word);
            ((b.lang = y === "ja" ? "ja-JP" : "de-DE"),
              T && (b.voice = T),
              (b.rate = o.rate ?? 0.9),
              (b.onend = () => {
                j ||
                  (h++,
                  h < u
                    ? g()
                    : window.setTimeout(() => {
                        j || d((E) => E + 1);
                      }, 700));
              }),
              (b.onerror = () => {
                j || d((E) => E + 1);
              }),
              window.speechSynthesis.speak(b));
          };
        return (
          window.speechSynthesis.cancel(),
          g(),
          () => {
            ((j = !0), window.speechSynthesis.cancel());
          }
        );
      }, [c, p, m, f]),
      s.default.createElement(
        "section",
        { className: "quiz-screen" },
        s.default.createElement(
          "div",
          { className: "detail-top" },
          s.default.createElement("button", { onClick: a }, "\u2039"),
          s.default.createElement(
            "strong",
            null,
            Math.min(c + 1, i.length),
            "/",
            i.length,
          ),
          s.default.createElement("span", null, "\u807D\u529B\u64AD\u653E"),
        ),
        m
          ? s.default.createElement(
              s.default.Fragment,
              null,
              s.default.createElement("h2", null, "\u64AD\u653E\u5B8C\u7562"),
              s.default.createElement(
                "p",
                null,
                "\u5171 ",
                i.length,
                " \u500B\u689D\u76EE\u3002",
              ),
              s.default.createElement(
                "button",
                {
                  className: "primary-action",
                  onClick: () => {
                    (d(0), x(!0));
                  },
                },
                "\u91CD\u65B0\u64AD\u653E",
              ),
              s.default.createElement(
                "button",
                { className: "end-test", onClick: a },
                "\u8FD4\u56DE",
              ),
            )
          : s.default.createElement(
              s.default.Fragment,
              null,
              s.default.createElement(
                "div",
                { className: "quiz-prompt" },
                s.default.createElement(
                  "small",
                  null,
                  p ? "\u64AD\u653E\u4E2D" : "\u5DF2\u66AB\u505C",
                ),
                s.default.createElement(
                  "h1",
                  { lang: f.lang === "jp" ? "ja" : "de" },
                  f.word,
                ),
              ),
              s.default.createElement(
                "p",
                { className: "phonetic" },
                f.ipa ?? f.reading,
                f.romaji ? " \xB7 " + f.romaji : "",
              ),
              s.default.createElement("p", { className: "word-meaning" }, r(f)),
              s.default.createElement(
                "div",
                { className: "player-controls" },
                s.default.createElement(
                  "button",
                  {
                    className: "player-btn",
                    "aria-label": "\u4E0A\u4E00\u500B",
                    onClick: () => d(Math.max(0, c - 1)),
                  },
                  "\u2039\u2039",
                ),
                s.default.createElement(
                  "button",
                  {
                    className: "player-btn play",
                    "aria-label": p ? "\u66AB\u505C" : "\u64AD\u653E",
                    onClick: () => x(!p),
                  },
                  p ? "\u275A\u275A" : "\u25B6",
                ),
                s.default.createElement(
                  "button",
                  {
                    className: "player-btn",
                    "aria-label": "\u4E0B\u4E00\u500B",
                    onClick: () => d(c + 1),
                  },
                  "\u203A\u203A",
                ),
              ),
              s.default.createElement(
                "div",
                { className: "field" },
                s.default.createElement(
                  "span",
                  null,
                  "\u91CD\u8907\u6B21\u6578",
                ),
                s.default.createElement(
                  "div",
                  { className: "stepper-row" },
                  s.default.createElement(
                    "button",
                    {
                      onClick: () =>
                        n({ ...o, repeat: Math.max(1, (o.repeat ?? 1) - 1) }),
                      disabled: (o.repeat ?? 1) <= 1,
                    },
                    "\u2212",
                  ),
                  s.default.createElement(
                    "strong",
                    null,
                    (o.repeat ?? 1) + " \u6B21",
                  ),
                  s.default.createElement(
                    "button",
                    {
                      onClick: () =>
                        n({ ...o, repeat: Math.min(3, (o.repeat ?? 1) + 1) }),
                      disabled: (o.repeat ?? 1) >= 3,
                    },
                    "+",
                  ),
                ),
              ),
              s.default.createElement(
                "label",
                { className: "field" },
                "\u901F\u5EA6\uFF1A" +
                  Math.round((o.rate ?? 0.9) * 100) / 100 +
                  "x",
                s.default.createElement("input", {
                  type: "range",
                  min: 0.5,
                  max: 1.5,
                  step: 0.05,
                  value: o.rate ?? 0.9,
                  onChange: (j) => n({ ...o, rate: Number(j.target.value) }),
                }),
                s.default.createElement(
                  "span",
                  { className: "range-ends" },
                  "0.5x \u2013 1.5x",
                ),
              ),
              s.default.createElement(
                "button",
                { className: "end-test", onClick: a },
                "\u7D50\u675F\u807D\u529B",
              ),
            ),
      )
    );
  }
  function Im() {
    return s.default.createElement(
      Is,
      null,
      V.map((e) =>
        s.default.createElement(Po, {
          key: e.id,
          path: "/word/" + e.id,
          element: s.default.createElement(Tm, {
            key: e.id,
            initialTab: "detail",
            initialWord: e.id,
          }),
        }),
      ),
      [
        ["courses", "/"],
        ["quiz", "/quiz"],
        ["search", "/search"],
        ["library", "/library"],
        ["more", "/more"],
        ["more", "/progress"],
        ["more", "/settings"],
        ["courses", "/study"],
        ["grammar", "/grammar"],
      ].map(([e, t], r) =>
        s.default.createElement(Po, {
          key: t + r,
          path: t,
          element: s.default.createElement(Tm, { key: e + t, initialTab: e }),
        }),
      ),
    );
  }
  try {
    fetch(location.pathname + "?nc=" + Date.now(), { cache: "no-store" })
      .then((r) => r.text())
      .then((t) => {
        let m = /O1 = "([^"]+)"/.exec(t);
        if (m && m[1] !== O1 && sessionStorage.getItem("mmv:reloaded") !== m[1]) {
          sessionStorage.setItem("mmv:reloaded", m[1]);
          location.replace(location.pathname + "?v=" + encodeURIComponent(m[1]) + location.hash);
        }
      })
      .catch(() => {});
  } catch {}
  /^#\/word\//.test(location.hash) &&
    history.replaceState(null, "", location.pathname + location.search + "#/");
  (0, Mm.createRoot)(document.getElementById("root")).render(
    Ol.default.createElement(hm, null, Ol.default.createElement(Im, null)),
  );
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

@remix-run/router/dist/router.js:
  (**
   * @remix-run/router v1.23.4
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router/dist/index.js:
  (**
   * React Router v6.30.6
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

react-router-dom/dist/index.js:
  (**
   * React Router DOM v6.30.6
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
