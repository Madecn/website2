(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[5229, 2787, 9070, 8273, 1116, 1006, 8716, 4887], {
		20371: function(e, t, n) {
			"use strict";
			n.d(t, {
				M2: function() {
					return c
				},
				Tm: function() {
					return s
				},
				l$: function() {
					return r
				}
			});
			var i, a = n(50959);
			let {
				isValidElement: r
			} = i || (i = n.t(a, 2));

			function c(e) {
				return e && r(e) && e.type === a.Fragment
			}

			function s(e, t) {
				return r(e) ? a.cloneElement(e, "function" == typeof t ? t(e.props || {}) : t) : e
			}
		},
		94464: function(e, t, n) {
			(window.__NEXT_P = window.__NEXT_P || []).push(["/platform", function() {
				return n(72658)
			}])
		},
		51006: function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n(11527),
				a = n(10015),
				r = n.n(a);
			t.default = function(e) {
				var t = e.onClick,
					n = e.btnClassName,
					a = e.btnVariables,
					c = e.arrowWrapperClassName,
					s = e.arrowClassName,
					o = e.btnText,
					l = e.btnTextClassName;
				return (0, i.jsxs)("div", {
					className: "".concat(r().button, " ").concat(n),
					onClick: t,
					style: a,
					children: [o ? (0, i.jsx)("span", {
						className: "".concat(l),
						children: o
					}) : null, (0, i.jsx)("div", {
						className: "".concat(r()["arrow-wrapper"], " ").concat(c),
						children: (0, i.jsx)("div", {
							className: "".concat(r().arrow, " ").concat(s)
						})
					})]
				})
			}
		},
		88716: function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n(11527),
				a = n(49237),
				r = n(10081),
				c = n.n(r),
				s = n(21243),
				o = n.n(s),
				l = n(75286),
				p = n(72893),
				d = n(37990),
				f = n(84605),
				m = n(96462),
				x = n(8949),
				u = function() {
					return (0, i.jsxs)("div", {
						className: "",
						children: [(0, i.jsx)(c(), {
							width: 120,
							height: 120,
							className: "rounded-lg mx-auto block",
							alt: "微信公众号",
							src: a.gk
						}), (0, i.jsx)("div", {
							className: "pb-[10px] text-center text-[12px]",
							children: "微信公众号"
						})]
					})
				};
			t.default = function(e) {
				var t = e.className,
					n = e.page,
					r = new Date().getFullYear(),
					s = (0, d.Z)(),
					h = s.locale,
					b = s.isEnglish,
					_ = s.isChinese,
					g = (0, f.$G)("common").t,
					w = b ? p.I : p.a;
				return (0, i.jsxs)("main", {
					className: "bg-[#000] px-[64px] pt-[80px] ".concat(t, " ").concat(_ ? "pb-[80px]" : ""),
					children: [(0, i.jsxs)("section", {
						className: "mx-auto max-w-[1820px] pb-[80px] lg:flex md:justify-between md:h-[328px] text-[16px] leading-[24px] ".concat(_ ? "[border-bottom:1px_solid_#323232]" : ""),
						children: [(0, i.jsxs)("div", {
							children: [(0, i.jsx)(c(), {
								className: "mt-[-6px] mb-[24px]",
								width: 200,
								height: 64,
								src: a.xN,
								alt: "logo"
							}), (0, i.jsx)(x.ZP, {
								isShowList: _ ? [x.g0.EMAIL, x.g0.WECHAT, x.g0.GITHUB, x.g0.HUGGINGFACE] : [x.g0.TWITTER, x.g0.LINKEDIN, x.g0.EMAIL, x.g0.GITHUB, x.g0.HUGGINGFACE]
							})]
						}), (0, i.jsx)("div", {
							className: "flex w-[684px] md:w-[684px] md:h-[188px] mt-[24px] lg:mt-0 lg:h-[248px] flex-wrap md:flex-nowrap gap-[40px]",
							children: w.map(function(e, t) {
								return (0, i.jsxs)("div", {
									className: "flex flex-col flex-1 min-w-0",
									children: [(0, i.jsx)("div", {
										className: "text-[16px] text-[#fff] font-[500] leading-normal",
										children: e.title
									}), (0, i.jsx)("div", {
										className: "flex flex-col mt-[24px]",
										children: e.items.map(function(t, a) {
											return t.showPopup ? (0, i.jsx)(l.Z, {
												placement: "top",
												content: t.link ? t.isEmail ? t.link.replace("mailto:", "") : t.link : (0, i.jsx)(u, {}),
												overlayClassName: "rounded-[6px]",
												overlayInnerStyle: t.link ? {
													padding: "4px 8px"
												} : {
													padding: 0
												},
												children: t.link ? (0, i.jsx)(o(), {
													className: "flex no-underline text-[14px] text-[#fff] whitespace-nowrap leading-[21px] font-[300] mb-[16px]",
													href: t.link,
													locale: h,
													target: t.link.startsWith("http") ? "_blank" : "_self",
													children: t.label
												}, a) : (0, i.jsx)("span", {
													className: "cursor-pointer text-[14px] font-[300] text-[#fff]",
													children: g("official_website_footer_contact_2")
												})
											}, a) : (0, i.jsx)(o(), {
												locale: h,
												className: "no-underline text-[14px] text-[#fff] whitespace-nowrap leading-[21px] font-[300] mb-[16px]",
												href: t.link,
												target: t.link.startsWith("http") ? "_blank" : "_self",
												onClick: function() {
													(0, m.I)({
														event_name: "footer_click",
														page: n,
														tab_name: e.title,
														option_btn: t.label,
														jump_link: t.link
													})
												},
												children: t.label
											}, a)
										})
									})]
								}, t)
							})
						})]
					}), _ ? (0, i.jsxs)("section", {
						className: "mx-auto max-w-[1312px]",
						children: [(0, i.jsxs)("div", {
							className: "flex flex-wrap justify-center",
							children: [(0, i.jsxs)("span", {
								className: "text-[#5C5F63] text-[14px] font-[400] leading-[21px] ml-4 mt-8",
								children: ["\xa9上海稀宇科技有限公司 ", r, " 版权所有"]
							}), (0, i.jsx)(o(), {
								className: "ml-[16px] no-underline text-[14px] font-[400] text-[#5C5F63] leading-[21px] mt-8",
								target: "_blank",
								locale: h,
								href: "https://www.minimaxi.com/protocol/privacy-policy",
								children: "隐私条款"
							}), (0, i.jsx)(o(), {
								locale: h,
								className: "ml-[16px] no-underline text-[14px] font-[400] text-[#5C5F63] leading-[21px] mt-8",
								target: "_blank",
								href: "https://www.minimaxi.com/protocol/user-agreement",
								children: "用户协议"
							})]
						}), (0, i.jsxs)("div", {
							className: "flex items-center flex-wrap justify-center",
							children: [(0, i.jsxs)(o(), {
								locale: h,
								target: "_blank",
								href: "https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402010179",
								className: "mt-2 flex items-center whitespace-nowrap no-underline text-[14px] font-[400] text-[#5C5F63] leading-[21px]",
								children: [(0, i.jsx)(c(), {
									className: "mr-[4px]",
									width: "14",
									height: "14",
									src: "https://filecdn.minimax.chat/public/d3cb2fd4-f521-4944-88df-2789c20430ad.png?x-oss-process=image/format,webp",
									priority: !0,
									alt: "沪公网安备"
								}), (0, i.jsx)("span", {
									children: "沪公网安备 31010402010179号"
								})]
							}), (0, i.jsx)(o(), {
								locale: h,
								target: "_blank",
								href: "https://beian.miit.gov.cn/",
								className: "mt-2 ml-[16px] whitespace-nowrap no-underline text-[14px] font-[400] text-[#5C5F63] leading-[21px]",
								children: "沪ICP备2023003282号-5"
							}), (0, i.jsx)(o(), {
								locale: h,
								target: "_blank",
								href: "https://www.minimaxi.com/license/broadcasting-business-license",
								className: "ml-[16px] no-underline text-[14px] font-[400] text-[#5C5F63] leading-[21px] mt-2",
								children: "广播电视节目制作经营许可证：（沪）字第05352号"
							}), (0, i.jsx)(o(), {
								locale: h,
								target: "_blank",
								href: "https://whlyj.sh.gov.cn/index.html",
								className: "mt-2 ml-[16px] whitespace-nowrap no-underline text-[14px] font-[400] text-[#5C5F63] leading-[21px]",
								children: "沪网文〔2023〕1566-110 号"
							})]
						})]
					}) : null]
				})
			}
		},
		49237: function(e, t, n) {
			"use strict";
			n.d(t, {
				V7: function() {
					return r
				},
				RZ: function() {
					return m
				},
				zy: function() {
					return c
				},
				vi: function() {
					return o.vi
				},
				m0: function() {
					return f
				},
				gk: function() {
					return o.gk
				},
				xN: function() {
					return o.xN
				},
				uU: function() {
					return p
				}
			});
			var i, a, r, c, s, o = n(91489);
			(i = r || (r = {}))[i.NONE = 0] = "NONE", i[i.LOGIN = 1] = "LOGIN", i[i.TOKEN = 2] = "TOKEN";
			var l = [{
					path: "/404",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/document/",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/examination-center/text-experience-center",
					needUserInfo: !0,
					permission: r.LOGIN | r.TOKEN,
					priority: 1
				}, {
					path: "/examination-center/voice-experience-center",
					needUserInfo: !0,
					permission: r.LOGIN | r.TOKEN,
					priority: 1
				}, {
					path: "/cooperate",
					needUserInfo: !0,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/deliver",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/license/business-license",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/license/broadcasting-business-license",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/login",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/password-reset",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/protocol/privacy-policy",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/protocol/user-agreement",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/register/user-protocol",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/register/set-password",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/registration",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/scene-example",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}, {
					path: "/user-center/payment/billing-history",
					needUserInfo: !0,
					permission: r.LOGIN | r.TOKEN,
					priority: 10
				}, {
					path: "/user-center/",
					needUserInfo: !0,
					permission: r.LOGIN,
					priority: 1
				}, {
					path: "/message-center/notification",
					needUserInfo: !0,
					permission: r.LOGIN,
					priority: 1
				}, {
					path: "/message-center/system-notification",
					needUserInfo: !0,
					permission: r.LOGIN,
					priority: 1
				}, {
					path: "/examination-center/assistants",
					needUserInfo: !0,
					permission: r.LOGIN | r.TOKEN,
					priority: 1
				}, {
					path: "/platform",
					needUserInfo: !1,
					permission: r.NONE,
					priority: 1
				}],
				p = function(e) {
					var t, n = window.location.pathname,
						i = e || n,
						a = null === (t = l.filter(function(e) {
							return i.startsWith(e.path)
						})) || void 0 === t ? void 0 : t.sort(function(e, t) {
							return t.priority - e.priority
						}),
						r = (null == a ? void 0 : a[0]) || {};
					return {
						needUserInfo: null == r ? void 0 : r.needUserInfo,
						permission: null == r ? void 0 : r.permission
					}
				},
				d = n(29122);
			(a = c || (c = {}))[a["未知错误"] = 1e3] = "未知错误", a[a["超时"] = 1001] = "超时", a[a["限流"] = 1002] = "限流", a[a["未登录"] = 1004] = "未登录", a[a["TTS超时"] = 1005] = "TTS超时", a[a["非法输入"] = 1006] = "非法输入", a[a["验证码失效"] = 1007] = "验证码失效", a[a["数据库失败"] = 2001] = "数据库失败", a[a["请先注册"] = 2002] = "请先注册", a[a["错误的验证码"] = 2015] = "错误的验证码", a[a["账号不存在"] = 1013] = "账号不存在", a[a["密码错误"] = 1003] = "密码错误", a[a["余额不足"] = 1008] = "余额不足", a[a["重复申请"] = 1014] = "重复申请", a[a["输出内容敏感"] = 1027] = "输出内容敏感", a[a["输入内容敏感"] = 1026] = "输入内容敏感", a[a["参数有误"] = 2013] = "参数有误", a[a["缺少id参数"] = 6100] = "缺少id参数", a[a["查询文档错误"] = 6200] = "查询文档错误", a[a["更新文档错误"] = 6300] = "更新文档错误", a[a["用户不存在"] = 6400] = "用户不存在", a[a["无效的凭据"] = 6401] = "无效的凭据", a[a["账户不存在"] = 6404] = "账户不存在", a[a["服务端异常"] = 6500] = "服务端异常", a[a["名称已存在"] = 6600] = "名称已存在", a[a["模板数量超出限制"] = 6601] = "模板数量超出限制", a[a["手机号已被注册"] = 6700] = "手机号已被注册";
			var f = [c.输出内容敏感, c.输入内容敏感],
				m = (s = {}, (0, d._)(s, c.超时, "网络错误，请稍后重试"), (0, d._)(s, c.限流, "操作频繁，请稍后重试"), (0, d._)(s, c.验证码失效, "验证码失效，请重新获取短信验证码"), (0, d._)(s, c.请先注册, "该用户尚未注册，请先完成申请账户注册申请"), (0, d._)(s, c.错误的验证码, "验证码有误，请重新获取短信验证码"), (0, d._)(s, c.账号不存在, "账号尚未注册"), (0, d._)(s, c.密码错误, "密码错误"), (0, d._)(s, c.余额不足, "余额不足，请充值后继续使用"), (0, d._)(s, c.重复申请, "此邮箱或关联手机号已被注册"), (0, d._)(s, c.输出内容敏感, "换个话题试试吧"), (0, d._)(s, c.输入内容敏感, "换个话题试试吧"), (0, d._)(s, c.参数有误, "参数有误，请调整输入后重试"), (0, d._)(s, c.未登录, "账号密钥已失效，请重新登陆后再进行体验"), (0, d._)(s, c.缺少id参数, "缺少id参数"), (0, d._)(s, c.查询文档错误, "查询文档错误"), (0, d._)(s, c.更新文档错误, "更新文档错误"), (0, d._)(s, c.用户不存在, "用户不存在"), (0, d._)(s, c.无效的凭据, "无效的凭据"), (0, d._)(s, c.账户不存在, "账户不存在"), (0, d._)(s, c.服务端异常, "服务端异常"), (0, d._)(s, c.名称已存在, "名称已存在"), (0, d._)(s, c.模板数量超出限制, "最多只能创建20个模版"), (0, d._)(s, c.手机号已被注册, "手机号已被注册"), s)
		},
		76655: function(e, t, n) {
			"use strict";
			n.d(t, {
				l8: function() {
					return i
				}
			});
			var i = 768
		},
		91489: function(e, t, n) {
			"use strict";
			n.d(t, {
				O8: function() {
					return p
				},
				Pq: function() {
					return d
				},
				RI: function() {
					return a
				},
				Zn: function() {
					return o
				},
				gO: function() {
					return f
				},
				gk: function() {
					return r
				},
				t6: function() {
					return s
				},
				vi: function() {
					return i
				},
				xN: function() {
					return l
				}
			});
			var i = "https://platform.minimaxi.com",
				a = "https://intl.minimaxi.com",
				r = "https://filecdn.minimax.chat/public/20cce9c8-2f16-4941-ba2a-6ec813e09c17.jpeg?x-oss-process=image/format,webp",
				c = function(e) {
					return e ? "".concat(e, "?x-oss-process=image/format,webp") : e
				},
				s = c("https://filecdn.minimax.chat/public/698e53fa-454e-43a9-b2aa-ba52db9952df.png"),
				o = c("https://filecdn.minimax.chat/public/563cf446-ce24-4e0e-abef-ff5a2d616553.png");
			c("https://filecdn.minimax.chat/public/edc7b302-74be-4f3e-a953-c742ec0a939a.png"), c("https://filecdn.minimax.chat/public/b27fe892-1449-42e4-8846-ea9d491319f7.png"), c("https://filecdn.minimax.chat/public/81ab0185-2794-4098-9aca-9d88228ab633.png"), c("https://filecdn.minimax.chat/public/4f3086ea-7f5e-457e-8ee2-79c5c6756db1.png"), c("https://filecdn.minimax.chat/public/bee6824a-b526-4665-aa57-cbfd18b65f95.png"), c("https://filecdn.minimax.chat/public/cf381f7a-add0-462b-80ca-da4b86032a2d.png"), c("https://filecdn.minimax.chat/public/3042c30f-1acc-4d68-a23e-077c272f3f33.png"), c("https://filecdn.minimax.chat/public/daae12c0-8ad2-4c62-8ba2-524295c0e8ef.png"), c("https://filecdn.minimax.chat/public/7c5a0b07-6757-458c-82ed-18046f3e01f1.png"), c("https://filecdn.minimax.chat/public/b961ce1f-d2ba-4053-823b-f21faf115bd1.png");
			var l = c("https://filecdn.minimax.chat/public/6bef0882-3057-455c-a4ad-2f63ed292be2.png"),
				p = c("https://filecdn.minimax.chat/public/88b14444-bf4c-4fb6-9419-4e680e6750e9.png"),
				d = c("https://filecdn.minimax.chat/public/a6206662-b4f0-4274-b4b1-30af9800b760.png"),
				f = c("https://filecdn.minimax.chat/public/d264b660-28e3-46f8-8539-34a681aa7f45.png");
			c("https://filecdn.minimax.chat/public/e3e26ee6-dd49-4035-bc4e-635c0a4ce9a7.png")
		},
		14749: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return r
				}
			});
			var i = n(55754),
				a = n(50959);

			function r() {
				var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
					t = (0, i._)((0, a.useState)(e), 2),
					n = t[0],
					r = t[1],
					c = function() {
						var e = window.innerWidth < 768,
							t = window.innerHeight / 100;
						document.documentElement.style.setProperty("--vh", t + "px"), r(e)
					};
				return (0, a.useEffect)(function() {
					c()
				}, []), {
					isMobile: n,
					detectMobile: c
				}
			}
		},
		51517: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return c
				}
			});
			var i = n(45166),
				a = n(96462),
				r = n(50959);

			function c(e, t) {
				(0, r.useEffect)(function() {
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
				r = n.n(a);
			t.default = function(e) {
				var t = e.onClick,
					n = e.btnClassName,
					a = e.btnVariables,
					c = e.arrowWrapperClassName,
					s = e.arrowClassName,
					o = e.btnText;
				return (0, i.jsxs)("div", {
					className: "".concat(r().button, " ").concat(n),
					onClick: t,
					style: a,
					children: [o || null, (0, i.jsx)("div", {
						className: "".concat(r()["arrow-wrapper"], " ").concat(c),
						children: (0, i.jsx)("div", {
							className: "".concat(r().arrow, " ").concat(s)
						})
					})]
				})
			}
		},
		29070: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				default: function() {
					return E
				}
			});
			var i = n(11527),
				a = n(49237),
				r = n(10081),
				c = n.n(r),
				s = n(21243),
				o = n.n(s),
				l = n(50959),
				p = n(82187),
				d = n.n(p),
				f = n(77286),
				m = n(19583),
				x = n(26781),
				u = n(62826),
				h = n(29186);
			let b = e => {
				let {
					componentCls: t,
					sizePaddingEdgeHorizontal: n,
					colorSplit: i,
					lineWidth: a,
					textPaddingInline: r,
					orientationMargin: c,
					verticalMarginInline: s
				} = e;
				return {
					[t]: Object.assign(Object.assign({}, (0, x.Wf)(e)), {
						borderBlockStart: `${(0,m.unit)(a)} solid ${i}`,
						"&-vertical": {
							position: "relative",
							top: "-0.06em",
							display: "inline-block",
							height: "0.9em",
							marginInline: s,
							marginBlock: 0,
							verticalAlign: "middle",
							borderTop: 0,
							borderInlineStart: `${(0,m.unit)(a)} solid ${i}`
						},
						"&-horizontal": {
							display: "flex",
							clear: "both",
							width: "100%",
							minWidth: "100%",
							margin: `${(0,m.unit)(e.dividerHorizontalGutterMargin)} 0`
						},
						[`&-horizontal${t}-with-text`]: {
							display: "flex",
							alignItems: "center",
							margin: `${(0,m.unit)(e.dividerHorizontalWithTextGutterMargin)} 0`,
							color: e.colorTextHeading,
							fontWeight: 500,
							fontSize: e.fontSizeLG,
							whiteSpace: "nowrap",
							textAlign: "center",
							borderBlockStart: `0 ${i}`,
							"&::before, &::after": {
								position: "relative",
								width: "50%",
								borderBlockStart: `${(0,m.unit)(a)} solid transparent`,
								borderBlockStartColor: "inherit",
								borderBlockEnd: 0,
								transform: "translateY(50%)",
								content: "''"
							}
						},
						[`&-horizontal${t}-with-text-left`]: {
							"&::before": {
								width: `calc(${c} * 100%)`
							},
							"&::after": {
								width: `calc(100% - ${c} * 100%)`
							}
						},
						[`&-horizontal${t}-with-text-right`]: {
							"&::before": {
								width: `calc(100% - ${c} * 100%)`
							},
							"&::after": {
								width: `calc(${c} * 100%)`
							}
						},
						[`${t}-inner-text`]: {
							display: "inline-block",
							paddingBlock: 0,
							paddingInline: r
						},
						"&-dashed": {
							background: "none",
							borderColor: i,
							borderStyle: "dashed",
							borderWidth: `${(0,m.unit)(a)} 0 0`
						},
						[`&-horizontal${t}-with-text${t}-dashed`]: {
							"&::before, &::after": {
								borderStyle: "dashed none none"
							}
						},
						[`&-vertical${t}-dashed`]: {
							borderInlineStartWidth: a,
							borderInlineEnd: 0,
							borderBlockStart: 0,
							borderBlockEnd: 0
						},
						[`&-plain${t}-with-text`]: {
							color: e.colorText,
							fontWeight: "normal",
							fontSize: e.fontSize
						},
						[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]: {
							"&::before": {
								width: 0
							},
							"&::after": {
								width: "100%"
							},
							[`${t}-inner-text`]: {
								paddingInlineStart: n
							}
						},
						[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]: {
							"&::before": {
								width: "100%"
							},
							"&::after": {
								width: 0
							},
							[`${t}-inner-text`]: {
								paddingInlineEnd: n
							}
						}
					})
				}
			};
			var _ = (0, u.I$)("Divider", e => {
					let t = (0, h.TS)(e, {
						dividerHorizontalWithTextGutterMargin: e.margin,
						dividerHorizontalGutterMargin: e.marginLG,
						sizePaddingEdgeHorizontal: 0
					});
					return [b(t)]
				}, e => ({
					textPaddingInline: "1em",
					orientationMargin: .05,
					verticalMarginInline: e.marginXS
				}), {
					unitless: {
						orientationMargin: !0
					}
				}),
				g = function(e, t) {
					var n = {};
					for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols)
						for (var a = 0, i = Object.getOwnPropertySymbols(e); a < i.length; a++) 0 > t.indexOf(i[a]) && Object.prototype.propertyIsEnumerable.call(e, i[a]) && (n[i[a]] = e[i[a]]);
					return n
				},
				w = e => {
					let {
						getPrefixCls: t,
						direction: n,
						divider: i
					} = l.useContext(f.E_), {
						prefixCls: a,
						type: r = "horizontal",
						orientation: c = "center",
						orientationMargin: s,
						className: o,
						rootClassName: p,
						children: m,
						dashed: x,
						plain: u,
						style: h
					} = e, b = g(e, ["prefixCls", "type", "orientation", "orientationMargin", "className", "rootClassName", "children", "dashed", "plain", "style"]), w = t("divider", a), [v, j, y] = _(w), N = c.length > 0 ? `-${c}` : c, k = !!m, I = "left" === c && null != s, E = "right" === c && null != s, C = d()(w, null == i ? void 0 : i.className, j, y, `${w}-${r}`, {
						[`${w}-with-text`]: k,
						[`${w}-with-text${N}`]: k,
						[`${w}-dashed`]: !!x,
						[`${w}-plain`]: !!u,
						[`${w}-rtl`]: "rtl" === n,
						[`${w}-no-default-orientation-margin-left`]: I,
						[`${w}-no-default-orientation-margin-right`]: E
					}, o, p), L = l.useMemo(() => "number" == typeof s ? s : /^\d+$/.test(s) ? Number(s) : s, [s]), S = Object.assign(Object.assign({}, I && {
						marginLeft: L
					}), E && {
						marginRight: L
					});
					return v(l.createElement("div", Object.assign({
						className: C,
						style: Object.assign(Object.assign({}, null == i ? void 0 : i.style), h)
					}, b, {
						role: "separator"
					}), m && "vertical" !== r && l.createElement("span", {
						className: `${w}-inner-text`,
						style: S
					}, m)))
				},
				v = n(75286),
				j = n(72893),
				y = n(37990),
				N = n(96462),
				k = n(8949),
				I = function() {
					return (0, i.jsxs)("div", {
						className: "w-[80px] flex flex-col items-center mt-[4px]",
						children: [(0, i.jsx)(c(), {
							width: 80,
							height: 80,
							className: "rounded-lg block",
							alt: "微信公众号",
							src: a.gk
						}), (0, i.jsx)("div", {
							className: "text-[12px]",
							children: "微信公众号"
						})]
					})
				},
				E = function(e) {
					var t = e.className,
						n = e.page,
						r = new Date().getFullYear(),
						s = (0, y.Z)(),
						l = s.locale,
						p = s.isEnglish,
						d = s.isChinese,
						f = p ? j.I : j.a;
					return (0, i.jsxs)("main", {
						className: "bg-[#000] px-[20px] py-[44px] ".concat(t),
						children: [(0, i.jsxs)("section", {
							className: "mx-auto max-w-[1820px] pb-[56px] lg:flex md:justify-between md:h-[328px] text-[16px] leading-[24px] ".concat(d ? "[border-bottom:1px_solid_#323232]" : ""),
							children: [(0, i.jsxs)("div", {
								children: [(0, i.jsx)(c(), {
									className: "mt-[-6px] mb-[20px]",
									width: 180,
									height: 57,
									src: a.xN,
									alt: "logo"
								}), (0, i.jsx)(k.ZP, {
									isShowList: d ? [k.g0.EMAIL, k.g0.WECHAT, k.g0.GITHUB, k.g0.HUGGINGFACE] : [k.g0.TWITTER, k.g0.LINKEDIN, k.g0.EMAIL, k.g0.GITHUB, k.g0.HUGGINGFACE]
								})]
							}), (0, i.jsx)(w, {
								className: "my-[44px] bg-[#ffffff1f]"
							}), (0, i.jsx)("div", {
								children: f.map(function(e, t) {
									return (0, i.jsxs)("div", {
										className: "flex flex-col mt-[22px]",
										children: [(0, i.jsx)("div", {
											className: "text-[16px] text-[#fff] font-[500] leading-normal",
											children: e.title
										}), (0, i.jsx)("div", {
											className: "flex flex-col mt-[22px]",
											children: e.items.map(function(t, a) {
												return t.showPopup ? (0, i.jsx)(v.Z, {
													placement: "top",
													content: t.link ? t.isEmail ? t.link.replace("mailto:", "") : t.link : (0, i.jsx)(I, {}),
													overlayClassName: "rounded-[6px]",
													overlayInnerStyle: t.link ? {
														padding: "4px 8px"
													} : {
														padding: 0
													},
													children: t.link ? (0, i.jsxs)(o(), {
														className: "flex no-underline text-[14px] text-[#fff] whitespace-nowrap leading-[21px] font-[300] mb-[16px]",
														href: t.link,
														locale: l,
														target: t.link.startsWith("http") ? "_blank" : "_self",
														children: [t.label, t.link ? t.isEmail ? "：".concat(t.link.replace("mailto:", "")) : t.link : null]
													}, a) : (0, i.jsx)("span", {
														className: "cursor-pointer text-[14px] font-[300] text-[#fff]",
														children: (0, i.jsx)(I, {})
													})
												}, a) : (0, i.jsx)(o(), {
													locale: l,
													className: "no-underline text-[14px] text-[#fff] whitespace-nowrap leading-[21px] font-[300] mb-[16px]",
													href: t.link,
													target: t.link.startsWith("http") ? "_blank" : "_self",
													onClick: function() {
														(0, N.I)({
															event_name: "footer_click",
															page: n,
															tab_name: e.title,
															option_btn: t.label,
															jump_link: t.link
														})
													},
													children: t.label
												}, a)
											})
										})]
									}, t)
								})
							})]
						}), d ? (0, i.jsx)("section", {
							className: "mx-auto mt-[44px]",
							children: (0, i.jsxs)("div", {
								className: "flex flex-wrap flex-col items-center justify-center gap-y-2",
								children: [(0, i.jsxs)("span", {
									className: "text-[#5C5F63] text-[14px] font-[400] leading-[21px]",
									children: ["\xa9上海稀宇科技有限公司 ", r, " 版权所有"]
								}), (0, i.jsxs)("div", {
									children: [(0, i.jsx)(o(), {
										className: "no-underline text-[14px] font-[400] text-[#5C5F63] leading-[21px]",
										target: "_blank",
										locale: l,
										href: "https://www.minimaxi.com/protocol/privacy-policy",
										children: "隐私条款"
									}), (0, i.jsx)(o(), {
										locale: l,
										className: "ml-[8px] no-underline text-[14px] font-[400] text-[#5C5F63] leading-[21px]",
										target: "_blank",
										href: "https://www.minimaxi.com/protocol/user-agreement",
										children: "用户协议"
									})]
								}), (0, i.jsx)(o(), {
									locale: l,
									target: "_blank",
									href: "https://beian.miit.gov.cn/",
									className: "ml-[16px] whitespace-nowrap no-underline text-[14px] font-[400] text-[#5C5F63] leading-[21px]",
									children: "沪ICP备2023003282号-5"
								}), (0, i.jsx)(o(), {
									locale: l,
									target: "_blank",
									href: "https://www.minimaxi.com/license/broadcasting-business-license",
									className: "ml-[16px] no-underline text-[14px] font-[400] text-[#5C5F63] leading-[21px]",
									children: "广播电视节目制作经营许可证：（沪）字第05352号"
								}), (0, i.jsxs)(o(), {
									locale: l,
									target: "_blank",
									href: "https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402010179",
									className: "flex items-center whitespace-nowrap no-underline text-[14px] font-[400] text-[#5C5F63] leading-[21px]",
									children: [(0, i.jsx)(c(), {
										className: "mr-[4px]",
										width: "14",
										height: "14",
										src: "https://filecdn.minimax.chat/public/d3cb2fd4-f521-4944-88df-2789c20430ad.png?x-oss-process=image/format,webp",
										priority: !0,
										alt: "沪公网安备"
									}), (0, i.jsx)("span", {
										children: "沪公网安备 31010402010179号"
									})]
								}), (0, i.jsx)(o(), {
									locale: l,
									target: "_blank",
									href: "https://whlyj.sh.gov.cn/index.html",
									className: "ml-[16px] whitespace-nowrap no-underline text-[14px] font-[400] text-[#5C5F63] leading-[21px]",
									children: "沪网文〔2023〕1566-110 号"
								})]
							})
						}) : null]
					})
				}
		},
		10256: function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n(58177),
				a = n(55754),
				r = n(99938),
				c = n(11527),
				s = n(50959),
				o = n(10081),
				l = n.n(o),
				p = n(21243),
				d = n.n(p),
				f = n(50833),
				m = n(38451),
				x = n(27809),
				u = n(37990),
				h = n(84605),
				b = n(96462),
				_ = n(52269),
				g = n.n(_),
				w = n(36396),
				v = n(11047),
				j = n(20057),
				y = function(e) {
					var t, n = e.menu,
						a = e.parentTitle,
						s = e.isShow,
						o = e.page,
						p = e.locale,
						m = e.setIsMenuOpen,
						x = e.isLast,
						u = (0, h.$G)().t,
						_ = (0, f.q_)({
							from: {
								opacity: 0,
								maxHeight: "0px"
							},
							to: (t = (0, i._)(function(e) {
								return (0, r.Jh)(this, function(t) {
									switch (t.label) {
										case 0:
											if (!s) return [3, 2];
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
					return (0, c.jsxs)(f.q.div, {
						style: _,
						className: "overflow-hidden h-full",
						children: [(0, c.jsx)("div", {
							className: "pt-[16px] pb-[2px] flex flex-col gap-[32px]",
							children: n.map(function(e) {
								return (0, c.jsxs)("div", {
									className: "flex flex-col gap-[6px]",
									children: [(0, c.jsxs)("div", {
										className: "text-[16px] text-[#05003866] flex items-center gap-[8px] pt-[2px] pb-[6px] mb-[6px]",
										children: [e.icon && (0, c.jsx)(l(), {
											priority: !0,
											width: 18,
											height: 18,
											src: e.icon,
											alt: u(e.title)
										}), u(e.title)]
									}), (0, c.jsx)("div", {
										className: "flex flex-col gap-[16px]",
										children: e.subMenu.map(function(e) {
											return (0, c.jsxs)(d(), {
												href: e.link,
												locale: p,
												className: "text-[16px] py-[8px] text-[#050038] no-underline flex items-center",
												onClick: function() {
													m(!1), (0, b.I)({
														event_name: "top_nav_click",
														page: o,
														tab_name: a,
														option_btn: e.title,
														jump_link: e.link
													})
												},
												children: [(0, c.jsx)("span", {
													children: u(e.title)
												}), e.isNew && (0, c.jsx)("span", {
													className: "ml-[8px] bg-[#FFFFFF] text-[#050038] text-[10px] px-[8px] py-[2px] rounded-[30px]",
													children: "NEW"
												})]
											}, e.title)
										})
									})]
								}, e.title)
							})
						}), !x && (0, c.jsx)(w.Z, {
							className: "mt-[32px] mb-[24px]"
						})]
					})
				},
				N = function(e) {
					var t = e.setIsMenuOpen;
					return (0, c.jsxs)("label", {
						className: g().burger,
						htmlFor: "burger",
						children: [(0, c.jsx)("input", {
							type: "checkbox",
							id: "burger",
							onChange: function(e) {
								t(e.target.checked)
							}
						}), (0, c.jsx)("span", {}), (0, c.jsx)("span", {}), (0, c.jsx)("span", {})]
					})
				};
			t.default = function(e) {
				var t = e.page,
					n = (0, a._)((0, s.useState)(!1), 2),
					i = n[0],
					r = n[1],
					o = (0, a._)((0, s.useState)("official_website_navigation_tech"), 2),
					p = o[0],
					b = o[1],
					_ = (0, a._)((0, s.useState)(!0), 2),
					g = _[0],
					w = _[1],
					k = (0, s.useRef)(0),
					I = (0, u.Z)(),
					E = I.locale,
					C = I.isEnglish,
					L = (0, h.$G)().t,
					S = C ? x.BD : x.JL;
				(0, s.useEffect)(function() {
					var e = (0, j.Z)(function() {
						if (!i) {
							var e = Math.max((0, v.M)(), 0);
							e > k.current ? w(!1) : w(!0), k.current = e
						}
					}, 100);
					return window.addEventListener("scroll", e),
						function() {
							window.removeEventListener("scroll", e)
						}
				}, [i]), (0, s.useEffect)(function() {
					if (i) document.body.style.overflow = "hidden", document.body.style.position = "fixed", document.body.style.width = "100%", document.body.style.top = "-".concat(window.scrollY, "px");
					else {
						var e = document.body.style.top;
						document.body.style.overflow = "", document.body.style.position = "", document.body.style.width = "", document.body.style.top = "", window.scrollTo(0, -1 * parseInt(e || "0"))
					}
				}, [i]);
				var T = (0, f.q_)({
						opacity: i ? 1 : 0,
						display: i ? "block" : "none",
						config: {
							duration: 350
						}
					}),
					F = (0, f.q_)({
						blur: i ? 60 : 0,
						maxHeight: i ? "100%" : "0",
						config: {
							duration: 200
						}
					}),
					O = (0, f.q_)({
						backgroundColor: i ? "transparent" : "#fff",
						delay: i ? 0 : 100,
						immediate: !0
					}),
					$ = (0, f.q_)({
						y: g ? 0 : -50,
						config: {
							tension: 300,
							friction: 30
						}
					}),
					M = function(e) {
						b(p === e ? null : e)
					};
				return (0, c.jsxs)(f.q.div, {
					style: {
						transform: $.y.to(function(e) {
							return "translateY(".concat(e, "px)")
						}),
						backdropFilter: F.blur.to(function(e) {
							return "blur(".concat(e, "px)")
						}),
						WebkitBackdropFilter: F.blur.to(function(e) {
							return "blur(".concat(e, "px)")
						}),
						maxHeight: F.maxHeight.to(function(e) {
							return "".concat(e)
						})
					},
					className: "fixed top-0 left-0 w-full h-full z-[100]",
					children: [(0, c.jsxs)(f.q.div, {
						style: O,
						className: "w-full h-[50px] flex items-center justify-between px-[16px]",
						children: [(0, c.jsx)(d(), {
							href: "/",
							className: "no-underline",
							locale: E,
							children: (0, c.jsx)(l(), {
								width: 105,
								height: 24,
								priority: !0,
								src: m.jY,
								alt: "logo"
							})
						}), (0, c.jsx)("div", {
							className: "flex items-center gap-[16px]",
							children: (0, c.jsx)(N, {
								setIsMenuOpen: function(e) {
									r(e), b("official_website_navigation_tech")
								}
							})
						})]
					}), (0, c.jsx)(f.q.div, {
						style: T,
						className: "bg-[transparent] left-0 w-full overflow-auto h-[calc(100vh-50px)] px-[16px] pr-[15.5px] pt-[24px] pb-[80px] menu-container touch-pan-y overscroll-none",
						onTouchMove: function(e) {
							var t = e.currentTarget,
								n = t.scrollTop <= 0,
								i = 1 > Math.abs(t.scrollHeight - t.scrollTop - t.clientHeight),
								a = e.touches[0],
								r = a.clientY - (t.dataset.lastTouchY ? parseFloat(t.dataset.lastTouchY) : a.clientY);
							t.dataset.lastTouchY = a.clientY.toString(), (n && r > 0 || i && r < 0) && e.preventDefault()
						},
						onTouchStart: function(e) {
							e.currentTarget.dataset.lastTouchY = e.touches[0].clientY.toString()
						},
						children: (0, c.jsx)("div", {
							className: "flex flex-col",
							children: S.map(function(e, n) {
								return (0, c.jsxs)("div", {
									className: "border-b border-[#F2F3F5]",
									children: [(0, c.jsxs)("div", {
										className: "flex items-center justify-between py-[16px]",
										onClick: function() {
											return M(e.title)
										},
										children: [(0, c.jsx)("span", {
											className: "text-[18px] text-[#050038]",
											children: L(e.title)
										}), (0, c.jsx)("svg", {
											xmlns: "http://www.w3.org/2000/svg",
											width: "20",
											height: "20",
											viewBox: "0 0 20 20",
											fill: "none",
											children: (0, c.jsx)("path", {
												d: "M3.63604 12.929L10 6.56505L16.364 12.929",
												stroke: "black",
												"stroke-width": "2"
											})
										})]
									}), (0, c.jsx)(y, {
										menu: e.menu,
										parentTitle: e.title,
										isShow: p === e.title,
										page: t,
										locale: E,
										setIsMenuOpen: r,
										isLast: n === S.length - 1
									})]
								}, e.title)
							})
						})
					})]
				})
			}
		},
		72658: function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, {
				__N_SSP: function() {
					return eC
				},
				default: function() {
					return eL
				}
			});
			var i = n(11527),
				a = n(51517),
				r = n(37990),
				c = n(78381),
				s = n(55754),
				o = n(50833),
				l = n(50959),
				p = n(84605),
				d = n(90470),
				f = n.n(d),
				m = n(96462),
				x = n(10081),
				u = n.n(x),
				h = n(91489),
				b = f()(function() {
					return Promise.resolve().then(n.bind(n, 51006))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [51006]
						}
					}
				}),
				_ = function() {
					var e = (0, s._)((0, l.useState)(!1), 2),
						t = e[0],
						n = e[1],
						a = (0, p.$G)().t,
						c = (0, r.Z)(),
						d = c.isChinese,
						f = c.locale;
					(0, l.useEffect)(function() {
						n(!0)
					}, []);
					var x = (0, o.q_)({
							opacity: t ? 1 : 0,
							transform: "translateY(".concat(t ? 0 : 30, "%)"),
							delay: 200,
							config: {
								easing: o.Z5.easeInCirc
							}
						}),
						_ = (0, o.q_)({
							opacity: t ? 1 : 0,
							transform: "translateY(".concat(t ? 0 : 50, "%)"),
							delay: 500,
							config: {
								easing: o.Z5.easeInCirc
							}
						}),
						g = (0, o.q_)({
							opacity: t ? 1 : 0,
							delay: 300,
							config: {
								easing: o.Z5.easeInCirc
							}
						});
					return (0, i.jsxs)("div", {
						className: "relative w-full overflow-x-hidden h-[420px] bg-[url('https://filecdn.minimax.chat/public/4d4ecad9-5254-4b70-8091-d1bfb22eb167.png?x-oss-process=image/format,webp')] bg-cover bg-center text-center pt-[88px] pb-[42px] mb-[64px]",
						children: [(0, i.jsxs)(o.q.div, {
							style: g,
							className: "absolute top-0 left-1/2 -translate-x-1/2 w-full min-w-[1920px] flex justify-between",
							children: [(0, i.jsx)(u(), {
								src: "https://filecdn.minimax.chat/public/3ab56da4-c1b9-4a86-b2f0-4465871df989.png?x-oss-process=image/format,webp",
								alt: "left",
								width: 624,
								height: 420
							}), (0, i.jsx)(u(), {
								src: "https://filecdn.minimax.chat/public/b9f81613-471c-497d-8b35-467a36498aea.png?x-oss-process=image/format,webp",
								alt: "right",
								width: 620,
								height: 420
							})]
						}), (0, i.jsxs)("div", {
							children: [(0, i.jsxs)(o.q.div, {
								style: x,
								children: [(0, i.jsx)("h1", {
									className: "text-[#050038] text-[48px] font-medium mb-0 whitespace-pre-wrap leading-[64px]",
									children: a("platform_overview_first_screen_one_sentence_description")
								}), (0, i.jsx)("p", {
									className: "text-[#050038] opacity-60 text-[20px] py-[32px] mb-[16px] font-[400]",
									children: a("platform_overview_first_screen_one_sentence_description1")
								})]
							}), (0, i.jsxs)(o.q.div, {
								style: _,
								className: "mb-[16px]",
								children: [d && (0, i.jsx)(b, {
									btnText: a("platform_overview_first_screen_button_1"),
									btnClassName: "bg-[#04002B] text-[#fff] font-medium text-sm rounded-full inline-flex p-[8px_24px_8px_32px] border border-solid border-[#04002B] mr-[16px]",
									btnVariables: {
										"--secondary-color": "#fff"
									},
									onClick: function() {
										(0, m.I)({
											event_name: "trial_click",
											page: "open_platform_home_page",
											trial_type: "default"
										});
										var e = d ? "".concat(h.vi, "/examination-center/text-experience-center/cc_v2") : "".concat(h.vi).concat("en" === f ? "/en" : "/zh", "/cooperate");
										window.open(e, "_blank")
									}
								}), (0, i.jsx)(b, {
									btnText: a("platform_overview_first_screen_button_2"),
									btnClassName: "bg-transparent text-[#04002B] font-medium text-sm rounded-full inline-flex p-[8px_24px_8px_32px] border border-solid border-[#181E25CC]",
									onClick: function() {
										(0, m.I)({
											event_name: "learn_more_click",
											page: "open_platform_home_page",
											option: "文档中心"
										}), window.open(d ? "".concat(h.vi, "/document/platform%20introduction?key=66701c8e1d57f38758d58198") : "".concat(h.RI, "/document/platform%20introduction?key=66701c8e1d57f38758d58198"), "_blank")
									}
								})]
							})]
						})]
					})
				},
				g = n(2057),
				w = n(27170);
			n(72862), n(27266);
			var v = n(97854),
				j = n(10793),
				y = n(53807),
				N = n.n(y),
				k = /matrix\(\s*([\d.-]+),\s*([\d.-]+),\s*([\d.-]+),\s*([\d.-]+),\s*([\d.-]+),\s*([\d.-]+)\s*\)/,
				I = function(e) {
					var t = e.partnersList,
						n = e.isHovering,
						a = (0, s._)((0, l.useState)(), 2),
						r = a[0],
						c = a[1],
						o = (0, l.useRef)("");
					return (0, l.useEffect)(function() {
						var e = null == r ? void 0 : r.wrapperEl;
						if (e) {
							if (n) o.current = e.style.transform, null == r || null === (t = r.autoplay) || void 0 === t || t.stop(), e.style.transform = window.getComputedStyle(e).transform;
							else {
								var t, i, a = e.style.transform.match(k),
									c = Number(null == a ? void 0 : a[5]);
								Number.isNaN(c) || (e.style.transitionDuration = "".concat(Math.floor((298 + c % 298) / 298 * 4e3), "ms")), e.style.transform = o.current, null == r || null === (i = r.autoplay) || void 0 === i || i.start()
							}
						}
					}, [n]), (0, i.jsx)(v.tq, {
						direction: "horizontal",
						slidesPerView: "auto",
						className: "w-full ".concat(N()["swiper-container-free-mode"]),
						loop: !0,
						loopAdditionalSlides: 8,
						modules: [j.pt, j.Rv],
						freeMode: !0,
						speed: 4e3,
						simulateTouch: !1,
						autoplay: {
							delay: 0,
							pauseOnMouseEnter: !0,
							disableOnInteraction: !1
						},
						onSwiper: function(e) {
							c(e)
						},
						children: t.map(function(e, t) {
							return (0, i.jsx)(v.o5, {
								className: "w-auto",
								children: (0, i.jsx)("div", {
									className: "flex flex-col",
									children: e.map(function(e, t) {
										return (0, i.jsx)(u(), {
											src: e.icon,
											alt: e.title,
											width: 298,
											height: 114
										}, t)
									})
								})
							}, t)
						})
					})
				},
				E = [{
					id: 0,
					icon: "https://filecdn.minimax.chat/public/db6f42aa-c259-4e33-a676-8c84a7d52efb.png?x-oss-process=image/format,webp",
					title: "腾讯",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 1,
					icon: "https://filecdn.minimax.chat/public/8c376d85-7d4a-4d13-9bd0-86d487a667c7.png?x-oss-process=image/format,webp",
					title: "金山办公",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 2,
					icon: "https://filecdn.minimax.chat/public/d76167c7-7bc1-48d8-a510-f95363f63f10.png?x-oss-process=image/format,webp",
					title: "美团",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 3,
					icon: "https://filecdn.minimax.chat/public/3c6d4611-01cc-493f-8dd2-8ca277cd994d.png?x-oss-process=image/format,webp",
					title: "小红书",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 4,
					icon: "https://filecdn.minimax.chat/public/76acf37f-43cd-4318-820d-b0cdd9b34d7b.png?x-oss-process=image/format,webp",
					title: "淘宝",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 5,
					icon: "https://filecdn.minimax.chat/public/8fcb688f-fe85-45d9-b907-fe9ce75b7eef.png?x-oss-process=image/format,webp",
					title: "滴滴",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 6,
					icon: "https://filecdn.minimax.chat/public/e236165a-325a-4c30-9a10-cd0af3f98d53.png?x-oss-process=image/format,webp",
					title: "小米",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 7,
					icon: "https://filecdn.minimax.chat/public/b420b408-f672-4afc-8b9f-89a2fa85c573.png?x-oss-process=image/format,webp",
					title: "快手",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 8,
					icon: "https://filecdn.minimax.chat/public/ffb427c2-570b-459b-b49e-62144ef826c8.png?x-oss-process=image/format,webp",
					title: "网易",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 9,
					icon: "https://filecdn.minimax.chat/public/a8d3640c-7ac3-4274-aa47-f77763d905ab.png?x-oss-process=image/format,webp",
					title: "阅文",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 10,
					icon: "https://filecdn.minimax.chat/public/c28e5394-c8ef-4978-b02a-e9af9f16813b.png?x-oss-process=image/format,webp",
					title: "新奥",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 11,
					icon: "https://filecdn.minimax.chat/public/dbd52122-a01c-49c0-a157-fb992f9cf668.png?x-oss-process=image/format,webp",
					title: "雷鸟",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 12,
					icon: "https://filecdn.minimax.chat/public/ef5d8e49-6683-4103-b989-e4f7780d034b.png?x-oss-process=image/format,webp",
					title: "魅族",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 13,
					icon: "https://filecdn.minimax.chat/public/b6da7d17-dce9-453c-acc8-d9381dbd5135.png?x-oss-process=image/format,webp",
					title: "作业帮",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 14,
					icon: "https://filecdn.minimax.chat/public/5bac4df4-6b82-4f92-8cfd-b19f492de282.png?x-oss-process=image/format,webp",
					title: "好未来",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 15,
					icon: "https://filecdn.minimax.chat/public/3863ee42-f481-4509-a69e-bebc4e747ecb.png?x-oss-process=image/format,webp",
					title: "高途",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 16,
					icon: "https://filecdn.minimax.chat/public/f9bb6b22-6575-47b9-8fae-27fb34b0bbe2.png?x-oss-process=image/format,webp",
					title: "掌阅",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 17,
					icon: "https://filecdn.minimax.chat/public/78ff6fa5-3541-45d0-8ad1-4230a93dbd18.png?x-oss-process=image/format,webp",
					title: "联想",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 18,
					icon: "https://filecdn.minimax.chat/public/9b7b7a26-75f7-4528-a9cf-c2f7d9b7bf5f.png?x-oss-process=image/format,webp",
					title: "智联招聘",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 19,
					icon: "https://filecdn.minimax.chat/public/d8d25aab-9d12-4797-8e6f-3ea423360bab.png?x-oss-process=image/format,webp",
					title: "高济健康",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 20,
					icon: "https://filecdn.minimax.chat/public/0602b5a0-9fb1-4a1d-b074-7d7357d3ba5e.png?x-oss-process=image/format,webp",
					title: "爱奇艺",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 21,
					icon: "https://filecdn.minimax.chat/public/cb373550-2deb-48b9-9f32-ebb8bc5fa599.png?x-oss-process=image/format,webp",
					title: "soul",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 22,
					icon: "https://filecdn.minimax.chat/public/96fec645-108d-459e-bea9-7e090d93317d.png?x-oss-process=image/format,webp",
					title: "Haivivi",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 24,
					icon: "https://filecdn.minimax.chat/public/7ded375b-39ea-4131-824b-3b91ccc9a2ec.png?x-oss-process=image/format,webp",
					title: "斗鱼",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 25,
					icon: "https://filecdn.minimax.chat/public/fb46ffa2-4f9f-427a-83c0-280419f7f41a.png?x-oss-process=image/format,webp",
					title: "蜜度",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 26,
					icon: "https://filecdn.minimax.chat/public/271d8aff-ecff-423b-94db-8e6ebaade60f.png?x-oss-process=image/format,webp",
					title: "快看",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 27,
					icon: "https://filecdn.minimax.chat/public/efaffa5f-bb73-4c5c-b951-590011442cbd.png?x-oss-process=image/format,webp",
					title: "万兴科技",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 23,
					icon: "https://filecdn.minimax.chat/public/fad2323d-a711-4730-b784-6a7bf14a7c96.png?x-oss-process=image/format,webp",
					title: "weaver",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 28,
					icon: "https://filecdn.minimax.chat/public/c987b711-1f53-4b7c-9d00-26f4ffd4c5a6.png?x-oss-process=image/format,webp",
					title: "中金公司",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}, {
					id: 29,
					icon: "https://filecdn.minimax.chat/public/d21d34d6-32c4-4243-a536-f8e10236734e.png?x-oss-process=image/format,webp",
					title: "新东方",
					style: {
						mobile: "w-[33.3%]",
						pc: "w-[25%]"
					}
				}],
				C = (0, w.Z)((0, g._)(E).concat((0, g._)(E), (0, g._)(E)), 3),
				L = function() {
					var e = (0, s._)((0, l.useState)(!1), 2),
						t = e[0],
						n = e[1];
					return (0, i.jsx)("div", {
						className: "mb-[110px]",
						onMouseEnter: function() {
							return n(!0)
						},
						onMouseLeave: function() {
							return n(!1)
						},
						children: (0, i.jsx)(I, {
							partnersList: C,
							isHovering: t
						})
					})
				},
				S = n(45166),
				T = n(98703);

			function F(e) {
				var t = e.cls,
					n = void 0 === t ? "" : t,
					a = e.wrappercls;
				return (0, i.jsx)("div", {
					className: void 0 === a ? "" : a,
					children: [0, 1, 2].map(function(e) {
						return (0, i.jsx)(u(), {
							className: "".concat(e > 0 ? "ml-[8px]" : "", " ").concat(n),
							src: "https://filecdn.minimax.chat/public/6731c098-37ef-4ae4-9e8b-9a35de62071f.png?x-oss-process=image/format,webp",
							width: 48,
							height: 48,
							style: {
								width: 48,
								height: 48
							},
							alt: "dots",
							priority: !1
						}, e)
					})
				})
			}
			var O = function(e) {
					var t = e.cls;
					return (0, i.jsxs)("svg", {
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						className: t,
						children: [(0, i.jsx)("g", {
							"clip-path": "url(#clip0_844_119866)",
							children: (0, i.jsx)("path", {
								"fill-rule": "evenodd",
								"clip-rule": "evenodd",
								d: "M13.137 8.12631L8.04578 3.03516L7.19726 3.88368L10.8399 7.52631H3.20312V8.72631H10.8399L7.19726 12.369L8.04578 13.2175L13.137 8.12631Z",
								fill: "currentColor"
							})
						}), (0, i.jsx)("defs", {
							children: (0, i.jsx)("clipPath", {
								id: "clip0_844_119866",
								children: (0, i.jsx)("rect", {
									width: "14.4",
									height: "14.4",
									fill: "white",
									transform: "translate(0.796875 0.800781)"
								})
							})
						})]
					})
				},
				$ = n(21243),
				M = n.n($),
				G = function(e) {
					var t = e.title,
						n = e.name,
						a = e.description,
						c = e.specials,
						s = e.detailLink,
						o = (0, p.$G)().t,
						l = (0, r.Z)().isChinese;
					return (0, i.jsxs)("div", {
						className: "group relative inline-block w-[276px] h-[568px] bg-[#fff] rounded-[24px] border-[#EEEEEE] border-solid border mr-6 shadow-[0_13px_26px_0_#00000014] shrink-0 hover:border-[#CBCBCB33] hover:w-[420px] transition-all duration-300",
						children: [(0, i.jsx)("div", {
							className: "flex items-center h-[30px] rounded-t-[24px] bg-[#FAFAFA] group-hover:bg-[#1456F0] transition-all",
							children: (0, i.jsx)(F, {
								cls: "w-[8px] h-[8px]",
								wrappercls: "ml-[30px] opacity-40"
							})
						}), (0, i.jsxs)("div", {
							className: "mt-[60px] mx-[30px] text-left group-hover:mt-[40px] transition-all duration-[200ms] delay-[150ms] group-hover:ease-in",
							children: [(0, i.jsx)("div", {
								className: "font-[Poppins] text-[#000] text-[32px] leading-[48px] h-[96px] font-semibold group-hover:mb-[12px] group-hover:mb-0 transition-all delay-[150ms] duration-[200ms] flex items-center",
								children: t
							}), (0, i.jsx)("div", {
								className: "text-[16px] leading-[28px] font-normal max-h-0 group-hover:max-h-[112px] transition-all duration-[300ms] delay-0 group-hover:delay-[150ms] group-hover:ease-in",
								children: (0, i.jsx)("div", {
									className: "text-[#050038] invisible group-hover:visible opacity-0 group-hover:opacity-50 transition-all group-hover:delay-[200ms]",
									children: a
								})
							}), (0, i.jsx)("div", {
								className: "bg-[#0000000F] w-full h-[1px] m-0 my-[32px]"
							}), (0, i.jsx)("div", {
								className: "text-[#050038] text-[16px] font-normal",
								children: c.map(function(e, t) {
									return (0, i.jsxs)("div", {
										className: "text-[18px] mb-3 flex h-[40px] items-center",
										children: [(0, i.jsx)(u(), {
											src: e.icon,
											alt: e.text,
											className: "mr-6",
											width: 20,
											height: 20
										}), (0, i.jsx)("span", {
											className: "text-ellipsis overflow-hidden whitespace-nowrap inline-block",
											children: e.text
										})]
									}, t)
								})
							})]
						}), l && (0, i.jsx)(M(), {
							href: s,
							className: "no-underline text-[#000] absolute bottom-[48px] left-0 right-0",
							target: "_blank",
							onClick: function() {
								(0, m.I)({
									event_name: "trial_click",
									page: "open_platform_home_page",
									trial_type: n
								})
							},
							children: (0, i.jsxs)("div", {
								className: "mt-[32px] mx-[30px] leading-[48px] h-[48px] rounded-full cursor-pointer group-hover:bg-[#181E25] group-hover:text-[#fff] transition-all duration-300",
								children: [(0, i.jsx)("span", {
									className: "mr-[10px] hidden group-hover:inline-block",
									children: o("platform_overview_third_screen_button_1")
								}), (0, i.jsx)("span", {
									children: (0, i.jsx)(O, {
										cls: "w-[16px] h-[16px] group-hover:text-[#fff] transition-all duration-300 align-[-2px]"
									})
								})]
							})
						})]
					})
				};

			function Z(e) {
				var t = e.t,
					n = (0, r.Z)().isChinese;
				return [{
					title: t("platform_overview_card_0"),
					name: "minimax_text_01",
					description: t("platform_overview_card_0_description"),
					detailLink: "".concat(h.vi, "/examination-center/text-experience-center/cc_v2"),
					specials: [{
						text: t("platform_overview_card_0_feature_1"),
						icon: "https://filecdn.minimax.chat/public/d84f4bae-1622-41e4-a813-9f936763aefe.png?x-oss-process=image/format,webp"
					}, {
						text: t("platform_overview_card_0_feature_2"),
						icon: "https://filecdn.minimax.chat/public/7ded88ea-99b2-410c-b014-35c7343fe9ae.png?x-oss-process=image/format,webp"
					}, {
						text: t("platform_overview_card_0_feature_3"),
						icon: "https://filecdn.minimax.chat/public/96e4076c-5f26-4679-ab22-0c6757772ffe.png?x-oss-process=image/format,webp"
					}]
				}, {
					title: t("platform_overview_card_1"),
					name: "minimax_text_01",
					description: t("platform_overview_card_1_description"),
					detailLink: "".concat(h.vi, "/examination-center/text-experience-center/cc_v2"),
					specials: [{
						text: t("platform_overview_card_1_feature1"),
						icon: "https://filecdn.minimax.chat/public/d84f4bae-1622-41e4-a813-9f936763aefe.png?x-oss-process=image/format,webp"
					}, {
						text: t("platform_overview_card_1_feature2"),
						icon: "https://filecdn.minimax.chat/public/7ded88ea-99b2-410c-b014-35c7343fe9ae.png?x-oss-process=image/format,webp"
					}, {
						text: t("platform_overview_card_1_feature3"),
						icon: "https://filecdn.minimax.chat/public/96e4076c-5f26-4679-ab22-0c6757772ffe.png?x-oss-process=image/format,webp"
					}]
				}, {
					title: t("platform_overview_card_2"),
					name: "card_2",
					description: t("platform_overview_card_2_description"),
					detailLink: "".concat(h.vi, "/document/video_generation?key=66d1439376e52fcee2853049"),
					specials: [{
						text: t("platform_overview_card_2_feature_1"),
						icon: "https://filecdn.minimax.chat/public/1c1c966a-d609-4c3e-96e1-0816f8fa550b.png?x-oss-process=image/format,webp"
					}, {
						text: t("platform_overview_card_2_feature_2"),
						icon: "https://filecdn.minimax.chat/public/7ded88ea-99b2-410c-b014-35c7343fe9ae.png?x-oss-process=image/format,webp"
					}, {
						text: t("platform_overview_card_2_feature_3"),
						icon: "https://filecdn.minimax.chat/public/4baa983b-f929-4b18-883b-b503c451a665.png?x-oss-process=image/format,webp"
					}],
					onlyShowInChinese: !1
				}, {
					title: t("platform_overview_card_3"),
					name: "card_3",
					description: t("platform_overview_card_3_description"),
					detailLink: "".concat(h.vi, "/examination-center/voice-experience-center"),
					specials: [{
						text: t("platform_overview_card_3_feature_1"),
						icon: "https://filecdn.minimax.chat/public/fa489e94-0c43-4b0f-a615-68328a9e3642.png?x-oss-process=image/format,webp"
					}, {
						text: t("platform_overview_card_3_feature_2"),
						icon: "https://filecdn.minimax.chat/public/c8e878c1-d3d3-4157-9ef6-bddf7af2b166.png?x-oss-process=image/format,webp"
					}, {
						text: t("platform_overview_card_3_feature_3"),
						icon: "https://filecdn.minimax.chat/public/4baa983b-f929-4b18-883b-b503c451a665.png?x-oss-process=image/format,webp"
					}]
				}].filter(function(e) {
					return !!n || !e.onlyShowInChinese
				})
			}
			var B = function() {
					var e = (0, p.$G)().t,
						t = Z({
							t: e
						});
					return (0, i.jsxs)("div", {
						className: "pb-[130px] text-center max-w-[1440px] mx-auto",
						children: [(0, i.jsx)("h1", {
							className: "text-[#050038] text-[28px] font-medium mb-[54px]",
							children: e("platform_overview_third_screen_name")
						}), (0, i.jsx)("div", {
							className: "flex mx-[60px] justify-center",
							children: t.map(function(e, t) {
								return (0, l.createElement)(G, (0, T._)((0, S._)({}, e), {
									key: t
								}))
							})
						})]
					})
				},
				A = n(51006),
				P = n(24426),
				W = function(e) {
					var t = e.title,
						n = e.desc,
						a = e.name,
						c = e.detailLink,
						s = e.detailLink_en,
						o = (0, p.$G)().t,
						l = (0, r.Z)().locale,
						d = (0, P.useRouter)();
					return (0, i.jsxs)("div", {
						className: "flex flex-col gap-[64px]",
						children: [(0, i.jsxs)("div", {
							className: "flex flex-col gap-[16px]",
							children: [(0, i.jsx)("span", {
								className: "text-[#050038] text-[28px]",
								style: {
									fontFamily: "Poppins"
								},
								children: o(t)
							}), (0, i.jsx)("svg", {
								xmlns: "http://www.w3.org/2000/svg",
								width: "116",
								height: "54",
								viewBox: "0 0 116 54",
								fill: "none",
								children: (0, i.jsx)("path", {
									d: "M71.543 5L17.543 49",
									stroke: "#050038"
								})
							}), (0, i.jsx)("div", {
								children: (0, i.jsx)("p", {
									className: "mb-[12px] text-[#050038B2] text-[14px] leading-[28px] whitespace-pre-wrap font-[300]",
									children: o(n)
								})
							})]
						}), (0, i.jsx)("div", {
							className: "flex",
							children: (0, i.jsx)(A.default, {
								btnText: o("platform_overview_fourth_screen_button_1"),
								btnClassName: "rounded-full text-[14px] font-[400] p-[12px_18px_12px_24px] bg-[#04002B]",
								btnVariables: {
									"--primary-color": "transparent",
									"--secondary-color": "#fff"
								},
								onClick: function() {
									(0, m.I)({
										event_name: "learn_more_click",
										page: "open_platform_home_page",
										option: a
									});
									var e = "en" === l ? s : c;
									e.startsWith("http") ? window.open(e, "_blank") : d.push(e, e, {
										locale: d.locale
									})
								}
							})
						})]
					})
				},
				H = n(98179),
				z = n.n(H),
				R = [{
					tag: "platform_overview_fourth_screen_cc_name",
					title: "platform_overview_fourth_screen_cc_name1",
					name: "Chat_completion_API",
					desc: "platform_overview_fourth_screen_cc_description",
					detailLink: "".concat(h.vi, "/document/ChatCompletion%20v2?key=66701d281d57f38758d581d0"),
					detailLink_en: "".concat(h.RI, "/document/video_generation?key=66d1439376e52fcee2853049"),
					img: "https://filecdn.minimax.chat/public/476bb99a-f3b1-4442-8f3a-4083b45f7eae.png?x-oss-process=image/format,webp",
					img_en: "https://filecdn.minimax.chat/public/6ffec230-8b2e-4da9-ab48-23f49ddd959c.png?x-oss-process=image/format,webp"
				}, {
					tag: "platform_overview_fourth_screen_realtime_name",
					title: "platform_overview_fourth_screen_realtime_name1",
					name: "Realtime_API",
					desc: "platform_overview_fourth_screen_realtime_description",
					detailLink: "".concat(h.vi, "/document/Realtime?key=640e0c9c5f918b4f6c4e2d58"),
					detailLink_en: "".concat(h.RI, "/document/Voice%20Cloning?key=66719032a427f0c8a570165b"),
					img: "https://filecdn.minimax.chat/public/e9a190c2-32de-45a5-bf10-0ec5ffd3dcc4.png?x-oss-process=image/format,webp",
					img_en: "https://filecdn.minimax.chat/public/61423743-c0e4-46d2-a78c-e21606b99826.png?x-oss-process=image/format,webp"
				}, {
					tag: "platform_overview_fourth_screen_t2a_name",
					title: "platform_overview_fourth_screen_t2a_name1",
					name: "T2A_API",
					desc: "platform_overview_fourth_screen_t2a_description",
					detailLink: "".concat(h.vi, "/document/T2A%20V2?key=66719005a427f0c8a5701643"),
					detailLink_en: "".concat(h.RI, "/document/T2A%20V2?key=66719005a427f0c8a5701643"),
					img: "https://filecdn.minimax.chat/public/2bb72636-004f-47cb-824b-f3638132d6e6.png?x-oss-process=image/format,webp",
					img_en: "https://filecdn.minimax.chat/public/2bb72636-004f-47cb-824b-f3638132d6e6.png?x-oss-process=image/format,webp"
				}, {
					tag: "platform_overview_fourth_screen_vedio_name",
					title: "platform_overview_fourth_screen_vedio_name1",
					name: "video_generation_API",
					desc: "platform_overview_fourth_screen_vedio_description",
					detailLink: "".concat(h.vi, "/document/video_generation?key=66d1439376e52fcee2853049"),
					detailLink_en: "",
					img: "https://filecdn.minimax.chat/public/e33cd2b6-7dd3-4412-a932-61941cff21a7.png?x-oss-process=image/format,webp",
					img_en: "",
					hideInEnglish: !0
				}];
			n(54843);
			var U = function() {
					var e = (0, p.$G)().t,
						t = (0, s._)((0, l.useState)(0), 2),
						n = t[0],
						a = t[1],
						c = (0, s._)((0, l.useState)(), 2),
						o = c[0],
						d = c[1],
						f = (0, s._)((0, l.useState)(), 2),
						m = f[0],
						x = f[1],
						h = (0, r.Z)().isEnglish;
					return (0, i.jsxs)("div", {
						className: "w-full flex flex-col justify-center items-center",
						children: [(0, i.jsx)("span", {
							className: "text-[#050038] text-[28px] font-[500] mb-[32px]",
							children: e("platform_overview_fourth_screen_name")
						}), (0, i.jsx)("div", {
							className: "flex w-full items-center justify-center mb-[16px]",
							children: R.map(function(t, r) {
								return h && t.hideInEnglish ? null : (0, i.jsxs)("div", {
									className: "cursor-pointer leading-[20px] text-[16px] hover:text-[#1456F0] py-[7px] px-[16px] ".concat(n === r ? "text-[#1456F0]" : "text-[#050038]"),
									style: {
										fontFamily: "Poppins"
									},
									onClick: function() {
										null == o || o.slideTo(r), null == m || m.slideTo(r), a(r)
									},
									children: [e(t.tag), (0, i.jsx)("div", {
										className: "mt-[10px] mx-auto w-[calc(100%-16px)] h-[1.5px] bg-[#1456F0] ".concat(n === r ? "opacity-100" : "opacity-0")
									})]
								}, t.title)
							})
						}), (0, i.jsxs)("div", {
							className: "w-full px-[60px] overflow-hidden max-w-[1440px] flex justify-between items-center mx-auto pb-[130px]",
							children: [(0, i.jsx)(v.tq, {
								modules: [j.Qr],
								onSwiper: d,
								controller: {
									control: m
								},
								effect: "slide",
								speed: 500,
								spaceBetween: 24,
								className: "".concat(z().customSwiperEasing, " max-w-[442px]"),
								onRealIndexChange: function(e) {
									a(e.realIndex)
								},
								children: R.map(function(e) {
									return h && e.hideInEnglish ? null : (0, i.jsx)(v.o5, {
										children: (0, i.jsx)(W, (0, S._)({}, e))
									}, e.title)
								})
							}), (0, i.jsx)(v.tq, {
								modules: [j.xW, j.Qr],
								onSwiper: x,
								controller: {
									control: o
								},
								effect: "fade",
								fadeEffect: {
									crossFade: !0
								},
								speed: 300,
								className: "max-w-[850px]",
								onRealIndexChange: function(e) {
									a(e.realIndex)
								},
								children: R.map(function(e) {
									return h && e.hideInEnglish ? null : (0, i.jsx)(v.o5, {
										children: (0, i.jsx)(u(), {
											priority: !0,
											width: 850,
											height: 551,
											src: h ? e.img_en : e.img,
											alt: "model"
										})
									}, e.title)
								})
							})]
						})]
					})
				},
				q = function(e) {
					var t = e.logo,
						n = e.desc,
						a = e.img,
						r = (0, p.$G)().t;
					return (0, i.jsxs)("div", {
						className: "relative flex flex-col items-center w-[1320px] mx-auto pb-[110px]",
						children: [(0, i.jsx)(u(), {
							src: t,
							alt: "icon",
							width: 200,
							height: 100,
							className: "w-auto mb-[12px]"
						}), (0, i.jsx)("p", {
							className: "text-[#050038] text-[14px] opacity-50 whitespace-pre-wrap leading-[25px] text-center mb-[24px]",
							children: r(n)
						}), (0, i.jsx)(u(), {
							src: a,
							alt: "img",
							width: 1442,
							height: 749,
							className: "z-10"
						}), (0, i.jsx)(u(), {
							className: "absolute top-[140px] right-0",
							src: "https://filecdn.minimax.chat/public/c1ba2464-277a-42e1-be62-2d2853ac3fdc.png",
							alt: "img",
							width: 575,
							height: 575
						})]
					})
				},
				V = [{
					title: "platform_overview_fifth_screen_case1_name",
					tabIcon: "https://filecdn.minimax.chat/public/d0fac7bf-f53b-490f-bce7-f50966bdb4da.png?x-oss-process=image/format,webp",
					selectedTabIcon: "https://filecdn.minimax.chat/public/012a2b73-30d9-4018-a2fb-bf2bea941e42.png?x-oss-process=image/format,webp",
					logo: "https://filecdn.minimax.chat/public/79c55d29-1623-40d3-a8e6-6833bbf243de.png?x-oss-process=image/format,webp",
					desc: "platform_overview_fifth_screen_case1_description",
					img: "https://filecdn.minimax.chat/public/39216225-02d5-4696-9656-5dd811fe37bf.png?x-oss-process=image/format,webp"
				}, {
					title: "platform_overview_fifth_screen_case2_name",
					tabIcon: "https://filecdn.minimax.chat/public/7515213c-3c3c-4805-a840-e43c065850b2.png?x-oss-process=image/format,webp",
					selectedTabIcon: "https://filecdn.minimax.chat/public/37a7cebe-7819-4620-8483-bc9b04762d32.png?x-oss-process=image/format,webp",
					logo: "https://filecdn.minimax.chat/public/17285091-19a0-4f9e-abb3-e704d5960d11.png?x-oss-process=image/format,webp",
					desc: "platform_overview_fifth_screen_case2_description",
					img: "https://filecdn.minimax.chat/public/21042a34-3bfe-4ad2-a457-33008bd26b1a.png?x-oss-process=image/format,webp"
				}, {
					title: "platform_overview_fifth_screen_case3_name",
					tabIcon: "https://filecdn.minimax.chat/public/8308f815-4ba2-472d-a14f-ece1a342bbbc.png?x-oss-process=image/format,webp",
					selectedTabIcon: "https://filecdn.minimax.chat/public/a3d9725d-2f6f-428d-8c90-5b74b414d574.png?x-oss-process=image/format,webp",
					logo: "https://filecdn.minimax.chat/public/a24a3025-8f8b-4240-9d30-ea93fd3a1de0.png?x-oss-process=image/format,webp",
					desc: "platform_overview_fifth_screen_case3_description",
					img: "https://filecdn.minimax.chat/public/646dd837-f6b8-45e7-a490-aa0335d4318d.png?x-oss-process=image/format,webp"
				}, {
					title: "platform_overview_fifth_screen_case5_name",
					tabIcon: "https://filecdn.minimax.chat/public/7949fe1d-0225-4cd6-9767-cad0c7a06b17.png?x-oss-process=image/format,webp",
					selectedTabIcon: "https://filecdn.minimax.chat/public/b87c3298-ab2c-409f-97b9-5b30491980f9.png?x-oss-process=image/format,webp",
					logo: "https://filecdn.minimax.chat/public/d01e3832-85fc-4fbd-af77-d88dd0020623.png?x-oss-process=image/format,webp",
					desc: "platform_overview_fifth_screen_case5_description",
					img: "https://filecdn.minimax.chat/public/f38b6ee0-d646-4b17-bffa-52af40a71a7e.png?x-oss-process=image/format,webp"
				}];
			n(67230);
			var Y = function() {
					var e = (0, s._)((0, l.useState)(0), 2),
						t = e[0],
						n = e[1],
						a = (0, s._)((0, l.useState)(), 2),
						r = a[0],
						c = a[1],
						o = (0, s._)((0, l.useState)(-1), 2),
						d = o[0],
						f = o[1],
						m = (0, p.$G)().t;
					return (0, i.jsxs)("div", {
						className: "w-full flex flex-col justify-center items-center",
						children: [(0, i.jsx)("span", {
							className: "text-[#050038] text-[28px] font-[500] mb-[32px]",
							children: m("platform_overview_fifth_screen_name")
						}), (0, i.jsx)("div", {
							className: "flex gap-[32px] w-full items-center justify-center mb-[44px]",
							children: V.map(function(e, a) {
								return (0, i.jsxs)("div", {
									className: "my-[7px] cursor-pointer leading-[20px] text-[14px] hover:text-[#1456F0] ".concat(t === a ? "text-[#1456F0]" : "text-[#050038]"),
									onMouseEnter: function() {
										f(a)
									},
									onMouseLeave: function() {
										f(-1)
									},
									onClick: function() {
										null == r || r.slideTo(a), n(a)
									},
									children: [(0, i.jsxs)("div", {
										className: "flex gap-[8px] px-[16px] items-center justify-center",
										children: [(0, i.jsx)(u(), {
											src: t === a || d === a ? e.selectedTabIcon : e.tabIcon,
											alt: m(e.title),
											width: 16,
											height: 16
										}), m(e.title)]
									}), (0, i.jsx)("div", {
										className: "mt-[10px] mx-auto w-full h-[1.5px] bg-[#1456F0] ".concat(t === a ? "opacity-100" : "opacity-0")
									})]
								}, e.title)
							})
						}), (0, i.jsx)(v.tq, {
							onSwiper: c,
							effect: "fade",
							fadeEffect: {
								crossFade: !0
							},
							modules: [j.pt, j.xW],
							autoplay: {
								delay: 5e3,
								pauseOnMouseEnter: !0
							},
							className: "w-full",
							onRealIndexChange: function(e) {
								n(e.realIndex)
							},
							children: V.map(function(e) {
								return (0, i.jsx)(v.o5, {
									children: (0, i.jsx)(q, (0, S._)({}, e))
								}, e.title)
							})
						})]
					})
				},
				D = function() {
					var e = (0, p.$G)().t,
						t = (0, P.useRouter)(),
						n = (0, r.Z)().locale;
					return (0, i.jsx)("div", {
						className: "max-w-[1440px] mx-auto px-[60px] mt-[40px] mb-[80px]",
						children: (0, i.jsxs)("div", {
							className: "flex flex-col w-full items-center pt-[78px] pb-[37px] bg-[url('https://filecdn.minimax.chat/public/4bce029f-4e66-460c-8e6d-6b566e4c3b61.png?x-oss-process=image/format,webp')] bg-cover bg-center h-[308px] rounded-[24px]",
							children: [(0, i.jsx)("div", {
								className: "text-[#fff] text-[36px] font-[500] mb-[20px] leading-[48px]",
								children: e("platform_overview_sixth_screen_1")
							}), (0, i.jsx)("div", {
								className: "text-[#fff] text-[14px] opacity-60 mb-[36px] leading-[19px]",
								children: e("platform_overview_sixth_screen_2")
							}), (0, i.jsxs)("div", {
								className: "flex gap-[16px] py-[16px]",
								children: [(0, i.jsx)(A.default, {
									btnText: e("platform_overview_sixth_screen_button_1"),
									btnClassName: "rounded-full leading-normal text-[14px] font-[500] p-[8px_24px_8px_32px] border-solid border-[1px] border-transparent bg-[#fff] text-[#050038]",
									onClick: function() {
										(0, m.I)({
											event_name: "contact_us_click",
											page: "open_platform_home_page"
										}), window.open("".concat(h.vi).concat("en" === n ? "/en" : "/zh", "/cooperate"), "_blank")
									}
								}), (0, i.jsx)(A.default, {
									btnText: e("platform_overview_sixth_screen_button_2"),
									btnClassName: "rounded-full leading-normal text-[14px] font-[500] p-[8px_24px_8px_32px] border-solid border-[1px] border-[#fff] bg-transparent text-[#fff]",
									btnVariables: {
										"--primary-color": "transparent",
										"--secondary-color": "#fff"
									},
									onClick: function() {
										(0, m.I)({
											event_name: "pricing_click",
											page: "open_platform_home_page"
										}), t.push("/price", "/price", {
											locale: t.locale
										})
									}
								})]
							})]
						})
					})
				},
				K = n(88716),
				Q = function(e) {
					var t = e.page,
						n = (0, r.Z)().isChinese;
					return (0, a.Z)(t), (0, i.jsxs)("main", {
						className: "min-w-[1440px] overflow-x-auto",
						children: [(0, i.jsx)(c.default, {
							page: t
						}), (0, i.jsx)(_, {}), n && (0, i.jsx)(L, {}), (0, i.jsx)(B, {}), (0, i.jsx)(U, {}), n && (0, i.jsx)(Y, {}), n && (0, i.jsx)(D, {}), (0, i.jsx)(K.default, {
							page: t
						})]
					})
				},
				X = n(57125),
				J = n.n(X),
				ee = /matrix\(\s*([\d.-]+),\s*([\d.-]+),\s*([\d.-]+),\s*([\d.-]+),\s*([\d.-]+),\s*([\d.-]+)\s*\)/,
				et = function(e) {
					var t = e.partnersList,
						n = e.isHovering,
						a = (0, s._)((0, l.useState)(), 2),
						r = a[0],
						c = a[1],
						o = (0, l.useRef)("");
					return (0, l.useEffect)(function() {
						var e = null == r ? void 0 : r.wrapperEl;
						if (e) {
							if (n) o.current = e.style.transform, null == r || null === (t = r.autoplay) || void 0 === t || t.stop(), e.style.transform = window.getComputedStyle(e).transform;
							else {
								var t, i, a = e.style.transform.match(ee),
									c = Number(null == a ? void 0 : a[5]);
								Number.isNaN(c) || (e.style.transitionDuration = "".concat(Math.floor((298 + c % 298) / 298 * 4e3), "ms")), e.style.transform = o.current, null == r || null === (i = r.autoplay) || void 0 === i || i.start()
							}
						}
					}, [n]), (0, i.jsx)(v.tq, {
						direction: "horizontal",
						slidesPerView: "auto",
						className: "w-full ".concat(J()["swiper-container-free-mode"]),
						loop: !0,
						loopAdditionalSlides: 8,
						modules: [j.pt, j.Rv],
						freeMode: !0,
						speed: 4e3,
						simulateTouch: !1,
						autoplay: {
							delay: 0,
							pauseOnMouseEnter: !0,
							disableOnInteraction: !1
						},
						onSwiper: function(e) {
							c(e)
						},
						children: t.map(function(e, t) {
							return (0, i.jsx)(v.o5, {
								className: "w-auto",
								children: (0, i.jsx)("div", {
									className: "flex flex-col",
									children: e.map(function(e, t) {
										return (0, i.jsx)("div", {
											className: "relative w-[160px] h-[60px]",
											children: (0, i.jsx)(u(), {
												src: e.icon,
												alt: e.title,
												fill: !0,
												className: "object-cover"
											})
										}, t)
									})
								})
							}, t)
						})
					})
				},
				en = (0, w.Z)((0, g._)(E).concat((0, g._)(E), (0, g._)(E)), 3),
				ei = function() {
					var e = (0, s._)((0, l.useState)(!1), 2),
						t = e[0],
						n = e[1];
					return (0, i.jsx)("div", {
						className: "mb-[56px]",
						onMouseEnter: function() {
							return n(!0)
						},
						onMouseLeave: function() {
							return n(!1)
						},
						children: (0, i.jsx)(et, {
							partnersList: en,
							isHovering: t
						})
					})
				};

			function ea(e) {
				var t = e.cls,
					n = void 0 === t ? "" : t,
					a = e.wrappercls;
				return (0, i.jsx)("div", {
					className: void 0 === a ? "" : a,
					children: [0, 1, 2].map(function(e) {
						return (0, i.jsx)(u(), {
							className: "".concat(e > 0 ? "ml-[8px]" : "", " ").concat(n),
							src: "https://filecdn.minimax.chat/public/6731c098-37ef-4ae4-9e8b-9a35de62071f.png?x-oss-process=image/format,webp",
							width: 48,
							height: 48,
							style: {
								width: 48,
								height: 48
							},
							alt: "dots",
							priority: !1
						}, e)
					})
				})
			}
			var er = function(e) {
					var t = e.cls;
					return (0, i.jsxs)("svg", {
						width: "16",
						height: "16",
						viewBox: "0 0 16 16",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						className: t,
						children: [(0, i.jsx)("g", {
							"clip-path": "url(#clip0_844_119866)",
							children: (0, i.jsx)("path", {
								"fill-rule": "evenodd",
								"clip-rule": "evenodd",
								d: "M13.137 8.12631L8.04578 3.03516L7.19726 3.88368L10.8399 7.52631H3.20312V8.72631H10.8399L7.19726 12.369L8.04578 13.2175L13.137 8.12631Z",
								fill: "currentColor"
							})
						}), (0, i.jsx)("defs", {
							children: (0, i.jsx)("clipPath", {
								id: "clip0_844_119866",
								children: (0, i.jsx)("rect", {
									width: "14.4",
									height: "14.4",
									fill: "white",
									transform: "translate(0.796875 0.800781)"
								})
							})
						})]
					})
				},
				ec = function(e) {
					var t = e.title,
						n = e.name,
						a = e.description,
						c = e.specials,
						s = e.detailLink,
						o = (0, p.$G)().t,
						l = (0, r.Z)().isChinese;
					return (0, i.jsx)("div", {
						className: "w-full flex justify-center",
						children: (0, i.jsxs)("div", {
							className: "relative w-full max-w-[522px] bg-[#fff] rounded-[24px] border-solid border mb-[32px] shadow-[0px_13px_25px_0_#00000014] border-[#CBCBCB33]",
							children: [(0, i.jsx)("div", {
								className: "flex items-center h-[30px] rounded-t-[24px] bg-[#1456F0]",
								children: (0, i.jsx)(ea, {
									cls: "w-[8px] h-[8px]",
									wrappercls: "ml-[30px] opacity-40"
								})
							}), (0, i.jsxs)("div", {
								className: "mx-[32px] text-left mt-[24px]",
								children: [(0, i.jsx)("div", {
									className: "font-[Poppins] text-[#000] text-[24px] leading-[36px] font-semibold mb-[8px]",
									children: t
								}), (0, i.jsx)("div", {
									className: "text-[14px] leading-[26px] font-normal max-h-[112px]",
									children: (0, i.jsx)("div", {
										className: "text-[#050038] visible opacity-50",
										children: a
									})
								}), (0, i.jsx)("div", {
									className: "bg-[#0000000F] w-full h-[1px] m-0 my-[20px]"
								}), (0, i.jsx)("div", {
									className: "text-[#050038] text-[16px] font-normal",
									children: c.map(function(e, t) {
										return (0, i.jsxs)("div", {
											className: "text-[16px] py-[8px] mb-[12px] flex h-[37px] items-center",
											children: [(0, i.jsx)(u(), {
												src: e.icon,
												alt: e.text,
												className: "mr-[24px]",
												width: 20,
												height: 20
											}), (0, i.jsx)("span", {
												className: "text-ellipsis overflow-hidden whitespace-nowrap inline-block",
												children: e.text
											})]
										}, t)
									})
								})]
							}), l && (0, i.jsx)(M(), {
								href: s,
								className: "no-underline text-[#000]",
								target: "_blank",
								onClick: function() {
									(0, m.I)({
										event_name: "trial_click",
										page: "open_platform_home_page",
										trial_type: n
									})
								},
								children: (0, i.jsxs)("div", {
									className: "mt-[24px] mx-[32px] mb-[32px] leading-[48px] h-[48px] rounded-full cursor-pointer bg-[#181E25] text-[#fff]",
									children: [(0, i.jsx)("span", {
										className: "mr-[10px] text-[15px]",
										children: o("platform_overview_third_screen_button_1")
									}), (0, i.jsx)("span", {
										children: (0, i.jsx)(er, {
											cls: "w-[16px] h-[16px] text-[#fff] align-[-2px]"
										})
									})]
								})
							})]
						})
					})
				},
				es = function() {
					var e = (0, p.$G)().t,
						t = Z({
							t: e
						});
					return (0, i.jsxs)("div", {
						className: "pb-[60px] text-center",
						children: [(0, i.jsx)("h1", {
							className: "text-[#050038] text-[24px] font-[500] mb-[32px]",
							children: e("platform_overview_third_screen_name")
						}), (0, i.jsx)("div", {
							className: "px-[16px] pb-[8px] overflow-x-auto",
							children: t.map(function(e, t) {
								return (0, l.createElement)(ec, (0, T._)((0, S._)({}, e), {
									key: t
								}))
							})
						})]
					})
				},
				eo = n(35108),
				el = function(e) {
					var t = e.title,
						n = e.desc,
						a = e.name,
						c = e.detailLink,
						s = e.detailLink_en,
						o = (0, p.$G)().t,
						l = (0, r.Z)().locale,
						d = (0, P.useRouter)();
					return (0, i.jsxs)("div", {
						className: "flex flex-col",
						children: [(0, i.jsxs)("div", {
							className: "flex flex-col gap-[10px] text-center",
							children: [(0, i.jsx)("span", {
								className: "text-[#050038] text-[20px]",
								style: {
									fontFamily: "Poppins"
								},
								children: o(t)
							}), (0, i.jsx)("div", {
								children: (0, i.jsx)("p", {
									className: "mb-[20px] text-[#050038B2] text-[14px] leading-[22px] whitespace-pre-wrap font-[300]",
									children: o(n)
								})
							})]
						}), (0, i.jsx)("div", {
							className: "flex justify-center",
							children: (0, i.jsx)(eo.default, {
								btnText: o("platform_overview_fourth_screen_button_1"),
								btnClassName: "rounded-full text-[14px] font-[400] p-[8px_16px_8px_20px] bg-[#04002B]",
								btnVariables: {
									"--primary-color": "transparent",
									"--secondary-color": "#fff"
								},
								onClick: function() {
									(0, m.I)({
										event_name: "learn_more_click",
										page: "open_platform_home_page",
										option: a
									});
									var e = "en" === l ? s : c;
									e.startsWith("http") ? window.open(e, "_blank") : d.push(e, e, {
										locale: d.locale
									})
								}
							})
						})]
					})
				},
				ep = n(59861),
				ed = n.n(ep),
				ef = [{
					tag: "platform_overview_fourth_screen_cc_name",
					title: "platform_overview_fourth_screen_cc_name1",
					name: "Chat_completion_API",
					desc: "platform_overview_fourth_screen_cc_description",
					detailLink: "".concat(h.vi, "/document/ChatCompletion%20v2?key=66701d281d57f38758d581d0"),
					detailLink_en: "".concat(h.RI, "/document/video_generation?key=66d1439376e52fcee2853049"),
					img: "https://filecdn.minimax.chat/public/84bf0752-be4d-442f-ab23-86b0997f6173.png?x-oss-process=image/format,webp",
					img_en: "https://filecdn.minimax.chat/public/6ffec230-8b2e-4da9-ab48-23f49ddd959c.png?x-oss-process=image/format,webp"
				}, {
					tag: "platform_overview_fourth_screen_realtime_name",
					title: "platform_overview_fourth_screen_realtime_name1",
					name: "Realtime_API",
					desc: "platform_overview_fourth_screen_realtime_description",
					detailLink: "".concat(h.vi, "/document/Realtime?key=640e0c9c5f918b4f6c4e2d58"),
					detailLink_en: "".concat(h.RI, "/document/Voice%20Cloning?key=66719032a427f0c8a570165b"),
					img: "https://filecdn.minimax.chat/public/e9a190c2-32de-45a5-bf10-0ec5ffd3dcc4.png?x-oss-process=image/format,webp",
					img_en: "https://filecdn.minimax.chat/public/61423743-c0e4-46d2-a78c-e21606b99826.png?x-oss-process=image/format,webp"
				}, {
					tag: "platform_overview_fourth_screen_t2a_name",
					title: "platform_overview_fourth_screen_t2a_name1",
					name: "T2A_API",
					desc: "platform_overview_fourth_screen_t2a_description",
					detailLink: "".concat(h.vi, "/document/T2A%20V2?key=66719005a427f0c8a5701643"),
					detailLink_en: "".concat(h.RI, "/document/T2A%20V2?key=66719005a427f0c8a5701643"),
					img: "https://filecdn.minimax.chat/public/2bb72636-004f-47cb-824b-f3638132d6e6.png?x-oss-process=image/format,webp",
					img_en: "https://filecdn.minimax.chat/public/2bb72636-004f-47cb-824b-f3638132d6e6.png?x-oss-process=image/format,webp"
				}, {
					tag: "platform_overview_fourth_screen_vedio_name",
					title: "platform_overview_fourth_screen_vedio_name1",
					name: "video_generation_API",
					desc: "platform_overview_fourth_screen_vedio_description",
					detailLink: "".concat(h.vi, "/document/video_generation?key=66d1439376e52fcee2853049"),
					detailLink_en: "",
					img: "https://filecdn.minimax.chat/public/e33cd2b6-7dd3-4412-a932-61941cff21a7.png?x-oss-process=image/format,webp",
					img_en: "",
					hideInEnglish: !0
				}],
				em = n(76655),
				ex = n(48831),
				eu = function() {
					var e = (0, p.$G)().t,
						t = (0, s._)((0, l.useState)(0), 2),
						n = t[0],
						a = t[1],
						c = (0, s._)((0, l.useState)(), 2),
						o = c[0],
						d = c[1],
						f = (0, s._)((0, l.useState)(), 2),
						m = f[0],
						x = f[1],
						h = (0, s._)((0, l.useState)(!1), 2),
						b = h[0],
						_ = h[1],
						g = (0, s._)((0, l.useState)(1), 2),
						w = g[0],
						y = g[1],
						N = (0, r.Z)().isEnglish,
						k = (0, l.useRef)([]);
					return (0, l.useEffect)(function() {
						var e = k.current.reduce(function(e, t) {
							return t ? e + t.offsetWidth : e
						}, 16);
						window.innerWidth > e ? _(!0) : _(!1)
					}, []), (0, l.useEffect)(function() {
						var e = (0, ex.Z)(function() {
							window.innerWidth < em.l8 ? y((window.innerWidth - 32) / (em.l8 - 32)) : y(1)
						}, 100);
						return e(), window.addEventListener("resize", e),
							function() {
								e.cancel(), window.removeEventListener("resize", e)
							}
					}, []), (0, i.jsxs)("div", {
						className: "w-full flex flex-col",
						children: [(0, i.jsx)("span", {
							className: "text-center text-[#050038] text-[28px] font-[500] mb-[32px]",
							children: e("platform_overview_fourth_screen_name")
						}), (0, i.jsx)("div", {
							className: "flex overflow-x-auto items-center ".concat(b ? "justify-center" : "justify-start", " mb-[32px]"),
							children: ef.map(function(t, r) {
								return N && t.hideInEnglish ? null : (0, i.jsxs)("div", {
									ref: function(e) {
										return k.current[r] = e
									},
									className: "cursor-pointer leading-[20px] text-[14px] py-[7px] px-[16px] whitespace-nowrap ".concat(n === r ? "text-[#1456F0]" : "text-[#050038]"),
									style: {
										fontFamily: "Poppins"
									},
									onClick: function() {
										var e;
										null == o || o.slideTo(r), null == m || m.slideTo(r), a(r), null === (e = k.current[r]) || void 0 === e || e.scrollIntoView({
											behavior: "smooth",
											block: "nearest",
											inline: "center"
										})
									},
									children: [e(t.tag), (0, i.jsx)("div", {
										className: "mt-[10px] mx-auto w-[calc(100%-16px)] h-[1.5px] bg-[#1456F0] ".concat(n === r ? "opacity-100" : "opacity-0")
									})]
								}, t.title)
							})
						}), (0, i.jsxs)("div", {
							className: "w-full px-[16px] overflow-hidden flex flex-col mx-auto pb-[100px]",
							children: [(0, i.jsx)(v.tq, {
								modules: [j.Qr],
								onSwiper: d,
								controller: {
									control: m
								},
								effect: "slide",
								speed: 500,
								spaceBetween: 24,
								className: "".concat(ed().customSwiperEasing, " mb-[24px] w-full"),
								onRealIndexChange: function(e) {
									a(e.realIndex)
								},
								children: ef.map(function(e) {
									return N && e.hideInEnglish ? null : (0, i.jsx)(v.o5, {
										children: (0, i.jsx)(el, (0, S._)({}, e))
									}, e.title)
								})
							}), (0, i.jsx)(v.tq, {
								modules: [j.xW, j.Qr],
								onSwiper: x,
								controller: {
									control: o
								},
								effect: "fade",
								fadeEffect: {
									crossFade: !0
								},
								speed: 300,
								style: {
									height: 1 !== w ? "".concat(484 * w, "px") : "484px",
									width: 1 !== w ? "".concat(735 * w, "px") : "735px"
								},
								onRealIndexChange: function(e) {
									a(e.realIndex)
								},
								children: ef.map(function(e) {
									return N && e.hideInEnglish ? null : (0, i.jsx)(v.o5, {
										children: (0, i.jsx)(u(), {
											priority: !0,
											fill: !0,
											src: N ? e.img_en : e.img,
											alt: "model"
										})
									}, e.title)
								})
							})]
						})]
					})
				},
				eh = function(e) {
					var t = e.logo,
						n = e.desc,
						a = e.img,
						r = (0, p.$G)().t,
						c = (0, s._)((0, l.useState)(1), 2),
						o = c[0],
						d = c[1];
					return (0, l.useEffect)(function() {
						var e = (0, ex.Z)(function() {
							window.innerWidth < em.l8 ? d((window.innerWidth - 32) / (em.l8 - 32)) : d(1)
						}, 100);
						return e(), window.addEventListener("resize", e),
							function() {
								e.cancel(), window.removeEventListener("resize", e)
							}
					}, []), (0, i.jsxs)("div", {
						className: "relative flex flex-col items-center w-full mx-auto pb-[100px]",
						children: [(0, i.jsx)(u(), {
							src: t,
							alt: "icon",
							width: 160,
							height: 69,
							className: "w-auto mb-[12px]"
						}), (0, i.jsx)("p", {
							className: "text-[#050038] text-[14px] px-[16px] font-[400] opacity-50 whitespace-pre-wrap leading-[22.4px] text-center mb-[16px]",
							children: r(n).replace(/\n/g, "")
						}), (0, i.jsxs)("div", {
							className: "relative",
							style: {
								height: 1 !== o ? "".concat(411 * o, "px") : "411px",
								width: 1 !== o ? "".concat(735 * o, "px") : "735px"
							},
							children: [(0, i.jsx)(u(), {
								src: a,
								alt: "img",
								fill: !0,
								className: "z-10"
							}), (0, i.jsx)(u(), {
								src: "https://filecdn.minimax.chat/public/c1ba2464-277a-42e1-be62-2d2853ac3fdc.png",
								alt: "img",
								fill: !0,
								className: "absolute top-0 left-0"
							})]
						})]
					})
				},
				eb = [{
					title: "platform_overview_fifth_screen_case1_name",
					tabIcon: "https://filecdn.minimax.chat/public/d0fac7bf-f53b-490f-bce7-f50966bdb4da.png?x-oss-process=image/format,webp",
					selectedTabIcon: "https://filecdn.minimax.chat/public/012a2b73-30d9-4018-a2fb-bf2bea941e42.png?x-oss-process=image/format,webp",
					logo: "https://filecdn.minimax.chat/public/79c55d29-1623-40d3-a8e6-6833bbf243de.png?x-oss-process=image/format,webp",
					desc: "platform_overview_fifth_screen_case1_description",
					img: "https://filecdn.minimax.chat/public/39216225-02d5-4696-9656-5dd811fe37bf.png?x-oss-process=image/format,webp"
				}, {
					title: "platform_overview_fifth_screen_case2_name",
					tabIcon: "https://filecdn.minimax.chat/public/7515213c-3c3c-4805-a840-e43c065850b2.png?x-oss-process=image/format,webp",
					selectedTabIcon: "https://filecdn.minimax.chat/public/37a7cebe-7819-4620-8483-bc9b04762d32.png?x-oss-process=image/format,webp",
					logo: "https://filecdn.minimax.chat/public/17285091-19a0-4f9e-abb3-e704d5960d11.png?x-oss-process=image/format,webp",
					desc: "platform_overview_fifth_screen_case2_description",
					img: "https://filecdn.minimax.chat/public/21042a34-3bfe-4ad2-a457-33008bd26b1a.png?x-oss-process=image/format,webp"
				}, {
					title: "platform_overview_fifth_screen_case3_name",
					tabIcon: "https://filecdn.minimax.chat/public/8308f815-4ba2-472d-a14f-ece1a342bbbc.png?x-oss-process=image/format,webp",
					selectedTabIcon: "https://filecdn.minimax.chat/public/a3d9725d-2f6f-428d-8c90-5b74b414d574.png?x-oss-process=image/format,webp",
					logo: "https://filecdn.minimax.chat/public/a24a3025-8f8b-4240-9d30-ea93fd3a1de0.png?x-oss-process=image/format,webp",
					desc: "platform_overview_fifth_screen_case3_description",
					img: "https://filecdn.minimax.chat/public/646dd837-f6b8-45e7-a490-aa0335d4318d.png?x-oss-process=image/format,webp"
				}, {
					title: "platform_overview_fifth_screen_case5_name",
					tabIcon: "https://filecdn.minimax.chat/public/7949fe1d-0225-4cd6-9767-cad0c7a06b17.png?x-oss-process=image/format,webp",
					selectedTabIcon: "https://filecdn.minimax.chat/public/b87c3298-ab2c-409f-97b9-5b30491980f9.png?x-oss-process=image/format,webp",
					logo: "https://filecdn.minimax.chat/public/d01e3832-85fc-4fbd-af77-d88dd0020623.png?x-oss-process=image/format,webp",
					desc: "platform_overview_fifth_screen_case5_description",
					img: "https://filecdn.minimax.chat/public/f38b6ee0-d646-4b17-bffa-52af40a71a7e.png?x-oss-process=image/format,webp"
				}],
				e_ = function() {
					var e = (0, s._)((0, l.useState)(0), 2),
						t = e[0],
						n = e[1],
						a = (0, s._)((0, l.useState)(), 2),
						r = a[0],
						c = a[1],
						o = (0, s._)((0, l.useState)(-1), 2),
						d = o[0],
						f = o[1],
						m = (0, s._)((0, l.useState)(!1), 2),
						x = m[0],
						h = m[1],
						b = (0, p.$G)().t,
						_ = (0, l.useRef)([]);
					return (0, l.useEffect)(function() {
						var e = _.current.reduce(function(e, t) {
							return t ? e + t.offsetWidth : e
						}, 20);
						window.innerWidth > e ? h(!0) : h(!1)
					}, []), (0, i.jsxs)("div", {
						className: "w-full flex flex-col justify-center items-center",
						children: [(0, i.jsx)("span", {
							className: "text-[#050038] text-[24px] font-[500] mb-[32px]",
							children: b("platform_overview_fifth_screen_name")
						}), (0, i.jsx)("div", {
							className: "flex items-center ".concat(x ? "justify-center" : "justify-start", " mb-[24px] overflow-x-auto w-full px-[16px]"),
							children: eb.map(function(e, a) {
								return (0, i.jsxs)("div", {
									ref: function(e) {
										return _.current[a] = e
									},
									className: "my-[7px] cursor-pointer leading-[20px] text-[14px] min-w-[116px] ".concat(t === a ? "text-[#1456F0]" : "text-[#050038]"),
									onMouseEnter: function() {
										f(a)
									},
									onMouseLeave: function() {
										f(-1)
									},
									onClick: function() {
										var e;
										null == r || r.slideTo(a), n(a), null === (e = _.current[a]) || void 0 === e || e.scrollIntoView({
											behavior: "smooth",
											block: "nearest",
											inline: "center"
										})
									},
									children: [(0, i.jsxs)("div", {
										className: "flex gap-[8px] px-[18px] items-center justify-center",
										children: [(0, i.jsx)(u(), {
											src: t === a || d === a ? e.selectedTabIcon : e.tabIcon,
											alt: b(e.title),
											width: 16,
											height: 16
										}), b(e.title)]
									}), (0, i.jsx)("div", {
										className: "mt-[10px] mx-auto w-full h-[1.5px] bg-[#1456F0] ".concat(t === a ? "opacity-100" : "opacity-0")
									})]
								}, e.title)
							})
						}), (0, i.jsx)(v.tq, {
							onSwiper: c,
							effect: "fade",
							fadeEffect: {
								crossFade: !0
							},
							modules: [j.pt, j.xW],
							autoplay: {
								delay: 5e3,
								pauseOnMouseEnter: !0
							},
							className: "w-full",
							onRealIndexChange: function(e) {
								n(e.realIndex)
							},
							children: eb.map(function(e) {
								return (0, i.jsx)(v.o5, {
									children: (0, i.jsx)(eh, (0, S._)({}, e))
								}, e.title)
							})
						})]
					})
				},
				eg = function() {
					var e = (0, p.$G)().t,
						t = (0, P.useRouter)(),
						n = (0, r.Z)().locale;
					return (0, i.jsx)("div", {
						className: "w-full px-[16px] mb-[60px]",
						children: (0, i.jsxs)("div", {
							className: "flex flex-col w-full items-center pt-[48px] px-[22px] bg-[url('https://filecdn.minimax.chat/public/03c9aeea-2f15-42af-9533-c842ff86681b.png?x-oss-process=image/format,webp')] bg-cover bg-center h-[302px] rounded-[24px]",
							children: [(0, i.jsx)("div", {
								className: "text-center text-[#fff] w-[208px] text-[26px] font-[500] mb-[20px] leading-[41.6px]",
								children: e("platform_overview_sixth_screen_1")
							}), (0, i.jsx)("div", {
								className: "text-[#fff] text-[14px] opacity-60 mb-[48px] leading-[19px]",
								children: e("platform_overview_sixth_screen_2")
							}), (0, i.jsxs)("div", {
								className: "flex gap-[16px] mb-[48px]",
								children: [(0, i.jsx)(eo.default, {
									btnText: e("platform_overview_sixth_screen_button_1"),
									btnClassName: "rounded-full h-[35px] leading-normal text-[14px] font-[500] p-[8px_16px_8px_20px] border-solid border-[1px] border-transparent bg-[#fff] text-[#050038]",
									onClick: function() {
										(0, m.I)({
											event_name: "contact_us_click",
											page: "open_platform_home_page"
										}), window.open("".concat(h.vi).concat("en" === n ? "/en" : "/zh", "/cooperate"), "_blank")
									}
								}), (0, i.jsx)(eo.default, {
									btnText: e("platform_overview_sixth_screen_button_2"),
									btnClassName: "rounded-full h-[35px] leading-normal text-[14px] font-[500] p-[8px_16px_8px_20px] border-solid border-[1px] border-[#fff] bg-transparent text-[#fff]",
									btnVariables: {
										"--primary-color": "transparent",
										"--secondary-color": "#fff"
									},
									onClick: function() {
										(0, m.I)({
											event_name: "pricing_click",
											page: "open_platform_home_page"
										}), t.push("/price", "/price", {
											locale: t.locale
										})
									}
								})]
							})]
						})
					})
				},
				ew = f()(function() {
					return Promise.resolve().then(n.bind(n, 35108))
				}, {
					loadableGenerated: {
						webpack: function() {
							return [35108]
						}
					}
				}),
				ev = function() {
					var e = (0, s._)((0, l.useState)(!1), 2),
						t = e[0],
						n = e[1],
						a = (0, p.$G)().t,
						c = (0, r.Z)(),
						d = c.isChinese,
						f = c.locale;
					(0, l.useEffect)(function() {
						n(!0)
					}, []);
					var x = (0, o.q_)({
							opacity: t ? 1 : 0,
							transform: "translateY(".concat(t ? 0 : 30, "%)"),
							delay: 200,
							config: {
								easing: o.Z5.easeInCirc
							}
						}),
						u = (0, o.q_)({
							opacity: t ? 1 : 0,
							transform: "translateY(".concat(t ? 0 : 50, "%)"),
							delay: 500,
							config: {
								easing: o.Z5.easeInCirc
							}
						});
					return (0, i.jsx)("div", {
						className: "relative flex flex-col items-center justify-center w-full overflow-x-hidden h-[312px] bg-[url('https://filecdn.minimax.chat/public/d51cc4d6-9962-42e7-8f3a-12eb609e16a6.png?x-oss-process=image/format,webp')] bg-cover bg-center text-center mt-[58px] mb-[32px]",
						children: (0, i.jsxs)("div", {
							children: [(0, i.jsxs)(o.q.div, {
								style: x,
								children: [(0, i.jsx)("h1", {
									className: "text-[#050038] text-[26px] font-[500] mb-0 whitespace-pre-wrap leading-normal",
									children: a("platform_overview_first_screen_one_sentence_description")
								}), (0, i.jsx)("p", {
									className: "text-[#050038] opacity-60 text-[16px] py-[20px] mb-[28px] font-[400]",
									children: a("platform_overview_first_screen_one_sentence_description1")
								})]
							}), (0, i.jsxs)(o.q.div, {
								style: u,
								className: "mb-[16px]",
								children: [d && (0, i.jsx)(ew, {
									btnText: a("platform_overview_first_screen_button_1"),
									btnClassName: "bg-[#04002B] text-[#fff] font-medium text-sm rounded-full inline-flex p-[8px_16px_8px_20px] border border-solid border-[#04002B] mr-[16px]",
									btnVariables: {
										"--secondary-color": "#fff"
									},
									onClick: function() {
										(0, m.I)({
											event_name: "trial_click",
											page: "open_platform_home_page",
											trial_type: "default"
										});
										var e = d ? "".concat(h.vi, "/examination-center/text-experience-center/cc_v2") : "".concat(h.vi).concat("en" === f ? "/en" : "/zh", "/cooperate");
										window.open(e, "_blank")
									}
								}), (0, i.jsx)(ew, {
									btnText: a("platform_overview_first_screen_button_2"),
									btnClassName: "bg-transparent text-[#04002B] font-medium text-sm rounded-full inline-flex p-[8px_16px_8px_20px] border border-solid border-[#181E25CC]",
									onClick: function() {
										(0, m.I)({
											event_name: "learn_more_click",
											page: "open_platform_home_page",
											option: "文档中心"
										}), window.open(d ? "".concat(h.vi, "/document/platform%20introduction?key=66701c8e1d57f38758d58198") : "".concat(h.RI, "/document/platform%20introduction?key=66701c8e1d57f38758d58198"), "_blank")
									}
								})]
							})]
						})
					})
				},
				ej = n(10256),
				ey = n(29070),
				eN = function(e) {
					var t = e.page,
						n = (0, r.Z)().isChinese;
					return (0, a.Z)(t), (0, i.jsxs)("main", {
						children: [(0, i.jsx)(ej.default, {
							page: t
						}), (0, i.jsx)(ev, {}), n && (0, i.jsx)(ei, {}), (0, i.jsx)(es, {}), (0, i.jsx)(eu, {}), n && (0, i.jsx)(e_, {}), n && (0, i.jsx)(eg, {}), (0, i.jsx)(ey.default, {
							page: t
						})]
					})
				},
				ek = n(14749),
				eI = n(13940),
				eE = "open_platform_home_page",
				eC = !0,
				eL = function(e) {
					var t = e._isMobile,
						n = (0, ek.Z)(t),
						a = n.detectMobile,
						r = n.isMobile;
					return ((0, eI.Z)(a), r) ? (0, i.jsx)(eN, {
						page: eE
					}) : (0, i.jsx)(Q, {
						page: eE
					})
				}
		},
		67230: function() {},
		54843: function() {},
		10015: function(e) {
			e.exports = {
				button: "ArrowButton_button__hcGfb",
				"arrow-wrapper": "ArrowButton_arrow-wrapper__4uafM",
				arrow: "ArrowButton_arrow__HMO8r"
			}
		},
		98179: function(e) {
			e.exports = {
				customSwiperEasing: "APIIntroduction_customSwiperEasing__SBrcQ"
			}
		},
		53807: function(e) {
			e.exports = {
				"swiper-container-free-mode": "BrandWall_swiper-container-free-mode__0jhrS"
			}
		},
		91799: function(e) {
			e.exports = {
				button: "ArrowButton_button__YxZea",
				"arrow-wrapper": "ArrowButton_arrow-wrapper__8VpFs",
				arrow: "ArrowButton_arrow__6NK7X"
			}
		},
		52269: function(e) {
			e.exports = {
				burger: "MHeader_burger__8F4c_"
			}
		},
		59861: function(e) {
			e.exports = {
				customSwiperEasing: "APIIntroduction_customSwiperEasing__K_mel"
			}
		},
		57125: function(e) {
			e.exports = {
				"swiper-container-free-mode": "BrandWall_swiper-container-free-mode__KNFp8"
			}
		},
		8146: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return a
				}
			});
			var i = n(99822);

			function a(e, t) {
				var n = (0, i.Z)({}, e);
				return Array.isArray(t) && t.forEach(function(e) {
					delete n[e]
				}), n
			}
		},
		27170: function(e, t, n) {
			"use strict";
			n.d(t, {
				Z: function() {
					return h
				}
			});
			var i = function(e, t, n) {
					var i = -1,
						a = e.length;
					t < 0 && (t = -t > a ? 0 : a + t), (n = n > a ? a : n) < 0 && (n += a), a = t > n ? 0 : n - t >>> 0, t >>>= 0;
					for (var r = Array(a); ++i < a;) r[i] = e[i + t];
					return r
				},
				a = n(13727),
				r = n(82433),
				c = function(e) {
					if (!(0, r.Z)(e)) return !1;
					var t = (0, a.Z)(e);
					return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
				},
				s = function(e) {
					var t;
					return null != e && "number" == typeof(t = e.length) && t > -1 && t % 1 == 0 && t <= 9007199254740991 && !c(e)
				},
				o = /^(?:0|[1-9]\d*)$/,
				l = function(e, t) {
					var n = typeof e;
					return !!(t = null == t ? 9007199254740991 : t) && ("number" == n || "symbol" != n && o.test(e)) && e > -1 && e % 1 == 0 && e < t
				},
				p = function(e, t, n) {
					if (!(0, r.Z)(n)) return !1;
					var i, a = typeof t;
					return ("number" == a ? !!(s(n) && l(t, n.length)) : "string" == a && t in n) && ((i = n[t]) === e || i != i && e != e)
				},
				d = n(5042),
				f = 1 / 0,
				m = function(e) {
					var t, n = (t = e) ? (t = (0, d.Z)(t)) === f || t === -f ? (t < 0 ? -1 : 1) * 17976931348623157e292 : t == t ? t : 0 : 0 === t ? t : 0,
						i = n % 1;
					return n == n ? i ? n - i : n : 0
				},
				x = Math.ceil,
				u = Math.max,
				h = function(e, t, n) {
					t = (n ? p(e, t, n) : void 0 === t) ? 1 : u(m(t), 0);
					var a = null == e ? 0 : e.length;
					if (!a || t < 1) return [];
					for (var r = 0, c = 0, s = Array(x(a / t)); r < a;) s[c++] = i(e, r, r += t);
					return s
				}
		}
	},
	function(e) {
		e.O(0, [81, 1243, 4351, 833, 1958, 1762, 6396, 7646, 4861, 3977, 8381, 9774, 2888, 179], function() {
			return e(e.s = 94464)
		}), _N_E = e.O()
	}
]);