import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { l as VIDEOS, o as SectionHeading } from "./SectionHeading-B4ZgX3Vn.mjs";
import { l as HiPause, u as HiPlay } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/VideoGallery-CkIx0R0f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function VideoCard({ video, i }) {
	const ref = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const toggle = () => {
		const el = ref.current;
		if (!el) return;
		if (el.paused) {
			el.play();
			setPlaying(true);
		} else {
			el.pause();
			setPlaying(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: {
			opacity: 0,
			y: 40
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
			duration: .8,
			delay: i % 4 * .08
		},
		className: "glass group relative overflow-hidden rounded-3xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-video overflow-hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
				ref,
				src: video.src,
				poster: video.poster,
				playsInline: true,
				preload: "none",
				onClick: toggle,
				onEnded: () => setPlaying(false),
				className: "h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: toggle,
				"aria-label": playing ? "Pause" : "Play",
				className: "absolute inset-0 grid place-items-center bg-black/0 transition group-hover:bg-black/20",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-16 w-16 place-items-center rounded-full text-white opacity-90 transition group-hover:scale-110",
					style: {
						background: "linear-gradient(135deg, oklch(0.86 0.14 35), oklch(0.78 0.16 18))",
						boxShadow: "0 20px 50px -10px oklch(0.78 0.16 20 / 0.6)"
					},
					children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiPause, { className: "h-7 w-7" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiPlay, { className: "h-7 w-7 translate-x-[2px]" })
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-xl text-white",
				children: video.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs uppercase tracking-[0.3em] text-rose-200/70",
				children: "A moment to remember"
			})]
		})]
	});
}
function VideoGallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Cinema reel",
			title: "Our little films",
			subtitle: "Hit play. Live it again."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto mt-16 grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3",
			children: VIDEOS.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoCard, {
				video: v,
				i
			}, v.title))
		})]
	});
}
//#endregion
export { VideoGallery };
