<script setup>
import { reactive } from 'vue';
import carData from "./data/cars.json";
import NavBar from "./components/NavBar.vue";
import ModelBanner from './components/ModelBanner.vue';

const cars = reactive(carData);

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
</script>

<template>
    <NavBar />
    <ModelBanner :car="cars[0]" />
</template>

<style scoped>

</style>
