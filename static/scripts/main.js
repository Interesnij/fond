
/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function(t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var i = this._events = this._events || {},
                n = i[t] = i[t] || [];
            return -1 == n.indexOf(e) && n.push(e), this
        }
    }, e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {},
                n = i[t] = i[t] || {};
            return n[e] = !0, this
        }
    }, e.off = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = i.indexOf(e);
            return -1 != n && i.splice(n, 1), this
        }
    }, e.emitEvent = function(t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var n = 0,
                o = i[n];
            e = e || [];
            for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                var s = r && r[o];
                s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
            }
            return this
        }
    }, t
}),
function(t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function(t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function n(t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if ("number" == typeof t.length)
            for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e
    }

    function o(t, e, r) {
        return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function() {
            this.check()
        }.bind(this))) : new o(t, e, r)
    }

    function r(t) {
        this.img = t
    }

    function s(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }
    var h = t.jQuery,
        a = t.console;
    o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, o.prototype.addElementImages = function(t) {
        "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && d[e]) {
            for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var o = i[n];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var r = t.querySelectorAll(this.options.background);
                for (n = 0; n < r.length; n++) {
                    var s = r[n];
                    this.addElementBackgroundImages(s)
                }
            }
        }
    };
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return o.prototype.addElementBackgroundImages = function(t) {
        var e = getComputedStyle(t);
        if (e)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
                var o = n && n[2];
                o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
            }
    }, o.prototype.addImage = function(t) {
        var e = new r(t);
        this.images.push(e)
    }, o.prototype.addBackground = function(t, e) {
        var i = new s(t, e);
        this.images.push(i)
    }, o.prototype.check = function() {
        function t(t, i, n) {
            setTimeout(function() {
                e.progress(t, i, n)
            })
        }
        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(e) {
            e.once("progress", t), e.check()
        }) : void this.complete()
    }, o.prototype.progress = function(t, e, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
    }, o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, r.prototype = Object.create(e.prototype), r.prototype.check = function() {
        var t = this.getIsImageComplete();
        return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, r.prototype.getIsImageComplete = function() {
        return this.img.complete && void 0 !== this.img.naturalWidth
    }, r.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, r.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, r.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, r.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, r.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype = Object.create(r.prototype), s.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var t = this.getIsImageComplete();
        t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, s.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, s.prototype.confirm = function(t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, o.makeJQueryPlugin = function(e) {
        e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function(t, e) {
            var i = new o(this, t, e);
            return i.jqDeferred.promise(h(this))
        })
    }, o.makeJQueryPlugin(), o
});

function init() {
    container = document.getElementById("three-container"), objectLoader = new THREE.OBJLoader, colorChanged = !1, camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 1e4), camera.position.z = 300, scene = new THREE.Scene, scene.add(pivot), leftLight = new THREE.DirectionalLight, rightLight = new THREE.DirectionalLight, putDefaultLights(), leftLight.position.set(-1, 0, 1), rightLight.position.set(1, 0, 1), scene.add(leftLight), scene.add(rightLight), renderer = new THREE.WebGLRenderer({
        antialias: !0,
        alpha: !0
    }), renderer.setPixelRatio(window.devicePixelRatio), renderer.setSize($(window).innerWidth(), $(window).innerHeight()), container.appendChild(renderer.domElement), composer = new THREE.EffectComposer(renderer), composer.addPass(new THREE.RenderPass(scene, camera)), glitchPass = new THREE.GlitchPass, glitchPass.renderToScreen = !0, glitchPass.randX = 0, composer.addPass(glitchPass), document.addEventListener("mousemove", onDocumentMouseMove, !1), window.addEventListener("resize", onWindowResize, !1), $("html").mousedown(three_mousedown), $("html").mouseup(three_mouseup)
}

function onWindowResize() {
    windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2, camera.aspect = window.innerWidth / window.innerHeight, camera.updateProjectionMatrix(), renderer.setSize(window.innerWidth, window.innerHeight), composer.setSize(window.innerWidth, window.innerHeight)
}

function onDocumentMouseMove(e) {
    three_mouseClicked && (mouseX = e.clientX - windowHalfX, mouseY = e.clientY - windowHalfY, null != oldMouseX && (dif_mouse_move = oldMouseX - mouseX), oldMouseX = mouseX)
}

function three_mousedown() {
    !three_loaded || buttonPushed || popupOpened || inTransition || (three_mouseClicked = !0, oldMouseX = null)
}

function three_mouseup() {
    !three_loaded || buttonPushed || popupOpened || inTransition || (three_mouseClicked = !1)
}

function animate() {
    clearTimeout(lastAnimateTimeout), cancelAnimationFrame(lastRequestAnimationThree), lastAnimateTimeout = setTimeout(function() {
        lastRequestAnimationThree = requestAnimationFrame(animate)
    }, 1e3 / 30), render()
}

function putNewThreeObject(e) {
    three_loaded = !1, pivot.remove(objectRendered), void 0 == objects[e] ? objectLoader.load(e, function(t) {
        var n = $('.capsule-three-background-path[data-three-path="' + e + '"]');
        if (n.length > 0) {
            var i = n.attr("data-scale");
            i && t.scale.set(i, i, i);
            var r = n.attr("data-rotation");
            r && (t.rotation.y = r * Math.PI / 180)
        }
        var o = (new THREE.Box3).setFromObject(t);
        o.getCenter(t.position), t.position.multiplyScalar(-1), objects[e] = t, pivot.add(t), objectRendered = t, TweenMax.to($("#three-container"), 0, {
            opacity: 0
        }), TweenMax.to($("#three-container"), 1, {
            opacity: 1,
            delay: 1.5
        }), three_loaded = !0
    }) : (pivot.add(objects[e]), objectRendered = objects[e], TweenMax.to($("#three-container"), 0, {
        opacity: 0
    }), TweenMax.to($("#three-container"), 1, {
        opacity: 1,
        delay: 1.5
    }), three_loaded = !0)
}

function render() {
    if (void 0 != pivot) {
        var e = 1;
        if (three_mouseClicked) e = .5236 * dif_mouse_move, dif_mouse_move = 0;
        else if (buttonPushed) {
            e = 5;
            var t = 180 * (pivot.rotation.y + .025 * e) / Math.PI;
            t = Math.abs(t % 360), (40 > t || t > 320) && (e = .25)
        }
        pivot.rotation.y -= .025 * e
    }(!popupOpened || inTransition) && composer.render()
}

function changeLightsColor(e, t) {
    e = e.replace("#", "0x"), t = t.replace("#", "0x"), leftLight.color.setHex(e), rightLight.color.setHex(t)
}

function putDefaultLights() {
    var e = getComputedStyle(document.body).getPropertyValue("--left-light"),
        t = getComputedStyle(document.body).getPropertyValue("--right-light");
    4 == e.length && (e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3]), 4 == t.length && (t = "#" + t[1] + t[1] + t[2] + t[2] + t[3] + t[3]), changeLightsColor(e, t)
}
Detector.webgl || Detector.addGetWebGLMessage();
var container, camera, scene, renderer, objectLoader, objectRendered, leftLight, rightLight, texture, mouseX = 0,
    mouseY = 0,
    windowHalfX = window.innerWidth / 2,
    windowHalfY = window.innerHeight / 2,
    pivot = new THREE.Group,
    buttonPushed, objects = {},
    popupOpened = !1,
    lastRequestAnimationThree = null,
    lastAnimateTimeout = null,
    composer, glitchPass, three_mouseClicked = !1,
    three_loaded = !1,
    oldMouseX = null,
    dif_mouse_move = 0;
init(), animate();
/*! jQuery & Zepto Lazy v1.7.5 - http://jquery.eisbehr.de/lazy - MIT&GPL-2.0 license - Copyright 2012-2017 Daniel 'Eisbehr' Kern */
! function(t, e) {
    "use strict";

    function r(r, a, i, l, u) {
        function f() {
            L = t.devicePixelRatio > 1, c(i), a.delay >= 0 && setTimeout(function() {
                s(!0)
            }, a.delay), (a.delay < 0 || a.combined) && (l.e = v(a.throttle, function(t) {
                "resize" === t.type && (w = B = -1), s(t.all)
            }), l.a = function(t) {
                c(t), i.push.apply(i, t)
            }, l.g = function() {
                return i = n(i).filter(function() {
                    return !n(this).data(a.loadedName)
                })
            }, l.f = function(t) {
                for (var e = 0; e < t.length; e++) {
                    var r = i.filter(function() {
                        return this === t[e]
                    });
                    r.length && s(!1, r)
                }
            }, s(), n(a.appendScroll).on("scroll." + u + " resize." + u, l.e))
        }

        function c(t) {
            var i = a.defaultImage,
                o = a.placeholder,
                l = a.imageBase,
                u = a.srcsetAttribute,
                f = a.loaderAttribute,
                c = a._f || {};
            t = n(t).filter(function() {
                var t = n(this),
                    r = m(this);
                return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(u) || t.attr(f) || c[r] !== e)
            }).data("plugin_" + a.name, r);
            for (var s = 0, d = t.length; s < d; s++) {
                var A = n(t[s]),
                    g = m(t[s]),
                    h = A.attr(a.imageBaseAttribute) || l;
                g === N && h && A.attr(u) && A.attr(u, b(A.attr(u), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')")
            }
        }

        function s(t, e) {
            if (!i.length) return void(a.autoDestroy && r.destroy());
            for (var o = e || i, l = !1, u = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)
                if (t || e || A(o[s])) {
                    var g = n(o[s]),
                        h = m(o[s]),
                        b = g.attr(a.attribute),
                        v = g.attr(a.imageBaseAttribute) || u,
                        p = g.attr(a.loaderAttribute);
                    g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (l = !0, g.data(c, !0), d(g, h, v, p))
                } l && (i = n(i).filter(function() {
                return !n(this).data(c)
            }))
        }

        function d(t, e, r, i) {
            ++z;
            var o = function() {
                y("onError", t), p(), o = n.noop
            };
            y("beforeLoad", t);
            var l = a.attribute,
                u = a.srcsetAttribute,
                f = a.sizesAttribute,
                c = a.retinaAttribute,
                s = a.removeAttribute,
                d = a.loadedName,
                A = t.attr(c);
            if (i) {
                var g = function() {
                    s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop
                };
                t.off(I).one(I, o).one(D, g), y(i, t, function(e) {
                    e ? (t.off(D), g()) : (t.off(I), o())
                }) || t.trigger(I)
            } else {
                var h = n(new Image);
                h.one(I, o).one(D, function() {
                    t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(l + " " + u + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p()
                });
                var m = (L && A ? A : t.attr(l)) || "";
                h.attr(C, t.attr(f)).attr(F, t.attr(u)).attr(E, m ? r + m : null), h.complete && h.trigger(D)
            }
        }

        function A(t) {
            var e = t.getBoundingClientRect(),
                r = a.scrollDirection,
                n = a.threshold,
                i = h() + n > e.top && -n < e.bottom,
                o = g() + n > e.left && -n < e.right;
            return "vertical" === r ? i : "horizontal" === r ? o : i && o
        }

        function g() {
            return w >= 0 ? w : w = n(t).width()
        }

        function h() {
            return B >= 0 ? B : B = n(t).height()
        }

        function m(t) {
            return t.tagName.toLowerCase()
        }

        function b(t, e) {
            if (e) {
                var r = t.split(",");
                t = "";
                for (var a = 0, n = r.length; a < n; a++) t += e + r[a].trim() + (a !== n - 1 ? "," : "")
            }
            return t
        }

        function v(t, e) {
            var n, i = 0;
            return function(o, l) {
                function u() {
                    i = +new Date, e.call(r, o)
                }
                var f = +new Date - i;
                n && clearTimeout(n), f > t || !a.enableThrottle || l ? u() : n = setTimeout(u, t - f)
            }
        }

        function p() {
            --z, i.length || z || y("onFinishedAll")
        }

        function y(t, e, n) {
            return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0)
        }
        var z = 0,
            w = -1,
            B = -1,
            L = !1,
            T = "afterLoad",
            D = "load",
            I = "error",
            N = "img",
            E = "src",
            F = "srcset",
            C = "sizes",
            O = "background-image";
        "event" === a.bind || o ? f() : n(t).on(D + "." + u, f)
    }

    function a(a, o) {
        var l = this,
            u = n.extend({}, l.config, o),
            f = {},
            c = u.name + "-" + ++i;
        return l.config = function(t, r) {
            return r === e ? u[t] : (u[t] = r, l)
        }, l.addItems = function(t) {
            return f.a && f.a("string" === n.type(t) ? n(t) : t), l
        }, l.getItems = function() {
            return f.g ? f.g() : {}
        }, l.update = function(t) {
            return f.e && f.e({}, !t), l
        }, l.force = function(t) {
            return f.f && f.f("string" === n.type(t) ? n(t) : t), l
        }, l.loadAll = function() {
            return f.e && f.e({
                all: !0
            }, !0), l
        }, l.destroy = function() {
            return n(u.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e
        }, r(l, u, a, f, c), u.chainable ? a : l
    }
    var n = t.jQuery || t.Zepto,
        i = 0,
        o = !1;
    n.fn.Lazy = n.fn.lazy = function(t) {
        return new a(this, t)
    }, n.Lazy = n.lazy = function(t, r, i) {
        if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
            t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];
            for (var o = a.prototype.config, l = o._f || (o._f = {}), u = 0, f = t.length; u < f; u++)(o[t[u]] === e || n.isFunction(o[t[u]])) && (o[t[u]] = i);
            for (var c = 0, s = r.length; c < s; c++) l[r[c]] = t[0]
        }
    }, a.prototype.config = {
        name: "lazy",
        chainable: !0,
        autoDestroy: !0,
        bind: "load",
        threshold: 500,
        visibleOnly: !1,
        appendScroll: t,
        scrollDirection: "both",
        imageBase: null,
        defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
        placeholder: null,
        delay: -1,
        combined: !1,
        attribute: "data-src",
        srcsetAttribute: "data-srcset",
        sizesAttribute: "data-sizes",
        retinaAttribute: "data-retina",
        loaderAttribute: "data-loader",
        imageBaseAttribute: "data-imagebase",
        removeAttribute: !0,
        handledName: "handled",
        loadedName: "loaded",
        effect: "show",
        effectTime: 0,
        enableThrottle: !0,
        throttle: 250,
        beforeLoad: e,
        afterLoad: e,
        onError: e,
        onFinishedAll: e
    }, n(t).on("load", function() {
        o = !0
    })
}(window);

function preloadImages_main() {
    var e = $(".dinamic-popup .preload-image-container .lazy");
    e.length > 0 && e.each(function(e, t) {
        var n = $(t).closest(".preload-image-container"),
            i = n.find(".preload-mask-wrapper");
        if (!i.hasClass("mask-resized")) {
            var r = n.innerWidth(),
                o = i.attr("data-width"),
                a = i.attr("data-height"),
                s = a;
            o >= r && (s = r * a / o), n.css("height", s), i.addClass("mask-resized")
        }
    }), e.lazy({
        threshold: .2 * -window.innerHeight,
        visibleOnly: !0,
        beforeLoad: function() {},
        afterLoad: function(e) {
            var t = $(e).closest(".preload-image-container").find(".animate_when_loaded");
            $(e).closest(".preload-image-container").removeClass("not-loaded-yet");
            new TimelineMax;
            TweenMax.to(t, 1, {
                opacity: 0,
                "pointer-events": "none",
                ease: Power2.easeInOut
            }), $(e).hasClass("no-img") || $(e).removeAttr("style"), $words = $(e).parent().find(".vertical-words"), $words.length > 0 && $words.addClass("visible")
        },
        onError: function() {},
        onFinishedAll: function() {}
    })
}
$(window).on("resize", function() {
    $(".dinamic-popup .preload-image-container .preload-mask-wrapper").removeClass("mask-resized"), preloadImages_main()
});
"use strict";

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function mod(e, t) {
    return (e % t + t) % t
}

function home_docReady() {
    fillCapsuleDataName(), changeActionAdvice("Press & Hold"), isTouchDevice() && $("body").addClass("touch-device"), isTouchDevice() && ($(".bottom-bar .sound-container").css("display", "none"), $(".home-social-awards-container").addClass("without-sounds"), $(".special-capsule-button-link").addClass("link-left"))
}

function reorient() {
    var e = window.orientation % 90 == 0;
    $("body").css("-webkit-transform", e ? "" : "rotate(-90deg)")
}

function home_docLoad() {
    home_initializeGlobalVariables(), home_initializeTweens(), home_bindEvents(), animatePreload(), fillGems(), createAsociatedArrayOfImages(), currentCanvas = asociatedArrayOfImages[$currentCapsule.index()][0], canvasImages = document.querySelectorAll(".image-effect"), canvasImageSrc = [];
    for (var e = 0; e < canvasImages.length; e++) canvasImageSrc.push(canvasImages[e].getAttribute("src"));
    initSliderWork()
}

function home_initializeGlobalVariables() {
    buttonPushed = !1, capsuleAnimationFinished = !0, inTransition = !0, durationOfVideo = 2, durationOfActionSound = 7, soundsMuted = !1, soundsMutedByContact = !1, $currentCapsule = $(".capsules-container .capsule.current"), $transitionCurtain = $(".transition-curtain")[0], $(".section-home").hasClass("is-404") || (overlay = new SvgCurtain($transitionCurtain)), curtainTransitionDuration = 600, curtainPoints = 4, curtainPointsDelayMax = 400, curtainDelayPerPath = 100, preloadFinished = !1, popupOpened = !1, enableParallax = !1, SCROLLINC = 45, goingToScrollTop = $(window).scrollTop(), smoothScrolling = !1, asociatedArrayOfImages = [], pressedHold = !1, workSlideMove = !1, soundCapsulePlayed = !1, canResizeCanvas = !0, lastHoverAudio = 0, firstPushState = !0, doPushState = !0
}

function home_resize() {
    initSliderWork();
    var e = 1;
    window.innerWidth <= 1025 && (e = .8), pivot.scale.set(e, e, e)
}

function home_bindEvents() {
    $(".js-open-popup").click(stopBoringText), isTouchDevice() ? ($(".navigate-single-button-container .svg-container svg").bind("touchstart", chargeSingle), $("html").bind("touchend", goToSingle), $(".section-home .navigate-single-button-container .svg-container svg").on("touchstart", hoverNavigateButton), $(".section-home .navigate-single-button-container .svg-container svg").on("touchend", hoverOutNavigateButton), $(".work-slider-wrapper .controls-container .prev-container, .work-slider-wrapper .controls-container .next-container").on("touchstart", hoverControlSliderButton), $(".work-slider-wrapper .controls-container .prev-container, .work-slider-wrapper .controls-container .next-container").on("touchend", hoverOutControlSliderButton), $("body, html").on("click", ".general-hover", makeGeneralHover), $(".dinamic-popup").on("click", ".general-hover", makeGeneralHover), $(window).scroll(preloadImages_main), $(window).on("touchmove", changeGravityMobile), $(".navigate-single-button-container .svg-container svg").on("touchstart", function(e) {
        $(e.currentTarget).removeClass("blink blink-slow")
    })) : ($(window).on("mousemove", refreshPositionCustomCursor), $("html").on("mouseenter", ".cursor-customized", changeInCursor), $("html").on("mouseleave", ".cursor-customized", changeOutCursor), $("html").on("mouseenter", ".sound-hover", playHoverSound), $(".special-popup").on("click", "input, .controls-container", function(e) {
        e.stopPropagation()
    }), $(".navigate-single-button-container .svg-container svg").mousedown(chargeSingle), $("html").mouseup(goToSingle), $(".navigate-single-button-container .svg-container svg").mouseenter(function(e) {
        $(e.currentTarget).removeClass("blink blink-slow")
    }), $(window).mousewheel(softScrollWheel), $(window).scroll(updateSoftScrollPosition), updateSoftScrollPosition(), $(document).mousemove(function(e) {
        $(".js-animate-mouse").css("transform", "rotateX(0deg) rotateY(0deg)");
        var t, n, i = !1;
        i ? (t = e.pageX, n = e.pageY) : i || (n = -(e.pageY - $(window).innerHeight() / 2) / 20, t = (e.pageX - $(window).innerWidth() / 2) / 20), $(".js-animate-mouse").css("transform", "rotateX(" + n + "deg) rotateY(" + t + "deg)")
    }), $(".footer-popup .input-container .send-container .send-icon").hover(function() {
        arrowRight.play()
    }, function() {})), $(window).scroll(animateGeneralElements), $(window).scroll(animateShowVideos), $(".top-bar").on("click", ".gems-container.not-complete", function() {
        var e = 1,
            t = $(".gems-container .gems-text").innerWidth() * -.25;
        TweenLite.set(".gems-container .gems-text", {
            y: 0,
            opacity: 0,
            left: t + "px"
        }), TweenLite.to(".gems-container .gems-text", e, {
            y: 10,
            opacity: 1,
            ease: Power2.easeOut
        }), TweenLite.to(".gems-container .gems-text", e, {
            y: 0,
            opacity: 0,
            ease: Power2.easeOut,
            delay: 2 * e
        })
    }), $(".bottom-bar .sound-container").click(switchVolume), $(".special-link").on("click", changeCapsule), $(".special-popup").on("click", ".menu-container .menu-item", changeCapsule), $(".dinamic-popup").on("click", ".popup-content .close-button", closeGeneralPopup), $(".special-popup").on("click", ".popup-content .close-button", closeSpecialPopup), $(window).mousewheel(parallaxMoveElements), $(window).scroll(checkSinglePagePosition), $("html,body").on("click", ".js-open-popup", openGeneralPopup), $(".work-slider-wrapper .controls-container .prev-container").click(workPrevSlide), $(".work-slider-wrapper .controls-container .next-container").click(workNextSlide), $(window).resize(home_resize), home_resize(), $(".special-popup").on("click", ".contact-form-slider-container .next", goToContactNext), $(".special-popup").on("click", ".contact-form-slider-container .prev", goToContactPrev), $(".special-popup").on("click", ".contact-form-slider-container .send", sendForm), $(".special-popup").on("click", ".send-screen .send-screen-newsletter", sendContactNewsletter), $(document).keypress(function(e) {
        13 == e.which && ($(".special-popup .contact-form-slider-container").length > 0 ? goToContactNext() : $(".dinamic-popup .input-newsletter").is(":focus") && sendNewsletter())
    }), $(".cookies-container .cookies-close-container svg").click(function() {
        var e = "-" + $(".cookies-container .cookies-content").innerHeight() + "px";
        TweenLite.to(".cookies-container", .4, {
            bottom: e,
            ease: Power2.easeInOut,
            onComplete: function() {
                $(".cookies-container").css("display", "none")
            }
        })
    }), $(".bottom-bar .color-container").click(animateColorCircle), $(".dinamic-popup").on("click", ".send-container .send-icon ", sendNewsletter)
}

function home_initializeTweens() {
    tweenAnimateColorCircle = TweenMax.to(".bottom-bar .color-container svg circle", 2, {
        "stroke-dashoffset": "0",
        ease: Power0.easeNone,
        paused: !0,
        onStart: function() {
            $(".bottom-bar .color-container").addClass("disabled")
        },
        onComplete: function() {
            $(".bottom-bar .color-container").removeClass("disabled"), TweenLite.to(".bottom-bar .color-container svg circle", .4, {
                "stroke-opacity": 0,
                onComplete: function() {
                    $(".bottom-bar .color-container svg circle").css("stroke-dashoffset", "100px"), $(".bottom-bar .color-container svg circle").css("stroke-opacity", "1")
                }
            }), changeRandomTheme()
        }
    }), tweenAnimateMenuCircle = TweenMax.to(".menu-icon  ellipse", 2, {
        "stroke-dashoffset": "0",
        ease: Power2.easeInOut,
        paused: !0,
        onComplete: function() {
            TweenLite.to(".menu-icon ellipse", .4, {
                "stroke-opacity": 0,
                onComplete: function() {
                    $(".menu-icon  ellipse").css("stroke-dashoffset", "170px"), $(".menu-icon  ellipse").css("stroke-opacity", "1")
                }
            })
        }
    }), tweenPress = TweenMax.to($(".navigate-single-button-container .svg-container svg"), .5, {
        scale: 1.2,
        paused: !0
    }), tweenRotateColorCircle = TweenMax.to(".bottom-bar .color-container svg circle", 1.6, {
        rotation: 720,
        transformOrigin: "center",
        ease: Power4.easeInOut,
        repeatDelay: 5,
        repeat: -1,
        yoyo: !0
    }), TweenMax.set(".bottom-bar .color-container svg path.star", {
        opacity: 0
    });
    for (var e = $(".capsule:not(.not-showed)"), t = [], n = 0; n < e.length; n++) t.push($(e[n]).attr("data-color"));
    var i = .15,
        r = Power0.easeNone;
    tweenWaitWand = TweenMax.to(".bottom-bar .color-container svg", i, {
        ease: r,
        fill: t[0],
        paused: !0,
        onStart: function() {
            var e = .8;
            $(".bottom-bar .color-container .color-text").text("Нажми меня"), TweenLite.set(".bottom-bar .color-container .color-text", {
                y: 0,
                opacity: 0
            }), TweenLite.to(".bottom-bar .color-container .color-text", 1.2 * e, {
                y: -30,
                opacity: 1,
                ease: Power0.easeNone
            }), TweenLite.to(".bottom-bar .color-container .color-text", 2 * e, {
                y: -60,
                opacity: 0,
                ease: Power2.easeOut,
                delay: 1.2 * e
            })
        },
        onComplete: function() {
            for (var e = i, n = 0; 3 > n; n++)
                for (var o = 0; o < t.length; o++) TweenMax.to(".bottom-bar .color-container svg", i, {
                    fill: t[o],
                    ease: r,
                    delay: e
                }), e += i;
            TweenMax.to(".bottom-bar .color-container svg", i, {
                delay: e,
                onComplete: function() {
                    $(".bottom-bar .color-container svg").removeAttr("style")
                }
            })
        }
    });
    TweenMax.set(".bottom-bar .color-container svg path.wand", {
        rotation: "-40deg"
    }), tweenActionWand = new TimelineMax({
        paused: !0
    }), tweenActionWand.to(".bottom-bar .color-container svg path.wand", .8, {
        rotation: "0deg",
        ease: Power2.easeIn
    }, 0).to(".bottom-bar .color-container svg path.wand", .8, {
        rotation: "-40deg",
        ease: Power2.easeOut
    }, .8).to(".bottom-bar .color-container svg path.star", 1, {
        y: -350,
        ease: Power2.easeOut
    }, .8).to(".bottom-bar .color-container svg path.star", .2, {
        opacity: 1,
        ease: Power0.easeNone
    }, .8).to(".bottom-bar .color-container svg path.star", .2, {
        opacity: 0,
        ease: Power0.easeNone
    }, 1.6).to("", 0, {
        onComplete: function() {
            changeRandomTheme()
        }
    }, .8).to("", 0, {
        onComplete: function() {
            TweenMax.set(".bottom-bar .color-container svg path.wand", {
                rotation: "-40deg"
            }), TweenMax.set(".bottom-bar .color-container svg path.star", {
                y: 0,
                opacity: 0
            })
        }
    }, 1.8);
    var o = .5;
    tweenWaitGems = TweenMax.to(".gems-container .gems-wrapper", o, {
        ease: Power2.easeInOut,
        scale: 1.5,
        force3D: !1,
        paused: !0,
        onComplete: function() {
            TweenMax.to(".gems-container .gems-wrapper", o, {
                ease: Power2.easeInOut,
                force3D: !1,
                scale: 1
            })
        }
    })
}

function isTouchDevice() {
    try {
        return document.createEvent("TouchEvent"), !0
    } catch (e) {
        return !1
    }
}

function fillCapsuleDataName() {
    $(".menu-popup .menu-container ul").empty(), $(".capsules-container .capsule:not(.not-showed)").each(function() {
        var e = $(this).attr("data-color"),
            t = $(this).attr("data-name"),
            n = '<li class="menu-item font-menu-item" data-cursor-action="menu-link" data-menu="' + t + '" data-color="' + e + '"><span class="link-text general-hover cursor-customized sound-hover hover-white hover-big">' + t + "</span></li>";
        $(".menu-popup .menu-container ul").append(n)
    })
}

function fillGems() {
    for (var e = $(".capsules-container .capsule:not(.not-showed)"), t = "", n = 0; n < e.length; n++) t += '<div class="gem"><div class="gem-bg"></div></div>';
    $(".gems-container .gems-wrapper").append(t)
}

function updateCanvas() {
    canResizeCanvas && (canResizeCanvas = !1)
}

function updateThreeObject() {
    var e = $($(".capsules-container .capsule.current")).find(".capsule-three-background-path").attr("data-three-path");
    putNewThreeObject(e)
}

function revealCurrentGem() {
    if (!$currentCapsule.hasClass("not-showed")) {
        var e = $(".capsules-container .capsule:not(.not-showed)"),
            t = $(".gems-container .gems-wrapper .gem"),
            n = $currentCapsule.index() - 1;
        $(t[n]).find(".gem-bg").css("background", $(e[n]).attr("data-color")), TweenMax.to($($(".gems-container .gems-wrapper .gem")[n]).find(".gem-bg"), 1, {
            width: "1900%",
            height: "1900%",
            opacity: 0,
            ease: Power2.easeInOut,
            onComplete: function() {
                $(t[n]).addClass("fill"), $(t[n]).css("background", $(e[n]).attr("data-color"));
                var i = $(".gems-container .gems-wrapper .gem.fill");
                i.length >= t.length ? (animateRotateGems(), setTimeout(function() {
                    tweenWaitGems.play(0)
                }, 600), intervalGems = setInterval(function() {
                    tweenWaitGems.play(0)
                }, 4e3), $(".gems-container").removeClass("not-complete"), $(".gems-container").addClass("complete js-open-popup cursor-customized hover-white")) : ($(".gems-container").addClass("not-complete"), $(".gems-container").removeClass("complete js-open-popup cursor-customized hover-white"))
            }
        })
    }
}

function animatePreload() {
    var e = $(".preload-container .preload-content .images-container"),
        t = new TimelineMax;
    t.to(e, 0, {
        opacity: 1
    }).to(e.find("img")[0], .5, {
        opacity: 1,
        onStart: function() {
            playSound(preloadImageAudio[0])
        }
    }, 0).to(e.find("img")[1], .5, {
        opacity: 1,
        onStart: function() {
            playSound(preloadImageAudio[1])
        }
    }, .5).to(e.find("img")[2], .5, {
        opacity: 1,
        onStart: function() {
            playSound(preloadImageAudio[2])
        }
    }, 1).to(e.find("img")[3], .5, {
        opacity: 1,
        onStart: function() {
            playSound(preloadImageAudio[3]), $(".preload-container .preload-content .subtitle").removeClass("blink"), TweenMax.to($(".preload-container"), 1, {
                opacity: 0,
                onComplete: function() {
                    $(".preload-container").css("pointer-events", "none"), $("#three-container").css("opacity", "0"), $(".section-home").hasClass("is-404") ? animate404Screen() : (playSound(preloadImageAudio[4]), animateFirstScreen())
                }
            })
        }
    }, 1.5)
}

