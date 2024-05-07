<template>
    <section class="background-banner" :style="{ backgroundImage: backgroundImg }">
        <div class="content-container">
            <div v-animateonscroll="{ enterClass: 'fadeinleft', leaveClass: 'fadeoutleft' }" class="content-title">
                <h1>{{ model }}</h1>
                <h3>{{ intro }}</h3>
            </div>
            <div class="content-body" v-animateonscroll="{ enterClass: 'fadein', leaveClass: 'fadeout' }">
                <div class="options-container">
                    <BaseButton mode="light">Order Now</BaseButton>
                    <BaseButton mode="dark">Test Drive</BaseButton>
                </div>
                <div class="test-drive-cta-container">
                    <p class="disclamer" v-if="disclaimer">{{ disclaimer }}</p>
                    <a href="#" v-else>Schedule a Test Drive</a>
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
    car: {
        id: {
            type: String,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        intro: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        backgroundImgLg: {
            type: String,
            required: true
        },
        backgroundImgSm: {
            type: String,
            required: true
        },
        disclaimer: {
            type: String,
            required: false
        },
        infoPageImg: {
            type: String,
            required: false
        },
    }
})

const { 
    id , 
    model, 
    intro, 
    description, 
    backgroundImgLg, 
    backgroundImgSm, 
    disclaimer, 
    infoPageImg 
} = props.car;


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

/* Animation */
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

/* Keyframes for fading in */
@keyframes fadein {
  from {
    opacity: 0;
    transform: translateX(-20px); /* Adjust the translateX value as needed */
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

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


.fadeinleft {
  animation-name: fadeinleft;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
}
</style>