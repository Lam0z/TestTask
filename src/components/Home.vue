<script setup>
import { useStore } from "@/stores/store";
import { FILMS } from "@/constants/constants";
const store = useStore();
store.getCollections();
</script>
<template>
    <section class="films">
        <div class="films__list" v-if="!store.top250Films.length">
            <div class="films__item" v-for="item in store.top250Films.items">
                <RouterLink :to="`/film/${item.kinopoiskId}`"
                    ><img :src="item.posterUrl" alt=""
                /></RouterLink>
            </div>
        </div>
        <div class="films">.films__items</div>

        <pre>{{ FILMS.items }}</pre>
    </section>
</template>

<style lang="scss" scoped>
.films {
    &__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    &__item {
    }
}
</style>
