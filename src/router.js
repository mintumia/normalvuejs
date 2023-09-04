import {createRouter, createWebHistory} from 'vue-router';
import TaskPage from "./pages/TaskPage.vue";
import PostsPage from "./pages/PostsPage.vue";


const routes = [
    {
        name: 'TaskPage',
        path: '/',
        component: TaskPage,
    },
    {
        name: 'PostsPage',
        path: '/posts',
        component: PostsPage,
    }
];


const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
  //  history: createWebHistory(),//Same code Working
    routes
});

export default router;