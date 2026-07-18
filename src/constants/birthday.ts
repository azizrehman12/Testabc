/** Single source of truth for the experience content. Replace freely — no code changes needed. */

export const TOGETHER_SINCE = "2025-09-14T00:00:00";

export const TIMELINE = [
  {
    title: "The Smile",
    text: "The smile that quietly became my favorite place.",
    img: "/assets/06.jpeg",
  },
  {
    title: "Grace in Every Frame",
    text: "Some people don't need a pose they simply carry elegance.And thats you   ",
    img: "/assets/04.jpeg",
  },
  {
    title: "Eyes That Speak",
    text: "A thousand stories hidden behind one beautiful glance.",
    img: "/assets/02.jpeg",
  },
  {
    title: "Effortlessly Beautiful",
    text: "Some moments become unforgettable simply because you're in them.",
    img: "/assets/08.jpeg",
  },
  {
    title: "Like a Blooming Rose",
    text: "Soft, graceful, and beautiful in the quietest way.",
    img: "/assets/05.jpeg",
  },
  {
    title: "A Moment Worth Keeping",
    text: "Not every picture needs a reason. Some are simply meant to be remembered.",
    img: "/assets/01.jpeg",
  },
];
export const GALLERY = Array.from({ length: 14 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    id: i,
    src: `/assets/${num}.jpeg`,
    caption: `Beautiful Memory ${num}`,
  };
});

export const VIDEOS: { title: string; src: string; poster?: string }[] = [
  { title: "Here everything revolve around you  ", src: "/vedios/1.mp4", },
  { title: "Ahhhhh GoDDDDDDDD!!!!", src: "/vedios/2.mp4", },
];

export const REASONS = [
  "Your smile that resets my whole day", "Your eyes when you tell a story", "Your kindness, even to strangers",
  "Your laugh — my favorite sound", "Your unwavering support", "Your honesty, always",
  "Your hugs that fix everything", "Your voice on a long evening", "Your wild, beautiful dreams",
  "Your heart, the gentlest place I know", "The way you remember tiny details", "Your handwriting on little notes",
  "How you sing off-key with conviction", "Your playlist taste", "The way you say my name",
  "Your patience with me", "Your wit at 1 a.m.", "Your morning hair",
  "The way you cry at movies", "Your taste in books", "Your warm hands in winter",
  "Your way with words", "Your faith in us", "Your fearless love",
  "Your dance moves in the kitchen", "Your sleepy texts", "Your forehead kisses",
  "Your courage on bad days", "Your softness on quiet ones", "Your fire on adventures",
  "Your curiosity", "Your generosity", "Your loyalty",
  "The way you listen", "Your perfume", "Your silly nicknames",
  "Your random hugs", "The way you hold my hand", "Your art, in everything you do",
  "Your tea-making ritual", "Your obsession with sunsets", "Your dimples",
  "Your kindness to animals", "Your stubborn hope", "Your honesty in fights",
  "The way you say goodnight", "Your future-self plans", "Your present-self magic",
  "Your forever — promised to me", "Simply, all of you ❤",
];

export const FLOATING_NOTES = [
  "I Love You ❤", "Forever", "Always Yours", "Beautiful", "My Princess", "My Queen", "My Everything",
  "You're my home", "Mine — every page", "Cariño",
];

export const MEMORY_BOOK = [
  { date: "Day 001", title: "Hello, You.", text: "The very first chapter — and the rest writes itself.", img: "/assets/06.jpeg" },
  { date: "Today", title: "Happy Birthday, My Love", text: "This page is yours. So is the next. So is forever.", img: "/assets/13.jpeg" },
];

export const PLAYLIST = [
  { title: "Bhool", src: "/audio/1.m4a" },
  { title: "Ye Dill Thum Bin lagta Nahi", src: "/audio/2.m4a" },
  { title: "Thumhi Meri Dewata", src: "/audio/3.m4a", startAt: 11 },
  { title: "Teray Pyar mai sara Alam kho bhaitay hain", src: "/audio/4.m4a" },
  { title: "Pal Pal", src: "/audio/5.m4a" },
];