function removePreload() {
    TweenMax.to($(".preload-container"), .5, {
        opacity: 0,
        onComplete: function() {
            $(".preload-container").css("pointer-events", "none"), $(".section-home").hasClass("is-404") ? animate404Screen() : animateFirstScreen()
        }
    })
}

function animateFirstScreen() {
    playSound(regularAudio);
    var e = $(".capsules-container .capsule.showing").data("name");
    prepareCapsuleByName(e, !0);
    var t = $(".capsules-container .capsule[data-name=home]").find(".capsule-sound")[0];
    playSound(t), stopSound(actionAudio), revealCurrentGem(), TweenMax.to($(".main-title-container p"), 0, {
        top: "30px"
    }), TweenMax.to($(".home-social-awards-container .home-social-container, .home-social-awards-container .home-awards-container"), 0, {
        y: 30
    });
    var n = new TimelineMax;
    n.to($(".main-title-container p"), 1, {
        top: "0px",
        opacity: "1",
        delay: .5,
        ease: Power2.easeOut
    }).to($("#three-container"), 1, {
        opacity: 1
    }, 1.5).to($(".home-social-awards-container .home-social-container, .home-social-awards-container .home-awards-container"), .8, {
        y: 0,
        opacity: 1,
        onComplete: function() {
            if (appearHeaderAndFooter(), checkCookies()) {
                var t = "-" + $(".cookies-container .cookies-content").innerHeight() + "px";
                $(".cookies-container").css("bottom", t), TweenLite.to(".cookies-container", .4, {
                    bottom: "0",
                    ease: Power2.easeInOut,
                    delay: 1,
                    onComplete: function() {
                        setTimeout(function() {
                            $(".cookies-container .cookies-close-container svg").click()
                        }, 3e3)
                    }
                })
            }
            tweenAnimateMenuCircle.play(0), intervalMenu = setInterval(function() {
                tweenAnimateMenuCircle.play(0)
            }, 6e3), tweenWaitWand.play(0), intervalWand = setInterval(function() {
                tweenWaitWand.play(0)
            }, 8e3), preloadFinished = !0, inTransition = !1, "home" == e && setTimeout(changeBoringText, 1e4)
        }
    }, 1)
}

function prepareGeneralAnimations() {
    $(".js-animated").removeClass("js-animated");
    var e = $(".dinamic-popup .js-animate"),
        t = $('.dinamic-popup .js-animate[data-animation="top-opacity"]');
    TweenLite.set(e, {
        opacity: 0
    }), TweenLite.set(t, {
        opacity: 0,
        y: 40
    })
}

function animateGeneralElements() {
    for (var e = $(window).scrollTop() + .8 * $(window).innerHeight(), t = $(window).scrollTop() - .25 * $(window).innerHeight(), n = $(".dinamic-popup .js-animate"), i = 0, r = .8, o = 0; o < n.length; o++) {
        var a = $(n[o]);
        a.offset().top < e && a.offset().top > t && !a.hasClass("js-animated") && (i += .1, a.addClass("js-animated"), "top-opacity" == a.attr("data-animation") ? TweenLite.to(a, r, {
            y: 0,
            opacity: 1,
            ease: Power2.easeOut,
            delay: i
        }) : TweenLite.to(a, r, {
            opacity: 1,
            ease: Power2.easeOut,
            delay: i
        }))
    }
}

function animateShowVideos() {
    for (var e = $(window).scrollTop() + .8 * $(window).innerHeight(), t = $(window).scrollTop() - .4 * $(window).innerHeight(), n = $(".dinamic-popup .video-container"), i = 0, r = .8, o = 0; o < n.length; o++) {
        var a = $(n[o]);
        if (a.offset().top < e && a.offset().top > t) {
            if (a.find("video")[0].paused) {
                if (a.hasClass("show-mask")) {
                    i += .1, a.removeClass("show-mask");
                    var s = a.find(".video-mask");
                    TweenLite.to(s, r, {
                        opacity: 0,
                        ease: Power2.easeOut,
                        delay: i
                    }), a.find("video")[0].currentTime = 0
                }
                a.find("video")[0].play()
            }
        } else a.find("video")[0].paused || a.find("video")[0].pause()
    }
}

function animate404Screen() {
    changeMainTitle($($(".capsules-container .capsule.not-showed")).find(".capsule-main-title").text());
    var e = $($(".capsules-container .capsule.not-showed")).find(".capsule-three-background-path").attr("data-three-path");
    putNewThreeObject(e), TweenMax.to($("#three-container"), 1.5, {
        opacity: 1
    }), appearHeaderAndFooter(), setTimeout(function() {
        fadeInMainTitle(), inTransition = !1, TweenMax.to($(".button-go-to-home"), .5, {
            opacity: 1,
            delay: 1,
            "pointer-events": "auto"
        })
    }, 500)
}

function refreshPositionCustomCursor(e) {
    var t = e.clientX + "px",
        n = e.clientY + "px";
    TweenMax.to($(".custom-cursor-wrapper"), .8, {
        left: t,
        top: n,
        ease: Back.easeOut.config(3),
        delay: .1
    })
}

function changeInCursor() {
    $(".custom-cursor-wrapper .custom-cursor").addClass("cursor-select")
}

function changeOutCursor() {
    $(".custom-cursor-wrapper .custom-cursor").removeClass("cursor-select")
}

function detectTouchPressedStart(e) {
    0 != $(e.currentTarget).hasClass("js-open-popup") || inTransition || startCapsuleLoop()
}

function detectTouchPressedEnd(e) {
    0 == $(e.currentTarget).hasClass("js-open-popup") && endCapsuleLoop()
}

function getRandomColor() {
    for (var e = "0123456789ABCDEF", t = "#", n = 0; 6 > n; n++) t += e[Math.floor(16 * Math.random())];
    return t
}

function animateLightsColor() {
    var e = 600 - 550 * tweenMaxTransition.progress();
    changeLightsColor(getRandomColor(), getRandomColor()), changingColorInterval = setTimeout(animateLightsColor, e)
}

function chargeSingle() {
    inTransition || workSlideMove || (pressedHold = !0, startCapsuleLoop(), tweenPress.play(), animate(), $(".background-bar").addClass("active"))
}

function goToSingle() {
    pressedHold && (endCapsuleLoop(), tweenPress.reverse(), $(".background-bar").removeClass("active"), pressedHold = !1)
}

function startCapsuleLoop() {
    buttonPushed || inTransition || popupOpened || !preloadFinished || (glitchPass.randX = 1, glitchPass.permanentEfect = !0, buttonPushed = !0, inTransition = !0, capsuleAnimationFinished = !1, playSound(actionAudio), stopSound(regularAudio), "work" == $currentCapsule.attr("data-name") && hideWorkSlider(), makeTransitionToSingle(), animateLightsColor(), changeMainTitle("hold"), changeActionAdvice("hold the door"), $(".navigate-single-button-advice").removeClass("blink-slow blink"), disappearHeaderAndFooter())
}

function endCapsuleLoop() {
    if (glitchPass.randX = 0, glitchPass.permanentEfect = !1, preloadFinished && !popupOpened)
        if (clearTimeout(changingColorInterval), putDefaultLights(), capsuleAnimationFinished) {
            if (capsuleAnimationFinished) {
                buttonPushed = !1, $(".capsules-container .capsule").removeClass("showing"), $currentCapsule.addClass("showing"), $(".section-home .navigate-single-button-container .navigate-single-button .navigate-single-button-advice").removeClass("blink"), stopSound(audioActive), playSound(capsuleLoadedAudio), playSound(regularAudio), fadeOutMainTitle(!0), $(".main-title-container p").removeClass("blink");
                var e;
                "work" == $currentCapsule.attr("data-name") ? (showWorkSlider(), e = $(".work-slider-wrapper .slider-container .slides .slide.current").find(".slider-main-title").text()) : e = $currentCapsule.find(".capsule-main-title").text(), changeMainTitle(e), changeColorMainTitle("font-black"), openSingleOfSectionPopup(), $(" .section-home .background-bar .progress-bar").css("left", "-100%"), changeActionAdvice("Press & Hold"), isTouchDevice() || $(".custom-cursor-wrapper").css("display", "block"), $(".navigate-single-button-advice").removeClass("blink-slow blink"), $(".navigate-single-button-advice").addClass("blink-slow")
            }
        } else {
            buttonPushed = !1;
            var e;
            "work" == $currentCapsule.attr("data-name") ? (showWorkSlider(), e = $(".work-slider-wrapper .slider-container .slides .slide.current").find(".slider-main-title").text()) : e = $currentCapsule.find(".capsule-main-title").text(), changeMainTitle(e), appearHeaderAndFooter(), changeActionAdvice("Press & Hold"), isTouchDevice() || $(".custom-cursor-wrapper").css("display", "block"), $(".navigate-single-button-advice").removeClass("blink-slow blink"), $(".navigate-single-button-advice").addClass("blink-slow"), stopSound(audioActive), playSound(regularAudio);
            var t = $(".section-home .background-bar .progress-bar");
            TweenMax.to(t, .3, {
                left: "-100%",
                ease: Power0.easeNone
            }), inTransition = !1
        }
}

function createAsociatedArrayOfImages() {
    for (var e = 0, t = [], n = 0; n < $(".capsule").length; n++) {
        for (var i = [], r = 0; r < $($(".capsule")[n]).find(".image-effect").length; r++) i.push(e), e++;
        t.push(i)
    }
    asociatedArrayOfImages = t
}

function makeTransitionToSingle() {
    $progressBar = $(".section-home .background-bar .progress-bar"), tweenMaxTransition = TweenMax.to($progressBar, durationOfVideo, {
        left: "0px",
        ease: Power0.easeNone,
        onComplete: function() {
            capsuleAnimationFinished = !0, buttonPushed && (changeActionAdvice("well done!"), $(".main-title-container p").addClass("blink"), changeMainTitle("release"), $(".navigate-single-button-advice").removeClass("blink-slow blink"), $(".navigate-single-button-advice").addClass("blink"), goToSingle())
        }
    })
}

function appearHeaderAndFooter() {
    TweenMax.to($(".bottom-bar, .top-bar"), .5, {
        opacity: 1,
        y: 0
    })
}

function disappearHeaderAndFooter() {
    TweenMax.to($(".bottom-bar"), .5, {
        opacity: 0,
        y: 10
    }), TweenMax.to($(".top-bar"), .5, {
        opacity: 0,
        y: -10
    })
}

function calculateRandom(e, t) {
    return void 0 == t && (t = 1), Math.round(Math.random() * (e - t) + t)
}

function changeActionAdvice(e) {
    var t = $(".section-home .navigate-single-button-container .navigate-single-button .navigate-single-button-advice");
    t.text(e)
}

function playSound(e) {
    if (isTouchDevice()) return !0;
    if (isTouchDevice() && e == regularAudio) return !0;
    var t = audioContext.createBufferSource();
    t.buffer = audioBuffers[e.src], t.connect(gainNode), t.loop = e.loop, t.onended = function() {
        delete audioPlaying[e.src]
    }, e == actionAudio && (t.loopStart = 3.1, t.loopEnd = 6.9), t.start(0), audioPlaying[e.src] = t, audioActive = e
}

function stopSound(e) {
    return isTouchDevice() ? !0 : void($(".section-home").hasClass("is-404") || void 0 != audioPlaying[e.src] && (audioPlaying[e.src].stop(), delete audioPlaying[e.src]))
}

function switchVolume(e) {
    e.stopPropagation(), soundsMuted ? unMuteSounds() : muteSounds()
}

function playHoverSound() {
    lastHoverAudio == hoverAudio.length - 1 && (lastHoverAudio = 0), playSound(hoverAudio[lastHoverAudio]), lastHoverAudio++
}

function muteSounds() {
    gainNode.gain.setValueAtTime(0, 0), $(".tachable .stud").css("left", "0"), $(".bottom-bar .sound-container p .value").text("OFF"), soundsMuted = !0
}

function unMuteSounds() {
    gainNode.gain.setValueAtTime(1, 0), $(".tachable .stud").css("left", "-100%"), $(".bottom-bar .sound-container p .value").text("ON"), soundsMuted = !1
}

function openSingleOfSectionPopup() {
    $(".top-bar .gems-container, .top-bar .special-capsule-container, .bottom-bar .credits-container").addClass("hidden"), popupOpened = !0, selectSingleOfSectionPopup()
}

function openGeneralPopup(e) {
    if (e.stopPropagation(), !inTransition) {
        e.stopPropagation(), e.stopImmediatePropagation();
        var t = $(e.currentTarget);
        t.hasClass("js-open-popup") && (popupOpened = !0, animateTransitionCurtain(), TweenMax.to($(".content-animable"), 1, {
            y: 30,
            ease: Power3.ease
        }), setTimeout(function() {
            selectGeneralPopup(t), TweenMax.set(".section-home .navigate-single-button-container", {
                x: -50
            })
        }, 1.5 * curtainTransitionDuration))
    }
}

function selectGeneralPopup(e) {
    $(".capsules-container .capsule.showing");
    if ($(".special-popup").removeClass("black-background"), $(".bottom-bar .special-capsule-bottom-link").addClass("hidden"), e.hasClass("js-open-popup")) {
        if (e.hasClass("credits-container")) createPopupTagEvent("Credits"), clearInterval(intervalGems), canResizeCanvas = !1, $(".custom-cursor-wrapper .custom-cursor").removeClass("cursor-black"), disappearHeaderAndFooter(), fillAndShowSpecialPopupContent($(".credits-popup")), $(".special-popup").addClass("black-background"), $(".special-popup .popup-content .close-button").addClass("white-color"), $(".top-bar .gems-container,.top-bar .menu-button, .top-bar .special-capsule-container, .bottom-bar .credits-container, .bottom-bar .contact-container").addClass("hidden"), $(".main-title-container").css("display", "none"), animateCreditsPopup();
        else if (e.hasClass("menu-button")) createPopupTagEvent("Menu"), clearInterval(intervalMenu), soundCapsulePlayed = !1, canResizeCanvas = !1, $(".top-bar .gems-container, .top-bar .menu-button").addClass("hidden"), $(".special-popup").addClass("black-background"), disappearHeaderAndFooter(), fillAndShowSpecialPopupContent($(".gems-popup")), $(".special-popup.black-background .popup-content .close-button").addClass("white-color"), disableCurrentSectionLink(), animateMenuPopup();
        else if (e.hasClass("contact-container") || e.hasClass("open-contact")) {
            createPopupTagEvent("Contact"), currentStep = 0, canResizeCanvas = !1, $(".custom-cursor-wrapper .custom-cursor").addClass("cursor-black"), $(".main-title-container").css("display", "none"), fillAndShowSpecialPopupContent($(".contact-popup")), currentFormSlide = 0;
            var t = $($(".special-popup .popup-content .contact-container .contact-form-slider-container .slider-container .slides .slide")[currentFormSlide]);
            t.addClass("current"), t.find(".slide-content").css("opacity", "1"), $(".special-popup .contact-form-slider-container .slider-container .slide.current input").focus(), $(".bottom-bar, .top-bar").css("z-index", "9"), $(".main-title-container").css("z-index", "7"), $(".top-bar .gems-container, .top-bar .menu-button, .top-bar .special-capsule-container, .bottom-bar, .bottom-bar .credits-container, .bottom-bar .sound-container, .bottom-bar .special-capsule-button-link, .bottom-bar .contact-container, .bottom-bar .social-container, .bottom-bar .color-container").addClass("hidden"), TweenMax.to($(".top-bar, .bottom-bar"), .5, {
                opacity: 1,
                y: 0,
                onComplete: function() {
                    inTransition = !1
                }
            }), soundsMuted || (soundsMutedByContact = !0, muteSounds())
        }
        enableParallax = !0
    }
    overlay.toggle(), $(".dinamic-popup").css("z-index", "6"), $(".special-popup").css("z-index", "8")
}

function selectSingleOfSectionPopup() {
    var e = $(".section-home .navigate-single-button-container").attr("data-open-popup");
    void 0 != e && "" != e ? (fillAndShowGeneralPopupContent($currentCapsule.find(".capsule-popup[data-popup-name=" + e + "]")), createCapsuleTagEvent(e)) : (fillAndShowGeneralPopupContent($currentCapsule.find(".capsule-popup")), createCapsuleTagEvent($currentCapsule.attr("data-name"))), $("body").addClass("popup-capsule-opened"), $(".bottom-bar .credits-container, .bottom-bar .special-capsule-bottom-link").addClass("hidden"), changeColorsOfElementsForSingle(), animateCapsulePopup(), enableParallax = !0, preloadImages_main(), putFloatingObjects(), $(".main-title-container").addClass("popup-opened"), $(".bottom-bar .special-capsule-button-link").addClass("hidden"), changeToHaveGoodScroll(), $(".dinamic-popup").css("z-index", "6")
}

function changeColorsOfElementsForSingle() {
    $(".special-popup").removeClass("black-background"), $(".custom-cursor-wrapper .custom-cursor").addClass("cursor-black"), $(".dinamic-popup .popup-content .close-button").addClass("white-color"), $(".bottom-bar .sound-container .svg-container svg").addClass("fill-black"), $(".bottom-bar .contact-container svg").addClass("fill-black"), $(".bottom-bar .social-container a svg").addClass("fill-black"), $(".bottom-bar .sound-container p").addClass("font-black"), $(".bottom-bar .contact-container p").addClass("font-black"), $(".bottom-bar .center-container p").addClass("font-black"), $(".bottom-bar .sound-container p").removeClass("font-gray"), $(".bottom-bar .contact-container p").removeClass("font-gray"), $(".bottom-bar .center-container p").removeClass("font-gray"), $(".bottom-bar .color-container .color-text").addClass("font-black"), $(".bottom-bar .color-container .color-text").removeClass("font-white"), $(".bottom-bar .color-container svg").addClass("fill-black")
}

function changeColorsOfElementsForHome() {
    $(".special-popup").removeClass("black-background"), $(".custom-cursor-wrapper .custom-cursor").removeClass("cursor-black"), $(".dinamic-popup .popup-content .close-button").removeClass("white-color"), $(".bottom-bar .sound-container .svg-container svg").removeClass("fill-black"), $(".bottom-bar .contact-container svg").removeClass("fill-black"), $(".bottom-bar .social-container a svg").removeClass("fill-black"), $(".bottom-bar .sound-container p").addClass("font-gray"), $(".bottom-bar .contact-container p").addClass("font-gray"), $(".bottom-bar .center-container p").addClass("font-gray"), $(".bottom-bar .sound-container p").removeClass("font-black"), $(".bottom-bar .contact-container p").removeClass("font-black"), $(".bottom-bar .center-container p").removeClass("font-black"), $(".bottom-bar .color-container .color-text").addClass("font-white"), $(".bottom-bar .color-container .color-text").removeClass("font-black"), $(".bottom-bar .color-container svg").removeClass("fill-black")
}

function changeToHaveGoodScroll() {
    $(".section-home").css("display", "none"), $("body").css("overflow", "auto"), $(".dinamic-popup").css({
        position: "relative",
        right: "auto",
        bottom: "auto",
        height: "100%"
    }), $(".dinamic-popup .popup-content").css("height", "auto"), $(".dinamic-popup .popup-content .popup-content-work-container").css({
        height: "100%"
    })
}

function changeBackToHaveGoodScroll() {
    $("body").css("overflow", "hidden"), $(".dinamic-popup").css({
        position: "fixed",
        height: "100vh",
        right: "0",
        bottom: "0"
    }), $(".dinamic-popup .popup-content").css("height", "100vh"), $(".dinamic-popup .popup-content .popup-content-work-container").css({
        height: "100vh"
    }), $(".section-home").css("display", "block")
}

function fillAndShowGeneralPopupContent(e) {
    $(".dinamic-popup").html(e.html()), $(".dinamic-popup").addClass("active");
    var t = location.href;
    pushState({
        url: t,
        type: "generalPopup"
    }, "", t), prepareGeneralAnimations()
}

function fillAndShowSpecialPopupContent(e) {
    $(".special-popup").html(e.html()), $(".special-popup").addClass("active");
    var t = location.href;
    pushState({
        url: t,
        type: "specialPopup"
    }, "", t)
}

function closeSpecialPopup(e) {
    inTransition || (e.stopPropagation(), animateTransitionCurtain(), inTransition = !0, $(".bottom-bar .center-container").removeClass("blink"), TweenMax.to($(".special-popup .popup-content"), 1, {
        y: 30,
        ease: Power3.ease,
        onComplete: function() {
            if ($(".dinamic-popup").hasClass("active")) {
                var t = $(e.currentTarget).closest(".popup");
                $(".special-popup").css("z-index", "1"), t.removeClass("active"), $(".top-bar .menu-button, .bottom-bar, .bottom-bar .sound-container, .bottom-bar .contact-container, .bottom-bar .color-container , .bottom-bar .social-container").removeClass("hidden"), overlay.toggle(), TweenMax.to($(".main-title-container p"), .5, {
                    y: 0,
                    ease: Power2.easeOut
                }), appearHeaderAndFooter()
            } else {
                enableParallax = !1, appearHeaderAndFooter(), enableCurrentSectionLink(), void 0 != animationOfPopupCredits && animationOfPopupCredits.kill();
                var t = $(e.currentTarget).closest(".popup");
                $(".custom-cursor-wrapper .custom-cursor").removeClass("cursor-black"), $(".bottom-bar .special-capsule-bottom-link").removeClass("hidden"), $(".top-bar .gems-container, .top-bar .menu-button, .top-bar .special-capsule-container, .bottom-bar, .bottom-bar .credits-container, .bottom-bar .sound-container, .bottom-bar .special-capsule-button-link, .bottom-bar .contact-container, .bottom-bar .social-container, .bottom-bar .color-container").removeClass("hidden"), $(".special-popup").css("z-index", "1"), $(".bottom-bar .center-container p").text(""), $(".bottom-bar .home-center-container").css("display", "none"), $(".bottom-bar .home-center-container").css("display", "block"), TweenMax.to($(".bottom-bar .center-container, .bottom-bar .sound-container p, .bottom-bar .contact-container p, .bottom-bar .social-container"), .5, {
                    opacity: 1,
                    "pointer-events": "auto",
                    onComplete: function() {
                        $(".bottom-bar .sound-container p, .bottom-bar .contact-container p, .bottom-bar .social-container").css("display", "block"), $(".bottom-bar .sound-container .svg-container").removeClass("tachable")
                    }
                }), t.removeClass("active"), overlay.toggle(), TweenMax.to($("#three-container, .top-bar, .bottom-bar"), 0, {
                    opacity: 0
                }), animatePopupToHome()
            }
            $(".main-title-container").css("display", "block"), destroyConfetti(), $(".special-popup").removeClass("black-background"), $(".bottom-bar .contact-container").removeClass("hidden"), $(".special-popup .popup-content .close-button").removeClass("white-color"), soundsMutedByContact && (soundsMutedByContact = !1, unMuteSounds())
        }
    }))
}

function closeMenu() {
    inTransition || (goingToScrollTop = 0, enableParallax = !1, $(".transition-curtain").hasClass("is-opened") || animateTransitionCurtain(), inTransition = !0, setTimeout(function() {
        enableCurrentSectionLink(), $(".custom-cursor-wrapper .custom-cursor").removeClass("cursor-black"), $(".top-bar .gems-container, .top-bar .menu-button, .top-bar .special-capsule-container, .bottom-bar .credits-container, .bottom-bar .contact-container").removeClass("hidden"), $(".special-popup").css("z-index", "1"), $(".special-popup").removeClass("active"), $(".bottom-bar .special-capsule-bottom-link").removeClass("hidden"), overlay.toggle()
    }, 1e3), setTimeout(function() {
        popupOpened = !1, canResizeCanvas = !0, closeGeneralPopupInstantly = !1
    }, 1900), TweenMax.to($("#three-container"), 0, {
        opacity: 0
    }))
}

function closeGeneralPopup(e) {
    if (!inTransition) {
        e.stopPropagation(), goingToScrollTop = 0, enableParallax = !1, $(".transition-curtain").hasClass("is-opened") || animateTransitionCurtain(),
            inTransition = !0, $(".bottom-bar .center-container").removeClass("blink");
        var t;
        t = "work" == $currentCapsule.attr("data-name") ? $(".work-slider-wrapper .slider-container .slides .slide.current").find(".slider-main-title").text() : $currentCapsule.find(".capsule-main-title").text(), changeMainTitle(t);
        var n = 1;
        1 == closeGeneralPopupInstantly && (n = 0), TweenMax.to($(".dinamic-popup .popup-content .popup-content-work-container"), n, {
            y: 30,
            ease: Power3.ease,
            onComplete: function() {
                appearHeaderAndFooter(), $(".main-title-container").css("z-index", "3"), $(".bottom-bar, .top-bar").css("z-index", "6"), $(".main-title-container").css("display", "block"), changeBackToHaveGoodScroll(), enableCurrentSectionLink(), void 0 != animationOfPopupCredits && animationOfPopupCredits.kill();
                var t = $(e.currentTarget).closest(".popup");
                $(".top-bar .gems-container, .top-bar .menu-button, .top-bar .special-capsule-container, .bottom-bar .credits-container, .bottom-bar .contact-container, .bottom-bar .social-container").removeClass("hidden"), $(".section-home .navigate-single-button-container").addClass("hidden"), $(".dinamic-popup").css("z-index", "1"), $(".bottom-bar .center-container p").text(""), $(".bottom-bar .home-center-container").css("display", "block"), n = .5, 1 == closeGeneralPopupInstantly && (n = 0), TweenMax.to($(".bottom-bar .center-container, .bottom-bar .sound-container p, .bottom-bar .contact-container p, .bottom-bar .social-container"), n, {
                    opacity: 1,
                    "pointer-events": "auto",
                    onComplete: function() {
                        $(".bottom-bar .center-container, .bottom-bar .sound-container p, .bottom-bar .contact-container p, .bottom-bar .social-container").css("display", "block"), $(".bottom-bar .sound-container .svg-container").removeClass("tachable")
                    }
                }), $(".fo-canvas canvas").length > 0 && destroyMatter(), t.removeClass("active"), $(".main-title-container").removeClass("popup-opened"), $(".bottom-bar .special-capsule-button-link").removeClass("hidden"), changeColorsOfElementsForHome(), 0 == closeGeneralPopupInstantly && overlay.toggle(), TweenMax.to($("#three-container, .top-bar, .bottom-bar"), 0, {
                    opacity: 0
                }), animatePopupToHome(), $(".bottom-bar .center-container").css("opacity", "1"), $(".bottom-bar .special-capsule-bottom-link").removeClass("hidden"), $("body").removeClass("popup-capsule-opened")
            }
        })
    }
}

function menuLinkHover(e) {
    var t = $currentCapsule.attr("data-name") == $(e.currentTarget).attr("data-menu");
    if ("mouseenter" == e.type)
        if (t) $(".custom-cursor-wrapper .custom-cursor").removeClass("cursor-select");
        else {
            var n = $(e.currentTarget).attr("data-color");
            $(e.currentTarget).css("background-color", n)
        }
    else $(e.currentTarget).css("background-color", "transparent")
}

function enableCurrentSectionLink() {
    $($(".menu-container ul li[data-menu='" + $currentCapsule.attr("data-name") + "']")[0]).addClass("cursor-customized"), $($(".menu-container ul li[data-menu='" + $currentCapsule.attr("data-name") + "']")[0]).removeClass("disabled"), $($(".menu-container ul li[data-menu='" + $currentCapsule.attr("data-name") + "']")[0]).css("pointer-events", "auto")
}

function disableCurrentSectionLink() {
    $($(".menu-container ul li[data-menu='" + $currentCapsule.attr("data-name") + "']")[0]).removeClass("cursor-customized"), $($(".menu-container ul li[data-menu='" + $currentCapsule.attr("data-name") + "']")[0]).addClass("disabled"), $($(".menu-container ul li[data-menu='" + $currentCapsule.attr("data-name") + "']")[0]).css("pointer-events", "none")
}

function changeCapsule(e) {
    $(e.currentTarget).hasClass("special-link") && $(".special-popup").hasClass("active") ? (e.stopPropagation(), $(".special-popup .popup-content .close-button").click()) : $(e.currentTarget).hasClass("special-link") && $(".dinamic-popup").hasClass("active") ? (e.stopPropagation(), $(".dinamic-popup .popup-content .close-button").click()) : soundCapsulePlayed || inTransition || (e.stopPropagation(), $(e.currentTarget).attr("data-menu") != $(".capsule.showing").attr("data-name") && (closeGeneralPopupInstantly = !1, $(".dinamic-popup").hasClass("active") && (closeGeneralPopupInstantly = !0, $(".dinamic-popup .popup-content .close-button").click(), inTransition = !1), changeCapsuleByName($(e.currentTarget).attr("data-menu"))))
}

function changeCapsuleByName(e) {
    soundCapsulePlayed = !0, fadeOutMainTitle(!0), prepareCapsuleByName(e, !1), closeMenu(), setTimeout(function() {
        animateNewHome()
    }, 1300)
}

function prepareCapsuleByName(e, t) {
    var n;
    $(".capsules-container .capsule").removeClass("current"), $('.capsules-container .capsule[data-name="' + e + '"]').addClass("current"), $currentCapsule = $(".capsules-container .capsule.current"), $(".home-center-container .special-capsule-link").attr("data-menu") == e ? $(".home-center-container, .bottom-bar .special-capsule-button-link").addClass("hidden") : $(".home-center-container, .bottom-bar .special-capsule-button-link").removeClass("hidden");
    var i;
    if ("work" == e) {
        $(".main-title-container p").css("font-size", "22vw"), showWorkSlider(), $(".section-home .navigate-single-button-container").attr("data-work-index", 0);
        var r = $($currentCapsule.find(".capsule-popup")[0]).attr("data-popup-name");
        $(".navigate-single-button-container").attr("data-open-popup", r), i = $(".work-slider-wrapper .slider-container .slides .slide.current").find(".slider-main-title").text()
    } else hideWorkSlider(), $(".navigate-single-button-container").removeAttr("data-open-popup"), $(".section-home .navigate-single-button-container").removeAttr("data-work-index"), i = $currentCapsule.find(".capsule-main-title").text();
    changeMainTitle(i), TweenMax.to($(".section-home .navigate-single-button-container"), 0, {
        "pointer-events": "none",
        opacity: 0
    }), TweenMax.to($(".section-home #three-container"), 0, {
        opacity: 0
    }), updateThreeObject(), $(".capsules-container .capsule").removeClass("showing"), $currentCapsule.addClass("showing"), n = t ? 1.5 : 2;
    var o = $currentCapsule.attr("data-href");
    "home" != e ? (TweenMax.to($(".home-social-awards-container"), 0, {
        "pointer-events": "none",
        opacity: 0
    }), TweenMax.to($(".section-home .navigate-single-button-container"), .5, {
        "pointer-events": "auto",
        delay: n,
        opacity: 1
    }), isTouchDevice() ? changeActionAdvice("Нажми & Держи") : (changeActionAdvice("Нажми & Держи"), $(".custom-cursor-wrapper").css("display", "block"))) : (TweenMax.to($(".section-home .navigate-single-button-container"), 0, {
        "pointer-events": "none",
        opacity: 0
    }), TweenMax.to($(".home-social-awards-container"), .5, {
        "pointer-events": "auto",
        delay: n,
        opacity: 1
    })), doPushState && pushState({
        url: o,
        capsule_name: e,
        type: "capsule"
    }, e, o), doPushState = !0
}

