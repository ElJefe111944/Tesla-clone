<template>
    <section class="background-banner" :style="{ backgroundImage: backgroundImg }">
        <div class="content-container">
            <div class="content-title" v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }">
                <h1>{{ title }}</h1>
                <h3>{{ intro }}</h3>
            </div>
            <div class="content-body" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
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
    .options-container {
        flex-direction: column;
        gap: 12px;
    }

    .options-container button {
        width: 250px;
        height: auto;
    }
    p.disclamer {
        display: none;
}
}

/* Animation */
/* Applying the animation to the enter class */
.fadein {
  animation-name: fadein;
  animation-duration: 1s; /* Adjust duration as needed */
  animation-fill-mode: both; /* Keeps the element at the end state after the animation completes */
  animation-timing-function: ease-out; /* Adjust timing function as needed */
}

/* Keyframes for fading out */
@keyframes fadeout {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(20px); /* Adjust the translateX value as needed */
  }
}

/* Applying the animation to the leave class */
.fadeout {
  animation-name: fadeout;
  animation-duration: 1s; /* Adjust duration as needed */
  animation-fill-mode: both;
  animation-timing-function: ease-in; /* Adjust timing function as needed */
}

@keyframes fadeinleft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeinleft {
  animation-name: fadeinleft;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}
</style>