import { createApp, ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

createApp({
    setup() {
        const selectedProfession = ref('Alla');

        // Exempeldata
        const workers = ref([
            { 
                name: "Stefan Mcqueen", 
                role: "Säljare", 
                schedule: [
                    ['booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half'] // Vecka 23
                ]
            },
            { 
                name: "Anna Svensson", 
                role: "Målare", 
                schedule: [
                    ['booked', 'booked', 'booked', 'booked'],
                    ['half', 'half', 'half', 'half'],
                    ['absence', 'absence', 'absence', 'available'],
                    ['available', 'available', 'available', 'available']
                ]
            }
            // Fyll på med fler hantverkare här...
        ]);

        const stats = ref([
            { label: 'Lediga', value: '8 personer' },
            { label: 'Delvis bokade', value: '6 personer' },
            { label: 'Fullt bokade', value: '10 personer' },
            { label: 'Frånvarande', value: '4 personer' }
        ]);

        return { workers, stats, selectedProfession }
    }
}).mount("#app")