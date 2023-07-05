<template>
    <div id="Furniture" class="flex flex-col">
        <Field 
            id="length"
            as="input"
            name="length"
            rules="required|numeric"
            placeholder="length_cm"
            class="bg-[#e9c46a] border-2 px-2 border-[#e76f51] rounded text-[#264653]"
        />
        <ErrorMessage name="length" class="text-[#e76f51]"/>
        <Field 
            id="height"
            as="input"
            name="height"
            rules="required|numeric"
            placeholder="height_cm"
            class="bg-[#e9c46a] border-2 px-2 border-[#e76f51] rounded text-[#264653] my-2"
        />
        <ErrorMessage name="height" class="text-[#e76f51]"/>
        <Field 
            id="width"
            as="input"
            name="width"
            rules="required|numeric"
            placeholder="width_cm"
            class="bg-[#e9c46a] border-2 px-2 border-[#e76f51] rounded text-[#264653]"
        />
        <ErrorMessage name="width" class="text-[#e76f51]"/>
    </div>
</template>

<script setup>
import {Field, ErrorMessage} from "vee-validate"

</script>