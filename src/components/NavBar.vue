<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <LogoIcon />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Vehicles</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Energy</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Charging</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Discover</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Shop</a>
                    </li>
                </ul>
                <div class="icons-container">
                    <QuestionIcon />
                    <GlobeIcon />
                    <ProfileIcon />
                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import LogoIcon from "../assets/icons/LogoIcon.vue";
import QuestionIcon from "../assets/icons/QuestionIcon.vue";
import GlobeIcon from "../assets/icons/GlobeIcon.vue";
import ProfileIcon from "../assets/icons/ProfileIcon.vue";


</script>

<style scoped>


</style>