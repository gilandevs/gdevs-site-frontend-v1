(() => {
  var e,
    t = {
      2250: () => {},
      6917: () => {
        const e = document.querySelectorAll(".card-stack"),
          t = ["load", "resize", "scroll"];
        e.forEach((e) => {
          const o = e.querySelectorAll(".card-stack-item");
          t.forEach((e) => {
            window.addEventListener(e, () => {
              const e = [].slice.call(o).reverse();
              e.reduce((t, o, a) => {
                const n = o.clientHeight + parseInt(window.getComputedStyle(o).getPropertyValue("margin-bottom")),
                  r = t + (n - (e[a - 1] ? e[a - 1].offsetTop - o.offsetTop : n)) / n,
                  l = o.firstElementChild,
                  s = l.firstElementChild,
                  c = "calc(-1rem * " + r + ")",
                  d = "calc(1 - .2 * " + r + ")",
                  i = "calc(1 - .03 * " + r + ")";
                return (l.style.transform = "translateY(" + c + ") scale(" + i + ")"), (s.style.opacity = d), r;
              }, 0);
            });
          });
        });
      },
      9328: () => {
        const e = document.querySelectorAll("[data-map]");
        e.forEach((e) => {
          const t = {
            ...{
              container: e,
              style: "mapbox://styles/mapbox/light-v9",
              scrollZoom: !1,
              interactive: !1,
            },
            ...e.dataset.map,
          };
          (mapboxgl.accessToken =
            "pk.eyJ1IjoiZ29vZHRoZW1lcyIsImEiOiJjanU5eHR4N2cybDU5NGVwOHZwNGprb3E0In0.msdw9q16dh8v4azJXUdiXg"),
            new mapboxgl.Map(t);
        });
      },
      5060: () => {
        function e() {
          document.documentElement.style.overflowX = "visible";
        }
        function t() {
          document.documentElement.style.overflowX = "";
        }
        document.querySelectorAll(".modal").forEach((o) => {
          o.addEventListener("show.bs.modal", e), o.addEventListener("hidden.bs.modal", t);
        });
      },
      5141: () => {
        const e = document.querySelectorAll(".navbar-reveal"),
          t = ["load", "scroll"];
        let o = window.pageYOffset;
        e.forEach((e) => {
          t.forEach((t) => {
            window.addEventListener(t, () => {
              const t = window.pageYOffset,
                a = o < t && t > 0 ? "-100%" : "0";
              e.querySelector(".navbar-collapse").classList.contains("show") ||
                (e.style.transform = `translateY(${a})`),
                (o = t);
            });
          });
        });
      },
      5976: () => {
        const e = document.querySelectorAll(".navbar"),
          t = ["load", "scroll"],
          o = ["show.bs.collapse", "hidden.bs.collapse"];
        function a(e) {
          e.classList.remove("navbar-dark"),
            e.classList.add("navbar-light"),
            (function (e) {
              e.style.boxShadow = "inset 1000px 1000px 1000px white";
            })(e);
        }
        function n(e) {
          e.classList.remove("navbar-light"), e.classList.add("navbar-dark"), r(e);
        }
        function r(e) {
          e.style.boxShadow = "";
        }
        function l(e, t, o, l, s) {
          const c = window.pageYOffset,
            d = s.classList.contains("show");
          "show.bs.collapse" === e && a(t),
            "hidden.bs.collapse" === e && o && r(t),
            "hidden.bs.collapse" === e && ((!l && !o) || (l && !c)) && n(t),
            ("load" !== e && "scroll" !== e) || !l || d || (c ? a(t) : n(t));
        }
        e.forEach((e) => {
          const a = e.querySelector(".navbar-collapse"),
            n = e.classList.contains("navbar-light"),
            r = e.classList.contains("navbar-togglable");
          t.forEach((t) => {
            window.addEventListener(t, () => {
              l(t, e, n, r, a);
            });
          }),
            o.forEach((t) => {
              a.addEventListener(t, () => {
                l(t, e, n, r, a);
              });
            });
        });
      },
      9240: () => {
        document.querySelectorAll('[data-toggle="password"]').forEach((e) => {
          e.addEventListener("click", function (t) {
            t.preventDefault();
            var o = document.querySelector(e.getAttribute("href")),
              a = "password" === o.type ? "text" : "password";
            o.type = a;
          });
        });
      },
      2789: () => {
        document.querySelectorAll('[data-toggle="table-features"]').forEach((e) => {
          e.addEventListener("change", () => {
            const t = e.dataset.target;
            document.querySelector(t).classList.toggle("table-features-alt");
          });
        });
      },
      8558: () => {
        document.querySelectorAll(".table-clickable [data-href]").forEach(function (e) {
          e.addEventListener("click", function (t) {
            t.preventDefault(), (document.location.href = e.dataset.href);
          });
        });
      },
      801: (e, t, o) => {
        "use strict";
        var a = o(6468),
          n = o(2442),
          r = o.n(n),
          l = (o(1105), o(7541), o(3031), o(4878)),
          s = o(2711),
          c = o.n(s);
        c().init({ duration: 700, easing: "ease-out-quad", once: !0, startEvent: "load" }),
          (window.AOS = c()),
          (window.Alert = a.bZ),
          (window.Button = a.zx),
          (window.Carousel = a.lr),
          (window.Collapse = a.UO),
          (window.Dropdown = a.Lt),
          (window.Modal = a.u_),
          (window.Offcanvas = a.TB),
          (window.Popover = a.J2),
          (window.ScrollSpy = a.DA),
          (window.Tab = a.OK),
          (window.Toast = a.FN),
          (window.Tooltip = a.u);
        var d = o(765),
          i = o.n(d);
        document.querySelectorAll("[data-bigpicture]").forEach(function (e) {
          e.addEventListener("click", function (t) {
            t.preventDefault();
            const o = JSON.parse(e.dataset.bigpicture),
              a = { ...{ el: e, noLoader: !0 }, ...o };
            i()(a);
          });
        }),
          (window.BigPicture = i());
        o(6917);
        var u = o(8273);
        function f(e) {
          const t = e.dataset.to ? +e.dataset.to : null,
            o = e.dataset.countup ? JSON.parse(e.dataset.countup) : {};
          new u.I(e, t, o).start();
        }
        document.querySelectorAll("[data-countup]").forEach((e) => {
          "countup:in" !== e.getAttribute("data-aos-id") && f(e);
        }),
          document.addEventListener("aos:in:countup:in", function (e) {
            (e.detail instanceof Element
              ? [e.detail]
              : document.querySelectorAll('.aos-animate[data-aos-id="countup:in"]:not(.counted)')
            ).forEach((e) => {
              f(e);
            });
          }),
          (window.CountUp = u.I);
        document.querySelectorAll('[data-toggle="flickity"]').forEach((e) => {
          e.addEventListener("click", function () {
            const t = parseInt(e.dataset.slide),
              o = document.querySelector(e.dataset.target);
            r().data(o).selectCell(t);
          });
        }),
          (window.Flickity = r());
        var w = o(7802),
          p = o.n(w),
          m = o(6344),
          v = o.n(m),
          h = o(2157),
          g = o.n(h);
        const y = document.querySelectorAll(".highlight");
        p().registerLanguage("xml", g()),
          p().registerLanguage("javascript", v()),
          y.forEach((e) => {
            p().highlightBlock(e);
          }),
          (window.hljs = p());
        var b = o(7564),
          E = o.n(b),
          S = o(3391),
          L = o.n(S);
        const q = document.querySelectorAll("[data-isotope]"),
          A = document.querySelectorAll("[data-filter]"),
          x = ["click"];
        (window.onload = () => {
          q.forEach((e) => {
            const t = L().data(e);
            new (E())(e, () => {
              t.layout();
            });
          }),
            A.forEach((e) => {
              e.addEventListener(x[0], (t) => {
                t.preventDefault();
                const o = e.dataset.filter,
                  a = document.querySelector(e.dataset.target);
                L().data(a).arrange({ filter: o });
              });
            });
        }),
          (window.Isotope = L()),
          (window.imagesLoaded = E());
        const O = document.querySelectorAll("[data-jarallax], [data-jarallax-element]");
        (0, l.jarallaxVideo)(),
          (0, l.jarallaxElement)(),
          (0, l.jarallax)(O),
          (window.jarallax = l.jarallax),
          (window.jarallaxElement = l.jarallaxElement),
          (window.jarallaxVideo = l.jarallaxVideo);
        o(9328), o(5060);
        var k = o(804);
        const j = document.querySelectorAll(".navbar-nav .dropdown, .navbar-nav .dropend"),
          T = document.querySelectorAll(".navbar-nav .dropdown-toggle"),
          I = document.querySelectorAll(".navbar-collapse"),
          J = 992;
        function C(e, t) {
          window.innerWidth < J ||
            (t.classList.add("showing"),
            setTimeout(() => {
              t.classList.remove("showing"), t.classList.add("show");
            }, 1),
            (function (e) {
              const t = e.parentElement,
                o = t.parentElement,
                a = o.classList.contains("dropend"),
                n = a ? [-32, 0] : [0, 0],
                r = a ? "right-start" : "auto";
              (0, k.fi)(o, t, {
                placement: r,
                modifiers: [
                  { name: "offset", options: { offset: n } },
                  { name: "preventOverflow", options: { padding: 16 } },
                ],
              });
            })(t));
        }
        j.forEach((e) => {
          const t = e.querySelector(".dropdown-menu");
          e.addEventListener("mouseenter", (e) => {
            C(0, t);
          }),
            e.addEventListener("mouseleave", (e) => {
              !(function (e, t) {
                window.innerWidth < J ||
                  (t.classList.contains("show") &&
                    (("click" === e.type && e.target.closest(".dropdown-menu form")) ||
                      (t.classList.add("showing"),
                      t.classList.remove("show"),
                      setTimeout(() => {
                        t.classList.remove("showing");
                      }, 200))));
              })(e, t);
            });
        }),
          T.forEach((e) => {
            const t = e.parentElement.querySelector(".dropdown-menu");
            e.addEventListener("click", (e) => {
              !(function (e, t) {
                if ((e.preventDefault(), window.innerWidth >= J)) return;
                t.parentElement
                  .closest(".navbar, .navbar .dropdown-menu")
                  .querySelectorAll(".dropdown-menu")
                  .forEach((e) => {
                    e !== t && e.classList.remove("show");
                  }),
                  t.classList.toggle("show");
              })(e, t);
            });
          }),
          I.forEach((e) => {
            e.addEventListener("hide.bs.collapse", () => {
              !(function (e) {
                window.innerWidth >= J ||
                  e.forEach((e) => {
                    e.classList.remove("show");
                  });
              })(e.querySelectorAll(".dropdown-menu"));
            });
          });
        o(5141), o(5976), o(9240);
        document.querySelectorAll('[data-bs-toggle="popover"]').forEach((e) => {
          new a.J2(e);
        });
        document.querySelectorAll('[data-toggle="price"]').forEach((e) => {
          e.addEventListener("click", () => {
            const t = e.dataset.target,
              o = document.querySelector(t),
              a = o.innerHTML,
              n = e.dataset.value,
              r = new u.I(o, n, { startVal: a });
            r.error ? console.error(r.error) : r.start();
          });
        });
        document.querySelectorAll('[data-toggle="prices"]').forEach((e) => {
          e.addEventListener("change", () => {
            const t = e.dataset.target,
              o = document.querySelectorAll(t),
              a = e.checked;
            o.forEach((e) => {
              const t = e.dataset.minValue,
                o = e.dataset.maxValue,
                n = e.innerHTML,
                r = a ? o : t,
                l = new u.I(e, r, { startVal: n });
              l.error ? console.error(l.error) : l.start();
            });
          });
        });
        var D = o(3002),
          N = o.n(D);
        const V = {
          header: ".navbar.fixed-top",
          offset: function (e, t) {
            return t.dataset.scroll && void 0 !== JSON.parse(t.dataset.scroll).offset
              ? JSON.parse(t.dataset.scroll).offset
              : 24;
          },
        };
        new (N())("[data-scroll]", V), (window.SmoothScroll = N());
        o(2789), o(8558);
        document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((e) => {
          new a.u(e);
        });
        var M = o(3614),
          P = o.n(M);
        document.querySelectorAll("[data-typed]").forEach((e) => {
          const t = {
            typeSpeed: 30,
            backSpeed: 30,
            backDelay: 2e3,
            loop: !0,
            ...(e.dataset.typed ? JSON.parse(e.dataset.typed) : {}),
          };
          new (P())(e, t);
        }),
          (window.Typed = P());
      },
    },
    o = {};
  function a(e) {
    var n = o[e];
    if (void 0 !== n) return n.exports;
    var r = (o[e] = { exports: {} });
    return t[e].call(r.exports, r, r.exports, a), r.exports;
  }
  (a.m = t),
    (e = []),
    (a.O = (t, o, n, r) => {
      if (!o) {
        var l = 1 / 0;
        for (i = 0; i < e.length; i++) {
          for (var [o, n, r] = e[i], s = !0, c = 0; c < o.length; c++)
            (!1 & r || l >= r) && Object.keys(a.O).every((e) => a.O[e](o[c]))
              ? o.splice(c--, 1)
              : ((s = !1), r < l && (l = r));
          if (s) {
            e.splice(i--, 1);
            var d = n();
            void 0 !== d && (t = d);
          }
        }
        return t;
      }
      r = r || 0;
      for (var i = e.length; i > 0 && e[i - 1][2] > r; i--) e[i] = e[i - 1];
      e[i] = [o, n, r];
    }),
    (a.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e;
      return a.d(t, { a: t }), t;
    }),
    (a.d = (e, t) => {
      for (var o in t) a.o(t, o) && !a.o(e, o) && Object.defineProperty(e, o, { enumerable: !0, get: t[o] });
    }),
    (a.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (a.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      var e = { 505: 0 };
      a.O.j = (t) => 0 === e[t];
      var t = (t, o) => {
          var n,
            r,
            [l, s, c] = o,
            d = 0;
          if (l.some((t) => 0 !== e[t])) {
            for (n in s) a.o(s, n) && (a.m[n] = s[n]);
            if (c) var i = c(a);
          }
          for (t && t(o); d < l.length; d++) (r = l[d]), a.o(e, r) && e[r] && e[r][0](), (e[l[d]] = 0);
          return a.O(i);
        },
        o = (self.webpackChunkgoodkit = self.webpackChunkgoodkit || []);
      o.forEach(t.bind(null, 0)), (o.push = t.bind(null, o.push.bind(o)));
    })(),
    a.O(void 0, [736], () => a(801));
  var n = a.O(void 0, [736], () => a(2250));
  n = a.O(n);


  
  var imageGrid = document.querySelector(".img-grid");
  var members = [
    {
      avatar: "assets/img/avatars/avatar-jumbo-1.jpg",
      name: "mohammad kamalipour",
    },
    {
      avatar: "assets/img/avatars/avatar-7.jpg",
      name: "arad",
    },
    {
      avatar: "assets/img/avatars/avatar-8.jpg",
      name: "sina",
    },
    {
      avatar: "assets/img/avatars/avatar-10.jpg",
      name: "Arash Milani",
    },
    {
      avatar: "assets/img/avatars/avatar-6.jpg",
      name: "Hassan",
    },
    {
      avatar: "assets/img/avatars/avatar-4.jpg",
      name: "Aryan",
    },
    {
      avatar: "assets/img/avatars/avatar-3.jpg",
      name: "Samira",
    },
    {
      avatar: "assets/img/avatars/avatar-1.jpeg",
      name: "ali",
    },
    {
      avatar: "assets/img/avatars/avatar-9.jpg",
      name: "hossein",
    },
  ];
    var parallax = [
		"-30",
		"-85",
		"-45",
		"-50",
		"-20",
		"-15",
		"-10",
  ];

  var shuffleArray = (arr) =>
    arr.sort(function () {
      return 0.5 - Math.random();
    });



  var shuffleMembers = shuffleArray(members);
  var maxImage = 7;
  counter = 1;
  
  while (counter <= maxImage) {
    const imgWrapper = document.createElement("div");
    const avatar = document.createElement("img");
    imgWrapper.className = "img-grid-item";

	avatar.src = shuffleMembers[counter].avatar;
	avatar.alt = shuffleMembers[counter].alt;
	avatar.dataset.jarallaxElement = parallax[counter];
    if (counter === 1) {
      avatar.className = "img-fluid rounded-top-start-3 rounded-bottom-end-3 shadow-lg";
    } else {
      avatar.className = "img-fluid rounded-top-start rounded-bottom-end shadow-lg";
    }

	imgWrapper.appendChild(avatar)
    imageGrid.appendChild(imgWrapper);
	counter++
  }
})();
