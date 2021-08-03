import Index from '@/pages/index';
import Article from '@/pages/article';

export default [
  {
    path: '/',
    Component: Index,
    exact: true,
  },
  {
    path: '/article-list',
    Component: Article,
    exact: true,
  },
];
