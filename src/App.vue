<script setup>
import { reactive } from 'vue';
import carData from "./data/cars.json";
import NavBar from "./components/NavBar.vue";
import ModelBanner from './components/ModelBanner.vue';

const cars = reactive(carData);

</script>

<template>
    <NavBar />
    <ModelBanner />
</template>

<style scoped>

</style>
