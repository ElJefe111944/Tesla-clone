<script setup>
import { reactive } from 'vue';
import carData from "./data/cars.json";
import CategoryData from './data/category.json';
import NavBar from "./components/NavBar.vue";
import ModelBanner from './components/ModelBanner.vue';
import CategorySpot from './components/CategorySpot.vue';

// state
const cars = reactive(carData);
const category = reactive(CategoryData);

</script>

<template>
    <NavBar />
    <ModelBanner :car="cars[0]" />
    <ModelBanner :car="cars[1]" />
    <ModelBanner :car="cars[2]" />
    <CategorySpot :category="category[0]" />
    <ModelBanner :car="cars[3]" />
    <!-- Video Spot - Experience Tesla -->
    <CategorySpot :category="category[1]" />
    <!-- Footer -->
</template>

<style scoped></style>
