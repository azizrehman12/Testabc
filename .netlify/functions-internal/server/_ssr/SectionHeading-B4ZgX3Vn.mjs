import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as motion } from "../_libs/framer-motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-B4ZgX3Vn.js
var import_jsx_runtime = require_jsx_runtime();
/** Single source of truth for the experience content. Replace freely — no code changes needed. */
var TOGETHER_SINCE = "2023-02-14T18:30:00";
var TIMELINE = [
	{
		date: "Feb 14, 2023",
		title: "First Meeting",
		text: "The very first time I saw your smile — and the world shifted.",
		img: "https://picsum.photos/seed/love-1/800/600"
	},
	{
		date: "Feb 20, 2023",
		title: "First Conversation",
		text: "We talked till sunrise. I still remember every word.",
		img: "https://picsum.photos/seed/love-2/800/600"
	},
	{
		date: "Mar 03, 2023",
		title: "First Selfie",
		text: "Two strangers, one frame, infinite tomorrows.",
		img: "https://picsum.photos/seed/love-3/800/600"
	},
	{
		date: "May 18, 2023",
		title: "Our Favorite Memory",
		text: "Rain, your laugh, a shared umbrella. Cinema-grade joy.",
		img: "https://picsum.photos/seed/love-4/800/600"
	},
	{
		date: "Aug 02, 2023",
		title: "First Gift",
		text: "A tiny rose that said everything I couldn't.",
		img: "https://picsum.photos/seed/love-5/800/600"
	},
	{
		date: "Dec 25, 2023",
		title: "Beautiful Moments",
		text: "Fairy lights, your eyes — same sparkle.",
		img: "https://picsum.photos/seed/love-6/800/600"
	},
	{
		date: "Forever",
		title: "Our Future",
		text: "Mornings, mountains, mischief — all with you.",
		img: "https://picsum.photos/seed/love-7/800/600"
	}
];
var GALLERY = [
	"couple-holding-hands",
	"sunset-walk",
	"coffee-date",
	"flowers",
	"gift",
	"birthday-cake",
	"heart-balloons",
	"beach",
	"mountains",
	"sky-lanterns",
	"roses",
	"golden-lights",
	"fairy-lights",
	"picnic",
	"night-drive",
	"city-lights",
	"rain-window",
	"old-letters",
	"candles",
	"macarons",
	"polaroids",
	"vinyl-record",
	"starry-sky",
	"ferris-wheel",
	"forest-walk",
	"snow-flakes",
	"champagne",
	"handwritten-note",
	"sunrise",
	"dance-floor"
].map((seed, i) => ({
	id: i,
	src: `https://picsum.photos/seed/bday-${seed}/900/${i % 3 === 0 ? 1200 : 900}`,
	caption: seed.replace(/-/g, " ")
}));
var VIDEOS = [
	{
		title: "Birthday Celebration",
		src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
		poster: "https://picsum.photos/seed/v-1/800/450"
	},
	{
		title: "Coffee Date",
		src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
		poster: "https://picsum.photos/seed/v-2/800/450"
	},
	{
		title: "Travel Memory",
		src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
		poster: "https://picsum.photos/seed/v-3/800/450"
	},
	{
		title: "Beach Walk",
		src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
		poster: "https://picsum.photos/seed/v-4/800/450"
	},
	{
		title: "Surprise Dinner",
		src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
		poster: "https://picsum.photos/seed/v-5/800/450"
	},
	{
		title: "Movie Night",
		src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
		poster: "https://picsum.photos/seed/v-6/800/450"
	},
	{
		title: "Love Notes",
		src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
		poster: "https://picsum.photos/seed/v-7/800/450"
	},
	{
		title: "Sunset Ride",
		src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
		poster: "https://picsum.photos/seed/v-8/800/450"
	},
	{
		title: "Birthday Cake",
		src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
		poster: "https://picsum.photos/seed/v-9/800/450"
	},
	{
		title: "Future Together",
		src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
		poster: "https://picsum.photos/seed/v-10/800/450"
	}
];
var REASONS = [
	"Your smile that resets my whole day",
	"Your eyes when you tell a story",
	"Your kindness, even to strangers",
	"Your laugh — my favorite sound",
	"Your unwavering support",
	"Your honesty, always",
	"Your hugs that fix everything",
	"Your voice on a long evening",
	"Your wild, beautiful dreams",
	"Your heart, the gentlest place I know",
	"The way you remember tiny details",
	"Your handwriting on little notes",
	"How you sing off-key with conviction",
	"Your playlist taste",
	"The way you say my name",
	"Your patience with me",
	"Your wit at 1 a.m.",
	"Your morning hair",
	"The way you cry at movies",
	"Your taste in books",
	"Your warm hands in winter",
	"Your way with words",
	"Your faith in us",
	"Your fearless love",
	"Your dance moves in the kitchen",
	"Your sleepy texts",
	"Your forehead kisses",
	"Your courage on bad days",
	"Your softness on quiet ones",
	"Your fire on adventures",
	"Your curiosity",
	"Your generosity",
	"Your loyalty",
	"The way you listen",
	"Your perfume",
	"Your silly nicknames",
	"Your random hugs",
	"The way you hold my hand",
	"Your art, in everything you do",
	"Your tea-making ritual",
	"Your obsession with sunsets",
	"Your dimples",
	"Your kindness to animals",
	"Your stubborn hope",
	"Your honesty in fights",
	"The way you say goodnight",
	"Your future-self plans",
	"Your present-self magic",
	"Your forever — promised to me",
	"Simply, all of you ❤"
];
var FLOATING_NOTES = [
	"I Love You ❤",
	"Forever",
	"Always Yours",
	"Beautiful",
	"My Princess",
	"My Queen",
	"My Everything",
	"You're my home",
	"Mine — every page",
	"Cariño"
];
var MEMORY_BOOK = [
	{
		date: "Day 001",
		title: "Hello, You.",
		text: "The very first chapter — and the rest writes itself.",
		img: "https://picsum.photos/seed/book-1/700/900"
	},
	{
		date: "Day 047",
		title: "The Long Walk",
		text: "We didn't notice the rain. We never do.",
		img: "https://picsum.photos/seed/book-2/700/900"
	},
	{
		date: "Day 112",
		title: "Coffee, Always",
		text: "Two cups. Same order. Different stories every time.",
		img: "https://picsum.photos/seed/book-3/700/900"
	},
	{
		date: "Day 233",
		title: "City of Lights",
		text: "You called every streetlight romantic. They were.",
		img: "https://picsum.photos/seed/book-4/700/900"
	},
	{
		date: "Day 365",
		title: "One Year, Infinite Us",
		text: "A year felt like an evening. An evening felt like home.",
		img: "https://picsum.photos/seed/book-5/700/900"
	},
	{
		date: "Today",
		title: "Happy Birthday, My Love",
		text: "This page is yours. So is the next. So is forever.",
		img: "https://picsum.photos/seed/book-6/700/900"
	}
];
var PLAYLIST = [
	{
		title: "Soft Lullaby",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
	},
	{
		title: "Sunset Waltz",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
	},
	{
		title: "Our Slow Dance",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
	},
	{
		title: "Quiet Promises",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
	},
	{
		title: "Forever Yours",
		src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
	}
];
function SectionHeading({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl text-center",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: {
					opacity: 0,
					y: 10
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .8 },
				className: "text-xs uppercase tracking-[0.5em] text-rose-300/80",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
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
					margin: "-80px"
				},
				transition: {
					duration: 1,
					ease: "easeOut"
				},
				className: "mt-3 font-display text-4xl text-gold-gradient md:text-6xl",
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
				initial: { opacity: 0 },
				whileInView: { opacity: 1 },
				viewport: { once: true },
				transition: {
					duration: 1,
					delay: .2
				},
				className: "mt-4 text-white/65",
				children: subtitle
			})
		]
	});
}
//#endregion
export { REASONS as a, TOGETHER_SINCE as c, PLAYLIST as i, VIDEOS as l, GALLERY as n, SectionHeading as o, MEMORY_BOOK as r, TIMELINE as s, FLOATING_NOTES as t };
