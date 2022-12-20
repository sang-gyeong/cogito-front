declare namespace Board {
  interface Comment {
    id: number;
    content: string;
    likes: number;
    author: User;
    createdAt: string;
  }
}

declare interface Board {
  id: number;
  createdAt: string;
  title: string;
  content: string;
  likes: number;
  comments: Board.Comment[];
  tags: Tag[];
  author: User;
  mediaContents: string[];
}
