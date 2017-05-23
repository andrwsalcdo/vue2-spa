// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
//tell vue to use the router
Vue.use(VueRouter)
//import hello component
import Hello from './components/Hello'
//import about component
import About from './components/About'

// define your routes
const routes = [
    { path: '/', component: Hello },
    { path: '/about', component: About }
] //array of {}, representing a path.


// Create the router instance and pass the 'routes' option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
    routes, // short for routes: routes
    mode: 'history'
})

// instatinate the vue instance
new Vue({
    // define the selector for the root component
    el: '#app',
    // pass the template to the root component
    template: '<App/>',
    // declare components that the root component can access
    components: { App },
    // pass in the router to the Vue instance
    router
}).$mount('#app') // mount the router on the app.
