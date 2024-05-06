<template>
    <section style="background-image: url(&quot;https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Homepage-Model-Y-Desktop-Global.png&quot;);height: 100vh;background-size: cover;width: auto;position: relative;background-position: center;">
        <div class="content-container">
            <div class="title">
                <h1>Model Y</h1>
                <h3>PCH from £399/mo*</h3>
            </div>
            <div class="options-container">
                <button class="btn btn-primary" type="button">Button</button>
                <button class="btn btn-primary" type="button">Button</button>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style scoped>
.content-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 55%;
}
.title {
    text-align: center;
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
</style>