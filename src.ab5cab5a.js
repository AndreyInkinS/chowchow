parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    HTHp: [
      function (require, module, exports) {
        module.exports = {
          v: "5.7.8",
          fr: 25,
          ip: 0,
          op: 125,
          w: 1e3,
          h: 1e3,
          nm: "ajies",
          ddd: 0,
          assets: [
            {
              id: "comp_0",
              layers: [
                {
                  ddd: 0,
                  ind: 1,
                  ty: 4,
                  nm: "estrella contornos",
                  sr: 1,
                  ks: {
                    o: { a: 0, k: 100, ix: 11 },
                    r: { a: 0, k: 0, ix: 10 },
                    p: { a: 0, k: [791, 380.157, 0], ix: 2, l: 2 },
                    a: { a: 0, k: [35, 35, 0], ix: 1, l: 2 },
                    s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
                  },
                  ao: 0,
                  shapes: [
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [-5.986, 6.077],
                                [5.986, -6.077],
                              ],
                              c: !1,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "st",
                          c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                          o: { a: 0, k: 100, ix: 4 },
                          w: { a: 0, k: 4, ix: 5 },
                          lc: 2,
                          lj: 2,
                          bm: 0,
                          nm: "Trazo 1",
                          mn: "ADBE Vector Graphic - Stroke",
                          hd: !1,
                        },
                        {
                          ty: "fl",
                          c: {
                            a: 0,
                            k: [
                              0.788235294117647, 0.8588235294117647,
                              0.6862745098039216, 1,
                            ],
                            ix: 4,
                          },
                          o: { a: 0, k: 100, ix: 5 },
                          r: 1,
                          bm: 0,
                          nm: "Relleno 1",
                          mn: "ADBE Vector Graphic - Fill",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [45.013, 23.161], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 1",
                      np: 3,
                      cix: 2,
                      bm: 0,
                      ix: 1,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [-8.529, 0.064],
                                [8.529, -0.064],
                              ],
                              c: !1,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "st",
                          c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                          o: { a: 0, k: 100, ix: 4 },
                          w: { a: 0, k: 4, ix: 5 },
                          lc: 2,
                          lj: 2,
                          bm: 0,
                          nm: "Trazo 1",
                          mn: "ADBE Vector Graphic - Stroke",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [50.311, 35.226], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 2",
                      np: 2,
                      cix: 2,
                      bm: 0,
                      ix: 2,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [-8.529, 0.064],
                                [8.529, -0.064],
                              ],
                              c: !0,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "fl",
                          c: {
                            a: 0,
                            k: [
                              0.788235294117647, 0.8588235294117647,
                              0.6862745098039216, 1,
                            ],
                            ix: 4,
                          },
                          o: { a: 0, k: 100, ix: 5 },
                          r: 1,
                          bm: 0,
                          nm: "Relleno 1",
                          mn: "ADBE Vector Graphic - Fill",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [50.311, 35.226], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 3",
                      np: 2,
                      cix: 2,
                      bm: 0,
                      ix: 3,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [-6.077, -5.986],
                                [6.077, 5.986],
                              ],
                              c: !1,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "st",
                          c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                          o: { a: 0, k: 100, ix: 4 },
                          w: { a: 0, k: 4, ix: 5 },
                          lc: 2,
                          lj: 2,
                          bm: 0,
                          nm: "Trazo 1",
                          mn: "ADBE Vector Graphic - Stroke",
                          hd: !1,
                        },
                        {
                          ty: "fl",
                          c: {
                            a: 0,
                            k: [
                              0.788235294117647, 0.8588235294117647,
                              0.6862745098039216, 1,
                            ],
                            ix: 4,
                          },
                          o: { a: 0, k: 100, ix: 5 },
                          r: 1,
                          bm: 0,
                          nm: "Relleno 1",
                          mn: "ADBE Vector Graphic - Fill",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [45.526, 47.505], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 4",
                      np: 3,
                      cix: 2,
                      bm: 0,
                      ix: 4,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [-0.064, -8.529],
                                [0.064, 8.529],
                              ],
                              c: !1,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "st",
                          c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                          o: { a: 0, k: 100, ix: 4 },
                          w: { a: 0, k: 4, ix: 5 },
                          lc: 2,
                          lj: 2,
                          bm: 0,
                          nm: "Trazo 1",
                          mn: "ADBE Vector Graphic - Stroke",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [33.461, 52.804], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 5",
                      np: 2,
                      cix: 2,
                      bm: 0,
                      ix: 5,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [0.064, 8.529],
                                [-0.064, -8.529],
                              ],
                              c: !0,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "fl",
                          c: {
                            a: 0,
                            k: [
                              0.788235294117647, 0.8588235294117647,
                              0.6862745098039216, 1,
                            ],
                            ix: 4,
                          },
                          o: { a: 0, k: 100, ix: 5 },
                          r: 1,
                          bm: 0,
                          nm: "Relleno 1",
                          mn: "ADBE Vector Graphic - Fill",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [33.461, 52.803], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 6",
                      np: 2,
                      cix: 2,
                      bm: 0,
                      ix: 6,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [5.986, -6.077],
                                [-5.986, 6.077],
                              ],
                              c: !1,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "st",
                          c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                          o: { a: 0, k: 100, ix: 4 },
                          w: { a: 0, k: 4, ix: 5 },
                          lc: 2,
                          lj: 2,
                          bm: 0,
                          nm: "Trazo 1",
                          mn: "ADBE Vector Graphic - Stroke",
                          hd: !1,
                        },
                        {
                          ty: "fl",
                          c: {
                            a: 0,
                            k: [
                              0.788235294117647, 0.8588235294117647,
                              0.6862745098039216, 1,
                            ],
                            ix: 4,
                          },
                          o: { a: 0, k: 100, ix: 5 },
                          r: 1,
                          bm: 0,
                          nm: "Relleno 1",
                          mn: "ADBE Vector Graphic - Fill",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [21.182, 48.019], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 7",
                      np: 3,
                      cix: 2,
                      bm: 0,
                      ix: 7,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [8.529, -0.064],
                                [-8.529, 0.064],
                              ],
                              c: !1,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "st",
                          c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                          o: { a: 0, k: 100, ix: 4 },
                          w: { a: 0, k: 4, ix: 5 },
                          lc: 2,
                          lj: 2,
                          bm: 0,
                          nm: "Trazo 1",
                          mn: "ADBE Vector Graphic - Stroke",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [15.884, 35.953], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 8",
                      np: 2,
                      cix: 2,
                      bm: 0,
                      ix: 8,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [-8.53, 0.064],
                                [8.53, -0.064],
                              ],
                              c: !0,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "fl",
                          c: {
                            a: 0,
                            k: [
                              0.788235294117647, 0.8588235294117647,
                              0.6862745098039216, 1,
                            ],
                            ix: 4,
                          },
                          o: { a: 0, k: 100, ix: 5 },
                          r: 1,
                          bm: 0,
                          nm: "Relleno 1",
                          mn: "ADBE Vector Graphic - Fill",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [15.884, 35.953], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 9",
                      np: 2,
                      cix: 2,
                      bm: 0,
                      ix: 9,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [6.077, 5.986],
                                [-6.077, -5.986],
                              ],
                              c: !1,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "st",
                          c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                          o: { a: 0, k: 100, ix: 4 },
                          w: { a: 0, k: 4, ix: 5 },
                          lc: 2,
                          lj: 2,
                          bm: 0,
                          nm: "Trazo 1",
                          mn: "ADBE Vector Graphic - Stroke",
                          hd: !1,
                        },
                        {
                          ty: "fl",
                          c: {
                            a: 0,
                            k: [
                              0.788235294117647, 0.8588235294117647,
                              0.6862745098039216, 1,
                            ],
                            ix: 4,
                          },
                          o: { a: 0, k: 100, ix: 5 },
                          r: 1,
                          bm: 0,
                          nm: "Relleno 1",
                          mn: "ADBE Vector Graphic - Fill",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [20.668, 23.675], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 10",
                      np: 3,
                      cix: 2,
                      bm: 0,
                      ix: 10,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [0.064, 8.529],
                                [-0.064, -8.529],
                              ],
                              c: !1,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "st",
                          c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                          o: { a: 0, k: 100, ix: 4 },
                          w: { a: 0, k: 4, ix: 5 },
                          lc: 2,
                          lj: 2,
                          bm: 0,
                          nm: "Trazo 1",
                          mn: "ADBE Vector Graphic - Stroke",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [32.734, 18.376], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 11",
                      np: 2,
                      cix: 2,
                      bm: 0,
                      ix: 11,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [0, 0],
                                [0, 0],
                              ],
                              o: [
                                [0, 0],
                                [0, 0],
                              ],
                              v: [
                                [0.064, 8.529],
                                [-0.064, -8.529],
                              ],
                              c: !0,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "fl",
                          c: {
                            a: 0,
                            k: [
                              0.788235294117647, 0.8588235294117647,
                              0.6862745098039216, 1,
                            ],
                            ix: 4,
                          },
                          o: { a: 0, k: 100, ix: 5 },
                          r: 1,
                          bm: 0,
                          nm: "Relleno 1",
                          mn: "ADBE Vector Graphic - Fill",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [32.734, 18.376], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 12",
                      np: 2,
                      cix: 2,
                      bm: 0,
                      ix: 12,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                    {
                      ty: "tm",
                      s: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.5], y: [1] },
                            o: { x: [1], y: [0] },
                            t: 18,
                            s: [0],
                          },
                          { t: 25.5, s: [98] },
                        ],
                        ix: 1,
                      },
                      e: {
                        a: 1,
                        k: [
                          {
                            i: { x: [0.041], y: [1.008] },
                            o: { x: [0.167], y: [-0.001] },
                            t: 25,
                            s: [0],
                          },
                          { t: 33, s: [100] },
                        ],
                        ix: 2,
                      },
                      o: { a: 0, k: 0, ix: 3 },
                      m: 1,
                      ix: 13,
                      nm: "Recortar trazados 1",
                      mn: "ADBE Vector Filter - Trim",
                      hd: !1,
                    },
                  ],
                  ip: 18,
                  op: 34,
                  st: 4,
                  bm: 0,
                },
                {
                  ddd: 0,
                  ind: 2,
                  ty: 4,
                  nm: "star3",
                  sr: 1,
                  ks: {
                    o: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.5], y: [1] },
                          o: { x: [0.5], y: [0] },
                          t: -1,
                          s: [34],
                        },
                        { t: 5, s: [99] },
                      ],
                      ix: 11,
                    },
                    r: { a: 0, k: 0, ix: 10 },
                    p: {
                      a: 1,
                      k: [
                        {
                          i: { x: 0, y: 1 },
                          o: { x: 0.151, y: 0 },
                          t: -1,
                          s: [788.328, 417.328, 0],
                          to: [0, -6.221, 0],
                          ti: [0, 6.221, 0],
                        },
                        { t: 25, s: [788.328, 380, 0] },
                      ],
                      ix: 2,
                      l: 2,
                    },
                    a: { a: 0, k: [32.985, 36.671, 0], ix: 1, l: 2 },
                    s: {
                      a: 1,
                      k: [
                        {
                          i: { x: [0.8, 0.8, 0.833], y: [1, 1, 1] },
                          o: { x: [1, 1, 0.167], y: [0.016, 0.016, 0] },
                          t: -1,
                          s: [27, 27, 100],
                        },
                        {
                          i: { x: [0.8, 0.8, 0.833], y: [1, 1, 1] },
                          o: { x: [1, 1, 0.167], y: [1.606, 1.606, 0] },
                          t: 8,
                          s: [100, 100, 100],
                        },
                        {
                          i: { x: [0, 0, 0.833], y: [1.009, 1.009, 1] },
                          o: { x: [0.2, 0.2, 0.167], y: [0, 0, 0] },
                          t: 20,
                          s: [100, 100, 100],
                        },
                        { t: 25, s: [25, 25, 100] },
                      ],
                      ix: 6,
                      l: 2,
                    },
                  },
                  ao: 0,
                  shapes: [
                    {
                      ty: "gr",
                      it: [
                        {
                          ind: 0,
                          ty: "sh",
                          ix: 1,
                          ks: {
                            a: 0,
                            k: {
                              i: [
                                [2.269, 17.875],
                                [17.239, -4.093],
                                [-2.27, -17.874],
                                [-17.239, 4.093],
                              ],
                              o: [
                                [-2.27, 17.875],
                                [17.239, 4.093],
                                [2.269, -17.874],
                                [-17.239, -4.093],
                              ],
                              v: [
                                [0.001, -36.421],
                                [-32.734, 0.001],
                                [0.001, 36.421],
                                [32.734, 0.001],
                              ],
                              c: !0,
                            },
                            ix: 2,
                          },
                          nm: "Trazado 1",
                          mn: "ADBE Vector Shape - Group",
                          hd: !1,
                        },
                        {
                          ty: "fl",
                          c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                          o: { a: 0, k: 100, ix: 5 },
                          r: 1,
                          bm: 0,
                          nm: "Relleno 1",
                          mn: "ADBE Vector Graphic - Fill",
                          hd: !1,
                        },
                        {
                          ty: "tr",
                          p: { a: 0, k: [32.984, 36.671], ix: 2 },
                          a: { a: 0, k: [0, 0], ix: 1 },
                          s: { a: 0, k: [100, 100], ix: 3 },
                          r: { a: 0, k: 0, ix: 6 },
                          o: { a: 0, k: 100, ix: 7 },
                          sk: { a: 0, k: 0, ix: 4 },
                          sa: { a: 0, k: 0, ix: 5 },
                          nm: "Transformar",
                        },
                      ],
                      nm: "Grupo 1",
                      np: 2,
                      cix: 2,
                      bm: 0,
                      ix: 1,
                      mn: "ADBE Vector Group",
                      hd: !1,
                    },
                  ],
                  ip: 0,
                  op: 25,
                  st: -12,
                  bm: 0,
                },
              ],
            },
          ],
          layers: [
            {
              ddd: 0,
              ind: 4,
              ty: 0,
              nm: "estrella",
              refId: "comp_0",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [382, 656, 0], ix: 2, l: 2 },
                a: { a: 0, k: [500, 500, 0], ix: 1, l: 2 },
                s: { a: 0, k: [78, 78, 100], ix: 6, l: 2 },
              },
              ao: 0,
              w: 1e3,
              h: 1e3,
              ip: 43,
              op: 77,
              st: 43,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 5,
              ty: 0,
              nm: "estrella",
              refId: "comp_0",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [188, 708, 0], ix: 2, l: 2 },
                a: { a: 0, k: [500, 500, 0], ix: 1, l: 2 },
                s: { a: 0, k: [65, 65, 100], ix: 6, l: 2 },
              },
              ao: 0,
              w: 1e3,
              h: 1e3,
              ip: 34,
              op: 68,
              st: 34,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 6,
              ty: 0,
              nm: "estrella",
              refId: "comp_0",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [-98, 632, 0], ix: 2, l: 2 },
                a: { a: 0, k: [500, 500, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              w: 1e3,
              h: 1e3,
              ip: 18,
              op: 52,
              st: 18,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 7,
              ty: 0,
              nm: "estrella",
              refId: "comp_0",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [500, 500, 0], ix: 2, l: 2 },
                a: { a: 0, k: [500, 500, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              w: 1e3,
              h: 1e3,
              ip: 59,
              op: 93,
              st: 59,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 8,
              ty: 3,
              nm: "cara1",
              parent: 57,
              sr: 1,
              ks: {
                o: { a: 0, k: 0, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 15,
                      s: [433.906, 226.59, 0],
                      to: [3.167, -0.833, 0],
                      ti: [-3.167, 0.833, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 25,
                      s: [452.906, 221.59, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 79,
                      s: [452.906, 221.59, 0],
                      to: [-3.167, 0.833, 0],
                      ti: [3.167, -0.833, 0],
                    },
                    { t: 88, s: [433.906, 226.59, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ip: 0,
              op: 125,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 9,
              ty: 3,
              nm: "cara2",
              parent: 51,
              sr: 1,
              ks: {
                o: { a: 0, k: 0, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 27,
                      s: [58.353, 217.176, 0],
                      to: [0.625, 6.333, 0],
                      ti: [10, 0.917, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 33,
                      s: [46.353, 228.176, 0],
                      to: [-2.702, -0.248, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 91,
                      s: [46.353, 228.176, 0],
                      to: [0, 0, 0],
                      ti: [-0.266, -2.7, 0],
                    },
                    { t: 96, s: [58.353, 217.176, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [0, 0, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ip: 0,
              op: 125,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 10,
              ty: 4,
              nm: "ceja2",
              parent: 11,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [132.074, 16.024, 0], ix: 2, l: 2 },
                a: { a: 0, k: [25.914, 20.644, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [4.534, 2.893],
                            [0, 0],
                            [-2.892, 4.533],
                            [-4.534, -2.893],
                            [0, 0],
                            [2.893, -4.533],
                          ],
                          o: [
                            [0, 0],
                            [-4.534, -2.893],
                            [2.893, -4.533],
                            [0, 0],
                            [4.533, 2.893],
                            [-2.892, 4.533],
                          ],
                          v: [
                            [9.326, 17.501],
                            [-19.8, -1.084],
                            [-22.773, -14.53],
                            [-9.325, -17.501],
                            [19.801, 1.084],
                            [22.771, 14.53],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [25.914, 20.644], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 11,
              ty: 4,
              nm: "ceja1",
              parent: 12,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 27,
                      s: [42.697, 5.83, 0],
                      to: [0, -1.833, 0],
                      ti: [0, 1.833, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 31,
                      s: [42.697, -5.17, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 71,
                      s: [42.697, -5.17, 0],
                      to: [0, 1.833, 0],
                      ti: [0, -1.833, 0],
                    },
                    { t: 76, s: [42.697, 5.83, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [27.793, 14.139, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [5.278, -1.028],
                            [0, 0],
                            [1.028, 5.278],
                            [-5.279, 1.029],
                            [0, 0],
                            [-1.028, -5.279],
                          ],
                          o: [
                            [0, 0],
                            [-5.278, 1.028],
                            [-1.028, -5.279],
                            [0, 0],
                            [5.278, -1.028],
                            [1.029, 5.278],
                          ],
                          v: [
                            [18.819, 6.254],
                            [-15.095, 12.861],
                            [-26.514, 5.166],
                            [-18.819, -6.254],
                            [15.094, -12.861],
                            [26.513, -5.165],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [27.792, 14.139], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 12,
              ty: 4,
              nm: "1-linea-a",
              parent: 8,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [-182.244, -74.163, 0], ix: 2, l: 2 },
                a: { a: 0, k: [49.458, 49.458, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -21.747],
                            [21.747, 0],
                            [0, 21.747],
                            [-21.747, 0],
                          ],
                          o: [
                            [0, 21.747],
                            [-21.747, 0],
                            [0, -21.747],
                            [21.747, 0],
                          ],
                          v: [
                            [39.376, 0],
                            [0, 39.376],
                            [-39.376, 0],
                            [0, -39.376],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [49.458, 49.459], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 13,
              ty: 4,
              nm: "1-linea-b",
              parent: 20,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [49.458, 49.458, 0], ix: 2, l: 2 },
                a: { a: 0, k: [49.458, 49.458, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -21.747],
                            [21.747, 0],
                            [0, 21.747],
                            [-21.747, 0],
                          ],
                          o: [
                            [0, 21.747],
                            [-21.747, 0],
                            [0, -21.747],
                            [21.747, 0],
                          ],
                          v: [
                            [39.376, 0],
                            [0, 39.376],
                            [-39.376, 0],
                            [0, -39.376],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [49.458, 49.459], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 14,
              ty: 4,
              nm: "1-parapado-a",
              parent: 21,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 11,
                      s: [46.655, -2.131, 0],
                      to: [0, 4.5, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 16,
                      s: [46.655, 24.869, 0],
                      to: [0, 0, 0],
                      ti: [0, 4.5, 0],
                    },
                    {
                      i: { x: 0.833, y: 0.833 },
                      o: { x: 0.167, y: 0.167 },
                      t: 21,
                      s: [46.655, -2.131, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 41,
                      s: [46.655, -2.131, 0],
                      to: [0, 4.5, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 46,
                      s: [46.655, 24.869, 0],
                      to: [0, 0, 0],
                      ti: [0, 4.5, 0],
                    },
                    {
                      i: { x: 0.833, y: 0.833 },
                      o: { x: 0.167, y: 0.167 },
                      t: 51,
                      s: [46.655, -2.131, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 71,
                      s: [46.655, -2.131, 0],
                      to: [0, 4.5, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 76,
                      s: [46.655, 24.869, 0],
                      to: [0, 0, 0],
                      ti: [0, 4.5, 0],
                    },
                    {
                      i: { x: 0.833, y: 0.833 },
                      o: { x: 0.167, y: 0.167 },
                      t: 81,
                      s: [46.655, -2.131, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 101,
                      s: [46.655, -2.131, 0],
                      to: [0, 4.5, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 106,
                      s: [46.655, 24.869, 0],
                      to: [0, 0, 0],
                      ti: [0, 4.5, 0],
                    },
                    { t: 111, s: [46.655, -2.131, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [71.052, 52.926, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 21, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -22.61],
                            [32.62, 0],
                            [0, 22.61],
                            [-32.622, 0],
                          ],
                          o: [
                            [0, 22.61],
                            [-32.622, 0],
                            [0, -22.61],
                            [32.62, 0],
                          ],
                          v: [
                            [59.065, 0],
                            [0.001, 40.939],
                            [-59.065, 0],
                            [0.001, -40.939],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.795, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [71.052, 52.926], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 15,
              ty: 4,
              nm: "1-parapado-b",
              parent: 21,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 11,
                      s: [45.721, 133.699, 0],
                      to: [0, -7.333, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 16,
                      s: [45.721, 89.699, 0],
                      to: [0, 0, 0],
                      ti: [0, -7.333, 0],
                    },
                    {
                      i: { x: 0.833, y: 0.833 },
                      o: { x: 0.167, y: 0.167 },
                      t: 21,
                      s: [45.721, 133.699, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 41,
                      s: [45.721, 133.699, 0],
                      to: [0, -7.333, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 46,
                      s: [45.721, 89.699, 0],
                      to: [0, 0, 0],
                      ti: [0, -7.333, 0],
                    },
                    {
                      i: { x: 0.833, y: 0.833 },
                      o: { x: 0.167, y: 0.167 },
                      t: 51,
                      s: [45.721, 133.699, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 71,
                      s: [45.721, 133.699, 0],
                      to: [0, -7.333, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 76,
                      s: [45.721, 89.699, 0],
                      to: [0, 0, 0],
                      ti: [0, -7.333, 0],
                    },
                    {
                      i: { x: 0.833, y: 0.833 },
                      o: { x: 0.167, y: 0.167 },
                      t: 81,
                      s: [45.721, 133.699, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 101,
                      s: [45.721, 133.699, 0],
                      to: [0, -7.333, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 106,
                      s: [45.721, 89.699, 0],
                      to: [0, 0, 0],
                      ti: [0, -7.333, 0],
                    },
                    { t: 111, s: [45.721, 133.699, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [71.052, 52.926, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 21, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -22.61],
                            [32.62, 0],
                            [0, 22.61],
                            [-32.622, 0],
                          ],
                          o: [
                            [0, 22.61],
                            [-32.622, 0],
                            [0, -22.61],
                            [32.62, 0],
                          ],
                          v: [
                            [59.065, 0],
                            [0.001, 40.939],
                            [-59.065, 0],
                            [0.001, -40.939],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.795, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [71.052, 52.926], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 16,
              ty: 4,
              nm: "1-iris-a",
              parent: 21,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [65.866, 60.829, 0], ix: 2, l: 2 },
                a: { a: 0, k: [22.229, 22.101, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 21, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [-3.993, -11.73],
                            [-9.13, 0.556],
                            [-3.407, 3.816],
                            [0.637, 0.266],
                            [0, 0],
                            [0, 0],
                            [0.279, 1.211],
                            [11.072, -2.559],
                          ],
                          o: [
                            [2.947, 8.659],
                            [5.783, -0.35],
                            [0.459, -0.513],
                            [-3.813, -1.583],
                            [0, 0],
                            [-0.06, -1.199],
                            [-2.561, -11.072],
                            [-11.761, 2.718],
                          ],
                          v: [
                            [-17.986, 7.456],
                            [2.689, 21.294],
                            [16.675, 14.488],
                            [16.3, 12.915],
                            [4.647, 3.747],
                            [21.979, -0.259],
                            [21.52, -3.878],
                            [-3.161, -19.292],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [22.229, 22.101], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 17,
              ty: 4,
              nm: "1-parapado-c",
              parent: 14,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [156.835, 50.914, 0], ix: 2, l: 2 },
                a: { a: 0, k: [71.052, 52.926, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 20, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -22.61],
                            [32.62, 0],
                            [0, 22.61],
                            [-32.621, 0],
                          ],
                          o: [
                            [0, 22.61],
                            [-32.621, 0],
                            [0, -22.61],
                            [32.62, 0],
                          ],
                          v: [
                            [59.065, 0],
                            [0, 40.939],
                            [-59.065, 0],
                            [0, -40.939],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.795, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [71.052, 52.926], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 18,
              ty: 4,
              nm: "1-parapado-d",
              parent: 15,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [165.273, 50.926, 0], ix: 2, l: 2 },
                a: { a: 0, k: [71.052, 52.926, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 20, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -22.61],
                            [32.62, 0],
                            [0, 22.61],
                            [-32.621, 0],
                          ],
                          o: [
                            [0, 22.61],
                            [-32.621, 0],
                            [0, -22.61],
                            [32.62, 0],
                          ],
                          v: [
                            [59.065, 0],
                            [0, 40.939],
                            [-59.065, 0],
                            [0, -40.939],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.795, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [71.052, 52.926], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 19,
              ty: 4,
              nm: "1-iris-b",
              parent: 16,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [103.646, 20.101, 0], ix: 2, l: 2 },
                a: { a: 0, k: [22.229, 22.101, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 20, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [-3.993, -11.73],
                            [-9.13, 0.556],
                            [-3.407, 3.816],
                            [0.637, 0.266],
                            [0, 0],
                            [0, 0],
                            [0.279, 1.211],
                            [11.072, -2.559],
                          ],
                          o: [
                            [2.946, 8.659],
                            [5.783, -0.35],
                            [0.459, -0.513],
                            [-3.814, -1.583],
                            [0, 0],
                            [-0.06, -1.199],
                            [-2.561, -11.072],
                            [-11.762, 2.718],
                          ],
                          v: [
                            [-17.986, 7.456],
                            [2.69, 21.294],
                            [16.675, 14.488],
                            [16.3, 12.915],
                            [4.648, 3.747],
                            [21.98, -0.259],
                            [21.52, -3.878],
                            [-3.161, -19.292],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [22.229, 22.101], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 20,
              ty: 4,
              nm: "1-ojo-b",
              parent: 21,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [130.875, 47.458, 0], ix: 2, l: 2 },
                a: { a: 0, k: [49.458, 49.458, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -21.747],
                            [21.747, 0],
                            [0, 21.747],
                            [-21.747, 0],
                          ],
                          o: [
                            [0, 21.747],
                            [-21.747, 0],
                            [0, -21.747],
                            [21.747, 0],
                          ],
                          v: [
                            [39.376, 0],
                            [0, 39.376],
                            [-39.376, 0],
                            [0, -39.376],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [49.458, 49.459], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 21,
              ty: 4,
              nm: "1-ojo-a",
              parent: 12,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [49.458, 49.458, 0], ix: 2, l: 2 },
                a: { a: 0, k: [49.458, 49.458, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -21.747],
                            [21.747, 0],
                            [0, 21.747],
                            [-21.747, 0],
                          ],
                          o: [
                            [0, 21.747],
                            [-21.747, 0],
                            [0, -21.747],
                            [21.747, 0],
                          ],
                          v: [
                            [39.376, 0],
                            [0, 39.376],
                            [-39.376, 0],
                            [0, -39.376],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [49.458, 49.459], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 22,
              ty: 4,
              nm: "brillo1",
              parent: 24,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.833, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 32,
                      s: [59.073, 32.084, 0],
                      to: [4, 0, 0],
                      ti: [-4, 0, 0],
                    },
                    {
                      i: { x: 0.667, y: 0.667 },
                      o: { x: 0.38, y: 0.38 },
                      t: 36,
                      s: [83.073, 32.084, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.167, y: 0 },
                      t: 95,
                      s: [83.073, 32.084, 0],
                      to: [-4, 0, 0],
                      ti: [4, 0, 0],
                    },
                    { t: 100, s: [59.073, 32.084, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [27.101, 45.042, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 24, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-12.871, 42.542],
                            [-24.601, 37.017],
                            [12.87, -42.542],
                            [24.601, -37.017],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [27.101, 45.042], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 23,
              ty: 4,
              nm: "brillo2",
              parent: 22,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [109.101, 46.042, 0], ix: 2, l: 2 },
                a: { a: 0, k: [27.101, 45.042, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 25, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-12.871, 42.542],
                            [-24.601, 37.017],
                            [12.87, -42.542],
                            [24.601, -37.017],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [27.101, 45.042], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 24,
              ty: 4,
              nm: "lente1",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.8, y: 1 },
                      o: { x: 0.2, y: 0 },
                      t: 31,
                      s: [635.197, 474.987, 0],
                      to: [-12.042, 12.042, 0],
                      ti: [3.167, -1, 0],
                    },
                    {
                      i: { x: 0.8, y: 0.8 },
                      o: { x: 0.2, y: 0.2 },
                      t: 36,
                      s: [616.197, 480.987, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.8, y: 1 },
                      o: { x: 0.2, y: 0 },
                      t: 95,
                      s: [616.197, 480.987, 0],
                      to: [13.667, 4.25, 0],
                      ti: [2.242, -2.242, 0],
                    },
                    { t: 100, s: [635.197, 474.987, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [65.186, 37.248, 0], ix: 1, l: 2 },
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.8, 0.5, 0.833], y: [1, 0.5, 1] },
                      o: { x: [0.2, 0.5, 0.167], y: [0, 0.5, 0] },
                      t: 31,
                      s: [100, 100, 100],
                    },
                    {
                      i: { x: [0.8, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.2, 0.5, 0.167], y: [0, 0, 0] },
                      t: 36,
                      s: [100, 83, 100],
                    },
                    {
                      i: { x: [0.8, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.2, 0.5, 0.167], y: [0, 0.5, 0] },
                      t: 95,
                      s: [100, 83, 100],
                    },
                    { t: 100, s: [100, 100, 100] },
                  ],
                  ix: 6,
                  l: 2,
                },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [-25.585, 0],
                            [-3.166, 24.723],
                            [0, 0],
                          ],
                          o: [
                            [25.584, 0],
                            [0, 0],
                            [3.166, 24.723],
                          ],
                          v: [
                            [0.001, 21.918],
                            [49.857, -21.918],
                            [-49.857, -21.918],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 6.132, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [65.186, 37.248], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 25,
              ty: 4,
              nm: "lente2",
              parent: 24,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [138.709, 37.248, 0], ix: 2, l: 2 },
                a: { a: 0, k: [65.187, 37.248, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [-25.585, 0],
                            [-3.167, 24.723],
                            [0, 0],
                          ],
                          o: [
                            [25.585, 0],
                            [0, 0],
                            [3.167, 24.723],
                          ],
                          v: [
                            [0, 21.918],
                            [49.857, -21.918],
                            [-49.857, -21.918],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 6.132, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [65.187, 37.248], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 26,
              ty: 4,
              nm: "2linea-a",
              parent: 9,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [122.115, -69.215, 0], ix: 2, l: 2 },
                a: { a: 0, k: [49.458, 49.458, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -21.747],
                            [-21.746, 0],
                            [0, 21.747],
                            [21.747, 0],
                          ],
                          o: [
                            [0, 21.747],
                            [21.747, 0],
                            [0, -21.747],
                            [-21.746, 0],
                          ],
                          v: [
                            [-39.376, 0],
                            [0, 39.376],
                            [39.376, 0],
                            [0, -39.376],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [49.458, 49.459], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 27,
              ty: 4,
              nm: "2-linea-b",
              parent: 35,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [49.458, 49.458, 0], ix: 2, l: 2 },
                a: { a: 0, k: [49.458, 49.458, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -21.747],
                            [-21.747, 0],
                            [0, 21.747],
                            [21.746, 0],
                          ],
                          o: [
                            [0, 21.747],
                            [21.746, 0],
                            [0, -21.747],
                            [-21.747, 0],
                          ],
                          v: [
                            [-39.376, 0],
                            [0, 39.376],
                            [39.376, 0],
                            [0, -39.376],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [49.458, 49.459], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 28,
              ty: 4,
              nm: "2-parapado-a",
              parent: 34,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 0,
                      s: [51.796, 10.421, 0],
                      to: [0, 2.833, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 5,
                      s: [51.796, 27.421, 0],
                      to: [0, 0, 0],
                      ti: [0, 2.833, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 10,
                      s: [51.796, 10.421, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 30,
                      s: [51.796, 10.421, 0],
                      to: [0, 2.833, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 35,
                      s: [51.796, 27.421, 0],
                      to: [0, 0, 0],
                      ti: [0, 2.833, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 40,
                      s: [51.796, 10.421, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 60,
                      s: [51.796, 10.421, 0],
                      to: [0, 2.833, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 65,
                      s: [51.796, 27.421, 0],
                      to: [0, 0, 0],
                      ti: [0, 2.833, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 70,
                      s: [51.796, 10.421, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 90,
                      s: [51.796, 10.421, 0],
                      to: [0, 2.833, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 95,
                      s: [51.796, 27.421, 0],
                      to: [0, 0, 0],
                      ti: [0, 2.833, 0],
                    },
                    { t: 100, s: [51.796, 10.421, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [71.052, 52.926, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 70.524, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 34, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -22.61],
                            [32.62, 0],
                            [0, 22.61],
                            [-32.622, 0],
                          ],
                          o: [
                            [0, 22.61],
                            [-32.622, 0],
                            [0, -22.61],
                            [32.62, 0],
                          ],
                          v: [
                            [59.065, 0],
                            [0.001, 40.939],
                            [-59.065, 0],
                            [0.001, -40.939],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 7, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [71.523, 53.155], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 29,
              ty: 4,
              nm: "2-parapado-b",
              parent: 34,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 0,
                      s: [55.861, 127.251, 0],
                      to: [0, -6.833, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 5,
                      s: [55.861, 86.251, 0],
                      to: [0, 0, 0],
                      ti: [0, -6.833, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 10,
                      s: [55.861, 127.251, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 30,
                      s: [55.861, 127.251, 0],
                      to: [0, -6.833, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 35,
                      s: [55.861, 86.251, 0],
                      to: [0, 0, 0],
                      ti: [0, -6.833, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 40,
                      s: [55.861, 127.251, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 60,
                      s: [55.861, 127.251, 0],
                      to: [0, -6.833, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 65,
                      s: [55.861, 86.251, 0],
                      to: [0, 0, 0],
                      ti: [0, -6.833, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 70,
                      s: [55.861, 127.251, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 90,
                      s: [55.861, 127.251, 0],
                      to: [0, -6.833, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 95,
                      s: [55.861, 86.251, 0],
                      to: [0, 0, 0],
                      ti: [0, -6.833, 0],
                    },
                    { t: 100, s: [55.861, 127.251, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [71.052, 52.926, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 34, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -22.61],
                            [32.62, 0],
                            [0, 22.61],
                            [-32.622, 0],
                          ],
                          o: [
                            [0, 22.61],
                            [-32.622, 0],
                            [0, -22.61],
                            [32.62, 0],
                          ],
                          v: [
                            [59.065, 0],
                            [0.001, 40.939],
                            [-59.065, 0],
                            [0.001, -40.939],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.795, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [71.052, 52.926], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 30,
              ty: 4,
              nm: "2-parapado-d",
              parent: 29,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [148.273, 47.926, 0], ix: 2, l: 2 },
                a: { a: 0, k: [71.052, 52.926, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 35, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -22.61],
                            [32.62, 0],
                            [0, 22.61],
                            [-32.621, 0],
                          ],
                          o: [
                            [0, 22.61],
                            [-32.621, 0],
                            [0, -22.61],
                            [32.62, 0],
                          ],
                          v: [
                            [59.065, 0],
                            [0, 40.939],
                            [-59.065, 0],
                            [0, -40.939],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.795, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [71.343, 53.096], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 31,
              ty: 4,
              nm: "2-parapado-c",
              parent: 28,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [140.835, 55.914, 0], ix: 2, l: 2 },
                a: { a: 0, k: [71.052, 52.926, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 35, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -22.61],
                            [32.62, 0],
                            [0, 22.61],
                            [-32.621, 0],
                          ],
                          o: [
                            [0, 22.61],
                            [-32.621, 0],
                            [0, -22.61],
                            [32.62, 0],
                          ],
                          v: [
                            [59.065, 0],
                            [0, 40.939],
                            [-59.065, 0],
                            [0, -40.939],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 6, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [71.052, 52.926], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 32,
              ty: 4,
              nm: "2-iris-b",
              parent: 33,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [100.046, 23.138, 0], ix: 2, l: 2 },
                a: { a: 0, k: [21.826, 23.138, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 35, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [8.385, -9.123],
                            [8.13, 4.191],
                            [1.578, 4.866],
                            [-0.691, -0.014],
                            [0, 0],
                            [0, 0],
                            [-0.621, 1.077],
                            [-9.099, -6.807],
                          ],
                          o: [
                            [-6.188, 6.735],
                            [-5.151, -2.654],
                            [-0.213, -0.655],
                            [4.128, 0.09],
                            [0, 0],
                            [0.539, -1.074],
                            [3.194, -5.535],
                            [9.666, 7.232],
                          ],
                          v: [
                            [13.191, 14.374],
                            [-11.31, 18.698],
                            [-21.363, 6.829],
                            [-20.385, 5.54],
                            [-9.371, 0.504],
                            [-20.268, -8.804],
                            [-18.237, -15.225],
                            [10.414, -16.082],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [21.826, 23.139], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 33,
              ty: 4,
              nm: "2-iris-a",
              parent: 34,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 30,
                      s: [30.837, 66.278, 0],
                      to: [0, -2, 0],
                      ti: [0, 2, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 34,
                      s: [30.837, 54.278, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 95,
                      s: [30.837, 54.278, 0],
                      to: [0, 2, 0],
                      ti: [0, -2, 0],
                    },
                    { t: 100, s: [30.837, 66.278, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [21.826, 23.138, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              ef: [
                {
                  ty: 28,
                  nm: "Definir mate",
                  np: 8,
                  mn: "ADBE Set Matte3",
                  ix: 1,
                  en: 1,
                  ef: [
                    {
                      ty: 10,
                      nm: "Tomar mate de la capa",
                      mn: "ADBE Set Matte3-0001",
                      ix: 1,
                      v: { a: 0, k: 34, ix: 1 },
                    },
                    {
                      ty: 7,
                      nm: "Utilizar como mate",
                      mn: "ADBE Set Matte3-0002",
                      ix: 2,
                      v: { a: 0, k: 4, ix: 2 },
                    },
                    {
                      ty: 7,
                      nm: "Invertir mate",
                      mn: "ADBE Set Matte3-0003",
                      ix: 3,
                      v: { a: 0, k: 0, ix: 3 },
                    },
                    {
                      ty: 7,
                      nm: "Si tamaños de capas son difer.",
                      mn: "ADBE Set Matte3-0004",
                      ix: 4,
                      v: { a: 0, k: 1, ix: 4 },
                    },
                    {
                      ty: 7,
                      nm: "Mate compuesto con original",
                      mn: "ADBE Set Matte3-0005",
                      ix: 5,
                      v: { a: 0, k: 1, ix: 5 },
                    },
                    {
                      ty: 7,
                      nm: "Premultiplicar capa de mate",
                      mn: "ADBE Set Matte3-0006",
                      ix: 6,
                      v: { a: 0, k: 1, ix: 6 },
                    },
                  ],
                },
              ],
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [8.386, -9.123],
                            [8.129, 4.191],
                            [1.578, 4.866],
                            [-0.691, -0.014],
                            [0, 0],
                            [0, 0],
                            [-0.621, 1.077],
                            [-9.099, -6.807],
                          ],
                          o: [
                            [-6.188, 6.735],
                            [-5.151, -2.654],
                            [-0.213, -0.655],
                            [4.128, 0.09],
                            [0, 0],
                            [0.539, -1.074],
                            [3.194, -5.535],
                            [9.666, 7.232],
                          ],
                          v: [
                            [13.19, 14.374],
                            [-11.31, 18.698],
                            [-21.363, 6.829],
                            [-20.385, 5.54],
                            [-9.372, 0.504],
                            [-20.269, -8.804],
                            [-18.237, -15.225],
                            [10.414, -16.082],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [22.031, 23.185], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 132,
              st: 4,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 34,
              ty: 4,
              nm: "2-ojos-a",
              parent: 26,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [49.458, 49.458, 0], ix: 2, l: 2 },
                a: { a: 0, k: [49.458, 49.458, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -21.747],
                            [-21.746, 0],
                            [0, 21.747],
                            [21.747, 0],
                          ],
                          o: [
                            [0, 21.747],
                            [21.747, 0],
                            [0, -21.747],
                            [-21.746, 0],
                          ],
                          v: [
                            [-39.376, 0],
                            [0, 39.376],
                            [39.376, 0],
                            [0, -39.376],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [49.458, 49.459], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 35,
              ty: 4,
              nm: "2-ojo-b",
              parent: 34,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [127.679, 49.458, 0], ix: 2, l: 2 },
                a: { a: 0, k: [49.458, 49.458, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, -21.747],
                            [-21.747, 0],
                            [0, 21.747],
                            [21.746, 0],
                          ],
                          o: [
                            [0, 21.747],
                            [21.746, 0],
                            [0, -21.747],
                            [-21.747, 0],
                          ],
                          v: [
                            [-39.376, 0],
                            [0, 39.376],
                            [39.376, 0],
                            [0, -39.376],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [49.458, 49.459], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 36,
              ty: 4,
              nm: "pest",
              parent: 37,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [96.265, 19.585, 0], ix: 2, l: 2 },
                a: { a: 0, k: [21.357, 15.267, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [0, 0],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-1.552, 10.802],
                            [1.552, -10.802],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 5.705, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [38.309, 16.057], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [0, 0],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-1.552, 10.802],
                            [1.552, -10.802],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 5.705, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [20.494, 13.655], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 2",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 2,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [0, 0],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-1.552, 10.802],
                            [1.552, -10.802],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 5.705, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [4.404, 16.879], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 3",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 3,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 37,
              ty: 4,
              nm: "pest",
              parent: 35,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 0,
                      s: [-26.444, 1.417, 0],
                      to: [0, 0.667, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 5,
                      s: [-26.444, 5.417, 0],
                      to: [0, 0, 0],
                      ti: [0, 0.667, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 10,
                      s: [-26.444, 1.417, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 30,
                      s: [-26.444, 1.417, 0],
                      to: [0, 0.667, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 35,
                      s: [-26.444, 5.417, 0],
                      to: [0, 0, 0],
                      ti: [0, 0.667, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 40,
                      s: [-26.444, 1.417, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 60,
                      s: [-26.444, 1.417, 0],
                      to: [0, 0.667, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 65,
                      s: [-26.444, 5.417, 0],
                      to: [0, 0, 0],
                      ti: [0, 0.667, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 70,
                      s: [-26.444, 1.417, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 89,
                      s: [-26.444, 1.417, 0],
                      to: [0, 0.667, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 94,
                      s: [-26.444, 5.417, 0],
                      to: [0, 0, 0],
                      ti: [0, 0.667, 0],
                    },
                    { t: 99, s: [-26.444, 1.417, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [21.357, 15.267, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [0, 0],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-1.552, 10.802],
                            [1.552, -10.802],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 5.705, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [38.309, 16.058], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [0, 0],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-1.552, 10.803],
                            [1.552, -10.803],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 5.705, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [20.494, 13.655], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 2",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 2,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [0, 0],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-1.552, 10.802],
                            [1.552, -10.802],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 5.705, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [4.404, 16.88], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 3",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 3,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 38,
              ty: 4,
              nm: "boca1",
              parent: 9,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [122.111, 21.946, 0], ix: 2, l: 2 },
                a: { a: 0, k: [42.218, 27.846, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [-54.627, 10],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-32.135, -17.764],
                            [32.135, 7.764],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [42.218, 27.846], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
                {
                  ty: "tm",
                  s: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.2], y: [1] },
                        o: { x: [0.8], y: [0] },
                        t: 38,
                        s: [12],
                      },
                      {
                        i: { x: [0.2], y: [1] },
                        o: { x: [0.8], y: [0] },
                        t: 47,
                        s: [0],
                      },
                      {
                        i: { x: [0.2], y: [1] },
                        o: { x: [0.8], y: [0] },
                        t: 93.02,
                        s: [0],
                      },
                      { t: 99, s: [12] },
                    ],
                    ix: 1,
                  },
                  e: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.2], y: [1] },
                        o: { x: [0.8], y: [0] },
                        t: 38,
                        s: [80],
                      },
                      {
                        i: { x: [0.2], y: [1] },
                        o: { x: [0.8], y: [0] },
                        t: 47,
                        s: [100],
                      },
                      {
                        i: { x: [0.2], y: [1] },
                        o: { x: [0.8], y: [0] },
                        t: 93.02,
                        s: [100],
                      },
                      { t: 99, s: [80] },
                    ],
                    ix: 2,
                  },
                  o: { a: 0, k: 0, ix: 3 },
                  m: 1,
                  ix: 2,
                  nm: "Recortar trazados 1",
                  mn: "ADBE Vector Filter - Trim",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 39,
              ty: 4,
              nm: "boca-linea",
              parent: 9,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 39.13,
                      s: [90.626, 5.579, 0],
                      to: [-0.417, -0.917, 0],
                      ti: [0.417, 0.917, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 48,
                      s: [88.126, 0.079, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 92.223,
                      s: [88.126, 0.079, 0],
                      to: [0.417, 0.917, 0],
                      ti: [-0.417, -0.917, 0],
                    },
                    { t: 99, s: [90.626, 5.579, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [17.974, 16.001, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [-12.889, -4.472],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-7.891, 5.918],
                            [7.891, -1.447],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [17.974, 16.001], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 40,
              ty: 4,
              nm: "arruga",
              parent: 51,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [139.854, 59.772, 0], ix: 2, l: 2 },
                a: { a: 0, k: [41.617, 19.46, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [-7.34, -3.262],
                            [0, 0],
                          ],
                          o: [
                            [0, 0],
                            [7.339, 3.262],
                            [0, 0],
                          ],
                          v: [
                            [-31.534, 9.378],
                            [4.618, -6.116],
                            [31.534, 8.566],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 2,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [41.617, 19.46], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 41,
              ty: 4,
              nm: "palo2",
              parent: 51,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 29,
                      s: [0],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 36,
                      s: [-15],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 92,
                      s: [-15],
                    },
                    { t: 98, s: [0] },
                  ],
                  ix: 10,
                },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 29,
                      s: [163.298, -0.39, 0],
                      to: [0, -0.5, 0],
                      ti: [0, 0.5, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 36,
                      s: [163.298, -3.39, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 92,
                      s: [163.298, -3.39, 0],
                      to: [0, 0.5, 0],
                      ti: [0, -0.5, 0],
                    },
                    { t: 98, s: [163.298, -0.39, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [48.37, 55.821, 0], ix: 1, l: 2 },
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 29,
                      s: [100, 100, 100],
                    },
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 36,
                      s: [100, 113, 100],
                    },
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 92,
                      s: [100, 113, 100],
                    },
                    { t: 98, s: [100, 100, 100] },
                  ],
                  ix: 6,
                  l: 2,
                },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [1.104, 4.812],
                            [3.12, 1.135],
                            [3.531, -0.446],
                            [-4.067, -32.167],
                            [-6.804, -8.377],
                            [-6.846, 2.301],
                            [1.431, 6.983],
                            [-22.909, 2.896],
                            [-4.214, -0.805],
                            [0, 0],
                            [-1.785, -0.535],
                            [-1.983, 2.041],
                          ],
                          o: [
                            [-0.797, -3.469],
                            [-10.952, -3.979],
                            [-32.393, 4.095],
                            [1.408, 11.146],
                            [6.92, -2.073],
                            [-4.89, -5.629],
                            [-2.85, -22.904],
                            [4.487, -0.568],
                            [0, 0],
                            [2.697, 0.7],
                            [2.73, 0.816],
                            [3.005, -3.094],
                          ],
                          v: [
                            [47.016, -38.339],
                            [39.366, -44.897],
                            [9.989, -45.121],
                            [-44.053, 19.808],
                            [-31.297, 49.559],
                            [-10.643, 43.009],
                            [-20.811, 23.754],
                            [15.478, -22.944],
                            [28.655, -22.653],
                            [28.64, -22.65],
                            [35.588, -20.678],
                            [43.251, -22.671],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [48.37, 49.81], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [[4.955, 5.933]],
                          o: [[-1.601, 0.516]],
                          v: [[-6.014, -7.24]],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [37.255, 104.151], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 2",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 2,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 42,
              ty: 4,
              nm: "cabello2",
              parent: 51,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 34,
                      s: [0],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 40.695,
                      s: [-36],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 96,
                      s: [-36],
                    },
                    { t: 100, s: [0] },
                  ],
                  ix: 10,
                },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 34,
                      s: [154.759, 24.142, 0],
                      to: [1.167, -1, 0],
                      ti: [-1.167, 1, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 40.695,
                      s: [161.759, 18.142, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 96,
                      s: [161.759, 18.142, 0],
                      to: [-1.167, 1, 0],
                      ti: [1.167, -1, 0],
                    },
                    { t: 100, s: [154.759, 24.142, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [26.857, 23.592, 0], ix: 1, l: 2 },
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 34,
                      s: [100, 100, 100],
                    },
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 40.695,
                      s: [100, 74, 100],
                    },
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 96,
                      s: [100, 74, 100],
                    },
                    { t: 100, s: [100, 100, 100] },
                  ],
                  ix: 6,
                  l: 2,
                },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [-5.377, -6.974],
                            [-11.725, 9.04],
                            [5.377, 6.974],
                            [11.725, -9.04],
                          ],
                          o: [
                            [5.377, 6.974],
                            [11.725, -9.039],
                            [-5.377, -6.974],
                            [-11.725, 9.039],
                          ],
                          v: [
                            [-21.23, 16.367],
                            [9.735, 12.627],
                            [21.23, -16.368],
                            [-9.736, -12.628],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [26.857, 23.592], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 43,
              ty: 4,
              nm: "cabello1",
              parent: 51,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 34,
                      s: [0],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 40.695,
                      s: [35],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 96,
                      s: [35],
                    },
                    { t: 100, s: [0] },
                  ],
                  ix: 10,
                },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 34,
                      s: [113.225, 26.981, 0],
                      to: [0, -0.833, 0],
                      ti: [0, 0.833, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 40.695,
                      s: [113.225, 21.981, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 96,
                      s: [113.225, 21.981, 0],
                      to: [0, 0.833, 0],
                      ti: [0, -0.833, 0],
                    },
                    { t: 100, s: [113.225, 26.981, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [28.426, 20.479, 0], ix: 1, l: 2 },
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 34,
                      s: [100, 100, 100],
                    },
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 40.695,
                      s: [100, 81, 100],
                    },
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 96,
                      s: [100, 81, 100],
                    },
                    { t: 100, s: [100, 100, 100] },
                  ],
                  ix: 6,
                  l: 2,
                },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [3.194, -8.207],
                            [-13.797, -5.369],
                            [-3.193, 8.207],
                            [13.797, 5.369],
                          ],
                          o: [
                            [-3.193, 8.207],
                            [13.798, 5.369],
                            [3.194, -8.206],
                            [-13.797, -5.369],
                          ],
                          v: [
                            [-24.982, -9.722],
                            [-5.783, 14.86],
                            [24.982, 9.722],
                            [5.783, -14.859],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [28.425, 20.479], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 44,
              ty: 4,
              nm: "cabeza",
              parent: 51,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [138.834, 52.795, 0], ix: 2, l: 2 },
                a: { a: 0, k: [53.859, 33.479, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 1,
                        k: [
                          {
                            i: { x: 0.5, y: 1 },
                            o: { x: 0.5, y: 0 },
                            t: 27,
                            s: [
                              {
                                i: [
                                  [0, 0],
                                  [70.889, 35.444],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                ],
                                v: [
                                  [53.61, -8.861],
                                  [-56.36, -2.965],
                                  [-33.98, -27.124],
                                  [-5.759, -33.229],
                                  [13.291, -32.786],
                                  [32.418, -28.633],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.5, y: 1 },
                            o: { x: 0.5, y: 0 },
                            t: 33,
                            s: [
                              {
                                i: [
                                  [0, 0],
                                  [70.889, 35.444],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                ],
                                v: [
                                  [57.11, -8.111],
                                  [-58.11, -1.215],
                                  [-33.98, -27.124],
                                  [-5.759, -33.229],
                                  [13.291, -32.786],
                                  [32.418, -28.633],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.5, y: 1 },
                            o: { x: 0.5, y: 0 },
                            t: 91,
                            s: [
                              {
                                i: [
                                  [0, 0],
                                  [70.889, 35.444],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                ],
                                v: [
                                  [57.11, -8.111],
                                  [-58.11, -1.215],
                                  [-33.98, -27.124],
                                  [-5.759, -33.229],
                                  [13.291, -32.786],
                                  [32.418, -28.633],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            t: 96,
                            s: [
                              {
                                i: [
                                  [0, 0],
                                  [70.889, 35.444],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                ],
                                v: [
                                  [53.61, -8.861],
                                  [-56.36, -2.965],
                                  [-33.98, -27.124],
                                  [-5.759, -33.229],
                                  [13.291, -32.786],
                                  [32.418, -28.633],
                                ],
                                c: !0,
                              },
                            ],
                          },
                        ],
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [54.096, 33.576], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 45,
              ty: 4,
              nm: "2-palo",
              parent: 57,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 18,
                      s: [0],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 27,
                      s: [7],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 83,
                      s: [7],
                    },
                    { t: 91, s: [0] },
                  ],
                  ix: 10,
                },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 18,
                      s: [335.345, -7.018, 0],
                      to: [1.5, -1.167, 0],
                      ti: [-1.5, 1.167, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 27,
                      s: [344.345, -14.018, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 83,
                      s: [344.345, -14.018, 0],
                      to: [-1.5, 1.167, 0],
                      ti: [1.5, -1.167, 0],
                    },
                    { t: 91, s: [335.345, -7.018, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [48.951, 59.917, 0], ix: 1, l: 2 },
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 18,
                      s: [100, 100, 100],
                    },
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 27,
                      s: [87, 104, 100],
                    },
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 83,
                      s: [87, 104, 100],
                    },
                    { t: 91, s: [100, 100, 100] },
                  ],
                  ix: 6,
                  l: 2,
                },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [-2.277, 4.859],
                            [-3.575, 0.49],
                            [-3.649, -1.283],
                            [11.691, -33.244],
                            [9.149, -7.34],
                            [6.746, 4.014],
                            [-3.12, 7.09],
                            [23.677, 8.327],
                            [4.662, 0.111],
                            [0, 0],
                            [2.019, -0.158],
                            [1.639, 2.622],
                          ],
                          o: [
                            [1.641, -3.503],
                            [12.548, -1.718],
                            [33.478, 11.774],
                            [-4.051, 11.52],
                            [-6.877, -3.788],
                            [6.484, -4.86],
                            [8.277, -23.682],
                            [-4.637, -1.631],
                            [0, 0],
                            [-3.026, 0.126],
                            [-3.087, 0.243],
                            [-2.484, -3.977],
                          ],
                          v: [
                            [-46.424, -51.667],
                            [-38.218, -57.949],
                            [-3.184, -52.07],
                            [37.01, 30.98],
                            [16.638, 59.667],
                            [-3.804, 47.974],
                            [11.411, 29.847],
                            [-16.444, -28.085],
                            [-30.511, -30.795],
                            [-30.496, -30.787],
                            [-38.33, -30.285],
                            [-46.015, -34.158],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [48.951, 59.917], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 46,
              ty: 4,
              nm: "2-arruga",
              parent: 57,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [355.671, 57.205, 0], ix: 2, l: 2 },
                a: { a: 0, k: [41.617, 19.46, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [-7.34, -3.262],
                            [0, 0],
                          ],
                          o: [
                            [0, 0],
                            [7.339, 3.262],
                            [0, 0],
                          ],
                          v: [
                            [-31.535, 9.378],
                            [4.618, -6.116],
                            [31.535, 8.566],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 2,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [41.617, 19.461], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 47,
              ty: 4,
              nm: "2-pelo-a",
              parent: 57,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 20,
                      s: [0],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 29,
                      s: [1],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 85,
                      s: [1],
                    },
                    { t: 93, s: [0] },
                  ],
                  ix: 10,
                },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 20,
                      s: [334.736, 18.862, 0],
                      to: [0, -0.5, 0],
                      ti: [0, 0.5, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 29,
                      s: [334.736, 15.862, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 85,
                      s: [334.736, 15.862, 0],
                      to: [0, 0.5, 0],
                      ti: [0, -0.5, 0],
                    },
                    { t: 93, s: [334.736, 18.862, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [28.368, 20.708, 0], ix: 1, l: 2 },
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 20,
                      s: [100, 100, 100],
                    },
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 29,
                      s: [71, 127, 100],
                    },
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 85,
                      s: [71, 127, 100],
                    },
                    { t: 93, s: [100, 100, 100] },
                  ],
                  ix: 6,
                  l: 2,
                },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [3.436, -8.108],
                            [13.632, 5.776],
                            [-3.435, 8.108],
                            [-13.632, -5.777],
                          ],
                          o: [
                            [-3.436, 8.108],
                            [-13.632, -5.776],
                            [3.436, -8.109],
                            [13.631, 5.776],
                          ],
                          v: [
                            [24.682, 10.459],
                            [-6.221, 14.682],
                            [-24.683, -10.458],
                            [6.221, -14.681],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [28.368, 20.708], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 48,
              ty: 4,
              nm: "2-pelo-b",
              parent: 57,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 20,
                      s: [0],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 29,
                      s: [-22],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 85,
                      s: [-22],
                    },
                    { t: 93, s: [0] },
                  ],
                  ix: 10,
                },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 20,
                      s: [384.046, 20.39, 0],
                      to: [0, -0.5, 0],
                      ti: [0, 0.5, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 29,
                      s: [384.046, 17.39, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 85,
                      s: [384.046, 17.39, 0],
                      to: [0, 0.5, 0],
                      ti: [0, -0.5, 0],
                    },
                    { t: 93, s: [384.046, 20.39, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [28.463, 20.164, 0], ix: 1, l: 2 },
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 20,
                      s: [100, 100, 100],
                    },
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 29,
                      s: [100, 87, 100],
                    },
                    {
                      i: { x: [0.5, 0.5, 0.833], y: [1, 1, 1] },
                      o: { x: [0.5, 0.5, 0.167], y: [0, 0, 0] },
                      t: 85,
                      s: [100, 87, 100],
                    },
                    { t: 93, s: [100, 100, 100] },
                  ],
                  ix: 6,
                  l: 2,
                },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [-2.883, -8.321],
                            [13.988, -4.848],
                            [2.884, 8.321],
                            [-13.989, 4.848],
                          ],
                          o: [
                            [2.884, 8.321],
                            [-13.989, 4.848],
                            [-2.884, -8.321],
                            [13.988, -4.848],
                          ],
                          v: [
                            [25.329, -8.778],
                            [5.222, 15.066],
                            [-25.329, 8.778],
                            [-5.221, -15.066],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [28.463, 20.164], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 49,
              ty: 4,
              nm: "2-cabeza",
              parent: 57,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [351.384, 50.795, 0], ix: 2, l: 2 },
                a: { a: 0, k: [56.146, 33.479, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [-70.889, 35.444],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-55.896, -4.727],
                            [55.896, -2.215],
                            [34.204, -25.254],
                            [8.046, -33.229],
                            [-11.005, -32.786],
                            [-42.019, -22.153],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [56.146, 33.479], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 50,
              ty: 4,
              nm: "linea-aji",
              parent: 51,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [242.092, 383.963, 0], ix: 2, l: 2 },
                a: { a: 0, k: [117.634, 63.41, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [-143.402, 9.859],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-107.552, -53.328],
                            [107.552, 43.469],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [117.635, 63.41], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
                {
                  ty: "tm",
                  s: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 29,
                        s: [10],
                      },
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 35,
                        s: [1],
                      },
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 94,
                        s: [1],
                      },
                      { t: 99, s: [10] },
                    ],
                    ix: 1,
                  },
                  e: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 29,
                        s: [90],
                      },
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 35,
                        s: [99],
                      },
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 94,
                        s: [99],
                      },
                      { t: 99, s: [90] },
                    ],
                    ix: 2,
                  },
                  o: { a: 0, k: 0, ix: 3 },
                  m: 1,
                  ix: 2,
                  nm: "Recortar trazados 1",
                  mn: "ADBE Vector Filter - Trim",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 51,
              ty: 4,
              nm: "2-aji",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 27,
                      s: [699.899, 543.526, 0],
                      to: [-1.5, 1.667, 0],
                      ti: [4.875, 4.25, 0],
                    },
                    {
                      i: { x: 0.5, y: 0.5 },
                      o: { x: 0.5, y: 0.5 },
                      t: 36,
                      s: [690.899, 553.526, 0],
                      to: [0, 0, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 91,
                      s: [690.899, 553.526, 0],
                      to: [0, 0, 0],
                      ti: [-1.5, 1.667, 0],
                    },
                    { t: 100, s: [699.899, 543.526, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [246.252, 260.702, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 1,
                        k: [
                          {
                            i: { x: 0.5, y: 1 },
                            o: { x: 0.5, y: 0.5 },
                            t: 28,
                            s: [
                              {
                                i: [
                                  [-100.231, -124.986],
                                  [-12.916, 95.109],
                                  [83.088, 156.337],
                                  [33.227, 61.898],
                                  [23.161, -16.86],
                                ],
                                o: [
                                  [114.225, 142.437],
                                  [10.092, -74.316],
                                  [-23.065, -43.4],
                                  [-33.226, -61.899],
                                  [-77.603, 56.486],
                                ],
                                v: [
                                  [-135.939, 108.183],
                                  [226.078, 139.983],
                                  [35.182, 12.952],
                                  [-31.989, -188.721],
                                  [-139.335, -233.161],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.833, y: 0.833 },
                            o: { x: 0.5, y: 0.5 },
                            t: 36,
                            s: [
                              {
                                i: [
                                  [-100.231, -124.986],
                                  [-0.046, 95.982],
                                  [83.088, 156.337],
                                  [33.227, 61.898],
                                  [23.161, -16.86],
                                ],
                                o: [
                                  [114.225, 142.437],
                                  [0.023, -48.509],
                                  [-23.065, -43.4],
                                  [-33.226, -61.899],
                                  [-77.603, 56.486],
                                ],
                                v: [
                                  [-135.939, 108.183],
                                  [239.078, 140.983],
                                  [25.182, 14.952],
                                  [-31.989, -188.721],
                                  [-139.335, -233.161],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.833, y: 0.833 },
                            o: { x: 0.167, y: 0.167 },
                            t: 91,
                            s: [
                              {
                                i: [
                                  [-100.231, -124.986],
                                  [-0.046, 95.982],
                                  [83.088, 156.337],
                                  [33.227, 61.898],
                                  [23.161, -16.86],
                                ],
                                o: [
                                  [114.225, 142.437],
                                  [0.023, -48.509],
                                  [-23.065, -43.4],
                                  [-33.226, -61.899],
                                  [-77.603, 56.486],
                                ],
                                v: [
                                  [-135.939, 108.183],
                                  [239.078, 140.983],
                                  [25.182, 14.952],
                                  [-31.989, -188.721],
                                  [-139.335, -233.161],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            t: 100,
                            s: [
                              {
                                i: [
                                  [-100.231, -124.986],
                                  [-12.916, 95.109],
                                  [83.088, 156.337],
                                  [33.227, 61.898],
                                  [23.161, -16.86],
                                ],
                                o: [
                                  [114.225, 142.437],
                                  [10.092, -74.316],
                                  [-23.065, -43.4],
                                  [-33.226, -61.899],
                                  [-77.603, 56.486],
                                ],
                                v: [
                                  [-135.939, 108.183],
                                  [226.078, 139.983],
                                  [35.182, 12.952],
                                  [-31.989, -188.721],
                                  [-139.335, -233.161],
                                ],
                                c: !0,
                              },
                            ],
                          },
                        ],
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [246.252, 260.703], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 52,
              ty: 4,
              nm: "labio",
              parent: 53,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [90.34, 47.381, 0], ix: 2, l: 2 },
                a: { a: 0, k: [61.459, 16.6, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [-32.849, 13.036],
                          ],
                          o: [
                            [33.618, 6.979],
                            [0, 0],
                          ],
                          v: [
                            [-51.377, -3.484],
                            [51.377, -6.518],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [61.459, 16.6], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
                {
                  ty: "tm",
                  s: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 27,
                        s: [10],
                      },
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 31,
                        s: [0],
                      },
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 91,
                        s: [0],
                      },
                      { t: 97, s: [10] },
                    ],
                    ix: 1,
                  },
                  e: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 27,
                        s: [90],
                      },
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 31,
                        s: [100],
                      },
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 91,
                        s: [100],
                      },
                      { t: 97, s: [90] },
                    ],
                    ix: 2,
                  },
                  o: { a: 0, k: 0, ix: 3 },
                  m: 1,
                  ix: 2,
                  nm: "Recortar trazados 1",
                  mn: "ADBE Vector Filter - Trim",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 53,
              ty: 4,
              nm: "boca",
              parent: 8,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [-153.387, 11.272, 0], ix: 2, l: 2 },
                a: { a: 0, k: [92.92, 44.474, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [18.803, -0.62],
                            [14.749, 4.101],
                            [-7.401, 15.562],
                            [0, 0],
                            [-11.153, -3.051],
                            [-41.017, 14.002],
                            [-5.11, -12.717],
                            [14.124, -4.847],
                          ],
                          o: [
                            [-23.496, 0.775],
                            [-15.617, -4.344],
                            [0, 0],
                            [5.281, -11.103],
                            [19.438, 5.316],
                            [12.089, -4.127],
                            [5.973, 14.865],
                            [-22.934, 7.87],
                          ],
                          v: [
                            [-1.36, 33.617],
                            [-59.365, 26.839],
                            [-75.437, -12.211],
                            [-75.411, -12.266],
                            [-47.421, -26.032],
                            [46.623, -30.265],
                            [76.864, -15.05],
                            [61.572, 21.8],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [92.92, 44.474], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 54,
              ty: 4,
              nm: "sombra-boca",
              parent: 53,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [98.344, 52.245, 0], ix: 2, l: 2 },
                a: { a: 0, k: [83.088, 34.642, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [18.803, -0.62],
                            [14.749, 4.101],
                            [-7.401, 15.562],
                            [0, 0],
                            [-11.153, -3.051],
                            [-41.017, 14.001],
                            [-5.11, -12.717],
                            [0, 0],
                            [14.124, -4.846],
                          ],
                          o: [
                            [-23.496, 0.775],
                            [-15.617, -4.344],
                            [0, 0],
                            [5.28, -11.103],
                            [19.438, 5.316],
                            [12.089, -4.127],
                            [0, 0],
                            [5.973, 14.864],
                            [-22.934, 7.87],
                          ],
                          v: [
                            [-1.36, 33.617],
                            [-59.365, 26.839],
                            [-75.437, -12.211],
                            [-75.41, -12.266],
                            [-47.421, -26.032],
                            [46.623, -30.265],
                            [76.864, -15.05],
                            [76.864, -15.049],
                            [57.721, 23.975],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [83.087, 34.642], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 55,
              ty: 4,
              nm: "linea-ajie",
              parent: 57,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [210.121, 419.239, 0], ix: 2, l: 2 },
                a: { a: 0, k: [147.815, 70.803, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [0, 0],
                            [-113.543, 121.441],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [-137.732, 7.404],
                            [137.732, -60.721],
                          ],
                          c: !1,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 2,
                      lj: 2,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [147.815, 70.803], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
                {
                  ty: "tm",
                  s: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 15,
                        s: [10],
                      },
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 24,
                        s: [0],
                      },
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 79,
                        s: [0],
                      },
                      { t: 88, s: [10] },
                    ],
                    ix: 1,
                  },
                  e: {
                    a: 1,
                    k: [
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 15,
                        s: [90],
                      },
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 24,
                        s: [100],
                      },
                      {
                        i: { x: [0.5], y: [1] },
                        o: { x: [0.5], y: [0] },
                        t: 79,
                        s: [100],
                      },
                      { t: 88, s: [90] },
                    ],
                    ix: 2,
                  },
                  o: { a: 0, k: 0, ix: 3 },
                  m: 1,
                  ix: 2,
                  nm: "Recortar trazados 1",
                  mn: "ADBE Vector Filter - Trim",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 56,
              ty: 4,
              nm: "sombra-aji",
              parent: 57,
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [360.465, 317.936, 0], ix: 2, l: 2 },
                a: { a: 0, k: [71.514, 123.276, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 1,
                        k: [
                          {
                            i: { x: 0.5, y: 1 },
                            o: { x: 0.5, y: 0 },
                            t: 27,
                            s: [
                              {
                                i: [
                                  [89.474, -30.037],
                                  [-5.113, 169.362],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                ],
                                v: [
                                  [-71.264, 123.026],
                                  [55.917, -123.026],
                                  [71.264, -35.555],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.5, y: 1 },
                            o: { x: 0.5, y: 0 },
                            t: 33,
                            s: [
                              {
                                i: [
                                  [89.474, -30.037],
                                  [-0.048, 173.011],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                ],
                                v: [
                                  [-71.264, 123.026],
                                  [49.235, -132.265],
                                  [71.264, -35.555],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.5, y: 1 },
                            o: { x: 0.5, y: 0 },
                            t: 91,
                            s: [
                              {
                                i: [
                                  [89.474, -30.037],
                                  [-0.048, 173.011],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                ],
                                v: [
                                  [-71.264, 123.026],
                                  [49.235, -132.265],
                                  [71.264, -35.555],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            t: 100,
                            s: [
                              {
                                i: [
                                  [89.474, -30.037],
                                  [-5.113, 169.362],
                                  [0, 0],
                                ],
                                o: [
                                  [0, 0],
                                  [0, 0],
                                  [0, 0],
                                ],
                                v: [
                                  [-71.264, 123.026],
                                  [55.917, -123.026],
                                  [71.264, -35.555],
                                ],
                                c: !0,
                              },
                            ],
                          },
                        ],
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [71.514, 123.276], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 0,
                        k: {
                          i: [
                            [89.474, -30.037],
                            [-0.048, 173.011],
                            [0, 0],
                          ],
                          o: [
                            [0, 0],
                            [0, 0],
                            [0, 0],
                          ],
                          v: [
                            [0.25, 246.303],
                            [120.749, -8.989],
                            [142.778, 87.722],
                          ],
                          c: !0,
                        },
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [0, 0], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [100, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 2",
                  np: 1,
                  cix: 2,
                  bm: 0,
                  ix: 2,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 57,
              ty: 4,
              nm: "1-aji",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 15,
                      s: [0],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 24,
                      s: [-2],
                    },
                    {
                      i: { x: [0.5], y: [1] },
                      o: { x: [0.5], y: [0] },
                      t: 79,
                      s: [-2],
                    },
                    { t: 88, s: [0] },
                  ],
                  ix: 10,
                },
                p: {
                  a: 1,
                  k: [
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 15,
                      s: [326.346, 546.113, 0],
                      to: [2.958, 11, 0],
                      ti: [1.702, 8.509, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 24,
                      s: [332.346, 556.113, 0],
                      to: [-0.456, -2.28, 0],
                      ti: [0, 0, 0],
                    },
                    {
                      i: { x: 0.5, y: 1 },
                      o: { x: 0.5, y: 0 },
                      t: 79,
                      s: [332.346, 556.113, 0],
                      to: [0, 0, 0],
                      ti: [-1.299, -4.831, 0],
                    },
                    { t: 88, s: [326.346, 546.113, 0] },
                  ],
                  ix: 2,
                  l: 2,
                },
                a: { a: 0, k: [246.252, 260.702, 0], ix: 1, l: 2 },
                s: { a: 0, k: [100, 100, 100], ix: 6, l: 2 },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 1,
                        k: [
                          {
                            i: { x: 0.5, y: 1 },
                            o: { x: 0.5, y: 0 },
                            t: 15,
                            s: [
                              {
                                i: [
                                  [100.23, -124.986],
                                  [12.916, 95.109],
                                  [-83.088, 156.337],
                                  [-33.227, 61.899],
                                  [-23.161, -16.859],
                                ],
                                o: [
                                  [-114.226, 142.437],
                                  [-10.092, -74.316],
                                  [23.065, -43.4],
                                  [33.226, -61.899],
                                  [77.602, 56.486],
                                ],
                                v: [
                                  [135.94, 108.183],
                                  [-226.077, 139.983],
                                  [-35.181, 12.952],
                                  [31.99, -188.721],
                                  [139.336, -233.161],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.5, y: 1 },
                            o: { x: 0.5, y: 0 },
                            t: 24,
                            s: [
                              {
                                i: [
                                  [100.23, -124.986],
                                  [12.916, 95.109],
                                  [-83.088, 156.337],
                                  [-33.227, 61.899],
                                  [-23.161, -16.859],
                                ],
                                o: [
                                  [-114.226, 142.437],
                                  [-10.092, -74.316],
                                  [23.065, -43.4],
                                  [33.226, -61.899],
                                  [77.602, 56.486],
                                ],
                                v: [
                                  [135.94, 108.183],
                                  [-247.077, 140.983],
                                  [-24.181, 19.952],
                                  [31.99, -188.721],
                                  [139.336, -233.161],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.5, y: 1 },
                            o: { x: 0.5, y: 0 },
                            t: 79,
                            s: [
                              {
                                i: [
                                  [100.23, -124.986],
                                  [12.916, 95.109],
                                  [-83.088, 156.337],
                                  [-33.227, 61.899],
                                  [-23.161, -16.859],
                                ],
                                o: [
                                  [-114.226, 142.437],
                                  [-10.092, -74.316],
                                  [23.065, -43.4],
                                  [33.226, -61.899],
                                  [77.602, 56.486],
                                ],
                                v: [
                                  [135.94, 108.183],
                                  [-247.077, 140.983],
                                  [-24.181, 19.952],
                                  [31.99, -188.721],
                                  [139.336, -233.161],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            t: 88,
                            s: [
                              {
                                i: [
                                  [100.23, -124.986],
                                  [12.916, 95.109],
                                  [-83.088, 156.337],
                                  [-33.227, 61.899],
                                  [-23.161, -16.859],
                                ],
                                o: [
                                  [-114.226, 142.437],
                                  [-10.092, -74.316],
                                  [23.065, -43.4],
                                  [33.226, -61.899],
                                  [77.602, 56.486],
                                ],
                                v: [
                                  [135.94, 108.183],
                                  [-226.077, 139.983],
                                  [-35.181, 12.952],
                                  [31.99, -188.721],
                                  [139.336, -233.161],
                                ],
                                c: !0,
                              },
                            ],
                          },
                        ],
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "st",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 3 },
                      o: { a: 0, k: 100, ix: 4 },
                      w: { a: 0, k: 4.033, ix: 5 },
                      lc: 1,
                      lj: 1,
                      ml: 10,
                      bm: 0,
                      nm: "Trazo 1",
                      mn: "ADBE Vector Graphic - Stroke",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: {
                        a: 0,
                        k: [
                          0.788235294117647, 0.8588235294117647,
                          0.6862745098039216, 1,
                        ],
                        ix: 4,
                      },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [252.252, 260.702], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [92.871, 100], ix: 3 },
                      r: { a: 0, k: 0, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 3,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
            {
              ddd: 0,
              ind: 58,
              ty: 4,
              nm: "sombra 3",
              sr: 1,
              ks: {
                o: { a: 0, k: 100, ix: 11 },
                r: { a: 0, k: 0, ix: 10 },
                p: { a: 0, k: [493.828, 732, 0], ix: 2, l: 2 },
                a: { a: 0, k: [341.446, 46.236, 0], ix: 1, l: 2 },
                s: {
                  a: 1,
                  k: [
                    {
                      i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
                      o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
                      t: 15,
                      s: [106, 100, 100],
                    },
                    {
                      i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
                      o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
                      t: 20,
                      s: [106, 92, 100],
                    },
                    {
                      i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
                      o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
                      t: 27,
                      s: [106, 92, 100],
                    },
                    {
                      i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
                      o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
                      t: 33,
                      s: [106, 84, 100],
                    },
                    {
                      i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
                      o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
                      t: 79,
                      s: [106, 84, 100],
                    },
                    {
                      i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
                      o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
                      t: 86,
                      s: [106, 92, 100],
                    },
                    {
                      i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] },
                      o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] },
                      t: 91,
                      s: [106, 92, 100],
                    },
                    { t: 96, s: [106, 100, 100] },
                  ],
                  ix: 6,
                  l: 2,
                },
              },
              ao: 0,
              shapes: [
                {
                  ty: "gr",
                  it: [
                    {
                      ind: 0,
                      ty: "sh",
                      ix: 1,
                      ks: {
                        a: 1,
                        k: [
                          {
                            i: { x: 0.833, y: 0.833 },
                            o: { x: 0.167, y: 0.167 },
                            t: 15,
                            s: [
                              {
                                i: [
                                  [-0.349, -23.884],
                                  [188.244, -2.742],
                                  [0.348, 23.881],
                                  [-188.246, 2.742],
                                ],
                                o: [
                                  [0.348, 23.881],
                                  [-188.246, 2.743],
                                  [-0.348, -23.883],
                                  [188.245, -2.744],
                                ],
                                v: [
                                  [340.848, -4.965],
                                  [0.631, 43.243],
                                  [-340.847, 4.968],
                                  [-0.629, -43.242],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.833, y: 0.833 },
                            o: { x: 0.167, y: 0.167 },
                            t: 20,
                            s: [
                              {
                                i: [
                                  [-0.349, -23.884],
                                  [188.244, -2.742],
                                  [0.348, 23.881],
                                  [-188.246, 2.742],
                                ],
                                o: [
                                  [0.348, 23.881],
                                  [-188.246, 2.743],
                                  [-0.348, -23.883],
                                  [188.245, -2.744],
                                ],
                                v: [
                                  [340.938, 6.816],
                                  [0.721, 55.024],
                                  [-356.442, 15.749],
                                  [-0.539, -31.461],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.833, y: 0.833 },
                            o: { x: 0.167, y: 0.167 },
                            t: 27,
                            s: [
                              {
                                i: [
                                  [-0.349, -23.884],
                                  [188.244, -2.742],
                                  [0.348, 23.881],
                                  [-188.246, 2.742],
                                ],
                                o: [
                                  [0.348, 23.881],
                                  [-188.246, 2.743],
                                  [-0.348, -23.883],
                                  [188.245, -2.744],
                                ],
                                v: [
                                  [340.938, 6.816],
                                  [0.721, 55.024],
                                  [-356.442, 15.749],
                                  [-0.539, -31.461],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.833, y: 0.833 },
                            o: { x: 0.167, y: 0.167 },
                            t: 33,
                            s: [
                              {
                                i: [
                                  [-0.349, -23.884],
                                  [188.244, -2.742],
                                  [0.348, 23.881],
                                  [-188.246, 2.742],
                                ],
                                o: [
                                  [0.348, 23.881],
                                  [-188.246, 2.743],
                                  [-0.348, -23.883],
                                  [188.245, -2.744],
                                ],
                                v: [
                                  [353.162, 13.7],
                                  [0.765, 60.759],
                                  [-356.398, 21.484],
                                  [-0.495, -25.726],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.833, y: 0.833 },
                            o: { x: 0.167, y: 0.167 },
                            t: 79,
                            s: [
                              {
                                i: [
                                  [-0.349, -23.884],
                                  [188.244, -2.742],
                                  [0.348, 23.881],
                                  [-188.246, 2.742],
                                ],
                                o: [
                                  [0.348, 23.881],
                                  [-188.246, 2.743],
                                  [-0.348, -23.883],
                                  [188.245, -2.744],
                                ],
                                v: [
                                  [353.162, 13.7],
                                  [0.765, 60.759],
                                  [-356.398, 21.484],
                                  [-0.495, -25.726],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.833, y: 0.833 },
                            o: { x: 0.167, y: 0.167 },
                            t: 86,
                            s: [
                              {
                                i: [
                                  [-0.349, -23.884],
                                  [188.244, -2.742],
                                  [0.348, 23.881],
                                  [-188.246, 2.742],
                                ],
                                o: [
                                  [0.348, 23.881],
                                  [-188.246, 2.743],
                                  [-0.348, -23.883],
                                  [188.245, -2.744],
                                ],
                                v: [
                                  [353.161, 13.7],
                                  [0.765, 60.759],
                                  [-339.797, 21.587],
                                  [-0.495, -25.726],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            i: { x: 0.833, y: 0.833 },
                            o: { x: 0.167, y: 0.167 },
                            t: 91,
                            s: [
                              {
                                i: [
                                  [-0.349, -23.884],
                                  [188.244, -2.742],
                                  [0.348, 23.881],
                                  [-188.246, 2.742],
                                ],
                                o: [
                                  [0.348, 23.881],
                                  [-188.246, 2.743],
                                  [-0.348, -23.883],
                                  [188.245, -2.744],
                                ],
                                v: [
                                  [353.161, 13.7],
                                  [0.765, 60.759],
                                  [-339.797, 21.587],
                                  [-0.495, -25.726],
                                ],
                                c: !0,
                              },
                            ],
                          },
                          {
                            t: 96,
                            s: [
                              {
                                i: [
                                  [-0.349, -23.884],
                                  [188.244, -2.742],
                                  [0.348, 23.881],
                                  [-188.246, 2.742],
                                ],
                                o: [
                                  [0.348, 23.881],
                                  [-188.246, 2.743],
                                  [-0.348, -23.883],
                                  [188.245, -2.744],
                                ],
                                v: [
                                  [340.848, -4.965],
                                  [0.631, 43.243],
                                  [-340.847, 4.968],
                                  [-0.629, -43.242],
                                ],
                                c: !0,
                              },
                            ],
                          },
                        ],
                        ix: 2,
                      },
                      nm: "Trazado 1",
                      mn: "ADBE Vector Shape - Group",
                      hd: !1,
                    },
                    {
                      ty: "fl",
                      c: { a: 0, k: [1, 0.2823529411764706, 0, 1], ix: 4 },
                      o: { a: 0, k: 100, ix: 5 },
                      r: 1,
                      bm: 0,
                      nm: "Relleno 1",
                      mn: "ADBE Vector Graphic - Fill",
                      hd: !1,
                    },
                    {
                      ty: "tr",
                      p: { a: 0, k: [368.844, 48.274], ix: 2 },
                      a: { a: 0, k: [0, 0], ix: 1 },
                      s: { a: 0, k: [107.979, 82.957], ix: 3 },
                      r: { a: 0, k: 0.518, ix: 6 },
                      o: { a: 0, k: 100, ix: 7 },
                      sk: { a: 0, k: 0, ix: 4 },
                      sa: { a: 0, k: 0, ix: 5 },
                      nm: "Transformar",
                    },
                  ],
                  nm: "Grupo 1",
                  np: 2,
                  cix: 2,
                  bm: 0,
                  ix: 1,
                  mn: "ADBE Vector Group",
                  hd: !1,
                },
              ],
              ip: 0,
              op: 128,
              st: 0,
              bm: 0,
            },
          ],
          markers: [
            { tm: 15, cm: "5", dr: 0 },
            { tm: 18, cm: "1", dr: 0 },
            { tm: 24, cm: "3", dr: 0 },
            { tm: 79, cm: "7", dr: 0 },
            { tm: 88, cm: "8", dr: 0 },
            { tm: 91, cm: "2", dr: 0 },
            { tm: 96, cm: "4", dr: 0 },
          ],
        };
      },
      {},
    ],
    B3Ay: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.startLottieAnimation = t);
        var e = n(require("../../assets/images/bananas.json"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function t() {
          bodymovin.loadAnimation({
            container: document.getElementById("icon-container"),
            animationData: e.default,
            renderer: "svg",
            loop: !0,
            autoplay: !0,
            name: "Bananas Animation",
          });
        }
      },
      { "../../assets/images/bananas.json": "HTHp" },
    ],
    TNS6: [
      function (require, module, exports) {
        "use strict";
        function t(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return t;
        }
        function e(t, e) {
          (t.prototype = Object.create(e.prototype)),
            (t.prototype.constructor = t),
            (t.__proto__ = e);
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.wrapYoyo =
            exports.wrap =
            exports.unitize =
            exports.toArray =
            exports.splitColor =
            exports.snap =
            exports.shuffle =
            exports.random =
            exports.pipe =
            exports.normalize =
            exports.mapRange =
            exports.interpolate =
            exports.gsap =
            exports.getUnit =
            exports.distribute =
            exports.default =
            exports.clamp =
            exports._ticker =
            exports._sortPropTweensByPriority =
            exports._setDefaults =
            exports._roundModifier =
            exports._round =
            exports._replaceRandom =
            exports._renderComplexString =
            exports._removeLinkedListItem =
            exports._relExp =
            exports._plugins =
            exports._numWithUnitExp =
            exports._numExp =
            exports._missingPlugin =
            exports._isUndefined =
            exports._isString =
            exports._getSetter =
            exports._getProperty =
            exports._getCache =
            exports._forEachName =
            exports._config =
            exports._colorStringFilter =
            exports._checkPlugin =
            exports.TweenMax =
            exports.TweenLite =
            exports.Tween =
            exports.TimelineMax =
            exports.TimelineLite =
            exports.Timeline =
            exports.Strong =
            exports.SteppedEase =
            exports.Sine =
            exports.Quint =
            exports.Quart =
            exports.Quad =
            exports.PropTween =
            exports.Power4 =
            exports.Power3 =
            exports.Power2 =
            exports.Power1 =
            exports.Power0 =
            exports.Linear =
            exports.GSCache =
            exports.Expo =
            exports.Elastic =
            exports.Cubic =
            exports.Circ =
            exports.Bounce =
            exports.Back =
            exports.Animation =
              void 0);
        var r,
          i,
          n,
          s,
          o,
          a,
          u,
          h,
          _ = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: { lineHeight: "" },
          },
          p = { duration: 0.5, overwrite: !1, delay: 0 },
          l = 1e8,
          f = 1 / l,
          c = 2 * Math.PI,
          d = c / 4,
          m = 0,
          g = Math.sqrt,
          v = Math.cos,
          x = Math.sin,
          y = function (t) {
            return "string" == typeof t;
          },
          T = function (t) {
            return "function" == typeof t;
          },
          w = function (t) {
            return "number" == typeof t;
          },
          b = function (t) {
            return void 0 === t;
          },
          k = function (t) {
            return "object" == typeof t;
          },
          D = function (t) {
            return !1 !== t;
          },
          C = function () {
            return "undefined" != typeof window;
          },
          S = function (t) {
            return T(t) || y(t);
          },
          M = Array.isArray,
          P = /(?:-?\.?\d|\.)+/gi,
          A = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g,
          R = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
          E = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi,
          z = /\(([^()]+)\)/i,
          O = /[+-]=-?[\.\d]+/,
          L = /[#\-+.]*\b[a-z\d-=+%.]+/gi,
          F = {},
          U = {},
          I = function (t) {
            return (U = _t(t, F)) && hr;
          },
          B = function (t, e) {
            return console.warn(
              "Invalid property",
              t,
              "set to",
              e,
              "Missing plugin? gsap.registerPlugin()"
            );
          },
          N = function (t, e) {
            return !e && console.warn(t);
          },
          Q = function (t, e) {
            return (t && (F[t] = e) && U && (U[t] = e)) || F;
          },
          q = function () {
            return 0;
          },
          j = {},
          G = [],
          V = {},
          W = {},
          Y = {},
          H = 30,
          J = [],
          K = "",
          X = function (t) {
            var e,
              r,
              i = t[0];
            if ((k(i) || T(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
              for (r = J.length; r-- && !J[r].targetTest(i); );
              e = J[r];
            }
            for (r = t.length; r--; )
              (t[r] && (t[r]._gsap || (t[r]._gsap = new Re(t[r], e)))) ||
                t.splice(r, 1);
            return t;
          },
          Z = function (t) {
            return t._gsap || X(jt(t))[0]._gsap;
          },
          $ = function (t, e) {
            var r = t[e];
            return T(r) ? t[e]() : (b(r) && t.getAttribute(e)) || r;
          },
          tt = function (t, e) {
            return (t = t.split(",")).forEach(e) || t;
          },
          et = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0;
          },
          rt = function (t, e) {
            for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
            return i < r;
          },
          it = function (t, e, r) {
            var i,
              n = w(t[1]),
              s = (n ? 2 : 1) + (e < 2 ? 0 : 1),
              o = t[s];
            if ((n && (o.duration = t[1]), (o.parent = r), e)) {
              for (i = o; r && !("immediateRender" in i); )
                (i = r.vars.defaults || {}),
                  (r = D(r.vars.inherit) && r.parent);
              (o.immediateRender = D(i.immediateRender)),
                e < 2 ? (o.runBackwards = 1) : (o.startAt = t[s - 1]);
            }
            return o;
          },
          nt = function () {
            var t,
              e,
              r = G.length,
              i = G.slice(0);
            for (V = {}, G.length = 0, t = 0; t < r; t++)
              (e = i[t]) &&
                e._lazy &&
                (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
          },
          st = function (t, e, r, i) {
            G.length && nt(), t.render(e, r, i), G.length && nt();
          },
          ot = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(L).length < 2 ? e : t;
          },
          at = function (t) {
            return t;
          },
          ut = function (t, e) {
            for (var r in e) r in t || (t[r] = e[r]);
            return t;
          },
          ht = function (t, e) {
            for (var r in e)
              r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
          },
          _t = function (t, e) {
            for (var r in e) t[r] = e[r];
            return t;
          },
          pt = function t(e, r) {
            for (var i in r)
              e[i] = k(r[i]) ? t(e[i] || (e[i] = {}), r[i]) : r[i];
            return e;
          },
          lt = function (t, e) {
            var r,
              i = {};
            for (r in t) r in e || (i[r] = t[r]);
            return i;
          },
          ft = function (t) {
            var e = t.parent || r,
              i = t.keyframes ? ht : ut;
            if (D(t.inherit))
              for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
            return t;
          },
          ct = function (t, e) {
            for (
              var r = t.length, i = r === e.length;
              i && r-- && t[r] === e[r];

            );
            return r < 0;
          },
          dt = function (t, e, r, i, n) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var s,
              o = t[i];
            if (n) for (s = e[n]; o && o[n] > s; ) o = o._prev;
            return (
              o
                ? ((e._next = o._next), (o._next = e))
                : ((e._next = t[r]), (t[r] = e)),
              e._next ? (e._next._prev = e) : (t[i] = e),
              (e._prev = o),
              (e.parent = e._dp = t),
              e
            );
          },
          mt = function (t, e, r, i) {
            void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
            var n = e._prev,
              s = e._next;
            n ? (n._next = s) : t[r] === e && (t[r] = s),
              s ? (s._prev = n) : t[i] === e && (t[i] = n),
              (e._next = e._prev = e.parent = null);
          },
          gt = function (t, e) {
            !t.parent ||
              (e && !t.parent.autoRemoveChildren) ||
              t.parent.remove(t),
              (t._act = 0);
          },
          vt = function (t) {
            for (var e = t; e; ) (e._dirty = 1), (e = e.parent);
            return t;
          },
          xt = function (t) {
            for (var e = t.parent; e && e.parent; )
              (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          },
          yt = function t(e) {
            return !e || (e._ts && t(e.parent));
          },
          Tt = function (t) {
            return t._repeat
              ? wt(t._tTime, (t = t.duration() + t._rDelay)) * t
              : 0;
          },
          wt = function (t, e) {
            return (t /= e) && ~~t === t ? ~~t - 1 : ~~t;
          },
          bt = function (t, e) {
            return (
              (t - e._start) * e._ts +
              (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
            );
          },
          kt = function (t) {
            return (t._end = et(
              t._start + (t._tDur / Math.abs(t._ts || t._rts || f) || 0)
            ));
          },
          Dt = function (t, e) {
            var r = t._dp;
            return (
              r &&
                r.smoothChildTiming &&
                t._ts &&
                ((t._start = et(
                  t._dp._time -
                    (t._ts > 0
                      ? e / t._ts
                      : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
                )),
                kt(t),
                r._dirty || vt(r)),
              t
            );
          },
          Ct = function (t, e) {
            var r;
            if (
              ((e._time || (e._initted && !e._dur)) &&
                ((r = bt(t.rawTime(), e)),
                (!e._dur || Ut(0, e.totalDuration(), r) - e._tTime > f) &&
                  e.render(r, !0)),
              vt(t)._dp && t._initted && t._time >= t._dur && t._ts)
            ) {
              if (t._dur < t.duration())
                for (r = t; r._dp; )
                  r.rawTime() >= 0 && r.totalTime(r._tTime), (r = r._dp);
              t._zTime = -f;
            }
          },
          St = function (t, e, r, i) {
            return (
              e.parent && gt(e),
              (e._start = et(r + e._delay)),
              (e._end = et(
                e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
              )),
              dt(t, e, "_first", "_last", t._sort ? "_start" : 0),
              (t._recent = e),
              i || Ct(t, e),
              t
            );
          },
          Mt = function (t, e) {
            return (
              (F.ScrollTrigger || B("scrollTrigger", e)) &&
              F.ScrollTrigger.create({smooth: false})
            );
          },
          Pt = function (t, e, r, i) {
            return (
              Be(t, e),
              t._initted
                ? !r &&
                  t._pt &&
                  ((t._dur && !1 !== t.vars.lazy) ||
                    (!t._dur && t.vars.lazy)) &&
                  a !== ge.frame
                  ? (G.push(t), (t._lazy = [e, i]), 0)
                  : void 0
                : 1
            );
          },
          At = function (t, e, r, i) {
            var n,
              s,
              o = t.ratio,
              a =
                e < 0 ||
                (!e && o && !t._start && t._zTime > f && !t._dp._lock) ||
                t._ts < 0 ||
                t._dp._ts < 0
                  ? 0
                  : 1,
              u = t._rDelay,
              h = 0;
            if (
              (u &&
                t._repeat &&
                ((h = Ut(0, t._tDur, e)),
                wt(h, u) !== (s = wt(t._tTime, u)) &&
                  ((o = 1 - a),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              t._initted || !Pt(t, e, i, r))
            )
              if (a !== o || i || t._zTime === f || (!e && t._zTime)) {
                for (
                  s = t._zTime,
                    t._zTime = e || (r ? f : 0),
                    r || (r = e && !s),
                    t.ratio = a,
                    t._from && (a = 1 - a),
                    t._time = 0,
                    t._tTime = h,
                    r || se(t, "onStart"),
                    n = t._pt;
                  n;

                )
                  n.r(a, n.d), (n = n._next);
                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                  t._onUpdate && !r && se(t, "onUpdate"),
                  h && t._repeat && !r && t.parent && se(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === a &&
                    (a && gt(t, 1),
                    r ||
                      (se(t, a ? "onComplete" : "onReverseComplete", !0),
                      t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
          },
          Rt = function (t, e, r) {
            var i;
            if (r > e)
              for (i = t._first; i && i._start <= r; ) {
                if (!i._dur && "isPause" === i.data && i._start > e) return i;
                i = i._next;
              }
            else
              for (i = t._last; i && i._start >= r; ) {
                if (!i._dur && "isPause" === i.data && i._start < e) return i;
                i = i._prev;
              }
          },
          Et = function (t, e, r) {
            var i = t._repeat,
              n = et(e) || 0;
            return (
              (t._dur = n),
              (t._tDur = i
                ? i < 0
                  ? 1e10
                  : et(n * (i + 1) + t._rDelay * i)
                : n),
              t._time > n &&
                ((t._time = n), (t._tTime = Math.min(t._tTime, t._tDur))),
              !r && vt(t.parent),
              t.parent && kt(t),
              t
            );
          },
          zt = function (t) {
            return t instanceof ze ? vt(t) : Et(t, t._dur);
          },
          Ot = { _start: 0, endTime: q },
          Lt = function t(e, r) {
            var i,
              n,
              s = e.labels,
              o = e._recent || Ot,
              a = e.duration() >= l ? o.endTime(!1) : e._dur;
            return y(r) && (isNaN(r) || r in s)
              ? "<" === (i = r.charAt(0)) || ">" === i
                ? ("<" === i ? o._start : o.endTime(o._repeat >= 0)) +
                  (parseFloat(r.substr(1)) || 0)
                : (i = r.indexOf("=")) < 0
                ? (r in s || (s[r] = a), s[r])
                : ((n = +(r.charAt(i - 1) + r.substr(i + 1))),
                  i > 1 ? t(e, r.substr(0, i - 1)) + n : a + n)
              : null == r
              ? a
              : +r;
          },
          Ft = function (t, e) {
            return t || 0 === t ? e(t) : e;
          },
          Ut = function (t, e, r) {
            return r < t ? t : r > e ? e : r;
          },
          It = function (t) {
            return (t + "").substr((parseFloat(t) + "").length);
          },
          Bt = function (t, e, r) {
            return Ft(r, function (r) {
              return Ut(t, e, r);
            });
          },
          Nt = [].slice,
          Qt = function (t, e) {
            return (
              t &&
              k(t) &&
              "length" in t &&
              ((!e && !t.length) || (t.length - 1 in t && k(t[0]))) &&
              !t.nodeType &&
              t !== i
            );
          },
          qt = function (t, e, r) {
            return (
              void 0 === r && (r = []),
              t.forEach(function (t) {
                var i;
                return (y(t) && !e) || Qt(t, 1)
                  ? (i = r).push.apply(i, jt(t))
                  : r.push(t);
              }) || r
            );
          },
          jt = function (t, e) {
            return !y(t) || e || (!n && ve())
              ? M(t)
                ? qt(t, e)
                : Qt(t)
                ? Nt.call(t, 0)
                : t
                ? [t]
                : []
              : Nt.call(s.querySelectorAll(t), 0);
          },
          Gt = function (t) {
            return t.sort(function () {
              return 0.5 - Math.random();
            });
          },
          Vt = function (t) {
            if (T(t)) return t;
            var e = k(t) ? t : { each: t },
              r = Ce(e.ease),
              i = e.from || 0,
              n = parseFloat(e.base) || 0,
              s = {},
              o = i > 0 && i < 1,
              a = isNaN(i) || o,
              u = e.axis,
              h = i,
              _ = i;
            return (
              y(i)
                ? (h = _ = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
                : !o && a && ((h = i[0]), (_ = i[1])),
              function (t, o, p) {
                var f,
                  c,
                  d,
                  m,
                  v,
                  x,
                  y,
                  T,
                  w,
                  b = (p || e).length,
                  k = s[b];
                if (!k) {
                  if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, l])[1])) {
                    for (
                      y = -l;
                      y < (y = p[w++].getBoundingClientRect().left) && w < b;

                    );
                    w--;
                  }
                  for (
                    k = s[b] = [],
                      f = a ? Math.min(w, b) * h - 0.5 : i % w,
                      c = a ? (b * _) / w - 0.5 : (i / w) | 0,
                      y = 0,
                      T = l,
                      x = 0;
                    x < b;
                    x++
                  )
                    (d = (x % w) - f),
                      (m = c - ((x / w) | 0)),
                      (k[x] = v =
                        u ? Math.abs("y" === u ? m : d) : g(d * d + m * m)),
                      v > y && (y = v),
                      v < T && (T = v);
                  "random" === i && Gt(k),
                    (k.max = y - T),
                    (k.min = T),
                    (k.v = b =
                      (parseFloat(e.amount) ||
                        parseFloat(e.each) *
                          (w > b
                            ? b - 1
                            : u
                            ? "y" === u
                              ? b / w
                              : w
                            : Math.max(w, b / w)) ||
                        0) * ("edges" === i ? -1 : 1)),
                    (k.b = b < 0 ? n - b : n),
                    (k.u = It(e.amount || e.each) || 0),
                    (r = r && b < 0 ? ke(r) : r);
                }
                return (
                  (b = (k[t] - k.min) / k.max || 0),
                  et(k.b + (r ? r(b) : b) * k.v) + k.u
                );
              }
            );
          },
          Wt = function (t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function (r) {
              return (
                Math.floor(Math.round(parseFloat(r) / t) * t * e) / e +
                (w(r) ? 0 : It(r))
              );
            };
          },
          Yt = function (t, e) {
            var r,
              i,
              n = M(t);
            return (
              !n &&
                k(t) &&
                ((r = n = t.radius || l),
                t.values
                  ? ((t = jt(t.values)), (i = !w(t[0])) && (r *= r))
                  : (t = Wt(t.increment))),
              Ft(
                e,
                n
                  ? T(t)
                    ? function (e) {
                        return (i = t(e)), Math.abs(i - e) <= r ? i : e;
                      }
                    : function (e) {
                        for (
                          var n,
                            s,
                            o = parseFloat(i ? e.x : e),
                            a = parseFloat(i ? e.y : 0),
                            u = l,
                            h = 0,
                            _ = t.length;
                          _--;

                        )
                          (n = i
                            ? (n = t[_].x - o) * n + (s = t[_].y - a) * s
                            : Math.abs(t[_] - o)) < u && ((u = n), (h = _));
                        return (
                          (h = !r || u <= r ? t[h] : e),
                          i || h === e || w(e) ? h : h + It(e)
                        );
                      }
                  : Wt(t)
              )
            );
          },
          Ht = function (t, e, r, i) {
            return Ft(M(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
              return M(t)
                ? t[~~(Math.random() * t.length)]
                : (r = r || 1e-5) &&
                    (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
                    Math.floor(
                      Math.round((t + Math.random() * (e - t)) / r) * r * i
                    ) / i;
            });
          },
          Jt = function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            return function (t) {
              return e.reduce(function (t, e) {
                return e(t);
              }, t);
            };
          },
          Kt = function (t, e) {
            return function (r) {
              return t(parseFloat(r)) + (e || It(r));
            };
          },
          Xt = function (t, e, r) {
            return re(t, e, 0, 1, r);
          },
          Zt = function (t, e, r) {
            return Ft(r, function (r) {
              return t[~~e(r)];
            });
          },
          $t = function t(e, r, i) {
            var n = r - e;
            return M(e)
              ? Zt(e, t(0, e.length), r)
              : Ft(i, function (t) {
                  return ((n + ((t - e) % n)) % n) + e;
                });
          },
          te = function t(e, r, i) {
            var n = r - e,
              s = 2 * n;
            return M(e)
              ? Zt(e, t(0, e.length - 1), r)
              : Ft(i, function (t) {
                  return (
                    e + ((t = (s + ((t - e) % s)) % s || 0) > n ? s - t : t)
                  );
                });
          },
          ee = function (t) {
            for (
              var e, r, i, n, s = 0, o = "";
              ~(e = t.indexOf("random(", s));

            )
              (i = t.indexOf(")", e)),
                (n = "[" === t.charAt(e + 7)),
                (r = t.substr(e + 7, i - e - 7).match(n ? L : P)),
                (o +=
                  t.substr(s, e - s) + Ht(n ? r : +r[0], +r[1], +r[2] || 1e-5)),
                (s = i + 1);
            return o + t.substr(s, t.length - s);
          },
          re = function (t, e, r, i, n) {
            var s = e - t,
              o = i - r;
            return Ft(n, function (e) {
              return r + (((e - t) / s) * o || 0);
            });
          },
          ie = function t(e, r, i, n) {
            var s = isNaN(e + r)
              ? 0
              : function (t) {
                  return (1 - t) * e + t * r;
                };
            if (!s) {
              var o,
                a,
                u,
                h,
                _,
                p = y(e),
                l = {};
              if ((!0 === i && (n = 1) && (i = null), p))
                (e = { p: e }), (r = { p: r });
              else if (M(e) && !M(r)) {
                for (u = [], h = e.length, _ = h - 2, a = 1; a < h; a++)
                  u.push(t(e[a - 1], e[a]));
                h--,
                  (s = function (t) {
                    t *= h;
                    var e = Math.min(_, ~~t);
                    return u[e](t - e);
                  }),
                  (i = r);
              } else n || (e = _t(M(e) ? [] : {}, e));
              if (!u) {
                for (o in r) Fe.call(l, e, o, "get", r[o]);
                s = function (t) {
                  return $e(t, l) || (p ? e.p : e);
                };
              }
            }
            return Ft(i, s);
          },
          ne = function (t, e, r) {
            var i,
              n,
              s,
              o = t.labels,
              a = l;
            for (i in o)
              (n = o[i] - e) < 0 == !!r &&
                n &&
                a > (n = Math.abs(n)) &&
                ((s = i), (a = n));
            return s;
          },
          se = function (t, e, r) {
            var i,
              n,
              s = t.vars,
              o = s[e];
            if (o)
              return (
                (i = s[e + "Params"]),
                (n = s.callbackScope || t),
                r && G.length && nt(),
                i ? o.apply(n, i) : o.call(n)
              );
          },
          oe = function (t) {
            return gt(t), t.progress() < 1 && se(t, "onInterrupt"), t;
          },
          ae = function (t) {
            var e = (t = (!t.name && t.default) || t).name,
              r = T(t),
              i =
                e && !r && t.init
                  ? function () {
                      this._props = [];
                    }
                  : t,
              n = {
                init: q,
                render: $e,
                add: Fe,
                kill: er,
                modifier: tr,
                rawVars: 0,
              },
              s = {
                targetTest: 0,
                get: 0,
                getSetter: Je,
                aliases: {},
                register: 0,
              };
            if ((ve(), t !== i)) {
              if (W[e]) return;
              ut(i, ut(lt(t, n), s)),
                _t(i.prototype, _t(n, lt(t, s))),
                (W[(i.prop = e)] = i),
                t.targetTest && (J.push(i), (j[e] = 1)),
                (e =
                  ("css" === e
                    ? "CSS"
                    : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
            }
            Q(e, i), t.register && t.register(hr, i, nr);
          },
          ue = 255,
          he = {
            aqua: [0, ue, ue],
            lime: [0, ue, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, ue],
            navy: [0, 0, 128],
            white: [ue, ue, ue],
            olive: [128, 128, 0],
            yellow: [ue, ue, 0],
            orange: [ue, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [ue, 0, 0],
            pink: [ue, 192, 203],
            cyan: [0, ue, ue],
            transparent: [ue, ue, ue, 0],
          },
          _e = function (t, e, r) {
            return (
              ((6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
                ? e + (r - e) * t * 6
                : t < 0.5
                ? r
                : 3 * t < 2
                ? e + (r - e) * (2 / 3 - t) * 6
                : e) *
                ue +
                0.5) |
              0
            );
          },
          pe = function (t, e, r) {
            var i,
              n,
              s,
              o,
              a,
              u,
              h,
              _,
              p,
              l,
              f = t ? (w(t) ? [t >> 16, (t >> 8) & ue, t & ue] : 0) : he.black;
            if (!f) {
              if (
                ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), he[t])
              )
                f = he[t];
              else if ("#" === t.charAt(0))
                4 === t.length &&
                  ((i = t.charAt(1)),
                  (n = t.charAt(2)),
                  (s = t.charAt(3)),
                  (t = "#" + i + i + n + n + s + s)),
                  (f = [
                    (t = parseInt(t.substr(1), 16)) >> 16,
                    (t >> 8) & ue,
                    t & ue,
                  ]);
              else if ("hsl" === t.substr(0, 3))
                if (((f = l = t.match(P)), e)) {
                  if (~t.indexOf("="))
                    return (f = t.match(A)), r && f.length < 4 && (f[3] = 1), f;
                } else
                  (o = (+f[0] % 360) / 360),
                    (a = +f[1] / 100),
                    (i =
                      2 * (u = +f[2] / 100) -
                      (n = u <= 0.5 ? u * (a + 1) : u + a - u * a)),
                    f.length > 3 && (f[3] *= 1),
                    (f[0] = _e(o + 1 / 3, i, n)),
                    (f[1] = _e(o, i, n)),
                    (f[2] = _e(o - 1 / 3, i, n));
              else f = t.match(P) || he.transparent;
              f = f.map(Number);
            }
            return (
              e &&
                !l &&
                ((i = f[0] / ue),
                (n = f[1] / ue),
                (s = f[2] / ue),
                (u = ((h = Math.max(i, n, s)) + (_ = Math.min(i, n, s))) / 2),
                h === _
                  ? (o = a = 0)
                  : ((p = h - _),
                    (a = u > 0.5 ? p / (2 - h - _) : p / (h + _)),
                    (o =
                      h === i
                        ? (n - s) / p + (n < s ? 6 : 0)
                        : h === n
                        ? (s - i) / p + 2
                        : (i - n) / p + 4),
                    (o *= 60)),
                (f[0] = ~~(o + 0.5)),
                (f[1] = ~~(100 * a + 0.5)),
                (f[2] = ~~(100 * u + 0.5))),
              r && f.length < 4 && (f[3] = 1),
              f
            );
          },
          le = function (t) {
            var e = [],
              r = [],
              i = -1;
            return (
              t.split(ce).forEach(function (t) {
                var n = t.match(R) || [];
                e.push.apply(e, n), r.push((i += n.length + 1));
              }),
              (e.c = r),
              e
            );
          },
          fe = function (t, e, r) {
            var i,
              n,
              s,
              o,
              a = "",
              u = (t + a).match(ce),
              h = e ? "hsla(" : "rgba(",
              _ = 0;
            if (!u) return t;
            if (
              ((u = u.map(function (t) {
                return (
                  (t = pe(t, e, 1)) &&
                  h +
                    (e
                      ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3]
                      : t.join(",")) +
                    ")"
                );
              })),
              r && ((s = le(t)), (i = r.c).join(a) !== s.c.join(a)))
            )
              for (o = (n = t.replace(ce, "1").split(R)).length - 1; _ < o; _++)
                a +=
                  n[_] +
                  (~i.indexOf(_)
                    ? u.shift() || h + "0,0,0,0)"
                    : (s.length ? s : u.length ? u : r).shift());
            if (!n)
              for (o = (n = t.split(ce)).length - 1; _ < o; _++)
                a += n[_] + u[_];
            return a + n[o];
          },
          ce = (function () {
            var t,
              e =
                "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (t in he) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi");
          })(),
          de = /hsl[a]?\(/,
          me = function (t) {
            var e,
              r = t.join(" ");
            if (((ce.lastIndex = 0), ce.test(r)))
              return (
                (e = de.test(r)),
                (t[1] = fe(t[1], e)),
                (t[0] = fe(t[0], e, le(t[1]))),
                !0
              );
          },
          ge = (function () {
            var t,
              e,
              r,
              a,
              u = Date.now,
              _ = 500,
              p = 33,
              l = u(),
              c = l,
              d = 1 / 240,
              m = d,
              g = [],
              v = function r(i) {
                var n,
                  s,
                  o = u() - c,
                  h = !0 === i;
                o > _ && (l += o - p),
                  (c += o),
                  (a.time = (c - l) / 1e3),
                  ((n = a.time - m) > 0 || h) &&
                    (a.frame++, (m += n + (n >= d ? 0.004 : d - n)), (s = 1)),
                  h || (t = e(r)),
                  s &&
                    g.forEach(function (t) {
                      return t(a.time, o, a.frame, i);
                    });
              };
            return (a = {
              time: 0,
              frame: 0,
              tick: function () {
                v(!0);
              },
              wake: function () {
                o &&
                  (!n &&
                    C() &&
                    ((i = n = window),
                    (s = i.document || {}),
                    (F.gsap = hr),
                    (i.gsapVersions || (i.gsapVersions = [])).push(hr.version),
                    I(U || i.GreenSockGlobals || (!i.gsap && i) || {}),
                    (r = i.requestAnimationFrame)),
                  t && a.sleep(),
                  (e =
                    r ||
                    function (t) {
                      return setTimeout(t, (1e3 * (m - a.time) + 1) | 0);
                    }),
                  (h = 1),
                  v(2));
              },
              sleep: function () {
                (r ? i.cancelAnimationFrame : clearTimeout)(t),
                  (h = 0),
                  (e = q);
              },
              lagSmoothing: function (t, e) {
                (_ = t || 1 / f), (p = Math.min(e, _, 0));
              },
              fps: function (t) {
                (d = 1 / (t || 240)), (m = a.time + d);
              },
              add: function (t) {
                g.indexOf(t) < 0 && g.push(t), ve();
              },
              remove: function (t) {
                var e;
                ~(e = g.indexOf(t)) && g.splice(e, 1);
              },
              _listeners: g,
            });
          })(),
          ve = function () {
            return !h && ge.wake();
          },
          xe = {},
          ye = /^[\d.\-M][\d.\-,\s]/,
          Te = /["']/g,
          we = function (t) {
            for (
              var e,
                r,
                i,
                n = {},
                s = t.substr(1, t.length - 3).split(":"),
                o = s[0],
                a = 1,
                u = s.length;
              a < u;
              a++
            )
              (r = s[a]),
                (e = a !== u - 1 ? r.lastIndexOf(",") : r.length),
                (i = r.substr(0, e)),
                (n[o] = isNaN(i) ? i.replace(Te, "").trim() : +i),
                (o = r.substr(e + 1).trim());
            return n;
          },
          be = function (t) {
            var e = (t + "").split("("),
              r = xe[e[0]];
            return r && e.length > 1 && r.config
              ? r.config.apply(
                  null,
                  ~t.indexOf("{") ? [we(e[1])] : z.exec(t)[1].split(",").map(ot)
                )
              : xe._CE && ye.test(t)
              ? xe._CE("", t)
              : r;
          },
          ke = function (t) {
            return function (e) {
              return 1 - t(1 - e);
            };
          },
          De = function t(e, r) {
            for (var i, n = e._first; n; )
              n instanceof ze
                ? t(n, r)
                : !n.vars.yoyoEase ||
                  (n._yoyo && n._repeat) ||
                  n._yoyo === r ||
                  (n.timeline
                    ? t(n.timeline, r)
                    : ((i = n._ease),
                      (n._ease = n._yEase),
                      (n._yEase = i),
                      (n._yoyo = r))),
                (n = n._next);
          },
          Ce = function (t, e) {
            return (t && (T(t) ? t : xe[t] || be(t))) || e;
          },
          Se = function (t, e, r, i) {
            void 0 === r &&
              (r = function (t) {
                return 1 - e(1 - t);
              }),
              void 0 === i &&
                (i = function (t) {
                  return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
                });
            var n,
              s = { easeIn: e, easeOut: r, easeInOut: i };
            return (
              tt(t, function (t) {
                for (var e in ((xe[t] = F[t] = s),
                (xe[(n = t.toLowerCase())] = r),
                s))
                  xe[
                    n +
                      ("easeIn" === e
                        ? ".in"
                        : "easeOut" === e
                        ? ".out"
                        : ".inOut")
                  ] = xe[t + "." + e] = s[e];
              }),
              s
            );
          },
          Me = function (t) {
            return function (e) {
              return e < 0.5
                ? (1 - t(1 - 2 * e)) / 2
                : 0.5 + t(2 * (e - 0.5)) / 2;
            };
          },
          Pe = function t(e, r, i) {
            var n = r >= 1 ? r : 1,
              s = (i || (e ? 0.3 : 0.45)) / (r < 1 ? r : 1),
              o = (s / c) * (Math.asin(1 / n) || 0),
              a = function (t) {
                return 1 === t
                  ? 1
                  : n * Math.pow(2, -10 * t) * x((t - o) * s) + 1;
              },
              u =
                "out" === e
                  ? a
                  : "in" === e
                  ? function (t) {
                      return 1 - a(1 - t);
                    }
                  : Me(a);
            return (
              (s = c / s),
              (u.config = function (r, i) {
                return t(e, r, i);
              }),
              u
            );
          },
          Ae = function t(e, r) {
            void 0 === r && (r = 1.70158);
            var i = function (t) {
                return t ? --t * t * ((r + 1) * t + r) + 1 : 0;
              },
              n =
                "out" === e
                  ? i
                  : "in" === e
                  ? function (t) {
                      return 1 - i(1 - t);
                    }
                  : Me(i);
            return (
              (n.config = function (r) {
                return t(e, r);
              }),
              n
            );
          };
        (exports._ticker = ge),
          (exports._colorStringFilter = me),
          (exports.splitColor = pe),
          (exports.interpolate = ie),
          (exports.mapRange = re),
          (exports._replaceRandom = ee),
          (exports.wrapYoyo = te),
          (exports.wrap = $t),
          (exports.normalize = Xt),
          (exports.unitize = Kt),
          (exports.pipe = Jt),
          (exports.random = Ht),
          (exports.snap = Yt),
          (exports._roundModifier = Wt),
          (exports.distribute = Vt),
          (exports.shuffle = Gt),
          (exports.toArray = jt),
          (exports.clamp = Bt),
          (exports.getUnit = It),
          (exports._removeLinkedListItem = mt),
          (exports._setDefaults = ut),
          (exports._round = et),
          (exports._forEachName = tt),
          (exports._getProperty = $),
          (exports._getCache = Z),
          (exports._plugins = W),
          (exports._missingPlugin = B),
          (exports._relExp = O),
          (exports._numWithUnitExp = R),
          (exports._numExp = A),
          (exports._isUndefined = b),
          (exports._isString = y),
          (exports._config = _),
          tt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
            var r = e < 5 ? e + 1 : e;
            Se(
              t + ",Power" + (r - 1),
              e
                ? function (t) {
                    return Math.pow(t, r);
                  }
                : function (t) {
                    return t;
                  },
              function (t) {
                return 1 - Math.pow(1 - t, r);
              },
              function (t) {
                return t < 0.5
                  ? Math.pow(2 * t, r) / 2
                  : 1 - Math.pow(2 * (1 - t), r) / 2;
              }
            );
          }),
          (xe.Linear.easeNone = xe.none = xe.Linear.easeIn),
          Se("Elastic", Pe("in"), Pe("out"), Pe()),
          (function (t, e) {
            var r = 1 / e,
              i = function (i) {
                return i < r
                  ? t * i * i
                  : i < 0.7272727272727273
                  ? t * Math.pow(i - 1.5 / e, 2) + 0.75
                  : i < 0.9090909090909092
                  ? t * (i -= 2.25 / e) * i + 0.9375
                  : t * Math.pow(i - 2.625 / e, 2) + 0.984375;
              };
            Se(
              "Bounce",
              function (t) {
                return 1 - i(1 - t);
              },
              i
            );
          })(7.5625, 2.75),
          Se("Expo", function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0;
          }),
          Se("Circ", function (t) {
            return -(g(1 - t * t) - 1);
          }),
          Se("Sine", function (t) {
            return 1 === t ? 1 : 1 - v(t * d);
          }),
          Se("Back", Ae("in"), Ae("out"), Ae()),
          (xe.SteppedEase =
            xe.steps =
            F.SteppedEase =
              {
                config: function (t, e) {
                  void 0 === t && (t = 1);
                  var r = 1 / t,
                    i = t + (e ? 0 : 1),
                    n = e ? 1 : 0,
                    s = 1 - f;
                  return function (t) {
                    return (((i * Ut(0, s, t)) | 0) + n) * r;
                  };
                },
              }),
          (p.ease = xe["quad.out"]),
          tt(
            "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
            function (t) {
              return (K += t + "," + t + "Params,");
            }
          );
        var Re = function (t, e) {
          (this.id = m++),
            (t._gsap = this),
            (this.target = t),
            (this.harness = e),
            (this.get = e ? e.get : $),
            (this.set = e ? e.getSetter : Je);
        };
        exports.GSCache = Re;
        var Ee = (function () {
          function t(t, e) {
            var i = t.parent || r;
            (this.vars = t),
              (this._delay = +t.delay || 0),
              (this._repeat = t.repeat || 0) &&
                ((this._rDelay = t.repeatDelay || 0),
                (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
              (this._ts = 1),
              Et(this, +t.duration, 1),
              (this.data = t.data),
              h || ge.wake(),
              i && St(i, this, e || 0 === e ? e : i._time, 1),
              t.reversed && this.reverse(),
              t.paused && this.paused(!0);
          }
          var e = t.prototype;
          return (
            (e.delay = function (t) {
              return t || 0 === t
                ? (this.parent &&
                    this.parent.smoothChildTiming &&
                    this.startTime(this._start + t - this._delay),
                  (this._delay = t),
                  this)
                : this._delay;
            }),
            (e.duration = function (t) {
              return arguments.length
                ? this.totalDuration(
                    this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
                  )
                : this.totalDuration() && this._dur;
            }),
            (e.totalDuration = function (t) {
              if (!arguments.length) return this._tDur;
              this._dirty = 0;
              var e = this._time / this._dur || 0;
              return (
                Et(
                  this,
                  this._repeat < 0
                    ? t
                    : (t - this._repeat * this._rDelay) / (this._repeat + 1)
                ),
                this._tTime ? Dt(this, e * t + Tt(this)) : this
              );
            }),
            (e.totalTime = function (t, e) {
              if ((ve(), !arguments.length)) return this._tTime;
              var r = this._dp;
              if (r && r.smoothChildTiming && this._ts) {
                for (Dt(this, t); r.parent; )
                  r.parent._time !==
                    r._start +
                      (r._ts >= 0
                        ? r._tTime / r._ts
                        : (r.totalDuration() - r._tTime) / -r._ts) &&
                    r.totalTime(r._tTime, !0),
                    (r = r.parent);
                !this.parent &&
                  this._dp.autoRemoveChildren &&
                  ((this._ts > 0 && t < this._tDur) ||
                    (this._ts < 0 && t > 0) ||
                    (!this._tDur && !t)) &&
                  St(this._dp, this, this._start - this._delay);
              }
              return (
                (this._tTime !== t ||
                  (!this._dur && !e) ||
                  (this._initted && Math.abs(this._zTime) === f) ||
                  (!t && !this._initted)) &&
                  (this._ts || (this._pTime = t), st(this, t, e)),
                this
              );
            }),
            (e.time = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    Math.min(this.totalDuration(), t + Tt(this)) % this._dur ||
                      (t ? this._dur : 0),
                    e
                  )
                : this._time;
            }),
            (e.totalProgress = function (t, e) {
              return arguments.length
                ? this.totalTime(this.totalDuration() * t, e)
                : this.totalDuration()
                ? Math.min(1, this._tTime / this._tDur)
                : this.ratio;
            }),
            (e.progress = function (t, e) {
              return arguments.length
                ? this.totalTime(
                    this.duration() *
                      (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                      Tt(this),
                    e
                  )
                : this.duration()
                ? Math.min(1, this._time / this._dur)
                : this.ratio;
            }),
            (e.iteration = function (t, e) {
              var r = this.duration() + this._rDelay;
              return arguments.length
                ? this.totalTime(this._time + (t - 1) * r, e)
                : this._repeat
                ? wt(this._tTime, r) + 1
                : 1;
            }),
            (e.timeScale = function (t) {
              if (!arguments.length) return this._rts === -f ? 0 : this._rts;
              if (this._rts === t) return this;
              var e =
                this.parent && this._ts
                  ? bt(this.parent._time, this)
                  : this._tTime;
              return (
                (this._rts = +t || 0),
                (this._ts = this._ps || t === -f ? 0 : this._rts),
                xt(this.totalTime(Ut(-this._delay, this._tDur, e), !0))
              );
            }),
            (e.paused = function (t) {
              return arguments.length
                ? (this._ps !== t &&
                    ((this._ps = t),
                    t
                      ? ((this._pTime =
                          this._tTime ||
                          Math.max(-this._delay, this.rawTime())),
                        (this._ts = this._act = 0))
                      : (ve(),
                        (this._ts = this._rts),
                        this.totalTime(
                          this.parent && !this.parent.smoothChildTiming
                            ? this.rawTime()
                            : this._tTime || this._pTime,
                          1 === this.progress() &&
                            (this._tTime -= f) &&
                            Math.abs(this._zTime) !== f
                        ))),
                  this)
                : this._ps;
            }),
            (e.startTime = function (t) {
              if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return (
                  e &&
                    (e._sort || !this.parent) &&
                    St(e, this, t - this._delay),
                  this
                );
              }
              return this._start;
            }),
            (e.endTime = function (t) {
              return (
                this._start +
                (D(t) ? this.totalDuration() : this.duration()) /
                  Math.abs(this._ts)
              );
            }),
            (e.rawTime = function (t) {
              var e = this.parent || this._dp;
              return e
                ? t &&
                  (!this._ts ||
                    (this._repeat && this._time && this.totalProgress() < 1))
                  ? this._tTime % (this._dur + this._rDelay)
                  : this._ts
                  ? bt(e.rawTime(t), this)
                  : this._tTime
                : this._tTime;
            }),
            (e.globalTime = function (t) {
              for (var e = this, r = arguments.length ? t : e.rawTime(); e; )
                (r = e._start + r / (e._ts || 1)), (e = e._dp);
              return r;
            }),
            (e.repeat = function (t) {
              return arguments.length
                ? ((this._repeat = t), zt(this))
                : this._repeat;
            }),
            (e.repeatDelay = function (t) {
              return arguments.length
                ? ((this._rDelay = t), zt(this))
                : this._rDelay;
            }),
            (e.yoyo = function (t) {
              return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
            }),
            (e.seek = function (t, e) {
              return this.totalTime(Lt(this, t), D(e));
            }),
            (e.restart = function (t, e) {
              return this.play().totalTime(t ? -this._delay : 0, D(e));
            }),
            (e.play = function (t, e) {
              return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
            }),
            (e.reverse = function (t, e) {
              return (
                null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
              );
            }),
            (e.pause = function (t, e) {
              return null != t && this.seek(t, e), this.paused(!0);
            }),
            (e.resume = function () {
              return this.paused(!1);
            }),
            (e.reversed = function (t) {
              return arguments.length
                ? (!!t !== this.reversed() &&
                    this.timeScale(-this._rts || (t ? -f : 0)),
                  this)
                : this._rts < 0;
            }),
            (e.invalidate = function () {
              return (this._initted = 0), (this._zTime = -f), this;
            }),
            (e.isActive = function () {
              var t,
                e = this.parent || this._dp,
                r = this._start;
              return !(
                e &&
                !(
                  this._ts &&
                  this._initted &&
                  e.isActive() &&
                  (t = e.rawTime(!0)) >= r &&
                  t < this.endTime(!0) - f
                )
              );
            }),
            (e.eventCallback = function (t, e, r) {
              var i = this.vars;
              return arguments.length > 1
                ? (e
                    ? ((i[t] = e),
                      r && (i[t + "Params"] = r),
                      "onUpdate" === t && (this._onUpdate = e))
                    : delete i[t],
                  this)
                : i[t];
            }),
            (e.then = function (t) {
              var e = this;
              return new Promise(function (r) {
                var i = T(t) ? t : at,
                  n = function () {
                    var t = e.then;
                    (e.then = null),
                      T(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                      r(i),
                      (e.then = t);
                  };
                (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
                (!e._tTime && e._ts < 0)
                  ? n()
                  : (e._prom = n);
              });
            }),
            (e.kill = function () {
              oe(this);
            }),
            t
          );
        })();
        (exports.Animation = Ee),
          ut(Ee.prototype, {
            _time: 0,
            _start: 0,
            _end: 0,
            _tTime: 0,
            _tDur: 0,
            _dirty: 0,
            _repeat: 0,
            _yoyo: !1,
            parent: null,
            _initted: !1,
            _rDelay: 0,
            _ts: 1,
            _dp: 0,
            ratio: 0,
            _zTime: -f,
            _prom: 0,
            _ps: !1,
            _rts: 1,
          });
        var ze = (function (i) {
          function n(e, r) {
            var n;
            return (
              void 0 === e && (e = {}),
              ((n = i.call(this, e, r) || this).labels = {}),
              (n.smoothChildTiming = !!e.smoothChildTiming),
              (n.autoRemoveChildren = !!e.autoRemoveChildren),
              (n._sort = D(e.sortChildren)),
              n.parent && Ct(n.parent, t(n)),
              e.scrollTrigger && Mt(t(n), e.scrollTrigger),
              n
            );
          }
          e(n, i);
          var s = n.prototype;
          return (
            (s.to = function (t, e, r) {
              return (
                new Ge(
                  t,
                  it(arguments, 0, this),
                  Lt(this, w(e) ? arguments[3] : r)
                ),
                this
              );
            }),
            (s.from = function (t, e, r) {
              return (
                new Ge(
                  t,
                  it(arguments, 1, this),
                  Lt(this, w(e) ? arguments[3] : r)
                ),
                this
              );
            }),
            (s.fromTo = function (t, e, r, i) {
              return (
                new Ge(
                  t,
                  it(arguments, 2, this),
                  Lt(this, w(e) ? arguments[4] : i)
                ),
                this
              );
            }),
            (s.set = function (t, e, r) {
              return (
                (e.duration = 0),
                (e.parent = this),
                ft(e).repeatDelay || (e.repeat = 0),
                (e.immediateRender = !!e.immediateRender),
                new Ge(t, e, Lt(this, r), 1),
                this
              );
            }),
            (s.call = function (t, e, r) {
              return St(this, Ge.delayedCall(0, t, e), Lt(this, r));
            }),
            (s.staggerTo = function (t, e, r, i, n, s, o) {
              return (
                (r.duration = e),
                (r.stagger = r.stagger || i),
                (r.onComplete = s),
                (r.onCompleteParams = o),
                (r.parent = this),
                new Ge(t, r, Lt(this, n)),
                this
              );
            }),
            (s.staggerFrom = function (t, e, r, i, n, s, o) {
              return (
                (r.runBackwards = 1),
                (ft(r).immediateRender = D(r.immediateRender)),
                this.staggerTo(t, e, r, i, n, s, o)
              );
            }),
            (s.staggerFromTo = function (t, e, r, i, n, s, o, a) {
              return (
                (i.startAt = r),
                (ft(i).immediateRender = D(i.immediateRender)),
                this.staggerTo(t, e, i, n, s, o, a)
              );
            }),
            (s.render = function (t, e, i) {
              var n,
                s,
                o,
                a,
                u,
                h,
                _,
                p,
                l,
                c,
                d,
                m,
                g = this._time,
                v = this._dirty ? this.totalDuration() : this._tDur,
                x = this._dur,
                y = this !== r && t > v - f && t >= 0 ? v : t < f ? 0 : t,
                T = this._zTime < 0 != t < 0 && (this._initted || !x);
              if (y !== this._tTime || i || T) {
                if (
                  (g !== this._time &&
                    x &&
                    ((y += this._time - g), (t += this._time - g)),
                  (n = y),
                  (l = this._start),
                  (h = !(p = this._ts)),
                  T && (x || (g = this._zTime), (t || !e) && (this._zTime = t)),
                  this._repeat &&
                    ((d = this._yoyo),
                    (u = x + this._rDelay),
                    ((n = et(y % u)) > x || v === y) && (n = x),
                    (a = ~~(y / u)) && a === y / u && ((n = x), a--),
                    (c = wt(this._tTime, u)),
                    !g && this._tTime && c !== a && (c = a),
                    d && 1 & a && ((n = x - n), (m = 1)),
                    a !== c && !this._lock))
                ) {
                  var w = d && 1 & c,
                    b = w === (d && 1 & a);
                  if (
                    (a < c && (w = !w),
                    (g = w ? 0 : x),
                    (this._lock = 1),
                    (this.render(g || (m ? 0 : et(a * u)), e, !x)._lock = 0),
                    !e && this.parent && se(this, "onRepeat"),
                    this.vars.repeatRefresh &&
                      !m &&
                      (this.invalidate()._lock = 1),
                    g !== this._time || h !== !this._ts)
                  )
                    return this;
                  if (
                    (b &&
                      ((this._lock = 2),
                      (g = w ? x + 1e-4 : -1e-4),
                      this.render(g, !0),
                      this.vars.repeatRefresh && !m && this.invalidate()),
                    (this._lock = 0),
                    !this._ts && !h)
                  )
                    return this;
                  De(this, m);
                }
                if (
                  (this._hasPause &&
                    !this._forcing &&
                    this._lock < 2 &&
                    (_ = Rt(this, et(g), et(n))) &&
                    (y -= n - (n = _._start)),
                  (this._tTime = y),
                  (this._time = n),
                  (this._act = !p),
                  this._initted ||
                    ((this._onUpdate = this.vars.onUpdate),
                    (this._initted = 1),
                    (this._zTime = t)),
                  g || !n || e || se(this, "onStart"),
                  n >= g && t >= 0)
                )
                  for (s = this._first; s; ) {
                    if (
                      ((o = s._next),
                      (s._act || n >= s._start) && s._ts && _ !== s)
                    ) {
                      if (s.parent !== this) return this.render(t, e, i);
                      if (
                        (s.render(
                          s._ts > 0
                            ? (n - s._start) * s._ts
                            : (s._dirty ? s.totalDuration() : s._tDur) +
                                (n - s._start) * s._ts,
                          e,
                          i
                        ),
                        n !== this._time || (!this._ts && !h))
                      ) {
                        (_ = 0), o && (y += this._zTime = -f);
                        break;
                      }
                    }
                    s = o;
                  }
                else {
                  s = this._last;
                  for (var k = t < 0 ? t : n; s; ) {
                    if (
                      ((o = s._prev),
                      (s._act || k <= s._end) && s._ts && _ !== s)
                    ) {
                      if (s.parent !== this) return this.render(t, e, i);
                      if (
                        (s.render(
                          s._ts > 0
                            ? (k - s._start) * s._ts
                            : (s._dirty ? s.totalDuration() : s._tDur) +
                                (k - s._start) * s._ts,
                          e,
                          i
                        ),
                        n !== this._time || (!this._ts && !h))
                      ) {
                        (_ = 0), o && (y += this._zTime = k ? -f : f);
                        break;
                      }
                    }
                    s = o;
                  }
                }
                if (
                  _ &&
                  !e &&
                  (this.pause(),
                  (_.render(n >= g ? 0 : -f)._zTime = n >= g ? 1 : -1),
                  this._ts)
                )
                  return (this._start = l), kt(this), this.render(t, e, i);
                this._onUpdate && !e && se(this, "onUpdate", !0),
                  ((y === v && v >= this.totalDuration()) || (!y && g)) &&
                    ((l !== this._start &&
                      Math.abs(p) === Math.abs(this._ts)) ||
                      this._lock ||
                      ((t || !x) &&
                        ((y === v && this._ts > 0) || (!y && this._ts < 0)) &&
                        gt(this, 1),
                      e ||
                        (t < 0 && !g) ||
                        (!y && !g) ||
                        (se(
                          this,
                          y === v ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(y < v && this.timeScale() > 0) &&
                          this._prom())));
              }
              return this;
            }),
            (s.add = function (t, e) {
              var r = this;
              if ((w(e) || (e = Lt(this, e)), !(t instanceof Ee))) {
                if (M(t))
                  return (
                    t.forEach(function (t) {
                      return r.add(t, e);
                    }),
                    vt(this)
                  );
                if (y(t)) return this.addLabel(t, e);
                if (!T(t)) return this;
                t = Ge.delayedCall(0, t);
              }
              return this !== t ? St(this, t, e) : this;
            }),
            (s.getChildren = function (t, e, r, i) {
              void 0 === t && (t = !0),
                void 0 === e && (e = !0),
                void 0 === r && (r = !0),
                void 0 === i && (i = -l);
              for (var n = [], s = this._first; s; )
                s._start >= i &&
                  (s instanceof Ge
                    ? e && n.push(s)
                    : (r && n.push(s),
                      t && n.push.apply(n, s.getChildren(!0, e, r)))),
                  (s = s._next);
              return n;
            }),
            (s.getById = function (t) {
              for (var e = this.getChildren(1, 1, 1), r = e.length; r--; )
                if (e[r].vars.id === t) return e[r];
            }),
            (s.remove = function (t) {
              return y(t)
                ? this.removeLabel(t)
                : T(t)
                ? this.killTweensOf(t)
                : (mt(this, t),
                  t === this._recent && (this._recent = this._last),
                  vt(this));
            }),
            (s.totalTime = function (t, e) {
              return arguments.length
                ? ((this._forcing = 1),
                  !this._dp &&
                    this._ts &&
                    (this._start = et(
                      ge.time -
                        (this._ts > 0
                          ? t / this._ts
                          : (this.totalDuration() - t) / -this._ts)
                    )),
                  i.prototype.totalTime.call(this, t, e),
                  (this._forcing = 0),
                  this)
                : this._tTime;
            }),
            (s.addLabel = function (t, e) {
              return (this.labels[t] = Lt(this, e)), this;
            }),
            (s.removeLabel = function (t) {
              return delete this.labels[t], this;
            }),
            (s.addPause = function (t, e, r) {
              var i = Ge.delayedCall(0, e || q, r);
              return (
                (i.data = "isPause"),
                (this._hasPause = 1),
                St(this, i, Lt(this, t))
              );
            }),
            (s.removePause = function (t) {
              var e = this._first;
              for (t = Lt(this, t); e; )
                e._start === t && "isPause" === e.data && gt(e), (e = e._next);
            }),
            (s.killTweensOf = function (t, e, r) {
              for (var i = this.getTweensOf(t, r), n = i.length; n--; )
                Oe !== i[n] && i[n].kill(t, e);
              return this;
            }),
            (s.getTweensOf = function (t, e) {
              for (var r, i = [], n = jt(t), s = this._first, o = w(e); s; )
                s instanceof Ge
                  ? rt(s._targets, n) &&
                    (o
                      ? (!Oe || (s._initted && s._ts)) &&
                        s.globalTime(0) <= e &&
                        s.globalTime(s.totalDuration()) > e
                      : !e || s.isActive()) &&
                    i.push(s)
                  : (r = s.getTweensOf(n, e)).length && i.push.apply(i, r),
                  (s = s._next);
              return i;
            }),
            (s.tweenTo = function (t, e) {
              e = e || {};
              var r = this,
                i = Lt(r, t),
                n = e,
                s = n.startAt,
                o = n.onStart,
                a = n.onStartParams,
                u = Ge.to(
                  r,
                  ut(e, {
                    ease: "none",
                    lazy: !1,
                    time: i,
                    duration:
                      e.duration ||
                      Math.abs(
                        (i - (s && "time" in s ? s.time : r._time)) /
                          r.timeScale()
                      ) ||
                      f,
                    onStart: function () {
                      r.pause();
                      var t =
                        e.duration || Math.abs((i - r._time) / r.timeScale());
                      u._dur !== t && Et(u, t).render(u._time, !0, !0),
                        o && o.apply(u, a || []);
                    },
                  })
                );
              return u;
            }),
            (s.tweenFromTo = function (t, e, r) {
              return this.tweenTo(e, ut({ startAt: { time: Lt(this, t) } }, r));
            }),
            (s.recent = function () {
              return this._recent;
            }),
            (s.nextLabel = function (t) {
              return void 0 === t && (t = this._time), ne(this, Lt(this, t));
            }),
            (s.previousLabel = function (t) {
              return void 0 === t && (t = this._time), ne(this, Lt(this, t), 1);
            }),
            (s.currentLabel = function (t) {
              return arguments.length
                ? this.seek(t, !0)
                : this.previousLabel(this._time + f);
            }),
            (s.shiftChildren = function (t, e, r) {
              void 0 === r && (r = 0);
              for (var i, n = this._first, s = this.labels; n; )
                n._start >= r && (n._start += t), (n = n._next);
              if (e) for (i in s) s[i] >= r && (s[i] += t);
              return vt(this);
            }),
            (s.invalidate = function () {
              var t = this._first;
              for (this._lock = 0; t; ) t.invalidate(), (t = t._next);
              return i.prototype.invalidate.call(this);
            }),
            (s.clear = function (t) {
              void 0 === t && (t = !0);
              for (var e, r = this._first; r; )
                (e = r._next), this.remove(r), (r = e);
              return (
                (this._time = this._tTime = this._pTime = 0),
                t && (this.labels = {}),
                vt(this)
              );
            }),
            (s.totalDuration = function (t) {
              var e,
                i,
                n,
                s,
                o = 0,
                a = this._last,
                u = l;
              if (arguments.length)
                return this.timeScale(
                  (this._repeat < 0 ? this.duration() : this.totalDuration()) /
                    (this.reversed() ? -t : t)
                );
              if (this._dirty) {
                for (s = this.parent; a; )
                  (e = a._prev),
                    a._dirty && a.totalDuration(),
                    (n = a._start) > u && this._sort && a._ts && !this._lock
                      ? ((this._lock = 1),
                        (St(this, a, n - a._delay, 1)._lock = 0))
                      : (u = n),
                    n < 0 &&
                      a._ts &&
                      ((o -= n),
                      ((!s && !this._dp) || (s && s.smoothChildTiming)) &&
                        ((this._start += n / this._ts),
                        (this._time -= n),
                        (this._tTime -= n)),
                      this.shiftChildren(-n, !1, -Infinity),
                      (u = 0)),
                    (i = kt(a)) > o && a._ts && (o = i),
                    (a = e);
                Et(this, this === r && this._time > o ? this._time : o, 1),
                  (this._dirty = 0);
              }
              return this._tDur;
            }),
            (n.updateRoot = function (t) {
              if ((r._ts && (st(r, bt(t, r)), (a = ge.frame)), ge.frame >= H)) {
                H += _.autoSleep || 120;
                var e = r._first;
                if ((!e || !e._ts) && _.autoSleep && ge._listeners.length < 2) {
                  for (; e && !e._ts; ) e = e._next;
                  e || ge.sleep();
                }
              }
            }),
            n
          );
        })(Ee);
        (exports.TimelineLite = exports.TimelineMax = exports.Timeline = ze),
          ut(ze.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
        var Oe,
          Le = function (t, e, r, i, n, s, o) {
            var a,
              u,
              h,
              _,
              p,
              l,
              f,
              c,
              d = new nr(this._pt, t, e, 0, 1, Ze, null, n),
              m = 0,
              g = 0;
            for (
              d.b = r,
                d.e = i,
                r += "",
                (f = ~(i += "").indexOf("random(")) && (i = ee(i)),
                s && (s((c = [r, i]), t, e), (r = c[0]), (i = c[1])),
                u = r.match(E) || [];
              (a = E.exec(i));

            )
              (_ = a[0]),
                (p = i.substring(m, a.index)),
                h ? (h = (h + 1) % 5) : "rgba(" === p.substr(-5) && (h = 1),
                _ !== u[g++] &&
                  ((l = parseFloat(u[g - 1]) || 0),
                  (d._pt = {
                    _next: d._pt,
                    p: p || 1 === g ? p : ",",
                    s: l,
                    c:
                      "=" === _.charAt(1)
                        ? parseFloat(_.substr(2)) *
                          ("-" === _.charAt(0) ? -1 : 1)
                        : parseFloat(_) - l,
                    m: h && h < 4 ? Math.round : 0,
                  }),
                  (m = E.lastIndex));
            return (
              (d.c = m < i.length ? i.substring(m, i.length) : ""),
              (d.fp = o),
              (O.test(i) || f) && (d.e = 0),
              (this._pt = d),
              d
            );
          },
          Fe = function (t, e, r, i, n, s, o, a, u) {
            T(i) && (i = i(n || 0, t, s));
            var h,
              p = t[e],
              l =
                "get" !== r
                  ? r
                  : T(p)
                  ? u
                    ? t[
                        e.indexOf("set") || !T(t["get" + e.substr(3)])
                          ? e
                          : "get" + e.substr(3)
                      ](u)
                    : t[e]()
                  : p,
              f = T(p) ? (u ? Ye : We) : Ve;
            if (
              (y(i) &&
                (~i.indexOf("random(") && (i = ee(i)),
                "=" === i.charAt(1) &&
                  (i =
                    parseFloat(l) +
                    parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) +
                    (It(l) || 0))),
              l !== i)
            )
              return isNaN(l * i)
                ? (!p && !(e in t) && B(e, i),
                  Le.call(this, t, e, l, i, f, a || _.stringFilter, u))
                : ((h = new nr(
                    this._pt,
                    t,
                    e,
                    +l || 0,
                    i - (l || 0),
                    "boolean" == typeof p ? Xe : Ke,
                    0,
                    f
                  )),
                  u && (h.fp = u),
                  o && h.modifier(o, this, t),
                  (this._pt = h));
          },
          Ue = function (t, e, r, i, n) {
            if (
              (T(t) && (t = Qe(t, n, e, r, i)),
              !k(t) || (t.style && t.nodeType) || M(t))
            )
              return y(t) ? Qe(t, n, e, r, i) : t;
            var s,
              o = {};
            for (s in t) o[s] = Qe(t[s], n, e, r, i);
            return o;
          },
          Ie = function (t, e, r, i, n, s) {
            var o, a, h, _;
            if (
              W[t] &&
              !1 !==
                (o = new W[t]()).init(
                  n,
                  o.rawVars ? e[t] : Ue(e[t], i, n, s, r),
                  r,
                  i,
                  s
                ) &&
              ((r._pt = a =
                new nr(r._pt, n, t, 0, 1, o.render, o, 0, o.priority)),
              r !== u)
            )
              for (
                h = r._ptLookup[r._targets.indexOf(n)], _ = o._props.length;
                _--;

              )
                h[o._props[_]] = a;
            return o;
          },
          Be = function t(e, i) {
            var n,
              s,
              o,
              a,
              u,
              h,
              _,
              l,
              c,
              d,
              m,
              g,
              v = e.vars,
              x = v.ease,
              y = v.startAt,
              T = v.immediateRender,
              w = v.lazy,
              b = v.onUpdate,
              k = v.onUpdateParams,
              C = v.callbackScope,
              S = v.runBackwards,
              M = v.yoyoEase,
              P = v.keyframes,
              A = v.autoRevert,
              R = e._dur,
              E = e._startAt,
              z = e._targets,
              O = e.parent,
              L = O && "nested" === O.data ? O.parent._targets : z,
              F = "auto" === e._overwrite,
              U = e.timeline;
            if (
              (U && (!P || !x) && (x = "none"),
              (e._ease = Ce(x, p.ease)),
              (e._yEase = M ? ke(Ce(!0 === M ? x : M, p.ease)) : 0),
              M &&
                e._yoyo &&
                !e._repeat &&
                ((M = e._yEase), (e._yEase = e._ease), (e._ease = M)),
              !U)
            ) {
              if (
                ((g = (l = z[0] ? Z(z[0]).harness : 0) && v[l.prop]),
                (n = lt(v, j)),
                E && E.render(-1, !0).kill(),
                y)
              ) {
                if (
                  (gt(
                    (e._startAt = Ge.set(
                      z,
                      ut(
                        {
                          data: "isStart",
                          overwrite: !1,
                          parent: O,
                          immediateRender: !0,
                          lazy: D(w),
                          startAt: null,
                          delay: 0,
                          onUpdate: b,
                          onUpdateParams: k,
                          callbackScope: C,
                          stagger: 0,
                        },
                        y
                      )
                    ))
                  ),
                  T)
                )
                  if (i > 0) !A && (e._startAt = 0);
                  else if (R && !(i < 0 && E)) return void (e._zTime = i);
              } else if (S && R)
                if (E) !A && (e._startAt = 0);
                else if (
                  (i && (T = !1),
                  (o = ut(
                    {
                      overwrite: !1,
                      data: "isFromStart",
                      lazy: T && D(w),
                      immediateRender: T,
                      stagger: 0,
                      parent: O,
                    },
                    n
                  )),
                  g && (o[l.prop] = g),
                  gt((e._startAt = Ge.set(z, o))),
                  T)
                ) {
                  if (!i) return;
                } else t(e._startAt, f);
              for (
                e._pt = 0, w = (R && D(w)) || (w && !R), s = 0;
                s < z.length;
                s++
              ) {
                if (
                  ((_ = (u = z[s])._gsap || X(z)[s]._gsap),
                  (e._ptLookup[s] = d = {}),
                  V[_.id] && nt(),
                  (m = L === z ? s : L.indexOf(u)),
                  l &&
                    !1 !== (c = new l()).init(u, g || n, e, m, L) &&
                    ((e._pt = a =
                      new nr(
                        e._pt,
                        u,
                        c.name,
                        0,
                        1,
                        c.render,
                        c,
                        0,
                        c.priority
                      )),
                    c._props.forEach(function (t) {
                      d[t] = a;
                    }),
                    c.priority && (h = 1)),
                  !l || g)
                )
                  for (o in n)
                    W[o] && (c = Ie(o, n, e, m, u, L))
                      ? c.priority && (h = 1)
                      : (d[o] = a =
                          Fe.call(
                            e,
                            u,
                            o,
                            "get",
                            n[o],
                            m,
                            L,
                            0,
                            v.stringFilter
                          ));
                e._op && e._op[s] && e.kill(u, e._op[s]),
                  F &&
                    e._pt &&
                    ((Oe = e), r.killTweensOf(u, d, e.globalTime(0)), (Oe = 0)),
                  e._pt && w && (V[_.id] = 1);
              }
              h && ir(e), e._onInit && e._onInit(e);
            }
            (e._from = !U && !!v.runBackwards),
              (e._onUpdate = b),
              (e._initted = !!e.parent);
          },
          Ne = function (t, e) {
            var r,
              i,
              n,
              s,
              o = t[0] ? Z(t[0]).harness : 0,
              a = o && o.aliases;
            if (!a) return e;
            for (i in ((r = _t({}, e)), a))
              if (i in r)
                for (n = (s = a[i].split(",")).length; n--; ) r[s[n]] = r[i];
            return r;
          },
          Qe = function (t, e, r, i, n) {
            return T(t)
              ? t.call(e, r, i, n)
              : y(t) && ~t.indexOf("random(")
              ? ee(t)
              : t;
          },
          qe = K + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
          je = (qe + ",id,stagger,delay,duration,paused,scrollTrigger").split(
            ","
          );
        exports._checkPlugin = Ie;
        var Ge = (function (i) {
          function n(e, n, s, o) {
            var a;
            "number" == typeof n && ((s.duration = n), (n = s), (s = null));
            var u,
              h,
              p,
              l,
              c,
              d,
              m,
              g,
              v = (a = i.call(this, o ? n : ft(n), s) || this).vars,
              x = v.duration,
              y = v.delay,
              T = v.immediateRender,
              b = v.stagger,
              C = v.overwrite,
              P = v.keyframes,
              A = v.defaults,
              R = v.scrollTrigger,
              E = v.yoyoEase,
              z = a.parent,
              O = (M(e) ? w(e[0]) : "length" in n) ? [e] : jt(e);
            if (
              ((a._targets = O.length
                ? X(O)
                : N(
                    "GSAP target " + e + " not found. https://greensock.com",
                    !_.nullTargetWarn
                  ) || []),
              (a._ptLookup = []),
              (a._overwrite = C),
              P || b || S(x) || S(y))
            ) {
              if (
                ((n = a.vars),
                (u = a.timeline =
                  new ze({ data: "nested", defaults: A || {} })).kill(),
                (u.parent = t(a)),
                P)
              )
                ut(u.vars.defaults, { ease: "none" }),
                  P.forEach(function (t) {
                    return u.to(O, t, ">");
                  });
              else {
                if (((l = O.length), (m = b ? Vt(b) : q), k(b)))
                  for (c in b) ~qe.indexOf(c) && (g || (g = {}), (g[c] = b[c]));
                for (h = 0; h < l; h++) {
                  for (c in ((p = {}), n)) je.indexOf(c) < 0 && (p[c] = n[c]);
                  (p.stagger = 0),
                    E && (p.yoyoEase = E),
                    g && _t(p, g),
                    (d = O[h]),
                    (p.duration = +Qe(x, t(a), h, d, O)),
                    (p.delay = (+Qe(y, t(a), h, d, O) || 0) - a._delay),
                    !b &&
                      1 === l &&
                      p.delay &&
                      ((a._delay = y = p.delay),
                      (a._start += y),
                      (p.delay = 0)),
                    u.to(d, p, m(h, d, O));
                }
                u.duration() ? (x = y = 0) : (a.timeline = 0);
              }
              x || a.duration((x = u.duration()));
            } else a.timeline = 0;
            return (
              !0 === C && ((Oe = t(a)), r.killTweensOf(O), (Oe = 0)),
              z && Ct(z, t(a)),
              (T ||
                (!x &&
                  !P &&
                  a._start === et(z._time) &&
                  D(T) &&
                  yt(t(a)) &&
                  "nested" !== z.data)) &&
                ((a._tTime = -f), a.render(Math.max(0, -y))),
              R && Mt(t(a), R),
              a
            );
          }
          e(n, i);
          var s = n.prototype;
          return (
            (s.render = function (t, e, r) {
              var i,
                n,
                s,
                o,
                a,
                u,
                h,
                _,
                p,
                l = this._time,
                c = this._tDur,
                d = this._dur,
                m = t > c - f && t >= 0 ? c : t < f ? 0 : t;
              if (d) {
                if (
                  m !== this._tTime ||
                  !t ||
                  r ||
                  (this._startAt && this._zTime < 0 != t < 0)
                ) {
                  if (((i = m), (_ = this.timeline), this._repeat)) {
                    if (
                      ((o = d + this._rDelay),
                      ((i = et(m % o)) > d || c === m) && (i = d),
                      (s = ~~(m / o)) && s === m / o && ((i = d), s--),
                      (u = this._yoyo && 1 & s) &&
                        ((p = this._yEase), (i = d - i)),
                      (a = wt(this._tTime, o)),
                      i === l && !r && this._initted)
                    )
                      return this;
                    s !== a &&
                      (_ && this._yEase && De(_, u),
                      !this.vars.repeatRefresh ||
                        u ||
                        this._lock ||
                        ((this._lock = r = 1),
                        (this.render(et(o * s), !0).invalidate()._lock = 0)));
                  }
                  if (!this._initted) {
                    if (Pt(this, t < 0 ? t : i, r, e))
                      return (this._tTime = 0), this;
                    if (d !== this._dur) return this.render(t, e, r);
                  }
                  for (
                    this._tTime = m,
                      this._time = i,
                      !this._act &&
                        this._ts &&
                        ((this._act = 1), (this._lazy = 0)),
                      this.ratio = h = (p || this._ease)(i / d),
                      this._from && (this.ratio = h = 1 - h),
                      i && !l && !e && se(this, "onStart"),
                      n = this._pt;
                    n;

                  )
                    n.r(h, n.d), (n = n._next);
                  (_ &&
                    _.render(t < 0 ? t : !i && u ? -f : _._dur * h, e, r)) ||
                    (this._startAt && (this._zTime = t)),
                    this._onUpdate &&
                      !e &&
                      (t < 0 && this._startAt && this._startAt.render(t, !0, r),
                      se(this, "onUpdate")),
                    this._repeat &&
                      s !== a &&
                      this.vars.onRepeat &&
                      !e &&
                      this.parent &&
                      se(this, "onRepeat"),
                    (m !== this._tDur && m) ||
                      this._tTime !== m ||
                      (t < 0 &&
                        this._startAt &&
                        !this._onUpdate &&
                        this._startAt.render(t, !0, !0),
                      (t || !d) &&
                        ((m === this._tDur && this._ts > 0) ||
                          (!m && this._ts < 0)) &&
                        gt(this, 1),
                      e ||
                        (t < 0 && !l) ||
                        (!m && !l) ||
                        (se(
                          this,
                          m === c ? "onComplete" : "onReverseComplete",
                          !0
                        ),
                        this._prom &&
                          !(m < c && this.timeScale() > 0) &&
                          this._prom()));
                }
              } else At(this, t, e, r);
              return this;
            }),
            (s.targets = function () {
              return this._targets;
            }),
            (s.invalidate = function () {
              return (
                (this._pt =
                  this._op =
                  this._startAt =
                  this._onUpdate =
                  this._act =
                  this._lazy =
                    0),
                (this._ptLookup = []),
                this.timeline && this.timeline.invalidate(),
                i.prototype.invalidate.call(this)
              );
            }),
            (s.kill = function (t, e) {
              if (
                (void 0 === e && (e = "all"),
                !(t || (e && "all" !== e)) && ((this._lazy = 0), this.parent))
              )
                return oe(this);
              if (this.timeline) {
                var r = this.timeline.totalDuration();
                return (
                  this.timeline.killTweensOf(
                    t,
                    e,
                    Oe && !0 !== Oe.vars.overwrite
                  )._first || oe(this),
                  this.parent &&
                    r !== this.timeline.totalDuration() &&
                    Et(this, (this._dur * this.timeline._tDur) / r),
                  this
                );
              }
              var i,
                n,
                s,
                o,
                a,
                u,
                h,
                _ = this._targets,
                p = t ? jt(t) : _,
                l = this._ptLookup,
                f = this._pt;
              if ((!e || "all" === e) && ct(_, p)) return oe(this);
              for (
                i = this._op = this._op || [],
                  "all" !== e &&
                    (y(e) &&
                      ((a = {}),
                      tt(e, function (t) {
                        return (a[t] = 1);
                      }),
                      (e = a)),
                    (e = Ne(_, e))),
                  h = _.length;
                h--;

              )
                if (~p.indexOf(_[h]))
                  for (a in ((n = l[h]),
                  "all" === e
                    ? ((i[h] = e), (o = n), (s = {}))
                    : ((s = i[h] = i[h] || {}), (o = e)),
                  o))
                    (u = n && n[a]) &&
                      (("kill" in u.d && !0 !== u.d.kill(a)) ||
                        mt(this, u, "_pt"),
                      delete n[a]),
                      "all" !== s && (s[a] = 1);
              return this._initted && !this._pt && f && oe(this), this;
            }),
            (n.to = function (t, e) {
              return new n(t, e, arguments[2]);
            }),
            (n.from = function (t, e) {
              return new n(t, it(arguments, 1));
            }),
            (n.delayedCall = function (t, e, r, i) {
              return new n(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i,
              });
            }),
            (n.fromTo = function (t, e, r) {
              return new n(t, it(arguments, 2));
            }),
            (n.set = function (t, e) {
              return (
                (e.duration = 0), e.repeatDelay || (e.repeat = 0), new n(t, e)
              );
            }),
            (n.killTweensOf = function (t, e, i) {
              return r.killTweensOf(t, e, i);
            }),
            n
          );
        })(Ee);
        (exports.TweenLite = exports.TweenMax = exports.Tween = Ge),
          ut(Ge.prototype, {
            _targets: [],
            _lazy: 0,
            _startAt: 0,
            _op: 0,
            _onInit: 0,
          }),
          tt("staggerTo,staggerFrom,staggerFromTo", function (t) {
            Ge[t] = function () {
              var e = new ze(),
                r = Nt.call(arguments, 0);
              return (
                r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r)
              );
            };
          });
        var Ve = function (t, e, r) {
            return (t[e] = r);
          },
          We = function (t, e, r) {
            return t[e](r);
          },
          Ye = function (t, e, r, i) {
            return t[e](i.fp, r);
          },
          He = function (t, e, r) {
            return t.setAttribute(e, r);
          },
          Je = function (t, e) {
            return T(t[e]) ? We : b(t[e]) && t.setAttribute ? He : Ve;
          },
          Ke = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e);
          },
          Xe = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e);
          },
          Ze = function (t, e) {
            var r = e._pt,
              i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
              for (; r; )
                (i =
                  r.p +
                  (r.m
                    ? r.m(r.s + r.c * t)
                    : Math.round(1e4 * (r.s + r.c * t)) / 1e4) +
                  i),
                  (r = r._next);
              i += e.c;
            }
            e.set(e.t, e.p, i, e);
          },
          $e = function (t, e) {
            for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
          },
          tr = function (t, e, r, i) {
            for (var n, s = this._pt; s; )
              (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
          },
          er = function (t) {
            for (var e, r, i = this._pt; i; )
              (r = i._next),
                (i.p === t && !i.op) || i.op === t
                  ? mt(this, i, "_pt")
                  : i.dep || (e = 1),
                (i = r);
            return !e;
          },
          rr = function (t, e, r, i) {
            i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
          },
          ir = function (t) {
            for (var e, r, i, n, s = t._pt; s; ) {
              for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
              (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s),
                (s._next = r) ? (r._prev = s) : (n = s),
                (s = e);
            }
            t._pt = i;
          };
        (exports._sortPropTweensByPriority = ir),
          (exports._renderComplexString = Ze),
          (exports._getSetter = Je);
        var nr = (function () {
          function t(t, e, r, i, n, s, o, a, u) {
            (this.t = e),
              (this.s = i),
              (this.c = n),
              (this.p = r),
              (this.r = s || Ke),
              (this.d = o || this),
              (this.set = a || Ve),
              (this.pr = u || 0),
              (this._next = t),
              t && (t._prev = this);
          }
          return (
            (t.prototype.modifier = function (t, e, r) {
              (this.mSet = this.mSet || this.set),
                (this.set = rr),
                (this.m = t),
                (this.mt = r),
                (this.tween = e);
            }),
            t
          );
        })();
        (exports.PropTween = nr),
          tt(
            K +
              "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
            function (t) {
              return (j[t] = 1);
            }
          ),
          (F.TweenMax = F.TweenLite = Ge),
          (F.TimelineLite = F.TimelineMax = ze),
          (r = new ze({
            sortChildren: !1,
            defaults: p,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !1,
          })),
          (_.stringFilter = me);
        var sr = {
          registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
              e[r] = arguments[r];
            e.forEach(function (t) {
              return ae(t);
            });
          },
          timeline: function (t) {
            return new ze(t);
          },
          getTweensOf: function (t, e) {
            return r.getTweensOf(t, e);
          },
          getProperty: function (t, e, r, i) {
            y(t) && (t = jt(t)[0]);
            var n = Z(t || {}).get,
              s = r ? at : ot;
            return (
              "native" === r && (r = ""),
              t
                ? e
                  ? s(((W[e] && W[e].get) || n)(t, e, r, i))
                  : function (e, r, i) {
                      return s(((W[e] && W[e].get) || n)(t, e, r, i));
                    }
                : t
            );
          },
          quickSetter: function (t, e, r) {
            if ((t = jt(t)).length > 1) {
              var i = t.map(function (t) {
                  return hr.quickSetter(t, e, r);
                }),
                n = i.length;
              return function (t) {
                for (var e = n; e--; ) i[e](t);
              };
            }
            t = t[0] || {};
            var s = W[e],
              o = Z(t),
              a = (o.harness && (o.harness.aliases || {})[e]) || e,
              h = s
                ? function (e) {
                    var i = new s();
                    (u._pt = 0),
                      i.init(t, r ? e + r : e, u, 0, [t]),
                      i.render(1, i),
                      u._pt && $e(1, u);
                  }
                : o.set(t, a);
            return s
              ? h
              : function (e) {
                  return h(t, a, r ? e + r : e, o, 1);
                };
          },
          isTweening: function (t) {
            return r.getTweensOf(t, !0).length > 0;
          },
          defaults: function (t) {
            return t && t.ease && (t.ease = Ce(t.ease, p.ease)), pt(p, t || {});
          },
          config: function (t) {
            return pt(_, t || {});
          },
          registerEffect: function (t) {
            var e = t.name,
              r = t.effect,
              i = t.plugins,
              n = t.defaults,
              s = t.extendTimeline;
            (i || "").split(",").forEach(function (t) {
              return (
                t &&
                !W[t] &&
                !F[t] &&
                N(e + " effect requires " + t + " plugin.")
              );
            }),
              (Y[e] = function (t, e, i) {
                return r(jt(t), ut(e || {}, n), i);
              }),
              s &&
                (ze.prototype[e] = function (t, r, i) {
                  return this.add(Y[e](t, k(r) ? r : (i = r) && {}, this), i);
                });
          },
          registerEase: function (t, e) {
            xe[t] = Ce(e);
          },
          parseEase: function (t, e) {
            return arguments.length ? Ce(t, e) : xe;
          },
          getById: function (t) {
            return r.getById(t);
          },
          exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var i,
              n,
              s = new ze(t);
            for (
              s.smoothChildTiming = D(t.smoothChildTiming),
                r.remove(s),
                s._dp = 0,
                s._time = s._tTime = r._time,
                i = r._first;
              i;

            )
              (n = i._next),
                (!e &&
                  !i._dur &&
                  i instanceof Ge &&
                  i.vars.onComplete === i._targets[0]) ||
                  St(s, i, i._start - i._delay),
                (i = n);
            return St(r, s, 0), s;
          },
          utils: {
            wrap: $t,
            wrapYoyo: te,
            distribute: Vt,
            random: Ht,
            snap: Yt,
            normalize: Xt,
            getUnit: It,
            clamp: Bt,
            splitColor: pe,
            toArray: jt,
            mapRange: re,
            pipe: Jt,
            unitize: Kt,
            interpolate: ie,
            shuffle: Gt,
          },
          install: I,
          effects: Y,
          ticker: ge,
          updateRoot: ze.updateRoot,
          plugins: W,
          globalTimeline: r,
          core: {
            PropTween: nr,
            globals: Q,
            Tween: Ge,
            Timeline: ze,
            Animation: Ee,
            getCache: Z,
            _removeLinkedListItem: mt,
          },
        };
        tt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
          return (sr[t] = Ge[t]);
        }),
          ge.add(ze.updateRoot),
          (u = sr.to({}, { duration: 0 }));
        var or = function (t, e) {
            for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; )
              r = r._next;
            return r;
          },
          ar = function (t, e) {
            var r,
              i,
              n,
              s = t._targets;
            for (r in e)
              for (i = s.length; i--; )
                (n = t._ptLookup[i][r]) &&
                  (n = n.d) &&
                  (n._pt && (n = or(n, r)),
                  n && n.modifier && n.modifier(e[r], t, s[i], r));
          },
          ur = function (t, e) {
            return {
              name: t,
              rawVars: 1,
              init: function (t, r, i) {
                i._onInit = function (t) {
                  var i, n;
                  if (
                    (y(r) &&
                      ((i = {}),
                      tt(r, function (t) {
                        return (i[t] = 1);
                      }),
                      (r = i)),
                    e)
                  ) {
                    for (n in ((i = {}), r)) i[n] = e(r[n]);
                    r = i;
                  }
                  ar(t, r);
                };
              },
            };
          },
          hr =
            sr.registerPlugin(
              {
                name: "attr",
                init: function (t, e, r, i, n) {
                  var s, o;
                  for (s in e)
                    (o = this.add(
                      t,
                      "setAttribute",
                      (t.getAttribute(s) || 0) + "",
                      e[s],
                      i,
                      n,
                      0,
                      0,
                      s
                    )) && (o.op = s),
                      this._props.push(s);
                },
              },
              {
                name: "endArray",
                init: function (t, e) {
                  for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
                },
              },
              ur("roundProps", Wt),
              ur("modifiers"),
              ur("snap", Yt)
            ) || sr;
        (exports.default = exports.gsap = hr),
          (Ge.version = ze.version = hr.version = "3.4.0"),
          (o = 1),
          C() && ve();
        var _r = xe.Power0,
          pr = xe.Power1,
          lr = xe.Power2,
          fr = xe.Power3,
          cr = xe.Power4,
          dr = xe.Linear,
          mr = xe.Quad,
          gr = xe.Cubic,
          vr = xe.Quart,
          xr = xe.Quint,
          yr = xe.Strong,
          Tr = xe.Elastic,
          wr = xe.Back,
          br = xe.SteppedEase,
          kr = xe.Bounce,
          Dr = xe.Sine,
          Cr = xe.Expo,
          Sr = xe.Circ;
        (exports.Circ = Sr),
          (exports.Expo = Cr),
          (exports.Sine = Dr),
          (exports.Bounce = kr),
          (exports.SteppedEase = br),
          (exports.Back = wr),
          (exports.Elastic = Tr),
          (exports.Strong = yr),
          (exports.Quint = xr),
          (exports.Quart = vr),
          (exports.Cubic = gr),
          (exports.Quad = mr),
          (exports.Linear = dr),
          (exports.Power4 = cr),
          (exports.Power3 = fr),
          (exports.Power2 = lr),
          (exports.Power1 = pr),
          (exports.Power0 = _r);
      },
      {},
    ],
    bp4Z: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default =
            exports.checkPrefix =
            exports._getBBox =
            exports._createElement =
            exports.CSSPlugin =
              void 0);
        var t,
          e,
          r,
          n,
          i,
          s,
          o,
          a,
          p = require("./gsap-core.js"),
          u = function () {
            return "undefined" != typeof window;
          },
          c = {},
          l = 180 / Math.PI,
          h = Math.PI / 180,
          f = Math.atan2,
          g = 1e8,
          d = /([A-Z])/g,
          x = /(?:left|right|width|margin|padding|x)/i,
          m = /[\s,\(]\S/,
          _ = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity",
          },
          y = function (t, e) {
            return e.set(
              e.t,
              e.p,
              Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e
            );
          },
          v = function (t, e) {
            return e.set(
              e.t,
              e.p,
              1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
              e
            );
          },
          b = function (t, e) {
            return e.set(
              e.t,
              e.p,
              t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
              e
            );
          },
          w = function (t, e) {
            var r = e.s + e.c * t;
            e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
          },
          O = function (t, e) {
            return e.set(e.t, e.p, t ? e.e : e.b, e);
          },
          M = function (t, e) {
            return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
          },
          P = function (t, e, r) {
            return (t.style[e] = r);
          },
          C = function (t, e, r) {
            return t.style.setProperty(e, r);
          },
          B = function (t, e, r) {
            return (t._gsap[e] = r);
          },
          S = function (t, e, r) {
            return (t._gsap.scaleX = t._gsap.scaleY = r);
          },
          T = function (t, e, r, n, i) {
            var s = t._gsap;
            (s.scaleX = s.scaleY = r), s.renderTransform(i, s);
          },
          F = function (t, e, r, n, i) {
            var s = t._gsap;
            (s[e] = r), s.renderTransform(i, s);
          },
          E = "transform",
          Y = E + "Origin",
          A = function (t, r) {
            var n = e.createElementNS
              ? e.createElementNS(
                  (r || "http://www.w3.org/1999/xhtml").replace(
                    /^https/,
                    "http"
                  ),
                  t
                )
              : e.createElement(t);
            return n.style ? n : e.createElement(t);
          },
          X = function t(e, r, n) {
            var i = getComputedStyle(e);
            return (
              i[r] ||
              i.getPropertyValue(r.replace(d, "-$1").toLowerCase()) ||
              i.getPropertyValue(r) ||
              (!n && t(e, z(r) || r, 1)) ||
              ""
            );
          },
          k = "O,Moz,ms,Ms,Webkit".split(","),
          z = function (t, e, r) {
            var n = (e || i).style,
              s = 5;
            if (t in n && !r) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1);
              s-- && !(k[s] + t in n);

            );
            return s < 0 ? null : (3 === s ? "ms" : s >= 0 ? k[s] : "") + t;
          },
          N = function () {
            u() &&
              window.document &&
              ((t = window),
              (e = t.document),
              (r = e.documentElement),
              (i = A("div") || { style: {} }),
              (s = A("div")),
              (E = z(E)),
              (Y = E + "Origin"),
              (i.style.cssText =
                "border-width:0;line-height:0;position:absolute;padding:0"),
              (a = !!z("perspective")),
              (n = 1));
          },
          U = function t(e) {
            var n,
              i = A(
                "svg",
                (this.ownerSVGElement &&
                  this.ownerSVGElement.getAttribute("xmlns")) ||
                  "http://www.w3.org/2000/svg"
              ),
              s = this.parentNode,
              o = this.nextSibling,
              a = this.style.cssText;
            if (
              (r.appendChild(i),
              i.appendChild(this),
              (this.style.display = "block"),
              e)
            )
              try {
                (n = this.getBBox()),
                  (this._gsapBBox = this.getBBox),
                  (this.getBBox = t);
              } catch (p) {}
            else this._gsapBBox && (n = this._gsapBBox());
            return (
              s && (o ? s.insertBefore(this, o) : s.appendChild(this)),
              r.removeChild(i),
              (this.style.cssText = a),
              n
            );
          },
          V = function (t, e) {
            for (var r = e.length; r--; )
              if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
          },
          W = function (t) {
            var e;
            try {
              e = t.getBBox();
            } catch (r) {
              e = U.call(t, !0);
            }
            return (
              (e && (e.width || e.height)) ||
                t.getBBox === U ||
                (e = U.call(t, !0)),
              !e || e.width || e.x || e.y
                ? e
                : {
                    x: +V(t, ["x", "cx", "x1"]) || 0,
                    y: +V(t, ["y", "cy", "y1"]) || 0,
                    width: 0,
                    height: 0,
                  }
            );
          },
          q = function (t) {
            return !(
              !t.getCTM ||
              (t.parentNode && !t.ownerSVGElement) ||
              !W(t)
            );
          },
          D = function (t, e) {
            if (e) {
              var r = t.style;
              e in c && e !== Y && (e = E),
                r.removeProperty
                  ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
                      (e = "-" + e),
                    r.removeProperty(e.replace(d, "-$1").toLowerCase()))
                  : r.removeAttribute(e);
            }
          },
          j = function (t, e, r, n, i, s) {
            var o = new p.PropTween(t._pt, e, r, 0, 1, s ? M : O);
            return (t._pt = o), (o.b = n), (o.e = i), t._props.push(r), o;
          },
          G = { deg: 1, rad: 1, turn: 1 },
          I = function t(r, n, s, o) {
            var a,
              u,
              l,
              h,
              f = parseFloat(s) || 0,
              g = (s + "").trim().substr((f + "").length) || "px",
              d = i.style,
              m = x.test(n),
              _ = "svg" === r.tagName.toLowerCase(),
              y = (_ ? "client" : "offset") + (m ? "Width" : "Height"),
              v = "px" === o,
              b = "%" === o;
            return o === g || !f || G[o] || G[g]
              ? f
              : ("px" !== g && !v && (f = t(r, n, s, "px")),
                (h = r.getCTM && q(r)),
                b && (c[n] || ~n.indexOf("adius"))
                  ? (0, p._round)(
                      (f / (h ? r.getBBox()[m ? "width" : "height"] : r[y])) *
                        100
                    )
                  : ((d[m ? "width" : "height"] = 100 + (v ? g : o)),
                    (u =
                      ~n.indexOf("adius") || ("em" === o && r.appendChild && !_)
                        ? r
                        : r.parentNode),
                    h && (u = (r.ownerSVGElement || {}).parentNode),
                    (u && u !== e && u.appendChild) || (u = e.body),
                    (l = u._gsap) &&
                    b &&
                    l.width &&
                    m &&
                    l.time === p._ticker.time
                      ? (0, p._round)((f / l.width) * 100)
                      : ((b || "%" === g) && (d.position = X(r, "position")),
                        u === r && (d.position = "static"),
                        u.appendChild(i),
                        (a = i[y]),
                        u.removeChild(i),
                        (d.position = "absolute"),
                        m &&
                          b &&
                          (((l = (0, p._getCache)(u)).time = p._ticker.time),
                          (l.width = u[y])),
                        (0, p._round)(
                          v ? (a * f) / 100 : a && f ? (100 / a) * f : 0
                        ))));
          },
          R = function (t, e, r, i) {
            var s;
            return (
              n || N(),
              e in _ &&
                "transform" !== e &&
                ~(e = _[e]).indexOf(",") &&
                (e = e.split(",")[0]),
              c[e] && "transform" !== e
                ? ((s = it(t, i)),
                  (s =
                    "transformOrigin" !== e
                      ? s[e]
                      : st(X(t, Y)) + " " + s.zOrigin + "px"))
                : (!(s = t.style[e]) ||
                    "auto" === s ||
                    i ||
                    ~(s + "").indexOf("calc(")) &&
                  (s =
                    (J[e] && J[e](t, e, r)) ||
                    X(t, e) ||
                    (0, p._getProperty)(t, e) ||
                    ("opacity" === e ? 1 : 0)),
              r && !~(s + "").indexOf(" ") ? I(t, e, s, r) + r : s
            );
          },
          L = function (t, e, r, n) {
            if (!r || "none" === r) {
              var i = z(e, t, 1),
                s = i && X(t, i, 1);
              s && s !== r
                ? ((e = i), (r = s))
                : "borderColor" === e && (r = X(t, "borderTopColor"));
            }
            var o,
              a,
              u,
              c,
              l,
              h,
              f,
              g,
              d,
              x,
              m,
              _,
              y = new p.PropTween(
                this._pt,
                t.style,
                e,
                0,
                1,
                p._renderComplexString
              ),
              v = 0,
              b = 0;
            if (
              ((y.b = r),
              (y.e = n),
              (r += ""),
              "auto" === (n += "") &&
                ((t.style[e] = n), (n = X(t, e) || n), (t.style[e] = r)),
              (o = [r, n]),
              (0, p._colorStringFilter)(o),
              (n = o[1]),
              (u = (r = o[0]).match(p._numWithUnitExp) || []),
              (n.match(p._numWithUnitExp) || []).length)
            ) {
              for (; (a = p._numWithUnitExp.exec(n)); )
                (f = a[0]),
                  (d = n.substring(v, a.index)),
                  l
                    ? (l = (l + 1) % 5)
                    : ("rgba(" !== d.substr(-5) && "hsla(" !== d.substr(-5)) ||
                      (l = 1),
                  f !== (h = u[b++] || "") &&
                    ((c = parseFloat(h) || 0),
                    (m = h.substr((c + "").length)),
                    (_ = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) &&
                      (f = f.substr(2)),
                    (g = parseFloat(f)),
                    (x = f.substr((g + "").length)),
                    (v = p._numWithUnitExp.lastIndex - x.length),
                    x ||
                      ((x = x || p._config.units[e] || m),
                      v === n.length && ((n += x), (y.e += x))),
                    m !== x && (c = I(t, e, h, x) || 0),
                    (y._pt = {
                      _next: y._pt,
                      p: d || 1 === b ? d : ",",
                      s: c,
                      c: _ ? _ * g : g - c,
                      m: l && l < 4 ? Math.round : 0,
                    }));
              y.c = v < n.length ? n.substring(v, n.length) : "";
            } else y.r = "display" === e && "none" === n ? M : O;
            return p._relExp.test(n) && (y.e = 0), (this._pt = y), y;
          },
          Z = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%",
          },
          H = function (t) {
            var e = t.split(" "),
              r = e[0],
              n = e[1] || "50%";
            return (
              ("top" !== r &&
                "bottom" !== r &&
                "left" !== n &&
                "right" !== n) ||
                ((t = r), (r = n), (n = t)),
              (e[0] = Z[r] || r),
              (e[1] = Z[n] || n),
              e.join(" ")
            );
          },
          $ = function (t, e) {
            if (e.tween && e.tween._time === e.tween._dur) {
              var r,
                n,
                i,
                s = e.t,
                o = s.style,
                a = e.u,
                p = s._gsap;
              if ("all" === a || !0 === a) (o.cssText = ""), (n = 1);
              else
                for (i = (a = a.split(",")).length; --i > -1; )
                  (r = a[i]),
                    c[r] && ((n = 1), (r = "transformOrigin" === r ? Y : E)),
                    D(s, r);
              n &&
                (D(s, E),
                p &&
                  (p.svg && s.removeAttribute("transform"),
                  it(s, 1),
                  (p.uncache = 1)));
            }
          },
          J = {
            clearProps: function (t, e, r, n, i) {
              if ("isFromStart" !== i.data) {
                var s = (t._pt = new p.PropTween(t._pt, e, r, 0, 0, $));
                return (
                  (s.u = n), (s.pr = -10), (s.tween = i), t._props.push(r), 1
                );
              }
            },
          },
          K = [1, 0, 0, 1, 0, 0],
          Q = {},
          tt = function (t) {
            return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
          },
          et = function (t) {
            var e = X(t, E);
            return tt(e) ? K : e.substr(7).match(p._numExp).map(p._round);
          },
          rt = function (t, e) {
            var n,
              i,
              s,
              o,
              a = t._gsap || (0, p._getCache)(t),
              u = t.style,
              c = et(t);
            return a.svg && t.getAttribute("transform")
              ? "1,0,0,1,0,0" ===
                (c = [
                  (s = t.transform.baseVal.consolidate().matrix).a,
                  s.b,
                  s.c,
                  s.d,
                  s.e,
                  s.f,
                ]).join(",")
                ? K
                : c
              : (c !== K ||
                  t.offsetParent ||
                  t === r ||
                  a.svg ||
                  ((s = u.display),
                  (u.display = "block"),
                  ((n = t.parentNode) && t.offsetParent) ||
                    ((o = 1), (i = t.nextSibling), r.appendChild(t)),
                  (c = et(t)),
                  s ? (u.display = s) : D(t, "display"),
                  o &&
                    (i
                      ? n.insertBefore(t, i)
                      : n
                      ? n.appendChild(t)
                      : r.removeChild(t))),
                e && c.length > 6 ? [c[0], c[1], c[4], c[5], c[12], c[13]] : c);
          },
          nt = function (t, e, r, n, i, s) {
            var o,
              a,
              p,
              u = t._gsap,
              c = i || rt(t, !0),
              l = u.xOrigin || 0,
              h = u.yOrigin || 0,
              f = u.xOffset || 0,
              g = u.yOffset || 0,
              d = c[0],
              x = c[1],
              m = c[2],
              _ = c[3],
              y = c[4],
              v = c[5],
              b = e.split(" "),
              w = parseFloat(b[0]) || 0,
              O = parseFloat(b[1]) || 0;
            r
              ? c !== K &&
                (a = d * _ - x * m) &&
                ((p = w * (-x / a) + O * (d / a) - (d * v - x * y) / a),
                (w = w * (_ / a) + O * (-m / a) + (m * v - _ * y) / a),
                (O = p))
              : ((w =
                  (o = W(t)).x +
                  (~b[0].indexOf("%") ? (w / 100) * o.width : w)),
                (O =
                  o.y +
                  (~(b[1] || b[0]).indexOf("%") ? (O / 100) * o.height : O))),
              n || (!1 !== n && u.smooth)
                ? ((y = w - l),
                  (v = O - h),
                  (u.xOffset = f + (y * d + v * m) - y),
                  (u.yOffset = g + (y * x + v * _) - v))
                : (u.xOffset = u.yOffset = 0),
              (u.xOrigin = w),
              (u.yOrigin = O),
              (u.smooth = !!n),
              (u.origin = e),
              (u.originIsAbsolute = !!r),
              (t.style[Y] = "0px 0px"),
              s &&
                (j(s, u, "xOrigin", l, w),
                j(s, u, "yOrigin", h, O),
                j(s, u, "xOffset", f, u.xOffset),
                j(s, u, "yOffset", g, u.yOffset)),
              t.setAttribute("data-svg-origin", w + " " + O);
          },
          it = function (t, e) {
            var r = t._gsap || new p.GSCache(t);
            if ("x" in r && !e && !r.uncache) return r;
            var n,
              i,
              s,
              o,
              u,
              c,
              g,
              d,
              x,
              m,
              _,
              y,
              v,
              b,
              w,
              O,
              M,
              P,
              C,
              B,
              S,
              T,
              F,
              A,
              k,
              z,
              N,
              U,
              V,
              W,
              D,
              j,
              G = t.style,
              I = r.scaleX < 0,
              R = X(t, Y) || "0";
            return (
              (n = i = s = c = g = d = x = m = _ = 0),
              (o = u = 1),
              (r.svg = !(!t.getCTM || !q(t))),
              (b = rt(t, r.svg)),
              r.svg &&
                ((A = !r.uncache && t.getAttribute("data-svg-origin")),
                nt(t, A || R, !!A || r.originIsAbsolute, false, b)),
              (y = r.xOrigin || 0),
              (v = r.yOrigin || 0),
              b !== K &&
                ((P = b[0]),
                (C = b[1]),
                (B = b[2]),
                (S = b[3]),
                (n = T = b[4]),
                (i = F = b[5]),
                6 === b.length
                  ? ((o = Math.sqrt(P * P + C * C)),
                    (u = Math.sqrt(S * S + B * B)),
                    (c = P || C ? f(C, P) * l : 0),
                    (x = B || S ? f(B, S) * l + c : 0) &&
                      (u *= Math.cos(x * h)),
                    r.svg &&
                      ((n -= y - (y * P + v * B)), (i -= v - (y * C + v * S))))
                  : ((j = b[6]),
                    (W = b[7]),
                    (N = b[8]),
                    (U = b[9]),
                    (V = b[10]),
                    (D = b[11]),
                    (n = b[12]),
                    (i = b[13]),
                    (s = b[14]),
                    (g = (w = f(j, V)) * l),
                    w &&
                      ((A = T * (O = Math.cos(-w)) + N * (M = Math.sin(-w))),
                      (k = F * O + U * M),
                      (z = j * O + V * M),
                      (N = T * -M + N * O),
                      (U = F * -M + U * O),
                      (V = j * -M + V * O),
                      (D = W * -M + D * O),
                      (T = A),
                      (F = k),
                      (j = z)),
                    (d = (w = f(-B, V)) * l),
                    w &&
                      ((O = Math.cos(-w)),
                      (D = S * (M = Math.sin(-w)) + D * O),
                      (P = A = P * O - N * M),
                      (C = k = C * O - U * M),
                      (B = z = B * O - V * M)),
                    (c = (w = f(C, P)) * l),
                    w &&
                      ((A = P * (O = Math.cos(w)) + C * (M = Math.sin(w))),
                      (k = T * O + F * M),
                      (C = C * O - P * M),
                      (F = F * O - T * M),
                      (P = A),
                      (T = k)),
                    g &&
                      Math.abs(g) + Math.abs(c) > 359.9 &&
                      ((g = c = 0), (d = 180 - d)),
                    (o = (0, p._round)(Math.sqrt(P * P + C * C + B * B))),
                    (u = (0, p._round)(Math.sqrt(F * F + j * j))),
                    (w = f(T, F)),
                    (x = Math.abs(w) > 2e-4 ? w * l : 0),
                    (_ = D ? 1 / (D < 0 ? -D : D) : 0)),
                r.svg &&
                  ((A = t.getAttribute("transform")),
                  (r.forceCSS =
                    t.setAttribute("transform", "") || !tt(X(t, E))),
                  A && t.setAttribute("transform", A))),
              Math.abs(x) > 90 &&
                Math.abs(x) < 270 &&
                (I
                  ? ((o *= -1),
                    (x += c <= 0 ? 180 : -180),
                    (c += c <= 0 ? 180 : -180))
                  : ((u *= -1), (x += x <= 0 ? 180 : -180))),
              (r.x =
                ((r.xPercent =
                  n && Math.round(t.offsetWidth / 2) === Math.round(-n)
                    ? -50
                    : 0)
                  ? 0
                  : n) + "px"),
              (r.y =
                ((r.yPercent =
                  i && Math.round(t.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)
                  ? 0
                  : i) + "px"),
              (r.z = s + "px"),
              (r.scaleX = (0, p._round)(o)),
              (r.scaleY = (0, p._round)(u)),
              (r.rotation = (0, p._round)(c) + "deg"),
              (r.rotationX = (0, p._round)(g) + "deg"),
              (r.rotationY = (0, p._round)(d) + "deg"),
              (r.skewX = x + "deg"),
              (r.skewY = m + "deg"),
              (r.transformPerspective = _ + "px"),
              (r.zOrigin = parseFloat(R.split(" ")[2]) || 0) && (G[Y] = st(R)),
              (r.xOffset = r.yOffset = 0),
              (r.force3D = p._config.force3D),
              (r.renderTransform = r.svg ? ht : a ? lt : at),
              (r.uncache = 0),
              r
            );
          },
          st = function (t) {
            return (t = t.split(" "))[0] + " " + t[1];
          },
          ot = function (t, e, r) {
            var n = (0, p.getUnit)(e);
            return (
              (0, p._round)(
                parseFloat(e) + parseFloat(I(t, "x", r + "px", n))
              ) + n
            );
          },
          at = function (t, e) {
            (e.z = "0px"),
              (e.rotationY = e.rotationX = "0deg"),
              (e.force3D = 0),
              lt(t, e);
          },
          pt = "0deg",
          ut = "0px",
          ct = ") ",
          lt = function (t, e) {
            var r = e || this,
              n = r.xPercent,
              i = r.yPercent,
              s = r.x,
              o = r.y,
              a = r.z,
              p = r.rotation,
              u = r.rotationY,
              c = r.rotationX,
              l = r.skewX,
              f = r.skewY,
              g = r.scaleX,
              d = r.scaleY,
              x = r.transformPerspective,
              m = r.force3D,
              _ = r.target,
              y = r.zOrigin,
              v = "",
              b = ("auto" === m && t && 1 !== t) || !0 === m;
            if (y && (c !== pt || u !== pt)) {
              var w,
                O = parseFloat(u) * h,
                M = Math.sin(O),
                P = Math.cos(O);
              (O = parseFloat(c) * h),
                (w = Math.cos(O)),
                (s = ot(_, s, M * w * -y)),
                (o = ot(_, o, -Math.sin(O) * -y)),
                (a = ot(_, a, P * w * -y + y));
            }
            x !== ut && (v += "perspective(" + x + ct),
              (n || i) && (v += "translate(" + n + "%, " + i + "%) "),
              (b || s !== ut || o !== ut || a !== ut) &&
                (v +=
                  a !== ut || b
                    ? "translate3d(" + s + ", " + o + ", " + a + ") "
                    : "translate(" + s + ", " + o + ct),
              p !== pt && (v += "rotate(" + p + ct),
              u !== pt && (v += "rotateY(" + u + ct),
              c !== pt && (v += "rotateX(" + c + ct),
              (l === pt && f === pt) || (v += "skew(" + l + ", " + f + ct),
              (1 === g && 1 === d) || (v += "scale(" + g + ", " + d + ct),
              (_.style[E] = v || "translate(0, 0)");
          },
          ht = function (t, e) {
            var r,
              n,
              i,
              s,
              o,
              a = e || this,
              u = a.xPercent,
              c = a.yPercent,
              l = a.x,
              f = a.y,
              g = a.rotation,
              d = a.skewX,
              x = a.skewY,
              m = a.scaleX,
              _ = a.scaleY,
              y = a.target,
              v = a.xOrigin,
              b = a.yOrigin,
              w = a.xOffset,
              O = a.yOffset,
              M = a.forceCSS,
              P = parseFloat(l),
              C = parseFloat(f);
            (g = parseFloat(g)),
              (d = parseFloat(d)),
              (x = parseFloat(x)) && ((d += x = parseFloat(x)), (g += x)),
              g || d
                ? ((g *= h),
                  (d *= h),
                  (r = Math.cos(g) * m),
                  (n = Math.sin(g) * m),
                  (i = Math.sin(g - d) * -_),
                  (s = Math.cos(g - d) * _),
                  d &&
                    ((x *= h),
                    (o = Math.tan(d - x)),
                    (i *= o = Math.sqrt(1 + o * o)),
                    (s *= o),
                    x &&
                      ((o = Math.tan(x)),
                      (r *= o = Math.sqrt(1 + o * o)),
                      (n *= o))),
                  (r = (0, p._round)(r)),
                  (n = (0, p._round)(n)),
                  (i = (0, p._round)(i)),
                  (s = (0, p._round)(s)))
                : ((r = m), (s = _), (n = i = 0)),
              ((P && !~(l + "").indexOf("px")) ||
                (C && !~(f + "").indexOf("px"))) &&
                ((P = I(y, "x", l, "px")), (C = I(y, "y", f, "px"))),
              (v || b || w || O) &&
                ((P = (0, p._round)(P + v - (v * r + b * i) + w)),
                (C = (0, p._round)(C + b - (v * n + b * s) + O))),
              (u || c) &&
                ((o = y.getBBox()),
                (P = (0, p._round)(P + (u / 100) * o.width)),
                (C = (0, p._round)(C + (c / 100) * o.height))),
              (o =
                "matrix(" +
                r +
                "," +
                n +
                "," +
                i +
                "," +
                s +
                "," +
                P +
                "," +
                C +
                ")"),
              y.setAttribute("transform", o),
              M && (y.style[E] = o);
          },
          ft = function (t, e, r, n, i, s) {
            var o,
              a,
              u = (0, p._isString)(i),
              c = parseFloat(i) * (u && ~i.indexOf("rad") ? l : 1),
              h = s ? c * s : c - n,
              f = n + h + "deg";
            return (
              u &&
                ("short" === (o = i.split("_")[1]) &&
                  (h %= 360) !== h % 180 &&
                  (h += h < 0 ? 360 : -360),
                "cw" === o && h < 0
                  ? (h = ((h + 360 * g) % 360) - 360 * ~~(h / 360))
                  : "ccw" === o &&
                    h > 0 &&
                    (h = ((h - 360 * g) % 360) - 360 * ~~(h / 360))),
              (t._pt = a = new p.PropTween(t._pt, e, r, n, h, v)),
              (a.e = f),
              (a.u = "deg"),
              t._props.push(r),
              a
            );
          },
          gt = function (t, r, n) {
            var i,
              o,
              a,
              u,
              l,
              h,
              f,
              g = s.style,
              d = n._gsap;
            for (o in ((g.cssText =
              getComputedStyle(n).cssText +
              ";position:absolute;display:block;"),
            (g[E] = r),
            e.body.appendChild(s),
            (i = it(s, 1)),
            c))
              (a = d[o]) !== (u = i[o]) &&
                "perspective,force3D,transformOrigin,svgOrigin".indexOf(o) <
                  0 &&
                ((l =
                  (0, p.getUnit)(a) !== (f = (0, p.getUnit)(u))
                    ? I(n, o, a, f)
                    : parseFloat(a)),
                (h = parseFloat(u)),
                (t._pt = new p.PropTween(t._pt, d, o, l, h - l, y)),
                (t._pt.u = f || 0),
                t._props.push(o));
            e.body.removeChild(s);
          };
        (exports._getBBox = W),
          (exports.checkPrefix = z),
          (exports._createElement = A),
          (0, p._forEachName)("padding,margin,Width,Radius", function (t, e) {
            var r = "Top",
              n = "Right",
              i = "Bottom",
              s = "Left",
              o = (e < 3 ? [r, n, i, s] : [r + s, r + n, i + n, i + s]).map(
                function (r) {
                  return e < 2 ? t + r : "border" + r + t;
                }
              );
            J[e > 1 ? "border" + t : t] = function (t, e, r, n, i) {
              var s, a;
              if (arguments.length < 4)
                return (
                  (s = o.map(function (e) {
                    return R(t, e, r);
                  })),
                  5 === (a = s.join(" ")).split(s[0]).length ? s[0] : a
                );
              (s = (n + "").split(" ")),
                (a = {}),
                o.forEach(function (t, e) {
                  return (a[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
                }),
                t.init(e, a, i);
            };
          });
        var dt = {
          name: "css",
          register: N,
          targetTest: function (t) {
            return t.style && t.nodeType;
          },
          init: function (t, e, r, i, s) {
            var o,
              a,
              u,
              l,
              h,
              f,
              g,
              d,
              x,
              v,
              O,
              M,
              P,
              C,
              B,
              S = this._props,
              T = t.style;
            for (g in (n || N(), e))
              if (
                "autoRound" !== g &&
                ((a = e[g]),
                !p._plugins[g] || !(0, p._checkPlugin)(g, e, r, i, t, s))
              )
                if (
                  ((h = typeof a),
                  (f = J[g]),
                  "function" === h && (h = typeof (a = a.call(r, i, t, s))),
                  "string" === h &&
                    ~a.indexOf("random(") &&
                    (a = (0, p._replaceRandom)(a)),
                  f)
                )
                  f(this, t, g, a, r) && (B = 1);
                else if ("--" === g.substr(0, 2))
                  this.add(
                    T,
                    "setProperty",
                    getComputedStyle(t).getPropertyValue(g) + "",
                    a + "",
                    i,
                    s,
                    0,
                    0,
                    g
                  );
                else {
                  if (
                    ((o = R(t, g)),
                    (l = parseFloat(o)),
                    (v =
                      "string" === h && "=" === a.charAt(1)
                        ? +(a.charAt(0) + "1")
                        : 0) && (a = a.substr(2)),
                    (u = parseFloat(a)),
                    g in _ &&
                      ("autoAlpha" === g &&
                        (1 === l &&
                          "hidden" === R(t, "visibility") &&
                          u &&
                          (l = 0),
                        j(
                          this,
                          T,
                          "visibility",
                          l ? "inherit" : "hidden",
                          u ? "inherit" : "hidden",
                          !u
                        )),
                      "scale" !== g &&
                        "transform" !== g &&
                        ~(g = _[g]).indexOf(",") &&
                        (g = g.split(",")[0])),
                    (O = g in c))
                  )
                    if (
                      (M ||
                        ((P = t._gsap).renderTransform || it(t),
                        (C = false),
                        ((M = this._pt =
                          new p.PropTween(
                            this._pt,
                            T,
                            E,
                            0,
                            1,
                            P.renderTransform,
                            P,
                            0,
                            -1
                          )).dep = 1)),
                      "scale" === g)
                    )
                      (this._pt = new p.PropTween(
                        this._pt,
                        P,
                        "scaleY",
                        P.scaleY,
                        v ? v * u : u - P.scaleY
                      )),
                        S.push("scaleY", g),
                        (g += "X");
                    else {
                      if ("transformOrigin" === g) {
                        (a = H(a)),
                          P.svg
                            ? nt(t, a, 0, C, 0, this)
                            : ((x = parseFloat(a.split(" ")[2]) || 0) !==
                                P.zOrigin &&
                                j(this, P, "zOrigin", P.zOrigin, x),
                              j(this, T, g, st(o), st(a)));
                        continue;
                      }
                      if ("svgOrigin" === g) {
                        nt(t, a, 1, C, 0, this);
                        continue;
                      }
                      if (g in Q) {
                        ft(this, P, g, l, a, v);
                        continue;
                      }
                      if ("smoothOrigin" === g) {
                        j(this, P, "smooth", false, a);
                        continue;
                      }
                      if ("force3D" === g) {
                        P[g] = a;
                        continue;
                      }
                      if ("transform" === g) {
                        gt(this, a, t);
                        continue;
                      }
                    }
                  else g in T || (g = z(g) || g);
                  if (
                    O ||
                    ((u || 0 === u) && (l || 0 === l) && !m.test(a) && g in T)
                  )
                    u || (u = 0),
                      (d = (o + "").substr((l + "").length)) !==
                        (x =
                          (a + "").substr((u + "").length) ||
                          (g in p._config.units ? p._config.units[g] : d)) &&
                        (l = I(t, g, o, x)),
                      (this._pt = new p.PropTween(
                        this._pt,
                        O ? P : T,
                        g,
                        l,
                        v ? v * u : u - l,
                        "px" !== x || !1 === e.autoRound || O ? y : w
                      )),
                      (this._pt.u = x || 0),
                      d !== x && ((this._pt.b = o), (this._pt.r = b));
                  else if (g in T) L.call(this, t, g, o, a);
                  else {
                    if (!(g in t)) {
                      (0, p._missingPlugin)(g, a);
                      continue;
                    }
                    this.add(t, g, t[g], a, i, s);
                  }
                  S.push(g);
                }
            B && (0, p._sortPropTweensByPriority)(this);
          },
          get: R,
          aliases: _,
          getSetter: function (t, e, r) {
            var n = _[e];
            return (
              n && n.indexOf(",") < 0 && (e = n),
              e in c && e !== Y && (t._gsap.x || R(t, "x"))
                ? r && o === r
                  ? "scale" === e
                    ? S
                    : B
                  : (o = r || {}) && ("scale" === e ? T : F)
                : t.style && !(0, p._isUndefined)(t.style[e])
                ? P
                : ~e.indexOf("-")
                ? C
                : (0, p._getSetter)(t, e)
            );
          },
          core: { _removeProperty: D, _getMatrix: rt },
        };
        (exports.default = exports.CSSPlugin = dt),
          (p.gsap.utils.checkPrefix = z),
          (function (t, e, r, n) {
            var i = (0, p._forEachName)(
              "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," +
                e +
                ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
              function (t) {
                c[t] = 1;
              }
            );
            (0, p._forEachName)(e, function (t) {
              (p._config.units[t] = "deg"), (Q[t] = 1);
            }),
              (_[i[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + e),
              (0, p._forEachName)(
                "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
                function (t) {
                  var e = t.split(":");
                  _[e[1]] = i[e[0]];
                }
              );
          })(0, "rotation,rotationX,rotationY,skewX,skewY"),
          (0, p._forEachName)(
            "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
            function (t) {
              p._config.units[t] = "px";
            }
          ),
          p.gsap.registerPlugin(dt);
      },
      { "./gsap-core.js": "TNS6" },
    ],
    TpQl: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          Object.defineProperty(exports, "Back", {
            enumerable: !0,
            get: function () {
              return e.Back;
            },
          }),
          Object.defineProperty(exports, "Bounce", {
            enumerable: !0,
            get: function () {
              return e.Bounce;
            },
          }),
          Object.defineProperty(exports, "CSSPlugin", {
            enumerable: !0,
            get: function () {
              return r.CSSPlugin;
            },
          }),
          Object.defineProperty(exports, "Circ", {
            enumerable: !0,
            get: function () {
              return e.Circ;
            },
          }),
          Object.defineProperty(exports, "Cubic", {
            enumerable: !0,
            get: function () {
              return e.Cubic;
            },
          }),
          Object.defineProperty(exports, "Elastic", {
            enumerable: !0,
            get: function () {
              return e.Elastic;
            },
          }),
          Object.defineProperty(exports, "Expo", {
            enumerable: !0,
            get: function () {
              return e.Expo;
            },
          }),
          Object.defineProperty(exports, "Linear", {
            enumerable: !0,
            get: function () {
              return e.Linear;
            },
          }),
          Object.defineProperty(exports, "Power0", {
            enumerable: !0,
            get: function () {
              return e.Power0;
            },
          }),
          Object.defineProperty(exports, "Power1", {
            enumerable: !0,
            get: function () {
              return e.Power1;
            },
          }),
          Object.defineProperty(exports, "Power2", {
            enumerable: !0,
            get: function () {
              return e.Power2;
            },
          }),
          Object.defineProperty(exports, "Power3", {
            enumerable: !0,
            get: function () {
              return e.Power3;
            },
          }),
          Object.defineProperty(exports, "Power4", {
            enumerable: !0,
            get: function () {
              return e.Power4;
            },
          }),
          Object.defineProperty(exports, "Quad", {
            enumerable: !0,
            get: function () {
              return e.Quad;
            },
          }),
          Object.defineProperty(exports, "Quart", {
            enumerable: !0,
            get: function () {
              return e.Quart;
            },
          }),
          Object.defineProperty(exports, "Quint", {
            enumerable: !0,
            get: function () {
              return e.Quint;
            },
          }),
          Object.defineProperty(exports, "Sine", {
            enumerable: !0,
            get: function () {
              return e.Sine;
            },
          }),
          Object.defineProperty(exports, "SteppedEase", {
            enumerable: !0,
            get: function () {
              return e.SteppedEase;
            },
          }),
          Object.defineProperty(exports, "Strong", {
            enumerable: !0,
            get: function () {
              return e.Strong;
            },
          }),
          Object.defineProperty(exports, "TimelineLite", {
            enumerable: !0,
            get: function () {
              return e.TimelineLite;
            },
          }),
          Object.defineProperty(exports, "TimelineMax", {
            enumerable: !0,
            get: function () {
              return e.TimelineMax;
            },
          }),
          Object.defineProperty(exports, "TweenLite", {
            enumerable: !0,
            get: function () {
              return e.TweenLite;
            },
          }),
          (exports.gsap = exports.default = exports.TweenMax = void 0);
        var e = require("./gsap-core.js"),
          r = require("./CSSPlugin.js"),
          t = e.gsap.registerPlugin(r.CSSPlugin) || e.gsap,
          n = t.core.Tween;
        (exports.TweenMax = n), (exports.default = exports.gsap = t);
      },
      { "./gsap-core.js": "TNS6", "./CSSPlugin.js": "bp4Z" },
    ],
    aDqt: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.emojiExp = void 0),
          (exports.emojiSafeSplit = E),
          (exports.getText = F),
          (exports.splitInnerHTML = C);
        var D = /(^\s+|\s+$)/g,
          u =
            /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
        function F(D) {
          var u = D.nodeType,
            C = "";
          if (1 === u || 9 === u || 11 === u) {
            if ("string" == typeof D.textContent) return D.textContent;
            for (D = D.firstChild; D; D = D.nextSibling) C += F(D);
          } else if (3 === u || 4 === u) return D.nodeValue;
          return C;
        }
        function C(D, u, F) {
          for (var C = D.firstChild, B = []; C; )
            3 === C.nodeType
              ? B.push.apply(
                  B,
                  E(
                    (C.nodeValue + "")
                      .replace(/^\n+/g, "")
                      .replace(/\s+/g, " "),
                    u,
                    F
                  )
                )
              : "br" === (C.nodeName + "").toLowerCase()
              ? (B[B.length - 1] += "<br>")
              : B.push(C.outerHTML),
              (C = C.nextSibling);
          return B;
        }
        function E(F, C, E) {
          if (((F += ""), E && (F = F.replace(D, "")), C && "" !== C))
            return F.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(C);
          for (var B, A, e = [], t = F.length, r = 0; r < t; r++)
            (((A = F.charAt(r)).charCodeAt(0) >= 55296 &&
              A.charCodeAt(0) <= 56319) ||
              (F.charCodeAt(r + 1) >= 65024 && F.charCodeAt(r + 1) <= 65039)) &&
              ((B = ((F.substr(r, 12).split(u) || [])[1] || "").length || 2),
              (A = F.substr(r, B)),
              (e.emoji = 1),
              (r += B - 1)),
              e.push(">" === A ? "&gt;" : "<" === A ? "&lt;" : A);
          return e;
        }
        exports.emojiExp = u;
      },
      {},
    ],
    BtuU: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = exports.SplitText = void 0);
        var e,
          t,
          i,
          n = require("./utils/strings.js"),
          s = /(?:\r|\n|\t\t)/g,
          r = /(?:\s\s+)/g,
          l = function () {
            (e = document), (t = window), (i = 1);
          },
          o = 1,
          a = function (e) {
            return t.getComputedStyle(e);
          },
          p = Array.isArray,
          d = [].slice,
          h = function (t, i) {
            var n;
            return p(t)
              ? t
              : "string" == (n = typeof t) && !i && t
              ? d.call(e.querySelectorAll(t), 0)
              : t && "object" === n && "length" in t
              ? d.call(t, 0)
              : t
              ? [t]
              : [];
          },
          f = function (e) {
            return "absolute" === e.position || !0 === e.absolute;
          },
          c = function (e, t) {
            for (var i, n = t.length; --n > -1; )
              if (((i = t[n]), e.substr(0, i.length) === i)) return i.length;
          },
          u = " style='position:relative;display:inline-block;'",
          g = function (e, t) {
            void 0 === e && (e = "");
            var i = ~e.indexOf("++"),
              n = 1;
            return (
              i && (e = e.split("++").join("")),
              function () {
                return (
                  "<" +
                  t +
                  u +
                  (e ? " class='" + e + (i ? n++ : "") + "'>" : ">")
                );
              }
            );
          },
          x = function e(t, i, n) {
            var s = t.nodeType;
            if (1 === s || 9 === s || 11 === s)
              for (t = t.firstChild; t; t = t.nextSibling) e(t, i, n);
            else
              (3 !== s && 4 !== s) ||
                (t.nodeValue = t.nodeValue.split(i).join(n));
          },
          y = function (e, t) {
            for (var i = t.length; --i > -1; ) e.push(t[i]);
          },
          v = function (e, t, i) {
            for (var n; e && e !== t; ) {
              if ((n = e._next || e.nextSibling))
                return n.textContent.charAt(0) === i;
              e = e.parentNode || e._parent;
            }
          },
          _ = function e(t) {
            var i,
              n,
              s = h(t.childNodes),
              r = s.length;
            for (i = 0; i < r; i++)
              (n = s[i])._isSplit
                ? e(n)
                : (i && 3 === n.previousSibling.nodeType
                    ? (n.previousSibling.nodeValue +=
                        3 === n.nodeType ? n.nodeValue : n.firstChild.nodeValue)
                    : 3 !== n.nodeType && t.insertBefore(n.firstChild, n),
                  t.removeChild(n));
          },
          b = function (e, t) {
            return parseFloat(t[e]) || 0;
          },
          C = function (t, i, n, s, r, l, o) {
            var p,
              d,
              h,
              c,
              u,
              g,
              C,
              S,
              N,
              m,
              T,
              w,
              L = a(t),
              A = b("paddingLeft", L),
              B = -999,
              W = b("borderBottomWidth", L) + b("borderTopWidth", L),
              H = b("borderLeftWidth", L) + b("borderRightWidth", L),
              j = b("paddingTop", L) + b("paddingBottom", L),
              E = b("paddingLeft", L) + b("paddingRight", L),
              O = 0.2 * b("fontSize", L),
              M = L.textAlign,
              R = [],
              V = [],
              k = [],
              F = i.wordDelimiter || " ",
              q = i.tag ? i.tag : i.span ? "span" : "div",
              D = i.type || i.split || "chars,words,lines",
              P = r && ~D.indexOf("lines") ? [] : null,
              z = ~D.indexOf("words"),
              G = ~D.indexOf("chars"),
              I = f(i),
              J = i.linesClass,
              K = ~(J || "").indexOf("++"),
              Q = [];
            for (
              K && (J = J.split("++").join("")),
                h = (d = t.getElementsByTagName("*")).length,
                u = [],
                p = 0;
              p < h;
              p++
            )
              u[p] = d[p];
            if (P || I)
              for (p = 0; p < h; p++)
                ((g = (c = u[p]).parentNode === t) || I || (G && !z)) &&
                  ((w = c.offsetTop),
                  P &&
                    g &&
                    Math.abs(w - B) > O &&
                    ("BR" !== c.nodeName || 0 === p) &&
                    ((C = []), P.push(C), (B = w)),
                  I &&
                    ((c._x = c.offsetLeft),
                    (c._y = w),
                    (c._w = c.offsetWidth),
                    (c._h = c.offsetHeight)),
                  P &&
                    (((c._isSplit && g) ||
                      (!G && g) ||
                      (z && g) ||
                      (!z &&
                        c.parentNode.parentNode === t &&
                        !c.parentNode._isSplit)) &&
                      (C.push(c), (c._x -= A), v(c, t, F) && (c._wordEnd = !0)),
                    "BR" === c.nodeName &&
                      ((c.nextSibling && "BR" === c.nextSibling.nodeName) ||
                        0 === p) &&
                      P.push([])));
            for (p = 0; p < h; p++)
              (g = (c = u[p]).parentNode === t),
                "BR" !== c.nodeName
                  ? (I &&
                      ((N = c.style),
                      z ||
                        g ||
                        ((c._x += c.parentNode._x), (c._y += c.parentNode._y)),
                      (N.left = c._x + "px"),
                      (N.top = c._y + "px"),
                      (N.position = "absolute"),
                      (N.display = "block"),
                      (N.width = c._w + 1 + "px"),
                      (N.height = c._h + "px")),
                    !z && G
                      ? c._isSplit
                        ? ((c._next = c.nextSibling),
                          c.parentNode.appendChild(c))
                        : c.parentNode._isSplit
                        ? ((c._parent = c.parentNode),
                          !c.previousSibling &&
                            c.firstChild &&
                            (c.firstChild._isFirst = !0),
                          c.nextSibling &&
                            " " === c.nextSibling.textContent &&
                            !c.nextSibling.nextSibling &&
                            Q.push(c.nextSibling),
                          (c._next =
                            c.nextSibling && c.nextSibling._isFirst
                              ? null
                              : c.nextSibling),
                          c.parentNode.removeChild(c),
                          u.splice(p--, 1),
                          h--)
                        : g ||
                          ((w = !c.nextSibling && v(c.parentNode, t, F)),
                          c.parentNode._parent &&
                            c.parentNode._parent.appendChild(c),
                          w && c.parentNode.appendChild(e.createTextNode(" ")),
                          "span" === q && (c.style.display = "inline"),
                          R.push(c))
                      : c.parentNode._isSplit &&
                        !c._isSplit &&
                        "" !== c.innerHTML
                      ? V.push(c)
                      : G &&
                        !c._isSplit &&
                        ("span" === q && (c.style.display = "inline"),
                        R.push(c)))
                  : P || I
                  ? (c.parentNode && c.parentNode.removeChild(c),
                    u.splice(p--, 1),
                    h--)
                  : z || t.appendChild(c);
            for (p = Q.length; --p > -1; ) Q[p].parentNode.removeChild(Q[p]);
            if (P) {
              for (
                I &&
                  ((m = e.createElement(q)),
                  t.appendChild(m),
                  (T = m.offsetWidth + "px"),
                  (w = m.offsetParent === t ? 0 : t.offsetLeft),
                  t.removeChild(m)),
                  N = t.style.cssText,
                  t.style.cssText = "display:none;";
                t.firstChild;

              )
                t.removeChild(t.firstChild);
              for (
                S = " " === F && (!I || (!z && !G)), p = 0;
                p < P.length;
                p++
              ) {
                for (
                  C = P[p],
                    (m = e.createElement(q)).style.cssText =
                      "display:block;text-align:" +
                      M +
                      ";position:" +
                      (I ? "absolute;" : "relative;"),
                    J && (m.className = J + (K ? p + 1 : "")),
                    k.push(m),
                    h = C.length,
                    d = 0;
                  d < h;
                  d++
                )
                  "BR" !== C[d].nodeName &&
                    ((c = C[d]),
                    m.appendChild(c),
                    S && c._wordEnd && m.appendChild(e.createTextNode(" ")),
                    I &&
                      (0 === d &&
                        ((m.style.top = c._y + "px"),
                        (m.style.left = A + w + "px")),
                      (c.style.top = "0px"),
                      w && (c.style.left = c._x - w + "px")));
                0 === h
                  ? (m.innerHTML = "&nbsp;")
                  : z || G || (_(m), x(m, String.fromCharCode(160), " ")),
                  I && ((m.style.width = T), (m.style.height = c._h + "px")),
                  t.appendChild(m);
              }
              t.style.cssText = N;
            }
            I &&
              (o > t.clientHeight &&
                ((t.style.height = o - j + "px"),
                t.clientHeight < o && (t.style.height = o + W + "px")),
              l > t.clientWidth &&
                ((t.style.width = l - E + "px"),
                t.clientWidth < l && (t.style.width = l + H + "px"))),
              y(n, R),
              z && y(s, V),
              y(r, k);
          },
          S = function (t, i, l, o) {
            var a,
              p,
              d,
              h,
              u,
              g,
              y,
              v,
              _ = i.tag ? i.tag : i.span ? "span" : "div",
              b = ~(i.type || i.split || "chars,words,lines").indexOf("chars"),
              C = f(i),
              S = i.wordDelimiter || " ",
              N = " " !== S ? "" : C ? "&#173; " : " ",
              m = "</" + _ + ">",
              T = 1,
              w = i.specialChars
                ? "function" == typeof i.specialChars
                  ? i.specialChars
                  : c
                : null,
              L = e.createElement("div"),
              A = t.parentNode;
            for (
              A.insertBefore(L, t),
                L.textContent = t.nodeValue,
                A.removeChild(t),
                t = L,
                y = -1 !== (a = (0, n.getText)(t)).indexOf("<"),
                !1 !== i.reduceWhiteSpace &&
                  (a = a.replace(r, " ").replace(s, "")),
                y && (a = a.split("<").join("{{LT}}")),
                u = a.length,
                p = (" " === a.charAt(0) ? N : "") + l(),
                d = 0;
              d < u;
              d++
            )
              if (
                ((g = a.charAt(d)), w && (v = w(a.substr(d), i.specialChars)))
              )
                (g = a.substr(d, v || 1)),
                  (p += b && " " !== g ? o() + g + "</" + _ + ">" : g),
                  (d += v - 1);
              else if (g === S && a.charAt(d - 1) !== S && d) {
                for (p += T ? m : "", T = 0; a.charAt(d + 1) === S; )
                  (p += N), d++;
                d === u - 1
                  ? (p += N)
                  : ")" !== a.charAt(d + 1) && ((p += N + l()), (T = 1));
              } else
                "{" === g && "{{LT}}" === a.substr(d, 6)
                  ? ((p += b ? o() + "{{LT}}</" + _ + ">" : "{{LT}}"), (d += 5))
                  : (g.charCodeAt(0) >= 55296 && g.charCodeAt(0) <= 56319) ||
                    (a.charCodeAt(d + 1) >= 65024 &&
                      a.charCodeAt(d + 1) <= 65039)
                  ? ((h =
                      ((a.substr(d, 12).split(n.emojiExp) || [])[1] || "")
                        .length || 2),
                    (p +=
                      b && " " !== g
                        ? o() + a.substr(d, h) + "</" + _ + ">"
                        : a.substr(d, h)),
                    (d += h - 1))
                  : (p += b && " " !== g ? o() + g + "</" + _ + ">" : g);
            (t.outerHTML = p + (T ? m : "")), y && x(A, "{{LT}}", "<");
          },
          N = function e(t, i, n, s) {
            var r,
              l,
              o = h(t.childNodes),
              p = o.length,
              d = f(i);
            if (3 !== t.nodeType || p > 1) {
              for (i.absolute = !1, r = 0; r < p; r++)
                (3 !== (l = o[r]).nodeType || /\S+/.test(l.nodeValue)) &&
                  (d &&
                    3 !== l.nodeType &&
                    "inline" === a(l).display &&
                    ((l.style.display = "inline-block"),
                    (l.style.position = "relative")),
                  (l._isSplit = !0),
                  e(l, i, n, s));
              return (i.absolute = d), void (t._isSplit = !0);
            }
            S(t, i, n, s);
          },
          m = (function () {
            function e(e, t) {
              i || l(),
                (this.elements = h(e)),
                (this.chars = []),
                (this.words = []),
                (this.lines = []),
                (this._originals = []),
                (this.vars = t || {}),
                o && this.split(t);
            }
            var t = e.prototype;
            return (
              (t.split = function (e) {
                this.isSplit && this.revert(),
                  (this.vars = e = e || this.vars),
                  (this._originals.length =
                    this.chars.length =
                    this.words.length =
                    this.lines.length =
                      0);
                for (
                  var t,
                    i,
                    n,
                    s = this.elements.length,
                    r = e.tag ? e.tag : e.span ? "span" : "div",
                    l = g(e.wordsClass, r),
                    o = g(e.charsClass, r);
                  --s > -1;

                )
                  (n = this.elements[s]),
                    (this._originals[s] = n.innerHTML),
                    (t = n.clientHeight),
                    (i = n.clientWidth),
                    N(n, e, l, o),
                    C(n, e, this.chars, this.words, this.lines, i, t);
                return (
                  this.chars.reverse(),
                  this.words.reverse(),
                  this.lines.reverse(),
                  (this.isSplit = !0),
                  this
                );
              }),
              (t.revert = function () {
                var e = this._originals;
                if (!e) throw "revert() call wasn't scoped properly.";
                return (
                  this.elements.forEach(function (t, i) {
                    return (t.innerHTML = e[i]);
                  }),
                  (this.chars = []),
                  (this.words = []),
                  (this.lines = []),
                  (this.isSplit = !1),
                  this
                );
              }),
              (e.create = function (t, i) {
                return new e(t, i);
              }),
              e
            );
          })();
        (exports.default = exports.SplitText = m), (m.version = "3.4.0");
      },
      { "./utils/strings.js": "aDqt" },
    ],
    rpdK: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.startTextSplitting = r);
        var e = require("gsap"),
          t = require("gsap/SplitText");
        function r() {
          e.gsap.registerPlugin(t.SplitText);
          var r = e.gsap.timeline(),
            i = new t.SplitText("#navigation", { type: "words" });
          r.staggerFrom(
            i.words,
            0.5,
            { ease: "Power3.easeOut", y: "-100%", opacity: 0, delay: 1.5 },
            0.014
          );
        }
      },
      { gsap: "TpQl", "gsap/SplitText": "BtuU" },
    ],
    kNuC: [
      function (require, module, exports) {
        module.exports = "/placemark.86989d0a.png";
      },
      {},
    ],
    IImt: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.startInteractiveMap = a);
        var e = t(require("../../assets/images/placemark.png"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function a() {
          !(function () {
            var e = document.querySelector(".contacts__interactive-map");
            function t(e) {
              e.preventDefault(), e.stopPropagation();
            }
            e.addEventListener("mouseenter", function () {
              document.addEventListener("wheel", t, { passive: !1 });
            }),
              e.addEventListener("mouseleave", function () {
                document.removeEventListener("wheel", t);
              });
          })(),
            ymaps.ready(function () {
              var t = new ymaps.Map(
                  "map",
                  { center: [55.754654, 37.637775], zoom: 18 },
                  { searchControlProvider: "yandex#search" }
                ),
                a =
                  (ymaps.templateLayoutFactory.createClass(
                    '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
                  ),
                  new ymaps.Placemark(
                    t.getCenter(),
                    {},
                    {
                      iconLayout: "default#image",
                      iconImageHref: e.default,
                      iconImageSize: [118, 89],
                      iconImageOffset: [-45, -100],
                    }
                  ));
              t.geoObjects.add(a);
            });
        }
      },
      { "../../assets/images/placemark.png": "kNuC" },
    ],
    FheM: [
      function (require, module, exports) {
        var t = null;
        function e() {
          return t || (t = n()), t;
        }
        function n() {
          try {
            throw new Error();
          } catch (e) {
            var t = ("" + e.stack).match(
              /(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g
            );
            if (t) return r(t[0]);
          }
          return "/";
        }
        function r(t) {
          return (
            ("" + t).replace(
              /^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/,
              "$1"
            ) + "/"
          );
        }
        (exports.getBundleURL = e), (exports.getBaseURL = r);
      },
      {},
    ],
    TUK3: [
      function (require, module, exports) {
        var r = require("./bundle-url").getBundleURL;
        function e(r) {
          Array.isArray(r) || (r = [r]);
          var e = r[r.length - 1];
          try {
            return Promise.resolve(require(e));
          } catch (n) {
            if ("MODULE_NOT_FOUND" === n.code)
              return new s(function (n, i) {
                t(r.slice(0, -1))
                  .then(function () {
                    return require(e);
                  })
                  .then(n, i);
              });
            throw n;
          }
        }
        function t(r) {
          return Promise.all(r.map(u));
        }
        var n = {};
        function i(r, e) {
          n[r] = e;
        }
        (module.exports = exports = e),
          (exports.load = t),
          (exports.register = i);
        var o = {};
        function u(e) {
          var t;
          if ((Array.isArray(e) && ((t = e[1]), (e = e[0])), o[e])) return o[e];
          var i = (
              e.substring(e.lastIndexOf(".") + 1, e.length) || e
            ).toLowerCase(),
            u = n[i];
          return u
            ? (o[e] = u(r() + e)
                .then(function (r) {
                  return r && module.bundle.register(t, r), r;
                })
                .catch(function (r) {
                  throw (delete o[e], r);
                }))
            : void 0;
        }
        function s(r) {
          (this.executor = r), (this.promise = null);
        }
        (s.prototype.then = function (r, e) {
          return (
            null === this.promise &&
              (this.promise = new Promise(this.executor)),
            this.promise.then(r, e)
          );
        }),
          (s.prototype.catch = function (r) {
            return (
              null === this.promise &&
                (this.promise = new Promise(this.executor)),
              this.promise.catch(r)
            );
          });
      },
      { "./bundle-url": "FheM" },
    ],
    Focm: [
      function (require, module, exports) {
        "use strict";
        var t = require("./components/animation/lottie"),
          e = require("./components/animation/split-text"),
          n = require("./components/map/map"),
          i = window.matchMedia("(min-width: 769px)");
        (0, e.startTextSplitting)(),
          (0, t.startLottieAnimation)(),
          i.matches &&
            (require("_bundle_loader")(
              require.resolve("./components/animation/scrooth")
            ).then(function (t) {
              t.startSmoothScroll();
            }),
            require("_bundle_loader")(
              require.resolve("./components/animation/gallery")
            ).then(function (t) {
              t.startGalleryAnimation();
            }),
            require("_bundle_loader")(
              require.resolve("./components/animation/letters")
            ).then(function (t) {
              t.startLettersAnimation();
            })),
          (0, n.startInteractiveMap)();
      },
      {
        "./components/animation/lottie": "B3Ay",
        "./components/animation/split-text": "rpdK",
        "./components/map/map": "IImt",
        _bundle_loader: "TUK3",
        "./components/animation/scrooth": [
          ["scrooth.3aaab745.js", "AIVU"],
          "scrooth.3aaab745.js.map",
          "AIVU",
        ],
        "./components/animation/gallery": [
          ["gallery.caceafe2.js", "mZrh"],
          "gallery.caceafe2.js.map",
          "mZrh",
        ],
        "./components/animation/letters": [
          ["letters.2ee462f5.js", "nhcI"],
          "letters.2ee462f5.js.map",
          "nhcI",
        ],
      },
    ],
    Yi9z: [
      function (require, module, exports) {
        module.exports = function (n) {
          return new Promise(function (e, o) {
            var r = document.createElement("script");
            (r.async = !0),
              (r.type = "text/javascript"),
              (r.charset = "utf-8"),
              (r.src = n),
              (r.onerror = function (n) {
                (r.onerror = r.onload = null), o(n);
              }),
              (r.onload = function () {
                (r.onerror = r.onload = null), e();
              }),
              document.getElementsByTagName("head")[0].appendChild(r);
          });
        };
      },
      {},
    ],
    0: [
      function (require, module, exports) {
        var b = require("TUK3");
        b.register("js", require("Yi9z"));
      },
      {},
    ],
  },
  {},
  [0, "Focm"],
  null
);
