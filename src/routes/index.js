import Home from '../views/home';
import Demo from '../views/demo';
import Games from '../views/games';
import App from '../App';

const routes = [
  {
    path: '/home',
    exact: true,
    component: Home
  },
  {
    path: '/index',
    component: App
  },
  {
    path: '/games',
    component: Games
  },
  {
    path: '/demo',
    component: Demo
  },
  {
    path: '*',
    redirect: '/home',
    component: Home
  }
];

export default routes;
