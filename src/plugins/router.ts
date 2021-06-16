import Vue from "vue";
import VueRouter, {RouteConfig} from "vue-router";
import {default as ISS} from "@/views/ISS.vue";
import {default as Jokes} from "@/views/Jokes.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/ISS",
    component: ISS,
  },
  {
    path: "/jokes",
    component: Jokes
  }
];

export default new VueRouter({
  routes,
});
