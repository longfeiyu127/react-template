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
    component: App
  }
];

export default routes;
