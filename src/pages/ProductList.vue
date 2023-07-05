<template>
    <div class="bg-[#264653]">
        <div class="border-b-2 pb-5 border-[#e76f51] ml-5 mr-5 mt-5 flex justify-between px-5 items-center">    
            <h1 class="text-6xl">Product List</h1>
            <div>
                <a href="/add-product" class="mr-5 text-xl border-2 py-2 px-5 border-[#e76f51] rounded">Add</a>
                <button class="text-xl border-2 py-2 px-5 border-[#e76f51]" @click="massDelete">Mass Delete</button>
            </div>
        </div>
        <div class="mx-5 my-5 flex">
            <div v-for="(product, index) in products" class="w-[20rem]">
                <Product :product="product" :key="index" @checked="checkBoxClickedEvent"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Product from '@/components/Product.vue'

const products = ref([])
const checkedProducts = ref([])

fetch('https://scandiweb-levan-mikatadze.000webhostapp.com/product')
    .then(res => res.json())
    .then(data => {
        products.value = data
    })
    .catch(err => console.log(err))


const checkBoxClickedEvent = (id) => {
    if(checkedProducts.value.includes(id)){
        checkedProducts.value = checkedProducts.value.filter(item => item !== id)
    }else{
    console.log(id)
    console.log(checkedProducts.value)
        checkedProducts.value.push(id)
    }
}

const massDelete = () => {
    if(checkedProducts.value.length === 0){
        console.log("No products selected")
        return
    }
    fetch('https://scandiweb-levan-mikatadze.000webhostapp.com/product/massDelete', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(checkedProducts.value)
    })
}


</script>
