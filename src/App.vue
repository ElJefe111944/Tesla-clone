<script setup>
import { reactive } from 'vue';
import carData from "./data/cars.json";

const cars = reactive(carData);
</script>

<template>
<ul>
    <li v-for="car in cars" :key="car.id">{{ car.model }}</li>
</ul>
</template>

<style scoped>

</style>
