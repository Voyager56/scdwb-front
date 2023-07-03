<template>
    <div class="border-[#e76f51] py-2 px-3 border mx-5 flex flex-col items-center break-all">
        <p>{{ product.sku }}</p>
        <p>{{ product.name }}</p>
        <p>{{ product.price }} $</p>
        <p>{{ productTypeMessage }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    product: Object,
})

let productTypeMessage = "";

const productType = props.product.type.split("\\").pop()
switch(productType){
    case "DvdDisc":
        productTypeMessage = "Size: " + props.product.size + " MB"
        break;
    case "Furniture":
        productTypeMessage = "Dimensions: " + props.product.height + "x" + props.product.width + "x" + props.product.length
        break;
    case "Book":
        productTypeMessage = "Weight: " + props.product.weight + "KG"
        break;
    default:
        productTypeMessage = "Unknown product type"
        break;
}

</script>