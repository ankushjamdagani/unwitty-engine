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
    n((n.s = 11));
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
      c = n(1),
      s = n.n(c),
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
      x = n.n(b),
      w = (function () {
        function t() {
          u()(this, t), (this.resources = new Map());
        }
        return (
          s()(t, [
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
                        c = void 0 === u ? Date.now() : u,
                        s = i.src;
                      if (!a)
                        return (
                          console.warn('Resource TYPE is required'),
                          { v: void 0 }
                        );
                      if (!s)
                        return (
                          console.warn('Resource SRC is required'),
                          { v: void 0 }
                        );
                      if (a === p.AUDIO) {
                        var l = new Audio(s);
                        l.addEventListener('canplaythrough', function () {
                          t.assets[c] || (t.resources.set(c, l), n && n(c, l));
                        });
                      } else if (a === p.IMAGE) {
                        var f = new Image();
                        (f.src = s),
                          (f.onload = function () {
                            t.resources.set(c, f), n && n(c, f);
                          });
                      }
                    },
                    i = 0;
                  i < e.length;
                  i++
                ) {
                  var o = r(i);
                  if ('object' === x()(o)) return o.v;
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
      O = n(5),
      k = n.n(O),
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
          s()(
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
                    r = k()(n, 2),
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
            s()(t, [
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
          c =
            void 0 === a
              ? [
                  { x: -1 / 0, y: -1 / 0 },
                  { x: 1 / 0, y: 1 / 0 }
                ]
              : a;
        return (t.type = g.WORLD), (t.gravity = o), (t.bounds = c), t;
      }
      return (
        s()(n, [
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
      return s()(n, [{ key: 'render', value: function () {} }]), n;
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
        s()(n, [
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
    function U(t) {
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
    var W = (function (t) {
        R()(n, t);
        var e = U(n);
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
    function $(t) {
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
    var X = {
        shape: y.RECTANGLE,
        position: [0, 0],
        debug: !1,
        boundingBox: { margins: [0, 0, 0, 0], shape: y.RECTANGLE, color: 'red' }
      },
      J = (function (t) {
        R()(n, t);
        var e = $(n);
        function n(t) {
          var r;
          u()(this, n), (r = e.call(this, t));
          var i = t.shape,
            o = void 0 === i ? X.shape : i,
            a = t.width,
            c = t.height,
            s = t.radius,
            l = t.startAngle,
            f = t.endAngle,
            h = t.vertices,
            y = t.eddges,
            d = t.position,
            v = void 0 === d ? X.position : d,
            p = t.styles,
            m = t.debug,
            b = void 0 === m ? X.debug : m,
            x = t.boundingBox,
            w = void 0 === x ? X.boundingBox : x,
            O = z()(t, [
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
            (r.height = c),
            (r.radius = s),
            (r.startAngle = l),
            (r.endAngle = f),
            (r.vertices = h),
            (r.eddges = y),
            (r.position = new B(v[0], v[1])),
            (r.styles = p),
            (r.debug = b),
            (r.boundingBox = V(V({}, X.boundingBox), w)),
            (r.restProps = O),
            r
          );
        }
        return (
          s()(n, [
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
                    c = this.height,
                    s = I(o.x - a[3], e.x - n[3]),
                    l = I(o.y - a[0], e.y - n[0]),
                    f = D(o.x + u + a[1], e.x + r + n[1]),
                    h = D(o.y + c + a[2], e.y + i + n[2]);
                  (this.boundingBox.margins = [
                    o.y - l,
                    f - (o.x + u),
                    h - (o.y + c),
                    o.x - s
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
          c = 0;
        return (
          e.map(function (t) {
            var e = k()(t, 2),
              n = e[0],
              r = e[1];
            (o = I(n, o)), (u = D(n, u)), (a = I(r, a)), (c = D(r, c));
          }),
          new J(
            V(
              {
                shape: y.POLYGON,
                width: u - o,
                height: c - a,
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
          c = void 0 === a ? 1 : a,
          s = t.collisionMask,
          f = void 0 === s ? 7 : s,
          h = t.mass,
          y = t.restitution,
          d = t.friction,
          v = t.gravityScale,
          p = t.linearDrag,
          m = t.angularDrag,
          b = t.velocity,
          x = t.direction,
          w = t.acceleration;
        return (
          (r.type = g.PHYSICS_BODY),
          (r.bodyType = o),
          (r.categoryMask = c),
          (r.collisionMask = f),
          (r.mass = h),
          (r.restitution = y),
          (r.friction = d),
          (r.gravityScale = v),
          (r.linearDrag = p),
          (r.angularDrag = m),
          (r.velocity = new B(b[0], b[1])),
          (r.direction = new B(x[0], x[1])),
          (r.acceleration = new B(w[0], w[1])),
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
          c = void 0 === a ? 1 : a,
          s = t.collisionMask,
          f = void 0 === s ? 7 : s,
          h = t.mass,
          y = t.restitution,
          d = t.friction,
          v = t.gravityScale,
          p = t.linearDrag,
          m = t.angularDrag,
          b = t.velocity,
          x = t.direction,
          w = t.acceleration;
        return (
          (r.type = g.FLUID_BODY),
          (r.bodyType = o),
          (r.categoryMask = c),
          (r.collisionMask = f),
          (r.mass = h),
          (r.restitution = y),
          (r.friction = d),
          (r.gravityScale = v),
          (r.linearDrag = p),
          (r.angularDrag = m),
          (r.velocity = new B(b[0], b[1])),
          (r.direction = new B(x[0], x[1])),
          (r.acceleration = new B(w[0], w[1])),
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
        s()(t, [
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
                    var o = k()(r.value, 2)[1];
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
        return new W(t);
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
      (ut.Layer = W),
      (ut.Body = Q),
      (ut.PhysicsBody = et),
      (ut.FluidBody = it);
    var ct = ut,
      st = (function () {
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
          s()(t, [
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
        s()(t, [
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
                (this.camera = new st({
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
                  var o = k()(r.value, 2)[1];
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
                o = k()(e.transform, 2),
                a = k()(o[0], 3),
                u = a[0],
                c = a[1],
                s = a[2],
                l = k()(o[1], 3),
                f = l[0],
                h = l[1],
                y = l[2],
                d = e.boundingBox.margins,
                v = e.position,
                p = e.width,
                g = e.height,
                b = e.origin;
              if (Array.isArray(b)) {
                var x = this.getScreenPosition({ x: b[0], y: b[1] }, n);
                r = [x.x, x.y];
              } else {
                var w = this.getScreenPosition(v, n),
                  O = w.x,
                  T = w.y,
                  R = O + p + d[1],
                  S = O - d[3],
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
                t.transform(u, f, c, h, s + r[0], y + r[1]),
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
                c = i.backgroundColor,
                s = i.backgroundGradient,
                l = i.borderColor,
                f = i.borderSize,
                h = o && this.props.resourceManager.get(o);
              if ((h && this.renderImage(n, t, r, h), !(!c & !l & !f & !d))) {
                (n.fillStyle = c || 'transparent'),
                  (n.strokeStyle = l || 'transparent'),
                  (n.lineWidth = f || 0);
                var d = a && this.props.resourceManager.get(a);
                if (d) {
                  var v = n.createPattern(d, u || 'repeat');
                  n.fillStyle = v;
                } else s && console.warn('Gradients are not supported for now');
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
                c = e.height;
              t.drawImage(r, o, a, u, c);
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
                c = e.endAngle;
              t.arc(i + a, o + a, a, u, c), t.fill(), t.stroke();
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
                var c = a[u];
                t.lineTo(i + c[0], o + c[1]);
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
                c = e.boundingBox,
                s = c.margins,
                l = c.shape,
                f = c.color;
              if (
                ((t.strokeStyle = f),
                (t.lineWidth = 1),
                t.setLineDash([25, 5, 5, 5, 5, 5, 5, 5]),
                l === y.ARC)
              ) {
                var h = a / 2 + s[1] - s[3];
                t.arc(i + h, o + h, h, 0, 2 * Math.PI), t.stroke();
              } else
                t.strokeRect(
                  i - s[3],
                  o - s[0],
                  a + (s[1] + s[3]),
                  u + (s[0] + s[2])
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
        s()(t, [
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
              var t = new w();
              this.managers.resourceManager = t;
            }
          },
          {
            key: 'initEntityManager',
            value: function () {
              var t = new ct(),
                e = ct.createWorld({
                  gravity: 0,
                  bounds: [new B(-1 / 0, -1 / 0), new B(1 / 0, 1 / 0)]
                }),
                n = ct.createLight({ position: B.zero() });
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
      })({}, ct));
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
  }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVybi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZW5naW5lL21vZHVsZXMvUmVzb3VyY2VNYW5hZ2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbW9kdWxlcy9jb3JlL0NvbW1vbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL2NvcmUvQW5pbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL2NvcmUvVmVjdG9yMkQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL0VudGl0eU1hbmFnZXIvX25vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL0VudGl0eU1hbmFnZXIvV29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL0VudGl0eU1hbmFnZXIvTGlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL0VudGl0eU1hbmFnZXIvVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbW9kdWxlcy9FbnRpdHlNYW5hZ2VyL0xheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbW9kdWxlcy9FbnRpdHlNYW5hZ2VyL0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL0VudGl0eU1hbmFnZXIvUGh5c2ljc0JvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL0VudGl0eU1hbmFnZXIvRmx1aWRCb2R5LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbW9kdWxlcy9FbnRpdHlNYW5hZ2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvbW9kdWxlcy9SZW5kZXJlci9DYW1lcmEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VuZ2luZS9tb2R1bGVzL1JlbmRlcmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9lbmdpbmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXRlcmFibGVUb0FycmF5TGltaXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXNzZXJ0VGhpc0luaXRpYWxpemVkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJpbnN0YW5jZSIsIkNvbnN0cnVjdG9yIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJ0YXJnZXQiLCJwcm9wcyIsImxlbmd0aCIsImRlc2NyaXB0b3IiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsInByb3RvUHJvcHMiLCJzdGF0aWNQcm9wcyIsIl9nZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiZ2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJzdWJDbGFzcyIsInN1cGVyQ2xhc3MiLCJjb25zdHJ1Y3RvciIsIl90eXBlb2YiLCJhc3NlcnRUaGlzSW5pdGlhbGl6ZWQiLCJzZWxmIiwiYXJyYXlXaXRoSG9sZXMiLCJpdGVyYWJsZVRvQXJyYXlMaW1pdCIsInVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5Iiwibm9uSXRlcmFibGVSZXN0IiwiYXJyIiwib2JqIiwib2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZSIsImV4Y2x1ZGVkIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwic291cmNlU3ltYm9sS2V5cyIsImluZGV4T2YiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsIml0ZXJhdG9yIiwiQk9EWV9UWVBFIiwiU1RBVElDIiwiS0lORU1BVElDIiwiRFlOQU1JQyIsIkdSQURJRU5UX1RZUEVTIiwiTElORUFSIiwiUkFESUFMIiwiU0hBUEVfU1RZTEVTIiwiTk9ORSIsIk5PUk1BTCIsIkdSQURJRU5UIiwiUEFUVEVSTiIsIlNIQVBFUyIsIlRSSUFOR0xFIiwiUkVDVEFOR0xFIiwiUEVOVEFHT04iLCJIRVhBR09OIiwiQVJDIiwiUE9MWUdPTiIsIkdBTUVfU1RBVEVTIiwiSE9NRSIsIlBMQVkiLCJQQVVTRSIsIkVORCIsIktFWV9DT0RFUyIsIkVTQyIsIlNQQUNFIiwiTEVGVCIsIlJJR0hUIiwiRU5URVIiLCJNIiwiUkVTT1VSQ0VfVFlQRSIsIklNQUdFIiwiQVVESU8iLCJFTlRJVFlfTk9ERV9UWVBFUyIsIldPUkxEIiwiTElHSFQiLCJCT0RZIiwiUEhZU0lDU19CT0RZIiwiRkxVSURfQk9EWSIsIlRSQU5TRk9STSIsIlRSQU5TRk9STV9PUklHSU4iLCJDRU5URVIiLCJMRUZUX1RPUCIsIlJJR0hUX1RPUCIsIlJJR0hUX0JPVFRPTSIsIkxFRlRfQk9UVE9NIiwiUmVzb3VyY2VNYW5hZ2VyIiwidGhpcyIsInJlc291cmNlcyIsIk1hcCIsImNiIiwidHlwZSIsIkRhdGUiLCJub3ciLCJzcmMiLCJjb25zb2xlIiwid2FybiIsInJvIiwiQXVkaW8iLCJhZGRFdmVudExpc3RlbmVyIiwiYXNzZXRzIiwic2V0IiwiSW1hZ2UiLCJvbmxvYWQiLCJoYXMiLCJrZXlzIiwiY2xlYXIiLCJudW0iLCJ4IiwieSIsImlzTmFOIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidG9TdHJpbmciLCJzbGljZSIsIkFuaW1hdG9yIiwiVmVjdG9yMkQiLCJhIiwic3FydCIsIm1hZyIsImRpdiIsImN1cnJNYWciLCJtdWwiLCJsaW1pdEFtdCIsIm1pbiIsIm1heCIsIkNvbW1vbnMiLCJub3JtYWxpc2UiLCJ0aGV0YSIsImNvcyIsInNpbiIsImF0YW4yIiwidjEiLCJ2MiIsInNoYWRvdyIsImRvdFByb2R1Y3QiLCJtYWdTcSIsImR4IiwiZHkiLCJhY29zIiwiYXRhbiIsInBvbGFyVG9DYXJ0ZXNpYW4iLCJQSSIsIl9ub2RlIiwibGFiZWwiLCJlbnRpdHkiLCJjaGlsZHJlbiIsImlkIiwicGFyZW50IiwiYWRkVG8iLCJvbkFkZENoaWxyZW4iLCJXb3JsZCIsImdyYXZpdHkiLCJib3VuZHMiLCJJbmZpbml0eSIsIkxpZ2h0IiwiVHJhbnNmb3JtIiwib3JpZ2luIiwicm90YXRlIiwidHJhbnNmb3JtIiwiY2hpbGQiLCJwb3NpdGlvbiIsImJvdW5kaW5nQm94Iiwid2lkdGgiLCJoZWlnaHQiLCJMYXllciIsIkxBWUVSIiwiZGVmYXVsdFN0YXRlIiwic2hhcGUiLCJkZWJ1ZyIsIm1hcmdpbnMiLCJjb2xvciIsIkJvZHkiLCJyYWRpdXMiLCJzdGFydEFuZ2xlIiwiZW5kQW5nbGUiLCJ2ZXJ0aWNlcyIsImVkZGdlcyIsInN0eWxlcyIsInJlc3RQcm9wcyIsImNQb3NpdGlvbiIsImNCb3VuZGluZ0JveE1hcmdpbiIsImNXaWR0aCIsImNIZWlnaHQiLCJwUG9zaXRpb24iLCJwQm91bmRpbmdCb3hNYXJnaW4iLCJwV2lkdGgiLCJwSGVpZ2h0IiwieE1pbiIsInlNaW4iLCJ4TWF4IiwieU1heCIsImdldERlYnVnTWVzc2FnZSIsImJvZHkiLCJjcmVhdGVBcmMiLCJjcmVhdGVSZWN0YW5nbGUiLCJjcmVhdGVQb2x5Z29uIiwibWluWCIsIm1pblkiLCJtYXhYIiwibWF4WSIsIm1hcCIsIlBoeXNpY3NCb2R5IiwiYm9keVR5cGUiLCJjYXRlZ29yeU1hc2siLCJjb2xsaXNpb25NYXNrIiwibWFzcyIsInJlc3RpdHV0aW9uIiwiZnJpY3Rpb24iLCJncmF2aXR5U2NhbGUiLCJsaW5lYXJEcmFnIiwiYW5ndWxhckRyYWciLCJ2ZWxvY2l0eSIsImRpcmVjdGlvbiIsImFjY2VsZXJhdGlvbiIsIkZsdWlkQm9keSIsIkVudGl0eU1hbmFnZXIiLCJwYXJlbnRJbmRleCIsInJvb3QiLCJlbGVtIiwibm9kZSIsIml0ZW1zIiwicHVzaCIsInNpemUiLCJ2YWwiLCJjb25jYXQiLCJnZXRJdGVtc1RvUmVuZGVyIiwiY3JlYXRlV29ybGQiLCJjcmVhdGVMaWdodCIsImNyZWF0ZVRyYW5zZm9ybSIsImNyZWF0ZUxheWVyIiwiY3JlYXRlQm9keSIsImNyZWF0ZVBoeXNpY3NCb2R5IiwiY3JlYXRlRmx1aWRCb2R5IiwiQ2FtZXJhIiwicm90YXRpb24iLCJzY3JlZW4iLCJhbmdsZSIsInBvcyIsIlJlbmRlcmVyIiwic3RhdGUiLCJtYW5hZ2VycyIsInJlc291cmNlTWFuYWdlciIsImNhbnZhcyIsImNhbWVyYSIsInplcm8iLCJjb250ZXh0IiwiY2xlYXJSZWN0IiwidXBkYXRlIiwicmVuZGVyTm9kZSIsImVsZW1lbnQiLCJhcHBseVRyYW5zZm9ybSIsImJlZ2luUGF0aCIsInJlbmRlckJvZHkiLCJjbG9zZVBhdGgiLCJkcmF3Qm91bmRpbmdCb3giLCJyZW5kZXIiLCJyZXN0b3JlIiwiY2xlYW51cCIsImNvb3JkcyIsImUiLCJiIiwiZiIsIkFycmF5IiwiaXNBcnJheSIsImdldFNjcmVlblBvc2l0aW9uIiwieE1pZCIsInlNaWQiLCJzYXZlIiwidHJhbnNsYXRlIiwiZW52UHJvcHMiLCJpbWFnZSIsImJhY2tncm91bmRJbWFnZSIsInJlcGVhdCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRHcmFkaWVudCIsImJvcmRlckNvbG9yIiwiYm9yZGVyU2l6ZSIsIl9pbWFnZSIsInJlbmRlckltYWdlIiwiX2JnSW1hZ2UiLCJmaWxsU3R5bGUiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsInBhdHRlcm4iLCJjcmVhdGVQYXR0ZXJuIiwicmVuZGVyUmVjdCIsInJlbmRlckNpcmNsZSIsInJlbmRlclBvbHlnb24iLCJkcmF3SW1hZ2UiLCJyZWN0IiwiZmlsbCIsInN0cm9rZSIsImFyYyIsIm1vdmVUbyIsInZlcnRleCIsImxpbmVUbyIsInNldExpbmVEYXNoIiwic3Ryb2tlUmVjdCIsIkVuZ2luZSIsImluaXQiLCJwb3N0SW5pdCIsImluaXRDYW52YXMiLCJpbml0VGltZXIiLCJpbml0UmVzb3VyY2VNYW5hZ2VyIiwiaW5pdEVudGl0eU1hbmFnZXIiLCJpbml0UmVuZGVyZXIiLCJlbnRpdHlNYW5hZ2VyIiwicmVuZGVyZXIiLCJjYW52YXNJZCIsImNhbnZhc1dpZHRoIiwiY2FudmFzSGVpZ2h0Iiwic21vb3RoSW1hZ2UiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsImN1cnNvciIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImFwcGVuZENoaWxkIiwiY3R4IiwiZ2V0Q29udGV4dCIsIm1vekltYWdlU21vb3RoaW5nRW5hYmxlZCIsIndlYmtpdEltYWdlU21vb3RoaW5nRW5hYmxlZCIsIm1zSW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiaW1hZ2VTbW9vdGhpbmdFbmFibGVkIiwiYXNwZWN0UmF0aW8iLCJ0aW1lU3BlZWQiLCJmcHMiLCJjdXJyVGltZSIsInBlcmZvcm1hbmNlIiwidGltZXIiLCJsYXN0VGltZSIsImRlbHRhVGltZSIsImZwc0xhc3RUaWNrIiwiZnBzSGlzdG9yeSIsIndvcmxkIiwibGlnaHQiLCJzZXRSb290IiwiYWRkIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiYXV0b1BpbG90IiwiZWxhcHNlZCIsInNoaWZ0IiwibG9nIiwicmVuZGVyVHJlZSIsIkNvbnN0YW50cyIsImhlbHBlcnMiLCJfYXJyIiwiX24iLCJfZCIsIl9lIiwidW5kZWZpbmVkIiwiX3MiLCJfaSIsIm5leHQiLCJkb25lIiwiZXJyIiwiYXJyYXlMaWtlVG9BcnJheSIsIm1pbkxlbiIsImZyb20iLCJ0ZXN0IiwibGVuIiwiYXJyMiIsIl9zZXRQcm90b3R5cGVPZiIsIlJlZmVyZW5jZUVycm9yIiwic291cmNlS2V5cyJdLCJtYXBwaW5ncyI6ImFBQ0UsSUFBSUEsRUFBbUIsR0FHdkIsU0FBU0MsRUFBb0JDLEdBRzVCLEdBQUdGLEVBQWlCRSxHQUNuQixPQUFPRixFQUFpQkUsR0FBVUMsUUFHbkMsSUFBSUMsRUFBU0osRUFBaUJFLEdBQVksQ0FDekNHLEVBQUdILEVBQ0hJLEdBQUcsRUFDSEgsUUFBUyxJQVVWLE9BTkFJLEVBQVFMLEdBQVVNLEtBQUtKLEVBQU9ELFFBQVNDLEVBQVFBLEVBQU9ELFFBQVNGLEdBRy9ERyxFQUFPRSxHQUFJLEVBR0pGLEVBQU9ELFFBS2ZGLEVBQW9CUSxFQUFJRixFQUd4Qk4sRUFBb0JTLEVBQUlWLEVBR3hCQyxFQUFvQlUsRUFBSSxTQUFTUixFQUFTUyxFQUFNQyxHQUMzQ1osRUFBb0JhLEVBQUVYLEVBQVNTLElBQ2xDRyxPQUFPQyxlQUFlYixFQUFTUyxFQUFNLENBQUVLLFlBQVksRUFBTUMsSUFBS0wsS0FLaEVaLEVBQW9Ca0IsRUFBSSxTQUFTaEIsR0FDWCxvQkFBWGlCLFFBQTBCQSxPQUFPQyxhQUMxQ04sT0FBT0MsZUFBZWIsRUFBU2lCLE9BQU9DLFlBQWEsQ0FBRUMsTUFBTyxXQUU3RFAsT0FBT0MsZUFBZWIsRUFBUyxhQUFjLENBQUVtQixPQUFPLEtBUXZEckIsRUFBb0JzQixFQUFJLFNBQVNELEVBQU9FLEdBRXZDLEdBRFUsRUFBUEEsSUFBVUYsRUFBUXJCLEVBQW9CcUIsSUFDL0IsRUFBUEUsRUFBVSxP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U0FBMkI0RCxFQUFLa1YsSUFDbkIsTUFBUEEsR0FBZUEsRUFBTWxWLEVBQUlwQixVQUFRc1csRUFBTWxWLEVBQUlwQixRQUUvQyxJQUFLLElBQUl0QyxFQUFJLEVBQUc2WSxFQUFPLElBQUl0RyxNQUFNcUcsR0FBTTVZLEVBQUk0WSxFQUFLNVksSUFDOUM2WSxFQUFLN1ksR0FBSzBELEVBQUkxRCxHQUdoQixPQUFPNlksSSxjQ0hUOVksRUFBT0QsUUFKUCxXQUNFLE1BQU0sSUFBSW9DLFVBQVUsK0ksY0NEdEIsU0FBUzRXLEVBQWdCclksRUFBR3FCLEdBTTFCLE9BTEEvQixFQUFPRCxRQUFVZ1osRUFBa0JwWSxPQUFPbUMsZ0JBQWtCLFNBQXlCcEMsRUFBR3FCLEdBRXRGLE9BREFyQixFQUFFc0MsVUFBWWpCLEVBQ1ByQixHQUdGcVksRUFBZ0JyWSxFQUFHcUIsR0FHNUIvQixFQUFPRCxRQUFVZ1osRyxjQ0RqQi9ZLEVBQU9ELFFBUlAsU0FBZ0N1RCxHQUM5QixRQUFhLElBQVRBLEVBQ0YsTUFBTSxJQUFJMFYsZUFBZSw2REFHM0IsT0FBTzFWLEksY0NVVHRELEVBQU9ELFFBZlAsU0FBdUMrRCxFQUFRQyxHQUM3QyxHQUFjLE1BQVZELEVBQWdCLE1BQU8sR0FDM0IsSUFFSXRDLEVBQUt2QixFQUZMb0MsRUFBUyxHQUNUNFcsRUFBYXRZLE9BQU80SCxLQUFLekUsR0FHN0IsSUFBSzdELEVBQUksRUFBR0EsRUFBSWdaLEVBQVcxVyxPQUFRdEMsSUFDakN1QixFQUFNeVgsRUFBV2haLEdBQ2I4RCxFQUFTRyxRQUFRMUMsSUFBUSxJQUM3QmEsRUFBT2IsR0FBT3NDLEVBQU90QyxJQUd2QixPQUFPYSIsImZpbGUiOiJlbmdpbmUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMSk7XG4iLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jbGFzc0NhbGxDaGVjazsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZUNsYXNzOyIsImZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZjsiLCJ2YXIgc2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKFwiLi9zZXRQcm90b3R5cGVPZlwiKTtcblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbmhlcml0czsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9kZWZpbmVQcm9wZXJ0eTsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsIi8vIEVsZW1lbnQgQ29uc3RzXG5jb25zdCBCT0RZX1RZUEUgPSB7XG4gIFNUQVRJQzogMCxcbiAgS0lORU1BVElDOiAxLFxuICBEWU5BTUlDOiAyLFxufTtcblxuY29uc3QgR1JBRElFTlRfVFlQRVMgPSB7XG4gIExJTkVBUjogMCxcbiAgUkFESUFMOiAxLFxufTtcblxuY29uc3QgU0hBUEVfU1RZTEVTID0ge1xuICBOT05FOiAwLFxuICBOT1JNQUw6IDEsXG4gIEdSQURJRU5UOiAyLFxuICBQQVRURVJOOiAzLFxufTtcblxuY29uc3QgU0hBUEVTID0ge1xuICBUUklBTkdMRTogMCxcbiAgUkVDVEFOR0xFOiAxLFxuICBQRU5UQUdPTjogMixcbiAgSEVYQUdPTjogMyxcbiAgQVJDOiA0LFxuICBQT0xZR09OOiA1LFxufTtcblxuY29uc3QgR0FNRV9TVEFURVMgPSB7XG4gIEhPTUU6IDAsXG4gIFBMQVk6IDEsXG4gIFBBVVNFOiAyLFxuICBFTkQ6IDMsXG59O1xuXG5jb25zdCBLRVlfQ09ERVMgPSB7XG4gIEVTQzogXCJlc2NhcGVcIixcbiAgU1BBQ0U6IFwiIFwiLFxuICBMRUZUOiBcImFycm93bGVmdFwiLFxuICBSSUdIVDogXCJhcnJvd3JpZ2h0XCIsXG4gIEVOVEVSOiBcImVudGVyXCIsXG4gIE06IFwibVwiLFxufTtcblxuY29uc3QgUkVTT1VSQ0VfVFlQRSA9IHtcbiAgSU1BR0U6IDEsXG4gIEFVRElPOiAyLFxufTtcblxuY29uc3QgRU5USVRZX05PREVfVFlQRVMgPSB7XG4gIFdPUkxEOiAwLFxuICBMSUdIVDogMSxcbiAgQk9EWTogMixcbiAgUEhZU0lDU19CT0RZOiAzLFxuICBGTFVJRF9CT0RZOiA0LFxuICBUUkFOU0ZPUk06IDUsXG59O1xuXG5jb25zdCBUUkFOU0ZPUk1fT1JJR0lOID0ge1xuICBDRU5URVI6IDAsXG4gIExFRlRfVE9QOiAxLFxuICBSSUdIVF9UT1A6IDIsXG4gIFJJR0hUX0JPVFRPTTogMyxcbiAgTEVGVF9CT1RUT006IDQsXG59O1xuXG5leHBvcnQge1xuICBCT0RZX1RZUEUsXG4gIEdSQURJRU5UX1RZUEVTLFxuICBTSEFQRV9TVFlMRVMsXG4gIFNIQVBFUyxcbiAgR0FNRV9TVEFURVMsXG4gIEtFWV9DT0RFUyxcbiAgUkVTT1VSQ0VfVFlQRSxcbiAgRU5USVRZX05PREVfVFlQRVMsXG4gIFRSQU5TRk9STV9PUklHSU4sXG59O1xuIiwiaW1wb3J0IHsgUkVTT1VSQ0VfVFlQRSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY2xhc3MgUmVzb3VyY2VNYW5hZ2VyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5yZXNvdXJjZXMgPSBuZXcgTWFwKCk7XG4gIH1cblxuICBsb2FkUmVzb3VyY2VzKHJlc291cmNlcyA9IFtdLCBjYikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB7IHR5cGUgPSBSRVNPVVJDRV9UWVBFLklNQUdFLCBrZXkgPSBEYXRlLm5vdygpLCBzcmMgfSA9IHJlc291cmNlc1tcbiAgICAgICAgaVxuICAgICAgXTtcbiAgICAgIGlmICghdHlwZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNvdXJjZSBUWVBFIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoIXNyYykge1xuICAgICAgICBjb25zb2xlLndhcm4oXCJSZXNvdXJjZSBTUkMgaXMgcmVxdWlyZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlID09PSBSRVNPVVJDRV9UWVBFLkFVRElPKSB7XG4gICAgICAgIGNvbnN0IHJvID0gbmV3IEF1ZGlvKHNyYyk7XG4gICAgICAgIHJvLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5dGhyb3VnaFwiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRoaXMuYXNzZXRzW2tleV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5yZXNvdXJjZXMuc2V0KGtleSwgcm8pO1xuICAgICAgICAgIGNiICYmIGNiKGtleSwgcm8pO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gUkVTT1VSQ0VfVFlQRS5JTUFHRSkge1xuICAgICAgICBjb25zdCBybyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICByby5zcmMgPSBzcmM7XG4gICAgICAgIHJvLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnJlc291cmNlcy5zZXQoa2V5LCBybyk7XG4gICAgICAgICAgY2IgJiYgY2Ioa2V5LCBybyk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFzUmVzb3VyY2Uoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VzLmhhcyhrZXkpO1xuICB9XG5cbiAgcmVtb3ZlUmVzb3VyY2VzKGtleXMpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XG4gICAgICB0aGlzLnJlc291cmNlcy5kZWxldGUoa2V5KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVBbGwoKSB7XG4gICAgdGhpcy5yZXNvdXJjZXMuY2xlYXIoKTtcbiAgfVxuXG4gIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZXMuZ2V0KGtleSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzb3VyY2VNYW5hZ2VyO1xuIiwiLy8gaHR0cDovL3d3dy5ncmFwaGljcy5zdGFuZm9yZC5lZHUvfnNlYW5kZXIvYml0aGFja3MuaHRtbCNJbnRlZ2VyTWluT3JNYXhcblxuY29uc3Qgcm91bmRPZmYgPSAobnVtKSA9PiB7XG4gIHJldHVybiB+figwLjUgKyBudW0pO1xuICAvLyByZXR1cm4gKDAuNSArIG51bSkgfCAwO1xuICAvLyByZXR1cm4gKDAuNSArIG51bSkgfCAwO1xuICAvLyByZXR1cm4gKDAuNSArIG51bSkgPDwgMDtcbn07XG5cbmNvbnN0IG1pbmltdW0gPSAoeCwgeSkgPT4geSBeICgoeCBeIHkpICYgLSh4IDwgeSkpO1xuXG5jb25zdCBtYXhpbXVtID0gKHgsIHkpID0+IHggXiAoKHggXiB5KSAmIC0oeCA8IHkpKTtcblxuY29uc3QgaXNPcHBvc2l0ZSA9ICh4LCB5KSA9PiAoeCBeIHkpIDwgMDtcblxuY29uc3QgaXNQb3NpdGl2ZSA9ICh4KSA9PiB4ID49IDA7XG5cbmNvbnN0IGlzTmVnYXRpdmUgPSAoeCkgPT4geCA8IDA7XG5cbmNvbnN0IGhhc1ZhbHVlID0gKHgpID0+IHtcbiAgcmV0dXJuICEoeCA9PT0gbnVsbCB8fCB4ID09PSB1bmRlZmluZWQgfHwgaXNOYU4oeCkpO1xufTtcblxuLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vZ29yZG9uYnJhbmRlci8yMjMwMzE3I2dpc3Rjb21tZW50LTM0MDQ1MzdcbmNvbnN0IHVpZCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICBTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI2KSArIDk3KSArXG4gICAgTWF0aC5yYW5kb20oKS50b1N0cmluZygxNikuc2xpY2UoMikgK1xuICAgIERhdGUubm93KCkudG9TdHJpbmcoMTYpLnNsaWNlKDQpXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIHJvdW5kT2ZmLFxuICBtaW5pbXVtLFxuICBtYXhpbXVtLFxuICBpc09wcG9zaXRlLFxuICBpc1Bvc2l0aXZlLFxuICBpc05lZ2F0aXZlLFxuICBoYXNWYWx1ZSxcbiAgdWlkXG59O1xuIiwiZnVuY3Rpb24gQW5pbWF0b3Ioe1xuICBzdGFydFZhbCA9IDAsXG4gIG1pblZhbCA9IDAsXG4gIG1heFZhbCA9IDEsXG4gIHN0ZXAgPSAwLjEsXG4gIHRpY2tzSW50ZXJ2YWwgPSAxLFxuICBkaXJlY3Rpb24gPSAnYWx0ZXJuYXRlJywgLy8gbm9ybWFsIHwgcmV2ZXJzZSB8IGFsdGVybmF0ZSB8IGFsdGVybmF0ZS1yZXZlcnNlLFxuICBpdGVyYXRpb25Db3VudCA9IEluZmluaXR5XG4gIC8vIGZpbGxNb2RlID0gJ2ZvcndhcmRzJ1xufSkge1xuICB0aGlzLmFjdGl2ZVZhbCA9XG4gICAgc3RhcnRWYWwgPT09IG51bGwgfHwgc3RhcnRWYWwgPT09IHVuZGVmaW5lZCA/IG1pblZhbCA6IHN0YXJ0VmFsO1xuICB0aGlzLnN0ZXAgPSBzdGVwO1xuICB0aGlzLnJlZmVyZW5jZVRpY2sgPSAwO1xuICB0aGlzLmN1cnJlbnRUaWNrID0gMDtcbiAgdGhpcy5pdGVyYXRpb25Db3VudCA9IDA7XG5cbiAgY29uc3QgZ2V0ID0gKCkgPT4gdGhpcy5hY3RpdmVWYWw7XG4gIGNvbnN0IHNldCA9ICh2YWwpID0+ICh0aGlzLmFjdGl2ZVZhbCA9IHZhbCk7XG4gIGNvbnN0IHVwZGF0ZSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5pdGVyYXRpb25Db3VudCA+IGl0ZXJhdGlvbkNvdW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5pdGVyYXRpb25Db3VudCArPSAxO1xuICAgIHRoaXMuY3VycmVudFRpY2sgKz0gMTtcblxuICAgIGNvbnN0IHRpY2tzRGlmZiA9IHRoaXMuY3VycmVudFRpY2sgLSB0aGlzLnJlZmVyZW5jZVRpY2s7XG4gICAgaWYgKHRpY2tzRGlmZiA8IHRpY2tzSW50ZXJ2YWwpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZVZhbDtcbiAgICB9XG4gICAgdGhpcy5yZWZlcmVuY2VUaWNrID0gdGhpcy5jdXJyZW50VGljaztcblxuICAgIHRoaXMuYWN0aXZlVmFsICs9IHRoaXMuc3RlcDtcblxuICAgIGlmICh0aGlzLmFjdGl2ZVZhbCA+IG1heFZhbCB8fCB0aGlzLmFjdGl2ZVZhbCA8IG1pblZhbCkge1xuICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2FsdGVybmF0ZScpIHtcbiAgICAgICAgdGhpcy5zdGVwID0gLXRoaXMuc3RlcDtcbiAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbm9ybWFsJykge1xuICAgICAgICB0aGlzLmFjdGl2ZVZhbCA9IG1pblZhbDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlVmFsO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgZ2V0LFxuICAgIHNldCxcbiAgICB1cGRhdGVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQW5pbWF0b3I7XG4iLCIvLyBodHRwczovL2dhbWVkZXZlbG9wZXJ0aXBzLmNvbS92ZWN0b3ItaW4tZ2FtZS1kZXZlbG9wbWVudC9cbmltcG9ydCBDb21tb25zIGZyb20gJy4vQ29tbW9ucyc7XG5cbmNsYXNzIFZlY3RvcjJEIHtcbiAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgIHRoaXMueCA9IHggfHwgMDtcbiAgICB0aGlzLnkgPSB5IHx8IDA7XG4gIH1cblxuICAvLyBzY2FsYXIgYXJpdGhtZXRpY3NcbiAgYWRkKGEpIHtcbiAgICB0aGlzLnggKz0gYTtcbiAgICB0aGlzLnkgKz0gYTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHN1YihhKSB7XG4gICAgdGhpcy54IC09IGE7XG4gICAgdGhpcy55IC09IGE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBtdWwoYSkge1xuICAgIHRoaXMueCAqPSBhO1xuICAgIHRoaXMueSAqPSBhO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZGl2KGEpIHtcbiAgICB0aGlzLnggLz0gYTtcbiAgICB0aGlzLnkgLz0gYTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHZlY3RvciBhcml0aG1ldGljc1xuICBzdGF0aWMgYWRkKHYxLCB2Mikge1xuICAgIHJldHVybiBuZXcgVmVjdG9yMkQodjEueCArIHYyLngsIHYxLnkgKyB2Mi55KTtcbiAgfVxuXG4gIHN0YXRpYyBzdWIodjEsIHYyKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh2MS54IC0gdjIueCwgdjEueSAtIHYyLnkpO1xuICB9XG5cbiAgc3RhdGljIG11bCh2MSwgdjIpIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKHYxLnggKiB2Mi54LCB2MS55ICogdjIueSk7XG4gIH1cblxuICBzdGF0aWMgZGl2KHYxLCB2Mikge1xuICAgIHJldHVybiBuZXcgVmVjdG9yMkQodjEueCAvIHYyLngsIHYxLnkgLyB2Mi55KTtcbiAgfVxuXG4gIG1hZygpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSk7XG4gIH1cblxuICBtYWdTcSgpIHtcbiAgICByZXR1cm4gdGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55O1xuICB9XG5cbiAgbm9ybWFsaXNlKCkge1xuICAgIGNvbnN0IG1hZyA9IHRoaXMubWFnKCk7XG4gICAgcmV0dXJuIHRoaXMuZGl2KG1hZyk7XG4gIH1cblxuICBzZXRNYWcobWFnKSB7XG4gICAgY29uc3QgY3Vyck1hZyA9IHRoaXMubWFnKCk7XG4gICAgcmV0dXJuIHRoaXMuZGl2KGN1cnJNYWcpLm11bChtYWcpO1xuICB9XG5cbiAgLy8gc2V0TWFnMihtYWcpIHtcbiAgLy8gICBjb25zdCB0aGV0YSA9IHRoaXMuZ2V0QW5nbGUoKTtcbiAgLy8gICB0aGlzLnggPSBNYXRoLmNvcyh0aGV0YSkgKiBtYWc7XG4gIC8vICAgdGhpcy55ID0gTWF0aC5zaW4odGhldGEpICogbWFnO1xuICAvLyAgIHJldHVybiB0aGlzO1xuICAvLyB9XG5cbiAgbGltaXRNYWcobGltaXRBbXQgPSB7IG1pbjogbnVsbCwgbWF4OiBudWxsIH0pIHtcbiAgICBjb25zdCBtYWcgPSB0aGlzLm1hZygpO1xuICAgIGlmIChcbiAgICAgIChDb21tb25zLmhhc1ZhbHVlKGxpbWl0QW10Lm1heCkgJiYgbWFnID4gbGltaXRBbXQubWF4KSB8fFxuICAgICAgKENvbW1vbnMuaGFzVmFsdWUobGltaXRBbXQubWluKSAmJiBtYWcgPCBsaW1pdEFtdC5taW4pXG4gICAgKSB7XG4gICAgICB0aGlzLm5vcm1hbGlzZSgpLm11bChsaW1pdEFtdCk7XG4gICAgfVxuICB9XG5cbiAgcm90YXRlKHRoZXRhKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzO1xuXG4gICAgdGhpcy54ID0gTWF0aC5jb3ModGhldGEpICogeCAtIE1hdGguc2luKHRoZXRhKSAqIHk7XG4gICAgdGhpcy55ID0gTWF0aC5zaW4odGhldGEpICogeCArIE1hdGguY29zKHRoZXRhKSAqIHk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHNldEFuZ2xlKHRoZXRhKSB7XG4gICAgY29uc3QgbWFnID0gdGhpcy5tYWcoKTtcbiAgICB0aGlzLnggPSBNYXRoLmNvcyh0aGV0YSkgKiBtYWc7XG4gICAgdGhpcy55ID0gTWF0aC5zaW4odGhldGEpICogbWFnO1xuICB9XG5cbiAgZ2V0QW5nbGUoKSB7XG4gICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xuICB9XG5cbiAgcmV2KCkge1xuICAgIHRoaXMueCAqPSAtMTtcbiAgICB0aGlzLnkgKj0gLTE7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICByZXZYKCkge1xuICAgIHRoaXMueCAqPSAtMTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHJldlkoKSB7XG4gICAgdGhpcy55ICo9IC0xO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLngsIHRoaXMueSk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gYFZlY3RvcjJEKCR7dGhpcy54fSwgJHt0aGlzLnl9KWA7XG4gIH1cblxuICB0b0FycmF5KCkge1xuICAgIHJldHVybiBbdGhpcy54LCB0aGlzLnldO1xuICB9XG5cbiAgLyoqXG4gICAqIGh0dHBzOi8vd3d3Lm1hdGhzaXNmdW4uY29tL2FsZ2VicmEvdmVjdG9ycy1kb3QtcHJvZHVjdC5odG1sXG4gICAqIG9yIHx2MXwgKiB8djJ8ICogY29zKHRoZXRhKVxuICAgKi9cbiAgc3RhdGljIGRvdFByb2R1Y3QodjEsIHYyKSB7XG4gICAgcmV0dXJuIHYxLnggKiB2Mi54ICsgdjEueSAqIHYyLnk7XG4gIH1cblxuICAvKipcbiAgICogaHR0cHM6Ly93d3cubWF0aHNpc2Z1bi5jb20vYWxnZWJyYS92ZWN0b3JzLWNyb3NzLXByb2R1Y3QuaHRtbFxuICAgKiBvciB8djF8ICogfHYyfCAqIHNpbih0aGV0YSkgKiBVbml0VmVjdG9yXG4gICAqL1xuICBzdGF0aWMgY3Jvc3NQcm9kdWN0KHYxLCB2Mikge1xuICAgIHJldHVybiB2MS54ICogdjIueSAtIHYxLnkgKiB2Mi54O1xuICB9XG5cbiAgLy8gUHJvamVjdGluZyB2MiBvbnRvIHYxXG4gIHN0YXRpYyBwcm9qZWN0KHYxLCB2Mikge1xuICAgIGNvbnN0IHNoYWRvdyA9IFZlY3RvcjJELmRvdFByb2R1Y3QodjEsIHYyKSAvIHYxLm1hZ1NxKCk7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRCh2MS54ICogc2hhZG93LCB2MS55ICogc2hhZG93KTtcbiAgfVxuXG4gIHN0YXRpYyBkaXN0KHYxLCB2Mikge1xuICAgIGNvbnN0IGR4ID0gdjEueCAtIHYyLng7XG4gICAgY29uc3QgZHkgPSB2MS55IC0gdjIueTtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcbiAgfVxuXG4gIHN0YXRpYyBkaXN0U3EodjEsIHYyKSB7XG4gICAgY29uc3QgZHggPSB2MS54IC0gdjIueDtcbiAgICBjb25zdCBkeSA9IHYxLnkgLSB2Mi55O1xuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBbmdsZSh2MSwgdjIpIHtcbiAgICByZXR1cm4gTWF0aC5hY29zKFZlY3RvcjJELmRvdFByb2R1Y3QodjEsIHYyKSAvICh2MS5tYWcoKSAqIHYyLm1hZygpKSk7XG4gIH1cblxuICBzdGF0aWMgcG9sYXJUb0NhcnRlc2lhbihyLCB0aGV0YSkge1xuICAgIHJldHVybiBbciAqIE1hdGguY29zKHRoZXRhKSwgciAqIE1hdGguc2luKHRoZXRhKV07XG4gIH1cblxuICBzdGF0aWMgY2FydGVzaWFuVG9Qb2xhcih2MSkge1xuICAgIHJldHVybiBbdjEubWFnKCksIE1hdGguYXRhbih2MS55IC8gdjEueCldO1xuICB9XG5cbiAgLy8gcmV0dXJucyB1bml0IHZlY3RvciBwb2ludGluZyBpbiByYW5kb20gZGlyZWN0aW9uXG4gIHN0YXRpYyBnZXRSYW5kb20obWFnID0gMSkge1xuICAgIGNvbnN0IFt4LCB5XSA9IFZlY3RvcjJELnBvbGFyVG9DYXJ0ZXNpYW4obWFnLCBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDIpO1xuICAgIHJldHVybiBuZXcgVmVjdG9yMkQoeCwgeSk7XG4gIH1cblxuICBzdGF0aWMgemVybygpIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKDAsIDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZlY3RvcjJEO1xuIiwiaW1wb3J0IHsgQ29tbW9ucyB9IGZyb20gJy4uL2NvcmUnO1xuXG5jbGFzcyBfbm9kZSB7XG4gIGNvbnN0cnVjdG9yKHsgbGFiZWwsIGVudGl0eSwgY2hpbGRyZW4gfSA9IHt9KSB7XG4gICAgdGhpcy5pZCA9IENvbW1vbnMudWlkKCk7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIHRoaXMudHlwZSA9IG51bGw7XG4gICAgdGhpcy5lbnRpdHkgPSBlbnRpdHkgfHwgbnVsbDtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudCB8fCBudWxsO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBuZXcgTWFwKGNoaWxkcmVuIHx8IFtdKTtcbiAgfVxuXG4gIGFkZChlbnRpdHkpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnNldChlbnRpdHkuaWQsIGVudGl0eSk7XG4gICAgZW50aXR5LmFkZFRvKHRoaXMpO1xuICB9XG5cbiAgYWRkVG8ocGFyZW50KSB7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5wYXJlbnQub25BZGRDaGlscmVuKHRoaXMpO1xuICB9XG5cbiAgb25BZGRDaGlscmVuKCkge31cbn1cblxuZXhwb3J0IGRlZmF1bHQgX25vZGU7XG4iLCJpbXBvcnQgX25vZGUgZnJvbSAnLi9fbm9kZSc7XG5pbXBvcnQgeyBFTlRJVFlfTk9ERV9UWVBFUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cyc7XG5cbi8qKlxuICogQ2FuZGlkYXRlIGVudmlyb25tZW50IHZhcmlhYmxlc1xuICogLSBHcmF2aXR5XG4gKiAtIEJvdW5kc1xuICogLSBBaXIgRGVuc2l0eVxuICogLSBUZW1wZXJhdHVyZVxuICogLSBCYWNrZ3JvdW5kXG4gKiAtIExpZ2h0XG4gKiAtIENhbWVyYVxuICogLSBUcmFuc2Zvcm1hdGlvbnNcbiAqL1xuY2xhc3MgV29ybGQgZXh0ZW5kcyBfbm9kZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzID0ge30pIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3Qge1xuICAgICAgZ3Jhdml0eSA9IDAsXG4gICAgICBib3VuZHMgPSBbXG4gICAgICAgIHsgeDogLUluZmluaXR5LCB5OiAtSW5maW5pdHkgfSxcbiAgICAgICAgeyB4OiBJbmZpbml0eSwgeTogSW5maW5pdHkgfVxuICAgICAgXVxuICAgIH0gPSBwcm9wcztcblxuICAgIHRoaXMudHlwZSA9IEVOVElUWV9OT0RFX1RZUEVTLldPUkxEO1xuICAgIHRoaXMuZ3Jhdml0eSA9IGdyYXZpdHk7XG4gICAgdGhpcy5ib3VuZHMgPSBib3VuZHM7XG4gIH1cblxuICBzZXRHcmF2aXR5KGdyYXZpdHkpIHtcbiAgICB0aGlzLmdyYXZpdHkgPSBncmF2aXR5O1xuICB9XG5cbiAgc2V0Qm91bmRzKGJvdW5kcykge1xuICAgIHRoaXMuYm91bmRzID0gYm91bmRzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdvcmxkO1xuIiwiaW1wb3J0IHsgRU5USVRZX05PREVfVFlQRVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmltcG9ydCBfbm9kZSBmcm9tIFwiLi9fbm9kZVwiO1xuXG5jbGFzcyBMaWdodCBleHRlbmRzIF9ub2RlIHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnR5cGUgPSBFTlRJVFlfTk9ERV9UWVBFUy5MSUdIVDtcbiAgfVxuXG4gIHJlbmRlcigpIHt9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExpZ2h0O1xuIiwiaW1wb3J0IHsgVFJBTlNGT1JNX09SSUdJTiwgRU5USVRZX05PREVfVFlQRVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmltcG9ydCBfbm9kZSBmcm9tIFwiLi9fbm9kZVwiO1xuXG4vLyBET0MgOjogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0NhbnZhc19BUEkvVHV0b3JpYWwvVHJhbnNmb3JtYXRpb25zXG5jbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBfbm9kZSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy50eXBlID0gRU5USVRZX05PREVfVFlQRVMuVFJBTlNGT1JNO1xuXG4gICAgdGhpcy5vcmlnaW4gPSBwcm9wcy5vcmlnaW4gfHwgVFJBTlNGT1JNX09SSUdJTi5DRU5URVI7XG4gICAgdGhpcy5yb3RhdGUgPSBwcm9wcy5yb3RhdGU7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSBwcm9wcy50cmFuc2Zvcm0gfHwgW1xuICAgICAgWzEsIDAsIDBdLFxuICAgICAgWzAsIDEsIDBdLFxuICAgICAgWzAsIDAsIDFdLFxuICAgIF07XG4gIH1cblxuICBvbkFkZENoaWxyZW4oY2hpbGQpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gY2hpbGQucG9zaXRpb247XG4gICAgdGhpcy5ib3VuZGluZ0JveCA9IGNoaWxkLmJvdW5kaW5nQm94O1xuICAgIHRoaXMud2lkdGggPSBjaGlsZC53aWR0aDtcbiAgICB0aGlzLmhlaWdodCA9IGNoaWxkLmhlaWdodDtcblxuICAgIHRoaXMucGFyZW50Lm9uQWRkQ2hpbHJlbih0aGlzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zvcm07XG4iLCJpbXBvcnQgeyBFTlRJVFlfTk9ERV9UWVBFUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuaW1wb3J0IF9ub2RlIGZyb20gXCIuL19ub2RlXCI7XG5cbmNsYXNzIExheWVyIGV4dGVuZHMgX25vZGUge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMudHlwZSA9IEVOVElUWV9OT0RFX1RZUEVTLkxBWUVSO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheWVyO1xuIiwiaW1wb3J0IHsgU0hBUEVTLCBFTlRJVFlfTk9ERV9UWVBFUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCBWZWN0b3IyRCBmcm9tIFwiLi4vY29yZS9WZWN0b3IyRFwiO1xuaW1wb3J0IENvbW1vbnMgZnJvbSBcIi4uL2NvcmUvQ29tbW9uc1wiO1xuXG5pbXBvcnQgX25vZGUgZnJvbSBcIi4vX25vZGVcIjtcblxuY29uc3QgZGVmYXVsdFN0YXRlID0ge1xuICBzaGFwZTogU0hBUEVTLlJFQ1RBTkdMRSxcbiAgcG9zaXRpb246IFswLCAwXSxcbiAgZGVidWc6IGZhbHNlLFxuICBib3VuZGluZ0JveDoge1xuICAgIG1hcmdpbnM6IFswLCAwLCAwLCAwXSxcbiAgICBzaGFwZTogU0hBUEVTLlJFQ1RBTkdMRSxcbiAgICBjb2xvcjogXCJyZWRcIixcbiAgfSxcbn07XG5cbi8vIFN0eWxlcyBhbmQgdGV4dHVyZXMgd2lsbCBiZSBhcHBsaWVkIHRvIGFsbCBjaGlsZHJlbiBhcyB3ZWxsXG4vLyBjaGlsZHJlbiBjYW4gaGF2ZSBvdmVycmlkZW4gc3R5bGVzIGFzIHdlbGwsIGluaGVyaXQgdW5zcGVjaWZpZWQgdmFsdWVzXG5jbGFzcyBCb2R5IGV4dGVuZHMgX25vZGUge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIHNoYXBlID0gZGVmYXVsdFN0YXRlLnNoYXBlLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICByYWRpdXMsXG4gICAgICBzdGFydEFuZ2xlLFxuICAgICAgZW5kQW5nbGUsXG4gICAgICB2ZXJ0aWNlcyxcbiAgICAgIGVkZGdlcyxcblxuICAgICAgcG9zaXRpb24gPSBkZWZhdWx0U3RhdGUucG9zaXRpb24sXG5cbiAgICAgIHN0eWxlcywgLy8gYmFja2dyb3VuZENvbG9yLCBiYWNrZ3JvdW5kSW1hZ2UsIGJhY2tncm91bmRHcmFkaWVudCwgYm9yZGVyQ29sb3IsIGJvcmRlclNpemVcblxuICAgICAgZGVidWcgPSBkZWZhdWx0U3RhdGUuZGVidWcsXG4gICAgICAvLyBjb2xsaXNpb24gYm94P1xuICAgICAgYm91bmRpbmdCb3ggPSBkZWZhdWx0U3RhdGUuYm91bmRpbmdCb3gsXG5cbiAgICAgIC4uLnJlc3RQcm9wc1xuICAgIH0gPSBwcm9wcztcblxuICAgIHRoaXMudHlwZSA9IEVOVElUWV9OT0RFX1RZUEVTLkJPRFk7XG5cbiAgICB0aGlzLnNoYXBlID0gc2hhcGU7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIHRoaXMuc3RhcnRBbmdsZSA9IHN0YXJ0QW5nbGU7XG4gICAgdGhpcy5lbmRBbmdsZSA9IGVuZEFuZ2xlO1xuICAgIHRoaXMudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICB0aGlzLmVkZGdlcyA9IGVkZGdlcztcblxuICAgIC8vIHNob3VsZCBJIHNhdmUgY29ybmVycz8gYW5kIGVkZ2VzP1xuICAgIC8vIHVzZXJzIHdpbGwgYmUgZ2l2aW5nIGNlbnRlciBwb3MgYnkgZGVmYXVsdFxuICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMkQocG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdKTtcblxuICAgIHRoaXMuc3R5bGVzID0gc3R5bGVzO1xuXG4gICAgdGhpcy5kZWJ1ZyA9IGRlYnVnO1xuICAgIHRoaXMuYm91bmRpbmdCb3ggPSB7IC4uLmRlZmF1bHRTdGF0ZS5ib3VuZGluZ0JveCwgLi4uYm91bmRpbmdCb3ggfTtcblxuICAgIHRoaXMucmVzdFByb3BzID0gcmVzdFByb3BzO1xuICB9XG5cbiAgb25BZGRDaGlscmVuKGNoaWxkKSB7XG4gICAgaWYgKCF0aGlzLnBvc2l0aW9uIHx8ICFjaGlsZC5wb3NpdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHtcbiAgICAgIHBvc2l0aW9uOiBjUG9zaXRpb24sXG4gICAgICBib3VuZGluZ0JveDogeyBtYXJnaW5zOiBjQm91bmRpbmdCb3hNYXJnaW4gfSxcbiAgICAgIHdpZHRoOiBjV2lkdGgsXG4gICAgICBoZWlnaHQ6IGNIZWlnaHQsXG4gICAgfSA9IGNoaWxkO1xuICAgIGNvbnN0IHtcbiAgICAgIHBvc2l0aW9uOiBwUG9zaXRpb24sXG4gICAgICBib3VuZGluZ0JveDogeyBtYXJnaW5zOiBwQm91bmRpbmdCb3hNYXJnaW4gfSxcbiAgICAgIHdpZHRoOiBwV2lkdGgsXG4gICAgICBoZWlnaHQ6IHBIZWlnaHQsXG4gICAgfSA9IHRoaXM7XG5cbiAgICBjb25zdCB4TWluID0gQ29tbW9ucy5taW5pbXVtKFxuICAgICAgcFBvc2l0aW9uLnggLSBwQm91bmRpbmdCb3hNYXJnaW5bM10sXG4gICAgICBjUG9zaXRpb24ueCAtIGNCb3VuZGluZ0JveE1hcmdpblszXVxuICAgICk7XG4gICAgY29uc3QgeU1pbiA9IENvbW1vbnMubWluaW11bShcbiAgICAgIHBQb3NpdGlvbi55IC0gcEJvdW5kaW5nQm94TWFyZ2luWzBdLFxuICAgICAgY1Bvc2l0aW9uLnkgLSBjQm91bmRpbmdCb3hNYXJnaW5bMF1cbiAgICApO1xuXG4gICAgY29uc3QgeE1heCA9IENvbW1vbnMubWF4aW11bShcbiAgICAgIHBQb3NpdGlvbi54ICsgcFdpZHRoICsgcEJvdW5kaW5nQm94TWFyZ2luWzFdLFxuICAgICAgY1Bvc2l0aW9uLnggKyBjV2lkdGggKyBjQm91bmRpbmdCb3hNYXJnaW5bMV1cbiAgICApO1xuICAgIGNvbnN0IHlNYXggPSBDb21tb25zLm1heGltdW0oXG4gICAgICBwUG9zaXRpb24ueSArIHBIZWlnaHQgKyBwQm91bmRpbmdCb3hNYXJnaW5bMl0sXG4gICAgICBjUG9zaXRpb24ueSArIGNIZWlnaHQgKyBjQm91bmRpbmdCb3hNYXJnaW5bMl1cbiAgICApO1xuXG4gICAgdGhpcy5ib3VuZGluZ0JveC5tYXJnaW5zID0gW1xuICAgICAgcFBvc2l0aW9uLnkgLSB5TWluLFxuICAgICAgeE1heCAtIChwUG9zaXRpb24ueCArIHBXaWR0aCksXG4gICAgICB5TWF4IC0gKHBQb3NpdGlvbi55ICsgcEhlaWdodCksXG4gICAgICBwUG9zaXRpb24ueCAtIHhNaW4sXG4gICAgXTtcblxuICAgIHRoaXMucGFyZW50Lm9uQWRkQ2hpbHJlbih0aGlzKTtcbiAgfVxufVxuXG5Cb2R5LmdldERlYnVnTWVzc2FnZSA9IChib2R5KSA9PiB7XG4gIHJldHVybiBgUG9zIDo6ICR7Ym9keS5wb3NpdGlvbi54fSwgJHtib2R5LnBvc2l0aW9uLnl9YDtcbn07XG5cbkJvZHkuY3JlYXRlQXJjID0gKHtcbiAgcmFkaXVzLFxuICBzdGFydEFuZ2xlID0gMCxcbiAgZW5kQW5nbGUgPSBNYXRoLlBJICogMixcbiAgcG9zaXRpb24sXG4gIC4uLnJlc3RQcm9wc1xufSkgPT4ge1xuICByZXR1cm4gbmV3IEJvZHkoe1xuICAgIHNoYXBlOiBTSEFQRVMuQVJDLFxuICAgIHdpZHRoOiAyICogcmFkaXVzLFxuICAgIGhlaWdodDogMiAqIHJhZGl1cyxcbiAgICBzdGFydEFuZ2xlLFxuICAgIGVuZEFuZ2xlLFxuICAgIHJhZGl1cyxcbiAgICBwb3NpdGlvbixcbiAgICAuLi5yZXN0UHJvcHMsXG4gIH0pO1xufTtcblxuQm9keS5jcmVhdGVSZWN0YW5nbGUgPSAoeyB3aWR0aCwgaGVpZ2h0LCBwb3NpdGlvbiwgLi4ucmVzdFByb3BzIH0pID0+IHtcbiAgcmV0dXJuIG5ldyBCb2R5KHtcbiAgICBzaGFwZTogU0hBUEVTLlJFQ1RBTkdMRSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHQsXG4gICAgcG9zaXRpb24sXG4gICAgLi4ucmVzdFByb3BzLFxuICB9KTtcbn07XG5cbkJvZHkuY3JlYXRlUG9seWdvbiA9ICh7IHZlcnRpY2VzLCBlZGRnZXMsIHBvc2l0aW9uLCAuLi5yZXN0UHJvcHMgfSkgPT4ge1xuICBsZXQgbWluWCA9IDA7XG4gIGxldCBtaW5ZID0gMDtcblxuICBsZXQgbWF4WCA9IDA7XG4gIGxldCBtYXhZID0gMDtcblxuICB2ZXJ0aWNlcy5tYXAoKFt4LCB5XSkgPT4ge1xuICAgIG1pblggPSBDb21tb25zLm1pbmltdW0oeCwgbWluWCk7XG4gICAgbWF4WCA9IENvbW1vbnMubWF4aW11bSh4LCBtYXhYKTtcblxuICAgIG1pblkgPSBDb21tb25zLm1pbmltdW0oeSwgbWluWSk7XG4gICAgbWF4WSA9IENvbW1vbnMubWF4aW11bSh5LCBtYXhZKTtcbiAgfSk7XG4gIHJldHVybiBuZXcgQm9keSh7XG4gICAgc2hhcGU6IFNIQVBFUy5QT0xZR09OLFxuICAgIHdpZHRoOiBtYXhYIC0gbWluWCxcbiAgICBoZWlnaHQ6IG1heFkgLSBtaW5ZLFxuICAgIHBvc2l0aW9uLFxuICAgIHZlcnRpY2VzLFxuICAgIGVkZGdlcyxcbiAgICAuLi5yZXN0UHJvcHMsXG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm9keTtcbiIsImltcG9ydCB7IEJPRFlfVFlQRSwgRU5USVRZX05PREVfVFlQRVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgVmVjdG9yMkQgZnJvbSBcIi4uL2NvcmUvVmVjdG9yMkRcIjtcblxuaW1wb3J0IEJvZHkgZnJvbSBcIi4vQm9keVwiO1xuXG4vLyAtLS0tLSBFdmFsdXRhdGUgRXNzZW50aWFscyAtLS0tLS0tXG4vLyBCb3VuZGluZyBCb3hcbi8vIENlbnRlciBvZiBtYXNzXG4vLyBWZWN0b3IgQm94XG4vLyBMYWJlbCBCb3hcbi8vIENvbGxpc2lvbiBQb2ludHNcbi8vIFN1cmZhY2UgQXJlYVxuLy8gb25Db2xsaXNpb24oKSB7fVxuLy8gZ2V0U3BlZWQoKVxuLy8gZ2V0RGlyZWN0aW9uKClcbmNsYXNzIFBoeXNpY3NCb2R5IGV4dGVuZHMgQm9keSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3Qge1xuICAgICAgLy8gY2hlY2sgaWYgY29sbGlzaW9uIGNhbiBvY2NlciB1c2luZyB0aGVzZVxuICAgICAgYm9keVR5cGUgPSBCT0RZX1RZUEUuS0lORU1BVElDLFxuICAgICAgY2F0ZWdvcnlNYXNrID0gMGIwMDEsXG4gICAgICBjb2xsaXNpb25NYXNrID0gMGIxMTEsXG5cbiAgICAgIG1hc3MsXG4gICAgICByZXN0aXR1dGlvbixcbiAgICAgIC8vIGJvdW54ZVxuICAgICAgZnJpY3Rpb24sXG4gICAgICBncmF2aXR5U2NhbGUsXG5cbiAgICAgIGxpbmVhckRyYWcsXG4gICAgICBhbmd1bGFyRHJhZyxcblxuICAgICAgdmVsb2NpdHksXG4gICAgICAvLyBzcGVlZFxuICAgICAgZGlyZWN0aW9uLCAvLyA8LS0tLS0tID8gdnggPSBjb3MoYSkqc3BlZWQgICYmIHZ5ID0gc2luKGEpKnNwZWVkIFxuICAgICAgYWNjZWxlcmF0aW9uLFxuICAgIH0gPSBwcm9wcztcblxuICAgIHRoaXMudHlwZSA9IEVOVElUWV9OT0RFX1RZUEVTLlBIWVNJQ1NfQk9EWTtcblxuICAgIHRoaXMuYm9keVR5cGUgPSBib2R5VHlwZTtcbiAgICB0aGlzLmNhdGVnb3J5TWFzayA9IGNhdGVnb3J5TWFzaztcbiAgICB0aGlzLmNvbGxpc2lvbk1hc2sgPSBjb2xsaXNpb25NYXNrO1xuXG4gICAgdGhpcy5tYXNzID0gbWFzcztcbiAgICB0aGlzLnJlc3RpdHV0aW9uID0gcmVzdGl0dXRpb247XG4gICAgdGhpcy5mcmljdGlvbiA9IGZyaWN0aW9uO1xuICAgIHRoaXMuZ3Jhdml0eVNjYWxlID0gZ3Jhdml0eVNjYWxlO1xuXG4gICAgdGhpcy5saW5lYXJEcmFnID0gbGluZWFyRHJhZztcbiAgICB0aGlzLmFuZ3VsYXJEcmFnID0gYW5ndWxhckRyYWc7XG5cbiAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcjJEKHZlbG9jaXR5WzBdLCB2ZWxvY2l0eVsxXSk7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yMkQoZGlyZWN0aW9uWzBdLCBkaXJlY3Rpb25bMV0pO1xuICAgIHRoaXMuYWNjZWxlcmF0aW9uID0gbmV3IFZlY3RvcjJEKGFjY2VsZXJhdGlvblswXSwgYWNjZWxlcmF0aW9uWzFdKTtcbiAgfVxufVxuXG5QaHlzaWNzQm9keS5nZXREZWJ1Z01lc3NhZ2UgPSAoYm9keSkgPT4ge1xuICByZXR1cm4gYFxuICAgIFBvcyA6OiAke2JvZHkucG9zaXRpb24ueH0sICR7Ym9keS5wb3NpdGlvbi55fSBcXG4gXG4gICAgVmVsIDo6ICR7Ym9keS52ZWxvY2l0eS54fSwgJHtib2R5LnZlbG9jaXR5Lnl9IFxcblxuICAgIEFjYyA6OiAke2JvZHkuYWNjZWxlcmF0aW9uLnh9LCAke2JvZHkuYWNjZWxlcmF0aW9uLnl9IFxcblxuICBgO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGh5c2ljc0JvZHk7XG4iLCJpbXBvcnQgeyBCT0RZX1RZUEUsIEVOVElUWV9OT0RFX1RZUEVTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IFZlY3RvcjJEIGZyb20gXCIuLi9jb3JlL1ZlY3RvcjJEXCI7XG5cbmltcG9ydCBCb2R5IGZyb20gXCIuL0JvZHlcIjtcblxuY2xhc3MgRmx1aWRCb2R5IGV4dGVuZHMgQm9keSB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgY29uc3Qge1xuICAgICAgLy8gY2hlY2sgaWYgY29sbGlzaW9uIGNhbiBvY2NlciB1c2luZyB0aGVzZVxuICAgICAgYm9keVR5cGUgPSBCT0RZX1RZUEUuS0lORU1BVElDLFxuICAgICAgY2F0ZWdvcnlNYXNrID0gMGIwMDEsXG4gICAgICBjb2xsaXNpb25NYXNrID0gMGIxMTEsXG5cbiAgICAgIG1hc3MsXG4gICAgICByZXN0aXR1dGlvbixcbiAgICAgIGZyaWN0aW9uLFxuICAgICAgZ3Jhdml0eVNjYWxlLFxuXG4gICAgICBsaW5lYXJEcmFnLFxuICAgICAgYW5ndWxhckRyYWcsXG5cbiAgICAgIHZlbG9jaXR5LFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgYWNjZWxlcmF0aW9uLFxuICAgIH0gPSBwcm9wcztcblxuICAgIHRoaXMudHlwZSA9IEVOVElUWV9OT0RFX1RZUEVTLkZMVUlEX0JPRFk7XG5cbiAgICB0aGlzLmJvZHlUeXBlID0gYm9keVR5cGU7XG4gICAgdGhpcy5jYXRlZ29yeU1hc2sgPSBjYXRlZ29yeU1hc2s7XG4gICAgdGhpcy5jb2xsaXNpb25NYXNrID0gY29sbGlzaW9uTWFzaztcblxuICAgIHRoaXMubWFzcyA9IG1hc3M7XG4gICAgdGhpcy5yZXN0aXR1dGlvbiA9IHJlc3RpdHV0aW9uO1xuICAgIHRoaXMuZnJpY3Rpb24gPSBmcmljdGlvbjtcbiAgICB0aGlzLmdyYXZpdHlTY2FsZSA9IGdyYXZpdHlTY2FsZTtcblxuICAgIHRoaXMubGluZWFyRHJhZyA9IGxpbmVhckRyYWc7XG4gICAgdGhpcy5hbmd1bGFyRHJhZyA9IGFuZ3VsYXJEcmFnO1xuXG4gICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IyRCh2ZWxvY2l0eVswXSwgdmVsb2NpdHlbMV0pO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gbmV3IFZlY3RvcjJEKGRpcmVjdGlvblswXSwgZGlyZWN0aW9uWzFdKTtcbiAgICB0aGlzLmFjY2VsZXJhdGlvbiA9IG5ldyBWZWN0b3IyRChhY2NlbGVyYXRpb25bMF0sIGFjY2VsZXJhdGlvblsxXSk7XG4gIH1cbn1cblxuRmx1aWRCb2R5LmdldERlYnVnTWVzc2FnZSA9IChib2R5KSA9PiB7XG4gIHJldHVybiBgXG4gICAgUG9zIDo6ICR7Ym9keS5wb3NpdGlvbi54fSwgJHtib2R5LnBvc2l0aW9uLnl9IFxcbiBcbiAgICBWZWwgOjogJHtib2R5LnZlbG9jaXR5Lnh9LCAke2JvZHkudmVsb2NpdHkueX0gXFxuXG4gICAgQWNjIDo6ICR7Ym9keS5hY2NlbGVyYXRpb24ueH0sICR7Ym9keS5hY2NlbGVyYXRpb24ueX0gXFxuXG4gIGA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbHVpZEJvZHk7XG4iLCJpbXBvcnQgV29ybGQgZnJvbSAnLi9Xb3JsZCc7XG5pbXBvcnQgTGlnaHQgZnJvbSAnLi9MaWdodCc7XG5pbXBvcnQgVHJhbnNmb3JtIGZyb20gJy4vVHJhbnNmb3JtJztcbmltcG9ydCBMYXllciBmcm9tICcuL0xheWVyJztcbmltcG9ydCBCb2R5IGZyb20gJy4vQm9keSc7XG5pbXBvcnQgUGh5c2ljc0JvZHkgZnJvbSAnLi9QaHlzaWNzQm9keSc7XG5pbXBvcnQgRmx1aWRCb2R5IGZyb20gJy4vRmx1aWRCb2R5JztcblxuY2xhc3MgRW50aXR5TWFuYWdlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucGFyZW50SW5kZXggPSBuZXcgTWFwKCk7XG4gICAgdGhpcy5yb290ID0gbnVsbDtcbiAgfVxuXG4gIHNldFJvb3QoZWxlbSkge1xuICAgIHRoaXMucm9vdCA9IGVsZW07XG4gIH1cblxuICBnZXRSb290KCkge1xuICAgIHJldHVybiB0aGlzLnJvb3Q7XG4gIH1cblxuICBnZXRJdGVtc1RvUmVuZGVyKG5vZGUpIHtcbiAgICBjb25zdCBlbGVtID0gbm9kZSB8fCB0aGlzLnJvb3Q7XG4gICAgbGV0IGl0ZW1zID0gW107XG5cbiAgICBpdGVtcy5wdXNoKGVsZW0pO1xuXG4gICAgaWYgKGVsZW0uY2hpbGRyZW4gJiYgZWxlbS5jaGlsZHJlbi5zaXplKSB7XG4gICAgICBmb3IgKGNvbnN0IFssIHZhbF0gb2YgZWxlbS5jaGlsZHJlbikge1xuICAgICAgICBpdGVtcyA9IGl0ZW1zLmNvbmNhdCh0aGlzLmdldEl0ZW1zVG9SZW5kZXIodmFsKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfVxuXG4gIGdldEVudGl0eUJ5SWQoKSB7fVxufVxuXG5FbnRpdHlNYW5hZ2VyLmNyZWF0ZVdvcmxkID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiBuZXcgV29ybGQocHJvcHMpO1xufTtcblxuRW50aXR5TWFuYWdlci5jcmVhdGVMaWdodCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gbmV3IExpZ2h0KHByb3BzKTtcbn07XG5cbkVudGl0eU1hbmFnZXIuY3JlYXRlVHJhbnNmb3JtID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiBuZXcgVHJhbnNmb3JtKHByb3BzKTtcbn07XG5cbkVudGl0eU1hbmFnZXIuY3JlYXRlTGF5ZXIgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIG5ldyBMYXllcihwcm9wcyk7XG59O1xuXG5FbnRpdHlNYW5hZ2VyLmNyZWF0ZUJvZHkgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIG5ldyBCb2R5KHByb3BzKTtcbn07XG5cbkVudGl0eU1hbmFnZXIuY3JlYXRlUGh5c2ljc0JvZHkgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIG5ldyBQaHlzaWNzQm9keShwcm9wcyk7XG59O1xuXG5FbnRpdHlNYW5hZ2VyLmNyZWF0ZUZsdWlkQm9keSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gbmV3IEZsdWlkQm9keShwcm9wcyk7XG59O1xuXG5FbnRpdHlNYW5hZ2VyLldvcmxkID0gV29ybGQ7XG5FbnRpdHlNYW5hZ2VyLkxpZ2h0ID0gTGlnaHQ7XG5FbnRpdHlNYW5hZ2VyLlRyYW5zZm9ybSA9IFRyYW5zZm9ybTtcbkVudGl0eU1hbmFnZXIuTGF5ZXIgPSBMYXllcjtcbkVudGl0eU1hbmFnZXIuQm9keSA9IEJvZHk7XG5FbnRpdHlNYW5hZ2VyLlBoeXNpY3NCb2R5ID0gUGh5c2ljc0JvZHk7XG5FbnRpdHlNYW5hZ2VyLkZsdWlkQm9keSA9IEZsdWlkQm9keTtcblxuZXhwb3J0IGRlZmF1bHQgRW50aXR5TWFuYWdlcjtcbiIsIi8qKlxuICogQHRvZG9cbiAqIC0gWm9vbSBpbiAvIFpvb20gb3V0XG4gKiAtIFJvdGF0aW9uXG4gKiAtIENhbWVyYSB0eXBlcyBbZm9sbG93IGFsbCwgZm9sbG93LXgsIGZvbGxvdy15LCBldGMuXVxuICovXG5jbGFzcyBDYW1lcmEge1xuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgY29uc3QgeyBwb3NpdGlvbiwgcm90YXRpb24gPSAwLCBzY3JlZW4gfSA9IHByb3BzO1xuXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMucm90YXRpb24gPSByb3RhdGlvbjtcbiAgICB0aGlzLnNjcmVlbiA9IHNjcmVlbjtcbiAgICB0aGlzLnRhcmdldCA9IG51bGw7XG4gIH1cblxuICBzZXRSb3RhdGlvbihhbmdsZSkge1xuICAgIHRoaXMucm90YXRpb24gPSBhbmdsZTtcbiAgfVxuXG4gIHNldFBvc2l0aW9uKHBvcykge1xuICAgIHRoaXMucG9zaXRpb24ueCA9IHBvcy54O1xuICAgIHRoaXMucG9zaXRpb24ueSA9IHBvcy55O1xuICB9XG5cbiAgYmluZFRhcmdldCh0YXJnZXQpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBpZiAodGhpcy50YXJnZXQpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgcG9zaXRpb246IHsgeCwgeSB9LFxuICAgICAgfSA9IHRoaXMudGFyZ2V0O1xuICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB0aGlzLnNjcmVlbjtcblxuICAgICAgdGhpcy5wb3NpdGlvbi54ID0geCAtIHdpZHRoIC8gMjtcbiAgICAgIHRoaXMucG9zaXRpb24ueSA9IHkgLSBoZWlnaHQgLyAyO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1lcmE7XG4iLCJpbXBvcnQgeyBWZWN0b3IyRCwgQ29tbW9ucyB9IGZyb20gXCIuLi9jb3JlXCI7XG5pbXBvcnQgeyBFTlRJVFlfTk9ERV9UWVBFUywgU0hBUEVTLCBUUkFOU0ZPUk1fT1JJR0lOIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5pbXBvcnQgQ2FtZXJhIGZyb20gXCIuL0NhbWVyYVwiO1xuXG4vLyBET0MgOjogIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9DYW52YXNfQVBJL1R1dG9yaWFsXG5jbGFzcyBSZW5kZXJlciB7XG4gIGluaXQoeyBzdGF0ZSwgbWFuYWdlcnMgfSkge1xuICAgIHRoaXMucHJvcHMgPSB7XG4gICAgICByZXNvdXJjZU1hbmFnZXI6IG1hbmFnZXJzLnJlc291cmNlTWFuYWdlcixcbiAgICAgIHNjcmVlbjogc3RhdGUuc2NyZWVuLFxuICAgICAgY2FudmFzOiBzdGF0ZS5jYW52YXMsXG4gICAgfTtcbiAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEoe1xuICAgICAgcG9zaXRpb246IFZlY3RvcjJELnplcm8oKSxcbiAgICAgIHJvdGF0aW9uOiAwLFxuICAgICAgc2NyZWVuOiBzdGF0ZS5zY3JlZW4sXG4gICAgfSk7XG4gIH1cblxuICAvLyBTY2VuZSBHcmFwaCBtZXRob2RcbiAgLy8gLSBkZXB0aCBmaXJzdCByZW5kZXJcbiAgLy8gLSBjaGVjayBpZiBpbiBjYW1lcmEgdmlld3BvcnQgKGN1bm5pbmcpXG4gIC8vIC0gcmF5dHJhY2luZyB1c2luZyBsaWdodFxuICAvLyAtIENoZWNrcyB3aGljaCBvbmVzIGFyZSBpZGVhbCBhbmQgZG9uJ3QgbmVlZCB1cGRhdGluZ1xuICAvLyAgIGkuZS4gY2hlY2tzIGlmIGVsZW1lbnRzIGFyZSBzbGVlcGluZ1xuICByZW5kZXJUcmVlKHJvb3QpIHtcbiAgICBjb25zdCB7XG4gICAgICBjYW52YXM6IHsgY29udGV4dCB9LFxuICAgICAgc2NyZWVuOiB7IHdpZHRoLCBoZWlnaHQgfSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjYW1lcmEgPSB0aGlzLmNhbWVyYTtcblxuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICAgIGNhbWVyYS51cGRhdGUoKTtcblxuICAgIHRoaXMucmVuZGVyTm9kZShyb290KTtcbiAgfVxuXG4gIHJlbmRlck5vZGUoZWxlbWVudCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNhbnZhczogeyBjb250ZXh0IH0sXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgY2FtZXJhID0gdGhpcy5jYW1lcmE7XG5cbiAgICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgICAgY2FzZSBFTlRJVFlfTk9ERV9UWVBFUy5XT1JMRDpcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIEVOVElUWV9OT0RFX1RZUEVTLkxJR0hUOlxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgRU5USVRZX05PREVfVFlQRVMuVFJBTlNGT1JNOlxuICAgICAgICB0aGlzLmFwcGx5VHJhbnNmb3JtKGNvbnRleHQsIGVsZW1lbnQsIGNhbWVyYSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBFTlRJVFlfTk9ERV9UWVBFUy5CT0RZOlxuICAgICAgY2FzZSBFTlRJVFlfTk9ERV9UWVBFUy5QSFlTSUNTX0JPRFk6XG4gICAgICBjYXNlIEVOVElUWV9OT0RFX1RZUEVTLkZMVUlEX0JPRFk6IHtcbiAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJCb2R5KGVsZW1lbnQsIHtcbiAgICAgICAgICBjb250ZXh0LFxuICAgICAgICAgIGNhbWVyYSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgaWYgKGVsZW1lbnQuZGVidWcpIHtcbiAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIHRoaXMuZHJhd0JvdW5kaW5nQm94KGNvbnRleHQsIGVsZW1lbnQsIGNhbWVyYSk7XG4gICAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgaWYgKGVsZW1lbnQucmVuZGVyKSB7XG4gICAgICAgICAgZWxlbWVudC5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgWywgdmFsXSBvZiBlbGVtZW50LmNoaWxkcmVuKSB7XG4gICAgICB0aGlzLnJlbmRlck5vZGUodmFsKTtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGVsZW1lbnQudHlwZSkge1xuICAgICAgY2FzZSBFTlRJVFlfTk9ERV9UWVBFUy5UUkFOU0ZPUk06XG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xlYW51cCkge1xuICAgICAgICAgIGVsZW1lbnQuY2xlYW51cCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0U2NyZWVuUG9zaXRpb24ocG9zLCBjYW1lcmEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogQ29tbW9ucy5yb3VuZE9mZihwb3MueCAtIGNhbWVyYS5wb3NpdGlvbi54KSxcbiAgICAgIHk6IENvbW1vbnMucm91bmRPZmYocG9zLnkgLSBjYW1lcmEucG9zaXRpb24ueSksXG4gICAgfTtcbiAgfVxuXG4gIGFwcGx5VHJhbnNmb3JtKGNvbnRleHQsIGVsZW1lbnQsIGNhbWVyYSkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJvdGF0ZSxcbiAgICAgIHRyYW5zZm9ybTogW1thLCBjLCBlXSwgW2IsIGQsIGZdXSxcbiAgICAgIGJvdW5kaW5nQm94OiB7IG1hcmdpbnMgfSxcbiAgICAgIHBvc2l0aW9uLFxuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHQsXG4gICAgICBvcmlnaW4sXG4gICAgfSA9IGVsZW1lbnQ7XG5cbiAgICBsZXQgY29vcmRzO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3JpZ2luKSkge1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmdldFNjcmVlblBvc2l0aW9uKFxuICAgICAgICB7IHg6IG9yaWdpblswXSwgeTogb3JpZ2luWzFdIH0sXG4gICAgICAgIGNhbWVyYVxuICAgICAgKTtcbiAgICAgIGNvb3JkcyA9IFt4LCB5XTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmdldFNjcmVlblBvc2l0aW9uKHBvc2l0aW9uLCBjYW1lcmEpO1xuICAgICAgY29uc3QgeE1heCA9IHggKyB3aWR0aCArIG1hcmdpbnNbMV07XG4gICAgICBjb25zdCB4TWluID0geCAtIG1hcmdpbnNbM107XG5cbiAgICAgIGNvbnN0IHlNYXggPSB5ICsgaGVpZ2h0ICsgbWFyZ2luc1syXTtcbiAgICAgIGNvbnN0IHlNaW4gPSB5IC0gbWFyZ2luc1swXTtcblxuICAgICAgY29uc3QgeE1pZCA9IHhNaW4gKyAoeE1heCAtIHhNaW4pIC8gMjtcbiAgICAgIGNvbnN0IHlNaWQgPSB5TWluICsgKHlNYXggLSB5TWluKSAvIDI7XG5cbiAgICAgIHN3aXRjaCAob3JpZ2luKSB7XG4gICAgICAgIGNhc2UgVFJBTlNGT1JNX09SSUdJTi5MRUZUX1RPUDpcbiAgICAgICAgICBjb29yZHMgPSBbeE1pbiwgeU1pbl07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVFJBTlNGT1JNX09SSUdJTi5SSUdIVF9UT1A6XG4gICAgICAgICAgY29vcmRzID0gW3hNYXgsIHlNaW5dO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFRSQU5TRk9STV9PUklHSU4uUklHSFRfQk9UVE9NOlxuICAgICAgICAgIGNvb3JkcyA9IFt4TWF4LCB5TWF4XTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBUUkFOU0ZPUk1fT1JJR0lOLkxFRlRfQk9UVE9NOlxuICAgICAgICAgIGNvb3JkcyA9IFt4TWluLCB5TWF4XTtcbiAgICAgICAgICBjb29yZHNbMF0gPSB4TWluO1xuICAgICAgICAgIGNvb3Jkc1sxXSA9IHlNYXg7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgVFJBTlNGT1JNX09SSUdJTi5DRU5URVI6XG4gICAgICAgICAgY29vcmRzID0gW3hNaWQsIHlNaWRdO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvb3JkcyA9IFswLCAwXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb250ZXh0LnNhdmUoKTtcblxuICAgIGNvbnRleHQudHJhbnNmb3JtKGEsIGIsIGMsIGQsIGUgKyBjb29yZHNbMF0sIGYgKyBjb29yZHNbMV0pO1xuICAgIHJvdGF0ZSAmJiBjb250ZXh0LnJvdGF0ZSgoTWF0aC5QSSAqIHJvdGF0ZSkgLyAxODApO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKC1jb29yZHNbMF0sIC1jb29yZHNbMV0pO1xuICB9XG5cbiAgcmVuZGVyQm9keShlbGVtZW50LCBlbnZQcm9wcykge1xuICAgIGNvbnN0IHsgY29udGV4dCwgY2FtZXJhIH0gPSBlbnZQcm9wcztcbiAgICBjb25zdCB7XG4gICAgICBpbWFnZSxcbiAgICAgIGJhY2tncm91bmRJbWFnZSxcbiAgICAgIHJlcGVhdCxcbiAgICAgIGJhY2tncm91bmRDb2xvcixcbiAgICAgIGJhY2tncm91bmRHcmFkaWVudCxcbiAgICAgIGJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyU2l6ZSxcbiAgICB9ID0gZWxlbWVudC5zdHlsZXM7XG5cbiAgICBjb25zdCBfaW1hZ2UgPSBpbWFnZSAmJiB0aGlzLnByb3BzLnJlc291cmNlTWFuYWdlci5nZXQoaW1hZ2UpO1xuICAgIF9pbWFnZSAmJiB0aGlzLnJlbmRlckltYWdlKGNvbnRleHQsIGVsZW1lbnQsIGNhbWVyYSwgX2ltYWdlKTtcblxuICAgIGlmICghYmFja2dyb3VuZENvbG9yICYgIWJvcmRlckNvbG9yICYgIWJvcmRlclNpemUgJiAhX2JnSW1hZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGJhY2tncm91bmRDb2xvciB8fCBcInRyYW5zcGFyZW50XCI7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yIHx8IFwidHJhbnNwYXJlbnRcIjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IGJvcmRlclNpemUgfHwgMDtcblxuICAgIGNvbnN0IF9iZ0ltYWdlID1cbiAgICAgIGJhY2tncm91bmRJbWFnZSAmJiB0aGlzLnByb3BzLnJlc291cmNlTWFuYWdlci5nZXQoYmFja2dyb3VuZEltYWdlKTtcblxuICAgIGlmIChfYmdJbWFnZSkge1xuICAgICAgY29uc3QgcGF0dGVybiA9IGNvbnRleHQuY3JlYXRlUGF0dGVybihfYmdJbWFnZSwgcmVwZWF0IHx8IFwicmVwZWF0XCIpO1xuICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBwYXR0ZXJuO1xuICAgIH0gZWxzZSBpZiAoYmFja2dyb3VuZEdyYWRpZW50KSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJHcmFkaWVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgZm9yIG5vd1wiKTtcbiAgICB9XG5cbiAgICBpZiAoZWxlbWVudC5zaGFwZSA9PT0gU0hBUEVTLlJFQ1RBTkdMRSkge1xuICAgICAgdGhpcy5yZW5kZXJSZWN0KGNvbnRleHQsIGVsZW1lbnQsIGNhbWVyYSk7XG4gICAgfSBlbHNlIGlmIChlbGVtZW50LnNoYXBlID09PSBTSEFQRVMuQVJDKSB7XG4gICAgICB0aGlzLnJlbmRlckNpcmNsZShjb250ZXh0LCBlbGVtZW50LCBjYW1lcmEpO1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5zaGFwZSA9PT0gU0hBUEVTLlBPTFlHT04pIHtcbiAgICAgIHRoaXMucmVuZGVyUG9seWdvbihjb250ZXh0LCBlbGVtZW50LCBjYW1lcmEpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlckltYWdlKGNvbnRleHQsIGVsZW1lbnQsIGNhbWVyYSwgaW1hZ2UpIHtcbiAgICBjb25zdCB7IHgsIHkgfSA9IHRoaXMuZ2V0U2NyZWVuUG9zaXRpb24oZWxlbWVudC5wb3NpdGlvbiwgY2FtZXJhKTtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IGVsZW1lbnQ7XG5cbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgd2lkdGgsIGhlaWdodCk7XG4gIH1cblxuICByZW5kZXJSZWN0KGNvbnRleHQsIGVsZW1lbnQsIGNhbWVyYSkge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5nZXRTY3JlZW5Qb3NpdGlvbihlbGVtZW50LnBvc2l0aW9uLCBjYW1lcmEpO1xuICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gZWxlbWVudDtcblxuICAgIGNvbnRleHQucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgcmVuZGVyQ2lyY2xlKGNvbnRleHQsIGVsZW1lbnQsIGNhbWVyYSkge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5nZXRTY3JlZW5Qb3NpdGlvbihlbGVtZW50LnBvc2l0aW9uLCBjYW1lcmEpO1xuICAgIGNvbnN0IHsgcmFkaXVzLCBzdGFydEFuZ2xlLCBlbmRBbmdsZSB9ID0gZWxlbWVudDtcblxuICAgIGNvbnRleHQuYXJjKHggKyByYWRpdXMsIHkgKyByYWRpdXMsIHJhZGl1cywgc3RhcnRBbmdsZSwgZW5kQW5nbGUpO1xuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICByZW5kZXJQb2x5Z29uKGNvbnRleHQsIGVsZW1lbnQsIGNhbWVyYSkge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5nZXRTY3JlZW5Qb3NpdGlvbihlbGVtZW50LnBvc2l0aW9uLCBjYW1lcmEpO1xuICAgIGNvbnN0IHsgdmVydGljZXMgfSA9IGVsZW1lbnQ7XG5cbiAgICBjb250ZXh0Lm1vdmVUbyh4ICsgdmVydGljZXNbMF1bMF0sIHkgKyB2ZXJ0aWNlc1swXVsxXSk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTsgLy8geCwgeSwgdHlwZSA6OiBtb3ZlVG8sIGFyYywgbGluZVRvLCBxdWFkcmF0aWNDdXJ2ZVRvLCBiZXppZXJDdXJ2ZVRvIGV0Yy5cbiAgICAgIGNvbnRleHQubGluZVRvKHggKyB2ZXJ0ZXhbMF0sIHkgKyB2ZXJ0ZXhbMV0pO1xuICAgIH1cblxuICAgIGNvbnRleHQuZmlsbCgpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICBkcmF3Qm91bmRpbmdCb3goY29udGV4dCwgZWxlbWVudCwgY2FtZXJhKSB7XG4gICAgY29uc3QgeyB4LCB5IH0gPSB0aGlzLmdldFNjcmVlblBvc2l0aW9uKGVsZW1lbnQucG9zaXRpb24sIGNhbWVyYSk7XG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBlbGVtZW50O1xuICAgIGNvbnN0IHsgbWFyZ2lucywgc2hhcGUsIGNvbG9yIH0gPSBlbGVtZW50LmJvdW5kaW5nQm94O1xuXG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICBjb250ZXh0LnNldExpbmVEYXNoKFsyNSwgNSwgNSwgNSwgNSwgNSwgNSwgNV0pO1xuICAgIGlmIChzaGFwZSA9PT0gU0hBUEVTLkFSQykge1xuICAgICAgY29uc3QgcmFkaXVzID0gd2lkdGggLyAyICsgbWFyZ2luc1sxXSAtIG1hcmdpbnNbM107XG4gICAgICBjb250ZXh0LmFyYyh4ICsgcmFkaXVzLCB5ICsgcmFkaXVzLCByYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRleHQuc3Ryb2tlUmVjdChcbiAgICAgICAgeCAtIG1hcmdpbnNbM10sXG4gICAgICAgIHkgLSBtYXJnaW5zWzBdLFxuICAgICAgICB3aWR0aCArIChtYXJnaW5zWzFdICsgbWFyZ2luc1szXSksXG4gICAgICAgIGhlaWdodCArIChtYXJnaW5zWzBdICsgbWFyZ2luc1syXSlcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuIiwiaW1wb3J0ICogYXMgQ29uc3RhbnRzIGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IFJlc291cmNlTWFuYWdlciBmcm9tICcuL21vZHVsZXMvUmVzb3VyY2VNYW5hZ2VyJztcbmltcG9ydCBFbnRpdHlNYW5hZ2VyIGZyb20gJy4vbW9kdWxlcy9FbnRpdHlNYW5hZ2VyJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL21vZHVsZXMvUmVuZGVyZXInO1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuL21vZHVsZXMvY29yZSc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLSBHQU1FIExPT1AgU1RBUlRTXG4vLyBHZXQgRWxlbWVudHMgdG8gcmVuZGVyXG4vLyBSRU5ERVIgICAgICAgICAgICAgICAgICAgPC0gY2FuIHJ1biBpbiBwYXVzZSBzdGF0ZVxuLy8gKklucHV0XG4vLyAqICBHYW1lcyBDaGFuZ3MgQ2FtZXJhLCBzcGVlZCwgYWNjZWxyYXRpb24gYW5kIG90aGVyIGFzcGVjdHNcbi8vICpPbkV2ZW50c1xuLy8gKiAgR2FtZSBBdWRpb1xuLy8gUEhZU0lDUyBTVEVQU1xuLy8gICAgQXBwbHkgZm9yY2VzXG4vLyAgICBDT0xMSVNJT04gREVURUNUSU9OXG4vLyAgICBDT0xMSVNJT04gUkVTT0xVVElPTlxuLy8gVVBEQVRFXG4vLyAtLS0tLS0tLS0tLS0tLS0gR0FNRSBMT09QIEVORFNcbi8vIFVubG9hZCBSZXNvdXJjZXNcbi8vIEV4aXRcblxuY2xhc3MgRW5naW5lIHtcbiAgLyoqXG4gICAqIEBwcm9wIHsgY2FudmFzSWQsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHRpbWVTcGVlZCB9XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9wcyA9IHt9KSB7XG4gICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgICB0aGlzLm1hbmFnZXJzID0ge307XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgICB0aGlzLnBvc3RJbml0KCk7XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuaW5pdENhbnZhcygpO1xuICAgIHRoaXMuaW5pdFRpbWVyKCk7XG4gICAgdGhpcy5pbml0UmVzb3VyY2VNYW5hZ2VyKCk7XG4gICAgdGhpcy5pbml0RW50aXR5TWFuYWdlcigpO1xuICAgIHRoaXMuaW5pdFJlbmRlcmVyKCk7XG4gIH1cblxuICBwb3N0SW5pdCgpIHtcbiAgICB0aGlzLm1hbmFnZXJzLnJlc291cmNlTWFuYWdlci5pbml0ICYmXG4gICAgICB0aGlzLm1hbmFnZXJzLnJlc291cmNlTWFuYWdlci5pbml0KHRoaXMpO1xuICAgIHRoaXMubWFuYWdlcnMuZW50aXR5TWFuYWdlci5pbml0ICYmIHRoaXMubWFuYWdlcnMuZW50aXR5TWFuYWdlci5pbml0KHRoaXMpO1xuICAgIHRoaXMubWFuYWdlcnMucmVuZGVyZXIuaW5pdCAmJiB0aGlzLm1hbmFnZXJzLnJlbmRlcmVyLmluaXQodGhpcyk7XG4gIH1cblxuICBkZXN0cm95KCkge31cblxuICBpbml0Q2FudmFzKCkge1xuICAgIGNvbnN0IHsgY2FudmFzSWQsIGNhbnZhc1dpZHRoLCBjYW52YXNIZWlnaHQsIHNtb290aEltYWdlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgY2FudmFzLnNldEF0dHJpYnV0ZSgnaWQnLCBjYW52YXNJZCk7XG4gICAgY2FudmFzLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInOyAvLyBvciBub25lXG4gICAgY2FudmFzLndpZHRoID0gY2FudmFzV2lkdGggfHwgd2luZG93LmlubmVyV2lkdGg7XG4gICAgY2FudmFzLmhlaWdodCA9IGNhbnZhc0hlaWdodCB8fCB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XG5cbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBjdHgubW96SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gISFzbW9vdGhJbWFnZTtcbiAgICBjdHgud2Via2l0SW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gISFzbW9vdGhJbWFnZTtcbiAgICBjdHgubXNJbWFnZVNtb290aGluZ0VuYWJsZWQgPSAhIXNtb290aEltYWdlO1xuICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSAhIXNtb290aEltYWdlO1xuXG4gICAgdGhpcy5zdGF0ZS5jYW52YXMgPSB7XG4gICAgICBlbGVtZW50OiBjYW52YXMsXG4gICAgICBjb250ZXh0OiBjdHhcbiAgICB9O1xuXG4gICAgdGhpcy5zdGF0ZS5zY3JlZW4gPSB7XG4gICAgICB3aWR0aDogY2FudmFzLndpZHRoLFxuICAgICAgaGVpZ2h0OiBjYW52YXMuaGVpZ2h0LFxuICAgICAgYXNwZWN0UmF0aW86IGNhbnZhcy53aWR0aCAvIGNhbnZhcy5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgLy8gVGFrZSBmcmFtZSBwZXIgc2Vjb25kIGluIGNvbnNpZGVyYXRpb25cbiAgaW5pdFRpbWVyKCkge1xuICAgIGNvbnN0IHsgdGltZVNwZWVkID0gMSwgZnBzID0gMTAwIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGN1cnJUaW1lID0gKHBlcmZvcm1hbmNlIHx8IERhdGUpLm5vdygpO1xuXG4gICAgdGhpcy5zdGF0ZS50aW1lciA9IHtcbiAgICAgIHRpbWVTcGVlZDogdGltZVNwZWVkLFxuICAgICAgbGFzdFRpbWU6IGN1cnJUaW1lLFxuICAgICAgY3VyclRpbWU6IGN1cnJUaW1lLFxuICAgICAgZGVsdGFUaW1lOiAxMDAwIC8gZnBzLFxuICAgICAgZnBzOiAwLFxuICAgICAgZnBzTGFzdFRpY2s6IDAsXG4gICAgICBmcHNIaXN0b3J5OiBbXVxuICAgIH07XG4gIH1cblxuICAvLyAgICAgICAgICB8LS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gIC8vICAgICAgICAgIGxhc3QgICAgICAgICAgICAgICAgICBub3dcblxuICAvKipcbiAgICogLS0tLS0tLS0tLS0tIFJFU09VUkNFIE1BTkdFUiAtLS0tLS0tLS0tLS0tXG4gICAqL1xuICBpbml0UmVzb3VyY2VNYW5hZ2VyKCkge1xuICAgIGNvbnN0IHJlc291cmNlTWFuYWdlciA9IG5ldyBSZXNvdXJjZU1hbmFnZXIoKTtcblxuICAgIHRoaXMubWFuYWdlcnMucmVzb3VyY2VNYW5hZ2VyID0gcmVzb3VyY2VNYW5hZ2VyO1xuICB9XG5cbiAgaW5pdEVudGl0eU1hbmFnZXIoKSB7XG4gICAgY29uc3QgZW50aXR5TWFuYWdlciA9IG5ldyBFbnRpdHlNYW5hZ2VyKCk7XG4gICAgY29uc3Qgd29ybGQgPSBFbnRpdHlNYW5hZ2VyLmNyZWF0ZVdvcmxkKHtcbiAgICAgIGdyYXZpdHk6IDAsXG4gICAgICBib3VuZHM6IFtcbiAgICAgICAgbmV3IFZlY3RvcjJEKC1JbmZpbml0eSwgLUluZmluaXR5KSxcbiAgICAgICAgbmV3IFZlY3RvcjJEKEluZmluaXR5LCBJbmZpbml0eSlcbiAgICAgIF1cbiAgICB9KTtcbiAgICBjb25zdCBsaWdodCA9IEVudGl0eU1hbmFnZXIuY3JlYXRlTGlnaHQoeyBwb3NpdGlvbjogVmVjdG9yMkQuemVybygpIH0pO1xuXG4gICAgZW50aXR5TWFuYWdlci5zZXRSb290KHdvcmxkKTtcbiAgICB3b3JsZC5hZGQobGlnaHQpO1xuXG4gICAgdGhpcy5tYW5hZ2Vycy5lbnRpdHlNYW5hZ2VyID0gZW50aXR5TWFuYWdlcjtcbiAgICB0aGlzLnN0YXRlLndvcmxkID0gd29ybGQ7XG4gICAgdGhpcy5zdGF0ZS5saWdodCA9IGxpZ2h0O1xuICB9XG5cbiAgaW5pdFJlbmRlcmVyKCkge1xuICAgIHRoaXMubWFuYWdlcnMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcbiAgfVxuXG4gIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NzY0MDE4L2NvbnRyb2xsaW5nLWZwcy13aXRoLXJlcXVlc3RhbmltYXRpb25mcmFtZVxuICBhdXRvUGlsb3QoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYXV0b1BpbG90KTtcblxuICAgIGNvbnN0IHsgdGltZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgbm93ID0gKHBlcmZvcm1hbmNlIHx8IERhdGUpLm5vdygpO1xuICAgIGNvbnN0IGVsYXBzZWQgPSBub3cgLSB0aW1lci5sYXN0VGltZTtcblxuICAgIHRpbWVyLmN1cnJUaW1lID0gbm93O1xuICAgIGlmIChlbGFwc2VkID49IHRpbWVyLmRlbHRhVGltZSkge1xuICAgICAgLy8gY29tcHV0ZSBGUFNcbiAgICAgIHdoaWxlICh0aW1lci5mcHNIaXN0b3J5Lmxlbmd0aCA+IDAgJiYgdGltZXIuZnBzSGlzdG9yeVswXSA8PSBub3cgLSAxMDAwKSB7XG4gICAgICAgIHRpbWVyLmZwc0hpc3Rvcnkuc2hpZnQoKTtcbiAgICAgIH1cbiAgICAgIHRpbWVyLmZwc0hpc3RvcnkucHVzaChub3cpO1xuXG4gICAgICB0aW1lci5sYXN0VGltZSA9IG5vdyAtIChlbGFwc2VkICUgMTApO1xuXG4gICAgICBpZiAodGltZXIuY3VyclRpbWUgLSB0aW1lci5mcHNMYXN0VGljayA+PSA1MDApIHtcbiAgICAgICAgdGltZXIuZnBzID0gdGltZXIuZnBzSGlzdG9yeS5sZW5ndGg7XG4gICAgICAgIHRpbWVyLmZwc0xhc3RUaWNrID0gdGltZXIuY3VyclRpbWU7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKCdGUFMgOjogJywgdGltZXIuZnBzKTtcblxuICAgICAgLy8gR2FtZSBMb29wXG4gICAgICB0aGlzLnVwZGF0ZSh0aW1lci5jdXJyVGltZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIC8qKlxuICAgICAqID09PT09PT09PT09PSBSRU5ERVIgU1RFUFxuICAgICAqL1xuICAgIHRoaXMubWFuYWdlcnMucmVuZGVyZXIucmVuZGVyVHJlZShcbiAgICAgIHRoaXMuc3RhdGUud29ybGQsXG4gICAgICB0aGlzLnN0YXRlLnRpbWVyLmN1cnJUaW1lXG4gICAgKTtcbiAgfVxufVxuXG5FbmdpbmUuQ29uc3RhbnRzID0gQ29uc3RhbnRzO1xuRW5naW5lLmhlbHBlcnMgPSB7XG4gIC4uLkVudGl0eU1hbmFnZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVuZ2luZTtcbiIsImZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlXaXRoSG9sZXM7IiwiZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjtcbiAgdmFyIF9hcnIgPSBbXTtcbiAgdmFyIF9uID0gdHJ1ZTtcbiAgdmFyIF9kID0gZmFsc2U7XG4gIHZhciBfZSA9IHVuZGVmaW5lZDtcblxuICB0cnkge1xuICAgIGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHtcbiAgICAgIF9hcnIucHVzaChfcy52YWx1ZSk7XG5cbiAgICAgIGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhaztcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIF9kID0gdHJ1ZTtcbiAgICBfZSA9IGVycjtcbiAgfSBmaW5hbGx5IHtcbiAgICB0cnkge1xuICAgICAgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpZiAoX2QpIHRocm93IF9lO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pdGVyYWJsZVRvQXJyYXlMaW1pdDsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuXG4gIGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykge1xuICAgIGFycjJbaV0gPSBhcnJbaV07XG4gIH1cblxuICByZXR1cm4gYXJyMjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXJyYXlMaWtlVG9BcnJheTsiLCJmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9ub25JdGVyYWJsZVJlc3Q7IiwiZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfc2V0UHJvdG90eXBlT2Y7IiwiZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfYXNzZXJ0VGhpc0luaXRpYWxpemVkOyIsImZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlOyJdLCJzb3VyY2VSb290IjoiIn0=
