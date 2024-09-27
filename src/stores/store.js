import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import { API_COLLECTIONS_250, API_FILM } from "@/constants/constants";
const HEADERS = {
    headers: {
        "X-API-KEY": "8da41e65-77a9-4390-a6e2-033858f2cb45",
        accept: "application/json",
    },
};
export const useStore = defineStore("store", () => {
    const taskText = ref("");
    const film = ref({});
    const top250Films = ref([]);

    const getCollections = async () => {
        const randomPageNumber = Math.floor(Math.random(10) * 10 + 1);
        const r = await fetch(
            `${API_COLLECTIONS_250}${randomPageNumber}`,
            HEADERS
        );

        if (r.ok) {
            const data = await r.json();
            top250Films.value = data;
        }
    };
    const getFilmInfo = async (filmId) => {
        const r = await fetch(`${API_FILM}${filmId}`, HEADERS);
        if (!r.ok) return;
        const data = await r.json();
        film.value = data;
    };
    return { film, top250Films, getCollections, getFilmInfo };
});
