<template>
    <section id="collection" style="padding: 10vh 0">
        <div class="container">
            <div class="pageHeader d-flex flex-column justify-content-center align-items-center pb-4" data-aos="fade-up"
                data-aos-easing="ease-in-out" data-aos-duration="800" data-aos-once="true">
                <div class="mb-2">
                    <h1 style="font-size: 3rem"><i class="icofont-monkey d-none d-lg-inline"></i> 107 Monkeys <i
                            class="icofont-monkey d-none d-lg-inline"></i></h1>
                </div>
                <table class="mb-5" style="border-spacing: 15px; border-collapse: separate;">
                    <tr>
                        <td>--</td>
                        <td>87</td>
                        <td>Randomly Generated</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>--</td>
                        <td>20</td>
                        <td>1 of 1s</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>--</td>
                        <td>Sub</td>
                        <td>100k & 500k</td>
                        <td>--</td>
                    </tr>
                    <tr>
                        <td>--</td>
                        <td>Forever</td>
                        <td>in the blockchain</td>
                        <td>--</td>
                    </tr>
                </table>
                <div class="mb-4">
                    <a href="https://discord.com/channels/1073333131639279708/1073340293253976114" target="_blank"
                        class="btn btn-warning" role="button">Buy Now on Discord</a>
                </div>
                <div class="d-flex justify-content-between w-100">
                    <select class="dropdown" v-model="sort" style="font-size: 1rem">
                        <option value="number" default>Sort: Number</option>
                        <option value="rarity">Sort: Rarity</option>
                    </select>
                    <div class="marketplaces"
                        style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; align-items: center;">
                        <div title="Ordinals Wallet">
                            <a href="https://ordinalswallet.com/collection/ordinal-mb" target="_blank"><img
                                    src="https://ordinalswallet.com/logo-icon.svg" alt="ordinalswallet"></a>
                        </div>
                        <div title="Magic Eden">
                            <a href="https://magiceden.io/ordinals/marketplace/ordinalmb" target="_blank"><img
                                    src="https://magiceden.io/_next/image?url=https%3A%2F%2Fnext.cdn.magiceden.dev%2F_next%2Fstatic%2Fmedia%2Flogo_2.8aa56045.png&w=64&q=75"
                                    alt="magiceden"></a>
                        </div>
                        <div title="Best In Slot">
                            <a href="https://bestinslot.xyz/ordinals/collection/ordinalmb" target="_blank"><img
                                    src="https://bestinslot.xyz/static/footer_icon.png" alt="bestinslot"></a>
                        <div title="Best In Slot">
                            <a href="https://bestinslot.xyz/ordinals/collection/ordinalmb" target="_blank"><img
                                    src="https://bestinslot.xyz/static/footer_icon.png" alt="bestinslot"></a>
                        </div>
                        <div title="Ordinal Hub">
                            <a href="https://ordinalhub.com/collection/ordinal-mb" target="_blank"><img
                                    src="https://www.ordinalhub.com/manifest/favicon-196.png" alt="ordinalhub"></a>
                        </div>
                    </div>
                </div>
            </div>
            <Filter :sortType="sort"></Filter>
        </div>
    </section>
</template>

<script>
// import axios from 'axios'
import nftData from '@/assets/ombInscriptions.json'
import Filter from '@/components/CollectionFilter.vue'
// import _ from 'lodash'
export default {
    data() {
        return {
            collection: nftData,
            sort: 'number'
        }
    },
    components: {
        Filter,
    },
    computed: {
    },
    methods: {
    },
    async mounted() {
    },
};
</script>