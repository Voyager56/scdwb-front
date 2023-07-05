<template>
    <Form id="product_form" v-slot="{values, meta}" class="bg-[#264653]">
        <div class="border-b-2 pb-5 border-[#e76f51] ml-5 mr-5 mt-5 flex justify-between px-5 items-center">    
            <h1 class="text-6xl">Product Add</h1>
            <div>
                <button class="mr-5 text-xl border-2 py-2 px-5 border-[#e76f51] rounded disabled:opacity-50 Save" type="button" :disabled="!meta.valid"  @click="addProduct(values)">Save</button>
                <a href="/" class="text-xl border-2 py-2 px-5 border-[#e76f51]">Cancel</a>
            </div>
        </div>
        <div class="flex flex-col w-[20rem] mx-5 mt-5">
            <Field 
                id="sku"
                as="input"
                name="sku"
                rules="required|min:3"
                placeholder="SKU"
                class="bg-[#e9c46a] border-2 px-2 border-[#e76f51] rounded text-[#264653]"
            />
            <ErrorMessage name="sku" class="text-[#e76f51]"/>
            <Field 
                id="name"
                as="input"
                name="name"
                rules="required|min:3"
                placeholder="Name"
                class="bg-[#e9c46a] border-2 px-2 border-[#e76f51] rounded my-2 text-[#264653]"
            />
            <ErrorMessage name="name" class="text-[#e76f51]"/>
            <Field 
                id="price"
                as="input"
                name="price"
                rules="required|min:1|numeric"
                placeholder="Price $"
                class="bg-[#e9c46a] border-2 px-2  border-[#e76f51] rounded text-[#264653]"
            />
            <ErrorMessage name="price" class="text-[#e76f51]"/>
            <Field id="productType" rules="required" name="productType" as="select"  class="bg-[#e9c46a] my-2 text-[#264653]" @change="eventHandler(values)">
                <option value="" disabled>Select a product type</option>
                <option id="DVD" value="dvd">DVD</option>
                <option id="Furniture" value="furniture">Furniture</option>
                <option id="Book" value="book">Book</option>
            </Field>
            <ErrorMessage name="productType" class="text-[#e76f51]"/>
            <selectedTypeComponent/>
        </div>
    </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage, configure } from "vee-validate"
import { shallowRef } from "vue"
import { useRouter } from 'vue-router'
import Book from "@/components/Book.vue"
import DvdDisc from "@/components/DvdDisc.vue"
import Furniture from "@/components/Furniture.vue"

const router = useRouter()


configure({
    validateOnInput: true,
})

const selectedTypeComponent = shallowRef(null)

const addProduct = (values) => {
    const formData = new FormData()
    for (const key in values) {
        formData.append(key, values[key])
    }
    fetch("https://scandiweb-levan-mikatadze.000webhostapp.com/product?" + new URLSearchParams({
        type: values.typeSwitcher,
    }), 
    {
        method: "POST",
        body: formData,
    }).then(
        (response) => {
            if(response.status === 200) {
                router.push("/")
            }
        }
        ).catch((error) => {
            console.log(error)
        }
    )
}

const eventHandler = ({sku, name, price, productType}) => {
    switch (productType) {
        case "dvd":
            selectedTypeComponent.value = DvdDisc
            break
        case "furniture":
            selectedTypeComponent.value = Furniture
            break
        case "book":
            selectedTypeComponent.value = Book
            break
    }
}


</script>