function updateMetaData(e) {
    e = $(".capsule.showing");
    var t = e.find(".meta-data .title").text(),
        n = e.find(".meta-data .description").text(),
        i = e.find(".meta-data .image").attr("data-src"),
        r = e.attr("data-href");
    document.title = t, $("head").find('meta[name="apple-mobile-web-app-title"], meta[name="twitter:title"], meta[property="og:title"]').attr("content", t), $("head").find('meta[name="description"],meta[name="twitter:description"],meta[property="og:description"]').attr("content", n), $("head").find('meta[name="twitter:image"],meta[property="og:image"]').attr("content", i), $("head").find('meta[property="og:url"]').attr("content", r)
}

function pushState(e, t, n) {
    e.timeStamp = (new Date).getTime(), currentState = e, firstPushState ? (firstPushState = !1, window.history.replaceState(e, t, n)) : (updateMetaData($currentCapsule), window.history.pushState(e, t, n), "capsule" == e.type && createTagEvent("pageview"))
}

function animateNewHome() {
    0 == closeGeneralPopupInstantly && (setTimeout(function() {
        fadeInMainTitle()
    }, 500), appearHeaderAndFooter()), revealCurrentGem(), setTimeout(function() {
        inTransition = !1, soundCapsulePlayed = !1
    }, 1e3)
}

function animatePopupToHome() {
    popupOpened = !1, "work" == $currentCapsule.attr("data-name") && showWorkSlider(), fadeOutMainTitle(!0);
    var e = new TimelineMax;
    e.to($("#three-container"), 1, {
        opacity: 1
    }, .8).to($(".top-bar, .bottom-bar"), .5, {
        opacity: 1,
        onComplete: function() {
            changeColorMainTitle("font-white"), fadeInMainTitle(), setTimeout(function() {
                $(".section-home .navigate-single-button-container").removeClass("hidden"), canResizeCanvas = !0
            }, 500)
        }
    }, 1)
}

function animateCreditsPopup() {
    animationOfPopupCredits = new TimelineMax, TweenMax.to($(".special-popup .popup-content .background-text"), .5, {
        opacity: .1
    }), animationOfPopupCredits.to($(".special-popup .popup-content .credits-container .credits-wrapper"), 20, {
        top: "-50%",
        ease: Power0.easeNone,
        onComplete: function() {
            $(".special-popup .close-button").click()
        }
    })
}

function hoverNavigateButton(e) {
    $(e.currentTarget).addClass("fill-white"), TweenMax.to($(e.currentTarget), 0, {
        transform: "scale(1.2)"
    })
}

function hoverOutNavigateButton(e) {
    $(e.currentTarget).removeClass("fill-white"), TweenMax.to($(e.currentTarget), 0, {
        transform: "scale(1)"
    })
}

function makeGeneralHover(e) {
    if (!hoverAnimation && !inTransition) {
        hoverAnimation = !0;
        var t = $(e.target);
        t.append("<div class='hover-curtain'></div>"), TweenMax.to(t.find(".hover-curtain"), .5, {
            width: "100%",
            ease: Power2.easeInOut
        }), TweenMax.to(t.find(".hover-curtain"), .5, {
            left: "100%",
            delay: .5,
            ease: Power2.easeInOut,
            onComplete: function() {
                t.find(".hover-curtain").remove(), hoverAnimation = !1
            }
        })
    }
}

function hoverControlSliderButton(e) {
    $(e.currentTarget).addClass("ruya-gradient")
}

function hoverOutControlSliderButton(e) {
    $(e.currentTarget).removeClass("ruya-gradient")
}

function animateCapsulePopup() {
    if ("work" == $currentCapsule.attr("data-name")) {
        var e = Number($(".section-home .navigate-single-button-container").attr("data-work-index"));
        e > 0 && (e /= 2);
        var t = $($currentCapsule.find(".capsule-popup.work-popup")[e]).find(".capsule-sound")[0]
    } else var t = $currentCapsule.find(".capsule-sound")[0];
    playSound(t);
    var n = $(".dinamic-popup .animate-element"),
        i = curtainTransitionDuration / 1e3,
        r = new TimelineMax;
    TweenMax.to(n, 0, {
        opacity: 0,
        y: 20
    }), $(".bottom-bar, .top-bar").css("z-index", "9"), $(".main-title-container").css("z-index", "7"), $(".bottom-bar .center-container p").text("scroll down"), $(".bottom-bar .center-container").addClass("blink"), $(".bottom-bar .home-center-container").css("display", "none"), setTimeout(function() {
        fadeInMainTitle()
    }, 500), TweenMax.set(".dinamic-popup .back-container", {
        opacity: 0,
        y: -10
    }), r.to(n, .5, {
        opacity: 1,
        y: 0,
        ease: Power2.easeInOut
    }, i).to($(".top-bar, .bottom-bar, .dinamic-popup .back-container"), .5, {
        opacity: 1,
        y: 0,
        onComplete: function() {
            inTransition = !1
        }
    }, i + .5)
}

function animateMenuPopup() {
    var e = $(".special-popup .popup-content .general-container .menu-container ul li");
    TweenMax.to(e, 0, {
        opacity: 0,
        y: 20
    });
    var t = .5;
    for (i = 0; i < e.length; i++) TweenMax.to(e[i], .5, {
        opacity: 1,
        y: 0,
        delay: t,
        ease: Power2.easeOut
    }), t += .1
}

function animateTransitionCurtain(e) {
    return "undefined" == e && (e = !1), inTransition ? !1 : void overlay.toggle(e)
}

function parallaxMoveElements() {
    var e = $(window).scrollTop(),
        t = $(window).scrollTop() + $(window).innerHeight(),
        n = $("*[data-pRatio]"),
        i = ($(".parallax-container"), $(".dinamic-popup .popup-content .popup-content-work-container .work-content").height() - window.innerHeight),
        r = $(window).scrollTop() >= Math.floor(i);
    if (window.innerWidth > 650 && enableParallax && $(window).scrollTop() > 0 && !r) {
        preloadImages_main();
        var o = 1,
            a = $("html").scrollTop();
        o = a > iScrollPos ? -1 : 1, iScrollPos = a;
        var s = 1;
        n.each(function() {
            if ($(this).offset().top + $(this).innerHeight() > e && $(this).offset().top < t) {
                s = parseFloat($(this).attr("data-pRatio"));
                var n = s * o,
                    i = $(this).attr("random-direction");
                1 == i ? TweenMax.to($(this), 1, {
                    y: "+=" + n,
                    ease: Power2.easeOut
                }) : 2 == i ? TweenMax.to($(this), 1, {
                    y: "-=" + n,
                    ease: Power2.easeOut
                }) : 3 == i ? TweenMax.to($(this), 1, {
                    x: "+=" + n,
                    ease: Power2.easeOut
                }) : 4 == i && TweenMax.to($(this), 1, {
                    x: "-=" + n,
                    ease: Power2.easeOut
                })
            }
        })
    }
}

function checkSinglePagePosition() {
    $(window).scrollTop() > 100 && ($(".bottom-bar .center-container").removeClass("blink"), TweenMax.to($(".bottom-bar .center-container, .bottom-bar .sound-container p, .bottom-bar .contact-container p, .bottom-bar .social-container"), .5, {
        opacity: 0,
        "pointer-events": "none",
        onComplete: function() {
            $(".bottom-bar .center-container, .bottom-bar .sound-container p, .bottom-bar .contact-container p,  .bottom-bar .social-container").css("display", "none"), $(".bottom-bar .sound-container .svg-container").addClass("tachable")
        }
    }))
}

function putFloatingObjects() {
    $(".fo-canvas").css("display", "block"), textureFloatingObjectpath = $($currentCapsule.find(".capsule-floating-object .image-path")[0]).attr("src"), heightFloatingObject = $currentCapsule.find(".capsule-floating-object .image-path")[0].naturalHeight, widthFloatingObject = $currentCapsule.find(".capsule-floating-object .image-path")[0].naturalWidth, fo_init()
}

function softScrollWheel(e, t, n, i) {
    if (scrollEnabled) {
        var r = !1;
        if (100 != e.deltaFactor && 147.75 != e.deltaFactor && 92 != parseInt(e.deltaFactor) && 48 != parseInt(e.deltaFactor) && (r = !0), 0 > i) {
            var o = (new Date).getTime();
            o - oldTimeGravity > 1500 && (floatingEngine.world.gravity.y = -.75, scrollForObjects = TweenLite.to("body, html", .3, {
                onComplete: function() {
                    setTimeout(function() {
                        scrollForObjects.isActive() || (floatingEngine.world.gravity.y = .5)
                    }, 50)
                }
            }), oldTimeGravity = o)
        }
        return r ? !0 : (e.preventDefault(), smoothScrolling = !0, 0 > i ? (goingToScrollTop += SCROLLINC, wheelAnim = TweenLite.to("body, html", .7, {
            scrollTop: goingToScrollTop,
            ease: Power1.easeOut,
            onComplete: function() {
                setTimeout(function() {
                    wheelAnim.isActive() || (smoothScrolling = !1)
                }, 50)
            }
        })) : i > 0 && (goingToScrollTop -= SCROLLINC, wheelAnim = TweenLite.to("body, html", .7, {
            scrollTop: goingToScrollTop,
            ease: Power1.easeOut,
            onComplete: function() {
                setTimeout(function() {
                    wheelAnim.isActive() || (smoothScrolling = !1)
                }, 50)
            }
        })), 0 > goingToScrollTop && (goingToScrollTop = 0), goingToScrollTop > $(document).height() - $(window).innerHeight() && (goingToScrollTop = $(document).height() - $(window).innerHeight()), !1)
    }
}

function updateSoftScrollPosition() {
    smoothScrolling || (goingToScrollTop = $(window).scrollTop())
}

function changeGravityMobile(e) {
    var t = e.originalEvent.touches[0].clientY;
    if (lastY > t) {
        var n = (new Date).getTime();
        n - oldTimeGravity > 1500 && (floatingEngine.world.gravity.y = -.75, scrollForObjects = TweenLite.to("body, html", .3, {
            onComplete: function() {
                setTimeout(function() {
                    scrollForObjects.isActive() || (floatingEngine.world.gravity.y = .5)
                }, 50)
            }
        }), oldTimeGravity = n)
    }
    lastY = t
}

function validateForm() {
    var e = !0,
        t = $(".special-popup .contact-form-slider-container  .slide.current").attr("data-type"),
        n = $(".special-popup .contact-form-slider-container  .slide.current").find("input"),
        i = $(".special-popup .contact-form-slider-container  .slide.current").find("textarea");
    $(".special-popup .contact-form-slider-container  .slide.current");
    switch (t) {
        case "no-validation":
            e = !0;
            break;
        case "name":
            "" == n.val() ? (e = !1, formShowNotification("Name empty")) : n.val().match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/) ? e = !0 : (e = !1, formShowNotification("Only letters."));
            break;
        case "email":
            "" == n.val() ? (e = !1, formShowNotification("Email empty")) : n.val().match(form_reEmail) ? e = !0 : (e = !1, formShowNotification("Invalid email."));
            break;
        case "radio":
            e = !1;
            for (var r = 0; r < n.length; r++) $(n[r]).prop("checked") && (e = !0);
            e || formShowNotification("Select an option");
            break;
        case "phone":
            "" == n.val() ? (e = !1, formShowNotification("Phone empty")) : n.val().match(form_rePhone) ? e = !0 : (e = !1, formShowNotification("Invalid phone."));
            break;
        case "textarea":
            i.val(), "" == i.val() ? (e = !1, formShowNotification("Description empty")) : e = !0;
            break;
        case "pdf":
            "" == n.val() ? (e = !1, formShowNotification("C.V. empty")) : n[0].files[0].size > 5e5 ? (e = !1, formShowNotification("Error. Max file size 500KB")) : e = !0;
            break;
        default:
            e = !0
    }
    return e
}

function formShowNotification(e) {
    var t = $(".special-popup .contact-error-text");
    t.text(e);
    var n = .3;
    TweenMax.to(t, n, {
        opacity: 1,
        ease: Power2.easeInOut
    }), TweenMax.to(t, n, {
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 3
    })
}

function goToContactSlide(e, t) {
    var n = !0;
    t || (n = validateForm());
    var i = $(".special-popup .contact-form-slider-container .slider-container .slide").length,
        r = $(".special-popup .contact-form-slider-container .slider-container .slide"),
        o = $(".special-popup .contact-form-slider-container .slider-container .send"),
        a = $(".special-popup .contact-form-slider-container .slider-container .next"),
        s = $(".special-popup .contact-form-slider-container .slider-container .prev");
    if (t ? n = !0 : n || currentStep--, !animatingSlide && e >= 0 && i > e && n) {
        animatingSlide = !0;
        var c = $(".special-popup .contact-form-slider-container .slider-container .slide.current .slide-content"),
            l = $($(".special-popup .contact-form-slider-container .slider-container .slide")[e]).find(".slide-content"),
            u = (new TimelineMax, new TimelineMax, .3),
            h = Power2.easeIn;
        TweenLite.to(c, 0, {
            x: 0
        }), TweenLite.to(l, 0, {
            x: 20
        }), TweenLite.to(c, u, {
            x: -20,
            opacity: 0,
            force3D: !1,
            ease: h
        }), TweenLite.to(l, u, {
            x: 0,
            opacity: 1,
            force3D: !1,
            ease: h,
            delay: u,
            onComplete: function() {
                r.removeClass("current"), l.closest(".slide").addClass("current"), l.find(".input").focus(), currentFormSlide = e, animatingSlide = !1
            }
        }), e > 0 ? s.removeClass("disabled") : s.addClass("disabled"), currentStep == contactObject[currentForm].length - 1 ? (a.css("display", "none"), o.css("display", "inline-block")) : (a.css("display", "inline-block"), o.css("display", "none"))
    }
}

function goToContactNext() {
    if (!animatingSlide) {
        var e = $(".special-popup .contact-form-slider-container .slider-container .slide.current").index();
        currentStep++, e == $(".special-popup .contact-form-slider-container .slider-container .slide[data-object=company]").index() && "" != $(".special-popup form")[0].company.value && (currentForm = $(".special-popup form")[0].company.value), e == $(".special-popup .contact-form-slider-container .slider-container .slide[data-object=you-are]").index() && "" != $(".special-popup form")[0]["you-are"].value && (currentForm = $(".special-popup form")[0]["you-are"].value);
        var t = $(".special-popup .contact-form-slider-container .slider-container .slide[data-object=" + contactObject[currentForm][currentStep] + "]").index();
        goToContactSlide(t, !1)
    }
}

function goToContactPrev() {
    if (!animatingSlide) {
        currentStep--;
        var e = $(".special-popup .contact-form-slider-container .slider-container .slide[data-object=" + contactObject[currentForm][currentStep] + "]").index();
        goToContactSlide(e, !0)
    }
}

function showSendScreen() {
    var e = $(".special-popup .contact-form-slider-container .slides, .special-popup .contact-form-slider-container .controls-container"),
        t = currentForm;
    "client" == t && (t = "company");
    var n = $(".special-popup .contact-form-slider-container .send-screen[data-send-screen=" + t + "]");
    TweenLite.to(e, 1, {
        opacity: 0,
        ease: Power2.easeInOut
    }), TweenLite.to(n, 1, {
        opacity: 1,
        "pointer-events": "auto",
        ease: Power2.easeInOut,
        delay: .2,
        onComplete: function() {
            e.css("display", "none")
        }
    })
}

function sendForm(e) {
    var t = $(e.currentTarget).closest("form"),
        n = $(".special-popup .contact-form-slider-container .slider-container .prev");
    if (!sending_form && validateForm() && !animatingSlide) {
        n.addClass("disabled"), showSendingMessage(), sending_form = !0;
        var i = t.serialize();
        jQuery.ajax({
            type: "POST",
            url: "",
            data: i,
            success: function(e) {
                e = JSON.parse(e), "ok" == e.status ? (hideSendingMessage(), initConfeti(), showSendScreen(), sent_form = !0, lastEmailForm = t[0].email.value, t[0].reset(), createTagEvent("emailSended")) : sent_form = !1, animatingSlide = !1, sending_form = !1
            }
        })
    }
}

function showSendingMessage() {
    var e = $(".special-popup .popup-content .contact-container .contact-form-slider-container .slider-container .controls-container .send p");
    e.text("Sending"), e.addClass("blink")
}

function hideSendingMessage() {
    var e = $(".special-popup .popup-content .contact-container .contact-form-slider-container .slider-container .controls-container .send p");
    e.removeClass("blink"), e.text("Send")
}

function initSliderWork() {
    var e, t, n = $(".work-slider-wrapper .slider-container"),
        i = n.find(".slide"),
        r = n.find(".slide.current"),
        o = $(i[mod(r.index() - 1, i.length)]),
        a = $(i[mod(r.index() + 1, i.length)]);
    i.attr("style", ""), $(window).innerWidth() > 800 ? (e = "-10%", t = "110%") : $(window).innerWidth() <= 800 && $(window).innerWidth() > 500 ? (e = "-30%", t = "130%") : (e = "-35%", t = "135%"), o.css({
        left: e,
        opacity: "1"
    }), a.css({
        left: t,
        opacity: "1"
    });
    var s = $(".work-slider-wrapper .numbers-container .current-number"),
        c = $(".work-slider-wrapper .numbers-container .total-number");
    s.text(r.index() + 1), c.text(i.length)
}

function showWorkSlider() {
    $(".work-slider-wrapper").css("display", "block")
}

function hideWorkSlider() {
    $(".work-slider-wrapper").css("display", "none")
}

function workNextSlide() {
    if (!workSlideMove && !inTransition) {
        workSlideMove = !0;
        var e, t, n, i, r, o, a = $(".work-slider-wrapper .slider-container"),
            s = a.find(".slide"),
            c = a.find(".slide.current"),
            l = $(s[mod(c.index() - 1, s.length)]),
            u = $(s[mod(c.index() + 1, s.length)]),
            h = $(s[mod(c.index() + 2, s.length)]),
            p = $(".work-slider-wrapper .numbers-container .current-number"),
            d = 1,
            f = Power2.easeInOut;
        o = u.index() == s.length ? 0 : 2 * u.index(), $(".section-home .navigate-single-button-container").attr("data-work-index", o), fadeOutMainTitle();
        var m = u.find(".slider-main-title").text();
        setTimeout(function() {
            changeMainTitle(m), fadeInMainTitle()
        }, 500), setTimeout(function() {
            workSlideMove = !1
        }, 1100), $(window).innerWidth() > 800 ? (e = "-70%", t = "-10%", n = "50%", i = "110%", r = "170%") : $(window).innerWidth() <= 800 && $(window).innerWidth() > 500 ? (e = "-110%", t = "-30%", n = "50%", i = "130%", r = "210%") : (e = "-115%", t = "-35%", n = "50%", i = "135%", r = "215%"), TweenLite.to(h, 0, {
            left: r,
            opacity: 1,
            force3D: !1,
            ease: f
        }), TweenLite.to(l, d, {
            left: e,
            force3D: !1,
            ease: f
        }), TweenLite.to(c, d, {
            left: t,
            force3D: !1,
            ease: f
        }), TweenLite.to(u, d, {
            left: n,
            force3D: !1,
            ease: f
        }), TweenLite.to(h, d, {
            left: i,
            force3D: !1,
            ease: f,
            onComplete: function() {
                s.removeClass("current"), u.addClass("current"), p.text(mod(c.index() + 1, s.length) + 1);
                var e = u.attr("data-name");
                $(".navigate-single-button-container").attr("data-open-popup", e)
            }
        })
    }
}

function workPrevSlide() {
    if (!workSlideMove && !inTransition) {
        workSlideMove = !0;
        var e, t, n, i, r, o, a = $(".work-slider-wrapper .slider-container"),
            s = a.find(".slide"),
            c = a.find(".slide.current"),
            l = $(s[mod(c.index() - 1, s.length)]),
            u = $(s[mod(c.index() - 2, s.length)]),
            h = $(s[mod(c.index() + 1, s.length)]),
            p = $(".work-slider-wrapper .numbers-container .current-number"),
            d = 1,
            f = Power2.easeInOut;
        o = l.index() < 0 ? s.length - 1 : 2 * l.index(), $(".section-home .navigate-single-button-container").attr("data-work-index", o), fadeOutMainTitle();
        var m = l.find(".slider-main-title").text();
        setTimeout(function() {
            changeMainTitle(m), fadeInMainTitle()
        }, 500), setTimeout(function() {
            workSlideMove = !1
        }, 1100), $(window).innerWidth() > 800 ? (e = "-70%", t = "-10%", n = "50%", i = "110%", r = "170%") : $(window).innerWidth() <= 800 && $(window).innerWidth() > 500 ? (e = "-110%", t = "-30%", n = "50%", i = "130%", r = "210%") : (e = "-115%", t = "-35%", n = "50%", i = "135%", r = "215%"), TweenLite.to(u, 0, {
            left: e,
            opacity: 1
        }), TweenLite.to(l, 0, {
            left: t,
            opacity: 1
        }), TweenLite.to(c, 0, {
            left: n,
            opacity: 1
        }), TweenLite.to(h, 0, {
            left: i,
            opacity: 1
        }), TweenLite.to(u, d, {
            left: t,
            force3D: !1,
            ease: f
        }), TweenLite.to(l, d, {
            left: n,
            force3D: !1,
            ease: f
        }), TweenLite.to(c, d, {
            left: i,
            force3D: !1,
            ease: f
        }), TweenLite.to(h, d, {
            left: r,
            force3D: !1,
            ease: f,
            onComplete: function() {
                s.removeClass("current"), l.addClass("current"), p.text(mod(c.index() - 1, s.length) + 1);
                var e = l.attr("data-name");
                $(".navigate-single-button-container").attr("data-open-popup", e)
            }
        })
    }
}

function initConfeti() {
    for (var e = 0; 100 > e; e++) createConfeti(e)
}

function createConfeti(e) {
    var t, n = 20 * Math.random(),
        i = .4 * n,
        r = Math.ceil(6 * Math.random());
    switch (r) {
        case 1:
            t = "yellow";
            break;
        case 2:
            t = "blue";
            break;
        case 3:
            t = "green";
            break;
        case 4:
            t = "purple";
            break;
        case 5:
            t = "gray";
            break;
        default:
            t = "red"
    }
    $('<div class="confetti-' + e + " " + t + '"></div>').css({
        width: n + "px",
        height: i + "px",
        top: 20 * -Math.random() + "%",
        left: 100 * Math.random() + "%",
        opacity: 1,
        transform: "rotate(" + 360 * Math.random() + "deg)"
    }).appendTo(".confetti-wrapper"), dropConfetti(e)
}

function dropConfetti(e) {
    $(".confetti-" + e).animate({
        top: "100%",
        left: "+=" + 15 * Math.random() + "%"
    }, 2e3 * Math.random() + 2e3, function() {
        resetConfetti(e)
    })
}

function resetConfetti(e) {
    $(".confetti-" + e).animate({
        top: 20 * -Math.random() + "%",
        left: "-=" + 15 * Math.random() + "%"
    }, 0, function() {
        dropConfetti(e)
    })
}

function destroyConfetti() {
    $(".confetti-wrapper").empty()
}

function changeMainTitle(e, t) {
    void 0 != t && t ? "home" == $currentCapsule.attr("data-name") && doBoringText && $(".main-title-container p").text(e) : $(".main-title-container p").text(e)
}

function changeColorMainTitle(e) {
    $(".main-title-container p").removeClass("font-black font-white"), $(".main-title-container p").addClass(e)
}

function changeMainTitleWithAnimation(e) {
    void 0 == e && (e = !1), e ? (fadeOutMainTitle(e), fadeInMainTitle(e)) : (fadeOutMainTitle(), setTimeout(function() {
        fadeInMainTitle()
    }, 600))
}

function fadeOutMainTitle(e) {
    void 0 == e && (e = !1);
    var t;
    t = e ? 0 : .5, TweenMax.to($(".main-title-container").find("p"), t, {
        opacity: 0,
        y: 30
    })
}

function fadeInMainTitle(e) {
    void 0 == e && (e = !1);
    var t;
    t = e ? 0 : .5, TweenMax.to($(".main-title-container").find("p"), t, {
        opacity: 1,
        y: 0
    })
}

function createTagEvent(e, t) {
    void 0 == t && (t = {}), t.event = String(e)
}

function createPopupTagEvent(e) {
    createTagEvent("openPopup", {
        popupName: String(e)
    })
}

function createCapsuleTagEvent(e) {
    createTagEvent("openCapsule", {
        capsuleName: String(e)
    })
}

function checkCookies() {
    var e = "; " + document.cookie,
        t = e.split("; visited="),
        n = !1;
    return 2 == t.length ? $(".cookies-container").css("display", "none") : (document.cookie = "visited=true;expires=" + new Date((new Date).getTime() + 864e9).toGMTString() + ";path=/", n = !0), n
}

function changeRandomTheme() {
    var e = getCurrentTheme();
    0 == possibleThemes.length && (possibleThemes = THEMES.slice(0), possibleThemes.splice(possibleThemes.indexOf(e), 1));
    do var t = Math.floor(Math.random() * possibleThemes.length); while (e == possibleThemes[t]);
    e = possibleThemes.splice(t, 1), changeTheme(e[0]);
    var n = .8;
    $(".bottom-bar .color-container .color-text").text("Ta-da!"), TweenLite.set(".bottom-bar .color-container .color-text", {
        y: 0,
        opacity: 0
    }), TweenLite.to(".bottom-bar .color-container .color-text", 1.2 * n, {
        y: -30,
        opacity: 1,
        ease: Power0.easeNone
    }), TweenLite.to(".bottom-bar .color-container .color-text", 2 * n, {
        y: -60,
        opacity: 0,
        ease: Power2.easeOut,
        delay: 1.2 * n
    })
}

function changeTheme(e) {
    document.cookie = "custom-theme=" + e, $("body").addClass("changing-theme"), $("body").removeClass(function() {
        return (this.className.match(/(theme-[\w-]*)/g) || []).join(" ")
    }), "default" == e ? $("body").removeClass("custom-theme") : ($("body").addClass("custom-theme"), $("body").addClass("theme-" + e)), putDefaultLights(), updateBrowserTheme(), updateColorLineMouseConstrain(), $("body").removeClass("changing-theme")
}

function getCurrentTheme() {
    var e = document.body.className.match(/(theme-.*)/g) || [];
    return 0 == e.length ? "default" : e[0].replace("theme-", "")
}

function animateColorCircle() {
    tweenActionWand.isActive() || (clearInterval(intervalWand), tweenActionWand.play(0))
}

function animateRotateGems() {
    var e = $(".gems-wrapper .gem"),
        t = 0;
    e.each(function(e, n) {
        TweenMax.set(n, {
            rotationY: 0
        }), TweenMax.to(n, .5, {
            ease: Power2.easeOut,
            rotationY: 360,
            force3D: !1,
            delay: t
        }), t += .2
    })
}

function changeBoringText() {
    if ("home" == $currentCapsule.attr("data-name")) {
        var e = [],
            t = 0;
        0 == nextBoringText ? e = ["Эй", "ты ", "здесь"] : 1 == nextBoringText ? e = ["Нажми", "на", "меню", "сверху"] : 2 == nextBoringText ? e = ["не", "скучай", "чувак"] : 3 == nextBoringText ? e = ["я", "щас", "усну", "если", "так", "все", "будет", ":-)))"] : 4 == nextBoringText ? e = ["что", "же ", "такое", "это всё"] : 5 == nextBoringText ? e = ["слушай", "а", "ты", "не", "робот?"] : 6 == nextBoringText ? e = ["смотри", "меня", "всего", "я", "крут", "и", "скромн"] : (e = ["What", "is", "the", "meaning", "of", "life?", "Â·Â·Â·"], nextBoringText = -1), t = e.length + 2, t > 0 && (animateMainTitleWithText(e), nextBoringText++, setTimeout(changeBoringText, 1e3 * t))
    }
}

function animateMainTitleWithText(e) {
    for (var t = 0; t < e.length; t++) "home" == $currentCapsule.attr("data-name") && setTimeout(changeMainTitle.bind(null, e[t], !0), 750 * t)
}

function stopBoringText() {
    $("js-open-popup").unbind("click", stopBoringText), "home" == $currentCapsule.attr("data-name") && (changeMainTitle($($(".capsules-container .capsule.showing")).find(".capsule-main-title").text()), doBoringText = !1)
}

function sendNewsletter() {
    sending_form || (sending_form = !0, jQuery.ajax({
        type: "POST",
        url: "",
        data: {
            email: $(".dinamic-popup .input-newsletter").val()
        },
        success: function(e) {
            e = JSON.parse(e), $(".dinamic-popup .footer-popup .input-container .input-message p").text(e.message), "ok" == e.status && (createTagEvent("newsletterRegister"), $(".dinamic-popup .input-newsletter").val("")), TweenMax.set(".dinamic-popup .footer-popup .input-container .input-message", {
                y: 20,
                opacity: 0
            }), TweenMax.to(".dinamic-popup .footer-popup .input-container .input-message", .5, {
                y: 0,
                opacity: 1,
                onComplete: function() {}
            }), sending_form = !1
        }
    }))
}

