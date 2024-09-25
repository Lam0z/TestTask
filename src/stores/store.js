import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";

export const useStore = defineStore("store", () => {
    const taskText = ref("");
    const taskList = ref(JSON.parse(localStorage.getItem("tasks")) || []);

    const addTask = () => {
        if (taskText.value != "") {
            const task = {
                id: Date.now(),
                text: taskText.value,
                isCompleted: false,
                isEdit: false,
                isDeleted: false,
            };
            taskList.value.push(task);
            taskText.value = "";
        }
    };

    const findTask = (id) => taskList.value.find((i) => i.id === id);
    const toggleComplet = (id) =>
        (findTask(id).isCompleted = !findTask(id).isCompleted);
    const toggleEdit = (id) => (findTask(id).isEdit = !findTask(id).isEdit);
    const delTask = (id) => (findTask(id).isDeleted = !findTask(id).isDeleted);
    const getNotCompletedTasks = computed(() =>
        taskList.value.filter((i) => !i.isDeleted)
    );
    watch(
        getNotCompletedTasks,
        (state) => {
            localStorage.setItem("tasks", JSON.stringify(state));
        },
        { deep: true }
    );
    return {
        taskText,
        taskList,
        addTask,
        delTask,
        toggleEdit,
        toggleComplet,
        getNotCompletedTasks,
    };
});
