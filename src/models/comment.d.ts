declare interface Comment {
  commentId: number;
  content: string;
  selected: number;
  likeCnt: number;
  userId: number;
  nickname: string;
  score: number;
  profileImgUrl: string;
  createdAt: string;
  children: Comment[];
  isMe: true;
}
