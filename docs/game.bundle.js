!(function (t) {
  var e = {};
  function n(r) {
    if (e[r]) return e[r].exports;
    var i = (e[r] = { i: r, l: !1, exports: {} });
    return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = t),
    (n.c = e),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 });
    }),
    (n.t = function (t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t;
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var i in t)
          n.d(
            r,
            i,
            function (e) {
              return t[e];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, 'a', e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = '/'),
    n((n.s = 20));
})([
  function (t, e) {
    t.exports = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    };
  },
  function (t, e) {
    function n(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        (r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r);
      }
    }
    t.exports = function (t, e, r) {
      return e && n(t.prototype, e), r && n(t, r), t;
    };
  },
  function (t, e) {
    function n(e) {
      return (
        (t.exports = n = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            }),
        n(e)
      );
    }
    t.exports = n;
  },
  function (t, e, n) {
    var r = n(17);
    t.exports = function (t, e) {
      if ('function' != typeof e && null !== e)
        throw new TypeError(
          'Super expression must either be null or a function'
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: { value: t, writable: !0, configurable: !0 }
      })),
        e && r(t, e);
    };
  },
  function (t, e, n) {
    var r = n(8),
      i = n(18);
    t.exports = function (t, e) {
      return !e || ('object' !== r(e) && 'function' != typeof e) ? i(t) : e;
    };
  },
  function (t, e, n) {
    var r = n(12),
      i = n(13),
      o = n(14),
      a = n(16);
    t.exports = function (t, e) {
      return r(t) || i(t, e) || o(t, e) || a();
    };
  },
  function (t, e) {
    t.exports = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (t[e] = n),
        t
      );
    };
  },
  function (t, e, n) {
    var r = n(19);
    t.exports = function (t, e) {
      if (null == t) return {};
      var n,
        i,
        o = r(t, e);
      if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(t);
        for (i = 0; i < a.length; i++)
          (n = a[i]),
            e.indexOf(n) >= 0 ||
              (Object.prototype.propertyIsEnumerable.call(t, n) &&
                (o[n] = t[n]));
      }
      return o;
    };
  },
  function (t, e) {
    function n(e) {
      return (
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
          ? (t.exports = n = function (t) {
              return typeof t;
            })
          : (t.exports = n = function (t) {
              return t &&
                'function' == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? 'symbol'
                : typeof t;
            }),
        n(e)
      );
    }
    t.exports = n;
  },
  function (t, e) {},
  function (t, e) {},
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = {};
    n.r(r),
      n.d(r, 'BODY_TYPE', function () {
        return l;
      }),
      n.d(r, 'GRADIENT_TYPES', function () {
        return f;
      }),
      n.d(r, 'SHAPE_STYLES', function () {
        return h;
      }),
      n.d(r, 'SHAPES', function () {
        return y;
      }),
      n.d(r, 'GAME_STATES', function () {
        return d;
      }),
      n.d(r, 'KEY_CODES', function () {
        return v;
      }),
      n.d(r, 'RESOURCE_TYPE', function () {
        return p;
      }),
      n.d(r, 'ENTITY_NODE_TYPES', function () {
        return g;
      }),
      n.d(r, 'TRANSFORM_ORIGIN', function () {
        return m;
      });
    var i = n(6),
      o = n.n(i),
      a = n(0),
      u = n.n(a),
      s = n(1),
      c = n.n(s),
      l = { STATIC: 0, KINEMATIC: 1, DYNAMIC: 2 },
      f = { LINEAR: 0, RADIAL: 1 },
      h = { NONE: 0, NORMAL: 1, GRADIENT: 2, PATTERN: 3 },
      y = {
        TRIANGLE: 0,
        RECTANGLE: 1,
        PENTAGON: 2,
        HEXAGON: 3,
        ARC: 4,
        POLYGON: 5
      },
      d = { HOME: 0, PLAY: 1, PAUSE: 2, END: 3 },
      v = {
        ESC: 'escape',
        SPACE: ' ',
        LEFT: 'arrowleft',
        RIGHT: 'arrowright',
        ENTER: 'enter',
        M: 'm'
      },
      p = { IMAGE: 1, AUDIO: 2 },
      g = {
        WORLD: 0,
        LIGHT: 1,
        BODY: 2,
        PHYSICS_BODY: 3,
        FLUID_BODY: 4,
        TRANSFORM: 5
      },
      m = {
        CENTER: 0,
        LEFT_TOP: 1,
        RIGHT_TOP: 2,
        RIGHT_BOTTOM: 3,
        LEFT_BOTTOM: 4
      },
      b = n(8),
      w = n.n(b),
      x = (function () {
        function t() {
          u()(this, t), (this.resources = new Map());
        }
        return (
          c()(t, [
            {
              key: 'loadResources',
              value: function () {
                for (
                  var t = this,
                    e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    r = function (r) {
                      var i = e[r],
                        o = i.type,
                        a = void 0 === o ? p.IMAGE : o,
                        u = i.key,
                        s = void 0 === u ? Date.now() : u,
                        c = i.src;
                      if (!a)
                        return (
                          console.warn('Resource TYPE is required'),
                          { v: void 0 }
                        );
                      if (!c)
                        return (
                          console.warn('Resource SRC is required'),
                          { v: void 0 }
                        );
                      if (a === p.AUDIO) {
                        var l = new Audio(c);
                        l.addEventListener('canplaythrough', function () {
                          t.assets[s] || (t.resources.set(s, l), n && n(s, l));
                        });
                      } else if (a === p.IMAGE) {
                        var f = new Image();
                        (f.src = c),
                          (f.onload = function () {
                            t.resources.set(s, f), n && n(s, f);
                          });
                      }
                    },
                    i = 0;
                  i < e.length;
                  i++
                ) {
                  var o = r(i);
                  if ('object' === w()(o)) return o.v;
                }
              }
            },
            {
              key: 'hasResource',
              value: function (t) {
                return this.resources.has(t);
              }
            },
            {
              key: 'removeResources',
              value: function (t) {
                for (var e = 0; e < t.length; e++) {
                  var n = t[e];
                  this.resources.delete(n);
                }
              }
            },
            {
              key: 'removeAll',
              value: function () {
                this.resources.clear();
              }
            },
            {
              key: 'get',
              value: function (t) {
                return this.resources.get(t);
              }
            }
          ]),
          t
        );
      })(),
      k = n(5),
      O = n.n(k),
      T = n(3),
      R = n.n(T),
      S = n(4),
      A = n.n(S),
      P = n(2),
      E = n.n(P),
      M = function (t) {
        return ~~(0.5 + t);
      },
      I = function (t, e) {
        return e ^ ((t ^ e) & -(t < e));
      },
      D = function (t, e) {
        return t ^ ((t ^ e) & -(t < e));
      },
      j = function (t) {
        return !(null == t || isNaN(t));
      },
      C = function () {
        return (
          String.fromCharCode(Math.floor(26 * Math.random()) + 97) +
          Math.random().toString(16).slice(2) +
          Date.now().toString(16).slice(4)
        );
      };
    n(9);
    var B = (function () {
        function t(e, n) {
          u()(this, t), (this.x = e || 0), (this.y = n || 0);
        }
        return (
          c()(
            t,
            [
              {
                key: 'add',
                value: function (t) {
                  return (this.x += t), (this.y += t), this;
                }
              },
              {
                key: 'sub',
                value: function (t) {
                  return (this.x -= t), (this.y -= t), this;
                }
              },
              {
                key: 'mul',
                value: function (t) {
                  return (this.x *= t), (this.y *= t), this;
                }
              },
              {
                key: 'div',
                value: function (t) {
                  return (this.x /= t), (this.y /= t), this;
                }
              },
              {
                key: 'mag',
                value: function () {
                  return Math.sqrt(this.x * this.x + this.y * this.y);
                }
              },
              {
                key: 'magSq',
                value: function () {
                  return this.x * this.x + this.y * this.y;
                }
              },
              {
                key: 'normalise',
                value: function () {
                  var t = this.mag();
                  return this.div(t);
                }
              },
              {
                key: 'setMag',
                value: function (t) {
                  var e = this.mag();
                  return this.div(e).mul(t);
                }
              },
              {
                key: 'limitMag',
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : { min: null, max: null },
                    e = this.mag();
                  ((j(t.max) && e > t.max) || (j(t.min) && e < t.min)) &&
                    this.normalise().mul(t);
                }
              },
              {
                key: 'rotate',
                value: function (t) {
                  var e = this.x,
                    n = this.y;
                  return (
                    (this.x = Math.cos(t) * e - Math.sin(t) * n),
                    (this.y = Math.sin(t) * e + Math.cos(t) * n),
                    this
                  );
                }
              },
              {
                key: 'setAngle',
                value: function (t) {
                  var e = this.mag();
                  (this.x = Math.cos(t) * e), (this.y = Math.sin(t) * e);
                }
              },
              {
                key: 'getAngle',
                value: function () {
                  return Math.atan2(this.y, this.x);
                }
              },
              {
                key: 'rev',
                value: function () {
                  return (this.x *= -1), (this.y *= -1), this;
                }
              },
              {
                key: 'revX',
                value: function () {
                  return (this.x *= -1), this;
                }
              },
              {
                key: 'revY',
                value: function () {
                  return (this.y *= -1), this;
                }
              },
              {
                key: 'clone',
                value: function () {
                  return new t(this.x, this.y);
                }
              },
              {
                key: 'toString',
                value: function () {
                  return 'Vector2D('.concat(this.x, ', ').concat(this.y, ')');
                }
              },
              {
                key: 'toArray',
                value: function () {
                  return [this.x, this.y];
                }
              }
            ],
            [
              {
                key: 'add',
                value: function (e, n) {
                  return new t(e.x + n.x, e.y + n.y);
                }
              },
              {
                key: 'sub',
                value: function (e, n) {
                  return new t(e.x - n.x, e.y - n.y);
                }
              },
              {
                key: 'mul',
                value: function (e, n) {
                  return new t(e.x * n.x, e.y * n.y);
                }
              },
              {
                key: 'div',
                value: function (e, n) {
                  return new t(e.x / n.x, e.y / n.y);
                }
              },
              {
                key: 'dotProduct',
                value: function (t, e) {
                  return t.x * e.x + t.y * e.y;
                }
              },
              {
                key: 'crossProduct',
                value: function (t, e) {
                  return t.x * e.y - t.y * e.x;
                }
              },
              {
                key: 'project',
                value: function (e, n) {
                  var r = t.dotProduct(e, n) / e.magSq();
                  return new t(e.x * r, e.y * r);
                }
              },
              {
                key: 'dist',
                value: function (t, e) {
                  var n = t.x - e.x,
                    r = t.y - e.y;
                  return Math.sqrt(n * n + r * r);
                }
              },
              {
                key: 'distSq',
                value: function (t, e) {
                  var n = t.x - e.x,
                    r = t.y - e.y;
                  return n * n + r * r;
                }
              },
              {
                key: 'getAngle',
                value: function (e, n) {
                  return Math.acos(t.dotProduct(e, n) / (e.mag() * n.mag()));
                }
              },
              {
                key: 'polarToCartesian',
                value: function (t, e) {
                  return [t * Math.cos(e), t * Math.sin(e)];
                }
              },
              {
                key: 'cartesianToPolar',
                value: function (t) {
                  return [t.mag(), Math.atan(t.y / t.x)];
                }
              },
              {
                key: 'getRandom',
                value: function () {
                  var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 1,
                    n = t.polarToCartesian(e, Math.random() * Math.PI * 2),
                    r = O()(n, 2),
                    i = r[0],
                    o = r[1];
                  return new t(i, o);
                }
              },
              {
                key: 'zero',
                value: function () {
                  return new t(0, 0);
                }
              }
            ]
          ),
          t
        );
      })(),
      N =
        (n(10),
        (function () {
          function t() {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              n = e.label,
              r = e.entity,
              i = e.children;
            u()(this, t),
              (this.id = C()),
              (this.label = n),
              (this.type = null),
              (this.entity = r || null),
              (this.parent = parent || null),
              (this.children = new Map(i || []));
          }
          return (
            c()(t, [
              {
                key: 'add',
                value: function (t) {
                  this.children.set(t.id, t), t.addTo(this);
                }
              },
              {
                key: 'addTo',
                value: function (t) {
                  (this.parent = t), this.parent.onAddChilren(this);
                }
              },
              { key: 'onAddChilren', value: function () {} }
            ]),
            t
          );
        })());
    function L(t) {
      var e = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = E()(t);
        if (e) {
          var i = E()(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return A()(this, n);
      };
    }
    var _ = (function (t) {
      R()(n, t);
      var e = L(n);
      function n() {
        var t,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        u()(this, n), (t = e.call(this, r));
        var i = r.gravity,
          o = void 0 === i ? 0 : i,
          a = r.bounds,
          s =
            void 0 === a
              ? [
                  { x: -1 / 0, y: -1 / 0 },
                  { x: 1 / 0, y: 1 / 0 }
                ]
              : a;
        return (t.type = g.WORLD), (t.gravity = o), (t.bounds = s), t;
      }
      return (
        c()(n, [
          {
            key: 'setGravity',
            value: function (t) {
              this.gravity = t;
            }
          },
          {
            key: 'setBounds',
            value: function (t) {
              this.bounds = t;
            }
          }
        ]),
        n
      );
    })(N);
    function G(t) {
      var e = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = E()(t);
        if (e) {
          var i = E()(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return A()(this, n);
      };
    }
    var Y = (function (t) {
      R()(n, t);
      var e = G(n);
      function n(t) {
        var r;
        return u()(this, n), ((r = e.call(this, t)).type = g.LIGHT), r;
      }
      return c()(n, [{ key: 'render', value: function () {} }]), n;
    })(N);
    function H(t) {
      var e = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = E()(t);
        if (e) {
          var i = E()(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return A()(this, n);
      };
    }
    var F = (function (t) {
      R()(n, t);
      var e = H(n);
      function n(t) {
        var r;
        return (
          u()(this, n),
          ((r = e.call(this, t)).type = g.TRANSFORM),
          (r.origin = t.origin || m.CENTER),
          (r.rotate = t.rotate),
          (r.transform = t.transform || [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
          ]),
          r
        );
      }
      return (
        c()(n, [
          {
            key: 'onAddChilren',
            value: function (t) {
              (this.position = t.position),
                (this.boundingBox = t.boundingBox),
                (this.width = t.width),
                (this.height = t.height),
                this.parent.onAddChilren(this);
            }
          }
        ]),
        n
      );
    })(N);
    function W(t) {
      var e = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = E()(t);
        if (e) {
          var i = E()(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return A()(this, n);
      };
    }
    var U = (function (t) {
        R()(n, t);
        var e = W(n);
        function n(t) {
          var r;
          return u()(this, n), ((r = e.call(this, t)).type = g.LAYER), r;
        }
        return n;
      })(N),
      q = n(7),
      z = n.n(q);
    function K(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function V(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? K(Object(n), !0).forEach(function (e) {
              o()(t, e, n[e]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : K(Object(n)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(n, e)
              );
            });
      }
      return t;
    }
    function X(t) {
      var e = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = E()(t);
        if (e) {
          var i = E()(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return A()(this, n);
      };
    }
    var $ = {
        shape: y.RECTANGLE,
        position: [0, 0],
        debug: !1,
        boundingBox: { margins: [0, 0, 0, 0], shape: y.RECTANGLE, color: 'red' }
      },
      J = (function (t) {
        R()(n, t);
        var e = X(n);
        function n(t) {
          var r;
          u()(this, n), (r = e.call(this, t));
          var i = t.shape,
            o = void 0 === i ? $.shape : i,
            a = t.width,
            s = t.height,
            c = t.radius,
            l = t.startAngle,
            f = t.endAngle,
            h = t.vertices,
            y = t.eddges,
            d = t.position,
            v = void 0 === d ? $.position : d,
            p = t.styles,
            m = t.debug,
            b = void 0 === m ? $.debug : m,
            w = t.boundingBox,
            x = void 0 === w ? $.boundingBox : w,
            k = z()(t, [
              'shape',
              'width',
              'height',
              'radius',
              'startAngle',
              'endAngle',
              'vertices',
              'eddges',
              'position',
              'styles',
              'debug',
              'boundingBox'
            ]);
          return (
            (r.type = g.BODY),
            (r.shape = o),
            (r.width = a),
            (r.height = s),
            (r.radius = c),
            (r.startAngle = l),
            (r.endAngle = f),
            (r.vertices = h),
            (r.eddges = y),
            (r.position = new B(v[0], v[1])),
            (r.styles = p),
            (r.debug = b),
            (r.boundingBox = V(V({}, $.boundingBox), x)),
            (r.restProps = k),
            r
          );
        }
        return (
          c()(n, [
            {
              key: 'onAddChilren',
              value: function (t) {
                if (this.position && t.position) {
                  var e = t.position,
                    n = t.boundingBox.margins,
                    r = t.width,
                    i = t.height,
                    o = this.position,
                    a = this.boundingBox.margins,
                    u = this.width,
                    s = this.height,
                    c = I(o.x - a[3], e.x - n[3]),
                    l = I(o.y - a[0], e.y - n[0]),
                    f = D(o.x + u + a[1], e.x + r + n[1]),
                    h = D(o.y + s + a[2], e.y + i + n[2]);
                  (this.boundingBox.margins = [
                    o.y - l,
                    f - (o.x + u),
                    h - (o.y + s),
                    o.x - c
                  ]),
                    this.parent.onAddChilren(this);
                }
              }
            }
          ]),
          n
        );
      })(N);
    (J.getDebugMessage = function (t) {
      return 'Pos :: '.concat(t.position.x, ', ').concat(t.position.y);
    }),
      (J.createArc = function (t) {
        var e = t.radius,
          n = t.startAngle,
          r = void 0 === n ? 0 : n,
          i = t.endAngle,
          o = void 0 === i ? 2 * Math.PI : i,
          a = t.position,
          u = z()(t, ['radius', 'startAngle', 'endAngle', 'position']);
        return new J(
          V(
            {
              shape: y.ARC,
              width: 2 * e,
              height: 2 * e,
              startAngle: r,
              endAngle: o,
              radius: e,
              position: a
            },
            u
          )
        );
      }),
      (J.createRectangle = function (t) {
        var e = t.width,
          n = t.height,
          r = t.position,
          i = z()(t, ['width', 'height', 'position']);
        return new J(
          V({ shape: y.RECTANGLE, width: e, height: n, position: r }, i)
        );
      }),
      (J.createPolygon = function (t) {
        var e = t.vertices,
          n = t.eddges,
          r = t.position,
          i = z()(t, ['vertices', 'eddges', 'position']),
          o = 0,
          a = 0,
          u = 0,
          s = 0;
        return (
          e.map(function (t) {
            var e = O()(t, 2),
              n = e[0],
              r = e[1];
            (o = I(n, o)), (u = D(n, u)), (a = I(r, a)), (s = D(r, s));
          }),
          new J(
            V(
              {
                shape: y.POLYGON,
                width: u - o,
                height: s - a,
                position: r,
                vertices: e,
                eddges: n
              },
              i
            )
          )
        );
      });
    var Q = J;
    function Z(t) {
      var e = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = E()(t);
        if (e) {
          var i = E()(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return A()(this, n);
      };
    }
    var tt = (function (t) {
      R()(n, t);
      var e = Z(n);
      function n(t) {
        var r;
        u()(this, n), (r = e.call(this, t));
        var i = t.bodyType,
          o = void 0 === i ? l.KINEMATIC : i,
          a = t.categoryMask,
          s = void 0 === a ? 1 : a,
          c = t.collisionMask,
          f = void 0 === c ? 7 : c,
          h = t.mass,
          y = t.restitution,
          d = t.friction,
          v = t.gravityScale,
          p = t.linearDrag,
          m = t.angularDrag,
          b = t.velocity,
          w = t.direction,
          x = t.acceleration;
        return (
          (r.type = g.PHYSICS_BODY),
          (r.bodyType = o),
          (r.categoryMask = s),
          (r.collisionMask = f),
          (r.mass = h),
          (r.restitution = y),
          (r.friction = d),
          (r.gravityScale = v),
          (r.linearDrag = p),
          (r.angularDrag = m),
          (r.velocity = new B(b[0], b[1])),
          (r.direction = new B(w[0], w[1])),
          (r.acceleration = new B(x[0], x[1])),
          r
        );
      }
      return n;
    })(Q);
    tt.getDebugMessage = function (t) {
      return '\n    Pos :: '
        .concat(t.position.x, ', ')
        .concat(t.position.y, ' \n \n    Vel :: ')
        .concat(t.velocity.x, ', ')
        .concat(t.velocity.y, ' \n\n    Acc :: ')
        .concat(t.acceleration.x, ', ')
        .concat(t.acceleration.y, ' \n\n  ');
    };
    var et = tt;
    function nt(t) {
      var e = (function () {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (t) {
          return !1;
        }
      })();
      return function () {
        var n,
          r = E()(t);
        if (e) {
          var i = E()(this).constructor;
          n = Reflect.construct(r, arguments, i);
        } else n = r.apply(this, arguments);
        return A()(this, n);
      };
    }
    var rt = (function (t) {
      R()(n, t);
      var e = nt(n);
      function n(t) {
        var r;
        u()(this, n), (r = e.call(this, t));
        var i = t.bodyType,
          o = void 0 === i ? l.KINEMATIC : i,
          a = t.categoryMask,
          s = void 0 === a ? 1 : a,
          c = t.collisionMask,
          f = void 0 === c ? 7 : c,
          h = t.mass,
          y = t.restitution,
          d = t.friction,
          v = t.gravityScale,
          p = t.linearDrag,
          m = t.angularDrag,
          b = t.velocity,
          w = t.direction,
          x = t.acceleration;
        return (
          (r.type = g.FLUID_BODY),
          (r.bodyType = o),
          (r.categoryMask = s),
          (r.collisionMask = f),
          (r.mass = h),
          (r.restitution = y),
          (r.friction = d),
          (r.gravityScale = v),
          (r.linearDrag = p),
          (r.angularDrag = m),
          (r.velocity = new B(b[0], b[1])),
          (r.direction = new B(w[0], w[1])),
          (r.acceleration = new B(x[0], x[1])),
          r
        );
      }
      return n;
    })(Q);
    rt.getDebugMessage = function (t) {
      return '\n    Pos :: '
        .concat(t.position.x, ', ')
        .concat(t.position.y, ' \n \n    Vel :: ')
        .concat(t.velocity.x, ', ')
        .concat(t.velocity.y, ' \n\n    Acc :: ')
        .concat(t.acceleration.x, ', ')
        .concat(t.acceleration.y, ' \n\n  ');
    };
    var it = rt;
    function ot(t, e) {
      var n;
      if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
        if (
          Array.isArray(t) ||
          (n = (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return at(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return at(t, e);
          })(t)) ||
          (e && t && 'number' == typeof t.length)
        ) {
          n && (t = n);
          var r = 0,
            i = function () {};
          return {
            s: i,
            n: function () {
              return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
            },
            e: function (t) {
              throw t;
            },
            f: i
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      var o,
        a = !0,
        u = !1;
      return {
        s: function () {
          n = t[Symbol.iterator]();
        },
        n: function () {
          var t = n.next();
          return (a = t.done), t;
        },
        e: function (t) {
          (u = !0), (o = t);
        },
        f: function () {
          try {
            a || null == n.return || n.return();
          } finally {
            if (u) throw o;
          }
        }
      };
    }
    function at(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    var ut = (function () {
      function t() {
        u()(this, t), (this.parentIndex = new Map()), (this.root = null);
      }
      return (
        c()(t, [
          {
            key: 'setRoot',
            value: function (t) {
              this.root = t;
            }
          },
          {
            key: 'getRoot',
            value: function () {
              return this.root;
            }
          },
          {
            key: 'getItemsToRender',
            value: function (t) {
              var e = t || this.root,
                n = [];
              if ((n.push(e), e.children && e.children.size)) {
                var r,
                  i = ot(e.children);
                try {
                  for (i.s(); !(r = i.n()).done; ) {
                    var o = O()(r.value, 2)[1];
                    n = n.concat(this.getItemsToRender(o));
                  }
                } catch (t) {
                  i.e(t);
                } finally {
                  i.f();
                }
              }
              return n;
            }
          },
          { key: 'getEntityById', value: function () {} }
        ]),
        t
      );
    })();
    (ut.createWorld = function (t) {
      return new _(t);
    }),
      (ut.createLight = function (t) {
        return new Y(t);
      }),
      (ut.createTransform = function (t) {
        return new F(t);
      }),
      (ut.createLayer = function (t) {
        return new U(t);
      }),
      (ut.createBody = function (t) {
        return new Q(t);
      }),
      (ut.createPhysicsBody = function (t) {
        return new et(t);
      }),
      (ut.createFluidBody = function (t) {
        return new it(t);
      }),
      (ut.World = _),
      (ut.Light = Y),
      (ut.Transform = F),
      (ut.Layer = U),
      (ut.Body = Q),
      (ut.PhysicsBody = et),
      (ut.FluidBody = it);
    var st = ut,
      ct = (function () {
        function t() {
          var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          u()(this, t);
          var n = e.position,
            r = e.rotation,
            i = void 0 === r ? 0 : r,
            o = e.screen;
          (this.position = n),
            (this.rotation = i),
            (this.screen = o),
            (this.target = null);
        }
        return (
          c()(t, [
            {
              key: 'setRotation',
              value: function (t) {
                this.rotation = t;
              }
            },
            {
              key: 'setPosition',
              value: function (t) {
                (this.position.x = t.x), (this.position.y = t.y);
              }
            },
            {
              key: 'bindTarget',
              value: function (t) {
                this.target = t;
              }
            },
            {
              key: 'update',
              value: function () {
                if (this.target) {
                  var t = this.target.position,
                    e = t.x,
                    n = t.y,
                    r = this.screen,
                    i = r.width,
                    o = r.height;
                  (this.position.x = e - i / 2), (this.position.y = n - o / 2);
                }
              }
            }
          ]),
          t
        );
      })();
    function lt(t, e) {
      var n;
      if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
        if (
          Array.isArray(t) ||
          (n = (function (t, e) {
            if (!t) return;
            if ('string' == typeof t) return ft(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            'Object' === n && t.constructor && (n = t.constructor.name);
            if ('Map' === n || 'Set' === n) return Array.from(t);
            if (
              'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return ft(t, e);
          })(t)) ||
          (e && t && 'number' == typeof t.length)
        ) {
          n && (t = n);
          var r = 0,
            i = function () {};
          return {
            s: i,
            n: function () {
              return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
            },
            e: function (t) {
              throw t;
            },
            f: i
          };
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      var o,
        a = !0,
        u = !1;
      return {
        s: function () {
          n = t[Symbol.iterator]();
        },
        n: function () {
          var t = n.next();
          return (a = t.done), t;
        },
        e: function (t) {
          (u = !0), (o = t);
        },
        f: function () {
          try {
            a || null == n.return || n.return();
          } finally {
            if (u) throw o;
          }
        }
      };
    }
    function ft(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    }
    var ht = (function () {
      function t() {
        u()(this, t);
      }
      return (
        c()(t, [
          {
            key: 'init',
            value: function (t) {
              var e = t.state,
                n = t.managers;
              (this.props = {
                resourceManager: n.resourceManager,
                screen: e.screen,
                canvas: e.canvas
              }),
                (this.camera = new ct({
                  position: B.zero(),
                  rotation: 0,
                  screen: e.screen
                }));
            }
          },
          {
            key: 'renderTree',
            value: function (t) {
              var e = this.props,
                n = e.canvas.context,
                r = e.screen,
                i = r.width,
                o = r.height,
                a = this.camera;
              n.clearRect(0, 0, i, o), a.update(), this.renderNode(t);
            }
          },
          {
            key: 'renderNode',
            value: function (t) {
              var e = this.props.canvas.context,
                n = this.camera;
              switch (t.type) {
                case g.WORLD:
                case g.LIGHT:
                  break;
                case g.TRANSFORM:
                  this.applyTransform(e, t, n);
                  break;
                case g.BODY:
                case g.PHYSICS_BODY:
                case g.FLUID_BODY:
                  e.beginPath(),
                    this.renderBody(t, { context: e, camera: n }),
                    e.closePath(),
                    t.debug &&
                      (e.beginPath(),
                      this.drawBoundingBox(e, t, n),
                      e.closePath());
                  break;
                default:
                  t.render && t.render();
              }
              var r,
                i = lt(t.children);
              try {
                for (i.s(); !(r = i.n()).done; ) {
                  var o = O()(r.value, 2)[1];
                  this.renderNode(o);
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              switch (t.type) {
                case g.TRANSFORM:
                  e.restore();
                  break;
                default:
                  t.cleanup && t.cleanup();
              }
            }
          },
          {
            key: 'getScreenPosition',
            value: function (t, e) {
              return { x: M(t.x - e.position.x), y: M(t.y - e.position.y) };
            }
          },
          {
            key: 'applyTransform',
            value: function (t, e, n) {
              var r,
                i = e.rotate,
                o = O()(e.transform, 2),
                a = O()(o[0], 3),
                u = a[0],
                s = a[1],
                c = a[2],
                l = O()(o[1], 3),
                f = l[0],
                h = l[1],
                y = l[2],
                d = e.boundingBox.margins,
                v = e.position,
                p = e.width,
                g = e.height,
                b = e.origin;
              if (Array.isArray(b)) {
                var w = this.getScreenPosition({ x: b[0], y: b[1] }, n);
                r = [w.x, w.y];
              } else {
                var x = this.getScreenPosition(v, n),
                  k = x.x,
                  T = x.y,
                  R = k + p + d[1],
                  S = k - d[3],
                  A = T + g + d[2],
                  P = T - d[0],
                  E = S + (R - S) / 2,
                  M = P + (A - P) / 2;
                switch (b) {
                  case m.LEFT_TOP:
                    r = [S, P];
                    break;
                  case m.RIGHT_TOP:
                    r = [R, P];
                    break;
                  case m.RIGHT_BOTTOM:
                    r = [R, A];
                    break;
                  case m.LEFT_BOTTOM:
                    ((r = [S, A])[0] = S), (r[1] = A);
                    break;
                  case m.CENTER:
                    r = [E, M];
                    break;
                  default:
                    r = [0, 0];
                }
              }
              t.save(),
                t.transform(u, f, s, h, c + r[0], y + r[1]),
                i && t.rotate((Math.PI * i) / 180),
                t.translate(-r[0], -r[1]);
            }
          },
          {
            key: 'renderBody',
            value: function (t, e) {
              var n = e.context,
                r = e.camera,
                i = t.styles,
                o = i.image,
                a = i.backgroundImage,
                u = i.repeat,
                s = i.backgroundColor,
                c = i.backgroundGradient,
                l = i.borderColor,
                f = i.borderSize,
                h = o && this.props.resourceManager.get(o);
              if ((h && this.renderImage(n, t, r, h), !(!s & !l & !f & !d))) {
                (n.fillStyle = s || 'transparent'),
                  (n.strokeStyle = l || 'transparent'),
                  (n.lineWidth = f || 0);
                var d = a && this.props.resourceManager.get(a);
                if (d) {
                  var v = n.createPattern(d, u || 'repeat');
                  n.fillStyle = v;
                } else c && console.warn('Gradients are not supported for now');
                t.shape === y.RECTANGLE
                  ? this.renderRect(n, t, r)
                  : t.shape === y.ARC
                  ? this.renderCircle(n, t, r)
                  : t.shape === y.POLYGON && this.renderPolygon(n, t, r);
              }
            }
          },
          {
            key: 'renderImage',
            value: function (t, e, n, r) {
              var i = this.getScreenPosition(e.position, n),
                o = i.x,
                a = i.y,
                u = e.width,
                s = e.height;
              t.drawImage(r, o, a, u, s);
            }
          },
          {
            key: 'renderRect',
            value: function (t, e, n) {
              var r = this.getScreenPosition(e.position, n),
                i = r.x,
                o = r.y,
                a = e.width,
                u = e.height;
              t.rect(i, o, a, u), t.fill(), t.stroke();
            }
          },
          {
            key: 'renderCircle',
            value: function (t, e, n) {
              var r = this.getScreenPosition(e.position, n),
                i = r.x,
                o = r.y,
                a = e.radius,
                u = e.startAngle,
                s = e.endAngle;
              t.arc(i + a, o + a, a, u, s), t.fill(), t.stroke();
            }
          },
          {
            key: 'renderPolygon',
            value: function (t, e, n) {
              var r = this.getScreenPosition(e.position, n),
                i = r.x,
                o = r.y,
                a = e.vertices;
              t.moveTo(i + a[0][0], o + a[0][1]);
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                t.lineTo(i + s[0], o + s[1]);
              }
              t.fill(), t.stroke();
            }
          },
          {
            key: 'drawBoundingBox',
            value: function (t, e, n) {
              var r = this.getScreenPosition(e.position, n),
                i = r.x,
                o = r.y,
                a = e.width,
                u = e.height,
                s = e.boundingBox,
                c = s.margins,
                l = s.shape,
                f = s.color;
              if (
                ((t.strokeStyle = f),
                (t.lineWidth = 1),
                t.setLineDash([25, 5, 5, 5, 5, 5, 5, 5]),
                l === y.ARC)
              ) {
                var h = a / 2 + c[1] - c[3];
                t.arc(i + h, o + h, h, 0, 2 * Math.PI), t.stroke();
              } else
                t.strokeRect(
                  i - c[3],
                  o - c[0],
                  a + (c[1] + c[3]),
                  u + (c[0] + c[2])
                );
            }
          }
        ]),
        t
      );
    })();
    function yt(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t);
        e &&
          (r = r.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    var dt = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        u()(this, t),
          (this.props = e),
          (this.state = {}),
          (this.managers = {}),
          this.init(),
          this.postInit();
      }
      return (
        c()(t, [
          {
            key: 'init',
            value: function () {
              this.initCanvas(),
                this.initTimer(),
                this.initResourceManager(),
                this.initEntityManager(),
                this.initRenderer();
            }
          },
          {
            key: 'postInit',
            value: function () {
              this.managers.resourceManager.init &&
                this.managers.resourceManager.init(this),
                this.managers.entityManager.init &&
                  this.managers.entityManager.init(this),
                this.managers.renderer.init &&
                  this.managers.renderer.init(this);
            }
          },
          { key: 'destroy', value: function () {} },
          {
            key: 'initCanvas',
            value: function () {
              var t = this.props,
                e = t.canvasId,
                n = t.canvasWidth,
                r = t.canvasHeight,
                i = t.smoothImage,
                o = document.createElement('canvas');
              o.setAttribute('id', e),
                (o.style.cursor = 'crosshair'),
                (o.width = n || window.innerWidth),
                (o.height = r || window.innerHeight),
                document.body.appendChild(o);
              var a = o.getContext('2d');
              (a.mozImageSmoothingEnabled = !!i),
                (a.webkitImageSmoothingEnabled = !!i),
                (a.msImageSmoothingEnabled = !!i),
                (a.imageSmoothingEnabled = !!i),
                (this.state.canvas = { element: o, context: a }),
                (this.state.screen = {
                  width: o.width,
                  height: o.height,
                  aspectRatio: o.width / o.height
                });
            }
          },
          {
            key: 'initTimer',
            value: function () {
              var t = this.props,
                e = t.timeSpeed,
                n = void 0 === e ? 1 : e,
                r = t.fps,
                i = void 0 === r ? 100 : r,
                o = (performance || Date).now();
              this.state.timer = {
                timeSpeed: n,
                lastTime: o,
                currTime: o,
                deltaTime: 1e3 / i,
                fps: 0,
                fpsLastTick: 0,
                fpsHistory: []
              };
            }
          },
          {
            key: 'initResourceManager',
            value: function () {
              var t = new x();
              this.managers.resourceManager = t;
            }
          },
          {
            key: 'initEntityManager',
            value: function () {
              var t = new st(),
                e = st.createWorld({
                  gravity: 0,
                  bounds: [new B(-1 / 0, -1 / 0), new B(1 / 0, 1 / 0)]
                }),
                n = st.createLight({ position: B.zero() });
              t.setRoot(e),
                e.add(n),
                (this.managers.entityManager = t),
                (this.state.world = e),
                (this.state.light = n);
            }
          },
          {
            key: 'initRenderer',
            value: function () {
              this.managers.renderer = new ht();
            }
          },
          {
            key: 'autoPilot',
            value: function () {
              requestAnimationFrame(this.autoPilot);
              var t = this.state.timer,
                e = (performance || Date).now(),
                n = e - t.lastTime;
              if (((t.currTime = e), n >= t.deltaTime)) {
                for (; t.fpsHistory.length > 0 && t.fpsHistory[0] <= e - 1e3; )
                  t.fpsHistory.shift();
                t.fpsHistory.push(e),
                  (t.lastTime = e - (n % 10)),
                  t.currTime - t.fpsLastTick >= 500 &&
                    ((t.fps = t.fpsHistory.length),
                    (t.fpsLastTick = t.currTime)),
                  console.log('FPS :: ', t.fps),
                  this.update(t.currTime);
              }
            }
          },
          {
            key: 'update',
            value: function () {
              this.managers.renderer.renderTree(
                this.state.world,
                this.state.timer.currTime
              );
            }
          }
        ]),
        t
      );
    })();
    (dt.Constants = r),
      (dt.helpers = (function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? yt(Object(n), !0).forEach(function (e) {
                o()(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : yt(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e)
                );
              });
        }
        return t;
      })({}, st));
    e.default = dt;
  },
  function (t, e) {
    t.exports = function (t) {
      if (Array.isArray(t)) return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
        var n = [],
          r = !0,
          i = !1,
          o = void 0;
        try {
          for (
            var a, u = t[Symbol.iterator]();
            !(r = (a = u.next()).done) &&
            (n.push(a.value), !e || n.length !== e);
            r = !0
          );
        } catch (t) {
          (i = !0), (o = t);
        } finally {
          try {
            r || null == u.return || u.return();
          } finally {
            if (i) throw o;
          }
        }
        return n;
      }
    };
  },
  function (t, e, n) {
    var r = n(15);
    t.exports = function (t, e) {
      if (t) {
        if ('string' == typeof t) return r(t, e);
        var n = Object.prototype.toString.call(t).slice(8, -1);
        return (
          'Object' === n && t.constructor && (n = t.constructor.name),
          'Map' === n || 'Set' === n
            ? Array.from(t)
            : 'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? r(t, e)
            : void 0
        );
      }
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
      return r;
    };
  },
  function (t, e) {
    t.exports = function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    };
  },
  function (t, e) {
    function n(e, r) {
      return (
        (t.exports = n =
          Object.setPrototypeOf ||
          function (t, e) {
            return (t.__proto__ = e), t;
          }),
        n(e, r)
      );
    }
    t.exports = n;
  },
  function (t, e) {
    t.exports = function (t) {
      if (void 0 === t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return t;
    };
  },
  function (t, e) {
    t.exports = function (t, e) {
      if (null == t) return {};
      var n,
        r,
        i = {},
        o = Object.keys(t);
      for (r = 0; r < o.length; r++)
        (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
      return i;
    };
  },
  function (t, e, n) {
    'use strict';
    n.r(e);
    var r = n(11),
      i = r.default.helpers,
      o = i.Body,
      a = i.Transform,
      u = window.innerWidth,
      s = window.innerHeight,
      c = new r.default({ canvasId: 'test-1', timeSpeed: 1, fps: 100 }),
      l = c.state.world,
      f = c.managers.renderer,
      h = { position: { x: 0, y: 0 } },
      y = new a({
        label: 'transform1',
        rotate: 1,
        origin: [u / 2 + 25, s / 2 + 25],
        transform: [
          [1, 0, 0],
          [0, 1, 0],
          [0, 0, 1]
        ]
      }),
      d = new a({
        label: 'transform2',
        rotate: 0,
        origin: [u / 2 + 115, s / 2 + 115]
      }),
      v = new o.createArc({
        label: 'sun',
        position: [u / 2, s / 2],
        radius: 25,
        styles: { backgroundColor: 'orange' },
        debug: !0
      }),
      p = new o.createArc({
        label: 'earth',
        position: [u / 2 + 100, s / 2 + 100],
        radius: 15,
        styles: { backgroundColor: 'green' },
        debug: !0
      }),
      g = new o.createArc({
        label: 'moon',
        position: [u / 2 + 130, s / 2 + 130],
        radius: 5,
        styles: { backgroundColor: '#fff' },
        debug: !0
      }),
      m = o.createRectangle({
        label: 'bg',
        position: [0, 0],
        width: u,
        height: s,
        styles: { backgroundColor: '#000' },
        debug: !0
      });
    window.addEventListener('mousemove', function (t) {
      var e = t.clientX,
        n = t.clientY;
      h.position = { x: e, y: n };
    }),
      f.camera.bindTarget(h),
      l.add(m),
      l.add(y),
      y.add(v),
      v.add(d),
      d.add(p),
      p.add(g),
      setInterval(function () {
        (y.rotate += 1), (d.rotate += 1);
      }),
      console.log(c),
      c.autoPilot();
  }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL21vZHVsZXMvUmVzb3VyY2VNYW5hZ2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbW9kdWxlcy9jb3JlL0NvbW1vbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL2NvcmUvQW5pbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL2NvcmUvVmVjdG9yMkQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL0VudGl0eU1hbmFnZXIvX25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL0VudGl0eU1hbmFnZXIvV29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL0VudGl0eU1hbmFnZXIvTGlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL0VudGl0eU1hbmFnZXIvVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbW9kdWxlcy9FbnRpdHlNYW5hZ2VyL0xheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbW9kdWxlcy9FbnRpdHlNYW5hZ2VyL0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL0VudGl0eU1hbmFnZXIvUGh5c2ljc0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL0VudGl0eU1hbmFnZXIvRmx1aWRCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbW9kdWxlcy9FbnRpdHlNYW5hZ2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbW9kdWxlcy9SZW5kZXJlci9DYW1lcmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL1JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUvaW5kZXguanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9nZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjb25zdHJ1Y3RvciIsIl90eXBlb2YiLCJhc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiYXJyYXlXaXRoSG9sZXMiLCJpdGVyYWJsZVRvQXJyYXlMaW1pdCIsInVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5Iiwibm9uSXRlcmFibGVSZXN0IiwiYXJyIiwib2JqIiwib2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZSIsImV4Y2x1ZGVkIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIml0ZXJhdG9yIiwiQk9EWV9UWVBFIiwiU1RBVElDIiwiS0lORU1BVElDIiwiRFlOQU1JQyIsIkdSQURJRU5UX1RZUEVTIiwiTElORUFSIiwiUkFESUFMIiwiU0hBUEVfU1RZTEVTIiwiTk9ORSIsIk5PUk1BTCIsIkdSQURJRU5UIiwiUEFUVEVSTiIsIlNIQVBFUyIsIlRSSUFOR0xFIiwiUkVDVEFOR0xFIiwiUEVOVEFHT04iLCJIRVhBR09OIiwiQVJDIiwiUE9MWUdPTiIsIkdBTUVfU1RBVEVTIiwiSE9NRSIsIlBMQVkiLCJQQVVTRSIsIkVORCIsIktFWV9DT0RFUyIsIkVTQyIsIlNQQUNFIiwiTEVGVCIsIlJJR0hUIiwiRU5URVIiLCJNIiwiUkVTT1VSQ0VfVFlQRSIsIklNQUdFIiwiQVVESU8iLCJFTlRJVFlfTk9ERV9UWVBFUyIsIldPUkxEIiwiTElHSFQiLCJCT0RZIiwiUEhZU0lDU19CT0RZIiwiRkxVSURfQk9EWSIsIlRSQU5TRk9STSIsIlRSQU5TRk9STV9PUklHSU4iLCJDRU5URVIiLCJMRUZUX1RPUCIsIlJJR0hUX1RPUCIsIlJJR0hUX0JPVFRPTSIsIkxFRlRfQk9UVE9NIiwiUmVzb3VyY2VNYW5hZ2VyIiwidGhpcyIsInJlc291cmNlcyIsIk1hcCIsImNiIiwidHlwZSIsIkRhdGUiLCJub3ciLCJzcmMiLCJjb25zb2xlIiwid2FybiIsInJvIiwiQXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwiYXNzZXRzIiwic2V0IiwiSW1hZ2UiLCJvbmxvYWQiLCJoYXMiLCJrZXlzIiwiY2xlYXIiLCJudW0iLCJ4IiwieSIsImlzTmFOIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsIkFuaW1hdG9yIiwiVmVjdG9yMkQiLCJhIiwic3FydCIsIm1hZyIsImRpdiIsImN1cnJNYWciLCJtdWwiLCJsaW1pdEFtdCIsIm1pbiIsIm1heCIsIkNvbW1vbnMiLCJub3JtYWxpc2UiLCJ0aGV0YSIsImNvcyIsInNpbiIsImF0YW4yIiwidjEiLCJ2MiIsInNoYWRvdyIsImRvdFByb2R1Y3QiLCJtYWdTcSIsImR4IiwiZHkiLCJhY29zIiwiYXRhbiIsInBvbGFyVG9DYXJ0ZXNpYW4iLCJQSSIsIl9ub2RlIiwibGFiZWwiLCJlbnRpdHkiLCJjaGlsZHJlbiIsImlkIiwicGFyZW50IiwiYWRkVG8iLCJvbkFkZENoaWxyZW4iLCJXb3JsZCIsImdyYXZpdHkiLCJib3VuZHMiLCJJbmZpbml0eSIsIkxpZ2h0IiwiVHJhbnNmb3JtIiwib3JpZ2luIiwicm90YXRlIiwidHJhbnNmb3JtIiwiY2hpbGQiLCJwb3NpdGlvbiIsImJvdW5kaW5nQm94Iiwid2lkdGgiLCJoZWlnaHQiLCJMYXllciIsIkxBWUVSIiwiZGVmYXVsdFN0YXRlIiwic2hhcGUiLCJkZWJ1ZyIsIm1hcmdpbnMiLCJjb2xvciIsIkJvZHkiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ2ZXJ0aWNlcyIsImVkZGdlcyIsInN0eWxlcyIsInJlc3RQcm9wcyIsImNQb3NpdGlvbiIsImNCb3VuZGluZ0JveE1hcmdpbiIsImNXaWR0aCIsImNIZWlnaHQiLCJwUG9zaXRpb24iLCJwQm91bmRpbmdCb3hNYXJnaW4iLCJwV2lkdGgiLCJwSGVpZ2h0IiwieE1pbiIsInlNaW4iLCJ4TWF4IiwieU1heCIsImdldERlYnVnTWVzc2FnZSIsImJvZHkiLCJjcmVhdGVBcmMiLCJjcmVhdGVSZWN0YW5nbGUiLCJjcmVhdGVQb2x5Z29uIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsIm1hcCIsIlBoeXNpY3NCb2R5IiwiYm9keVR5cGUiLCJjYXRlZ29yeU1hc2siLCJjb2xsaXNpb25NYXNrIiwibWFzcyIsInJlc3RpdHV0aW9uIiwiZnJpY3Rpb24iLCJncmF2aXR5U2NhbGUiLCJsaW5lYXJEcmFnIiwiYW5ndWxhckRyYWciLCJ2ZWxvY2l0eSIsImRpcmVjdGlvbiIsImFjY2VsZXJhdGlvbiIsIkZsdWlkQm9keSIsIkVudGl0eU1hbmFnZXIiLCJwYXJlbnRJbmRleCIsInJvb3QiLCJlbGVtIiwibm9kZSIsIml0ZW1zIiwicHVzaCIsInNpemUiLCJ2YWwiLCJjb25jYXQiLCJnZXRJdGVtc1RvUmVuZGVyIiwiY3JlYXRlV29ybGQiLCJjcmVhdGVMaWdodCIsImNyZWF0ZVRyYW5zZm9ybSIsImNyZWF0ZUxheWVyIiwiY3JlYXRlQm9keSIsImNyZWF0ZVBoeXNpY3NCb2R5IiwiY3JlYXRlRmx1aWRCb2R5IiwiQ2FtZXJhIiwicm90YXRpb24iLCJzY3JlZW4iLCJhbmdsZSIsInBvcyIsIlJlbmRlcmVyIiwic3RhdGUiLCJtYW5hZ2VycyIsInJlc291cmNlTWFuYWdlciIsImNhbnZhcyIsImNhbWVyYSIsInplcm8iLCJjb250ZXh0IiwiY2xlYXJSZWN0IiwidXBkYXRlIiwicmVuZGVyTm9kZSIsImVsZW1lbnQiLCJhcHBseVRyYW5zZm9ybSIsImJlZ2luUGF0aCIsInJlbmRlckJvZHkiLCJjbG9zZVBhdGgiLCJkcmF3Qm91bmRpbmdCb3giLCJyZW5kZXIiLCJyZXN0b3JlIiwiY2xlYW51cCIsImNvb3JkcyIsImUiLCJiIiwiZiIsIkFycmF5IiwiaXNBcnJheSIsImdldFNjcmVlblBvc2l0aW9uIiwieE1pZCIsInlNaWQiLCJzYXZlIiwidHJhbnNsYXRlIiwiZW52UHJvcHMiLCJpbWFnZSIsImJhY2tncm91bmRJbWFnZSIsInJlcGVhdCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRHcmFkaWVudCIsImJvcmRlckNvbG9yIiwiYm9yZGVyU2l6ZSIsIl9pbWFnZSIsInJlbmRlckltYWdlIiwiX2JnSW1hZ2UiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInBhdHRlcm4iLCJjcmVhdGVQYXR0ZXJuIiwicmVuZGVyUmVjdCIsInJlbmRlckNpcmNsZSIsInJlbmRlclBvbHlnb24iLCJkcmF3SW1hZ2UiLCJyZWN0IiwiZmlsbCIsInN0cm9rZSIsImFyYyIsIm1vdmVUbyIsInZlcnRleCIsImxpbmVUbyIsInNldExpbmVEYXNoIiwic3Ryb2tlUmVjdCIsIkVuZ2luZSIsImluaXQiLCJwb3N0SW5pdCIsImluaXRDYW52YXMiLCJpbml0VGltZXIiLCJpbml0UmVzb3VyY2VNYW5hZ2VyIiwiaW5pdEVudGl0eU1hbmFnZXIiLCJpbml0UmVuZGVyZXIiLCJlbnRpdHlNYW5hZ2VyIiwicmVuZGVyZXIiLCJjYW52YXNJZCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0Iiwic21vb3RoSW1hZ2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsImN1cnNvciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCIsIndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCIsIm1zSW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiYXNwZWN0UmF0aW8iLCJ0aW1lU3BlZWQiLCJmcHMiLCJjdXJyVGltZSIsInBlcmZvcm1hbmNlIiwidGltZXIiLCJsYXN0VGltZSIsImRlbHRhVGltZSIsImZwc0xhc3RUaWNrIiwiZnBzSGlzdG9yeSIsIndvcmxkIiwibGlnaHQiLCJzZXRSb290IiwiYWRkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYXV0b1BpbG90IiwiZWxhcHNlZCIsInNoaWZ0IiwibG9nIiwicmVuZGVyVHJlZSIsIkNvbnN0YW50cyIsImhlbHBlcnMiLCJfYXJyIiwiX24iLCJfZCIsIl9lIiwidW5kZWZpbmVkIiwiX3MiLCJfaSIsIm5leHQiLCJkb25lIiwiZXJyIiwiYXJyYXlMaWtlVG9BcnJheSIsIm1pbkxlbiIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIl9zZXRQcm90b3R5cGVPZiIsIlJlZmVyZW5jZUVycm9yIiwic291cmNlS2V5cyIsIkdhbWVFbmdpbmUiLCJXSURUSCIsIkhFSUdIVCIsImVuZ2luZSIsIm1vdXNlIiwidHJhbnNmb3JtMSIsInRyYW5zZm9ybTIiLCJzdW4iLCJlYXJ0aCIsIm1vb24iLCJiZyIsImV2dCIsImNsaWVudFgiLCJjbGllbnRZIiwiYmluZFRhcmdldCIsInNldEludGVydmFsIl0sIm1hcHBpbmdzIjoiYUFDRSxJQUFJQSxFQUFtQixHQUd2QixTQUFTQyxFQUFvQkMsR0FHNUIsR0FBR0YsRUFBaUJFLEdBQ25CLE9BQU9GLEVBQWlCRSxHQUFVQyxRQUduQyxJQUFJQyxFQUFTSixFQUFpQkUsR0FBWSxDQUN6Q0csRUFBR0gsRUFDSEksR0FBRyxFQUNISCxRQUFTLElBVVYsT0FOQUksRUFBUUwsR0FBVU0sS0FBS0osRUFBT0QsUUFBU0MsRUFBUUEsRUFBT0QsUUFBU0YsR0FHL0RHLEVBQU9FLEdBQUksRUFHSkYsRUFBT0QsUUFLZkYsRUFBb0JRLEVBQUlGLEVBR3hCTixFQUFvQlMsRUFBSVYsRUFHeEJDLEVBQW9CVSxFQUFJLFNBQVNSLEVBQVNTLEVBQU1DLEdBQzNDWixFQUFvQmEsRUFBRVgsRUFBU1MsSUFDbENHLE9BQU9DLGVBQWViLEVBQVNTLEVBQU0sQ0FBRUssWUFBWSxFQUFNQyxJQUFLTCxLQUtoRVosRUFBb0JrQixFQUFJLFNBQVNoQixHQUNYLG9CQUFYaUIsUUFBMEJB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USxFQUNSSyxPQUFRLENBQ05nRyxnQkFBaUIsUUFFbkJ6RyxPQUFPLElBR0hrTixFQUFLL00sRUFBS3VCLGdCQUFnQixDQUM5Qm5ELE1BQU8sS0FDUGlCLFNBQVUsQ0FBQyxFQUFHLEdBQ2RFLE1BQU8rTSxFQUNQOU0sT0FBUStNLEVBQ1JqTSxPQUFRLENBQ05nRyxnQkFBaUIsUUFFbkJ6RyxPQUFPLElBR1RxSixPQUFPOU4saUJBQWlCLGFBQWEsU0FBQzRSLEdBQVEsSUFDcENDLEVBQXFCRCxFQUFyQkMsUUFBU0MsRUFBWUYsRUFBWkUsUUFDakJULEVBQU1wTixTQUFXLENBQ2Z4RCxFQUFHb1IsRUFDSG5SLEVBQUdvUixNQUlQMUUsRUFBU2hFLE9BQU8ySSxXQUFXVixHQUUzQm5DLEVBQU1HLElBQUlzQyxHQUNWekMsRUFBTUcsSUFBSWlDLEdBQ1ZBLEVBQVdqQyxJQUFJbUMsR0FDZkEsRUFBSW5DLElBQUlrQyxHQUNSQSxFQUFXbEMsSUFBSW9DLEdBQ2ZBLEVBQU1wQyxJQUFJcUMsR0FFVk0sYUFBWSxXQUNWVixFQUFXeE4sUUFBVSxFQUNyQnlOLEVBQVd6TixRQUFVLEtBUXZCbEUsUUFBUThQLElBQUkwQixHQUVaQSxFQUFPN0IiLCJmaWxlIjoiZ2FtZS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIwKTtcbiIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NsYXNzQ2FsbENoZWNrOyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY3JlYXRlQ2xhc3M7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsInZhciBhcnJheVdpdGhIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5TGltaXQgPSByZXF1aXJlKFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdFwiKTtcblxudmFyIHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIik7XG5cbnZhciBub25JdGVyYWJsZVJlc3QgPSByZXF1aXJlKFwiLi9ub25JdGVyYWJsZVJlc3RcIik7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NsaWNlZFRvQXJyYXk7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2RlZmluZVByb3BlcnR5OyIsInZhciBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlID0gcmVxdWlyZShcIi4vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiKTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSBvYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICB2YXIga2V5LCBpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllczsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiLy8gRWxlbWVudCBDb25zdHNcbmNvbnN0IEJPRFlfVFlQRSA9IHtcbiAgU1RBVElDOiAwLFxuICBLSU5FTUFUSUM6IDEsXG4gIERZTkFNSUM6IDIsXG59O1xuXG5jb25zdCBHUkFESUVOVF9UWVBFUyA9IHtcbiAgTElORUFSOiAwLFxuICBSQURJQUw6IDEsXG59O1xuXG5jb25zdCBTSEFQRV9TVFlMRVMgPSB7XG4gIE5PTkU6IDAsXG4gIE5PUk1BTDogMSxcbiAgR1JBRElFTlQ6IDIsXG4gIFBBVFRFUk46IDMsXG59O1xuXG5jb25zdCBTSEFQRVMgPSB7XG4gIFRSSUFOR0xFOiAwLFxuICBSRUNUQU5HTEU6IDEsXG4gIFBFTlRBR09OOiAyLFxuICBIRVhBR09OOiAzLFxuICBBUkM6IDQsXG4gIFBPTFlHT046IDUsXG59O1xuXG5jb25zdCBHQU1FX1NUQVRFUyA9IHtcbiAgSE9NRTogMCxcbiAgUExBWTogMSxcbiAgUEFVU0U6IDIsXG4gIEVORDogMyxcbn07XG5cbmNvbnN0IEtFWV9DT0RFUyA9IHtcbiAgRVNDOiBcImVzY2FwZVwiLFxuICBTUEFDRTogXCIgXCIsXG4gIExFRlQ6IFwiYXJyb3dsZWZ0XCIsXG4gIFJJR0hUOiBcImFycm93cmlnaHRcIixcbiAgRU5URVI6IFwiZW50ZXJcIixcbiAgTTogXCJtXCIsXG59O1xuXG5jb25zdCBSRVNPVVJDRV9UWVBFID0ge1xuICBJTUFHRTogMSxcbiAgQVVESU86IDIsXG59O1xuXG5jb25zdCBFTlRJVFlfTk9ERV9UWVBFUyA9IHtcbiAgV09STEQ6IDAsXG4gIExJR0hUOiAxLFxuICBCT0RZOiAyLFxuICBQSFlTSUNTX0JPRFk6IDMsXG4gIEZMVUlEX0JPRFk6IDQsXG4gIFRSQU5TRk9STTogNSxcbn07XG5cbmNvbnN0IFRSQU5TRk9STV9PUklHSU4gPSB7XG4gIENFTlRFUjogMCxcbiAgTEVGVF9UT1A6IDEsXG4gIFJJR0hUX1RPUDogMixcbiAgUklHSFRfQk9UVE9NOiAzLFxuICBMRUZUX0JPVFRPTTogNCxcbn07XG5cbmV4cG9ydCB7XG4gIEJPRFlfVFlQRSxcbiAgR1JBRElFTlRfVFlQRVMsXG4gIFNIQVBFX1NUWUxFUyxcbiAgU0hBUEVTLFxuICBHQU1FX1NUQVRFUyxcbiAgS0VZX0NPREVTLFxuICBSRVNPVVJDRV9UWVBFLFxuICBFTlRJVFlfTk9ERV9UWVBFUyxcbiAgVFJBTlNGT1JNX09SSUdJTixcbn07XG4iLCJpbXBvcnQgeyBSRVNPVVJDRV9UWVBFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jbGFzcyBSZXNvdXJjZU1hbmFnZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBNYXAoKTtcbiAgfVxuXG4gIGxvYWRSZXNvdXJjZXMocmVzb3VyY2VzID0gW10sIGNiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXNvdXJjZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHsgdHlwZSA9IFJFU09VUkNFX1RZUEUuSU1BR0UsIGtleSA9IERhdGUubm93KCksIHNyYyB9ID0gcmVzb3VyY2VzW1xuICAgICAgICBpXG4gICAgICBdO1xuICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlJlc291cmNlIFRZUEUgaXMgcmVxdWlyZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICghc3JjKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcIlJlc291cmNlIFNSQyBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGUgPT09IFJFU09VUkNFX1RZUEUuQVVESU8pIHtcbiAgICAgICAgY29uc3Qgcm8gPSBuZXcgQXVkaW8oc3JjKTtcbiAgICAgICAgcm8uYWRkRXZlbnRMaXN0ZW5lcihcImNhbnBsYXl0aHJvdWdoXCIsICgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5hc3NldHNba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoa2V5LCBybyk7XG4gICAgICAgICAgY2IgJiYgY2Ioa2V5LCBybyk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBSRVNPVVJDRV9UWVBFLklNQUdFKSB7XG4gICAgICAgIGNvbnN0IHJvID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHJvLnNyYyA9IHNyYztcbiAgICAgICAgcm8ub25sb2FkID0gKCkgPT4ge1xuICAgICAgICAgIHRoaXMucmVzb3VyY2VzLnNldChrZXksIHJvKTtcbiAgICAgICAgICBjYiAmJiBjYihrZXksIHJvKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBoYXNSZXNvdXJjZShrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXMuaGFzKGtleSk7XG4gIH1cblxuICByZW1vdmVSZXNvdXJjZXMoa2V5cykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0ga2V5c1tpXTtcbiAgICAgIHRoaXMucmVzb3VyY2VzLmRlbGV0ZShrZXkpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUFsbCgpIHtcbiAgICB0aGlzLnJlc291cmNlcy5jbGVhcigpO1xuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlcy5nZXQoa2V5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNvdXJjZU1hbmFnZXI7XG4iLCIvLyBodHRwOi8vd3d3LmdyYXBoaWNzLnN0YW5mb3JkLmVkdS9+c2VhbmRlci9iaXRoYWNrcy5odG1sI0ludGVnZXJNaW5Pck1heFxuXG5jb25zdCByb3VuZE9mZiA9IChudW0pID0+IHtcbiAgcmV0dXJuIH5+KDAuNSArIG51bSk7XG4gIC8vIHJldHVybiAoMC41ICsgbnVtKSB8IDA7XG4gIC8vIHJldHVybiAoMC41ICsgbnVtKSB8IDA7XG4gIC8vIHJldHVybiAoMC41ICsgbnVtKSA8PCAwO1xufTtcblxuY29uc3QgbWluaW11bSA9ICh4LCB5KSA9PiB5IF4gKCh4IF4geSkgJiAtKHggPCB5KSk7XG5cbmNvbnN0IG1heGltdW0gPSAoeCwgeSkgPT4geCBeICgoeCBeIHkpICYgLSh4IDwgeSkpO1xuXG5jb25zdCBpc09wcG9zaXRlID0gKHgsIHkpID0+ICh4IF4geSkgPCAwO1xuXG5jb25zdCBpc1Bvc2l0aXZlID0gKHgpID0+IHggPj0gMDtcblxuY29uc3QgaXNOZWdhdGl2ZSA9ICh4KSA9PiB4IDwgMDtcblxuY29uc3QgaGFzVmFsdWUgPSAoeCkgPT4ge1xuICByZXR1cm4gISh4ID09PSBudWxsIHx8IHggPT09IHVuZGVmaW5lZCB8fCBpc05hTih4KSk7XG59O1xuXG4vLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9nb3Jkb25icmFuZGVyLzIyMzAzMTcjZ2lzdGNvbW1lbnQtMzQwNDUzN1xuY29uc3QgdWlkID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIFN0cmluZy5mcm9tQ2hhckNvZGUoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjYpICsgOTcpICtcbiAgICBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyKSArXG4gICAgRGF0ZS5ub3coKS50b1N0cmluZygxNikuc2xpY2UoNClcbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcm91bmRPZmYsXG4gIG1pbmltdW0sXG4gIG1heGltdW0sXG4gIGlzT3Bwb3NpdGUsXG4gIGlzUG9zaXRpdmUsXG4gIGlzTmVnYXRpdmUsXG4gIGhhc1ZhbHVlLFxuICB1aWRcbn07XG4iLCJmdW5jdGlvbiBBbmltYXRvcih7XG4gIHN0YXJ0VmFsID0gMCxcbiAgbWluVmFsID0gMCxcbiAgbWF4VmFsID0gMSxcbiAgc3RlcCA9IDAuMSxcbiAgdGlja3NJbnRlcnZhbCA9IDEsXG4gIGRpcmVjdGlvbiA9ICdhbHRlcm5hdGUnLCAvLyBub3JtYWwgfCByZXZlcnNlIHwgYWx0ZXJuYXRlIHwgYWx0ZXJuYXRlLXJldmVyc2UsXG4gIGl0ZXJhdGlvbkNvdW50ID0gSW5maW5pdHlcbiAgLy8gZmlsbE1vZGUgPSAnZm9yd2FyZHMnXG59KSB7XG4gIHRoaXMuYWN0aXZlVmFsID1cbiAgICBzdGFydFZhbCA9PT0gbnVsbCB8fCBzdGFydFZhbCA9PT0gdW5kZWZpbmVkID8gbWluVmFsIDogc3RhcnRWYWw7XG4gIHRoaXMuc3RlcCA9IHN0ZXA7XG4gIHRoaXMucmVmZXJlbmNlVGljayA9IDA7XG4gIHRoaXMuY3VycmVudFRpY2sgPSAwO1xuICB0aGlzLml0ZXJhdGlvbkNvdW50ID0gMDtcblxuICBjb25zdCBnZXQgPSAoKSA9PiB0aGlzLmFjdGl2ZVZhbDtcbiAgY29uc3Qgc2V0ID0gKHZhbCkgPT4gKHRoaXMuYWN0aXZlVmFsID0gdmFsKTtcbiAgY29uc3QgdXBkYXRlID0gKCkgPT4ge1xuICAgIGlmICh0aGlzLml0ZXJhdGlvbkNvdW50ID4gaXRlcmF0aW9uQ291bnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLml0ZXJhdGlvbkNvdW50ICs9IDE7XG4gICAgdGhpcy5jdXJyZW50VGljayArPSAxO1xuXG4gICAgY29uc3QgdGlja3NEaWZmID0gdGhpcy5jdXJyZW50VGljayAtIHRoaXMucmVmZXJlbmNlVGljaztcbiAgICBpZiAodGlja3NEaWZmIDwgdGlja3NJbnRlcnZhbCkge1xuICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlVmFsO1xuICAgIH1cbiAgICB0aGlzLnJlZmVyZW5jZVRpY2sgPSB0aGlzLmN1cnJlbnRUaWNrO1xuXG4gICAgdGhpcy5hY3RpdmVWYWwgKz0gdGhpcy5zdGVwO1xuXG4gICAgaWYgKHRoaXMuYWN0aXZlVmFsID4gbWF4VmFsIHx8IHRoaXMuYWN0aXZlVmFsIDwgbWluVmFsKSB7XG4gICAgICBpZiAoZGlyZWN0aW9uID09PSAnYWx0ZXJuYXRlJykge1xuICAgICAgICB0aGlzLnN0ZXAgPSAtdGhpcy5zdGVwO1xuICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdub3JtYWwnKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlVmFsID0gbWluVmFsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hY3RpdmVWYWw7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBnZXQsXG4gICAgc2V0LFxuICAgIHVwZGF0ZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBBbmltYXRvcjtcbiIsIi8vIGh0dHBzOi8vZ2FtZWRldmVsb3BlcnRpcHMuY29tL3ZlY3Rvci1pbi1nYW1lLWRldmVsb3BtZW50L1xuaW1wb3J0IENvbW1vbnMgZnJvbSAnLi9Db21tb25zJztcblxuY2xhc3MgVmVjdG9yMkQge1xuICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgdGhpcy54ID0geCB8fCAwO1xuICAgIHRoaXMueSA9IHkgfHwgMDtcbiAgfVxuXG4gIC8vIHNjYWxhciBhcml0aG1ldGljc1xuICBhZGQoYSkge1xuICAgIHRoaXMueCArPSBhO1xuICAgIHRoaXMueSArPSBhO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc3ViKGEpIHtcbiAgICB0aGlzLnggLT0gYTtcbiAgICB0aGlzLnkgLT0gYTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIG11bChhKSB7XG4gICAgdGhpcy54ICo9IGE7XG4gICAgdGhpcy55ICo9IGE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkaXYoYSkge1xuICAgIHRoaXMueCAvPSBhO1xuICAgIHRoaXMueSAvPSBhO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gdmVjdG9yIGFyaXRobWV0aWNzXG4gIHN0YXRpYyBhZGQodjEsIHYyKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh2MS54ICsgdjIueCwgdjEueSArIHYyLnkpO1xuICB9XG5cbiAgc3RhdGljIHN1Yih2MSwgdjIpIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHYxLnggLSB2Mi54LCB2MS55IC0gdjIueSk7XG4gIH1cblxuICBzdGF0aWMgbXVsKHYxLCB2Mikge1xuICAgIHJldHVybiBuZXcgVmVjdG9yMkQodjEueCAqIHYyLngsIHYxLnkgKiB2Mi55KTtcbiAgfVxuXG4gIHN0YXRpYyBkaXYodjEsIHYyKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh2MS54IC8gdjIueCwgdjEueSAvIHYyLnkpO1xuICB9XG5cbiAgbWFnKCkge1xuICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KTtcbiAgfVxuXG4gIG1hZ1NxKCkge1xuICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnk7XG4gIH1cblxuICBub3JtYWxpc2UoKSB7XG4gICAgY29uc3QgbWFnID0gdGhpcy5tYWcoKTtcbiAgICByZXR1cm4gdGhpcy5kaXYobWFnKTtcbiAgfVxuXG4gIHNldE1hZyhtYWcpIHtcbiAgICBjb25zdCBjdXJyTWFnID0gdGhpcy5tYWcoKTtcbiAgICByZXR1cm4gdGhpcy5kaXYoY3Vyck1hZykubXVsKG1hZyk7XG4gIH1cblxuICAvLyBzZXRNYWcyKG1hZykge1xuICAvLyAgIGNvbnN0IHRoZXRhID0gdGhpcy5nZXRBbmdsZSgpO1xuICAvLyAgIHRoaXMueCA9IE1hdGguY29zKHRoZXRhKSAqIG1hZztcbiAgLy8gICB0aGlzLnkgPSBNYXRoLnNpbih0aGV0YSkgKiBtYWc7XG4gIC8vICAgcmV0dXJuIHRoaXM7XG4gIC8vIH1cblxuICBsaW1pdE1hZyhsaW1pdEFtdCA9IHsgbWluOiBudWxsLCBtYXg6IG51bGwgfSkge1xuICAgIGNvbnN0IG1hZyA9IHRoaXMubWFnKCk7XG4gICAgaWYgKFxuICAgICAgKENvbW1vbnMuaGFzVmFsdWUobGltaXRBbXQubWF4KSAmJiBtYWcgPiBsaW1pdEFtdC5tYXgpIHx8XG4gICAgICAoQ29tbW9ucy5oYXNWYWx1ZShsaW1pdEFtdC5taW4pICYmIG1hZyA8IGxpbWl0QW10Lm1pbilcbiAgICApIHtcbiAgICAgIHRoaXMubm9ybWFsaXNlKCkubXVsKGxpbWl0QW10KTtcbiAgICB9XG4gIH1cblxuICByb3RhdGUodGhldGEpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXM7XG5cbiAgICB0aGlzLnggPSBNYXRoLmNvcyh0aGV0YSkgKiB4IC0gTWF0aC5zaW4odGhldGEpICogeTtcbiAgICB0aGlzLnkgPSBNYXRoLnNpbih0aGV0YSkgKiB4ICsgTWF0aC5jb3ModGhldGEpICogeTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0QW5nbGUodGhldGEpIHtcbiAgICBjb25zdCBtYWcgPSB0aGlzLm1hZygpO1xuICAgIHRoaXMueCA9IE1hdGguY29zKHRoZXRhKSAqIG1hZztcbiAgICB0aGlzLnkgPSBNYXRoLnNpbih0aGV0YSkgKiBtYWc7XG4gIH1cblxuICBnZXRBbmdsZSgpIHtcbiAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XG4gIH1cblxuICByZXYoKSB7XG4gICAgdGhpcy54ICo9IC0xO1xuICAgIHRoaXMueSAqPSAtMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldlgoKSB7XG4gICAgdGhpcy54ICo9IC0xO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcmV2WSgpIHtcbiAgICB0aGlzLnkgKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiBgVmVjdG9yMkQoJHt0aGlzLnh9LCAke3RoaXMueX0pYDtcbiAgfVxuXG4gIHRvQXJyYXkoKSB7XG4gICAgcmV0dXJuIFt0aGlzLngsIHRoaXMueV07XG4gIH1cblxuICAvKipcbiAgICogaHR0cHM6Ly93d3cubWF0aHNpc2Z1bi5jb20vYWxnZWJyYS92ZWN0b3JzLWRvdC1wcm9kdWN0Lmh0bWxcbiAgICogb3IgfHYxfCAqIHx2MnwgKiBjb3ModGhldGEpXG4gICAqL1xuICBzdGF0aWMgZG90UHJvZHVjdCh2MSwgdjIpIHtcbiAgICByZXR1cm4gdjEueCAqIHYyLnggKyB2MS55ICogdjIueTtcbiAgfVxuXG4gIC8qKlxuICAgKiBodHRwczovL3d3dy5tYXRoc2lzZnVuLmNvbS9hbGdlYnJhL3ZlY3RvcnMtY3Jvc3MtcHJvZHVjdC5odG1sXG4gICAqIG9yIHx2MXwgKiB8djJ8ICogc2luKHRoZXRhKSAqIFVuaXRWZWN0b3JcbiAgICovXG4gIHN0YXRpYyBjcm9zc1Byb2R1Y3QodjEsIHYyKSB7XG4gICAgcmV0dXJuIHYxLnggKiB2Mi55IC0gdjEueSAqIHYyLng7XG4gIH1cblxuICAvLyBQcm9qZWN0aW5nIHYyIG9udG8gdjFcbiAgc3RhdGljIHByb2plY3QodjEsIHYyKSB7XG4gICAgY29uc3Qgc2hhZG93ID0gVmVjdG9yMkQuZG90UHJvZHVjdCh2MSwgdjIpIC8gdjEubWFnU3EoKTtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHYxLnggKiBzaGFkb3csIHYxLnkgKiBzaGFkb3cpO1xuICB9XG5cbiAgc3RhdGljIGRpc3QodjEsIHYyKSB7XG4gICAgY29uc3QgZHggPSB2MS54IC0gdjIueDtcbiAgICBjb25zdCBkeSA9IHYxLnkgLSB2Mi55O1xuICAgIHJldHVybiBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuICB9XG5cbiAgc3RhdGljIGRpc3RTcSh2MSwgdjIpIHtcbiAgICBjb25zdCBkeCA9IHYxLnggLSB2Mi54O1xuICAgIGNvbnN0IGR5ID0gdjEueSAtIHYyLnk7XG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5O1xuICB9XG5cbiAgc3RhdGljIGdldEFuZ2xlKHYxLCB2Mikge1xuICAgIHJldHVybiBNYXRoLmFjb3MoVmVjdG9yMkQuZG90UHJvZHVjdCh2MSwgdjIpIC8gKHYxLm1hZygpICogdjIubWFnKCkpKTtcbiAgfVxuXG4gIHN0YXRpYyBwb2xhclRvQ2FydGVzaWFuKHIsIHRoZXRhKSB7XG4gICAgcmV0dXJuIFtyICogTWF0aC5jb3ModGhldGEpLCByICogTWF0aC5zaW4odGhldGEpXTtcbiAgfVxuXG4gIHN0YXRpYyBjYXJ0ZXNpYW5Ub1BvbGFyKHYxKSB7XG4gICAgcmV0dXJuIFt2MS5tYWcoKSwgTWF0aC5hdGFuKHYxLnkgLyB2MS54KV07XG4gIH1cblxuICAvLyByZXR1cm5zIHVuaXQgdmVjdG9yIHBvaW50aW5nIGluIHJhbmRvbSBkaXJlY3Rpb25cbiAgc3RhdGljIGdldFJhbmRvbShtYWcgPSAxKSB7XG4gICAgY29uc3QgW3gsIHldID0gVmVjdG9yMkQucG9sYXJUb0NhcnRlc2lhbihtYWcsIE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMik7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh4LCB5KTtcbiAgfVxuXG4gIHN0YXRpYyB6ZXJvKCkge1xuICAgIHJldHVybiBuZXcgVmVjdG9yMkQoMCwgMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVjdG9yMkQ7XG4iLCJpbXBvcnQgeyBDb21tb25zIH0gZnJvbSAnLi4vY29yZSc7XG5cbmNsYXNzIF9ub2RlIHtcbiAgY29uc3RydWN0b3IoeyBsYWJlbCwgZW50aXR5LCBjaGlsZHJlbiB9ID0ge30pIHtcbiAgICB0aGlzLmlkID0gQ29tbW9ucy51aWQoKTtcbiAgICB0aGlzLmxhYmVsID0gbGFiZWw7XG4gICAgdGhpcy50eXBlID0gbnVsbDtcbiAgICB0aGlzLmVudGl0eSA9IGVudGl0eSB8fCBudWxsO1xuICAgIHRoaXMucGFyZW50ID0gcGFyZW50IHx8IG51bGw7XG4gICAgdGhpcy5jaGlsZHJlbiA9IG5ldyBNYXAoY2hpbGRyZW4gfHwgW10pO1xuICB9XG5cbiAgYWRkKGVudGl0eSkge1xuICAgIHRoaXMuY2hpbGRyZW4uc2V0KGVudGl0eS5pZCwgZW50aXR5KTtcbiAgICBlbnRpdHkuYWRkVG8odGhpcyk7XG4gIH1cblxuICBhZGRUbyhwYXJlbnQpIHtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnBhcmVudC5vbkFkZENoaWxyZW4odGhpcyk7XG4gIH1cblxuICBvbkFkZENoaWxyZW4oKSB7fVxufVxuXG5leHBvcnQgZGVmYXVsdCBfbm9kZTtcbiIsImltcG9ydCBfbm9kZSBmcm9tICcuL19ub2RlJztcbmltcG9ydCB7IEVOVElUWV9OT0RFX1RZUEVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcblxuLyoqXG4gKiBDYW5kaWRhdGUgZW52aXJvbm1lbnQgdmFyaWFibGVzXG4gKiAtIEdyYXZpdHlcbiAqIC0gQm91bmRzXG4gKiAtIEFpciBEZW5zaXR5XG4gKiAtIFRlbXBlcmF0dXJlXG4gKiAtIEJhY2tncm91bmRcbiAqIC0gTGlnaHRcbiAqIC0gQ2FtZXJhXG4gKiAtIFRyYW5zZm9ybWF0aW9uc1xuICovXG5jbGFzcyBXb3JsZCBleHRlbmRzIF9ub2RlIHtcbiAgY29uc3RydWN0b3IocHJvcHMgPSB7fSkge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7XG4gICAgICBncmF2aXR5ID0gMCxcbiAgICAgIGJvdW5kcyA9IFtcbiAgICAgICAgeyB4OiAtSW5maW5pdHksIHk6IC1JbmZpbml0eSB9LFxuICAgICAgICB7IHg6IEluZmluaXR5LCB5OiBJbmZpbml0eSB9XG4gICAgICBdXG4gICAgfSA9IHByb3BzO1xuXG4gICAgdGhpcy50eXBlID0gRU5USVRZX05PREVfVFlQRVMuV09STEQ7XG4gICAgdGhpcy5ncmF2aXR5ID0gZ3Jhdml0eTtcbiAgICB0aGlzLmJvdW5kcyA9IGJvdW5kcztcbiAgfVxuXG4gIHNldEdyYXZpdHkoZ3Jhdml0eSkge1xuICAgIHRoaXMuZ3Jhdml0eSA9IGdyYXZpdHk7XG4gIH1cblxuICBzZXRCb3VuZHMoYm91bmRzKSB7XG4gICAgdGhpcy5ib3VuZHMgPSBib3VuZHM7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV29ybGQ7XG4iLCJpbXBvcnQgeyBFTlRJVFlfTk9ERV9UWVBFUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IF9ub2RlIGZyb20gXCIuL19ub2RlXCI7XG5cbmNsYXNzIExpZ2h0IGV4dGVuZHMgX25vZGUge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMudHlwZSA9IEVOVElUWV9OT0RFX1RZUEVTLkxJR0hUO1xuICB9XG5cbiAgcmVuZGVyKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlnaHQ7XG4iLCJpbXBvcnQgeyBUUkFOU0ZPUk1fT1JJR0lOLCBFTlRJVFlfTk9ERV9UWVBFUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IF9ub2RlIGZyb20gXCIuL19ub2RlXCI7XG5cbi8vIERPQyA6OiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvQ2FudmFzX0FQSS9UdXRvcmlhbC9UcmFuc2Zvcm1hdGlvbnNcbmNsYXNzIFRyYW5zZm9ybSBleHRlbmRzIF9ub2RlIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnR5cGUgPSBFTlRJVFlfTk9ERV9UWVBFUy5UUkFOU0ZPUk07XG5cbiAgICB0aGlzLm9yaWdpbiA9IHByb3BzLm9yaWdpbiB8fCBUUkFOU0ZPUk1fT1JJR0lOLkNFTlRFUjtcbiAgICB0aGlzLnJvdGF0ZSA9IHByb3BzLnJvdGF0ZTtcbiAgICB0aGlzLnRyYW5zZm9ybSA9IHByb3BzLnRyYW5zZm9ybSB8fCBbXG4gICAgICBbMSwgMCwgMF0sXG4gICAgICBbMCwgMSwgMF0sXG4gICAgICBbMCwgMCwgMV0sXG4gICAgXTtcbiAgfVxuXG4gIG9uQWRkQ2hpbHJlbihjaGlsZCkge1xuICAgIHRoaXMucG9zaXRpb24gPSBjaGlsZC5wb3NpdGlvbjtcbiAgICB0aGlzLmJvdW5kaW5nQm94ID0gY2hpbGQuYm91bmRpbmdCb3g7XG4gICAgdGhpcy53aWR0aCA9IGNoaWxkLndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gY2hpbGQuaGVpZ2h0O1xuXG4gICAgdGhpcy5wYXJlbnQub25BZGRDaGlscmVuKHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZm9ybTtcbiIsImltcG9ydCB7IEVOVElUWV9OT0RFX1RZUEVTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgX25vZGUgZnJvbSBcIi4vX25vZGVcIjtcblxuY2xhc3MgTGF5ZXIgZXh0ZW5kcyBfbm9kZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy50eXBlID0gRU5USVRZX05PREVfVFlQRVMuTEFZRVI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGF5ZXI7XG4iLCJpbXBvcnQgeyBTSEFQRVMsIEVOVElUWV9OT0RFX1RZUEVTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuLi9jb3JlL1ZlY3RvcjJEXCI7XG5pbXBvcnQgQ29tbW9ucyBmcm9tIFwiLi4vY29yZS9Db21tb25zXCI7XG5cbmltcG9ydCBfbm9kZSBmcm9tIFwiLi9fbm9kZVwiO1xuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSB7XG4gIHNoYXBlOiBTSEFQRVMuUkVDVEFOR0xFLFxuICBwb3NpdGlvbjogWzAsIDBdLFxuICBkZWJ1ZzogZmFsc2UsXG4gIGJvdW5kaW5nQm94OiB7XG4gICAgbWFyZ2luczogWzAsIDAsIDAsIDBdLFxuICAgIHNoYXBlOiBTSEFQRVMuUkVDVEFOR0xFLFxuICAgIGNvbG9yOiBcInJlZFwiLFxuICB9LFxufTtcblxuLy8gU3R5bGVzIGFuZCB0ZXh0dXJlcyB3aWxsIGJlIGFwcGxpZWQgdG8gYWxsIGNoaWxkcmVuIGFzIHdlbGxcbi8vIGNoaWxkcmVuIGNhbiBoYXZlIG92ZXJyaWRlbiBzdHlsZXMgYXMgd2VsbCwgaW5oZXJpdCB1bnNwZWNpZmllZCB2YWx1ZXNcbmNsYXNzIEJvZHkgZXh0ZW5kcyBfbm9kZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3Qge1xuICAgICAgc2hhcGUgPSBkZWZhdWx0U3RhdGUuc2hhcGUsXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIHJhZGl1cyxcbiAgICAgIHN0YXJ0QW5nbGUsXG4gICAgICBlbmRBbmdsZSxcbiAgICAgIHZlcnRpY2VzLFxuICAgICAgZWRkZ2VzLFxuXG4gICAgICBwb3NpdGlvbiA9IGRlZmF1bHRTdGF0ZS5wb3NpdGlvbixcblxuICAgICAgc3R5bGVzLCAvLyBiYWNrZ3JvdW5kQ29sb3IsIGJhY2tncm91bmRJbWFnZSwgYmFja2dyb3VuZEdyYWRpZW50LCBib3JkZXJDb2xvciwgYm9yZGVyU2l6ZVxuXG4gICAgICBkZWJ1ZyA9IGRlZmF1bHRTdGF0ZS5kZWJ1ZyxcbiAgICAgIC8vIGNvbGxpc2lvbiBib3g/XG4gICAgICBib3VuZGluZ0JveCA9IGRlZmF1bHRTdGF0ZS5ib3VuZGluZ0JveCxcblxuICAgICAgLi4ucmVzdFByb3BzXG4gICAgfSA9IHByb3BzO1xuXG4gICAgdGhpcy50eXBlID0gRU5USVRZX05PREVfVFlQRVMuQk9EWTtcblxuICAgIHRoaXMuc2hhcGUgPSBzaGFwZTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XG4gICAgdGhpcy5zdGFydEFuZ2xlID0gc3RhcnRBbmdsZTtcbiAgICB0aGlzLmVuZEFuZ2xlID0gZW5kQW5nbGU7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IHZlcnRpY2VzO1xuICAgIHRoaXMuZWRkZ2VzID0gZWRkZ2VzO1xuXG4gICAgLy8gc2hvdWxkIEkgc2F2ZSBjb3JuZXJzPyBhbmQgZWRnZXM/XG4gICAgLy8gdXNlcnMgd2lsbCBiZSBnaXZpbmcgY2VudGVyIHBvcyBieSBkZWZhdWx0XG4gICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IyRChwb3NpdGlvblswXSwgcG9zaXRpb25bMV0pO1xuXG4gICAgdGhpcy5zdHlsZXMgPSBzdHlsZXM7XG5cbiAgICB0aGlzLmRlYnVnID0gZGVidWc7XG4gICAgdGhpcy5ib3VuZGluZ0JveCA9IHsgLi4uZGVmYXVsdFN0YXRlLmJvdW5kaW5nQm94LCAuLi5ib3VuZGluZ0JveCB9O1xuXG4gICAgdGhpcy5yZXN0UHJvcHMgPSByZXN0UHJvcHM7XG4gIH1cblxuICBvbkFkZENoaWxyZW4oY2hpbGQpIHtcbiAgICBpZiAoIXRoaXMucG9zaXRpb24gfHwgIWNoaWxkLnBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qge1xuICAgICAgcG9zaXRpb246IGNQb3NpdGlvbixcbiAgICAgIGJvdW5kaW5nQm94OiB7IG1hcmdpbnM6IGNCb3VuZGluZ0JveE1hcmdpbiB9LFxuICAgICAgd2lkdGg6IGNXaWR0aCxcbiAgICAgIGhlaWdodDogY0hlaWdodCxcbiAgICB9ID0gY2hpbGQ7XG4gICAgY29uc3Qge1xuICAgICAgcG9zaXRpb246IHBQb3NpdGlvbixcbiAgICAgIGJvdW5kaW5nQm94OiB7IG1hcmdpbnM6IHBCb3VuZGluZ0JveE1hcmdpbiB9LFxuICAgICAgd2lkdGg6IHBXaWR0aCxcbiAgICAgIGhlaWdodDogcEhlaWdodCxcbiAgICB9ID0gdGhpcztcblxuICAgIGNvbnN0IHhNaW4gPSBDb21tb25zLm1pbmltdW0oXG4gICAgICBwUG9zaXRpb24ueCAtIHBCb3VuZGluZ0JveE1hcmdpblszXSxcbiAgICAgIGNQb3NpdGlvbi54IC0gY0JvdW5kaW5nQm94TWFyZ2luWzNdXG4gICAgKTtcbiAgICBjb25zdCB5TWluID0gQ29tbW9ucy5taW5pbXVtKFxuICAgICAgcFBvc2l0aW9uLnkgLSBwQm91bmRpbmdCb3hNYXJnaW5bMF0sXG4gICAgICBjUG9zaXRpb24ueSAtIGNCb3VuZGluZ0JveE1hcmdpblswXVxuICAgICk7XG5cbiAgICBjb25zdCB4TWF4ID0gQ29tbW9ucy5tYXhpbXVtKFxuICAgICAgcFBvc2l0aW9uLnggKyBwV2lkdGggKyBwQm91bmRpbmdCb3hNYXJnaW5bMV0sXG4gICAgICBjUG9zaXRpb24ueCArIGNXaWR0aCArIGNCb3VuZGluZ0JveE1hcmdpblsxXVxuICAgICk7XG4gICAgY29uc3QgeU1heCA9IENvbW1vbnMubWF4aW11bShcbiAgICAgIHBQb3NpdGlvbi55ICsgcEhlaWdodCArIHBCb3VuZGluZ0JveE1hcmdpblsyXSxcbiAgICAgIGNQb3NpdGlvbi55ICsgY0hlaWdodCArIGNCb3VuZGluZ0JveE1hcmdpblsyXVxuICAgICk7XG5cbiAgICB0aGlzLmJvdW5kaW5nQm94Lm1hcmdpbnMgPSBbXG4gICAgICBwUG9zaXRpb24ueSAtIHlNaW4sXG4gICAgICB4TWF4IC0gKHBQb3NpdGlvbi54ICsgcFdpZHRoKSxcbiAgICAgIHlNYXggLSAocFBvc2l0aW9uLnkgKyBwSGVpZ2h0KSxcbiAgICAgIHBQb3NpdGlvbi54IC0geE1pbixcbiAgICBdO1xuXG4gICAgdGhpcy5wYXJlbnQub25BZGRDaGlscmVuKHRoaXMpO1xuICB9XG59XG5cbkJvZHkuZ2V0RGVidWdNZXNzYWdlID0gKGJvZHkpID0+IHtcbiAgcmV0dXJuIGBQb3MgOjogJHtib2R5LnBvc2l0aW9uLnh9LCAke2JvZHkucG9zaXRpb24ueX1gO1xufTtcblxuQm9keS5jcmVhdGVBcmMgPSAoe1xuICByYWRpdXMsXG4gIHN0YXJ0QW5nbGUgPSAwLFxuICBlbmRBbmdsZSA9IE1hdGguUEkgKiAyLFxuICBwb3NpdGlvbixcbiAgLi4ucmVzdFByb3BzXG59KSA9PiB7XG4gIHJldHVybiBuZXcgQm9keSh7XG4gICAgc2hhcGU6IFNIQVBFUy5BUkMsXG4gICAgd2lkdGg6IDIgKiByYWRpdXMsXG4gICAgaGVpZ2h0OiAyICogcmFkaXVzLFxuICAgIHN0YXJ0QW5nbGUsXG4gICAgZW5kQW5nbGUsXG4gICAgcmFkaXVzLFxuICAgIHBvc2l0aW9uLFxuICAgIC4uLnJlc3RQcm9wcyxcbiAgfSk7XG59O1xuXG5Cb2R5LmNyZWF0ZVJlY3RhbmdsZSA9ICh7IHdpZHRoLCBoZWlnaHQsIHBvc2l0aW9uLCAuLi5yZXN0UHJvcHMgfSkgPT4ge1xuICByZXR1cm4gbmV3IEJvZHkoe1xuICAgIHNoYXBlOiBTSEFQRVMuUkVDVEFOR0xFLFxuICAgIHdpZHRoLFxuICAgIGhlaWdodCxcbiAgICBwb3NpdGlvbixcbiAgICAuLi5yZXN0UHJvcHMsXG4gIH0pO1xufTtcblxuQm9keS5jcmVhdGVQb2x5Z29uID0gKHsgdmVydGljZXMsIGVkZGdlcywgcG9zaXRpb24sIC4uLnJlc3RQcm9wcyB9KSA9PiB7XG4gIGxldCBtaW5YID0gMDtcbiAgbGV0IG1pblkgPSAwO1xuXG4gIGxldCBtYXhYID0gMDtcbiAgbGV0IG1heFkgPSAwO1xuXG4gIHZlcnRpY2VzLm1hcCgoW3gsIHldKSA9PiB7XG4gICAgbWluWCA9IENvbW1vbnMubWluaW11bSh4LCBtaW5YKTtcbiAgICBtYXhYID0gQ29tbW9ucy5tYXhpbXVtKHgsIG1heFgpO1xuXG4gICAgbWluWSA9IENvbW1vbnMubWluaW11bSh5LCBtaW5ZKTtcbiAgICBtYXhZID0gQ29tbW9ucy5tYXhpbXVtKHksIG1heFkpO1xuICB9KTtcbiAgcmV0dXJuIG5ldyBCb2R5KHtcbiAgICBzaGFwZTogU0hBUEVTLlBPTFlHT04sXG4gICAgd2lkdGg6IG1heFggLSBtaW5YLFxuICAgIGhlaWdodDogbWF4WSAtIG1pblksXG4gICAgcG9zaXRpb24sXG4gICAgdmVydGljZXMsXG4gICAgZWRkZ2VzLFxuICAgIC4uLnJlc3RQcm9wcyxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuIiwiaW1wb3J0IHsgQk9EWV9UWVBFLCBFTlRJVFlfTk9ERV9UWVBFUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vY29yZS9WZWN0b3IyRFwiO1xuXG5pbXBvcnQgQm9keSBmcm9tIFwiLi9Cb2R5XCI7XG5cbi8vIC0tLS0tIEV2YWx1dGF0ZSBFc3NlbnRpYWxzIC0tLS0tLS1cbi8vIEJvdW5kaW5nIEJveFxuLy8gQ2VudGVyIG9mIG1hc3Ncbi8vIFZlY3RvciBCb3hcbi8vIExhYmVsIEJveFxuLy8gQ29sbGlzaW9uIFBvaW50c1xuLy8gU3VyZmFjZSBBcmVhXG4vLyBvbkNvbGxpc2lvbigpIHt9XG4vLyBnZXRTcGVlZCgpXG4vLyBnZXREaXJlY3Rpb24oKVxuY2xhc3MgUGh5c2ljc0JvZHkgZXh0ZW5kcyBCb2R5IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7XG4gICAgICAvLyBjaGVjayBpZiBjb2xsaXNpb24gY2FuIG9jY2VyIHVzaW5nIHRoZXNlXG4gICAgICBib2R5VHlwZSA9IEJPRFlfVFlQRS5LSU5FTUFUSUMsXG4gICAgICBjYXRlZ29yeU1hc2sgPSAwYjAwMSxcbiAgICAgIGNvbGxpc2lvbk1hc2sgPSAwYjExMSxcblxuICAgICAgbWFzcyxcbiAgICAgIHJlc3RpdHV0aW9uLFxuICAgICAgLy8gYm91bnhlXG4gICAgICBmcmljdGlvbixcbiAgICAgIGdyYXZpdHlTY2FsZSxcblxuICAgICAgbGluZWFyRHJhZyxcbiAgICAgIGFuZ3VsYXJEcmFnLFxuXG4gICAgICB2ZWxvY2l0eSxcbiAgICAgIC8vIHNwZWVkXG4gICAgICBkaXJlY3Rpb24sIC8vIDwtLS0tLS0gPyB2eCA9IGNvcyhhKSpzcGVlZCAgJiYgdnkgPSBzaW4oYSkqc3BlZWQgXG4gICAgICBhY2NlbGVyYXRpb24sXG4gICAgfSA9IHByb3BzO1xuXG4gICAgdGhpcy50eXBlID0gRU5USVRZX05PREVfVFlQRVMuUEhZU0lDU19CT0RZO1xuXG4gICAgdGhpcy5ib2R5VHlwZSA9IGJvZHlUeXBlO1xuICAgIHRoaXMuY2F0ZWdvcnlNYXNrID0gY2F0ZWdvcnlNYXNrO1xuICAgIHRoaXMuY29sbGlzaW9uTWFzayA9IGNvbGxpc2lvbk1hc2s7XG5cbiAgICB0aGlzLm1hc3MgPSBtYXNzO1xuICAgIHRoaXMucmVzdGl0dXRpb24gPSByZXN0aXR1dGlvbjtcbiAgICB0aGlzLmZyaWN0aW9uID0gZnJpY3Rpb247XG4gICAgdGhpcy5ncmF2aXR5U2NhbGUgPSBncmF2aXR5U2NhbGU7XG5cbiAgICB0aGlzLmxpbmVhckRyYWcgPSBsaW5lYXJEcmFnO1xuICAgIHRoaXMuYW5ndWxhckRyYWcgPSBhbmd1bGFyRHJhZztcblxuICAgIHRoaXMudmVsb2NpdHkgPSBuZXcgVmVjdG9yMkQodmVsb2NpdHlbMF0sIHZlbG9jaXR5WzFdKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IG5ldyBWZWN0b3IyRChkaXJlY3Rpb25bMF0sIGRpcmVjdGlvblsxXSk7XG4gICAgdGhpcy5hY2NlbGVyYXRpb24gPSBuZXcgVmVjdG9yMkQoYWNjZWxlcmF0aW9uWzBdLCBhY2NlbGVyYXRpb25bMV0pO1xuICB9XG59XG5cblBoeXNpY3NCb2R5LmdldERlYnVnTWVzc2FnZSA9IChib2R5KSA9PiB7XG4gIHJldHVybiBgXG4gICAgUG9zIDo6ICR7Ym9keS5wb3NpdGlvbi54fSwgJHtib2R5LnBvc2l0aW9uLnl9IFxcbiBcbiAgICBWZWwgOjogJHtib2R5LnZlbG9jaXR5Lnh9LCAke2JvZHkudmVsb2NpdHkueX0gXFxuXG4gICAgQWNjIDo6ICR7Ym9keS5hY2NlbGVyYXRpb24ueH0sICR7Ym9keS5hY2NlbGVyYXRpb24ueX0gXFxuXG4gIGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaHlzaWNzQm9keTtcbiIsImltcG9ydCB7IEJPRFlfVFlQRSwgRU5USVRZX05PREVfVFlQRVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uL2NvcmUvVmVjdG9yMkRcIjtcblxuaW1wb3J0IEJvZHkgZnJvbSBcIi4vQm9keVwiO1xuXG5jbGFzcyBGbHVpZEJvZHkgZXh0ZW5kcyBCb2R5IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBjb25zdCB7XG4gICAgICAvLyBjaGVjayBpZiBjb2xsaXNpb24gY2FuIG9jY2VyIHVzaW5nIHRoZXNlXG4gICAgICBib2R5VHlwZSA9IEJPRFlfVFlQRS5LSU5FTUFUSUMsXG4gICAgICBjYXRlZ29yeU1hc2sgPSAwYjAwMSxcbiAgICAgIGNvbGxpc2lvbk1hc2sgPSAwYjExMSxcblxuICAgICAgbWFzcyxcbiAgICAgIHJlc3RpdHV0aW9uLFxuICAgICAgZnJpY3Rpb24sXG4gICAgICBncmF2aXR5U2NhbGUsXG5cbiAgICAgIGxpbmVhckRyYWcsXG4gICAgICBhbmd1bGFyRHJhZyxcblxuICAgICAgdmVsb2NpdHksXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBhY2NlbGVyYXRpb24sXG4gICAgfSA9IHByb3BzO1xuXG4gICAgdGhpcy50eXBlID0gRU5USVRZX05PREVfVFlQRVMuRkxVSURfQk9EWTtcblxuICAgIHRoaXMuYm9keVR5cGUgPSBib2R5VHlwZTtcbiAgICB0aGlzLmNhdGVnb3J5TWFzayA9IGNhdGVnb3J5TWFzaztcbiAgICB0aGlzLmNvbGxpc2lvbk1hc2sgPSBjb2xsaXNpb25NYXNrO1xuXG4gICAgdGhpcy5tYXNzID0gbWFzcztcbiAgICB0aGlzLnJlc3RpdHV0aW9uID0gcmVzdGl0dXRpb247XG4gICAgdGhpcy5mcmljdGlvbiA9IGZyaWN0aW9uO1xuICAgIHRoaXMuZ3Jhdml0eVNjYWxlID0gZ3Jhdml0eVNjYWxlO1xuXG4gICAgdGhpcy5saW5lYXJEcmFnID0gbGluZWFyRHJhZztcbiAgICB0aGlzLmFuZ3VsYXJEcmFnID0gYW5ndWxhckRyYWc7XG5cbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcjJEKHZlbG9jaXR5WzBdLCB2ZWxvY2l0eVsxXSk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yMkQoZGlyZWN0aW9uWzBdLCBkaXJlY3Rpb25bMV0pO1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gbmV3IFZlY3RvcjJEKGFjY2VsZXJhdGlvblswXSwgYWNjZWxlcmF0aW9uWzFdKTtcbiAgfVxufVxuXG5GbHVpZEJvZHkuZ2V0RGVidWdNZXNzYWdlID0gKGJvZHkpID0+IHtcbiAgcmV0dXJuIGBcbiAgICBQb3MgOjogJHtib2R5LnBvc2l0aW9uLnh9LCAke2JvZHkucG9zaXRpb24ueX0gXFxuIFxuICAgIFZlbCA6OiAke2JvZHkudmVsb2NpdHkueH0sICR7Ym9keS52ZWxvY2l0eS55fSBcXG5cbiAgICBBY2MgOjogJHtib2R5LmFjY2VsZXJhdGlvbi54fSwgJHtib2R5LmFjY2VsZXJhdGlvbi55fSBcXG5cbiAgYDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsdWlkQm9keTtcbiIsImltcG9ydCBXb3JsZCBmcm9tICcuL1dvcmxkJztcbmltcG9ydCBMaWdodCBmcm9tICcuL0xpZ2h0JztcbmltcG9ydCBUcmFuc2Zvcm0gZnJvbSAnLi9UcmFuc2Zvcm0nO1xuaW1wb3J0IExheWVyIGZyb20gJy4vTGF5ZXInO1xuaW1wb3J0IEJvZHkgZnJvbSAnLi9Cb2R5JztcbmltcG9ydCBQaHlzaWNzQm9keSBmcm9tICcuL1BoeXNpY3NCb2R5JztcbmltcG9ydCBGbHVpZEJvZHkgZnJvbSAnLi9GbHVpZEJvZHknO1xuXG5jbGFzcyBFbnRpdHlNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJlbnRJbmRleCA9IG5ldyBNYXAoKTtcbiAgICB0aGlzLnJvb3QgPSBudWxsO1xuICB9XG5cbiAgc2V0Um9vdChlbGVtKSB7XG4gICAgdGhpcy5yb290ID0gZWxlbTtcbiAgfVxuXG4gIGdldFJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgfVxuXG4gIGdldEl0ZW1zVG9SZW5kZXIobm9kZSkge1xuICAgIGNvbnN0IGVsZW0gPSBub2RlIHx8IHRoaXMucm9vdDtcbiAgICBsZXQgaXRlbXMgPSBbXTtcblxuICAgIGl0ZW1zLnB1c2goZWxlbSk7XG5cbiAgICBpZiAoZWxlbS5jaGlsZHJlbiAmJiBlbGVtLmNoaWxkcmVuLnNpemUpIHtcbiAgICAgIGZvciAoY29uc3QgWywgdmFsXSBvZiBlbGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGl0ZW1zID0gaXRlbXMuY29uY2F0KHRoaXMuZ2V0SXRlbXNUb1JlbmRlcih2YWwpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgZ2V0RW50aXR5QnlJZCgpIHt9XG59XG5cbkVudGl0eU1hbmFnZXIuY3JlYXRlV29ybGQgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIG5ldyBXb3JsZChwcm9wcyk7XG59O1xuXG5FbnRpdHlNYW5hZ2VyLmNyZWF0ZUxpZ2h0ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiBuZXcgTGlnaHQocHJvcHMpO1xufTtcblxuRW50aXR5TWFuYWdlci5jcmVhdGVUcmFuc2Zvcm0gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIG5ldyBUcmFuc2Zvcm0ocHJvcHMpO1xufTtcblxuRW50aXR5TWFuYWdlci5jcmVhdGVMYXllciA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gbmV3IExheWVyKHByb3BzKTtcbn07XG5cbkVudGl0eU1hbmFnZXIuY3JlYXRlQm9keSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gbmV3IEJvZHkocHJvcHMpO1xufTtcblxuRW50aXR5TWFuYWdlci5jcmVhdGVQaHlzaWNzQm9keSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gbmV3IFBoeXNpY3NCb2R5KHByb3BzKTtcbn07XG5cbkVudGl0eU1hbmFnZXIuY3JlYXRlRmx1aWRCb2R5ID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiBuZXcgRmx1aWRCb2R5KHByb3BzKTtcbn07XG5cbkVudGl0eU1hbmFnZXIuV29ybGQgPSBXb3JsZDtcbkVudGl0eU1hbmFnZXIuTGlnaHQgPSBMaWdodDtcbkVudGl0eU1hbmFnZXIuVHJhbnNmb3JtID0gVHJhbnNmb3JtO1xuRW50aXR5TWFuYWdlci5MYXllciA9IExheWVyO1xuRW50aXR5TWFuYWdlci5Cb2R5ID0gQm9keTtcbkVudGl0eU1hbmFnZXIuUGh5c2ljc0JvZHkgPSBQaHlzaWNzQm9keTtcbkVudGl0eU1hbmFnZXIuRmx1aWRCb2R5ID0gRmx1aWRCb2R5O1xuXG5leHBvcnQgZGVmYXVsdCBFbnRpdHlNYW5hZ2VyO1xuIiwiLyoqXG4gKiBAdG9kb1xuICogLSBab29tIGluIC8gWm9vbSBvdXRcbiAqIC0gUm90YXRpb25cbiAqIC0gQ2FtZXJhIHR5cGVzIFtmb2xsb3cgYWxsLCBmb2xsb3cteCwgZm9sbG93LXksIGV0Yy5dXG4gKi9cbmNsYXNzIENhbWVyYSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICBjb25zdCB7IHBvc2l0aW9uLCByb3RhdGlvbiA9IDAsIHNjcmVlbiB9ID0gcHJvcHM7XG5cbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5yb3RhdGlvbiA9IHJvdGF0aW9uO1xuICAgIHRoaXMuc2NyZWVuID0gc2NyZWVuO1xuICAgIHRoaXMudGFyZ2V0ID0gbnVsbDtcbiAgfVxuXG4gIHNldFJvdGF0aW9uKGFuZ2xlKSB7XG4gICAgdGhpcy5yb3RhdGlvbiA9IGFuZ2xlO1xuICB9XG5cbiAgc2V0UG9zaXRpb24ocG9zKSB7XG4gICAgdGhpcy5wb3NpdGlvbi54ID0gcG9zLng7XG4gICAgdGhpcy5wb3NpdGlvbi55ID0gcG9zLnk7XG4gIH1cblxuICBiaW5kVGFyZ2V0KHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGlmICh0aGlzLnRhcmdldCkge1xuICAgICAgY29uc3Qge1xuICAgICAgICBwb3NpdGlvbjogeyB4LCB5IH0sXG4gICAgICB9ID0gdGhpcy50YXJnZXQ7XG4gICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc2NyZWVuO1xuXG4gICAgICB0aGlzLnBvc2l0aW9uLnggPSB4IC0gd2lkdGggLyAyO1xuICAgICAgdGhpcy5wb3NpdGlvbi55ID0geSAtIGhlaWdodCAvIDI7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbWVyYTtcbiIsImltcG9ydCB7IFZlY3RvcjJELCBDb21tb25zIH0gZnJvbSBcIi4uL2NvcmVcIjtcbmltcG9ydCB7IEVOVElUWV9OT0RFX1RZUEVTLCBTSEFQRVMsIFRSQU5TRk9STV9PUklHSU4gfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmltcG9ydCBDYW1lcmEgZnJvbSBcIi4vQ2FtZXJhXCI7XG5cbi8vIERPQyA6OiAgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc19BUEkvVHV0b3JpYWxcbmNsYXNzIFJlbmRlcmVyIHtcbiAgaW5pdCh7IHN0YXRlLCBtYW5hZ2VycyB9KSB7XG4gICAgdGhpcy5wcm9wcyA9IHtcbiAgICAgIHJlc291cmNlTWFuYWdlcjogbWFuYWdlcnMucmVzb3VyY2VNYW5hZ2VyLFxuICAgICAgc2NyZWVuOiBzdGF0ZS5zY3JlZW4sXG4gICAgICBjYW52YXM6IHN0YXRlLmNhbnZhcyxcbiAgICB9O1xuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh7XG4gICAgICBwb3NpdGlvbjogVmVjdG9yMkQuemVybygpLFxuICAgICAgcm90YXRpb246IDAsXG4gICAgICBzY3JlZW46IHN0YXRlLnNjcmVlbixcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNjZW5lIEdyYXBoIG1ldGhvZFxuICAvLyAtIGRlcHRoIGZpcnN0IHJlbmRlclxuICAvLyAtIGNoZWNrIGlmIGluIGNhbWVyYSB2aWV3cG9ydCAoY3VubmluZylcbiAgLy8gLSByYXl0cmFjaW5nIHVzaW5nIGxpZ2h0XG4gIC8vIC0gQ2hlY2tzIHdoaWNoIG9uZXMgYXJlIGlkZWFsIGFuZCBkb24ndCBuZWVkIHVwZGF0aW5nXG4gIC8vICAgaS5lLiBjaGVja3MgaWYgZWxlbWVudHMgYXJlIHNsZWVwaW5nXG4gIHJlbmRlclRyZWUocm9vdCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhbnZhczogeyBjb250ZXh0IH0sXG4gICAgICBzY3JlZW46IHsgd2lkdGgsIGhlaWdodCB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNhbWVyYSA9IHRoaXMuY2FtZXJhO1xuXG4gICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XG4gICAgY2FtZXJhLnVwZGF0ZSgpO1xuXG4gICAgdGhpcy5yZW5kZXJOb2RlKHJvb3QpO1xuICB9XG5cbiAgcmVuZGVyTm9kZShlbGVtZW50KSB7XG4gICAgY29uc3Qge1xuICAgICAgY2FudmFzOiB7IGNvbnRleHQgfSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYTtcblxuICAgIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgICBjYXNlIEVOVElUWV9OT0RFX1RZUEVTLldPUkxEOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRU5USVRZX05PREVfVFlQRVMuTElHSFQ6XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFTlRJVFlfTk9ERV9UWVBFUy5UUkFOU0ZPUk06XG4gICAgICAgIHRoaXMuYXBwbHlUcmFuc2Zvcm0oY29udGV4dCwgZWxlbWVudCwgY2FtZXJhKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVOVElUWV9OT0RFX1RZUEVTLkJPRFk6XG4gICAgICBjYXNlIEVOVElUWV9OT0RFX1RZUEVTLlBIWVNJQ1NfQk9EWTpcbiAgICAgIGNhc2UgRU5USVRZX05PREVfVFlQRVMuRkxVSURfQk9EWToge1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLnJlbmRlckJvZHkoZWxlbWVudCwge1xuICAgICAgICAgIGNvbnRleHQsXG4gICAgICAgICAgY2FtZXJhLFxuICAgICAgICB9KTtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcblxuICAgICAgICBpZiAoZWxlbWVudC5kZWJ1Zykge1xuICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgdGhpcy5kcmF3Qm91bmRpbmdCb3goY29udGV4dCwgZWxlbWVudCwgY2FtZXJhKTtcbiAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBpZiAoZWxlbWVudC5yZW5kZXIpIHtcbiAgICAgICAgICBlbGVtZW50LnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBbLCB2YWxdIG9mIGVsZW1lbnQuY2hpbGRyZW4pIHtcbiAgICAgIHRoaXMucmVuZGVyTm9kZSh2YWwpO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZWxlbWVudC50eXBlKSB7XG4gICAgICBjYXNlIEVOVElUWV9OT0RFX1RZUEVTLlRSQU5TRk9STTpcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBpZiAoZWxlbWVudC5jbGVhbnVwKSB7XG4gICAgICAgICAgZWxlbWVudC5jbGVhbnVwKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRTY3JlZW5Qb3NpdGlvbihwb3MsIGNhbWVyYSkge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBDb21tb25zLnJvdW5kT2ZmKHBvcy54IC0gY2FtZXJhLnBvc2l0aW9uLngpLFxuICAgICAgeTogQ29tbW9ucy5yb3VuZE9mZihwb3MueSAtIGNhbWVyYS5wb3NpdGlvbi55KSxcbiAgICB9O1xuICB9XG5cbiAgYXBwbHlUcmFuc2Zvcm0oY29udGV4dCwgZWxlbWVudCwgY2FtZXJhKSB7XG4gICAgY29uc3Qge1xuICAgICAgcm90YXRlLFxuICAgICAgdHJhbnNmb3JtOiBbW2EsIGMsIGVdLCBbYiwgZCwgZl1dLFxuICAgICAgYm91bmRpbmdCb3g6IHsgbWFyZ2lucyB9LFxuICAgICAgcG9zaXRpb24sXG4gICAgICB3aWR0aCxcbiAgICAgIGhlaWdodCxcbiAgICAgIG9yaWdpbixcbiAgICB9ID0gZWxlbWVudDtcblxuICAgIGxldCBjb29yZHM7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvcmlnaW4pKSB7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuZ2V0U2NyZWVuUG9zaXRpb24oXG4gICAgICAgIHsgeDogb3JpZ2luWzBdLCB5OiBvcmlnaW5bMV0gfSxcbiAgICAgICAgY2FtZXJhXG4gICAgICApO1xuICAgICAgY29vcmRzID0gW3gsIHldO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuZ2V0U2NyZWVuUG9zaXRpb24ocG9zaXRpb24sIGNhbWVyYSk7XG4gICAgICBjb25zdCB4TWF4ID0geCArIHdpZHRoICsgbWFyZ2luc1sxXTtcbiAgICAgIGNvbnN0IHhNaW4gPSB4IC0gbWFyZ2luc1szXTtcblxuICAgICAgY29uc3QgeU1heCA9IHkgKyBoZWlnaHQgKyBtYXJnaW5zWzJdO1xuICAgICAgY29uc3QgeU1pbiA9IHkgLSBtYXJnaW5zWzBdO1xuXG4gICAgICBjb25zdCB4TWlkID0geE1pbiArICh4TWF4IC0geE1pbikgLyAyO1xuICAgICAgY29uc3QgeU1pZCA9IHlNaW4gKyAoeU1heCAtIHlNaW4pIC8gMjtcblxuICAgICAgc3dpdGNoIChvcmlnaW4pIHtcbiAgICAgICAgY2FzZSBUUkFOU0ZPUk1fT1JJR0lOLkxFRlRfVE9QOlxuICAgICAgICAgIGNvb3JkcyA9IFt4TWluLCB5TWluXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUUkFOU0ZPUk1fT1JJR0lOLlJJR0hUX1RPUDpcbiAgICAgICAgICBjb29yZHMgPSBbeE1heCwgeU1pbl07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVFJBTlNGT1JNX09SSUdJTi5SSUdIVF9CT1RUT006XG4gICAgICAgICAgY29vcmRzID0gW3hNYXgsIHlNYXhdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRSQU5TRk9STV9PUklHSU4uTEVGVF9CT1RUT006XG4gICAgICAgICAgY29vcmRzID0gW3hNaW4sIHlNYXhdO1xuICAgICAgICAgIGNvb3Jkc1swXSA9IHhNaW47XG4gICAgICAgICAgY29vcmRzWzFdID0geU1heDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUUkFOU0ZPUk1fT1JJR0lOLkNFTlRFUjpcbiAgICAgICAgICBjb29yZHMgPSBbeE1pZCwgeU1pZF07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29vcmRzID0gWzAsIDBdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRleHQuc2F2ZSgpO1xuXG4gICAgY29udGV4dC50cmFuc2Zvcm0oYSwgYiwgYywgZCwgZSArIGNvb3Jkc1swXSwgZiArIGNvb3Jkc1sxXSk7XG4gICAgcm90YXRlICYmIGNvbnRleHQucm90YXRlKChNYXRoLlBJICogcm90YXRlKSAvIDE4MCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoLWNvb3Jkc1swXSwgLWNvb3Jkc1sxXSk7XG4gIH1cblxuICByZW5kZXJCb2R5KGVsZW1lbnQsIGVudlByb3BzKSB7XG4gICAgY29uc3QgeyBjb250ZXh0LCBjYW1lcmEgfSA9IGVudlByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIGltYWdlLFxuICAgICAgYmFja2dyb3VuZEltYWdlLFxuICAgICAgcmVwZWF0LFxuICAgICAgYmFja2dyb3VuZENvbG9yLFxuICAgICAgYmFja2dyb3VuZEdyYWRpZW50LFxuICAgICAgYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJTaXplLFxuICAgIH0gPSBlbGVtZW50LnN0eWxlcztcblxuICAgIGNvbnN0IF9pbWFnZSA9IGltYWdlICYmIHRoaXMucHJvcHMucmVzb3VyY2VNYW5hZ2VyLmdldChpbWFnZSk7XG4gICAgX2ltYWdlICYmIHRoaXMucmVuZGVySW1hZ2UoY29udGV4dCwgZWxlbWVudCwgY2FtZXJhLCBfaW1hZ2UpO1xuXG4gICAgaWYgKCFiYWNrZ3JvdW5kQ29sb3IgJiAhYm9yZGVyQ29sb3IgJiAhYm9yZGVyU2l6ZSAmICFfYmdJbWFnZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG9yIHx8IFwidHJhbnNwYXJlbnRcIjtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gYm9yZGVyQ29sb3IgfHwgXCJ0cmFuc3BhcmVudFwiO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gYm9yZGVyU2l6ZSB8fCAwO1xuXG4gICAgY29uc3QgX2JnSW1hZ2UgPVxuICAgICAgYmFja2dyb3VuZEltYWdlICYmIHRoaXMucHJvcHMucmVzb3VyY2VNYW5hZ2VyLmdldChiYWNrZ3JvdW5kSW1hZ2UpO1xuXG4gICAgaWYgKF9iZ0ltYWdlKSB7XG4gICAgICBjb25zdCBwYXR0ZXJuID0gY29udGV4dC5jcmVhdGVQYXR0ZXJuKF9iZ0ltYWdlLCByZXBlYXQgfHwgXCJyZXBlYXRcIik7XG4gICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHBhdHRlcm47XG4gICAgfSBlbHNlIGlmIChiYWNrZ3JvdW5kR3JhZGllbnQpIHtcbiAgICAgIGNvbnNvbGUud2FybihcIkdyYWRpZW50cyBhcmUgbm90IHN1cHBvcnRlZCBmb3Igbm93XCIpO1xuICAgIH1cblxuICAgIGlmIChlbGVtZW50LnNoYXBlID09PSBTSEFQRVMuUkVDVEFOR0xFKSB7XG4gICAgICB0aGlzLnJlbmRlclJlY3QoY29udGV4dCwgZWxlbWVudCwgY2FtZXJhKTtcbiAgICB9IGVsc2UgaWYgKGVsZW1lbnQuc2hhcGUgPT09IFNIQVBFUy5BUkMpIHtcbiAgICAgIHRoaXMucmVuZGVyQ2lyY2xlKGNvbnRleHQsIGVsZW1lbnQsIGNhbWVyYSk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnNoYXBlID09PSBTSEFQRVMuUE9MWUdPTikge1xuICAgICAgdGhpcy5yZW5kZXJQb2x5Z29uKGNvbnRleHQsIGVsZW1lbnQsIGNhbWVyYSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySW1hZ2UoY29udGV4dCwgZWxlbWVudCwgY2FtZXJhLCBpbWFnZSkge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5nZXRTY3JlZW5Qb3NpdGlvbihlbGVtZW50LnBvc2l0aW9uLCBjYW1lcmEpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZWxlbWVudDtcblxuICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCB4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlclJlY3QoY29udGV4dCwgZWxlbWVudCwgY2FtZXJhKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmdldFNjcmVlblBvc2l0aW9uKGVsZW1lbnQucG9zaXRpb24sIGNhbWVyYSk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBlbGVtZW50O1xuXG4gICAgY29udGV4dC5yZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICByZW5kZXJDaXJjbGUoY29udGV4dCwgZWxlbWVudCwgY2FtZXJhKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmdldFNjcmVlblBvc2l0aW9uKGVsZW1lbnQucG9zaXRpb24sIGNhbWVyYSk7XG4gICAgY29uc3QgeyByYWRpdXMsIHN0YXJ0QW5nbGUsIGVuZEFuZ2xlIH0gPSBlbGVtZW50O1xuXG4gICAgY29udGV4dC5hcmMoeCArIHJhZGl1cywgeSArIHJhZGl1cywgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSk7XG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIHJlbmRlclBvbHlnb24oY29udGV4dCwgZWxlbWVudCwgY2FtZXJhKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmdldFNjcmVlblBvc2l0aW9uKGVsZW1lbnQucG9zaXRpb24sIGNhbWVyYSk7XG4gICAgY29uc3QgeyB2ZXJ0aWNlcyB9ID0gZWxlbWVudDtcblxuICAgIGNvbnRleHQubW92ZVRvKHggKyB2ZXJ0aWNlc1swXVswXSwgeSArIHZlcnRpY2VzWzBdWzFdKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW2ldOyAvLyB4LCB5LCB0eXBlIDo6IG1vdmVUbywgYXJjLCBsaW5lVG8sIHF1YWRyYXRpY0N1cnZlVG8sIGJlemllckN1cnZlVG8gZXRjLlxuICAgICAgY29udGV4dC5saW5lVG8oeCArIHZlcnRleFswXSwgeSArIHZlcnRleFsxXSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5maWxsKCk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIGRyYXdCb3VuZGluZ0JveChjb250ZXh0LCBlbGVtZW50LCBjYW1lcmEpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuZ2V0U2NyZWVuUG9zaXRpb24oZWxlbWVudC5wb3NpdGlvbiwgY2FtZXJhKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGVsZW1lbnQ7XG4gICAgY29uc3QgeyBtYXJnaW5zLCBzaGFwZSwgY29sb3IgfSA9IGVsZW1lbnQuYm91bmRpbmdCb3g7XG5cbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgIGNvbnRleHQuc2V0TGluZURhc2goWzI1LCA1LCA1LCA1LCA1LCA1LCA1LCA1XSk7XG4gICAgaWYgKHNoYXBlID09PSBTSEFQRVMuQVJDKSB7XG4gICAgICBjb25zdCByYWRpdXMgPSB3aWR0aCAvIDIgKyBtYXJnaW5zWzFdIC0gbWFyZ2luc1szXTtcbiAgICAgIGNvbnRleHQuYXJjKHggKyByYWRpdXMsIHkgKyByYWRpdXMsIHJhZGl1cywgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29udGV4dC5zdHJva2VSZWN0KFxuICAgICAgICB4IC0gbWFyZ2luc1szXSxcbiAgICAgICAgeSAtIG1hcmdpbnNbMF0sXG4gICAgICAgIHdpZHRoICsgKG1hcmdpbnNbMV0gKyBtYXJnaW5zWzNdKSxcbiAgICAgICAgaGVpZ2h0ICsgKG1hcmdpbnNbMF0gKyBtYXJnaW5zWzJdKVxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG4iLCJpbXBvcnQgKiBhcyBDb25zdGFudHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQgUmVzb3VyY2VNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy9SZXNvdXJjZU1hbmFnZXInO1xuaW1wb3J0IEVudGl0eU1hbmFnZXIgZnJvbSAnLi9tb2R1bGVzL0VudGl0eU1hbmFnZXInO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vbW9kdWxlcy9SZW5kZXJlcic7XG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxuLy8gLS0tLS0tLS0tLS0tLS0tIEdBTUUgTE9PUCBTVEFSVFNcbi8vIEdldCBFbGVtZW50cyB0byByZW5kZXJcbi8vIFJFTkRFUiAgICAgICAgICAgICAgICAgICA8LSBjYW4gcnVuIGluIHBhdXNlIHN0YXRlXG4vLyAqSW5wdXRcbi8vICogIEdhbWVzIENoYW5ncyBDYW1lcmEsIHNwZWVkLCBhY2NlbHJhdGlvbiBhbmQgb3RoZXIgYXNwZWN0c1xuLy8gKk9uRXZlbnRzXG4vLyAqICBHYW1lIEF1ZGlvXG4vLyBQSFlTSUNTIFNURVBTXG4vLyAgICBBcHBseSBmb3JjZXNcbi8vICAgIENPTExJU0lPTiBERVRFQ1RJT05cbi8vICAgIENPTExJU0lPTiBSRVNPTFVUSU9OXG4vLyBVUERBVEVcbi8vIC0tLS0tLS0tLS0tLS0tLSBHQU1FIExPT1AgRU5EU1xuLy8gVW5sb2FkIFJlc291cmNlc1xuLy8gRXhpdFxuXG5jbGFzcyBFbmdpbmUge1xuICAvKipcbiAgICogQHByb3AgeyBjYW52YXNJZCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgdGltZVNwZWVkIH1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIHRoaXMubWFuYWdlcnMgPSB7fTtcblxuICAgIHRoaXMuaW5pdCgpO1xuICAgIHRoaXMucG9zdEluaXQoKTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5pbml0Q2FudmFzKCk7XG4gICAgdGhpcy5pbml0VGltZXIoKTtcbiAgICB0aGlzLmluaXRSZXNvdXJjZU1hbmFnZXIoKTtcbiAgICB0aGlzLmluaXRFbnRpdHlNYW5hZ2VyKCk7XG4gICAgdGhpcy5pbml0UmVuZGVyZXIoKTtcbiAgfVxuXG4gIHBvc3RJbml0KCkge1xuICAgIHRoaXMubWFuYWdlcnMucmVzb3VyY2VNYW5hZ2VyLmluaXQgJiZcbiAgICAgIHRoaXMubWFuYWdlcnMucmVzb3VyY2VNYW5hZ2VyLmluaXQodGhpcyk7XG4gICAgdGhpcy5tYW5hZ2Vycy5lbnRpdHlNYW5hZ2VyLmluaXQgJiYgdGhpcy5tYW5hZ2Vycy5lbnRpdHlNYW5hZ2VyLmluaXQodGhpcyk7XG4gICAgdGhpcy5tYW5hZ2Vycy5yZW5kZXJlci5pbml0ICYmIHRoaXMubWFuYWdlcnMucmVuZGVyZXIuaW5pdCh0aGlzKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7fVxuXG4gIGluaXRDYW52YXMoKSB7XG4gICAgY29uc3QgeyBjYW52YXNJZCwgY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCwgc21vb3RoSW1hZ2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdpZCcsIGNhbnZhc0lkKTtcbiAgICBjYW52YXMuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7IC8vIG9yIG5vbmVcbiAgICBjYW52YXMud2lkdGggPSBjYW52YXNXaWR0aCB8fCB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzSGVpZ2h0IHx8IHdpbmRvdy5pbm5lckhlaWdodDtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblxuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGN0eC5tb3pJbWFnZVNtb290aGluZ0VuYWJsZWQgPSAhIXNtb290aEltYWdlO1xuICAgIGN0eC53ZWJraXRJbWFnZVNtb290aGluZ0VuYWJsZWQgPSAhIXNtb290aEltYWdlO1xuICAgIGN0eC5tc0ltYWdlU21vb3RoaW5nRW5hYmxlZCA9ICEhc21vb3RoSW1hZ2U7XG4gICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9ICEhc21vb3RoSW1hZ2U7XG5cbiAgICB0aGlzLnN0YXRlLmNhbnZhcyA9IHtcbiAgICAgIGVsZW1lbnQ6IGNhbnZhcyxcbiAgICAgIGNvbnRleHQ6IGN0eFxuICAgIH07XG5cbiAgICB0aGlzLnN0YXRlLnNjcmVlbiA9IHtcbiAgICAgIHdpZHRoOiBjYW52YXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQsXG4gICAgICBhc3BlY3RSYXRpbzogY2FudmFzLndpZHRoIC8gY2FudmFzLmhlaWdodFxuICAgIH07XG4gIH1cblxuICAvLyBUYWtlIGZyYW1lIHBlciBzZWNvbmQgaW4gY29uc2lkZXJhdGlvblxuICBpbml0VGltZXIoKSB7XG4gICAgY29uc3QgeyB0aW1lU3BlZWQgPSAxLCBmcHMgPSAxMDAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY3VyclRpbWUgPSAocGVyZm9ybWFuY2UgfHwgRGF0ZSkubm93KCk7XG5cbiAgICB0aGlzLnN0YXRlLnRpbWVyID0ge1xuICAgICAgdGltZVNwZWVkOiB0aW1lU3BlZWQsXG4gICAgICBsYXN0VGltZTogY3VyclRpbWUsXG4gICAgICBjdXJyVGltZTogY3VyclRpbWUsXG4gICAgICBkZWx0YVRpbWU6IDEwMDAgLyBmcHMsXG4gICAgICBmcHM6IDAsXG4gICAgICBmcHNMYXN0VGljazogMCxcbiAgICAgIGZwc0hpc3Rvcnk6IFtdXG4gICAgfTtcbiAgfVxuXG4gIC8vICAgICAgICAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAgLy8gICAgICAgICAgbGFzdCAgICAgICAgICAgICAgICAgIG5vd1xuXG4gIC8qKlxuICAgKiAtLS0tLS0tLS0tLS0gUkVTT1VSQ0UgTUFOR0VSIC0tLS0tLS0tLS0tLS1cbiAgICovXG4gIGluaXRSZXNvdXJjZU1hbmFnZXIoKSB7XG4gICAgY29uc3QgcmVzb3VyY2VNYW5hZ2VyID0gbmV3IFJlc291cmNlTWFuYWdlcigpO1xuXG4gICAgdGhpcy5tYW5hZ2Vycy5yZXNvdXJjZU1hbmFnZXIgPSByZXNvdXJjZU1hbmFnZXI7XG4gIH1cblxuICBpbml0RW50aXR5TWFuYWdlcigpIHtcbiAgICBjb25zdCBlbnRpdHlNYW5hZ2VyID0gbmV3IEVudGl0eU1hbmFnZXIoKTtcbiAgICBjb25zdCB3b3JsZCA9IEVudGl0eU1hbmFnZXIuY3JlYXRlV29ybGQoe1xuICAgICAgZ3Jhdml0eTogMCxcbiAgICAgIGJvdW5kczogW1xuICAgICAgICBuZXcgVmVjdG9yMkQoLUluZmluaXR5LCAtSW5maW5pdHkpLFxuICAgICAgICBuZXcgVmVjdG9yMkQoSW5maW5pdHksIEluZmluaXR5KVxuICAgICAgXVxuICAgIH0pO1xuICAgIGNvbnN0IGxpZ2h0ID0gRW50aXR5TWFuYWdlci5jcmVhdGVMaWdodCh7IHBvc2l0aW9uOiBWZWN0b3IyRC56ZXJvKCkgfSk7XG5cbiAgICBlbnRpdHlNYW5hZ2VyLnNldFJvb3Qod29ybGQpO1xuICAgIHdvcmxkLmFkZChsaWdodCk7XG5cbiAgICB0aGlzLm1hbmFnZXJzLmVudGl0eU1hbmFnZXIgPSBlbnRpdHlNYW5hZ2VyO1xuICAgIHRoaXMuc3RhdGUud29ybGQgPSB3b3JsZDtcbiAgICB0aGlzLnN0YXRlLmxpZ2h0ID0gbGlnaHQ7XG4gIH1cblxuICBpbml0UmVuZGVyZXIoKSB7XG4gICAgdGhpcy5tYW5hZ2Vycy5yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xuICB9XG5cbiAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NjQwMTgvY29udHJvbGxpbmctZnBzLXdpdGgtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gIGF1dG9QaWxvdCgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hdXRvUGlsb3QpO1xuXG4gICAgY29uc3QgeyB0aW1lciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBub3cgPSAocGVyZm9ybWFuY2UgfHwgRGF0ZSkubm93KCk7XG4gICAgY29uc3QgZWxhcHNlZCA9IG5vdyAtIHRpbWVyLmxhc3RUaW1lO1xuXG4gICAgdGltZXIuY3VyclRpbWUgPSBub3c7XG4gICAgaWYgKGVsYXBzZWQgPj0gdGltZXIuZGVsdGFUaW1lKSB7XG4gICAgICAvLyBjb21wdXRlIEZQU1xuICAgICAgd2hpbGUgKHRpbWVyLmZwc0hpc3RvcnkubGVuZ3RoID4gMCAmJiB0aW1lci5mcHNIaXN0b3J5WzBdIDw9IG5vdyAtIDEwMDApIHtcbiAgICAgICAgdGltZXIuZnBzSGlzdG9yeS5zaGlmdCgpO1xuICAgICAgfVxuICAgICAgdGltZXIuZnBzSGlzdG9yeS5wdXNoKG5vdyk7XG5cbiAgICAgIHRpbWVyLmxhc3RUaW1lID0gbm93IC0gKGVsYXBzZWQgJSAxMCk7XG5cbiAgICAgIGlmICh0aW1lci5jdXJyVGltZSAtIHRpbWVyLmZwc0xhc3RUaWNrID49IDUwMCkge1xuICAgICAgICB0aW1lci5mcHMgPSB0aW1lci5mcHNIaXN0b3J5Lmxlbmd0aDtcbiAgICAgICAgdGltZXIuZnBzTGFzdFRpY2sgPSB0aW1lci5jdXJyVGltZTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coJ0ZQUyA6OiAnLCB0aW1lci5mcHMpO1xuXG4gICAgICAvLyBHYW1lIExvb3BcbiAgICAgIHRoaXMudXBkYXRlKHRpbWVyLmN1cnJUaW1lKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgLyoqXG4gICAgICogPT09PT09PT09PT09IFJFTkRFUiBTVEVQXG4gICAgICovXG4gICAgdGhpcy5tYW5hZ2Vycy5yZW5kZXJlci5yZW5kZXJUcmVlKFxuICAgICAgdGhpcy5zdGF0ZS53b3JsZCxcbiAgICAgIHRoaXMuc3RhdGUudGltZXIuY3VyclRpbWVcbiAgICApO1xuICB9XG59XG5cbkVuZ2luZS5Db25zdGFudHMgPSBDb25zdGFudHM7XG5FbmdpbmUuaGVscGVycyA9IHtcbiAgLi4uRW50aXR5TWFuYWdlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgRW5naW5lO1xuIiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7IiwiaW1wb3J0IEdhbWVFbmdpbmUgZnJvbSAnLi4vZW5naW5lJztcblxuLy8gaW1wb3J0IEltYWdlIGZyb20gXCIuLi9leGFtcGxlcy9icmljay1icmVha2VyL2Fzc2V0cy9pbWFnZXMvQmFsbDEuc3ZnXCI7XG5cbi8vIGNvbnN0IHsgU0hBUEVTIH0gPSBHYW1lRW5naW5lLkNvbnN0YW50cztcbmNvbnN0IHsgQm9keSwgVHJhbnNmb3JtIH0gPSBHYW1lRW5naW5lLmhlbHBlcnM7XG5cbmNvbnN0IFdJRFRIID0gd2luZG93LmlubmVyV2lkdGg7XG5jb25zdCBIRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbmNvbnN0IGVuZ2luZSA9IG5ldyBHYW1lRW5naW5lKHsgY2FudmFzSWQ6ICd0ZXN0LTEnLCB0aW1lU3BlZWQ6IDEsIGZwczogMTAwIH0pO1xuY29uc3QgeyB3b3JsZCB9ID0gZW5naW5lLnN0YXRlO1xuY29uc3QgeyByZW5kZXJlciB9ID0gZW5naW5lLm1hbmFnZXJzO1xuXG5jb25zdCBtb3VzZSA9IHtcbiAgcG9zaXRpb246IHsgeDogMCwgeTogMCB9XG59O1xuXG5jb25zdCB0cmFuc2Zvcm0xID0gbmV3IFRyYW5zZm9ybSh7XG4gIGxhYmVsOiAndHJhbnNmb3JtMScsXG4gIHJvdGF0ZTogMSxcbiAgb3JpZ2luOiBbV0lEVEggLyAyICsgMjUsIEhFSUdIVCAvIDIgKyAyNV0sXG4gIHRyYW5zZm9ybTogW1xuICAgIFsxLCAwLCAwXSxcbiAgICBbMCwgMSwgMF0sXG4gICAgWzAsIDAsIDFdXG4gIF1cbn0pO1xuXG5jb25zdCB0cmFuc2Zvcm0yID0gbmV3IFRyYW5zZm9ybSh7XG4gIGxhYmVsOiAndHJhbnNmb3JtMicsXG4gIHJvdGF0ZTogMCxcbiAgb3JpZ2luOiBbV0lEVEggLyAyICsgMTE1LCBIRUlHSFQgLyAyICsgMTE1XVxufSk7XG5cbmNvbnN0IHN1biA9IG5ldyBCb2R5LmNyZWF0ZUFyYyh7XG4gIGxhYmVsOiAnc3VuJyxcbiAgcG9zaXRpb246IFtXSURUSCAvIDIsIEhFSUdIVCAvIDJdLFxuICByYWRpdXM6IDI1LFxuICBzdHlsZXM6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdvcmFuZ2UnXG4gIH0sXG4gIGRlYnVnOiB0cnVlXG59KTtcblxuY29uc3QgZWFydGggPSBuZXcgQm9keS5jcmVhdGVBcmMoe1xuICBsYWJlbDogJ2VhcnRoJyxcbiAgcG9zaXRpb246IFtXSURUSCAvIDIgKyAxMDAsIEhFSUdIVCAvIDIgKyAxMDBdLFxuICByYWRpdXM6IDE1LFxuICBzdHlsZXM6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbidcbiAgfSxcbiAgZGVidWc6IHRydWVcbn0pO1xuXG5jb25zdCBtb29uID0gbmV3IEJvZHkuY3JlYXRlQXJjKHtcbiAgbGFiZWw6ICdtb29uJyxcbiAgcG9zaXRpb246IFtXSURUSCAvIDIgKyAxMzAsIEhFSUdIVCAvIDIgKyAxMzBdLFxuICByYWRpdXM6IDUsXG4gIHN0eWxlczoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnXG4gIH0sXG4gIGRlYnVnOiB0cnVlXG59KTtcblxuY29uc3QgYmcgPSBCb2R5LmNyZWF0ZVJlY3RhbmdsZSh7XG4gIGxhYmVsOiAnYmcnLFxuICBwb3NpdGlvbjogWzAsIDBdLFxuICB3aWR0aDogV0lEVEgsXG4gIGhlaWdodDogSEVJR0hULFxuICBzdHlsZXM6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwJ1xuICB9LFxuICBkZWJ1ZzogdHJ1ZVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZ0KSA9PiB7XG4gIGNvbnN0IHsgY2xpZW50WCwgY2xpZW50WSB9ID0gZXZ0O1xuICBtb3VzZS5wb3NpdGlvbiA9IHtcbiAgICB4OiBjbGllbnRYLFxuICAgIHk6IGNsaWVudFlcbiAgfTtcbn0pO1xuXG5yZW5kZXJlci5jYW1lcmEuYmluZFRhcmdldChtb3VzZSk7XG5cbndvcmxkLmFkZChiZyk7XG53b3JsZC5hZGQodHJhbnNmb3JtMSk7XG50cmFuc2Zvcm0xLmFkZChzdW4pO1xuc3VuLmFkZCh0cmFuc2Zvcm0yKTtcbnRyYW5zZm9ybTIuYWRkKGVhcnRoKTtcbmVhcnRoLmFkZChtb29uKTtcblxuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICB0cmFuc2Zvcm0xLnJvdGF0ZSArPSAxO1xuICB0cmFuc2Zvcm0yLnJvdGF0ZSArPSAxO1xufSk7XG5cbi8vIHdvcmxkLmFkZChiZyk7XG4vLyB3b3JsZC5hZGQoc3VuKTtcbi8vIHN1bi5hZGQoZWFydGgpO1xuLy8gZWFydGguYWRkKG1vb24pO1xuXG5jb25zb2xlLmxvZyhlbmdpbmUpO1xuXG5lbmdpbmUuYXV0b1BpbG90KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9
