import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { a as motion, i as useMotionValue, n as useAnimationControls, o as AnimatePresence, r as useTransform, t as useInView } from "../_libs/framer-motion.mjs";
import { a as REASONS, c as TOGETHER_SINCE, i as PLAYLIST, o as SectionHeading, s as TIMELINE, t as FLOATING_NOTES } from "./SectionHeading-B4ZgX3Vn.mjs";
import { a as HiLockOpen, d as HiQueueList, f as HiSpeakerWave, i as HiLockClosed, l as HiPause, m as HiXMark, n as HiForward, p as HiSpeakerXMark, r as HiHeart, t as HiBackward, u as HiPlay } from "../_libs/react-icons.mjs";
import { c as createFileRoute, d as useRouter, i as HeadContent, l as createRootRouteWithContext, o as createRouter, r as Scripts, s as Outlet, u as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as require_react$1 } from "../_libs/typewriter-effect.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CVvWLuWR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react$1 = /* @__PURE__ */ __toESM(require_react$1());
var styles_default = "/assets/styles-Dt2LsJs7.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$1 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "test" },
			{
				name: "description",
				content: "test"
			},
			{
				name: "author",
				content: "Lovable"
			},
			{
				property: "og:title",
				content: "test"
			},
			{
				property: "og:description",
				content: "test"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			},
			{
				name: "twitter:title",
				content: "test"
			},
			{
				name: "twitter:description",
				content: "test"
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f9d624b4-1c44-406f-882a-8192443a3cb4/id-preview-c9e4fc24--ee4d2b8f-87d0-4db5-b57f-78d2fd7317b0.lovable.app-1782461540670.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/f9d624b4-1c44-406f-882a-8192443a3cb4/id-preview-c9e4fc24--ee4d2b8f-87d0-4db5-b57f-78d2fd7317b0.lovable.app-1782461540670.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Dancing+Script:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$1.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
/**
* Cinematic black-screen opening. Heartbeat → fade-in → typewriter → CTA.
*/
function OpeningGate({ onBegin }) {
	const [stage, setStage] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t1 = setTimeout(() => setStage(1), 900);
		const t2 = setTimeout(() => setStage(2), 2200);
		const t3 = setTimeout(() => setStage(3), 6800);
		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
			clearTimeout(t3);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 1 },
		exit: { opacity: 0 },
		transition: {
			duration: 1.4,
			ease: "easeInOut"
		},
		className: "fixed inset-0 z-50 flex flex-col items-center justify-center bg-black px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .6
				},
				animate: {
					opacity: stage >= 1 ? 1 : 0,
					scale: 1
				},
				transition: { duration: 1.6 },
				className: "mb-10 text-rose-400",
				style: {
					animation: "heartbeat 1.6s ease-in-out infinite",
					filter: "drop-shadow(0 0 40px oklch(0.78 0.18 18 / 0.9))"
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiHeart, { className: "h-20 w-20" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: stage >= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: { duration: 1.2 },
				className: "max-w-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-script text-3xl md:text-5xl",
					style: { color: "oklch(0.95 0.04 80)" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react$1.default, {
						options: {
							delay: 55,
							cursor: "❤",
							deleteSpeed: 30
						},
						onInit: (tw) => {
							tw.typeString("Someone made something very special just for you...").pauseFor(1200).deleteAll(20).typeString("My Beautiful Girl ❤").start();
						}
					})
				})
			}, "type") }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: stage >= 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				initial: {
					opacity: 0,
					y: 30,
					scale: .9
				},
				animate: {
					opacity: 1,
					y: 0,
					scale: 1
				},
				transition: {
					duration: 1,
					ease: "easeOut"
				},
				onClick: onBegin,
				className: "btn-luxury mt-16 text-base uppercase tracking-[0.3em] md:text-lg",
				children: "Begin Your Surprise"
			}, "cta") })
		]
	});
}
var ANSWER = "happybirthdaymygirl";
var normalize = (v) => v.toLowerCase().replace(/\s+/g, "").trim();
function PasswordGate({ onUnlock }) {
	const [value, setValue] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [unlocking, setUnlocking] = (0, import_react.useState)(false);
	const controls = useAnimationControls();
	const submit = (e) => {
		e.preventDefault();
		if (normalize(value) === ANSWER) {
			setUnlocking(true);
			setError(null);
			setTimeout(onUnlock, 1800);
		} else {
			setError("That's not our secret.");
			controls.start({
				x: [
					0,
					-12,
					12,
					-10,
					10,
					-6,
					6,
					0
				],
				transition: { duration: .6 }
			});
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative z-10 flex min-h-screen items-center justify-center px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.form, {
			onSubmit: submit,
			animate: controls,
			initial: {
				opacity: 0,
				y: 40,
				scale: .95
			},
			whileInView: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			transition: {
				duration: 1.2,
				ease: "easeOut"
			},
			className: "glass relative w-full max-w-md rounded-3xl p-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					animate: {
						rotate: unlocking ? [
							0,
							-12,
							0
						] : 0,
						scale: unlocking ? [
							1,
							1.3,
							1
						] : 1
					},
					transition: { duration: 1.4 },
					className: "mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full",
					style: {
						background: "linear-gradient(135deg, oklch(0.86 0.14 35), oklch(0.78 0.16 18))",
						boxShadow: "0 20px 50px -10px oklch(0.78 0.16 20 / 0.6)"
					},
					children: unlocking ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiLockOpen, { className: "h-9 w-9 text-white" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiLockClosed, { className: "h-9 w-9 text-white" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl text-rose-gradient",
					children: "A Little Secret"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-white/70",
					children: "Whisper the password only we know."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					type: "text",
					value,
					onChange: (e) => {
						setValue(e.target.value);
						setError(null);
					},
					placeholder: "Enter Our Secret Password ❤",
					className: "mt-6 w-full rounded-full border border-white/20 bg-white/5 px-6 py-3 text-center text-white placeholder-white/50 outline-none transition focus:border-rose/60 focus:bg-white/10",
					"aria-label": "Secret password"
				}),
				error && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
					initial: {
						opacity: 0,
						y: -6
					},
					animate: {
						opacity: 1,
						y: 0
					},
					className: "mt-4 text-sm text-rose-300",
					children: ["💔 Oops ❤ ", error]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "submit",
					className: "btn-luxury mt-7 w-full text-sm uppercase tracking-[0.25em]",
					children: unlocking ? "Opening…" : "Unlock"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 text-xs text-white/40",
					children: "Hint: a wish, then the words I call you"
				})
			]
		})
	});
}
/**
* Ambient particle field: aurora glows, twinkling stars, drifting petals & hearts.
* Pure CSS-driven for buttery 60fps; no React state churn.
*/
function ParticleField({ density = 1 }) {
	const stars = (0, import_react.useMemo)(() => Array.from({ length: Math.floor(60 * density) }).map((_, i) => ({
		id: i,
		x: Math.random() * 100,
		y: Math.random() * 100,
		size: Math.random() * 2 + .5,
		delay: Math.random() * 4,
		duration: 2 + Math.random() * 4
	})), [density]);
	const petals = (0, import_react.useMemo)(() => Array.from({ length: Math.floor(18 * density) }).map((_, i) => ({
		id: i,
		x: Math.random() * 100,
		size: 10 + Math.random() * 20,
		delay: Math.random() * 20,
		duration: 18 + Math.random() * 18,
		hue: [
			"#f9c8d4",
			"#f4a7b9",
			"#e8b4d4",
			"#d4a5c9"
		][i % 4]
	})), [density]);
	const hearts = (0, import_react.useMemo)(() => Array.from({ length: Math.floor(10 * density) }).map((_, i) => ({
		id: i,
		x: Math.random() * 100,
		delay: Math.random() * 25,
		duration: 22 + Math.random() * 14,
		size: 14 + Math.random() * 14
	})), [density]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 overflow-hidden z-0",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -top-40 -left-40 h-[60vmax] w-[60vmax] rounded-full blur-3xl",
				style: {
					background: "radial-gradient(circle, oklch(0.78 0.16 18 / 0.35), transparent 70%)",
					animation: "aurora 14s ease-in-out infinite"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute -bottom-40 -right-40 h-[55vmax] w-[55vmax] rounded-full blur-3xl",
				style: {
					background: "radial-gradient(circle, oklch(0.82 0.10 300 / 0.35), transparent 70%)",
					animation: "aurora 18s ease-in-out infinite reverse"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-1/3 left-1/2 h-[40vmax] w-[40vmax] -translate-x-1/2 rounded-full blur-3xl",
				style: {
					background: "radial-gradient(circle, oklch(0.86 0.14 85 / 0.22), transparent 70%)",
					animation: "aurora 22s ease-in-out infinite"
				}
			}),
			stars.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute rounded-full bg-white",
				style: {
					left: `${s.x}%`,
					top: `${s.y}%`,
					width: s.size,
					height: s.size,
					boxShadow: `0 0 ${s.size * 3}px oklch(1 0 0 / 0.7)`,
					animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`
				}
			}, `s-${s.id}`)),
			petals.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-0 rounded-[50%_20%_50%_20%]",
				style: {
					left: `${p.x}%`,
					width: p.size,
					height: p.size * .7,
					background: `radial-gradient(circle at 30% 30%, ${p.hue}, transparent 80%)`,
					opacity: .7,
					animation: `float-up ${p.duration}s linear ${p.delay}s infinite`
				}
			}, `p-${p.id}`)),
			hearts.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute bottom-0 text-rose-300/70",
				style: {
					left: `${h.x}%`,
					fontSize: h.size,
					animation: `float-up ${h.duration}s linear ${h.delay}s infinite`,
					filter: "drop-shadow(0 0 6px oklch(0.78 0.16 18 / 0.7))"
				},
				children: "❤"
			}, `h-${h.id}`))
		]
	});
}
function Hero() {
	const mx = useMotionValue(0);
	const my = useMotionValue(0);
	const rx = useTransform(my, [-300, 300], [6, -6]);
	const ry = useTransform(mx, [-300, 300], [-6, 6]);
	(0, import_react.useEffect)(() => {
		const onMove = (e) => {
			mx.set(e.clientX - window.innerWidth / 2);
			my.set(e.clientY - window.innerHeight / 2);
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, [mx, my]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 flex min-h-[100svh] flex-col items-center justify-center px-6 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .4,
					duration: 1.2
				},
				className: "font-script text-2xl text-rose-200/90 md:text-3xl",
				children: "For the one I love —"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
				style: {
					rotateX: rx,
					rotateY: ry,
					transformPerspective: 1e3
				},
				initial: {
					opacity: 0,
					scale: .92
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: 1.6,
					ease: "easeOut"
				},
				className: "mt-4 text-5xl font-light leading-[1.05] md:text-8xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-gold-gradient",
						children: "Happy Birthday"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-script text-rose-gradient",
						children: "my love"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						"aria-hidden": true,
						className: "ml-3 inline-block",
						style: { animation: "heartbeat 1.4s ease-in-out infinite" },
						children: "❤"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 20
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: .9,
					duration: 1.4
				},
				className: "mt-8 max-w-xl text-base text-white/75 md:text-lg",
				children: "Every second with you has become my favorite memory."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					delay: 1.6,
					duration: 1.4
				},
				className: "mt-14 flex flex-col items-center text-white/50",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs uppercase tracking-[0.4em]",
					children: "Scroll"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					animate: { y: [
						0,
						10,
						0
					] },
					transition: {
						repeat: Infinity,
						duration: 2,
						ease: "easeInOut"
					},
					className: "mt-3 h-10 w-px",
					style: { background: "linear-gradient(to bottom, transparent, oklch(0.92 0.10 35), transparent)" }
				})]
			})
		]
	});
}
function useLoveCounter(sinceISO) {
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	(0, import_react.useEffect)(() => {
		const id = setInterval(() => setNow(Date.now()), 1e3);
		return () => clearInterval(id);
	}, []);
	const start = new Date(sinceISO).getTime();
	const diff = Math.max(0, now - start);
	const sec = Math.floor(diff / 1e3);
	return {
		days: Math.floor(sec / 86400),
		hours: Math.floor(sec % 86400 / 3600),
		minutes: Math.floor(sec % 3600 / 60),
		seconds: sec % 60
	};
}
function Tile({ value, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass flex min-w-[6rem] flex-col items-center rounded-2xl px-5 py-6 md:min-w-[8rem]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: {
				y: -10,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			transition: { duration: .4 },
			className: "font-display text-4xl text-gold-gradient md:text-6xl",
			children: String(value).padStart(2, "0")
		}, value), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mt-2 text-[10px] uppercase tracking-[0.3em] text-white/60 md:text-xs",
			children: label
		})]
	});
}
function LoveCounter() {
	const t = useLoveCounter(TOGETHER_SINCE);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 px-6 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Our forever",
				title: "We have spent",
				subtitle: "…together, and counting."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						value: t.days,
						label: "Days"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						value: t.hours,
						label: "Hours"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						value: t.minutes,
						label: "Minutes"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tile, {
						value: t.seconds,
						label: "Seconds"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-center font-script text-2xl text-rose-200/90",
				children: "…and every one of them ❤"
			})
		]
	});
}
function Timeline() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Our story",
			title: "A timeline of us",
			subtitle: "Every moment a chapter, every chapter a heartbeat."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-16 overflow-x-auto pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mx-auto flex w-max gap-6 px-4 md:gap-10",
				children: TIMELINE.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
					initial: {
						opacity: 0,
						y: 60
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .9,
						delay: i * .08,
						ease: "easeOut"
					},
					className: "glass group relative w-[78vw] max-w-[340px] shrink-0 overflow-hidden rounded-3xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-52 overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: item.img,
								alt: item.title,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-4 top-4 rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white backdrop-blur-md",
								children: item.date
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl text-rose-gradient",
							children: item.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-white/70",
							children: item.text
						})]
					})]
				}, item.title))
			})
		})]
	});
}
function Letter() {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-100px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "A handwritten letter",
			title: "From me, to you"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			ref,
			initial: {
				opacity: 0,
				scale: .92,
				rotateX: 12
			},
			whileInView: {
				opacity: 1,
				scale: 1,
				rotateX: 0
			},
			viewport: {
				once: true,
				margin: "-100px"
			},
			transition: {
				duration: 1.4,
				ease: "easeOut"
			},
			className: "relative mx-auto mt-14 max-w-2xl rounded-2xl px-8 py-12 md:px-14 md:py-16",
			style: {
				background: "linear-gradient(180deg, #fbf5e8, #f3e3c5)",
				color: "#3a2415",
				boxShadow: "0 50px 120px -20px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.6)",
				backgroundImage: "linear-gradient(180deg, #fbf5e8, #f3e3c5), repeating-linear-gradient(transparent 0 27px, rgba(160,90,60,0.15) 27px 28px)",
				backgroundBlendMode: "multiply"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-script text-3xl text-[#7a2638] md:text-4xl",
					children: "My dearest love,"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 min-h-[14rem] font-script text-xl leading-9 md:text-2xl",
					children: inView && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react$1.default, {
						options: {
							delay: 30,
							cursor: ""
						},
						onInit: (tw) => {
							tw.typeString("On this day the world celebrates you — but I get to do it every single day.").pauseFor(500).typeString("<br/>").typeString("Thank you for your laugh, your hands, your stubborn hope.").pauseFor(500).typeString("<br/>").typeString("Thank you for being the bravest, softest, most beautiful chapter of my life.").pauseFor(500).typeString("<br/><br/>").typeString("If forever has a face — it's yours.").start();
						}
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 text-right font-script text-2xl text-[#7a2638]",
					children: "Forever yours ❤"
				})
			]
		})]
	});
}
function Reasons() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "50 reasons",
			title: "Why I love you",
			subtitle: "A few of the infinite. The rest I'll tell you in person."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
			children: REASONS.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30,
					rotate: -2
				},
				whileInView: {
					opacity: 1,
					y: 0,
					rotate: 0
				},
				viewport: {
					once: true,
					margin: "-30px"
				},
				transition: {
					duration: .55,
					delay: i % 10 * .04
				},
				whileHover: {
					y: -4,
					scale: 1.04
				},
				className: "glass relative flex aspect-square flex-col items-center justify-center rounded-2xl p-4 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "absolute right-3 top-3 font-display text-xs text-rose-200/60",
						children: ["#", String(i + 1).padStart(2, "0")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-2xl",
						"aria-hidden": true,
						children: "❤"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs leading-snug text-white/85 md:text-sm",
						children: r
					})
				]
			}, i))
		})]
	});
}
function FloatingNotes() {
	const [notes, setNotes] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		let id = 0;
		const spawn = () => {
			setNotes((cur) => [...cur.slice(-6), {
				id: ++id,
				text: FLOATING_NOTES[Math.floor(Math.random() * FLOATING_NOTES.length)],
				x: 5 + Math.random() * 90,
				duration: 9 + Math.random() * 6
			}]);
		};
		const t = setInterval(spawn, 2600);
		return () => clearInterval(t);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-0 z-20 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: notes.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
			initial: {
				opacity: 0,
				y: 40,
				scale: .9
			},
			animate: {
				opacity: [
					0,
					.9,
					.9,
					0
				],
				y: -window.innerHeight * .6,
				scale: 1
			},
			exit: { opacity: 0 },
			transition: {
				duration: n.duration,
				ease: "easeOut"
			},
			onAnimationComplete: () => setNotes((c) => c.filter((x) => x.id !== n.id)),
			className: "absolute bottom-0 font-script text-xl text-rose-200/90 md:text-2xl",
			style: {
				left: `${n.x}%`,
				textShadow: "0 0 20px oklch(0.78 0.16 18 / 0.6)"
			},
			children: n.text
		}, n.id)) })
	});
}
function GiftBox() {
	const [opened, setOpened] = (0, import_react.useState)(false);
	const confetti = (0, import_react.useMemo)(() => Array.from({ length: 80 }).map((_, i) => ({
		id: i,
		x: (Math.random() - .5) * 800,
		y: -Math.random() * 600 - 100,
		r: Math.random() * 720,
		delay: Math.random() * .4,
		color: [
			"#f4a7b9",
			"#f9c8d4",
			"#f3d27a",
			"#e8b4d4",
			"#fff"
		][i % 5]
	})), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 px-6 py-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "A little surprise",
				title: "Open me",
				subtitle: "Click the ribbon. Promise it's worth it."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-16 flex h-[28rem] max-w-xl items-end justify-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: opened && confetti.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						opacity: 1,
						x: 0,
						y: 0,
						rotate: 0
					},
					animate: {
						opacity: 0,
						x: c.x,
						y: c.y,
						rotate: c.r
					},
					transition: {
						duration: 2.5,
						delay: c.delay,
						ease: "easeOut"
					},
					className: "absolute bottom-32 h-3 w-3 rounded-sm",
					style: {
						background: c.color,
						boxShadow: `0 0 10px ${c.color}`
					}
				}, c.id)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: () => setOpened(true),
					"aria-label": "Open gift",
					className: "relative h-56 w-56 cursor-pointer focus:outline-none md:h-64 md:w-64",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							animate: { rotate: opened ? [
								0,
								-3,
								3,
								0
							] : 0 },
							transition: { duration: .6 },
							className: "absolute inset-x-0 bottom-0 h-2/3 rounded-xl",
							style: {
								background: "linear-gradient(135deg, oklch(0.55 0.18 18), oklch(0.42 0.16 12))",
								boxShadow: "0 30px 80px -10px oklch(0.4 0.18 18 / 0.7), inset 0 -10px 30px oklch(0 0 0 / 0.3)"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-y-0 left-1/2 w-7 -translate-x-1/2 rounded-md",
							style: { background: "linear-gradient(180deg, oklch(0.92 0.10 85), oklch(0.78 0.16 35))" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: false,
							animate: opened ? {
								y: -160,
								rotate: -12,
								opacity: 0
							} : {
								y: 0,
								rotate: 0,
								opacity: 1
							},
							transition: {
								duration: 1.2,
								ease: "easeOut"
							},
							className: "absolute inset-x-[-6%] top-12 h-20 rounded-xl",
							style: {
								background: "linear-gradient(135deg, oklch(0.62 0.18 18), oklch(0.5 0.16 14))",
								boxShadow: "0 20px 40px -10px oklch(0.4 0.18 18 / 0.7)"
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-x-0 top-1/2 h-4 -translate-y-1/2",
								style: { background: "linear-gradient(90deg, oklch(0.92 0.10 85), oklch(0.78 0.16 35), oklch(0.92 0.10 85))" }
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -top-10 left-1/2 -translate-x-1/2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative h-12 w-24",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute left-0 top-0 h-12 w-12 rotate-[-20deg] rounded-full",
											style: { background: "linear-gradient(135deg, oklch(0.92 0.10 85), oklch(0.78 0.16 35))" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute right-0 top-0 h-12 w-12 rotate-[20deg] rounded-full",
											style: { background: "linear-gradient(135deg, oklch(0.92 0.10 85), oklch(0.78 0.16 35))" }
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute left-1/2 top-2 h-8 w-4 -translate-x-1/2 rounded",
											style: { background: "oklch(0.78 0.16 35)" }
										})
									]
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: opened && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								scale: 0,
								y: 40,
								opacity: 0
							},
							animate: {
								scale: [
									0,
									1.3,
									1
								],
								y: -90,
								opacity: 1
							},
							transition: {
								duration: 1.4,
								ease: "easeOut"
							},
							className: "absolute inset-x-0 bottom-1/2 mx-auto text-7xl text-rose-400",
							style: {
								filter: "drop-shadow(0 0 40px oklch(0.78 0.18 18 / 0.95))",
								animation: "heartbeat 1.4s ease-in-out infinite"
							},
							children: "❤"
						}) })
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: opened && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 30
				},
				animate: {
					opacity: 1,
					y: 0
				},
				transition: {
					delay: 1,
					duration: 1
				},
				className: "mx-auto mt-10 max-w-xl text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-3xl text-gold-gradient md:text-4xl",
					children: "Happy Birthday My Love ❤"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-white/75",
					children: "I hope this little surprise reminds you how much you mean to me."
				})]
			}) })
		]
	});
}
/** Lightweight CSS firework bursts. No canvas — pure motion. */
function Fireworks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 overflow-hidden px-6 py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0",
			children: (0, import_react.useMemo)(() => Array.from({ length: 6 }).map((_, i) => ({
				id: i,
				x: 10 + Math.random() * 80,
				y: 20 + Math.random() * 40,
				delay: i * 1.1,
				color: [
					"#f4a7b9",
					"#f3d27a",
					"#fff5cf",
					"#e8b4d4",
					"#ffd166",
					"#ffb4c2"
				][i % 6]
			})), []).map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				className: "absolute",
				style: {
					left: `${b.x}%`,
					top: `${b.y}%`
				},
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				transition: {
					duration: .2,
					delay: b.delay,
					repeat: Infinity,
					repeatDelay: 5
				},
				children: Array.from({ length: 24 }).map((_, k) => {
					const angle = k / 24 * Math.PI * 2;
					const dist = 140 + Math.random() * 60;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						className: "absolute h-1.5 w-1.5 rounded-full",
						style: {
							background: b.color,
							boxShadow: `0 0 12px ${b.color}`
						},
						initial: {
							x: 0,
							y: 0,
							opacity: 1
						},
						animate: {
							x: Math.cos(angle) * dist,
							y: Math.sin(angle) * dist,
							opacity: 0
						},
						transition: {
							duration: 1.6,
							delay: b.delay,
							repeat: Infinity,
							repeatDelay: 5,
							ease: "easeOut"
						}
					}, k);
				})
			}, b.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h2, {
					initial: {
						opacity: 0,
						scale: .9
					},
					whileInView: {
						opacity: 1,
						scale: 1
					},
					viewport: { once: true },
					transition: { duration: 1.4 },
					className: "font-display text-6xl md:text-8xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold-gradient",
							children: "Happy"
						}),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-rose-gradient",
							children: "Birthday"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 font-script text-3xl text-rose-200",
					children: "…my forever ❤"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute inset-x-0 -top-10",
					children: Array.from({ length: 8 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						className: "absolute h-6 w-5 rounded-full",
						style: {
							left: `${10 + i * 11}%`,
							background: "radial-gradient(circle at 50% 40%, #ffd58a, #c46a2b)",
							boxShadow: "0 0 30px rgba(255,200,120,0.8)"
						},
						animate: {
							y: [
								0,
								-200,
								-400
							],
							opacity: [
								0,
								1,
								0
							]
						},
						transition: {
							duration: 8 + i,
							delay: i * .6,
							repeat: Infinity
						}
					}, i))
				})
			]
		})]
	});
}
/** Type "iloveyou" or "forever", click the moon, click 10 hearts. */
function EasterEggs() {
	const [buffer, setBuffer] = (0, import_react.useState)("");
	const [burst, setBurst] = (0, import_react.useState)(null);
	const [heartClicks, setHeartClicks] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if (e.key.length !== 1) return;
			setBuffer((b) => {
				const nb = (b + e.key.toLowerCase()).slice(-20);
				if (nb.endsWith("iloveyou")) setBurst("hearts");
				else if (nb.endsWith("forever")) setBurst("infinity");
				return nb;
			});
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, []);
	(0, import_react.useEffect)(() => {
		if (heartClicks >= 10) setBurst("secret");
	}, [heartClicks]);
	(0, import_react.useEffect)(() => {
		if (!burst) return;
		const t = setTimeout(() => setBurst(null), burst === "starsRain" ? 4500 : 3500);
		return () => clearTimeout(t);
	}, [burst]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setBurst("starsRain"),
			"aria-label": "Click the moon",
			className: "fixed right-6 top-6 z-30 grid h-12 w-12 place-items-center rounded-full text-2xl transition hover:scale-110",
			style: {
				background: "radial-gradient(circle at 35% 35%, #fff7d8, #e6cf8a 60%, #b89a4c)",
				boxShadow: "0 0 40px rgba(255, 230, 160, 0.6)"
			},
			children: "🌙"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			onClick: () => setHeartClicks((c) => c + 1),
			"aria-label": "Click the heart",
			className: "fixed left-6 top-6 z-30 grid h-12 w-12 place-items-center rounded-full text-2xl transition hover:scale-110",
			style: {
				background: "radial-gradient(circle, oklch(0.78 0.18 18 / 0.4), transparent)",
				boxShadow: "0 0 30px oklch(0.78 0.18 18 / 0.5)"
			},
			children: "❤"
		}),
		heartClicks > 0 && heartClicks < 10 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "fixed left-20 top-9 z-30 text-xs uppercase tracking-[0.25em] text-rose-200/70",
			children: [heartClicks, "/10"]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, { children: [
			burst === "hearts" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "pointer-events-none fixed inset-0 z-50 grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-7xl md:text-9xl",
					style: { animation: "heartbeat 1.2s ease-in-out infinite" },
					children: "❤❤❤❤❤"
				})
			}, "hearts"),
			burst === "infinity" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .6
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: { opacity: 0 },
				className: "pointer-events-none fixed inset-0 z-50 grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-display text-[14rem] text-rose-gradient",
					style: { filter: "drop-shadow(0 0 40px oklch(0.78 0.18 18 / 0.8))" },
					children: "∞"
				})
			}, "inf"),
			burst === "starsRain" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 },
				className: "pointer-events-none fixed inset-0 z-50 overflow-hidden",
				children: Array.from({ length: 80 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
					initial: {
						y: -50,
						x: Math.random() * window.innerWidth,
						opacity: 0
					},
					animate: {
						y: window.innerHeight + 50,
						opacity: [
							0,
							1,
							0
						]
					},
					transition: {
						duration: 2 + Math.random() * 2,
						delay: Math.random() * 1.5,
						ease: "easeIn"
					},
					className: "absolute text-yellow-200",
					style: {
						fontSize: 10 + Math.random() * 14,
						filter: "drop-shadow(0 0 6px gold)"
					},
					children: "✦"
				}, i))
			}, "rain"),
			burst === "secret" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .9
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: { opacity: 0 },
				className: "pointer-events-none fixed inset-0 z-50 grid place-items-center px-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "glass max-w-md rounded-3xl p-8 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-script text-3xl text-rose-gradient",
						children: "You found the secret."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-white/80",
						children: "If hearts could speak, mine would say your name on every beat."
					})]
				})
			}, "secret")
		] })
	] });
}
function MusicPlayer({ autoplay = false }) {
	const ref = (0, import_react.useRef)(null);
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [muted, setMuted] = (0, import_react.useState)(false);
	const [volume, setVolume] = (0, import_react.useState)(.6);
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [openList, setOpenList] = (0, import_react.useState)(false);
	const track = PLAYLIST[idx];
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		el.volume = volume;
		el.muted = muted;
	}, [volume, muted]);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (autoplay) el.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
	}, [autoplay]);
	const toggle = () => {
		const el = ref.current;
		if (!el) return;
		if (el.paused) el.play().then(() => setPlaying(true));
		else {
			el.pause();
			setPlaying(false);
		}
	};
	const next = () => setIdx((i) => (i + 1) % PLAYLIST.length);
	const prev = () => setIdx((i) => (i - 1 + PLAYLIST.length) % PLAYLIST.length);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const onTime = () => setProgress(el.duration ? el.currentTime / el.duration : 0);
		el.addEventListener("timeupdate", onTime);
		el.addEventListener("ended", next);
		return () => {
			el.removeEventListener("timeupdate", onTime);
			el.removeEventListener("ended", next);
		};
	}, []);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		el.load();
		if (playing) el.play().catch(() => {});
	}, [idx]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-x-0 bottom-4 z-40 flex justify-center px-3",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			layout: true,
			initial: {
				y: 80,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			transition: {
				duration: 1,
				delay: .6
			},
			className: "glass flex w-full max-w-2xl items-center gap-3 rounded-full px-3 py-2 md:gap-4 md:px-5 md:py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
					ref,
					src: track.src,
					preload: "metadata"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: prev,
					"aria-label": "Previous",
					className: "grid h-9 w-9 place-items-center rounded-full text-white/80 transition hover:text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiBackward, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: toggle,
					"aria-label": playing ? "Pause" : "Play",
					className: "grid h-11 w-11 place-items-center rounded-full text-white",
					style: {
						background: "linear-gradient(135deg, oklch(0.86 0.14 35), oklch(0.78 0.16 18))",
						boxShadow: "0 10px 30px -10px oklch(0.78 0.16 20 / 0.7)"
					},
					children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiPause, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiPlay, { className: "h-5 w-5 translate-x-[1px]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: next,
					"aria-label": "Next",
					className: "grid h-9 w-9 place-items-center rounded-full text-white/80 transition hover:text-white",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiForward, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate font-display text-sm text-white md:text-base",
						children: track.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 h-1 w-full overflow-hidden rounded-full bg-white/10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full rounded-full transition-[width] duration-300",
							style: {
								width: `${progress * 100}%`,
								background: "linear-gradient(90deg, oklch(0.92 0.10 85), oklch(0.78 0.16 18))"
							}
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setMuted((m) => !m),
					"aria-label": muted ? "Unmute" : "Mute",
					className: "hidden h-9 w-9 place-items-center rounded-full text-white/80 transition hover:text-white md:grid",
					children: muted ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiSpeakerXMark, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiSpeakerWave, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					type: "range",
					min: 0,
					max: 1,
					step: .01,
					value: volume,
					onChange: (e) => setVolume(Number(e.target.value)),
					"aria-label": "Volume",
					className: "hidden w-24 accent-rose-300 md:block"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setOpenList((o) => !o),
					"aria-label": "Playlist",
					className: "grid h-9 w-9 place-items-center rounded-full text-white/80 transition hover:text-white",
					children: openList ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiXMark, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiQueueList, { className: "h-5 w-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: openList && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.ul, {
					initial: {
						opacity: 0,
						y: 10,
						scale: .95
					},
					animate: {
						opacity: 1,
						y: 0,
						scale: 1
					},
					exit: {
						opacity: 0,
						y: 10,
						scale: .95
					},
					className: "glass absolute bottom-16 right-2 w-64 rounded-2xl p-2",
					children: PLAYLIST.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => {
							setIdx(i);
							setOpenList(false);
							setPlaying(true);
						},
						className: `flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition ${i === idx ? "bg-white/10 text-white" : "text-white/70 hover:bg-white/10 hover:text-white"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate",
							children: t.title
						}), i === idx && playing && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-rose-300",
							children: "♪"
						})]
					}) }, t.title))
				}) })
			]
		})
	});
}
var Gallery = (0, import_react.lazy)(() => import("./Gallery-DLWrQCFe.mjs").then((m) => ({ default: m.Gallery })));
var VideoGallery = (0, import_react.lazy)(() => import("./VideoGallery-CkIx0R0f.mjs").then((m) => ({ default: m.VideoGallery })));
var MemoryBook = (0, import_react.lazy)(() => import("./MemoryBook-DQxug9LB.mjs").then((m) => ({ default: m.MemoryBook })));
var SectionLoader = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "grid min-h-[40vh] place-items-center text-white/40 text-sm tracking-[0.4em] uppercase",
	children: "Loading…"
});
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingNotes, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EasterEggs, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoveCounter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLoader, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLoader, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoGallery, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Letter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reasons, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftBox, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
				fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLoader, {}),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MemoryBook, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fireworks, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "relative z-10 px-6 pb-32 pt-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-script text-2xl text-rose-200",
					children: "Forever yours ❤"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-xs uppercase tracking-[0.4em] text-white/40",
					children: "made with love · just for you"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MusicPlayer, { autoplay: true })
		]
	});
}
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "A Surprise For You ❤" },
		{
			name: "description",
			content: "A private, cinematic birthday surprise — made with love."
		},
		{
			name: "theme-color",
			content: "#1a0a18"
		},
		{
			property: "og:title",
			content: "A Surprise For You ❤"
		},
		{
			property: "og:description",
			content: "A private, cinematic birthday surprise — made with love."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: Index
});
function Index() {
	const [stage, setStage] = (0, import_react.useState)("opening");
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		if (sessionStorage.getItem("bday:unlocked") === "1") setStage("experience");
		else if (sessionStorage.getItem("bday:begun") === "1") setStage("password");
	}, []);
	const begin = () => {
		sessionStorage.setItem("bday:begun", "1");
		setStage("password");
	};
	const unlock = () => {
		sessionStorage.setItem("bday:unlocked", "1");
		setStage("experience");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen",
		children: [stage !== "opening" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParticleField, { density: stage === "experience" ? 1.2 : .7 }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatePresence, {
			mode: "wait",
			children: [
				stage === "opening" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OpeningGate, { onBegin: begin }, "opening"),
				stage === "password" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					exit: { opacity: 0 },
					transition: { duration: .8 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordGate, { onUnlock: unlock })
				}, "password"),
				stage === "experience" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: { opacity: 0 },
					animate: { opacity: 1 },
					transition: { duration: 1.2 },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {})
				}, "experience")
			]
		})]
	});
}
var rootRouteChildren = { IndexRoute: Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
