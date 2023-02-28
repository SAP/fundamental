import { createRouter } from "vue-router";
import FDBlog from "@/views/FDBlogs.vue";
import FDConnect from "@/views/FDConnect.vue";

const routes = [
  {
    path: "/",
    name: "Blogs",
    component: FDBlog,
  },
  {
    path: "/",
    name: "Connect",
    component: FDConnect
  }
 
  
];

const router = createRouter({
  routes,
});

export default router;