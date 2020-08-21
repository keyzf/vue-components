import service from './src/dialog';

const Dialog = {
  install: Vue => {
    Vue.prototype.$dialog = service;
  }
}

export default Dialog