<script setup>

const props = defineProps({
    onDelete: Function,
    text: String
})

</script>

<template>
    <div class="flex flex-row">
        <p>
            {{ props.text }}
        </p>
        <button @click="onDelete">Delete</button>
    </div>
</template>