function sendContactNewsletter() {
    sending_form || (sending_form = !0, $(".special-popup .send-screen-newsletter").css("pointer-events", "none"), jQuery.ajax({
        type: "POST",
        url: "",
        data: {
            email: lastEmailForm
        },
        success: function(e) {
            e = JSON.parse(e), "ok" == e.status && createTagEvent("newsletterRegister"), TweenMax.set(".special-popup .send-screen-ok-message", {
                y: 0,
                opacity: 0
            }), TweenMax.to(".special-popup .send-screen-newsletter", .5, {
                y: -20,
                opacity: 0,
                onComplete: function() {}
            }), TweenMax.to(".special-popup .send-screen-ok-message", .5, {
                y: -20,
                opacity: 1,
                onComplete: function() {}
            }), sending_form = !1
        }
    }))
}
var _createClass = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n), i && e(t, i), t
        }
    }(),
    capsuleAnimationFinished, durationOfVideo, $currentCapsule, durationOfActionSound, regularAudio, actionAudio, hoverAudio, capsuleLoadedAudio, soundsMuted, audioActive, audioContext, audioBuffers, audioPlaying, gainNode, soundsMutedByContact, inTransition, $transitionCurtain, overlay, curtainTransitionDuration, curtainPointsDelayMax, curtainDelayPerPath, SCROLLINC, goingToScrollTop, smoothScrolling, scrollEnabled = !0,
    enableParallax, iScrollPos = 0,
    bottomOfButton, currentFormSlide, tweenPress, pressedHold, soundCapsulePlayed, canResizeCanvas, firstPushState, doPushState, currentState, ease = {
        exponentialIn: function(e) {
            return 0 == e ? e : Math.pow(2, 10 * (e - 1))
        },
        exponentialOut: function(e) {
            return 1 == e ? e : 1 - Math.pow(2, -10 * e)
        },
        exponentialInOut: function(e) {
            return 0 == e || 1 == e ? e : .5 > e ? .5 * Math.pow(2, 20 * e - 10) : -.5 * Math.pow(2, 10 - 20 * e) + 1
        },
        sineOut: function(e) {
            var t = 1.5707963267948966;
            return Math.sin(e * t)
        },
        circularInOut: function(e) {
            return .5 > e ? .5 * (1 - Math.sqrt(1 - 4 * e * e)) : .5 * (Math.sqrt((3 - 2 * e) * (2 * e - 1)) + 1)
        },
        cubicIn: function(e) {
            return e * e * e
        },
        cubicOut: function(e) {
            var t = e - 1;
            return t * t * t + 1
        },
        cubicInOut: function(e) {
            return .5 > e ? 4 * e * e * e : .5 * Math.pow(2 * e - 2, 3) + 1
        },
        quadraticOut: function(e) {
            return -e * (e - 2)
        },
        quarticOut: function(e) {
            return Math.pow(e - 1, 3) * (1 - e) + 1
        }
    },
    workSlideMove, preloadFinished, canvasImages, canvasImageSrc, asociatedArrayOfImages, currentCanvas, lastHoverAudio, preloadImageAudio, closeGeneralPopupInstantly = !1,
    form_reName = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/,
    form_reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    form_rePhone = /^\+?[0-9,' ',-]{0,16}$/,
    sending_form = !1,
    sent_form = !1,
    RE_EMAIL = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    animationOfPopupCredits, tweenAnimateColorCircle, tweenRotateColorCircle, tweenAnimateMenuCircle, tweenWaitWand, tweenActionWand, tweenWaitGems, arrowRight, intervalMenu, intervalGems;
$(window).on("load", function() {
    load_home && home_docLoad(), load_home = !0, $(".ruya-lazy").length > 0 && $(".ruya-lazy").each(function(e, t) {
        $(t).attr("src", $(t).attr("data-src"))
    })
}), $(document).ready(home_docReady);
var changingColorInterval, tweenMaxTransition;
window.onpopstate = function(e) {
    doPushState = !1;
    var t = !1;
    "generalPopup" == currentState.type ? ($(".dinamic-popup").hasClass("active") && $(".dinamic-popup .popup-content .close-button").click(), "generalPopup" == e.state.type && (t = !0)) : "specialPopup" == currentState.type ? ($(".special-popup").hasClass("active") && $(".special-popup .popup-content .close-button").click(), "specialPopup" == e.state.type && (t = !0)) : t = !0, t ? "capsule" == e.state.type ? (currentState = e.state, changeCapsuleByName(e.state.capsule_name)) : ("generalPopup" == e.state.type || "specialPopup" == e.state.type) && (currentState.timeStamp < e.state.timeStamp ? window.history.forward() : window.history.back()) : currentState = e.state
};
var hoverAnimation = !1,
    SvgCurtain = function() {
        function e(t) {
            _classCallCheck(this, e), this.elm = t, this.path = t.querySelectorAll("path"), this.timeStart = Date.now(), this.delayPointsArray = [], this.isOpened = !1
        }
        return _createClass(e, [{
            key: "toggle",
            value: function(e) {
                void 0 == e && (e = !1), curtainTransitionDuration = e ? 300 : 600, $("path.capa.capa1,path.capa.capa2").css("opacity", 1), inTransition = !0;
                for (var t = 4 * Math.random() + 6, n = 0; n < curtainPoints; n++) {
                    var i = n / (curtainPoints - 1) * Math.PI;
                    this.delayPointsArray[n] = (Math.sin(-i) + Math.sin(-i * t) + 2) / 4 * curtainPointsDelayMax
                }
                this.isOpened === !1 ? this.open() : this.close()
            }
        }, {
            key: "open",
            value: function() {
                this.isOpened = !0, this.elm.classList.add("is-opened"), this.timeStart = Date.now(), this.renderLoop()
            }
        }, {
            key: "close",
            value: function() {
                this.isOpened = !1, this.elm.classList.remove("is-opened"), this.timeStart = Date.now(), this.renderLoop()
            }
        }, {
            key: "updatePath",
            value: function(e) {
                for (var t = [], n = 0; n < curtainPoints + 1; n++) t[n] = 100 * ease.cubicInOut(Math.min(Math.max(e - this.delayPointsArray[n], 0) / curtainTransitionDuration, 1));
                var i = "";
                i += this.isOpened ? "M 0 0 V " + t[0] + " " : "M 0 " + t[0] + " ";
                for (var n = 0; n < curtainPoints - 1; n++) {
                    var r = (n + 1) / (curtainPoints - 1) * 100,
                        o = r - 1 / (curtainPoints - 1) * 100 / 2;
                    i += "C " + o + " " + t[n] + " " + o + " " + t[n + 1] + " " + r + " " + t[n + 1] + " "
                }
                return i += this.isOpened ? "V 0 H 0" : "V 100 H 0"
            }
        }, {
            key: "render",
            value: function() {
                if (this.isOpened)
                    for (var e = 0; e < this.path.length; e++) this.path[e].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + curtainDelayPerPath * e)));
                else {
                    $("path.capa.capa1,path.capa.capa2").css("opacity", 0);
                    for (var e = 0; e < this.path.length; e++) this.path[e].setAttribute("d", this.updatePath(Date.now() - (this.timeStart + curtainDelayPerPath * (this.path.length - e - 1))))
                }
            }
        }, {
            key: "renderLoop",
            value: function() {
                var e = this;
                this.render(), Date.now() - this.timeStart < curtainTransitionDuration + curtainDelayPerPath * (this.path.length - 1) + curtainPointsDelayMax ? requestAnimationFrame(function() {
                    e.renderLoop()
                }) : inTransition = !1
            }
        }]), e
    }(),
    textureFloatingObjectpath, heightFloatingObject, widthFloatingObject, scrollForObjects, oldTimeGravity = 0,
    lastY = 0,
    animatingSlide = !1,
    contactObject = {
        company: ["name", "company", "company-name", "email", "project-brief"],
        client: ["name", "company", "you-are", "email", "project-brief"],
        fan: ["name", "company", "you-are", "email", "open-your-heart"],
        hater: ["name", "company", "you-are", "open-your-heart"]
    },
    currentForm = "client",
    currentStep = 0,
    lastEmailForm = "",
    moveTextIndexWork = 2,
    possibleThemes = [],
    nextBoringText = 0,
    lastBoringTimeOut = null,
    doBoringText = !0;

