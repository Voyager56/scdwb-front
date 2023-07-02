<template>
    <Field 
        id="weight"
        as="input"
        name="weight"
        rules="required"
        placeholder="Weight kg"
        class="bg-[#e9c46a] border-2 px-2 border-[#e76f51] rounded text-[#264653]"
    />
</template>

<script setup>
import {Form, Field, ErrorMessage} from "vee-validate";

</script>