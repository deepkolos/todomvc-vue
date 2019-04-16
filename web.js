(this.nativeLog ||
  function(e) {
    console.log(e);
  })('### App Framework ### Start: 0.0.6 Build 20190314 HEAD^ f24defaf');
var global = this,
  process = { env: {} },
  setTimeout = global.setTimeout;
!(function(e) {
  'function' == typeof define && define.amd ? define(e) : e();
})(function() {
  'use strict';
  function e(e, t) {
    if ('undefined' == typeof document) return t;
    e = e || '';
    var n = document.head || document.getElementsByTagName('head')[0],
      i = document.createElement('style');
    return (
      (i.type = 'text/css'),
      n.appendChild(i),
      i.styleSheet
        ? (i.styleSheet.cssText = e)
        : i.appendChild(document.createTextNode(e)),
      t
    );
  }
  var t = '0.0.6',
    n = '0.0.5';
  const i = global.console,
    o = ['off', 'error', 'warn', 'info', 'log', 'debug', 'trace'];
  let r = {};
  function s(e) {
    const t = (global.Env && global.Env.logLevel) || 'log';
    return r[t] && r[t][e];
  }
  var a = {
    setNativeConsole: function() {
      o.forEach(e => {
        const t = o.indexOf(e);
        (r[e] = {}),
          o.forEach(n => {
            o.indexOf(n) <= t && (r[e][n] = !0);
          });
      });
      {
        const e = function(e) {
            return (
              !global.Env ||
              !global.Env.logHash ||
              !1 !== global.Env.logHash.na ||
              'string' != typeof e ||
              0 !== e.indexOf('### App Framework ###')
            );
          },
          {
            trace: t,
            debug: n,
            log: i,
            info: o,
            warn: r,
            error: a,
            time: l,
            timeEnd: c
          } = console,
          d = console;
        (console._ori = {
          trace: t,
          debug: n,
          log: i,
          info: o,
          warn: r,
          error: a,
          time: l,
          timeEnd: c
        }),
          (console._ori.trace = console._ori.log),
          (d.trace = (...e) => {}),
          (d.debug = (...t) => {
            e(t[0]) && s('debug') && console._ori.debug.apply(console, t);
          }),
          (d.log = (...t) => {
            e(t[0]) && s('log') && console._ori.log.apply(console, t);
          }),
          (d.info = (...t) => {
            e(t[0]) && s('info') && console._ori.info.apply(console, t);
          }),
          (d.warn = (...t) => {
            e(t[0]) && s('warn') && console._ori.warn.apply(console, t);
          }),
          (d.error = (...t) => {
            e(t[0]) && s('error') && console._ori.error.apply(console, t);
          }),
          (d.time = (...e) => {
            global.Env.enableLogTime &&
              s('info') &&
              console._ori.time.apply(console, e);
          }),
          (d.timeEnd = (...e) => {
            global.Env.enableLogTime &&
              s('info') &&
              console._ori.timeEnd.apply(console, e);
          });
        const h = {};
        ['debug', 'log', 'info', 'warn', 'error', 'time', 'timeEnd'].forEach(
          e => {
            h[e] = () => {};
          }
        ),
          (d.curry = function(e) {
            const t = global.Env.logHash;
            return t[e] && t[e].off ? h : console;
          });
      }
    },
    resetNativeConsole: function() {
      (r = {}), (global.console = i);
    }
  };
  const l = global.history;
  var c = {
    setNativeRouter: function() {},
    resetNativeRouter: function() {
      global.history = l;
    }
  };
  global.Env && 'ios' === global.Env.platform && (global.Promise = void 0);
  const d = global.setTimeout,
    h = global.setInterval,
    p = global.requestAnimationFrame;
  (global.setTimeoutNative = function(e, t, n) {
    d(function() {
      global.setTimeoutCallback(t);
    }, n);
  }),
    (global.setIntervalNative = function(e, t, n) {
      h(function() {
        global.setIntervalCallback(t);
      }, n);
    }),
    (global.requestAnimationFrameNative = function(e, t, n) {
      p(function() {
        global.requestAnimationFrameCallback(t);
      }, n);
    });
  const u = global.clearTimeout,
    f = global.setTimeoutNative,
    m = global.clearInterval,
    g = global.setIntervalNative,
    y = global.cancelAnimationFrame,
    b = global.requestAnimationFrameNative;
  var v = {
    setNativeConsole: a.setNativeConsole,
    resetNativeConsole: a.resetNativeConsole,
    setNativeTimer: function() {
      const e = {};
      let t = 0;
      'function' == typeof f &&
        ((global.setTimeoutWrap = function(n, i, o) {
          return (
            (e[++t] = i),
            global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(`### App Framework ### setTimeoutWrap ${t}----`),
            f(n, t, o),
            t
          );
        }),
        (global.setTimeout = function(e, t) {
          return global.setTimeoutWrap(-1, e, t);
        }),
        (global.setTimeoutCallback = function(t) {
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(`### App Framework ### setTimeout 执行回调 ${t}----`),
            'function' == typeof e[t] && (e[t](), delete e[t]);
        }),
        (global.clearTimeout = global.clearTimeoutWrap = function(t) {
          'function' == typeof u && u(t),
            'function' == typeof e[t] ? delete e[t] : (e[t] = void 0);
        })),
        'function' == typeof g &&
          ((global.setIntervalWrap = function(n, i, o) {
            return (
              (e[++t] = i),
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(`### App Framework ### setIntervalWrap ${t}----`),
              g(n, t, o),
              t
            );
          }),
          (global.setInterval = function(e, t) {
            return global.setIntervalWrap(-1, e, t);
          }),
          (global.setIntervalCallback = function(t) {
            global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                `### App Framework ### setInterval 执行回调 ${t}----`
              ),
              'function' == typeof e[t] && e[t]();
          }),
          (global.clearInterval = global.clearIntervalWrap = function(t) {
            'function' == typeof m && m(t),
              'function' == typeof e[t] ? delete e[t] : (e[t] = void 0);
          })),
        'function' == typeof b &&
          ((global.requestAnimationFrameWrap = function(n, i) {
            return (
              (e[++t] = i),
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  `### App Framework ### requestAnimationFrame ${t}----`
                ),
              b(n, t),
              t
            );
          }),
          (global.requestAnimationFrame = function(e) {
            return global.requestAnimationFrameWrap(-1, e);
          }),
          (global.requestAnimationFrameCallback = function(n) {
            global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                `### App Framework ### requestAnimationFrame 执行回调 ${t}----`
              ),
              'function' == typeof e[n] && e[n]();
          }),
          (global.cancelAnimationFrame = global.cancelAnimationFrameWrap = function(
            t
          ) {
            'function' == typeof y && y(t),
              'function' == typeof e[t] ? delete e[t] : (e[t] = void 0);
          }));
    },
    resetNativeTimer: function() {
      (global.setTimeout = d),
        (global.clearTimeout = u),
        (global.clearTimeoutWrap = null),
        (global.setTimeoutCallback = null),
        (global.setTimeoutWrap = null),
        (global.setInterval = h),
        (global.clearInterval = m),
        (global.clearIntervalWrap = null),
        (global.setIntervalCallback = null),
        (global.setIntervalWrap = null),
        (global.requestAnimationFrame = p),
        (global.cancelAnimationFrame = y),
        (global.cancelAnimationFrameWrap = null),
        (global.requestAnimationFrameCallback = null),
        (global.requestAnimationFrameWrap = null);
    },
    setNativeRouter: c.setNativeRouter,
    resetNativeRouter: c.resetNativeRouter,
    freezePrototype: function() {
      Object.freeze(Object),
        Object.freeze(Array),
        Object.freeze(Object.prototype),
        Object.freeze(Array.prototype),
        Object.freeze(String.prototype),
        Object.freeze(Number.prototype),
        Object.freeze(Boolean.prototype),
        Object.freeze(Error.prototype),
        Object.freeze(Date.prototype),
        Object.freeze(RegExp.prototype);
    }
  };
  function E(e, t, n) {
    return 'function' == typeof global.compileAndRunScript
      ? (function(e, t, n) {
          let i = '(function (';
          const o = [],
            r = [];
          for (const t in e) o.push(t), r.push(e[t]);
          for (let e = 0; e < o.length - 1; ++e) (i += o[e]), (i += ',');
          (i += o[o.length - 1]), (i += ') {'), (i += t), (i += '} )');
          const s = global.compileAndRunScript(i, n);
          return s && 'function' == typeof s ? s(...r) : s;
        })(e, t, n)
      : (function(e, t) {
          const n = [],
            i = [];
          for (const t in e) n.push(t), i.push(e[t]);
          return n.push(t), new Function(...n)(...i);
        })(e, t);
  }
  function w(e) {
    const t = Object.prototype.toString.call(e);
    return t.substring(8, t.length - 1).toLowerCase();
  }
  function k(e) {
    const t = Object.create(null);
    return function(n) {
      return t[n] || (t[n] = e(n));
    };
  }
  const x = /-(\w)/g,
    _ = k(e => e.replace(x, A));
  function A(e, t) {
    return t ? t.toUpperCase() : '';
  }
  const C = /([a-z\d])([A-Z])/g,
    T = k(e => e.replace(C, '$1-$2').toLowerCase());
  function S(e, ...t) {
    if ('function' == typeof Object.assign) Object.assign(e, ...t);
    else {
      const n = t.shift();
      for (const t in n) e[t] = n[t];
      t.length && S(e, ...t);
    }
    return e;
  }
  function M(...e) {
    const t = e.reduce((e, t) => e.concat(t), []);
    return Array.from(new Set(t));
  }
  function O(e) {
    return null !== e && 'object' == typeof e;
  }
  const L = Object.prototype.toString,
    I = '[object Object]';
  function D(e) {
    return L.call(e) === I;
  }
  function N(e) {
    const t = (e + '').charCodeAt(0);
    return 36 === t || 95 === t;
  }
  const P = /^@(app)-application\//,
    F = /^@(app)-component\//,
    R = /^@(app)-module\//,
    B = e => !!e.match(P),
    j = e => !!e.match(F);
  function $(e) {
    return e
      .replace(P, '')
      .replace(F, '')
      .replace(R, '');
  }
  let z = 0;
  function H() {
    return ++z;
  }
  const Y = {},
    W = {};
  let U = {};
  const V = {
    MODE: { SYNC: 0, CALLBACK: 1, SUBSCRIBE: 2 },
    TYPE: { METHOD: 0, ATTRIBUTE: 1, EVENT: 2 },
    NORMALIZE: { RAW: 0, JSON: 1 },
    RESULT: { MODULE_INST: 0 }
  };
  function G(e, t, n) {
    global.Env &&
      'trace' === global.Env.logLevel &&
      console.trace(`### App Framework ### require模块：${t}`);
    const i = [t];
    let o,
      r = {};
    if (t.indexOf('.') < 0) {
      const e = t + '.';
      for (const t in ee()) t.startsWith(e) && i.push(t);
    }
    if (
      (i.forEach(i => {
        const s = ee()[i];
        if (!s) return;
        let a = i.replace(t, '');
        if (('.' === a.substr(0, 1) && (a = a.substr(1)), s.instantiable)) {
          const e = function(...t) {
            const n = e.__init__(...t);
            Object.defineProperty(this, '_instId', {
              enumerable: !1,
              configurable: !1,
              writable: !1,
              value: n && n.instId
            });
          };
          if (0 === a.length) r = e;
          else {
            const t = a.split('.');
            if (t.length > 0) {
              const n = t.pop();
              J(r, t)[n] = e;
            }
          }
        }
        if (i === t) o = r;
        else if (a.length > 0) {
          const e = a.split('.');
          e.length > 0 && (o = J(r, e));
        }
        !(function(e, t, n, i) {
          const o = n.methods;
          for (const r in o) {
            const s = o[r],
              a = s.instanceMethod ? t.prototype : t;
            r in a &&
              console.warn(
                `### App Framework ### 模块${n.name}的接口函数${r}---- 重复定义`
              );
            const l = function(...t) {
              if (e._isApp && !e._defined)
                throw new Error(
                  `请确认Native方法调用[${
                    n.name
                  }.${r}()]发生在应用app的生命周期的创建['onCreate()']之后`
                );
              const o = Object.prototype.hasOwnProperty.call(this, '_instId')
                ? this._instId
                : i;
              return q(e, n, s, t, o);
            };
            Object.defineProperty(a, r, {
              configurable: !1,
              enumerable: !0,
              get() {
                return l.bind(this);
              },
              set(e) {
                console.warn(
                  `### App Framework ### 接口${
                    n.name
                  }的方法(${r})为可读，不可覆盖`
                );
              }
            }),
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  `### App Framework ### require---- 模块${n.name}接口函数${r}`
                );
          }
          const r = n.attributes;
          for (const e in r) {
            const i = r[e],
              o = i.instanceMethod ? t.prototype : t;
            Object.defineProperty(o, e, {
              configurable: !1,
              enumerable: !0,
              get() {
                if (i[1]) return this[i[1].name]();
                console.warn(
                  `### App Framework ### 模块${n.name}的接口属性(${e})不可读`
                );
              },
              set(t) {
                i[2]
                  ? this[i[2].name]({ value: t })
                  : console.warn(
                      `### App Framework ### 模块${
                        n.name
                      }的接口属性(${e})不可写`
                    );
              }
            });
          }
          const s = n.events;
          for (const e in s) {
            const i = s[e];
            i.cache = i.cache || {};
            const o = i.instanceMethod ? t.prototype : t;
            Object.defineProperty(o, e, {
              configurable: !1,
              enumerable: !0,
              get() {
                const e = void 0 === this._instId ? -1 : this._instId;
                return i.cache[e];
              },
              set(t) {
                if ('function' != typeof t && -1 === [null, void 0].indexOf(t))
                  console.warn(
                    `### App Framework ### 模块${
                      n.name
                    }的接口事件(${e})值类型必须是函数或null`
                  );
                else {
                  const e = void 0 === this._instId ? -1 : this._instId,
                    n = 'function' == typeof t ? t.bind(this) : t;
                  this[i.name]({ success: n }), (i.cache[e] = t);
                }
              }
            });
          }
        })(e, o, s, n);
      }),
      0 === Object.keys(r).length)
    )
      throw new Error(
        `请确认引入的模块[${t}]：名称正确并且在manifest.json的features中声明`
      );
    return r;
  }
  function J(e, t) {
    if (!e) return;
    let n = e;
    return (
      t.forEach(e => {
        e in n || (n[e] = {}), (n = n[e]);
      }),
      n
    );
  }
  const Z = ['success', 'cancel', 'fail', 'complete'];
  function q(e, t, n, i, o) {
    const { name: r, type: s } = t,
      { name: a, mode: l, type: c, normalize: d } = n;
    if (!e._callbacks)
      return (
        console.warn(
          `### App Framework ### 容器已销毁,接口调用(${r}.${a}())无效`
        ),
        new Error('invokeNative: 容器已销毁')
      );
    if ('feature' === s && !global.JsBridge)
      return new Error('invokeNative: JsBridge没有初始化');
    if ('module' === s && !global.ModuleManager)
      return new Error('invokeNative: ModuleManager没有初始化');
    const h = 'feature' === s ? global.JsBridge : global.ModuleManager,
      p = i.length > 0 ? i[0] : {};
    p &&
      p.callback &&
      (p.success &&
        console.warn(
          "### App Framework ### invoke函数不能同时出现'success'和'callback'参数"
        ),
      (p.success = p.callback));
    let u = {};
    const f = {};
    if (O(p))
      for (const t in p) {
        const n = p[t];
        Z.indexOf(t) >= 0
          ? 'function' == typeof n
            ? (f[t] = n)
            : console.warn(
                `### App Framework ### invoke函数的回调参数${t}类型不是function`
              )
          : 'callback' !== t &&
            (d === V.NORMALIZE.JSON
              ? (u[t] = Q(n, e))
              : (u[t] = 'function' == typeof t ? Q(n, e) : n));
      }
    else 'function' == typeof p ? (f.success = p) : (u = p);
    if (
      (d === V.NORMALIZE.JSON && (u = JSON.stringify(u)), l === V.MODE.SYNC)
    ) {
      const n = h.invoke(r, a, u, '-1', o);
      return null == n
        ? void console.warn(
            `### App Framework ### invoke函数 '${r}.${a}' 返回值为null`
          )
        : (global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Framework ### invoke函数 '${r}.${a}' 调用成功，返回值为: ${n}`
            ),
          K(e, n, t, a).data);
    }
    {
      let n, i, s;
      c === V.TYPE.METHOD && l === V.MODE.CALLBACK && (f.flagCallback = !0);
      const d = [];
      if (Object.keys(f).length) {
        const o = global.isRpkMinPlatformVersionGEQ(1040) ? void 0 : f,
          r = H();
        (e._callbacks[r] = r => {
          const l = f,
            c = K(e, r, t, a),
            d = c.code,
            h = c.data;
          0 === d && l.success
            ? l.success.call(o, h)
            : 100 === d && l.cancel
            ? l.cancel.call(o)
            : d >= 200 && l.fail && l.fail.call(o, h, d),
            l.complete && l.complete.call(o, h),
            n && (0 === d ? i({ data: h }) : s({ data: h, code: d }));
        }),
          (Y[r] = {
            instance: e.id.toString(),
            preserved: l === V.MODE.SUBSCRIBE
          }),
          d.push(u),
          d.push(r.toString());
      } else d.push(u), d.push('-1');
      if (
        (h.invoke(r, a, ...d, o),
        c === V.TYPE.METHOD &&
          l === V.MODE.CALLBACK &&
          1 === Object.keys(f).length)
      )
        return (n = new Promise((e, t) => {
          (i = e), (s = t);
        }));
    }
  }
  function K(e, t, n, i) {
    const o = 'string' == typeof t ? JSON.parse(t) : t || {},
      r = o.content;
    return (
      r && r._nativeType === V.RESULT.MODULE_INST
        ? (n.instantiable && '__init__' === i
            ? (o.data = r)
            : (o.data = G(e, r.name, r.instId)),
          e._nativeInstList && e._nativeInstList.push(t))
        : (o.data = r),
      o
    );
  }
  function Q(e, t) {
    switch (w(e)) {
      case 'undefined':
      case 'null':
        return '';
      case 'regexp':
        return e.toString();
      case 'date':
        return e.toISOString();
      case 'number':
      case 'string':
      case 'boolean':
      case 'array':
      case 'object':
        return e;
      case 'function':
        const n = H();
        return (
          t._callbacks
            ? (t._callbacks[n] = e)
            : global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                '### App Framework ### normalize() inst实例已经销毁，不再注册回调'
              ),
          (Y[n] = { instance: t.id.toString(), preserved: !1 }),
          n.toString()
        );
      default:
        return JSON.stringify(e);
    }
  }
  function X(e, t) {
    W[e] = t;
  }
  function ee() {
    return U;
  }
  class te {
    constructor(e) {
      (this.id = e),
        (this._callbacks = {}),
        (this._nativeInstList = []),
        X(e, this);
    }
    invoke(e, t, n, i) {
      global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(
          `### App Framework ### 调用对象(${e.id})的回调(${t}) 参数：`,
          JSON.stringify(n)
        );
      const o = e._callbacks[t];
      if ('function' == typeof o) {
        const r = o(n);
        return (void 0 !== i && !1 !== i) || (e._callbacks[t] = void 0), r;
      }
      return new Error(`invoke: 无效invoke回调函数Id "${t}"`);
    }
    destroy() {
      (this._callbacks = null), (this._nativeInstList = null), X(this.id, null);
    }
  }
  let ne = {};
  const ie = {};
  class oe {
    constructor(e = 'message', t = {}) {
      (this.type = e),
        (this.data = t.data || null),
        (this.timeStamp = Date.now());
    }
  }
  const re = {};
  function se(e, t = null) {
    re[e] = t;
  }
  var ae = {
    init: function() {
      v.setNativeConsole(), v.setNativeTimer();
    },
    exposeToNative: function(e) {
      for (const t in e)
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace('### App Framework ### 注册全局函数----', t),
          (global[t] = (...n) => {
            const i = e[t](...n);
            return i instanceof Error && console.error(i.toString()), i;
          });
    },
    defineBundle: se,
    requireBundle: function(e) {
      if (((e = e.replace(/\.js$/, '')), !re[e])) {
        let t = global.loadBundleCode(`module/${e}.js`);
        'string' == typeof t &&
          (t = E({}, `${t}; return ${e}`, `/module/${e}.js`)),
          se(e, t);
      }
      return re[e];
    },
    BroadcastChannel: class {
      constructor(e) {
        if (global.Env.engine === global.ENGINE_TYPE.CARD)
          throw new Error('BroadcastChannel is not supported.');
        Object.defineProperty(this, 'name', {
          configurable: !1,
          enumerable: !0,
          writable: !1,
          value: String(e)
        }),
          (this._closed = !1),
          (this.onmessage = null),
          ie[this.name] || (ie[this.name] = []),
          ie[this.name].push(this);
      }
      postMessage(e) {
        if (this._closed)
          throw new Error(`BroadcastChannel "${this.name}" is closed.`);
        const t = ie[this.name];
        if (t && t.length)
          for (let n = 0; n < t.length; ++n) {
            const i = t[n];
            i._closed ||
              i === this ||
              ('function' == typeof i.onmessage &&
                i.onmessage(new oe('message', { data: e })));
          }
      }
      close() {
        if (!this._closed && ((this._closed = !0), ie[this.name])) {
          const e = ie[this.name].indexOf(this);
          e > -1 ? ie[this.name].splice(e, 1) : delete ie[this.name];
        }
      }
    },
    ENGINE_TYPE: { PAGE: 'page', CARD: 'card' },
    ModuleHost: te,
    requireModule: G,
    exposure: {
      registerModules: function(e, t = 'feature') {
        'string' == typeof e && (e = JSON.parse(e)),
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              '### App Framework ### registerModules---- ',
              JSON.stringify(e)
            ),
          'object' ==
            typeof (e = e.map(function(e) {
              return (e.__type__ = t), e;
            })) &&
            (function(e, t = !0) {
              let n = [];
              Array.isArray(e) ? (n = e) : n.push(e),
                n.forEach(e => {
                  const n = e.name;
                  global.Env &&
                    'trace' === global.Env.logLevel &&
                    console.trace(
                      `### App Framework ### 注册模块---- ${n} <${e.__type__}>`
                    );
                  let i = U[n];
                  i ||
                    ((i = {
                      type: e.__type__,
                      name: e.name,
                      methods: {},
                      attributes: {},
                      events: {},
                      instantiable: e.instantiable
                    }),
                    (U[n] = i)),
                    i.methods || (i.methods = {});
                  const o = i.methods;
                  e.methods &&
                    e.methods.length &&
                    e.methods.forEach(e => {
                      const r = e.name;
                      if (
                        (void 0 === e.mode && (e.mode = V.MODE.SYNC),
                        void 0 === e.type && (e.type = V.TYPE.METHOD),
                        void 0 === e.normalize &&
                          (e.normalize = V.NORMALIZE.JSON),
                        void 0 === e.instanceMethod && (e.instanceMethod = !1),
                        !i.instantiable && e.instanceMethod)
                      )
                        throw new Error(`模块 ${i.name} 配置定义错误`);
                      if (e.type === V.TYPE.ATTRIBUTE) {
                        const t = e.alias,
                          n = e.access;
                        (i.attributes[t] = i.attributes[t] || {}),
                          (i.attributes[t][n] = e),
                          (i.attributes[t].instanceMethod = e.instanceMethod);
                      } else if (e.type === V.TYPE.EVENT) {
                        const t = e.alias;
                        i.events[t] = e;
                      }
                      r
                        ? (o[r] && !t) ||
                          ((o[r] = e),
                          global.Env &&
                            'trace' === global.Env.logLevel &&
                            console.trace(
                              `### App Framework ### 注册模块 ${n} 接口---- ${r}`
                            ))
                        : console.warn(
                            `### App Framework ### 模块 ${n} 的接口没有name属性`
                          );
                    });
                });
            })(e);
      },
      execInvokeCallback: function(e) {
        'string' == typeof e && (e = JSON.parse(e));
        const t = (function(e) {
          const t = Y[e];
          return (t && !0 === t.preserved) || (Y[e] = void 0), t;
        })(e.callback);
        if (
          (global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              '### App Framework ### 处理invoke回调----',
              JSON.stringify(t)
            ),
          t)
        ) {
          const n = (function(e) {
            return W[e];
          })(t.instance);
          if (n) {
            const i = [n, e.callback, e.data, t.preserved];
            return n._callbacks
              ? n.invoke(...i)
              : new Error(
                  `execInvokeCallback: 回调函数所属对象已经无效 "${n.id}"`
                );
          }
        }
        return new Error(
          `execInvokeCallback: 无效invoke回调Id "${t && t.instance}"`
        );
      },
      registerManifest: function(e) {
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            `### App Framework ### 注册manifest信息：${JSON.stringify(e)}`
          ),
          'string' == typeof e && (e = JSON.parse(e)),
          (ne = e || {});
      },
      isRpkMinPlatformVersionGEQ: function(e) {
        return ne.minPlatformVersion >= e;
      }
    }
  };
  class le {
    constructor(e, t = { bubbles: !1, cancelable: !1 }) {
      if (arguments.length > 1 && 'object' != typeof t)
        throw new Error(
          `### App Runtime ### addEventListener() 参数2传递的话，必须是对象：${t}`
        );
      (this._type = e),
        (this._bubbles = t.bubbles),
        (this._cancelable = t.cancelable),
        (this._target = null),
        (this._currentTarget = null),
        (this._eventPhase = le.NONE),
        (this._defaultPrevented = !1),
        (this._timeStamp = Date.now()),
        (this._supportW3C = !0),
        (this._flagStopPropagation = !1),
        (this._flagStopImmediatePropagation = !1);
    }
    get type() {
      return this._type;
    }
    get bubbles() {
      return this._bubbles;
    }
    get cancelable() {
      return this._cancelable;
    }
    get target() {
      return this._target;
    }
    get currentTarget() {
      return this._currentTarget;
    }
    get eventPhase() {
      return this._eventPhase;
    }
    get defaultPrevented() {
      return this._defaultPrevented;
    }
    get timeStamp() {
      return this._timeStamp;
    }
    stopPropagation() {
      this._flagStopPropagation = !0;
    }
    stopImmediatePropagation() {
      (this._flagStopImmediatePropagation = !0), this.stopPropagation();
    }
    preventDefault() {
      throw new Error('### App Runtime ### preventDefault() 暂不支持该方法');
    }
    toJSON() {
      return {
        type: this._type,
        target: this._target,
        currentTarget: this._currentTarget,
        timeStamp: this._timeStamp
      };
    }
  }
  (le.NONE = 0),
    (le.CAPTURING_PHASE = 1),
    (le.AT_TARGET = 2),
    (le.BUBBLING_PHASE = 3);
  class ce extends le {
    constructor() {
      super(...arguments),
        (this._touches = null),
        (this._changedTouches = null);
    }
    get touches() {
      return this._touches;
    }
    set touches(e) {
      if (this._touches)
        throw new Error(
          '### App Framework ### TouchEvent 不支持修改 touches 属性'
        );
      this._touches = e;
    }
    get changedTouches() {
      return this._changedTouches;
    }
    set changedTouches(e) {
      if (this._changedTouches)
        throw new Error(
          '### App Framework ### TouchEvent 不支持修改 changedTouches 属性'
        );
      this._changedTouches = e;
    }
    toJSON() {
      const e = super.toJSON();
      return Object.assign(e, {
        touches: this._touches,
        changedTouches: this._changedTouches
      });
    }
  }
  const de = { HTML_ID: '-1' },
    he = {
      UNKNOWN: 0,
      ELEMENT: 1,
      ATTR: 2,
      TEXT: 3,
      COMMENT: 8,
      DOCUMENT: 9,
      DOCUMENT_FRAGMENT: 11,
      FIGMENT: 101
    };
  let pe = 1;
  class ue {
    constructor() {
      (this._nodeType = ue.NodeType.UNKNOWN),
        (this._nodeName = null),
        (this._nodeValue = null),
        (this._ownerDocument = null),
        (this._textContent = null),
        (this.ref = (pe++).toString()),
        (this.childNodes = []),
        (this.layoutChildren = []),
        (this.parentNode = null),
        (this.nextSibling = null),
        (this.previousSibling = null),
        (this._docId = null),
        (this._layout = !1),
        (this._render = !1),
        (this._renderCount = null);
    }
    get nodeType() {
      return this._nodeType;
    }
    get nodeName() {
      return this._nodeName;
    }
    get nodeValue() {
      return this._nodeValue;
    }
    get ownerDocument() {
      return this._ownerDocument;
    }
    get textContent() {
      return this._textContent;
    }
    set textContent(e) {
      if (this.nodeType !== ue.NodeType.TEXT) {
        const t = this.ownerDocument.createTextNode(e);
        this.appendChild(t);
      } else this._textContent = e;
    }
  }
  (ue.NodeRef = de), (ue.NodeType = he);
  const fe = {};
  function me(e) {
    return fe[e];
  }
  function ge(e) {
    const t = me(e);
    return t && t.listener ? t.listener : null;
  }
  function ye(e, t) {
    if (e._docId === t) return;
    const n = me(t);
    if (n) {
      (e._docId = t), (n._nodeMap[e.ref] = e);
      for (let t = 0, n = e.childNodes.length; t < n; t++)
        ye(e.childNodes[t], e._docId);
    }
  }
  function be(e, t) {
    return e._nodeMap[t];
  }
  function ve(e, t) {
    (e.parentNode = t),
      t._docId && (ye(e, t._docId), (e._depth = t._depth + 1));
    for (let t = 0, n = e.childNodes.length; t < n; t++) ve(e.childNodes[t], e);
  }
  function Ee(e, t, n, i) {
    n < 0 && (n = 0);
    const o = t[n - 1],
      r = t[n];
    return (
      t.splice(n, 0, e),
      i &&
        (o && (o.nextSibling = e || null),
        (e.previousSibling = o || null),
        (e.nextSibling = r || null),
        r && (r.previousSibling = e || null)),
      n
    );
  }
  function we(e, t, n) {
    const i = t.indexOf(e);
    if (!(i < 0)) {
      if (n) {
        const n = t[i - 1],
          o = t[i + 1];
        n && (n.nextSibling = o || null),
          o && (o.previousSibling = n || null),
          (e.previousSibling = null),
          (e.nextSibling = null);
      }
      t.splice(i, 1);
    }
  }
  function ke(e, t, n, i) {
    const o = t.indexOf(e);
    if (o < 0 || o === n) return -1;
    we(e, t, i);
    let r = n;
    return o <= n && (r = n - 1), Ee(e, t, r, i), n;
  }
  function xe(e, t) {
    const n = me(e);
    return n ? n._styleSheetHash[t] : null;
  }
  function _e(e) {
    const t = [];
    let n = e;
    const i = e._docId,
      o = me(i)._styleSheetHash[0].map(e => xe(i, e));
    for (
      t.push(...o), e._bUseParentStyle && (n = e.parentNode);
      n && !n._styleSheetId;

    )
      n = n.parentNode;
    if (n && n._styleSheetId) {
      const e = xe(i, n._styleSheetId);
      -1 === t.indexOf(e) && t.push(e);
    }
    return (
      global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(
          `### App Runtime ### 获取节点(${e.ref}:${e._type})的样式表:${t
            .map(e => e.id)
            .join(',')}`
        ),
      t
    );
  }
  const Ae = /^data.+/;
  function Ce(e, t) {
    const n = [],
      i = Object.assign({}, t);
    if (e)
      for (let t = 0, o = e.length; t < o; t++) {
        const o = e[t];
        i.hasOwnProperty(o.name)
          ? (n.push({ name: T(o.name), value: i[o.name], disabled: !1 }),
            delete i[o.name])
          : o.disabled &&
            n.push({ name: T(o.name), value: o.value, disabled: o.disabled });
      }
    for (const e in i) n.push({ name: T(e), value: i[e], disabled: !1 });
    return n;
  }
  function Te(e) {
    return (e || '')
      .split(/\s+/)
      .filter(e => '' !== e)
      .filter((e, t, n) => n.indexOf(e) === t);
  }
  const Se = {};
  function Me(e) {
    return Se[e];
  }
  function Oe(e) {
    return e._attr;
  }
  function Le(e) {
    return e._style;
  }
  function Ie(e) {
    if (e._classList) return e._classList;
    const t = Oe(e);
    return (e._classList = Te(t.class)), e._classList;
  }
  function De(e) {
    return (
      (e._finalStyleCache =
        e._finalStyleCache ||
        (function(e, t) {
          if (!t)
            return (
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  '### App Runtime ### 计算节点CSS样式优先级 没有样式缓存对象，不再计算'
                ),
              {}
            );
          const n = Ne(t),
            i = n.map(e => e.style);
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              '### App Runtime ### 按照优先级合并节点样式：',
              n.map(e => `"${e.name}"`).join(' < ')
            );
          const o = Object.assign({}, ...i),
            r = Object.keys(Object.assign({}, e, o));
          for (let t = 0, n = r.length; t < n; t++) {
            const n = r[t];
            void 0 !== o[n] && void 0 === e[n]
              ? (e[n] = !0)
              : void 0 === o[n] && void 0 !== e[n] && (o[n] = '');
          }
          return o;
        })(e._usedCSSPropertyCache, e._matchedCssRuleCache)),
      e._finalStyleCache
    );
  }
  function Ne(e) {
    const t = [];
    for (const n in e) {
      const i = e[n];
      i && i.length && t.push.apply(t, i);
    }
    return t.sort((e, t) => e.score.sum - t.score.sum), t;
  }
  function Pe(e, t = !0) {
    if (e.nodeType === he.ELEMENT) {
      const n = { ref: e.ref.toString(), type: e._type },
        i = Oe(e);
      if (i && Object.keys(i).length) {
        n.attr = {};
        for (const e in i) {
          const t = i[e];
          n.attr[e] = -1 !== [null, void 0].indexOf(t) ? '' : t;
        }
      }
      const o = De(e);
      o && Object.keys(o).length && (n.style = o);
      const r = Object.keys(e._eventTargetListeners || {});
      if (
        (r && r.length && (n.event = r),
        t && e.layoutChildren && e.layoutChildren.length)
      ) {
        const t = [];
        for (let n = 0, i = e.layoutChildren.length; n < i; n++) {
          const i = e.layoutChildren[n],
            o = Pe(i);
          Re(i) ? t.push(o) : t.push.apply(t, o);
        }
        n.children = t;
      }
      return n;
    }
    if (e.nodeType === he.FIGMENT) {
      const n = [];
      if (t && e.layoutChildren && e.layoutChildren.length)
        for (let t = 0, i = e.layoutChildren.length; t < i; t++) {
          const i = e.layoutChildren[t],
            o = Pe(i);
          i.nodeType === he.FIGMENT ? n.push.apply(n, o) : n.push(o);
        }
      return n;
    }
    if (e.nodeType === he.COMMENT) return [];
    global.Env &&
      'trace' === global.Env.logLevel &&
      console.trace(
        `### App Runtime ### getNodeAsJSON() 忽略该类型(${
          e.nodeType
        })的节点序列化`
      );
  }
  function Fe(e) {
    return e._layout;
  }
  function Re(e) {
    return e._render;
  }
  function Be(e, t = !1) {
    let n = t ? e : e.parentNode;
    for (; n && !Re(n); ) n = n.parentNode;
    return n;
  }
  function je(e, t = !1) {
    const n = [];
    let i = Be(e, t);
    for (; i; ) n.push(i), (i = Be(i));
    return n;
  }
  function $e(e) {
    if (null !== e._renderCount) return e._renderCount;
    let t = Re(e) ? 1 : 0;
    if (Fe(e) && !Re(e))
      for (let n = 0, i = e.layoutChildren.length; n < i; n++)
        t += $e(e.layoutChildren[n]);
    return (e._renderCount = t), t;
  }
  function ze(e) {
    let t = e;
    for (; t; ) (t._renderCount = null), (t = t.parentNode);
  }
  function He(e) {
    const t = e.parentNode;
    if (e.nodeType === he.DOCUMENT || e.ref === de.HTML_ID) return 0;
    if (!t || !Fe(e)) return -1;
    const n = Ye(e, t);
    let i = 0;
    return Re(t) || (i = He(t)), n < 0 || i < 0 ? -1 : n + i;
  }
  function Ye(e, t) {
    if (!t.layoutChildren || t.layoutChildren.length <= 0) return -1;
    const n = t.layoutChildren.indexOf(e);
    if (n > 0) {
      let e = 0;
      for (let i = 0, o = n; i < o; i++) e += $e(t.layoutChildren[i]);
      return e;
    }
    return n;
  }
  function We(e) {
    delete e._depth,
      delete e._tmpRenderIndexInParent,
      delete e._eventTargetListeners,
      delete e._display,
      delete e._bindWatcherList,
      delete e._vm,
      delete e._bUseParentStyle,
      (function(e) {
        if (
          (delete e._docId,
          delete e._layout,
          delete e._render,
          delete e._renderCount,
          delete e.nextSibling,
          delete e.previousSibling,
          delete e.parentNode,
          e.childNodes)
        )
          for (let t = e.childNodes.length - 1; t >= 0; t--)
            Ue(e.childNodes[t]);
        delete e.layoutChildren,
          delete e.childNodes,
          delete e._content,
          delete e._ownerDocument,
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Runtime ### 销毁节点：节点(${
                e.ref
              })剩余属性有：[${Object.keys(e).join(', ')}]`
            );
      })(e);
  }
  function Ue(e) {
    global.Env &&
      'trace' === global.Env.logLevel &&
      console.trace(
        `### App Runtime ### 销毁元素：${JSON.stringify(Pe(e, !1))}`
      ),
      delete e._classList,
      delete e._styleSheetId,
      delete e._usedCSSPropertyCache,
      delete e._matchedCssRuleCache,
      delete e._finalStyleCache,
      delete e._ownCssRuleCache,
      delete e._attr,
      delete e._style,
      delete e._dataset,
      We(e);
  }
  function Ve(e, t, n) {
    n instanceof Object || (n = { capture: !!n });
    const i = t.type,
      o = e._eventTargetListeners[i],
      r = n.capture ? le.CAPTURING_PHASE : le.BUBBLING_PHASE;
    if (o && o[r] && o[r].list) {
      const n = o[r].list;
      for (let i = 0, o = n.length; i < o; i++) {
        const o = n[i];
        (t._target = e),
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Runtime ### fireTargetEventListener() 事件响应:${
                t.type
              }，节点:${e.ref}`
            ),
          o && o.call(t.target, t);
      }
    }
  }
  class Ge extends ue {
    constructor() {
      super(...arguments), (this._eventTargetListeners = {});
    }
    addEventListener(e, t, n) {
      if (arguments.length < 2)
        throw new Error(
          `### App Runtime ### addEventListener() 至少需要传递两个参数:${
            arguments.length
          }`
        );
      if ('string' != typeof e)
        throw new Error(
          '### App Runtime ### addEventListener() 参数1必须是字符串，事件类型'
        );
      if ('function' != typeof t)
        throw new Error(
          '### App Runtime ### addEventListener() 参数2必须是函数，监听事件'
        );
      global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(
          `### App Runtime ### addEventListener() 节点(${
            this.ref
          })注册事件(${e})`
        ),
        n instanceof Object || (n = { capture: !!n, once: !1, passive: !1 });
      const i = n.capture ? le.CAPTURING_PHASE : le.BUBBLING_PHASE,
        o = (this._eventTargetListeners[e] =
          this._eventTargetListeners[e] || {});
      if (
        ((o[i] = o[i] || {}),
        (o[i].list = o[i].list || []),
        (o[i].hash = o[i].hash || {}),
        -1 === o[i].list.indexOf(t))
      ) {
        const e = o[i].list.push(t);
        o[i].hash[e - 1] = {
          capture: !!n.capture,
          once: !!n.once,
          passive: !!n.passive
        };
      }
      const r = ge(this._docId);
      r && r.addEvent(this.ref, e);
    }
    removeEventListener(e, t, n) {
      if (arguments.length < 2)
        throw new Error(
          `### App Runtime ### addEventListener() 至少需要传递两个参数:${
            arguments.length
          }`
        );
      if ('string' != typeof e)
        throw new Error(
          '### App Runtime ### addEventListener() 参数1必须是字符串，事件类型'
        );
      if ('function' != typeof t)
        throw new Error(
          '### App Runtime ### addEventListener() 参数2必须是函数，监听事件'
        );
      global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(
          `### App Runtime ### Element ${
            this.ref
          } 执行 removeEventListener(${e})---- `
        ),
        n instanceof Object || (n = { capture: !!n });
      const i = n.capture ? le.CAPTURING_PHASE : le.BUBBLING_PHASE,
        o = (this._eventTargetListeners[e] =
          this._eventTargetListeners[e] || {});
      (o[i] = o[i] || {}),
        (o[i].list = o[i].list || []),
        (o[i].hash = o[i].hash || {});
      const r = o[i].list.indexOf(t);
      -1 !== r && (o[i].list.splice(r, 1), (o[i].hash[r] = null)),
        0 === o[i].list.length && (o[i] = null);
    }
    dispatchEvent(e) {
      if (!e instanceof le)
        throw new Error(
          '### App Runtime ### dispatchEvent() 参数1所属类必须是事件类'
        );
      if (
        (global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            `### App Runtime ### dispatchEvent() 执行事件:${e.type}, 来自节点:${
              this.ref
            }`
          ),
        !e._supportW3C)
      )
        return Ve(this, e);
      e._target = this;
      const t = e.type,
        n = je(this, !0),
        i = n
          .slice()
          .reverse()
          .concat(n);
      if (i[0] && i[0].parentNode === i[0].ownerDocument) {
        const e = i[0].ownerDocument;
        i.unshift(e), i.push(e);
      }
      for (; i.length > 0; ) {
        const n = i[0],
          o = i.indexOf(n),
          r = i.indexOf(this);
        if (
          ((e._eventPhase =
            o < r
              ? le.CAPTURING_PHASE
              : o === r
              ? le.AT_TARGET
              : le.BUBBLING_PHASE),
          (e._currentTarget = n),
          !e.bubbles && e.eventPhase === le.BUBBLING_PHASE)
        )
          break;
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            `### App Runtime ### dispatchEvent() 执行事件:${t}, 阶段:${
              e.eventPhase
            }, Target:${e.target.ref}, CurrentTarget:${e.currentTarget.ref}`
          );
        const s = n._eventTargetListeners[t];
        let a = e.eventPhase;
        if (
          (e.target === e.currentTarget &&
            (a = n === i[1] ? le.CAPTURING_PHASE : le.BUBBLING_PHASE),
          s && s[a] && s[a].list)
        ) {
          const t = s[a].hash,
            i = s[a].list.slice();
          for (
            let o = 0, r = i.length;
            o < r && !e._flagStopImmediatePropagation;
            o++
          ) {
            const r = i[o];
            try {
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  `### App Runtime ### dispatchEvent() 事件响应:${
                    e.type
                  }，阶段:${e.eventPhase}`
                ),
                r && r.call(e.currentTarget, e);
            } catch (t) {
              console.error(
                `### App Runtime ### dispatchEvent() 事件响应:${e.type}，阶段:${
                  e.eventPhase
                }, JS报错:`,
                t.message,
                r
              ),
                console.error(t.stack);
            }
            t[o] && t[o].once && n.removeEventListener(e.type, r, t[o]);
          }
        }
        if (e._flagStopImmediatePropagation || e._flagStopPropagation) break;
        i.shift();
      }
      e._currentTarget = null;
    }
  }
  const Je = { TAG: 1, CLASS: 1e3, ID: 1e6, STEP: 1e6, INLINE: 1e9 },
    Ze = { TAG: 1, CLASS: 2, ID: 3, DESC: 4, INLINE: 5 },
    qe = {
      name: null,
      type: null,
      score: null,
      order: 0,
      style: null,
      _sheetId: null,
      _hitNodeMap: null,
      _styleFullList: null
    };
  function Ke(e) {
    const t = Object.assign(
      {},
      qe,
      { type: Ze.TAG, score: { self: Je.TAG, depth: 1 }, _hitNodeMap: {} },
      e
    );
    return (t.score.sum = t.score.self * Je.STEP + t.order), t;
  }
  function Qe(e) {
    const t = Object.assign(
      {},
      qe,
      { type: Ze.CLASS, score: { self: Je.CLASS, depth: 1 }, _hitNodeMap: {} },
      e
    );
    return (t.score.sum = t.score.self * Je.STEP + t.order), t;
  }
  function Xe(e) {
    const t = Object.assign(
      {},
      qe,
      { type: Ze.ID, score: { self: Je.ID, depth: 1 }, _hitNodeMap: {} },
      e
    );
    return (t.score.sum = t.score.self * Je.STEP + t.order), t;
  }
  function et(e) {
    const t = Object.assign({}, qe, { type: Ze.DESC, _hitNodeMap: {} }, e);
    return (
      (t.score = (function(e, t) {
        const n = { id: 0, class: 0, tag: 0, self: 0, depth: 1 };
        for (let t = 0, i = e.length; t < i; t++) {
          const i = e[t];
          tt(i)
            ? (n.tag += 1)
            : it(i)
            ? (n.id += 1)
            : nt(i)
            ? (n.class += 1)
            : ot(i) && (n.depth += 1);
        }
        return (
          (n.self = n.id * Je.ID + n.class * Je.CLASS + n.tag * Je.TAG),
          { self: n.self, depth: n.depth }
        );
      })(t.meta.ruleDef, t.order)),
      (t.score.sum = t.score.self * Je.STEP + t.order),
      t
    );
  }
  function tt(e) {
    return 'tag' === e.type;
  }
  function nt(e) {
    return 'attribute' === e.type && 'class' === e.name;
  }
  function it(e) {
    return 'attribute' === e.type && 'id' === e.name;
  }
  function ot(e) {
    return 'descendant' === e.type || 'child' === e.type;
  }
  function rt(e, t) {
    let n;
    switch (e.type) {
      case Ze.TAG:
        n = { match: e.name === t._type, matchChanged: !1, pathChanged: !1 };
        break;
      case Ze.CLASS:
        n = {
          match: -1 !== Ie(t).indexOf(e.name.substring(1)),
          matchChanged: !1,
          pathChanged: !1
        };
        break;
      case Ze.ID:
        n = {
          match: Oe(t).id === e.name.substring(1),
          matchChanged: !1,
          pathChanged: !1
        };
        break;
      case Ze.DESC:
        n = (function(e, t) {
          const n = e.meta.ruleDef,
            i = [];
          let o = [t];
          for (let r = n.length - 1; r >= 0; r--) {
            const s = n[r],
              a = r === n.length - 1;
            if (0 === (o = at(s, o)).length || t._depth < e.score.depth)
              return st(e, t, !1, []);
            a ||
              -1 !== ['descendant', 'child'].indexOf(s.type) ||
              i.push(o[0].ref);
          }
          return st(e, t, !0, i);
        })(e, t);
        break;
      default:
        throw new Error(`不支持的CSS规则类型：${e.type}`);
    }
    return (
      n.match
        ? (function(e, t) {
            e._hitNodeMap[t] = !0;
          })(e, t.ref)
        : (function(e, t) {
            delete e._hitNodeMap[t];
          })(e, t.ref),
      n
    );
  }
  function st(e, t, n, i) {
    const o = { match: n, matchChanged: null, pathChanged: null };
    if (n) {
      const n = t._ownCssRuleCache[e.order];
      n
        ? n.join(',') === i.join(',')
          ? ((o.matchChanged = !1), (o.pathChanged = !1))
          : ((o.matchChanged = !1), (o.pathChanged = !0))
        : ((o.matchChanged = !0), (o.pathChanged = !0)),
        (t._ownCssRuleCache[e.order] = i);
    } else {
      t._ownCssRuleCache[e.order]
        ? ((o.matchChanged = !0), (o.pathChanged = !0))
        : ((o.matchChanged = !1), (o.pathChanged = !1)),
        (t._ownCssRuleCache[e.order] = null);
    }
    return (
      global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(
          `### App Runtime ### 节点(${t._type}:${t.ref})与后代CSS规则(${
            e.name
          })的匹配计算：${JSON.stringify(o)}`
        ),
      o
    );
  }
  function at(e, t) {
    const n = e.type;
    switch (n) {
      case 'attribute':
        return (function(e, t) {
          if (nt(e)) {
            const n = t.find(t => -1 !== Ie(t).indexOf(e.value));
            return n ? [n] : [];
          }
          if (it(e)) {
            const n = t.find(t => Oe(t).id === e.value);
            return n ? [n] : [];
          }
          return (
            console.warn(
              `### App Runtime ### 未知的CSS Selector规则：${
                e.name
              }，当前支持：class, id`
            ),
            []
          );
        })(e, t);
      case 'tag':
        return (function(e, t) {
          const n = t.find(t => t._type === e.name);
          return n ? [n] : [];
        })(e, t);
      case 'descendant':
        return (function(e, t) {
          const n = [];
          for (let e = 0, i = t.length; e < i; e++) {
            const i = t[e];
            n.push.apply(n, je(i));
          }
          return n;
        })(0, t);
      case 'child':
        return (function(e, t) {
          const n = [];
          for (let e = 0, i = t.length; e < i; e++) {
            const i = t[e],
              o = Be(i);
            o && n.push(o);
          }
          return n;
        })(0, t);
      default:
        return (
          console.warn(
            `### App Runtime ### 未知的CSS Selector规则：${n}，当前支持：tag, class, id, 后代, '>'`
          ),
          []
        );
    }
  }
  function lt(e, t) {
    if (!me(e._docId))
      return void (
        global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(
          `### App Runtime ### calcNodeStyle() 节点(${e.ref}:${
            e._type
          })暂无关联document`
        )
      );
    if (
      (global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(
          `### App Runtime ### calcNodeStyle() 节点(${e.ref}:${
            e._type
          })计算类型：${t}`
        ),
      (e._finalStyleCache = null),
      !t || t === Ze.INLINE)
    ) {
      const t = e._matchedCssRuleCache[Ze.INLINE];
      e._matchedCssRuleCache[Ze.INLINE] = t || [];
    }
    let n, i, o, r, s;
    (t && t !== Ze.TAG) || (e._matchedCssRuleCache[Ze.TAG] = []),
      (t && t !== Ze.CLASS) || (e._matchedCssRuleCache[Ze.CLASS] = []),
      (t && t !== Ze.ID) || (e._matchedCssRuleCache[Ze.ID] = []);
    const a = Le(e);
    if (
      (!t || t === Ze.INLINE) &&
      ((n = e._matchedCssRuleCache[Ze.INLINE]).length
        ? (n[0].style = a)
        : n.push(
            (function(e) {
              const t = Object.assign(
                {},
                qe,
                {
                  name: 'INLINE',
                  type: Ze.INLINE,
                  score: { self: Je.INLINE },
                  _hitNodeMap: {}
                },
                e
              );
              return (t.score.sum = t.score.self * Je.STEP + t.order), t;
            })({ style: a })
          ),
      t === Ze.INLINE)
    )
      return;
    const l = _e(e);
    for (let a = 0, c = l.length; a < c; a++) {
      const c = l[a],
        d = (c.id, c.nameHash),
        h = c.descLast;
      if (!t || t === Ze.TAG) {
        n = e._matchedCssRuleCache[Ze.TAG];
        const t = e._type;
        if ((s = !1)) n.push.apply(n, s);
        else {
          (i = o = []), d.hasOwnProperty(t) && (i = ct([d[t]], e));
          const s = (h[t] && h[t].list) || [];
          s.length > 0 && (o = dt(s, e)), (r = i.concat(o)), n.push.apply(n, r);
        }
      }
      const p = Ie(e);
      if (p.length > 0 && (!t || t === Ze.CLASS)) {
        n = e._matchedCssRuleCache[Ze.CLASS];
        const t = p.map(e => `.${e}`);
        for (let a = 0, l = t.length; a < l; a++) {
          const l = t[a];
          if ((s = !1)) n.push.apply(n, s);
          else {
            if (
              ((i = o = []), d.hasOwnProperty(l) && (i = ct([d[l]], e)), h[l])
            ) {
              o = dt(h[l].list || [], e);
            }
            (r = i.concat(o)), n.push.apply(n, r);
          }
        }
      }
      if (Oe(e).id && (!t || t === Ze.ID)) {
        n = e._matchedCssRuleCache[Ze.ID];
        const t = Oe(e).id,
          a = `#${t}`;
        if ((s = !1)) n.push.apply(n, s);
        else {
          (i = o = []), t && d.hasOwnProperty(a) && (i = ct([d[a]], e));
          const s = (h[a] && h[a].list) || [];
          t && s.length > 0 && (o = dt(s, e)),
            (r = i.concat(o)),
            n.push.apply(n, r);
        }
      }
    }
  }
  function ct(e, t) {
    const n = [];
    for (let i = 0, o = e.length; i < o; i++) {
      const o = e[i];
      rt(o, t).match && n.push(o);
    }
    return n;
  }
  function dt(e, t) {
    const n = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i];
      rt(o, t).match && n.push(o);
    }
    return n;
  }
  function ht(e, t) {
    const n = (function(e, t) {
        const n = _e(e),
          i = [];
        for (let e = 0, o = n.length; e < o; e++) {
          const o = n[e],
            r = o.descNotLast;
          if (r[t]) {
            const e = r[t].list;
            i.push(...e);
          }
        }
        return i;
      })(e, t),
      i = [];
    for (let t = 0, o = n.length; t < o; t++) {
      const o = pt(n[t], e);
      i.push(...o);
    }
    return M(i);
  }
  function pt(e, t) {
    const n = [];
    for (let i = 0, o = t.layoutChildren.length; i < o; i++) {
      const o = t.layoutChildren[i];
      if (Re(o)) {
        rt(e, o).matchChanged && n.push(o.ref);
      }
      const r = pt(e, o);
      n.push(...r);
    }
    return n;
  }
  function ut(e) {
    if (e.nodeType === ue.NodeType.ELEMENT && e._docId) {
      global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(
          `### App Runtime ### 添加到文档时计算节点(${e.ref}:${e._type})的样式`
        ),
        lt(e);
      for (let t = 0, n = e.layoutChildren.length; t < n; t++)
        ut(e.layoutChildren[t]);
    }
  }
  function ft(e, t, n) {
    if (t.nodeType === ue.NodeType.DOCUMENT_FRAGMENT) {
      const i = t.childNodes.slice();
      for (let o = 0, r = i.length; o < r; o++)
        t.removeChild(i[o]), ft(e, i[o], n);
      return t;
    }
    const i = Be(e, !0),
      o = n ? e.childNodes.indexOf(n) : e.childNodes.length,
      r = ge(e._docId);
    if (t.nodeType === ue.NodeType.TEXT)
      throw new Error(
        `### App Runtime ### 不支持在非渲染节点中添加文本节点：${t.textContent}`
      );
    if (t.parentNode) {
      if ((ke(t, e.childNodes, o, !0), Fe(t)))
        if (n) {
          const o = ke(t, e.layoutChildren, e.layoutChildren.indexOf(n));
          ze(e);
          const s = He(t);
          if (r && o >= 0) return r.moveNode(t, i, s);
        } else {
          const n = ke(t, e.layoutChildren, e.layoutChildren.length);
          ze(e);
          const o = He(t);
          if (r && n >= 0) return r.moveNode(t, i, o);
        }
    } else if ((ve(t, e), Ee(t, e.childNodes, o, !0), ut(t), Fe(t)))
      if (n) {
        Ee(t, e.layoutChildren, e.layoutChildren.indexOf(n)), ze(e);
        const o = He(t);
        if (r) return r.addNode(t, i, o);
      } else {
        Ee(t, e.layoutChildren, e.layoutChildren.length), ze(e);
        const n = e === i ? -1 : He(t);
        if (r) return r.addNode(t, i, n);
      }
  }
  class mt extends Ge {
    constructor() {
      super(...arguments),
        (this._depth = null),
        (this._tmpRenderIndexInParent = null);
    }
    appendChild(e) {
      if (!e || !e instanceof ue)
        throw new Error('### App Runtime ### appendChild() 函数的node参数无效');
      if (e.parentNode && e.parentNode !== this)
        throw new Error(
          '### App Runtime ### appendChild() 参数node的父节点不匹配'
        );
      return ft(this, e, null);
    }
    insertBefore(e, t) {
      if (!e || 2 !== arguments.length || !e instanceof ue)
        throw new Error(
          '### App Runtime ### insertBefore() 函数的node/before参数无效'
        );
      if (e.parentNode && e.parentNode !== this)
        throw new Error(
          '### App Runtime ### insertBefore() 参数node的父节点不匹配'
        );
      return e === t || (e.nextSibling && e.nextSibling === t)
        ? e
        : ft(this, e, t);
    }
    removeChild(e) {
      if (!e || !e instanceof ue)
        throw new Error('### App Runtime ### removeChild() node参数无效');
      if (e.parentNode !== this)
        throw new Error(
          '### App Runtime ### removeChild() 参数node的父节点不匹配'
        );
      if (
        (global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            `### App Runtime ### removeChild() 移除节点：${JSON.stringify(
              Pe(e)
            )}`
          ),
        ze(e),
        (e.parentNode = null),
        Fe(e))
      ) {
        if (Re(e)) {
          const t = ge(e._docId);
          t && t.removeElement(e.ref);
        } else {
          const t = e.childNodes.slice();
          for (let n = 0; n < t.length; n++) e.removeChild(t[n]);
        }
        we(e, this.layoutChildren);
      }
      return (
        we(e, this.childNodes, !0),
        (function e(t, n) {
          if (t._docId !== n) return;
          const i = me(n);
          if (i) {
            for (let n = 0, i = t.childNodes.length; n < i; n++)
              e(t.childNodes[n], t._docId);
            (t._depth = null), (i._nodeMap[t.ref] = null), (t._docId = null);
          }
        })(e, e._docId),
        e
      );
    }
    toJSON() {
      return Pe(this);
    }
  }
  class gt extends mt {
    constructor(e) {
      super(...arguments),
        (this._nodeType = ue.NodeType.COMMENT),
        (this._nodeName = '#comment'),
        (this._nodeValue = e),
        (this._layout = !0),
        (this._render = !1),
        (this._data = e);
    }
    get data() {
      return this._data;
    }
    set data(e) {
      const t = '' + e;
      return (this._nodeValue = t), (this._data = t), this._data;
    }
    appendChild(e) {
      throw new Error(
        '### App Runtime ### appendChild() 注释节点不支持插入子节点'
      );
    }
    insertBefore(e, t) {
      throw new Error(
        '### App Runtime ### insertBefore() 注释节点不支持插入子节点'
      );
    }
    toString() {
      return '\x3c!-- ' + this._data + ' --\x3e';
    }
  }
  function yt(e, t, n, i, o) {
    if (!e._ownerDocument || 'ref' === t) return;
    if (
      (o
        ? (console.warn(
            `### App Runtime ### 如果使用自定义组件时，设置了class属性：${n}，请确认在自定义组件的<style>...</style>中增加了对应的class样式`
          ),
          (e._bUseParentStyle = !0))
        : (e._bUseParentStyle = !1),
      !O(n) && Oe(e)[t] === n && !1 !== i)
    )
      return;
    if ('class' === t) e._classList = null;
    else if (Ae.test(t)) {
      const i = t
        .replace(/[A-Z]/g, e => '-' + e.toLowerCase())
        .replace(/^data-/, '')
        .replace(/-([a-z])/g, (e, t) => t.toUpperCase());
      e._dataset[i] = n;
    }
    const r = Oe(e)[t];
    (Oe(e)[t] = n),
      global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(`### App Runtime ### 元素的属性(${t})更新(${r}=>${n})`),
      Et(e, i, t, n),
      (function(e, t, n, i, o) {
        const r = ge(e._docId),
          s = me(e._docId);
        if (!r) return;
        if (!s._supportNotLastRuleTypeUpdate) return;
        if (
          (global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Runtime ### 元素的属性(${n})更新(${o}=>${i})`
            ),
          'class' === n)
        ) {
          const t = Te(o),
            n = Te(i),
            r = (function(e, t) {
              const n = {};
              return (
                e.forEach(e => (n[e] = !0)),
                t.forEach(e => (n[e] ? delete n[e] : (n[e] = !0))),
                Object.keys(n)
              );
            })(t, n).map(e => `.${e}`),
            a = r.map(t => ht(e, t)),
            l = M(...a);
          for (let e = 0, t = l.length; e < t; e++) {
            const t = l[e],
              n = be(s, t);
            n && (lt(n), wt(n));
          }
        } else if ('id' === n) {
          const t = o ? ht(e, `#${o}`) : [],
            n = i ? ht(e, `#${i}`) : [],
            r = M(t, n),
            a = r;
          for (let e = 0, t = a.length; e < t; e++) {
            const t = a[e],
              n = be(s, t);
            n && (lt(n), wt(n));
          }
        }
      })(e, 0, t, n, r);
  }
  function bt(e, t, n, i) {
    e._ownerDocument &&
      ((Le(e)[t] === n && !1 !== i) ||
        ((Le(e)[t] = n), Et(e, i, 'style', null, [t, n])));
  }
  function vt(e, t, n) {
    if (!e._ownerDocument) return;
    if (((t = t || ''), Le(e) === t && !1 !== n)) return;
    !(function(e, t) {
      e._style = t || {};
    })(
      e,
      'string' == typeof t
        ? (function(e) {
            const t = {};
            return (
              e
                .split(';')
                .filter(e => e.trim())
                .forEach(e => {
                  const n = e.indexOf(':');
                  let i = e.substring(0, n).trim();
                  i = _(i);
                  const o = e.substring(n + 1).trim();
                  t[i] = o;
                }),
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  `### App Runtime ### 元素的样式转换：${e} 为${JSON.stringify(
                    t
                  )}`
                ),
              t
            );
          })(t)
        : t
    ),
      Et(e, n, 'style');
  }
  function Et(e, t, n, i, o) {
    const r = ge(e._docId);
    r &&
      ('class' === n
        ? (lt(e, Ze.CLASS), !t && r.setStyles(e.ref, De(e), { class: i }))
        : 'id' === n
        ? (lt(e, Ze.ID), !t && r.setStyles(e.ref, De(e), { id: i }))
        : 'style' === n
        ? (lt(e, Ze.INLINE),
          o ? !t && r.setStyle(e.ref, ...o) : !t && r.setStyles(e.ref, De(e)))
        : !t && r.setAttr(e.ref, n, i));
  }
  function wt(e) {
    const t = ge(e._docId);
    t && t.setStyles(e.ref, De(e));
  }
  function kt(e, t) {
    const n = Ne(e._matchedCssRuleCache);
    return n.reverse(), t ? n.filter(e => e.name === t) : n;
  }
  class xt extends mt {
    constructor(e) {
      super(...arguments),
        (this._nodeType = ue.NodeType.ELEMENT),
        (this._nodeName = e.toUpperCase()),
        (this._tagName = e.toUpperCase()),
        (this._type = e),
        (this._attr = {}),
        (this._style = {}),
        (this._dataset = {}),
        (this._layout = !0),
        (this._render = !0),
        (this._classList = null),
        (this._styleSheetId = null),
        (this._usedCSSPropertyCache = {}),
        (this._matchedCssRuleCache = {}),
        (this._finalStyleCache = null),
        (this._ownCssRuleCache = {});
    }
    get type() {
      return (
        console.warn('### App Runtime ### type属性将被废弃，不推荐使用'),
        this._type
      );
    }
    get id() {
      console.warn('### App Runtime ### id属性将被废弃，不推荐使用');
      const e = Oe(this);
      return e && e.id;
    }
    get dataset() {
      return this._dataset;
    }
    get attr() {
      return (
        console.warn('### App Runtime ### attr属性将被废弃，不推荐使用'),
        Oe(this)
      );
    }
    get tagName() {
      return this._tagName;
    }
    appendChild(e) {
      return e.nodeType === ue.NodeType.TEXT
        ? (yt(this, 'value', e.textContent), ve(e, this), e)
        : super.appendChild(e);
    }
    insertBefore(e, t) {
      return e.nodeType === ue.NodeType.TEXT
        ? (yt(this, 'value', e.textContent), ve(e, this), e)
        : super.insertBefore(e, t);
    }
    hasAttribute(e) {
      const t = Oe(this);
      return t && t.hasOwnProperty(e);
    }
    setAttr(e, t) {
      yt(this, e, t);
    }
    setStyle(e, t) {
      'number' == typeof t && (t += ''), bt(this, e, t);
    }
    toString() {
      const e = Oe(this),
        t = De(this);
      return (
        '<' +
        this._type +
        ' attr=' +
        JSON.stringify(e) +
        ' style=' +
        JSON.stringify(t) +
        '>' +
        this.layoutChildren.map(e => e.toString()).join('') +
        '</' +
        this._type +
        '>'
      );
    }
  }
  class _t extends mt {
    constructor() {
      super(...arguments),
        (this._nodeType = ue.NodeType.DOCUMENT_FRAGMENT),
        (this._nodeName = '#document-fragment'),
        (this._layout = !0),
        (this._render = !1);
    }
  }
  class At extends mt {
    constructor() {
      super(...arguments),
        (this._nodeType = ue.NodeType.FIGMENT),
        (this._nodeName = '#figment'),
        (this._layout = !0),
        (this._render = !1);
    }
    toString() {
      let e = '';
      return (
        this.childNodes.length &&
          (e = this.childNodes.map(e => e.toString()).join('')),
        e
      );
    }
  }
  class Ct extends mt {
    constructor(e) {
      super(...arguments),
        (this._nodeType = ue.NodeType.TEXT),
        (this._nodeName = '#text'),
        (this._textContent = e),
        (this._wholeText = e),
        (this._layout = !1),
        (this._render = !1);
    }
    get wholeText() {
      return this._wholeText;
    }
    appendChild(e) {
      throw new Error(
        '### App Runtime ### appendChild() 文本节点不支持插入子节点'
      );
    }
    insertBefore(e, t) {
      throw new Error(
        '### App Runtime ### insertBefore() 文本节点不支持插入子节点'
      );
    }
  }
  class Tt extends xt {
    constructor() {
      super(...arguments), (this.ref = ue.NodeRef.HTML_ID), (this._depth = 0);
    }
    appendChild(e) {
      return (function(e, t, n) {
        if (e.layoutChildren.length > 0 || t.parentNode)
          return void console.warn(
            '### App Runtime ### Document添加多个Body节点----'
          );
        const i = me(e._docId),
          o = e.childNodes,
          r = o.indexOf(n);
        r < 0 ? o.push(t) : o.splice(r, 0, t),
          Fe(t)
            ? (ye(t, t._docId),
              ve(t, e),
              Ee(t, e.layoutChildren, e.layoutChildren.length),
              ze(e),
              ut(t),
              (i.body = t),
              ge(e._docId).createBody(t))
            : ve(t, e);
      })(this, e);
    }
    insertBefore(e, t) {
      console.warn('### App Runtime ### 暂不支持nodeHtml.insertBefore()');
    }
  }
  const St = /^(touchstart|touchmove|touchcancel|touchend|click|longpress)$/;
  function Mt(e, t) {
    let n;
    return (
      St.test(e)
        ? (((n = new ce(e, t))._supportW3C = !1),
          global.isRpkMinPlatformVersionGEQ(1040) &&
            ((n._supportW3C = !0), (n._bubbles = !0)))
        : ((n = new le(e, t))._supportW3C = !1),
      n
    );
  }
  function Ot(e) {
    const t = new Tt('html');
    return (
      (t._ownerDocument = e),
      ye(t, e._docId),
      (t.parentNode = e),
      e.childNodes.push(t),
      e.layoutChildren.push(t),
      t
    );
  }
  class Lt extends mt {
    constructor(e, t) {
      var n, i;
      super(...arguments),
        (this._nodeType = ue.NodeType.DOCUMENT),
        (this._nodeName = '#document'),
        (this.body = null),
        (e = e ? e.toString() : ''),
        (this._docId = e),
        (this._nodeMap = {}),
        (this.listener = t),
        (this._styleSheetHash = {}),
        (this._styleSheetHash[0] = []),
        (n = this._docId),
        (i = this),
        n && (fe[n] = i),
        Object.defineProperty(this, 'documentElement', {
          configurable: !0,
          enumerable: !1,
          writable: !1,
          value: Ot(this)
        }),
        (this._supportNotLastRuleTypeUpdate = !0);
    }
    createElement(e) {
      const t = new xt(e);
      return (t._ownerDocument = this), t;
    }
    createDocumentFragment() {
      const e = new _t();
      return (e._ownerDocument = this), e;
    }
    createTextNode(e) {
      const t = new Ct(e);
      return (t._ownerDocument = this), t;
    }
    createComment(e) {
      const t = new gt(e);
      return (t._ownerDocument = this), t;
    }
    createEvent(e, t) {
      return Mt(e, t);
    }
  }
  var It = function(e, t) {
      var n = [];
      if (
        '' !==
        (e = (function e(t, n, i) {
          var o,
            r,
            s,
            a,
            l = [],
            c = !1;
          function d() {
            var e = n.match(Dt)[0];
            return (n = n.substr(e.length)), Yt(e);
          }
          function h(e) {
            for (; Wt(n.charAt(e)); ) e++;
            n = n.substr(e);
          }
          function p(e) {
            for (var t = 0; '\\' === n.charAt(--e); ) t++;
            return 1 == (1 & t);
          }
          for (h(0); '' !== n; )
            if (Wt((r = n.charAt(0)))) (c = !0), h(1);
            else if (r in Rt) l.push({ type: Rt[r] }), (c = !1), h(1);
            else if (',' === r) {
              if (0 === l.length) throw new SyntaxError('empty sub-selector');
              t.push(l), (l = []), (c = !1), h(1);
            } else if (
              (c && (l.length > 0 && l.push({ type: 'descendant' }), (c = !1)),
              '*' === r)
            )
              (n = n.substr(1)), l.push({ type: 'universal' });
            else if (r in Bt)
              (n = n.substr(1)),
                l.push({
                  type: 'attribute',
                  name: Bt[r][0],
                  action: Bt[r][1],
                  value: d(),
                  ignoreCase: !1
                });
            else if ('[' === r) {
              if (((n = n.substr(1)), !(o = n.match(Pt))))
                throw new SyntaxError('Malformed attribute selector: ' + n);
              (n = n.substr(o[0].length)),
                (s = Yt(o[1])),
                (i &&
                  ('lowerCaseAttributeNames' in i
                    ? !i.lowerCaseAttributeNames
                    : i.xmlMode)) ||
                  (s = s.toLowerCase()),
                l.push({
                  type: 'attribute',
                  name: s,
                  action: Ft[o[2]],
                  value: Yt(o[4] || o[5] || ''),
                  ignoreCase: !!o[6]
                });
            } else if (':' === r) {
              if (':' === n.charAt(1)) {
                (n = n.substr(2)),
                  l.push({ type: 'pseudo-element', name: d().toLowerCase() });
                continue;
              }
              if (
                ((n = n.substr(1)),
                (s = d().toLowerCase()),
                (o = null),
                '(' === n.charAt(0))
              )
                if (s in jt) {
                  var u = (a = n.charAt(1)) in zt;
                  if (((n = n.substr(u + 1)), (n = e((o = []), n, i)), u)) {
                    if (n.charAt(0) !== a)
                      throw new SyntaxError('unmatched quotes in :' + s);
                    n = n.substr(1);
                  }
                  if (')' !== n.charAt(0))
                    throw new SyntaxError(
                      'missing closing parenthesis in :' + s + ' ' + n
                    );
                  n = n.substr(1);
                } else {
                  for (var f = 1, m = 1; m > 0 && f < n.length; f++)
                    '(' !== n.charAt(f) || p(f)
                      ? ')' !== n.charAt(f) || p(f) || m--
                      : m++;
                  if (m) throw new SyntaxError('parenthesis not matched');
                  (o = n.substr(1, f - 2)),
                    (n = n.substr(f)),
                    s in $t &&
                      ((a = o.charAt(0)) === o.slice(-1) &&
                        a in zt &&
                        (o = o.slice(1, -1)),
                      (o = Yt(o)));
                }
              l.push({ type: 'pseudo', name: s, data: o });
            } else {
              if (!Dt.test(n))
                return (
                  l.length && 'descendant' === l[l.length - 1].type && l.pop(),
                  Ut(t, l),
                  n
                );
              (s = d()),
                (i && ('lowerCaseTags' in i ? !i.lowerCaseTags : i.xmlMode)) ||
                  (s = s.toLowerCase()),
                l.push({ type: 'tag', name: s });
            }
          return Ut(t, l), n;
        })(n, e + '', t))
      )
        throw new SyntaxError('Unmatched selector: ' + e);
      return n;
    },
    Dt = /^(?:\\.|[\w\-\u00c0-\uFFFF])+/,
    Nt = /\\([\da-f]{1,6}\s?|(\s)|.)/gi,
    Pt = /^\s*((?:\\.|[\w\u00c0-\uFFFF\-])+)\s*(?:(\S?)=\s*(?:(['"])([^]*?)\3|(#?(?:\\.|[\w\u00c0-\uFFFF\-])*)|)|)\s*(i)?\]/,
    Ft = {
      __proto__: null,
      undefined: 'exists',
      '': 'equals',
      '~': 'element',
      '^': 'start',
      $: 'end',
      '*': 'any',
      '!': 'not',
      '|': 'hyphen'
    },
    Rt = {
      __proto__: null,
      '>': 'child',
      '<': 'parent',
      '~': 'sibling',
      '+': 'adjacent'
    },
    Bt = { __proto__: null, '#': ['id', 'equals'], '.': ['class', 'element'] },
    jt = { __proto__: null, has: !0, not: !0, matches: !0 },
    $t = { __proto__: null, contains: !0, icontains: !0 },
    zt = { __proto__: null, '"': !0, "'": !0 };
  function Ht(e, t, n) {
    var i = '0x' + t - 65536;
    return i != i || n
      ? t
      : i < 0
      ? String.fromCharCode(i + 65536)
      : String.fromCharCode((i >> 10) | 55296, (1023 & i) | 56320);
  }
  function Yt(e) {
    return e.replace(Nt, Ht);
  }
  function Wt(e) {
    return ' ' === e || '\n' === e || '\t' === e || '\f' === e || '\r' === e;
  }
  function Ut(e, t) {
    if (e.length > 0 && 0 === t.length)
      throw new SyntaxError('empty sub-selector');
    e.push(t);
  }
  const Vt = new WeakMap();
  function Gt(e, t) {
    if (!Vt.has(t)) {
      const n = (function(e, t) {
        const n = Object.keys(t || {}),
          i = {
            id: Jt++,
            name: e,
            from: 0,
            size: 0,
            nameHash: {},
            descLast: {},
            descNotLast: {}
          };
        (i.from = Zt), (i.size = n.length), (Zt += n.length);
        for (let e = 0, o = n.length; e < o; e++) {
          const o = n[e],
            r = t[o];
          let s;
          if (!r || '_' === o[0]) continue;
          if (r.animationName) {
            const e = Kt(r.animationName, t);
            e && (r.animationKeyframes = e);
          }
          if (r.fontFamily) {
            const e = Qt(r.fontFamily, t);
            e && (r.fontFamilyDesc = e);
          }
          if (!r._meta && qt.test(o)) {
            try {
              const e = en(o),
                t = e[0];
              t.length > 1 && ((r._meta = {}), (r._meta.ruleDef = t));
            } catch (e) {
              console.warn(
                `### App Runtime ### 编译CSS后代选择器(${o})出错：${e.message}`
              );
              continue;
            }
            global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(`### App Runtime ### 编译CSS后代选择器(${o})`);
          }
          if (r._meta && r._meta.ruleDef) {
            const e = r._meta.ruleDef;
            for (let t = 0, n = e.length; t < n; t++) {
              const n = e[t];
              tt(n)
                ? (n.idtt = n.name)
                : nt(n)
                ? (n.idtt = `.${n.value}`)
                : it(n) && (n.idtt = `#${n.value}`);
            }
          }
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Runtime ### 遍历样式节点(${
                i.id
              })的选择器(${o})：${JSON.stringify(r)}`
            );
          const a = Object.assign({}, r),
            l = i.from + e;
          if (a._meta) {
            const e = a._meta;
            delete a._meta,
              (i.nameHash[o] = s = et({
                name: o,
                score: null,
                order: l,
                style: a,
                meta: e,
                _sheetId: i.id
              }));
            const t = s.meta.ruleDef,
              n = t[t.length - 1];
            for (let e = 0, n = t.length; e < n - 1; e++) {
              const n = t[e];
              if (!ot(n)) {
                const e = n.idtt;
                (i.descNotLast[e] = i.descNotLast[e] || { list: [] }),
                  i.descNotLast[e].list.push(s);
              }
            }
            if (!ot(n)) {
              const e = n.idtt;
              (i.descLast[e] = i.descLast[e] || { list: [] }),
                i.descLast[e].list.push(s);
            }
          } else {
            if ('@KEYFRAMES' === o) continue;
            '#' === o[0]
              ? (i.nameHash[o] = s = Xe({
                  name: o,
                  order: l,
                  style: a,
                  _sheetId: i.id
                }))
              : '.' === o[0]
              ? (i.nameHash[o] = s = Qe({
                  name: o,
                  order: l,
                  style: a,
                  _sheetId: i.id
                }))
              : (i.nameHash[o] = s = Ke({
                  name: o,
                  order: l,
                  style: a,
                  _sheetId: i.id
                }));
          }
        }
        return i;
      })(e, t);
      Vt.set(t, n);
    }
    return Vt.get(t);
  }
  let Jt = 1,
    Zt = 1;
  const qt = /\s/;
  function Kt(e, t) {
    const n = t['@KEYFRAMES'];
    if (n) {
      const t = n[e];
      if (t) return JSON.stringify(t);
    }
    return null;
  }
  function Qt(e, t) {
    const n = t['@FONT-FACE'],
      i = e.replace(/["']+/g, '').split(','),
      o = [];
    return i.length > 0
      ? (i.forEach(e => {
          (e = e.trim()) &&
            (n && n[e] ? o.push(n[e]) : o.push({ fontName: e }));
        }),
        JSON.stringify(o))
      : null;
  }
  const Xt = new Map();
  function en(e) {
    return Xt.has(e) || Xt.set(e, It(e)), Xt.get(e);
  }
  function tn(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var nn = tn(function(e) {
      var t = (e.exports =
        'undefined' != typeof window && window.Math == Math
          ? window
          : 'undefined' != typeof self && self.Math == Math
          ? self
          : Function('return this')());
      'number' == typeof __g && (__g = t);
    }),
    on = tn(function(e) {
      var t = (e.exports = { version: '2.6.2' });
      'number' == typeof __e && (__e = t);
    }),
    rn = (on.version,
    function(e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e;
    }),
    sn = rn,
    an = function(e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    ln = !an(function() {
      return (
        7 !=
        Object.defineProperty({}, 'a', {
          get: function() {
            return 7;
          }
        }).a
      );
    }),
    cn = rn,
    dn = nn.document,
    hn = cn(dn) && cn(dn.createElement),
    pn =
      !ln &&
      !an(function() {
        return (
          7 !=
          Object.defineProperty(
            ((e = 'div'), hn ? dn.createElement(e) : {}),
            'a',
            {
              get: function() {
                return 7;
              }
            }
          ).a
        );
        var e;
      }),
    un = rn,
    fn = function(e) {
      if (!sn(e)) throw TypeError(e + ' is not an object!');
      return e;
    },
    mn = pn,
    gn = function(e, t) {
      if (!un(e)) return e;
      var n, i;
      if (t && 'function' == typeof (n = e.toString) && !un((i = n.call(e))))
        return i;
      if ('function' == typeof (n = e.valueOf) && !un((i = n.call(e))))
        return i;
      if (!t && 'function' == typeof (n = e.toString) && !un((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    },
    yn = Object.defineProperty,
    bn = {
      f: ln
        ? Object.defineProperty
        : function(e, t, n) {
            if ((fn(e), (t = gn(t, !0)), fn(n), mn))
              try {
                return yn(e, t, n);
              } catch (e) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported!');
            return 'value' in n && (e[t] = n.value), e;
          }
    },
    vn = function(e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    },
    En = ln
      ? function(e, t, n) {
          return bn.f(e, t, vn(1, n));
        }
      : function(e, t, n) {
          return (e[t] = n), e;
        },
    wn = {}.hasOwnProperty,
    kn = function(e, t) {
      return wn.call(e, t);
    },
    xn = 0,
    _n = Math.random(),
    An = function(e) {
      return 'Symbol('.concat(
        void 0 === e ? '' : e,
        ')_',
        (++xn + _n).toString(36)
      );
    },
    Cn = tn(function(e) {
      var t = nn,
        n = En,
        i = kn,
        o = An('src'),
        r = Function.toString,
        s = ('' + r).split('toString');
      (on.inspectSource = function(e) {
        return r.call(e);
      }),
        (e.exports = function(e, r, a, l) {
          var c = 'function' == typeof a;
          c && (i(a, 'name') || n(a, 'name', r)),
            e[r] !== a &&
              (c && (i(a, o) || n(a, o, e[r] ? '' + e[r] : s.join(String(r)))),
              e === t
                ? (e[r] = a)
                : l
                ? e[r]
                  ? (e[r] = a)
                  : n(e, r, a)
                : (delete e[r], n(e, r, a)));
        })(Function.prototype, 'toString', function() {
          return ('function' == typeof this && this[o]) || r.call(this);
        });
    }),
    Tn = function(e) {
      if ('function' != typeof e) throw TypeError(e + ' is not a function!');
      return e;
    },
    Sn = nn,
    Mn = on,
    On = En,
    Ln = Cn,
    In = function(e, t, n) {
      if ((Tn(e), void 0 === t)) return e;
      switch (n) {
        case 1:
          return function(n) {
            return e.call(t, n);
          };
        case 2:
          return function(n, i) {
            return e.call(t, n, i);
          };
        case 3:
          return function(n, i, o) {
            return e.call(t, n, i, o);
          };
      }
      return function() {
        return e.apply(t, arguments);
      };
    },
    Dn = function(e, t, n) {
      var i,
        o,
        r,
        s,
        a = e & Dn.F,
        l = e & Dn.G,
        c = e & Dn.S,
        d = e & Dn.P,
        h = e & Dn.B,
        p = l ? Sn : c ? Sn[t] || (Sn[t] = {}) : (Sn[t] || {}).prototype,
        u = l ? Mn : Mn[t] || (Mn[t] = {}),
        f = u.prototype || (u.prototype = {});
      for (i in (l && (n = t), n))
        (r = ((o = !a && p && void 0 !== p[i]) ? p : n)[i]),
          (s =
            h && o
              ? In(r, Sn)
              : d && 'function' == typeof r
              ? In(Function.call, r)
              : r),
          p && Ln(p, i, r, e & Dn.U),
          u[i] != r && On(u, i, s),
          d && f[i] != r && (f[i] = r);
    };
  (Sn.core = Mn),
    (Dn.F = 1),
    (Dn.G = 2),
    (Dn.S = 4),
    (Dn.P = 8),
    (Dn.B = 16),
    (Dn.W = 32),
    (Dn.U = 64),
    (Dn.R = 128);
  var Nn,
    Pn,
    Fn = Dn,
    Rn = {}.toString,
    Bn = function(e) {
      return Rn.call(e).slice(8, -1);
    },
    jn = Object('z').propertyIsEnumerable(0)
      ? Object
      : function(e) {
          return 'String' == Bn(e) ? e.split('') : Object(e);
        },
    $n = function(e) {
      if (null == e) throw TypeError("Can't call method on  " + e);
      return e;
    },
    zn = jn,
    Hn = $n,
    Yn = function(e) {
      return zn(Hn(e));
    },
    Wn = Math.ceil,
    Un = Math.floor,
    Vn = function(e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? Un : Wn)(e);
    },
    Gn = Vn,
    Jn = Math.min,
    Zn = Vn,
    qn = Math.max,
    Kn = Math.min,
    Qn = Yn,
    Xn = function(e) {
      return e > 0 ? Jn(Gn(e), 9007199254740991) : 0;
    },
    ei = function(e, t) {
      return (e = Zn(e)) < 0 ? qn(e + t, 0) : Kn(e, t);
    },
    ti = tn(function(e) {
      var t = on,
        n = nn,
        i = n['__core-js_shared__'] || (n['__core-js_shared__'] = {});
      (e.exports = function(e, t) {
        return i[e] || (i[e] = void 0 !== t ? t : {});
      })('versions', []).push({
        version: t.version,
        mode: 'global',
        copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
      });
    })('keys'),
    ni = An,
    ii = kn,
    oi = Yn,
    ri = ((Nn = !1),
    function(e, t, n) {
      var i,
        o = Qn(e),
        r = Xn(o.length),
        s = ei(n, r);
      if (Nn && t != t) {
        for (; r > s; ) if ((i = o[s++]) != i) return !0;
      } else
        for (; r > s; s++)
          if ((Nn || s in o) && o[s] === t) return Nn || s || 0;
      return !Nn && -1;
    }),
    si = ti[(Pn = 'IE_PROTO')] || (ti[Pn] = ni(Pn)),
    ai = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
      ','
    ),
    li = function(e, t) {
      var n,
        i = oi(e),
        o = 0,
        r = [];
      for (n in i) n != si && ii(i, n) && r.push(n);
      for (; t.length > o; ) ii(i, (n = t[o++])) && (~ri(r, n) || r.push(n));
      return r;
    },
    ci = ai,
    di =
      Object.keys ||
      function(e) {
        return li(e, ci);
      },
    hi = Object.getOwnPropertySymbols,
    pi = $n,
    ui = di,
    fi = { f: hi },
    mi = { f: {}.propertyIsEnumerable },
    gi = function(e) {
      return Object(pi(e));
    },
    yi = jn,
    bi = Object.assign,
    vi =
      !bi ||
      an(function() {
        var e = {},
          t = {},
          n = Symbol(),
          i = 'abcdefghijklmnopqrst';
        return (
          (e[n] = 7),
          i.split('').forEach(function(e) {
            t[e] = e;
          }),
          7 != bi({}, e)[n] || Object.keys(bi({}, t)).join('') != i
        );
      })
        ? function(e, t) {
            for (
              var n = gi(e), i = arguments.length, o = 1, r = fi.f, s = mi.f;
              i > o;

            )
              for (
                var a,
                  l = yi(arguments[o++]),
                  c = r ? ui(l).concat(r(l)) : ui(l),
                  d = c.length,
                  h = 0;
                d > h;

              )
                s.call(l, (a = c[h++])) && (n[a] = l[a]);
            return n;
          }
        : bi,
    Ei = Fn;
  Ei(Ei.S + Ei.F, 'Object', { assign: vi });
  on.Object.assign;
  function wi(e) {
    return Array.isArray
      ? Array.isArray(e)
      : '[object Array]' === Object.prototype.toString.call(e);
  }
  let ki = !1;
  !(function() {
    try {
      const e = new Image();
      (e.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'),
        (e.onload = function() {
          2 === e.height && (ki = !0);
        });
    } catch (e) {}
  })();
  const xi = !1;
  function _i(e) {
    return Object.prototype.toString
      .call(e)
      .slice(8, -1)
      .toLowerCase();
  }
  function Ai(e) {
    ('number' != typeof e || e <= 0) && (e = 10);
    const t = Math.pow(10, e);
    return Math.floor(Date.now() + Math.random() * t) % t;
  }
  function Ci(e, t) {
    let n,
      i,
      o,
      r = null,
      s = 0;
    const a = function() {
      (s = Date.now()), (r = null), (n = e.apply(i, o));
    };
    return function() {
      const l = Date.now(),
        c = t - (l - s);
      return (
        (i = this),
        (o = Array.prototype.slice.call(arguments)),
        c <= 0
          ? (clearTimeout(r), (r = null), (s = l), (n = e.apply(i, o)))
          : r || (r = setTimeout(a, c)),
        n
      );
    };
  }
  function Ti(e) {
    return e
      ? e.replace(/([A-Z])/g, function(e, t) {
          return `-${t.toLowerCase()}`;
        })
      : '';
  }
  function Si(e) {
    return ['default', 'go', 'next', 'search', 'send'].indexOf(e) > -1
      ? e
      : 'done';
  }
  function Mi(e) {
    return e.indexOf('px') > -1 ? e : `${e}px`;
  }
  var Oi = Object.freeze({
    isArray: wi,
    slice: function(e, t, n) {
      return wi(e) ? e.slice(t, n) : Array.prototype.slice.call(e, t, n);
    },
    vendors: ['ms', 'moz', 'webkit', 'o'],
    getType: _i,
    appendStyle: function(e, t, n) {
      let i = document.getElementById(t);
      i && n && (i.parentNode.removeChild(i), (i = null)),
        i ||
          (((i = document.createElement('style')).type = 'text/css'),
          t && (i.id = t),
          document.getElementsByTagName('head')[0].appendChild(i)),
        i.appendChild(document.createTextNode(e));
    },
    getUniqueFromArray: function(e) {
      if (!wi(e)) return [];
      const t = [],
        n = {};
      let i;
      for (let o = 0, r = e.length; o < r; o++)
        n[(i = e[o])] || ((n[i] = !0), t.push(i));
      return t;
    },
    detectWebp: function() {
      return ki;
    },
    detectSticky: function() {
      return xi;
    },
    getRandom: Ai,
    getRgb: function(e) {
      let t;
      return (t = (e += '').match(
        /#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/
      ))
        ? {
            r: parseInt(t[1], 16),
            g: parseInt(t[2], 16),
            b: parseInt(t[3], 16)
          }
        : (t = e.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/))
        ? { r: parseInt(t[1]), g: parseInt(t[2]), b: parseInt(t[3]) }
        : void 0;
    },
    loopArray: function(e, t, n) {
      if (!wi(e)) return;
      let i = 'l' === (n + '').toLowerCase();
      const o = e.length;
      if (((t %= o) < 0 && ((t = -t), (i = !i)), 0 === t)) return e;
      let r, s;
      return (
        i
          ? ((r = e.slice(0, t)), (s = e.slice(t)))
          : ((r = e.slice(0, o - t)), (s = e.slice(o - t))),
        s.concat(r)
      );
    },
    throttle: Ci,
    camelToKebab: Ti,
    kebabToCamel: function(e) {
      return e
        ? e.replace(/-([a-z])/g, function(e, t) {
            return console.log(t), `${t.toUpperCase()}`;
          })
        : '';
    },
    findEnterKeyType: Si,
    getLength: Mi,
    extend: S,
    toArray: function(e, t) {
      t = t || 0;
      let n = e.length - t;
      const i = new Array(n);
      for (; n--; ) i[n] = e[n + t];
      return i;
    },
    isObject: O,
    isPlainObject: D,
    typof: w
  });
  const Li = [];
  let Ii = !1,
    Di = 0;
  function Ni(e) {
    const t = e.node.getBoundingClientRect();
    return (
      t.right > 0 &&
      t.left < window.innerWidth &&
      t.bottom > 0 &&
      t.top < window.innerHeight
    );
  }
  function Pi(e) {
    const t = e.getParentScroller();
    return t
      ? Ni(e) &&
          ((n = e.node.getBoundingClientRect()),
          (i = t.node.getBoundingClientRect()),
          n.left < i.right &&
            n.right > i.left &&
            n.top < i.bottom &&
            n.bottom > i.top)
      : Ni(e);
    var n, i;
  }
  function Fi(e) {
    let t;
    if ('scrolling' === e.originalType) t = e.direction;
    else {
      const e = window.scrollY;
      (t = e >= Di ? 'up' : 'down'), (Di = e);
    }
    const n = Li.length;
    for (let e = 0; e < n; e++) {
      const n = Li[e],
        i = Pi(n);
      i
        ? n.dispatchEvent('appear', { direction: t })
        : i || n.dispatchEvent('disappear', { direction: t });
    }
  }
  var Ri = {
    init: function() {
      window.customElements.define(
        'title-bar',
        class extends window.HTMLElement {
          constructor() {
            super();
            const e = this.attachShadow({ mode: 'open' }),
              t = document.createElement('style');
            t.textContent =
              '\n        .title-bar {\n          display: flex;\n          flex: 0 1 auto;\n          width: 100%;\n          height: 117px;\n          flex-direction: row;\n          justify-content: space-between;\n          align-items: center;\n          background-color: #ffffff;\n          color: #ffffff;\n          z-index: 100001;\n        }\n  \n        .button {\n          display: flex;\n          height: 100%;\n          width: 60px;\n          flex-shrink: 0;\n        }\n  \n        .back {\n          overflow: hidden;\n          margin-left: 20px;\n        }\n  \n        .btn-img {\n          position: relative;\n          left: -80px;\n          border-right: 80px solid transparent;\n          filter: drop-shadow(80px 0 #ffffff);\n        }\n  \n        .menu {\n          overflow: hidden;\n          margin-right: 20px;\n        }\n  \n        .title-text {\n          font-size: 36px;\n          width: 100%;\n          text-align: left;\n          padding-left: 40px;\n          text-overflow: ellipsis;\n          overflow: hidden;\n          white-space: nowrap;\n        }\n      ';
            const n = document.createElement('div');
            n.classList.add('title-bar');
            {
              const e = (this.backBtn = document.createElement('div'));
              e.classList.add('back'), e.classList.add('button');
              const t = document.createElement('img');
              (t.src =
                'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTUwOTE0Mzg4MzQ3IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjE3ODkiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY3MS4zIDQ4MC4xSDMwMS43TDQ3My44IDMwOGMxMi40LTEyLjQgMTIuNC0zMi44IDAtNDUuMy0xMi40LTEyLjQtMzIuOC0xMi40LTQ1LjMgMEwyMDEuOSA0ODkuNWMtNSA1LTggMTEuMi05IDE3Ljd2MC4xYy0wLjEgMC40LTAuMSAwLjktMC4yIDEuM3YwLjNjMCAwLjQtMC4xIDAuOC0wLjEgMS4ydjRjMCAwLjQgMC4xIDAuOCAwLjEgMS4ydjAuM2MwIDAuNCAwLjEgMC45IDAuMiAxLjN2MC4xYzEgNi41IDQgMTIuNyA5IDE3LjdsMjI2LjcgMjI2LjdjMTIuNCAxMi40IDMyLjggMTIuNCA0NS4zIDAgMTIuNC0xMi40IDEyLjQtMzIuOCAwLTQ1LjNsLTE3Mi4yLTE3MmgzNjkuNmMxNy42IDAgMzItMTQuNCAzMi0zMnMtMTQuNC0zMi0zMi0zMnoiIHAtaWQ9IjE3OTAiIGZpbGw9IiNmZmZmZmYiPjwvcGF0aD48L3N2Zz4='),
                t.classList.add('btn-img'),
                e.appendChild(t),
                n.appendChild(e);
            }
            const i = document.createElement('div');
            i.classList.add('title-text'),
              (i.textContent = ''),
              n.appendChild(i);
            const o = (this.menuBtn = document.createElement('div'));
            o.classList.add('menu'), o.classList.add('button');
            const r = document.createElement('img');
            (r.src =
              'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNTUxMTQ4MzE1NTQ5IiBjbGFzcz0iaWNvbiIgc3R5bGU9IiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjM0NjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTUxMC41ODMyMzMgMzM2LjU5NTA4NWMzOS42Mzg3ODkgMCA3MS44Mjg5MzItMzIuMTYwNDY3IDcxLjgyODkzMi03MS44MzA5NzlzLTMyLjE5MDE0My03MS44Mjk5NTUtNzEuODI4OTMyLTcxLjgyOTk1NWMtMzkuNzAyMjM0IDAtNzEuODMwOTc5IDMyLjE1OTQ0NC03MS44MzA5NzkgNzEuODI5OTU1UzQ3MC44ODA5OTkgMzM2LjU5NTA4NSA1MTAuNTgzMjMzIDMzNi41OTUwODVNNTEwLjU4MzIzMyA0MDguNDI1MDRjLTM5LjcwMjIzNCAwLTcxLjgzMDk3OSAzMi4xNjA0NjctNzEuODMwOTc5IDcxLjgzMDk3OSAwIDM5LjY2OTQ4OCAzMi4xMjg3NDUgNzEuNzk3MjA5IDcxLjgzMDk3OSA3MS43OTcyMDkgMzkuNjM4Nzg5IDAgNzEuODI4OTMyLTMyLjEyNzcyMSA3MS44Mjg5MzItNzEuNzk3MjA5QzU4Mi40MTIxNjUgNDQwLjU4NTUwNyA1NTAuMjIyMDIxIDQwOC40MjUwNCA1MTAuNTgzMjMzIDQwOC40MjUwNE01MTAuNTgzMjMzIDYyMy44ODUyM2MtMzkuNzAyMjM0IDAtNzEuODMwOTc5IDMyLjE5MTE2Ni03MS44MzA5NzkgNzEuODI4OTMyIDAgMzkuNzAzMjU3IDMyLjEyODc0NSA3MS44MzA5NzkgNzEuODMwOTc5IDcxLjgzMDk3OSAzOS42Mzg3ODkgMCA3MS44Mjg5MzItMzIuMTI3NzIxIDcxLjgyODkzMi03MS44MzA5NzlDNTgyLjQxMjE2NSA2NTYuMDc2Mzk2IDU1MC4yMjIwMjEgNjIzLjg4NTIzIDUxMC41ODMyMzMgNjIzLjg4NTIzIiBwLWlkPSIzNDYyIiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PC9zdmc+'),
              r.classList.add('btn-img'),
              o.appendChild(r),
              n.appendChild(o),
              e.appendChild(t),
              e.appendChild(n);
          }
          setTitleBarBackgroundColor(e) {
            this.setAttribute('background-color', e),
              (this.shadowRoot.querySelector(
                '.title-bar'
              ).style.backgroundColor = e);
          }
          setTitleBarTextColor(e) {
            this.setAttribute('text-color', e),
              (this.shadowRoot.querySelector('.title-bar').style.color = e),
              this.shadowRoot.querySelectorAll('.btn-img').forEach(t => {
                t.style.filter = `drop-shadow(80px 0 ${e})`;
              });
          }
          setTitleBarText(e) {
            this.setAttribute('text', e),
              (this.shadowRoot.querySelector('.title-text').textContent = e);
          }
          setTitleBarBackgroundOpacity(e) {
            this.setAttribute('opacity', e),
              (this.shadowRoot.querySelector(
                '.title-text'
              ).style.backgroundOpacity = e);
          }
          setMenuBtn(e) {
            this.shadowRoot.querySelector('.menu').style.display =
              !0 === e ? '' : 'none';
          }
          setBackBtn(e) {
            this.shadowRoot.querySelector('.back').style.display =
              !0 === e ? '' : 'none';
          }
          bindEvents(e) {
            this.backBtn.addEventListener('click', function() {
              global.backPressPage(e.instanceId) || e.back();
            }),
              this.menuBtn.addEventListener('click', function() {
                global.menuPressPage(e.instanceId);
              });
          }
        }
      );
    }
  };
  const Bi = {
      showTitleBar: !1,
      instance: null,
      createPageTitleBar(e, t) {
        const n = document.createElement('title-bar');
        (this.showTitleBar = !0),
          (this.instance = n),
          n.bindEvents(t),
          this.updatePageTitleBar(e),
          document.body.appendChild(n);
      },
      updatePageTitleBar(e) {
        if (e && this.instance) {
          const t = this.instance;
          e.text && t.setTitleBarText(e.text),
            e.textColor && t.setTitleBarTextColor(e.textColor),
            e.backgroundColor &&
              t.setTitleBarBackgroundColor(e.backgroundColor),
            e.backgroundOpacity &&
              t.setTitleBarBackgroundOpacity(e.backgroundOpacity),
            'boolean' == typeof e.menu && t.setMenuBtn(e.menu),
            'boolean' == typeof e.back && t.setBackBtn(e.back);
        }
      },
      reset() {
        (this.instance = null), (this.showTitleBar = !1);
      }
    },
    ji = {},
    $i = {},
    zi = ['scroller', 'hscroller', 'vscroller', 'list', 'hlist', 'vlist'];
  function Hi(e) {
    (this.id = e),
      (this.batched = !1),
      (this.updates = []),
      (this.rootRef = 1),
      (this.componentMap = {}),
      (this.tilebar = Bi),
      (ji[this.id] = this);
  }
  (Hi.getInstance = e => ji[e]),
    (Hi.registerComponent = (e, t) => {
      $i[e] = t;
    }),
    (Hi.getScrollableTypes = () => zi),
    (Hi.prototype = {
      getHapInstance() {
        return (
          this._hapInstance ||
            (this._hapInstance = global.hap
              ? global.hap.getInstance(this.id)
              : null),
          this._hapInstance
        );
      },
      rendering() {
        function e() {
          window.dispatchEvent(new Event('renderend')),
            (this._renderingTimer = null);
        }
        this._renderingTimer
          ? (clearTimeout(this._renderingTimer),
            (this._renderingTimer = setTimeout(e.bind(this), 800)))
          : (window.dispatchEvent(new Event('renderbegin')),
            (this._renderingTimer = setTimeout(e.bind(this), 800)));
      },
      getComponent(e) {
        return this.componentMap[e];
      },
      removeComponent(e) {
        const t = this;
        e &&
          this.componentMap[e] &&
          (function e(n) {
            const i = t.componentMap[n],
              o = i._listeners,
              r = i.data.children;
            if (r && r.length)
              for (let t = 0, n = r.length; t < n; t++) e(r[t].ref);
            if (o) for (const e in o) i.node.removeEventListener(e, o[e]);
            delete i._listeners,
              delete i.node._listeners,
              delete t.componentMap[n];
          })(e);
      },
      createFinish(e) {
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace('### App Runtime ### createFinish---- '),
          window.dispatchEvent(new Event('createfinish'));
      },
      updateFinish(e) {
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace('### App Runtime ### updateFinish---- '),
          window.dispatchEvent(new Event('updatefinish'));
      },
      refreshFinish(e) {
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace('### App Runtime ### refreshFinish---- '),
          window.dispatchEvent(new Event('refreshfinish'));
      },
      createElement(e, t) {
        let n = $i[e.type];
        n || (n = $i.div), (e.instanceId = this.id);
        const i = new n(e, (t = t || e.type)),
          o = e.ref;
        return (this.componentMap[o] = i), i.node.setAttribute('ref', o), i;
      },
      createBody(e) {
        const t = Pe(e),
          n = t.children;
        delete t.children, (this.rootRef = t.ref);
        const i = document.createElement('root');
        i.classList.add('root-container');
        const o = document.body;
        this.tilebar.showTitleBar &&
          (i.style.height = `calc(100% - ${
            this.tilebar.instance.getBoundingClientRect().height
          }px)`),
          o.appendChild(i);
        const r = this.createElement(t);
        (r.node.style.minHeight = '100%'),
          'canvas' === t.type &&
            ((r.node.width = i.clientWidth), (r.node.height = i.clientHeight)),
          i.appendChild(r.node),
          n &&
            n.map(e => {
              this.addElement(e, t.ref, -1);
            }),
          (i._appended = !0);
      },
      addNode(e, t, n) {
        let i;
        if (
          ((t && Re(t)) ||
            console.error(
              `### App Runtime ### addNode的parent(${t.type})必须是可渲染节点`
            ),
          n < 0 && (n = -1),
          e.nodeType === ue.NodeType.FIGMENT)
        ) {
          let o = n;
          e.layoutChildren.every(
            e => (
              (i =
                e.nodeType === ue.NodeType.FIGMENT
                  ? this.addNode(e, t, o)
                  : this.addElement(e, t.ref, o)),
              (o += $e(e)),
              -1 !== i
            )
          );
        } else i = this.addElement(e, t.ref, n);
        return i;
      },
      addElement(e, t, n) {
        const i = this.componentMap[t];
        if (!i) return;
        const o = i.data.children;
        n >= 0 || (n = -1),
          o && o.length && o.length > n && -1 !== n
            ? this.insertBefore(o[n].ref, Pe(e))
            : this.appendChild(t, Pe(e));
      },
      appendChild(e, t) {
        let n = this.componentMap[e];
        if (this.componentMap[t.ref] || !n) return;
        '_root' !== e ||
          n ||
          ((n = this.createElement({
            type: 'root',
            rootId: 'hap',
            ref: '_root'
          }))._appended = !0),
          (t.props = n.data.props);
        const i = n.appendChild(t);
        return (
          i && (i.parentRef = e),
          (n._appended = !0),
          i && n._appended && this.handleAppend(i),
          i
        );
      },
      handleAppend(e) {
        (e._appended = !0), e.onAppend && e.onAppend();
        const t = e.data.children;
        if (t)
          for (let e = 0; e < t.length; e++) {
            const n = this.componentMap[t[e].ref];
            n && this.handleAppend(n);
          }
        !(function(e) {
          if (
            (function(e) {
              const t = e.data.event;
              return !(
                !t ||
                (-1 === t.indexOf('appear') && -1 === t.indexOf('disappear'))
              );
            })(e) &&
            (Li.push(e), !Ii)
          ) {
            Ii = !0;
            const e = Ci(Fi, 100);
            window.addEventListener('scroll', e, !1);
          }
        })(e),
          e.fireLazyload();
      },
      removeNode(e) {
        let t;
        return (
          e.nodeType === ue.nodeType.FIGMENT
            ? e.layoutChildren.every(
                e =>
                  -1 !==
                  (t =
                    e.nodeType === ue.nodeType.FIGMENT
                      ? this.removeNode(e)
                      : this.removeElement(e.ref))
              )
            : (t = this.removeElement(e.ref)),
          t
        );
      },
      removeElement(e) {
        if (wi(e)) return e.map(e => this.removeElement(e));
        const t = this.componentMap[e];
        if ((this.rendering(), t && t.parentRef)) {
          const e = this.componentMap[t.parentRef];
          t.onRemove && t.onRemove(), e.removeChild(t), e.removeChildHandler();
        } else
          t
            ? console.error(
                `[h5-render] parent component '${t.parentRef}' does not exist.`
              )
            : console.error(
                `[h5-render] component of ref '${e}' does not exist.`
              );
      },
      moveNode(e, t, n) {
        let i;
        if (
          ((t && Re(t)) ||
            console.error(
              '### App Runtime ### moveNode的parent必须是可渲染节点'
            ),
          n >= 0 || (n = -1),
          e.nodeType === ue.NodeType.FIGMENT)
        ) {
          let o = n;
          e.layoutChildren.every(
            e => (
              (i =
                e.nodeType === ue.NodeType.FIGMENT
                  ? this.moveNode(e, t, o)
                  : this.moveElement(e.ref, t.ref, o)),
              (o += $e(e)),
              -1 !== i
            )
          );
        } else i = this.moveElement(e.ref, t.ref, n);
        return i;
      },
      moveElement(e, t, n) {},
      insertBefore(e, t) {
        let n, i;
        const o = this.componentMap[e];
        (n = this.componentMap[t.ref]),
          o && (i = this.componentMap[o.parentRef]),
          !n &&
            i &&
            o &&
            ((t.props = i.data.props),
            (n = this.createElement(t)) &&
              ((n.parentRef = o.parentRef),
              i.insertBefore(n, o),
              this.componentMap[o.parentRef]._appended &&
                this.handleAppend(n)));
      },
      setAttr(e, t, n) {
        const i = {};
        null == n
          ? (console.warn(
              `### App Runtime ### 组件 ${e} 的属性 ${t} 被修改为 undefined/null, 自动修改为默认值或空值`
            ),
            (i[t] = ''))
          : (i[t] = n);
        const o = this.componentMap[e];
        if (!o)
          return console.error(
            `[h5-render] component of ref '${e}' does not exist.`
          );
        o.updateAttrs(i);
      },
      setStyle(e, t, n) {
        const i = {};
        null == n
          ? (console.warn(
              `### App Runtime ### 组件 ${e} 的样式 ${t} 被修改为 undefined/null, 自动修改为默认值或空值`
            ),
            (i[t] = ''))
          : (i[t] = n);
        const o = this.componentMap[e];
        if (!o)
          return console.error(
            `[h5-render] component of ref '${e}' does not exist.`
          );
        o.updateStyle(i);
      },
      setStyles(e, t, n) {
        const i = this.componentMap[e];
        if (!i)
          return console.error(
            `[h5-render] component of ref '${e}' does not exist.`
          );
        i.updateStyle(t), i.updateAttrs(n);
      },
      addEvent(e, t) {
        const n = this.componentMap[e];
        if (!n)
          return console.error(
            `[h5-render] component of ref '${e}' does not exist.`
          );
        n.bindEvents([t]);
      },
      removeEvent(e, t) {
        const n = this.componentMap[e];
        if (!n)
          return console.error(
            `[h5-render] component of ref '${e}' does not exist.`
          );
        n.unbindEvents([t]);
      },
      updatePageTitleBar(e) {
        this.tilebar.updatePageTitleBar(e);
      },
      invokeComponentMethod(e, t, n, i) {
        try {
          return global.callNativeComponent(this.id, t, n, i, { component: e });
        } catch (e) {
          console.error(e);
        }
      },
      hasActions() {
        return !!this.actionLen;
      }
    });
  const Yi = [
    {
      newN: 't',
      oldN: 'type',
      newV: ['d', 'a', 't', 'u', 'p', 'pe'],
      oldV: [
        'descendant',
        'attribute',
        'tag',
        'universal',
        'pseudo',
        'pseudo-element'
      ]
    },
    { newN: 'n', oldN: 'name' },
    { newN: 'i', oldN: 'ignoreCase' },
    { newN: 'a', oldN: 'action' },
    { newN: 'v', oldN: 'value' }
  ];
  const Wi = {};
  var Ui = {
    registerComponents: function(e) {
      'string' == typeof e && (e = JSON.parse(e)),
        Array.isArray(e) || (e = [e]),
        e.forEach(e => {
          if (!e) return;
          e.name || ((e.name = e.type), delete e.type),
            (e.methods = e.methods || []),
            global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                '### App Runtime ### 注册组件---- ',
                JSON.stringify(e)
              );
          let t = Se[e.name];
          t
            ? (t.methods = Array.from(new Set(t.methods.concat(e.methods))))
            : ((t = Se[e.name] = JSON.parse(JSON.stringify(e))).def = {});
        });
    },
    getComponentDefaultOptions: Me,
    bindComponentMethods: function(e) {
      const t = Me(e.tagName.toLowerCase());
      if (t && t.methods) {
        const n = t.methods.filter(e => 'animate' !== e);
        return (
          n.forEach(function(n) {
            e[n] ||
              (e[n] = function(...i) {
                const o = ge(e._docId);
                o
                  ? (o.invokeComponentMethod(t.name, e.ref, n, i),
                    global.Env &&
                      'trace' === global.Env.logLevel &&
                      console.trace(
                        `### App Runtime ### 调用组件的方法：${t.name}.${n}()`,
                        JSON.stringify(i)
                      ))
                  : console.warn(
                      `### App Runtime ### 调用组件的方法无效：${
                        t.name
                      }.${n}(), 组件已销毁`
                    );
              });
          }),
          n
        );
      }
      return [];
    },
    registerStyleObject: function(e, t, n, i, o) {
      if (
        (global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            `### App Runtime ### 基于节点(${o && o.ref})注册样式节点(${i})`
          ),
        n)
      ) {
        !(function(e) {
          for (const t in e) {
            const n = e[t];
            if (n && n._meta && n._meta.ruleDef) {
              const e = n._meta.ruleDef;
              for (let t = 0, n = e.length; t < n; t++) {
                const n = e[t];
                for (let e = 0, t = Yi.length; e < t; e++) {
                  const t = Yi[e];
                  n.hasOwnProperty(t.newN) &&
                    ((n[t.oldN] = n[t.newN]),
                    delete n[t.newN],
                    t.newV &&
                      t.newV.indexOf(n[t.oldN]) > -1 &&
                      (n[t.oldN] = t.oldV[t.newV.indexOf(n[t.oldN])]));
                }
              }
            }
          }
        })(n),
          (function(e, t, n, i) {
            const o = t.id;
            (e._styleSheetHash[o] = t),
              n ? e._styleSheetHash[0].push(o) : (i._styleSheetId = o);
          })(e, Gt(t, n), i, o);
        {
          if (Wi[e._docId]) {
            if (!Wi[e._docId] || Wi[e._docId][t]) return;
            Wi[e._docId][t] = n;
          } else Wi[e._docId] = { styleSheetName: n };
          const i = (function(e) {
            const t = Object.keys(e || {});
            let n = '';
            for (let i = 0, o = t.length; i < o; i++) {
              const o = t[i],
                r = e[o];
              if (r && '_' !== o[0] && '@KEYFRAMES' === o)
                for (const e in r) {
                  n += `@keyframes ${e} {\n`;
                  for (let t = 0, i = r[e].length; t < i; t++)
                    (n += `  ${r[e][t].time || 0}% {\n`),
                      Object.keys(r[e][t]).forEach(i => {
                        'time' !== i &&
                          (n += `    ${i.replace(
                            /[A-Z]/g,
                            e => '-' + e.toLowerCase()
                          )}: ${
                            i.indexOf('transform') > -1
                              ? r[e][t][i]
                                  .replace(/{"/g, '')
                                  .replace(/":"|":/g, '(')
                                  .replace(/"}|}/g, ')')
                                  .replace(/","|,"/g, ') ')
                              : r[e][t][i]
                          };\n`);
                      }),
                      (n += '  }\n');
                  n += '}\n';
                }
            }
            return n;
          })(n);
          if (i) {
            const e = global.document.createElement('style');
            (e.type = 'text/css'),
              (e.innerHTML = i),
              e.setAttribute(`component-${t}`, ''),
              global.document.head.appendChild(e);
          }
        }
      }
    },
    createEvent: Mt,
    createFigment: function(e) {
      const t = new At();
      return (t._ownerDocument = e), t;
    },
    updatePageTitleBar: function(e, t) {
      const n = ge(e._docId);
      n && n.updatePageTitleBar(t);
    },
    setElementAttr: yt,
    setElementStyle: bt,
    setElementStyles: vt,
    getElementMatchedCssRuleList: function(e, t) {
      const n = kt(e, t),
        i = JSON.parse(JSON.stringify(n));
      for (let t = 0, n = i.length; t < n; t++) {
        const n = i[t];
        (n.editable = !0),
          (n.style = Ce(n._styleFullList, n.style)),
          delete n._styleFullList;
        const o = xe(e._docId, n._sheetId);
        n.styleSheetName = o ? o.name : '';
      }
      return i;
    },
    setElementMatchedCssRule: function(e, t, n) {
      const i = {},
        o = [];
      for (let e = 0, t = n.length; e < t; e++) {
        const t = n[e];
        o.push({ name: t.name, value: t.value, disabled: t.disabled }),
          t.disabled || (i[t.name] = t.value);
      }
      const r = kt(e, t)[0];
      if (r) {
        if (r.type === Ze.INLINE) (r._styleFullList = o), vt(e, i);
        else {
          const t = me(e._docId);
          (r._styleFullList = o), (r.style = i);
          const n = (function(e) {
            return Object.keys(e._hitNodeMap);
          })(r);
          for (let e = 0, i = n.length; e < i; e++) {
            const i = be(t, n[e]),
              o = rt(r, i).match;
            global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                `### App Runtime ### 更新CSS规则(${r.name})的样式，元素(${
                  i.ref
                })的匹配结果：${o}`
              ),
              o && ((i._finalStyleCache = null), wt(i));
          }
        }
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            `### App Runtime ### 更新样式:元素(${
              e.ref
            })的匹配样式：${t}:${JSON.stringify(i)}`
          );
      } else
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            `### App Runtime ### 更新样式:元素(${e.ref})无匹配样式：${t}`
          );
    },
    resetNodeChildren: function(e) {
      for (let t = 0, n = e.layoutChildren.length; t < n; t++) {
        const n = e.layoutChildren[t];
        n._tmpRenderIndexInParent = Ye(n, e);
      }
      (e.childNodes.length = 0), (e.layoutChildren.length = 0);
    },
    restoreNodeChildren: function(e, t) {
      if (!t.parentNode || t.parentNode !== e) return;
      e.childNodes.push(t), e.layoutChildren.push(t);
      const n = Be(e, !0);
      if (Fe(t)) {
        const i = ge(e._docId),
          o = He(t),
          r = o !== t._tmpRenderIndexInParent;
        if (((t._tmpRenderIndexInParent = null), i && r))
          return i.moveNode(t, n, o);
      }
    },
    fireTargetEventListener: Ve,
    clearTargetEventListener: function(e, t, n) {
      n instanceof Object || (n = { capture: !!n });
      const i = n.capture ? le.CAPTURING_PHASE : le.BUBBLING_PHASE;
      e._eventTargetListeners[t] && delete e._eventTargetListeners[t][i];
    },
    getDocumentNodeByRef: be,
    isNodeInDocument: function(e) {
      return !(!e || !e._docId);
    },
    recreateDocument: function(e) {
      const t = e.body;
      t
        ? e.listener.createBody(t)
        : console.error('### App Runtime ### Document没有body节点, 无法重建');
    },
    destroyTagNode: function(e) {
      switch (e.nodeType) {
        case he.DOCUMENT:
          !(function(e) {
            var t;
            global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace('### App Runtime ### 销毁文档'),
              delete e._nodeMap,
              delete e.listener,
              delete e._styleSheetHash,
              e.documentElement && Ue(e.documentElement),
              delete e.documentElement,
              delete e.body,
              delete e.childNodes,
              delete e.layoutChildren,
              We(e),
              (t = e._docId),
              (fe[t] = null);
          })(e);
          break;
        case he.ELEMENT:
          Ue(e);
          break;
        default:
          We(e);
      }
    },
    getNodeAsJSON: Pe,
    getNodeDepth: function(e) {
      return e._depth;
    }
  };
  var Vi = {
    init: function() {
      Object.freeze(le),
        Object.freeze(le.prototype),
        Object.freeze(gt),
        Object.freeze(gt.prototype),
        Object.freeze(Lt),
        Object.freeze(Lt.prototype),
        Object.freeze(xt),
        Object.freeze(xt.prototype),
        Object.freeze(At),
        Object.freeze(At.prototype),
        Object.freeze(_t),
        Object.freeze(_t.prototype),
        Object.freeze(Tt),
        Object.freeze(Tt.prototype),
        Object.freeze(ue),
        Object.freeze(ue.prototype),
        Object.freeze(mt),
        Object.freeze(mt.prototype),
        Object.freeze(Ge),
        Object.freeze(Ge.prototype),
        Object.freeze(Ct),
        Object.freeze(Ct.prototype),
        (Ui.createDocument = function(e) {
          const t = new Hi(e),
            n = new Lt(e, t);
          return global.Hap && global.Hap.createInstance({ appId: e }), n;
        });
    },
    Node: ue,
    Event: le,
    TouchEvent: ce,
    helper: Ui,
    exposure: { registerComponents: Ui.registerComponents }
  };
  const Gi = {
    forall: '∀',
    part: '∂',
    exists: '∃',
    empty: '∅',
    nabla: '∇',
    isin: '∈',
    notin: '∉',
    ni: '∋',
    prod: '∏',
    sum: '∑',
    minus: '−',
    lowast: '∗',
    radic: '√',
    prop: '∝',
    infin: '∞',
    ang: '∠',
    and: '∧',
    or: '∨',
    cap: '∩',
    cup: '∪',
    int: '∫',
    there4: '∴',
    sim: '∼',
    cong: '≅',
    asymp: '≈',
    ne: '≠',
    le: '≤',
    ge: '≥',
    sub: '⊂',
    sup: '⊃',
    nsub: '⊄',
    sube: '⊆',
    supe: '⊇',
    oplus: '⊕',
    otimes: '⊗',
    perp: '⊥',
    sdot: '⋅',
    Alpha: 'Α',
    Beta: 'Β',
    Gamma: 'Γ',
    Delta: 'Δ',
    Epsilon: 'Ε',
    Zeta: 'Ζ',
    Eta: 'Η',
    Theta: 'Θ',
    Iota: 'Ι',
    Kappa: 'Κ',
    Lambda: 'Λ',
    Mu: 'Μ',
    Nu: 'Ν',
    Xi: 'Ν',
    Omicron: 'Ο',
    Pi: 'Π',
    Rho: 'Ρ',
    Sigma: 'Σ',
    Tau: 'Τ',
    Upsilon: 'Υ',
    Phi: 'Φ',
    Chi: 'Χ',
    Psi: 'Ψ',
    Omega: 'Ω',
    alpha: 'α',
    beta: 'β',
    gamma: 'γ',
    delta: 'δ',
    epsilon: 'ε',
    zeta: 'ζ',
    eta: 'η',
    theta: 'θ',
    iota: 'ι',
    kappa: 'κ',
    lambda: 'λ',
    mu: 'μ',
    nu: 'ν',
    xi: 'ξ',
    omicron: 'ο',
    pi: 'π',
    rho: 'ρ',
    sigmaf: 'ς',
    sigma: 'σ',
    tau: 'τ',
    upsilon: 'υ',
    phi: 'φ',
    chi: 'χ',
    psi: 'ψ',
    omega: 'ω',
    thetasym: 'ϑ',
    upsih: 'ϒ',
    piv: 'ϖ',
    middot: '·',
    nbsp: ' ',
    quot: "'",
    amp: '&',
    lt: '<',
    gt: '>',
    OElig: 'Œ',
    oelig: 'œ',
    Scaron: 'Š',
    scaron: 'š',
    Yuml: 'Ÿ',
    fnof: 'ƒ',
    circ: 'ˆ',
    tilde: '˜',
    ensp: '',
    emsp: '',
    thinsp: '',
    zwnj: '',
    zwj: '',
    lrm: '',
    rlm: '',
    ndash: '–',
    mdash: '—',
    lsquo: '‘',
    rsquo: '’',
    sbquo: '‚',
    ldquo: '“',
    rdquo: '”',
    bdquo: '„',
    dagger: '†',
    Dagger: '‡',
    bull: '•',
    hellip: '…',
    permil: '‰',
    prime: '′',
    Prime: '″',
    lsaquo: '‹',
    rsaquo: '›',
    oline: '‾',
    euro: '€',
    trade: '™',
    larr: '←',
    uarr: '↑',
    rarr: '→',
    darr: '↓',
    harr: '↔',
    crarr: '↵',
    lceil: '⌈',
    rceil: '⌉',
    lfloor: '⌊',
    rfloor: '⌋',
    loz: '◊',
    spades: '♠',
    clubs: '♣',
    hearts: '♥',
    diams: '♦',
    '#8203': ''
  };
  function Ji(e) {
    const t = {},
      n = e.split(',');
    for (let e = 0; e < n.length; e++) t[n[e]] = !0;
    return t;
  }
  function Zi(e) {
    return e.replace(/-([a-z])/g, function(e, t) {
      return t.toUpperCase();
    });
  }
  function qi(e) {
    return e.replace(/([A-Z])/g, function(e, t) {
      return '-' + t.toLowerCase();
    });
  }
  function Ki(e, t) {
    const n = [];
    if (t)
      switch (
        (e.forEach((e, t) => {
          (n[t] = {}), (n[t].n = e);
        }),
        t.length)
      ) {
        case 1:
          e.forEach((e, i) => {
            n[i].v = t[0];
          });
          break;
        case 2:
          e.forEach((e, i) => {
            n[i].v = i % 2 ? t[1] : t[0];
          });
          break;
        case 3:
          e.forEach((e, i) => {
            n[i].v = i % 2 ? t[1] : t[i];
          });
          break;
        default:
          e.forEach((e, i) => {
            n[i].v = t[i];
          });
      }
    return n;
  }
  function Qi(e) {
    return 'number' == typeof e || 'string' == typeof e;
  }
  const Xi = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
    eo = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
    to = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,
    no = Ji(
      'area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr'
    ),
    io = Ji(
      'br,a,code,address,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video'
    ),
    oo = Ji(
      'abbr,acronym,applet,b,basefont,bdo,big,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var'
    ),
    ro = Ji('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr'),
    so = Ji(
      'checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected'
    ),
    ao = Ji('script,style,block');
  const lo = ['NOTE', 'WARNING', 'ERROR'],
    co = {
      aliceblue: '#F0F8FF',
      antiquewhite: '#FAEBD7',
      aqua: '#00FFFF',
      aquamarine: '#7FFFD4',
      azure: '#F0FFFF',
      beige: '#F5F5DC',
      bisque: '#FFE4C4',
      black: '#000000',
      blanchedalmond: '#FFEBCD',
      blue: '#0000FF',
      blueviolet: '#8A2BE2',
      brown: '#A52A2A',
      burlywood: '#DEB887',
      cadetblue: '#5F9EA0',
      chartreuse: '#7FFF00',
      chocolate: '#D2691E',
      coral: '#FF7F50',
      cornflowerblue: '#6495ED',
      cornsilk: '#FFF8DC',
      crimson: '#DC143C',
      cyan: '#00FFFF',
      darkblue: '#00008B',
      darkcyan: '#008B8B',
      darkgoldenrod: '#B8860B',
      darkgray: '#A9A9A9',
      darkgreen: '#006400',
      darkgrey: '#A9A9A9',
      darkkhaki: '#BDB76B',
      darkmagenta: '#8B008B',
      darkolivegreen: '#556B2F',
      darkorange: '#FF8C00',
      darkorchid: '#9932CC',
      darkred: '#8B0000',
      darksalmon: '#E9967A',
      darkseagreen: '#8FBC8F',
      darkslateblue: '#483D8B',
      darkslategray: '#2F4F4F',
      darkslategrey: '#2F4F4F',
      darkturquoise: '#00CED1',
      darkviolet: '#9400D3',
      deeppink: '#FF1493',
      deepskyblue: '#00BFFF',
      dimgray: '#696969',
      dimgrey: '#696969',
      dodgerblue: '#1E90FF',
      firebrick: '#B22222',
      floralwhite: '#FFFAF0',
      forestgreen: '#228B22',
      fuchsia: '#FF00FF',
      gainsboro: '#DCDCDC',
      ghostwhite: '#F8F8FF',
      gold: '#FFD700',
      goldenrod: '#DAA520',
      gray: '#808080',
      green: '#008000',
      greenyellow: '#ADFF2F',
      grey: '#808080',
      honeydew: '#F0FFF0',
      hotpink: '#FF69B4',
      indianred: '#CD5C5C',
      indigo: '#4B0082',
      ivory: '#FFFFF0',
      khaki: '#F0E68C',
      lavender: '#E6E6FA',
      lavenderblush: '#FFF0F5',
      lawngreen: '#7CFC00',
      lemonchiffon: '#FFFACD',
      lightblue: '#ADD8E6',
      lightcoral: '#F08080',
      lightcyan: '#E0FFFF',
      lightgoldenrodyellow: '#FAFAD2',
      lightgray: '#D3D3D3',
      lightgreen: '#90EE90',
      lightgrey: '#D3D3D3',
      lightpink: '#FFB6C1',
      lightsalmon: '#FFA07A',
      lightseagreen: '#20B2AA',
      lightskyblue: '#87CEFA',
      lightslategray: '#778899',
      lightslategrey: '#778899',
      lightsteelblue: '#B0C4DE',
      lightyellow: '#FFFFE0',
      lime: '#00FF00',
      limegreen: '#32CD32',
      linen: '#FAF0E6',
      magenta: '#FF00FF',
      maroon: '#800000',
      mediumaquamarine: '#66CDAA',
      mediumblue: '#0000CD',
      mediumorchid: '#BA55D3',
      mediumpurple: '#9370DB',
      mediumseagreen: '#3CB371',
      mediumslateblue: '#7B68EE',
      mediumspringgreen: '#00FA9A',
      mediumturquoise: '#48D1CC',
      mediumvioletred: '#C71585',
      midnightblue: '#191970',
      mintcream: '#F5FFFA',
      mistyrose: '#FFE4E1',
      moccasin: '#FFE4B5',
      navajowhite: '#FFDEAD',
      navy: '#000080',
      oldlace: '#FDF5E6',
      olive: '#808000',
      olivedrab: '#6B8E23',
      orange: '#FFA500',
      orangered: '#FF4500',
      orchid: '#DA70D6',
      palegoldenrod: '#EEE8AA',
      palegreen: '#98FB98',
      paleturquoise: '#AFEEEE',
      palevioletred: '#DB7093',
      papayawhip: '#FFEFD5',
      peachpuff: '#FFDAB9',
      peru: '#CD853F',
      pink: '#FFC0CB',
      plum: '#DDA0DD',
      powderblue: '#B0E0E6',
      purple: '#800080',
      red: '#FF0000',
      rosybrown: '#BC8F8F',
      royalblue: '#4169E1',
      saddlebrown: '#8B4513',
      salmon: '#FA8072',
      sandybrown: '#F4A460',
      seagreen: '#2E8B57',
      seashell: '#FFF5EE',
      sienna: '#A0522D',
      silver: '#C0C0C0',
      skyblue: '#87CEEB',
      slateblue: '#6A5ACD',
      slategray: '#708090',
      slategrey: '#708090',
      snow: '#FFFAFA',
      springgreen: '#00FF7F',
      steelblue: '#4682B4',
      tan: '#D2B48C',
      teal: '#008080',
      thistle: '#D8BFD8',
      tomato: '#FF6347',
      turquoise: '#40E0D0',
      violet: '#EE82EE',
      wheat: '#F5DEB3',
      white: '#FFFFFF',
      whitesmoke: '#F5F5F5',
      yellow: '#FFFF00',
      yellowgreen: '#9ACD32'
    },
    ho = ['px', '%'],
    po = /^[-+]?[0-9]*\.?[0-9]+(.*)$/,
    uo = /^#[0-9a-fA-F]{6}$/,
    fo = /^#[0-9a-fA-F]{3}$/,
    mo = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/,
    go = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d*\.?\d+)\s*\)$/,
    yo = /^hsl\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*\)$/,
    bo = /^hsla\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d*\.?\d+)\s*\)$/,
    vo = /^[-+]?[0-9]+$/,
    Eo = /^url\(\s*['"]?\s*([^()]+?)\s*['"]?\s*\)$/,
    wo = /^[a-zA-Z_][a-zA-Z0-9]*$/,
    ko = /^[-+]?[0-9]*\.?[0-9]+$/,
    xo = {
      length: function(e, t) {
        const n = (e = (e || '').toString()).match(po);
        if ((t || (t = ho), n)) {
          const i = n[1];
          return i
            ? t.indexOf(i.toLowerCase()) >= 0
              ? { value: e }
              : {
                  value: parseFloat(e) + t[0],
                  reason: function(e, n, o) {
                    return (
                      'ERROR: 属性 `' +
                      qi(e) +
                      '` 不支持单位 `' +
                      i +
                      '`, 目前仅支持 `' +
                      JSON.stringify(t) +
                      '`'
                    );
                  }
                }
            : {
                value: parseFloat(e) + t[0],
                reason: function(e, n, i) {
                  return (
                    'WARNING: 属性 `' +
                    qi(e) +
                    '` 没有指定单位，默认为 `' +
                    t[0] +
                    '`'
                  );
                }
              };
        }
        return {
          value: null,
          reason: function(e, t, n) {
            return (
              'ERROR: 属性 `' + qi(e) + '` 的值 `' + t + '` 不正确(仅支持数值)'
            );
          }
        };
      },
      color: function(e) {
        if ((e = (e || '').toString()).match(uo)) return { value: e };
        if (e.match(fo))
          return {
            value: '#' + e[1] + e[1] + e[2] + e[2] + e[3] + e[3],
            reason: function(e, t, n) {
              return 'NOTE: 颜色值 `' + t + '` 转换为 `' + n + '`';
            }
          };
        if (co[e])
          return {
            value: co[e],
            reason: function(e, t, n) {
              return 'NOTE: 颜色值 `' + t + '` 转换为 `' + n + '`';
            }
          };
        let t, n, i, o, r, s, a, l;
        return (t = mo.exec(e)) &&
          ((n = parseInt(t[1])),
          (i = parseInt(t[2])),
          (o = parseInt(t[3])),
          n >= 0 && n <= 255 && i >= 0 && i <= 255 && o >= 0 && o <= 255)
          ? { value: 'rgb(' + [n, i, o].join(',') + ')' }
          : (t = go.exec(e)) &&
            ((n = parseInt(t[1])),
            (i = parseInt(t[2])),
            (o = parseInt(t[3])),
            (r = parseFloat(t[4])),
            n >= 0 &&
              n <= 255 &&
              i >= 0 &&
              i <= 255 &&
              o >= 0 &&
              o <= 255 &&
              r >= 0 &&
              r <= 1)
          ? { value: 'rgba(' + [n, i, o, r].join(',') + ')' }
          : (t = yo.exec(e) || bo.exec(e)) &&
            ((s = parseInt(t[1])),
            (a = parseInt(t[2])),
            (l = parseInt(t[3])),
            (r = parseFloat(t[4])),
            s >= 0 && s <= 360 && a >= 0 && a <= 100 && l >= 0 && l <= 100)
          ? r >= 0 && r <= 1
            ? { value: `hsla(${s},${a}%,${l}%,${r})` }
            : { value: `hsl(${s},${a}%,${l}%)` }
          : 'transparent' === e
          ? { value: 'rgba(0,0,0,0)' }
          : {
              value: null,
              reason: function(e, t, n) {
                return 'ERROR: 属性`' + qi(e) + '` 的颜色值 `' + t + '` 无效`';
              }
            };
      },
      number: function(e) {
        const t = (e = (e || '').toString()).match(ko);
        return t && !t[1]
          ? { value: parseFloat(e) }
          : {
              value: null,
              reason: function(e, t, n) {
                return (
                  'ERROR: 属性`' +
                  qi(e) +
                  '` 的值 `' +
                  t +
                  '` 无效 ` (仅支持数值)'
                );
              }
            };
      },
      integer: function(e) {
        return (e = (e || '').toString()).match(vo)
          ? { value: parseInt(e, 10) }
          : {
              value: null,
              reason: function(e, t, n) {
                return (
                  'ERROR: 属性`' +
                  qi(e) +
                  '` 的值 `' +
                  t +
                  '` 无效 ` (仅支持整数)'
                );
              }
            };
      },
      url: function(e) {
        if ((e = (e || '').toString().trim()).match(/^none$/i))
          return { value: 'none' };
        const t = Eo.exec(e);
        return t
          ? { value: t[1] }
          : {
              value: null,
              reason: function(e, t, n) {
                return (
                  'WARNING: 属性`' +
                  qi(e) +
                  '` 的值 `' +
                  t +
                  '` 必须是 none 或者 url(...)'
                );
              }
            };
      },
      name: function(e) {
        return (e = (e || '').toString()).match(wo)
          ? { value: e }
          : {
              value: null,
              reason: function(e, t, n) {
                return 'ERROR: 属性`' + qi(e) + '` 的值 `' + t + '` 格式不正确';
              }
            };
      },
      enum: function(e, t) {
        const n = e.indexOf(t);
        return n > 0
          ? { value: t }
          : 0 === n
          ? {
              value: t,
              reason: function(e, t, n) {
                return (
                  'NOTE:  属性`' +
                  qi(e) +
                  '` 的值 `' +
                  t +
                  '` 是缺省值(可以忽略不写)'
                );
              }
            }
          : {
              value: null,
              reason: function(t, n, i) {
                return (
                  'ERROR: 属性`' +
                  qi(t) +
                  '` 的值 `' +
                  n +
                  '` 无效 ` (有效枚举值为: `' +
                  e.join('`|`') +
                  '`)'
                );
              }
            };
      },
      arraylength: function(e, t, n) {
        const i = (t = (t || '').toString()).split(/\s+/);
        if (i && i.length <= 4) {
          const t = [];
          let o;
          const r = [];
          let s = 0;
          return (
            i.forEach((e, i) => {
              if (
                (Qi((o = xo.length(e, n)).value) && t.push(o.value), o.reason)
              ) {
                let t = o.reason(i.toString(), e, o.value);
                const n = t.match(/^([A-Z]+):/);
                if (n) {
                  const e = lo.indexOf(n[1]);
                  s < lo.indexOf(n[1]) && (s = e),
                    (t = t.replace(n[0], '').trim());
                }
                r.push(t);
              }
            }),
            {
              value: s < 2 ? Ki(e, t) : null,
              reason:
                r.length > 0
                  ? function(e, t, n) {
                      return (
                        lo[s] +
                        ': 属性`' +
                        qi(e) +
                        '` 的值 `' +
                        t +
                        '` 存在问题: \n  ' +
                        r.join('\n  ')
                      );
                    }
                  : null
            }
          );
        }
        return {
          value: null,
          reason: function(e, t, n) {
            return 'ERROR: 属性`' + qi(e) + '` 的值 `' + t + '` 格式不正确';
          }
        };
      },
      arraycolor: function(e, t) {
        const n = (t = (t || '').toString()).split(/\s+/);
        if (n && n.length <= 4) {
          const t = [];
          let i;
          const o = [];
          let r = 0;
          return (
            n.forEach((e, n) => {
              if ((Qi((i = xo.color(e)).value) && t.push(i.value), i.reason)) {
                let t = i.reason(n.toString(), e, i.value);
                const s = t.match(/^([A-Z]+):/);
                if (s) {
                  const e = lo.indexOf(s[1]);
                  r < lo.indexOf(s[1]) && (r = e),
                    (t = t.replace(s[0], '').trim());
                }
                o.push(t);
              }
            }),
            {
              value: r < 2 ? Ki(e, t) : null,
              reason:
                o.length > 0
                  ? function(e, t, n) {
                      return (
                        lo[r] +
                        ': 属性`' +
                        qi(e) +
                        '` 的值 `' +
                        t +
                        '` 存在问题: \n  ' +
                        o.join('\n  ')
                      );
                    }
                  : null
            }
          );
        }
        return {
          value: null,
          reason: function(e, t, n) {
            return 'ERROR: 属性`' + qi(e) + '` 的值 `' + t + '` 格式不正确';
          }
        };
      },
      border: function(e, t) {
        const n = (e = (e || '').toString()).split(/\s+/);
        if (n && n.length <= 3) {
          let e,
            i = [];
          const o = [];
          let r = 0;
          const s = [];
          let a = -1;
          return (
            n.forEach((n, a) => {
              if (
                (Qi(xo.length(n, t).value)
                  ? (s.push(0),
                    (e = Co.borderWidth(n)).value instanceof Array &&
                      (i = i.concat(e.value)))
                  : Qi(Co.borderStyle(n).value)
                  ? (s.push(1),
                    (e = Co.borderStyle(n)),
                    i.push({ n: 'borderStyle', v: n }))
                  : Qi(xo.color(n).value)
                  ? (s.push(2),
                    (e = Co.borderColor(n)).value instanceof Array &&
                      (i = i.concat(e.value)))
                  : ((e = {}),
                    (r = 2),
                    o.push(
                      '属性`' +
                        a +
                        '` 的值 `' +
                        n +
                        '` 存在问题: \n  不满足width、style和color的检验标准'
                    )),
                e && e.reason)
              ) {
                let t = e.reason(a.toString(), n, e.value);
                const i = t.match(/^([A-Z]+):/);
                if (i) {
                  const e = lo.indexOf(i[1]);
                  r < lo.indexOf(i[1]) && (r = e),
                    (t = t.replace(i[0], '').trim());
                }
                o.push(t);
              }
            }),
            s.forEach(e => {
              e > a
                ? (a = e)
                : ((r = 2), o.push('必须按顺序设置属性width style color'));
            }),
            {
              value: r < 2 ? i : null,
              reason:
                o.length > 0
                  ? function(e, t, n) {
                      return (
                        lo[r] +
                        ': 属性`' +
                        qi(e) +
                        '` 的值 `' +
                        t +
                        '` 存在问题: \n  ' +
                        o.join('\n  ')
                      );
                    }
                  : null
            }
          );
        }
        return {
          value: null,
          reason: function(e, t, n) {
            return 'ERROR: 属性`' + qi(e) + '` 的值 `' + t + '` 格式不正确';
          }
        };
      },
      display: function(e) {
        e = (e || '').toString();
        const t = ['flex', 'none'],
          n = t.indexOf(e);
        return n > 0
          ? { value: e }
          : 'block' === e
          ? {
              value: 'flex',
              reason: function(e, n, i) {
                return (
                  'ERROR: 属性`' +
                  qi(e) +
                  '` 的值 `' +
                  n +
                  '` 需修改为flex ` (有效枚举值为: `' +
                  t.join('`|`') +
                  '`)'
                );
              }
            }
          : 0 === n
          ? { value: e, reason: !1 }
          : {
              value: null,
              reason: function(e, n, i) {
                return (
                  'ERROR: 属性`' +
                  qi(e) +
                  '` 的值 `' +
                  n +
                  '` 无效 ` (有效枚举值为: `' +
                  t.join('`|`') +
                  '`)'
                );
              }
            };
      }
    };
  function _o(e) {
    return xo.enum.bind(null, e);
  }
  function Ao(e, t) {
    return xo[e].bind(null, t);
  }
  const Co = {
    width: xo.length,
    height: xo.length,
    padding: Ao('arraylength', [
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft'
    ]),
    paddingLeft: xo.length,
    paddingRight: xo.length,
    paddingTop: xo.length,
    paddingBottom: xo.length,
    margin: Ao('arraylength', [
      'marginTop',
      'marginRight',
      'marginBottom',
      'marginLeft'
    ]),
    marginLeft: xo.length,
    marginRight: xo.length,
    marginTop: xo.length,
    marginBottom: xo.length,
    border: xo.border,
    borderWidth: Ao('arraylength', [
      'borderTopWidth',
      'borderRightWidth',
      'borderBottomWidth',
      'borderLeftWidth'
    ]),
    borderLeftWidth: xo.length,
    borderTopWidth: xo.length,
    borderRightWidth: xo.length,
    borderBottomWidth: xo.length,
    borderColor: Ao('arraycolor', [
      'borderTopColor',
      'borderRightColor',
      'borderBottomColor',
      'borderLeftColor'
    ]),
    borderLeftColor: xo.color,
    borderTopColor: xo.color,
    borderRightColor: xo.color,
    borderBottomColor: xo.color,
    borderStyle: _o(['solid', 'dotted', 'dashed']),
    borderRadius: xo.length,
    borderBottomLeftRadius: xo.length,
    borderBottomRightRadius: xo.length,
    borderTopLeftRadius: xo.length,
    borderTopRightRadius: xo.length,
    flex: xo.number,
    flexGrow: xo.number,
    flexShrink: xo.number,
    flexBasis: xo.length,
    flexDirection: _o(['row', 'column']),
    flexWrap: _o(['nowrap', 'wrap', 'wrap-reverse']),
    justifyContent: _o(['flex-start', 'flex-end', 'center', 'space-between']),
    alignItems: _o(['stretch', 'flex-start', 'flex-end', 'center']),
    alignContent: _o([
      'stretch',
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around'
    ]),
    position: _o(['none', 'fixed']),
    top: xo.length,
    bottom: xo.length,
    left: xo.length,
    right: xo.length,
    zIndex: xo.integer,
    opacity: xo.number,
    backgroundColor: xo.color,
    backgroundImage: xo.url,
    backgroundRepeat: _o(['no-repeat', 'repeat', 'repeat-x', 'repeat-y']),
    backgroundPosition: xo.position,
    display: xo.display,
    visibility: _o(['visible', 'hidden']),
    lines: xo.integer,
    color: xo.color,
    fontSize: xo.length,
    fontStyle: _o(['normal', 'italic']),
    fontWeight: _o(['normal', 'bold']),
    textDecoration: _o(['none', 'underline', 'line-through']),
    textAlign: _o(['left', 'center', 'right']),
    lineHeight: xo.length,
    textOverflow: _o(['clip', 'ellipsis']),
    placeholderColor: xo.color,
    selectedColor: xo.color,
    textColor: xo.color,
    timeColor: xo.color,
    textHighlightColor: xo.color,
    strokeWidth: xo.length,
    progressColor: xo.color,
    resizeMode: _o(['cover', 'contain', 'stretch', 'center']),
    columns: xo.number,
    columnSpan: xo.number
  };
  function To(e, t) {
    const n = {},
      i = [],
      o = (function(e, t) {
        let n, i;
        const o = Co[e];
        return (
          'function' == typeof o
            ? (n = 'function' != typeof t ? o(t) : { value: t }).reason &&
              (i = { reason: n.reason(e, t, n.value) })
            : ((n = { value: t }),
              (i = { reason: 'ERROR: 样式名 `' + qi(e) + '` 不支持' })),
          {
            value: n.value instanceof Array ? n.value : [{ n: e, v: n.value }],
            log: i
          }
        );
      })(Zi(e), t);
    return (
      o.value.forEach(e => {
        Qi(e.v) && i.push(e);
      }),
      i && (n.value = i),
      o.log && (n.log = o.log.reason),
      n
    );
  }
  const So = {
    img: 'image',
    p: 'text',
    h1: 'text',
    h2: 'text',
    h3: 'text',
    h4: 'text',
    h5: 'text',
    h6: 'text',
    b: 'span',
    strong: 'span',
    i: 'span',
    del: 'span',
    article: 'div',
    br: 'span'
  };
  function Mo(e) {
    const t = So[e];
    return void 0 !== t ? t : e;
  }
  const Oo = {
    div: {},
    h1: { fontSize: '60px', fontWeight: 'normal' },
    h2: { fontSize: '45px', fontWeight: 'normal' },
    h3: { fontWeight: 'normal', fontSize: '35px' },
    h4: { fontWeight: 'normal', fontSize: '30px' },
    h5: { fontWeight: 'normal', fontSize: '25px' },
    h6: { fontWeight: 'normal', fontSize: '20px' },
    b: { fontWeight: 'bold' },
    strong: { fontWeight: 'bold' },
    i: { fontStyle: 'italic' },
    a: { color: '#00BFFF' },
    del: { textDecoration: 'line-through' }
  };
  function Lo(e) {
    let t = {};
    return Oo[e] && (t = Oo[e]), t;
  }
  const Io = { br: { value: '\n' } };
  function Do(e) {
    let t = {};
    return Io[e] && (t = Io[e]), t;
  }
  function No(e, t, n) {
    const i = 'html' !== t,
      o = 'edit' === n;
    (e = (function(e) {
      return e
        .replace(/<\?xml.*\?>\n/, '')
        .replace(/<.*!doctype.*>\n/, '')
        .replace(/<.*!DOCTYPE.*>\n/, '');
    })(e)),
      (e = e
        .replace(/&([a-zA-Z#0-9]+?);/g, (e, t) => Gi[t] || '&' + t + ';')
        .replace(/\r\n?/g, ''));
    const r = [],
      s = {
        type: 'div',
        children: [],
        events: {},
        classList: [],
        attr: {},
        style: { flex: 1, flexDirection: 'column' }
      };
    return (
      (function(e, t) {
        let n, i, o;
        const r = [];
        let s = e;
        for (
          r.last = function() {
            return this[this.length - 1];
          };
          e;

        ) {
          if (((i = !0), r.last() && ao[r.last()]))
            (e = e.replace(
              new RegExp('([\\s\\S]*?)(</' + r.last() + '[^>]*>)', 'i'),
              function(e, n) {
                return (
                  (n = n
                    .replace(/<!--([\s\S]*?)-->/g, '$1')
                    .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1')),
                  t.text && t.text(n),
                  ''
                );
              }
            )),
              l(0, r.last());
          else if (
            (0 === e.indexOf('\x3c!--')
              ? (n = e.indexOf('--\x3e')) >= 0 &&
                (t.comment && t.comment(e.substring(4, n)),
                (e = e.substring(n + 3)),
                (i = !1))
              : 0 === e.indexOf('</')
              ? (o = e.match(eo)) &&
                ((e = e.substring(o[0].length)), o[0].replace(eo, l), (i = !1))
              : 0 === e.indexOf('<') &&
                (o = e.match(Xi)) &&
                ((e = e.substring(o[0].length)), o[0].replace(Xi, a), (i = !1)),
            i)
          ) {
            n = e.indexOf('<');
            let i = '';
            for (; 0 === n; )
              (i += '<'), (n = (e = e.substring(1)).indexOf('<'));
            (i += n < 0 ? e : e.substring(0, n)),
              (e = n < 0 ? '' : e.substring(n)),
              t.text && t.text(i);
          }
          e === s && console.error('### App Parser ### 解析错误: ' + e),
            (s = e);
        }
        function a(e, n, i, o) {
          if (((n = n.toLowerCase()), io[n]))
            for (; r.last() && oo[r.last()]; ) l(0, r.last());
          if (
            (ro[n] && r.last() === n && l(0, n),
            (o = no[n] || !!o) || r.push(n),
            t.start)
          ) {
            const e = [];
            i.replace(to, function(t, n) {
              const i = arguments[2]
                ? arguments[2]
                : arguments[3]
                ? arguments[3]
                : arguments[4]
                ? arguments[4]
                : so[n]
                ? n
                : '';
              e.push({
                name: n,
                value: i,
                escaped: i.replace(/(^|[^\\])"/g, '$1\\"')
              });
            }),
              t.start && t.start(n, e, o);
          }
        }
        function l(e, n) {
          let i = 0;
          if (n)
            for (
              n = n.toLowerCase(), i = r.length - 1;
              i >= 0 && r[i] !== n;
              i--
            );
          if (i >= 0) {
            for (let e = r.length - 1; e >= i; e--) t.end && t.end(r[e]);
            r.length = i;
          }
        }
        l();
      })(e, {
        start: function(e, t, n) {
          const a = {
            type: i ? e : Mo(e),
            children: [],
            events: {},
            classList: [],
            attr: i ? {} : Do(e),
            style: i ? {} : Lo(e)
          };
          if (
            (0 !== t.length &&
              (a.attr = t.reduce(function(e, t) {
                const n = Zi(t.name);
                let i = t.value;
                return (
                  'class' === n
                    ? (a.classList = i.split(/\s+/))
                    : 'style' === n
                    ? i.split(';').forEach(function(e) {
                        let t,
                          n,
                          i = e.trim().split(':');
                        i.length > 2 &&
                          ((i[1] = i.slice(1).join(':')), (i = i.slice(0, 2))),
                          2 === i.length &&
                            ((n = To((t = i[0].trim()), i[1].trim())).value &&
                              n.value.forEach(e => {
                                Qi(e.v) && (a.style[e.n] = e.v);
                              }),
                            n.log && console.warn('### App Parser ###', n.log));
                      })
                    : 'id' === n
                    ? (a.id = i)
                    : o
                    ? (e[n] = i)
                    : (i.match(/ /) && (i = i.split(' ')),
                      e[n]
                        ? Array.isArray(e[n])
                          ? e[n].push(i)
                          : (e[n] = [e[n], i])
                        : (e[n] = i)),
                  e
                );
              }, {})),
            i || 'source' !== a.type || (s.source = a.attr.src),
            n)
          ) {
            const e = r[0] || s;
            void 0 === e.children && (e.children = []), e.children.push(a);
          } else r.unshift(a);
        },
        end: function(e) {
          const t = i ? e : Mo(e),
            n = r.shift();
          if (
            (n.type !== t &&
              console.error('### App Parser ### 结束标签不匹配:', e),
            !i &&
              'video' === n.type &&
              s.source &&
              ((n.attr.src = s.source), delete s.source),
            0 === r.length)
          )
            s.children.push(n);
          else {
            const e = r[0];
            void 0 === e.children && (e.children = []), e.children.push(n);
          }
        },
        text: function(e) {
          if ('' !== e.slice().replace(/\s*/, '')) {
            const t = r[0];
            if (!o || (t && -1 !== ['text', 'a', 'span'].indexOf(t.type))) {
              if (t)
                if (-1 !== ['text', 'a'].indexOf(t.type)) {
                  const n = {
                    type: 'span',
                    children: [],
                    events: {},
                    classList: [],
                    attr: { value: e },
                    style: {},
                    polyfill: !0
                  };
                  void 0 === t.children && (t.children = []),
                    t.children.push(n);
                } else t.attr.value = e;
            } else {
              const n = {
                type: 'text',
                children: [],
                events: {},
                classList: [],
                attr: { value: e },
                style: {}
              };
              (t || s).children.push(n);
            }
          }
        },
        comment: function(e) {}
      }),
      global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(
          `### App Parser ### 解析${t}文本成功：${JSON.stringify(s)}`
        ),
      s
    );
  }
  var Po = {
    compile: No,
    parseHTML: function(e) {
      const t = No(e, '', 'edit');
      return (
        (function e(t) {
          if (t.children) {
            -1 !== ['text', 'a'].indexOf(t.type) &&
              (t.children.length > 0 && delete t.attr.value,
              1 === t.children.length &&
                t.children[0].polyfill &&
                ((t.attr = Object.assign(t.attr, t.children[0].attr)),
                (t.children = [])));
            for (let n = 0, i = t.children.length; n < i; n++) {
              const i = t.children[n];
              e(i);
            }
          }
        })(t),
        t.children || []
      );
    }
  };
  var Fo = {
    compile: function(e, t) {
      return '' === (e = e.trim()) && (e = '<div></div>'), Po.compile(e, t);
    },
    validateStyle: To,
    parseHTML: Po.parseHTML
  };
  const Ro = {
    initApp: 'quickapp.app.initApp',
    initPage: 'quickapp.page.initPage',
    destroyPage: 'quickapp.page.destroyPage',
    fireEvent: 'quickapp.page.fireEvent',
    onShow: 'quickapp.page.onShow',
    onHide: 'quickapp.page.onHide',
    onBackPress: 'quickapp.page.onBackPress',
    onMenuPress: 'quickapp.page.onMenuPress',
    onOrientationChange: 'quick.page.onOrientationChange',
    callbackDone: 'quickapp.page.callbackDone'
  };
  class Bo {
    constructor(e, t) {
      if (t instanceof Bo) return t;
      (this.timestamp = Date.now()), (this.detail = t), (this.type = e);
      let n = !1;
      (this.stop = function() {
        n = !0;
      }),
        (this.hasStopped = function() {
          return n;
        });
    }
  }
  const jo = [
    'onCreate',
    'onInit',
    'onReady',
    'onShow',
    'onHide',
    'onDestroy',
    'onBackPress',
    'onMenuPress',
    'onUpdateData',
    'onOrientationChange'
  ];
  (Bo.reserveEvents = jo),
    (Bo.isReservedEvent = function(e) {
      return jo.indexOf(e) >= 0;
    });
  const $o = 750,
    zo = 320;
  const Ho = {};
  Object.setPrototypeOf(
    Ho,
    new class {
      constructor() {
        this.eventMap = {};
      }
      subscribe(e, t, n) {
        if (n && n.once) {
          const n = i => {
            t(i), this.remove(e, n);
          };
          return this.subscribe(e, n);
        }
        if (
          ((this.eventMap[e] = this.eventMap[e] || []), 'function' == typeof t)
        ) {
          const n = this.eventMap[e];
          -1 === n.indexOf(t) && n.push(t);
        }
      }
      publish(e, t, n) {
        let i = null;
        const o = this.eventMap[e] || [];
				console.log("TCL: Ge -> publish -> e", e)
				console.log("TCL: Ge -> publish -> this.eventMap[e]", this.eventMap[e])

        for (let e = 0, n = o.length; e < n; e++) i = o[e](t, i);
        return i;
      }
      remove(e, t) {
        if (!this.eventMap[e]) return;
        const n = this.eventMap[e],
          i = n.indexOf(t);
        i > -1 && n.splice(i, 1);
      }
    }()
  );
  let Yo = null;
  class Wo extends te {
    constructor(e, t) {
      super(...arguments),
        (this._isApp = !0),
        (this.options = t || {}),
        (this.name = ''),
        (this.entry = ''),
        (this.customComponentMap = {}),
        (this.designWidth = $o),
        (this._def = null),
        (this._data = {}),
        (this._events = {}),
        (this._status = null),
        (this._shareDocStyle = !1);
    }
    $clear() {
      (this.options = {}),
        (this.name = ''),
        (this.customComponentMap = {}),
        (this.designWidth = $o),
        (this._def = null),
        (this._data = {}),
        (this._events = {}),
        this.destroy();
    }
    get $data() {
      return O(this._data) || (this._data = {}), this._data;
    }
    set $data(e) {
      const t = 'function' == typeof e ? e() : e;
      t
        ? ((this._data = this._data || {}),
          Object.keys(t).forEach(e => {
            N(e)
              ? console.error(
                  `### App Framework ### 页面数据属性名 '${e}' 非法, 属性名不能以$或_开头`
                )
              : (e in this._data &&
                  console.warn(
                    `### App Framework ### App 全局数据 (${e}) 被覆盖`
                  ),
                (this._data[e] = t[e]));
          }))
        : ((this._data = {}),
          console.warn('### App Framework ### App 全局数据被清空'));
    }
    get $def() {
      return this._def;
    }
    set $def(e) {
      global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace('### App Framework ### App 元数据初始化----'),
        (this._def = e);
      const t = e.manifest;
      if (
        (global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            '### App Framework ### App 元数据manifest----',
            JSON.stringify(t)
          ),
        t)
      ) {
        this.name = t.name;
        const e = t.config;
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            '### App Framework ### App 元数据config----',
            JSON.stringify(e)
          ),
          e &&
            ((this.$data = e.data),
            (this.designWidth = e.designWidth || $o),
            this.designWidth < zo && (this.designWidth = zo),
            (this._shareDocStyle = !!e.shareDocStyle));
        const n = t.router;
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            '### App Framework ### App 元数据router----',
            JSON.stringify(n)
          ),
          n && (this.entry = n.entry || '');
      }
      for (const t in e) {
        'function' != typeof e[t] || Bo.isReservedEvent(t) || (this[t] = e[t]);
      }
      this.$on('applc:onCreate', function(e) {
        this._status = e.type.toLowerCase().replace(/.*:on/, '');
      }),
        this.$on('applc:onDestroy', function(e) {
          this._status = e.type.toLowerCase().replace(/.*:on/, '');
        }),
        Bo.reserveEvents.forEach(t => {
          this.$on(`applc:${t}`, e[t]);
        }),
        (this._defined = !0);
    }
    get $status() {
      return this._status;
    }
    get $valid() {
      return 'create' === this._status;
    }
    $emit(e, t) {
      const n = this._events[e];
      if (n)
        for (let i = 0; i < n.length; i++) {
          const o = new Bo(e, t);
          n[i].call(this, o);
        }
    }
    $on(e, t) {
      if (!e || 'function' != typeof t) return;
      const n = this._events;
      (n[e] = n[e] || []), n[e].push(t);
    }
    $off(e) {
      if (!e) return;
      delete this._events[e];
    }
    exit() {
      null === Yo && (Yo = Ho.platform.requireModule(this, 'system.app')),
        Yo.exit(this.id);
    }
  }
  Object.freeze(Wo), Object.freeze(Wo.prototype);
  class Uo extends te {
    constructor(e, t, n, i, o) {
      super(...arguments),
        (this._isPage = !0),
        (this.app = t),
        (this.name = null),
        (this.vm = null),
        (this.intent = n),
        (this.doc = Ho.runtime.helper.createDocument(e)),
        (this.doc.designWidth = this.app.designWidth),
        (this._valid = !0),
        (this._visible = !1),
        (this._meta = Object.assign({}, n, i)),
        (this._orientation = n.orientation),
        o && this._registerCss(o);
    }
    _registerCss(e) {
      const t = (e && e.list) || [];
      for (let e = 0, n = t.length; e < n; e++)
        Ho.runtime.helper.registerStyleObject(this.doc, 'index', t[e], !0);
    }
    get $valid() {
      return this._valid;
    }
    get $visible() {
      return this._valid && this._visible;
    }
    get orientation() {
      return this._orientation;
    }
    get pageName() {
      return this._meta.name;
    }
    get pageComponent() {
      return this._meta.component;
    }
    invoke(...e) {
      super.invoke(...e), this.$valid && Ho.publish(Ro.callbackDone, [this]);
    }
  }
  function Vo(e, t, n = [], i) {
    if (
      (global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(
          `### App Framework ### 调用页面(${e.id})的回调(${t}) 参数：`,
          JSON.stringify(n)
        ),
      !e._callbacks)
    )
      return new Error(`invoke: 回调函数 "${t}" 没有注册`);
    if (!e.$valid)
      return void console.error(
        `invoke: 回调函数所属对象(${e.id})已经无效, 终止回调执行`
      );
    const o = e._callbacks[t];
    if ('function' == typeof o) {
      const r = o(...n);
      return (
        (void 0 !== i && !1 !== i) || (e._callbacks[t] = void 0),
        e.doc && Ho.publish(Ro.callbackDone, [e]),
        r
      );
    }
    return new Error(`callback: 无效回调函数Id "${t}"`);
  }
  function Go(e, t) {
    switch (w(e)) {
      case 'undefined':
      case 'null':
        return '';
      case 'regexp':
        return e.toString();
      case 'date':
        return e.toISOString();
      case 'number':
      case 'string':
      case 'boolean':
      case 'array':
        return e;
      case 'object':
        if (e.nodeType) return e.ref;
        const n = {};
        for (const i in e) n[i] = Go(e[i], t);
        return n;
      case 'function':
        const i = H();
        return (
          t._callbacks
            ? (t._callbacks[i] = e)
            : global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                '### App Framework ### normalize() 页面已经销毁，不再注册回调'
              ),
          i.toString()
        );
      default:
        return JSON.stringify(e);
    }
  }
  let Jo = {};
  const Zo = {},
    qo = {},
    Ko = {};
  function Qo(e) {
    Ko[e] = function(...t) {
      for (const n in Jo) {
        const i = Jo[n];
        i && i[e] && i[e](...t);
      }
    };
  }
  function Xo(e) {
    Ko[e] =
      'createApplication' === e
        ? function(t, n) {
            let i = Zo[t];
            return i
              ? new Error(`Runtime ${e}:无效应用id "${t}"`)
              : ((i = { framework: 'xFramework', created: Date.now() }),
                (Zo[t] = i),
                console.log(
                  `### App Framework ### 创建应用 ${t}---- 框架: ${
                    i.framework
                  } 版本: ${global.frameworkVersion}`
                ),
                Jo[i.framework].createApplication(t, n));
          }
        : 'destroyApplication' === e
        ? function(t) {
            const n = Zo[t];
            if (n && Jo[n.framework]) {
              const e = Jo[n.framework].destroyApplication(t);
              return (Zo[t] = null), e;
            }
            return new Error(`Runtime ${e}:无效应用Id:  "${t}"`);
          }
        : function(...t) {
            const n = t[0],
              i = Zo[n];
            return i && Jo[i.framework]
              ? Jo[i.framework][e](...t)
              : new Error(`Runtime ${e}:无效应用Id:  "${n}"`);
          };
  }
  function er(e) {
    let t, n;
    'string' == typeof e
      ? (t = e)
      : e.length && e.length > 1 && ((t = e[0]), (n = e[1])),
      'createPage' === t
        ? (Ko[t] = function(e, n, i, o, r, s, a) {
            const l = Zo[n];
            if (!l) return new Error(`Runtime ${t}:无效应用id "${n}"`);
            let c = qo[e];
            return c
              ? new Error(`Runtime ${t}:无效页面id "${e}"`)
              : ((c = { appId: n, created: Date.now() }),
                (qo[e] = c),
                console.log(
                  `### App Framework ### 创建页面 ${e}----应用Id: ${n}`
                ),
                Jo[l.framework].createPage(e, n, i, o, r, s, a));
          })
        : ((Ko[t] = function(...n) {
            const i = n[0],
              o = qo[i];
            if (o) {
              const r = Zo[o.appId];
              if (r && Jo[r.framework]) {
                const o = Jo[r.framework][t](...n);
                return 'destroyPage' === e && (qo[i] = null), o;
              }
              return new Error(`Runtime ${t}:无效应用Id:  "${o.appId}"`);
            }
            return 'backPressPage' === e
              ? (console.error(
                  `### App Framework ### backPressPage 无效页面Id:  "${i}"`
                ),
                !1)
              : new Error(`Runtime ${t}:无效页面Id:  "${i}"`);
          }),
          n &&
            (Ko[n] = function(...e) {
              const n = e[0],
                i = qo[n];
              if (i) {
                const o = Zo[i.appId];
                return o && Jo[o.framework]
                  ? Jo[o.framework][t](...e)
                  : new Error(`Runtime ${t}:无效页面Id: "${n}"`);
              }
            }));
  }
  const tr = ['registerDsl'],
    nr = [
      'createApplication',
      'getAppConfig',
      'notifyAppError',
      'destroyApplication'
    ],
    ir = [
      'createPage',
      'destroyPage',
      'recreatePage',
      'changeVisiblePage',
      'backPressPage',
      'menuPressPage',
      'orientationChangePage',
      ['processCallbacks', 'execJSBatch'],
      'getPage',
      'getPageRoot',
      'getPageElementStyles',
      'setPageElementStyles',
      'setPageElementAttrs',
      'replacePageElementWithHtml'
    ];
  const or = {},
    rr = {};
  function sr(e) {
    e.init(Ho);
  }
  const ar = {
    1: (e, ...t) =>
      (function e(t, n, i, o, r) {
        if (!t.$valid) return new Error('fireEvent: 只有Page才能发送Dom事件');
        if (
          (global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Framework ### 向页面(${
                t.id
              }) 的节点(${n})发送事件 "${i}"---- ${JSON.stringify(r)}`
            ),
          Array.isArray(n))
        )
          return void n.some(n => !1 !== e(t, n, i, o));
        return Ho.publish(Ro.fireEvent, [t, n, i, o, r]);
      })(e, ...t),
    2: (e, ...t) => Vo(e, ...t)
  };
  const lr = {
    config: Ho,
    init: function(e) {
      (Ho.platform = e.platform),
        (Ho.runtime = e.runtime),
        (Ho.dock = e.dock),
        (function(e) {
          (Jo = { xFramework: e.dock }),
            tr.forEach(Qo),
            nr.forEach(Xo),
            ir.forEach(er);
        })(e);
    },
    registerDsl: function(e) {
      let t = e;
      'string' == typeof e && (t = E({}, `${e}; return dsl;`)), sr(t);
    },
    installDsl: sr,
    createApplication: function(e, t) {
      let n,
        i = or[e];
      return (
        i
          ? (n = new Error(`createApplication: 无效应用Id "${e}"`))
          : (global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                '### App Framework ### 平台配置信息：',
                JSON.stringify(global.Env)
              ),
            (i = new Wo(e)),
            (or[e] = i),
            (n = Ho.publish(Ro.initApp, [i, t]))),
        n
      );
    },
    notifyAppError: function(e, t) {
      const n = or[e];
      if (n) {
        if (
          (global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Framework ### notifyAppError 应用(${e})响应`
            ),
          n.$def && 'function' == typeof n.$def.onError)
        )
          try {
            n.$def.onError.call(n, t);
          } catch (e) {
            throw ((e.message = `$INTERRUPTION$:${e.message}`), e);
          }
      } else
        console.error(`### App Framework ### notifyAppError 应用(${e})无效`);
    },
    destroyApplication: function(e) {
      const t = or[e];
      return t
        ? ((function(e) {
            e.$emit('applc:onDestroy'),
              e.$clear(),
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  `### App Framework ### 成功销毁应用(${e.id})----`
                );
          })(t),
          or)
        : new Error(`destroyApplication: 无效应用Id "${e}"`);
    },
    createPage: function(e, t, n, i, o, r, s) {
      const a = or[t];
      if (!a) return new Error(`createPage: 无效应用Id "${t}"`);
      s = JSON.parse(s || null);
      let l,
        c = rr[e];
      if (c) l = new Error(`createPage: 无效页面Id "${e}"`);
      else {
          console.log(
            `### App Framework ### 创建页面(${e})---- `,
            JSON.stringify(o)
          ),
          (c = new Uo(e, a, o, r, s)),
          (rr[e] = c);
        const t = (function(e, t, n) {
          const i = e,
            o = {};
          return {
            setTimeout: function(e, r) {
              const s = n(e, i),
                a = global.setTimeoutWrap(
                  i.id,
                  function() {
                    t(i, s);
                  },
                  r || 0
                );
              return (o[a.toString()] = s), a.toString();
            },
            setInterval: function(e, r) {
              const s = n(e, i),
                a = global.setIntervalWrap(
                  i.id,
                  function() {
                    t(i, s, [], !0);
                  },
                  r || 0
                );
              return (o[a.toString()] = s), a.toString();
            },
            clearTimeout: function(e) {
              global.clearTimeoutWrap(e), (o[e] = void 0);
            },
            clearInterval: function(e) {
              global.clearIntervalWrap(e), (o[e] = void 0);
            },
            requestAnimationFrame: function(e) {
              const r = n(e, i),
                s = global.requestAnimationFrameWrap(i.id, function() {
                  t(i, r);
                });
              return (o[s.toString()] = r), s.toString();
            },
            cancelAnimationFrame: function(e) {
              global.cancelAnimationFrameWrap(e), (o[e] = void 0);
            }
          };
        })(c, Vo, Go);
        l = Ho.publish(Ro.initPage, [c, n, i, t]);
      }
      return l;
    },
    recreatePage: function(e) {
      const t = rr[e];
      let n;
      return (n = t
        ? (function(e) {
            if (
              (console.log(`### App Framework ### 重建页面(${e.id})----`),
              !e.$valid)
            )
              return (
                console.error(`### App Framework ### 页面(${e.id})缺少dom数据`),
                new Error('recreatePage: 无效数据')
              );
            Ho.runtime.helper.recreateDocument(e.doc),
              e.doc.listener.createFinish();
          })(t)
        : new Error(`recreatePage: 无效页面Id "${e}"`));
    },
    destroyPage: function(e) {
      const t = rr[e];
      return t
        ? (Ho.publish(Ro.destroyPage, [t]),
          (function(e) {
            console.log(`### App Framework ### 销毁页面(${e.id})----`),
              (e.intent = null),
              (e.name = null),
              Ho.runtime.helper.destroyTagNode(e.doc),
              (e.doc = null),
              (e._valid = !1),
              (e._visible = !1),
              e.destroy(),
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  `### App Framework ### 成功销毁页面(${e.id})----`
                );
          })(t),
          delete rr[e],
          rr)
        : new Error(`destroyPage: 无效页面Id "${e}"`);
    },
    changeVisiblePage: function(e, t) {
      const n = rr[e];
			console.log("TCL: Ge -> No -> n", n)
      if (n) {
          console.log(
            `### App Framework ### changeVisiblePage 页面(${e})响应：${t}`
          );
        const i = t ? Ro.onShow : Ro.onHide;
        Ho.publish(i, [n, t]);
      } else
        console.error(`### App Framework ### changeVisiblePage 页面(${e})无效`);
    },
    backPressPage: function(e) {
      const t = rr[e];
      let n = !1;
      return (
        t
          ? (global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                `### App Framework ### backPressOnPage 页面(${e})响应`
              ),
            (n = Ho.publish(Ro.onBackPress, [t])))
          : console.error(
              `### App Framework ### backPressOnPage 页面(${e})无效`
            ),
        !0 !== n && (n = !1),
        n
      );
    },
    menuPressPage: function(e) {
      const t = rr[e];
      let n = !1;
      return (
        t
          ? (global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                `### App Framework ### menuPressOnPage 页面(${e})响应`
              ),
            (n = Ho.publish(Ro.onMenuPress, [t])))
          : console.error(
              `### App Framework ### menuPressOnPage 页面(${e})无效`
            ),
        n
      );
    },
    orientationChangePage: function(e, t) {
      const n = rr[e];
      n
        ? (global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Framework ### orientationChangePage 页面(${e})响应：${JSON.stringify(
                t
              )}`
            ),
          Ho.publish(Ro.onOrientationChange, [n, t]))
        : console.error(
            `### App Framework ### orientationChangePage 页面(${e})无效`
          );
    },
    processCallbacks: function(e, t) {
      if (!Array.isArray(t))
        return new Error(`processCallbacks: 无效任务回调数据 "${e}"`);
      let n = rr[e];
      if ((n || (n = or[e]), n)) {
        const e = [];
        return (
          t.forEach(t => {
            const i = ar[t.action],
              o = [...t.args];
            'function' == typeof i
              ? (o.unshift(n), e.push(i(...o)))
              : (console.error(
                  `### App Framework ### 无法识别的回调函数类型 (${t.action})`
                ),
                e.push('invalid'));
          }),
          e
        );
      }
      return new Error(`processCallbacks: 无效回调来源Id "${e}"`);
    },
    getAppConfig: function(e) {
      const t = or[e];
      let n;
      return (n = t ? t.$def : new Error(`getAppConfig: 无效应用Id "${e}"`));
    },
    getPageRoot: function(e) {
      const t = rr[e];
      let n;
      return (n = t
        ? (function(e) {
            const t = (e.doc || {}).body || {};
            return Ho.runtime.helper.getNodeAsJSON(t);
          })(t)
        : new Error(`getPageRoot: 无效页面Id "${e}"`));
    },
    getPage: function(e) {
      return rr[e];
    },
    getPageElementStyles: function(e, t) {
      const n = rr[e];
      let i;
      return (i =
        n && n.doc
          ? (function(e, t) {
              let n;
              const i = Ho.runtime.helper.getDocumentNodeByRef(e.doc, t);
              if (i) {
                const e = Ho.runtime.helper.getElementMatchedCssRuleList(i);
                return (n = { inlineStyle: e.shift(), matchedCSSRules: e });
              }
              return (n = new Error(`getElementStyles: 无效节点ref "${t}"`));
            })(n, t)
          : new Error(`getPageElementStyles: 无效页面Id "${e}"`));
    },
    setPageElementStyles: function(e, t, n, i) {
      const o = rr[e];
      let r;
      return (
        o && o.doc
          ? (global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                '### App Framework ### 更新页面元素样式: ',
                JSON.stringify(arguments)
              ),
            (r = (function(e, t, n, i) {
              let o;
              const r = Ho.runtime.helper.getDocumentNodeByRef(e.doc, t);
              if (r) {
                for (let e = 0, t = i.length; e < t; e++) {
                  const t = i[e];
                  t.name = _(t.name);
                }
                (o = Ho.runtime.helper.setElementMatchedCssRule(r, n, i)),
                  e.doc.listener.updateFinish();
              } else o = new Error(`setPageElementStyles: 无效节点ref "${t}"`);
              return o;
            })(o, t, n, i)))
          : (r = new Error(`setPageElementStyles: 无效页面Id "${e}"`)),
        r
      );
    },
    setPageElementAttrs: function(e, t, n) {
      const i = rr[e];
      let o;
      return (
        i && i.doc
          ? (global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                '### App Framework ### 更新页面元素的属性: ',
                JSON.stringify(arguments)
              ),
            (o = (function(e, t, n) {
              let i;
              const o = Ho.runtime.helper.getDocumentNodeByRef(e.doc, t);
              if (o) {
                for (let e = 0, t = n.length; e < t; e++) {
                  const t = n[e];
                  if (((t.name = _(t.name.trim())), '' === t.name));
                  else if ('style' === t.name) {
                    const e = t.value
                      .split(';')
                      .map(e => {
                        const t = e.split(':');
                        return { name: _(t[0].trim()), value: t[1] };
                      })
                      .filter(e => '' !== e.name);
                    Ho.runtime.helper.setElementMatchedCssRule(o, 'INLINE', e);
                  } else Ho.runtime.helper.setElementAttr(o, t.name, t.value);
                }
                e.doc.listener.updateFinish();
              } else i = new Error(`setElementAttrs: 无效节点ref "${t}"`);
              return i;
            })(i, t, n)))
          : (o = new Error(`setPageElementAttrs: 无效页面Id "${e}"`)),
        o
      );
    },
    replacePageElementWithHtml: function(e, t, n) {
      const i = rr[e];
      let o;
      if (i && i.doc) {
        const e = Ho.runtime.helper.getDocumentNodeByRef(i.doc, t),
          r = e.parentNode,
          s = r.layoutChildren.indexOf(e);
        try {
          const t = Fo.parseHTML(n),
            a = (function e(t, n) {
              if (
                (global.Env &&
                  'trace' === global.Env.logLevel &&
                  console.trace(
                    `### App Runtime ### 编译节点：${JSON.stringify(t)}`
                  ),
                t.hasOwnProperty('length'))
              ) {
                const i = [];
                for (let o = 0, r = t.length; o < r; o++) {
                  const r = e(t[o], n);
                  r && i.push(r);
                }
                return i;
              }
              if (!t.nodeType || t.nodeType === n.NodeType.ELEMENT) {
                const i = n.createElement(t.type);
                for (const e in t.attr)
                  Ho.runtime.helper.setElementAttr(i, e, t.attr[e]);
                t.classList &&
                  t.classList.length &&
                  Ho.runtime.helper.setElementAttr(
                    i,
                    'class',
                    t.classList.join(' ')
                  );
                for (const e in t.style)
                  Ho.runtime.helper.setElementStyle(i, e, t.style[e]);
                if (t.children)
                  for (let o = 0, r = t.children.length; o < r; o++) {
                    const r = e(t.children[o], n);
                    r && i.appendChild(r);
                  }
                return i;
              }
              console.warn(
                `### App Runtime ### 不支持插入的节点类型：${t.nodeType}`
              );
            })(t, i.doc);
          if (a) {
            r.removeChild(e);
            const t = a.hasOwnProperty('length') ? a : [a];
            for (let e = 0, n = t.length; e < n; e++) {
              const n = t[e];
              r.insertBefore(n, r.layoutChildren[s + e]);
            }
            i.doc.listener.updateFinish(),
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  '### App Framework ### 使用HTML替换元素:',
                  JSON.stringify(arguments),
                  JSON.stringify(t)
                );
          } else
            o = new Error(
              `replacePageElementWithHtml: 使用HTML替换元素，编译出错：${JSON.stringify(
                t
              )}`
            );
        } catch (e) {
          o = new Error(`replacePageElementWithHtml: 使用HTML替换元素：${e}`);
        }
      } else o = new Error(`replacePageElementWithHtml: 无效页面Id "${e}"`);
      return o;
    },
    bindComponentMethods: function(e, t) {
      t &&
        !t._hasBind &&
        ('canvas' === t.tagName.toLowerCase()
          ? (function(e, t) {
              e.getContext = function(n) {
                const i = ['canvas', e.ref, 'getContext', [n]];
                return t.doc.listener.invokeComponentMethod.apply(
                  t.doc.listener,
                  i
                );
              };
            })(t, e)
          : ((t.animate = (function(e, t) {
              return (n, i) => {
                const o = { keyframes: n, options: i },
                  r = Ho.platform.requireBundle('animation.js'),
                  s = Ho.platform.requireModule(t.app, 'system.animation'),
                  a = new r(t, e, o, s);
                return Object.freeze(a);
              };
            })(t, e)),
            Ho.runtime.helper.bindComponentMethods(t).forEach(function(n) {
              const i = t[n];
              t[n] = function(...o) {
                if (e && e.doc && e.$valid) {
                  Ho.publish(Ro.callbackDone, [e]);
                  const r = o.map(t => Go(t, e));
                  i.apply(t[n], r);
                }
              };
            })),
        (t._hasBind = !0));
      return t;
    },
    exposure: Ko
  };
  e(
    '*{margin:0;padding:0;border-width:0;text-size-adjust:none}div::-webkit-scrollbar,root::-webkit-scrollbar{width:0!important}#hap,body,html{width:100%;height:100%;background-color:#fff;font-size:30px;font-family:sans-serif,PingFang SC}ol,ul{list-style:none}.root-container{height:100%;width:100%;overflow-x:hidden;overflow-y:scroll;display:block}.root-container>div{margin:0 auto;pointer-events:auto}.hap-container{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;flex:0 1 auto;z-index:0;max-width:100%}.hap-div{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;flex:0 1 auto;z-index:0;max-width:100%;pointer-events:none;overflow:hidden}.hap-a{pointer-events:auto;overflow:hidden}.hap-richtext{pointer-events:auto;width:-webkit-fill-available;text-size-adjust:200%;padding-bottom:20px}.hap-container-bak{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column;-webkit-flex-grow:0;flex-grow:0;-webkit-flex-basis:auto;flex-basis:auto;align-items:stretch;box-align:stretch;align-content:flex-start;position:relative;border:0 solid #000;margin:0;padding:0;min-width:0}.hap-element{box-sizing:border-box;position:relative;-webkit-flex-shrink:0;flex-shrink:0;-webkit-flex-grow:0;flex-grow:0;-webkit-flex-basis:auto;flex-basis:auto;border:0 solid #000;margin:0;padding:0;min-width:0;width:auto;white-space:normal;pointer-events:auto}.hap-text{display:-webkit-box;-webkit-box-orient:vertical;-webkit-box-pack:center;word-break:break-word;box-sizing:border-box;line-height:normal;z-index:0;text-align:left;width:fit-content;white-space:pre-line}.hap-stack{display:block;position:relative;width:-webkit-fill-available}.hap-stack-wrap{display:flex;position:absolute;top:0;bottom:0;left:0;right:0;pointer-events:none;flex-direction:inherit;justify-content:inherit;align-items:inherit}.hap-web{flex:1}',
    void 0
  );
  var cr = {
    _instances: {},
    _meta: {},
    apiModule: {},
    getApiModuleMeta: function(e) {
      const t = {};
      return (t[e] = this._meta[e]), t;
    },
    setApiModuleMeta: function(e) {
      let t;
      for (const n in e) e.hasOwnProperty(n) && (t = n);
      const n = this._meta[t];
      if (n) {
        const i = {};
        e[t].forEach(function(e) {
          i[e.name] = e;
        }),
          n.forEach(function(e, t) {
            i[e.name] && ((n[t] = i[e.name]), delete i[e.name]);
          });
        for (const t in e) e.hasOwnProperty(t) && n.push(e[t]);
      } else this._meta[t] = e[t];
      this._meta[t] = e[t];
    },
    setApiMeta: function(e, t) {
      const n = this._meta[e];
      if (n) {
        let e = -1;
        n.forEach(function(n, i) {
          void 0 === t.name && (e = i);
        }),
          -1 !== e ? (n[e] = t) : n.push(t);
      } else this._meta[e] = [t];
    }
  };
  const dr = {
      version: '0.5.0',
      debug: !1,
      validRoots: ['div', 'list', 'vlist', 'scroller'],
      downgrade: {}
    },
    hr = [
      { name: 'list', methods: ['scrollTo'] },
      { name: 'swiper', methods: ['swipeTo'] },
      {
        name: 'input',
        methods: ['focus', 'select', 'setSelectionRange', 'getSelectionRange']
      },
      { name: 'picker', methods: ['show'] },
      {
        name: 'textarea',
        methods: ['focus', 'select', 'setSelectionRange', 'getSelectionRange']
      },
      {
        name: 'video',
        methods: [
          'start',
          'pause',
          'setCurrentTime',
          'requestFullscreen',
          'exitFullscreen'
        ]
      },
      { name: 'canvas', methods: ['getContext'] },
      {
        name: 'web',
        methods: [
          'reload',
          'forward',
          'back',
          'canForward',
          'canBack',
          'postMessage'
        ]
      },
      {
        name: 'map',
        methods: [
          'getCenterLocation',
          'translateMarker',
          'moveToMyLocation',
          'includePoints',
          'getRegion',
          'getScale',
          'getSupportedCoordTypes',
          'getCoordType',
          'convertCoord'
        ]
      }
    ],
    pr = {};
  function ur(e) {
    if (!(this instanceof ur)) return new ur(e);
    (this.instanceId = e.instanceId),
      (this.hapInstance = e),
      (pr[this.instanceId] = this);
  }
  function fr(e, t) {
    processCallbacks(e, [t]);
  }
  (ur.getSender = function(e) {
    return pr[e];
  }),
    (ur.prototype = {
      performCallback: function(e, t, n) {
        const i = [e];
        t && i.push(t),
          n && i.push(n),
          fr(this.instanceId, { action: '2', method: 'callback', args: i });
      },
      fireEvent: function(e, t, n, i) {
        n.extra && S(i, n.extra()),
          fr(this.instanceId, {
            action: '1',
            method: 'fireEvent',
            args: [e, t, i, n.updator && n.updator()]
          });
      }
    });
  const mr = {
    invokeCallback(e, t, n) {
      global.execInvokeCallback({
        callback: e,
        data: { code: n || 0, content: t }
      });
    },
    callbackSuccess(e, t) {
      global.execInvokeCallback({ callback: e, data: { code: 0, content: t } });
    },
    callbackFail(e, t, n) {
      global.execInvokeCallback({
        callback: e,
        data: { code: n || 999, content: t }
      });
    },
    callbackCancel(e, t) {
      global.execInvokeCallback({
        callback: e,
        data: { code: 100, content: t }
      });
    },
    syncResult: e => (e ? { code: 0, content: e } : { code: 0, content: '' }),
    polyfillPrompt(e, t, n) {
      console.warn(
        `### Web Render ### ${e} => ${t}:${JSON.stringify(n) ||
          ''}\n\n==可能返回模拟数据，请使用真机调试体验完整功能==`
      );
    },
    errorTip(e, t, n) {
      console.error(`### Web Render ### ${e} => ${t}:${n || '是必填项'}`);
    },
    MODE: { SYNC: 0, CALLBACK: 1, SUBSCRIBE: 2 },
    TYPE: { METHOD: 0, ATTRIBUTE: 1, EVENT: 2 },
    ACCESS: { NONE: 0, READ: 1, WRITE: 2 },
    NORMALIZE: { RAW: 0, JSON: 1 },
    RESULT: { MODULE_INST: 0 }
  };
  function gr(e, t) {
    const n = document.head,
      i = document.createElement('script');
    (i.type = 'text/javascript'),
      (i.charset = 'utf-8'),
      (i.async = !0),
      (i.timeout = 12e4),
      (i.src = e);
    const o = setTimeout(r, 12e4);
    function r(e) {
      (i.onerror = i.onload = null), clearTimeout(o);
      const n = 'error' === e.type ? new Error('ScriptError') : void 0;
      t(n);
    }
    (i.onerror = i.onload = r), n.appendChild(i);
  }
  var yr = !1,
    br = window.requestAnimationFrame || window.webkitRequestAnimationFrame;
  br ||
    ((yr = !0),
    (br = function(e) {
      return xr(e, 16);
    }));
  var vr = window.cancelAnimationFrame || window.webkitCancelAnimationFrame;
  !vr && yr
    ? (vr = function(e) {
        return _r(e);
      })
    : vr || (vr = function() {});
  var Er = (Number.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1) - 1,
    wr = {},
    kr = 0;
  function xr(e, t) {
    var n = (function e() {
        return wr[(kr = (kr + 1) % Er)] ? e() : kr;
      })(),
      i = Date.now();
    return (
      (wr[n] = br(function o() {
        (wr[n] || 0 === wr[n]) &&
          (Date.now() - i < t ? (wr[n] = br(o)) : (delete wr[n], e()));
      })),
      n
    );
  }
  function _r(e) {
    var t = wr[e];
    t && vr(t), delete wr[e];
  }
  const Ar = 'system.router.params',
    Cr = {
      instanceId: 1,
      basePath: '',
      currentPath: '',
      index: 0,
      scriptIndex: 0,
      entry: '',
      routes: [],
      pages: {},
      display: {},
      init(e) {
        const t = function() {
          global.history.state
            ? this.navigateTo(global.history.state, 'back')
            : this.back();
        }.bind(this);
        window.addEventListener('popstate', t, !1),
          (this.scriptIndex = document.head.children.length - 1),
          (this.basePath = e.base);
        const n = (global.manifest && global.manifest.router) || {};
        (this.entry = n.entry || ''),
          (this.pages = n.pages || {}),
          (this.display = (global.manifest && global.manifest.display) || {});
        const i = global.sessionStorage.getItem('routes');
        try {
          (this.routes = JSON.parse(i) || []),
            (this.index = Math.max(this.routes.length - 1, 0));
        } catch (e) {
          console.log(e);
        }
        this.reload();
      },
      navigateTo(e, t) {
        const n = e && e.uri,
          i = n && n.split(':')[0];
        if (i && i.indexOf('http') > -1)
          global.history.pushState(e, n, n), (window.location.href = n);
        else {
          const i =
            n &&
            (function(e) {
              let t = '',
                n = '';
              'string' == typeof e &&
                ('/' === e[0]
                  ? ((t = e.slice(1)), (n = e))
                  : ((t = e), (n = '/' + e)));
              return { name: t, path: n };
            })(n);

						console.log("TCL: Ge -> navigateTo -> this.pages", this.pages)
            console.log("TCL: Ge -> navigateTo -> !this.pages[i.path]", !this.pages[i.path])
            console.log("TCL: Ge -> navigateTo -> !this.pages[i.name]", !this.pages[i.name])
            console.log("TCL: Ge -> navigateTo -> '/' !== n", n)
          if ('/' !== n && !this.pages[i.name] && !this.pages[i.path])
            return (
              console.error(`### Web Render ### 找不到该路由:${n}`),
              void (document.body.innerHTML = `找不到该路由:${n}`)
            );
          const o =
              this.basePath +
              ('/' === i.path[i.path.length - 1]
                ? i.path.slice(0, i.path.length - 1)
                : i.path),
            r = (e && e.params) || {};
          Object.keys(r).forEach(e => {
            try {
              'object' == typeof r[e] && (r[e] = JSON.stringify(r[e]));
            } catch (e) {
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(`### Web Render ### navigateTo error:${e}`);
            }
          });
          const s = JSON.stringify(r);
          global.sessionStorage.setItem(Ar, s);
          const a =
              (this.pages[i.name] && this.pages[i.name].component) ||
              (this.pages[i.path] && this.pages[i.path].component) ||
              'index',
            l = {
              name: i.name,
              path: i.path,
              component: a,
              uri: 'hap://app/com.hap.quickapp',
              action: 'view',
              currentPageName: i.name,
              fromExternal: !1,
              orientation: 'portrait'
            };
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### Web Render ### 路由跳转至${o}, 当前id:${
                this.instanceId
              }, 传参:${s}`
            );
          const c = function() {
            gr(
              `${o}/${a}.js`,
              function(r) {
                if (r)
                  n === this.entry
                    ? (console.error('### Web Render ### 文件加载错误'),
                      (document.body.innerHTML = '文件加载错误'))
                    : (global.Env &&
                        'trace' === global.Env.logLevel &&
                        console.trace(
                          '### Web Render ### 文件加载错误，将返回首页'
                        ),
                      this.navigateTo({ uri: this.entry }, 'push'));
                else {
                  switch (t) {
                    case 'push':
                      global.history.pushState(e, i.path, `${o}/`),
                        this.routes.push({
                          index: ++this.index,
                          name: i.name,
                          path: i.path,
                          document: ''
                        });
                      break;
                    case 'replace':
                      global.history.replaceState(e, i.path, `${o}/`),
                        this.routes.pop(),
                        this.routes.push({
                          index: this.index,
                          name: i.name,
                          path: i.path,
                          document: ''
                        });
                      break;
                    case 'back':
                      this.routes.pop(), this.index--;
                  }
                  global.sessionStorage.setItem(
                    'routes',
                    JSON.stringify(this.routes)
                  ),
                    this.instanceId > 2 &&
                      (global.changeVisiblePage(this.instanceId - 1, !1),
                      global.destroyPage(this.instanceId - 1)),
                    Object.keys(wr).forEach(e => {
                      _r(e);
                    }),
                    (function(e) {
                      Bi.reset(), (document.body.innerHTML = '');
                      const t = e ? e + 1 : document.head.children.length;
                      for (
                        let e = document.head.children.length - 1;
                        e >= t;
                        e--
                      )
                        document.head.removeChild(document.head.children[e]);
                    })(this.scriptIndex),
                    (function(e, t, n) {
                      const i = global.manifest || {},
                        o = t.pages || {},
                        r = o[e.name] || o[e.path] || {};
                      if (
                        'boolean' == typeof r.titleBar
                          ? r.titleBar
                          : 'boolean' != typeof t.titleBar || t.titleBar
                      ) {
                        const e =
                            r.titleBarText || t.titleBarText || i.name || '',
                          o = r.titleBarTextColor || t.titleBarTextColor,
                          s =
                            r.titleBarBackgroundColor ||
                            t.titleBarBackgroundColor,
                          a =
                            'boolean' == typeof r.menu
                              ? r.menu
                              : 'boolean' == typeof t.menu && t.menu,
                          l = n.routes && n.routes.length > 1;
                        Bi.createPageTitleBar(
                          {
                            text: e,
                            textColor: o,
                            backgroundColor: s,
                            menu: a,
                            back: l
                          },
                          n
                        );
                      }
                    })(i, this.display, this),
                    global.createPageHandler(),
										console.log("TCL: Ge -> c -> createPageHandler"),
                    global.changeVisiblePage(this.instanceId, !0);
                }
              }.bind(this)
            );
          }.bind(this);
          global.createPage(++this.instanceId, '1', c, r, l);
        }
      },
      reload() {
        const e = window.location.pathname;
        this.currentPath =
          e.length > 1 && '/' === e[e.length - 1]
            ? e.slice(0, e.length - 1)
            : e;
        const t = this.currentPath.replace(this.basePath, ''),
          n = global.sessionStorage.getItem(Ar),
          i = n ? JSON.parse(n) : {};
        this.navigateTo({ uri: t || this.entry, params: i }, 'replace');
      },
      push(e) {
        this.navigateTo(e, 'push');
      },
      replace(e) {
        this.navigateTo(e, 'replace');
      },
      back(e) {
        e ? this.navigateTo(e, 'back') : global.history.back();
      }
    };
  var Tr = {
    module: {
      push: e => (Cr.push(e), 'success'),
      replace: e => (Cr.replace(e), 'success'),
      back: () => (Cr.back(), 'success'),
      clear: () => 'success',
      getLength: () => Cr.routes.length,
      getState() {
        const e = Cr.routes[Cr.routes.length - 1];
        return {
          index: (e && e.index) || 0,
          name: (e && e.name) || '',
          path: (e && e.path) || ''
        };
      }
    },
    config: {
      name: 'system.router',
      methods: [
        { name: 'push', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC },
        { name: 'replace', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC },
        { name: 'back', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC },
        { name: 'clear', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC },
        { name: 'getLength', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC },
        { name: 'getState', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }
      ]
    }
  };
  var Sr = {
    module: {
      fetch(e = {}) {
        global
          .fetch(
            ...(function(e) {
              let t = e.url,
                n = e.data;
              const i = e.method || 'GET',
                o = e.header || {};
              'string' != typeof n || o['Content-Type']
                ? n instanceof ArrayBuffer && !o['Content-Type']
                  ? Object.assign(o, {
                      'Content-Type': 'application/octet-stream'
                    })
                  : 'object' == typeof n &&
                    (o['Content-Type'] ||
                      Object.assign(o, {
                        'Content-Type':
                          'application/x-www-form-urlencoded; charset=utf-8'
                      }),
                    'POST' === i.toUpperCase()
                      ? (n = Mr(n))
                      : 'GET' === i.toUpperCase() && (n = Mr(n)))
                : Object.assign(o, {
                    'Content-Type': 'text/plain; charset=utf-8'
                  });
              const r = {
                headers: o,
                method: i,
                credentials: 'include',
                mode: 'cors',
                referrer: 'no-referrer'
              };
              return 'GET' === i.toUpperCase() || 'HEAD' === i.toUpperCase()
                ? [(t += t.indexOf('?') > -1 ? '&' + n : '?' + n), r]
                : ((r.body = n), [t, r]);
            })(e)
          )
          .then(t =>
            (function(e, t = '') {
              const n = e.status,
                i = {};
              e.headers.forEach((e, t) => {
                i[t] = e;
              });
              const o = { code: n, headers: i };
              return 'json' === t
                ? e
                    .json()
                    .then(e => Promise.resolve(Object.assign(o, { data: e })))
                : 'file' === t
                ? e
                    .blob()
                    .then(e => Promise.resolve(Object.assign(o, { data: e })))
                : 'arraybuffer' === t
                ? e
                    .arrayBuffer()
                    .then(e => Promise.resolve(Object.assign(o, { data: e })))
                : e
                    .text()
                    .then(e => Promise.resolve(Object.assign(o, { data: e })));
            })(t, e.responseType || '')
          )
          .then(t => {
            e.success(t);
          })
          .catch(t => {
            e.fail(t);
          });
      }
    },
    config: {
      name: 'system.fetch',
      methods: [{ name: 'fetch', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }]
    }
  };
  function Mr(e) {
    try {
      const t = [];
      for (const n in e) {
        const i = encodeURIComponent(n),
          o = encodeURIComponent(e[n]);
        t.push(i + '=' + o);
      }
      return t.join('&');
    } catch (e) {
      return '';
    }
  }
  e(
    '.hap-prompt-mask{position:fixed;z-index:999;top:0;right:0;bottom:0;left:0;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3)}.hap-prompt-content{width:86%;max-height:70%;background-color:#fff;word-break:break-all}.hap-prompt-footer{position:relative;display:flex;padding:20px 0 50px;color:#009688;font-size:28px}',
    void 0
  );
  let Or = 0;
  class Lr {
    constructor(e) {
      const t = document.createElement('div'),
        n = document.getElementsByTagName('body')[0];
      return (
        (this._node = t),
        (this._options = e),
        (this._uid = `hap-prompt-box${Or++}`),
        (this._container = n),
        (this._btns = []),
        t.classList.add('hap-prompt-box'),
        t.setAttribute('id', this._uid),
        this.createMask(),
        this
      );
    }
    createMask() {
      const e = this._options,
        t = document.createElement('div'),
        n = document.createElement('div');
      t.classList.add('hap-prompt-mask'),
        n.classList.add('hap-prompt-content'),
        t.appendChild(n),
        this._node.appendChild(t),
        (this._content = n),
        (this._mask = t),
        'dialog' === e.type ? this.createDialog(e) : this.createMenu(e);
    }
    createDialog(e) {
      const t = document.createElement('div');
      let n = null;
      if (
        ((t.style.padding = '32px'),
        t.classList.add('hap-prompt-body'),
        e.title)
      ) {
        const n = document.createElement('h2');
        (n.style.cssText =
          'font-size: 40px;color: #000;margin-bottom: 20px;font-weight: 400;'),
          (n.innerText = e.title),
          t.appendChild(n);
      }
      if (e.message) {
        const n = document.createElement('p');
        (n.style.cssText = 'font-size: 32px;color: #000;'),
          (n.innerText = e.message),
          t.appendChild(n);
      }
      e.buttons &&
        Array.isArray(e.buttons) &&
        ((n = document.createElement('div')).classList.add('hap-prompt-footer'),
        (n.style.flexDirection = 'row-reverse'),
        (n.style.justifyContent = 'flex-start'),
        e.buttons.slice(0, 3).forEach((e, t) => {
          const i = document.createElement('span');
          (i.style.paddingRight = '38px'),
            (i.style.paddingLeft = '38px'),
            (i.dataset.index = t),
            e.text && (i.innerText = e.text),
            e.color && (i.style.color = e.color),
            2 === t && ((i.style.position = 'absolute'), (i.style.left = '0')),
            this._btns.push(i),
            n.appendChild(i);
        }),
        this._content.appendChild(n)),
        this._content.insertBefore(t, n),
        this._container.appendChild(this._node),
        this.bindAction();
    }
    createMenu(e) {
      const t = document.createElement('ul');
      (t.style.padding = '10px 32px'),
        e.itemColor && (t.style.color = e.itemColor),
        t.classList.add('hap-prompt-body');
      const n = document.createDocumentFragment();
      e.itemList.forEach((e, t) => {
        const i = document.createElement('li');
        (i.innerText = e),
          (i.dataset.index = t),
          (i.style.paddingTop = '15px'),
          (i.style.paddingBottom = '15px'),
          n.appendChild(i),
          this._btns.push(i);
      }),
        t.appendChild(n),
        this._content.appendChild(t),
        this._container.appendChild(this._node),
        this.bindAction();
    }
    close() {
      const e = this._container,
        t = document.getElementById(this._uid);
      e.removeChild(t),
        (this._btns = null),
        (this._container = null),
        (this._content = null),
        (this._mask = null),
        (this._node = null),
        (this._options = null),
        (this._uid = null);
    }
    bindAction() {
      const e = this,
        t = e._btns,
        n = e._mask,
        i = e._content,
        o = e._options,
        r = function(t) {
          t.preventDefault(), t.stopPropagation();
          const n = this.dataset.index;
          o.success && o.success({ index: n }), e.close();
        };
      i.addEventListener('click', function(e) {
        e.preventDefault(), e.stopPropagation();
      }),
        n.addEventListener(
          'click',
          function(t) {
            t.preventDefault(),
              t.stopPropagation(),
              o.cancel && o.cancel(),
              e.close();
          },
          !1
        );
      for (let e = 0, n = t.length; e < n; e++)
        t[e].addEventListener('click', r, !1);
    }
  }
  const Ir = [];
  let Dr,
    Nr = !1;
  const Pr = 'hap-prompt-toast';
  const Fr = {
    push: function(e, t) {
      (t = 0 === t ? 1.5 : 2.5), Ir.push({ msg: e, duration: t }), this.show();
    },
    show: function() {
      const e = this;
      if (Nr) return;
      Nr = !0;
      const t = Ir.shift();
      var n, i;
      (n = t),
        (i = function() {
          (Nr = !1),
            Ir.length
              ? e.show()
              : (function(e) {
                  const t = function() {
                    Dr.removeEventListener('transitionend', t),
                      Dr.removeEventListener('webkitTransitionEnd', t),
                      e && e();
                  };
                  Dr &&
                    (Dr.addEventListener('transitionend', t),
                    Dr.addEventListener('webkitTransitionEnd', t),
                    (Dr.style.opacity = 0));
                })(function() {
                  Nr || (Dr && Dr.parentNode.removeChild(Dr), (Dr = null));
                });
        }),
        Dr ||
          (((Dr = document.createElement('div')).style.cssText =
            'position: fixed;bottom: 2rem;left: 50%;padding: 10px;transform: translate(-50%, -2rem);color: #fff;background-color: #555;transition: opacity .4s ease-out;font-size: 28px;'),
          Dr.classList.add(Pr),
          document.body.appendChild(Dr)),
        (Dr.textContent = n.msg),
        (Dr.style.opacity = 0.8),
        setTimeout(function() {
          i && i();
        }, 1e3 * n.duration);
    }
  };
  var Rr = {
    module: {
      showToast(e) {
        e.message ||
          console.warn('[h5-render] prompt.showToast message 是必填项');
        let t = 0;
        return (
          e.duration && (t = parseInt(e.duration)),
          Fr.push(e.message, t),
          'success'
        );
      },
      showDialog(e) {
        (e.type = 'dialog'), new Lr(e);
      },
      showContextMenu(e) {
        e.itemList && Array.isArray(e.itemList) && new Lr(e);
      }
    },
    config: {
      name: 'system.prompt',
      methods: [
        { name: 'showToast', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC },
        { name: 'showDialog', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        {
          name: 'showContextMenu',
          type: mr.TYPE.METHOD,
          mode: mr.MODE.CALLBACK
        }
      ]
    }
  };
  var Br = {
    module: {
      get(e = {}) {
        const t = global.localStorage.getItem(e.key);
        setTimeout(() => {
          e.success(t || e.default || '');
        }, 0);
      },
      set(e = {}) {
        '' === e.value
          ? global.localStorage.removeItem(e.key)
          : global.localStorage.setItem(
              e.key,
              'string' == typeof e.value ? e.value : JSON.stringify(e.value)
            ),
          e.success({});
      },
      clear(e = {}) {
        global.localStorage.clear(), e.success({});
      },
      delete(e = {}) {
        global.localStorage.removeItem(e.key), e.success({});
      }
    },
    config: {
      name: 'system.storage',
      methods: [
        { name: 'get', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'set', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'clear', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'delete', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }
      ]
    }
  };
  const jr = {
    name: 'system.network',
    methods: [
      { name: 'getType', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'subscribe', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'unsubscribe', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }
    ]
  };
  var $r = {
    module: {
      getType(e = {}) {
        const t = { metered: !1, type: 'wifi' };
        (t.type = navigator.connection && navigator.connection.effectiveType),
          (t.metered = 'wifi' !== t.type),
          e.success(t);
      },
      subscribe(e = {}) {
        mr.polyfillPrompt(jr.name, 'subscribe', e);
        const t = navigator.connection;
        t
          ? ((t.onchange = t => {
              e.success({ metered: !1, type: 'wifi' });
            }),
            setTimeout(() => {
              this.getType(e);
            }, 100))
          : e.fail('error');
      },
      unsubscribe(e = {}) {
        mr.polyfillPrompt(jr.name, 'unsubscribe', e);
        const t = navigator.connection;
        return t && (t.onchange = null), 'success';
      }
    },
    config: jr
  };
  const zr = {
    name: 'system.app',
    methods: [{ name: 'getInfo', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }]
  };
  var Hr = {
    module: {
      getInfo() {
        mr.polyfillPrompt(zr.name, 'getInfo');
        const e = global.manifest;
        return e
          ? {
              name: e.name,
              versionName: e.versionName,
              versionCode: e.versionCode,
              logLevel: e.config && e.config.logLevel,
              source: {
                packageName: e.package,
                type: 'shortcut',
                extra: { scene: 'web', original: '' }
              },
              icon: e.icon
            }
          : {};
      }
    },
    config: zr
  };
  const Yr = {
    name: 'system.share',
    methods: [{ name: 'share', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }]
  };
  var Wr = {
    module: {
      share(e = {}) {
        mr.polyfillPrompt(Yr.name, 'share', e), e.success({});
      }
    },
    config: Yr
  };
  const Ur = {
    name: 'system.barcode',
    methods: [{ name: 'scan', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }]
  };
  var Vr = {
    module: {
      scan(e = {}) {
        mr.polyfillPrompt(Ur.name, 'scan', e),
          e.success({ result: 'https://doc.quickapp.cn' });
      }
    },
    config: Ur
  };
  var Gr = {
    module: {
      set(e = {}) {
        mr.polyfillPrompt('system.clipboard', 'set', e), e.success({});
      },
      get(e = {}) {
        mr.polyfillPrompt('system.clipboard', 'get', e), e.success({});
      }
    },
    config: {
      name: 'system.clipboard',
      methods: [
        { name: 'set', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'get', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }
      ]
    }
  };
  const Jr = {
    name: 'system.image',
    methods: [
      { name: 'getImageInfo', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'compressImage', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'applyOperations', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'editImage', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'compress', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'getInfo', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'edit', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }
    ]
  };
  var Zr = {
    module: {
      getImageInfo(e = {}) {
        mr.polyfillPrompt(Jr.name, 'getImageInfo', e), e.success({});
      },
      compressImage(e = {}) {
        mr.polyfillPrompt(Jr.name, 'compressImage', e), e.success({});
      },
      applyOperations(e = {}) {
        mr.polyfillPrompt(Jr.name, 'applyOperations', e), e.success({});
      },
      editImage(e = {}) {
        mr.polyfillPrompt(Jr.name, 'editImage', e), e.success({});
      }
    },
    config: Jr
  };
  let qr = 1;
  const Kr = [],
    Qr = {},
    Xr = 'internal://mass/download/',
    es = ['POST', 'PUT'],
    ts = {
      name: 'system.request',
      methods: [
        { name: 'upload', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'download', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        {
          name: 'onDownloadComplete',
          type: mr.TYPE.METHOD,
          mode: mr.MODE.CALLBACK
        }
      ]
    };
  class ns {
    constructor(e) {
      const t = e.filename || this.getFileName(e.url);
      return this.getBlob(e).then(e => this.saveAs(e, t));
    }
    getFileName(e) {
      const t = e.split('/');
      return t[t.length - 1];
    }
    saveAs(e, t) {
      const n = Xr + t;
      if (window.navigator.msSaveOrOpenBlob) navigator.msSaveBlob(e, t);
      else {
        const n = document.createElement('a'),
          i = document.querySelector('body');
        (n.href = window.URL.createObjectURL(e)),
          (n.download = t),
          (n.style.display = 'none'),
          i.appendChild(n),
          n.click(),
          i.removeChild(n),
          window.URL.revokeObjectURL(n.href);
      }
      return (Kr[qr] = { uri: n, blob: e }), (Qr[n] = e), qr++;
    }
    getBlob(e) {
      return new Promise(t => {
        const n = new XMLHttpRequest(),
          i = e.url,
          o = e.header;
        o &&
          Object.keys(o).forEach(e => {
            'useragent' !== e.toLowerCase() && n.setRequestHeader(e, o[e]);
          }),
          n.open('GET', i, !0),
          (n.responseType = 'blob'),
          (n.onload = () => {
            200 === n.status && t(n.response);
          }),
          n.send();
      });
    }
  }
  class is {
    constructor(e) {
      const t = { headers: {} };
      t.method = this.getUploadMethod(e.method);
      const n = e.data,
        i = e.header,
        o = e.files;
      if (!(Array.isArray(o) && o.length > 0))
        return mr.errorTip('request.upload', 'files'), Promise.reject();
      const r = new FormData();
      return (
        o.forEach(e => {
          const t = e.name || 'file',
            n = Qr[e.uri];
          r.append(t, n, e.filename);
        }),
        Array.isArray(n) &&
          n.length > 0 &&
          n.forEach(e => {
            r.append(e.name, e.value);
          }),
        i &&
          Object.keys(i).forEach(e => {
            const n = e.toLowerCase();
            'useragent' !== n && 'content-type' !== n && (t.header.item = i[e]);
          }),
        (t.body = r),
        this.upload(e.url, t)
      );
    }
    getUploadMethod(e) {
      if (!e) return 'POST';
      const t = es.indexOf(e.toUpperCase());
      return t > -1
        ? es[t]
        : (mr.errorTip(
            'request.upload',
            'medhod',
            `method仅支持-- ${JSON.stringify(es)}`
          ),
          'POST');
    }
    upload(e, t) {
      return fetch(e, t);
    }
  }
  var os = {
    module: {
      upload(e = {}) {
        let t, n;
        mr.polyfillPrompt(ts.name, 'upload', e),
          new is(e)
            .then(e => ((n = e.headers), (t = e.status), e.text()))
            .then(i => {
              e.success && e.success({ code: t, headers: n, data: i });
            })
            .catch(() => {
              e.fail && e.fail('upload fail', 1e3);
            })
            .finally(() => {
              e.complete && e.complete();
            });
      },
      download(e = {}) {
        mr.polyfillPrompt(ts.name, 'download', e),
          new ns(e)
            .then(t => {
              e.success && e.success({ token: t });
            })
            .catch(() => {
              e.fail && e.fail('download fail', 1e3);
            })
            .finally(() => {
              e.complete && e.complete();
            });
      },
      onDownloadComplete(e = {}) {
        mr.polyfillPrompt(ts.name, 'onDownloadComplete', e);
        const t = e.token;
        if (t) {
          const n = Kr[t];
          n
            ? e.success && e.success({ uri: n.uri })
            : mr.errorTip('request.onDownloadComplete', 'token', 'token 无效');
        } else e.fail('token is null', 202);
      }
    },
    config: ts
  };
  const rs = {
    name: 'system.media',
    methods: [
      { name: 'takePhoto', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'takeVideo', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'pickImage', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'pickVideo', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'pickFile', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      {
        name: 'saveToPhotosAlbum',
        type: mr.TYPE.METHOD,
        mode: mr.MODE.CALLBACK
      }
    ]
  };
  var ss = {
    module: {
      takePhoto(e = {}) {
        mr.polyfillPrompt(rs.name, 'takePhoto', e), e.success({});
      },
      takeVideo(e = {}) {
        mr.polyfillPrompt(rs.name, 'takeVideo', e), e.success({});
      },
      pickImage(e = {}) {
        mr.polyfillPrompt(rs.name, 'pickImage', e), e.success({});
      },
      pickVideo(e = {}) {
        mr.polyfillPrompt(rs.name, 'pickVideo', e), e.success({});
      },
      pickFile(e = {}) {
        mr.polyfillPrompt(rs.name, 'pickFile', e), e.success({});
      },
      saveToPhotosAlbum(e = {}) {
        mr.polyfillPrompt(rs.name, 'saveToPhotosAlbum', e), e.success({});
      }
    },
    config: rs
  };
  const as = {
    name: 'system.device',
    methods: [
      { name: 'getInfo', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'getId', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'getDeviceId', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'getUserId', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      {
        name: 'getAdvertisingId',
        type: mr.TYPE.METHOD,
        mode: mr.MODE.CALLBACK
      },
      { name: 'getTotalStorage', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      {
        name: 'getAvailableStorage',
        type: mr.TYPE.METHOD,
        mode: mr.MODE.CALLBACK
      },
      { name: 'getCpuInfo', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      {
        name: '__getPlatform',
        mode: mr.MODE.SYNC,
        type: mr.TYPE.ATTRIBUTE,
        access: mr.ACCESS.READ,
        alias: 'platform'
      }
    ]
  };
  var ls = {
    module: {
      getInfo(e = {}) {
        mr.polyfillPrompt(as.name, 'getInfo', e);
        const t = {
          brand: 'vivo',
          manufacturer: 'vivo',
          model: 'X23',
          product: 'X23',
          osType: 'android',
          osVersionName: '',
          osVersionCode: '0',
          platformVersionName: '',
          platformVersionCode: '0',
          language: 'en',
          region: 'china',
          screenWidth: window.outerWidth,
          screenHeight: window.outerHeight,
          windowWidth: document.body.clientWidth,
          windowHeight: document.body.clientHeight,
          statusBarHeight: 120
        };
        e.success(t);
      },
      getId(e = {}) {
        mr.polyfillPrompt('system.device', 'getId', e);
        const t = e.type,
          n = {};
        t &&
          Array.isArray(t) &&
          t.forEach(e => {
            switch (e) {
              case 'device':
                n.device = '283258220100012';
                break;
              case 'mac':
                n.mac = '02:00:00:00:00:21:21';
                break;
              case 'user':
                n.user = '36cecec57756f3d27';
                break;
              case 'advertising':
                n.advertising = '91ce1536-8953-4be9-864a-7ac53481ff97';
            }
          }),
          e.success(n);
      },
      getDeviceId(e = {}) {
        mr.polyfillPrompt('system.device', 'getDeviceId', e),
          e.success({ deviceId: '283258220100012' });
      },
      getUserId(e = {}) {
        mr.polyfillPrompt('system.device', 'getUserId', e),
          e.success({ userId: '36cecec57756f3d27' });
      },
      getAdvertisingId(e = {}) {
        mr.polyfillPrompt('system.device', 'getAdvertisingId', e);
        e.success({ advertisingId: '91ce1536-8953-4be9-864a-7ac53481ff97' });
      },
      getTotalStorage(e = {}) {
        mr.polyfillPrompt('system.device', 'getTotalStorage', e),
          e.success({ totalStorage: '54496026624' });
      },
      getAvailableStorage(e = {}) {
        mr.polyfillPrompt('system.device', 'getAvailableStorage', e),
          e.success({ availableStorage: '2471679595904' });
      },
      getCpuInfo(e = {}) {
        mr.polyfillPrompt('system.device', 'getCpuInfo', e),
          e.success({ cpuIf: 'Processor: AArch64' });
      },
      __getPlatform: () => ({
        versionName: global.manifest && global.manifest.versionName,
        versionCode: global.manifest && global.manifest.versionCode
      })
    },
    config: as
  };
  const cs = {
      name: 'system.geolocation',
      methods: [
        { name: 'getLocation', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        {
          name: 'getLocationType',
          type: mr.TYPE.METHOD,
          mode: mr.MODE.CALLBACK
        },
        { name: 'subscribe', type: mr.TYPE.METHOD, mode: mr.MODE.SUBSCRIBE },
        { name: 'unsubscribe', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }
      ]
    },
    ds = { PERMISSION_DENIED: 201, POSITION_UNAVAILABLE: 204, TIMEOUT: 1e3 };
  var hs = {
    module: {
      _watchId: void 0,
      getLocation(e = {}) {
        'geolocation' in navigator
          ? navigator.geolocation.getCurrentPosition(
              t => {
                e.success({
                  longitude: t.coords.longitude,
                  latitude: t.coords.latitude
                });
              },
              t => {
                e.fail(t.message, ds[t.code] || 204);
              },
              { timeout: e.timeout || 3e4 }
            )
          : e.fail('浏览器不支持定位', 1e3);
      },
      getLocationType(e = {}) {
        mr.polyfillPrompt(cs.name, 'getLocationType', e),
          e.success({ types: ['gps', 'network'] });
      },
      subscribe(e = {}) {
        'geolocation' in navigator
          ? (this._watchId && navigator.geolocation.clearWatch(this._watchId),
            (this._watchId = navigator.geolocation.watchPosition(
              t => {
                e.callback({
                  longitude: t.coords.longitude,
                  latitude: t.coords.latitude
                });
              },
              t => {
                e.fail(t.message, ds[t.code] || 204);
              }
            )))
          : e.fail('浏览器不支持定位', 1e3);
      },
      unsubscribe() {
        return (
          this._watchId &&
            (navigator.geolocation.clearWatch(this._watchId),
            (this._watchId = void 0)),
          'success'
        );
      }
    },
    config: cs
  };
  var ps = {
    module: {},
    config: {
      name: 'system.file',
      methods: [
        { name: 'move', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'copy', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'list', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'get', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'delete', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'writeText', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'readText', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        {
          name: 'writeArrayBuffer',
          type: mr.TYPE.METHOD,
          normalize: mr.NORMALIZE.RAW,
          mode: mr.MODE.CALLBACK
        },
        {
          name: 'readArrayBuffer',
          type: mr.TYPE.METHOD,
          mode: mr.MODE.CALLBACK
        }
      ]
    }
  };
  var us = {
    module: {},
    config: {
      name: 'system.wifi',
      methods: [
        { name: 'connect', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'scan', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        {
          name: 'getConnectedWifi',
          type: mr.TYPE.METHOD,
          mode: mr.MODE.CALLBACK
        },
        {
          name: '__onscanned',
          type: mr.TYPE.EVENT,
          mode: mr.MODE.CALLBACK,
          alias: 'onscanned'
        },
        {
          name: '__onstatechanged',
          type: mr.TYPE.EVENT,
          mode: mr.MODE.CALLBACK,
          alias: 'onstatechanged'
        }
      ]
    }
  };
  var fs = {
    module: { __ontimeupdate(e) {} },
    config: {
      name: 'system.audio',
      methods: [
        { name: 'play', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'pause', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'stop', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        {
          name: '__getSrc',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.READ,
          alias: 'src'
        },
        {
          name: '__setSrc',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.WRITE,
          alias: 'src'
        },
        {
          name: '__getAutoplay',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.READ,
          alias: 'autoplay'
        },
        {
          name: '__setAutoplay',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.WRITE,
          alias: 'autoplay'
        },
        {
          name: '__getCurrentTime',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.READ,
          alias: 'currentTime'
        },
        {
          name: '__setCurrentTime',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.WRITE,
          alias: 'currentTime'
        },
        {
          name: '__getDuration',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.READ,
          alias: 'duration'
        },
        {
          name: '__getLoop',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.READ,
          alias: 'loop'
        },
        {
          name: '__setLoop',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.WRITE,
          alias: 'loop'
        },
        {
          name: '__getVolume',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.READ,
          alias: 'volume'
        },
        {
          name: '__setVolume',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.WRITE,
          alias: 'volume'
        },
        {
          name: '__getMuted',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.READ,
          alias: 'muted'
        },
        {
          name: '__setMuted',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.WRITE,
          alias: 'muted'
        },
        {
          name: '__getNotificationVisible',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.READ,
          alias: 'notificationVisible'
        },
        {
          name: '__setNotificationVisible',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.WRITE,
          alias: 'notificationVisible'
        },
        {
          name: '__onplay',
          type: mr.TYPE.EVENT,
          mode: mr.MODE.SUBSCRIBE,
          alias: 'onplay'
        },
        {
          name: '__onpause',
          type: mr.TYPE.EVENT,
          mode: mr.MODE.SUBSCRIBE,
          alias: 'onpause'
        },
        {
          name: '__onloadeddata',
          type: mr.TYPE.EVENT,
          mode: mr.MODE.SUBSCRIBE,
          alias: 'onloadeddata'
        },
        {
          name: '__onended',
          type: mr.TYPE.EVENT,
          mode: mr.MODE.SUBSCRIBE,
          alias: 'onended'
        },
        {
          name: '__ondurationchange',
          type: mr.TYPE.EVENT,
          mode: mr.MODE.SUBSCRIBE,
          alias: 'ondurationchange'
        },
        {
          name: '__onerror',
          type: mr.TYPE.EVENT,
          mode: mr.MODE.SUBSCRIBE,
          alias: 'onerror'
        },
        {
          name: '__ontimeupdate',
          type: mr.TYPE.EVENT,
          mode: mr.MODE.SUBSCRIBE,
          alias: 'ontimeupdate'
        },
        {
          name: '__onstop',
          type: mr.TYPE.EVENT,
          mode: mr.MODE.SUBSCRIBE,
          alias: 'onstop'
        },
        {
          name: '__getStreamType',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.READ,
          alias: 'streamType'
        },
        {
          name: '__setStreamType',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.WRITE,
          alias: 'streamType'
        }
      ]
    }
  };
  var ms = {
    module: {},
    config: {
      name: 'system.battery',
      methods: [
        { name: 'getStatus', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }
      ]
    }
  };
  var gs = {
    module: {},
    config: {
      name: 'system.brightness',
      methods: [
        { name: 'getValue', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'setValue', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'getMode', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'setMode', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }
      ]
    }
  };
  var ys = {
    module: {},
    config: {
      name: 'system.calendar',
      methods: [
        { name: 'insert', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }
      ]
    }
  };
  var bs = {
    module: {},
    config: {
      name: 'system.cipher',
      methods: [{ name: 'rsa', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }]
    }
  };
  var vs = {
    module: {},
    config: {
      name: 'system.contact',
      methods: [{ name: 'pick', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }]
    }
  };
  var Es = {
    module: {},
    config: {
      name: 'system.notification',
      methods: [{ name: 'show', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }]
    }
  };
  var ws = {
    module: {},
    config: {
      name: 'system.package',
      methods: [
        { name: 'hasInstalled', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'install', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }
      ]
    }
  };
  var ks = {
    module: {},
    config: {
      name: 'system.record',
      methods: [
        { name: 'start', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'stop', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }
      ]
    }
  };
  var xs = {
    module: {},
    config: {
      name: 'system.sensor',
      methods: [
        {
          name: 'subscribeAccelerometer',
          type: mr.TYPE.METHOD,
          mode: mr.MODE.SUBSCRIBE
        },
        {
          name: 'unsubscribeAccelerometer',
          type: mr.TYPE.METHOD,
          mode: mr.MODE.SYNC
        },
        {
          name: 'subscribeCompass',
          type: mr.TYPE.METHOD,
          mode: mr.MODE.SUBSCRIBE
        },
        {
          name: 'unsubscribeCompass',
          type: mr.TYPE.METHOD,
          mode: mr.MODE.SYNC
        },
        {
          name: 'subscribeProximity',
          type: mr.TYPE.METHOD,
          mode: mr.MODE.SUBSCRIBE
        },
        {
          name: 'unsubscribeProximity',
          type: mr.TYPE.METHOD,
          mode: mr.MODE.SYNC
        },
        {
          name: 'subscribeLight',
          type: mr.TYPE.METHOD,
          mode: mr.MODE.SUBSCRIBE
        },
        { name: 'unsubscribeLight', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }
      ]
    }
  };
  var _s = {
    module: {},
    config: {
      name: 'system.shortcut',
      methods: [
        { name: 'install', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'hasInstalled', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        {
          name: '__getSystemPromptEnabled',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.READ,
          alias: 'systemPromptEnabled'
        },
        {
          name: '__setSystemPromptEnabled',
          type: mr.TYPE.ATTRIBUTE,
          mode: mr.MODE.SYNC,
          access: mr.ACCESS.WRITE,
          alias: 'systemPromptEnabled'
        }
      ]
    }
  };
  var As = {
    module: {},
    config: {
      name: 'system.sms',
      methods: [{ name: 'send', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }]
    }
  };
  var Cs = {
    module: {},
    config: {
      name: 'system.vibrator',
      methods: [{ name: 'vibrate', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }]
    }
  };
  class Ts {
    constructor(e, t = ['protocol']) {
      const n = new WebSocket(e);
      this._init(n), (this.instance = n);
    }
    _init(e) {
      (e.onopen = () => {
        this.onopen();
      }),
        (e.onmessage = e => {
          this.onmessage(e);
        }),
        (e.onclose = () => {
          this.onclose({ code: 0, reason: '', wasClean: !0 });
        }),
        (e.onerror = e => {
          console.log(e.data), this.onerror(e.data);
        });
    }
    send(e) {
      this.instance.send(e.data), e.success && e.success();
    }
    close(e) {
      this.instance.close(e.code, e.reason), e.success && e.success();
    }
    onopen() {}
    onmessage() {}
    onclose() {}
    onerror() {}
  }
  Object.defineProperty(Ts.prototype, 'send', {
    writable: !1,
    configurable: !1
  }),
    Object.defineProperty(Ts.prototype, 'close', {
      writable: !1,
      configurable: !1
    });
  var Ss = {
    module: {
      create: (e = {}) => (
        mr.polyfillPrompt('system.websocketfactory', 'create', e),
        e.header &&
          console.warn(
            '[h5-render] system.websocketfactory => create: 预览不支持设置header属性，你设置的header属性不会生效，请使用真机调试'
          ),
        e.protocols &&
          console.warn(
            '[h5-render] system.websocketfactory => create: 预览不支持设置protocols属性，你设置的protocols属性不会生效，请使用真机调试'
          ),
        new Ts(e.url, e.protocols)
      )
    },
    config: {
      name: 'system.websocketfactory',
      methods: [{ name: 'create', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }]
    }
  };
  var Ms = {
    module: {
      loadUrl: e => (
        Cr.push({
          uri: e.url,
          allowthirdpartycookies: e.allowthirdpartycookies
        }),
        'success'
      )
    },
    config: {
      name: 'system.webview',
      methods: [{ name: 'loadUrl', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }]
    }
  };
  var Os = {
    module: {},
    config: {
      name: 'service.account',
      methods: [
        { name: 'getProvider', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'authorize', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'getProfile', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }
      ]
    }
  };
  var Ls = {
    module: {},
    config: {
      name: 'service.alipay',
      methods: [
        { name: 'pay', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'getVersion', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'getType', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }
      ]
    }
  };
  var Is = {
    module: {},
    config: {
      name: 'service.pay',
      methods: [
        { name: 'pay', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
        { name: 'getProvider', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }
      ]
    }
  };
  const Ds = {
    name: 'service.push',
    methods: [
      { name: 'getProvider', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC },
      { name: 'subscribe', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'unsubscribe', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
      { name: 'on', type: mr.TYPE.METHOD, mode: mr.MODE.SUBSCRIBE },
      { name: 'off', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }
    ]
  };
  const Ns = [
      Tr,
      Sr,
      Rr,
      Br,
      $r,
      Hr,
      Wr,
      Vr,
      Gr,
      Zr,
      os,
      ss,
      ls,
      hs,
      ps,
      us,
      Ms,
      Es,
      fs,
      ms,
      gs,
      ys,
      bs,
      vs,
      Es,
      ws,
      ks,
      xs,
      _s,
      As,
      Cs,
      Ss,
      Ms,
      Os,
      Ls,
      Is,
      {
        module: {
          getProvider(e = {}) {
            mr.polyfillPrompt(Ds.name, 'getProvider', e), e.success({});
          },
          subscribe(e = {}) {
            mr.polyfillPrompt(Ds.name, 'subscribe', e),
              e.success({ regId: 'test_id' });
          },
          unsubscribe(e = {}) {
            mr.polyfillPrompt(Ds.name, 'unsubscribe', e), e.success({});
          },
          on(e = {}) {
            mr.polyfillPrompt(Ds.name, 'on', e), e.success({});
          },
          off(e = {}) {
            mr.polyfillPrompt(Ds.name, 'off', e), e.success({});
          }
        },
        config: Ds
      },
      {
        module: {},
        config: {
          name: 'service.qqaccount',
          methods: [
            { name: 'getType', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC },
            { name: 'authorize', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }
          ]
        }
      },
      {
        module: {},
        config: {
          name: 'service.share',
          methods: [
            { name: 'share', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
            {
              name: 'getProvider',
              type: mr.TYPE.METHOD,
              mode: mr.MODE.CALLBACK
            },
            {
              name: 'getAvailablePlatforms',
              type: mr.TYPE.METHOD,
              mode: mr.MODE.CALLBACK
            }
          ]
        }
      },
      {
        module: {},
        config: {
          name: 'service.stats',
          methods: [
            { name: 'getProvider', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC },
            {
              name: 'recordCountEvent',
              type: mr.TYPE.METHOD,
              mode: mr.MODE.CALLBACK
            },
            {
              name: 'recordCalculateEvent',
              type: mr.TYPE.METHOD,
              mode: mr.MODE.CALLBACK
            }
          ]
        }
      },
      {
        module: {},
        config: {
          name: 'service.wbaccount',
          methods: [
            { name: 'getType', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC },
            { name: 'authorize', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }
          ]
        }
      },
      {
        module: {},
        config: {
          name: 'service.wxaccount',
          methods: [
            { name: 'authorize', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
            { name: 'getType', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }
          ]
        }
      },
      {
        module: {},
        config: {
          name: 'service.wxpay',
          methods: [
            { name: 'pay', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK },
            { name: 'getType', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC }
          ]
        }
      },
      {
        module: {},
        config: {
          name: 'service.iot',
          methods: [
            { name: 'getProvider', type: mr.TYPE.METHOD, mode: mr.MODE.SYNC },
            { name: 'send', type: mr.TYPE.METHOD, mode: mr.MODE.CALLBACK }
          ]
        }
      }
    ],
    Ps = [],
    Fs = {};
  for (let e = 0; e < Ns.length; e++)
    Ps.push(Ns[e].config), (Fs[Ns[e].config.name] = Rs(Ns[e]));
  function Rs(e) {
    const t = e.module;
    if ('object' == typeof t) {
      const n = {
          apply: function(e, t, n) {
            'object' == typeof n[0] &&
              n[1] &&
              '-1' !== n[1] &&
              ((n[0].callback = n[0].success = e => {
                mr.callbackSuccess(n[1], e);
              }),
              (n[0].fail = (e, t) => {
                mr.callbackFail(n[1], e, t);
              }),
              (n[0].cancel = e => {
                mr.callbackCancel(n[1], e);
              }));
            const i = e.apply(t, n);
            return i ? mr.syncResult(i) : void 0;
          }
        },
        i = e.config.methods;
      Array.isArray(i) &&
        i.forEach(e => {
          const i = e.name;
          if ('function' == typeof t[i]) {
            const e = t[i];
            t[i] = new Proxy(e, n);
          }
        });
    }
    return new Proxy(t, {
      get: function(t, n, i) {
        if (n in t) return t[n];
        {
          const t = e.config.name;
          return (...e) => {
            console.warn(
              `### Web Render ### ${t} => ${n}:${JSON.stringify(e[0]) ||
                ''}\n==暂时不支持该接口，请使用真机调试体验完整功能==`
            );
          };
        }
      }
    });
  }
  function Bs(e, t, n, i, o) {
    return zs(e, { component: o.component, ref: t, method: n, args: i });
  }
  function js(e, t, n, i, o) {
    return zs(e, { module: t, method: n, args: i });
  }
  function $s(e, t, n) {
    let i = [],
      o = [];
    if ('string' == typeof t)
      try {
        i = JSON.parse(t);
      } catch (e) {
        console.error('invalid tasks:', t);
      }
    else wi(t) && (i = t);
    const r = i.length;
    if (((i[r - 1].callbackId = n || 0 === n ? n : -1), 1 === r))
      o = zs(e, i[0]);
    else for (let t = 0; t < r; t++) o.push(zs(e, i[t]));
    return o;
  }
  function zs(e, t) {
    return void 0 === t.module
      ? (function(e, t) {
          const n = t.component,
            i = t.ref,
            o = t.method,
            r = t.args || t.arguments || [],
            s = global.hap
              .getInstance(e)
              .getComponentManager()
              .getComponent(i);
          if (!s)
            return console.error(
              `[h5-render] component of ref ${i} doesn't exist.`
            );
          let a;
          if (!(a = s[o]))
            return console.error(
              `[h5-render] component ${n} doesn't have a method named ${o}.`
            );
          return (
            r.push(function(t, n) {
              (!t && 0 !== t && '0' !== t) ||
                '-1' === t ||
                -1 === t ||
                (function(e, t, n) {
                  ur.getSender(e).performCallback(t, n);
                })(e, t, n);
            }),
            a.apply(s, r)
          );
        })(e, t)
      : (function(e, t) {
          const n = t.module,
            i = t.method;
          let o, r;
          const s = t.args || t.arguments || [];
          if (!(o = cr.apiModule[n])) return;
          if (!(r = o[i])) return;
          return r.apply(global.hap.getInstance(e), s);
        })(e, t);
  }
  function Hs() {
    if (dr.debug) {
      if (arguments[0].match(/^perf/))
        return void console.info.apply(console, arguments);
      console.debug.apply(console, arguments);
    }
  }
  var Ys = function() {
    (global.callNative = $s),
      (global.callNativeComponent = Bs),
      (global.callNativeModule = js),
      (global.nativeLog = Hs),
      (global.JsBridge = global.ModuleManager = {
        invoke(e, t, n, i, o) {
          if (('string' == typeof n && (n = JSON.parse(n)), Fs[e] && Fs[e][t]))
            return Fs[e][t](n, i, o);
          throw new Error(`ERROR: Unknown moduleName:${e}, methodName:${t}`);
        }
      });
  };
  const Ws = ['flex', 'opacity', 'zIndex', 'fontWeight'];
  function Us(e) {
    return -1 !== Ws.indexOf(e)
      ? {}
      : {
          number: function(e) {
            return e;
          },
          string: function(t) {
            const n = t.match(/^([+-]?\d.*)+([p,w]x)$/);
            if (n && 3 === n.length) {
              if ('px' === n[2]) return parseFloat(n[1]) + 'px';
              if ('wx' === n[2])
                return (
                  parseFloat(n[1]) * global.HapEnvironment.devicePixelRatio +
                  'px'
                );
            }
            if (e.match(/transform/))
              try {
                const e = JSON.parse(t);
                let n = '';
                for (const t in e) n += t + '(' + e[t] + ')';
                return n;
              } catch (e) {
                return t;
              }
            if (e.match(/transform/) && t.match(/translate/)) {
              let e = t.replace(/\d*\.?\d+px/g, function(e) {
                return parseInt(parseFloat(e)) + 'px';
              });
              return (
                e.match(/wx/) &&
                  (e = e.replace(/\d*\.?\d+wx/g, function(e) {
                    return (
                      parseInt(parseFloat(e)) *
                        global.HapEnvironment.devicePixelRatio +
                      'px'
                    );
                  })),
                e
              );
            }
            return (
              e.match(/^border$/) &&
                t.match(/^\d+(?:[w,p]x)?\s+/) &&
                (t = t.replace(/^(\d+(?:[w,p]x)?)/, function(e, n) {
                  return (
                    parseFloat(n) *
                      (t.match(/^\d+(?:wx)+/)
                        ? global.HapEnvironment.devicePixelRatio
                        : 1) +
                    'px'
                  );
                })),
              t
            );
          }
        };
  }
  const Vs = new Set([
      'flexDirection',
      'flexWrap',
      'justifyContent',
      'alignItems',
      'alignContent',
      'columnSpan'
    ]),
    Gs = new Set([
      'lines',
      'color',
      'fontSize',
      'fontStyle',
      'fontWeight',
      'fontFamily',
      'fontFamilyDesc',
      'textDecoration',
      'textAlign',
      'textIndent',
      'lineHeight',
      'textOverflow'
    ]),
    Js = {
      general: new Set([
        'width',
        'height',
        'padding',
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'margin',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'border',
        'borderStyle',
        'borderWidth',
        'borderLeftWidth',
        'borderTopWidth',
        'borderRightWidth',
        'borderBottomWidth',
        'borderColor',
        'borderLeftColor',
        'borderTopColor',
        'borderRightColor',
        'borderBottomColor',
        'borderRadius',
        'borderBottomLeftRadius',
        'borderBottomRightRadiush',
        'borderTopLeftRadius',
        'borderTopRightRadius',
        'background',
        'backgroundColor',
        'backgroundImage',
        'backgroundSize',
        'backgroundRepeat',
        'backgroundPosition',
        'opacity',
        'display',
        'visibility',
        'objectFit',
        'flex',
        'flexGrow',
        'flexShrink',
        'flexBasis',
        'alignSelf',
        'position',
        'top',
        'bottom',
        'left',
        'right',
        'zIndex',
        'transform',
        'transformOrigin',
        'animationName',
        'animationDuration',
        'animationTimingFunction',
        'animationDelay',
        'animationIterationCount',
        'animationFillMode',
        'animationKeyframes'
      ]),
      div: Vs,
      stack: Vs,
      richtext: Vs,
      list: new Set(['flexDirection', 'columns']),
      'list-item': Vs,
      popup: new Set(['maskColor']),
      refresh: new Set([
        'backgroundColor',
        'progressColor',
        'flexDirection',
        'flexWrap',
        'justifyContent',
        'alignItems',
        'alignContent'
      ]),
      swiper: new Set([
        'indicatorColor',
        'indicatorSelectedColor',
        'indicatorSize',
        'indicatorTop',
        'indicatorRight',
        'indicatorBottom',
        'indicatorLeft'
      ]),
      image: new Set(['resizeMode', 'objectFit']),
      progress: new Set(['color', 'strokeWidth']),
      rating: new Set(['starBackground', 'starForeground', 'starSecondary']),
      span: new Set([
        'color',
        'fontSize',
        'fontStyle',
        'fontWeight',
        'fontFamily',
        'fontFamilyDesc',
        'textDecoration'
      ]),
      a: Gs,
      text: Gs,
      label: Gs,
      select: Gs,
      option: Gs,
      input: new Set(['color', 'fontSize', 'placeholderColor']),
      slider: new Set(['color', 'selectedColor']),
      textarea: new Set(['color', 'fontSize', 'placeholderColor']),
      video: new Set(['objectFit']),
      map: new Set([
        'mylocation',
        'mylocationFillColor',
        'mylocationStrokeColor',
        'mylocationIconPath'
      ])
    };
  var Zs = {
    validate: function(e, t) {
      const n = Js[e];
      return !!(Js.general.has(t) || (n && n.has(t)));
    }
  };
  let qs = 0;
  function Ks() {
    return '' + qs++;
  }
  var Qs = Object.freeze({
    create: function(e) {
      return document.createElement(e || 'div');
    },
    createChildren: function() {
      const e = this.data.children,
        t = this.data.ref,
        n = this.getComponentManager();
      if (e && e.length) {
        const i = document.createDocumentFragment();
        let o = !1;
        for (let r = 0; r < e.length; r++) {
          (e[r].props = this.data.props),
            (e[r].instanceId = this.data.instanceId);
          const s = n.createElement(e[r]);
          i.appendChild(s.node),
            (s.parentRef = t),
            !o &&
              s.data.style &&
              s.data.style.hasOwnProperty('flex') &&
              (o = !0);
        }
        this.node.appendChild(i);
      }
    },
    appendChild: function(e) {
      const t = this.data.children,
        n = this.getComponentManager().createElement(e);
      return (
        this.node.appendChild(n.node),
        t && t.length ? t.push(e) : (this.data.children = [e]),
        n
      );
    },
    insertBefore: function(e, t) {
      const n = this.data.children;
      let i,
        o = 0,
        r = !1;
      if (n && n.length && t) {
        for (i = n.length; o < i && n[o].ref !== t.data.ref; o++);
        o === i && (r = !0);
      } else r = !0;
      r
        ? (this.node.appendChild(e.node), n.push(e.data))
        : (t.fixedPlaceholder
            ? this.node.insertBefore(e.node, t.fixedPlaceholder)
            : t.stickyPlaceholder
            ? this.node.insertBefore(e.node, t.stickyPlaceholder)
            : this.node.insertBefore(e.node, t.node),
          n.splice(o, 0, e.data));
    },
    removeChild: function(e) {
      const t = this.data.children;
      let n = 0;
      const i = this.getComponentManager();
      if (t && t.length) {
        let i;
        for (i = t.length; n < i && t[n].ref !== e.data.ref; n++);
        n < i && t.splice(n, 1);
      }
      i.removeComponent(e.data.ref),
        e.unsetPosition(),
        e.node.parentNode.removeChild(e.node);
    },
    updateAttrs: function(e) {
      this.node.attr || (this.node.attr = {});
      for (const t in e) {
        const n = e[t],
          i = this.attr[t],
          o = this.style[t];
        'function' == typeof i
          ? i.call(this, n)
          : 'function' == typeof o
          ? o.call(this, n)
          : ('boolean' == typeof n
              ? (this.node[t] = n)
              : 'class' === t && this.node.getAttribute('class')
              ? this.node.setAttribute(
                  'class',
                  this.node.getAttribute('class') + ' ' + n
                )
              : this.node.setAttribute(t, n),
            (this.node.attr[t] = n));
      }
    },
    updateStyle: function(e) {
      const t = {},
        n = {};
      for (const i in e) {
        let o = e[i];
        const r = /^([^:]+)((?::[^:]+)+)/,
          s = i.match(r);
        let a, l;
        if (
          (s ? ((a = s[1]), (l = s[2])) : ((a = i), (n[i] = o)),
          Zs.validate(this.data && this.data.type, a))
        ) {
          const e = Us(a)[typeof o];
          if (('function' == typeof e && (o = e(o)), !s)) {
            'function' == typeof this.style[a]
              ? this.style[a].call(this, o)
              : (this.node.style[a] = o);
            continue;
          }
          t[l] ? (t[l][a] = o) : (t[l] = { [a]: o });
        }
      }
      Object.keys(t).length > 0 &&
        (function(e, t, n) {
          let i = e.node.getAttribute('data-pseudo-id');
          function o(t, n) {
            return (
              ('function' == typeof e.style[t] && e.style[t].call(e, n)) || n
            );
          }
          function r(e, t) {
            const r = Object.keys(t)
                .map(e => `${Ti(e)}:${o(e, t[e])}!important;`)
                .join(''),
              s = Object.keys(t)
                .map(e => {
                  if (n[e]) return `${Ti(e)}:${o(e, n[e])}!important;`;
                })
                .join('');
            return s
              ? `[data-pseudo-id="${i}"]{${s}} ${e}{${r}}`
              : `${e}{${r}}`;
          }
          if (!i) {
            const n = `hap-stysheet-pseudo-id-${e.data.instanceId}`;
            let o = document.getElementById(n);
            o ||
              (((o = document.createElement('style')).id = n),
              (o.type = 'text/css'),
              document.getElementsByTagName('head')[0].appendChild(o)),
              (i = Ks()),
              e.node.setAttribute('data-pseudo-id', i);
            const s = Object.keys(t)
              .map(e => {
                const n = t[e];
                let o = r(`[data-pseudo-id="${i}"]${e}`, n);
                return (
                  /:|::(active|disabled)/.test(e) &&
                    (o = r(
                      `\n        [data-pseudo-id="${i}"]${e}, \n        ${e.replace(
                        /:|::/g,
                        '.hap-'
                      )}[data-pseudo-id="${i}"], \n        ${e.replace(
                        /:|::/g,
                        '.hap-'
                      )} [data-pseudo-id="${i}"]`,
                      n
                    )),
                  o
                );
              })
              .join('');
            return o.appendChild(document.createTextNode(s));
          }
          const s = Array.prototype.slice
            .call(document.styleSheets || [])
            .filter(e => e.ownerNode.getAttribute('data-pseudo-id') === i);
          if (!s || s.length <= 0) return;
          const a = s[0],
            l = a.cssRules || a.rules;
          Object.keys(t).forEach(e => {
            const n = t[e],
              o = `[data-pseudo-id="${i}"]${e}`,
              s = Array.prototype.slice
                .call(l)
                .reduce((e, t, n) => (t.selectorText === o && (e.idx = n), e), {
                  idx: -1
                }),
              { idx: c } = s;
            if (-1 !== c) {
              const e = l[c],
                t = e.cssText.match(/^[^{]+\{([^}]+)\}/);
              if (t && t[1]) {
                const e = t[1].split(';').reduce((e, t) => {
                  const n = t.match(/(\S+)\s*:\s*(\S+)/);
                  return n && n[1] && n[2] && (e[n[1]] = n[2]), e;
                }, {});
                S(e, n),
                  Object.keys(e).forEach(t => {
                    e[t] || delete e[t];
                  }),
                  a.deleteRule(c),
                  a.insertRule(r(o, e), l.length - 1);
              }
            } else a.insertRule(r(o, n), l.length);
          });
        })(this, t, n);
    },
    bindEvents: function(e) {
      const t = this,
        n = this.getHapInstance();
      e.map(function(e) {
        ('click' === e ||
          'longpress' === e ||
          'swipe' === e ||
          e.indexOf('touch') > -1) &&
          (t.node.style.pointerEvents = 'auto');
        const i = t.event[e] || {},
          o = i.setter;
        if (o) return void t.node.addEventListener(e, o);
        const r = n.sender,
          s = function(n) {
            if (n._alreadyTriggered) return;
            n._alreadyTriggered = !0;
            const o = S({}, n);
            (o._target = t.data),
              (o._touches = n.touches),
              (o._changedTouches = n.changedTouches),
              r.fireEvent(
                t.data.ref,
                e,
                {
                  extra: i.extra && i.extra.bind(t),
                  updator: i.updator && i.updator.bind(t)
                },
                o
              );
          };
        t.node.addEventListener(e, s, !1, !1);
        let a = t._listeners;
        a || ((a = t._listeners = {}), (t.node._listeners = {})),
          (a[e] = s),
          (t.node._listeners[e] = s);
      });
    },
    unbindEvents: function(e) {
      const t = this;
      e.map(function(e) {
        const n = this._listeners;
        n &&
          (t.node.removeEventListener(e, n),
          (t._listeners[e] = null),
          (t.node._listeners[e] = null));
      });
    }
  });
  const Xs = navigator.userAgent,
    ea = !!Xs.match(/Firefox/i),
    ta = !!Xs.match(/IEMobile/i),
    na = ea ? '-moz-' : ta ? '-ms-' : '-webkit-',
    ia = ea ? 'Moz' : ta ? 'ms' : 'webkit';
  function oa(e, t) {
    const n = e.component,
      i = e.element;
    if (
      ((t = t ? t + '' : e.prePosition),
      (i.style.position = t),
      (i.style.marginTop = e.preMarginTop || ''),
      (i.style.top = e.preTop || ''),
      i.classList.remove('hap-sticky'),
      n.stickyPlaceholder)
    ) {
      const e = n.stickyPlaceholder.parentNode;
      e.insertBefore(i, n.stickyPlaceholder),
        e.removeChild(n.stickyPlaceholder),
        (n.stickyPlaceholder = null);
    }
  }
  function ra(e, t) {
    (t = t || {}),
      (this.component = e),
      (this.element = e.node),
      (this.prePosition = this.element.style.position),
      (this.withinParent = t.withinParent || !1),
      (this.parent = null),
      this.init();
  }
  ra.prototype = {
    constructor: ra,
    init() {
      const e = this.element.style;
      (e[ia + 'Transform'] = 'translateZ(0)'),
        (e.transform = 'translateZ(0)'),
        (function(e) {
          if (!e instanceof ra) return;
          const t = e.component.getParentScroller();
          let n;
          t
            ? ((n = e.parent = t), (e.parentElement = n.node))
            : ((n = e.parent = e.component.getRootContainer()),
              (e.parentElement = n));
        })(this),
        this._simulateSticky(),
        this._bindResize();
    },
    _bindResize() {
      const e = this,
        t = /android/gi.test(navigator.appVersion),
        n = (e._resizeEvent =
          'onorientationchange' in window ? 'orientationchange' : 'resize'),
        i = (e._resizeHandler = function() {
          setTimeout(
            function() {
              e.refresh();
            },
            t ? 200 : 0
          );
        });
      window.addEventListener(n, i, !1);
    },
    refresh() {
      this._detach(), this._simulateSticky();
    },
    _simulateSticky() {
      const e = this,
        t = this.isInScrollable();
      this.offset =
        (t ? this.getParentScroller().offset : window.pageYOffset) || 0;
      const n = this.element.getBoundingClientRect().top;
      let i = 0;
      t && (i = this.parentElement.getBoundingClientRect().top);
      const o = this.withinParent,
        r = n - i + this.offset;
      this.curState = 1;
      const s = (this._scrollHandler = Ci(function(t) {
        const n = r,
          i = e.isInScrollable() ? t.offset : window.pageYOffset;
        (e.offset = i),
          i < n
            ? 1 !== e.curState && (oa(e), (e.curState = 1))
            : ((!o && i >= n) || (o && i >= n)) &&
              2 !== e.curState &&
              (!(function(e) {
                const t = e.component,
                  n = e.element;
                let i;
                (t.stickyPlaceholder = e.element.cloneNode(!0)),
                  t.stickyPlaceholder.removeAttribute('data-ref'),
                  t.stickyPlaceholder.classList.add('hap-sticky-placeholder'),
                  n.classList.add('hap-sticky'),
                  (e.preMarginTop = n.style.marginTop),
                  (e.preTop = n.style.top),
                  (n.style.marginTop = e.top || '0px'),
                  n.parentNode.insertBefore(t.stickyPlaceholder, n),
                  (n.style.position = 'fixed'),
                  (i =
                    e.parent instanceof HTMLElement
                      ? 0
                      : e.parentElement.getBoundingClientRect().top),
                  (n.style.top = i + 'px'),
                  e.parentElement.appendChild(n);
              })(e),
              (e.curState = 2));
      }, 100));
      if ((window.addEventListener('scroll', s, !1), this.offset >= r)) {
        const e = document.createEvent('HTMLEvents');
        e.initEvent('scroll', !0, !0), window.dispatchEvent(e);
      }
    },
    _detach(e) {
      (e = e ? e + '' : 'relative'),
        2 === this.curState && oa(this),
        window.removeEventListener('scroll', this._scrollHandler, !1);
    },
    isInScrollable() {
      if (!this._isInScrollable)
        try {
          this._isInScrollable = this.component.isInScrollable();
        } catch (e) {
          console.error('isInScrollable is not yet available to call', e);
        }
      return this._isInScrollable;
    },
    getParentScroller() {
      return this.component.getParentScroller();
    },
    destroy(e) {
      this._detach(e);
      const t = this.element.style;
      t.removeProperty(na + 'transform'),
        t.removeProperty('transform'),
        window.removeEventListener(this._resizeEvent, this._resizeHandler, !1);
    }
  };
  var sa = Object.freeze({
    setFixed: function() {
      setTimeout(
        function() {
          (this.node.style.position = 'fixed'), (this.node.style.zIndex = '1');
          const e = this.getComponentManager().tilebar,
            t = this.data.style && this.data.style.top;
          if (t && t.indexOf('px') > -1)
            if (
              this._getProps('_isInTabContent') &&
              this._getProps('tabwrap')
            ) {
              const e = this._getProps(
                  'tabwrap'
                ).parentNode.getBoundingClientRect().top,
                n = parseFloat(t) - e;
              this.node.style.top = `${n}px`;
            } else if (e && e.showTitleBar) {
              const n =
                parseFloat(t) + e.instance.getBoundingClientRect().height;
              this.node.style.top = `${n}px`;
            }
          const n = this.data.style && this.data.style.bottom;
          if (
            n &&
            n.indexOf('px') > -1 &&
            this._getProps('_isInTabContent') &&
            this._getProps('tabwrap')
          ) {
            const e = this._getProps('tabwrap').parentNode,
              t = document.body.offsetHeight - e.getBoundingClientRect().bottom,
              i = parseFloat(n) - t;
            this.node.style.bottom = `${i}px`;
          }
          const i = this.data.style && this.data.style.width,
            o = this.data.style && this.data.style.right,
            r = this.data.style && this.data.style.left;
          if (
            (i || o || r || (this.node.style.width = '-webkit-fill-available'),
            !this.isInScrollable())
          )
            return;
          const s = this.node.parentNode;
          s &&
            ((this.fixedPlaceholder = document.createElement('div')),
            this.fixedPlaceholder.classList.add('hap-fixed-placeholder'),
            (this.fixedPlaceholder.style.cssText = [
              'display:none;',
              'width:0px;',
              'height:0px;'
            ].join('')),
            s.insertBefore(this.fixedPlaceholder, this.node),
            this.getRootContainer().appendChild(this.node));
        }.bind(this),
        0
      );
    },
    unsetFixed: function(e) {
      if (((e = e ? e + '' : 'relative'), this.fixedPlaceholder)) {
        const t = this.fixedPlaceholder.parentNode;
        t.insertBefore(this.node, this.fixedPlaceholder),
          t.removeChild(this.fixedPlaceholder),
          (this.fixedPlaceholder = null),
          (this.node.style.position = e);
      }
    },
    setSticky: function() {
      (this.node.style.zIndex = 100),
        setTimeout(
          function() {
            this.sticky = new ra(this);
          }.bind(this),
          0
        );
    },
    unsetSticky: function() {
      this.sticky && (this.sticky.destroy(), (this.sticky = null));
    },
    unsetPosition: function(e) {
      this.style.position.call(this, e);
    }
  });
  const aa = {
      stretch: 'stretch',
      'flex-start': 'start',
      'flex-end': 'end',
      center: 'center'
    },
    la = { row: 'horizontal', column: 'vertical' },
    ca = {
      'flex-start': 'start',
      'flex-end': 'end',
      center: 'center',
      'space-between': 'justify',
      'space-around': 'justify'
    };
  var da = {
    style: {
      flex(e) {
        (this.node.style.webkitBoxFlex = e),
          (this.node.style.webkitFlex = e),
          (this.node.style.flex = e);
      },
      alignItems(e) {
        (this.node.style.webkitBoxAlign = aa[e]),
          (this.node.style.webkitAlignItems = e),
          (this.node.style.alignItems = e);
      },
      alignContent(e) {
        (this.node.style.alignContent = e),
          (this.node.style.webkitAlignItems = e),
          (this.node.style.alignItems = e);
      },
      alignSelf(e) {
        (this.node.style.webkitAlignSelf = e), (this.node.style.alignSelf = e);
      },
      flexDirection(e) {
        (this.node.style.webkitBoxOrient = la[e]),
          (this.node.style.webkitFlexDirection = e),
          (this.node.style.flexDirection = e);
      },
      justifyContent(e) {
        (this.node.style.webkitBoxPack = ca[e]),
          (this.node.style.webkitJustifyContent = e),
          (this.node.style.justifyContent = e);
      }
    }
  };
  let ha;
  function pa() {
    setTimeout(() => lib.img.fire(), 0);
  }
  function ua(e) {
    if (('object' != typeof e || e instanceof HTMLElement || (e = e.node), e)) {
      if ('image' !== e.tagName.toLowerCase())
        return (function(e) {
          const t = e.querySelectorAll('[img-src]'),
            n = e.querySelectorAll('[i-lazy-src]');
          (t.length > 0 || n.length > 0) && pa();
        })(e);
      ha ||
        (ha = setTimeout(function() {
          pa(), clearTimeout(ha), (ha = null);
        }, 16));
    }
  }
  function fa(e) {
    const t = e.getParent();
    if (!t || e.isRoot()) return !1;
    const n = t.data.style && t.data.style.width;
    return !((n && '100%' !== n) || parseInt(n) >= document.body.clientWidth);
  }
  global.lib = {
    img: {
      defaultSrc:
        'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQImWNgYGBgAAAABQABh6FO1AAAAABJRU5ErkJggg==',
      fire() {
        console.debug('lazyimg fire');
      }
    }
  };
  var ma = {
    fixWidth: function e(t) {
      const n = t.getParent();
      fa(t) &&
        ((n._fixWidth = !0),
        (n.node.style.width =
          n.data.ref === n.getComponentManager().rootRef
            ? '100%'
            : '-webkit-fill-available'),
        delete n._needSetWidth,
        n.node.clientWidth >= document.body.clientWidth || e(n));
    },
    needFixWidth: fa,
    fixStackSize: function(e, t) {
      e._needSetHeight && e._resizeHeight(t),
        e._needSetWidth && e._resizeWidth(t);
    }
  };
  const ga = ['appear', 'disappear'],
    ya = {
      linearGradient: 'linear-gradient',
      repeatingLinearGradient: 'repeating-linear-gradient'
    };
  function ba(e, t) {
    (this.data = e),
      (this.node = this.create(t)),
      this.createChildren(),
      this.updateAttrs(this.data.attr || {}),
      this.data.classStyle && this.updateStyle(this.data.classStyle),
      this.updateStyle(this.data.style || {}),
      this.bindEvents(this.data.event || []);
  }
  function va(e) {
    ba.call(this, e);
  }
  (ba.prototype = {
    getComponentManager() {
      return Hi.getInstance(this.data.instanceId);
    },
    getHapInstance() {
      return this.getComponentManager().getHapInstance();
    },
    getParent() {
      return this.getComponentManager().componentMap[this.parentRef];
    },
    getParentScroller() {
      return this.isInScrollable() ? this._parentScroller : null;
    },
    getRootScroller() {
      if (this.isInScrollable()) {
        let e = this._parentScroller,
          t = e._parentScroller;
        for (; t; ) t = (e = t)._parentScroller;
        return e;
      }
      return null;
    },
    getRootContainer() {
      return this.getHapInstance().getRoot() || document.body;
    },
    isScrollable() {
      const e = this.data.type;
      return -1 !== Hi.getScrollableTypes().indexOf(e);
    },
    isRoot() {
      return this.ref === this.getComponentManager().rootRef;
    },
    isInScrollable() {
      if ('boolean' == typeof this._isInScrollable) return this._isInScrollable;
      const e = this.getParent();
      return e && 'boolean' != typeof e._isInScrollable && !e.isScrollable()
        ? '_root' === e.data.ref
          ? ((this._isInScrollable = !1), !1)
          : ((this._isInScrollable = e.isInScrollable()),
            (this._parentScroller = e._parentScroller),
            this._isInScrollable)
        : e && 'boolean' == typeof e._isInScrollable
        ? ((this._isInScrollable = e._isInScrollable),
          (this._parentScroller = e._parentScroller),
          this._isInScrollable)
        : e && e.isScrollable()
        ? ((this._isInScrollable = !0), (this._parentScroller = e), !0)
        : void 0;
    },
    dispatchEvent(e, t, n) {
      if (
        !(function(e, t) {
          if (ga.indexOf(t) <= -1) return !0;
          if (void 0 === e._appear && 'disappear' === t) return !1;
          let n;
          return (
            (n = (void 0 === e._appear && 'appear' === t) || t !== e._appear) &&
              (e._appear = t),
            n
          );
        })(this, e)
      )
        return;
      const i = document.createEvent('HTMLEvents');
      (n = n || {}),
        i.initEvent(e, n.bubbles || !1, n.cancelable || !1),
        !t && (t = {}),
        (i.data = S({}, t)),
        S(i, t),
        this.node.dispatchEvent(i);
    },
    onAppend: function() {
      this._fixStyles();
      const e = this.data.event;
      if (!e || !e.length) return;
      let t = !1;
      for (let n = 0, i = e.length; n < i; n++)
        if ('appear' === e[n]) {
          t = !0;
          break;
        }
      t &&
        setTimeout(() => {
          Pi(this) && this.dispatchEvent('appear', { direction: '' });
        }, 0);
    },
    onRemove: function() {
      const e = this.getParent();
      e &&
        e._fixWidth &&
        1 === e.data.children.length &&
        (e.node.style.width = (e.data.style && e.data.style.width) || '');
    },
    removeChildHandler() {
      if (0 === document.querySelectorAll('list').length) {
        const e = this.getComponentManager(),
          t = e.getComponent(e.rootRef);
        (t.node.style.height = (t.data.style && t.data.style.height) || ''),
          (t.node.style.overflow = '');
      }
      const e = this._getProps('stack');
      e && e._needSetHeight && ((e.maxHeight = 0), (e.node.style.height = '')),
        this._fixStyles();
    },
    addAppendHandler(e) {
      let t;
      this.onAppend && (t = this.onAppend.bind(this)),
        (this.onAppend = function() {
          t && t.call(this), e && e.call(this);
        }.bind(this));
    },
    enableLazyload(e) {
      this.node
        ? (function(e, t) {
            e.removeAttribute('img-src'),
              e.removeAttribute('i-lazy-src'),
              e.removeAttribute('src'),
              e.setAttribute('img-src', t),
              pa();
          })(this.node, e)
        : console.error('[h5-render] this.node does not exist.');
    },
    fireLazyload(e) {
      !e && (e = this), ua(e);
    },
    _fixStyles() {
      this._setAvailableWidth(),
        this._needFixWidth &&
          (ma.needFixWidth(this)
            ? ma.fixWidth(this)
            : delete this._needFixWidth);
      const e = this.data.props;
      e &&
        e._isInStack &&
        e.stackwrap &&
        (this.data.style && 'fixed' === this.data.style.position
          ? this._setProps(this.data, { _isInStack: !1 })
          : ma.fixStackSize(e.stack, e.stackwrap));
    },
    _setProps(e, t) {
      if (t)
        if (e.props) {
          const n = {};
          Object.assign(n, e.props, t), (e.props = n);
        } else e.props = t;
    },
    _getProps(e) {
      if (e && this.data && this.data.props) return this.data.props[e];
    },
    _setAvailableWidth() {
      const e = this.data.style;
      let t = this.node.clientWidth;
      if (e && e.width) {
        if (e.width.indexOf('px') > -1) t = parseInt(e.width);
        else if (e.width.indexOf('%') > -1) {
          const n = parseFloat(parseInt(e.width.replace('%', '')) / 100);
          this._getProps('availableWidth') > 0
            ? (t = parseInt(this._getProps('availableWidth') * n))
            : this.getParent() &&
              (t = parseInt(this.getParent().node.clientWidth * n));
        }
      } else
        this._getProps('availableWidth') || (t = document.body.clientWidth);
      e &&
        e.paddingLeft &&
        e.paddingLeft.indexOf('px') > -1 &&
        (t -= parseInt(e.paddingLeft)),
        e &&
          e.paddingRight &&
          e.paddingRight.indexOf('px') > -1 &&
          (t -= parseInt(e.paddingRight)),
        t > 0 && this._setProps(this.data, { availableWidth: t });
    },
    attr: {
      show: function(e) {
        e
          ? ((this.node.style.display = ''), this.node.setAttribute('show', !0))
          : ((this.node.style.display = 'none'),
            this.node.setAttribute('show', !1));
      },
      disabled: function(e) {
        !0 === e || 'true' === e
          ? (this.node.setAttribute('disabled', !0),
            this.node.classList.add('hap-disabled'))
          : (this.node.setAttribute('disabled', !1),
            this.node.classList.remove('hap-disabled'));
      }
    },
    style: {
      borderBottomWidth: function(e) {
        (this.node.style.borderBottomWidth = e),
          (this.node.style.borderBottomStyle =
            this.data.style.borderBottomStyle ||
            this.data.style.borderStyle ||
            'solid');
      },
      borderTopWidth: function(e) {
        (this.node.style.borderTopWidth = e),
          (this.node.style.borderTopStyle =
            this.data.style.borderTopStyle ||
            this.data.style.borderStyle ||
            'solid');
      },
      borderLeftWidth: function(e) {
        (this.node.style.borderLeftWidth = e),
          (this.node.style.borderLeftStyle =
            this.data.style.borderLeftStyle ||
            this.data.style.borderStyle ||
            'solid');
      },
      borderRightWidth: function(e) {
        (this.node.style.borderRightWidth = e),
          (this.node.style.borderRightStyle =
            this.data.style.borderRightStyle ||
            this.data.style.borderStyle ||
            'solid');
      },
      backgroundImage: function(e) {
        const t = '/' === e[0] && Hap.basePath ? `${Hap.basePath}${e}` : e;
        (this.node.style.backgroundImage = 'url(' + t + ')'),
          (!this.data.style ||
            (this.data.style && !this.data.style.backgroundRepeat)) &&
            (this.node.style.backgroundRepeat = 'no-repeat'),
          (!this.data.style ||
            (this.data.style && !this.data.style.backgroundSize)) &&
            (this.node.style.backgroundSize = '100% 100%');
      },
      background: function(e) {
        const t = JSON.parse(e).values,
          n = t[t.length - 1],
          i = `${ya[n.type]}(${n.directions.join(' ')}, ${n.values.join(',')})`;
        return (this.node.style.background = i), i;
      },
      width: function(e) {
        const t = (this.data && this.data.style) || {};
        e.indexOf('px') > -1 && t.backgroundImage
          ? (this.node.style.flexShrink = '0')
          : e.indexOf('%') > -1 &&
            'fixed' !== t.position &&
            !this._getProps('_isInTabBar') &&
            (this._needFixWidth = !0),
          (this.node.style.width = e);
      },
      position(e) {
        return (
          'fixed' !== e && this.unsetFixed(),
          'sticky' !== e && this.unsetSticky(),
          'fixed' === e
            ? this.setFixed()
            : 'sticky' === e
            ? this.setSticky()
            : void (this.node.style.position = e)
        );
      }
    },
    event: {},
    clearAttr() {},
    clearStyle() {
      this.node.cssText = '';
    }
  }),
    S(ba.prototype, Qs),
    S(ba.prototype, sa),
    S(ba.prototype.style, da.style),
    (va.prototype = Object.create(ba.prototype)),
    (va.prototype.createChildren = function(e) {}),
    (va.prototype.appendChild = function(e) {}),
    (va.prototype.insertBefore = function(e, t) {}),
    (va.prototype.removeChild = function(e) {});
  const Ea = {};
  function wa(e, t, n) {
    'globalEvent' !== e &&
      ((t.addEventListener = function(t, n, i) {
        return function(e, t, n, i) {
          const o = i && !!i.once;
          let r = Ea[e];
          r || (r = Ea[e] = {});
          let s = r[t];
          s || (s = r[t] = []),
            s.push(e => this.sender.performCallback(n, e, !o));
        }.call(this, e, t, n, i);
      }),
      (t.removeAllEventListeners = function(t) {
        return function(e, t) {
          try {
            delete Ea[e][t];
          } catch (e) {}
        }.call(this, e, t);
      }),
      [
        { name: 'addEventListener', args: ['string', 'function', 'object'] },
        { name: 'removeAllEventListeners', args: ['string'] }
      ].forEach(t => n[e].push(t)));
  }
  window.addEventListener('moduleevent', e => {
    const t = e.detail || {},
      n = t.module,
      i = t.type;
    try {
      Ea[n][i].forEach(e => e(t));
    } catch (e) {
      console.warn(`[h5-render] no such event ${i} for module ${n}.`);
    }
  });
  const ka = {
    registerComponent(e, t) {
      Hi.registerComponent(e, t);
    },
    registerApiModule(e, t, n) {
      if ((wa(e, t, n), cr.apiModule[e]))
        for (const n in t) t.hasOwnProperty(n) && (cr.apiModule[e][n] = t[n]);
      else cr.apiModule[e] = t;
      n &&
        (cr.setApiModuleMeta(n),
        global.registerModules(cr.getApiModuleMeta(e), !0));
    },
    registerApi(e, t, n, i) {
      'function' == typeof n &&
        (cr.apiModule[e] || ((cr.apiModule[e] = {}), (cr._meta[e] = [])),
        (cr.apiModule[e][t] = n),
        i &&
          (cr.setApiMeta(e, { name: t, args: i }),
          global.registerModules(cr.getApiModuleMeta(e), !0)));
    },
    registerLoader(e, t) {}
  };
  var xa = !1,
    _a = window.document,
    Aa = _a.documentElement,
    Ca = Array.prototype.slice,
    Ta = {},
    Sa = null;
  function Ma(e, t) {
    for (var n = e; n; ) {
      if (n.contains(t) || n == t) return n;
      n = n.parentNode;
    }
    return null;
  }
  function Oa(e, t, n) {
    var i = _a.createEvent('HTMLEvents');
    if ((i.initEvent(t, !0, !0), 'object' == typeof n))
      for (var o in n) i[o] = n[o];
    e.dispatchEvent(i);
  }
  function La(e) {
    for (var t = 0; t < e.changedTouches.length; t++) {
      var n = e.changedTouches[t];
      if (!(g = Ta[n.identifier])) return;
      g.lastTouch || (g.lastTouch = g.startTouch),
        g.lastTime || (g.lastTime = g.startTime),
        g.velocityX || (g.velocityX = 0),
        g.velocityY || (g.velocityY = 0),
        g.duration || (g.duration = 0);
      var i = Date.now() - g.lastTime,
        o = (n.clientX - g.lastTouch.clientX) / i,
        r = (n.clientY - g.lastTouch.clientY) / i;
      for (var s in (i > 70 && (i = 70),
      g.duration + i > 70 && (g.duration = 70 - i),
      (g.velocityX = (g.velocityX * g.duration + o * i) / (g.duration + i)),
      (g.velocityY = (g.velocityY * g.duration + r * i) / (g.duration + i)),
      (g.duration += i),
      (g.lastTouch = {}),
      n))
        g.lastTouch[s] = n[s];
      g.lastTime = Date.now();
      var a = n.clientX - g.startTouch.clientX,
        l = n.clientY - g.startTouch.clientY,
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2)),
        d = !(Math.abs(a) > Math.abs(l)),
        h = d ? (l >= 0 ? 'down' : 'up') : a >= 0 ? 'right' : 'left';
      ('tapping' === g.status || 'pressing' === g.status) &&
        c > 10 &&
        ((g.status = 'panning'),
        (g.isVertical = d),
        (g.direction = h),
        Oa(g.element, 'panstart', {
          touch: n,
          touches: e.touches,
          changedTouches: e.changedTouches,
          touchEvent: e,
          isVertical: g.isVertical,
          direction: h
        })),
        'panning' === g.status &&
          ((g.panTime = Date.now()),
          Oa(g.element, 'panmove', {
            displacementX: a,
            displacementY: l,
            touch: n,
            touches: e.touches,
            changedTouches: e.changedTouches,
            touchEvent: e,
            isVertical: g.isVertical,
            direction: h
          }));
    }
    if (2 == Object.keys(Ta).length) {
      var p,
        u = [],
        f = [],
        m = [];
      for (t = 0; t < e.touches.length; t++) {
        n = e.touches[t];
        var g = Ta[n.identifier];
        u.push([g.startTouch.clientX, g.startTouch.clientY]),
          f.push([n.clientX, n.clientY]);
      }
      for (var s in Ta) m.push(Ta[s].element);
      (y = u[0][0]),
        (b = u[0][1]),
        (v = u[1][0]),
        (E = u[1][1]),
        (w = f[0][0]),
        (k = f[0][1]),
        (x = f[1][0]),
        (_ = f[1][1]),
        (A = Math.atan2(_ - k, x - w) - Math.atan2(E - b, v - y)),
        (C = Math.sqrt(
          (Math.pow(_ - k, 2) + Math.pow(x - w, 2)) /
            (Math.pow(E - b, 2) + Math.pow(v - y, 2))
        )),
        (T = [
          w - C * y * Math.cos(A) + C * b * Math.sin(A),
          k - C * b * Math.cos(A) - C * y * Math.sin(A)
        ]),
        (p = {
          rotate: A,
          scale: C,
          translate: T,
          matrix: [
            [C * Math.cos(A), -C * Math.sin(A), T[0]],
            [C * Math.sin(A), C * Math.cos(A), T[1]],
            [0, 0, 1]
          ]
        }),
        Oa(Ma(m[0], m[1]), 'dualtouch', {
          transform: p,
          touches: e.touches,
          touchEvent: e
        });
    }
    var y, b, v, E, w, k, x, _, A, C, T;
  }
  function Ia(e) {
    if (2 == Object.keys(Ta).length) {
      var t = [];
      for (var n in Ta) t.push(Ta[n].element);
      Oa(Ma(t[0], t[1]), 'dualtouchend', {
        touches: Ca.call(e.touches),
        touchEvent: e
      });
    }
    for (var i = 0; i < e.changedTouches.length; i++) {
      var o = e.changedTouches[i],
        r = o.identifier,
        s = Ta[r];
      if (s) {
        if (
          (s.pressingHandler &&
            (clearTimeout(s.pressingHandler), (s.pressingHandler = null)),
          'tapping' === s.status &&
            ((s.timestamp = Date.now()),
            Oa(s.element, 'tap', { touch: o, touchEvent: e }),
            Sa &&
              s.timestamp - Sa.timestamp < 300 &&
              Oa(s.element, 'doubletap', { touch: o, touchEvent: e }),
            (Sa = s)),
          'panning' === s.status)
        ) {
          var a = Date.now(),
            l = a - s.startTime,
            c = o.clientX - s.startTouch.clientX,
            d = o.clientY - s.startTouch.clientY,
            h =
              Math.sqrt(s.velocityY * s.velocityY + s.velocityX * s.velocityX) >
                0.5 && a - s.lastTime < 100,
            p = {
              duration: l,
              isSwipe: h,
              velocityX: s.velocityX,
              velocityY: s.velocityY,
              displacementX: c,
              displacementY: d,
              touch: o,
              touches: e.touches,
              changedTouches: e.changedTouches,
              touchEvent: e,
              isVertical: s.isVertical,
              direction: s.direction
            };
          Oa(s.element, 'panend', p), h && Oa(s.element, 'swipe', p);
        }
        'pressing' === s.status &&
          Oa(s.element, 'pressend', { touch: o, touchEvent: e }),
          delete Ta[r];
      }
    }
    0 === Object.keys(Ta).length &&
      (Aa.removeEventListener('touchmove', La, !1),
      Aa.removeEventListener('touchend', Ia, !1),
      Aa.removeEventListener('touchcancel', Da, !1));
  }
  function Da(e) {
    if (2 == Object.keys(Ta).length) {
      var t = [];
      for (var n in Ta) t.push(Ta[n].element);
      Oa(Ma(t[0], t[1]), 'dualtouchend', {
        touches: Ca.call(e.touches),
        touchEvent: e
      });
    }
    for (var i = 0; i < e.changedTouches.length; i++) {
      var o = e.changedTouches[i],
        r = o.identifier,
        s = Ta[r];
      s &&
        (s.pressingHandler &&
          (clearTimeout(s.pressingHandler), (s.pressingHandler = null)),
        'panning' === s.status &&
          Oa(s.element, 'panend', {
            touch: o,
            touches: e.touches,
            changedTouches: e.changedTouches,
            touchEvent: e
          }),
        'pressing' === s.status &&
          Oa(s.element, 'pressend', { touch: o, touchEvent: e }),
        delete Ta[r]);
    }
    0 === Object.keys(Ta).length &&
      (Aa.removeEventListener('touchmove', La, !1),
      Aa.removeEventListener('touchend', Ia, !1),
      Aa.removeEventListener('touchcancel', Da, !1));
  }
  xa ||
    (Aa.addEventListener(
      'touchstart',
      function(e) {
        0 === Object.keys(Ta).length &&
          (Aa.addEventListener('touchmove', La, !1),
          Aa.addEventListener('touchend', Ia, !1),
          Aa.addEventListener('touchcancel', Da, !1));
        for (var t = 0; t < e.changedTouches.length; t++) {
          var n = e.changedTouches[t],
            i = {};
          for (var o in n) i[o] = n[o];
          var r = {
            startTouch: i,
            startTime: Date.now(),
            status: 'tapping',
            element: e.srcElement || e.target,
            pressingHandler: setTimeout(
              (function(t, n) {
                return function() {
                  'tapping' === r.status &&
                    ((r.status = 'pressing'),
                    Oa(t, 'longpress', {
                      touch: n,
                      touches: e.touches,
                      changedTouches: e.changedTouches,
                      touchEvent: e
                    })),
                    clearTimeout(r.pressingHandler),
                    (r.pressingHandler = null);
                };
              })(e.srcElement || e.target, e.changedTouches[t]),
              500
            )
          };
          Ta[n.identifier] = r;
        }
        if (2 == Object.keys(Ta).length) {
          var s = [];
          for (var o in Ta) s.push(Ta[o].element);
          Oa(Ma(s[0], s[1]), 'dualtouchstart', {
            touches: Ca.call(e.touches),
            touchEvent: e
          });
        }
      },
      !1
    ),
    (xa = !0)),
    Ys();
  const Na = 750,
    Pa = 'hap';
  global.HapEnvironment = {
    version: dr.version,
    platform: 'Web',
    deviceWidth: window.innerWidth,
    deviceHeight: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio
      ? window.devicePixelRatio
      : window.screen.width >= 1440
      ? 3.5
      : window.screen.width >= 1080
      ? 3
      : window.screen.width >= 800
      ? 2.5
      : window.screen.width >= 640
      ? 2
      : window.screen.width >= 480
      ? 1.5
      : 1
  };
  const Fa = {};
  function Ra(e) {
    document
      .querySelector('meta[name=viewport]')
      .setAttribute('content', `width=${e}, user-scalable=no`);
  }
  function Ba(e) {
    if (!(this instanceof Ba)) return new Ba(e);
    (this.width = e.width || window.innerWidth),
      (this.bundleUrl = e.bundleUrl || location.href),
      (this.instanceId = e.appId),
      (this.rootId = e.rootId || Pa + Ai(10)),
      (this.jsonpCallback = e.jsonpCallback),
      (this.source = e.source),
      (this.loader = e.loader),
      (this.data = e.data),
      (this.sender = new ur(this)),
      (Fa[this.instanceId] = this);
  }
  Ra(Na),
    (Ba.init = function(e) {
      const t = (e && e.base) || window.location.pathname.split('/')[1];
      (this.basePath = '/' === t[0] ? t : '/' + t),
        (global.Env = {
          platform: 'h5',
          osVersion: null,
          osVersionInt: null,
          appVersionName: null,
          appVersionCode: null,
          appName: null,
          logLevel: 'log',
          density: null,
          densityDpi: null,
          deviceWidth: 1080,
          deviceHeight: 1280,
          engine: 'page'
        });
      global.createApplication('1', () => {
        gr(this.basePath + '/app.js', e => {
          e ||
            (global.registerComponents(hr),
            global.registerModules(Ps, 'feature'),
            global.registerModules([], 'modules'),
            (function(e) {
              Ra((e && e.config && e.config.designWidth) || Na),
                (document.body.style.backgroundColor =
                  (e && e.display && e.display.backgroundColor) || '#ffffff');
            })(global.manifest),
            global.createAppHandler(),
            Cr.init({ base: this.basePath }));
        });
      });
    }),
    (Ba.createInstance = function(e) {
      wi(e)
        ? e.forEach(function(e) {
            new Ba(e);
          })
        : 'object' === _i(e) && new Ba(e);
    }),
    (Ba.getInstance = function(e) {
      return Fa[e];
    }),
    (Ba.prototype = {
      createApp: function(e, t) {
        let n = document.querySelector('#' + this.rootId);
        n ||
          (((n = document.createElement('div')).id = this.rootId),
          document.body.appendChild(n));
        const i = global.createApplication(
          this.instanceId,
          t,
          { bundleUrl: this.bundleUrl, debug: e.debug },
          this.data
        );
        if (i instanceof Error) return console.error('[h5-render]', i);
      },
      getComponentManager: function() {
        return (
          this._componentManager ||
            (this._componentManager = Hi.getInstance(this.instanceId)),
          this._componentManager
        );
      },
      getRoot: function() {
        return document.querySelector('#' + this.rootId);
      }
    }),
    (Ba.stopTheWorld = function(e) {
      if (!e)
        return Object.keys(Fa).map(function(e) {
          Ba.stopTheWorld(e);
        });
      window.destroyInstance(e);
    }),
    (function(e) {
      (e.install = function(e) {
        e.init(this);
      }.bind(e)),
        S(e, ka);
    })(Ba),
    S(Ba, {
      Component: ba,
      Atomic: va,
      ComponentManager: Hi,
      utils: Oi,
      config: dr
    }),
    (global.Hap = global.hap = Ba);
  var ja = {
    init: function(e) {
      const t = e.Component;
      function n(e, n) {
        t.call(this, e, n),
          '_root' === e.ref || 'root' === n
            ? this.node.classList.add('root-container')
            : this.node.classList.add('hap-div');
      }
      (n.prototype = Object.create(t.prototype)),
        e.registerComponent('div', n),
        e.registerComponent('container', n);
    }
  };
  e(
    '.hap-img{display:flex;flex:0 1 auto;box-sizing:border-box;position:relative;border:0 solid #000;margin:0;padding:0;min-width:0;white-space:normal;overflow:hidden}',
    void 0
  );
  const $a = ['stretch', 'cover', 'contain', 'center'];
  let za;
  const Ha = {
      create() {
        const e = document.createElement('image');
        return (
          e.classList.add('hap-img'),
          (e.style.height = e.style.width = 'auto'),
          (e.style.overflow = 'hidden'),
          (this.imgElement = document.createElement('img')),
          (this.imgElement.style.height = '100%'),
          (this.imgElement.style.width = '100%'),
          (this.imgElement.style.objectFit = 'cover'),
          e.appendChild(this.imgElement),
          e
        );
      },
      _resize() {
        const e = this.data.style,
          t = this.getParent();
        if (e && (e.height || e.width)) {
          if (e.height && e.height.indexOf('px') > -1 && !e.width)
            if (t && 'swiper' === t.data.type) this.node.style.width = '100%';
            else {
              const t =
                (parseInt(e.height) / this.naturalHeight) * this.naturalWidth;
              this.node.style.width = t + 'px';
            }
          else if (e.width && e.width.indexOf('px') > -1 && !e.height) {
            const t =
              (parseInt(e.width) / this.naturalWidth) * this.naturalHeight;
            this.node.style.height = t + 'px';
          }
        } else
          (e && (!e || e.height || e.width)) ||
            (t &&
              'stack' === t.data.type &&
              (this.node.style.height = this.node.style.width = '100%'));
        this._appended &&
          (this.node.clientHeight / this.node.clientWidth !=
            this.naturalHeight / this.naturalWidth &&
            (('auto' === this.node.style.height &&
              this.node.clientHeight < this.naturalHeight) ||
              ('auto' === this.node.style.width &&
                this.node.clientWidth < this.naturalWidth)) &&
            (this.imgElement.style.objectFit = 'contain'),
          t &&
            t.data.style &&
            'string' == typeof t.data.style.height &&
            t.data.style.height.indexOf('px') > -1 &&
            'column' === t.data.style.flexDirection &&
            'auto' === this.node.style.height &&
            (this.imgElement.style.height = 'inherit'));
      }
    },
    Ya = {
      src: function(e) {
        if (e) {
          this.node.style.opacity = '0';
          const t = new window.Image(),
            n = '/' === e[0] && Hap.basePath ? `${Hap.basePath}${e}` : e;
          (t.src = n),
            (t.onload = () => {
              (this.node.style.opacity =
                (this.data.style && this.data.style.opacity) || ''),
                (this.naturalWidth = t.width),
                (this.naturalHeight = t.height),
                this._resize(),
                (this.imgElement.src = n),
                this._fixStyles(),
                this.dispatchEvent('complete', {
                  width: this.naturalWidth,
                  height: this.naturalHeight
                });
            }),
            (t.onerror = () => {
              this.dispatchEvent('error');
            });
        } else
          (this.src = lib.img.defaultSrc), (this.imgElement.src = this.src);
      },
      placeholder: function(e) {
        this.imgElement.dataset.placeholder = e;
      },
      placeHolder: function(e) {
        return this.attr.placeholder.call(this, e);
      }
    },
    Wa = {
      width: function(e) {
        e.indexOf('px') > -1
          ? (((e = parseFloat(e)) < 0 || isNaN(e)) && (e = 200),
            (this.node.style.width = e + 'px'))
          : e.indexOf('%') > -1
          ? ((this._needFixWidth = !0), (this.node.style.width = e))
          : (this.node.style.width = e);
      },
      height: function(e) {
        e.indexOf('px') > -1
          ? (((e = parseFloat(e)) < 0 || isNaN(e)) && (e = 200),
            (this.node.style.height = e + 'px'))
          : (this.node.style.height = e);
      },
      resizeMode: function(e) {
        -1 === $a.indexOf(e) && (e = 'cover'),
          (this.imgElement.style.objectFit =
            'stretch' === e ? 'fill' : 'center' === e ? 'none' : e);
      },
      transform: function(e) {
        try {
          const t = JSON.parse(e);
          let n = '';
          for (const e in t) n += e + '(' + t[e] + ')';
          this.imgElement.style.transform = n;
        } catch (e) {}
      },
      paddingTop: function(e) {
        -1 === e.indexOf('%') && (this.node.style.paddingTop = e);
      },
      paddingBottom: function(e) {
        -1 === e.indexOf('%') && (this.node.style.paddingBottom = e);
      },
      paddingLeft: function(e) {
        -1 === e.indexOf('%') && (this.node.style.paddingLeft = e);
      },
      paddingRight: function(e) {
        -1 === e.indexOf('%') && (this.node.style.paddingRight = e);
      }
    },
    Ua = {
      load: {
        extra: function() {
          const { naturalWidth: e, naturalHeight: t } = this.imgElement;
          return { naturalWidth: e, naturalHeight: t };
        }
      }
    };
  var Va = {
    init: function(e) {
      za = e.Atomic;
      const t = e.utils.extend;
      function n(e) {
        za.call(this, e);
      }
      (n.prototype = Object.create(za.prototype)),
        t(n.prototype, Ha),
        t(n.prototype, { attr: t(Object.create(za.prototype.attr), Ya) }),
        t(n.prototype, { style: t(Object.create(za.prototype.style), Wa) }),
        t(n.prototype, { event: Ua }),
        e.registerComponent('image', n);
    }
  };
  const Ga = {};
  var Ja = {
    fontFamilyDesc(e) {
      const t = window.location.pathname.split('/')[1],
        n = this.data.instanceId;
      Ga[n] || (Ga[n] = {});
      const i = JSON.parse(e);
      Array.isArray(i) &&
        i.forEach(e => {
          if (Ga[n][e.fontName] || !e.fontSrc) return;
          const i = `@font-face {\n          font-family: ${
            e.fontName
          };\n          src: url(/${t + e.fontSrc[0]})\n        }`;
          (Ga[n][e.fontName] = e),
            (function(e, t) {
              const n = `hap-font-style-${t}`;
              let i = document.getElementById(n);
              i ||
                (((i = document.createElement('style')).id = n),
                document.head.appendChild(i));
              const o = i.textContent + '\n' + e;
              i.textContent = o;
            })(i, n);
        });
    }
  };
  let Za;
  const qa = {
      create() {
        const e = document.createElement('text');
        return (
          e.classList.add('hap-text'),
          (this.textNode = document.createElement('span')),
          this.textNode.classList.add('default-text'),
          e.appendChild(this.textNode),
          this._setProps(this.data, { _isInText: !0 }),
          e
        );
      },
      clearAttr() {
        this.node.firstChild.textContent = '';
      },
      onAppend() {
        const e = this.getParent().data.style;
        e &&
          'column' === e.flexDirection &&
          !e.alignItems &&
          (this.node.style.width ||
            (this.node.style.width = '-webkit-fill-available')),
          (this.node.style.whiteSpace = 'nowrap'),
          this.node.scrollWidth > this._getProps('availableWidth') &&
            (this.node.style.whiteSpace = ''),
          Za.prototype.onAppend.call(this),
          (this.node.style.whiteSpace = '');
      }
    },
    Ka = {
      value: function(e) {
        const t = this.node.firstChild;
        if (((t.innerHTML = ''), null == e || '' === e)) return;
        const n = typeof e;
        (e = 'string' === n ? e : JSON.stringify(e)),
          'number' === n && (t.style.wordBreak = 'keep-all'),
          (t.innerHTML = e),
          (this.node.style.whiteSpace = 'nowrap'),
          this.node.scrollWidth > this._getProps('availableWidth') &&
            (this.node.style.whiteSpace = ''),
          this._fixStyles(),
          (this.node.style.whiteSpace = '');
      }
    },
    Qa = {
      lines: function(e) {
        if (((e = parseInt(e)), !isNaN(e)))
          if (e <= 0)
            (this.node.style.textOverflow = ''),
              (this.node.style.overflow = 'visible'),
              (this.node.style.webkitLineClamp = '');
          else {
            const t = this.data ? this.data.style : null;
            (this.node.style.overflow = 'hidden'),
              (this.node.style.textOverflow = t ? t.textOverflow : 'ellipsis'),
              (this.node.style.webkitLineClamp = e);
          }
      },
      textOverflow: function(e) {
        this.node.style.textOverflow = e;
      }
    };
  var Xa = {
    init: function(e) {
      Za = e.Component;
      const t = e.utils.extend;
      function n(e, t) {
        Za.call(this, e, t);
      }
      (n.prototype = Object.create(Za.prototype)),
        t(n.prototype, qa),
        t(n.prototype, { attr: t(Object.create(Za.prototype.attr), Ka) }),
        t(n.prototype, { style: t(Object.create(Za.prototype.style), Ja, Qa) }),
        e.registerComponent('text', n);
    }
  };
  function el(e) {
    if (
      ((this.v = e.v || 0),
      (this.a = e.a || 0),
      void 0 !== e.t && (this.t = e.t),
      void 0 !== e.s && (this.s = e.s),
      void 0 === this.t)
    )
      if (void 0 === this.s) this.t = -this.v / this.a;
      else {
        const e =
            (Math.sqrt(this.v * this.v + 2 * this.a * this.s) - this.v) /
            this.a,
          t =
            (-Math.sqrt(this.v * this.v + 2 * this.a * this.s) - this.v) /
            this.a;
        this.t = Math.min(e, t);
      }
    void 0 === this.s &&
      (this.s = (this.a * this.t * this.t) / 2 + this.v * this.t);
  }
  e(
    '.scrollable-wrap{display:block;overflow:hidden;height:100%;width:-webkit-fill-available;flex:0 999999 auto;pointer-events:auto}.scrollable-element.horizontal{-webkit-box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row}.scrollable-element.vertical{-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}.hap-list-item{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;z-index:0;overflow:hidden;height:fit-content;max-width:100%}',
    void 0
  ),
    (el.prototype.generateCubicBezier = function() {
      return (
        (e = this.v / this.a),
        (t = this.t + this.v / this.a),
        [
          [
            (e / 3 + (e + t) / 3 - e) / (t - e),
            ((e * e) / 3 + (e * t * 2) / 3 - e * e) / (t * t - e * e)
          ],
          [
            (t / 3 + (e + t) / 3 - e) / (t - e),
            ((t * t) / 3 + (e * t * 2) / 3 - e * e) / (t * t - e * e)
          ]
        ]
      );
      var e, t;
    }),
    !lib && (lib = {}),
    (lib.motion = el);
  var tl = window.document,
    nl = window.navigator.userAgent,
    il = {},
    ol = {},
    rl =
      window.dpr ||
      (window.navigator.userAgent.match(/iPhone|iPad|iPod/)
        ? document.documentElement.clientWidth / window.screen.availWidth
        : 1),
    sl = {
      normal: [2 * rl, 0.0015 * rl],
      slow: [1.5 * rl, 0.003 * rl],
      veryslow: [1.5 * rl, 0.005 * rl]
    },
    al = !!nl.match(/Firefox/i),
    ll = !!nl.match(/IEMobile/i),
    cl = al ? '-moz-' : ll ? '-ms-' : '-webkit-',
    dl = al ? 'Moz' : ll ? 'ms' : 'webkit';
  function hl() {
    lib.scroll.outputDebugLog && console.log.apply(console, arguments);
  }
  function pl(e) {
    var t = e.getBoundingClientRect();
    if (!t) {
      ((t = {}).width = e.offsetWidth),
        (t.height = e.offsetHeight),
        (t.left = e.offsetLeft),
        (t.top = e.offsetTop);
      for (var n = e.offsetParent; n; )
        (t.left += n.offsetLeft), (t.top += n.offsetTop), (n = n.offsetParent);
      (t.right = t.left + t.width), (t.bottom = t.top + t.height);
    }
    return t;
  }
  function ul(e) {
    return 0 - e.options[e.axis + 'PaddingTop'];
  }
  function fl(e) {
    var t = pl(e.element),
      n = pl(e.viewport),
      i = ul(e);
    if ('y' === e.axis) var o = 0 - t.height + n.height;
    else o = 0 - t.width + n.width;
    return Math.min(o + e.options[e.axis + 'PaddingBottom'], i);
  }
  function ml(e, t) {
    return t > e.minScrollOffset
      ? t - e.minScrollOffset
      : t < e.maxScrollOffset
      ? t - e.maxScrollOffset
      : void 0;
  }
  function gl(e, t) {
    return (
      t > e.minScrollOffset
        ? (t = e.minScrollOffset)
        : t < e.maxScrollOffset && (t = e.maxScrollOffset),
      t
    );
  }
  function yl(e, t, n) {
    hl(e.element.scrollId, t, n);
    var i = tl.createEvent('HTMLEvents');
    if ((i.initEvent(t, !1, !0), (i.scrollObj = e), n))
      for (var o in n) i[o] = n[o];
    e.element.dispatchEvent(i), e.viewport.dispatchEvent(i);
  }
  function bl(e) {
    var t,
      n = { x: 0, y: 0 },
      i = getComputedStyle(e.element)[dl + 'Transform'],
      o = new RegExp(
        '^matrix3d\\((?:[-\\d.]+,\\s*){12}([-\\d.]+),\\s*([-\\d.]+)(?:,\\s*[-\\d.]+){2}\\)'
      ),
      r = new RegExp(
        '^matrix\\((?:[-\\d.]+,\\s*){4}([-\\d.]+),\\s*([-\\d.]+)\\)$'
      );
    return (
      'none' !== i &&
        (t = i.match(o) || i.match(r)) &&
        ((n.x = parseFloat(t[1]) || 0), (n.y = parseFloat(t[2]) || 0)),
      n
    );
  }
  var vl = ll ? 'MSCSSMatrix' : 'WebKitCSSMatrix',
    El = !!al || (vl in window && 'm11' in new window[vl]());
  function wl(e, t, n) {
    e.element.style[dl + 'Transition'] =
      '' === t && '' === n ? '' : cl + 'transform ' + t + ' ' + n + ' 0s';
  }
  function kl(e, t) {
    var n = 0,
      i = 0;
    'object' == typeof t
      ? ((n = t.x), (i = t.y))
      : 'y' === e.axis
      ? (i = t)
      : (n = t),
      (e.element.style[dl + 'Transform'] = (function(e, t) {
        return (
          0 != (e = parseFloat(e)) && (e += 'px'),
          0 != (t = parseFloat(t)) && (t += 'px'),
          El
            ? 'translate3d(' + e + ', ' + t + ', 0)'
            : 'translate(' + e + ', ' + t + ')'
        );
      })(n, i));
  }
  var xl = !1;
  function _l(e, t) {
    var n,
      i,
      o,
      r,
      s,
      a = this;
    if (
      (((t = t || {}).noBounce = !!t.noBounce),
      (t.padding = t.padding || {}),
      null == t.isPrevent ? (t.isPrevent = !0) : (t.isPrevent = !!t.isPrevent),
      null == t.isFixScrollendClick
        ? (t.isFixScrollendClick = !0)
        : (t.isFixScrollendClick = !!t.isFixScrollendClick),
      t.padding
        ? ((t.yPaddingTop = -t.padding.top || 0),
          (t.yPaddingBottom = -t.padding.bottom || 0),
          (t.xPaddingTop = -t.padding.left || 0),
          (t.xPaddingBottom = -t.padding.right || 0))
        : ((t.yPaddingTop = 0),
          (t.yPaddingBottom = 0),
          (t.xPaddingTop = 0),
          (t.xPaddingBottom = 0)),
      (t.direction = t.direction || 'y'),
      (t.inertia = t.inertia || 'normal'),
      (this.options = t),
      (a.axis = t.direction),
      (this.element = e),
      (this.viewport = e.parentNode),
      (this.plugins = {}),
      (this.element.scrollId = setTimeout(function() {
        il[a.element.scrollId + ''] = a;
      }, 1)),
      this.viewport.addEventListener(
        'touchstart',
        function(e) {
          if (!f(e)) return;
          i && g();
          if (t.useFrameAnimation) h && h.stop(), (h = null);
          else {
            var n = bl(a);
            kl(a, n), wl(a, '', ''), (p = null), clearTimeout(u);
          }
        },
        !1
      ),
      this.viewport.addEventListener('touchend', m, !1),
      this.viewport.addEventListener('touchcancel', m, !1),
      this.viewport.addEventListener(
        'panstart',
        function(e) {
          if (!f(e)) return;
          (a.transformOffset = bl(a)),
            (a.minScrollOffset = ul(a)),
            (a.maxScrollOffset = fl(a)),
            (n = 2.5),
            (r = !0),
            (i = !0),
            (o = !1),
            yl(a, 'scrollstart'),
            (s = e['displacement' + a.axis.toUpperCase()]);
        },
        !1
      ),
      this.viewport.addEventListener(
        'panmove',
        function(e) {
          if (!f(e)) return;
          var t = e['displacement' + a.axis.toUpperCase()];
          if (Math.abs(t - s) < 5) return void e.stopPropagation();
          s = t;
          var i = a.transformOffset[a.axis] + t;
          i > a.minScrollOffset
            ? ((i = a.minScrollOffset + (i - a.minScrollOffset) / n),
              (n *= 1.003))
            : i < a.maxScrollOffset &&
              ((i = a.maxScrollOffset - (a.maxScrollOffset - i) / n),
              (n *= 1.003));
          n > 4 && (n = 4);
          var o = ml(a, i);
          o &&
            (yl(
              a,
              o > 0
                ? 'y' === a.axis
                  ? 'pulldown'
                  : 'pullright'
                : 'y' === a.axis
                ? 'pullup'
                : 'pullleft',
              { boundaryOffset: Math.abs(o) }
            ),
            a.options.noBounce && (i = gl(a, i)));
          kl(a, i.toFixed(2)), yl(a, 'scrolling');
        },
        !1
      ),
      this.viewport.addEventListener(
        'panend',
        function(e) {
          if (!f(e)) return;
          e.isSwipe &&
            (function(e) {
              var n, s, l, c, p, u, f, m, y, b, v, E, w, k, x, _, A;
              if (((r = !0), (c = bl(a)[a.axis]), !ml(a, c))) {
                n = e['velocity' + a.axis.toUpperCase()];
                var C = 2,
                  T = 0.0015;
                t.inertia &&
                  sl[t.inertia] &&
                  ((C = sl[t.inertia][0]), (T = sl[t.inertia][1])),
                  n > C && (n = C),
                  n < -C && (n = -C),
                  (s = T * (n / Math.abs(n))),
                  (u = new lib.motion({ v: n, a: -s })),
                  (l = u.t),
                  (p = c + u.s);
                var S = ml(a, p);
                if (S) {
                  hl('inertial calculation has exceeded the boundary', S),
                    (f = n),
                    (m = s),
                    S > 0
                      ? ((b = a.minScrollOffset), (E = 1))
                      : ((b = a.maxScrollOffset), (E = -1)),
                    (v = new lib.motion({
                      v: E * f,
                      a: -E * m,
                      s: Math.abs(b - c)
                    })),
                    (y = v.t);
                  var M = v.generateCubicBezier();
                  (k = ((w = f - m * y) / Math.abs(w)) * 0.03),
                    (A = new lib.motion({ v: w, a: -k })),
                    (x = A.t),
                    (_ = b + A.s);
                  A.generateCubicBezier();
                  if (t.noBounce)
                    if ((hl('no bounce effect'), c !== b))
                      if (t.useFrameAnimation) {
                        var O = b - c,
                          L = lib.cubicbezier(
                            M[0][0],
                            M[0][1],
                            M[1][0],
                            M[1][1]
                          );
                        (h = new lib.animation(y.toFixed(0), L, 0, function(
                          e,
                          t
                        ) {
                          var n = c + O * t;
                          bl(a, n.toFixed(2)),
                            yl(a, 'scrolling', { afterFlick: !0 });
                        })).onend(g),
                          h.play();
                      } else {
                        var I = b.toFixed(0);
                        d(g, 1e3 * (y / 1e3).toFixed(2)),
                          wl(
                            a,
                            (y / 1e3).toFixed(2) + 's',
                            'cubic-bezier(' + M + ')'
                          ),
                          kl(a, I);
                      }
                    else g();
                  else if (c !== _)
                    if (
                      (hl(
                        'scroll for inertia',
                        's=' + _.toFixed(0),
                        't=' + ((y + x) / 1e3).toFixed(2)
                      ),
                      t.useFrameAnimation)
                    ) {
                      var O = _ - c,
                        L = lib.cubicbezier.easeOut;
                      (h = new lib.animation((y + x).toFixed(0), L, 0, function(
                        e,
                        t
                      ) {
                        var n = c + O * t;
                        kl(a, n.toFixed(2)),
                          yl(a, 'scrolling', { afterFlick: !0 });
                      })).onend(function() {
                        if (a.enabled) {
                          var e = b - _,
                            t = lib.cubicbezier.ease;
                          (h = new lib.animation(400, t, 0, function(t, n) {
                            var i = _ + e * n;
                            kl(a, i.toFixed(2)),
                              yl(a, 'scrolling', { afterFlick: !0 });
                          })).onend(g),
                            h.play();
                        }
                      }),
                        h.play();
                    } else {
                      var I = _.toFixed(0);
                      d(function(e) {
                        if (a.enabled)
                          if (
                            (hl(
                              'inertial bounce',
                              's=' + b.toFixed(0),
                              't=400'
                            ),
                            _ !== b)
                          ) {
                            var t = b.toFixed(0);
                            wl(a, '0.4s', 'ease'), kl(a, t), d(g, 400);
                          } else g();
                      }, 1e3 * ((y + x) / 1e3).toFixed(2)),
                        wl(a, ((y + x) / 1e3).toFixed(2) + 's', 'ease-out'),
                        kl(a, I);
                    }
                  else g();
                } else {
                  hl("inertial calculation hasn't exceeded the boundary");
                  var D = u.generateCubicBezier();
                  if (t.useFrameAnimation) {
                    var O = p - c,
                      L = lib.cubicbezier(D[0][0], D[0][1], D[1][0], D[1][1]);
                    (h = new lib.animation(l.toFixed(0), L, 0, function(e, t) {
                      var n = (c + O * t).toFixed(2);
                      kl(a, n), yl(a, 'scrolling', { afterFlick: !0 });
                    })).onend(g),
                      h.play();
                  } else {
                    var I = p.toFixed(0);
                    d(g, 1e3 * (l / 1e3).toFixed(2)),
                      wl(
                        a,
                        (l / 1e3).toFixed(2) + 's',
                        'cubic-bezier(' + D + ')'
                      ),
                      kl(a, I);
                  }
                }
                (o = !0),
                  t.useFrameAnimation ||
                    lib.animation.requestFrame(function e() {
                      i &&
                        o &&
                        a.enabled &&
                        (yl(a, 'scrolling', { afterFlick: !0 }),
                        lib.animation.requestFrame(e));
                    });
              }
            })(e);
        },
        !1
      ),
      t.isPrevent &&
        (this.viewport.addEventListener(
          'touchstart',
          function(e) {
            xl = !0;
          },
          !1
        ),
        a.viewport.addEventListener(
          'touchend',
          function(e) {
            xl = !1;
          },
          !1
        )),
      t.isFixScrollendClick)
    ) {
      var l, c;
      this.viewport.addEventListener(
        'scrolling',
        function() {
          (l = !0),
            c && clearTimeout(c),
            (c = setTimeout(function(e) {
              l = !1;
            }, 400));
        },
        !1
      ),
        this.viewport.addEventListener('click', function(e) {
          return (!l && !i) || (e.preventDefault(), e.stopPropagation(), !1);
        }),
        this.viewport.addEventListener('tap', function(e) {
          l ||
            i ||
            setTimeout(function() {
              var t = document.createEvent('HTMLEvents');
              t.initEvent('niceclick', !0, !0), e.target.dispatchEvent(t);
            }, 300);
        });
    }
    function d(e, n) {
      t.useFrameAnimation ||
        ((p = null),
        clearTimeout(u),
        (u = setTimeout(function() {
          p && ((p = null), lib.animation.requestFrame(e));
        }, n || 400)),
        (p = e));
    }
    if (t.useFrameAnimation) {
      var h;
      Object.defineProperty(this, 'animation', {
        get: function() {
          return h;
        }
      });
    } else {
      var p,
        u = 0;
      e.addEventListener(
        al ? 'transitionend' : dl + 'TransitionEnd',
        function(e) {
          if (p) {
            var t = p;
            (p = null),
              clearTimeout(u),
              lib.animation.requestFrame(function() {
                t(e);
              });
          }
        },
        !1
      );
    }
    function f(e) {
      if (!a.enabled) return !1;
      if (void 0 !== e.isVertical) {
        if (
          !(
            ('y' === a.axis && e.isVertical) ||
            ('x' === a.axis && !e.isVertical)
          )
        )
          return !1;
        e.stopPropagation();
      }
      return !0;
    }
    function m(e) {
      if (f(e)) {
        var n = bl(a)[a.axis],
          o = ml(a, n);
        if (o) {
          var r = gl(a, n);
          if (t.useFrameAnimation) {
            var s = r - n;
            (h = new lib.animation(400, lib.cubicbezier.ease, 0, function(
              e,
              t
            ) {
              var i = (n + s * t).toFixed(2);
              kl(a, i), yl(a, 'scrolling');
            })).onend(g),
              h.play();
          } else {
            var l = r.toFixed(0);
            d(g, 400),
              wl(a, '0.4s', 'ease'),
              kl(a, l),
              lib.animation.requestFrame(function e() {
                i &&
                  a.enabled &&
                  (yl(a, 'scrolling'), lib.animation.requestFrame(e));
              });
          }
          o > 0
            ? yl(a, 'y' === a.axis ? 'pulldownend' : 'pullrightend')
            : o < 0 && yl(a, 'y' === a.axis ? 'pullupend' : 'pullleftend');
        } else i && g();
      }
    }
    function g() {
      a.enabled &&
        ((r = !1),
        setTimeout(function() {
          !r &&
            i &&
            ((i = !1),
            (o = !1),
            t.useFrameAnimation ? (h && h.stop(), (h = null)) : wl(a, '', ''),
            yl(a, 'scrollend'));
        }, 50));
    }
    Object.defineProperty(this, 'isScrolling', {
      get: function() {
        return !!i;
      }
    });
    var y = {
      init: function() {
        return this.enable(), this.refresh(), this.scrollTo(0), this;
      },
      enable: function() {
        return (this.enabled = !0), this;
      },
      disable: function() {
        var e = this.element;
        return (
          (this.enabled = !1),
          this.options.useFrameAnimation
            ? h && h.stop()
            : lib.animation.requestFrame(function() {
                e.style[dl + 'Transform'] = getComputedStyle(e)[
                  dl + 'Transform'
                ];
              }),
          this
        );
      },
      getScrollWidth: function() {
        return pl(this.element).width;
      },
      getScrollHeight: function() {
        return pl(this.element).height;
      },
      getScrollLeft: function() {
        return -bl(this).x - this.options.xPaddingTop;
      },
      getScrollTop: function() {
        return -bl(this).y - this.options.yPaddingTop;
      },
      getMaxScrollLeft: function() {
        return -a.maxScrollOffset - this.options.xPaddingTop;
      },
      getMaxScrollTop: function() {
        return -a.maxScrollOffset - this.options.yPaddingTop;
      },
      getBoundaryOffset: function() {
        return Math.abs(ml(this, bl(this)[this.axis]) || 0);
      },
      refresh: function() {
        var e = this.element,
          t = 'y' === this.axis,
          n = t ? 'height' : 'width';
        function i(e, t) {
          var n = t ? ['top', 'bottom'] : ['left', 'right'];
          return (
            parseFloat(
              getComputedStyle(e.firstElementChild)['margin-' + n[0]]
            ) +
            parseFloat(getComputedStyle(e.lastElementChild)['margin-' + n[1]])
          );
        }
        if (null != this.options[n]) this.options[n];
        else if (e.childElementCount <= 0) (e.style[n] = 'auto'), null;
        else if (this.options.useElementRect)
          (e.style[n] = 'auto'), (r = pl(e))[n], i(e, t);
        else {
          var o,
            r,
            s = e.firstElementChild,
            a = e.lastElementChild;
          if (
            (document.createRange &&
              !this.options.ignoreOverflow &&
              ((o = document.createRange()).selectNodeContents(e), (r = pl(o))),
            r)
          )
            r[n];
          else {
            for (; s && 0 === pl(s)[n] && s.nextElementSibling; )
              s = s.nextElementSibling;
            for (; a && a !== s && 0 === pl(a)[n] && a.previousElementSibling; )
              a = a.previousElementSibling;
            pl(a)[t ? 'bottom' : 'right'] - pl(s)[t ? 'top' : 'left'];
          }
          i(e, t);
        }
        return (
          (e.style[n] = 'width' === n ? 'fit-content' : 'auto'),
          (this.transformOffset = bl(this)),
          (this.minScrollOffset = ul(this)),
          (this.maxScrollOffset = fl(this)),
          this.scrollTo(
            -this.transformOffset[this.axis] -
              this.options[this.axis + 'PaddingTop']
          ),
          yl(this, 'contentrefresh'),
          this
        );
      },
      offset: function(e) {
        var t,
          n = pl(this.element),
          i = pl(e);
        'y' === this.axis
          ? ((t = {
              top: i.top - n.top - this.options.yPaddingTop,
              left: i.left - n.left,
              right: n.right - i.right,
              width: i.width,
              height: i.height
            }).bottom = t.top + t.height)
          : ((t = {
              top: i.top - n.top,
              bottom: n.bottom - i.bottom,
              left: i.left - n.left - this.options.xPaddingTop,
              width: i.width,
              height: i.height
            }).right = t.left + t.width);
        return t;
      },
      getRect: function(e) {
        var t,
          n = pl(this.viewport),
          i = pl(e);
        'y' === this.axis
          ? ((t = {
              top: i.top - n.top,
              left: i.left - n.left,
              right: n.right - i.right,
              width: i.width,
              height: i.height
            }).bottom = t.top + t.height)
          : ((t = {
              top: i.top - n.top,
              bottom: n.bottom - i.bottom,
              left: i.left - n.left,
              width: i.width,
              height: i.height
            }).right = t.left + t.width);
        return t;
      },
      isInView: function(e) {
        var t = this.getRect(this.viewport),
          n = this.getRect(e);
        return 'y' === this.axis
          ? t.top < n.bottom && t.bottom > n.top
          : t.left < n.right && t.right > n.left;
      },
      scrollTo: function(e, t) {
        var n = this;
        this.element;
        if (
          ((e = gl(this, (e = -e - this.options[this.axis + 'PaddingTop']))),
          (i = !0),
          !0 === t)
        )
          if (this.options.useFrameAnimation) {
            var o = bl(n)[this.axis],
              r = e - o;
            (h = new lib.animation(400, lib.cubicbezier.easeInOut, 0, function(
              e,
              t
            ) {
              var i = (o + r * t).toFixed(2);
              kl(n, i), yl(n, 'scrolling');
            })).onend(g),
              h.play();
          } else {
            d(g, 400),
              wl(n, '0.4s', 'ease-in-out'),
              kl(n, e),
              lib.animation.requestFrame(function e() {
                i &&
                  n.enabled &&
                  (yl(n, 'scrolling'), lib.animation.requestFrame(e));
              });
          }
        else this.options.useFrameAnimation || wl(n, '', ''), kl(n, e), g();
        return this;
      },
      scrollToElement: function(e, t, n) {
        var i = this.offset(e);
        return (
          (i = i['y' === this.axis ? 'top' : 'left']),
          n && (i += n),
          this.scrollTo(i, t)
        );
      },
      getViewWidth: function() {
        return pl(this.viewport).width;
      },
      getViewHeight: function() {
        return pl(this.viewport).height;
      },
      addPulldownHandler: function(e) {
        var t = this;
        return (
          this.element.addEventListener(
            'pulldownend',
            function(n) {
              t.disable(),
                e.call(t, n, function() {
                  t.scrollTo(0, !0), t.refresh(), t.enable();
                });
            },
            !1
          ),
          this
        );
      },
      addPullupHandler: function(e) {
        var t = this;
        return (
          this.element.addEventListener(
            'pullupend',
            function(n) {
              t.disable(),
                e.call(t, n, function() {
                  t.scrollTo(t.getScrollHeight(), !0), t.refresh(), t.enable();
                });
            },
            !1
          ),
          this
        );
      },
      addScrollstartHandler: function(e) {
        var t = this;
        return (
          this.element.addEventListener(
            'scrollstart',
            function(n) {
              e.call(t, n);
            },
            !1
          ),
          this
        );
      },
      addScrollingHandler: function(e) {
        var t = this;
        return (
          this.element.addEventListener(
            'scrolling',
            function(n) {
              e.call(t, n);
            },
            !1
          ),
          this
        );
      },
      addScrollendHandler: function(e) {
        var t = this;
        return (
          this.element.addEventListener(
            'scrollend',
            function(n) {
              e.call(t, n);
            },
            !1
          ),
          this
        );
      },
      addContentrenfreshHandler: function(e) {
        var t = this;
        this.element.addEventListener(
          'contentrefresh',
          function(n) {
            e.call(t, n);
          },
          !1
        );
      },
      addEventListener: function(e, t, n) {
        var i = this;
        this.element.addEventListener(
          e,
          function(e) {
            t.call(i, e);
          },
          !!n
        );
      },
      removeEventListener: function(e, t) {
        var n = this;
        this.element.removeEventListener(e, function(e) {
          t.call(n, e);
        });
      },
      enablePlugin: function(e, t) {
        var n = ol[e];
        return (
          n &&
            !this.plugins[e] &&
            ((this.plugins[e] = !0), (t = t || {}), n.call(this, e, t)),
          this
        );
      }
    };
    for (var b in y) this[b] = y[b];
  }
  tl.addEventListener(
    'touchmove',
    function(e) {
      return !xl;
    },
    !1
  ),
    (lib.scroll = function(e, t) {
      if (1 === arguments.length && !(arguments[0] instanceof HTMLElement))
        if ((t = arguments[0]).scrollElement) e = t.scrollElement;
        else {
          if (!t.scrollWrap) throw new Error('no scroll element');
          e = t.scrollWrap.firstElementChild;
        }
      if (!e.parentNode) throw new Error('wrong dom tree');
      if (t && t.direction && ['x', 'y'].indexOf(t.direction) < 0)
        throw new Error('wrong direction');
      return !0 === t.downgrade && lib.scroll.downgrade
        ? lib.scroll.downgrade(e, t)
        : e.scrollId
        ? il[e.scrollId]
        : new _l(e, t);
    }),
    (lib.scroll.plugin = function(e, t) {
      if (!t) return ol[e];
      (e = e.split(',')).forEach(function(e) {
        ol[e] = t;
      });
    });
  const Al = {
      h: ['row', 'horizontal', 'h', 'x', 'column wrap'],
      v: ['column', 'vertical', 'v', 'y', 'row wrap']
    },
    Cl = 'column',
    Tl = 0;
  function Sl(e) {
    const t = e.Component;
    return {
      create: function(e) {
        const n = lib.scroll,
          i = t.prototype.create.call(this, e);
        return (
          i.classList.add('hap-container'),
          i.classList.add('scrollable-wrap'),
          (this.scrollElement = document.createElement('div')),
          this.scrollElement.classList.add('scrollable-element'),
          this.scrollElement.classList.add('dir-' + this.direction),
          (this.scrollElement.style.webkitBoxOrient = Al[this.direction][1]),
          (this.scrollElement.style.webkitFlexDirection =
            Al[this.direction][0]),
          (this.scrollElement.style.flexDirection = Al[this.direction][0]),
          (this.scrollElement.style.display = 'grid'),
          (this.scrollElement.style.flex = 1),
          i.appendChild(this.scrollElement),
          (this.scroller = new n({
            useElementRect: 'v' === this.direction,
            scrollElement: this.scrollElement,
            direction: 'h' === this.direction ? 'x' : 'y',
            noBounce: !0
          })),
          this.scroller.init(),
          (this.offset = 0),
          i
        );
      },
      createChildren: function() {
        const e = this.data.children,
          t = this.data.ref,
          n = this.getComponentManager();
        if (e && e.length) {
          const i = document.createDocumentFragment();
          let o = !1;
          for (let r = 0; r < e.length; r++) {
            e[r].instanceId = this.data.instanceId;
            const s = n.createElement(e[r]);
            i.appendChild(s.node),
              (s.parentRef = t),
              !o &&
                s.data.style &&
                s.data.style.hasOwnProperty('flex') &&
                (o = !0);
          }
          this.scrollElement.appendChild(i);
        }
        setTimeout(
          function() {
            this.scroller.refresh();
          }.bind(this),
          0
        );
      },
      appendChild: function(e) {
        const t = this.data.children,
          n = this.getComponentManager().createElement(e);
        return (
          this.scrollElement.appendChild(n.node),
          setTimeout(
            function() {
              this.scroller.refresh();
            }.bind(this),
            0
          ),
          t && t.length ? t.push(e) : (this.data.children = [e]),
          n
        );
      },
      insertBefore: function(e, t) {
        const n = this.data.children;
        let i = 0,
          o = !1;
        if (n && n.length && t) {
          let e;
          for (e = n.length; i < e && n[i].ref !== t.data.ref; i++);
          i === e && (o = !0);
        } else o = !0;
        if (o) this.scrollElement.appendChild(e.node), n.push(e.data);
        else {
          const o = t.refreshPlaceholder || t.loadingPlaceholder;
          o
            ? this.scrollElement.insertBefore(e.node, o)
            : t.fixedPlaceholder
            ? this.scrollElement.insertBefore(e.node, t.fixedPlaceholder)
            : t.stickyPlaceholder
            ? this.scrollElement.insertBefore(e.node, t.stickyPlaceholder)
            : this.scrollElement.insertBefore(e.node, t.node),
            n.splice(i, 0, e.data);
        }
        setTimeout(
          function() {
            this.scroller.refresh();
          }.bind(this),
          0
        );
      },
      removeChild: function(e) {
        const t = this.data.children;
        let n = 0;
        const i = this.getComponentManager();
        if (t && t.length) {
          let i;
          for (i = t.length; n < i && t[n].ref !== e.data.ref; n++);
          n < i && t.splice(n, 1);
        }
        i.removeComponent(e.data.ref);
        const o = e.refreshPlaceholder || e.loadingPlaceholder;
        e.unsetPosition(),
          o && this.scrollElement.removeChild(o),
          e.node.parentNode.removeChild(e.node),
          setTimeout(
            function() {
              this.scroller.refresh();
            }.bind(this),
            0
          );
      },
      bindEvents: function(e) {
        t.prototype.bindEvents.call(this, e),
          this.scroller.addEventListener(
            'scrolling',
            function(e) {
              if (this.scrollpage);
              else {
                const t = e.scrollObj,
                  n = t.getScrollTop(),
                  i = t.getScrollLeft(),
                  o = 'v' === this.direction ? n : i,
                  r = o - this.offset;
                this.dispatchEvent(
                  'scroll',
                  {
                    scrollY: 'v' === this.direction ? r : 0,
                    scrollX: 'v' === this.direction ? 0 : r,
                    scrollState: 0
                  },
                  { bubbles: !0 }
                ),
                  (this.offset = o);
                const s = Math.abs(t.maxScrollOffset) - this.offset;
                s <= this.loadmoreoffset && this.isAvailableToFireloadmore
                  ? ((this.isAvailableToFireloadmore = !1),
                    this.dispatchEvent('loadmore'),
                    this.dispatchEvent('scrollbottom'))
                  : s > this.loadmoreoffset &&
                    !this.isAvailableToFireloadmore &&
                    (this.isAvailableToFireloadmore = !0),
                  this.offset <= 0 && this.dispatchEvent('scrolltop');
              }
            }.bind(this)
          );
      },
      onAppend: function() {
        var e;
        (e = this).renderendHandler ||
          (e.renderendHandler = function() {
            e.scroller.refresh();
          }),
          window.addEventListener('renderend', e.renderendHandler);
      },
      onRemove: function() {
        var e;
        (e = this).renderendHandler &&
          window.removeEventListener('renderend', e.renderendHandler);
      }
    };
  }
  const Ml = {
    loadmoreoffset: function(e) {
      (e = parseFloat(e)) < 0 || isNaN(e)
        ? console.warn('[h5-render] invalid')
        : (this.loadmoreoffset = e);
    }
  };
  var Ol = {
    init: function(e) {
      const t = e.Component,
        n = e.utils.extend;
      function i(e, n) {
        (this.loadmoreoffset = Tl), (this.isAvailableToFireloadmore = !0);
        const i = e.attr || {},
          o =
            (e.style || {}).flexDirection ||
            i.scrollDirection ||
            i.direction ||
            Cl;
        (this.direction = -1 === Al.h.indexOf(o) ? 'v' : 'h'),
          (this.showScrollbar = i.showScrollbar || !1),
          t.call(this, e, n);
      }
      return (
        (i.prototype = Object.create(t.prototype)),
        n(i.prototype, Sl(e)),
        n(i.prototype, { attr: n(Object.create(t.prototype.attr), Ml) }),
        i
      );
    }
  };
  const Ll = ['list-item', 'cell', 'loading', 'refresh'];
  const Il = {
      columns: function(e) {
        this.scrollElement.style.gridTemplateColumns = `repeat(${e}, 1fr)`;
      },
      flexDirection: function(e) {
        const t = 'row' === e;
        (this.scrollElement.style.display = t ? 'flex' : 'grid'),
          (this.scrollElement.style.overflow = t ? 'auto hidden' : ''),
          this.node.setAttribute('direction', e);
      },
      display(e) {}
    },
    Dl = {
      scrollpage: function(e) {
        this._appended && Pl(this, e);
      }
    };
  var Nl = {
    init: function(e) {
      const t = Ol.init(e);
      function n(e, n) {
        t.call(this, e, n);
      }
      const i = e.utils.extend;
      return (
        (n.prototype = Object.create(t.prototype)),
        i(
          n.prototype,
          (function(e) {
            return {
              create(t) {
                const n = e.prototype.create.call(this, t);
                return (
                  n.classList.add('list-wrap'),
                  this.scrollElement.classList.add('list-element'),
                  this.data.props &&
                    this.data.props._isInTabContent &&
                    this.data.props.tabwrap &&
                    ((this.data.style &&
                      (!this.data.style ||
                        (this.data.style.height &&
                          '100%' !== this.data.style.height))) ||
                      (this.data.props.tabwrap.style.display = 'flex'),
                    this._setProps(this.data, { _isInTabContent: !1 })),
                  n
                );
              },
              createChildren() {
                return (
                  (this.data.children || []).forEach(function(e) {
                    const t = e.type;
                    -1 === Ll.indexOf(t) &&
                      console.warn(
                        '[h5-render] invalid child type "' + t + '" for list.'
                      );
                  }),
                  e.prototype.createChildren.call(this)
                );
              },
              appendChild(t) {
                const n = t.type;
                return (
                  -1 === Ll.indexOf(n) &&
                    console.warn(
                      '[h5-render] invalid child type "' + n + '" for list.'
                    ),
                  e.prototype.appendChild.call(this, t)
                );
              },
              insertBefore(t, n) {
                const i = t.data.type;
                return (
                  -1 === Ll.indexOf(i) &&
                    console.warn(
                      '[h5-render] invalid child type "' + i + '" for list.'
                    ),
                  e.prototype.insertBefore.call(this, t, n)
                );
              },
              onAppend() {
                var t;
                Pl(this),
                  (t = this)._getProps('_isInRefresh') &&
                    t._getProps('refreshComp') &&
                    t._getProps('refreshComp').updateScrollable(t),
                  e.prototype.onAppend.call(this);
              },
              scrollTo(e) {
                if (void 0 !== e.index) {
                  const t = this.scrollElement.children[e.index];
                  t && this.scroller.scrollToElement(t, !0);
                }
              }
            };
          })(t)
        ),
        i(n.prototype, { style: i(Object.create(t.prototype.style), Il) }),
        i(n.prototype, { attr: i(Object.create(t.prototype.attr), Dl) }),
        n
      );
    }
  };
  function Pl(e, t) {
    const n = e.getComponentManager(),
      i = n.getComponent(n.rootRef),
      o = e.getParent(),
      r =
        'boolean' == typeof t
          ? t
          : e.data.attr &&
            (!0 === e.data.attr.scrollpage ||
              'true' === e.data.attr.scrollpage);
    if (((e.scrollpage = r), !0 === r))
      console.warn('[h5-render] 暂不支持scrollpage属性，请使用手机调试');
    else {
      e.node.classList.add('scrollable-wrap'), (o.node.style.overflowY = '');
      const t = o && o.data.style;
      (!t || (t && !t.height)) &&
        ((o.node.style.height = '100%'),
        (i.node.style.height = (i.data.style && i.data.style.height) || '100%'),
        i.data && 'stack' === i.data.type && (i._needSetHeight = !1),
        (i.node.style.overflow = 'hidden'),
        '100%' === e.node.style.height &&
          'column' !== o.node.style.flexDirection &&
          ((o.node.style.height = '-webkit-fill-available'),
          (e.node.style.height = 'auto')));
    }
    e.data.attr &&
      ((e.data.attr.scrollpage = r), e.node.setAttribute('scrollpage', r));
  }
  var Fl = {
    init: function(e) {
      const t = Nl.init(e);
      function n(e, n) {
        t.call(this, e, n);
      }
      (n.prototype = Object.create(t.prototype)),
        e.registerComponent('list', n),
        e.registerComponent('vlist', n);
    }
  };
  var Rl = {
    init: function(e) {
      const t = Nl.init(e);
      function n(e, n) {
        (e.attr.direction = 'h'), t.call(this, e, n);
      }
      (n.prototype = Object.create(t.prototype)),
        e.registerComponent('hlist', n);
    }
  };
  const Bl = {
      create(e) {
        const t = document.createElement(e);
        return t.classList.add('hap-list-item'), t;
      }
    },
    jl = {
      columnSpan: function(e) {
        this.node.style.gridColumn = `1 / span ${e}`;
      },
      width: function(e) {
        this.node.style.width = '100%' === e ? '-webkit-fill-available' : e;
      },
      position: function(e) {}
    };
  var $l = {
    init: function(e) {
      const t = e.Component;
      function n(e, n) {
        t.call(this, e, n);
      }
      const i = e.utils.extend;
      (n.prototype = Object.create(t.prototype)),
        i(n.prototype, Bl),
        i(n.prototype, { style: i(Object.create(t.prototype.style), jl) }),
        e.registerComponent('list-item', n);
    }
  };
  var zl = {
    init: function(e) {
      e.install(Fl), e.install(Rl), e.install($l);
    }
  };
  var Hl = {
    init: function(e) {
      const t = Ol.init(e);
      function n(e, n) {
        t.call(this, e, n);
      }
      const i = e.utils.extend;
      (n.prototype = Object.create(t.prototype)),
        i(n.prototype, {
          create() {
            const e = t.prototype.create.call(this);
            return (
              e.classList.add('scroller-wrap'),
              this.scrollElement.classList.add('scroller-element'),
              e
            );
          }
        }),
        e.registerComponent('scroller', n);
    }
  };
  e(
    '.hap-refresh{box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;flex:0 1 auto;z-index:0;width:100%;max-width:100%;pointer-events:auto}.mui-refresh-main{position:fixed;top:0;opacity:0;-webkit-transform:scale(0);left:50%;margin-left:-34px;padding:9px;z-index:10001;background-color:#fff;overflow:hidden;border-radius:999px;box-shadow:0 3px 8px 0 rgba(0,0,0,.19),0 6px 13px 0 rgba(0,0,0,.24);-webkit-box-shadow:0 3px 8px 0 rgba(0,0,0,.19),0 6px 13px 0 rgba(0,0,0,.24)}.mui-refresh-main-animat{-webkit-transition:all .43s cubic-bezier(.08,.55,.81,1.8)}.mui-refresh-nav{-webkit-transform:scale(1)}.mui-refresh-noshow{opacity:0;-webkit-transform:scale(.01)!important;-webkit-transition:all .25s ease-in-out!important}.mui-refresh-wrapper{width:50px;height:50px}.mui-arrow-wrapper{-webkit-transition:all .2s ease}.mui-arrow-main,.mui-half-circle{position:absolute;top:0;width:50px;height:50px;box-sizing:border-box;border:3px solid;border-color:#000 #000 transparent;border-radius:999px}.mui-arrow-main{margin-top:10px;-webkit-transform:rotate(-37deg)}.mui-arrow-main:before{content:"";display:block;position:relative;top:30px;left:0;width:0;height:0;border-width:6px;border-style:solid;transform:rotate(-56deg);-webkit-transform:rotate(-56deg)}.mui-spinner-main{width:50px;height:50px;position:relative}.mui-spinner-main .mui-spinner-left,.mui-spinner-main .mui-spinner-right{position:absolute;top:0;height:50px;width:26px;overflow:hidden}.mui-spinner-main .mui-spinner-left{left:0}.mui-spinner-main .mui-spinner-left .mui-half-circle{left:0;border-right-color:transparent}.mui-spinner-main .mui-spinner-right{right:0}.mui-spinner-main .mui-spinner-right .mui-half-circle{right:0;border-left-color:transparent}.mui-black-theme .mui-arrow-main{border-color:#000 #000 transparent}.mui-black-theme .mui-arrow-main:before{border-color:#000 #fff #fff}.mui-black-theme .mui-spinner-main .mui-spinner-left .mui-half-circle,.mui-black-theme .mui-spinner-main .mui-spinner-right .mui-half-circle{border-top-color:#000}.mui-black-theme .mui-spinner-main .mui-spinner-left .mui-half-circle{border-left-color:#000}.mui-black-theme .mui-spinner-main .mui-spinner-right .mui-half-circle{border-right-color:#000}.mui-spinner-wrapper{-webkit-animation:outer-rotate 2.91667s linear infinite;animation:outer-rotate 2.91667s linear infinite}.mui-spinner-main{-webkit-animation:sporadic-rotate 5.25s cubic-bezier(.35,0,.25,1) infinite;animation:sporadic-rotate 5.25s cubic-bezier(.35,0,.25,1) infinite}.mui-spinner-main .mui-spinner-left .mui-half-circle,.mui-spinner-main .mui-spinner-right .mui-half-circle{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-duration:1.3125s;animation-duration:1.3125s;-webkit-animation-timing-function:cubic-bezier(.35,0,.25,1);animation-timing-function:cubic-bezier(.35,0,.25,1)}.mui-spinner-main .mui-spinner-left .mui-half-circle{-webkit-animation-name:left-wobble;animation-name:left-wobble}.mui-spinner-main .mui-spinner-right .mui-half-circle{-webkit-animation-name:right-wobble;animation-name:right-wobble}@-moz-keyframes outer-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes outer-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-o-keyframes outer-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes outer-rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-moz-keyframes left-wobble{0%,to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}}@-webkit-keyframes left-wobble{0%,to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}}@-o-keyframes left-wobble{0%,to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}}@keyframes left-wobble{0%,to{-webkit-transform:rotate(130deg);transform:rotate(130deg)}50%{-webkit-transform:rotate(-5deg);transform:rotate(-5deg)}}@-moz-keyframes right-wobble{0%,to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}}@-webkit-keyframes right-wobble{0%,to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}}@-o-keyframes right-wobble{0%,to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}}@keyframes right-wobble{0%,to{-webkit-transform:rotate(-130deg);transform:rotate(-130deg)}50%{-webkit-transform:rotate(5deg);transform:rotate(5deg)}}@-moz-keyframes sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(3turn);transform:rotate(3turn)}}@-webkit-keyframes sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(3turn);transform:rotate(3turn)}}@-o-keyframes sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(3turn);transform:rotate(3turn)}}@keyframes sporadic-rotate{12.5%{-webkit-transform:rotate(135deg);transform:rotate(135deg)}25%{-webkit-transform:rotate(270deg);transform:rotate(270deg)}37.5%{-webkit-transform:rotate(405deg);transform:rotate(405deg)}50%{-webkit-transform:rotate(540deg);transform:rotate(540deg)}62.5%{-webkit-transform:rotate(675deg);transform:rotate(675deg)}75%{-webkit-transform:rotate(810deg);transform:rotate(810deg)}87.5%{-webkit-transform:rotate(945deg);transform:rotate(945deg)}to{-webkit-transform:rotate(3turn);transform:rotate(3turn)}}',
    void 0
  );
  const Yl = 'mui-refresh-noshow',
    Wl = 'mui-refresh-main-animat',
    Ul = 'mui-black-theme',
    Vl = -85,
    Gl = 0,
    Jl = 60,
    Zl = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    ql = { top: 0, x1: 0, x2: 0, y1: 0, y2: 0 };
  class Kl {
    constructor(e) {
      (e = e || {}),
        function() {
          (this.scrollEl = document.body),
            (this.scrollableList = []),
            (this.isShowLoading = !1),
            (this.isStoping = !1),
            (this.isBtnAction = !1),
            (this.isTouching = !1),
            (this.NUM_POS_TARGET_Y = 12),
            (this.NUM_POS_MAX_Y = 160),
            (this.touchCurrentY = 0),
            (this.touchStartY = 0),
            (this.circlePosY = 0),
            (this.maxRotateTime = 6e4),
            (this.onBtnBegin = null),
            (this.onBtnEnd = null),
            (this.stopAnimatTimeout = null);
        }.call(this),
        (this.scrollEl = e.scrollEl
          ? e.scrollEl
          : Zl
          ? this.scrollEl
          : document),
        (this.onBegin = e.onBegin),
        (this.onEnd = e.onEnd),
        (this.maxRotateTime = e.maxTime || this.maxRotateTime),
        (this.refreshNav = e.nav || ''),
        (this.$refreshMain = e.refreshEl),
        (this.$spinnerWrapper = this.$refreshMain.querySelector(
          '.mui-spinner-wrapper'
        )),
        (this.$arrowWrapper = this.$refreshMain.querySelector(
          '.mui-arrow-wrapper'
        )),
        (this.$arrowMain = this.$refreshMain.querySelector('.mui-arrow-main')),
        e.index && (this.$refreshMain.style.zIndex = ~~e.index),
        e.top && (this.$refreshMain.style.top = e.top),
        e.theme
          ? this.$refreshMain.classList.add(e.theme)
          : this.$refreshMain.classList.add(Ul),
        e.tabIndex &&
          (this.$refreshMain.style.left = `${100 * e.tabIndex + 50}%`),
        this.$refreshMain.classList.add(Wl),
        e.freeze || rc.call(this);
    }
    resolve() {
      !this.isStoping &&
        this.stopAnimatTimeout &&
        (clearTimeout(this.stopAnimatTimeout),
        (this.stopAnimatTimeout = null),
        oc.call(this));
    }
    destroy() {
      sc.call(this), (this.$refreshMain = ''), (this.scrollableList = []);
    }
    refresh(e) {
      if (!this.isShowLoading) {
        const t = Jl + this.NUM_POS_TARGET_Y;
        (this.isShowLoading = !0),
          (this.isBtnAction = !0),
          (e = e || {}),
          (this.onBtnBegin = e.onBegin),
          (this.onBtnEnd = e.onEnd),
          (this.$refreshMain.style.display = ''),
          this.$refreshMain.classList.remove(Wl),
          (this.$refreshMain.style.top = t + 'px'),
          (this.$refreshMain.style.webkitTransform = 'scale(0.01)'),
          setTimeout(ic.bind(this), 60);
      }
    }
    updateScrollable(e) {
      'list' === e.data.type && this.scrollableList.push(e.node.children[0]);
    }
    setBackGroundColor(e) {
      this.$refreshMain.style.backgroundColor = e;
      const t = document.styleSheets[4].cssRules[16];
      '.mui-black-theme .mui-arrow-main:before' === t.selectorText &&
        (t.style.borderRightColor = t.style.borderLeftColor = t.style.borderBottomColor = e);
    }
    setProgressColor(e) {
      const t = document.styleSheets[4].cssRules;
      '.mui-black-theme .mui-arrow-main' === t[15].selectorText &&
        (t[15].style.borderRightColor = t[15].style.borderLeftColor = t[15].style.borderTopColor = e),
        '.mui-black-theme .mui-arrow-main::before' === t[16].selectorText &&
          (t[16].style.borderTopColor = e),
        '.mui-black-theme .mui-spinner-main .mui-spinner-left .mui-half-circle, .mui-black-theme .mui-spinner-main .mui-spinner-right .mui-half-circle' ===
          t[17].selectorText && (t[17].style.borderTopColor = e),
        '.mui-black-theme .mui-spinner-main .mui-spinner-left .mui-half-circle' ===
          t[18].selectorText && (t[18].style.borderLeftColor = e),
        '.mui-black-theme .mui-spinner-main .mui-spinner-right .mui-half-circle' ===
          t[19].selectorText && (t[19].style.borderRightColor = e);
    }
    unbindEvents() {
      sc.call(this);
    }
    bindEvents() {
      rc.call(this);
    }
    changeOffest(e) {
      (this.NUM_POS_TARGET_Y = 12 + parseInt(e || 0)),
        (this.NUM_POS_MAX_Y = 160 + parseInt(e || 0));
    }
  }
  function Ql(e) {
    (this.isTouching = !0),
      Zl && this.scrollEl === document.body
        ? (ql.top = window.scrollY)
        : this.scrollEl !== document
        ? (ql.top = this.scrollEl.scrollTop)
        : (ql.top = (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop),
      ql.top > 0 ||
        this.isShowLoading ||
        ((this.circlePosY = Jl + Vl),
        (this.$refreshMain.style.display = ''),
        (this.$spinnerWrapper.style.display = 'none'),
        (e = e.originalEvent || e).touches[0] &&
          (this.touchCurrentY = this.touchStartY = e.touches[0].pageY));
  }
  function Xl(e) {
    if (
      ((e = e.originalEvent || e),
      ql.top > 0 || this.isShowLoading || !e.touches || 1 !== e.touches.length)
    )
      return;
    if (this.scrollableList.length > 0)
      for (let e = 0; e < this.scrollableList.length; e++) {
        const t = this.scrollableList[e].style.transform,
          n = parseInt(t.split(',')[1]);
        if (n && n < 0) return;
      }
    const t = e.touches[0];
    this.touchCurrentY = t.pageY;
    const n = this.touchCurrentY - this.touchStartY;
    (this.circlePosY = Jl + Vl + n),
      n < Jl - Gl + this.NUM_POS_MAX_Y
        ? nc.call(this, n)
        : nc.call(this, Jl - Gl + this.NUM_POS_MAX_Y);
  }
  function ec(e) {
    (this.isTouching = !1),
      ql.top > 0 ||
        this.isShowLoading ||
        (this.circlePosY > Jl - Gl + this.NUM_POS_TARGET_Y
          ? ic.call(this)
          : tc.call(this));
  }
  function tc() {
    const e = Jl + Vl;
    (this.$refreshMain.style.top = e + 'px'),
      (this.$refreshMain.style.webkitTransform = 'scale(0)'),
      setTimeout(
        function() {
          this.isShowLoading ||
            this.isTouching ||
            ((this.$refreshMain.style.opacity = 0),
            (this.$refreshMain.style.display = 'none'));
        }.bind(this),
        300
      );
  }
  function nc(e) {
    const t = e / 100 > 1 ? 1 : e / 100 < 0 ? 0 : e / 100,
      n = Jl + Vl + e;
    (this.$refreshMain.style.webkitTransform = 'scale(1)'),
      (this.$refreshMain.style.opacity = t),
      (this.$refreshMain.style.top = n + 'px'),
      (this.$arrowMain.style.webkitTransform = 'rotate(' + -2 * e + 'deg)');
  }
  function ic() {
    if (
      ((this.isShowLoading = !0),
      this.isBtnAction && 'function' == typeof this.onBtnBegin
        ? this.onBtnBegin()
        : 'function' == typeof this.onBegin && this.onBegin(),
      (this.$refreshMain.style.opacity = 1),
      this.isBtnAction)
    )
      this.$refreshMain.classList.add(Wl),
        (this.$refreshMain.style.webkitTransform = 'scale(1)');
    else {
      const e = Jl + this.NUM_POS_TARGET_Y;
      this.$refreshMain.style.top = e + 'px';
    }
    (this.$arrowWrapper.style.display = 'none'),
      (this.$spinnerWrapper.style.display = ''),
      (this.stopAnimatTimeout = setTimeout(oc.bind(this), this.maxRotateTime));
  }
  function oc() {
    (this.isStoping = !0),
      this.$refreshMain.classList.add(Yl),
      (this.$spinnerWrapper.style.diplay = 'none'),
      setTimeout(
        function() {
          this.$refreshMain.classList.remove(Yl),
            (this.$refreshMain.style.display = 'none'),
            tc.call(this),
            (this.$arrowWrapper.style.display = ''),
            (this.isShowLoading = !1),
            (this.isStoping = !1),
            this.isBtnAction && 'function' == typeof this.onBtnEnd
              ? this.onBtnEnd()
              : 'function' == typeof this.onEnd && this.onEnd(),
            (this.isBtnAction = !1);
        }.bind(this),
        300
      );
  }
  function rc() {
    this.scrollEl.addEventListener('touchstart', Ql.bind(this)),
      this.scrollEl.addEventListener('touchmove', Xl.bind(this)),
      this.scrollEl.addEventListener('touchend', ec.bind(this));
  }
  function sc() {
    this.scrollEl.removeEventListener('touchstart', Ql.bind(this)),
      this.scrollEl.removeEventListener('touchmove', Xl.bind(this)),
      this.scrollEl.removeEventListener('touchend', ec.bind(this));
  }
  const ac = {
      create() {
        const e = document.createElement('refresh');
        e.classList.add('hap-refresh'),
          (this.muiRefresh = document.createElement('div')),
          this.muiRefresh.classList.add('mui-refresh-main');
        this.muiRefresh.innerHTML =
          '<div class="mui-refresh-wrapper">\n    <div class="mui-arrow-wrapper">\n        <div class="mui-arrow-main"></div>\n    </div>\n    <div class="mui-spinner-wrapper" style="display:none;">\n        <div class="mui-spinner-main" >\n            <div class="mui-spinner-left">\n                <div class="mui-half-circle"></div>\n            </div>\n            <div class="mui-spinner-right">\n                <div class="mui-half-circle"></div>\n            </div>\n        </div>\n    </div>\n  </div>';
        const t = function() {
          this.dispatchEvent('refresh', { refreshing: !0 });
        }.bind(this);
        return (
          (this.refresh = new Kl({
            scrollEl: e,
            refreshEl: this.muiRefresh,
            onBegin: t,
            tabIndex:
              this._getProps('_isInTabContent') && this._getProps('tabIndex')
          })),
          e.appendChild(this.muiRefresh),
          this._setProps(this.data, { _isInRefresh: !0, refreshComp: this }),
          e
        );
      },
      updateScrollable(e) {
        this.refresh.updateScrollable(e);
      }
    },
    lc = {
      refreshing: function(e) {
        (!1 !== e && 'false' !== e) || this.refresh.resolve(),
          (this.isRefreshing = e),
          this.node.setAttribute('refreshing', e);
      },
      offset: function(e) {
        this.refresh.changeOffest(e), this.node.setAttribute('offset', e);
      }
    },
    cc = {
      backgroundColor: function(e) {
        e && this.refresh.setBackGroundColor(e);
      },
      progressColor: function(e) {
        e && this.refresh.setProgressColor(e);
      }
    };
  var dc = {
    init: function(e) {
      const t = e.Component,
        n = e.utils.extend;
      function i(e) {
        (this.isRefreshing = !1), t.call(this, e);
      }
      (i.prototype = Object.create(t.prototype)),
        n(i.prototype, ac),
        n(i.prototype, { attr: n(Object.create(t.prototype.attr), lc) }),
        n(i.prototype, { style: n(Object.create(t.prototype.style), cc) }),
        e.registerComponent('refresh', i);
    }
  };
  e(
    '.hap-loading{overflow:hidden;position:absolute;bottom:0;left:0;width:100%;height:0}',
    void 0
  );
  const hc = ['scroller', 'list', 'vlist'],
    pc = 130,
    uc = 'center',
    fc = 'center';
  function mc(e) {
    (e.display = !0),
      (e.node.style.display = '-webkit-box'),
      (e.node.style.display = '-webkit-flex'),
      (e.node.style.display = 'flex');
  }
  const gc = {
      create() {
        const e = document.createElement('div');
        return (
          e.classList.add('hap-container'), e.classList.add('hap-loading'), e
        );
      },
      onAppend() {
        const e = this.getParent(),
          t = this,
          n = e.node.getBoundingClientRect().height;
        -1 !== hc.indexOf(e.data.type) &&
          ((this.loadingPlaceholder = document.createElement('div')),
          this.loadingPlaceholder.classList.add('hap-loading-placeholder'),
          (this.loadingPlaceholder.style.display = 'none'),
          (this.loadingPlaceholder.style.width = '0px'),
          (this.loadingPlaceholder.style.height = '0px'),
          (e.scrollElement || e.listElement).insertBefore(
            this.loadingPlaceholder,
            this.node
          ),
          e.node.appendChild(this.node),
          e.scroller.addEventListener('pullup', function(e) {
            if (t.isLoading) return;
            const i = e.scrollObj;
            var o, r;
            (o = t),
              (r = Math.abs(i.getScrollHeight() - i.getScrollTop() - n)),
              (o.node.style.height = r + 'px'),
              t.display || mc(t);
          }),
          e.scroller.addEventListener('pullupend', function(e) {
            var n;
            t.isLoading ||
              (((n = t).node.style.height = n.clamp + 'px'),
              n.dispatchEvent('loading'),
              (n.isLoading = !0));
          }));
      }
    },
    yc = {
      display: function(e) {
        'show' === e
          ? setTimeout(
              function() {
                mc(this);
              }.bind(this),
              0
            )
          : 'hide' === e
          ? setTimeout(
              function() {
                var e;
                ((e = this).display = !1),
                  (e.node.style.display = 'none'),
                  (e.isLoading = !1);
              }.bind(this),
              0
            )
          : console.error(
              "[h5-render] attr 'display' of <refresh>': value " +
                e +
                " is invalid. Should be 'show' or 'hide'"
            );
      }
    },
    bc = {
      height: function(e) {
        if (((e = parseFloat(e)), Number.isNaN(e) || e < 0))
          return console.warn(
            "[h5-render] <loading>'s height (" + e + ') is invalid.'
          );
        this.clamp = e;
      }
    };
  var vc = {
      init: function(e) {
        const t = e.Component,
          n = e.utils.extend;
        function i(e) {
          (this.clamp = e.style.height || pc),
            !e.style.alignItems && (e.style.alignItems = uc),
            !e.style.justifyContent && (e.style.justifyContent = fc),
            t.call(this, e);
        }
        (i.prototype = Object.create(t.prototype)),
          n(i.prototype, gc),
          n(i.prototype, { attr: yc }),
          n(i.prototype, { style: n(Object.create(t.prototype.style), bc) }),
          e.registerComponent('loading', i);
      }
    },
    Ec = {
      init: function(e) {
        e.install(zl), e.install(Hl), e.install(dc), e.install(vc);
      }
    };
  let wc, kc;
  e(
    '.hap-slider-container{position:relative;width:-webkit-fill-available;align-self:center;pointer-events:auto;height:37px;align-items:center}.hap-slider-container .range-bar{position:relative;width:100%;box-sizing:border-box;height:8px;border-radius:10px}.hap-slider-container .value-bar{position:absolute;left:0;top:0;height:100%;border-radius:10px}.hap-slider-container .block{position:absolute;width:27px;height:27px;top:-9px;left:0;border-radius:50%;background-color:#009688}',
    void 0
  );
  const xc = {
      create() {
        const e = document.createElement('div');
        return (
          e.classList.add('hap-slider-container'),
          e.classList.add('hap-container'),
          e
        );
      },
      createChildren() {
        const e = this.node,
          t = document.createElement('div'),
          n = document.createElement('div'),
          i = document.createElement('span');
        t.classList.add('range-bar'),
          n.classList.add('value-bar'),
          i.classList.add('block'),
          t.appendChild(n),
          t.appendChild(i),
          e.appendChild(t),
          (this.rangeBar = t),
          (this.valueBar = n),
          (this.block = i);
      },
      onAppend() {
        this.setBackground(), this.updateContainer();
        const e = this;
        let t;
        this.block.addEventListener('panstart', function(t) {
          const n = e.sliderStyle;
          t.preventDefault(),
            t.stopPropagation(),
            (kc =
              parseInt(window.getComputedStyle(e.node).width) -
              parseInt(n.paddingLeft) +
              parseInt(n.paddingRight));
        }),
          this.block.addEventListener('panmove', function(n) {
            e.isMoving = !0;
            const i = e.sliderAttrs;
            n.preventDefault(), n.stopPropagation();
            const o = parseInt((n.displacementX / kc) * 100),
              r = e.startX;
            (t = Math.floor((o + parseInt(r)) / i.step) * i.step),
              (i.value = i.min + Math.floor((t / 100) * (i.max - i.min))),
              e.setSlider();
          }),
          this.block.addEventListener('panend', function(n) {
            (e.isMoving = !1), (e.startX = t);
          }),
          wc.prototype.onAppend.call(this);
      },
      setSlider() {
        const e = this.valueBar,
          t = this.block,
          n = this.sliderAttrs;
        let i = Math.ceil(n.value / n.step) * n.step;
        i = i > n.max ? n.max : i < n.min ? n.min : i;
        let o = Math.round(((i - n.min) / (n.max - n.min)) * 100);
        (o = o > 100 ? 100 : o < 0 ? 0 : o),
          (e.style.width = `calc(${o}% + 10px)`),
          (t.style.left = `${o}%`),
          (n.value = i),
          this.dispatchEvent('change'),
          this.isMoving || (this.startX = o);
      },
      setBackground() {
        const e = this.rangeBar,
          t = this.valueBar;
        (e.style.backgroundColor = this.sliderStyle.color),
          (t.style.backgroundColor = this.sliderStyle.selectedColor);
      },
      updateContainer() {
        const e = this.node;
        (e.style.paddingLeft = this.sliderStyle.paddingLeft),
          (e.style.paddingRight = this.sliderStyle.paddingRight),
          this.setSlider();
      }
    },
    _c = {
      min: function(e) {
        (this.sliderAttrs.min = parseInt(e)),
          e > this.sliderAttrs.value && (this.sliderAttrs.value = e),
          this.setSlider();
      },
      max: function(e) {
        (this.sliderAttrs.max = e), this.setSlider();
      },
      value: function(e) {
        this.isMoving || ((this.sliderAttrs.value = e), this.setSlider());
      },
      step: function(e) {
        (this.sliderAttrs.step = e), this.setSlider();
      }
    },
    Ac = {
      selectedColor: function(e) {
        (this.sliderStyle.selectedColor = e), this.setBackground();
      },
      color: function(e) {
        (this.sliderStyle.color = e), this.setBackground();
      },
      paddingLeft: function(e) {
        (this.sliderStyle.paddingLeft = e), this.updateContainer();
      },
      paddingRight: function(e) {
        (this.sliderStyle.paddingRight = e), this.updateContainer();
      }
    },
    Cc = {
      change: {
        updator() {
          return { attrs: { value: this.sliderAttrs.value } };
        },
        extra() {
          return { progress: this.sliderAttrs.value };
        }
      }
    };
  var Tc = {
    init: function(e) {
      wc = e.Atomic;
      const t = e.utils.extend;
      function n(e) {
        this.isMoving = !1;
        const t = e.attr || {},
          n = e.style || {};
        (this.sliderAttrs = {
          min: t.min || 0,
          max: t.max || 100,
          step: t.step || 1,
          value: t.value || 0
        }),
          (this.sliderStyle = {
            selectedColor: n.selectedColor || 'rgb(0, 150, 136)',
            color: n.color || 'rgb(240, 240, 240)',
            paddingLeft: n.paddingLeft || '32px',
            paddingRight: n.paddingRight || '32px'
          }),
          wc.call(this, e);
      }
      (n.prototype = Object.create(wc.prototype)),
        t(n.prototype, xc),
        t(n.prototype, { attr: t(Object.create(wc.prototype.attr), _c) }),
        t(n.prototype, { style: Ac }),
        t(n.prototype, { event: Cc }),
        e.registerComponent('slider', n);
    }
  };
  e(
    '.progress-container{position:relative}.progress-container .range-bar{border-radius:10px;overflow:hidden}.progress-container .circle-container .circle{box-sizing:border-box;position:absolute;border-style:solid;border-radius:50%;animation:rotateCircle 1s cubic-bezier(.5,0,.5,1) infinite}.progress-container .circle-container div:first-child{animation-delay:-.375s}.progress-container .circle-container div:nth-child(2){animation-delay:-.25s}.progress-container .circle-container div:nth-child(3){animation-delay:-.125s}@keyframes rotateCircle{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',
    void 0
  );
  const Sc = {
      create() {
        const e = this.type,
          t = document.createElement('div');
        return (
          t.classList.add('hap-container'),
          t.classList.add('progress-container'),
          (this.node = t),
          'horizontal' === e ? this.setHorizontal() : this.setCircular(),
          t
        );
      },
      setHorizontal() {
        const e = this.node,
          t = document.createElement('div'),
          n = document.createElement('div');
        t.classList.add('range-bar'),
          n.classList.add('value-bar'),
          (e.style.width = '100%'),
          (t.style.backgroundColor = '#f0f0f0'),
          (t.style.width = '100%'),
          t.appendChild(n),
          (n.style.height = '100%'),
          (this.rangeBar = t),
          (this.valueBar = n),
          e.appendChild(t),
          this.updateHorizontalStyle();
      },
      setCircular() {
        const e = this.node,
          t = document.createElement('div'),
          n = document.createElement('div');
        t.classList.add('circle-container'),
          n.classList.add('circle'),
          t.appendChild(n),
          t.appendChild(n.cloneNode()),
          t.appendChild(n.cloneNode()),
          t.appendChild(n.cloneNode()),
          e.appendChild(t),
          (this.circles = t.childNodes),
          (this.circleContainer = t),
          this.updateCircleStyle();
      },
      updateHorizontalStyle() {
        const e = this.valueBar;
        e &&
          ((e.style.backgroundColor = this.color),
          (e.style.width = `${this.percent}%`),
          (this.rangeBar.style.height = `${this.strokeWidth}`));
      },
      updateCircleStyle() {
        const e = this.circles,
          t = this.circleSize,
          n = this.color,
          i = Math.round(t / 8);
        e &&
          ((this.circleContainer.style.width = `${Math.round(t + i)}px`),
          (this.circleContainer.style.height = `${Math.round(t + i)}px`),
          Array.prototype.forEach.call(e, function(e) {
            (e.style.width = `${t}px`),
              (e.style.height = `${t}px`),
              (e.style.borderWidth = `${i}px`),
              (e.style.borderColor = `${n} transparent transparent transparent`);
          }));
      }
    },
    Mc = {
      percent: function(e) {
        (this.percent = e), this.updateHorizontalStyle();
      }
    },
    Oc = {
      width: function(e) {
        (e = parseInt(e)),
          (this.circleWidth = e),
          this.hackCircleSize ||
            ((!this.circleHeight || e < this.circleHeight) &&
              ((this.circleSize = e), this.updateCircleStyle()));
      },
      height: function(e) {
        (e = parseInt(e)),
          (this.circleHeight = e),
          this.hackCircleSize ||
            ((!this.circleWidth || e < this.circleWidth) &&
              ((this.circleSize = e), this.updateCircleStyle()));
      },
      color: function(e) {
        (this.color = e),
          'horizontal' === this.type
            ? this.updateHorizontalStyle()
            : this.updateCircleStyle();
      },
      strokeWidth: function(e) {
        (this.strokeWidth = e),
          this.updateHorizontalStyle(),
          (this.hackCircleSize = this.circleSize = parseInt(e)),
          this.updateCircleStyle();
      }
    };
  var Lc = {
    init: function(e) {
      const t = e.Atomic,
        n = e.utils.extend;
      function i(e) {
        const n = e.attr || {},
          i = e.style || {};
        (this.type = n.type || 'horizontal'),
          (this.strokeWidth = i.strokeWidth || '32px'),
          (this.circleSize = 32),
          (this.color = i.color || '#33b4ff'),
          (this.data = e),
          t.call(this, e);
      }
      (i.prototype = Object.create(t.prototype)),
        n(i.prototype, Sc),
        n(i.prototype, { attr: n(Object.create(t.prototype.attr), Mc) }),
        n(i.prototype, { style: n(Object.create(t.prototype.style), Oc) }),
        e.registerComponent('progress', i);
    }
  };
  'undefined' == typeof window && (window = { ctrl: {}, lib: {} }),
    !window.ctrl && (window.ctrl = {}),
    !window.lib && (window.lib = {}),
    (function(e, t) {
      function n(e, t, n, i) {
        function o(e) {
          return (3 * a * e + 2 * l) * e + c;
        }
        function r(e) {
          return ((a * e + l) * e + c) * e;
        }
        var s = 1e-6,
          a = 3 * e - 3 * n + 1,
          l = 3 * n - 6 * e,
          c = 3 * e,
          d = 3 * t - 3 * i + 1,
          h = 3 * i - 6 * t,
          p = 3 * t;
        return function(e) {
          return (function(e) {
            return ((d * e + h) * e + p) * e;
          })(
            (function(e) {
              for (var t, n, i = e, a = 0; 8 > a; a++) {
                if (((n = r(i) - e), Math.abs(n) < s)) return i;
                if (((t = o(i)), Math.abs(t) < s)) break;
                i -= n / t;
              }
              var l = 1,
                c = 0;
              for (i = e; l > c; ) {
                if (((n = r(i) - e), Math.abs(n) < s)) return i;
                n > 0 ? (l = i) : (c = i), (i = (l + c) / 2);
              }
              return i;
            })(e)
          );
        };
      }
      (t.cubicbezier = n),
        (t.cubicbezier.linear = n(0, 0, 1, 1)),
        (t.cubicbezier.ease = n(0.25, 0.1, 0.25, 1)),
        (t.cubicbezier.easeIn = n(0.42, 0, 1, 1)),
        (t.cubicbezier.easeOut = n(0, 0, 0.58, 1)),
        (t.cubicbezier.easeInOut = n(0.42, 0, 0.58, 1));
    })(window, window.lib || (window.lib = {}));
  window.lib.cubicbezier;
  'undefined' == typeof window && (window = { ctrl: {}, lib: {} }),
    !window.ctrl && (window.ctrl = {}),
    !window.lib && (window.lib = {}),
    (function(e, t) {
      function n(e) {
        return setTimeout(e, d);
      }
      function i(e) {
        clearTimeout(e);
      }
      function o() {
        var e = {},
          t = new h(function(t, n) {
            (e.resolve = t), (e.reject = n);
          });
        return (e.promise = t), e;
      }
      function r(e, t) {
        return (
          ['then', 'catch'].forEach(function(n) {
            t[n] = function() {
              return e[n].apply(e, arguments);
            };
          }),
          t
        );
      }
      function s(t) {
        var n,
          i,
          a = !1;
        (this.request = function() {
          a = !1;
          var s = arguments;
          return (
            r((n = o()).promise, this),
            (i = p(function() {
              a || (n && n.resolve(t.apply(e, s)));
            })),
            this
          );
        }),
          (this.cancel = function() {
            return i && ((a = !0), u(i), n && n.reject('CANCEL')), this;
          }),
          (this.clone = function() {
            return new s(t);
          });
      }
      function a(e, t) {
        'function' == typeof t && (t = { 0: t });
        for (
          var n = e / d,
            i = 1 / n,
            o = [],
            r = Object.keys(t).map(function(e) {
              return parseInt(e);
            }),
            a = 0;
          n > a;
          a++
        ) {
          var l = r[0];
          if (null != l && 100 * (i * a) >= l) {
            var c = t['' + l];
            c instanceof s || (c = new s(c)), o.push(c), r.shift();
          } else o.length && o.push(o[o.length - 1].clone());
        }
        return o;
      }
      function l(e) {
        var n;
        return (
          'string' == typeof e || e instanceof Array
            ? t.cubicbezier
              ? 'string' == typeof e
                ? t.cubicbezier[e] && (n = t.cubicbezier[e])
                : e instanceof Array &&
                  4 === e.length &&
                  (n = t.cubicbezier.apply(t.cubicbezier, e))
              : console.error('require lib.cubicbezier')
            : 'function' == typeof e && (n = e),
          n
        );
      }
      function c(e, t, n) {
        var i,
          s = a(e, n),
          c = 1 / (e / d),
          h = 0;
        if (!l(t)) throw new Error('unexcept timing function');
        var p = !1;
        (this.play = function() {
          if (!p)
            return (
              (p = !0),
              i || r((i = o()).promise, this),
              (function e() {
                var n = c * (h + 1).toFixed(10);
                s[h].request(n.toFixed(10), t(n).toFixed(10)).then(
                  function() {
                    p &&
                      (h === s.length - 1
                        ? ((p = !1), i && i.resolve('FINISH'), (i = null))
                        : (h++, e()));
                  },
                  function() {}
                );
              })(),
              this
            );
        }),
          (this.stop = function() {
            return p ? ((p = !1), s[h] && s[h].cancel(), this) : void 0;
          });
      }
      var d = 1e3 / 60,
        h = e.Promise || (t.promise && t.promise.ES6Promise),
        p =
          window.requestAnimationFrame ||
          window.msRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          n,
        u =
          window.cancelAnimationFrame ||
          window.msCancelAnimationFrame ||
          window.webkitCancelAnimationFrame ||
          window.mozCancelAnimationFrame ||
          i;
      (p === n || u === i) && ((p = n), (u = i)),
        (t.animation = function(e, t, n) {
          return new c(e, t, n);
        }),
        (t.animation.frame = function(e) {
          return new s(e);
        }),
        (t.animation.requestFrame = function(e) {
          return new s(e).request();
        });
    })(window, window.lib || (window.lib = {}));
  window.lib.animation;
  e(
    '[data-ctrl-name=carrousel]{position:relative;-webkit-transform:translateZ(1px);-ms-transform:translateZ(1px);transform:translateZ(1px)}',
    void 0
  );
  var Ic = window.document,
    Dc = window.navigator.userAgent,
    Nc = !!Dc.match(/Firefox/i),
    Pc = !!Dc.match(/IEMobile/i),
    Fc = Nc ? 'Moz' : Pc ? 'ms' : 'webkit',
    Rc = xr,
    Bc = _r,
    jc = Pc ? 'MSCSSMatrix' : 'WebKitCSSMatrix',
    $c = !!Nc || (jc in window && 'm11' in new window[jc]());
  function zc(e, t) {
    return (
      0 != (e = parseFloat(e)) && (e += '%'),
      0 != (t = parseFloat(t)) && (t += '%'),
      $c
        ? 'translate3d(' + e + ', ' + t + ', 0)'
        : 'translate(' + e + ', ' + t + ')'
    );
  }
  var Hc = Array.prototype.slice;
  var Yc = 0;
  !lib && (lib = {}),
    (lib.carrousel = function(e, t) {
      var n = this,
        i = Date.now() + '-' + ++Yc,
        o = document.createDocumentFragment();
      1 !== arguments.length ||
        arguments[0] instanceof HTMLElement ||
        ((t = arguments[0]), (e = null)),
        e || ((e = document.createElement('ul')), o.appendChild(e)),
        (t = t || {}),
        e.setAttribute('data-ctrl-name', 'carrousel'),
        e.setAttribute('data-ctrl-id', i),
        (e.style.position = 'relative'),
        (e.style.width = '100%'),
        (e.style.height = '100%'),
        (e.style[Fc + 'Transform'] = zc(0, 0));
      var r,
        s = 0,
        a = 0,
        l = {},
        c = 0,
        d = 100,
        h = 0;
      function p(e) {
        for (; e < 0; ) e += c;
        for (; e >= c; ) e -= c;
        return e;
      }
      function u(e) {
        if (0 !== c) {
          var t,
            n,
            i = l.get(e);
          (h = i.index),
            c > 1 &&
              ((t = l.get(e - 1)),
              (n = 2 === c ? l.getCloned(e + 1) : l.get(e + 1)),
              (i.style.left = -a + '%'),
              (t.style.left = -a - d + '%'),
              (n.style.left = -a + d + '%')),
            (function(e, t) {
              var n = Ic.createEvent('HTMLEvents');
              if ((n.initEvent(e, !1, !1), t)) for (var i in t) n[i] = t[i];
              o.dispatchEvent(n);
            })('change', { prevItem: t, curItem: i, nextItem: n });
        }
      }
      ((r = e.children), Hc.call(r)).forEach(function(e) {
        (e.style.position = 'absolute'),
          (e.style.top = '0'),
          (e.style.left = c * d + '%'),
          (e.style.float = 'left'),
          (e.index = c),
          Object.defineProperty(l, c + '', {
            get: function() {
              return e;
            }
          }),
          c++;
      }),
        (l.add = function(t) {
          var n = document.createElement('li');
          return (
            (n.style.display = 'none'),
            (n.style.float = 'left'),
            (n.style.width = '100%'),
            (n.index = c),
            'string' == typeof t
              ? (n.innerHTML = t)
              : t instanceof HTMLElement && n.appendChild(t),
            e.appendChild(n),
            Object.defineProperty(l, c + '', {
              get: function() {
                return n;
              }
            }),
            c++,
            n
          );
        }),
        (l.get = function(e) {
          return l[p(e)];
        }),
        (l.getCloned = function(t) {
          t = p(t);
          var n = e.querySelector('[cloned="cloned-' + t + '"]'),
            i = l[t];
          return (
            n ||
              ((n = i.cloneNode(!0)),
              (function e(t, n, i) {
                var o = t._listeners;
                if (o)
                  for (var r in ((n._listeners = o), o))
                    n.addEventListener(r, o[r]);
                if (i && t.children && t.children.length)
                  for (var s = 0, a = t.children.length; s < a; s++)
                    e(t.children[s], n.children[s], i);
              })(i, n, !0),
              e.appendChild(n),
              n.setAttribute('cloned', 'cloned-' + t),
              (n.index = t)),
            n
          );
        }),
        (l.slide = function(t, i = !0) {
          const o = h + t;
          if (0 !== c) {
            if ((1 === c && (t = 0), n.isBoundary(t))) return !1;
            var r = a + s,
              l = a + d * -t,
              p = l - r;
            0 !== p &&
              (i
                ? new lib.animation(400, lib.cubicbezier.ease, function(t, n) {
                    e.style[Fc + 'Transform'] = zc(r + p * n, 0);
                  })
                    .play()
                    .then(function() {
                      (a = l),
                        (e.style[Fc + 'Transform'] = zc(l, 0)),
                        t && u(o);
                    })
                : ((a = l), (e.style[Fc + 'Transform'] = zc(l, 0)), t && u(o)));
          }
        }),
        (l.next = function() {
          l.slide(1);
        }),
        (l.prev = function() {
          l.slide(-1);
        }),
        Object.defineProperty(this, 'items', {
          get: function() {
            return l;
          }
        }),
        Object.defineProperty(l, 'length', {
          get: function() {
            return c;
          }
        }),
        Object.defineProperty(l, 'index', {
          get: function() {
            return h;
          }
        });
      var f = !1,
        m = !1;
      (this.play = function() {
        f ||
          (f = Rc(function e() {
            (m = !0),
              l.next(),
              Rc(function() {
                m = !1;
              }, 500),
              (f = Rc(e, b));
          }, b));
      }),
        (this.stop = function() {
          y && (Bc(y), (y = !1)), f && (Bc(f), (f = !1));
        });
      var g = !1,
        y = !1;
      Object.defineProperty(this, 'autoplay', {
        get: function() {
          return g;
        },
        set: function(e) {
          (g = !!e),
            y && (Bc(y), (y = !1)),
            g
              ? (y = Rc(function() {
                  n.play();
                }, 2e3))
              : n.stop();
        }
      }),
        (this.autoplay = !!t.autoplay);
      var b = 1500;
      if (
        (Object.defineProperty(this, 'playInterval', {
          get: function() {
            return b;
          },
          set: function(e) {
            b = e;
          }
        }),
        (this.playInterval = !!t.playInterval || 1500),
        (this.isBoundary = function(e) {
          if (this.loop) return !1;
          const t = h + e;
          return t === c || t < 0;
        }),
        t.useGesture)
      ) {
        var v = !1;
        e.addEventListener('panstart', function(e) {
          const t = 'left' === e.direction ? 1 : -1;
          if (n.isBoundary(t)) return !1;
          e.isVertical ||
            (v && m) ||
            (e.preventDefault(),
            e.stopPropagation(),
            g && n.stop(),
            (s = 0),
            (v = !0));
        }),
          e.addEventListener('panmove', function(t) {
            var n;
            !t.isVertical &&
              v &&
              (t.preventDefault(),
              t.stopPropagation(),
              (n = t.displacementX),
              (s = (n / e.getBoundingClientRect().width) * 100),
              (e.style[Fc + 'Transform'] = zc(a + s, 0)));
          }),
          e.addEventListener(
            'panend',
            function(e) {
              !e.isVertical &&
                v &&
                (e.preventDefault(),
                e.stopPropagation(),
                (v = !1),
                e.isSwipe
                  ? s < 0
                    ? l.next()
                    : l.prev()
                  : Math.abs(s) < d / 3
                  ? l.slide(0)
                  : l.slide(s < 0 ? 1 : -1),
                (s = 0),
                g &&
                  Rc(function() {
                    n.play();
                  }, 2e3));
            },
            !1
          ),
          e.addEventListener('swipe', function(e) {
            e.isVertical || (e.preventDefault(), e.stopPropagation());
          });
      }
      (this.addEventListener = function(e, t) {
        this.root.addEventListener(e, t, !1);
      }),
        (this.removeEventListener = function(e, t) {
          this.root.removeEventListener(e, t, !1);
        }),
        (this.root = o),
        (this.element = e);
    }),
    e(
      '.swiper{position:relative;width:-webkit-fill-available}.swiper .indicator-container{position:absolute;bottom:10px;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;box-pack:center;-webkit-justify-content:center;justify-content:center;font-size:0}.swiper .indicator-container .indicator{margin-left:10px;margin-right:10px;border-radius:50%}.swiper .indicator-container.row{-webkit-box-orient:horizontal;box-orient:horizontal;-webkit-flex-direction:row;flex-direction:row}.swiper .indicator-container.column{-webkit-box-orient:vertical;box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}',
      void 0
    );
  const Wc = 3e3,
    Uc = {
      'indicator-color': 'rgba(0, 0, 0, 0.5)',
      'indicator-selected-color': 'rgb(51, 180, 255)',
      'indicator-size': '20px'
    };
  let Vc, Gc;
  function Jc(e) {
    if (!e.indicator) return !1;
    const t = e.indicator.children,
      n = e.currentIndex;
    Array.prototype.forEach.call(t, (t, i) => {
      (t.style.width = t.style.height = e.indicatorStyle['indicator-size']),
        t.classList.remove('current'),
        i === n
          ? (t.classList.add('current'),
            (t.style.backgroundColor =
              e.indicatorStyle['indicator-selected-color']))
          : (t.style.backgroundColor = e.indicatorStyle['indicator-color']);
    });
  }
  function Zc(e) {
    return (
      e._sliderChangeHandler ||
        (e._sliderChangeHandler = function(e) {
          const t = this.carrousel.items.index;
          (this.currentIndex = t),
            Jc(this),
            this.dispatchEvent('change', { index: t });
        }.bind(e)),
      e._sliderChangeHandler
    );
  }
  function qc(e) {
    e.createChildren(), e.onAppend();
  }
  const Kc = {
      create() {
        const e = document.createElement('swiper');
        return (
          e.classList.add('swiper'),
          (e.style.position = 'relative'),
          (e.style.overflow = 'hidden'),
          (this._needFixWidth = !0),
          e
        );
      },
      createChildren() {
        const e = this.getComponentManager();
        this.sliderContainer && this.node.removeChild(this.sliderContainer),
          this.indicator &&
            this.indicator.parentNode.removeChild(this.indicator),
          (this.children = []);
        const t = document.createElement('div');
        (t.style.listStyle = 'none'),
          this.node.appendChild(t),
          (this.sliderContainer = t);
        const n = this.data.children,
          i = document.createDocumentFragment();
        let o, r;
        if (n && n.length) {
          for (let t = 0; t < n.length; t++) {
            const s = e.createElement(n[t]);
            (s.node.style.pointerEvents = 'auto'),
              (n[t].instanceId = this.data.instanceId),
              this.children.push(s),
              i.appendChild(s.node),
              (o = (s.data.style && s.data.style.width) || '100%'),
              (r = (s.data.style && s.data.style.height) || '100%'),
              (s.node.style.width = o),
              (s.node.style.height = r),
              (s.parentRef = this.data.ref);
          }
          (t.style.height = this.data.style.height), t.appendChild(i);
        }
      },
      createIndicator() {
        if (!this.hasIndicator) return;
        if (!this.data.children || 0 === this.data.children.length) return;
        const e = this.data.children.length,
          t = document.createElement('ul');
        (t.style.listStyle = 'none'), t.classList.add('indicator-container');
        for (let n = 0; n < e; n++) {
          const e = document.createElement('li');
          e.classList.add('indicator'), t.appendChild(e);
        }
        this.node.appendChild(t), (this.indicator = t), Jc(this);
      },
      setIndicatorStyle() {
        this.indicator || ((this.hasIndicator = !0), this.createIndicator()),
          Jc(this);
      },
      appendChild(e) {
        if (
          ((this.data.children || (this.data.children = [])).push(e),
          qc(this),
          this.children.length > 0)
        )
          return this.children[this.children.length - 1];
      },
      insertBefore(e, t) {
        const n = this.data.children;
        let i = -1;
        for (let e = 0, o = n.length; e < o; e++)
          if (n[e].ref === t.data.ref) {
            i = e;
            break;
          }
        if ((n.splice(i, 0, e.data), qc(this), this.children.length > 0))
          return this.children[this.children.length - 1];
      },
      removeChild(e) {
        const t = this.data.children;
        if (t)
          for (let n = 0; n < t.length; n++)
            if (e.data.ref === t[n].ref) {
              t.splice(n, 1);
              break;
            }
        qc(this);
      },
      onAppend() {
        this.carrousel &&
          (this.carrousel.removeEventListener('change', Zc(this)),
          this.carrousel.stop(),
          (this.carrousel = null));
        const e = lib.carrousel;
        (this.carrousel = new e(this.sliderContainer, {
          autoplay: this.autoplay,
          useGesture: !0
        })),
          this.createIndicator(),
          (this.carrousel.playInterval = this.interval),
          (this.carrousel.loop = this.loop),
          this.carrousel.addEventListener('change', Zc(this)),
          (this.currentIndex = 0),
          this.preloadImgsTimer && clearTimeout(this.preloadImgsTimer);
        this.preloadImgsTimer = setTimeout(
          function() {
            const e = this.carrousel.element.querySelectorAll('.hap-img');
            for (let t = 0, n = e.length; t < n; t++) {
              const n = e[t],
                i = n.getAttribute('i-lazy-src'),
                o = n.getAttribute('img-src');
              i
                ? (n.style.backgroundImage = 'url(' + i + ')')
                : o && (n.style.backgroundImage = 'url(' + o + ')'),
                n.removeAttribute('i-lazy-src'),
                n.removeAttribute('img-src');
            }
            this.dispatchEvent('change', { index: this.currentIndex });
          }.bind(this),
          800
        );
        let t = !1;
        this.carrousel.element.addEventListener('panstart', function(e) {
          e.isVertical || (t = !0);
        }),
          this.carrousel.element.addEventListener('panend', function(e) {
            e.isVertical || (t = !1);
          }),
          document.addEventListener(
            'touchmove',
            function(e) {
              return !t || (e.preventDefault(), !1);
            },
            { passive: !1 }
          ),
          Gc.prototype.onAppend.call(this);
      },
      play() {
        this.carrousel.play();
      },
      stop() {
        this.carrousel.stop();
      },
      slideTo(e, t) {
        const n = e - this.currentIndex;
        this.carrousel && this.carrousel.items.slide(n, t);
      },
      swipeTo({ index: e }) {
        this.slideTo(e, !1);
      }
    },
    Qc = {
      interval: function(e) {
        (this.interval = parseInt(e) || Wc),
          this.carrousel && (this.carrousel.playInterval = this.interval);
      },
      index: function(e) {
        const t = this;
        function n(e) {
          if ((e = parseInt(e)) < 0 || isNaN(e))
            return console.error('[h5-render] invalid index ', e);
          t.slideTo(e),
            t._updateIndex &&
              window.removeEventListener('renderend', t._updateIndex);
        }
        if (this.isDomRendering) {
          const i = !!this._updateIndex;
          (this._updateIndex = function() {
            t.autoplay && t.isPageShow && t.play(), n(e);
          }),
            !i && window.addEventListener('renderend', this._updateIndex);
        } else n(e);
      },
      playstatus: function(e) {
        (this.playstatus = e && 'false' !== e),
          (this.autoplay = this.playstatus),
          this.carrousel &&
            ((this.carrousel.autoplay = this.playstatus),
            this.playstatus ? this.play() : this.stop());
      },
      autoplay: function(e) {
        this.attr.playstatus.call(this, e);
      },
      loop: function(e) {
        (this.loop = e && 'false' !== e),
          this.carrousel && (this.carrousel.loop = this.loop);
      },
      indicator: function(e) {
        (this.hasIndicator = e && 'false' !== e),
          this.hasIndicator
            ? this.createIndicator()
            : this.indicator &&
              (this.node.removeChild(this.indicator), (this.indicator = null));
      }
    },
    Xc = {
      change: {
        updator: function() {
          return { attrs: { index: this.currentIndex } };
        }
      }
    },
    ed = {
      indicatorColor: function(e) {
        (this.indicatorStyle['indicator-color'] = e), this.setIndicatorStyle();
      },
      indicatorSelectedColor: function(e) {
        (this.indicatorStyle['indicator-selected-color'] = e),
          this.setIndicatorStyle();
      },
      indicatorSize: function(e) {
        (this.indicatorStyle['indicator-size'] = e), this.setIndicatorStyle();
      }
    };
  var td = {
    init: function(e) {
      function t(e) {
        (this.indicatorStyle = Object.assign({}, Uc)),
          (this.autoplay = !1),
          (this.loop = !1),
          (this.interval = Wc),
          (this.direction = 'row'),
          (this.children = []),
          (this.isPageShow = !0),
          (this.isDomRendering = !0),
          Gc.call(this, e);
      }
      (Gc = e.Component),
        (Vc = e.utils.extend),
        (t.prototype = Object.create(Gc.prototype)),
        Vc(t.prototype, Kc),
        Vc(t.prototype, { attr: Vc(Object.create(Gc.prototype.attr), Qc) }),
        Vc(t.prototype, { event: Xc }),
        Vc(t.prototype, { style: Vc(Object.create(Gc.prototype.style), ed) }),
        e.registerComponent('swiper', t);
    }
  };
  const nd = ['tab-bar', 'tab-content'];
  let id, od;
  const rd = {
      create() {
        const e = document.createElement('tabs');
        return (
          e.classList.add('hap-tabs'),
          e.classList.add('hap-container'),
          this.data.props &&
            this.data.props._isInTabContent &&
            this.data.props.tabwrap &&
            (this.data.props.tabwrap.style.display = 'flex'),
          this._setProps(this.data, {
            _isInStack: !1,
            stack: null,
            stackwrap: null
          }),
          e
        );
      },
      appendChild(e) {
        const t = e.type;
        let n = 'top';
        if (-1 === nd.indexOf(t))
          console.warn('[h5-render] invalid child type "' + t + '" for tabs.');
        else {
          if (!this.childNode[t]) {
            this.childNode['tab-content'] && (n = 'bottom');
            const i = id(e, { extra: { index: this.index, position: n } });
            (this.data.children || (this.data.children = [])).push(e);
            const o = this.getComponentManager().createElement(i);
            return (this.childNode[t] = o), this.node.appendChild(o.node), o;
          }
          console.warn(
            '[h5-render] child "' + t + '" can not more than one for tabs.'
          );
        }
      },
      updateIndex(e) {
        (this.index = e), this.dispatchEvent('change', { index: this.index });
      },
      onAppend() {
        if (!this.data.attr || void 0 === this.data.attr.index) {
          const e = this.childNode['tab-content'],
            t = this.childNode['tab-bar'],
            n = parseInt(this.index);
          setTimeout(() => {
            this.updateIndex(n), t && t.updateIndex(n), e && e.updateIndex(n);
          }, 100);
        }
        od.prototype.onAppend.call(this);
      }
    },
    sd = {
      index(e) {
        const t = this.childNode['tab-content'],
          n = this.childNode['tab-bar'],
          i = parseInt(e);
        this.updateIndex(i), n && n.updateIndex(i), t && t.updateIndex(i);
      }
    };
  var ad = {
    init: function(e) {
      function t(e) {
        const t = e.attr || {};
        (this.childNode = { 'tab-bar': !1, 'tab-content': !1 }),
          (this.index = t.index || 0),
          od.call(this, e);
      }
      (od = e.Component),
        (id = e.utils.extend),
        (t.prototype = Object.create(od.prototype)),
        id(t.prototype, rd),
        id(t.prototype, { attr: id(Object.create(od.prototype.attr), sd) }),
        e.registerComponent('tabs', t);
    }
  };
  let ld;
  const cd = ['fixed', 'scrollable'],
    dd = {
      create() {
        const e = document.createElement('tab-bar');
        return (
          e.classList.add('hap-container'),
          e.classList.add('hap-tab-bar'),
          (e.style[this.position] = '0'),
          e
        );
      },
      appendChild(e) {
        (this.data.children || (this.data.children = [])).push(e),
          this._setProps(e, { _isInTabBar: !0 });
        const t = this.getComponentManager().createElement(e),
          n = t.node,
          i = this.childrenComponents || (this.childrenComponents = []);
        return (
          (n.dataset.index = i.length),
          i.length === parseInt(this.index)
            ? n.classList.add('hap-active')
            : n.classList.remove('hap-active'),
          i.push(t),
          this.node.appendChild(n),
          (n.style.pointerEvents = 'auto'),
          n.addEventListener(
            'click',
            (function(e) {
              e.childEvent ||
                (e.childEvent = function() {
                  const t = parseInt(this.dataset.index),
                    n = e.getParent().childNode['tab-content'];
                  e.updateIndex(t),
                    n.updateIndex(t),
                    e.getParent().updateIndex(t);
                });
              return e.childEvent;
            })(this)
          ),
          t
        );
      },
      onAppend() {
        const e = this.node,
          t = this.getParent(),
          n = this.position;
        (this.node.style.height = this.height),
          (t.node.style[
            `padding${n.charAt(0).toUpperCase() + n.slice(1)}`
          ] = `${this.height}`),
          this.updateMode(),
          e.addEventListener('panmove', function(e) {
            e.preventDefault(), e.stopPropagation();
          }),
          ld.prototype.onAppend.call(this);
      },
      updateMode() {
        const e = this.node,
          t = cd.indexOf(this.mode),
          n = this.data.style;
        0 === t
          ? ((e.style.lineHeight = ''),
            e.classList.add('fixed-mode'),
            e.classList.remove('scrollable-mode'))
          : 1 === t &&
            ((n && (n.paddingTop || n.paddingBottom)) ||
              (e.style.lineHeight = this.height),
            e.classList.remove('fixed-mode'),
            e.classList.add('scrollable-mode'));
      },
      updateIndex(e) {
        const t = this.childrenComponents,
          n = this.node;
        if (1 === cd.indexOf(this.mode)) {
          const i = n.scrollWidth,
            o = n.scrollLeft,
            r = n.clientWidth,
            s = i - r,
            a = t[e].node,
            l = parseInt(r / 2) - a.clientWidth / 2;
          let c = a.offsetLeft - o - l,
            d = o + c;
          (c = (d = d < 0 ? 0 : d > s ? s : d) - o),
            new lib.animation(400, lib.cubicbezier.ease, function(e, t) {
              n.scrollLeft = o + c * t;
            }).play();
        }
        t.forEach((t, n) => {
          e === n
            ? t.node.classList.add('hap-active')
            : t.node.classList.remove('hap-active');
        }),
          (this.index = e);
      }
    },
    hd = {
      mode(e) {
        (this.mode = e), this.updateMode();
      }
    },
    pd = {
      height(e) {
        (this.height = e), (this.node.style.height = e);
        const t = this.getParent();
        e.indexOf('px') > -1 && (this.node.style.flexShrink = '0'),
          t && (t.node.style.paddingTop = `${e}`);
      },
      display() {},
      flexDirection() {},
      top() {},
      bottom() {},
      justifyContent() {},
      overflowX() {},
      overflowY() {},
      whiteSpace() {}
    };
  var ud = {
    init: function(e) {
      ld = e.Component;
      const t = e.utils.extend;
      function n(e) {
        const t = e.attr || {};
        (this.mode = t.mode || 'fixed'),
          (this.height = '100px'),
          (this.index = e.extra.index),
          (this.position = e.extra.position),
          ld.call(this, e);
      }
      (n.prototype = Object.create(ld.prototype)),
        t(n.prototype, dd),
        t(n.prototype, { attr: t(Object.create(ld.prototype.attr), hd) }),
        t(n.prototype, { style: t(Object.create(ld.prototype.style), pd) }),
        e.registerComponent('tab-bar', n);
    }
  };
  let fd;
  const md = window.navigator.userAgent,
    gd = !!md.match(/Firefox/i),
    yd = !!md.match(/IEMobile/i) ? 'MSCSSMatrix' : 'WebKitCSSMatrix',
    bd = !!gd || (yd in window && 'm11' in new window[yd]());
  function vd(e, t) {
    return (
      0 !== (e = parseFloat(e)) && (e += '%'),
      0 !== (t = parseFloat(t)) && (t += '%'),
      bd
        ? 'translate3d(' + e + ', ' + t + ', 0)'
        : 'translate(' + e + ', ' + t + ')'
    );
  }
  const Ed = {
      create() {
        const e = document.createElement('tab-content'),
          t = document.createElement('div');
        return (
          e.classList.add('hap-tab-content'),
          e.classList.add('hap-container'),
          t.classList.add('hap-container'),
          t.setAttribute('data-ctrl-name', 'tab-carousel'),
          (t.style.transform = 'translate3d(0px, 0px, 0px)'),
          e.appendChild(t),
          (this.carousel = t),
          e
        );
      },
      appendChild(e) {
        const t = this.data.children || (this.data.children = []);
        t.push(e);
        const n = document.createElement('div');
        n.setAttribute('data-ctrl-name', 'tab-carousel-item'),
          (n.style.width = '100%');
        const i = this.getComponentManager();
        this._setProps(e, {
          _isInTabContent: !0,
          tabwrap: n,
          tabIndex: t.length - 1
        });
        const o = i.createElement(e),
          r = this.childrenComponents || (this.childrenComponents = []);
        r.push(o), this.carousel.appendChild(n).appendChild(o.node);
        const s = (this.childrenLengh = r.length);
        return (
          0 !== this.index && s > this.index && this.updateIndex(this.index), o
        );
      },
      onAppend() {
        const e = this.getParent();
        (!e.data.props || (e.data.props && !e.data.props._isInTabContent)) &&
          this.registerEvent(),
          fd.prototype.onAppend.call(this);
      },
      registerEvent() {
        const e = this.node,
          t = this,
          n = this.carousel;
        e.addEventListener('panstart', function(e) {
          const n = 'left' === e.direction ? 1 : -1;
          if (t.isBoundary(n)) return !1;
          e.isVertical ||
            t.panning ||
            (e.preventDefault(),
            e.stopPropagation(),
            (t.panning = !0),
            (t.diffOffset = 0));
        }),
          e.addEventListener('panmove', function(i) {
            !i.isVertical &&
              t.panning &&
              t.childrenLengh > 1 &&
              (i.preventDefault(),
              i.stopPropagation(),
              (t.diffOffset = (function(e, t) {
                return (e / t.getBoundingClientRect().width) * 100;
              })(i.displacementX, e)),
              (n.style.transform = vd(t.startOffset + t.diffOffset, 0)));
          }),
          e.addEventListener('panend', function(e) {
            if (!e.isVertical && t.panning && t.childrenLengh > 1) {
              e.preventDefault(), e.stopPropagation(), (t.panning = !1);
              const n = t.diffOffset;
              Math.abs(n) < t.itemStep / 2
                ? t.slide(0)
                : t.slide(n < 0 ? 1 : -1);
            }
          });
      },
      isBoundary(e) {
        const t = parseInt(this.index) + e;
        return t === this.childrenLengh || t < 0;
      },
      slide(e) {
        const t = this;
        let n = !0;
        t.isBoundary(e) && ((e = 0), (n = !1));
        const i = t.getParent().childNode['tab-bar'],
          o = t.carousel,
          r = parseInt(t.index) + e,
          s = t.startOffset + t.diffOffset,
          a = -t.itemStep * r - s;
        new lib.animation(400, lib.cubicbezier.ease, function(e, t) {
          o.style.transform = vd(s + a * t, 0);
        })
          .play()
          .then(function() {
            if (!n) return !1;
            t.updateIndex(r),
              i && i.updateIndex(r),
              t.getParent().updateIndex(r);
          });
      },
      updateIndex(e) {
        this.childrenComponents.forEach((t, n) => {
          if (e === n) {
            const t = -this.itemStep * e;
            (this.carousel.style.transform = vd(t, 0)), (this.startOffset = t);
          }
        }),
          (this.index = e);
      }
    },
    wd = { display() {}, flex() {} };
  var kd = {
    init: function(e) {
      fd = e.Component;
      const t = e.utils.extend;
      function n(e) {
        (this.index = parseInt(e.extra.index)),
          (this.startOffset = 0),
          (this.diffOffset = 0),
          (this.itemStep = 100),
          (this.panning = !1),
          fd.call(this, e);
      }
      (n.prototype = Object.create(fd.prototype)),
        t(n.prototype, Ed),
        t(n.prototype, { attr: t(Object.create(fd.prototype.attr), wd) }),
        e.registerComponent('tab-content', n);
    }
  };
  e(
    '.hap-tabs{position:relative;flex-direction:column;height:-webkit-fill-available;width:-webkit-fill-available;max-width:100vw;overflow-x:hidden;flex-shrink:999999;pointer-events:auto}.hap-tab-bar{position:absolute;left:0;width:100%}.hap-tab-bar.fixed-mode{display:flex;justify-content:space-around}.hap-tab-bar.scrollable-mode{display:block;overflow-x:auto;overflow-y:hidden;white-space:nowrap}.hap-tab-bar.scrollable-mode>*{display:inline-flex!important;justify-content:center;align-items:center;line-height:normal;vertical-align:middle}.hap-tabs .hap-tab-content{position:relative;width:100%;display:flex;flex:1;margin-left:0!important;margin-right:0!important}.hap-tabs .hap-tab-content [data-ctrl-name=tab-carousel]{position:relative;display:flex;flex:1;max-width:100%;max-height:100%}.hap-tabs .hap-tab-content [data-ctrl-name=tab-carousel] [data-ctrl-name=tab-carousel-item]{flex:1 0 auto;overflow-y:auto;overflow-x:hidden}.hap-tabs .hap-tab-content [data-ctrl-name=tab-carousel] [data-ctrl-name=tab-carousel-item]>*{flex:1}',
    void 0
  );
  var xd = {
    init: function(e) {
      e.install(ad), e.install(ud), e.install(kd);
    }
  };
  const _d = {
      create() {
        const e = document.createElement('stack');
        e.style.width = '0px';
        const t = this.data.style;
        return (
          (t && (!t || t.width || t.flex)) ||
            ((this._needSetWidth = !0), (this.maxWidth = 0)),
          (!t || (t && !t.height)) &&
            ((this._needSetHeight = !0), (this.maxHeight = 0)),
          this._setProps(this.data, { _isInStack: !0 }),
          e
        );
      },
      appendChild(e) {
        this.node.classList.add('hap-stack'),
          e.style &&
            'fixed' !== e.style.position &&
            '0px' === this.node.style.width &&
            (this.node.style.width = '');
        const t = this.data.children,
          n = this.getComponentManager().createElement(e);
        return (
          this._addWrap(n),
          t && t.length ? t.push(e) : (this.data.children = [e]),
          n
        );
      },
      insertBefore(e, t) {
        const n = this.data.children;
        let i,
          o = 0,
          r = !1;
        if (n && n.length && t) {
          for (i = n.length; o < i && n[o].ref !== t.data.ref; o++);
          o === i && (r = !0);
        } else r = !0;
        const s = this._addWrap(e);
        r
          ? (this.node.appendChild(s), n.push(e.data))
          : (this.node.insertBefore(s, t.data.stackwrap),
            n.splice(o, 0, e.data));
      },
      createChildren() {
        const e = this.data.children,
          t = this.data.ref,
          n = this.getComponentManager();
        if (e && e.length) {
          const i = document.createDocumentFragment();
          let o = !1;
          for (let r = 0; r < e.length; r++) {
            e[r].instanceId = this.data.instanceId;
            const s = n.createElement(e[r]);
            i.appendChild(this._addWrap(s)),
              (s.parentRef = t),
              !o &&
                s.data.style &&
                s.data.style.hasOwnProperty('flex') &&
                (o = !0);
          }
          this.node.appendChild(i);
        }
      },
      removeChild(e) {
        const t = this.data.children;
        let n = 0;
        const i = this.getComponentManager();
        if (t && t.length) {
          let i;
          for (i = t.length; n < i && t[n].ref !== e.data.ref; n++);
          n < i && t.splice(n, 1);
        }
        i.removeComponent(e.data.ref), e.unsetPosition();
        const o = e.node.parentNode,
          r = o._height;
        if ((o.parentNode.removeChild(o), this.maxHeight === r)) {
          this.maxHeight = 0;
          const e = this.node.children;
          for (let t = 0; t < e.length; t++)
            this.maxHeight = Math.max(this.maxHeight, e[t]._height);
          this.node.style.height = `${this.maxHeight}px`;
        }
      },
      _addWrap(e) {
        const t = e.node,
          n = document.createElement('div');
        return (
          n.classList.add('hap-stack-wrap'),
          (n.style.padding =
            (this.data.style && this.data.style.padding) || ''),
          (n.style.paddingRight =
            (this.data.style && this.data.style.paddingRight) || ''),
          (n.style.paddingLeft =
            (this.data.style && this.data.style.paddingLeft) || ''),
          (n.style.paddingTop =
            (this.data.style && this.data.style.paddingTop) || ''),
          (n.style.paddingBottom =
            (this.data.style && this.data.style.paddingBottom) || ''),
          this.node.appendChild(n).appendChild(t),
          (e.data.stackwrap = n),
          this._setProps(e.data, { stack: this, stackwrap: n }),
          ('tabs' !== e.data.type && 'list' !== e.data.type) ||
            (this._needSetWidth = this._needSetHeight = !1),
          'video' === e.data.type && (this._needSetWidth = !1),
          n
        );
      },
      _resizeHeight(e) {
        if (e) {
          let t = 0,
            n = 0;
          const i = e.firstChild.style.height || '';
          if (i.indexOf('px') > -1) t = i;
          else if (i.indexOf('%') > -1) t = e.firstChild.clientHeight;
          else {
            const i = e.firstChild.style.height;
            (e.firstChild.style.height = 'fit-content'),
              (e.style.height = 'fit-content'),
              (t = e.firstChild.clientHeight),
              (n = e.clientHeight),
              (e.firstChild.style.height = i),
              (e.style.height = '');
          }
          const o = Math.max(t && parseInt(t), n);
          (e._height = o),
            (this.maxHeight = Math.max(o, e.clientHeight, this.maxHeight)),
            this.maxHeight > 0 &&
              (this.node.style.height = `${this.maxHeight}px`);
        }
      },
      _resizeWidth(e) {
        if (e) {
          let t;
          (e.style.width = 'fit-content'),
            e.firstChild.style.flex &&
              ((t = e.firstChild.style.flex), (e.firstChild.style.flex = ''));
          const n = e.clientWidth;
          (e.style.width = ''), (e.firstChild.style.flex = t);
          const i = e.firstChild.style.width || '',
            o = (i.indexOf('px') > -1 && i) || e.firstChild.clientWidth,
            r = n > 0 ? n : o && parseInt(o);
          if (
            ((this.maxWidth = Math.max(r, this.maxWidth)),
            this.maxWidth > 0 &&
              this.maxWidth <= this._getProps('availableWidth'))
          ) {
            const e = this.getParent(),
              t = e && e.data.style;
            t && 'column' === t.flexDirection && !t.alignItems
              ? (this.node.style.minWidth = `${this.maxWidth}px`)
              : (this.node.style.width = `${this.maxWidth + 0.5}px`);
          }
        }
      }
    },
    Ad = {
      paddingRight(e) {
        const t = this.node.children;
        for (let n = 0; n < t.length; n++) t[n].style.paddingRight = e;
      },
      paddingLeft(e) {
        const t = this.node.children;
        for (let n = 0; n < t.length; n++) t[n].style.paddingLeft = e;
      },
      paddingTop(e) {
        const t = this.node.children;
        for (let n = 0; n < t.length; n++) t[n].style.paddingTop = e;
      },
      paddingBottom(e) {
        const t = this.node.children;
        for (let n = 0; n < t.length; n++) t[n].style.paddingBottom = e;
      },
      padding(e) {
        const t = this.node.children;
        for (let n = 0; n < t.length; n++) t[n].style.padding = e;
      }
    };
  var Cd = {
    init: function(e) {
      const t = e.Component,
        n = e.utils.extend;
      function i(e) {
        t.call(this, e);
      }
      (i.prototype = Object.create(t.prototype)),
        n(i.prototype, _d),
        n(i.prototype, { style: n(Object.create(t.prototype.style), Ad) }),
        e.registerComponent('stack', i);
    }
  };
  let Td;
  e(
    '.hap-popup-container{position:fixed;top:0;left:0;right:0;bottom:0;display:none;z-index:999}.hap-popup-container .hap-popup-mask{position:absolute;top:0;left:0;right:0;bottom:0;background-color:transparent}.hap-popup-container .hap-popup-content{position:absolute;display:inline-block;background:#fff;border-radius:5px}.hap-popup-container .hap-popup-content.active{animation:scaleIn .3s cubic-bezier(.04,1.27,.96,.94)}@keyframes scaleIn{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}',
    void 0
  );
  const Sd = [
      'bottom',
      'top',
      'left',
      'right',
      'bottomLeft',
      'bottomRight',
      'topLeft',
      'topRight'
    ],
    Md = [],
    Od = {
      create() {
        const e = document.createElement('popup');
        e.classList.add('hap-container'),
          e.classList.add('hap-popup-container');
        const t = document.createElement('div'),
          n = document.createElement('div');
        return (
          t.classList.add('hap-popup-mask'),
          n.classList.add('hap-popup-content'),
          (n.style.boxShadow = 'rgb(101, 79, 79) 0px 9px 23px'),
          (n.style.margin = '20px'),
          e.appendChild(t),
          e.appendChild(n),
          (this.mask = t),
          (this.content = n),
          this.updateMask(),
          e
        );
      },
      appendChild(e) {
        const t = this.data.children;
        t && t.length ? t.push(e) : (this.data.children = [e]);
        const n = this.getComponentManager().createElement(e);
        return this.content.appendChild(n.node), n;
      },
      onAppend() {
        const e = this.targetDom,
          t = this.mask,
          n = this.node;
        (e.style.pointerEvents = 'auto'),
          (t.style.pointerEvents = 'auto'),
          e.addEventListener('click', t => {
            t.stopPropagation(),
              t.preventDefault(),
              Md.forEach(e => {
                e.style.display = 'none';
              }),
              Md.push(n),
              (n.style.display = 'block'),
              this.setPosition(e, this.placement),
              this.content.classList.add('active'),
              this.dispatchEvent('visibilitychange', { visibility: !0 });
          }),
          t.addEventListener('click', e => {
            e.stopPropagation(),
              e.preventDefault(),
              (n.style.display = 'none'),
              this.content.classList.remove('active'),
              this.dispatchEvent('visibilitychange', { visibility: !1 });
          }),
          Td.prototype.onAppend.call(this);
      },
      setPosition(e, t) {
        const n = this.content,
          i = Sd.slice(0);
        let o;
        i.unshift(t), i.some(t => (o = this.adjustPosition(e, t)).success);
        let r = o.targetX + o.offsetX,
          s = o.targetY + o.offsetY;
        (r = r < 0 ? -r : r) + o.nodeW > o.screenW && (r = o.screenW - o.nodeW),
          s + o.nodeH > o.screenH && (s = o.screenH - o.nodeH),
          (n.style.left = `${r}px`),
          (n.style.top = `${s}px`);
      },
      adjustPosition(e, t) {
        const n = e.getBoundingClientRect(),
          i = this.content.getBoundingClientRect();
        let o,
          r,
          s = !1;
        const a = n.width,
          l = n.height,
          c = n.x,
          d = n.y + l,
          h = i.width + 40,
          p = i.height + 40,
          u = document.body.clientWidth,
          f = document.body.clientHeight;
        switch (t) {
          case 'left':
            c >= h &&
              ((o = -h), (r = -(p + l) / 2), (r = Math.min(r, -p)), (s = !0));
            break;
          case 'right':
            u - c - a >= h &&
              ((o = a), (r = -(p + l) / 2), (r = Math.min(r, -p)), (s = !0));
            break;
          case 'top':
            d >= p && ((o = (a - h) / 2), (r = -(p + l)), (s = !0));
            break;
          case 'bottom':
            f - d - l >= p && ((o = (a - h) / 2), (r = 0), (s = !0));
            break;
          case 'topLeft':
            c > h && d >= p && ((o = -h), (r = -(p + l)), (s = !0));
            break;
          case 'topRight':
            d >= p && u - c - a >= h && ((o = a), (r = -(p + l)), (s = !0));
            break;
          case 'bottomLeft':
            c >= h && f - d - l >= p && ((o = -h), (r = 0), (s = !0));
            break;
          case 'bottomRight':
            u - c - a >= h && f - d - l >= p && ((o = a), (r = 0), (s = !0));
        }
        return {
          offsetX: o,
          offsetY: r,
          targetX: c,
          targetY: d,
          targetH: l,
          targetW: a,
          nodeW: h,
          nodeH: p,
          screenH: f,
          screenW: u,
          success: s
        };
      },
      updateMask() {
        this.mask &&
          ((this.mask.style.backgroundColor = this.maskColor),
          (this.mask.style.opacity = this.maskOpacity));
      }
    },
    Ld = {
      target(e) {
        this.targetDom = document.getElementById(e);
      },
      placement(e) {
        Sd.indexOf(e) > -1 && (this.placement = e);
      }
    },
    Id = /^#[0-9a-fA-F]{6}$/,
    Dd = /^#[0-9a-fA-F]{3}$/,
    Nd = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/,
    Pd = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d*\.?\d+)\s*\)$/,
    Fd = /^hsl\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*\)$/,
    Rd = /^hsla\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d*\.?\d+)\s*\)$/,
    Bd = {
      maskColor(e) {
        (this.maskOpacity = 1),
          Id.test(e) || Dd.test(e) || Nd.test(e) || Fd.test(e)
            ? ((this.maskColor = e), (this.maskOpacity = '.3'))
            : (Pd.test(e) || Rd.test(e)) && (this.maskColor = e),
          this.mask && this.updateMask();
      }
    };
  var jd = {
    init: function(e) {
      Td = e.Component;
      const t = e.utils.extend;
      function n(e) {
        const t = e.attr || {};
        (this.placement = t.placement || 'bottom'),
          (this.maskColor = 'rgba(0,0,0,0)'),
          Td.call(this, e);
      }
      (n.prototype = Object.create(Td.prototype)),
        t(n.prototype, Od),
        t(n.prototype, { attr: t(Object.create(Td.prototype.attr), Ld) }),
        t(n.prototype, { style: t(Object.create(Td.prototype.style), Bd) }),
        e.registerComponent('popup', n);
    }
  };
  let $d;
  e(
    '.hap-radio-container{display:inline-block;margin-left:5px;margin-right:5px}.hap-radio-container input[type=radio]+i:before{content:"\\a0";display:inline-block;vertical-align:middle;font-size:18px;width:20px;height:20px;padding:5px;border-radius:50%;border:4px solid #736f73;line-height:1}.hap-radio-container input[type=radio]{position:absolute;width:40px;height:45px;opacity:0;z-index:1}.hap-radio-container input[type=radio]:checked+i:before{background-color:#44948b;border-color:#44948b;background-clip:content-box}.hap-checkbox-container{display:inline-block;margin-left:5px;margin-right:5px}.hap-checkbox-container input[type=checkbox]+i{display:inline-block;font-size:18px;width:45px;height:45px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABVElEQVRoQ+1ZS0oDQRB9lWFyADViwBt4guBZFDciCOMMaXKHQOgw40IJWcW7iGsPIVH87ZVJSTYi4kDazsxk4PW6q+u9qtdVTbWg4Usajh8kUHcGmYGNzsDgfLCXh/lUVHoQbFcKVvGqonfBZ3A6uho9FvkulFAURZ2wFd4LpFsp8F/OFDpvf7QPhtfD979wFBIwF+YGgqM6wX/7VszspT1xIxCbZwA7G0EAeLGZ7bgQEBObxU8Dm9lKK5aJja7ivwgUCfhKjxngHfDUECVECVFCbGR8SnjdApZRllEvAQGUECVECbETsxN73QKWUZZRLwGxE6Pxk7nlY+oJwK6nEtZirtCHcTbedxnuoh/3ZwI5XgsC30P+M15v/AfHMmhJknSDRTBR0UOBbPkG0sVeoW+icpu38rM0TefOX0wuzurcW+mnRRlESaCMqLqcyQy4RKuMvV/CqCdAkQM1dgAAAABJRU5ErkJggg==)}.hap-checkbox-container input[type=checkbox]{position:absolute;width:40px;height:45px;opacity:0;z-index:1}.hap-checkbox-container input[type=checkbox]:checked+i{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACuklEQVRoQ+2ZTWsTURSG35M0H4ZaUaxf+A9cVBCRBouhDCiKC5eCWw2YD7A4wbiKG1uS0EXSiMW1/gWRTkugWhERquBP0CBVIlqrSZM5MtbIGGaaZHKTTHWyHHLufZ/3PTc3dy5hh39oh+uHAzDoBJ0EbJ1AqJA+NMR0H8A4gAN9Fcu8xsCzKteuLcdvr5nNbdpCofns/qEqvwHhcF+FN0/GKFV4c8wMwhRAyqcfgejyQMX/npzBDxejiStGWswB5jIf+t42Jm4x8G4xKh9tH4CZpEJWtYP7DQ1KVDY02zgBB0B8drZPgMFviWkFhKtG+LYG0MRXXPWJp9eTZSmfyYMQbYawMQCv/nDVJzXxDdFGEDYF4NWvqv/Mi3j8i95xKZ+eBtEt/TPbATDwcl31Se2I10BsBaCJr1NgshiJrLdy3nb7gBXxtkmAgZU6Bc524rz4BBgPmDhIoGOdbFea+I2qW3o+NfW93bYRv4gZc0pMjp2+N73Xp7qXO4Aofqu6z1sVL6aFGFklJssNVzQIv+peAuh4iySKHtV37nE8XrHivLgWYp5RYomkXsSpXG5k2FVRCDhpAiFEvJgEtFEMIEKFwrCbN5aaIRi84FX9F7t1XlwCjZHMIZ4QEPzFCV747Nlz4VU4vNlN24hfxNtAjM/O7gp46woxymXvyCWR4sW1kN4SQkqJyHf0j07MpwK7S6gWU6maKOfFt5BeGXNSiSVmtvsVMvpj1sn+0VuArYVtCiFKfG9aqEUSIsX3HqApCdHi+wOwlcgNMB9sPoxY6fnmGludB6wAOQBWXBNZ858lAEDKZz6BsE+ki5bHYpSUmHzEqP7ffb0+kbs76iPP68FfcPD7mtc1Vgzf/NhRAtqX/1wxMQdBNGq5BawUdnvFZGXOQdQ416yDcP3vY8mgFXQ5v9NCXRrYdflPVuDOQErpu6wAAAAASUVORK5CYII=)}.hap-input{box-sizing:border-box;position:relative;-webkit-flex-shrink:1;flex-shrink:1;-webkit-flex-grow:0;flex-grow:0;-webkit-flex-basis:auto;flex-basis:auto;border:0 solid #000;margin:0;padding:0;min-width:0;width:auto;white-space:normal;pointer-events:auto}',
    void 0
  );
  const zd = [
      'text',
      'password',
      'tel',
      'email',
      'url',
      'date',
      'time',
      'button',
      'radio',
      'checkbox'
    ],
    Hd = ['button', 'radio', 'checkbox'],
    Yd = {
      input: function() {
        const e = document.createElement('input'),
          t = Math.floor(1e13 * Math.random()) + Date.now();
        return (
          (this.className = 'hap-ipt-' + t),
          (this.styleId = 'hap-style-' + t),
          e.classList.add(this.className),
          e.classList.add('hap-input'),
          'button' === this.data.attr.type
            ? ((e.style.padding = '8px 0'),
              (e.style.backgroundSize = 'contain'),
              (e.style.backgroundRepeat = 'no-repeat'),
              this.data.attr.value || (e.style.backgroundColor = 'inherit'))
            : ((e.style.backgroundColor = 'inherit'),
              (e.style.outline = this.data.style.outline || 'none')),
          (e.style.fontSize = '26px'),
          this.placeholder && (e.placeholder = this.placeholder),
          this.createKeybordEvent(e),
          e
        );
      },
      radio: function() {
        const e = document.createElement('span');
        return (
          (this.innerInput = document.createElement('input')),
          (this.innerLabel = document.createElement('i')),
          e.appendChild(this.innerInput),
          e.appendChild(this.innerLabel),
          e.classList.add('hap-input'),
          e.classList.add('hap-radio-container'),
          this.innerInput.setAttribute('type', 'radio'),
          (this.nodeType = 'radio'),
          e
        );
      },
      checkbox: function() {
        const e = document.createElement('span');
        return (
          (this.innerInput = document.createElement('input')),
          (this.innerLabel = document.createElement('i')),
          e.appendChild(this.innerInput),
          e.appendChild(this.innerLabel),
          e.classList.add('hap-input'),
          e.classList.add('hap-checkbox-container'),
          this.innerInput.setAttribute('type', 'checkbox'),
          (this.nodeType = 'checkbox'),
          e
        );
      }
    };
  const Wd = {
      create() {
        return 'radio' === this.data.attr.type
          ? Yd.radio.call(this)
          : 'checkbox' === this.data.attr.type
          ? Yd.checkbox.call(this)
          : Yd.input.call(this);
      },
      createKeybordEvent(e) {
        Array.isArray(this.data.event) &&
          (this.data.event.indexOf('selectionchange') > -1 &&
            console.warn('[h5-render] 请使用手机调试 “selectionchange” 事件'),
          this.data.event.indexOf('enterkeyclick') > -1 &&
            e.addEventListener(
              'keyup',
              t => {
                13 === t.keyCode &&
                  this.dispatchEvent('enterkeyclick', { value: e.value });
              },
              !1
            ));
      },
      focus() {
        this.node.focus();
      },
      blur() {
        this.node.blur();
      },
      select: function() {
        this.node.select();
      },
      setSelectionRange({ start: e, end: t }) {
        const n = this.node;
        n.focus(), n.setSelectionRange(e, t);
      },
      getSelectionRange({ callback: e }, t) {
        const n = this.node.selectionStart,
          i = this.node.selectionEnd;
        t && t(e, [n, i]);
      }
    },
    Ud = {
      disabled(e) {
        this.node.disabled = !!e;
      },
      placeholder(e) {
        this.node.placeholder = e || '';
      },
      value(e) {
        this.node.value = e || '';
      },
      autofocus(e) {
        this.node.autofocus = !!e;
      },
      type(e) {
        (this.node.type = -1 !== zd.indexOf(e) ? e : 'text'),
          -1 === Hd.indexOf(e) && (this.node.style.borderStyle = 'none');
      },
      returnKeyType(e) {
        this.node.returnKeyType = e || '';
      },
      name(e) {
        null != e &&
          '' !== e &&
          ('radio' === this.nodeType || 'checkbox' === this.nodeType
            ? this.innerInput.setAttribute('name', e)
            : this.node.setAttribute('name', e),
          (this.name = e));
      },
      id(e) {
        null != e &&
          '' !== e &&
          ('radio' === this.nodeType || 'checkbox' === this.nodeType
            ? this.innerInput.setAttribute('id', e)
            : this.node.setAttribute('id', e));
      },
      checked(e) {
        'radio' === this.nodeType || 'checkbox' === this.nodeType
          ? (this.innerInput.checked = e)
          : (this.node.checked = e),
          (this.checked = e);
      }
    },
    Vd = {
      placeholderColor: function(e) {
        !(function(e, t) {
          if (!t) return;
          const n = [
            '::-webkit-input-placeholder',
            ':-moz-placeholder',
            '::-moz-placeholder',
            ':-ms-input-placeholder',
            ':placeholder-shown'
          ];
          let i = '';
          const o = 'color: ' + t + ';';
          for (let t = 0, r = n.length; t < r; t++)
            i += '.' + e.className + n[t] + '{' + o + '}';
          $d(i, e.styleId, !0);
        })(this, e);
      },
      backgroundImage: function(e) {
        const t = '/' === e[0] && Hap.basePath ? `${Hap.basePath}${e}` : e;
        this.node.style.backgroundImage = 'url(' + t + ')';
      }
    },
    Gd = {
      input: {
        updator() {
          return { attrs: { value: this.node.value } };
        },
        extra() {
          return { value: this.node.value, timestamp: Date.now() };
        }
      },
      change: {
        updator: function() {
          return { attrs: { value: this.node.value } };
        },
        extra: function() {
          return (
            (this.checked = !this.checked),
            {
              name: this.name,
              checked: this.checked,
              value: this.node.value,
              text: this.node.value,
              timestamp: Date.now()
            }
          );
        }
      }
    };
  var Jd = {
    init: function(e) {
      const t = e.Atomic,
        n = e.utils.extend;
      function i(e) {
        t.call(this, e);
      }
      ($d = e.utils.appendStyle),
        (i.prototype = Object.create(t.prototype)),
        n(i.prototype, Wd),
        n(i.prototype, { attr: n(Object.create(t.prototype.attr), Ud) }),
        n(i.prototype, { style: n(Object.create(t.prototype.style), Vd) }),
        n(i.prototype, { event: Gd }),
        e.registerComponent('input', i);
    }
  };
  const Zd = {
      create() {
        const e = document.createElement('textarea');
        return (
          e.classList.add('hap-element'),
          e.classList.add('hap-textarea'),
          (e.style.fontSize = '32px'),
          (e.style.backgroundColor = 'inherit'),
          this.createKeyboardEvent(e),
          e
        );
      },
      createKeyboardEvent(e) {
        Array.isArray(this.data.event) &&
          this.data.event.indexOf('return') > -1 &&
          e.addEventListener(
            'keyup',
            e => {
              const t = e.keyCode;
              let n = e.key;
              if (13 === t) {
                'tab' === n.toLowerCase() && (n = 'next');
                const e = Si(this.data.attr.returnKeyType);
                this.dispatchEvent('return', { returnKeyType: e });
              }
            },
            !1
          );
      },
      focus() {
        this.node.focus();
      },
      blur() {
        this.node.blur();
      },
      select: function() {
        this.node.select();
      },
      setSelectionRange({ start: e, end: t }) {
        const n = this.node;
        n.focus(), n.setSelectionRange(e, t);
      },
      getSelectionRange({ callback: e }, t) {
        const n = this.node.selectionStart,
          i = this.node.selectionEnd;
        t && t(e, [n, i]);
      }
    },
    qd = {
      rows(e) {
        this.node.rows = e || 2;
      },
      disabled(e) {
        this.node.disabled = !!e;
      },
      placeholder(e) {
        this.node.placeholder = e || '';
      },
      value(e) {
        this.node.value = e || '';
      },
      autofocus(e) {
        this.node.autofocus = !!e;
      },
      returnKeyType(e) {
        this.node.returnKeyType = e || '';
      }
    },
    Kd = {
      input: {
        updator() {
          return { attrs: { value: this.node.value } };
        },
        extra() {
          return { value: this.node.value, timestamp: Date.now() };
        }
      },
      change: {
        updator: function() {
          return { attrs: { value: this.node.value } };
        },
        extra: function() {
          return { value: this.node.value, timestamp: Date.now() };
        }
      },
      return: {
        updator: function(e) {
          return { attrs: { value: this.node.value } };
        }
      }
    };
  var Qd = {
    init: function(e) {
      const t = e.Atomic,
        n = e.utils.extend;
      function i(e) {
        t.call(this, e);
      }
      (i.prototype = Object.create(t.prototype)),
        n(i.prototype, Zd),
        n(i.prototype, { attr: n(Object.create(t.prototype.attr), qd) }),
        n(i.prototype, { event: Kd }),
        e.registerComponent('textarea', i);
    }
  };
  e(
    '.hap-dialog-mask{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;justify-content:center;align-items:center;background-color:rgba(0,0,0,.3)}.hap-dialog-content{width:86%;max-height:70%;background-color:#fff}.hap-dialog-footer{display:flex;justify-content:flex-end;padding:50px 0}.hap-dialog-footer a{padding:0 45px;color:#009688;font-size:30px;text-decoration:none}',
    void 0
  );
  class Xd {
    constructor(e) {
      const t = document.createElement('div'),
        n = document.getElementsByTagName('body')[0];
      return (
        (this._node = t),
        (this._uid = `hap-dialog-box${e}`),
        (this._container = n),
        (this.added = !1),
        t.classList.add('hap-dialog-box'),
        t.setAttribute('id', this._uid),
        this.createMask(),
        this
      );
    }
    createMask() {
      const e = document.createElement('div'),
        t = document.createElement('div');
      e.classList.add('hap-dialog-mask'),
        t.classList.add('hap-dialog-content'),
        e.appendChild(t),
        (this._content = t),
        (this._mask = e),
        this._node.appendChild(e);
    }
    addContent(e, t) {
      if (!e || this.added) return;
      this.clearContent(), (this.picker = t);
      const n = document.createElement('div');
      n.classList.add('hap-dialog-body'),
        'string' == typeof e
          ? (n.innerHTML = e)
          : e.length > 0
          ? Array.prototype.forEach.call(e, e => {
              n.appendChild(e);
            })
          : n.appendChild(e),
        this._content.appendChild(n),
        this.addFooter(),
        this.bindAction();
    }
    addFooter() {
      const e = document.createElement('div');
      e.classList.add('hap-dialog-footer');
      (e.innerHTML =
        '<a href=\'javascript:;\' type="0">取消</a><a href="javascript:;" type="1">确认</a>'),
        (this._footer = e),
        this._content.appendChild(e);
    }
    clearContent() {
      const e = this._content,
        t = e.childNodes;
      for (let n = 0, i = t.length; n < i; n++) e.removeChild(t[n]);
    }
    show() {
      this._container.appendChild(this._node), this.afterShow();
    }
    close() {
      const e = this._container,
        t = document.getElementById(this._uid);
      e.removeChild(t), this.afterClose();
    }
    bindAction() {
      const e = this,
        t = this.picker,
        n = this._footer.childNodes,
        i = this._mask,
        o = function(n) {
          n.preventDefault(),
            n.stopPropagation(),
            '0' === this.getAttribute('type')
              ? (t.cancel && t.cancel(), e.close())
              : (t.yes && t.yes(), e.close());
        };
      this._content.addEventListener('click', function(e) {
        e.preventDefault(), e.stopPropagation();
      }),
        i.addEventListener(
          'click',
          function(t) {
            t.preventDefault(), t.stopPropagation(), e.close();
          },
          !1
        );
      for (let e = 0, t = n.length; e < t; e++)
        n[e].addEventListener('click', o, !1);
    }
    afterShow() {}
    afterClose() {}
  }
  const eh =
    Date.now ||
    function() {
      return +new Date();
    };
  let th = {},
    nh = 1;
  'undefined' != typeof window &&
    (function() {
      let e = 0;
      const t = ['ms', 'moz', 'webkit', 'o'];
      for (let e = 0; e < t.length && !window.requestAnimationFrame; ++e)
        (window.requestAnimationFrame = window[t[e] + 'RequestAnimationFrame']),
          (window.cancelAnimationFrame =
            window[t[e] + 'CancelAnimationFrame'] ||
            window[t[e] + 'CancelRequestAnimationFrame']);
      window.requestAnimationFrame ||
        (window.requestAnimationFrame = function(t, n) {
          const i = new Date().getTime(),
            o = Math.max(0, 16 - (i - e)),
            r = window.setTimeout(function() {
              t(i + o);
            }, o);
          return (e = i + o), r;
        }),
        window.cancelAnimationFrame ||
          (window.cancelAnimationFrame = function(e) {
            clearTimeout(e);
          });
    })();
  var ih = {
    requestAnimationFrame: (function() {
      if ('undefined' != typeof window) {
        const e = window.requestAnimationFrame;
        return function(t, n) {
          e(t, n);
        };
      }
    })(),
    stop(e) {
      const t = null != th[e];
      return t && (th[e] = null), t;
    },
    isRunning: e => null != th[e],
    start(e, t, n, i, o, r) {
      const s = this,
        a = eh();
      let l = a,
        c = 0,
        d = 0;
      const h = nh++;
      if ((r || (r = document.body), h % 20 == 0)) {
        const e = {};
        for (const t in th) e[t] = !0;
        th = e;
      }
      const p = function(u) {
        const f = !0 !== u,
          m = eh();
        if (!th[h] || (t && !t(h)))
          return (th[h] = null), void (n && n(60 - d / ((m - a) / 1e3), h, !1));
        if (f) {
          const e = Math.round((m - l) / (1e3 / 60)) - 1;
          for (let t = 0; t < Math.min(e, 4); t++) p(!0), d++;
        }
        i && (c = (m - a) / i) > 1 && (c = 1);
        const g = o ? o(c) : c;
        (!1 !== e(g, m, f) && 1 !== c) || !f
          ? f && ((l = m), s.requestAnimationFrame(p, r))
          : ((th[h] = null),
            n && n(60 - d / ((m - a) / 1e3), h, 1 === c || null == i));
      };
      return (th[h] = !0), s.requestAnimationFrame(p, r), h;
    }
  };
  function oh(e, t) {
    return window.getComputedStyle(e)[t] || '';
  }
  function rh(e) {
    return Math.pow(e - 1, 3) + 1;
  }
  function sh(e) {
    return (e /= 0.5) < 1
      ? 0.5 * Math.pow(e, 3)
      : 0.5 * (Math.pow(e - 2, 3) + 2);
  }
  const ah = 'object' == typeof window;
  let lh = !1;
  try {
    let e = Object.defineProperty({}, 'passive', {
      get: function() {
        lh = !0;
      }
    });
    window.addEventListener('test', null, e);
  } catch (e) {}
  const ch = function(e, t) {
      const n = this;
      (n.dpr = (function() {
        let e = 1;
        return (
          ah &&
            window.VUX_CONFIG &&
            window.VUX_CONFIG.$picker &&
            window.VUX_CONFIG.$picker.respectHtmlDataDpr &&
            (e = document.documentElement.getAttribute('data-dpr') || 1),
          e
        );
      })()),
        (t = t || {}),
        (n.options = {
          itemClass: 'scroller-item',
          onSelect() {},
          defaultValue: 0,
          data: []
        });
      for (const e in t) void 0 !== t[e] && (n.options[e] = t[e]);
      var i;
      n.__container =
        'string' == typeof (i = e) ? document.querySelector(i) : i;
      const o = document.createElement('div');
      o.innerHTML =
        t.template ||
        '\n<div class="scroller-component" data-role="component">\n  <div class="scroller-mask" data-role="mask"></div>\n  <div class="scroller-indicator" data-role="indicator"></div>\n  <div class="scroller-content" data-role="content"></div>\n</div>\n';
      const r = (n.__component = o.querySelector('[data-role=component]')),
        s = (n.__content = r.querySelector('[data-role=content]')),
        a = r.querySelector('[data-role=indicator]'),
        l = n.options.data;
      let c = '';
      l.length && l[0].constructor === Object
        ? l.forEach(function(e) {
            c +=
              '<div class="' +
              n.options.itemClass +
              '" data-value=' +
              JSON.stringify({ value: encodeURI(e.value) }) +
              '>' +
              e.name +
              '</div>';
          })
        : l.forEach(function(e) {
            c +=
              '<div class="' +
              n.options.itemClass +
              '" data-value=' +
              JSON.stringify({ value: encodeURI(e) }) +
              '>' +
              e +
              '</div>';
          }),
        (s.innerHTML = c),
        n.__container.appendChild(r),
        (n.__itemHeight = parseFloat(oh(a, 'height'), 10)),
        (n.__callback =
          t.callback ||
          function(e) {
            const t = -e * n.dpr;
            (s.style.webkitTransform = 'translate3d(0, ' + t + 'px, 0)'),
              (s.style.transform = 'translate3d(0, ' + t + 'px, 0)');
          });
      const d = r.getBoundingClientRect();
      (n.__clientTop = d.top + r.clientTop || 0),
        n.__setDimensions(r.clientHeight, s.offsetHeight),
        0 === r.clientHeight &&
          n.__setDimensions(parseFloat(oh(r, 'height'), 10), 204),
        n.select(n.options.defaultValue, !1);
      const h = function(e) {
          e.target.tagName.match(/input|textarea|select/i) ||
            (e.preventDefault(), n.__doTouchStart(e, e.timeStamp));
        },
        p = function(e) {
          n.__doTouchMove(e, e.timeStamp);
        },
        u = function(e) {
          n.__doTouchEnd(e.timeStamp);
        },
        f = !!lh && { passive: !1 },
        m = !!lh && { passive: !0 };
      r.addEventListener('touchstart', h, f),
        r.addEventListener('mousedown', h, f),
        r.addEventListener('touchmove', p, m),
        r.addEventListener('mousemove', p, m),
        r.addEventListener('touchend', u, m),
        r.addEventListener('mouseup', u, m);
    },
    dh = {
      value: null,
      __prevValue: null,
      __isSingleTouch: !1,
      __isTracking: !1,
      __didDecelerationComplete: !1,
      __isGesturing: !1,
      __isDragging: !1,
      __isDecelerating: !1,
      __isAnimating: !1,
      __clientTop: 0,
      __clientHeight: 0,
      __contentHeight: 0,
      __itemHeight: 0,
      __scrollTop: 0,
      __minScrollTop: 0,
      __maxScrollTop: 0,
      __scheduledTop: 0,
      __lastTouchTop: null,
      __lastTouchMove: null,
      __positions: null,
      __minDecelerationScrollTop: null,
      __maxDecelerationScrollTop: null,
      __decelerationVelocityY: null,
      __setDimensions(e, t) {
        (this.__clientHeight = e), (this.__contentHeight = t);
        const n = this.options.data.length,
          i = Math.round(this.__clientHeight / this.__itemHeight);
        (this.__minScrollTop = -this.__itemHeight * (i / 2)),
          (this.__maxScrollTop =
            this.__minScrollTop + n * this.__itemHeight - 0.1);
      },
      selectByIndex(e, t) {
        e < 0 ||
          e > this.__content.childElementCount - 1 ||
          ((this.__scrollTop = this.__minScrollTop + e * this.__itemHeight),
          this.scrollTo(this.__scrollTop, t),
          this.__selectItem(this.__content.children[e]));
      },
      select(e, t) {
        const n = this,
          i = n.__content.children;
        for (let o = 0, r = i.length; o < r; o++)
          if (decodeURI(JSON.parse(i[o].dataset.value).value) === e)
            return void n.selectByIndex(o, t);
        n.selectByIndex(0, t);
      },
      getValue() {
        return this.value;
      },
      scrollTo(e, t) {
        const n = this;
        if (
          ((t = void 0 === t || t),
          n.__isDecelerating &&
            (ih.stop(n.__isDecelerating), (n.__isDecelerating = !1)),
          (e = Math.round((e / n.__itemHeight).toFixed(5)) * n.__itemHeight),
          (e = Math.max(Math.min(n.__maxScrollTop, e), n.__minScrollTop)) ===
            n.__scrollTop || !t)
        )
          return n.__publish(e), void n.__scrollingComplete();
        n.__publish(e, 250);
      },
      destroy() {
        this.__component.parentNode &&
          this.__component.parentNode.removeChild(this.__component);
      },
      __selectItem(e) {
        const t = this,
          n = t.options.itemClass + '-selected',
          i = t.__content.querySelector('.' + n);
        i && i.classList.remove(n),
          e.classList.add(n),
          null !== t.value && (t.__prevValue = t.value),
          (t.value = decodeURI(JSON.parse(e.dataset.value).value));
      },
      __scrollingComplete() {
        const e = this,
          t = Math.round(
            (e.__scrollTop - e.__minScrollTop - e.__itemHeight / 2) /
              e.__itemHeight
          );
        e.__selectItem(e.__content.children[t]),
          null !== e.__prevValue &&
            e.__prevValue !== e.value &&
            e.options.onSelect({ value: e.value, index: t });
      },
      __doTouchStart(e, t) {
        const n = e.touches,
          i = this,
          o = e.touches ? e.touches[0] : e,
          r = !!e.touches;
        if (e.touches && null == n.length)
          throw new Error('Invalid touch list: ' + n);
        if ((t instanceof Date && (t = t.valueOf()), 'number' != typeof t))
          throw new Error('Invalid timestamp value: ' + t);
        let s;
        (i.__interruptedAnimation = !0),
          i.__isDecelerating &&
            (ih.stop(i.__isDecelerating),
            (i.__isDecelerating = !1),
            (i.__interruptedAnimation = !0)),
          i.__isAnimating &&
            (ih.stop(i.__isAnimating),
            (i.__isAnimating = !1),
            (i.__interruptedAnimation = !0));
        const a = (r && 1 === n.length) || !r;
        (s = a ? o.pageY : Math.abs(o.pageY + n[1].pageY) / 2),
          (i.__initialTouchTop = s),
          (i.__lastTouchTop = s),
          (i.__lastTouchMove = t),
          (i.__lastScale = 1),
          (i.__enableScrollY = !a),
          (i.__isTracking = !0),
          (i.__didDecelerationComplete = !1),
          (i.__isDragging = !a),
          (i.__isSingleTouch = a),
          (i.__positions = []);
      },
      __doTouchMove(e, t, n) {
        const i = this,
          o = e.touches,
          r = e.touches ? e.touches[0] : e,
          s = !!e.touches;
        if (o && null == o.length) throw new Error('Invalid touch list: ' + o);
        if ((t instanceof Date && (t = t.valueOf()), 'number' != typeof t))
          throw new Error('Invalid timestamp value: ' + t);
        if (!i.__isTracking) return;
        let a;
        a = s && 2 === o.length ? Math.abs(r.pageY + o[1].pageY) / 2 : r.pageY;
        const l = i.__positions;
        if (i.__isDragging) {
          const e = a - i.__lastTouchTop;
          let n = i.__scrollTop;
          if (i.__enableScrollY) {
            n -= e;
            const t = i.__minScrollTop,
              o = i.__maxScrollTop;
            (n > o || n < t) && (n = n > o ? o : t);
          }
          l.length > 40 && l.splice(0, 20), l.push(n, t), i.__publish(n);
        } else {
          const e = 0,
            n = 5,
            o = Math.abs(a - i.__initialTouchTop);
          (i.__enableScrollY = o >= e),
            l.push(i.__scrollTop, t),
            (i.__isDragging = i.__enableScrollY && o >= n),
            i.__isDragging && (i.__interruptedAnimation = !1);
        }
        (i.__lastTouchTop = a), (i.__lastTouchMove = t), (i.__lastScale = n);
      },
      __doTouchEnd(e) {
        const t = this;
        if ((e instanceof Date && (e = e.valueOf()), 'number' != typeof e))
          throw new Error('Invalid timestamp value: ' + e);
        if (t.__isTracking) {
          if (
            ((t.__isTracking = !1),
            t.__isDragging &&
              ((t.__isDragging = !1),
              t.__isSingleTouch && e - t.__lastTouchMove <= 100))
          ) {
            const n = t.__positions,
              i = n.length - 1;
            let o = i;
            for (let e = i; e > 0 && n[e] > t.__lastTouchMove - 100; e -= 2)
              o = e;
            if (o !== i) {
              const r = n[i] - n[o],
                s = t.__scrollTop - n[o - 1];
              t.__decelerationVelocityY = (s / r) * (1e3 / 60);
              const a = 4;
              Math.abs(t.__decelerationVelocityY) > a &&
                t.__startDeceleration(e);
            }
          }
          t.__isDecelerating || t.scrollTo(t.__scrollTop),
            (t.__positions.length = 0);
        }
      },
      __publish(e, t) {
        const n = this,
          i = n.__isAnimating;
        if ((i && (ih.stop(i), (n.__isAnimating = !1)), t)) {
          n.__scheduledTop = e;
          const o = n.__scrollTop,
            r = e - o,
            s = function(e, t, i) {
              (n.__scrollTop = o + r * e),
                n.__callback && n.__callback(n.__scrollTop);
            },
            a = function(e) {
              return n.__isAnimating === e;
            },
            l = function(e, t, i) {
              t === n.__isAnimating && (n.__isAnimating = !1),
                (n.__didDecelerationComplete || i) && n.__scrollingComplete();
            };
          n.__isAnimating = ih.start(s, a, l, t, i ? rh : sh);
        } else
          (n.__scheduledTop = n.__scrollTop = e),
            n.__callback && n.__callback(e);
      },
      __startDeceleration(e) {
        const t = this;
        (t.__minDecelerationScrollTop = t.__minScrollTop),
          (t.__maxDecelerationScrollTop = t.__maxScrollTop);
        t.__isDecelerating = ih.start(
          function(e, n, i) {
            t.__stepThroughDeceleration(i);
          },
          function() {
            const e = Math.abs(t.__decelerationVelocityY) >= 0.5;
            return e || (t.__didDecelerationComplete = !0), e;
          },
          function(e, n, i) {
            (t.__isDecelerating = !1),
              t.__scrollTop <= t.__minScrollTop ||
              t.__scrollTop >= t.__maxScrollTop
                ? t.scrollTo(t.__scrollTop)
                : t.__didDecelerationComplete && t.__scrollingComplete();
          }
        );
      },
      __stepThroughDeceleration(e) {
        const t = this;
        let n = t.__scrollTop + t.__decelerationVelocityY;
        const i = Math.max(
          Math.min(t.__maxDecelerationScrollTop, n),
          t.__minDecelerationScrollTop
        );
        i !== n && ((n = i), (t.__decelerationVelocityY = 0)),
          Math.abs(t.__decelerationVelocityY) <= 1
            ? Math.abs(n % t.__itemHeight) < 1 &&
              (t.__decelerationVelocityY = 0)
            : (t.__decelerationVelocityY *= 0.95),
          t.__publish(n);
      }
    };
  for (const e in dh) ch.prototype[e] = dh[e];
  e(
    '.scroller-component{display:block;position:relative;height:284px;overflow:hidden;width:100%}.scroller-content{position:absolute;left:0;top:0;width:100%;z-index:1}.scroller-mask{position:absolute;left:0;top:0;height:100%;margin:0 auto;width:100%;z-index:3;transform:translateZ(0);background-image:-webkit-linear-gradient(top,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),-webkit-linear-gradient(bottom,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-image:linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),linear-gradient(0deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-position:top,bottom;background-size:100% 102px;background-repeat:no-repeat}.scroller-item{text-align:center;font-size:32px;height:84px;line-height:84px;color:#000}.scroller-indicator{width:100%;height:84px;position:absolute;left:0;top:84px;z-index:3;background-image:-webkit-linear-gradient(top,#ccc,#ccc,transparent,transparent),-webkit-linear-gradient(bottom,#ccc,#ccc,transparent,transparent);background-image:linear-gradient(180deg,#ccc,#ccc,transparent,transparent),linear-gradient(0deg,#ccc,#ccc,transparent,transparent);background-position:top,bottom;background-size:100% 6px;background-repeat:no-repeat}.scroller-item{line-clamp:1;-webkit-line-clamp:1;overflow:hidden;text-overflow:ellipsis}',
    void 0
  );
  class hh {
    constructor(e) {
      (this.range = e.range || []),
        (this._default = e),
        (this.uid = e.uid),
        (this.DomUid = `flex-item-${e.uid}`),
        (this.scroller = []),
        (this.columns = null),
        this.init();
    }
    init() {
      const e = document.createElement('div');
      e.classList.add('flex-box'),
        (e.style.display = 'flex'),
        (e.style.justifyContent = 'center'),
        (e.style.alignItems = 'center'),
        (e.style.width = '100%'),
        (this.pickerContainer = e);
      const t = new Xd(this.uid);
      t.addContent(e, this),
        this.dealArray(this._default),
        this.extendDialog(t),
        (this.dialog = t);
    }
    getId(e) {
      return `#${this.DomUid}-${e}`;
    }
    getColumn(e) {
      document.getElementById(this.getId(e));
    }
    removeColumn(e) {
      this.pickerContainer.removeChild(document.getElementById(this.getId(e)));
    }
    dealArray(e) {
      const t = e.range;
      if (t.some(e => '[object Array]' !== Object.prototype.toString.call(e)))
        (this.columns = []),
          this.columns.push(
            t.map(e => ('string' != typeof e ? JSON.stringify(e) : e))
          ),
          (this.selected = this.selected || e.selected || 0),
          (this.scrollerResult = {
            value: this.columns[0][this.selected],
            index: this.selected
          }),
          (this.selectedValue = e.value || this.columns[0][this.selected]);
      else {
        this.columns = t;
        const n = this.columns.length;
        let i;
        if (this.scrollerResult) {
          if (
            (i = this.scrollerResult.index.map((e, t) =>
              t > this.lastChangeColumn ? 0 : e
            )).length > n
          )
            i.splice(n),
              this.scrollerResult.value.splice(n),
              this.scrollerResult.index.splice(n);
          else if (i.length < n) {
            const e = Array(n - i.length).fill(0);
            i = i.concat(e);
          }
        } else this.scrollerResult = { value: [], index: [] };
        this.selected = i || e.selected || Array(n).fill(0);
        const o = this.selected;
        (this.selectedValue = []),
          t.forEach((e, t) => {
            (this.scrollerResult.value[t] = e[o[t]]),
              (this.scrollerResult.index[t] = o[t]),
              (this.selectedValue[t] = e[o[t]]);
          });
      }
      this.createColumns();
    }
    createColumns() {
      const e = this.columns;
      let t = 0;
      const n = document.createDocumentFragment();
      for (let i = 0, o = e.length; i < o; i++) {
        const e = document.createElement('div');
        (e.style.flex = '1'),
          e.setAttribute('id', `${this.DomUid}-${t++}`),
          n.appendChild(e);
      }
      (this.pickerContainer.innerHTML = ''),
        this.pickerContainer.appendChild(n);
    }
    extendDialog(e) {
      const t = this,
        n = t.columns.length;
      (e.afterShow = function() {
        t.initScroll();
      }),
        (e.afterClose = function() {
          for (let e = 0; e < n; e++)
            t.scroller[e] && t.scroller[e].destroy(), (t.scroller[e] = null);
        });
    }
    updateData(e) {
      this.dealArray(e), this.initScroll();
    }
    initScroll() {
      const e = this,
        t = e.columns,
        n = e.columns.length;
      if (1 === n) {
        const n = 0;
        if (!document.querySelector(e.getId(n))) return;
        e.scroller[n] && e.scroller[n].destroy(),
          (e.scroller[n] = new ch(e.getId(n), {
            data: t[n],
            defaultValue: e.selectedValue,
            onSelect(t) {
              console.log(`[h5-render] picker: ${JSON.stringify(t)}`),
                (e.scrollerResult = t),
                (e.selectedValue = t.value);
            }
          }));
      } else
        for (let i = 0; i < n; i++) {
          if (!document.querySelector(e.getId(i))) return;
          e.scroller[i] && e.scroller[i].destroy(),
            (e.scroller[i] = new ch(e.getId(i), {
              data: t[i],
              defaultValue: e.selectedValue[i],
              onSelect(t) {
                console.log(`[h5-render] picker Select: ${JSON.stringify(t)}`),
                  (e.scrollerResult.value[i] = t.value),
                  (e.scrollerResult.index[i] = t.index),
                  (e.selectedValue[i] = t.value),
                  (e.scrollerResult.lastChangeColumn = i),
                  e.onSelect({ column: i, value: t.value, index: t.index });
              }
            }));
        }
    }
    show() {
      this.dialog.show();
    }
    yes() {}
    cancel() {}
  }
  e(
    '.hap-picker{position:fixed;z-index:1000;top:0;left:0;width:100%;height:100%}.hap-picker .picker-mask{position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.46)}@-webkit-keyframes pickerShow{0%{opacity:0}to{opacity:1}}@keyframes pickerShow{0%{opacity:0}to{opacity:1}}.hap-picker.time-picker-ani{-webkit-animation:pickerShow .2s linear;animation:pickerShow .2s linear}.picker-container{position:absolute;top:12%;left:12%;-webkit-transform:translate(-6%,-6%);transform:translate(-6%,-6%);width:86%;opacity:1;font-family:PingFang SC,HanHei SC,Helvetica Neue,Helvetica,sans-serif;line-height:1.5;background-color:#fff;box-shadow:0 5px 18px rgba(101,83,83,.8);-webkit-tap-highlight-color:transparent;-webkit-user-select:none;user-select:none}.picker-container i{font-style:normal}.picker-container [data-active]{position:relative}.picker-container .picker-disabled.active:after,.picker-container [data-active]:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-image:-webkit-radial-gradient(circle,#000 10%,transparent 10.01%);background-image:-o-radial-gradient(circle,#000 10%,transparent 10.01%);background-image:radial-gradient(circle,#000 10%,transparent 10.01%);background-repeat:no-repeat;background-position:50%;pointer-events:none;-webkit-background-size:0 0;background-size:0 0;opacity:0;-webkit-transition:background .5s,opacity 1s;transition:background .5s,opacity 1s}.picker-container .active:after{-webkit-background-size:1000% 1000%;background-size:1000% 1000%;opacity:.2}.picker-container .picker-disabled{color:#d6d6d6}.picker-head{padding:26px 42px;line-height:1.5;color:#ececec;background-color:#429488}.picker-head-active{color:#fff}.picker-year{font-size:37px;width:4em;color:#b4e4e0}.picker-date{font-size:63px;text-indent:-2px}.picker-content{box-sizing:border-box;position:relative;overflow:hidden;height:635px;margin:26px 42px;font-size:26px;color:rgba(0,0,0,.8)}.picker-content li,.picker-content ul{list-style:none;margin:0;padding:0}.date-picker-main{width:100%;-webkit-transform:translateX(-100%) translateZ(0);transform:translateX(-100%) translateZ(0)}.date-picker-main:after{content:"";display:table;clear:both}.scroller-picker-main{position:relative;text-align:center}.scroller-picker-main li{padding:10px 0;overflow:hidden}.scroller-picker-main .picker-active{color:#4b968d}.scroller-picker-midd{position:absolute;top:50%;width:100%;height:40px;margin-top:-20px;-webkit-box-sizing:border-box;box-sizing:border-box}.scroller-picker-midd:after,.scroller-picker-midd:before{content:"";position:absolute;left:0;width:100%;border-top:1px solid #e2e3e5}.scroller-picker-midd:before{top:0;-webkit-transform:scaleY(.5) translateZ(0);-webkit-transform-origin:left top;transform-origin:left top;transform:scaleY(.5) translateZ(0)}.scroller-picker-midd:after{bottom:0;-webkit-transform:scaleY(.5) translateZ(0);-webkit-transform-origin:left bottom;transform-origin:left bottom;transform:scaleY(.5) translateZ(0)}.picker-actions-arrow{z-index:1;position:absolute;top:0;left:8px;right:8px;font-size:37px;line-height:84px}.picker-actions-arrow i{cursor:pointer;float:left;padding:16px 14px}.picker-actions-arrow i:last-child{float:right}.picker-actions-arrow i[data-active]:after{height:42px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);border-radius:50%}.picker-bdy{float:left;width:100%;padding:0 8px;margin-right:-100%;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.picker-bdy-curr{left:100%}.picker-bdy-next{left:200%}.date-picker-title{text-align:center;padding:46px 16px;font-size:28px;line-height:28px}.date-picker-days i{position:relative;width:14.28%;height:28px;padding:21px 0;text-align:center;display:inline-block;line-height:1;vertical-align:top;cursor:pointer;overflow:hidden}.date-picker-days i[data-active]:after{width:24px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);border-radius:50%}.date-picker-days-bdy i span{position:relative}.date-picker-days-bdy i:before{content:"";left:50%;top:50%;width:0;height:0;position:absolute;border-radius:50%;background-color:#429488;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.picker-bdy-curr .date-picker-days-bdy i.picker-active{color:#fff}.picker-bdy-curr .date-picker-days-bdy i.picker-active:before{width:64px;height:64px}.date-picker-days-bdy .picker-now{color:#4b968d}.date-picker-days-title{font-size:28px;color:#626262}.date-picker-days-bdy i[data-val="0"]{color:transparent}.date-picker-days-bdy i[data-val="0"]:before{content:none}.picker-foot{padding:26px 42px;text-align:right;color:#393939}.picker-act{padding:5px 25px;margin-left:10px;text-decoration:none;display:inline-block;font-size:28px;color:#4b968d;background-color:transparent;border-radius:2px;-webkit-transition:background-color .2s linear;transition:background-color .2s linear}.picker-act:hover{background-color:hsla(0,0%,60%,.2)}.picker-act-clear{margin-left:0;float:left}.time-picker-container{top:18%;transform:translate(-6%,-9%)}.time-picker-container .picker-content{height:500px}.time-picker-container .picker-head{text-align:center;font-size:99px;font-weight:300;padding-top:6px;padding-bottom:6px}.time-picker-container .picker-cell{margin-left:-20px}.time-picker-container .picker-cell[data-active]:after{width:30px;height:30px;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:50%}.time-picker-container .picker-active{z-index:1;color:#fff;pointer-events:none}.time-picker-container .picker-active b{position:absolute;left:50%;top:50%;margin-top:-1px;margin-left:-1px;width:2px;height:2px;background-color:#fff;border-radius:50%}.time-picker-main{position:absolute;top:50%;left:50%;height:485px;width:485px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);border-radius:50%;background-color:rgba(0,0,0,.05)}.time-picker-main>ul{position:absolute;top:1px;right:1px;bottom:1px;left:1px}.time-picker-main:before{content:"";position:absolute;top:50%;left:50%;width:13px;height:13px;border-radius:50%;background-color:#007467;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.time-picker-minutes-1 .picker-cell{width:6px;margin-left:-3px;-webkit-transform-origin:50% 226px;transform-origin:50% 226px}.time-picker-minutes-1 .picker-cell i{margin-top:-3px}.time-picker-minutes-1 .picker-active b{margin-top:-4px}.time-picker-minutes-10 .picker-cell{width:80px;margin-left:-40px}.picker-hour,.picker-minute{display:inline-block;font-weight:400}.picker-hour[data-active]:after,.picker-minute[data-active]:after{height:46px;top:5px}.picker-hour{text-align:right}.picker-minute{text-align:left}.picker-cell{position:absolute!important;top:12px;left:50%;width:36px;height:59px;-webkit-transform-origin:20px 226px;transform-origin:20px 226px;-webkit-transition:all .2s;transition:all .2s}.picker-cell i{position:absolute;top:50%;left:50%;pointer-events:none}.picker-cell-inner{top:104px;width:42px;height:42px;-webkit-transform-origin:20px 135px;transform-origin:20px 135px;color:#676767}.time-picker-line{position:absolute;top:50%;left:50%;width:157px;height:3px;margin-top:-2px;pointer-events:none;background-color:#007467;-webkit-transform-origin:0 50%;transform-origin:0 50%}.time-picker-line:before{content:"";position:absolute;left:100%;top:0;margin-top:-39px;width:80px;height:80px;background-color:#007467;border-radius:50%}.time-picker-line-inner{width:77px}',
    void 0
  );
  var ph =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function(e) {
            return typeof e;
          }
        : function(e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          },
    uh = Object.prototype;
  function fh(e, t) {
    return uh.toString.call(e) === '[object ' + t + ']';
  }
  function mh(e) {
    return fh(e, 'Function');
  }
  function gh(e) {
    return fh(e, 'Object');
  }
  function yh(e) {
    return Array.isArray ? Array.isArray(e) : fh(e, 'Array');
  }
  function bh(e) {
    return !(!e || !gh(e)) && 'isPrototypeOf' in e;
  }
  var vh = Object.freeze({
      isFn: mh,
      isStr: function(e) {
        return fh(e, 'String');
      },
      isNum: function(e) {
        return fh(e, 'Number');
      },
      isObj: gh,
      isArray: yh,
      isDate: function(e) {
        return fh(e, 'Date');
      },
      isUndefined: function(e) {
        return void 0 === e;
      },
      each: function(e, t, n) {
        if (e && mh(t))
          if (((n = n || e), e.length)) {
            for (var i = 0, o = e.length; i < o; i++)
              if (!1 === t.call(n, e[i], i, e)) return;
          } else if (gh(e))
            for (var r in e) if (!1 === t.call(n, e[r], r, e)) return;
      },
      noop: function() {},
      extend: function e() {
        var t,
          n,
          i,
          o,
          r = arguments[0] || {},
          s = 1,
          a = arguments.length,
          l = !1;
        for (
          'boolean' == typeof arguments[0] &&
            ((l = r), (r = arguments[1] || {}), (s = 2)),
            'object' === (void 0 === r ? 'undefined' : ph(r)) ||
              mh(r) ||
              (r = {});
          s < a;
          s++
        )
          if (null != (t = arguments[s]))
            for (n in t)
              if (((i = r[n]), r !== (o = t[n])))
                if (l && o && (bh(o) || yh(o))) {
                  var c = i && (bh(i) || yh(i)) ? i : yh(o) ? [] : {};
                  r[n] = e(l, c, o);
                } else void 0 !== o && (r[n] = o);
        return r;
      },
      pad: function(e, t, n) {
        if (t < 1) return '';
        void 0 === n && (n = !0), (e = '' + e);
        for (var i = 0; i < t; ) (e = '0' + e), (i += 1);
        return (i = e.length - t), e.substring(n ? i : i > 0 ? t : i);
      },
      set2Null: function(e, t) {
        e.forEach(function(e) {
          t[e] = null;
        });
      }
    }),
    Eh = vh.pad,
    wh = /(?:\b|%)([dDMyHhaAmsz]+|ap|AP)(?:\b|%)/g,
    kh = {
      d: '([0-9][0-9]?)',
      dd: '([0-9][0-9])',
      M: '([0-9][0-9]?)',
      MM: '([0-9][0-9])',
      yyyy: '([0-9][0-9][0-9][0-9])',
      yyy: '([0-9][0-9])[y]',
      yy: '([0-9][0-9])',
      H: '([0-9][0-9]?)',
      hh: '([0-9][0-9])',
      h: '([0-9][0-9]?)',
      HH: '([0-9][0-9])',
      m: '([0-9][0-9]?)',
      mm: '([0-9][0-9])',
      s: '([0-9][0-9]?)',
      ss: '([0-9][0-9])',
      z: '([0-9][0-9]?[0-9]?)',
      zz: '([0-9][0-9]?[0-9]?)[z]',
      zzz: '([0-9][0-9][0-9])',
      ap: '([ap][m])',
      a: '([ap][m])',
      AP: '([AP][M])',
      A: '([AP][M])',
      '%': ''
    };
  var xh = {
    format: function(e, t) {
      var n,
        i = {},
        o = -1 !== t.indexOf('a') || -1 !== t.indexOf('A');
      return (
        (i.d = e.getDate()),
        (i.dd = Eh(i.d, 2)),
        (n = e.getDay()),
        (i.D = n),
        (i.DD = n),
        (i.M = e.getMonth() + 1),
        (n = i.M),
        (i.MM = Eh(n, 2)),
        (i.yyyy = e.getFullYear()),
        (n = i.yyyy),
        (i.yyy = Eh(n, 2) + 'y'),
        (i.yy = Eh(n, 2)),
        (i.y = 'y'),
        (i.H = e.getHours()),
        (n = i.H),
        (i.hh = Eh(o ? _h(n) : n, 2)),
        (i.h = o ? _h(n) : n),
        (i.HH = Eh(n, 2)),
        (n = i.H < 12),
        (i.ap = n ? 'am' : 'pm'),
        (i.a = n ? 'am' : 'pm'),
        (i.AP = n ? 'AM' : 'PM'),
        (i.A = n ? 'AM' : 'PM'),
        (i.m = e.getMinutes()),
        (i.mm = Eh(i.m, 2)),
        (i.s = e.getSeconds()),
        (i.ss = Eh(i.s, 2)),
        (i.z = e.getMilliseconds()),
        (n = i.z),
        (i.zz = n + 'z'),
        (i.zzz = Eh(n, 3)),
        t.replace(wh, function(e, t) {
          var n = i[t];
          return void 0 === n ? t : n;
        })
      );
    },
    parse: function(e, t) {
      for (
        var n, i = kh, o = '', r = 0, s = [''], a = '', l = new Date();
        r < t.length;

      ) {
        for (
          a = t.charAt(r);
          r + 1 < t.length && void 0 !== i[a + t.charAt(r + 1)];

        )
          a += t.charAt(++r);
        void 0 !== (n = i[a]) ? '' !== n && ((o += i[a]), s.push(a)) : (o += a),
          r++;
      }
      o = new RegExp(o);
      var c = e.match(o),
        d = s.length;
      if (!c || c.length !== d) return null;
      for (r = 0; r < d; r++)
        if ('' !== (a = s[r]))
          switch (((n = parseInt(c[r], 10)), a)) {
            case 'yyyy':
            case 'yyy':
              l.setYear(n);
              break;
            case 'yy':
              l.setYear(2e3 + n);
              break;
            case 'MM':
            case 'M':
              l.setMonth(n - 1);
              break;
            case 'dd':
            case 'd':
              l.setDate(n);
              break;
            case 'hh':
            case 'h':
            case 'HH':
            case 'H':
              l.setHours(n);
              break;
            case 'mm':
            case 'm':
              l.setMinutes(n);
              break;
            case 'ss':
            case 's':
              l.setSeconds(n);
              break;
            case 'zzz':
            case 'zz':
            case 'z':
              l.setMilliseconds(n);
              break;
            case 'AP':
            case 'A':
            case 'ap':
            case 'a':
              l.setHours(Ah(l.getHours(), c[r]));
          }
      return l;
    }
  };
  function _h(e) {
    return e % 12 == 0 ? 12 : e % 12;
  }
  function Ah(e, t) {
    return (
      (t = t.toLowerCase()),
      (e = parseInt(e, 10)),
      'pm' === t ? (e < 12 ? e + 12 : e) : 12 === e ? 0 : e
    );
  }
  function Ch(e) {
    return e instanceof Date
      ? new Date(e.getTime())
      : ((e = new Date(e)), isNaN(e.getTime()) ? null : e);
  }
  var Th = 'yyyy-MM-dd';
  function Sh(e, t) {
    return ~[3, 5, 8, 10].indexOf(t)
      ? 30
      : 1 === t
      ? (e % 4 == 0 && e % 100 != 0) || e % 400 == 0
        ? 29
        : 28
      : 31;
  }
  var Mh = 864e5;
  for (
    var Oh = {
        toDate: Ch,
        date2Details: function(e) {
          return {
            year: e.getFullYear(),
            month: e.getMonth(),
            date: e.getDate(),
            day: e.getDay(),
            hours: e.getHours(),
            minutes: e.getMinutes()
          };
        },
        formatDate: function(e, t) {
          return (e = Ch(e)) ? xh.format(e, t || Th) : '';
        },
        parseDate: function(e, t) {
          return xh.parse(e, t || Th);
        },
        getDaysInMonth: Sh,
        getDaysInMonthOfDate: function(e) {
          return e.getDaysInMonth
            ? e.getDaysInMonth()
            : Sh(e.getFullYear(), e.getMonth());
        },
        getFirstDayOfMonth: function(e) {
          return (e = new Date(e.getTime())).setDate(1), e.getDay();
        },
        getStartDateOfMonth: function(e, t) {
          var n = new Date(e, t, 1),
            i = n.getDay();
          return (
            0 === i
              ? n.setTime(n.getTime() - 7 * Mh)
              : n.setTime(n.getTime() - Mh * i),
            n
          );
        },
        getStartDateOfWeek: function(e, t, n) {
          var i = (n = new Date(e, t, n)).getDay();
          return n.setTime(n.getTime() - Mh * i), n;
        },
        getWeekNumber: function(e) {
          (e = new Date(e.getTime())).setHours(0, 0, 0, 0),
            e.setDate(e.getDate() + 3 - ((e.getDay() + 6) % 7));
          var t = new Date(e.getFullYear(), 0, 4);
          return (
            1 +
            Math.round(
              ((e.getTime() - t.getTime()) / Mh - 3 + ((t.getDay() + 6) % 7)) /
                7
            )
          );
        },
        prevMonth: function(e) {
          var t = (e = new Date(e.getTime())).getFullYear(),
            n = e.getMonth(),
            i = e.getDate(),
            o = 0 === n ? t - 1 : t,
            r = 0 === n ? 11 : n - 1,
            s = Sh(o, r);
          return s < i && e.setDate(s), e.setMonth(r), e.setFullYear(o), e;
        },
        nextMonth: function(e) {
          var t = (e = new Date(e.getTime())).getFullYear(),
            n = e.getMonth(),
            i = e.getDate(),
            o = 11 === n ? t + 1 : t,
            r = 11 === n ? 0 : n + 1,
            s = Sh(o, r);
          return s < i && e.setDate(s), e.setMonth(r), e.setFullYear(o), e;
        },
        prevDate: function(e) {
          var t = e.getTime();
          return (e = new Date(t)).setTime(t - Mh), e;
        },
        nextDate: function(e) {
          var t = e.getTime();
          return (e = new Date(t)).setTime(t + Mh), e;
        }
      },
      Lh = { aniEnd: 'animationend', transform: 'transform' },
      Ih = document.createElement('div').style,
      Dh = ['a', 'webkitA', 'MozA', 'OA', 'msA'],
      Nh = [
        'animationend',
        'webkitAnimationEnd',
        'animationend',
        'oAnimationEnd',
        'MSAnimationEnd'
      ],
      Ph = [
        'transform',
        'webkitTransform',
        'MozTransform',
        'OTransform',
        'msTransform'
      ],
      Fh = 0,
      Rh = Dh.length;
    Fh < Rh;
    Fh++
  )
    Dh[Fh] + 'nimation' in Ih &&
      ((Lh.aniEnd = Nh[Fh]), (Lh.transform = Ph[Fh]));
  Lh.transitionEnd = Lh.aniEnd
    .replace('AnimationEnd', 'TransitionEnd')
    .replace('animationend', 'transitionend');
  var Bh = { prefixNames: Lh },
    jh = vh.each,
    $h = document;
  var zh = {
      createElement: function(e, t, n) {
        var i = $h.createElement(e);
        return (
          t &&
            jh(t, function(e, t) {
              i[t] = e;
            }),
          n &&
            jh(n, function(e, t) {
              i.setAttribute(t, e);
            }),
          i
        );
      }
    },
    Hh = vh.extend({}, vh, Oh, Bh, zh),
    Yh = {
      on: function(e, t) {
        this._eventData || (this._eventData = {}),
          this._eventData[e] || (this._eventData[e] = []);
        var n = !1;
        return (
          Hh.each(this._eventData[e], function(e) {
            if (e === t) return (n = !0), !1;
          }),
          n || this._eventData[e].push(t),
          this
        );
      },
      once: function(e, t) {
        var n = this;
        return (
          this.on(e, function i() {
            t.apply(this, arguments), n.off(e, i);
          }),
          this
        );
      },
      off: function(e, t) {
        return (
          this._eventData || (this._eventData = {}),
          this._eventData[e] && this._eventData[e].length
            ? (t
                ? Hh.each(this._eventData[e], function(n, i) {
                    if (n === t) return this._eventData[e].splice(i, 1), !1;
                  })
                : (this._eventData[e] = []),
              this)
            : this
        );
      },
      trigger: function(e) {
        if ((this._eventData || (this._eventData = {}), !this._eventData[e]))
          return this;
        var t = this._eventData[e].slice.call(arguments, 1);
        return (
          Hh.each(this._eventData[e], function(e) {
            e.apply(null, t);
          }),
          this
        );
      }
    },
    Wh = {
      C: {
        value: 'year',
        rows: function(e) {
          for (
            var t = [],
              n = e.options.min.getFullYear(),
              i = e.options.max.getFullYear(),
              o = n;
            o <= i;

          )
            t.push([o++]);
          return t;
        },
        input: 'setFullYear'
      },
      Y: {
        value: 'month',
        rows: function(e) {
          var t = [],
            n = e.now.getFullYear(),
            i = e.options.min.getFullYear(),
            o = e.options.min.getMonth(),
            r = e.options.max.getFullYear(),
            s = e.options.max.getMonth();
          n > i && (o = 0), r > n && (s = 11);
          for (var a = o; a <= s; ) t.push([a++]);
          return t;
        },
        input: 'setMonth'
      },
      M: {
        value: 'date',
        rows: function(e) {
          for (
            var t = [],
              n = e.now,
              i = Hh.getDaysInMonthOfDate(n),
              o = 0,
              r = 1,
              s = Hh.getFirstDayOfMonth(e.now),
              a = null;
            r <= i;

          )
            o % 7 == 0 && ((a = []), t.push(a)), a.push(o < s ? 0 : r++), o++;
          return t;
        },
        input: 'setDate'
      },
      W: {
        value: 'date',
        rows: function(e) {
          for (
            var t = [],
              n = e.parsedNow,
              i = Hh.getStartDateOfWeek(n.year, n.month, n.date),
              o = 1,
              r = [];
            o++ <= 7;

          )
            r.push(i.getDate()), (i = Hh.nextDate(i));
          return t.push(r), t;
        },
        input: function(e, t) {
          var n = t.now,
            i = t.parsedNow,
            o = Hh.toDate(n),
            r = i.date;
          return (
            Math.abs(e - r) < 7
              ? o.setDate(e)
              : e > r
              ? (o.setDate(e), (o = Hh.nextMonth(o)))
              : (o.setDate(e), (o = Hh.prevMonth(o))),
            o
          );
        }
      },
      D: {
        value: 'hours',
        rows: function(e) {
          for (var t = [], n = 0; n <= 23; ) t.push([n++]);
          return t;
        },
        input: 'setHours'
      },
      H: {
        value: 'minutes',
        rows: function(e) {
          for (var t = [], n = 0; n <= 59; ) t.push([n++]);
          return t;
        },
        input: 'setMinutes'
      }
    };
  function Uh(e) {
    this.options = Hh.extend({ default: new Date(), type: 'M' }, e || {});
    var t = Hh.toDate(this.options.default);
    t || (t = new Date()), this.updateNow(t);
  }
  Hh.each(Wh, function(e) {
    var t = e.input;
    Hh.isStr(t) &&
      (e.input = function(e, n) {
        var i = n.now,
          o = Hh.toDate(i);
        return o[t](e), o;
      });
  }),
    Hh.extend(
      Uh.prototype,
      {
        updateNow: function(e) {
          e < this.options.min && (e = this.options.min),
            e > this.options.max && (e = this.options.max),
            (this.now = new Date(e.getTime())),
            (this.parsedNow = Hh.date2Details(this.now));
        },
        _getConf: function() {
          return Wh[this.options.type] || Wh.M;
        },
        getRows: function() {
          return this._getConf().rows(this);
        },
        getInputValue: function(e) {
          return this._getConf().input(e, this);
        },
        getLevelValue: function() {
          var e = this._getConf();
          return this.parsedNow[e.value];
        },
        destroy: function() {
          (this.now = null), (this.parsedNow = null), (this.options = null);
        }
      },
      Yh
    );
  var Vh = Uh,
    Gh = { Core: { DateTime: Vh, events: Yh, utils: Hh } },
    Jh = {
      'zh-CN': {
        day: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        shortDay: ['日', '一', '二', '三', '四', '五', '六'],
        MDW: 'M月d日D',
        YM: 'yyyy年M月',
        OK: '确定',
        CANCEL: '取消',
        CLEAR: '清除'
      },
      EN: {
        day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        shortDay: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        MDW: 'D, MM-d',
        YM: 'yyyy-M',
        OK: 'OK',
        CANCEL: 'CANCEL',
        CLEAR: 'CLEAR'
      }
    },
    Zh = {
      mousedown: 'touchstart',
      mousemove: 'touchmove',
      mouseup: 'touchend'
    },
    qh = 'ontouchstart' in window,
    Kh = qh ? 'touchstart' : 'mousedown',
    Qh = qh ? 'touchmove' : 'mousemove',
    Xh = qh ? 'touchend' : 'mouseup',
    ep = qh ? 'touchcancel' : 'mouseup';
  function tp(e, t) {
    (this.container = document.body),
      e || (e = {}),
      (this.lang = e.lang || 'EN'),
      (this.lang = e.lang),
      (this.destroyed = !1);
    var n = Jh[this.lang];
    n || (n = Jh.EN),
      (this.config = Hh.extend(n, t || {})),
      (this.options = e),
      (this.needDefFormat = !this.options.format),
      this.init(),
      this._setOptions(),
      this._init();
  }
  var np = tp.prototype;
  (tp.extend = function(e, t) {
    var n = function() {};
    return (
      (n.prototype = np),
      (e.prototype = new n()),
      (e.prototype.super = np),
      (e.prototype.constructor = e),
      Hh.extend(e.prototype, t || {}),
      e
    );
  }),
    Hh.extend(
      np,
      {
        _setOptions: function() {
          var e = this,
            t = {
              min: new Date(1900, 0, 1, 0, 0, 0, 0),
              max: new Date(2100, 11, 31, 23, 59, 59, 999)
            };
          ['default', 'min', 'max'].forEach(function(n) {
            e.options.format && e.options[n] && Hh.isStr(e.options[n])
              ? (e.options[n] = Hh.parseDate(e.options[n], e.options.format))
              : t[n] && (e.options[n] = t[n]);
          });
        },
        setDateTime: function(e) {
          (this.dateTime = new Vh(this.options)),
            this._setDateTime(e),
            e ? this.selfChange() : (this.render(), this.afterRender());
        },
        setNow: function(e) {
          (this.options.default = e), this.setDateTime();
        },
        _setDateTime: Hh.noop,
        init: Hh.noop,
        _init: function() {
          this._initEle(), this.bindEvts(), this.setDateTime();
        },
        _initEle: function() {
          var e = Hh.createElement('div', { className: 'hap-picker' }),
            t = Hh.createElement('div', { className: 'picker-mask' });
          t.dataset.click = 'cancel';
          var n = Hh.createElement('div', { className: 'picker-container' });
          (this.rootEle = e),
            (this.ele = n),
            this._initHead(),
            this._initContent(),
            this._initFoot(),
            this.initEle(),
            this._handleAni(),
            e.appendChild(t),
            e.appendChild(n),
            this.container.appendChild(e);
        },
        initEle: Hh.noop,
        _initHead: function() {
          (this.head = Hh.createElement('div', { className: 'picker-head' })),
            this.ele.appendChild(this.head);
        },
        _initContent: function() {
          (this.content = Hh.createElement(
            'div',
            { className: 'picker-content' },
            { 'data-touchstart': '_start' }
          )),
            this.ele.appendChild(this.content);
        },
        _initFoot: function() {
          (this.foot = Hh.createElement('div', {
            className: 'picker-foot',
            innerHTML:
              '<a href="javascript:;" class="picker-act picker-act-cancel" data-active="active" data-click="cancel">' +
              this.config.CANCEL +
              '</a><a href="javascript:;" class="picker-act picker-act-ok" data-active="active" data-click="ok">' +
              this.config.OK +
              '</a>'
          })),
            this.ele.appendChild(this.foot);
        },
        _handleAni: function() {
          var e = this.rootEle;
          e.classList.add('time-picker-ani'),
            e.addEventListener(
              Hh.prefixNames.aniEnd,
              function t() {
                e.classList.remove('time-picker-ani'),
                  e.removeEventListener(Hh.prefixNames.aniEnd, t, !1);
              },
              !1
            );
        },
        _addEvt: function(e) {
          this.rootEle.addEventListener(e, this, !1);
        },
        _removeEvt: function(e) {
          this.rootEle.removeEventListener(e, this, !1);
        },
        _stop: function(e) {
          e.preventDefault(), e.stopPropagation();
        },
        bindEvts: function() {
          this._addEvt(Kh),
            this._addEvt(Qh),
            this._addEvt(Xh),
            this._addEvt(ep);
        },
        changeTo: function(e, t) {
          (this.options.default = this.dateTime.getInputValue(e)),
            this.setDateTime(t);
        },
        selV: function(e) {
          var t = e.realTarget,
            n = t.getAttribute('data-val') - 0;
          !t.classList.contains('picker-disabled') &&
            this.shouldSet(n) &&
            this._selV(n);
        },
        _selV: function(e) {
          this.changeTo(e, !0);
        },
        shouldSet: function(e) {
          return !0;
        },
        clear: function() {
          this.setNow(), this.trigger('cleared'), this.hide();
        },
        cancel: function() {
          this.trigger('canceled'), this.hide();
        },
        ok: function() {
          var e = this.dateTime.now,
            t = this.options.format;
          t && (e = Hh.formatDate(e, t)),
            this.trigger('selected', e, this.dateTime.now),
            this.hide();
        },
        __activeStart: function(e) {
          this.__activeEnd();
          var t = this._getTargetAction(e, 'active');
          t.action && ((this.activeTA = t), t.target.classList.add(t.action));
        },
        __activeEnd: function() {
          this.activeTA &&
            this.activeTA.target.classList.remove(this.activeTA.action),
            (this.activeTA = null);
        },
        __touchstart: function(e) {
          this.__activeStart(e), this.__start(e);
          var t = e.target,
            n = e.targetTouches[0];
          (this.__s_x = n.pageX),
            (this.__s_y = n.pageY),
            (this.__startTime = e.timeStamp),
            (this.__target = t);
        },
        __touchmove: function(e) {
          if ((this.__move(e), this.__target)) {
            var t = e.changedTouches[0];
            (this.__target !== e.target ||
              Math.abs(t.pageX - this.__s_x) > 10 ||
              Math.abs(t.pageY - this.__s_y) > 10) &&
              (this.__target = null);
          }
        },
        __touchend: function(e) {
          if ((this.__activeEnd(e), this.__end(e), this.__target)) {
            var t = e.timeStamp;
            if (!(t - this.__lastTime < 200 || t - this.__startTime > 700)) {
              var n = this.__target;
              (this.__lastTime = t),
                (this.__target = null),
                (e.__target = n),
                (e.__type = 'click');
            }
          }
        },
        __touchcancel: function(e) {
          this.__activeEnd(e), this.__end(e), (this.__target = null);
        },
        handleEvent: function(e) {
          this._stop(e);
          var t = e.type;
          Zh[t] &&
            ((t = Zh[t]),
            (e.__type = t),
            (e.touches = e.changedTouches = e.targetTouches = [e])),
            this['__' + t](e),
            this._handleEvent(e);
        },
        _getTargetAction: function(e, t) {
          for (
            var n = e.__target || e.target,
              i = 'data-' + (t || e.__type || e.type),
              o = '';
            n && n !== this.rootEle && !(o = n.getAttribute(i));

          )
            n = n.parentNode;
          return { target: n, action: o };
        },
        _handleEvent: function(e) {
          var t = this._getTargetAction(e);
          t.action &&
            ((e.realTarget = t.target),
            this.panel && this.panel[t.action]
              ? this.panel[t.action](e)
              : this[t.action] && this[t.action](e));
        },
        show: function() {
          this.rootEle &&
            ((this.rootEle.style.display = 'block'), this._handleAni());
        },
        hide: function() {
          this.rootEle && (this.rootEle.style.display = 'none');
        },
        desEvts: function() {
          this._removeEvt(Kh),
            this._removeEvt(Qh),
            this._removeEvt(Xh),
            this._removeEvt(ep);
        },
        destroy: function() {
          this.destroyed ||
            (this.trigger('destroy'),
            this.hide(),
            this.desEvts(),
            this.container.removeChild(this.rootEle),
            this.dateTime.destroy(),
            this.panel && this.panel.destroy(),
            Hh.set2Null(
              [
                'container',
                'rootEle',
                'ele',
                'head',
                'content',
                'foot',
                'dateTime',
                'panel',
                'config',
                'lang'
              ],
              this
            ),
            (this.destroyed = !0));
        }
      },
      Yh
    );
  ['selfChange', 'render', 'afterRender', '__start', '__move', '__end'].forEach(
    function(e) {
      np[e] = function() {
        this.panel &&
          this.panel[e] &&
          this.panel[e].apply(this.panel, arguments);
      };
    }
  );
  var ip = tp;
  function op(e) {
    (this.picker = e),
      (this.main = null),
      (this.mainStyle = null),
      (this.arrow = null),
      (this.arrowStyle = null);
  }
  Hh.extend(op.prototype, {
    render: function() {
      this.main || this._init(),
        this._renderHead(),
        (this.main.innerHTML =
          sp(this.picker.prevDateTime, this.picker.config, 'prev') +
          sp(this.picker.dateTime, this.picker.config, 'curr') +
          sp(this.picker.nextDateTime, this.picker.config, 'next'));
    },
    _renderHead: function() {
      this.picker.head.innerHTML =
        '<div class="picker-year" data-click="toYears" data-active="active">' +
        this.picker.dateTime.parsedNow.year +
        '</div><div class="picker-date picker-head-active" data-active="active">' +
        Hh.formatDate(
          this.picker.dateTime.now,
          this.picker.config.MDW.replace('D', '#')
        ).replace(
          '#',
          this.picker.config.day[this.picker.dateTime.parsedNow.day]
        ) +
        '</div>';
    },
    afterRender: function() {
      this.activeDateEle = this.main.querySelector(
        '.picker-bdy-curr .picker-active'
      );
    },
    selfChange: function() {
      this._renderHead(),
        this.activeDateEle &&
          this.activeDateEle.classList.remove('picker-active');
      var e = this.picker.dateTime.getLevelValue(),
        t = this.main.querySelector('.picker-bdy-curr i[data-val="' + e + '"]');
      t.classList.add('picker-active'), (this.activeDateEle = t);
    },
    _init: function() {
      this._initMain(), this._initArrow();
    },
    _initMain: function() {
      (this.main = Hh.createElement('div', { className: 'date-picker-main' })),
        (this.mainStyle = this.main.style),
        this.picker.content.appendChild(this.main),
        (this.mainWidth = this.main.offsetWidth);
    },
    _initArrow: function() {
      (this.arrow = Hh.createElement('div', {
        className: 'picker-actions-arrow'
      })),
        (this.arrow.innerHTML =
          '<i data-click="prevMonth" data-active="active">←</i><i data-click="nextMonth" data-active="active">→</i>'),
        (this.arrowStyle = this.arrow.style),
        this.picker.content.appendChild(this.arrow);
    },
    show: function() {
      (this.mainStyle.display = 'block'), (this.arrowStyle.display = 'block');
    },
    hide: function() {
      (this.mainStyle.display = 'none'), (this.arrowStyle.display = 'none');
    },
    _slideTo: function(e, t, n) {
      var i = this,
        o = 3 * Math.abs(e - t),
        r = function e() {
          i._slideEndFn &&
            (window.clearTimeout(i._slideEndFn.tid),
            (i._slideEndFn = null),
            i.main.removeEventListener(Hh.prefixNames.transitionEnd, e, !1),
            (i.mainStyle.webkitTransition = 'none 0ms'),
            (i.mainStyle.transition = 'none 0ms'),
            (i.mainStyle[Hh.prefixNames.transform] =
              'translateX(-100%) translateZ(0)'),
            n && n.call(i));
        };
      this._slideEndFn && this._slideEndFn(),
        (this._slideEndFn = r),
        (this.mainStyle[Hh.prefixNames.transform] =
          'translateX(' + e + '%) translateZ(0)'),
        o > 0
          ? ((this._slideEndFn.tid = window.setTimeout(r, o)),
            (o += 'ms'),
            (this.mainStyle.webkitTransition = o),
            (this.mainStyle.transition = o))
          : r(),
        this.main.addEventListener(Hh.prefixNames.transitionEnd, r, !1);
    },
    _befChange: function(e) {
      return (
        Hh.isNum(e) || (e = -100), this._slideEndFn && this._slideEndFn(), e
      );
    },
    prevMonth: function(e) {
      (e = this._befChange(e)),
        this._slideTo(0, e, function() {
          this.picker.setNowToPrev();
        });
    },
    nextMonth: function(e) {
      (e = this._befChange(e)),
        this._slideTo(-200, e, function() {
          this.picker.setNowToNext();
        });
    },
    _start: function(e) {
      var t = e.touches[0].pageX,
        n = this,
        i = -100,
        o = !1;
      (this.__move = function(e) {
        var r = e.touches[0].pageX - t;
        r = (100 * r) / n.mainWidth;
        var s = Math.abs(r);
        s > 100 && (r = r > 0 ? 100 : -100),
          (o = s > 55),
          (i = -100 + r),
          (n.arrowStyle.opacity = (100 - 0.9 * s) / 100),
          (n.mainStyle[Hh.prefixNames.transform] =
            'translateX(' + i + '%) translateZ(0)');
      }),
        (this.__end = function(e) {
          (this.__move = null),
            (this.__end = null),
            (n.arrowStyle.opacity = 1),
            o
              ? n[i > -100 ? 'prevMonth' : 'nextMonth'](i)
              : n._slideTo(-100, i);
        }),
        this._slideEndFn && this._slideEndFn();
    },
    destroy: function() {
      this._slideEndFn && this._slideEndFn(),
        this.picker.content.removeChild(this.main),
        this.picker.content.removeChild(this.arrow),
        Hh.set2Null(
          [
            'picker',
            'main',
            'mainStyle',
            'arrow',
            'arrowStyle',
            'activeDateEle',
            '__move',
            '__end'
          ],
          this
        );
    }
  });
  var rp = op;
  function sp(e, t, n) {
    if (!e) return '';
    var i = new Date(),
      o = i.getFullYear(),
      r = i.getMonth(),
      s = i.getDate(),
      a = e.parsedNow,
      l = Hh.date2Details(e.options.min),
      c = Hh.date2Details(e.options.max),
      d = (function(e, t, n) {
        var i = !1;
        e.year > t.year
          ? (i = !0)
          : e.year === t.year && (i = e.month >= t.month);
        i &&
          (e.year < n.year
            ? (i = !0)
            : e.year === n.year && (i = e.month <= n.month));
        return i;
      })(a, l, c);
    return (
      '<div class="picker-bdy' +
      (n = ' picker-bdy-' + n) +
      '"><div class="date-picker-title">' +
      Hh.formatDate(e.now, t.YM) +
      '</div><div class="date-picker-days"><div class="date-picker-days-title">' +
      t.shortDay
        .map(function(e) {
          return '<i>' + e + '</i>';
        })
        .join('') +
      '</div><div class="date-picker-days-bdy">' +
      e
        .getRows()
        .map(function(e) {
          return (
            '<div class="picker-row">' +
            e
              .map(function(e) {
                var t =
                  a.year === o && a.month === r && e === s ? 'picker-now' : '';
                e === a.date &&
                  (t = t ? t + ' picker-active' : 'picker-active'),
                  (d &&
                    !(function(e, t, n, i) {
                      if (t.year === n.year && t.month === n.month)
                        return e < n.date;
                      if (t.year === i.year && t.month === i.month)
                        return e > i.date;
                      return !1;
                    })(e, a, l, c)) ||
                    (t = t ? t + ' picker-disabled' : 'picker-disabled'),
                  t && (t = ' class="' + t + '"');
                var n = ' data-val="' + e + '" ';
                return (
                  e &&
                    (n +=
                      'data-active="active" data-click="selV" data-val="' +
                      e +
                      '"'),
                  '<i' + n + t + '><span>' + e + '</span></i>'
                );
              })
              .join('') +
            '</div>'
          );
        })
        .join('') +
      '</div></div></div>'
    );
  }
  var ap = {
    C: dp('year'),
    Y: dp('month', function(e) {
      return e + 1;
    })
  };
  function lp(e) {
    (this.picker = e),
      (this.main = null),
      (this.mainStyle = null),
      (this.posY = 0),
      (this.type = e.options.type);
  }
  Hh.extend(lp.prototype, {
    render: function() {
      (this.rows = this.picker.dateTime.getRows()),
        this.main || this._init(),
        this._renderHead(),
        (this.main.innerHTML = ap[this.type](this.picker.dateTime, this.rows));
    },
    _renderHead: function() {
      var e = 'C' === this.type;
      this.picker.head.innerHTML =
        '<div class="picker-year' +
        (e ? ' picker-head-active' : '') +
        '"' +
        (e ? '' : ' data-click="toYears" data-active="active"') +
        '>' +
        this.picker.dateTime.parsedNow.year +
        '</div><div class="picker-date" data-click="toDays" data-active="active">' +
        Hh.formatDate(
          this.picker.dateTime.now,
          this.picker.config.MDW.replace('D', '#')
        ).replace(
          '#',
          this.picker.config.day[this.picker.dateTime.parsedNow.day]
        ) +
        '</div>';
    },
    afterRender: function() {
      var e = this.main.querySelector('.picker-active');
      if (e) {
        (this.itemHeight = e.offsetHeight), (this.activeEle = e);
        var t = e.offsetTop - (this.contentHeight - this.itemHeight) / 2;
        this._slideTo(-t, 0);
      }
    },
    _init: function() {
      this._initMain(), this._initMidd();
    },
    _initMain: function() {
      (this.main = Hh.createElement('div', {
        className: 'scroller-picker-main'
      })),
        (this.mainStyle = this.main.style),
        this.picker.content.appendChild(this.main),
        (this.contentHeight = this.picker.content.offsetHeight);
    },
    _initMidd: function() {
      (this.midd = Hh.createElement('div', {
        className: 'scroller-picker-midd'
      })),
        (this.middStyle = this.midd.style),
        this.picker.content.appendChild(this.midd);
    },
    show: function() {
      (this.mainStyle.display = 'block'), (this.middStyle.display = 'block');
    },
    hide: function() {
      (this.mainStyle.display = 'none'), (this.middStyle.display = 'none');
    },
    selfChange: function() {
      if (!this.__ani) {
        var e = this;
        this._renderHead(), this.activeEle.classList.remove('picker-active');
        var t = this.picker.dateTime.getLevelValue(),
          n = this.main.querySelector('.picker-row[data-val="' + t + '"]'),
          i = (this.activeEle.dataset.val - t) * this.itemHeight + this.posY;
        e._slideTo(i, 0, function() {
          n.classList.add('picker-active'), (e.activeEle = n);
        });
      }
    },
    _slideTo: function(e, t, n) {
      var i = this,
        o = function e(t) {
          i._slideEndFn &&
            (window.clearTimeout(i._slideEndFn.tid),
            (i._slideEndFn = null),
            i.main.removeEventListener(Hh.prefixNames.transitionEnd, e, !1),
            n && n.call(i, t),
            (i.mainStyle.webkitTransition = 'none 0ms'),
            (i.mainStyle.transition = 'none 0ms'));
        };
      this._slideEndFn && this._slideEndFn(),
        (this._slideEndFn = o),
        (this.posY = e),
        (this.mainStyle[Hh.prefixNames.transform] =
          'translateY(' + this.posY + 'px) translateZ(0)');
      var r = ' cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      t > 0
        ? ((this._slideEndFn.tid = window.setTimeout(function() {
            o({});
          }, t + 20)),
          (t += 'ms'),
          (this.mainStyle.webkitTransition = t + r),
          (this.mainStyle.transition = t + r),
          this.main.addEventListener(Hh.prefixNames.transitionEnd, o, !1))
        : o();
    },
    _start: function(e) {
      this._slideEndFn && this._slideEndFn();
      var t = e.touches[0].pageY,
        n = this,
        i = this.posY,
        o = i,
        r = e.timeStamp,
        s = i;
      this.__move = function(e) {
        var a = e.touches[0].pageY - t;
        o = i + a;
        var l = e.timeStamp;
        l - r > 300 && ((r = l), (s = o)),
          (n.mainStyle[Hh.prefixNames.transform] =
            'translateY(' + o + 'px) translateZ(0)');
      };
      var a = function(e) {
        var t,
          o = e - i,
          r = Math.round(o / n.itemHeight),
          s = n.picker.dateTime.getLevelValue(),
          a = s - r,
          l = n.rows[0][0],
          c = n.rows[n.rows.length - 1][0];
        return (
          a < l
            ? ((a = l), (t = (r = s - l) * n.itemHeight + i))
            : a > c
            ? ((a = c), (t = (r = s - c) * n.itemHeight + i))
            : (t = r * n.itemHeight + i),
          { realTo: t, targetV: a }
        );
      };
      this.__end = function(e) {
        (this.__move = null), (this.__end = null);
        var t,
          i = e.timeStamp - r;
        if (i < 300) {
          var l = -n.rows.length * n.itemHeight,
            c = n.contentHeight;
          s < l ? (s = l) : s > c && (s = c);
          var d = (function(e, t, n) {
            var i = e - t,
              o = Math.abs(i) / n;
            return {
              destination: e + ((o * o) / 0.0012) * (i < 0 ? -1 : 1),
              speed: o
            };
          })(o, s, i);
          (o = d.destination), (t = d.speed);
        }
        var h = a(o),
          p = h.realTo,
          u = h.targetV;
        void 0 === t
          ? (t = (100 * Math.abs(p - o)) / n.itemHeight) > 50 && (t = 20)
          : (t = Math.abs(p - s) / t),
          n._slideTo(p, t, function(e) {
            if (e || !t) n.picker.changeTo(u);
            else {
              var i = ((r = n.main),
                +(
                  (s = (s = window.getComputedStyle(r, null))[
                    Hh.prefixNames.transform
                  ]
                    .split(')')[0]
                    .split(', '))[13] || s[5]
                )),
                o = a(i);
              n._slideTo(o.realTo, 0, function() {
                (n.__ani = !0),
                  n.picker.changeTo(o.targetV, !0),
                  (n.__ani = !1);
              });
            }
            var r, s;
          });
      };
    },
    destroy: function() {
      this._slideEndFn && this._slideEndFn(),
        this.picker.content.removeChild(this.main),
        this.picker.content.removeChild(this.midd),
        Hh.set2Null(
          [
            'picker',
            'main',
            'mainStyle',
            'midd',
            'middStyle',
            'activeEle',
            '__move',
            '__end'
          ],
          this
        );
    }
  });
  var cp = lp;
  function dp(e, t) {
    return (
      t ||
        (t = function(e) {
          return e;
        }),
      function(n, i) {
        var o = n.parsedNow[e];
        return (
          '<ul>' +
          i
            .map(function(e) {
              var n = e[0],
                i = '';
              return (
                n === o && (i = ' picker-active'),
                '<li class="picker-row' +
                  i +
                  '" data-click="selV" data-val="' +
                  n +
                  '">' +
                  t(n) +
                  '</li>'
              );
            })
            .join('') +
          '</ul>'
        );
      }
    );
  }
  function hp() {
    ip.apply(this, arguments);
  }
  ip.extend(hp, {
    init: function() {
      this.needDefFormat && (this.options.format = 'yyyy-MM-dd'),
        Hh.extend(this.options, { type: 'M' }),
        (this.panel = this.daysPanel = new rp(this));
    },
    _setDateTime: function() {
      var e = Hh.prevMonth(this.dateTime.now),
        t = Hh.nextMonth(this.dateTime.now);
      (this.prevDateTime = new Vh(Hh.extend({}, this.options, { default: e }))),
        this.prevDateTime.parsedNow.month !== e.getMonth() &&
          (this.prevDateTime.destroy(), (this.prevDateTime = null)),
        (this.nextDateTime = new Vh(
          Hh.extend({}, this.options, { default: t })
        )),
        this.nextDateTime.parsedNow.month !== t.getMonth() &&
          (this.nextDateTime.destroy(), (this.nextDateTime = null));
    },
    initEle: function() {
      this.ele.classList.add('date-picker-container');
    },
    shouldSet: function(e) {
      return !!e;
    },
    setNowToPrev: function() {
      this.prevDateTime && this.setNow(this.prevDateTime.now);
    },
    setNowToNext: function() {
      this.nextDateTime && this.setNow(this.nextDateTime.now);
    },
    _to: function(e, t) {
      Hh.extend(this.options, { type: e }),
        this.panel.hide(),
        this[t] ? this[t].show() : (this[t] = new cp(this)),
        (this.panel = this[t]),
        this.setDateTime();
    },
    toYears: function() {
      this._to('C', 'yearsPanel');
    },
    toMonths: function() {
      this._to('Y', 'monthsPanel');
    },
    toDays: function() {
      this._to('M', 'daysPanel');
    }
  });
  var pp = hp,
    up = {
      D: gp('hours', null, function(e) {
        return e.length / 2;
      }),
      H: gp('minutes', function(e, t, n) {
        return t % 5 == 0
          ? '<i style="' + n(t, !0) + '">' + Hh.pad(e, 2) + '</i>'
          : '<b></b>';
      })
    };
  function fp(e) {
    (this.picker = e),
      (this.main = null),
      (this.mainStyle = null),
      (this.headActiveEle = null),
      (this.activeEle = null),
      (this.pickerLineEle = null),
      (this.type = e.options.type);
  }
  Hh.extend(fp.prototype, {
    render: function() {
      (this.rows = this.picker.dateTime.getRows()), this.main || this._init();
      var e = 'D' === this.type;
      (this.picker.head.innerHTML =
        '<div class="picker-hour' +
        (e ? ' picker-head-active' : '') +
        '"' +
        (e ? '' : ' data-click="toHours" data-active="active"') +
        '>' +
        Hh.formatDate(this.picker.dateTime.now, 'HH') +
        '</div>:<div class="picker-minute' +
        (e ? '' : ' picker-head-active') +
        '"' +
        (e ? ' data-click="toMinutes" data-active="active"' : '') +
        '>' +
        Hh.formatDate(this.picker.dateTime.now, 'mm') +
        '</div>'),
        (this.main.innerHTML = up[this.type](this.picker.dateTime, this.rows));
    },
    afterRender: function() {
      (this.headHourEle = this.picker.head.querySelector('.picker-hour')),
        (this.headMinuteEle = this.picker.head.querySelector('.picker-minute')),
        (this.headActiveEle = this.picker.head.querySelector(
          '.picker-head-active'
        )),
        (this.activeEle = this.main.querySelector('.picker-active')),
        (this.pickerLineEle = this.main.querySelector('.time-picker-line'));
    },
    _init: function() {
      this._initMain();
    },
    _initMain: function() {
      (this.main = Hh.createElement('div', {
        className:
          'time-picker-main ' +
          ('D' === this.type
            ? 'time-picker-main-hours'
            : 'time-picker-main-minutes')
      })),
        (this.mainStyle = this.main.style),
        this.picker.content.appendChild(this.main);
    },
    show: function() {
      this.mainStyle.display = 'block';
    },
    hide: function() {
      this.mainStyle.display = 'none';
    },
    selfChange: function() {
      var e = Hh.formatDate(this.picker.dateTime.now, 'HH'),
        t = Hh.formatDate(this.picker.dateTime.now, 'mm');
      (this.headHourEle.innerHTML = e), (this.headMinuteEle.innerHTML = t);
      var n = this.picker.dateTime.getLevelValue(),
        i = this.main.querySelector('.picker-cell[data-val="' + n + '"]');
      this.activeEle && this.activeEle.classList.remove('picker-active'),
        i.classList.add('picker-active'),
        (this.activeEle = i);
      var o = +i.style[Hh.prefixNames.transform].match(
        /rotate\((-?\d+)deg\)/
      )[1];
      (o -= 90),
        (this.pickerLineEle.style[Hh.prefixNames.transform] =
          'rotate(' + o + 'deg)'),
        this.pickerLineEle.classList[
          i.classList.contains('picker-cell-inner') ? 'add' : 'remove'
        ]('time-picker-line-inner');
    },
    _start: function(e) {
      var t = this,
        n = null,
        i = function(e) {
          var i = document.elementFromPoint(e.pageX, e.pageY);
          i &&
            (i.classList.contains('picker-cell') ||
              ((i = i.parentElement) && i.classList.contains('picker-cell'))) &&
            ((n = i), t.picker.changeTo(i.getAttribute('data-val'), !0));
        };
      i(e.touches[0]),
        (this.__move = function(e) {
          i(e.touches[0]);
        }),
        (this.__end = function(e) {
          (this.__move = null),
            (this.__end = null),
            n && t.picker.selV({ realTarget: n });
        });
    },
    destroy: function() {
      this.picker.content.removeChild(this.main),
        Hh.set2Null(
          [
            'picker',
            'main',
            'mainStyle',
            'headHourEle',
            'headMinuteEle',
            'headActiveEle',
            'activeEle',
            'pickerLineEle',
            '__move',
            '__end'
          ],
          this
        );
    }
  });
  var mp = fp;
  function gp(e, t, n) {
    return (
      t ||
        (t = function(e, t, n) {
          return '<i style="' + n(t, !0) + '">' + e + '</i>';
        }),
      n ||
        (n = function(e) {
          return e.length;
        }),
      function(i, o) {
        var r = o.length,
          s = n(o),
          a = s !== r,
          l = 360 / s,
          c = '',
          d = 1,
          h = 'minutes' === e;
        h && (c += 'time-picker-minutes-' + (d = i.options.minuteStep || 5));
        var p = function(e, t) {
            var n = l * e,
              i = '';
            return (
              t && ((n = -n), (i = 'translate(-50%, -50%) ')),
              '-webkit-transform:' +
                (i += 'rotate(' + n + 'deg)') +
                ';transform:' +
                i +
                ';'
            );
          },
          u = Hh.date2Details(i.options.min),
          f = Hh.date2Details(i.options.max),
          m = i.parsedNow[e],
          g = '',
          y = '';
        return (
          '<ul class="' +
          c +
          '">' +
          o
            .map(function(e, n) {
              var o = e[0],
                r = '';
              if (o === m) {
                r = ' picker-active';
                var s = 'rotate(' + (l * n - 90) + 'deg)';
                (g = '-webkit-transform:' + s + ';transform:' + s),
                  a && (!o || o > 12) && (y += ' time-picker-line-inner');
              }
              return d > 1 && n % d != 0
                ? ''
                : ((function(e) {
                    if (h) {
                      var t = i.parsedNow.hours;
                      return t === u.hours
                        ? e < u.minutes
                        : t === f.hours && e > f.minutes;
                    }
                    return e < u.hours || e > f.hours;
                  })(o) && (r += ' picker-disabled'),
                  a && (!o || o > 12) && (r += ' picker-cell-inner'),
                  '<li class="picker-cell' +
                    r +
                    '" data-click="selV" data-val="' +
                    o +
                    '" style="' +
                    p(n) +
                    '">' +
                    t(o, n, p) +
                    '</li>');
            })
            .join('') +
          '</ul><div class="time-picker-line' +
          y +
          '" style="' +
          g +
          '"></div>'
        );
      }
    );
  }
  function yp() {
    ip.apply(this, arguments);
  }
  ip.extend(yp, {
    init: function() {
      this.needDefFormat && (this.options.format = 'HH:mm');
      var e = this.options.minuteStep;
      e || (e = 5),
        1 !== e && 5 !== e && 10 !== e && (e = 5),
        Hh.extend(this.options, { type: 'D', minuteStep: e }),
        (this.panel = this.hoursPanel = new mp(this));
    },
    initEle: function() {
      this.ele.classList.add('time-picker-container');
    },
    _selV: function(e) {
      var t = this;
      this.super._selV.call(this, e),
        setTimeout(function() {
          t.toMinutes();
        });
    },
    _to: function(e, t) {
      this.options.type !== e &&
        (Hh.extend(this.options, { type: e }),
        this.panel.hide(),
        this[t] ? this[t].show() : (this[t] = new mp(this)),
        (this.panel = this[t]),
        this.setDateTime());
    },
    toHours: function() {
      this._to('D', 'hoursPanel');
    },
    toMinutes: function() {
      this._to('H', 'minutesPanel');
    }
  });
  var bp = yp;
  (Gh.Date = pp), (Gh.Time = bp);
  var vp = Gh;
  let Ep;
  const wp = ['text', 'date', 'time', 'multi-text'],
    kp = new Date(),
    xp = {
      lang: 'zh-CN',
      format: 'yyyy-MM-dd',
      default: `${kp.getFullYear()}-${kp.getMonth() + 1}-${kp.getDate()}`,
      min: '1970-01-01',
      max: '2100-12-31'
    };
  let _p = 0;
  const Ap = {
    create() {
      const e = document.createElement('span'),
        t = this.type;
      (this.className = 'hap-ipt-' + _p),
        (this.styleId = 'hap-style-' + _p),
        e.classList.add('hap-element'),
        (e.style.fontSize = '32px'),
        (e.style.alignSelf = 'center');
      const n = this.data.attr;
      let i;
      switch (
        ((this.textPickerData = {
          range: n.range,
          seleted: n.seleted,
          value: n.value,
          uid: _p
        }),
        -1 === wp.indexOf(t) &&
          console.log(
            `使用了${t}, picker 组件支持的type类型为：${JSON.stringify(wp)}`
          ),
        t)
      ) {
        case 'text':
        case 'multi-text':
          (i = new hh(this.textPickerData)),
            this.extendHandler(i),
            e.setAttribute('data-type', 'text');
          break;
        case 'date':
          (this.dateOptions = Cp('date', n)),
            e.setAttribute('data-type', 'date');
          break;
        case 'time':
          (this.timeOptions = Cp('time', n)),
            e.setAttribute('data-type', 'date');
      }
      return (this.processHandler = i), e;
    },
    onAppend() {
      this.node.addEventListener('click', e => {
        e.preventDefault(), e.stopPropagation(), this.show();
      }),
        Ep.prototype.onAppend.call(this);
    },
    extendHandler(e) {
      const t = this;
      (e.yes = function() {
        (t.result = this.scrollerResult), t.dispatchEvent('change');
      }),
        (e.cancel = function() {
          t.dispatchEvent('cancel');
        }),
        (e.onSelect = function(e) {
          (t.columnsResult = e),
            t.dispatchEvent('columnchange', {
              column: e.column,
              newValue: e.value,
              newSelected: e.index
            });
        });
    },
    extendDateTimeHandler(e, t) {
      e.on('selected', (n, i) => {
        let o;
        (o =
          'date' === t
            ? { year: i.getFullYear(), month: i.getMonth(), day: i.getDate() }
            : { hour: i.getHours(), minute: i.getMinutes() }),
          this.dispatchEvent('change', o),
          e.destroy();
      }).on('canceled', () => {
        this.dispatchEvent('cancel'), e.destroy();
      });
    },
    show() {
      let e = this.processHandler;
      e
        ? e.show()
        : 'date' === this.type
        ? ((e = new vp.Date(this.dateOptions)),
          this.extendDateTimeHandler(e, 'date'))
        : 'time' === this.type &&
          ((e = new vp.Time(this.timeOptions)),
          this.extendDateTimeHandler(e, 'time'));
    }
  };
  function Cp(e, t) {
    if ('date' === e) {
      const e = Tp(t.start) || xp.start,
        n = Tp(t.end) || xp.end;
      return {
        default: Tp(t.selected) || xp.default,
        min: e,
        max: n,
        lang: xp.lang
      };
    }
    if ('time' === e)
      return { default: Sp(t.selected), minuteStep: 1, lang: xp.lang };
  }
  function Tp(e) {
    if (void 0 === e || '' === e) return null;
    const t = new Date(e);
    return isNaN(t.getTime())
      ? (console.warn(
          `[h5-render] 日期值(${e})不正确,日期格式应当为“yyyy-MM-dd”, 请检查!`
        ),
        null)
      : `${t.getFullYear()}-${Mp(t.getMonth() + 1)}-${Mp(t.getDate())}`;
  }
  function Sp(e) {
    if (void 0 === e || '' === e) {
      const e = new Date();
      return `${e.getHours()}:${e.getMinutes()}`;
    }
    const t = e.match(/^(\d{2}):(\d{2})$/);
    return null === t || t[1] > 23 || e[2] > 59
      ? (console.warn(
          `[h5-render] 时间值(${e})不正确,时间格式应当为“hh:mm”, 请检查!`
        ),
        null)
      : e;
  }
  function Mp(e) {
    return e < 10 && (e = '0' + e), e;
  }
  const Op = {
      value: function(e) {
        if ('multi-text' !== this.type) this.node.innerHTML = e;
        else {
          const t =
            'string' == typeof e ? JSON.parse(e).join(' ') : e.join(' ');
          this.node.innerHTML = t;
        }
      },
      range: function(e) {
        this.processHandler &&
          '[object Array]' === Object.prototype.toString.call(e) &&
          ((this.textPickerData.range = e),
          this.processHandler.updateData(this.textPickerData));
      },
      seleted: function(e) {
        this.processHandler &&
          ((this.textPickerData.selected = e),
          this.processHandler.updateData(this.textPickerData));
      }
    },
    Lp = {
      change: {
        extra() {
          const e = this.type,
            t = this.result,
            n = { newValue: t.value, newSelected: t.index };
          switch (e) {
            case 'text':
              return n;
            case 'multi-text':
              return {
                newValue: JSON.stringify(t.value),
                newSelected: JSON.stringify(t.index)
              };
            default:
              return n;
          }
        }
      }
    };
  var Ip = {
    init: function(e) {
      Ep = e.Atomic;
      const t = e.utils.extend;
      function n(e) {
        _p++, (this.type = e.attr.type), (this.result = {}), Ep.call(this, e);
      }
      (n.prototype = Object.create(Ep.prototype)),
        t(n.prototype, Ap),
        t(n.prototype, { attr: t(Object.create(Ep.prototype.attr), Op) }),
        t(n.prototype, { event: Lp }),
        e.registerComponent('picker', n);
    }
  };
  e(
    ".mdui-select{position:relative;display:inline-block;max-width:100%;height:36px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;padding-right:24px;padding-left:0;font-family:Roboto,Noto,Helvetica,Arial,sans-serif;font-size:16px;vertical-align:middle;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Cpath d='M-.003 2.5l5 5 5-5h-10z' opacity='.54'/%3E%3C/svg%3E\");background-repeat:no-repeat;background-size:24px;background-position:100%;border:none;outline:none;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:background-color,background-position-x,-webkit-box-shadow;transition-property:background-color,background-position-x,-webkit-box-shadow;transition-property:background-color,box-shadow,background-position-x;transition-property:background-color,box-shadow,background-position-x,-webkit-box-shadow;-moz-appearance:none;appearance:none;will-change:background-color,box-shadow,background-position-x;pointer-events:auto}.mdui-select.mdui-select-open{border-bottom:none}.mdui-select-position-top{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Cpath d='M10.003 7.5l-5-5-5 5h10z' opacity='.54'/%3E%3C/svg%3E\")}.mdui-select-open.mdui-select-position-bottom,.mdui-select-open.mdui-select-position-top{z-index:99999;border-radius:2px}.mdui-select-open.mdui-select-position-top{border-top:1px solid rgba(0,0,0,.12);border-bottom:2px solid transparent;border-top-left-radius:0;border-top-right-radius:0;-webkit-box-shadow:0 10px 10px -3px rgba(0,0,0,.2),0 0 14px 1px rgba(0,0,0,.14),0 -7px 24px 2px rgba(0,0,0,.12);box-shadow:0 10px 10px -3px rgba(0,0,0,.2),0 0 14px 1px rgba(0,0,0,.14),0 -7px 24px 2px rgba(0,0,0,.12)}.mdui-select-open.mdui-select-position-top .mdui-select-menu{border-bottom-right-radius:0;border-bottom-left-radius:0;-webkit-box-shadow:0 -4px 4px -2px rgba(0,0,0,.06),8px 0 8px -4px rgba(0,0,0,.12),-8px 0 8px -4px rgba(0,0,0,.12);box-shadow:0 -4px 4px -2px rgba(0,0,0,.06),8px 0 8px -4px rgba(0,0,0,.12),-8px 0 8px -4px rgba(0,0,0,.12)}.mdui-select-open.mdui-select-position-bottom{border-bottom-right-radius:0;border-bottom-left-radius:0}.mdui-select-open.mdui-select-position-bottom .mdui-select-menu{border-top-left-radius:0;border-top-right-radius:0}.mdui-select-selected{position:absolute;top:50%;right:24px;left:0;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;-webkit-transition:left .2s cubic-bezier(0,0,.2,1);transition:left .2s cubic-bezier(0,0,.2,1);-webkit-transform:translateY(-50%);transform:translateY(-50%)}.mdui-select-open.mdui-select-position-auto .mdui-select-selected{visibility:hidden}.mdui-select-menu{position:relative;z-index:99999;height:36px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0 -24px 0 0;overflow-y:scroll;-webkit-overflow-scrolling:touch;color:rgba(0,0,0,.87);cursor:default;visibility:hidden;background-color:#fff;border-radius:2px;-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0;-webkit-transition-timing-function:cubic-bezier(0,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:opacity,visibility,-webkit-transform;transition-property:opacity,visibility,-webkit-transform;transition-property:transform,opacity,visibility;transition-property:transform,opacity,visibility,-webkit-transform;-webkit-transform:scaleY(0);transform:scaleY(0);will-change:transform,opacity,visibility}.mdui-select-open .mdui-select-menu{overflow-y:hidden;visibility:visible;opacity:1;-webkit-transform:scale(1);transform:scale(1)}.mdui-select-closing .mdui-select-menu{overflow-y:hidden;visibility:visible;-webkit-box-shadow:none;box-shadow:none;opacity:0;-webkit-transform:scale(1);transform:scale(1)}.mdui-select-menu-item{height:48px;overflow:hidden;line-height:48px;text-overflow:ellipsis;white-space:nowrap;cursor:pointer}.mdui-select-menu-item:hover{background-color:#eee}.mdui-select-menu-item[disabled]{color:rgba(0,0,0,.38)!important;cursor:default}.mdui-select-menu-item[disabled]:hover{background-color:inherit!important}select.mdui-select{background-color:transparent}select.mdui-select option{color:rgba(0,0,0,.87)}select.mdui-select::-ms-expand{display:none}",
    void 0
  );
  const Dp = (function() {
    const e = { position: 'bottom', gutter: 16 };
    function t(t, n) {
      const i = this;
      ((i.$selectNative = t).style.display = 'none'),
        (i.options = Object.assign(e, n || {})),
        (i.uniqueID = Math.floor(1e13 * Math.random()) + Date.now()),
        (i.state = 'closed'),
        i.handleUpdate();
      const o = function(e) {
        const t = e.target;
        ('opening' !== i.state && 'opened' !== i.state) ||
          t === i.$select ||
          i.$select.contains(t) ||
          i.close();
      };
      document.addEventListener('click', o),
        document.addEventListener('touchstart', o);
    }
    t.prototype.handleUpdate = function() {
      const e = this;
      ('opening' !== e.state && 'opened' !== e.state) || e.close();
      const t = e.$selectNative;
      (e.value = t.value),
        (e.text = ''),
        (e.$menu = document.createElement('div')),
        e.$menu.classList.add('mdui-select-menu');
      const n = function(n) {
        if ('closing' === e.state) return;
        const i = n.target;
        if (i.disabled) return;
        (e.$selected.innerText = i.text),
          (t.value = i.value),
          e.$items[e.selectedIndex].removeAttribute('selected'),
          i.setAttribute('selected', ''),
          (e.selectedIndex = i.index),
          (e.value = i.value),
          (e.text = i.text);
        const o = document.createEvent('HTMLEvents');
        o.initEvent('change', !0, !0), t.dispatchEvent(o), e.close();
      };
      for (let i = 0; i < t.options.length; i++) {
        const o = t.options[i],
          r = {
            value: o.value,
            text: o.textContent,
            disabled: o.disabled,
            selected: e.value === o.value,
            index: i
          };
        e.value === r.value && ((e.text = r.text), (e.selectedIndex = i));
        const s = document.createElement('div');
        s.classList.add('mdui-select-menu-item'),
          s.classList.add('mdui-ripple'),
          (s.innerText = r.text),
          r.disabled
            ? s.setAttribute('disabled', '')
            : s.removeAttribute('disabled'),
          r.selected
            ? s.setAttribute('selected', '')
            : s.removeAttribute('selected'),
          Object.assign(s, r),
          s.addEventListener('click', n),
          e.$menu.appendChild(s);
      }
      (e.$items = e.$menu.children),
        (e.$selected = document.createElement('span')),
        e.$selected.classList.add('mdui-select-selected'),
        (e.$selected.innerText = e.text),
        (e.$select = document.createElement('div')),
        e.$select.classList.add('mdui-select'),
        e.$select.classList.add('mdui-select-position-' + e.options.position),
        e.$select.setAttribute('style', e.$selectNative.getAttribute('style')),
        e.$select.setAttribute('id', e.uniqueID),
        (e.$select.style.display = ''),
        e.$select.appendChild(e.$selected),
        e.$select.appendChild(e.$menu);
      const i = document.getElementById(e.uniqueID);
      i && i.parentNode && i.parentNode.removeChild(i),
        t.parentNode && t.parentNode.insertBefore(e.$select, null),
        (e.size = parseInt(t.options.length)),
        (!e.size || e.size < 0) &&
          ((e.size = e.$items.length), e.size > 8 && (e.size = 8)),
        e.$select.addEventListener('click', function(t) {
          const n = t.target;
          n.classList.contains('mdui-select-menu') ||
            n.classList.contains('mdui-select-menu-item') ||
            e.toggle();
        });
    };
    const n = function(e) {
      e.$select.classList.remove('mdui-select-closing'),
        'opening' === e.state &&
          ((e.state = 'opened'), (e.$menu.style.overflowY = 'auto')),
        'closing' === e.state &&
          ((e.state = 'closed'),
          (e.$menu.style.marginTop = ''),
          (e.$menu.style.height = ''),
          (e.$menu.style.width = ''));
    };
    function i(e) {
      const t = ['webkitTransitionEnd', 'transitionend'];
      let n;
      const i = this;
      function o(r) {
        if (r.target === this)
          for (e.call(this, r), n = 0; n < t.length; n++)
            i.removeEventListener(t[n], o);
      }
      if (e) for (n = 0; n < t.length; n++) i.addEventListener(t[n], o);
      return this;
    }
    return (
      (t.prototype.open = function() {
        const e = this;
        'opening' !== e.state &&
          'opened' !== e.state &&
          ((e.state = 'opening'),
          (function(e) {
            const t = e.options.position,
              n = parseInt(e.$select.clientHeight),
              i = e.$items.item(0),
              o = parseInt(i.clientHeight),
              r = parseInt(i.style.marginTop || 0),
              s = parseFloat(e.$select.clientWidth + 0.01),
              a = o * e.size + 2 * r;
            let l, c;
            'bottom' === t && ((c = n), (l = '0px')),
              (e.$select.style.width = s + 'px'),
              (e.$menu.style.width = s + 'px'),
              (e.$menu.style.height = a + 'px'),
              (e.$menu.style.marginTop = c + 'px'),
              (e.$menu.style.transformOrigin = 'center ' + l + ' 0');
          })(e),
          e.$select.classList.add('mdui-select-open'),
          i.call(e.$menu, function() {
            n(e);
          }));
      }),
      (t.prototype.close = function() {
        const e = this;
        'closing' !== e.state &&
          'closed' !== e.state &&
          ((e.state = 'closing'),
          (e.$menu.style.overflowY = ''),
          e.$select.classList.remove('mdui-select-open'),
          e.$select.classList.add('mdui-select-closing'),
          i.call(e.$menu, function() {
            n(e);
          }));
      }),
      (t.prototype.toggle = function() {
        const e = this;
        'opening' === e.state || 'opened' === e.state
          ? e.close()
          : ('closing' !== e.state && 'closed' !== e.state) || e.open();
      }),
      t
    );
  })();
  const Np = {
      disabled: function(e) {
        (this.node.disabled = e && 'false' !== e),
          this.select && this.select.handleUpdate();
      }
    },
    Pp = {
      change: {
        extra: function() {
          return { newValue: this.node.value, timestamp: Date.now() };
        }
      }
    };
  var Fp = {
    init: function(e) {
      const t = e.Component,
        n = e.utils.extend;
      function i(e) {
        t.call(this, e);
      }
      (i.prototype = Object.create(t.prototype)),
        n(
          i.prototype,
          (function(e) {
            const t = e.Component;
            return {
              create: () => document.createElement('select'),
              appendChild(e) {
                const n = e.type;
                if ('option' !== n)
                  return void console.warn(
                    '[h5-render] invalid child type "' + n + '" for select.'
                  );
                const i = t.prototype.appendChild.call(this, e),
                  o = this.data.children;
                return (
                  e.ref === o[o.length - 1].ref &&
                    (this.select.handleUpdate(), (this.initialized = !0)),
                  i
                );
              },
              removeChild(e) {
                t.prototype.removeChild.call(this, e),
                  this.select.handleUpdate();
              },
              insertBefore(e, n) {
                const i = e.data.type;
                'option' === i
                  ? (t.prototype.insertBefore.call(this, e, n),
                    this.select.handleUpdate())
                  : console.warn(
                      '[h5-render] invalid child type "' + i + '" for select.'
                    );
              },
              onAppend() {
                this.select = new Dp(this.node);
                const e = this.getParent();
                e &&
                  '0' ===
                    global
                      .getComputedStyle(e.node)
                      .getPropertyValue('z-index') &&
                  (e.node.style.zIndex = '1');
              }
            };
          })(e)
        ),
        n(i.prototype, { attr: n(Object.create(t.prototype.attr), Np) }),
        n(i.prototype, { event: Pp }),
        e.registerComponent('select', i);
    }
  };
  const Rp = {
      create() {
        const e = document.createElement('option');
        return (e.style.pointerEvents = 'auto'), e;
      }
    },
    Bp = {
      disabled: function(e) {
        (this.node.disabled = e && 'false' !== e),
          this.getParent() &&
            this.getParent().initialized &&
            this.getParent().select &&
            this.getParent().select.handleUpdate();
      },
      value: function(e) {
        this.node.setAttribute('value', e),
          this.getParent() &&
            this.getParent().initialized &&
            this.getParent().select &&
            this.getParent().select.handleUpdate();
      },
      selected: function(e) {
        (this.node.selected = e && 'false' !== e),
          this.getParent() &&
            this.getParent().initialized &&
            this.getParent().select &&
            this.getParent().select.handleUpdate();
      },
      content: function(e) {
        (this.node.innerText = e),
          this.node.setAttribute('content', e),
          this.getParent() &&
            this.getParent().initialized &&
            this.getParent().select &&
            this.getParent().select.handleUpdate();
      }
    };
  var jp = {
    init: function(e) {
      const t = e.Component,
        n = e.utils.extend;
      function i(e) {
        (this.options = []), (this.selectedIndex = 0), t.call(this, e);
      }
      (i.prototype = Object.create(t.prototype)),
        n(i.prototype, Rp),
        n(i.prototype, { attr: n(Object.create(t.prototype.attr), Bp) }),
        e.registerComponent('option', i);
    }
  };
  e('.hap-video{background-color:#000;height:100%}', void 0);
  const $p = {
    playStatus(e) {
      'play' !== e && 'stop' !== e && 'pause' !== e && (e = 'pause'),
        this.playStatus !== e &&
          ((this.playStatus = e),
          this.node.setAttribute('play-status', e),
          this[this.playStatus]());
    },
    autoplay(e) {},
    muted(e) {
      this.node.setAttribute('muted', e), (this.node.muted = e);
    }
  };
  var zp = {
    init: function(e) {
      const t = e.Atomic,
        n = e.utils.extend;
      function i(e) {
        const n = e.attr.autoplay,
          i = e.attr.playStatus;
        (this.autoPlay = !0 === n || 'true' === n),
          (this.playStatus =
            'play' !== i && 'stop' !== i && 'pause' !== i ? 'pause' : i),
          t.call(this, e);
      }
      (i.prototype = Object.create(t.prototype)),
        n(
          i.prototype,
          (function(e) {
            const t = e.Atomic;
            return {
              create() {
                const e = document.createElement('video');
                return (
                  e.classList.add('hap-video'),
                  e.classList.add('hap-element'),
                  (e.controls = !0),
                  (e.autoplay = this.autoPlay),
                  e.setAttribute('playsinline', ''),
                  e.setAttribute('webkit-playsinline', ''),
                  e.setAttribute('play-status', this.playStatus),
                  (this.node = e),
                  this.autoPlay &&
                    'play' === this.playStatus &&
                    setTimeout(() => {
                      this.play();
                    }, 0),
                  e
                );
              },
              bindEvents(e) {
                t.prototype.bindEvents.call(this, e);
                const n = { prepared: 'loadedmetadata', finish: 'ended' };
                for (const e in n)
                  this.node.addEventListener(
                    n[e],
                    function(e, t) {
                      this.dispatchEvent(e, t.data);
                    }.bind(this, e)
                  );
              },
              start() {
                let e = this.node.getAttribute('src');
                e ||
                  ((e = this.node.getAttribute('data-src')) &&
                    this.node.setAttribute('src', e));
                try {
                  this.node.play();
                } catch (e) {}
              },
              pause() {
                this.node.pause();
              },
              stop() {
                this.node.pause(),
                  (this.node.autoplay = !1),
                  this.node.setAttribute('data-src', this.node.src),
                  (this.node.src = '');
              },
              setCurrentTime({ currenttime: e }) {
                this.node.currentTime = e;
              },
              requestFullscreen() {
                this.node.requestFullscreen();
              },
              exitFullscreen() {
                try {
                  (document.IsFullScreen || document.webkitIsFullScreen) &&
                    document.exitFullscreen();
                } catch (e) {
                  console.error(e);
                }
              }
            };
          })(e)
        ),
        n(i.prototype, { attr: n(Object.create(t.prototype.attr), $p) }),
        e.registerComponent('video', i);
    }
  };
  let Hp;
  e(
    '.hap-switch-container{display:flex;align-items:center;align-self:center;height:42px}.hap-switch{background-color:#bcbabd;cursor:pointer;display:inline-block;border-radius:17px;position:relative;align-self:center;vertical-align:middle;-moz-user-select:none;-khtml-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none;box-sizing:content-box;background-clip:content-box;pointer-events:auto}.hap-switch-inner{width:40px;height:40px;background:#ececec;border-radius:100%;-webkit-box-shadow:0 .013333rem .04rem rgba(0,0,0,.4);box-shadow:0 .013333rem .04rem rgba(0,0,0,.4);position:absolute;top:-5px;left:0;-webkit-transition:background-color .4s,left .2s;transition:background-color .4s,left .2s}',
    void 0
  );
  const Yp = {
    color: '#C4E2DE',
    secondaryColor: '#BCBABD',
    jackColor: '#439286',
    jackSecondaryColor: '#ECECEC',
    className: 'hap-switch',
    disabledOpacity: 0.5,
    speed: '0.4s',
    width: 100,
    height: 60,
    scalable: !1
  };
  function Wp(e, t) {
    const n = [];
    for (const e in t) n.push(e + ' ' + t[e]);
    (e.style.transition = n.join(', ')),
      (e.style.webkitTransition = n.join(', '));
  }
  function Up(e, t) {
    let n = e.checked;
    const i = e.switchWrap,
      o = e.jack;
    t && n ? (n = !1) : t && !n && (n = !0),
      !0 === n
        ? ((e.checked = !0),
          window.getComputedStyle
            ? (o.style.left =
                parseInt(window.getComputedStyle(i).width) -
                parseInt(window.getComputedStyle(o).width) +
                'px')
            : (o.style.left =
                parseInt(i.currentStyle.width) -
                parseInt(o.currentStyle.width) +
                'px'),
          e.options.color &&
            (function(e) {
              const t = e.switchWrap.offsetHeight / 2;
              (e.switchWrap.style.backgroundColor = e.options.color),
                (e.switchWrap.style.borderColor = e.options.color),
                (e.switchWrap.style.boxShadow =
                  'inset 0 0 0 ' + t + 'px ' + e.options.color),
                (e.jack.style.backgroundColor = e.options.jackColor);
            })(e),
          Vp(e))
        : ((e.checked = !1),
          (o.style.left = 0),
          (i.style.boxShadow = 'inset 0 0 0 0 ' + e.options.secondaryColor),
          (i.style.borderColor = e.options.secondaryColor),
          (i.style.backgroundColor =
            e.options.secondaryColor !== Yp.secondaryColor
              ? e.options.secondaryColor
              : Yp.secondaryColor),
          (o.style.backgroundColor =
            e.options.jackSecondaryColor !== e.options.jackColor
              ? e.options.jackSecondaryColor
              : e.options.jackColor),
          Vp(e));
  }
  function Vp(e) {
    let t = {};
    const n = {
      'background-color': e.options.speed,
      left: e.options.speed.replace(/[a-z]/, '') / 2 + 's'
    };
    (t = e.checked
      ? {
          border: e.options.speed,
          'box-shadow': e.options.speed,
          'background-color': 3 * e.options.speed.replace(/[a-z]/, '') + 's'
        }
      : { border: e.options.speed, 'box-shadow': e.options.speed }),
      Wp(e.switchWrap, t),
      Wp(e.jack, n);
  }
  function Gp(e) {
    return (
      e._clickHandler ||
        (e._clickHandler = function() {
          Up(e, !0), e.dispatchEvent('change', { value: e.checked });
        }),
      e._clickHandler
    );
  }
  const Jp = {
      create() {
        const e = document.createElement('div'),
          t = document.createElement('span');
        return (
          (this.jack = document.createElement('small')),
          (this.jack.className = 'hap-switch-inner'),
          (this.switchWrap = t),
          t.appendChild(this.jack),
          e.appendChild(t),
          e.classList.add('hap-switch-container'),
          (t.className = this.options.className),
          (t.style.width = '70px'),
          (t.style.height = '30px'),
          (t.style.marginLeft = '50px'),
          this.attr.disabled.call(this, this.data.attr.disabled),
          e
        );
      },
      onAppend() {
        Up(this), Hp.prototype.onAppend.call(this);
      },
      enable() {
        this.disabled && (this.disabled = !1),
          (this.switchWrap.style.opacity = 1),
          this.switchWrap.addEventListener('click', Gp(this));
      },
      disable() {
        !this.disabled && (this.disabled = !0),
          (this.switchWrap.style.opacity = Yp.disabledOpacity),
          this.switchWrap.removeEventListener('click', Gp(this));
      }
    },
    Zp = {
      disabled: function(e) {
        (this.disabled = e && 'false' !== e),
          this.disabled ? this.disable() : this.enable();
      },
      checked(e) {
        (this.checked = !0 === e || 'true' === e), Up(this);
      }
    },
    qp = {
      width: function(e) {
        return !1;
      },
      height: function(e) {
        return !1;
      }
    },
    Kp = {
      change: {
        updator() {
          return { attrs: { checked: this.checked } };
        },
        extra() {
          return { checked: this.checked };
        }
      }
    };
  var Qp = {
    init: function(e) {
      Hp = e.Atomic;
      const t = e.utils.extend;
      function n(e) {
        (this.options = t({}, Yp)),
          (this.checked = e.attr.checked && 'false' !== e.attr.checked),
          (this.data = e),
          (this.width = this.options.width),
          (this.height = this.options.height),
          Hp.call(this, e);
      }
      (n.prototype = Object.create(Hp.prototype)),
        t(n.prototype, Jp),
        t(n.prototype, { attr: t(Object.create(Hp.prototype.attr), Zp) }),
        t(n.prototype, { style: t(Object.create(Hp.prototype.style), qp) }),
        t(n.prototype, { event: Kp }),
        e.registerComponent('switch', n);
    }
  };
  const Xp = {
      href: function(e) {
        if (!e)
          return console.warn(
            '[web-render] href of <a> should not be a null value.'
          );
        (this.href = e), this.node.setAttribute('href', e);
        const t = e.split('?');
        if (-1 === e.indexOf('http') && t.length > 1) {
          this.uri = t[0];
          const e = t[1] && t[1].split('&'),
            n = {};
          for (let t = 0; t < e.length; t++) {
            const i = e[t].split('=');
            i.length > 1 && (n[i[0]] = i[1]);
          }
          this.params = n;
        } else (this.uri = e), (this.params = {});
      },
      value: function(e) {
        (this.node.innerHTML = ''),
          null != e && '' !== e && (this.node.textContent = e);
      }
    },
    eu = {
      lines: function(e) {
        if (((e = parseInt(e)), !isNaN(e)))
          if (e <= 0)
            (this.node.style.textOverflow = ''),
              (this.node.style.overflow = 'visible'),
              (this.node.style.webkitLineClamp = '');
          else {
            const t = this.data ? this.data.style : null;
            (this.node.style.overflow = 'hidden'),
              (this.node.style.textOverflow = t ? t.textOverflow : 'clip'),
              (this.node.style.webkitLineClamp = e);
          }
      }
    };
  var tu = {
    init: function(e) {
      const t = e.Component,
        n = e.utils.extend;
      function i(e) {
        t.call(this, e);
      }
      (i.prototype = Object.create(t.prototype)),
        n(
          i.prototype,
          (function(e) {
            const t = e.Component;
            return {
              create() {
                const e = document.createElement('a');
                return (
                  e.classList.add('hap-a'),
                  this._getProps('_isInText') || e.classList.add('hap-text'),
                  (e.style.color = 'grey'),
                  (e.style.textDecoration = 'none'),
                  e
                );
              },
              bindEvents(e) {
                t.prototype.bindEvents.call(this, e),
                  this.node.addEventListener(
                    'click',
                    function(e) {
                      (e._alreadyFired && e.target !== this.node) ||
                        ((e._alreadyFired = !0),
                        e.preventDefault(),
                        Cr.navigateTo(
                          { uri: this.uri, params: this.params },
                          'push'
                        ));
                    }.bind(this)
                  );
              }
            };
          })(e)
        ),
        n(i.prototype, { attr: n(Object.create(t.prototype.attr), Xp) }),
        n(i.prototype, { style: n(Object.create(t.prototype.style), Ja, eu) }),
        e.registerComponent('a', i);
    }
  };
  let nu;
  function iu(e) {
    const t = e.Atomic;
    return {
      create() {
        const e = document.createElement('web');
        return (
          e.classList.add('hap-web'),
          (this.web = document.createElement('iframe')),
          e.appendChild(this.web),
          this.web.classList.add('hap-element'),
          (this.web.style.width = '-webkit-fill-available'),
          (this.web.style.height = '-webkit-fill-available'),
          (this.web.style.border = 'none'),
          e
        );
      },
      bindEvents(e) {
        t.prototype.bindEvents.call(this, e);
        const n = this;
        this.web.addEventListener('load', function(e) {
          n.dispatchEvent('pagefinish', { url: n.web.src });
        }),
          window.addEventListener(
            'message',
            function(e, t) {
              let n = t.data;
              if ('string' == typeof n)
                try {
                  n = JSON.parse(n);
                } catch (e) {}
              if (n && 'hap' === n.type) {
                if (!nu(n.content))
                  return console.error(
                    '[h5-render] hap msg received by web component. msg.content should be a array:',
                    n.content
                  );
                callNative(e.getComponentManager().instanceId, n.content);
              }
            }.bind(null, this)
          );
      },
      reload() {
        this.web.contentWindow.location.reload();
      },
      forward() {
        this.web.contentWindow.history.forward();
      },
      back() {
        this.web.contentWindow.history.back();
      },
      canForward: ({ callback: e }, t) => (t && t(e), [!0]),
      canBack: ({ callback: e }, t) => (t && t(e), [!0]),
      postMessage({ message: e }) {
        this.web.contentWindow.postMessage(e, '*');
      }
    };
  }
  const ou = {
    src: function(e) {
      (this.web.src = e),
        setTimeout(
          function() {
            this.dispatchEvent('pagestart', { url: e });
          }.bind(this),
          0
        );
    }
  };
  var ru = {
    init: function(e) {
      const t = e.Atomic,
        n = e.utils.extend;
      function i(e) {
        t.call(this, e);
      }
      (nu = e.utils.isArray),
        (i.prototype = Object.create(t.prototype)),
        n(i.prototype, iu(e)),
        n(i.prototype, { attr: n(Object.create(t.prototype.attr), ou) }),
        e.registerComponent('web', i);
    }
  };
  const su = {
      create() {
        const e = document.createElement('rich-text');
        return e.classList.add('hap-richtext'), e;
      }
    },
    au = {
      value(e) {
        (this.value = e), this.node.setContent(e);
      }
    };
  var lu = {
    init: function(e) {
      const t = e.Atomic,
        n = e.utils.extend;
      function i(e) {
        t.call(this, e);
      }
      (i.prototype = Object.create(t.prototype)),
        n(i.prototype, su),
        n(i.prototype, { attr: au }),
        e.registerComponent('richtext', i),
        window.customElements.define(
          'rich-text',
          class extends window.HTMLElement {
            constructor() {
              super(), this.attachShadow({ mode: 'open' });
            }
            setContent(e) {
              this.shadowRoot.innerHTML = e;
            }
          }
        );
    }
  };
  const cu = {
    value: function(e) {
      (this.node.innerHTML = ''),
        null != e && '' !== e && (this.node.textContent = e);
    }
  };
  var du = {
    init: function(e) {
      const t = e.Component,
        n = e.utils.extend;
      function i(e, n) {
        t.call(this, e, n);
      }
      (i.prototype = Object.create(t.prototype)),
        n(i.prototype, { attr: n(Object.create(t.prototype.attr), cu) }),
        n(i.prototype, { style: n(Object.create(t.prototype.style), Ja) }),
        e.registerComponent('span', i);
    }
  };
  const hu = {
      create() {
        const e = document.createElement('label');
        return e.classList.add('hap-text'), (e.style.fontSize = '32px'), e;
      }
    },
    pu = {
      value: function(e) {
        (this.node.innerHTML = ''),
          null != e && '' !== e && (this.node.textContent = e);
      },
      target: function(e) {
        null != e && '' !== e && this.node.setAttribute('for', e);
      }
    };
  var uu = {
    init: function(e) {
      const t = e.Component,
        n = e.utils.extend;
      function i(e, n) {
        t.call(this, e, n);
      }
      (i.prototype = Object.create(t.prototype)),
        n(i.prototype, hu),
        n(i.prototype, { attr: n(Object.create(t.prototype.attr), pu) }),
        e.registerComponent('label', i);
    }
  };
  const fu = {},
    mu = {
      height: function(e) {
        e && e.indexOf('px') > -1 && (this.node.height = parseInt(e)),
          (this.node.style.height = e);
      },
      width: function(e) {
        e && e.indexOf('px') > -1 && (this.node.width = parseInt(e)),
          (this.node.style.width = e);
      }
    };
  var gu = {
    init: function(e) {
      const t = e.Atomic,
        n = e.utils.extend,
        i = global.CanvasRenderingContext2D.prototype.drawImage;
      function o(e) {
        t.call(this, e);
      }
      (global.CanvasRenderingContext2D.prototype.drawImage = function(...e) {
        if ('image' === e[0].type && e[0].attr.id) {
          const t = global.document.getElementById(e[0].attr.id).children[0];
          (e[0] = t),
            (t.onload = function() {
              i.apply(this, e);
            }.bind(this));
        } else i.apply(this, e);
      }),
        (o.prototype = Object.create(t.prototype)),
        n(o.prototype, {
          create: () => document.createElement('canvas'),
          getContext(e) {
            return this.node.getContext(e);
          },
          onAppend() {
            this.data.style.width ||
              (this.node.width = this.node.parentNode.clientWidth),
              this.data.style.height ||
                (this.node.height = this.node.parentNode.clientHeight);
          }
        }),
        n(o.prototype, { attr: n(Object.create(t.prototype.attr), fu) }),
        n(o.prototype, { style: n(Object.create(t.prototype.style), mu) }),
        e.registerComponent('canvas', o);
    }
  };
  let yu;
  e('.BMap_Marker img{max-width:100%}', void 0);
  let bu = 0,
    vu = !1,
    Eu = [],
    wu = [];
  const ku = 'A8r1WFB2FfrBYzfUE5PYz3pB6mKYiohn',
    xu = {
      latitude: 39.90886,
      longitude: 116.39739,
      scale: 11,
      rotate: 0,
      showmylocation: !1
    },
    _u = {
      textAlign: 'center',
      display: 'byclick',
      backgroundColor: '#fff',
      color: '#000',
      border: 'nonoe'
    },
    Au = {
      strokeColor: '#666',
      strokeWeight: 50,
      strokeStyle: 'solid',
      strokeOpacity: 1
    },
    Cu = {
      strokeColor: '#666',
      fillColor: '#666',
      strokeWeight: 0,
      fillOpacity: 1,
      strokeOpacity: 1
    };
  function Tu(e) {
    return e - 1;
  }
  Eu.push(function() {
    global.CustomControl = class extends BMap.Control {
      constructor(e, t) {
        super(),
          (this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT),
          (this.defaultOffset = new BMap.Size(10, 10)),
          (this.opt = e),
          (this.hapInstance = t);
      }
      initialize(e) {
        const t = this.opt,
          n = this.hapInstance,
          i = document.createElement('div'),
          o = document.createElement('img');
        return (
          (o.style.position = 'fixed'),
          o.classList.add('hap-map-customcontrol'),
          (o.src = t.iconPath),
          t.position && this.setPosition(o, t.position),
          t.clickable &&
            ((o.style.cursor = 'pointer'),
            (o.onclick = function(e) {
              t.id && n.dispatchEvent('controltap', { controlId: t.id });
            })),
          i.appendChild(o),
          e.getContainer().appendChild(i),
          i
        );
      }
      setPosition(e, t) {
        t.left
          ? (e.style.left = `${Mi(t.left)}`)
          : t.right && (e.style.right = `${Mi(t.right)}`),
          t.top
            ? (e.style.top = `${Mi(t.top)}`)
            : t.bottom && (e.style.bottom = `${Mi(t.bottom)}`),
          t.width && (e.style.width = `${Mi(t.width)}`),
          t.height && (e.style.height = `${Mi(t.height)}`);
      }
    };
  });
  const Su = {
      create: function() {
        const e = document.createElement('map');
        return (
          e.setAttribute('data-id', this.id),
          (e.style.pointerEvents = 'auto'),
          e
        );
      },
      onAppend() {
        this.initMap(), yu.prototype.onAppend.call(this);
      },
      initMap() {
        this.bridge(() => {
          const e = this.options,
            t = new BMap.Map(this.id),
            n = new BMap.Convertor();
          (this.convertor = n),
            this.translate(
              new BMap.Point(e.longitude, e.latitude),
              this.coordType
            ).then(n => {
              const i = n[0];
              t.centerAndZoom(i, Tu(e.scale)),
                t.enableScrollWheelZoom(),
                (this.mapInstance = t),
                (this.markers = []),
                (this.polylines = []),
                (this.groundoverlays = []),
                t.addEventListener('click', e => {
                  this.dispatchEvent('tap', [
                    { latitude: e.point.lat, longitude: e.point.lng }
                  ]);
                }),
                t.addEventListener('dragend', e => {
                  this.dispatchEvent('regionchange', [
                    {
                      coordType: 'gcj02',
                      latitude: e.point.lat,
                      longitude: e.point.lng
                    }
                  ]);
                }),
                t.addEventListener('zoomend', e => {
                  console.log('[h5-render] web预览的缩放不支持获取坐标参数'),
                    this.dispatchEvent('regionchange', [
                      {
                        coordType: 'gcj02',
                        latitude: void 0,
                        longitude: void 0
                      }
                    ]);
                }),
                wu.forEach(e => {
                  e.call(this);
                });
            });
        });
      },
      bridge(e) {
        vu ? e.call(this) : Eu.push(e);
      },
      afterInit(e) {
        this.mapInstance ? e.call(this) : wu.push(e);
      },
      translate(e, t, n) {
        return new Promise((i, o) => {
          const r = this.convertor;
          let s = 5;
          const a = t ? ('GCJ02' === t.toUpperCase() ? 3 : 1) : 3;
          n &&
            ('GCJ02' === (n = n.toUpperCase())
              ? (s = 3)
              : 'WGS84' === n && (s = 1));
          const l = wi(e) ? e : [e];
          r.translate(l, a, s, e => {
            0 === e.status
              ? i(e.points)
              : (console.log('[h5-render] 坐标系转化失败'), o());
          });
        });
      },
      translateArray(e) {
        return new Promise((t, n) => {
          const i = this.convertor,
            o = [];
          let r = 0;
          const s = e.length;
          e.forEach((e, a) => {
            const l = new BMap.Point(e.longitude, e.latitude),
              c = e.coordType
                ? 'GCJ02' === e.coordType.toUpperCase()
                  ? 3
                  : 1
                : 3;
            i.translate([l], c, 5, e => {
              0 === e.status
                ? ((o[a] = e.points[0]), ++r === s && t(o))
                : (console.log('[h5-render] 坐标系转化失败'), n());
            });
          });
        });
      }
    },
    Mu = {
      convertCoord(e, t) {
        let n = 'GCJ02';
        e.from &&
          'wgs84' !== e.from &&
          console.log('[h5-render] convertCoord from 属性只支持wgs84'),
          e.to &&
            ('wgs84' === e.to || 'gcj02' === e.to
              ? (n = e.to)
              : console.log(
                  '[h5-render] convertCoord to 属性只支持wgs84, gcj02'
                )),
          this.afterInit(() => {
            this.translate(new BMap.Point(e.longitude, e.latitude), 'wgs84', n)
              .then(n => {
                const i = n[0];
                t(e.success, [{ latitude: i.lat, longitude: i.lng }]),
                  t(e.complete);
              })
              .catch(() => {
                t(e.fail);
              });
          });
      },
      getCenterLocation({ success: e, fail: t, complete: n }, i) {
        this.afterInit(() => {
          const t = this.mapInstance.getCenter();
          i(e, [{ latitude: t.lat, longitude: t.lng }]), i(n);
        });
      },
      getCoordType({ success: e, fail: t, complete: n }, i) {
        i(e, [{ coordType: 'gcj02' }]), i(n);
      },
      translateMarker() {},
      moveToMyLocation() {
        this.afterInit(() => {
          const e = new BMap.Geolocation(),
            t = this.mapInstance;
          e.getCurrentPosition(
            n => {
              e.getStatus() === BMAP_STATUS_SUCCESS && t.panTo(n.point);
            },
            { enableHighAccuracy: !0 }
          );
        });
      },
      includePoints() {},
      getRegion() {},
      getScale({ success: e, fail: t, complete: n }, i) {
        i(e, [{ scale: this.options.scale }]), i(n);
      },
      getSupportedCoordTypes({ success: e, fail: t, complete: n }, i) {
        i(e, [['wgs84', 'gcj02']]), i(n);
      }
    },
    Ou = {
      latitude(e) {
        e &&
          ((this.options.latitude = e),
          this.tempPoint
            ? (this.mapInstance &&
                this.translate(
                  new BMap.Point(this.tempPoint, e),
                  this.coordType
                ).then(e => {
                  this.mapInstance.panTo(e[0]);
                }),
              (this.tempPoint = null))
            : (this.tempPoint = e));
      },
      longitude(e) {
        e &&
          ((this.options.longitude = e),
          this.tempPoint
            ? (this.mapInstance &&
                this.translate(
                  new BMap.Point(e, this.tempPoint),
                  this.coordType
                ).then(e => {
                  this.mapInstance.panTo(e[0]);
                }),
              (this.tempPoint = null))
            : (this.tempPoint = e));
      },
      coordtype(e) {
        -1 === ['wgs84', 'gcj02'].indexOf(e)
          ? console.warn(
              '[h5-render] coordtype only support ["wgs84", "gcj02"]'
            )
          : ((this.coordType = e),
            this.mapInstance &&
              this.translate(
                new BMap.Point(this.options.longitude, this.options.latitude),
                this.coordType
              ).then(e => {
                this.mapInstance.panTo(e[0]);
              }));
      },
      showmylocation(e) {
        e
          ? this.afterInit(() => {
              const e = new BMap.Geolocation(),
                t = this.mapInstance;
              e.getCurrentPosition(
                n => {
                  e.getStatus() === BMAP_STATUS_SUCCESS
                    ? ((this.mk = new BMap.Marker(n.point)),
                      t.addOverlay(this.mk),
                      t.panTo(n.point))
                    : (console.log('failed showmylocation' + this.getStatus()),
                      t.removeOverlay(this.mk));
                },
                { enableHighAccuracy: !0 }
              );
            })
          : this.afterInit(() => {
              this.mapInstance.removeOverlay(this.mk);
            });
      },
      scale(e) {
        try {
          const t = parseFloat(e);
          if (
            t >= 4 &&
            t <= 20 &&
            ((this.options.scale = e), this.mapInstance)
          ) {
            this.mapInstance.setZoom(Tu(e));
          }
        } catch (e) {
          throw new Error(e);
        }
      },
      rotate(e) {},
      markers(e) {
        const t = this.mapInstance;
        e &&
          (wi(e)
            ? (this.markers.forEach(e => {
                t.removeOverlay(e);
              }),
              e.forEach(e => {
                const n = Object.create(null);
                this.translate(
                  new BMap.Point(e.longitude, e.latitude),
                  e.coordType
                ).then(i => {
                  const o = i[0];
                  if (
                    (e.offsetX &&
                      e.offsetY &&
                      console.warn(
                        '[h5-render] offsetX, offsetY 在预览效果中不可用，请在移动设备上调试'
                      ),
                    e.iconPath)
                  ) {
                    let t;
                    (t =
                      e.width && e.height
                        ? new BMap.Icon(
                            e.iconPath,
                            new BMap.Size(e.width, e.height)
                          )
                        : new BMap.Icon(e.iconPath, new BMap.Size(48, 48))),
                      (n.icon = t);
                  } else
                    console.wran('[h5-render] marker 的 iconPath 是必填项');
                  e.rotate && (n.rotation = -e.rotate),
                    e.title && (n.title = e.title);
                  const r = new BMap.Marker(o, n);
                  if (O(e.callout)) {
                    const n = e.callout,
                      i = Object.assign({}, _u, { content: n.content });
                    n.fontSize && (i.fontSize = `${n.fontSize}px`),
                      n.borderRadius &&
                        (i.borderRadius = `${n.borderRadius}px`),
                      n.padding && (i.padding = `${n.padding}px`),
                      n.textAlign && (i.textAlign = n.textAlign),
                      n.display && (i.display = n.display);
                    const o = new BMap.Label(n.content, i);
                    t.addOverlay(o),
                      'byclick' === i.display &&
                        (o.hide(),
                        r.addEventListener('click', () => {
                          o.show();
                        })),
                      o.addEventListener('click', () => {
                        this.dispatchEvent('callouttap', { markerId: e.id });
                      }),
                      r.setLabel(o);
                  }
                  e.zIndex && r.setZindex(e.zIndex),
                    r.addEventListener('click', () => {
                      this.dispatchEvent('markertap', { markerId: e.id });
                    }),
                    t.addOverlay(r),
                    this.markers.push(r);
                });
              }))
            : console.warn('[h5-render] 属性markers必须为一个数组'));
      },
      polylines(e) {
        const t = this.mapInstance;
        e &&
          (wi(e)
            ? (this.polylines.forEach(e => {
                t.removeOverlay(e);
              }),
              e.forEach(e => {
                const n = Object.assign({}, Au);
                e.color && (n.strokeColor = e.color),
                  e.width && (n.strokeWeight = e.width),
                  (!0 !== e.dotted && 'true' !== e.dotted) ||
                    (n.strokeStyle = 'dashed'),
                  e.zIndex &&
                    console.warn(
                      '[h5-render] web预览阶段不支持 polylines 的zIndex 属性'
                    ),
                  this.translateArray(e.points).then(e => {
                    const i = new BMap.Polyline(e, n);
                    this.polylines.push(i), t.addOverlay(i);
                  });
              }))
            : console.warn('[h5-render] 属性polylines必须为一个数组'));
      },
      circles(e) {
        const t = this.mapInstance;
        e &&
          (wi(e)
            ? e.forEach(e => {
                const n = Object.assign({}, Cu);
                e.borderColor && (n.strokeColor = e.borderColor),
                  e.borderWidth && (n.strokeWeight = e.borderWidth),
                  e.fillColor && (n.fillColor = e.fillColor),
                  e.zIndex &&
                    console.warn(
                      '[h5-render] web预览阶段不支持 circles 的zIndex 属性'
                    ),
                  this.translate(
                    new BMap.Point(e.longitude, e.latitude),
                    e.coordType
                  ).then(i => {
                    const o = new BMap.Circle(i[0], e.radius, n);
                    t.addOverlay(o);
                  });
              })
            : console.warn('[h5-render] 属性circles必须为一个数组'));
      },
      groundoverlays(e) {
        const t = this.mapInstance;
        e &&
          (wi(e)
            ? (this.groundoverlays.forEach(e => {
                t.removeOverlay(e);
              }),
              e.forEach(e => {
                const n = Object.create(null);
                (n.imageURL = '/samples/common/logo.png'),
                  e.opacity && (n.opacity = e.opacity),
                  e.zIndex &&
                    console.warn(
                      '[h5-render] web预览阶段不支持 groundoverlays 的zIndex 属性'
                    ),
                  !1 !== e.visible &&
                    'false' !== e.visible &&
                    this.translateArray([e.southWest, e.northEast]).then(e => {
                      const i = new BMap.Bounds(e[0], e[1]),
                        o = new BMap.GroundOverlay(i, n);
                      o.setImageURL('/samples/common/logo.png'),
                        this.groundoverlays.push(o),
                        t.addOverlay(o);
                    });
              }))
            : console.warn('[h5-render] 属性 groundoverlays 必须为一个数组'));
      },
      controls(e) {
        const t = this.mapInstance;
        e &&
          (wi(e)
            ? e.forEach(e => {
                const n = Object.assign({}, Au);
                n.clickable = !0;
                const i = e.iconPath.replace(
                  '.',
                  '/samples/component/thirdParty/map'
                );
                (n.iconPath = i),
                  e.id && (n.id = e.id),
                  O(e.position) && (n.position = e.position),
                  (!1 !== e.clickable && 'false' !== e.clickable) ||
                    (n.clickable = !1);
                const o = new CustomControl(n, this);
                t.addControl(o);
              })
            : console.warn('[h5-render] 属性 controls 必须为一个数组'));
      }
    },
    Lu = {
      mylocation(e) {
        console.log(
          '[h5-render] "mylocation" 在预览中不可用，需要使用移动设备调试'
        );
      },
      mylocationFillColor(e) {
        console.log(
          '[h5-render] "mylocation-fill-color" 在预览中不可用，需要使用移动设备调试'
        );
      },
      mylocationStrokeColor(e) {
        console.log(
          '[h5-render] "mylocation-stroke-color" 在预览中不可用，需要使用移动设备调试'
        );
      },
      mylocationIconPath(e) {
        console.log(
          '[h5-render] "mylocation-icon-path" 在预览中不可用，需要使用移动设备调试'
        );
      }
    },
    Iu = {};
  var Du = {
    init: function(e) {
      yu = e.Atomic;
      const t = e.utils.extend;
      function n(e) {
        !(function(e) {
          if (vu) return;
          window.BMap_loadScriptTime = new Date().getTime();
          const t = document.createElement('script');
          (t.src = `http://api.map.baidu.com/getscript?v=3.0&ak=${ku}`),
            (t.async = 'async'),
            (t.onload = function() {
              (vu = !0),
                Eu.forEach(t => {
                  t(e);
                }),
                e.dispatchEvent('loaded'),
                console.log('[h5-render] 百度地图api已经准备就绪');
            }),
            (t.onerror = function() {
              console.log('[h5-render] 百度地图api加载失败');
            }),
            document.getElementsByTagName('head')[0].appendChild(t);
        })(this);
        const t = e.attr || {};
        (this.id = t.id || `hap-map-id-${bu++}`),
          (this.options = Object.assign({}, xu)),
          yu.call(this, e);
      }
      (n.prototype = Object.create(yu.prototype)),
        t(n.prototype, Object.assign({}, Mu, Su)),
        t(n.prototype, { attr: t(Object.create(yu.prototype.attr), Ou) }),
        t(n.prototype, { style: t(Object.create(yu.prototype.style), Lu) }),
        t(n.prototype, { event: Iu }),
        e.registerComponent('map', n);
    }
  };
  let Nu;
  e(
    '.hap-rating{display:flex;position:relative;width:500px;height:100px;justify-content:space-around;overflow:hidden}.hap-rating>div{position:absolute;top:0;left:0;width:100%;height:100%;background-repeat:repeat-x}',
    void 0
  );
  const Pu = {
    width: 500,
    numstars: 5,
    rating: 0,
    stepsize: 0.5,
    indicator: !1,
    starBackground:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAF42lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTAxLTAzVDE1OjI1OjIyKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wMS0wNVQxMDozMTowMSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wMS0wNVQxMDozMTowMSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZjg1NzEzOS1mYWY1LTQ5MTgtODFiNC1jNWI1OTRjNTRiYjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6YmM3ZDZjOTMtMmEwNS00Zjk4LTk3NzMtMDYwZjVmNGM0YTZhIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YmM3ZDZjOTMtMmEwNS00Zjk4LTk3NzMtMDYwZjVmNGM0YTZhIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiYzdkNmM5My0yYTA1LTRmOTgtOTc3My0wNjBmNWY0YzRhNmEiIHN0RXZ0OndoZW49IjIwMTgtMDEtMDNUMTU6MjU6MjIrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6MGY4NTcxMzktZmFmNS00OTE4LTgxYjQtYzViNTk0YzU0YmIzIiBzdEV2dDp3aGVuPSIyMDE4LTAxLTA1VDEwOjMxOjAxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+fv/GbgAADLVJREFUeJztnXuwVVUdxz8Xr4igCCqYoKloXbWAzBOKmpqPctQiTSs1wUcSiqRZjowzTE1jjTJlLyPKScK0otFSy0bNcnxCegwpVPKROkqYylseyoXTH799uofLPef81mOfs/be6zOz595zzlp7/+6+37PW2mv9fr/VUalUiERs6dduAyLZJgoo4kQUUMSJKKCIE1FAESeigCJORAFFnIgCijgRBRRxIgoo4kQUUMSJTtcTlMtlH3aEyrjk5+NttSJFSqWSU31nAeWcaUAFmNhuQ0IldmH1GQ58NjmGt9mWYIkCqs9koD+wA3BRm20JliigvukEptS8vpjY3fdJFFDfnA6MrHk9EjitTbYETRRQ31yqfK/wRAFty1jgo328fzQwpsW2BE8U0LZMs/yskEQBbc2uwNkNPj8bGNoiWzJBFNDWXAjs2ODzgUmZSEIUUA/9gEsU5S4h3rf/E29ED6cC+yrK7Qeckq4p2SEKqAeTAXIcTCdEAQkHAscblD8hqVN4ooCES4EOg/IdwNSUbMkUUUAwGJhkUW8SsLNnWzJHFJAIYSeLejsD5/k1JXsUXUAduK1xTcWs68sdRRfQx4H3O9TvAk70ZEsmKbqAfKywF/qRvsgCGgWc7OE8JyOTi4WkyAKaip+/vx8FfqQvqoAGAud7PN8FyTkLR1EF9AV0bhkbk6MZQ4FznCzKKEUVkHbw/Ovk0FDIwXQRBXQMMFpZ9kfJoWF0cu5CUUQBaVuKx4CFyTFfWadwjvdFE9BewARl2Rtqfte2Qp9OrlEYiiYgbYDg68BtNa9vS95rRmdyjcJQJAGZhCj/DNhU83pT8p6Gi5JrFYIiCehzwDBFuU3A7D7en83WoqrHsORahaBIAtIOnn8PLOvj/WXA7zxfK/MURUCHA9pMSjdYflZLCThMWTbTFEVA2sfrRcDDDT5/BHhKea5CtEJFENAewJnKsj9WlNG2Qmcm1841RRBQNVFUM1YCtyrK/QpYoSjXP7l2rsm7gLZn60RRjZgDrFeU2wDcpDznlMSG3JJ3AZ0OjFCU2wLMMjjvrKROM0YkNuSWPAqoE9gTyfNzubLOPcCLBtd4CbhbWfYK4AjgACSEKFdkIe9fB5J2ZXivY1id94ZiHimhHRj3rvNJRblxwKM1rzcCbwJvNDn+m/zUTF62jXYJaDCNRVD7ejfStfMFpAUy5c/Av5DIDBMGAHsnh4ZVNBdb9ViB5LVuGb7+MQPQtQ7VnwM8XdcHs7C76ZWk7g/8mrMNQ5JDE37Uja51q7ZwG1yN6zDd9rtcLl+KxELVisMmsjME1iEZWFdb1h8MLCXbf3+tqO4rlUpG3bnNIHoustp8OBIak9WbB3AL9uIBWAPc7MmWdjAICUk6DJlumGt6AuMWCKBcLncizXfWM7iPBhY7nuMg4BkPtrSTG4FLSqVSt2lFKwFVKZfL04Fvk8348AeBYz2d637M8guFQgW4ulQqXWt7Aqd5oOTCZwHvuJynTdg8urfiXK3iHeAsF/GAn4nEeci3b7mHc6XNBuAV4AHgDo/n/QOwAHnkzgLLkSxr81xP5Osx/lFgPPAnZMa1VWxB5j5qJ956T8TVHmtTsmMz8veDLKL2nsLYo857w9At9PrkRSSe/zkfJ/M5Qfc8chPvRKbubVlP/VnZ3q/fQv55IfEu8FpyaBhCY5HVvnZNcj4f+BRy37zge4b3LaQ7m4ts1GbKa8AnyP5TjQmrkkPTIuyHDNhHWVznNuBcdKHaatJYTN0IfB6YaVF3L6Q7/JhXi/LBWMRb0kY830G+0F7FA+mtxleAqxB/GNMuZgiyNnWuZ5uyzEmIeEY2K9iLzUhm/StJaY0sbXeOnyIZ4E0Hr/2RGd6ve7coe1yEPOWZZoRdh0Th/sS7RTW0wh/oHmT/raUWdb8B/IKce/XVoQO4FgloNB2rLkP2N9P6LFnTKoeyRch6yyKLupMQEe7i1aKw2QFJK3OVRd3FyL3+u1eL6tBKj8SlSEtk43tzHDK43serRWGyG/KkZRPdej9wJPCqV4sa0GqX1rWIF582zryWDyCzvYd6tSgs9kfSyhxlUXcOMkG4xqtFTWiHT3Q38CVgOuZPBu9BFkE1rqRZYzzyBbHJWz0DydPYcvfXdjrVX4fMF5nOTQxC1rHylMzpDOCvwO6G9d5F8j1e490iJe2OyvgtsqhnuhDbD0n69D3a/ze4ciVyH0zdfFcimfY1wZCpEcLNry7EvmBR93Jkir7RPqehsh3ilDcTc3+ql5D1xgd9G2VKCAICWYg9nK3DX7SchrhnDPdqUbrsBNyFXTazx5F7tcSrRZaEIiCQbux47HxUDkNWmk1DbNrBCOAh7LZZuAPxonzDoz1OhCQgSLzkkAG2KaMQER3t1SK/jEaetA6xqPt94DN4CMXxSWgCAnm0n45ktjB18h6KBPyFmDX+RCS/kDagsMoW4MvAV9DF47eUEAVU5UbsF2JvQeZGQuECxFvTNDZ+PTLG06YZbjkhCwjgXmRW1mYh9puEkRnjOODnmC+Ivo5kvr/Lu0UeCV1AAP/AfiH2Wc+22PCyRZ1nkCetsl9T/JMFAYHdQuxywnjU/TfwH4PyDyALoq+kY45fsiIg6FmInaMs/xgtzlTRAO381jzEJ3xVeqb4JUsCAnkqe0JZ9pE0DTFEK6AygecD6k3WBAR6V4eQBKS15chUrUiBvApoI2ENQJ8C3laUiwJKmb2B9yrKlRFXh1DYjMxAN2MYbvvYt5ysCUj7DQ2p+6qSy24sawLK4vininYgbePO2jbyKKAKdm4habMA3dpebIFSYjC6zXKfJsx5lLfRzaZ3Ye7a2jayJKDx6Oz12fpMQLJZ+CJ346AsCaiV459RwB8RB647kdDi/TycVyvuKKAUaIWABiDh1E8Dp9S8f2ry3gzc9kPV2paZgXRWBNSJbBnQjNewW/0GcTFdjCR06CtCYkfERWQxsl5lwzJkcbUZh9axITiyIqAPAwMV5WzGP/sgXdXdSGRoMw5AvAJux9y7EHStUH/0W3S2lawISNukmwioP3A14nszwdgicVZ7FkmAYJI9JFfdWN4EpP3nnAj8E/gWupatHoOQFCyL0OecztVAOisC0tzMNYj3YiNGIlGg9+F3zekgxBHsViR+vxHPoovEPYIMJHDPgoDehy5ocAH10+ltj4QQL0G/Aa8NZyNbQF2GRJ72RQVxdmvGrogwgyYLAnLtvo5F3Clm0pqNYQYjMVxPUj/dcW4mFPMkoN5jiz2RHZYfAA72apGOsYhQ5iBuGrVEAbUQzU3spsffphMJwluCRLm68DL280ogY5jzkG7tYnrudxldWpvgn8RCF9Du6OLdFyJBeEchXcf1uG1w+w6Sc+fg5LgGtw1lhiKZOP4GfARxdtN4TO6PZKsPltAFpP0GPodkx38IGON4zXuRVf8ZSBz6huT30cjTmwslpKWcjSyNaAi6G8uLgM4BJuL22PsqkinsJCTdTG+eR5YwzsAtiWU/JMXfZGX5oLux0AXUim/fJiQbyEHI8kQzbk/KXodbCI5W7LEFsmRHZA0sTf6CdHnTkczuWtYldcYguQ3T5BACzsAWsoDGkd5eWkuRBJ8n4Bb+vARJinUWZuHLJmyP5AYIkpAFlEbT3Q18FzgQD7v11fCb5JzXY57TSEOw3VjIAvI9eHwQ+BDwNXRBfqasBb6KdDkPeT53sAPpUAXUj54tJF15Hdk66lj0j84uLEby+kxEdlb0gdYfvOUEaRTwQWTfMBc2Az9EupZbXA2y4JfIJOgNuG/LuQuy1UNwhCog1z7/McQt9DJgtbs51qwGpiGzz/MdzxVkNxaqgGxv1pvA+Ul9m4xmabEQ+VJciP2Gt0EOpPMioC3IWlMXskFdKImlaqkANyGObLMxz7gaBaREm4GjSnWBciqyf0TorERW5k1zIO6L+Z6pqROigLTftOXIetJ4WrQ7n2eeQCYIpwArlHWCa4VCFFCz7quC5JDuSn6G2F1p2YJsTNyFpAJu9rdEASloJKAnkaZ/MuZbRIXMW8AXERfYhQ3KBfckFpqA6mXgWInsfz4O2a0mryxAxnPT6DvDyFha49etJjQB9Z5xrSBPVV3I/ufB7RWRApuRyccu4OZen21HYAuroQmotolehCQXPx+Z3ykabyBbnh+NBEFWCaobC1FAa5AZ5EMJM9NYq3kY8Yu6AlmwDWogHZKAOhHf5i5kDct1/ShPdCP7w3Yh2T2C+b91VCpZfgqOtJtglBzJJlFAESeigCJORAFFnIgCijgRBRRxIgoo4kQUUMSJKKCIE1FAESeigCJORAFFnIgCijgRBRRxIgoo4kQUUMSJKKCIE/8D51pQ3VVFNAQAAAAASUVORK5CYII=',
    starSecondary: null,
    starForeground:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFFmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcDpDcmVhdGVEYXRlPSIyMDE4LTAxLTAzVDE1OjI1OjIyKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOC0wMS0wM1QxNjo0Mjo0NiswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOC0wMS0wM1QxNjo0Mjo0NiswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxZjNkMzAxYy0xZjc4LTQyNzktYmU4Ny1jYjQ2YTkyZjllZjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MWYzZDMwMWMtMWY3OC00Mjc5LWJlODctY2I0NmE5MmY5ZWY2IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MWYzZDMwMWMtMWY3OC00Mjc5LWJlODctY2I0NmE5MmY5ZWY2Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoxZjNkMzAxYy0xZjc4LTQyNzktYmU4Ny1jYjQ2YTkyZjllZjYiIHN0RXZ0OndoZW49IjIwMTgtMDEtMDNUMTU6MjU6MjIrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz41FN+KAAAI80lEQVR4nO2da2xcxRWAP8emhLREJoQEFWgRCMz7FTc4pYWqUEC8hShpKCVKoRBIolZA1SCVf7QiFQWpQn3wfgkBgn8I8RBIUJUWMEShVEKlQghIHwkhJgERhM32x7nGa7Ne37szc+fMzvmkle313bnn7n47d+7M3DM9jUYDw+iUWbEDMNLGBDKcMIEMJ0wgwwkTyHDCBDKcMIEMJ0wgwwkTyHDCBDKcMIEMJ/pcCxgb7vcQhloWFz9fjBpFQHoHR5xe7yxQl7MGaAAXxQ5EK3YKm54FwPnFY0HkWNRiAk3PpcCXgJ2Bn0SORS0mUGv6gJVNf6/ETvctMYFacy6wV9PfewPnxAlFNyZQa1a3eG5N7VEkgAn0RY4Evt3i+eOBw2uORT0m0BdpV9NYLTQFE2gy84AL2vz/h8BuNcWSBCbQZC4Gdmnz/znAj2uKJQlMoAlmAVeU2O4K7H37HHsjJjgD2LfEdvsBp4UNJR1MoAmqNJBbXeZniQkkHAScWGH7k4EDA8WSFCaQsBroqbB9D1YLASYQwFxgeQevWw58xXMsyWECdS5Cp+J1FbkL5HoqWuUrkFTJXSDXxvDBwEmeYkmS3AXy0RDOujGds0C+OgTPBL7uoZwkyVmgVfg5/rJDIF1JrgLNAVZ4LO8S2g/Cdi25CnQhfqdlzAOWeSwvGXIVKETDN8vGdI4CnUCYqalHA8cFKFc1OQoUclpqdlNecxNob+DsgOWfC3w1YPnqyE2gywl7g+BOwGUBy1dHTgLVdYvyZcgt0VmQk0BLgT1q2M9C4Lwa9qOCnASqs4GbTWM6F4GGgMGa97eoxv1FIxeBYnTyZVEL5SDQQuD7Efa7FJgfYb+1koNA44mi6mY2GSSm6naBdmJyoqi6WQn0Rtx/cLpdoNg9w18jbM93dLoxbVsf0t+zAPhZ3FAAuBL4F7C5eIzGDccvKQjUg8y3WTDlscc0z+1GtZsEQ3McsKH4vQFsBTYVj81Nv7d67v3iNWqJJdBc2kvQ/PfupCF6Gca/DPOQ26lnYhTYQnvJmp/b5j/k9vj6YGZTrnYY/znb0367nT6kG2Jhye13MCHXTLXbpmJ7J3qqLvs9Nty/Gvgek+XI/hbfRNnOZKme6h0cublKAZ1chd2NjGwPIbfGmDzpsivyGQ4hfWV3Vy2gskC9gyPbkWRMt1Z9raGWW4Azi8+2EpVPYc2MDfevBX6NrqseozwN4JrewZF1nRbgJBDA2HD/UiZOa0Y67ACW9w6OPORSiI+e6AeR7F5bPJRl1MN7yGfmJA/4G8r4C7AE6XE1dPMG8lk976Mwn2NhXgMzguD9i+57MNVb1Wh45wECNDVCjMbvAH4A/CZA2UZnXI8s4fCJ74JDTedoAL9A5sOMBdqHMTOjyKS2awg0KBt6PtCfkE7Hyh1UhjPbgNOB20LupI4JZY8j629trGFfhvAu8p4/GXpHdc1I3AAcy8S8GCMc65H3+tU6dlbnlNaNyLfi8Rr3mRuPISsr/ruuHdY9J3o7kpTylpr3mwN/AM4CPqxzpzEm1Y8iCQjWony6ZiI0gJ8jiT5rv+KNeVfGOqS/yHlWXMbsAM4HbogVQOzbeh5CMr3bQGx1NgPfBR6OGURsgcAGYjvhn8gswr/GDkSDQCADsUOITEZ7/ox84d6MHQjoEQjkNHYiMr/IaM39yA0N78cOZBxNAoEM9i1DGtjGZH6FJEj3PiDqgjaBQC5L1yJZNbrqNuAOGUXWs/8lCrs9NAo0zq3YQOw2ZEWhO2IHMh2aBQJ4AvgWeQ7Evo3cV/9U7EDaoV0gkEHB3AZiX0GuSl+LHchMpCAQ5DUQ+ygyIPqf2IGUIRWBYGIg9s7YgQTkNuAc4KPIcZQmJYFArkheih1EQF4gsSnAqQkE0qjuVpI7NhNIF8kdW2oC7YMkruxW9gf2jB1EFVITKIcVAZM6xtQESq6K74CkjtEE0kdSx5iSQHMJs1iuNo4Cvhw7iLKkJNAS0oq3U/qQoZskSOkDSapqdySZYzWBdJLMsaYiUB+wOHYQNTJEIqv8pCLQMcCc2EHUyK7AEbGDKEMqAiVTpXskiWM2gfSSxDGnIlBS3fueSOKYUxDoAGRBl9zYC9g3dhAzkYJASVTlgVB/7CaQbtQfewoCxWwLvFU8YqG+HaRdoPnAQIT9fgJcBxxSPK4jzi3FhwL9EfZbGu0CxajCn0BG/a8FPi4e1xbPBc96OoUelNdCJtAE7wDnAaci6Wam8gZwSrHNOzXGpbodpF2gOr59nyLZQA4GHimx/SPFtuuK14bGaqAO2QUZAwvJ08iY01qq3cz3UfGaI4BnAsTVzDeQ9UxVolmgxYR74zYiCT5PAl53KOd1JCnWMsLlZp4NDAYq2xnNAoWoukeB3wIH4TcT2gNFmTcSJqeR2naQZoF8v2nPIvONryZMMu7twFXA0cBznstW2w7SKtAsZA60D/4L/Aj4DvAPT2W24zXgBOAi4H+eyvwmSlfG1irQYbh3oI0Bv0NOLfe5BtQB9yKdoDfjnjBhPnIc6tAqkGuV/TywCPgp8IF7OB3zAbAGuZJyzems8jSmVaBO2z+bgRXF6zVlNFuPCHAxsq5sJ6hsSHeLQJ8Bv0dOGXehMJspEtMdwIHAH5GYq2AClaRqBo4XkFPEKmBrkIj8shW4HLnzYrjC61Rm7tAoUNlz/RYkl/QSJCllaryE3IG6kvKZ59W1gzQKNFNV3UBySA8UPzWersryGbIw8QBwOzMfi7rTWGoCvYxU/ZfSXUtEvQdcgvT3rG+znQk0A9Nl4NiKrMi3GHix1ojq5W9Ie24NMNLi/0ehLHOHNoGmZuBoIFdVA8iaoFWvXFJkDOl8HADumfI/dZk7tAnUXEVvQJKLr0D6d3JjE7AcSTr+96bnVZ3GNAq0DelBXoQtQAeywNwxwJXIgK0JNA19yFKOA8gYVlIJtwMzCtyEvDdvouhz62k0Ur4KNmKjxmQjTUwgwwkTyHDCBDKcMIEMJ0wgwwkTyHDCBDKcMIEMJ0wgwwkTyHDCBDKcMIEMJ0wgwwkTyHDCBDKcMIEMJ/4PN4Zi1rcUs0gAAAAASUVORK5CYII='
  };
  function Fu(e, t) {
    let n;
    return (n = !1 === t ? parseFloat(e) : parseFloat(e).toFixed(1));
  }
  const Ru = {
      create() {
        const e = document.createElement('rating');
        e.classList.add('hap-element'), e.classList.add('hap-rating');
        const t = document.createElement('div'),
          n = document.createElement('div'),
          i = document.createElement('div');
        return (
          t.classList.add('hap-rating-back'),
          n.classList.add('hap-rating-second'),
          i.classList.add('hap-rating-fore'),
          (this.back = t),
          (this.second = n),
          (this.fore = i),
          e.appendChild(t),
          e.appendChild(n),
          e.appendChild(i),
          this.setBackgroundImage(),
          e
        );
      },
      onAppend() {
        this.initEvent(), Nu.prototype.onAppend.call(this);
      },
      getImgSize(e) {
        const t = e || this.options.starBackground;
        return new Promise((e, n) => {
          const i = new Image();
          (i.style.opacity = 0),
            (i.onload = () => {
              const t = {
                width: i.naturalWidth,
                height: i.naturalHeight,
                ratio: parseFloat(i.naturalWidth / i.naturalHeight).toFixed(2)
              };
              document.body.removeChild(i),
                (this.size = t),
                this.getSizeCallbak.forEach(e => {
                  e.call(this);
                }),
                (this.getSizeCallbak.length = 0),
                e(t);
            }),
            (i.onerror = () => {
              n();
            }),
            document.body.appendChild(i),
            (i.src = t);
        });
      },
      bridge(e) {
        this.size ? e.call(this) : this.getSizeCallbak.push(e);
      },
      setBackgroundImage(e) {
        this.getImgSize(e).then(() => {
          const e = this.options;
          (this.back.style.backgroundImage = `url(${e.starBackground})`),
            e.starSecondary &&
              (this.second.style.backgroundImage = `url(${e.starSecondary})`),
            (this.fore.style.backgroundImage = `url(${e.starForeground})`),
            this.setNumberStar();
        });
      },
      setNumberStar() {
        const e = this.options,
          t = this.size,
          n = e.numstars,
          i = e.width,
          o = this.node.childNodes,
          r = parseInt(i / n);
        let s;
        (s = e.height ? e.height : r * t.ratio),
          Array.prototype.forEach.call(o, e => {
            e.style.backgroundSize = `${r}px ${s}px`;
          }),
          (this.node.style.height = `${s}px`),
          this.setRating();
      },
      setRating() {
        const e = this.options,
          t = this.second;
        (this.fore.style.width = `${this.getWidth(e.rating, 'fore')}px`),
          e.starSecondary &&
            (t.style.width = `${this.getWidth(e.rating, 'second')}px`);
      },
      getWidth(e, t) {
        const n = this.options.width,
          i = this.options.numstars;
        'second' === t && (e = Math.ceil(e));
        const o = Fu(e / i, !1);
        return Fu(n * o, !1);
      },
      rating(e) {
        const t = this.options.width,
          n = this.options.numstars,
          i = this.options.stepsize,
          o = Fu(e / t);
        let r = Math.round(Fu(n * o) / i) * i;
        return (
          r > n && (r = n),
          r < 0 && (r = 0),
          (this.options.rating = r),
          this.setRating(),
          r
        );
      },
      initEvent() {
        const e = this.node,
          t = e.getBoundingClientRect();
        e.addEventListener('click', e => {
          if (this.options.indicator) return;
          const t = e.offsetX,
            n = this.rating(t);
          this.dispatchEvent('change', { rating: n });
        }),
          e.addEventListener('panstart', e => {
            if (this.options.indicator) return;
            const n = e.touch.pageX - t.left;
            this.rating(n);
          }),
          e.addEventListener('panmove', e => {
            if (this.options.indicator) return;
            const n = e.touch.pageX - t.left;
            this.rating(n);
          }),
          e.addEventListener('panend', e => {
            this.options.indicator ||
              this.dispatchEvent('change', { rating: this.options.rating });
          });
      }
    },
    Bu = {
      numstars(e) {
        (this.options.numstars = e),
          this.bridge(() => {
            this.setNumberStar();
          });
      },
      rating(e) {
        e > this.options.numstars && (e = this.options.numstars),
          (this.options.rating = e),
          this.bridge(() => {
            this.setRating();
          });
      },
      stepsize(e) {
        this.options.stepsize = Fu(e);
      },
      indicator(e) {
        this.options.indicator = 'false' !== e && !1 !== e;
      }
    },
    ju = {
      starBackground: function(e) {
        (e = '/' === e[0] && Hap.basePath ? `${Hap.basePath}${e}` : e),
          (this.options.starBackground = e),
          this.setBackgroundImage(e);
      },
      starSecondary: function(e) {
        (e = '/' === e[0] && Hap.basePath ? `${Hap.basePath}${e}` : e),
          (this.options.starSecondary = e),
          this.setBackgroundImage(e);
      },
      starForeground: function(e) {
        (e = '/' === e[0] && Hap.basePath ? `${Hap.basePath}${e}` : e),
          (this.options.starForeground = e),
          this.setBackgroundImage(e);
      }
    };
  var $u = {
      Image: Va,
      Text: Xa,
      Scrollable: Ec,
      Slider: Tc,
      Progress: Lc,
      Swiper: td,
      Tabs: xd,
      Stack: Cd,
      Popup: jd,
      Input: Jd,
      Textarea: Qd,
      Picker: Ip,
      Select: Fp,
      Option: jp,
      Video: zp,
      Switch: Qp,
      A: tu,
      Web: ru,
      Richtext: lu,
      Span: du,
      Label: uu,
      Canvas: gu,
      Map: Du,
      Rating: {
        init: function(e) {
          Nu = e.Atomic;
          const t = e.utils.extend;
          function n(e) {
            const t = e.style || {};
            (this.options = Object.assign({}, Pu)),
              t.width && (this.options.width = parseInt(t.width)),
              t.height && (this.options.height = parseInt(t.height)),
              (this.size = null),
              (this.getSizeCallbak = []),
              Nu.call(this, e);
          }
          (n.prototype = Object.create(Nu.prototype)),
            t(n.prototype, Ru),
            t(n.prototype, { attr: t(Object.create(Nu.prototype.attr), Bu) }),
            t(n.prototype, { style: t(Object.create(Nu.prototype.style), ju) }),
            e.registerComponent('rating', n);
        }
      }
    },
    zu = {
      init(e) {
        if ('object' == typeof $u) for (const t in $u) e.install($u[t]);
      }
    };
  var Hu = {
    init: function() {
      Ba.install(ja),
        Ba.install(zu),
        Ba.install(Ri),
        console.warn(
          '### Web Render ### 该预览仅供界面开发参考，实际效果请以真机调试为准'
        );
    },
    Hap: Ba
  };
  (global.frameworkVersion = t), (global.packagerVersion = n);
  const Yu = {};
  function Wu(e, t, n, i) {
    Object.defineProperty(e, t, {
      value: n,
      enumerable: !!i,
      writable: !0,
      configurable: !0
    });
  }
  function Uu(e, t) {
    if (e.length) {
      const n = e.indexOf(t);
      if (n > -1) return e.splice(n, 1);
    }
  }
  (Yu.platform = ae),
    ae.init(),
    Yu.platform.exposeToNative(ae.exposure),
    (global.BroadcastChannel = ae.BroadcastChannel),
    (global.ENGINE_TYPE = ae.ENGINE_TYPE),
    (Yu.runtime = Vi),
    Vi.init(),
    Yu.platform.exposeToNative(Vi.exposure),
    (Yu.dock = lr),
    lr.init(Yu),
    Yu.platform.exposeToNative(lr.exposure),
    Hu.init(),
    Yu.platform.defineBundle('parser'),
    Yu.platform.defineBundle('canvas'),
    Yu.platform.defineBundle('animation');
  const Vu = Object.prototype.hasOwnProperty;
  function Gu(e, t) {
    return Vu.call(e, t);
  }
  function Ju(e, t) {
    return function(n) {
      const i = arguments.length;
      return i ? (i > 1 ? e.apply(t, arguments) : e.call(t, n)) : e.call(t);
    };
  }
  const Zu = ['$idx', '$item', '$evt'];
  function qu(e, t, n) {
    Zu.indexOf(n) > -1 || !N(n)
      ? Object.defineProperty(e, n, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return e[t] ? e[t][n] : null;
          },
          set: function(i) {
            e[t] && (e[t][n] = i);
          }
        })
      : console.error(
          `### App Framework ### 页面数据属性名 '${n}' 非法, 属性名不能以$或_开头`
        );
  }
  function Ku(e, t) {
    !N(t) && e && delete e[t];
  }
  const Qu = '__proto__' in {},
    Xu = Array.prototype,
    ef = Object.create(Xu);
  ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(
    function(e) {
      const t = Xu[e];
      Wu(ef, e, function() {
        let n = arguments.length;
        const i = new Array(n);
        for (; n--; ) i[n] = arguments[n];
        const o = t.apply(this, i),
          r = this.__ob__;
        let s;
        switch (e) {
          case 'push':
          case 'unshift':
            s = i;
            break;
          case 'splice':
            s = i.slice(2);
        }
        return s && r.observeArray(s), r.dep.notify(), o;
      });
    }
  ),
    Wu(Xu, '$set', function(e, t) {
      return e >= this.length && (this.length = e + 1), this.splice(e, 1, t)[0];
    }),
    Wu(Xu, '$remove', function(e) {
      this.length &&
        ('number' != typeof e && (e = this.indexOf(e)),
        e > -1 && this.splice(e, 1));
    });
  const tf = [
    'manifest',
    'config',
    'router',
    'data',
    'props',
    'style',
    'template'
  ];
  const nf = ['if', 'for', 'show', 'tid'];
  function of(e) {
    return nf.indexOf(e) >= 0;
  }
  function rf(e) {
    const t = e && e.toString().match(/^\s*function (\w+)/);
    return t ? t[1] : '';
  }
  function sf(e, t) {
    return rf(e) === rf(t);
  }
  function af(e, t) {
    if (!Array.isArray(t)) return sf(t, e) ? 0 : -1;
    for (let n = 0, i = t.length; n < i; n++) if (sf(t[n], e)) return n;
    return -1;
  }
  const lf = /^(String|Number|Boolean|Function|Symbol)$/;
  function cf(e, t) {
    let n;
    global.Env &&
      'trace' === global.Env.logLevel &&
      console.trace('### App Framework ### 参数类型验证 ----', e, t);
    const i = rf(t);
    if (lf.test(i)) {
      const o = typeof e;
      (n = o === i.toLowerCase()) || 'object' !== o || (n = e instanceof t);
    } else n = 'Object' === i ? D(e) : 'Array' === i ? Array.isArray(e) : e instanceof t;
    return { valid: n, expectedType: i };
  }
  var df = {};
  function hf(e, t) {
    return e._page.doc.createElement(t);
  }
  function pf(e, t) {
    const n = e._page.doc,
      i = df.quickapp.runtime.helper.createFigment(n);
    return (i._display = !0), t.appendChild(i), i;
  }
  function uf(e, t) {
    return e.appendChild(t);
  }
  function ff(e, ...t) {
    e.addEventListener(...t);
  }
  function mf(e, t, n, i) {
    if (!e) return;
    const o = df.quickapp.runtime.helper.createEvent(t);
    if ((Object.assign(o, n), i)) {
      const t = i.attr || {};
      for (const n in t)
        df.quickapp.runtime.helper.setElementAttr(e, n, t[n], !0);
      const n = i.style || {};
      for (const t in n)
        df.quickapp.runtime.helper.setElementStyle(e, t, n[t], !0);
    }
    return e.dispatchEvent(o);
  }
  function gf(e, t, ...n) {
    switch (t) {
      case 'attr':
        df.quickapp.runtime.helper.setElementAttr(e, ...n);
        break;
      case 'style':
        df.quickapp.runtime.helper.setElementStyle(e, ...n);
        break;
      case 'styles':
        df.quickapp.runtime.helper.setElementStyles(e, ...n);
        break;
      default:
        console.warn(
          `### App Framework ### updateNodeProperties() 未知的更新项：${t}`
        );
    }
  }
  function yf(e, t) {
    const { customComponentMap: n } = e;
    return (n[t] = n[t] || {}), n[t];
  }
  function bf(e, t, n, i) {
    if (!e || !t)
      return void console.warn(
        '### App Framework ### defineCustomComponent() app或inst不存在'
      );
    const o = yf(e, t.id);
    o[n] && console.warn(`### App Framework ### 组件 (${n}) 被重复注册`),
      (o[n] = i);
  }
  function vf(e, t, n) {
    if (!e || !t)
      return void console.warn(
        '### App Framework ### requireCustomComponent() app或inst不存在'
      );
    return yf(e, t.id)[n];
  }
  function Ef(e, t, n, i, o) {
    const r = (function(e, t) {
      return df.quickapp.runtime.helper.getDocumentNodeByRef(e, t);
    })(e.doc, t);
    if (r) {
      return mf(r, n, i, { attr: o });
    }
    return new Error(`fireEvent: 无效element索引 "${t}"`);
  }
  function wf(e) {
    (function(e) {
      let t = !1;
      return e.doc && e.$valid && (t = e.executor.exec()), t;
    })(e) && e.doc.listener.updateFinish();
  }
  function kf(e) {
    e.vm && xf(e.vm),
      (function(e, t, n) {
        if (!e || !t)
          return void console.warn(
            '### App Framework ### removeCustomComponent() app或inst不存在'
          );
        const i = yf(e, t.id);
        if (n)
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Framework ### removeCustomComponent() 删除id=${
                t.id
              }上注册的自定义组件(${n}):${!!i[n]}`
            ),
            delete i[n];
        else
          for (const e in i)
            global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                `### App Framework ### removeCustomComponent() 删除id=${
                  t.id
                }上注册的自定义组件(${e}):${!!i[e]}`
              ),
              delete i[e];
      })(e.app, e),
      e.executor && e.executor.reset(),
      (e.executor = null),
      (e.vm = null),
      (e.differ = null);
  }
  function xf(e) {
    if (
      (global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(`### App Framework ### 销毁VM(${e.__id__}:${e._type})`),
      !e._destroyed)
    ) {
      if (
        (e._root.$on('xlc:onDestroy', function() {
          delete e._props, delete e._data, delete e._ids;
        }),
        e.$emit('xlc:onDestroy'),
        e._parent && e._parent._childrenVms)
      ) {
        const t = e._parent._childrenVms,
          n = t.indexOf(e);
        -1 !== n && t.splice(n, 1);
      }
      if (
        (delete e._page,
        delete e._methods,
        delete e._options,
        delete e._parent,
        delete e._root,
        delete e._parentContext,
        delete e._attrs,
        delete e._parentElement,
        delete e._rootElement,
        delete e._slotTemplate,
        e._parentWatchers)
      ) {
        let t = e._parentWatchers.length;
        for (; t--; ) e._parentWatchers[t].close();
        delete e._parentWatchers;
      }
      if (e._watchers) {
        let t = e._watchers.length;
        for (; t--; ) e._watchers[t].close();
        delete e._watchers;
      }
      if (e._childrenVms) {
        let t = e._childrenVms.length;
        for (; t--; ) xf(e._childrenVms[t]);
      }
      delete e._vmEvents, (e._destroyed = !0);
    }
  }
  let _f = 0,
    Af = [];
  class Cf {
    constructor() {
      (this.id = _f++), (this.subs = []);
    }
    addSub(e) {
      this.subs.push(e);
    }
    removeSub(e) {
      Uu(this.subs, e);
    }
    depend() {
      Cf.target && Cf.target.addLink(this);
    }
    notify() {
      const e = this.subs.slice();
      for (let t = 0, n = e.length; t < n; t++) e[t].update();
    }
  }
  (Cf.target = null),
    (Cf.pushTarget = function(e) {
      Cf.target && Af.push(Cf.target), (Cf.target = e);
    }),
    (Cf.popTarget = function() {
      Cf.target = Af.pop();
    }),
    (Cf.resetTarget = function() {
      (Cf.target = null), (Af = []);
    });
  const Tf = Object.getOwnPropertyNames(ef);
  function Sf(e, t) {
    e.__proto__ = t;
  }
  function Mf(e, t, n) {
    for (let i = 0, o = n.length; i < o; i++) {
      const o = n[i];
      Wu(e, o, t[o]);
    }
  }
  class Of {
    constructor(e) {
      if (
        ((this.value = e),
        (this.dep = new Cf()),
        Wu(e, '__ob__', this),
        Array.isArray(e))
      ) {
        (Qu ? Sf : Mf)(e, ef, Tf), this.observeArray(e);
      } else this.walk(e);
    }
    walk(e) {
      for (const t in e) this.convert(t, e[t]);
    }
    observeArray(e) {
      for (let t = 0, n = e.length; t < n; t++) Of.$ob(e[t]);
    }
    convert(e, t) {
      Lf(this.value, e, t);
    }
    addVm(e) {
      (this.vms || (this.vms = [])).push(e);
    }
    removeVm(e) {
      Uu(this.vms, e);
    }
  }
  function Lf(e, t, n, i) {
    const o = new Cf(),
      r = Object.getOwnPropertyDescriptor(e, t);
    if (r && !1 === r.configurable) return;
    const s = r && r.get,
      a = r && r.set;
    let l = Of.$ob(n);
    Object.defineProperty(e, t, {
      enumerable: !0,
      configurable: !0,
      get: function() {
        const t = s ? s.call(e) : n;
        if (Cf.target && (o.depend(), l && l.dep.depend(), Array.isArray(t)))
          for (let e, n = 0, i = t.length; n < i; n++)
            (e = t[n]) && e.__ob__ && e.__ob__.dep.depend();
        return t;
      },
      set: function(t) {
        t !== (s ? s.call(e) : n) &&
          (i && i(), a ? a.call(e, t) : (n = t), (l = Of.$ob(t)), o.notify());
      }
    });
  }
  Of.$ob = function(e, t) {
    if (!O(e)) return;
    let n;
    return (
      Gu(e, '__ob__') && e.__ob__ instanceof Of
        ? (n = e.__ob__)
        : (Array.isArray(e) || D(e)) &&
          Object.isExtensible(e) &&
          (n = new Of(e)),
      n && t && n.addVm(t),
      n
    );
  };
  let If = 0;
  class Df {
    constructor(e, t, n, i) {
      i && S(this, i),
        (this.sync = !!this.sync),
        (this.vm = e),
        e._watchers.push(this),
        (this.expression = t),
        (this.cb = n),
        (this.id = ++If),
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            `### App Framework ### 创建 XWatcher ${
              this.id
            } ${this.expression.toString()}`
          ),
        (this.active = !0),
        (this.links = []),
        (this.linkIds = new Set()),
        (this.newLinks = []),
        (this.newLinkIds = new Set()),
        'function' == typeof t && (this.getter = t),
        (this.value = this.get());
    }
    get() {
      Cf.pushTarget(this);
      const e = this.getter.call(this.vm, this.vm);
      return Cf.popTarget(), this.clearLink(), e;
    }
    addLink(e) {
      const t = e.id;
      this.newLinkIds.has(t) ||
        (this.newLinkIds.add(t),
        this.newLinks.push(e),
        this.linkIds.has(t) || e.addSub(this));
    }
    clearLink() {
      let e = this.links.length;
      for (; e--; ) {
        const t = this.links[e];
        this.newLinkIds.has(t.id) || t.removeSub(this);
      }
      let t = this.linkIds;
      (this.linkIds = this.newLinkIds),
        (this.newLinkIds = t),
        this.newLinkIds.clear(),
        (t = this.links),
        (this.links = this.newLinks),
        (this.newLinks = t),
        (this.newLinks.length = 0);
    }
    update() {
      if (this.sync) this.run();
      else if (this.vm && this.vm._page && this.vm._page.$valid) {
        this.vm._page.executor.join(this);
      }
    }
    run() {
      if (this.active) {
        const e = this.get();
        if (e !== this.value || O(e)) {
          const t = this.value;
          (this.value = e), this.cb.call(this.vm, e, t);
        }
      }
    }
    depend() {
      let e = this.links.length;
      for (; e--; ) this.links[e].depend();
    }
    close() {
      if (this.active) {
        Uu(this.vm._watchers, this);
        let e = this.links.length;
        for (; e--; ) this.links[e].removeSub(this);
        (this.active = !1), (this.vm = this.cb = this.value = null);
      }
    }
  }
  function Nf(e, t, n) {
    jf(e, t, n.attr.id, e),
      (function(e, t, n) {
        $f(e, t, 'attr', n);
      })(e, t, n.attr),
      (function(e, t, n) {
        if ('function' != typeof n && !Array.isArray(n)) return;
        if (Array.isArray(n) && !n.length) return;
        if ('function' == typeof n) {
          const i = Hf(
              e,
              n,
              e => {
                gf(t, 'attr', 'class', e.join(' '));
              },
              t
            ),
            o = i.value;
          gf(t, 'attr', 'class', o.join(' '));
        } else gf(t, 'attr', 'class', n.join(' '));
      })(e, t, n.classList),
      (function(e, t, n) {
        $f(e, t, 'function' == typeof n ? 'styles' : 'style', n);
      })(e, t, n.style),
      (function(e, t, n) {
        if (!n) return;
        const i = Object.keys(n);
        let o = i.length;
        for (; o--; ) {
          const r = i[o];
          let s = n[r];
          'string' == typeof s &&
            ((s = e[s]) ||
              console.warn(`### App Framework ### 没有找到回调事件 "${r}".`)),
            'function' == typeof s
              ? (global.Env &&
                  'trace' === global.Env.logLevel &&
                  console.trace(`### App Framework ### 绑定回调事件---- ${r}`),
                ff(t, r, Ju(s, e), !1))
              : console.warn(
                  `### App Framework ### 回调事件 "${r}" 必须是函数`
                );
        }
      })(e, t, n.events);
  }
  function Pf(e, t, n, i) {
    global.Env &&
      'trace' === global.Env.logLevel &&
      console.trace(
        '### App Framework ### 处理自定义组件 ----',
        JSON.stringify(n)
      ),
      (n = n || {});
    const o = (t = t || {})._options || {};
    !(function(e, t, n) {
      for (const i in e) {
        const o = e[i];
        n.$on(_(i), function(...e) {
          t && t[o] && 'function' == typeof t[o]
            ? t[o](...e)
            : 'function' == typeof o
            ? o.apply(t, e)
            : console.warn(
                `### App Framework ### 组件Vm 子组件绑定了父组件不存在的方法：'${o}'`
              );
        });
      }
    })(n.events, e, t);
    const r = D(i) ? i : {};
    Object.assign(t._attrs, n.attr || {}, r),
      (function(e, t, n, i) {
        if (!e) return;
        if (e && !t) {
          console.warn(
            `### App Framework ### 组件${
              i._type
            } 中无props属性，放弃属性校验；推荐增加props属性`
          );
          for (const t in e) Rf(t, e[t], n, i, !1);
        } else {
          for (const o in t) {
            const r = !e.hasOwnProperty(o);
            Rf(o, e[o], n, i, r, t[o]);
          }
          for (const n in e) {
            const e = ['id', 'tid'];
            void 0 === t[n] &&
              -1 === e.indexOf(n) &&
              console.error(
                `### App Framework ### 组件${
                  i._type
                } 属性'${n}'未定义，放弃属性 `
              );
          }
        }
      })(t._attrs, o.props, e, t);
  }
  function Ff(e, t, n, i = {}) {
    !(function(e, t, n) {
      (function(e, t, n) {
        const i = (t._options && t._options.style) || {};
        if (!n._rootElement) return;
        if (!e) return;
        const o = n._rootElement,
          r = '@appRootElement';
        function s(e, t) {
          'array' === w(e) && e.unshift(t);
        }
        if (((i[r] = n._rootElement.classStyle), 'function' == typeof e)) {
          const i = Hf(t, e, e => {
            s(e, r), gf(o, 'attr', 'class', e.join(' '), null, !0);
          });
          n._parentWatchers.push(i);
          const a = i.value;
          s(a, r), gf(o, 'attr', 'class', a.join(' '), null, !0);
        } else if (null != e) {
          if ('array' !== w(e))
            return new Error('mergeClassStyle: classList的类型不是数组----', e);
          s(e, r), gf(o, 'attr', 'class', e.join(' '), null, !0);
        }
      })(e.classList, t, n),
        (function(e, t, n) {
          if (n._rootElement) return;
          for (const i in e) {
            const o = e[i];
            if ('function' == typeof o) {
              const e = Hf(t, o, function(e) {
                n._rootElement && gf(n._rootElement, 'style', i, e);
              });
              n._parentWatchers.push(e);
              const r = e.value;
              gf(n._rootElement, 'style', i, r);
            } else gf(n._rootElement, 'style', i, o);
          }
        })(e.style, t, n);
    })(n, e, t),
      i.childNodes
        ? (i.childNodes[i.childNodes.length - 1]._vm = t)
        : (i._vm = t);
  }
  function Rf(e, t, n, i, o, r) {
    const s = i._props;
    of(e) &&
      console.warn(
        `### App Framework ### 组件${
          i._type
        }中属性 '${e}' 是保留字, 可能会导致应用运行异常`
      ),
      'function' == typeof t
        ? (function() {
            let a = !1;
            const l = Hf(n, t, function(t) {
              (a = !0), (s[e] = Bf(e, t, o, r, i)), (a = !1);
            });
            i._parentWatchers.push(l);
            const c = Bf(e, l.value, o, r, i);
            Lf(s, e, c, () => {
              a ||
                console.error(
                  `### App Framework ### 组件${
                    i._type
                  } 禁止修改props中的：${e}!如需改变，请额外在data中使用另一个名称声明`
                );
            });
          })()
        : ((t = Bf(e, t, o, r, i)),
          Lf(s, e, t, () => {
            console.error(
              `### App Framework ### 组件${
                i._type
              } 禁止修改props中的：${e}!如需改变，请额外在data中使用另一个名称声明`
            );
          })),
      qu(i, '_props', e);
  }
  function Bf(e, t, n, i, o) {
    if (void 0 === i) return t;
    const r = af(Boolean, i.type);
    if (r > -1)
      if (n && !i.hasOwnProperty('default')) t = !1;
      else if ('' === t || t === T(e)) {
        const e = af(String, i.type);
        (e < 0 || r < e) && (t = !0);
      }
    return (
      void 0 === t &&
        i.hasOwnProperty('default') &&
        (t =
          'function' == typeof i.default && 'Function' !== rf(i.type)
            ? i.default.call(o)
            : i.default),
      (function(e, t, n, i, o) {
        if (!i.required && null == t) return;
        if (i.required && n)
          return void console.error(
            `### App Framework ### 组件${o._type} props中的：${e} 是必填字段`
          );
        let r = i.type,
          s = !r;
        const a = [];
        if (r) {
          Array.isArray(r) || (r = [r]);
          for (let e = 0; e < r.length && !s; e++) {
            const n = cf(t, r[e]);
            a.push(n.expectedType), (s = n.valid);
          }
        }
        if (!s)
          return void console.error(
            `### App Framework ### 组件${
              o._type
            } props中的：${e} type类型验证失败，期望类型为${a.join(', ')}`
          );
        const l = i.validator;
        l &&
          'function' == typeof l &&
          !l(t) &&
          console.error(
            `### App Framework ### 组件${
              o._type
            } props中的：${e} validator验证失败`
          );
      })(e, t, n, i, o),
      t
    );
  }
  function jf(e, t, n, i) {
    if (!n) return;
    const o = Object.create(null);
    if (
      (Object.defineProperties(o, {
        vm: { value: i, writable: !1, configurable: !1 },
        element: { get: () => t || i._rootElement, configurable: !1 }
      }),
      'function' == typeof n)
    ) {
      const r = n;
      (n = r.call(e)) && (e._ids[n] = o);
      const s = Hf(
        e,
        r,
        t => {
          t && (e._ids[t] = o);
        },
        t
      );
      e !== i && i._parentWatchers && i._parentWatchers.push(s);
    } else 'string' == typeof n && (e._ids[n] = o);
  }
  function $f(e, t, n, i) {
    if (!i) return;
    if ('function' == typeof i)
      return void (function(e, t, n, i) {
        const o = Hf(
          e,
          i,
          e => {
            gf(t, n, e);
          },
          t
        ).value;
        gf(t, n, o);
      })(e, t, n, i);
    const o = Object.keys(i);
    let r = o.length;
    for (; r--; ) {
      const s = o[r],
        a = i[s];
      'function' == typeof a ? zf(e, t, n, s, a) : gf(t, n, s, a);
    }
  }
  function zf(e, t, n, i, o) {
    const r = Hf(
      e,
      o,
      e => {
        gf(t, n, i, e);
      },
      t
    ).value;
    gf(t, n, i, r);
  }
  function Hf(e, t, n, i) {
    const o = new Df(e, t, function(e, t) {
      ('object' != typeof e && e === t) || n(e);
    });
    return (
      (function(e, t) {
        e &&
          ((e._bindWatcherList = e._bindWatcherList || []),
          e._bindWatcherList.push(t));
      })(i, o),
      o
    );
  }
  function Yf(e, t, n, i) {
    const o = e._page || {},
      r = o.doc || {};
    if (-1 === o.lastSignal) return;
    if (
      (t.id && (t.attr.id = t.attr.id || t.id),
      (i = i || {}),
      (function(e) {
        return Array.isArray(e);
      })(t))
    )
      return (
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            '### App Framework ### 编译 fragment 节点 ----',
            JSON.stringify(t)
          ),
        void (function(e, t, n, i) {
          const o = pf(e, n);
          t.forEach(t => {
            Yf(e, t, o, i);
          });
        })(e, t, n, i)
      );
    if (
      (function(e) {
        return 'slot' === e.type;
      })(t)
    )
      return (
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            '### App Framework ### 编译 slot 节点----',
            JSON.stringify(t)
          ),
        void (function(e, t, n) {
          const i = pf(e, n);
          if (t.attr && t.attr.content) {
            const n = t.attr.content;
            let o = null;
            'string' == typeof n
              ? 'function' != typeof (o = e[n]) &&
                (global.Env &&
                  'trace' === global.Env.logLevel &&
                  console.trace(
                    `### App Framework ### slot的 content属性 ${n} 有误， 找不到对应的render函数 `
                  ),
                (o = null))
              : 'function' == typeof n
              ? (o = n)
              : global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  `### App Framework ### slot的 content属性 ${n} 无效`
                ),
              o &&
                ((t.children = []),
                (t.__render = o),
                (function(e, t, n) {
                  const i = qf(e, n, t.__render, 'render', t => {
                    global.Env &&
                      'trace' === global.Env.logLevel &&
                      console.trace(
                        `### App Framework ### Slot 节点 (${
                          n.ref
                        })内容更新 ----`
                      ),
                      (function(e, t, n) {
                        n ? (Kf(t, !0), Yf(e, n, t)) : Kf(t, !0);
                      })(e, n, t),
                      (n.content = t);
                  });
                  (n.content = i), i && Yf(e, i, n);
                })(e, t, i));
          } else if (e._slotTemplate) {
            const t = e._parentContext;
            (e._slot = i),
              t &&
                t._rootElement &&
                (e._slot._styleSheetId = t._rootElement._styleSheetId),
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  `### App Framework ### 向自定义组件 ${
                    e._type
                  } 的slot插入子节点`
                ),
              Zf(t, e._slotTemplate.content, i);
          }
        })(e, t, n)
      );
    if (
      (function(e) {
        return 'block' === e.type;
      })(t)
    )
      return (
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            '### App Framework ### 编译 block 节点 ----',
            JSON.stringify(t)
          ),
        void (function(e, t, n, i) {
          if (Wf(t, (i = i || {})))
            return (
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace('### App Framework ### 编译 block 节点 ---- for'),
              void Gf(e, t, n)
            );
          if (Uf(t, i))
            return (
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace('### App Framework ### 编译 block 节点 ---- if'),
              void Jf(e, t, n, i)
            );
          const o = pf(e, n);
          Zf(e, t, o);
        })(e, t, n, i)
      );
    if (Wf(t, i))
      return (
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            '### App Framework ### 编译 for 节点----',
            JSON.stringify(t)
          ),
        void (n === r.documentElement
          ? global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace('### App Framework ### 根节点不支持 `for` 指令!')
          : Gf(e, t, n))
      );
    if (Uf(t, i))
      return (
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            '### App Framework ### 编译 If 节点----',
            JSON.stringify(t)
          ),
        void (n === r.documentElement
          ? global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace("### App Framework ### 根节点不支持 'if' 指令!")
          : Jf(e, t, n, i))
      );
    const s = i.type || t.type,
      a = (function(e, t) {
        let n;
        e._page &&
          e._page.app &&
          e._page.app.customComponentMap &&
          'function' == typeof (n = vf(e._page.app, e._page, t)) &&
          (n(), (n = vf(e._page.app, e._page, t)));
        return n;
      })(e, s);
    a
      ? (function(e, t, n, i, o, r) {
          ['public', 'protected', 'private'].forEach(e => {
            t.hasOwnProperty(e) &&
              O(t[e]) &&
              !t.hasOwnProperty('data') &&
              console.warn(
                `### App Framework ### 自定义组件 ${o} 不支持 ${e} 数据模型，请使用 data 代替！`
              );
          }),
            t &&
              t.props &&
              !t._hasnormalizeProps &&
              ((t._hasnormalizeProps = !0),
              (function(e, t) {
                const n = e.props,
                  i = {};
                let o;
                if (Array.isArray(n))
                  n.forEach(e => {
                    'string' == typeof e
                      ? ((o = _(e)), (i[o] = { type: null }))
                      : console.warn(
                          `### App Framework ### 组件${t} props为数组时，数组元素必须为字符串`
                        );
                  });
                else if (D(n))
                  for (const e in n) {
                    const t = n[e];
                    (o = _(e)), (i[o] = D(t) ? t : { type: t });
                  }
                else
                  console.warn(
                    `### App Framework ### 组件${t} props属性值无效，必须为数组或对象`
                  );
                e.props = i;
              })(t, o),
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  `### App Framework ### 格式化自定义组件 ${o} props`,
                  JSON.stringify(t)
                ));
          const s = e.constructor;
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Framework ### 编译自定义组件 ${o} ----`,
              JSON.stringify(n)
            );
          const a = new s(
            o,
            t,
            e,
            i,
            void 0,
            {
              'xlc:onCreate': function() {
                e._static && (this._static = e._static),
                  jf(e, null, n.attr.id, this),
                  (this._externalBinding = { parent: e, template: n }),
                  Pf(e, this, n, r.repeat);
              },
              'xlc:onInit': function() {},
              'xlc:onReady': function() {}
            },
            n
          );
          Ff(e, a, n, i);
        })(e, a, t, n, s, i)
      : (function(e, t, n, i) {
          const o = e._page || {},
            r = o.doc || {},
            s = o.app || {};
          let a;
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              '### App Framework ### 编译原生组件----',
              JSON.stringify(t)
            ),
            (function(e) {
              const { type: t } = e,
                n = df.quickapp.runtime.helper.getComponentDefaultOptions(t);
              if ('object' == typeof n)
                for (const t in n)
                  if (null == e[t]) e[t] = n[t];
                  else if ('object' === w(e[t]) && 'object' === w(n[t]))
                    for (const i in n[t])
                      null == e[t][i] && (e[t][i] = n[t][i]);
            })(t),
            n === r.documentElement
              ? (global.Env &&
                  'trace' === global.Env.logLevel &&
                  console.trace(`### App Framework ### 编译Body组件 ${i}`),
                ((a = hf(e, i))._vm = e))
              : (global.Env &&
                  'trace' === global.Env.logLevel &&
                  console.trace(`### App Framework ### 编译原生组件 ${i}`),
                (a = hf(e, i)));
          if (((t.attr = t.attr || {}), !e._rootElement)) {
            e._rootElement = a;
            const t = s._shareDocStyle && n === r.documentElement;
            df.quickapp.runtime.helper.registerStyleObject(
              r,
              e._type,
              e._options.style,
              t,
              e._rootElement
            );
            const i = e._externalBinding || {},
              o = i.template,
              l = i.parent;
            if (o && o.events && l && a)
              for (const e in o.events) {
                const t = l[o.events[e]];
                t && ff(a, e, Ju(t, l), !1);
              }
          }
          Vf(t) && ((t.content = t.attr.value), (t.contentType = t.attr.type));
          Nf(e, a, t), t.attr && t.attr.append && (t.append = t.attr.append);
          const l = 'tree' === t.append;
          -1 === o.lastSignal ||
            l ||
            (global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace('### App Framework ### 编译单个节点----', a),
            (o.lastSignal = uf(n, a)));
          -1 !== o.lastSignal &&
            (Vf(t)
              ? (function(e, t, n) {
                  const i = Fo,
                    o = t.contentType,
                    r = pf(e, n);
                  let s;
                  s =
                    'function' == typeof t.content
                      ? qf(e, r, t.content, 'html', t => {
                          if (
                            (global.Env &&
                              'trace' === global.Env.logLevel &&
                              console.trace(
                                `### App Framework ### Html 节点 (${
                                  r.ref
                                })数据改变----`,
                                t
                              ),
                            Kf(r, !0),
                            t && 'html' !== o)
                          ) {
                            const n = i.compile(t, o);
                            Yf(e, n, r);
                          }
                        })
                      : t.content;
                  if (s && 'html' !== o) {
                    const t = i.compile(s, o);
                    Yf(e, t, r);
                  }
                })(e, t, a)
              : Zf(e, t, a));
          -1 !== o.lastSignal &&
            l &&
            (global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace('### App Framework ### 编译整个树----', a),
            (o.lastSignal = uf(n, a)));
        })(e, t, n, s);
  }
  function Wf(e, t) {
    return !t.hasOwnProperty('repeat') && e.repeat;
  }
  function Uf(e, t) {
    return !t.hasOwnProperty('shown') && e.shown;
  }
  function Vf(e) {
    return 'richtext' === e.type;
  }
  function Gf(e, t, n) {
    const i = t.repeat;
    let o = i.exp || i;
    'function' != typeof o &&
      (o = function() {
        return [];
      });
    const r = i.key || '$idx',
      s = i.value || '$item',
      a = t.attr && t.attr.tid,
      l = pf(e, n);
    (l.data = []),
      (l.vms = []),
      (function(e, t, n, i) {
        const o = n.vms,
          { getter: r, tid: s } = i,
          a = i.key,
          l = i.value;
        function c(e, i, r) {
          const s = {};
          (s[a] = i), (s[l] = e);
          const c = (function(e, t) {
            const n = Object.create(e);
            (n._data = t),
              (function(e) {
                e._watchers = [];
                let t = e._data;
                D(t) || (t = {});
                const n = Object.keys(t),
                  i = ['$idx', '$item', '$evt'];
                let o = n.length;
                for (; o--; ) {
                  const t = n[o];
                  i.indexOf(t) > -1 || !N(t)
                    ? Object.defineProperty(e, t, {
                        configurable: !0,
                        enumerable: !0,
                        get: function() {
                          return e._data[t];
                        },
                        set: function(n) {
                          e._data[t] = n;
                        }
                      })
                    : console.error(
                        `### App Framework ### 页面数据属性名 '${t}' 非法, 属性名不能以$或_开头`
                      );
                }
                Of.$ob(t, e);
              })(n),
              (n._realParent = e),
              e._static && (n._static = e._static);
            return n;
          })(r, s);
          o.push(c), Yf(c, t, n, { repeat: e });
        }
        const d = qf(e, n, r, 'for', t => {
          if (!n || !t) return;
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace('### App Framework ### For 节点被改变----', t);
          const i = n.layoutChildren.slice(),
            r = o.slice(),
            d = n.data.slice(),
            h = {},
            p = {};
          t.forEach((e, t) => {
            const n = '@' + (s ? e[s] : t);
            null != n && '@' !== n
              ? (h[n] || (h[n] = []),
                h[n].push(e),
                h[n].length > 1 &&
                  console.warn(
                    `### App Framework ### for 循环数据的tid 属性 '${n} 不唯一, 可能导致性能问题`
                  ))
              : console.error(
                  '### App Framework ### for 循环数据的tid 属性不存在或为空'
                );
          });
          const u = [];
          d.forEach((e, t) => {
            const n = '@' + (s ? e[s] : t),
              o = h[n];
            o && o.length > 0
              ? (p[n] || (p[n] = []),
                p[n].push({
                  item: e,
                  index: t,
                  key: n,
                  target: i[t],
                  vm: r[t]
                }),
                u.push(e))
              : Kf(i[t]);
          }),
            df.quickapp.runtime.helper.resetNodeChildren(n),
            (o.length = 0),
            (n.data = t.slice()),
            t.forEach((t, i) => {
              const r = '@' + (s ? t[s] : i),
                d = p[r];
              if ('object' == typeof d && d.length > 0) {
                const e = d.shift();
                e.item === u[0] ? u.shift() : u.$remove(e.item);
                const r = e.target;
                df.quickapp.runtime.helper.restoreNodeChildren(n, r),
                  o.push(e.vm),
                  (e.vm[l] = t),
                  (e.vm[a] = i);
              } else c(t, i, e);
            });
        });
        d && d.length > 0
          ? ((n.data = d.slice(0)),
            d.forEach((t, n) => {
              c(t, n, e);
            }))
          : (n.data = []);
      })(e, t, l, { getter: o, key: r, value: s, tid: a });
  }
  function Jf(e, t, n, i) {
    const o = { shown: !0 },
      r = pf(e, n);
    i.repeat && (o.repeat = i.repeat),
      (function(e, t, n, i) {
        const o = qf(e, n, t.shown, 'if', o => {
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Framework ### If 节点 (${n.ref})状态改变----`,
              o
            ),
            n &&
              !!n._display != !!o &&
              ((n._display = !!o), o ? Yf(e, t, n, i) : Kf(n, !0));
        });
        (n._display = !!o), o && Yf(e, t, n, i);
      })(e, t, r, o);
  }
  function Zf(e, t, n) {
    const i = e._page || {},
      o = t.children;
    if (o && o.length)
      for (let t = 0, r = o.length; t < r && -1 !== i.lastSignal; t++)
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace('### App Framework ### 编译孩子节点----', o[t].type),
          Yf(e, o[t], n);
  }
  function qf(e, t, n, i, o) {
    return Hf(
      e,
      n,
      n => {
        e.$valid
          ? !(function(e) {
              return df.quickapp.runtime.helper.isNodeInDocument(e);
            })(t)
            ? global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                `### App Framework ### 节点(${t.ref})已删除：${JSON.stringify(
                  t
                )}`
              )
            : o(n)
          : console.error('### App Framework ### 试图更新已销毁页面');
      },
      t
    ).value;
  }
  function Kf(e, t = !1) {
    e &&
      ((function e(t, n = !1) {
        const i = (t.childNodes || []).slice();
        for (let t = 0, n = i.length; t < n; t++) e(i[t], !1);
        n ||
          ((function(e) {
            if (e._bindWatcherList) {
              const t = e._bindWatcherList;
              for (let e = 0, n = t.length; e < n; e++) t[e].close();
              delete e._bindWatcherList;
            }
          })(t),
          t._vm && (xf(t._vm), delete t._vm));
      })(e, t),
      (function(e, t = !1) {
        const n = e.parentNode;
        if (n)
          if (t) {
            const t = (e.childNodes || []).slice();
            for (let n = 0, i = t.length; n < i; n++) e.removeChild(t[n]);
          } else n.removeChild(e);
      })(e, t));
  }
  class Qf {
    constructor(e, t) {
      if (t instanceof Qf) return t;
      (this.timestamp = Date.now()), (this.detail = t), (this.type = e);
      let n = !1;
      (this.stop = function() {
        n = !0;
      }),
        (this.hasStopped = function() {
          return n;
        });
    }
  }
  const Xf = [
    'onCreate',
    'onInit',
    'onReady',
    'onShow',
    'onHide',
    'onDestroy',
    'onBackPress',
    'onMenuPress',
    'onUpdateData',
    'onOrientationChange'
  ];
  (Qf.reserveEvents = Xf),
    (Qf.isReservedEvent = function(e) {
      return Xf.indexOf(e) >= 0;
    });
  const em = ['public', 'protected', 'private'];
  let tm = null;
  let nm = 1;
  class im {
    constructor(e, t, n, i, o, r, s) {
      const a = (n = n || {}) instanceof im ? n : void 0,
        l = n._page;
      (this.__id__ = nm++),
        (this._type = e),
        (this._page = l || {}),
        (this._parent = n._realParent ? n._realParent : a),
        (this._root = this._parent ? this._parent._root : this),
        (this._parentContext = a),
        (this._attrs = {}),
        (this._destroyed = !1),
        Object.defineProperties(this, {
          $valid: { get: () => !!l && l._valid, configurable: !1 },
          $visible: {
            get: () => !!l && l._valid && l._visible,
            configurable: !1
          },
          $destroyed: { get: () => this._destroyed, configurable: !1 }
        }),
        s &&
          ((this._slotTemplate = Object.create(null)),
          (this._slotTemplate.content = s)),
        n && n._childrenVms && n._childrenVms.push(this),
        (this._parentElement = i || this._page.doc.documentElement),
        !t &&
          this._page.app &&
          this._page.app.customComponentMap &&
          (t = vf(this._page.app, this._page, e));
      const c = (t = t || {}).data || {};
      var d;
      ((this._options = t),
      (this._methods = {}),
      Object.keys(t).forEach(e => {
        if (
          (function(e) {
            return tf.indexOf(e) >= 0;
          })(e) ||
          Qf.isReservedEvent(e)
        )
          return;
        const n = t[e];
        'function' == typeof n && (this._methods[e] = n);
      }),
      (this._ids = {}),
      (this._vmEvents = {}),
      (this._childrenVms = []),
      (this._props = {}),
      (this._parentWatchers = []),
      (function(e, t) {
        const n = e._options || {},
          i = n.events || {};
        for (const t in i) e.$on(t, i[t]);
        for (const n in t) e.$on(n, t[n]);
        Qf.reserveEvents.forEach(t => {
          e.$on(`xlc:${t}`, n[t]);
        });
      })(this, r),
      global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(`### App Framework ### 组件Vm(${this._type})初始化完成`),
      this.$emit('xlc:onCreate'),
      (this._created = !0),
      'function' == typeof c
        ? (this._data = c.call(this) || {})
        : ((this._data = {}), S(this._data, c)),
      this._page && this._page.app && S(this._data, this._page.app.$data),
      (function(e, t) {
        if (e._parent) return;
        if (!t) return;
        if (!e._options._descriptor) return void S(e._data, t);
        let n = e._page.intent && e._page.intent.fromExternal;
        (e._page.intent && void 0 !== e._page.intent.fromExternal) || (n = !0),
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Framework ### 页面VM中声明的权限定义：${JSON.stringify(
                e._options._descriptor
              )}`
            ),
          e._options.props &&
            !(function(e) {
              for (const t in e) return !1;
              return !0;
            })(t) &&
            console.warn(
              '### App Framework ### 页面VM中不支持props，推荐在public或protected中声明参数'
            );
        for (const i in t) {
          const o = e._options._descriptor[i];
          if (!o) {
            global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                `### App Framework ### 传递外部数据${i}在VM中未声明，放弃更新`
              );
            continue;
          }
          const r = n && em.indexOf(o.access) > 0,
            s = !n && em.indexOf(o.access) > 1;
          r || s
            ? console.warn(
                `### App Framework ### 传递外部数据${i}在VM中声明为${
                  o.access
                }，放弃更新`
              )
            : (global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  `### App Framework ### 传递外部数据${i}，原值为:${JSON.stringify(
                    e._data[i]
                  )}`
                ),
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  `### App Framework ### 传递外部数据${i}，新值为:${JSON.stringify(
                    t[i]
                  )}`
                ),
              (e._data[i] = t[i]));
        }
      })(this, o),
      (function(e) {
        e._watchers = [];
        let t = e._data;
        D(t) || (t = {});
        const n = Object.keys(t);
        let i = n.length;
        for (; i--; ) {
          const t = n[i];
          of(t) &&
            console.warn(
              `### App Framework ### data 属性 '${t}' 是保留字, 可能会导致应用运行异常`
            ),
            (Gu(e._props, t) &&
              (console.warn(
                `### App Framework ### data 请在data中使用另一个名称声明：${t}，不要与props重复`
              ),
              e._attrs.hasOwnProperty(t))) ||
              qu(e, '_data', n[i]);
        }
        Of.$ob(t, e);
        const o = e._methods;
        if (o)
          for (const n in o)
            t.hasOwnProperty(n) &&
              console.warn(
                `### App Framework ### 检测到同名数据属性和方法：${n}，可能导致异常`
              ),
              (e[n] = o[n]);
      })(this),
      global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(`### App Framework ### 组件Vm(${this._type})创建成功`),
      this.$emit('xlc:onInit'),
      (this._inited = !0),
      this._page.doc) &&
        (Yf((d = this), (d._options || {}).template || {}, d._parentElement),
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(`### App Framework ### 组件Vm (${d._type}) UI准备就绪`),
        d.$emit('xlc:onReady'),
        (d._ready = !0));
    }
    _isVmDestroyed() {
      return (
        this._destroyed &&
          console.warn(
            `### App Framework ### 组件Vm(${
              this._type
            })已销毁，中断Vm方法的调用`
          ),
        this._destroyed
      );
    }
    get $app() {
      return global.Env.engine === global.ENGINE_TYPE.CARD
        ? null
        : this._isVmDestroyed()
        ? void 0
        : this._page.app;
    }
    get $page() {
      if (global.Env.engine === global.ENGINE_TYPE.CARD) return null;
      if (this._isVmDestroyed()) return;
      const e = this._page,
        t = e.app;
      return Object.assign(
        {
          setTitleBar: function(t) {
            e &&
              e.doc &&
              (console.log(
                `### App Framework ### 页面 ${e.id} 调用 setTitleBar ----`
              ),
              df.quickapp.runtime.helper.updatePageTitleBar(e.doc, t));
          },
          finish: function() {
            e &&
              e.doc &&
              (null === tm &&
                (tm = df.quickapp.platform.requireModule(t, 'system.page')),
              tm.finishPage(e.id));
          }
        },
        e && e._meta
      );
    }
    $parent() {
      return this._parent;
    }
    $root() {
      return this._root;
    }
    $emit(e, t) {
      if (this._isVmDestroyed()) return;
      const n = this._vmEvents[e];
      if (n) {
        const i = new Qf(e, t),
          o = [];
        return (
          n.forEach(e => {
            o.push(e.call(this, i));
          }),
          o.length > 0 && o[0]
        );
      }
      return !1;
    }
    $emitElement(e, t, n = -1) {
      if (this._isVmDestroyed()) return;
      if (-1 === n || void 0 === n) n = void 0;
      else if ('string' != typeof n)
        return void console.error(
          '### App Framework ### emitElement的参数id不合法'
        );
      const i = this.$element(n);
      if (i) return mf(i, e, { detail: t });
      console.error(
        `### App Framework ### emitElement执行失败: 找不到id为 '${n}' 的组件`
      );
    }
    $dispatch(e, t) {
      if (this._isVmDestroyed()) return;
      const n = new Qf(e, t);
      this.$emit(e, n),
        !n.hasStopped() &&
          this._parent &&
          this._parent.$dispatch &&
          this._parent.$dispatch(e, n);
    }
    $broadcast(e, t) {
      if (this._isVmDestroyed()) return;
      const n = new Qf(e, t);
      this.$emit(e, n),
        !n.hasStopped() &&
          this._childrenVms &&
          this._childrenVms.forEach(t => {
            t.$broadcast(e, n);
          });
    }
    $on(e, t) {
      if (this._isVmDestroyed()) return;
      if (!e || 'function' != typeof t) return;
      const n = this._vmEvents,
        i = n[e] || [];
      i.push(t), (n[e] = i);
    }
    $off(e, t) {
      if (this._isVmDestroyed()) return;
      if (!e) return;
      const n = this._vmEvents;
      if (!t) return void delete n[e];
      const i = n[e];
      i && i.$remove(t);
    }
    $forceUpdate() {
      if (this._isVmDestroyed()) return;
      const e = this._page;
      e &&
        e.doc &&
        (console.log(`### App Framework ### 强制更新页面 ---- ${e.id}`), wf(e));
    }
    $set(e, t) {
      if (this._isVmDestroyed()) return;
      im.parseExpression(e).set.call(this, this, t);
    }
    $delete(e) {
      if (this._isVmDestroyed()) return;
      const t = this._data;
      im.delete(t, e);
    }
    $watch(e, t) {
      if (this._isVmDestroyed()) return;
      const n = this;
      if ('string' != typeof e || 'string' != typeof t)
        return void console.error(
          '### App Framework ### $watch调用异常: 参数的数据类型非法, 必须是字符串'
        );
      if (!this._methods[t])
        return void console.warn(
          `### App Framework ### $watch调用异常:  句柄函数名 '${t}' 没有定义`
        );
      return new Df(
        n,
        function() {
          return im.getPath(n, e);
        },
        function(e, i) {
          ('object' != typeof e && e === i) || n[t](e, i);
        }
      ).value;
    }
    _digest() {
      const e = this._watchers.length;
      for (let t = 0; t < e; t++) this._watchers[t].update(!0);
    }
  }
  (im.parseExpression = function(e) {
    return {
      exp: e,
      get: function(t) {
        return im.getPath(t, e);
      },
      set: function(t, n) {
        im.setPath(t, e, n);
      }
    };
  }),
    (im.getPath = function(e, t) {
      if (/[^\w.$]/.test(t))
        return void console.warn(
          `### App Framework ### getPath调用:  观察对象 '${t}' 不合法`
        );
      const n = t.split('.'),
        i = n.pop(),
        o = n.length;
      for (let i = 0; i < o; i++) {
        const o = n[i];
        if (N(o))
          return void console.warn(
            `### App Framework ### getPath调用: 属性名 '${o}' 不能以 $ 或 _ 开头`
          );
        if (!e[o])
          return void console.warn(
            `### App Framework ### getPath调用: 属性名 '${o}' 在 '${t}' 中值为：${
              e[o]
            }`
          );
        e = e[o];
      }
      return e[i];
    }),
    (im.setPath = function(e, t, n) {
      if (/[^\w.$]/.test(t))
        return void console.warn(
          `### App Framework ### setPath调用:  观察对象 '${t}' 不合法`
        );
      const i = t.split('.'),
        o = i.pop(),
        r = i.length;
      for (let n = 0; n < r; n++) {
        const o = i[n];
        if (N(o))
          return void console.warn(
            `### App Framework ### setPath调用: 属性名 '${o}' 不能以 $ 或 _ 开头`
          );
        if (!e[o])
          return void console.warn(
            `### App Framework ### setPath调用: 属性名 '${o}' 在 '${t}' 中值为：${
              e[o]
            }`
          );
        e = e[o];
      }
      im.set(e, o, n);
    }),
    (im.set = function(e, t, n) {
      if (null == e) return;
      if (e instanceof im) return void im.set(e._data, t, n);
      if (Array.isArray(e)) return e.splice(t, 1, n);
      if (Gu(e, t)) return void (e[t] = n);
      const i = e.__ob__;
      if (i) {
        if ((i.convert(t, n), i.dep.notify(), i.vms)) {
          let e = i.vms.length;
          for (; e--; ) {
            const n = i.vms[e];
            qu(n, '_data', t), n._digest();
          }
        }
        return n;
      }
      e[t] = n;
    }),
    (im.delete = function(e, t) {
      if (null == e) return;
      if (!Gu(e, t)) return;
      delete e[t];
      const n = e.__ob__;
      if (n && (n.dep.notify(), n.vms)) {
        let e = n.vms.length;
        for (; e--; ) {
          const i = n.vms[e];
          Ku(i, t), i._digest();
        }
      }
    }),
    (im.initVmMethods = function(e) {
      const t = im.prototype;
      for (const n in e) t.hasOwnProperty(n) || (t[n] = e[n]);
    }),
    (im.registerMethods = function(e) {
      'string' == typeof e && (e = JSON.parse(e)),
        'object' == typeof e && im.initVmMethods(e);
    });
  const om = function(e, t, n) {
      let i;
      if ((console.log(`### App Framework ### 启动App---- ${t}`), !B(t)))
        return new Error(`bootstrap: 错误App名: ${t}`);
      (i = $(t)),
        (n = D(n) ? n : {}),
        (e.name = i),
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            `### App Framework ### 调用App(${i})生命周期---- onCreate`
          ),
        e.$emit('applc:onCreate');
    },
    rm = function(e, t, ...n) {
      let i, o;
      if (
        (global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(`### App Framework ### 定义App---- ${t}`),
        'function' == typeof (o = n.length > 1 ? n[1] : n[0]) &&
          ((i = o), (o = null)),
        !B(t))
      )
        return new Error(`define: 无效应用名 ${t}`);
      if (i) {
        const t = { exports: {} };
        i(t => df.quickapp.platform.requireModule(e, $(t)), t.exports, t),
          (o = t.exports);
      }
      e.$def = o;
    };
  let sm = 1;
  class am {
    constructor(e, t) {
      (this.id = e),
        (this.inst = t),
        (this.taskList = []),
        (this.taskHash = new Set()),
        (this.needSort = !1),
        (this.nextTick = 0),
        (this.warnSize = 1e4),
        (this.execMode = am.MODE.SYNC);
    }
    join(e) {
      Array.isArray(e) || (e = [e]);
      for (let t = 0, n = e.length; t < n; t++) {
        const n = e[t];
        this.taskHash.has(n)
          ? global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              `### App Framework ### XExecutor.join() 过滤重复task：${n.getter ||
                n}`
            )
          : (this.taskList.push(n),
            this.taskHash.add(n),
            !this.needSort && (this.needSort = !0),
            global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                `### App Framework ### XExecutor.join() 添加单个task：${n.getter ||
                  n}`
              ));
      }
      this._defineNextTick();
    }
    exec() {
      let e;
      switch (this.execMode) {
        case am.MODE.SYNC:
          (e = this._execSync()),
            global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(
                `### App Framework ### XExecutor.exec() 执行：${this.id}:${sm}`
              ),
            sm++;
      }
      if (this.taskList.length > 0 || this.taskHash.size > 0)
        throw new Error(
          '### App Framework ### XExecutor.exec() 异常:存在未执行的任务'
        );
      return e;
    }
    reset() {
      (this.taskList.length = 0),
        this.taskHash.clear(),
        this.needSort && (this.needSort = !1);
    }
    _execSync() {
      global.Env &&
        'trace' === global.Env.logLevel &&
        console.trace(
          `### App Framework ### XExecutor._execSync() 开始：${
            this.taskList.length
          }`
        );
      let e = 0;
      for (; this._hasTask(); ) {
        this.needSort && this._sort();
        const t = this.taskList.shift();
        this.taskHash.delete(t);
        try {
          t.id ? t.run() : t();
        } catch (e) {
          throw (this.reset(), e);
        }
        ++e > this.warnSize &&
          console.warn(
            `### App Framework ### XExecutor._execSync() 循环次数已达：${e}`
          );
      }
      return (
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(
            `### App Framework ### XExecutor._execSync() 结束：${
              this.taskList.length
            }`
          ),
        this.inst.doc.listener.hasActions()
      );
    }
    _sort() {
      const e = [],
        t = this.taskList.length;
      for (let n = 0; n <= t; n++) {
        const t = this.taskList[n];
        t && t.id
          ? e.push(t)
          : e.length > 0 &&
            (e.sort((e, t) => e.id - t.id),
            this.taskList.splice.apply(
              this.taskList,
              [n - e.length, e.length].concat(e)
            ),
            e.splice(0));
      }
      this.needSort = !1;
    }
    _hasTask() {
      return this.taskList.length > 0;
    }
    _defineNextTick() {
      this.nextTick ||
        (this.nextTick = Promise.resolve().then(() => {
          (this.nextTick = null),
            this.inst &&
              this.inst.$valid &&
              (global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace(
                  '### App Framework ### XExecutor._defineNextTick() Actions尝试轮询'
                ),
              wf(this.inst));
        }));
    }
  }
  am.MODE = { SYNC: 1 };
  const lm = function(e, t, n, i) {
      let o;
      if ((console.log(`### App Framework ### 启动页面---- ${t}`), !j(t)))
        return new Error(`bootstrap: 错误页面名: ${t}`);
      (o = $(t)),
        (n = D(n) ? n : {}),
        (e.name = o),
        global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(`### App Framework ### 创建页面VM---- ${o}`),
        (e.vm = new im(o, null, { _page: e }, null, i, {}));
    },
    cm = function(e, t, ...n) {
      let i, o;
      if (
        (global.Env &&
          'trace' === global.Env.logLevel &&
          console.trace(`### App Framework ### 定义组件---- ${t}`),
        'function' == typeof (o = n.length > 1 ? n[1] : n[0]) &&
          ((i = o), (o = null)),
        !j(t))
      )
        return new Error(
          `define: 非法组件名 ${t}, 必须是"@app-component/XXXX"格式`
        );
      if (i) {
        const t = { exports: {} };
        i(
          t => df.quickapp.platform.requireModule(e, $(t)),
          t.exports,
          t,
          t.exports
        ),
          (o = t.exports),
          global.Env &&
            'trace' === global.Env.logLevel &&
            console.trace(
              '### App Framework ### 初始化组件配置----',
              JSON.stringify(o)
            );
      }
      const r = $(t);
        console.trace(`### App Framework ### 注册自定义组件---- ${r}`),
        bf(e.app, e, r, o);
    },
    dm = function(e, t, n) {
      const i = $(t);
        console.trace(
          `### App Framework ### 注册自定义组件的包装函数---- ${i}`
        ),
        bf(e.app, e, i, n);
    },
    hm = ['onShow', 'onHide'];
  function pm(e, t, n) {
		console.log("TCL: pm -> t", t)
    let i = !1;
    return (
      hm.indexOf(e) > -1 && (t._visible = n),
      t.vm && t.vm._ready
        ? ((i = t.vm.$emit(`xlc:${e}`, n)),
          wf(t),
            console.log(
              `### App Framework ### 页面(${t.id})触发事件(${e})完毕`
            ))
        :
          console.log(
            `### App Framework ### 页面(${t.id})触发事件(${e})失败`
          ),
      !!i
    );
  }
  const um = {
    onShow: 'onShow',
    onHide: 'onHide',
    onBackPress: 'onBackPress',
    onMenuPress: 'onMenuPress',
    onOrientationChange: 'onOrientationChange'
  };
  var fm = {
    init: function(e) {
      (df.quickapp = e),
        e.subscribe(Ro.initApp, e =>
          (function(e, t) {
            let n;
            global.Env &&
              'trace' === global.Env.logLevel &&
              console.trace(`### App Framework ### 开始初始化App(${e.id})`);
            const i = (...t) => rm(e, ...t),
              o = (t, i) => {
                (n = om(e, t, i)),
                  console.log(
                    `### App Framework ### 完成App初始化(${e.id})----`
                  );
              },
              r = t => df.quickapp.platform.requireModule(e, $(t));
            let s;
            return (
              'function' == typeof t
                ? (s = t)
                : t &&
                  (s = `(function(global){"use strict"; ${(s = t.toString())} \n })(Object.create(this))`),
              global.Env &&
                'trace' === global.Env.logLevel &&
                console.trace('### App Framework ### 开始编译代码----'),
              (global.$app_define$ = i),
              (global.$app_bootstrap$ = o),
              (global.$app_require$ = r),
              s(),
              n
            );
          })(...e)
        ),
        e.subscribe(
          Ro.initPage,
          e => (
            Cf.resetTarget(),
            (function(e, t, n, i) {
							console.log("TCL: e", e)
							console.log("TCL: n", n)
							console.log("TCL: Ro.initPage subscriber")
              let o;
                console.log(
                  `### App Framework ### 开始初始化页面(${e.id})---- `
                );
                (e.executor = new am(e.id, e));
              const r = (...t) => cm(e, ...t),
                s = (t, i) => {
                  (o = lm(e, t, i, n)),
                    e.doc.listener.createFinish(),
                      console.log(
                        `### App Framework ### 完成实例初始化(${e.id})----`
                      );
                },
                a = (t, n) => dm(e, t, n);
              let l;
              return (
                e.doc,
                'function' == typeof t
                  ? (l = t)
                  : t &&
                    (l = `(function(global){"use strict"; ${(l = t.toString())}  \n })(Object.create(this))`),
                  console.log('### App Framework ### 开始编译代码----'),
                (global.$app_define$ = r),
                (global.$app_bootstrap$ = s),
                (global.$app_require$ = (e.doc,
                t => df.quickapp.platform.requireModule(e, $(t)))),
                (global.$app_define_wrap$ = a),
                (global.setTimeout = i.setTimeout),
                (global.setInterval = i.setInterval),
                (global.clearTimeout = i.clearTimeout),
                (global.clearInterval = i.clearInterval),
                (global.requestAnimationFrame = i.requestAnimationFrame),
                (global.cancelAnimationFrame = i.cancelAnimationFrame),
                console.log("TCL: l", l),
                l(),
                o
              );
            })(...e)
          )
        ),
        e.subscribe(Ro.destroyPage, e => {
          Cf.resetTarget(), kf(...e);
        }),
        e.subscribe(Ro.fireEvent, e => {
          const t = Ef(...e);
          return wf(e[0]), t;
        }),
        e.subscribe(Ro.callbackDone, e => {
          wf(e[0]);
        }),
        e.subscribe(Ro.onShow, e => pm(um.onShow, ...e)),
        e.subscribe(Ro.onHide, e => pm(um.onHide, ...e)),
        e.subscribe(Ro.onBackPress, e => pm(um.onBackPress, ...e)),
        e.subscribe(Ro.onMenuPress, e => {
          const t = (function(e) {
            let t = !1;
            if (e.vm && e.vm._ready) {
              const n = e.vm._vmEvents,
                i = n && n['xlc:onMenuPress'];
              i && i.length && (t = !0);
            }
            return t;
          })(...e);
          return pm(um.onMenuPress, ...e), t;
        }),
        e.subscribe(Ro.onOrientationChange, e =>
          pm(um.onOrientationChange, ...e)
        );
    }
  };
  function mm(e) {
    switch (w(e)) {
      case 'undefined':
      case 'null':
        return '';
      case 'number':
      case 'boolean':
      case 'function':
      case 'regexp':
        return e.toString();
      case 'date':
        return e.toISOString();
      case 'string':
        return e;
      default:
        return JSON.stringify(e);
    }
  }
  const gm = {
    $child: function(e) {
      const t = this._ids[e];
      if (t)
        return (
          t.vm._destroyed &&
            console.warn(`### App Framework ### 组件Vm(${t.vm._type})已销毁`),
          t.vm
        );
    },
    $vm: function(e) {
      const t = this._ids[e];
      if (t) return t.vm;
    },
    $element: function(e) {
      if (void 0 === e)
        return 'function' == typeof this.$rootElement && this.$rootElement();
      const t = this._ids[e];
      return t
        ? (df.quickapp.dock.bindComponentMethods(t.vm._page || {}, t.element),
          t.element)
        : void 0;
    },
    $rootElement: function() {
      if (this._rootElement)
        return (
          df.quickapp.dock.bindComponentMethods(
            this._page || {},
            this._rootElement
          ),
          this._rootElement
        );
    },
    $config: function() {
      if (
        (this._destroyed &&
          console.error(`### App Framework ### 组件Vm(${this._type})已销毁`),
        this._page && this._page.app && this._page.app.options)
      )
        return this._page.app.options;
      console.error('### App Framework ### 获取配置失败！');
    },
    $createElement: function(e, t, n) {
      const i = Fo,
        o = {
          __jsx__: !0,
          type: e,
          attr: {},
          events: {},
          style: {},
          classList: [],
          children: []
        };
      function r(e, t) {
        return { type: 'text' === e ? 'span' : 'text', attr: { value: mm(t) } };
      }
      function s(e) {
        return 'object' === w(e) && e.__jsx__;
      }
      return (
        t &&
          Object.keys(t).forEach(e => {
            const n = t[e];
            if ('style' === e)
              n.split(';').forEach(function(e) {
                let t,
                  n,
                  r = e.trim().split(':');
                r.length > 2 &&
                  ((r[1] = r.slice(1).join(':')), (r = r.slice(0, 2))),
                  2 === r.length &&
                    ((t = r[0].trim()),
                    (n = i.validateStyle(t, r[1].trim())).value &&
                      n.value.forEach(e => {
                        o.style[e.n] = e.v;
                      }),
                    n.log && console.error('### App Parser ###', n.log));
              });
            else if ('class' === e) o.classList = n.split(/\s+/);
            else if ('id' === e) o.id = n;
            else if (e.match(/^(on|@)/)) {
              const t = e.replace(/^(on|@)/, '');
              t && (o.events[t] = n);
            } else o.attr[e] = n;
          }),
        n &&
          n.length &&
          n.forEach(t => {
            Array.isArray(t)
              ? (function t(n, i) {
                  n.forEach(n => {
                    Array.isArray(n)
                      ? t(n, i)
                      : 'span' === e || 'a' === e
                      ? (i.attr.value = n)
                      : i.children.push(s(n) ? n : r(e, n));
                  });
                })(t, o)
              : null != t &&
                ('span' === e || 'a' === e
                  ? (o.attr.value = mm(t))
                  : o.children.push(s(t) ? t : r(e, t)));
          }),
        o
      );
    },
    $extend:
      Object.assign ||
      function(e) {
        for (let t = 1; t < arguments.length; t++) {
          const n = arguments[t];
          for (const t in n)
            Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
        }
        return e;
      },
    $stringify: mm
  };
  im.registerMethods(gm), Object.freeze(im), global.registerDsl(fm);
});
//# sourceMappingURL=web.js.map
