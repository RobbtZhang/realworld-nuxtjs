import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4509da1c = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _f1f742b2 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _59bfbea1 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _7c1d2a3e = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _0d7c01eb = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _5ca78d96 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _ae88a3a4 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _4509da1c,
    children: [{
      path: "",
      component: _f1f742b2,
      name: "home"
    }, {
      path: "login",
      component: _59bfbea1,
      name: "login"
    }, {
      path: "register",
      component: _59bfbea1,
      name: "register"
    }, {
      path: "profile/:username",
      component: _7c1d2a3e,
      name: "profile"
    }, {
      path: "settings",
      component: _0d7c01eb,
      name: "settings"
    }, {
      path: "editor",
      component: _5ca78d96,
      name: "editor"
    }, {
      path: "article/:slug",
      component: _ae88a3a4,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
