<template>
    <div id="DVD" class="flex flex-col">
        <Field 
            id="size"
            as="input"
            name="size"
            rules="required|numeric"
            placeholder="Size MB"
            class="bg-[#e9c46a] border-2 px-2 border-[#e76f51] rounded text-[#264653]"
        />
        <ErrorMessage name="size" class="text-[#e76f51]"/>
    </div>
</template>

<script setup>
import { Field, ErrorMessage} from "vee-validate";

</script>