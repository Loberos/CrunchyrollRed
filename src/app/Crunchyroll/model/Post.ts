// post.model.ts (o donde definas tu modelo de Post)

export interface Post {
  content: string;
  Resource: string;
  userId: string;
  createdAt: Date;
  urlResource: string;
}
