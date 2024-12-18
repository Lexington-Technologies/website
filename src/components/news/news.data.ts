interface NewsContent {
  subheading?: string;
  text?: string;
  image?: string;
  imageAlt?: string;
}

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  content: NewsContent[];
}

export const newsData: NewsItem[] = [
  {
    id: "Tech Training Session in Dubia",
    title: "Tech Training Session in Dubia",
    excerpt: "Tech Training Session in Dubia.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/public/news/img18.jpg",
    category: "News",
    content: [
      {
        text: "  Labore sit minus, nulla laborum quisquam vel et? Tempore perferendis deserunt suscipit? Nobis veniam totam ex nihil voluptatem atque nam vel fugiat."
      },
      {
        subheading: "  Labore sit minus, nulla laborum quisquam vel et? Tempore perferendis deserunt suscipit? Nobis veniam totam ex nihil voluptatem atque nam vel fugiat",
        text: "  Labore sit minus, nulla laborum quisquam vel et? Tempore perferendis deserunt suscipit? Nobis veniam totam ex nihil voluptatem atque nam vel fugiat."
      },
      {
        image: "/public/news/img16.jpg",
        imageAlt: "Seniors participating in wellness activities"
      },
      {
        image: "/public/news/img21.jpg",
        imageAlt: "Seniors participating in wellness activities"
      },
      {
        image: "/public/news/img20.jpg",
        imageAlt: "Seniors participating in wellness activities"
      },
    ]
  },
  {
    id: "NABTEB Session Training",
    title: "NABTEB Session Training",
    excerpt: "NABTEB Session Training.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/public/news/img4.jpg",
    category: "Programs & Awards",
    content: [
      {
        text: "NABTEB Session Training."
      },
      {
        subheading: "NABTEB Session Training",
        text: "NABTEB Session Training."
      },
      {
        image: "/public/news/img2.jpg",
        imageAlt: "Seniors participating in wellness activities"
      },
      {
        image: "/public/news/img3.jpg",
        imageAlt: "Seniors participating in wellness activities"
      },
      {
        image: "/public/news/img5.jpg",
        imageAlt: "Seniors participating in wellness activities"
      },
    ]
  },
  {
    id: "Leadership training for kano state govt",
    title: "Leadership training ",
    excerpt: "Leadership training for kano state govt.",
    date: "March 10, 2024",
    readTime: "4 min read",
    image: "/public/news/img8.jpg",
    category: "News",
    content: [
      {
        text: "E-Nigeria 2019."
      },
    ]
  },
  {
    id: "DBN Semina 2024",
    title: "DBN Semina 2024",
    excerpt: "Semina (body).",
    date: "March 5, 2024",
    readTime: "3 min read",
    image: "/public/news/img12.jpg",
    category: "Program",
    content: [
      {
        text: "Semina (body)."
      }
    ]
  },
  {
    id: "TETFUND Training 2024",
    title: "TETFUND Training 2024",
    excerpt: "TETFUND Training 2024.",
    date: "March 15, 2024",
    readTime: "5 min read",
    image: "/public/news/img22.HEIC",
    category: "Programs",
    content: [
      {
        text: "TETFUND Training 2024."
      },
      {
        subheading: "TETFUND Training 2024",
        text: "TETFUND Training 2024."
      },
      {
        image: "/public/news/img23.HEIC",
        imageAlt: "Seniors participating in wellness activities"
      },
      {
        image: "/public/news/img24.HEIC",
        imageAlt: "Seniors participating in wellness activities"
      },
      {
        image: "/public/news/img25.HEIC",
        imageAlt: "Seniors participating in wellness activities"
      },
    ]
  },


];