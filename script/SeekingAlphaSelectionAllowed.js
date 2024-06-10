'use strict';
(self.webpackChunksamw = self.webpackChunksamw || []).push([
    [3627],
    {
        65756: (e, t, n) => {
            n.d(t, {
                Mp: () => Fe,
                Hd: () => lt,
                vL: () => V,
                cA: () => ue,
                IG: () => fe,
                fp: () => E,
                Sj: () => O,
                fF: () => qe,
                PM: () => _e,
                zM: () => Qe,
                MS: () => h,
                FR: () => p
            });
            var r = n(96540),
                o = n(40961),
                i = n(74979);
            const a = {display: 'none'};
            function l(e) {
                let {id: t, value: n} = e;
                return r.createElement('div', {id: t, style: a}, n);
            }
            function s(e) {
                let {id: t, announcement: n, ariaLiveType: o = 'assertive'} = e;
                return r.createElement(
                    'div',
                    {
                        id: t,
                        style: {
                            position: 'fixed',
                            width: 1,
                            height: 1,
                            margin: -1,
                            border: 0,
                            padding: 0,
                            overflow: 'hidden',
                            clip: 'rect(0 0 0 0)',
                            clipPath: 'inset(100%)',
                            whiteSpace: 'nowrap'
                        },
                        role: 'status',
                        'aria-live': o,
                        'aria-atomic': !0
                    },
                    n
                );
            }
            const c = (0, r.createContext)(null),
                u = {
                    draggable:
                        '\n    To pick up a draggable item, press the space bar.\n    While dragging, use the arrow keys to move the item.\n    Press space again to drop the item in its new position, or press escape to cancel.\n  '
                },
                d = {
                    onDragStart(e) {
                        let {active: t} = e;
                        return 'Picked up draggable item ' + t.id + '.';
                    },
                    onDragOver(e) {
                        let {active: t, over: n} = e;
                        return n
                            ? 'Draggable item ' +
                                  t.id +
                                  ' was moved over droppable area ' +
                                  n.id +
                                  '.'
                            : 'Draggable item ' +
                                  t.id +
                                  ' is no longer over a droppable area.';
                    },
                    onDragEnd(e) {
                        let {active: t, over: n} = e;
                        return n
                            ? 'Draggable item ' +
                                  t.id +
                                  ' was dropped over droppable area ' +
                                  n.id
                            : 'Draggable item ' + t.id + ' was dropped.';
                    },
                    onDragCancel(e) {
                        let {active: t} = e;
                        return (
                            'Dragging was cancelled. Draggable item ' +
                            t.id +
                            ' was dropped.'
                        );
                    }
                };
            function f(e) {
                let {
                    announcements: t = d,
                    container: n,
                    hiddenTextDescribedById: a,
                    screenReaderInstructions: f = u
                } = e;
                const {announce: v, announcement: g} = (function () {
                        const [e, t] = (0, r.useState)('');
                        return {
                            announce: (0, r.useCallback)(e => {
                                null != e && t(e);
                            }, []),
                            announcement: e
                        };
                    })(),
                    h = (0, i.YG)('DndLiveRegion'),
                    [p, b] = (0, r.useState)(!1);
                if (
                    ((0, r.useEffect)(() => {
                        b(!0);
                    }, []),
                    (function (e) {
                        const t = (0, r.useContext)(c);
                        (0, r.useEffect)(() => {
                            if (!t)
                                throw new Error(
                                    'useDndMonitor must be used within a children of <DndContext>'
                                );
                            return t(e);
                        }, [e, t]);
                    })(
                        (0, r.useMemo)(
                            () => ({
                                onDragStart(e) {
                                    let {active: n} = e;
                                    v(t.onDragStart({active: n}));
                                },
                                onDragMove(e) {
                                    let {active: n, over: r} = e;
                                    t.onDragMove &&
                                        v(t.onDragMove({active: n, over: r}));
                                },
                                onDragOver(e) {
                                    let {active: n, over: r} = e;
                                    v(t.onDragOver({active: n, over: r}));
                                },
                                onDragEnd(e) {
                                    let {active: n, over: r} = e;
                                    v(t.onDragEnd({active: n, over: r}));
                                },
                                onDragCancel(e) {
                                    let {active: n, over: r} = e;
                                    v(t.onDragCancel({active: n, over: r}));
                                }
                            }),
                            [v, t]
                        )
                    ),
                    !p)
                )
                    return null;
                const m = r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(l, {id: a, value: f.draggable}),
                    r.createElement(s, {id: h, announcement: g})
                );
                return n ? (0, o.createPortal)(m, n) : m;
            }
            var v;
            function g() {}
            function h(e, t) {
                return (0, r.useMemo)(
                    () => ({sensor: e, options: null != t ? t : {}}),
                    [e, t]
                );
            }
            function p() {
                for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                )
                    t[n] = arguments[n];
                return (0, r.useMemo)(
                    () => [...t].filter(e => null != e),
                    [...t]
                );
            }
            !(function (e) {
                (e.DragStart = 'dragStart'),
                    (e.DragMove = 'dragMove'),
                    (e.DragEnd = 'dragEnd'),
                    (e.DragCancel = 'dragCancel'),
                    (e.DragOver = 'dragOver'),
                    (e.RegisterDroppable = 'registerDroppable'),
                    (e.SetDroppableDisabled = 'setDroppableDisabled'),
                    (e.UnregisterDroppable = 'unregisterDroppable');
            })(v || (v = {}));
            const b = Object.freeze({x: 0, y: 0});
            function m(e, t) {
                const n = (0, i.e_)(e);
                return n
                    ? ((n.x - t.left) / t.width) * 100 +
                          '% ' +
                          ((n.y - t.top) / t.height) * 100 +
                          '%'
                    : '0 0';
            }
            function y(e, t) {
                let {
                        data: {value: n}
                    } = e,
                    {
                        data: {value: r}
                    } = t;
                return n - r;
            }
            function w(e, t) {
                let {
                        data: {value: n}
                    } = e,
                    {
                        data: {value: r}
                    } = t;
                return r - n;
            }
            function x(e, t, n) {
                return (
                    void 0 === t && (t = e.left),
                    void 0 === n && (n = e.top),
                    {x: t + 0.5 * e.width, y: n + 0.5 * e.height}
                );
            }
            const E = e => {
                let {
                    collisionRect: t,
                    droppableRects: n,
                    droppableContainers: r
                } = e;
                const o = x(t, t.left, t.top),
                    i = [];
                for (const e of r) {
                    const {id: t} = e,
                        r = n.get(t);
                    if (r) {
                        const n =
                            ((a = x(r)),
                            (l = o),
                            Math.sqrt(
                                Math.pow(a.x - l.x, 2) + Math.pow(a.y - l.y, 2)
                            ));
                        i.push({
                            id: t,
                            data: {droppableContainer: e, value: n}
                        });
                    }
                }
                var a, l;
                return i.sort(y);
            };
            function C(e, t) {
                const n = Math.max(t.top, e.top),
                    r = Math.max(t.left, e.left),
                    o = Math.min(t.left + t.width, e.left + e.width),
                    i = Math.min(t.top + t.height, e.top + e.height),
                    a = o - r,
                    l = i - n;
                if (r < o && n < i) {
                    const n = t.width * t.height,
                        r = e.width * e.height,
                        o = a * l;
                    return Number((o / (n + r - o)).toFixed(4));
                }
                return 0;
            }
            const R = e => {
                let {
                    collisionRect: t,
                    droppableRects: n,
                    droppableContainers: r
                } = e;
                const o = [];
                for (const e of r) {
                    const {id: r} = e,
                        i = n.get(r);
                    if (i) {
                        const n = C(i, t);
                        n > 0 &&
                            o.push({
                                id: r,
                                data: {droppableContainer: e, value: n}
                            });
                    }
                }
                return o.sort(w);
            };
            function D(e, t) {
                return e && t ? {x: e.left - t.left, y: e.top - t.top} : b;
            }
            function S(e) {
                return function (t) {
                    for (
                        var n = arguments.length,
                            r = new Array(n > 1 ? n - 1 : 0),
                            o = 1;
                        o < n;
                        o++
                    )
                        r[o - 1] = arguments[o];
                    return r.reduce(
                        (t, n) => ({
                            ...t,
                            top: t.top + e * n.y,
                            bottom: t.bottom + e * n.y,
                            left: t.left + e * n.x,
                            right: t.right + e * n.x
                        }),
                        {...t}
                    );
                };
            }
            const M = S(1);
            function N(e) {
                if (e.startsWith('matrix3d(')) {
                    const t = e.slice(9, -1).split(/, /);
                    return {x: +t[12], y: +t[13], scaleX: +t[0], scaleY: +t[5]};
                }
                if (e.startsWith('matrix(')) {
                    const t = e.slice(7, -1).split(/, /);
                    return {x: +t[4], y: +t[5], scaleX: +t[0], scaleY: +t[3]};
                }
                return null;
            }
            const k = {ignoreTransform: !1};
            function O(e, t) {
                void 0 === t && (t = k);
                let n = e.getBoundingClientRect();
                if (t.ignoreTransform) {
                    const {transform: t, transformOrigin: r} = (0, i.zk)(
                        e
                    ).getComputedStyle(e);
                    t &&
                        (n = (function (e, t, n) {
                            const r = N(t);
                            if (!r) return e;
                            const {scaleX: o, scaleY: i, x: a, y: l} = r,
                                s = e.left - a - (1 - o) * parseFloat(n),
                                c =
                                    e.top -
                                    l -
                                    (1 - i) *
                                        parseFloat(n.slice(n.indexOf(' ') + 1)),
                                u = o ? e.width / o : e.width,
                                d = i ? e.height / i : e.height;
                            return {
                                width: u,
                                height: d,
                                top: c,
                                right: s + u,
                                bottom: c + d,
                                left: s
                            };
                        })(n, t, r));
                }
                const {
                    top: r,
                    left: o,
                    width: a,
                    height: l,
                    bottom: s,
                    right: c
                } = n;
                return {
                    top: r,
                    left: o,
                    width: a,
                    height: l,
                    bottom: s,
                    right: c
                };
            }
            function I(e) {
                return O(e, {ignoreTransform: !0});
            }
            function T(e, t) {
                const n = [];
                return e
                    ? (function r(o) {
                          if (null != t && n.length >= t) return n;
                          if (!o) return n;
                          if (
                              (0, i.wz)(o) &&
                              null != o.scrollingElement &&
                              !n.includes(o.scrollingElement)
                          )
                              return n.push(o.scrollingElement), n;
                          if (!(0, i.sb)(o) || (0, i.xZ)(o)) return n;
                          if (n.includes(o)) return n;
                          const a = (0, i.zk)(e).getComputedStyle(o);
                          return (
                              o !== e &&
                                  (function (e, t) {
                                      void 0 === t &&
                                          (t = (0, i.zk)(e).getComputedStyle(
                                              e
                                          ));
                                      const n = /(auto|scroll|overlay)/;
                                      return [
                                          'overflow',
                                          'overflowX',
                                          'overflowY'
                                      ].some(e => {
                                          const r = t[e];
                                          return (
                                              'string' == typeof r && n.test(r)
                                          );
                                      });
                                  })(o, a) &&
                                  n.push(o),
                              (function (e, t) {
                                  return (
                                      void 0 === t &&
                                          (t = (0, i.zk)(e).getComputedStyle(
                                              e
                                          )),
                                      'fixed' === t.position
                                  );
                              })(o, a)
                                  ? n
                                  : r(o.parentNode)
                          );
                      })(e)
                    : n;
            }
            function A(e) {
                const [t] = T(e, 1);
                return null != t ? t : null;
            }
            function L(e) {
                return i.Sw && e
                    ? (0, i.l6)(e)
                        ? e
                        : (0, i.Ll)(e)
                        ? (0, i.wz)(e) || e === (0, i.TW)(e).scrollingElement
                            ? window
                            : (0, i.sb)(e)
                            ? e
                            : null
                        : null
                    : null;
            }
            function z(e) {
                return (0, i.l6)(e) ? e.scrollX : e.scrollLeft;
            }
            function B(e) {
                return (0, i.l6)(e) ? e.scrollY : e.scrollTop;
            }
            function Y(e) {
                return {x: z(e), y: B(e)};
            }
            var P;
            function W(e) {
                return !(!i.Sw || !e) && e === document.scrollingElement;
            }
            function j(e) {
                const t = {x: 0, y: 0},
                    n = W(e)
                        ? {height: window.innerHeight, width: window.innerWidth}
                        : {height: e.clientHeight, width: e.clientWidth},
                    r = {
                        x: e.scrollWidth - n.width,
                        y: e.scrollHeight - n.height
                    };
                return {
                    isTop: e.scrollTop <= t.y,
                    isLeft: e.scrollLeft <= t.x,
                    isBottom: e.scrollTop >= r.y,
                    isRight: e.scrollLeft >= r.x,
                    maxScroll: r,
                    minScroll: t
                };
            }
            !(function (e) {
                (e[(e.Forward = 1)] = 'Forward'),
                    (e[(e.Backward = -1)] = 'Backward');
            })(P || (P = {}));
            const K = {x: 0.2, y: 0.2};
            function F(e, t, n, r, o) {
                let {top: i, left: a, right: l, bottom: s} = n;
                void 0 === r && (r = 10), void 0 === o && (o = K);
                const {isTop: c, isBottom: u, isLeft: d, isRight: f} = j(e),
                    v = {x: 0, y: 0},
                    g = {x: 0, y: 0},
                    h = t.height * o.y,
                    p = t.width * o.x;
                return (
                    !c && i <= t.top + h
                        ? ((v.y = P.Backward),
                          (g.y = r * Math.abs((t.top + h - i) / h)))
                        : !u &&
                          s >= t.bottom - h &&
                          ((v.y = P.Forward),
                          (g.y = r * Math.abs((t.bottom - h - s) / h))),
                    !f && l >= t.right - p
                        ? ((v.x = P.Forward),
                          (g.x = r * Math.abs((t.right - p - l) / p)))
                        : !d &&
                          a <= t.left + p &&
                          ((v.x = P.Backward),
                          (g.x = r * Math.abs((t.left + p - a) / p))),
                    {direction: v, speed: g}
                );
            }
            function X(e) {
                if (e === document.scrollingElement) {
                    const {innerWidth: e, innerHeight: t} = window;
                    return {
                        top: 0,
                        left: 0,
                        right: e,
                        bottom: t,
                        width: e,
                        height: t
                    };
                }
                const {
                    top: t,
                    left: n,
                    right: r,
                    bottom: o
                } = e.getBoundingClientRect();
                return {
                    top: t,
                    left: n,
                    right: r,
                    bottom: o,
                    width: e.clientWidth,
                    height: e.clientHeight
                };
            }
            function U(e) {
                return e.reduce((e, t) => (0, i.WQ)(e, Y(t)), b);
            }
            function G(e, t) {
                if ((void 0 === t && (t = O), !e)) return;
                const {top: n, left: r, bottom: o, right: i} = t(e);
                A(e) &&
                    (o <= 0 ||
                        i <= 0 ||
                        n >= window.innerHeight ||
                        r >= window.innerWidth) &&
                    e.scrollIntoView({block: 'center', inline: 'center'});
            }
            const _ = [
                [
                    'x',
                    ['left', 'right'],
                    function (e) {
                        return e.reduce((e, t) => e + z(t), 0);
                    }
                ],
                [
                    'y',
                    ['top', 'bottom'],
                    function (e) {
                        return e.reduce((e, t) => e + B(t), 0);
                    }
                ]
            ];
            class q {
                constructor(e, t) {
                    (this.rect = void 0),
                        (this.width = void 0),
                        (this.height = void 0),
                        (this.top = void 0),
                        (this.bottom = void 0),
                        (this.right = void 0),
                        (this.left = void 0);
                    const n = T(t),
                        r = U(n);
                    (this.rect = {...e}),
                        (this.width = e.width),
                        (this.height = e.height);
                    for (const [e, t, o] of _)
                        for (const i of t)
                            Object.defineProperty(this, i, {
                                get: () => {
                                    const t = o(n),
                                        a = r[e] - t;
                                    return this.rect[i] + a;
                                },
                                enumerable: !0
                            });
                    Object.defineProperty(this, 'rect', {enumerable: !1});
                }
            }
            class H {
                constructor(e) {
                    (this.target = void 0),
                        (this.listeners = []),
                        (this.removeAll = () => {
                            this.listeners.forEach(e => {
                                var t;
                                return null == (t = this.target)
                                    ? void 0
                                    : t.removeEventListener(...e);
                            });
                        }),
                        (this.target = e);
                }
                add(e, t, n) {
                    var r;
                    null == (r = this.target) || r.addEventListener(e, t, n),
                        this.listeners.push([e, t, n]);
                }
            }
            function J(e, t) {
                const n = Math.abs(e.x),
                    r = Math.abs(e.y);
                return 'number' == typeof t
                    ? Math.sqrt(n ** 2 + r ** 2) > t
                    : 'x' in t && 'y' in t
                    ? n > t.x && r > t.y
                    : 'x' in t
                    ? n > t.x
                    : 'y' in t && r > t.y;
            }
            var Q, V;
            function Z(e) {
                e.preventDefault();
            }
            function $(e) {
                e.stopPropagation();
            }
            !(function (e) {
                (e.Click = 'click'),
                    (e.DragStart = 'dragstart'),
                    (e.Keydown = 'keydown'),
                    (e.ContextMenu = 'contextmenu'),
                    (e.Resize = 'resize'),
                    (e.SelectionChange = 'selectionchange'),
                    (e.VisibilityChange = 'visibilitychange');
            })(Q || (Q = {})),
                (function (e) {
                    (e.Space = 'Space'),
                        (e.Down = 'ArrowDown'),
                        (e.Right = 'ArrowRight'),
                        (e.Left = 'ArrowLeft'),
                        (e.Up = 'ArrowUp'),
                        (e.Esc = 'Escape'),
                        (e.Enter = 'Enter');
                })(V || (V = {}));
            const ee = {
                    start: [V.Space, V.Enter],
                    cancel: [V.Esc],
                    end: [V.Space, V.Enter]
                },
                te = (e, t) => {
                    let {currentCoordinates: n} = t;
                    switch (e.code) {
                        case V.Right:
                            return {...n, x: n.x + 25};
                        case V.Left:
                            return {...n, x: n.x - 25};
                        case V.Down:
                            return {...n, y: n.y + 25};
                        case V.Up:
                            return {...n, y: n.y - 25};
                    }
                };
            class ne {
                constructor(e) {
                    (this.props = void 0),
                        (this.autoScrollEnabled = !1),
                        (this.referenceCoordinates = void 0),
                        (this.listeners = void 0),
                        (this.windowListeners = void 0),
                        (this.props = e);
                    const {
                        event: {target: t}
                    } = e;
                    (this.props = e),
                        (this.listeners = new H((0, i.TW)(t))),
                        (this.windowListeners = new H((0, i.zk)(t))),
                        (this.handleKeyDown = this.handleKeyDown.bind(this)),
                        (this.handleCancel = this.handleCancel.bind(this)),
                        this.attach();
                }
                attach() {
                    this.handleStart(),
                        this.windowListeners.add(Q.Resize, this.handleCancel),
                        this.windowListeners.add(
                            Q.VisibilityChange,
                            this.handleCancel
                        ),
                        setTimeout(() =>
                            this.listeners.add(Q.Keydown, this.handleKeyDown)
                        );
                }
                handleStart() {
                    const {activeNode: e, onStart: t} = this.props,
                        n = e.node.current;
                    n && G(n), t(b);
                }
                handleKeyDown(e) {
                    if ((0, i.kx)(e)) {
                        const {active: t, context: n, options: r} = this.props,
                            {
                                keyboardCodes: o = ee,
                                coordinateGetter: a = te,
                                scrollBehavior: l = 'smooth'
                            } = r,
                            {code: s} = e;
                        if (o.end.includes(s)) return void this.handleEnd(e);
                        if (o.cancel.includes(s))
                            return void this.handleCancel(e);
                        const {collisionRect: c} = n.current,
                            u = c ? {x: c.left, y: c.top} : b;
                        this.referenceCoordinates ||
                            (this.referenceCoordinates = u);
                        const d = a(e, {
                            active: t,
                            context: n.current,
                            currentCoordinates: u
                        });
                        if (d) {
                            const t = (0, i.Re)(d, u),
                                r = {x: 0, y: 0},
                                {scrollableAncestors: o} = n.current;
                            for (const n of o) {
                                const o = e.code,
                                    {
                                        isTop: i,
                                        isRight: a,
                                        isLeft: s,
                                        isBottom: c,
                                        maxScroll: u,
                                        minScroll: f
                                    } = j(n),
                                    v = X(n),
                                    g = {
                                        x: Math.min(
                                            o === V.Right
                                                ? v.right - v.width / 2
                                                : v.right,
                                            Math.max(
                                                o === V.Right
                                                    ? v.left
                                                    : v.left + v.width / 2,
                                                d.x
                                            )
                                        ),
                                        y: Math.min(
                                            o === V.Down
                                                ? v.bottom - v.height / 2
                                                : v.bottom,
                                            Math.max(
                                                o === V.Down
                                                    ? v.top
                                                    : v.top + v.height / 2,
                                                d.y
                                            )
                                        )
                                    },
                                    h =
                                        (o === V.Right && !a) ||
                                        (o === V.Left && !s),
                                    p =
                                        (o === V.Down && !c) ||
                                        (o === V.Up && !i);
                                if (h && g.x !== d.x) {
                                    const e = n.scrollLeft + t.x,
                                        i =
                                            (o === V.Right && e <= u.x) ||
                                            (o === V.Left && e >= f.x);
                                    if (i && !t.y)
                                        return void n.scrollTo({
                                            left: e,
                                            behavior: l
                                        });
                                    (r.x = i
                                        ? n.scrollLeft - e
                                        : o === V.Right
                                        ? n.scrollLeft - u.x
                                        : n.scrollLeft - f.x),
                                        r.x &&
                                            n.scrollBy({
                                                left: -r.x,
                                                behavior: l
                                            });
                                    break;
                                }
                                if (p && g.y !== d.y) {
                                    const e = n.scrollTop + t.y,
                                        i =
                                            (o === V.Down && e <= u.y) ||
                                            (o === V.Up && e >= f.y);
                                    if (i && !t.x)
                                        return void n.scrollTo({
                                            top: e,
                                            behavior: l
                                        });
                                    (r.y = i
                                        ? n.scrollTop - e
                                        : o === V.Down
                                        ? n.scrollTop - u.y
                                        : n.scrollTop - f.y),
                                        r.y &&
                                            n.scrollBy({
                                                top: -r.y,
                                                behavior: l
                                            });
                                    break;
                                }
                            }
                            this.handleMove(
                                e,
                                (0, i.WQ)(
                                    (0, i.Re)(d, this.referenceCoordinates),
                                    r
                                )
                            );
                        }
                    }
                }
                handleMove(e, t) {
                    const {onMove: n} = this.props;
                    e.preventDefault(), n(t);
                }
                handleEnd(e) {
                    const {onEnd: t} = this.props;
                    e.preventDefault(), this.detach(), t();
                }
                handleCancel(e) {
                    const {onCancel: t} = this.props;
                    e.preventDefault(), this.detach(), t();
                }
                detach() {
                    this.listeners.removeAll(),
                        this.windowListeners.removeAll();
                }
            }
            function re(e) {
                return Boolean(e && 'distance' in e);
            }
            function oe(e) {
                return Boolean(e && 'delay' in e);
            }
            ne.activators = [
                {
                    eventName: 'onKeyDown',
                    handler: (e, t, n) => {
                        let {keyboardCodes: r = ee, onActivation: o} = t,
                            {active: i} = n;
                        const {code: a} = e.nativeEvent;
                        if (r.start.includes(a)) {
                            const t = i.activatorNode.current;
                            return !(
                                (t && e.target !== t) ||
                                (e.preventDefault(),
                                null == o || o({event: e.nativeEvent}),
                                0)
                            );
                        }
                        return !1;
                    }
                }
            ];
            class ie {
                constructor(e, t, n) {
                    var r;
                    void 0 === n &&
                        (n = (function (e) {
                            const {EventTarget: t} = (0, i.zk)(e);
                            return e instanceof t ? e : (0, i.TW)(e);
                        })(e.event.target)),
                        (this.props = void 0),
                        (this.events = void 0),
                        (this.autoScrollEnabled = !0),
                        (this.document = void 0),
                        (this.activated = !1),
                        (this.initialCoordinates = void 0),
                        (this.timeoutId = null),
                        (this.listeners = void 0),
                        (this.documentListeners = void 0),
                        (this.windowListeners = void 0),
                        (this.props = e),
                        (this.events = t);
                    const {event: o} = e,
                        {target: a} = o;
                    (this.props = e),
                        (this.events = t),
                        (this.document = (0, i.TW)(a)),
                        (this.documentListeners = new H(this.document)),
                        (this.listeners = new H(n)),
                        (this.windowListeners = new H((0, i.zk)(a))),
                        (this.initialCoordinates =
                            null != (r = (0, i.e_)(o)) ? r : b),
                        (this.handleStart = this.handleStart.bind(this)),
                        (this.handleMove = this.handleMove.bind(this)),
                        (this.handleEnd = this.handleEnd.bind(this)),
                        (this.handleCancel = this.handleCancel.bind(this)),
                        (this.handleKeydown = this.handleKeydown.bind(this)),
                        this.attach();
                }
                attach() {
                    const {
                        events: e,
                        props: {
                            options: {
                                activationConstraint: t,
                                bypassActivationConstraint: n
                            }
                        }
                    } = this;
                    if (
                        (this.listeners.add(e.move.name, this.handleMove, {
                            passive: !1
                        }),
                        this.listeners.add(e.end.name, this.handleEnd),
                        this.windowListeners.add(Q.Resize, this.handleCancel),
                        this.windowListeners.add(Q.DragStart, Z),
                        this.windowListeners.add(
                            Q.VisibilityChange,
                            this.handleCancel
                        ),
                        this.windowListeners.add(Q.ContextMenu, Z),
                        this.documentListeners.add(
                            Q.Keydown,
                            this.handleKeydown
                        ),
                        t)
                    ) {
                        if (
                            null != n &&
                            n({
                                event: this.props.event,
                                activeNode: this.props.activeNode,
                                options: this.props.options
                            })
                        )
                            return this.handleStart();
                        if (oe(t))
                            return void (this.timeoutId = setTimeout(
                                this.handleStart,
                                t.delay
                            ));
                        if (re(t)) return;
                    }
                    this.handleStart();
                }
                detach() {
                    this.listeners.removeAll(),
                        this.windowListeners.removeAll(),
                        setTimeout(this.documentListeners.removeAll, 50),
                        null !== this.timeoutId &&
                            (clearTimeout(this.timeoutId),
                            (this.timeoutId = null));
                }
                handleStart() {
                    const {initialCoordinates: e} = this,
                        {onStart: t} = this.props;
                    e &&
                        ((this.activated = !0),
                        this.documentListeners.add(Q.Click, $, {capture: !0}),
                        t(e));
                }
                handleMove(e) {
                    var t;
                    const {
                            activated: n,
                            initialCoordinates: r,
                            props: o
                        } = this,
                        {
                            onMove: a,
                            options: {activationConstraint: l}
                        } = o;
                    if (!r) return;
                    const s = null != (t = (0, i.e_)(e)) ? t : b,
                        c = (0, i.Re)(r, s);
                    if (!n && l) {
                        if (re(l)) {
                            if (null != l.tolerance && J(c, l.tolerance))
                                return this.handleCancel();
                            if (J(c, l.distance)) return this.handleStart();
                        }
                        return oe(l) && J(c, l.tolerance)
                            ? this.handleCancel()
                            : void 0;
                    }
                    e.cancelable && e.preventDefault(), a(s);
                }
                handleEnd() {
                    const {onEnd: e} = this.props;
                    this.detach(), e();
                }
                handleCancel() {
                    const {onCancel: e} = this.props;
                    this.detach(), e();
                }
                handleKeydown(e) {
                    e.code === V.Esc && this.handleCancel();
                }
            }
            const ae = {move: {name: 'pointermove'}, end: {name: 'pointerup'}};
            class le extends ie {
                constructor(e) {
                    const {event: t} = e,
                        n = (0, i.TW)(t.target);
                    super(e, ae, n);
                }
            }
            le.activators = [
                {
                    eventName: 'onPointerDown',
                    handler: (e, t) => {
                        let {nativeEvent: n} = e,
                            {onActivation: r} = t;
                        return !(
                            !n.isPrimary ||
                            0 !== n.button ||
                            (null == r || r({event: n}), 0)
                        );
                    }
                }
            ];
            const se = {move: {name: 'mousemove'}, end: {name: 'mouseup'}};
            var ce;
            !(function (e) {
                e[(e.RightClick = 2)] = 'RightClick';
            })(ce || (ce = {}));
            class ue extends ie {
                constructor(e) {
                    super(e, se, (0, i.TW)(e.event.target));
                }
            }
            ue.activators = [
                {
                    eventName: 'onMouseDown',
                    handler: (e, t) => {
                        let {nativeEvent: n} = e,
                            {onActivation: r} = t;
                        return (
                            n.button !== ce.RightClick &&
                            (null == r || r({event: n}), !0)
                        );
                    }
                }
            ];
            const de = {move: {name: 'touchmove'}, end: {name: 'touchend'}};
            class fe extends ie {
                constructor(e) {
                    super(e, de);
                }
                static setup() {
                    return (
                        window.addEventListener(de.move.name, e, {
                            capture: !1,
                            passive: !1
                        }),
                        function () {
                            window.removeEventListener(de.move.name, e);
                        }
                    );
                    function e() {}
                }
            }
            var ve, ge;
            (fe.activators = [
                {
                    eventName: 'onTouchStart',
                    handler: (e, t) => {
                        let {nativeEvent: n} = e,
                            {onActivation: r} = t;
                        const {touches: o} = n;
                        return !(
                            o.length > 1 || (null == r || r({event: n}), 0)
                        );
                    }
                }
            ]),
                (function (e) {
                    (e[(e.Pointer = 0)] = 'Pointer'),
                        (e[(e.DraggableRect = 1)] = 'DraggableRect');
                })(ve || (ve = {})),
                (function (e) {
                    (e[(e.TreeOrder = 0)] = 'TreeOrder'),
                        (e[(e.ReversedTreeOrder = 1)] = 'ReversedTreeOrder');
                })(ge || (ge = {}));
            const he = {
                x: {[P.Backward]: !1, [P.Forward]: !1},
                y: {[P.Backward]: !1, [P.Forward]: !1}
            };
            var pe, be;
            !(function (e) {
                (e[(e.Always = 0)] = 'Always'),
                    (e[(e.BeforeDragging = 1)] = 'BeforeDragging'),
                    (e[(e.WhileDragging = 2)] = 'WhileDragging');
            })(pe || (pe = {})),
                (function (e) {
                    e.Optimized = 'optimized';
                })(be || (be = {}));
            const me = new Map();
            function ye(e, t) {
                return (0, i.KG)(
                    n => (e ? n || ('function' == typeof t ? t(e) : e) : null),
                    [t, e]
                );
            }
            function we(e) {
                let {callback: t, disabled: n} = e;
                const o = (0, i._q)(t),
                    a = (0, r.useMemo)(() => {
                        if (
                            n ||
                            'undefined' == typeof window ||
                            void 0 === window.ResizeObserver
                        )
                            return;
                        const {ResizeObserver: e} = window;
                        return new e(o);
                    }, [n]);
                return (
                    (0, r.useEffect)(
                        () => () => null == a ? void 0 : a.disconnect(),
                        [a]
                    ),
                    a
                );
            }
            function xe(e) {
                return new q(O(e), e);
            }
            function Ee(e, t, n) {
                void 0 === t && (t = xe);
                const [o, a] = (0, r.useReducer)(function (r) {
                        if (!e) return null;
                        var o;
                        if (!1 === e.isConnected)
                            return null != (o = null != r ? r : n) ? o : null;
                        const i = t(e);
                        return JSON.stringify(r) === JSON.stringify(i) ? r : i;
                    }, null),
                    l = (function (e) {
                        let {callback: t, disabled: n} = e;
                        const o = (0, i._q)(t),
                            a = (0, r.useMemo)(() => {
                                if (
                                    n ||
                                    'undefined' == typeof window ||
                                    void 0 === window.MutationObserver
                                )
                                    return;
                                const {MutationObserver: e} = window;
                                return new e(o);
                            }, [o, n]);
                        return (
                            (0, r.useEffect)(
                                () => () => null == a ? void 0 : a.disconnect(),
                                [a]
                            ),
                            a
                        );
                    })({
                        callback(t) {
                            if (e)
                                for (const n of t) {
                                    const {type: t, target: r} = n;
                                    if (
                                        'childList' === t &&
                                        r instanceof HTMLElement &&
                                        r.contains(e)
                                    ) {
                                        a();
                                        break;
                                    }
                                }
                        }
                    }),
                    s = we({callback: a});
                return (
                    (0, i.Es)(() => {
                        a(),
                            e
                                ? (null == s || s.observe(e),
                                  null == l ||
                                      l.observe(document.body, {
                                          childList: !0,
                                          subtree: !0
                                      }))
                                : (null == s || s.disconnect(),
                                  null == l || l.disconnect());
                    }, [e]),
                    o
                );
            }
            const Ce = [];
            function Re(e, t) {
                void 0 === t && (t = []);
                const n = (0, r.useRef)(null);
                return (
                    (0, r.useEffect)(() => {
                        n.current = null;
                    }, t),
                    (0, r.useEffect)(() => {
                        const t = e !== b;
                        t && !n.current && (n.current = e),
                            !t && n.current && (n.current = null);
                    }, [e]),
                    n.current ? (0, i.Re)(e, n.current) : b
                );
            }
            function De(e) {
                return (0, r.useMemo)(
                    () =>
                        e
                            ? (function (e) {
                                  const t = e.innerWidth,
                                      n = e.innerHeight;
                                  return {
                                      top: 0,
                                      left: 0,
                                      right: t,
                                      bottom: n,
                                      width: t,
                                      height: n
                                  };
                              })(e)
                            : null,
                    [e]
                );
            }
            const Se = [];
            function Me(e) {
                if (!e) return null;
                if (e.children.length > 1) return e;
                const t = e.children[0];
                return (0, i.sb)(t) ? t : e;
            }
            const Ne = [
                    {sensor: le, options: {}},
                    {sensor: ne, options: {}}
                ],
                ke = {current: {}},
                Oe = {
                    draggable: {measure: I},
                    droppable: {
                        measure: I,
                        strategy: pe.WhileDragging,
                        frequency: be.Optimized
                    },
                    dragOverlay: {measure: O}
                };
            class Ie extends Map {
                get(e) {
                    var t;
                    return null != e && null != (t = super.get(e)) ? t : void 0;
                }
                toArray() {
                    return Array.from(this.values());
                }
                getEnabled() {
                    return this.toArray().filter(e => {
                        let {disabled: t} = e;
                        return !t;
                    });
                }
                getNodeFor(e) {
                    var t, n;
                    return null !=
                        (t =
                            null == (n = this.get(e)) ? void 0 : n.node.current)
                        ? t
                        : void 0;
                }
            }
            const Te = {
                    activatorEvent: null,
                    active: null,
                    activeNode: null,
                    activeNodeRect: null,
                    collisions: null,
                    containerNodeRect: null,
                    draggableNodes: new Map(),
                    droppableRects: new Map(),
                    droppableContainers: new Ie(),
                    over: null,
                    dragOverlay: {
                        nodeRef: {current: null},
                        rect: null,
                        setRef: g
                    },
                    scrollableAncestors: [],
                    scrollableAncestorRects: [],
                    measuringConfiguration: Oe,
                    measureDroppableContainers: g,
                    windowRect: null,
                    measuringScheduled: !1
                },
                Ae = {
                    activatorEvent: null,
                    activators: [],
                    active: null,
                    activeNodeRect: null,
                    ariaDescribedById: {draggable: ''},
                    dispatch: g,
                    draggableNodes: new Map(),
                    over: null,
                    measureDroppableContainers: g
                },
                Le = (0, r.createContext)(Ae),
                ze = (0, r.createContext)(Te);
            function Be() {
                return {
                    draggable: {
                        active: null,
                        initialCoordinates: {x: 0, y: 0},
                        nodes: new Map(),
                        translate: {x: 0, y: 0}
                    },
                    droppable: {containers: new Ie()}
                };
            }
            function Ye(e, t) {
                switch (t.type) {
                    case v.DragStart:
                        return {
                            ...e,
                            draggable: {
                                ...e.draggable,
                                initialCoordinates: t.initialCoordinates,
                                active: t.active
                            }
                        };
                    case v.DragMove:
                        return e.draggable.active
                            ? {
                                  ...e,
                                  draggable: {
                                      ...e.draggable,
                                      translate: {
                                          x:
                                              t.coordinates.x -
                                              e.draggable.initialCoordinates.x,
                                          y:
                                              t.coordinates.y -
                                              e.draggable.initialCoordinates.y
                                      }
                                  }
                              }
                            : e;
                    case v.DragEnd:
                    case v.DragCancel:
                        return {
                            ...e,
                            draggable: {
                                ...e.draggable,
                                active: null,
                                initialCoordinates: {x: 0, y: 0},
                                translate: {x: 0, y: 0}
                            }
                        };
                    case v.RegisterDroppable: {
                        const {element: n} = t,
                            {id: r} = n,
                            o = new Ie(e.droppable.containers);
                        return (
                            o.set(r, n),
                            {...e, droppable: {...e.droppable, containers: o}}
                        );
                    }
                    case v.SetDroppableDisabled: {
                        const {id: n, key: r, disabled: o} = t,
                            i = e.droppable.containers.get(n);
                        if (!i || r !== i.key) return e;
                        const a = new Ie(e.droppable.containers);
                        return (
                            a.set(n, {...i, disabled: o}),
                            {...e, droppable: {...e.droppable, containers: a}}
                        );
                    }
                    case v.UnregisterDroppable: {
                        const {id: n, key: r} = t,
                            o = e.droppable.containers.get(n);
                        if (!o || r !== o.key) return e;
                        const i = new Ie(e.droppable.containers);
                        return (
                            i.delete(n),
                            {...e, droppable: {...e.droppable, containers: i}}
                        );
                    }
                    default:
                        return e;
                }
            }
            function Pe(e) {
                let {disabled: t} = e;
                const {
                        active: n,
                        activatorEvent: o,
                        draggableNodes: a
                    } = (0, r.useContext)(Le),
                    l = (0, i.ZC)(o),
                    s = (0, i.ZC)(null == n ? void 0 : n.id);
                return (
                    (0, r.useEffect)(() => {
                        if (!t && !o && l && null != s) {
                            if (!(0, i.kx)(l)) return;
                            if (document.activeElement === l.target) return;
                            const e = a.get(s);
                            if (!e) return;
                            const {activatorNode: t, node: n} = e;
                            if (!t.current && !n.current) return;
                            requestAnimationFrame(() => {
                                for (const e of [t.current, n.current]) {
                                    if (!e) continue;
                                    const t = (0, i.ag)(e);
                                    if (t) {
                                        t.focus();
                                        break;
                                    }
                                }
                            });
                        }
                    }, [o, t, a, s, l]),
                    null
                );
            }
            function We(e, t) {
                let {transform: n, ...r} = t;
                return null != e && e.length
                    ? e.reduce((e, t) => t({transform: e, ...r}), n)
                    : n;
            }
            const je = (0, r.createContext)({...b, scaleX: 1, scaleY: 1});
            var Ke;
            !(function (e) {
                (e[(e.Uninitialized = 0)] = 'Uninitialized'),
                    (e[(e.Initializing = 1)] = 'Initializing'),
                    (e[(e.Initialized = 2)] = 'Initialized');
            })(Ke || (Ke = {}));
            const Fe = (0, r.memo)(function (e) {
                    var t, n, a, l;
                    let {
                        id: s,
                        accessibility: u,
                        autoScroll: d = !0,
                        children: g,
                        sensors: h = Ne,
                        collisionDetection: p = R,
                        measuring: m,
                        modifiers: y,
                        ...w
                    } = e;
                    const x = (0, r.useReducer)(Ye, void 0, Be),
                        [E, C] = x,
                        [S, N] = (function () {
                            const [e] = (0, r.useState)(() => new Set()),
                                t = (0, r.useCallback)(
                                    t => (e.add(t), () => e.delete(t)),
                                    [e]
                                );
                            return [
                                (0, r.useCallback)(
                                    t => {
                                        let {type: n, event: r} = t;
                                        e.forEach(e => {
                                            var t;
                                            return null == (t = e[n])
                                                ? void 0
                                                : t.call(e, r);
                                        });
                                    },
                                    [e]
                                ),
                                t
                            ];
                        })(),
                        [k, I] = (0, r.useState)(Ke.Uninitialized),
                        z = k === Ke.Initialized,
                        {
                            draggable: {active: B, nodes: j, translate: K},
                            droppable: {containers: X}
                        } = E,
                        G = B ? j.get(B) : null,
                        _ = (0, r.useRef)({initial: null, translated: null}),
                        H = (0, r.useMemo)(() => {
                            var e;
                            return null != B
                                ? {
                                      id: B,
                                      data:
                                          null !=
                                          (e = null == G ? void 0 : G.data)
                                              ? e
                                              : ke,
                                      rect: _
                                  }
                                : null;
                        }, [B, G]),
                        J = (0, r.useRef)(null),
                        [Q, V] = (0, r.useState)(null),
                        [Z, $] = (0, r.useState)(null),
                        ee = (0, i.YN)(w, Object.values(w)),
                        te = (0, i.YG)('DndDescribedBy', s),
                        ne = (0, r.useMemo)(() => X.getEnabled(), [X]),
                        re =
                            ((oe = m),
                            (0, r.useMemo)(
                                () => ({
                                    draggable: {
                                        ...Oe.draggable,
                                        ...(null == oe ? void 0 : oe.draggable)
                                    },
                                    droppable: {
                                        ...Oe.droppable,
                                        ...(null == oe ? void 0 : oe.droppable)
                                    },
                                    dragOverlay: {
                                        ...Oe.dragOverlay,
                                        ...(null == oe
                                            ? void 0
                                            : oe.dragOverlay)
                                    }
                                }),
                                [
                                    null == oe ? void 0 : oe.draggable,
                                    null == oe ? void 0 : oe.droppable,
                                    null == oe ? void 0 : oe.dragOverlay
                                ]
                            ));
                    var oe;
                    const {
                            droppableRects: ie,
                            measureDroppableContainers: ae,
                            measuringScheduled: le
                        } = (function (e, t) {
                            let {dragging: n, dependencies: o, config: a} = t;
                            const [l, s] = (0, r.useState)(null),
                                {frequency: c, measure: u, strategy: d} = a,
                                f = (0, r.useRef)(e),
                                v = (function () {
                                    switch (d) {
                                        case pe.Always:
                                            return !1;
                                        case pe.BeforeDragging:
                                            return n;
                                        default:
                                            return !n;
                                    }
                                })(),
                                g = (0, i.YN)(v),
                                h = (0, r.useCallback)(
                                    function (e) {
                                        void 0 === e && (e = []),
                                            g.current ||
                                                s(t =>
                                                    null === t
                                                        ? e
                                                        : t.concat(
                                                              e.filter(
                                                                  e =>
                                                                      !t.includes(
                                                                          e
                                                                      )
                                                              )
                                                          )
                                                );
                                    },
                                    [g]
                                ),
                                p = (0, r.useRef)(null),
                                b = (0, i.KG)(
                                    t => {
                                        if (v && !n) return me;
                                        if (
                                            !t ||
                                            t === me ||
                                            f.current !== e ||
                                            null != l
                                        ) {
                                            const t = new Map();
                                            for (let n of e) {
                                                if (!n) continue;
                                                if (
                                                    l &&
                                                    l.length > 0 &&
                                                    !l.includes(n.id) &&
                                                    n.rect.current
                                                ) {
                                                    t.set(n.id, n.rect.current);
                                                    continue;
                                                }
                                                const e = n.node.current,
                                                    r = e
                                                        ? new q(u(e), e)
                                                        : null;
                                                (n.rect.current = r),
                                                    r && t.set(n.id, r);
                                            }
                                            return t;
                                        }
                                        return t;
                                    },
                                    [e, l, n, v, u]
                                );
                            return (
                                (0, r.useEffect)(() => {
                                    f.current = e;
                                }, [e]),
                                (0, r.useEffect)(() => {
                                    v || h();
                                }, [n, v]),
                                (0, r.useEffect)(() => {
                                    l && l.length > 0 && s(null);
                                }, [JSON.stringify(l)]),
                                (0, r.useEffect)(() => {
                                    v ||
                                        'number' != typeof c ||
                                        null !== p.current ||
                                        (p.current = setTimeout(() => {
                                            h(), (p.current = null);
                                        }, c));
                                }, [c, v, h, ...o]),
                                {
                                    droppableRects: b,
                                    measureDroppableContainers: h,
                                    measuringScheduled: null != l
                                }
                            );
                        })(ne, {
                            dragging: z,
                            dependencies: [K.x, K.y],
                            config: re.droppable
                        }),
                        se = (function (e, t) {
                            const n = null !== t ? e.get(t) : void 0,
                                r = n ? n.node.current : null;
                            return (0, i.KG)(
                                e => {
                                    var n;
                                    return null === t
                                        ? null
                                        : null != (n = null != r ? r : e)
                                        ? n
                                        : null;
                                },
                                [r, t]
                            );
                        })(j, B),
                        ce = (0, r.useMemo)(
                            () => (Z ? (0, i.e_)(Z) : null),
                            [Z]
                        ),
                        ue = (function () {
                            const e =
                                    !1 ===
                                    (null == Q ? void 0 : Q.autoScrollEnabled),
                                t =
                                    'object' == typeof d
                                        ? !1 === d.enabled
                                        : !1 === d,
                                n = z && !e && !t;
                            return 'object' == typeof d
                                ? {...d, enabled: n}
                                : {enabled: n};
                        })(),
                        de = (function (e, t) {
                            return ye(e, t);
                        })(se, re.draggable.measure);
                    !(function (e) {
                        let {
                            activeNode: t,
                            measure: n,
                            initialRect: o,
                            config: a = !0
                        } = e;
                        const l = (0, r.useRef)(!1),
                            {x: s, y: c} =
                                'boolean' == typeof a ? {x: a, y: a} : a;
                        (0, i.Es)(() => {
                            if ((!s && !c) || !t) return void (l.current = !1);
                            if (l.current || !o) return;
                            const e = null == t ? void 0 : t.node.current;
                            if (!e || !1 === e.isConnected) return;
                            const r = D(n(e), o);
                            if (
                                (s || (r.x = 0),
                                c || (r.y = 0),
                                (l.current = !0),
                                Math.abs(r.x) > 0 || Math.abs(r.y) > 0)
                            ) {
                                const t = A(e);
                                t && t.scrollBy({top: r.y, left: r.x});
                            }
                        }, [t, s, c, o, n]);
                    })({
                        activeNode: B ? j.get(B) : null,
                        config: ue.layoutShiftCompensation,
                        initialRect: de,
                        measure: re.draggable.measure
                    });
                    const fe = Ee(se, re.draggable.measure, de),
                        be = Ee(se ? se.parentElement : null),
                        xe = (0, r.useRef)({
                            activatorEvent: null,
                            active: null,
                            activeNode: se,
                            collisionRect: null,
                            collisions: null,
                            droppableRects: ie,
                            draggableNodes: j,
                            draggingNode: null,
                            draggingNodeRect: null,
                            droppableContainers: X,
                            over: null,
                            scrollableAncestors: [],
                            scrollAdjustedTranslate: null
                        }),
                        Ie = X.getNodeFor(
                            null == (t = xe.current.over) ? void 0 : t.id
                        ),
                        Te = (function (e) {
                            let {measure: t} = e;
                            const [n, o] = (0, r.useState)(null),
                                a = we({
                                    callback: (0, r.useCallback)(
                                        e => {
                                            for (const {target: n} of e)
                                                if ((0, i.sb)(n)) {
                                                    o(e => {
                                                        const r = t(n);
                                                        return e
                                                            ? {
                                                                  ...e,
                                                                  width: r.width,
                                                                  height: r.height
                                                              }
                                                            : r;
                                                    });
                                                    break;
                                                }
                                        },
                                        [t]
                                    )
                                }),
                                l = (0, r.useCallback)(
                                    e => {
                                        const n = Me(e);
                                        null == a || a.disconnect(),
                                            n && (null == a || a.observe(n)),
                                            o(n ? t(n) : null);
                                    },
                                    [t, a]
                                ),
                                [s, c] = (0, i.lk)(l);
                            return (0, r.useMemo)(
                                () => ({nodeRef: s, rect: n, setRef: c}),
                                [n, s, c]
                            );
                        })({measure: re.dragOverlay.measure}),
                        Ae = null != (n = Te.nodeRef.current) ? n : se,
                        Fe = z ? (null != (a = Te.rect) ? a : fe) : null,
                        Xe = Boolean(Te.nodeRef.current && Te.rect),
                        Ue = D((Ge = Xe ? null : fe), ye(Ge));
                    var Ge;
                    const _e = De(Ae ? (0, i.zk)(Ae) : null),
                        qe = (function (e) {
                            const t = (0, r.useRef)(e),
                                n = (0, i.KG)(
                                    n =>
                                        e
                                            ? n &&
                                              n !== Ce &&
                                              e &&
                                              t.current &&
                                              e.parentNode ===
                                                  t.current.parentNode
                                                ? n
                                                : T(e)
                                            : Ce,
                                    [e]
                                );
                            return (
                                (0, r.useEffect)(() => {
                                    t.current = e;
                                }, [e]),
                                n
                            );
                        })(z ? (null != Ie ? Ie : se) : null),
                        He = (function (e, t) {
                            void 0 === t && (t = O);
                            const [n] = e,
                                o = De(n ? (0, i.zk)(n) : null),
                                [a, l] = (0, r.useReducer)(function () {
                                    return e.length
                                        ? e.map(e =>
                                              W(e) ? o : new q(t(e), e)
                                          )
                                        : Se;
                                }, Se),
                                s = we({callback: l});
                            return (
                                e.length > 0 && a === Se && l(),
                                (0, i.Es)(() => {
                                    e.length
                                        ? e.forEach(e =>
                                              null == s ? void 0 : s.observe(e)
                                          )
                                        : (null == s || s.disconnect(), l());
                                }, [e]),
                                a
                            );
                        })(qe),
                        Je = We(y, {
                            transform: {
                                x: K.x - Ue.x,
                                y: K.y - Ue.y,
                                scaleX: 1,
                                scaleY: 1
                            },
                            activatorEvent: Z,
                            active: H,
                            activeNodeRect: fe,
                            containerNodeRect: be,
                            draggingNodeRect: Fe,
                            over: xe.current.over,
                            overlayNodeRect: Te.rect,
                            scrollableAncestors: qe,
                            scrollableAncestorRects: He,
                            windowRect: _e
                        }),
                        Qe = ce ? (0, i.WQ)(ce, K) : null,
                        Ve = (function (e) {
                            const [t, n] = (0, r.useState)(null),
                                o = (0, r.useRef)(e),
                                a = (0, r.useCallback)(e => {
                                    const t = L(e.target);
                                    t &&
                                        n(e =>
                                            e
                                                ? (e.set(t, Y(t)), new Map(e))
                                                : null
                                        );
                                }, []);
                            return (
                                (0, r.useEffect)(() => {
                                    const t = o.current;
                                    if (e !== t) {
                                        r(t);
                                        const i = e
                                            .map(e => {
                                                const t = L(e);
                                                return t
                                                    ? (t.addEventListener(
                                                          'scroll',
                                                          a,
                                                          {passive: !0}
                                                      ),
                                                      [t, Y(t)])
                                                    : null;
                                            })
                                            .filter(e => null != e);
                                        n(i.length ? new Map(i) : null),
                                            (o.current = e);
                                    }
                                    return () => {
                                        r(e), r(t);
                                    };
                                    function r(e) {
                                        e.forEach(e => {
                                            const t = L(e);
                                            null == t ||
                                                t.removeEventListener(
                                                    'scroll',
                                                    a
                                                );
                                        });
                                    }
                                }, [a, e]),
                                (0, r.useMemo)(
                                    () =>
                                        e.length
                                            ? t
                                                ? Array.from(t.values()).reduce(
                                                      (e, t) => (0, i.WQ)(e, t),
                                                      b
                                                  )
                                                : U(e)
                                            : b,
                                    [e, t]
                                )
                            );
                        })(qe),
                        Ze = Re(Ve),
                        $e = Re(Ve, [fe]),
                        et = (0, i.WQ)(Je, Ze),
                        tt = Fe ? M(Fe, Je) : null,
                        nt =
                            H && tt
                                ? p({
                                      active: H,
                                      collisionRect: tt,
                                      droppableRects: ie,
                                      droppableContainers: ne,
                                      pointerCoordinates: Qe
                                  })
                                : null,
                        rt = (function (e, t) {
                            if (!e || 0 === e.length) return null;
                            const [n] = e;
                            return n.id;
                        })(nt),
                        [ot, it] = (0, r.useState)(null),
                        at = (function (e, t, n) {
                            return {
                                ...e,
                                scaleX: t && n ? t.width / n.width : 1,
                                scaleY: t && n ? t.height / n.height : 1
                            };
                        })(
                            Xe ? Je : (0, i.WQ)(Je, $e),
                            null != (l = null == ot ? void 0 : ot.rect)
                                ? l
                                : null,
                            fe
                        ),
                        lt = (0, r.useCallback)(
                            (e, t) => {
                                let {sensor: n, options: r} = t;
                                if (null == J.current) return;
                                const i = j.get(J.current);
                                if (!i) return;
                                const a = e.nativeEvent,
                                    l = new n({
                                        active: J.current,
                                        activeNode: i,
                                        event: a,
                                        options: r,
                                        context: xe,
                                        onStart(e) {
                                            const t = J.current;
                                            if (null == t) return;
                                            const n = j.get(t);
                                            if (!n) return;
                                            const {onDragStart: r} = ee.current,
                                                i = {
                                                    active: {
                                                        id: t,
                                                        data: n.data,
                                                        rect: _
                                                    }
                                                };
                                            (0, o.unstable_batchedUpdates)(
                                                () => {
                                                    null == r || r(i),
                                                        I(Ke.Initializing),
                                                        C({
                                                            type: v.DragStart,
                                                            initialCoordinates:
                                                                e,
                                                            active: t
                                                        }),
                                                        S({
                                                            type: 'onDragStart',
                                                            event: i
                                                        });
                                                }
                                            );
                                        },
                                        onMove(e) {
                                            C({
                                                type: v.DragMove,
                                                coordinates: e
                                            });
                                        },
                                        onEnd: s(v.DragEnd),
                                        onCancel: s(v.DragCancel)
                                    });
                                function s(e) {
                                    return async function () {
                                        const {
                                            active: t,
                                            collisions: n,
                                            over: r,
                                            scrollAdjustedTranslate: i
                                        } = xe.current;
                                        let l = null;
                                        if (t && i) {
                                            const {cancelDrop: o} = ee.current;
                                            (l = {
                                                activatorEvent: a,
                                                active: t,
                                                collisions: n,
                                                delta: i,
                                                over: r
                                            }),
                                                e === v.DragEnd &&
                                                    'function' == typeof o &&
                                                    (await Promise.resolve(
                                                        o(l)
                                                    )) &&
                                                    (e = v.DragCancel);
                                        }
                                        (J.current = null),
                                            (0, o.unstable_batchedUpdates)(
                                                () => {
                                                    C({type: e}),
                                                        I(Ke.Uninitialized),
                                                        it(null),
                                                        V(null),
                                                        $(null);
                                                    const t =
                                                        e === v.DragEnd
                                                            ? 'onDragEnd'
                                                            : 'onDragCancel';
                                                    if (l) {
                                                        const e = ee.current[t];
                                                        null == e || e(l),
                                                            S({
                                                                type: t,
                                                                event: l
                                                            });
                                                    }
                                                }
                                            );
                                    };
                                }
                                (0, o.unstable_batchedUpdates)(() => {
                                    V(l), $(e.nativeEvent);
                                });
                            },
                            [j]
                        ),
                        st = (0, r.useCallback)(
                            (e, t) => (n, r) => {
                                const o = n.nativeEvent,
                                    i = j.get(r);
                                if (
                                    null !== J.current ||
                                    !i ||
                                    o.dndKit ||
                                    o.defaultPrevented
                                )
                                    return;
                                const a = {active: i};
                                !0 === e(n, t.options, a) &&
                                    ((o.dndKit = {capturedBy: t.sensor}),
                                    (J.current = r),
                                    lt(n, t));
                            },
                            [j, lt]
                        ),
                        ct = (function (e, t) {
                            return (0, r.useMemo)(
                                () =>
                                    e.reduce((e, n) => {
                                        const {sensor: r} = n;
                                        return [
                                            ...e,
                                            ...r.activators.map(e => ({
                                                eventName: e.eventName,
                                                handler: t(e.handler, n)
                                            }))
                                        ];
                                    }, []),
                                [e, t]
                            );
                        })(h, st);
                    !(function (e) {
                        (0, r.useEffect)(
                            () => {
                                if (!i.Sw) return;
                                const t = e.map(e => {
                                    let {sensor: t} = e;
                                    return null == t.setup ? void 0 : t.setup();
                                });
                                return () => {
                                    for (const e of t) null == e || e();
                                };
                            },
                            e.map(e => {
                                let {sensor: t} = e;
                                return t;
                            })
                        );
                    })(h),
                        (0, i.Es)(() => {
                            fe && k === Ke.Initializing && I(Ke.Initialized);
                        }, [fe, k]),
                        (0, r.useEffect)(() => {
                            const {onDragMove: e} = ee.current,
                                {
                                    active: t,
                                    activatorEvent: n,
                                    collisions: r,
                                    over: i
                                } = xe.current;
                            if (!t || !n) return;
                            const a = {
                                active: t,
                                activatorEvent: n,
                                collisions: r,
                                delta: {x: et.x, y: et.y},
                                over: i
                            };
                            (0, o.unstable_batchedUpdates)(() => {
                                null == e || e(a),
                                    S({type: 'onDragMove', event: a});
                            });
                        }, [et.x, et.y]),
                        (0, r.useEffect)(() => {
                            const {
                                active: e,
                                activatorEvent: t,
                                collisions: n,
                                droppableContainers: r,
                                scrollAdjustedTranslate: i
                            } = xe.current;
                            if (!e || null == J.current || !t || !i) return;
                            const {onDragOver: a} = ee.current,
                                l = r.get(rt),
                                s =
                                    l && l.rect.current
                                        ? {
                                              id: l.id,
                                              rect: l.rect.current,
                                              data: l.data,
                                              disabled: l.disabled
                                          }
                                        : null,
                                c = {
                                    active: e,
                                    activatorEvent: t,
                                    collisions: n,
                                    delta: {x: i.x, y: i.y},
                                    over: s
                                };
                            (0, o.unstable_batchedUpdates)(() => {
                                it(s),
                                    null == a || a(c),
                                    S({type: 'onDragOver', event: c});
                            });
                        }, [rt]),
                        (0, i.Es)(() => {
                            (xe.current = {
                                activatorEvent: Z,
                                active: H,
                                activeNode: se,
                                collisionRect: tt,
                                collisions: nt,
                                droppableRects: ie,
                                draggableNodes: j,
                                draggingNode: Ae,
                                draggingNodeRect: Fe,
                                droppableContainers: X,
                                over: ot,
                                scrollableAncestors: qe,
                                scrollAdjustedTranslate: et
                            }),
                                (_.current = {initial: Fe, translated: tt});
                        }, [H, se, nt, tt, j, Ae, Fe, ie, X, ot, qe, et]),
                        (function (e) {
                            let {
                                acceleration: t,
                                activator: n = ve.Pointer,
                                canScroll: o,
                                draggingRect: a,
                                enabled: l,
                                interval: s = 5,
                                order: c = ge.TreeOrder,
                                pointerCoordinates: u,
                                scrollableAncestors: d,
                                scrollableAncestorRects: f,
                                delta: v,
                                threshold: g
                            } = e;
                            const h = (function (e) {
                                    let {delta: t, disabled: n} = e;
                                    const r = (0, i.ZC)(t);
                                    return (0, i.KG)(
                                        e => {
                                            if (n || !r || !e) return he;
                                            const o = Math.sign(t.x - r.x),
                                                i = Math.sign(t.y - r.y);
                                            return {
                                                x: {
                                                    [P.Backward]:
                                                        e.x[P.Backward] ||
                                                        -1 === o,
                                                    [P.Forward]:
                                                        e.x[P.Forward] ||
                                                        1 === o
                                                },
                                                y: {
                                                    [P.Backward]:
                                                        e.y[P.Backward] ||
                                                        -1 === i,
                                                    [P.Forward]:
                                                        e.y[P.Forward] ||
                                                        1 === i
                                                }
                                            };
                                        },
                                        [n, t, r]
                                    );
                                })({delta: v, disabled: !l}),
                                [p, b] = (0, i.$$)(),
                                m = (0, r.useRef)({x: 0, y: 0}),
                                y = (0, r.useRef)({x: 0, y: 0}),
                                w = (0, r.useMemo)(() => {
                                    switch (n) {
                                        case ve.Pointer:
                                            return u
                                                ? {
                                                      top: u.y,
                                                      bottom: u.y,
                                                      left: u.x,
                                                      right: u.x
                                                  }
                                                : null;
                                        case ve.DraggableRect:
                                            return a;
                                    }
                                }, [n, a, u]),
                                x = (0, r.useRef)(null),
                                E = (0, r.useCallback)(() => {
                                    const e = x.current;
                                    if (!e) return;
                                    const t = m.current.x * y.current.x,
                                        n = m.current.y * y.current.y;
                                    e.scrollBy(t, n);
                                }, []),
                                C = (0, r.useMemo)(
                                    () =>
                                        c === ge.TreeOrder
                                            ? [...d].reverse()
                                            : d,
                                    [c, d]
                                );
                            (0, r.useEffect)(() => {
                                if (l && d.length && w) {
                                    for (const e of C) {
                                        if (!1 === (null == o ? void 0 : o(e)))
                                            continue;
                                        const n = d.indexOf(e),
                                            r = f[n];
                                        if (!r) continue;
                                        const {direction: i, speed: a} = F(
                                            e,
                                            r,
                                            w,
                                            t,
                                            g
                                        );
                                        for (const e of ['x', 'y'])
                                            h[e][i[e]] ||
                                                ((a[e] = 0), (i[e] = 0));
                                        if (a.x > 0 || a.y > 0)
                                            return (
                                                b(),
                                                (x.current = e),
                                                p(E, s),
                                                (m.current = a),
                                                void (y.current = i)
                                            );
                                    }
                                    (m.current = {x: 0, y: 0}),
                                        (y.current = {x: 0, y: 0}),
                                        b();
                                } else b();
                            }, [
                                t,
                                E,
                                o,
                                b,
                                l,
                                s,
                                JSON.stringify(w),
                                JSON.stringify(h),
                                p,
                                d,
                                C,
                                f,
                                JSON.stringify(g)
                            ]);
                        })({
                            ...ue,
                            delta: K,
                            draggingRect: tt,
                            pointerCoordinates: Qe,
                            scrollableAncestors: qe,
                            scrollableAncestorRects: He
                        });
                    const ut = (0, r.useMemo)(
                            () => ({
                                active: H,
                                activeNode: se,
                                activeNodeRect: fe,
                                activatorEvent: Z,
                                collisions: nt,
                                containerNodeRect: be,
                                dragOverlay: Te,
                                draggableNodes: j,
                                droppableContainers: X,
                                droppableRects: ie,
                                over: ot,
                                measureDroppableContainers: ae,
                                scrollableAncestors: qe,
                                scrollableAncestorRects: He,
                                measuringConfiguration: re,
                                measuringScheduled: le,
                                windowRect: _e
                            }),
                            [
                                H,
                                se,
                                fe,
                                Z,
                                nt,
                                be,
                                Te,
                                j,
                                X,
                                ie,
                                ot,
                                ae,
                                qe,
                                He,
                                re,
                                le,
                                _e
                            ]
                        ),
                        dt = (0, r.useMemo)(
                            () => ({
                                activatorEvent: Z,
                                activators: ct,
                                active: H,
                                activeNodeRect: fe,
                                ariaDescribedById: {draggable: te},
                                dispatch: C,
                                draggableNodes: j,
                                over: ot,
                                measureDroppableContainers: ae
                            }),
                            [Z, ct, H, fe, C, te, j, ot, ae]
                        );
                    return r.createElement(
                        c.Provider,
                        {value: N},
                        r.createElement(
                            Le.Provider,
                            {value: dt},
                            r.createElement(
                                ze.Provider,
                                {value: ut},
                                r.createElement(je.Provider, {value: at}, g)
                            ),
                            r.createElement(Pe, {
                                disabled:
                                    !1 === (null == u ? void 0 : u.restoreFocus)
                            })
                        ),
                        r.createElement(f, {...u, hiddenTextDescribedById: te})
                    );
                }),
                Xe = (0, r.createContext)(null),
                Ue = 'button',
                Ge = 'Droppable';
            function _e(e) {
                let {id: t, data: n, disabled: o = !1, attributes: a} = e;
                const l = (0, i.YG)(Ge),
                    {
                        activators: s,
                        activatorEvent: c,
                        active: u,
                        activeNodeRect: d,
                        ariaDescribedById: f,
                        draggableNodes: v,
                        over: g
                    } = (0, r.useContext)(Le),
                    {
                        role: h = Ue,
                        roleDescription: p = 'draggable',
                        tabIndex: b = 0
                    } = null != a ? a : {},
                    m = (null == u ? void 0 : u.id) === t,
                    y = (0, r.useContext)(m ? je : Xe),
                    [w, x] = (0, i.lk)(),
                    [E, C] = (0, i.lk)(),
                    R = (function (e, t) {
                        return (0, r.useMemo)(
                            () =>
                                e.reduce((e, n) => {
                                    let {eventName: r, handler: o} = n;
                                    return (
                                        (e[r] = e => {
                                            o(e, t);
                                        }),
                                        e
                                    );
                                }, {}),
                            [e, t]
                        );
                    })(s, t),
                    D = (0, i.YN)(n);
                return (
                    (0, i.Es)(
                        () => (
                            v.set(t, {
                                id: t,
                                key: l,
                                node: w,
                                activatorNode: E,
                                data: D
                            }),
                            () => {
                                const e = v.get(t);
                                e && e.key === l && v.delete(t);
                            }
                        ),
                        [v, t]
                    ),
                    {
                        active: u,
                        activatorEvent: c,
                        activeNodeRect: d,
                        attributes: (0, r.useMemo)(
                            () => ({
                                role: h,
                                tabIndex: b,
                                'aria-disabled': o,
                                'aria-pressed': !(!m || h !== Ue) || void 0,
                                'aria-roledescription': p,
                                'aria-describedby': f.draggable
                            }),
                            [o, h, b, m, p, f.draggable]
                        ),
                        isDragging: m,
                        listeners: o ? void 0 : R,
                        node: w,
                        over: g,
                        setNodeRef: x,
                        setActivatorNodeRef: C,
                        transform: y
                    }
                );
            }
            function qe() {
                return (0, r.useContext)(ze);
            }
            const He = 'Droppable',
                Je = {timeout: 25};
            function Qe(e) {
                let {
                    data: t,
                    disabled: n = !1,
                    id: o,
                    resizeObserverConfig: a
                } = e;
                const l = (0, i.YG)(He),
                    {
                        active: s,
                        dispatch: c,
                        over: u,
                        measureDroppableContainers: d
                    } = (0, r.useContext)(Le),
                    f = (0, r.useRef)({disabled: n}),
                    g = (0, r.useRef)(!1),
                    h = (0, r.useRef)(null),
                    p = (0, r.useRef)(null),
                    {
                        disabled: b,
                        updateMeasurementsFor: m,
                        timeout: y
                    } = {...Je, ...a},
                    w = (0, i.YN)(null != m ? m : o),
                    x = we({
                        callback: (0, r.useCallback)(() => {
                            g.current
                                ? (null != p.current && clearTimeout(p.current),
                                  (p.current = setTimeout(() => {
                                      d(
                                          Array.isArray(w.current)
                                              ? w.current
                                              : [w.current]
                                      ),
                                          (p.current = null);
                                  }, y)))
                                : (g.current = !0);
                        }, [y]),
                        disabled: b || !s
                    }),
                    E = (0, r.useCallback)(
                        (e, t) => {
                            x &&
                                (t && (x.unobserve(t), (g.current = !1)),
                                e && x.observe(e));
                        },
                        [x]
                    ),
                    [C, R] = (0, i.lk)(E),
                    D = (0, i.YN)(t);
                return (
                    (0, r.useEffect)(() => {
                        x &&
                            C.current &&
                            (x.disconnect(),
                            (g.current = !1),
                            x.observe(C.current));
                    }, [C, x]),
                    (0, i.Es)(
                        () => (
                            c({
                                type: v.RegisterDroppable,
                                element: {
                                    id: o,
                                    key: l,
                                    disabled: n,
                                    node: C,
                                    rect: h,
                                    data: D
                                }
                            }),
                            () =>
                                c({type: v.UnregisterDroppable, key: l, id: o})
                        ),
                        [o]
                    ),
                    (0, r.useEffect)(() => {
                        n !== f.current.disabled &&
                            (c({
                                type: v.SetDroppableDisabled,
                                id: o,
                                key: l,
                                disabled: n
                            }),
                            (f.current.disabled = n));
                    }, [o, l, n, c]),
                    {
                        active: s,
                        rect: h,
                        isOver: (null == u ? void 0 : u.id) === o,
                        node: C,
                        over: u,
                        setNodeRef: R
                    }
                );
            }
            function Ve(e) {
                let {animation: t, children: n} = e;
                const [o, a] = (0, r.useState)(null),
                    [l, s] = (0, r.useState)(null),
                    c = (0, i.ZC)(n);
                return (
                    n || o || !c || a(c),
                    (0, i.Es)(() => {
                        if (!l) return;
                        const e = null == o ? void 0 : o.key,
                            n = null == o ? void 0 : o.props.id;
                        null != e && null != n
                            ? Promise.resolve(t(n, l)).then(() => {
                                  a(null);
                              })
                            : a(null);
                    }, [t, o, l]),
                    r.createElement(
                        r.Fragment,
                        null,
                        n,
                        o ? (0, r.cloneElement)(o, {ref: s}) : null
                    )
                );
            }
            const Ze = {x: 0, y: 0, scaleX: 1, scaleY: 1};
            function $e(e) {
                let {children: t} = e;
                return r.createElement(
                    Le.Provider,
                    {value: Ae},
                    r.createElement(je.Provider, {value: Ze}, t)
                );
            }
            const et = {position: 'fixed', touchAction: 'none'},
                tt = e => ((0, i.kx)(e) ? 'transform 250ms ease' : void 0),
                nt = (0, r.forwardRef)((e, t) => {
                    let {
                        as: n,
                        activatorEvent: o,
                        adjustScale: a,
                        children: l,
                        className: s,
                        rect: c,
                        style: u,
                        transform: d,
                        transition: f = tt
                    } = e;
                    if (!c) return null;
                    const v = a ? d : {...d, scaleX: 1, scaleY: 1},
                        g = {
                            ...et,
                            width: c.width,
                            height: c.height,
                            top: c.top,
                            left: c.left,
                            transform: i.Ks.Transform.toString(v),
                            transformOrigin: a && o ? m(o, c) : void 0,
                            transition: 'function' == typeof f ? f(o) : f,
                            ...u
                        };
                    return r.createElement(
                        n,
                        {className: s, style: g, ref: t},
                        l
                    );
                }),
                rt = e => t => {
                    let {active: n, dragOverlay: r} = t;
                    const o = {},
                        {styles: i, className: a} = e;
                    if (null != i && i.active)
                        for (const [e, t] of Object.entries(i.active))
                            void 0 !== t &&
                                ((o[e] = n.node.style.getPropertyValue(e)),
                                n.node.style.setProperty(e, t));
                    if (null != i && i.dragOverlay)
                        for (const [e, t] of Object.entries(i.dragOverlay))
                            void 0 !== t && r.node.style.setProperty(e, t);
                    return (
                        null != a && a.active && n.node.classList.add(a.active),
                        null != a &&
                            a.dragOverlay &&
                            r.node.classList.add(a.dragOverlay),
                        function () {
                            for (const [e, t] of Object.entries(o))
                                n.node.style.setProperty(e, t);
                            null != a &&
                                a.active &&
                                n.node.classList.remove(a.active);
                        }
                    );
                },
                ot = {
                    duration: 250,
                    easing: 'ease',
                    keyframes: e => {
                        let {
                            transform: {initial: t, final: n}
                        } = e;
                        return [
                            {transform: i.Ks.Transform.toString(t)},
                            {transform: i.Ks.Transform.toString(n)}
                        ];
                    },
                    sideEffects: rt({styles: {active: {opacity: '0'}}})
                };
            let it = 0;
            function at(e) {
                return (0, r.useMemo)(() => {
                    if (null != e) return it++, it;
                }, [e]);
            }
            const lt = r.memo(e => {
                let {
                    adjustScale: t = !1,
                    children: n,
                    dropAnimation: o,
                    style: a,
                    transition: l,
                    modifiers: s,
                    wrapperElement: c = 'div',
                    className: u,
                    zIndex: d = 999
                } = e;
                const {
                        activatorEvent: f,
                        active: v,
                        activeNodeRect: g,
                        containerNodeRect: h,
                        draggableNodes: p,
                        droppableContainers: b,
                        dragOverlay: m,
                        over: y,
                        measuringConfiguration: w,
                        scrollableAncestors: x,
                        scrollableAncestorRects: E,
                        windowRect: C
                    } = qe(),
                    R = (0, r.useContext)(je),
                    D = at(null == v ? void 0 : v.id),
                    S = We(s, {
                        activatorEvent: f,
                        active: v,
                        activeNodeRect: g,
                        containerNodeRect: h,
                        draggingNodeRect: m.rect,
                        over: y,
                        overlayNodeRect: m.rect,
                        scrollableAncestors: x,
                        scrollableAncestorRects: E,
                        transform: R,
                        windowRect: C
                    }),
                    M = ye(g),
                    k = (function (e) {
                        let {
                            config: t,
                            draggableNodes: n,
                            droppableContainers: r,
                            measuringConfiguration: o
                        } = e;
                        return (0, i._q)((e, a) => {
                            if (null === t) return;
                            const l = n.get(e);
                            if (!l) return;
                            const s = l.node.current;
                            if (!s) return;
                            const c = Me(a);
                            if (!c) return;
                            const {transform: u} = (0, i.zk)(
                                    a
                                ).getComputedStyle(a),
                                d = N(u);
                            if (!d) return;
                            const f =
                                'function' == typeof t
                                    ? t
                                    : (function (e) {
                                          const {
                                              duration: t,
                                              easing: n,
                                              sideEffects: r,
                                              keyframes: o
                                          } = {...ot, ...e};
                                          return e => {
                                              let {
                                                  active: i,
                                                  dragOverlay: a,
                                                  transform: l,
                                                  ...s
                                              } = e;
                                              if (!t) return;
                                              const c =
                                                      a.rect.left - i.rect.left,
                                                  u = a.rect.top - i.rect.top,
                                                  d = {
                                                      scaleX:
                                                          1 !== l.scaleX
                                                              ? (i.rect.width *
                                                                    l.scaleX) /
                                                                a.rect.width
                                                              : 1,
                                                      scaleY:
                                                          1 !== l.scaleY
                                                              ? (i.rect.height *
                                                                    l.scaleY) /
                                                                a.rect.height
                                                              : 1
                                                  },
                                                  f = {
                                                      x: l.x - c,
                                                      y: l.y - u,
                                                      ...d
                                                  },
                                                  v = o({
                                                      ...s,
                                                      active: i,
                                                      dragOverlay: a,
                                                      transform: {
                                                          initial: l,
                                                          final: f
                                                      }
                                                  }),
                                                  [g] = v,
                                                  h = v[v.length - 1];
                                              if (
                                                  JSON.stringify(g) ===
                                                  JSON.stringify(h)
                                              )
                                                  return;
                                              const p =
                                                      null == r
                                                          ? void 0
                                                          : r({
                                                                active: i,
                                                                dragOverlay: a,
                                                                ...s
                                                            }),
                                                  b = a.node.animate(v, {
                                                      duration: t,
                                                      easing: n,
                                                      fill: 'forwards'
                                                  });
                                              return new Promise(e => {
                                                  b.onfinish = () => {
                                                      null == p || p(), e();
                                                  };
                                              });
                                          };
                                      })(t);
                            return (
                                G(s, o.draggable.measure),
                                f({
                                    active: {
                                        id: e,
                                        data: l.data,
                                        node: s,
                                        rect: o.draggable.measure(s)
                                    },
                                    draggableNodes: n,
                                    dragOverlay: {
                                        node: a,
                                        rect: o.dragOverlay.measure(c)
                                    },
                                    droppableContainers: r,
                                    measuringConfiguration: o,
                                    transform: d
                                })
                            );
                        });
                    })({
                        config: o,
                        draggableNodes: p,
                        droppableContainers: b,
                        measuringConfiguration: w
                    }),
                    O = M ? m.setRef : void 0;
                return r.createElement(
                    $e,
                    null,
                    r.createElement(
                        Ve,
                        {animation: k},
                        v && D
                            ? r.createElement(
                                  nt,
                                  {
                                      key: D,
                                      id: v.id,
                                      ref: O,
                                      as: c,
                                      activatorEvent: f,
                                      adjustScale: t,
                                      className: u,
                                      transition: l,
                                      rect: M,
                                      style: {zIndex: d, ...a},
                                      transform: S
                                  },
                                  n
                              )
                            : null
                    )
                );
            });
        },
        43627: (e, t, n) => {
            n.d(t, {gB: () => g, gl: () => x, kL: () => d, m$: () => u});
            var r = n(96540),
                o = n(65756),
                i = n(74979);
            function a(e, t, n) {
                const r = e.slice();
                return (
                    r.splice(n < 0 ? r.length + n : n, 0, r.splice(t, 1)[0]), r
                );
            }
            function l(e, t) {
                return e.reduce((e, n, r) => {
                    const o = t.get(n);
                    return o && (e[r] = o), e;
                }, Array(e.length));
            }
            function s(e) {
                return null !== e && e >= 0;
            }
            const c = {scaleX: 1, scaleY: 1},
                u = e => {
                    var t;
                    let {
                        rects: n,
                        activeNodeRect: r,
                        activeIndex: o,
                        overIndex: i,
                        index: a
                    } = e;
                    const l = null != (t = n[o]) ? t : r;
                    if (!l) return null;
                    const s = (function (e, t, n) {
                        const r = e[t],
                            o = e[t - 1],
                            i = e[t + 1];
                        return r && (o || i)
                            ? n < t
                                ? o
                                    ? r.left - (o.left + o.width)
                                    : i.left - (r.left + r.width)
                                : i
                                ? i.left - (r.left + r.width)
                                : r.left - (o.left + o.width)
                            : 0;
                    })(n, a, o);
                    if (a === o) {
                        const e = n[i];
                        return e
                            ? {
                                  x:
                                      o < i
                                          ? e.left +
                                            e.width -
                                            (l.left + l.width)
                                          : e.left - l.left,
                                  y: 0,
                                  ...c
                              }
                            : null;
                    }
                    return a > o && a <= i
                        ? {x: -l.width - s, y: 0, ...c}
                        : a < o && a >= i
                        ? {x: l.width + s, y: 0, ...c}
                        : {x: 0, y: 0, ...c};
                },
                d = e => {
                    let {rects: t, activeIndex: n, overIndex: r, index: o} = e;
                    const i = a(t, r, n),
                        l = t[o],
                        s = i[o];
                    return s && l
                        ? {
                              x: s.left - l.left,
                              y: s.top - l.top,
                              scaleX: s.width / l.width,
                              scaleY: s.height / l.height
                          }
                        : null;
                },
                f = 'Sortable',
                v = r.createContext({
                    activeIndex: -1,
                    containerId: f,
                    disableTransforms: !1,
                    items: [],
                    overIndex: -1,
                    useDragOverlay: !1,
                    sortedRects: [],
                    strategy: d,
                    disabled: {draggable: !1, droppable: !1}
                });
            function g(e) {
                let {
                    children: t,
                    id: n,
                    items: a,
                    strategy: s = d,
                    disabled: c = !1
                } = e;
                const {
                        active: u,
                        dragOverlay: g,
                        droppableRects: h,
                        over: p,
                        measureDroppableContainers: b
                    } = (0, o.fF)(),
                    m = (0, i.YG)(f, n),
                    y = Boolean(null !== g.rect),
                    w = (0, r.useMemo)(
                        () =>
                            a.map(e =>
                                'object' == typeof e && 'id' in e ? e.id : e
                            ),
                        [a]
                    ),
                    x = null != u,
                    E = u ? w.indexOf(u.id) : -1,
                    C = p ? w.indexOf(p.id) : -1,
                    R = (0, r.useRef)(w),
                    D = !(function (e, t) {
                        if (e === t) return !0;
                        if (e.length !== t.length) return !1;
                        for (let n = 0; n < e.length; n++)
                            if (e[n] !== t[n]) return !1;
                        return !0;
                    })(w, R.current),
                    S = (-1 !== C && -1 === E) || D,
                    M = (function (e) {
                        return 'boolean' == typeof e
                            ? {draggable: e, droppable: e}
                            : e;
                    })(c);
                (0, i.Es)(() => {
                    D && x && b(w);
                }, [D, w, x, b]),
                    (0, r.useEffect)(() => {
                        R.current = w;
                    }, [w]);
                const N = (0, r.useMemo)(
                    () => ({
                        activeIndex: E,
                        containerId: m,
                        disabled: M,
                        disableTransforms: S,
                        items: w,
                        overIndex: C,
                        useDragOverlay: y,
                        sortedRects: l(w, h),
                        strategy: s
                    }),
                    [E, m, M.draggable, M.droppable, S, w, C, h, y, s]
                );
                return r.createElement(v.Provider, {value: N}, t);
            }
            const h = e => {
                    let {id: t, items: n, activeIndex: r, overIndex: o} = e;
                    return a(n, r, o).indexOf(t);
                },
                p = e => {
                    let {
                        containerId: t,
                        isSorting: n,
                        wasDragging: r,
                        index: o,
                        items: i,
                        newIndex: a,
                        previousItems: l,
                        previousContainerId: s,
                        transition: c
                    } = e;
                    return !(
                        !c ||
                        !r ||
                        (l !== i && o === a) ||
                        (!n && (a === o || t !== s))
                    );
                },
                b = {duration: 200, easing: 'ease'},
                m = 'transform',
                y = i.Ks.Transition.toString({
                    property: m,
                    duration: 0,
                    easing: 'linear'
                }),
                w = {roleDescription: 'sortable'};
            function x(e) {
                let {
                    animateLayoutChanges: t = p,
                    attributes: n,
                    disabled: a,
                    data: l,
                    getNewIndex: c = h,
                    id: u,
                    strategy: d,
                    resizeObserverConfig: f,
                    transition: g = b
                } = e;
                const {
                        items: x,
                        containerId: E,
                        activeIndex: C,
                        disabled: R,
                        disableTransforms: D,
                        sortedRects: S,
                        overIndex: M,
                        useDragOverlay: N,
                        strategy: k
                    } = (0, r.useContext)(v),
                    O = (function (e, t) {
                        var n, r;
                        return 'boolean' == typeof e
                            ? {draggable: e, droppable: !1}
                            : {
                                  draggable:
                                      null !=
                                      (n = null == e ? void 0 : e.draggable)
                                          ? n
                                          : t.draggable,
                                  droppable:
                                      null !=
                                      (r = null == e ? void 0 : e.droppable)
                                          ? r
                                          : t.droppable
                              };
                    })(a, R),
                    I = x.indexOf(u),
                    T = (0, r.useMemo)(
                        () => ({
                            sortable: {containerId: E, index: I, items: x},
                            ...l
                        }),
                        [E, l, I, x]
                    ),
                    A = (0, r.useMemo)(() => x.slice(x.indexOf(u)), [x, u]),
                    {
                        rect: L,
                        node: z,
                        isOver: B,
                        setNodeRef: Y
                    } = (0, o.zM)({
                        id: u,
                        data: T,
                        disabled: O.droppable,
                        resizeObserverConfig: {updateMeasurementsFor: A, ...f}
                    }),
                    {
                        active: P,
                        activatorEvent: W,
                        activeNodeRect: j,
                        attributes: K,
                        setNodeRef: F,
                        listeners: X,
                        isDragging: U,
                        over: G,
                        setActivatorNodeRef: _,
                        transform: q
                    } = (0, o.PM)({
                        id: u,
                        data: T,
                        attributes: {...w, ...n},
                        disabled: O.draggable
                    }),
                    H = (0, i.jn)(Y, F),
                    J = Boolean(P),
                    Q = J && !D && s(C) && s(M),
                    V = !N && U,
                    Z = V && Q ? q : null,
                    $ = Q
                        ? null != Z
                            ? Z
                            : (null != d ? d : k)({
                                  rects: S,
                                  activeNodeRect: j,
                                  activeIndex: C,
                                  overIndex: M,
                                  index: I
                              })
                        : null,
                    ee =
                        s(C) && s(M)
                            ? c({id: u, items: x, activeIndex: C, overIndex: M})
                            : I,
                    te = null == P ? void 0 : P.id,
                    ne = (0, r.useRef)({
                        activeId: te,
                        items: x,
                        newIndex: ee,
                        containerId: E
                    }),
                    re = x !== ne.current.items,
                    oe = t({
                        active: P,
                        containerId: E,
                        isDragging: U,
                        isSorting: J,
                        id: u,
                        index: I,
                        items: x,
                        newIndex: ne.current.newIndex,
                        previousItems: ne.current.items,
                        previousContainerId: ne.current.containerId,
                        transition: g,
                        wasDragging: null != ne.current.activeId
                    }),
                    ie = (function (e) {
                        let {disabled: t, index: n, node: a, rect: l} = e;
                        const [s, c] = (0, r.useState)(null),
                            u = (0, r.useRef)(n);
                        return (
                            (0, i.Es)(() => {
                                if (!t && n !== u.current && a.current) {
                                    const e = l.current;
                                    if (e) {
                                        const t = (0, o.Sj)(a.current, {
                                                ignoreTransform: !0
                                            }),
                                            n = {
                                                x: e.left - t.left,
                                                y: e.top - t.top,
                                                scaleX: e.width / t.width,
                                                scaleY: e.height / t.height
                                            };
                                        (n.x || n.y) && c(n);
                                    }
                                }
                                n !== u.current && (u.current = n);
                            }, [t, n, a, l]),
                            (0, r.useEffect)(() => {
                                s && c(null);
                            }, [s]),
                            s
                        );
                    })({disabled: !oe, index: I, node: z, rect: L});
                return (
                    (0, r.useEffect)(() => {
                        J &&
                            ne.current.newIndex !== ee &&
                            (ne.current.newIndex = ee),
                            E !== ne.current.containerId &&
                                (ne.current.containerId = E),
                            x !== ne.current.items && (ne.current.items = x);
                    }, [J, ee, E, x]),
                    (0, r.useEffect)(() => {
                        if (te === ne.current.activeId) return;
                        if (te && !ne.current.activeId)
                            return void (ne.current.activeId = te);
                        const e = setTimeout(() => {
                            ne.current.activeId = te;
                        }, 50);
                        return () => clearTimeout(e);
                    }, [te]),
                    {
                        active: P,
                        activeIndex: C,
                        attributes: K,
                        data: T,
                        rect: L,
                        index: I,
                        newIndex: ee,
                        items: x,
                        isOver: B,
                        isSorting: J,
                        isDragging: U,
                        listeners: X,
                        node: z,
                        overIndex: M,
                        over: G,
                        setNodeRef: H,
                        setActivatorNodeRef: _,
                        setDroppableNodeRef: Y,
                        setDraggableNodeRef: F,
                        transform: null != ie ? ie : $,
                        transition:
                            ie || (re && ne.current.newIndex === I)
                                ? y
                                : (V && !(0, i.kx)(W)) || !g
                                ? void 0
                                : J || oe
                                ? i.Ks.Transition.toString({...g, property: m})
                                : void 0
                    }
                );
            }
            o.vL.Down, o.vL.Right, o.vL.Up, o.vL.Left;
        },
        74979: (e, t, n) => {
            n.d(t, {
                $$: () => h,
                Es: () => v,
                KG: () => b,
                Ks: () => M,
                Ll: () => l,
                Re: () => R,
                Sw: () => i,
                TW: () => f,
                WQ: () => C,
                YG: () => x,
                YN: () => p,
                ZC: () => y,
                _q: () => g,
                ag: () => k,
                e_: () => S,
                jn: () => o,
                kx: () => D,
                l6: () => a,
                lk: () => m,
                sb: () => u,
                wz: () => c,
                xZ: () => d,
                zk: () => s
            });
            var r = n(96540);
            function o() {
                for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                )
                    t[n] = arguments[n];
                return (0, r.useMemo)(
                    () => e => {
                        t.forEach(t => t(e));
                    },
                    t
                );
            }
            const i =
                'undefined' != typeof window &&
                void 0 !== window.document &&
                void 0 !== window.document.createElement;
            function a(e) {
                const t = Object.prototype.toString.call(e);
                return '[object Window]' === t || '[object global]' === t;
            }
            function l(e) {
                return 'nodeType' in e;
            }
            function s(e) {
                var t, n;
                return e
                    ? a(e)
                        ? e
                        : l(e) &&
                          null !=
                              (t =
                                  null == (n = e.ownerDocument)
                                      ? void 0
                                      : n.defaultView)
                        ? t
                        : window
                    : window;
            }
            function c(e) {
                const {Document: t} = s(e);
                return e instanceof t;
            }
            function u(e) {
                return !a(e) && e instanceof s(e).HTMLElement;
            }
            function d(e) {
                return e instanceof s(e).SVGElement;
            }
            function f(e) {
                return e
                    ? a(e)
                        ? e.document
                        : l(e)
                        ? c(e)
                            ? e
                            : u(e) || d(e)
                            ? e.ownerDocument
                            : document
                        : document
                    : document;
            }
            const v = i ? r.useLayoutEffect : r.useEffect;
            function g(e) {
                const t = (0, r.useRef)(e);
                return (
                    v(() => {
                        t.current = e;
                    }),
                    (0, r.useCallback)(function () {
                        for (
                            var e = arguments.length, n = new Array(e), r = 0;
                            r < e;
                            r++
                        )
                            n[r] = arguments[r];
                        return null == t.current ? void 0 : t.current(...n);
                    }, [])
                );
            }
            function h() {
                const e = (0, r.useRef)(null);
                return [
                    (0, r.useCallback)((t, n) => {
                        e.current = setInterval(t, n);
                    }, []),
                    (0, r.useCallback)(() => {
                        null !== e.current &&
                            (clearInterval(e.current), (e.current = null));
                    }, [])
                ];
            }
            function p(e, t) {
                void 0 === t && (t = [e]);
                const n = (0, r.useRef)(e);
                return (
                    v(() => {
                        n.current !== e && (n.current = e);
                    }, t),
                    n
                );
            }
            function b(e, t) {
                const n = (0, r.useRef)();
                return (0, r.useMemo)(() => {
                    const t = e(n.current);
                    return (n.current = t), t;
                }, [...t]);
            }
            function m(e) {
                const t = g(e),
                    n = (0, r.useRef)(null),
                    o = (0, r.useCallback)(e => {
                        e !== n.current && (null == t || t(e, n.current)),
                            (n.current = e);
                    }, []);
                return [n, o];
            }
            function y(e) {
                const t = (0, r.useRef)();
                return (
                    (0, r.useEffect)(() => {
                        t.current = e;
                    }, [e]),
                    t.current
                );
            }
            let w = {};
            function x(e, t) {
                return (0, r.useMemo)(() => {
                    if (t) return t;
                    const n = null == w[e] ? 0 : w[e] + 1;
                    return (w[e] = n), e + '-' + n;
                }, [e, t]);
            }
            function E(e) {
                return function (t) {
                    for (
                        var n = arguments.length,
                            r = new Array(n > 1 ? n - 1 : 0),
                            o = 1;
                        o < n;
                        o++
                    )
                        r[o - 1] = arguments[o];
                    return r.reduce(
                        (t, n) => {
                            const r = Object.entries(n);
                            for (const [n, o] of r) {
                                const r = t[n];
                                null != r && (t[n] = r + e * o);
                            }
                            return t;
                        },
                        {...t}
                    );
                };
            }
            const C = E(1),
                R = E(-1);
            function D(e) {
                if (!e) return !1;
                const {KeyboardEvent: t} = s(e.target);
                return t && e instanceof t;
            }
            function S(e) {
                if (
                    (function (e) {
                        if (!e) return !1;
                        const {TouchEvent: t} = s(e.target);
                        return t && e instanceof t;
                    })(e)
                ) {
                    if (e.touches && e.touches.length) {
                        const {clientX: t, clientY: n} = e.touches[0];
                        return {x: t, y: n};
                    }
                    if (e.changedTouches && e.changedTouches.length) {
                        const {clientX: t, clientY: n} = e.changedTouches[0];
                        return {x: t, y: n};
                    }
                }
                return (function (e) {
                    return 'clientX' in e && 'clientY' in e;
                })(e)
                    ? {x: e.clientX, y: e.clientY}
                    : null;
            }
            const M = Object.freeze({
                    Translate: {
                        toString(e) {
                            if (!e) return;
                            const {x: t, y: n} = e;
                            return (
                                'translate3d(' +
                                (t ? Math.round(t) : 0) +
                                'px, ' +
                                (n ? Math.round(n) : 0) +
                                'px, 0)'
                            );
                        }
                    },
                    Scale: {
                        toString(e) {
                            if (!e) return;
                            const {scaleX: t, scaleY: n} = e;
                            return 'scaleX(' + t + ') scaleY(' + n + ')';
                        }
                    },
                    Transform: {
                        toString(e) {
                            if (e)
                                return [
                                    M.Translate.toString(e),
                                    M.Scale.toString(e)
                                ].join(' ');
                        }
                    },
                    Transition: {
                        toString(e) {
                            let {property: t, duration: n, easing: r} = e;
                            return t + ' ' + n + 'ms ' + r;
                        }
                    }
                }),
                N =
                    'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]';
            function k(e) {
                return e.matches(N) ? e : e.querySelector(N);
            }
        }
    }
]);
