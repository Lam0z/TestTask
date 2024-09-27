<script setup>
import { useStore } from "@/stores/store";
import { useRoute } from "vue-router";
import { FILMS } from "@/constants/constants";
const store = useStore();
const route = useRoute();
const filmId = route.path.split("/").pop();
store.getFilmInfo(filmId);
</script>
<template>
    <section class="film">
        <div class="container">
            <div><img :src="store.film.posterUrl" alt="" /></div>
            <pre>film ID - {{ store.film }}</pre>
        </div>
    </section>
    <section></section>
    <section class="uplifting"></section>
</template>

<style lang="scss" scoped></style>
