import Vue from "vue";
import Vuex from "vuex";

import work from './work.js';
import contact from './contact.js';
import about from './about.js';
import home from './home.js';
import header from './header.js';
import footer from './footer.js';
import authentication from './authentication.js'
import blog from './blog.js'
import admin from './admin.js'
import user from './user.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
   modules: {
       work,
       contact,
       about,
       home,
       header,
       footer,
       authentication,
       blog,
       admin,
       user
   }
});