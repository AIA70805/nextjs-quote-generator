import { NextResponse } from "next/server";

type Quote = {
  id: number;
  text: string;
  author: string;
  category: "motivation" | "humor" | "wisdom" | "life";
};

const quotes: Quote[] = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "motivation",
  },
  {
    id: 2,
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "wisdom",
  },
  {
    id: 3,
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
    category: "humor",
  },
  {
    id: 4,
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
    category: "life",
  },
  {
    id: 5,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "motivation",
  },
  {
    id: 6,
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
    category: "wisdom",
  },
  {
    id: 7,
    text: "I'm not superstitious, but I am a little stitious.",
    author: "Michael Scott",
    category: "humor",
  },
  {
    id: 8,
    text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.",
    author: "Ralph Waldo Emerson",
    category: "life",
  },
  {
    id: 9,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "motivation",
  },
  {
    id: 10,
    text: "The only true wisdom is in knowing you know nothing.",
    author: "Socrates",
    category: "wisdom",
  },
  {
    id: 11,
    text: "I used to think I was indecisive, but now I'm not so sure.",
    author: "Unknown",
    category: "humor",
  },
  {
    id: 12,
    text: "In three words I can sum up everything I've learned about life: it goes on.",
    author: "Robert Frost",
    category: "life",
  },
  {
    id: 13,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "motivation",
  },
  {
    id: 14,
    text: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
    category: "wisdom",
  },
  {
    id: 15,
    text: "I'm on a seafood diet. I see food and I eat it.",
    author: "Unknown",
    category: "humor",
  },
  {
    id: 16,
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
    category: "life",
  },
  {
    id: 17,
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius",
    category: "motivation",
  },
  {
    id: 18,
    text: "Knowing yourself is the beginning of all wisdom.",
    author: "Aristotle",
    category: "wisdom",
  },
];

export async function GET() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  return NextResponse.json({ quote });
}
