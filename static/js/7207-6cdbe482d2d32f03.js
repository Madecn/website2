"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[7207], {
		49237: function(e, t, i) {
			i.d(t, {
				V7: function() {
					return s
				},
				RZ: function() {
					return l
				},
				zy: function() {
					return o
				},
				vi: function() {
					return c.vi
				},
				m0: function() {
					return d
				},
				gk: function() {
					return c.gk
				},
				xN: function() {
					return c.xN
				},
				uU: function() {
					return u
				}
			});
			var n, r, s, o, a, c = i(91489);
			(n = s || (s = {}))[n.NONE = 0] = "NONE", n[n.LOGIN = 1] = "LOGIN", n[n.TOKEN = 2] = "TOKEN";
			var p = [{
					path: "/404",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/document/",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/examination-center/text-experience-center",
					needUserInfo: !0,
					permission: s.LOGIN | s.TOKEN,
					priority: 1
				}, {
					path: "/examination-center/voice-experience-center",
					needUserInfo: !0,
					permission: s.LOGIN | s.TOKEN,
					priority: 1
				}, {
					path: "/cooperate",
					needUserInfo: !0,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/deliver",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/license/business-license",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/license/broadcasting-business-license",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/login",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/password-reset",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/protocol/privacy-policy",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/protocol/user-agreement",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/register/user-protocol",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/register/set-password",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/registration",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/scene-example",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}, {
					path: "/user-center/payment/billing-history",
					needUserInfo: !0,
					permission: s.LOGIN | s.TOKEN,
					priority: 10
				}, {
					path: "/user-center/",
					needUserInfo: !0,
					permission: s.LOGIN,
					priority: 1
				}, {
					path: "/message-center/notification",
					needUserInfo: !0,
					permission: s.LOGIN,
					priority: 1
				}, {
					path: "/message-center/system-notification",
					needUserInfo: !0,
					permission: s.LOGIN,
					priority: 1
				}, {
					path: "/examination-center/assistants",
					needUserInfo: !0,
					permission: s.LOGIN | s.TOKEN,
					priority: 1
				}, {
					path: "/platform",
					needUserInfo: !1,
					permission: s.NONE,
					priority: 1
				}],
				u = function(e) {
					var t, i = window.location.pathname,
						n = e || i,
						r = null === (t = p.filter(function(e) {
							return n.startsWith(e.path)
						})) || void 0 === t ? void 0 : t.sort(function(e, t) {
							return t.priority - e.priority
						}),
						s = (null == r ? void 0 : r[0]) || {};
					return {
						needUserInfo: null == s ? void 0 : s.needUserInfo,
						permission: null == s ? void 0 : s.permission
					}
				},
				f = i(29122);
			(r = o || (o = {}))[r["未知错误"] = 1e3] = "未知错误", r[r["超时"] = 1001] = "超时", r[r["限流"] = 1002] = "限流", r[r["未登录"] = 1004] = "未登录", r[r["TTS超时"] = 1005] = "TTS超时", r[r["非法输入"] = 1006] = "非法输入", r[r["验证码失效"] = 1007] = "验证码失效", r[r["数据库失败"] = 2001] = "数据库失败", r[r["请先注册"] = 2002] = "请先注册", r[r["错误的验证码"] = 2015] = "错误的验证码", r[r["账号不存在"] = 1013] = "账号不存在", r[r["密码错误"] = 1003] = "密码错误", r[r["余额不足"] = 1008] = "余额不足", r[r["重复申请"] = 1014] = "重复申请", r[r["输出内容敏感"] = 1027] = "输出内容敏感", r[r["输入内容敏感"] = 1026] = "输入内容敏感", r[r["参数有误"] = 2013] = "参数有误", r[r["缺少id参数"] = 6100] = "缺少id参数", r[r["查询文档错误"] = 6200] = "查询文档错误", r[r["更新文档错误"] = 6300] = "更新文档错误", r[r["用户不存在"] = 6400] = "用户不存在", r[r["无效的凭据"] = 6401] = "无效的凭据", r[r["账户不存在"] = 6404] = "账户不存在", r[r["服务端异常"] = 6500] = "服务端异常", r[r["名称已存在"] = 6600] = "名称已存在", r[r["模板数量超出限制"] = 6601] = "模板数量超出限制", r[r["手机号已被注册"] = 6700] = "手机号已被注册";
			var d = [o.输出内容敏感, o.输入内容敏感],
				l = (a = {}, (0, f._)(a, o.超时, "网络错误，请稍后重试"), (0, f._)(a, o.限流, "操作频繁，请稍后重试"), (0, f._)(a, o.验证码失效, "验证码失效，请重新获取短信验证码"), (0, f._)(a, o.请先注册, "该用户尚未注册，请先完成申请账户注册申请"), (0, f._)(a, o.错误的验证码, "验证码有误，请重新获取短信验证码"), (0, f._)(a, o.账号不存在, "账号尚未注册"), (0, f._)(a, o.密码错误, "密码错误"), (0, f._)(a, o.余额不足, "余额不足，请充值后继续使用"), (0, f._)(a, o.重复申请, "此邮箱或关联手机号已被注册"), (0, f._)(a, o.输出内容敏感, "换个话题试试吧"), (0, f._)(a, o.输入内容敏感, "换个话题试试吧"), (0, f._)(a, o.参数有误, "参数有误，请调整输入后重试"), (0, f._)(a, o.未登录, "账号密钥已失效，请重新登陆后再进行体验"), (0, f._)(a, o.缺少id参数, "缺少id参数"), (0, f._)(a, o.查询文档错误, "查询文档错误"), (0, f._)(a, o.更新文档错误, "更新文档错误"), (0, f._)(a, o.用户不存在, "用户不存在"), (0, f._)(a, o.无效的凭据, "无效的凭据"), (0, f._)(a, o.账户不存在, "账户不存在"), (0, f._)(a, o.服务端异常, "服务端异常"), (0, f._)(a, o.名称已存在, "名称已存在"), (0, f._)(a, o.模板数量超出限制, "最多只能创建20个模版"), (0, f._)(a, o.手机号已被注册, "手机号已被注册"), a)
		},
		91489: function(e, t, i) {
			i.d(t, {
				O8: function() {
					return u
				},
				Pq: function() {
					return f
				},
				RI: function() {
					return r
				},
				Zn: function() {
					return c
				},
				gO: function() {
					return d
				},
				gk: function() {
					return s
				},
				t6: function() {
					return a
				},
				vi: function() {
					return n
				},
				xN: function() {
					return p
				}
			});
			var n = "https://platform.minimaxi.com",
				r = "https://intl.minimaxi.com",
				s = "https://filecdn.minimax.chat/public/20cce9c8-2f16-4941-ba2a-6ec813e09c17.jpeg?x-oss-process=image/format,webp",
				o = function(e) {
					return e ? "".concat(e, "?x-oss-process=image/format,webp") : e
				},
				a = o("https://filecdn.minimax.chat/public/698e53fa-454e-43a9-b2aa-ba52db9952df.png"),
				c = o("https://filecdn.minimax.chat/public/563cf446-ce24-4e0e-abef-ff5a2d616553.png");
			o("https://filecdn.minimax.chat/public/edc7b302-74be-4f3e-a953-c742ec0a939a.png"), o("https://filecdn.minimax.chat/public/b27fe892-1449-42e4-8846-ea9d491319f7.png"), o("https://filecdn.minimax.chat/public/81ab0185-2794-4098-9aca-9d88228ab633.png"), o("https://filecdn.minimax.chat/public/4f3086ea-7f5e-457e-8ee2-79c5c6756db1.png"), o("https://filecdn.minimax.chat/public/bee6824a-b526-4665-aa57-cbfd18b65f95.png"), o("https://filecdn.minimax.chat/public/cf381f7a-add0-462b-80ca-da4b86032a2d.png"), o("https://filecdn.minimax.chat/public/3042c30f-1acc-4d68-a23e-077c272f3f33.png"), o("https://filecdn.minimax.chat/public/daae12c0-8ad2-4c62-8ba2-524295c0e8ef.png"), o("https://filecdn.minimax.chat/public/7c5a0b07-6757-458c-82ed-18046f3e01f1.png"), o("https://filecdn.minimax.chat/public/b961ce1f-d2ba-4053-823b-f21faf115bd1.png");
			var p = o("https://filecdn.minimax.chat/public/6bef0882-3057-455c-a4ad-2f63ed292be2.png"),
				u = o("https://filecdn.minimax.chat/public/88b14444-bf4c-4fb6-9419-4e680e6750e9.png"),
				f = o("https://filecdn.minimax.chat/public/a6206662-b4f0-4274-b4b1-30af9800b760.png"),
				d = o("https://filecdn.minimax.chat/public/d264b660-28e3-46f8-8539-34a681aa7f45.png");
			o("https://filecdn.minimax.chat/public/e3e26ee6-dd49-4035-bc4e-635c0a4ce9a7.png")
		},
		27207: function(e, t, i) {
			i.d(t, {
				Z: function() {
					return h
				}
			});
			var n = i(58177),
				r = i(77871),
				s = i(45166),
				o = i(98703),
				a = i(99938),
				c = i(36338),
				p = i(49237),
				u = i(77130),
				f = i(38253);

			function d(e) {
				try {
					var t, i, n = null == e ? void 0 : null === (t = e.data) || void 0 === t ? void 0 : null === (i = t.base_resp) || void 0 === i ? void 0 : i.status_code,
						r = (0, p.uU)().permission;
					if (n === p.zy["未登录"]) {
						if ((0, u.yL)(), (0, u.ty)(), (r && p.V7.NONE) === p.V7.NONE) return e;
						window.location.replace("/login")
					}
					return e
				} catch (t) {
					return e
				}
			}
			var l = i(55872).lW,
				m = function(e, t) {
					var i = "".concat("".concat(t, " (").concat(e, ")") || 0),
						n = p.RZ[e] || i;
					(0, u.Kb)(n, "error", p.RZ[e] ? i : "")
				},
				h = new(function() {
					function e(t, i) {
						(0, r._)(this, e), this.axios = c.Z.create((0, o._)((0, s._)({
							baseURL: t
						}, i), {
							withCredentials: !0
						})), this.axios.interceptors.request.use(function(e) {
							try {
								var t = (0, u.hP)();
								e.headers.Authorization = "Bearer ".concat(t)
							} catch (e) {}
							if ((0, u.nE)()) {
								var i = (0, u.av)();
								e.params = (0, o._)((0, s._)({}, e.params), {
									GroupId: i
								})
							}
							return e
						}, function(e) {
							return Promise.reject(e)
						}), this.axios.interceptors.response.use(d, function(e) {
							return Promise.reject(e)
						}), this.axios.interceptors.response.use(function(e) {
							var t, i, n = e.data,
								r = e.headers,
								s = e.config,
								o = r["content-type"],
								a = o && (o.startsWith("audio") || o.startsWith("application/octet-stream") || o.startsWith("application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") || o.startsWith("text/csv") || o.startsWith("image")),
								c = r["content-disposition"] && r["content-disposition"].split("filename=")[1];
							if ((null == s ? void 0 : s.customField) && o && !a) try {
								n = JSON.parse(l.from(n).toString("utf8"))
							} catch (e) {} else if (a) {
								var d = new Blob([e.data], {
									type: o
								});
								return e.data = {
									blob: d,
									type: o,
									fileName: c
								}, e
							}(null == r ? void 0 : r.authorization) && (0, u.M8)(r.authorization);
							var h = null == n ? void 0 : null === (t = n.base_resp) || void 0 === t ? void 0 : t.status_msg,
								b = null == n ? void 0 : null === (i = n.base_resp) || void 0 === i ? void 0 : i.status_code;
							return 0 !== b ? (null == s ? void 0 : s.customAttribute) || p.m0.includes(b) ? (null == s ? void 0 : s.customField) ? (f.FN.show({
								content: "换个话题试试吧"
							}), Promise.reject(e)) : b === p.zy["参数有误"] ? e : Promise.reject(e) : (m(b, h), Promise.reject(e)) : e
						}, function(e) {
							if (c.Z.isCancel(e));
							else if ("ERR_BAD_RESPONSE" === e.code)(0, u.Kb)("请求超时，请稍后再试", "error");
							else {
								var t, i, n = e.response,
									r = n.data,
									s = null == r ? void 0 : null === (t = r.base_resp) || void 0 === t ? void 0 : t.status_msg,
									o = null == r ? void 0 : null === (i = r.base_resp) || void 0 === i ? void 0 : i.status_code;
								(null == n ? void 0 : n.status) === 401 ? ((0, u.yL)(), (0, u.ty)(), window.location.reload()) : o ? m(o, s) : (0, u.Kb)
							}
							return Promise.reject(e)
						})
					}
					var t = e.prototype;
					return t.get = function(e, t) {
						var i = this;
						return (0, n._)(function() {
							return (0, a.Jh)(this, function(n) {
								switch (n.label) {
									case 0:
										return [4, i.axios.get(e, t)];
									case 1:
										return [2, n.sent().data]
								}
							})
						})()
					}, t.post = function(e, t, i) {
						var r = this;
						return (0, n._)(function() {
							return (0, a.Jh)(this, function(n) {
								switch (n.label) {
									case 0:
										return [4, r.axios.post(e, t, i)];
									case 1:
										return [2, n.sent().data]
								}
							})
						})()
					}, t.put = function(e, t, i) {
						var r = this;
						return (0, n._)(function() {
							return (0, a.Jh)(this, function(n) {
								switch (n.label) {
									case 0:
										return [4, r.axios.put(e, t, i)];
									case 1:
										return [2, n.sent().data]
								}
							})
						})()
					}, t.delete = function(e, t) {
						var i = this;
						return (0, n._)(function() {
							return (0, a.Jh)(this, function(n) {
								switch (n.label) {
									case 0:
										return [4, i.axios.delete(e, t)];
									case 1:
										return [2, n.sent().data]
								}
							})
						})()
					}, e
				}())("", {
					headers: {
						"Content-Type": "application/json"
					}
				})
		}
	}
]);