! function(e) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var t;
        t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, t.Matter = e()
    }
}(function() {
    return function e(t, n, i) {
        function r(a, s) {
            if (!n[a]) {
                if (!t[a]) {
                    var c = "function" == typeof require && require;
                    if (!s && c) return c(a, !0);
                    if (o) return o(a, !0);
                    var l = new Error("Cannot find module '" + a + "'");
                    throw l.code = "MODULE_NOT_FOUND", l
                }
                var u = n[a] = {
                    exports: {}
                };
                t[a][0].call(u.exports, function(e) {
                    var n = t[a][1][e];
                    return r(n ? n : e)
                }, u, u.exports, e, t, n, i)
            }
            return n[a].exports
        }
        for (var o = "function" == typeof require && require, a = 0; a < i.length; a++) r(i[a]);
        return r
    }({
        1: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../geometry/Vertices"),
                r = e("../geometry/Vector"),
                o = e("../core/Sleeping"),
                a = (e("../render/Render"), e("../core/Common")),
                s = e("../geometry/Bounds"),
                c = e("../geometry/Axes");
            ! function() {
                n._inertiaScale = 4, n._nextCollidingGroupId = 1, n._nextNonCollidingGroupId = -1, n._nextCategory = 1, n.create = function(t) {
                    var n = {
                            id: a.nextId(),
                            type: "body",
                            label: "Body",
                            parts: [],
                            plugin: {},
                            angle: 0,
                            vertices: i.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),
                            position: {
                                x: 0,
                                y: 0
                            },
                            force: {
                                x: 0,
                                y: 0
                            },
                            torque: 0,
                            positionImpulse: {
                                x: 0,
                                y: 0
                            },
                            constraintImpulse: {
                                x: 0,
                                y: 0,
                                angle: 0
                            },
                            totalContacts: 0,
                            speed: 0,
                            angularSpeed: 0,
                            velocity: {
                                x: 0,
                                y: 0
                            },
                            angularVelocity: 0,
                            isSensor: !1,
                            isStatic: !1,
                            isSleeping: !1,
                            motion: 0,
                            sleepThreshold: 60,
                            density: .001,
                            restitution: 0,
                            friction: .1,
                            frictionStatic: .5,
                            frictionAir: .01,
                            collisionFilter: {
                                category: 1,
                                mask: 4294967295,
                                group: 0
                            },
                            slop: .05,
                            timeScale: 1,
                            render: {
                                visible: !0,
                                opacity: 1,
                                sprite: {
                                    xScale: 1,
                                    yScale: 1,
                                    xOffset: 0,
                                    yOffset: 0
                                },
                                lineWidth: 0
                            }
                        },
                        r = a.extend(n, t);
                    return e(r, t), r
                }, n.nextGroup = function(e) {
                    return e ? n._nextNonCollidingGroupId-- : n._nextCollidingGroupId++
                }, n.nextCategory = function() {
                    return n._nextCategory = n._nextCategory << 1, n._nextCategory
                };
                var e = function(e, t) {
                    t = t || {}, n.set(e, {
                        bounds: e.bounds || s.create(e.vertices),
                        positionPrev: e.positionPrev || r.clone(e.position),
                        anglePrev: e.anglePrev || e.angle,
                        vertices: e.vertices,
                        parts: e.parts || [e],
                        isStatic: e.isStatic,
                        isSleeping: e.isSleeping,
                        parent: e.parent || e
                    }), i.rotate(e.vertices, e.angle, e.position), c.rotate(e.axes, e.angle), s.update(e.bounds, e.vertices, e.velocity), n.set(e, {
                        axes: t.axes || e.axes,
                        area: t.area || e.area,
                        mass: t.mass || e.mass,
                        inertia: t.inertia || e.inertia
                    });
                    var o = e.isStatic ? "#2e2b44" : a.choose(["#006BA6", "#0496FF", "#FFBC42", "#D81159", "#8F2D56"]),
                        l = a.shadeColor(o, -20);
                    e.render.fillStyle = e.render.fillStyle || o, e.render.strokeStyle = e.render.strokeStyle || l, e.render.sprite.xOffset += -(e.bounds.min.x - e.position.x) / (e.bounds.max.x - e.bounds.min.x), e.render.sprite.yOffset += -(e.bounds.min.y - e.position.y) / (e.bounds.max.y - e.bounds.min.y)
                };
                n.set = function(e, t, i) {
                    var r;
                    "string" == typeof t && (r = t, t = {}, t[r] = i);
                    for (r in t)
                        if (i = t[r], t.hasOwnProperty(r)) switch (r) {
                            case "isStatic":
                                n.setStatic(e, i);
                                break;
                            case "isSleeping":
                                o.set(e, i);
                                break;
                            case "mass":
                                n.setMass(e, i);
                                break;
                            case "density":
                                n.setDensity(e, i);
                                break;
                            case "inertia":
                                n.setInertia(e, i);
                                break;
                            case "vertices":
                                n.setVertices(e, i);
                                break;
                            case "position":
                                n.setPosition(e, i);
                                break;
                            case "angle":
                                n.setAngle(e, i);
                                break;
                            case "velocity":
                                n.setVelocity(e, i);
                                break;
                            case "angularVelocity":
                                n.setAngularVelocity(e, i);
                                break;
                            case "parts":
                                n.setParts(e, i);
                                break;
                            default:
                                e[r] = i
                        }
                }, n.setStatic = function(e, t) {
                    for (var n = 0; n < e.parts.length; n++) {
                        var i = e.parts[n];
                        i.isStatic = t, t ? (i._original = {
                            restitution: i.restitution,
                            friction: i.friction,
                            mass: i.mass,
                            inertia: i.inertia,
                            density: i.density,
                            inverseMass: i.inverseMass,
                            inverseInertia: i.inverseInertia
                        }, i.restitution = 0, i.friction = 1, i.mass = i.inertia = i.density = 1 / 0, i.inverseMass = i.inverseInertia = 0, i.positionPrev.x = i.position.x, i.positionPrev.y = i.position.y, i.anglePrev = i.angle, i.angularVelocity = 0, i.speed = 0, i.angularSpeed = 0, i.motion = 0) : i._original && (i.restitution = i._original.restitution, i.friction = i._original.friction, i.mass = i._original.mass, i.inertia = i._original.inertia, i.density = i._original.density, i.inverseMass = i._original.inverseMass, i.inverseInertia = i._original.inverseInertia, delete i._original)
                    }
                }, n.setMass = function(e, t) {
                    e.mass = t, e.inverseMass = 1 / e.mass, e.density = e.mass / e.area
                }, n.setDensity = function(e, t) {
                    n.setMass(e, t * e.area), e.density = t
                }, n.setInertia = function(e, t) {
                    e.inertia = t, e.inverseInertia = 1 / e.inertia
                }, n.setVertices = function(e, t) {
                    t[0].body === e ? e.vertices = t : e.vertices = i.create(t, e), e.axes = c.fromVertices(e.vertices), e.area = i.area(e.vertices), n.setMass(e, e.density * e.area);
                    var r = i.centre(e.vertices);
                    i.translate(e.vertices, r, -1), n.setInertia(e, n._inertiaScale * i.inertia(e.vertices, e.mass)), i.translate(e.vertices, e.position), s.update(e.bounds, e.vertices, e.velocity)
                }, n.setParts = function(e, r, o) {
                    var a;
                    for (r = r.slice(0), e.parts.length = 0, e.parts.push(e), e.parent = e, a = 0; a < r.length; a++) {
                        var s = r[a];
                        s !== e && (s.parent = e, e.parts.push(s))
                    }
                    if (1 !== e.parts.length) {
                        if (o = "undefined" != typeof o ? o : !0) {
                            var c = [];
                            for (a = 0; a < r.length; a++) c = c.concat(r[a].vertices);
                            i.clockwiseSort(c);
                            var l = i.hull(c),
                                u = i.centre(l);
                            n.setVertices(e, l), i.translate(e.vertices, u)
                        }
                        var h = t(e);
                        e.area = h.area, e.parent = e, e.position.x = h.centre.x, e.position.y = h.centre.y, e.positionPrev.x = h.centre.x, e.positionPrev.y = h.centre.y, n.setMass(e, h.mass), n.setInertia(e, h.inertia), n.setPosition(e, h.centre)
                    }
                }, n.setPosition = function(e, t) {
                    var n = r.sub(t, e.position);
                    e.positionPrev.x += n.x, e.positionPrev.y += n.y;
                    for (var o = 0; o < e.parts.length; o++) {
                        var a = e.parts[o];
                        a.position.x += n.x, a.position.y += n.y, i.translate(a.vertices, n), s.update(a.bounds, a.vertices, e.velocity)
                    }
                }, n.setAngle = function(e, t) {
                    var n = t - e.angle;
                    e.anglePrev += n;
                    for (var o = 0; o < e.parts.length; o++) {
                        var a = e.parts[o];
                        a.angle += n, i.rotate(a.vertices, n, e.position), c.rotate(a.axes, n), s.update(a.bounds, a.vertices, e.velocity), o > 0 && r.rotateAbout(a.position, n, e.position, a.position)
                    }
                }, n.setVelocity = function(e, t) {
                    e.positionPrev.x = e.position.x - t.x, e.positionPrev.y = e.position.y - t.y, e.velocity.x = t.x, e.velocity.y = t.y, e.speed = r.magnitude(e.velocity)
                }, n.setAngularVelocity = function(e, t) {
                    e.anglePrev = e.angle - t, e.angularVelocity = t, e.angularSpeed = Math.abs(e.angularVelocity)
                }, n.translate = function(e, t) {
                    n.setPosition(e, r.add(e.position, t))
                }, n.rotate = function(e, t) {
                    n.setAngle(e, e.angle + t)
                }, n.scale = function(e, r, o) {
                    for (var a = 0; a < e.parts.length; a++) {
                        var l = e.parts[a];
                        i.scale(l.vertices, r, o, e.position), l.axes = c.fromVertices(l.vertices), e.isStatic || (l.area = i.area(l.vertices), n.setMass(l, e.density * l.area), i.translate(l.vertices, {
                            x: -l.position.x,
                            y: -l.position.y
                        }), n.setInertia(l, i.inertia(l.vertices, l.mass)), i.translate(l.vertices, {
                            x: l.position.x,
                            y: l.position.y
                        })), s.update(l.bounds, l.vertices, e.velocity)
                    }
                    if (e.circleRadius && (r === o ? e.circleRadius *= r : e.circleRadius = null), !e.isStatic) {
                        var u = t(e);
                        e.area = u.area, n.setMass(e, u.mass), n.setInertia(e, u.inertia)
                    }
                }, n.update = function(e, t, n, o) {
                    var a = Math.pow(t * n * e.timeScale, 2),
                        l = 1 - e.frictionAir * n * e.timeScale,
                        u = e.position.x - e.positionPrev.x,
                        h = e.position.y - e.positionPrev.y;
                    e.velocity.x = u * l * o + e.force.x / e.mass * a, e.velocity.y = h * l * o + e.force.y / e.mass * a, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.position.x += e.velocity.x, e.position.y += e.velocity.y, e.angularVelocity = (e.angle - e.anglePrev) * l * o + e.torque / e.inertia * a, e.anglePrev = e.angle, e.angle += e.angularVelocity, e.speed = r.magnitude(e.velocity), e.angularSpeed = Math.abs(e.angularVelocity);
                    for (var p = 0; p < e.parts.length; p++) {
                        var d = e.parts[p];
                        i.translate(d.vertices, e.velocity), p > 0 && (d.position.x += e.velocity.x, d.position.y += e.velocity.y), 0 !== e.angularVelocity && (i.rotate(d.vertices, e.angularVelocity, e.position), c.rotate(d.axes, e.angularVelocity), p > 0 && r.rotateAbout(d.position, e.angularVelocity, e.position, d.position)), s.update(d.bounds, d.vertices, e.velocity)
                    }
                }, n.applyForce = function(e, t, n) {
                    e.force.x += n.x, e.force.y += n.y;
                    var i = {
                        x: t.x - e.position.x,
                        y: t.y - e.position.y
                    };
                    e.torque += i.x * n.y - i.y * n.x
                };
                var t = function(e) {
                    for (var t = {
                            mass: 0,
                            area: 0,
                            inertia: 0,
                            centre: {
                                x: 0,
                                y: 0
                            }
                        }, n = 1 === e.parts.length ? 0 : 1; n < e.parts.length; n++) {
                        var i = e.parts[n];
                        t.mass += i.mass, t.area += i.area, t.inertia += i.inertia, t.centre = r.add(t.centre, r.mult(i.position, i.mass !== 1 / 0 ? i.mass : 1))
                    }
                    return t.centre = r.div(t.centre, t.mass !== 1 / 0 ? t.mass : e.parts.length), t
                }
            }()
        }, {
            "../core/Common": 14,
            "../core/Sleeping": 22,
            "../geometry/Axes": 25,
            "../geometry/Bounds": 26,
            "../geometry/Vector": 28,
            "../geometry/Vertices": 29,
            "../render/Render": 31
        }],
        2: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../core/Events"),
                r = e("../core/Common"),
                o = e("./Body");
            ! function() {
                n.create = function(e) {
                    return r.extend({
                        id: r.nextId(),
                        type: "composite",
                        parent: null,
                        isModified: !1,
                        bodies: [],
                        constraints: [],
                        composites: [],
                        label: "Composite",
                        plugin: {}
                    }, e)
                }, n.setModified = function(e, t, i, r) {
                    if (e.isModified = t, i && e.parent && n.setModified(e.parent, t, i, r), r)
                        for (var o = 0; o < e.composites.length; o++) {
                            var a = e.composites[o];
                            n.setModified(a, t, i, r)
                        }
                }, n.add = function(e, t) {
                    var o = [].concat(t);
                    i.trigger(e, "beforeAdd", {
                        object: t
                    });
                    for (var a = 0; a < o.length; a++) {
                        var s = o[a];
                        switch (s.type) {
                            case "body":
                                if (s.parent !== s) {
                                    r.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");
                                    break
                                }
                                n.addBody(e, s);
                                break;
                            case "constraint":
                                n.addConstraint(e, s);
                                break;
                            case "composite":
                                n.addComposite(e, s);
                                break;
                            case "mouseConstraint":
                                n.addConstraint(e, s.constraint)
                        }
                    }
                    return i.trigger(e, "afterAdd", {
                        object: t
                    }), e
                }, n.remove = function(e, t, r) {
                    var o = [].concat(t);
                    i.trigger(e, "beforeRemove", {
                        object: t
                    });
                    for (var a = 0; a < o.length; a++) {
                        var s = o[a];
                        switch (s.type) {
                            case "body":
                                n.removeBody(e, s, r);
                                break;
                            case "constraint":
                                n.removeConstraint(e, s, r);
                                break;
                            case "composite":
                                n.removeComposite(e, s, r);
                                break;
                            case "mouseConstraint":
                                n.removeConstraint(e, s.constraint)
                        }
                    }
                    return i.trigger(e, "afterRemove", {
                        object: t
                    }), e
                }, n.addComposite = function(e, t) {
                    return e.composites.push(t), t.parent = e, n.setModified(e, !0, !0, !1), e
                }, n.removeComposite = function(e, t, i) {
                    var o = r.indexOf(e.composites, t);
                    if (-1 !== o && (n.removeCompositeAt(e, o), n.setModified(e, !0, !0, !1)), i)
                        for (var a = 0; a < e.composites.length; a++) n.removeComposite(e.composites[a], t, !0);
                    return e
                }, n.removeCompositeAt = function(e, t) {
                    return e.composites.splice(t, 1), n.setModified(e, !0, !0, !1), e
                }, n.addBody = function(e, t) {
                    return e.bodies.push(t), n.setModified(e, !0, !0, !1), e
                }, n.removeBody = function(e, t, i) {
                    var o = r.indexOf(e.bodies, t);
                    if (-1 !== o && (n.removeBodyAt(e, o), n.setModified(e, !0, !0, !1)), i)
                        for (var a = 0; a < e.composites.length; a++) n.removeBody(e.composites[a], t, !0);
                    return e
                }, n.removeBodyAt = function(e, t) {
                    return e.bodies.splice(t, 1), n.setModified(e, !0, !0, !1), e
                }, n.addConstraint = function(e, t) {
                    return e.constraints.push(t), n.setModified(e, !0, !0, !1), e
                }, n.removeConstraint = function(e, t, i) {
                    var o = r.indexOf(e.constraints, t);
                    if (-1 !== o && n.removeConstraintAt(e, o), i)
                        for (var a = 0; a < e.composites.length; a++) n.removeConstraint(e.composites[a], t, !0);
                    return e
                }, n.removeConstraintAt = function(e, t) {
                    return e.constraints.splice(t, 1), n.setModified(e, !0, !0, !1), e
                }, n.clear = function(e, t, i) {
                    if (i)
                        for (var r = 0; r < e.composites.length; r++) n.clear(e.composites[r], t, !0);
                    return t ? e.bodies = e.bodies.filter(function(e) {
                        return e.isStatic
                    }) : e.bodies.length = 0, e.constraints.length = 0, e.composites.length = 0, n.setModified(e, !0, !0, !1), e
                }, n.allBodies = function(e) {
                    for (var t = [].concat(e.bodies), i = 0; i < e.composites.length; i++) t = t.concat(n.allBodies(e.composites[i]));
                    return t
                }, n.allConstraints = function(e) {
                    for (var t = [].concat(e.constraints), i = 0; i < e.composites.length; i++) t = t.concat(n.allConstraints(e.composites[i]));
                    return t
                }, n.allComposites = function(e) {
                    for (var t = [].concat(e.composites), i = 0; i < e.composites.length; i++) t = t.concat(n.allComposites(e.composites[i]));
                    return t
                }, n.get = function(e, t, i) {
                    var r, o;
                    switch (i) {
                        case "body":
                            r = n.allBodies(e);
                            break;
                        case "constraint":
                            r = n.allConstraints(e);
                            break;
                        case "composite":
                            r = n.allComposites(e).concat(e)
                    }
                    return r ? (o = r.filter(function(e) {
                        return e.id.toString() === t.toString()
                    }), 0 === o.length ? null : o[0]) : null
                }, n.move = function(e, t, i) {
                    return n.remove(e, t), n.add(i, t), e
                }, n.rebase = function(e) {
                    for (var t = n.allBodies(e).concat(n.allConstraints(e)).concat(n.allComposites(e)), i = 0; i < t.length; i++) t[i].id = r.nextId();
                    return n.setModified(e, !0, !0, !1), e
                }, n.translate = function(e, t, i) {
                    for (var r = i ? n.allBodies(e) : e.bodies, a = 0; a < r.length; a++) o.translate(r[a], t);
                    return n.setModified(e, !0, !0, !1), e
                }, n.rotate = function(e, t, i, r) {
                    for (var a = Math.cos(t), s = Math.sin(t), c = r ? n.allBodies(e) : e.bodies, l = 0; l < c.length; l++) {
                        var u = c[l],
                            h = u.position.x - i.x,
                            p = u.position.y - i.y;
                        o.setPosition(u, {
                            x: i.x + (h * a - p * s),
                            y: i.y + (h * s + p * a)
                        }), o.rotate(u, t)
                    }
                    return n.setModified(e, !0, !0, !1), e
                }, n.scale = function(e, t, i, r, a) {
                    for (var s = a ? n.allBodies(e) : e.bodies, c = 0; c < s.length; c++) {
                        var l = s[c],
                            u = l.position.x - r.x,
                            h = l.position.y - r.y;
                        o.setPosition(l, {
                            x: r.x + u * t,
                            y: r.y + h * i
                        }), o.scale(l, t, i)
                    }
                    return n.setModified(e, !0, !0, !1), e
                }
            }()
        }, {
            "../core/Common": 14,
            "../core/Events": 16,
            "./Body": 1
        }],
        3: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("./Composite"),
                r = (e("../constraint/Constraint"), e("../core/Common"));
            ! function() {
                n.create = function(e) {
                    var t = i.create(),
                        n = {
                            label: "World",
                            gravity: {
                                x: 0,
                                y: 1,
                                scale: .001
                            },
                            bounds: {
                                min: {
                                    x: -(1 / 0),
                                    y: -(1 / 0)
                                },
                                max: {
                                    x: 1 / 0,
                                    y: 1 / 0
                                }
                            }
                        };
                    return r.extend(t, n, e)
                }
            }()
        }, {
            "../constraint/Constraint": 12,
            "../core/Common": 14,
            "./Composite": 2
        }],
        4: [function(e, t) {
            var n = {};
            t.exports = n,
                function() {
                    n.create = function(e) {
                        return {
                            id: n.id(e),
                            vertex: e,
                            normalImpulse: 0,
                            tangentImpulse: 0
                        }
                    }, n.id = function(e) {
                        return e.body.id + "_" + e.index
                    }
                }()
        }, {}],
        5: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("./SAT"),
                r = e("./Pair"),
                o = e("../geometry/Bounds");
            ! function() {
                n.collisions = function(e, t) {
                    for (var a = [], s = t.pairs.table, c = 0; c < e.length; c++) {
                        var l = e[c][0],
                            u = e[c][1];
                        if ((!l.isStatic && !l.isSleeping || !u.isStatic && !u.isSleeping) && n.canCollide(l.collisionFilter, u.collisionFilter) && o.overlaps(l.bounds, u.bounds))
                            for (var h = l.parts.length > 1 ? 1 : 0; h < l.parts.length; h++)
                                for (var p = l.parts[h], d = u.parts.length > 1 ? 1 : 0; d < u.parts.length; d++) {
                                    var f = u.parts[d];
                                    if (p === l && f === u || o.overlaps(p.bounds, f.bounds)) {
                                        var m, v = r.id(p, f),
                                            g = s[v];
                                        m = g && g.isActive ? g.collision : null;
                                        var y = i.collides(p, f, m);
                                        y.collided && a.push(y)
                                    }
                                }
                    }
                    return a
                }, n.canCollide = function(e, t) {
                    return e.group === t.group && 0 !== e.group ? e.group > 0 : 0 !== (e.mask & t.category) && 0 !== (t.mask & e.category)
                }
            }()
        }, {
            "../geometry/Bounds": 26,
            "./Pair": 7,
            "./SAT": 11
        }],
        6: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("./Pair"),
                r = e("./Detector"),
                o = e("../core/Common");
            ! function() {
                n.create = function(e) {
                    var t = {
                        controller: n,
                        detector: r.collisions,
                        buckets: {},
                        pairs: {},
                        pairsList: [],
                        bucketWidth: 48,
                        bucketHeight: 48
                    };
                    return o.extend(t, e)
                }, n.update = function(n, i, r, o) {
                    var a, p, d, f, m, v = r.world,
                        g = n.buckets,
                        y = !1;
                    for (a = 0; a < i.length; a++) {
                        var x = i[a];
                        if ((!x.isSleeping || o) && !(x.bounds.max.x < v.bounds.min.x || x.bounds.min.x > v.bounds.max.x || x.bounds.max.y < v.bounds.min.y || x.bounds.min.y > v.bounds.max.y)) {
                            var b = t(n, x);
                            if (!x.region || b.id !== x.region.id || o) {
                                (!x.region || o) && (x.region = b);
                                var w = e(b, x.region);
                                for (p = w.startCol; p <= w.endCol; p++)
                                    for (d = w.startRow; d <= w.endRow; d++) {
                                        m = s(p, d), f = g[m];
                                        var _ = p >= b.startCol && p <= b.endCol && d >= b.startRow && d <= b.endRow,
                                            M = p >= x.region.startCol && p <= x.region.endCol && d >= x.region.startRow && d <= x.region.endRow;
                                        !_ && M && M && f && u(n, f, x), (x.region === b || _ && !M || o) && (f || (f = c(g, m)), l(n, f, x))
                                    }
                                x.region = b, y = !0
                            }
                        }
                    }
                    y && (n.pairsList = h(n))
                }, n.clear = function(e) {
                    e.buckets = {}, e.pairs = {}, e.pairsList = []
                };
                var e = function(e, t) {
                        var n = Math.min(e.startCol, t.startCol),
                            i = Math.max(e.endCol, t.endCol),
                            r = Math.min(e.startRow, t.startRow),
                            o = Math.max(e.endRow, t.endRow);
                        return a(n, i, r, o)
                    },
                    t = function(e, t) {
                        var n = t.bounds,
                            i = Math.floor(n.min.x / e.bucketWidth),
                            r = Math.floor(n.max.x / e.bucketWidth),
                            o = Math.floor(n.min.y / e.bucketHeight),
                            s = Math.floor(n.max.y / e.bucketHeight);
                        return a(i, r, o, s)
                    },
                    a = function(e, t, n, i) {
                        return {
                            id: e + "," + t + "," + n + "," + i,
                            startCol: e,
                            endCol: t,
                            startRow: n,
                            endRow: i
                        }
                    },
                    s = function(e, t) {
                        return "C" + e + "R" + t
                    },
                    c = function(e, t) {
                        var n = e[t] = [];
                        return n
                    },
                    l = function(e, t, n) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            if (!(n.id === o.id || n.isStatic && o.isStatic)) {
                                var a = i.id(n, o),
                                    s = e.pairs[a];
                                s ? s[2] += 1 : e.pairs[a] = [n, o, 1]
                            }
                        }
                        t.push(n)
                    },
                    u = function(e, t, n) {
                        t.splice(o.indexOf(t, n), 1);
                        for (var r = 0; r < t.length; r++) {
                            var a = t[r],
                                s = i.id(n, a),
                                c = e.pairs[s];
                            c && (c[2] -= 1)
                        }
                    },
                    h = function(e) {
                        var t, n, i = [];
                        t = o.keys(e.pairs);
                        for (var r = 0; r < t.length; r++) n = e.pairs[t[r]], n[2] > 0 ? i.push(n) : delete e.pairs[t[r]];
                        return i
                    }
            }()
        }, {
            "../core/Common": 14,
            "./Detector": 5,
            "./Pair": 7
        }],
        7: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("./Contact");
            ! function() {
                n.create = function(e, t) {
                    var i = e.bodyA,
                        r = e.bodyB,
                        o = e.parentA,
                        a = e.parentB,
                        s = {
                            id: n.id(i, r),
                            bodyA: i,
                            bodyB: r,
                            contacts: {},
                            activeContacts: [],
                            separation: 0,
                            isActive: !0,
                            isSensor: i.isSensor || r.isSensor,
                            timeCreated: t,
                            timeUpdated: t,
                            inverseMass: o.inverseMass + a.inverseMass,
                            friction: Math.min(o.friction, a.friction),
                            frictionStatic: Math.max(o.frictionStatic, a.frictionStatic),
                            restitution: Math.max(o.restitution, a.restitution),
                            slop: Math.max(o.slop, a.slop)
                        };
                    return n.update(s, e, t), s
                }, n.update = function(e, t, r) {
                    var o = e.contacts,
                        a = t.supports,
                        s = e.activeContacts,
                        c = t.parentA,
                        l = t.parentB;
                    if (e.collision = t, e.inverseMass = c.inverseMass + l.inverseMass, e.friction = Math.min(c.friction, l.friction), e.frictionStatic = Math.max(c.frictionStatic, l.frictionStatic), e.restitution = Math.max(c.restitution, l.restitution), e.slop = Math.max(c.slop, l.slop), s.length = 0, t.collided) {
                        for (var u = 0; u < a.length; u++) {
                            var h = a[u],
                                p = i.id(h),
                                d = o[p];
                            d ? s.push(d) : s.push(o[p] = i.create(h))
                        }
                        e.separation = t.depth, n.setActive(e, !0, r)
                    } else e.isActive === !0 && n.setActive(e, !1, r)
                }, n.setActive = function(e, t, n) {
                    t ? (e.isActive = !0, e.timeUpdated = n) : (e.isActive = !1, e.activeContacts.length = 0)
                }, n.id = function(e, t) {
                    return e.id < t.id ? "A" + e.id + "B" + t.id : "A" + t.id + "B" + e.id
                }
            }()
        }, {
            "./Contact": 4
        }],
        8: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("./Pair"),
                r = e("../core/Common");
            ! function() {
                var e = 1e3;
                n.create = function(e) {
                    return r.extend({
                        table: {},
                        list: [],
                        collisionStart: [],
                        collisionActive: [],
                        collisionEnd: []
                    }, e)
                }, n.update = function(e, t, n) {
                    var o, a, s, c, l = e.list,
                        u = e.table,
                        h = e.collisionStart,
                        p = e.collisionEnd,
                        d = e.collisionActive,
                        f = [];
                    for (h.length = 0, p.length = 0, d.length = 0, c = 0; c < t.length; c++) o = t[c], o.collided && (a = i.id(o.bodyA, o.bodyB), f.push(a), s = u[a], s ? (s.isActive ? d.push(s) : h.push(s), i.update(s, o, n)) : (s = i.create(o, n), u[a] = s, h.push(s), l.push(s)));
                    for (c = 0; c < l.length; c++) s = l[c], s.isActive && -1 === r.indexOf(f, s.id) && (i.setActive(s, !1, n), p.push(s))
                }, n.removeOld = function(t, n) {
                    var i, r, o, a, s = t.list,
                        c = t.table,
                        l = [];
                    for (a = 0; a < s.length; a++) i = s[a], r = i.collision, r.bodyA.isSleeping || r.bodyB.isSleeping ? i.timeUpdated = n : n - i.timeUpdated > e && l.push(a);
                    for (a = 0; a < l.length; a++) o = l[a] - a, i = s[o], delete c[i.id], s.splice(o, 1)
                }, n.clear = function(e) {
                    return e.table = {}, e.list.length = 0, e.collisionStart.length = 0, e.collisionActive.length = 0, e.collisionEnd.length = 0, e
                }
            }()
        }, {
            "../core/Common": 14,
            "./Pair": 7
        }],
        9: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../geometry/Vector"),
                r = e("./SAT"),
                o = e("../geometry/Bounds"),
                a = e("../factory/Bodies"),
                s = e("../geometry/Vertices");
            ! function() {
                n.ray = function(e, t, n, s) {
                    s = s || 1e-100;
                    for (var c = i.angle(t, n), l = i.magnitude(i.sub(t, n)), u = .5 * (n.x + t.x), h = .5 * (n.y + t.y), p = a.rectangle(u, h, l, s, {
                            angle: c
                        }), d = [], f = 0; f < e.length; f++) {
                        var m = e[f];
                        if (o.overlaps(m.bounds, p.bounds))
                            for (var v = 1 === m.parts.length ? 0 : 1; v < m.parts.length; v++) {
                                var g = m.parts[v];
                                if (o.overlaps(g.bounds, p.bounds)) {
                                    var y = r.collides(g, p);
                                    if (y.collided) {
                                        y.body = y.bodyA = y.bodyB = m, d.push(y);
                                        break
                                    }
                                }
                            }
                    }
                    return d
                }, n.region = function(e, t, n) {
                    for (var i = [], r = 0; r < e.length; r++) {
                        var a = e[r],
                            s = o.overlaps(a.bounds, t);
                        (s && !n || !s && n) && i.push(a)
                    }
                    return i
                }, n.point = function(e, t) {
                    for (var n = [], i = 0; i < e.length; i++) {
                        var r = e[i];
                        if (o.contains(r.bounds, t))
                            for (var a = 1 === r.parts.length ? 0 : 1; a < r.parts.length; a++) {
                                var c = r.parts[a];
                                if (o.contains(c.bounds, t) && s.contains(c.vertices, t)) {
                                    n.push(r);
                                    break
                                }
                            }
                    }
                    return n
                }
            }()
        }, {
            "../factory/Bodies": 23,
            "../geometry/Bounds": 26,
            "../geometry/Vector": 28,
            "../geometry/Vertices": 29,
            "./SAT": 11
        }],
        10: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../geometry/Vertices"),
                r = e("../geometry/Vector"),
                o = e("../core/Common"),
                a = e("../geometry/Bounds");
            ! function() {
                n._restingThresh = 4, n._restingThreshTangent = 6, n._positionDampen = .9, n._positionWarming = .8, n._frictionNormalMultiplier = 5, n.preSolvePosition = function(e) {
                    var t, n, i;
                    for (t = 0; t < e.length; t++) n = e[t], n.isActive && (i = n.activeContacts.length, n.collision.parentA.totalContacts += i, n.collision.parentB.totalContacts += i)
                }, n.solvePosition = function(e, t) {
                    var i, o, a, s, c, l, u, h, p, d = r._temp[0],
                        f = r._temp[1],
                        m = r._temp[2],
                        v = r._temp[3];
                    for (i = 0; i < e.length; i++) o = e[i], o.isActive && !o.isSensor && (a = o.collision, s = a.parentA, c = a.parentB, l = a.normal, u = r.sub(r.add(c.positionImpulse, c.position, d), r.add(s.positionImpulse, r.sub(c.position, a.penetration, f), m), v), o.separation = r.dot(l, u));
                    for (i = 0; i < e.length; i++) o = e[i], !o.isActive || o.isSensor || o.separation < 0 || (a = o.collision, s = a.parentA, c = a.parentB, l = a.normal, p = (o.separation - o.slop) * t, (s.isStatic || c.isStatic) && (p *= 2), s.isStatic || s.isSleeping || (h = n._positionDampen / s.totalContacts, s.positionImpulse.x += l.x * p * h, s.positionImpulse.y += l.y * p * h), c.isStatic || c.isSleeping || (h = n._positionDampen / c.totalContacts, c.positionImpulse.x -= l.x * p * h, c.positionImpulse.y -= l.y * p * h))
                }, n.postSolvePosition = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var o = e[t];
                        if (o.totalContacts = 0, 0 !== o.positionImpulse.x || 0 !== o.positionImpulse.y) {
                            for (var s = 0; s < o.parts.length; s++) {
                                var c = o.parts[s];
                                i.translate(c.vertices, o.positionImpulse), a.update(c.bounds, c.vertices, o.velocity), c.position.x += o.positionImpulse.x, c.position.y += o.positionImpulse.y
                            }
                            o.positionPrev.x += o.positionImpulse.x, o.positionPrev.y += o.positionImpulse.y, r.dot(o.positionImpulse, o.velocity) < 0 ? (o.positionImpulse.x = 0, o.positionImpulse.y = 0) : (o.positionImpulse.x *= n._positionWarming, o.positionImpulse.y *= n._positionWarming)
                        }
                    }
                }, n.preSolveVelocity = function(e) {
                    var t, n, i, o, a, s, c, l, u, h, p, d, f, m, v = r._temp[0],
                        g = r._temp[1];
                    for (t = 0; t < e.length; t++)
                        if (i = e[t], i.isActive && !i.isSensor)
                            for (o = i.activeContacts, a = i.collision, s = a.parentA, c = a.parentB, l = a.normal, u = a.tangent, n = 0; n < o.length; n++) h = o[n], p = h.vertex, d = h.normalImpulse, f = h.tangentImpulse, (0 !== d || 0 !== f) && (v.x = l.x * d + u.x * f, v.y = l.y * d + u.y * f, s.isStatic || s.isSleeping || (m = r.sub(p, s.position, g), s.positionPrev.x += v.x * s.inverseMass, s.positionPrev.y += v.y * s.inverseMass, s.anglePrev += r.cross(m, v) * s.inverseInertia), c.isStatic || c.isSleeping || (m = r.sub(p, c.position, g), c.positionPrev.x -= v.x * c.inverseMass, c.positionPrev.y -= v.y * c.inverseMass, c.anglePrev -= r.cross(m, v) * c.inverseInertia))
                }, n.solveVelocity = function(e, t) {
                    for (var i = t * t, a = r._temp[0], s = r._temp[1], c = r._temp[2], l = r._temp[3], u = r._temp[4], h = r._temp[5], p = 0; p < e.length; p++) {
                        var d = e[p];
                        if (d.isActive && !d.isSensor) {
                            var f = d.collision,
                                m = f.parentA,
                                v = f.parentB,
                                g = f.normal,
                                y = f.tangent,
                                x = d.activeContacts,
                                b = 1 / x.length;
                            m.velocity.x = m.position.x - m.positionPrev.x, m.velocity.y = m.position.y - m.positionPrev.y, v.velocity.x = v.position.x - v.positionPrev.x, v.velocity.y = v.position.y - v.positionPrev.y, m.angularVelocity = m.angle - m.anglePrev, v.angularVelocity = v.angle - v.anglePrev;
                            for (var w = 0; w < x.length; w++) {
                                var _ = x[w],
                                    M = _.vertex,
                                    T = r.sub(M, m.position, s),
                                    E = r.sub(M, v.position, c),
                                    S = r.add(m.velocity, r.mult(r.perp(T), m.angularVelocity), l),
                                    C = r.add(v.velocity, r.mult(r.perp(E), v.angularVelocity), u),
                                    A = r.sub(S, C, h),
                                    P = r.dot(g, A),
                                    R = r.dot(y, A),
                                    L = Math.abs(R),
                                    I = o.sign(R),
                                    O = (1 + d.restitution) * P,
                                    B = o.clamp(d.separation + P, 0, 1) * n._frictionNormalMultiplier,
                                    D = R,
                                    N = 1 / 0;
                                L > d.friction * d.frictionStatic * B * i && (N = L, D = o.clamp(d.friction * I * i, -N, N));
                                var F = r.cross(T, g),
                                    U = r.cross(E, g),
                                    k = b / (m.inverseMass + v.inverseMass + m.inverseInertia * F * F + v.inverseInertia * U * U);
                                if (O *= k, D *= k, 0 > P && P * P > n._restingThresh * i) _.normalImpulse = 0;
                                else {
                                    var z = _.normalImpulse;
                                    _.normalImpulse = Math.min(_.normalImpulse + O, 0), O = _.normalImpulse - z
                                }
                                if (R * R > n._restingThreshTangent * i) _.tangentImpulse = 0;
                                else {
                                    var H = _.tangentImpulse;
                                    _.tangentImpulse = o.clamp(_.tangentImpulse + D, -N, N), D = _.tangentImpulse - H
                                }
                                a.x = g.x * O + y.x * D, a.y = g.y * O + y.y * D, m.isStatic || m.isSleeping || (m.positionPrev.x += a.x * m.inverseMass, m.positionPrev.y += a.y * m.inverseMass, m.anglePrev += r.cross(T, a) * m.inverseInertia), v.isStatic || v.isSleeping || (v.positionPrev.x -= a.x * v.inverseMass, v.positionPrev.y -= a.y * v.inverseMass, v.anglePrev -= r.cross(E, a) * v.inverseInertia)
                            }
                        }
                    }
                }
            }()
        }, {
            "../core/Common": 14,
            "../geometry/Bounds": 26,
            "../geometry/Vector": 28,
            "../geometry/Vertices": 29
        }],
        11: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../geometry/Vertices"),
                r = e("../geometry/Vector");
            ! function() {
                n.collides = function(t, n, a) {
                    var s, c, l, u, h = !1;
                    if (a) {
                        var p = t.parent,
                            d = n.parent,
                            f = p.speed * p.speed + p.angularSpeed * p.angularSpeed + d.speed * d.speed + d.angularSpeed * d.angularSpeed;
                        h = a && a.collided && .2 > f, u = a
                    } else u = {
                        collided: !1,
                        bodyA: t,
                        bodyB: n
                    };
                    if (a && h) {
                        var m = u.axisBody,
                            v = m === t ? n : t,
                            g = [m.axes[a.axisNumber]];
                        if (l = e(m.vertices, v.vertices, g), u.reused = !0, l.overlap <= 0) return u.collided = !1, u
                    } else {
                        if (s = e(t.vertices, n.vertices, t.axes), s.overlap <= 0) return u.collided = !1, u;
                        if (c = e(n.vertices, t.vertices, n.axes), c.overlap <= 0) return u.collided = !1, u;
                        s.overlap < c.overlap ? (l = s, u.axisBody = t) : (l = c, u.axisBody = n), u.axisNumber = l.axisNumber
                    }
                    u.bodyA = t.id < n.id ? t : n, u.bodyB = t.id < n.id ? n : t, u.collided = !0, u.depth = l.overlap, u.parentA = u.bodyA.parent, u.parentB = u.bodyB.parent, t = u.bodyA, n = u.bodyB, r.dot(l.axis, r.sub(n.position, t.position)) < 0 ? u.normal = {
                        x: l.axis.x,
                        y: l.axis.y
                    } : u.normal = {
                        x: -l.axis.x,
                        y: -l.axis.y
                    }, u.tangent = r.perp(u.normal), u.penetration = u.penetration || {}, u.penetration.x = u.normal.x * u.depth, u.penetration.y = u.normal.y * u.depth;
                    var y = o(t, n, u.normal),
                        x = [];
                    if (i.contains(t.vertices, y[0]) && x.push(y[0]), i.contains(t.vertices, y[1]) && x.push(y[1]), x.length < 2) {
                        var b = o(n, t, r.neg(u.normal));
                        i.contains(n.vertices, b[0]) && x.push(b[0]), x.length < 2 && i.contains(n.vertices, b[1]) && x.push(b[1])
                    }
                    return x.length < 1 && (x = [y[0]]), u.supports = x, u
                };
                var e = function(e, n, i) {
                        for (var o, a, s = r._temp[0], c = r._temp[1], l = {
                                overlap: Number.MAX_VALUE
                            }, u = 0; u < i.length; u++) {
                            if (a = i[u], t(s, e, a), t(c, n, a), o = Math.min(s.max - c.min, c.max - s.min), 0 >= o) return l.overlap = o, l;
                            o < l.overlap && (l.overlap = o, l.axis = a, l.axisNumber = u)
                        }
                        return l
                    },
                    t = function(e, t, n) {
                        for (var i = r.dot(t[0], n), o = i, a = 1; a < t.length; a += 1) {
                            var s = r.dot(t[a], n);
                            s > o ? o = s : i > s && (i = s)
                        }
                        e.min = i, e.max = o
                    },
                    o = function(e, t, n) {
                        for (var i, o, a, s, c = Number.MAX_VALUE, l = r._temp[0], u = t.vertices, h = e.position, p = 0; p < u.length; p++) o = u[p], l.x = o.x - h.x, l.y = o.y - h.y, i = -r.dot(n, l), c > i && (c = i, a = o);
                        var d = a.index - 1 >= 0 ? a.index - 1 : u.length - 1;
                        o = u[d], l.x = o.x - h.x, l.y = o.y - h.y, c = -r.dot(n, l), s = o;
                        var f = (a.index + 1) % u.length;
                        return o = u[f], l.x = o.x - h.x, l.y = o.y - h.y, i = -r.dot(n, l), c > i && (s = o), [a, s]
                    }
            }()
        }, {
            "../geometry/Vector": 28,
            "../geometry/Vertices": 29
        }],
        12: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../geometry/Vertices"),
                r = e("../geometry/Vector"),
                o = e("../core/Sleeping"),
                a = e("../geometry/Bounds"),
                s = e("../geometry/Axes"),
                c = e("../core/Common");
            ! function() {
                var e = 1e-6,
                    t = .001;
                n.create = function(t) {
                    var n = t;
                    n.bodyA && !n.pointA && (n.pointA = {
                        x: 0,
                        y: 0
                    }), n.bodyB && !n.pointB && (n.pointB = {
                        x: 0,
                        y: 0
                    });
                    var i = n.bodyA ? r.add(n.bodyA.position, n.pointA) : n.pointA,
                        o = n.bodyB ? r.add(n.bodyB.position, n.pointB) : n.pointB,
                        a = r.magnitude(r.sub(i, o));
                    n.length = n.length || a || e;
                    var s = {
                        visible: !0,
                        lineWidth: 2,
                        strokeStyle: "#ffffff"
                    };
                    return n.render = c.extend(s, n.render), n.id = n.id || c.nextId(), n.label = n.label || "Constraint", n.type = "constraint", n.stiffness = n.stiffness || 1, n.angularStiffness = n.angularStiffness || 0, n.angleA = n.bodyA ? n.bodyA.angle : n.angleA, n.angleB = n.bodyB ? n.bodyB.angle : n.angleB, n.plugin = {}, n
                }, n.solveAll = function(e, t) {
                    for (var i = 0; i < e.length; i++) n.solve(e[i], t)
                }, n.solve = function(n, i) {
                    var o = n.bodyA,
                        a = n.bodyB,
                        s = n.pointA,
                        c = n.pointB;
                    o && !o.isStatic && (n.pointA = r.rotate(s, o.angle - n.angleA), n.angleA = o.angle), a && !a.isStatic && (n.pointB = r.rotate(c, a.angle - n.angleB), n.angleB = a.angle);
                    var l = s,
                        u = c;
                    if (o && (l = r.add(o.position, s)), a && (u = r.add(a.position, c)), l && u) {
                        var h = r.sub(l, u),
                            p = r.magnitude(h);
                        0 === p && (p = e);
                        var d = (p - n.length) / p,
                            f = r.div(h, p),
                            m = r.mult(h, .5 * d * n.stiffness * i * i);
                        if (!(Math.abs(1 - p / n.length) < t * i)) {
                            var v, g, y, x, b, w, _, M;
                            o && !o.isStatic ? (y = {
                                x: l.x - o.position.x + m.x,
                                y: l.y - o.position.y + m.y
                            }, o.velocity.x = o.position.x - o.positionPrev.x, o.velocity.y = o.position.y - o.positionPrev.y, o.angularVelocity = o.angle - o.anglePrev, v = r.add(o.velocity, r.mult(r.perp(y), o.angularVelocity)), b = r.dot(y, f), _ = o.inverseMass + o.inverseInertia * b * b) : (v = {
                                x: 0,
                                y: 0
                            }, _ = o ? o.inverseMass : 0), a && !a.isStatic ? (x = {
                                x: u.x - a.position.x - m.x,
                                y: u.y - a.position.y - m.y
                            }, a.velocity.x = a.position.x - a.positionPrev.x, a.velocity.y = a.position.y - a.positionPrev.y, a.angularVelocity = a.angle - a.anglePrev, g = r.add(a.velocity, r.mult(r.perp(x), a.angularVelocity)), w = r.dot(x, f), M = a.inverseMass + a.inverseInertia * w * w) : (g = {
                                x: 0,
                                y: 0
                            }, M = a ? a.inverseMass : 0);
                            var T = r.sub(g, v),
                                E = r.dot(f, T) / (_ + M);
                            E > 0 && (E = 0);
                            var S, C = {
                                x: f.x * E,
                                y: f.y * E
                            };
                            o && !o.isStatic && (S = r.cross(y, C) * o.inverseInertia * (1 - n.angularStiffness), o.constraintImpulse.x -= m.x, o.constraintImpulse.y -= m.y, o.constraintImpulse.angle += S, o.position.x -= m.x, o.position.y -= m.y, o.angle += S), a && !a.isStatic && (S = r.cross(x, C) * a.inverseInertia * (1 - n.angularStiffness), a.constraintImpulse.x += m.x, a.constraintImpulse.y += m.y, a.constraintImpulse.angle -= S, a.position.x += m.x, a.position.y += m.y, a.angle -= S)
                        }
                    }
                }, n.postSolveAll = function(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e[t],
                            c = n.constraintImpulse;
                        if (0 !== c.x || 0 !== c.y || 0 !== c.angle) {
                            o.set(n, !1);
                            for (var l = 0; l < n.parts.length; l++) {
                                var u = n.parts[l];
                                i.translate(u.vertices, c), l > 0 && (u.position.x += c.x, u.position.y += c.y), 0 !== c.angle && (i.rotate(u.vertices, c.angle, n.position), s.rotate(u.axes, c.angle), l > 0 && r.rotateAbout(u.position, c.angle, n.position, u.position)), a.update(u.bounds, u.vertices, n.velocity)
                            }
                            c.angle = 0, c.x = 0, c.y = 0
                        }
                    }
                }
            }()
        }, {
            "../core/Common": 14,
            "../core/Sleeping": 22,
            "../geometry/Axes": 25,
            "../geometry/Bounds": 26,
            "../geometry/Vector": 28,
            "../geometry/Vertices": 29
        }],
        13: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../geometry/Vertices"),
                r = e("../core/Sleeping"),
                o = e("../core/Mouse"),
                a = e("../core/Events"),
                s = e("../collision/Detector"),
                c = e("./Constraint"),
                l = e("../body/Composite"),
                u = e("../core/Common"),
                h = e("../geometry/Bounds");
            ! function() {
                n.create = function(t, i) {
                    var r = (t ? t.mouse : null) || (i ? i.mouse : null);
                    r || (t && t.render && t.render.canvas ? r = o.create(t.render.canvas) : i && i.element ? r = o.create(i.element) : (r = o.create(), u.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));
                    var s = c.create({
                            label: "Mouse Constraint",
                            pointA: r.position,
                            pointB: {
                                x: 0,
                                y: 0
                            },
                            length: .01,
                            stiffness: .1,
                            angularStiffness: 1,
                            render: {
                                strokeStyle: "#90EE90",
                                lineWidth: 3
                            }
                        }),
                        h = {
                            type: "mouseConstraint",
                            mouse: r,
                            element: null,
                            body: null,
                            constraint: s,
                            collisionFilter: {
                                category: 1,
                                mask: 4294967295,
                                group: 0
                            }
                        },
                        p = u.extend(h, i);
                    return a.on(t, "beforeUpdate", function() {
                        var i = l.allBodies(t.world);
                        n.update(p, i), e(p)
                    }), p
                }, n.update = function(e, t) {
                    var n = e.mouse,
                        o = e.constraint,
                        c = e.body;
                    if (0 === n.button) {
                        if (o.bodyB) r.set(o.bodyB, !1), o.pointA = n.position;
                        else
                            for (var l = 0; l < t.length; l++)
                                if (c = t[l], h.contains(c.bounds, n.position) && s.canCollide(c.collisionFilter, e.collisionFilter))
                                    for (var u = c.parts.length > 1 ? 1 : 0; u < c.parts.length; u++) {
                                        var p = c.parts[u];
                                        if (i.contains(p.vertices, n.position)) {
                                            o.pointA = n.position, o.bodyB = e.body = c, o.pointB = {
                                                x: n.position.x - c.position.x,
                                                y: n.position.y - c.position.y
                                            }, o.angleB = c.angle, r.set(c, !1), a.trigger(e, "startdrag", {
                                                mouse: n,
                                                body: c
                                            });
                                            break
                                        }
                                    }
                    } else o.bodyB = e.body = null, o.pointB = null, c && a.trigger(e, "enddrag", {
                        mouse: n,
                        body: c
                    })
                };
                var e = function(e) {
                    var t = e.mouse,
                        n = t.sourceEvents;
                    n.mousemove && a.trigger(e, "mousemove", {
                        mouse: t
                    }), n.mousedown && a.trigger(e, "mousedown", {
                        mouse: t
                    }), n.mouseup && a.trigger(e, "mouseup", {
                        mouse: t
                    }), o.clearSourceEvents(t)
                }
            }()
        }, {
            "../body/Composite": 2,
            "../collision/Detector": 5,
            "../core/Common": 14,
            "../core/Events": 16,
            "../core/Mouse": 19,
            "../core/Sleeping": 22,
            "../geometry/Bounds": 26,
            "../geometry/Vertices": 29,
            "./Constraint": 12
        }],
        14: [function(e, t) {
            var n = {};
            t.exports = n,
                function() {
                    n._nextId = 0, n._seed = 0, n.extend = function(e, t) {
                        var i, r;
                        "boolean" == typeof t ? (i = 2, r = t) : (i = 1, r = !0);
                        for (var o = i; o < arguments.length; o++) {
                            var a = arguments[o];
                            if (a)
                                for (var s in a) r && a[s] && a[s].constructor === Object ? e[s] && e[s].constructor !== Object ? e[s] = a[s] : (e[s] = e[s] || {}, n.extend(e[s], r, a[s])) : e[s] = a[s]
                        }
                        return e
                    }, n.clone = function(e, t) {
                        return n.extend({}, t, e)
                    }, n.keys = function(e) {
                        if (Object.keys) return Object.keys(e);
                        var t = [];
                        for (var n in e) t.push(n);
                        return t
                    }, n.values = function(e) {
                        var t = [];
                        if (Object.keys) {
                            for (var n = Object.keys(e), i = 0; i < n.length; i++) t.push(e[n[i]]);
                            return t
                        }
                        for (var r in e) t.push(e[r]);
                        return t
                    }, n.get = function(e, t, n, i) {
                        t = t.split(".").slice(n, i);
                        for (var r = 0; r < t.length; r += 1) e = e[t[r]];
                        return e
                    }, n.set = function(e, t, i, r, o) {
                        var a = t.split(".").slice(r, o);
                        return n.get(e, t, 0, -1)[a[a.length - 1]] = i, i
                    }, n.shadeColor = function(e, t) {
                        var n = parseInt(e.slice(1), 16),
                            i = Math.round(2.55 * t),
                            r = (n >> 16) + i,
                            o = (n >> 8 & 255) + i,
                            a = (255 & n) + i;
                        return "#" + (16777216 + 65536 * (255 > r ? 1 > r ? 0 : r : 255) + 256 * (255 > o ? 1 > o ? 0 : o : 255) + (255 > a ? 1 > a ? 0 : a : 255)).toString(16).slice(1);
                    }, n.shuffle = function(e) {
                        for (var t = e.length - 1; t > 0; t--) {
                            var i = Math.floor(n.random() * (t + 1)),
                                r = e[t];
                            e[t] = e[i], e[i] = r
                        }
                        return e
                    }, n.choose = function(e) {
                        return e[Math.floor(n.random() * e.length)]
                    }, n.isElement = function(e) {
                        try {
                            return e instanceof HTMLElement
                        } catch (t) {
                            return "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument
                        }
                    }, n.isArray = function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    }, n.isFunction = function(e) {
                        return "function" == typeof e
                    }, n.isPlainObject = function(e) {
                        return "object" == typeof e && e.constructor === Object
                    }, n.isString = function(e) {
                        return "[object String]" === toString.call(e)
                    }, n.clamp = function(e, t, n) {
                        return t > e ? t : e > n ? n : e
                    }, n.sign = function(e) {
                        return 0 > e ? -1 : 1
                    }, n.now = function() {
                        var e = window.performance || {};
                        return e.now = function() {
                            return e.now || e.webkitNow || e.msNow || e.oNow || e.mozNow || function() {
                                return +new Date
                            }
                        }(), e.now()
                    }, n.random = function(t, n) {
                        return t = "undefined" != typeof t ? t : 0, n = "undefined" != typeof n ? n : 1, t + e() * (n - t)
                    };
                    var e = function() {
                        return n._seed = (9301 * n._seed + 49297) % 233280, n._seed / 233280
                    };
                    n.colorToNumber = function(e) {
                        return e = e.replace("#", ""), 3 == e.length && (e = e.charAt(0) + e.charAt(0) + e.charAt(1) + e.charAt(1) + e.charAt(2) + e.charAt(2)), parseInt(e, 16)
                    }, n.logLevel = 1, n.log = function() {
                        console && n.logLevel > 0 && n.logLevel <= 3 && console.log.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                    }, n.info = function() {
                        console && n.logLevel > 0 && n.logLevel <= 2 && console.info.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                    }, n.warn = function() {
                        console && n.logLevel > 0 && n.logLevel <= 3 && console.warn.apply(console, ["matter-js:"].concat(Array.prototype.slice.call(arguments)))
                    }, n.nextId = function() {
                        return n._nextId++
                    }, n.indexOf = function(e, t) {
                        if (e.indexOf) return e.indexOf(t);
                        for (var n = 0; n < e.length; n++)
                            if (e[n] === t) return n;
                        return -1
                    }, n.map = function(e, t) {
                        if (e.map) return e.map(t);
                        for (var n = [], i = 0; i < e.length; i += 1) n.push(t(e[i]));
                        return n
                    }, n.topologicalSort = function(e) {
                        var n = [],
                            i = [],
                            r = [];
                        for (var o in e) i[o] || r[o] || t(o, i, r, e, n);
                        return n
                    };
                    var t = function(e, n, i, r, o) {
                        var a = r[e] || [];
                        i[e] = !0;
                        for (var s = 0; s < a.length; s += 1) {
                            var c = a[s];
                            i[c] || n[c] || t(c, n, i, r, o)
                        }
                        i[e] = !1, n[e] = !0, o.push(e)
                    };
                    n.chain = function() {
                        for (var e = [], t = 0; t < arguments.length; t += 1) {
                            var n = arguments[t];
                            n._chained ? e.push.apply(e, n._chained) : e.push(n)
                        }
                        var i = function() {
                            for (var t, n = new Array(arguments.length), i = 0, r = arguments.length; r > i; i++) n[i] = arguments[i];
                            for (i = 0; i < e.length; i += 1) {
                                var o = e[i].apply(t, n);
                                "undefined" != typeof o && (t = o)
                            }
                            return t
                        };
                        return i._chained = e, i
                    }, n.chainPathBefore = function(e, t, i) {
                        return n.set(e, t, n.chain(i, n.get(e, t)))
                    }, n.chainPathAfter = function(e, t, i) {
                        return n.set(e, t, n.chain(n.get(e, t), i))
                    }
                }()
        }, {}],
        15: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../body/World"),
                r = e("./Sleeping"),
                o = e("../collision/Resolver"),
                a = e("../render/Render"),
                s = e("../collision/Pairs"),
                c = (e("./Metrics"), e("../collision/Grid")),
                l = e("./Events"),
                u = e("../body/Composite"),
                h = e("../constraint/Constraint"),
                p = e("./Common"),
                d = e("../body/Body");
            ! function() {
                n.create = function(e, t) {
                    t = p.isElement(e) ? t : e, e = p.isElement(e) ? e : null, t = t || {}, (e || t.render) && p.warn("Engine.create: engine.render is deprecated (see docs)");
                    var n = {
                            positionIterations: 6,
                            velocityIterations: 4,
                            constraintIterations: 2,
                            enableSleeping: !1,
                            events: [],
                            plugin: {},
                            timing: {
                                timestamp: 0,
                                timeScale: 1
                            },
                            broadphase: {
                                controller: c
                            }
                        },
                        r = p.extend(n, t);
                    if (e || r.render) {
                        var o = {
                            element: e,
                            controller: a
                        };
                        r.render = p.extend(o, r.render)
                    }
                    return r.render && r.render.controller && (r.render = r.render.controller.create(r.render)), r.render && (r.render.engine = r), r.world = t.world || i.create(r.world), r.pairs = s.create(), r.broadphase = r.broadphase.controller.create(r.broadphase), r.metrics = r.metrics || {
                        extended: !1
                    }, r
                }, n.update = function(n, i, a) {
                    i = i || 1e3 / 60, a = a || 1;
                    var c, p = n.world,
                        d = n.timing,
                        m = n.broadphase,
                        v = [];
                    d.timestamp += i * d.timeScale;
                    var g = {
                        timestamp: d.timestamp
                    };
                    l.trigger(n, "beforeUpdate", g);
                    var y = u.allBodies(p),
                        x = u.allConstraints(p);
                    for (n.enableSleeping && r.update(y, d.timeScale), t(y, p.gravity), f(y, i, d.timeScale, a, p.bounds), c = 0; c < n.constraintIterations; c++) h.solveAll(x, d.timeScale);
                    h.postSolveAll(y), m.controller ? (p.isModified && m.controller.clear(m), m.controller.update(m, y, n, p.isModified), v = m.pairsList) : v = y, p.isModified && u.setModified(p, !1, !1, !0);
                    var b = m.detector(v, n),
                        w = n.pairs,
                        _ = d.timestamp;
                    for (s.update(w, b, _), s.removeOld(w, _), n.enableSleeping && r.afterCollisions(w.list, d.timeScale), w.collisionStart.length > 0 && l.trigger(n, "collisionStart", {
                            pairs: w.collisionStart
                        }), o.preSolvePosition(w.list), c = 0; c < n.positionIterations; c++) o.solvePosition(w.list, d.timeScale);
                    for (o.postSolvePosition(y), o.preSolveVelocity(w.list), c = 0; c < n.velocityIterations; c++) o.solveVelocity(w.list, d.timeScale);
                    return w.collisionActive.length > 0 && l.trigger(n, "collisionActive", {
                        pairs: w.collisionActive
                    }), w.collisionEnd.length > 0 && l.trigger(n, "collisionEnd", {
                        pairs: w.collisionEnd
                    }), e(y), l.trigger(n, "afterUpdate", g), n
                }, n.merge = function(e, t) {
                    if (p.extend(e, t), t.world) {
                        e.world = t.world, n.clear(e);
                        for (var i = u.allBodies(e.world), o = 0; o < i.length; o++) {
                            var a = i[o];
                            r.set(a, !1), a.id = p.nextId()
                        }
                    }
                }, n.clear = function(e) {
                    var t = e.world;
                    s.clear(e.pairs);
                    var n = e.broadphase;
                    if (n.controller) {
                        var i = u.allBodies(t);
                        n.controller.clear(n), n.controller.update(n, i, e, !0)
                    }
                };
                var e = function(e) {
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            n.force.x = 0, n.force.y = 0, n.torque = 0
                        }
                    },
                    t = function(e, t) {
                        var n = "undefined" != typeof t.scale ? t.scale : .001;
                        if ((0 !== t.x || 0 !== t.y) && 0 !== n)
                            for (var i = 0; i < e.length; i++) {
                                var r = e[i];
                                r.isStatic || r.isSleeping || (r.force.y += r.mass * t.y * n, r.force.x += r.mass * t.x * n)
                            }
                    },
                    f = function(e, t, n, i) {
                        for (var r = 0; r < e.length; r++) {
                            var o = e[r];
                            o.isStatic || o.isSleeping || d.update(o, t, n, i)
                        }
                    }
            }()
        }, {
            "../body/Body": 1,
            "../body/Composite": 2,
            "../body/World": 3,
            "../collision/Grid": 6,
            "../collision/Pairs": 8,
            "../collision/Resolver": 10,
            "../constraint/Constraint": 12,
            "../render/Render": 31,
            "./Common": 14,
            "./Events": 16,
            "./Metrics": 18,
            "./Sleeping": 22
        }],
        16: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("./Common");
            ! function() {
                n.on = function(e, t, n) {
                    for (var i, r = t.split(" "), o = 0; o < r.length; o++) i = r[o], e.events = e.events || {}, e.events[i] = e.events[i] || [], e.events[i].push(n);
                    return n
                }, n.off = function(e, t, n) {
                    if (!t) return void(e.events = {});
                    "function" == typeof t && (n = t, t = i.keys(e.events).join(" "));
                    for (var r = t.split(" "), o = 0; o < r.length; o++) {
                        var a = e.events[r[o]],
                            s = [];
                        if (n && a)
                            for (var c = 0; c < a.length; c++) a[c] !== n && s.push(a[c]);
                        e.events[r[o]] = s
                    }
                }, n.trigger = function(e, t, n) {
                    var r, o, a, s;
                    if (e.events) {
                        n || (n = {}), r = t.split(" ");
                        for (var c = 0; c < r.length; c++)
                            if (o = r[c], a = e.events[o]) {
                                s = i.clone(n, !1), s.name = o, s.source = e;
                                for (var l = 0; l < a.length; l++) a[l].apply(e, [s])
                            }
                    }
                }
            }()
        }, {
            "./Common": 14
        }],
        17: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("./Plugin"),
                r = e("./Common");
            ! function() {
                n.name = "matter-js", n.version = "0.12.0", n.uses = [], n.used = [], n.use = function() {
                    i.use(n, Array.prototype.slice.call(arguments))
                }, n.before = function(e, t) {
                    return e = e.replace(/^Matter./, ""), r.chainPathBefore(n, e, t)
                }, n.after = function(e, t) {
                    return e = e.replace(/^Matter./, ""), r.chainPathAfter(n, e, t)
                }
            }()
        }, {
            "./Common": 14,
            "./Plugin": 20
        }],
        18: [function() {}, {
            "../body/Composite": 2,
            "./Common": 14
        }],
        19: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../core/Common");
            ! function() {
                n.create = function(t) {
                    var r = {};
                    return t || i.log("Mouse.create: element was undefined, defaulting to document.body", "warn"), r.element = t || document.body, r.absolute = {
                        x: 0,
                        y: 0
                    }, r.position = {
                        x: 0,
                        y: 0
                    }, r.mousedownPosition = {
                        x: 0,
                        y: 0
                    }, r.mouseupPosition = {
                        x: 0,
                        y: 0
                    }, r.offset = {
                        x: 0,
                        y: 0
                    }, r.scale = {
                        x: 1,
                        y: 1
                    }, r.wheelDelta = 0, r.button = -1, r.pixelRatio = r.element.getAttribute("data-pixel-ratio") || 1, r.sourceEvents = {
                        mousemove: null,
                        mousedown: null,
                        mouseup: null,
                        mousewheel: null
                    }, r.mousemove = function(t) {
                        var n = e(t, r.element, r.pixelRatio),
                            i = t.changedTouches;
                        i && (r.button = 0, t.preventDefault()), r.absolute.x = n.x, r.absolute.y = n.y, r.position.x = r.absolute.x * r.scale.x + r.offset.x, r.position.y = r.absolute.y * r.scale.y + r.offset.y, r.sourceEvents.mousemove = t
                    }, r.mousedown = function(t) {
                        var n = e(t, r.element, r.pixelRatio),
                            i = t.changedTouches;
                        i ? (r.button = 0, t.preventDefault()) : r.button = t.button, r.absolute.x = n.x, r.absolute.y = n.y, r.position.x = r.absolute.x * r.scale.x + r.offset.x, r.position.y = r.absolute.y * r.scale.y + r.offset.y, r.mousedownPosition.x = r.position.x, r.mousedownPosition.y = r.position.y, r.sourceEvents.mousedown = t
                    }, r.mouseup = function(t) {
                        var n = e(t, r.element, r.pixelRatio),
                            i = t.changedTouches;
                        i && t.preventDefault(), r.button = -1, r.absolute.x = n.x, r.absolute.y = n.y, r.position.x = r.absolute.x * r.scale.x + r.offset.x, r.position.y = r.absolute.y * r.scale.y + r.offset.y, r.mouseupPosition.x = r.position.x, r.mouseupPosition.y = r.position.y, r.sourceEvents.mouseup = t
                    }, r.mousewheel = function(e) {
                        r.wheelDelta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail)), e.preventDefault()
                    }, n.setElement(r, r.element), r
                }, n.setElement = function(e, t) {
                    e.element = t, t.addEventListener("mousemove", e.mousemove), t.addEventListener("mousedown", e.mousedown), t.addEventListener("mouseup", e.mouseup), t.addEventListener("mousewheel", e.mousewheel), t.addEventListener("DOMMouseScroll", e.mousewheel), t.addEventListener("touchmove", e.mousemove), t.addEventListener("touchstart", e.mousedown), t.addEventListener("touchend", e.mouseup)
                }, n.clearSourceEvents = function(e) {
                    e.sourceEvents.mousemove = null, e.sourceEvents.mousedown = null, e.sourceEvents.mouseup = null, e.sourceEvents.mousewheel = null, e.wheelDelta = 0
                }, n.setOffset = function(e, t) {
                    e.offset.x = t.x, e.offset.y = t.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y
                }, n.setScale = function(e, t) {
                    e.scale.x = t.x, e.scale.y = t.y, e.position.x = e.absolute.x * e.scale.x + e.offset.x, e.position.y = e.absolute.y * e.scale.y + e.offset.y
                };
                var e = function(e, t, n) {
                    var i, r, o = t.getBoundingClientRect(),
                        a = document.documentElement || document.body.parentNode || document.body,
                        s = void 0 !== window.pageXOffset ? window.pageXOffset : a.scrollLeft,
                        c = void 0 !== window.pageYOffset ? window.pageYOffset : a.scrollTop,
                        l = e.changedTouches;
                    return l ? (i = l[0].pageX - o.left - s, r = l[0].pageY - o.top - c) : (i = e.pageX - o.left - s, r = e.pageY - o.top - c), {
                        x: i / (t.clientWidth / (t.width || t.clientWidth) * n),
                        y: r / (t.clientHeight / (t.height || t.clientHeight) * n)
                    }
                }
            }()
        }, {
            "../core/Common": 14
        }],
        20: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("./Common");
            ! function() {
                n._registry = {}, n.register = function(e) {
                    if (n.isPlugin(e) || i.warn("Plugin.register:", n.toString(e), "does not implement all required fields."), e.name in n._registry) {
                        var t = n._registry[e.name],
                            r = n.versionParse(e.version).number,
                            o = n.versionParse(t.version).number;
                        r > o ? (i.warn("Plugin.register:", n.toString(t), "was upgraded to", n.toString(e)), n._registry[e.name] = e) : o > r ? i.warn("Plugin.register:", n.toString(t), "can not be downgraded to", n.toString(e)) : e !== t && i.warn("Plugin.register:", n.toString(e), "is already registered to different plugin object")
                    } else n._registry[e.name] = e;
                    return e
                }, n.resolve = function(e) {
                    return n._registry[n.dependencyParse(e).name]
                }, n.toString = function(e) {
                    return "string" == typeof e ? e : (e.name || "anonymous") + "@" + (e.version || e.range || "0.0.0")
                }, n.isPlugin = function(e) {
                    return e && e.name && e.version && e.install
                }, n.isUsed = function(e, t) {
                    return e.used.indexOf(t) > -1
                }, n.isFor = function(e, t) {
                    var i = e["for"] && n.dependencyParse(e["for"]);
                    return !e["for"] || t.name === i.name && n.versionSatisfies(t.version, i.range)
                }, n.use = function(e, t) {
                    if (e.uses = (e.uses || []).concat(t || []), 0 === e.uses.length) return void i.warn("Plugin.use:", n.toString(e), "does not specify any dependencies to install.");
                    for (var r = n.dependencies(e), o = i.topologicalSort(r), a = [], s = 0; s < o.length; s += 1)
                        if (o[s] !== e.name) {
                            var c = n.resolve(o[s]);
                            c ? n.isUsed(e, c.name) || (n.isFor(c, e) || (i.warn("Plugin.use:", n.toString(c), "is for", c["for"], "but installed on", n.toString(e) + "."), c._warned = !0), c.install ? c.install(e) : (i.warn("Plugin.use:", n.toString(c), "does not specify an install function."), c._warned = !0), c._warned ? (a.push("ðŸ”¶ " + n.toString(c)), delete c._warned) : a.push("âœ… " + n.toString(c)), e.used.push(c.name)) : a.push("âŒ " + o[s])
                        } a.length > 0 && i.info(a.join("  "))
                }, n.dependencies = function(e, t) {
                    var r = n.dependencyParse(e),
                        o = r.name;
                    if (t = t || {}, !(o in t)) {
                        e = n.resolve(e) || e, t[o] = i.map(e.uses || [], function(t) {
                            n.isPlugin(t) && n.register(t);
                            var o = n.dependencyParse(t),
                                a = n.resolve(t);
                            return a && !n.versionSatisfies(a.version, o.range) ? (i.warn("Plugin.dependencies:", n.toString(a), "does not satisfy", n.toString(o), "used by", n.toString(r) + "."), a._warned = !0, e._warned = !0) : a || (i.warn("Plugin.dependencies:", n.toString(t), "used by", n.toString(r), "could not be resolved."), e._warned = !0), o.name
                        });
                        for (var a = 0; a < t[o].length; a += 1) n.dependencies(t[o][a], t);
                        return t
                    }
                }, n.dependencyParse = function(e) {
                    if (i.isString(e)) {
                        var t = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?))?$/;
                        return t.test(e) || i.warn("Plugin.dependencyParse:", e, "is not a valid dependency string."), {
                            name: e.split("@")[0],
                            range: e.split("@")[1] || "*"
                        }
                    }
                    return {
                        name: e.name,
                        range: e.range || e.version
                    }
                }, n.versionParse = function(e) {
                    var t = /^\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-]+)?$/;
                    t.test(e) || i.warn("Plugin.versionParse:", e, "is not a valid version or range.");
                    var n = e.split("-");
                    e = n[0];
                    var r = isNaN(Number(e[0])),
                        o = r ? e.substr(1) : e,
                        a = i.map(o.split("."), function(e) {
                            return Number(e)
                        });
                    return {
                        isRange: r,
                        version: o,
                        range: e,
                        operator: r ? e[0] : "",
                        parts: a,
                        prerelease: n[1],
                        number: 1e8 * a[0] + 1e4 * a[1] + a[2]
                    }
                }, n.versionSatisfies = function(e, t) {
                    t = t || "*";
                    var i = n.versionParse(t),
                        r = i.parts,
                        o = n.versionParse(e),
                        a = o.parts;
                    if (i.isRange) {
                        if ("*" === i.operator || "*" === e) return !0;
                        if ("~" === i.operator) return a[0] === r[0] && a[1] === r[1] && a[2] >= r[2];
                        if ("^" === i.operator) return r[0] > 0 ? a[0] === r[0] && o.number >= i.number : r[1] > 0 ? a[1] === r[1] && a[2] >= r[2] : a[2] === r[2]
                    }
                    return e === t || "*" === e
                }
            }()
        }, {
            "./Common": 14
        }],
        21: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("./Events"),
                r = e("./Engine"),
                o = e("./Common");
            ! function() {
                var e, t;
                if ("undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), !e) {
                    var a;
                    e = function(e) {
                        a = setTimeout(function() {
                            e(o.now())
                        }, 1e3 / 60)
                    }, t = function() {
                        clearTimeout(a)
                    }
                }
                n.create = function(e) {
                    var t = {
                            fps: 60,
                            correction: 1,
                            deltaSampleSize: 60,
                            counterTimestamp: 0,
                            frameCounter: 0,
                            deltaHistory: [],
                            timePrev: null,
                            timeScalePrev: 1,
                            frameRequestId: null,
                            isFixed: !1,
                            enabled: !0
                        },
                        n = o.extend(t, e);
                    return n.delta = n.delta || 1e3 / n.fps, n.deltaMin = n.deltaMin || 1e3 / n.fps, n.deltaMax = n.deltaMax || 1e3 / (.5 * n.fps), n.fps = 1e3 / n.delta, n
                }, n.run = function(t, i) {
                    return "undefined" != typeof t.positionIterations && (i = t, t = n.create()),
                        function r(o) {
                            t.frameRequestId = e(r), o && t.enabled && n.tick(t, i, o)
                        }(), t
                }, n.tick = function(e, t, n) {
                    var o, a = t.timing,
                        s = 1,
                        c = {
                            timestamp: a.timestamp
                        };
                    i.trigger(e, "beforeTick", c), i.trigger(t, "beforeTick", c), e.isFixed ? o = e.delta : (o = n - e.timePrev || e.delta, e.timePrev = n, e.deltaHistory.push(o), e.deltaHistory = e.deltaHistory.slice(-e.deltaSampleSize), o = Math.min.apply(null, e.deltaHistory), o = o < e.deltaMin ? e.deltaMin : o, o = o > e.deltaMax ? e.deltaMax : o, s = o / e.delta, e.delta = o), 0 !== e.timeScalePrev && (s *= a.timeScale / e.timeScalePrev), 0 === a.timeScale && (s = 0), e.timeScalePrev = a.timeScale, e.correction = s, e.frameCounter += 1, n - e.counterTimestamp >= 1e3 && (e.fps = e.frameCounter * ((n - e.counterTimestamp) / 1e3), e.counterTimestamp = n, e.frameCounter = 0), i.trigger(e, "tick", c), i.trigger(t, "tick", c), t.world.isModified && t.render && t.render.controller && t.render.controller.clear && t.render.controller.clear(t.render), i.trigger(e, "beforeUpdate", c), r.update(t, o, s), i.trigger(e, "afterUpdate", c), t.render && t.render.controller && (i.trigger(e, "beforeRender", c), i.trigger(t, "beforeRender", c), t.render.controller.world(t.render), i.trigger(e, "afterRender", c), i.trigger(t, "afterRender", c)), i.trigger(e, "afterTick", c), i.trigger(t, "afterTick", c)
                }, n.stop = function(e) {
                    t(e.frameRequestId)
                }, n.start = function(e, t) {
                    n.run(e, t)
                }
            }()
        }, {
            "./Common": 14,
            "./Engine": 15,
            "./Events": 16
        }],
        22: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("./Events");
            ! function() {
                n._motionWakeThreshold = .18, n._motionSleepThreshold = .08, n._minBias = .9, n.update = function(e, t) {
                    for (var i = t * t * t, r = 0; r < e.length; r++) {
                        var o = e[r],
                            a = o.speed * o.speed + o.angularSpeed * o.angularSpeed;
                        if (0 === o.force.x && 0 === o.force.y) {
                            var s = Math.min(o.motion, a),
                                c = Math.max(o.motion, a);
                            o.motion = n._minBias * s + (1 - n._minBias) * c, o.sleepThreshold > 0 && o.motion < n._motionSleepThreshold * i ? (o.sleepCounter += 1, o.sleepCounter >= o.sleepThreshold && n.set(o, !0)) : o.sleepCounter > 0 && (o.sleepCounter -= 1)
                        } else n.set(o, !1)
                    }
                }, n.afterCollisions = function(e, t) {
                    for (var i = t * t * t, r = 0; r < e.length; r++) {
                        var o = e[r];
                        if (o.isActive) {
                            var a = o.collision,
                                s = a.bodyA.parent,
                                c = a.bodyB.parent;
                            if (!(s.isSleeping && c.isSleeping || s.isStatic || c.isStatic) && (s.isSleeping || c.isSleeping)) {
                                var l = s.isSleeping && !s.isStatic ? s : c,
                                    u = l === s ? c : s;
                                !l.isStatic && u.motion > n._motionWakeThreshold * i && n.set(l, !1)
                            }
                        }
                    }
                }, n.set = function(e, t) {
                    var n = e.isSleeping;
                    t ? (e.isSleeping = !0, e.sleepCounter = e.sleepThreshold, e.positionImpulse.x = 0, e.positionImpulse.y = 0, e.positionPrev.x = e.position.x, e.positionPrev.y = e.position.y, e.anglePrev = e.angle, e.speed = 0, e.angularSpeed = 0, e.motion = 0, n || i.trigger(e, "sleepStart")) : (e.isSleeping = !1, e.sleepCounter = 0, n && i.trigger(e, "sleepEnd"))
                }
            }()
        }, {
            "./Events": 16
        }],
        23: [function(e, t) {
            (function(n) {
                var i = {};
                t.exports = i;
                var r = e("../geometry/Vertices"),
                    o = e("../core/Common"),
                    a = e("../body/Body"),
                    s = e("../geometry/Bounds"),
                    c = e("../geometry/Vector"),
                    l = "undefined" != typeof window ? window.decomp : "undefined" != typeof n ? n.decomp : null;
                ! function() {
                    i.rectangle = function(e, t, n, i, s) {
                        s = s || {};
                        var c = {
                            label: "Rectangle Body",
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: r.fromPath("L 0 0 L " + n + " 0 L " + n + " " + i + " L 0 " + i)
                        };
                        if (s.chamfer) {
                            var l = s.chamfer;
                            c.vertices = r.chamfer(c.vertices, l.radius, l.quality, l.qualityMin, l.qualityMax), delete s.chamfer
                        }
                        return a.create(o.extend({}, c, s))
                    }, i.trapezoid = function(e, t, n, i, s, c) {
                        c = c || {}, s *= .5;
                        var l, u = (1 - 2 * s) * n,
                            h = n * s,
                            p = h + u,
                            d = p + h;
                        l = .5 > s ? "L 0 0 L " + h + " " + -i + " L " + p + " " + -i + " L " + d + " 0" : "L 0 0 L " + p + " " + -i + " L " + d + " 0";
                        var f = {
                            label: "Trapezoid Body",
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: r.fromPath(l)
                        };
                        if (c.chamfer) {
                            var m = c.chamfer;
                            f.vertices = r.chamfer(f.vertices, m.radius, m.quality, m.qualityMin, m.qualityMax), delete c.chamfer
                        }
                        return a.create(o.extend({}, f, c))
                    }, i.circle = function(e, t, n, r, a) {
                        r = r || {};
                        var s = {
                            label: "Circle Body",
                            circleRadius: n
                        };
                        a = a || 25;
                        var c = Math.ceil(Math.max(10, Math.min(a, n)));
                        return c % 2 === 1 && (c += 1), i.polygon(e, t, c, n, o.extend({}, s, r))
                    }, i.polygon = function(e, t, n, s, c) {
                        if (c = c || {}, 3 > n) return i.circle(e, t, s, c);
                        for (var l = 2 * Math.PI / n, u = "", h = .5 * l, p = 0; n > p; p += 1) {
                            var d = h + p * l,
                                f = Math.cos(d) * s,
                                m = Math.sin(d) * s;
                            u += "L " + f.toFixed(3) + " " + m.toFixed(3) + " "
                        }
                        var v = {
                            label: "Polygon Body",
                            position: {
                                x: e,
                                y: t
                            },
                            vertices: r.fromPath(u)
                        };
                        if (c.chamfer) {
                            var g = c.chamfer;
                            v.vertices = r.chamfer(v.vertices, g.radius, g.quality, g.qualityMin, g.qualityMax), delete c.chamfer
                        }
                        return a.create(o.extend({}, v, c))
                    }, i.fromVertices = function(e, t, n, i, u, h, p) {
                        var d, f, m, v, g, y, x, b, w;
                        for (i = i || {}, f = [], u = "undefined" != typeof u ? u : !1, h = "undefined" != typeof h ? h : .01, p = "undefined" != typeof p ? p : 10, l || o.warn("Bodies.fromVertices: poly-decomp.js required. Could not decompose vertices. Fallback to convex hull."), o.isArray(n[0]) || (n = [n]), b = 0; b < n.length; b += 1)
                            if (v = n[b], m = r.isConvex(v), m || !l) v = m ? r.clockwiseSort(v) : r.hull(v), f.push({
                                position: {
                                    x: e,
                                    y: t
                                },
                                vertices: v
                            });
                            else {
                                var _ = v.map(function(e) {
                                    return [e.x, e.y]
                                });
                                l.makeCCW(_), h !== !1 && l.removeCollinearPoints(_, h);
                                var M = l.quickDecomp(_);
                                for (g = 0; g < M.length; g++) {
                                    var T = M[g],
                                        E = T.map(function(e) {
                                            return {
                                                x: e[0],
                                                y: e[1]
                                            }
                                        });
                                    p > 0 && r.area(E) < p || f.push({
                                        position: r.centre(E),
                                        vertices: E
                                    })
                                }
                            } for (g = 0; g < f.length; g++) f[g] = a.create(o.extend(f[g], i));
                        if (u) {
                            var S = 5;
                            for (g = 0; g < f.length; g++) {
                                var C = f[g];
                                for (y = g + 1; y < f.length; y++) {
                                    var A = f[y];
                                    if (s.overlaps(C.bounds, A.bounds)) {
                                        var P = C.vertices,
                                            R = A.vertices;
                                        for (x = 0; x < C.vertices.length; x++)
                                            for (w = 0; w < A.vertices.length; w++) {
                                                var L = c.magnitudeSquared(c.sub(P[(x + 1) % P.length], R[w])),
                                                    I = c.magnitudeSquared(c.sub(P[x], R[(w + 1) % R.length]));
                                                S > L && S > I && (P[x].isInternal = !0, R[w].isInternal = !0)
                                            }
                                    }
                                }
                            }
                        }
                        return f.length > 1 ? (d = a.create(o.extend({
                            parts: f.slice(0)
                        }, i)), a.setPosition(d, {
                            x: e,
                            y: t
                        }), d) : f[0]
                    }
                }()
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "../body/Body": 1,
            "../core/Common": 14,
            "../geometry/Bounds": 26,
            "../geometry/Vector": 28,
            "../geometry/Vertices": 29
        }],
        24: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../body/Composite"),
                r = e("../constraint/Constraint"),
                o = e("../core/Common"),
                a = e("../body/Body"),
                s = e("./Bodies");
            ! function() {
                n.stack = function(e, t, n, r, o, s, c) {
                    for (var l, u = i.create({
                            label: "Stack"
                        }), h = e, p = t, d = 0, f = 0; r > f; f++) {
                        for (var m = 0, v = 0; n > v; v++) {
                            var g = c(h, p, v, f, l, d);
                            if (g) {
                                var y = g.bounds.max.y - g.bounds.min.y,
                                    x = g.bounds.max.x - g.bounds.min.x;
                                y > m && (m = y), a.translate(g, {
                                    x: .5 * x,
                                    y: .5 * y
                                }), h = g.bounds.max.x + o, i.addBody(u, g), l = g, d += 1
                            } else h += o
                        }
                        p += m + s, h = e
                    }
                    return u
                }, n.chain = function(e, t, n, a, s, c) {
                    for (var l = e.bodies, u = 1; u < l.length; u++) {
                        var h = l[u - 1],
                            p = l[u],
                            d = h.bounds.max.y - h.bounds.min.y,
                            f = h.bounds.max.x - h.bounds.min.x,
                            m = p.bounds.max.y - p.bounds.min.y,
                            v = p.bounds.max.x - p.bounds.min.x,
                            g = {
                                bodyA: h,
                                pointA: {
                                    x: f * t,
                                    y: d * n
                                },
                                bodyB: p,
                                pointB: {
                                    x: v * a,
                                    y: m * s
                                }
                            },
                            y = o.extend(g, c);
                        i.addConstraint(e, r.create(y))
                    }
                    return e.label += " Chain", e
                }, n.mesh = function(e, t, n, a, s) {
                    var c, l, u, h, p, d = e.bodies;
                    for (c = 0; n > c; c++) {
                        for (l = 1; t > l; l++) u = d[l - 1 + c * t], h = d[l + c * t], i.addConstraint(e, r.create(o.extend({
                            bodyA: u,
                            bodyB: h
                        }, s)));
                        if (c > 0)
                            for (l = 0; t > l; l++) u = d[l + (c - 1) * t], h = d[l + c * t], i.addConstraint(e, r.create(o.extend({
                                bodyA: u,
                                bodyB: h
                            }, s))), a && l > 0 && (p = d[l - 1 + (c - 1) * t], i.addConstraint(e, r.create(o.extend({
                                bodyA: p,
                                bodyB: h
                            }, s)))), a && t - 1 > l && (p = d[l + 1 + (c - 1) * t], i.addConstraint(e, r.create(o.extend({
                                bodyA: p,
                                bodyB: h
                            }, s))))
                    }
                    return e.label += " Mesh", e
                }, n.pyramid = function(e, t, i, r, o, s, c) {
                    return n.stack(e, t, i, r, o, s, function(t, n, s, l, u, h) {
                        var p = Math.min(r, Math.ceil(i / 2)),
                            d = u ? u.bounds.max.x - u.bounds.min.x : 0;
                        if (!(l > p)) {
                            l = p - l;
                            var f = l,
                                m = i - 1 - l;
                            if (!(f > s || s > m)) {
                                1 === h && a.translate(u, {
                                    x: (s + (i % 2 === 1 ? 1 : -1)) * d,
                                    y: 0
                                });
                                var v = u ? s * d : 0;
                                return c(e + v + s * o, n, s, l, u, h)
                            }
                        }
                    })
                }, n.newtonsCradle = function(e, t, n, o, a) {
                    for (var c = i.create({
                            label: "Newtons Cradle"
                        }), l = 0; n > l; l++) {
                        var u = 1.9,
                            h = s.circle(e + l * (o * u), t + a, o, {
                                inertia: 1 / 0,
                                restitution: 1,
                                friction: 0,
                                frictionAir: 1e-4,
                                slop: 1
                            }),
                            p = r.create({
                                pointA: {
                                    x: e + l * (o * u),
                                    y: t
                                },
                                bodyB: h
                            });
                        i.addBody(c, h), i.addConstraint(c, p)
                    }
                    return c
                }, n.car = function(e, t, n, o, c) {
                    var l = a.nextGroup(!0),
                        u = -20,
                        h = .5 * -n + u,
                        p = .5 * n - u,
                        d = 0,
                        f = i.create({
                            label: "Car"
                        }),
                        m = s.trapezoid(e, t, n, o, .3, {
                            collisionFilter: {
                                group: l
                            },
                            friction: .01,
                            chamfer: {
                                radius: 10
                            }
                        }),
                        v = s.circle(e + h, t + d, c, {
                            collisionFilter: {
                                group: l
                            },
                            friction: .8,
                            density: .01
                        }),
                        g = s.circle(e + p, t + d, c, {
                            collisionFilter: {
                                group: l
                            },
                            friction: .8,
                            density: .01
                        }),
                        y = r.create({
                            bodyA: m,
                            pointA: {
                                x: h,
                                y: d
                            },
                            bodyB: v,
                            stiffness: .2,
                            render: {
                                lineWidth: 0
                            }
                        }),
                        x = r.create({
                            bodyA: m,
                            pointA: {
                                x: p,
                                y: d
                            },
                            bodyB: g,
                            stiffness: .2,
                            render: {
                                lineWidth: 0
                            }
                        });
                    return i.addBody(f, m), i.addBody(f, v), i.addBody(f, g), i.addConstraint(f, y), i.addConstraint(f, x), f
                }, n.softBody = function(e, t, i, r, a, c, l, u, h, p) {
                    h = o.extend({
                        inertia: 1 / 0
                    }, h), p = o.extend({
                        stiffness: .4
                    }, p);
                    var d = n.stack(e, t, i, r, a, c, function(e, t) {
                        return s.circle(e, t, u, h)
                    });
                    return n.mesh(d, i, r, l, p), d.label = "Soft Body", d
                }
            }()
        }, {
            "../body/Body": 1,
            "../body/Composite": 2,
            "../constraint/Constraint": 12,
            "../core/Common": 14,
            "./Bodies": 23
        }],
        25: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../geometry/Vector"),
                r = e("../core/Common");
            ! function() {
                n.fromVertices = function(e) {
                    for (var t = {}, n = 0; n < e.length; n++) {
                        var o = (n + 1) % e.length,
                            a = i.normalise({
                                x: e[o].y - e[n].y,
                                y: e[n].x - e[o].x
                            }),
                            s = 0 === a.y ? 1 / 0 : a.x / a.y;
                        s = s.toFixed(3).toString(), t[s] = a
                    }
                    return r.values(t)
                }, n.rotate = function(e, t) {
                    if (0 !== t)
                        for (var n = Math.cos(t), i = Math.sin(t), r = 0; r < e.length; r++) {
                            var o, a = e[r];
                            o = a.x * n - a.y * i, a.y = a.x * i + a.y * n, a.x = o
                        }
                }
            }()
        }, {
            "../core/Common": 14,
            "../geometry/Vector": 28
        }],
        26: [function(e, t) {
            var n = {};
            t.exports = n,
                function() {
                    n.create = function(e) {
                        var t = {
                            min: {
                                x: 0,
                                y: 0
                            },
                            max: {
                                x: 0,
                                y: 0
                            }
                        };
                        return e && n.update(t, e), t
                    }, n.update = function(e, t, n) {
                        e.min.x = 1 / 0, e.max.x = -(1 / 0), e.min.y = 1 / 0, e.max.y = -(1 / 0);
                        for (var i = 0; i < t.length; i++) {
                            var r = t[i];
                            r.x > e.max.x && (e.max.x = r.x), r.x < e.min.x && (e.min.x = r.x), r.y > e.max.y && (e.max.y = r.y), r.y < e.min.y && (e.min.y = r.y)
                        }
                        n && (n.x > 0 ? e.max.x += n.x : e.min.x += n.x, n.y > 0 ? e.max.y += n.y : e.min.y += n.y)
                    }, n.contains = function(e, t) {
                        return t.x >= e.min.x && t.x <= e.max.x && t.y >= e.min.y && t.y <= e.max.y
                    }, n.overlaps = function(e, t) {
                        return e.min.x <= t.max.x && e.max.x >= t.min.x && e.max.y >= t.min.y && e.min.y <= t.max.y
                    }, n.translate = function(e, t) {
                        e.min.x += t.x, e.max.x += t.x, e.min.y += t.y, e.max.y += t.y
                    }, n.shift = function(e, t) {
                        var n = e.max.x - e.min.x,
                            i = e.max.y - e.min.y;
                        e.min.x = t.x, e.max.x = t.x + n, e.min.y = t.y, e.max.y = t.y + i
                    }
                }()
        }, {}],
        27: [function(e, t) {
            var n = {};
            t.exports = n;
            e("../geometry/Bounds");
            ! function() {
                n.pathToVertices = function(t, n) {
                    var i, r, o, a, s, c, l, u, h, p, d, f, m = [],
                        v = 0,
                        g = 0,
                        y = 0;
                    n = n || 15;
                    var x = function(e, t, n) {
                            var i = n % 2 === 1 && n > 1;
                            if (!h || e != h.x || t != h.y) {
                                h && i ? (d = h.x, f = h.y) : (d = 0, f = 0);
                                var r = {
                                    x: d + e,
                                    y: f + t
                                };
                                (i || !h) && (h = r), m.push(r), g = d + e, y = f + t
                            }
                        },
                        b = function(e) {
                            var t = e.pathSegTypeAsLetter.toUpperCase();
                            if ("Z" !== t) {
                                switch (t) {
                                    case "M":
                                    case "L":
                                    case "T":
                                    case "C":
                                    case "S":
                                    case "Q":
                                        g = e.x, y = e.y;
                                        break;
                                    case "H":
                                        g = e.x;
                                        break;
                                    case "V":
                                        y = e.y
                                }
                                x(g, y, e.pathSegType)
                            }
                        };
                    for (e(t), o = t.getTotalLength(), c = [], i = 0; i < t.pathSegList.numberOfItems; i += 1) c.push(t.pathSegList.getItem(i));
                    for (l = c.concat(); o > v;) {
                        if (p = t.getPathSegAtLength(v), s = c[p], s != u) {
                            for (; l.length && l[0] != s;) b(l.shift());
                            u = s
                        }
                        switch (s.pathSegTypeAsLetter.toUpperCase()) {
                            case "C":
                            case "T":
                            case "S":
                            case "Q":
                            case "A":
                                a = t.getPointAtLength(v), x(a.x, a.y, 0)
                        }
                        v += n
                    }
                    for (i = 0, r = l.length; r > i; ++i) b(l[i]);
                    return m
                };
                var e = function(e) {
                    for (var t, n, i, r, o, a, s = e.pathSegList, c = 0, l = 0, u = s.numberOfItems, h = 0; u > h; ++h) {
                        var p = s.getItem(h),
                            d = p.pathSegTypeAsLetter;
                        if (/[MLHVCSQTA]/.test(d)) "x" in p && (c = p.x), "y" in p && (l = p.y);
                        else switch ("x1" in p && (i = c + p.x1), "x2" in p && (o = c + p.x2), "y1" in p && (r = l + p.y1), "y2" in p && (a = l + p.y2), "x" in p && (c += p.x), "y" in p && (l += p.y), d) {
                            case "m":
                                s.replaceItem(e.createSVGPathSegMovetoAbs(c, l), h);
                                break;
                            case "l":
                                s.replaceItem(e.createSVGPathSegLinetoAbs(c, l), h);
                                break;
                            case "h":
                                s.replaceItem(e.createSVGPathSegLinetoHorizontalAbs(c), h);
                                break;
                            case "v":
                                s.replaceItem(e.createSVGPathSegLinetoVerticalAbs(l), h);
                                break;
                            case "c":
                                s.replaceItem(e.createSVGPathSegCurvetoCubicAbs(c, l, i, r, o, a), h);
                                break;
                            case "s":
                                s.replaceItem(e.createSVGPathSegCurvetoCubicSmoothAbs(c, l, o, a), h);
                                break;
                            case "q":
                                s.replaceItem(e.createSVGPathSegCurvetoQuadraticAbs(c, l, i, r), h);
                                break;
                            case "t":
                                s.replaceItem(e.createSVGPathSegCurvetoQuadraticSmoothAbs(c, l), h);
                                break;
                            case "a":
                                s.replaceItem(e.createSVGPathSegArcAbs(c, l, p.r1, p.r2, p.angle, p.largeArcFlag, p.sweepFlag), h);
                                break;
                            case "z":
                            case "Z":
                                c = t, l = n
                        }("M" == d || "m" == d) && (t = c, n = l)
                    }
                }
            }()
        }, {
            "../geometry/Bounds": 26
        }],
        28: [function(e, t) {
            var n = {};
            t.exports = n,
                function() {
                    n.create = function(e, t) {
                        return {
                            x: e || 0,
                            y: t || 0
                        }
                    }, n.clone = function(e) {
                        return {
                            x: e.x,
                            y: e.y
                        }
                    }, n.magnitude = function(e) {
                        return Math.sqrt(e.x * e.x + e.y * e.y)
                    }, n.magnitudeSquared = function(e) {
                        return e.x * e.x + e.y * e.y
                    }, n.rotate = function(e, t) {
                        var n = Math.cos(t),
                            i = Math.sin(t);
                        return {
                            x: e.x * n - e.y * i,
                            y: e.x * i + e.y * n
                        }
                    }, n.rotateAbout = function(e, t, n, i) {
                        var r = Math.cos(t),
                            o = Math.sin(t);
                        i || (i = {});
                        var a = n.x + ((e.x - n.x) * r - (e.y - n.y) * o);
                        return i.y = n.y + ((e.x - n.x) * o + (e.y - n.y) * r), i.x = a, i
                    }, n.normalise = function(e) {
                        var t = n.magnitude(e);
                        return 0 === t ? {
                            x: 0,
                            y: 0
                        } : {
                            x: e.x / t,
                            y: e.y / t
                        }
                    }, n.dot = function(e, t) {
                        return e.x * t.x + e.y * t.y
                    }, n.cross = function(e, t) {
                        return e.x * t.y - e.y * t.x
                    }, n.cross3 = function(e, t, n) {
                        return (t.x - e.x) * (n.y - e.y) - (t.y - e.y) * (n.x - e.x)
                    }, n.add = function(e, t, n) {
                        return n || (n = {}), n.x = e.x + t.x, n.y = e.y + t.y, n
                    }, n.sub = function(e, t, n) {
                        return n || (n = {}), n.x = e.x - t.x, n.y = e.y - t.y, n
                    }, n.mult = function(e, t) {
                        return {
                            x: e.x * t,
                            y: e.y * t
                        }
                    }, n.div = function(e, t) {
                        return {
                            x: e.x / t,
                            y: e.y / t
                        }
                    }, n.perp = function(e, t) {
                        return t = t === !0 ? -1 : 1, {
                            x: t * -e.y,
                            y: t * e.x
                        }
                    }, n.neg = function(e) {
                        return {
                            x: -e.x,
                            y: -e.y
                        }
                    }, n.angle = function(e, t) {
                        return Math.atan2(t.y - e.y, t.x - e.x)
                    }, n._temp = [n.create(), n.create(), n.create(), n.create(), n.create(), n.create()]
                }()
        }, {}],
        29: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../geometry/Vector"),
                r = e("../core/Common");
            ! function() {
                n.create = function(e, t) {
                    for (var n = [], i = 0; i < e.length; i++) {
                        var r = e[i],
                            o = {
                                x: r.x,
                                y: r.y,
                                index: i,
                                body: t,
                                isInternal: !1
                            };
                        n.push(o)
                    }
                    return n
                }, n.fromPath = function(e, t) {
                    var i = /L?\s*([\-\d\.e]+)[\s,]*([\-\d\.e]+)*/gi,
                        r = [];
                    return e.replace(i, function(e, t, n) {
                        r.push({
                            x: parseFloat(t),
                            y: parseFloat(n)
                        })
                    }), n.create(r, t)
                }, n.centre = function(e) {
                    for (var t, r, o, a = n.area(e, !0), s = {
                            x: 0,
                            y: 0
                        }, c = 0; c < e.length; c++) o = (c + 1) % e.length, t = i.cross(e[c], e[o]), r = i.mult(i.add(e[c], e[o]), t), s = i.add(s, r);
                    return i.div(s, 6 * a)
                }, n.mean = function(e) {
                    for (var t = {
                            x: 0,
                            y: 0
                        }, n = 0; n < e.length; n++) t.x += e[n].x, t.y += e[n].y;
                    return i.div(t, e.length)
                }, n.area = function(e, t) {
                    for (var n = 0, i = e.length - 1, r = 0; r < e.length; r++) n += (e[i].x - e[r].x) * (e[i].y + e[r].y), i = r;
                    return t ? n / 2 : Math.abs(n) / 2
                }, n.inertia = function(e, t) {
                    for (var n, r, o = 0, a = 0, s = e, c = 0; c < s.length; c++) r = (c + 1) % s.length, n = Math.abs(i.cross(s[r], s[c])), o += n * (i.dot(s[r], s[r]) + i.dot(s[r], s[c]) + i.dot(s[c], s[c])), a += n;
                    return t / 6 * (o / a)
                }, n.translate = function(e, t, n) {
                    var i;
                    if (n)
                        for (i = 0; i < e.length; i++) e[i].x += t.x * n, e[i].y += t.y * n;
                    else
                        for (i = 0; i < e.length; i++) e[i].x += t.x, e[i].y += t.y;
                    return e
                }, n.rotate = function(e, t, n) {
                    if (0 !== t) {
                        for (var i = Math.cos(t), r = Math.sin(t), o = 0; o < e.length; o++) {
                            var a = e[o],
                                s = a.x - n.x,
                                c = a.y - n.y;
                            a.x = n.x + (s * i - c * r), a.y = n.y + (s * r + c * i)
                        }
                        return e
                    }
                }, n.contains = function(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n],
                            r = e[(n + 1) % e.length];
                        if ((t.x - i.x) * (r.y - i.y) + (t.y - i.y) * (i.x - r.x) > 0) return !1
                    }
                    return !0
                }, n.scale = function(e, t, r, o) {
                    if (1 === t && 1 === r) return e;
                    o = o || n.centre(e);
                    for (var a, s, c = 0; c < e.length; c++) a = e[c], s = i.sub(a, o), e[c].x = o.x + s.x * t, e[c].y = o.y + s.y * r;
                    return e
                }, n.chamfer = function(e, t, n, o, a) {
                    t = t || [8], t.length || (t = [t]), n = "undefined" != typeof n ? n : -1, o = o || 2, a = a || 14;
                    for (var s = [], c = 0; c < e.length; c++) {
                        var l = e[c - 1 >= 0 ? c - 1 : e.length - 1],
                            u = e[c],
                            h = e[(c + 1) % e.length],
                            p = t[c < t.length ? c : t.length - 1];
                        if (0 !== p) {
                            var d = i.normalise({
                                    x: u.y - l.y,
                                    y: l.x - u.x
                                }),
                                f = i.normalise({
                                    x: h.y - u.y,
                                    y: u.x - h.x
                                }),
                                m = Math.sqrt(2 * Math.pow(p, 2)),
                                v = i.mult(r.clone(d), p),
                                g = i.normalise(i.mult(i.add(d, f), .5)),
                                y = i.sub(u, i.mult(g, m)),
                                x = n; - 1 === n && (x = 1.75 * Math.pow(p, .32)), x = r.clamp(x, o, a), x % 2 === 1 && (x += 1);
                            for (var b = Math.acos(i.dot(d, f)), w = b / x, _ = 0; x > _; _++) s.push(i.add(i.rotate(v, w * _), y))
                        } else s.push(u)
                    }
                    return s
                }, n.clockwiseSort = function(e) {
                    var t = n.mean(e);
                    return e.sort(function(e, n) {
                        return i.angle(t, e) - i.angle(t, n)
                    }), e
                }, n.isConvex = function(e) {
                    var t, n, i, r, o = 0,
                        a = e.length;
                    if (3 > a) return null;
                    for (t = 0; a > t; t++)
                        if (n = (t + 1) % a, i = (t + 2) % a, r = (e[n].x - e[t].x) * (e[i].y - e[n].y), r -= (e[n].y - e[t].y) * (e[i].x - e[n].x), 0 > r ? o |= 1 : r > 0 && (o |= 2), 3 === o) return !1;
                    return 0 !== o ? !0 : null
                }, n.hull = function(e) {
                    var t, n, r = [],
                        o = [];
                    for (e = e.slice(0), e.sort(function(e, t) {
                            var n = e.x - t.x;
                            return 0 !== n ? n : e.y - t.y
                        }), n = 0; n < e.length; n++) {
                        for (t = e[n]; o.length >= 2 && i.cross3(o[o.length - 2], o[o.length - 1], t) <= 0;) o.pop();
                        o.push(t)
                    }
                    for (n = e.length - 1; n >= 0; n--) {
                        for (t = e[n]; r.length >= 2 && i.cross3(r[r.length - 2], r[r.length - 1], t) <= 0;) r.pop();
                        r.push(t)
                    }
                    return r.pop(), o.pop(), r.concat(o)
                }
            }()
        }, {
            "../core/Common": 14,
            "../geometry/Vector": 28
        }],
        30: [function(e, t) {
            var n = t.exports = e("../core/Matter");
            n.Body = e("../body/Body"), n.Composite = e("../body/Composite"), n.World = e("../body/World"), n.Contact = e("../collision/Contact"), n.Detector = e("../collision/Detector"), n.Grid = e("../collision/Grid"), n.Pairs = e("../collision/Pairs"), n.Pair = e("../collision/Pair"), n.Query = e("../collision/Query"), n.Resolver = e("../collision/Resolver"), n.SAT = e("../collision/SAT"), n.Constraint = e("../constraint/Constraint"), n.MouseConstraint = e("../constraint/MouseConstraint"), n.Common = e("../core/Common"), n.Engine = e("../core/Engine"), n.Events = e("../core/Events"), n.Mouse = e("../core/Mouse"), n.Runner = e("../core/Runner"), n.Sleeping = e("../core/Sleeping"), n.Plugin = e("../core/Plugin"), n.Bodies = e("../factory/Bodies"), n.Composites = e("../factory/Composites"), n.Axes = e("../geometry/Axes"), n.Bounds = e("../geometry/Bounds"), n.Svg = e("../geometry/Svg"), n.Vector = e("../geometry/Vector"), n.Vertices = e("../geometry/Vertices"), n.Render = e("../render/Render"), n.RenderPixi = e("../render/RenderPixi"), n.World.add = n.Composite.add, n.World.remove = n.Composite.remove, n.World.addComposite = n.Composite.addComposite, n.World.addBody = n.Composite.addBody, n.World.addConstraint = n.Composite.addConstraint, n.World.clear = n.Composite.clear, n.Engine.run = n.Runner.run
        }, {
            "../body/Body": 1,
            "../body/Composite": 2,
            "../body/World": 3,
            "../collision/Contact": 4,
            "../collision/Detector": 5,
            "../collision/Grid": 6,
            "../collision/Pair": 7,
            "../collision/Pairs": 8,
            "../collision/Query": 9,
            "../collision/Resolver": 10,
            "../collision/SAT": 11,
            "../constraint/Constraint": 12,
            "../constraint/MouseConstraint": 13,
            "../core/Common": 14,
            "../core/Engine": 15,
            "../core/Events": 16,
            "../core/Matter": 17,
            "../core/Metrics": 18,
            "../core/Mouse": 19,
            "../core/Plugin": 20,
            "../core/Runner": 21,
            "../core/Sleeping": 22,
            "../factory/Bodies": 23,
            "../factory/Composites": 24,
            "../geometry/Axes": 25,
            "../geometry/Bounds": 26,
            "../geometry/Svg": 27,
            "../geometry/Vector": 28,
            "../geometry/Vertices": 29,
            "../render/Render": 31,
            "../render/RenderPixi": 32
        }],
        31: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../core/Common"),
                r = e("../body/Composite"),
                o = e("../geometry/Bounds"),
                a = e("../core/Events"),
                s = e("../collision/Grid"),
                c = e("../geometry/Vector"),
                l = e("../core/Mouse");
            ! function() {
                var e, t;
                "undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                    window.setTimeout(function() {
                        e(i.now())
                    }, 1e3 / 60)
                }, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), n.create = function(e) {
                    var t = {
                            controller: n,
                            engine: null,
                            element: null,
                            canvas: null,
                            mouse: null,
                            frameRequestId: null,
                            options: {
                                width: 800,
                                height: 600,
                                pixelRatio: 1,
                                background: "#18181d",
                                wireframeBackground: "#0f0f13",
                                hasBounds: !!e.bounds,
                                enabled: !0,
                                wireframes: !0,
                                showSleeping: !0,
                                showDebug: !1,
                                showBroadphase: !1,
                                showBounds: !1,
                                showVelocity: !1,
                                showCollisions: !1,
                                showSeparations: !1,
                                showAxes: !1,
                                showPositions: !1,
                                showAngleIndicator: !1,
                                showIds: !1,
                                showShadows: !1,
                                showVertexNumbers: !1,
                                showConvexHulls: !1,
                                showInternalEdges: !1,
                                showMousePosition: !1
                            }
                        },
                        r = i.extend(t, e);
                    return r.canvas && (r.canvas.width = r.options.width || r.canvas.width, r.canvas.height = r.options.height || r.canvas.height), r.mouse = e.mouse, r.engine = e.engine, r.canvas = r.canvas || u(r.options.width, r.options.height), r.context = r.canvas.getContext("2d"), r.textures = {}, r.bounds = r.bounds || {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: r.canvas.width,
                            y: r.canvas.height
                        }
                    }, 1 !== r.options.pixelRatio && n.setPixelRatio(r, r.options.pixelRatio), i.isElement(r.element) ? r.element.appendChild(r.canvas) : i.log("Render.create: options.element was undefined, render.canvas was created but not appended", "warn"), r
                }, n.run = function(t) {
                    ! function i() {
                        t.frameRequestId = e(i), n.world(t)
                    }()
                }, n.stop = function(e) {
                    t(e.frameRequestId)
                }, n.setPixelRatio = function(e, t) {
                    var n = e.options,
                        i = e.canvas;
                    "auto" === t && (t = h(i)), n.pixelRatio = t, i.setAttribute("data-pixel-ratio", t), i.width = n.width * t, i.height = n.height * t, i.style.width = n.width + "px", i.style.height = n.height + "px", e.context.scale(t, t)
                }, n.lookAt = function(e, t, n, r) {
                    r = "undefined" != typeof r ? r : !0, t = i.isArray(t) ? t : [t], n = n || {
                        x: 0,
                        y: 0
                    };
                    for (var o = {
                            min: {
                                x: 1 / 0,
                                y: 1 / 0
                            },
                            max: {
                                x: -(1 / 0),
                                y: -(1 / 0)
                            }
                        }, a = 0; a < t.length; a += 1) {
                        var s = t[a],
                            c = s.bounds ? s.bounds.min : s.min || s.position || s,
                            u = s.bounds ? s.bounds.max : s.max || s.position || s;
                        c && u && (c.x < o.min.x && (o.min.x = c.x), u.x > o.max.x && (o.max.x = u.x), c.y < o.min.y && (o.min.y = c.y), u.y > o.max.y && (o.max.y = u.y))
                    }
                    var h = o.max.x - o.min.x + 2 * n.x,
                        p = o.max.y - o.min.y + 2 * n.y,
                        d = e.canvas.height,
                        f = e.canvas.width,
                        m = f / d,
                        v = h / p,
                        g = 1,
                        y = 1;
                    v > m ? y = v / m : g = m / v, e.options.hasBounds = !0, e.bounds.min.x = o.min.x, e.bounds.max.x = o.min.x + h * g, e.bounds.min.y = o.min.y, e.bounds.max.y = o.min.y + p * y, r && (e.bounds.min.x += .5 * h - h * g * .5, e.bounds.max.x += .5 * h - h * g * .5, e.bounds.min.y += .5 * p - p * y * .5, e.bounds.max.y += .5 * p - p * y * .5), e.bounds.min.x -= n.x, e.bounds.max.x -= n.x, e.bounds.min.y -= n.y, e.bounds.max.y -= n.y, e.mouse && (l.setScale(e.mouse, {
                        x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                        y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                    }), l.setOffset(e.mouse, e.bounds.min))
                }, n.startViewTransform = function(e) {
                    var t = e.bounds.max.x - e.bounds.min.x,
                        n = e.bounds.max.y - e.bounds.min.y,
                        i = t / e.options.width,
                        r = n / e.options.height;
                    e.context.scale(1 / i, 1 / r), e.context.translate(-e.bounds.min.x, -e.bounds.min.y)
                }, n.endViewTransform = function(e) {
                    e.context.setTransform(e.options.pixelRatio, 0, 0, e.options.pixelRatio, 0, 0)
                }, n.world = function(e) {
                    var t, i = e.engine,
                        u = i.world,
                        h = e.canvas,
                        p = e.context,
                        f = e.options,
                        m = r.allBodies(u),
                        v = r.allConstraints(u),
                        g = f.wireframes ? f.wireframeBackground : f.background,
                        y = [],
                        x = [],
                        b = {
                            timestamp: i.timing.timestamp
                        };
                    if (a.trigger(e, "beforeRender", b), e.currentBackground !== g && d(e, g), p.globalCompositeOperation = "source-in", p.fillStyle = "transparent", p.fillRect(0, 0, h.width, h.height), p.globalCompositeOperation = "source-over", f.hasBounds) {
                        for (t = 0; t < m.length; t++) {
                            var w = m[t];
                            o.overlaps(w.bounds, e.bounds) && y.push(w)
                        }
                        for (t = 0; t < v.length; t++) {
                            var _ = v[t],
                                M = _.bodyA,
                                T = _.bodyB,
                                E = _.pointA,
                                S = _.pointB;
                            M && (E = c.add(M.position, _.pointA)), T && (S = c.add(T.position, _.pointB)), E && S && (o.contains(e.bounds, E) || o.contains(e.bounds, S)) && x.push(_)
                        }
                        n.startViewTransform(e), e.mouse && (l.setScale(e.mouse, {
                            x: (e.bounds.max.x - e.bounds.min.x) / e.canvas.width,
                            y: (e.bounds.max.y - e.bounds.min.y) / e.canvas.height
                        }), l.setOffset(e.mouse, e.bounds.min))
                    } else x = v, y = m;
                    !f.wireframes || i.enableSleeping && f.showSleeping ? n.bodies(e, y, p) : (f.showConvexHulls && n.bodyConvexHulls(e, y, p), n.bodyWireframes(e, y, p)), f.showBounds && n.bodyBounds(e, y, p), (f.showAxes || f.showAngleIndicator) && n.bodyAxes(e, y, p), f.showPositions && n.bodyPositions(e, y, p), f.showVelocity && n.bodyVelocity(e, y, p), f.showIds && n.bodyIds(e, y, p), f.showSeparations && n.separations(e, i.pairs.list, p), f.showCollisions && n.collisions(e, i.pairs.list, p), f.showVertexNumbers && n.vertexNumbers(e, y, p), f.showMousePosition && n.mousePosition(e, e.mouse, p), n.constraints(x, p), f.showBroadphase && i.broadphase.controller === s && n.grid(e, i.broadphase, p), f.showDebug && n.debug(e, p), f.hasBounds && n.endViewTransform(e), a.trigger(e, "afterRender", b)
                }, n.debug = function(e, t) {
                    var n = t,
                        i = e.engine,
                        o = i.world,
                        a = i.metrics,
                        s = e.options,
                        c = (r.allBodies(o), "    ");
                    if (i.timing.timestamp - (e.debugTimestamp || 0) >= 500) {
                        var l = "";
                        a.timing && (l += "fps: " + Math.round(a.timing.fps) + c), e.debugString = l, e.debugTimestamp = i.timing.timestamp
                    }
                    if (e.debugString) {
                        n.font = "12px Arial", s.wireframes ? n.fillStyle = "rgba(255,255,255,0.5)" : n.fillStyle = "rgba(0,0,0,0.5)";
                        for (var u = e.debugString.split("\n"), h = 0; h < u.length; h++) n.fillText(u[h], 50, 50 + 18 * h)
                    }
                }, n.constraints = function(e, t) {
                    for (var n = t, i = 0; i < e.length; i++) {
                        var r = e[i];
                        if (r.render.visible && r.pointA && r.pointB) {
                            var o = r.bodyA,
                                a = r.bodyB;
                            o ? (n.beginPath(), n.moveTo(o.position.x + r.pointA.x, o.position.y + r.pointA.y)) : (n.beginPath(), n.moveTo(r.pointA.x, r.pointA.y)), a ? n.lineTo(a.position.x + r.pointB.x, a.position.y + r.pointB.y) : n.lineTo(r.pointB.x, r.pointB.y), r.render.lineWidth && (n.lineWidth = r.render.lineWidth, n.strokeStyle = r.render.strokeStyle, n.stroke())
                        }
                    }
                }, n.bodyShadows = function(e, t, n) {
                    for (var i = n, r = (e.engine, 0); r < t.length; r++) {
                        var o = t[r];
                        if (o.render.visible) {
                            if (o.circleRadius) i.beginPath(), i.arc(o.position.x, o.position.y, o.circleRadius, 0, 2 * Math.PI), i.closePath();
                            else {
                                i.beginPath(), i.moveTo(o.vertices[0].x, o.vertices[0].y);
                                for (var a = 1; a < o.vertices.length; a++) i.lineTo(o.vertices[a].x, o.vertices[a].y);
                                i.closePath()
                            }
                            var s = o.position.x - .5 * e.options.width,
                                c = o.position.y - .2 * e.options.height,
                                l = Math.abs(s) + Math.abs(c);
                            i.shadowColor = "rgba(0,0,0,0.15)", i.shadowOffsetX = .05 * s, i.shadowOffsetY = .05 * c, i.shadowBlur = 1 + 12 * Math.min(1, l / 1e3), i.fill(), i.shadowColor = null, i.shadowOffsetX = null, i.shadowOffsetY = null, i.shadowBlur = null
                        }
                    }
                }, n.bodies = function(e, t, n) {
                    var i, r, o, a, s = n,
                        c = (e.engine, e.options),
                        l = c.showInternalEdges || !c.wireframes;
                    for (o = 0; o < t.length; o++)
                        if (i = t[o], i.render.visible)
                            for (a = i.parts.length > 1 ? 1 : 0; a < i.parts.length; a++)
                                if (r = i.parts[a], r.render.visible) {
                                    if (c.showSleeping && i.isSleeping ? s.globalAlpha = .5 * r.render.opacity : 1 !== r.render.opacity && (s.globalAlpha = r.render.opacity), r.render.sprite && r.render.sprite.texture && !c.wireframes) {
                                        var u = r.render.sprite,
                                            h = p(e, u.texture);
                                        s.translate(r.position.x, r.position.y), s.rotate(r.angle), s.drawImage(h, h.width * -u.xOffset * u.xScale, h.height * -u.yOffset * u.yScale, h.width * u.xScale, h.height * u.yScale), s.rotate(-r.angle), s.translate(-r.position.x, -r.position.y)
                                    } else {
                                        if (r.circleRadius) s.beginPath(), s.arc(r.position.x, r.position.y, r.circleRadius, 0, 2 * Math.PI);
                                        else {
                                            s.beginPath(), s.moveTo(r.vertices[0].x, r.vertices[0].y);
                                            for (var d = 1; d < r.vertices.length; d++) !r.vertices[d - 1].isInternal || l ? s.lineTo(r.vertices[d].x, r.vertices[d].y) : s.moveTo(r.vertices[d].x, r.vertices[d].y), r.vertices[d].isInternal && !l && s.moveTo(r.vertices[(d + 1) % r.vertices.length].x, r.vertices[(d + 1) % r.vertices.length].y);
                                            s.lineTo(r.vertices[0].x, r.vertices[0].y), s.closePath()
                                        }
                                        c.wireframes ? (s.lineWidth = 1, s.strokeStyle = "#bbb", s.stroke()) : (s.fillStyle = r.render.fillStyle, r.render.lineWidth && (s.lineWidth = r.render.lineWidth, s.strokeStyle = r.render.strokeStyle, s.stroke()), s.fill())
                                    }
                                    s.globalAlpha = 1
                                }
                }, n.bodyWireframes = function(e, t, n) {
                    var i, r, o, a, s, c = n,
                        l = e.options.showInternalEdges;
                    for (c.beginPath(), o = 0; o < t.length; o++)
                        if (i = t[o], i.render.visible)
                            for (s = i.parts.length > 1 ? 1 : 0; s < i.parts.length; s++) {
                                for (r = i.parts[s], c.moveTo(r.vertices[0].x, r.vertices[0].y), a = 1; a < r.vertices.length; a++) !r.vertices[a - 1].isInternal || l ? c.lineTo(r.vertices[a].x, r.vertices[a].y) : c.moveTo(r.vertices[a].x, r.vertices[a].y), r.vertices[a].isInternal && !l && c.moveTo(r.vertices[(a + 1) % r.vertices.length].x, r.vertices[(a + 1) % r.vertices.length].y);
                                c.lineTo(r.vertices[0].x, r.vertices[0].y)
                            }
                    c.lineWidth = 1, c.strokeStyle = "#bbb", c.stroke()
                }, n.bodyConvexHulls = function(e, t, n) {
                    var i, r, o, a = n;
                    for (a.beginPath(), r = 0; r < t.length; r++)
                        if (i = t[r], i.render.visible && 1 !== i.parts.length) {
                            for (a.moveTo(i.vertices[0].x, i.vertices[0].y), o = 1; o < i.vertices.length; o++) a.lineTo(i.vertices[o].x, i.vertices[o].y);
                            a.lineTo(i.vertices[0].x, i.vertices[0].y)
                        } a.lineWidth = 1, a.strokeStyle = "rgba(255,255,255,0.2)", a.stroke()
                }, n.vertexNumbers = function(e, t, n) {
                    var i, r, o, a = n;
                    for (i = 0; i < t.length; i++) {
                        var s = t[i].parts;
                        for (o = s.length > 1 ? 1 : 0; o < s.length; o++) {
                            var c = s[o];
                            for (r = 0; r < c.vertices.length; r++) a.fillStyle = "rgba(255,255,255,0.2)", a.fillText(i + "_" + r, c.position.x + .8 * (c.vertices[r].x - c.position.x), c.position.y + .8 * (c.vertices[r].y - c.position.y))
                        }
                    }
                }, n.mousePosition = function(e, t, n) {
                    var i = n;
                    i.fillStyle = "rgba(255,255,255,0.8)", i.fillText(t.position.x + "  " + t.position.y, t.position.x + 5, t.position.y - 5)
                }, n.bodyBounds = function(e, t, n) {
                    var i = n,
                        r = (e.engine, e.options);
                    i.beginPath();
                    for (var o = 0; o < t.length; o++) {
                        var a = t[o];
                        if (a.render.visible)
                            for (var s = t[o].parts, c = s.length > 1 ? 1 : 0; c < s.length; c++) {
                                var l = s[c];
                                i.rect(l.bounds.min.x, l.bounds.min.y, l.bounds.max.x - l.bounds.min.x, l.bounds.max.y - l.bounds.min.y)
                            }
                    }
                    r.wireframes ? i.strokeStyle = "rgba(255,255,255,0.08)" : i.strokeStyle = "rgba(0,0,0,0.1)", i.lineWidth = 1, i.stroke()
                }, n.bodyAxes = function(e, t, n) {
                    var i, r, o, a, s = n,
                        c = (e.engine, e.options);
                    for (s.beginPath(), r = 0; r < t.length; r++) {
                        var l = t[r],
                            u = l.parts;
                        if (l.render.visible)
                            if (c.showAxes)
                                for (o = u.length > 1 ? 1 : 0; o < u.length; o++)
                                    for (i = u[o], a = 0; a < i.axes.length; a++) {
                                        var h = i.axes[a];
                                        s.moveTo(i.position.x, i.position.y), s.lineTo(i.position.x + 20 * h.x, i.position.y + 20 * h.y)
                                    } else
                                        for (o = u.length > 1 ? 1 : 0; o < u.length; o++)
                                            for (i = u[o], a = 0; a < i.axes.length; a++) s.moveTo(i.position.x, i.position.y), s.lineTo((i.vertices[0].x + i.vertices[i.vertices.length - 1].x) / 2, (i.vertices[0].y + i.vertices[i.vertices.length - 1].y) / 2)
                    }
                    c.wireframes ? (s.strokeStyle = "indianred", s.lineWidth = 1) : (s.strokeStyle = "rgba(255, 255, 255, 0.4)", s.globalCompositeOperation = "overlay", s.lineWidth = 2), s.stroke(), s.globalCompositeOperation = "source-over"
                }, n.bodyPositions = function(e, t, n) {
                    var i, r, o, a, s = n,
                        c = (e.engine, e.options);
                    for (s.beginPath(), o = 0; o < t.length; o++)
                        if (i = t[o], i.render.visible)
                            for (a = 0; a < i.parts.length; a++) r = i.parts[a], s.arc(r.position.x, r.position.y, 3, 0, 2 * Math.PI, !1), s.closePath();
                    for (c.wireframes ? s.fillStyle = "indianred" : s.fillStyle = "rgba(0,0,0,0.5)", s.fill(), s.beginPath(), o = 0; o < t.length; o++) i = t[o], i.render.visible && (s.arc(i.positionPrev.x, i.positionPrev.y, 2, 0, 2 * Math.PI, !1), s.closePath());
                    s.fillStyle = "rgba(255,165,0,0.8)", s.fill()
                }, n.bodyVelocity = function(e, t, n) {
                    var i = n;
                    i.beginPath();
                    for (var r = 0; r < t.length; r++) {
                        var o = t[r];
                        o.render.visible && (i.moveTo(o.position.x, o.position.y), i.lineTo(o.position.x + 2 * (o.position.x - o.positionPrev.x), o.position.y + 2 * (o.position.y - o.positionPrev.y)))
                    }
                    i.lineWidth = 3, i.strokeStyle = "cornflowerblue", i.stroke()
                }, n.bodyIds = function(e, t, n) {
                    var i, r, o = n;
                    for (i = 0; i < t.length; i++)
                        if (t[i].render.visible) {
                            var a = t[i].parts;
                            for (r = a.length > 1 ? 1 : 0; r < a.length; r++) {
                                var s = a[r];
                                o.font = "12px Arial", o.fillStyle = "rgba(255,255,255,0.5)", o.fillText(s.id, s.position.x + 10, s.position.y - 10)
                            }
                        }
                }, n.collisions = function(e, t, n) {
                    var i, r, o, a, s = n,
                        c = e.options;
                    for (s.beginPath(), o = 0; o < t.length; o++)
                        if (i = t[o], i.isActive)
                            for (r = i.collision, a = 0; a < i.activeContacts.length; a++) {
                                var l = i.activeContacts[a],
                                    u = l.vertex;
                                s.rect(u.x - 1.5, u.y - 1.5, 3.5, 3.5)
                            }
                    for (c.wireframes ? s.fillStyle = "rgba(255,255,255,0.7)" : s.fillStyle = "orange", s.fill(), s.beginPath(), o = 0; o < t.length; o++)
                        if (i = t[o], i.isActive && (r = i.collision, i.activeContacts.length > 0)) {
                            var h = i.activeContacts[0].vertex.x,
                                p = i.activeContacts[0].vertex.y;
                            2 === i.activeContacts.length && (h = (i.activeContacts[0].vertex.x + i.activeContacts[1].vertex.x) / 2, p = (i.activeContacts[0].vertex.y + i.activeContacts[1].vertex.y) / 2), r.bodyB === r.supports[0].body || r.bodyA.isStatic === !0 ? s.moveTo(h - 8 * r.normal.x, p - 8 * r.normal.y) : s.moveTo(h + 8 * r.normal.x, p + 8 * r.normal.y), s.lineTo(h, p)
                        } c.wireframes ? s.strokeStyle = "rgba(255,165,0,0.7)" : s.strokeStyle = "orange", s.lineWidth = 1, s.stroke()
                }, n.separations = function(e, t, n) {
                    var i, r, o, a, s, c = n,
                        l = e.options;
                    for (c.beginPath(), s = 0; s < t.length; s++)
                        if (i = t[s], i.isActive) {
                            r = i.collision, o = r.bodyA, a = r.bodyB;
                            var u = 1;
                            a.isStatic || o.isStatic || (u = .5), a.isStatic && (u = 0), c.moveTo(a.position.x, a.position.y), c.lineTo(a.position.x - r.penetration.x * u, a.position.y - r.penetration.y * u), u = 1, a.isStatic || o.isStatic || (u = .5), o.isStatic && (u = 0), c.moveTo(o.position.x, o.position.y), c.lineTo(o.position.x + r.penetration.x * u, o.position.y + r.penetration.y * u)
                        } l.wireframes ? c.strokeStyle = "rgba(255,165,0,0.5)" : c.strokeStyle = "orange", c.stroke()
                }, n.grid = function(e, t, n) {
                    var r = n,
                        o = e.options;
                    o.wireframes ? r.strokeStyle = "rgba(255,180,0,0.1)" : r.strokeStyle = "rgba(255,180,0,0.5)", r.beginPath();
                    for (var a = i.keys(t.buckets), s = 0; s < a.length; s++) {
                        var c = a[s];
                        if (!(t.buckets[c].length < 2)) {
                            var l = c.split(/C|R/);
                            r.rect(.5 + parseInt(l[1], 10) * t.bucketWidth, .5 + parseInt(l[2], 10) * t.bucketHeight, t.bucketWidth, t.bucketHeight)
                        }
                    }
                    r.lineWidth = 1, r.stroke()
                }, n.inspector = function(e, t) {
                    var n, i = (e.engine, e.selected),
                        r = e.render,
                        o = r.options;
                    if (o.hasBounds) {
                        var a = r.bounds.max.x - r.bounds.min.x,
                            s = r.bounds.max.y - r.bounds.min.y,
                            c = a / r.options.width,
                            l = s / r.options.height;
                        t.scale(1 / c, 1 / l), t.translate(-r.bounds.min.x, -r.bounds.min.y)
                    }
                    for (var u = 0; u < i.length; u++) {
                        var h = i[u].data;
                        switch (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.9)", t.setLineDash([1, 2]), h.type) {
                            case "body":
                                n = h.bounds, t.beginPath(), t.rect(Math.floor(n.min.x - 3), Math.floor(n.min.y - 3), Math.floor(n.max.x - n.min.x + 6), Math.floor(n.max.y - n.min.y + 6)), t.closePath(), t.stroke();
                                break;
                            case "constraint":
                                var p = h.pointA;
                                h.bodyA && (p = h.pointB), t.beginPath(), t.arc(p.x, p.y, 10, 0, 2 * Math.PI), t.closePath(), t.stroke()
                        }
                        t.setLineDash([]), t.translate(-.5, -.5)
                    }
                    null !== e.selectStart && (t.translate(.5, .5), t.lineWidth = 1, t.strokeStyle = "rgba(255,165,0,0.6)", t.fillStyle = "rgba(255,165,0,0.1)", n = e.selectBounds, t.beginPath(), t.rect(Math.floor(n.min.x), Math.floor(n.min.y), Math.floor(n.max.x - n.min.x), Math.floor(n.max.y - n.min.y)), t.closePath(), t.stroke(), t.fill(), t.translate(-.5, -.5)), o.hasBounds && t.setTransform(1, 0, 0, 1, 0, 0)
                };
                var u = function(e, t) {
                        var n = document.createElement("canvas");
                        return n.width = e, n.height = t, n.oncontextmenu = function() {
                            return !1
                        }, n.onselectstart = function() {
                            return !1
                        }, n
                    },
                    h = function(e) {
                        var t = e.getContext("2d"),
                            n = window.devicePixelRatio || 1,
                            i = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                        return n / i
                    },
                    p = function(e, t) {
                        var n = e.textures[t];
                        return n ? n : (n = e.textures[t] = new Image, n.src = t, n)
                    },
                    d = function(e, t) {
                        var n = t;
                        /(jpg|gif|png)$/.test(t) && (n = "url(" + t + ")"), e.canvas.style.background = n, e.canvas.style.backgroundSize = "contain", e.currentBackground = t
                    }
            }()
        }, {
            "../body/Composite": 2,
            "../collision/Grid": 6,
            "../core/Common": 14,
            "../core/Events": 16,
            "../core/Mouse": 19,
            "../geometry/Bounds": 26,
            "../geometry/Vector": 28
        }],
        32: [function(e, t) {
            var n = {};
            t.exports = n;
            var i = e("../geometry/Bounds"),
                r = e("../body/Composite"),
                o = e("../core/Common"),
                a = e("../core/Events"),
                s = e("../geometry/Vector");
            ! function() {
                var e, t;
                "undefined" != typeof window && (e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
                    window.setTimeout(function() {
                        e(o.now())
                    }, 1e3 / 60)
                }, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame), n.create = function(e) {
                    o.warn("RenderPixi.create: Matter.RenderPixi is deprecated (see docs)");
                    var t = {
                            controller: n,
                            engine: null,
                            element: null,
                            frameRequestId: null,
                            canvas: null,
                            renderer: null,
                            container: null,
                            spriteContainer: null,
                            pixiOptions: null,
                            options: {
                                width: 800,
                                height: 600,
                                background: "#fafafa",
                                wireframeBackground: "#222",
                                hasBounds: !1,
                                enabled: !0,
                                wireframes: !0,
                                showSleeping: !0,
                                showDebug: !1,
                                showBroadphase: !1,
                                showBounds: !1,
                                showVelocity: !1,
                                showCollisions: !1,
                                showAxes: !1,
                                showPositions: !1,
                                showAngleIndicator: !1,
                                showIds: !1,
                                showShadows: !1
                            }
                        },
                        i = o.extend(t, e),
                        r = !i.options.wireframes && "transparent" === i.options.background;
                    return i.pixiOptions = i.pixiOptions || {
                        view: i.canvas,
                        transparent: r,
                        antialias: !0,
                        backgroundColor: e.background
                    }, i.mouse = e.mouse, i.engine = e.engine, i.renderer = i.renderer || new PIXI.WebGLRenderer(i.options.width, i.options.height, i.pixiOptions), i.container = i.container || new PIXI.Container, i.spriteContainer = i.spriteContainer || new PIXI.Container, i.canvas = i.canvas || i.renderer.view, i.bounds = i.bounds || {
                        min: {
                            x: 0,
                            y: 0
                        },
                        max: {
                            x: i.options.width,
                            y: i.options.height
                        }
                    }, a.on(i.engine, "beforeUpdate", function() {
                        n.clear(i)
                    }), i.textures = {}, i.sprites = {}, i.primitives = {}, i.container.addChild(i.spriteContainer), o.isElement(i.element) ? i.element.appendChild(i.canvas) : o.warn('No "render.element" passed, "render.canvas" was not inserted into document.'), i.canvas.oncontextmenu = function() {
                        return !1
                    }, i.canvas.onselectstart = function() {
                        return !1
                    }, i
                }, n.run = function(t) {
                    ! function i() {
                        t.frameRequestId = e(i), n.world(t)
                    }()
                }, n.stop = function(e) {
                    t(e.frameRequestId)
                }, n.clear = function(e) {
                    for (var t = e.container, n = e.spriteContainer; t.children[0];) t.removeChild(t.children[0]);
                    for (; n.children[0];) n.removeChild(n.children[0]);
                    var i = e.sprites["bg-0"];
                    e.textures = {}, e.sprites = {}, e.primitives = {}, e.sprites["bg-0"] = i, i && t.addChildAt(i, 0), e.container.addChild(e.spriteContainer), e.currentBackground = null, t.scale.set(1, 1), t.position.set(0, 0)
                }, n.setBackground = function(e, t) {
                    if (e.currentBackground !== t) {
                        var n = t.indexOf && -1 !== t.indexOf("#"),
                            i = e.sprites["bg-0"];
                        if (n) {
                            var r = o.colorToNumber(t);
                            e.renderer.backgroundColor = r, i && e.container.removeChild(i)
                        } else if (!i) {
                            var a = u(e, t);
                            i = e.sprites["bg-0"] = new PIXI.Sprite(a), i.position.x = 0, i.position.y = 0, e.container.addChildAt(i, 0)
                        }
                        e.currentBackground = t
                    }
                }, n.world = function(e) {
                    var t, o = e.engine,
                        a = o.world,
                        c = e.renderer,
                        l = e.container,
                        u = e.options,
                        h = r.allBodies(a),
                        p = r.allConstraints(a),
                        d = [];
                    u.wireframes ? n.setBackground(e, u.wireframeBackground) : n.setBackground(e, u.background);
                    var f = e.bounds.max.x - e.bounds.min.x,
                        m = e.bounds.max.y - e.bounds.min.y,
                        v = f / e.options.width,
                        g = m / e.options.height;
                    if (u.hasBounds) {
                        for (t = 0; t < h.length; t++) {
                            var y = h[t];
                            y.render.sprite.visible = i.overlaps(y.bounds, e.bounds)
                        }
                        for (t = 0; t < p.length; t++) {
                            var x = p[t],
                                b = x.bodyA,
                                w = x.bodyB,
                                _ = x.pointA,
                                M = x.pointB;
                            b && (_ = s.add(b.position, x.pointA)), w && (M = s.add(w.position, x.pointB)), _ && M && (i.contains(e.bounds, _) || i.contains(e.bounds, M)) && d.push(x)
                        }
                        l.scale.set(1 / v, 1 / g), l.position.set(-e.bounds.min.x * (1 / v), -e.bounds.min.y * (1 / g))
                    } else d = p;
                    for (t = 0; t < h.length; t++) n.body(e, h[t]);
                    for (t = 0; t < d.length; t++) n.constraint(e, d[t]);
                    c.render(l)
                }, n.constraint = function(e, t) {
                    var n = (e.engine, t.bodyA),
                        i = t.bodyB,
                        r = t.pointA,
                        a = t.pointB,
                        s = e.container,
                        c = t.render,
                        l = "c-" + t.id,
                        u = e.primitives[l];
                    return u || (u = e.primitives[l] = new PIXI.Graphics), c.visible && t.pointA && t.pointB ? (-1 === o.indexOf(s.children, u) && s.addChild(u), u.clear(), u.beginFill(0, 0), u.lineStyle(c.lineWidth, o.colorToNumber(c.strokeStyle), 1), n ? u.moveTo(n.position.x + r.x, n.position.y + r.y) : u.moveTo(r.x, r.y), i ? u.lineTo(i.position.x + a.x, i.position.y + a.y) : u.lineTo(a.x, a.y), void u.endFill()) : void u.clear()
                }, n.body = function(e, t) {
                    var n = (e.engine, t.render);
                    if (n.visible)
                        if (n.sprite && n.sprite.texture) {
                            var i = "b-" + t.id,
                                r = e.sprites[i],
                                a = e.spriteContainer;
                            r || (r = e.sprites[i] = c(e, t)), -1 === o.indexOf(a.children, r) && a.addChild(r), r.position.x = t.position.x, r.position.y = t.position.y, r.rotation = t.angle, r.scale.x = n.sprite.xScale || 1, r.scale.y = n.sprite.yScale || 1
                        } else {
                            var s = "b-" + t.id,
                                u = e.primitives[s],
                                h = e.container;
                            u || (u = e.primitives[s] = l(e, t), u.initialAngle = t.angle), -1 === o.indexOf(h.children, u) && h.addChild(u), u.position.x = t.position.x, u.position.y = t.position.y, u.rotation = t.angle - u.initialAngle
                        }
                };
                var c = function(e, t) {
                        var n = t.render,
                            i = n.sprite.texture,
                            r = u(e, i),
                            o = new PIXI.Sprite(r);
                        return o.anchor.x = t.render.sprite.xOffset, o.anchor.y = t.render.sprite.yOffset, o
                    },
                    l = function(e, t) {
                        var n, i = t.render,
                            r = e.options,
                            a = new PIXI.Graphics,
                            s = o.colorToNumber(i.fillStyle),
                            c = o.colorToNumber(i.strokeStyle),
                            l = o.colorToNumber(i.strokeStyle),
                            u = o.colorToNumber("#bbb"),
                            h = o.colorToNumber("#CD5C5C");
                        a.clear();
                        for (var p = t.parts.length > 1 ? 1 : 0; p < t.parts.length; p++) {
                            n = t.parts[p], r.wireframes ? (a.beginFill(0, 0), a.lineStyle(1, u, 1)) : (a.beginFill(s, 1), a.lineStyle(i.lineWidth, c, 1)), a.moveTo(n.vertices[0].x - t.position.x, n.vertices[0].y - t.position.y);
                            for (var d = 1; d < n.vertices.length; d++) a.lineTo(n.vertices[d].x - t.position.x, n.vertices[d].y - t.position.y);
                            a.lineTo(n.vertices[0].x - t.position.x, n.vertices[0].y - t.position.y), a.endFill(), (r.showAngleIndicator || r.showAxes) && (a.beginFill(0, 0), r.wireframes ? a.lineStyle(1, h, 1) : a.lineStyle(1, l), a.moveTo(n.position.x - t.position.x, n.position.y - t.position.y), a.lineTo((n.vertices[0].x + n.vertices[n.vertices.length - 1].x) / 2 - t.position.x, (n.vertices[0].y + n.vertices[n.vertices.length - 1].y) / 2 - t.position.y), a.endFill())
                        }
                        return a
                    },
                    u = function(e, t) {
                        var n = e.textures[t];
                        return n || (n = e.textures[t] = PIXI.Texture.fromImage(t)), n
                    }
            }()
        }, {
            "../body/Composite": 2,
            "../core/Common": 14,
            "../core/Events": 16,
            "../geometry/Bounds": 26,
            "../geometry/Vector": 28
        }]
    }, {}, [30])(30)
});

