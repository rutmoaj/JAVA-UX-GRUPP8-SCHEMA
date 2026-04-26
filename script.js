import { createApp, ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js"

const WorkerRow = {
    props: ['worker'],
    template: `
        <div class="worker-row">
            <div class="worker-identity">
                <span class="name">{{ worker.name }}</span>
                <span class="title">{{ worker.role }}</span>
            </div>
            <div class="schedule-grid">
                <div v-for="(week, index) in worker.schedule" :key="index" class="week-group">
                    <div v-for="(status, sIndex) in week" :key="sIndex" :class="['box', status]">
                        <span v-if="status === 'absence'">X</span>
                    </div>
                </div>
            </div>
        </div>
    `
};

createApp({
    components: { WorkerRow },
    setup() {
        const selectedProfession = ref('Alla');

        const officeStaff = ref([
            {
                name: "Stefan Mcqueen",
                role: "Säljare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Elsa Frozen",
                role: "Säljare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Åke Fort",
                role: "Ekonom",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            }
        ]);

        const painters = ref([
            {
                name: "Anna Svensson",
                role: "Målare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Vivi Petterson",
                role: "Målare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Hans Hansson",
                role: "Målare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Karin Lasagne",
                role: "Målare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            }
        ]);

        const handyPaint = ref([
            {
                name: "Sara Nilsson",
                role: "Snickare/Målare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Maja Lykta",
                role: "Snickare/Målare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            }
        ]);
        const handyMen = ref([
            {
                name: "Pia Buller",
                role: "Snickare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Tim Ylvarsson",
                role: "Snickare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Fredrik Gunnarsson",
                role: "Snickare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Niklas Åkerberg",
                role: "Snickare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            }
        ]);
        const handyElec = ref([
            {
                name: "Sasha Blå",
                role: "Snickare/Elektriker",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Sam La",
                role: "Snickare/Elektriker",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Emma Pettersson",
                role: "Snickare/Elektriker",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Dennis Greve",
                role: "Snickare/Elektriker",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            }

        ]);

        const electritian = ref([
            {
                name: "Åke Lök",
                role: "Elektriker",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Bo Ken",
                role: "Elektriker",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Örjan Jansson",
                role: "Elektriker",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Wilma Löjvik",
                role: "Elektriker",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Kristoffer Uggla",
                role: "Elektriker",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            }

        ]);
        const sewer = ref([
            {
                name: "Harry Nemo",
                role: "Rörmokare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Wike Gård",
                role: "Rörmokare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "James Charles",
                role: "Rörmokare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            }

        ]);
        const sewerTrump = ref([
            {
                name: "Sven Son",
                role: "Rörmokare/Murare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Rolf Björnsson",
                role: "Rörmokare/Murare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Patrik Sjöstjärna",
                role: "Rörmokare/Murare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            }

        ]);
        const trump = ref([
            {
                name: "Diana Mirakel",
                role: "Murare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Erik Larsson",
                role: "Murare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            },
            {
                name: "Lukas Toffel",
                role: "Murare",
                schedule: [
                    ['booked', 'booked', 'booked', 'booked', 'booked'], // Vecka 20
                    ['half', 'half', 'half', 'half', 'half'],       // Vecka 21
                    ['absence', 'absence', 'absence', 'available', 'available'], // Vecka 22
                    ['available', 'available', 'half', 'half', 'half'] // Vecka 23
                ]
            }

        ]);

        return {
            officeStaff,
            painters,
            handyPaint,
            handyMen,
            handyElec,
            electritian,
            sewer,
            sewerTrump,
            trump,
            selectedProfession
        }
    }
}).mount("#app")