<template>
    <section class="background-banner" :style="{ backgroundImage: backgroundImg }">
        <div class="content-container">
            <div class="content-title">
                <h1>{{ title }}</h1>
                <h3>{{ intro }}</h3>
            </div>
            <div class="content-body">
                <div class="options-container">
                    <BaseButton :mode="mode">{{ ctaText }}</BaseButton>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import BaseButton from '../ui/slots/BaseButton.vue';
// state
const isMobile = ref(false);

// props
const props = defineProps({
    category: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        intro: {
            type: String,
            required: false
        },
        ctaText: {
            type: String,
            required: true
        },
        backgroundImgLg: {
            type: String,
            required: true
        },
        backgroundImgSm: {
            type: String,
            required: true
        },
        mode: {
            type: String,
            required: true,
            default: 'light'
        },
    }
})

const { 
    id , 
    title, 
    intro, 
    ctaText, 
    backgroundImgLg, 
    backgroundImgSm, 
    mode 
} = props.category;


// computed
const backgroundImg = computed(() => {

    return isMobile.value ? `url(${backgroundImgSm})` : `url(${backgroundImgLg})`;
});
// methods
const handleResize = () => {
    isMobile.value = window.innerWidth < 768;
};
// lifecycle hooks
onMounted(() => {
    window.addEventListener('resize', handleResize);
 
})
onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
})
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
    justify-content: center;
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
.test-drive-cta-container a,
.test-drive-cta-container .disclamer {
    font-size: 12px;
    color: #fff;
}
p.disclamer {
    width: 50%;
    margin: auto;
}
@media(max-width: 768px){
    .options-container[data-v-27f2308d] {
        flex-direction: column;
        gap: 12px;
    }

    .options-container[data-v-27f2308d] button {
        width: 250px;
        height: auto;
    }
    p.disclamer {
        display: none;
}
}
</style>