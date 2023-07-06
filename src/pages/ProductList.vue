<template>
    <div class="bg-[#264653]">
        <div class="border-b-2 pb-5 border-[#e76f51] ml-5 mr-5 mt-5 flex justify-between px-5 items-center">    
            <h1 class="text-6xl">Product List</h1>
            <div>
                <a href="/add-product" class="mr-5 text-xl border-2 py-2 px-5 border-[#e76f51] rounded ADD">ADD</a>
                <button class="text-xl border-2 py-2 px-5 border-[#e76f51] MASS DELETE" id="delete-product-btn" @click="massDelete">MASS DELETE</button>
            </div>
        </div>
        <div class="mx-5 my-5 flex">
            <div v-for="(product, index) in products" class="w-[20rem] flex flex-wrap overflow-auto">
                <Product v-model="checkedProducts.index" :product="product" :index="index" :key="index" @checked="checkBoxClickedEvent"/>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Product from '@/components/Product.vue'

const products = ref([])
const checkedProducts = ref({})

fetch('https://scandiweb-levan-mikatadze.000webhostapp.com/product')
    .then(res => res.json())
    .then(data => {
        products.value = data
    })
    .catch(err => console.log(err))


const checkBoxClickedEvent = (id) => {
    if(checkedProducts.value[id]){
        delete checkedProducts.value[id]
    }else{
        checkedProducts.value[id] = id
    }
}

const massDelete = () => {
  if(checkedProducts.value.length === 0){
      console.log('no products selected')
      return
  }
  let form = new FormData()
  document.querySelectorAll('.delete-checkbox').forEach(checkbox => {
      if(checkbox.checked){
        const index = checkbox.parentNode.getAttribute('index')
        const productId = products.value[index].id
        form.append(`ids[]`, productId)
      }
  })

  // if you want to use v-model instead of querySelectorAll but its not working in tests
  // selecting elements and manually setting checked property isn't working with vue

  //   let form = new FormData()
  //   // transform object to array
  //    let productsArray = Object.values(checkedProducts.value)
  //    productsArray.forEach(productId => {
  //         form.append(`ids[]`, productId)
  //    })


    fetch('https://scandiweb-levan-mikatadze.000webhostapp.com/product/massDelete', {
        method: 'POST',
        body: form
    })
        .then(res => res.json())
        .then(window.location.reload())
        .catch(err => console.log(err))
}


</script>
