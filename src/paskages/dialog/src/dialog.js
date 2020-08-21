import DialogBox from './Dialog.vue';
import Vue from 'vue';

let DialogConstructor = Vue.extend(DialogBox);
let instance;
let defaults = {
  title: '对话框',
  width: '800px',
  height: '500px',
}

function dialog (options = {}) {
  instance = new DialogConstructor();
  instance.$mount();
  document.body.appendChild(instance.$el)

  options = Object.assign({}, defaults, options);
  instance.show(options);
}


export default dialog;