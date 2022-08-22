import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import home from './home';
import search from './search';
import detail from './detail';
import shopcar from './shopcar'
import register from './register';
export default new Vuex.Store({
    modules: {
        home,
        search,
        detail,
        shopcar,
        register
    },
});
