import { PageData } from '../../types';

export const sampleA: PageData = {
  filename: 'sample-a.html',
  meta: {
    title: 'サンプルA',
    description: 'サンプルAの説明文',
  },
  posts: [
    {
     id: '001',
     date: '2021/01/01',
     title: '初めての投稿',
     author: 'いぬ',
     body: 'hoge',
    },
    {
     id: '002',
     date: '2021/01/02',
     title: '面白いタイトル！',
     author: 'ねこ',
     body: 'hogehoge',
    }
  ]
}