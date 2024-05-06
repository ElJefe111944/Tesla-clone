<template>
    <section class="background-banner" :style="{ backgroundImage: backgroundImg }">
        <div class="content-container">
            <div class="content-title">
                <h1>Model Y</h1>
                <h3>PCH from £399/mo*</h3>
            </div>
            <div class="content-body">
                <div class="options-container">
                    <BaseButton mode="light">Order Now</BaseButton>
                    <BaseButton mode="dark">Test Drive</BaseButton>
                </div>
                <div class="test-drive-cta-container">
                    <a href="#">Schedule a Test Drive</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';
import BaseButton from '../ui/slots/BaseButton.vue';


const backgroundImg = computed(() => {
    const isMobile = window.innerWidth < 768;

    return isMobile ? 'url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Mobile-Global.jpg)' : 'url(https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png)';
});
</script>

<style scoped>
.background-banner {
    height: 100vh;
    background-size: cover;
    width: auto;
    position: relative;
    background-position: center;
}
.content-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    gap: 45%;
    background: rgba(0, 0, 0, 0.015);
}
.content-title {
    text-align: center;
    padding-top: 35px;
}
.content-title h3 {
    font-size: 20px;
    font-weight: normal;
}
.options-container {
    display: flex;
    gap: 15px;
    width: 100%;
    justify-content: space-between;
}
.options-container button {
    width: 225px;
    height: auto;
}
.content-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.test-drive-cta-container {
    text-align: center;
}
.test-drive-cta-container a {
    font-size: 12px;
    color: #fff;
}
</style>