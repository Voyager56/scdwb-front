import { createRouter, createWebHistory } from "vue-router";
import ProductList from "@/pages/ProductList.vue"
import AddProduct from "@/pages/AddProduct.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "ProductList",
            component: ProductList
        },
        {
            path: "/add-product",
            name: "AddProduct",
            component: AddProduct
        }
    ]
});


export default router;