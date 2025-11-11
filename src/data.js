// Your Birthday Date (Format: yyyy-mm-ddTHH:MM:SS)
export const BIRTHDAY_DATE = "2025-11-11T00:00:00";

// Add recipient's name here.
export const NAME = "RUHU"


// Special Messages Screen
// You can edit each card from here.
// - "title" is optional, if you don’t want it, just remove it.
// - "showIcon" is true to show icon, false to hide it.
// - You can change the "color" and "message" as you like.
export const messages = [
    {
        id: 1,
        color: "from-rose-500 to-pink-500",
        title: "My Forever Love 💖",
        message:
            "Every moment with you feels like a dream I never want to wake up from. You’re not just my love — you’re my peace, my home, and my everything.",
        showIcon: true,
    },
    {
        id: 2,
        color: "from-red-500 to-purple-500",
        title: "Happy Birthday, My Queen 🎂",
        message:
            "Your birthday isn’t just your special day — it’s my favorite day, the day the love of my life came into this world. I’m so thankful for you, always.",
        showIcon: true,
    },
    {
        id: 3,
        color: "from-blue-500 to-indigo-500",
        title: "Distance Means Nothing 🌙",
        message:
            "Even miles apart, my heart beats in rhythm with yours. One call, one smile, one word from you — and my whole world lights up again.",
        showIcon: true,
    },
    {
        id: 4,
        color: "from-yellow-500 to-orange-500",
        title: "Forever Yours 💍",
        message:
            "You’re not just my girlfriend, not just my wife in heart — you’re my forever person. My life makes sense because you’re in it, and I’ll keep loving you endlessly.",
        showIcon: true,
    },
];


// Photo Gallery Screen
// Heading text for the Photo Gallery section (displayed at the top)
export const photoScreenHeading = "My Cutu Baccha"

// Subheading text for the Photo Gallery section (optional - you can remove or leave it blank if not needed)
export const photoScreenSubHeading = "Thodi photos bhejti 🥲 my baccha"

// List of photo objects to display in the gallery
// - Add more photos by copying the same line and changing the id and src
// - Make sure each id is unique and the src points to a valid image path
// Make sure all image files are placed in the `/public/images/` folder
export const photos = [
    { id: 1, src: "/images/1.jpg" },
    { id: 2, src: "/images/2.jpg" },
    { id: 3, src: "/images/3.jpg" },
    { id: 4, src: "/images/4.jpg" },
]


// Letter Screen
// Main heading for the letter screen
export const letterScreenHeading = "A Special Letter"

// Optional subheading for the letter screen
// If you don't want any subheading, just leave it blank like this: ""
export const letterScreenSubHeading = "Just for you, on your special day 💌"

// Actual letter content to display on the screen
export const letterText = `My Dearest Madam Jii ❤️,

I wish I could be right there beside you today, holding your hand and watching that beautiful smile in person. But even though I’m not with you on this special day, please know that every beat of my heart is celebrating *you* — the most precious part of my life.

This distance between us feels heavy sometimes, yet it only makes my love grow stronger every single day. I miss you more than words can ever express, but I also love you more than distance can ever measure. 💫

I regret that I couldn’t give you any special gift this time, but I wanted to give you something that truly came from my heart. So, with my small skills and a lot of love, I built this little website — something to make you smile, something that’s *just ours*. It’s not perfect, but it’s made with every ounce of love I have for you. 💻❤️

You mean the world to me, Madam Jii. Your laughter is my peace, and how can i forget your voice it is my favorite melody, and your happiness is my only wish today and forever. You’ve given my life meaning, and I promise — one day soon, I’ll make up for every moment I couldn’t be there.

Happy Birthday, my love, my strength, my everything. 🎂✨  
May this day bring you all the joy you deserve — and may my love wrap around you no matter how far apart we are.

Forever and Always Yours,  
💞 Rave 💞`


// Background Music file path
// Place your .mp3 file inside the "public/audio" folder and give the path like below.
export const backgroundMusic = "/audio/bg.mp3"
