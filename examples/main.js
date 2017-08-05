/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import components from './data/vux_component_list.json'
import store from './store/';
import App from './app.vue';
import fView from '../src/index';
// import locale from '../src/locale/lang/en-US';
import locale from '../src/locale/lang/zh-CN';
import '../dist/styles/fview.css';

Vue.use(VueRouter);
Vue.use(fView, { locale });

// 开启debug模式
Vue.config.debug = true;

function camelCase (input) {
  let str = input.toLowerCase().replace(/-(.)/g, function (match, group1) {
    return group1.toUpperCase()
  })

  str = str.replace(/_(.)/g, function (match, group1) {
    return group1.toUpperCase()
  })
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

// 路由配置
const router = new VueRouter({
  routes: components.map(item => { return { path: '/component/' + item.name, component: require('./routers/' + camelCase(item.name) + '.vue') } }).concat(
    [
      { path: '/', redirect: '/demo' },
      { path: '/demo', component: require('./routers/Demo.vue') }
    ])
});

// simple history management
const history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

router.beforeEach(function (to, from, next) {
  store.commit('UPDATE_LOADING', true)

  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)

  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('UPDATE_DIRECTION', 'forward')
    } else {
      store.commit('UPDATE_DIRECTION', 'reverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('UPDATE_DIRECTION', 'forward')
  }

  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    next()
  }
})

router.afterEach(function (to) {
  store.commit('UPDATE_LOADING', false)
  // if (process.env.NODE_ENV === 'production') {
  //   ga && ga('set', 'page', to.fullPath)
  //   ga && ga('send', 'pageview')
  // }
})

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
