import { createRouter, createWebHashHistory, } from "vue-router";
import Home from "@/pages/HomePage";
import What from "@/pages/WhatPage";
import Who from "@/pages/WhoPage";
import Where from "@/pages/WherePage";

export default createRouter({
    history: createWebHashHistory(),

    routes: [
        { path: '/', component: Home },
        { path: '/what', component: What },
        { path: '/who', component: Who },
        { path: '/where', component: Where }
    ]
})
