declare interface Board {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: Comment[];
  tags: Tag[];
  author: User;
  mediaContents: string[];
}
