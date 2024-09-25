<script setup>
import { useStore } from "@/stores/store";
const store = useStore();
</script>
<template>
    <section class="tasks">
        <div class="container">
            <div class="tasks__list">
                <template v-if="store.getNotCompletedTasks.length">
                    <div
                        class="tasks__item alert d-flex justify-content-between gap-2"
                        :class="
                            task.isCompleted
                                ? 'alert-success text-decoration-line-through'
                                : 'alert-secondary'
                        "
                        v-for="(task, idx) in store.getNotCompletedTasks"
                        :key="idx"
                    >
                        <div class="tasks__item-text" v-if="!task.isEdit">
                            {{ task.text }}
                        </div>
                        <input
                            v-else
                            type="text"
                            class="form-control"
                            v-model="task.text"
                        />
                        <div class="tasks__btn-groups">
                            <button
                                class="btn tasks__item-check"
                                v-show="!task.isEdit"
                                @click="store.toggleComplet(task.id)"
                            ></button>
                            <button
                                class="btn tasks__item-edit"
                                @click="store.toggleEdit(task.id)"
                            ></button>
                            <button
                                class="btn tasks__item-close"
                                @click="store.delTask(task.id)"
                                v-show="!task.isEdit"
                            ></button>
                        </div>
                    </div>
                </template>
                <template v-else>
                    <div
                        class="tasks__item alert alert-danger d-flex justify-content-center"
                    >
                        <div class="tasks__item-text">
                            Task list is empty ☝
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.tasks {
    &__list {
    }

    &__item {
    }

    &__item-text {
    }
    .btn {
        padding: 10px;
    }
    &__item-edit {
        background: url(../assets/img/edit.svg) no-repeat center/cover;
    }
    &__item-close {
        background: url(../assets/img/close.svg) no-repeat center/cover;
    }
    &__item-check {
        background: url(../assets/img/check.svg) no-repeat center/cover;
    }
    &__btn-groups {
        display: flex;
        gap: 10px;
        align-items: center;
    }
}
.container {
}
.alert {
}
.alert-info {
}
.d-flex {
}
.justify-content-between {
}
.btn {
}
.btn-primary {
}
.rounded-circle {
}
.btn-close {
}
</style>
