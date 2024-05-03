<script setup>
import { reactive } from 'vue';
import carData from "./data/cars.json";
import NavBar from "./components/NavBar.vue"

const cars = reactive(carData);
</script>

<template>
    <NavBar />
</template>

<style scoped>

</style>
