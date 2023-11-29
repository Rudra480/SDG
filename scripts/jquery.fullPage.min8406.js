/*!
 * fullPage 2.8.6
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
! function(e, n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return n(t, e, e.document, e.Math)
    }) : "object" == typeof exports && exports ? module.exports = n(require("jquery"), e, e.document, e.Math) : n(jQuery, e, e.document, e.Math)
}("undefined" != typeof window ? window : this, function(e, n, t, o, i) {
    "use strict";
    var a = "fullpage-wrapper",
        r = "." + a,
        s = "fp-scrollable",
        l = "." + s,
        c = "fp-responsive",
        d = "fp-notransition",
        f = "fp-destroyed",
        u = "fp-enabled",
        h = "fp-viewing",
        p = "active",
        v = "." + p,
        m = "fp-completely",
        g = "." + m,
        S = ".section",
        w = "fp-section",
        y = "." + w,
        b = y + v,
        x = y + ":first",
        C = y + ":last",
        T = "fp-tableCell",
        k = "." + T,
        I = "fp-auto-height",
        L = "fp-normal-scroll",
        E = "fp-nav",
        A = "#" + E,
        M = "fp-tooltip",
        H = "." + M,
        O = "fp-show-active",
        z = ".slide",
        B = "fp-slide",
        R = "." + B,
        D = R + v,
        P = "fp-slides",
        F = "." + P,
        V = "fp-slidesContainer",
        q = "." + V,
        Y = "fp-table",
        N = "fp-slidesNav",
        U = "." + N,
        X = U + " a",
        W = "fp-controlArrow",
        j = "." + W,
        K = "fp-prev",
        Q = "." + K,
        _ = W + " " + K,
        G = j + Q,
        J = "fp-next",
        Z = "." + J,
        $ = W + " " + J,
        ee = j + Z,
        ne = e(n),
        te = e(t),
        oe = {
            scrollbars: !0,
            mouseWheel: !0,
            hideScrollbars: !1,
            fadeScrollbars: !1,
            disableMouse: !0,
            interactiveScrollbars: !0
        };
    e.fn.fullpage = function(s) {
        function l(n, t) {
            at("autoScrolling", n, t);
            var o = e(b);
            s.autoScrolling && !s.scrollBar ? (lt.css({
                overflow: "hidden",
                height: "100%"
            }), W(Mt.recordHistory, "internal"), gt.css({
                "-ms-touch-action": "none",
                "touch-action": "none"
            }), o.length && et(o.position().top)) : (lt.css({
                overflow: "visible",
                height: "initial"
            }), W(!1, "internal"), gt.css({
                "-ms-touch-action": "",
                "touch-action": ""
            }), et(0), o.length && lt.scrollTop(o.position().top))
        }

        function W(e, n) {
            at("recordHistory", e, n)
        }

        function Q(e, n) {
            "internal" !== n && s.fadingEffect && dt.fadingEffect && dt.fadingEffect.update(e), at("scrollingSpeed", e, n)
        }

        function J(e, n) {
            at("fitToSection", e, n)
        }

        function Z(e) {
            s.lockAnchors = e
        }

        function ae(e) {
            e ? (jn(), Kn()) : (Wn(), Qn())
        }

        function re(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function(e, t) {
                tt(n, t, "m")
            })) : n ? (ae(!0), _n()) : (ae(!1), Gn())
        }

        function se(n, t) {
            "undefined" != typeof t ? (t = t.replace(/ /g, "").split(","), e.each(t, function(e, t) {
                tt(n, t, "k")
            })) : s.keyboardScrolling = n
        }

        function le() {
            var n = e(b).prev(y);
            n.length || !s.loopTop && !s.continuousVertical || (n = e(y).last()), n.length && Ke(n, null, !0)
        }

        function ce() {
            var n = e(b).next(y);
            n.length || !s.loopBottom && !s.continuousVertical || (n = e(y).first()), n.length && Ke(n, null, !1)
        }

        function de(e, n) {
            Q(0, "internal"), fe(e, n), Q(Mt.scrollingSpeed, "internal")
        }

        function fe(e, n) {
            var t = Rn(e);
            "undefined" != typeof n ? Pn(e, n) : t.length > 0 && Ke(t)
        }

        function ue(e) {
            Xe("right", e)
        }

        function he(e) {
            Xe("left", e)
        }

        function pe(n) {
            if (!gt.hasClass(f)) {
                wt = !0, St = ne.height(), e(y).each(function() {
                    var n = e(this).find(F),
                        t = e(this).find(R);
                    s.verticalCentered && e(this).find(k).css("height", zn(e(this)) + "px"), e(this).css("height", St + "px"), s.scrollOverflow && (t.length ? t.each(function() {
                        Hn(e(this))
                    }) : Hn(e(this))), t.length > 1 && Sn(n, n.find(D))
                });
                var t = e(b),
                    o = t.index(y);
                o && de(o + 1), wt = !1, e.isFunction(s.afterResize) && n && s.afterResize.call(gt), e.isFunction(s.afterReBuild) && !n && s.afterReBuild.call(gt)
            }
        }

        function ve(n) {
            var t = ct.hasClass(c);
            n ? t || (l(!1, "internal"), J(!1, "internal"), e(A).hide(), ct.addClass(c), e.isFunction(s.afterResponsive) && s.afterResponsive.call(gt, n), s.responsiveSlides && dt.responsiveSlides && dt.responsiveSlides.toSections()) : t && (l(Mt.autoScrolling, "internal"), J(Mt.autoScrolling, "internal"), e(A).show(), ct.removeClass(c), e.isFunction(s.afterResponsive) && s.afterResponsive.call(gt, n), s.responsiveSlides && dt.responsiveSlides && dt.responsiveSlides.toSlides())
        }

        function me() {
            return {
                options: s,
                internals: {
                    getXmovement: Mn,
                    removeAnimation: kn,
                    getTransforms: nt,
                    lazyLoad: $e,
                    addAnimation: Tn,
                    performHorizontalMove: yn,
                    silentLandscapeScroll: $n,
                    keepSlidesPosition: We,
                    silentScroll: et,
                    styleSlides: xe
                }
            }
        }

        function ge() {
            s.css3 && (s.css3 = Xn()), s.scrollBar = s.scrollBar || s.hybrid, ye(), be(), re(!0), l(s.autoScrolling, "internal");
            var n = e(b).find(D);
            n.length && (0 !== e(b).index(y) || 0 === e(b).index(y) && 0 !== n.index()) && $n(n), Cn(), Un(), "complete" === t.readyState && an(), ne.on("load", an)
        }

        function Se() {
            ne.on("scroll", Be).on("hashchange", rn).blur(hn).resize(xn), te.keydown(sn).keyup(cn).on("click touchstart", A + " a", pn).on("click touchstart", X, vn).on("click", H, ln), e(y).on("click touchstart", j, un), s.normalScrollElements && (te.on("mouseenter", s.normalScrollElements, function() {
                ae(!1)
            }), te.on("mouseleave", s.normalScrollElements, function() {
                ae(!0)
            }))
        }

        function we(e) {
            var t = "fp_" + e + "Extension";
            dt[e] = "undefined" != typeof n[t] ? new n[t] : null
        }

        function ye() {
            var n = gt.find(s.sectionSelector);
            s.anchors.length || (s.anchors = n.filter("[data-anchor]").map(function() {
                return e(this).data("anchor").toString()
            }).get()), s.navigationTooltips.length || (s.navigationTooltips = n.filter("[data-tooltip]").map(function() {
                return e(this).data("tooltip").toString()
            }).get())
        }

        function be() {
            gt.css({
                height: "100%",
                position: "relative"
            }), gt.addClass(a), e("html").addClass(u), St = ne.height(), gt.removeClass(f), ke(), e(y).each(function(n) {
                var t = e(this),
                    o = t.find(R),
                    i = o.length;
                Ce(t, n), Te(t, n), i > 0 ? xe(t, o, i) : s.verticalCentered && On(t)
            }), s.fixedElements && s.css3 && e(s.fixedElements).appendTo(ct), s.navigation && Le(), Ae(), Me(), s.fadingEffect && dt.fadingEffect && dt.fadingEffect.apply(), s.scrollOverflow ? ("complete" === t.readyState && Ee(), ne.on("load", Ee)) : ze()
        }

        function xe(n, t, o) {
            var i = 100 * o,
                a = 100 / o;
            t.wrapAll('<div class="' + V + '" />'), t.parent().wrap('<div class="' + P + '" />'), n.find(q).css("width", i + "%"), o > 1 && (s.controlArrows && Ie(n), s.slidesNavigation && Vn(n, o)), t.each(function(n) {
                e(this).css("width", a + "%"), s.verticalCentered && On(e(this))
            });
            var r = n.find(D);
            r.length && (0 !== e(b).index(y) || 0 === e(b).index(y) && 0 !== r.index()) ? $n(r) : t.eq(0).addClass(p)
        }

        function Ce(n, t) {
            t || 0 !== e(b).length || n.addClass(p), n.css("height", St + "px"), s.paddingTop && n.css("padding-top", s.paddingTop), s.paddingBottom && n.css("padding-bottom", s.paddingBottom), "undefined" != typeof s.sectionsColor[t] && n.css("background-color", s.sectionsColor[t]), "undefined" != typeof s.anchors[t] && n.attr("data-anchor", s.anchors[t])
        }

        function Te(n, t) {
            "undefined" != typeof s.anchors[t] && n.hasClass(p) && En(s.anchors[t], t), s.menu && s.css3 && e(s.menu).closest(r).length && e(s.menu).appendTo(ct)
        }

        function ke() {
            gt.find(s.sectionSelector).addClass(w), gt.find(s.slideSelector).addClass(B)
        }

        function Ie(e) {
            e.find(F).after('<div class="' + _ + '"></div><div class="' + $ + '"></div>'), "#fff" != s.controlArrowColor && (e.find(ee).css("border-color", "transparent transparent transparent " + s.controlArrowColor), e.find(G).css("border-color", "transparent " + s.controlArrowColor + " transparent transparent")), s.loopHorizontal || e.find(G).hide()
        }

        function Le() {
            ct.append('<div id="' + E + '"><ul></ul></div>');
            var n = e(A);
            n.addClass(function() {
                return s.showActiveTooltip ? O + " " + s.navigationPosition : s.navigationPosition
            });
            for (var t = 0; t < e(y).length; t++) {
                var o = "";
                s.anchors.length && (o = s.anchors[t]);
                var i = '<li><a href="#' + o + '"><span></span></a>',
                    a = s.navigationTooltips[t];
                "undefined" != typeof a && "" !== a && (i += '<div class="' + M + " " + s.navigationPosition + '">' + a + "</div>"), i += "</li>", n.find("ul").append(i)
            }
            e(A).css("margin-top", "-" + e(A).height() / 2 + "px"), e(A).find("li").eq(e(b).index(y)).find("a").addClass(p)
        }

        function Ee() {
            e(y).each(function() {
                var n = e(this).find(R);
                n.length ? n.each(function() {
                    Hn(e(this))
                }) : Hn(e(this))
            }), ze()
        }

        function Ae() {
            gt.find('iframe[src*="youtube.com/embed/"]').each(function() {
                He(e(this), "enablejsapi=1")
            })
        }

        function Me() {
            gt.find('iframe[src*="player.vimeo.com/"]').each(function() {
                He(e(this), "api=1")
            })
        }

        function He(e, n) {
            var t = e.attr("src");
            e.attr("src", t + Oe(t) + n)
        }

        function Oe(e) {
            return /\?/.test(e) ? "&" : "?"
        }

        function ze() {
            var n = e(b);
            n.addClass(m), s.scrollOverflowHandler.afterRender && s.scrollOverflowHandler.afterRender(n), $e(n), en(n), e.isFunction(s.afterLoad) && s.afterLoad.call(n, n.data("anchor"), n.index(y) + 1), e.isFunction(s.afterRender) && s.afterRender.call(gt)
        }

        function Be() {
            var n;
            if (!s.autoScrolling || s.scrollBar) {
                var o = ne.scrollTop(),
                    i = De(o),
                    a = 0,
                    r = o + ne.height() / 2,
                    l = ct.height() - ne.height() === o,
                    c = t.querySelectorAll(y);
                if (l) a = c.length - 1;
                else
                    for (var d = 0; d < c.length; ++d) {
                        var f = c[d];
                        f.offsetTop <= r && (a = d)
                    }
                if (Re(i) && (e(b).hasClass(m) || e(b).addClass(m).siblings().removeClass(m)), n = e(c).eq(a), !n.hasClass(p)) {
                    Ht = !0;
                    var u = e(b),
                        h = u.index(y) + 1,
                        v = An(n),
                        g = n.data("anchor"),
                        S = n.index(y) + 1,
                        w = n.find(D);
                    if (w.length) var x = w.data("anchor"),
                        C = w.index();
                    bt && (n.addClass(p).siblings().removeClass(p), e.isFunction(s.onLeave) && s.onLeave.call(u, h, S, v), e.isFunction(s.afterLoad) && s.afterLoad.call(n, g, S), tn(u), $e(n), en(n), En(g, S - 1), s.anchors.length && (ft = g), qn(C, x, g, S)), clearTimeout(Lt), Lt = setTimeout(function() {
                        Ht = !1
                    }, 100)
                }
                s.fitToSection && (clearTimeout(Et), Et = setTimeout(function() {
                    bt && s.fitToSection && (e(b).is(n) && (wt = !0), Ke(e(b)), wt = !1)
                }, s.fitToSectionDelay))
            }
        }

        function Re(n) {
            var t = e(b).position().top,
                o = t + ne.height();
            return "up" == n ? o >= ne.scrollTop() + ne.height() : t <= ne.scrollTop()
        }

        function De(e) {
            var n = e > Ot ? "down" : "up";
            return Ot = e, Ft = e, n
        }

        function Pe(e, n) {
            if (Ct.m[e]) {
                var t = "down" === e ? "bottom" : "top",
                    o = "down" === e ? ce : le;
                if (dt.scrollHorizontally && (o = dt.scrollHorizontally.getScrollSection(e, o)), n.length > 0) {
                    if (!s.scrollOverflowHandler.isScrolled(t, n)) return !0;
                    o()
                } else o()
            }
        }

        function Fe(n) {
            var t = n.originalEvent,
                i = e(t.target).closest(y);
            if (!Ve(n.target) && qe(t)) {
                s.autoScrolling && n.preventDefault();
                var a = s.scrollOverflowHandler.scrollable(i);
                if (bt && !pt) {
                    var r = Zn(t);
                    Rt = r.y, Dt = r.x, i.find(F).length && o.abs(Bt - Dt) > o.abs(zt - Rt) ? o.abs(Bt - Dt) > ne.outerWidth() / 100 * s.touchSensitivity && (Bt > Dt ? Ct.m.right && ue(i) : Ct.m.left && he(i)) : s.autoScrolling && o.abs(zt - Rt) > ne.height() / 100 * s.touchSensitivity && (zt > Rt ? Pe("down", a) : Rt > zt && Pe("up", a))
                }
            }
        }

        function Ve(n, t) {
            t = t || 0;
            var o = e(n).parent();
            return t < s.normalScrollElementTouchThreshold && o.is(s.normalScrollElements) ? !0 : t == s.normalScrollElementTouchThreshold ? !1 : Ve(o, ++t)
        }

        function qe(e) {
            return "undefined" == typeof e.pointerType || "mouse" != e.pointerType
        }

        function Ye(e) {
            var n = e.originalEvent;
            if (s.fitToSection && lt.stop(), qe(n)) {
                var t = Zn(n);
                zt = t.y, Bt = t.x
            }
        }

        function Ne(e, n) {
            for (var t = 0, i = e.slice(o.max(e.length - n, 1)), a = 0; a < i.length; a++) t += i[a];
            return o.ceil(t / n)
        }

        function Ue(t) {
            var i = (new Date).getTime(),
                a = e(g).hasClass(L);
            if (s.autoScrolling && !ht && !a) {
                t = t || n.event;
                var r = t.wheelDelta || -t.deltaY || -t.detail,
                    l = o.max(-1, o.min(1, r)),
                    c = "undefined" != typeof t.wheelDeltaX || "undefined" != typeof t.deltaX,
                    d = o.abs(t.wheelDeltaX) < o.abs(t.wheelDelta) || o.abs(t.deltaX) < o.abs(t.deltaY) || !c;
                xt.length > 149 && xt.shift(), xt.push(o.abs(r)), s.scrollBar && (t.preventDefault ? t.preventDefault() : t.returnValue = !1);
                var f = e(b),
                    u = s.scrollOverflowHandler.scrollable(f),
                    h = i - Pt;
                if (Pt = i, h > 200 && (xt = []), bt) {
                    var p = Ne(xt, 10),
                        v = Ne(xt, 70),
                        m = p >= v;
                    m && d && (0 > l ? Pe("down", u) : Pe("up", u))
                }
                return !1
            }
            s.fitToSection && lt.stop()
        }

        function Xe(n, t) {
            var o = "undefined" == typeof t ? e(b) : t,
                i = o.find(F),
                a = i.find(R).length;
            if (!(!i.length || pt || 2 > a)) {
                var r = i.find(D),
                    l = null;
                if (l = "left" === n ? r.prev(R) : r.next(R), !l.length) {
                    if (!s.loopHorizontal) return;
                    l = "left" === n ? r.siblings(":last") : r.siblings(":first")
                }
                pt = !0, Sn(i, l, n)
            }
        }

        function We() {
            e(D).each(function() {
                $n(e(this), "internal")
            })
        }

        function je(e) {
            var n = e.position(),
                t = n.top,
                o = n.top > Ft,
                i = t - St + e.outerHeight(),
                a = s.bigSectionsDestination;
            return e.outerHeight() > St ? (!o && !a || "bottom" === a) && (t = i) : (o || wt && e.is(":last-child")) && (t = i), Ft = t, t
        }

        function Ke(n, t, o) {
            if ("undefined" != typeof n) {
                var i = je(n),
                    a = {
                        element: n,
                        callback: t,
                        isMovementUp: o,
                        dtop: i,
                        yMovement: An(n),
                        anchorLink: n.data("anchor"),
                        sectionIndex: n.index(y),
                        activeSlide: n.find(D),
                        activeSection: e(b),
                        leavingSection: e(b).index(y) + 1,
                        localIsResizing: wt
                    };
                if (!(a.activeSection.is(n) && !wt || s.scrollBar && ne.scrollTop() === a.dtop && !n.hasClass(I))) {
                    if (a.activeSlide.length) var r = a.activeSlide.data("anchor"),
                        l = a.activeSlide.index();
                    s.autoScrolling && s.continuousVertical && "undefined" != typeof a.isMovementUp && (!a.isMovementUp && "up" == a.yMovement || a.isMovementUp && "down" == a.yMovement) && (a = Ge(a)), (!e.isFunction(s.onLeave) || a.localIsResizing || s.onLeave.call(a.activeSection, a.leavingSection, a.sectionIndex + 1, a.yMovement) !== !1) && (tn(a.activeSection), n.addClass(p).siblings().removeClass(p), $e(n), s.scrollOverflowHandler.onLeave(), bt = !1, qn(l, r, a.anchorLink, a.sectionIndex), Qe(a), ft = a.anchorLink, En(a.anchorLink, a.sectionIndex))
                }
            }
        }

        function Qe(n) {
            if (s.css3 && s.autoScrolling && !s.scrollBar) {
                var t = "translate3d(0px, -" + n.dtop + "px, 0px)";
                Bn(t, !0), s.scrollingSpeed ? kt = setTimeout(function() {
                    Ze(n)
                }, s.scrollingSpeed) : Ze(n)
            } else {
                var o = _e(n);
                e(o.element).animate(o.options, s.scrollingSpeed, s.easing).promise().done(function() {
                    s.scrollBar ? setTimeout(function() {
                        Ze(n)
                    }, 30) : Ze(n)
                })
            }
        }

        function _e(e) {
            var n = {};
            return s.autoScrolling && !s.scrollBar ? (n.options = {
                top: -e.dtop
            }, n.element = r) : (n.options = {
                scrollTop: e.dtop
            }, n.element = "html, body"), n
        }

        function Ge(n) {
            return n.isMovementUp ? e(b).before(n.activeSection.nextAll(y)) : e(b).after(n.activeSection.prevAll(y).get().reverse()), et(e(b).position().top), We(), n.wrapAroundElements = n.activeSection, n.dtop = n.element.position().top, n.yMovement = An(n.element), n
        }

        function Je(n) {
            n.wrapAroundElements && n.wrapAroundElements.length && (n.isMovementUp ? e(x).before(n.wrapAroundElements) : e(C).after(n.wrapAroundElements), et(e(b).position().top), We())
        }

        function Ze(n) {
            Je(n), e.isFunction(s.afterLoad) && !n.localIsResizing && s.afterLoad.call(n.element, n.anchorLink, n.sectionIndex + 1), s.scrollOverflowHandler.afterLoad(), s.resetSliders && dt.resetSliders && dt.resetSliders.apply(n), en(n.element), n.element.addClass(m).siblings().removeClass(m), bt = !0, e.isFunction(n.callback) && n.callback.call(this)
        }

        function $e(n) {
            var n = on(n);
            n.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                e(this).attr("src", e(this).data("src")), e(this).removeAttr("data-src"), e(this).is("source") && e(this).closest("video").get(0).load()
            })
        }

        function en(n) {
            var n = on(n);
            n.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && "function" == typeof n.play && n.play()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-autoplay") && nn(n), n.onload = function() {
                    n.hasAttribute("data-autoplay") && nn(n)
                }
            })
        }

        function nn(e) {
            e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
        }

        function tn(n) {
            var n = on(n);
            n.find("video, audio").each(function() {
                var n = e(this).get(0);
                n.hasAttribute("data-keepplaying") || "function" != typeof n.pause || n.pause()
            }), n.find('iframe[src*="youtube.com/embed/"]').each(function() {
                var n = e(this).get(0);
                /youtube\.com\/embed\//.test(e(this).attr("src")) && !n.hasAttribute("data-keepplaying") && e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
            })
        }

        function on(n) {
            var t = n.find(D);
            return t.length && (n = e(t)), n
        }

        function an() {
            var e = n.location.hash.replace("#", "").split("/"),
                t = decodeURIComponent(e[0]),
                o = decodeURIComponent(e[1]);
            t && (s.animateAnchor ? Pn(t, o) : de(t, o))
        }

        function rn() {
            if (!Ht && !s.lockAnchors) {
                var e = n.location.hash.replace("#", "").split("/"),
                    t = decodeURIComponent(e[0]),
                    o = decodeURIComponent(e[1]),
                    i = "undefined" == typeof ft,
                    a = "undefined" == typeof ft && "undefined" == typeof o && !pt;
                t.length && (t && t !== ft && !i || a || !pt && ut != o) && Pn(t, o)
            }
        }

        function sn(n) {
            clearTimeout(At);
            var t = e(":focus");
            if (!t.is("textarea") && !t.is("input") && !t.is("select") && "true" !== t.attr("contentEditable") && "" !== t.attr("contentEditable") && s.keyboardScrolling && s.autoScrolling) {
                var o = n.which,
                    i = [40, 38, 32, 33, 34];
                e.inArray(o, i) > -1 && n.preventDefault(), ht = n.ctrlKey, At = setTimeout(function() {
                    mn(n)
                }, 150)
            }
        }

        function ln() {
            e(this).prev().trigger("click")
        }

        function cn(e) {
            yt && (ht = e.ctrlKey)
        }

        function dn(e) {
            2 == e.which && (Vt = e.pageY, gt.on("mousemove", gn))
        }

        function fn(e) {
            2 == e.which && gt.off("mousemove")
        }

        function un() {
            var n = e(this).closest(y);
            e(this).hasClass(K) ? Ct.m.left && he(n) : Ct.m.right && ue(n)
        }

        function hn() {
            yt = !1, ht = !1
        }

        function pn(n) {
            n.preventDefault();
            var t = e(this).parent().index();
            Ke(e(y).eq(t))
        }

        function vn(n) {
            n.preventDefault();
            var t = e(this).closest(y).find(F),
                o = t.find(R).eq(e(this).closest("li").index());
            Sn(t, o)
        }

        function mn(n) {
            var t = n.shiftKey;
            switch (n.which) {
                case 38:
                case 33:
                    Ct.k.up && le();
                    break;
                case 32:
                    if (t && Ct.k.up) {
                        le();
                        break
                    }
                    case 40:
                    case 34:
                        Ct.k.down && ce();
                        break;
                    case 36:
                        Ct.k.up && fe(1);
                        break;
                    case 35:
                        Ct.k.down && fe(e(y).length);
                        break;
                    case 37:
                        Ct.k.left && he();
                        break;
                    case 39:
                        Ct.k.right && ue();
                        break;
                    default:
                        return
            }
        }

        function gn(e) {
            bt && (e.pageY < Vt && Ct.m.up ? le() : e.pageY > Vt && Ct.m.down && ce()), Vt = e.pageY
        }

        function Sn(n, t, o) {
            var i = n.closest(y),
                a = {
                    slides: n,
                    destiny: t,
                    direction: o,
                    destinyPos: t.position(),
                    slideIndex: t.index(),
                    section: i,
                    sectionIndex: i.index(y),
                    anchorLink: i.data("anchor"),
                    slidesNav: i.find(U),
                    slideAnchor: Nn(t),
                    prevSlide: i.find(D),
                    prevSlideIndex: i.find(D).index(),
                    localIsResizing: wt
                };
            return a.xMovement = Mn(a.prevSlideIndex, a.slideIndex), a.localIsResizing || (bt = !1), s.onSlideLeave && !a.localIsResizing && "none" !== a.xMovement && e.isFunction(s.onSlideLeave) && s.onSlideLeave.call(a.prevSlide, a.anchorLink, a.sectionIndex + 1, a.prevSlideIndex, a.xMovement, a.slideIndex) === !1 ? void(pt = !1) : (tn(a.prevSlide), t.addClass(p).siblings().removeClass(p), a.localIsResizing || $e(t), !s.loopHorizontal && s.controlArrows && (i.find(G).toggle(0 !== a.slideIndex), i.find(ee).toggle(!t.is(":last-child"))), i.hasClass(p) && qn(a.slideIndex, a.slideAnchor, a.anchorLink, a.sectionIndex), dt.continuousHorizontal && dt.continuousHorizontal.apply(a), yn(n, a, !0), void(s.interlockedSlides && dt.interlockedSlides && dt.interlockedSlides.apply(a)))
        }

        function wn(n) {
            dt.continuousHorizontal && dt.continuousHorizontal.afterSlideLoads(n), bn(n.slidesNav, n.slideIndex), n.localIsResizing || (e.isFunction(s.afterSlideLoad) && s.afterSlideLoad.call(n.destiny, n.anchorLink, n.sectionIndex + 1, n.slideAnchor, n.slideIndex), bt = !0), en(n.destiny), pt = !1, dt.interlockedSlides && dt.interlockedSlides.apply(n)
        }

        function yn(e, n, t) {
            var i = n.destinyPos;
            if (s.css3) {
                var a = "translate3d(-" + o.round(i.left) + "px, 0px, 0px)";
                Tn(e.find(q)).css(nt(a)), It = setTimeout(function() {
                    t && wn(n)
                }, s.scrollingSpeed, s.easing)
            } else e.animate({
                scrollLeft: o.round(i.left)
            }, s.scrollingSpeed, s.easing, function() {
                t && wn(n)
            })
        }

        function bn(e, n) {
            e.find(v).removeClass(p), e.find("li").eq(n).find("a").addClass(p)
        }

        function xn() {
            if (Cn(), vt) {
                var n = e(t.activeElement);
                if (!n.is("textarea") && !n.is("input") && !n.is("select")) {
                    var i = ne.height();
                    o.abs(i - qt) > 20 * o.max(qt, i) / 100 && (pe(!0), qt = i)
                }
            } else clearTimeout(Tt), Tt = setTimeout(function() {
                pe(!0)
            }, 350)
        }

        function Cn() {
            var e = s.responsive || s.responsiveWidth,
                n = s.responsiveHeight,
                t = e && ne.outerWidth() < e,
                o = n && ne.height() < n;
            e && n ? ve(t || o) : e ? ve(t) : n && ve(o)
        }

        function Tn(e) {
            var n = "all " + s.scrollingSpeed + "ms " + s.easingcss3;
            return e.removeClass(d), e.css({
                "-webkit-transition": n,
                transition: n
            })
        }

        function kn(e) {
            return e.addClass(d)
        }

        function In(n, t) {
            s.navigation && (e(A).find(v).removeClass(p), n ? e(A).find('a[href="#' + n + '"]').addClass(p) : e(A).find("li").eq(t).find("a").addClass(p))
        }

        function Ln(n) {
            s.menu && (e(s.menu).find(v).removeClass(p), e(s.menu).find('[data-menuanchor="' + n + '"]').addClass(p))
        }

        function En(e, n) {
            Ln(e), In(e, n)
        }

        function An(n) {
            var t = e(b).index(y),
                o = n.index(y);
            return t == o ? "none" : t > o ? "up" : "down"
        }

        function Mn(e, n) {
            return e == n ? "none" : e > n ? "left" : "right"
        }

        function Hn(e) {
            if (!e.hasClass("fp-noscroll")) {
                e.css("overflow", "hidden");
                var n, t = s.scrollOverflowHandler,
                    o = t.wrapContent(),
                    i = e.closest(y),
                    a = t.scrollable(e);
                a.length ? n = t.scrollHeight(e) : (n = e.get(0).scrollHeight, s.verticalCentered && (n = e.find(k).get(0).scrollHeight));
                var r = St - parseInt(i.css("padding-bottom")) - parseInt(i.css("padding-top"));
                n > r ? a.length ? t.update(e, r) : (s.verticalCentered ? e.find(k).wrapInner(o) : e.wrapInner(o), t.create(e, r)) : t.remove(e), e.css("overflow", "")
            }
        }

        function On(e) {
            e.hasClass(Y) || e.addClass(Y).wrapInner('<div class="' + T + '" style="height:' + zn(e) + 'px;" />')
        }

        function zn(e) {
            var n = St;
            if (s.paddingTop || s.paddingBottom) {
                var t = e;
                t.hasClass(w) || (t = e.closest(y));
                var o = parseInt(t.css("padding-top")) + parseInt(t.css("padding-bottom"));
                n = St - o
            }
            return n
        }

        function Bn(e, n) {
            n ? Tn(gt) : kn(gt), gt.css(nt(e)), setTimeout(function() {
                gt.removeClass(d)
            }, 10)
        }

        function Rn(n) {
            var t = gt.find(y + '[data-anchor="' + n + '"]');
            return t.length || (t = e(y).eq(n - 1)), t
        }

        function Dn(e, n) {
            var t = n.find(F),
                o = t.find(R + '[data-anchor="' + e + '"]');
            return o.length || (o = t.find(R).eq(e)), o
        }

        function Pn(e, n) {
            var t = Rn(e);
            "undefined" == typeof n && (n = 0), e === ft || t.hasClass(p) ? Fn(t, n) : Ke(t, function() {
                Fn(t, n)
            })
        }

        function Fn(e, n) {
            if ("undefined" != typeof n) {
                var t = e.find(F),
                    o = Dn(n, e);
                o.length && Sn(t, o)
            }
        }

        function Vn(e, n) {
            e.append('<div class="' + N + '"><ul></ul></div>');
            var t = e.find(U);
            t.addClass(s.slidesNavPosition);
            for (var o = 0; n > o; o++) t.find("ul").append('<li><a href="#"><span></span></a></li>');
            t.css("margin-left", "-" + t.width() / 2 + "px"), t.find("li").first().find("a").addClass(p)
        }

        function qn(e, n, t, o) {
            var i = "";
            s.anchors.length && !s.lockAnchors && (e ? ("undefined" != typeof t && (i = t), "undefined" == typeof n && (n = e), ut = n, Yn(i + "/" + n)) : "undefined" != typeof e ? (ut = n, Yn(t)) : Yn(t)), Un()
        }

        function Yn(e) {
            if (s.recordHistory) location.hash = e;
            else if (vt || mt) n.history.replaceState(i, i, "#" + e);
            else {
                var t = n.location.href.split("#")[0];
                n.location.replace(t + "#" + e)
            }
        }

        function Nn(e) {
            var n = e.data("anchor"),
                t = e.index();
            return "undefined" == typeof n && (n = t), n
        }

        function Un() {
            var n = e(b),
                t = n.find(D),
                o = Nn(n),
                i = Nn(t),
                a = String(o);
            t.length && (a = a + "-" + i), a = a.replace("/", "-").replace("#", "");
            var r = new RegExp("\\b\\s?" + h + "-[^\\s]+\\b", "g");
            ct[0].className = ct[0].className.replace(r, ""), ct.addClass(h + "-" + a)
        }

        function Xn() {
            var e, o = t.createElement("p"),
                a = {
                    webkitTransform: "-webkit-transform",
                    OTransform: "-o-transform",
                    msTransform: "-ms-transform",
                    MozTransform: "-moz-transform",
                    transform: "transform"
                };
            t.body.insertBefore(o, null);
            for (var r in a) o.style[r] !== i && (o.style[r] = "translate3d(1px,1px,1px)", e = n.getComputedStyle(o).getPropertyValue(a[r]));
            return t.body.removeChild(o), e !== i && e.length > 0 && "none" !== e
        }

        function Wn() {
            t.addEventListener ? (t.removeEventListener("mousewheel", Ue, !1), t.removeEventListener("wheel", Ue, !1), t.removeEventListener("MozMousePixelScroll", Ue, !1)) : t.detachEvent("onmousewheel", Ue)
        }

        function jn() {
            var e, o = "";
            n.addEventListener ? e = "addEventListener" : (e = "attachEvent", o = "on");
            var a = "onwheel" in t.createElement("div") ? "wheel" : t.onmousewheel !== i ? "mousewheel" : "DOMMouseScroll";
            "DOMMouseScroll" == a ? t[e](o + "MozMousePixelScroll", Ue, !1) : t[e](o + a, Ue, !1)
        }

        function Kn() {
            gt.on("mousedown", dn).on("mouseup", fn)
        }

        function Qn() {
            gt.off("mousedown", dn).off("mouseup", fn)
        }

        function _n() {
            if (vt || mt) {
                var n = Jn();
                e(r).off("touchstart " + n.down).on("touchstart " + n.down, Ye).off("touchmove " + n.move).on("touchmove " + n.move, Fe)
            }
        }

        function Gn() {
            if (vt || mt) {
                var n = Jn();
                e(r).off("touchstart " + n.down).off("touchmove " + n.move)
            }
        }

        function Jn() {
            var e;
            return e = n.PointerEvent ? {
                down: "pointerdown",
                move: "pointermove"
            } : {
                down: "MSPointerDown",
                move: "MSPointerMove"
            }
        }

        function Zn(e) {
            var n = [];
            return n.y = "undefined" != typeof e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY, n.x = "undefined" != typeof e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX, mt && qe(e) && s.scrollBar && (n.y = e.touches[0].pageY, n.x = e.touches[0].pageX), n
        }

        function $n(e, n) {
            Q(0, "internal"), "undefined" != typeof n && (wt = !0), Sn(e.closest(F), e), "undefined" != typeof n && (wt = !1), Q(Mt.scrollingSpeed, "internal")
        }

        function et(e) {
            if (s.scrollBar) gt.scrollTop(e);
            else if (s.css3) {
                var n = "translate3d(0px, -" + e + "px, 0px)";
                Bn(n, !1)
            } else gt.css("top", -e)
        }

        function nt(e) {
            return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
            }
        }

        function tt(e, n, t) {
            switch (n) {
                case "up":
                    Ct[t].up = e;
                    break;
                case "down":
                    Ct[t].down = e;
                    break;
                case "left":
                    Ct[t].left = e;
                    break;
                case "right":
                    Ct[t].right = e;
                    break;
                case "all":
                    "m" == t ? re(e) : se(e)
            }
        }

        function ot(n) {
            l(!1, "internal"), re(!1), se(!1), gt.addClass(f), clearTimeout(It), clearTimeout(kt), clearTimeout(Tt), clearTimeout(Lt), clearTimeout(Et), ne.off("scroll", Be).off("hashchange", rn).off("resize", xn), te.off("click", A + " a").off("mouseenter", A + " li").off("mouseleave", A + " li").off("click", X).off("mouseover", s.normalScrollElements).off("mouseout", s.normalScrollElements), e(y).off("click", j), clearTimeout(It), clearTimeout(kt), n && it()
        }

        function it() {
            et(0), gt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function() {
                e(this).attr("src", e(this).data("src")), e(this).removeAttr("data-src")
            }), e(A + ", " + U + ", " + j).remove(), e(y).css({
                height: "",
                "background-color": "",
                padding: ""
            }), e(R).css({
                width: ""
            }), gt.css({
                height: "",
                position: "",
                "-ms-touch-action": "",
                "touch-action": ""
            }), lt.css({
                overflow: "",
                height: ""
            }), e("html").removeClass(u), ct.removeClass(c), e.each(ct.get(0).className.split(/\s+/), function(e, n) {
                0 === n.indexOf(h) && ct.removeClass(n)
            }), e(y + ", " + R).each(function() {
                s.scrollOverflowHandler.remove(e(this)), e(this).removeClass(Y + " " + p)
            }), kn(gt), gt.find(k + ", " + q + ", " + F).each(function() {
                e(this).replaceWith(this.childNodes)
            }), lt.scrollTop(0);
            var n = [w, B, V];
            e.each(n, function(n, t) {
                e("." + t).removeClass(t)
            })
        }

        function at(e, n, t) {
            s[e] = n, "internal" !== t && (Mt[e] = n)
        }

        function rt() {
            return e("html").hasClass(u) ? void st("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (s.continuousVertical && (s.loopTop || s.loopBottom) && (s.continuousVertical = !1, st("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), s.scrollBar && s.scrollOverflow && st("warn", "Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"), s.continuousVertical && s.scrollBar && (s.continuousVertical = !1, st("warn", "Option `scrollBar` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")), void e.each(s.anchors, function(n, t) {
                var o = te.find("[name]").filter(function() {
                        return e(this).attr("name") && e(this).attr("name").toLowerCase() == t.toLowerCase()
                    }),
                    i = te.find("[id]").filter(function() {
                        return e(this).attr("id") && e(this).attr("id").toLowerCase() == t.toLowerCase()
                    });
                (i.length || o.length) && (st("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."), i.length && st("error", '"' + t + '" is is being used by another element `id` property'), o.length && st("error", '"' + t + '" is is being used by another element `name` property'))
            }))
        }

        function st(e, n) {
            console && console[e] && console[e]("fullPage: " + n)
        }
        if (e("html").hasClass(u)) return void rt();
        var lt = e("html, body"),
            ct = e("body"),
            dt = e.fn.fullpage;
        s = e.extend({
            menu: !1,
            anchors: [],
            lockAnchors: !1,
            navigation: !1,
            navigationPosition: "right",
            navigationTooltips: [],
            showActiveTooltip: !1,
            slidesNavigation: !1,
            slidesNavPosition: "bottom",
            scrollBar: !1,
            hybrid: !1,
            css3: !0,
            scrollingSpeed: 700,
            autoScrolling: !0,
            fitToSection: !0,
            fitToSectionDelay: 1e3,
            easing: "easeInOutCubic",
            easingcss3: "ease",
            loopBottom: !1,
            loopTop: !1,
            loopHorizontal: !0,
            continuousVertical: !1,
            continuousHorizontal: !0,
            scrollHorizontally: !0,
            interlockedSlides: !1,
            resetSliders: !1,
            fadingEffect: !1,
            normalScrollElements: null,
            scrollOverflow: !1,
            scrollOverflowHandler: ie,
            scrollOverflowOptions: null,
            touchSensitivity: 5,
            normalScrollElementTouchThreshold: 5,
            bigSectionsDestination: null,
            keyboardScrolling: !0,
            animateAnchor: !0,
            recordHistory: !0,
            controlArrows: !0,
            controlArrowColor: "#fff",
            verticalCentered: !0,
            sectionsColor: [],
            paddingTop: 0,
            paddingBottom: 0,
            fixedElements: null,
            responsive: 0,
            responsiveWidth: 0,
            responsiveHeight: 0,
            responsiveSlides: !1,
            sectionSelector: S,
            slideSelector: z,
            afterLoad: null,
            onLeave: null,
            afterRender: null,
            afterResize: null,
            afterReBuild: null,
            afterSlideLoad: null,
            onSlideLeave: null,
            afterResponsive: null
        }, s);
        var ft, ut, ht, pt = !1,
            vt = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),
            mt = "ontouchstart" in n || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints,
            gt = e(this),
            St = ne.height(),
            wt = !1,
            yt = !0,
            bt = !0,
            xt = [],
            Ct = {};
        Ct.m = {
            up: !0,
            down: !0,
            left: !0,
            right: !0
        }, Ct.k = e.extend(!0, {}, Ct.m);
        var Tt, kt, It, Lt, Et, At, Mt = e.extend(!0, {}, s);
        rt(), oe.click = mt, oe = e.extend(oe, s.scrollOverflowOptions), e.extend(e.easing, {
            easeInOutCubic: function(e, n, t, o, i) {
                return (n /= i / 2) < 1 ? o / 2 * n * n * n + t : o / 2 * ((n -= 2) * n * n + 2) + t
            }
        }), e(this).length && (dt.setAutoScrolling = l, dt.setRecordHistory = W, dt.setScrollingSpeed = Q, dt.setFitToSection = J, dt.setLockAnchors = Z, dt.setMouseWheelScrolling = ae, dt.setAllowScrolling = re, dt.setKeyboardScrolling = se, dt.moveSectionUp = le, dt.moveSectionDown = ce, dt.silentMoveTo = de, dt.moveTo = fe, dt.moveSlideRight = ue, dt.moveSlideLeft = he, dt.reBuild = pe, dt.setResponsive = ve, dt.getFullpageData = me, dt.destroy = ot, we("continuousHorizontal"), we("scrollHorizontally"), we("resetSliders"), we("interlockedSlides"), we("responsiveSlides"), we("fadingEffect"), ge(), Se());
        var Ht = !1,
            Ot = 0,
            zt = 0,
            Bt = 0,
            Rt = 0,
            Dt = 0,
            Pt = (new Date).getTime(),
            Ft = 0,
            Vt = 0,
            qt = St
    }, "undefined" != typeof IScroll && (IScroll.prototype.wheelOn = function() {
        this.wrapper.addEventListener("wheel", this), this.wrapper.addEventListener("mousewheel", this), this.wrapper.addEventListener("DOMMouseScroll", this)
    }, IScroll.prototype.wheelOff = function() {
        this.wrapper.removeEventListener("wheel", this), this.wrapper.removeEventListener("mousewheel", this), this.wrapper.removeEventListener("DOMMouseScroll", this)
    });
    var ie = {
        refreshId: null,
        iScrollInstances: [],
        onLeave: function() {
            var n = e(b).find(l).data("iscrollInstance");
            "undefined" != typeof n && n && n.wheelOff()
        },
        afterLoad: function() {
            var n = e(b).find(l).data("iscrollInstance");
            "undefined" != typeof n && n && n.wheelOn()
        },
        create: function(n, t) {
            var o = n.find(l);
            o.height(t), o.each(function() {
                var n = jQuery(this),
                    t = n.data("iscrollInstance");
                t && e.each(ie.iScrollInstances, function() {
                    e(this).destroy()
                }), t = new IScroll(n.get(0), oe), ie.iScrollInstances.push(t), n.data("iscrollInstance", t)
            })
        },
        isScrolled: function(e, n) {
            var t = n.data("iscrollInstance");
            return t ? "top" === e ? t.y >= 0 && !n.scrollTop() : "bottom" === e ? 0 - t.y + n.scrollTop() + 1 + n.innerHeight() >= n[0].scrollHeight : void 0 : !0
        },
        scrollable: function(e) {
            return e.find(F).length ? e.find(D).find(l) : e.find(l)
        },
        scrollHeight: function(e) {
            return e.find(l).children().first().get(0).scrollHeight
        },
        remove: function(e) {
            var n = e.find(l);
            if (n.length) {
                var t = n.data("iscrollInstance");
                t.destroy(), n.data("iscrollInstance", null)
            }
            e.find(l).children().first().children().first().unwrap().unwrap()
        },
        update: function(n, t) {
            clearTimeout(ie.refreshId), ie.refreshId = setTimeout(function() {
                e.each(ie.iScrollInstances, function() {
                    e(this).get(0).refresh()
                })
            }, 150), n.find(l).css("height", t + "px").parent().css("height", t + "px")
        },
        wrapContent: function() {
            return '<div class="' + s + '"><div class="fp-scroller"></div></div>'
        }
    }
});
//# sourceMappingURL=jquery.fullpage.min.js.map