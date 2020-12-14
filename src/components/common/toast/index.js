import Toast from './Toast'
const obj = {

}
obj.install = function (Vue) {
  // console.log('执行install函数');
  // Vue.prototype.$toast = Toast
  const toastConstructor = Vue.extend(Toast)
  const toast = new toastConstructor()
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast

}
export default obj