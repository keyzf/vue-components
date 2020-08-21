import dialog from './dialog';

const install = function (Vue) {
  Vue.use(dialog);
}
const components = []

export default {
  install,
  ...components
}