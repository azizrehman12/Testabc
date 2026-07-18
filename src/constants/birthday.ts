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
  "The way you make the miles between us disappear", "Your sleepy voice notes that I listen to on repeat", "Your eyes when you look at me through the screen",
  "The way my heart races when your name pops up", "Your beautiful, wild dreams", "How you understand me without a single word",
  "The daydreams of finally holding your hand", "Your unwavering faith in us", "The warmth you bring to my coldest days",
  "How counting down the days feels like a beautiful torture", "Your sleepy texts that I read over and over", "The way you promise me a future",
  "How deeply connected I feel to you across the distance", "Your gorgeous smile that lights up my screen", "The comfort of hearing your sweet voice notes",
  "How every song reminds me of you", "Your patience while we wait for 'someday'", "The way you make me fall in love every day",
  "How I already know exactly how you'll feel in my arms", "Your incredible strength and grace", "The imaginary dates we plan together",
  "How distance means so little when someone means so much", "The way you say my name", "How you make the wait so worth it",
  "The feeling of safety I get just by texting you", "Your lovely voice that instantly calms me down", "The good morning texts",
  "The way you make my phone my favorite possession", "The cute things you say that make me smile at my screen", "How you calm my anxieties",
  "The countdowns we share", "How you've shown me what true, patient love is", "The way you support me when I'm feeling down",
  "How much I crave to just sit next to you", "Your beautiful soul that outshines everything else", "The way you look at me",
  "How you make 'I miss you' sound like poetry", "The inside jokes that only we understand", "Your constant reassurance",
  "The way my heart skips a beat when you send a picture", "Your endless kindness and generosity", "How you make me want to be better",
  "The beautiful moments we've shared, even apart", "How you're the first person I want to tell everything to", "How you make the wait beautiful",
  "How your 'I love you' travels faster than light", "The way you look in your selfies", "Your heart, the most beautiful place I know",
  "How I know the first hug is going to be magical", "Simply, all of you ❤",
];

export const FLOATING_NOTES = [
  "I Love You ❤", "Can't wait to meet", "Always Yours", "Counting the days",
  "You're my home", "Distance means nothing", "See you soon",
];

export const MEMORY_BOOK = [
  { date: "Day 001", title: "Hello, You.", text: "The very first message — and the rest writes itself.", img: "/assets/06.jpeg" },
  { date: "The Dream", title: "The First Hug", text: "I've imagined it a thousand times. Soon, it will be real.", img: "/assets/01.jpeg" },
  { date: "Today", title: "Happy Birthday, My Love", text: "Even across the miles, you are the closest thing to my heart.", img: "/assets/13.jpeg" },
];

export const PLAYLIST = [
  { title: "Bhool", src: "/audio/1.m4a" },
  { title: "Ye Dill Thum Bin lagta Nahi", src: "/audio/2.m4a" },
  { title: "Thumhi Meri Dewata", src: "/audio/3.m4a", startAt: 11 },
  { title: "Teray Pyar mai sara Alam kho bhaitay hain", src: "/audio/4.m4a" },
  { title: "Pal Pal", src: "/audio/5.m4a" },
];

export const BUCKET_LIST = [
  "Our very first hug",
  "Hold hands while walking down a random street",
  "Go to a cute cafe and just look at each other",
  "Stay up all night talking in person",
  "Watch a movie and fall asleep on your shoulder",
  "Cook a messy meal together",
  "Listen to our playlist together in the car",
  "Take a million polaroids of us finally together",
];

export const OPEN_WHEN_LETTERS = [
  {
    id: "miss-me",
    title: "Open when you miss me",
    content: "I'm missing you too, right at this very second. Close your eyes, listen to a voice note, and remember that every second passing brings us closer to the day we finally meet.",
  },
  {
    id: "bad-day",
    title: "Open when you're having a bad day",
    content: "My love, I wish I could be there to hold you. Take a deep breath. You are incredibly strong, and I am so deeply proud of you. I'm always cheering you on from across the miles.",
  },
  {
    id: "need-hug",
    title: "Open when you need a hug",
    content: "Wrap your arms around yourself really tight—that's me hugging you from afar. One day, I'll be doing it for real, and I promise I'll never let go.",
  },
  {
    id: "doubts",
    title: "Open when the distance feels too hard",
    content: "I know the miles are tough, but you are my favorite 'wait'. You are worth every single second of this distance. We will make it, and it will be so incredibly beautiful.",
  },
];

export const GLOBE_LOCATIONS = {
  start: { lat: 24.6559, lng: 68.8330, name: "Badin, Sindh" },
  end: { lat: 33.6844, lng: 73.0479, name: "Islamabad" },
};