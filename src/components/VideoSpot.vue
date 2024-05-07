<template>
    <section>
        <div class="video-banner">
            <video autoplay muted loop class="object-fit-cover video-spot">
                <source :src="videoBackground" type="video/mp4">
            </video>
            <div class="video-content-container">
            <div class="video-content-title" v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }">
                <h1>{{ title }}</h1>
                <h3>{{ intro }}</h3>
            </div>
            <div class="video-content-body" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
                <div class="options-container">
                    <BaseButton :mode="mode">{{ ctaText }}</BaseButton>
                </div>
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
    video: {
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
        videoLg: {
            type: String,
            required: true
        },
        videoSm: {
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
    videoLg, 
    videoSm, 
    mode 
} = props.video;


// computed
const videoBackground = computed(() => {

    return isMobile.value ? `${videoSm}` : `${videoLg}`;
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
.video-banner {
    height: 100vh;
    background-size: cover;
    width: auto;
    position: relative;
    background-position: center;
}
video.object-fit-cover.video-spot {
    width: 100%;
    height: 100%;
       
}
.video-content-container[data-v-ad40a6b4] {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    gap: 45%;
    background: rgba(0, 0, 0, 0.25);
    top: 0;
    z-index: 1;
}
.video-content-title {
    text-align: center;
    padding-top: 35px;
    color: #fff;
}
.video-content-title h3 {
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

@media(max-width: 768px){
    .options-container[data-v-27f2308d] {
        flex-direction: column;
        gap: 12px;
    }

    .options-container[data-v-27f2308d] button {
        width: 250px;
        height: auto;
    }
}

/* Animation */

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