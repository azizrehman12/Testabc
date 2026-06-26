import { o as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { n as GALLERY, o as SectionHeading } from "./SectionHeading-B4ZgX3Vn.mjs";
import { c as HiOutlineShare, o as HiOutlineArrowDownTray, r as HiHeart, s as HiOutlineHeart } from "../_libs/react-icons.mjs";
import { n as ee, t as $ } from "../_libs/react-photo-view.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Gallery-DLWrQCFe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Gallery() {
	const [faves, setFaves] = (0, import_react.useState)({});
	const toggleFave = (id) => setFaves((m) => ({
		...m,
		[id]: !m[id]
	}));
	const share = async (src, caption) => {
		const data = {
			title: "Our memory",
			text: caption,
			url: src
		};
		if (navigator.share) try {
			await navigator.share(data);
		} catch {}
		else try {
			await navigator.clipboard.writeText(src);
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Memory gallery",
			title: "Frames of us",
			subtitle: "Tap any frame to step inside the moment."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)($, {
			maskOpacity: .92,
			bannerVisible: false,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-4",
				children: GALLERY.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.figure, {
					initial: {
						opacity: 0,
						y: 30
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-40px"
					},
					transition: {
						duration: .7,
						delay: i % 8 * .05
					},
					className: "group relative overflow-hidden rounded-2xl",
					style: { aspectRatio: i % 5 === 0 ? "3 / 4" : "1 / 1" },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ee, {
							src: img.src,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img.src,
								alt: img.caption,
								loading: "lazy",
								className: "absolute inset-0 h-full w-full cursor-zoom-in object-cover transition-transform duration-[1200ms] group-hover:scale-110"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition group-hover:ring-rose-300/60 group-hover:[box-shadow:0_0_40px_oklch(0.78_0.16_18/0.35)]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 via-black/30 to-transparent px-3 py-3 opacity-0 transition group-hover:opacity-100",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => toggleFave(img.id),
								"aria-label": "Favorite",
								className: "grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-rose-400/60",
								children: faves[img.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiHeart, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineHeart, { className: "h-4 w-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: img.src,
									download: true,
									className: "grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20",
									"aria-label": "Download",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineArrowDownTray, { className: "h-4 w-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => share(img.src, img.caption),
									className: "grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20",
									"aria-label": "Share",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HiOutlineShare, { className: "h-4 w-4" })
								})]
							})]
						})
					]
				}, img.id))
			})
		})]
	});
}
//#endregion
export { Gallery };
