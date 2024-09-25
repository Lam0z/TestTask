<script setup>
import TheHeader from "./TheHeader.vue";
import TheFooter from "./TheFooter.vue";
</script>
<template>
    <header class="header">
        <TheHeader />
    </header>
    <main class="main">
        <slot></slot>
    </main>
    <footer class="footer bg-body-secondary p-2">
        <TheFooter />
    </footer>
</template>

<style lang="scss" scoped></style>
