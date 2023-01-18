declare namespace Post {
  interface ListItemResponse {
    posts: ListItem[];
  }

  interface ListItem {
    postId: number;
    title: string;
    content: string;
    tags: string[];
    // files: string[];
    commentCnt: number;
    nickname: string;
    profileImgUrl: string;
    score: number;
    createdAt: string;
  }

  interface Item {
    title: string;
    content: string;
    tags: string[];
    files: string[];
    nickname: string;
    profileImgUrl: string;
    score: number;
    createdAt: string;
    commentResponses: Comment[];
    isMe: true;
  }
}
