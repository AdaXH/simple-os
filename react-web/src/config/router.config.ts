import Index from '@/pages/index';
import ArticleList from '@/pages/articleList';
import Menus from '@/pages/menus';

export default [
  {
    path: '/',
    Component: Index,
    exact: true,
  },
  {
    path: '/menu',
    Component: Menus,
    exact: true,
  },
  {
    path: '/article-list',
    Component: ArticleList,
    exact: true,
  },
];
