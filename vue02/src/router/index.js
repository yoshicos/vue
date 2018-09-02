import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pageA from '@/components/pageA'
import pageB from '@/components/pageB'
import NotFoundComponent from '@/components/NotFoundComponent'

Vue.use(Router)

// ログイン画面コンポーネント
var Login = {
  template: '<div><input type="submit" value="Login" v-on:click="login"></div>',
  methods: {
    login: function() {
      Auth.login();                             // ログインＯＫ
      var redirect = (this.$route.query.redirect)?this.$route.query.redirect:'/';
      router.push(redirect);  // パラメータのpathにリダイレクト
    }
  }
};
// ログアウト画面コンポーネント
var Logout = {
  template: '<div><input type="submit" value="Logout" v-on:click="logout"></div>',
  methods: {
    logout: function() {
      Auth.logout();          // ログアウト処理
      router.push('/login');  // ルートへリダイレクト
    }
  }
};
// ログイン状態オブジェクト
var Auth = {
  loggedIn: false,
  login: function() { this.loggedIn = true },  // ログイン状態にする
  logout: function() { this.loggedIn = false } // ログアウトする
};

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      meta: { requiresAuth: true },
      components: {
        default: HelloWorld ,
        logout: Logout
      }
    },{
      path: '/a',
      name: 'page-A',
      meta: { requiresAuth: true },
      components: {
        default: pageA ,
        logout: Logout
      }
    },{
      path: '/b',
      name: 'page-B',
      meta: { requiresAuth: true },
      components: {
        default: pageB ,
        logout: Logout
      }
    },{ 
      path: '/login',
      name: 'log-in',
      component: Login 
    },{ 
      path: '/logout',
      name: 'log-out',
      component: Logout 
    },{ 
      path: '*',
      component: NotFoundComponent 
    }
  ]
})

// グローバルガード
router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Auth.loggedIn) {
    next({ path: '/login', query: { redirect: to.fullPath }});
  } else {
    next();
  }
});

export default router;