function resetMatter() {
    $(".fo-canvas canvas").remove(), cancelAnimationFrame(idRAF), width = $(".fo-canvas").innerWidth(), height = $(".fo-canvas").innerHeight(), offset = -1, floatingEngine.events = {}, World.clear(floatingEngine.world), matterEngine.clear(floatingEngine), floatingEngine = matterEngine.create(), floatingEngine.world.gravity.x = 0, floatingEngine.world.gravity.y = 0, mouseConstraint = MouseConstraint.create(floatingEngine, {
        element: document.body
    }), mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel), mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel), mouseConstraint.mouse.element.removeEventListener("mousemove", mouseConstraint.mouse.mousemove), mouseConstraint.mouse.element.removeEventListener("mousedown", mouseConstraint.mouse.mousedown), mouseConstraint.mouse.element.removeEventListener("mouseup", mouseConstraint.mouse.mouseup), mouseConstraint.mouse.element.removeEventListener("touchmove", mouseConstraint.mouse.mousemove), mouseConstraint.mouse.element.removeEventListener("touchstart", mouseConstraint.mouse.mousedown), mouseConstraint.mouse.element.removeEventListener("touchend", mouseConstraint.mouse.mouseup), World.add(floatingEngine.world, mouseConstraint)
}

function destroyMatter() {
    cancelAnimationFrame(idRAF), floatingEngine.events = {}, World.clear(floatingEngine.world), matterEngine.clear(floatingEngine), $(".fo-canvas canvas").remove()
}

