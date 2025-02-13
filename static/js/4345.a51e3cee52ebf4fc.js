"use strict";

(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4345], {
	79412:function(e, n, t) {
		t.d(n, {
			I:function() {
				return o
			}

			, u:function() {
				return u
			}

		}); var a, i, r=t(58177), s=t(99938), c=t(27207), o=(a=(0, r._)(function(e, n) {
				var t; return(0, s.Jh)(this, function(a) {
						switch(a.label) {
							case 0:return t="/nezha/" .concat(n||"zh", "/news"), [4, c.Z.get(t, {
								params:e
							})]; case 1:return[2, a.sent()]
					}
				})

		}), function(e, n) {
		return a.apply(this, arguments)

	}), u=(i=(0, r._)(function(e, n) {
			var t, a; return(0, s.Jh)(this, function(i) {
					switch(i.label) {
						case 0:return t=encodeURIComponent(e), a="/nezha/" .concat(n||"zh", "/news/").concat(t), [4, c.Z.get(a)]; case 1:return[2, i.sent()]
					}
				})

		}), function(e, n) {
		return i.apply(this, arguments)
	})
}

, 51517:function(e, n, t) {
	t.d(n, {
		Z:function() {
			return s
		}

	}); var a=t(45166), i=t(96462), r=t(50959); function s(e, n) {
	(0, r.useEffect)(function() {
			(0, i.I)((0, a._)({
					event_name:"page_view", page:e
				}

				, n))
	}

	, [])
}
}

, 4345:function(e, n, t) {
	t.r(n); var a=t(45166), i=t(98703), r=t(55754), s=t(2057), c=t(11527), o=t(90470), u=t.n(o), l=t(90420), f=t.n(l), p=t(50959), d=t(27009), x=t(79412), m=t(99758), h=t(24426), _=t(51517), g=t(22642), w=t(84605), b=u()(function() {
			return Promise.all([t.e(81), t.e(1243), t.e(833), t.e(6396), t.e(256)]).then(t.bind(t, 10256))
		}

		, {
		loadableGenerated: {
			webpack:function() {
				return[10256]
			}
		}

	}), v=u()(function() {
		return Promise.all([t.e(81), t.e(1243), t.e(3270)]).then(t.bind(t, 73270))
	}

	, {
	loadableGenerated: {
		webpack:function() {
			return[73270]
		}
	}

}), j=u()(function() {
		return Promise.all([t.e(81), t.e(8539)]).then(t.bind(t, 48539))
	}

	, {
	loadableGenerated: {
		webpack:function() {
			return[48539]
		}
	}

}), N=u()(function() {
		return Promise.all([t.e(81), t.e(1243), t.e(4351), t.e(3977), t.e(1116)]).then(t.bind(t, 29070))
	}

	, {
	loadableGenerated: {
		webpack:function() {
			return[29070]
		}
	}

}); n.default=function() {
	var e=(0, r._)((0, p.useState)({
			page:1

		}), 2), n=e[0], t=e[1], o=(0, r._)((0, p.useState)([]), 2), u=o[0], l=o[1], k=(0, r._)((0, p.useState)( !1), 2), I=k[0], M=k[1], y=(0, w.$G)("common").t, Z=(0, h.useRouter)().locale, z=(0, d.Z)(function() {
		return(0, x.I)(n, Z)
	}

	, {
	refreshDeps:[n]

}), C=z.loading, E=z.data; (0, _.Z)(g.page), (0, p.useEffect)(function() {
		E&&l(function(e) {
				return(0, s._)(e).concat((0, s._)(E.data))
			})
	}

	, [E]); var F=function(e) {
	M(e)
}

, G=function() {
	t(function(e) {
			return(0, i._)((0, a._)({}

				, e), {
			page:e.page+1
		})
})
}

, P=(0, p.useMemo)(function() {
		return(0, c.jsxs)(c.Fragment, {
			children:[(0, c.jsxs)("div", {
				className:"mx-full px-[16px] pt-[82px] ", children:[(0, c.jsx)("div", {
					className:"text-[20px] text-[#050038] font-[500]", children:y("official_website_newspage")

				}), (0, c.jsx)("div", {
				className:"mt-[4px] text-[12px] text-[#050038] leading-normal font-[400] opacity-50", children:y("official_website_newspage_1")
			})]

	}), (0, c.jsxs)("div", {
	className:"mx-full px-[16px] bg-white mb-[60px]", children:[(0, c.jsx)("div", {
		className:"flex flex-col", children:(0, c.jsx)("div", {
			className:"grid grid-cols-1 min-[686px]:grid-cols-2 min-[686px]:gap-[16px] mt-[20px] gap-[20px]", children:u.map(function(e, n) {
					return(0, c.jsx)("div", {
						className:"w-full", children:(0, c.jsx)(v, {
							isNews: !0, news:e, index:n, page:g.page, click_event_name:"information_bar_click", event_name:"information_bar_view"
						}

						, e.newsId)
				}

				, e.newsId)
		})
})

}), (null==E?void 0:E.hasMore)&&(0, c.jsx)(j, {
	onClick:G, onMouseEnter:function() {
		return F( !0)
	}

	, onMouseLeave:function() {
		return F( !1)
	}

	, isHovering:I, showMoreIcon: !1, btnText:"加载更多", className:"w-[152px] h-[54px] flex items-center justify-center rounded-[100px] bg-[#F2F3F5] text-[16px] font-[400] leading-normal", wrapperClassName:"my-[44px]"
})]
})]
})
}

, [E, I, u]); return(0, c.jsxs)(c.Fragment, {
	children:[(0, c.jsx)(f(), {
		children:(0, c.jsxs)("title", {
			children:[y("official_website_newspage"), " - MiniMax"]
		})

}), (0, c.jsxs)("main", {
	className:"w-full", children:[(0, c.jsx)("header", {
		className:"sticky top-0 left-0 z-[122]", children:(0, c.jsx)(b, {})

}), (0, c.jsx)(m.Z, {
	spinning:C, children:P

}), (0, c.jsx)(N, {
	page:g.page
})]
})]
})
}
}
}

]);