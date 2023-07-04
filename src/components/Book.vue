<template>
    <Field 
        id="weight"
        as="input"
        name="weight"
        rules="required|numeric"
        placeholder="Weight kg"
        class="bg-[#e9c46a] border-2 px-2 border-[#e76f51] rounded text-[#264653]"
    />
    <ErrorMessage name="weight" class="text-[#e76f51]"/>
</template>

<script setup>
import { Field, ErrorMessage} from "vee-validate";

</script>