<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <LogoIcon />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span class="menu-toggle-cta">Menu</span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <a class="navbar-brand" href="#">
                        <LogoIcon />
                    </a>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
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
                        <li class="nav-item" v-show="hideIcons">
                            <a class="nav-link" href="#">
                                <GlobeIcon /> Language
                            </a>
                        </li>
                        <li class="nav-item" v-show="hideIcons">
                            <a class="nav-link" href="#">
                                <ProfileIcon /> Account
                            </a>
                        </li>
                    </ul>
                    <div class="icons-container" v-show="!hideIcons">
                        <QuestionIcon />
                        <GlobeIcon />
                        <ProfileIcon />
                    </div>
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
import { computed, ref, onMounted, onBeforeUnmount } from "vue";

// state
const isMobile = ref(false);
// computed
const hideIcons = computed(() => {
    return isMobile.value;
});
// method 
const handleResize = () => {
    isMobile.value = window.innerWidth < 991;
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
nav.navbar.navbar-expand-lg {
    padding: 8px 32px;
    background: rgba(0, 0, 0, 0.0);
    position: absolute;
    z-index: 1;
    width: 100%;
}

.navbar-expand-lg ul {
    margin: auto;
}

.navbar-expand-lg ul,
.menu-toggle-cta {
    margin: auto;
    font-size: 14px;
    font-weight: 500;
    color: #000;
    gap: 10px;
}

.navbar-expand-lg ul li a {
    color: #000;
}

.navbar-toggler {
    background: rgba(0, 0, 0, 0.075);
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
}

.icons-container {
    display: flex;
    gap: 10px;
}

@media(max-width: 768px) {
    nav.navbar.navbar-expand-lg[data-v-c3ceb15a] {
        padding: 6px 4px;
    }

    .offcanvas.offcanvas-end {
        left: 0;
        width: 100%;
    }
}
</style>