function fo_init(e) {
    function t() {
        setTimeout(function() {
            idRAF = requestAnimationFrame(t.bind(this))
        }, 1e3 / 30)
    }
    resetMatter(), foRender = Render.create({
        element: $(".fo-canvas")[0],
        engine: floatingEngine,
        options: {
            wireframes: !1,
            background: "transparent",
            width: width,
            height: height,
            showDebug: !1,
            showBroadphase: !1,
            showBounds: !1,
            showVelocity: !1,
            showCollisions: !1,
            showSeparations: !1,
            showAxes: !1,
            showPositions: !1,
            showAngleIndicator: !1,
            showIds: !1,
            showShadows: !1,
            showVertexNumbers: !1,
            showConvexHulls: !1,
            showInternalEdges: !1,
            showMousePosition: !1
        }
    }), myWidth = 400, World.add(floatingEngine.world, [Bodies.rectangle(width / 2, height + 200, width, 400, {
        isStatic: !0,
        render: {
            fillStyle: "#FFFFFF"
        }
    }), Bodies.rectangle(width / 2, offset - 200, width, 400, {
        isStatic: !0,
        render: {
            fillStyle: "#FFFFFF"
        }
    }), Bodies.rectangle(offset - 200, height / 2, 400, height, {
        isStatic: !0,
        render: {
            fillStyle: "#000000"
        }
    }), Bodies.rectangle(width - offset + 200, height / 2, 400, height, {
        isStatic: !0,
        render: {
            fillStyle: "#000000"
        }
    })]);
    var n = 20;
    window.innerWidth <= 500 ? n = 8 : window.innerWidth <= 700 ? n = 11 : window.innerWidth <= 1025 ? n = 14 : window.innerWidth <= 1440 && (n = 18), void 0 == e && (canvasFloatingObject = []), create_items(n), matterEngine.run(floatingEngine), Render.run(foRender);
    floatingEngine.world.gravity.y = .5, t()
}

