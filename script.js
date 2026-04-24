import { createApp, ref, onMounted }
    from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

createApp({
    setup() {
        const workers = ref([])

        onMounted(async () => {
            try {
                const resp = await fetch("https://yrgo-web-services.netlify.app/bookings")
                workers.value = await resp.json()
            } catch (err) {
                console.error(err)
            }
        })

        return { workers }
    }
}).mount("#app")