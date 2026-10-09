import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "BENTO CAKES TORONTO",
  tagline: "Custom-designed bento cakes and cake to go cups in Etobicoke.",
  category: "Custom bento cakes",
  schemaType: "Bakery",
  area: "Etobicoke, ON",
  siteUrl: "https://bento-cakes-toronto.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#bb9886" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Made in Etobicoke",
    headline: "Custom bento cakes, made just for you",
    subhead:
      "Small, medium, and large bento cakes plus cake to go cups, hand drawn and personalized. Send a DM with your date, size, flavour, and design idea to get started.",
    images: [
      { src: "/images/post1.jpg", alt: "Bento cake ideas for him by Bento Cakes Toronto", width: 1080, height: 1440 },
      { src: "/images/post4.jpg", alt: "Baby girl bento cakes with soft pink details", width: 1080, height: 1440 },
      { src: "/images/post9.jpg", alt: "Medium bento cake with cake to go cups", width: 1080, height: 1397 },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "Custom bento cakes in S, M and L",
    "Cake to go cups",
    "Hand drawn, personalized designs",
    "Orders by Instagram DM",
  ],

  about: {
    title: "Little cakes with big personality",
    body: [
      "Bento Cakes Toronto creates custom-designed bento cakes and cake to go cups in Etobicoke. Every cake is made to order, from sweet birthday designs to themed cakes for him, for kids, and for every celebration in between.",
      "Have a design in mind? Send a DM with your date, size, flavour, and idea, and we will help you bring it to life.",
    ],
    image: { src: "/images/post6.jpg", alt: "Hand drawn character bento cake", width: 1080, height: 1387 },
  },

  menu: {
    title: "What we make",
    intro: "A few favourites from recent orders. Sizes and pricing are shared in your DM.",
    variant: "cards",
    groups: [
      {
        title: "Bento cakes",
        note: "Small, medium and large. DM for sizes and pricing.",
        items: [
          {
            name: "Bento cakes for him",
            description: "Clean, bold designs for birthdays and celebrations.",
            image: { src: "/images/post1.jpg", alt: "Bento cake ideas for him" },
            href: "https://www.instagram.com/p/DePSeNToDkt/",
          },
          {
            name: "Custom birthday bento cakes",
            description: "Hand drawn and personalized for the big day.",
            image: { src: "/images/post3.jpg", alt: "Custom birthday bento cakes" },
            href: "https://www.instagram.com/p/Dd7OGygoH_K/",
          },
          {
            name: "Baby girl bento cakes",
            description: "Soft, sweet designs for little ones.",
            image: { src: "/images/post4.jpg", alt: "Baby girl bento cakes" },
            href: "https://www.instagram.com/p/Ddr0NehIP0o/",
          },
          {
            name: "Bento cakes for little boys",
            description: "Playful themes and fun characters.",
            image: { src: "/images/post8.jpg", alt: "Bento cakes for little boys" },
            href: "https://www.instagram.com/p/DdEXUZoIA4k/",
          },
        ],
      },
      {
        title: "Cake to go",
        note: "Perfect alongside a bento cake.",
        items: [
          {
            name: "Cake to go cups",
            description: "Cute cups to share or take on the go.",
            image: { src: "/images/post9.jpg", alt: "Medium bento cake and cake to go cups" },
            href: "https://www.instagram.com/p/DcyseNZoHjZ/",
          },
        ],
      },
    ],
    footnote: "DM for sizes and pricing. Every cake is quoted based on size, design, and date.",
  },

  gallery: {
    title: "A look at the cakes",
    items: [
      {
        src: "/images/post1.jpg",
        width: 1080,
        height: 1440,
        alt: "Bento cake ideas for him",
        caption: "Bento cake ideas for him",
        href: "https://www.instagram.com/p/DePSeNToDkt/",
      },
      {
        src: "/images/post3.jpg",
        width: 1080,
        height: 1440,
        alt: "Custom birthday bento cakes",
        caption: "Custom birthday bento cakes",
        href: "https://www.instagram.com/p/Dd7OGygoH_K/",
      },
      {
        src: "/images/post4.jpg",
        width: 1080,
        height: 1440,
        alt: "Baby girl bento cakes",
        caption: "Baby girl bento cakes",
        href: "https://www.instagram.com/p/Ddr0NehIP0o/",
      },
      {
        src: "/images/post6.jpg",
        width: 1080,
        height: 1387,
        alt: "Character bento cake",
        caption: "Hand drawn character cake",
        href: "https://www.instagram.com/p/DdWtznmTzaz/",
      },
      {
        src: "/images/post8.jpg",
        width: 1080,
        height: 1440,
        alt: "Bento cakes for little boys",
        caption: "Bento cakes for little boys",
        href: "https://www.instagram.com/p/DdEXUZoIA4k/",
      },
      {
        src: "/images/post9.jpg",
        width: 1080,
        height: 1397,
        alt: "Medium bento cake and cake to go",
        caption: "Medium bento and cake to go",
        href: "https://www.instagram.com/p/DcyseNZoHjZ/",
      },
      {
        src: "/images/post10.jpg",
        width: 1080,
        height: 1384,
        alt: "Teddy bear bento cakes",
        caption: "Teddy bear bento cakes",
        href: "https://www.instagram.com/p/DclhShIlgxB/",
      },
      {
        src: "/images/post2.jpg",
        width: 1080,
        height: 1350,
        alt: "How to place an order with Bento Cakes Toronto",
        caption: "How to place an order",
        href: "https://www.instagram.com/p/DeAeU_NoM_n/",
      },
    ],
  },

  reels: { title: "A closer look", intro: "", items: [] },

  instagram: {
    handle: "mary_bentocake",
    embeds: [
      "https://www.instagram.com/p/DePSeNToDkt/",
      "https://www.instagram.com/p/Dd7OGygoH_K/",
      "https://www.instagram.com/p/Ddr0NehIP0o/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro:
      "Orders are taken through Instagram. Tap the button to copy a starter message, then paste it into the chat. We will share sizes and pricing there.",
    dmMessage:
      "Hi Bento Cakes Toronto! I would like to order a custom bento cake.\nDate needed:\nSize (S / M / L) or servings:\nFlavour:\nDesign idea (I can send an inspo photo):",
    links: [],
    note: "DM for sizes and pricing. Please include your date and design idea so we can help quickly.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I order?",
      a: "Send a DM on Instagram with your date, size or servings, flavour, and design idea. You will get sizes and pricing back in the chat.",
    },
    {
      q: "What sizes do you offer?",
      a: "Custom bento cakes come in small, medium and large, plus cake to go cups. Exact sizes and pricing are shared when you DM.",
    },
    {
      q: "Where are you based?",
      a: "Bento Cakes Toronto is based in Etobicoke, Ontario.",
    },
    {
      q: "Can you do a custom design?",
      a: "Yes. Cakes are hand drawn and personalized. Share an inspo photo or describe your idea in the DM.",
    },
  ],

  contact: {
    area: "Etobicoke, Ontario",
    socials: [],
  },

  seo: {
    title: "Bento Cakes Toronto | Custom bento cakes in Etobicoke",
    description:
      "Custom-designed bento cakes and cake to go cups in Etobicoke. Small, medium and large sizes. Order by Instagram DM for sizes and pricing.",
    keywords: [
      "bento cakes Toronto",
      "custom bento cakes Etobicoke",
      "cake to go Toronto",
      "personalized bento cake",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