function create_items(e) {
    canvasFloatingObject.splice(e);
    for (var t = -1, n = 0; e > n; n++) void 0 == canvasFloatingObject[n] || canvasFloatingObject[n].position.x > width || canvasFloatingObject[n].position.y > height ? (t++, delay = 50) : delay = 0, setTimeout(createAddItem.bind(null, n), delay * t)
}

function createAddItem(e) {
    (void 0 == canvasFloatingObject[e] || canvasFloatingObject[e].position.x > width || canvasFloatingObject[e].position.y > height) && (positionX = 40 + Math.random() * width - 80, positionY = 40 + 100 * Math.random(), canvasFloatingObject[e] = Bodies.rectangle(positionX, positionY, widthFloatingObject, heightFloatingObject, {
        angle: 0,
        frictionAir: Math.random() / 50,
        restitution: .9,
        render: {
            sprite: {
                texture: textureFloatingObjectpath
            }
        }
    })), World.add(floatingEngine.world, canvasFloatingObject[e])
}

function debounce(e, t, n) {
    var i;
    return function() {
        var r = this,
            o = arguments,
            a = function() {
                i = null, n || e.apply(r, o)
            },
            s = n && !i;
        clearTimeout(i), i = setTimeout(a, t), s && e.apply(r, o)
    }
}

function updateMouseOffset() {
    void 0 != mouseConstraint && Mouse.setOffset(mouseConstraint.mouse, {
        x: 0,
        y: -$(window).scrollTop()
    })
}

function updateColorLineMouseConstrain() {
    void 0 != mouseConstraint && (mouseConstraint.constraint.render.strokeStyle = getComputedStyle(document.body).getPropertyValue("--primary-color"))
}
var matterEngine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Mouse = Matter.Mouse,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites,
    MouseConstraint = Matter.MouseConstraint,
    width, height, offset, mouseConstraint, canvasFloatingObject = [],
    foRender = null,
    floatingEngine = matterEngine.create(),
    idRAF = null;
$(window).scroll(updateMouseOffset), $(window).on("resize", function() {
    $("body").hasClass("popup-capsule-opened") && (height < $(".fo-canvas").innerHeight() || width < $(".fo-canvas").innerWidth() || !isTouchDevice()) && fo_init(!0)
});
