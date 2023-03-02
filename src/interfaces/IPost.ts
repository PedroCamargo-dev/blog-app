export interface IPost {
  published: boolean;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  authorId: number;
}