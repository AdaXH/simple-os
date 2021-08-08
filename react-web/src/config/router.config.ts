import Index from '@/pages/index';
import Article from '@/pages/article';
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
    Component: Article,
    exact: true,
  },
];
