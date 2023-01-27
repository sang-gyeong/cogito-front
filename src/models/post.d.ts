declare namespace Post {
  interface ListItemResponse {
    posts: ListItem[];
    total: number;
  }

  interface ListItem {
    postId: number;
    title: string;
    content: string;
    tags: string[];
    nickname: string;
    profileImgUrl: string;
    score: number;
    commentCnt: number;
    createdAt: string;
  }

  interface Item {
    postId: number;
    title: string;
    content: string;
    tags: string[];
    files: string[];
    nickname: string;
    profileImgUrl: string;
    score: number;
    createdAt: string;
    commentResponses: Comment[];
    isMe: boolean;
  }
}
