import Home from '../views/home';
import Demo from '../views/demo';
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
    component: Demo
  },
  {
    path: '*',
    component: App
  }
];

export default routes;
