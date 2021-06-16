import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import Main from "@/views/ISS.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Main,
  },
];

export default new VueRouter({
  routes,
});
