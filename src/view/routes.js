import MainPage from './containers/main';

const Routes = {
  '/index': {
    render(vnode) {
      return m(MainPage);
    },
  },
};

const DefaultRoute = '/index';
export { Routes, DefaultRoute };
