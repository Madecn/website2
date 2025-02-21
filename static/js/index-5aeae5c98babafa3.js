(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[5405, 1006], {
		67127: function(e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
				return n(3682)
			}])
		},
		79412: function(e, t, n) {
			"use strict";
			n.d(t, {
				I: function() {
					return s
				},
				u: function() {
					return c
				}
			});
			var i, a, o = n(58177),
				r = n(99938),
				l = n(27207),
				s = (i = (0, o._)(function(e, t) {
					var n;
					return (0, r.Jh)(this, function(i) {
						switch (i.label) {
							case 0:
								return n = "/nezha/".concat(t || "zh", "/news"), [4, l.Z.get(n, {
									params: e
								})];
							case 1:
								return [2, i.sent()]
						}
					})
				}), function(e, t) {
					return i.apply(this, arguments)
				}),
				c = (a = (0, o._)(function(e, t) {
					var n, i;
					return (0, r.Jh)(this, function(a) {
						switch (a.label) {
							case 0:
								return n = encodeURIComponent(e), i = "/nezha/".concat(t || "zh", "/").concat(n), [4, l.Z.get(i)];
							case 1:
								return [2, a.sent()]
						}
					})
				}), function(e, t) {
					return a.apply(this, arguments)
				})
		},
		51006: function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n(11527),
				a = n(10015),
				o = n.n(a);
			t.default = function(e) {
				var t = e.onClick,
					n = e.btnClassName,
					a = e.btnVariables,
					r = e.arrowWrapperClassName,
					l = e.arrowClassName,
					s = e.btnText,
					c = e.btnTextClassName;
				return (0, i.jsxs)("div", {
					className: "".concat(o().button, " ").concat(n),
					onClick: t,
					style: a,
					children: [s ? (0, i.jsx)("span", {
						className: "".concat(c),
						children: s
					}) : null, (0, i.jsx)("div", {
						className: "".concat(o()["arrow-wrapper"], " ").concat(r),
						children: (0, i.jsx)("div", {
							className: "".concat(o().arrow, " ").concat(l)
						})
					})]
				})
			}
		},
		37533: function(e, t, n) {
			"use strict";
			var i = n(77871),
				a = n(50129),
				o = n(45166),
				r = n(11040),
				l = n(7253),
				s = n(50959),
				c = n(10422),
				u = n(96462),
				d = function(e) {
					(0, a._)(n, e);
					var t = (0, l._)(n);

					function n(e) {
						var a;
						return (0, i._)(this, n), (a = t.call(this, e)).registerImprToComponent = function() {
							var e = a.props,
								t = e.threshold,
								n = e.rootMargin,
								i = e.root;
							a.observer = new IntersectionObserver(a.observerCallBack, {
								threshold: t,
								rootMargin: n,
								root: i
							}), a.observer.observe(a.DomNode)
						}, a.observerCallBack = function(e) {
							e.forEach(function(e) {
								a.singleTracking(e)
							})
						}, a.singleTracking = function(e) {
							var t = a.props,
								n = t.onEnter,
								i = t.onLeave,
								o = t.doImpr;
							a.isItemIn(e) ? (o && a.trackingAction(), null == n || n(e)) : null == i || i(e)
						}, a.trackingAction = function() {
							a.timer && window.clearTimeout(a.timer), a.timer = window.setTimeout(function() {
								var e = a.DomNode.getBoundingClientRect().top;
								if (!(e < -200) && !(e > 800)) {
									var t = a.props,
										n = t.once,
										i = t.trackingInfo,
										l = i.params,
										s = (0, r._)(i, ["params"]);
									(0, u.I)((0, o._)({}, s, l)), a.observer && a.DomNode && n && a.observer.unobserve(a.DomNode)
								}
							}, 300)
						}, a.isItemIn = function(e) {
							var t = a.props.threshold;
							return e.isIntersecting && e.intersectionRatio >= (void 0 === t ? 1 : t)
						}, a.observer = null, a.DomNode = null, a.timer = null, a
					}
					var d = n.prototype;
					return d.componentDidMount = function() {
						this.DomNode = (0, c.findDOMNode)(this), this.DomNode && this.registerImprToComponent()
					}, d.componentWillUnmount = function() {
						this.observer && this.DomNode && this.observer.unobserve(this.DomNode)
					}, d.render = function() {
						return s.Children.only(this.props.children)
					}, n
				}(s.Component);
			d.defaultProps = {
				root: null,
				doImpr: !0,
				threshold: 1,
				rootMargin: "0px",
				trackingInfo: {},
				once: !0,
				onEnter: function() {},
				onLeave: function() {}
			}, t.Z = d
		},
		14749: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return o
				}
			});
			var i = n(55754),
				a = n(50959);

			function o() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = (0, i._)((0, a.useState)(e), 2),
					n = t[0],
					o = t[1],
					r = function() {
						var e = window.innerWidth < 768,
							t = window.innerHeight / 100;
						document.documentElement.style.setProperty("--vh", t + "px"), o(e)
					};
				return (0, a.useEffect)(function() {
					r()
				}, []), {
					isMobile: n,
					detectMobile: r
				}
			}
		},
		51517: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return r
				}
			});
			var i = n(45166),
				a = n(96462),
				o = n(50959);

			function r(e, t) {
				(0, o.useEffect)(function() {
					(0, a.I)((0, i._)({
						event_name: "page_view",
						page: e
					}, t))
				}, [])
			}
		},
		13940: function(e, t, n) {
			"use strict";
			var i = n(50959),
				a = n(20057);
			t.Z = function(e) {
				(0, i.useEffect)(function() {
					var t = (0, a.Z)(function() {
						e()
					}, 200);
					return window.addEventListener("resize", t), window.addEventListener("DOMContentLoaded", t),
						function() {
							window.removeEventListener("resize", t), window.removeEventListener("DOMContentLoaded", t)
						}
				}, [e])
			}
		},
		35108: function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n(11527),
				a = n(91799),
				o = n.n(a);
			t.default = function(e) {
				var t = e.onClick,
					n = e.btnClassName,
					a = e.btnVariables,
					r = e.arrowWrapperClassName,
					l = e.arrowClassName,
					s = e.btnText;
				return (0, i.jsxs)("div", {
					className: "".concat(o().button, " ").concat(n),
					onClick: t,
					style: a,
					children: [s || null, (0, i.jsx)("div", {
						className: "".concat(o()["arrow-wrapper"], " ").concat(r),
						children: (0, i.jsx)("div", {
							className: "".concat(o().arrow, " ").concat(l)
						})
					})]
				})
			}
		},
		10256: function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n(58177),
				a = n(55754),
				o = n(99938),
				r = n(11527),
				l = n(50959),
				s = n(10081),
				c = n.n(s),
				u = n(21243),
				d = n.n(u),
				p = n(50833),
				f = n(38451),
				x = n(27809),
				m = n(37990),
				_ = n(84605),
				b = n(96462),
				h = n(52269),
				v = n.n(h),
				w = n(36396),
				g = n(11047),
				j = n(20057),
				y = function(e) {
					var t, n = e.menu,
						a = e.parentTitle,
						l = e.isShow,
						s = e.page,
						u = e.locale,
						f = e.setIsMenuOpen,
						x = e.isLast,
						m = (0, _.$G)().t,
						h = (0, p.q_)({
							from: {
								opacity: 0,
								maxHeight: "0px"
							},
							to: (t = (0, i._)(function(e) {
								return (0, o.Jh)(this, function(t) {
									switch (t.label) {
										case 0:
											if (!l) return [3, 2];
											return [4, e({
												opacity: 1,
												maxHeight: "2000px",
												config: {
													duration: 300
												}
											})];
										case 1:
											return t.sent(), [3, 4];
										case 2:
											return [4, e({
												opacity: 0,
												maxHeight: "0px",
												config: {
													duration: 300
												}
											})];
										case 3:
											t.sent(), t.label = 4;
										case 4:
											return [2]
									}
								})
							}), function(e) {
								return t.apply(this, arguments)
							}),
							config: {
								tension: 300,
								friction: 30
							}
						});
					return (0, r.jsxs)(p.q.div, {
						style: h,
						className: "overflow-hidden h-full",
						children: [(0, r.jsx)("div", {
							className: "pt-[16px] pb-[2px] flex flex-col gap-[32px]",
							children: n.map(function(e) {
								return (0, r.jsxs)("div", {
									className: "flex flex-col gap-[6px]",
									children: [(0, r.jsxs)("div", {
										className: "text-[16px] text-[#05003866] flex items-center gap-[8px] pt-[2px] pb-[6px] mb-[6px]",
										children: [e.icon && (0, r.jsx)(c(), {
											priority: !0,
											width: 18,
											height: 18,
											src: e.icon,
											alt: m(e.title)
										}), m(e.title)]
									}), (0, r.jsx)("div", {
										className: "flex flex-col gap-[16px]",
										children: e.subMenu.map(function(e) {
											return (0, r.jsxs)(d(), {
												href: e.link,
												locale: u,
												className: "text-[16px] py-[8px] text-[#050038] no-underline flex items-center",
												onClick: function() {
													f(!1), (0, b.I)({
														event_name: "top_nav_click",
														page: s,
														tab_name: a,
														option_btn: e.title,
														jump_link: e.link
													})
												},
												children: [(0, r.jsx)("span", {
													children: m(e.title)
												}), e.isNew && (0, r.jsx)("span", {
													className: "ml-[8px] bg-[#FFFFFF] text-[#050038] text-[10px] px-[8px] py-[2px] rounded-[30px]",
													children: "NEW"
												})]
											}, e.title)
										})
									})]
								}, e.title)
							})
						}), !x && (0, r.jsx)(w.Z, {
							className: "mt-[32px] mb-[24px]"
						})]
					})
				},
				k = function(e) {
					var t = e.setIsMenuOpen;
					return (0, r.jsxs)("label", {
						className: v().burger,
						htmlFor: "burger",
						children: [(0, r.jsx)("input", {
							type: "checkbox",
							id: "burger",
							onChange: function(e) {
								t(e.target.checked)
							}
						}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {}), (0, r.jsx)("span", {})]
					})
				};
			t.default = function(e) {
				var t = e.page,
					n = (0, a._)((0, l.useState)(!1), 2),
					i = n[0],
					o = n[1],
					s = (0, a._)((0, l.useState)("official_website_navigation_tech"), 2),
					u = s[0],
					b = s[1],
					h = (0, a._)((0, l.useState)(!0), 2),
					v = h[0],
					w = h[1],
					N = (0, l.useRef)(0),
					C = (0, m.Z)(),
					L = C.locale,
					E = C.isEnglish,
					T = (0, _.$G)().t,
					I = E ? x.BD : x.JL;
				(0, l.useEffect)(function() {
					var e = (0, j.Z)(function() {
						if (!i) {
							var e = Math.max((0, g.M)(), 0);
							e > N.current ? w(!1) : w(!0), N.current = e
						}
					}, 100);
					return window.addEventListener("scroll", e),
						function() {
							window.removeEventListener("scroll", e)
						}
				}, [i]), (0, l.useEffect)(function() {
					if (i) document.body.style.overflow = "hidden", document.body.style.position = "fixed", document.body.style.width = "100%", document.body.style.top = "-".concat(window.scrollY, "px");
					else {
						var e = document.body.style.top;
						document.body.style.overflow = "", document.body.style.position = "", document.body.style.width = "", document.body.style.top = "", window.scrollTo(0, -1 * parseInt(e || "0"))
					}
				}, [i]);
				var B = (0, p.q_)({
						opacity: i ? 1 : 0,
						display: i ? "block" : "none",
						config: {
							duration: 350
						}
					}),
					H = (0, p.q_)({
						blur: i ? 60 : 0,
						maxHeight: i ? "100%" : "0",
						config: {
							duration: 200
						}
					}),
					M = (0, p.q_)({
						backgroundColor: i ? "transparent" : "#fff",
						delay: i ? 0 : 100,
						immediate: !0
					}),
					S = (0, p.q_)({
						y: v ? 0 : -50,
						config: {
							tension: 300,
							friction: 30
						}
					}),
					D = function(e) {
						b(u === e ? null : e)
					};
				return (0, r.jsxs)(p.q.div, {
					style: {
						transform: S.y.to(function(e) {
							return "translateY(".concat(e, "px)")
						}),
						backdropFilter: H.blur.to(function(e) {
							return "blur(".concat(e, "px)")
						}),
						WebkitBackdropFilter: H.blur.to(function(e) {
							return "blur(".concat(e, "px)")
						}),
						maxHeight: H.maxHeight.to(function(e) {
							return "".concat(e)
						})
					},
					className: "fixed top-0 left-0 w-full h-full z-[100]",
					children: [(0, r.jsxs)(p.q.div, {
						style: M,
						className: "w-full h-[50px] flex items-center justify-between px-[16px]",
						children: [(0, r.jsx)(d(), {
							href: "/",
							className: "no-underline",
							locale: L,
							children: (0, r.jsx)(c(), {
								width: 105,
								height: 24,
								priority: !0,
								src: f.jY,
								alt: "logo"
							})
						}), (0, r.jsx)("div", {
							className: "flex items-center gap-[16px]",
							children: (0, r.jsx)(k, {
								setIsMenuOpen: function(e) {
									o(e), b("official_website_navigation_tech")
								}
							})
						})]
					}), (0, r.jsx)(p.q.div, {
						style: B,
						className: "bg-[transparent] left-0 w-full overflow-auto h-[calc(100vh-50px)] px-[16px] pr-[15.5px] pt-[24px] pb-[80px] menu-container touch-pan-y overscroll-none",
						onTouchMove: function(e) {
							var t = e.currentTarget,
								n = t.scrollTop <= 0,
								i = 1 > Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight),
								a = e.touches[0],
								o = a.clientY - (t.dataset.lastTouchY ? parseFloat(t.dataset.lastTouchY) : a.clientY);
							t.dataset.lastTouchY = a.clientY.toString(), (n && o > 0 || i && o < 0) && e.preventDefault()
						},
						onTouchStart: function(e) {
							e.currentTarget.dataset.lastTouchY = e.touches[0].clientY.toString()
						},
						children: (0, r.jsx)("div", {
							className: "flex flex-col",
							children: I.map(function(e, n) {
								return (0, r.jsxs)("div", {
									className: "border-b border-[#F2F3F5]",
									children: [(0, r.jsxs)("div", {
										className: "flex items-center justify-between py-[16px]",
										onClick: function() {
											return D(e.title)
										},
										children: [(0, r.jsx)("span", {
											className: "text-[18px] text-[#050038]",
											children: T(e.title)
										}), (0, r.jsx)("svg", {
											xmlns: "http://www.w3.org/2000/svg",
											width: "20",
											height: "20",
											viewBox: "0 0 20 20",
											fill: "none",
											children: (0, r.jsx)("path", {
												d: "M3.63604 12.929L10 6.56505L16.364 12.929",
												stroke: "black",
												"stroke-width": "2"
											})
										})]
									}), (0, r.jsx)(y, {
										menu: e.menu,
										parentTitle: e.title,
										isShow: u === e.title,
										page: t,
										locale: L,
										setIsMenuOpen: o,
										isLast: n === I.length - 1
									})]
								}, e.title)
							})
						})
					})]
				})
			}
		},
		3682: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				__N_SSP: function() {
					return eb
				},
				default: function() {
					return eh
				}
			});
			var i = n(11527),
				a = n(55754),
				o = n(90470),
				r = n.n(o);
			n(72862), n(27266);
			var l = n(40162),
				s = n.n(l),
				c = n(45166),
				u = n(2057),
				d = n(50959),
				p = n(97854),
				f = n(71196),
				x = n.n(f),
				m = r()(function() {
					return Promise.resolve().then(n.bind(n, 51006))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [51006]
						}
					}
				}),
				_ = function(e) {
					var t = e.title,
						n = e.subTitle,
						o = e.cardList,
						r = e.width,
						l = e.categoryList,
						s = e.onCategoryChange,
						c = e.isH1Title,
						u = (0, a._)((0, d.useState)(), 2),
						f = u[0],
						_ = u[1],
						b = (0, a._)((0, d.useState)(), 2),
						h = b[0],
						v = b[1];
					return (0, i.jsxs)("div", {
						className: "w-full h-full mx-auto overflow-scroll relative pt-[0px] flex flex-col swiper-no-swiping pb-[120px] select-none",
						children: [(0, i.jsxs)("div", {
							className: "".concat(x()["not-scroll-container"]),
							style: {
								width: "min(calc(".concat(r, "px - 120px), 1552px)")
							},
							children: [(0, i.jsxs)("div", {
								className: "flex align-center justify-between mt-8 mb-6",
								children: [(0, i.jsxs)("div", {
									children: [void 0 !== c && c ? (0, i.jsx)("h1", {
										className: "font-medium text-[28px] text-[#181E25] mb-3",
										children: t
									}) : (0, i.jsx)("h2", {
										className: "font-medium text-[28px] text-[#181E25] mb-3",
										children: t
									}), (0, i.jsx)("p", {
										className: "font-normal text-[16px] text-[#181E25] opacity-50 mb-0",
										children: n
									})]
								}), (0, i.jsxs)("div", {
									className: "flex items-center justify-center",
									children: [(0, i.jsx)(m, {
										btnClassName: "bg-[#fff] w-[32px] h-[32px] rounded-full border-solid border border-[#181E25CC] mr-6 scale-x-[-1]",
										btnVariables: {
											"--secondary-color": "#181E25CC"
										},
										onClick: function() {
											null == h || h.slidePrev()
										}
									}), (0, i.jsx)(m, {
										btnClassName: "bg-[#fff] w-[32px] h-[32px] rounded-full border-solid border border-[#181E25CC]",
										btnVariables: {
											"--secondary-color": "#181E25CC"
										},
										onClick: function() {
											null == h || h.slideNext()
										}
									})]
								})]
							}), l && (null == l ? void 0 : l.length) > 0 && (0, i.jsx)("div", {
								className: "mb-6 flex",
								children: l.map(function(e) {
									return (0, i.jsxs)("div", {
										className: "relative w-[104px] h-[32px] flex items-center justify-center leading-[32px] rounded-3xl border border-solid mr-6 cursor-pointer ".concat(e.value === (null == f ? void 0 : f.value) ? "border-black" : "border-[#F2F2F2]", " hover:border-black group transition-all duration-300"),
										onClick: function() {
											(null == f ? void 0 : f.value) === e.value ? (_(void 0), null == s || s(void 0)) : (_(e), null == s || s(e))
										},
										children: [(0, i.jsx)("span", {
											className: "transition-all duration-300  ".concat(e.value === (null == f ? void 0 : f.value) ? "w-[3px] h-[3px] bg-black rounded-full mr-3" : "")
										}), (0, i.jsx)("span", {
											className: "font-normal text-[#060038] text-[14px]",
											children: e.label
										})]
									}, e.value)
								})
							})]
						}), (0, i.jsxs)(p.tq, {
							direction: "horizontal",
							slidesPerView: "auto",
							spaceBetween: 24,
							simulateTouch: !0,
							allowTouchMove: !0,
							cssMode: !0,
							onSwiper: v,
							className: "w-full",
							wrapperClass: "".concat(x()["scroll-wrapper"], " overflow-y-hidden"),
							children: [(0, i.jsx)(p.o5, {
								className: x().placeholder,
								style: {
									width: "calc((100% - min(".concat(r, "px, 1552px)) / 2 - 24px)")
								}
							}), o.map(function(e, t) {
								return (0, i.jsx)(p.o5, {
									className: "w-auto",
									children: e
								}, t)
							}), (0, i.jsx)(p.o5, {
								className: x().placeholder,
								style: {
									width: "calc((100% - ".concat(r, "px) / 2 - 24px)")
								}
							})]
						})]
					})
				},
				b = n(10081),
				h = n.n(b),
				v = n(84605),
				w = n(96462),
				g = n(37533),
				j = n(24426),
				y = r()(function() {
					return Promise.resolve().then(n.bind(n, 51006))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [51006]
						}
					}
				}),
				k = function(e) {
					var t = e.products,
						n = e.title,
						a = e.subTitle,
						o = e.linkUrl,
						r = e.index,
						l = e.type,
						s = e.url,
						c = e.isNew,
						u = e.titleColor,
						d = e.subTitleColor,
						p = e.topicType,
						f = e.poster,
						x = (0, v.$G)().t,
						m = (0, j.useRouter)();
					return (0, i.jsx)(g.Z, {
						trackingInfo: {
							event_name: "information_bar_view",
							page: "official_home_page",
							params: {
								topic_type: p,
								tab_name: null == t ? void 0 : t.join(","),
								jump_title: n,
								jump_link: o,
								bar_position: r + 1
							}
						},
						children: (0, i.jsxs)("a", {
							className: "cursor-pointer w-[370px] h-[500px] snap-start relative overflow-hidden group rounded-3xl isolate block no-underline text-inherit",
							onClick: function(e) {
								e.preventDefault(), (0, w.I)({
									event_name: "information_bar_click",
									page: "official_home_page",
									topic_type: p,
									tab_name: null == t ? void 0 : t.join(","),
									jump_title: n,
									jump_link: o,
									bar_position: r + 1
								}), o.startsWith("http") ? window.open(o, "_blank") : m.push(o, o, {
									locale: m.locale
								})
							},
							href: o,
							rel: "noopener",
							"aria-label": n,
							children: ["video" === l ? (0, i.jsx)("video", {
								src: s,
								className: "w-full h-full min-w-full min-h-full object-cover group-hover:scale-110 transition-all duration-300",
								autoPlay: !0,
								muted: !0,
								loop: !0,
								poster: f
							}) : (0, i.jsx)(h(), {
								src: s,
								alt: n,
								width: 370,
								height: 500,
								className: "group-hover:scale-110 transition-all duration-300"
							}), c && (0, i.jsx)("div", {
								className: "absolute top-[18px] right-[18px] bg-white font-medium px-2 rounded-[22px] h-[22px] leading-[22px]",
								children: "NEW"
							}), (0, i.jsx)("div", {
								className: "absolute bottom-0 left-0 px-[28px] py-[18px] w-full",
								children: (0, i.jsxs)("div", {
									className: "flex flex-col justify-between h-full",
									children: [(0, i.jsxs)("div", {
										className: "flex justify-between items-center",
										children: [(0, i.jsx)("div", {
											className: "text-[18px] font-medium flex-1 text-ellipsis overflow-hidden whitespace-nowrap text-[".concat(null != u ? u : "#050038", "]"),
											children: x(n)
										}), (0, i.jsx)(y, {
											btnClassName: "bg-[#fff] w-[28px] h-[28px] rounded-full"
										})]
									}), (0, i.jsx)("div", {
										className: "h-[44px] text-[14px] leading-[22px] font-normal mt-[12px] text-ellipsis overflow-hidden line-clamp-2 whitespace-pre-wrap text-[".concat(null != d ? d : "#050038", "]"),
										children: x(a)
									})]
								})
							})]
						})
					})
				},
				N = n(27009),
				C = n(79412),
				L = n(37990),
				E = r()(function() {
					return n.e(5123).then(n.bind(n, 93726))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [93726]
						}
					}
				}),
				T = function(e) {
					var t, n = e.threeBodyData,
						o = (0, a._)((0, d.useState)(), 2),
						r = o[0],
						l = o[1],
						s = (0, a._)((0, d.useState)([]), 2),
						p = s[0],
						f = s[1],
						x = (0, j.useRouter)().locale,
						m = (0, N.Z)(function() {
							return (0, C.I)({
								page: 1
							}, x)
						}).data,
						b = (0, v.$G)("common").t,
						h = (0, L.Z)().isChinese;
					(0, d.useEffect)(function() {
						m && f(function(e) {
							return (0, u._)(e).concat((0, u._)(m.data))
						})
					}, [m]);
					var w = 370 * (t = n ? Math.max(n.techList.length, n.productList.length, n.castList.length) : 4) + (t - 1) * 24;
					return (0, i.jsxs)("div", {
						className: "mt-[52px]",
						children: [(0, i.jsx)(_, {
							title: b("official_website_tech"),
							subTitle: b("official_website_tech_1"),
							width: w,
							isH1Title: !0,
							cardList: ((null == n ? void 0 : n.techList) || []).map(function(e, t) {
								return (0, i.jsx)(k, (0, c._)({
									index: t,
									topicType: "official_website_tech"
								}, e), t)
							})
						}), (0, i.jsx)(_, {
							title: b("official_website_product"),
							subTitle: b("official_website_product_1"),
							width: w,
							cardList: ((null == n ? void 0 : n.productList) || []).filter(function(e) {
								return !r || (e.products || []).includes(r)
							}).map(function(e, t) {
								return (0, i.jsx)(k, (0, c._)({
									index: t,
									topicType: "official_website_product"
								}, e), t)
							}),
							categoryList: [{
								label: b("official_website_product_2"),
								value: "xingye"
							}, {
								label: b("official_website_product_3"),
								value: "hailuo"
							}],
							onCategoryChange: function(e) {
								l(null == e ? void 0 : e.value)
							}
						}), (0, i.jsx)(_, {
							title: b("official_website_case"),
							subTitle: b("official_website_case_1"),
							width: w,
							cardList: ((null == n ? void 0 : n.castList) || []).map(function(e, t) {
								return (0, i.jsx)(k, (0, c._)({
									index: t,
									topicType: "official_website_case"
								}, e), t)
							})
						}), h && (0, i.jsx)(_, {
							title: b("official_website_newspage"),
							subTitle: b("official_website_newspage_1"),
							width: w,
							cardList: p.map(function(e, t) {
								return (0, i.jsx)(E, {
									news: e,
									index: t,
									page: "official_home_page",
									event_name: "information_bar_view",
									topicType: "official_website_newspage",
									click_event_name: "information_bar_click"
								}, t)
							})
						})]
					})
				},
				I = n(20057),
				B = n(11047),
				H = n(78381),
				M = n(98703),
				S = n(10793),
				D = n(36557),
				F = n.n(D),
				P = [{
					bgImg: "https://filecdn.minimax.chat/public/c95db4cd-6c45-4ed2-be9d-6782d2b514a7.png?x-oss-process=image/format,webp",
					title: "official_website_banner1",
					titleClass: "[&]:!text-[130px] [&]:!font-[500] [&]:!tracking-[-3.9px]",
					desc: "official_website_banner1_0",
					descClass: "[&]:!text-[20px] [&]:!font-[380] [&]:!leading-normal [&]:!mb-[21px]",
					style: "product",
					buttons: [{
						text: "official_website_banner1_1",
						detailLink: "https://hailuoai.com/",
						detailLink_en: "https://www.hailuo.ai/"
					}, {
						text: "official_website_banner1_2",
						detailLink: "https://platform.minimaxi.com/document/ChatCompletion%20v2?key=66701d281d57f38758d581d0",
						detailLink_en: "https://intl.minimaxi.com/document/ChatCompletion%20v2?key=66701d281d57f38758d581d0"
					}]
				}, {
					videoSrc: "https://filecdn.minimax.chat/public/8ec97a3b-7195-4975-b655-f78e2da7f1d3.mp4",
					title: "official_website_banner3",
					desc: "official_website_banner3_0",
					detailLink: "https://www.minimaxi.com/s2v-01%E5%8F%91%E5%B8%83",
					detailLink_en: "https://www.minimaxi.com/en/s2v-01-release",
					videoPoster: "https://filecdn.minimax.chat/public/4fe36195-0c31-40c2-9222-954dcb9151c6.png?x-oss-process=image/format,webp"
				}, {
					videoSrc: "https://filecdn.minimax.chat/public/40d8ee02-7fda-4f96-9330-092dcb94ba7e.mp4",
					title: "official_website_banner5",
					desc: "official_website_banner5_0",
					detailLink: "/i2v-01-live-%E5%8F%91%E5%B8%83",
					detailLink_en: "/i2v-01-live-release",
					videoPoster: "https://filecdn.minimax.chat/public/d037a2da-9413-4e6a-bcb2-d9910ded46ed.png?x-oss-process=image/format,webp"
				}, {
					bgImg: "https://filecdn.minimax.chat/public/e808eeb3-4efd-4574-bbea-b0ade60ba935.png?x-oss-process=image/format,webp",
					title: "official_website_banner4",
					desc: "official_website_banner4_0",
					style: "dark",
					marginBottom: 20,
					detailLink: "/t2a-01-hd-%E5%8F%91%E5%B8%83",
					detailLink_en: "/speech-01-hd-release"
				}, {
					bgImg: "https://filecdn.minimax.chat/public/ff2b7d0a-cc5e-461d-84b7-f37e10bc7f94.png?x-oss-process=image/format,webp",
					title: "official_website_banner6",
					desc: "official_website_banner6_0",
					style: "dark",
					marginBottom: 20,
					detailLink: "/%E9%9F%B3%E4%B9%90%E6%A8%A1%E5%9E%8Bmusic-01",
					detailLink_en: "/music-01"
				}],
				A = n(53462),
				Z = n.n(A),
				V = n(51006),
				R = (0, d.forwardRef)(function(e, t) {
					var n = e.show,
						o = e.bgImg,
						r = e.title,
						l = e.desc,
						s = e.style,
						c = void 0 === s ? "default" : s,
						u = e.videoSrc,
						p = e.codeImg,
						f = e.marginBottom,
						x = e.detailLink,
						m = e.detailLink_en,
						_ = e.videoPoster,
						b = e.titleClass,
						g = e.descClass,
						y = e.buttons,
						k = e.setDelay,
						N = e.setIsAutoPlay,
						C = e.setProgress,
						E = e.isFirstVideo,
						T = (0, a._)((0, d.useState)(0), 2),
						I = T[0],
						B = T[1],
						H = (0, a._)((0, d.useState)(!1), 2),
						M = H[0],
						S = H[1],
						D = (0, d.useRef)(null),
						P = (0, v.$G)().t,
						A = (0, j.useRouter)(),
						R = (0, L.Z)().locale,
						W = function() {
							if (u && I && D.current) {
								S(!0);
								try {
									var e;
									null === (e = D.current) || void 0 === e || e.getInternalPlayer().play()
								} catch (e) {}
								setTimeout(function() {
									var e;
									null === (e = D.current) || void 0 === e || e.seekTo(0)
								}, 100)
							}
						};
					return (0, d.useImperativeHandle)(t, function() {
						return {
							replayVideo: W
						}
					}), (0, d.useEffect)(function() {
						if (n) {
							if (u && I) {
								k(I), S(!0);
								try {
									var e;
									null === (e = D.current) || void 0 === e || e.getInternalPlayer().play()
								} catch (e) {}
								setTimeout(function() {
									var e;
									null === (e = D.current) || void 0 === e || e.seekTo(0)
								}, 100)
							} else k(2300), S(!1)
						}
					}, [n]), (0, d.useEffect)(function() {
						I && W()
					}, [I]), (0, i.jsxs)("div", {
						className: "relative flex gap-[46px] justify-center items-center w-full h-full",
						children: [o && (0, i.jsx)(h(), {
							priority: !0,
							src: o,
							alt: "background",
							fill: !0,
							className: "object-cover"
						}), (0, i.jsxs)("div", {
							className: "flex flex-col justify-center items-start z-10\n            ".concat("dark" === c ? "text-black" : "text-white", "\n            ").concat(p ? "max-w-[500px]" : "product" === c ? "max-w-[800px] items-center" : "max-w-[700px]"),
							children: [(0, i.jsx)("span", {
								className: "".concat(p ? "text-[76px]" : "product" === c ? "text-[98px] font-[600] m-0" : "text-[130px]", " font-[500] tracking-[-5px] ").concat(b),
								style: {
									fontFamily: "Poppins",
									marginBottom: f || (p ? 10 : "product" === c ? 20 : -5)
								},
								children: P(r)
							}), (0, i.jsx)("p", {
								className: "text-[20px] leading-[30px] m-0 mb-[21px] whitespace-pre-wrap ".concat("product" === c ? "text-[22px] leading-[33px] text-center mb-[32px]" : "", " ").concat(g),
								children: P(l)
							}), y ? (0, i.jsx)("div", {
								className: "flex gap-[21px]",
								children: y.map(function(e, t) {
									return (0, i.jsx)(V.default, {
										btnText: P(e.text),
										btnTextClassName: "text-[18px] translate-x-[10px] group-hover:translate-x-[6px] transition-all duration-300 ease-in-out",
										btnClassName: "cursor-pointer rounded-full w-[200px] h-[44px] text-[18px] relative group",
										btnVariables: {
											"--primary-color": "dark" === c ? "#000" : "#fff",
											"--secondary-color": "dark" === c ? "#fff" : "#000"
										},
										arrowClassName: "opacity-0 group-hover:opacity-100 group-hover:translate-x-[4px] transition-all duration-300 ease-in-out",
										onClick: function() {
											var t = "en" === R ? e.detailLink_en : e.detailLink;
											t && ((0, w.I)({
												event_name: "banner_click",
												page: "official_home_page",
												banner_title: r,
												jump_link: t,
												banner_type: u ? "video" : "image"
											}), t.startsWith("http") ? window.open(t, "_blank") : A.push(t, t, {
												locale: A.locale
											}))
										}
									}, t)
								})
							}) : (0, i.jsx)(V.default, {
								btnText: P("official_website_banner_button"),
								btnClassName: "cursor-pointer rounded-full p-[10px_18px_10px_20px] text-[13px] leading-[14px]",
								btnVariables: {
									"--primary-color": "dark" === c ? "#000" : "#fff",
									"--secondary-color": "dark" === c ? "#fff" : "#000"
								},
								onClick: function() {
									var e = "en" === R ? m : x;
									e && ((0, w.I)({
										event_name: "banner_click",
										page: "official_home_page",
										banner_title: r,
										jump_link: e,
										banner_type: u ? "video" : "image"
									}), e.startsWith("http") ? window.open(e, "_blank") : A.push(e, e, {
										locale: A.locale
									}))
								}
							})]
						}), p && (0, i.jsx)(h(), {
							priority: !0,
							className: "rounded-[34px] z-10",
							src: p,
							alt: "code",
							width: 433,
							height: 293
						}), u && (0, i.jsx)(F(), {
							ref: D,
							url: u,
							onReady: function(e) {
								B(1e3 * e.getDuration()), E && (k(1e3 * e.getDuration()), C(0)), N(!0)
							},
							className: "absolute ".concat(Z().videoWrapper),
							width: "100%",
							height: "100%",
							playing: M,
							controls: !1,
							muted: !0,
							playsinline: !0,
							config: {
								file: {
									attributes: {
										poster: _
									}
								}
							}
						})]
					})
				}),
				W = function() {
					var e = (0, a._)((0, d.useState)(0), 2),
						t = e[0],
						n = e[1],
						o = (0, a._)((0, d.useState)(0), 2),
						r = o[0],
						l = o[1],
						s = (0, a._)((0, d.useState)(!1), 2),
						u = s[0],
						f = s[1],
						x = (0, a._)((0, d.useState)(2300), 2),
						m = x[0],
						_ = x[1],
						b = (0, a._)((0, d.useState)(), 2),
						h = b[0],
						v = b[1],
						g = (0, d.useRef)([]),
						j = (0, a._)((0, d.useState)(!1), 2),
						y = j[0],
						k = j[1],
						N = (0, L.Z)().locale;
					(0, d.useEffect)(function() {
						h && u && h.autoplay.start()
					}, [u]);
					var C = function(e) {
							null == h || h.slideTo(e)
						},
						E = {
							"--arrow-stroke": "2px",
							"--primary-color": "#00000014",
							"--secondary-color": "#fff",
							opacity: y ? "1" : "0"
						},
						T = "z-20 h-[48px] w-[48px] backdrop-blur-[12px] webkit-backdrop-blur-[12px] transition-opacity duration-300 ease-in-out absolute top-1/2 -translate-y-1/2 rounded-full p-[8px_18px_8px_20px] text-[13px] leading-[14px] hover:bg-[#00000029]";
					return (0, i.jsxs)("div", {
						className: "max-w-[1920px] mx-auto px-[60px] pt-[20px] pb-[32px] overflow-hidden",
						children: [(0, i.jsxs)("div", {
							className: "relative overflow-hidden w-full h-[654px] rounded-[24px]",
							onMouseEnter: function() {
								k(!0)
							},
							onMouseLeave: function() {
								k(!1)
							},
							children: [(0, i.jsxs)("div", {
								children: [(0, i.jsx)(V.default, {
									btnClassName: "".concat(T, " left-[24px] scale-x-[-1]"),
									btnVariables: E,
									onClick: function() {
										null == h || h.slideTo(((null == h ? void 0 : h.realIndex) - 1 + P.length) % P.length)
									}
								}), (0, i.jsx)(V.default, {
									btnClassName: "".concat(T, " right-[24px]"),
									btnVariables: E,
									onClick: function() {
										null == h || h.slideTo(((null == h ? void 0 : h.realIndex) + 1) % P.length)
									}
								})]
							}), (0, i.jsx)(p.tq, {
								onSwiper: v,
								modules: [S.pt, S.xW],
								effect: "fade",
								className: "w-full h-full rounded-[24px] overflow-hidden",
								fadeEffect: {
									crossFade: !0
								},
								autoplay: !!u && {
									delay: m,
									disableOnInteraction: !1
								},
								onAutoplayTimeLeft: function(e, t, n) {
									l(1 - n)
								},
								onRealIndexChange: function(e) {
									var t = P[e.realIndex],
										i = t.title,
										a = t.videoSrc,
										o = t.detailLink,
										r = t.detailLink_en;
									(0, w.I)({
										event_name: "banner_view",
										page: "official_home_page",
										banner_title: i,
										jump_link: "en" === N ? r : o,
										banner_type: a ? "video" : "image"
									}), l(0), n(e.realIndex)
								},
								onResize: function(e) {
									var t;
									null === (t = g.current[e.realIndex]) || void 0 === t || t.replayVideo()
								},
								children: P.map(function(e, n) {
									return (0, i.jsx)(p.o5, {
										children: (0, i.jsx)(R, (0, M._)((0, c._)({}, e), {
											buttons: e.buttons,
											show: n === t,
											setDelay: _,
											setIsAutoPlay: f,
											setProgress: l,
											isFirstVideo: 0 === n && !!e.videoSrc,
											ref: function(e) {
												return g.current[n] = e
											}
										}))
									}, e.title)
								})
							})]
						}), (0, i.jsx)("div", {
							className: "w-full flex justify-center items-center gap-[6px] mt-[24px]",
							children: P.map(function(e, n) {
								return (0, i.jsx)("div", {
									className: "relative overflow-hidden cursor-pointer h-[4px] rounded-[24px] bg-[#E5E6EB] transition-all duration-300 ease-in-out ".concat(n === t ? "w-[48px]" : "w-[16px] hover:bg-[#C9CDD4]"),
									onClick: function() {
										C(n)
									},
									children: n === t && (0, i.jsx)("div", {
										className: "absolute top-0 left-0 h-full bg-[#181E25CC] rounded-[24px]",
										style: {
											width: "".concat(100 * r, "%")
										}
									})
								}, e.title)
							})
						})]
					})
				},
				z = n(51517),
				O = r()(function() {
					return n.e(717).then(n.bind(n, 10717))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [10717]
						}
					}
				}),
				G = r()(function() {
					return Promise.all([n.e(3977), n.e(2787)]).then(n.bind(n, 88716))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [88716]
						}
					}
				}),
				q = function(e) {
					var t = e.threeBodyData;
					(0, z.Z)("official_home_page");
					var n = (0, a._)((0, d.useState)(!1), 2),
						o = n[0],
						r = n[1];
					return (0, d.useEffect)(function() {
						var e = (0, I.Z)(function() {
							r((0, B.M)() > window.innerHeight)
						}, 100);
						return window.addEventListener("scroll", e),
							function() {
								window.removeEventListener("scroll", e)
							}
					}, []), (0, i.jsxs)("main", {
						className: "".concat(s().home, " w-screen md:min-w-[1062px] md:overflow-x-auto"),
						children: [(0, i.jsx)(H.default, {
							page: "official_home_page"
						}), (0, i.jsx)(W, {}), (0, i.jsx)(T, {
							threeBodyData: t
						}), (0, i.jsx)(G, {
							page: "official_home_page"
						}), o && (0, i.jsx)(O, {
							toTop: function() {
								window.scroll({
									behavior: "smooth",
									top: 0
								})
							}
						})]
					})
				},
				Y = n(14749),
				U = n(96153),
				$ = n.n(U),
				J = n(55151),
				K = n.n(J),
				X = function(e) {
					var t = e.title,
						n = e.subTitle,
						o = e.cardList,
						r = e.categoryList,
						l = e.onCategoryChange,
						s = e.isHiTitle,
						c = (0, a._)((0, d.useState)(), 2),
						u = c[0],
						f = c[1];
					return (0, i.jsxs)("div", {
						className: "w-full h-full mx-auto overflow-scroll relative pt-[0px] flex flex-col swiper-no-swiping pl-[16px] pb-[60px] select-none",
						children: [(0, i.jsxs)("div", {
							className: "".concat(K()["not-scroll-container"]),
							children: [(0, i.jsx)("div", {
								className: "flex align-center justify-between mt-5 mb-4",
								children: (0, i.jsxs)("div", {
									children: [void 0 !== s && s ? (0, i.jsx)("h1", {
										className: "font-medium text-[20px] text-[#181E25] mb-[8px]",
										children: t
									}) : (0, i.jsx)("h2", {
										className: "font-medium text-[20px] text-[#181E25] mb-[8px]",
										children: t
									}), (0, i.jsx)("p", {
										className: "font-normal text-[13px] leading-normal text-[#181E25] opacity-50 mb-0 pr-[16px]",
										children: n
									})]
								})
							}), r && (null == r ? void 0 : r.length) > 0 && (0, i.jsx)("div", {
								className: "mb-[16px] flex",
								children: r.map(function(e) {
									return (0, i.jsxs)("div", {
										className: "relative h-[30px] w-[103px] flex items-center justify-center leading-[32px] rounded-[24px] border border-solid mr-[16px] cursor-pointer ".concat(e.value === (null == u ? void 0 : u.value) ? "border-black" : "border-[#F2F2F2]", " group transition-all duration-300"),
										onClick: function() {
											(null == u ? void 0 : u.value) === e.value ? (f(void 0), null == l || l(void 0)) : (f(e), null == l || l(e))
										},
										children: [(0, i.jsx)("span", {
											className: "transition-all duration-300  ".concat(e.value === (null == u ? void 0 : u.value) ? "w-[3px] h-[3px] bg-black rounded-full mr-3" : "")
										}), (0, i.jsx)("span", {
											className: "font-normal text-[#060038] text-[14px]",
											children: e.label
										})]
									}, e.value)
								})
							})]
						}), (0, i.jsx)(p.tq, {
							direction: "horizontal",
							slidesPerView: "auto",
							spaceBetween: 16,
							simulateTouch: !0,
							allowTouchMove: !0,
							cssMode: !0,
							className: "w-full",
							wrapperClass: "".concat(K()["scroll-wrapper"]),
							children: o.map(function(e, t) {
								return (0, i.jsx)(p.o5, {
									className: "w-auto",
									children: (0, i.jsx)("div", {
										className: "".concat(t === o.length - 1 ? "mr-[16px]" : "mr-0"),
										children: e
									})
								}, t)
							})
						})]
					})
				},
				Q = r()(function() {
					return Promise.resolve().then(n.bind(n, 35108))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [35108]
						}
					}
				}),
				ee = function(e) {
					var t = e.products,
						n = e.title,
						a = e.subTitle,
						o = e.linkUrl,
						r = e.index,
						l = e.type,
						s = e.url,
						c = e.isNew,
						u = e.titleColor,
						d = e.subTitleColor,
						p = e.topicType,
						f = e.poster,
						x = (0, v.$G)().t,
						m = (0, j.useRouter)();
					return (0, i.jsx)(g.Z, {
						trackingInfo: {
							event_name: "information_bar_view",
							page: "official_home_page",
							params: {
								topic_type: p,
								tab_name: null == t ? void 0 : t.join(","),
								jump_title: n,
								jump_link: o,
								bar_position: r + 1
							}
						},
						children: (0, i.jsxs)("div", {
							className: "cursor-pointer w-[244px] h-[332px] snap-start relative overflow-hidden group rounded-[16px] isolate",
							onClick: function() {
								(0, w.I)({
									event_name: "information_bar_click",
									page: "official_home_page",
									topic_type: p,
									tab_name: null == t ? void 0 : t.join(","),
									jump_title: n,
									jump_link: o,
									bar_position: r + 1
								}), o.startsWith("http") ? window.open(o, "_blank") : m.push(o, o, {
									locale: m.locale
								})
							},
							children: ["video" === l ? (0, i.jsx)("video", {
								src: s,
								className: "w-full h-full min-w-full min-h-full object-cover",
								autoPlay: !0,
								muted: !0,
								loop: !0,
								poster: f
							}) : (0, i.jsx)(h(), {
								src: s,
								alt: n,
								width: 244,
								height: 332
							}), c && (0, i.jsx)("div", {
								className: "absolute text-[10px] top-[12px] right-[12px] bg-white px-2 rounded-[18px] h-[18px] leading-[18px]",
								children: "NEW"
							}), (0, i.jsx)("div", {
								className: "absolute bottom-0 left-0 px-[16px] py-[16px] w-full",
								children: (0, i.jsxs)("div", {
									className: "flex flex-col justify-between h-full",
									children: [(0, i.jsxs)("div", {
										className: "flex justify-between items-center",
										children: [(0, i.jsx)("div", {
											className: "text-[16px] font-medium flex-1 text-ellipsis overflow-hidden whitespace-nowrap text-[".concat(null != u ? u : "#050038", "]"),
											children: x(n)
										}), (0, i.jsx)(Q, {
											btnClassName: "bg-[#fff] w-[20px] h-[20px] rounded-full"
										})]
									}), (0, i.jsx)("div", {
										className: "h-[36px] text-[13px] leading-[18px] font-normal mt-[12px] text-ellipsis overflow-hidden line-clamp-2 whitespace-pre-wrap text-[".concat(null != d ? d : "#050038", "]"),
										children: x(a)
									})]
								})
							})]
						})
					})
				},
				et = r()(function() {
					return n.e(2192).then(n.bind(n, 73270))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [73270]
						}
					}
				}),
				en = function(e) {
					var t = e.threeBodyData,
						n = (0, a._)((0, d.useState)(), 2),
						o = n[0],
						r = n[1],
						l = (0, a._)((0, d.useState)([]), 2),
						s = l[0],
						p = l[1],
						f = (0, j.useRouter)().locale,
						x = (0, N.Z)(function() {
							return (0, C.I)({
								page: 1
							}, f)
						}).data,
						m = (0, v.$G)("common").t,
						_ = (0, L.Z)().isChinese;
					return (0, d.useEffect)(function() {
						x && p(function(e) {
							return (0, u._)(e).concat((0, u._)(x.data))
						})
					}, [x]), (0, i.jsxs)("div", {
						className: "mt-[40px]",
						children: [(0, i.jsx)(X, {
							title: m("official_website_tech"),
							subTitle: m("official_website_tech_1"),
							isHiTitle: !0,
							cardList: ((null == t ? void 0 : t.techList) || []).map(function(e, t) {
								return (0, i.jsx)(ee, (0, c._)({
									index: t,
									topicType: "official_website_tech"
								}, e), t)
							})
						}), (0, i.jsx)(X, {
							title: m("official_website_product"),
							subTitle: m("official_website_product_1"),
							cardList: ((null == t ? void 0 : t.productList) || []).filter(function(e) {
								return !o || (e.products || []).includes(o)
							}).map(function(e, t) {
								return (0, i.jsx)(ee, (0, c._)({
									index: t,
									topicType: "official_website_product"
								}, e), t)
							}),
							categoryList: [{
								label: m("official_website_product_2"),
								value: "xingye"
							}, {
								label: m("official_website_product_3"),
								value: "hailuo"
							}],
							onCategoryChange: function(e) {
								r(null == e ? void 0 : e.value)
							}
						}), (0, i.jsx)(X, {
							title: m("official_website_case"),
							subTitle: m("official_website_case_1"),
							cardList: ((null == t ? void 0 : t.castList) || []).map(function(e, t) {
								return (0, i.jsx)(ee, (0, c._)({
									index: t,
									topicType: "official_website_case"
								}, e), t)
							})
						}), _ && (0, i.jsx)(X, {
							title: m("official_website_newspage"),
							subTitle: m("official_website_newspage_1"),
							cardList: s.map(function(e, t) {
								return (0, i.jsx)(et, {
									news: e,
									index: t,
									page: "official_home_page",
									event_name: "information_bar_view",
									topicType: "official_website_newspage",
									click_event_name: "information_bar_click"
								}, t)
							})
						})]
					})
				},
				ei = n(10256),
				ea = [{
					bgImg: "https://filecdn.minimax.chat/public/304cb474-bb9d-4d29-b7d5-803a15fd6266.png??x-oss-process=image/format,webp",
					title: "official_website_banner1",
					titleClass: "[&]:!mb-[12px] [&]:!text-[52px]",
					desc: "official_website_banner1_0",
					descClass: "[&]:!leading-[21px] [&]:!text-[14px] [&]:!mb-[12px] [&]:!line-clamp-2",
					detailLink: "/%E4%B8%AD%E6%96%87-%E6%8A%80%E6%9C%AF%E5%89%8D%E6%B2%BF-%E5%8D%A1%E7%89%871",
					detailLink_en: "/card-1",
					buttons: [{
						text: "official_website_banner1_1",
						detailLink: "https://hailuoai.com/",
						detailLink_en: "https://www.hailuo.ai/"
					}, {
						text: "official_website_banner1_2",
						detailLink: "https://platform.minimaxi.com/document/ChatCompletion%20v2?key=66701d281d57f38758d581d0",
						detailLink_en: "https://intl.minimaxi.com/document/ChatCompletion%20v2?key=66701d281d57f38758d581d0"
					}]
				}, {
					videoSrc: "https://filecdn.minimax.chat/public/8ec97a3b-7195-4975-b655-f78e2da7f1d3.mp4",
					title: "official_website_banner3",
					desc: "official_website_banner3_0",
					detailLink: "https://www.minimaxi.com/s2v-01%E5%8F%91%E5%B8%83",
					detailLink_en: "https://www.minimaxi.com/en/s2v-01-release",
					videoPoster: "https://filecdn.minimax.chat/public/eacad778-a4c8-4462-ba4b-94d950682ab5.png?x-oss-process=image/format,webp"
				}, {
					videoSrc: "https://filecdn.minimax.chat/public/40d8ee02-7fda-4f96-9330-092dcb94ba7e.mp4",
					title: "official_website_banner5",
					desc: "official_website_banner5_0",
					detailLink: "/i2v-01-live-%E5%8F%91%E5%B8%83",
					detailLink_en: "/i2v-01-live-release",
					videoPoster: "https://filecdn.minimax.chat/public/d49ea189-b743-4f00-a12b-9b1686c3ed1a.png?x-oss-process=image/format,webp"
				}, {
					bgImg: "https://filecdn.minimax.chat/public/2cce9d08-25ee-42d1-8cda-4f77a0b77f18.png?x-oss-process=image/format,webp",
					title: "official_website_banner4",
					desc: "official_website_banner4_0",
					type: "black",
					marginBottom: 16,
					detailLink: "/t2a-01-hd-%E5%8F%91%E5%B8%83",
					detailLink_en: "/speech-01-hd-release"
				}, {
					bgImg: "https://filecdn.minimax.chat/public/ff2b7d0a-cc5e-461d-84b7-f37e10bc7f94.png?x-oss-process=image/format,webp",
					title: "official_website_banner6",
					desc: "official_website_banner6_0",
					style: "dark",
					marginBottom: 20,
					detailLink: "/%E9%9F%B3%E4%B9%90%E6%A8%A1%E5%9E%8Bmusic-01",
					detailLink_en: "/music-01"
				}],
				eo = n(49501),
				er = n.n(eo),
				el = n(35108),
				es = n(63309),
				ec = n(48831),
				eu = n(21243),
				ed = n.n(eu),
				ep = (0, d.forwardRef)(function(e, t) {
					var n = e.show,
						o = e.bgImg,
						r = e.title,
						l = e.titleClass,
						s = e.desc,
						c = e.descClass,
						u = e.type,
						p = e.videoSrc,
						f = e.buttons,
						x = e.marginBottom,
						m = e.detailLink,
						_ = e.detailLink_en,
						b = e.videoPoster,
						g = e.isFirstVideo,
						y = e.setDelay,
						k = e.setIsAutoPlay,
						N = e.setProgress,
						C = (0, a._)((0, d.useState)(0), 2),
						E = C[0],
						T = C[1],
						I = (0, a._)((0, d.useState)(!1), 2),
						B = I[0],
						H = I[1],
						M = (0, d.useRef)(null),
						S = (0, v.$G)().t,
						D = (0, j.useRouter)(),
						P = (0, L.Z)().locale,
						A = function() {
							if (p && E && M.current) {
								H(!0);
								try {
									var e;
									null === (e = M.current) || void 0 === e || e.getInternalPlayer().play()
								} catch (e) {}
								setTimeout(function() {
									var e;
									null === (e = M.current) || void 0 === e || e.seekTo(0)
								}, 100)
							}
						};
					return (0, d.useImperativeHandle)(t, function() {
						return {
							replayVideo: A
						}
					}), (0, d.useEffect)(function() {
						if (n) {
							if (p && E) {
								y(E), H(!0);
								try {
									var e;
									null === (e = M.current) || void 0 === e || e.getInternalPlayer().play()
								} catch (e) {}
								setTimeout(function() {
									var e;
									null === (e = M.current) || void 0 === e || e.seekTo(0)
								}, 100)
							} else y(2300), H(!1)
						}
					}, [n]), (0, d.useEffect)(function() {
						E && A()
					}, [E]), (0, i.jsxs)("div", {
						className: "relative flex gap-[46px] justify-center items-center w-full h-full",
						children: [o && (0, i.jsx)(h(), {
							priority: !0,
							src: o,
							alt: "background",
							fill: !0,
							className: "object-cover"
						}), (0, i.jsxs)("div", {
							className: "flex flex-col justify-center items-center z-10\n            ".concat("black" === u ? "text-black" : "text-white"),
							children: [(0, i.jsx)("span", {
								className: "text-[56px] w-[284px] text-center font-[500] tracking-[-1.68px] ".concat(l),
								style: {
									fontFamily: "Poppins",
									marginBottom: x || 16
								},
								children: S(r)
							}), (0, i.jsx)("p", {
								className: "text-[16px] w-[284px] text-center leading-[30px] m-0 mb-[32px] whitespace-pre-wrap ".concat(c),
								children: S(s)
							}), f ? (0, i.jsx)("div", {
								className: "flex gap-[12px]",
								children: f.map(function(e) {
									return (0, i.jsx)(ed(), {
										target: "_blank",
										href: "en" === P ? e.detailLink_en : e.detailLink,
										className: "cursor-pointer no-underline rounded-[50px] bg-[#fff] text-[15px] text-[#181E25] font-[500] px-[25px] py-[10.5px]",
										children: S(e.text)
									}, e.text)
								})
							}) : (0, i.jsx)(el.default, {
								btnText: S("official_website_banner_button"),
								btnClassName: "cursor-pointer rounded-full p-[8px_16px_8px_20px] text-[14px] leading-[14px]",
								btnVariables: {
									"--primary-color": "black" === u ? "#000" : "#fff",
									"--secondary-color": "black" === u ? "#fff" : "#000"
								},
								onClick: function() {
									var e = "en" === P ? _ : m;
									(0, w.I)({
										event_name: "banner_click",
										page: "official_home_page",
										banner_title: r,
										jump_link: e,
										banner_type: p ? "video" : "image"
									}), e.startsWith("http") ? window.open(e, "_blank") : D.push(e, e, {
										locale: D.locale
									})
								}
							})]
						}), p && (0, i.jsx)(F(), {
							ref: M,
							url: p,
							onReady: function(e) {
								T(1e3 * e.getDuration()), g && (y(1e3 * e.getDuration()), N(0)), k(!0)
							},
							className: "absolute ".concat(er().videoWrapper),
							width: "100%",
							height: "100%",
							playing: B,
							controls: !1,
							muted: !0,
							playsinline: !0,
							config: {
								file: {
									attributes: {
										poster: b
									}
								}
							}
						})]
					})
				}),
				ef = function() {
					var e = (0, a._)((0, d.useState)(0), 2),
						t = e[0],
						n = e[1],
						o = (0, a._)((0, d.useState)(0), 2),
						r = o[0],
						l = o[1],
						s = (0, a._)((0, d.useState)(!1), 2),
						u = s[0],
						f = s[1],
						x = (0, a._)((0, d.useState)(2300), 2),
						m = x[0],
						_ = x[1],
						b = (0, a._)((0, d.useState)(), 2),
						h = b[0],
						v = b[1],
						g = (0, d.useRef)([]),
						j = (0, a._)((0, d.useState)(!1), 2),
						y = j[0],
						k = j[1],
						N = (0, a._)((0, d.useState)(1), 2),
						C = N[0],
						E = N[1],
						T = (0, L.Z)().locale;
					(0, d.useEffect)(function() {
						h && u && h.autoplay.start()
					}, [u]), (0, d.useEffect)(function() {
						var e = (0, ec.Z)(function() {
							window.innerWidth < es.VU ? E((window.innerWidth - 32) / (es.VU - 32)) : E(1)
						}, 100);
						e(), window.addEventListener("resize", e)
					}, []);
					var I = function(e) {
							null == h || h.slideTo(e)
						},
						B = {
							"--arrow-stroke": "2px",
							"--primary-color": "#00000014",
							"--secondary-color": "#fff",
							opacity: y ? "1" : "0"
						},
						H = "z-20 h-[48px] w-[48px] backdrop-blur-[12px] webkit-backdrop-blur-[12px] transition-opacity duration-300 ease-in-out absolute top-1/2 -translate-y-1/2 rounded-full p-[8px_18px_8px_20px] text-[13px] leading-[14px] hover:bg-[#00000029]";
					return (0, i.jsx)("div", {
						className: "flex justify-center",
						children: (0, i.jsx)("div", {
							className: "min-w-[358px] origin-top",
							children: (0, i.jsxs)("div", {
								className: "mx-auto px-[16px] pt-[58px] overflow-hidden flex flex-col items-center",
								children: [(0, i.jsxs)("div", {
									className: "relative overflow-hidden rounded-[24px]",
									style: {
										height: 1 !== C ? "".concat(466 * C, "px") : "466px",
										width: 1 !== C ? "".concat(483 * C, "px") : "100%"
									},
									onMouseEnter: function() {
										k(!0)
									},
									onMouseLeave: function() {
										k(!1)
									},
									children: [(0, i.jsxs)("div", {
										children: [(0, i.jsx)(el.default, {
											btnClassName: "".concat(H, " left-[24px] scale-x-[-1]"),
											btnVariables: B,
											onClick: function() {
												null == h || h.slideTo(((null == h ? void 0 : h.realIndex) - 1 + ea.length) % ea.length)
											}
										}), (0, i.jsx)(el.default, {
											btnClassName: "".concat(H, " right-[24px]"),
											btnVariables: B,
											onClick: function() {
												null == h || h.slideTo(((null == h ? void 0 : h.realIndex) + 1) % ea.length)
											}
										})]
									}), (0, i.jsx)(p.tq, {
										onSwiper: v,
										modules: [S.pt, S.xW],
										effect: "fade",
										className: "w-full h-full rounded-[24px] overflow-hidden",
										fadeEffect: {
											crossFade: !0
										},
										autoplay: !!u && {
											delay: m,
											disableOnInteraction: !1
										},
										onAutoplayTimeLeft: function(e, t, n) {
											l(1 - n)
										},
										onRealIndexChange: function(e) {
											var t = ea[e.realIndex],
												i = t.title,
												a = t.videoSrc,
												o = t.detailLink,
												r = t.detailLink_en;
											(0, w.I)({
												event_name: "banner_view",
												page: "official_home_page",
												banner_title: i,
												jump_link: "en" === T ? r : o,
												banner_type: a ? "video" : "image"
											}), l(0), n(e.realIndex)
										},
										onResize: function(e) {
											var t;
											null === (t = g.current[e.realIndex]) || void 0 === t || t.replayVideo()
										},
										children: ea.map(function(e, n) {
											return (0, i.jsx)(p.o5, {
												children: (0, i.jsx)(ep, (0, M._)((0, c._)({}, e), {
													show: n === t,
													setDelay: _,
													setIsAutoPlay: f,
													setProgress: l,
													isFirstVideo: 0 === n && !!e.videoSrc,
													ref: function(e) {
														return g.current[n] = e
													}
												}))
											}, e.title)
										})
									})]
								}), (0, i.jsx)("div", {
									className: "w-full flex justify-center items-center gap-[6px] mt-[24px]",
									children: ea.map(function(e, n) {
										return (0, i.jsx)("div", {
											className: "relative overflow-hidden cursor-pointer h-[4px] rounded-[24px] bg-[#E5E6EB] transition-all duration-300 ease-in-out ".concat(n === t ? "w-[48px]" : "w-[16px] hover:bg-[#C9CDD4]"),
											onClick: function() {
												I(n)
											},
											children: n === t && (0, i.jsx)("div", {
												className: "absolute top-0 left-0 h-full bg-[#181E25CC] rounded-[24px]",
												style: {
													width: "".concat(100 * r, "%")
												}
											})
										}, e.title)
									})
								})]
							})
						})
					})
				},
				ex = r()(function() {
					return Promise.all([n.e(3977), n.e(9070)]).then(n.bind(n, 29070))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [29070]
						}
					}
				}),
				em = function(e) {
					var t = e.threeBodyData;
					return (0, z.Z)("official_home_page"), (0, i.jsxs)("main", {
						className: "".concat($().home, " w-screen md:min-w-[351px] md:overflow-x-auto"),
						children: [(0, i.jsx)(ei.default, {
							page: "official_home_page"
						}), (0, i.jsx)(ef, {}), (0, i.jsx)(en, {
							threeBodyData: t
						}), (0, i.jsx)(ex, {
							page: "official_home_page"
						})]
					})
				},
				e_ = n(13940),
				eb = !0,
				eh = function(e) {
					var t = e.threeBodyData,
						n = e.isMobile,
						a = (0, Y.Z)(n),
						o = a.isMobile,
						r = a.detectMobile;
					return ((0, e_.Z)(r), o) ? (0, i.jsx)(em, {
						threeBodyData: t
					}) : (0, i.jsx)(q, {
						threeBodyData: t
					})
				}
		},
		10015: function(e) {
			e.exports = {
				button: "ArrowButton_button__hcGfb",
				"arrow-wrapper": "ArrowButton_arrow-wrapper__4uafM",
				arrow: "ArrowButton_arrow__HMO8r"
			}
		},
		53462: function(e) {
			e.exports = {
				videoWrapper: "Banner_videoWrapper__T3yk_"
			}
		},
		71196: function(e) {
			e.exports = {
				"scroll-container": "ThreeBody_scroll-container__DFits",
				"not-scroll-container": "ThreeBody_not-scroll-container__ieqP0",
				placeholder: "ThreeBody_placeholder__wh2ru",
				"scroll-wrapper": "ThreeBody_scroll-wrapper__u9OJq",
				bg: "ThreeBody_bg__gzMaZ"
			}
		},
		40162: function(e) {
			e.exports = {
				bounce1: "Home_bounce1__fPmzS",
				bounce: "Home_bounce__AcWkD",
				bounce2: "Home_bounce2__JEO68",
				bounce3: "Home_bounce3__hK9HK",
				mHome: "Home_mHome__X_ZpH",
				bgBlur: "Home_bgBlur__FUp2A",
				cube: "Home_cube__SoInw",
				move: "Home_move__428R8",
				arrow: "Home_arrow__vKug7",
				"arrow-move": "Home_arrow-move__WiPFz",
				flex: "Home_flex__nOywj",
				abab6Desc: "Home_abab6Desc__VdPcA",
				assetsList: "Home_assetsList__uY7_R",
				reverseAssets: "Home_reverseAssets___JDl9",
				assetsListL: "Home_assetsListL__4fXlF",
				reverseAssetsL: "Home_reverseAssetsL__7Yjpz"
			}
		},
		91799: function(e) {
			e.exports = {
				button: "ArrowButton_button__YxZea",
				"arrow-wrapper": "ArrowButton_arrow-wrapper__8VpFs",
				arrow: "ArrowButton_arrow__6NK7X"
			}
		},
		49501: function(e) {
			e.exports = {
				videoWrapper: "MBanner_videoWrapper__7OH4v"
			}
		},
		52269: function(e) {
			e.exports = {
				burger: "MHeader_burger__8F4c_"
			}
		},
		55151: function(e) {
			e.exports = {
				"scroll-container": "ThreeBody_scroll-container__rVOvx",
				"not-scroll-container": "ThreeBody_not-scroll-container__LEPK9",
				placeholder: "ThreeBody_placeholder__65GO9"
			}
		},
		96153: function(e) {
			e.exports = {
				bounce1: "MHome_bounce1__DkSGZ",
				bounce: "MHome_bounce__yAFoN",
				bounce2: "MHome_bounce2__RY14_",
				bounce3: "MHome_bounce3__neicp",
				mHome: "MHome_mHome__dpQKR",
				bgBlur: "MHome_bgBlur__DHVH8",
				cube: "MHome_cube__LjMLH",
				move: "MHome_move__OIind",
				arrow: "MHome_arrow__r2XxF",
				"arrow-move": "MHome_arrow-move__Iq0_k",
				flex: "MHome_flex__r_phs",
				abab6Desc: "MHome_abab6Desc__xvU6v",
				assetsList: "MHome_assetsList__aqT7P",
				reverseAssets: "MHome_reverseAssets__1hyrr",
				assetsListL: "MHome_assetsListL__m4APl",
				reverseAssetsL: "MHome_reverseAssetsL__6Kc2k"
			}
		}
	},
	function(e) {
		e.O(0, [81, 1243, 4351, 833, 1958, 1762, 6396, 7646, 8897, 4861, 6557, 8381, 7207, 9774, 2888, 179], function() {
			return e(e.s = 67127)
		}), _N_E = e.O()
	}
]);