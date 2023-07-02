<template>
    <Field 
        id="length"
        as="input"
        name="length"
        rules="required"
        placeholder="length_cm"
        class="bg-[#e9c46a] border-2 px-2 border-[#e76f51] rounded text-[#264653]"
    />
    <Field 
        id="height"
        as="input"
        name="height"
        rules="required"
        placeholder="height_cm"
        class="bg-[#e9c46a] border-2 px-2 border-[#e76f51] rounded text-[#264653] my-2"
    />
    <Field 
        id="width"
        as="input"
        name="width"
        rules="required"
        placeholder="width_cm"
        class="bg-[#e9c46a] border-2 px-2 border-[#e76f51] rounded text-[#264653]"
    />
</template>

<script setup>
import {Form, Field, ErrorMessage} from "vee-validate";

</script>