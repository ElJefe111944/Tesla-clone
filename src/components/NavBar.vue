<template>
    <nav class="nav-bar">
        <div class="card">
            <MegaMenu :model="items">
                <template #start class="logo-container">
                    <LogoIcon />
                </template>
                <template #item="{ item }" class="links-container">
                    <a v-if="item.root" v-ripple style="border-radius: 2rem">
                        <span :class="item.icon" />
                        <span style="cursor: pointer; color: black; font-weight: 500; margin-left: 8px; margin-right: 8px;" class="ml-2">{{ item.label }}</span>
                    </a>
                    <a v-else-if="!item.image">
                        <span>
                            <i :class="[item.icon, 'text-lg']"></i>
                        </span>
                        <span style="margin-left: 5px; margin-right: 5px;">
                            <span style="color: black; font-weight: 500;">{{ item.label }}</span>
                            <span>{{ item.subtext }}</span>
                        </span>
                    </a>
                    <div v-else>
                        <img alt="megamenu-demo" :src="item.image" class="w-full" />
                        <span>{{ item.subtext }}</span>
                        <Button :label="item.label" outlined />
                    </div>
                </template>
                <template #end>
                    <div class="icons-container">
                        <QuestionIcon />
                        <GlobeIcon />
                        <ProfileIcon />
                    </div>
                </template>
            </MegaMenu>
        </div>
    </nav>
</template>

<script setup>
import { ref } from "vue";
import MegaMenu from 'primevue/megamenu';
import LogoIcon from "../assets/icons/LogoIcon.vue";
import QuestionIcon from "../assets/icons/QuestionIcon.vue";
import GlobeIcon from "../assets/icons/GlobeIcon.vue";
import ProfileIcon from "../assets/icons/ProfileIcon.vue";

const items = ref([
    {
        label: 'Vehicles',
        root: true,
    },
    {
        label: 'Energy',
        root: true
    },
    {
        label: 'Charging',
        root: true
    },
    {
        label: 'Discovery',
        root: true
    },
    {
        label: 'Shop',
        root: true
    }
]);
</script>

<style scoped>
.nav-bar .card .p-megamenu {
    display: flex;
    justify-content: space-between;
    padding: 25px;
    font-family: "Montserrat", sans-serif;
}
.nav-bar .p-megamenu .p-megamenu-start svg {
    width: 120px;
    height: 24px;
}
.nav-bar .card .p-megamenu .p-megamenu-end .icons-container {
    gap: 10px;
    display: flex;
}

</style>