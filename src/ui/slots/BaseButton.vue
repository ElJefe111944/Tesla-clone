<template>
    <button class="btn" :class="props.mode" type="button">
        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    mode: {
        type: String,
        required: true,
        default: 'light'
    },
})
</script>

<style scoped>
button.btn {
    font-size: 14px;
    font-weight: 500;
}
.light {
    background-color: rgba(255, 255, 255, 0.8);
    color: black;
}
.dark {
    background-color: rgba(34, 34, 34, 0.65);
    color: rgb(238, 238, 238);
}
button.btn.transparent{
    color: #fff;
    border: 4px solid #fff;
}
</style>