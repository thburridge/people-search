export interface Post {
  id: number;
  title: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "First Blog post",
    content:
      "This is the content that goes inside the first blog post. Feel free to add more posts!",
  },
  {
    id: 2,
    title: "Chakra UI: A Modern Design System for React",
    content: "In this post, we will explore the features of Chakra UI...",
  },
  {
    id: 3,
    title: "Styling components with Chakra using Typescript",
    content: "Here we will be customizing our components...",
  },
];
