import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Work from './views/Work.vue'
import Contact from './views/Contact.vue'
import LogIn from './views/authentication/LogIn.vue'
import SignUp from './views/authentication/SignUp.vue'
import Blog from './views/Blog.vue'
import NewPost from './components/blog/NewPost.vue'
import EditPost from './components/blog/EditPost.vue'
import SinglePost from './components/blog/SinglePost.vue'
import Profile from './views/Profile.vue'
import ProfileData from './components/blog/ProfileData'
import {store} from './store/store'

Vue.use(Router)

export const routes = [

    {path: '', component: Home},
    {path: '/about', component: About},
    {path: '/work', component: Work},
    {path: '/contact', component: Contact},
    {path: '/login', component: LogIn},
    {path: '/signup', component: SignUp},
    {path: '/blog', component: Blog},
    {path: '/blog/newpost', component: NewPost},
    {path: '/blog/editpost/:id', component: EditPost},
    {path: '/blog/singlepost/:id', component: SinglePost},
    {path: '/profile/:id', component: Profile,
    beforeEnter: (to, from, next) => {
			const id = to.params.id
			store.dispatch('getSingleUser', id )
			.then(response => {
				next();
			});
		}},
    {path: '/profiledata', component: ProfileData}

  ]