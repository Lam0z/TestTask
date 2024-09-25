<script setup>
import { useStore } from "@/stores/store";
const store = useStore();
</script>

<template>
    <section class="header">
        <nav class="navbar bg-primary navbar-expand-md" data-bs-theme="dark">
            <div class="container">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <form
                        class="d-flex w-100"
                        role="search"
                        @submit.prevent.enter="store.addTask"
                    >
                        <input
                            class="form-control me-2"
                            type="Add task"
                            placeholder="Input your task here"
                            aria-label="Search"
                            v-model="store.taskText"
                        />
                        <button class="btn btn-success" type="submit">
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </section>
</template>

<style lang="scss" scoped>
.navbar-brand {
    img {
        max-width: 100px;
    }
}
</style>
