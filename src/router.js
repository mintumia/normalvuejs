import{createRouter,createWebHistory} from 'vue-router';
import TaskPage from "@/pages/TaskPage.vue";
import PostsPage from "@/pages/PostsPage.vue";


const routes= [
    {
    path:'/',
    component:TaskPage,
    },
    {
        path:'/post',
        component:PostsPage,
    }
]



const router = createRouter({
    history:createWebHistory,
    routes:routes,
});

export default router;