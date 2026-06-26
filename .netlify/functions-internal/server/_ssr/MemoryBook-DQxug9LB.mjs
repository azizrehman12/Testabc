import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
import { o as SectionHeading, r as MEMORY_BOOK } from "./SectionHeading-B4ZgX3Vn.mjs";
import { a as SwiperSlide, i as Swiper, n as Pagination, r as Keyboard, t as EffectCreative } from "../_libs/swiper.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/MemoryBook-DQxug9LB.js
var import_jsx_runtime = require_jsx_runtime();
function MemoryBook() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative z-10 px-6 py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
			eyebrow: "Memory book",
			title: "Turn the page",
			subtitle: "A little book of us. Flip through gently — these pages are alive."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
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
				margin: "-80px"
			},
			transition: { duration: 1 },
			className: "mx-auto mt-14 max-w-5xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Swiper, {
				modules: [
					EffectCreative,
					Keyboard,
					Pagination
				],
				effect: "creative",
				grabCursor: true,
				keyboard: { enabled: true },
				pagination: { clickable: true },
				creativeEffect: {
					prev: {
						translate: [
							"-105%",
							0,
							-200
						],
						rotate: [
							0,
							-15,
							0
						],
						opacity: 0
					},
					next: {
						translate: [
							"105%",
							0,
							-200
						],
						rotate: [
							0,
							15,
							0
						],
						opacity: 0
					}
				},
				loop: true,
				className: "!pb-12",
				children: MEMORY_BOOK.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwiperSlide, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid overflow-hidden rounded-3xl md:grid-cols-2",
					style: {
						background: "linear-gradient(180deg, #fbf5e8, #efdcb8)",
						color: "#3a2415",
						boxShadow: "0 60px 140px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.6)"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[4/5] md:aspect-auto",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: p.img,
							alt: p.title,
							loading: "lazy",
							className: "absolute inset-0 h-full w-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-transparent to-[#efdcb8]" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center p-10 md:p-14",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs uppercase tracking-[0.4em] text-[#7a2638]/80",
								children: p.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-display text-4xl text-[#7a2638]",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 font-script text-2xl leading-relaxed",
								children: p.text
							})
						]
					})]
				}) }, i))
			})
		})]
	});
}
//#endregion
export { MemoryBook };
