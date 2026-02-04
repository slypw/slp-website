// blogsData.ts
export type Page = "home" | "projects" | "blogs" | "about" | "sota-resnet";

export type BlogPost = {
  id: Page; // must match the page in App.tsx
  title: string;
};

export const blogPosts: BlogPost[] = [
  { id: "sota-resnet", title: "ResNet CIFAR-10 Classifier" },
  // Add more posts here!
];
