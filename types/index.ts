// データの型定義ファイル

type Post = {
  id: string;
  date: string;
  title: string;
  author: string;
  body: string;
};

export interface PageData {
  filename: string;
  meta: {
    title: string;
    description: string;
  }
  posts: Post[];
}